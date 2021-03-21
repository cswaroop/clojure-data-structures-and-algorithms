(ns recipe15.core)
;; graph -> {:s {:a 2 :b 3} a {:b 1 :c 3} :c {:t 20 :d 4} }
;; paths -> {:a {:dist 4 :prev :v}} ...

(defn update-dist-of-neighbor
  [node
   neighbor
   dist-from-source
   dist-from-node
   current-dist-in-path]
  (let [dist-through-node (+ dist-from-source dist-from-node)]
    (if (or  (nil? current-dist-in-path)
             (and  (not (nil? current-dist-in-path))
                   (< dist-through-node current-dist-in-path)))
      {neighbor {:dist dist-through-node :prev node}})))

(defn process-node
  [graph
   current-node
   path]
  (let [neighbors (get graph current-node)
        dist-from-source (if-let [curnode-in-path (get path current-node)]
                    (get curnode-in-path :dist)
                    0);; This is the source node, so we'll give it 0
                      ;; as distance 
        new-path (->> neighbors ;; for each of its neighbors
                      (map (fn [[neighbor dist-to-cur-node]]
                             (update-dist-of-neighbor current-node
                                                      neighbor
                                                      dist-from-source
                                                      dist-to-cur-node
                                                      (get (get path neighbor) :dist))))
                      ;; we'll compute the new distance and previous node
                      ;; using the utility function (update-dist-of-neighbor)
                      (into path))]
                     ;; which we'll return as new-path 
    new-path))


(defn dijkstra
  [graph]
  (loop [remaining-vertices (keys graph)
         path {}]
    (if (seq remaining-vertices)
      (let [current-vertex (first remaining-vertices)]
        ;; for every node we process its neighbors
        ;; using process-node
        (recur (rest remaining-vertices)
               (process-node graph current-vertex path)))
      path))) 

(defn shortest-path
 [graph source target]
 (let [dijkstra-shortest-paths (dijkstra graph)]
   ;; we compute the shortest paths 
   (loop [new-target (get dijkstra-shortest-paths target)
          ;; We begin from target
          path [target]]
     (let [next-new-target (get new-target :prev)]
       ;; and get back to the previous node
       (cond (nil? next-new-target) :error ;; we did not find a :prev reference
             (= next-new-target source) (into [source] path) ;; we are done,
                                                             ;; we return the path
             :default (recur (get dijkstra-shortest-paths
                                  next-new-target) ;; we recur using the previous node
                             ;; and adding it to the result path
                             (into [next-new-target] path))))))) 
