(ns recipe8.core
  (:require [clojure.core.match :refer [match]]))
;; the struct is [[weight [1 [2 [...tree]]]]]

(defn r8-cons
  [x ts]
  (match [ts] ;=> Here we'll look into the structure
              ;   of the tree to decide what to do.
         [[[w1 t1] [w2 t2] & ts*]] (if (= w1 w2)
                                     (into  [[(+ 1 w1 w2) (conj  [x] t1  t2 )]]
                                            ts*)
                                     ;;=> If if we have more than two couples
                                     ;;   and two first weights are equal,
                                     ;;   that is a 2. Analogous to the action
                                     ;;   of incrementing, which will set the
                                     ;;   2 at 0 and increment the next
                                     ;;   element, consing will create a
                                     ;;   single tree (thus setting this
                                     ;;   position to 0), made by setting the
                                     ;;   new element x as a root and appending
                                     ;;   to it the old two trees
                                     ;;   (just as if incrementing the next
                                     ;;   element), hence the new
                                     ;;   weight of (+ 1 w1 w2)
                                     (into [[1 x]] ts))
                                     ;;=> Else, we turn that same tree
                                     ;;   into a new one-thus having
                                     ;;   weight 1, and appending
                                     ;;   the whole old tree to a node
                                     ;;   only containing x. Just like
                                     ;;   incrementing an element
                                     ;;   that does not contain a 2.
         [ts]  (into [[1 x]] ts)))
         ;;=> This particular match clause
         ;;   is for the case when we don't have
         ;;   two couples (weight,tree), this is definitely not a 2 
         ;;   so it resembles the story of incrementing a 0 or a 1.


(defn r8-head
  [ts]
  (match [ts]  
         [[]] :empty
         ;;=> The head of an empty list
         ;;   raises an exception
         [[[1 a] & ts* ]] a
         ;;=> The head of a set beginning
         ;;   by a single element tree
         ;;   is that very element
         [[[w [a t1 t2]] & ts*]] a))
         ;;=> The head in general is the root
         ;;   of every first tree, here matched
         ;;   against an element tied to two sub-trees
 
(defn r8-tail
  [ts]
  (match [ts]
         [[]] :empty
         ;;=> tail of an empty list raises an exception
         [[[1 a] & ts* ]] ts*
         ;;=> tail of a set beginning by a single element
         ;;   tree is everything that comes next
         [[[w [a t1 t2]] & ts*]] (into [ [(int (/ w 2)) t1]
                                         [(int (/ w 2)) t2]] ts*)))
         ;;=> Tail of everything else is
         ;;   constructed out of the two subrees
         ;;   that were tied by a root.
         ;;   We put them in the result set
         ;;   and set their weights to
         ;;   half the weight of the tree
         ;;   they used to form with root a.



(defn r8-lookup-tree
  [w ts index]
  (match [w ts index]
         [1 a 0 ] a
         ;;=> Fetching subscript 0 with a w = 1 and a
         ;;   single element a yields a
         [1 a i] :index-error
         ;;=> i will not be 0 as we matched it in the
         ;;   previous match clause, so we are searching
         ;;   for something out of bound, hence we
         ;;   raise an exception
         [w [a t1 t2] 0] a
         ;;=> Searching for a first element in a set
         ;;   formed by a single tree returns the root
         ;;   of that same tree
         [w [a t1 t2] i] (if (<= i (int (/ w 2)))
                           (recur (int (/ w 2))
                                  t1
                                  (dec i))
                           ;;=> In general, to seek for an element
                           ;;   in a tree with weight w, we go
                           ;;   right if the subscript is less
                           ;;   than half the weight - t1
                           (recur (int (/ w 2))
                                  t2
                                  (- i 1 (int (/ w 2)))))))
                           ;;=> Or we go left, t2

(defn r8-lookup
  [ts index]
  (match [ts index]
         [[] i] :index-error
         ;;=> No element at all, raising an exception
         [[[w t] & ts*] i] (if (< i w)
                             ;;=> i is less than w, our element must be in that
                             ;; tree, we look in that one using lookup-tree.
                             (r8-lookup-tree w t i)
                             (recur ts*
                                    (- i w)))))
                             ;;=> i is greater than w, we must continue
                             ;;   searching for the tree containing it,
                             ;;   so we recur over the rest of trees. 



(defn r8-update-tree
  [w ts index y]
  (match [w ts index]
         [1 a 0]  y
         ;;=> Analogous to look-up. we return
         ;;   a modified node with value y if
         ;;   we had a single node at index 0.
         [1 a i]  :index-error
         ;;=> Same as look-up, we are searching for
         ;;   and index greater than 0 for a single
         ;;   node tree. We raise an exception.
         [w [a t1 t2] 0] [y t1 t2]
         ;;=> Simplest case. We want to modify
         ;;   The root.
         [w [a t1 t2] i] (if (<= i (int (/ w 2)))
                           [ a
                            (r8-update-tree (int (/ w 2))
                                            t1
                                            (dec i)
                                            y)
                            t2]
                           ;;=> The element we want to update
                           ;;   is situated in the sub-tree at right.
                           ;;   recur over that part.
                           [a
                            t1
                            (r8-update-tree (int (/ w 2))
                                            t2
                                            (- i 1 (int (/ w 2)))
                                            y) ])))
                           ;;=> The other direction,
                           ;;   we recur over the sub-tree at left.


(defn r8-update
  [ts index y]
  (match [ts index]
         [[] i] :index-error
         ;;=> we can't update an empty tree.
         [[[w t] & ts*] i] (if (< i w)
                             (into [[w (r8-update-tree w t i y)]] ts*)
                             ;;=> i is less than w, the element we
                             ;;   are seeking must be in this tree,
                             ;;   we launch update-tree in it.
                             (into [[w t]] (r8-update ts*
                                                       (- i w)
                                                       y)))))
                             ;; else, we continue seeking for
                             ;; the tree containing our index i,
                             ;; recurring over the rest of them.
