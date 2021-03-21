// Compiled by ClojureScript 0.0-3269 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');

figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.all_QMARK_ = (function figwheel$client$file_reloading$all_QMARK_(pred,coll){
return cljs.core.reduce.call(null,(function (p1__25816_SHARP_,p2__25817_SHARP_){
var and__18094__auto__ = p1__25816_SHARP_;
if(cljs.core.truth_(and__18094__auto__)){
return p2__25817_SHARP_;
} else {
return and__18094__auto__;
}
}),true,cljs.core.map.call(null,pred,coll));
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__18106__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__18106__auto__){
return or__18106__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.ns_to_js_file = (function figwheel$client$file_reloading$ns_to_js_file(ns){

return [cljs.core.str(clojure.string.replace.call(null,ns,".","/")),cljs.core.str(".js")].join('');
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){

return [cljs.core.str(figwheel.client.utils.base_url_path.call(null)),cljs.core.str(figwheel.client.file_reloading.ns_to_js_file.call(null,ns))].join('');
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
goog.isProvided = (function (x){
return false;
});

if(((cljs.core._STAR_loaded_libs_STAR_ == null)) || (cljs.core.empty_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_))){
cljs.core._STAR_loaded_libs_STAR_ = (function (){var gntp = goog.dependencies_.nameToPath;
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.call(null,((function (gntp){
return (function (name){
return (goog.dependencies_.visited[(gntp[name])]);
});})(gntp))
,cljs.core.js_keys.call(null,gntp)));
})();
} else {
}

goog.require = (function (name,reload){
if(cljs.core.truth_((function (){var or__18106__auto__ = !(cljs.core.contains_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_,name));
if(or__18106__auto__){
return or__18106__auto__;
} else {
return reload;
}
})())){
cljs.core._STAR_loaded_libs_STAR_ = cljs.core.conj.call(null,(function (){var or__18106__auto__ = cljs.core._STAR_loaded_libs_STAR_;
if(cljs.core.truth_(or__18106__auto__)){
return or__18106__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})(),name);

return figwheel.client.file_reloading.reload_file_STAR_.call(null,figwheel.client.file_reloading.resolve_ns.call(null,name));
} else {
return null;
}
});

goog.provide = goog.exportPath_;

return goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.reload_file_STAR_;
});
if(typeof figwheel.client.file_reloading.resolve_url !== 'undefined'){
} else {
figwheel.client.file_reloading.resolve_url = (function (){var method_table__19001__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__19002__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__19003__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__19004__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__19005__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.file-reloading","resolve-url"),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__19005__auto__,method_table__19001__auto__,prefer_table__19002__auto__,method_cache__19003__auto__,cached_hierarchy__19004__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.file_reloading.resolve_url,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__25818){
var map__25819 = p__25818;
var map__25819__$1 = ((cljs.core.seq_QMARK_.call(null,map__25819))?cljs.core.apply.call(null,cljs.core.hash_map,map__25819):map__25819);
var file = cljs.core.get.call(null,map__25819__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
return file;
}));
cljs.core._add_method.call(null,figwheel.client.file_reloading.resolve_url,new cljs.core.Keyword(null,"namespace","namespace",-377510372),(function (p__25820){
var map__25821 = p__25820;
var map__25821__$1 = ((cljs.core.seq_QMARK_.call(null,map__25821))?cljs.core.apply.call(null,cljs.core.hash_map,map__25821):map__25821);
var namespace = cljs.core.get.call(null,map__25821__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

return figwheel.client.file_reloading.resolve_ns.call(null,namespace);
}));
if(typeof figwheel.client.file_reloading.reload_base !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_base = (function (){var method_table__19001__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__19002__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__19003__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__19004__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__19005__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.file-reloading","reload-base"),figwheel.client.utils.host_env_QMARK_,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__19005__auto__,method_table__19001__auto__,prefer_table__19002__auto__,method_cache__19003__auto__,cached_hierarchy__19004__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.file_reloading.reload_base,new cljs.core.Keyword(null,"node","node",581201198),(function (request_url,callback){

var root = clojure.string.join.call(null,"/",cljs.core.reverse.call(null,cljs.core.drop.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,__dirname,"/")))));
var path = [cljs.core.str(root),cljs.core.str("/"),cljs.core.str(request_url)].join('');
(require.cache[path] = null);

return callback.call(null,(function (){try{return require(path);
}catch (e25822){if((e25822 instanceof Error)){
var e = e25822;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e25822;

}
}})());
}));
cljs.core._add_method.call(null,figwheel.client.file_reloading.reload_base,new cljs.core.Keyword(null,"html","html",-998796897),(function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred))
);

return deferred.addErrback(((function (deferred){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred))
);
}));
figwheel.client.file_reloading.reload_file_STAR_ = (function figwheel$client$file_reloading$reload_file_STAR_(){
var G__25824 = arguments.length;
switch (G__25824) {
case 2:
return figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (request_url,callback){
return figwheel.client.file_reloading.reload_base.call(null,request_url,callback);
});

figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (request_url){
return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,cljs.core.identity);
});

figwheel.client.file_reloading.reload_file_STAR_.cljs$lang$maxFixedArity = 2;
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__25826,callback){
var map__25828 = p__25826;
var map__25828__$1 = ((cljs.core.seq_QMARK_.call(null,map__25828))?cljs.core.apply.call(null,cljs.core.hash_map,map__25828):map__25828);
var file_msg = map__25828__$1;
var request_url = cljs.core.get.call(null,map__25828__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__25828,map__25828__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfullly loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__25828,map__25828__$1,file_msg,request_url))
);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__25829){
var map__25831 = p__25829;
var map__25831__$1 = ((cljs.core.seq_QMARK_.call(null,map__25831))?cljs.core.apply.call(null,cljs.core.hash_map,map__25831):map__25831);
var file_msg = map__25831__$1;
var namespace = cljs.core.get.call(null,map__25831__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,map__25831__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));

