(ns recipe25.core
  (:require [clojure.zip :as z]))

(defn occurs?
  [s t]
  (if (seq? t)  ;; If second term is a seq
    (let [zpr  (z/zipper seq? identity conj t)]
      ;; We create a zipper to walk it
      (loop [loc (-> zpr z/down)]
        ;; We begin at the first element of the zipper
        (if (-> loc z/end?)
          false
          ;; We reached the end, yet we were not able
          ;; to find the first term. It does not occur
          (if (= s (-> loc z/node))
            true
            ;; One node of our zipper happens to be equal
            ;; to the first term. We immediately return true
            (recur (-> loc z/next))))))
            ;; else we recur over the next zipper element
    (= s t))) ;; If t is not a seq, we say that s occurs in t
              ;; if they are equal

;;subst is a map between variables and their replacement : {:a '(:d :c) :b :f} ...
(def s (atom {}))

(defn apply-subst
  [u]
  (if (seq? u); If u is a seq
    (replace @s u)
    ;; We apply the value referred by the s atom
    ;; as a substitution map so to respectively
    ;; replace u terms by their counterparts
    ;; in s
    (if-let [subst  (get @s u)] ;; Else, u is a scalar
      subst ;; If u occurs in s we return its counterpart
      u))) ;; else we leave it as is.

(declare uni) ;; uni declaration

(defn try-subst
  [u v ks kf]
  (let [u (apply-subst u)] ;; First, we exchange u for any known
                           ;; substitute, so we don't unify the same
                           ;; thing with two different terms
    (if (not (symbol? u)) ;;This is not a symbol, it is an expression
      #(uni u v ks kf)    ;; Launch uni, the "main" expressions unifier
      (let [v (apply-subst v )] ;; Same logic for right hand expression
                                ;; term
        (cond
          (= u v) #(ks @s) ;; The terms are equal, nothing to do, we
                           ;; run the success function over the same content of s
          (occurs? u v) #(kf "Error : Cycle!") ;; Occur Check error
          :default #(ks (swap! s
                               assoc
                               u
                               v ))))))) ;; Else, We found a new substitution
                                         ;; to be added to our substitutions atom s

(defn uni
  [u v ks kf]
  (cond
    (symbol? u) #(try-subst u v  ks kf) ;; Try to find substitutions if the left hand
                                        ;; term is a symbol 
    (symbol? v) #(try-subst v u  ks kf) ;; Else, try it for the right hand term

    ;; If we have two symbolic expressions
    ;; with no name clash, we unify all of
    ;; their inner terms, one by one, using
    ;; a recursion.We'll use this inner function
    ;; for this.
    (and (= (first u) (first v))
         (= (count u) (count v))) (letfn [(internal-symbols  
                                            [u v]
                                            (if (nil? u)
                                              #(ks @s)
                                              ;; End of the recursion, run success on the value
                                              ;; referred by s
                                               (fn[]               ;; else, recurse over uni
                                                 (uni (first u)    
                                                      (first v)                                                      
                                                      (fn[_]
                                                        (internal-symbols (next u)
                                                                          (next v)))
                                                      ;; With a success function making us recurse
                                                      ;; over the next terms
                                                      kf))))] ;; and the failure function

                                    ;; For symbolic expressions,
                                    ;; trampoline this inner function
                                    ;; so to initiate a recursive
                                    ;; walk of every one of their
                                    ;; children expressions.
                                    (trampoline internal-symbols  
                                                (next u)
                                                (next v)))
         ;; else we had a symbole clash!
         :default (kf "Error : Symbol Clash!")))                  

(defn unify
  [u v]
  (let [_  (reset! s {})]
    (trampoline uni
                u
                v
                identity
                identity)))
