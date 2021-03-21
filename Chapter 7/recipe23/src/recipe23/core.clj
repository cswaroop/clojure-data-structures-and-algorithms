(ns recipe23.core)

;; S = sexp
;; sexp =  "(" element* ")"
;; element = term | sexp
;; term = [a-zA-Z0-9]*'



(def symbols (atom []))

(defn next-symbol!
  []
  (swap! symbols rest))

(defn accept!
  [re-s]
  (if-let [current-symbol (first @symbols)]
    ;; symbols is not empty
    (do
      (if (re-matches (re-pattern re-s)
                      current-symbol)
        ;; If the symbol if equal to what we
        ;; are expecting 
        (do
          (next-symbol!)
          ;; Move to the next symbol
          true)
          ;; and return true, we accept it.
        false)) ;; Else we discard it, not moving to
                ;; next symbol 
    false)) ;; symbols is empty, nothing to accept.



(def term (partial accept! "[a-zA-Z0-9]*")) 

(declare elements!);; We declare elements! as it will be used in sexp!
                   ;; before its actual implementation 

(defn sexp!
  []
  (cond
    ;; Verify if we are at an opening parenthesis
    (accept! "\\(") (do 
                      (trampoline elements!) ;; recursively verify the elements
                      (if (accept! "\\)") ;; and verify if we have a closing parenthesis
                        elements! ;; then carry on with other elements
                        (println "Parse Error!"))) ;; else emit a parse error
                                                   ;; for a non-present closing parenthesis 
    :default nil)) ;; Return nil else, mainly to terminate recursion in the case
                   ;; the symbols atom gets empty.  

(defn elements!
  []
  (cond
    (term)  elements! ;; if we accept a term, recur
    :default sexp!)) ;; else, try to see if it is a symbolic expression



(def sample-sexp1 ["("
                     "(" "a" "c" ")"])
(def sample-sexp2 ["("
                     "(" "a" "c" ")"
                     "d" ")"])
(def sample-sexp3 ["("
                     "(" "+" "c" ")"
                     ")"])


(defn parse-sexp
  [a-sexp]
  (do
    (reset! symbols a-sexp)
    ;; Init the symbols atom with the succession
    ;; of tokens given as a parameter
    (trampoline sexp!)
    ;; trampoline sexp!
    (if (not-empty @symbols)
      (println "Parse Error!"))))
    ;; issue a parse error if the symbols
    ;; were not totally consumed
