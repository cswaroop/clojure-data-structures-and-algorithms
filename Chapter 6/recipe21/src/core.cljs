(ns recipe21.core
  (:require [cljs.core.async :as async :refer [<! >! chan alts!]])
  (:require-macros [cljs.core.async.macros :refer [go]]))

(defn starting-ball-pos
  [x-size]
  [(.floor js/Math
           (* (dec x-size)
              (.random js/Math)))
   ;; A random position for x
   0])
   ;; Starting from the Top setting y at 0

(defn ball-fall
  [coords]
  [(get coords 0)
   ;; Same X component
   (inc (get coords 1))])
   ;; and increasing Y by 1

(defn balls
  ([x-size
    y-size
    b->m
    step-duration
    coords]
   ;; this Arity is for recursive call.
   (go
     (let [[cur-x cur-y] coords
           ;; If the balls hits the floor
           new-coords (if (= cur-y
                             (dec y-size))
                        (starting-ball-pos x-size)
                        ;; start over from the roof
                        (ball-fall coords))]
       ;; else make the ball fall
       (>! b->m new-coords)
       ;; and put the new position
       ;; into a channel
       (js/setTimeout
        ;; and after step-duratin
        #(balls x-size y-size
                b->m
                step-duration
                new-coords)
        ;; do it once again
        step-duration))))
  ;; This arity is for first time calling
  ([x-size
    y-size
    b->m
    step-duration]
   (balls x-size
          y-size
          b->m
          step-duration
          (starting-ball-pos x-size))))


(defn get-mouse-coords
  ;; the function that will be
  ;; assigned to the canvas onmousemove
  [m->m e]
  ;; the channel is put on the first
  ;; position in the arguments list
  ;; as we'll attach a partial
  ;; function where the channel is bound and
  ;; which is having just the event as
  ;; argument to the onmousemove event
  (go  (>! m->m
           [(.-clientX e)
            (.-clientY e)])))
  ;; we send the coords of this
  ;; onmousemove event through a channel

(defn bucket
  [canvas
   m->m]
  (set! (.-onmousemove canvas)
        ;; we attach the previously
        ;; developed function to the
        ;; playboard (canvas) onmousmove
        ;; event
        (partial get-mouse-coords
                 m->m)))


(defn clear-playboard!
  [canvas]
  (let [context (.getContext canvas "2d")]
    ;; we get the graphical context
    ;; of the canvas and we clear the
    ;; rectangle that spans all over it
    (.clearRect context
                0
                0
                (.-width canvas)
                (.-height canvas))))

(defn paint-ball!
  [canvas
   x
   y
   y-size]
  (let [context (.getContext canvas "2d")
        ;; we get the graphical context of the canvas
        play-board-height (.-height canvas)
        ;; its height
        ball-height (.floor js/Math
                            (/ play-board-height y-size))
        ;; the ball height is the size
        ;; of one square on the virtual grid
        ;; we are considering the canvas to be
        ball-center-x (*  (+ x 0.5)
                          ball-height)
        ;; the X position of the center of the ball
        ball-center-y (* (+ y 0.5)
                         ball-height)
        ;; the Y position
        ball-radius (/ ball-height 2)]
        ;; and the Radius, being the half of
        ;; the ball height
    (.beginPath context)
    ;; we initiate drawing in
    ;; the context
    (.arc context
          ball-center-x
          ball-center-y
          ball-radius 0
          (* 2 (.-PI js/Math)) false )
    ;; we draw a full arc
    (set! (.-fillStyle context)
          "orange")
    (.fill context)
    ;; we fill it in orange
    (set! (.-lineWidth context) 5)
    (set! (.-strokeStyle context)
          "#003300")
    (.stroke context)))
    ;; and we draw a border around it

(defn paint-bucket!
  [canvas
   x
   x-size]
  (let [context (.getContext canvas "2d")
        ;; we get the graphical context of the
        ;; canvas
        rect (.getBoundingClientRect canvas)
        ;; we get the coords of the bounding
        ;; rectangle of the canvas so we can
        ;; translate absolute coordinates
        ;; into coordinates relative to the canvas
        x-start (- x  (.-left rect))
        ;; x on the canvas
        play-board-width (.-width canvas)
        bucket-width (.floor js/Math
                             (* 1.5
                                (/ play-board-width x-size)))
        ;; the bucket width is one time and a half
        ;; one square on the canvas virtual grid
        bucket-height (* bucket-width 0.75)
        ;; bucket made thin this way
        
        y (- (.-height canvas)
             bucket-height)]
        ;; y, or where to put the higher-left
        ;; corner of the bucket 
    (do
      (.beginPath context)
      ;; We initiate drawing on the canvas
      (.rect context
             x-start
             y
             bucket-width
             bucket-height)
      (set!   (.-fillStyle context)
              "yellow")
      (.fill context)
      ;; we draw the bucket
      (set!  (.-lineWidth context ) 7)
      (set! (.-strokeStyle context)
            "black")
      (.stroke context))))
      ;; and we draw a border around it

