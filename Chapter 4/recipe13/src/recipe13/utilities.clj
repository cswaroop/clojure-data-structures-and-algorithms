; general utilities that will be used in the project

(ns recommendor-ng.utilities)

(defn apply-fn-to-map-vals
  " applies function f to map m values and returns the resulting map"
  [f m] 
  (into  {}
          (map (fn [[k v]] [k (f v)]) m))) 

(defn pt->dash
  [s]
  (clojure.string/replace s "." "-"))

(defn apply-fn-to-map-keys
  " applies function f to map m values and returns the resulting map"
  [f m] 
  (into  {}
        (map (fn [[k v]] [(f k) v]) m))) 

(def merge-recommendations (partial merge-with +))

(defn new-keyword-from-keywords
  [& seq-keywords]
  
  (keyword (reduce str (interpose ":"  (map name
                                         seq-keywords)))))
