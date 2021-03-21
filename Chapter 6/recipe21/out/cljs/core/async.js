// Compiled by ClojureScript 0.0-3269 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(f){
if(typeof cljs.core.async.t26529 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t26529 = (function (fn_handler,f,meta26530){
this.fn_handler = fn_handler;
this.f = f;
this.meta26530 = meta26530;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t26529.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26531,meta26530__$1){
var self__ = this;
var _26531__$1 = this;
return (new cljs.core.async.t26529(self__.fn_handler,self__.f,meta26530__$1));
});

cljs.core.async.t26529.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26531){
var self__ = this;
var _26531__$1 = this;
return self__.meta26530;
});

cljs.core.async.t26529.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t26529.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t26529.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t26529.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fn-handler","fn-handler",648785851,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"meta26530","meta26530",-1687219725,null)], null);
});

cljs.core.async.t26529.cljs$lang$type = true;

cljs.core.async.t26529.cljs$lang$ctorStr = "cljs.core.async/t26529";

cljs.core.async.t26529.cljs$lang$ctorPrWriter = (function (this__18685__auto__,writer__18686__auto__,opt__18687__auto__){
return cljs.core._write.call(null,writer__18686__auto__,"cljs.core.async/t26529");
});

cljs.core.async.__GT_t26529 = (function cljs$core$async$fn_handler_$___GT_t26529(fn_handler__$1,f__$1,meta26530){
return (new cljs.core.async.t26529(fn_handler__$1,f__$1,meta26530));
});

}

return (new cljs.core.async.t26529(cljs$core$async$fn_handler,f,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 * val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 * buffered, but oldest elements in buffer will be dropped (not
 * transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full.
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
var G__26533 = buff;
if(G__26533){
var bit__18780__auto__ = null;
if(cljs.core.truth_((function (){var or__18106__auto__ = bit__18780__auto__;
if(cljs.core.truth_(or__18106__auto__)){
return or__18106__auto__;
} else {
return G__26533.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__26533.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__26533);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__26533);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 * (filter p) etc or a composition thereof), and an optional exception handler.
 * If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 * transducer is supplied a buffer must be specified. ex-handler must be a
 * fn of one argument - if an exception occurs during transformation it will be called
 * with the thrown value as an argument, and any non-nil return value will be placed
 * in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(){
var G__26535 = arguments.length;
switch (G__26535) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)))].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 * return nil if closed. Will park if nothing is available.
 * Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(){
var G__26538 = arguments.length;
switch (G__26538) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_26540 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_26540);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_26540,ret){
return (function (){
return fn1.call(null,val_26540);
});})(val_26540,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;
cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 * inside a (go ...) block. Will park if no buffer space is available.
 * Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(){
var G__26542 = arguments.length;
switch (G__26542) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4421__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4421__auto__)){
var ret = temp__4421__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4421__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4421__auto__)){
var retb = temp__4421__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4421__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4421__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;
cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__18991__auto___26544 = n;
var x_26545 = (0);
while(true){
if((x_26545 < n__18991__auto___26544)){
(a[x_26545] = (0));

var G__26546 = (x_26545 + (1));
x_26545 = G__26546;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__26547 = (i + (1));
i = G__26547;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t26551 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t26551 = (function (alt_flag,flag,meta26552){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta26552 = meta26552;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t26551.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_26553,meta26552__$1){
var self__ = this;
var _26553__$1 = this;
return (new cljs.core.async.t26551(self__.alt_flag,self__.flag,meta26552__$1));
});})(flag))
;

cljs.core.async.t26551.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_26553){
var self__ = this;
var _26553__$1 = this;
return self__.meta26552;
});})(flag))
;

cljs.core.async.t26551.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t26551.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t26551.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t26551.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta26552","meta26552",-786871888,null)], null);
});})(flag))
;

cljs.core.async.t26551.cljs$lang$type = true;

cljs.core.async.t26551.cljs$lang$ctorStr = "cljs.core.async/t26551";

cljs.core.async.t26551.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__18685__auto__,writer__18686__auto__,opt__18687__auto__){
return cljs.core._write.call(null,writer__18686__auto__,"cljs.core.async/t26551");
});})(flag))
;

cljs.core.async.__GT_t26551 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t26551(alt_flag__$1,flag__$1,meta26552){
return (new cljs.core.async.t26551(alt_flag__$1,flag__$1,meta26552));
});})(flag))
;

}

return (new cljs.core.async.t26551(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t26557 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t26557 = (function (alt_handler,flag,cb,meta26558){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta26558 = meta26558;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t26557.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26559,meta26558__$1){
var self__ = this;
var _26559__$1 = this;
return (new cljs.core.async.t26557(self__.alt_handler,self__.flag,self__.cb,meta26558__$1));
});

cljs.core.async.t26557.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26559){
var self__ = this;
var _26559__$1 = this;
return self__.meta26558;
});

cljs.core.async.t26557.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t26557.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t26557.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t26557.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta26558","meta26558",1213774372,null)], null);
});

cljs.core.async.t26557.cljs$lang$type = true;

cljs.core.async.t26557.cljs$lang$ctorStr = "cljs.core.async/t26557";

cljs.core.async.t26557.cljs$lang$ctorPrWriter = (function (this__18685__auto__,writer__18686__auto__,opt__18687__auto__){
return cljs.core._write.call(null,writer__18686__auto__,"cljs.core.async/t26557");
});

cljs.core.async.__GT_t26557 = (function cljs$core$async$alt_handler_$___GT_t26557(alt_handler__$1,flag__$1,cb__$1,meta26558){
return (new cljs.core.async.t26557(alt_handler__$1,flag__$1,cb__$1,meta26558));
});

}

