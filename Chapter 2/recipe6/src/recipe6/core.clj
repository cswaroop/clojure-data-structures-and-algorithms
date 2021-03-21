(ns recipe6.core)

(defn r6-ll-first
  [llist]
  (first llist))

(defn r6-ll-next
  ([llist] (r6-ll-next llist
                       (r6-ll-first llist)))
  ([llist cell]
     (if-let [next-cell-address (get cell :next)]
       (get llist next-cell-address)
       nil)))
;;=> First and next will allow us
;;To traverse the list

(defn get-cell-by-id
  [llist
   cell-id]
  (loop [current (r6-ll-first llist)]
    (if (= cell-id (get current
                        :id))
      current ;=> We got the Cell with
              ; the ID we're seeking
      (if (= nil (get current
                      :next))
        nil  ;=> We hit the end,
             ; the ID is not there
        (recur (r6-ll-next llist
                           current))))))
        ;;=> We carry-on with the next element

(defn get-before-cell
  [llist
   cell]
  (let [cell-address (get cell :address)]
    (loop [current (r6-ll-first llist)]
      (if (= (get current :next)
             cell-address)
        ;;=> This is the cell we are
        ;;  Looking for
        current
        (if (= nil (get current :next))
          nil
          ;;=> We reached the end,
          ;; So our cell must not
          ;; be there.
          (recur (r6-ll-next llist
                             current)))))))
          ;;=> We recur with the next element

(defn remove-ll-element
  [llist
   cell-id]
  (let [cell (get-cell-by-id llist
                             cell-id)
        _ (println cell)
        cell-address (get cell
                          :address)]
    ;;=> We have the cell to remove,
    (loop [llist-wo-cell []
           current (r6-ll-first llist)]
      (if (= nil current)
        llist-wo-cell
        ;;=> Done with the recursion
        ;;   we return the result
        (let [current-address (get current :address)
              next-address (get current :next)
              new-address (if (> current-address
                                 cell-address)
                            (dec current-address)
                            current-address)
              ;;=> If the address occurs AFTER the
              ;; element to be removed, we decrease it.
              new-next-address (if (= nil next-address)
                                 nil
                                 (cond
                                   (> next-address cell-address) (dec next-address)
                                   ;;=> If next address comes after the element to
                                   ;;   be removed, we decrease it
                                   (< next-address cell-address) next-address
                                   (= next-address cell-address) (if-let [nxt-c-addr (get cell :next)]
                                                                   (dec nxt-c-addr)
                                                                   ;;=> We decrease it if it is
                                                                   ;;   equal to the address to the cell
                                                                   ;;   to be removed and if its next isn't
                                                                   ;;   nil, else it is nil.
                                                                   nil)))]
          (recur (if (= current cell)
                   llist-wo-cell  ;;=> We remove cell from result
                   (conj llist-wo-cell {:address new-address
                                        :id (current :id)
                                        :next new-next-address}))
                 ;;=> And add the new elements to result.
                 (r6-ll-next llist
                             current)))))))
                 ;;=> And we go on with the next element.
          
(defn move-cell-to-head
  [llist
   cell-id]
  (let [llist-wo-cell (remove-ll-element llist
                                         cell-id)
        ;;=> We begin by constructing a list
        ;; without the cells to remove, and incrementing
        ;; by one all cells addresses and pointers to next
        ;; elements in this list,
        llist-wo-cell-addrs+1 (loop [result []
                                     current (r6-ll-first llist-wo-cell)]
                               
                               (if (= nil current)
                                 result
                                 (recur (conj result
                                              {:address (inc
                                                         (get current
                                                              :address))
                                               :next (if-let [nxt-addr
                                                              (get current
                                                                   :next)]
                                                       (inc nxt-addr)
                                                       nil)
                                               :id (get current
                                                        :id)})
                                        (r6-ll-next llist-wo-cell
                                                    current))))]
    ;;=> Then we return a list with the removed element
    ;; at head position, and the rest of the list whose
    ;; addresses have been incremented.
    (into [{:id cell-id
            :address 0
            :next 1}]
          llist-wo-cell-addrs+1))) 

(defn search-for-cell-by-id!
  [llist-atom
   cell-id]
  (loop [current (r6-ll-first @llist-atom)]
    (if (= current nil)
      nil ;=> Reached the end and did not
          ; find the element
      (if  (= (current :id) cell-id)
        ;;=> If we find it,
        (let [_ (swap! llist-atom
                       move-cell-to-head
                       (current :id))]
          ;;=> We update the atom
          current)
        ;;=> And return the found element
        (recur (r6-ll-next @llist-atom
                           current))))))
        ;;=> Else we recur with the
        ;; next elements
