(ns recommendor-ng.computation
  (:require [clojure.set])
  (:require [recommendor-ng.utilities :as utils]))

(defn corr-matrix-delta
  "the item is similar by sim-map {:itemx x similarity y} this
  generates a matrix this-item -> itemX x, itemY y...  itemX ->
  this-item x itemY -> this-item y..."
    [this-item
     sim-map]
    (let [s-sim-map (dissoc sim-map this-item)]
      (if (seq s-sim-map)
        (let [line-this-item {this-item s-sim-map}
              lines-sim-map (into {} (map (fn [[k v]]
                                            {k {this-item v}})
                                          s-sim-map))]
          (conj lines-sim-map line-this-item))
        {})))

(defn update-corr-matrix
  [corr-matrix
   this-item
   sim-map]
  (merge-with (partial merge-with +)
              corr-matrix
              (corr-matrix-delta this-item sim-map)))

(defn update-cooc-matrix
  "this fn gets a matrix, a map representing a user session, updates
  as similarity vector being this items occured exactly once with each
  of the elements of the history"
  [corr-matrix
   this-item
   session-map]
  (let [cooc-sim (zipmap (keys session-map)
                         (repeat 1))]
    (update-corr-matrix corr-matrix this-item cooc-sim)))

(defn recommend-for-an-item
  "I love this-item by preference pref. Given a correlation matrix,
 Recommend me something"
  [corr-matrix
   this-item
   pref]
  (if-let [items->this-item (corr-matrix this-item) ]
    ;; I get you a line where I multiply likelihood of elements by your pref for this item.
    (->> items->this-item
         (utils/apply-fn-to-map-vals (partial * pref))
         (sort-by val >)
         (into {}))
    ;; else I return an empty map
    {}))


(defn recommend-for-a-prefs-map
  "given a pref-maps (like a user session, i.e) what would I
  recommend?"
  [corr-matrix
   pref-maps]
  (->> pref-maps
       (map  (fn [[item pref]] (recommend-for-an-item corr-matrix
                                                      item
                                                      pref)))
       (reduce utils/merge-recommendations)))