return (new cljs.core.async.t26557(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__26560_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__26560_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__26561_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__26561_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__18106__auto__ = wport;
if(cljs.core.truth_(or__18106__auto__)){
return or__18106__auto__;
} else {
return port;
}
})()], null));
} else {
var G__26562 = (i + (1));
i = G__26562;
continue;
}
} else {
return null;
}
break;
}
})();
var or__18106__auto__ = ret;
if(cljs.core.truth_(or__18106__auto__)){
return or__18106__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4423__auto__ = (function (){var and__18094__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__18094__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__18094__auto__;
}
})();
if(cljs.core.truth_(temp__4423__auto__)){
var got = temp__4423__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 * [channel-to-put-to val-to-put], in any combination. Takes will be
 * made as if by <!, and puts will be made as if by >!. Unless
 * the :priority option is true, if more than one port operation is
 * ready a non-deterministic choice will be made. If no operation is
 * ready and a :default value is supplied, [default-val :default] will
 * be returned, otherwise alts! will park until the first operation to
 * become ready completes. Returns [val port] of the completed
 * operation, where val is the value taken for takes, and a
 * boolean (true unless already closed, as per put!) for puts.
 * 
 * opts are passed as :key val ... Supported options:
 * 
 * :default val - the value to use if none of the operations are immediately ready
 * :priority true - (default nil) when true, the operations will be tried in order.
 * 
 * Note: there is no guarantee that the port exps or val exprs will be
 * used, nor in what order should they be, so they should not be
 * depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(){
var argseq__19146__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19146__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__26565){
var map__26566 = p__26565;
var map__26566__$1 = ((cljs.core.seq_QMARK_.call(null,map__26566))?cljs.core.apply.call(null,cljs.core.hash_map,map__26566):map__26566);
var opts = map__26566__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq26563){
var G__26564 = cljs.core.first.call(null,seq26563);
var seq26563__$1 = cljs.core.next.call(null,seq26563);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__26564,seq26563__$1);
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(){
var G__26568 = arguments.length;
switch (G__26568) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__21116__auto___26617 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21116__auto___26617){
return (function (){
var f__21117__auto__ = (function (){var switch__21054__auto__ = ((function (c__21116__auto___26617){
return (function (state_26592){
var state_val_26593 = (state_26592[(1)]);
if((state_val_26593 === (7))){
var inst_26588 = (state_26592[(2)]);
var state_26592__$1 = state_26592;
var statearr_26594_26618 = state_26592__$1;
(statearr_26594_26618[(2)] = inst_26588);

(statearr_26594_26618[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26593 === (1))){
var state_26592__$1 = state_26592;
var statearr_26595_26619 = state_26592__$1;
(statearr_26595_26619[(2)] = null);

(statearr_26595_26619[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26593 === (4))){
var inst_26571 = (state_26592[(7)]);
var inst_26571__$1 = (state_26592[(2)]);
var inst_26572 = (inst_26571__$1 == null);
var state_26592__$1 = (function (){var statearr_26596 = state_26592;
(statearr_26596[(7)] = inst_26571__$1);

return statearr_26596;
})();
if(cljs.core.truth_(inst_26572)){
var statearr_26597_26620 = state_26592__$1;
(statearr_26597_26620[(1)] = (5));

} else {
var statearr_26598_26621 = state_26592__$1;
(statearr_26598_26621[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26593 === (13))){
var state_26592__$1 = state_26592;
var statearr_26599_26622 = state_26592__$1;
(statearr_26599_26622[(2)] = null);

(statearr_26599_26622[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26593 === (6))){
var inst_26571 = (state_26592[(7)]);
var state_26592__$1 = state_26592;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26592__$1,(11),to,inst_26571);
} else {
if((state_val_26593 === (3))){
var inst_26590 = (state_26592[(2)]);
var state_26592__$1 = state_26592;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26592__$1,inst_26590);
} else {
if((state_val_26593 === (12))){
var state_26592__$1 = state_26592;
var statearr_26600_26623 = state_26592__$1;
(statearr_26600_26623[(2)] = null);

(statearr_26600_26623[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26593 === (2))){
var state_26592__$1 = state_26592;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26592__$1,(4),from);
} else {
if((state_val_26593 === (11))){
var inst_26581 = (state_26592[(2)]);
var state_26592__$1 = state_26592;
if(cljs.core.truth_(inst_26581)){
var statearr_26601_26624 = state_26592__$1;
(statearr_26601_26624[(1)] = (12));

} else {
var statearr_26602_26625 = state_26592__$1;
(statearr_26602_26625[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26593 === (9))){
var state_26592__$1 = state_26592;
var statearr_26603_26626 = state_26592__$1;
(statearr_26603_26626[(2)] = null);

(statearr_26603_26626[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26593 === (5))){
var state_26592__$1 = state_26592;
if(cljs.core.truth_(close_QMARK_)){
var statearr_26604_26627 = state_26592__$1;
(statearr_26604_26627[(1)] = (8));

} else {
var statearr_26605_26628 = state_26592__$1;
(statearr_26605_26628[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26593 === (14))){
var inst_26586 = (state_26592[(2)]);
var state_26592__$1 = state_26592;
var statearr_26606_26629 = state_26592__$1;
(statearr_26606_26629[(2)] = inst_26586);

(statearr_26606_26629[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26593 === (10))){
var inst_26578 = (state_26592[(2)]);
var state_26592__$1 = state_26592;
var statearr_26607_26630 = state_26592__$1;
(statearr_26607_26630[(2)] = inst_26578);

(statearr_26607_26630[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26593 === (8))){
var inst_26575 = cljs.core.async.close_BANG_.call(null,to);
var state_26592__$1 = state_26592;
var statearr_26608_26631 = state_26592__$1;
(statearr_26608_26631[(2)] = inst_26575);

(statearr_26608_26631[(1)] = (10));


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
});})(c__21116__auto___26617))
;
return ((function (switch__21054__auto__,c__21116__auto___26617){
return (function() {
var cljs$core$async$state_machine__21055__auto__ = null;
var cljs$core$async$state_machine__21055__auto____0 = (function (){
var statearr_26612 = [null,null,null,null,null,null,null,null];
(statearr_26612[(0)] = cljs$core$async$state_machine__21055__auto__);

(statearr_26612[(1)] = (1));

return statearr_26612;
});
var cljs$core$async$state_machine__21055__auto____1 = (function (state_26592){
while(true){
var ret_value__21056__auto__ = (function (){try{while(true){
var result__21057__auto__ = switch__21054__auto__.call(null,state_26592);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21057__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21057__auto__;
}
break;
}
}catch (e26613){if((e26613 instanceof Object)){
var ex__21058__auto__ = e26613;
var statearr_26614_26632 = state_26592;
(statearr_26614_26632[(5)] = ex__21058__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26592);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26613;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21056__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26633 = state_26592;
state_26592 = G__26633;
continue;
} else {
return ret_value__21056__auto__;
}
break;
}
});
cljs$core$async$state_machine__21055__auto__ = function(state_26592){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21055__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21055__auto____1.call(this,state_26592);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21055__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21055__auto____0;
cljs$core$async$state_machine__21055__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21055__auto____1;
return cljs$core$async$state_machine__21055__auto__;
})()
;})(switch__21054__auto__,c__21116__auto___26617))
})();
var state__21118__auto__ = (function (){var statearr_26615 = f__21117__auto__.call(null);
(statearr_26615[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21116__auto___26617);

return statearr_26615;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21118__auto__);
});})(c__21116__auto___26617))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__26817){
var vec__26818 = p__26817;
var v = cljs.core.nth.call(null,vec__26818,(0),null);
var p = cljs.core.nth.call(null,vec__26818,(1),null);
var job = vec__26818;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__21116__auto___27000 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21116__auto___27000,res,vec__26818,v,p,job,jobs,results){
return (function (){
var f__21117__auto__ = (function (){var switch__21054__auto__ = ((function (c__21116__auto___27000,res,vec__26818,v,p,job,jobs,results){
return (function (state_26823){
var state_val_26824 = (state_26823[(1)]);
if((state_val_26824 === (1))){
var state_26823__$1 = state_26823;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26823__$1,(2),res,v);
} else {
if((state_val_26824 === (2))){
var inst_26820 = (state_26823[(2)]);
var inst_26821 = cljs.core.async.close_BANG_.call(null,res);
var state_26823__$1 = (function (){var statearr_26825 = state_26823;
(statearr_26825[(7)] = inst_26820);

return statearr_26825;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26823__$1,inst_26821);
} else {
return null;
}
}
});})(c__21116__auto___27000,res,vec__26818,v,p,job,jobs,results))
;
return ((function (switch__21054__auto__,c__21116__auto___27000,res,vec__26818,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21055__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21055__auto____0 = (function (){
var statearr_26829 = [null,null,null,null,null,null,null,null];
(statearr_26829[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21055__auto__);

(statearr_26829[(1)] = (1));

return statearr_26829;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21055__auto____1 = (function (state_26823){
while(true){
var ret_value__21056__auto__ = (function (){try{while(true){
var result__21057__auto__ = switch__21054__auto__.call(null,state_26823);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21057__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21057__auto__;
}
break;
}
}catch (e26830){if((e26830 instanceof Object)){
var ex__21058__auto__ = e26830;
var statearr_26831_27001 = state_26823;
(statearr_26831_27001[(5)] = ex__21058__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26823);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26830;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21056__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27002 = state_26823;
state_26823 = G__27002;
continue;
} else {
return ret_value__21056__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21055__auto__ = function(state_26823){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21055__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21055__auto____1.call(this,state_26823);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21055__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21055__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21055__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21055__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21055__auto__;
})()
;})(switch__21054__auto__,c__21116__auto___27000,res,vec__26818,v,p,job,jobs,results))
})();
var state__21118__auto__ = (function (){var statearr_26832 = f__21117__auto__.call(null);
(statearr_26832[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21116__auto___27000);

return statearr_26832;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21118__auto__);
});})(c__21116__auto___27000,res,vec__26818,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__26833){
var vec__26834 = p__26833;
var v = cljs.core.nth.call(null,vec__26834,(0),null);
var p = cljs.core.nth.call(null,vec__26834,(1),null);
var job = vec__26834;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__18991__auto___27003 = n;
var __27004 = (0);
while(true){
if((__27004 < n__18991__auto___27003)){
var G__26835_27005 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__26835_27005) {
case "compute":
var c__21116__auto___27007 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__27004,c__21116__auto___27007,G__26835_27005,n__18991__auto___27003,jobs,results,process,async){
return (function (){
var f__21117__auto__ = (function (){var switch__21054__auto__ = ((function (__27004,c__21116__auto___27007,G__26835_27005,n__18991__auto___27003,jobs,results,process,async){
return (function (state_26848){
var state_val_26849 = (state_26848[(1)]);
if((state_val_26849 === (1))){
var state_26848__$1 = state_26848;
var statearr_26850_27008 = state_26848__$1;
(statearr_26850_27008[(2)] = null);

(statearr_26850_27008[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26849 === (2))){
var state_26848__$1 = state_26848;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26848__$1,(4),jobs);
} else {
if((state_val_26849 === (3))){
var inst_26846 = (state_26848[(2)]);
var state_26848__$1 = state_26848;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26848__$1,inst_26846);
} else {
if((state_val_26849 === (4))){
var inst_26838 = (state_26848[(2)]);
var inst_26839 = process.call(null,inst_26838);
var state_26848__$1 = state_26848;
if(cljs.core.truth_(inst_26839)){
var statearr_26851_27009 = state_26848__$1;
(statearr_26851_27009[(1)] = (5));

} else {
var statearr_26852_27010 = state_26848__$1;
(statearr_26852_27010[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26849 === (5))){
var state_26848__$1 = state_26848;
var statearr_26853_27011 = state_26848__$1;
(statearr_26853_27011[(2)] = null);

(statearr_26853_27011[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26849 === (6))){
var state_26848__$1 = state_26848;
var statearr_26854_27012 = state_26848__$1;
(statearr_26854_27012[(2)] = null);

(statearr_26854_27012[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26849 === (7))){
var inst_26844 = (state_26848[(2)]);
var state_26848__$1 = state_26848;
var statearr_26855_27013 = state_26848__$1;
(statearr_26855_27013[(2)] = inst_26844);

(statearr_26855_27013[(1)] = (3));


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
});})(__27004,c__21116__auto___27007,G__26835_27005,n__18991__auto___27003,jobs,results,process,async))
;
return ((function (__27004,switch__21054__auto__,c__21116__auto___27007,G__26835_27005,n__18991__auto___27003,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21055__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21055__auto____0 = (function (){
var statearr_26859 = [null,null,null,null,null,null,null];
(statearr_26859[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21055__auto__);

(statearr_26859[(1)] = (1));

return statearr_26859;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21055__auto____1 = (function (state_26848){
while(true){
var ret_value__21056__auto__ = (function (){try{while(true){
var result__21057__auto__ = switch__21054__auto__.call(null,state_26848);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21057__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21057__auto__;
}
break;
}
}catch (e26860){if((e26860 instanceof Object)){
var ex__21058__auto__ = e26860;
var statearr_26861_27014 = state_26848;
(statearr_26861_27014[(5)] = ex__21058__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26848);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26860;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21056__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27015 = state_26848;
state_26848 = G__27015;
continue;
} else {
return ret_value__21056__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21055__auto__ = function(state_26848){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21055__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21055__auto____1.call(this,state_26848);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21055__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21055__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21055__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21055__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21055__auto__;
})()
;})(__27004,switch__21054__auto__,c__21116__auto___27007,G__26835_27005,n__18991__auto___27003,jobs,results,process,async))
})();
var state__21118__auto__ = (function (){var statearr_26862 = f__21117__auto__.call(null);
(statearr_26862[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21116__auto___27007);

return statearr_26862;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21118__auto__);
});})(__27004,c__21116__auto___27007,G__26835_27005,n__18991__auto___27003,jobs,results,process,async))
);


break;
case "async":
var c__21116__auto___27016 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__27004,c__21116__auto___27016,G__26835_27005,n__18991__auto___27003,jobs,results,process,async){
return (function (){
var f__21117__auto__ = (function (){var switch__21054__auto__ = ((function (__27004,c__21116__auto___27016,G__26835_27005,n__18991__auto___27003,jobs,results,process,async){
return (function (state_26875){
var state_val_26876 = (state_26875[(1)]);
if((state_val_26876 === (1))){
var state_26875__$1 = state_26875;
var statearr_26877_27017 = state_26875__$1;
(statearr_26877_27017[(2)] = null);

(statearr_26877_27017[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26876 === (2))){
var state_26875__$1 = state_26875;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26875__$1,(4),jobs);
} else {
if((state_val_26876 === (3))){
var inst_26873 = (state_26875[(2)]);
var state_26875__$1 = state_26875;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26875__$1,inst_26873);
} else {
if((state_val_26876 === (4))){
var inst_26865 = (state_26875[(2)]);
var inst_26866 = async.call(null,inst_26865);
var state_26875__$1 = state_26875;
if(cljs.core.truth_(inst_26866)){
var statearr_26878_27018 = state_26875__$1;
(statearr_26878_27018[(1)] = (5));

} else {
var statearr_26879_27019 = state_26875__$1;
(statearr_26879_27019[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26876 === (5))){
var state_26875__$1 = state_26875;
var statearr_26880_27020 = state_26875__$1;
(statearr_26880_27020[(2)] = null);

(statearr_26880_27020[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26876 === (6))){
var state_26875__$1 = state_26875;
var statearr_26881_27021 = state_26875__$1;
(statearr_26881_27021[(2)] = null);

(statearr_26881_27021[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26876 === (7))){
var inst_26871 = (state_26875[(2)]);
var state_26875__$1 = state_26875;
var statearr_26882_27022 = state_26875__$1;
(statearr_26882_27022[(2)] = inst_26871);

(statearr_26882_27022[(1)] = (3));


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
});})(__27004,c__21116__auto___27016,G__26835_27005,n__18991__auto___27003,jobs,results,process,async))
;
return ((function (__27004,switch__21054__auto__,c__21116__auto___27016,G__26835_27005,n__18991__auto___27003,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21055__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21055__auto____0 = (function (){
var statearr_26886 = [null,null,null,null,null,null,null];
(statearr_26886[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21055__auto__);

(statearr_26886[(1)] = (1));

return statearr_26886;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21055__auto____1 = (function (state_26875){
while(true){
var ret_value__21056__auto__ = (function (){try{while(true){
var result__21057__auto__ = switch__21054__auto__.call(null,state_26875);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21057__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21057__auto__;
}
break;
}
}catch (e26887){if((e26887 instanceof Object)){
var ex__21058__auto__ = e26887;
var statearr_26888_27023 = state_26875;
(statearr_26888_27023[(5)] = ex__21058__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26875);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26887;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21056__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27024 = state_26875;
state_26875 = G__27024;
continue;
} else {
return ret_value__21056__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21055__auto__ = function(state_26875){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21055__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21055__auto____1.call(this,state_26875);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21055__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21055__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21055__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21055__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21055__auto__;
})()
;})(__27004,switch__21054__auto__,c__21116__auto___27016,G__26835_27005,n__18991__auto___27003,jobs,results,process,async))
})();
var state__21118__auto__ = (function (){var statearr_26889 = f__21117__auto__.call(null);
(statearr_26889[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21116__auto___27016);

return statearr_26889;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21118__auto__);
});})(__27004,c__21116__auto___27016,G__26835_27005,n__18991__auto___27003,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__27025 = (__27004 + (1));
__27004 = G__27025;
continue;
} else {
}
break;
}

var c__21116__auto___27026 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21116__auto___27026,jobs,results,process,async){
return (function (){
var f__21117__auto__ = (function (){var switch__21054__auto__ = ((function (c__21116__auto___27026,jobs,results,process,async){
return (function (state_26911){
var state_val_26912 = (state_26911[(1)]);
if((state_val_26912 === (1))){
var state_26911__$1 = state_26911;
var statearr_26913_27027 = state_26911__$1;
(statearr_26913_27027[(2)] = null);

(statearr_26913_27027[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26912 === (2))){
var state_26911__$1 = state_26911;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26911__$1,(4),from);
} else {
if((state_val_26912 === (3))){
var inst_26909 = (state_26911[(2)]);
var state_26911__$1 = state_26911;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26911__$1,inst_26909);
} else {
if((state_val_26912 === (4))){
var inst_26892 = (state_26911[(7)]);
var inst_26892__$1 = (state_26911[(2)]);
var inst_26893 = (inst_26892__$1 == null);
var state_26911__$1 = (function (){var statearr_26914 = state_26911;
(statearr_26914[(7)] = inst_26892__$1);

return statearr_26914;
})();
if(cljs.core.truth_(inst_26893)){
var statearr_26915_27028 = state_26911__$1;
(statearr_26915_27028[(1)] = (5));

} else {
var statearr_26916_27029 = state_26911__$1;
(statearr_26916_27029[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26912 === (5))){
var inst_26895 = cljs.core.async.close_BANG_.call(null,jobs);
var state_26911__$1 = state_26911;
var statearr_26917_27030 = state_26911__$1;
(statearr_26917_27030[(2)] = inst_26895);

(statearr_26917_27030[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26912 === (6))){
var inst_26892 = (state_26911[(7)]);
var inst_26897 = (state_26911[(8)]);
var inst_26897__$1 = cljs.core.async.chan.call(null,(1));
var inst_26898 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_26899 = [inst_26892,inst_26897__$1];
var inst_26900 = (new cljs.core.PersistentVector(null,2,(5),inst_26898,inst_26899,null));
var state_26911__$1 = (function (){var statearr_26918 = state_26911;
(statearr_26918[(8)] = inst_26897__$1);

return statearr_26918;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26911__$1,(8),jobs,inst_26900);
} else {
if((state_val_26912 === (7))){
var inst_26907 = (state_26911[(2)]);
var state_26911__$1 = state_26911;
var statearr_26919_27031 = state_26911__$1;
(statearr_26919_27031[(2)] = inst_26907);

(statearr_26919_27031[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26912 === (8))){
var inst_26897 = (state_26911[(8)]);
var inst_26902 = (state_26911[(2)]);
var state_26911__$1 = (function (){var statearr_26920 = state_26911;
(statearr_26920[(9)] = inst_26902);

return statearr_26920;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26911__$1,(9),results,inst_26897);
} else {
if((state_val_26912 === (9))){
var inst_26904 = (state_26911[(2)]);
var state_26911__$1 = (function (){var statearr_26921 = state_26911;
(statearr_26921[(10)] = inst_26904);

return statearr_26921;
})();
var statearr_26922_27032 = state_26911__$1;
(statearr_26922_27032[(2)] = null);

(statearr_26922_27032[(1)] = (2));


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
});})(c__21116__auto___27026,jobs,results,process,async))
;
return ((function (switch__21054__auto__,c__21116__auto___27026,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21055__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21055__auto____0 = (function (){
var statearr_26926 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26926[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21055__auto__);

(statearr_26926[(1)] = (1));

return statearr_26926;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21055__auto____1 = (function (state_26911){
while(true){
var ret_value__21056__auto__ = (function (){try{while(true){
var result__21057__auto__ = switch__21054__auto__.call(null,state_26911);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21057__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21057__auto__;
}
break;
}
}catch (e26927){if((e26927 instanceof Object)){
var ex__21058__auto__ = e26927;
var statearr_26928_27033 = state_26911;
(statearr_26928_27033[(5)] = ex__21058__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26911);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26927;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21056__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27034 = state_26911;
state_26911 = G__27034;
continue;
} else {
return ret_value__21056__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21055__auto__ = function(state_26911){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21055__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21055__auto____1.call(this,state_26911);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21055__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21055__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21055__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21055__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21055__auto__;
})()
;})(switch__21054__auto__,c__21116__auto___27026,jobs,results,process,async))
})();
var state__21118__auto__ = (function (){var statearr_26929 = f__21117__auto__.call(null);
(statearr_26929[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21116__auto___27026);

return statearr_26929;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21118__auto__);
});})(c__21116__auto___27026,jobs,results,process,async))
);


var c__21116__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21116__auto__,jobs,results,process,async){
return (function (){
var f__21117__auto__ = (function (){var switch__21054__auto__ = ((function (c__21116__auto__,jobs,results,process,async){
return (function (state_26967){
var state_val_26968 = (state_26967[(1)]);
if((state_val_26968 === (7))){
var inst_26963 = (state_26967[(2)]);
var state_26967__$1 = state_26967;
var statearr_26969_27035 = state_26967__$1;
(statearr_26969_27035[(2)] = inst_26963);

(statearr_26969_27035[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26968 === (20))){
var state_26967__$1 = state_26967;
var statearr_26970_27036 = state_26967__$1;
(statearr_26970_27036[(2)] = null);

(statearr_26970_27036[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26968 === (1))){
var state_26967__$1 = state_26967;
var statearr_26971_27037 = state_26967__$1;
(statearr_26971_27037[(2)] = null);

(statearr_26971_27037[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26968 === (4))){
var inst_26932 = (state_26967[(7)]);
var inst_26932__$1 = (state_26967[(2)]);
var inst_26933 = (inst_26932__$1 == null);
var state_26967__$1 = (function (){var statearr_26972 = state_26967;
(statearr_26972[(7)] = inst_26932__$1);

return statearr_26972;
})();
if(cljs.core.truth_(inst_26933)){
var statearr_26973_27038 = state_26967__$1;
(statearr_26973_27038[(1)] = (5));

} else {
var statearr_26974_27039 = state_26967__$1;
(statearr_26974_27039[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26968 === (15))){
var inst_26945 = (state_26967[(8)]);
var state_26967__$1 = state_26967;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26967__$1,(18),to,inst_26945);
} else {
if((state_val_26968 === (21))){
var inst_26958 = (state_26967[(2)]);
var state_26967__$1 = state_26967;
var statearr_26975_27040 = state_26967__$1;
(statearr_26975_27040[(2)] = inst_26958);

(statearr_26975_27040[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26968 === (13))){
var inst_26960 = (state_26967[(2)]);
var state_26967__$1 = (function (){var statearr_26976 = state_26967;
(statearr_26976[(9)] = inst_26960);

return statearr_26976;
})();
var statearr_26977_27041 = state_26967__$1;
(statearr_26977_27041[(2)] = null);

(statearr_26977_27041[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26968 === (6))){
var inst_26932 = (state_26967[(7)]);
var state_26967__$1 = state_26967;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26967__$1,(11),inst_26932);
} else {
if((state_val_26968 === (17))){
var inst_26953 = (state_26967[(2)]);
var state_26967__$1 = state_26967;
if(cljs.core.truth_(inst_26953)){
var statearr_26978_27042 = state_26967__$1;
(statearr_26978_27042[(1)] = (19));

} else {
var statearr_26979_27043 = state_26967__$1;
(statearr_26979_27043[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26968 === (3))){
var inst_26965 = (state_26967[(2)]);
var state_26967__$1 = state_26967;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26967__$1,inst_26965);
} else {
if((state_val_26968 === (12))){
var inst_26942 = (state_26967[(10)]);
var state_26967__$1 = state_26967;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26967__$1,(14),inst_26942);
} else {
if((state_val_26968 === (2))){
var state_26967__$1 = state_26967;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26967__$1,(4),results);
} else {
if((state_val_26968 === (19))){
var state_26967__$1 = state_26967;
var statearr_26980_27044 = state_26967__$1;
(statearr_26980_27044[(2)] = null);

(statearr_26980_27044[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26968 === (11))){
var inst_26942 = (state_26967[(2)]);
var state_26967__$1 = (function (){var statearr_26981 = state_26967;
(statearr_26981[(10)] = inst_26942);

return statearr_26981;
})();
var statearr_26982_27045 = state_26967__$1;
(statearr_26982_27045[(2)] = null);

(statearr_26982_27045[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26968 === (9))){
var state_26967__$1 = state_26967;
var statearr_26983_27046 = state_26967__$1;
(statearr_26983_27046[(2)] = null);

(statearr_26983_27046[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26968 === (5))){
var state_26967__$1 = state_26967;
if(cljs.core.truth_(close_QMARK_)){
var statearr_26984_27047 = state_26967__$1;
(statearr_26984_27047[(1)] = (8));

} else {
var statearr_26985_27048 = state_26967__$1;
(statearr_26985_27048[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26968 === (14))){
var inst_26947 = (state_26967[(11)]);
var inst_26945 = (state_26967[(8)]);
var inst_26945__$1 = (state_26967[(2)]);
var inst_26946 = (inst_26945__$1 == null);
var inst_26947__$1 = cljs.core.not.call(null,inst_26946);
var state_26967__$1 = (function (){var statearr_26986 = state_26967;
(statearr_26986[(11)] = inst_26947__$1);

(statearr_26986[(8)] = inst_26945__$1);

return statearr_26986;
})();
if(inst_26947__$1){
var statearr_26987_27049 = state_26967__$1;
(statearr_26987_27049[(1)] = (15));

} else {
var statearr_26988_27050 = state_26967__$1;
(statearr_26988_27050[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26968 === (16))){
var inst_26947 = (state_26967[(11)]);
var state_26967__$1 = state_26967;
var statearr_26989_27051 = state_26967__$1;
(statearr_26989_27051[(2)] = inst_26947);

(statearr_26989_27051[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26968 === (10))){
var inst_26939 = (state_26967[(2)]);
var state_26967__$1 = state_26967;
var statearr_26990_27052 = state_26967__$1;
(statearr_26990_27052[(2)] = inst_26939);

(statearr_26990_27052[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26968 === (18))){
var inst_26950 = (state_26967[(2)]);
var state_26967__$1 = state_26967;
var statearr_26991_27053 = state_26967__$1;
(statearr_26991_27053[(2)] = inst_26950);

(statearr_26991_27053[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26968 === (8))){
var inst_26936 = cljs.core.async.close_BANG_.call(null,to);
var state_26967__$1 = state_26967;
var statearr_26992_27054 = state_26967__$1;
(statearr_26992_27054[(2)] = inst_26936);

(statearr_26992_27054[(1)] = (10));


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
});})(c__21116__auto__,jobs,results,process,async))
;
return ((function (switch__21054__auto__,c__21116__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21055__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21055__auto____0 = (function (){
var statearr_26996 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26996[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21055__auto__);

(statearr_26996[(1)] = (1));

return statearr_26996;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21055__auto____1 = (function (state_26967){
while(true){
var ret_value__21056__auto__ = (function (){try{while(true){
var result__21057__auto__ = switch__21054__auto__.call(null,state_26967);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21057__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21057__auto__;
}
break;
}
}catch (e26997){if((e26997 instanceof Object)){
var ex__21058__auto__ = e26997;
var statearr_26998_27055 = state_26967;
(statearr_26998_27055[(5)] = ex__21058__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26967);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26997;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21056__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27056 = state_26967;
state_26967 = G__27056;
continue;
} else {
return ret_value__21056__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21055__auto__ = function(state_26967){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21055__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21055__auto____1.call(this,state_26967);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21055__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21055__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21055__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21055__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21055__auto__;
})()
;})(switch__21054__auto__,c__21116__auto__,jobs,results,process,async))
})();
var state__21118__auto__ = (function (){var statearr_26999 = f__21117__auto__.call(null);
(statearr_26999[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21116__auto__);

return statearr_26999;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21118__auto__);
});})(c__21116__auto__,jobs,results,process,async))
);

return c__21116__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel, subject to the async function af, with parallelism n. af
 * must be a function of two arguments, the first an input value and
 * the second a channel on which to place the result(s). af must close!
 * the channel before returning.  The presumption is that af will
 * return immediately, having launched some asynchronous operation
 * whose completion/callback will manipulate the result channel. Outputs
 * will be returned in order relative to  the inputs. By default, the to
 * channel will be closed when the from channel closes, but can be
 * determined by the close?  parameter. Will stop consuming the from
 * channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(){
var G__27058 = arguments.length;
switch (G__27058) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;
/**
 * Takes elements from the from channel and supplies them to the to
 * channel, subject to the transducer xf, with parallelism n. Because
 * it is parallel, the transducer will be applied independently to each
 * element, not across elements, and may produce zero or more outputs
 * per input.  Outputs will be returned in order relative to the
 * inputs. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes.
 * 
 * Note this is supplied for API compatibility with the Clojure version.
 * Values of N > 1 will not result in actual concurrency in a
 * single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(){
var G__27061 = arguments.length;
switch (G__27061) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;
/**
 * Takes a predicate and a source channel and returns a vector of two
 * channels, the first of which will contain the values for which the
 * predicate returned true, the second those for which it returned
 * false.
 * 
 * The out channels will be unbuffered by default, or two buf-or-ns can
 * be supplied. The channels will close after the source channel has
 * closed.
 */
cljs.core.async.split = (function cljs$core$async$split(){
var G__27064 = arguments.length;
switch (G__27064) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__21116__auto___27116 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21116__auto___27116,tc,fc){
return (function (){
var f__21117__auto__ = (function (){var switch__21054__auto__ = ((function (c__21116__auto___27116,tc,fc){
return (function (state_27090){
var state_val_27091 = (state_27090[(1)]);
if((state_val_27091 === (7))){
var inst_27086 = (state_27090[(2)]);
var state_27090__$1 = state_27090;
var statearr_27092_27117 = state_27090__$1;
(statearr_27092_27117[(2)] = inst_27086);

(statearr_27092_27117[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27091 === (1))){
var state_27090__$1 = state_27090;
var statearr_27093_27118 = state_27090__$1;
(statearr_27093_27118[(2)] = null);

(statearr_27093_27118[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27091 === (4))){
var inst_27067 = (state_27090[(7)]);
var inst_27067__$1 = (state_27090[(2)]);
var inst_27068 = (inst_27067__$1 == null);
var state_27090__$1 = (function (){var statearr_27094 = state_27090;
(statearr_27094[(7)] = inst_27067__$1);

return statearr_27094;
})();
if(cljs.core.truth_(inst_27068)){
var statearr_27095_27119 = state_27090__$1;
(statearr_27095_27119[(1)] = (5));

} else {
var statearr_27096_27120 = state_27090__$1;
(statearr_27096_27120[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27091 === (13))){
var state_27090__$1 = state_27090;
var statearr_27097_27121 = state_27090__$1;
(statearr_27097_27121[(2)] = null);

(statearr_27097_27121[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27091 === (6))){
var inst_27067 = (state_27090[(7)]);
var inst_27073 = p.call(null,inst_27067);
var state_27090__$1 = state_27090;
if(cljs.core.truth_(inst_27073)){
var statearr_27098_27122 = state_27090__$1;
(statearr_27098_27122[(1)] = (9));

} else {
var statearr_27099_27123 = state_27090__$1;
(statearr_27099_27123[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27091 === (3))){
var inst_27088 = (state_27090[(2)]);
var state_27090__$1 = state_27090;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27090__$1,inst_27088);
} else {
if((state_val_27091 === (12))){
var state_27090__$1 = state_27090;
var statearr_27100_27124 = state_27090__$1;
(statearr_27100_27124[(2)] = null);

(statearr_27100_27124[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27091 === (2))){
var state_27090__$1 = state_27090;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27090__$1,(4),ch);
} else {
if((state_val_27091 === (11))){
var inst_27067 = (state_27090[(7)]);
var inst_27077 = (state_27090[(2)]);
var state_27090__$1 = state_27090;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27090__$1,(8),inst_27077,inst_27067);
} else {
if((state_val_27091 === (9))){
var state_27090__$1 = state_27090;
var statearr_27101_27125 = state_27090__$1;
(statearr_27101_27125[(2)] = tc);

(statearr_27101_27125[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27091 === (5))){
var inst_27070 = cljs.core.async.close_BANG_.call(null,tc);
var inst_27071 = cljs.core.async.close_BANG_.call(null,fc);
var state_27090__$1 = (function (){var statearr_27102 = state_27090;
(statearr_27102[(8)] = inst_27070);

return statearr_27102;
})();
var statearr_27103_27126 = state_27090__$1;
(statearr_27103_27126[(2)] = inst_27071);

(statearr_27103_27126[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27091 === (14))){
var inst_27084 = (state_27090[(2)]);
var state_27090__$1 = state_27090;
var statearr_27104_27127 = state_27090__$1;
(statearr_27104_27127[(2)] = inst_27084);

(statearr_27104_27127[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27091 === (10))){
var state_27090__$1 = state_27090;
var statearr_27105_27128 = state_27090__$1;
(statearr_27105_27128[(2)] = fc);

(statearr_27105_27128[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27091 === (8))){
var inst_27079 = (state_27090[(2)]);
var state_27090__$1 = state_27090;
if(cljs.core.truth_(inst_27079)){
var statearr_27106_27129 = state_27090__$1;
(statearr_27106_27129[(1)] = (12));

} else {
var statearr_27107_27130 = state_27090__$1;
(statearr_27107_27130[(1)] = (13));

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
});})(c__21116__auto___27116,tc,fc))
;
return ((function (switch__21054__auto__,c__21116__auto___27116,tc,fc){
return (function() {
var cljs$core$async$state_machine__21055__auto__ = null;
var cljs$core$async$state_machine__21055__auto____0 = (function (){
var statearr_27111 = [null,null,null,null,null,null,null,null,null];
(statearr_27111[(0)] = cljs$core$async$state_machine__21055__auto__);

(statearr_27111[(1)] = (1));

return statearr_27111;
});
var cljs$core$async$state_machine__21055__auto____1 = (function (state_27090){
while(true){
var ret_value__21056__auto__ = (function (){try{while(true){
var result__21057__auto__ = switch__21054__auto__.call(null,state_27090);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21057__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21057__auto__;
}
break;
}
}catch (e27112){if((e27112 instanceof Object)){
var ex__21058__auto__ = e27112;
var statearr_27113_27131 = state_27090;
(statearr_27113_27131[(5)] = ex__21058__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27090);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27112;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21056__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27132 = state_27090;
state_27090 = G__27132;
continue;
} else {
return ret_value__21056__auto__;
}
break;
}
});
cljs$core$async$state_machine__21055__auto__ = function(state_27090){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21055__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21055__auto____1.call(this,state_27090);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21055__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21055__auto____0;
cljs$core$async$state_machine__21055__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21055__auto____1;
return cljs$core$async$state_machine__21055__auto__;
})()
;})(switch__21054__auto__,c__21116__auto___27116,tc,fc))
})();
var state__21118__auto__ = (function (){var statearr_27114 = f__21117__auto__.call(null);
(statearr_27114[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21116__auto___27116);

return statearr_27114;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21118__auto__);
});})(c__21116__auto___27116,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 * the single result of applying f to init and the first item from the
 * channel, then applying f to that result and the 2nd item, etc. If
 * the channel closes without yielding items, returns init and f is not
 * called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__21116__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21116__auto__){
return (function (){
var f__21117__auto__ = (function (){var switch__21054__auto__ = ((function (c__21116__auto__){
return (function (state_27179){
var state_val_27180 = (state_27179[(1)]);
if((state_val_27180 === (1))){
var inst_27165 = init;
var state_27179__$1 = (function (){var statearr_27181 = state_27179;
(statearr_27181[(7)] = inst_27165);

return statearr_27181;
})();
var statearr_27182_27197 = state_27179__$1;
(statearr_27182_27197[(2)] = null);

(statearr_27182_27197[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27180 === (2))){
var state_27179__$1 = state_27179;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27179__$1,(4),ch);
} else {
if((state_val_27180 === (3))){
var inst_27177 = (state_27179[(2)]);
var state_27179__$1 = state_27179;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27179__$1,inst_27177);
} else {
if((state_val_27180 === (4))){
var inst_27168 = (state_27179[(8)]);
var inst_27168__$1 = (state_27179[(2)]);
var inst_27169 = (inst_27168__$1 == null);
var state_27179__$1 = (function (){var statearr_27183 = state_27179;
(statearr_27183[(8)] = inst_27168__$1);

return statearr_27183;
})();
if(cljs.core.truth_(inst_27169)){
var statearr_27184_27198 = state_27179__$1;
(statearr_27184_27198[(1)] = (5));

} else {
var statearr_27185_27199 = state_27179__$1;
(statearr_27185_27199[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27180 === (5))){
var inst_27165 = (state_27179[(7)]);
var state_27179__$1 = state_27179;
var statearr_27186_27200 = state_27179__$1;
(statearr_27186_27200[(2)] = inst_27165);

(statearr_27186_27200[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27180 === (6))){
var inst_27168 = (state_27179[(8)]);
var inst_27165 = (state_27179[(7)]);
var inst_27172 = f.call(null,inst_27165,inst_27168);
var inst_27165__$1 = inst_27172;
var state_27179__$1 = (function (){var statearr_27187 = state_27179;
(statearr_27187[(7)] = inst_27165__$1);

return statearr_27187;
})();
var statearr_27188_27201 = state_27179__$1;
(statearr_27188_27201[(2)] = null);

(statearr_27188_27201[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27180 === (7))){
var inst_27175 = (state_27179[(2)]);
var state_27179__$1 = state_27179;
var statearr_27189_27202 = state_27179__$1;
(statearr_27189_27202[(2)] = inst_27175);

(statearr_27189_27202[(1)] = (3));


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
});})(c__21116__auto__))
;
return ((function (switch__21054__auto__,c__21116__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__21055__auto__ = null;
var cljs$core$async$reduce_$_state_machine__21055__auto____0 = (function (){
var statearr_27193 = [null,null,null,null,null,null,null,null,null];
(statearr_27193[(0)] = cljs$core$async$reduce_$_state_machine__21055__auto__);

(statearr_27193[(1)] = (1));

return statearr_27193;
});
var cljs$core$async$reduce_$_state_machine__21055__auto____1 = (function (state_27179){
while(true){
var ret_value__21056__auto__ = (function (){try{while(true){
var result__21057__auto__ = switch__21054__auto__.call(null,state_27179);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21057__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21057__auto__;
}
break;
}
}catch (e27194){if((e27194 instanceof Object)){
var ex__21058__auto__ = e27194;
var statearr_27195_27203 = state_27179;
(statearr_27195_27203[(5)] = ex__21058__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27179);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27194;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21056__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27204 = state_27179;
state_27179 = G__27204;
continue;
} else {
return ret_value__21056__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__21055__auto__ = function(state_27179){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__21055__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__21055__auto____1.call(this,state_27179);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__21055__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__21055__auto____0;
cljs$core$async$reduce_$_state_machine__21055__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__21055__auto____1;
return cljs$core$async$reduce_$_state_machine__21055__auto__;
})()
;})(switch__21054__auto__,c__21116__auto__))
})();
var state__21118__auto__ = (function (){var statearr_27196 = f__21117__auto__.call(null);
(statearr_27196[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21116__auto__);

return statearr_27196;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21118__auto__);
});})(c__21116__auto__))
);

return c__21116__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 * By default the channel will be closed after the items are copied,
 * but can be determined by the close? parameter.
 * 
 * Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(){
var G__27206 = arguments.length;
switch (G__27206) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__21116__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21116__auto__){
return (function (){
var f__21117__auto__ = (function (){var switch__21054__auto__ = ((function (c__21116__auto__){
return (function (state_27231){
var state_val_27232 = (state_27231[(1)]);
if((state_val_27232 === (7))){
var inst_27213 = (state_27231[(2)]);
var state_27231__$1 = state_27231;
var statearr_27233_27257 = state_27231__$1;
(statearr_27233_27257[(2)] = inst_27213);

(statearr_27233_27257[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27232 === (1))){
var inst_27207 = cljs.core.seq.call(null,coll);
var inst_27208 = inst_27207;
var state_27231__$1 = (function (){var statearr_27234 = state_27231;
(statearr_27234[(7)] = inst_27208);

return statearr_27234;
})();
var statearr_27235_27258 = state_27231__$1;
(statearr_27235_27258[(2)] = null);

(statearr_27235_27258[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27232 === (4))){
var inst_27208 = (state_27231[(7)]);
var inst_27211 = cljs.core.first.call(null,inst_27208);
var state_27231__$1 = state_27231;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27231__$1,(7),ch,inst_27211);
} else {
if((state_val_27232 === (13))){
var inst_27225 = (state_27231[(2)]);
var state_27231__$1 = state_27231;
var statearr_27236_27259 = state_27231__$1;
(statearr_27236_27259[(2)] = inst_27225);

(statearr_27236_27259[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27232 === (6))){
var inst_27216 = (state_27231[(2)]);
var state_27231__$1 = state_27231;
if(cljs.core.truth_(inst_27216)){
var statearr_27237_27260 = state_27231__$1;
(statearr_27237_27260[(1)] = (8));

} else {
var statearr_27238_27261 = state_27231__$1;
(statearr_27238_27261[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27232 === (3))){
var inst_27229 = (state_27231[(2)]);
var state_27231__$1 = state_27231;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27231__$1,inst_27229);
} else {
if((state_val_27232 === (12))){
var state_27231__$1 = state_27231;
var statearr_27239_27262 = state_27231__$1;
(statearr_27239_27262[(2)] = null);

(statearr_27239_27262[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27232 === (2))){
var inst_27208 = (state_27231[(7)]);
var state_27231__$1 = state_27231;
if(cljs.core.truth_(inst_27208)){
var statearr_27240_27263 = state_27231__$1;
(statearr_27240_27263[(1)] = (4));

} else {
var statearr_27241_27264 = state_27231__$1;
(statearr_27241_27264[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27232 === (11))){
var inst_27222 = cljs.core.async.close_BANG_.call(null,ch);
var state_27231__$1 = state_27231;
var statearr_27242_27265 = state_27231__$1;
(statearr_27242_27265[(2)] = inst_27222);

(statearr_27242_27265[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27232 === (9))){
var state_27231__$1 = state_27231;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27243_27266 = state_27231__$1;
(statearr_27243_27266[(1)] = (11));

} else {
var statearr_27244_27267 = state_27231__$1;
(statearr_27244_27267[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27232 === (5))){
var inst_27208 = (state_27231[(7)]);
var state_27231__$1 = state_27231;
var statearr_27245_27268 = state_27231__$1;
(statearr_27245_27268[(2)] = inst_27208);

(statearr_27245_27268[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27232 === (10))){
var inst_27227 = (state_27231[(2)]);
var state_27231__$1 = state_27231;
var statearr_27246_27269 = state_27231__$1;
(statearr_27246_27269[(2)] = inst_27227);

(statearr_27246_27269[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27232 === (8))){
var inst_27208 = (state_27231[(7)]);
var inst_27218 = cljs.core.next.call(null,inst_27208);
var inst_27208__$1 = inst_27218;
var state_27231__$1 = (function (){var statearr_27247 = state_27231;
(statearr_27247[(7)] = inst_27208__$1);

return statearr_27247;
})();
var statearr_27248_27270 = state_27231__$1;
(statearr_27248_27270[(2)] = null);

(statearr_27248_27270[(1)] = (2));


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
});})(c__21116__auto__))
;
return ((function (switch__21054__auto__,c__21116__auto__){
return (function() {
var cljs$core$async$state_machine__21055__auto__ = null;
var cljs$core$async$state_machine__21055__auto____0 = (function (){
var statearr_27252 = [null,null,null,null,null,null,null,null];
(statearr_27252[(0)] = cljs$core$async$state_machine__21055__auto__);

(statearr_27252[(1)] = (1));

return statearr_27252;
});
var cljs$core$async$state_machine__21055__auto____1 = (function (state_27231){
while(true){
var ret_value__21056__auto__ = (function (){try{while(true){
var result__21057__auto__ = switch__21054__auto__.call(null,state_27231);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21057__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21057__auto__;
}
break;
}
}catch (e27253){if((e27253 instanceof Object)){
var ex__21058__auto__ = e27253;
var statearr_27254_27271 = state_27231;
(statearr_27254_27271[(5)] = ex__21058__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27231);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27253;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21056__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27272 = state_27231;
state_27231 = G__27272;
continue;
} else {
return ret_value__21056__auto__;
}
break;
}
});
cljs$core$async$state_machine__21055__auto__ = function(state_27231){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21055__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21055__auto____1.call(this,state_27231);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21055__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21055__auto____0;
cljs$core$async$state_machine__21055__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21055__auto____1;
return cljs$core$async$state_machine__21055__auto__;
})()
;})(switch__21054__auto__,c__21116__auto__))
})();
var state__21118__auto__ = (function (){var statearr_27255 = f__21117__auto__.call(null);
(statearr_27255[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21116__auto__);

return statearr_27255;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21118__auto__);
});})(c__21116__auto__))
);

return c__21116__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 * closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

cljs.core.async.Mux = (function (){var obj27274 = {};
return obj27274;
})();

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((function (){var and__18094__auto__ = _;
if(and__18094__auto__){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else {
return and__18094__auto__;
}
})()){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__18742__auto__ = (((_ == null))?null:_);
return (function (){var or__18106__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__18742__auto__)]);
if(or__18106__auto__){
return or__18106__auto__;
} else {
var or__18106__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(or__18106__auto____$1){
return or__18106__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});


cljs.core.async.Mult = (function (){var obj27276 = {};
return obj27276;
})();

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((function (){var and__18094__auto__ = m;
if(and__18094__auto__){
return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else {
return and__18094__auto__;
}
})()){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__18742__auto__ = (((m == null))?null:m);
return (function (){var or__18106__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__18742__auto__)]);
if(or__18106__auto__){
return or__18106__auto__;
} else {
var or__18106__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(or__18106__auto____$1){
return or__18106__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((function (){var and__18094__auto__ = m;
if(and__18094__auto__){
return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else {
return and__18094__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__18742__auto__ = (((m == null))?null:m);
return (function (){var or__18106__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__18742__auto__)]);
if(or__18106__auto__){
return or__18106__auto__;
} else {
var or__18106__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(or__18106__auto____$1){
return or__18106__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((function (){var and__18094__auto__ = m;
if(and__18094__auto__){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else {
return and__18094__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__18742__auto__ = (((m == null))?null:m);
return (function (){var or__18106__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__18742__auto__)]);
if(or__18106__auto__){
return or__18106__auto__;
} else {
var or__18106__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(or__18106__auto____$1){
return or__18106__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
})().call(null,m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 * containing copies of the channel can be created with 'tap', and
 * detached with 'untap'.
 * 
 * Each item is distributed to all taps in parallel and synchronously,
 * i.e. each tap must accept before the next item is distributed. Use
 * buffering/windowing to prevent slow taps from holding up the mult.
 * 
 * Items received when there are no taps get dropped.
 * 
 * If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t27498 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t27498 = (function (mult,ch,cs,meta27499){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta27499 = meta27499;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t27498.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_27500,meta27499__$1){
var self__ = this;
var _27500__$1 = this;
return (new cljs.core.async.t27498(self__.mult,self__.ch,self__.cs,meta27499__$1));
});})(cs))
;

cljs.core.async.t27498.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_27500){
var self__ = this;
var _27500__$1 = this;
return self__.meta27499;
});})(cs))
;

cljs.core.async.t27498.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t27498.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t27498.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t27498.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t27498.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t27498.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t27498.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta27499","meta27499",-377084629,null)], null);
});})(cs))
;

cljs.core.async.t27498.cljs$lang$type = true;

cljs.core.async.t27498.cljs$lang$ctorStr = "cljs.core.async/t27498";

cljs.core.async.t27498.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__18685__auto__,writer__18686__auto__,opt__18687__auto__){
return cljs.core._write.call(null,writer__18686__auto__,"cljs.core.async/t27498");
});})(cs))
;

cljs.core.async.__GT_t27498 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t27498(mult__$1,ch__$1,cs__$1,meta27499){
return (new cljs.core.async.t27498(mult__$1,ch__$1,cs__$1,meta27499));
});})(cs))
;

}

return (new cljs.core.async.t27498(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__21116__auto___27719 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21116__auto___27719,cs,m,dchan,dctr,done){
return (function (){
var f__21117__auto__ = (function (){var switch__21054__auto__ = ((function (c__21116__auto___27719,cs,m,dchan,dctr,done){
return (function (state_27631){
var state_val_27632 = (state_27631[(1)]);
if((state_val_27632 === (7))){
var inst_27627 = (state_27631[(2)]);
var state_27631__$1 = state_27631;
var statearr_27633_27720 = state_27631__$1;
(statearr_27633_27720[(2)] = inst_27627);

(statearr_27633_27720[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27632 === (20))){
var inst_27532 = (state_27631[(7)]);
var inst_27542 = cljs.core.first.call(null,inst_27532);
var inst_27543 = cljs.core.nth.call(null,inst_27542,(0),null);
var inst_27544 = cljs.core.nth.call(null,inst_27542,(1),null);
var state_27631__$1 = (function (){var statearr_27634 = state_27631;
(statearr_27634[(8)] = inst_27543);

return statearr_27634;
})();
if(cljs.core.truth_(inst_27544)){
var statearr_27635_27721 = state_27631__$1;
(statearr_27635_27721[(1)] = (22));

} else {
var statearr_27636_27722 = state_27631__$1;
(statearr_27636_27722[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27632 === (27))){
var inst_27579 = (state_27631[(9)]);
var inst_27503 = (state_27631[(10)]);
var inst_27572 = (state_27631[(11)]);
var inst_27574 = (state_27631[(12)]);
var inst_27579__$1 = cljs.core._nth.call(null,inst_27572,inst_27574);
var inst_27580 = cljs.core.async.put_BANG_.call(null,inst_27579__$1,inst_27503,done);
var state_27631__$1 = (function (){var statearr_27637 = state_27631;
(statearr_27637[(9)] = inst_27579__$1);

return statearr_27637;
})();
if(cljs.core.truth_(inst_27580)){
var statearr_27638_27723 = state_27631__$1;
(statearr_27638_27723[(1)] = (30));

} else {
var statearr_27639_27724 = state_27631__$1;
(statearr_27639_27724[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27632 === (1))){
var state_27631__$1 = state_27631;
var statearr_27640_27725 = state_27631__$1;
(statearr_27640_27725[(2)] = null);

(statearr_27640_27725[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27632 === (24))){
var inst_27532 = (state_27631[(7)]);
var inst_27549 = (state_27631[(2)]);
var inst_27550 = cljs.core.next.call(null,inst_27532);
var inst_27512 = inst_27550;
var inst_27513 = null;
var inst_27514 = (0);
var inst_27515 = (0);
var state_27631__$1 = (function (){var statearr_27641 = state_27631;
(statearr_27641[(13)] = inst_27515);

(statearr_27641[(14)] = inst_27549);

(statearr_27641[(15)] = inst_27514);

(statearr_27641[(16)] = inst_27512);

(statearr_27641[(17)] = inst_27513);

return statearr_27641;
})();
var statearr_27642_27726 = state_27631__$1;
(statearr_27642_27726[(2)] = null);

(statearr_27642_27726[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27632 === (39))){
var state_27631__$1 = state_27631;
var statearr_27646_27727 = state_27631__$1;
(statearr_27646_27727[(2)] = null);

(statearr_27646_27727[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27632 === (4))){
var inst_27503 = (state_27631[(10)]);
var inst_27503__$1 = (state_27631[(2)]);
var inst_27504 = (inst_27503__$1 == null);
var state_27631__$1 = (function (){var statearr_27647 = state_27631;
(statearr_27647[(10)] = inst_27503__$1);

return statearr_27647;
})();
if(cljs.core.truth_(inst_27504)){
var statearr_27648_27728 = state_27631__$1;
(statearr_27648_27728[(1)] = (5));

} else {
var statearr_27649_27729 = state_27631__$1;
(statearr_27649_27729[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27632 === (15))){
var inst_27515 = (state_27631[(13)]);
var inst_27514 = (state_27631[(15)]);
var inst_27512 = (state_27631[(16)]);
var inst_27513 = (state_27631[(17)]);
var inst_27528 = (state_27631[(2)]);
var inst_27529 = (inst_27515 + (1));
var tmp27643 = inst_27514;
var tmp27644 = inst_27512;
var tmp27645 = inst_27513;
var inst_27512__$1 = tmp27644;
var inst_27513__$1 = tmp27645;
var inst_27514__$1 = tmp27643;
var inst_27515__$1 = inst_27529;
var state_27631__$1 = (function (){var statearr_27650 = state_27631;
(statearr_27650[(13)] = inst_27515__$1);

(statearr_27650[(15)] = inst_27514__$1);

(statearr_27650[(16)] = inst_27512__$1);

(statearr_27650[(17)] = inst_27513__$1);

(statearr_27650[(18)] = inst_27528);

return statearr_27650;
})();
var statearr_27651_27730 = state_27631__$1;
(statearr_27651_27730[(2)] = null);

(statearr_27651_27730[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27632 === (21))){
var inst_27553 = (state_27631[(2)]);
var state_27631__$1 = state_27631;
var statearr_27655_27731 = state_27631__$1;
(statearr_27655_27731[(2)] = inst_27553);

(statearr_27655_27731[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27632 === (31))){
var inst_27579 = (state_27631[(9)]);
var inst_27583 = done.call(null,null);
var inst_27584 = cljs.core.async.untap_STAR_.call(null,m,inst_27579);
var state_27631__$1 = (function (){var statearr_27656 = state_27631;
(statearr_27656[(19)] = inst_27583);

return statearr_27656;
})();
var statearr_27657_27732 = state_27631__$1;
(statearr_27657_27732[(2)] = inst_27584);

(statearr_27657_27732[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27632 === (32))){
var inst_27572 = (state_27631[(11)]);
var inst_27574 = (state_27631[(12)]);
var inst_27571 = (state_27631[(20)]);
var inst_27573 = (state_27631[(21)]);
var inst_27586 = (state_27631[(2)]);
var inst_27587 = (inst_27574 + (1));
var tmp27652 = inst_27572;
var tmp27653 = inst_27571;
var tmp27654 = inst_27573;
var inst_27571__$1 = tmp27653;
var inst_27572__$1 = tmp27652;
var inst_27573__$1 = tmp27654;
var inst_27574__$1 = inst_27587;
var state_27631__$1 = (function (){var statearr_27658 = state_27631;
(statearr_27658[(11)] = inst_27572__$1);

(statearr_27658[(22)] = inst_27586);

(statearr_27658[(12)] = inst_27574__$1);

(statearr_27658[(20)] = inst_27571__$1);

(statearr_27658[(21)] = inst_27573__$1);

return statearr_27658;
})();
var statearr_27659_27733 = state_27631__$1;
(statearr_27659_27733[(2)] = null);

(statearr_27659_27733[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27632 === (40))){
var inst_27599 = (state_27631[(23)]);
var inst_27603 = done.call(null,null);
var inst_27604 = cljs.core.async.untap_STAR_.call(null,m,inst_27599);
var state_27631__$1 = (function (){var statearr_27660 = state_27631;
(statearr_27660[(24)] = inst_27603);

return statearr_27660;
})();
var statearr_27661_27734 = state_27631__$1;
(statearr_27661_27734[(2)] = inst_27604);

(statearr_27661_27734[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27632 === (33))){
var inst_27590 = (state_27631[(25)]);
var inst_27592 = cljs.core.chunked_seq_QMARK_.call(null,inst_27590);
var state_27631__$1 = state_27631;
if(inst_27592){
var statearr_27662_27735 = state_27631__$1;
(statearr_27662_27735[(1)] = (36));

} else {
var statearr_27663_27736 = state_27631__$1;
(statearr_27663_27736[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27632 === (13))){
var inst_27522 = (state_27631[(26)]);
var inst_27525 = cljs.core.async.close_BANG_.call(null,inst_27522);
var state_27631__$1 = state_27631;
var statearr_27664_27737 = state_27631__$1;
(statearr_27664_27737[(2)] = inst_27525);

(statearr_27664_27737[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27632 === (22))){
var inst_27543 = (state_27631[(8)]);
var inst_27546 = cljs.core.async.close_BANG_.call(null,inst_27543);
var state_27631__$1 = state_27631;
var statearr_27665_27738 = state_27631__$1;
(statearr_27665_27738[(2)] = inst_27546);

(statearr_27665_27738[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27632 === (36))){
var inst_27590 = (state_27631[(25)]);
var inst_27594 = cljs.core.chunk_first.call(null,inst_27590);
var inst_27595 = cljs.core.chunk_rest.call(null,inst_27590);
var inst_27596 = cljs.core.count.call(null,inst_27594);
var inst_27571 = inst_27595;
var inst_27572 = inst_27594;
var inst_27573 = inst_27596;
var inst_27574 = (0);
var state_27631__$1 = (function (){var statearr_27666 = state_27631;
(statearr_27666[(11)] = inst_27572);

(statearr_27666[(12)] = inst_27574);

(statearr_27666[(20)] = inst_27571);

(statearr_27666[(21)] = inst_27573);

return statearr_27666;
})();
var statearr_27667_27739 = state_27631__$1;
(statearr_27667_27739[(2)] = null);

(statearr_27667_27739[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27632 === (41))){
var inst_27590 = (state_27631[(25)]);
var inst_27606 = (state_27631[(2)]);
var inst_27607 = cljs.core.next.call(null,inst_27590);
var inst_27571 = inst_27607;
var inst_27572 = null;
var inst_27573 = (0);
var inst_27574 = (0);
var state_27631__$1 = (function (){var statearr_27668 = state_27631;
(statearr_27668[(11)] = inst_27572);

(statearr_27668[(27)] = inst_27606);

(statearr_27668[(12)] = inst_27574);

(statearr_27668[(20)] = inst_27571);

(statearr_27668[(21)] = inst_27573);

return statearr_27668;
})();
var statearr_27669_27740 = state_27631__$1;
(statearr_27669_27740[(2)] = null);

(statearr_27669_27740[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27632 === (43))){
var state_27631__$1 = state_27631;
var statearr_27670_27741 = state_27631__$1;
(statearr_27670_27741[(2)] = null);

(statearr_27670_27741[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27632 === (29))){
var inst_27615 = (state_27631[(2)]);
var state_27631__$1 = state_27631;
var statearr_27671_27742 = state_27631__$1;
(statearr_27671_27742[(2)] = inst_27615);

(statearr_27671_27742[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27632 === (44))){
var inst_27624 = (state_27631[(2)]);
var state_27631__$1 = (function (){var statearr_27672 = state_27631;
(statearr_27672[(28)] = inst_27624);

return statearr_27672;
})();
var statearr_27673_27743 = state_27631__$1;
(statearr_27673_27743[(2)] = null);

(statearr_27673_27743[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27632 === (6))){
var inst_27563 = (state_27631[(29)]);
var inst_27562 = cljs.core.deref.call(null,cs);
var inst_27563__$1 = cljs.core.keys.call(null,inst_27562);
var inst_27564 = cljs.core.count.call(null,inst_27563__$1);
var inst_27565 = cljs.core.reset_BANG_.call(null,dctr,inst_27564);
var inst_27570 = cljs.core.seq.call(null,inst_27563__$1);
var inst_27571 = inst_27570;
var inst_27572 = null;
var inst_27573 = (0);
var inst_27574 = (0);
var state_27631__$1 = (function (){var statearr_27674 = state_27631;
(statearr_27674[(11)] = inst_27572);

(statearr_27674[(29)] = inst_27563__$1);

(statearr_27674[(12)] = inst_27574);

(statearr_27674[(30)] = inst_27565);

(statearr_27674[(20)] = inst_27571);

(statearr_27674[(21)] = inst_27573);

return statearr_27674;
})();
var statearr_27675_27744 = state_27631__$1;
(statearr_27675_27744[(2)] = null);

(statearr_27675_27744[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27632 === (28))){
var inst_27590 = (state_27631[(25)]);
var inst_27571 = (state_27631[(20)]);
var inst_27590__$1 = cljs.core.seq.call(null,inst_27571);
var state_27631__$1 = (function (){var statearr_27676 = state_27631;
(statearr_27676[(25)] = inst_27590__$1);

return statearr_27676;
})();
if(inst_27590__$1){
var statearr_27677_27745 = state_27631__$1;
(statearr_27677_27745[(1)] = (33));

} else {
var statearr_27678_27746 = state_27631__$1;
(statearr_27678_27746[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27632 === (25))){
var inst_27574 = (state_27631[(12)]);
var inst_27573 = (state_27631[(21)]);
var inst_27576 = (inst_27574 < inst_27573);
var inst_27577 = inst_27576;
var state_27631__$1 = state_27631;
if(cljs.core.truth_(inst_27577)){
var statearr_27679_27747 = state_27631__$1;
(statearr_27679_27747[(1)] = (27));

} else {
var statearr_27680_27748 = state_27631__$1;
(statearr_27680_27748[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27632 === (34))){
var state_27631__$1 = state_27631;
var statearr_27681_27749 = state_27631__$1;
(statearr_27681_27749[(2)] = null);

(statearr_27681_27749[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27632 === (17))){
var state_27631__$1 = state_27631;
var statearr_27682_27750 = state_27631__$1;
(statearr_27682_27750[(2)] = null);

(statearr_27682_27750[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27632 === (3))){
var inst_27629 = (state_27631[(2)]);
var state_27631__$1 = state_27631;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27631__$1,inst_27629);
} else {
if((state_val_27632 === (12))){
var inst_27558 = (state_27631[(2)]);
var state_27631__$1 = state_27631;
var statearr_27683_27751 = state_27631__$1;
(statearr_27683_27751[(2)] = inst_27558);

(statearr_27683_27751[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27632 === (2))){
var state_27631__$1 = state_27631;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27631__$1,(4),ch);
} else {
if((state_val_27632 === (23))){
var state_27631__$1 = state_27631;
var statearr_27684_27752 = state_27631__$1;
(statearr_27684_27752[(2)] = null);

(statearr_27684_27752[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27632 === (35))){
var inst_27613 = (state_27631[(2)]);
var state_27631__$1 = state_27631;
var statearr_27685_27753 = state_27631__$1;
(statearr_27685_27753[(2)] = inst_27613);

(statearr_27685_27753[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27632 === (19))){
var inst_27532 = (state_27631[(7)]);
var inst_27536 = cljs.core.chunk_first.call(null,inst_27532);
var inst_27537 = cljs.core.chunk_rest.call(null,inst_27532);
var inst_27538 = cljs.core.count.call(null,inst_27536);
var inst_27512 = inst_27537;
var inst_27513 = inst_27536;
var inst_27514 = inst_27538;
var inst_27515 = (0);
var state_27631__$1 = (function (){var statearr_27686 = state_27631;
(statearr_27686[(13)] = inst_27515);

(statearr_27686[(15)] = inst_27514);

(statearr_27686[(16)] = inst_27512);

(statearr_27686[(17)] = inst_27513);

return statearr_27686;
})();
var statearr_27687_27754 = state_27631__$1;
(statearr_27687_27754[(2)] = null);

(statearr_27687_27754[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27632 === (11))){
var inst_27512 = (state_27631[(16)]);
var inst_27532 = (state_27631[(7)]);
var inst_27532__$1 = cljs.core.seq.call(null,inst_27512);
var state_27631__$1 = (function (){var statearr_27688 = state_27631;
(statearr_27688[(7)] = inst_27532__$1);

return statearr_27688;
})();
if(inst_27532__$1){
var statearr_27689_27755 = state_27631__$1;
(statearr_27689_27755[(1)] = (16));

} else {
var statearr_27690_27756 = state_27631__$1;
(statearr_27690_27756[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27632 === (9))){
var inst_27560 = (state_27631[(2)]);
var state_27631__$1 = state_27631;
var statearr_27691_27757 = state_27631__$1;
(statearr_27691_27757[(2)] = inst_27560);

(statearr_27691_27757[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27632 === (5))){
var inst_27510 = cljs.core.deref.call(null,cs);
var inst_27511 = cljs.core.seq.call(null,inst_27510);
var inst_27512 = inst_27511;
var inst_27513 = null;
var inst_27514 = (0);
var inst_27515 = (0);
var state_27631__$1 = (function (){var statearr_27692 = state_27631;
(statearr_27692[(13)] = inst_27515);

(statearr_27692[(15)] = inst_27514);

(statearr_27692[(16)] = inst_27512);

(statearr_27692[(17)] = inst_27513);

return statearr_27692;
})();
var statearr_27693_27758 = state_27631__$1;
(statearr_27693_27758[(2)] = null);

(statearr_27693_27758[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27632 === (14))){
var state_27631__$1 = state_27631;
var statearr_27694_27759 = state_27631__$1;
(statearr_27694_27759[(2)] = null);

(statearr_27694_27759[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27632 === (45))){
var inst_27621 = (state_27631[(2)]);
var state_27631__$1 = state_27631;
var statearr_27695_27760 = state_27631__$1;
(statearr_27695_27760[(2)] = inst_27621);

(statearr_27695_27760[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27632 === (26))){
var inst_27563 = (state_27631[(29)]);
var inst_27617 = (state_27631[(2)]);
var inst_27618 = cljs.core.seq.call(null,inst_27563);
var state_27631__$1 = (function (){var statearr_27696 = state_27631;
(statearr_27696[(31)] = inst_27617);

return statearr_27696;
})();
if(inst_27618){
var statearr_27697_27761 = state_27631__$1;
(statearr_27697_27761[(1)] = (42));

} else {
var statearr_27698_27762 = state_27631__$1;
(statearr_27698_27762[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27632 === (16))){
var inst_27532 = (state_27631[(7)]);
var inst_27534 = cljs.core.chunked_seq_QMARK_.call(null,inst_27532);
var state_27631__$1 = state_27631;
if(inst_27534){
var statearr_27699_27763 = state_27631__$1;
(statearr_27699_27763[(1)] = (19));

} else {
var statearr_27700_27764 = state_27631__$1;
(statearr_27700_27764[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27632 === (38))){
var inst_27610 = (state_27631[(2)]);
var state_27631__$1 = state_27631;
var statearr_27701_27765 = state_27631__$1;
(statearr_27701_27765[(2)] = inst_27610);

(statearr_27701_27765[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27632 === (30))){
var state_27631__$1 = state_27631;
var statearr_27702_27766 = state_27631__$1;
(statearr_27702_27766[(2)] = null);

(statearr_27702_27766[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27632 === (10))){
var inst_27515 = (state_27631[(13)]);
var inst_27513 = (state_27631[(17)]);
var inst_27521 = cljs.core._nth.call(null,inst_27513,inst_27515);
var inst_27522 = cljs.core.nth.call(null,inst_27521,(0),null);
var inst_27523 = cljs.core.nth.call(null,inst_27521,(1),null);
var state_27631__$1 = (function (){var statearr_27703 = state_27631;
(statearr_27703[(26)] = inst_27522);

return statearr_27703;
})();
if(cljs.core.truth_(inst_27523)){
var statearr_27704_27767 = state_27631__$1;
(statearr_27704_27767[(1)] = (13));

} else {
var statearr_27705_27768 = state_27631__$1;
(statearr_27705_27768[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27632 === (18))){
var inst_27556 = (state_27631[(2)]);
var state_27631__$1 = state_27631;
var statearr_27706_27769 = state_27631__$1;
(statearr_27706_27769[(2)] = inst_27556);

(statearr_27706_27769[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27632 === (42))){
var state_27631__$1 = state_27631;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27631__$1,(45),dchan);
} else {
if((state_val_27632 === (37))){
var inst_27590 = (state_27631[(25)]);
var inst_27599 = (state_27631[(23)]);
var inst_27503 = (state_27631[(10)]);
var inst_27599__$1 = cljs.core.first.call(null,inst_27590);
var inst_27600 = cljs.core.async.put_BANG_.call(null,inst_27599__$1,inst_27503,done);
var state_27631__$1 = (function (){var statearr_27707 = state_27631;
(statearr_27707[(23)] = inst_27599__$1);

return statearr_27707;
})();
if(cljs.core.truth_(inst_27600)){
var statearr_27708_27770 = state_27631__$1;
(statearr_27708_27770[(1)] = (39));

} else {
var statearr_27709_27771 = state_27631__$1;
(statearr_27709_27771[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27632 === (8))){
var inst_27515 = (state_27631[(13)]);
var inst_27514 = (state_27631[(15)]);
var inst_27517 = (inst_27515 < inst_27514);
var inst_27518 = inst_27517;
var state_27631__$1 = state_27631;
if(cljs.core.truth_(inst_27518)){
var statearr_27710_27772 = state_27631__$1;
(statearr_27710_27772[(1)] = (10));

} else {
var statearr_27711_27773 = state_27631__$1;
(statearr_27711_27773[(1)] = (11));

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
}
}
}
}
}
}
}
}
});})(c__21116__auto___27719,cs,m,dchan,dctr,done))
;
return ((function (switch__21054__auto__,c__21116__auto___27719,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__21055__auto__ = null;
var cljs$core$async$mult_$_state_machine__21055__auto____0 = (function (){
var statearr_27715 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27715[(0)] = cljs$core$async$mult_$_state_machine__21055__auto__);

(statearr_27715[(1)] = (1));

return statearr_27715;
});
var cljs$core$async$mult_$_state_machine__21055__auto____1 = (function (state_27631){
while(true){
var ret_value__21056__auto__ = (function (){try{while(true){
var result__21057__auto__ = switch__21054__auto__.call(null,state_27631);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21057__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21057__auto__;
}
break;
}
}catch (e27716){if((e27716 instanceof Object)){
var ex__21058__auto__ = e27716;
var statearr_27717_27774 = state_27631;
(statearr_27717_27774[(5)] = ex__21058__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27631);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27716;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21056__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27775 = state_27631;
state_27631 = G__27775;
continue;
} else {
return ret_value__21056__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__21055__auto__ = function(state_27631){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__21055__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__21055__auto____1.call(this,state_27631);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__21055__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__21055__auto____0;
cljs$core$async$mult_$_state_machine__21055__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__21055__auto____1;
return cljs$core$async$mult_$_state_machine__21055__auto__;
})()
;})(switch__21054__auto__,c__21116__auto___27719,cs,m,dchan,dctr,done))
})();
var state__21118__auto__ = (function (){var statearr_27718 = f__21117__auto__.call(null);
(statearr_27718[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21116__auto___27719);

return statearr_27718;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21118__auto__);
});})(c__21116__auto___27719,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 * By default the channel will be closed when the source closes,
 * but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(){
var G__27777 = arguments.length;
switch (G__27777) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;
/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

cljs.core.async.Mix = (function (){var obj27780 = {};
return obj27780;
})();

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((function (){var and__18094__auto__ = m;
if(and__18094__auto__){
return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else {
return and__18094__auto__;
}
})()){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__18742__auto__ = (((m == null))?null:m);
return (function (){var or__18106__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__18742__auto__)]);
if(or__18106__auto__){
return or__18106__auto__;
} else {
var or__18106__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(or__18106__auto____$1){
return or__18106__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((function (){var and__18094__auto__ = m;
if(and__18094__auto__){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else {
return and__18094__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__18742__auto__ = (((m == null))?null:m);
return (function (){var or__18106__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__18742__auto__)]);
if(or__18106__auto__){
return or__18106__auto__;
} else {
var or__18106__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(or__18106__auto____$1){
return or__18106__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((function (){var and__18094__auto__ = m;
if(and__18094__auto__){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else {
return and__18094__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__18742__auto__ = (((m == null))?null:m);
return (function (){var or__18106__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__18742__auto__)]);
if(or__18106__auto__){
return or__18106__auto__;
} else {
var or__18106__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(or__18106__auto____$1){
return or__18106__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((function (){var and__18094__auto__ = m;
if(and__18094__auto__){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else {
return and__18094__auto__;
}
})()){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__18742__auto__ = (((m == null))?null:m);
return (function (){var or__18106__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__18742__auto__)]);
if(or__18106__auto__){
return or__18106__auto__;
} else {
var or__18106__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(or__18106__auto____$1){
return or__18106__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((function (){var and__18094__auto__ = m;
if(and__18094__auto__){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else {
return and__18094__auto__;
}
})()){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__18742__auto__ = (((m == null))?null:m);
return (function (){var or__18106__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__18742__auto__)]);
if(or__18106__auto__){
return or__18106__auto__;
} else {
var or__18106__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(or__18106__auto____$1){
return or__18106__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(){
var argseq__19146__auto__ = ((((3) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__19146__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__27785){
var map__27786 = p__27785;
var map__27786__$1 = ((cljs.core.seq_QMARK_.call(null,map__27786))?cljs.core.apply.call(null,cljs.core.hash_map,map__27786):map__27786);
var opts = map__27786__$1;
var statearr_27787_27790 = state;
(statearr_27787_27790[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4423__auto__ = cljs.core.async.do_alts.call(null,((function (map__27786,map__27786__$1,opts){
return (function (val){
var statearr_27788_27791 = state;
(statearr_27788_27791[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__27786,map__27786__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4423__auto__)){
var cb = temp__4423__auto__;
var statearr_27789_27792 = state;
(statearr_27789_27792[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq27781){
var G__27782 = cljs.core.first.call(null,seq27781);
var seq27781__$1 = cljs.core.next.call(null,seq27781);
var G__27783 = cljs.core.first.call(null,seq27781__$1);
var seq27781__$2 = cljs.core.next.call(null,seq27781__$1);
var G__27784 = cljs.core.first.call(null,seq27781__$2);
var seq27781__$3 = cljs.core.next.call(null,seq27781__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__27782,G__27783,G__27784,seq27781__$3);
});
/**
 * Creates and returns a mix of one or more input channels which will
 * be put on the supplied out channel. Input sources can be added to
 * the mix with 'admix', and removed with 'unmix'. A mix supports
 * soloing, muting and pausing multiple inputs atomically using
 * 'toggle', and can solo using either muting or pausing as determined
 * by 'solo-mode'.
 * 
 * Each channel can have zero or more boolean modes set via 'toggle':
 * 
 * :solo - when true, only this (ond other soloed) channel(s) will appear
 * in the mix output channel. :mute and :pause states of soloed
 * channels are ignored. If solo-mode is :mute, non-soloed
 * channels are muted, if :pause, non-soloed channels are
 * paused.
 * 
 * :mute - muted channels will have their contents consumed but not included in the mix
 * :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t27912 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t27912 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta27913){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta27913 = meta27913;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t27912.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_27914,meta27913__$1){
var self__ = this;
var _27914__$1 = this;
return (new cljs.core.async.t27912(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta27913__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t27912.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_27914){
var self__ = this;
var _27914__$1 = this;
return self__.meta27913;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t27912.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t27912.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t27912.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t27912.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t27912.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t27912.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t27912.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t27912.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))))].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t27912.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta27913","meta27913",1911756195,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t27912.cljs$lang$type = true;

cljs.core.async.t27912.cljs$lang$ctorStr = "cljs.core.async/t27912";

cljs.core.async.t27912.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__18685__auto__,writer__18686__auto__,opt__18687__auto__){
return cljs.core._write.call(null,writer__18686__auto__,"cljs.core.async/t27912");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t27912 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t27912(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta27913){
return (new cljs.core.async.t27912(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta27913));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t27912(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__21116__auto___28031 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21116__auto___28031,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__21117__auto__ = (function (){var switch__21054__auto__ = ((function (c__21116__auto___28031,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_27984){
var state_val_27985 = (state_27984[(1)]);
if((state_val_27985 === (7))){
var inst_27928 = (state_27984[(7)]);
var inst_27933 = cljs.core.apply.call(null,cljs.core.hash_map,inst_27928);
var state_27984__$1 = state_27984;
var statearr_27986_28032 = state_27984__$1;
(statearr_27986_28032[(2)] = inst_27933);

(statearr_27986_28032[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27985 === (20))){
var inst_27943 = (state_27984[(8)]);
var state_27984__$1 = state_27984;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27984__$1,(23),out,inst_27943);
} else {
if((state_val_27985 === (1))){
var inst_27918 = (state_27984[(9)]);
var inst_27918__$1 = calc_state.call(null);
var inst_27919 = cljs.core.seq_QMARK_.call(null,inst_27918__$1);
var state_27984__$1 = (function (){var statearr_27987 = state_27984;
(statearr_27987[(9)] = inst_27918__$1);

return statearr_27987;
})();
if(inst_27919){
var statearr_27988_28033 = state_27984__$1;
(statearr_27988_28033[(1)] = (2));

} else {
var statearr_27989_28034 = state_27984__$1;
(statearr_27989_28034[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27985 === (24))){
var inst_27936 = (state_27984[(10)]);
var inst_27928 = inst_27936;
var state_27984__$1 = (function (){var statearr_27990 = state_27984;
(statearr_27990[(7)] = inst_27928);

return statearr_27990;
})();
var statearr_27991_28035 = state_27984__$1;
(statearr_27991_28035[(2)] = null);

(statearr_27991_28035[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27985 === (4))){
var inst_27918 = (state_27984[(9)]);
var inst_27924 = (state_27984[(2)]);
var inst_27925 = cljs.core.get.call(null,inst_27924,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_27926 = cljs.core.get.call(null,inst_27924,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_27927 = cljs.core.get.call(null,inst_27924,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_27928 = inst_27918;
var state_27984__$1 = (function (){var statearr_27992 = state_27984;
(statearr_27992[(7)] = inst_27928);

(statearr_27992[(11)] = inst_27925);

(statearr_27992[(12)] = inst_27927);

(statearr_27992[(13)] = inst_27926);

return statearr_27992;
})();
var statearr_27993_28036 = state_27984__$1;
(statearr_27993_28036[(2)] = null);

(statearr_27993_28036[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27985 === (15))){
var state_27984__$1 = state_27984;
var statearr_27994_28037 = state_27984__$1;
(statearr_27994_28037[(2)] = null);

(statearr_27994_28037[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27985 === (21))){
var inst_27936 = (state_27984[(10)]);
var inst_27928 = inst_27936;
var state_27984__$1 = (function (){var statearr_27995 = state_27984;
(statearr_27995[(7)] = inst_27928);

return statearr_27995;
})();
var statearr_27996_28038 = state_27984__$1;
(statearr_27996_28038[(2)] = null);

(statearr_27996_28038[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27985 === (13))){
var inst_27980 = (state_27984[(2)]);
var state_27984__$1 = state_27984;
var statearr_27997_28039 = state_27984__$1;
(statearr_27997_28039[(2)] = inst_27980);

(statearr_27997_28039[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27985 === (22))){
var inst_27978 = (state_27984[(2)]);
var state_27984__$1 = state_27984;
var statearr_27998_28040 = state_27984__$1;
(statearr_27998_28040[(2)] = inst_27978);

(statearr_27998_28040[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27985 === (6))){
var inst_27982 = (state_27984[(2)]);
var state_27984__$1 = state_27984;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27984__$1,inst_27982);
} else {
if((state_val_27985 === (25))){
var state_27984__$1 = state_27984;
var statearr_27999_28041 = state_27984__$1;
(statearr_27999_28041[(2)] = null);

(statearr_27999_28041[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27985 === (17))){
var inst_27958 = (state_27984[(14)]);
var state_27984__$1 = state_27984;
var statearr_28000_28042 = state_27984__$1;
(statearr_28000_28042[(2)] = inst_27958);

(statearr_28000_28042[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27985 === (3))){
var inst_27918 = (state_27984[(9)]);
var state_27984__$1 = state_27984;
var statearr_28001_28043 = state_27984__$1;
(statearr_28001_28043[(2)] = inst_27918);

(statearr_28001_28043[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27985 === (12))){
var inst_27958 = (state_27984[(14)]);
var inst_27937 = (state_27984[(15)]);
var inst_27944 = (state_27984[(16)]);
var inst_27958__$1 = inst_27937.call(null,inst_27944);
var state_27984__$1 = (function (){var statearr_28002 = state_27984;
(statearr_28002[(14)] = inst_27958__$1);

return statearr_28002;
})();
if(cljs.core.truth_(inst_27958__$1)){
var statearr_28003_28044 = state_27984__$1;
(statearr_28003_28044[(1)] = (17));

} else {
var statearr_28004_28045 = state_27984__$1;
(statearr_28004_28045[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27985 === (2))){
var inst_27918 = (state_27984[(9)]);
var inst_27921 = cljs.core.apply.call(null,cljs.core.hash_map,inst_27918);
var state_27984__$1 = state_27984;
var statearr_28005_28046 = state_27984__$1;
(statearr_28005_28046[(2)] = inst_27921);

(statearr_28005_28046[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27985 === (23))){
var inst_27969 = (state_27984[(2)]);
var state_27984__$1 = state_27984;
if(cljs.core.truth_(inst_27969)){
var statearr_28006_28047 = state_27984__$1;
(statearr_28006_28047[(1)] = (24));

} else {
var statearr_28007_28048 = state_27984__$1;
(statearr_28007_28048[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27985 === (19))){
var inst_27966 = (state_27984[(2)]);
var state_27984__$1 = state_27984;
if(cljs.core.truth_(inst_27966)){
var statearr_28008_28049 = state_27984__$1;
(statearr_28008_28049[(1)] = (20));

} else {
var statearr_28009_28050 = state_27984__$1;
(statearr_28009_28050[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27985 === (11))){
var inst_27943 = (state_27984[(8)]);
var inst_27949 = (inst_27943 == null);
var state_27984__$1 = state_27984;
if(cljs.core.truth_(inst_27949)){
var statearr_28010_28051 = state_27984__$1;
(statearr_28010_28051[(1)] = (14));

} else {
var statearr_28011_28052 = state_27984__$1;
(statearr_28011_28052[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27985 === (9))){
var inst_27936 = (state_27984[(10)]);
var inst_27936__$1 = (state_27984[(2)]);
var inst_27937 = cljs.core.get.call(null,inst_27936__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_27938 = cljs.core.get.call(null,inst_27936__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_27939 = cljs.core.get.call(null,inst_27936__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_27984__$1 = (function (){var statearr_28012 = state_27984;
(statearr_28012[(15)] = inst_27937);

(statearr_28012[(10)] = inst_27936__$1);

(statearr_28012[(17)] = inst_27938);

return statearr_28012;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_27984__$1,(10),inst_27939);
} else {
if((state_val_27985 === (5))){
var inst_27928 = (state_27984[(7)]);
var inst_27931 = cljs.core.seq_QMARK_.call(null,inst_27928);
var state_27984__$1 = state_27984;
if(inst_27931){
var statearr_28013_28053 = state_27984__$1;
(statearr_28013_28053[(1)] = (7));

} else {
var statearr_28014_28054 = state_27984__$1;
(statearr_28014_28054[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27985 === (14))){
var inst_27944 = (state_27984[(16)]);
var inst_27951 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_27944);
var state_27984__$1 = state_27984;
var statearr_28015_28055 = state_27984__$1;
(statearr_28015_28055[(2)] = inst_27951);

(statearr_28015_28055[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27985 === (26))){
var inst_27974 = (state_27984[(2)]);
var state_27984__$1 = state_27984;
var statearr_28016_28056 = state_27984__$1;
(statearr_28016_28056[(2)] = inst_27974);

(statearr_28016_28056[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27985 === (16))){
var inst_27954 = (state_27984[(2)]);
var inst_27955 = calc_state.call(null);
var inst_27928 = inst_27955;
var state_27984__$1 = (function (){var statearr_28017 = state_27984;
(statearr_28017[(7)] = inst_27928);

(statearr_28017[(18)] = inst_27954);

return statearr_28017;
})();
var statearr_28018_28057 = state_27984__$1;
(statearr_28018_28057[(2)] = null);

(statearr_28018_28057[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27985 === (10))){
var inst_27943 = (state_27984[(8)]);
var inst_27944 = (state_27984[(16)]);
var inst_27942 = (state_27984[(2)]);
var inst_27943__$1 = cljs.core.nth.call(null,inst_27942,(0),null);
var inst_27944__$1 = cljs.core.nth.call(null,inst_27942,(1),null);
var inst_27945 = (inst_27943__$1 == null);
var inst_27946 = cljs.core._EQ_.call(null,inst_27944__$1,change);
var inst_27947 = (inst_27945) || (inst_27946);
var state_27984__$1 = (function (){var statearr_28019 = state_27984;
(statearr_28019[(8)] = inst_27943__$1);

(statearr_28019[(16)] = inst_27944__$1);

return statearr_28019;
})();
if(cljs.core.truth_(inst_27947)){
var statearr_28020_28058 = state_27984__$1;
(statearr_28020_28058[(1)] = (11));

} else {
var statearr_28021_28059 = state_27984__$1;
(statearr_28021_28059[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27985 === (18))){
var inst_27937 = (state_27984[(15)]);
var inst_27944 = (state_27984[(16)]);
var inst_27938 = (state_27984[(17)]);
var inst_27961 = cljs.core.empty_QMARK_.call(null,inst_27937);
var inst_27962 = inst_27938.call(null,inst_27944);
var inst_27963 = cljs.core.not.call(null,inst_27962);
var inst_27964 = (inst_27961) && (inst_27963);
var state_27984__$1 = state_27984;
var statearr_28022_28060 = state_27984__$1;
(statearr_28022_28060[(2)] = inst_27964);

(statearr_28022_28060[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27985 === (8))){
var inst_27928 = (state_27984[(7)]);
var state_27984__$1 = state_27984;
var statearr_28023_28061 = state_27984__$1;
(statearr_28023_28061[(2)] = inst_27928);

(statearr_28023_28061[(1)] = (9));


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
});})(c__21116__auto___28031,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__21054__auto__,c__21116__auto___28031,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__21055__auto__ = null;
var cljs$core$async$mix_$_state_machine__21055__auto____0 = (function (){
var statearr_28027 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28027[(0)] = cljs$core$async$mix_$_state_machine__21055__auto__);

(statearr_28027[(1)] = (1));

return statearr_28027;
});
var cljs$core$async$mix_$_state_machine__21055__auto____1 = (function (state_27984){
while(true){
var ret_value__21056__auto__ = (function (){try{while(true){
var result__21057__auto__ = switch__21054__auto__.call(null,state_27984);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21057__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21057__auto__;
}
break;
}
}catch (e28028){if((e28028 instanceof Object)){
var ex__21058__auto__ = e28028;
var statearr_28029_28062 = state_27984;
(statearr_28029_28062[(5)] = ex__21058__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27984);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28028;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21056__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28063 = state_27984;
state_27984 = G__28063;
continue;
} else {
return ret_value__21056__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__21055__auto__ = function(state_27984){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__21055__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__21055__auto____1.call(this,state_27984);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__21055__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__21055__auto____0;
cljs$core$async$mix_$_state_machine__21055__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__21055__auto____1;
return cljs$core$async$mix_$_state_machine__21055__auto__;
})()
;})(switch__21054__auto__,c__21116__auto___28031,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__21118__auto__ = (function (){var statearr_28030 = f__21117__auto__.call(null);
(statearr_28030[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21116__auto___28031);

return statearr_28030;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21118__auto__);
});})(c__21116__auto___28031,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 * state map is a map of channels -> channel-state-map. A
 * channel-state-map is a map of attrs -> boolean, where attr is one or
 * more of :mute, :pause or :solo. Any states supplied are merged with
 * the current state.
 * 
 * Note that channels can be added to a mix via toggle, which can be
 * used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

cljs.core.async.Pub = (function (){var obj28065 = {};
return obj28065;
})();

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((function (){var and__18094__auto__ = p;
if(and__18094__auto__){
return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else {
return and__18094__auto__;
}
})()){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__18742__auto__ = (((p == null))?null:p);
return (function (){var or__18106__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__18742__auto__)]);
if(or__18106__auto__){
return or__18106__auto__;
} else {
var or__18106__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(or__18106__auto____$1){
return or__18106__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((function (){var and__18094__auto__ = p;
if(and__18094__auto__){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else {
return and__18094__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__18742__auto__ = (((p == null))?null:p);
return (function (){var or__18106__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__18742__auto__)]);
if(or__18106__auto__){
return or__18106__auto__;
} else {
var or__18106__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(or__18106__auto____$1){
return or__18106__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(){
var G__28067 = arguments.length;
switch (G__28067) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((function (){var and__18094__auto__ = p;
if(and__18094__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else {
return and__18094__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__18742__auto__ = (((p == null))?null:p);
return (function (){var or__18106__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__18742__auto__)]);
if(or__18106__auto__){
return or__18106__auto__;
} else {
var or__18106__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__18106__auto____$1){
return or__18106__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((function (){var and__18094__auto__ = p;
if(and__18094__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else {
return and__18094__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__18742__auto__ = (((p == null))?null:p);
return (function (){var or__18106__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__18742__auto__)]);
if(or__18106__auto__){
return or__18106__auto__;
} else {
var or__18106__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__18106__auto____$1){
return or__18106__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;

/**
 * Creates and returns a pub(lication) of the supplied channel,
 * partitioned into topics by the topic-fn. topic-fn will be applied to
 * each value on the channel and the result will determine the 'topic'
 * on which that value will be put. Channels can be subscribed to
 * receive copies of topics using 'sub', and unsubscribed using
 * 'unsub'. Each topic will be handled by an internal mult on a
 * dedicated channel. By default these internal channels are
 * unbuffered, but a buf-fn can be supplied which, given a topic,
 * creates a buffer with desired properties.
 * 
 * Each item is distributed to all subs in parallel and synchronously,
 * i.e. each sub must accept before the next item is distributed. Use
 * buffering/windowing to prevent slow subs from holding up the pub.
 * 
 * Items received when there are no matching subs get dropped.
 * 
 * Note that if buf-fns are used then each topic is handled
 * asynchronously, i.e. if a channel is subscribed to more than one
 * topic it should not expect them to be interleaved identically with
 * the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(){
var G__28071 = arguments.length;
switch (G__28071) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__18106__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__18106__auto__)){
return or__18106__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__18106__auto__,mults){
return (function (p1__28069_SHARP_){
if(cljs.core.truth_(p1__28069_SHARP_.call(null,topic))){
return p1__28069_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__28069_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__18106__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t28072 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t28072 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta28073){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta28073 = meta28073;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t28072.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_28074,meta28073__$1){
var self__ = this;
var _28074__$1 = this;
return (new cljs.core.async.t28072(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta28073__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t28072.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_28074){
var self__ = this;
var _28074__$1 = this;
return self__.meta28073;
});})(mults,ensure_mult))
;

cljs.core.async.t28072.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t28072.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t28072.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t28072.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t28072.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4423__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4423__auto__)){
var m = temp__4423__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t28072.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t28072.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t28072.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta28073","meta28073",-1130641315,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t28072.cljs$lang$type = true;

cljs.core.async.t28072.cljs$lang$ctorStr = "cljs.core.async/t28072";

cljs.core.async.t28072.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__18685__auto__,writer__18686__auto__,opt__18687__auto__){
return cljs.core._write.call(null,writer__18686__auto__,"cljs.core.async/t28072");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t28072 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t28072(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta28073){
return (new cljs.core.async.t28072(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta28073));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t28072(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__21116__auto___28195 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21116__auto___28195,mults,ensure_mult,p){
return (function (){
var f__21117__auto__ = (function (){var switch__21054__auto__ = ((function (c__21116__auto___28195,mults,ensure_mult,p){
return (function (state_28146){
var state_val_28147 = (state_28146[(1)]);
if((state_val_28147 === (7))){
var inst_28142 = (state_28146[(2)]);
var state_28146__$1 = state_28146;
var statearr_28148_28196 = state_28146__$1;
(statearr_28148_28196[(2)] = inst_28142);

(statearr_28148_28196[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28147 === (20))){
var state_28146__$1 = state_28146;
var statearr_28149_28197 = state_28146__$1;
(statearr_28149_28197[(2)] = null);

(statearr_28149_28197[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28147 === (1))){
var state_28146__$1 = state_28146;
var statearr_28150_28198 = state_28146__$1;
(statearr_28150_28198[(2)] = null);

(statearr_28150_28198[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28147 === (24))){
var inst_28125 = (state_28146[(7)]);
var inst_28134 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_28125);
var state_28146__$1 = state_28146;
var statearr_28151_28199 = state_28146__$1;
(statearr_28151_28199[(2)] = inst_28134);

(statearr_28151_28199[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28147 === (4))){
var inst_28077 = (state_28146[(8)]);
var inst_28077__$1 = (state_28146[(2)]);
var inst_28078 = (inst_28077__$1 == null);
var state_28146__$1 = (function (){var statearr_28152 = state_28146;
(statearr_28152[(8)] = inst_28077__$1);

return statearr_28152;
})();
if(cljs.core.truth_(inst_28078)){
var statearr_28153_28200 = state_28146__$1;
(statearr_28153_28200[(1)] = (5));

} else {
var statearr_28154_28201 = state_28146__$1;
(statearr_28154_28201[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28147 === (15))){
var inst_28119 = (state_28146[(2)]);
var state_28146__$1 = state_28146;
var statearr_28155_28202 = state_28146__$1;
(statearr_28155_28202[(2)] = inst_28119);

(statearr_28155_28202[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28147 === (21))){
var inst_28139 = (state_28146[(2)]);
var state_28146__$1 = (function (){var statearr_28156 = state_28146;
(statearr_28156[(9)] = inst_28139);

return statearr_28156;
})();
var statearr_28157_28203 = state_28146__$1;
(statearr_28157_28203[(2)] = null);

(statearr_28157_28203[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28147 === (13))){
var inst_28101 = (state_28146[(10)]);
var inst_28103 = cljs.core.chunked_seq_QMARK_.call(null,inst_28101);
var state_28146__$1 = state_28146;
if(inst_28103){
var statearr_28158_28204 = state_28146__$1;
(statearr_28158_28204[(1)] = (16));

} else {
var statearr_28159_28205 = state_28146__$1;
(statearr_28159_28205[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28147 === (22))){
var inst_28131 = (state_28146[(2)]);
var state_28146__$1 = state_28146;
if(cljs.core.truth_(inst_28131)){
var statearr_28160_28206 = state_28146__$1;
(statearr_28160_28206[(1)] = (23));

} else {
var statearr_28161_28207 = state_28146__$1;
(statearr_28161_28207[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28147 === (6))){
var inst_28077 = (state_28146[(8)]);
var inst_28125 = (state_28146[(7)]);
var inst_28127 = (state_28146[(11)]);
var inst_28125__$1 = topic_fn.call(null,inst_28077);
var inst_28126 = cljs.core.deref.call(null,mults);
var inst_28127__$1 = cljs.core.get.call(null,inst_28126,inst_28125__$1);
var state_28146__$1 = (function (){var statearr_28162 = state_28146;
(statearr_28162[(7)] = inst_28125__$1);

(statearr_28162[(11)] = inst_28127__$1);

return statearr_28162;
})();
if(cljs.core.truth_(inst_28127__$1)){
var statearr_28163_28208 = state_28146__$1;
(statearr_28163_28208[(1)] = (19));

} else {
var statearr_28164_28209 = state_28146__$1;
(statearr_28164_28209[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28147 === (25))){
var inst_28136 = (state_28146[(2)]);
var state_28146__$1 = state_28146;
var statearr_28165_28210 = state_28146__$1;
(statearr_28165_28210[(2)] = inst_28136);

(statearr_28165_28210[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28147 === (17))){
var inst_28101 = (state_28146[(10)]);
var inst_28110 = cljs.core.first.call(null,inst_28101);
var inst_28111 = cljs.core.async.muxch_STAR_.call(null,inst_28110);
var inst_28112 = cljs.core.async.close_BANG_.call(null,inst_28111);
var inst_28113 = cljs.core.next.call(null,inst_28101);
var inst_28087 = inst_28113;
var inst_28088 = null;
var inst_28089 = (0);
var inst_28090 = (0);
var state_28146__$1 = (function (){var statearr_28166 = state_28146;
(statearr_28166[(12)] = inst_28112);

(statearr_28166[(13)] = inst_28089);

(statearr_28166[(14)] = inst_28090);

(statearr_28166[(15)] = inst_28088);

(statearr_28166[(16)] = inst_28087);

return statearr_28166;
})();
var statearr_28167_28211 = state_28146__$1;
(statearr_28167_28211[(2)] = null);

(statearr_28167_28211[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28147 === (3))){
var inst_28144 = (state_28146[(2)]);
var state_28146__$1 = state_28146;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28146__$1,inst_28144);
} else {
if((state_val_28147 === (12))){
var inst_28121 = (state_28146[(2)]);
var state_28146__$1 = state_28146;
var statearr_28168_28212 = state_28146__$1;
(statearr_28168_28212[(2)] = inst_28121);

(statearr_28168_28212[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28147 === (2))){
var state_28146__$1 = state_28146;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28146__$1,(4),ch);
} else {
if((state_val_28147 === (23))){
var state_28146__$1 = state_28146;
var statearr_28169_28213 = state_28146__$1;
(statearr_28169_28213[(2)] = null);

(statearr_28169_28213[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28147 === (19))){
var inst_28077 = (state_28146[(8)]);
var inst_28127 = (state_28146[(11)]);
var inst_28129 = cljs.core.async.muxch_STAR_.call(null,inst_28127);
var state_28146__$1 = state_28146;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28146__$1,(22),inst_28129,inst_28077);
} else {
if((state_val_28147 === (11))){
var inst_28101 = (state_28146[(10)]);
var inst_28087 = (state_28146[(16)]);
var inst_28101__$1 = cljs.core.seq.call(null,inst_28087);
var state_28146__$1 = (function (){var statearr_28170 = state_28146;
(statearr_28170[(10)] = inst_28101__$1);

return statearr_28170;
})();
if(inst_28101__$1){
var statearr_28171_28214 = state_28146__$1;
(statearr_28171_28214[(1)] = (13));

} else {
var statearr_28172_28215 = state_28146__$1;
(statearr_28172_28215[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28147 === (9))){
var inst_28123 = (state_28146[(2)]);
var state_28146__$1 = state_28146;
var statearr_28173_28216 = state_28146__$1;
(statearr_28173_28216[(2)] = inst_28123);

(statearr_28173_28216[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28147 === (5))){
var inst_28084 = cljs.core.deref.call(null,mults);
var inst_28085 = cljs.core.vals.call(null,inst_28084);
var inst_28086 = cljs.core.seq.call(null,inst_28085);
var inst_28087 = inst_28086;
var inst_28088 = null;
var inst_28089 = (0);
var inst_28090 = (0);
var state_28146__$1 = (function (){var statearr_28174 = state_28146;
(statearr_28174[(13)] = inst_28089);

(statearr_28174[(14)] = inst_28090);

(statearr_28174[(15)] = inst_28088);

(statearr_28174[(16)] = inst_28087);

return statearr_28174;
})();
var statearr_28175_28217 = state_28146__$1;
(statearr_28175_28217[(2)] = null);

(statearr_28175_28217[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28147 === (14))){
var state_28146__$1 = state_28146;
var statearr_28179_28218 = state_28146__$1;
(statearr_28179_28218[(2)] = null);

(statearr_28179_28218[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28147 === (16))){
var inst_28101 = (state_28146[(10)]);
var inst_28105 = cljs.core.chunk_first.call(null,inst_28101);
var inst_28106 = cljs.core.chunk_rest.call(null,inst_28101);
var inst_28107 = cljs.core.count.call(null,inst_28105);
var inst_28087 = inst_28106;
var inst_28088 = inst_28105;
var inst_28089 = inst_28107;
var inst_28090 = (0);
var state_28146__$1 = (function (){var statearr_28180 = state_28146;
(statearr_28180[(13)] = inst_28089);

(statearr_28180[(14)] = inst_28090);

(statearr_28180[(15)] = inst_28088);

(statearr_28180[(16)] = inst_28087);

return statearr_28180;
})();
var statearr_28181_28219 = state_28146__$1;
(statearr_28181_28219[(2)] = null);

(statearr_28181_28219[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28147 === (10))){
var inst_28089 = (state_28146[(13)]);
var inst_28090 = (state_28146[(14)]);
var inst_28088 = (state_28146[(15)]);
var inst_28087 = (state_28146[(16)]);
var inst_28095 = cljs.core._nth.call(null,inst_28088,inst_28090);
var inst_28096 = cljs.core.async.muxch_STAR_.call(null,inst_28095);
var inst_28097 = cljs.core.async.close_BANG_.call(null,inst_28096);
var inst_28098 = (inst_28090 + (1));
var tmp28176 = inst_28089;
var tmp28177 = inst_28088;
var tmp28178 = inst_28087;
var inst_28087__$1 = tmp28178;
var inst_28088__$1 = tmp28177;
var inst_28089__$1 = tmp28176;
var inst_28090__$1 = inst_28098;
var state_28146__$1 = (function (){var statearr_28182 = state_28146;
(statearr_28182[(13)] = inst_28089__$1);

(statearr_28182[(14)] = inst_28090__$1);

(statearr_28182[(15)] = inst_28088__$1);

(statearr_28182[(17)] = inst_28097);

(statearr_28182[(16)] = inst_28087__$1);

return statearr_28182;
})();
var statearr_28183_28220 = state_28146__$1;
(statearr_28183_28220[(2)] = null);

(statearr_28183_28220[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28147 === (18))){
var inst_28116 = (state_28146[(2)]);
var state_28146__$1 = state_28146;
var statearr_28184_28221 = state_28146__$1;
(statearr_28184_28221[(2)] = inst_28116);

(statearr_28184_28221[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28147 === (8))){
var inst_28089 = (state_28146[(13)]);
var inst_28090 = (state_28146[(14)]);
var inst_28092 = (inst_28090 < inst_28089);
var inst_28093 = inst_28092;
var state_28146__$1 = state_28146;
if(cljs.core.truth_(inst_28093)){
var statearr_28185_28222 = state_28146__$1;
(statearr_28185_28222[(1)] = (10));

} else {
var statearr_28186_28223 = state_28146__$1;
(statearr_28186_28223[(1)] = (11));

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
});})(c__21116__auto___28195,mults,ensure_mult,p))
;
return ((function (switch__21054__auto__,c__21116__auto___28195,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__21055__auto__ = null;
var cljs$core$async$state_machine__21055__auto____0 = (function (){
var statearr_28190 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28190[(0)] = cljs$core$async$state_machine__21055__auto__);

(statearr_28190[(1)] = (1));

return statearr_28190;
});
var cljs$core$async$state_machine__21055__auto____1 = (function (state_28146){
while(true){
var ret_value__21056__auto__ = (function (){try{while(true){
var result__21057__auto__ = switch__21054__auto__.call(null,state_28146);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21057__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21057__auto__;
}
break;
}
}catch (e28191){if((e28191 instanceof Object)){
var ex__21058__auto__ = e28191;
var statearr_28192_28224 = state_28146;
(statearr_28192_28224[(5)] = ex__21058__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28146);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28191;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21056__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28225 = state_28146;
state_28146 = G__28225;
continue;
} else {
return ret_value__21056__auto__;
}
break;
}
});
cljs$core$async$state_machine__21055__auto__ = function(state_28146){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21055__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21055__auto____1.call(this,state_28146);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21055__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21055__auto____0;
cljs$core$async$state_machine__21055__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21055__auto____1;
return cljs$core$async$state_machine__21055__auto__;
})()
;})(switch__21054__auto__,c__21116__auto___28195,mults,ensure_mult,p))
})();
var state__21118__auto__ = (function (){var statearr_28193 = f__21117__auto__.call(null);
(statearr_28193[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21116__auto___28195);

return statearr_28193;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21118__auto__);
});})(c__21116__auto___28195,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 * By default the channel will be closed when the source closes,
 * but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(){
var G__28227 = arguments.length;
switch (G__28227) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(){
var G__28230 = arguments.length;
switch (G__28230) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;
/**
 * Takes a function and a collection of source channels, and returns a
 * channel which contains the values produced by applying f to the set
 * of first items taken from each source channel, followed by applying
 * f to the set of second items from each channel, until any one of the
 * channels is closed, at which point the output channel will be
 * closed. The returned channel will be unbuffered by default, or a
 * buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(){
var G__28233 = arguments.length;
switch (G__28233) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__21116__auto___28303 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21116__auto___28303,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__21117__auto__ = (function (){var switch__21054__auto__ = ((function (c__21116__auto___28303,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_28272){
var state_val_28273 = (state_28272[(1)]);
if((state_val_28273 === (7))){
var state_28272__$1 = state_28272;
var statearr_28274_28304 = state_28272__$1;
(statearr_28274_28304[(2)] = null);

(statearr_28274_28304[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28273 === (1))){
var state_28272__$1 = state_28272;
var statearr_28275_28305 = state_28272__$1;
(statearr_28275_28305[(2)] = null);

(statearr_28275_28305[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28273 === (4))){
var inst_28236 = (state_28272[(7)]);
var inst_28238 = (inst_28236 < cnt);
var state_28272__$1 = state_28272;
if(cljs.core.truth_(inst_28238)){
var statearr_28276_28306 = state_28272__$1;
(statearr_28276_28306[(1)] = (6));

} else {
var statearr_28277_28307 = state_28272__$1;
(statearr_28277_28307[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28273 === (15))){
var inst_28268 = (state_28272[(2)]);
var state_28272__$1 = state_28272;
var statearr_28278_28308 = state_28272__$1;
(statearr_28278_28308[(2)] = inst_28268);

(statearr_28278_28308[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28273 === (13))){
var inst_28261 = cljs.core.async.close_BANG_.call(null,out);
var state_28272__$1 = state_28272;
var statearr_28279_28309 = state_28272__$1;
(statearr_28279_28309[(2)] = inst_28261);

(statearr_28279_28309[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28273 === (6))){
var state_28272__$1 = state_28272;
var statearr_28280_28310 = state_28272__$1;
(statearr_28280_28310[(2)] = null);

(statearr_28280_28310[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28273 === (3))){
var inst_28270 = (state_28272[(2)]);
var state_28272__$1 = state_28272;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28272__$1,inst_28270);
} else {
if((state_val_28273 === (12))){
var inst_28258 = (state_28272[(8)]);
var inst_28258__$1 = (state_28272[(2)]);
var inst_28259 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_28258__$1);
var state_28272__$1 = (function (){var statearr_28281 = state_28272;
(statearr_28281[(8)] = inst_28258__$1);

return statearr_28281;
})();
if(cljs.core.truth_(inst_28259)){
var statearr_28282_28311 = state_28272__$1;
(statearr_28282_28311[(1)] = (13));

} else {
var statearr_28283_28312 = state_28272__$1;
(statearr_28283_28312[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28273 === (2))){
var inst_28235 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_28236 = (0);
var state_28272__$1 = (function (){var statearr_28284 = state_28272;
(statearr_28284[(9)] = inst_28235);

(statearr_28284[(7)] = inst_28236);

return statearr_28284;
})();
var statearr_28285_28313 = state_28272__$1;
(statearr_28285_28313[(2)] = null);

(statearr_28285_28313[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28273 === (11))){
var inst_28236 = (state_28272[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_28272,(10),Object,null,(9));
var inst_28245 = chs__$1.call(null,inst_28236);
var inst_28246 = done.call(null,inst_28236);
var inst_28247 = cljs.core.async.take_BANG_.call(null,inst_28245,inst_28246);
var state_28272__$1 = state_28272;
var statearr_28286_28314 = state_28272__$1;
(statearr_28286_28314[(2)] = inst_28247);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28272__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28273 === (9))){
var inst_28236 = (state_28272[(7)]);
var inst_28249 = (state_28272[(2)]);
var inst_28250 = (inst_28236 + (1));
var inst_28236__$1 = inst_28250;
var state_28272__$1 = (function (){var statearr_28287 = state_28272;
(statearr_28287[(10)] = inst_28249);

(statearr_28287[(7)] = inst_28236__$1);

return statearr_28287;
})();
var statearr_28288_28315 = state_28272__$1;
(statearr_28288_28315[(2)] = null);

(statearr_28288_28315[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28273 === (5))){
var inst_28256 = (state_28272[(2)]);
var state_28272__$1 = (function (){var statearr_28289 = state_28272;
(statearr_28289[(11)] = inst_28256);

return statearr_28289;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28272__$1,(12),dchan);
} else {
if((state_val_28273 === (14))){
var inst_28258 = (state_28272[(8)]);
var inst_28263 = cljs.core.apply.call(null,f,inst_28258);
var state_28272__$1 = state_28272;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28272__$1,(16),out,inst_28263);
} else {
if((state_val_28273 === (16))){
var inst_28265 = (state_28272[(2)]);
var state_28272__$1 = (function (){var statearr_28290 = state_28272;
(statearr_28290[(12)] = inst_28265);

return statearr_28290;
})();
var statearr_28291_28316 = state_28272__$1;
(statearr_28291_28316[(2)] = null);

(statearr_28291_28316[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28273 === (10))){
var inst_28240 = (state_28272[(2)]);
var inst_28241 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_28272__$1 = (function (){var statearr_28292 = state_28272;
(statearr_28292[(13)] = inst_28240);

return statearr_28292;
})();
var statearr_28293_28317 = state_28272__$1;
(statearr_28293_28317[(2)] = inst_28241);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28272__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28273 === (8))){
var inst_28254 = (state_28272[(2)]);
var state_28272__$1 = state_28272;
var statearr_28294_28318 = state_28272__$1;
(statearr_28294_28318[(2)] = inst_28254);

(statearr_28294_28318[(1)] = (5));


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
});})(c__21116__auto___28303,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__21054__auto__,c__21116__auto___28303,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__21055__auto__ = null;
var cljs$core$async$state_machine__21055__auto____0 = (function (){
var statearr_28298 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28298[(0)] = cljs$core$async$state_machine__21055__auto__);

(statearr_28298[(1)] = (1));

return statearr_28298;
});
var cljs$core$async$state_machine__21055__auto____1 = (function (state_28272){
while(true){
var ret_value__21056__auto__ = (function (){try{while(true){
var result__21057__auto__ = switch__21054__auto__.call(null,state_28272);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21057__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21057__auto__;
}
break;
}
}catch (e28299){if((e28299 instanceof Object)){
var ex__21058__auto__ = e28299;
var statearr_28300_28319 = state_28272;
(statearr_28300_28319[(5)] = ex__21058__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28272);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28299;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21056__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28320 = state_28272;
state_28272 = G__28320;
continue;
} else {
return ret_value__21056__auto__;
}
break;
}
});
cljs$core$async$state_machine__21055__auto__ = function(state_28272){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21055__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21055__auto____1.call(this,state_28272);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21055__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21055__auto____0;
cljs$core$async$state_machine__21055__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21055__auto____1;
return cljs$core$async$state_machine__21055__auto__;
})()
;})(switch__21054__auto__,c__21116__auto___28303,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__21118__auto__ = (function (){var statearr_28301 = f__21117__auto__.call(null);
(statearr_28301[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21116__auto___28303);

return statearr_28301;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21118__auto__);
});})(c__21116__auto___28303,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;
/**
 * Takes a collection of source channels and returns a channel which
 * contains all values taken from them. The returned channel will be
 * unbuffered by default, or a buf-or-n can be supplied. The channel
 * will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(){
var G__28323 = arguments.length;
switch (G__28323) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21116__auto___28378 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21116__auto___28378,out){
return (function (){
var f__21117__auto__ = (function (){var switch__21054__auto__ = ((function (c__21116__auto___28378,out){
return (function (state_28353){
var state_val_28354 = (state_28353[(1)]);
if((state_val_28354 === (7))){
var inst_28333 = (state_28353[(7)]);
var inst_28332 = (state_28353[(8)]);
var inst_28332__$1 = (state_28353[(2)]);
var inst_28333__$1 = cljs.core.nth.call(null,inst_28332__$1,(0),null);
var inst_28334 = cljs.core.nth.call(null,inst_28332__$1,(1),null);
var inst_28335 = (inst_28333__$1 == null);
var state_28353__$1 = (function (){var statearr_28355 = state_28353;
(statearr_28355[(7)] = inst_28333__$1);

(statearr_28355[(9)] = inst_28334);

(statearr_28355[(8)] = inst_28332__$1);

return statearr_28355;
})();
if(cljs.core.truth_(inst_28335)){
var statearr_28356_28379 = state_28353__$1;
(statearr_28356_28379[(1)] = (8));

} else {
var statearr_28357_28380 = state_28353__$1;
(statearr_28357_28380[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28354 === (1))){
var inst_28324 = cljs.core.vec.call(null,chs);
var inst_28325 = inst_28324;
var state_28353__$1 = (function (){var statearr_28358 = state_28353;
(statearr_28358[(10)] = inst_28325);

return statearr_28358;
})();
var statearr_28359_28381 = state_28353__$1;
(statearr_28359_28381[(2)] = null);

(statearr_28359_28381[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28354 === (4))){
var inst_28325 = (state_28353[(10)]);
var state_28353__$1 = state_28353;
return cljs.core.async.ioc_alts_BANG_.call(null,state_28353__$1,(7),inst_28325);
} else {
if((state_val_28354 === (6))){
var inst_28349 = (state_28353[(2)]);
var state_28353__$1 = state_28353;
var statearr_28360_28382 = state_28353__$1;
(statearr_28360_28382[(2)] = inst_28349);

(statearr_28360_28382[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28354 === (3))){
var inst_28351 = (state_28353[(2)]);
var state_28353__$1 = state_28353;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28353__$1,inst_28351);
} else {
if((state_val_28354 === (2))){
var inst_28325 = (state_28353[(10)]);
var inst_28327 = cljs.core.count.call(null,inst_28325);
var inst_28328 = (inst_28327 > (0));
var state_28353__$1 = state_28353;
if(cljs.core.truth_(inst_28328)){
var statearr_28362_28383 = state_28353__$1;
(statearr_28362_28383[(1)] = (4));

} else {
var statearr_28363_28384 = state_28353__$1;
(statearr_28363_28384[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28354 === (11))){
var inst_28325 = (state_28353[(10)]);
var inst_28342 = (state_28353[(2)]);
var tmp28361 = inst_28325;
var inst_28325__$1 = tmp28361;
var state_28353__$1 = (function (){var statearr_28364 = state_28353;
(statearr_28364[(11)] = inst_28342);

(statearr_28364[(10)] = inst_28325__$1);

return statearr_28364;
})();
var statearr_28365_28385 = state_28353__$1;
(statearr_28365_28385[(2)] = null);

(statearr_28365_28385[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28354 === (9))){
var inst_28333 = (state_28353[(7)]);
var state_28353__$1 = state_28353;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28353__$1,(11),out,inst_28333);
} else {
if((state_val_28354 === (5))){
var inst_28347 = cljs.core.async.close_BANG_.call(null,out);
var state_28353__$1 = state_28353;
var statearr_28366_28386 = state_28353__$1;
(statearr_28366_28386[(2)] = inst_28347);

(statearr_28366_28386[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28354 === (10))){
var inst_28345 = (state_28353[(2)]);
var state_28353__$1 = state_28353;
var statearr_28367_28387 = state_28353__$1;
(statearr_28367_28387[(2)] = inst_28345);

(statearr_28367_28387[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28354 === (8))){
var inst_28333 = (state_28353[(7)]);
var inst_28334 = (state_28353[(9)]);
var inst_28325 = (state_28353[(10)]);
var inst_28332 = (state_28353[(8)]);
var inst_28337 = (function (){var cs = inst_28325;
var vec__28330 = inst_28332;
var v = inst_28333;
var c = inst_28334;
return ((function (cs,vec__28330,v,c,inst_28333,inst_28334,inst_28325,inst_28332,state_val_28354,c__21116__auto___28378,out){
return (function (p1__28321_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__28321_SHARP_);
});
;})(cs,vec__28330,v,c,inst_28333,inst_28334,inst_28325,inst_28332,state_val_28354,c__21116__auto___28378,out))
})();
var inst_28338 = cljs.core.filterv.call(null,inst_28337,inst_28325);
var inst_28325__$1 = inst_28338;
var state_28353__$1 = (function (){var statearr_28368 = state_28353;
(statearr_28368[(10)] = inst_28325__$1);

return statearr_28368;
})();
var statearr_28369_28388 = state_28353__$1;
(statearr_28369_28388[(2)] = null);

(statearr_28369_28388[(1)] = (2));


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
});})(c__21116__auto___28378,out))
;
return ((function (switch__21054__auto__,c__21116__auto___28378,out){
return (function() {
var cljs$core$async$state_machine__21055__auto__ = null;
var cljs$core$async$state_machine__21055__auto____0 = (function (){
var statearr_28373 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28373[(0)] = cljs$core$async$state_machine__21055__auto__);

(statearr_28373[(1)] = (1));

return statearr_28373;
});
var cljs$core$async$state_machine__21055__auto____1 = (function (state_28353){
while(true){
var ret_value__21056__auto__ = (function (){try{while(true){
var result__21057__auto__ = switch__21054__auto__.call(null,state_28353);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21057__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21057__auto__;
}
break;
}
}catch (e28374){if((e28374 instanceof Object)){
var ex__21058__auto__ = e28374;
var statearr_28375_28389 = state_28353;
(statearr_28375_28389[(5)] = ex__21058__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28353);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28374;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21056__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28390 = state_28353;
state_28353 = G__28390;
continue;
} else {
return ret_value__21056__auto__;
}
break;
}
});
cljs$core$async$state_machine__21055__auto__ = function(state_28353){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21055__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21055__auto____1.call(this,state_28353);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21055__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21055__auto____0;
cljs$core$async$state_machine__21055__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21055__auto____1;
return cljs$core$async$state_machine__21055__auto__;
})()
;})(switch__21054__auto__,c__21116__auto___28378,out))
})();
var state__21118__auto__ = (function (){var statearr_28376 = f__21117__auto__.call(null);
(statearr_28376[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21116__auto___28378);

return statearr_28376;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21118__auto__);
});})(c__21116__auto___28378,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel containing the single (collection) result of the
 * items taken from the channel conjoined to the supplied
 * collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 * The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(){
var G__28392 = arguments.length;
switch (G__28392) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21116__auto___28440 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21116__auto___28440,out){
return (function (){
var f__21117__auto__ = (function (){var switch__21054__auto__ = ((function (c__21116__auto___28440,out){
return (function (state_28416){
var state_val_28417 = (state_28416[(1)]);
if((state_val_28417 === (7))){
var inst_28398 = (state_28416[(7)]);
var inst_28398__$1 = (state_28416[(2)]);
var inst_28399 = (inst_28398__$1 == null);
var inst_28400 = cljs.core.not.call(null,inst_28399);
var state_28416__$1 = (function (){var statearr_28418 = state_28416;
(statearr_28418[(7)] = inst_28398__$1);

return statearr_28418;
})();
if(inst_28400){
var statearr_28419_28441 = state_28416__$1;
(statearr_28419_28441[(1)] = (8));

} else {
var statearr_28420_28442 = state_28416__$1;
(statearr_28420_28442[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28417 === (1))){
var inst_28393 = (0);
var state_28416__$1 = (function (){var statearr_28421 = state_28416;
(statearr_28421[(8)] = inst_28393);

return statearr_28421;
})();
var statearr_28422_28443 = state_28416__$1;
(statearr_28422_28443[(2)] = null);

(statearr_28422_28443[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28417 === (4))){
var state_28416__$1 = state_28416;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28416__$1,(7),ch);
} else {
if((state_val_28417 === (6))){
var inst_28411 = (state_28416[(2)]);
var state_28416__$1 = state_28416;
var statearr_28423_28444 = state_28416__$1;
(statearr_28423_28444[(2)] = inst_28411);

(statearr_28423_28444[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28417 === (3))){
var inst_28413 = (state_28416[(2)]);
var inst_28414 = cljs.core.async.close_BANG_.call(null,out);
var state_28416__$1 = (function (){var statearr_28424 = state_28416;
(statearr_28424[(9)] = inst_28413);

return statearr_28424;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28416__$1,inst_28414);
} else {
if((state_val_28417 === (2))){
var inst_28393 = (state_28416[(8)]);
var inst_28395 = (inst_28393 < n);
var state_28416__$1 = state_28416;
if(cljs.core.truth_(inst_28395)){
var statearr_28425_28445 = state_28416__$1;
(statearr_28425_28445[(1)] = (4));

} else {
var statearr_28426_28446 = state_28416__$1;
(statearr_28426_28446[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28417 === (11))){
var inst_28393 = (state_28416[(8)]);
var inst_28403 = (state_28416[(2)]);
var inst_28404 = (inst_28393 + (1));
var inst_28393__$1 = inst_28404;
var state_28416__$1 = (function (){var statearr_28427 = state_28416;
(statearr_28427[(10)] = inst_28403);

(statearr_28427[(8)] = inst_28393__$1);

return statearr_28427;
})();
var statearr_28428_28447 = state_28416__$1;
(statearr_28428_28447[(2)] = null);

(statearr_28428_28447[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28417 === (9))){
var state_28416__$1 = state_28416;
var statearr_28429_28448 = state_28416__$1;
(statearr_28429_28448[(2)] = null);

(statearr_28429_28448[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28417 === (5))){
var state_28416__$1 = state_28416;
var statearr_28430_28449 = state_28416__$1;
(statearr_28430_28449[(2)] = null);

(statearr_28430_28449[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28417 === (10))){
var inst_28408 = (state_28416[(2)]);
var state_28416__$1 = state_28416;
var statearr_28431_28450 = state_28416__$1;
(statearr_28431_28450[(2)] = inst_28408);

(statearr_28431_28450[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28417 === (8))){
var inst_28398 = (state_28416[(7)]);
var state_28416__$1 = state_28416;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28416__$1,(11),out,inst_28398);
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
});})(c__21116__auto___28440,out))
;
return ((function (switch__21054__auto__,c__21116__auto___28440,out){
return (function() {
var cljs$core$async$state_machine__21055__auto__ = null;
var cljs$core$async$state_machine__21055__auto____0 = (function (){
var statearr_28435 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28435[(0)] = cljs$core$async$state_machine__21055__auto__);

(statearr_28435[(1)] = (1));

return statearr_28435;
});
var cljs$core$async$state_machine__21055__auto____1 = (function (state_28416){
while(true){
var ret_value__21056__auto__ = (function (){try{while(true){
var result__21057__auto__ = switch__21054__auto__.call(null,state_28416);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21057__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21057__auto__;
}
break;
}
}catch (e28436){if((e28436 instanceof Object)){
var ex__21058__auto__ = e28436;
var statearr_28437_28451 = state_28416;
(statearr_28437_28451[(5)] = ex__21058__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28416);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28436;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21056__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28452 = state_28416;
state_28416 = G__28452;
continue;
} else {
return ret_value__21056__auto__;
}
break;
}
});
cljs$core$async$state_machine__21055__auto__ = function(state_28416){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21055__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21055__auto____1.call(this,state_28416);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21055__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21055__auto____0;
cljs$core$async$state_machine__21055__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21055__auto____1;
return cljs$core$async$state_machine__21055__auto__;
})()
;})(switch__21054__auto__,c__21116__auto___28440,out))
})();
var state__21118__auto__ = (function (){var statearr_28438 = f__21117__auto__.call(null);
(statearr_28438[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21116__auto___28440);

return statearr_28438;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21118__auto__);
});})(c__21116__auto___28440,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t28460 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t28460 = (function (map_LT_,f,ch,meta28461){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta28461 = meta28461;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t28460.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28462,meta28461__$1){
var self__ = this;
var _28462__$1 = this;
return (new cljs.core.async.t28460(self__.map_LT_,self__.f,self__.ch,meta28461__$1));
});

cljs.core.async.t28460.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28462){
var self__ = this;
var _28462__$1 = this;
return self__.meta28461;
});

cljs.core.async.t28460.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t28460.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t28460.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t28460.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t28460.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t28463 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t28463 = (function (map_LT_,f,ch,meta28461,_,fn1,meta28464){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta28461 = meta28461;
this._ = _;
this.fn1 = fn1;
this.meta28464 = meta28464;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t28463.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_28465,meta28464__$1){
var self__ = this;
var _28465__$1 = this;
return (new cljs.core.async.t28463(self__.map_LT_,self__.f,self__.ch,self__.meta28461,self__._,self__.fn1,meta28464__$1));
});})(___$1))
;

cljs.core.async.t28463.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_28465){
var self__ = this;
var _28465__$1 = this;
return self__.meta28464;
});})(___$1))
;

cljs.core.async.t28463.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t28463.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t28463.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__28453_SHARP_){
return f1.call(null,(((p1__28453_SHARP_ == null))?null:self__.f.call(null,p1__28453_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t28463.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta28461","meta28461",-76029143,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta28464","meta28464",830195362,null)], null);
});})(___$1))
;

cljs.core.async.t28463.cljs$lang$type = true;

cljs.core.async.t28463.cljs$lang$ctorStr = "cljs.core.async/t28463";

cljs.core.async.t28463.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__18685__auto__,writer__18686__auto__,opt__18687__auto__){
return cljs.core._write.call(null,writer__18686__auto__,"cljs.core.async/t28463");
});})(___$1))
;

cljs.core.async.__GT_t28463 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t28463(map_LT___$1,f__$1,ch__$1,meta28461__$1,___$2,fn1__$1,meta28464){
return (new cljs.core.async.t28463(map_LT___$1,f__$1,ch__$1,meta28461__$1,___$2,fn1__$1,meta28464));
});})(___$1))
;

}

return (new cljs.core.async.t28463(self__.map_LT_,self__.f,self__.ch,self__.meta28461,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__18094__auto__ = ret;
if(cljs.core.truth_(and__18094__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__18094__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t28460.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t28460.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t28460.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta28461","meta28461",-76029143,null)], null);
});

cljs.core.async.t28460.cljs$lang$type = true;

cljs.core.async.t28460.cljs$lang$ctorStr = "cljs.core.async/t28460";

cljs.core.async.t28460.cljs$lang$ctorPrWriter = (function (this__18685__auto__,writer__18686__auto__,opt__18687__auto__){
return cljs.core._write.call(null,writer__18686__auto__,"cljs.core.async/t28460");
});

cljs.core.async.__GT_t28460 = (function cljs$core$async$map_LT__$___GT_t28460(map_LT___$1,f__$1,ch__$1,meta28461){
return (new cljs.core.async.t28460(map_LT___$1,f__$1,ch__$1,meta28461));
});

}

return (new cljs.core.async.t28460(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t28469 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t28469 = (function (map_GT_,f,ch,meta28470){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta28470 = meta28470;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t28469.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28471,meta28470__$1){
var self__ = this;
var _28471__$1 = this;
return (new cljs.core.async.t28469(self__.map_GT_,self__.f,self__.ch,meta28470__$1));
});

cljs.core.async.t28469.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28471){
var self__ = this;
var _28471__$1 = this;
return self__.meta28470;
});

cljs.core.async.t28469.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t28469.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t28469.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t28469.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t28469.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t28469.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t28469.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta28470","meta28470",1929281005,null)], null);
});

cljs.core.async.t28469.cljs$lang$type = true;

cljs.core.async.t28469.cljs$lang$ctorStr = "cljs.core.async/t28469";

cljs.core.async.t28469.cljs$lang$ctorPrWriter = (function (this__18685__auto__,writer__18686__auto__,opt__18687__auto__){
return cljs.core._write.call(null,writer__18686__auto__,"cljs.core.async/t28469");
});

cljs.core.async.__GT_t28469 = (function cljs$core$async$map_GT__$___GT_t28469(map_GT___$1,f__$1,ch__$1,meta28470){
return (new cljs.core.async.t28469(map_GT___$1,f__$1,ch__$1,meta28470));
});

}

return (new cljs.core.async.t28469(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t28475 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t28475 = (function (filter_GT_,p,ch,meta28476){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta28476 = meta28476;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t28475.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28477,meta28476__$1){
var self__ = this;
var _28477__$1 = this;
return (new cljs.core.async.t28475(self__.filter_GT_,self__.p,self__.ch,meta28476__$1));
});

cljs.core.async.t28475.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28477){
var self__ = this;
var _28477__$1 = this;
return self__.meta28476;
});

cljs.core.async.t28475.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t28475.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t28475.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t28475.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t28475.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t28475.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t28475.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t28475.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta28476","meta28476",502750269,null)], null);
});

cljs.core.async.t28475.cljs$lang$type = true;

cljs.core.async.t28475.cljs$lang$ctorStr = "cljs.core.async/t28475";

cljs.core.async.t28475.cljs$lang$ctorPrWriter = (function (this__18685__auto__,writer__18686__auto__,opt__18687__auto__){
return cljs.core._write.call(null,writer__18686__auto__,"cljs.core.async/t28475");
});

cljs.core.async.__GT_t28475 = (function cljs$core$async$filter_GT__$___GT_t28475(filter_GT___$1,p__$1,ch__$1,meta28476){
return (new cljs.core.async.t28475(filter_GT___$1,p__$1,ch__$1,meta28476));
});

}

return (new cljs.core.async.t28475(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(){
var G__28479 = arguments.length;
switch (G__28479) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21116__auto___28522 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21116__auto___28522,out){
return (function (){
var f__21117__auto__ = (function (){var switch__21054__auto__ = ((function (c__21116__auto___28522,out){
return (function (state_28500){
var state_val_28501 = (state_28500[(1)]);
if((state_val_28501 === (7))){
var inst_28496 = (state_28500[(2)]);
var state_28500__$1 = state_28500;
var statearr_28502_28523 = state_28500__$1;
(statearr_28502_28523[(2)] = inst_28496);

(statearr_28502_28523[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28501 === (1))){
var state_28500__$1 = state_28500;
var statearr_28503_28524 = state_28500__$1;
(statearr_28503_28524[(2)] = null);

(statearr_28503_28524[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28501 === (4))){
var inst_28482 = (state_28500[(7)]);
var inst_28482__$1 = (state_28500[(2)]);
var inst_28483 = (inst_28482__$1 == null);
var state_28500__$1 = (function (){var statearr_28504 = state_28500;
(statearr_28504[(7)] = inst_28482__$1);

return statearr_28504;
})();
if(cljs.core.truth_(inst_28483)){
var statearr_28505_28525 = state_28500__$1;
(statearr_28505_28525[(1)] = (5));

} else {
var statearr_28506_28526 = state_28500__$1;
(statearr_28506_28526[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28501 === (6))){
var inst_28482 = (state_28500[(7)]);
var inst_28487 = p.call(null,inst_28482);
var state_28500__$1 = state_28500;
if(cljs.core.truth_(inst_28487)){
var statearr_28507_28527 = state_28500__$1;
(statearr_28507_28527[(1)] = (8));

} else {
var statearr_28508_28528 = state_28500__$1;
(statearr_28508_28528[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28501 === (3))){
var inst_28498 = (state_28500[(2)]);
var state_28500__$1 = state_28500;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28500__$1,inst_28498);
} else {
if((state_val_28501 === (2))){
var state_28500__$1 = state_28500;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28500__$1,(4),ch);
} else {
if((state_val_28501 === (11))){
var inst_28490 = (state_28500[(2)]);
var state_28500__$1 = state_28500;
var statearr_28509_28529 = state_28500__$1;
(statearr_28509_28529[(2)] = inst_28490);

(statearr_28509_28529[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28501 === (9))){
var state_28500__$1 = state_28500;
var statearr_28510_28530 = state_28500__$1;
(statearr_28510_28530[(2)] = null);

(statearr_28510_28530[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28501 === (5))){
var inst_28485 = cljs.core.async.close_BANG_.call(null,out);
var state_28500__$1 = state_28500;
var statearr_28511_28531 = state_28500__$1;
(statearr_28511_28531[(2)] = inst_28485);

(statearr_28511_28531[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28501 === (10))){
var inst_28493 = (state_28500[(2)]);
var state_28500__$1 = (function (){var statearr_28512 = state_28500;
(statearr_28512[(8)] = inst_28493);

return statearr_28512;
})();
var statearr_28513_28532 = state_28500__$1;
(statearr_28513_28532[(2)] = null);

(statearr_28513_28532[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28501 === (8))){
var inst_28482 = (state_28500[(7)]);
var state_28500__$1 = state_28500;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28500__$1,(11),out,inst_28482);
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
});})(c__21116__auto___28522,out))
;
return ((function (switch__21054__auto__,c__21116__auto___28522,out){
return (function() {
var cljs$core$async$state_machine__21055__auto__ = null;
var cljs$core$async$state_machine__21055__auto____0 = (function (){
var statearr_28517 = [null,null,null,null,null,null,null,null,null];
(statearr_28517[(0)] = cljs$core$async$state_machine__21055__auto__);

(statearr_28517[(1)] = (1));

return statearr_28517;
});
var cljs$core$async$state_machine__21055__auto____1 = (function (state_28500){
while(true){
var ret_value__21056__auto__ = (function (){try{while(true){
var result__21057__auto__ = switch__21054__auto__.call(null,state_28500);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21057__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21057__auto__;
}
break;
}
}catch (e28518){if((e28518 instanceof Object)){
var ex__21058__auto__ = e28518;
var statearr_28519_28533 = state_28500;
(statearr_28519_28533[(5)] = ex__21058__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28500);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28518;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21056__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28534 = state_28500;
state_28500 = G__28534;
continue;
} else {
return ret_value__21056__auto__;
}
break;
}
});
cljs$core$async$state_machine__21055__auto__ = function(state_28500){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21055__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21055__auto____1.call(this,state_28500);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21055__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21055__auto____0;
cljs$core$async$state_machine__21055__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21055__auto____1;
return cljs$core$async$state_machine__21055__auto__;
})()
;})(switch__21054__auto__,c__21116__auto___28522,out))
})();
var state__21118__auto__ = (function (){var statearr_28520 = f__21117__auto__.call(null);
(statearr_28520[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21116__auto___28522);

return statearr_28520;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21118__auto__);
});})(c__21116__auto___28522,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(){
var G__28536 = arguments.length;
switch (G__28536) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__21116__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21116__auto__){
return (function (){
var f__21117__auto__ = (function (){var switch__21054__auto__ = ((function (c__21116__auto__){
return (function (state_28703){
var state_val_28704 = (state_28703[(1)]);
if((state_val_28704 === (7))){
var inst_28699 = (state_28703[(2)]);
var state_28703__$1 = state_28703;
var statearr_28705_28746 = state_28703__$1;
(statearr_28705_28746[(2)] = inst_28699);

(statearr_28705_28746[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28704 === (20))){
var inst_28669 = (state_28703[(7)]);
var inst_28680 = (state_28703[(2)]);
var inst_28681 = cljs.core.next.call(null,inst_28669);
var inst_28655 = inst_28681;
var inst_28656 = null;
var inst_28657 = (0);
var inst_28658 = (0);
var state_28703__$1 = (function (){var statearr_28706 = state_28703;
(statearr_28706[(8)] = inst_28680);

(statearr_28706[(9)] = inst_28656);

(statearr_28706[(10)] = inst_28655);

(statearr_28706[(11)] = inst_28658);

(statearr_28706[(12)] = inst_28657);

return statearr_28706;
})();
var statearr_28707_28747 = state_28703__$1;
(statearr_28707_28747[(2)] = null);

(statearr_28707_28747[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28704 === (1))){
var state_28703__$1 = state_28703;
var statearr_28708_28748 = state_28703__$1;
(statearr_28708_28748[(2)] = null);

(statearr_28708_28748[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28704 === (4))){
var inst_28644 = (state_28703[(13)]);
var inst_28644__$1 = (state_28703[(2)]);
var inst_28645 = (inst_28644__$1 == null);
var state_28703__$1 = (function (){var statearr_28709 = state_28703;
(statearr_28709[(13)] = inst_28644__$1);

return statearr_28709;
})();
if(cljs.core.truth_(inst_28645)){
var statearr_28710_28749 = state_28703__$1;
(statearr_28710_28749[(1)] = (5));

} else {
var statearr_28711_28750 = state_28703__$1;
(statearr_28711_28750[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28704 === (15))){
var state_28703__$1 = state_28703;
var statearr_28715_28751 = state_28703__$1;
(statearr_28715_28751[(2)] = null);

(statearr_28715_28751[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28704 === (21))){
var state_28703__$1 = state_28703;
var statearr_28716_28752 = state_28703__$1;
(statearr_28716_28752[(2)] = null);

(statearr_28716_28752[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28704 === (13))){
var inst_28656 = (state_28703[(9)]);
var inst_28655 = (state_28703[(10)]);
var inst_28658 = (state_28703[(11)]);
var inst_28657 = (state_28703[(12)]);
var inst_28665 = (state_28703[(2)]);
var inst_28666 = (inst_28658 + (1));
var tmp28712 = inst_28656;
var tmp28713 = inst_28655;
var tmp28714 = inst_28657;
var inst_28655__$1 = tmp28713;
var inst_28656__$1 = tmp28712;
var inst_28657__$1 = tmp28714;
var inst_28658__$1 = inst_28666;
var state_28703__$1 = (function (){var statearr_28717 = state_28703;
(statearr_28717[(14)] = inst_28665);

(statearr_28717[(9)] = inst_28656__$1);

(statearr_28717[(10)] = inst_28655__$1);

(statearr_28717[(11)] = inst_28658__$1);

(statearr_28717[(12)] = inst_28657__$1);

return statearr_28717;
})();
var statearr_28718_28753 = state_28703__$1;
(statearr_28718_28753[(2)] = null);

(statearr_28718_28753[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28704 === (22))){
var state_28703__$1 = state_28703;
var statearr_28719_28754 = state_28703__$1;
(statearr_28719_28754[(2)] = null);

(statearr_28719_28754[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28704 === (6))){
var inst_28644 = (state_28703[(13)]);
var inst_28653 = f.call(null,inst_28644);
var inst_28654 = cljs.core.seq.call(null,inst_28653);
var inst_28655 = inst_28654;
var inst_28656 = null;
var inst_28657 = (0);
var inst_28658 = (0);
var state_28703__$1 = (function (){var statearr_28720 = state_28703;
(statearr_28720[(9)] = inst_28656);

(statearr_28720[(10)] = inst_28655);

(statearr_28720[(11)] = inst_28658);

(statearr_28720[(12)] = inst_28657);

return statearr_28720;
})();
var statearr_28721_28755 = state_28703__$1;
(statearr_28721_28755[(2)] = null);

(statearr_28721_28755[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28704 === (17))){
var inst_28669 = (state_28703[(7)]);
var inst_28673 = cljs.core.chunk_first.call(null,inst_28669);
var inst_28674 = cljs.core.chunk_rest.call(null,inst_28669);
var inst_28675 = cljs.core.count.call(null,inst_28673);
var inst_28655 = inst_28674;
var inst_28656 = inst_28673;
var inst_28657 = inst_28675;
var inst_28658 = (0);
var state_28703__$1 = (function (){var statearr_28722 = state_28703;
(statearr_28722[(9)] = inst_28656);

(statearr_28722[(10)] = inst_28655);

(statearr_28722[(11)] = inst_28658);

(statearr_28722[(12)] = inst_28657);

return statearr_28722;
})();
var statearr_28723_28756 = state_28703__$1;
(statearr_28723_28756[(2)] = null);

(statearr_28723_28756[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28704 === (3))){
var inst_28701 = (state_28703[(2)]);
var state_28703__$1 = state_28703;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28703__$1,inst_28701);
} else {
if((state_val_28704 === (12))){
var inst_28689 = (state_28703[(2)]);
var state_28703__$1 = state_28703;
var statearr_28724_28757 = state_28703__$1;
(statearr_28724_28757[(2)] = inst_28689);

(statearr_28724_28757[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28704 === (2))){
var state_28703__$1 = state_28703;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28703__$1,(4),in$);
} else {
if((state_val_28704 === (23))){
var inst_28697 = (state_28703[(2)]);
var state_28703__$1 = state_28703;
var statearr_28725_28758 = state_28703__$1;
(statearr_28725_28758[(2)] = inst_28697);

(statearr_28725_28758[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28704 === (19))){
var inst_28684 = (state_28703[(2)]);
var state_28703__$1 = state_28703;
var statearr_28726_28759 = state_28703__$1;
(statearr_28726_28759[(2)] = inst_28684);

(statearr_28726_28759[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28704 === (11))){
var inst_28655 = (state_28703[(10)]);
var inst_28669 = (state_28703[(7)]);
var inst_28669__$1 = cljs.core.seq.call(null,inst_28655);
var state_28703__$1 = (function (){var statearr_28727 = state_28703;
(statearr_28727[(7)] = inst_28669__$1);

return statearr_28727;
})();
if(inst_28669__$1){
var statearr_28728_28760 = state_28703__$1;
(statearr_28728_28760[(1)] = (14));

} else {
var statearr_28729_28761 = state_28703__$1;
(statearr_28729_28761[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28704 === (9))){
var inst_28691 = (state_28703[(2)]);
var inst_28692 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_28703__$1 = (function (){var statearr_28730 = state_28703;
(statearr_28730[(15)] = inst_28691);

return statearr_28730;
})();
if(cljs.core.truth_(inst_28692)){
var statearr_28731_28762 = state_28703__$1;
(statearr_28731_28762[(1)] = (21));

} else {
var statearr_28732_28763 = state_28703__$1;
(statearr_28732_28763[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28704 === (5))){
var inst_28647 = cljs.core.async.close_BANG_.call(null,out);
var state_28703__$1 = state_28703;
var statearr_28733_28764 = state_28703__$1;
(statearr_28733_28764[(2)] = inst_28647);

(statearr_28733_28764[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28704 === (14))){
var inst_28669 = (state_28703[(7)]);
var inst_28671 = cljs.core.chunked_seq_QMARK_.call(null,inst_28669);
var state_28703__$1 = state_28703;
if(inst_28671){
var statearr_28734_28765 = state_28703__$1;
(statearr_28734_28765[(1)] = (17));

} else {
var statearr_28735_28766 = state_28703__$1;
(statearr_28735_28766[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28704 === (16))){
var inst_28687 = (state_28703[(2)]);
var state_28703__$1 = state_28703;
var statearr_28736_28767 = state_28703__$1;
(statearr_28736_28767[(2)] = inst_28687);

(statearr_28736_28767[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28704 === (10))){
var inst_28656 = (state_28703[(9)]);
var inst_28658 = (state_28703[(11)]);
var inst_28663 = cljs.core._nth.call(null,inst_28656,inst_28658);
var state_28703__$1 = state_28703;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28703__$1,(13),out,inst_28663);
} else {
if((state_val_28704 === (18))){
var inst_28669 = (state_28703[(7)]);
var inst_28678 = cljs.core.first.call(null,inst_28669);
var state_28703__$1 = state_28703;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28703__$1,(20),out,inst_28678);
} else {
if((state_val_28704 === (8))){
var inst_28658 = (state_28703[(11)]);
var inst_28657 = (state_28703[(12)]);
var inst_28660 = (inst_28658 < inst_28657);
var inst_28661 = inst_28660;
var state_28703__$1 = state_28703;
if(cljs.core.truth_(inst_28661)){
var statearr_28737_28768 = state_28703__$1;
(statearr_28737_28768[(1)] = (10));

} else {
var statearr_28738_28769 = state_28703__$1;
(statearr_28738_28769[(1)] = (11));

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
});})(c__21116__auto__))
;
return ((function (switch__21054__auto__,c__21116__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__21055__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__21055__auto____0 = (function (){
var statearr_28742 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28742[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__21055__auto__);

(statearr_28742[(1)] = (1));

return statearr_28742;
});
var cljs$core$async$mapcat_STAR__$_state_machine__21055__auto____1 = (function (state_28703){
while(true){
var ret_value__21056__auto__ = (function (){try{while(true){
var result__21057__auto__ = switch__21054__auto__.call(null,state_28703);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21057__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21057__auto__;
}
break;
}
}catch (e28743){if((e28743 instanceof Object)){
var ex__21058__auto__ = e28743;
var statearr_28744_28770 = state_28703;
(statearr_28744_28770[(5)] = ex__21058__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28703);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28743;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21056__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28771 = state_28703;
state_28703 = G__28771;
continue;
} else {
return ret_value__21056__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__21055__auto__ = function(state_28703){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__21055__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__21055__auto____1.call(this,state_28703);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__21055__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__21055__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__21055__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__21055__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__21055__auto__;
})()
;})(switch__21054__auto__,c__21116__auto__))
})();
var state__21118__auto__ = (function (){var statearr_28745 = f__21117__auto__.call(null);
(statearr_28745[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21116__auto__);

return statearr_28745;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21118__auto__);
});})(c__21116__auto__))
);

return c__21116__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(){
var G__28773 = arguments.length;
switch (G__28773) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(){
var G__28776 = arguments.length;
switch (G__28776) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(){
var G__28779 = arguments.length;
switch (G__28779) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21116__auto___28829 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21116__auto___28829,out){
return (function (){
var f__21117__auto__ = (function (){var switch__21054__auto__ = ((function (c__21116__auto___28829,out){
return (function (state_28803){
var state_val_28804 = (state_28803[(1)]);
if((state_val_28804 === (7))){
var inst_28798 = (state_28803[(2)]);
var state_28803__$1 = state_28803;
var statearr_28805_28830 = state_28803__$1;
(statearr_28805_28830[(2)] = inst_28798);

(statearr_28805_28830[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28804 === (1))){
var inst_28780 = null;
var state_28803__$1 = (function (){var statearr_28806 = state_28803;
(statearr_28806[(7)] = inst_28780);

return statearr_28806;
})();
var statearr_28807_28831 = state_28803__$1;
(statearr_28807_28831[(2)] = null);

(statearr_28807_28831[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28804 === (4))){
var inst_28783 = (state_28803[(8)]);
var inst_28783__$1 = (state_28803[(2)]);
var inst_28784 = (inst_28783__$1 == null);
var inst_28785 = cljs.core.not.call(null,inst_28784);
var state_28803__$1 = (function (){var statearr_28808 = state_28803;
(statearr_28808[(8)] = inst_28783__$1);

return statearr_28808;
})();
if(inst_28785){
var statearr_28809_28832 = state_28803__$1;
(statearr_28809_28832[(1)] = (5));

} else {
var statearr_28810_28833 = state_28803__$1;
(statearr_28810_28833[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28804 === (6))){
var state_28803__$1 = state_28803;
var statearr_28811_28834 = state_28803__$1;
(statearr_28811_28834[(2)] = null);

(statearr_28811_28834[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28804 === (3))){
var inst_28800 = (state_28803[(2)]);
var inst_28801 = cljs.core.async.close_BANG_.call(null,out);
var state_28803__$1 = (function (){var statearr_28812 = state_28803;
(statearr_28812[(9)] = inst_28800);

return statearr_28812;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28803__$1,inst_28801);
} else {
if((state_val_28804 === (2))){
var state_28803__$1 = state_28803;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28803__$1,(4),ch);
} else {
if((state_val_28804 === (11))){
var inst_28783 = (state_28803[(8)]);
var inst_28792 = (state_28803[(2)]);
var inst_28780 = inst_28783;
var state_28803__$1 = (function (){var statearr_28813 = state_28803;
(statearr_28813[(7)] = inst_28780);

(statearr_28813[(10)] = inst_28792);

return statearr_28813;
})();
var statearr_28814_28835 = state_28803__$1;
(statearr_28814_28835[(2)] = null);

(statearr_28814_28835[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28804 === (9))){
var inst_28783 = (state_28803[(8)]);
var state_28803__$1 = state_28803;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28803__$1,(11),out,inst_28783);
} else {
if((state_val_28804 === (5))){
var inst_28780 = (state_28803[(7)]);
var inst_28783 = (state_28803[(8)]);
var inst_28787 = cljs.core._EQ_.call(null,inst_28783,inst_28780);
var state_28803__$1 = state_28803;
if(inst_28787){
var statearr_28816_28836 = state_28803__$1;
(statearr_28816_28836[(1)] = (8));

} else {
var statearr_28817_28837 = state_28803__$1;
(statearr_28817_28837[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28804 === (10))){
var inst_28795 = (state_28803[(2)]);
var state_28803__$1 = state_28803;
var statearr_28818_28838 = state_28803__$1;
(statearr_28818_28838[(2)] = inst_28795);

(statearr_28818_28838[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28804 === (8))){
var inst_28780 = (state_28803[(7)]);
var tmp28815 = inst_28780;
var inst_28780__$1 = tmp28815;
var state_28803__$1 = (function (){var statearr_28819 = state_28803;
(statearr_28819[(7)] = inst_28780__$1);

return statearr_28819;
})();
var statearr_28820_28839 = state_28803__$1;
(statearr_28820_28839[(2)] = null);

(statearr_28820_28839[(1)] = (2));


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
});})(c__21116__auto___28829,out))
;
return ((function (switch__21054__auto__,c__21116__auto___28829,out){
return (function() {
var cljs$core$async$state_machine__21055__auto__ = null;
var cljs$core$async$state_machine__21055__auto____0 = (function (){
var statearr_28824 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28824[(0)] = cljs$core$async$state_machine__21055__auto__);

(statearr_28824[(1)] = (1));

return statearr_28824;
});
var cljs$core$async$state_machine__21055__auto____1 = (function (state_28803){
while(true){
var ret_value__21056__auto__ = (function (){try{while(true){
var result__21057__auto__ = switch__21054__auto__.call(null,state_28803);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21057__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21057__auto__;
}
break;
}
}catch (e28825){if((e28825 instanceof Object)){
var ex__21058__auto__ = e28825;
var statearr_28826_28840 = state_28803;
(statearr_28826_28840[(5)] = ex__21058__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28803);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28825;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21056__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28841 = state_28803;
state_28803 = G__28841;
continue;
} else {
return ret_value__21056__auto__;
}
break;
}
});
cljs$core$async$state_machine__21055__auto__ = function(state_28803){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21055__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21055__auto____1.call(this,state_28803);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21055__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21055__auto____0;
cljs$core$async$state_machine__21055__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21055__auto____1;
return cljs$core$async$state_machine__21055__auto__;
})()
;})(switch__21054__auto__,c__21116__auto___28829,out))
})();
var state__21118__auto__ = (function (){var statearr_28827 = f__21117__auto__.call(null);
(statearr_28827[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21116__auto___28829);

return statearr_28827;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21118__auto__);
});})(c__21116__auto___28829,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(){
var G__28843 = arguments.length;
switch (G__28843) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21116__auto___28912 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21116__auto___28912,out){
return (function (){
var f__21117__auto__ = (function (){var switch__21054__auto__ = ((function (c__21116__auto___28912,out){
return (function (state_28881){
var state_val_28882 = (state_28881[(1)]);
if((state_val_28882 === (7))){
var inst_28877 = (state_28881[(2)]);
var state_28881__$1 = state_28881;
var statearr_28883_28913 = state_28881__$1;
(statearr_28883_28913[(2)] = inst_28877);

(statearr_28883_28913[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28882 === (1))){
var inst_28844 = (new Array(n));
var inst_28845 = inst_28844;
var inst_28846 = (0);
var state_28881__$1 = (function (){var statearr_28884 = state_28881;
(statearr_28884[(7)] = inst_28845);

(statearr_28884[(8)] = inst_28846);

return statearr_28884;
})();
var statearr_28885_28914 = state_28881__$1;
(statearr_28885_28914[(2)] = null);

(statearr_28885_28914[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28882 === (4))){
var inst_28849 = (state_28881[(9)]);
var inst_28849__$1 = (state_28881[(2)]);
var inst_28850 = (inst_28849__$1 == null);
var inst_28851 = cljs.core.not.call(null,inst_28850);
var state_28881__$1 = (function (){var statearr_28886 = state_28881;
(statearr_28886[(9)] = inst_28849__$1);

return statearr_28886;
})();
if(inst_28851){
var statearr_28887_28915 = state_28881__$1;
(statearr_28887_28915[(1)] = (5));

} else {
var statearr_28888_28916 = state_28881__$1;
(statearr_28888_28916[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28882 === (15))){
var inst_28871 = (state_28881[(2)]);
var state_28881__$1 = state_28881;
var statearr_28889_28917 = state_28881__$1;
(statearr_28889_28917[(2)] = inst_28871);

(statearr_28889_28917[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28882 === (13))){
var state_28881__$1 = state_28881;
var statearr_28890_28918 = state_28881__$1;
(statearr_28890_28918[(2)] = null);

(statearr_28890_28918[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28882 === (6))){
var inst_28846 = (state_28881[(8)]);
var inst_28867 = (inst_28846 > (0));
var state_28881__$1 = state_28881;
if(cljs.core.truth_(inst_28867)){
var statearr_28891_28919 = state_28881__$1;
(statearr_28891_28919[(1)] = (12));

} else {
var statearr_28892_28920 = state_28881__$1;
(statearr_28892_28920[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28882 === (3))){
var inst_28879 = (state_28881[(2)]);
var state_28881__$1 = state_28881;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28881__$1,inst_28879);
} else {
if((state_val_28882 === (12))){
var inst_28845 = (state_28881[(7)]);
var inst_28869 = cljs.core.vec.call(null,inst_28845);
var state_28881__$1 = state_28881;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28881__$1,(15),out,inst_28869);
} else {
if((state_val_28882 === (2))){
var state_28881__$1 = state_28881;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28881__$1,(4),ch);
} else {
if((state_val_28882 === (11))){
var inst_28861 = (state_28881[(2)]);
var inst_28862 = (new Array(n));
var inst_28845 = inst_28862;
var inst_28846 = (0);
var state_28881__$1 = (function (){var statearr_28893 = state_28881;
(statearr_28893[(7)] = inst_28845);

(statearr_28893[(10)] = inst_28861);

(statearr_28893[(8)] = inst_28846);

return statearr_28893;
})();
var statearr_28894_28921 = state_28881__$1;
(statearr_28894_28921[(2)] = null);

(statearr_28894_28921[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28882 === (9))){
var inst_28845 = (state_28881[(7)]);
var inst_28859 = cljs.core.vec.call(null,inst_28845);
var state_28881__$1 = state_28881;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28881__$1,(11),out,inst_28859);
} else {
if((state_val_28882 === (5))){
var inst_28854 = (state_28881[(11)]);
var inst_28849 = (state_28881[(9)]);
var inst_28845 = (state_28881[(7)]);
var inst_28846 = (state_28881[(8)]);
var inst_28853 = (inst_28845[inst_28846] = inst_28849);
var inst_28854__$1 = (inst_28846 + (1));
var inst_28855 = (inst_28854__$1 < n);
var state_28881__$1 = (function (){var statearr_28895 = state_28881;
(statearr_28895[(11)] = inst_28854__$1);

(statearr_28895[(12)] = inst_28853);

return statearr_28895;
})();
if(cljs.core.truth_(inst_28855)){
var statearr_28896_28922 = state_28881__$1;
(statearr_28896_28922[(1)] = (8));

} else {
var statearr_28897_28923 = state_28881__$1;
(statearr_28897_28923[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28882 === (14))){
var inst_28874 = (state_28881[(2)]);
var inst_28875 = cljs.core.async.close_BANG_.call(null,out);
var state_28881__$1 = (function (){var statearr_28899 = state_28881;
(statearr_28899[(13)] = inst_28874);

return statearr_28899;
})();
var statearr_28900_28924 = state_28881__$1;
(statearr_28900_28924[(2)] = inst_28875);

(statearr_28900_28924[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28882 === (10))){
var inst_28865 = (state_28881[(2)]);
var state_28881__$1 = state_28881;
var statearr_28901_28925 = state_28881__$1;
(statearr_28901_28925[(2)] = inst_28865);

(statearr_28901_28925[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28882 === (8))){
var inst_28854 = (state_28881[(11)]);
var inst_28845 = (state_28881[(7)]);
var tmp28898 = inst_28845;
var inst_28845__$1 = tmp28898;
var inst_28846 = inst_28854;
var state_28881__$1 = (function (){var statearr_28902 = state_28881;
(statearr_28902[(7)] = inst_28845__$1);

(statearr_28902[(8)] = inst_28846);

return statearr_28902;
})();
var statearr_28903_28926 = state_28881__$1;
(statearr_28903_28926[(2)] = null);

(statearr_28903_28926[(1)] = (2));


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
});})(c__21116__auto___28912,out))
;
return ((function (switch__21054__auto__,c__21116__auto___28912,out){
return (function() {
var cljs$core$async$state_machine__21055__auto__ = null;
var cljs$core$async$state_machine__21055__auto____0 = (function (){
var statearr_28907 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28907[(0)] = cljs$core$async$state_machine__21055__auto__);

(statearr_28907[(1)] = (1));

return statearr_28907;
});
var cljs$core$async$state_machine__21055__auto____1 = (function (state_28881){
while(true){
var ret_value__21056__auto__ = (function (){try{while(true){
var result__21057__auto__ = switch__21054__auto__.call(null,state_28881);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21057__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21057__auto__;
}
break;
}
}catch (e28908){if((e28908 instanceof Object)){
var ex__21058__auto__ = e28908;
var statearr_28909_28927 = state_28881;
(statearr_28909_28927[(5)] = ex__21058__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28881);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28908;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21056__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28928 = state_28881;
state_28881 = G__28928;
continue;
} else {
return ret_value__21056__auto__;
}
break;
}
});
cljs$core$async$state_machine__21055__auto__ = function(state_28881){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21055__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21055__auto____1.call(this,state_28881);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21055__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21055__auto____0;
cljs$core$async$state_machine__21055__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21055__auto____1;
return cljs$core$async$state_machine__21055__auto__;
})()
;})(switch__21054__auto__,c__21116__auto___28912,out))
})();
var state__21118__auto__ = (function (){var statearr_28910 = f__21117__auto__.call(null);
(statearr_28910[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21116__auto___28912);

return statearr_28910;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21118__auto__);
});})(c__21116__auto___28912,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(){
var G__28930 = arguments.length;
switch (G__28930) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21116__auto___29003 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21116__auto___29003,out){
return (function (){
var f__21117__auto__ = (function (){var switch__21054__auto__ = ((function (c__21116__auto___29003,out){
return (function (state_28972){
var state_val_28973 = (state_28972[(1)]);
if((state_val_28973 === (7))){
var inst_28968 = (state_28972[(2)]);
var state_28972__$1 = state_28972;
var statearr_28974_29004 = state_28972__$1;
(statearr_28974_29004[(2)] = inst_28968);

(statearr_28974_29004[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28973 === (1))){
var inst_28931 = [];
var inst_28932 = inst_28931;
var inst_28933 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_28972__$1 = (function (){var statearr_28975 = state_28972;
(statearr_28975[(7)] = inst_28932);

(statearr_28975[(8)] = inst_28933);

return statearr_28975;
})();
var statearr_28976_29005 = state_28972__$1;
(statearr_28976_29005[(2)] = null);

(statearr_28976_29005[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28973 === (4))){
var inst_28936 = (state_28972[(9)]);
var inst_28936__$1 = (state_28972[(2)]);
var inst_28937 = (inst_28936__$1 == null);
var inst_28938 = cljs.core.not.call(null,inst_28937);
var state_28972__$1 = (function (){var statearr_28977 = state_28972;
(statearr_28977[(9)] = inst_28936__$1);

return statearr_28977;
})();
if(inst_28938){
var statearr_28978_29006 = state_28972__$1;
(statearr_28978_29006[(1)] = (5));

} else {
var statearr_28979_29007 = state_28972__$1;
(statearr_28979_29007[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28973 === (15))){
var inst_28962 = (state_28972[(2)]);
var state_28972__$1 = state_28972;
var statearr_28980_29008 = state_28972__$1;
(statearr_28980_29008[(2)] = inst_28962);

(statearr_28980_29008[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28973 === (13))){
var state_28972__$1 = state_28972;
var statearr_28981_29009 = state_28972__$1;
(statearr_28981_29009[(2)] = null);

(statearr_28981_29009[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28973 === (6))){
var inst_28932 = (state_28972[(7)]);
var inst_28957 = inst_28932.length;
var inst_28958 = (inst_28957 > (0));
var state_28972__$1 = state_28972;
if(cljs.core.truth_(inst_28958)){
var statearr_28982_29010 = state_28972__$1;
(statearr_28982_29010[(1)] = (12));

} else {
var statearr_28983_29011 = state_28972__$1;
(statearr_28983_29011[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28973 === (3))){
var inst_28970 = (state_28972[(2)]);
var state_28972__$1 = state_28972;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28972__$1,inst_28970);
} else {
if((state_val_28973 === (12))){
var inst_28932 = (state_28972[(7)]);
var inst_28960 = cljs.core.vec.call(null,inst_28932);
var state_28972__$1 = state_28972;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28972__$1,(15),out,inst_28960);
} else {
if((state_val_28973 === (2))){
var state_28972__$1 = state_28972;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28972__$1,(4),ch);
} else {
if((state_val_28973 === (11))){
var inst_28940 = (state_28972[(10)]);
var inst_28936 = (state_28972[(9)]);
var inst_28950 = (state_28972[(2)]);
var inst_28951 = [];
var inst_28952 = inst_28951.push(inst_28936);
var inst_28932 = inst_28951;
var inst_28933 = inst_28940;
var state_28972__$1 = (function (){var statearr_28984 = state_28972;
(statearr_28984[(7)] = inst_28932);

(statearr_28984[(11)] = inst_28952);

(statearr_28984[(12)] = inst_28950);

(statearr_28984[(8)] = inst_28933);

return statearr_28984;
})();
var statearr_28985_29012 = state_28972__$1;
(statearr_28985_29012[(2)] = null);

(statearr_28985_29012[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28973 === (9))){
var inst_28932 = (state_28972[(7)]);
var inst_28948 = cljs.core.vec.call(null,inst_28932);
var state_28972__$1 = state_28972;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28972__$1,(11),out,inst_28948);
} else {
if((state_val_28973 === (5))){
var inst_28940 = (state_28972[(10)]);
var inst_28936 = (state_28972[(9)]);
var inst_28933 = (state_28972[(8)]);
var inst_28940__$1 = f.call(null,inst_28936);
var inst_28941 = cljs.core._EQ_.call(null,inst_28940__$1,inst_28933);
var inst_28942 = cljs.core.keyword_identical_QMARK_.call(null,inst_28933,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_28943 = (inst_28941) || (inst_28942);
var state_28972__$1 = (function (){var statearr_28986 = state_28972;
(statearr_28986[(10)] = inst_28940__$1);

return statearr_28986;
})();
if(cljs.core.truth_(inst_28943)){
var statearr_28987_29013 = state_28972__$1;
(statearr_28987_29013[(1)] = (8));

} else {
var statearr_28988_29014 = state_28972__$1;
(statearr_28988_29014[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28973 === (14))){
var inst_28965 = (state_28972[(2)]);
var inst_28966 = cljs.core.async.close_BANG_.call(null,out);
var state_28972__$1 = (function (){var statearr_28990 = state_28972;
(statearr_28990[(13)] = inst_28965);

return statearr_28990;
})();
var statearr_28991_29015 = state_28972__$1;
(statearr_28991_29015[(2)] = inst_28966);

(statearr_28991_29015[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28973 === (10))){
var inst_28955 = (state_28972[(2)]);
var state_28972__$1 = state_28972;
var statearr_28992_29016 = state_28972__$1;
(statearr_28992_29016[(2)] = inst_28955);

(statearr_28992_29016[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28973 === (8))){
var inst_28940 = (state_28972[(10)]);
var inst_28932 = (state_28972[(7)]);
var inst_28936 = (state_28972[(9)]);
var inst_28945 = inst_28932.push(inst_28936);
var tmp28989 = inst_28932;
var inst_28932__$1 = tmp28989;
var inst_28933 = inst_28940;
var state_28972__$1 = (function (){var statearr_28993 = state_28972;
(statearr_28993[(7)] = inst_28932__$1);

(statearr_28993[(14)] = inst_28945);

(statearr_28993[(8)] = inst_28933);

return statearr_28993;
})();
var statearr_28994_29017 = state_28972__$1;
(statearr_28994_29017[(2)] = null);

(statearr_28994_29017[(1)] = (2));


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
});})(c__21116__auto___29003,out))
;
return ((function (switch__21054__auto__,c__21116__auto___29003,out){
return (function() {
var cljs$core$async$state_machine__21055__auto__ = null;
var cljs$core$async$state_machine__21055__auto____0 = (function (){
var statearr_28998 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28998[(0)] = cljs$core$async$state_machine__21055__auto__);

(statearr_28998[(1)] = (1));

return statearr_28998;
});
var cljs$core$async$state_machine__21055__auto____1 = (function (state_28972){
while(true){
var ret_value__21056__auto__ = (function (){try{while(true){
var result__21057__auto__ = switch__21054__auto__.call(null,state_28972);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21057__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21057__auto__;
}
break;
}
}catch (e28999){if((e28999 instanceof Object)){
var ex__21058__auto__ = e28999;
var statearr_29000_29018 = state_28972;
(statearr_29000_29018[(5)] = ex__21058__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28972);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28999;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21056__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29019 = state_28972;
state_28972 = G__29019;
continue;
} else {
return ret_value__21056__auto__;
}
break;
}
});
cljs$core$async$state_machine__21055__auto__ = function(state_28972){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21055__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21055__auto____1.call(this,state_28972);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21055__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21055__auto____0;
cljs$core$async$state_machine__21055__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21055__auto____1;
return cljs$core$async$state_machine__21055__auto__;
})()
;})(switch__21054__auto__,c__21116__auto___29003,out))
})();
var state__21118__auto__ = (function (){var statearr_29001 = f__21117__auto__.call(null);
(statearr_29001[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21116__auto___29003);

return statearr_29001;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21118__auto__);
});})(c__21116__auto___29003,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map