(ns recipe17.core
  (:require [clojure.core.logic :as logic]
            [clojure.core.logic.pldb :as pldb]))

(pldb/db-rel friends ^:index a_user  ^:index another_user)
(def are-friends  (pldb/db
                   [friends 'rafik 'khawla]
                   [friends 'khawla 'faty]
                   [friends 'faty 'lapin]
                   [friends 'dah 'rafik]
                   [friends 'dah 'toussou]))

(pldb/db-rel bought ^:index a_user ^:index url)
(def have-bought (pldb/db
                  [bought 'rafik 'pen]
                  [bought 'khawla 'computer]
                  [bought 'faty 'hello-kitty]
                  [bought 'dah 'microwave]
                  [bought 'toussou 'book]))

(defn friendo
  [user1 user2]
  (logic/conde ;; a conde is used
               ;; so the two following clauses'
               ;; results are combined. Think of it as a sort of OR
   [(friends user1 user2)] ;; every clause in Conde contains
                           ;; a conjunction of goals. indeed, sequences of goals are
                           ;; are always considered as conjunction, like an AND.
   [(friends user2 user1)]))

(defn friends-boughto
  [guy item] ;; In logic programming, we always lay out
             ;; all the variables in stake, not like ordinary
             ;; functions, where we expect the function
             ;; to return a result. This is because any of these logical
             ;; variables can be instantiated and queried.
  (logic/fresh [f]  ;; We introduce a fresh intermediate variable 
    (friendo guy f) ;; To Hold the values of all friends of the guy
    (bought f item))) ;; Then we query the bought relation to see
                      ;; what items did this guy's friends buy 

(defn friends-of-friendo
  [guy out]
  (logic/fresh [fguy]
     (friendo guy fguy)
     (friendo fguy out)
     (logic/!= guy out)))

(def network-of-friendo
  (logic/tabled [guy out]
                ;; as always, we lay out all the variables in stake
                ;; but this time, we use a tabled goal to avoid divergence.
                (logic/fresh [fguy]
                  ;; we need a fresh variable to hold this guy's friend
                  (friendo guy fguy)
                  ;;  find this guy's friends
                  (logic/conde
                   ;; and combine the following results
                   [(logic/== fguy out)]
                   ;; this guy's friends
                   [(network-of-friendo fguy out)(logic/!= out guy )]))))
                   ;; and those friends' friends


;; to get the friends network of a user, you
;; query for a responses equals to all possible connections btw all users, n * n-1, and you force it to be distinct


(pldb/with-db are-friends
  (logic/run* [q]
    (network-of-friendo 'rafik q)))

;; and you can ask for which users have 'lapin in their network

(pldb/with-db are-friends
  (logic/run* [q]
    (network-of-friendo q 'rafik)))

;; what did this guy's friends buy ?
(pldb/with-db are-friends
  (pldb/with-db have-bought
    (logic/run* [q]
      (friends-boughto 'rafik q ))))

;; who has friends that bought something?
(pldb/with-db are-friends
  (pldb/with-db have-bought
    (logic/run* [q]
      (friends-boughto q 'microwave ))))