var meta_data__$1 = (function (){var or__18106__auto__ = meta_data;
if(cljs.core.truth_(or__18106__auto__)){
return or__18106__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var and__18094__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_data__$1));
if(and__18094__auto__){
var or__18106__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
if(cljs.core.truth_(or__18106__auto__)){
return or__18106__auto__;
} else {
var or__18106__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
if(cljs.core.truth_(or__18106__auto____$1)){
return or__18106__auto____$1;
} else {
var and__18094__auto____$1 = cljs.core.contains_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_,namespace);
if(and__18094__auto____$1){
var or__18106__auto____$2 = !(cljs.core.contains_QMARK_.call(null,meta_data__$1,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932)));
if(or__18106__auto____$2){
return or__18106__auto____$2;
} else {
return new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
}
} else {
return and__18094__auto____$1;
}
}
}
} else {
return and__18094__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__25832,callback){
var map__25834 = p__25832;
var map__25834__$1 = ((cljs.core.seq_QMARK_.call(null,map__25834))?cljs.core.apply.call(null,cljs.core.hash_map,map__25834):map__25834);
var file_msg = map__25834__$1;
var request_url = cljs.core.get.call(null,map__25834__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__25834__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.reload_file.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
setTimeout(((function (out){
return (function (){
return figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
figwheel.client.file_reloading.patch_goog_base.call(null);

cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);
});})(out))
,(0));

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__21116__auto___25921 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21116__auto___25921,out){
return (function (){
var f__21117__auto__ = (function (){var switch__21054__auto__ = ((function (c__21116__auto___25921,out){
return (function (state_25903){
var state_val_25904 = (state_25903[(1)]);
if((state_val_25904 === (1))){
var inst_25881 = cljs.core.nth.call(null,files,(0),null);
var inst_25882 = cljs.core.nthnext.call(null,files,(1));
var inst_25883 = files;
var state_25903__$1 = (function (){var statearr_25905 = state_25903;
(statearr_25905[(7)] = inst_25881);

(statearr_25905[(8)] = inst_25883);

(statearr_25905[(9)] = inst_25882);

return statearr_25905;
})();
var statearr_25906_25922 = state_25903__$1;
(statearr_25906_25922[(2)] = null);

(statearr_25906_25922[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25904 === (2))){
var inst_25886 = (state_25903[(10)]);
var inst_25883 = (state_25903[(8)]);
var inst_25886__$1 = cljs.core.nth.call(null,inst_25883,(0),null);
var inst_25887 = cljs.core.nthnext.call(null,inst_25883,(1));
var inst_25888 = (inst_25886__$1 == null);
var inst_25889 = cljs.core.not.call(null,inst_25888);
var state_25903__$1 = (function (){var statearr_25907 = state_25903;
(statearr_25907[(11)] = inst_25887);

(statearr_25907[(10)] = inst_25886__$1);

return statearr_25907;
})();
if(inst_25889){
var statearr_25908_25923 = state_25903__$1;
(statearr_25908_25923[(1)] = (4));

} else {
var statearr_25909_25924 = state_25903__$1;
(statearr_25909_25924[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25904 === (3))){
var inst_25901 = (state_25903[(2)]);
var state_25903__$1 = state_25903;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25903__$1,inst_25901);
} else {
if((state_val_25904 === (4))){
var inst_25886 = (state_25903[(10)]);
var inst_25891 = figwheel.client.file_reloading.reload_js_file.call(null,inst_25886);
var state_25903__$1 = state_25903;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25903__$1,(7),inst_25891);
} else {
if((state_val_25904 === (5))){
var inst_25897 = cljs.core.async.close_BANG_.call(null,out);
var state_25903__$1 = state_25903;
var statearr_25910_25925 = state_25903__$1;
(statearr_25910_25925[(2)] = inst_25897);

(statearr_25910_25925[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25904 === (6))){
var inst_25899 = (state_25903[(2)]);
var state_25903__$1 = state_25903;
var statearr_25911_25926 = state_25903__$1;
(statearr_25911_25926[(2)] = inst_25899);

(statearr_25911_25926[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25904 === (7))){
var inst_25887 = (state_25903[(11)]);
var inst_25893 = (state_25903[(2)]);
var inst_25894 = cljs.core.async.put_BANG_.call(null,out,inst_25893);
var inst_25883 = inst_25887;
var state_25903__$1 = (function (){var statearr_25912 = state_25903;
(statearr_25912[(12)] = inst_25894);

(statearr_25912[(8)] = inst_25883);

return statearr_25912;
})();
var statearr_25913_25927 = state_25903__$1;
(statearr_25913_25927[(2)] = null);

(statearr_25913_25927[(1)] = (2));


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
});})(c__21116__auto___25921,out))
;
return ((function (switch__21054__auto__,c__21116__auto___25921,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__21055__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__21055__auto____0 = (function (){
var statearr_25917 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25917[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__21055__auto__);

(statearr_25917[(1)] = (1));

return statearr_25917;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__21055__auto____1 = (function (state_25903){
while(true){
var ret_value__21056__auto__ = (function (){try{while(true){
var result__21057__auto__ = switch__21054__auto__.call(null,state_25903);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21057__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21057__auto__;
}
break;
}
}catch (e25918){if((e25918 instanceof Object)){
var ex__21058__auto__ = e25918;
var statearr_25919_25928 = state_25903;
(statearr_25919_25928[(5)] = ex__21058__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25903);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25918;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21056__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25929 = state_25903;
state_25903 = G__25929;
continue;
} else {
return ret_value__21056__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__21055__auto__ = function(state_25903){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__21055__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__21055__auto____1.call(this,state_25903);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__21055__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__21055__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__21055__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__21055__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__21055__auto__;
})()
;})(switch__21054__auto__,c__21116__auto___25921,out))
})();
var state__21118__auto__ = (function (){var statearr_25920 = f__21117__auto__.call(null);
(statearr_25920[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21116__auto___25921);

return statearr_25920;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21118__auto__);
});})(c__21116__auto___25921,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.add_request_url = (function figwheel$client$file_reloading$add_request_url(p__25930,p__25931){
var map__25934 = p__25930;
var map__25934__$1 = ((cljs.core.seq_QMARK_.call(null,map__25934))?cljs.core.apply.call(null,cljs.core.hash_map,map__25934):map__25934);
var opts = map__25934__$1;
var url_rewriter = cljs.core.get.call(null,map__25934__$1,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838));
var map__25935 = p__25931;
var map__25935__$1 = ((cljs.core.seq_QMARK_.call(null,map__25935))?cljs.core.apply.call(null,cljs.core.hash_map,map__25935):map__25935);
var file_msg = map__25935__$1;
var file = cljs.core.get.call(null,map__25935__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var resolved_path = figwheel.client.file_reloading.resolve_url.call(null,file_msg);
return cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"request-url","request-url",2100346596),(cljs.core.truth_(url_rewriter)?url_rewriter.call(null,resolved_path):resolved_path));
});
figwheel.client.file_reloading.add_request_urls = (function figwheel$client$file_reloading$add_request_urls(opts,files){
return cljs.core.map.call(null,cljs.core.partial.call(null,figwheel.client.file_reloading.add_request_url,opts),files);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__25936){
var map__25939 = p__25936;
var map__25939__$1 = ((cljs.core.seq_QMARK_.call(null,map__25939))?cljs.core.apply.call(null,cljs.core.hash_map,map__25939):map__25939);
var eval_body__$1 = cljs.core.get.call(null,map__25939__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__25939__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__18094__auto__ = eval_body__$1;
if(cljs.core.truth_(and__18094__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__18094__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return eval(code);
}catch (e25940){var e = e25940;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__25945,p__25946){
var map__26148 = p__25945;
var map__26148__$1 = ((cljs.core.seq_QMARK_.call(null,map__26148))?cljs.core.apply.call(null,cljs.core.hash_map,map__26148):map__26148);
var opts = map__26148__$1;
var before_jsload = cljs.core.get.call(null,map__26148__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__26148__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var load_unchanged_files = cljs.core.get.call(null,map__26148__$1,new cljs.core.Keyword(null,"load-unchanged-files","load-unchanged-files",-1561468704));
var map__26149 = p__25946;
var map__26149__$1 = ((cljs.core.seq_QMARK_.call(null,map__26149))?cljs.core.apply.call(null,cljs.core.hash_map,map__26149):map__26149);
var msg = map__26149__$1;
var files = cljs.core.get.call(null,map__26149__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var c__21116__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21116__auto__,map__26148,map__26148__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__26149,map__26149__$1,msg,files){
return (function (){
var f__21117__auto__ = (function (){var switch__21054__auto__ = ((function (c__21116__auto__,map__26148,map__26148__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__26149,map__26149__$1,msg,files){
return (function (state_26274){
var state_val_26275 = (state_26274[(1)]);
if((state_val_26275 === (7))){
var inst_26161 = (state_26274[(7)]);
var inst_26162 = (state_26274[(8)]);
var inst_26164 = (state_26274[(9)]);
var inst_26163 = (state_26274[(10)]);
var inst_26169 = cljs.core._nth.call(null,inst_26162,inst_26164);
var inst_26170 = figwheel.client.file_reloading.eval_body.call(null,inst_26169);
var inst_26171 = (inst_26164 + (1));
var tmp26276 = inst_26161;
var tmp26277 = inst_26162;
var tmp26278 = inst_26163;
var inst_26161__$1 = tmp26276;
var inst_26162__$1 = tmp26277;
var inst_26163__$1 = tmp26278;
var inst_26164__$1 = inst_26171;
var state_26274__$1 = (function (){var statearr_26279 = state_26274;
(statearr_26279[(7)] = inst_26161__$1);

(statearr_26279[(8)] = inst_26162__$1);

(statearr_26279[(9)] = inst_26164__$1);

(statearr_26279[(11)] = inst_26170);

(statearr_26279[(10)] = inst_26163__$1);

return statearr_26279;
})();
var statearr_26280_26349 = state_26274__$1;
(statearr_26280_26349[(2)] = null);

(statearr_26280_26349[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26275 === (20))){
var inst_26207 = (state_26274[(12)]);
var inst_26211 = (state_26274[(13)]);
var inst_26210 = (state_26274[(14)]);
var inst_26206 = (state_26274[(15)]);
var inst_26213 = (state_26274[(16)]);
var inst_26216 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_26218 = (function (){var all_files = inst_26206;
var files_SINGLEQUOTE_ = inst_26207;
var res_SINGLEQUOTE_ = inst_26210;
var res = inst_26211;
var files_not_loaded = inst_26213;
return ((function (all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_26207,inst_26211,inst_26210,inst_26206,inst_26213,inst_26216,state_val_26275,c__21116__auto__,map__26148,map__26148__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__26149,map__26149__$1,msg,files){
return (function (p__26217){
var map__26281 = p__26217;
var map__26281__$1 = ((cljs.core.seq_QMARK_.call(null,map__26281))?cljs.core.apply.call(null,cljs.core.hash_map,map__26281):map__26281);
var namespace = cljs.core.get.call(null,map__26281__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__26281__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.ns_to_js_file.call(null,namespace);
} else {
return file;
}
});
;})(all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_26207,inst_26211,inst_26210,inst_26206,inst_26213,inst_26216,state_val_26275,c__21116__auto__,map__26148,map__26148__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__26149,map__26149__$1,msg,files))
})();
var inst_26219 = cljs.core.map.call(null,inst_26218,inst_26211);
var inst_26220 = cljs.core.pr_str.call(null,inst_26219);
var inst_26221 = figwheel.client.utils.log.call(null,inst_26220);
var inst_26222 = (function (){var all_files = inst_26206;
var files_SINGLEQUOTE_ = inst_26207;
var res_SINGLEQUOTE_ = inst_26210;
var res = inst_26211;
var files_not_loaded = inst_26213;
return ((function (all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_26207,inst_26211,inst_26210,inst_26206,inst_26213,inst_26216,inst_26218,inst_26219,inst_26220,inst_26221,state_val_26275,c__21116__auto__,map__26148,map__26148__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__26149,map__26149__$1,msg,files){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_26207,inst_26211,inst_26210,inst_26206,inst_26213,inst_26216,inst_26218,inst_26219,inst_26220,inst_26221,state_val_26275,c__21116__auto__,map__26148,map__26148__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__26149,map__26149__$1,msg,files))
})();
var inst_26223 = setTimeout(inst_26222,(10));
var state_26274__$1 = (function (){var statearr_26282 = state_26274;
(statearr_26282[(17)] = inst_26216);

(statearr_26282[(18)] = inst_26221);

return statearr_26282;
})();
var statearr_26283_26350 = state_26274__$1;
(statearr_26283_26350[(2)] = inst_26223);

(statearr_26283_26350[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26275 === (27))){
var inst_26233 = (state_26274[(19)]);
var state_26274__$1 = state_26274;
var statearr_26284_26351 = state_26274__$1;
(statearr_26284_26351[(2)] = inst_26233);

(statearr_26284_26351[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26275 === (1))){
var inst_26153 = (state_26274[(20)]);
var inst_26150 = before_jsload.call(null,files);
var inst_26151 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_26152 = (function (){return ((function (inst_26153,inst_26150,inst_26151,state_val_26275,c__21116__auto__,map__26148,map__26148__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__26149,map__26149__$1,msg,files){
return (function (p1__25941_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__25941_SHARP_);
});
;})(inst_26153,inst_26150,inst_26151,state_val_26275,c__21116__auto__,map__26148,map__26148__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__26149,map__26149__$1,msg,files))
})();
var inst_26153__$1 = cljs.core.filter.call(null,inst_26152,files);
var inst_26154 = cljs.core.not_empty.call(null,inst_26153__$1);
var state_26274__$1 = (function (){var statearr_26285 = state_26274;
(statearr_26285[(21)] = inst_26150);

(statearr_26285[(22)] = inst_26151);

(statearr_26285[(20)] = inst_26153__$1);

return statearr_26285;
})();
if(cljs.core.truth_(inst_26154)){
var statearr_26286_26352 = state_26274__$1;
(statearr_26286_26352[(1)] = (2));

} else {
var statearr_26287_26353 = state_26274__$1;
(statearr_26287_26353[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26275 === (24))){
var state_26274__$1 = state_26274;
var statearr_26288_26354 = state_26274__$1;
(statearr_26288_26354[(2)] = null);

(statearr_26288_26354[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26275 === (4))){
var inst_26198 = (state_26274[(2)]);
var inst_26199 = (function (){return ((function (inst_26198,state_val_26275,c__21116__auto__,map__26148,map__26148__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__26149,map__26149__$1,msg,files){
return (function (p1__25942_SHARP_){
var and__18094__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__25942_SHARP_);
if(cljs.core.truth_(and__18094__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__25942_SHARP_));
} else {
return and__18094__auto__;
}
});
;})(inst_26198,state_val_26275,c__21116__auto__,map__26148,map__26148__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__26149,map__26149__$1,msg,files))
})();
var inst_26200 = cljs.core.filter.call(null,inst_26199,files);
var state_26274__$1 = (function (){var statearr_26289 = state_26274;
(statearr_26289[(23)] = inst_26198);

(statearr_26289[(24)] = inst_26200);

return statearr_26289;
})();
if(cljs.core.truth_(load_unchanged_files)){
var statearr_26290_26355 = state_26274__$1;
(statearr_26290_26355[(1)] = (16));

} else {
var statearr_26291_26356 = state_26274__$1;
(statearr_26291_26356[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26275 === (15))){
var inst_26188 = (state_26274[(2)]);
var state_26274__$1 = state_26274;
var statearr_26292_26357 = state_26274__$1;
(statearr_26292_26357[(2)] = inst_26188);

(statearr_26292_26357[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26275 === (21))){
var state_26274__$1 = state_26274;
var statearr_26293_26358 = state_26274__$1;
(statearr_26293_26358[(2)] = null);

(statearr_26293_26358[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26275 === (31))){
var inst_26241 = (state_26274[(25)]);
var inst_26251 = (state_26274[(2)]);
var inst_26252 = cljs.core.not_empty.call(null,inst_26241);
var state_26274__$1 = (function (){var statearr_26294 = state_26274;
(statearr_26294[(26)] = inst_26251);

return statearr_26294;
})();
if(cljs.core.truth_(inst_26252)){
var statearr_26295_26359 = state_26274__$1;
(statearr_26295_26359[(1)] = (32));

} else {
var statearr_26296_26360 = state_26274__$1;
(statearr_26296_26360[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26275 === (32))){
var inst_26241 = (state_26274[(25)]);
var inst_26254 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_26241);
var inst_26255 = cljs.core.pr_str.call(null,inst_26254);
var inst_26256 = [cljs.core.str("file didn't change: "),cljs.core.str(inst_26255)].join('');
var inst_26257 = figwheel.client.utils.log.call(null,inst_26256);
var state_26274__$1 = state_26274;
var statearr_26297_26361 = state_26274__$1;
(statearr_26297_26361[(2)] = inst_26257);

(statearr_26297_26361[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26275 === (33))){
var state_26274__$1 = state_26274;
var statearr_26298_26362 = state_26274__$1;
(statearr_26298_26362[(2)] = null);

(statearr_26298_26362[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26275 === (13))){
var inst_26174 = (state_26274[(27)]);
var inst_26178 = cljs.core.chunk_first.call(null,inst_26174);
var inst_26179 = cljs.core.chunk_rest.call(null,inst_26174);
var inst_26180 = cljs.core.count.call(null,inst_26178);
var inst_26161 = inst_26179;
var inst_26162 = inst_26178;
var inst_26163 = inst_26180;
var inst_26164 = (0);
var state_26274__$1 = (function (){var statearr_26299 = state_26274;
(statearr_26299[(7)] = inst_26161);

(statearr_26299[(8)] = inst_26162);

(statearr_26299[(9)] = inst_26164);

(statearr_26299[(10)] = inst_26163);

return statearr_26299;
})();
var statearr_26300_26363 = state_26274__$1;
(statearr_26300_26363[(2)] = null);

(statearr_26300_26363[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26275 === (22))){
var inst_26213 = (state_26274[(16)]);
var inst_26226 = (state_26274[(2)]);
var inst_26227 = cljs.core.not_empty.call(null,inst_26213);
var state_26274__$1 = (function (){var statearr_26301 = state_26274;
(statearr_26301[(28)] = inst_26226);

return statearr_26301;
})();
if(cljs.core.truth_(inst_26227)){
var statearr_26302_26364 = state_26274__$1;
(statearr_26302_26364[(1)] = (23));

} else {
var statearr_26303_26365 = state_26274__$1;
(statearr_26303_26365[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26275 === (36))){
var state_26274__$1 = state_26274;
var statearr_26304_26366 = state_26274__$1;
(statearr_26304_26366[(2)] = null);

(statearr_26304_26366[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26275 === (29))){
var inst_26240 = (state_26274[(29)]);
var inst_26245 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_26240);
var inst_26246 = cljs.core.pr_str.call(null,inst_26245);
var inst_26247 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_26246)].join('');
var inst_26248 = figwheel.client.utils.log.call(null,inst_26247);
var state_26274__$1 = state_26274;
var statearr_26305_26367 = state_26274__$1;
(statearr_26305_26367[(2)] = inst_26248);

(statearr_26305_26367[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26275 === (6))){
var inst_26195 = (state_26274[(2)]);
var state_26274__$1 = state_26274;
var statearr_26306_26368 = state_26274__$1;
(statearr_26306_26368[(2)] = inst_26195);

(statearr_26306_26368[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26275 === (28))){
var inst_26240 = (state_26274[(29)]);
var inst_26239 = (state_26274[(2)]);
var inst_26240__$1 = cljs.core.get.call(null,inst_26239,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_26241 = cljs.core.get.call(null,inst_26239,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932));
var inst_26242 = cljs.core.get.call(null,inst_26239,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_26243 = cljs.core.not_empty.call(null,inst_26240__$1);
var state_26274__$1 = (function (){var statearr_26307 = state_26274;
(statearr_26307[(29)] = inst_26240__$1);

(statearr_26307[(30)] = inst_26242);

(statearr_26307[(25)] = inst_26241);

return statearr_26307;
})();
if(cljs.core.truth_(inst_26243)){
var statearr_26308_26369 = state_26274__$1;
(statearr_26308_26369[(1)] = (29));

} else {
var statearr_26309_26370 = state_26274__$1;
(statearr_26309_26370[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26275 === (25))){
var inst_26272 = (state_26274[(2)]);
var state_26274__$1 = state_26274;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26274__$1,inst_26272);
} else {
if((state_val_26275 === (34))){
var inst_26242 = (state_26274[(30)]);
var inst_26260 = (state_26274[(2)]);
var inst_26261 = cljs.core.not_empty.call(null,inst_26242);
var state_26274__$1 = (function (){var statearr_26310 = state_26274;
(statearr_26310[(31)] = inst_26260);

return statearr_26310;
})();
if(cljs.core.truth_(inst_26261)){
var statearr_26311_26371 = state_26274__$1;
(statearr_26311_26371[(1)] = (35));

} else {
var statearr_26312_26372 = state_26274__$1;
(statearr_26312_26372[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26275 === (17))){
var inst_26200 = (state_26274[(24)]);
var state_26274__$1 = state_26274;
var statearr_26313_26373 = state_26274__$1;
(statearr_26313_26373[(2)] = inst_26200);

(statearr_26313_26373[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26275 === (3))){
var state_26274__$1 = state_26274;
var statearr_26314_26374 = state_26274__$1;
(statearr_26314_26374[(2)] = null);

(statearr_26314_26374[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26275 === (12))){
var inst_26191 = (state_26274[(2)]);
var state_26274__$1 = state_26274;
var statearr_26315_26375 = state_26274__$1;
(statearr_26315_26375[(2)] = inst_26191);

(statearr_26315_26375[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26275 === (2))){
var inst_26153 = (state_26274[(20)]);
var inst_26160 = cljs.core.seq.call(null,inst_26153);
var inst_26161 = inst_26160;
var inst_26162 = null;
var inst_26163 = (0);
var inst_26164 = (0);
var state_26274__$1 = (function (){var statearr_26316 = state_26274;
(statearr_26316[(7)] = inst_26161);

(statearr_26316[(8)] = inst_26162);

(statearr_26316[(9)] = inst_26164);

(statearr_26316[(10)] = inst_26163);

return statearr_26316;
})();
var statearr_26317_26376 = state_26274__$1;
(statearr_26317_26376[(2)] = null);

(statearr_26317_26376[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26275 === (23))){
var inst_26207 = (state_26274[(12)]);
var inst_26211 = (state_26274[(13)]);
var inst_26210 = (state_26274[(14)]);
var inst_26206 = (state_26274[(15)]);
var inst_26213 = (state_26274[(16)]);
var inst_26233 = (state_26274[(19)]);
var inst_26229 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_26232 = (function (){var all_files = inst_26206;
var files_SINGLEQUOTE_ = inst_26207;
var res_SINGLEQUOTE_ = inst_26210;
var res = inst_26211;
var files_not_loaded = inst_26213;
return ((function (all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_26207,inst_26211,inst_26210,inst_26206,inst_26213,inst_26233,inst_26229,state_val_26275,c__21116__auto__,map__26148,map__26148__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__26149,map__26149__$1,msg,files){
return (function (p__26231){
var map__26318 = p__26231;
var map__26318__$1 = ((cljs.core.seq_QMARK_.call(null,map__26318))?cljs.core.apply.call(null,cljs.core.hash_map,map__26318):map__26318);
var meta_data = cljs.core.get.call(null,map__26318__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.contains_QMARK_.call(null,meta_data,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
if((cljs.core.contains_QMARK_.call(null,meta_data,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932))) && (cljs.core.not.call(null,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932).cljs$core$IFn$_invoke$arity$1(meta_data)))){
return new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
}
});
;})(all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_26207,inst_26211,inst_26210,inst_26206,inst_26213,inst_26233,inst_26229,state_val_26275,c__21116__auto__,map__26148,map__26148__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__26149,map__26149__$1,msg,files))
})();
var inst_26233__$1 = cljs.core.group_by.call(null,inst_26232,inst_26213);
var inst_26234 = cljs.core.seq_QMARK_.call(null,inst_26233__$1);
var state_26274__$1 = (function (){var statearr_26319 = state_26274;
(statearr_26319[(32)] = inst_26229);

(statearr_26319[(19)] = inst_26233__$1);

return statearr_26319;
})();
if(inst_26234){
var statearr_26320_26377 = state_26274__$1;
(statearr_26320_26377[(1)] = (26));

} else {
var statearr_26321_26378 = state_26274__$1;
(statearr_26321_26378[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26275 === (35))){
var inst_26242 = (state_26274[(30)]);
var inst_26263 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_26242);
var inst_26264 = cljs.core.pr_str.call(null,inst_26263);
var inst_26265 = [cljs.core.str("not required: "),cljs.core.str(inst_26264)].join('');
var inst_26266 = figwheel.client.utils.log.call(null,inst_26265);
var state_26274__$1 = state_26274;
var statearr_26322_26379 = state_26274__$1;
(statearr_26322_26379[(2)] = inst_26266);

(statearr_26322_26379[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26275 === (19))){
var inst_26207 = (state_26274[(12)]);
var inst_26211 = (state_26274[(13)]);
var inst_26210 = (state_26274[(14)]);
var inst_26206 = (state_26274[(15)]);
var inst_26210__$1 = (state_26274[(2)]);
var inst_26211__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_26210__$1);
var inst_26212 = (function (){var all_files = inst_26206;
var files_SINGLEQUOTE_ = inst_26207;
var res_SINGLEQUOTE_ = inst_26210__$1;
var res = inst_26211__$1;
return ((function (all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,inst_26207,inst_26211,inst_26210,inst_26206,inst_26210__$1,inst_26211__$1,state_val_26275,c__21116__auto__,map__26148,map__26148__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__26149,map__26149__$1,msg,files){
return (function (p1__25944_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__25944_SHARP_));
});
;})(all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,inst_26207,inst_26211,inst_26210,inst_26206,inst_26210__$1,inst_26211__$1,state_val_26275,c__21116__auto__,map__26148,map__26148__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__26149,map__26149__$1,msg,files))
})();
var inst_26213 = cljs.core.filter.call(null,inst_26212,inst_26210__$1);
var inst_26214 = cljs.core.not_empty.call(null,inst_26211__$1);
var state_26274__$1 = (function (){var statearr_26323 = state_26274;
(statearr_26323[(13)] = inst_26211__$1);

(statearr_26323[(14)] = inst_26210__$1);

(statearr_26323[(16)] = inst_26213);

return statearr_26323;
})();
if(cljs.core.truth_(inst_26214)){
var statearr_26324_26380 = state_26274__$1;
(statearr_26324_26380[(1)] = (20));

} else {
var statearr_26325_26381 = state_26274__$1;
(statearr_26325_26381[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26275 === (11))){
var state_26274__$1 = state_26274;
var statearr_26326_26382 = state_26274__$1;
(statearr_26326_26382[(2)] = null);

(statearr_26326_26382[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26275 === (9))){
var inst_26193 = (state_26274[(2)]);
var state_26274__$1 = state_26274;
var statearr_26327_26383 = state_26274__$1;
(statearr_26327_26383[(2)] = inst_26193);

(statearr_26327_26383[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26275 === (5))){
var inst_26164 = (state_26274[(9)]);
var inst_26163 = (state_26274[(10)]);
var inst_26166 = (inst_26164 < inst_26163);
var inst_26167 = inst_26166;
var state_26274__$1 = state_26274;
if(cljs.core.truth_(inst_26167)){
var statearr_26328_26384 = state_26274__$1;
(statearr_26328_26384[(1)] = (7));

} else {
var statearr_26329_26385 = state_26274__$1;
(statearr_26329_26385[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26275 === (14))){
var inst_26174 = (state_26274[(27)]);
var inst_26183 = cljs.core.first.call(null,inst_26174);
var inst_26184 = figwheel.client.file_reloading.eval_body.call(null,inst_26183);
var inst_26185 = cljs.core.next.call(null,inst_26174);
var inst_26161 = inst_26185;
var inst_26162 = null;
var inst_26163 = (0);
var inst_26164 = (0);
var state_26274__$1 = (function (){var statearr_26330 = state_26274;
(statearr_26330[(7)] = inst_26161);

(statearr_26330[(33)] = inst_26184);

(statearr_26330[(8)] = inst_26162);

(statearr_26330[(9)] = inst_26164);

(statearr_26330[(10)] = inst_26163);

return statearr_26330;
})();
var statearr_26331_26386 = state_26274__$1;
(statearr_26331_26386[(2)] = null);

(statearr_26331_26386[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26275 === (26))){
var inst_26233 = (state_26274[(19)]);
var inst_26236 = cljs.core.apply.call(null,cljs.core.hash_map,inst_26233);
var state_26274__$1 = state_26274;
var statearr_26332_26387 = state_26274__$1;
(statearr_26332_26387[(2)] = inst_26236);

(statearr_26332_26387[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26275 === (16))){
var inst_26200 = (state_26274[(24)]);
var inst_26202 = (function (){var all_files = inst_26200;
return ((function (all_files,inst_26200,state_val_26275,c__21116__auto__,map__26148,map__26148__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__26149,map__26149__$1,msg,files){
return (function (p1__25943_SHARP_){
return cljs.core.update_in.call(null,p1__25943_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157)], null),cljs.core.dissoc,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932));
});
;})(all_files,inst_26200,state_val_26275,c__21116__auto__,map__26148,map__26148__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__26149,map__26149__$1,msg,files))
})();
var inst_26203 = cljs.core.map.call(null,inst_26202,inst_26200);
var state_26274__$1 = state_26274;
var statearr_26333_26388 = state_26274__$1;
(statearr_26333_26388[(2)] = inst_26203);

(statearr_26333_26388[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26275 === (30))){
var state_26274__$1 = state_26274;
var statearr_26334_26389 = state_26274__$1;
(statearr_26334_26389[(2)] = null);

(statearr_26334_26389[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26275 === (10))){
var inst_26174 = (state_26274[(27)]);
var inst_26176 = cljs.core.chunked_seq_QMARK_.call(null,inst_26174);
var state_26274__$1 = state_26274;
if(inst_26176){
var statearr_26335_26390 = state_26274__$1;
(statearr_26335_26390[(1)] = (13));

} else {
var statearr_26336_26391 = state_26274__$1;
(statearr_26336_26391[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26275 === (18))){
var inst_26207 = (state_26274[(12)]);
var inst_26206 = (state_26274[(15)]);
var inst_26206__$1 = (state_26274[(2)]);
var inst_26207__$1 = figwheel.client.file_reloading.add_request_urls.call(null,opts,inst_26206__$1);
var inst_26208 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_26207__$1);
var state_26274__$1 = (function (){var statearr_26337 = state_26274;
(statearr_26337[(12)] = inst_26207__$1);

(statearr_26337[(15)] = inst_26206__$1);

return statearr_26337;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26274__$1,(19),inst_26208);
} else {
if((state_val_26275 === (37))){
var inst_26269 = (state_26274[(2)]);
var state_26274__$1 = state_26274;
var statearr_26338_26392 = state_26274__$1;
(statearr_26338_26392[(2)] = inst_26269);

(statearr_26338_26392[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26275 === (8))){
var inst_26161 = (state_26274[(7)]);
var inst_26174 = (state_26274[(27)]);
var inst_26174__$1 = cljs.core.seq.call(null,inst_26161);
var state_26274__$1 = (function (){var statearr_26339 = state_26274;
(statearr_26339[(27)] = inst_26174__$1);

return statearr_26339;
})();
if(inst_26174__$1){
var statearr_26340_26393 = state_26274__$1;
(statearr_26340_26393[(1)] = (10));

} else {
var statearr_26341_26394 = state_26274__$1;
(statearr_26341_26394[(1)] = (11));

}

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
}
}
}
});})(c__21116__auto__,map__26148,map__26148__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__26149,map__26149__$1,msg,files))
;
return ((function (switch__21054__auto__,c__21116__auto__,map__26148,map__26148__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__26149,map__26149__$1,msg,files){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__21055__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__21055__auto____0 = (function (){
var statearr_26345 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26345[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__21055__auto__);

(statearr_26345[(1)] = (1));

return statearr_26345;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__21055__auto____1 = (function (state_26274){
while(true){
var ret_value__21056__auto__ = (function (){try{while(true){
var result__21057__auto__ = switch__21054__auto__.call(null,state_26274);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21057__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21057__auto__;
}
break;
}
}catch (e26346){if((e26346 instanceof Object)){
var ex__21058__auto__ = e26346;
var statearr_26347_26395 = state_26274;
(statearr_26347_26395[(5)] = ex__21058__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26274);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26346;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21056__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26396 = state_26274;
state_26274 = G__26396;
continue;
} else {
return ret_value__21056__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__21055__auto__ = function(state_26274){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__21055__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__21055__auto____1.call(this,state_26274);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__21055__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__21055__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__21055__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__21055__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__21055__auto__;
})()
;})(switch__21054__auto__,c__21116__auto__,map__26148,map__26148__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__26149,map__26149__$1,msg,files))
})();
var state__21118__auto__ = (function (){var statearr_26348 = f__21117__auto__.call(null);
(statearr_26348[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21116__auto__);

return statearr_26348;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21118__auto__);
});})(c__21116__auto__,map__26148,map__26148__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__26149,map__26149__$1,msg,files))
);

return c__21116__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__26399,link){
var map__26401 = p__26399;
var map__26401__$1 = ((cljs.core.seq_QMARK_.call(null,map__26401))?cljs.core.apply.call(null,cljs.core.hash_map,map__26401):map__26401);
var file = cljs.core.get.call(null,map__26401__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4423__auto__ = link.href;
if(cljs.core.truth_(temp__4423__auto__)){
var link_href = temp__4423__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4423__auto__,map__26401,map__26401__$1,file){
return (function (p1__26397_SHARP_,p2__26398_SHARP_){
if(cljs.core._EQ_.call(null,p1__26397_SHARP_,p2__26398_SHARP_)){
return p1__26397_SHARP_;
} else {
return false;
}
});})(link_href,temp__4423__auto__,map__26401,map__26401__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4423__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__26405){
var map__26406 = p__26405;
var map__26406__$1 = ((cljs.core.seq_QMARK_.call(null,map__26406))?cljs.core.apply.call(null,cljs.core.hash_map,map__26406):map__26406);
var match_length = cljs.core.get.call(null,map__26406__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__26406__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__26402_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__26402_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4423__auto__)){
var res = temp__4423__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(){
var G__26408 = arguments.length;
switch (G__26408) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__26410){
var map__26412 = p__26410;
var map__26412__$1 = ((cljs.core.seq_QMARK_.call(null,map__26412))?cljs.core.apply.call(null,cljs.core.hash_map,map__26412):map__26412);
var f_data = map__26412__$1;
var file = cljs.core.get.call(null,map__26412__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var request_url = cljs.core.get.call(null,map__26412__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var temp__4421__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4421__auto__)){
var link = temp__4421__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return figwheel.client.file_reloading.add_link_to_doc.call(null,figwheel.client.file_reloading.create_link.call(null,(function (){var or__18106__auto__ = request_url;
if(cljs.core.truth_(or__18106__auto__)){
return or__18106__auto__;
} else {
return file;
}
})()));
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__26413,files_msg){
var map__26435 = p__26413;
var map__26435__$1 = ((cljs.core.seq_QMARK_.call(null,map__26435))?cljs.core.apply.call(null,cljs.core.hash_map,map__26435):map__26435);
var opts = map__26435__$1;
var on_cssload = cljs.core.get.call(null,map__26435__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__26436_26456 = cljs.core.seq.call(null,figwheel.client.file_reloading.add_request_urls.call(null,opts,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__26437_26457 = null;
var count__26438_26458 = (0);
var i__26439_26459 = (0);
while(true){
if((i__26439_26459 < count__26438_26458)){
var f_26460 = cljs.core._nth.call(null,chunk__26437_26457,i__26439_26459);
figwheel.client.file_reloading.reload_css_file.call(null,f_26460);

var G__26461 = seq__26436_26456;
var G__26462 = chunk__26437_26457;
var G__26463 = count__26438_26458;
var G__26464 = (i__26439_26459 + (1));
seq__26436_26456 = G__26461;
chunk__26437_26457 = G__26462;
count__26438_26458 = G__26463;
i__26439_26459 = G__26464;
continue;
} else {
var temp__4423__auto___26465 = cljs.core.seq.call(null,seq__26436_26456);
if(temp__4423__auto___26465){
var seq__26436_26466__$1 = temp__4423__auto___26465;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26436_26466__$1)){
var c__18891__auto___26467 = cljs.core.chunk_first.call(null,seq__26436_26466__$1);
var G__26468 = cljs.core.chunk_rest.call(null,seq__26436_26466__$1);
var G__26469 = c__18891__auto___26467;
var G__26470 = cljs.core.count.call(null,c__18891__auto___26467);
var G__26471 = (0);
seq__26436_26456 = G__26468;
chunk__26437_26457 = G__26469;
count__26438_26458 = G__26470;
i__26439_26459 = G__26471;
continue;
} else {
var f_26472 = cljs.core.first.call(null,seq__26436_26466__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_26472);

var G__26473 = cljs.core.next.call(null,seq__26436_26466__$1);
var G__26474 = null;
var G__26475 = (0);
var G__26476 = (0);
seq__26436_26456 = G__26473;
chunk__26437_26457 = G__26474;
count__26438_26458 = G__26475;
i__26439_26459 = G__26476;
continue;
}
} else {
}
}
break;
}

var c__21116__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21116__auto__,map__26435,map__26435__$1,opts,on_cssload){
return (function (){
var f__21117__auto__ = (function (){var switch__21054__auto__ = ((function (c__21116__auto__,map__26435,map__26435__$1,opts,on_cssload){
return (function (state_26446){
var state_val_26447 = (state_26446[(1)]);
if((state_val_26447 === (1))){
var inst_26440 = cljs.core.async.timeout.call(null,(100));
var state_26446__$1 = state_26446;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26446__$1,(2),inst_26440);
} else {
if((state_val_26447 === (2))){
var inst_26442 = (state_26446[(2)]);
var inst_26443 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg);
var inst_26444 = on_cssload.call(null,inst_26443);
var state_26446__$1 = (function (){var statearr_26448 = state_26446;
(statearr_26448[(7)] = inst_26442);

return statearr_26448;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26446__$1,inst_26444);
} else {
return null;
}
}
});})(c__21116__auto__,map__26435,map__26435__$1,opts,on_cssload))
;
return ((function (switch__21054__auto__,c__21116__auto__,map__26435,map__26435__$1,opts,on_cssload){
return (function() {
var figwheel$client$file_reloading$reload_css_files_$_state_machine__21055__auto__ = null;
var figwheel$client$file_reloading$reload_css_files_$_state_machine__21055__auto____0 = (function (){
var statearr_26452 = [null,null,null,null,null,null,null,null];
(statearr_26452[(0)] = figwheel$client$file_reloading$reload_css_files_$_state_machine__21055__auto__);

(statearr_26452[(1)] = (1));

return statearr_26452;
});
var figwheel$client$file_reloading$reload_css_files_$_state_machine__21055__auto____1 = (function (state_26446){
while(true){
var ret_value__21056__auto__ = (function (){try{while(true){
var result__21057__auto__ = switch__21054__auto__.call(null,state_26446);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21057__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21057__auto__;
}
break;
}
}catch (e26453){if((e26453 instanceof Object)){
var ex__21058__auto__ = e26453;
var statearr_26454_26477 = state_26446;
(statearr_26454_26477[(5)] = ex__21058__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26446);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26453;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21056__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26478 = state_26446;
state_26446 = G__26478;
continue;
} else {
return ret_value__21056__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_css_files_$_state_machine__21055__auto__ = function(state_26446){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_css_files_$_state_machine__21055__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_css_files_$_state_machine__21055__auto____1.call(this,state_26446);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_css_files_$_state_machine__21055__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_css_files_$_state_machine__21055__auto____0;
figwheel$client$file_reloading$reload_css_files_$_state_machine__21055__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_css_files_$_state_machine__21055__auto____1;
return figwheel$client$file_reloading$reload_css_files_$_state_machine__21055__auto__;
})()
;})(switch__21054__auto__,c__21116__auto__,map__26435,map__26435__$1,opts,on_cssload))
})();
var state__21118__auto__ = (function (){var statearr_26455 = f__21117__auto__.call(null);
(statearr_26455[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21116__auto__);

return statearr_26455;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21118__auto__);
});})(c__21116__auto__,map__26435,map__26435__$1,opts,on_cssload))
);

return c__21116__auto__;
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map