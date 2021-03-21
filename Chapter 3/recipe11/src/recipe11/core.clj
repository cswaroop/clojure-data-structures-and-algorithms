(ns recipe11.core
  (:require [clojure.core.match :refer [match]]))

(defn concat-ropes
  [rope1 rope2]
  (match [rope1 rope2]
         [[] r2] r2
         [r1 []] r1
         [nil r] r
         [r nil] r
         [{:short left-s-str}
          {:short short-str} ] [{:concat (count left-s-str)}
                                [{:short left-s-str}
                                 {:short short-str}]]
          
         [[{:concat _}
           [([{:concat len-left-c}
              [s-s-left [{:concat s-s-right-l} _]]] :as left-son)
            {:short right-son}]]
          
          {:short short-str} ] [{:concat
                                 (+ len-left-c s-s-right-l)}
                                [left-son
                                 [{:concat (count right-son)}
                                  [{:short right-son}
                                   {:short short-str}]]]]
          
          [[{:concat _}
            [([{:concat len-left-c}
               [s-s-left {:short s-right} ]] :as left-son)
             {:short right-son}]]
           {:short short-str}] [{:concat
                                 (+ len-left-c
                                    (count s-right))}
                                [left-son [{:concat (count right-son)}
                                           [{:short right-son}
                                            {:short short-str}]]]]
          [[{:concat rope-len}
            [left-son
             [{:concat len-r-c } _]]]
           {:short short-str} ] [{:concat (+ rope-len len-r-c)}
                                 [rope1 {:short  short-str}]]
           
         [[{:concat rope-len} [{:short l-son}
                               {:short r-son}]]
          
          {:short short-str} ] [{:concat (+ rope-len
                                            (count r-son))}
                                [rope1 {:short short-str}]]
          
          [[{:concat len1}
            [_ [{:concat len2 } _]]] _] [{:concat (+ len1 len2)}
                                         [rope1 rope2]]
            
          [[{:concat len1}
            [_ {:short str2}]] _] [{:concat (+ len1 (count str2))}
                                   [rope1 rope2]]
            
          [{:short str} _] [{:concat (count str)}
                            [rope1 rope2]]
          [[{:concat l1} _] [{:concat _} [_ [{:concat l2} _ ]]]] [{:concat (+  l1 l2)} [rope1 rope2]]
          [[{:concat l1} _] [{:concat _} [_ {:short s2}]]] [{:concat (+  l1 (count s2))} [rope1 rope2]]))


(defn get-from-rope-at-index
  [rope index]
  (loop [current-rope rope
         current-index index
         path []]
    (let [current-node (if (vector? current-rope)
                         (first current-rope )
                         current-rope)]
      ;;=> We are representing our ropes as vectors
      ;;   of vectors, and at times we may find shorts
      ;;   that are maps. hence, the test above.
      (if (not (nil? (get  current-node :concat)))
        ;;=> we are at a concat node
        (if (< (get current-node :concat)   current-index )
          (recur (get  (second current-rope) 1)
                  (- current-index  (:concat current-node))
                  (conj path 1 1));=> We recur right, index > concat val
          (recur (get (second current-rope) 0 )
                 current-index
                 (conj path 1 0)));=> We recur left,
        (let [current-str (:short  current-node )
              max-idx ( count current-str)]
          (if (and  (<=   current-index max-idx)
                    (>=   current-index 1)) ;=> if index in interval
            {:char (str  (nth  current-str  (dec  current-index)))
             :short current-str
             :path path
             :idx-in-str   (dec  current-index)}  ;=> we return a map containing
                                         ;   all the information
            nil))))))                    ; else we return nil



(defn parent-path
  [path]
  ;;=> returns the path to this
  ;;   path's parent.
  (if (empty? path)
    nil
    (if (empty? (pop path))
        nil        
        (-> path pop pop))))

