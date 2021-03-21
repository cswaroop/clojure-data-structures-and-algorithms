(ns recipe7.core
  (:require [clojure.string :refer (split split-lines trim escape) ])
  (:require [clojure.zip :as z]))

(defn parse-grammar
  [grammar]
  (let [lines (split-lines grammar)
        lines-w-rule-names (->> lines
                                (map #(split  % #"=") )
                                (map (fn[[r b]] [(trim  r)
                                                 (split (trim b)
                                                        #"\s+")]))
                                (into []))]
    lines-w-rule-names))

(defn gen-configs-from-def
  [v]
  (loop [result [[[] v]]
         before-point []
         after-point v]
    (if (empty? after-point)
      result
      ;;=> We are done with this definition
      (let [new-before-point (conj before-point (first after-point))
            new-after-point (into [](next after-point))]
        ;;=> we advance the point, removing one symbol
        ;;   from the after-vector and putting it in
        ;;   the before-vector
        (recur
         ;; then we advance with the next possible configuration
         (conj result [new-before-point
                       new-after-point])
         new-before-point
         new-after-point)))))

(defn gen-a-configurating-set
  [[rule definition]]
  (let [def-configs (gen-configs-from-def definition)]
    ;;=> We generate all configurations
    ;; with the rule name
    (into [] (map (fn [def-config]
                    [rule def-config])
                  def-configs))))

(defn configurating-sets
  [parsed-grammar]
  (into []
        ;;=> We generate all configurating sets
        ;;  [rule [possible configuration...]]
        ;;  putting them in the same bucket
        (mapcat #(gen-a-configurating-set %)
                parsed-grammar)))

(defn non-terminal?
  [parsed-grammar
   symbol]
  (loop [remaining parsed-grammar]
    ;;=> For each rule of our grammar
    (if (seq remaining)
      (let [current (first remaining)]
        (if (= symbol (get current 0))
          true
          ;;=> If the given symbol is at
          ;; first place of one vector,
          ;; it is considered as a non-terminal
          (recur (rest remaining))))
           ;;=> we check with the next rule
      false))) ;;=> we ended the recursion, hence
               ;; we were not able to match symbol
               ;; with a rule definition:
               ;; symbol is a terminal

(defn grammar-symbols
  [parsed-grammar]
  (let [zpr (z/vector-zip parsed-grammar)]
    (loop [symbols #{}
           loc (-> zpr z/down)]
      ;;=> We will inspect the rules
      ;; with a zipper
      (if (-> loc z/end?)
        symbols ;;=> The walk has ended, return symbols
        (let [current-node (-> loc z/node)]
          (if (= (class current-node) String)
            ;;=> If we caught a grammar literal
            ;;   we add it to the result set
            (recur (conj symbols current-node)
                   (->  loc z/next))
            ;;=> else we go deeper in the
            ;; rules tree without appending
            ;; to the result set
            (recur symbols
                   (-> loc z/next))))))))

(defn get-conf-sets-if-point-at-non-terminal
  [config-sets
   non-terminal]
  (into []
        ;;=> what are the rules defining
        ;;   this non terminal and having the
        ;;   point at the beginning of the
        ;;   definition
        (filter (fn[[r d]]
                  (and (= r non-terminal)
                       (empty? (get d 0))))
                config-sets)))

(defn point-at
  [[rule-name definition]]
  ;;=> Where is the point in
  ;;   this configurating set?
  (first (get definition 1)))

(defn cset-to-cset-transition
  [config-sets
   a-config-set
   a-symbol]
  (let [this-rule-name (get a-config-set 0)
        this-def (get a-config-set 1)
        this-def-before-point (this-def 0)
        this-def-after-point (this-def 1)]
    ;;=> Gathering information about the configurating
    ;;   set
    (if (not=  a-symbol (first this-def-after-point))
      nil
      ;;=> This configurating set point cannont advance
      ;;   with this symbol
      (let [new-def-before-point (conj this-def-before-point
                                       a-symbol)
            new-def-after-point (into [] (rest this-def-after-point))
            new-config-set [this-rule-name [new-def-before-point
                                            new-def-after-point]]
            ;;=> What would the new configurating set be?
            new-config-exists? (some #(= new-config-set %)
                                     config-sets)]
            ;;=> Does it exist in the valid configurating sets?
        (if new-config-exists?
          new-config-set
          [:error (str "Symbol " a-symbol " not leading anywhere!")])))))

(defn state-to-state-given-a-symbol
  [parsed-grammar
   config-sets
   start-state ;=> A state is a vector of configurating sets
   a-symbol]
  (let [direct-tr-state (->> start-state
                            (map #(cset-to-cset-transition config-sets
                                                           %
                                                           a-symbol))
                            (filter (partial not= nil))
                            (into []))
        ;;=> First we compute the state as the configurating sets
        ;;   immediately available by advancing the points
         added-states (->> (map  point-at
                                      direct-tr-state)
                                (filter (partial  non-terminal?
                                                  parsed-grammar))
                                (mapcat (partial get-conf-sets-if-point-at-non-terminal
                                                 config-sets)))]
        ;;=> And then we compute the states generated
        ;; The point landing in any non terminal state
    (into direct-tr-state added-states)))
  
(defn all-transitions-from-state
  [parsed-grammar
   config-sets
   start-state]
  (let [all-symbols (grammar-symbols parsed-grammar)]
    (->> all-symbols
         (map (fn [symbol] (let [transition (state-to-state-given-a-symbol
                                             parsed-grammar
                                             config-sets
                                             start-state
                                             symbol)]
                             ;; => We apply state-to-state for every symbol
                             ;;    Of the grammar, starting from start state
                             (if ((comp not empty?) transition)
                               ;;=> And we issue a map containing
                               ;; a start-state, a transition symbol
                               ;; and the state we'd be in applying
                               ;; symbol to start-state
                               {:start-state start-state
                                :transition symbol
                                :end-state transition} ))))
         (filter (comp not nil?))
         (into []))))


(defn initial-state
 [config-sets]
 (into []
       ;;=> Initial state is built by
       ;;   keeping only rules with
       ;;   before-point vectors empty
       (filter (fn [[r d]]
                 (empty? (get d 0)))
               config-sets)))

(defn transition-table
  [parsed-grammar
   config-sets
   state0]
  (let [all-transitions-for-grammar (partial all-transitions-from-state
                                             parsed-grammar
                                             config-sets)]
    ;;=> We produce a partial function for commodity
    (loop [result (all-transitions-for-grammar state0)
           new-states (into []  (map :end-state result))]
      ;;=> We begin by computing the new states reached from
      ;;   state0
        (if (every? empty? new-states)
          result
          ;;=> If no new new-states, we are done.
          ;;   we emit result
          (let [new-transitions (mapcat all-transitions-for-grammar
                                        new-states)]
            ;;=> Else, we compute other states that'd be
            ;;   attained from these freshly computed new states
            ;;   recurring using them 
            (recur (into result (filter (comp not empty?)
                                        new-transitions))
                   (map :end-state 
                        new-transitions)))))))

(defn escape-special-chars
  [s]
  (if (= \[  (first s))
    s
    (escape
     s
     {\+  "\\+"
      \*  "\\*"
      \?  "\\?"
      \^  "\\^"
      \|  "\\|"
      \&  "\\&"
      \(  "\\("
      \)  "\\)"
      \[  "\\["
      \]  "\\]"
      \{  "\\{"
      \}  "\\}"})))

(defn goto-state
  [tr-table
   start-state
   transition]
  (->> tr-table
       (filter  #(and  (= (get % :start-state)
                          start-state) 
                       (re-matches (re-pattern (escape-special-chars (get % :transition)))
                                    transition)))
       (first)
       :end-state))

(defn verify-reduceable
  [state]
  (if-let [the-reduceable  (->> state
                             (filter #(let [rule-name (get % 0)
                                            definition (get % 1)
                                            before-point (get definition 0)
                                            after-point (get definition 1)]
                                        (if (empty? after-point) true 
                                            false)))
                             (first))]
    ;;=> If in our state there is one definition having the point
    ;;   at the end, that is, having the second vector empty,
    ;;   we consider it as reduceable, and return a map containing
    ;;   the name of the reducing rule and the number of symbols
    ;;   to reduce by, that is, the count of the contents of
    ;;   the first vector of the definition.
    ;;   Else, we return nil.
    {:reducing-rule (get the-reduceable 0)
     :nb-symbols-to-pop (count (get (get the-reduceable 1) 0))}
    nil))

(defn pop-n
  [n v]
  (loop [times 0
         popped v]
    (if (or  (= times n)
             (empty? popped))
      popped
      (recur (inc times)
             (pop popped)))))

(defn peek-n
  [n v]
  (loop [result []
         times 0
         popped v]
    (if (or  (= times n)
             (empty? popped))
      result
      (recur (into [(peek popped)] result)
             (inc times)
             (pop popped)))))


(defn parse-program
  [grammar
   program]
  (let [parsed-grammar (parse-grammar grammar)
        ;;=> We parse the grammar
        config-sets (configurating-sets parsed-grammar)
        ;;=> Generate the configurating-sets
        state0 (initial-state config-sets)
        ;;=> And the initial state
        tr-table (transition-table parsed-grammar
                                   config-sets
                                   state0)
        ;;=> We then buid the transition table
        input (split program #"\s+")]
        ;;=> And lay the input program into a vector
        ;;   that we will traverse sequentially,
        ;;   as a linked list    
    (loop [stack [state0] ;=> The stak contains the initial state
           parse-tree []  ;=> The parse tree is empty
           remaining-input input ;=> We initialize the input
           input-position 0      ;=> We'll keep track of
                                 ;input position for error reporting 
           end? false]           ;=> this variable will be set to true
                                 ; whenever we detect we reduced rule 'S'
      (if end?
        ;;=> The parsing has ended with success, we return the parse tree
        parse-tree 
        ;; else we verifiy if the state at the top is reduceable
        (if-let [reduce-transition (verify-reduceable (peek stack))]
          ;;=> If it is, we update stack and parse tree
          ;; as per the algorithm
            (let [reducing-rule (reduce-transition :reducing-rule)
                  nb-symbols-to-pop (reduce-transition :nb-symbols-to-pop)
                  stack-after-reducing (pop-n nb-symbols-to-pop
                                              stack)  ;=> We pop n states from the stack
                  stack-after-transition (conj stack-after-reducing
                                               (goto-state tr-table
                                                           (peek stack-after-reducing)
                                                           reducing-rule))
                  ;;=> And go to the state determined by the transition of
                  ;;   the state remaing at top with the reducing rule name
                  new-end? (= reducing-rule "S")     ;=> Did we just reduce 'S'?
                                                     ; Next time we stop.
                  new-parse-tree (if (not new-end?)
                                   (conj (pop-n nb-symbols-to-pop
                                                parse-tree)
                                         [reducing-rule (peek-n nb-symbols-to-pop
                                                                parse-tree)])
                                   ;;=> If I'm not at end, I wrap n last parsed symbols
                                   ;;   inside a vector with rule name as first element
                                   ;;   To construct the parse tree, along with the rest of
                                   ;;   Parse tree.
                                   ;;   Else I only wrap the symbols with a vector containing
                                   ;;   the 'S' rule
                                   [reducing-rule (peek-n nb-symbols-to-pop
                                                          parse-tree)])]
              (recur stack-after-transition
                     new-parse-tree
                     remaining-input
                     input-position
                     new-end?)) ;;=> And I recur
          ;;=> We will not reduce, so we are shifting
          (let [shifted-input (first remaining-input)
                state-on-top (peek stack)]
            (if-let [new-state (goto-state tr-table
                                           state-on-top
                                           shifted-input)]
              ;;=> If there is a valid transition from the
              ;;   state at the top using the shifted token
              (recur (conj stack new-state)
                     (conj parse-tree shifted-input)
                     (rest remaining-input)
                     (inc input-position)
                     false) ;=> We recur adding the new state
                            ;   and the shifted token to the parse tree
              (str "Parse Error: Unexpected symbol '"
                   shifted-input
                   "' at position "
                   input-position)))))))) ;=> Else we emit a parse error
