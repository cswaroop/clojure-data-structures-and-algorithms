// Compiled by ClojureScript 0.0-3269 {}
goog.provide('figwheel.client.heads_up');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('figwheel.client.socket');
goog.require('cljs.core.async');

figwheel.client.heads_up.node = (function figwheel$client$heads_up$node(){
var argseq__19146__auto__ = ((((2) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(2)),(0))):null);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__19146__auto__);
});

figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic = (function (t,attrs,children){
var e = document.createElement(cljs.core.name.call(null,t));
var seq__25525_25533 = cljs.core.seq.call(null,cljs.core.keys.call(null,attrs));
var chunk__25526_25534 = null;
var count__25527_25535 = (0);
var i__25528_25536 = (0);
while(true){
if((i__25528_25536 < count__25527_25535)){
var k_25537 = cljs.core._nth.call(null,chunk__25526_25534,i__25528_25536);
e.setAttribute(cljs.core.name.call(null,k_25537),cljs.core.get.call(null,attrs,k_25537));

var G__25538 = seq__25525_25533;
var G__25539 = chunk__25526_25534;
var G__25540 = count__25527_25535;
var G__25541 = (i__25528_25536 + (1));
seq__25525_25533 = G__25538;
chunk__25526_25534 = G__25539;
count__25527_25535 = G__25540;
i__25528_25536 = G__25541;
continue;
} else {
var temp__4423__auto___25542 = cljs.core.seq.call(null,seq__25525_25533);
if(temp__4423__auto___25542){
var seq__25525_25543__$1 = temp__4423__auto___25542;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25525_25543__$1)){
var c__18891__auto___25544 = cljs.core.chunk_first.call(null,seq__25525_25543__$1);
var G__25545 = cljs.core.chunk_rest.call(null,seq__25525_25543__$1);
var G__25546 = c__18891__auto___25544;
var G__25547 = cljs.core.count.call(null,c__18891__auto___25544);
var G__25548 = (0);
seq__25525_25533 = G__25545;
chunk__25526_25534 = G__25546;
count__25527_25535 = G__25547;
i__25528_25536 = G__25548;
continue;
} else {
var k_25549 = cljs.core.first.call(null,seq__25525_25543__$1);
e.setAttribute(cljs.core.name.call(null,k_25549),cljs.core.get.call(null,attrs,k_25549));

var G__25550 = cljs.core.next.call(null,seq__25525_25543__$1);
var G__25551 = null;
var G__25552 = (0);
var G__25553 = (0);
seq__25525_25533 = G__25550;
chunk__25526_25534 = G__25551;
count__25527_25535 = G__25552;
i__25528_25536 = G__25553;
continue;
}
} else {
}
}
break;
}

var seq__25529_25554 = cljs.core.seq.call(null,children);
var chunk__25530_25555 = null;
var count__25531_25556 = (0);
var i__25532_25557 = (0);
while(true){
if((i__25532_25557 < count__25531_25556)){
var ch_25558 = cljs.core._nth.call(null,chunk__25530_25555,i__25532_25557);
e.appendChild(ch_25558);

var G__25559 = seq__25529_25554;
var G__25560 = chunk__25530_25555;
var G__25561 = count__25531_25556;
var G__25562 = (i__25532_25557 + (1));
seq__25529_25554 = G__25559;
chunk__25530_25555 = G__25560;
count__25531_25556 = G__25561;
i__25532_25557 = G__25562;
continue;
} else {
var temp__4423__auto___25563 = cljs.core.seq.call(null,seq__25529_25554);
if(temp__4423__auto___25563){
var seq__25529_25564__$1 = temp__4423__auto___25563;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25529_25564__$1)){
var c__18891__auto___25565 = cljs.core.chunk_first.call(null,seq__25529_25564__$1);
var G__25566 = cljs.core.chunk_rest.call(null,seq__25529_25564__$1);
var G__25567 = c__18891__auto___25565;
var G__25568 = cljs.core.count.call(null,c__18891__auto___25565);
var G__25569 = (0);
seq__25529_25554 = G__25566;
chunk__25530_25555 = G__25567;
count__25531_25556 = G__25568;
i__25532_25557 = G__25569;
continue;
} else {
var ch_25570 = cljs.core.first.call(null,seq__25529_25564__$1);
e.appendChild(ch_25570);

var G__25571 = cljs.core.next.call(null,seq__25529_25564__$1);
var G__25572 = null;
var G__25573 = (0);
var G__25574 = (0);
seq__25529_25554 = G__25571;
chunk__25530_25555 = G__25572;
count__25531_25556 = G__25573;
i__25532_25557 = G__25574;
continue;
}
} else {
}
}
break;
}

