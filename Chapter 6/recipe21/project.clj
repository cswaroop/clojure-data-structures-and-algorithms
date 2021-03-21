(defproject recipe21 "0.1.0-SNAPSHOT"
  :description "Recipe 21"
  :url "https://www.packtpub.com/application-development/clojure-data-structures-and-algorithms-cookbook"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :dependencies [[org.clojure/clojure "1.7.0-RC1"]
                 [org.clojure/clojurescript "0.0-3269"]
                 [org.clojure/core.async "0.1.346.0-17112a-alpha"]]
  :clean-targets ^{:protect false} [:target-path "out"]
  :plugins [[lein-cljsbuild "1.0.6"]
            [lein-figwheel "0.3.3"]]
  :cljsbuild {
              :builds [{:id "dev"
                        :source-paths ["src"]
                        :figwheel true
                        :compiler {:main recipe21.core}}]})
