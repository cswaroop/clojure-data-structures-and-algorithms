(ns recipe22.core
  (:require  [clojure.core.async :as async
              :refer :all
              :exclude [merge into]]))

(defn pick-a-town
  [towns]
  (get towns (rand-int (count towns))))

(defn taxi!
  [taxi-id
   t->m  ;; A channel from taxi to headquarters
   m->t
   towns
   time-to-towns]  ;; A channel from headquarters to taxis
  (let [max-waiting (timeout 3000)
        ;; A timeout channel to cap a taxi's wait in a particular
        ;; town
        my-state (atom {:status :free :at (pick-a-town towns)})]
       ;; Setting initial state for a taxi; :free at a random town
    (go
      (while true
        ;; Launching the co-routine
        (let [[v c] (alts! [m->t max-waiting])]
         ;; Wait for a message on headquarters
         ;; or Quit if timeout is reached
          (cond
           (and v ;; a message arrived, we are not here after a timeout
                (= (get @my-state :at) (get v :from)) ;; The town in the request is the one
                                                      ;; the taxi is currently in 
                (= (get v :type) :request)
                ;; this is a request
                (= (:status @my-state) :free))   ;;And the taxi is free
                                                (let [customer (get v :customer)
                                                     taxi-currently-at (get @my-state :at)
                                                     customer-currently-at  (get v :from)
                                                     destination (get v :to)]
                                                 (>! t->m {:taxi-id taxi-id
                                                           :state (reset! my-state
                                                                          {:status :booked
                                                                           :customer customer
                                                                           :at taxi-currently-at
                                                                           :to destination})}))
                                               ;; send the :booked message to headquarters
            (and v
                 (= (get v :type) :release)) (swap! my-state
                                                    merge
                                                    {:status :free})
                 ;; If the taxi receives a :relase message,
                 ;; set him free

            (and v
                 ;; If it receives a :confirm and it is booked     
                 (= (get v :type) :confirm)
                 (= (:status @my-state) :booked)) (let [destination (get @my-state :to)
                                                        customer (get @my-state :customer)]
                                                    (println "Taxi:" taxi-id
                                                             " has been confirmed for customer")
                                                    (Thread/sleep time-to-towns)
                                                    ;; Get the customer to its destination
                                                    (reset! my-state 
                                                            {:status :free
                                                             :at destination})
                                                    ;; Change my state to :free
                                                    ;; And my current-town to destination
                                                    (println "Taxi:" taxi-id
                                                             ": customer " customer
                                                             "arrived to" destination))
                 ;; v is nil?. We are here after a timeout.
                 ;; If the taxi is not booked, move along
                 ;; by pickeing a random town and visiting it
             (and (nil? v)
                  (not= (:status @my-state) :booked)) (let [new-town (pick-a-town towns)]
                                                        (Thread/sleep time-to-towns) 
                                                        (reset! my-state 
                                                                {:status :free
                                                                 :at new-town}))))))))



(defn send-requests-to-taxis!
  [taxi-channels
   requests
   step-time]
  (go
    (do 
      (while true
        (doseq [r @requests] ;; for every request
          (doseq [t taxi-channels]
            ;; for every channel to taxi
            (>! t r) ;; send that request to that taxi
            (Thread/sleep step-time)))))))
            ;; and wait some time before retrying with
            ;; maybe a new requests queue?

(defn confirm-or-release-taxis!
  [m->taxis
   taxis->m
   requests]
  (go
    (while true
      (let [[v c] (alts! (into [] (vals  taxis->m)))
            ;; wait for some message from the taxis.
            ;; channels are the values of the map:
            ;; {:taxi-id #<core-async-Channel...> ...}
            response-state (get v :state)
            customer-id (get response-state :customer)
            taxi-id (get v :taxi-id)]
        (if (= (get response-state :status) :booked )
          ;; If it is a :booked message
          ;; actually it is the only possible
          ;; kind of message but we keep it for
          ;; future evolutions
          (let [m->t (get m->taxis taxi-id)]
            ;; We get the relevant channel
            ;; so we can send the response
            ;; to the right taxi
            (if (some #{customer-id}
                      (mapv :customer @requests))
              ;; If the message is about a query
              ;; still pending (present in our queue)
              (do 
                (>! m->t {:type :confirm})
                ;; Confirm that taxi
                (swap! requests  #(into [] (filter
                                            (fn [r]
                                              (not= (get r :customer)
                                                    customer-id)))
                                        %)))
                 ;; And delete it from the queue. It has been
                 ;; processed
              (>! m->t {:type :release}))))))))
                 ;; Else, It is a response about an old
                 ;; request that's no more valid. We set
                 ;; this waiting taxi free.




(defn accept-requests!
  [c->m
   requests]
  (go
    (while true
      (let [r (<! c->m)]
        ;;If something comes up
        ;;through the channel
        (swap! requests conj r)))))
        ;; Add it to our requests queue

(defn init-taxis!
  [taxis
   taxis->m
   m->taxis
   towns
   time-to-towns]
  (doseq [taxi-id taxis]
    ;; for each taxi
    (taxi! taxi-id
           ;; Launch a co-routine that holds that Taxi-ID
           (get taxis->m taxi-id)
           (get m->taxis taxi-id)
           towns
           time-to-towns)))
           ;; With channels from and to headquarters
           ;; referenced by this same taxi-id

(defn hq
  [c->m
   taxis
   towns
   time-to-towns]
  (let [requests (atom [])
        ; creating an empty queue for requests
        taxis->m (zipmap taxis (repeat (chan)))
        m->taxis (zipmap taxis (repeat (chan)))]
    ;; and the channels from and to taxis
    (init-taxis! taxis taxis->m m->taxis towns time-to-towns)
    ;; we launch the taxis
    (accept-requests! c->m requests)
    ;; Accept incoming requests
    (send-requests-to-taxis! (vals m->taxis) requests 2000)
    ;; Launch the request sendnig co-routine
    (confirm-or-release-taxis! m->taxis taxis->m requests)))
    ;; and the confirmation or release manager

 


(def time-to-towns 2000)

(def towns [:ariana
            :tunis
            :carthage
            :hammam-lif
            :rades
            :bardo
            :casa])

(def taxis [:t-john 
            :t-bob 
            :t-salah
            :t-ali 
            :t-rich 
            :t-dennis
            :t-steve])

    


(def c->m (chan))
(hq c->m taxis towns time-to-towns)

(go (>! c->m  {:customer :rafik
               :from :ariana
               :to :tunis
               :type :request}))

