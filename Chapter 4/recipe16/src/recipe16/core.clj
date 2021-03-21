(ns recipe16.core
  (:import (java.io BufferedReader FileReader))
  (:import java.io.File)
  ;; So we are able to read our text documents
  (:refer-clojure :exclude [* - + == /])
  (:require [clojure.java.io :refer (file)]
            [clojure.string :refer (split)]
            ;; so we are able to use matrices operations
            [clojure.core.matrix :refer :all]
            [clojure.core.matrix.operators :refer :all]))





;; these documents must be sets of words.
(defn word-in-nb-documents
  [word documents]
  (->> documents 
       (filter #(contains?  % word))
       count))

(defn idf-words
  [documents]
  (let [N (count documents)
        all-docs-words (apply clojure.set/union
                              (mapv set documents))]
    (->> all-docs-words
         (map (fn[w]  {w (Math/log (/ N
                                      (word-in-nb-documents w
                                                            documents)))}))
         (into {}))))


(defn sentences-in-document
  "This function extracts the sentences in a particular document"
  [file]
  (with-open [rdr (BufferedReader. (FileReader.  file))] 
    (->> (line-seq rdr)
         (map clojure.string/trim)
         (mapcat #(split % #"[.|!|?|:]+"))
         (mapv clojure.string/lower-case))))

(defn gen-docs-w-sentences
  "This function takes a path and generates a vector of
  a vector of sentences, as per the documents containing
  them"
  [path]
  (let [files (.listFiles (File. path))]
    (mapv sentences-in-document 
          files)))

(defn words-in-document-sentences
  "This function extracts the words from all document sentences "
  [document-sentences] 
  (mapcat #(split % #"[\s|,|;]") document-sentences ))

(defn gen-idf-map-from-docs-sentences
  "This function generates a map with all words IDF"
  [documents-w-sentences]
  (let [documents-w-words (map set (map words-in-document-sentences
                                        documents-w-sentences))]
    (idf-words documents-w-words)))

;; a sentence is a vector of words.
(defn tfidf-vector-from-sentence
  ;; for this one you must compute idf beforehand
  [idf-map sentence]
  (let [sentence-words (split sentence #"[\s|,|;|:]+")
        tf-sentence  (->> sentence-words
                          (map (fn [k] {k 1}))
                          (reduce (partial merge-with +)))]
    ;; We compute  the TF for the words based on their
    ;; frequency in every sentence
    (->> tf-sentence
         (map (fn [[k v]] { k (* v (get idf-map k))} ))
         ;; and then we generate TFIDF maps for each
         ;; sentence, referred by words. These
         ;; will be the vectors representing our sentences
         (into {}))))

;;sentence1 and sentence2 are two maps with their tf/idf
(defn cosine-similarity
  [tfidf-sentence1 tfidf-sentence2]
  (let [common-words (clojure.set/intersection (set (keys tfidf-sentence1))
                                               (set (keys tfidf-sentence2)))
        ;; we use common words because we don't have to multiply
        ;; by 0 
        s1-common (select-keys tfidf-sentence1 common-words)
        s2-common (select-keys tfidf-sentence2 common-words)

        Ss1Xs2 (reduce + (vals  (merge-with * s1-common s2-common)))
        sqrt-Ss1pow2 (->> (vals tfidf-sentence1)
                          (map  #(Math/pow % 2))
                          (reduce +  )
                          Math/sqrt)
       
        sqrt-Ss2pow2 (->> (vals tfidf-sentence2)
                          (map  #(Math/pow % 2))
                          (reduce +  )
                          Math/sqrt)]
    (if (every? (comp not zero?)
                [sqrt-Ss1pow2 sqrt-Ss2pow2] )
      (/ Ss1Xs2 (* sqrt-Ss1pow2 sqrt-Ss2pow2))
      0)))


(defn power-method
  [mat error]
  (let [size (dimension-count mat 0)]
    (loop [p (matrix (into [] (repeat size
                                      (/ 1 size))))]
      (let [new-p (mmul (transpose mat) p)
            sigma (distance new-p p)]
        (if (< sigma error)
          new-p
          (recur new-p))))))

(defn lexrank
  [path
   cosine-threshold
   lexrank-error
   topN]
  (let [sentences-by-docs (gen-docs-w-sentences path)
        idf-map (gen-idf-map-from-docs-sentences
                 sentences-by-docs)
        all-sentences (into [] (mapcat  identity sentences-by-docs))
        sentences-w-tfidf (into [] (reduce concat
                                           (for [s sentences-by-docs]
                                             (map (partial tfidf-vector-from-sentence
                                                           idf-map)
                                                  s))))
        ;; We begin by representing all of our sentences
        ;; as TFIDF vectors
        cent-raw-matrix (matrix  (into [] (for [i sentences-w-tfidf]
                                            (into [] (for [j sentences-w-tfidf]
                                                       (let [cos-sim-i-j
                                                             (cosine-similarity  i j)]
                                                         (if (>= cos-sim-i-j
                                                                 cosine-threshold)
                                                           cos-sim-i-j
                                                           0)))))))
        ;; We build a centrality raw matrix as the relationship
        ;; between every couple of sentences.
        ;; if similarity is superior than threshold,
        ;; we put it for the corresponding sentences,
        ;; else, we put zero.
        degrees (->> (rows cent-raw-matrix)
                   (mapv (partial reduce +)))
        ;; We compute the degrees for every row, as the number of not null elements
        centrality-matrix (matrix  (into []
                                         (for [i (range (count degrees))]
                                           (/  (get-row cent-raw-matrix i)
                                               (get degrees i)))))
        ;; We compute the matrix labeled B in the description,
        ;; dividing each element by the degree of the row
        lexrank-vector (power-method centrality-matrix lexrank-error)
        ;; We apply the powermethod 
        lexrank-v-w-indices (zipmap (iterate inc 0) lexrank-vector)]
        ;; We assign indices to the sentences in the lexrank vector
        ;; so we are able to retrieve them
    (->> (sort-by val > lexrank-v-w-indices)
         (take topN)
         (map #(get % 0))
         ;; and we show the sentences corresponding to
         ;; the topN first highest LexRank Scores
         (map #(get all-sentences %)))))


