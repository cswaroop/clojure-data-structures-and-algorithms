(ns recipe18.core
  (:require [clojure.core.logic :as logic]))

;;;[[:exp0 :- [:t :> :t!]] [:exp1 :- :t ] [[:app :exp0 :exp1] :- [:t!]]]


;[[:app :concat [:x :y]] [:x :- :string] [:y :- :string] [:app :concat :- [[:string :string] :> :string]]]

(logic/defne apply-rulo
  ^:tabled [e c out]
  ;; This is a tabled goal, so we ensure
  ;; termination
  ([ _  [:var x t]  _] (logic/== out [x :- t]))
  ;; This recognizes a :var rules and lays out
  ;; the var "is of type" type new knowledge
  ([ _ [:app _ [x y]]   _] (logic/fresh [tx ty]
                             (logic/conde
                              [(logic/membero [x :- tx] e)
                               (logic/membero [y :- ty] e)
                               (logic/== [[x y] :- [tx ty]] out)]
                              [(apply-rulo e x out)]
                              [(apply-rulo e y out)])))
  ;; This recognizes that we are appling an expression on a tuple,
  ;; it inferts the type of the tuple as being [:type1 :type2]
  ;; and recursively descends the tuple so nested expression
  ;; are processed too.
  ([ _ [:app e0 e1]  _] (logic/fresh [ts tt]
                             (logic/membero [e0 :- [ts :> tt]] e)
                             (logic/membero [e1 :- ts] e)
                             (logic/== [[:app e0 e1] :- tt] out))))
;; This is the application of the proper :app rule. Unifies unknown vars
;; with any types present in the knowledge base, and applies it if
;; it is able to find all of the part of the :app rule. Note the overlapping
;; with the previous rule, used to infer types of tuples.

(def infer-typo
  (logic/tabled  [e out]
                 ;; This is a tabled goal to ensure
                 ;; termination of the recursivity
                 (logic/fresh [c r]
                   (logic/membero c e)
                   ;; we will process each one of the members
                   (apply-rulo e c r)
                   ;; to try to infer new facts out of it
                   (logic/conde
                    ;; Using a conde, we emit this new fact
                    [(logic/== r out)]
                    ;; plus a recursive descent
                    [(logic/fresh [n]
                       (logic/nafc logic/membero  r e)
                       ;; if the new fact is not already presnt
                       ;; in the environment
                       (logic/conjo e r n)
                       ;; We append it to the environment
                       ;; and emit the recursive call
                       (infer-typo n out))]))))


    
   

(logic/run* [q]  (infer-typo
                  [[:app :concat [[:app :concat  [:x :z]]
                                  [:app :concat [:y :t]]]]
                   [:var :x :string]
                   [:var :z :string]
                   [:var :y :string]
                   [:var :t :string]
                   [:concat :- [[:string :string] :> :string]]]  q))
  
