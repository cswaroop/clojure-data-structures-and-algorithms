// Compiled by ClojureScript 0.0-3269 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4423__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4423__auto__)){
var ns = temp__4423__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__25768_25780 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__25769_25781 = null;
var count__25770_25782 = (0);
var i__25771_25783 = (0);
while(true){
if((i__25771_25783 < count__25770_25782)){
var f_25784 = cljs.core._nth.call(null,chunk__25769_25781,i__25771_25783);
cljs.core.println.call(null,"  ",f_25784);

var G__25785 = seq__25768_25780;
var G__25786 = chunk__25769_25781;
var G__25787 = count__25770_25782;
var G__25788 = (i__25771_25783 + (1));
seq__25768_25780 = G__25785;
chunk__25769_25781 = G__25786;
count__25770_25782 = G__25787;
i__25771_25783 = G__25788;
continue;
} else {
var temp__4423__auto___25789 = cljs.core.seq.call(null,seq__25768_25780);
if(temp__4423__auto___25789){
var seq__25768_25790__$1 = temp__4423__auto___25789;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25768_25790__$1)){
var c__18891__auto___25791 = cljs.core.chunk_first.call(null,seq__25768_25790__$1);
var G__25792 = cljs.core.chunk_rest.call(null,seq__25768_25790__$1);
var G__25793 = c__18891__auto___25791;
var G__25794 = cljs.core.count.call(null,c__18891__auto___25791);
var G__25795 = (0);
seq__25768_25780 = G__25792;
chunk__25769_25781 = G__25793;
count__25770_25782 = G__25794;
i__25771_25783 = G__25795;
continue;
} else {
var f_25796 = cljs.core.first.call(null,seq__25768_25790__$1);
cljs.core.println.call(null,"  ",f_25796);

var G__25797 = cljs.core.next.call(null,seq__25768_25790__$1);
var G__25798 = null;
var G__25799 = (0);
var G__25800 = (0);
seq__25768_25780 = G__25797;
chunk__25769_25781 = G__25798;
count__25770_25782 = G__25799;
i__25771_25783 = G__25800;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_25801 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__18106__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__18106__auto__)){
return or__18106__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_25801);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_25801)))?cljs.core.second.call(null,arglists_25801):arglists_25801));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__25772 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__25773 = null;
var count__25774 = (0);
var i__25775 = (0);
while(true){
if((i__25775 < count__25774)){
var vec__25776 = cljs.core._nth.call(null,chunk__25773,i__25775);
var name = cljs.core.nth.call(null,vec__25776,(0),null);
var map__25777 = cljs.core.nth.call(null,vec__25776,(1),null);
var map__25777__$1 = ((cljs.core.seq_QMARK_.call(null,map__25777))?cljs.core.apply.call(null,cljs.core.hash_map,map__25777):map__25777);
var doc = cljs.core.get.call(null,map__25777__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__25777__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__25802 = seq__25772;
var G__25803 = chunk__25773;
var G__25804 = count__25774;
var G__25805 = (i__25775 + (1));
seq__25772 = G__25802;
chunk__25773 = G__25803;
count__25774 = G__25804;
i__25775 = G__25805;
continue;
} else {
var temp__4423__auto__ = cljs.core.seq.call(null,seq__25772);
if(temp__4423__auto__){
var seq__25772__$1 = temp__4423__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25772__$1)){
var c__18891__auto__ = cljs.core.chunk_first.call(null,seq__25772__$1);
var G__25806 = cljs.core.chunk_rest.call(null,seq__25772__$1);
var G__25807 = c__18891__auto__;
var G__25808 = cljs.core.count.call(null,c__18891__auto__);
var G__25809 = (0);
seq__25772 = G__25806;
chunk__25773 = G__25807;
count__25774 = G__25808;
i__25775 = G__25809;
continue;
} else {
var vec__25778 = cljs.core.first.call(null,seq__25772__$1);
var name = cljs.core.nth.call(null,vec__25778,(0),null);
var map__25779 = cljs.core.nth.call(null,vec__25778,(1),null);
var map__25779__$1 = ((cljs.core.seq_QMARK_.call(null,map__25779))?cljs.core.apply.call(null,cljs.core.hash_map,map__25779):map__25779);
var doc = cljs.core.get.call(null,map__25779__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__25779__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__25810 = cljs.core.next.call(null,seq__25772__$1);
var G__25811 = null;
var G__25812 = (0);
var G__25813 = (0);
seq__25772 = G__25810;
chunk__25773 = G__25811;
count__25774 = G__25812;
i__25775 = G__25813;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map