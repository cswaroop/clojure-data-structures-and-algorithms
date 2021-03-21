// Compiled by ClojureScript 0.0-3269 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),args], null));

return args;
});
figwheel.client.console_print = (function figwheel$client$console_print(args){
console.log.apply(console,cljs.core.into_array.call(null,args));

return args;
});
figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__24761__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__24761 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24762__i = 0, G__24762__a = new Array(arguments.length -  0);
while (G__24762__i < G__24762__a.length) {G__24762__a[G__24762__i] = arguments[G__24762__i + 0]; ++G__24762__i;}
  args = new cljs.core.IndexedSeq(G__24762__a,0);
} 
return G__24761__delegate.call(this,args);};
G__24761.cljs$lang$maxFixedArity = 0;
G__24761.cljs$lang$applyTo = (function (arglist__24763){
var args = cljs.core.seq(arglist__24763);
return G__24761__delegate(args);
});
G__24761.cljs$core$IFn$_invoke$arity$variadic = G__24761__delegate;
return G__24761;
})()
;
});
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__24764){
var map__24766 = p__24764;
var map__24766__$1 = ((cljs.core.seq_QMARK_.call(null,map__24766))?cljs.core.apply.call(null,cljs.core.hash_map,map__24766):map__24766);
var message = cljs.core.get.call(null,map__24766__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__24766__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__18106__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__18106__auto__)){
return or__18106__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__18094__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__18094__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__18094__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__21116__auto___24895 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21116__auto___24895,ch){
return (function (){
var f__21117__auto__ = (function (){var switch__21054__auto__ = ((function (c__21116__auto___24895,ch){
return (function (state_24869){
var state_val_24870 = (state_24869[(1)]);
if((state_val_24870 === (7))){
var inst_24865 = (state_24869[(2)]);
var state_24869__$1 = state_24869;
var statearr_24871_24896 = state_24869__$1;
(statearr_24871_24896[(2)] = inst_24865);

(statearr_24871_24896[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24870 === (1))){
var state_24869__$1 = state_24869;
var statearr_24872_24897 = state_24869__$1;
(statearr_24872_24897[(2)] = null);

(statearr_24872_24897[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24870 === (4))){
var inst_24833 = (state_24869[(7)]);
var inst_24833__$1 = (state_24869[(2)]);
var state_24869__$1 = (function (){var statearr_24873 = state_24869;
(statearr_24873[(7)] = inst_24833__$1);

return statearr_24873;
})();
if(cljs.core.truth_(inst_24833__$1)){
var statearr_24874_24898 = state_24869__$1;
(statearr_24874_24898[(1)] = (5));

} else {
var statearr_24875_24899 = state_24869__$1;
(statearr_24875_24899[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24870 === (13))){
var state_24869__$1 = state_24869;
var statearr_24876_24900 = state_24869__$1;
(statearr_24876_24900[(2)] = null);

(statearr_24876_24900[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24870 === (6))){
var state_24869__$1 = state_24869;
var statearr_24877_24901 = state_24869__$1;
(statearr_24877_24901[(2)] = null);

(statearr_24877_24901[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24870 === (3))){
var inst_24867 = (state_24869[(2)]);
var state_24869__$1 = state_24869;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24869__$1,inst_24867);
} else {
if((state_val_24870 === (12))){
var inst_24840 = (state_24869[(8)]);
var inst_24853 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_24840);
var inst_24854 = cljs.core.first.call(null,inst_24853);
var inst_24855 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_24854);
var inst_24856 = console.warn("Figwheel: Not loading code with warnings - ",inst_24855);
var state_24869__$1 = state_24869;
var statearr_24878_24902 = state_24869__$1;
(statearr_24878_24902[(2)] = inst_24856);

(statearr_24878_24902[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24870 === (2))){
var state_24869__$1 = state_24869;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24869__$1,(4),ch);
} else {
if((state_val_24870 === (11))){
var inst_24849 = (state_24869[(2)]);
var state_24869__$1 = state_24869;
var statearr_24879_24903 = state_24869__$1;
(statearr_24879_24903[(2)] = inst_24849);

(statearr_24879_24903[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24870 === (9))){
var inst_24839 = (state_24869[(9)]);
var inst_24851 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_24839,opts);
var state_24869__$1 = state_24869;
if(cljs.core.truth_(inst_24851)){
var statearr_24880_24904 = state_24869__$1;
(statearr_24880_24904[(1)] = (12));

} else {
var statearr_24881_24905 = state_24869__$1;
(statearr_24881_24905[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24870 === (5))){
var inst_24839 = (state_24869[(9)]);
var inst_24833 = (state_24869[(7)]);
var inst_24835 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_24836 = (new cljs.core.PersistentArrayMap(null,2,inst_24835,null));
var inst_24837 = (new cljs.core.PersistentHashSet(null,inst_24836,null));
var inst_24838 = figwheel.client.focus_msgs.call(null,inst_24837,inst_24833);
var inst_24839__$1 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_24838);
var inst_24840 = cljs.core.first.call(null,inst_24838);
var inst_24841 = figwheel.client.reload_file_state_QMARK_.call(null,inst_24839__$1,opts);
var state_24869__$1 = (function (){var statearr_24882 = state_24869;
(statearr_24882[(9)] = inst_24839__$1);

(statearr_24882[(8)] = inst_24840);

return statearr_24882;
})();
if(cljs.core.truth_(inst_24841)){
var statearr_24883_24906 = state_24869__$1;
(statearr_24883_24906[(1)] = (8));

} else {
var statearr_24884_24907 = state_24869__$1;
(statearr_24884_24907[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24870 === (14))){
var inst_24859 = (state_24869[(2)]);
var state_24869__$1 = state_24869;
var statearr_24885_24908 = state_24869__$1;
(statearr_24885_24908[(2)] = inst_24859);

(statearr_24885_24908[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24870 === (10))){
var inst_24861 = (state_24869[(2)]);
var state_24869__$1 = (function (){var statearr_24886 = state_24869;
(statearr_24886[(10)] = inst_24861);

return statearr_24886;
})();
var statearr_24887_24909 = state_24869__$1;
(statearr_24887_24909[(2)] = null);

(statearr_24887_24909[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24870 === (8))){
var inst_24840 = (state_24869[(8)]);
var inst_24843 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_24844 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_24840);
var inst_24845 = cljs.core.async.timeout.call(null,(1000));
var inst_24846 = [inst_24844,inst_24845];
var inst_24847 = (new cljs.core.PersistentVector(null,2,(5),inst_24843,inst_24846,null));
var state_24869__$1 = state_24869;
return cljs.core.async.ioc_alts_BANG_.call(null,state_24869__$1,(11),inst_24847);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__21116__auto___24895,ch))
;
return ((function (switch__21054__auto__,c__21116__auto___24895,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__21055__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__21055__auto____0 = (function (){
var statearr_24891 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24891[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__21055__auto__);

(statearr_24891[(1)] = (1));

return statearr_24891;
});
var figwheel$client$file_reloader_plugin_$_state_machine__21055__auto____1 = (function (state_24869){
while(true){
var ret_value__21056__auto__ = (function (){try{while(true){
var result__21057__auto__ = switch__21054__auto__.call(null,state_24869);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21057__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21057__auto__;
}
break;
}
}catch (e24892){if((e24892 instanceof Object)){
var ex__21058__auto__ = e24892;
var statearr_24893_24910 = state_24869;
(statearr_24893_24910[(5)] = ex__21058__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24869);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24892;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21056__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24911 = state_24869;
state_24869 = G__24911;
continue;
} else {
return ret_value__21056__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__21055__auto__ = function(state_24869){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__21055__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__21055__auto____1.call(this,state_24869);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__21055__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__21055__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__21055__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__21055__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__21055__auto__;
})()
;})(switch__21054__auto__,c__21116__auto___24895,ch))
})();
var state__21118__auto__ = (function (){var statearr_24894 = f__21117__auto__.call(null);
(statearr_24894[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21116__auto___24895);

return statearr_24894;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21118__auto__);
});})(c__21116__auto___24895,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__24912_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__24912_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
var base_path_24919 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_24919){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,result_handler){
try{var _STAR_print_fn_STAR_24917 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_24918 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_24917,_STAR_print_newline_STAR_24918,base_path_24919){
return (function() { 
var G__24920__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__24920 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24921__i = 0, G__24921__a = new Array(arguments.length -  0);
while (G__24921__i < G__24921__a.length) {G__24921__a[G__24921__i] = arguments[G__24921__i + 0]; ++G__24921__i;}
  args = new cljs.core.IndexedSeq(G__24921__a,0);
} 
return G__24920__delegate.call(this,args);};
G__24920.cljs$lang$maxFixedArity = 0;
G__24920.cljs$lang$applyTo = (function (arglist__24922){
var args = cljs.core.seq(arglist__24922);
return G__24920__delegate(args);
});
G__24920.cljs$core$IFn$_invoke$arity$variadic = G__24920__delegate;
return G__24920;
})()
;})(_STAR_print_fn_STAR_24917,_STAR_print_newline_STAR_24918,base_path_24919))
;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(eval(code))].join('')], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_24918;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_24917;
}}catch (e24916){if((e24916 instanceof Error)){
var e = e24916;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_24919], null));
} else {
var e = e24916;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_24919))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = {};
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__24923){
var map__24928 = p__24923;
var map__24928__$1 = ((cljs.core.seq_QMARK_.call(null,map__24928))?cljs.core.apply.call(null,cljs.core.hash_map,map__24928):map__24928);
var opts = map__24928__$1;
var build_id = cljs.core.get.call(null,map__24928__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__24928,map__24928__$1,opts,build_id){
return (function (p__24929){
var vec__24930 = p__24929;
var map__24931 = cljs.core.nth.call(null,vec__24930,(0),null);
var map__24931__$1 = ((cljs.core.seq_QMARK_.call(null,map__24931))?cljs.core.apply.call(null,cljs.core.hash_map,map__24931):map__24931);
var msg = map__24931__$1;
var msg_name = cljs.core.get.call(null,map__24931__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__24930,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),((function (vec__24930,map__24931,map__24931__$1,msg,msg_name,_,map__24928,map__24928__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__24930,map__24931,map__24931__$1,msg,msg_name,_,map__24928,map__24928__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__24928,map__24928__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__24935){
var vec__24936 = p__24935;
var map__24937 = cljs.core.nth.call(null,vec__24936,(0),null);
var map__24937__$1 = ((cljs.core.seq_QMARK_.call(null,map__24937))?cljs.core.apply.call(null,cljs.core.hash_map,map__24937):map__24937);
var msg = map__24937__$1;
var msg_name = cljs.core.get.call(null,map__24937__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__24936,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__24938){
var map__24946 = p__24938;
var map__24946__$1 = ((cljs.core.seq_QMARK_.call(null,map__24946))?cljs.core.apply.call(null,cljs.core.hash_map,map__24946):map__24946);
var on_compile_warning = cljs.core.get.call(null,map__24946__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__24946__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__24946,map__24946__$1,on_compile_warning,on_compile_fail){
return (function (p__24947){
var vec__24948 = p__24947;
var map__24949 = cljs.core.nth.call(null,vec__24948,(0),null);
var map__24949__$1 = ((cljs.core.seq_QMARK_.call(null,map__24949))?cljs.core.apply.call(null,cljs.core.hash_map,map__24949):map__24949);
var msg = map__24949__$1;
var msg_name = cljs.core.get.call(null,map__24949__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__24948,(1));
var pred__24950 = cljs.core._EQ_;
var expr__24951 = msg_name;
if(cljs.core.truth_(pred__24950.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__24951))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__24950.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__24951))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__24946,map__24946__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__21116__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21116__auto__,msg_hist,msg_names,msg){
return (function (){
var f__21117__auto__ = (function (){var switch__21054__auto__ = ((function (c__21116__auto__,msg_hist,msg_names,msg){
return (function (state_25152){
var state_val_25153 = (state_25152[(1)]);
if((state_val_25153 === (7))){
var inst_25086 = (state_25152[(2)]);
var state_25152__$1 = state_25152;
var statearr_25154_25195 = state_25152__$1;
(statearr_25154_25195[(2)] = inst_25086);

(statearr_25154_25195[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25153 === (20))){
var inst_25114 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_25152__$1 = state_25152;
if(cljs.core.truth_(inst_25114)){
var statearr_25155_25196 = state_25152__$1;
(statearr_25155_25196[(1)] = (22));

} else {
var statearr_25156_25197 = state_25152__$1;
(statearr_25156_25197[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25153 === (27))){
var inst_25126 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25127 = figwheel.client.heads_up.display_warning.call(null,inst_25126);
var state_25152__$1 = state_25152;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25152__$1,(30),inst_25127);
} else {
if((state_val_25153 === (1))){
var inst_25074 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_25152__$1 = state_25152;
if(cljs.core.truth_(inst_25074)){
var statearr_25157_25198 = state_25152__$1;
(statearr_25157_25198[(1)] = (2));

} else {
var statearr_25158_25199 = state_25152__$1;
(statearr_25158_25199[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25153 === (24))){
var inst_25142 = (state_25152[(2)]);
var state_25152__$1 = state_25152;
var statearr_25159_25200 = state_25152__$1;
(statearr_25159_25200[(2)] = inst_25142);

(statearr_25159_25200[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25153 === (4))){
var inst_25150 = (state_25152[(2)]);
var state_25152__$1 = state_25152;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25152__$1,inst_25150);
} else {
if((state_val_25153 === (15))){
var inst_25102 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25103 = figwheel.client.format_messages.call(null,inst_25102);
var inst_25104 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25105 = figwheel.client.heads_up.display_error.call(null,inst_25103,inst_25104);
var state_25152__$1 = state_25152;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25152__$1,(18),inst_25105);
} else {
if((state_val_25153 === (21))){
var inst_25144 = (state_25152[(2)]);
var state_25152__$1 = state_25152;
var statearr_25160_25201 = state_25152__$1;
(statearr_25160_25201[(2)] = inst_25144);

(statearr_25160_25201[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25153 === (31))){
var inst_25133 = figwheel.client.heads_up.flash_loaded.call(null);
var state_25152__$1 = state_25152;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25152__$1,(34),inst_25133);
} else {
if((state_val_25153 === (32))){
var state_25152__$1 = state_25152;
var statearr_25161_25202 = state_25152__$1;
(statearr_25161_25202[(2)] = null);

(statearr_25161_25202[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25153 === (33))){
var inst_25138 = (state_25152[(2)]);
var state_25152__$1 = state_25152;
var statearr_25162_25203 = state_25152__$1;
(statearr_25162_25203[(2)] = inst_25138);

(statearr_25162_25203[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25153 === (13))){
var inst_25092 = (state_25152[(2)]);
var inst_25093 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25094 = figwheel.client.format_messages.call(null,inst_25093);
var inst_25095 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25096 = figwheel.client.heads_up.display_error.call(null,inst_25094,inst_25095);
var state_25152__$1 = (function (){var statearr_25163 = state_25152;
(statearr_25163[(7)] = inst_25092);

return statearr_25163;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25152__$1,(14),inst_25096);
} else {
if((state_val_25153 === (22))){
var inst_25116 = figwheel.client.heads_up.clear.call(null);
var state_25152__$1 = state_25152;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25152__$1,(25),inst_25116);
} else {
if((state_val_25153 === (29))){
var inst_25140 = (state_25152[(2)]);
var state_25152__$1 = state_25152;
var statearr_25164_25204 = state_25152__$1;
(statearr_25164_25204[(2)] = inst_25140);

(statearr_25164_25204[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25153 === (6))){
var inst_25082 = figwheel.client.heads_up.clear.call(null);
var state_25152__$1 = state_25152;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25152__$1,(9),inst_25082);
} else {
if((state_val_25153 === (28))){
var inst_25131 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_25152__$1 = state_25152;
if(cljs.core.truth_(inst_25131)){
var statearr_25165_25205 = state_25152__$1;
(statearr_25165_25205[(1)] = (31));

} else {
var statearr_25166_25206 = state_25152__$1;
(statearr_25166_25206[(1)] = (32));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25153 === (25))){
var inst_25118 = (state_25152[(2)]);
var inst_25119 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25120 = figwheel.client.heads_up.display_warning.call(null,inst_25119);
var state_25152__$1 = (function (){var statearr_25167 = state_25152;
(statearr_25167[(8)] = inst_25118);

return statearr_25167;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25152__$1,(26),inst_25120);
} else {
if((state_val_25153 === (34))){
var inst_25135 = (state_25152[(2)]);
var state_25152__$1 = state_25152;
var statearr_25168_25207 = state_25152__$1;
(statearr_25168_25207[(2)] = inst_25135);

(statearr_25168_25207[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25153 === (17))){
var inst_25146 = (state_25152[(2)]);
var state_25152__$1 = state_25152;
var statearr_25169_25208 = state_25152__$1;
(statearr_25169_25208[(2)] = inst_25146);

(statearr_25169_25208[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25153 === (3))){
var inst_25088 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_25152__$1 = state_25152;
if(cljs.core.truth_(inst_25088)){
var statearr_25170_25209 = state_25152__$1;
(statearr_25170_25209[(1)] = (10));

} else {
var statearr_25171_25210 = state_25152__$1;
(statearr_25171_25210[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25153 === (12))){
var inst_25148 = (state_25152[(2)]);
var state_25152__$1 = state_25152;
var statearr_25172_25211 = state_25152__$1;
(statearr_25172_25211[(2)] = inst_25148);

(statearr_25172_25211[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25153 === (2))){
var inst_25076 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_25152__$1 = state_25152;
if(cljs.core.truth_(inst_25076)){
var statearr_25173_25212 = state_25152__$1;
(statearr_25173_25212[(1)] = (5));

} else {
var statearr_25174_25213 = state_25152__$1;
(statearr_25174_25213[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25153 === (23))){
var inst_25124 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_25152__$1 = state_25152;
if(cljs.core.truth_(inst_25124)){
var statearr_25175_25214 = state_25152__$1;
(statearr_25175_25214[(1)] = (27));

} else {
var statearr_25176_25215 = state_25152__$1;
(statearr_25176_25215[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25153 === (19))){
var inst_25111 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25112 = figwheel.client.heads_up.append_message.call(null,inst_25111);
var state_25152__$1 = state_25152;
var statearr_25177_25216 = state_25152__$1;
(statearr_25177_25216[(2)] = inst_25112);

(statearr_25177_25216[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25153 === (11))){
var inst_25100 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_25152__$1 = state_25152;
if(cljs.core.truth_(inst_25100)){
var statearr_25178_25217 = state_25152__$1;
(statearr_25178_25217[(1)] = (15));

} else {
var statearr_25179_25218 = state_25152__$1;
(statearr_25179_25218[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25153 === (9))){
var inst_25084 = (state_25152[(2)]);
var state_25152__$1 = state_25152;
var statearr_25180_25219 = state_25152__$1;
(statearr_25180_25219[(2)] = inst_25084);

(statearr_25180_25219[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25153 === (5))){
var inst_25078 = figwheel.client.heads_up.flash_loaded.call(null);
var state_25152__$1 = state_25152;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25152__$1,(8),inst_25078);
} else {
if((state_val_25153 === (14))){
var inst_25098 = (state_25152[(2)]);
var state_25152__$1 = state_25152;
var statearr_25181_25220 = state_25152__$1;
(statearr_25181_25220[(2)] = inst_25098);

(statearr_25181_25220[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25153 === (26))){
var inst_25122 = (state_25152[(2)]);
var state_25152__$1 = state_25152;
var statearr_25182_25221 = state_25152__$1;
(statearr_25182_25221[(2)] = inst_25122);

(statearr_25182_25221[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25153 === (16))){
var inst_25109 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_25152__$1 = state_25152;
if(cljs.core.truth_(inst_25109)){
var statearr_25183_25222 = state_25152__$1;
(statearr_25183_25222[(1)] = (19));

} else {
var statearr_25184_25223 = state_25152__$1;
(statearr_25184_25223[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25153 === (30))){
var inst_25129 = (state_25152[(2)]);
var state_25152__$1 = state_25152;
var statearr_25185_25224 = state_25152__$1;
(statearr_25185_25224[(2)] = inst_25129);

(statearr_25185_25224[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25153 === (10))){
var inst_25090 = figwheel.client.heads_up.clear.call(null);
var state_25152__$1 = state_25152;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25152__$1,(13),inst_25090);
} else {
if((state_val_25153 === (18))){
var inst_25107 = (state_25152[(2)]);
var state_25152__$1 = state_25152;
var statearr_25186_25225 = state_25152__$1;
(statearr_25186_25225[(2)] = inst_25107);

(statearr_25186_25225[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25153 === (8))){
var inst_25080 = (state_25152[(2)]);
var state_25152__$1 = state_25152;
var statearr_25187_25226 = state_25152__$1;
(statearr_25187_25226[(2)] = inst_25080);

(statearr_25187_25226[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__21116__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__21054__auto__,c__21116__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21055__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21055__auto____0 = (function (){
var statearr_25191 = [null,null,null,null,null,null,null,null,null];
(statearr_25191[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21055__auto__);

(statearr_25191[(1)] = (1));

return statearr_25191;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21055__auto____1 = (function (state_25152){
while(true){
var ret_value__21056__auto__ = (function (){try{while(true){
var result__21057__auto__ = switch__21054__auto__.call(null,state_25152);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21057__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21057__auto__;
}
break;
}
}catch (e25192){if((e25192 instanceof Object)){
var ex__21058__auto__ = e25192;
var statearr_25193_25227 = state_25152;
(statearr_25193_25227[(5)] = ex__21058__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25152);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25192;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21056__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25228 = state_25152;
state_25152 = G__25228;
continue;
} else {
return ret_value__21056__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21055__auto__ = function(state_25152){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21055__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21055__auto____1.call(this,state_25152);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21055__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21055__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21055__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21055__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21055__auto__;
})()
;})(switch__21054__auto__,c__21116__auto__,msg_hist,msg_names,msg))
})();
var state__21118__auto__ = (function (){var statearr_25194 = f__21117__auto__.call(null);
(statearr_25194[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21116__auto__);

return statearr_25194;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21118__auto__);
});})(c__21116__auto__,msg_hist,msg_names,msg))
);

return c__21116__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__21116__auto___25291 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21116__auto___25291,ch){
return (function (){
var f__21117__auto__ = (function (){var switch__21054__auto__ = ((function (c__21116__auto___25291,ch){
return (function (state_25274){
var state_val_25275 = (state_25274[(1)]);
if((state_val_25275 === (1))){
var state_25274__$1 = state_25274;
var statearr_25276_25292 = state_25274__$1;
(statearr_25276_25292[(2)] = null);

(statearr_25276_25292[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25275 === (2))){
var state_25274__$1 = state_25274;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25274__$1,(4),ch);
} else {
if((state_val_25275 === (3))){
var inst_25272 = (state_25274[(2)]);
var state_25274__$1 = state_25274;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25274__$1,inst_25272);
} else {
if((state_val_25275 === (4))){
var inst_25262 = (state_25274[(7)]);
var inst_25262__$1 = (state_25274[(2)]);
var state_25274__$1 = (function (){var statearr_25277 = state_25274;
(statearr_25277[(7)] = inst_25262__$1);

return statearr_25277;
})();
if(cljs.core.truth_(inst_25262__$1)){
var statearr_25278_25293 = state_25274__$1;
(statearr_25278_25293[(1)] = (5));

} else {
var statearr_25279_25294 = state_25274__$1;
(statearr_25279_25294[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25275 === (5))){
var inst_25262 = (state_25274[(7)]);
var inst_25264 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_25262);
var state_25274__$1 = state_25274;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25274__$1,(8),inst_25264);
} else {
if((state_val_25275 === (6))){
var state_25274__$1 = state_25274;
var statearr_25280_25295 = state_25274__$1;
(statearr_25280_25295[(2)] = null);

(statearr_25280_25295[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25275 === (7))){
var inst_25270 = (state_25274[(2)]);
var state_25274__$1 = state_25274;
var statearr_25281_25296 = state_25274__$1;
(statearr_25281_25296[(2)] = inst_25270);

(statearr_25281_25296[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25275 === (8))){
var inst_25266 = (state_25274[(2)]);
var state_25274__$1 = (function (){var statearr_25282 = state_25274;
(statearr_25282[(8)] = inst_25266);

return statearr_25282;
})();
var statearr_25283_25297 = state_25274__$1;
(statearr_25283_25297[(2)] = null);

(statearr_25283_25297[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
});})(c__21116__auto___25291,ch))
;
return ((function (switch__21054__auto__,c__21116__auto___25291,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__21055__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__21055__auto____0 = (function (){
var statearr_25287 = [null,null,null,null,null,null,null,null,null];
(statearr_25287[(0)] = figwheel$client$heads_up_plugin_$_state_machine__21055__auto__);

(statearr_25287[(1)] = (1));

return statearr_25287;
});
var figwheel$client$heads_up_plugin_$_state_machine__21055__auto____1 = (function (state_25274){
while(true){
var ret_value__21056__auto__ = (function (){try{while(true){
var result__21057__auto__ = switch__21054__auto__.call(null,state_25274);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21057__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21057__auto__;
}
break;
}
}catch (e25288){if((e25288 instanceof Object)){
var ex__21058__auto__ = e25288;
var statearr_25289_25298 = state_25274;
(statearr_25289_25298[(5)] = ex__21058__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25274);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25288;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21056__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25299 = state_25274;
state_25274 = G__25299;
continue;
} else {
return ret_value__21056__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__21055__auto__ = function(state_25274){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__21055__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__21055__auto____1.call(this,state_25274);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__21055__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__21055__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__21055__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__21055__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__21055__auto__;
})()
;})(switch__21054__auto__,c__21116__auto___25291,ch))
})();
var state__21118__auto__ = (function (){var statearr_25290 = f__21117__auto__.call(null);
(statearr_25290[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21116__auto___25291);

return statearr_25290;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21118__auto__);
});})(c__21116__auto___25291,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__21116__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21116__auto__){
return (function (){
var f__21117__auto__ = (function (){var switch__21054__auto__ = ((function (c__21116__auto__){
return (function (state_25320){
var state_val_25321 = (state_25320[(1)]);
if((state_val_25321 === (1))){
var inst_25315 = cljs.core.async.timeout.call(null,(3000));
var state_25320__$1 = state_25320;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25320__$1,(2),inst_25315);
} else {
if((state_val_25321 === (2))){
var inst_25317 = (state_25320[(2)]);
var inst_25318 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_25320__$1 = (function (){var statearr_25322 = state_25320;
(statearr_25322[(7)] = inst_25317);

return statearr_25322;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25320__$1,inst_25318);
} else {
return null;
}
}
});})(c__21116__auto__))
;
return ((function (switch__21054__auto__,c__21116__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__21055__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__21055__auto____0 = (function (){
var statearr_25326 = [null,null,null,null,null,null,null,null];
(statearr_25326[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__21055__auto__);

(statearr_25326[(1)] = (1));

return statearr_25326;
});
var figwheel$client$enforce_project_plugin_$_state_machine__21055__auto____1 = (function (state_25320){
while(true){
var ret_value__21056__auto__ = (function (){try{while(true){
var result__21057__auto__ = switch__21054__auto__.call(null,state_25320);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21057__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21057__auto__;
}
break;
}
}catch (e25327){if((e25327 instanceof Object)){
var ex__21058__auto__ = e25327;
var statearr_25328_25330 = state_25320;
(statearr_25328_25330[(5)] = ex__21058__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25320);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25327;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21056__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25331 = state_25320;
state_25320 = G__25331;
continue;
} else {
return ret_value__21056__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__21055__auto__ = function(state_25320){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__21055__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__21055__auto____1.call(this,state_25320);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__21055__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__21055__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__21055__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__21055__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__21055__auto__;
})()
;})(switch__21054__auto__,c__21116__auto__))
})();
var state__21118__auto__ = (function (){var statearr_25329 = f__21117__auto__.call(null);
(statearr_25329[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21116__auto__);

return statearr_25329;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21118__auto__);
});})(c__21116__auto__))
);

return c__21116__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__25332){
var map__25338 = p__25332;
var map__25338__$1 = ((cljs.core.seq_QMARK_.call(null,map__25338))?cljs.core.apply.call(null,cljs.core.hash_map,map__25338):map__25338);
var ed = map__25338__$1;
var formatted_exception = cljs.core.get.call(null,map__25338__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__25338__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__25338__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__25339_25343 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__25340_25344 = null;
var count__25341_25345 = (0);
var i__25342_25346 = (0);
while(true){
if((i__25342_25346 < count__25341_25345)){
var msg_25347 = cljs.core._nth.call(null,chunk__25340_25344,i__25342_25346);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_25347);

var G__25348 = seq__25339_25343;
var G__25349 = chunk__25340_25344;
var G__25350 = count__25341_25345;
var G__25351 = (i__25342_25346 + (1));
seq__25339_25343 = G__25348;
chunk__25340_25344 = G__25349;
count__25341_25345 = G__25350;
i__25342_25346 = G__25351;
continue;
} else {
var temp__4423__auto___25352 = cljs.core.seq.call(null,seq__25339_25343);
if(temp__4423__auto___25352){
var seq__25339_25353__$1 = temp__4423__auto___25352;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25339_25353__$1)){
var c__18891__auto___25354 = cljs.core.chunk_first.call(null,seq__25339_25353__$1);
var G__25355 = cljs.core.chunk_rest.call(null,seq__25339_25353__$1);
var G__25356 = c__18891__auto___25354;
var G__25357 = cljs.core.count.call(null,c__18891__auto___25354);
var G__25358 = (0);
seq__25339_25343 = G__25355;
chunk__25340_25344 = G__25356;
count__25341_25345 = G__25357;
i__25342_25346 = G__25358;
continue;
} else {
var msg_25359 = cljs.core.first.call(null,seq__25339_25353__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_25359);

var G__25360 = cljs.core.next.call(null,seq__25339_25353__$1);
var G__25361 = null;
var G__25362 = (0);
var G__25363 = (0);
seq__25339_25343 = G__25360;
chunk__25340_25344 = G__25361;
count__25341_25345 = G__25362;
i__25342_25346 = G__25363;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on file "),cljs.core.str(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__25364){
var map__25366 = p__25364;
var map__25366__$1 = ((cljs.core.seq_QMARK_.call(null,map__25366))?cljs.core.apply.call(null,cljs.core.hash_map,map__25366):map__25366);
var w = map__25366__$1;
var message = cljs.core.get.call(null,map__25366__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(message)].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"load-unchanged-files","load-unchanged-files",-1561468704),new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[true,figwheel.client.default_on_compile_warning,figwheel.client.default_on_jsload,figwheel.client.default_on_compile_fail,false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,(100),true,false,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__18094__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__18094__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__18094__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__25373 = cljs.core.seq.call(null,plugins);
var chunk__25374 = null;
var count__25375 = (0);
var i__25376 = (0);
while(true){
if((i__25376 < count__25375)){
var vec__25377 = cljs.core._nth.call(null,chunk__25374,i__25376);
var k = cljs.core.nth.call(null,vec__25377,(0),null);
var plugin = cljs.core.nth.call(null,vec__25377,(1),null);
if(cljs.core.truth_(plugin)){
var pl_25379 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__25373,chunk__25374,count__25375,i__25376,pl_25379,vec__25377,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_25379.call(null,msg_hist);
});})(seq__25373,chunk__25374,count__25375,i__25376,pl_25379,vec__25377,k,plugin))
);
} else {
}

var G__25380 = seq__25373;
var G__25381 = chunk__25374;
var G__25382 = count__25375;
var G__25383 = (i__25376 + (1));
seq__25373 = G__25380;
chunk__25374 = G__25381;
count__25375 = G__25382;
i__25376 = G__25383;
continue;
} else {
var temp__4423__auto__ = cljs.core.seq.call(null,seq__25373);
if(temp__4423__auto__){
var seq__25373__$1 = temp__4423__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25373__$1)){
var c__18891__auto__ = cljs.core.chunk_first.call(null,seq__25373__$1);
var G__25384 = cljs.core.chunk_rest.call(null,seq__25373__$1);
var G__25385 = c__18891__auto__;
var G__25386 = cljs.core.count.call(null,c__18891__auto__);
var G__25387 = (0);
seq__25373 = G__25384;
chunk__25374 = G__25385;
count__25375 = G__25386;
i__25376 = G__25387;
continue;
} else {
var vec__25378 = cljs.core.first.call(null,seq__25373__$1);
var k = cljs.core.nth.call(null,vec__25378,(0),null);
var plugin = cljs.core.nth.call(null,vec__25378,(1),null);
if(cljs.core.truth_(plugin)){
var pl_25388 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__25373,chunk__25374,count__25375,i__25376,pl_25388,vec__25378,k,plugin,seq__25373__$1,temp__4423__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_25388.call(null,msg_hist);
});})(seq__25373,chunk__25374,count__25375,i__25376,pl_25388,vec__25378,k,plugin,seq__25373__$1,temp__4423__auto__))
);
} else {
}

var G__25389 = cljs.core.next.call(null,seq__25373__$1);
var G__25390 = null;
var G__25391 = (0);
var G__25392 = (0);
seq__25373 = G__25389;
chunk__25374 = G__25390;
count__25375 = G__25391;
i__25376 = G__25392;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(){
var G__25394 = arguments.length;
switch (G__25394) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;
figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(){
var argseq__19146__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__19146__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__25397){
var map__25398 = p__25397;
var map__25398__$1 = ((cljs.core.seq_QMARK_.call(null,map__25398))?cljs.core.apply.call(null,cljs.core.hash_map,map__25398):map__25398);
var opts = map__25398__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq25396){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq25396));
});

//# sourceMappingURL=client.js.map