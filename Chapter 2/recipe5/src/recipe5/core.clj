(ns recipe5.core)

(defn r5-ll-first
  [llist]
  (first llist))

(defn r5-ll-next
  ([llist] (r5-ll-next llist
                       (r5-ll-first llist)))
  ([llist cell]
   (if-let [next-cell-address (get cell :next)]
     (get llist next-cell-address)
     nil)))

(defn r5-ll-last
  [llist]
  (loop [cell (r5-ll-first llist)]
    (if (= nil (get cell :next))
      cell
      (recur (r5-ll-next llist cell)))))

(defn get-before-cell
  [llist
   cell]
  (let [cell-address (get cell :address)]    
    (loop [current (r5-ll-first llist)]
      (if (= (get current :next) cell-address)
        current
        (if (= nil (get current :next))
          nil
          (recur (r5-ll-next llist current)))))))

(defn gen-xor-llist
  [llist]
  (loop [result []
         current  (r5-ll-first llist)]
    (let [current-address (get current :address)
            ;;=> We take current element address
          after-current (r5-ll-next llist current)
          after-current-address  (if-let [nxt-addr (get current :next)]
                                   nxt-addr
                                   0)
            ;;=> Next one's address
          before-current (get-before-cell llist
                                          current)
          before-current-address (if before-current
                                   (before-current :address)
                                   0)] ;=> And address of the element
                                        ;before.
      (if (= nil current)
          ;;=> If at after the last element,
          ;;we get the addresses of last and first cells
          ;;in the original linked list and those
          ;;in the xor-linked list
        (let [the-last (r5-ll-last llist)
              before-last-in-ll (get-before-cell llist the-last)
              before-last-in-ll-address (get before-last-in-ll :address)
              the-last-in-xor-list (peek result) 
              the-first-in-ll (r5-ll-first llist)
              the-first-in-xor-list (first result)]
          (->> result
               (replace {the-last-in-xor-list
                         {:is-last true
                          :id (the-last-in-xor-list :id)
                          :address (the-last-in-xor-list :address)
                          :xor-link before-last-in-ll-address}})
               (replace {the-first-in-xor-list
                         {:is-first true
                          :id (the-first-in-xor-list :id)
                          :address (the-first-in-xor-list :address)
                          :xor-link (the-first-in-ll :next)}})))
          ;;=> We store in the xor-link of the first cell the address
          ;;of the next element, so we can do get to it doing
          ;;0 xor next-address. Same logic applies to the last element,
          ;;in whose xor-link we put the address of the previous cell.
        (let [xor-link (bit-xor before-current-address
                                after-current-address)
                ;;=> Computing the xor link and the new cell for the
                ;;other steps of the recursion
              new-cell {:id (get current :id)
                        :address (get current :address)
                        :xor-link xor-link}]
          (recur (conj result new-cell) ;=> And we construct the xor-list
                                          ; as we go through the list. 
                 (r5-ll-next llist current)))))))


(defn get-xor-after
  [xor-llist
   cell-id    ;=> The cell ID you want to
              ; start moving to next element
              ; from
   direction] ;=> :right or :left  
  (loop [current (cond
                   (= direction :right) (first xor-llist)
                     ;;=> Going right, begin from first element
                   (= direction :left) (peek xor-llist))
                     ;;=> Going left, we start with last one.
         previous-address 0]
      ;;=> The registry we are going to use to store
      ;;the address of the previous element we walked in.
    (let [next-cell-address (bit-xor previous-address
                                     (current :xor-link))
            ;;=> Computing the next address using xor-link
            ;; and the registry.
          next-cell (get xor-llist next-cell-address)
            ;;=> And getting into it, while updating
            ;;the registry
          new-previous-address (get current :address)]        

      (if  (or (and (= direction :right) (get current :is-last))
               (and (= direction :left) (get current :is-first)))
        nil
          ;;=> We are at the bounds of the list, there is
          ;;no next to return in either direction
        (if  (= cell-id (get current :id))
          next-cell
            ;;=> Here we found a valid next,
            ;; So we exit the recursion and
            ;; return it
          (recur next-cell
                 new-previous-address))))))
            ;; else we carry on with the recursion.
