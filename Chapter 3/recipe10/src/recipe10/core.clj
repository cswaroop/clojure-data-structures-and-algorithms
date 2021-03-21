(ns recipe10.core)

(defn where-to-insert-key-in-node
  [current-b-node a-key]
  (let [current-node-keys  (mapv :key current-b-node)
        first-key (first current-node-keys)
        last-key  (peek current-node-keys)
        key-intervals (into [] (partition 2
                                          1
                                          current-node-keys))]
    ;;=> first we get the first and last keys,
    ;;   then we construct the keys intervals
    (if (< a-key first-key)
      [0 :left]  ;=> we return the path to the elements before first key
      (if (> a-key last-key) 
        [(dec (count current-node-keys)) :right]
        ;;=> we return the path to the elements after last key
        (let [the-interval (first  (filter #(and (> a-key (first %))
                                                 (< a-key (last %)))
                                           key-intervals))
          
              the-interval-pos (.indexOf key-intervals the-interval)]
              ;;=> else we return in which interval is our key situated
          [the-interval-pos :right]))))) ;=> and we return the path
                                        ; to the interval


(defn where-to-insert-key-in-b-tree
  [btree a-key]
  (loop [path []
         stree btree]
    (if (empty?  (get (first  stree) :right))
      path
      ;;=> if no more children, we return the path of that leaf.
      (let [path-in-stree (where-to-insert-key-in-node stree a-key)
            new-path (into path path-in-stree)]
        (recur new-path
               (get-in stree new-path))))))
      ;;=> else we recur with the path found by the function
      ;; where-to-insert-key-in-node, and the tree pointed
      ;; by that function 

(defn grand-parent-path
  [path]
  (if (and (not (empty? path))
           (not (empty? (pop path))))
    (-> path pop pop)
    []))

(defn verif-tree
  [b-tree
   path
   max-elts]
  (let [v-to-verif (into [] (sort-by :key
                                     <
                                     (get-in b-tree path)))]
    (if (< (count v-to-verif)
           max-elts)
      b-tree ;;=> we are not violating max elements rule,
             ;;   we leave the tree as-is.
      (let [gpath (grand-parent-path path)
            median (int (/ (count v-to-verif )
                           2))
            new-left (->>
                      (subvec v-to-verif
                              0
                              median)
                      (sort-by :key <)
                      (into []))
            
            new-right (->>  (subvec v-to-verif (inc median))
                            (sort-by :key <)
                            (into []))
            
            new-key  (get v-to-verif median)
            ;;=> else we compute the first and second halves
            ;;   and the key to be migrated.
            new-b-tree-in-path (if (not (empty? path))
                                 (assoc-in b-tree
                                           path
                                           new-left)
                                 new-left)]
        ;;=>  The node to contain the first half of what
        ;; it used to have
        (if (not (empty? gpath))
          (recur  (update-in new-b-tree-in-path
                             ;;=> we recursively update our tree
                             ;;   to be sure that our migrating key
                             ;;   does not violate maximum elements rule
                             ;;   in the node it has landed in.
                             gpath
                             (comp (partial into [])
                                   (partial sort-by :key <)
                                   conj)
                             ;;=> we make sure our key sets are
                             ;;   sorted in increasing order
                             (assoc new-key
                                    :right
                                    new-right
                                    :left new-left))
                  gpath
                  max-elts)
          ;;=> If grand-parent is not empty, we update it adding the new key
          ;;   pointing to the second half
          [(-> new-key
               (assoc :right new-right :left  new-b-tree-in-path))])))))
          ;;=> Else, we must be at a root node, we simply
          ;;   set it to a new tree containing the key pointing
          ;;   to the second half 
(defn insert-in-b-tree
  [max-elts b-tree a-key a-val]
  (let [path-insert (where-to-insert-key-in-b-tree b-tree a-key)
        instable-new-tree     (if (empty? path-insert)                                
                                (into [] (sort-by :key
                                                  <
                                                  (conj b-tree
                                                        {:key a-key
                                                         :val a-val
                                                         :right [] :left []})))
                                (update-in b-tree
                                           path-insert
                                           (comp (partial into [])
                                                 (partial sort-by :key <)
                                                 conj)
                                           {:key a-key
                                            :val a-val
                                            :right []
                                            :left []}))]
    ;;=> we construct an instable B-Tree, that is, one that
    ;;   maybe causes the node it is in to exceed the maximum
    ;;   allowed elements.
    (verif-tree instable-new-tree
                path-insert
                max-elts)))
    ;;=> verif-tree executes to recursively split the nodes above
    ;;   if needed.

(defn seek-in-b-tree
  [b-tree a-key]
  (let [node-is-here (first (filter #(= (:key  %) a-key)
                                    b-tree ))]
    (if (not (nil? node-is-here))
      (:val node-is-here)
      ;; =>if key is found in this node, we return the value
      ;;   it holds.
      (let [node-keys (mapv :key b-tree)
            first-key (first node-keys)
            last-key (peek node-keys)
            key-intervals (partition 2 1 node-keys)
            next-s-tree-path (if (<  a-key first-key)
                               [0 :left]
                               (if (> a-key last-key )
                                 [(dec (count node-keys)) :right ]
                                 (let [the-interval (first (filter #(and (a-key > (first %))
                                                                         (a-key < (last %)))
                                                                   key-intervals))
                                       pos-interval (.indexOf key-intervals the-interval)]
                                   [pos-interval :right])))
            next-s-tree (get-in b-tree next-s-tree-path)]
        ;;=> else, we find which interval to look in,
        ;;   and get to this next-s-tree in a recur
        (if (empty? next-s-tree)
          nil ;;=> if nex-s-tree is empty, end of recursion, key is not present
          (recur next-s-tree a-key))))))
          ;;=> else we still recur over next-s-tree
    
