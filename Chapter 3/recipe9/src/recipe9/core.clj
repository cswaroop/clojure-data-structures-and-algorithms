(ns recipe9.core
  (:require [clojure.core.match :refer [match]]))


(defn zig-right
  [tree]
  (match [tree] [{:node p
                  ;; p is at root
                  :left {:node x :left x-tr-left
                         :right x-tr-right}
                  ;; x is at left
                  :right p-tr-right }]  {:node x
                                         :left x-tr-left
                                         :right {:node p
                                                 :left x-tr-right
                                                 :right p-tr-right}}
                  ;; If not matching this structre, we leave the tree as is
                  :else tree))

(defn zig-left
  [tree]
  (match [tree] [{:node p
                  ;; p is at root
                  :left p-tr-left
                  :right {:node x
                          ;; x is at right
                          :left x-tr-left
                          :right x-tr-right}}] {:node x
                                                :left {:node p
                                                       :left p-tr-left
                                                       :right x-tr-left}
                                                :right x-tr-right}
                          ;; If not matching the structure, we return the same tree
                          :else tree))


(defn zig-zig-right
  [tree]
  (match [tree] 
         [{:node g
           :left {:node p
                  :left {:node x}}}] (-> tree
                                         zig-right
                                         zig-right)
           :else tree))

(defn zig-zig-left
  [tree]
  (match [tree]
         [{:node g
           :right {:node p
                   :right {:node x}}}] (-> tree
                                           zig-left
                                           zig-left)
                   :else tree))

(defn zig-zag-left
  [tree]
  (match [tree] [{:node g
                  :left {:node p
                         :right {:node x}}
                  :right g-right}]  (->> (:left tree)
                                         zig-left 
                                         (assoc {:node g
                                                 :right g-right}
                                                :left)
                                         zig-right)
                  :else tree))

(defn zig-zag-right
  [tree]
  (match [tree]
         [{:node g
           :right {:node p
                   :left {:node x}}
           :left g-left}] (->> (:right tree)
                               zig-right
                               (assoc {:node g
                                       :left g-left}
                                      :right)
                               zig-left)
           :else tree))

(defn seek-or-insert
  [tree x]
  (if (empty? tree)
    {:new-tree  {:node x :left nil :right nil} :new-path []}
    ;;=> If tree is empty we return one with x as its only element
    (loop [subtree tree
           path []]
      (if (nil? subtree)
        {:new-tree (assoc-in tree path {:node x
                                        :left nil
                                        :right nil})
         :new-path path}
        ;;=> end of the recursion, we return the tree and the path
        (cond (< x (get subtree :node)) (recur (get subtree :left)
                                               (conj path :left))
              ;;=> else if x is less than node, we recur left
              (> x (get subtree :node)) (recur (get subtree :right)
                                               (conj path :right))
              ;;=> or we recur right
              (= x (get subtree :node)) {:new-tree tree ;=> or we return x as we
                                                        ; found it
                                         :new-path path})))))

(defn parent-path
  [path]
  (pop path))

(defn parent
  [tree path]
  (if (empty? path)
    nil
    (get-in tree (parent-path path))))

(defn grand-parent-path
  [path]
  (-> path pop pop))

(defn grand-parent
  [tree path]
  (if (or  (empty? path)
           (empty? (pop path)))
    nil
    (get-in tree (grand-parent-path path))))


(defn put-transformed-in-tree
  [tree path fn-transform subtree]
  (let [transf  (fn-transform subtree)]
    (if (empty? path)
      transf
      (assoc-in tree path transf))))

(defn splay
  [tree path]
  (let [x (get-in tree path)
        p (if (empty? path)
            nil
            (parent tree path))
        g (if (nil? parent)
            nil
            (grand-parent tree path))]
    ;;=> Getting parent and grand parents
    (if (not (nil? p))
      (if (nil? g)
        (match [p]
               [{:left x}] {:spl-tree  (zig-right p)
                            :end true}
               [{:right x}] {:spl-tree  (zig-left p)
                             :end true})
        ;;=> applying zigs right or left. this step is considered final
       (let [gpath (grand-parent-path path)]
          (match [g]
                 [{:left  {:left x}}] {:spl-tree
                                       (put-transformed-in-tree tree
                                                                gpath
                                                                zig-zig-right
                                                                g) 
                                       :end false}
                 [{:right {:right x}}] {:spl-tree
                                        (put-transformed-in-tree tree
                                                                 gpath
                                                                 zig-zig-left
                                                                 g)
                                        :end false}
                 ;;=> Applying zig-zigs left and right. Not final,
                 ;;we may go up in the tree
                 [{:left {:right x}}] {:spl-tree
                                       (put-transformed-in-tree tree
                                                                gpath
                                                                zig-zag-left
                                                                g)
                                       :end false}
                 [{:right {:left x}}] {:spl-tree
                                       (put-transformed-in-tree tree
                                                                gpath
                                                                zig-zag-right
                                                                g) :end false})))
      ;;=> Applying zig-zags left and right. Not final,
      ;;we may go up in the tree
      {:spl-tree  tree :end true})))
;; no parent, x is at root, we consider this step final

(defn insert-or-seek-into-splay-tree
  [tree x]
  (let [seek-or-insert-op (seek-or-insert tree x)]
    ;;=> We insert or find x,
    (loop [tree-before-splay (seek-or-insert-op :new-tree)
           path (seek-or-insert-op :new-path)]
      ;;=> And get the new tree and the path to get to it
      ;;   And begin our recursion
      (let [splay-op (splay tree-before-splay path)
            spl-tree (splay-op :spl-tree)
            end? (splay-op :end)]
        ;;=> We splay, getting the new splayed tree version
        ;;   And the inforamtion about whether we shalls stop
          (if end?
            spl-tree
            ;;=> End of recursion, we return last splayed version
            (let [new-seek-op (seek-or-insert spl-tree x)
                  new-path (new-seek-op :new-path)]
              ;;=> Or we recur over the new splayed version
              ;;   and the new place where x is
              (recur spl-tree new-path)))))))
