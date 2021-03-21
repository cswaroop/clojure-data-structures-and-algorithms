(ns recipe19.core
  (:require [clojure.core.logic :as logic]
            [clojure.core.logic.fd :as fd]))

(defn evenso
  [size out]
  (logic/fresh [x2 se]
    (fd/in x2 (fd/interval 0  (/ size 2)))
    ;; We construct a set of integers
    ;; going from 0 to half the size
    ;; using a core.logic finite domain
    ;; facility
    (fd/* x2 2 se)
    ;; we construct the even coords
    (logic/== out se)))
;; and we output them by unifying them
;; with output

(defn oddso [size out]
  (logic/fresh [x2 seo so]
    (fd/in x2 (fd/interval 0  (/  size 2)))
    ;; Same logic applies for odd part
    (fd/* x2 2 seo)
    ;; We generate an even number
    (fd/+ seo 1 so)
    ;; Then we add 1 to it
    (fd/<= so size)
    ;; We ensure that we do not exceed
    ;; size
    (logic/== out so)))
;; And we unify with output

(defn boardo [size out]
  (logic/fresh [e o]
    (oddso size o)
    (evenso  size e)
    ;; Then starting from even and odd numbers
    (logic/conde 
     [(logic/== out [e o])]
     ;; We combine a first set of vectors
     ;; Crossing [even odd]
     [(logic/== out [o e])])))
     ;; And crossing [odd even]


(defn where-to-movo
  [empty cur-pos out]
  (logic/fresh [->x ->y curx cury]
    (logic/== [curx cury] cur-pos)
    ;; We destructure the position into
    ;; x and y parts
    (logic/conde
     [(fd/+ 1 curx ->x)]
     [(fd/- curx 1 ->x)])
    ;; We go left or right,
    ;; adding or substracting 1
    ;; to x and storing it into ->x
    (fd/+ cury 1 ->y)
    ;; We can only move up, adding 1 to y
    ;; and storing it into ->y
    (logic/membero [->x ->y] empty)
    ;; We verify that the target position
    ;; is empty by seeing if it is present
    ;; in the empty set
    (logic/== out [->x ->y])))
    ;; And we unify with the output

(defn isnt-capturedo
  [empty mypos enemy out]
  (logic/fresh [x->
                y->
                ->x
                ->y
                y->y
                x->x
                new-x
                new-y]
    (logic/== [x-> y->] enemy)
    (logic/== [->x ->y] mypos)
    ;; We destructure enemy and our
    ;; position
    (logic/conde
     [(fd/- x-> ->x x->x)]
     [(fd/- ->x x-> x->x)])
    ;; As core.logic.fd can't handle
    ;; negative numbers, we must use
    ;; a conde so we can get the difference
    ;; between the coords, whether is enemy's x higher
    ;; than the solver's, or the other way around.
    (fd/- y-> ->y y->y)
    ;; We know that the opponent can only go down
    ;; so we are able to proceed with a single
    ;; substraction, that is the opponent's y minus the
    ;; solver's
    (logic/conde
     [(fd/== x->x 1)
      (fd/== y->y 1)
      ;; This enemy's piece is close
      ;; enough to the solver's, let's check
      ;; if it can capture it.
      (logic/conda
       [(fd/> x-> ->x)(fd/- ->x 1 new-x)]
       ;; Where is the landing x coord had
       ;; the enemy captured the solver's
       ;; if it is at its left?
       [(fd/< x-> ->x)(fd/+ ->x  1 new-x)])
       ;; And where would it be if it did come
       ;; feom the right?
      (fd/- ->y y->y new-y)
       ;; What would the landing position y be, after
       ;; capture of the solver's piece?
      (logic/nafc logic/membero [new-x new-y] empty)
       ;; If it is not empty, the solver's piece is
       ;; safe 
      (logic/== out true)]
     [(fd/> x->x 1)(logic/== out true)]
     ;; The difference between coordinates
     ;; on the x axis is higher than 1,
     ;; This piece isn't a threat to us
     [(fd/> y->y 1)(logic/== out true)])))
     ;; Same logic for the Y axis

(def enemy-piece-capturo
  (logic/tabled
   ;; A tabled goal ensures that our
   ;; recursive goal terminates by
   ;; detecting recurrent patterns
   ;; among the values of the logical
   ;; variables
   [empty pos->
    enemies
    out]
   (logic/fresh [x->
                 y->
                 ->x
                 ->y
                 x->x
                 y->y
                 new-x
                 new-y
                 new-path]
     (logic/== [x-> y->] pos->)
     (logic/membero [->x ->y] enemies)
     ;; We destructure our piece's and
     ;; all of the enemies' positions
     (logic/conde
      [(fd/- x-> ->x x->x)]
      [(fd/- ->x x-> x->x)])
     ;; As negative numbers are considered
     ;; as failing goals, we yield a union
     ;; of both cases to be sure to get a
     ;; difference in x->x
     (fd/- ->y y-> y->y)
     ;; We know that this is our piece,
     ;; we can only go up
     (logic/conde
      [(fd/> x-> ->x)(fd/- ->x 1 new-x)]
      [(fd/< x-> ->x)(fd/+ ->x  1 new-x)])
     ;; the new-position's x after jumping,
     ;; adding +1 or -1 to the captured piece's x
     ;; depending of whether
     ;; we are going right or left
     (fd/+ ->y y->y new-y)
     ;; New y can only be the enemy's piece incremented
     ;; by 1 as we go always up.
     (logic/membero [new-x new-y] empty)
     ;; This landing position must be empty
     (fd/== x->x 1)
     (fd/== y->y 1)
     ;; And we must be exactly one square away
     ;; from the opponent's captured piece
     (logic/== new-path [:from [x-> y->]
                         :capture [->x ->y]
                         :then-> [new-x new-y]])
     ;; At this point we have a new path:
     ;; Where we started, what did we capture
     ;; and where we landed
     (logic/conde
      [(logic/== out  new-path)]
      ;; we emit this new path,
      ;; as if we were to stop here,
      ;; this is considered a legal move.
      [(logic/fresh [np]
         (enemy-piece-capturo empty
                              [new-x new-y]
                              enemies
                              np)
         ;; And we recursively check for another possible
         ;; piece to capture, adding any new discovered
         ;; path to what we've captured so far
         (logic/conjo [new-path :then->] np out))]))))

(def play-roundo  
  (logic/tabled  [empty
                  cur-pos
                  enemies
                  out]
                 ;; This is a tabled goal so we can
                 ;; avoid some redundancy in the results
                 ;; caused by the unification engine
                 (logic/fresh [new-pos
                               new-empty
                               not-captured?
                               captured-them]
                   (logic/conde
                    ;; A main conde combining two main moves:
                    ;; 1. Capturing and emitting what has been
                    ;; captured
                    [(enemy-piece-capturo empty
                                          cur-pos
                                          enemies
                                          captured-them)
                     (logic/== out captured-them)]
                    ;; 2. Moving while keeping safe.
                    [(where-to-movo empty
                                    cur-pos
                                    new-pos)
                     (logic/conjo empty cur-pos new-empty)
                     ;; After moving, the piece former position
                     ;; is empty
                     (logic/everyg  #(isnt-capturedo new-empty
                                                     new-pos
                                                     %
                                                     not-captured?) enemies)
                     ;; All of the enemy's pieces must not be able to
                     ;; capture our piece once it moved to
                     ;; its new position
                     (logic/== out [:move-> new-pos])]))))
       ;; and we emit the positions in which we are safe.

(defn prepare-board
    [board-size enemies me]
    (let [initial-board (set  (logic/run* [q]
                                (boardo
                                 board-size
                                 q)))]
      ;; We generate a board of size board-size
      (into '()  (clojure.set/difference initial-board (set
                                                        (conj
                                                         enemies
                                                         me))))))
      ;; and we emit empty pieces: the whole starting set minus
      ;; enemy and "me" pieces

(let [enemies '([1 4][3 2])
      me [4 1]
      empty-brd (prepare-board 8 enemies me)]
  (logic/run* [q]
    (play-roundo
     empty-brd
     me
     enemies
     q)))

(let [enemies '([3 2][1 4])
      me [1 0]
      empty-brd (prepare-board 8 enemies me)]
  (logic/run* [q]
    (play-roundo
     empty-brd
     me
     enemies
     q)))
