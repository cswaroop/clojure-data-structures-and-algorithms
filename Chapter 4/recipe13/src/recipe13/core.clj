(ns recipe13.core
  (:require [clojure.set]))

(defn corr-matrix-delta
  [this-item
   sim-map]
  (let [s-sim-map (dissoc sim-map this-item)]
    ;; in cas sim contains the item, we remove it
    (if (seq s-sim-map)
      ;; if this map contains elements
      (let [line-this-item {this-item s-sim-map}
            ;; we generate the line this-item : item1 similarity1 item2 similarity2...
            lines-sim-map (into {} (map (fn [[k v]]
                                          {k {this-item v}})
                                        s-sim-map))]
        ;; and the lines item1 : this-item similarity1
        ;;               item2 : this-item similarity2
        (conj lines-sim-map line-this-item))
      ;; end we return that delta to be applied when we receive
      ;; this item and we had that similarity map
      {})))

(defn update-corr-matrix
  [corr-matrix
   this-item
   sim-map]
  (merge-with (partial merge-with +)
              ;; we apply delta, adding to the items
              ;; we already have the new values that
              ;; came along with this new item occurrence
              corr-matrix
              (corr-matrix-delta this-item sim-map)))

(defn update-cooc-matrix
  [corr-matrix
   this-item
   session-map]
  (let [cooc-sim (zipmap (keys session-map)
                         (repeat 1))]
    ;; cooc-sim is a particular similarity map:
    ;; we add 1 to the relation this-item->a session item
    ;; so to compute the times they occurred together
    (update-corr-matrix corr-matrix this-item cooc-sim)))



(defn apply-fn-to-map-vals
  " applies function f to map m values and returns the resulting map"
  [f m] 
  (into  {}
          (map (fn [[k v]] [k (f v)]) m))) 

(defn recommend-for-an-item
  [corr-matrix
   this-item
   pref]
  (if-let [items->this-item (corr-matrix this-item) ]
    ;; if we find an entry in this correlation matrix for this item
    ;; We begin by getting the elements related to this element
    ;; in the correlation matrix
    (->> items->this-item
         (apply-fn-to-map-vals (partial * pref)))
    ;; we multiply the correlation by the preference
        
    ;; else we return an empty map
    {}))


(defn recommend-for-a-prefs-map
  [corr-matrix
   pref-maps]
  (->> pref-maps
       (map  (fn [[item pref]] (recommend-for-an-item corr-matrix
                                                      item
                                                      pref)))
       ;; We compute a recommendation for every item taking in consideration
       ;; it preference
       (reduce (partial merge-with +))))
       ;; And then we merge them into a single map to come up with the final
       ;; Recommendation 
