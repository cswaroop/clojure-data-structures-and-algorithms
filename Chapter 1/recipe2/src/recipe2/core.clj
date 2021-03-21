(ns recipe2.core
  (:import (java.awt image.BufferedImage Color) 
           (javax.imageio ImageIO)
           (java.io File)))


;; maybe do a version without the yield stuff first, and explain why we did then with odd/even yield after...
(defn pascal-row-step
  [yield pascal-row]
  {:pre [(not= pascal-row [0])]}
  (let [cnt-elts (count pascal-row)
        half-row (subvec pascal-row 0 (inc (double (/ cnt-elts 2))))
        padded-half-row (into [0] half-row)
        half-step (vec  (map (comp (partial apply yield)
                                   vec)
                             (partition 2 1 padded-half-row)))
        other-half-step (vec  (if (even? cnt-elts)
                                ;; If even, I reverse without the central element
                                (-> half-step
                                    butlast
                                    reverse)
                                (-> half-step
                                    reverse)))]
    (into half-step other-half-step)))


(defn pascal-rows
  [yield row-number]
  (loop [nb 0
         result []
         latest-result [1]] 
    
    (if (<= nb row-number)
      (recur (inc nb)
             (conj result latest-result)
             (pascal-row-step yield latest-result))
      result)))
 

(defn even-odd-yield
  [n1 n2]
  (mod (+ n1 n2) 2))

(def sum-yield +)

(def classic-pascal-triangles (partial pascal-rows sum-yield))

(def gr-triangles (partial pascal-rows even-odd-yield))

(defn draw [size] 
  (let [img (BufferedImage. size size BufferedImage/TYPE_INT_ARGB)
        plot-rows (gr-triangles size)
        plots (for [x (range 0 size)
                    y (range 0 x)]
                (if (= 1 (get
                          (get plot-rows x)
                          y))
                  [x y]))
        gfx (.getGraphics img)]

    (.setColor gfx Color/WHITE)
    (.fillRect gfx 0 0 size size )
    
    (.setColor gfx Color/BLACK)
    
    (doseq [p (filter (comp not nil?)  plots)]
      (.drawLine gfx (get p 0)
                 (get p 1)
                 (get p 0)
                 (get p 1)))
      
    (ImageIO/write img "png"
                   (File. "/home/rnaccache/result.png"))))
