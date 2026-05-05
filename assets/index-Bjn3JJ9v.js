(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const h of l.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function t(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function s(o){if(o.ep)return;o.ep=!0;const l=t(o);fetch(o.href,l)}})();var id={exports:{}},Pa={},sd={exports:{}},Ce={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var tg;function rE(){if(tg)return Ce;tg=1;var r=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),h=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),g=Symbol.for("react.suspense"),_=Symbol.for("react.memo"),E=Symbol.for("react.lazy"),T=Symbol.iterator;function A(V){return V===null||typeof V!="object"?null:(V=T&&V[T]||V["@@iterator"],typeof V=="function"?V:null)}var U={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},W=Object.assign,X={};function $(V,H,ue){this.props=V,this.context=H,this.refs=X,this.updater=ue||U}$.prototype.isReactComponent={},$.prototype.setState=function(V,H){if(typeof V!="object"&&typeof V!="function"&&V!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,V,H,"setState")},$.prototype.forceUpdate=function(V){this.updater.enqueueForceUpdate(this,V,"forceUpdate")};function le(){}le.prototype=$.prototype;function he(V,H,ue){this.props=V,this.context=H,this.refs=X,this.updater=ue||U}var me=he.prototype=new le;me.constructor=he,W(me,$.prototype),me.isPureReactComponent=!0;var Ee=Array.isArray,je=Object.prototype.hasOwnProperty,Te={current:null},x={key:!0,ref:!0,__self:!0,__source:!0};function S(V,H,ue){var Ie,Ae={},xe=null,be=null;if(H!=null)for(Ie in H.ref!==void 0&&(be=H.ref),H.key!==void 0&&(xe=""+H.key),H)je.call(H,Ie)&&!x.hasOwnProperty(Ie)&&(Ae[Ie]=H[Ie]);var Le=arguments.length-2;if(Le===1)Ae.children=ue;else if(1<Le){for(var Be=Array(Le),vt=0;vt<Le;vt++)Be[vt]=arguments[vt+2];Ae.children=Be}if(V&&V.defaultProps)for(Ie in Le=V.defaultProps,Le)Ae[Ie]===void 0&&(Ae[Ie]=Le[Ie]);return{$$typeof:r,type:V,key:xe,ref:be,props:Ae,_owner:Te.current}}function R(V,H){return{$$typeof:r,type:V.type,key:H,ref:V.ref,props:V.props,_owner:V._owner}}function P(V){return typeof V=="object"&&V!==null&&V.$$typeof===r}function D(V){var H={"=":"=0",":":"=2"};return"$"+V.replace(/[=:]/g,function(ue){return H[ue]})}var O=/\/+/g;function C(V,H){return typeof V=="object"&&V!==null&&V.key!=null?D(""+V.key):H.toString(36)}function tt(V,H,ue,Ie,Ae){var xe=typeof V;(xe==="undefined"||xe==="boolean")&&(V=null);var be=!1;if(V===null)be=!0;else switch(xe){case"string":case"number":be=!0;break;case"object":switch(V.$$typeof){case r:case e:be=!0}}if(be)return be=V,Ae=Ae(be),V=Ie===""?"."+C(be,0):Ie,Ee(Ae)?(ue="",V!=null&&(ue=V.replace(O,"$&/")+"/"),tt(Ae,H,ue,"",function(vt){return vt})):Ae!=null&&(P(Ae)&&(Ae=R(Ae,ue+(!Ae.key||be&&be.key===Ae.key?"":(""+Ae.key).replace(O,"$&/")+"/")+V)),H.push(Ae)),1;if(be=0,Ie=Ie===""?".":Ie+":",Ee(V))for(var Le=0;Le<V.length;Le++){xe=V[Le];var Be=Ie+C(xe,Le);be+=tt(xe,H,ue,Be,Ae)}else if(Be=A(V),typeof Be=="function")for(V=Be.call(V),Le=0;!(xe=V.next()).done;)xe=xe.value,Be=Ie+C(xe,Le++),be+=tt(xe,H,ue,Be,Ae);else if(xe==="object")throw H=String(V),Error("Objects are not valid as a React child (found: "+(H==="[object Object]"?"object with keys {"+Object.keys(V).join(", ")+"}":H)+"). If you meant to render a collection of children, use an array instead.");return be}function Dt(V,H,ue){if(V==null)return V;var Ie=[],Ae=0;return tt(V,Ie,"","",function(xe){return H.call(ue,xe,Ae++)}),Ie}function Vt(V){if(V._status===-1){var H=V._result;H=H(),H.then(function(ue){(V._status===0||V._status===-1)&&(V._status=1,V._result=ue)},function(ue){(V._status===0||V._status===-1)&&(V._status=2,V._result=ue)}),V._status===-1&&(V._status=0,V._result=H)}if(V._status===1)return V._result.default;throw V._result}var Ue={current:null},Z={transition:null},de={ReactCurrentDispatcher:Ue,ReactCurrentBatchConfig:Z,ReactCurrentOwner:Te};function re(){throw Error("act(...) is not supported in production builds of React.")}return Ce.Children={map:Dt,forEach:function(V,H,ue){Dt(V,function(){H.apply(this,arguments)},ue)},count:function(V){var H=0;return Dt(V,function(){H++}),H},toArray:function(V){return Dt(V,function(H){return H})||[]},only:function(V){if(!P(V))throw Error("React.Children.only expected to receive a single React element child.");return V}},Ce.Component=$,Ce.Fragment=t,Ce.Profiler=o,Ce.PureComponent=he,Ce.StrictMode=s,Ce.Suspense=g,Ce.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=de,Ce.act=re,Ce.cloneElement=function(V,H,ue){if(V==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+V+".");var Ie=W({},V.props),Ae=V.key,xe=V.ref,be=V._owner;if(H!=null){if(H.ref!==void 0&&(xe=H.ref,be=Te.current),H.key!==void 0&&(Ae=""+H.key),V.type&&V.type.defaultProps)var Le=V.type.defaultProps;for(Be in H)je.call(H,Be)&&!x.hasOwnProperty(Be)&&(Ie[Be]=H[Be]===void 0&&Le!==void 0?Le[Be]:H[Be])}var Be=arguments.length-2;if(Be===1)Ie.children=ue;else if(1<Be){Le=Array(Be);for(var vt=0;vt<Be;vt++)Le[vt]=arguments[vt+2];Ie.children=Le}return{$$typeof:r,type:V.type,key:Ae,ref:xe,props:Ie,_owner:be}},Ce.createContext=function(V){return V={$$typeof:h,_currentValue:V,_currentValue2:V,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},V.Provider={$$typeof:l,_context:V},V.Consumer=V},Ce.createElement=S,Ce.createFactory=function(V){var H=S.bind(null,V);return H.type=V,H},Ce.createRef=function(){return{current:null}},Ce.forwardRef=function(V){return{$$typeof:p,render:V}},Ce.isValidElement=P,Ce.lazy=function(V){return{$$typeof:E,_payload:{_status:-1,_result:V},_init:Vt}},Ce.memo=function(V,H){return{$$typeof:_,type:V,compare:H===void 0?null:H}},Ce.startTransition=function(V){var H=Z.transition;Z.transition={};try{V()}finally{Z.transition=H}},Ce.unstable_act=re,Ce.useCallback=function(V,H){return Ue.current.useCallback(V,H)},Ce.useContext=function(V){return Ue.current.useContext(V)},Ce.useDebugValue=function(){},Ce.useDeferredValue=function(V){return Ue.current.useDeferredValue(V)},Ce.useEffect=function(V,H){return Ue.current.useEffect(V,H)},Ce.useId=function(){return Ue.current.useId()},Ce.useImperativeHandle=function(V,H,ue){return Ue.current.useImperativeHandle(V,H,ue)},Ce.useInsertionEffect=function(V,H){return Ue.current.useInsertionEffect(V,H)},Ce.useLayoutEffect=function(V,H){return Ue.current.useLayoutEffect(V,H)},Ce.useMemo=function(V,H){return Ue.current.useMemo(V,H)},Ce.useReducer=function(V,H,ue){return Ue.current.useReducer(V,H,ue)},Ce.useRef=function(V){return Ue.current.useRef(V)},Ce.useState=function(V){return Ue.current.useState(V)},Ce.useSyncExternalStore=function(V,H,ue){return Ue.current.useSyncExternalStore(V,H,ue)},Ce.useTransition=function(){return Ue.current.useTransition()},Ce.version="18.3.1",Ce}var ng;function Zd(){return ng||(ng=1,sd.exports=rE()),sd.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rg;function iE(){if(rg)return Pa;rg=1;var r=Zd(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,o=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function h(p,g,_){var E,T={},A=null,U=null;_!==void 0&&(A=""+_),g.key!==void 0&&(A=""+g.key),g.ref!==void 0&&(U=g.ref);for(E in g)s.call(g,E)&&!l.hasOwnProperty(E)&&(T[E]=g[E]);if(p&&p.defaultProps)for(E in g=p.defaultProps,g)T[E]===void 0&&(T[E]=g[E]);return{$$typeof:e,type:p,key:A,ref:U,props:T,_owner:o.current}}return Pa.Fragment=t,Pa.jsx=h,Pa.jsxs=h,Pa}var ig;function sE(){return ig||(ig=1,id.exports=iE()),id.exports}var M=sE(),mt=Zd(),Iu={},od={exports:{}},Zt={},ad={exports:{}},ld={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sg;function oE(){return sg||(sg=1,(function(r){function e(Z,de){var re=Z.length;Z.push(de);e:for(;0<re;){var V=re-1>>>1,H=Z[V];if(0<o(H,de))Z[V]=de,Z[re]=H,re=V;else break e}}function t(Z){return Z.length===0?null:Z[0]}function s(Z){if(Z.length===0)return null;var de=Z[0],re=Z.pop();if(re!==de){Z[0]=re;e:for(var V=0,H=Z.length,ue=H>>>1;V<ue;){var Ie=2*(V+1)-1,Ae=Z[Ie],xe=Ie+1,be=Z[xe];if(0>o(Ae,re))xe<H&&0>o(be,Ae)?(Z[V]=be,Z[xe]=re,V=xe):(Z[V]=Ae,Z[Ie]=re,V=Ie);else if(xe<H&&0>o(be,re))Z[V]=be,Z[xe]=re,V=xe;else break e}}return de}function o(Z,de){var re=Z.sortIndex-de.sortIndex;return re!==0?re:Z.id-de.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;r.unstable_now=function(){return l.now()}}else{var h=Date,p=h.now();r.unstable_now=function(){return h.now()-p}}var g=[],_=[],E=1,T=null,A=3,U=!1,W=!1,X=!1,$=typeof setTimeout=="function"?setTimeout:null,le=typeof clearTimeout=="function"?clearTimeout:null,he=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function me(Z){for(var de=t(_);de!==null;){if(de.callback===null)s(_);else if(de.startTime<=Z)s(_),de.sortIndex=de.expirationTime,e(g,de);else break;de=t(_)}}function Ee(Z){if(X=!1,me(Z),!W)if(t(g)!==null)W=!0,Vt(je);else{var de=t(_);de!==null&&Ue(Ee,de.startTime-Z)}}function je(Z,de){W=!1,X&&(X=!1,le(S),S=-1),U=!0;var re=A;try{for(me(de),T=t(g);T!==null&&(!(T.expirationTime>de)||Z&&!D());){var V=T.callback;if(typeof V=="function"){T.callback=null,A=T.priorityLevel;var H=V(T.expirationTime<=de);de=r.unstable_now(),typeof H=="function"?T.callback=H:T===t(g)&&s(g),me(de)}else s(g);T=t(g)}if(T!==null)var ue=!0;else{var Ie=t(_);Ie!==null&&Ue(Ee,Ie.startTime-de),ue=!1}return ue}finally{T=null,A=re,U=!1}}var Te=!1,x=null,S=-1,R=5,P=-1;function D(){return!(r.unstable_now()-P<R)}function O(){if(x!==null){var Z=r.unstable_now();P=Z;var de=!0;try{de=x(!0,Z)}finally{de?C():(Te=!1,x=null)}}else Te=!1}var C;if(typeof he=="function")C=function(){he(O)};else if(typeof MessageChannel<"u"){var tt=new MessageChannel,Dt=tt.port2;tt.port1.onmessage=O,C=function(){Dt.postMessage(null)}}else C=function(){$(O,0)};function Vt(Z){x=Z,Te||(Te=!0,C())}function Ue(Z,de){S=$(function(){Z(r.unstable_now())},de)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(Z){Z.callback=null},r.unstable_continueExecution=function(){W||U||(W=!0,Vt(je))},r.unstable_forceFrameRate=function(Z){0>Z||125<Z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):R=0<Z?Math.floor(1e3/Z):5},r.unstable_getCurrentPriorityLevel=function(){return A},r.unstable_getFirstCallbackNode=function(){return t(g)},r.unstable_next=function(Z){switch(A){case 1:case 2:case 3:var de=3;break;default:de=A}var re=A;A=de;try{return Z()}finally{A=re}},r.unstable_pauseExecution=function(){},r.unstable_requestPaint=function(){},r.unstable_runWithPriority=function(Z,de){switch(Z){case 1:case 2:case 3:case 4:case 5:break;default:Z=3}var re=A;A=Z;try{return de()}finally{A=re}},r.unstable_scheduleCallback=function(Z,de,re){var V=r.unstable_now();switch(typeof re=="object"&&re!==null?(re=re.delay,re=typeof re=="number"&&0<re?V+re:V):re=V,Z){case 1:var H=-1;break;case 2:H=250;break;case 5:H=1073741823;break;case 4:H=1e4;break;default:H=5e3}return H=re+H,Z={id:E++,callback:de,priorityLevel:Z,startTime:re,expirationTime:H,sortIndex:-1},re>V?(Z.sortIndex=re,e(_,Z),t(g)===null&&Z===t(_)&&(X?(le(S),S=-1):X=!0,Ue(Ee,re-V))):(Z.sortIndex=H,e(g,Z),W||U||(W=!0,Vt(je))),Z},r.unstable_shouldYield=D,r.unstable_wrapCallback=function(Z){var de=A;return function(){var re=A;A=de;try{return Z.apply(this,arguments)}finally{A=re}}}})(ld)),ld}var og;function aE(){return og||(og=1,ad.exports=oE()),ad.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ag;function lE(){if(ag)return Zt;ag=1;var r=Zd(),e=aE();function t(n){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+n,a=1;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+n+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s=new Set,o={};function l(n,i){h(n,i),h(n+"Capture",i)}function h(n,i){for(o[n]=i,n=0;n<i.length;n++)s.add(i[n])}var p=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),g=Object.prototype.hasOwnProperty,_=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,E={},T={};function A(n){return g.call(T,n)?!0:g.call(E,n)?!1:_.test(n)?T[n]=!0:(E[n]=!0,!1)}function U(n,i,a,c){if(a!==null&&a.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return c?!1:a!==null?!a.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function W(n,i,a,c){if(i===null||typeof i>"u"||U(n,i,a,c))return!0;if(c)return!1;if(a!==null)switch(a.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function X(n,i,a,c,d,m,v){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=c,this.attributeNamespace=d,this.mustUseProperty=a,this.propertyName=n,this.type=i,this.sanitizeURL=m,this.removeEmptyString=v}var $={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){$[n]=new X(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var i=n[0];$[i]=new X(i,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){$[n]=new X(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){$[n]=new X(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){$[n]=new X(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){$[n]=new X(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){$[n]=new X(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){$[n]=new X(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){$[n]=new X(n,5,!1,n.toLowerCase(),null,!1,!1)});var le=/[\-:]([a-z])/g;function he(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var i=n.replace(le,he);$[i]=new X(i,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var i=n.replace(le,he);$[i]=new X(i,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var i=n.replace(le,he);$[i]=new X(i,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){$[n]=new X(n,1,!1,n.toLowerCase(),null,!1,!1)}),$.xlinkHref=new X("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){$[n]=new X(n,1,!1,n.toLowerCase(),null,!0,!0)});function me(n,i,a,c){var d=$.hasOwnProperty(i)?$[i]:null;(d!==null?d.type!==0:c||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(W(i,a,d,c)&&(a=null),c||d===null?A(i)&&(a===null?n.removeAttribute(i):n.setAttribute(i,""+a)):d.mustUseProperty?n[d.propertyName]=a===null?d.type===3?!1:"":a:(i=d.attributeName,c=d.attributeNamespace,a===null?n.removeAttribute(i):(d=d.type,a=d===3||d===4&&a===!0?"":""+a,c?n.setAttributeNS(c,i,a):n.setAttribute(i,a))))}var Ee=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,je=Symbol.for("react.element"),Te=Symbol.for("react.portal"),x=Symbol.for("react.fragment"),S=Symbol.for("react.strict_mode"),R=Symbol.for("react.profiler"),P=Symbol.for("react.provider"),D=Symbol.for("react.context"),O=Symbol.for("react.forward_ref"),C=Symbol.for("react.suspense"),tt=Symbol.for("react.suspense_list"),Dt=Symbol.for("react.memo"),Vt=Symbol.for("react.lazy"),Ue=Symbol.for("react.offscreen"),Z=Symbol.iterator;function de(n){return n===null||typeof n!="object"?null:(n=Z&&n[Z]||n["@@iterator"],typeof n=="function"?n:null)}var re=Object.assign,V;function H(n){if(V===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);V=i&&i[1]||""}return`
`+V+n}var ue=!1;function Ie(n,i){if(!n||ue)return"";ue=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(j){var c=j}Reflect.construct(n,[],i)}else{try{i.call()}catch(j){c=j}n.call(i.prototype)}else{try{throw Error()}catch(j){c=j}n()}}catch(j){if(j&&c&&typeof j.stack=="string"){for(var d=j.stack.split(`
`),m=c.stack.split(`
`),v=d.length-1,I=m.length-1;1<=v&&0<=I&&d[v]!==m[I];)I--;for(;1<=v&&0<=I;v--,I--)if(d[v]!==m[I]){if(v!==1||I!==1)do if(v--,I--,0>I||d[v]!==m[I]){var k=`
`+d[v].replace(" at new "," at ");return n.displayName&&k.includes("<anonymous>")&&(k=k.replace("<anonymous>",n.displayName)),k}while(1<=v&&0<=I);break}}}finally{ue=!1,Error.prepareStackTrace=a}return(n=n?n.displayName||n.name:"")?H(n):""}function Ae(n){switch(n.tag){case 5:return H(n.type);case 16:return H("Lazy");case 13:return H("Suspense");case 19:return H("SuspenseList");case 0:case 2:case 15:return n=Ie(n.type,!1),n;case 11:return n=Ie(n.type.render,!1),n;case 1:return n=Ie(n.type,!0),n;default:return""}}function xe(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case x:return"Fragment";case Te:return"Portal";case R:return"Profiler";case S:return"StrictMode";case C:return"Suspense";case tt:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case D:return(n.displayName||"Context")+".Consumer";case P:return(n._context.displayName||"Context")+".Provider";case O:var i=n.render;return n=n.displayName,n||(n=i.displayName||i.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case Dt:return i=n.displayName||null,i!==null?i:xe(n.type)||"Memo";case Vt:i=n._payload,n=n._init;try{return xe(n(i))}catch{}}return null}function be(n){var i=n.type;switch(n.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=i.render,n=n.displayName||n.name||"",i.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return xe(i);case 8:return i===S?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function Le(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Be(n){var i=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function vt(n){var i=Be(n)?"checked":"value",a=Object.getOwnPropertyDescriptor(n.constructor.prototype,i),c=""+n[i];if(!n.hasOwnProperty(i)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var d=a.get,m=a.set;return Object.defineProperty(n,i,{configurable:!0,get:function(){return d.call(this)},set:function(v){c=""+v,m.call(this,v)}}),Object.defineProperty(n,i,{enumerable:a.enumerable}),{getValue:function(){return c},setValue:function(v){c=""+v},stopTracking:function(){n._valueTracker=null,delete n[i]}}}}function fr(n){n._valueTracker||(n._valueTracker=vt(n))}function vs(n){if(!n)return!1;var i=n._valueTracker;if(!i)return!0;var a=i.getValue(),c="";return n&&(c=Be(n)?n.checked?"true":"false":n.value),n=c,n!==a?(i.setValue(n),!0):!1}function Fr(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function xi(n,i){var a=i.checked;return re({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??n._wrapperState.initialChecked})}function ws(n,i){var a=i.defaultValue==null?"":i.defaultValue,c=i.checked!=null?i.checked:i.defaultChecked;a=Le(i.value!=null?i.value:a),n._wrapperState={initialChecked:c,initialValue:a,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function bo(n,i){i=i.checked,i!=null&&me(n,"checked",i,!1)}function Lo(n,i){bo(n,i);var a=Le(i.value),c=i.type;if(a!=null)c==="number"?(a===0&&n.value===""||n.value!=a)&&(n.value=""+a):n.value!==""+a&&(n.value=""+a);else if(c==="submit"||c==="reset"){n.removeAttribute("value");return}i.hasOwnProperty("value")?Es(n,i.type,a):i.hasOwnProperty("defaultValue")&&Es(n,i.type,Le(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(n.defaultChecked=!!i.defaultChecked)}function ll(n,i,a){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var c=i.type;if(!(c!=="submit"&&c!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+n._wrapperState.initialValue,a||i===n.value||(n.value=i),n.defaultValue=i}a=n.name,a!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,a!==""&&(n.name=a)}function Es(n,i,a){(i!=="number"||Fr(n.ownerDocument)!==n)&&(a==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+a&&(n.defaultValue=""+a))}var pr=Array.isArray;function mr(n,i,a,c){if(n=n.options,i){i={};for(var d=0;d<a.length;d++)i["$"+a[d]]=!0;for(a=0;a<n.length;a++)d=i.hasOwnProperty("$"+n[a].value),n[a].selected!==d&&(n[a].selected=d),d&&c&&(n[a].defaultSelected=!0)}else{for(a=""+Le(a),i=null,d=0;d<n.length;d++){if(n[d].value===a){n[d].selected=!0,c&&(n[d].defaultSelected=!0);return}i!==null||n[d].disabled||(i=n[d])}i!==null&&(i.selected=!0)}}function Mo(n,i){if(i.dangerouslySetInnerHTML!=null)throw Error(t(91));return re({},i,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function Ts(n,i){var a=i.value;if(a==null){if(a=i.children,i=i.defaultValue,a!=null){if(i!=null)throw Error(t(92));if(pr(a)){if(1<a.length)throw Error(t(93));a=a[0]}i=a}i==null&&(i=""),a=i}n._wrapperState={initialValue:Le(a)}}function Is(n,i){var a=Le(i.value),c=Le(i.defaultValue);a!=null&&(a=""+a,a!==n.value&&(n.value=a),i.defaultValue==null&&n.defaultValue!==a&&(n.defaultValue=a)),c!=null&&(n.defaultValue=""+c)}function Fo(n){var i=n.textContent;i===n._wrapperState.initialValue&&i!==""&&i!==null&&(n.value=i)}function ct(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ht(n,i){return n==null||n==="http://www.w3.org/1999/xhtml"?ct(i):n==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var gr,Uo=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,a,c,d){MSApp.execUnsafeLocalFunction(function(){return n(i,a,c,d)})}:n})(function(n,i){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=i;else{for(gr=gr||document.createElement("div"),gr.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=gr.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;i.firstChild;)n.appendChild(i.firstChild)}});function Ur(n,i){if(i){var a=n.firstChild;if(a&&a===n.lastChild&&a.nodeType===3){a.nodeValue=i;return}}n.textContent=i}var Ni={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Di=["Webkit","ms","Moz","O"];Object.keys(Ni).forEach(function(n){Di.forEach(function(i){i=i+n.charAt(0).toUpperCase()+n.substring(1),Ni[i]=Ni[n]})});function jo(n,i,a){return i==null||typeof i=="boolean"||i===""?"":a||typeof i!="number"||i===0||Ni.hasOwnProperty(n)&&Ni[n]?(""+i).trim():i+"px"}function zo(n,i){n=n.style;for(var a in i)if(i.hasOwnProperty(a)){var c=a.indexOf("--")===0,d=jo(a,i[a],c);a==="float"&&(a="cssFloat"),c?n.setProperty(a,d):n[a]=d}}var Bo=re({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function $o(n,i){if(i){if(Bo[n]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(t(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(t(61))}if(i.style!=null&&typeof i.style!="object")throw Error(t(62))}}function qo(n,i){if(n.indexOf("-")===-1)return typeof i.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Vi=null;function Ss(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var As=null,dn=null,Gn=null;function Cs(n){if(n=pa(n)){if(typeof As!="function")throw Error(t(280));var i=n.stateNode;i&&(i=Fl(i),As(n.stateNode,n.type,i))}}function Kn(n){dn?Gn?Gn.push(n):Gn=[n]:dn=n}function Ho(){if(dn){var n=dn,i=Gn;if(Gn=dn=null,Cs(n),i)for(n=0;n<i.length;n++)Cs(i[n])}}function Oi(n,i){return n(i)}function Wo(){}var yr=!1;function Go(n,i,a){if(yr)return n(i,a);yr=!0;try{return Oi(n,i,a)}finally{yr=!1,(dn!==null||Gn!==null)&&(Wo(),Ho())}}function nt(n,i){var a=n.stateNode;if(a===null)return null;var c=Fl(a);if(c===null)return null;a=c[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(n=n.type,c=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!c;break e;default:n=!1}if(n)return null;if(a&&typeof a!="function")throw Error(t(231,i,typeof a));return a}var Rs=!1;if(p)try{var Cn={};Object.defineProperty(Cn,"passive",{get:function(){Rs=!0}}),window.addEventListener("test",Cn,Cn),window.removeEventListener("test",Cn,Cn)}catch{Rs=!1}function bi(n,i,a,c,d,m,v,I,k){var j=Array.prototype.slice.call(arguments,3);try{i.apply(a,j)}catch(K){this.onError(K)}}var Li=!1,ks=null,Rn=!1,Ko=null,Dc={onError:function(n){Li=!0,ks=n}};function Ps(n,i,a,c,d,m,v,I,k){Li=!1,ks=null,bi.apply(Dc,arguments)}function ul(n,i,a,c,d,m,v,I,k){if(Ps.apply(this,arguments),Li){if(Li){var j=ks;Li=!1,ks=null}else throw Error(t(198));Rn||(Rn=!0,Ko=j)}}function kn(n){var i=n,a=n;if(n.alternate)for(;i.return;)i=i.return;else{n=i;do i=n,(i.flags&4098)!==0&&(a=i.return),n=i.return;while(n)}return i.tag===3?a:null}function Mi(n){if(n.tag===13){var i=n.memoizedState;if(i===null&&(n=n.alternate,n!==null&&(i=n.memoizedState)),i!==null)return i.dehydrated}return null}function Pn(n){if(kn(n)!==n)throw Error(t(188))}function cl(n){var i=n.alternate;if(!i){if(i=kn(n),i===null)throw Error(t(188));return i!==n?null:n}for(var a=n,c=i;;){var d=a.return;if(d===null)break;var m=d.alternate;if(m===null){if(c=d.return,c!==null){a=c;continue}break}if(d.child===m.child){for(m=d.child;m;){if(m===a)return Pn(d),n;if(m===c)return Pn(d),i;m=m.sibling}throw Error(t(188))}if(a.return!==c.return)a=d,c=m;else{for(var v=!1,I=d.child;I;){if(I===a){v=!0,a=d,c=m;break}if(I===c){v=!0,c=d,a=m;break}I=I.sibling}if(!v){for(I=m.child;I;){if(I===a){v=!0,a=m,c=d;break}if(I===c){v=!0,c=m,a=d;break}I=I.sibling}if(!v)throw Error(t(189))}}if(a.alternate!==c)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?n:i}function Qo(n){return n=cl(n),n!==null?xs(n):null}function xs(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var i=xs(n);if(i!==null)return i;n=n.sibling}return null}var Ns=e.unstable_scheduleCallback,Xo=e.unstable_cancelCallback,hl=e.unstable_shouldYield,Vc=e.unstable_requestPaint,$e=e.unstable_now,dl=e.unstable_getCurrentPriorityLevel,Fi=e.unstable_ImmediatePriority,jr=e.unstable_UserBlockingPriority,fn=e.unstable_NormalPriority,Yo=e.unstable_LowPriority,fl=e.unstable_IdlePriority,Ui=null,rn=null;function pl(n){if(rn&&typeof rn.onCommitFiberRoot=="function")try{rn.onCommitFiberRoot(Ui,n,void 0,(n.current.flags&128)===128)}catch{}}var Bt=Math.clz32?Math.clz32:gl,Jo=Math.log,ml=Math.LN2;function gl(n){return n>>>=0,n===0?32:31-(Jo(n)/ml|0)|0}var Ds=64,Vs=4194304;function zr(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function ji(n,i){var a=n.pendingLanes;if(a===0)return 0;var c=0,d=n.suspendedLanes,m=n.pingedLanes,v=a&268435455;if(v!==0){var I=v&~d;I!==0?c=zr(I):(m&=v,m!==0&&(c=zr(m)))}else v=a&~d,v!==0?c=zr(v):m!==0&&(c=zr(m));if(c===0)return 0;if(i!==0&&i!==c&&(i&d)===0&&(d=c&-c,m=i&-i,d>=m||d===16&&(m&4194240)!==0))return i;if((c&4)!==0&&(c|=a&16),i=n.entangledLanes,i!==0)for(n=n.entanglements,i&=c;0<i;)a=31-Bt(i),d=1<<a,c|=n[a],i&=~d;return c}function Oc(n,i){switch(n){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function _r(n,i){for(var a=n.suspendedLanes,c=n.pingedLanes,d=n.expirationTimes,m=n.pendingLanes;0<m;){var v=31-Bt(m),I=1<<v,k=d[v];k===-1?((I&a)===0||(I&c)!==0)&&(d[v]=Oc(I,i)):k<=i&&(n.expiredLanes|=I),m&=~I}}function sn(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function zi(){var n=Ds;return Ds<<=1,(Ds&4194240)===0&&(Ds=64),n}function Br(n){for(var i=[],a=0;31>a;a++)i.push(n);return i}function $r(n,i,a){n.pendingLanes|=i,i!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,i=31-Bt(i),n[i]=a}function ze(n,i){var a=n.pendingLanes&~i;n.pendingLanes=i,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=i,n.mutableReadLanes&=i,n.entangledLanes&=i,i=n.entanglements;var c=n.eventTimes;for(n=n.expirationTimes;0<a;){var d=31-Bt(a),m=1<<d;i[d]=0,c[d]=-1,n[d]=-1,a&=~m}}function qr(n,i){var a=n.entangledLanes|=i;for(n=n.entanglements;a;){var c=31-Bt(a),d=1<<c;d&i|n[c]&i&&(n[c]|=i),a&=~d}}var Pe=0;function Hr(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var yl,Os,_l,vl,wl,Zo=!1,Qn=[],At=null,xn=null,Nn=null,Wr=new Map,pn=new Map,Xn=[],bc="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function El(n,i){switch(n){case"focusin":case"focusout":At=null;break;case"dragenter":case"dragleave":xn=null;break;case"mouseover":case"mouseout":Nn=null;break;case"pointerover":case"pointerout":Wr.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":pn.delete(i.pointerId)}}function Wt(n,i,a,c,d,m){return n===null||n.nativeEvent!==m?(n={blockedOn:i,domEventName:a,eventSystemFlags:c,nativeEvent:m,targetContainers:[d]},i!==null&&(i=pa(i),i!==null&&Os(i)),n):(n.eventSystemFlags|=c,i=n.targetContainers,d!==null&&i.indexOf(d)===-1&&i.push(d),n)}function Lc(n,i,a,c,d){switch(i){case"focusin":return At=Wt(At,n,i,a,c,d),!0;case"dragenter":return xn=Wt(xn,n,i,a,c,d),!0;case"mouseover":return Nn=Wt(Nn,n,i,a,c,d),!0;case"pointerover":var m=d.pointerId;return Wr.set(m,Wt(Wr.get(m)||null,n,i,a,c,d)),!0;case"gotpointercapture":return m=d.pointerId,pn.set(m,Wt(pn.get(m)||null,n,i,a,c,d)),!0}return!1}function Tl(n){var i=Wi(n.target);if(i!==null){var a=kn(i);if(a!==null){if(i=a.tag,i===13){if(i=Mi(a),i!==null){n.blockedOn=i,wl(n.priority,function(){_l(a)});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){n.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}n.blockedOn=null}function vr(n){if(n.blockedOn!==null)return!1;for(var i=n.targetContainers;0<i.length;){var a=bs(n.domEventName,n.eventSystemFlags,i[0],n.nativeEvent);if(a===null){a=n.nativeEvent;var c=new a.constructor(a.type,a);Vi=c,a.target.dispatchEvent(c),Vi=null}else return i=pa(a),i!==null&&Os(i),n.blockedOn=a,!1;i.shift()}return!0}function Bi(n,i,a){vr(n)&&a.delete(i)}function Il(){Zo=!1,At!==null&&vr(At)&&(At=null),xn!==null&&vr(xn)&&(xn=null),Nn!==null&&vr(Nn)&&(Nn=null),Wr.forEach(Bi),pn.forEach(Bi)}function Dn(n,i){n.blockedOn===i&&(n.blockedOn=null,Zo||(Zo=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Il)))}function Vn(n){function i(d){return Dn(d,n)}if(0<Qn.length){Dn(Qn[0],n);for(var a=1;a<Qn.length;a++){var c=Qn[a];c.blockedOn===n&&(c.blockedOn=null)}}for(At!==null&&Dn(At,n),xn!==null&&Dn(xn,n),Nn!==null&&Dn(Nn,n),Wr.forEach(i),pn.forEach(i),a=0;a<Xn.length;a++)c=Xn[a],c.blockedOn===n&&(c.blockedOn=null);for(;0<Xn.length&&(a=Xn[0],a.blockedOn===null);)Tl(a),a.blockedOn===null&&Xn.shift()}var wr=Ee.ReactCurrentBatchConfig,Gr=!0;function Qe(n,i,a,c){var d=Pe,m=wr.transition;wr.transition=null;try{Pe=1,ea(n,i,a,c)}finally{Pe=d,wr.transition=m}}function Mc(n,i,a,c){var d=Pe,m=wr.transition;wr.transition=null;try{Pe=4,ea(n,i,a,c)}finally{Pe=d,wr.transition=m}}function ea(n,i,a,c){if(Gr){var d=bs(n,i,a,c);if(d===null)Kc(n,i,c,$i,a),El(n,c);else if(Lc(d,n,i,a,c))c.stopPropagation();else if(El(n,c),i&4&&-1<bc.indexOf(n)){for(;d!==null;){var m=pa(d);if(m!==null&&yl(m),m=bs(n,i,a,c),m===null&&Kc(n,i,c,$i,a),m===d)break;d=m}d!==null&&c.stopPropagation()}else Kc(n,i,c,null,a)}}var $i=null;function bs(n,i,a,c){if($i=null,n=Ss(c),n=Wi(n),n!==null)if(i=kn(n),i===null)n=null;else if(a=i.tag,a===13){if(n=Mi(i),n!==null)return n;n=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;n=null}else i!==n&&(n=null);return $i=n,null}function ta(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(dl()){case Fi:return 1;case jr:return 4;case fn:case Yo:return 16;case fl:return 536870912;default:return 16}default:return 16}}var on=null,Ls=null,Gt=null;function na(){if(Gt)return Gt;var n,i=Ls,a=i.length,c,d="value"in on?on.value:on.textContent,m=d.length;for(n=0;n<a&&i[n]===d[n];n++);var v=a-n;for(c=1;c<=v&&i[a-c]===d[m-c];c++);return Gt=d.slice(n,1<c?1-c:void 0)}function Ms(n){var i=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&i===13&&(n=13)):n=i,n===10&&(n=13),32<=n||n===13?n:0}function Yn(){return!0}function ra(){return!1}function Ct(n){function i(a,c,d,m,v){this._reactName=a,this._targetInst=d,this.type=c,this.nativeEvent=m,this.target=v,this.currentTarget=null;for(var I in n)n.hasOwnProperty(I)&&(a=n[I],this[I]=a?a(m):m[I]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?Yn:ra,this.isPropagationStopped=ra,this}return re(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Yn)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Yn)},persist:function(){},isPersistent:Yn}),i}var On={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Fs=Ct(On),Jn=re({},On,{view:0,detail:0}),Fc=Ct(Jn),Us,Er,Kr,qi=re({},Jn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Zn,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Kr&&(Kr&&n.type==="mousemove"?(Us=n.screenX-Kr.screenX,Er=n.screenY-Kr.screenY):Er=Us=0,Kr=n),Us)},movementY:function(n){return"movementY"in n?n.movementY:Er}}),js=Ct(qi),ia=re({},qi,{dataTransfer:0}),Sl=Ct(ia),zs=re({},Jn,{relatedTarget:0}),Bs=Ct(zs),Al=re({},On,{animationName:0,elapsedTime:0,pseudoElement:0}),Tr=Ct(Al),Cl=re({},On,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),Rl=Ct(Cl),kl=re({},On,{data:0}),sa=Ct(kl),$s={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},$t={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Pl={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function xl(n){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(n):(n=Pl[n])?!!i[n]:!1}function Zn(){return xl}var u=re({},Jn,{key:function(n){if(n.key){var i=$s[n.key]||n.key;if(i!=="Unidentified")return i}return n.type==="keypress"?(n=Ms(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?$t[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Zn,charCode:function(n){return n.type==="keypress"?Ms(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Ms(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),f=Ct(u),y=re({},qi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),w=Ct(y),b=re({},Jn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Zn}),z=Ct(b),J=re({},On,{propertyName:0,elapsedTime:0,pseudoElement:0}),Fe=Ct(J),dt=re({},qi,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),Ne=Ct(dt),wt=[9,13,27,32],st=p&&"CompositionEvent"in window,mn=null;p&&"documentMode"in document&&(mn=document.documentMode);var an=p&&"TextEvent"in window&&!mn,Hi=p&&(!st||mn&&8<mn&&11>=mn),qs=" ",Qf=!1;function Xf(n,i){switch(n){case"keyup":return wt.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Yf(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Hs=!1;function ew(n,i){switch(n){case"compositionend":return Yf(i);case"keypress":return i.which!==32?null:(Qf=!0,qs);case"textInput":return n=i.data,n===qs&&Qf?null:n;default:return null}}function tw(n,i){if(Hs)return n==="compositionend"||!st&&Xf(n,i)?(n=na(),Gt=Ls=on=null,Hs=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Hi&&i.locale!=="ko"?null:i.data;default:return null}}var nw={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Jf(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i==="input"?!!nw[n.type]:i==="textarea"}function Zf(n,i,a,c){Kn(c),i=bl(i,"onChange"),0<i.length&&(a=new Fs("onChange","change",null,a,c),n.push({event:a,listeners:i}))}var oa=null,aa=null;function rw(n){yp(n,0)}function Nl(n){var i=Xs(n);if(vs(i))return n}function iw(n,i){if(n==="change")return i}var ep=!1;if(p){var Uc;if(p){var jc="oninput"in document;if(!jc){var tp=document.createElement("div");tp.setAttribute("oninput","return;"),jc=typeof tp.oninput=="function"}Uc=jc}else Uc=!1;ep=Uc&&(!document.documentMode||9<document.documentMode)}function np(){oa&&(oa.detachEvent("onpropertychange",rp),aa=oa=null)}function rp(n){if(n.propertyName==="value"&&Nl(aa)){var i=[];Zf(i,aa,n,Ss(n)),Go(rw,i)}}function sw(n,i,a){n==="focusin"?(np(),oa=i,aa=a,oa.attachEvent("onpropertychange",rp)):n==="focusout"&&np()}function ow(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Nl(aa)}function aw(n,i){if(n==="click")return Nl(i)}function lw(n,i){if(n==="input"||n==="change")return Nl(i)}function uw(n,i){return n===i&&(n!==0||1/n===1/i)||n!==n&&i!==i}var bn=typeof Object.is=="function"?Object.is:uw;function la(n,i){if(bn(n,i))return!0;if(typeof n!="object"||n===null||typeof i!="object"||i===null)return!1;var a=Object.keys(n),c=Object.keys(i);if(a.length!==c.length)return!1;for(c=0;c<a.length;c++){var d=a[c];if(!g.call(i,d)||!bn(n[d],i[d]))return!1}return!0}function ip(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function sp(n,i){var a=ip(n);n=0;for(var c;a;){if(a.nodeType===3){if(c=n+a.textContent.length,n<=i&&c>=i)return{node:a,offset:i-n};n=c}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=ip(a)}}function op(n,i){return n&&i?n===i?!0:n&&n.nodeType===3?!1:i&&i.nodeType===3?op(n,i.parentNode):"contains"in n?n.contains(i):n.compareDocumentPosition?!!(n.compareDocumentPosition(i)&16):!1:!1}function ap(){for(var n=window,i=Fr();i instanceof n.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)n=i.contentWindow;else break;i=Fr(n.document)}return i}function zc(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i&&(i==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||i==="textarea"||n.contentEditable==="true")}function cw(n){var i=ap(),a=n.focusedElem,c=n.selectionRange;if(i!==a&&a&&a.ownerDocument&&op(a.ownerDocument.documentElement,a)){if(c!==null&&zc(a)){if(i=c.start,n=c.end,n===void 0&&(n=i),"selectionStart"in a)a.selectionStart=i,a.selectionEnd=Math.min(n,a.value.length);else if(n=(i=a.ownerDocument||document)&&i.defaultView||window,n.getSelection){n=n.getSelection();var d=a.textContent.length,m=Math.min(c.start,d);c=c.end===void 0?m:Math.min(c.end,d),!n.extend&&m>c&&(d=c,c=m,m=d),d=sp(a,m);var v=sp(a,c);d&&v&&(n.rangeCount!==1||n.anchorNode!==d.node||n.anchorOffset!==d.offset||n.focusNode!==v.node||n.focusOffset!==v.offset)&&(i=i.createRange(),i.setStart(d.node,d.offset),n.removeAllRanges(),m>c?(n.addRange(i),n.extend(v.node,v.offset)):(i.setEnd(v.node,v.offset),n.addRange(i)))}}for(i=[],n=a;n=n.parentNode;)n.nodeType===1&&i.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<i.length;a++)n=i[a],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var hw=p&&"documentMode"in document&&11>=document.documentMode,Ws=null,Bc=null,ua=null,$c=!1;function lp(n,i,a){var c=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;$c||Ws==null||Ws!==Fr(c)||(c=Ws,"selectionStart"in c&&zc(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),ua&&la(ua,c)||(ua=c,c=bl(Bc,"onSelect"),0<c.length&&(i=new Fs("onSelect","select",null,i,a),n.push({event:i,listeners:c}),i.target=Ws)))}function Dl(n,i){var a={};return a[n.toLowerCase()]=i.toLowerCase(),a["Webkit"+n]="webkit"+i,a["Moz"+n]="moz"+i,a}var Gs={animationend:Dl("Animation","AnimationEnd"),animationiteration:Dl("Animation","AnimationIteration"),animationstart:Dl("Animation","AnimationStart"),transitionend:Dl("Transition","TransitionEnd")},qc={},up={};p&&(up=document.createElement("div").style,"AnimationEvent"in window||(delete Gs.animationend.animation,delete Gs.animationiteration.animation,delete Gs.animationstart.animation),"TransitionEvent"in window||delete Gs.transitionend.transition);function Vl(n){if(qc[n])return qc[n];if(!Gs[n])return n;var i=Gs[n],a;for(a in i)if(i.hasOwnProperty(a)&&a in up)return qc[n]=i[a];return n}var cp=Vl("animationend"),hp=Vl("animationiteration"),dp=Vl("animationstart"),fp=Vl("transitionend"),pp=new Map,mp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Qr(n,i){pp.set(n,i),l(i,[n])}for(var Hc=0;Hc<mp.length;Hc++){var Wc=mp[Hc],dw=Wc.toLowerCase(),fw=Wc[0].toUpperCase()+Wc.slice(1);Qr(dw,"on"+fw)}Qr(cp,"onAnimationEnd"),Qr(hp,"onAnimationIteration"),Qr(dp,"onAnimationStart"),Qr("dblclick","onDoubleClick"),Qr("focusin","onFocus"),Qr("focusout","onBlur"),Qr(fp,"onTransitionEnd"),h("onMouseEnter",["mouseout","mouseover"]),h("onMouseLeave",["mouseout","mouseover"]),h("onPointerEnter",["pointerout","pointerover"]),h("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ca="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),pw=new Set("cancel close invalid load scroll toggle".split(" ").concat(ca));function gp(n,i,a){var c=n.type||"unknown-event";n.currentTarget=a,ul(c,i,void 0,n),n.currentTarget=null}function yp(n,i){i=(i&4)!==0;for(var a=0;a<n.length;a++){var c=n[a],d=c.event;c=c.listeners;e:{var m=void 0;if(i)for(var v=c.length-1;0<=v;v--){var I=c[v],k=I.instance,j=I.currentTarget;if(I=I.listener,k!==m&&d.isPropagationStopped())break e;gp(d,I,j),m=k}else for(v=0;v<c.length;v++){if(I=c[v],k=I.instance,j=I.currentTarget,I=I.listener,k!==m&&d.isPropagationStopped())break e;gp(d,I,j),m=k}}}if(Rn)throw n=Ko,Rn=!1,Ko=null,n}function We(n,i){var a=i[eh];a===void 0&&(a=i[eh]=new Set);var c=n+"__bubble";a.has(c)||(_p(i,n,2,!1),a.add(c))}function Gc(n,i,a){var c=0;i&&(c|=4),_p(a,n,c,i)}var Ol="_reactListening"+Math.random().toString(36).slice(2);function ha(n){if(!n[Ol]){n[Ol]=!0,s.forEach(function(a){a!=="selectionchange"&&(pw.has(a)||Gc(a,!1,n),Gc(a,!0,n))});var i=n.nodeType===9?n:n.ownerDocument;i===null||i[Ol]||(i[Ol]=!0,Gc("selectionchange",!1,i))}}function _p(n,i,a,c){switch(ta(i)){case 1:var d=Qe;break;case 4:d=Mc;break;default:d=ea}a=d.bind(null,i,a,n),d=void 0,!Rs||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(d=!0),c?d!==void 0?n.addEventListener(i,a,{capture:!0,passive:d}):n.addEventListener(i,a,!0):d!==void 0?n.addEventListener(i,a,{passive:d}):n.addEventListener(i,a,!1)}function Kc(n,i,a,c,d){var m=c;if((i&1)===0&&(i&2)===0&&c!==null)e:for(;;){if(c===null)return;var v=c.tag;if(v===3||v===4){var I=c.stateNode.containerInfo;if(I===d||I.nodeType===8&&I.parentNode===d)break;if(v===4)for(v=c.return;v!==null;){var k=v.tag;if((k===3||k===4)&&(k=v.stateNode.containerInfo,k===d||k.nodeType===8&&k.parentNode===d))return;v=v.return}for(;I!==null;){if(v=Wi(I),v===null)return;if(k=v.tag,k===5||k===6){c=m=v;continue e}I=I.parentNode}}c=c.return}Go(function(){var j=m,K=Ss(a),Q=[];e:{var G=pp.get(n);if(G!==void 0){var ee=Fs,se=n;switch(n){case"keypress":if(Ms(a)===0)break e;case"keydown":case"keyup":ee=f;break;case"focusin":se="focus",ee=Bs;break;case"focusout":se="blur",ee=Bs;break;case"beforeblur":case"afterblur":ee=Bs;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ee=js;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ee=Sl;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ee=z;break;case cp:case hp:case dp:ee=Tr;break;case fp:ee=Fe;break;case"scroll":ee=Fc;break;case"wheel":ee=Ne;break;case"copy":case"cut":case"paste":ee=Rl;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ee=w}var oe=(i&4)!==0,rt=!oe&&n==="scroll",L=oe?G!==null?G+"Capture":null:G;oe=[];for(var N=j,F;N!==null;){F=N;var Y=F.stateNode;if(F.tag===5&&Y!==null&&(F=Y,L!==null&&(Y=nt(N,L),Y!=null&&oe.push(da(N,Y,F)))),rt)break;N=N.return}0<oe.length&&(G=new ee(G,se,null,a,K),Q.push({event:G,listeners:oe}))}}if((i&7)===0){e:{if(G=n==="mouseover"||n==="pointerover",ee=n==="mouseout"||n==="pointerout",G&&a!==Vi&&(se=a.relatedTarget||a.fromElement)&&(Wi(se)||se[Ir]))break e;if((ee||G)&&(G=K.window===K?K:(G=K.ownerDocument)?G.defaultView||G.parentWindow:window,ee?(se=a.relatedTarget||a.toElement,ee=j,se=se?Wi(se):null,se!==null&&(rt=kn(se),se!==rt||se.tag!==5&&se.tag!==6)&&(se=null)):(ee=null,se=j),ee!==se)){if(oe=js,Y="onMouseLeave",L="onMouseEnter",N="mouse",(n==="pointerout"||n==="pointerover")&&(oe=w,Y="onPointerLeave",L="onPointerEnter",N="pointer"),rt=ee==null?G:Xs(ee),F=se==null?G:Xs(se),G=new oe(Y,N+"leave",ee,a,K),G.target=rt,G.relatedTarget=F,Y=null,Wi(K)===j&&(oe=new oe(L,N+"enter",se,a,K),oe.target=F,oe.relatedTarget=rt,Y=oe),rt=Y,ee&&se)t:{for(oe=ee,L=se,N=0,F=oe;F;F=Ks(F))N++;for(F=0,Y=L;Y;Y=Ks(Y))F++;for(;0<N-F;)oe=Ks(oe),N--;for(;0<F-N;)L=Ks(L),F--;for(;N--;){if(oe===L||L!==null&&oe===L.alternate)break t;oe=Ks(oe),L=Ks(L)}oe=null}else oe=null;ee!==null&&vp(Q,G,ee,oe,!1),se!==null&&rt!==null&&vp(Q,rt,se,oe,!0)}}e:{if(G=j?Xs(j):window,ee=G.nodeName&&G.nodeName.toLowerCase(),ee==="select"||ee==="input"&&G.type==="file")var ae=iw;else if(Jf(G))if(ep)ae=lw;else{ae=ow;var fe=sw}else(ee=G.nodeName)&&ee.toLowerCase()==="input"&&(G.type==="checkbox"||G.type==="radio")&&(ae=aw);if(ae&&(ae=ae(n,j))){Zf(Q,ae,a,K);break e}fe&&fe(n,G,j),n==="focusout"&&(fe=G._wrapperState)&&fe.controlled&&G.type==="number"&&Es(G,"number",G.value)}switch(fe=j?Xs(j):window,n){case"focusin":(Jf(fe)||fe.contentEditable==="true")&&(Ws=fe,Bc=j,ua=null);break;case"focusout":ua=Bc=Ws=null;break;case"mousedown":$c=!0;break;case"contextmenu":case"mouseup":case"dragend":$c=!1,lp(Q,a,K);break;case"selectionchange":if(hw)break;case"keydown":case"keyup":lp(Q,a,K)}var pe;if(st)e:{switch(n){case"compositionstart":var ye="onCompositionStart";break e;case"compositionend":ye="onCompositionEnd";break e;case"compositionupdate":ye="onCompositionUpdate";break e}ye=void 0}else Hs?Xf(n,a)&&(ye="onCompositionEnd"):n==="keydown"&&a.keyCode===229&&(ye="onCompositionStart");ye&&(Hi&&a.locale!=="ko"&&(Hs||ye!=="onCompositionStart"?ye==="onCompositionEnd"&&Hs&&(pe=na()):(on=K,Ls="value"in on?on.value:on.textContent,Hs=!0)),fe=bl(j,ye),0<fe.length&&(ye=new sa(ye,n,null,a,K),Q.push({event:ye,listeners:fe}),pe?ye.data=pe:(pe=Yf(a),pe!==null&&(ye.data=pe)))),(pe=an?ew(n,a):tw(n,a))&&(j=bl(j,"onBeforeInput"),0<j.length&&(K=new sa("onBeforeInput","beforeinput",null,a,K),Q.push({event:K,listeners:j}),K.data=pe))}yp(Q,i)})}function da(n,i,a){return{instance:n,listener:i,currentTarget:a}}function bl(n,i){for(var a=i+"Capture",c=[];n!==null;){var d=n,m=d.stateNode;d.tag===5&&m!==null&&(d=m,m=nt(n,a),m!=null&&c.unshift(da(n,m,d)),m=nt(n,i),m!=null&&c.push(da(n,m,d))),n=n.return}return c}function Ks(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function vp(n,i,a,c,d){for(var m=i._reactName,v=[];a!==null&&a!==c;){var I=a,k=I.alternate,j=I.stateNode;if(k!==null&&k===c)break;I.tag===5&&j!==null&&(I=j,d?(k=nt(a,m),k!=null&&v.unshift(da(a,k,I))):d||(k=nt(a,m),k!=null&&v.push(da(a,k,I)))),a=a.return}v.length!==0&&n.push({event:i,listeners:v})}var mw=/\r\n?/g,gw=/\u0000|\uFFFD/g;function wp(n){return(typeof n=="string"?n:""+n).replace(mw,`
`).replace(gw,"")}function Ll(n,i,a){if(i=wp(i),wp(n)!==i&&a)throw Error(t(425))}function Ml(){}var Qc=null,Xc=null;function Yc(n,i){return n==="textarea"||n==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Jc=typeof setTimeout=="function"?setTimeout:void 0,yw=typeof clearTimeout=="function"?clearTimeout:void 0,Ep=typeof Promise=="function"?Promise:void 0,_w=typeof queueMicrotask=="function"?queueMicrotask:typeof Ep<"u"?function(n){return Ep.resolve(null).then(n).catch(vw)}:Jc;function vw(n){setTimeout(function(){throw n})}function Zc(n,i){var a=i,c=0;do{var d=a.nextSibling;if(n.removeChild(a),d&&d.nodeType===8)if(a=d.data,a==="/$"){if(c===0){n.removeChild(d),Vn(i);return}c--}else a!=="$"&&a!=="$?"&&a!=="$!"||c++;a=d}while(a);Vn(i)}function Xr(n){for(;n!=null;n=n.nextSibling){var i=n.nodeType;if(i===1||i===3)break;if(i===8){if(i=n.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return n}function Tp(n){n=n.previousSibling;for(var i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="$"||a==="$!"||a==="$?"){if(i===0)return n;i--}else a==="/$"&&i++}n=n.previousSibling}return null}var Qs=Math.random().toString(36).slice(2),er="__reactFiber$"+Qs,fa="__reactProps$"+Qs,Ir="__reactContainer$"+Qs,eh="__reactEvents$"+Qs,ww="__reactListeners$"+Qs,Ew="__reactHandles$"+Qs;function Wi(n){var i=n[er];if(i)return i;for(var a=n.parentNode;a;){if(i=a[Ir]||a[er]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(n=Tp(n);n!==null;){if(a=n[er])return a;n=Tp(n)}return i}n=a,a=n.parentNode}return null}function pa(n){return n=n[er]||n[Ir],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function Xs(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function Fl(n){return n[fa]||null}var th=[],Ys=-1;function Yr(n){return{current:n}}function Ge(n){0>Ys||(n.current=th[Ys],th[Ys]=null,Ys--)}function qe(n,i){Ys++,th[Ys]=n.current,n.current=i}var Jr={},Ot=Yr(Jr),Kt=Yr(!1),Gi=Jr;function Js(n,i){var a=n.type.contextTypes;if(!a)return Jr;var c=n.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===i)return c.__reactInternalMemoizedMaskedChildContext;var d={},m;for(m in a)d[m]=i[m];return c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=i,n.__reactInternalMemoizedMaskedChildContext=d),d}function Qt(n){return n=n.childContextTypes,n!=null}function Ul(){Ge(Kt),Ge(Ot)}function Ip(n,i,a){if(Ot.current!==Jr)throw Error(t(168));qe(Ot,i),qe(Kt,a)}function Sp(n,i,a){var c=n.stateNode;if(i=i.childContextTypes,typeof c.getChildContext!="function")return a;c=c.getChildContext();for(var d in c)if(!(d in i))throw Error(t(108,be(n)||"Unknown",d));return re({},a,c)}function jl(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||Jr,Gi=Ot.current,qe(Ot,n),qe(Kt,Kt.current),!0}function Ap(n,i,a){var c=n.stateNode;if(!c)throw Error(t(169));a?(n=Sp(n,i,Gi),c.__reactInternalMemoizedMergedChildContext=n,Ge(Kt),Ge(Ot),qe(Ot,n)):Ge(Kt),qe(Kt,a)}var Sr=null,zl=!1,nh=!1;function Cp(n){Sr===null?Sr=[n]:Sr.push(n)}function Tw(n){zl=!0,Cp(n)}function Zr(){if(!nh&&Sr!==null){nh=!0;var n=0,i=Pe;try{var a=Sr;for(Pe=1;n<a.length;n++){var c=a[n];do c=c(!0);while(c!==null)}Sr=null,zl=!1}catch(d){throw Sr!==null&&(Sr=Sr.slice(n+1)),Ns(Fi,Zr),d}finally{Pe=i,nh=!1}}return null}var Zs=[],eo=0,Bl=null,$l=0,gn=[],yn=0,Ki=null,Ar=1,Cr="";function Qi(n,i){Zs[eo++]=$l,Zs[eo++]=Bl,Bl=n,$l=i}function Rp(n,i,a){gn[yn++]=Ar,gn[yn++]=Cr,gn[yn++]=Ki,Ki=n;var c=Ar;n=Cr;var d=32-Bt(c)-1;c&=~(1<<d),a+=1;var m=32-Bt(i)+d;if(30<m){var v=d-d%5;m=(c&(1<<v)-1).toString(32),c>>=v,d-=v,Ar=1<<32-Bt(i)+d|a<<d|c,Cr=m+n}else Ar=1<<m|a<<d|c,Cr=n}function rh(n){n.return!==null&&(Qi(n,1),Rp(n,1,0))}function ih(n){for(;n===Bl;)Bl=Zs[--eo],Zs[eo]=null,$l=Zs[--eo],Zs[eo]=null;for(;n===Ki;)Ki=gn[--yn],gn[yn]=null,Cr=gn[--yn],gn[yn]=null,Ar=gn[--yn],gn[yn]=null}var ln=null,un=null,Xe=!1,Ln=null;function kp(n,i){var a=En(5,null,null,0);a.elementType="DELETED",a.stateNode=i,a.return=n,i=n.deletions,i===null?(n.deletions=[a],n.flags|=16):i.push(a)}function Pp(n,i){switch(n.tag){case 5:var a=n.type;return i=i.nodeType!==1||a.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(n.stateNode=i,ln=n,un=Xr(i.firstChild),!0):!1;case 6:return i=n.pendingProps===""||i.nodeType!==3?null:i,i!==null?(n.stateNode=i,ln=n,un=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(a=Ki!==null?{id:Ar,overflow:Cr}:null,n.memoizedState={dehydrated:i,treeContext:a,retryLane:1073741824},a=En(18,null,null,0),a.stateNode=i,a.return=n,n.child=a,ln=n,un=null,!0):!1;default:return!1}}function sh(n){return(n.mode&1)!==0&&(n.flags&128)===0}function oh(n){if(Xe){var i=un;if(i){var a=i;if(!Pp(n,i)){if(sh(n))throw Error(t(418));i=Xr(a.nextSibling);var c=ln;i&&Pp(n,i)?kp(c,a):(n.flags=n.flags&-4097|2,Xe=!1,ln=n)}}else{if(sh(n))throw Error(t(418));n.flags=n.flags&-4097|2,Xe=!1,ln=n}}}function xp(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;ln=n}function ql(n){if(n!==ln)return!1;if(!Xe)return xp(n),Xe=!0,!1;var i;if((i=n.tag!==3)&&!(i=n.tag!==5)&&(i=n.type,i=i!=="head"&&i!=="body"&&!Yc(n.type,n.memoizedProps)),i&&(i=un)){if(sh(n))throw Np(),Error(t(418));for(;i;)kp(n,i),i=Xr(i.nextSibling)}if(xp(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="/$"){if(i===0){un=Xr(n.nextSibling);break e}i--}else a!=="$"&&a!=="$!"&&a!=="$?"||i++}n=n.nextSibling}un=null}}else un=ln?Xr(n.stateNode.nextSibling):null;return!0}function Np(){for(var n=un;n;)n=Xr(n.nextSibling)}function to(){un=ln=null,Xe=!1}function ah(n){Ln===null?Ln=[n]:Ln.push(n)}var Iw=Ee.ReactCurrentBatchConfig;function ma(n,i,a){if(n=a.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var c=a.stateNode}if(!c)throw Error(t(147,n));var d=c,m=""+n;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===m?i.ref:(i=function(v){var I=d.refs;v===null?delete I[m]:I[m]=v},i._stringRef=m,i)}if(typeof n!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,n))}return n}function Hl(n,i){throw n=Object.prototype.toString.call(i),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":n))}function Dp(n){var i=n._init;return i(n._payload)}function Vp(n){function i(L,N){if(n){var F=L.deletions;F===null?(L.deletions=[N],L.flags|=16):F.push(N)}}function a(L,N){if(!n)return null;for(;N!==null;)i(L,N),N=N.sibling;return null}function c(L,N){for(L=new Map;N!==null;)N.key!==null?L.set(N.key,N):L.set(N.index,N),N=N.sibling;return L}function d(L,N){return L=ai(L,N),L.index=0,L.sibling=null,L}function m(L,N,F){return L.index=F,n?(F=L.alternate,F!==null?(F=F.index,F<N?(L.flags|=2,N):F):(L.flags|=2,N)):(L.flags|=1048576,N)}function v(L){return n&&L.alternate===null&&(L.flags|=2),L}function I(L,N,F,Y){return N===null||N.tag!==6?(N=Jh(F,L.mode,Y),N.return=L,N):(N=d(N,F),N.return=L,N)}function k(L,N,F,Y){var ae=F.type;return ae===x?K(L,N,F.props.children,Y,F.key):N!==null&&(N.elementType===ae||typeof ae=="object"&&ae!==null&&ae.$$typeof===Vt&&Dp(ae)===N.type)?(Y=d(N,F.props),Y.ref=ma(L,N,F),Y.return=L,Y):(Y=mu(F.type,F.key,F.props,null,L.mode,Y),Y.ref=ma(L,N,F),Y.return=L,Y)}function j(L,N,F,Y){return N===null||N.tag!==4||N.stateNode.containerInfo!==F.containerInfo||N.stateNode.implementation!==F.implementation?(N=Zh(F,L.mode,Y),N.return=L,N):(N=d(N,F.children||[]),N.return=L,N)}function K(L,N,F,Y,ae){return N===null||N.tag!==7?(N=rs(F,L.mode,Y,ae),N.return=L,N):(N=d(N,F),N.return=L,N)}function Q(L,N,F){if(typeof N=="string"&&N!==""||typeof N=="number")return N=Jh(""+N,L.mode,F),N.return=L,N;if(typeof N=="object"&&N!==null){switch(N.$$typeof){case je:return F=mu(N.type,N.key,N.props,null,L.mode,F),F.ref=ma(L,null,N),F.return=L,F;case Te:return N=Zh(N,L.mode,F),N.return=L,N;case Vt:var Y=N._init;return Q(L,Y(N._payload),F)}if(pr(N)||de(N))return N=rs(N,L.mode,F,null),N.return=L,N;Hl(L,N)}return null}function G(L,N,F,Y){var ae=N!==null?N.key:null;if(typeof F=="string"&&F!==""||typeof F=="number")return ae!==null?null:I(L,N,""+F,Y);if(typeof F=="object"&&F!==null){switch(F.$$typeof){case je:return F.key===ae?k(L,N,F,Y):null;case Te:return F.key===ae?j(L,N,F,Y):null;case Vt:return ae=F._init,G(L,N,ae(F._payload),Y)}if(pr(F)||de(F))return ae!==null?null:K(L,N,F,Y,null);Hl(L,F)}return null}function ee(L,N,F,Y,ae){if(typeof Y=="string"&&Y!==""||typeof Y=="number")return L=L.get(F)||null,I(N,L,""+Y,ae);if(typeof Y=="object"&&Y!==null){switch(Y.$$typeof){case je:return L=L.get(Y.key===null?F:Y.key)||null,k(N,L,Y,ae);case Te:return L=L.get(Y.key===null?F:Y.key)||null,j(N,L,Y,ae);case Vt:var fe=Y._init;return ee(L,N,F,fe(Y._payload),ae)}if(pr(Y)||de(Y))return L=L.get(F)||null,K(N,L,Y,ae,null);Hl(N,Y)}return null}function se(L,N,F,Y){for(var ae=null,fe=null,pe=N,ye=N=0,It=null;pe!==null&&ye<F.length;ye++){pe.index>ye?(It=pe,pe=null):It=pe.sibling;var Oe=G(L,pe,F[ye],Y);if(Oe===null){pe===null&&(pe=It);break}n&&pe&&Oe.alternate===null&&i(L,pe),N=m(Oe,N,ye),fe===null?ae=Oe:fe.sibling=Oe,fe=Oe,pe=It}if(ye===F.length)return a(L,pe),Xe&&Qi(L,ye),ae;if(pe===null){for(;ye<F.length;ye++)pe=Q(L,F[ye],Y),pe!==null&&(N=m(pe,N,ye),fe===null?ae=pe:fe.sibling=pe,fe=pe);return Xe&&Qi(L,ye),ae}for(pe=c(L,pe);ye<F.length;ye++)It=ee(pe,L,ye,F[ye],Y),It!==null&&(n&&It.alternate!==null&&pe.delete(It.key===null?ye:It.key),N=m(It,N,ye),fe===null?ae=It:fe.sibling=It,fe=It);return n&&pe.forEach(function(li){return i(L,li)}),Xe&&Qi(L,ye),ae}function oe(L,N,F,Y){var ae=de(F);if(typeof ae!="function")throw Error(t(150));if(F=ae.call(F),F==null)throw Error(t(151));for(var fe=ae=null,pe=N,ye=N=0,It=null,Oe=F.next();pe!==null&&!Oe.done;ye++,Oe=F.next()){pe.index>ye?(It=pe,pe=null):It=pe.sibling;var li=G(L,pe,Oe.value,Y);if(li===null){pe===null&&(pe=It);break}n&&pe&&li.alternate===null&&i(L,pe),N=m(li,N,ye),fe===null?ae=li:fe.sibling=li,fe=li,pe=It}if(Oe.done)return a(L,pe),Xe&&Qi(L,ye),ae;if(pe===null){for(;!Oe.done;ye++,Oe=F.next())Oe=Q(L,Oe.value,Y),Oe!==null&&(N=m(Oe,N,ye),fe===null?ae=Oe:fe.sibling=Oe,fe=Oe);return Xe&&Qi(L,ye),ae}for(pe=c(L,pe);!Oe.done;ye++,Oe=F.next())Oe=ee(pe,L,ye,Oe.value,Y),Oe!==null&&(n&&Oe.alternate!==null&&pe.delete(Oe.key===null?ye:Oe.key),N=m(Oe,N,ye),fe===null?ae=Oe:fe.sibling=Oe,fe=Oe);return n&&pe.forEach(function(nE){return i(L,nE)}),Xe&&Qi(L,ye),ae}function rt(L,N,F,Y){if(typeof F=="object"&&F!==null&&F.type===x&&F.key===null&&(F=F.props.children),typeof F=="object"&&F!==null){switch(F.$$typeof){case je:e:{for(var ae=F.key,fe=N;fe!==null;){if(fe.key===ae){if(ae=F.type,ae===x){if(fe.tag===7){a(L,fe.sibling),N=d(fe,F.props.children),N.return=L,L=N;break e}}else if(fe.elementType===ae||typeof ae=="object"&&ae!==null&&ae.$$typeof===Vt&&Dp(ae)===fe.type){a(L,fe.sibling),N=d(fe,F.props),N.ref=ma(L,fe,F),N.return=L,L=N;break e}a(L,fe);break}else i(L,fe);fe=fe.sibling}F.type===x?(N=rs(F.props.children,L.mode,Y,F.key),N.return=L,L=N):(Y=mu(F.type,F.key,F.props,null,L.mode,Y),Y.ref=ma(L,N,F),Y.return=L,L=Y)}return v(L);case Te:e:{for(fe=F.key;N!==null;){if(N.key===fe)if(N.tag===4&&N.stateNode.containerInfo===F.containerInfo&&N.stateNode.implementation===F.implementation){a(L,N.sibling),N=d(N,F.children||[]),N.return=L,L=N;break e}else{a(L,N);break}else i(L,N);N=N.sibling}N=Zh(F,L.mode,Y),N.return=L,L=N}return v(L);case Vt:return fe=F._init,rt(L,N,fe(F._payload),Y)}if(pr(F))return se(L,N,F,Y);if(de(F))return oe(L,N,F,Y);Hl(L,F)}return typeof F=="string"&&F!==""||typeof F=="number"?(F=""+F,N!==null&&N.tag===6?(a(L,N.sibling),N=d(N,F),N.return=L,L=N):(a(L,N),N=Jh(F,L.mode,Y),N.return=L,L=N),v(L)):a(L,N)}return rt}var no=Vp(!0),Op=Vp(!1),Wl=Yr(null),Gl=null,ro=null,lh=null;function uh(){lh=ro=Gl=null}function ch(n){var i=Wl.current;Ge(Wl),n._currentValue=i}function hh(n,i,a){for(;n!==null;){var c=n.alternate;if((n.childLanes&i)!==i?(n.childLanes|=i,c!==null&&(c.childLanes|=i)):c!==null&&(c.childLanes&i)!==i&&(c.childLanes|=i),n===a)break;n=n.return}}function io(n,i){Gl=n,lh=ro=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&i)!==0&&(Xt=!0),n.firstContext=null)}function _n(n){var i=n._currentValue;if(lh!==n)if(n={context:n,memoizedValue:i,next:null},ro===null){if(Gl===null)throw Error(t(308));ro=n,Gl.dependencies={lanes:0,firstContext:n}}else ro=ro.next=n;return i}var Xi=null;function dh(n){Xi===null?Xi=[n]:Xi.push(n)}function bp(n,i,a,c){var d=i.interleaved;return d===null?(a.next=a,dh(i)):(a.next=d.next,d.next=a),i.interleaved=a,Rr(n,c)}function Rr(n,i){n.lanes|=i;var a=n.alternate;for(a!==null&&(a.lanes|=i),a=n,n=n.return;n!==null;)n.childLanes|=i,a=n.alternate,a!==null&&(a.childLanes|=i),a=n,n=n.return;return a.tag===3?a.stateNode:null}var ei=!1;function fh(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Lp(n,i){n=n.updateQueue,i.updateQueue===n&&(i.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function kr(n,i){return{eventTime:n,lane:i,tag:0,payload:null,callback:null,next:null}}function ti(n,i,a){var c=n.updateQueue;if(c===null)return null;if(c=c.shared,(Ve&2)!==0){var d=c.pending;return d===null?i.next=i:(i.next=d.next,d.next=i),c.pending=i,Rr(n,a)}return d=c.interleaved,d===null?(i.next=i,dh(c)):(i.next=d.next,d.next=i),c.interleaved=i,Rr(n,a)}function Kl(n,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194240)!==0)){var c=i.lanes;c&=n.pendingLanes,a|=c,i.lanes=a,qr(n,a)}}function Mp(n,i){var a=n.updateQueue,c=n.alternate;if(c!==null&&(c=c.updateQueue,a===c)){var d=null,m=null;if(a=a.firstBaseUpdate,a!==null){do{var v={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};m===null?d=m=v:m=m.next=v,a=a.next}while(a!==null);m===null?d=m=i:m=m.next=i}else d=m=i;a={baseState:c.baseState,firstBaseUpdate:d,lastBaseUpdate:m,shared:c.shared,effects:c.effects},n.updateQueue=a;return}n=a.lastBaseUpdate,n===null?a.firstBaseUpdate=i:n.next=i,a.lastBaseUpdate=i}function Ql(n,i,a,c){var d=n.updateQueue;ei=!1;var m=d.firstBaseUpdate,v=d.lastBaseUpdate,I=d.shared.pending;if(I!==null){d.shared.pending=null;var k=I,j=k.next;k.next=null,v===null?m=j:v.next=j,v=k;var K=n.alternate;K!==null&&(K=K.updateQueue,I=K.lastBaseUpdate,I!==v&&(I===null?K.firstBaseUpdate=j:I.next=j,K.lastBaseUpdate=k))}if(m!==null){var Q=d.baseState;v=0,K=j=k=null,I=m;do{var G=I.lane,ee=I.eventTime;if((c&G)===G){K!==null&&(K=K.next={eventTime:ee,lane:0,tag:I.tag,payload:I.payload,callback:I.callback,next:null});e:{var se=n,oe=I;switch(G=i,ee=a,oe.tag){case 1:if(se=oe.payload,typeof se=="function"){Q=se.call(ee,Q,G);break e}Q=se;break e;case 3:se.flags=se.flags&-65537|128;case 0:if(se=oe.payload,G=typeof se=="function"?se.call(ee,Q,G):se,G==null)break e;Q=re({},Q,G);break e;case 2:ei=!0}}I.callback!==null&&I.lane!==0&&(n.flags|=64,G=d.effects,G===null?d.effects=[I]:G.push(I))}else ee={eventTime:ee,lane:G,tag:I.tag,payload:I.payload,callback:I.callback,next:null},K===null?(j=K=ee,k=Q):K=K.next=ee,v|=G;if(I=I.next,I===null){if(I=d.shared.pending,I===null)break;G=I,I=G.next,G.next=null,d.lastBaseUpdate=G,d.shared.pending=null}}while(!0);if(K===null&&(k=Q),d.baseState=k,d.firstBaseUpdate=j,d.lastBaseUpdate=K,i=d.shared.interleaved,i!==null){d=i;do v|=d.lane,d=d.next;while(d!==i)}else m===null&&(d.shared.lanes=0);Zi|=v,n.lanes=v,n.memoizedState=Q}}function Fp(n,i,a){if(n=i.effects,i.effects=null,n!==null)for(i=0;i<n.length;i++){var c=n[i],d=c.callback;if(d!==null){if(c.callback=null,c=a,typeof d!="function")throw Error(t(191,d));d.call(c)}}}var ga={},tr=Yr(ga),ya=Yr(ga),_a=Yr(ga);function Yi(n){if(n===ga)throw Error(t(174));return n}function ph(n,i){switch(qe(_a,i),qe(ya,n),qe(tr,ga),n=i.nodeType,n){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:ht(null,"");break;default:n=n===8?i.parentNode:i,i=n.namespaceURI||null,n=n.tagName,i=ht(i,n)}Ge(tr),qe(tr,i)}function so(){Ge(tr),Ge(ya),Ge(_a)}function Up(n){Yi(_a.current);var i=Yi(tr.current),a=ht(i,n.type);i!==a&&(qe(ya,n),qe(tr,a))}function mh(n){ya.current===n&&(Ge(tr),Ge(ya))}var Ye=Yr(0);function Xl(n){for(var i=n;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var gh=[];function yh(){for(var n=0;n<gh.length;n++)gh[n]._workInProgressVersionPrimary=null;gh.length=0}var Yl=Ee.ReactCurrentDispatcher,_h=Ee.ReactCurrentBatchConfig,Ji=0,Je=null,ft=null,Et=null,Jl=!1,va=!1,wa=0,Sw=0;function bt(){throw Error(t(321))}function vh(n,i){if(i===null)return!1;for(var a=0;a<i.length&&a<n.length;a++)if(!bn(n[a],i[a]))return!1;return!0}function wh(n,i,a,c,d,m){if(Ji=m,Je=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,Yl.current=n===null||n.memoizedState===null?kw:Pw,n=a(c,d),va){m=0;do{if(va=!1,wa=0,25<=m)throw Error(t(301));m+=1,Et=ft=null,i.updateQueue=null,Yl.current=xw,n=a(c,d)}while(va)}if(Yl.current=tu,i=ft!==null&&ft.next!==null,Ji=0,Et=ft=Je=null,Jl=!1,i)throw Error(t(300));return n}function Eh(){var n=wa!==0;return wa=0,n}function nr(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Et===null?Je.memoizedState=Et=n:Et=Et.next=n,Et}function vn(){if(ft===null){var n=Je.alternate;n=n!==null?n.memoizedState:null}else n=ft.next;var i=Et===null?Je.memoizedState:Et.next;if(i!==null)Et=i,ft=n;else{if(n===null)throw Error(t(310));ft=n,n={memoizedState:ft.memoizedState,baseState:ft.baseState,baseQueue:ft.baseQueue,queue:ft.queue,next:null},Et===null?Je.memoizedState=Et=n:Et=Et.next=n}return Et}function Ea(n,i){return typeof i=="function"?i(n):i}function Th(n){var i=vn(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=ft,d=c.baseQueue,m=a.pending;if(m!==null){if(d!==null){var v=d.next;d.next=m.next,m.next=v}c.baseQueue=d=m,a.pending=null}if(d!==null){m=d.next,c=c.baseState;var I=v=null,k=null,j=m;do{var K=j.lane;if((Ji&K)===K)k!==null&&(k=k.next={lane:0,action:j.action,hasEagerState:j.hasEagerState,eagerState:j.eagerState,next:null}),c=j.hasEagerState?j.eagerState:n(c,j.action);else{var Q={lane:K,action:j.action,hasEagerState:j.hasEagerState,eagerState:j.eagerState,next:null};k===null?(I=k=Q,v=c):k=k.next=Q,Je.lanes|=K,Zi|=K}j=j.next}while(j!==null&&j!==m);k===null?v=c:k.next=I,bn(c,i.memoizedState)||(Xt=!0),i.memoizedState=c,i.baseState=v,i.baseQueue=k,a.lastRenderedState=c}if(n=a.interleaved,n!==null){d=n;do m=d.lane,Je.lanes|=m,Zi|=m,d=d.next;while(d!==n)}else d===null&&(a.lanes=0);return[i.memoizedState,a.dispatch]}function Ih(n){var i=vn(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=a.dispatch,d=a.pending,m=i.memoizedState;if(d!==null){a.pending=null;var v=d=d.next;do m=n(m,v.action),v=v.next;while(v!==d);bn(m,i.memoizedState)||(Xt=!0),i.memoizedState=m,i.baseQueue===null&&(i.baseState=m),a.lastRenderedState=m}return[m,c]}function jp(){}function zp(n,i){var a=Je,c=vn(),d=i(),m=!bn(c.memoizedState,d);if(m&&(c.memoizedState=d,Xt=!0),c=c.queue,Sh(qp.bind(null,a,c,n),[n]),c.getSnapshot!==i||m||Et!==null&&Et.memoizedState.tag&1){if(a.flags|=2048,Ta(9,$p.bind(null,a,c,d,i),void 0,null),Tt===null)throw Error(t(349));(Ji&30)!==0||Bp(a,i,d)}return d}function Bp(n,i,a){n.flags|=16384,n={getSnapshot:i,value:a},i=Je.updateQueue,i===null?(i={lastEffect:null,stores:null},Je.updateQueue=i,i.stores=[n]):(a=i.stores,a===null?i.stores=[n]:a.push(n))}function $p(n,i,a,c){i.value=a,i.getSnapshot=c,Hp(i)&&Wp(n)}function qp(n,i,a){return a(function(){Hp(i)&&Wp(n)})}function Hp(n){var i=n.getSnapshot;n=n.value;try{var a=i();return!bn(n,a)}catch{return!0}}function Wp(n){var i=Rr(n,1);i!==null&&jn(i,n,1,-1)}function Gp(n){var i=nr();return typeof n=="function"&&(n=n()),i.memoizedState=i.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ea,lastRenderedState:n},i.queue=n,n=n.dispatch=Rw.bind(null,Je,n),[i.memoizedState,n]}function Ta(n,i,a,c){return n={tag:n,create:i,destroy:a,deps:c,next:null},i=Je.updateQueue,i===null?(i={lastEffect:null,stores:null},Je.updateQueue=i,i.lastEffect=n.next=n):(a=i.lastEffect,a===null?i.lastEffect=n.next=n:(c=a.next,a.next=n,n.next=c,i.lastEffect=n)),n}function Kp(){return vn().memoizedState}function Zl(n,i,a,c){var d=nr();Je.flags|=n,d.memoizedState=Ta(1|i,a,void 0,c===void 0?null:c)}function eu(n,i,a,c){var d=vn();c=c===void 0?null:c;var m=void 0;if(ft!==null){var v=ft.memoizedState;if(m=v.destroy,c!==null&&vh(c,v.deps)){d.memoizedState=Ta(i,a,m,c);return}}Je.flags|=n,d.memoizedState=Ta(1|i,a,m,c)}function Qp(n,i){return Zl(8390656,8,n,i)}function Sh(n,i){return eu(2048,8,n,i)}function Xp(n,i){return eu(4,2,n,i)}function Yp(n,i){return eu(4,4,n,i)}function Jp(n,i){if(typeof i=="function")return n=n(),i(n),function(){i(null)};if(i!=null)return n=n(),i.current=n,function(){i.current=null}}function Zp(n,i,a){return a=a!=null?a.concat([n]):null,eu(4,4,Jp.bind(null,i,n),a)}function Ah(){}function em(n,i){var a=vn();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&vh(i,c[1])?c[0]:(a.memoizedState=[n,i],n)}function tm(n,i){var a=vn();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&vh(i,c[1])?c[0]:(n=n(),a.memoizedState=[n,i],n)}function nm(n,i,a){return(Ji&21)===0?(n.baseState&&(n.baseState=!1,Xt=!0),n.memoizedState=a):(bn(a,i)||(a=zi(),Je.lanes|=a,Zi|=a,n.baseState=!0),i)}function Aw(n,i){var a=Pe;Pe=a!==0&&4>a?a:4,n(!0);var c=_h.transition;_h.transition={};try{n(!1),i()}finally{Pe=a,_h.transition=c}}function rm(){return vn().memoizedState}function Cw(n,i,a){var c=si(n);if(a={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null},im(n))sm(i,a);else if(a=bp(n,i,a,c),a!==null){var d=Ht();jn(a,n,c,d),om(a,i,c)}}function Rw(n,i,a){var c=si(n),d={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null};if(im(n))sm(i,d);else{var m=n.alternate;if(n.lanes===0&&(m===null||m.lanes===0)&&(m=i.lastRenderedReducer,m!==null))try{var v=i.lastRenderedState,I=m(v,a);if(d.hasEagerState=!0,d.eagerState=I,bn(I,v)){var k=i.interleaved;k===null?(d.next=d,dh(i)):(d.next=k.next,k.next=d),i.interleaved=d;return}}catch{}finally{}a=bp(n,i,d,c),a!==null&&(d=Ht(),jn(a,n,c,d),om(a,i,c))}}function im(n){var i=n.alternate;return n===Je||i!==null&&i===Je}function sm(n,i){va=Jl=!0;var a=n.pending;a===null?i.next=i:(i.next=a.next,a.next=i),n.pending=i}function om(n,i,a){if((a&4194240)!==0){var c=i.lanes;c&=n.pendingLanes,a|=c,i.lanes=a,qr(n,a)}}var tu={readContext:_n,useCallback:bt,useContext:bt,useEffect:bt,useImperativeHandle:bt,useInsertionEffect:bt,useLayoutEffect:bt,useMemo:bt,useReducer:bt,useRef:bt,useState:bt,useDebugValue:bt,useDeferredValue:bt,useTransition:bt,useMutableSource:bt,useSyncExternalStore:bt,useId:bt,unstable_isNewReconciler:!1},kw={readContext:_n,useCallback:function(n,i){return nr().memoizedState=[n,i===void 0?null:i],n},useContext:_n,useEffect:Qp,useImperativeHandle:function(n,i,a){return a=a!=null?a.concat([n]):null,Zl(4194308,4,Jp.bind(null,i,n),a)},useLayoutEffect:function(n,i){return Zl(4194308,4,n,i)},useInsertionEffect:function(n,i){return Zl(4,2,n,i)},useMemo:function(n,i){var a=nr();return i=i===void 0?null:i,n=n(),a.memoizedState=[n,i],n},useReducer:function(n,i,a){var c=nr();return i=a!==void 0?a(i):i,c.memoizedState=c.baseState=i,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:i},c.queue=n,n=n.dispatch=Cw.bind(null,Je,n),[c.memoizedState,n]},useRef:function(n){var i=nr();return n={current:n},i.memoizedState=n},useState:Gp,useDebugValue:Ah,useDeferredValue:function(n){return nr().memoizedState=n},useTransition:function(){var n=Gp(!1),i=n[0];return n=Aw.bind(null,n[1]),nr().memoizedState=n,[i,n]},useMutableSource:function(){},useSyncExternalStore:function(n,i,a){var c=Je,d=nr();if(Xe){if(a===void 0)throw Error(t(407));a=a()}else{if(a=i(),Tt===null)throw Error(t(349));(Ji&30)!==0||Bp(c,i,a)}d.memoizedState=a;var m={value:a,getSnapshot:i};return d.queue=m,Qp(qp.bind(null,c,m,n),[n]),c.flags|=2048,Ta(9,$p.bind(null,c,m,a,i),void 0,null),a},useId:function(){var n=nr(),i=Tt.identifierPrefix;if(Xe){var a=Cr,c=Ar;a=(c&~(1<<32-Bt(c)-1)).toString(32)+a,i=":"+i+"R"+a,a=wa++,0<a&&(i+="H"+a.toString(32)),i+=":"}else a=Sw++,i=":"+i+"r"+a.toString(32)+":";return n.memoizedState=i},unstable_isNewReconciler:!1},Pw={readContext:_n,useCallback:em,useContext:_n,useEffect:Sh,useImperativeHandle:Zp,useInsertionEffect:Xp,useLayoutEffect:Yp,useMemo:tm,useReducer:Th,useRef:Kp,useState:function(){return Th(Ea)},useDebugValue:Ah,useDeferredValue:function(n){var i=vn();return nm(i,ft.memoizedState,n)},useTransition:function(){var n=Th(Ea)[0],i=vn().memoizedState;return[n,i]},useMutableSource:jp,useSyncExternalStore:zp,useId:rm,unstable_isNewReconciler:!1},xw={readContext:_n,useCallback:em,useContext:_n,useEffect:Sh,useImperativeHandle:Zp,useInsertionEffect:Xp,useLayoutEffect:Yp,useMemo:tm,useReducer:Ih,useRef:Kp,useState:function(){return Ih(Ea)},useDebugValue:Ah,useDeferredValue:function(n){var i=vn();return ft===null?i.memoizedState=n:nm(i,ft.memoizedState,n)},useTransition:function(){var n=Ih(Ea)[0],i=vn().memoizedState;return[n,i]},useMutableSource:jp,useSyncExternalStore:zp,useId:rm,unstable_isNewReconciler:!1};function Mn(n,i){if(n&&n.defaultProps){i=re({},i),n=n.defaultProps;for(var a in n)i[a]===void 0&&(i[a]=n[a]);return i}return i}function Ch(n,i,a,c){i=n.memoizedState,a=a(c,i),a=a==null?i:re({},i,a),n.memoizedState=a,n.lanes===0&&(n.updateQueue.baseState=a)}var nu={isMounted:function(n){return(n=n._reactInternals)?kn(n)===n:!1},enqueueSetState:function(n,i,a){n=n._reactInternals;var c=Ht(),d=si(n),m=kr(c,d);m.payload=i,a!=null&&(m.callback=a),i=ti(n,m,d),i!==null&&(jn(i,n,d,c),Kl(i,n,d))},enqueueReplaceState:function(n,i,a){n=n._reactInternals;var c=Ht(),d=si(n),m=kr(c,d);m.tag=1,m.payload=i,a!=null&&(m.callback=a),i=ti(n,m,d),i!==null&&(jn(i,n,d,c),Kl(i,n,d))},enqueueForceUpdate:function(n,i){n=n._reactInternals;var a=Ht(),c=si(n),d=kr(a,c);d.tag=2,i!=null&&(d.callback=i),i=ti(n,d,c),i!==null&&(jn(i,n,c,a),Kl(i,n,c))}};function am(n,i,a,c,d,m,v){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(c,m,v):i.prototype&&i.prototype.isPureReactComponent?!la(a,c)||!la(d,m):!0}function lm(n,i,a){var c=!1,d=Jr,m=i.contextType;return typeof m=="object"&&m!==null?m=_n(m):(d=Qt(i)?Gi:Ot.current,c=i.contextTypes,m=(c=c!=null)?Js(n,d):Jr),i=new i(a,m),n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=nu,n.stateNode=i,i._reactInternals=n,c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=d,n.__reactInternalMemoizedMaskedChildContext=m),i}function um(n,i,a,c){n=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,c),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,c),i.state!==n&&nu.enqueueReplaceState(i,i.state,null)}function Rh(n,i,a,c){var d=n.stateNode;d.props=a,d.state=n.memoizedState,d.refs={},fh(n);var m=i.contextType;typeof m=="object"&&m!==null?d.context=_n(m):(m=Qt(i)?Gi:Ot.current,d.context=Js(n,m)),d.state=n.memoizedState,m=i.getDerivedStateFromProps,typeof m=="function"&&(Ch(n,i,m,a),d.state=n.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(i=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),i!==d.state&&nu.enqueueReplaceState(d,d.state,null),Ql(n,a,d,c),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308)}function oo(n,i){try{var a="",c=i;do a+=Ae(c),c=c.return;while(c);var d=a}catch(m){d=`
Error generating stack: `+m.message+`
`+m.stack}return{value:n,source:i,stack:d,digest:null}}function kh(n,i,a){return{value:n,source:null,stack:a??null,digest:i??null}}function Ph(n,i){try{console.error(i.value)}catch(a){setTimeout(function(){throw a})}}var Nw=typeof WeakMap=="function"?WeakMap:Map;function cm(n,i,a){a=kr(-1,a),a.tag=3,a.payload={element:null};var c=i.value;return a.callback=function(){uu||(uu=!0,qh=c),Ph(n,i)},a}function hm(n,i,a){a=kr(-1,a),a.tag=3;var c=n.type.getDerivedStateFromError;if(typeof c=="function"){var d=i.value;a.payload=function(){return c(d)},a.callback=function(){Ph(n,i)}}var m=n.stateNode;return m!==null&&typeof m.componentDidCatch=="function"&&(a.callback=function(){Ph(n,i),typeof c!="function"&&(ri===null?ri=new Set([this]):ri.add(this));var v=i.stack;this.componentDidCatch(i.value,{componentStack:v!==null?v:""})}),a}function dm(n,i,a){var c=n.pingCache;if(c===null){c=n.pingCache=new Nw;var d=new Set;c.set(i,d)}else d=c.get(i),d===void 0&&(d=new Set,c.set(i,d));d.has(a)||(d.add(a),n=Hw.bind(null,n,i,a),i.then(n,n))}function fm(n){do{var i;if((i=n.tag===13)&&(i=n.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return n;n=n.return}while(n!==null);return null}function pm(n,i,a,c,d){return(n.mode&1)===0?(n===i?n.flags|=65536:(n.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(i=kr(-1,1),i.tag=2,ti(a,i,1))),a.lanes|=1),n):(n.flags|=65536,n.lanes=d,n)}var Dw=Ee.ReactCurrentOwner,Xt=!1;function qt(n,i,a,c){i.child=n===null?Op(i,null,a,c):no(i,n.child,a,c)}function mm(n,i,a,c,d){a=a.render;var m=i.ref;return io(i,d),c=wh(n,i,a,c,m,d),a=Eh(),n!==null&&!Xt?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~d,Pr(n,i,d)):(Xe&&a&&rh(i),i.flags|=1,qt(n,i,c,d),i.child)}function gm(n,i,a,c,d){if(n===null){var m=a.type;return typeof m=="function"&&!Yh(m)&&m.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(i.tag=15,i.type=m,ym(n,i,m,c,d)):(n=mu(a.type,null,c,i,i.mode,d),n.ref=i.ref,n.return=i,i.child=n)}if(m=n.child,(n.lanes&d)===0){var v=m.memoizedProps;if(a=a.compare,a=a!==null?a:la,a(v,c)&&n.ref===i.ref)return Pr(n,i,d)}return i.flags|=1,n=ai(m,c),n.ref=i.ref,n.return=i,i.child=n}function ym(n,i,a,c,d){if(n!==null){var m=n.memoizedProps;if(la(m,c)&&n.ref===i.ref)if(Xt=!1,i.pendingProps=c=m,(n.lanes&d)!==0)(n.flags&131072)!==0&&(Xt=!0);else return i.lanes=n.lanes,Pr(n,i,d)}return xh(n,i,a,c,d)}function _m(n,i,a){var c=i.pendingProps,d=c.children,m=n!==null?n.memoizedState:null;if(c.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},qe(lo,cn),cn|=a;else{if((a&1073741824)===0)return n=m!==null?m.baseLanes|a:a,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:n,cachePool:null,transitions:null},i.updateQueue=null,qe(lo,cn),cn|=n,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=m!==null?m.baseLanes:a,qe(lo,cn),cn|=c}else m!==null?(c=m.baseLanes|a,i.memoizedState=null):c=a,qe(lo,cn),cn|=c;return qt(n,i,d,a),i.child}function vm(n,i){var a=i.ref;(n===null&&a!==null||n!==null&&n.ref!==a)&&(i.flags|=512,i.flags|=2097152)}function xh(n,i,a,c,d){var m=Qt(a)?Gi:Ot.current;return m=Js(i,m),io(i,d),a=wh(n,i,a,c,m,d),c=Eh(),n!==null&&!Xt?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~d,Pr(n,i,d)):(Xe&&c&&rh(i),i.flags|=1,qt(n,i,a,d),i.child)}function wm(n,i,a,c,d){if(Qt(a)){var m=!0;jl(i)}else m=!1;if(io(i,d),i.stateNode===null)iu(n,i),lm(i,a,c),Rh(i,a,c,d),c=!0;else if(n===null){var v=i.stateNode,I=i.memoizedProps;v.props=I;var k=v.context,j=a.contextType;typeof j=="object"&&j!==null?j=_n(j):(j=Qt(a)?Gi:Ot.current,j=Js(i,j));var K=a.getDerivedStateFromProps,Q=typeof K=="function"||typeof v.getSnapshotBeforeUpdate=="function";Q||typeof v.UNSAFE_componentWillReceiveProps!="function"&&typeof v.componentWillReceiveProps!="function"||(I!==c||k!==j)&&um(i,v,c,j),ei=!1;var G=i.memoizedState;v.state=G,Ql(i,c,v,d),k=i.memoizedState,I!==c||G!==k||Kt.current||ei?(typeof K=="function"&&(Ch(i,a,K,c),k=i.memoizedState),(I=ei||am(i,a,I,c,G,k,j))?(Q||typeof v.UNSAFE_componentWillMount!="function"&&typeof v.componentWillMount!="function"||(typeof v.componentWillMount=="function"&&v.componentWillMount(),typeof v.UNSAFE_componentWillMount=="function"&&v.UNSAFE_componentWillMount()),typeof v.componentDidMount=="function"&&(i.flags|=4194308)):(typeof v.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=c,i.memoizedState=k),v.props=c,v.state=k,v.context=j,c=I):(typeof v.componentDidMount=="function"&&(i.flags|=4194308),c=!1)}else{v=i.stateNode,Lp(n,i),I=i.memoizedProps,j=i.type===i.elementType?I:Mn(i.type,I),v.props=j,Q=i.pendingProps,G=v.context,k=a.contextType,typeof k=="object"&&k!==null?k=_n(k):(k=Qt(a)?Gi:Ot.current,k=Js(i,k));var ee=a.getDerivedStateFromProps;(K=typeof ee=="function"||typeof v.getSnapshotBeforeUpdate=="function")||typeof v.UNSAFE_componentWillReceiveProps!="function"&&typeof v.componentWillReceiveProps!="function"||(I!==Q||G!==k)&&um(i,v,c,k),ei=!1,G=i.memoizedState,v.state=G,Ql(i,c,v,d);var se=i.memoizedState;I!==Q||G!==se||Kt.current||ei?(typeof ee=="function"&&(Ch(i,a,ee,c),se=i.memoizedState),(j=ei||am(i,a,j,c,G,se,k)||!1)?(K||typeof v.UNSAFE_componentWillUpdate!="function"&&typeof v.componentWillUpdate!="function"||(typeof v.componentWillUpdate=="function"&&v.componentWillUpdate(c,se,k),typeof v.UNSAFE_componentWillUpdate=="function"&&v.UNSAFE_componentWillUpdate(c,se,k)),typeof v.componentDidUpdate=="function"&&(i.flags|=4),typeof v.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof v.componentDidUpdate!="function"||I===n.memoizedProps&&G===n.memoizedState||(i.flags|=4),typeof v.getSnapshotBeforeUpdate!="function"||I===n.memoizedProps&&G===n.memoizedState||(i.flags|=1024),i.memoizedProps=c,i.memoizedState=se),v.props=c,v.state=se,v.context=k,c=j):(typeof v.componentDidUpdate!="function"||I===n.memoizedProps&&G===n.memoizedState||(i.flags|=4),typeof v.getSnapshotBeforeUpdate!="function"||I===n.memoizedProps&&G===n.memoizedState||(i.flags|=1024),c=!1)}return Nh(n,i,a,c,m,d)}function Nh(n,i,a,c,d,m){vm(n,i);var v=(i.flags&128)!==0;if(!c&&!v)return d&&Ap(i,a,!1),Pr(n,i,m);c=i.stateNode,Dw.current=i;var I=v&&typeof a.getDerivedStateFromError!="function"?null:c.render();return i.flags|=1,n!==null&&v?(i.child=no(i,n.child,null,m),i.child=no(i,null,I,m)):qt(n,i,I,m),i.memoizedState=c.state,d&&Ap(i,a,!0),i.child}function Em(n){var i=n.stateNode;i.pendingContext?Ip(n,i.pendingContext,i.pendingContext!==i.context):i.context&&Ip(n,i.context,!1),ph(n,i.containerInfo)}function Tm(n,i,a,c,d){return to(),ah(d),i.flags|=256,qt(n,i,a,c),i.child}var Dh={dehydrated:null,treeContext:null,retryLane:0};function Vh(n){return{baseLanes:n,cachePool:null,transitions:null}}function Im(n,i,a){var c=i.pendingProps,d=Ye.current,m=!1,v=(i.flags&128)!==0,I;if((I=v)||(I=n!==null&&n.memoizedState===null?!1:(d&2)!==0),I?(m=!0,i.flags&=-129):(n===null||n.memoizedState!==null)&&(d|=1),qe(Ye,d&1),n===null)return oh(i),n=i.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((i.mode&1)===0?i.lanes=1:n.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(v=c.children,n=c.fallback,m?(c=i.mode,m=i.child,v={mode:"hidden",children:v},(c&1)===0&&m!==null?(m.childLanes=0,m.pendingProps=v):m=gu(v,c,0,null),n=rs(n,c,a,null),m.return=i,n.return=i,m.sibling=n,i.child=m,i.child.memoizedState=Vh(a),i.memoizedState=Dh,n):Oh(i,v));if(d=n.memoizedState,d!==null&&(I=d.dehydrated,I!==null))return Vw(n,i,v,c,I,d,a);if(m){m=c.fallback,v=i.mode,d=n.child,I=d.sibling;var k={mode:"hidden",children:c.children};return(v&1)===0&&i.child!==d?(c=i.child,c.childLanes=0,c.pendingProps=k,i.deletions=null):(c=ai(d,k),c.subtreeFlags=d.subtreeFlags&14680064),I!==null?m=ai(I,m):(m=rs(m,v,a,null),m.flags|=2),m.return=i,c.return=i,c.sibling=m,i.child=c,c=m,m=i.child,v=n.child.memoizedState,v=v===null?Vh(a):{baseLanes:v.baseLanes|a,cachePool:null,transitions:v.transitions},m.memoizedState=v,m.childLanes=n.childLanes&~a,i.memoizedState=Dh,c}return m=n.child,n=m.sibling,c=ai(m,{mode:"visible",children:c.children}),(i.mode&1)===0&&(c.lanes=a),c.return=i,c.sibling=null,n!==null&&(a=i.deletions,a===null?(i.deletions=[n],i.flags|=16):a.push(n)),i.child=c,i.memoizedState=null,c}function Oh(n,i){return i=gu({mode:"visible",children:i},n.mode,0,null),i.return=n,n.child=i}function ru(n,i,a,c){return c!==null&&ah(c),no(i,n.child,null,a),n=Oh(i,i.pendingProps.children),n.flags|=2,i.memoizedState=null,n}function Vw(n,i,a,c,d,m,v){if(a)return i.flags&256?(i.flags&=-257,c=kh(Error(t(422))),ru(n,i,v,c)):i.memoizedState!==null?(i.child=n.child,i.flags|=128,null):(m=c.fallback,d=i.mode,c=gu({mode:"visible",children:c.children},d,0,null),m=rs(m,d,v,null),m.flags|=2,c.return=i,m.return=i,c.sibling=m,i.child=c,(i.mode&1)!==0&&no(i,n.child,null,v),i.child.memoizedState=Vh(v),i.memoizedState=Dh,m);if((i.mode&1)===0)return ru(n,i,v,null);if(d.data==="$!"){if(c=d.nextSibling&&d.nextSibling.dataset,c)var I=c.dgst;return c=I,m=Error(t(419)),c=kh(m,c,void 0),ru(n,i,v,c)}if(I=(v&n.childLanes)!==0,Xt||I){if(c=Tt,c!==null){switch(v&-v){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=(d&(c.suspendedLanes|v))!==0?0:d,d!==0&&d!==m.retryLane&&(m.retryLane=d,Rr(n,d),jn(c,n,d,-1))}return Xh(),c=kh(Error(t(421))),ru(n,i,v,c)}return d.data==="$?"?(i.flags|=128,i.child=n.child,i=Ww.bind(null,n),d._reactRetry=i,null):(n=m.treeContext,un=Xr(d.nextSibling),ln=i,Xe=!0,Ln=null,n!==null&&(gn[yn++]=Ar,gn[yn++]=Cr,gn[yn++]=Ki,Ar=n.id,Cr=n.overflow,Ki=i),i=Oh(i,c.children),i.flags|=4096,i)}function Sm(n,i,a){n.lanes|=i;var c=n.alternate;c!==null&&(c.lanes|=i),hh(n.return,i,a)}function bh(n,i,a,c,d){var m=n.memoizedState;m===null?n.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:c,tail:a,tailMode:d}:(m.isBackwards=i,m.rendering=null,m.renderingStartTime=0,m.last=c,m.tail=a,m.tailMode=d)}function Am(n,i,a){var c=i.pendingProps,d=c.revealOrder,m=c.tail;if(qt(n,i,c.children,a),c=Ye.current,(c&2)!==0)c=c&1|2,i.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=i.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Sm(n,a,i);else if(n.tag===19)Sm(n,a,i);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===i)break e;for(;n.sibling===null;){if(n.return===null||n.return===i)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}c&=1}if(qe(Ye,c),(i.mode&1)===0)i.memoizedState=null;else switch(d){case"forwards":for(a=i.child,d=null;a!==null;)n=a.alternate,n!==null&&Xl(n)===null&&(d=a),a=a.sibling;a=d,a===null?(d=i.child,i.child=null):(d=a.sibling,a.sibling=null),bh(i,!1,d,a,m);break;case"backwards":for(a=null,d=i.child,i.child=null;d!==null;){if(n=d.alternate,n!==null&&Xl(n)===null){i.child=d;break}n=d.sibling,d.sibling=a,a=d,d=n}bh(i,!0,a,null,m);break;case"together":bh(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function iu(n,i){(i.mode&1)===0&&n!==null&&(n.alternate=null,i.alternate=null,i.flags|=2)}function Pr(n,i,a){if(n!==null&&(i.dependencies=n.dependencies),Zi|=i.lanes,(a&i.childLanes)===0)return null;if(n!==null&&i.child!==n.child)throw Error(t(153));if(i.child!==null){for(n=i.child,a=ai(n,n.pendingProps),i.child=a,a.return=i;n.sibling!==null;)n=n.sibling,a=a.sibling=ai(n,n.pendingProps),a.return=i;a.sibling=null}return i.child}function Ow(n,i,a){switch(i.tag){case 3:Em(i),to();break;case 5:Up(i);break;case 1:Qt(i.type)&&jl(i);break;case 4:ph(i,i.stateNode.containerInfo);break;case 10:var c=i.type._context,d=i.memoizedProps.value;qe(Wl,c._currentValue),c._currentValue=d;break;case 13:if(c=i.memoizedState,c!==null)return c.dehydrated!==null?(qe(Ye,Ye.current&1),i.flags|=128,null):(a&i.child.childLanes)!==0?Im(n,i,a):(qe(Ye,Ye.current&1),n=Pr(n,i,a),n!==null?n.sibling:null);qe(Ye,Ye.current&1);break;case 19:if(c=(a&i.childLanes)!==0,(n.flags&128)!==0){if(c)return Am(n,i,a);i.flags|=128}if(d=i.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),qe(Ye,Ye.current),c)break;return null;case 22:case 23:return i.lanes=0,_m(n,i,a)}return Pr(n,i,a)}var Cm,Lh,Rm,km;Cm=function(n,i){for(var a=i.child;a!==null;){if(a.tag===5||a.tag===6)n.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===i)break;for(;a.sibling===null;){if(a.return===null||a.return===i)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},Lh=function(){},Rm=function(n,i,a,c){var d=n.memoizedProps;if(d!==c){n=i.stateNode,Yi(tr.current);var m=null;switch(a){case"input":d=xi(n,d),c=xi(n,c),m=[];break;case"select":d=re({},d,{value:void 0}),c=re({},c,{value:void 0}),m=[];break;case"textarea":d=Mo(n,d),c=Mo(n,c),m=[];break;default:typeof d.onClick!="function"&&typeof c.onClick=="function"&&(n.onclick=Ml)}$o(a,c);var v;a=null;for(j in d)if(!c.hasOwnProperty(j)&&d.hasOwnProperty(j)&&d[j]!=null)if(j==="style"){var I=d[j];for(v in I)I.hasOwnProperty(v)&&(a||(a={}),a[v]="")}else j!=="dangerouslySetInnerHTML"&&j!=="children"&&j!=="suppressContentEditableWarning"&&j!=="suppressHydrationWarning"&&j!=="autoFocus"&&(o.hasOwnProperty(j)?m||(m=[]):(m=m||[]).push(j,null));for(j in c){var k=c[j];if(I=d!=null?d[j]:void 0,c.hasOwnProperty(j)&&k!==I&&(k!=null||I!=null))if(j==="style")if(I){for(v in I)!I.hasOwnProperty(v)||k&&k.hasOwnProperty(v)||(a||(a={}),a[v]="");for(v in k)k.hasOwnProperty(v)&&I[v]!==k[v]&&(a||(a={}),a[v]=k[v])}else a||(m||(m=[]),m.push(j,a)),a=k;else j==="dangerouslySetInnerHTML"?(k=k?k.__html:void 0,I=I?I.__html:void 0,k!=null&&I!==k&&(m=m||[]).push(j,k)):j==="children"?typeof k!="string"&&typeof k!="number"||(m=m||[]).push(j,""+k):j!=="suppressContentEditableWarning"&&j!=="suppressHydrationWarning"&&(o.hasOwnProperty(j)?(k!=null&&j==="onScroll"&&We("scroll",n),m||I===k||(m=[])):(m=m||[]).push(j,k))}a&&(m=m||[]).push("style",a);var j=m;(i.updateQueue=j)&&(i.flags|=4)}},km=function(n,i,a,c){a!==c&&(i.flags|=4)};function Ia(n,i){if(!Xe)switch(n.tailMode){case"hidden":i=n.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?n.tail=null:a.sibling=null;break;case"collapsed":a=n.tail;for(var c=null;a!==null;)a.alternate!==null&&(c=a),a=a.sibling;c===null?i||n.tail===null?n.tail=null:n.tail.sibling=null:c.sibling=null}}function Lt(n){var i=n.alternate!==null&&n.alternate.child===n.child,a=0,c=0;if(i)for(var d=n.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags&14680064,c|=d.flags&14680064,d.return=n,d=d.sibling;else for(d=n.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags,c|=d.flags,d.return=n,d=d.sibling;return n.subtreeFlags|=c,n.childLanes=a,i}function bw(n,i,a){var c=i.pendingProps;switch(ih(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Lt(i),null;case 1:return Qt(i.type)&&Ul(),Lt(i),null;case 3:return c=i.stateNode,so(),Ge(Kt),Ge(Ot),yh(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(n===null||n.child===null)&&(ql(i)?i.flags|=4:n===null||n.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,Ln!==null&&(Gh(Ln),Ln=null))),Lh(n,i),Lt(i),null;case 5:mh(i);var d=Yi(_a.current);if(a=i.type,n!==null&&i.stateNode!=null)Rm(n,i,a,c,d),n.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!c){if(i.stateNode===null)throw Error(t(166));return Lt(i),null}if(n=Yi(tr.current),ql(i)){c=i.stateNode,a=i.type;var m=i.memoizedProps;switch(c[er]=i,c[fa]=m,n=(i.mode&1)!==0,a){case"dialog":We("cancel",c),We("close",c);break;case"iframe":case"object":case"embed":We("load",c);break;case"video":case"audio":for(d=0;d<ca.length;d++)We(ca[d],c);break;case"source":We("error",c);break;case"img":case"image":case"link":We("error",c),We("load",c);break;case"details":We("toggle",c);break;case"input":ws(c,m),We("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!m.multiple},We("invalid",c);break;case"textarea":Ts(c,m),We("invalid",c)}$o(a,m),d=null;for(var v in m)if(m.hasOwnProperty(v)){var I=m[v];v==="children"?typeof I=="string"?c.textContent!==I&&(m.suppressHydrationWarning!==!0&&Ll(c.textContent,I,n),d=["children",I]):typeof I=="number"&&c.textContent!==""+I&&(m.suppressHydrationWarning!==!0&&Ll(c.textContent,I,n),d=["children",""+I]):o.hasOwnProperty(v)&&I!=null&&v==="onScroll"&&We("scroll",c)}switch(a){case"input":fr(c),ll(c,m,!0);break;case"textarea":fr(c),Fo(c);break;case"select":case"option":break;default:typeof m.onClick=="function"&&(c.onclick=Ml)}c=d,i.updateQueue=c,c!==null&&(i.flags|=4)}else{v=d.nodeType===9?d:d.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=ct(a)),n==="http://www.w3.org/1999/xhtml"?a==="script"?(n=v.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof c.is=="string"?n=v.createElement(a,{is:c.is}):(n=v.createElement(a),a==="select"&&(v=n,c.multiple?v.multiple=!0:c.size&&(v.size=c.size))):n=v.createElementNS(n,a),n[er]=i,n[fa]=c,Cm(n,i,!1,!1),i.stateNode=n;e:{switch(v=qo(a,c),a){case"dialog":We("cancel",n),We("close",n),d=c;break;case"iframe":case"object":case"embed":We("load",n),d=c;break;case"video":case"audio":for(d=0;d<ca.length;d++)We(ca[d],n);d=c;break;case"source":We("error",n),d=c;break;case"img":case"image":case"link":We("error",n),We("load",n),d=c;break;case"details":We("toggle",n),d=c;break;case"input":ws(n,c),d=xi(n,c),We("invalid",n);break;case"option":d=c;break;case"select":n._wrapperState={wasMultiple:!!c.multiple},d=re({},c,{value:void 0}),We("invalid",n);break;case"textarea":Ts(n,c),d=Mo(n,c),We("invalid",n);break;default:d=c}$o(a,d),I=d;for(m in I)if(I.hasOwnProperty(m)){var k=I[m];m==="style"?zo(n,k):m==="dangerouslySetInnerHTML"?(k=k?k.__html:void 0,k!=null&&Uo(n,k)):m==="children"?typeof k=="string"?(a!=="textarea"||k!=="")&&Ur(n,k):typeof k=="number"&&Ur(n,""+k):m!=="suppressContentEditableWarning"&&m!=="suppressHydrationWarning"&&m!=="autoFocus"&&(o.hasOwnProperty(m)?k!=null&&m==="onScroll"&&We("scroll",n):k!=null&&me(n,m,k,v))}switch(a){case"input":fr(n),ll(n,c,!1);break;case"textarea":fr(n),Fo(n);break;case"option":c.value!=null&&n.setAttribute("value",""+Le(c.value));break;case"select":n.multiple=!!c.multiple,m=c.value,m!=null?mr(n,!!c.multiple,m,!1):c.defaultValue!=null&&mr(n,!!c.multiple,c.defaultValue,!0);break;default:typeof d.onClick=="function"&&(n.onclick=Ml)}switch(a){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return Lt(i),null;case 6:if(n&&i.stateNode!=null)km(n,i,n.memoizedProps,c);else{if(typeof c!="string"&&i.stateNode===null)throw Error(t(166));if(a=Yi(_a.current),Yi(tr.current),ql(i)){if(c=i.stateNode,a=i.memoizedProps,c[er]=i,(m=c.nodeValue!==a)&&(n=ln,n!==null))switch(n.tag){case 3:Ll(c.nodeValue,a,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Ll(c.nodeValue,a,(n.mode&1)!==0)}m&&(i.flags|=4)}else c=(a.nodeType===9?a:a.ownerDocument).createTextNode(c),c[er]=i,i.stateNode=c}return Lt(i),null;case 13:if(Ge(Ye),c=i.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Xe&&un!==null&&(i.mode&1)!==0&&(i.flags&128)===0)Np(),to(),i.flags|=98560,m=!1;else if(m=ql(i),c!==null&&c.dehydrated!==null){if(n===null){if(!m)throw Error(t(318));if(m=i.memoizedState,m=m!==null?m.dehydrated:null,!m)throw Error(t(317));m[er]=i}else to(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;Lt(i),m=!1}else Ln!==null&&(Gh(Ln),Ln=null),m=!0;if(!m)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=a,i):(c=c!==null,c!==(n!==null&&n.memoizedState!==null)&&c&&(i.child.flags|=8192,(i.mode&1)!==0&&(n===null||(Ye.current&1)!==0?pt===0&&(pt=3):Xh())),i.updateQueue!==null&&(i.flags|=4),Lt(i),null);case 4:return so(),Lh(n,i),n===null&&ha(i.stateNode.containerInfo),Lt(i),null;case 10:return ch(i.type._context),Lt(i),null;case 17:return Qt(i.type)&&Ul(),Lt(i),null;case 19:if(Ge(Ye),m=i.memoizedState,m===null)return Lt(i),null;if(c=(i.flags&128)!==0,v=m.rendering,v===null)if(c)Ia(m,!1);else{if(pt!==0||n!==null&&(n.flags&128)!==0)for(n=i.child;n!==null;){if(v=Xl(n),v!==null){for(i.flags|=128,Ia(m,!1),c=v.updateQueue,c!==null&&(i.updateQueue=c,i.flags|=4),i.subtreeFlags=0,c=a,a=i.child;a!==null;)m=a,n=c,m.flags&=14680066,v=m.alternate,v===null?(m.childLanes=0,m.lanes=n,m.child=null,m.subtreeFlags=0,m.memoizedProps=null,m.memoizedState=null,m.updateQueue=null,m.dependencies=null,m.stateNode=null):(m.childLanes=v.childLanes,m.lanes=v.lanes,m.child=v.child,m.subtreeFlags=0,m.deletions=null,m.memoizedProps=v.memoizedProps,m.memoizedState=v.memoizedState,m.updateQueue=v.updateQueue,m.type=v.type,n=v.dependencies,m.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),a=a.sibling;return qe(Ye,Ye.current&1|2),i.child}n=n.sibling}m.tail!==null&&$e()>uo&&(i.flags|=128,c=!0,Ia(m,!1),i.lanes=4194304)}else{if(!c)if(n=Xl(v),n!==null){if(i.flags|=128,c=!0,a=n.updateQueue,a!==null&&(i.updateQueue=a,i.flags|=4),Ia(m,!0),m.tail===null&&m.tailMode==="hidden"&&!v.alternate&&!Xe)return Lt(i),null}else 2*$e()-m.renderingStartTime>uo&&a!==1073741824&&(i.flags|=128,c=!0,Ia(m,!1),i.lanes=4194304);m.isBackwards?(v.sibling=i.child,i.child=v):(a=m.last,a!==null?a.sibling=v:i.child=v,m.last=v)}return m.tail!==null?(i=m.tail,m.rendering=i,m.tail=i.sibling,m.renderingStartTime=$e(),i.sibling=null,a=Ye.current,qe(Ye,c?a&1|2:a&1),i):(Lt(i),null);case 22:case 23:return Qh(),c=i.memoizedState!==null,n!==null&&n.memoizedState!==null!==c&&(i.flags|=8192),c&&(i.mode&1)!==0?(cn&1073741824)!==0&&(Lt(i),i.subtreeFlags&6&&(i.flags|=8192)):Lt(i),null;case 24:return null;case 25:return null}throw Error(t(156,i.tag))}function Lw(n,i){switch(ih(i),i.tag){case 1:return Qt(i.type)&&Ul(),n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 3:return so(),Ge(Kt),Ge(Ot),yh(),n=i.flags,(n&65536)!==0&&(n&128)===0?(i.flags=n&-65537|128,i):null;case 5:return mh(i),null;case 13:if(Ge(Ye),n=i.memoizedState,n!==null&&n.dehydrated!==null){if(i.alternate===null)throw Error(t(340));to()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 19:return Ge(Ye),null;case 4:return so(),null;case 10:return ch(i.type._context),null;case 22:case 23:return Qh(),null;case 24:return null;default:return null}}var su=!1,Mt=!1,Mw=typeof WeakSet=="function"?WeakSet:Set,ie=null;function ao(n,i){var a=n.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(c){et(n,i,c)}else a.current=null}function Mh(n,i,a){try{a()}catch(c){et(n,i,c)}}var Pm=!1;function Fw(n,i){if(Qc=Gr,n=ap(),zc(n)){if("selectionStart"in n)var a={start:n.selectionStart,end:n.selectionEnd};else e:{a=(a=n.ownerDocument)&&a.defaultView||window;var c=a.getSelection&&a.getSelection();if(c&&c.rangeCount!==0){a=c.anchorNode;var d=c.anchorOffset,m=c.focusNode;c=c.focusOffset;try{a.nodeType,m.nodeType}catch{a=null;break e}var v=0,I=-1,k=-1,j=0,K=0,Q=n,G=null;t:for(;;){for(var ee;Q!==a||d!==0&&Q.nodeType!==3||(I=v+d),Q!==m||c!==0&&Q.nodeType!==3||(k=v+c),Q.nodeType===3&&(v+=Q.nodeValue.length),(ee=Q.firstChild)!==null;)G=Q,Q=ee;for(;;){if(Q===n)break t;if(G===a&&++j===d&&(I=v),G===m&&++K===c&&(k=v),(ee=Q.nextSibling)!==null)break;Q=G,G=Q.parentNode}Q=ee}a=I===-1||k===-1?null:{start:I,end:k}}else a=null}a=a||{start:0,end:0}}else a=null;for(Xc={focusedElem:n,selectionRange:a},Gr=!1,ie=i;ie!==null;)if(i=ie,n=i.child,(i.subtreeFlags&1028)!==0&&n!==null)n.return=i,ie=n;else for(;ie!==null;){i=ie;try{var se=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(se!==null){var oe=se.memoizedProps,rt=se.memoizedState,L=i.stateNode,N=L.getSnapshotBeforeUpdate(i.elementType===i.type?oe:Mn(i.type,oe),rt);L.__reactInternalSnapshotBeforeUpdate=N}break;case 3:var F=i.stateNode.containerInfo;F.nodeType===1?F.textContent="":F.nodeType===9&&F.documentElement&&F.removeChild(F.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Y){et(i,i.return,Y)}if(n=i.sibling,n!==null){n.return=i.return,ie=n;break}ie=i.return}return se=Pm,Pm=!1,se}function Sa(n,i,a){var c=i.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var d=c=c.next;do{if((d.tag&n)===n){var m=d.destroy;d.destroy=void 0,m!==void 0&&Mh(i,a,m)}d=d.next}while(d!==c)}}function ou(n,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var a=i=i.next;do{if((a.tag&n)===n){var c=a.create;a.destroy=c()}a=a.next}while(a!==i)}}function Fh(n){var i=n.ref;if(i!==null){var a=n.stateNode;switch(n.tag){case 5:n=a;break;default:n=a}typeof i=="function"?i(n):i.current=n}}function xm(n){var i=n.alternate;i!==null&&(n.alternate=null,xm(i)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(i=n.stateNode,i!==null&&(delete i[er],delete i[fa],delete i[eh],delete i[ww],delete i[Ew])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function Nm(n){return n.tag===5||n.tag===3||n.tag===4}function Dm(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||Nm(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Uh(n,i,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?a.nodeType===8?a.parentNode.insertBefore(n,i):a.insertBefore(n,i):(a.nodeType===8?(i=a.parentNode,i.insertBefore(n,a)):(i=a,i.appendChild(n)),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=Ml));else if(c!==4&&(n=n.child,n!==null))for(Uh(n,i,a),n=n.sibling;n!==null;)Uh(n,i,a),n=n.sibling}function jh(n,i,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?a.insertBefore(n,i):a.appendChild(n);else if(c!==4&&(n=n.child,n!==null))for(jh(n,i,a),n=n.sibling;n!==null;)jh(n,i,a),n=n.sibling}var Rt=null,Fn=!1;function ni(n,i,a){for(a=a.child;a!==null;)Vm(n,i,a),a=a.sibling}function Vm(n,i,a){if(rn&&typeof rn.onCommitFiberUnmount=="function")try{rn.onCommitFiberUnmount(Ui,a)}catch{}switch(a.tag){case 5:Mt||ao(a,i);case 6:var c=Rt,d=Fn;Rt=null,ni(n,i,a),Rt=c,Fn=d,Rt!==null&&(Fn?(n=Rt,a=a.stateNode,n.nodeType===8?n.parentNode.removeChild(a):n.removeChild(a)):Rt.removeChild(a.stateNode));break;case 18:Rt!==null&&(Fn?(n=Rt,a=a.stateNode,n.nodeType===8?Zc(n.parentNode,a):n.nodeType===1&&Zc(n,a),Vn(n)):Zc(Rt,a.stateNode));break;case 4:c=Rt,d=Fn,Rt=a.stateNode.containerInfo,Fn=!0,ni(n,i,a),Rt=c,Fn=d;break;case 0:case 11:case 14:case 15:if(!Mt&&(c=a.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){d=c=c.next;do{var m=d,v=m.destroy;m=m.tag,v!==void 0&&((m&2)!==0||(m&4)!==0)&&Mh(a,i,v),d=d.next}while(d!==c)}ni(n,i,a);break;case 1:if(!Mt&&(ao(a,i),c=a.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=a.memoizedProps,c.state=a.memoizedState,c.componentWillUnmount()}catch(I){et(a,i,I)}ni(n,i,a);break;case 21:ni(n,i,a);break;case 22:a.mode&1?(Mt=(c=Mt)||a.memoizedState!==null,ni(n,i,a),Mt=c):ni(n,i,a);break;default:ni(n,i,a)}}function Om(n){var i=n.updateQueue;if(i!==null){n.updateQueue=null;var a=n.stateNode;a===null&&(a=n.stateNode=new Mw),i.forEach(function(c){var d=Gw.bind(null,n,c);a.has(c)||(a.add(c),c.then(d,d))})}}function Un(n,i){var a=i.deletions;if(a!==null)for(var c=0;c<a.length;c++){var d=a[c];try{var m=n,v=i,I=v;e:for(;I!==null;){switch(I.tag){case 5:Rt=I.stateNode,Fn=!1;break e;case 3:Rt=I.stateNode.containerInfo,Fn=!0;break e;case 4:Rt=I.stateNode.containerInfo,Fn=!0;break e}I=I.return}if(Rt===null)throw Error(t(160));Vm(m,v,d),Rt=null,Fn=!1;var k=d.alternate;k!==null&&(k.return=null),d.return=null}catch(j){et(d,i,j)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)bm(i,n),i=i.sibling}function bm(n,i){var a=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(Un(i,n),rr(n),c&4){try{Sa(3,n,n.return),ou(3,n)}catch(oe){et(n,n.return,oe)}try{Sa(5,n,n.return)}catch(oe){et(n,n.return,oe)}}break;case 1:Un(i,n),rr(n),c&512&&a!==null&&ao(a,a.return);break;case 5:if(Un(i,n),rr(n),c&512&&a!==null&&ao(a,a.return),n.flags&32){var d=n.stateNode;try{Ur(d,"")}catch(oe){et(n,n.return,oe)}}if(c&4&&(d=n.stateNode,d!=null)){var m=n.memoizedProps,v=a!==null?a.memoizedProps:m,I=n.type,k=n.updateQueue;if(n.updateQueue=null,k!==null)try{I==="input"&&m.type==="radio"&&m.name!=null&&bo(d,m),qo(I,v);var j=qo(I,m);for(v=0;v<k.length;v+=2){var K=k[v],Q=k[v+1];K==="style"?zo(d,Q):K==="dangerouslySetInnerHTML"?Uo(d,Q):K==="children"?Ur(d,Q):me(d,K,Q,j)}switch(I){case"input":Lo(d,m);break;case"textarea":Is(d,m);break;case"select":var G=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!m.multiple;var ee=m.value;ee!=null?mr(d,!!m.multiple,ee,!1):G!==!!m.multiple&&(m.defaultValue!=null?mr(d,!!m.multiple,m.defaultValue,!0):mr(d,!!m.multiple,m.multiple?[]:"",!1))}d[fa]=m}catch(oe){et(n,n.return,oe)}}break;case 6:if(Un(i,n),rr(n),c&4){if(n.stateNode===null)throw Error(t(162));d=n.stateNode,m=n.memoizedProps;try{d.nodeValue=m}catch(oe){et(n,n.return,oe)}}break;case 3:if(Un(i,n),rr(n),c&4&&a!==null&&a.memoizedState.isDehydrated)try{Vn(i.containerInfo)}catch(oe){et(n,n.return,oe)}break;case 4:Un(i,n),rr(n);break;case 13:Un(i,n),rr(n),d=n.child,d.flags&8192&&(m=d.memoizedState!==null,d.stateNode.isHidden=m,!m||d.alternate!==null&&d.alternate.memoizedState!==null||($h=$e())),c&4&&Om(n);break;case 22:if(K=a!==null&&a.memoizedState!==null,n.mode&1?(Mt=(j=Mt)||K,Un(i,n),Mt=j):Un(i,n),rr(n),c&8192){if(j=n.memoizedState!==null,(n.stateNode.isHidden=j)&&!K&&(n.mode&1)!==0)for(ie=n,K=n.child;K!==null;){for(Q=ie=K;ie!==null;){switch(G=ie,ee=G.child,G.tag){case 0:case 11:case 14:case 15:Sa(4,G,G.return);break;case 1:ao(G,G.return);var se=G.stateNode;if(typeof se.componentWillUnmount=="function"){c=G,a=G.return;try{i=c,se.props=i.memoizedProps,se.state=i.memoizedState,se.componentWillUnmount()}catch(oe){et(c,a,oe)}}break;case 5:ao(G,G.return);break;case 22:if(G.memoizedState!==null){Fm(Q);continue}}ee!==null?(ee.return=G,ie=ee):Fm(Q)}K=K.sibling}e:for(K=null,Q=n;;){if(Q.tag===5){if(K===null){K=Q;try{d=Q.stateNode,j?(m=d.style,typeof m.setProperty=="function"?m.setProperty("display","none","important"):m.display="none"):(I=Q.stateNode,k=Q.memoizedProps.style,v=k!=null&&k.hasOwnProperty("display")?k.display:null,I.style.display=jo("display",v))}catch(oe){et(n,n.return,oe)}}}else if(Q.tag===6){if(K===null)try{Q.stateNode.nodeValue=j?"":Q.memoizedProps}catch(oe){et(n,n.return,oe)}}else if((Q.tag!==22&&Q.tag!==23||Q.memoizedState===null||Q===n)&&Q.child!==null){Q.child.return=Q,Q=Q.child;continue}if(Q===n)break e;for(;Q.sibling===null;){if(Q.return===null||Q.return===n)break e;K===Q&&(K=null),Q=Q.return}K===Q&&(K=null),Q.sibling.return=Q.return,Q=Q.sibling}}break;case 19:Un(i,n),rr(n),c&4&&Om(n);break;case 21:break;default:Un(i,n),rr(n)}}function rr(n){var i=n.flags;if(i&2){try{e:{for(var a=n.return;a!==null;){if(Nm(a)){var c=a;break e}a=a.return}throw Error(t(160))}switch(c.tag){case 5:var d=c.stateNode;c.flags&32&&(Ur(d,""),c.flags&=-33);var m=Dm(n);jh(n,m,d);break;case 3:case 4:var v=c.stateNode.containerInfo,I=Dm(n);Uh(n,I,v);break;default:throw Error(t(161))}}catch(k){et(n,n.return,k)}n.flags&=-3}i&4096&&(n.flags&=-4097)}function Uw(n,i,a){ie=n,Lm(n)}function Lm(n,i,a){for(var c=(n.mode&1)!==0;ie!==null;){var d=ie,m=d.child;if(d.tag===22&&c){var v=d.memoizedState!==null||su;if(!v){var I=d.alternate,k=I!==null&&I.memoizedState!==null||Mt;I=su;var j=Mt;if(su=v,(Mt=k)&&!j)for(ie=d;ie!==null;)v=ie,k=v.child,v.tag===22&&v.memoizedState!==null?Um(d):k!==null?(k.return=v,ie=k):Um(d);for(;m!==null;)ie=m,Lm(m),m=m.sibling;ie=d,su=I,Mt=j}Mm(n)}else(d.subtreeFlags&8772)!==0&&m!==null?(m.return=d,ie=m):Mm(n)}}function Mm(n){for(;ie!==null;){var i=ie;if((i.flags&8772)!==0){var a=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:Mt||ou(5,i);break;case 1:var c=i.stateNode;if(i.flags&4&&!Mt)if(a===null)c.componentDidMount();else{var d=i.elementType===i.type?a.memoizedProps:Mn(i.type,a.memoizedProps);c.componentDidUpdate(d,a.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var m=i.updateQueue;m!==null&&Fp(i,m,c);break;case 3:var v=i.updateQueue;if(v!==null){if(a=null,i.child!==null)switch(i.child.tag){case 5:a=i.child.stateNode;break;case 1:a=i.child.stateNode}Fp(i,v,a)}break;case 5:var I=i.stateNode;if(a===null&&i.flags&4){a=I;var k=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":k.autoFocus&&a.focus();break;case"img":k.src&&(a.src=k.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var j=i.alternate;if(j!==null){var K=j.memoizedState;if(K!==null){var Q=K.dehydrated;Q!==null&&Vn(Q)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Mt||i.flags&512&&Fh(i)}catch(G){et(i,i.return,G)}}if(i===n){ie=null;break}if(a=i.sibling,a!==null){a.return=i.return,ie=a;break}ie=i.return}}function Fm(n){for(;ie!==null;){var i=ie;if(i===n){ie=null;break}var a=i.sibling;if(a!==null){a.return=i.return,ie=a;break}ie=i.return}}function Um(n){for(;ie!==null;){var i=ie;try{switch(i.tag){case 0:case 11:case 15:var a=i.return;try{ou(4,i)}catch(k){et(i,a,k)}break;case 1:var c=i.stateNode;if(typeof c.componentDidMount=="function"){var d=i.return;try{c.componentDidMount()}catch(k){et(i,d,k)}}var m=i.return;try{Fh(i)}catch(k){et(i,m,k)}break;case 5:var v=i.return;try{Fh(i)}catch(k){et(i,v,k)}}}catch(k){et(i,i.return,k)}if(i===n){ie=null;break}var I=i.sibling;if(I!==null){I.return=i.return,ie=I;break}ie=i.return}}var jw=Math.ceil,au=Ee.ReactCurrentDispatcher,zh=Ee.ReactCurrentOwner,wn=Ee.ReactCurrentBatchConfig,Ve=0,Tt=null,ot=null,kt=0,cn=0,lo=Yr(0),pt=0,Aa=null,Zi=0,lu=0,Bh=0,Ca=null,Yt=null,$h=0,uo=1/0,xr=null,uu=!1,qh=null,ri=null,cu=!1,ii=null,hu=0,Ra=0,Hh=null,du=-1,fu=0;function Ht(){return(Ve&6)!==0?$e():du!==-1?du:du=$e()}function si(n){return(n.mode&1)===0?1:(Ve&2)!==0&&kt!==0?kt&-kt:Iw.transition!==null?(fu===0&&(fu=zi()),fu):(n=Pe,n!==0||(n=window.event,n=n===void 0?16:ta(n.type)),n)}function jn(n,i,a,c){if(50<Ra)throw Ra=0,Hh=null,Error(t(185));$r(n,a,c),((Ve&2)===0||n!==Tt)&&(n===Tt&&((Ve&2)===0&&(lu|=a),pt===4&&oi(n,kt)),Jt(n,c),a===1&&Ve===0&&(i.mode&1)===0&&(uo=$e()+500,zl&&Zr()))}function Jt(n,i){var a=n.callbackNode;_r(n,i);var c=ji(n,n===Tt?kt:0);if(c===0)a!==null&&Xo(a),n.callbackNode=null,n.callbackPriority=0;else if(i=c&-c,n.callbackPriority!==i){if(a!=null&&Xo(a),i===1)n.tag===0?Tw(zm.bind(null,n)):Cp(zm.bind(null,n)),_w(function(){(Ve&6)===0&&Zr()}),a=null;else{switch(Hr(c)){case 1:a=Fi;break;case 4:a=jr;break;case 16:a=fn;break;case 536870912:a=fl;break;default:a=fn}a=Qm(a,jm.bind(null,n))}n.callbackPriority=i,n.callbackNode=a}}function jm(n,i){if(du=-1,fu=0,(Ve&6)!==0)throw Error(t(327));var a=n.callbackNode;if(co()&&n.callbackNode!==a)return null;var c=ji(n,n===Tt?kt:0);if(c===0)return null;if((c&30)!==0||(c&n.expiredLanes)!==0||i)i=pu(n,c);else{i=c;var d=Ve;Ve|=2;var m=$m();(Tt!==n||kt!==i)&&(xr=null,uo=$e()+500,ts(n,i));do try{$w();break}catch(I){Bm(n,I)}while(!0);uh(),au.current=m,Ve=d,ot!==null?i=0:(Tt=null,kt=0,i=pt)}if(i!==0){if(i===2&&(d=sn(n),d!==0&&(c=d,i=Wh(n,d))),i===1)throw a=Aa,ts(n,0),oi(n,c),Jt(n,$e()),a;if(i===6)oi(n,c);else{if(d=n.current.alternate,(c&30)===0&&!zw(d)&&(i=pu(n,c),i===2&&(m=sn(n),m!==0&&(c=m,i=Wh(n,m))),i===1))throw a=Aa,ts(n,0),oi(n,c),Jt(n,$e()),a;switch(n.finishedWork=d,n.finishedLanes=c,i){case 0:case 1:throw Error(t(345));case 2:ns(n,Yt,xr);break;case 3:if(oi(n,c),(c&130023424)===c&&(i=$h+500-$e(),10<i)){if(ji(n,0)!==0)break;if(d=n.suspendedLanes,(d&c)!==c){Ht(),n.pingedLanes|=n.suspendedLanes&d;break}n.timeoutHandle=Jc(ns.bind(null,n,Yt,xr),i);break}ns(n,Yt,xr);break;case 4:if(oi(n,c),(c&4194240)===c)break;for(i=n.eventTimes,d=-1;0<c;){var v=31-Bt(c);m=1<<v,v=i[v],v>d&&(d=v),c&=~m}if(c=d,c=$e()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*jw(c/1960))-c,10<c){n.timeoutHandle=Jc(ns.bind(null,n,Yt,xr),c);break}ns(n,Yt,xr);break;case 5:ns(n,Yt,xr);break;default:throw Error(t(329))}}}return Jt(n,$e()),n.callbackNode===a?jm.bind(null,n):null}function Wh(n,i){var a=Ca;return n.current.memoizedState.isDehydrated&&(ts(n,i).flags|=256),n=pu(n,i),n!==2&&(i=Yt,Yt=a,i!==null&&Gh(i)),n}function Gh(n){Yt===null?Yt=n:Yt.push.apply(Yt,n)}function zw(n){for(var i=n;;){if(i.flags&16384){var a=i.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var c=0;c<a.length;c++){var d=a[c],m=d.getSnapshot;d=d.value;try{if(!bn(m(),d))return!1}catch{return!1}}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function oi(n,i){for(i&=~Bh,i&=~lu,n.suspendedLanes|=i,n.pingedLanes&=~i,n=n.expirationTimes;0<i;){var a=31-Bt(i),c=1<<a;n[a]=-1,i&=~c}}function zm(n){if((Ve&6)!==0)throw Error(t(327));co();var i=ji(n,0);if((i&1)===0)return Jt(n,$e()),null;var a=pu(n,i);if(n.tag!==0&&a===2){var c=sn(n);c!==0&&(i=c,a=Wh(n,c))}if(a===1)throw a=Aa,ts(n,0),oi(n,i),Jt(n,$e()),a;if(a===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=i,ns(n,Yt,xr),Jt(n,$e()),null}function Kh(n,i){var a=Ve;Ve|=1;try{return n(i)}finally{Ve=a,Ve===0&&(uo=$e()+500,zl&&Zr())}}function es(n){ii!==null&&ii.tag===0&&(Ve&6)===0&&co();var i=Ve;Ve|=1;var a=wn.transition,c=Pe;try{if(wn.transition=null,Pe=1,n)return n()}finally{Pe=c,wn.transition=a,Ve=i,(Ve&6)===0&&Zr()}}function Qh(){cn=lo.current,Ge(lo)}function ts(n,i){n.finishedWork=null,n.finishedLanes=0;var a=n.timeoutHandle;if(a!==-1&&(n.timeoutHandle=-1,yw(a)),ot!==null)for(a=ot.return;a!==null;){var c=a;switch(ih(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&Ul();break;case 3:so(),Ge(Kt),Ge(Ot),yh();break;case 5:mh(c);break;case 4:so();break;case 13:Ge(Ye);break;case 19:Ge(Ye);break;case 10:ch(c.type._context);break;case 22:case 23:Qh()}a=a.return}if(Tt=n,ot=n=ai(n.current,null),kt=cn=i,pt=0,Aa=null,Bh=lu=Zi=0,Yt=Ca=null,Xi!==null){for(i=0;i<Xi.length;i++)if(a=Xi[i],c=a.interleaved,c!==null){a.interleaved=null;var d=c.next,m=a.pending;if(m!==null){var v=m.next;m.next=d,c.next=v}a.pending=c}Xi=null}return n}function Bm(n,i){do{var a=ot;try{if(uh(),Yl.current=tu,Jl){for(var c=Je.memoizedState;c!==null;){var d=c.queue;d!==null&&(d.pending=null),c=c.next}Jl=!1}if(Ji=0,Et=ft=Je=null,va=!1,wa=0,zh.current=null,a===null||a.return===null){pt=1,Aa=i,ot=null;break}e:{var m=n,v=a.return,I=a,k=i;if(i=kt,I.flags|=32768,k!==null&&typeof k=="object"&&typeof k.then=="function"){var j=k,K=I,Q=K.tag;if((K.mode&1)===0&&(Q===0||Q===11||Q===15)){var G=K.alternate;G?(K.updateQueue=G.updateQueue,K.memoizedState=G.memoizedState,K.lanes=G.lanes):(K.updateQueue=null,K.memoizedState=null)}var ee=fm(v);if(ee!==null){ee.flags&=-257,pm(ee,v,I,m,i),ee.mode&1&&dm(m,j,i),i=ee,k=j;var se=i.updateQueue;if(se===null){var oe=new Set;oe.add(k),i.updateQueue=oe}else se.add(k);break e}else{if((i&1)===0){dm(m,j,i),Xh();break e}k=Error(t(426))}}else if(Xe&&I.mode&1){var rt=fm(v);if(rt!==null){(rt.flags&65536)===0&&(rt.flags|=256),pm(rt,v,I,m,i),ah(oo(k,I));break e}}m=k=oo(k,I),pt!==4&&(pt=2),Ca===null?Ca=[m]:Ca.push(m),m=v;do{switch(m.tag){case 3:m.flags|=65536,i&=-i,m.lanes|=i;var L=cm(m,k,i);Mp(m,L);break e;case 1:I=k;var N=m.type,F=m.stateNode;if((m.flags&128)===0&&(typeof N.getDerivedStateFromError=="function"||F!==null&&typeof F.componentDidCatch=="function"&&(ri===null||!ri.has(F)))){m.flags|=65536,i&=-i,m.lanes|=i;var Y=hm(m,I,i);Mp(m,Y);break e}}m=m.return}while(m!==null)}Hm(a)}catch(ae){i=ae,ot===a&&a!==null&&(ot=a=a.return);continue}break}while(!0)}function $m(){var n=au.current;return au.current=tu,n===null?tu:n}function Xh(){(pt===0||pt===3||pt===2)&&(pt=4),Tt===null||(Zi&268435455)===0&&(lu&268435455)===0||oi(Tt,kt)}function pu(n,i){var a=Ve;Ve|=2;var c=$m();(Tt!==n||kt!==i)&&(xr=null,ts(n,i));do try{Bw();break}catch(d){Bm(n,d)}while(!0);if(uh(),Ve=a,au.current=c,ot!==null)throw Error(t(261));return Tt=null,kt=0,pt}function Bw(){for(;ot!==null;)qm(ot)}function $w(){for(;ot!==null&&!hl();)qm(ot)}function qm(n){var i=Km(n.alternate,n,cn);n.memoizedProps=n.pendingProps,i===null?Hm(n):ot=i,zh.current=null}function Hm(n){var i=n;do{var a=i.alternate;if(n=i.return,(i.flags&32768)===0){if(a=bw(a,i,cn),a!==null){ot=a;return}}else{if(a=Lw(a,i),a!==null){a.flags&=32767,ot=a;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{pt=6,ot=null;return}}if(i=i.sibling,i!==null){ot=i;return}ot=i=n}while(i!==null);pt===0&&(pt=5)}function ns(n,i,a){var c=Pe,d=wn.transition;try{wn.transition=null,Pe=1,qw(n,i,a,c)}finally{wn.transition=d,Pe=c}return null}function qw(n,i,a,c){do co();while(ii!==null);if((Ve&6)!==0)throw Error(t(327));a=n.finishedWork;var d=n.finishedLanes;if(a===null)return null;if(n.finishedWork=null,n.finishedLanes=0,a===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var m=a.lanes|a.childLanes;if(ze(n,m),n===Tt&&(ot=Tt=null,kt=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||cu||(cu=!0,Qm(fn,function(){return co(),null})),m=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||m){m=wn.transition,wn.transition=null;var v=Pe;Pe=1;var I=Ve;Ve|=4,zh.current=null,Fw(n,a),bm(a,n),cw(Xc),Gr=!!Qc,Xc=Qc=null,n.current=a,Uw(a),Vc(),Ve=I,Pe=v,wn.transition=m}else n.current=a;if(cu&&(cu=!1,ii=n,hu=d),m=n.pendingLanes,m===0&&(ri=null),pl(a.stateNode),Jt(n,$e()),i!==null)for(c=n.onRecoverableError,a=0;a<i.length;a++)d=i[a],c(d.value,{componentStack:d.stack,digest:d.digest});if(uu)throw uu=!1,n=qh,qh=null,n;return(hu&1)!==0&&n.tag!==0&&co(),m=n.pendingLanes,(m&1)!==0?n===Hh?Ra++:(Ra=0,Hh=n):Ra=0,Zr(),null}function co(){if(ii!==null){var n=Hr(hu),i=wn.transition,a=Pe;try{if(wn.transition=null,Pe=16>n?16:n,ii===null)var c=!1;else{if(n=ii,ii=null,hu=0,(Ve&6)!==0)throw Error(t(331));var d=Ve;for(Ve|=4,ie=n.current;ie!==null;){var m=ie,v=m.child;if((ie.flags&16)!==0){var I=m.deletions;if(I!==null){for(var k=0;k<I.length;k++){var j=I[k];for(ie=j;ie!==null;){var K=ie;switch(K.tag){case 0:case 11:case 15:Sa(8,K,m)}var Q=K.child;if(Q!==null)Q.return=K,ie=Q;else for(;ie!==null;){K=ie;var G=K.sibling,ee=K.return;if(xm(K),K===j){ie=null;break}if(G!==null){G.return=ee,ie=G;break}ie=ee}}}var se=m.alternate;if(se!==null){var oe=se.child;if(oe!==null){se.child=null;do{var rt=oe.sibling;oe.sibling=null,oe=rt}while(oe!==null)}}ie=m}}if((m.subtreeFlags&2064)!==0&&v!==null)v.return=m,ie=v;else e:for(;ie!==null;){if(m=ie,(m.flags&2048)!==0)switch(m.tag){case 0:case 11:case 15:Sa(9,m,m.return)}var L=m.sibling;if(L!==null){L.return=m.return,ie=L;break e}ie=m.return}}var N=n.current;for(ie=N;ie!==null;){v=ie;var F=v.child;if((v.subtreeFlags&2064)!==0&&F!==null)F.return=v,ie=F;else e:for(v=N;ie!==null;){if(I=ie,(I.flags&2048)!==0)try{switch(I.tag){case 0:case 11:case 15:ou(9,I)}}catch(ae){et(I,I.return,ae)}if(I===v){ie=null;break e}var Y=I.sibling;if(Y!==null){Y.return=I.return,ie=Y;break e}ie=I.return}}if(Ve=d,Zr(),rn&&typeof rn.onPostCommitFiberRoot=="function")try{rn.onPostCommitFiberRoot(Ui,n)}catch{}c=!0}return c}finally{Pe=a,wn.transition=i}}return!1}function Wm(n,i,a){i=oo(a,i),i=cm(n,i,1),n=ti(n,i,1),i=Ht(),n!==null&&($r(n,1,i),Jt(n,i))}function et(n,i,a){if(n.tag===3)Wm(n,n,a);else for(;i!==null;){if(i.tag===3){Wm(i,n,a);break}else if(i.tag===1){var c=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(ri===null||!ri.has(c))){n=oo(a,n),n=hm(i,n,1),i=ti(i,n,1),n=Ht(),i!==null&&($r(i,1,n),Jt(i,n));break}}i=i.return}}function Hw(n,i,a){var c=n.pingCache;c!==null&&c.delete(i),i=Ht(),n.pingedLanes|=n.suspendedLanes&a,Tt===n&&(kt&a)===a&&(pt===4||pt===3&&(kt&130023424)===kt&&500>$e()-$h?ts(n,0):Bh|=a),Jt(n,i)}function Gm(n,i){i===0&&((n.mode&1)===0?i=1:(i=Vs,Vs<<=1,(Vs&130023424)===0&&(Vs=4194304)));var a=Ht();n=Rr(n,i),n!==null&&($r(n,i,a),Jt(n,a))}function Ww(n){var i=n.memoizedState,a=0;i!==null&&(a=i.retryLane),Gm(n,a)}function Gw(n,i){var a=0;switch(n.tag){case 13:var c=n.stateNode,d=n.memoizedState;d!==null&&(a=d.retryLane);break;case 19:c=n.stateNode;break;default:throw Error(t(314))}c!==null&&c.delete(i),Gm(n,a)}var Km;Km=function(n,i,a){if(n!==null)if(n.memoizedProps!==i.pendingProps||Kt.current)Xt=!0;else{if((n.lanes&a)===0&&(i.flags&128)===0)return Xt=!1,Ow(n,i,a);Xt=(n.flags&131072)!==0}else Xt=!1,Xe&&(i.flags&1048576)!==0&&Rp(i,$l,i.index);switch(i.lanes=0,i.tag){case 2:var c=i.type;iu(n,i),n=i.pendingProps;var d=Js(i,Ot.current);io(i,a),d=wh(null,i,c,n,d,a);var m=Eh();return i.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,Qt(c)?(m=!0,jl(i)):m=!1,i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,fh(i),d.updater=nu,i.stateNode=d,d._reactInternals=i,Rh(i,c,n,a),i=Nh(null,i,c,!0,m,a)):(i.tag=0,Xe&&m&&rh(i),qt(null,i,d,a),i=i.child),i;case 16:c=i.elementType;e:{switch(iu(n,i),n=i.pendingProps,d=c._init,c=d(c._payload),i.type=c,d=i.tag=Qw(c),n=Mn(c,n),d){case 0:i=xh(null,i,c,n,a);break e;case 1:i=wm(null,i,c,n,a);break e;case 11:i=mm(null,i,c,n,a);break e;case 14:i=gm(null,i,c,Mn(c.type,n),a);break e}throw Error(t(306,c,""))}return i;case 0:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:Mn(c,d),xh(n,i,c,d,a);case 1:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:Mn(c,d),wm(n,i,c,d,a);case 3:e:{if(Em(i),n===null)throw Error(t(387));c=i.pendingProps,m=i.memoizedState,d=m.element,Lp(n,i),Ql(i,c,null,a);var v=i.memoizedState;if(c=v.element,m.isDehydrated)if(m={element:c,isDehydrated:!1,cache:v.cache,pendingSuspenseBoundaries:v.pendingSuspenseBoundaries,transitions:v.transitions},i.updateQueue.baseState=m,i.memoizedState=m,i.flags&256){d=oo(Error(t(423)),i),i=Tm(n,i,c,a,d);break e}else if(c!==d){d=oo(Error(t(424)),i),i=Tm(n,i,c,a,d);break e}else for(un=Xr(i.stateNode.containerInfo.firstChild),ln=i,Xe=!0,Ln=null,a=Op(i,null,c,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(to(),c===d){i=Pr(n,i,a);break e}qt(n,i,c,a)}i=i.child}return i;case 5:return Up(i),n===null&&oh(i),c=i.type,d=i.pendingProps,m=n!==null?n.memoizedProps:null,v=d.children,Yc(c,d)?v=null:m!==null&&Yc(c,m)&&(i.flags|=32),vm(n,i),qt(n,i,v,a),i.child;case 6:return n===null&&oh(i),null;case 13:return Im(n,i,a);case 4:return ph(i,i.stateNode.containerInfo),c=i.pendingProps,n===null?i.child=no(i,null,c,a):qt(n,i,c,a),i.child;case 11:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:Mn(c,d),mm(n,i,c,d,a);case 7:return qt(n,i,i.pendingProps,a),i.child;case 8:return qt(n,i,i.pendingProps.children,a),i.child;case 12:return qt(n,i,i.pendingProps.children,a),i.child;case 10:e:{if(c=i.type._context,d=i.pendingProps,m=i.memoizedProps,v=d.value,qe(Wl,c._currentValue),c._currentValue=v,m!==null)if(bn(m.value,v)){if(m.children===d.children&&!Kt.current){i=Pr(n,i,a);break e}}else for(m=i.child,m!==null&&(m.return=i);m!==null;){var I=m.dependencies;if(I!==null){v=m.child;for(var k=I.firstContext;k!==null;){if(k.context===c){if(m.tag===1){k=kr(-1,a&-a),k.tag=2;var j=m.updateQueue;if(j!==null){j=j.shared;var K=j.pending;K===null?k.next=k:(k.next=K.next,K.next=k),j.pending=k}}m.lanes|=a,k=m.alternate,k!==null&&(k.lanes|=a),hh(m.return,a,i),I.lanes|=a;break}k=k.next}}else if(m.tag===10)v=m.type===i.type?null:m.child;else if(m.tag===18){if(v=m.return,v===null)throw Error(t(341));v.lanes|=a,I=v.alternate,I!==null&&(I.lanes|=a),hh(v,a,i),v=m.sibling}else v=m.child;if(v!==null)v.return=m;else for(v=m;v!==null;){if(v===i){v=null;break}if(m=v.sibling,m!==null){m.return=v.return,v=m;break}v=v.return}m=v}qt(n,i,d.children,a),i=i.child}return i;case 9:return d=i.type,c=i.pendingProps.children,io(i,a),d=_n(d),c=c(d),i.flags|=1,qt(n,i,c,a),i.child;case 14:return c=i.type,d=Mn(c,i.pendingProps),d=Mn(c.type,d),gm(n,i,c,d,a);case 15:return ym(n,i,i.type,i.pendingProps,a);case 17:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:Mn(c,d),iu(n,i),i.tag=1,Qt(c)?(n=!0,jl(i)):n=!1,io(i,a),lm(i,c,d),Rh(i,c,d,a),Nh(null,i,c,!0,n,a);case 19:return Am(n,i,a);case 22:return _m(n,i,a)}throw Error(t(156,i.tag))};function Qm(n,i){return Ns(n,i)}function Kw(n,i,a,c){this.tag=n,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function En(n,i,a,c){return new Kw(n,i,a,c)}function Yh(n){return n=n.prototype,!(!n||!n.isReactComponent)}function Qw(n){if(typeof n=="function")return Yh(n)?1:0;if(n!=null){if(n=n.$$typeof,n===O)return 11;if(n===Dt)return 14}return 2}function ai(n,i){var a=n.alternate;return a===null?(a=En(n.tag,i,n.key,n.mode),a.elementType=n.elementType,a.type=n.type,a.stateNode=n.stateNode,a.alternate=n,n.alternate=a):(a.pendingProps=i,a.type=n.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=n.flags&14680064,a.childLanes=n.childLanes,a.lanes=n.lanes,a.child=n.child,a.memoizedProps=n.memoizedProps,a.memoizedState=n.memoizedState,a.updateQueue=n.updateQueue,i=n.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=n.sibling,a.index=n.index,a.ref=n.ref,a}function mu(n,i,a,c,d,m){var v=2;if(c=n,typeof n=="function")Yh(n)&&(v=1);else if(typeof n=="string")v=5;else e:switch(n){case x:return rs(a.children,d,m,i);case S:v=8,d|=8;break;case R:return n=En(12,a,i,d|2),n.elementType=R,n.lanes=m,n;case C:return n=En(13,a,i,d),n.elementType=C,n.lanes=m,n;case tt:return n=En(19,a,i,d),n.elementType=tt,n.lanes=m,n;case Ue:return gu(a,d,m,i);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case P:v=10;break e;case D:v=9;break e;case O:v=11;break e;case Dt:v=14;break e;case Vt:v=16,c=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return i=En(v,a,i,d),i.elementType=n,i.type=c,i.lanes=m,i}function rs(n,i,a,c){return n=En(7,n,c,i),n.lanes=a,n}function gu(n,i,a,c){return n=En(22,n,c,i),n.elementType=Ue,n.lanes=a,n.stateNode={isHidden:!1},n}function Jh(n,i,a){return n=En(6,n,null,i),n.lanes=a,n}function Zh(n,i,a){return i=En(4,n.children!==null?n.children:[],n.key,i),i.lanes=a,i.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},i}function Xw(n,i,a,c,d){this.tag=i,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Br(0),this.expirationTimes=Br(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Br(0),this.identifierPrefix=c,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function ed(n,i,a,c,d,m,v,I,k){return n=new Xw(n,i,a,I,k),i===1?(i=1,m===!0&&(i|=8)):i=0,m=En(3,null,null,i),n.current=m,m.stateNode=n,m.memoizedState={element:c,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},fh(m),n}function Yw(n,i,a){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Te,key:c==null?null:""+c,children:n,containerInfo:i,implementation:a}}function Xm(n){if(!n)return Jr;n=n._reactInternals;e:{if(kn(n)!==n||n.tag!==1)throw Error(t(170));var i=n;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(Qt(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(t(171))}if(n.tag===1){var a=n.type;if(Qt(a))return Sp(n,a,i)}return i}function Ym(n,i,a,c,d,m,v,I,k){return n=ed(a,c,!0,n,d,m,v,I,k),n.context=Xm(null),a=n.current,c=Ht(),d=si(a),m=kr(c,d),m.callback=i??null,ti(a,m,d),n.current.lanes=d,$r(n,d,c),Jt(n,c),n}function yu(n,i,a,c){var d=i.current,m=Ht(),v=si(d);return a=Xm(a),i.context===null?i.context=a:i.pendingContext=a,i=kr(m,v),i.payload={element:n},c=c===void 0?null:c,c!==null&&(i.callback=c),n=ti(d,i,v),n!==null&&(jn(n,d,v,m),Kl(n,d,v)),v}function _u(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function Jm(n,i){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var a=n.retryLane;n.retryLane=a!==0&&a<i?a:i}}function td(n,i){Jm(n,i),(n=n.alternate)&&Jm(n,i)}function Jw(){return null}var Zm=typeof reportError=="function"?reportError:function(n){console.error(n)};function nd(n){this._internalRoot=n}vu.prototype.render=nd.prototype.render=function(n){var i=this._internalRoot;if(i===null)throw Error(t(409));yu(n,i,null,null)},vu.prototype.unmount=nd.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var i=n.containerInfo;es(function(){yu(null,n,null,null)}),i[Ir]=null}};function vu(n){this._internalRoot=n}vu.prototype.unstable_scheduleHydration=function(n){if(n){var i=vl();n={blockedOn:null,target:n,priority:i};for(var a=0;a<Xn.length&&i!==0&&i<Xn[a].priority;a++);Xn.splice(a,0,n),a===0&&Tl(n)}};function rd(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function wu(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function eg(){}function Zw(n,i,a,c,d){if(d){if(typeof c=="function"){var m=c;c=function(){var j=_u(v);m.call(j)}}var v=Ym(i,c,n,0,null,!1,!1,"",eg);return n._reactRootContainer=v,n[Ir]=v.current,ha(n.nodeType===8?n.parentNode:n),es(),v}for(;d=n.lastChild;)n.removeChild(d);if(typeof c=="function"){var I=c;c=function(){var j=_u(k);I.call(j)}}var k=ed(n,0,!1,null,null,!1,!1,"",eg);return n._reactRootContainer=k,n[Ir]=k.current,ha(n.nodeType===8?n.parentNode:n),es(function(){yu(i,k,a,c)}),k}function Eu(n,i,a,c,d){var m=a._reactRootContainer;if(m){var v=m;if(typeof d=="function"){var I=d;d=function(){var k=_u(v);I.call(k)}}yu(i,v,n,d)}else v=Zw(a,i,n,d,c);return _u(v)}yl=function(n){switch(n.tag){case 3:var i=n.stateNode;if(i.current.memoizedState.isDehydrated){var a=zr(i.pendingLanes);a!==0&&(qr(i,a|1),Jt(i,$e()),(Ve&6)===0&&(uo=$e()+500,Zr()))}break;case 13:es(function(){var c=Rr(n,1);if(c!==null){var d=Ht();jn(c,n,1,d)}}),td(n,1)}},Os=function(n){if(n.tag===13){var i=Rr(n,134217728);if(i!==null){var a=Ht();jn(i,n,134217728,a)}td(n,134217728)}},_l=function(n){if(n.tag===13){var i=si(n),a=Rr(n,i);if(a!==null){var c=Ht();jn(a,n,i,c)}td(n,i)}},vl=function(){return Pe},wl=function(n,i){var a=Pe;try{return Pe=n,i()}finally{Pe=a}},As=function(n,i,a){switch(i){case"input":if(Lo(n,a),i=a.name,a.type==="radio"&&i!=null){for(a=n;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<a.length;i++){var c=a[i];if(c!==n&&c.form===n.form){var d=Fl(c);if(!d)throw Error(t(90));vs(c),Lo(c,d)}}}break;case"textarea":Is(n,a);break;case"select":i=a.value,i!=null&&mr(n,!!a.multiple,i,!1)}},Oi=Kh,Wo=es;var eE={usingClientEntryPoint:!1,Events:[pa,Xs,Fl,Kn,Ho,Kh]},ka={findFiberByHostInstance:Wi,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},tE={bundleType:ka.bundleType,version:ka.version,rendererPackageName:ka.rendererPackageName,rendererConfig:ka.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ee.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=Qo(n),n===null?null:n.stateNode},findFiberByHostInstance:ka.findFiberByHostInstance||Jw,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Tu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Tu.isDisabled&&Tu.supportsFiber)try{Ui=Tu.inject(tE),rn=Tu}catch{}}return Zt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=eE,Zt.createPortal=function(n,i){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!rd(i))throw Error(t(200));return Yw(n,i,null,a)},Zt.createRoot=function(n,i){if(!rd(n))throw Error(t(299));var a=!1,c="",d=Zm;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(c=i.identifierPrefix),i.onRecoverableError!==void 0&&(d=i.onRecoverableError)),i=ed(n,1,!1,null,null,a,!1,c,d),n[Ir]=i.current,ha(n.nodeType===8?n.parentNode:n),new nd(i)},Zt.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var i=n._reactInternals;if(i===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=Qo(i),n=n===null?null:n.stateNode,n},Zt.flushSync=function(n){return es(n)},Zt.hydrate=function(n,i,a){if(!wu(i))throw Error(t(200));return Eu(null,n,i,!0,a)},Zt.hydrateRoot=function(n,i,a){if(!rd(n))throw Error(t(405));var c=a!=null&&a.hydratedSources||null,d=!1,m="",v=Zm;if(a!=null&&(a.unstable_strictMode===!0&&(d=!0),a.identifierPrefix!==void 0&&(m=a.identifierPrefix),a.onRecoverableError!==void 0&&(v=a.onRecoverableError)),i=Ym(i,null,n,1,a??null,d,!1,m,v),n[Ir]=i.current,ha(n),c)for(n=0;n<c.length;n++)a=c[n],d=a._getVersion,d=d(a._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[a,d]:i.mutableSourceEagerHydrationData.push(a,d);return new vu(i)},Zt.render=function(n,i,a){if(!wu(i))throw Error(t(200));return Eu(null,n,i,!1,a)},Zt.unmountComponentAtNode=function(n){if(!wu(n))throw Error(t(40));return n._reactRootContainer?(es(function(){Eu(null,null,n,!1,function(){n._reactRootContainer=null,n[Ir]=null})}),!0):!1},Zt.unstable_batchedUpdates=Kh,Zt.unstable_renderSubtreeIntoContainer=function(n,i,a,c){if(!wu(a))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return Eu(n,i,a,!1,c)},Zt.version="18.3.1-next-f1338f8080-20240426",Zt}var lg;function uE(){if(lg)return od.exports;lg=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),od.exports=lE(),od.exports}var ug;function cE(){if(ug)return Iu;ug=1;var r=uE();return Iu.createRoot=r.createRoot,Iu.hydrateRoot=r.hydrateRoot,Iu}var hE=cE();const dE=()=>{};var cg={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const t_=function(r){const e=[];let t=0;for(let s=0;s<r.length;s++){let o=r.charCodeAt(s);o<128?e[t++]=o:o<2048?(e[t++]=o>>6|192,e[t++]=o&63|128):(o&64512)===55296&&s+1<r.length&&(r.charCodeAt(s+1)&64512)===56320?(o=65536+((o&1023)<<10)+(r.charCodeAt(++s)&1023),e[t++]=o>>18|240,e[t++]=o>>12&63|128,e[t++]=o>>6&63|128,e[t++]=o&63|128):(e[t++]=o>>12|224,e[t++]=o>>6&63|128,e[t++]=o&63|128)}return e},fE=function(r){const e=[];let t=0,s=0;for(;t<r.length;){const o=r[t++];if(o<128)e[s++]=String.fromCharCode(o);else if(o>191&&o<224){const l=r[t++];e[s++]=String.fromCharCode((o&31)<<6|l&63)}else if(o>239&&o<365){const l=r[t++],h=r[t++],p=r[t++],g=((o&7)<<18|(l&63)<<12|(h&63)<<6|p&63)-65536;e[s++]=String.fromCharCode(55296+(g>>10)),e[s++]=String.fromCharCode(56320+(g&1023))}else{const l=r[t++],h=r[t++];e[s++]=String.fromCharCode((o&15)<<12|(l&63)<<6|h&63)}}return e.join("")},n_={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(r,e){if(!Array.isArray(r))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let o=0;o<r.length;o+=3){const l=r[o],h=o+1<r.length,p=h?r[o+1]:0,g=o+2<r.length,_=g?r[o+2]:0,E=l>>2,T=(l&3)<<4|p>>4;let A=(p&15)<<2|_>>6,U=_&63;g||(U=64,h||(A=64)),s.push(t[E],t[T],t[A],t[U])}return s.join("")},encodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(r):this.encodeByteArray(t_(r),e)},decodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(r):fE(this.decodeStringToByteArray(r,e))},decodeStringToByteArray(r,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let o=0;o<r.length;){const l=t[r.charAt(o++)],p=o<r.length?t[r.charAt(o)]:0;++o;const _=o<r.length?t[r.charAt(o)]:64;++o;const T=o<r.length?t[r.charAt(o)]:64;if(++o,l==null||p==null||_==null||T==null)throw new pE;const A=l<<2|p>>4;if(s.push(A),_!==64){const U=p<<4&240|_>>2;if(s.push(U),T!==64){const W=_<<6&192|T;s.push(W)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let r=0;r<this.ENCODED_VALS.length;r++)this.byteToCharMap_[r]=this.ENCODED_VALS.charAt(r),this.charToByteMap_[this.byteToCharMap_[r]]=r,this.byteToCharMapWebSafe_[r]=this.ENCODED_VALS_WEBSAFE.charAt(r),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[r]]=r,r>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(r)]=r,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(r)]=r)}}};class pE extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const mE=function(r){const e=t_(r);return n_.encodeByteArray(e,!0)},ju=function(r){return mE(r).replace(/\./g,"")},r_=function(r){try{return n_.decodeString(r,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gE(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yE=()=>gE().__FIREBASE_DEFAULTS__,_E=()=>{if(typeof process>"u"||typeof cg>"u")return;const r=cg.__FIREBASE_DEFAULTS__;if(r)return JSON.parse(r)},vE=()=>{if(typeof document>"u")return;let r;try{r=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=r&&r_(r[1]);return e&&JSON.parse(e)},uc=()=>{try{return dE()||yE()||_E()||vE()}catch(r){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${r}`);return}},i_=r=>{var e,t;return(t=(e=uc())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[r]},wE=r=>{const e=i_(r);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),s]:[e.substring(0,t),s]},s_=()=>{var r;return(r=uc())===null||r===void 0?void 0:r.config},o_=r=>{var e;return(e=uc())===null||e===void 0?void 0:e[`_${r}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EE{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,s)=>{t?this.reject(t):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,s))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ro(r){try{return(r.startsWith("http://")||r.startsWith("https://")?new URL(r).hostname:r).endsWith(".cloudworkstations.dev")}catch{return!1}}async function a_(r){return(await fetch(r,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TE(r,e){if(r.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},s=e||"demo-project",o=r.iat||0,l=r.sub||r.user_id;if(!l)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const h=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:o,exp:o+3600,auth_time:o,sub:l,user_id:l,firebase:{sign_in_provider:"custom",identities:{}}},r);return[ju(JSON.stringify(t)),ju(JSON.stringify(h)),""].join(".")}const Oa={};function IE(){const r={prod:[],emulator:[]};for(const e of Object.keys(Oa))Oa[e]?r.emulator.push(e):r.prod.push(e);return r}function SE(r){let e=document.getElementById(r),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",r),t=!0),{created:t,element:e}}let hg=!1;function l_(r,e){if(typeof window>"u"||typeof document>"u"||!Ro(window.location.host)||Oa[r]===e||Oa[r]||hg)return;Oa[r]=e;function t(A){return`__firebase__banner__${A}`}const s="__firebase__banner",l=IE().prod.length>0;function h(){const A=document.getElementById(s);A&&A.remove()}function p(A){A.style.display="flex",A.style.background="#7faaf0",A.style.position="fixed",A.style.bottom="5px",A.style.left="5px",A.style.padding=".5em",A.style.borderRadius="5px",A.style.alignItems="center"}function g(A,U){A.setAttribute("width","24"),A.setAttribute("id",U),A.setAttribute("height","24"),A.setAttribute("viewBox","0 0 24 24"),A.setAttribute("fill","none"),A.style.marginLeft="-6px"}function _(){const A=document.createElement("span");return A.style.cursor="pointer",A.style.marginLeft="16px",A.style.fontSize="24px",A.innerHTML=" &times;",A.onclick=()=>{hg=!0,h()},A}function E(A,U){A.setAttribute("id",U),A.innerText="Learn more",A.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",A.setAttribute("target","__blank"),A.style.paddingLeft="5px",A.style.textDecoration="underline"}function T(){const A=SE(s),U=t("text"),W=document.getElementById(U)||document.createElement("span"),X=t("learnmore"),$=document.getElementById(X)||document.createElement("a"),le=t("preprendIcon"),he=document.getElementById(le)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(A.created){const me=A.element;p(me),E($,X);const Ee=_();g(he,le),me.append(he,W,$,Ee),document.body.appendChild(me)}l?(W.innerText="Preview backend disconnected.",he.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(he.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,W.innerText="Preview backend running in this workspace."),W.setAttribute("id",U)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",T):T()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function AE(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(zt())}function CE(){var r;const e=(r=uc())===null||r===void 0?void 0:r.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function RE(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function u_(){const r=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof r=="object"&&r.id!==void 0}function kE(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function PE(){const r=zt();return r.indexOf("MSIE ")>=0||r.indexOf("Trident/")>=0}function xE(){return!CE()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function c_(){try{return typeof indexedDB=="object"}catch{return!1}}function h_(){return new Promise((r,e)=>{try{let t=!0;const s="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(s);o.onsuccess=()=>{o.result.close(),t||self.indexedDB.deleteDatabase(s),r(!0)},o.onupgradeneeded=()=>{t=!1},o.onerror=()=>{var l;e(((l=o.error)===null||l===void 0?void 0:l.message)||"")}}catch(t){e(t)}})}function NE(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DE="FirebaseError";class Wn extends Error{constructor(e,t,s){super(t),this.code=e,this.customData=s,this.name=DE,Object.setPrototypeOf(this,Wn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,gs.prototype.create)}}class gs{constructor(e,t,s){this.service=e,this.serviceName=t,this.errors=s}create(e,...t){const s=t[0]||{},o=`${this.service}/${e}`,l=this.errors[e],h=l?VE(l,s):"Error",p=`${this.serviceName}: ${h} (${o}).`;return new Wn(o,p,s)}}function VE(r,e){return r.replace(OE,(t,s)=>{const o=e[s];return o!=null?String(o):`<${s}?>`})}const OE=/\{\$([^}]+)}/g;function bE(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}function cs(r,e){if(r===e)return!0;const t=Object.keys(r),s=Object.keys(e);for(const o of t){if(!s.includes(o))return!1;const l=r[o],h=e[o];if(dg(l)&&dg(h)){if(!cs(l,h))return!1}else if(l!==h)return!1}for(const o of s)if(!t.includes(o))return!1;return!0}function dg(r){return r!==null&&typeof r=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xa(r){const e=[];for(const[t,s]of Object.entries(r))Array.isArray(s)?s.forEach(o=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(o))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function LE(r,e){const t=new ME(r,e);return t.subscribe.bind(t)}class ME{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,s){let o;if(e===void 0&&t===void 0&&s===void 0)throw new Error("Missing Observer.");FE(e,["next","error","complete"])?o=e:o={next:e,error:t,complete:s},o.next===void 0&&(o.next=ud),o.error===void 0&&(o.error=ud),o.complete===void 0&&(o.complete=ud);const l=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),l}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function FE(r,e){if(typeof r!="object"||r===null)return!1;for(const t of e)if(t in r&&typeof r[t]=="function")return!0;return!1}function ud(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UE=1e3,jE=2,zE=14400*1e3,BE=.5;function fg(r,e=UE,t=jE){const s=e*Math.pow(t,r),o=Math.round(BE*s*(Math.random()-.5)*2);return Math.min(zE,s+o)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _t(r){return r&&r._delegate?r._delegate:r}class qn{constructor(e,t,s){this.name=e,this.instanceFactory=t,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ss="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $E{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const s=new EE;if(this.instancesDeferred.set(t,s),this.isInitialized(t)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:t});o&&s.resolve(o)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),o=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(l){if(o)return null;throw l}else{if(o)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(HE(e))try{this.getOrInitializeService({instanceIdentifier:ss})}catch{}for(const[t,s]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(t);try{const l=this.getOrInitializeService({instanceIdentifier:o});s.resolve(l)}catch{}}}}clearInstance(e=ss){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ss){return this.instances.has(e)}getOptions(e=ss){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:s,options:t});for(const[l,h]of this.instancesDeferred.entries()){const p=this.normalizeInstanceIdentifier(l);s===p&&h.resolve(o)}return o}onInit(e,t){var s;const o=this.normalizeInstanceIdentifier(t),l=(s=this.onInitCallbacks.get(o))!==null&&s!==void 0?s:new Set;l.add(e),this.onInitCallbacks.set(o,l);const h=this.instances.get(o);return h&&e(h,o),()=>{l.delete(e)}}invokeOnInitCallbacks(e,t){const s=this.onInitCallbacks.get(t);if(s)for(const o of s)try{o(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:qE(e),options:t}),this.instances.set(e,s),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=ss){return this.component?this.component.multipleInstances?e:ss:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function qE(r){return r===ss?void 0:r}function HE(r){return r.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WE{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new $E(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Re;(function(r){r[r.DEBUG=0]="DEBUG",r[r.VERBOSE=1]="VERBOSE",r[r.INFO=2]="INFO",r[r.WARN=3]="WARN",r[r.ERROR=4]="ERROR",r[r.SILENT=5]="SILENT"})(Re||(Re={}));const GE={debug:Re.DEBUG,verbose:Re.VERBOSE,info:Re.INFO,warn:Re.WARN,error:Re.ERROR,silent:Re.SILENT},KE=Re.INFO,QE={[Re.DEBUG]:"log",[Re.VERBOSE]:"log",[Re.INFO]:"info",[Re.WARN]:"warn",[Re.ERROR]:"error"},XE=(r,e,...t)=>{if(e<r.logLevel)return;const s=new Date().toISOString(),o=QE[e];if(o)console[o](`[${s}]  ${r.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class cc{constructor(e){this.name=e,this._logLevel=KE,this._logHandler=XE,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Re))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?GE[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Re.DEBUG,...e),this._logHandler(this,Re.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Re.VERBOSE,...e),this._logHandler(this,Re.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Re.INFO,...e),this._logHandler(this,Re.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Re.WARN,...e),this._logHandler(this,Re.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Re.ERROR,...e),this._logHandler(this,Re.ERROR,...e)}}const YE=(r,e)=>e.some(t=>r instanceof t);let pg,mg;function JE(){return pg||(pg=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function ZE(){return mg||(mg=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const d_=new WeakMap,Cd=new WeakMap,f_=new WeakMap,cd=new WeakMap,ef=new WeakMap;function eT(r){const e=new Promise((t,s)=>{const o=()=>{r.removeEventListener("success",l),r.removeEventListener("error",h)},l=()=>{t(mi(r.result)),o()},h=()=>{s(r.error),o()};r.addEventListener("success",l),r.addEventListener("error",h)});return e.then(t=>{t instanceof IDBCursor&&d_.set(t,r)}).catch(()=>{}),ef.set(e,r),e}function tT(r){if(Cd.has(r))return;const e=new Promise((t,s)=>{const o=()=>{r.removeEventListener("complete",l),r.removeEventListener("error",h),r.removeEventListener("abort",h)},l=()=>{t(),o()},h=()=>{s(r.error||new DOMException("AbortError","AbortError")),o()};r.addEventListener("complete",l),r.addEventListener("error",h),r.addEventListener("abort",h)});Cd.set(r,e)}let Rd={get(r,e,t){if(r instanceof IDBTransaction){if(e==="done")return Cd.get(r);if(e==="objectStoreNames")return r.objectStoreNames||f_.get(r);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return mi(r[e])},set(r,e,t){return r[e]=t,!0},has(r,e){return r instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in r}};function nT(r){Rd=r(Rd)}function rT(r){return r===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const s=r.call(hd(this),e,...t);return f_.set(s,e.sort?e.sort():[e]),mi(s)}:ZE().includes(r)?function(...e){return r.apply(hd(this),e),mi(d_.get(this))}:function(...e){return mi(r.apply(hd(this),e))}}function iT(r){return typeof r=="function"?rT(r):(r instanceof IDBTransaction&&tT(r),YE(r,JE())?new Proxy(r,Rd):r)}function mi(r){if(r instanceof IDBRequest)return eT(r);if(cd.has(r))return cd.get(r);const e=iT(r);return e!==r&&(cd.set(r,e),ef.set(e,r)),e}const hd=r=>ef.get(r);function p_(r,e,{blocked:t,upgrade:s,blocking:o,terminated:l}={}){const h=indexedDB.open(r,e),p=mi(h);return s&&h.addEventListener("upgradeneeded",g=>{s(mi(h.result),g.oldVersion,g.newVersion,mi(h.transaction),g)}),t&&h.addEventListener("blocked",g=>t(g.oldVersion,g.newVersion,g)),p.then(g=>{l&&g.addEventListener("close",()=>l()),o&&g.addEventListener("versionchange",_=>o(_.oldVersion,_.newVersion,_))}).catch(()=>{}),p}const sT=["get","getKey","getAll","getAllKeys","count"],oT=["put","add","delete","clear"],dd=new Map;function gg(r,e){if(!(r instanceof IDBDatabase&&!(e in r)&&typeof e=="string"))return;if(dd.get(e))return dd.get(e);const t=e.replace(/FromIndex$/,""),s=e!==t,o=oT.includes(t);if(!(t in(s?IDBIndex:IDBObjectStore).prototype)||!(o||sT.includes(t)))return;const l=async function(h,...p){const g=this.transaction(h,o?"readwrite":"readonly");let _=g.store;return s&&(_=_.index(p.shift())),(await Promise.all([_[t](...p),o&&g.done]))[0]};return dd.set(e,l),l}nT(r=>({...r,get:(e,t,s)=>gg(e,t)||r.get(e,t,s),has:(e,t)=>!!gg(e,t)||r.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aT{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(lT(t)){const s=t.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(t=>t).join(" ")}}function lT(r){const e=r.getComponent();return(e==null?void 0:e.type)==="VERSION"}const kd="@firebase/app",yg="0.13.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vr=new cc("@firebase/app"),uT="@firebase/app-compat",cT="@firebase/analytics-compat",hT="@firebase/analytics",dT="@firebase/app-check-compat",fT="@firebase/app-check",pT="@firebase/auth",mT="@firebase/auth-compat",gT="@firebase/database",yT="@firebase/data-connect",_T="@firebase/database-compat",vT="@firebase/functions",wT="@firebase/functions-compat",ET="@firebase/installations",TT="@firebase/installations-compat",IT="@firebase/messaging",ST="@firebase/messaging-compat",AT="@firebase/performance",CT="@firebase/performance-compat",RT="@firebase/remote-config",kT="@firebase/remote-config-compat",PT="@firebase/storage",xT="@firebase/storage-compat",NT="@firebase/firestore",DT="@firebase/ai",VT="@firebase/firestore-compat",OT="firebase",bT="11.10.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pd="[DEFAULT]",LT={[kd]:"fire-core",[uT]:"fire-core-compat",[hT]:"fire-analytics",[cT]:"fire-analytics-compat",[fT]:"fire-app-check",[dT]:"fire-app-check-compat",[pT]:"fire-auth",[mT]:"fire-auth-compat",[gT]:"fire-rtdb",[yT]:"fire-data-connect",[_T]:"fire-rtdb-compat",[vT]:"fire-fn",[wT]:"fire-fn-compat",[ET]:"fire-iid",[TT]:"fire-iid-compat",[IT]:"fire-fcm",[ST]:"fire-fcm-compat",[AT]:"fire-perf",[CT]:"fire-perf-compat",[RT]:"fire-rc",[kT]:"fire-rc-compat",[PT]:"fire-gcs",[xT]:"fire-gcs-compat",[NT]:"fire-fst",[VT]:"fire-fst-compat",[DT]:"fire-vertex","fire-js":"fire-js",[OT]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zu=new Map,MT=new Map,xd=new Map;function _g(r,e){try{r.container.addComponent(e)}catch(t){Vr.debug(`Component ${e.name} failed to register with FirebaseApp ${r.name}`,t)}}function hr(r){const e=r.name;if(xd.has(e))return Vr.debug(`There were multiple attempts to register component ${e}.`),!1;xd.set(e,r);for(const t of zu.values())_g(t,r);for(const t of MT.values())_g(t,r);return!0}function Ya(r,e){const t=r.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),r.container.getProvider(e)}function zn(r){return r==null?!1:r.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FT={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},gi=new gs("app","Firebase",FT);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UT{constructor(e,t,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new qn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw gi.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ko=bT;function m_(r,e={}){let t=r;typeof e!="object"&&(e={name:e});const s=Object.assign({name:Pd,automaticDataCollectionEnabled:!0},e),o=s.name;if(typeof o!="string"||!o)throw gi.create("bad-app-name",{appName:String(o)});if(t||(t=s_()),!t)throw gi.create("no-options");const l=zu.get(o);if(l){if(cs(t,l.options)&&cs(s,l.config))return l;throw gi.create("duplicate-app",{appName:o})}const h=new WE(o);for(const g of xd.values())h.addComponent(g);const p=new UT(t,s,h);return zu.set(o,p),p}function g_(r=Pd){const e=zu.get(r);if(!e&&r===Pd&&s_())return m_();if(!e)throw gi.create("no-app",{appName:r});return e}function In(r,e,t){var s;let o=(s=LT[r])!==null&&s!==void 0?s:r;t&&(o+=`-${t}`);const l=o.match(/\s|\//),h=e.match(/\s|\//);if(l||h){const p=[`Unable to register library "${o}" with version "${e}":`];l&&p.push(`library name "${o}" contains illegal characters (whitespace or "/")`),l&&h&&p.push("and"),h&&p.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Vr.warn(p.join(" "));return}hr(new qn(`${o}-version`,()=>({library:o,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jT="firebase-heartbeat-database",zT=1,Ba="firebase-heartbeat-store";let fd=null;function y_(){return fd||(fd=p_(jT,zT,{upgrade:(r,e)=>{switch(e){case 0:try{r.createObjectStore(Ba)}catch(t){console.warn(t)}}}}).catch(r=>{throw gi.create("idb-open",{originalErrorMessage:r.message})})),fd}async function BT(r){try{const t=(await y_()).transaction(Ba),s=await t.objectStore(Ba).get(__(r));return await t.done,s}catch(e){if(e instanceof Wn)Vr.warn(e.message);else{const t=gi.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Vr.warn(t.message)}}}async function vg(r,e){try{const s=(await y_()).transaction(Ba,"readwrite");await s.objectStore(Ba).put(e,__(r)),await s.done}catch(t){if(t instanceof Wn)Vr.warn(t.message);else{const s=gi.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Vr.warn(s.message)}}}function __(r){return`${r.name}!${r.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $T=1024,qT=30;class HT{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new GT(t),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,t;try{const o=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),l=wg();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===l||this._heartbeatsCache.heartbeats.some(h=>h.date===l))return;if(this._heartbeatsCache.heartbeats.push({date:l,agent:o}),this._heartbeatsCache.heartbeats.length>qT){const h=KT(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(h,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){Vr.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=wg(),{heartbeatsToSend:s,unsentEntries:o}=WT(this._heartbeatsCache.heartbeats),l=ju(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=t,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),l}catch(t){return Vr.warn(t),""}}}function wg(){return new Date().toISOString().substring(0,10)}function WT(r,e=$T){const t=[];let s=r.slice();for(const o of r){const l=t.find(h=>h.agent===o.agent);if(l){if(l.dates.push(o.date),Eg(t)>e){l.dates.pop();break}}else if(t.push({agent:o.agent,dates:[o.date]}),Eg(t)>e){t.pop();break}s=s.slice(1)}return{heartbeatsToSend:t,unsentEntries:s}}class GT{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return c_()?h_().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await BT(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const o=await this.read();return vg(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:o.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const o=await this.read();return vg(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:o.lastSentHeartbeatDate,heartbeats:[...o.heartbeats,...e.heartbeats]})}else return}}function Eg(r){return ju(JSON.stringify({version:2,heartbeats:r})).length}function KT(r){if(r.length===0)return-1;let e=0,t=r[0].date;for(let s=1;s<r.length;s++)r[s].date<t&&(t=r[s].date,e=s);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QT(r){hr(new qn("platform-logger",e=>new aT(e),"PRIVATE")),hr(new qn("heartbeat",e=>new HT(e),"PRIVATE")),In(kd,yg,r),In(kd,yg,"esm2017"),In("fire-js","")}QT("");var XT="firebase",YT="11.10.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */In(XT,YT,"app");var Tg=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var yi,v_;(function(){var r;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(x,S){function R(){}R.prototype=S.prototype,x.D=S.prototype,x.prototype=new R,x.prototype.constructor=x,x.C=function(P,D,O){for(var C=Array(arguments.length-2),tt=2;tt<arguments.length;tt++)C[tt-2]=arguments[tt];return S.prototype[D].apply(P,C)}}function t(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(s,t),s.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function o(x,S,R){R||(R=0);var P=Array(16);if(typeof S=="string")for(var D=0;16>D;++D)P[D]=S.charCodeAt(R++)|S.charCodeAt(R++)<<8|S.charCodeAt(R++)<<16|S.charCodeAt(R++)<<24;else for(D=0;16>D;++D)P[D]=S[R++]|S[R++]<<8|S[R++]<<16|S[R++]<<24;S=x.g[0],R=x.g[1],D=x.g[2];var O=x.g[3],C=S+(O^R&(D^O))+P[0]+3614090360&4294967295;S=R+(C<<7&4294967295|C>>>25),C=O+(D^S&(R^D))+P[1]+3905402710&4294967295,O=S+(C<<12&4294967295|C>>>20),C=D+(R^O&(S^R))+P[2]+606105819&4294967295,D=O+(C<<17&4294967295|C>>>15),C=R+(S^D&(O^S))+P[3]+3250441966&4294967295,R=D+(C<<22&4294967295|C>>>10),C=S+(O^R&(D^O))+P[4]+4118548399&4294967295,S=R+(C<<7&4294967295|C>>>25),C=O+(D^S&(R^D))+P[5]+1200080426&4294967295,O=S+(C<<12&4294967295|C>>>20),C=D+(R^O&(S^R))+P[6]+2821735955&4294967295,D=O+(C<<17&4294967295|C>>>15),C=R+(S^D&(O^S))+P[7]+4249261313&4294967295,R=D+(C<<22&4294967295|C>>>10),C=S+(O^R&(D^O))+P[8]+1770035416&4294967295,S=R+(C<<7&4294967295|C>>>25),C=O+(D^S&(R^D))+P[9]+2336552879&4294967295,O=S+(C<<12&4294967295|C>>>20),C=D+(R^O&(S^R))+P[10]+4294925233&4294967295,D=O+(C<<17&4294967295|C>>>15),C=R+(S^D&(O^S))+P[11]+2304563134&4294967295,R=D+(C<<22&4294967295|C>>>10),C=S+(O^R&(D^O))+P[12]+1804603682&4294967295,S=R+(C<<7&4294967295|C>>>25),C=O+(D^S&(R^D))+P[13]+4254626195&4294967295,O=S+(C<<12&4294967295|C>>>20),C=D+(R^O&(S^R))+P[14]+2792965006&4294967295,D=O+(C<<17&4294967295|C>>>15),C=R+(S^D&(O^S))+P[15]+1236535329&4294967295,R=D+(C<<22&4294967295|C>>>10),C=S+(D^O&(R^D))+P[1]+4129170786&4294967295,S=R+(C<<5&4294967295|C>>>27),C=O+(R^D&(S^R))+P[6]+3225465664&4294967295,O=S+(C<<9&4294967295|C>>>23),C=D+(S^R&(O^S))+P[11]+643717713&4294967295,D=O+(C<<14&4294967295|C>>>18),C=R+(O^S&(D^O))+P[0]+3921069994&4294967295,R=D+(C<<20&4294967295|C>>>12),C=S+(D^O&(R^D))+P[5]+3593408605&4294967295,S=R+(C<<5&4294967295|C>>>27),C=O+(R^D&(S^R))+P[10]+38016083&4294967295,O=S+(C<<9&4294967295|C>>>23),C=D+(S^R&(O^S))+P[15]+3634488961&4294967295,D=O+(C<<14&4294967295|C>>>18),C=R+(O^S&(D^O))+P[4]+3889429448&4294967295,R=D+(C<<20&4294967295|C>>>12),C=S+(D^O&(R^D))+P[9]+568446438&4294967295,S=R+(C<<5&4294967295|C>>>27),C=O+(R^D&(S^R))+P[14]+3275163606&4294967295,O=S+(C<<9&4294967295|C>>>23),C=D+(S^R&(O^S))+P[3]+4107603335&4294967295,D=O+(C<<14&4294967295|C>>>18),C=R+(O^S&(D^O))+P[8]+1163531501&4294967295,R=D+(C<<20&4294967295|C>>>12),C=S+(D^O&(R^D))+P[13]+2850285829&4294967295,S=R+(C<<5&4294967295|C>>>27),C=O+(R^D&(S^R))+P[2]+4243563512&4294967295,O=S+(C<<9&4294967295|C>>>23),C=D+(S^R&(O^S))+P[7]+1735328473&4294967295,D=O+(C<<14&4294967295|C>>>18),C=R+(O^S&(D^O))+P[12]+2368359562&4294967295,R=D+(C<<20&4294967295|C>>>12),C=S+(R^D^O)+P[5]+4294588738&4294967295,S=R+(C<<4&4294967295|C>>>28),C=O+(S^R^D)+P[8]+2272392833&4294967295,O=S+(C<<11&4294967295|C>>>21),C=D+(O^S^R)+P[11]+1839030562&4294967295,D=O+(C<<16&4294967295|C>>>16),C=R+(D^O^S)+P[14]+4259657740&4294967295,R=D+(C<<23&4294967295|C>>>9),C=S+(R^D^O)+P[1]+2763975236&4294967295,S=R+(C<<4&4294967295|C>>>28),C=O+(S^R^D)+P[4]+1272893353&4294967295,O=S+(C<<11&4294967295|C>>>21),C=D+(O^S^R)+P[7]+4139469664&4294967295,D=O+(C<<16&4294967295|C>>>16),C=R+(D^O^S)+P[10]+3200236656&4294967295,R=D+(C<<23&4294967295|C>>>9),C=S+(R^D^O)+P[13]+681279174&4294967295,S=R+(C<<4&4294967295|C>>>28),C=O+(S^R^D)+P[0]+3936430074&4294967295,O=S+(C<<11&4294967295|C>>>21),C=D+(O^S^R)+P[3]+3572445317&4294967295,D=O+(C<<16&4294967295|C>>>16),C=R+(D^O^S)+P[6]+76029189&4294967295,R=D+(C<<23&4294967295|C>>>9),C=S+(R^D^O)+P[9]+3654602809&4294967295,S=R+(C<<4&4294967295|C>>>28),C=O+(S^R^D)+P[12]+3873151461&4294967295,O=S+(C<<11&4294967295|C>>>21),C=D+(O^S^R)+P[15]+530742520&4294967295,D=O+(C<<16&4294967295|C>>>16),C=R+(D^O^S)+P[2]+3299628645&4294967295,R=D+(C<<23&4294967295|C>>>9),C=S+(D^(R|~O))+P[0]+4096336452&4294967295,S=R+(C<<6&4294967295|C>>>26),C=O+(R^(S|~D))+P[7]+1126891415&4294967295,O=S+(C<<10&4294967295|C>>>22),C=D+(S^(O|~R))+P[14]+2878612391&4294967295,D=O+(C<<15&4294967295|C>>>17),C=R+(O^(D|~S))+P[5]+4237533241&4294967295,R=D+(C<<21&4294967295|C>>>11),C=S+(D^(R|~O))+P[12]+1700485571&4294967295,S=R+(C<<6&4294967295|C>>>26),C=O+(R^(S|~D))+P[3]+2399980690&4294967295,O=S+(C<<10&4294967295|C>>>22),C=D+(S^(O|~R))+P[10]+4293915773&4294967295,D=O+(C<<15&4294967295|C>>>17),C=R+(O^(D|~S))+P[1]+2240044497&4294967295,R=D+(C<<21&4294967295|C>>>11),C=S+(D^(R|~O))+P[8]+1873313359&4294967295,S=R+(C<<6&4294967295|C>>>26),C=O+(R^(S|~D))+P[15]+4264355552&4294967295,O=S+(C<<10&4294967295|C>>>22),C=D+(S^(O|~R))+P[6]+2734768916&4294967295,D=O+(C<<15&4294967295|C>>>17),C=R+(O^(D|~S))+P[13]+1309151649&4294967295,R=D+(C<<21&4294967295|C>>>11),C=S+(D^(R|~O))+P[4]+4149444226&4294967295,S=R+(C<<6&4294967295|C>>>26),C=O+(R^(S|~D))+P[11]+3174756917&4294967295,O=S+(C<<10&4294967295|C>>>22),C=D+(S^(O|~R))+P[2]+718787259&4294967295,D=O+(C<<15&4294967295|C>>>17),C=R+(O^(D|~S))+P[9]+3951481745&4294967295,x.g[0]=x.g[0]+S&4294967295,x.g[1]=x.g[1]+(D+(C<<21&4294967295|C>>>11))&4294967295,x.g[2]=x.g[2]+D&4294967295,x.g[3]=x.g[3]+O&4294967295}s.prototype.u=function(x,S){S===void 0&&(S=x.length);for(var R=S-this.blockSize,P=this.B,D=this.h,O=0;O<S;){if(D==0)for(;O<=R;)o(this,x,O),O+=this.blockSize;if(typeof x=="string"){for(;O<S;)if(P[D++]=x.charCodeAt(O++),D==this.blockSize){o(this,P),D=0;break}}else for(;O<S;)if(P[D++]=x[O++],D==this.blockSize){o(this,P),D=0;break}}this.h=D,this.o+=S},s.prototype.v=function(){var x=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);x[0]=128;for(var S=1;S<x.length-8;++S)x[S]=0;var R=8*this.o;for(S=x.length-8;S<x.length;++S)x[S]=R&255,R/=256;for(this.u(x),x=Array(16),S=R=0;4>S;++S)for(var P=0;32>P;P+=8)x[R++]=this.g[S]>>>P&255;return x};function l(x,S){var R=p;return Object.prototype.hasOwnProperty.call(R,x)?R[x]:R[x]=S(x)}function h(x,S){this.h=S;for(var R=[],P=!0,D=x.length-1;0<=D;D--){var O=x[D]|0;P&&O==S||(R[D]=O,P=!1)}this.g=R}var p={};function g(x){return-128<=x&&128>x?l(x,function(S){return new h([S|0],0>S?-1:0)}):new h([x|0],0>x?-1:0)}function _(x){if(isNaN(x)||!isFinite(x))return T;if(0>x)return $(_(-x));for(var S=[],R=1,P=0;x>=R;P++)S[P]=x/R|0,R*=4294967296;return new h(S,0)}function E(x,S){if(x.length==0)throw Error("number format error: empty string");if(S=S||10,2>S||36<S)throw Error("radix out of range: "+S);if(x.charAt(0)=="-")return $(E(x.substring(1),S));if(0<=x.indexOf("-"))throw Error('number format error: interior "-" character');for(var R=_(Math.pow(S,8)),P=T,D=0;D<x.length;D+=8){var O=Math.min(8,x.length-D),C=parseInt(x.substring(D,D+O),S);8>O?(O=_(Math.pow(S,O)),P=P.j(O).add(_(C))):(P=P.j(R),P=P.add(_(C)))}return P}var T=g(0),A=g(1),U=g(16777216);r=h.prototype,r.m=function(){if(X(this))return-$(this).m();for(var x=0,S=1,R=0;R<this.g.length;R++){var P=this.i(R);x+=(0<=P?P:4294967296+P)*S,S*=4294967296}return x},r.toString=function(x){if(x=x||10,2>x||36<x)throw Error("radix out of range: "+x);if(W(this))return"0";if(X(this))return"-"+$(this).toString(x);for(var S=_(Math.pow(x,6)),R=this,P="";;){var D=Ee(R,S).g;R=le(R,D.j(S));var O=((0<R.g.length?R.g[0]:R.h)>>>0).toString(x);if(R=D,W(R))return O+P;for(;6>O.length;)O="0"+O;P=O+P}},r.i=function(x){return 0>x?0:x<this.g.length?this.g[x]:this.h};function W(x){if(x.h!=0)return!1;for(var S=0;S<x.g.length;S++)if(x.g[S]!=0)return!1;return!0}function X(x){return x.h==-1}r.l=function(x){return x=le(this,x),X(x)?-1:W(x)?0:1};function $(x){for(var S=x.g.length,R=[],P=0;P<S;P++)R[P]=~x.g[P];return new h(R,~x.h).add(A)}r.abs=function(){return X(this)?$(this):this},r.add=function(x){for(var S=Math.max(this.g.length,x.g.length),R=[],P=0,D=0;D<=S;D++){var O=P+(this.i(D)&65535)+(x.i(D)&65535),C=(O>>>16)+(this.i(D)>>>16)+(x.i(D)>>>16);P=C>>>16,O&=65535,C&=65535,R[D]=C<<16|O}return new h(R,R[R.length-1]&-2147483648?-1:0)};function le(x,S){return x.add($(S))}r.j=function(x){if(W(this)||W(x))return T;if(X(this))return X(x)?$(this).j($(x)):$($(this).j(x));if(X(x))return $(this.j($(x)));if(0>this.l(U)&&0>x.l(U))return _(this.m()*x.m());for(var S=this.g.length+x.g.length,R=[],P=0;P<2*S;P++)R[P]=0;for(P=0;P<this.g.length;P++)for(var D=0;D<x.g.length;D++){var O=this.i(P)>>>16,C=this.i(P)&65535,tt=x.i(D)>>>16,Dt=x.i(D)&65535;R[2*P+2*D]+=C*Dt,he(R,2*P+2*D),R[2*P+2*D+1]+=O*Dt,he(R,2*P+2*D+1),R[2*P+2*D+1]+=C*tt,he(R,2*P+2*D+1),R[2*P+2*D+2]+=O*tt,he(R,2*P+2*D+2)}for(P=0;P<S;P++)R[P]=R[2*P+1]<<16|R[2*P];for(P=S;P<2*S;P++)R[P]=0;return new h(R,0)};function he(x,S){for(;(x[S]&65535)!=x[S];)x[S+1]+=x[S]>>>16,x[S]&=65535,S++}function me(x,S){this.g=x,this.h=S}function Ee(x,S){if(W(S))throw Error("division by zero");if(W(x))return new me(T,T);if(X(x))return S=Ee($(x),S),new me($(S.g),$(S.h));if(X(S))return S=Ee(x,$(S)),new me($(S.g),S.h);if(30<x.g.length){if(X(x)||X(S))throw Error("slowDivide_ only works with positive integers.");for(var R=A,P=S;0>=P.l(x);)R=je(R),P=je(P);var D=Te(R,1),O=Te(P,1);for(P=Te(P,2),R=Te(R,2);!W(P);){var C=O.add(P);0>=C.l(x)&&(D=D.add(R),O=C),P=Te(P,1),R=Te(R,1)}return S=le(x,D.j(S)),new me(D,S)}for(D=T;0<=x.l(S);){for(R=Math.max(1,Math.floor(x.m()/S.m())),P=Math.ceil(Math.log(R)/Math.LN2),P=48>=P?1:Math.pow(2,P-48),O=_(R),C=O.j(S);X(C)||0<C.l(x);)R-=P,O=_(R),C=O.j(S);W(O)&&(O=A),D=D.add(O),x=le(x,C)}return new me(D,x)}r.A=function(x){return Ee(this,x).h},r.and=function(x){for(var S=Math.max(this.g.length,x.g.length),R=[],P=0;P<S;P++)R[P]=this.i(P)&x.i(P);return new h(R,this.h&x.h)},r.or=function(x){for(var S=Math.max(this.g.length,x.g.length),R=[],P=0;P<S;P++)R[P]=this.i(P)|x.i(P);return new h(R,this.h|x.h)},r.xor=function(x){for(var S=Math.max(this.g.length,x.g.length),R=[],P=0;P<S;P++)R[P]=this.i(P)^x.i(P);return new h(R,this.h^x.h)};function je(x){for(var S=x.g.length+1,R=[],P=0;P<S;P++)R[P]=x.i(P)<<1|x.i(P-1)>>>31;return new h(R,x.h)}function Te(x,S){var R=S>>5;S%=32;for(var P=x.g.length-R,D=[],O=0;O<P;O++)D[O]=0<S?x.i(O+R)>>>S|x.i(O+R+1)<<32-S:x.i(O+R);return new h(D,x.h)}s.prototype.digest=s.prototype.v,s.prototype.reset=s.prototype.s,s.prototype.update=s.prototype.u,v_=s,h.prototype.add=h.prototype.add,h.prototype.multiply=h.prototype.j,h.prototype.modulo=h.prototype.A,h.prototype.compare=h.prototype.l,h.prototype.toNumber=h.prototype.m,h.prototype.toString=h.prototype.toString,h.prototype.getBits=h.prototype.i,h.fromNumber=_,h.fromString=E,yi=h}).apply(typeof Tg<"u"?Tg:typeof self<"u"?self:typeof window<"u"?window:{});var Su=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var w_,xa,E_,xu,Nd,T_,I_,S_;(function(){var r,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(u,f,y){return u==Array.prototype||u==Object.prototype||(u[f]=y.value),u};function t(u){u=[typeof globalThis=="object"&&globalThis,u,typeof window=="object"&&window,typeof self=="object"&&self,typeof Su=="object"&&Su];for(var f=0;f<u.length;++f){var y=u[f];if(y&&y.Math==Math)return y}throw Error("Cannot find global object")}var s=t(this);function o(u,f){if(f)e:{var y=s;u=u.split(".");for(var w=0;w<u.length-1;w++){var b=u[w];if(!(b in y))break e;y=y[b]}u=u[u.length-1],w=y[u],f=f(w),f!=w&&f!=null&&e(y,u,{configurable:!0,writable:!0,value:f})}}function l(u,f){u instanceof String&&(u+="");var y=0,w=!1,b={next:function(){if(!w&&y<u.length){var z=y++;return{value:f(z,u[z]),done:!1}}return w=!0,{done:!0,value:void 0}}};return b[Symbol.iterator]=function(){return b},b}o("Array.prototype.values",function(u){return u||function(){return l(this,function(f,y){return y})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var h=h||{},p=this||self;function g(u){var f=typeof u;return f=f!="object"?f:u?Array.isArray(u)?"array":f:"null",f=="array"||f=="object"&&typeof u.length=="number"}function _(u){var f=typeof u;return f=="object"&&u!=null||f=="function"}function E(u,f,y){return u.call.apply(u.bind,arguments)}function T(u,f,y){if(!u)throw Error();if(2<arguments.length){var w=Array.prototype.slice.call(arguments,2);return function(){var b=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(b,w),u.apply(f,b)}}return function(){return u.apply(f,arguments)}}function A(u,f,y){return A=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?E:T,A.apply(null,arguments)}function U(u,f){var y=Array.prototype.slice.call(arguments,1);return function(){var w=y.slice();return w.push.apply(w,arguments),u.apply(this,w)}}function W(u,f){function y(){}y.prototype=f.prototype,u.aa=f.prototype,u.prototype=new y,u.prototype.constructor=u,u.Qb=function(w,b,z){for(var J=Array(arguments.length-2),Fe=2;Fe<arguments.length;Fe++)J[Fe-2]=arguments[Fe];return f.prototype[b].apply(w,J)}}function X(u){const f=u.length;if(0<f){const y=Array(f);for(let w=0;w<f;w++)y[w]=u[w];return y}return[]}function $(u,f){for(let y=1;y<arguments.length;y++){const w=arguments[y];if(g(w)){const b=u.length||0,z=w.length||0;u.length=b+z;for(let J=0;J<z;J++)u[b+J]=w[J]}else u.push(w)}}class le{constructor(f,y){this.i=f,this.j=y,this.h=0,this.g=null}get(){let f;return 0<this.h?(this.h--,f=this.g,this.g=f.next,f.next=null):f=this.i(),f}}function he(u){return/^[\s\xa0]*$/.test(u)}function me(){var u=p.navigator;return u&&(u=u.userAgent)?u:""}function Ee(u){return Ee[" "](u),u}Ee[" "]=function(){};var je=me().indexOf("Gecko")!=-1&&!(me().toLowerCase().indexOf("webkit")!=-1&&me().indexOf("Edge")==-1)&&!(me().indexOf("Trident")!=-1||me().indexOf("MSIE")!=-1)&&me().indexOf("Edge")==-1;function Te(u,f,y){for(const w in u)f.call(y,u[w],w,u)}function x(u,f){for(const y in u)f.call(void 0,u[y],y,u)}function S(u){const f={};for(const y in u)f[y]=u[y];return f}const R="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function P(u,f){let y,w;for(let b=1;b<arguments.length;b++){w=arguments[b];for(y in w)u[y]=w[y];for(let z=0;z<R.length;z++)y=R[z],Object.prototype.hasOwnProperty.call(w,y)&&(u[y]=w[y])}}function D(u){var f=1;u=u.split(":");const y=[];for(;0<f&&u.length;)y.push(u.shift()),f--;return u.length&&y.push(u.join(":")),y}function O(u){p.setTimeout(()=>{throw u},0)}function C(){var u=de;let f=null;return u.g&&(f=u.g,u.g=u.g.next,u.g||(u.h=null),f.next=null),f}class tt{constructor(){this.h=this.g=null}add(f,y){const w=Dt.get();w.set(f,y),this.h?this.h.next=w:this.g=w,this.h=w}}var Dt=new le(()=>new Vt,u=>u.reset());class Vt{constructor(){this.next=this.g=this.h=null}set(f,y){this.h=f,this.g=y,this.next=null}reset(){this.next=this.g=this.h=null}}let Ue,Z=!1,de=new tt,re=()=>{const u=p.Promise.resolve(void 0);Ue=()=>{u.then(V)}};var V=()=>{for(var u;u=C();){try{u.h.call(u.g)}catch(y){O(y)}var f=Dt;f.j(u),100>f.h&&(f.h++,u.next=f.g,f.g=u)}Z=!1};function H(){this.s=this.s,this.C=this.C}H.prototype.s=!1,H.prototype.ma=function(){this.s||(this.s=!0,this.N())},H.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ue(u,f){this.type=u,this.g=this.target=f,this.defaultPrevented=!1}ue.prototype.h=function(){this.defaultPrevented=!0};var Ie=(function(){if(!p.addEventListener||!Object.defineProperty)return!1;var u=!1,f=Object.defineProperty({},"passive",{get:function(){u=!0}});try{const y=()=>{};p.addEventListener("test",y,f),p.removeEventListener("test",y,f)}catch{}return u})();function Ae(u,f){if(ue.call(this,u?u.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,u){var y=this.type=u.type,w=u.changedTouches&&u.changedTouches.length?u.changedTouches[0]:null;if(this.target=u.target||u.srcElement,this.g=f,f=u.relatedTarget){if(je){e:{try{Ee(f.nodeName);var b=!0;break e}catch{}b=!1}b||(f=null)}}else y=="mouseover"?f=u.fromElement:y=="mouseout"&&(f=u.toElement);this.relatedTarget=f,w?(this.clientX=w.clientX!==void 0?w.clientX:w.pageX,this.clientY=w.clientY!==void 0?w.clientY:w.pageY,this.screenX=w.screenX||0,this.screenY=w.screenY||0):(this.clientX=u.clientX!==void 0?u.clientX:u.pageX,this.clientY=u.clientY!==void 0?u.clientY:u.pageY,this.screenX=u.screenX||0,this.screenY=u.screenY||0),this.button=u.button,this.key=u.key||"",this.ctrlKey=u.ctrlKey,this.altKey=u.altKey,this.shiftKey=u.shiftKey,this.metaKey=u.metaKey,this.pointerId=u.pointerId||0,this.pointerType=typeof u.pointerType=="string"?u.pointerType:xe[u.pointerType]||"",this.state=u.state,this.i=u,u.defaultPrevented&&Ae.aa.h.call(this)}}W(Ae,ue);var xe={2:"touch",3:"pen",4:"mouse"};Ae.prototype.h=function(){Ae.aa.h.call(this);var u=this.i;u.preventDefault?u.preventDefault():u.returnValue=!1};var be="closure_listenable_"+(1e6*Math.random()|0),Le=0;function Be(u,f,y,w,b){this.listener=u,this.proxy=null,this.src=f,this.type=y,this.capture=!!w,this.ha=b,this.key=++Le,this.da=this.fa=!1}function vt(u){u.da=!0,u.listener=null,u.proxy=null,u.src=null,u.ha=null}function fr(u){this.src=u,this.g={},this.h=0}fr.prototype.add=function(u,f,y,w,b){var z=u.toString();u=this.g[z],u||(u=this.g[z]=[],this.h++);var J=Fr(u,f,w,b);return-1<J?(f=u[J],y||(f.fa=!1)):(f=new Be(f,this.src,z,!!w,b),f.fa=y,u.push(f)),f};function vs(u,f){var y=f.type;if(y in u.g){var w=u.g[y],b=Array.prototype.indexOf.call(w,f,void 0),z;(z=0<=b)&&Array.prototype.splice.call(w,b,1),z&&(vt(f),u.g[y].length==0&&(delete u.g[y],u.h--))}}function Fr(u,f,y,w){for(var b=0;b<u.length;++b){var z=u[b];if(!z.da&&z.listener==f&&z.capture==!!y&&z.ha==w)return b}return-1}var xi="closure_lm_"+(1e6*Math.random()|0),ws={};function bo(u,f,y,w,b){if(Array.isArray(f)){for(var z=0;z<f.length;z++)bo(u,f[z],y,w,b);return null}return y=Fo(y),u&&u[be]?u.K(f,y,_(w)?!!w.capture:!1,b):Lo(u,f,y,!1,w,b)}function Lo(u,f,y,w,b,z){if(!f)throw Error("Invalid event type");var J=_(b)?!!b.capture:!!b,Fe=Ts(u);if(Fe||(u[xi]=Fe=new fr(u)),y=Fe.add(f,y,w,J,z),y.proxy)return y;if(w=ll(),y.proxy=w,w.src=u,w.listener=y,u.addEventListener)Ie||(b=J),b===void 0&&(b=!1),u.addEventListener(f.toString(),w,b);else if(u.attachEvent)u.attachEvent(mr(f.toString()),w);else if(u.addListener&&u.removeListener)u.addListener(w);else throw Error("addEventListener and attachEvent are unavailable.");return y}function ll(){function u(y){return f.call(u.src,u.listener,y)}const f=Mo;return u}function Es(u,f,y,w,b){if(Array.isArray(f))for(var z=0;z<f.length;z++)Es(u,f[z],y,w,b);else w=_(w)?!!w.capture:!!w,y=Fo(y),u&&u[be]?(u=u.i,f=String(f).toString(),f in u.g&&(z=u.g[f],y=Fr(z,y,w,b),-1<y&&(vt(z[y]),Array.prototype.splice.call(z,y,1),z.length==0&&(delete u.g[f],u.h--)))):u&&(u=Ts(u))&&(f=u.g[f.toString()],u=-1,f&&(u=Fr(f,y,w,b)),(y=-1<u?f[u]:null)&&pr(y))}function pr(u){if(typeof u!="number"&&u&&!u.da){var f=u.src;if(f&&f[be])vs(f.i,u);else{var y=u.type,w=u.proxy;f.removeEventListener?f.removeEventListener(y,w,u.capture):f.detachEvent?f.detachEvent(mr(y),w):f.addListener&&f.removeListener&&f.removeListener(w),(y=Ts(f))?(vs(y,u),y.h==0&&(y.src=null,f[xi]=null)):vt(u)}}}function mr(u){return u in ws?ws[u]:ws[u]="on"+u}function Mo(u,f){if(u.da)u=!0;else{f=new Ae(f,this);var y=u.listener,w=u.ha||u.src;u.fa&&pr(u),u=y.call(w,f)}return u}function Ts(u){return u=u[xi],u instanceof fr?u:null}var Is="__closure_events_fn_"+(1e9*Math.random()>>>0);function Fo(u){return typeof u=="function"?u:(u[Is]||(u[Is]=function(f){return u.handleEvent(f)}),u[Is])}function ct(){H.call(this),this.i=new fr(this),this.M=this,this.F=null}W(ct,H),ct.prototype[be]=!0,ct.prototype.removeEventListener=function(u,f,y,w){Es(this,u,f,y,w)};function ht(u,f){var y,w=u.F;if(w)for(y=[];w;w=w.F)y.push(w);if(u=u.M,w=f.type||f,typeof f=="string")f=new ue(f,u);else if(f instanceof ue)f.target=f.target||u;else{var b=f;f=new ue(w,u),P(f,b)}if(b=!0,y)for(var z=y.length-1;0<=z;z--){var J=f.g=y[z];b=gr(J,w,!0,f)&&b}if(J=f.g=u,b=gr(J,w,!0,f)&&b,b=gr(J,w,!1,f)&&b,y)for(z=0;z<y.length;z++)J=f.g=y[z],b=gr(J,w,!1,f)&&b}ct.prototype.N=function(){if(ct.aa.N.call(this),this.i){var u=this.i,f;for(f in u.g){for(var y=u.g[f],w=0;w<y.length;w++)vt(y[w]);delete u.g[f],u.h--}}this.F=null},ct.prototype.K=function(u,f,y,w){return this.i.add(String(u),f,!1,y,w)},ct.prototype.L=function(u,f,y,w){return this.i.add(String(u),f,!0,y,w)};function gr(u,f,y,w){if(f=u.i.g[String(f)],!f)return!0;f=f.concat();for(var b=!0,z=0;z<f.length;++z){var J=f[z];if(J&&!J.da&&J.capture==y){var Fe=J.listener,dt=J.ha||J.src;J.fa&&vs(u.i,J),b=Fe.call(dt,w)!==!1&&b}}return b&&!w.defaultPrevented}function Uo(u,f,y){if(typeof u=="function")y&&(u=A(u,y));else if(u&&typeof u.handleEvent=="function")u=A(u.handleEvent,u);else throw Error("Invalid listener argument");return 2147483647<Number(f)?-1:p.setTimeout(u,f||0)}function Ur(u){u.g=Uo(()=>{u.g=null,u.i&&(u.i=!1,Ur(u))},u.l);const f=u.h;u.h=null,u.m.apply(null,f)}class Ni extends H{constructor(f,y){super(),this.m=f,this.l=y,this.h=null,this.i=!1,this.g=null}j(f){this.h=arguments,this.g?this.i=!0:Ur(this)}N(){super.N(),this.g&&(p.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Di(u){H.call(this),this.h=u,this.g={}}W(Di,H);var jo=[];function zo(u){Te(u.g,function(f,y){this.g.hasOwnProperty(y)&&pr(f)},u),u.g={}}Di.prototype.N=function(){Di.aa.N.call(this),zo(this)},Di.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Bo=p.JSON.stringify,$o=p.JSON.parse,qo=class{stringify(u){return p.JSON.stringify(u,void 0)}parse(u){return p.JSON.parse(u,void 0)}};function Vi(){}Vi.prototype.h=null;function Ss(u){return u.h||(u.h=u.i())}function As(){}var dn={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Gn(){ue.call(this,"d")}W(Gn,ue);function Cs(){ue.call(this,"c")}W(Cs,ue);var Kn={},Ho=null;function Oi(){return Ho=Ho||new ct}Kn.La="serverreachability";function Wo(u){ue.call(this,Kn.La,u)}W(Wo,ue);function yr(u){const f=Oi();ht(f,new Wo(f))}Kn.STAT_EVENT="statevent";function Go(u,f){ue.call(this,Kn.STAT_EVENT,u),this.stat=f}W(Go,ue);function nt(u){const f=Oi();ht(f,new Go(f,u))}Kn.Ma="timingevent";function Rs(u,f){ue.call(this,Kn.Ma,u),this.size=f}W(Rs,ue);function Cn(u,f){if(typeof u!="function")throw Error("Fn must not be null and must be a function");return p.setTimeout(function(){u()},f)}function bi(){this.g=!0}bi.prototype.xa=function(){this.g=!1};function Li(u,f,y,w,b,z){u.info(function(){if(u.g)if(z)for(var J="",Fe=z.split("&"),dt=0;dt<Fe.length;dt++){var Ne=Fe[dt].split("=");if(1<Ne.length){var wt=Ne[0];Ne=Ne[1];var st=wt.split("_");J=2<=st.length&&st[1]=="type"?J+(wt+"="+Ne+"&"):J+(wt+"=redacted&")}}else J=null;else J=z;return"XMLHTTP REQ ("+w+") [attempt "+b+"]: "+f+`
`+y+`
`+J})}function ks(u,f,y,w,b,z,J){u.info(function(){return"XMLHTTP RESP ("+w+") [ attempt "+b+"]: "+f+`
`+y+`
`+z+" "+J})}function Rn(u,f,y,w){u.info(function(){return"XMLHTTP TEXT ("+f+"): "+Dc(u,y)+(w?" "+w:"")})}function Ko(u,f){u.info(function(){return"TIMEOUT: "+f})}bi.prototype.info=function(){};function Dc(u,f){if(!u.g)return f;if(!f)return null;try{var y=JSON.parse(f);if(y){for(u=0;u<y.length;u++)if(Array.isArray(y[u])){var w=y[u];if(!(2>w.length)){var b=w[1];if(Array.isArray(b)&&!(1>b.length)){var z=b[0];if(z!="noop"&&z!="stop"&&z!="close")for(var J=1;J<b.length;J++)b[J]=""}}}}return Bo(y)}catch{return f}}var Ps={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},ul={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},kn;function Mi(){}W(Mi,Vi),Mi.prototype.g=function(){return new XMLHttpRequest},Mi.prototype.i=function(){return{}},kn=new Mi;function Pn(u,f,y,w){this.j=u,this.i=f,this.l=y,this.R=w||1,this.U=new Di(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new cl}function cl(){this.i=null,this.g="",this.h=!1}var Qo={},xs={};function Ns(u,f,y){u.L=1,u.v=qr(sn(f)),u.m=y,u.P=!0,Xo(u,null)}function Xo(u,f){u.F=Date.now(),$e(u),u.A=sn(u.v);var y=u.A,w=u.R;Array.isArray(w)||(w=[String(w)]),Wr(y.i,"t",w),u.C=0,y=u.j.J,u.h=new cl,u.g=kl(u.j,y?f:null,!u.m),0<u.O&&(u.M=new Ni(A(u.Y,u,u.g),u.O)),f=u.U,y=u.g,w=u.ca;var b="readystatechange";Array.isArray(b)||(b&&(jo[0]=b.toString()),b=jo);for(var z=0;z<b.length;z++){var J=bo(y,b[z],w||f.handleEvent,!1,f.h||f);if(!J)break;f.g[J.key]=J}f=u.H?S(u.H):{},u.m?(u.u||(u.u="POST"),f["Content-Type"]="application/x-www-form-urlencoded",u.g.ea(u.A,u.u,u.m,f)):(u.u="GET",u.g.ea(u.A,u.u,null,f)),yr(),Li(u.i,u.u,u.A,u.l,u.R,u.m)}Pn.prototype.ca=function(u){u=u.target;const f=this.M;f&&Gt(u)==3?f.j():this.Y(u)},Pn.prototype.Y=function(u){try{if(u==this.g)e:{const st=Gt(this.g);var f=this.g.Ba();const mn=this.g.Z();if(!(3>st)&&(st!=3||this.g&&(this.h.h||this.g.oa()||na(this.g)))){this.J||st!=4||f==7||(f==8||0>=mn?yr(3):yr(2)),Fi(this);var y=this.g.Z();this.X=y;t:if(hl(this)){var w=na(this.g);u="";var b=w.length,z=Gt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){fn(this),jr(this);var J="";break t}this.h.i=new p.TextDecoder}for(f=0;f<b;f++)this.h.h=!0,u+=this.h.i.decode(w[f],{stream:!(z&&f==b-1)});w.length=0,this.h.g+=u,this.C=0,J=this.h.g}else J=this.g.oa();if(this.o=y==200,ks(this.i,this.u,this.A,this.l,this.R,st,y),this.o){if(this.T&&!this.K){t:{if(this.g){var Fe,dt=this.g;if((Fe=dt.g?dt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!he(Fe)){var Ne=Fe;break t}}Ne=null}if(y=Ne)Rn(this.i,this.l,y,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Yo(this,y);else{this.o=!1,this.s=3,nt(12),fn(this),jr(this);break e}}if(this.P){y=!0;let an;for(;!this.J&&this.C<J.length;)if(an=Vc(this,J),an==xs){st==4&&(this.s=4,nt(14),y=!1),Rn(this.i,this.l,null,"[Incomplete Response]");break}else if(an==Qo){this.s=4,nt(15),Rn(this.i,this.l,J,"[Invalid Chunk]"),y=!1;break}else Rn(this.i,this.l,an,null),Yo(this,an);if(hl(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),st!=4||J.length!=0||this.h.h||(this.s=1,nt(16),y=!1),this.o=this.o&&y,!y)Rn(this.i,this.l,J,"[Invalid Chunked Response]"),fn(this),jr(this);else if(0<J.length&&!this.W){this.W=!0;var wt=this.j;wt.g==this&&wt.ba&&!wt.M&&(wt.j.info("Great, no buffering proxy detected. Bytes received: "+J.length),ia(wt),wt.M=!0,nt(11))}}else Rn(this.i,this.l,J,null),Yo(this,J);st==4&&fn(this),this.o&&!this.J&&(st==4?Bs(this.j,this):(this.o=!1,$e(this)))}else Ms(this.g),y==400&&0<J.indexOf("Unknown SID")?(this.s=3,nt(12)):(this.s=0,nt(13)),fn(this),jr(this)}}}catch{}finally{}};function hl(u){return u.g?u.u=="GET"&&u.L!=2&&u.j.Ca:!1}function Vc(u,f){var y=u.C,w=f.indexOf(`
`,y);return w==-1?xs:(y=Number(f.substring(y,w)),isNaN(y)?Qo:(w+=1,w+y>f.length?xs:(f=f.slice(w,w+y),u.C=w+y,f)))}Pn.prototype.cancel=function(){this.J=!0,fn(this)};function $e(u){u.S=Date.now()+u.I,dl(u,u.I)}function dl(u,f){if(u.B!=null)throw Error("WatchDog timer not null");u.B=Cn(A(u.ba,u),f)}function Fi(u){u.B&&(p.clearTimeout(u.B),u.B=null)}Pn.prototype.ba=function(){this.B=null;const u=Date.now();0<=u-this.S?(Ko(this.i,this.A),this.L!=2&&(yr(),nt(17)),fn(this),this.s=2,jr(this)):dl(this,this.S-u)};function jr(u){u.j.G==0||u.J||Bs(u.j,u)}function fn(u){Fi(u);var f=u.M;f&&typeof f.ma=="function"&&f.ma(),u.M=null,zo(u.U),u.g&&(f=u.g,u.g=null,f.abort(),f.ma())}function Yo(u,f){try{var y=u.j;if(y.G!=0&&(y.g==u||Bt(y.h,u))){if(!u.K&&Bt(y.h,u)&&y.G==3){try{var w=y.Da.g.parse(f)}catch{w=null}if(Array.isArray(w)&&w.length==3){var b=w;if(b[0]==0){e:if(!y.u){if(y.g)if(y.g.F+3e3<u.F)zs(y),On(y);else break e;js(y),nt(18)}}else y.za=b[1],0<y.za-y.T&&37500>b[2]&&y.F&&y.v==0&&!y.C&&(y.C=Cn(A(y.Za,y),6e3));if(1>=pl(y.h)&&y.ca){try{y.ca()}catch{}y.ca=void 0}}else Tr(y,11)}else if((u.K||y.g==u)&&zs(y),!he(f))for(b=y.Da.g.parse(f),f=0;f<b.length;f++){let Ne=b[f];if(y.T=Ne[0],Ne=Ne[1],y.G==2)if(Ne[0]=="c"){y.K=Ne[1],y.ia=Ne[2];const wt=Ne[3];wt!=null&&(y.la=wt,y.j.info("VER="+y.la));const st=Ne[4];st!=null&&(y.Aa=st,y.j.info("SVER="+y.Aa));const mn=Ne[5];mn!=null&&typeof mn=="number"&&0<mn&&(w=1.5*mn,y.L=w,y.j.info("backChannelRequestTimeoutMs_="+w)),w=y;const an=u.g;if(an){const Hi=an.g?an.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Hi){var z=w.h;z.g||Hi.indexOf("spdy")==-1&&Hi.indexOf("quic")==-1&&Hi.indexOf("h2")==-1||(z.j=z.l,z.g=new Set,z.h&&(Jo(z,z.h),z.h=null))}if(w.D){const qs=an.g?an.g.getResponseHeader("X-HTTP-Session-Id"):null;qs&&(w.ya=qs,ze(w.I,w.D,qs))}}y.G=3,y.l&&y.l.ua(),y.ba&&(y.R=Date.now()-u.F,y.j.info("Handshake RTT: "+y.R+"ms")),w=y;var J=u;if(w.qa=Rl(w,w.J?w.ia:null,w.W),J.K){ml(w.h,J);var Fe=J,dt=w.L;dt&&(Fe.I=dt),Fe.B&&(Fi(Fe),$e(Fe)),w.g=J}else qi(w);0<y.i.length&&Jn(y)}else Ne[0]!="stop"&&Ne[0]!="close"||Tr(y,7);else y.G==3&&(Ne[0]=="stop"||Ne[0]=="close"?Ne[0]=="stop"?Tr(y,7):Ct(y):Ne[0]!="noop"&&y.l&&y.l.ta(Ne),y.v=0)}}yr(4)}catch{}}var fl=class{constructor(u,f){this.g=u,this.map=f}};function Ui(u){this.l=u||10,p.PerformanceNavigationTiming?(u=p.performance.getEntriesByType("navigation"),u=0<u.length&&(u[0].nextHopProtocol=="hq"||u[0].nextHopProtocol=="h2")):u=!!(p.chrome&&p.chrome.loadTimes&&p.chrome.loadTimes()&&p.chrome.loadTimes().wasFetchedViaSpdy),this.j=u?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function rn(u){return u.h?!0:u.g?u.g.size>=u.j:!1}function pl(u){return u.h?1:u.g?u.g.size:0}function Bt(u,f){return u.h?u.h==f:u.g?u.g.has(f):!1}function Jo(u,f){u.g?u.g.add(f):u.h=f}function ml(u,f){u.h&&u.h==f?u.h=null:u.g&&u.g.has(f)&&u.g.delete(f)}Ui.prototype.cancel=function(){if(this.i=gl(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const u of this.g.values())u.cancel();this.g.clear()}};function gl(u){if(u.h!=null)return u.i.concat(u.h.D);if(u.g!=null&&u.g.size!==0){let f=u.i;for(const y of u.g.values())f=f.concat(y.D);return f}return X(u.i)}function Ds(u){if(u.V&&typeof u.V=="function")return u.V();if(typeof Map<"u"&&u instanceof Map||typeof Set<"u"&&u instanceof Set)return Array.from(u.values());if(typeof u=="string")return u.split("");if(g(u)){for(var f=[],y=u.length,w=0;w<y;w++)f.push(u[w]);return f}f=[],y=0;for(w in u)f[y++]=u[w];return f}function Vs(u){if(u.na&&typeof u.na=="function")return u.na();if(!u.V||typeof u.V!="function"){if(typeof Map<"u"&&u instanceof Map)return Array.from(u.keys());if(!(typeof Set<"u"&&u instanceof Set)){if(g(u)||typeof u=="string"){var f=[];u=u.length;for(var y=0;y<u;y++)f.push(y);return f}f=[],y=0;for(const w in u)f[y++]=w;return f}}}function zr(u,f){if(u.forEach&&typeof u.forEach=="function")u.forEach(f,void 0);else if(g(u)||typeof u=="string")Array.prototype.forEach.call(u,f,void 0);else for(var y=Vs(u),w=Ds(u),b=w.length,z=0;z<b;z++)f.call(void 0,w[z],y&&y[z],u)}var ji=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Oc(u,f){if(u){u=u.split("&");for(var y=0;y<u.length;y++){var w=u[y].indexOf("="),b=null;if(0<=w){var z=u[y].substring(0,w);b=u[y].substring(w+1)}else z=u[y];f(z,b?decodeURIComponent(b.replace(/\+/g," ")):"")}}}function _r(u){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,u instanceof _r){this.h=u.h,zi(this,u.j),this.o=u.o,this.g=u.g,Br(this,u.s),this.l=u.l;var f=u.i,y=new Qn;y.i=f.i,f.g&&(y.g=new Map(f.g),y.h=f.h),$r(this,y),this.m=u.m}else u&&(f=String(u).match(ji))?(this.h=!1,zi(this,f[1]||"",!0),this.o=Pe(f[2]||""),this.g=Pe(f[3]||"",!0),Br(this,f[4]),this.l=Pe(f[5]||"",!0),$r(this,f[6]||"",!0),this.m=Pe(f[7]||"")):(this.h=!1,this.i=new Qn(null,this.h))}_r.prototype.toString=function(){var u=[],f=this.j;f&&u.push(Hr(f,Os,!0),":");var y=this.g;return(y||f=="file")&&(u.push("//"),(f=this.o)&&u.push(Hr(f,Os,!0),"@"),u.push(encodeURIComponent(String(y)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),y=this.s,y!=null&&u.push(":",String(y))),(y=this.l)&&(this.g&&y.charAt(0)!="/"&&u.push("/"),u.push(Hr(y,y.charAt(0)=="/"?vl:_l,!0))),(y=this.i.toString())&&u.push("?",y),(y=this.m)&&u.push("#",Hr(y,Zo)),u.join("")};function sn(u){return new _r(u)}function zi(u,f,y){u.j=y?Pe(f,!0):f,u.j&&(u.j=u.j.replace(/:$/,""))}function Br(u,f){if(f){if(f=Number(f),isNaN(f)||0>f)throw Error("Bad port number "+f);u.s=f}else u.s=null}function $r(u,f,y){f instanceof Qn?(u.i=f,Xn(u.i,u.h)):(y||(f=Hr(f,wl)),u.i=new Qn(f,u.h))}function ze(u,f,y){u.i.set(f,y)}function qr(u){return ze(u,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),u}function Pe(u,f){return u?f?decodeURI(u.replace(/%25/g,"%2525")):decodeURIComponent(u):""}function Hr(u,f,y){return typeof u=="string"?(u=encodeURI(u).replace(f,yl),y&&(u=u.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),u):null}function yl(u){return u=u.charCodeAt(0),"%"+(u>>4&15).toString(16)+(u&15).toString(16)}var Os=/[#\/\?@]/g,_l=/[#\?:]/g,vl=/[#\?]/g,wl=/[#\?@]/g,Zo=/#/g;function Qn(u,f){this.h=this.g=null,this.i=u||null,this.j=!!f}function At(u){u.g||(u.g=new Map,u.h=0,u.i&&Oc(u.i,function(f,y){u.add(decodeURIComponent(f.replace(/\+/g," ")),y)}))}r=Qn.prototype,r.add=function(u,f){At(this),this.i=null,u=pn(this,u);var y=this.g.get(u);return y||this.g.set(u,y=[]),y.push(f),this.h+=1,this};function xn(u,f){At(u),f=pn(u,f),u.g.has(f)&&(u.i=null,u.h-=u.g.get(f).length,u.g.delete(f))}function Nn(u,f){return At(u),f=pn(u,f),u.g.has(f)}r.forEach=function(u,f){At(this),this.g.forEach(function(y,w){y.forEach(function(b){u.call(f,b,w,this)},this)},this)},r.na=function(){At(this);const u=Array.from(this.g.values()),f=Array.from(this.g.keys()),y=[];for(let w=0;w<f.length;w++){const b=u[w];for(let z=0;z<b.length;z++)y.push(f[w])}return y},r.V=function(u){At(this);let f=[];if(typeof u=="string")Nn(this,u)&&(f=f.concat(this.g.get(pn(this,u))));else{u=Array.from(this.g.values());for(let y=0;y<u.length;y++)f=f.concat(u[y])}return f},r.set=function(u,f){return At(this),this.i=null,u=pn(this,u),Nn(this,u)&&(this.h-=this.g.get(u).length),this.g.set(u,[f]),this.h+=1,this},r.get=function(u,f){return u?(u=this.V(u),0<u.length?String(u[0]):f):f};function Wr(u,f,y){xn(u,f),0<y.length&&(u.i=null,u.g.set(pn(u,f),X(y)),u.h+=y.length)}r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const u=[],f=Array.from(this.g.keys());for(var y=0;y<f.length;y++){var w=f[y];const z=encodeURIComponent(String(w)),J=this.V(w);for(w=0;w<J.length;w++){var b=z;J[w]!==""&&(b+="="+encodeURIComponent(String(J[w]))),u.push(b)}}return this.i=u.join("&")};function pn(u,f){return f=String(f),u.j&&(f=f.toLowerCase()),f}function Xn(u,f){f&&!u.j&&(At(u),u.i=null,u.g.forEach(function(y,w){var b=w.toLowerCase();w!=b&&(xn(this,w),Wr(this,b,y))},u)),u.j=f}function bc(u,f){const y=new bi;if(p.Image){const w=new Image;w.onload=U(Wt,y,"TestLoadImage: loaded",!0,f,w),w.onerror=U(Wt,y,"TestLoadImage: error",!1,f,w),w.onabort=U(Wt,y,"TestLoadImage: abort",!1,f,w),w.ontimeout=U(Wt,y,"TestLoadImage: timeout",!1,f,w),p.setTimeout(function(){w.ontimeout&&w.ontimeout()},1e4),w.src=u}else f(!1)}function El(u,f){const y=new bi,w=new AbortController,b=setTimeout(()=>{w.abort(),Wt(y,"TestPingServer: timeout",!1,f)},1e4);fetch(u,{signal:w.signal}).then(z=>{clearTimeout(b),z.ok?Wt(y,"TestPingServer: ok",!0,f):Wt(y,"TestPingServer: server error",!1,f)}).catch(()=>{clearTimeout(b),Wt(y,"TestPingServer: error",!1,f)})}function Wt(u,f,y,w,b){try{b&&(b.onload=null,b.onerror=null,b.onabort=null,b.ontimeout=null),w(y)}catch{}}function Lc(){this.g=new qo}function Tl(u,f,y){const w=y||"";try{zr(u,function(b,z){let J=b;_(b)&&(J=Bo(b)),f.push(w+z+"="+encodeURIComponent(J))})}catch(b){throw f.push(w+"type="+encodeURIComponent("_badmap")),b}}function vr(u){this.l=u.Ub||null,this.j=u.eb||!1}W(vr,Vi),vr.prototype.g=function(){return new Bi(this.l,this.j)},vr.prototype.i=(function(u){return function(){return u}})({});function Bi(u,f){ct.call(this),this.D=u,this.o=f,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}W(Bi,ct),r=Bi.prototype,r.open=function(u,f){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=u,this.A=f,this.readyState=1,Vn(this)},r.send=function(u){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const f={headers:this.u,method:this.B,credentials:this.m,cache:void 0};u&&(f.body=u),(this.D||p).fetch(new Request(this.A,f)).then(this.Sa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Dn(this)),this.readyState=0},r.Sa=function(u){if(this.g&&(this.l=u,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=u.headers,this.readyState=2,Vn(this)),this.g&&(this.readyState=3,Vn(this),this.g)))if(this.responseType==="arraybuffer")u.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof p.ReadableStream<"u"&&"body"in u){if(this.j=u.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Il(this)}else u.text().then(this.Ra.bind(this),this.ga.bind(this))};function Il(u){u.j.read().then(u.Pa.bind(u)).catch(u.ga.bind(u))}r.Pa=function(u){if(this.g){if(this.o&&u.value)this.response.push(u.value);else if(!this.o){var f=u.value?u.value:new Uint8Array(0);(f=this.v.decode(f,{stream:!u.done}))&&(this.response=this.responseText+=f)}u.done?Dn(this):Vn(this),this.readyState==3&&Il(this)}},r.Ra=function(u){this.g&&(this.response=this.responseText=u,Dn(this))},r.Qa=function(u){this.g&&(this.response=u,Dn(this))},r.ga=function(){this.g&&Dn(this)};function Dn(u){u.readyState=4,u.l=null,u.j=null,u.v=null,Vn(u)}r.setRequestHeader=function(u,f){this.u.append(u,f)},r.getResponseHeader=function(u){return this.h&&this.h.get(u.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const u=[],f=this.h.entries();for(var y=f.next();!y.done;)y=y.value,u.push(y[0]+": "+y[1]),y=f.next();return u.join(`\r
`)};function Vn(u){u.onreadystatechange&&u.onreadystatechange.call(u)}Object.defineProperty(Bi.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(u){this.m=u?"include":"same-origin"}});function wr(u){let f="";return Te(u,function(y,w){f+=w,f+=":",f+=y,f+=`\r
`}),f}function Gr(u,f,y){e:{for(w in y){var w=!1;break e}w=!0}w||(y=wr(y),typeof u=="string"?y!=null&&encodeURIComponent(String(y)):ze(u,f,y))}function Qe(u){ct.call(this),this.headers=new Map,this.o=u||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}W(Qe,ct);var Mc=/^https?$/i,ea=["POST","PUT"];r=Qe.prototype,r.Ha=function(u){this.J=u},r.ea=function(u,f,y,w){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+u);f=f?f.toUpperCase():"GET",this.D=u,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():kn.g(),this.v=this.o?Ss(this.o):Ss(kn),this.g.onreadystatechange=A(this.Ea,this);try{this.B=!0,this.g.open(f,String(u),!0),this.B=!1}catch(z){$i(this,z);return}if(u=y||"",y=new Map(this.headers),w)if(Object.getPrototypeOf(w)===Object.prototype)for(var b in w)y.set(b,w[b]);else if(typeof w.keys=="function"&&typeof w.get=="function")for(const z of w.keys())y.set(z,w.get(z));else throw Error("Unknown input type for opt_headers: "+String(w));w=Array.from(y.keys()).find(z=>z.toLowerCase()=="content-type"),b=p.FormData&&u instanceof p.FormData,!(0<=Array.prototype.indexOf.call(ea,f,void 0))||w||b||y.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[z,J]of y)this.g.setRequestHeader(z,J);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Ls(this),this.u=!0,this.g.send(u),this.u=!1}catch(z){$i(this,z)}};function $i(u,f){u.h=!1,u.g&&(u.j=!0,u.g.abort(),u.j=!1),u.l=f,u.m=5,bs(u),on(u)}function bs(u){u.A||(u.A=!0,ht(u,"complete"),ht(u,"error"))}r.abort=function(u){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=u||7,ht(this,"complete"),ht(this,"abort"),on(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),on(this,!0)),Qe.aa.N.call(this)},r.Ea=function(){this.s||(this.B||this.u||this.j?ta(this):this.bb())},r.bb=function(){ta(this)};function ta(u){if(u.h&&typeof h<"u"&&(!u.v[1]||Gt(u)!=4||u.Z()!=2)){if(u.u&&Gt(u)==4)Uo(u.Ea,0,u);else if(ht(u,"readystatechange"),Gt(u)==4){u.h=!1;try{const J=u.Z();e:switch(J){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var f=!0;break e;default:f=!1}var y;if(!(y=f)){var w;if(w=J===0){var b=String(u.D).match(ji)[1]||null;!b&&p.self&&p.self.location&&(b=p.self.location.protocol.slice(0,-1)),w=!Mc.test(b?b.toLowerCase():"")}y=w}if(y)ht(u,"complete"),ht(u,"success");else{u.m=6;try{var z=2<Gt(u)?u.g.statusText:""}catch{z=""}u.l=z+" ["+u.Z()+"]",bs(u)}}finally{on(u)}}}}function on(u,f){if(u.g){Ls(u);const y=u.g,w=u.v[0]?()=>{}:null;u.g=null,u.v=null,f||ht(u,"ready");try{y.onreadystatechange=w}catch{}}}function Ls(u){u.I&&(p.clearTimeout(u.I),u.I=null)}r.isActive=function(){return!!this.g};function Gt(u){return u.g?u.g.readyState:0}r.Z=function(){try{return 2<Gt(this)?this.g.status:-1}catch{return-1}},r.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},r.Oa=function(u){if(this.g){var f=this.g.responseText;return u&&f.indexOf(u)==0&&(f=f.substring(u.length)),$o(f)}};function na(u){try{if(!u.g)return null;if("response"in u.g)return u.g.response;switch(u.H){case"":case"text":return u.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in u.g)return u.g.mozResponseArrayBuffer}return null}catch{return null}}function Ms(u){const f={};u=(u.g&&2<=Gt(u)&&u.g.getAllResponseHeaders()||"").split(`\r
`);for(let w=0;w<u.length;w++){if(he(u[w]))continue;var y=D(u[w]);const b=y[0];if(y=y[1],typeof y!="string")continue;y=y.trim();const z=f[b]||[];f[b]=z,z.push(y)}x(f,function(w){return w.join(", ")})}r.Ba=function(){return this.m},r.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Yn(u,f,y){return y&&y.internalChannelParams&&y.internalChannelParams[u]||f}function ra(u){this.Aa=0,this.i=[],this.j=new bi,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Yn("failFast",!1,u),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Yn("baseRetryDelayMs",5e3,u),this.cb=Yn("retryDelaySeedMs",1e4,u),this.Wa=Yn("forwardChannelMaxRetries",2,u),this.wa=Yn("forwardChannelRequestTimeoutMs",2e4,u),this.pa=u&&u.xmlHttpFactory||void 0,this.Xa=u&&u.Tb||void 0,this.Ca=u&&u.useFetchStreams||!1,this.L=void 0,this.J=u&&u.supportsCrossDomainXhr||!1,this.K="",this.h=new Ui(u&&u.concurrentRequestLimit),this.Da=new Lc,this.P=u&&u.fastHandshake||!1,this.O=u&&u.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=u&&u.Rb||!1,u&&u.xa&&this.j.xa(),u&&u.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&u&&u.detectBufferingProxy||!1,this.ja=void 0,u&&u.longPollingTimeout&&0<u.longPollingTimeout&&(this.ja=u.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}r=ra.prototype,r.la=8,r.G=1,r.connect=function(u,f,y,w){nt(0),this.W=u,this.H=f||{},y&&w!==void 0&&(this.H.OSID=y,this.H.OAID=w),this.F=this.X,this.I=Rl(this,null,this.W),Jn(this)};function Ct(u){if(Fs(u),u.G==3){var f=u.U++,y=sn(u.I);if(ze(y,"SID",u.K),ze(y,"RID",f),ze(y,"TYPE","terminate"),Er(u,y),f=new Pn(u,u.j,f),f.L=2,f.v=qr(sn(y)),y=!1,p.navigator&&p.navigator.sendBeacon)try{y=p.navigator.sendBeacon(f.v.toString(),"")}catch{}!y&&p.Image&&(new Image().src=f.v,y=!0),y||(f.g=kl(f.j,null),f.g.ea(f.v)),f.F=Date.now(),$e(f)}Cl(u)}function On(u){u.g&&(ia(u),u.g.cancel(),u.g=null)}function Fs(u){On(u),u.u&&(p.clearTimeout(u.u),u.u=null),zs(u),u.h.cancel(),u.s&&(typeof u.s=="number"&&p.clearTimeout(u.s),u.s=null)}function Jn(u){if(!rn(u.h)&&!u.s){u.s=!0;var f=u.Ga;Ue||re(),Z||(Ue(),Z=!0),de.add(f,u),u.B=0}}function Fc(u,f){return pl(u.h)>=u.h.j-(u.s?1:0)?!1:u.s?(u.i=f.D.concat(u.i),!0):u.G==1||u.G==2||u.B>=(u.Va?0:u.Wa)?!1:(u.s=Cn(A(u.Ga,u,f),Al(u,u.B)),u.B++,!0)}r.Ga=function(u){if(this.s)if(this.s=null,this.G==1){if(!u){this.U=Math.floor(1e5*Math.random()),u=this.U++;const b=new Pn(this,this.j,u);let z=this.o;if(this.S&&(z?(z=S(z),P(z,this.S)):z=this.S),this.m!==null||this.O||(b.H=z,z=null),this.P)e:{for(var f=0,y=0;y<this.i.length;y++){t:{var w=this.i[y];if("__data__"in w.map&&(w=w.map.__data__,typeof w=="string")){w=w.length;break t}w=void 0}if(w===void 0)break;if(f+=w,4096<f){f=y;break e}if(f===4096||y===this.i.length-1){f=y+1;break e}}f=1e3}else f=1e3;f=Kr(this,b,f),y=sn(this.I),ze(y,"RID",u),ze(y,"CVER",22),this.D&&ze(y,"X-HTTP-Session-Id",this.D),Er(this,y),z&&(this.O?f="headers="+encodeURIComponent(String(wr(z)))+"&"+f:this.m&&Gr(y,this.m,z)),Jo(this.h,b),this.Ua&&ze(y,"TYPE","init"),this.P?(ze(y,"$req",f),ze(y,"SID","null"),b.T=!0,Ns(b,y,null)):Ns(b,y,f),this.G=2}}else this.G==3&&(u?Us(this,u):this.i.length==0||rn(this.h)||Us(this))};function Us(u,f){var y;f?y=f.l:y=u.U++;const w=sn(u.I);ze(w,"SID",u.K),ze(w,"RID",y),ze(w,"AID",u.T),Er(u,w),u.m&&u.o&&Gr(w,u.m,u.o),y=new Pn(u,u.j,y,u.B+1),u.m===null&&(y.H=u.o),f&&(u.i=f.D.concat(u.i)),f=Kr(u,y,1e3),y.I=Math.round(.5*u.wa)+Math.round(.5*u.wa*Math.random()),Jo(u.h,y),Ns(y,w,f)}function Er(u,f){u.H&&Te(u.H,function(y,w){ze(f,w,y)}),u.l&&zr({},function(y,w){ze(f,w,y)})}function Kr(u,f,y){y=Math.min(u.i.length,y);var w=u.l?A(u.l.Na,u.l,u):null;e:{var b=u.i;let z=-1;for(;;){const J=["count="+y];z==-1?0<y?(z=b[0].g,J.push("ofs="+z)):z=0:J.push("ofs="+z);let Fe=!0;for(let dt=0;dt<y;dt++){let Ne=b[dt].g;const wt=b[dt].map;if(Ne-=z,0>Ne)z=Math.max(0,b[dt].g-100),Fe=!1;else try{Tl(wt,J,"req"+Ne+"_")}catch{w&&w(wt)}}if(Fe){w=J.join("&");break e}}}return u=u.i.splice(0,y),f.D=u,w}function qi(u){if(!u.g&&!u.u){u.Y=1;var f=u.Fa;Ue||re(),Z||(Ue(),Z=!0),de.add(f,u),u.v=0}}function js(u){return u.g||u.u||3<=u.v?!1:(u.Y++,u.u=Cn(A(u.Fa,u),Al(u,u.v)),u.v++,!0)}r.Fa=function(){if(this.u=null,Sl(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var u=2*this.R;this.j.info("BP detection timer enabled: "+u),this.A=Cn(A(this.ab,this),u)}},r.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,nt(10),On(this),Sl(this))};function ia(u){u.A!=null&&(p.clearTimeout(u.A),u.A=null)}function Sl(u){u.g=new Pn(u,u.j,"rpc",u.Y),u.m===null&&(u.g.H=u.o),u.g.O=0;var f=sn(u.qa);ze(f,"RID","rpc"),ze(f,"SID",u.K),ze(f,"AID",u.T),ze(f,"CI",u.F?"0":"1"),!u.F&&u.ja&&ze(f,"TO",u.ja),ze(f,"TYPE","xmlhttp"),Er(u,f),u.m&&u.o&&Gr(f,u.m,u.o),u.L&&(u.g.I=u.L);var y=u.g;u=u.ia,y.L=1,y.v=qr(sn(f)),y.m=null,y.P=!0,Xo(y,u)}r.Za=function(){this.C!=null&&(this.C=null,On(this),js(this),nt(19))};function zs(u){u.C!=null&&(p.clearTimeout(u.C),u.C=null)}function Bs(u,f){var y=null;if(u.g==f){zs(u),ia(u),u.g=null;var w=2}else if(Bt(u.h,f))y=f.D,ml(u.h,f),w=1;else return;if(u.G!=0){if(f.o)if(w==1){y=f.m?f.m.length:0,f=Date.now()-f.F;var b=u.B;w=Oi(),ht(w,new Rs(w,y)),Jn(u)}else qi(u);else if(b=f.s,b==3||b==0&&0<f.X||!(w==1&&Fc(u,f)||w==2&&js(u)))switch(y&&0<y.length&&(f=u.h,f.i=f.i.concat(y)),b){case 1:Tr(u,5);break;case 4:Tr(u,10);break;case 3:Tr(u,6);break;default:Tr(u,2)}}}function Al(u,f){let y=u.Ta+Math.floor(Math.random()*u.cb);return u.isActive()||(y*=2),y*f}function Tr(u,f){if(u.j.info("Error code "+f),f==2){var y=A(u.fb,u),w=u.Xa;const b=!w;w=new _r(w||"//www.google.com/images/cleardot.gif"),p.location&&p.location.protocol=="http"||zi(w,"https"),qr(w),b?bc(w.toString(),y):El(w.toString(),y)}else nt(2);u.G=0,u.l&&u.l.sa(f),Cl(u),Fs(u)}r.fb=function(u){u?(this.j.info("Successfully pinged google.com"),nt(2)):(this.j.info("Failed to ping google.com"),nt(1))};function Cl(u){if(u.G=0,u.ka=[],u.l){const f=gl(u.h);(f.length!=0||u.i.length!=0)&&($(u.ka,f),$(u.ka,u.i),u.h.i.length=0,X(u.i),u.i.length=0),u.l.ra()}}function Rl(u,f,y){var w=y instanceof _r?sn(y):new _r(y);if(w.g!="")f&&(w.g=f+"."+w.g),Br(w,w.s);else{var b=p.location;w=b.protocol,f=f?f+"."+b.hostname:b.hostname,b=+b.port;var z=new _r(null);w&&zi(z,w),f&&(z.g=f),b&&Br(z,b),y&&(z.l=y),w=z}return y=u.D,f=u.ya,y&&f&&ze(w,y,f),ze(w,"VER",u.la),Er(u,w),w}function kl(u,f,y){if(f&&!u.J)throw Error("Can't create secondary domain capable XhrIo object.");return f=u.Ca&&!u.pa?new Qe(new vr({eb:y})):new Qe(u.pa),f.Ha(u.J),f}r.isActive=function(){return!!this.l&&this.l.isActive(this)};function sa(){}r=sa.prototype,r.ua=function(){},r.ta=function(){},r.sa=function(){},r.ra=function(){},r.isActive=function(){return!0},r.Na=function(){};function $s(){}$s.prototype.g=function(u,f){return new $t(u,f)};function $t(u,f){ct.call(this),this.g=new ra(f),this.l=u,this.h=f&&f.messageUrlParams||null,u=f&&f.messageHeaders||null,f&&f.clientProtocolHeaderRequired&&(u?u["X-Client-Protocol"]="webchannel":u={"X-Client-Protocol":"webchannel"}),this.g.o=u,u=f&&f.initMessageHeaders||null,f&&f.messageContentType&&(u?u["X-WebChannel-Content-Type"]=f.messageContentType:u={"X-WebChannel-Content-Type":f.messageContentType}),f&&f.va&&(u?u["X-WebChannel-Client-Profile"]=f.va:u={"X-WebChannel-Client-Profile":f.va}),this.g.S=u,(u=f&&f.Sb)&&!he(u)&&(this.g.m=u),this.v=f&&f.supportsCrossDomainXhr||!1,this.u=f&&f.sendRawJson||!1,(f=f&&f.httpSessionIdParam)&&!he(f)&&(this.g.D=f,u=this.h,u!==null&&f in u&&(u=this.h,f in u&&delete u[f])),this.j=new Zn(this)}W($t,ct),$t.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},$t.prototype.close=function(){Ct(this.g)},$t.prototype.o=function(u){var f=this.g;if(typeof u=="string"){var y={};y.__data__=u,u=y}else this.u&&(y={},y.__data__=Bo(u),u=y);f.i.push(new fl(f.Ya++,u)),f.G==3&&Jn(f)},$t.prototype.N=function(){this.g.l=null,delete this.j,Ct(this.g),delete this.g,$t.aa.N.call(this)};function Pl(u){Gn.call(this),u.__headers__&&(this.headers=u.__headers__,this.statusCode=u.__status__,delete u.__headers__,delete u.__status__);var f=u.__sm__;if(f){e:{for(const y in f){u=y;break e}u=void 0}(this.i=u)&&(u=this.i,f=f!==null&&u in f?f[u]:void 0),this.data=f}else this.data=u}W(Pl,Gn);function xl(){Cs.call(this),this.status=1}W(xl,Cs);function Zn(u){this.g=u}W(Zn,sa),Zn.prototype.ua=function(){ht(this.g,"a")},Zn.prototype.ta=function(u){ht(this.g,new Pl(u))},Zn.prototype.sa=function(u){ht(this.g,new xl)},Zn.prototype.ra=function(){ht(this.g,"b")},$s.prototype.createWebChannel=$s.prototype.g,$t.prototype.send=$t.prototype.o,$t.prototype.open=$t.prototype.m,$t.prototype.close=$t.prototype.close,S_=function(){return new $s},I_=function(){return Oi()},T_=Kn,Nd={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Ps.NO_ERROR=0,Ps.TIMEOUT=8,Ps.HTTP_ERROR=6,xu=Ps,ul.COMPLETE="complete",E_=ul,As.EventType=dn,dn.OPEN="a",dn.CLOSE="b",dn.ERROR="c",dn.MESSAGE="d",ct.prototype.listen=ct.prototype.K,xa=As,Qe.prototype.listenOnce=Qe.prototype.L,Qe.prototype.getLastError=Qe.prototype.Ka,Qe.prototype.getLastErrorCode=Qe.prototype.Ba,Qe.prototype.getStatus=Qe.prototype.Z,Qe.prototype.getResponseJson=Qe.prototype.Oa,Qe.prototype.getResponseText=Qe.prototype.oa,Qe.prototype.send=Qe.prototype.ea,Qe.prototype.setWithCredentials=Qe.prototype.Ha,w_=Qe}).apply(typeof Su<"u"?Su:typeof self<"u"?self:typeof window<"u"?window:{});const Ig="@firebase/firestore",Sg="4.8.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ut{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ut.UNAUTHENTICATED=new Ut(null),Ut.GOOGLE_CREDENTIALS=new Ut("google-credentials-uid"),Ut.FIRST_PARTY=new Ut("first-party-uid"),Ut.MOCK_USER=new Ut("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Po="11.10.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hs=new cc("@firebase/firestore");function ho(){return hs.logLevel}function ne(r,...e){if(hs.logLevel<=Re.DEBUG){const t=e.map(tf);hs.debug(`Firestore (${Po}): ${r}`,...t)}}function Or(r,...e){if(hs.logLevel<=Re.ERROR){const t=e.map(tf);hs.error(`Firestore (${Po}): ${r}`,...t)}}function wi(r,...e){if(hs.logLevel<=Re.WARN){const t=e.map(tf);hs.warn(`Firestore (${Po}): ${r}`,...t)}}function tf(r){if(typeof r=="string")return r;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return(function(t){return JSON.stringify(t)})(r)}catch{return r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ge(r,e,t){let s="Unexpected state";typeof e=="string"?s=e:t=e,A_(r,s,t)}function A_(r,e,t){let s=`FIRESTORE (${Po}) INTERNAL ASSERTION FAILED: ${e} (ID: ${r.toString(16)})`;if(t!==void 0)try{s+=" CONTEXT: "+JSON.stringify(t)}catch{s+=" CONTEXT: "+t}throw Or(s),new Error(s)}function Me(r,e,t,s){let o="Unexpected state";typeof t=="string"?o=t:s=t,r||A_(e,o,s)}function we(r,e){return r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const B={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class te extends Wn{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ls{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C_{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class JT{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(Ut.UNAUTHENTICATED)))}shutdown(){}}class ZT{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class eI{constructor(e){this.t=e,this.currentUser=Ut.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){Me(this.o===void 0,42304);let s=this.i;const o=g=>this.i!==s?(s=this.i,t(g)):Promise.resolve();let l=new ls;this.o=()=>{this.i++,this.currentUser=this.u(),l.resolve(),l=new ls,e.enqueueRetryable((()=>o(this.currentUser)))};const h=()=>{const g=l;e.enqueueRetryable((async()=>{await g.promise,await o(this.currentUser)}))},p=g=>{ne("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=g,this.o&&(this.auth.addAuthTokenListener(this.o),h())};this.t.onInit((g=>p(g))),setTimeout((()=>{if(!this.auth){const g=this.t.getImmediate({optional:!0});g?p(g):(ne("FirebaseAuthCredentialsProvider","Auth not yet detected"),l.resolve(),l=new ls)}}),0),h()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((s=>this.i!==e?(ne("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(Me(typeof s.accessToken=="string",31837,{l:s}),new C_(s.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Me(e===null||typeof e=="string",2055,{h:e}),new Ut(e)}}class tI{constructor(e,t,s){this.P=e,this.T=t,this.I=s,this.type="FirstParty",this.user=Ut.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class nI{constructor(e,t,s){this.P=e,this.T=t,this.I=s}getToken(){return Promise.resolve(new tI(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable((()=>t(Ut.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Ag{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class rI{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,zn(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){Me(this.o===void 0,3512);const s=l=>{l.error!=null&&ne("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${l.error.message}`);const h=l.token!==this.m;return this.m=l.token,ne("FirebaseAppCheckTokenProvider",`Received ${h?"new":"existing"} token.`),h?t(l.token):Promise.resolve()};this.o=l=>{e.enqueueRetryable((()=>s(l)))};const o=l=>{ne("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=l,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((l=>o(l))),setTimeout((()=>{if(!this.appCheck){const l=this.V.getImmediate({optional:!0});l?o(l):ne("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new Ag(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?(Me(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new Ag(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iI(r){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(r);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let s=0;s<r;s++)t[s]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function R_(){return new TextEncoder}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nf{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let s="";for(;s.length<20;){const o=iI(40);for(let l=0;l<o.length;++l)s.length<20&&o[l]<t&&(s+=e.charAt(o[l]%62))}return s}}function Se(r,e){return r<e?-1:r>e?1:0}function Dd(r,e){let t=0;for(;t<r.length&&t<e.length;){const s=r.codePointAt(t),o=e.codePointAt(t);if(s!==o){if(s<128&&o<128)return Se(s,o);{const l=R_(),h=sI(l.encode(Cg(r,t)),l.encode(Cg(e,t)));return h!==0?h:Se(s,o)}}t+=s>65535?2:1}return Se(r.length,e.length)}function Cg(r,e){return r.codePointAt(e)>65535?r.substring(e,e+2):r.substring(e,e+1)}function sI(r,e){for(let t=0;t<r.length&&t<e.length;++t)if(r[t]!==e[t])return Se(r[t],e[t]);return Se(r.length,e.length)}function To(r,e,t){return r.length===e.length&&r.every(((s,o)=>t(s,e[o])))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rg="__name__";class ir{constructor(e,t,s){t===void 0?t=0:t>e.length&&ge(637,{offset:t,range:e.length}),s===void 0?s=e.length-t:s>e.length-t&&ge(1746,{length:s,range:e.length-t}),this.segments=e,this.offset=t,this.len=s}get length(){return this.len}isEqual(e){return ir.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof ir?e.forEach((s=>{t.push(s)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,s=this.limit();t<s;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const s=Math.min(e.length,t.length);for(let o=0;o<s;o++){const l=ir.compareSegments(e.get(o),t.get(o));if(l!==0)return l}return Se(e.length,t.length)}static compareSegments(e,t){const s=ir.isNumericId(e),o=ir.isNumericId(t);return s&&!o?-1:!s&&o?1:s&&o?ir.extractNumericId(e).compare(ir.extractNumericId(t)):Dd(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return yi.fromString(e.substring(4,e.length-2))}}class He extends ir{construct(e,t,s){return new He(e,t,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const s of e){if(s.indexOf("//")>=0)throw new te(B.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);t.push(...s.split("/").filter((o=>o.length>0)))}return new He(t)}static emptyPath(){return new He([])}}const oI=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class xt extends ir{construct(e,t,s){return new xt(e,t,s)}static isValidIdentifier(e){return oI.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),xt.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Rg}static keyField(){return new xt([Rg])}static fromServerFormat(e){const t=[];let s="",o=0;const l=()=>{if(s.length===0)throw new te(B.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(s),s=""};let h=!1;for(;o<e.length;){const p=e[o];if(p==="\\"){if(o+1===e.length)throw new te(B.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const g=e[o+1];if(g!=="\\"&&g!=="."&&g!=="`")throw new te(B.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=g,o+=2}else p==="`"?(h=!h,o++):p!=="."||h?(s+=p,o++):(l(),o++)}if(l(),h)throw new te(B.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new xt(t)}static emptyPath(){return new xt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ce{constructor(e){this.path=e}static fromPath(e){return new ce(He.fromString(e))}static fromName(e){return new ce(He.fromString(e).popFirst(5))}static empty(){return new ce(He.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&He.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return He.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ce(new He(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function k_(r,e,t){if(!t)throw new te(B.INVALID_ARGUMENT,`Function ${r}() cannot be called with an empty ${e}.`)}function aI(r,e,t,s){if(e===!0&&s===!0)throw new te(B.INVALID_ARGUMENT,`${r} and ${t} cannot be used together.`)}function kg(r){if(!ce.isDocumentKey(r))throw new te(B.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${r} has ${r.length}.`)}function Pg(r){if(ce.isDocumentKey(r))throw new te(B.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${r} has ${r.length}.`)}function P_(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}function hc(r){if(r===void 0)return"undefined";if(r===null)return"null";if(typeof r=="string")return r.length>20&&(r=`${r.substring(0,20)}...`),JSON.stringify(r);if(typeof r=="number"||typeof r=="boolean")return""+r;if(typeof r=="object"){if(r instanceof Array)return"an array";{const e=(function(s){return s.constructor?s.constructor.name:null})(r);return e?`a custom ${e} object`:"an object"}}return typeof r=="function"?"a function":ge(12329,{type:typeof r})}function ba(r,e){if("_delegate"in r&&(r=r._delegate),!(r instanceof e)){if(e.name===r.constructor.name)throw new te(B.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=hc(r);throw new te(B.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return r}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ut(r,e){const t={typeString:r};return e&&(t.value=e),t}function Ja(r,e){if(!P_(r))throw new te(B.INVALID_ARGUMENT,"JSON must be an object");let t;for(const s in e)if(e[s]){const o=e[s].typeString,l="value"in e[s]?{value:e[s].value}:void 0;if(!(s in r)){t=`JSON missing required field: '${s}'`;break}const h=r[s];if(o&&typeof h!==o){t=`JSON field '${s}' must be a ${o}.`;break}if(l!==void 0&&h!==l.value){t=`Expected '${s}' field to equal '${l.value}'`;break}}if(t)throw new te(B.INVALID_ARGUMENT,t);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xg=-62135596800,Ng=1e6;class Ke{static now(){return Ke.fromMillis(Date.now())}static fromDate(e){return Ke.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),s=Math.floor((e-1e3*t)*Ng);return new Ke(t,s)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new te(B.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new te(B.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<xg)throw new te(B.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new te(B.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Ng}_compareTo(e){return this.seconds===e.seconds?Se(this.nanoseconds,e.nanoseconds):Se(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Ke._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Ja(e,Ke._jsonSchema))return new Ke(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-xg;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Ke._jsonSchemaVersion="firestore/timestamp/1.0",Ke._jsonSchema={type:ut("string",Ke._jsonSchemaVersion),seconds:ut("number"),nanoseconds:ut("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ve{static fromTimestamp(e){return new ve(e)}static min(){return new ve(new Ke(0,0))}static max(){return new ve(new Ke(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $a=-1;function lI(r,e){const t=r.toTimestamp().seconds,s=r.toTimestamp().nanoseconds+1,o=ve.fromTimestamp(s===1e9?new Ke(t+1,0):new Ke(t,s));return new Ei(o,ce.empty(),e)}function uI(r){return new Ei(r.readTime,r.key,$a)}class Ei{constructor(e,t,s){this.readTime=e,this.documentKey=t,this.largestBatchId=s}static min(){return new Ei(ve.min(),ce.empty(),$a)}static max(){return new Ei(ve.max(),ce.empty(),$a)}}function cI(r,e){let t=r.readTime.compareTo(e.readTime);return t!==0?t:(t=ce.comparator(r.documentKey,e.documentKey),t!==0?t:Se(r.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hI="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class dI{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xo(r){if(r.code!==B.FAILED_PRECONDITION||r.message!==hI)throw r;ne("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&ge(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new q(((s,o)=>{this.nextCallback=l=>{this.wrapSuccess(e,l).next(s,o)},this.catchCallback=l=>{this.wrapFailure(t,l).next(s,o)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof q?t:q.resolve(t)}catch(t){return q.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):q.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):q.reject(t)}static resolve(e){return new q(((t,s)=>{t(e)}))}static reject(e){return new q(((t,s)=>{s(e)}))}static waitFor(e){return new q(((t,s)=>{let o=0,l=0,h=!1;e.forEach((p=>{++o,p.next((()=>{++l,h&&l===o&&t()}),(g=>s(g)))})),h=!0,l===o&&t()}))}static or(e){let t=q.resolve(!1);for(const s of e)t=t.next((o=>o?q.resolve(o):s()));return t}static forEach(e,t){const s=[];return e.forEach(((o,l)=>{s.push(t.call(this,o,l))})),this.waitFor(s)}static mapArray(e,t){return new q(((s,o)=>{const l=e.length,h=new Array(l);let p=0;for(let g=0;g<l;g++){const _=g;t(e[_]).next((E=>{h[_]=E,++p,p===l&&s(h)}),(E=>o(E)))}}))}static doWhile(e,t){return new q(((s,o)=>{const l=()=>{e()===!0?t().next((()=>{l()}),o):s()};l()}))}}function fI(r){const e=r.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function No(r){return r.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dc{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=s=>this._e(s),this.ae=s=>t.writeSequenceNumber(s))}_e(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ae&&this.ae(e),e}}dc.ue=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rf=-1;function fc(r){return r==null}function Bu(r){return r===0&&1/r==-1/0}function pI(r){return typeof r=="number"&&Number.isInteger(r)&&!Bu(r)&&r<=Number.MAX_SAFE_INTEGER&&r>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const x_="";function mI(r){let e="";for(let t=0;t<r.length;t++)e.length>0&&(e=Dg(e)),e=gI(r.get(t),e);return Dg(e)}function gI(r,e){let t=e;const s=r.length;for(let o=0;o<s;o++){const l=r.charAt(o);switch(l){case"\0":t+="";break;case x_:t+="";break;default:t+=l}}return t}function Dg(r){return r+x_+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vg(r){let e=0;for(const t in r)Object.prototype.hasOwnProperty.call(r,t)&&e++;return e}function ki(r,e){for(const t in r)Object.prototype.hasOwnProperty.call(r,t)&&e(t,r[t])}function N_(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ze{constructor(e,t){this.comparator=e,this.root=t||Pt.EMPTY}insert(e,t){return new Ze(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Pt.BLACK,null,null))}remove(e){return new Ze(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Pt.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const s=this.comparator(e,t.key);if(s===0)return t.value;s<0?t=t.left:s>0&&(t=t.right)}return null}indexOf(e){let t=0,s=this.root;for(;!s.isEmpty();){const o=this.comparator(e,s.key);if(o===0)return t+s.left.size;o<0?s=s.left:(t+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,s)=>(e(t,s),!1)))}toString(){const e=[];return this.inorderTraversal(((t,s)=>(e.push(`${t}:${s}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Au(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Au(this.root,e,this.comparator,!1)}getReverseIterator(){return new Au(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Au(this.root,e,this.comparator,!0)}}class Au{constructor(e,t,s,o){this.isReverse=o,this.nodeStack=[];let l=1;for(;!e.isEmpty();)if(l=t?s(e.key,t):1,t&&o&&(l*=-1),l<0)e=this.isReverse?e.left:e.right;else{if(l===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Pt{constructor(e,t,s,o,l){this.key=e,this.value=t,this.color=s??Pt.RED,this.left=o??Pt.EMPTY,this.right=l??Pt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,s,o,l){return new Pt(e??this.key,t??this.value,s??this.color,o??this.left,l??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let o=this;const l=s(e,o.key);return o=l<0?o.copy(null,null,null,o.left.insert(e,t,s),null):l===0?o.copy(null,t,null,null,null):o.copy(null,null,null,null,o.right.insert(e,t,s)),o.fixUp()}removeMin(){if(this.left.isEmpty())return Pt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let s,o=this;if(t(e,o.key)<0)o.left.isEmpty()||o.left.isRed()||o.left.left.isRed()||(o=o.moveRedLeft()),o=o.copy(null,null,null,o.left.remove(e,t),null);else{if(o.left.isRed()&&(o=o.rotateRight()),o.right.isEmpty()||o.right.isRed()||o.right.left.isRed()||(o=o.moveRedRight()),t(e,o.key)===0){if(o.right.isEmpty())return Pt.EMPTY;s=o.right.min(),o=o.copy(s.key,s.value,null,null,o.right.removeMin())}o=o.copy(null,null,null,null,o.right.remove(e,t))}return o.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Pt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Pt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw ge(43730,{key:this.key,value:this.value});if(this.right.isRed())throw ge(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw ge(27949);return e+(this.isRed()?0:1)}}Pt.EMPTY=null,Pt.RED=!0,Pt.BLACK=!1;Pt.EMPTY=new class{constructor(){this.size=0}get key(){throw ge(57766)}get value(){throw ge(16141)}get color(){throw ge(16727)}get left(){throw ge(29726)}get right(){throw ge(36894)}copy(e,t,s,o,l){return this}insert(e,t,s){return new Pt(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yt{constructor(e){this.comparator=e,this.data=new Ze(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,s)=>(e(t),!1)))}forEachInRange(e,t){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const o=s.getNext();if(this.comparator(o.key,e[1])>=0)return;t(o.key)}}forEachWhile(e,t){let s;for(s=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Og(this.data.getIterator())}getIteratorFrom(e){return new Og(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((s=>{t=t.add(s)})),t}isEqual(e){if(!(e instanceof yt)||this.size!==e.size)return!1;const t=this.data.getIterator(),s=e.data.getIterator();for(;t.hasNext();){const o=t.getNext().key,l=s.getNext().key;if(this.comparator(o,l)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new yt(this.comparator);return t.data=e,t}}class Og{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hn{constructor(e){this.fields=e,e.sort(xt.comparator)}static empty(){return new hn([])}unionWith(e){let t=new yt(xt.comparator);for(const s of this.fields)t=t.add(s);for(const s of e)t=t.add(s);return new hn(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return To(this.fields,e.fields,((t,s)=>t.isEqual(s)))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D_ extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nt{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(o){try{return atob(o)}catch(l){throw typeof DOMException<"u"&&l instanceof DOMException?new D_("Invalid base64 string: "+l):l}})(e);return new Nt(t)}static fromUint8Array(e){const t=(function(o){let l="";for(let h=0;h<o.length;++h)l+=String.fromCharCode(o[h]);return l})(e);return new Nt(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const s=new Uint8Array(t.length);for(let o=0;o<t.length;o++)s[o]=t.charCodeAt(o);return s})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Se(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Nt.EMPTY_BYTE_STRING=new Nt("");const yI=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ti(r){if(Me(!!r,39018),typeof r=="string"){let e=0;const t=yI.exec(r);if(Me(!!t,46558,{timestamp:r}),t[1]){let o=t[1];o=(o+"000000000").substr(0,9),e=Number(o)}const s=new Date(r);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:it(r.seconds),nanos:it(r.nanos)}}function it(r){return typeof r=="number"?r:typeof r=="string"?Number(r):0}function Ii(r){return typeof r=="string"?Nt.fromBase64String(r):Nt.fromUint8Array(r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const V_="server_timestamp",O_="__type__",b_="__previous_value__",L_="__local_write_time__";function sf(r){var e,t;return((t=(((e=r==null?void 0:r.mapValue)===null||e===void 0?void 0:e.fields)||{})[O_])===null||t===void 0?void 0:t.stringValue)===V_}function pc(r){const e=r.mapValue.fields[b_];return sf(e)?pc(e):e}function qa(r){const e=Ti(r.mapValue.fields[L_].timestampValue);return new Ke(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _I{constructor(e,t,s,o,l,h,p,g,_,E){this.databaseId=e,this.appId=t,this.persistenceKey=s,this.host=o,this.ssl=l,this.forceLongPolling=h,this.autoDetectLongPolling=p,this.longPollingOptions=g,this.useFetchStreams=_,this.isUsingEmulator=E}}const $u="(default)";class Ha{constructor(e,t){this.projectId=e,this.database=t||$u}static empty(){return new Ha("","")}get isDefaultDatabase(){return this.database===$u}isEqual(e){return e instanceof Ha&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M_="__type__",vI="__max__",Cu={mapValue:{}},F_="__vector__",qu="value";function Si(r){return"nullValue"in r?0:"booleanValue"in r?1:"integerValue"in r||"doubleValue"in r?2:"timestampValue"in r?3:"stringValue"in r?5:"bytesValue"in r?6:"referenceValue"in r?7:"geoPointValue"in r?8:"arrayValue"in r?9:"mapValue"in r?sf(r)?4:EI(r)?9007199254740991:wI(r)?10:11:ge(28295,{value:r})}function dr(r,e){if(r===e)return!0;const t=Si(r);if(t!==Si(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return r.booleanValue===e.booleanValue;case 4:return qa(r).isEqual(qa(e));case 3:return(function(o,l){if(typeof o.timestampValue=="string"&&typeof l.timestampValue=="string"&&o.timestampValue.length===l.timestampValue.length)return o.timestampValue===l.timestampValue;const h=Ti(o.timestampValue),p=Ti(l.timestampValue);return h.seconds===p.seconds&&h.nanos===p.nanos})(r,e);case 5:return r.stringValue===e.stringValue;case 6:return(function(o,l){return Ii(o.bytesValue).isEqual(Ii(l.bytesValue))})(r,e);case 7:return r.referenceValue===e.referenceValue;case 8:return(function(o,l){return it(o.geoPointValue.latitude)===it(l.geoPointValue.latitude)&&it(o.geoPointValue.longitude)===it(l.geoPointValue.longitude)})(r,e);case 2:return(function(o,l){if("integerValue"in o&&"integerValue"in l)return it(o.integerValue)===it(l.integerValue);if("doubleValue"in o&&"doubleValue"in l){const h=it(o.doubleValue),p=it(l.doubleValue);return h===p?Bu(h)===Bu(p):isNaN(h)&&isNaN(p)}return!1})(r,e);case 9:return To(r.arrayValue.values||[],e.arrayValue.values||[],dr);case 10:case 11:return(function(o,l){const h=o.mapValue.fields||{},p=l.mapValue.fields||{};if(Vg(h)!==Vg(p))return!1;for(const g in h)if(h.hasOwnProperty(g)&&(p[g]===void 0||!dr(h[g],p[g])))return!1;return!0})(r,e);default:return ge(52216,{left:r})}}function Wa(r,e){return(r.values||[]).find((t=>dr(t,e)))!==void 0}function Io(r,e){if(r===e)return 0;const t=Si(r),s=Si(e);if(t!==s)return Se(t,s);switch(t){case 0:case 9007199254740991:return 0;case 1:return Se(r.booleanValue,e.booleanValue);case 2:return(function(l,h){const p=it(l.integerValue||l.doubleValue),g=it(h.integerValue||h.doubleValue);return p<g?-1:p>g?1:p===g?0:isNaN(p)?isNaN(g)?0:-1:1})(r,e);case 3:return bg(r.timestampValue,e.timestampValue);case 4:return bg(qa(r),qa(e));case 5:return Dd(r.stringValue,e.stringValue);case 6:return(function(l,h){const p=Ii(l),g=Ii(h);return p.compareTo(g)})(r.bytesValue,e.bytesValue);case 7:return(function(l,h){const p=l.split("/"),g=h.split("/");for(let _=0;_<p.length&&_<g.length;_++){const E=Se(p[_],g[_]);if(E!==0)return E}return Se(p.length,g.length)})(r.referenceValue,e.referenceValue);case 8:return(function(l,h){const p=Se(it(l.latitude),it(h.latitude));return p!==0?p:Se(it(l.longitude),it(h.longitude))})(r.geoPointValue,e.geoPointValue);case 9:return Lg(r.arrayValue,e.arrayValue);case 10:return(function(l,h){var p,g,_,E;const T=l.fields||{},A=h.fields||{},U=(p=T[qu])===null||p===void 0?void 0:p.arrayValue,W=(g=A[qu])===null||g===void 0?void 0:g.arrayValue,X=Se(((_=U==null?void 0:U.values)===null||_===void 0?void 0:_.length)||0,((E=W==null?void 0:W.values)===null||E===void 0?void 0:E.length)||0);return X!==0?X:Lg(U,W)})(r.mapValue,e.mapValue);case 11:return(function(l,h){if(l===Cu.mapValue&&h===Cu.mapValue)return 0;if(l===Cu.mapValue)return 1;if(h===Cu.mapValue)return-1;const p=l.fields||{},g=Object.keys(p),_=h.fields||{},E=Object.keys(_);g.sort(),E.sort();for(let T=0;T<g.length&&T<E.length;++T){const A=Dd(g[T],E[T]);if(A!==0)return A;const U=Io(p[g[T]],_[E[T]]);if(U!==0)return U}return Se(g.length,E.length)})(r.mapValue,e.mapValue);default:throw ge(23264,{le:t})}}function bg(r,e){if(typeof r=="string"&&typeof e=="string"&&r.length===e.length)return Se(r,e);const t=Ti(r),s=Ti(e),o=Se(t.seconds,s.seconds);return o!==0?o:Se(t.nanos,s.nanos)}function Lg(r,e){const t=r.values||[],s=e.values||[];for(let o=0;o<t.length&&o<s.length;++o){const l=Io(t[o],s[o]);if(l)return l}return Se(t.length,s.length)}function So(r){return Vd(r)}function Vd(r){return"nullValue"in r?"null":"booleanValue"in r?""+r.booleanValue:"integerValue"in r?""+r.integerValue:"doubleValue"in r?""+r.doubleValue:"timestampValue"in r?(function(t){const s=Ti(t);return`time(${s.seconds},${s.nanos})`})(r.timestampValue):"stringValue"in r?r.stringValue:"bytesValue"in r?(function(t){return Ii(t).toBase64()})(r.bytesValue):"referenceValue"in r?(function(t){return ce.fromName(t).toString()})(r.referenceValue):"geoPointValue"in r?(function(t){return`geo(${t.latitude},${t.longitude})`})(r.geoPointValue):"arrayValue"in r?(function(t){let s="[",o=!0;for(const l of t.values||[])o?o=!1:s+=",",s+=Vd(l);return s+"]"})(r.arrayValue):"mapValue"in r?(function(t){const s=Object.keys(t.fields||{}).sort();let o="{",l=!0;for(const h of s)l?l=!1:o+=",",o+=`${h}:${Vd(t.fields[h])}`;return o+"}"})(r.mapValue):ge(61005,{value:r})}function Nu(r){switch(Si(r)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=pc(r);return e?16+Nu(e):16;case 5:return 2*r.stringValue.length;case 6:return Ii(r.bytesValue).approximateByteSize();case 7:return r.referenceValue.length;case 9:return(function(s){return(s.values||[]).reduce(((o,l)=>o+Nu(l)),0)})(r.arrayValue);case 10:case 11:return(function(s){let o=0;return ki(s.fields,((l,h)=>{o+=l.length+Nu(h)})),o})(r.mapValue);default:throw ge(13486,{value:r})}}function Mg(r,e){return{referenceValue:`projects/${r.projectId}/databases/${r.database}/documents/${e.path.canonicalString()}`}}function Od(r){return!!r&&"integerValue"in r}function of(r){return!!r&&"arrayValue"in r}function Fg(r){return!!r&&"nullValue"in r}function Ug(r){return!!r&&"doubleValue"in r&&isNaN(Number(r.doubleValue))}function Du(r){return!!r&&"mapValue"in r}function wI(r){var e,t;return((t=(((e=r==null?void 0:r.mapValue)===null||e===void 0?void 0:e.fields)||{})[M_])===null||t===void 0?void 0:t.stringValue)===F_}function La(r){if(r.geoPointValue)return{geoPointValue:Object.assign({},r.geoPointValue)};if(r.timestampValue&&typeof r.timestampValue=="object")return{timestampValue:Object.assign({},r.timestampValue)};if(r.mapValue){const e={mapValue:{fields:{}}};return ki(r.mapValue.fields,((t,s)=>e.mapValue.fields[t]=La(s))),e}if(r.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(r.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=La(r.arrayValue.values[t]);return e}return Object.assign({},r)}function EI(r){return(((r.mapValue||{}).fields||{}).__type__||{}).stringValue===vI}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tn{constructor(e){this.value=e}static empty(){return new tn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let s=0;s<e.length-1;++s)if(t=(t.mapValue.fields||{})[e.get(s)],!Du(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=La(t)}setAll(e){let t=xt.emptyPath(),s={},o=[];e.forEach(((h,p)=>{if(!t.isImmediateParentOf(p)){const g=this.getFieldsMap(t);this.applyChanges(g,s,o),s={},o=[],t=p.popLast()}h?s[p.lastSegment()]=La(h):o.push(p.lastSegment())}));const l=this.getFieldsMap(t);this.applyChanges(l,s,o)}delete(e){const t=this.field(e.popLast());Du(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return dr(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let s=0;s<e.length;++s){let o=t.mapValue.fields[e.get(s)];Du(o)&&o.mapValue.fields||(o={mapValue:{fields:{}}},t.mapValue.fields[e.get(s)]=o),t=o}return t.mapValue.fields}applyChanges(e,t,s){ki(t,((o,l)=>e[o]=l));for(const o of s)delete e[o]}clone(){return new tn(La(this.value))}}function U_(r){const e=[];return ki(r.fields,((t,s)=>{const o=new xt([t]);if(Du(s)){const l=U_(s.mapValue).fields;if(l.length===0)e.push(o);else for(const h of l)e.push(o.child(h))}else e.push(o)})),new hn(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jt{constructor(e,t,s,o,l,h,p){this.key=e,this.documentType=t,this.version=s,this.readTime=o,this.createTime=l,this.data=h,this.documentState=p}static newInvalidDocument(e){return new jt(e,0,ve.min(),ve.min(),ve.min(),tn.empty(),0)}static newFoundDocument(e,t,s,o){return new jt(e,1,t,ve.min(),s,o,0)}static newNoDocument(e,t){return new jt(e,2,t,ve.min(),ve.min(),tn.empty(),0)}static newUnknownDocument(e,t){return new jt(e,3,t,ve.min(),ve.min(),tn.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(ve.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=tn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=tn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ve.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof jt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new jt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hu{constructor(e,t){this.position=e,this.inclusive=t}}function jg(r,e,t){let s=0;for(let o=0;o<r.position.length;o++){const l=e[o],h=r.position[o];if(l.field.isKeyField()?s=ce.comparator(ce.fromName(h.referenceValue),t.key):s=Io(h,t.data.field(l.field)),l.dir==="desc"&&(s*=-1),s!==0)break}return s}function zg(r,e){if(r===null)return e===null;if(e===null||r.inclusive!==e.inclusive||r.position.length!==e.position.length)return!1;for(let t=0;t<r.position.length;t++)if(!dr(r.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wu{constructor(e,t="asc"){this.field=e,this.dir=t}}function TI(r,e){return r.dir===e.dir&&r.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j_{}class lt extends j_{constructor(e,t,s){super(),this.field=e,this.op=t,this.value=s}static create(e,t,s){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,s):new SI(e,t,s):t==="array-contains"?new RI(e,s):t==="in"?new kI(e,s):t==="not-in"?new PI(e,s):t==="array-contains-any"?new xI(e,s):new lt(e,t,s)}static createKeyFieldInFilter(e,t,s){return t==="in"?new AI(e,s):new CI(e,s)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(Io(t,this.value)):t!==null&&Si(this.value)===Si(t)&&this.matchesComparison(Io(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ge(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Hn extends j_{constructor(e,t){super(),this.filters=e,this.op=t,this.he=null}static create(e,t){return new Hn(e,t)}matches(e){return z_(this)?this.filters.find((t=>!t.matches(e)))===void 0:this.filters.find((t=>t.matches(e)))!==void 0}getFlattenedFilters(){return this.he!==null||(this.he=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.he}getFilters(){return Object.assign([],this.filters)}}function z_(r){return r.op==="and"}function B_(r){return II(r)&&z_(r)}function II(r){for(const e of r.filters)if(e instanceof Hn)return!1;return!0}function bd(r){if(r instanceof lt)return r.field.canonicalString()+r.op.toString()+So(r.value);if(B_(r))return r.filters.map((e=>bd(e))).join(",");{const e=r.filters.map((t=>bd(t))).join(",");return`${r.op}(${e})`}}function $_(r,e){return r instanceof lt?(function(s,o){return o instanceof lt&&s.op===o.op&&s.field.isEqual(o.field)&&dr(s.value,o.value)})(r,e):r instanceof Hn?(function(s,o){return o instanceof Hn&&s.op===o.op&&s.filters.length===o.filters.length?s.filters.reduce(((l,h,p)=>l&&$_(h,o.filters[p])),!0):!1})(r,e):void ge(19439)}function q_(r){return r instanceof lt?(function(t){return`${t.field.canonicalString()} ${t.op} ${So(t.value)}`})(r):r instanceof Hn?(function(t){return t.op.toString()+" {"+t.getFilters().map(q_).join(" ,")+"}"})(r):"Filter"}class SI extends lt{constructor(e,t,s){super(e,t,s),this.key=ce.fromName(s.referenceValue)}matches(e){const t=ce.comparator(e.key,this.key);return this.matchesComparison(t)}}class AI extends lt{constructor(e,t){super(e,"in",t),this.keys=H_("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class CI extends lt{constructor(e,t){super(e,"not-in",t),this.keys=H_("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function H_(r,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map((s=>ce.fromName(s.referenceValue)))}class RI extends lt{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return of(t)&&Wa(t.arrayValue,this.value)}}class kI extends lt{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Wa(this.value.arrayValue,t)}}class PI extends lt{constructor(e,t){super(e,"not-in",t)}matches(e){if(Wa(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!Wa(this.value.arrayValue,t)}}class xI extends lt{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!of(t)||!t.arrayValue.values)&&t.arrayValue.values.some((s=>Wa(this.value.arrayValue,s)))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NI{constructor(e,t=null,s=[],o=[],l=null,h=null,p=null){this.path=e,this.collectionGroup=t,this.orderBy=s,this.filters=o,this.limit=l,this.startAt=h,this.endAt=p,this.Pe=null}}function Bg(r,e=null,t=[],s=[],o=null,l=null,h=null){return new NI(r,e,t,s,o,l,h)}function af(r){const e=we(r);if(e.Pe===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((s=>bd(s))).join(","),t+="|ob:",t+=e.orderBy.map((s=>(function(l){return l.field.canonicalString()+l.dir})(s))).join(","),fc(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((s=>So(s))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((s=>So(s))).join(",")),e.Pe=t}return e.Pe}function lf(r,e){if(r.limit!==e.limit||r.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<r.orderBy.length;t++)if(!TI(r.orderBy[t],e.orderBy[t]))return!1;if(r.filters.length!==e.filters.length)return!1;for(let t=0;t<r.filters.length;t++)if(!$_(r.filters[t],e.filters[t]))return!1;return r.collectionGroup===e.collectionGroup&&!!r.path.isEqual(e.path)&&!!zg(r.startAt,e.startAt)&&zg(r.endAt,e.endAt)}function Ld(r){return ce.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Za{constructor(e,t=null,s=[],o=[],l=null,h="F",p=null,g=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=s,this.filters=o,this.limit=l,this.limitType=h,this.startAt=p,this.endAt=g,this.Te=null,this.Ie=null,this.de=null,this.startAt,this.endAt}}function DI(r,e,t,s,o,l,h,p){return new Za(r,e,t,s,o,l,h,p)}function uf(r){return new Za(r)}function $g(r){return r.filters.length===0&&r.limit===null&&r.startAt==null&&r.endAt==null&&(r.explicitOrderBy.length===0||r.explicitOrderBy.length===1&&r.explicitOrderBy[0].field.isKeyField())}function W_(r){return r.collectionGroup!==null}function Ma(r){const e=we(r);if(e.Te===null){e.Te=[];const t=new Set;for(const l of e.explicitOrderBy)e.Te.push(l),t.add(l.field.canonicalString());const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(h){let p=new yt(xt.comparator);return h.filters.forEach((g=>{g.getFlattenedFilters().forEach((_=>{_.isInequality()&&(p=p.add(_.field))}))})),p})(e).forEach((l=>{t.has(l.canonicalString())||l.isKeyField()||e.Te.push(new Wu(l,s))})),t.has(xt.keyField().canonicalString())||e.Te.push(new Wu(xt.keyField(),s))}return e.Te}function sr(r){const e=we(r);return e.Ie||(e.Ie=VI(e,Ma(r))),e.Ie}function VI(r,e){if(r.limitType==="F")return Bg(r.path,r.collectionGroup,e,r.filters,r.limit,r.startAt,r.endAt);{e=e.map((o=>{const l=o.dir==="desc"?"asc":"desc";return new Wu(o.field,l)}));const t=r.endAt?new Hu(r.endAt.position,r.endAt.inclusive):null,s=r.startAt?new Hu(r.startAt.position,r.startAt.inclusive):null;return Bg(r.path,r.collectionGroup,e,r.filters,r.limit,t,s)}}function Md(r,e){const t=r.filters.concat([e]);return new Za(r.path,r.collectionGroup,r.explicitOrderBy.slice(),t,r.limit,r.limitType,r.startAt,r.endAt)}function Fd(r,e,t){return new Za(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),e,t,r.startAt,r.endAt)}function mc(r,e){return lf(sr(r),sr(e))&&r.limitType===e.limitType}function G_(r){return`${af(sr(r))}|lt:${r.limitType}`}function fo(r){return`Query(target=${(function(t){let s=t.path.canonicalString();return t.collectionGroup!==null&&(s+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(s+=`, filters: [${t.filters.map((o=>q_(o))).join(", ")}]`),fc(t.limit)||(s+=", limit: "+t.limit),t.orderBy.length>0&&(s+=`, orderBy: [${t.orderBy.map((o=>(function(h){return`${h.field.canonicalString()} (${h.dir})`})(o))).join(", ")}]`),t.startAt&&(s+=", startAt: ",s+=t.startAt.inclusive?"b:":"a:",s+=t.startAt.position.map((o=>So(o))).join(",")),t.endAt&&(s+=", endAt: ",s+=t.endAt.inclusive?"a:":"b:",s+=t.endAt.position.map((o=>So(o))).join(",")),`Target(${s})`})(sr(r))}; limitType=${r.limitType})`}function gc(r,e){return e.isFoundDocument()&&(function(s,o){const l=o.key.path;return s.collectionGroup!==null?o.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(l):ce.isDocumentKey(s.path)?s.path.isEqual(l):s.path.isImmediateParentOf(l)})(r,e)&&(function(s,o){for(const l of Ma(s))if(!l.field.isKeyField()&&o.data.field(l.field)===null)return!1;return!0})(r,e)&&(function(s,o){for(const l of s.filters)if(!l.matches(o))return!1;return!0})(r,e)&&(function(s,o){return!(s.startAt&&!(function(h,p,g){const _=jg(h,p,g);return h.inclusive?_<=0:_<0})(s.startAt,Ma(s),o)||s.endAt&&!(function(h,p,g){const _=jg(h,p,g);return h.inclusive?_>=0:_>0})(s.endAt,Ma(s),o))})(r,e)}function OI(r){return r.collectionGroup||(r.path.length%2==1?r.path.lastSegment():r.path.get(r.path.length-2))}function K_(r){return(e,t)=>{let s=!1;for(const o of Ma(r)){const l=bI(o,e,t);if(l!==0)return l;s=s||o.field.isKeyField()}return 0}}function bI(r,e,t){const s=r.field.isKeyField()?ce.comparator(e.key,t.key):(function(l,h,p){const g=h.data.field(l),_=p.data.field(l);return g!==null&&_!==null?Io(g,_):ge(42886)})(r.field,e,t);switch(r.dir){case"asc":return s;case"desc":return-1*s;default:return ge(19790,{direction:r.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ys{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s!==void 0){for(const[o,l]of s)if(this.equalsFn(o,e))return l}}has(e){return this.get(e)!==void 0}set(e,t){const s=this.mapKeyFn(e),o=this.inner[s];if(o===void 0)return this.inner[s]=[[e,t]],void this.innerSize++;for(let l=0;l<o.length;l++)if(this.equalsFn(o[l][0],e))return void(o[l]=[e,t]);o.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s===void 0)return!1;for(let o=0;o<s.length;o++)if(this.equalsFn(s[o][0],e))return s.length===1?delete this.inner[t]:s.splice(o,1),this.innerSize--,!0;return!1}forEach(e){ki(this.inner,((t,s)=>{for(const[o,l]of s)e(o,l)}))}isEmpty(){return N_(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LI=new Ze(ce.comparator);function br(){return LI}const Q_=new Ze(ce.comparator);function Na(...r){let e=Q_;for(const t of r)e=e.insert(t.key,t);return e}function X_(r){let e=Q_;return r.forEach(((t,s)=>e=e.insert(t,s.overlayedDocument))),e}function os(){return Fa()}function Y_(){return Fa()}function Fa(){return new ys((r=>r.toString()),((r,e)=>r.isEqual(e)))}const MI=new Ze(ce.comparator),FI=new yt(ce.comparator);function ke(...r){let e=FI;for(const t of r)e=e.add(t);return e}const UI=new yt(Se);function jI(){return UI}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cf(r,e){if(r.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Bu(e)?"-0":e}}function J_(r){return{integerValue:""+r}}function zI(r,e){return pI(e)?J_(e):cf(r,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yc{constructor(){this._=void 0}}function BI(r,e,t){return r instanceof Gu?(function(o,l){const h={fields:{[O_]:{stringValue:V_},[L_]:{timestampValue:{seconds:o.seconds,nanos:o.nanoseconds}}}};return l&&sf(l)&&(l=pc(l)),l&&(h.fields[b_]=l),{mapValue:h}})(t,e):r instanceof Ga?ev(r,e):r instanceof Ka?tv(r,e):(function(o,l){const h=Z_(o,l),p=qg(h)+qg(o.Ee);return Od(h)&&Od(o.Ee)?J_(p):cf(o.serializer,p)})(r,e)}function $I(r,e,t){return r instanceof Ga?ev(r,e):r instanceof Ka?tv(r,e):t}function Z_(r,e){return r instanceof Ku?(function(s){return Od(s)||(function(l){return!!l&&"doubleValue"in l})(s)})(e)?e:{integerValue:0}:null}class Gu extends yc{}class Ga extends yc{constructor(e){super(),this.elements=e}}function ev(r,e){const t=nv(e);for(const s of r.elements)t.some((o=>dr(o,s)))||t.push(s);return{arrayValue:{values:t}}}class Ka extends yc{constructor(e){super(),this.elements=e}}function tv(r,e){let t=nv(e);for(const s of r.elements)t=t.filter((o=>!dr(o,s)));return{arrayValue:{values:t}}}class Ku extends yc{constructor(e,t){super(),this.serializer=e,this.Ee=t}}function qg(r){return it(r.integerValue||r.doubleValue)}function nv(r){return of(r)&&r.arrayValue.values?r.arrayValue.values.slice():[]}function qI(r,e){return r.field.isEqual(e.field)&&(function(s,o){return s instanceof Ga&&o instanceof Ga||s instanceof Ka&&o instanceof Ka?To(s.elements,o.elements,dr):s instanceof Ku&&o instanceof Ku?dr(s.Ee,o.Ee):s instanceof Gu&&o instanceof Gu})(r.transform,e.transform)}class HI{constructor(e,t){this.version=e,this.transformResults=t}}class $n{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new $n}static exists(e){return new $n(void 0,e)}static updateTime(e){return new $n(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Vu(r,e){return r.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(r.updateTime):r.exists===void 0||r.exists===e.isFoundDocument()}class _c{}function rv(r,e){if(!r.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return r.isNoDocument()?new hf(r.key,$n.none()):new el(r.key,r.data,$n.none());{const t=r.data,s=tn.empty();let o=new yt(xt.comparator);for(let l of e.fields)if(!o.has(l)){let h=t.field(l);h===null&&l.length>1&&(l=l.popLast(),h=t.field(l)),h===null?s.delete(l):s.set(l,h),o=o.add(l)}return new Pi(r.key,s,new hn(o.toArray()),$n.none())}}function WI(r,e,t){r instanceof el?(function(o,l,h){const p=o.value.clone(),g=Wg(o.fieldTransforms,l,h.transformResults);p.setAll(g),l.convertToFoundDocument(h.version,p).setHasCommittedMutations()})(r,e,t):r instanceof Pi?(function(o,l,h){if(!Vu(o.precondition,l))return void l.convertToUnknownDocument(h.version);const p=Wg(o.fieldTransforms,l,h.transformResults),g=l.data;g.setAll(iv(o)),g.setAll(p),l.convertToFoundDocument(h.version,g).setHasCommittedMutations()})(r,e,t):(function(o,l,h){l.convertToNoDocument(h.version).setHasCommittedMutations()})(0,e,t)}function Ua(r,e,t,s){return r instanceof el?(function(l,h,p,g){if(!Vu(l.precondition,h))return p;const _=l.value.clone(),E=Gg(l.fieldTransforms,g,h);return _.setAll(E),h.convertToFoundDocument(h.version,_).setHasLocalMutations(),null})(r,e,t,s):r instanceof Pi?(function(l,h,p,g){if(!Vu(l.precondition,h))return p;const _=Gg(l.fieldTransforms,g,h),E=h.data;return E.setAll(iv(l)),E.setAll(_),h.convertToFoundDocument(h.version,E).setHasLocalMutations(),p===null?null:p.unionWith(l.fieldMask.fields).unionWith(l.fieldTransforms.map((T=>T.field)))})(r,e,t,s):(function(l,h,p){return Vu(l.precondition,h)?(h.convertToNoDocument(h.version).setHasLocalMutations(),null):p})(r,e,t)}function GI(r,e){let t=null;for(const s of r.fieldTransforms){const o=e.data.field(s.field),l=Z_(s.transform,o||null);l!=null&&(t===null&&(t=tn.empty()),t.set(s.field,l))}return t||null}function Hg(r,e){return r.type===e.type&&!!r.key.isEqual(e.key)&&!!r.precondition.isEqual(e.precondition)&&!!(function(s,o){return s===void 0&&o===void 0||!(!s||!o)&&To(s,o,((l,h)=>qI(l,h)))})(r.fieldTransforms,e.fieldTransforms)&&(r.type===0?r.value.isEqual(e.value):r.type!==1||r.data.isEqual(e.data)&&r.fieldMask.isEqual(e.fieldMask))}class el extends _c{constructor(e,t,s,o=[]){super(),this.key=e,this.value=t,this.precondition=s,this.fieldTransforms=o,this.type=0}getFieldMask(){return null}}class Pi extends _c{constructor(e,t,s,o,l=[]){super(),this.key=e,this.data=t,this.fieldMask=s,this.precondition=o,this.fieldTransforms=l,this.type=1}getFieldMask(){return this.fieldMask}}function iv(r){const e=new Map;return r.fieldMask.fields.forEach((t=>{if(!t.isEmpty()){const s=r.data.field(t);e.set(t,s)}})),e}function Wg(r,e,t){const s=new Map;Me(r.length===t.length,32656,{Ae:t.length,Re:r.length});for(let o=0;o<t.length;o++){const l=r[o],h=l.transform,p=e.data.field(l.field);s.set(l.field,$I(h,p,t[o]))}return s}function Gg(r,e,t){const s=new Map;for(const o of r){const l=o.transform,h=t.data.field(o.field);s.set(o.field,BI(l,h,e))}return s}class hf extends _c{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class KI extends _c{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QI{constructor(e,t,s,o){this.batchId=e,this.localWriteTime=t,this.baseMutations=s,this.mutations=o}applyToRemoteDocument(e,t){const s=t.mutationResults;for(let o=0;o<this.mutations.length;o++){const l=this.mutations[o];l.key.isEqual(e.key)&&WI(l,e,s[o])}}applyToLocalView(e,t){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(t=Ua(s,e,t,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(t=Ua(s,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const s=Y_();return this.mutations.forEach((o=>{const l=e.get(o.key),h=l.overlayedDocument;let p=this.applyToLocalView(h,l.mutatedFields);p=t.has(o.key)?null:p;const g=rv(h,p);g!==null&&s.set(o.key,g),h.isValidDocument()||h.convertToNoDocument(ve.min())})),s}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),ke())}isEqual(e){return this.batchId===e.batchId&&To(this.mutations,e.mutations,((t,s)=>Hg(t,s)))&&To(this.baseMutations,e.baseMutations,((t,s)=>Hg(t,s)))}}class df{constructor(e,t,s,o){this.batch=e,this.commitVersion=t,this.mutationResults=s,this.docVersions=o}static from(e,t,s){Me(e.mutations.length===s.length,58842,{Ve:e.mutations.length,me:s.length});let o=(function(){return MI})();const l=e.mutations;for(let h=0;h<l.length;h++)o=o.insert(l[h].key,s[h].version);return new df(e,t,s,o)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XI{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YI{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var at,De;function JI(r){switch(r){case B.OK:return ge(64938);case B.CANCELLED:case B.UNKNOWN:case B.DEADLINE_EXCEEDED:case B.RESOURCE_EXHAUSTED:case B.INTERNAL:case B.UNAVAILABLE:case B.UNAUTHENTICATED:return!1;case B.INVALID_ARGUMENT:case B.NOT_FOUND:case B.ALREADY_EXISTS:case B.PERMISSION_DENIED:case B.FAILED_PRECONDITION:case B.ABORTED:case B.OUT_OF_RANGE:case B.UNIMPLEMENTED:case B.DATA_LOSS:return!0;default:return ge(15467,{code:r})}}function sv(r){if(r===void 0)return Or("GRPC error has no .code"),B.UNKNOWN;switch(r){case at.OK:return B.OK;case at.CANCELLED:return B.CANCELLED;case at.UNKNOWN:return B.UNKNOWN;case at.DEADLINE_EXCEEDED:return B.DEADLINE_EXCEEDED;case at.RESOURCE_EXHAUSTED:return B.RESOURCE_EXHAUSTED;case at.INTERNAL:return B.INTERNAL;case at.UNAVAILABLE:return B.UNAVAILABLE;case at.UNAUTHENTICATED:return B.UNAUTHENTICATED;case at.INVALID_ARGUMENT:return B.INVALID_ARGUMENT;case at.NOT_FOUND:return B.NOT_FOUND;case at.ALREADY_EXISTS:return B.ALREADY_EXISTS;case at.PERMISSION_DENIED:return B.PERMISSION_DENIED;case at.FAILED_PRECONDITION:return B.FAILED_PRECONDITION;case at.ABORTED:return B.ABORTED;case at.OUT_OF_RANGE:return B.OUT_OF_RANGE;case at.UNIMPLEMENTED:return B.UNIMPLEMENTED;case at.DATA_LOSS:return B.DATA_LOSS;default:return ge(39323,{code:r})}}(De=at||(at={}))[De.OK=0]="OK",De[De.CANCELLED=1]="CANCELLED",De[De.UNKNOWN=2]="UNKNOWN",De[De.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",De[De.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",De[De.NOT_FOUND=5]="NOT_FOUND",De[De.ALREADY_EXISTS=6]="ALREADY_EXISTS",De[De.PERMISSION_DENIED=7]="PERMISSION_DENIED",De[De.UNAUTHENTICATED=16]="UNAUTHENTICATED",De[De.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",De[De.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",De[De.ABORTED=10]="ABORTED",De[De.OUT_OF_RANGE=11]="OUT_OF_RANGE",De[De.UNIMPLEMENTED=12]="UNIMPLEMENTED",De[De.INTERNAL=13]="INTERNAL",De[De.UNAVAILABLE=14]="UNAVAILABLE",De[De.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZI=new yi([4294967295,4294967295],0);function Kg(r){const e=R_().encode(r),t=new v_;return t.update(e),new Uint8Array(t.digest())}function Qg(r){const e=new DataView(r.buffer),t=e.getUint32(0,!0),s=e.getUint32(4,!0),o=e.getUint32(8,!0),l=e.getUint32(12,!0);return[new yi([t,s],0),new yi([o,l],0)]}class ff{constructor(e,t,s){if(this.bitmap=e,this.padding=t,this.hashCount=s,t<0||t>=8)throw new Da(`Invalid padding: ${t}`);if(s<0)throw new Da(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new Da(`Invalid hash count: ${s}`);if(e.length===0&&t!==0)throw new Da(`Invalid padding when bitmap length is 0: ${t}`);this.fe=8*e.length-t,this.ge=yi.fromNumber(this.fe)}pe(e,t,s){let o=e.add(t.multiply(yi.fromNumber(s)));return o.compare(ZI)===1&&(o=new yi([o.getBits(0),o.getBits(1)],0)),o.modulo(this.ge).toNumber()}ye(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.fe===0)return!1;const t=Kg(e),[s,o]=Qg(t);for(let l=0;l<this.hashCount;l++){const h=this.pe(s,o,l);if(!this.ye(h))return!1}return!0}static create(e,t,s){const o=e%8==0?0:8-e%8,l=new Uint8Array(Math.ceil(e/8)),h=new ff(l,o,t);return s.forEach((p=>h.insert(p))),h}insert(e){if(this.fe===0)return;const t=Kg(e),[s,o]=Qg(t);for(let l=0;l<this.hashCount;l++){const h=this.pe(s,o,l);this.we(h)}}we(e){const t=Math.floor(e/8),s=e%8;this.bitmap[t]|=1<<s}}class Da extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vc{constructor(e,t,s,o,l){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=s,this.documentUpdates=o,this.resolvedLimboDocuments=l}static createSynthesizedRemoteEventForCurrentChange(e,t,s){const o=new Map;return o.set(e,tl.createSynthesizedTargetChangeForCurrentChange(e,t,s)),new vc(ve.min(),o,new Ze(Se),br(),ke())}}class tl{constructor(e,t,s,o,l){this.resumeToken=e,this.current=t,this.addedDocuments=s,this.modifiedDocuments=o,this.removedDocuments=l}static createSynthesizedTargetChangeForCurrentChange(e,t,s){return new tl(s,t,ke(),ke(),ke())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ou{constructor(e,t,s,o){this.Se=e,this.removedTargetIds=t,this.key=s,this.be=o}}class ov{constructor(e,t){this.targetId=e,this.De=t}}class av{constructor(e,t,s=Nt.EMPTY_BYTE_STRING,o=null){this.state=e,this.targetIds=t,this.resumeToken=s,this.cause=o}}class Xg{constructor(){this.ve=0,this.Ce=Yg(),this.Fe=Nt.EMPTY_BYTE_STRING,this.Me=!1,this.xe=!0}get current(){return this.Me}get resumeToken(){return this.Fe}get Oe(){return this.ve!==0}get Ne(){return this.xe}Be(e){e.approximateByteSize()>0&&(this.xe=!0,this.Fe=e)}Le(){let e=ke(),t=ke(),s=ke();return this.Ce.forEach(((o,l)=>{switch(l){case 0:e=e.add(o);break;case 2:t=t.add(o);break;case 1:s=s.add(o);break;default:ge(38017,{changeType:l})}})),new tl(this.Fe,this.Me,e,t,s)}ke(){this.xe=!1,this.Ce=Yg()}qe(e,t){this.xe=!0,this.Ce=this.Ce.insert(e,t)}Qe(e){this.xe=!0,this.Ce=this.Ce.remove(e)}$e(){this.ve+=1}Ue(){this.ve-=1,Me(this.ve>=0,3241,{ve:this.ve})}Ke(){this.xe=!0,this.Me=!0}}class e1{constructor(e){this.We=e,this.Ge=new Map,this.ze=br(),this.je=Ru(),this.Je=Ru(),this.He=new Ze(Se)}Ye(e){for(const t of e.Se)e.be&&e.be.isFoundDocument()?this.Ze(t,e.be):this.Xe(t,e.key,e.be);for(const t of e.removedTargetIds)this.Xe(t,e.key,e.be)}et(e){this.forEachTarget(e,(t=>{const s=this.tt(t);switch(e.state){case 0:this.nt(t)&&s.Be(e.resumeToken);break;case 1:s.Ue(),s.Oe||s.ke(),s.Be(e.resumeToken);break;case 2:s.Ue(),s.Oe||this.removeTarget(t);break;case 3:this.nt(t)&&(s.Ke(),s.Be(e.resumeToken));break;case 4:this.nt(t)&&(this.rt(t),s.Be(e.resumeToken));break;default:ge(56790,{state:e.state})}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Ge.forEach(((s,o)=>{this.nt(o)&&t(o)}))}it(e){const t=e.targetId,s=e.De.count,o=this.st(t);if(o){const l=o.target;if(Ld(l))if(s===0){const h=new ce(l.path);this.Xe(t,h,jt.newNoDocument(h,ve.min()))}else Me(s===1,20013,{expectedCount:s});else{const h=this.ot(t);if(h!==s){const p=this._t(e),g=p?this.ut(p,e,h):1;if(g!==0){this.rt(t);const _=g===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.He=this.He.insert(t,_)}}}}}_t(e){const t=e.De.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:s="",padding:o=0},hashCount:l=0}=t;let h,p;try{h=Ii(s).toUint8Array()}catch(g){if(g instanceof D_)return wi("Decoding the base64 bloom filter in existence filter failed ("+g.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw g}try{p=new ff(h,o,l)}catch(g){return wi(g instanceof Da?"BloomFilter error: ":"Applying bloom filter failed: ",g),null}return p.fe===0?null:p}ut(e,t,s){return t.De.count===s-this.ht(e,t.targetId)?0:2}ht(e,t){const s=this.We.getRemoteKeysForTarget(t);let o=0;return s.forEach((l=>{const h=this.We.lt(),p=`projects/${h.projectId}/databases/${h.database}/documents/${l.path.canonicalString()}`;e.mightContain(p)||(this.Xe(t,l,null),o++)})),o}Pt(e){const t=new Map;this.Ge.forEach(((l,h)=>{const p=this.st(h);if(p){if(l.current&&Ld(p.target)){const g=new ce(p.target.path);this.Tt(g).has(h)||this.It(h,g)||this.Xe(h,g,jt.newNoDocument(g,e))}l.Ne&&(t.set(h,l.Le()),l.ke())}}));let s=ke();this.Je.forEach(((l,h)=>{let p=!0;h.forEachWhile((g=>{const _=this.st(g);return!_||_.purpose==="TargetPurposeLimboResolution"||(p=!1,!1)})),p&&(s=s.add(l))})),this.ze.forEach(((l,h)=>h.setReadTime(e)));const o=new vc(e,t,this.He,this.ze,s);return this.ze=br(),this.je=Ru(),this.Je=Ru(),this.He=new Ze(Se),o}Ze(e,t){if(!this.nt(e))return;const s=this.It(e,t.key)?2:0;this.tt(e).qe(t.key,s),this.ze=this.ze.insert(t.key,t),this.je=this.je.insert(t.key,this.Tt(t.key).add(e)),this.Je=this.Je.insert(t.key,this.dt(t.key).add(e))}Xe(e,t,s){if(!this.nt(e))return;const o=this.tt(e);this.It(e,t)?o.qe(t,1):o.Qe(t),this.Je=this.Je.insert(t,this.dt(t).delete(e)),this.Je=this.Je.insert(t,this.dt(t).add(e)),s&&(this.ze=this.ze.insert(t,s))}removeTarget(e){this.Ge.delete(e)}ot(e){const t=this.tt(e).Le();return this.We.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}$e(e){this.tt(e).$e()}tt(e){let t=this.Ge.get(e);return t||(t=new Xg,this.Ge.set(e,t)),t}dt(e){let t=this.Je.get(e);return t||(t=new yt(Se),this.Je=this.Je.insert(e,t)),t}Tt(e){let t=this.je.get(e);return t||(t=new yt(Se),this.je=this.je.insert(e,t)),t}nt(e){const t=this.st(e)!==null;return t||ne("WatchChangeAggregator","Detected inactive target",e),t}st(e){const t=this.Ge.get(e);return t&&t.Oe?null:this.We.Et(e)}rt(e){this.Ge.set(e,new Xg),this.We.getRemoteKeysForTarget(e).forEach((t=>{this.Xe(e,t,null)}))}It(e,t){return this.We.getRemoteKeysForTarget(e).has(t)}}function Ru(){return new Ze(ce.comparator)}function Yg(){return new Ze(ce.comparator)}const t1={asc:"ASCENDING",desc:"DESCENDING"},n1={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},r1={and:"AND",or:"OR"};class i1{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Ud(r,e){return r.useProto3Json||fc(e)?e:{value:e}}function Qu(r,e){return r.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function lv(r,e){return r.useProto3Json?e.toBase64():e.toUint8Array()}function s1(r,e){return Qu(r,e.toTimestamp())}function or(r){return Me(!!r,49232),ve.fromTimestamp((function(t){const s=Ti(t);return new Ke(s.seconds,s.nanos)})(r))}function pf(r,e){return jd(r,e).canonicalString()}function jd(r,e){const t=(function(o){return new He(["projects",o.projectId,"databases",o.database])})(r).child("documents");return e===void 0?t:t.child(e)}function uv(r){const e=He.fromString(r);return Me(pv(e),10190,{key:e.toString()}),e}function zd(r,e){return pf(r.databaseId,e.path)}function pd(r,e){const t=uv(e);if(t.get(1)!==r.databaseId.projectId)throw new te(B.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+r.databaseId.projectId);if(t.get(3)!==r.databaseId.database)throw new te(B.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+r.databaseId.database);return new ce(hv(t))}function cv(r,e){return pf(r.databaseId,e)}function o1(r){const e=uv(r);return e.length===4?He.emptyPath():hv(e)}function Bd(r){return new He(["projects",r.databaseId.projectId,"databases",r.databaseId.database]).canonicalString()}function hv(r){return Me(r.length>4&&r.get(4)==="documents",29091,{key:r.toString()}),r.popFirst(5)}function Jg(r,e,t){return{name:zd(r,e),fields:t.value.mapValue.fields}}function a1(r,e){let t;if("targetChange"in e){e.targetChange;const s=(function(_){return _==="NO_CHANGE"?0:_==="ADD"?1:_==="REMOVE"?2:_==="CURRENT"?3:_==="RESET"?4:ge(39313,{state:_})})(e.targetChange.targetChangeType||"NO_CHANGE"),o=e.targetChange.targetIds||[],l=(function(_,E){return _.useProto3Json?(Me(E===void 0||typeof E=="string",58123),Nt.fromBase64String(E||"")):(Me(E===void 0||E instanceof Buffer||E instanceof Uint8Array,16193),Nt.fromUint8Array(E||new Uint8Array))})(r,e.targetChange.resumeToken),h=e.targetChange.cause,p=h&&(function(_){const E=_.code===void 0?B.UNKNOWN:sv(_.code);return new te(E,_.message||"")})(h);t=new av(s,o,l,p||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const o=pd(r,s.document.name),l=or(s.document.updateTime),h=s.document.createTime?or(s.document.createTime):ve.min(),p=new tn({mapValue:{fields:s.document.fields}}),g=jt.newFoundDocument(o,l,h,p),_=s.targetIds||[],E=s.removedTargetIds||[];t=new Ou(_,E,g.key,g)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const o=pd(r,s.document),l=s.readTime?or(s.readTime):ve.min(),h=jt.newNoDocument(o,l),p=s.removedTargetIds||[];t=new Ou([],p,h.key,h)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const o=pd(r,s.document),l=s.removedTargetIds||[];t=new Ou([],l,o,null)}else{if(!("filter"in e))return ge(11601,{At:e});{e.filter;const s=e.filter;s.targetId;const{count:o=0,unchangedNames:l}=s,h=new YI(o,l),p=s.targetId;t=new ov(p,h)}}return t}function l1(r,e){let t;if(e instanceof el)t={update:Jg(r,e.key,e.value)};else if(e instanceof hf)t={delete:zd(r,e.key)};else if(e instanceof Pi)t={update:Jg(r,e.key,e.data),updateMask:y1(e.fieldMask)};else{if(!(e instanceof KI))return ge(16599,{Rt:e.type});t={verify:zd(r,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map((s=>(function(l,h){const p=h.transform;if(p instanceof Gu)return{fieldPath:h.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(p instanceof Ga)return{fieldPath:h.field.canonicalString(),appendMissingElements:{values:p.elements}};if(p instanceof Ka)return{fieldPath:h.field.canonicalString(),removeAllFromArray:{values:p.elements}};if(p instanceof Ku)return{fieldPath:h.field.canonicalString(),increment:p.Ee};throw ge(20930,{transform:h.transform})})(0,s)))),e.precondition.isNone||(t.currentDocument=(function(o,l){return l.updateTime!==void 0?{updateTime:s1(o,l.updateTime)}:l.exists!==void 0?{exists:l.exists}:ge(27497)})(r,e.precondition)),t}function u1(r,e){return r&&r.length>0?(Me(e!==void 0,14353),r.map((t=>(function(o,l){let h=o.updateTime?or(o.updateTime):or(l);return h.isEqual(ve.min())&&(h=or(l)),new HI(h,o.transformResults||[])})(t,e)))):[]}function c1(r,e){return{documents:[cv(r,e.path)]}}function h1(r,e){const t={structuredQuery:{}},s=e.path;let o;e.collectionGroup!==null?(o=s,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(o=s.popLast(),t.structuredQuery.from=[{collectionId:s.lastSegment()}]),t.parent=cv(r,o);const l=(function(_){if(_.length!==0)return fv(Hn.create(_,"and"))})(e.filters);l&&(t.structuredQuery.where=l);const h=(function(_){if(_.length!==0)return _.map((E=>(function(A){return{field:po(A.field),direction:p1(A.dir)}})(E)))})(e.orderBy);h&&(t.structuredQuery.orderBy=h);const p=Ud(r,e.limit);return p!==null&&(t.structuredQuery.limit=p),e.startAt&&(t.structuredQuery.startAt=(function(_){return{before:_.inclusive,values:_.position}})(e.startAt)),e.endAt&&(t.structuredQuery.endAt=(function(_){return{before:!_.inclusive,values:_.position}})(e.endAt)),{Vt:t,parent:o}}function d1(r){let e=o1(r.parent);const t=r.structuredQuery,s=t.from?t.from.length:0;let o=null;if(s>0){Me(s===1,65062);const E=t.from[0];E.allDescendants?o=E.collectionId:e=e.child(E.collectionId)}let l=[];t.where&&(l=(function(T){const A=dv(T);return A instanceof Hn&&B_(A)?A.getFilters():[A]})(t.where));let h=[];t.orderBy&&(h=(function(T){return T.map((A=>(function(W){return new Wu(mo(W.field),(function($){switch($){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(W.direction))})(A)))})(t.orderBy));let p=null;t.limit&&(p=(function(T){let A;return A=typeof T=="object"?T.value:T,fc(A)?null:A})(t.limit));let g=null;t.startAt&&(g=(function(T){const A=!!T.before,U=T.values||[];return new Hu(U,A)})(t.startAt));let _=null;return t.endAt&&(_=(function(T){const A=!T.before,U=T.values||[];return new Hu(U,A)})(t.endAt)),DI(e,o,h,l,p,"F",g,_)}function f1(r,e){const t=(function(o){switch(o){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ge(28987,{purpose:o})}})(e.purpose);return t==null?null:{"goog-listen-tags":t}}function dv(r){return r.unaryFilter!==void 0?(function(t){switch(t.unaryFilter.op){case"IS_NAN":const s=mo(t.unaryFilter.field);return lt.create(s,"==",{doubleValue:NaN});case"IS_NULL":const o=mo(t.unaryFilter.field);return lt.create(o,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const l=mo(t.unaryFilter.field);return lt.create(l,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const h=mo(t.unaryFilter.field);return lt.create(h,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return ge(61313);default:return ge(60726)}})(r):r.fieldFilter!==void 0?(function(t){return lt.create(mo(t.fieldFilter.field),(function(o){switch(o){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return ge(58110);default:return ge(50506)}})(t.fieldFilter.op),t.fieldFilter.value)})(r):r.compositeFilter!==void 0?(function(t){return Hn.create(t.compositeFilter.filters.map((s=>dv(s))),(function(o){switch(o){case"AND":return"and";case"OR":return"or";default:return ge(1026)}})(t.compositeFilter.op))})(r):ge(30097,{filter:r})}function p1(r){return t1[r]}function m1(r){return n1[r]}function g1(r){return r1[r]}function po(r){return{fieldPath:r.canonicalString()}}function mo(r){return xt.fromServerFormat(r.fieldPath)}function fv(r){return r instanceof lt?(function(t){if(t.op==="=="){if(Ug(t.value))return{unaryFilter:{field:po(t.field),op:"IS_NAN"}};if(Fg(t.value))return{unaryFilter:{field:po(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Ug(t.value))return{unaryFilter:{field:po(t.field),op:"IS_NOT_NAN"}};if(Fg(t.value))return{unaryFilter:{field:po(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:po(t.field),op:m1(t.op),value:t.value}}})(r):r instanceof Hn?(function(t){const s=t.getFilters().map((o=>fv(o)));return s.length===1?s[0]:{compositeFilter:{op:g1(t.op),filters:s}}})(r):ge(54877,{filter:r})}function y1(r){const e=[];return r.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function pv(r){return r.length>=4&&r.get(0)==="projects"&&r.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pi{constructor(e,t,s,o,l=ve.min(),h=ve.min(),p=Nt.EMPTY_BYTE_STRING,g=null){this.target=e,this.targetId=t,this.purpose=s,this.sequenceNumber=o,this.snapshotVersion=l,this.lastLimboFreeSnapshotVersion=h,this.resumeToken=p,this.expectedCount=g}withSequenceNumber(e){return new pi(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new pi(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new pi(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new pi(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _1{constructor(e){this.gt=e}}function v1(r){const e=d1({parent:r.parent,structuredQuery:r.structuredQuery});return r.limitType==="LAST"?Fd(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w1{constructor(){this.Dn=new E1}addToCollectionParentIndex(e,t){return this.Dn.add(t),q.resolve()}getCollectionParents(e,t){return q.resolve(this.Dn.getEntries(t))}addFieldIndex(e,t){return q.resolve()}deleteFieldIndex(e,t){return q.resolve()}deleteAllFieldIndexes(e){return q.resolve()}createTargetIndexes(e,t){return q.resolve()}getDocumentsMatchingTarget(e,t){return q.resolve(null)}getIndexType(e,t){return q.resolve(0)}getFieldIndexes(e,t){return q.resolve([])}getNextCollectionGroupToUpdate(e){return q.resolve(null)}getMinOffset(e,t){return q.resolve(Ei.min())}getMinOffsetFromCollectionGroup(e,t){return q.resolve(Ei.min())}updateCollectionGroup(e,t,s){return q.resolve()}updateIndexEntries(e,t){return q.resolve()}}class E1{constructor(){this.index={}}add(e){const t=e.lastSegment(),s=e.popLast(),o=this.index[t]||new yt(He.comparator),l=!o.has(s);return this.index[t]=o.add(s),l}has(e){const t=e.lastSegment(),s=e.popLast(),o=this.index[t];return o&&o.has(s)}getEntries(e){return(this.index[e]||new yt(He.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zg={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},mv=41943040;class en{static withCacheSize(e){return new en(e,en.DEFAULT_COLLECTION_PERCENTILE,en.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,s){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */en.DEFAULT_COLLECTION_PERCENTILE=10,en.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,en.DEFAULT=new en(mv,en.DEFAULT_COLLECTION_PERCENTILE,en.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),en.DISABLED=new en(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ao{constructor(e){this._r=e}next(){return this._r+=2,this._r}static ar(){return new Ao(0)}static ur(){return new Ao(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ey="LruGarbageCollector",T1=1048576;function ty([r,e],[t,s]){const o=Se(r,t);return o===0?Se(e,s):o}class I1{constructor(e){this.Tr=e,this.buffer=new yt(ty),this.Ir=0}dr(){return++this.Ir}Er(e){const t=[e,this.dr()];if(this.buffer.size<this.Tr)this.buffer=this.buffer.add(t);else{const s=this.buffer.last();ty(t,s)<0&&(this.buffer=this.buffer.delete(s).add(t))}}get maxValue(){return this.buffer.last()[0]}}class S1{constructor(e,t,s){this.garbageCollector=e,this.asyncQueue=t,this.localStore=s,this.Ar=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Rr(6e4)}stop(){this.Ar&&(this.Ar.cancel(),this.Ar=null)}get started(){return this.Ar!==null}Rr(e){ne(ey,`Garbage collection scheduled in ${e}ms`),this.Ar=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Ar=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){No(t)?ne(ey,"Ignoring IndexedDB error during garbage collection: ",t):await xo(t)}await this.Rr(3e5)}))}}class A1{constructor(e,t){this.Vr=e,this.params=t}calculateTargetCount(e,t){return this.Vr.mr(e).next((s=>Math.floor(t/100*s)))}nthSequenceNumber(e,t){if(t===0)return q.resolve(dc.ue);const s=new I1(t);return this.Vr.forEachTarget(e,(o=>s.Er(o.sequenceNumber))).next((()=>this.Vr.gr(e,(o=>s.Er(o))))).next((()=>s.maxValue))}removeTargets(e,t,s){return this.Vr.removeTargets(e,t,s)}removeOrphanedDocuments(e,t){return this.Vr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(ne("LruGarbageCollector","Garbage collection skipped; disabled"),q.resolve(Zg)):this.getCacheSize(e).next((s=>s<this.params.cacheSizeCollectionThreshold?(ne("LruGarbageCollector",`Garbage collection skipped; Cache size ${s} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Zg):this.pr(e,t)))}getCacheSize(e){return this.Vr.getCacheSize(e)}pr(e,t){let s,o,l,h,p,g,_;const E=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((T=>(T>this.params.maximumSequenceNumbersToCollect?(ne("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${T}`),o=this.params.maximumSequenceNumbersToCollect):o=T,h=Date.now(),this.nthSequenceNumber(e,o)))).next((T=>(s=T,p=Date.now(),this.removeTargets(e,s,t)))).next((T=>(l=T,g=Date.now(),this.removeOrphanedDocuments(e,s)))).next((T=>(_=Date.now(),ho()<=Re.DEBUG&&ne("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${h-E}ms
	Determined least recently used ${o} in `+(p-h)+`ms
	Removed ${l} targets in `+(g-p)+`ms
	Removed ${T} documents in `+(_-g)+`ms
Total Duration: ${_-E}ms`),q.resolve({didRun:!0,sequenceNumbersCollected:o,targetsRemoved:l,documentsRemoved:T}))))}}function C1(r,e){return new A1(r,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R1{constructor(){this.changes=new ys((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,jt.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const s=this.changes.get(t);return s!==void 0?q.resolve(s):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k1{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P1{constructor(e,t,s,o){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=s,this.indexManager=o}getDocument(e,t){let s=null;return this.documentOverlayCache.getOverlay(e,t).next((o=>(s=o,this.remoteDocumentCache.getEntry(e,t)))).next((o=>(s!==null&&Ua(s.mutation,o,hn.empty(),Ke.now()),o)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((s=>this.getLocalViewOfDocuments(e,s,ke()).next((()=>s))))}getLocalViewOfDocuments(e,t,s=ke()){const o=os();return this.populateOverlays(e,o,t).next((()=>this.computeViews(e,t,o,s).next((l=>{let h=Na();return l.forEach(((p,g)=>{h=h.insert(p,g.overlayedDocument)})),h}))))}getOverlayedDocuments(e,t){const s=os();return this.populateOverlays(e,s,t).next((()=>this.computeViews(e,t,s,ke())))}populateOverlays(e,t,s){const o=[];return s.forEach((l=>{t.has(l)||o.push(l)})),this.documentOverlayCache.getOverlays(e,o).next((l=>{l.forEach(((h,p)=>{t.set(h,p)}))}))}computeViews(e,t,s,o){let l=br();const h=Fa(),p=(function(){return Fa()})();return t.forEach(((g,_)=>{const E=s.get(_.key);o.has(_.key)&&(E===void 0||E.mutation instanceof Pi)?l=l.insert(_.key,_):E!==void 0?(h.set(_.key,E.mutation.getFieldMask()),Ua(E.mutation,_,E.mutation.getFieldMask(),Ke.now())):h.set(_.key,hn.empty())})),this.recalculateAndSaveOverlays(e,l).next((g=>(g.forEach(((_,E)=>h.set(_,E))),t.forEach(((_,E)=>{var T;return p.set(_,new k1(E,(T=h.get(_))!==null&&T!==void 0?T:null))})),p)))}recalculateAndSaveOverlays(e,t){const s=Fa();let o=new Ze(((h,p)=>h-p)),l=ke();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((h=>{for(const p of h)p.keys().forEach((g=>{const _=t.get(g);if(_===null)return;let E=s.get(g)||hn.empty();E=p.applyToLocalView(_,E),s.set(g,E);const T=(o.get(p.batchId)||ke()).add(g);o=o.insert(p.batchId,T)}))})).next((()=>{const h=[],p=o.getReverseIterator();for(;p.hasNext();){const g=p.getNext(),_=g.key,E=g.value,T=Y_();E.forEach((A=>{if(!l.has(A)){const U=rv(t.get(A),s.get(A));U!==null&&T.set(A,U),l=l.add(A)}})),h.push(this.documentOverlayCache.saveOverlays(e,_,T))}return q.waitFor(h)})).next((()=>s))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((s=>this.recalculateAndSaveOverlays(e,s)))}getDocumentsMatchingQuery(e,t,s,o){return(function(h){return ce.isDocumentKey(h.path)&&h.collectionGroup===null&&h.filters.length===0})(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):W_(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,s,o):this.getDocumentsMatchingCollectionQuery(e,t,s,o)}getNextDocuments(e,t,s,o){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,s,o).next((l=>{const h=o-l.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,s.largestBatchId,o-l.size):q.resolve(os());let p=$a,g=l;return h.next((_=>q.forEach(_,((E,T)=>(p<T.largestBatchId&&(p=T.largestBatchId),l.get(E)?q.resolve():this.remoteDocumentCache.getEntry(e,E).next((A=>{g=g.insert(E,A)}))))).next((()=>this.populateOverlays(e,_,l))).next((()=>this.computeViews(e,g,_,ke()))).next((E=>({batchId:p,changes:X_(E)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new ce(t)).next((s=>{let o=Na();return s.isFoundDocument()&&(o=o.insert(s.key,s)),o}))}getDocumentsMatchingCollectionGroupQuery(e,t,s,o){const l=t.collectionGroup;let h=Na();return this.indexManager.getCollectionParents(e,l).next((p=>q.forEach(p,(g=>{const _=(function(T,A){return new Za(A,null,T.explicitOrderBy.slice(),T.filters.slice(),T.limit,T.limitType,T.startAt,T.endAt)})(t,g.child(l));return this.getDocumentsMatchingCollectionQuery(e,_,s,o).next((E=>{E.forEach(((T,A)=>{h=h.insert(T,A)}))}))})).next((()=>h))))}getDocumentsMatchingCollectionQuery(e,t,s,o){let l;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,s.largestBatchId).next((h=>(l=h,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,s,l,o)))).next((h=>{l.forEach(((g,_)=>{const E=_.getKey();h.get(E)===null&&(h=h.insert(E,jt.newInvalidDocument(E)))}));let p=Na();return h.forEach(((g,_)=>{const E=l.get(g);E!==void 0&&Ua(E.mutation,_,hn.empty(),Ke.now()),gc(t,_)&&(p=p.insert(g,_))})),p}))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x1{constructor(e){this.serializer=e,this.Br=new Map,this.Lr=new Map}getBundleMetadata(e,t){return q.resolve(this.Br.get(t))}saveBundleMetadata(e,t){return this.Br.set(t.id,(function(o){return{id:o.id,version:o.version,createTime:or(o.createTime)}})(t)),q.resolve()}getNamedQuery(e,t){return q.resolve(this.Lr.get(t))}saveNamedQuery(e,t){return this.Lr.set(t.name,(function(o){return{name:o.name,query:v1(o.bundledQuery),readTime:or(o.readTime)}})(t)),q.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N1{constructor(){this.overlays=new Ze(ce.comparator),this.kr=new Map}getOverlay(e,t){return q.resolve(this.overlays.get(t))}getOverlays(e,t){const s=os();return q.forEach(t,(o=>this.getOverlay(e,o).next((l=>{l!==null&&s.set(o,l)})))).next((()=>s))}saveOverlays(e,t,s){return s.forEach(((o,l)=>{this.wt(e,t,l)})),q.resolve()}removeOverlaysForBatchId(e,t,s){const o=this.kr.get(s);return o!==void 0&&(o.forEach((l=>this.overlays=this.overlays.remove(l))),this.kr.delete(s)),q.resolve()}getOverlaysForCollection(e,t,s){const o=os(),l=t.length+1,h=new ce(t.child("")),p=this.overlays.getIteratorFrom(h);for(;p.hasNext();){const g=p.getNext().value,_=g.getKey();if(!t.isPrefixOf(_.path))break;_.path.length===l&&g.largestBatchId>s&&o.set(g.getKey(),g)}return q.resolve(o)}getOverlaysForCollectionGroup(e,t,s,o){let l=new Ze(((_,E)=>_-E));const h=this.overlays.getIterator();for(;h.hasNext();){const _=h.getNext().value;if(_.getKey().getCollectionGroup()===t&&_.largestBatchId>s){let E=l.get(_.largestBatchId);E===null&&(E=os(),l=l.insert(_.largestBatchId,E)),E.set(_.getKey(),_)}}const p=os(),g=l.getIterator();for(;g.hasNext()&&(g.getNext().value.forEach(((_,E)=>p.set(_,E))),!(p.size()>=o)););return q.resolve(p)}wt(e,t,s){const o=this.overlays.get(s.key);if(o!==null){const h=this.kr.get(o.largestBatchId).delete(s.key);this.kr.set(o.largestBatchId,h)}this.overlays=this.overlays.insert(s.key,new XI(t,s));let l=this.kr.get(t);l===void 0&&(l=ke(),this.kr.set(t,l)),this.kr.set(t,l.add(s.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D1{constructor(){this.sessionToken=Nt.EMPTY_BYTE_STRING}getSessionToken(e){return q.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,q.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mf{constructor(){this.qr=new yt(St.Qr),this.$r=new yt(St.Ur)}isEmpty(){return this.qr.isEmpty()}addReference(e,t){const s=new St(e,t);this.qr=this.qr.add(s),this.$r=this.$r.add(s)}Kr(e,t){e.forEach((s=>this.addReference(s,t)))}removeReference(e,t){this.Wr(new St(e,t))}Gr(e,t){e.forEach((s=>this.removeReference(s,t)))}zr(e){const t=new ce(new He([])),s=new St(t,e),o=new St(t,e+1),l=[];return this.$r.forEachInRange([s,o],(h=>{this.Wr(h),l.push(h.key)})),l}jr(){this.qr.forEach((e=>this.Wr(e)))}Wr(e){this.qr=this.qr.delete(e),this.$r=this.$r.delete(e)}Jr(e){const t=new ce(new He([])),s=new St(t,e),o=new St(t,e+1);let l=ke();return this.$r.forEachInRange([s,o],(h=>{l=l.add(h.key)})),l}containsKey(e){const t=new St(e,0),s=this.qr.firstAfterOrEqual(t);return s!==null&&e.isEqual(s.key)}}class St{constructor(e,t){this.key=e,this.Hr=t}static Qr(e,t){return ce.comparator(e.key,t.key)||Se(e.Hr,t.Hr)}static Ur(e,t){return Se(e.Hr,t.Hr)||ce.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V1{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.er=1,this.Yr=new yt(St.Qr)}checkEmpty(e){return q.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,s,o){const l=this.er;this.er++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const h=new QI(l,t,s,o);this.mutationQueue.push(h);for(const p of o)this.Yr=this.Yr.add(new St(p.key,l)),this.indexManager.addToCollectionParentIndex(e,p.key.path.popLast());return q.resolve(h)}lookupMutationBatch(e,t){return q.resolve(this.Zr(t))}getNextMutationBatchAfterBatchId(e,t){const s=t+1,o=this.Xr(s),l=o<0?0:o;return q.resolve(this.mutationQueue.length>l?this.mutationQueue[l]:null)}getHighestUnacknowledgedBatchId(){return q.resolve(this.mutationQueue.length===0?rf:this.er-1)}getAllMutationBatches(e){return q.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const s=new St(t,0),o=new St(t,Number.POSITIVE_INFINITY),l=[];return this.Yr.forEachInRange([s,o],(h=>{const p=this.Zr(h.Hr);l.push(p)})),q.resolve(l)}getAllMutationBatchesAffectingDocumentKeys(e,t){let s=new yt(Se);return t.forEach((o=>{const l=new St(o,0),h=new St(o,Number.POSITIVE_INFINITY);this.Yr.forEachInRange([l,h],(p=>{s=s.add(p.Hr)}))})),q.resolve(this.ei(s))}getAllMutationBatchesAffectingQuery(e,t){const s=t.path,o=s.length+1;let l=s;ce.isDocumentKey(l)||(l=l.child(""));const h=new St(new ce(l),0);let p=new yt(Se);return this.Yr.forEachWhile((g=>{const _=g.key.path;return!!s.isPrefixOf(_)&&(_.length===o&&(p=p.add(g.Hr)),!0)}),h),q.resolve(this.ei(p))}ei(e){const t=[];return e.forEach((s=>{const o=this.Zr(s);o!==null&&t.push(o)})),t}removeMutationBatch(e,t){Me(this.ti(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let s=this.Yr;return q.forEach(t.mutations,(o=>{const l=new St(o.key,t.batchId);return s=s.delete(l),this.referenceDelegate.markPotentiallyOrphaned(e,o.key)})).next((()=>{this.Yr=s}))}rr(e){}containsKey(e,t){const s=new St(t,0),o=this.Yr.firstAfterOrEqual(s);return q.resolve(t.isEqual(o&&o.key))}performConsistencyCheck(e){return this.mutationQueue.length,q.resolve()}ti(e,t){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const t=this.Xr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O1{constructor(e){this.ni=e,this.docs=(function(){return new Ze(ce.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const s=t.key,o=this.docs.get(s),l=o?o.size:0,h=this.ni(t);return this.docs=this.docs.insert(s,{document:t.mutableCopy(),size:h}),this.size+=h-l,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const s=this.docs.get(t);return q.resolve(s?s.document.mutableCopy():jt.newInvalidDocument(t))}getEntries(e,t){let s=br();return t.forEach((o=>{const l=this.docs.get(o);s=s.insert(o,l?l.document.mutableCopy():jt.newInvalidDocument(o))})),q.resolve(s)}getDocumentsMatchingQuery(e,t,s,o){let l=br();const h=t.path,p=new ce(h.child("__id-9223372036854775808__")),g=this.docs.getIteratorFrom(p);for(;g.hasNext();){const{key:_,value:{document:E}}=g.getNext();if(!h.isPrefixOf(_.path))break;_.path.length>h.length+1||cI(uI(E),s)<=0||(o.has(E.key)||gc(t,E))&&(l=l.insert(E.key,E.mutableCopy()))}return q.resolve(l)}getAllFromCollectionGroup(e,t,s,o){ge(9500)}ri(e,t){return q.forEach(this.docs,(s=>t(s)))}newChangeBuffer(e){return new b1(this)}getSize(e){return q.resolve(this.size)}}class b1 extends R1{constructor(e){super(),this.Or=e}applyChanges(e){const t=[];return this.changes.forEach(((s,o)=>{o.isValidDocument()?t.push(this.Or.addEntry(e,o)):this.Or.removeEntry(s)})),q.waitFor(t)}getFromCache(e,t){return this.Or.getEntry(e,t)}getAllFromCache(e,t){return this.Or.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L1{constructor(e){this.persistence=e,this.ii=new ys((t=>af(t)),lf),this.lastRemoteSnapshotVersion=ve.min(),this.highestTargetId=0,this.si=0,this.oi=new mf,this.targetCount=0,this._i=Ao.ar()}forEachTarget(e,t){return this.ii.forEach(((s,o)=>t(o))),q.resolve()}getLastRemoteSnapshotVersion(e){return q.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return q.resolve(this.si)}allocateTargetId(e){return this.highestTargetId=this._i.next(),q.resolve(this.highestTargetId)}setTargetsMetadata(e,t,s){return s&&(this.lastRemoteSnapshotVersion=s),t>this.si&&(this.si=t),q.resolve()}hr(e){this.ii.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this._i=new Ao(t),this.highestTargetId=t),e.sequenceNumber>this.si&&(this.si=e.sequenceNumber)}addTargetData(e,t){return this.hr(t),this.targetCount+=1,q.resolve()}updateTargetData(e,t){return this.hr(t),q.resolve()}removeTargetData(e,t){return this.ii.delete(t.target),this.oi.zr(t.targetId),this.targetCount-=1,q.resolve()}removeTargets(e,t,s){let o=0;const l=[];return this.ii.forEach(((h,p)=>{p.sequenceNumber<=t&&s.get(p.targetId)===null&&(this.ii.delete(h),l.push(this.removeMatchingKeysForTargetId(e,p.targetId)),o++)})),q.waitFor(l).next((()=>o))}getTargetCount(e){return q.resolve(this.targetCount)}getTargetData(e,t){const s=this.ii.get(t)||null;return q.resolve(s)}addMatchingKeys(e,t,s){return this.oi.Kr(t,s),q.resolve()}removeMatchingKeys(e,t,s){this.oi.Gr(t,s);const o=this.persistence.referenceDelegate,l=[];return o&&t.forEach((h=>{l.push(o.markPotentiallyOrphaned(e,h))})),q.waitFor(l)}removeMatchingKeysForTargetId(e,t){return this.oi.zr(t),q.resolve()}getMatchingKeysForTargetId(e,t){const s=this.oi.Jr(t);return q.resolve(s)}containsKey(e,t){return q.resolve(this.oi.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gv{constructor(e,t){this.ai={},this.overlays={},this.ui=new dc(0),this.ci=!1,this.ci=!0,this.li=new D1,this.referenceDelegate=e(this),this.hi=new L1(this),this.indexManager=new w1,this.remoteDocumentCache=(function(o){return new O1(o)})((s=>this.referenceDelegate.Pi(s))),this.serializer=new _1(t),this.Ti=new x1(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ci=!1,Promise.resolve()}get started(){return this.ci}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new N1,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let s=this.ai[e.toKey()];return s||(s=new V1(t,this.referenceDelegate),this.ai[e.toKey()]=s),s}getGlobalsCache(){return this.li}getTargetCache(){return this.hi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ti}runTransaction(e,t,s){ne("MemoryPersistence","Starting transaction:",e);const o=new M1(this.ui.next());return this.referenceDelegate.Ii(),s(o).next((l=>this.referenceDelegate.di(o).next((()=>l)))).toPromise().then((l=>(o.raiseOnCommittedEvent(),l)))}Ei(e,t){return q.or(Object.values(this.ai).map((s=>()=>s.containsKey(e,t))))}}class M1 extends dI{constructor(e){super(),this.currentSequenceNumber=e}}class gf{constructor(e){this.persistence=e,this.Ai=new mf,this.Ri=null}static Vi(e){return new gf(e)}get mi(){if(this.Ri)return this.Ri;throw ge(60996)}addReference(e,t,s){return this.Ai.addReference(s,t),this.mi.delete(s.toString()),q.resolve()}removeReference(e,t,s){return this.Ai.removeReference(s,t),this.mi.add(s.toString()),q.resolve()}markPotentiallyOrphaned(e,t){return this.mi.add(t.toString()),q.resolve()}removeTarget(e,t){this.Ai.zr(t.targetId).forEach((o=>this.mi.add(o.toString())));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,t.targetId).next((o=>{o.forEach((l=>this.mi.add(l.toString())))})).next((()=>s.removeTargetData(e,t)))}Ii(){this.Ri=new Set}di(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return q.forEach(this.mi,(s=>{const o=ce.fromPath(s);return this.fi(e,o).next((l=>{l||t.removeEntry(o,ve.min())}))})).next((()=>(this.Ri=null,t.apply(e))))}updateLimboDocument(e,t){return this.fi(e,t).next((s=>{s?this.mi.delete(t.toString()):this.mi.add(t.toString())}))}Pi(e){return 0}fi(e,t){return q.or([()=>q.resolve(this.Ai.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ei(e,t)])}}class Xu{constructor(e,t){this.persistence=e,this.gi=new ys((s=>mI(s.path)),((s,o)=>s.isEqual(o))),this.garbageCollector=C1(this,t)}static Vi(e,t){return new Xu(e,t)}Ii(){}di(e){return q.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}mr(e){const t=this.yr(e);return this.persistence.getTargetCache().getTargetCount(e).next((s=>t.next((o=>s+o))))}yr(e){let t=0;return this.gr(e,(s=>{t++})).next((()=>t))}gr(e,t){return q.forEach(this.gi,((s,o)=>this.Sr(e,s,o).next((l=>l?q.resolve():t(o)))))}removeTargets(e,t,s){return this.persistence.getTargetCache().removeTargets(e,t,s)}removeOrphanedDocuments(e,t){let s=0;const o=this.persistence.getRemoteDocumentCache(),l=o.newChangeBuffer();return o.ri(e,(h=>this.Sr(e,h,t).next((p=>{p||(s++,l.removeEntry(h,ve.min()))})))).next((()=>l.apply(e))).next((()=>s))}markPotentiallyOrphaned(e,t){return this.gi.set(t,e.currentSequenceNumber),q.resolve()}removeTarget(e,t){const s=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,s)}addReference(e,t,s){return this.gi.set(s,e.currentSequenceNumber),q.resolve()}removeReference(e,t,s){return this.gi.set(s,e.currentSequenceNumber),q.resolve()}updateLimboDocument(e,t){return this.gi.set(t,e.currentSequenceNumber),q.resolve()}Pi(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Nu(e.data.value)),t}Sr(e,t,s){return q.or([()=>this.persistence.Ei(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const o=this.gi.get(t);return q.resolve(o!==void 0&&o>s)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yf{constructor(e,t,s,o){this.targetId=e,this.fromCache=t,this.Is=s,this.ds=o}static Es(e,t){let s=ke(),o=ke();for(const l of t.docChanges)switch(l.type){case 0:s=s.add(l.doc.key);break;case 1:o=o.add(l.doc.key)}return new yf(e,t.fromCache,s,o)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F1{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U1{constructor(){this.As=!1,this.Rs=!1,this.Vs=100,this.fs=(function(){return xE()?8:fI(zt())>0?6:4})()}initialize(e,t){this.gs=e,this.indexManager=t,this.As=!0}getDocumentsMatchingQuery(e,t,s,o){const l={result:null};return this.ps(e,t).next((h=>{l.result=h})).next((()=>{if(!l.result)return this.ys(e,t,o,s).next((h=>{l.result=h}))})).next((()=>{if(l.result)return;const h=new F1;return this.ws(e,t,h).next((p=>{if(l.result=p,this.Rs)return this.Ss(e,t,h,p.size)}))})).next((()=>l.result))}Ss(e,t,s,o){return s.documentReadCount<this.Vs?(ho()<=Re.DEBUG&&ne("QueryEngine","SDK will not create cache indexes for query:",fo(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),q.resolve()):(ho()<=Re.DEBUG&&ne("QueryEngine","Query:",fo(t),"scans",s.documentReadCount,"local documents and returns",o,"documents as results."),s.documentReadCount>this.fs*o?(ho()<=Re.DEBUG&&ne("QueryEngine","The SDK decides to create cache indexes for query:",fo(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,sr(t))):q.resolve())}ps(e,t){if($g(t))return q.resolve(null);let s=sr(t);return this.indexManager.getIndexType(e,s).next((o=>o===0?null:(t.limit!==null&&o===1&&(t=Fd(t,null,"F"),s=sr(t)),this.indexManager.getDocumentsMatchingTarget(e,s).next((l=>{const h=ke(...l);return this.gs.getDocuments(e,h).next((p=>this.indexManager.getMinOffset(e,s).next((g=>{const _=this.bs(t,p);return this.Ds(t,_,h,g.readTime)?this.ps(e,Fd(t,null,"F")):this.vs(e,_,t,g)}))))})))))}ys(e,t,s,o){return $g(t)||o.isEqual(ve.min())?q.resolve(null):this.gs.getDocuments(e,s).next((l=>{const h=this.bs(t,l);return this.Ds(t,h,s,o)?q.resolve(null):(ho()<=Re.DEBUG&&ne("QueryEngine","Re-using previous result from %s to execute query: %s",o.toString(),fo(t)),this.vs(e,h,t,lI(o,$a)).next((p=>p)))}))}bs(e,t){let s=new yt(K_(e));return t.forEach(((o,l)=>{gc(e,l)&&(s=s.add(l))})),s}Ds(e,t,s,o){if(e.limit===null)return!1;if(s.size!==t.size)return!0;const l=e.limitType==="F"?t.last():t.first();return!!l&&(l.hasPendingWrites||l.version.compareTo(o)>0)}ws(e,t,s){return ho()<=Re.DEBUG&&ne("QueryEngine","Using full collection scan to execute query:",fo(t)),this.gs.getDocumentsMatchingQuery(e,t,Ei.min(),s)}vs(e,t,s,o){return this.gs.getDocumentsMatchingQuery(e,s,o).next((l=>(t.forEach((h=>{l=l.insert(h.key,h)})),l)))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _f="LocalStore",j1=3e8;class z1{constructor(e,t,s,o){this.persistence=e,this.Cs=t,this.serializer=o,this.Fs=new Ze(Se),this.Ms=new ys((l=>af(l)),lf),this.xs=new Map,this.Os=e.getRemoteDocumentCache(),this.hi=e.getTargetCache(),this.Ti=e.getBundleCache(),this.Ns(s)}Ns(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new P1(this.Os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Os.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.Fs)))}}function B1(r,e,t,s){return new z1(r,e,t,s)}async function yv(r,e){const t=we(r);return await t.persistence.runTransaction("Handle user change","readonly",(s=>{let o;return t.mutationQueue.getAllMutationBatches(s).next((l=>(o=l,t.Ns(e),t.mutationQueue.getAllMutationBatches(s)))).next((l=>{const h=[],p=[];let g=ke();for(const _ of o){h.push(_.batchId);for(const E of _.mutations)g=g.add(E.key)}for(const _ of l){p.push(_.batchId);for(const E of _.mutations)g=g.add(E.key)}return t.localDocuments.getDocuments(s,g).next((_=>({Bs:_,removedBatchIds:h,addedBatchIds:p})))}))}))}function $1(r,e){const t=we(r);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",(s=>{const o=e.batch.keys(),l=t.Os.newChangeBuffer({trackRemovals:!0});return(function(p,g,_,E){const T=_.batch,A=T.keys();let U=q.resolve();return A.forEach((W=>{U=U.next((()=>E.getEntry(g,W))).next((X=>{const $=_.docVersions.get(W);Me($!==null,48541),X.version.compareTo($)<0&&(T.applyToRemoteDocument(X,_),X.isValidDocument()&&(X.setReadTime(_.commitVersion),E.addEntry(X)))}))})),U.next((()=>p.mutationQueue.removeMutationBatch(g,T)))})(t,s,e,l).next((()=>l.apply(s))).next((()=>t.mutationQueue.performConsistencyCheck(s))).next((()=>t.documentOverlayCache.removeOverlaysForBatchId(s,o,e.batch.batchId))).next((()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,(function(p){let g=ke();for(let _=0;_<p.mutationResults.length;++_)p.mutationResults[_].transformResults.length>0&&(g=g.add(p.batch.mutations[_].key));return g})(e)))).next((()=>t.localDocuments.getDocuments(s,o)))}))}function _v(r){const e=we(r);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.hi.getLastRemoteSnapshotVersion(t)))}function q1(r,e){const t=we(r),s=e.snapshotVersion;let o=t.Fs;return t.persistence.runTransaction("Apply remote event","readwrite-primary",(l=>{const h=t.Os.newChangeBuffer({trackRemovals:!0});o=t.Fs;const p=[];e.targetChanges.forEach(((E,T)=>{const A=o.get(T);if(!A)return;p.push(t.hi.removeMatchingKeys(l,E.removedDocuments,T).next((()=>t.hi.addMatchingKeys(l,E.addedDocuments,T))));let U=A.withSequenceNumber(l.currentSequenceNumber);e.targetMismatches.get(T)!==null?U=U.withResumeToken(Nt.EMPTY_BYTE_STRING,ve.min()).withLastLimboFreeSnapshotVersion(ve.min()):E.resumeToken.approximateByteSize()>0&&(U=U.withResumeToken(E.resumeToken,s)),o=o.insert(T,U),(function(X,$,le){return X.resumeToken.approximateByteSize()===0||$.snapshotVersion.toMicroseconds()-X.snapshotVersion.toMicroseconds()>=j1?!0:le.addedDocuments.size+le.modifiedDocuments.size+le.removedDocuments.size>0})(A,U,E)&&p.push(t.hi.updateTargetData(l,U))}));let g=br(),_=ke();if(e.documentUpdates.forEach((E=>{e.resolvedLimboDocuments.has(E)&&p.push(t.persistence.referenceDelegate.updateLimboDocument(l,E))})),p.push(H1(l,h,e.documentUpdates).next((E=>{g=E.Ls,_=E.ks}))),!s.isEqual(ve.min())){const E=t.hi.getLastRemoteSnapshotVersion(l).next((T=>t.hi.setTargetsMetadata(l,l.currentSequenceNumber,s)));p.push(E)}return q.waitFor(p).next((()=>h.apply(l))).next((()=>t.localDocuments.getLocalViewOfDocuments(l,g,_))).next((()=>g))})).then((l=>(t.Fs=o,l)))}function H1(r,e,t){let s=ke(),o=ke();return t.forEach((l=>s=s.add(l))),e.getEntries(r,s).next((l=>{let h=br();return t.forEach(((p,g)=>{const _=l.get(p);g.isFoundDocument()!==_.isFoundDocument()&&(o=o.add(p)),g.isNoDocument()&&g.version.isEqual(ve.min())?(e.removeEntry(p,g.readTime),h=h.insert(p,g)):!_.isValidDocument()||g.version.compareTo(_.version)>0||g.version.compareTo(_.version)===0&&_.hasPendingWrites?(e.addEntry(g),h=h.insert(p,g)):ne(_f,"Ignoring outdated watch update for ",p,". Current version:",_.version," Watch version:",g.version)})),{Ls:h,ks:o}}))}function W1(r,e){const t=we(r);return t.persistence.runTransaction("Get next mutation batch","readonly",(s=>(e===void 0&&(e=rf),t.mutationQueue.getNextMutationBatchAfterBatchId(s,e))))}function G1(r,e){const t=we(r);return t.persistence.runTransaction("Allocate target","readwrite",(s=>{let o;return t.hi.getTargetData(s,e).next((l=>l?(o=l,q.resolve(o)):t.hi.allocateTargetId(s).next((h=>(o=new pi(e,h,"TargetPurposeListen",s.currentSequenceNumber),t.hi.addTargetData(s,o).next((()=>o)))))))})).then((s=>{const o=t.Fs.get(s.targetId);return(o===null||s.snapshotVersion.compareTo(o.snapshotVersion)>0)&&(t.Fs=t.Fs.insert(s.targetId,s),t.Ms.set(e,s.targetId)),s}))}async function $d(r,e,t){const s=we(r),o=s.Fs.get(e),l=t?"readwrite":"readwrite-primary";try{t||await s.persistence.runTransaction("Release target",l,(h=>s.persistence.referenceDelegate.removeTarget(h,o)))}catch(h){if(!No(h))throw h;ne(_f,`Failed to update sequence numbers for target ${e}: ${h}`)}s.Fs=s.Fs.remove(e),s.Ms.delete(o.target)}function ny(r,e,t){const s=we(r);let o=ve.min(),l=ke();return s.persistence.runTransaction("Execute query","readwrite",(h=>(function(g,_,E){const T=we(g),A=T.Ms.get(E);return A!==void 0?q.resolve(T.Fs.get(A)):T.hi.getTargetData(_,E)})(s,h,sr(e)).next((p=>{if(p)return o=p.lastLimboFreeSnapshotVersion,s.hi.getMatchingKeysForTargetId(h,p.targetId).next((g=>{l=g}))})).next((()=>s.Cs.getDocumentsMatchingQuery(h,e,t?o:ve.min(),t?l:ke()))).next((p=>(K1(s,OI(e),p),{documents:p,qs:l})))))}function K1(r,e,t){let s=r.xs.get(e)||ve.min();t.forEach(((o,l)=>{l.readTime.compareTo(s)>0&&(s=l.readTime)})),r.xs.set(e,s)}class ry{constructor(){this.activeTargetIds=jI()}Gs(e){this.activeTargetIds=this.activeTargetIds.add(e)}zs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Q1{constructor(){this.Fo=new ry,this.Mo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,s){}addLocalQueryTarget(e,t=!0){return t&&this.Fo.Gs(e),this.Mo[e]||"not-current"}updateQueryState(e,t,s){this.Mo[e]=t}removeLocalQueryTarget(e){this.Fo.zs(e)}isLocalQueryTarget(e){return this.Fo.activeTargetIds.has(e)}clearQueryState(e){delete this.Mo[e]}getAllActiveQueryTargets(){return this.Fo.activeTargetIds}isActiveQueryTarget(e){return this.Fo.activeTargetIds.has(e)}start(){return this.Fo=new ry,Promise.resolve()}handleUserChange(e,t,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X1{xo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iy="ConnectivityMonitor";class sy{constructor(){this.Oo=()=>this.No(),this.Bo=()=>this.Lo(),this.ko=[],this.qo()}xo(e){this.ko.push(e)}shutdown(){window.removeEventListener("online",this.Oo),window.removeEventListener("offline",this.Bo)}qo(){window.addEventListener("online",this.Oo),window.addEventListener("offline",this.Bo)}No(){ne(iy,"Network connectivity changed: AVAILABLE");for(const e of this.ko)e(0)}Lo(){ne(iy,"Network connectivity changed: UNAVAILABLE");for(const e of this.ko)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ku=null;function qd(){return ku===null?ku=(function(){return 268435456+Math.round(2147483648*Math.random())})():ku++,"0x"+ku.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const md="RestConnection",Y1={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class J1{get Qo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.$o=t+"://"+e.host,this.Uo=`projects/${s}/databases/${o}`,this.Ko=this.databaseId.database===$u?`project_id=${s}`:`project_id=${s}&database_id=${o}`}Wo(e,t,s,o,l){const h=qd(),p=this.Go(e,t.toUriEncodedString());ne(md,`Sending RPC '${e}' ${h}:`,p,s);const g={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.Ko};this.zo(g,o,l);const{host:_}=new URL(p),E=Ro(_);return this.jo(e,p,g,s,E).then((T=>(ne(md,`Received RPC '${e}' ${h}: `,T),T)),(T=>{throw wi(md,`RPC '${e}' ${h} failed with error: `,T,"url: ",p,"request:",s),T}))}Jo(e,t,s,o,l,h){return this.Wo(e,t,s,o,l)}zo(e,t,s){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+Po})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((o,l)=>e[l]=o)),s&&s.headers.forEach(((o,l)=>e[l]=o))}Go(e,t){const s=Y1[e];return`${this.$o}/v1/${t}:${s}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z1{constructor(e){this.Ho=e.Ho,this.Yo=e.Yo}Zo(e){this.Xo=e}e_(e){this.t_=e}n_(e){this.r_=e}onMessage(e){this.i_=e}close(){this.Yo()}send(e){this.Ho(e)}s_(){this.Xo()}o_(){this.t_()}__(e){this.r_(e)}a_(e){this.i_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ft="WebChannelConnection";class eS extends J1{constructor(e){super(e),this.u_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}jo(e,t,s,o,l){const h=qd();return new Promise(((p,g)=>{const _=new w_;_.setWithCredentials(!0),_.listenOnce(E_.COMPLETE,(()=>{try{switch(_.getLastErrorCode()){case xu.NO_ERROR:const T=_.getResponseJson();ne(Ft,`XHR for RPC '${e}' ${h} received:`,JSON.stringify(T)),p(T);break;case xu.TIMEOUT:ne(Ft,`RPC '${e}' ${h} timed out`),g(new te(B.DEADLINE_EXCEEDED,"Request time out"));break;case xu.HTTP_ERROR:const A=_.getStatus();if(ne(Ft,`RPC '${e}' ${h} failed with status:`,A,"response text:",_.getResponseText()),A>0){let U=_.getResponseJson();Array.isArray(U)&&(U=U[0]);const W=U==null?void 0:U.error;if(W&&W.status&&W.message){const X=(function(le){const he=le.toLowerCase().replace(/_/g,"-");return Object.values(B).indexOf(he)>=0?he:B.UNKNOWN})(W.status);g(new te(X,W.message))}else g(new te(B.UNKNOWN,"Server responded with status "+_.getStatus()))}else g(new te(B.UNAVAILABLE,"Connection failed."));break;default:ge(9055,{c_:e,streamId:h,l_:_.getLastErrorCode(),h_:_.getLastError()})}}finally{ne(Ft,`RPC '${e}' ${h} completed.`)}}));const E=JSON.stringify(o);ne(Ft,`RPC '${e}' ${h} sending request:`,o),_.send(t,"POST",E,s,15)}))}P_(e,t,s){const o=qd(),l=[this.$o,"/","google.firestore.v1.Firestore","/",e,"/channel"],h=S_(),p=I_(),g={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},_=this.longPollingOptions.timeoutSeconds;_!==void 0&&(g.longPollingTimeout=Math.round(1e3*_)),this.useFetchStreams&&(g.useFetchStreams=!0),this.zo(g.initMessageHeaders,t,s),g.encodeInitMessageHeaders=!0;const E=l.join("");ne(Ft,`Creating RPC '${e}' stream ${o}: ${E}`,g);const T=h.createWebChannel(E,g);this.T_(T);let A=!1,U=!1;const W=new Z1({Ho:$=>{U?ne(Ft,`Not sending because RPC '${e}' stream ${o} is closed:`,$):(A||(ne(Ft,`Opening RPC '${e}' stream ${o} transport.`),T.open(),A=!0),ne(Ft,`RPC '${e}' stream ${o} sending:`,$),T.send($))},Yo:()=>T.close()}),X=($,le,he)=>{$.listen(le,(me=>{try{he(me)}catch(Ee){setTimeout((()=>{throw Ee}),0)}}))};return X(T,xa.EventType.OPEN,(()=>{U||(ne(Ft,`RPC '${e}' stream ${o} transport opened.`),W.s_())})),X(T,xa.EventType.CLOSE,(()=>{U||(U=!0,ne(Ft,`RPC '${e}' stream ${o} transport closed`),W.__(),this.I_(T))})),X(T,xa.EventType.ERROR,($=>{U||(U=!0,wi(Ft,`RPC '${e}' stream ${o} transport errored. Name:`,$.name,"Message:",$.message),W.__(new te(B.UNAVAILABLE,"The operation could not be completed")))})),X(T,xa.EventType.MESSAGE,($=>{var le;if(!U){const he=$.data[0];Me(!!he,16349);const me=he,Ee=(me==null?void 0:me.error)||((le=me[0])===null||le===void 0?void 0:le.error);if(Ee){ne(Ft,`RPC '${e}' stream ${o} received error:`,Ee);const je=Ee.status;let Te=(function(R){const P=at[R];if(P!==void 0)return sv(P)})(je),x=Ee.message;Te===void 0&&(Te=B.INTERNAL,x="Unknown error status: "+je+" with message "+Ee.message),U=!0,W.__(new te(Te,x)),T.close()}else ne(Ft,`RPC '${e}' stream ${o} received:`,he),W.a_(he)}})),X(p,T_.STAT_EVENT,($=>{$.stat===Nd.PROXY?ne(Ft,`RPC '${e}' stream ${o} detected buffering proxy`):$.stat===Nd.NOPROXY&&ne(Ft,`RPC '${e}' stream ${o} detected no buffering proxy`)})),setTimeout((()=>{W.o_()}),0),W}terminate(){this.u_.forEach((e=>e.close())),this.u_=[]}T_(e){this.u_.push(e)}I_(e){this.u_=this.u_.filter((t=>t===e))}}function gd(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wc(r){return new i1(r,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vv{constructor(e,t,s=1e3,o=1.5,l=6e4){this.Fi=e,this.timerId=t,this.d_=s,this.E_=o,this.A_=l,this.R_=0,this.V_=null,this.m_=Date.now(),this.reset()}reset(){this.R_=0}f_(){this.R_=this.A_}g_(e){this.cancel();const t=Math.floor(this.R_+this.p_()),s=Math.max(0,Date.now()-this.m_),o=Math.max(0,t-s);o>0&&ne("ExponentialBackoff",`Backing off for ${o} ms (base delay: ${this.R_} ms, delay with jitter: ${t} ms, last attempt: ${s} ms ago)`),this.V_=this.Fi.enqueueAfterDelay(this.timerId,o,(()=>(this.m_=Date.now(),e()))),this.R_*=this.E_,this.R_<this.d_&&(this.R_=this.d_),this.R_>this.A_&&(this.R_=this.A_)}y_(){this.V_!==null&&(this.V_.skipDelay(),this.V_=null)}cancel(){this.V_!==null&&(this.V_.cancel(),this.V_=null)}p_(){return(Math.random()-.5)*this.R_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oy="PersistentStream";class wv{constructor(e,t,s,o,l,h,p,g){this.Fi=e,this.w_=s,this.S_=o,this.connection=l,this.authCredentialsProvider=h,this.appCheckCredentialsProvider=p,this.listener=g,this.state=0,this.b_=0,this.D_=null,this.v_=null,this.stream=null,this.C_=0,this.F_=new vv(e,t)}M_(){return this.state===1||this.state===5||this.x_()}x_(){return this.state===2||this.state===3}start(){this.C_=0,this.state!==4?this.auth():this.O_()}async stop(){this.M_()&&await this.close(0)}N_(){this.state=0,this.F_.reset()}B_(){this.x_()&&this.D_===null&&(this.D_=this.Fi.enqueueAfterDelay(this.w_,6e4,(()=>this.L_())))}k_(e){this.q_(),this.stream.send(e)}async L_(){if(this.x_())return this.close(0)}q_(){this.D_&&(this.D_.cancel(),this.D_=null)}Q_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.q_(),this.Q_(),this.F_.cancel(),this.b_++,e!==4?this.F_.reset():t&&t.code===B.RESOURCE_EXHAUSTED?(Or(t.toString()),Or("Using maximum backoff delay to prevent overloading the backend."),this.F_.f_()):t&&t.code===B.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.U_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.n_(t)}U_(){}auth(){this.state=1;const e=this.K_(this.b_),t=this.b_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([s,o])=>{this.b_===t&&this.W_(s,o)}),(s=>{e((()=>{const o=new te(B.UNKNOWN,"Fetching auth token failed: "+s.message);return this.G_(o)}))}))}W_(e,t){const s=this.K_(this.b_);this.stream=this.z_(e,t),this.stream.Zo((()=>{s((()=>this.listener.Zo()))})),this.stream.e_((()=>{s((()=>(this.state=2,this.v_=this.Fi.enqueueAfterDelay(this.S_,1e4,(()=>(this.x_()&&(this.state=3),Promise.resolve()))),this.listener.e_())))})),this.stream.n_((o=>{s((()=>this.G_(o)))})),this.stream.onMessage((o=>{s((()=>++this.C_==1?this.j_(o):this.onNext(o)))}))}O_(){this.state=5,this.F_.g_((async()=>{this.state=0,this.start()}))}G_(e){return ne(oy,`close with error: ${e}`),this.stream=null,this.close(4,e)}K_(e){return t=>{this.Fi.enqueueAndForget((()=>this.b_===e?t():(ne(oy,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class tS extends wv{constructor(e,t,s,o,l,h){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,s,o,h),this.serializer=l}z_(e,t){return this.connection.P_("Listen",e,t)}j_(e){return this.onNext(e)}onNext(e){this.F_.reset();const t=a1(this.serializer,e),s=(function(l){if(!("targetChange"in l))return ve.min();const h=l.targetChange;return h.targetIds&&h.targetIds.length?ve.min():h.readTime?or(h.readTime):ve.min()})(e);return this.listener.J_(t,s)}H_(e){const t={};t.database=Bd(this.serializer),t.addTarget=(function(l,h){let p;const g=h.target;if(p=Ld(g)?{documents:c1(l,g)}:{query:h1(l,g).Vt},p.targetId=h.targetId,h.resumeToken.approximateByteSize()>0){p.resumeToken=lv(l,h.resumeToken);const _=Ud(l,h.expectedCount);_!==null&&(p.expectedCount=_)}else if(h.snapshotVersion.compareTo(ve.min())>0){p.readTime=Qu(l,h.snapshotVersion.toTimestamp());const _=Ud(l,h.expectedCount);_!==null&&(p.expectedCount=_)}return p})(this.serializer,e);const s=f1(this.serializer,e);s&&(t.labels=s),this.k_(t)}Y_(e){const t={};t.database=Bd(this.serializer),t.removeTarget=e,this.k_(t)}}class nS extends wv{constructor(e,t,s,o,l,h){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,s,o,h),this.serializer=l}get Z_(){return this.C_>0}start(){this.lastStreamToken=void 0,super.start()}U_(){this.Z_&&this.X_([])}z_(e,t){return this.connection.P_("Write",e,t)}j_(e){return Me(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,Me(!e.writeResults||e.writeResults.length===0,55816),this.listener.ea()}onNext(e){Me(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.F_.reset();const t=u1(e.writeResults,e.commitTime),s=or(e.commitTime);return this.listener.ta(s,t)}na(){const e={};e.database=Bd(this.serializer),this.k_(e)}X_(e){const t={streamToken:this.lastStreamToken,writes:e.map((s=>l1(this.serializer,s)))};this.k_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rS{}class iS extends rS{constructor(e,t,s,o){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=s,this.serializer=o,this.ra=!1}ia(){if(this.ra)throw new te(B.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,t,s,o){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([l,h])=>this.connection.Wo(e,jd(t,s),o,l,h))).catch((l=>{throw l.name==="FirebaseError"?(l.code===B.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),l):new te(B.UNKNOWN,l.toString())}))}Jo(e,t,s,o,l){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([h,p])=>this.connection.Jo(e,jd(t,s),o,h,p,l))).catch((h=>{throw h.name==="FirebaseError"?(h.code===B.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),h):new te(B.UNKNOWN,h.toString())}))}terminate(){this.ra=!0,this.connection.terminate()}}class sS{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.sa=0,this.oa=null,this._a=!0}aa(){this.sa===0&&(this.ua("Unknown"),this.oa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.oa=null,this.ca("Backend didn't respond within 10 seconds."),this.ua("Offline"),Promise.resolve()))))}la(e){this.state==="Online"?this.ua("Unknown"):(this.sa++,this.sa>=1&&(this.ha(),this.ca(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ua("Offline")))}set(e){this.ha(),this.sa=0,e==="Online"&&(this._a=!1),this.ua(e)}ua(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ca(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this._a?(Or(t),this._a=!1):ne("OnlineStateTracker",t)}ha(){this.oa!==null&&(this.oa.cancel(),this.oa=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ds="RemoteStore";class oS{constructor(e,t,s,o,l){this.localStore=e,this.datastore=t,this.asyncQueue=s,this.remoteSyncer={},this.Pa=[],this.Ta=new Map,this.Ia=new Set,this.da=[],this.Ea=l,this.Ea.xo((h=>{s.enqueueAndForget((async()=>{_s(this)&&(ne(ds,"Restarting streams for network reachability change."),await(async function(g){const _=we(g);_.Ia.add(4),await nl(_),_.Aa.set("Unknown"),_.Ia.delete(4),await Ec(_)})(this))}))})),this.Aa=new sS(s,o)}}async function Ec(r){if(_s(r))for(const e of r.da)await e(!0)}async function nl(r){for(const e of r.da)await e(!1)}function Ev(r,e){const t=we(r);t.Ta.has(e.targetId)||(t.Ta.set(e.targetId,e),Tf(t)?Ef(t):Do(t).x_()&&wf(t,e))}function vf(r,e){const t=we(r),s=Do(t);t.Ta.delete(e),s.x_()&&Tv(t,e),t.Ta.size===0&&(s.x_()?s.B_():_s(t)&&t.Aa.set("Unknown"))}function wf(r,e){if(r.Ra.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ve.min())>0){const t=r.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Do(r).H_(e)}function Tv(r,e){r.Ra.$e(e),Do(r).Y_(e)}function Ef(r){r.Ra=new e1({getRemoteKeysForTarget:e=>r.remoteSyncer.getRemoteKeysForTarget(e),Et:e=>r.Ta.get(e)||null,lt:()=>r.datastore.serializer.databaseId}),Do(r).start(),r.Aa.aa()}function Tf(r){return _s(r)&&!Do(r).M_()&&r.Ta.size>0}function _s(r){return we(r).Ia.size===0}function Iv(r){r.Ra=void 0}async function aS(r){r.Aa.set("Online")}async function lS(r){r.Ta.forEach(((e,t)=>{wf(r,e)}))}async function uS(r,e){Iv(r),Tf(r)?(r.Aa.la(e),Ef(r)):r.Aa.set("Unknown")}async function cS(r,e,t){if(r.Aa.set("Online"),e instanceof av&&e.state===2&&e.cause)try{await(async function(o,l){const h=l.cause;for(const p of l.targetIds)o.Ta.has(p)&&(await o.remoteSyncer.rejectListen(p,h),o.Ta.delete(p),o.Ra.removeTarget(p))})(r,e)}catch(s){ne(ds,"Failed to remove targets %s: %s ",e.targetIds.join(","),s),await Yu(r,s)}else if(e instanceof Ou?r.Ra.Ye(e):e instanceof ov?r.Ra.it(e):r.Ra.et(e),!t.isEqual(ve.min()))try{const s=await _v(r.localStore);t.compareTo(s)>=0&&await(function(l,h){const p=l.Ra.Pt(h);return p.targetChanges.forEach(((g,_)=>{if(g.resumeToken.approximateByteSize()>0){const E=l.Ta.get(_);E&&l.Ta.set(_,E.withResumeToken(g.resumeToken,h))}})),p.targetMismatches.forEach(((g,_)=>{const E=l.Ta.get(g);if(!E)return;l.Ta.set(g,E.withResumeToken(Nt.EMPTY_BYTE_STRING,E.snapshotVersion)),Tv(l,g);const T=new pi(E.target,g,_,E.sequenceNumber);wf(l,T)})),l.remoteSyncer.applyRemoteEvent(p)})(r,t)}catch(s){ne(ds,"Failed to raise snapshot:",s),await Yu(r,s)}}async function Yu(r,e,t){if(!No(e))throw e;r.Ia.add(1),await nl(r),r.Aa.set("Offline"),t||(t=()=>_v(r.localStore)),r.asyncQueue.enqueueRetryable((async()=>{ne(ds,"Retrying IndexedDB access"),await t(),r.Ia.delete(1),await Ec(r)}))}function Sv(r,e){return e().catch((t=>Yu(r,t,e)))}async function Tc(r){const e=we(r),t=Ai(e);let s=e.Pa.length>0?e.Pa[e.Pa.length-1].batchId:rf;for(;hS(e);)try{const o=await W1(e.localStore,s);if(o===null){e.Pa.length===0&&t.B_();break}s=o.batchId,dS(e,o)}catch(o){await Yu(e,o)}Av(e)&&Cv(e)}function hS(r){return _s(r)&&r.Pa.length<10}function dS(r,e){r.Pa.push(e);const t=Ai(r);t.x_()&&t.Z_&&t.X_(e.mutations)}function Av(r){return _s(r)&&!Ai(r).M_()&&r.Pa.length>0}function Cv(r){Ai(r).start()}async function fS(r){Ai(r).na()}async function pS(r){const e=Ai(r);for(const t of r.Pa)e.X_(t.mutations)}async function mS(r,e,t){const s=r.Pa.shift(),o=df.from(s,e,t);await Sv(r,(()=>r.remoteSyncer.applySuccessfulWrite(o))),await Tc(r)}async function gS(r,e){e&&Ai(r).Z_&&await(async function(s,o){if((function(h){return JI(h)&&h!==B.ABORTED})(o.code)){const l=s.Pa.shift();Ai(s).N_(),await Sv(s,(()=>s.remoteSyncer.rejectFailedWrite(l.batchId,o))),await Tc(s)}})(r,e),Av(r)&&Cv(r)}async function ay(r,e){const t=we(r);t.asyncQueue.verifyOperationInProgress(),ne(ds,"RemoteStore received new credentials");const s=_s(t);t.Ia.add(3),await nl(t),s&&t.Aa.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ia.delete(3),await Ec(t)}async function yS(r,e){const t=we(r);e?(t.Ia.delete(2),await Ec(t)):e||(t.Ia.add(2),await nl(t),t.Aa.set("Unknown"))}function Do(r){return r.Va||(r.Va=(function(t,s,o){const l=we(t);return l.ia(),new tS(s,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,o)})(r.datastore,r.asyncQueue,{Zo:aS.bind(null,r),e_:lS.bind(null,r),n_:uS.bind(null,r),J_:cS.bind(null,r)}),r.da.push((async e=>{e?(r.Va.N_(),Tf(r)?Ef(r):r.Aa.set("Unknown")):(await r.Va.stop(),Iv(r))}))),r.Va}function Ai(r){return r.ma||(r.ma=(function(t,s,o){const l=we(t);return l.ia(),new nS(s,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,o)})(r.datastore,r.asyncQueue,{Zo:()=>Promise.resolve(),e_:fS.bind(null,r),n_:gS.bind(null,r),ea:pS.bind(null,r),ta:mS.bind(null,r)}),r.da.push((async e=>{e?(r.ma.N_(),await Tc(r)):(await r.ma.stop(),r.Pa.length>0&&(ne(ds,`Stopping write stream with ${r.Pa.length} pending writes`),r.Pa=[]))}))),r.ma}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class If{constructor(e,t,s,o,l){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=s,this.op=o,this.removalCallback=l,this.deferred=new ls,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((h=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,s,o,l){const h=Date.now()+s,p=new If(e,t,h,o,l);return p.start(s),p}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new te(B.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Sf(r,e){if(Or("AsyncQueue",`${e}: ${r}`),No(r))return new te(B.UNAVAILABLE,`${e}: ${r}`);throw r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yo{static emptySet(e){return new yo(e.comparator)}constructor(e){this.comparator=e?(t,s)=>e(t,s)||ce.comparator(t.key,s.key):(t,s)=>ce.comparator(t.key,s.key),this.keyedMap=Na(),this.sortedSet=new Ze(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,s)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof yo)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;t.hasNext();){const o=t.getNext().key,l=s.getNext().key;if(!o.isEqual(l))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const s=new yo;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=t,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ly{constructor(){this.fa=new Ze(ce.comparator)}track(e){const t=e.doc.key,s=this.fa.get(t);s?e.type!==0&&s.type===3?this.fa=this.fa.insert(t,e):e.type===3&&s.type!==1?this.fa=this.fa.insert(t,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.fa=this.fa.insert(t,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.fa=this.fa.insert(t,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.fa=this.fa.remove(t):e.type===1&&s.type===2?this.fa=this.fa.insert(t,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.fa=this.fa.insert(t,{type:2,doc:e.doc}):ge(63341,{At:e,ga:s}):this.fa=this.fa.insert(t,e)}pa(){const e=[];return this.fa.inorderTraversal(((t,s)=>{e.push(s)})),e}}class Co{constructor(e,t,s,o,l,h,p,g,_){this.query=e,this.docs=t,this.oldDocs=s,this.docChanges=o,this.mutatedKeys=l,this.fromCache=h,this.syncStateChanged=p,this.excludesMetadataChanges=g,this.hasCachedResults=_}static fromInitialDocuments(e,t,s,o,l){const h=[];return t.forEach((p=>{h.push({type:0,doc:p})})),new Co(e,t,yo.emptySet(t),h,s,o,!0,!1,l)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&mc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,s=e.docChanges;if(t.length!==s.length)return!1;for(let o=0;o<t.length;o++)if(t[o].type!==s[o].type||!t[o].doc.isEqual(s[o].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _S{constructor(){this.ya=void 0,this.wa=[]}Sa(){return this.wa.some((e=>e.ba()))}}class vS{constructor(){this.queries=uy(),this.onlineState="Unknown",this.Da=new Set}terminate(){(function(t,s){const o=we(t),l=o.queries;o.queries=uy(),l.forEach(((h,p)=>{for(const g of p.wa)g.onError(s)}))})(this,new te(B.ABORTED,"Firestore shutting down"))}}function uy(){return new ys((r=>G_(r)),mc)}async function wS(r,e){const t=we(r);let s=3;const o=e.query;let l=t.queries.get(o);l?!l.Sa()&&e.ba()&&(s=2):(l=new _S,s=e.ba()?0:1);try{switch(s){case 0:l.ya=await t.onListen(o,!0);break;case 1:l.ya=await t.onListen(o,!1);break;case 2:await t.onFirstRemoteStoreListen(o)}}catch(h){const p=Sf(h,`Initialization of query '${fo(e.query)}' failed`);return void e.onError(p)}t.queries.set(o,l),l.wa.push(e),e.va(t.onlineState),l.ya&&e.Ca(l.ya)&&Af(t)}async function ES(r,e){const t=we(r),s=e.query;let o=3;const l=t.queries.get(s);if(l){const h=l.wa.indexOf(e);h>=0&&(l.wa.splice(h,1),l.wa.length===0?o=e.ba()?0:1:!l.Sa()&&e.ba()&&(o=2))}switch(o){case 0:return t.queries.delete(s),t.onUnlisten(s,!0);case 1:return t.queries.delete(s),t.onUnlisten(s,!1);case 2:return t.onLastRemoteStoreUnlisten(s);default:return}}function TS(r,e){const t=we(r);let s=!1;for(const o of e){const l=o.query,h=t.queries.get(l);if(h){for(const p of h.wa)p.Ca(o)&&(s=!0);h.ya=o}}s&&Af(t)}function IS(r,e,t){const s=we(r),o=s.queries.get(e);if(o)for(const l of o.wa)l.onError(t);s.queries.delete(e)}function Af(r){r.Da.forEach((e=>{e.next()}))}var Hd,cy;(cy=Hd||(Hd={})).Fa="default",cy.Cache="cache";class SS{constructor(e,t,s){this.query=e,this.Ma=t,this.xa=!1,this.Oa=null,this.onlineState="Unknown",this.options=s||{}}Ca(e){if(!this.options.includeMetadataChanges){const s=[];for(const o of e.docChanges)o.type!==3&&s.push(o);e=new Co(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.xa?this.Na(e)&&(this.Ma.next(e),t=!0):this.Ba(e,this.onlineState)&&(this.La(e),t=!0),this.Oa=e,t}onError(e){this.Ma.error(e)}va(e){this.onlineState=e;let t=!1;return this.Oa&&!this.xa&&this.Ba(this.Oa,e)&&(this.La(this.Oa),t=!0),t}Ba(e,t){if(!e.fromCache||!this.ba())return!0;const s=t!=="Offline";return(!this.options.ka||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Na(e){if(e.docChanges.length>0)return!0;const t=this.Oa&&this.Oa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}La(e){e=Co.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.xa=!0,this.Ma.next(e)}ba(){return this.options.source!==Hd.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rv{constructor(e){this.key=e}}class kv{constructor(e){this.key=e}}class AS{constructor(e,t){this.query=e,this.Ha=t,this.Ya=null,this.hasCachedResults=!1,this.current=!1,this.Za=ke(),this.mutatedKeys=ke(),this.Xa=K_(e),this.eu=new yo(this.Xa)}get tu(){return this.Ha}nu(e,t){const s=t?t.ru:new ly,o=t?t.eu:this.eu;let l=t?t.mutatedKeys:this.mutatedKeys,h=o,p=!1;const g=this.query.limitType==="F"&&o.size===this.query.limit?o.last():null,_=this.query.limitType==="L"&&o.size===this.query.limit?o.first():null;if(e.inorderTraversal(((E,T)=>{const A=o.get(E),U=gc(this.query,T)?T:null,W=!!A&&this.mutatedKeys.has(A.key),X=!!U&&(U.hasLocalMutations||this.mutatedKeys.has(U.key)&&U.hasCommittedMutations);let $=!1;A&&U?A.data.isEqual(U.data)?W!==X&&(s.track({type:3,doc:U}),$=!0):this.iu(A,U)||(s.track({type:2,doc:U}),$=!0,(g&&this.Xa(U,g)>0||_&&this.Xa(U,_)<0)&&(p=!0)):!A&&U?(s.track({type:0,doc:U}),$=!0):A&&!U&&(s.track({type:1,doc:A}),$=!0,(g||_)&&(p=!0)),$&&(U?(h=h.add(U),l=X?l.add(E):l.delete(E)):(h=h.delete(E),l=l.delete(E)))})),this.query.limit!==null)for(;h.size>this.query.limit;){const E=this.query.limitType==="F"?h.last():h.first();h=h.delete(E.key),l=l.delete(E.key),s.track({type:1,doc:E})}return{eu:h,ru:s,Ds:p,mutatedKeys:l}}iu(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,s,o){const l=this.eu;this.eu=e.eu,this.mutatedKeys=e.mutatedKeys;const h=e.ru.pa();h.sort(((E,T)=>(function(U,W){const X=$=>{switch($){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ge(20277,{At:$})}};return X(U)-X(W)})(E.type,T.type)||this.Xa(E.doc,T.doc))),this.su(s),o=o!=null&&o;const p=t&&!o?this.ou():[],g=this.Za.size===0&&this.current&&!o?1:0,_=g!==this.Ya;return this.Ya=g,h.length!==0||_?{snapshot:new Co(this.query,e.eu,l,h,e.mutatedKeys,g===0,_,!1,!!s&&s.resumeToken.approximateByteSize()>0),_u:p}:{_u:p}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({eu:this.eu,ru:new ly,mutatedKeys:this.mutatedKeys,Ds:!1},!1)):{_u:[]}}au(e){return!this.Ha.has(e)&&!!this.eu.has(e)&&!this.eu.get(e).hasLocalMutations}su(e){e&&(e.addedDocuments.forEach((t=>this.Ha=this.Ha.add(t))),e.modifiedDocuments.forEach((t=>{})),e.removedDocuments.forEach((t=>this.Ha=this.Ha.delete(t))),this.current=e.current)}ou(){if(!this.current)return[];const e=this.Za;this.Za=ke(),this.eu.forEach((s=>{this.au(s.key)&&(this.Za=this.Za.add(s.key))}));const t=[];return e.forEach((s=>{this.Za.has(s)||t.push(new kv(s))})),this.Za.forEach((s=>{e.has(s)||t.push(new Rv(s))})),t}uu(e){this.Ha=e.qs,this.Za=ke();const t=this.nu(e.documents);return this.applyChanges(t,!0)}cu(){return Co.fromInitialDocuments(this.query,this.eu,this.mutatedKeys,this.Ya===0,this.hasCachedResults)}}const Cf="SyncEngine";class CS{constructor(e,t,s){this.query=e,this.targetId=t,this.view=s}}class RS{constructor(e){this.key=e,this.lu=!1}}class kS{constructor(e,t,s,o,l,h){this.localStore=e,this.remoteStore=t,this.eventManager=s,this.sharedClientState=o,this.currentUser=l,this.maxConcurrentLimboResolutions=h,this.hu={},this.Pu=new ys((p=>G_(p)),mc),this.Tu=new Map,this.Iu=new Set,this.du=new Ze(ce.comparator),this.Eu=new Map,this.Au=new mf,this.Ru={},this.Vu=new Map,this.mu=Ao.ur(),this.onlineState="Unknown",this.fu=void 0}get isPrimaryClient(){return this.fu===!0}}async function PS(r,e,t=!0){const s=Ov(r);let o;const l=s.Pu.get(e);return l?(s.sharedClientState.addLocalQueryTarget(l.targetId),o=l.view.cu()):o=await Pv(s,e,t,!0),o}async function xS(r,e){const t=Ov(r);await Pv(t,e,!0,!1)}async function Pv(r,e,t,s){const o=await G1(r.localStore,sr(e)),l=o.targetId,h=r.sharedClientState.addLocalQueryTarget(l,t);let p;return s&&(p=await NS(r,e,l,h==="current",o.resumeToken)),r.isPrimaryClient&&t&&Ev(r.remoteStore,o),p}async function NS(r,e,t,s,o){r.gu=(T,A,U)=>(async function(X,$,le,he){let me=$.view.nu(le);me.Ds&&(me=await ny(X.localStore,$.query,!1).then((({documents:x})=>$.view.nu(x,me))));const Ee=he&&he.targetChanges.get($.targetId),je=he&&he.targetMismatches.get($.targetId)!=null,Te=$.view.applyChanges(me,X.isPrimaryClient,Ee,je);return dy(X,$.targetId,Te._u),Te.snapshot})(r,T,A,U);const l=await ny(r.localStore,e,!0),h=new AS(e,l.qs),p=h.nu(l.documents),g=tl.createSynthesizedTargetChangeForCurrentChange(t,s&&r.onlineState!=="Offline",o),_=h.applyChanges(p,r.isPrimaryClient,g);dy(r,t,_._u);const E=new CS(e,t,h);return r.Pu.set(e,E),r.Tu.has(t)?r.Tu.get(t).push(e):r.Tu.set(t,[e]),_.snapshot}async function DS(r,e,t){const s=we(r),o=s.Pu.get(e),l=s.Tu.get(o.targetId);if(l.length>1)return s.Tu.set(o.targetId,l.filter((h=>!mc(h,e)))),void s.Pu.delete(e);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(o.targetId),s.sharedClientState.isActiveQueryTarget(o.targetId)||await $d(s.localStore,o.targetId,!1).then((()=>{s.sharedClientState.clearQueryState(o.targetId),t&&vf(s.remoteStore,o.targetId),Wd(s,o.targetId)})).catch(xo)):(Wd(s,o.targetId),await $d(s.localStore,o.targetId,!0))}async function VS(r,e){const t=we(r),s=t.Pu.get(e),o=t.Tu.get(s.targetId);t.isPrimaryClient&&o.length===1&&(t.sharedClientState.removeLocalQueryTarget(s.targetId),vf(t.remoteStore,s.targetId))}async function OS(r,e,t){const s=zS(r);try{const o=await(function(h,p){const g=we(h),_=Ke.now(),E=p.reduce(((U,W)=>U.add(W.key)),ke());let T,A;return g.persistence.runTransaction("Locally write mutations","readwrite",(U=>{let W=br(),X=ke();return g.Os.getEntries(U,E).next(($=>{W=$,W.forEach(((le,he)=>{he.isValidDocument()||(X=X.add(le))}))})).next((()=>g.localDocuments.getOverlayedDocuments(U,W))).next(($=>{T=$;const le=[];for(const he of p){const me=GI(he,T.get(he.key).overlayedDocument);me!=null&&le.push(new Pi(he.key,me,U_(me.value.mapValue),$n.exists(!0)))}return g.mutationQueue.addMutationBatch(U,_,le,p)})).next(($=>{A=$;const le=$.applyToLocalDocumentSet(T,X);return g.documentOverlayCache.saveOverlays(U,$.batchId,le)}))})).then((()=>({batchId:A.batchId,changes:X_(T)})))})(s.localStore,e);s.sharedClientState.addPendingMutation(o.batchId),(function(h,p,g){let _=h.Ru[h.currentUser.toKey()];_||(_=new Ze(Se)),_=_.insert(p,g),h.Ru[h.currentUser.toKey()]=_})(s,o.batchId,t),await rl(s,o.changes),await Tc(s.remoteStore)}catch(o){const l=Sf(o,"Failed to persist write");t.reject(l)}}async function xv(r,e){const t=we(r);try{const s=await q1(t.localStore,e);e.targetChanges.forEach(((o,l)=>{const h=t.Eu.get(l);h&&(Me(o.addedDocuments.size+o.modifiedDocuments.size+o.removedDocuments.size<=1,22616),o.addedDocuments.size>0?h.lu=!0:o.modifiedDocuments.size>0?Me(h.lu,14607):o.removedDocuments.size>0&&(Me(h.lu,42227),h.lu=!1))})),await rl(t,s,e)}catch(s){await xo(s)}}function hy(r,e,t){const s=we(r);if(s.isPrimaryClient&&t===0||!s.isPrimaryClient&&t===1){const o=[];s.Pu.forEach(((l,h)=>{const p=h.view.va(e);p.snapshot&&o.push(p.snapshot)})),(function(h,p){const g=we(h);g.onlineState=p;let _=!1;g.queries.forEach(((E,T)=>{for(const A of T.wa)A.va(p)&&(_=!0)})),_&&Af(g)})(s.eventManager,e),o.length&&s.hu.J_(o),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function bS(r,e,t){const s=we(r);s.sharedClientState.updateQueryState(e,"rejected",t);const o=s.Eu.get(e),l=o&&o.key;if(l){let h=new Ze(ce.comparator);h=h.insert(l,jt.newNoDocument(l,ve.min()));const p=ke().add(l),g=new vc(ve.min(),new Map,new Ze(Se),h,p);await xv(s,g),s.du=s.du.remove(l),s.Eu.delete(e),Rf(s)}else await $d(s.localStore,e,!1).then((()=>Wd(s,e,t))).catch(xo)}async function LS(r,e){const t=we(r),s=e.batch.batchId;try{const o=await $1(t.localStore,e);Dv(t,s,null),Nv(t,s),t.sharedClientState.updateMutationState(s,"acknowledged"),await rl(t,o)}catch(o){await xo(o)}}async function MS(r,e,t){const s=we(r);try{const o=await(function(h,p){const g=we(h);return g.persistence.runTransaction("Reject batch","readwrite-primary",(_=>{let E;return g.mutationQueue.lookupMutationBatch(_,p).next((T=>(Me(T!==null,37113),E=T.keys(),g.mutationQueue.removeMutationBatch(_,T)))).next((()=>g.mutationQueue.performConsistencyCheck(_))).next((()=>g.documentOverlayCache.removeOverlaysForBatchId(_,E,p))).next((()=>g.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(_,E))).next((()=>g.localDocuments.getDocuments(_,E)))}))})(s.localStore,e);Dv(s,e,t),Nv(s,e),s.sharedClientState.updateMutationState(e,"rejected",t),await rl(s,o)}catch(o){await xo(o)}}function Nv(r,e){(r.Vu.get(e)||[]).forEach((t=>{t.resolve()})),r.Vu.delete(e)}function Dv(r,e,t){const s=we(r);let o=s.Ru[s.currentUser.toKey()];if(o){const l=o.get(e);l&&(t?l.reject(t):l.resolve(),o=o.remove(e)),s.Ru[s.currentUser.toKey()]=o}}function Wd(r,e,t=null){r.sharedClientState.removeLocalQueryTarget(e);for(const s of r.Tu.get(e))r.Pu.delete(s),t&&r.hu.pu(s,t);r.Tu.delete(e),r.isPrimaryClient&&r.Au.zr(e).forEach((s=>{r.Au.containsKey(s)||Vv(r,s)}))}function Vv(r,e){r.Iu.delete(e.path.canonicalString());const t=r.du.get(e);t!==null&&(vf(r.remoteStore,t),r.du=r.du.remove(e),r.Eu.delete(t),Rf(r))}function dy(r,e,t){for(const s of t)s instanceof Rv?(r.Au.addReference(s.key,e),FS(r,s)):s instanceof kv?(ne(Cf,"Document no longer in limbo: "+s.key),r.Au.removeReference(s.key,e),r.Au.containsKey(s.key)||Vv(r,s.key)):ge(19791,{yu:s})}function FS(r,e){const t=e.key,s=t.path.canonicalString();r.du.get(t)||r.Iu.has(s)||(ne(Cf,"New document in limbo: "+t),r.Iu.add(s),Rf(r))}function Rf(r){for(;r.Iu.size>0&&r.du.size<r.maxConcurrentLimboResolutions;){const e=r.Iu.values().next().value;r.Iu.delete(e);const t=new ce(He.fromString(e)),s=r.mu.next();r.Eu.set(s,new RS(t)),r.du=r.du.insert(t,s),Ev(r.remoteStore,new pi(sr(uf(t.path)),s,"TargetPurposeLimboResolution",dc.ue))}}async function rl(r,e,t){const s=we(r),o=[],l=[],h=[];s.Pu.isEmpty()||(s.Pu.forEach(((p,g)=>{h.push(s.gu(g,e,t).then((_=>{var E;if((_||t)&&s.isPrimaryClient){const T=_?!_.fromCache:(E=t==null?void 0:t.targetChanges.get(g.targetId))===null||E===void 0?void 0:E.current;s.sharedClientState.updateQueryState(g.targetId,T?"current":"not-current")}if(_){o.push(_);const T=yf.Es(g.targetId,_);l.push(T)}})))})),await Promise.all(h),s.hu.J_(o),await(async function(g,_){const E=we(g);try{await E.persistence.runTransaction("notifyLocalViewChanges","readwrite",(T=>q.forEach(_,(A=>q.forEach(A.Is,(U=>E.persistence.referenceDelegate.addReference(T,A.targetId,U))).next((()=>q.forEach(A.ds,(U=>E.persistence.referenceDelegate.removeReference(T,A.targetId,U)))))))))}catch(T){if(!No(T))throw T;ne(_f,"Failed to update sequence numbers: "+T)}for(const T of _){const A=T.targetId;if(!T.fromCache){const U=E.Fs.get(A),W=U.snapshotVersion,X=U.withLastLimboFreeSnapshotVersion(W);E.Fs=E.Fs.insert(A,X)}}})(s.localStore,l))}async function US(r,e){const t=we(r);if(!t.currentUser.isEqual(e)){ne(Cf,"User change. New user:",e.toKey());const s=await yv(t.localStore,e);t.currentUser=e,(function(l,h){l.Vu.forEach((p=>{p.forEach((g=>{g.reject(new te(B.CANCELLED,h))}))})),l.Vu.clear()})(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await rl(t,s.Bs)}}function jS(r,e){const t=we(r),s=t.Eu.get(e);if(s&&s.lu)return ke().add(s.key);{let o=ke();const l=t.Tu.get(e);if(!l)return o;for(const h of l){const p=t.Pu.get(h);o=o.unionWith(p.view.tu)}return o}}function Ov(r){const e=we(r);return e.remoteStore.remoteSyncer.applyRemoteEvent=xv.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=jS.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=bS.bind(null,e),e.hu.J_=TS.bind(null,e.eventManager),e.hu.pu=IS.bind(null,e.eventManager),e}function zS(r){const e=we(r);return e.remoteStore.remoteSyncer.applySuccessfulWrite=LS.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=MS.bind(null,e),e}class Ju{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=wc(e.databaseInfo.databaseId),this.sharedClientState=this.bu(e),this.persistence=this.Du(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Cu(e,this.localStore),this.indexBackfillerScheduler=this.Fu(e,this.localStore)}Cu(e,t){return null}Fu(e,t){return null}vu(e){return B1(this.persistence,new U1,e.initialUser,this.serializer)}Du(e){return new gv(gf.Vi,this.serializer)}bu(e){return new Q1}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Ju.provider={build:()=>new Ju};class BS extends Ju{constructor(e){super(),this.cacheSizeBytes=e}Cu(e,t){Me(this.persistence.referenceDelegate instanceof Xu,46915);const s=this.persistence.referenceDelegate.garbageCollector;return new S1(s,e.asyncQueue,t)}Du(e){const t=this.cacheSizeBytes!==void 0?en.withCacheSize(this.cacheSizeBytes):en.DEFAULT;return new gv((s=>Xu.Vi(s,t)),this.serializer)}}class Gd{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>hy(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=US.bind(null,this.syncEngine),await yS(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new vS})()}createDatastore(e){const t=wc(e.databaseInfo.databaseId),s=(function(l){return new eS(l)})(e.databaseInfo);return(function(l,h,p,g){return new iS(l,h,p,g)})(e.authCredentials,e.appCheckCredentials,s,t)}createRemoteStore(e){return(function(s,o,l,h,p){return new oS(s,o,l,h,p)})(this.localStore,this.datastore,e.asyncQueue,(t=>hy(this.syncEngine,t,0)),(function(){return sy.C()?new sy:new X1})())}createSyncEngine(e,t){return(function(o,l,h,p,g,_,E){const T=new kS(o,l,h,p,g,_);return E&&(T.fu=!0),T})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await(async function(o){const l=we(o);ne(ds,"RemoteStore shutting down."),l.Ia.add(5),await nl(l),l.Ea.shutdown(),l.Aa.set("Unknown")})(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}Gd.provider={build:()=>new Gd};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $S{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.xu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.xu(this.observer.error,e):Or("Uncaught Error in snapshot listener:",e.toString()))}Ou(){this.muted=!0}xu(e,t){setTimeout((()=>{this.muted||e(t)}),0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ci="FirestoreClient";class qS{constructor(e,t,s,o,l){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=s,this.databaseInfo=o,this.user=Ut.UNAUTHENTICATED,this.clientId=nf.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=l,this.authCredentials.start(s,(async h=>{ne(Ci,"Received user=",h.uid),await this.authCredentialListener(h),this.user=h})),this.appCheckCredentials.start(s,(h=>(ne(Ci,"Received new app check token=",h),this.appCheckCredentialListener(h,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new ls;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const s=Sf(t,"Failed to shutdown persistence");e.reject(s)}})),e.promise}}async function yd(r,e){r.asyncQueue.verifyOperationInProgress(),ne(Ci,"Initializing OfflineComponentProvider");const t=r.configuration;await e.initialize(t);let s=t.initialUser;r.setCredentialChangeListener((async o=>{s.isEqual(o)||(await yv(e.localStore,o),s=o)})),e.persistence.setDatabaseDeletedListener((()=>{wi("Terminating Firestore due to IndexedDb database deletion"),r.terminate().then((()=>{ne("Terminating Firestore due to IndexedDb database deletion completed successfully")})).catch((o=>{wi("Terminating Firestore due to IndexedDb database deletion failed",o)}))})),r._offlineComponents=e}async function fy(r,e){r.asyncQueue.verifyOperationInProgress();const t=await HS(r);ne(Ci,"Initializing OnlineComponentProvider"),await e.initialize(t,r.configuration),r.setCredentialChangeListener((s=>ay(e.remoteStore,s))),r.setAppCheckTokenChangeListener(((s,o)=>ay(e.remoteStore,o))),r._onlineComponents=e}async function HS(r){if(!r._offlineComponents)if(r._uninitializedComponentsProvider){ne(Ci,"Using user provided OfflineComponentProvider");try{await yd(r,r._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!(function(o){return o.name==="FirebaseError"?o.code===B.FAILED_PRECONDITION||o.code===B.UNIMPLEMENTED:!(typeof DOMException<"u"&&o instanceof DOMException)||o.code===22||o.code===20||o.code===11})(t))throw t;wi("Error using user provided cache. Falling back to memory cache: "+t),await yd(r,new Ju)}}else ne(Ci,"Using default OfflineComponentProvider"),await yd(r,new BS(void 0));return r._offlineComponents}async function bv(r){return r._onlineComponents||(r._uninitializedComponentsProvider?(ne(Ci,"Using user provided OnlineComponentProvider"),await fy(r,r._uninitializedComponentsProvider._online)):(ne(Ci,"Using default OnlineComponentProvider"),await fy(r,new Gd))),r._onlineComponents}function WS(r){return bv(r).then((e=>e.syncEngine))}async function py(r){const e=await bv(r),t=e.eventManager;return t.onListen=PS.bind(null,e.syncEngine),t.onUnlisten=DS.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=xS.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=VS.bind(null,e.syncEngine),t}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lv(r){const e={};return r.timeoutSeconds!==void 0&&(e.timeoutSeconds=r.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const my=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mv="firestore.googleapis.com",gy=!0;class yy{constructor(e){var t,s;if(e.host===void 0){if(e.ssl!==void 0)throw new te(B.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Mv,this.ssl=gy}else this.host=e.host,this.ssl=(t=e.ssl)!==null&&t!==void 0?t:gy;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=mv;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<T1)throw new te(B.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}aI("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Lv((s=e.experimentalLongPollingOptions)!==null&&s!==void 0?s:{}),(function(l){if(l.timeoutSeconds!==void 0){if(isNaN(l.timeoutSeconds))throw new te(B.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (must not be NaN)`);if(l.timeoutSeconds<5)throw new te(B.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (minimum allowed value is 5)`);if(l.timeoutSeconds>30)throw new te(B.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(s,o){return s.timeoutSeconds===o.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Ic{constructor(e,t,s,o){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=s,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new yy({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new te(B.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new te(B.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new yy(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(s){if(!s)return new JT;switch(s.type){case"firstParty":return new nI(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new te(B.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const s=my.get(t);s&&(ne("ComponentProvider","Removing Datastore"),my.delete(t),s.terminate())})(this),Promise.resolve()}}function GS(r,e,t,s={}){var o;r=ba(r,Ic);const l=Ro(e),h=r._getSettings(),p=Object.assign(Object.assign({},h),{emulatorOptions:r._getEmulatorOptions()}),g=`${e}:${t}`;l&&(a_(`https://${g}`),l_("Firestore",!0)),h.host!==Mv&&h.host!==g&&wi("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const _=Object.assign(Object.assign({},h),{host:g,ssl:l,emulatorOptions:s});if(!cs(_,p)&&(r._setSettings(_),s.mockUserToken)){let E,T;if(typeof s.mockUserToken=="string")E=s.mockUserToken,T=Ut.MOCK_USER;else{E=TE(s.mockUserToken,(o=r._app)===null||o===void 0?void 0:o.options.projectId);const A=s.mockUserToken.sub||s.mockUserToken.user_id;if(!A)throw new te(B.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");T=new Ut(A)}r._authCredentials=new ZT(new C_(E,T))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vo{constructor(e,t,s){this.converter=t,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new Vo(this.firestore,e,this._query)}}class gt{constructor(e,t,s){this.converter=t,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new _i(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new gt(this.firestore,e,this._key)}toJSON(){return{type:gt._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,s){if(Ja(t,gt._jsonSchema))return new gt(e,s||null,new ce(He.fromString(t.referencePath)))}}gt._jsonSchemaVersion="firestore/documentReference/1.0",gt._jsonSchema={type:ut("string",gt._jsonSchemaVersion),referencePath:ut("string")};class _i extends Vo{constructor(e,t,s){super(e,t,uf(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new gt(this.firestore,null,new ce(e))}withConverter(e){return new _i(this.firestore,e,this._path)}}function KS(r,e,...t){if(r=_t(r),k_("collection","path",e),r instanceof Ic){const s=He.fromString(e,...t);return Pg(s),new _i(r,null,s)}{if(!(r instanceof gt||r instanceof _i))throw new te(B.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=r._path.child(He.fromString(e,...t));return Pg(s),new _i(r.firestore,null,s)}}function _y(r,e,...t){if(r=_t(r),arguments.length===1&&(e=nf.newId()),k_("doc","path",e),r instanceof Ic){const s=He.fromString(e,...t);return kg(s),new gt(r,null,new ce(s))}{if(!(r instanceof gt||r instanceof _i))throw new te(B.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=r._path.child(He.fromString(e,...t));return kg(s),new gt(r.firestore,r instanceof _i?r.converter:null,new ce(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vy="AsyncQueue";class wy{constructor(e=Promise.resolve()){this.Zu=[],this.Xu=!1,this.ec=[],this.tc=null,this.nc=!1,this.rc=!1,this.sc=[],this.F_=new vv(this,"async_queue_retry"),this.oc=()=>{const s=gd();s&&ne(vy,"Visibility state changed to "+s.visibilityState),this.F_.y_()},this._c=e;const t=gd();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.oc)}get isShuttingDown(){return this.Xu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.ac(),this.uc(e)}enterRestrictedMode(e){if(!this.Xu){this.Xu=!0,this.rc=e||!1;const t=gd();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.oc)}}enqueue(e){if(this.ac(),this.Xu)return new Promise((()=>{}));const t=new ls;return this.uc((()=>this.Xu&&this.rc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Zu.push(e),this.cc())))}async cc(){if(this.Zu.length!==0){try{await this.Zu[0](),this.Zu.shift(),this.F_.reset()}catch(e){if(!No(e))throw e;ne(vy,"Operation failed with retryable error: "+e)}this.Zu.length>0&&this.F_.g_((()=>this.cc()))}}uc(e){const t=this._c.then((()=>(this.nc=!0,e().catch((s=>{throw this.tc=s,this.nc=!1,Or("INTERNAL UNHANDLED ERROR: ",Ey(s)),s})).then((s=>(this.nc=!1,s))))));return this._c=t,t}enqueueAfterDelay(e,t,s){this.ac(),this.sc.indexOf(e)>-1&&(t=0);const o=If.createAndSchedule(this,e,t,s,(l=>this.lc(l)));return this.ec.push(o),o}ac(){this.tc&&ge(47125,{hc:Ey(this.tc)})}verifyOperationInProgress(){}async Pc(){let e;do e=this._c,await e;while(e!==this._c)}Tc(e){for(const t of this.ec)if(t.timerId===e)return!0;return!1}Ic(e){return this.Pc().then((()=>{this.ec.sort(((t,s)=>t.targetTimeMs-s.targetTimeMs));for(const t of this.ec)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Pc()}))}dc(e){this.sc.push(e)}lc(e){const t=this.ec.indexOf(e);this.ec.splice(t,1)}}function Ey(r){let e=r.message||"";return r.stack&&(e=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ty(r){return(function(t,s){if(typeof t!="object"||t===null)return!1;const o=t;for(const l of s)if(l in o&&typeof o[l]=="function")return!0;return!1})(r,["next","error","complete"])}class Zu extends Ic{constructor(e,t,s,o){super(e,t,s,o),this.type="firestore",this._queue=new wy,this._persistenceKey=(o==null?void 0:o.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new wy(e),this._firestoreClient=void 0,await e}}}function QS(r,e){const t=typeof r=="object"?r:g_(),s=typeof r=="string"?r:$u,o=Ya(t,"firestore").getImmediate({identifier:s});if(!o._initialized){const l=wE("firestore");l&&GS(o,...l)}return o}function kf(r){if(r._terminated)throw new te(B.FAILED_PRECONDITION,"The client has already been terminated.");return r._firestoreClient||XS(r),r._firestoreClient}function XS(r){var e,t,s;const o=r._freezeSettings(),l=(function(p,g,_,E){return new _I(p,g,_,E.host,E.ssl,E.experimentalForceLongPolling,E.experimentalAutoDetectLongPolling,Lv(E.experimentalLongPollingOptions),E.useFetchStreams,E.isUsingEmulator)})(r._databaseId,((e=r._app)===null||e===void 0?void 0:e.options.appId)||"",r._persistenceKey,o);r._componentsProvider||!((t=o.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((s=o.localCache)===null||s===void 0)&&s._onlineComponentProvider)&&(r._componentsProvider={_offline:o.localCache._offlineComponentProvider,_online:o.localCache._onlineComponentProvider}),r._firestoreClient=new qS(r._authCredentials,r._appCheckCredentials,r._queue,l,r._componentsProvider&&(function(p){const g=p==null?void 0:p._online.build();return{_offline:p==null?void 0:p._offline.build(g),_online:g}})(r._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Tn(Nt.fromBase64String(e))}catch(t){throw new te(B.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Tn(Nt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Tn._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Ja(e,Tn._jsonSchema))return Tn.fromBase64String(e.bytes)}}Tn._jsonSchemaVersion="firestore/bytes/1.0",Tn._jsonSchema={type:ut("string",Tn._jsonSchemaVersion),bytes:ut("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sc{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new te(B.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new xt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pf{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ar{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new te(B.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new te(B.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return Se(this._lat,e._lat)||Se(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:ar._jsonSchemaVersion}}static fromJSON(e){if(Ja(e,ar._jsonSchema))return new ar(e.latitude,e.longitude)}}ar._jsonSchemaVersion="firestore/geoPoint/1.0",ar._jsonSchema={type:ut("string",ar._jsonSchemaVersion),latitude:ut("number"),longitude:ut("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lr{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(s,o){if(s.length!==o.length)return!1;for(let l=0;l<s.length;++l)if(s[l]!==o[l])return!1;return!0})(this._values,e._values)}toJSON(){return{type:lr._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Ja(e,lr._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((t=>typeof t=="number")))return new lr(e.vectorValues);throw new te(B.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}lr._jsonSchemaVersion="firestore/vectorValue/1.0",lr._jsonSchema={type:ut("string",lr._jsonSchemaVersion),vectorValues:ut("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YS=/^__.*__$/;class JS{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return this.fieldMask!==null?new Pi(e,this.data,this.fieldMask,t,this.fieldTransforms):new el(e,this.data,t,this.fieldTransforms)}}class Fv{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return new Pi(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function Uv(r){switch(r){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ge(40011,{Ec:r})}}class xf{constructor(e,t,s,o,l,h){this.settings=e,this.databaseId=t,this.serializer=s,this.ignoreUndefinedProperties=o,l===void 0&&this.Ac(),this.fieldTransforms=l||[],this.fieldMask=h||[]}get path(){return this.settings.path}get Ec(){return this.settings.Ec}Rc(e){return new xf(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Vc(e){var t;const s=(t=this.path)===null||t===void 0?void 0:t.child(e),o=this.Rc({path:s,mc:!1});return o.fc(e),o}gc(e){var t;const s=(t=this.path)===null||t===void 0?void 0:t.child(e),o=this.Rc({path:s,mc:!1});return o.Ac(),o}yc(e){return this.Rc({path:void 0,mc:!0})}wc(e){return ec(e,this.settings.methodName,this.settings.Sc||!1,this.path,this.settings.bc)}contains(e){return this.fieldMask.find((t=>e.isPrefixOf(t)))!==void 0||this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))!==void 0}Ac(){if(this.path)for(let e=0;e<this.path.length;e++)this.fc(this.path.get(e))}fc(e){if(e.length===0)throw this.wc("Document fields must not be empty");if(Uv(this.Ec)&&YS.test(e))throw this.wc('Document fields cannot begin and end with "__"')}}class ZS{constructor(e,t,s){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=s||wc(e)}Dc(e,t,s,o=!1){return new xf({Ec:e,methodName:t,bc:s,path:xt.emptyPath(),mc:!1,Sc:o},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function jv(r){const e=r._freezeSettings(),t=wc(r._databaseId);return new ZS(r._databaseId,!!e.ignoreUndefinedProperties,t)}function eA(r,e,t,s,o,l={}){const h=r.Dc(l.merge||l.mergeFields?2:0,e,t,o);Nf("Data must be an object, but it was:",h,s);const p=zv(s,h);let g,_;if(l.merge)g=new hn(h.fieldMask),_=h.fieldTransforms;else if(l.mergeFields){const E=[];for(const T of l.mergeFields){const A=Kd(e,T,t);if(!h.contains(A))throw new te(B.INVALID_ARGUMENT,`Field '${A}' is specified in your field mask but missing from your input data.`);$v(E,A)||E.push(A)}g=new hn(E),_=h.fieldTransforms.filter((T=>g.covers(T.field)))}else g=null,_=h.fieldTransforms;return new JS(new tn(p),g,_)}class Ac extends Pf{_toFieldTransform(e){if(e.Ec!==2)throw e.Ec===1?e.wc(`${this._methodName}() can only appear at the top level of your update data`):e.wc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Ac}}function tA(r,e,t,s){const o=r.Dc(1,e,t);Nf("Data must be an object, but it was:",o,s);const l=[],h=tn.empty();ki(s,((g,_)=>{const E=Df(e,g,t);_=_t(_);const T=o.gc(E);if(_ instanceof Ac)l.push(E);else{const A=il(_,T);A!=null&&(l.push(E),h.set(E,A))}}));const p=new hn(l);return new Fv(h,p,o.fieldTransforms)}function nA(r,e,t,s,o,l){const h=r.Dc(1,e,t),p=[Kd(e,s,t)],g=[o];if(l.length%2!=0)throw new te(B.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let A=0;A<l.length;A+=2)p.push(Kd(e,l[A])),g.push(l[A+1]);const _=[],E=tn.empty();for(let A=p.length-1;A>=0;--A)if(!$v(_,p[A])){const U=p[A];let W=g[A];W=_t(W);const X=h.gc(U);if(W instanceof Ac)_.push(U);else{const $=il(W,X);$!=null&&(_.push(U),E.set(U,$))}}const T=new hn(_);return new Fv(E,T,h.fieldTransforms)}function rA(r,e,t,s=!1){return il(t,r.Dc(s?4:3,e))}function il(r,e){if(Bv(r=_t(r)))return Nf("Unsupported field value:",e,r),zv(r,e);if(r instanceof Pf)return(function(s,o){if(!Uv(o.Ec))throw o.wc(`${s._methodName}() can only be used with update() and set()`);if(!o.path)throw o.wc(`${s._methodName}() is not currently supported inside arrays`);const l=s._toFieldTransform(o);l&&o.fieldTransforms.push(l)})(r,e),null;if(r===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),r instanceof Array){if(e.settings.mc&&e.Ec!==4)throw e.wc("Nested arrays are not supported");return(function(s,o){const l=[];let h=0;for(const p of s){let g=il(p,o.yc(h));g==null&&(g={nullValue:"NULL_VALUE"}),l.push(g),h++}return{arrayValue:{values:l}}})(r,e)}return(function(s,o){if((s=_t(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return zI(o.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const l=Ke.fromDate(s);return{timestampValue:Qu(o.serializer,l)}}if(s instanceof Ke){const l=new Ke(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:Qu(o.serializer,l)}}if(s instanceof ar)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof Tn)return{bytesValue:lv(o.serializer,s._byteString)};if(s instanceof gt){const l=o.databaseId,h=s.firestore._databaseId;if(!h.isEqual(l))throw o.wc(`Document reference is for database ${h.projectId}/${h.database} but should be for database ${l.projectId}/${l.database}`);return{referenceValue:pf(s.firestore._databaseId||o.databaseId,s._key.path)}}if(s instanceof lr)return(function(h,p){return{mapValue:{fields:{[M_]:{stringValue:F_},[qu]:{arrayValue:{values:h.toArray().map((_=>{if(typeof _!="number")throw p.wc("VectorValues must only contain numeric values.");return cf(p.serializer,_)}))}}}}}})(s,o);throw o.wc(`Unsupported field value: ${hc(s)}`)})(r,e)}function zv(r,e){const t={};return N_(r)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ki(r,((s,o)=>{const l=il(o,e.Vc(s));l!=null&&(t[s]=l)})),{mapValue:{fields:t}}}function Bv(r){return!(typeof r!="object"||r===null||r instanceof Array||r instanceof Date||r instanceof Ke||r instanceof ar||r instanceof Tn||r instanceof gt||r instanceof Pf||r instanceof lr)}function Nf(r,e,t){if(!Bv(t)||!P_(t)){const s=hc(t);throw s==="an object"?e.wc(r+" a custom object"):e.wc(r+" "+s)}}function Kd(r,e,t){if((e=_t(e))instanceof Sc)return e._internalPath;if(typeof e=="string")return Df(r,e);throw ec("Field path arguments must be of type string or ",r,!1,void 0,t)}const iA=new RegExp("[~\\*/\\[\\]]");function Df(r,e,t){if(e.search(iA)>=0)throw ec(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,r,!1,void 0,t);try{return new Sc(...e.split("."))._internalPath}catch{throw ec(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,r,!1,void 0,t)}}function ec(r,e,t,s,o){const l=s&&!s.isEmpty(),h=o!==void 0;let p=`Function ${e}() called with invalid data`;t&&(p+=" (via `toFirestore()`)"),p+=". ";let g="";return(l||h)&&(g+=" (found",l&&(g+=` in field ${s}`),h&&(g+=` in document ${o}`),g+=")"),new te(B.INVALID_ARGUMENT,p+r+g)}function $v(r,e){return r.some((t=>t.isEqual(e)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qv{constructor(e,t,s,o,l){this._firestore=e,this._userDataWriter=t,this._key=s,this._document=o,this._converter=l}get id(){return this._key.path.lastSegment()}get ref(){return new gt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new sA(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Hv("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class sA extends qv{data(){return super.data()}}function Hv(r,e){return typeof e=="string"?Df(r,e):e instanceof Sc?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oA(r){if(r.limitType==="L"&&r.explicitOrderBy.length===0)throw new te(B.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Vf{}class aA extends Vf{}function lA(r,e,...t){let s=[];e instanceof Vf&&s.push(e),s=s.concat(t),(function(l){const h=l.filter((g=>g instanceof bf)).length,p=l.filter((g=>g instanceof Of)).length;if(h>1||h>0&&p>0)throw new te(B.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(s);for(const o of s)r=o._apply(r);return r}class Of extends aA{constructor(e,t,s){super(),this._field=e,this._op=t,this._value=s,this.type="where"}static _create(e,t,s){return new Of(e,t,s)}_apply(e){const t=this._parse(e);return Wv(e._query,t),new Vo(e.firestore,e.converter,Md(e._query,t))}_parse(e){const t=jv(e.firestore);return(function(l,h,p,g,_,E,T){let A;if(_.isKeyField()){if(E==="array-contains"||E==="array-contains-any")throw new te(B.INVALID_ARGUMENT,`Invalid Query. You can't perform '${E}' queries on documentId().`);if(E==="in"||E==="not-in"){Sy(T,E);const W=[];for(const X of T)W.push(Iy(g,l,X));A={arrayValue:{values:W}}}else A=Iy(g,l,T)}else E!=="in"&&E!=="not-in"&&E!=="array-contains-any"||Sy(T,E),A=rA(p,h,T,E==="in"||E==="not-in");return lt.create(_,E,A)})(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}class bf extends Vf{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new bf(e,t)}_parse(e){const t=this._queryConstraints.map((s=>s._parse(e))).filter((s=>s.getFilters().length>0));return t.length===1?t[0]:Hn.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:((function(o,l){let h=o;const p=l.getFlattenedFilters();for(const g of p)Wv(h,g),h=Md(h,g)})(e._query,t),new Vo(e.firestore,e.converter,Md(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function Iy(r,e,t){if(typeof(t=_t(t))=="string"){if(t==="")throw new te(B.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!W_(e)&&t.indexOf("/")!==-1)throw new te(B.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const s=e.path.child(He.fromString(t));if(!ce.isDocumentKey(s))throw new te(B.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return Mg(r,new ce(s))}if(t instanceof gt)return Mg(r,t._key);throw new te(B.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${hc(t)}.`)}function Sy(r,e){if(!Array.isArray(r)||r.length===0)throw new te(B.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Wv(r,e){const t=(function(o,l){for(const h of o)for(const p of h.getFlattenedFilters())if(l.indexOf(p.op)>=0)return p.op;return null})(r.filters,(function(o){switch(o){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(e.op));if(t!==null)throw t===e.op?new te(B.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new te(B.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class uA{convertValue(e,t="none"){switch(Si(e)){case 0:return null;case 1:return e.booleanValue;case 2:return it(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Ii(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw ge(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const s={};return ki(e,((o,l)=>{s[o]=this.convertValue(l,t)})),s}convertVectorValue(e){var t,s,o;const l=(o=(s=(t=e.fields)===null||t===void 0?void 0:t[qu].arrayValue)===null||s===void 0?void 0:s.values)===null||o===void 0?void 0:o.map((h=>it(h.doubleValue)));return new lr(l)}convertGeoPoint(e){return new ar(it(e.latitude),it(e.longitude))}convertArray(e,t){return(e.values||[]).map((s=>this.convertValue(s,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const s=pc(e);return s==null?null:this.convertValue(s,t);case"estimate":return this.convertTimestamp(qa(e));default:return null}}convertTimestamp(e){const t=Ti(e);return new Ke(t.seconds,t.nanos)}convertDocumentKey(e,t){const s=He.fromString(e);Me(pv(s),9688,{name:e});const o=new Ha(s.get(1),s.get(3)),l=new ce(s.popFirst(5));return o.isEqual(t)||Or(`Document ${l} contains a document reference within a different database (${o.projectId}/${o.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cA(r,e,t){let s;return s=r?t&&(t.merge||t.mergeFields)?r.toFirestore(e,t):r.toFirestore(e):e,s}class Va{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class us extends qv{constructor(e,t,s,o,l,h){super(e,t,s,o,h),this._firestore=e,this._firestoreImpl=e,this.metadata=l}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new bu(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const s=this._document.data.field(Hv("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new te(B.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=us._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}us._jsonSchemaVersion="firestore/documentSnapshot/1.0",us._jsonSchema={type:ut("string",us._jsonSchemaVersion),bundleSource:ut("string","DocumentSnapshot"),bundleName:ut("string"),bundle:ut("string")};class bu extends us{data(e={}){return super.data(e)}}class _o{constructor(e,t,s,o){this._firestore=e,this._userDataWriter=t,this._snapshot=o,this.metadata=new Va(o.hasPendingWrites,o.fromCache),this.query=s}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((s=>{e.call(t,new bu(this._firestore,this._userDataWriter,s.key,s,new Va(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new te(B.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(o,l){if(o._snapshot.oldDocs.isEmpty()){let h=0;return o._snapshot.docChanges.map((p=>{const g=new bu(o._firestore,o._userDataWriter,p.doc.key,p.doc,new Va(o._snapshot.mutatedKeys.has(p.doc.key),o._snapshot.fromCache),o.query.converter);return p.doc,{type:"added",doc:g,oldIndex:-1,newIndex:h++}}))}{let h=o._snapshot.oldDocs;return o._snapshot.docChanges.filter((p=>l||p.type!==3)).map((p=>{const g=new bu(o._firestore,o._userDataWriter,p.doc.key,p.doc,new Va(o._snapshot.mutatedKeys.has(p.doc.key),o._snapshot.fromCache),o.query.converter);let _=-1,E=-1;return p.type!==0&&(_=h.indexOf(p.doc.key),h=h.delete(p.doc.key)),p.type!==1&&(h=h.add(p.doc),E=h.indexOf(p.doc.key)),{type:hA(p.type),doc:g,oldIndex:_,newIndex:E}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new te(B.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=_o._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=nf.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],s=[],o=[];return this.docs.forEach((l=>{l._document!==null&&(t.push(l._document),s.push(this._userDataWriter.convertObjectMap(l._document.data.value.mapValue.fields,"previous")),o.push(l.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function hA(r){switch(r){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ge(61501,{type:r})}}_o._jsonSchemaVersion="firestore/querySnapshot/1.0",_o._jsonSchema={type:ut("string",_o._jsonSchemaVersion),bundleSource:ut("string","QuerySnapshot"),bundleName:ut("string"),bundle:ut("string")};class Gv extends uA{constructor(e){super(),this.firestore=e}convertBytes(e){return new Tn(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new gt(this.firestore,null,t)}}function dA(r,...e){var t,s,o;r=_t(r);let l={includeMetadataChanges:!1,source:"default"},h=0;typeof e[h]!="object"||Ty(e[h])||(l=e[h++]);const p={includeMetadataChanges:l.includeMetadataChanges,source:l.source};if(Ty(e[h])){const T=e[h];e[h]=(t=T.next)===null||t===void 0?void 0:t.bind(T),e[h+1]=(s=T.error)===null||s===void 0?void 0:s.bind(T),e[h+2]=(o=T.complete)===null||o===void 0?void 0:o.bind(T)}let g,_,E;if(r instanceof gt)_=ba(r.firestore,Zu),E=uf(r._key.path),g={next:T=>{e[h]&&e[h](pA(_,r,T))},error:e[h+1],complete:e[h+2]};else{const T=ba(r,Vo);_=ba(T.firestore,Zu),E=T._query;const A=new Gv(_);g={next:U=>{e[h]&&e[h](new _o(_,A,T,U))},error:e[h+1],complete:e[h+2]},oA(r._query)}return(function(A,U,W,X){const $=new $S(X),le=new SS(U,$,W);return A.asyncQueue.enqueueAndForget((async()=>wS(await py(A),le))),()=>{$.Ou(),A.asyncQueue.enqueueAndForget((async()=>ES(await py(A),le)))}})(kf(_),E,p,g)}function fA(r,e){return(function(s,o){const l=new ls;return s.asyncQueue.enqueueAndForget((async()=>OS(await WS(s),o,l))),l.promise})(kf(r),e)}function pA(r,e,t){const s=t.docs.get(e._key),o=new Gv(r);return new us(r,o,e._key,s,new Va(t.hasPendingWrites,t.fromCache),e.converter)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mA{constructor(e,t){this._firestore=e,this._commitHandler=t,this._mutations=[],this._committed=!1,this._dataReader=jv(e)}set(e,t,s){this._verifyNotCommitted();const o=_d(e,this._firestore),l=cA(o.converter,t,s),h=eA(this._dataReader,"WriteBatch.set",o._key,l,o.converter!==null,s);return this._mutations.push(h.toMutation(o._key,$n.none())),this}update(e,t,s,...o){this._verifyNotCommitted();const l=_d(e,this._firestore);let h;return h=typeof(t=_t(t))=="string"||t instanceof Sc?nA(this._dataReader,"WriteBatch.update",l._key,t,s,o):tA(this._dataReader,"WriteBatch.update",l._key,t),this._mutations.push(h.toMutation(l._key,$n.exists(!0))),this}delete(e){this._verifyNotCommitted();const t=_d(e,this._firestore);return this._mutations=this._mutations.concat(new hf(t._key,$n.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new te(B.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function _d(r,e){if((r=_t(r)).firestore!==e)throw new te(B.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ay(r){return kf(r=ba(r,Zu)),new mA(r,(e=>fA(r,e)))}(function(e,t=!0){(function(o){Po=o})(ko),hr(new qn("firestore",((s,{instanceIdentifier:o,options:l})=>{const h=s.getProvider("app").getImmediate(),p=new Zu(new eI(s.getProvider("auth-internal")),new rI(h,s.getProvider("app-check-internal")),(function(_,E){if(!Object.prototype.hasOwnProperty.apply(_.options,["projectId"]))throw new te(B.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ha(_.options.projectId,E)})(h,o),h);return l=Object.assign({useFetchStreams:t},l),p._setSettings(l),p}),"PUBLIC").setMultipleInstances(!0)),In(Ig,Sg,e),In(Ig,Sg,"esm2017")})();function Lf(r,e){var t={};for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&e.indexOf(s)<0&&(t[s]=r[s]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,s=Object.getOwnPropertySymbols(r);o<s.length;o++)e.indexOf(s[o])<0&&Object.prototype.propertyIsEnumerable.call(r,s[o])&&(t[s[o]]=r[s[o]]);return t}function Kv(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const gA=Kv,Qv=new gs("auth","Firebase",Kv());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tc=new cc("@firebase/auth");function yA(r,...e){tc.logLevel<=Re.WARN&&tc.warn(`Auth (${ko}): ${r}`,...e)}function Lu(r,...e){tc.logLevel<=Re.ERROR&&tc.error(`Auth (${ko}): ${r}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lr(r,...e){throw Mf(r,...e)}function ur(r,...e){return Mf(r,...e)}function Xv(r,e,t){const s=Object.assign(Object.assign({},gA()),{[e]:t});return new gs("auth","Firebase",s).create(e,{appName:r.name})}function vi(r){return Xv(r,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Mf(r,...e){if(typeof r!="string"){const t=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=r.name),r._errorFactory.create(t,...s)}return Qv.create(r,...e)}function _e(r,e,...t){if(!r)throw Mf(e,...t)}function Nr(r){const e="INTERNAL ASSERTION FAILED: "+r;throw Lu(e),new Error(e)}function Mr(r,e){r||Nr(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qd(){var r;return typeof self<"u"&&((r=self.location)===null||r===void 0?void 0:r.href)||""}function _A(){return Cy()==="http:"||Cy()==="https:"}function Cy(){var r;return typeof self<"u"&&((r=self.location)===null||r===void 0?void 0:r.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vA(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(_A()||u_()||"connection"in navigator)?navigator.onLine:!0}function wA(){if(typeof navigator>"u")return null;const r=navigator;return r.languages&&r.languages[0]||r.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sl{constructor(e,t){this.shortDelay=e,this.longDelay=t,Mr(t>e,"Short delay should be less than long delay!"),this.isMobile=AE()||kE()}get(){return vA()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ff(r,e){Mr(r.emulator,"Emulator should always be set here");const{url:t}=r.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yv{static initialize(e,t,s){this.fetchImpl=e,t&&(this.headersImpl=t),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Nr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Nr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Nr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EA={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TA=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],IA=new sl(3e4,6e4);function Cc(r,e){return r.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:r.tenantId}):e}async function Oo(r,e,t,s,o={}){return Jv(r,o,async()=>{let l={},h={};s&&(e==="GET"?h=s:l={body:JSON.stringify(s)});const p=Xa(Object.assign({key:r.config.apiKey},h)).slice(1),g=await r._getAdditionalHeaders();g["Content-Type"]="application/json",r.languageCode&&(g["X-Firebase-Locale"]=r.languageCode);const _=Object.assign({method:e,headers:g},l);return RE()||(_.referrerPolicy="no-referrer"),r.emulatorConfig&&Ro(r.emulatorConfig.host)&&(_.credentials="include"),Yv.fetch()(await e0(r,r.config.apiHost,t,p),_)})}async function Jv(r,e,t){r._canInitEmulator=!1;const s=Object.assign(Object.assign({},EA),e);try{const o=new SA(r),l=await Promise.race([t(),o.promise]);o.clearNetworkTimeout();const h=await l.json();if("needConfirmation"in h)throw Pu(r,"account-exists-with-different-credential",h);if(l.ok&&!("errorMessage"in h))return h;{const p=l.ok?h.errorMessage:h.error.message,[g,_]=p.split(" : ");if(g==="FEDERATED_USER_ID_ALREADY_LINKED")throw Pu(r,"credential-already-in-use",h);if(g==="EMAIL_EXISTS")throw Pu(r,"email-already-in-use",h);if(g==="USER_DISABLED")throw Pu(r,"user-disabled",h);const E=s[g]||g.toLowerCase().replace(/[_\s]+/g,"-");if(_)throw Xv(r,E,_);Lr(r,E)}}catch(o){if(o instanceof Wn)throw o;Lr(r,"network-request-failed",{message:String(o)})}}async function Zv(r,e,t,s,o={}){const l=await Oo(r,e,t,s,o);return"mfaPendingCredential"in l&&Lr(r,"multi-factor-auth-required",{_serverResponse:l}),l}async function e0(r,e,t,s){const o=`${e}${t}?${s}`,l=r,h=l.config.emulator?Ff(r.config,o):`${r.config.apiScheme}://${o}`;return TA.includes(t)&&(await l._persistenceManagerAvailable,l._getPersistenceType()==="COOKIE")?l._getPersistence()._getFinalTarget(h).toString():h}class SA{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,s)=>{this.timer=setTimeout(()=>s(ur(this.auth,"network-request-failed")),IA.get())})}}function Pu(r,e,t){const s={appName:r.name};t.email&&(s.email=t.email),t.phoneNumber&&(s.phoneNumber=t.phoneNumber);const o=ur(r,e,s);return o.customData._tokenResponse=t,o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function AA(r,e){return Oo(r,"POST","/v1/accounts:delete",e)}async function nc(r,e){return Oo(r,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ja(r){if(r)try{const e=new Date(Number(r));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function CA(r,e=!1){const t=_t(r),s=await t.getIdToken(e),o=Uf(s);_e(o&&o.exp&&o.auth_time&&o.iat,t.auth,"internal-error");const l=typeof o.firebase=="object"?o.firebase:void 0,h=l==null?void 0:l.sign_in_provider;return{claims:o,token:s,authTime:ja(vd(o.auth_time)),issuedAtTime:ja(vd(o.iat)),expirationTime:ja(vd(o.exp)),signInProvider:h||null,signInSecondFactor:(l==null?void 0:l.sign_in_second_factor)||null}}function vd(r){return Number(r)*1e3}function Uf(r){const[e,t,s]=r.split(".");if(e===void 0||t===void 0||s===void 0)return Lu("JWT malformed, contained fewer than 3 sections"),null;try{const o=r_(t);return o?JSON.parse(o):(Lu("Failed to decode base64 JWT payload"),null)}catch(o){return Lu("Caught error parsing JWT payload as JSON",o==null?void 0:o.toString()),null}}function Ry(r){const e=Uf(r);return _e(e,"internal-error"),_e(typeof e.exp<"u","internal-error"),_e(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qa(r,e,t=!1){if(t)return e;try{return await e}catch(s){throw s instanceof Wn&&RA(s)&&r.auth.currentUser===r&&await r.auth.signOut(),s}}function RA({code:r}){return r==="auth/user-disabled"||r==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kA{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const o=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,o)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xd{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=ja(this.lastLoginAt),this.creationTime=ja(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rc(r){var e;const t=r.auth,s=await r.getIdToken(),o=await Qa(r,nc(t,{idToken:s}));_e(o==null?void 0:o.users.length,t,"internal-error");const l=o.users[0];r._notifyReloadListener(l);const h=!((e=l.providerUserInfo)===null||e===void 0)&&e.length?t0(l.providerUserInfo):[],p=xA(r.providerData,h),g=r.isAnonymous,_=!(r.email&&l.passwordHash)&&!(p!=null&&p.length),E=g?_:!1,T={uid:l.localId,displayName:l.displayName||null,photoURL:l.photoUrl||null,email:l.email||null,emailVerified:l.emailVerified||!1,phoneNumber:l.phoneNumber||null,tenantId:l.tenantId||null,providerData:p,metadata:new Xd(l.createdAt,l.lastLoginAt),isAnonymous:E};Object.assign(r,T)}async function PA(r){const e=_t(r);await rc(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function xA(r,e){return[...r.filter(s=>!e.some(o=>o.providerId===s.providerId)),...e]}function t0(r){return r.map(e=>{var{providerId:t}=e,s=Lf(e,["providerId"]);return{providerId:t,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function NA(r,e){const t=await Jv(r,{},async()=>{const s=Xa({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:o,apiKey:l}=r.config,h=await e0(r,o,"/v1/token",`key=${l}`),p=await r._getAdditionalHeaders();p["Content-Type"]="application/x-www-form-urlencoded";const g={method:"POST",headers:p,body:s};return r.emulatorConfig&&Ro(r.emulatorConfig.host)&&(g.credentials="include"),Yv.fetch()(h,g)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function DA(r,e){return Oo(r,"POST","/v2/accounts:revokeToken",Cc(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vo{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){_e(e.idToken,"internal-error"),_e(typeof e.idToken<"u","internal-error"),_e(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Ry(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){_e(e.length!==0,"internal-error");const t=Ry(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(_e(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:s,refreshToken:o,expiresIn:l}=await NA(e,t);this.updateTokensAndExpiration(s,o,Number(l))}updateTokensAndExpiration(e,t,s){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,t){const{refreshToken:s,accessToken:o,expirationTime:l}=t,h=new vo;return s&&(_e(typeof s=="string","internal-error",{appName:e}),h.refreshToken=s),o&&(_e(typeof o=="string","internal-error",{appName:e}),h.accessToken=o),l&&(_e(typeof l=="number","internal-error",{appName:e}),h.expirationTime=l),h}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new vo,this.toJSON())}_performRefresh(){return Nr("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ui(r,e){_e(typeof r=="string"||typeof r>"u","internal-error",{appName:e})}class Bn{constructor(e){var{uid:t,auth:s,stsTokenManager:o}=e,l=Lf(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new kA(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=s,this.stsTokenManager=o,this.accessToken=o.accessToken,this.displayName=l.displayName||null,this.email=l.email||null,this.emailVerified=l.emailVerified||!1,this.phoneNumber=l.phoneNumber||null,this.photoURL=l.photoURL||null,this.isAnonymous=l.isAnonymous||!1,this.tenantId=l.tenantId||null,this.providerData=l.providerData?[...l.providerData]:[],this.metadata=new Xd(l.createdAt||void 0,l.lastLoginAt||void 0)}async getIdToken(e){const t=await Qa(this,this.stsTokenManager.getToken(this.auth,e));return _e(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return CA(this,e)}reload(){return PA(this)}_assign(e){this!==e&&(_e(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Bn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){_e(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),t&&await rc(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(zn(this.auth.app))return Promise.reject(vi(this.auth));const e=await this.getIdToken();return await Qa(this,AA(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var s,o,l,h,p,g,_,E;const T=(s=t.displayName)!==null&&s!==void 0?s:void 0,A=(o=t.email)!==null&&o!==void 0?o:void 0,U=(l=t.phoneNumber)!==null&&l!==void 0?l:void 0,W=(h=t.photoURL)!==null&&h!==void 0?h:void 0,X=(p=t.tenantId)!==null&&p!==void 0?p:void 0,$=(g=t._redirectEventId)!==null&&g!==void 0?g:void 0,le=(_=t.createdAt)!==null&&_!==void 0?_:void 0,he=(E=t.lastLoginAt)!==null&&E!==void 0?E:void 0,{uid:me,emailVerified:Ee,isAnonymous:je,providerData:Te,stsTokenManager:x}=t;_e(me&&x,e,"internal-error");const S=vo.fromJSON(this.name,x);_e(typeof me=="string",e,"internal-error"),ui(T,e.name),ui(A,e.name),_e(typeof Ee=="boolean",e,"internal-error"),_e(typeof je=="boolean",e,"internal-error"),ui(U,e.name),ui(W,e.name),ui(X,e.name),ui($,e.name),ui(le,e.name),ui(he,e.name);const R=new Bn({uid:me,auth:e,email:A,emailVerified:Ee,displayName:T,isAnonymous:je,photoURL:W,phoneNumber:U,tenantId:X,stsTokenManager:S,createdAt:le,lastLoginAt:he});return Te&&Array.isArray(Te)&&(R.providerData=Te.map(P=>Object.assign({},P))),$&&(R._redirectEventId=$),R}static async _fromIdTokenResponse(e,t,s=!1){const o=new vo;o.updateFromServerResponse(t);const l=new Bn({uid:t.localId,auth:e,stsTokenManager:o,isAnonymous:s});return await rc(l),l}static async _fromGetAccountInfoResponse(e,t,s){const o=t.users[0];_e(o.localId!==void 0,"internal-error");const l=o.providerUserInfo!==void 0?t0(o.providerUserInfo):[],h=!(o.email&&o.passwordHash)&&!(l!=null&&l.length),p=new vo;p.updateFromIdToken(s);const g=new Bn({uid:o.localId,auth:e,stsTokenManager:p,isAnonymous:h}),_={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:l,metadata:new Xd(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!(l!=null&&l.length)};return Object.assign(g,_),g}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ky=new Map;function Dr(r){Mr(r instanceof Function,"Expected a class definition");let e=ky.get(r);return e?(Mr(e instanceof r,"Instance stored in cache mismatched with class"),e):(e=new r,ky.set(r,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n0{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}n0.type="NONE";const Py=n0;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mu(r,e,t){return`firebase:${r}:${e}:${t}`}class wo{constructor(e,t,s){this.persistence=e,this.auth=t,this.userKey=s;const{config:o,name:l}=this.auth;this.fullUserKey=Mu(this.userKey,o.apiKey,l),this.fullPersistenceKey=Mu("persistence",o.apiKey,l),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await nc(this.auth,{idToken:e}).catch(()=>{});return t?Bn._fromGetAccountInfoResponse(this.auth,t,e):null}return Bn._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,s="authUser"){if(!t.length)return new wo(Dr(Py),e,s);const o=(await Promise.all(t.map(async _=>{if(await _._isAvailable())return _}))).filter(_=>_);let l=o[0]||Dr(Py);const h=Mu(s,e.config.apiKey,e.name);let p=null;for(const _ of t)try{const E=await _._get(h);if(E){let T;if(typeof E=="string"){const A=await nc(e,{idToken:E}).catch(()=>{});if(!A)break;T=await Bn._fromGetAccountInfoResponse(e,A,E)}else T=Bn._fromJSON(e,E);_!==l&&(p=T),l=_;break}}catch{}const g=o.filter(_=>_._shouldAllowMigration);return!l._shouldAllowMigration||!g.length?new wo(l,e,s):(l=g[0],p&&await l._set(h,p.toJSON()),await Promise.all(t.map(async _=>{if(_!==l)try{await _._remove(h)}catch{}})),new wo(l,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xy(r){const e=r.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(o0(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(r0(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(l0(e))return"Blackberry";if(u0(e))return"Webos";if(i0(e))return"Safari";if((e.includes("chrome/")||s0(e))&&!e.includes("edge/"))return"Chrome";if(a0(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=r.match(t);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function r0(r=zt()){return/firefox\//i.test(r)}function i0(r=zt()){const e=r.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function s0(r=zt()){return/crios\//i.test(r)}function o0(r=zt()){return/iemobile/i.test(r)}function a0(r=zt()){return/android/i.test(r)}function l0(r=zt()){return/blackberry/i.test(r)}function u0(r=zt()){return/webos/i.test(r)}function jf(r=zt()){return/iphone|ipad|ipod/i.test(r)||/macintosh/i.test(r)&&/mobile/i.test(r)}function VA(r=zt()){var e;return jf(r)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function OA(){return PE()&&document.documentMode===10}function c0(r=zt()){return jf(r)||a0(r)||u0(r)||l0(r)||/windows phone/i.test(r)||o0(r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function h0(r,e=[]){let t;switch(r){case"Browser":t=xy(zt());break;case"Worker":t=`${xy(zt())}-${r}`;break;default:t=r}const s=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${ko}/${s}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bA{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const s=l=>new Promise((h,p)=>{try{const g=e(l);h(g)}catch(g){p(g)}});s.onAbort=t,this.queue.push(s);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const s of this.queue)await s(e),s.onAbort&&t.push(s.onAbort)}catch(s){t.reverse();for(const o of t)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function LA(r,e={}){return Oo(r,"GET","/v2/passwordPolicy",Cc(r,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MA=6;class FA{constructor(e){var t,s,o,l;const h=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=h.minPasswordLength)!==null&&t!==void 0?t:MA,h.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=h.maxPasswordLength),h.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=h.containsLowercaseCharacter),h.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=h.containsUppercaseCharacter),h.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=h.containsNumericCharacter),h.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=h.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(o=(s=e.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&o!==void 0?o:"",this.forceUpgradeOnSignin=(l=e.forceUpgradeOnSignin)!==null&&l!==void 0?l:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,s,o,l,h,p;const g={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,g),this.validatePasswordCharacterOptions(e,g),g.isValid&&(g.isValid=(t=g.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),g.isValid&&(g.isValid=(s=g.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),g.isValid&&(g.isValid=(o=g.containsLowercaseLetter)!==null&&o!==void 0?o:!0),g.isValid&&(g.isValid=(l=g.containsUppercaseLetter)!==null&&l!==void 0?l:!0),g.isValid&&(g.isValid=(h=g.containsNumericCharacter)!==null&&h!==void 0?h:!0),g.isValid&&(g.isValid=(p=g.containsNonAlphanumericCharacter)!==null&&p!==void 0?p:!0),g}validatePasswordLengthOptions(e,t){const s=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;s&&(t.meetsMinPasswordLength=e.length>=s),o&&(t.meetsMaxPasswordLength=e.length<=o)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let s;for(let o=0;o<e.length;o++)s=e.charAt(o),this.updatePasswordCharacterOptionsStatuses(t,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,t,s,o,l){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UA{constructor(e,t,s,o){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=s,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Ny(this),this.idTokenSubscription=new Ny(this),this.beforeStateQueue=new bA(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Qv,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=o.sdkClientVersion,this._persistenceManagerAvailable=new Promise(l=>this._resolvePersistenceManagerAvailable=l)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Dr(t)),this._initializationPromise=this.queue(async()=>{var s,o,l;if(!this._deleted&&(this.persistenceManager=await wo.create(this,e),(s=this._resolvePersistenceManagerAvailable)===null||s===void 0||s.call(this),!this._deleted)){if(!((o=this._popupRedirectResolver)===null||o===void 0)&&o._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((l=this.currentUser)===null||l===void 0?void 0:l.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await nc(this,{idToken:e}),s=await Bn._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(s)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(zn(this.app)){const h=this.app.settings.authIdToken;return h?new Promise(p=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(h).then(p,p))}):this.directlySetCurrentUser(null)}const s=await this.assertedPersistence.getCurrentUser();let o=s,l=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const h=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,p=o==null?void 0:o._redirectEventId,g=await this.tryRedirectSignIn(e);(!h||h===p)&&(g!=null&&g.user)&&(o=g.user,l=!0)}if(!o)return this.directlySetCurrentUser(null);if(!o._redirectEventId){if(l)try{await this.beforeStateQueue.runMiddleware(o)}catch(h){o=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(h))}return o?this.reloadAndSetCurrentUserOrClear(o):this.directlySetCurrentUser(null)}return _e(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===o._redirectEventId?this.directlySetCurrentUser(o):this.reloadAndSetCurrentUserOrClear(o)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await rc(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=wA()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(zn(this.app))return Promise.reject(vi(this));const t=e?_t(e):null;return t&&_e(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&_e(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return zn(this.app)?Promise.reject(vi(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return zn(this.app)?Promise.reject(vi(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Dr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await LA(this),t=new FA(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new gs("auth","Firebase",e())}onAuthStateChanged(e,t,s){return this.registerStateListener(this.authStateSubscription,e,t,s)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,s){return this.registerStateListener(this.idTokenSubscription,e,t,s)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(s.tenantId=this.tenantId),await DA(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const s=await this.getOrInitRedirectPersistenceManager(t);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Dr(e)||this._popupRedirectResolver;_e(t,this,"argument-error"),this.redirectPersistenceManager=await wo.create(this,[Dr(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,s;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,s,o){if(this._deleted)return()=>{};const l=typeof t=="function"?t:t.next.bind(t);let h=!1;const p=this._isInitialized?Promise.resolve():this._initializationPromise;if(_e(p,this,"internal-error"),p.then(()=>{h||l(this.currentUser)}),typeof t=="function"){const g=e.addObserver(t,s,o);return()=>{h=!0,g()}}else{const g=e.addObserver(t);return()=>{h=!0,g()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return _e(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=h0(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(t["X-Firebase-Client"]=s);const o=await this._getAppCheckToken();return o&&(t["X-Firebase-AppCheck"]=o),t}async _getAppCheckToken(){var e;if(zn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&yA(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function Rc(r){return _t(r)}class Ny{constructor(e){this.auth=e,this.observer=null,this.addObserver=LE(t=>this.observer=t)}get next(){return _e(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let zf={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function jA(r){zf=r}function zA(r){return zf.loadJS(r)}function BA(){return zf.gapiScript}function $A(r){return`__${r}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qA(r,e){const t=Ya(r,"auth");if(t.isInitialized()){const o=t.getImmediate(),l=t.getOptions();if(cs(l,e??{}))return o;Lr(o,"already-initialized")}return t.initialize({options:e})}function HA(r,e){const t=(e==null?void 0:e.persistence)||[],s=(Array.isArray(t)?t:[t]).map(Dr);e!=null&&e.errorMap&&r._updateErrorMap(e.errorMap),r._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function WA(r,e,t){const s=Rc(r);_e(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const o=!1,l=d0(e),{host:h,port:p}=GA(e),g=p===null?"":`:${p}`,_={url:`${l}//${h}${g}/`},E=Object.freeze({host:h,port:p,protocol:l.replace(":",""),options:Object.freeze({disableWarnings:o})});if(!s._canInitEmulator){_e(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),_e(cs(_,s.config.emulator)&&cs(E,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=_,s.emulatorConfig=E,s.settings.appVerificationDisabledForTesting=!0,Ro(h)?(a_(`${l}//${h}${g}`),l_("Auth",!0)):KA()}function d0(r){const e=r.indexOf(":");return e<0?"":r.substr(0,e+1)}function GA(r){const e=d0(r),t=/(\/\/)?([^?#/]+)/.exec(r.substr(e.length));if(!t)return{host:"",port:null};const s=t[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(s);if(o){const l=o[1];return{host:l,port:Dy(s.substr(l.length+1))}}else{const[l,h]=s.split(":");return{host:l,port:Dy(h)}}}function Dy(r){if(!r)return null;const e=Number(r);return isNaN(e)?null:e}function KA(){function r(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",r):r())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f0{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Nr("not implemented")}_getIdTokenResponse(e){return Nr("not implemented")}_linkToIdToken(e,t){return Nr("not implemented")}_getReauthenticationResolver(e){return Nr("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Eo(r,e){return Zv(r,"POST","/v1/accounts:signInWithIdp",Cc(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QA="http://localhost";class fs extends f0{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new fs(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Lr("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:o}=t,l=Lf(t,["providerId","signInMethod"]);if(!s||!o)return null;const h=new fs(s,o);return h.idToken=l.idToken||void 0,h.accessToken=l.accessToken||void 0,h.secret=l.secret,h.nonce=l.nonce,h.pendingToken=l.pendingToken||null,h}_getIdTokenResponse(e){const t=this.buildRequest();return Eo(e,t)}_linkToIdToken(e,t){const s=this.buildRequest();return s.idToken=t,Eo(e,s)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Eo(e,t)}buildRequest(){const e={requestUri:QA,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Xa(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p0{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ol extends p0{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ci extends ol{constructor(){super("facebook.com")}static credential(e){return fs._fromParams({providerId:ci.PROVIDER_ID,signInMethod:ci.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ci.credentialFromTaggedObject(e)}static credentialFromError(e){return ci.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ci.credential(e.oauthAccessToken)}catch{return null}}}ci.FACEBOOK_SIGN_IN_METHOD="facebook.com";ci.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hi extends ol{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return fs._fromParams({providerId:hi.PROVIDER_ID,signInMethod:hi.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return hi.credentialFromTaggedObject(e)}static credentialFromError(e){return hi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:s}=e;if(!t&&!s)return null;try{return hi.credential(t,s)}catch{return null}}}hi.GOOGLE_SIGN_IN_METHOD="google.com";hi.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class di extends ol{constructor(){super("github.com")}static credential(e){return fs._fromParams({providerId:di.PROVIDER_ID,signInMethod:di.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return di.credentialFromTaggedObject(e)}static credentialFromError(e){return di.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return di.credential(e.oauthAccessToken)}catch{return null}}}di.GITHUB_SIGN_IN_METHOD="github.com";di.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fi extends ol{constructor(){super("twitter.com")}static credential(e,t){return fs._fromParams({providerId:fi.PROVIDER_ID,signInMethod:fi.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return fi.credentialFromTaggedObject(e)}static credentialFromError(e){return fi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:s}=e;if(!t||!s)return null;try{return fi.credential(t,s)}catch{return null}}}fi.TWITTER_SIGN_IN_METHOD="twitter.com";fi.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function XA(r,e){return Zv(r,"POST","/v1/accounts:signUp",Cc(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ri{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,s,o=!1){const l=await Bn._fromIdTokenResponse(e,s,o),h=Vy(s);return new Ri({user:l,providerId:h,_tokenResponse:s,operationType:t})}static async _forOperation(e,t,s){await e._updateTokensIfNecessary(s,!0);const o=Vy(s);return new Ri({user:e,providerId:o,_tokenResponse:s,operationType:t})}}function Vy(r){return r.providerId?r.providerId:"phoneNumber"in r?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function YA(r){var e;if(zn(r.app))return Promise.reject(vi(r));const t=Rc(r);if(await t._initializationPromise,!((e=t.currentUser)===null||e===void 0)&&e.isAnonymous)return new Ri({user:t.currentUser,providerId:null,operationType:"signIn"});const s=await XA(t,{returnSecureToken:!0}),o=await Ri._fromIdTokenResponse(t,"signIn",s,!0);return await t._updateCurrentUser(o.user),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ic extends Wn{constructor(e,t,s,o){var l;super(t.code,t.message),this.operationType=s,this.user=o,Object.setPrototypeOf(this,ic.prototype),this.customData={appName:e.name,tenantId:(l=e.tenantId)!==null&&l!==void 0?l:void 0,_serverResponse:t.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,t,s,o){return new ic(e,t,s,o)}}function m0(r,e,t,s){return(e==="reauthenticate"?t._getReauthenticationResolver(r):t._getIdTokenResponse(r)).catch(l=>{throw l.code==="auth/multi-factor-auth-required"?ic._fromErrorAndOperation(r,l,e,s):l})}async function JA(r,e,t=!1){const s=await Qa(r,e._linkToIdToken(r.auth,await r.getIdToken()),t);return Ri._forOperation(r,"link",s)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ZA(r,e,t=!1){const{auth:s}=r;if(zn(s.app))return Promise.reject(vi(s));const o="reauthenticate";try{const l=await Qa(r,m0(s,o,e,r),t);_e(l.idToken,s,"internal-error");const h=Uf(l.idToken);_e(h,s,"internal-error");const{sub:p}=h;return _e(r.uid===p,s,"user-mismatch"),Ri._forOperation(r,o,l)}catch(l){throw(l==null?void 0:l.code)==="auth/user-not-found"&&Lr(s,"user-mismatch"),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eC(r,e,t=!1){if(zn(r.app))return Promise.reject(vi(r));const s="signIn",o=await m0(r,s,e),l=await Ri._fromIdTokenResponse(r,s,o);return t||await r._updateCurrentUser(l.user),l}function tC(r,e,t,s){return _t(r).onIdTokenChanged(e,t,s)}function nC(r,e,t){return _t(r).beforeAuthStateChanged(e,t)}function rC(r,e,t,s){return _t(r).onAuthStateChanged(e,t,s)}const sc="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g0{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(sc,"1"),this.storage.removeItem(sc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iC=1e3,sC=10;class y0 extends g0{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=c0(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const s=this.storage.getItem(t),o=this.localCache[t];s!==o&&e(t,o,s)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((h,p,g)=>{this.notifyListeners(h,g)});return}const s=e.key;t?this.detachListener():this.stopPolling();const o=()=>{const h=this.storage.getItem(s);!t&&this.localCache[s]===h||this.notifyListeners(s,h)},l=this.storage.getItem(s);OA()&&l!==e.newValue&&e.newValue!==e.oldValue?setTimeout(o,sC):o()}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const o of Array.from(s))o(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:s}),!0)})},iC)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}y0.type="LOCAL";const oC=y0;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _0 extends g0{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}_0.type="SESSION";const v0=_0;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aC(r){return Promise.all(r.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(o=>o.isListeningto(e));if(t)return t;const s=new kc(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:s,eventType:o,data:l}=t.data,h=this.handlersMap[o];if(!(h!=null&&h.size))return;t.ports[0].postMessage({status:"ack",eventId:s,eventType:o});const p=Array.from(h).map(async _=>_(t.origin,l)),g=await aC(p);t.ports[0].postMessage({status:"done",eventId:s,eventType:o,response:g})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}kc.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bf(r="",e=10){let t="";for(let s=0;s<e;s++)t+=Math.floor(Math.random()*10);return r+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lC{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,s=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let l,h;return new Promise((p,g)=>{const _=Bf("",20);o.port1.start();const E=setTimeout(()=>{g(new Error("unsupported_event"))},s);h={messageChannel:o,onMessage(T){const A=T;if(A.data.eventId===_)switch(A.data.status){case"ack":clearTimeout(E),l=setTimeout(()=>{g(new Error("timeout"))},3e3);break;case"done":clearTimeout(l),p(A.data.response);break;default:clearTimeout(E),clearTimeout(l),g(new Error("invalid_response"));break}}},this.handlers.add(h),o.port1.addEventListener("message",h.onMessage),this.target.postMessage({eventType:e,eventId:_,data:t},[o.port2])}).finally(()=>{h&&this.removeMessageHandler(h)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cr(){return window}function uC(r){cr().location.href=r}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function w0(){return typeof cr().WorkerGlobalScope<"u"&&typeof cr().importScripts=="function"}async function cC(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function hC(){var r;return((r=navigator==null?void 0:navigator.serviceWorker)===null||r===void 0?void 0:r.controller)||null}function dC(){return w0()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const E0="firebaseLocalStorageDb",fC=1,oc="firebaseLocalStorage",T0="fbase_key";class al{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Pc(r,e){return r.transaction([oc],e?"readwrite":"readonly").objectStore(oc)}function pC(){const r=indexedDB.deleteDatabase(E0);return new al(r).toPromise()}function Yd(){const r=indexedDB.open(E0,fC);return new Promise((e,t)=>{r.addEventListener("error",()=>{t(r.error)}),r.addEventListener("upgradeneeded",()=>{const s=r.result;try{s.createObjectStore(oc,{keyPath:T0})}catch(o){t(o)}}),r.addEventListener("success",async()=>{const s=r.result;s.objectStoreNames.contains(oc)?e(s):(s.close(),await pC(),e(await Yd()))})})}async function Oy(r,e,t){const s=Pc(r,!0).put({[T0]:e,value:t});return new al(s).toPromise()}async function mC(r,e){const t=Pc(r,!1).get(e),s=await new al(t).toPromise();return s===void 0?null:s.value}function by(r,e){const t=Pc(r,!0).delete(e);return new al(t).toPromise()}const gC=800,yC=3;class I0{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Yd(),this.db)}async _withRetries(e){let t=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(t++>yC)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return w0()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=kc._getInstance(dC()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await cC(),!this.activeServiceWorker)return;this.sender=new lC(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((t=s[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||hC()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Yd();return await Oy(e,sc,"1"),await by(e,sc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(s=>Oy(s,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(s=>mC(s,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>by(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(o=>{const l=Pc(o,!1).getAll();return new al(l).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],s=new Set;if(e.length!==0)for(const{fbase_key:o,value:l}of e)s.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(l)&&(this.notifyListeners(o,l),t.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!s.has(o)&&(this.notifyListeners(o,null),t.push(o));return t}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const o of Array.from(s))o(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),gC)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}I0.type="LOCAL";const _C=I0;new sl(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vC(r,e){return e?Dr(e):(_e(r._popupRedirectResolver,r,"argument-error"),r._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $f extends f0{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Eo(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Eo(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Eo(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function wC(r){return eC(r.auth,new $f(r),r.bypassAuthState)}function EC(r){const{auth:e,user:t}=r;return _e(t,e,"internal-error"),ZA(t,new $f(r),r.bypassAuthState)}async function TC(r){const{auth:e,user:t}=r;return _e(t,e,"internal-error"),JA(t,new $f(r),r.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S0{constructor(e,t,s,o,l=!1){this.auth=e,this.resolver=s,this.user=o,this.bypassAuthState=l,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:s,postBody:o,tenantId:l,error:h,type:p}=e;if(h){this.reject(h);return}const g={auth:this.auth,requestUri:t,sessionId:s,tenantId:l||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(p)(g))}catch(_){this.reject(_)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return wC;case"linkViaPopup":case"linkViaRedirect":return TC;case"reauthViaPopup":case"reauthViaRedirect":return EC;default:Lr(this.auth,"internal-error")}}resolve(e){Mr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Mr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IC=new sl(2e3,1e4);class go extends S0{constructor(e,t,s,o,l){super(e,t,o,l),this.provider=s,this.authWindow=null,this.pollId=null,go.currentPopupAction&&go.currentPopupAction.cancel(),go.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return _e(e,this.auth,"internal-error"),e}async onExecution(){Mr(this.filter.length===1,"Popup operations only handle one event");const e=Bf();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(ur(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(ur(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,go.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,s;if(!((s=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(ur(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,IC.get())};e()}}go.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SC="pendingRedirect",Fu=new Map;class AC extends S0{constructor(e,t,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,s),this.eventId=null}async execute(){let e=Fu.get(this.auth._key());if(!e){try{const s=await CC(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(t){e=()=>Promise.reject(t)}Fu.set(this.auth._key(),e)}return this.bypassAuthState||Fu.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function CC(r,e){const t=PC(e),s=kC(r);if(!await s._isAvailable())return!1;const o=await s._get(t)==="true";return await s._remove(t),o}function RC(r,e){Fu.set(r._key(),e)}function kC(r){return Dr(r._redirectPersistence)}function PC(r){return Mu(SC,r.config.apiKey,r.name)}async function xC(r,e,t=!1){if(zn(r.app))return Promise.reject(vi(r));const s=Rc(r),o=vC(s,e),h=await new AC(s,o,t).execute();return h&&!t&&(delete h.user._redirectEventId,await s._persistUserIfCurrent(h.user),await s._setRedirectUser(null,e)),h}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NC=600*1e3;class DC{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(t=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!VC(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var s;if(e.error&&!A0(e)){const o=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";t.onError(ur(this.auth,o))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const s=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=NC&&this.cachedEventUids.clear(),this.cachedEventUids.has(Ly(e))}saveEventToCache(e){this.cachedEventUids.add(Ly(e)),this.lastProcessedEventTime=Date.now()}}function Ly(r){return[r.type,r.eventId,r.sessionId,r.tenantId].filter(e=>e).join("-")}function A0({type:r,error:e}){return r==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function VC(r){switch(r.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return A0(r);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function OC(r,e={}){return Oo(r,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bC=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,LC=/^https?/;async function MC(r){if(r.config.emulator)return;const{authorizedDomains:e}=await OC(r);for(const t of e)try{if(FC(t))return}catch{}Lr(r,"unauthorized-domain")}function FC(r){const e=Qd(),{protocol:t,hostname:s}=new URL(e);if(r.startsWith("chrome-extension://")){const h=new URL(r);return h.hostname===""&&s===""?t==="chrome-extension:"&&r.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&h.hostname===s}if(!LC.test(t))return!1;if(bC.test(r))return s===r;const o=r.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(s)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UC=new sl(3e4,6e4);function My(){const r=cr().___jsl;if(r!=null&&r.H){for(const e of Object.keys(r.H))if(r.H[e].r=r.H[e].r||[],r.H[e].L=r.H[e].L||[],r.H[e].r=[...r.H[e].L],r.CP)for(let t=0;t<r.CP.length;t++)r.CP[t]=null}}function jC(r){return new Promise((e,t)=>{var s,o,l;function h(){My(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{My(),t(ur(r,"network-request-failed"))},timeout:UC.get()})}if(!((o=(s=cr().gapi)===null||s===void 0?void 0:s.iframes)===null||o===void 0)&&o.Iframe)e(gapi.iframes.getContext());else if(!((l=cr().gapi)===null||l===void 0)&&l.load)h();else{const p=$A("iframefcb");return cr()[p]=()=>{gapi.load?h():t(ur(r,"network-request-failed"))},zA(`${BA()}?onload=${p}`).catch(g=>t(g))}}).catch(e=>{throw Uu=null,e})}let Uu=null;function zC(r){return Uu=Uu||jC(r),Uu}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BC=new sl(5e3,15e3),$C="__/auth/iframe",qC="emulator/auth/iframe",HC={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},WC=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function GC(r){const e=r.config;_e(e.authDomain,r,"auth-domain-config-required");const t=e.emulator?Ff(e,qC):`https://${r.config.authDomain}/${$C}`,s={apiKey:e.apiKey,appName:r.name,v:ko},o=WC.get(r.config.apiHost);o&&(s.eid=o);const l=r._getFrameworks();return l.length&&(s.fw=l.join(",")),`${t}?${Xa(s).slice(1)}`}async function KC(r){const e=await zC(r),t=cr().gapi;return _e(t,r,"internal-error"),e.open({where:document.body,url:GC(r),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:HC,dontclear:!0},s=>new Promise(async(o,l)=>{await s.restyle({setHideOnLeave:!1});const h=ur(r,"network-request-failed"),p=cr().setTimeout(()=>{l(h)},BC.get());function g(){cr().clearTimeout(p),o(s)}s.ping(g).then(g,()=>{l(h)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QC={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},XC=500,YC=600,JC="_blank",ZC="http://localhost";class Fy{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function eR(r,e,t,s=XC,o=YC){const l=Math.max((window.screen.availHeight-o)/2,0).toString(),h=Math.max((window.screen.availWidth-s)/2,0).toString();let p="";const g=Object.assign(Object.assign({},QC),{width:s.toString(),height:o.toString(),top:l,left:h}),_=zt().toLowerCase();t&&(p=s0(_)?JC:t),r0(_)&&(e=e||ZC,g.scrollbars="yes");const E=Object.entries(g).reduce((A,[U,W])=>`${A}${U}=${W},`,"");if(VA(_)&&p!=="_self")return tR(e||"",p),new Fy(null);const T=window.open(e||"",p,E);_e(T,r,"popup-blocked");try{T.focus()}catch{}return new Fy(T)}function tR(r,e){const t=document.createElement("a");t.href=r,t.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nR="__/auth/handler",rR="emulator/auth/handler",iR=encodeURIComponent("fac");async function Uy(r,e,t,s,o,l){_e(r.config.authDomain,r,"auth-domain-config-required"),_e(r.config.apiKey,r,"invalid-api-key");const h={apiKey:r.config.apiKey,appName:r.name,authType:t,redirectUrl:s,v:ko,eventId:o};if(e instanceof p0){e.setDefaultLanguage(r.languageCode),h.providerId=e.providerId||"",bE(e.getCustomParameters())||(h.customParameters=JSON.stringify(e.getCustomParameters()));for(const[E,T]of Object.entries({}))h[E]=T}if(e instanceof ol){const E=e.getScopes().filter(T=>T!=="");E.length>0&&(h.scopes=E.join(","))}r.tenantId&&(h.tid=r.tenantId);const p=h;for(const E of Object.keys(p))p[E]===void 0&&delete p[E];const g=await r._getAppCheckToken(),_=g?`#${iR}=${encodeURIComponent(g)}`:"";return`${sR(r)}?${Xa(p).slice(1)}${_}`}function sR({config:r}){return r.emulator?Ff(r,rR):`https://${r.authDomain}/${nR}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wd="webStorageSupport";class oR{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=v0,this._completeRedirectFn=xC,this._overrideRedirectResult=RC}async _openPopup(e,t,s,o){var l;Mr((l=this.eventManagers[e._key()])===null||l===void 0?void 0:l.manager,"_initialize() not called before _openPopup()");const h=await Uy(e,t,s,Qd(),o);return eR(e,h,Bf())}async _openRedirect(e,t,s,o){await this._originValidation(e);const l=await Uy(e,t,s,Qd(),o);return uC(l),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:o,promise:l}=this.eventManagers[t];return o?Promise.resolve(o):(Mr(l,"If manager is not set, promise should be"),l)}const s=this.initAndGetManager(e);return this.eventManagers[t]={promise:s},s.catch(()=>{delete this.eventManagers[t]}),s}async initAndGetManager(e){const t=await KC(e),s=new DC(e);return t.register("authEvent",o=>(_e(o==null?void 0:o.authEvent,e,"invalid-auth-event"),{status:s.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=t,s}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(wd,{type:wd},o=>{var l;const h=(l=o==null?void 0:o[0])===null||l===void 0?void 0:l[wd];h!==void 0&&t(!!h),Lr(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=MC(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return c0()||i0()||jf()}}const aR=oR;var jy="@firebase/auth",zy="1.10.8";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lR{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){_e(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uR(r){switch(r){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function cR(r){hr(new qn("auth",(e,{options:t})=>{const s=e.getProvider("app").getImmediate(),o=e.getProvider("heartbeat"),l=e.getProvider("app-check-internal"),{apiKey:h,authDomain:p}=s.options;_e(h&&!h.includes(":"),"invalid-api-key",{appName:s.name});const g={apiKey:h,authDomain:p,clientPlatform:r,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:h0(r)},_=new UA(s,o,l,g);return HA(_,t),_},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,s)=>{e.getProvider("auth-internal").initialize()})),hr(new qn("auth-internal",e=>{const t=Rc(e.getProvider("auth").getImmediate());return(s=>new lR(s))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),In(jy,zy,uR(r)),In(jy,zy,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hR=300,dR=o_("authIdTokenMaxAge")||hR;let By=null;const fR=r=>async e=>{const t=e&&await e.getIdTokenResult(),s=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(s&&s>dR)return;const o=t==null?void 0:t.token;By!==o&&(By=o,await fetch(r,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function pR(r=g_()){const e=Ya(r,"auth");if(e.isInitialized())return e.getImmediate();const t=qA(r,{popupRedirectResolver:aR,persistence:[_C,oC,v0]}),s=o_("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const l=new URL(s,location.origin);if(location.origin===l.origin){const h=fR(l.toString());nC(t,h,()=>h(t.currentUser)),tC(t,p=>h(p))}}const o=i_("auth");return o&&WA(t,`http://${o}`),t}function mR(){var r,e;return(e=(r=document.getElementsByTagName("head"))===null||r===void 0?void 0:r[0])!==null&&e!==void 0?e:document}jA({loadJS(r){return new Promise((e,t)=>{const s=document.createElement("script");s.setAttribute("src",r),s.onload=e,s.onerror=o=>{const l=ur("internal-error");l.customData=o,t(l)},s.type="text/javascript",s.charset="UTF-8",mR().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});cR("Browser");const C0="@firebase/installations",qf="0.6.18";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const R0=1e4,k0=`w:${qf}`,P0="FIS_v2",gR="https://firebaseinstallations.googleapis.com/v1",yR=3600*1e3,_R="installations",vR="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wR={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},ps=new gs(_R,vR,wR);function x0(r){return r instanceof Wn&&r.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function N0({projectId:r}){return`${gR}/projects/${r}/installations`}function D0(r){return{token:r.token,requestStatus:2,expiresIn:TR(r.expiresIn),creationTime:Date.now()}}async function V0(r,e){const s=(await e.json()).error;return ps.create("request-failed",{requestName:r,serverCode:s.code,serverMessage:s.message,serverStatus:s.status})}function O0({apiKey:r}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":r})}function ER(r,{refreshToken:e}){const t=O0(r);return t.append("Authorization",IR(e)),t}async function b0(r){const e=await r();return e.status>=500&&e.status<600?r():e}function TR(r){return Number(r.replace("s","000"))}function IR(r){return`${P0} ${r}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function SR({appConfig:r,heartbeatServiceProvider:e},{fid:t}){const s=N0(r),o=O0(r),l=e.getImmediate({optional:!0});if(l){const _=await l.getHeartbeatsHeader();_&&o.append("x-firebase-client",_)}const h={fid:t,authVersion:P0,appId:r.appId,sdkVersion:k0},p={method:"POST",headers:o,body:JSON.stringify(h)},g=await b0(()=>fetch(s,p));if(g.ok){const _=await g.json();return{fid:_.fid||t,registrationStatus:2,refreshToken:_.refreshToken,authToken:D0(_.authToken)}}else throw await V0("Create Installation",g)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function L0(r){return new Promise(e=>{setTimeout(e,r)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AR(r){return btoa(String.fromCharCode(...r)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CR=/^[cdef][\w-]{21}$/,Jd="";function RR(){try{const r=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(r),r[0]=112+r[0]%16;const t=kR(r);return CR.test(t)?t:Jd}catch{return Jd}}function kR(r){return AR(r).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xc(r){return`${r.appName}!${r.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M0=new Map;function F0(r,e){const t=xc(r);U0(t,e),PR(t,e)}function U0(r,e){const t=M0.get(r);if(t)for(const s of t)s(e)}function PR(r,e){const t=xR();t&&t.postMessage({key:r,fid:e}),NR()}let as=null;function xR(){return!as&&"BroadcastChannel"in self&&(as=new BroadcastChannel("[Firebase] FID Change"),as.onmessage=r=>{U0(r.data.key,r.data.fid)}),as}function NR(){M0.size===0&&as&&(as.close(),as=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DR="firebase-installations-database",VR=1,ms="firebase-installations-store";let Ed=null;function Hf(){return Ed||(Ed=p_(DR,VR,{upgrade:(r,e)=>{switch(e){case 0:r.createObjectStore(ms)}}})),Ed}async function ac(r,e){const t=xc(r),o=(await Hf()).transaction(ms,"readwrite"),l=o.objectStore(ms),h=await l.get(t);return await l.put(e,t),await o.done,(!h||h.fid!==e.fid)&&F0(r,e.fid),e}async function j0(r){const e=xc(r),s=(await Hf()).transaction(ms,"readwrite");await s.objectStore(ms).delete(e),await s.done}async function Nc(r,e){const t=xc(r),o=(await Hf()).transaction(ms,"readwrite"),l=o.objectStore(ms),h=await l.get(t),p=e(h);return p===void 0?await l.delete(t):await l.put(p,t),await o.done,p&&(!h||h.fid!==p.fid)&&F0(r,p.fid),p}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Wf(r){let e;const t=await Nc(r.appConfig,s=>{const o=OR(s),l=bR(r,o);return e=l.registrationPromise,l.installationEntry});return t.fid===Jd?{installationEntry:await e}:{installationEntry:t,registrationPromise:e}}function OR(r){const e=r||{fid:RR(),registrationStatus:0};return z0(e)}function bR(r,e){if(e.registrationStatus===0){if(!navigator.onLine){const o=Promise.reject(ps.create("app-offline"));return{installationEntry:e,registrationPromise:o}}const t={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},s=LR(r,t);return{installationEntry:t,registrationPromise:s}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:MR(r)}:{installationEntry:e}}async function LR(r,e){try{const t=await SR(r,e);return ac(r.appConfig,t)}catch(t){throw x0(t)&&t.customData.serverCode===409?await j0(r.appConfig):await ac(r.appConfig,{fid:e.fid,registrationStatus:0}),t}}async function MR(r){let e=await $y(r.appConfig);for(;e.registrationStatus===1;)await L0(100),e=await $y(r.appConfig);if(e.registrationStatus===0){const{installationEntry:t,registrationPromise:s}=await Wf(r);return s||t}return e}function $y(r){return Nc(r,e=>{if(!e)throw ps.create("installation-not-found");return z0(e)})}function z0(r){return FR(r)?{fid:r.fid,registrationStatus:0}:r}function FR(r){return r.registrationStatus===1&&r.registrationTime+R0<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function UR({appConfig:r,heartbeatServiceProvider:e},t){const s=jR(r,t),o=ER(r,t),l=e.getImmediate({optional:!0});if(l){const _=await l.getHeartbeatsHeader();_&&o.append("x-firebase-client",_)}const h={installation:{sdkVersion:k0,appId:r.appId}},p={method:"POST",headers:o,body:JSON.stringify(h)},g=await b0(()=>fetch(s,p));if(g.ok){const _=await g.json();return D0(_)}else throw await V0("Generate Auth Token",g)}function jR(r,{fid:e}){return`${N0(r)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Gf(r,e=!1){let t;const s=await Nc(r.appConfig,l=>{if(!B0(l))throw ps.create("not-registered");const h=l.authToken;if(!e&&$R(h))return l;if(h.requestStatus===1)return t=zR(r,e),l;{if(!navigator.onLine)throw ps.create("app-offline");const p=HR(l);return t=BR(r,p),p}});return t?await t:s.authToken}async function zR(r,e){let t=await qy(r.appConfig);for(;t.authToken.requestStatus===1;)await L0(100),t=await qy(r.appConfig);const s=t.authToken;return s.requestStatus===0?Gf(r,e):s}function qy(r){return Nc(r,e=>{if(!B0(e))throw ps.create("not-registered");const t=e.authToken;return WR(t)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function BR(r,e){try{const t=await UR(r,e),s=Object.assign(Object.assign({},e),{authToken:t});return await ac(r.appConfig,s),t}catch(t){if(x0(t)&&(t.customData.serverCode===401||t.customData.serverCode===404))await j0(r.appConfig);else{const s=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await ac(r.appConfig,s)}throw t}}function B0(r){return r!==void 0&&r.registrationStatus===2}function $R(r){return r.requestStatus===2&&!qR(r)}function qR(r){const e=Date.now();return e<r.creationTime||r.creationTime+r.expiresIn<e+yR}function HR(r){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},r),{authToken:e})}function WR(r){return r.requestStatus===1&&r.requestTime+R0<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function GR(r){const e=r,{installationEntry:t,registrationPromise:s}=await Wf(e);return s?s.catch(console.error):Gf(e).catch(console.error),t.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function KR(r,e=!1){const t=r;return await QR(t),(await Gf(t,e)).token}async function QR(r){const{registrationPromise:e}=await Wf(r);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XR(r){if(!r||!r.options)throw Td("App Configuration");if(!r.name)throw Td("App Name");const e=["projectId","apiKey","appId"];for(const t of e)if(!r.options[t])throw Td(t);return{appName:r.name,projectId:r.options.projectId,apiKey:r.options.apiKey,appId:r.options.appId}}function Td(r){return ps.create("missing-app-config-values",{valueName:r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $0="installations",YR="installations-internal",JR=r=>{const e=r.getProvider("app").getImmediate(),t=XR(e),s=Ya(e,"heartbeat");return{app:e,appConfig:t,heartbeatServiceProvider:s,_delete:()=>Promise.resolve()}},ZR=r=>{const e=r.getProvider("app").getImmediate(),t=Ya(e,$0).getImmediate();return{getId:()=>GR(t),getToken:o=>KR(t,o)}};function ek(){hr(new qn($0,JR,"PUBLIC")),hr(new qn(YR,ZR,"PRIVATE"))}ek();In(C0,qf);In(C0,qf,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hy="analytics",tk="firebase_id",nk="origin",rk=60*1e3,ik="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Kf="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nn=new cc("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sk={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Sn=new gs("analytics","Analytics",sk);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ok(r){if(!r.startsWith(Kf)){const e=Sn.create("invalid-gtag-resource",{gtagURL:r});return nn.warn(e.message),""}return r}function q0(r){return Promise.all(r.map(e=>e.catch(t=>t)))}function ak(r,e){let t;return window.trustedTypes&&(t=window.trustedTypes.createPolicy(r,e)),t}function lk(r,e){const t=ak("firebase-js-sdk-policy",{createScriptURL:ok}),s=document.createElement("script"),o=`${Kf}?l=${r}&id=${e}`;s.src=t?t==null?void 0:t.createScriptURL(o):o,s.async=!0,document.head.appendChild(s)}function uk(r){let e=[];return Array.isArray(window[r])?e=window[r]:window[r]=e,e}async function ck(r,e,t,s,o,l){const h=s[o];try{if(h)await e[h];else{const g=(await q0(t)).find(_=>_.measurementId===o);g&&await e[g.appId]}}catch(p){nn.error(p)}r("config",o,l)}async function hk(r,e,t,s,o){try{let l=[];if(o&&o.send_to){let h=o.send_to;Array.isArray(h)||(h=[h]);const p=await q0(t);for(const g of h){const _=p.find(T=>T.measurementId===g),E=_&&e[_.appId];if(E)l.push(E);else{l=[];break}}}l.length===0&&(l=Object.values(e)),await Promise.all(l),r("event",s,o||{})}catch(l){nn.error(l)}}function dk(r,e,t,s){async function o(l,...h){try{if(l==="event"){const[p,g]=h;await hk(r,e,t,p,g)}else if(l==="config"){const[p,g]=h;await ck(r,e,t,s,p,g)}else if(l==="consent"){const[p,g]=h;r("consent",p,g)}else if(l==="get"){const[p,g,_]=h;r("get",p,g,_)}else if(l==="set"){const[p]=h;r("set",p)}else r(l,...h)}catch(p){nn.error(p)}}return o}function fk(r,e,t,s,o){let l=function(...h){window[s].push(arguments)};return window[o]&&typeof window[o]=="function"&&(l=window[o]),window[o]=dk(l,r,e,t),{gtagCore:l,wrappedGtag:window[o]}}function pk(r){const e=window.document.getElementsByTagName("script");for(const t of Object.values(e))if(t.src&&t.src.includes(Kf)&&t.src.includes(r))return t;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mk=30,gk=1e3;class yk{constructor(e={},t=gk){this.throttleMetadata=e,this.intervalMillis=t}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,t){this.throttleMetadata[e]=t}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const H0=new yk;function _k(r){return new Headers({Accept:"application/json","x-goog-api-key":r})}async function vk(r){var e;const{appId:t,apiKey:s}=r,o={method:"GET",headers:_k(s)},l=ik.replace("{app-id}",t),h=await fetch(l,o);if(h.status!==200&&h.status!==304){let p="";try{const g=await h.json();!((e=g.error)===null||e===void 0)&&e.message&&(p=g.error.message)}catch{}throw Sn.create("config-fetch-failed",{httpStatus:h.status,responseMessage:p})}return h.json()}async function wk(r,e=H0,t){const{appId:s,apiKey:o,measurementId:l}=r.options;if(!s)throw Sn.create("no-app-id");if(!o){if(l)return{measurementId:l,appId:s};throw Sn.create("no-api-key")}const h=e.getThrottleMetadata(s)||{backoffCount:0,throttleEndTimeMillis:Date.now()},p=new Ik;return setTimeout(async()=>{p.abort()},rk),W0({appId:s,apiKey:o,measurementId:l},h,p,e)}async function W0(r,{throttleEndTimeMillis:e,backoffCount:t},s,o=H0){var l;const{appId:h,measurementId:p}=r;try{await Ek(s,e)}catch(g){if(p)return nn.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${p} provided in the "measurementId" field in the local Firebase config. [${g==null?void 0:g.message}]`),{appId:h,measurementId:p};throw g}try{const g=await vk(r);return o.deleteThrottleMetadata(h),g}catch(g){const _=g;if(!Tk(_)){if(o.deleteThrottleMetadata(h),p)return nn.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${p} provided in the "measurementId" field in the local Firebase config. [${_==null?void 0:_.message}]`),{appId:h,measurementId:p};throw g}const E=Number((l=_==null?void 0:_.customData)===null||l===void 0?void 0:l.httpStatus)===503?fg(t,o.intervalMillis,mk):fg(t,o.intervalMillis),T={throttleEndTimeMillis:Date.now()+E,backoffCount:t+1};return o.setThrottleMetadata(h,T),nn.debug(`Calling attemptFetch again in ${E} millis`),W0(r,T,s,o)}}function Ek(r,e){return new Promise((t,s)=>{const o=Math.max(e-Date.now(),0),l=setTimeout(t,o);r.addEventListener(()=>{clearTimeout(l),s(Sn.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function Tk(r){if(!(r instanceof Wn)||!r.customData)return!1;const e=Number(r.customData.httpStatus);return e===429||e===500||e===503||e===504}class Ik{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function Sk(r,e,t,s,o){if(o&&o.global){r("event",t,s);return}else{const l=await e,h=Object.assign(Object.assign({},s),{send_to:l});r("event",t,h)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ak(){if(c_())try{await h_()}catch(r){return nn.warn(Sn.create("indexeddb-unavailable",{errorInfo:r==null?void 0:r.toString()}).message),!1}else return nn.warn(Sn.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function Ck(r,e,t,s,o,l,h){var p;const g=wk(r);g.then(U=>{t[U.measurementId]=U.appId,r.options.measurementId&&U.measurementId!==r.options.measurementId&&nn.warn(`The measurement ID in the local Firebase config (${r.options.measurementId}) does not match the measurement ID fetched from the server (${U.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(U=>nn.error(U)),e.push(g);const _=Ak().then(U=>{if(U)return s.getId()}),[E,T]=await Promise.all([g,_]);pk(l)||lk(l,E.measurementId),o("js",new Date);const A=(p=h==null?void 0:h.config)!==null&&p!==void 0?p:{};return A[nk]="firebase",A.update=!0,T!=null&&(A[tk]=T),o("config",E.measurementId,A),E.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rk{constructor(e){this.app=e}_delete(){return delete za[this.app.options.appId],Promise.resolve()}}let za={},Wy=[];const Gy={};let Id="dataLayer",kk="gtag",Ky,G0,Qy=!1;function Pk(){const r=[];if(u_()&&r.push("This is a browser extension environment."),NE()||r.push("Cookies are not available."),r.length>0){const e=r.map((s,o)=>`(${o+1}) ${s}`).join(" "),t=Sn.create("invalid-analytics-context",{errorInfo:e});nn.warn(t.message)}}function xk(r,e,t){Pk();const s=r.options.appId;if(!s)throw Sn.create("no-app-id");if(!r.options.apiKey)if(r.options.measurementId)nn.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${r.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Sn.create("no-api-key");if(za[s]!=null)throw Sn.create("already-exists",{id:s});if(!Qy){uk(Id);const{wrappedGtag:l,gtagCore:h}=fk(za,Wy,Gy,Id,kk);G0=l,Ky=h,Qy=!0}return za[s]=Ck(r,Wy,Gy,e,Ky,Id,t),new Rk(r)}function Nk(r,e,t,s){r=_t(r),Sk(G0,za[r.app.options.appId],e,t,s).catch(o=>nn.error(o))}const Xy="@firebase/analytics",Yy="0.10.17";function Dk(){hr(new qn(Hy,(e,{options:t})=>{const s=e.getProvider("app").getImmediate(),o=e.getProvider("installations-internal").getImmediate();return xk(s,o,t)},"PUBLIC")),hr(new qn("analytics-internal",r,"PRIVATE")),In(Xy,Yy),In(Xy,Yy,"esm2017");function r(e){try{const t=e.getProvider(Hy).getImmediate();return{logEvent:(s,o,l)=>Nk(t,s,o,l)}}catch(t){throw Sn.create("interop-component-reg-failed",{reason:t})}}}Dk();/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vk=r=>r.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),K0=(...r)=>r.filter((e,t,s)=>!!e&&e.trim()!==""&&s.indexOf(e)===t).join(" ").trim();/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Ok={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bk=mt.forwardRef(({color:r="currentColor",size:e=24,strokeWidth:t=2,absoluteStrokeWidth:s,className:o="",children:l,iconNode:h,...p},g)=>mt.createElement("svg",{ref:g,...Ok,width:e,height:e,stroke:r,strokeWidth:s?Number(t)*24/Number(e):t,className:K0("lucide",o),...p},[...h.map(([_,E])=>mt.createElement(_,E)),...Array.isArray(l)?l:[l]]));/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const An=(r,e)=>{const t=mt.forwardRef(({className:s,...o},l)=>mt.createElement(bk,{ref:l,iconNode:e,className:K0(`lucide-${Vk(r)}`,s),...o}));return t.displayName=`${r}`,t};/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lk=An("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q0=An("ChartColumn",[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X0=An("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sd=An("CircleCheck",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mk=An("Database",[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fk=An("Layers",[["path",{d:"m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z",key:"8b97xw"}],["path",{d:"m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65",key:"dd6zsq"}],["path",{d:"m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65",key:"ep9fru"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y0=An("LoaderCircle",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uk=An("RefreshCw",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jk=An("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zk=An("TriangleAlert",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bk=An("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $k=An("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),qk={apiKey:"AIzaSyBYziumFk_ONDE7tVtdLFyV3L1yMGnzXj0",authDomain:"idox-lifecycle.firebaseapp.com",projectId:"idox-lifecycle",storageBucket:"idox-lifecycle.firebasestorage.app",messagingSenderId:"478383450565",appId:"1:478383450565:web:f0322a22dd601404d343ac",measurementId:"G-CZL52LFLEF"},J0=m_(qk),is=QS(J0),Jy=pR(J0),Ad="idox-lifecycle-hub",Zy={Fibre:["Strategic Planning (HLP)","High-Level Design (HLD)","Physical Infrastructure Analysis (PIA)","Field Survey","Low Level Design (LLD)","Civils & Build","As-Built"],Housing:["Scoping","Feasibility","Preliminary Environmental Screening","Environmental Impact Assessment (EIA)","Concept Design & Planning Application","Government & Community Approvals","Detailed Design & Engineering","Financing & Acquisition","Construction","Sales, Marketing & Handover","Post-Construction Monitoring"]},Hk=r=>{const e=r.split(`
`).filter(s=>s.trim()!=="");if(e.length===0)return[];const t=e[0].split(",").map(s=>s.trim().replace(/^"|"$/g,""));return e.slice(1).map(s=>{const o=s.split(",").map(l=>l.trim().replace(/^"|"$/g,""));return t.reduce((l,h,p)=>(l[h]=o[p],l),{})})},Z0=({className:r=""})=>M.jsxs("div",{className:`flex items-center gap-1.5 font-bold tracking-tight ${r}`,children:[M.jsx("div",{className:"w-7 h-7 bg-white rounded flex items-center justify-center shadow-sm",children:M.jsx("div",{className:"w-4 h-4 border-2 border-[#003057] rounded-sm transform rotate-45"})}),M.jsx("span",{className:"text-xl text-white",children:"idox"}),M.jsx("span",{className:"text-sky-400 font-light ml-0.5",children:"Geospatial"})]}),lc=({children:r,variant:e="default"})=>{const t={default:"bg-slate-100 text-slate-700",success:"bg-emerald-100 text-emerald-700",warning:"bg-amber-100 text-amber-700",blue:"bg-[#003057]/10 text-[#003057]",idox:"bg-[#003057] text-white"};return M.jsx("span",{className:`px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider ${t[e]}`,children:r})},e_=({type:r})=>{const e=r==null?void 0:r.toLowerCase();return e==="basemap"||e==="b"?M.jsx("div",{title:"Basemap",className:"w-7 h-7 rounded bg-[#007CBA] text-white flex items-center justify-center font-bold text-xs shadow-sm",children:"B"}):e==="analytical"||e==="a"?M.jsx("div",{title:"Analytical",className:"w-7 h-7 rounded bg-[#2ECC71] text-white flex items-center justify-center font-bold text-xs shadow-sm",children:"A"}):e==="unknown"||e==="?"?M.jsx("div",{title:"Unknown",className:"w-7 h-7 rounded bg-[#F1C40F] text-white flex items-center justify-center font-bold text-xs shadow-sm",children:"?"}):M.jsx("div",{className:"w-1.5 h-1.5 rounded-full bg-slate-200"})},Wk=({onSelectRole:r,datasets:e})=>M.jsxs("div",{className:"min-h-screen bg-slate-50",children:[M.jsx("div",{className:"bg-[#003057] text-white py-24 px-8 relative overflow-hidden",children:M.jsxs("div",{className:"max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 relative z-10",children:[M.jsxs("div",{className:"flex-1",children:[M.jsx(Z0,{className:"mb-8 scale-125 origin-left"}),M.jsx("h1",{className:"text-5xl font-extrabold mb-6",children:"Strategic Data Lifecycle"}),M.jsx("p",{className:"text-xl text-slate-300 mb-10 max-w-lg leading-relaxed",children:"Synchronize geospatial intelligence from your master workbook. Access live project stages and usage classifications."}),M.jsx("div",{className:"flex gap-8",children:M.jsxs("div",{className:"flex flex-col",children:[M.jsx("span",{className:"text-3xl font-bold",children:e.length}),M.jsx("span",{className:"text-[10px] uppercase font-bold text-sky-400 tracking-widest",children:"Active Records"})]})})]}),M.jsx("div",{className:"flex-1 grid grid-cols-1 gap-4 w-full max-w-md",children:[{id:"sales",title:"Sales & Commercial",icon:Bk,desc:"Lifecycle touchpoints & usage classification."},{id:"data",title:"Data Management",icon:Mk,desc:"Workbook sync & catalog administration."},{id:"leadership",title:"Leadership Insights",icon:Q0,desc:"Coverage metrics & strategic health."}].map(t=>M.jsxs("button",{onClick:()=>r(t.id),className:"group flex items-center gap-5 p-6 bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl transition-all hover:translate-x-2",children:[M.jsx("div",{className:"w-12 h-12 rounded-xl bg-sky-500/20 text-sky-400 flex items-center justify-center",children:M.jsx(t.icon,{size:24})}),M.jsxs("div",{className:"text-left flex-1",children:[M.jsx("h3",{className:"font-bold text-lg leading-tight",children:t.title}),M.jsx("p",{className:"text-xs text-slate-400 mt-1",children:t.desc})]}),M.jsx(X0,{className:"text-slate-500 group-hover:text-white",size:20})]},t.id))})]})}),M.jsxs("div",{className:"max-w-6xl mx-auto py-16 px-8 grid grid-cols-1 md:grid-cols-2 gap-16",children:[M.jsxs("div",{className:"space-y-6",children:[M.jsx("h2",{className:"text-2xl font-bold text-[#003057]",children:"Centralized Asset Management"}),M.jsx("p",{className:"text-slate-600 leading-relaxed",children:"The Idox Lifecycle system aligns datasets with the unique workflows of Fibre and Housing development. We ensure commercial teams know exactly what data exists and how it should be used at every project milestone."}),M.jsxs("div",{className:"flex flex-wrap gap-3",children:[M.jsx(lc,{variant:"blue",children:"Firestore Backed"}),M.jsx(lc,{variant:"blue",children:"Idox Geospatial Standard"})]})]}),M.jsxs("div",{className:"bg-white p-8 rounded-3xl border border-slate-200 shadow-sm",children:[M.jsxs("h3",{className:"font-bold mb-4 text-[#003057] flex items-center gap-2",children:[M.jsx(Fk,{className:"text-sky-500",size:20})," System Information"]}),M.jsx("p",{className:"text-sm text-slate-500 mb-6 italic",children:"About the Data User & Sales Workflows"}),M.jsxs("div",{className:"space-y-4 text-sm text-slate-600",children:[M.jsxs("div",{className:"flex gap-3",children:[M.jsx(Sd,{className:"text-emerald-500 shrink-0",size:18}),M.jsx("span",{children:"Dedicated Edit Mode for Data Users with commit confirmation."})]}),M.jsxs("div",{className:"flex gap-3",children:[M.jsx(Sd,{className:"text-emerald-500 shrink-0",size:18}),M.jsx("span",{children:"B/A/? Classification for quick data identification."})]}),M.jsxs("div",{className:"flex gap-3",children:[M.jsx(Sd,{className:"text-emerald-500 shrink-0",size:18}),M.jsx("span",{children:"Sticky Lifecycle headers for easy reference while scrolling."})]})]})]})]})]}),Gk=({datasets:r})=>{const[e,t]=mt.useState("touchpoint"),[s,o]=mt.useState("Fibre"),[l,h]=mt.useState(""),[p,g]=mt.useState(null),_=Zy[s]||[],E=mt.useMemo(()=>r.filter(T=>{var A,U;return((A=T.name)==null?void 0:A.toLowerCase().includes(l.toLowerCase()))||((U=T.commonName)==null?void 0:U.toLowerCase().includes(l.toLowerCase()))}),[r,l]);return M.jsxs("div",{className:"space-y-6",children:[M.jsxs("div",{className:"bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-wrap gap-4 items-end",children:[M.jsxs("div",{className:"w-64",children:[M.jsx("label",{className:"text-[10px] font-black uppercase text-slate-400 mb-2 block tracking-widest",children:"Industry Framework"}),M.jsx("select",{className:"w-full px-3 py-2 border-2 border-slate-100 rounded-xl font-bold text-[#003057]",value:s,onChange:T=>o(T.target.value),children:Object.keys(Zy).map(T=>M.jsx("option",{value:T,children:T},T))})]}),M.jsxs("div",{className:"flex-1 min-w-[240px]",children:[M.jsx("label",{className:"text-[10px] font-black uppercase text-slate-400 mb-2 block tracking-widest",children:"Dataset Search"}),M.jsxs("div",{className:"relative",children:[M.jsx(jk,{className:"absolute left-3 top-1/2 -translate-y-1/2 text-slate-400",size:16}),M.jsx("input",{className:"w-full pl-10 pr-4 py-2 border-2 border-slate-100 rounded-xl focus:border-[#007CBA] outline-none",placeholder:"Search...",value:l,onChange:T=>h(T.target.value)})]})]}),M.jsxs("div",{className:"bg-slate-100 p-1 rounded-xl ml-auto flex",children:[M.jsx("button",{onClick:()=>t("touchpoint"),className:`px-5 py-2 rounded-lg font-bold text-xs ${e==="touchpoint"?"bg-white shadow-md text-[#003057]":"text-slate-500"}`,children:"Lifecycle View"}),M.jsx("button",{onClick:()=>t("role-led"),className:`px-5 py-2 rounded-lg font-bold text-xs ${e==="role-led"?"bg-white shadow-md text-[#003057]":"text-slate-500"}`,children:"Role-Led View"})]})]}),e==="touchpoint"?M.jsx("div",{className:"bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm",children:M.jsx("div",{className:"overflow-x-auto max-h-[70vh]",children:M.jsxs("table",{className:"w-full text-left border-collapse",children:[M.jsx("thead",{className:"sticky top-0 z-30 bg-[#003057] text-white",children:M.jsxs("tr",{children:[M.jsx("th",{className:"px-6 py-5 font-bold text-xs uppercase border-r border-white/10 w-[300px]",children:"Dataset / Common Name"}),_.map(T=>M.jsx("th",{className:"px-4 py-5 text-center font-bold text-[10px] uppercase min-w-[120px]",children:T},T))]})}),M.jsx("tbody",{className:"divide-y divide-slate-100",children:E.map(T=>M.jsxs("tr",{className:"hover:bg-slate-50 transition-colors group",children:[M.jsxs("td",{className:"px-6 py-4 border-r border-slate-100",children:[M.jsx("div",{className:"font-bold text-[#003057]",children:T.name}),M.jsx("div",{className:"text-[10px] text-slate-400 font-mono mt-1",children:T.commonName})]}),_.map(A=>{var U;return M.jsx("td",{className:"px-4 py-4 text-center",children:M.jsx(e_,{type:(U=T.usage)==null?void 0:U[A]})},A)})]},T.id))})]})})}):M.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:E.map(T=>M.jsxs("div",{className:"bg-white p-6 rounded-2xl border border-slate-200 hover:border-[#007CBA] transition-all cursor-pointer",onClick:()=>g(T),children:[M.jsx(lc,{variant:"blue",children:T.group||"General"}),M.jsx("h3",{className:"font-bold text-[#003057] text-lg mt-2 mb-1",children:T.name}),M.jsx("p",{className:"text-xs text-slate-500 line-clamp-2",children:T.description||"No description available."}),M.jsxs("div",{className:"pt-4 border-t border-slate-100 flex justify-between items-center text-[10px] font-black text-[#007CBA] tracking-widest",children:[M.jsx("span",{children:"VIEW DETAILS"}),M.jsx(X0,{size:16})]})]},T.id))}),p&&M.jsxs("div",{className:"fixed inset-0 z-50 flex items-center justify-end",children:[M.jsx("div",{className:"absolute inset-0 bg-slate-900/40 backdrop-blur-sm",onClick:()=>g(null)}),M.jsxs("div",{className:"relative w-full max-w-lg h-full bg-white shadow-2xl flex flex-col p-8",children:[M.jsx("button",{onClick:()=>g(null),className:"ml-auto p-2 hover:bg-slate-100 rounded-full transition-colors",children:M.jsx($k,{})}),M.jsx("h2",{className:"text-2xl font-bold text-[#003057] mb-2",children:p.name}),M.jsx("p",{className:"text-slate-600 mb-8",children:p.description}),M.jsx("div",{className:"space-y-2",children:_.map(T=>{var A;return M.jsxs("div",{className:"p-3 bg-slate-50 rounded-lg flex justify-between items-center",children:[M.jsx("span",{className:"text-xs font-bold",children:T}),M.jsx(e_,{type:(A=p.usage)==null?void 0:A[T]})]},T)})})]})]})]})},Kk=({datasets:r,onSync:e})=>{const[t,s]=mt.useState(!1),[o,l]=mt.useState(null),h=async()=>{s(!0),l(null);try{await e()}catch(p){console.error(p),l("Failed to fetch from Google Sheets. Ensure the sheet is 'Published to Web' as CSV.")}s(!1)};return M.jsxs("div",{className:"space-y-6",children:[M.jsxs("div",{className:"bg-white p-8 rounded-3xl border border-slate-200 shadow-sm flex flex-col md:flex-row justify-between items-center gap-6",children:[M.jsxs("div",{children:[M.jsx("h2",{className:"text-3xl font-bold text-[#003057]",children:"Data Administration"}),M.jsx("p",{className:"text-slate-500 mt-1",children:"Refine dataset descriptions and framework mappings."})]}),M.jsxs("button",{onClick:h,disabled:t,className:"bg-[#003057] text-white px-8 py-3 rounded-2xl font-bold flex items-center gap-2 hover:bg-[#004a7a] transition-all disabled:opacity-50",children:[t?M.jsx(Y0,{className:"animate-spin"}):M.jsx(Uk,{}),t?"Syncing...":"Sync Workbook Now"]})]}),o&&M.jsxs("div",{className:"p-4 bg-rose-50 border border-rose-100 text-rose-700 rounded-xl flex gap-3 text-sm font-medium",children:[M.jsx(zk,{className:"shrink-0"})," ",o]}),M.jsxs("div",{className:"bg-white rounded-3xl border border-slate-200 overflow-hidden",children:[M.jsx("div",{className:"p-6 border-b border-slate-100",children:M.jsx("h3",{className:"font-bold text-[#003057]",children:"Live Catalogue"})}),M.jsxs("table",{className:"w-full text-left",children:[M.jsx("thead",{className:"bg-slate-50 text-slate-400 text-[10px] font-black uppercase tracking-widest",children:M.jsxs("tr",{children:[M.jsx("th",{className:"px-6 py-4",children:"Internal Name"}),M.jsx("th",{className:"px-6 py-4",children:"Common Name"}),M.jsx("th",{className:"px-6 py-4",children:"Status"})]})}),M.jsx("tbody",{className:"divide-y divide-slate-100",children:r.map(p=>M.jsxs("tr",{className:"hover:bg-slate-50",children:[M.jsx("td",{className:"px-6 py-4 font-bold text-[#003057]",children:p.name}),M.jsx("td",{className:"px-6 py-4 text-xs font-mono",children:p.commonName}),M.jsx("td",{className:"px-6 py-4",children:M.jsx(lc,{children:p.status||"Active"})})]},p.id))})]})]})]})};function Qk(){const[r,e]=mt.useState(null),[t,s]=mt.useState([]),[o,l]=mt.useState(!0),[h,p]=mt.useState(null);mt.useEffect(()=>((async()=>{try{await YA(Jy)}catch(T){console.error("Auth failed",T)}})(),rC(Jy,p)),[]),mt.useEffect(()=>{if(!h||!is)return;const E=lA(KS(is,"artifacts",Ad,"public","data","datasets")),T=dA(E,A=>{const U=A.docs.map(W=>({id:W.id,...W.data()}));s(U),l(!1)},A=>{console.error("Firestore access error",A),l(!1)});return()=>T()},[h]);const g=async E=>{if(!is)return;const T=Ay(is);E.forEach(A=>{const U=_y(is,"artifacts",Ad,"public","data","datasets",A.id);T.set(U,A)}),await T.commit()},_=async()=>{const U=await fetch("https://docs.google.com/spreadsheets/d/17MCi7epIJdxac0xzV2QTGGBUoL4Hi11zhzrbeRtRJXg/export?format=csv&gid=0");if(!U.ok)throw new Error("Fetch failed");const W=await U.text(),X=Hk(W);if(X.length===0)return;const $=Ay(is);X.forEach((le,he)=>{const me=le.Name||le.name||le.Dataset;if(!me)return;const Ee=_y(is,"artifacts",Ad,"public","data","datasets",`ds-${he}`),je={};Object.keys(le).forEach(Te=>{var S;const x=(S=le[Te])==null?void 0:S.trim().toLowerCase();(x==="b"||x==="a"||x==="?")&&(je[Te]=x)}),$.set(Ee,{name:me,commonName:le["Common Name"]||le.common_name||"",group:le.Group||le.group||"General",description:le.Description||le.description||"",usage:je,lastUpdated:new Date().toISOString()})}),await $.commit()};return o?M.jsxs("div",{className:"min-h-screen flex flex-col items-center justify-center bg-slate-50 gap-4",children:[M.jsx(Y0,{className:"animate-spin text-[#007CBA]",size:48}),M.jsx("p",{className:"text-slate-400 font-bold uppercase tracking-widest text-[10px]",children:"Connecting to Idox Firebase..."})]}):r?M.jsxs("div",{className:"min-h-screen bg-[#F8FAFC] flex flex-col",children:[M.jsxs("header",{className:"bg-[#003057] text-white px-10 py-5 flex justify-between items-center shadow-xl sticky top-0 z-40",children:[M.jsxs("div",{className:"flex items-center gap-12",children:[M.jsx("button",{onClick:()=>e(null),children:M.jsx(Z0,{})}),M.jsx("nav",{className:"hidden lg:flex gap-8",children:["sales","data","leadership"].map(E=>M.jsx("button",{onClick:()=>e(E),className:`text-[10px] font-black uppercase tracking-[0.2em] border-b-2 transition-all pb-1 ${r===E?"border-sky-400 text-sky-400":"border-transparent text-slate-400 hover:text-white"}`,children:E==="data"?"Data Management":E},E))})]}),M.jsxs("div",{className:"flex items-center gap-4",children:[M.jsxs("div",{className:"text-right hidden sm:block",children:[M.jsx("div",{className:"text-xs font-bold leading-none",children:"System Admin"}),M.jsx("div",{className:"text-[9px] text-slate-400 font-bold uppercase mt-1",children:"v1.5.1"})]}),M.jsx("div",{className:"w-10 h-10 rounded-xl bg-[#007CBA] flex items-center justify-center font-bold text-sm shadow-lg",children:"ID"})]})]}),M.jsxs("main",{className:"flex-1 p-8 md:p-12 max-w-7xl mx-auto w-full",children:[M.jsxs("div",{className:"flex items-center gap-4 mb-10",children:[M.jsx("button",{onClick:()=>e(null),className:"p-3 bg-white rounded-2xl text-slate-400 hover:bg-slate-50 border border-slate-100 shadow-sm transition-all",children:M.jsx(Lk,{size:18})}),M.jsx("div",{className:"h-4 w-px bg-slate-300 mx-2"}),M.jsxs("h2",{className:"text-[10px] font-black uppercase text-slate-400 tracking-[0.3em]",children:[r," workspace"]})]}),r==="sales"&&M.jsx(Gk,{datasets:t}),r==="data"&&M.jsx(Kk,{datasets:t,onCommit:g,onSync:_}),r==="leadership"&&M.jsxs("div",{className:"bg-white p-24 rounded-[3rem] border-4 border-dashed border-slate-100 flex flex-col items-center gap-6",children:[M.jsx(Q0,{size:80,className:"text-slate-100"}),M.jsx("h3",{className:"text-3xl font-extrabold text-[#003057]",children:"Intelligence Dashboard"}),M.jsx("p",{className:"text-slate-500 max-w-lg text-center leading-relaxed font-medium",children:"Strategic insights are being processed from the master workbook."})]})]}),M.jsxs("footer",{className:"bg-white border-t border-slate-100 py-8 px-12 flex justify-between items-center",children:[M.jsx("div",{className:"text-[10px] font-black uppercase text-slate-400 tracking-[0.2em]",children:"© 2024 Idox plc. Strategic Intelligence."}),M.jsxs("div",{className:"flex gap-10 text-[10px] font-black uppercase text-slate-400 tracking-widest",children:[M.jsx("button",{className:"hover:text-[#007CBA]",children:"Privacy"}),M.jsx("button",{className:"hover:text-[#007CBA]",children:"Support"})]})]})]}):M.jsx(Wk,{onSelectRole:e,datasets:t})}hE.createRoot(document.getElementById("root")).render(M.jsx(mt.StrictMode,{children:M.jsx(Qk,{})}));