return e;
});

figwheel.client.heads_up.node.cljs$lang$maxFixedArity = (2);

figwheel.client.heads_up.node.cljs$lang$applyTo = (function (seq25522){
var G__25523 = cljs.core.first.call(null,seq25522);
var seq25522__$1 = cljs.core.next.call(null,seq25522);
var G__25524 = cljs.core.first.call(null,seq25522__$1);
var seq25522__$2 = cljs.core.next.call(null,seq25522__$1);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic(G__25523,G__25524,seq25522__$2);
});
if(typeof figwheel.client.heads_up.heads_up_event_dispatch !== 'undefined'){
} else {
figwheel.client.heads_up.heads_up_event_dispatch = (function (){var method_table__19001__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__19002__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__19003__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__19004__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__19005__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.heads-up","heads-up-event-dispatch"),((function (method_table__19001__auto__,prefer_table__19002__auto__,method_cache__19003__auto__,cached_hierarchy__19004__auto__,hierarchy__19005__auto__){
return (function (dataset){
return dataset.figwheelEvent;
});})(method_table__19001__auto__,prefer_table__19002__auto__,method_cache__19003__auto__,cached_hierarchy__19004__auto__,hierarchy__19005__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__19005__auto__,method_table__19001__auto__,prefer_table__19002__auto__,method_cache__19003__auto__,cached_hierarchy__19004__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_){
return cljs.core.PersistentArrayMap.EMPTY;
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"file-selected",(function (dataset){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"file-selected",new cljs.core.Keyword(null,"file-name","file-name",-1654217259),dataset.fileName,new cljs.core.Keyword(null,"file-line","file-line",-1228823138),dataset.fileLine], null));
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"close-heads-up",(function (dataset){
return figwheel.client.heads_up.clear.call(null);
}));
figwheel.client.heads_up.ancestor_nodes = (function figwheel$client$heads_up$ancestor_nodes(el){
return cljs.core.iterate.call(null,(function (e){
return e.parentNode;
}),el);
});
figwheel.client.heads_up.get_dataset = (function figwheel$client$heads_up$get_dataset(el){
return cljs.core.first.call(null,cljs.core.keep.call(null,(function (x){
if(cljs.core.truth_(x.dataset.figwheelEvent)){
return x.dataset;
} else {
return null;
}
}),cljs.core.take.call(null,(4),figwheel.client.heads_up.ancestor_nodes.call(null,el))));
});
figwheel.client.heads_up.heads_up_onclick_handler = (function figwheel$client$heads_up$heads_up_onclick_handler(event){
var dataset = figwheel.client.heads_up.get_dataset.call(null,event.target);
event.preventDefault();

if(cljs.core.truth_(dataset)){
return figwheel.client.heads_up.heads_up_event_dispatch.call(null,dataset);
} else {
return null;
}
});
figwheel.client.heads_up.ensure_container = (function figwheel$client$heads_up$ensure_container(){
var cont_id = "figwheel-heads-up-container";
var content_id = "figwheel-heads-up-content-area";
if(cljs.core.not.call(null,document.querySelector([cljs.core.str("#"),cljs.core.str(cont_id)].join('')))){
var el_25575 = figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cont_id,new cljs.core.Keyword(null,"style","style",-496642736),[cljs.core.str("-webkit-transition: all 0.2s ease-in-out;"),cljs.core.str("-moz-transition: all 0.2s ease-in-out;"),cljs.core.str("-o-transition: all 0.2s ease-in-out;"),cljs.core.str("transition: all 0.2s ease-in-out;"),cljs.core.str("font-size: 13px;"),cljs.core.str("border-top: 1px solid #f5f5f5;"),cljs.core.str("box-shadow: 0px 0px 1px #aaaaaa;"),cljs.core.str("line-height: 18px;"),cljs.core.str("color: #333;"),cljs.core.str("font-family: monospace;"),cljs.core.str("padding: 0px 10px 0px 70px;"),cljs.core.str("position: fixed;"),cljs.core.str("bottom: 0px;"),cljs.core.str("left: 0px;"),cljs.core.str("height: 0px;"),cljs.core.str("opacity: 0.0;"),cljs.core.str("box-sizing: border-box;"),cljs.core.str("z-index: 10000;")].join('')], null));
el_25575.onclick = figwheel.client.heads_up.heads_up_onclick_handler;

