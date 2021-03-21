(ns recipe3.core
  (:require [instaparse.core :as insta])
  (:require [clojure.zip :as z])
  (:require [clojure.pprint :refer :all]))

(def p pprint)

(def r3-language
"S = INSTRS
  INSTRS = ((INSTR | LOCKED-INSTRS) <optional-whitespace>)*
  INSTR = HEAVY-OP | MEDIUM-OP | LIGHT-OP

  HEAVY-OP = <optional-whitespace> 'heavy-op' <whitespace> ID <SEP>
  MEDIUM-OP = <optional-whitespace> 'medium-op' <whitespace> ID <SEP>
  LIGHT-OP = <optional-whitespace> 'light-op' <whitespace> ID <SEP>

  LOCKED-INSTRS = LOCK INSTRS UNLOCK
  LOCK = <optional-whitespace> 'lock' <whitespace> ID <SEP>
  UNLOCK = <optional-whitespace> 'unlock' <whitespace> ID <SEP>

  ID = #'[a-zA-Z0-9]+'
  PRIORITY = #'[0-9]+'

  whitespace = #'\\s+'
  optional-whitespace = #'\\s*'
  SEP = #'\\s*' ';'")

(defn gen-program
  [parser program]
  (insta/transform
   {:S identity
    :INSTRS (fn [& args] (vec args))
    :INSTR identity
    :HEAVY-OP (fn [x y] {:inst-type :heavy-op :inst-id (get y 1)})
    :MEDIUM-OP (fn [x y] {:inst-type :medium-op :inst-id (get y 1)})
    :LIGHT-OP (fn [x y] {:inst-type :light-op :inst-id (get y 1)})
    :LOCKED-INSTRS (fn [& args] (vec args))
    :LOCK (fn [x y] {:inst-type :lock :inst-id {:lock (get y 1)} })
    :UNLOCK (fn [x y] {:inst-type :unlock :inst-id {:unlock  (get y 1)}})}
   (parser program)))
 
(defn fire-a-process
  [grammar
   program
   process-id
   priority]
  (let [prsr (insta/parser grammar)
        vec-instructions (gen-program prsr program)
        zpr (z/vector-zip vec-instructions)]
    (loop [result []
           loc (->  zpr z/down)]
      (if (z/end? loc)
        {:process-id process-id
         :instructions result
         :priority priority}
        (recur (if (map? (z/node loc))
                 (conj result (z/node loc))
                 result)
               (z/next loc))))))

(def insts-effort {:heavy-op 10 :medium-op 5 :light-op 2 :lock 1 :unlock 1})
 

;;given scheduled like so
;; [{:process-id "process1" :instructions [{:inst-type :heavy-op :inst-id "op1" :times [1 2 3]} {:inst-type :medium-op :inst-id "op2" :times [ 4 5 6]}]}]


;; this fn outputs
;;({:process-id "process1",
;;  :instructions
;;  ({:inst-id "op1", :inst-type "...", :count 3} {:inst-id "op2", :inst-type "..." :count 3})})

(defn all-locks-indices
  [instructions]
  (let [locks (filter #(= (:inst-type %) :lock)
                      instructions)

        lock-indices (map (fn [l] {:lock-id (l :inst-id)
                                   :lock-idx (.indexOf instructions l)})
                          locks)]
    lock-indices))

(defn the-locks-inst-depends-on
  [instructions instruction]
  (let [the-inst-idx (.indexOf instructions instruction)
        the-lock-idxs (all-locks-indices instructions)]    
    (into []  (->> the-lock-idxs
                   (filter #(> the-inst-idx (:lock-idx %) ))
                   (map :lock-id)))))

(defn lock
  "locks lock lock-id in locks map"
  [locks process-id lock-id]
  (assoc locks lock-id {:locker process-id :locked true}))

(defn unlock
  "unlocks lock lock-id in locks map"
  [locks process-id lock-id]
  (assoc locks lock-id {:locker process-id :locked false}))

(defn is-locked?
  [process-id
   instructions
   locks
   instruction]
  (let [inst-locks (the-locks-inst-depends-on instructions instruction)]
    (some true? (map #(and (not= process-id ((get locks %) :locker))
                           ((get locks %) :locked))
                     inst-locks))))
;; instructions : {:process-id "pr1", :instructions [{:inst-type :lock, :inst-id "l1"} {:inst-type :heavy-op, :inst-id "op1"} {:inst-type :unlock, :inst-id "l1"}], :priority 1}
;; scheduled : [{:process-id "process1" :instructions [{:inst-type :heavy-op :inst-id "op1" :times [1 2 3]} {:inst-type :medium-op :inst-id "op2" :times [ 4 5 6]}]}]
;; scheduled parts
;;({:process-id "process1",
;;  :instructions
;;  ({:inst-id "op1", :inst-type "...", :count 3} {:inst-id "op2", :inst-type "..." :count 3})})

(defn scheduled-processes-parts
  [scheduled]
  (into [] (map  (fn [p] {:process-id (:process-id p)
                          :instructions (into []
                                              (map (fn [i] {:inst-id (:inst-id i)
                                                            :inst-type (:inst-type i)
                                                            :count (count (:times i))})
                                                   (:instructions   p)))})
                 scheduled)))

(defn uncomplete-instruction?
  [instruction-w-count]
  (let [instr-effort (insts-effort (instruction-w-count :inst-type))
        instr-count (instruction-w-count :count)]
    (< instr-count instr-effort)))


(defn uncomplete-process?
  [process-w-counts]
  (let [instrs-w-count (process-w-counts :instructions)]
    (some true? (map uncomplete-instruction?
                      instrs-w-count))))

(defn more-uncomplete-processes?
  [processes-w-count]
  (some true? (map uncomplete-process?
                   processes-w-count)))

(defn find-inst-to-be-fired-in-process
  [locks
   process-id
   the-process-instructions
   the-process-scheduled-parts]
  (let [p-not-locked-instrs (set (->> the-process-instructions
                                      (filter #(not (is-locked? process-id
                                                                the-process-instructions
                                                                locks
                                                                %))))) ;#{id1, id2,...}

        p-uncomplete-instrs (set (->> (:instructions  the-process-scheduled-parts) ; {:inst-id ....; inst-type; count...}
                                      (filter uncomplete-instruction?)
                                      (map #(dissoc % :count))))

        fireable-instrs (clojure.set/intersection p-not-locked-instrs
                                                  p-uncomplete-instrs)
        instr-id-to-fire (->> fireable-instrs 
                              (sort-by #(.indexOf the-process-instructions %) < ) 
                              (first)
                           (:inst-id))]
        instr-id-to-fire))

(defn prepare-scheduled
  [processes]
  (into []  (->> processes
                 (map (fn[p] {:process-id (:process-id p)
                              :instructions (into []
                                                  (->> (:instructions p)
                                                       (map (fn [i] (assoc i :times [])))))})))))

(defn prepare-locks-for-a-p
  [a-process]
  (let [locks (filter #(= (:inst-type %) :lock )
                      (:instructions a-process))]
    (reduce (partial apply unlock) {} (map (fn [l] [(:process-id a-process)
                                                    (:inst-id l)])
                                           locks))))

(defn prepare-locks
  [processes]
  (reduce merge (map prepare-locks-for-a-p processes)))

(defn progress-on-process!
  [locks-ref
   scheduled-ref
   the-process
   quantum]
  (let [the-process-instrs (the-process :instructions)
        processes-scheduled-parts (scheduled-processes-parts @scheduled-ref)
        the-process-scheduled-parts (->> processes-scheduled-parts
                                         (filter #(= (:process-id %)
                                                     (:process-id the-process)))
                                         (first))]
    
    (if-let [the-instr-to-fire-id (find-inst-to-be-fired-in-process @locks-ref
                                                                    (:process-id the-process)
                                                                    the-process-instrs
                                                                    the-process-scheduled-parts )]
      (dosync 
       (let [the-instr-to-fire (->> the-process-instrs
                                    (filter #(= (:inst-id %)
                                                the-instr-to-fire-id))
                                     (first))]
         (cond          
           ;; here I have on inst to be fired. If it is lock, I lock the inst-id
           (= (:inst-type the-instr-to-fire) :lock ) (alter locks-ref
                                                            lock
                                                            (:process-id the-process)
                                                            the-instr-to-fire-id)
           ;; here If It is an unlock, I Unlock the inst-id
           (= (:inst-type the-instr-to-fire) :unlock ) (alter locks-ref
                                                              unlock 
                                                              (:process-id the-process)
                                                              {:lock (:unlock the-instr-to-fire-id)})))
       ;; and lock or whatever, I update scheduled-parts
       (let [p-in-scheduled (->> @scheduled-ref
                                 (filter #(= (:process-id %) (:process-id the-process)))
                                 (first)) ;; index of process in shceduled
             instr-in-p-in-scheduled (->> (get p-in-scheduled :instructions)
                                          (filter #(= (:inst-id %) the-instr-to-fire-id))
                                          (first))
             idx-p-in-scheduled (max 0 (.indexOf @scheduled-ref p-in-scheduled))

             idx-inst-in-p-in-scheduled (max 0 (.indexOf  (get p-in-scheduled :instructions)
                                                          instr-in-p-in-scheduled))
             times-in-inst-in-p-in-scheduled (get (get (p-in-scheduled :instructions)
                                                       idx-inst-in-p-in-scheduled) :times )
             _ (alter scheduled-ref assoc-in [idx-p-in-scheduled :instructions
                                              idx-inst-in-p-in-scheduled :times]
                      (conj times-in-inst-in-p-in-scheduled quantum))])
       true)
      false)))


(defn gen-processes-cycles
  [processes]
  (let [sorted-procs-by-prio (sort-by :priority > processes)
        procs-pattern (mapcat #(repeat (:priority %)
                                       %)
                              sorted-procs-by-prio)]
    (cycle procs-pattern)))

(defn process-sequential-time
  [a-process]
  (let [instructions (a-process :instructions)
        inst-types (map :inst-type instructions)
        lengths (map #(get insts-effort %) inst-types)]
    (reduce + lengths)))

(defn schedule-programs
  [language programs]
   (let [processes (into [] (map #(fire-a-process language
                                                  (:program %)
                                                  (:process-id %)
                                                  (:priority %)) programs))
     ;; we would abandon if time spent so far gets longer than 2 times all processes executed sequentially one after the other
         timeout (* 2 (reduce + (map process-sequential-time
                                     processes)))
         locks (ref (prepare-locks processes))
         scheduled (ref (prepare-scheduled processes))
         processes-cycles  (gen-processes-cycles processes)]
     (loop [quantum 0
            remaining-processes processes-cycles]
       
       (if (and (more-uncomplete-processes? (scheduled-processes-parts @scheduled))
                (< quantum timeout))
         (do
           (progress-on-process! locks scheduled
                                 (first remaining-processes)
                                 quantum)   
           (recur (inc quantum)
                  (next remaining-processes)))
         @scheduled))))