(defn check-game-rules
  [canvas
   x-size
   y-size
   ball-coords
   bucket-coords
   m->g]
  (let [[center-ball-x center-ball-y] ball-coords
        [cur-bucket-x _] bucket-coords
        play-board-height (.-height canvas)
        ball-height (.floor js/Math
                            (/ play-board-height y-size))
        context (.getContext canvas "2d")
        rect (.getBoundingClientRect canvas)
        real-bucket-x (- cur-bucket-x
                         (.-left rect))
        real-ball-center-x (+
                            (* (+ center-ball-x 0.5)
                               ball-height)
                            (.-left rect))
        play-board-width (.-width canvas)
        bucket-width (.floor js/Math
                             (* 1.5
                                (/ play-board-width x-size)))]
        ;; geometrical information is computed about the ball
        ;; and the bucket, just like in painting them
        
    (go
      (if (= center-ball-y (dec y-size))
        ;; If the ball reaches the floor
        (if (and (<= real-ball-center-x
                     (+ cur-bucket-x bucket-width))
                 (>= real-ball-center-x
                     cur-bucket-x))
          ;; and its center is "in the bucket"
          (>! m->g :add)
          ;; we send :add to the score maintaining process
          (>! m->g :lost))))))
          ;; else we send a :lost signal

(defn update-score!
  ;; The score maintaining process
  [score-place
   score
   m->g]
  (go
    (while true
      (let [msg (<! m->g)]
        ;; If a signal is received from the game-rules-engine
        (cond
          (= msg :add)(set! (.-innerHTML score-place)
                            (swap! score inc))
          ;; if it was :add, we add 1 to the atom maintaing
          ;; score state, and we show it on the page
          (= msg :lost)(do
                         ;; else, we notify the player
                         (js/alert "Game Over!")
                         ;; and we set the score to 0
                         ;; initiating a new game
                         (set! (.-innerHTML score-place)
                               (reset! score 0))))))))
(defn master!
  [x-size
   y-size
   step-duration]
  (let [canvas (.getElementById js/document
                                "playboard")
        score-place (.getElementById js/document
                                     "score")
        ;; We grab the UI elements we are going
        ;; to manipulate, the canvas for the play-board,
        ;; and the h3 header for showing the score
        b->m (chan) ; a channel from the ball to the master
        m->m (chan) ; a channel from the mouse to the master
        m->g (chan) ; a channel from the game-rule-engine to
                    ; the score-updating engine
        ball-coords (atom [])  ; to keep state of the ball
        bucket-coords (atom []) ; to keep state of the bucket
        score (atom 0)          ; to keep state of the score
        _ (balls x-size y-size b->m step-duration)
        ;; we launch the balls co-routine
        _ (bucket canvas m->m)
        ;; we launch the bucket co-routine
        _ (update-score! score-place score m->g)]
       ;; we launch the score maintaining co-routine
    (go
      (while true
        (let [[msg ch] (alts! [b->m m->m])]
          ;; Whenever a message arrives from mouse
          ;; or from the ball co-routine
          (clear-playboard! canvas)
          ;; clear the canvas, we are going
          ;; to repaint a new situation
          (cond
            (= ch b->m)(do
                         ;;if it is from the mouse
                         (reset! ball-coords msg)
                         ;; update the balls coords state
                         (check-game-rules canvas
                                           x-size
                                           y-size
                                           @ball-coords
                                           @bucket-coords
                                           m->g))
                         ;; and summon the rules checker
            (= ch m->m)(reset! bucket-coords msg))
                         ;; if it is from the bucket
                         ;; update the bucket state
          (paint-ball! canvas
                       (get @ball-coords 0)
                       (get @ball-coords 1)
                       y-size)
          ;; paint the ball at the new coords
          (paint-bucket! canvas
                         (get @bucket-coords 0)
                         x-size))))))
          ;; paint the bucket at the new coords
