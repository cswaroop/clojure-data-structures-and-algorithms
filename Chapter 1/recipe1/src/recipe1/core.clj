(ns recipe1.core
  (:require [clojure.set :as cset]))

(defn expand
  [the-vector
   distance
   length]
  (let [end (count the-vector)
        start (- end
                 distance)
        pattern (subvec the-vector
                        start
                        end)]
    (into [] (take length
                      (cycle pattern)))))


(defn un-LZ77
  [bytes]
  (loop [result []
         remaining bytes]
    (if (seq remaining)
      (let [current (first remaining)
            the-rest (rest remaining)]
        (if-not (vector? current)
          (recur (conj result
                       current)
                 the-rest)
          (recur (into result (expand result
                                      (current 0)
                                      (current 1)))
                 the-rest)))
      result)))

(defn gen-all-sub-arrays
"Here we'll generate sets of all possible contiguous subsets"
  [byte-array]
  (let [times (inc (count byte-array))]
    (set (mapcat #(partition %
                             1
                             byte-array)
                 (range 1
                        times)))))

(defn all-subvecs-from-beginning
  [v]
  (set (map #(subvec v 0 %)
            (range 1 (inc (count v))))))

(defn all-subvecs
  [v]
  (loop [result #{}
         remaining v]
    (if (seq remaining)
      (recur (into result
                   (all-subvecs-from-beginning remaining))
             (into[]  (rest remaining)))
      result)))

(defn longest-match-w-beginning
  [left-array right-array]
  (let [all-left-chunks (all-subvecs left-array)
        all-right-chunks-from-beginning
        (all-subvecs-from-beginning right-array)
        all-matches (cset/intersection all-right-chunks-from-beginning
                                       all-left-chunks)]
    (->> all-matches
         (sort-by count >)
         first)))

(defn pos-of-subvec
  "Give the position where a subvector occurs within a vector"
  [sv v]
  {:pre [(<= (count sv)
             (count v))]}
  (loop
      [cursor 0]
    (if (or (empty? v)
            (empty? sv)
            (= cursor   (count v)))
      nil
      (if (= (subvec v cursor
                     (+ (count sv)
                        cursor)) sv)
        cursor
        (recur (inc cursor))))))

(defn LZ77-STEP
  [window look-ahead]
  (let [longest (longest-match-w-beginning window
                                           look-ahead)]
    (if-let [pos-subv-w (pos-of-subvec longest
                                       window)]
      (let [distance (-  (count window) pos-subv-w)
            pos-subv-l (pos-of-subvec longest
                                      look-ahead)
            the-char (first (subvec look-ahead
                                    (+ pos-subv-l
                                       (count longest))))]

        {:distance distance
         :length (count longest)
         :char the-char})

      {:distance 0
       :length 0
       :char (first look-ahead)})))

(defn LZ77
[bytes-array
 window-size]
(->> (loop [result []
            cursor 0
            window []
            look-ahead bytes-array]
       (if (empty? look-ahead)
         result
         (let [this-step-output (LZ77-STEP window look-ahead)
               distance (:distance this-step-output)
               length (:length this-step-output)
               literal (:char this-step-output)
               raw-new-cursor (+ cursor
                                 length
                                 1)
               new-cursor (min raw-new-cursor
                               (count bytes-array))
               new-window (subvec bytes-array
                                  (max 0 (inc (- new-cursor
                                                 window-size)))
                                  new-cursor)
               new-look-ahead (subvec bytes-array
                                      new-cursor )]
           (recur (conj result
                        [distance length]
                        literal)
                  new-cursor
                  new-window
                  new-look-ahead))))
     (filter (partial
              not=
              [0 0]))
     (filter (comp
              not
              nil?))
     (into [])))
