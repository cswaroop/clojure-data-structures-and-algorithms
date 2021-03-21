(ns recipe20.core
  (:require [pl.danieljanus.tagsoup :as http-parser]
            [clojure.core.async :as async :refer :all :exclude [into]]
            [clojure.zip :as z]))

(defn fq-url
  [domain url]
  (let [protocol (first  (clojure.string/split url #"/"))]
    ;; Find the first of the tokens separated
    ;; by / in the given url.
    (if (not (some #{protocol} ["https:" "http:" "mailto:"]))
      ;; if it's not https, http or mailto
      (str domain "/" url)
      ;; append domain to it
      url))) ;; else return it as is.

(defn scrape-target-for-hrefs
  [target-path] 
  (let [target (last target-path)
        ;; Target path is a vector containing [url-source url-target]
        ;; we are going to parse the second part of it, url-target
        html-tree (try  (http-parser/parse target) (catch Exception e nil))
        ;; We safely parse this URL, guarding ourselves
        ;; from http errors
        zpr (z/zipper vector? #(filter vector? %) conj html-tree)
        ;; Provided that the parse tree is of the form
        ;; [:tag {:property1 "XYZ"}]
        ;; The zipper wil have the following constructor functions:
        ;; 1. We now that the branch? function is a vector?, that is, a function
        ;;    that tells if a particular node can have children
        ;; 2. The children function is one who return only a seq vector elements
        ;;    and the make-node function is simply conj, as to make a branch
        ;; 3. With children you must just conj  vectors inside another vector
        url (java.net.URL. target)
        domain (.getHost  url)
        protocol (.getProtocol url)
        ;; Using a JAva URL object
        ;; we collect several information about
        ;; the url
        fqd (str protocol "://" domain)]
    (loop [output #{}
           loc (-> zpr z/down)]
      ;; We initiate the recursive
      ;; descent into the zipper
      ;; used to walk the html-tree
      (if (nil? loc)
        nil ;; if loc is nil?
            ;; html-tree must not have
            ;; been constructed due to a
            ;; http exception
        ;; ELse, loc is not nil
        (if (z/end? loc)
          output ;; end of the walk, return output 
          (let [tag (get (z/node loc) 0)
                a-href (get-in (z/node loc) [1 :href] )
                ;; get the current tag and if any,
                ;; a :href property inside the properties
                ;; map, that comes in the second position
                ;; (1) in the node vector
                new-output (if (and (= tag :a)
                                    (not (nil? a-href)))
                             ;; if it is [a {:href ...} 
                             (conj output [target (fq-url fqd a-href)])
                             ;; add this href, well formatted, into output
                             output)]
                             ;; else return same thing
            (recur new-output
                   (z/next loc)))))))) ;; and recur to the next node in the zipper

(defn scrape-targets
  [targets]
    (loop [remaining-t targets
           output #{}]
      ;; loop through the targets
      ;; one after the other
      (if (not (seq remaining-t))
        output;; we are done; return result
        (let [new-ts (scrape-target-for-hrefs (first remaining-t))]
          ;; Get the hrefs in this current target
          ;; and recur over the rest, appending them
          ;; to the final output
          (recur (rest remaining-t)
                 (concat output new-ts))))))

(defn async-scrape-targets
  [ch-timeout targets]
  (let [c (timeout ch-timeout)]
    ;; We use a timeout channel so
    ;; we avoid to wait undefinitely
    ;; for slow connections
    (doseq [t targets]
      ;; for each target
      (go  (>! c (scrape-target-for-hrefs t))))
      ;; launch a co-routine that asynchronously launches
      ;; a scraping operation and puts the results, once they're
      ;; ready, into the channel
    (loop [cur-t 0
           output #{}]
      ;; we loop as many times
      ;; as the number of targets 
      (if (= cur-t (count targets))
        output ;; end of the looping, we
               ;; return output
        (let [new-ts (<!! c)]
          ;; every time, wait for something new from
          ;; the channel, and when it lands, recur
          ;; to wait for the next one
          (recur (inc cur-t)
                 (concat output new-ts)))))))

;; a helper function scraping targets with a 10s timeout
(def async-scrape-targets-10s (partial async-scrape-targets
                                       10000))
(def async-scrape-targets-20s (partial async-scrape-targets
                                       20000))
(defn run-spider
  [start max-depth scrape-target-fn]
  ;; We loop beginning by a first scraping
  ;; of our starting set of target paths, 
  (loop [targets (scrape-target-fn start)
         output #{}
         cur-depth 0]
    (if (= cur-depth max-depth)
      output ;; if we reached max-depth, we return output
      (let [new-targets (scrape-target-fn targets)]
        ;; elese we scrape again what we just
        ;; discovered, appending them to the result
        ;; and incrementing current level of depth
        ;; so we can end the recursion.
        (recur new-targets
               (into output new-targets)
               (inc cur-depth))))))

;;(time (count (run-spider [["http://www.clojure.tn"]] 2 scrape-targets )))


;;(time (count (run-spider [["http://www.clojure.tn"]] 2 async-scrape-targets-10s )))