(defn unlink-right-child
  [rope]
  ;;=> returns the node without
  ;;   its right child.
  (let [parent (get rope 0)
        children (get rope 1)]
    [parent (pop children)]))

(defn right-child
  [rope]
  ;;=> returns the right child of a node
  (peek  (get rope 1)))

(defn is-left-child?
  [path]
  ;;=> returns whether this is
  ;;   the left child of his parent
  (if (empty? path)
    false
    (= (peek path) 0)))

(defn unlink-all-parents-right-children
  [rope from-path]
  (loop [left-rope rope
         right-rope []
         path from-path]
    (if path
      (let [p-path (parent-path path)]
        (recur   (if (is-left-child? path)
                   ;;=> if we are at a left child
                   (if (not (empty? p-path))
                     (update-in left-rope p-path unlink-right-child)
                     (unlink-right-child  left-rope))
                   ;;=> we untie the parent's right child
                   left-rope) ;;=> else we leave the rope as-is
                 (if (is-left-child? path)
                   ;;=> if we are at a left child
                   ;;   we add the removed right child
                   ;;   to the right rope
                   (concat-ropes right-rope
                                 (right-child (get-in left-rope
                                                      p-path)))
                   right-rope)
                 p-path)) ;;=> and we recur going up in the tree
      [left-rope right-rope])))

(defn grand-parent-path
  [path]
  ;;=> returns the path to the current
  ;;   node grandparent
  (if-let [ppath (parent-path path)]
    (if-let [gpath (parent-path ppath)]
      gpath
      nil)
    nil))

(defn remove-from-all-gparents
  [rope from-path to-remove]
  ;;=> removes a quantity from all
  ;;   grand-parent, then grand-parent of grand-parent
  ;;   ... etc of from-path
  (loop [result-rope rope
         path from-path]
    (if-let [gpath (grand-parent-path path)]
      (let [rope-at-gpath (get-in result-rope gpath)] 
        (recur (assoc-in result-rope (conj gpath 0 :concat)
                         (- (get (get rope-at-gpath 0) :concat)
                            to-remove))
               gpath))
      result-rope)))

(defn split-rope-at-index
  [rope index]
  (let [{:keys [short path idx-in-str]} (get-from-rope-at-index rope
                                                                index)
          modified-rope (if (= idx-in-str (dec (count short)))
                          rope
                          (let [short-left (subs short 0
                                                 (inc idx-in-str))
                                short-right (subs short
                                                  (inc idx-in-str))]
                            (assoc-in rope
                                      path
                                      (concat-ropes {:short short-left}
                                                    {:short short-right}))))
          ;;=> first, if index falls in the middle of a short,
          ;;we replace it by a concat of two new shorts :
          ;;one for each part before and after the index.
          modified-path ( get (get-from-rope-at-index modified-rope
                                                      index)
                              :path)
          ;;=> we get the path to the element we are going to start from
          ;;   from the modified rope
          tb-removed-from-gparents (- (count short) idx-in-str)
          ;;=> we prepare the quantity which will be removed
          ;;   from grand-parents
          [left-tr right-tr] (unlink-all-parents-right-children
                              ;;=> we proceed with the untying
                              modified-rope modified-path)]
    [(remove-from-all-gparents
      left-tr
      (conj  (pop modified-path) 0)
      tb-removed-from-gparents )
     ;;=> and then update the concats going up
     ;;   in the tree
     right-tr]))

(defn insert-into-rope-at-index
  [rope
   index
   short]
  (let [[rleft rright] (split-rope-at-index rope index)]
    (-> (concat rleft
                {:short short})
        (concat rright))))

(defn delete-from-rope-at-index
  [rope
   index-from
   index-to]
  (let[[rleft temp-rright] (split-rope-at-index rope
                                                index-from)
       [rdeleted rright] (split-rope-at-index temp-rright
                                              (- index-to index-from))]
    {:new-rope (concat-ropes rleft
                             rright)
     :deleted-rope rdeleted}))