el_25575.innerHTML = [cljs.core.str(figwheel.client.heads_up.clojure_symbol_svg)].join('');

el_25575.appendChild(figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),content_id], null)));

document.body.appendChild(el_25575);
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"container-el","container-el",109664205),document.getElementById(cont_id),new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187),document.getElementById(content_id)], null);
});
figwheel.client.heads_up.set_style_BANG_ = (function figwheel$client$heads_up$set_style_BANG_(p__25576,st_map){
var map__25580 = p__25576;
var map__25580__$1 = ((cljs.core.seq_QMARK_.call(null,map__25580))?cljs.core.apply.call(null,cljs.core.hash_map,map__25580):map__25580);
var container_el = cljs.core.get.call(null,map__25580__$1,new cljs.core.Keyword(null,"container-el","container-el",109664205));
return cljs.core.mapv.call(null,((function (map__25580,map__25580__$1,container_el){
return (function (p__25581){
var vec__25582 = p__25581;
var k = cljs.core.nth.call(null,vec__25582,(0),null);
var v = cljs.core.nth.call(null,vec__25582,(1),null);
return (container_el.style[cljs.core.name.call(null,k)] = v);
});})(map__25580,map__25580__$1,container_el))
,st_map);
});
figwheel.client.heads_up.set_content_BANG_ = (function figwheel$client$heads_up$set_content_BANG_(p__25583,dom_str){
var map__25585 = p__25583;
var map__25585__$1 = ((cljs.core.seq_QMARK_.call(null,map__25585))?cljs.core.apply.call(null,cljs.core.hash_map,map__25585):map__25585);
var c = map__25585__$1;
var content_area_el = cljs.core.get.call(null,map__25585__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML = dom_str;
});
figwheel.client.heads_up.get_content = (function figwheel$client$heads_up$get_content(p__25586){
var map__25588 = p__25586;
var map__25588__$1 = ((cljs.core.seq_QMARK_.call(null,map__25588))?cljs.core.apply.call(null,cljs.core.hash_map,map__25588):map__25588);
var content_area_el = cljs.core.get.call(null,map__25588__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML;
});
figwheel.client.heads_up.close_link = (function figwheel$client$heads_up$close_link(){
return [cljs.core.str("<a style=\""),cljs.core.str("float: right;"),cljs.core.str("font-size: 18px;"),cljs.core.str("text-decoration: none;"),cljs.core.str("text-align: right;"),cljs.core.str("width: 30px;"),cljs.core.str("height: 30px;"),cljs.core.str("color: rgba(84,84,84, 0.5);"),cljs.core.str("\" href=\"#\"  data-figwheel-event=\"close-heads-up\">"),cljs.core.str("x"),cljs.core.str("</a>")].join('');
});
figwheel.client.heads_up.display_heads_up = (function figwheel$client$heads_up$display_heads_up(style,msg){
var c__21116__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21116__auto__){
return (function (){
var f__21117__auto__ = (function (){var switch__21054__auto__ = ((function (c__21116__auto__){
return (function (state_25630){
var state_val_25631 = (state_25630[(1)]);
if((state_val_25631 === (1))){
var inst_25615 = (state_25630[(7)]);
var inst_25615__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_25616 = [new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),new cljs.core.Keyword(null,"paddingBottom","paddingBottom",-916694489),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_25617 = ["10px","10px","100%","68px","1.0"];
var inst_25618 = cljs.core.PersistentHashMap.fromArrays(inst_25616,inst_25617);
var inst_25619 = cljs.core.merge.call(null,inst_25618,style);
var inst_25620 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_25615__$1,inst_25619);
var inst_25621 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_25615__$1,msg);
var inst_25622 = cljs.core.async.timeout.call(null,(300));
var state_25630__$1 = (function (){var statearr_25632 = state_25630;
(statearr_25632[(7)] = inst_25615__$1);

(statearr_25632[(8)] = inst_25620);

(statearr_25632[(9)] = inst_25621);

return statearr_25632;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25630__$1,(2),inst_25622);
} else {
if((state_val_25631 === (2))){
var inst_25615 = (state_25630[(7)]);
var inst_25624 = (state_25630[(2)]);
var inst_25625 = [new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_25626 = ["auto"];
var inst_25627 = cljs.core.PersistentHashMap.fromArrays(inst_25625,inst_25626);
var inst_25628 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_25615,inst_25627);
var state_25630__$1 = (function (){var statearr_25633 = state_25630;
(statearr_25633[(10)] = inst_25624);

return statearr_25633;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25630__$1,inst_25628);
} else {
return null;
}
}
});})(c__21116__auto__))
;
return ((function (switch__21054__auto__,c__21116__auto__){
return (function() {
var figwheel$client$heads_up$display_heads_up_$_state_machine__21055__auto__ = null;
var figwheel$client$heads_up$display_heads_up_$_state_machine__21055__auto____0 = (function (){
var statearr_25637 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_25637[(0)] = figwheel$client$heads_up$display_heads_up_$_state_machine__21055__auto__);

(statearr_25637[(1)] = (1));

return statearr_25637;
});
var figwheel$client$heads_up$display_heads_up_$_state_machine__21055__auto____1 = (function (state_25630){
while(true){
var ret_value__21056__auto__ = (function (){try{while(true){
var result__21057__auto__ = switch__21054__auto__.call(null,state_25630);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21057__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21057__auto__;
}
break;
}
}catch (e25638){if((e25638 instanceof Object)){
var ex__21058__auto__ = e25638;
var statearr_25639_25641 = state_25630;
(statearr_25639_25641[(5)] = ex__21058__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25630);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25638;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21056__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25642 = state_25630;
state_25630 = G__25642;
continue;
} else {
return ret_value__21056__auto__;
}
break;
}
});
figwheel$client$heads_up$display_heads_up_$_state_machine__21055__auto__ = function(state_25630){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$display_heads_up_$_state_machine__21055__auto____0.call(this);
case 1:
return figwheel$client$heads_up$display_heads_up_$_state_machine__21055__auto____1.call(this,state_25630);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$display_heads_up_$_state_machine__21055__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$display_heads_up_$_state_machine__21055__auto____0;
figwheel$client$heads_up$display_heads_up_$_state_machine__21055__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$display_heads_up_$_state_machine__21055__auto____1;
return figwheel$client$heads_up$display_heads_up_$_state_machine__21055__auto__;
})()
;})(switch__21054__auto__,c__21116__auto__))
})();
var state__21118__auto__ = (function (){var statearr_25640 = f__21117__auto__.call(null);
(statearr_25640[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21116__auto__);

return statearr_25640;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21118__auto__);
});})(c__21116__auto__))
);

return c__21116__auto__;
});
figwheel.client.heads_up.heading = (function figwheel$client$heads_up$heading(s){
return [cljs.core.str("<div style=\""),cljs.core.str("font-size: 26px;"),cljs.core.str("line-height: 26px;"),cljs.core.str("margin-bottom: 2px;"),cljs.core.str("padding-top: 1px;"),cljs.core.str("\">"),cljs.core.str(s),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.file_and_line_number = (function figwheel$client$heads_up$file_and_line_number(msg){
if(cljs.core.truth_(cljs.core.re_matches.call(null,/.*at\sline.*/,msg))){
return cljs.core.take.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,msg," ")));
} else {
return null;
}
});
figwheel.client.heads_up.file_selector_div = (function figwheel$client$heads_up$file_selector_div(file_name,line_number,msg){
return [cljs.core.str("<div data-figwheel-event=\"file-selected\" data-file-name=\""),cljs.core.str(file_name),cljs.core.str("\" data-file-line=\""),cljs.core.str(line_number),cljs.core.str("\">"),cljs.core.str(msg),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.format_line = (function figwheel$client$heads_up$format_line(msg){
var temp__4421__auto__ = figwheel.client.heads_up.file_and_line_number.call(null,msg);
if(cljs.core.truth_(temp__4421__auto__)){
var vec__25644 = temp__4421__auto__;
var f = cljs.core.nth.call(null,vec__25644,(0),null);
var ln = cljs.core.nth.call(null,vec__25644,(1),null);
return figwheel.client.heads_up.file_selector_div.call(null,f,ln,msg);
} else {
return [cljs.core.str("<div>"),cljs.core.str(msg),cljs.core.str("</div>")].join('');
}
});
figwheel.client.heads_up.display_error = (function figwheel$client$heads_up$display_error(formatted_messages,cause){
var vec__25647 = (cljs.core.truth_(cause)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause)], null):cljs.core.first.call(null,cljs.core.keep.call(null,figwheel.client.heads_up.file_and_line_number,formatted_messages)));
var file_name = cljs.core.nth.call(null,vec__25647,(0),null);
var file_line = cljs.core.nth.call(null,vec__25647,(1),null);
var file_column = cljs.core.nth.call(null,vec__25647,(2),null);
var msg = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__25647,file_name,file_line,file_column){
return (function (p1__25645_SHARP_){
return [cljs.core.str("<div>"),cljs.core.str(p1__25645_SHARP_),cljs.core.str("</div>")].join('');
});})(vec__25647,file_name,file_line,file_column))
,formatted_messages));
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 161, 161, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,"Compile Error")),cljs.core.str(figwheel.client.heads_up.file_selector_div.call(null,file_name,(function (){var or__18106__auto__ = file_line;
if(cljs.core.truth_(or__18106__auto__)){
return or__18106__auto__;
} else {
var and__18094__auto__ = cause;
if(cljs.core.truth_(and__18094__auto__)){
return new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause);
} else {
return and__18094__auto__;
}
}
})(),[cljs.core.str(msg),cljs.core.str((cljs.core.truth_(cause)?[cljs.core.str("Error on file "),cljs.core.str(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''):""))].join('')))].join(''));
});
figwheel.client.heads_up.display_system_warning = (function figwheel$client$heads_up$display_system_warning(header,msg){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 220, 110, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,header)),cljs.core.str(figwheel.client.heads_up.format_line.call(null,msg))].join(''));
});
figwheel.client.heads_up.display_warning = (function figwheel$client$heads_up$display_warning(msg){
return figwheel.client.heads_up.display_system_warning.call(null,"Compile Warning",msg);
});
figwheel.client.heads_up.append_message = (function figwheel$client$heads_up$append_message(message){
var map__25649 = figwheel.client.heads_up.ensure_container.call(null);
var map__25649__$1 = ((cljs.core.seq_QMARK_.call(null,map__25649))?cljs.core.apply.call(null,cljs.core.hash_map,map__25649):map__25649);
var content_area_el = cljs.core.get.call(null,map__25649__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
var el = document.createElement("div");
el.innerHTML = figwheel.client.heads_up.format_line.call(null,message);

return content_area_el.appendChild(el);
});
figwheel.client.heads_up.clear = (function figwheel$client$heads_up$clear(){
var c__21116__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21116__auto__){
return (function (){
var f__21117__auto__ = (function (){var switch__21054__auto__ = ((function (c__21116__auto__){
return (function (state_25696){
var state_val_25697 = (state_25696[(1)]);
if((state_val_25697 === (1))){
var inst_25679 = (state_25696[(7)]);
var inst_25679__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_25680 = [new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_25681 = ["0.0"];
var inst_25682 = cljs.core.PersistentHashMap.fromArrays(inst_25680,inst_25681);
var inst_25683 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_25679__$1,inst_25682);
var inst_25684 = cljs.core.async.timeout.call(null,(300));
var state_25696__$1 = (function (){var statearr_25698 = state_25696;
(statearr_25698[(7)] = inst_25679__$1);

(statearr_25698[(8)] = inst_25683);

return statearr_25698;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25696__$1,(2),inst_25684);
} else {
if((state_val_25697 === (2))){
var inst_25679 = (state_25696[(7)]);
var inst_25686 = (state_25696[(2)]);
var inst_25687 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491)];
var inst_25688 = ["auto","0px","0px","0px 10px 0px 70px","0px","transparent"];
var inst_25689 = cljs.core.PersistentHashMap.fromArrays(inst_25687,inst_25688);
var inst_25690 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_25679,inst_25689);
var inst_25691 = cljs.core.async.timeout.call(null,(200));
var state_25696__$1 = (function (){var statearr_25699 = state_25696;
(statearr_25699[(9)] = inst_25686);

(statearr_25699[(10)] = inst_25690);

return statearr_25699;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25696__$1,(3),inst_25691);
} else {
if((state_val_25697 === (3))){
var inst_25679 = (state_25696[(7)]);
var inst_25693 = (state_25696[(2)]);
var inst_25694 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_25679,"");
var state_25696__$1 = (function (){var statearr_25700 = state_25696;
(statearr_25700[(11)] = inst_25693);

return statearr_25700;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25696__$1,inst_25694);
} else {
return null;
}
}
}
});})(c__21116__auto__))
;
return ((function (switch__21054__auto__,c__21116__auto__){
return (function() {
var figwheel$client$heads_up$clear_$_state_machine__21055__auto__ = null;
var figwheel$client$heads_up$clear_$_state_machine__21055__auto____0 = (function (){
var statearr_25704 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25704[(0)] = figwheel$client$heads_up$clear_$_state_machine__21055__auto__);

(statearr_25704[(1)] = (1));

return statearr_25704;
});
var figwheel$client$heads_up$clear_$_state_machine__21055__auto____1 = (function (state_25696){
while(true){
var ret_value__21056__auto__ = (function (){try{while(true){
var result__21057__auto__ = switch__21054__auto__.call(null,state_25696);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21057__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21057__auto__;
}
break;
}
}catch (e25705){if((e25705 instanceof Object)){
var ex__21058__auto__ = e25705;
var statearr_25706_25708 = state_25696;
(statearr_25706_25708[(5)] = ex__21058__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25696);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25705;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21056__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25709 = state_25696;
state_25696 = G__25709;
continue;
} else {
return ret_value__21056__auto__;
}
break;
}
});
figwheel$client$heads_up$clear_$_state_machine__21055__auto__ = function(state_25696){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$clear_$_state_machine__21055__auto____0.call(this);
case 1:
return figwheel$client$heads_up$clear_$_state_machine__21055__auto____1.call(this,state_25696);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$clear_$_state_machine__21055__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$clear_$_state_machine__21055__auto____0;
figwheel$client$heads_up$clear_$_state_machine__21055__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$clear_$_state_machine__21055__auto____1;
return figwheel$client$heads_up$clear_$_state_machine__21055__auto__;
})()
;})(switch__21054__auto__,c__21116__auto__))
})();
var state__21118__auto__ = (function (){var statearr_25707 = f__21117__auto__.call(null);
(statearr_25707[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21116__auto__);

return statearr_25707;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21118__auto__);
});})(c__21116__auto__))
);

return c__21116__auto__;
});
figwheel.client.heads_up.display_loaded_start = (function figwheel$client$heads_up$display_loaded_start(){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(211,234,172,1.0)",new cljs.core.Keyword(null,"width","width",-384071477),"68px",new cljs.core.Keyword(null,"height","height",1025178622),"68px",new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),"0px",new cljs.core.Keyword(null,"paddingRight","paddingRight",-1642313463),"0px",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"35px"], null),"");
});
figwheel.client.heads_up.flash_loaded = (function figwheel$client$heads_up$flash_loaded(){
var c__21116__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21116__auto__){
return (function (){
var f__21117__auto__ = (function (){var switch__21054__auto__ = ((function (c__21116__auto__){
return (function (state_25741){
var state_val_25742 = (state_25741[(1)]);
if((state_val_25742 === (1))){
var inst_25731 = figwheel.client.heads_up.display_loaded_start.call(null);
var state_25741__$1 = state_25741;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25741__$1,(2),inst_25731);
} else {
if((state_val_25742 === (2))){
var inst_25733 = (state_25741[(2)]);
var inst_25734 = cljs.core.async.timeout.call(null,(400));
var state_25741__$1 = (function (){var statearr_25743 = state_25741;
(statearr_25743[(7)] = inst_25733);

return statearr_25743;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25741__$1,(3),inst_25734);
} else {
if((state_val_25742 === (3))){
var inst_25736 = (state_25741[(2)]);
var inst_25737 = figwheel.client.heads_up.clear.call(null);
var state_25741__$1 = (function (){var statearr_25744 = state_25741;
(statearr_25744[(8)] = inst_25736);

return statearr_25744;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25741__$1,(4),inst_25737);
} else {
if((state_val_25742 === (4))){
var inst_25739 = (state_25741[(2)]);
var state_25741__$1 = state_25741;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25741__$1,inst_25739);
} else {
return null;
}
}
}
}
});})(c__21116__auto__))
;
return ((function (switch__21054__auto__,c__21116__auto__){
return (function() {
var figwheel$client$heads_up$flash_loaded_$_state_machine__21055__auto__ = null;
var figwheel$client$heads_up$flash_loaded_$_state_machine__21055__auto____0 = (function (){
var statearr_25748 = [null,null,null,null,null,null,null,null,null];
(statearr_25748[(0)] = figwheel$client$heads_up$flash_loaded_$_state_machine__21055__auto__);

(statearr_25748[(1)] = (1));

return statearr_25748;
});
var figwheel$client$heads_up$flash_loaded_$_state_machine__21055__auto____1 = (function (state_25741){
while(true){
var ret_value__21056__auto__ = (function (){try{while(true){
var result__21057__auto__ = switch__21054__auto__.call(null,state_25741);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21057__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21057__auto__;
}
break;
}
}catch (e25749){if((e25749 instanceof Object)){
var ex__21058__auto__ = e25749;
var statearr_25750_25752 = state_25741;
(statearr_25750_25752[(5)] = ex__21058__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25741);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25749;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21056__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25753 = state_25741;
state_25741 = G__25753;
continue;
} else {
return ret_value__21056__auto__;
}
break;
}
});
figwheel$client$heads_up$flash_loaded_$_state_machine__21055__auto__ = function(state_25741){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$flash_loaded_$_state_machine__21055__auto____0.call(this);
case 1:
return figwheel$client$heads_up$flash_loaded_$_state_machine__21055__auto____1.call(this,state_25741);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$flash_loaded_$_state_machine__21055__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$flash_loaded_$_state_machine__21055__auto____0;
figwheel$client$heads_up$flash_loaded_$_state_machine__21055__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$flash_loaded_$_state_machine__21055__auto____1;
return figwheel$client$heads_up$flash_loaded_$_state_machine__21055__auto__;
})()
;})(switch__21054__auto__,c__21116__auto__))
})();
var state__21118__auto__ = (function (){var statearr_25751 = f__21117__auto__.call(null);
(statearr_25751[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21116__auto__);

return statearr_25751;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21118__auto__);
});})(c__21116__auto__))
);

return c__21116__auto__;
});
figwheel.client.heads_up.clojure_symbol_svg = "<?xml version='1.0' encoding='UTF-8' ?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg width='49px' height='49px' viewBox='0 0 100 99' version='1.1' xmlns='http://www.w3.org/2000/svg' style='position:absolute; top:9px; left: 10px;'>\n<circle fill='rgba(255,255,255,0.5)' cx='49.75' cy='49.5' r='48.5'/>\n<path fill='#5881d8' d=' M 39.30 6.22 C 51.71 3.11 65.45 5.64 75.83 13.16 C 88.68 22.10 96.12 38.22 94.43 53.80 C 93.66 60.11 89.40 66.01 83.37 68.24 C 79.21 69.97 74.64 69.78 70.23 69.80 C 80.77 59.67 81.41 41.33 71.45 30.60 C 63.60 21.32 49.75 18.52 38.65 23.16 C 31.27 18.80 21.83 18.68 14.27 22.69 C 20.65 14.79 29.32 8.56 39.30 6.22 Z' />\n<path fill='#90b4fe' d=' M 42.93 26.99 C 48.49 25.50 54.55 25.62 59.79 28.14 C 68.71 32.19 74.61 42.14 73.41 51.94 C 72.85 58.64 68.92 64.53 63.81 68.69 C 59.57 66.71 57.53 62.30 55.66 58.30 C 50.76 48.12 50.23 36.02 42.93 26.99 Z' />\n<path fill='#63b132' d=' M 12.30 33.30 C 17.11 28.49 24.33 26.90 30.91 28.06 C 25.22 33.49 21.44 41.03 21.46 48.99 C 21.11 58.97 26.58 68.76 35.08 73.92 C 43.28 79.06 53.95 79.28 62.66 75.29 C 70.37 77.57 78.52 77.36 86.31 75.57 C 80.05 84.00 70.94 90.35 60.69 92.84 C 48.02 96.03 34.00 93.24 23.56 85.37 C 12.16 77.09 5.12 63.11 5.44 49.00 C 5.15 43.06 8.22 37.42 12.30 33.30 Z' />\n<path fill='#91dc47' d=' M 26.94 54.00 C 24.97 45.06 29.20 35.59 36.45 30.24 C 41.99 33.71 44.23 40.14 46.55 45.91 C 43.00 53.40 38.44 60.46 35.94 68.42 C 31.50 64.74 27.96 59.77 26.94 54.00 Z' />\n<path fill='#91dc47' d=' M 41.97 71.80 C 41.46 64.27 45.31 57.52 48.11 50.80 C 50.40 58.13 51.84 66.19 57.18 72.06 C 52.17 73.37 46.93 73.26 41.97 71.80 Z' />\n</svg>";

//# sourceMappingURL=heads_up.js.map