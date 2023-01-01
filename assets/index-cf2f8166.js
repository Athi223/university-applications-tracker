(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerpolicy&&(s.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?s.credentials="include":i.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function hm(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var g={},h0={get exports(){return g},set exports(t){g=t}},Fl={},y={},p0={get exports(){return y},set exports(t){y=t}},j={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ls=Symbol.for("react.element"),m0=Symbol.for("react.portal"),g0=Symbol.for("react.fragment"),_0=Symbol.for("react.strict_mode"),v0=Symbol.for("react.profiler"),y0=Symbol.for("react.provider"),w0=Symbol.for("react.context"),E0=Symbol.for("react.forward_ref"),C0=Symbol.for("react.suspense"),S0=Symbol.for("react.memo"),k0=Symbol.for("react.lazy"),Bf=Symbol.iterator;function I0(t){return t===null||typeof t!="object"?null:(t=Bf&&t[Bf]||t["@@iterator"],typeof t=="function"?t:null)}var pm={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},mm=Object.assign,gm={};function wi(t,e,n){this.props=t,this.context=e,this.refs=gm,this.updater=n||pm}wi.prototype.isReactComponent={};wi.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};wi.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function _m(){}_m.prototype=wi.prototype;function zc(t,e,n){this.props=t,this.context=e,this.refs=gm,this.updater=n||pm}var $c=zc.prototype=new _m;$c.constructor=zc;mm($c,wi.prototype);$c.isPureReactComponent=!0;var Wf=Array.isArray,vm=Object.prototype.hasOwnProperty,Bc={current:null},ym={key:!0,ref:!0,__self:!0,__source:!0};function wm(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)vm.call(e,r)&&!ym.hasOwnProperty(r)&&(i[r]=e[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var a=Array(l),u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:Ls,type:t,key:s,ref:o,props:i,_owner:Bc.current}}function T0(t,e){return{$$typeof:Ls,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Wc(t){return typeof t=="object"&&t!==null&&t.$$typeof===Ls}function N0(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Hf=/\/+/g;function Ia(t,e){return typeof t=="object"&&t!==null&&t.key!=null?N0(""+t.key):e.toString(36)}function Io(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Ls:case m0:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Ia(o,0):r,Wf(i)?(n="",t!=null&&(n=t.replace(Hf,"$&/")+"/"),Io(i,e,n,"",function(u){return u})):i!=null&&(Wc(i)&&(i=T0(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Hf,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Wf(t))for(var l=0;l<t.length;l++){s=t[l];var a=r+Ia(s,l);o+=Io(s,e,n,a,i)}else if(a=I0(t),typeof a=="function")for(t=a.call(t),l=0;!(s=t.next()).done;)s=s.value,a=r+Ia(s,l++),o+=Io(s,e,n,a,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Zs(t,e,n){if(t==null)return t;var r=[],i=0;return Io(t,r,"","",function(s){return e.call(n,s,i++)}),r}function x0(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Ue={current:null},To={transition:null},R0={ReactCurrentDispatcher:Ue,ReactCurrentBatchConfig:To,ReactCurrentOwner:Bc};j.Children={map:Zs,forEach:function(t,e,n){Zs(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Zs(t,function(){e++}),e},toArray:function(t){return Zs(t,function(e){return e})||[]},only:function(t){if(!Wc(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};j.Component=wi;j.Fragment=g0;j.Profiler=v0;j.PureComponent=zc;j.StrictMode=_0;j.Suspense=C0;j.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=R0;j.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=mm({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Bc.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(a in e)vm.call(e,a)&&!ym.hasOwnProperty(a)&&(r[a]=e[a]===void 0&&l!==void 0?l[a]:e[a])}var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){l=Array(a);for(var u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:Ls,type:t.type,key:i,ref:s,props:r,_owner:o}};j.createContext=function(t){return t={$$typeof:w0,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:y0,_context:t},t.Consumer=t};j.createElement=wm;j.createFactory=function(t){var e=wm.bind(null,t);return e.type=t,e};j.createRef=function(){return{current:null}};j.forwardRef=function(t){return{$$typeof:E0,render:t}};j.isValidElement=Wc;j.lazy=function(t){return{$$typeof:k0,_payload:{_status:-1,_result:t},_init:x0}};j.memo=function(t,e){return{$$typeof:S0,type:t,compare:e===void 0?null:e}};j.startTransition=function(t){var e=To.transition;To.transition={};try{t()}finally{To.transition=e}};j.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};j.useCallback=function(t,e){return Ue.current.useCallback(t,e)};j.useContext=function(t){return Ue.current.useContext(t)};j.useDebugValue=function(){};j.useDeferredValue=function(t){return Ue.current.useDeferredValue(t)};j.useEffect=function(t,e){return Ue.current.useEffect(t,e)};j.useId=function(){return Ue.current.useId()};j.useImperativeHandle=function(t,e,n){return Ue.current.useImperativeHandle(t,e,n)};j.useInsertionEffect=function(t,e){return Ue.current.useInsertionEffect(t,e)};j.useLayoutEffect=function(t,e){return Ue.current.useLayoutEffect(t,e)};j.useMemo=function(t,e){return Ue.current.useMemo(t,e)};j.useReducer=function(t,e,n){return Ue.current.useReducer(t,e,n)};j.useRef=function(t){return Ue.current.useRef(t)};j.useState=function(t){return Ue.current.useState(t)};j.useSyncExternalStore=function(t,e,n){return Ue.current.useSyncExternalStore(t,e,n)};j.useTransition=function(){return Ue.current.useTransition()};j.version="18.2.0";(function(t){t.exports=j})(p0);const pn=hm(y);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var P0=y,O0=Symbol.for("react.element"),A0=Symbol.for("react.fragment"),D0=Object.prototype.hasOwnProperty,M0=P0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,L0={key:!0,ref:!0,__self:!0,__source:!0};function Em(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)D0.call(e,r)&&!L0.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:O0,type:t,key:s,ref:o,props:i,_owner:M0.current}}Fl.Fragment=A0;Fl.jsx=Em;Fl.jsxs=Em;(function(t){t.exports=Fl})(h0);var gu={},$o={},b0={get exports(){return $o},set exports(t){$o=t}},Je={},_u={},F0={get exports(){return _u},set exports(t){_u=t}},Cm={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(N,O){var D=N.length;N.push(O);e:for(;0<D;){var V=D-1>>>1,G=N[V];if(0<i(G,O))N[V]=O,N[D]=G,D=V;else break e}}function n(N){return N.length===0?null:N[0]}function r(N){if(N.length===0)return null;var O=N[0],D=N.pop();if(D!==O){N[0]=D;e:for(var V=0,G=N.length,tt=G>>>1;V<tt;){var ct=2*(V+1)-1,zn=N[ct],ze=ct+1,It=N[ze];if(0>i(zn,D))ze<G&&0>i(It,zn)?(N[V]=It,N[ze]=D,V=ze):(N[V]=zn,N[ct]=D,V=ct);else if(ze<G&&0>i(It,D))N[V]=It,N[ze]=D,V=ze;else break e}}return O}function i(N,O){var D=N.sortIndex-O.sortIndex;return D!==0?D:N.id-O.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var a=[],u=[],d=1,c=null,f=3,_=!1,v=!1,w=!1,R=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,h=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(N){for(var O=n(u);O!==null;){if(O.callback===null)r(u);else if(O.startTime<=N)r(u),O.sortIndex=O.expirationTime,e(a,O);else break;O=n(u)}}function E(N){if(w=!1,m(N),!v)if(n(a)!==null)v=!0,Un(I);else{var O=n(u);O!==null&&jn(E,O.startTime-N)}}function I(N,O){v=!1,w&&(w=!1,p(P),P=-1),_=!0;var D=f;try{for(m(O),c=n(a);c!==null&&(!(c.expirationTime>O)||N&&!Ne());){var V=c.callback;if(typeof V=="function"){c.callback=null,f=c.priorityLevel;var G=V(c.expirationTime<=O);O=t.unstable_now(),typeof G=="function"?c.callback=G:c===n(a)&&r(a),m(O)}else r(a);c=n(a)}if(c!==null)var tt=!0;else{var ct=n(u);ct!==null&&jn(E,ct.startTime-O),tt=!1}return tt}finally{c=null,f=D,_=!1}}var k=!1,T=null,P=-1,B=5,L=-1;function Ne(){return!(t.unstable_now()-L<B)}function St(){if(T!==null){var N=t.unstable_now();L=N;var O=!0;try{O=T(!0,N)}finally{O?kt():(k=!1,T=null)}}else k=!1}var kt;if(typeof h=="function")kt=function(){h(St)};else if(typeof MessageChannel<"u"){var Lt=new MessageChannel,he=Lt.port2;Lt.port1.onmessage=St,kt=function(){he.postMessage(null)}}else kt=function(){R(St,0)};function Un(N){T=N,k||(k=!0,kt())}function jn(N,O){P=R(function(){N(t.unstable_now())},O)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(N){N.callback=null},t.unstable_continueExecution=function(){v||_||(v=!0,Un(I))},t.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):B=0<N?Math.floor(1e3/N):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return n(a)},t.unstable_next=function(N){switch(f){case 1:case 2:case 3:var O=3;break;default:O=f}var D=f;f=O;try{return N()}finally{f=D}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(N,O){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var D=f;f=N;try{return O()}finally{f=D}},t.unstable_scheduleCallback=function(N,O,D){var V=t.unstable_now();switch(typeof D=="object"&&D!==null?(D=D.delay,D=typeof D=="number"&&0<D?V+D:V):D=V,N){case 1:var G=-1;break;case 2:G=250;break;case 5:G=1073741823;break;case 4:G=1e4;break;default:G=5e3}return G=D+G,N={id:d++,callback:O,priorityLevel:N,startTime:D,expirationTime:G,sortIndex:-1},D>V?(N.sortIndex=D,e(u,N),n(a)===null&&N===n(u)&&(w?(p(P),P=-1):w=!0,jn(E,D-V))):(N.sortIndex=G,e(a,N),v||_||(v=!0,Un(I))),N},t.unstable_shouldYield=Ne,t.unstable_wrapCallback=function(N){var O=f;return function(){var D=f;f=O;try{return N.apply(this,arguments)}finally{f=D}}}})(Cm);(function(t){t.exports=Cm})(F0);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Sm=y,Xe=_u;function C(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var km=new Set,ls={};function yr(t,e){si(t,e),si(t+"Capture",e)}function si(t,e){for(ls[t]=e,t=0;t<e.length;t++)km.add(e[t])}var Gt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),vu=Object.prototype.hasOwnProperty,U0=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Vf={},Gf={};function j0(t){return vu.call(Gf,t)?!0:vu.call(Vf,t)?!1:U0.test(t)?Gf[t]=!0:(Vf[t]=!0,!1)}function z0(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function $0(t,e,n,r){if(e===null||typeof e>"u"||z0(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function je(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Ie={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Ie[t]=new je(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Ie[e]=new je(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Ie[t]=new je(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Ie[t]=new je(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Ie[t]=new je(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Ie[t]=new je(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Ie[t]=new je(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Ie[t]=new je(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Ie[t]=new je(t,5,!1,t.toLowerCase(),null,!1,!1)});var Hc=/[\-:]([a-z])/g;function Vc(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Hc,Vc);Ie[e]=new je(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Hc,Vc);Ie[e]=new je(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Hc,Vc);Ie[e]=new je(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Ie[t]=new je(t,1,!1,t.toLowerCase(),null,!1,!1)});Ie.xlinkHref=new je("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Ie[t]=new je(t,1,!1,t.toLowerCase(),null,!0,!0)});function Gc(t,e,n,r){var i=Ie.hasOwnProperty(e)?Ie[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&($0(e,n,i,r)&&(n=null),r||i===null?j0(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Zt=Sm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,eo=Symbol.for("react.element"),Ar=Symbol.for("react.portal"),Dr=Symbol.for("react.fragment"),Kc=Symbol.for("react.strict_mode"),yu=Symbol.for("react.profiler"),Im=Symbol.for("react.provider"),Tm=Symbol.for("react.context"),qc=Symbol.for("react.forward_ref"),wu=Symbol.for("react.suspense"),Eu=Symbol.for("react.suspense_list"),Qc=Symbol.for("react.memo"),sn=Symbol.for("react.lazy"),Nm=Symbol.for("react.offscreen"),Kf=Symbol.iterator;function Pi(t){return t===null||typeof t!="object"?null:(t=Kf&&t[Kf]||t["@@iterator"],typeof t=="function"?t:null)}var se=Object.assign,Ta;function Bi(t){if(Ta===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Ta=e&&e[1]||""}return`
`+Ta+t}var Na=!1;function xa(t,e){if(!t||Na)return"";Na=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,l=s.length-1;1<=o&&0<=l&&i[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==s[l]){var a=`
`+i[o].replace(" at new "," at ");return t.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",t.displayName)),a}while(1<=o&&0<=l);break}}}finally{Na=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Bi(t):""}function B0(t){switch(t.tag){case 5:return Bi(t.type);case 16:return Bi("Lazy");case 13:return Bi("Suspense");case 19:return Bi("SuspenseList");case 0:case 2:case 15:return t=xa(t.type,!1),t;case 11:return t=xa(t.type.render,!1),t;case 1:return t=xa(t.type,!0),t;default:return""}}function Cu(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Dr:return"Fragment";case Ar:return"Portal";case yu:return"Profiler";case Kc:return"StrictMode";case wu:return"Suspense";case Eu:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Tm:return(t.displayName||"Context")+".Consumer";case Im:return(t._context.displayName||"Context")+".Provider";case qc:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Qc:return e=t.displayName||null,e!==null?e:Cu(t.type)||"Memo";case sn:e=t._payload,t=t._init;try{return Cu(t(e))}catch{}}return null}function W0(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Cu(e);case 8:return e===Kc?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Pn(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function xm(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function H0(t){var e=xm(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function to(t){t._valueTracker||(t._valueTracker=H0(t))}function Rm(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=xm(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Bo(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Su(t,e){var n=e.checked;return se({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function qf(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Pn(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Pm(t,e){e=e.checked,e!=null&&Gc(t,"checked",e,!1)}function ku(t,e){Pm(t,e);var n=Pn(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Iu(t,e.type,n):e.hasOwnProperty("defaultValue")&&Iu(t,e.type,Pn(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Qf(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Iu(t,e,n){(e!=="number"||Bo(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Wi=Array.isArray;function Kr(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Pn(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Tu(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(C(91));return se({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Yf(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(C(92));if(Wi(n)){if(1<n.length)throw Error(C(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Pn(n)}}function Om(t,e){var n=Pn(e.value),r=Pn(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Xf(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Am(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Nu(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Am(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var no,Dm=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(no=no||document.createElement("div"),no.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=no.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function as(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Ki={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},V0=["Webkit","ms","Moz","O"];Object.keys(Ki).forEach(function(t){V0.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Ki[e]=Ki[t]})});function Mm(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Ki.hasOwnProperty(t)&&Ki[t]?(""+e).trim():e+"px"}function Lm(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Mm(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var G0=se({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function xu(t,e){if(e){if(G0[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(C(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(C(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(C(61))}if(e.style!=null&&typeof e.style!="object")throw Error(C(62))}}function Ru(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Pu=null;function Yc(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ou=null,qr=null,Qr=null;function Jf(t){if(t=Us(t)){if(typeof Ou!="function")throw Error(C(280));var e=t.stateNode;e&&(e=Bl(e),Ou(t.stateNode,t.type,e))}}function bm(t){qr?Qr?Qr.push(t):Qr=[t]:qr=t}function Fm(){if(qr){var t=qr,e=Qr;if(Qr=qr=null,Jf(t),e)for(t=0;t<e.length;t++)Jf(e[t])}}function Um(t,e){return t(e)}function jm(){}var Ra=!1;function zm(t,e,n){if(Ra)return t(e,n);Ra=!0;try{return Um(t,e,n)}finally{Ra=!1,(qr!==null||Qr!==null)&&(jm(),Fm())}}function us(t,e){var n=t.stateNode;if(n===null)return null;var r=Bl(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(C(231,e,typeof n));return n}var Au=!1;if(Gt)try{var Oi={};Object.defineProperty(Oi,"passive",{get:function(){Au=!0}}),window.addEventListener("test",Oi,Oi),window.removeEventListener("test",Oi,Oi)}catch{Au=!1}function K0(t,e,n,r,i,s,o,l,a){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(d){this.onError(d)}}var qi=!1,Wo=null,Ho=!1,Du=null,q0={onError:function(t){qi=!0,Wo=t}};function Q0(t,e,n,r,i,s,o,l,a){qi=!1,Wo=null,K0.apply(q0,arguments)}function Y0(t,e,n,r,i,s,o,l,a){if(Q0.apply(this,arguments),qi){if(qi){var u=Wo;qi=!1,Wo=null}else throw Error(C(198));Ho||(Ho=!0,Du=u)}}function wr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function $m(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Zf(t){if(wr(t)!==t)throw Error(C(188))}function X0(t){var e=t.alternate;if(!e){if(e=wr(t),e===null)throw Error(C(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Zf(i),t;if(s===r)return Zf(i),e;s=s.sibling}throw Error(C(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o)throw Error(C(189))}}if(n.alternate!==r)throw Error(C(190))}if(n.tag!==3)throw Error(C(188));return n.stateNode.current===n?t:e}function Bm(t){return t=X0(t),t!==null?Wm(t):null}function Wm(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Wm(t);if(e!==null)return e;t=t.sibling}return null}var Hm=Xe.unstable_scheduleCallback,eh=Xe.unstable_cancelCallback,J0=Xe.unstable_shouldYield,Z0=Xe.unstable_requestPaint,ue=Xe.unstable_now,ew=Xe.unstable_getCurrentPriorityLevel,Xc=Xe.unstable_ImmediatePriority,Vm=Xe.unstable_UserBlockingPriority,Vo=Xe.unstable_NormalPriority,tw=Xe.unstable_LowPriority,Gm=Xe.unstable_IdlePriority,Ul=null,Rt=null;function nw(t){if(Rt&&typeof Rt.onCommitFiberRoot=="function")try{Rt.onCommitFiberRoot(Ul,t,void 0,(t.current.flags&128)===128)}catch{}}var _t=Math.clz32?Math.clz32:sw,rw=Math.log,iw=Math.LN2;function sw(t){return t>>>=0,t===0?32:31-(rw(t)/iw|0)|0}var ro=64,io=4194304;function Hi(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Go(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=Hi(l):(s&=o,s!==0&&(r=Hi(s)))}else o=n&~i,o!==0?r=Hi(o):s!==0&&(r=Hi(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-_t(e),i=1<<n,r|=t[n],e&=~i;return r}function ow(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function lw(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-_t(s),l=1<<o,a=i[o];a===-1?(!(l&n)||l&r)&&(i[o]=ow(l,e)):a<=e&&(t.expiredLanes|=l),s&=~l}}function Mu(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Km(){var t=ro;return ro<<=1,!(ro&4194240)&&(ro=64),t}function Pa(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function bs(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-_t(e),t[e]=n}function aw(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-_t(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Jc(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-_t(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var H=0;function qm(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Qm,Zc,Ym,Xm,Jm,Lu=!1,so=[],vn=null,yn=null,wn=null,cs=new Map,ds=new Map,an=[],uw="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function th(t,e){switch(t){case"focusin":case"focusout":vn=null;break;case"dragenter":case"dragleave":yn=null;break;case"mouseover":case"mouseout":wn=null;break;case"pointerover":case"pointerout":cs.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":ds.delete(e.pointerId)}}function Ai(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Us(e),e!==null&&Zc(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function cw(t,e,n,r,i){switch(e){case"focusin":return vn=Ai(vn,t,e,n,r,i),!0;case"dragenter":return yn=Ai(yn,t,e,n,r,i),!0;case"mouseover":return wn=Ai(wn,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return cs.set(s,Ai(cs.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,ds.set(s,Ai(ds.get(s)||null,t,e,n,r,i)),!0}return!1}function Zm(t){var e=Qn(t.target);if(e!==null){var n=wr(e);if(n!==null){if(e=n.tag,e===13){if(e=$m(n),e!==null){t.blockedOn=e,Jm(t.priority,function(){Ym(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function No(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=bu(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Pu=r,n.target.dispatchEvent(r),Pu=null}else return e=Us(n),e!==null&&Zc(e),t.blockedOn=n,!1;e.shift()}return!0}function nh(t,e,n){No(t)&&n.delete(e)}function dw(){Lu=!1,vn!==null&&No(vn)&&(vn=null),yn!==null&&No(yn)&&(yn=null),wn!==null&&No(wn)&&(wn=null),cs.forEach(nh),ds.forEach(nh)}function Di(t,e){t.blockedOn===e&&(t.blockedOn=null,Lu||(Lu=!0,Xe.unstable_scheduleCallback(Xe.unstable_NormalPriority,dw)))}function fs(t){function e(i){return Di(i,t)}if(0<so.length){Di(so[0],t);for(var n=1;n<so.length;n++){var r=so[n];r.blockedOn===t&&(r.blockedOn=null)}}for(vn!==null&&Di(vn,t),yn!==null&&Di(yn,t),wn!==null&&Di(wn,t),cs.forEach(e),ds.forEach(e),n=0;n<an.length;n++)r=an[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<an.length&&(n=an[0],n.blockedOn===null);)Zm(n),n.blockedOn===null&&an.shift()}var Yr=Zt.ReactCurrentBatchConfig,Ko=!0;function fw(t,e,n,r){var i=H,s=Yr.transition;Yr.transition=null;try{H=1,ed(t,e,n,r)}finally{H=i,Yr.transition=s}}function hw(t,e,n,r){var i=H,s=Yr.transition;Yr.transition=null;try{H=4,ed(t,e,n,r)}finally{H=i,Yr.transition=s}}function ed(t,e,n,r){if(Ko){var i=bu(t,e,n,r);if(i===null)za(t,e,r,qo,n),th(t,r);else if(cw(i,t,e,n,r))r.stopPropagation();else if(th(t,r),e&4&&-1<uw.indexOf(t)){for(;i!==null;){var s=Us(i);if(s!==null&&Qm(s),s=bu(t,e,n,r),s===null&&za(t,e,r,qo,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else za(t,e,r,null,n)}}var qo=null;function bu(t,e,n,r){if(qo=null,t=Yc(r),t=Qn(t),t!==null)if(e=wr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=$m(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return qo=t,null}function eg(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(ew()){case Xc:return 1;case Vm:return 4;case Vo:case tw:return 16;case Gm:return 536870912;default:return 16}default:return 16}}var mn=null,td=null,xo=null;function tg(){if(xo)return xo;var t,e=td,n=e.length,r,i="value"in mn?mn.value:mn.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return xo=i.slice(t,1<r?1-r:void 0)}function Ro(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function oo(){return!0}function rh(){return!1}function Ze(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?oo:rh,this.isPropagationStopped=rh,this}return se(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=oo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=oo)},persist:function(){},isPersistent:oo}),e}var Ei={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},nd=Ze(Ei),Fs=se({},Ei,{view:0,detail:0}),pw=Ze(Fs),Oa,Aa,Mi,jl=se({},Fs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:rd,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Mi&&(Mi&&t.type==="mousemove"?(Oa=t.screenX-Mi.screenX,Aa=t.screenY-Mi.screenY):Aa=Oa=0,Mi=t),Oa)},movementY:function(t){return"movementY"in t?t.movementY:Aa}}),ih=Ze(jl),mw=se({},jl,{dataTransfer:0}),gw=Ze(mw),_w=se({},Fs,{relatedTarget:0}),Da=Ze(_w),vw=se({},Ei,{animationName:0,elapsedTime:0,pseudoElement:0}),yw=Ze(vw),ww=se({},Ei,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Ew=Ze(ww),Cw=se({},Ei,{data:0}),sh=Ze(Cw),Sw={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},kw={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Iw={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Tw(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Iw[t])?!!e[t]:!1}function rd(){return Tw}var Nw=se({},Fs,{key:function(t){if(t.key){var e=Sw[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Ro(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?kw[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:rd,charCode:function(t){return t.type==="keypress"?Ro(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Ro(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),xw=Ze(Nw),Rw=se({},jl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),oh=Ze(Rw),Pw=se({},Fs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:rd}),Ow=Ze(Pw),Aw=se({},Ei,{propertyName:0,elapsedTime:0,pseudoElement:0}),Dw=Ze(Aw),Mw=se({},jl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Lw=Ze(Mw),bw=[9,13,27,32],id=Gt&&"CompositionEvent"in window,Qi=null;Gt&&"documentMode"in document&&(Qi=document.documentMode);var Fw=Gt&&"TextEvent"in window&&!Qi,ng=Gt&&(!id||Qi&&8<Qi&&11>=Qi),lh=String.fromCharCode(32),ah=!1;function rg(t,e){switch(t){case"keyup":return bw.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ig(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Mr=!1;function Uw(t,e){switch(t){case"compositionend":return ig(e);case"keypress":return e.which!==32?null:(ah=!0,lh);case"textInput":return t=e.data,t===lh&&ah?null:t;default:return null}}function jw(t,e){if(Mr)return t==="compositionend"||!id&&rg(t,e)?(t=tg(),xo=td=mn=null,Mr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return ng&&e.locale!=="ko"?null:e.data;default:return null}}var zw={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function uh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!zw[t.type]:e==="textarea"}function sg(t,e,n,r){bm(r),e=Qo(e,"onChange"),0<e.length&&(n=new nd("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Yi=null,hs=null;function $w(t){gg(t,0)}function zl(t){var e=Fr(t);if(Rm(e))return t}function Bw(t,e){if(t==="change")return e}var og=!1;if(Gt){var Ma;if(Gt){var La="oninput"in document;if(!La){var ch=document.createElement("div");ch.setAttribute("oninput","return;"),La=typeof ch.oninput=="function"}Ma=La}else Ma=!1;og=Ma&&(!document.documentMode||9<document.documentMode)}function dh(){Yi&&(Yi.detachEvent("onpropertychange",lg),hs=Yi=null)}function lg(t){if(t.propertyName==="value"&&zl(hs)){var e=[];sg(e,hs,t,Yc(t)),zm($w,e)}}function Ww(t,e,n){t==="focusin"?(dh(),Yi=e,hs=n,Yi.attachEvent("onpropertychange",lg)):t==="focusout"&&dh()}function Hw(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return zl(hs)}function Vw(t,e){if(t==="click")return zl(e)}function Gw(t,e){if(t==="input"||t==="change")return zl(e)}function Kw(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Et=typeof Object.is=="function"?Object.is:Kw;function ps(t,e){if(Et(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!vu.call(e,i)||!Et(t[i],e[i]))return!1}return!0}function fh(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function hh(t,e){var n=fh(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=fh(n)}}function ag(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?ag(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function ug(){for(var t=window,e=Bo();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Bo(t.document)}return e}function sd(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function qw(t){var e=ug(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&ag(n.ownerDocument.documentElement,n)){if(r!==null&&sd(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=hh(n,s);var o=hh(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Qw=Gt&&"documentMode"in document&&11>=document.documentMode,Lr=null,Fu=null,Xi=null,Uu=!1;function ph(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Uu||Lr==null||Lr!==Bo(r)||(r=Lr,"selectionStart"in r&&sd(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Xi&&ps(Xi,r)||(Xi=r,r=Qo(Fu,"onSelect"),0<r.length&&(e=new nd("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Lr)))}function lo(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var br={animationend:lo("Animation","AnimationEnd"),animationiteration:lo("Animation","AnimationIteration"),animationstart:lo("Animation","AnimationStart"),transitionend:lo("Transition","TransitionEnd")},ba={},cg={};Gt&&(cg=document.createElement("div").style,"AnimationEvent"in window||(delete br.animationend.animation,delete br.animationiteration.animation,delete br.animationstart.animation),"TransitionEvent"in window||delete br.transitionend.transition);function $l(t){if(ba[t])return ba[t];if(!br[t])return t;var e=br[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in cg)return ba[t]=e[n];return t}var dg=$l("animationend"),fg=$l("animationiteration"),hg=$l("animationstart"),pg=$l("transitionend"),mg=new Map,mh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Mn(t,e){mg.set(t,e),yr(e,[t])}for(var Fa=0;Fa<mh.length;Fa++){var Ua=mh[Fa],Yw=Ua.toLowerCase(),Xw=Ua[0].toUpperCase()+Ua.slice(1);Mn(Yw,"on"+Xw)}Mn(dg,"onAnimationEnd");Mn(fg,"onAnimationIteration");Mn(hg,"onAnimationStart");Mn("dblclick","onDoubleClick");Mn("focusin","onFocus");Mn("focusout","onBlur");Mn(pg,"onTransitionEnd");si("onMouseEnter",["mouseout","mouseover"]);si("onMouseLeave",["mouseout","mouseover"]);si("onPointerEnter",["pointerout","pointerover"]);si("onPointerLeave",["pointerout","pointerover"]);yr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));yr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));yr("onBeforeInput",["compositionend","keypress","textInput","paste"]);yr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));yr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));yr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Vi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Jw=new Set("cancel close invalid load scroll toggle".split(" ").concat(Vi));function gh(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,Y0(r,e,void 0,t),t.currentTarget=null}function gg(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],a=l.instance,u=l.currentTarget;if(l=l.listener,a!==s&&i.isPropagationStopped())break e;gh(i,l,u),s=a}else for(o=0;o<r.length;o++){if(l=r[o],a=l.instance,u=l.currentTarget,l=l.listener,a!==s&&i.isPropagationStopped())break e;gh(i,l,u),s=a}}}if(Ho)throw t=Du,Ho=!1,Du=null,t}function Z(t,e){var n=e[Wu];n===void 0&&(n=e[Wu]=new Set);var r=t+"__bubble";n.has(r)||(_g(e,t,2,!1),n.add(r))}function ja(t,e,n){var r=0;e&&(r|=4),_g(n,t,r,e)}var ao="_reactListening"+Math.random().toString(36).slice(2);function ms(t){if(!t[ao]){t[ao]=!0,km.forEach(function(n){n!=="selectionchange"&&(Jw.has(n)||ja(n,!1,t),ja(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[ao]||(e[ao]=!0,ja("selectionchange",!1,e))}}function _g(t,e,n,r){switch(eg(e)){case 1:var i=fw;break;case 4:i=hw;break;default:i=ed}n=i.bind(null,e,n,t),i=void 0,!Au||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function za(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var a=o.tag;if((a===3||a===4)&&(a=o.stateNode.containerInfo,a===i||a.nodeType===8&&a.parentNode===i))return;o=o.return}for(;l!==null;){if(o=Qn(l),o===null)return;if(a=o.tag,a===5||a===6){r=s=o;continue e}l=l.parentNode}}r=r.return}zm(function(){var u=s,d=Yc(n),c=[];e:{var f=mg.get(t);if(f!==void 0){var _=nd,v=t;switch(t){case"keypress":if(Ro(n)===0)break e;case"keydown":case"keyup":_=xw;break;case"focusin":v="focus",_=Da;break;case"focusout":v="blur",_=Da;break;case"beforeblur":case"afterblur":_=Da;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":_=ih;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":_=gw;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":_=Ow;break;case dg:case fg:case hg:_=yw;break;case pg:_=Dw;break;case"scroll":_=pw;break;case"wheel":_=Lw;break;case"copy":case"cut":case"paste":_=Ew;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":_=oh}var w=(e&4)!==0,R=!w&&t==="scroll",p=w?f!==null?f+"Capture":null:f;w=[];for(var h=u,m;h!==null;){m=h;var E=m.stateNode;if(m.tag===5&&E!==null&&(m=E,p!==null&&(E=us(h,p),E!=null&&w.push(gs(h,E,m)))),R)break;h=h.return}0<w.length&&(f=new _(f,v,null,n,d),c.push({event:f,listeners:w}))}}if(!(e&7)){e:{if(f=t==="mouseover"||t==="pointerover",_=t==="mouseout"||t==="pointerout",f&&n!==Pu&&(v=n.relatedTarget||n.fromElement)&&(Qn(v)||v[Kt]))break e;if((_||f)&&(f=d.window===d?d:(f=d.ownerDocument)?f.defaultView||f.parentWindow:window,_?(v=n.relatedTarget||n.toElement,_=u,v=v?Qn(v):null,v!==null&&(R=wr(v),v!==R||v.tag!==5&&v.tag!==6)&&(v=null)):(_=null,v=u),_!==v)){if(w=ih,E="onMouseLeave",p="onMouseEnter",h="mouse",(t==="pointerout"||t==="pointerover")&&(w=oh,E="onPointerLeave",p="onPointerEnter",h="pointer"),R=_==null?f:Fr(_),m=v==null?f:Fr(v),f=new w(E,h+"leave",_,n,d),f.target=R,f.relatedTarget=m,E=null,Qn(d)===u&&(w=new w(p,h+"enter",v,n,d),w.target=m,w.relatedTarget=R,E=w),R=E,_&&v)t:{for(w=_,p=v,h=0,m=w;m;m=Nr(m))h++;for(m=0,E=p;E;E=Nr(E))m++;for(;0<h-m;)w=Nr(w),h--;for(;0<m-h;)p=Nr(p),m--;for(;h--;){if(w===p||p!==null&&w===p.alternate)break t;w=Nr(w),p=Nr(p)}w=null}else w=null;_!==null&&_h(c,f,_,w,!1),v!==null&&R!==null&&_h(c,R,v,w,!0)}}e:{if(f=u?Fr(u):window,_=f.nodeName&&f.nodeName.toLowerCase(),_==="select"||_==="input"&&f.type==="file")var I=Bw;else if(uh(f))if(og)I=Gw;else{I=Hw;var k=Ww}else(_=f.nodeName)&&_.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(I=Vw);if(I&&(I=I(t,u))){sg(c,I,n,d);break e}k&&k(t,f,u),t==="focusout"&&(k=f._wrapperState)&&k.controlled&&f.type==="number"&&Iu(f,"number",f.value)}switch(k=u?Fr(u):window,t){case"focusin":(uh(k)||k.contentEditable==="true")&&(Lr=k,Fu=u,Xi=null);break;case"focusout":Xi=Fu=Lr=null;break;case"mousedown":Uu=!0;break;case"contextmenu":case"mouseup":case"dragend":Uu=!1,ph(c,n,d);break;case"selectionchange":if(Qw)break;case"keydown":case"keyup":ph(c,n,d)}var T;if(id)e:{switch(t){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else Mr?rg(t,n)&&(P="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(P="onCompositionStart");P&&(ng&&n.locale!=="ko"&&(Mr||P!=="onCompositionStart"?P==="onCompositionEnd"&&Mr&&(T=tg()):(mn=d,td="value"in mn?mn.value:mn.textContent,Mr=!0)),k=Qo(u,P),0<k.length&&(P=new sh(P,t,null,n,d),c.push({event:P,listeners:k}),T?P.data=T:(T=ig(n),T!==null&&(P.data=T)))),(T=Fw?Uw(t,n):jw(t,n))&&(u=Qo(u,"onBeforeInput"),0<u.length&&(d=new sh("onBeforeInput","beforeinput",null,n,d),c.push({event:d,listeners:u}),d.data=T))}gg(c,e)})}function gs(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Qo(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=us(t,n),s!=null&&r.unshift(gs(t,s,i)),s=us(t,e),s!=null&&r.push(gs(t,s,i))),t=t.return}return r}function Nr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function _h(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var l=n,a=l.alternate,u=l.stateNode;if(a!==null&&a===r)break;l.tag===5&&u!==null&&(l=u,i?(a=us(n,s),a!=null&&o.unshift(gs(n,a,l))):i||(a=us(n,s),a!=null&&o.push(gs(n,a,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var Zw=/\r\n?/g,eE=/\u0000|\uFFFD/g;function vh(t){return(typeof t=="string"?t:""+t).replace(Zw,`
`).replace(eE,"")}function uo(t,e,n){if(e=vh(e),vh(t)!==e&&n)throw Error(C(425))}function Yo(){}var ju=null,zu=null;function $u(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Bu=typeof setTimeout=="function"?setTimeout:void 0,tE=typeof clearTimeout=="function"?clearTimeout:void 0,yh=typeof Promise=="function"?Promise:void 0,nE=typeof queueMicrotask=="function"?queueMicrotask:typeof yh<"u"?function(t){return yh.resolve(null).then(t).catch(rE)}:Bu;function rE(t){setTimeout(function(){throw t})}function $a(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),fs(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);fs(e)}function En(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function wh(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Ci=Math.random().toString(36).slice(2),xt="__reactFiber$"+Ci,_s="__reactProps$"+Ci,Kt="__reactContainer$"+Ci,Wu="__reactEvents$"+Ci,iE="__reactListeners$"+Ci,sE="__reactHandles$"+Ci;function Qn(t){var e=t[xt];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Kt]||n[xt]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=wh(t);t!==null;){if(n=t[xt])return n;t=wh(t)}return e}t=n,n=t.parentNode}return null}function Us(t){return t=t[xt]||t[Kt],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Fr(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(C(33))}function Bl(t){return t[_s]||null}var Hu=[],Ur=-1;function Ln(t){return{current:t}}function ee(t){0>Ur||(t.current=Hu[Ur],Hu[Ur]=null,Ur--)}function J(t,e){Ur++,Hu[Ur]=t.current,t.current=e}var On={},Ae=Ln(On),Ve=Ln(!1),sr=On;function oi(t,e){var n=t.type.contextTypes;if(!n)return On;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Ge(t){return t=t.childContextTypes,t!=null}function Xo(){ee(Ve),ee(Ae)}function Eh(t,e,n){if(Ae.current!==On)throw Error(C(168));J(Ae,e),J(Ve,n)}function vg(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(C(108,W0(t)||"Unknown",i));return se({},n,r)}function Jo(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||On,sr=Ae.current,J(Ae,t),J(Ve,Ve.current),!0}function Ch(t,e,n){var r=t.stateNode;if(!r)throw Error(C(169));n?(t=vg(t,e,sr),r.__reactInternalMemoizedMergedChildContext=t,ee(Ve),ee(Ae),J(Ae,t)):ee(Ve),J(Ve,n)}var Ft=null,Wl=!1,Ba=!1;function yg(t){Ft===null?Ft=[t]:Ft.push(t)}function oE(t){Wl=!0,yg(t)}function bn(){if(!Ba&&Ft!==null){Ba=!0;var t=0,e=H;try{var n=Ft;for(H=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Ft=null,Wl=!1}catch(i){throw Ft!==null&&(Ft=Ft.slice(t+1)),Hm(Xc,bn),i}finally{H=e,Ba=!1}}return null}var jr=[],zr=0,Zo=null,el=0,rt=[],it=0,or=null,jt=1,zt="";function Bn(t,e){jr[zr++]=el,jr[zr++]=Zo,Zo=t,el=e}function wg(t,e,n){rt[it++]=jt,rt[it++]=zt,rt[it++]=or,or=t;var r=jt;t=zt;var i=32-_t(r)-1;r&=~(1<<i),n+=1;var s=32-_t(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,jt=1<<32-_t(e)+i|n<<i|r,zt=s+t}else jt=1<<s|n<<i|r,zt=t}function od(t){t.return!==null&&(Bn(t,1),wg(t,1,0))}function ld(t){for(;t===Zo;)Zo=jr[--zr],jr[zr]=null,el=jr[--zr],jr[zr]=null;for(;t===or;)or=rt[--it],rt[it]=null,zt=rt[--it],rt[it]=null,jt=rt[--it],rt[it]=null}var Ye=null,Qe=null,ne=!1,pt=null;function Eg(t,e){var n=st(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Sh(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Ye=t,Qe=En(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Ye=t,Qe=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=or!==null?{id:jt,overflow:zt}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=st(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Ye=t,Qe=null,!0):!1;default:return!1}}function Vu(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Gu(t){if(ne){var e=Qe;if(e){var n=e;if(!Sh(t,e)){if(Vu(t))throw Error(C(418));e=En(n.nextSibling);var r=Ye;e&&Sh(t,e)?Eg(r,n):(t.flags=t.flags&-4097|2,ne=!1,Ye=t)}}else{if(Vu(t))throw Error(C(418));t.flags=t.flags&-4097|2,ne=!1,Ye=t}}}function kh(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Ye=t}function co(t){if(t!==Ye)return!1;if(!ne)return kh(t),ne=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!$u(t.type,t.memoizedProps)),e&&(e=Qe)){if(Vu(t))throw Cg(),Error(C(418));for(;e;)Eg(t,e),e=En(e.nextSibling)}if(kh(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(C(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Qe=En(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Qe=null}}else Qe=Ye?En(t.stateNode.nextSibling):null;return!0}function Cg(){for(var t=Qe;t;)t=En(t.nextSibling)}function li(){Qe=Ye=null,ne=!1}function ad(t){pt===null?pt=[t]:pt.push(t)}var lE=Zt.ReactCurrentBatchConfig;function ft(t,e){if(t&&t.defaultProps){e=se({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var tl=Ln(null),nl=null,$r=null,ud=null;function cd(){ud=$r=nl=null}function dd(t){var e=tl.current;ee(tl),t._currentValue=e}function Ku(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Xr(t,e){nl=t,ud=$r=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Be=!0),t.firstContext=null)}function at(t){var e=t._currentValue;if(ud!==t)if(t={context:t,memoizedValue:e,next:null},$r===null){if(nl===null)throw Error(C(308));$r=t,nl.dependencies={lanes:0,firstContext:t}}else $r=$r.next=t;return e}var Yn=null;function fd(t){Yn===null?Yn=[t]:Yn.push(t)}function Sg(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,fd(e)):(n.next=i.next,i.next=n),e.interleaved=n,qt(t,r)}function qt(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var on=!1;function hd(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function kg(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Ht(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Cn(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,z&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,qt(t,n)}return i=r.interleaved,i===null?(e.next=e,fd(r)):(e.next=i.next,i.next=e),r.interleaved=e,qt(t,n)}function Po(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Jc(t,n)}}function Ih(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function rl(t,e,n,r){var i=t.updateQueue;on=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var a=l,u=a.next;a.next=null,o===null?s=u:o.next=u,o=a;var d=t.alternate;d!==null&&(d=d.updateQueue,l=d.lastBaseUpdate,l!==o&&(l===null?d.firstBaseUpdate=u:l.next=u,d.lastBaseUpdate=a))}if(s!==null){var c=i.baseState;o=0,d=u=a=null,l=s;do{var f=l.lane,_=l.eventTime;if((r&f)===f){d!==null&&(d=d.next={eventTime:_,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var v=t,w=l;switch(f=e,_=n,w.tag){case 1:if(v=w.payload,typeof v=="function"){c=v.call(_,c,f);break e}c=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=w.payload,f=typeof v=="function"?v.call(_,c,f):v,f==null)break e;c=se({},c,f);break e;case 2:on=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,f=i.effects,f===null?i.effects=[l]:f.push(l))}else _={eventTime:_,lane:f,tag:l.tag,payload:l.payload,callback:l.callback,next:null},d===null?(u=d=_,a=c):d=d.next=_,o|=f;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;f=l,l=f.next,f.next=null,i.lastBaseUpdate=f,i.shared.pending=null}}while(1);if(d===null&&(a=c),i.baseState=a,i.firstBaseUpdate=u,i.lastBaseUpdate=d,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);ar|=o,t.lanes=o,t.memoizedState=c}}function Th(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(C(191,i));i.call(r)}}}var Ig=new Sm.Component().refs;function qu(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:se({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Hl={isMounted:function(t){return(t=t._reactInternals)?wr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=be(),i=kn(t),s=Ht(r,i);s.payload=e,n!=null&&(s.callback=n),e=Cn(t,s,i),e!==null&&(vt(e,t,i,r),Po(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=be(),i=kn(t),s=Ht(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Cn(t,s,i),e!==null&&(vt(e,t,i,r),Po(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=be(),r=kn(t),i=Ht(n,r);i.tag=2,e!=null&&(i.callback=e),e=Cn(t,i,r),e!==null&&(vt(e,t,r,n),Po(e,t,r))}};function Nh(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!ps(n,r)||!ps(i,s):!0}function Tg(t,e,n){var r=!1,i=On,s=e.contextType;return typeof s=="object"&&s!==null?s=at(s):(i=Ge(e)?sr:Ae.current,r=e.contextTypes,s=(r=r!=null)?oi(t,i):On),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Hl,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function xh(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Hl.enqueueReplaceState(e,e.state,null)}function Qu(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=Ig,hd(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=at(s):(s=Ge(e)?sr:Ae.current,i.context=oi(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(qu(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Hl.enqueueReplaceState(i,i.state,null),rl(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Li(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(C(309));var r=n.stateNode}if(!r)throw Error(C(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var l=i.refs;l===Ig&&(l=i.refs={}),o===null?delete l[s]:l[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(C(284));if(!n._owner)throw Error(C(290,t))}return t}function fo(t,e){throw t=Object.prototype.toString.call(e),Error(C(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Rh(t){var e=t._init;return e(t._payload)}function Ng(t){function e(p,h){if(t){var m=p.deletions;m===null?(p.deletions=[h],p.flags|=16):m.push(h)}}function n(p,h){if(!t)return null;for(;h!==null;)e(p,h),h=h.sibling;return null}function r(p,h){for(p=new Map;h!==null;)h.key!==null?p.set(h.key,h):p.set(h.index,h),h=h.sibling;return p}function i(p,h){return p=In(p,h),p.index=0,p.sibling=null,p}function s(p,h,m){return p.index=m,t?(m=p.alternate,m!==null?(m=m.index,m<h?(p.flags|=2,h):m):(p.flags|=2,h)):(p.flags|=1048576,h)}function o(p){return t&&p.alternate===null&&(p.flags|=2),p}function l(p,h,m,E){return h===null||h.tag!==6?(h=Qa(m,p.mode,E),h.return=p,h):(h=i(h,m),h.return=p,h)}function a(p,h,m,E){var I=m.type;return I===Dr?d(p,h,m.props.children,E,m.key):h!==null&&(h.elementType===I||typeof I=="object"&&I!==null&&I.$$typeof===sn&&Rh(I)===h.type)?(E=i(h,m.props),E.ref=Li(p,h,m),E.return=p,E):(E=bo(m.type,m.key,m.props,null,p.mode,E),E.ref=Li(p,h,m),E.return=p,E)}function u(p,h,m,E){return h===null||h.tag!==4||h.stateNode.containerInfo!==m.containerInfo||h.stateNode.implementation!==m.implementation?(h=Ya(m,p.mode,E),h.return=p,h):(h=i(h,m.children||[]),h.return=p,h)}function d(p,h,m,E,I){return h===null||h.tag!==7?(h=tr(m,p.mode,E,I),h.return=p,h):(h=i(h,m),h.return=p,h)}function c(p,h,m){if(typeof h=="string"&&h!==""||typeof h=="number")return h=Qa(""+h,p.mode,m),h.return=p,h;if(typeof h=="object"&&h!==null){switch(h.$$typeof){case eo:return m=bo(h.type,h.key,h.props,null,p.mode,m),m.ref=Li(p,null,h),m.return=p,m;case Ar:return h=Ya(h,p.mode,m),h.return=p,h;case sn:var E=h._init;return c(p,E(h._payload),m)}if(Wi(h)||Pi(h))return h=tr(h,p.mode,m,null),h.return=p,h;fo(p,h)}return null}function f(p,h,m,E){var I=h!==null?h.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return I!==null?null:l(p,h,""+m,E);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case eo:return m.key===I?a(p,h,m,E):null;case Ar:return m.key===I?u(p,h,m,E):null;case sn:return I=m._init,f(p,h,I(m._payload),E)}if(Wi(m)||Pi(m))return I!==null?null:d(p,h,m,E,null);fo(p,m)}return null}function _(p,h,m,E,I){if(typeof E=="string"&&E!==""||typeof E=="number")return p=p.get(m)||null,l(h,p,""+E,I);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case eo:return p=p.get(E.key===null?m:E.key)||null,a(h,p,E,I);case Ar:return p=p.get(E.key===null?m:E.key)||null,u(h,p,E,I);case sn:var k=E._init;return _(p,h,m,k(E._payload),I)}if(Wi(E)||Pi(E))return p=p.get(m)||null,d(h,p,E,I,null);fo(h,E)}return null}function v(p,h,m,E){for(var I=null,k=null,T=h,P=h=0,B=null;T!==null&&P<m.length;P++){T.index>P?(B=T,T=null):B=T.sibling;var L=f(p,T,m[P],E);if(L===null){T===null&&(T=B);break}t&&T&&L.alternate===null&&e(p,T),h=s(L,h,P),k===null?I=L:k.sibling=L,k=L,T=B}if(P===m.length)return n(p,T),ne&&Bn(p,P),I;if(T===null){for(;P<m.length;P++)T=c(p,m[P],E),T!==null&&(h=s(T,h,P),k===null?I=T:k.sibling=T,k=T);return ne&&Bn(p,P),I}for(T=r(p,T);P<m.length;P++)B=_(T,p,P,m[P],E),B!==null&&(t&&B.alternate!==null&&T.delete(B.key===null?P:B.key),h=s(B,h,P),k===null?I=B:k.sibling=B,k=B);return t&&T.forEach(function(Ne){return e(p,Ne)}),ne&&Bn(p,P),I}function w(p,h,m,E){var I=Pi(m);if(typeof I!="function")throw Error(C(150));if(m=I.call(m),m==null)throw Error(C(151));for(var k=I=null,T=h,P=h=0,B=null,L=m.next();T!==null&&!L.done;P++,L=m.next()){T.index>P?(B=T,T=null):B=T.sibling;var Ne=f(p,T,L.value,E);if(Ne===null){T===null&&(T=B);break}t&&T&&Ne.alternate===null&&e(p,T),h=s(Ne,h,P),k===null?I=Ne:k.sibling=Ne,k=Ne,T=B}if(L.done)return n(p,T),ne&&Bn(p,P),I;if(T===null){for(;!L.done;P++,L=m.next())L=c(p,L.value,E),L!==null&&(h=s(L,h,P),k===null?I=L:k.sibling=L,k=L);return ne&&Bn(p,P),I}for(T=r(p,T);!L.done;P++,L=m.next())L=_(T,p,P,L.value,E),L!==null&&(t&&L.alternate!==null&&T.delete(L.key===null?P:L.key),h=s(L,h,P),k===null?I=L:k.sibling=L,k=L);return t&&T.forEach(function(St){return e(p,St)}),ne&&Bn(p,P),I}function R(p,h,m,E){if(typeof m=="object"&&m!==null&&m.type===Dr&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case eo:e:{for(var I=m.key,k=h;k!==null;){if(k.key===I){if(I=m.type,I===Dr){if(k.tag===7){n(p,k.sibling),h=i(k,m.props.children),h.return=p,p=h;break e}}else if(k.elementType===I||typeof I=="object"&&I!==null&&I.$$typeof===sn&&Rh(I)===k.type){n(p,k.sibling),h=i(k,m.props),h.ref=Li(p,k,m),h.return=p,p=h;break e}n(p,k);break}else e(p,k);k=k.sibling}m.type===Dr?(h=tr(m.props.children,p.mode,E,m.key),h.return=p,p=h):(E=bo(m.type,m.key,m.props,null,p.mode,E),E.ref=Li(p,h,m),E.return=p,p=E)}return o(p);case Ar:e:{for(k=m.key;h!==null;){if(h.key===k)if(h.tag===4&&h.stateNode.containerInfo===m.containerInfo&&h.stateNode.implementation===m.implementation){n(p,h.sibling),h=i(h,m.children||[]),h.return=p,p=h;break e}else{n(p,h);break}else e(p,h);h=h.sibling}h=Ya(m,p.mode,E),h.return=p,p=h}return o(p);case sn:return k=m._init,R(p,h,k(m._payload),E)}if(Wi(m))return v(p,h,m,E);if(Pi(m))return w(p,h,m,E);fo(p,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,h!==null&&h.tag===6?(n(p,h.sibling),h=i(h,m),h.return=p,p=h):(n(p,h),h=Qa(m,p.mode,E),h.return=p,p=h),o(p)):n(p,h)}return R}var ai=Ng(!0),xg=Ng(!1),js={},Pt=Ln(js),vs=Ln(js),ys=Ln(js);function Xn(t){if(t===js)throw Error(C(174));return t}function pd(t,e){switch(J(ys,e),J(vs,t),J(Pt,js),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Nu(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Nu(e,t)}ee(Pt),J(Pt,e)}function ui(){ee(Pt),ee(vs),ee(ys)}function Rg(t){Xn(ys.current);var e=Xn(Pt.current),n=Nu(e,t.type);e!==n&&(J(vs,t),J(Pt,n))}function md(t){vs.current===t&&(ee(Pt),ee(vs))}var re=Ln(0);function il(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Wa=[];function gd(){for(var t=0;t<Wa.length;t++)Wa[t]._workInProgressVersionPrimary=null;Wa.length=0}var Oo=Zt.ReactCurrentDispatcher,Ha=Zt.ReactCurrentBatchConfig,lr=0,ie=null,de=null,ge=null,sl=!1,Ji=!1,ws=0,aE=0;function xe(){throw Error(C(321))}function _d(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Et(t[n],e[n]))return!1;return!0}function vd(t,e,n,r,i,s){if(lr=s,ie=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Oo.current=t===null||t.memoizedState===null?fE:hE,t=n(r,i),Ji){s=0;do{if(Ji=!1,ws=0,25<=s)throw Error(C(301));s+=1,ge=de=null,e.updateQueue=null,Oo.current=pE,t=n(r,i)}while(Ji)}if(Oo.current=ol,e=de!==null&&de.next!==null,lr=0,ge=de=ie=null,sl=!1,e)throw Error(C(300));return t}function yd(){var t=ws!==0;return ws=0,t}function Nt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ge===null?ie.memoizedState=ge=t:ge=ge.next=t,ge}function ut(){if(de===null){var t=ie.alternate;t=t!==null?t.memoizedState:null}else t=de.next;var e=ge===null?ie.memoizedState:ge.next;if(e!==null)ge=e,de=t;else{if(t===null)throw Error(C(310));de=t,t={memoizedState:de.memoizedState,baseState:de.baseState,baseQueue:de.baseQueue,queue:de.queue,next:null},ge===null?ie.memoizedState=ge=t:ge=ge.next=t}return ge}function Es(t,e){return typeof e=="function"?e(t):e}function Va(t){var e=ut(),n=e.queue;if(n===null)throw Error(C(311));n.lastRenderedReducer=t;var r=de,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=o=null,a=null,u=s;do{var d=u.lane;if((lr&d)===d)a!==null&&(a=a.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var c={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};a===null?(l=a=c,o=r):a=a.next=c,ie.lanes|=d,ar|=d}u=u.next}while(u!==null&&u!==s);a===null?o=r:a.next=l,Et(r,e.memoizedState)||(Be=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=a,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,ie.lanes|=s,ar|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Ga(t){var e=ut(),n=e.queue;if(n===null)throw Error(C(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);Et(s,e.memoizedState)||(Be=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function Pg(){}function Og(t,e){var n=ie,r=ut(),i=e(),s=!Et(r.memoizedState,i);if(s&&(r.memoizedState=i,Be=!0),r=r.queue,wd(Mg.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||ge!==null&&ge.memoizedState.tag&1){if(n.flags|=2048,Cs(9,Dg.bind(null,n,r,i,e),void 0,null),we===null)throw Error(C(349));lr&30||Ag(n,e,i)}return i}function Ag(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=ie.updateQueue,e===null?(e={lastEffect:null,stores:null},ie.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Dg(t,e,n,r){e.value=n,e.getSnapshot=r,Lg(e)&&bg(t)}function Mg(t,e,n){return n(function(){Lg(e)&&bg(t)})}function Lg(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Et(t,n)}catch{return!0}}function bg(t){var e=qt(t,1);e!==null&&vt(e,t,1,-1)}function Ph(t){var e=Nt();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Es,lastRenderedState:t},e.queue=t,t=t.dispatch=dE.bind(null,ie,t),[e.memoizedState,t]}function Cs(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=ie.updateQueue,e===null?(e={lastEffect:null,stores:null},ie.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function Fg(){return ut().memoizedState}function Ao(t,e,n,r){var i=Nt();ie.flags|=t,i.memoizedState=Cs(1|e,n,void 0,r===void 0?null:r)}function Vl(t,e,n,r){var i=ut();r=r===void 0?null:r;var s=void 0;if(de!==null){var o=de.memoizedState;if(s=o.destroy,r!==null&&_d(r,o.deps)){i.memoizedState=Cs(e,n,s,r);return}}ie.flags|=t,i.memoizedState=Cs(1|e,n,s,r)}function Oh(t,e){return Ao(8390656,8,t,e)}function wd(t,e){return Vl(2048,8,t,e)}function Ug(t,e){return Vl(4,2,t,e)}function jg(t,e){return Vl(4,4,t,e)}function zg(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function $g(t,e,n){return n=n!=null?n.concat([t]):null,Vl(4,4,zg.bind(null,e,t),n)}function Ed(){}function Bg(t,e){var n=ut();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&_d(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function Wg(t,e){var n=ut();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&_d(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function Hg(t,e,n){return lr&21?(Et(n,e)||(n=Km(),ie.lanes|=n,ar|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Be=!0),t.memoizedState=n)}function uE(t,e){var n=H;H=n!==0&&4>n?n:4,t(!0);var r=Ha.transition;Ha.transition={};try{t(!1),e()}finally{H=n,Ha.transition=r}}function Vg(){return ut().memoizedState}function cE(t,e,n){var r=kn(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Gg(t))Kg(e,n);else if(n=Sg(t,e,n,r),n!==null){var i=be();vt(n,t,r,i),qg(n,e,r)}}function dE(t,e,n){var r=kn(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Gg(t))Kg(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,l=s(o,n);if(i.hasEagerState=!0,i.eagerState=l,Et(l,o)){var a=e.interleaved;a===null?(i.next=i,fd(e)):(i.next=a.next,a.next=i),e.interleaved=i;return}}catch{}finally{}n=Sg(t,e,i,r),n!==null&&(i=be(),vt(n,t,r,i),qg(n,e,r))}}function Gg(t){var e=t.alternate;return t===ie||e!==null&&e===ie}function Kg(t,e){Ji=sl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function qg(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Jc(t,n)}}var ol={readContext:at,useCallback:xe,useContext:xe,useEffect:xe,useImperativeHandle:xe,useInsertionEffect:xe,useLayoutEffect:xe,useMemo:xe,useReducer:xe,useRef:xe,useState:xe,useDebugValue:xe,useDeferredValue:xe,useTransition:xe,useMutableSource:xe,useSyncExternalStore:xe,useId:xe,unstable_isNewReconciler:!1},fE={readContext:at,useCallback:function(t,e){return Nt().memoizedState=[t,e===void 0?null:e],t},useContext:at,useEffect:Oh,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Ao(4194308,4,zg.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Ao(4194308,4,t,e)},useInsertionEffect:function(t,e){return Ao(4,2,t,e)},useMemo:function(t,e){var n=Nt();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Nt();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=cE.bind(null,ie,t),[r.memoizedState,t]},useRef:function(t){var e=Nt();return t={current:t},e.memoizedState=t},useState:Ph,useDebugValue:Ed,useDeferredValue:function(t){return Nt().memoizedState=t},useTransition:function(){var t=Ph(!1),e=t[0];return t=uE.bind(null,t[1]),Nt().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=ie,i=Nt();if(ne){if(n===void 0)throw Error(C(407));n=n()}else{if(n=e(),we===null)throw Error(C(349));lr&30||Ag(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,Oh(Mg.bind(null,r,s,t),[t]),r.flags|=2048,Cs(9,Dg.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=Nt(),e=we.identifierPrefix;if(ne){var n=zt,r=jt;n=(r&~(1<<32-_t(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=ws++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=aE++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},hE={readContext:at,useCallback:Bg,useContext:at,useEffect:wd,useImperativeHandle:$g,useInsertionEffect:Ug,useLayoutEffect:jg,useMemo:Wg,useReducer:Va,useRef:Fg,useState:function(){return Va(Es)},useDebugValue:Ed,useDeferredValue:function(t){var e=ut();return Hg(e,de.memoizedState,t)},useTransition:function(){var t=Va(Es)[0],e=ut().memoizedState;return[t,e]},useMutableSource:Pg,useSyncExternalStore:Og,useId:Vg,unstable_isNewReconciler:!1},pE={readContext:at,useCallback:Bg,useContext:at,useEffect:wd,useImperativeHandle:$g,useInsertionEffect:Ug,useLayoutEffect:jg,useMemo:Wg,useReducer:Ga,useRef:Fg,useState:function(){return Ga(Es)},useDebugValue:Ed,useDeferredValue:function(t){var e=ut();return de===null?e.memoizedState=t:Hg(e,de.memoizedState,t)},useTransition:function(){var t=Ga(Es)[0],e=ut().memoizedState;return[t,e]},useMutableSource:Pg,useSyncExternalStore:Og,useId:Vg,unstable_isNewReconciler:!1};function ci(t,e){try{var n="",r=e;do n+=B0(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Ka(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Yu(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var mE=typeof WeakMap=="function"?WeakMap:Map;function Qg(t,e,n){n=Ht(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){al||(al=!0,oc=r),Yu(t,e)},n}function Yg(t,e,n){n=Ht(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Yu(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Yu(t,e),typeof r!="function"&&(Sn===null?Sn=new Set([this]):Sn.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Ah(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new mE;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=RE.bind(null,t,e,n),e.then(t,t))}function Dh(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Mh(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Ht(-1,1),e.tag=2,Cn(n,e,1))),n.lanes|=1),t)}var gE=Zt.ReactCurrentOwner,Be=!1;function Me(t,e,n,r){e.child=t===null?xg(e,null,n,r):ai(e,t.child,n,r)}function Lh(t,e,n,r,i){n=n.render;var s=e.ref;return Xr(e,i),r=vd(t,e,n,r,s,i),n=yd(),t!==null&&!Be?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Qt(t,e,i)):(ne&&n&&od(e),e.flags|=1,Me(t,e,r,i),e.child)}function bh(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Rd(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,Xg(t,e,s,r,i)):(t=bo(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:ps,n(o,r)&&t.ref===e.ref)return Qt(t,e,i)}return e.flags|=1,t=In(s,r),t.ref=e.ref,t.return=e,e.child=t}function Xg(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(ps(s,r)&&t.ref===e.ref)if(Be=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(Be=!0);else return e.lanes=t.lanes,Qt(t,e,i)}return Xu(t,e,n,r,i)}function Jg(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},J(Wr,qe),qe|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,J(Wr,qe),qe|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,J(Wr,qe),qe|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,J(Wr,qe),qe|=r;return Me(t,e,i,n),e.child}function Zg(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Xu(t,e,n,r,i){var s=Ge(n)?sr:Ae.current;return s=oi(e,s),Xr(e,i),n=vd(t,e,n,r,s,i),r=yd(),t!==null&&!Be?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Qt(t,e,i)):(ne&&r&&od(e),e.flags|=1,Me(t,e,n,i),e.child)}function Fh(t,e,n,r,i){if(Ge(n)){var s=!0;Jo(e)}else s=!1;if(Xr(e,i),e.stateNode===null)Do(t,e),Tg(e,n,r),Qu(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var a=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=at(u):(u=Ge(n)?sr:Ae.current,u=oi(e,u));var d=n.getDerivedStateFromProps,c=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";c||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||a!==u)&&xh(e,o,r,u),on=!1;var f=e.memoizedState;o.state=f,rl(e,r,o,i),a=e.memoizedState,l!==r||f!==a||Ve.current||on?(typeof d=="function"&&(qu(e,n,d,r),a=e.memoizedState),(l=on||Nh(e,n,l,r,f,a,u))?(c||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=a),o.props=r,o.state=a,o.context=u,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,kg(t,e),l=e.memoizedProps,u=e.type===e.elementType?l:ft(e.type,l),o.props=u,c=e.pendingProps,f=o.context,a=n.contextType,typeof a=="object"&&a!==null?a=at(a):(a=Ge(n)?sr:Ae.current,a=oi(e,a));var _=n.getDerivedStateFromProps;(d=typeof _=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==c||f!==a)&&xh(e,o,r,a),on=!1,f=e.memoizedState,o.state=f,rl(e,r,o,i);var v=e.memoizedState;l!==c||f!==v||Ve.current||on?(typeof _=="function"&&(qu(e,n,_,r),v=e.memoizedState),(u=on||Nh(e,n,u,r,f,v,a)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,v,a),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,v,a)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=v),o.props=r,o.state=v,o.context=a,r=u):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),r=!1)}return Ju(t,e,n,r,s,i)}function Ju(t,e,n,r,i,s){Zg(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&Ch(e,n,!1),Qt(t,e,s);r=e.stateNode,gE.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=ai(e,t.child,null,s),e.child=ai(e,null,l,s)):Me(t,e,l,s),e.memoizedState=r.state,i&&Ch(e,n,!0),e.child}function e_(t){var e=t.stateNode;e.pendingContext?Eh(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Eh(t,e.context,!1),pd(t,e.containerInfo)}function Uh(t,e,n,r,i){return li(),ad(i),e.flags|=256,Me(t,e,n,r),e.child}var Zu={dehydrated:null,treeContext:null,retryLane:0};function ec(t){return{baseLanes:t,cachePool:null,transitions:null}}function t_(t,e,n){var r=e.pendingProps,i=re.current,s=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(i&2)!==0),l?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),J(re,i&1),t===null)return Gu(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=ql(o,r,0,null),t=tr(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=ec(n),e.memoizedState=Zu,t):Cd(e,o));if(i=t.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return _E(t,e,o,r,l,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,l=i.sibling;var a={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=a,e.deletions=null):(r=In(i,a),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=In(l,s):(s=tr(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?ec(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Zu,r}return s=t.child,t=s.sibling,r=In(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Cd(t,e){return e=ql({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function ho(t,e,n,r){return r!==null&&ad(r),ai(e,t.child,null,n),t=Cd(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function _E(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Ka(Error(C(422))),ho(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=ql({mode:"visible",children:r.children},i,0,null),s=tr(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&ai(e,t.child,null,o),e.child.memoizedState=ec(o),e.memoizedState=Zu,s);if(!(e.mode&1))return ho(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(C(419)),r=Ka(s,r,void 0),ho(t,e,o,r)}if(l=(o&t.childLanes)!==0,Be||l){if(r=we,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,qt(t,i),vt(r,t,i,-1))}return xd(),r=Ka(Error(C(421))),ho(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=PE.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,Qe=En(i.nextSibling),Ye=e,ne=!0,pt=null,t!==null&&(rt[it++]=jt,rt[it++]=zt,rt[it++]=or,jt=t.id,zt=t.overflow,or=e),e=Cd(e,r.children),e.flags|=4096,e)}function jh(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Ku(t.return,e,n)}function qa(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function n_(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(Me(t,e,r.children,n),r=re.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&jh(t,n,e);else if(t.tag===19)jh(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(J(re,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&il(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),qa(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&il(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}qa(e,!0,n,null,s);break;case"together":qa(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Do(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Qt(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),ar|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(C(153));if(e.child!==null){for(t=e.child,n=In(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=In(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function vE(t,e,n){switch(e.tag){case 3:e_(e),li();break;case 5:Rg(e);break;case 1:Ge(e.type)&&Jo(e);break;case 4:pd(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;J(tl,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(J(re,re.current&1),e.flags|=128,null):n&e.child.childLanes?t_(t,e,n):(J(re,re.current&1),t=Qt(t,e,n),t!==null?t.sibling:null);J(re,re.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return n_(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),J(re,re.current),r)break;return null;case 22:case 23:return e.lanes=0,Jg(t,e,n)}return Qt(t,e,n)}var r_,tc,i_,s_;r_=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};tc=function(){};i_=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Xn(Pt.current);var s=null;switch(n){case"input":i=Su(t,i),r=Su(t,r),s=[];break;case"select":i=se({},i,{value:void 0}),r=se({},r,{value:void 0}),s=[];break;case"textarea":i=Tu(t,i),r=Tu(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Yo)}xu(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var l=i[u];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(ls.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var a=r[u];if(l=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&a!==l&&(a!=null||l!=null))if(u==="style")if(l){for(o in l)!l.hasOwnProperty(o)||a&&a.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in a)a.hasOwnProperty(o)&&l[o]!==a[o]&&(n||(n={}),n[o]=a[o])}else n||(s||(s=[]),s.push(u,n)),n=a;else u==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,l=l?l.__html:void 0,a!=null&&l!==a&&(s=s||[]).push(u,a)):u==="children"?typeof a!="string"&&typeof a!="number"||(s=s||[]).push(u,""+a):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(ls.hasOwnProperty(u)?(a!=null&&u==="onScroll"&&Z("scroll",t),s||l===a||(s=[])):(s=s||[]).push(u,a))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};s_=function(t,e,n,r){n!==r&&(e.flags|=4)};function bi(t,e){if(!ne)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Re(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function yE(t,e,n){var r=e.pendingProps;switch(ld(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Re(e),null;case 1:return Ge(e.type)&&Xo(),Re(e),null;case 3:return r=e.stateNode,ui(),ee(Ve),ee(Ae),gd(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(co(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,pt!==null&&(uc(pt),pt=null))),tc(t,e),Re(e),null;case 5:md(e);var i=Xn(ys.current);if(n=e.type,t!==null&&e.stateNode!=null)i_(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(C(166));return Re(e),null}if(t=Xn(Pt.current),co(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[xt]=e,r[_s]=s,t=(e.mode&1)!==0,n){case"dialog":Z("cancel",r),Z("close",r);break;case"iframe":case"object":case"embed":Z("load",r);break;case"video":case"audio":for(i=0;i<Vi.length;i++)Z(Vi[i],r);break;case"source":Z("error",r);break;case"img":case"image":case"link":Z("error",r),Z("load",r);break;case"details":Z("toggle",r);break;case"input":qf(r,s),Z("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},Z("invalid",r);break;case"textarea":Yf(r,s),Z("invalid",r)}xu(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&uo(r.textContent,l,t),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&uo(r.textContent,l,t),i=["children",""+l]):ls.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&Z("scroll",r)}switch(n){case"input":to(r),Qf(r,s,!0);break;case"textarea":to(r),Xf(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Yo)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Am(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[xt]=e,t[_s]=r,r_(t,e,!1,!1),e.stateNode=t;e:{switch(o=Ru(n,r),n){case"dialog":Z("cancel",t),Z("close",t),i=r;break;case"iframe":case"object":case"embed":Z("load",t),i=r;break;case"video":case"audio":for(i=0;i<Vi.length;i++)Z(Vi[i],t);i=r;break;case"source":Z("error",t),i=r;break;case"img":case"image":case"link":Z("error",t),Z("load",t),i=r;break;case"details":Z("toggle",t),i=r;break;case"input":qf(t,r),i=Su(t,r),Z("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=se({},r,{value:void 0}),Z("invalid",t);break;case"textarea":Yf(t,r),i=Tu(t,r),Z("invalid",t);break;default:i=r}xu(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var a=l[s];s==="style"?Lm(t,a):s==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&Dm(t,a)):s==="children"?typeof a=="string"?(n!=="textarea"||a!=="")&&as(t,a):typeof a=="number"&&as(t,""+a):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(ls.hasOwnProperty(s)?a!=null&&s==="onScroll"&&Z("scroll",t):a!=null&&Gc(t,s,a,o))}switch(n){case"input":to(t),Qf(t,r,!1);break;case"textarea":to(t),Xf(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Pn(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Kr(t,!!r.multiple,s,!1):r.defaultValue!=null&&Kr(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Yo)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Re(e),null;case 6:if(t&&e.stateNode!=null)s_(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(C(166));if(n=Xn(ys.current),Xn(Pt.current),co(e)){if(r=e.stateNode,n=e.memoizedProps,r[xt]=e,(s=r.nodeValue!==n)&&(t=Ye,t!==null))switch(t.tag){case 3:uo(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&uo(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[xt]=e,e.stateNode=r}return Re(e),null;case 13:if(ee(re),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ne&&Qe!==null&&e.mode&1&&!(e.flags&128))Cg(),li(),e.flags|=98560,s=!1;else if(s=co(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(C(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(C(317));s[xt]=e}else li(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Re(e),s=!1}else pt!==null&&(uc(pt),pt=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||re.current&1?fe===0&&(fe=3):xd())),e.updateQueue!==null&&(e.flags|=4),Re(e),null);case 4:return ui(),tc(t,e),t===null&&ms(e.stateNode.containerInfo),Re(e),null;case 10:return dd(e.type._context),Re(e),null;case 17:return Ge(e.type)&&Xo(),Re(e),null;case 19:if(ee(re),s=e.memoizedState,s===null)return Re(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)bi(s,!1);else{if(fe!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=il(t),o!==null){for(e.flags|=128,bi(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return J(re,re.current&1|2),e.child}t=t.sibling}s.tail!==null&&ue()>di&&(e.flags|=128,r=!0,bi(s,!1),e.lanes=4194304)}else{if(!r)if(t=il(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),bi(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!ne)return Re(e),null}else 2*ue()-s.renderingStartTime>di&&n!==1073741824&&(e.flags|=128,r=!0,bi(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=ue(),e.sibling=null,n=re.current,J(re,r?n&1|2:n&1),e):(Re(e),null);case 22:case 23:return Nd(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?qe&1073741824&&(Re(e),e.subtreeFlags&6&&(e.flags|=8192)):Re(e),null;case 24:return null;case 25:return null}throw Error(C(156,e.tag))}function wE(t,e){switch(ld(e),e.tag){case 1:return Ge(e.type)&&Xo(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return ui(),ee(Ve),ee(Ae),gd(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return md(e),null;case 13:if(ee(re),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(C(340));li()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ee(re),null;case 4:return ui(),null;case 10:return dd(e.type._context),null;case 22:case 23:return Nd(),null;case 24:return null;default:return null}}var po=!1,Oe=!1,EE=typeof WeakSet=="function"?WeakSet:Set,x=null;function Br(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){oe(t,e,r)}else n.current=null}function nc(t,e,n){try{n()}catch(r){oe(t,e,r)}}var zh=!1;function CE(t,e){if(ju=Ko,t=ug(),sd(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,l=-1,a=-1,u=0,d=0,c=t,f=null;t:for(;;){for(var _;c!==n||i!==0&&c.nodeType!==3||(l=o+i),c!==s||r!==0&&c.nodeType!==3||(a=o+r),c.nodeType===3&&(o+=c.nodeValue.length),(_=c.firstChild)!==null;)f=c,c=_;for(;;){if(c===t)break t;if(f===n&&++u===i&&(l=o),f===s&&++d===r&&(a=o),(_=c.nextSibling)!==null)break;c=f,f=c.parentNode}c=_}n=l===-1||a===-1?null:{start:l,end:a}}else n=null}n=n||{start:0,end:0}}else n=null;for(zu={focusedElem:t,selectionRange:n},Ko=!1,x=e;x!==null;)if(e=x,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,x=t;else for(;x!==null;){e=x;try{var v=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var w=v.memoizedProps,R=v.memoizedState,p=e.stateNode,h=p.getSnapshotBeforeUpdate(e.elementType===e.type?w:ft(e.type,w),R);p.__reactInternalSnapshotBeforeUpdate=h}break;case 3:var m=e.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(C(163))}}catch(E){oe(e,e.return,E)}if(t=e.sibling,t!==null){t.return=e.return,x=t;break}x=e.return}return v=zh,zh=!1,v}function Zi(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&nc(e,n,s)}i=i.next}while(i!==r)}}function Gl(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function rc(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function o_(t){var e=t.alternate;e!==null&&(t.alternate=null,o_(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[xt],delete e[_s],delete e[Wu],delete e[iE],delete e[sE])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function l_(t){return t.tag===5||t.tag===3||t.tag===4}function $h(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||l_(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function ic(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Yo));else if(r!==4&&(t=t.child,t!==null))for(ic(t,e,n),t=t.sibling;t!==null;)ic(t,e,n),t=t.sibling}function sc(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(sc(t,e,n),t=t.sibling;t!==null;)sc(t,e,n),t=t.sibling}var Ce=null,ht=!1;function nn(t,e,n){for(n=n.child;n!==null;)a_(t,e,n),n=n.sibling}function a_(t,e,n){if(Rt&&typeof Rt.onCommitFiberUnmount=="function")try{Rt.onCommitFiberUnmount(Ul,n)}catch{}switch(n.tag){case 5:Oe||Br(n,e);case 6:var r=Ce,i=ht;Ce=null,nn(t,e,n),Ce=r,ht=i,Ce!==null&&(ht?(t=Ce,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Ce.removeChild(n.stateNode));break;case 18:Ce!==null&&(ht?(t=Ce,n=n.stateNode,t.nodeType===8?$a(t.parentNode,n):t.nodeType===1&&$a(t,n),fs(t)):$a(Ce,n.stateNode));break;case 4:r=Ce,i=ht,Ce=n.stateNode.containerInfo,ht=!0,nn(t,e,n),Ce=r,ht=i;break;case 0:case 11:case 14:case 15:if(!Oe&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&nc(n,e,o),i=i.next}while(i!==r)}nn(t,e,n);break;case 1:if(!Oe&&(Br(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){oe(n,e,l)}nn(t,e,n);break;case 21:nn(t,e,n);break;case 22:n.mode&1?(Oe=(r=Oe)||n.memoizedState!==null,nn(t,e,n),Oe=r):nn(t,e,n);break;default:nn(t,e,n)}}function Bh(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new EE),e.forEach(function(r){var i=OE.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function dt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:Ce=l.stateNode,ht=!1;break e;case 3:Ce=l.stateNode.containerInfo,ht=!0;break e;case 4:Ce=l.stateNode.containerInfo,ht=!0;break e}l=l.return}if(Ce===null)throw Error(C(160));a_(s,o,i),Ce=null,ht=!1;var a=i.alternate;a!==null&&(a.return=null),i.return=null}catch(u){oe(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)u_(e,t),e=e.sibling}function u_(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(dt(e,t),Tt(t),r&4){try{Zi(3,t,t.return),Gl(3,t)}catch(w){oe(t,t.return,w)}try{Zi(5,t,t.return)}catch(w){oe(t,t.return,w)}}break;case 1:dt(e,t),Tt(t),r&512&&n!==null&&Br(n,n.return);break;case 5:if(dt(e,t),Tt(t),r&512&&n!==null&&Br(n,n.return),t.flags&32){var i=t.stateNode;try{as(i,"")}catch(w){oe(t,t.return,w)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,l=t.type,a=t.updateQueue;if(t.updateQueue=null,a!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&Pm(i,s),Ru(l,o);var u=Ru(l,s);for(o=0;o<a.length;o+=2){var d=a[o],c=a[o+1];d==="style"?Lm(i,c):d==="dangerouslySetInnerHTML"?Dm(i,c):d==="children"?as(i,c):Gc(i,d,c,u)}switch(l){case"input":ku(i,s);break;case"textarea":Om(i,s);break;case"select":var f=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var _=s.value;_!=null?Kr(i,!!s.multiple,_,!1):f!==!!s.multiple&&(s.defaultValue!=null?Kr(i,!!s.multiple,s.defaultValue,!0):Kr(i,!!s.multiple,s.multiple?[]:"",!1))}i[_s]=s}catch(w){oe(t,t.return,w)}}break;case 6:if(dt(e,t),Tt(t),r&4){if(t.stateNode===null)throw Error(C(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(w){oe(t,t.return,w)}}break;case 3:if(dt(e,t),Tt(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{fs(e.containerInfo)}catch(w){oe(t,t.return,w)}break;case 4:dt(e,t),Tt(t);break;case 13:dt(e,t),Tt(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Id=ue())),r&4&&Bh(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(Oe=(u=Oe)||d,dt(e,t),Oe=u):dt(e,t),Tt(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!d&&t.mode&1)for(x=t,d=t.child;d!==null;){for(c=x=d;x!==null;){switch(f=x,_=f.child,f.tag){case 0:case 11:case 14:case 15:Zi(4,f,f.return);break;case 1:Br(f,f.return);var v=f.stateNode;if(typeof v.componentWillUnmount=="function"){r=f,n=f.return;try{e=r,v.props=e.memoizedProps,v.state=e.memoizedState,v.componentWillUnmount()}catch(w){oe(r,n,w)}}break;case 5:Br(f,f.return);break;case 22:if(f.memoizedState!==null){Hh(c);continue}}_!==null?(_.return=f,x=_):Hh(c)}d=d.sibling}e:for(d=null,c=t;;){if(c.tag===5){if(d===null){d=c;try{i=c.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=c.stateNode,a=c.memoizedProps.style,o=a!=null&&a.hasOwnProperty("display")?a.display:null,l.style.display=Mm("display",o))}catch(w){oe(t,t.return,w)}}}else if(c.tag===6){if(d===null)try{c.stateNode.nodeValue=u?"":c.memoizedProps}catch(w){oe(t,t.return,w)}}else if((c.tag!==22&&c.tag!==23||c.memoizedState===null||c===t)&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===t)break e;for(;c.sibling===null;){if(c.return===null||c.return===t)break e;d===c&&(d=null),c=c.return}d===c&&(d=null),c.sibling.return=c.return,c=c.sibling}}break;case 19:dt(e,t),Tt(t),r&4&&Bh(t);break;case 21:break;default:dt(e,t),Tt(t)}}function Tt(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(l_(n)){var r=n;break e}n=n.return}throw Error(C(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(as(i,""),r.flags&=-33);var s=$h(t);sc(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=$h(t);ic(t,l,o);break;default:throw Error(C(161))}}catch(a){oe(t,t.return,a)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function SE(t,e,n){x=t,c_(t)}function c_(t,e,n){for(var r=(t.mode&1)!==0;x!==null;){var i=x,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||po;if(!o){var l=i.alternate,a=l!==null&&l.memoizedState!==null||Oe;l=po;var u=Oe;if(po=o,(Oe=a)&&!u)for(x=i;x!==null;)o=x,a=o.child,o.tag===22&&o.memoizedState!==null?Vh(i):a!==null?(a.return=o,x=a):Vh(i);for(;s!==null;)x=s,c_(s),s=s.sibling;x=i,po=l,Oe=u}Wh(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,x=s):Wh(t)}}function Wh(t){for(;x!==null;){var e=x;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Oe||Gl(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Oe)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:ft(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Th(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Th(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var a=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break;case"img":a.src&&(n.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var c=d.dehydrated;c!==null&&fs(c)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(C(163))}Oe||e.flags&512&&rc(e)}catch(f){oe(e,e.return,f)}}if(e===t){x=null;break}if(n=e.sibling,n!==null){n.return=e.return,x=n;break}x=e.return}}function Hh(t){for(;x!==null;){var e=x;if(e===t){x=null;break}var n=e.sibling;if(n!==null){n.return=e.return,x=n;break}x=e.return}}function Vh(t){for(;x!==null;){var e=x;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Gl(4,e)}catch(a){oe(e,n,a)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(a){oe(e,i,a)}}var s=e.return;try{rc(e)}catch(a){oe(e,s,a)}break;case 5:var o=e.return;try{rc(e)}catch(a){oe(e,o,a)}}}catch(a){oe(e,e.return,a)}if(e===t){x=null;break}var l=e.sibling;if(l!==null){l.return=e.return,x=l;break}x=e.return}}var kE=Math.ceil,ll=Zt.ReactCurrentDispatcher,Sd=Zt.ReactCurrentOwner,lt=Zt.ReactCurrentBatchConfig,z=0,we=null,ce=null,ke=0,qe=0,Wr=Ln(0),fe=0,Ss=null,ar=0,Kl=0,kd=0,es=null,$e=null,Id=0,di=1/0,bt=null,al=!1,oc=null,Sn=null,mo=!1,gn=null,ul=0,ts=0,lc=null,Mo=-1,Lo=0;function be(){return z&6?ue():Mo!==-1?Mo:Mo=ue()}function kn(t){return t.mode&1?z&2&&ke!==0?ke&-ke:lE.transition!==null?(Lo===0&&(Lo=Km()),Lo):(t=H,t!==0||(t=window.event,t=t===void 0?16:eg(t.type)),t):1}function vt(t,e,n,r){if(50<ts)throw ts=0,lc=null,Error(C(185));bs(t,n,r),(!(z&2)||t!==we)&&(t===we&&(!(z&2)&&(Kl|=n),fe===4&&un(t,ke)),Ke(t,r),n===1&&z===0&&!(e.mode&1)&&(di=ue()+500,Wl&&bn()))}function Ke(t,e){var n=t.callbackNode;lw(t,e);var r=Go(t,t===we?ke:0);if(r===0)n!==null&&eh(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&eh(n),e===1)t.tag===0?oE(Gh.bind(null,t)):yg(Gh.bind(null,t)),nE(function(){!(z&6)&&bn()}),n=null;else{switch(qm(r)){case 1:n=Xc;break;case 4:n=Vm;break;case 16:n=Vo;break;case 536870912:n=Gm;break;default:n=Vo}n=v_(n,d_.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function d_(t,e){if(Mo=-1,Lo=0,z&6)throw Error(C(327));var n=t.callbackNode;if(Jr()&&t.callbackNode!==n)return null;var r=Go(t,t===we?ke:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=cl(t,r);else{e=r;var i=z;z|=2;var s=h_();(we!==t||ke!==e)&&(bt=null,di=ue()+500,er(t,e));do try{NE();break}catch(l){f_(t,l)}while(1);cd(),ll.current=s,z=i,ce!==null?e=0:(we=null,ke=0,e=fe)}if(e!==0){if(e===2&&(i=Mu(t),i!==0&&(r=i,e=ac(t,i))),e===1)throw n=Ss,er(t,0),un(t,r),Ke(t,ue()),n;if(e===6)un(t,r);else{if(i=t.current.alternate,!(r&30)&&!IE(i)&&(e=cl(t,r),e===2&&(s=Mu(t),s!==0&&(r=s,e=ac(t,s))),e===1))throw n=Ss,er(t,0),un(t,r),Ke(t,ue()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(C(345));case 2:Wn(t,$e,bt);break;case 3:if(un(t,r),(r&130023424)===r&&(e=Id+500-ue(),10<e)){if(Go(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){be(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Bu(Wn.bind(null,t,$e,bt),e);break}Wn(t,$e,bt);break;case 4:if(un(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-_t(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=ue()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*kE(r/1960))-r,10<r){t.timeoutHandle=Bu(Wn.bind(null,t,$e,bt),r);break}Wn(t,$e,bt);break;case 5:Wn(t,$e,bt);break;default:throw Error(C(329))}}}return Ke(t,ue()),t.callbackNode===n?d_.bind(null,t):null}function ac(t,e){var n=es;return t.current.memoizedState.isDehydrated&&(er(t,e).flags|=256),t=cl(t,e),t!==2&&(e=$e,$e=n,e!==null&&uc(e)),t}function uc(t){$e===null?$e=t:$e.push.apply($e,t)}function IE(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Et(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function un(t,e){for(e&=~kd,e&=~Kl,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-_t(e),r=1<<n;t[n]=-1,e&=~r}}function Gh(t){if(z&6)throw Error(C(327));Jr();var e=Go(t,0);if(!(e&1))return Ke(t,ue()),null;var n=cl(t,e);if(t.tag!==0&&n===2){var r=Mu(t);r!==0&&(e=r,n=ac(t,r))}if(n===1)throw n=Ss,er(t,0),un(t,e),Ke(t,ue()),n;if(n===6)throw Error(C(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Wn(t,$e,bt),Ke(t,ue()),null}function Td(t,e){var n=z;z|=1;try{return t(e)}finally{z=n,z===0&&(di=ue()+500,Wl&&bn())}}function ur(t){gn!==null&&gn.tag===0&&!(z&6)&&Jr();var e=z;z|=1;var n=lt.transition,r=H;try{if(lt.transition=null,H=1,t)return t()}finally{H=r,lt.transition=n,z=e,!(z&6)&&bn()}}function Nd(){qe=Wr.current,ee(Wr)}function er(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,tE(n)),ce!==null)for(n=ce.return;n!==null;){var r=n;switch(ld(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Xo();break;case 3:ui(),ee(Ve),ee(Ae),gd();break;case 5:md(r);break;case 4:ui();break;case 13:ee(re);break;case 19:ee(re);break;case 10:dd(r.type._context);break;case 22:case 23:Nd()}n=n.return}if(we=t,ce=t=In(t.current,null),ke=qe=e,fe=0,Ss=null,kd=Kl=ar=0,$e=es=null,Yn!==null){for(e=0;e<Yn.length;e++)if(n=Yn[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Yn=null}return t}function f_(t,e){do{var n=ce;try{if(cd(),Oo.current=ol,sl){for(var r=ie.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}sl=!1}if(lr=0,ge=de=ie=null,Ji=!1,ws=0,Sd.current=null,n===null||n.return===null){fe=1,Ss=e,ce=null;break}e:{var s=t,o=n.return,l=n,a=e;if(e=ke,l.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var u=a,d=l,c=d.tag;if(!(d.mode&1)&&(c===0||c===11||c===15)){var f=d.alternate;f?(d.updateQueue=f.updateQueue,d.memoizedState=f.memoizedState,d.lanes=f.lanes):(d.updateQueue=null,d.memoizedState=null)}var _=Dh(o);if(_!==null){_.flags&=-257,Mh(_,o,l,s,e),_.mode&1&&Ah(s,u,e),e=_,a=u;var v=e.updateQueue;if(v===null){var w=new Set;w.add(a),e.updateQueue=w}else v.add(a);break e}else{if(!(e&1)){Ah(s,u,e),xd();break e}a=Error(C(426))}}else if(ne&&l.mode&1){var R=Dh(o);if(R!==null){!(R.flags&65536)&&(R.flags|=256),Mh(R,o,l,s,e),ad(ci(a,l));break e}}s=a=ci(a,l),fe!==4&&(fe=2),es===null?es=[s]:es.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var p=Qg(s,a,e);Ih(s,p);break e;case 1:l=a;var h=s.type,m=s.stateNode;if(!(s.flags&128)&&(typeof h.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(Sn===null||!Sn.has(m)))){s.flags|=65536,e&=-e,s.lanes|=e;var E=Yg(s,l,e);Ih(s,E);break e}}s=s.return}while(s!==null)}m_(n)}catch(I){e=I,ce===n&&n!==null&&(ce=n=n.return);continue}break}while(1)}function h_(){var t=ll.current;return ll.current=ol,t===null?ol:t}function xd(){(fe===0||fe===3||fe===2)&&(fe=4),we===null||!(ar&268435455)&&!(Kl&268435455)||un(we,ke)}function cl(t,e){var n=z;z|=2;var r=h_();(we!==t||ke!==e)&&(bt=null,er(t,e));do try{TE();break}catch(i){f_(t,i)}while(1);if(cd(),z=n,ll.current=r,ce!==null)throw Error(C(261));return we=null,ke=0,fe}function TE(){for(;ce!==null;)p_(ce)}function NE(){for(;ce!==null&&!J0();)p_(ce)}function p_(t){var e=__(t.alternate,t,qe);t.memoizedProps=t.pendingProps,e===null?m_(t):ce=e,Sd.current=null}function m_(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=wE(n,e),n!==null){n.flags&=32767,ce=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{fe=6,ce=null;return}}else if(n=yE(n,e,qe),n!==null){ce=n;return}if(e=e.sibling,e!==null){ce=e;return}ce=e=t}while(e!==null);fe===0&&(fe=5)}function Wn(t,e,n){var r=H,i=lt.transition;try{lt.transition=null,H=1,xE(t,e,n,r)}finally{lt.transition=i,H=r}return null}function xE(t,e,n,r){do Jr();while(gn!==null);if(z&6)throw Error(C(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(C(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(aw(t,s),t===we&&(ce=we=null,ke=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||mo||(mo=!0,v_(Vo,function(){return Jr(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=lt.transition,lt.transition=null;var o=H;H=1;var l=z;z|=4,Sd.current=null,CE(t,n),u_(n,t),qw(zu),Ko=!!ju,zu=ju=null,t.current=n,SE(n),Z0(),z=l,H=o,lt.transition=s}else t.current=n;if(mo&&(mo=!1,gn=t,ul=i),s=t.pendingLanes,s===0&&(Sn=null),nw(n.stateNode),Ke(t,ue()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(al)throw al=!1,t=oc,oc=null,t;return ul&1&&t.tag!==0&&Jr(),s=t.pendingLanes,s&1?t===lc?ts++:(ts=0,lc=t):ts=0,bn(),null}function Jr(){if(gn!==null){var t=qm(ul),e=lt.transition,n=H;try{if(lt.transition=null,H=16>t?16:t,gn===null)var r=!1;else{if(t=gn,gn=null,ul=0,z&6)throw Error(C(331));var i=z;for(z|=4,x=t.current;x!==null;){var s=x,o=s.child;if(x.flags&16){var l=s.deletions;if(l!==null){for(var a=0;a<l.length;a++){var u=l[a];for(x=u;x!==null;){var d=x;switch(d.tag){case 0:case 11:case 15:Zi(8,d,s)}var c=d.child;if(c!==null)c.return=d,x=c;else for(;x!==null;){d=x;var f=d.sibling,_=d.return;if(o_(d),d===u){x=null;break}if(f!==null){f.return=_,x=f;break}x=_}}}var v=s.alternate;if(v!==null){var w=v.child;if(w!==null){v.child=null;do{var R=w.sibling;w.sibling=null,w=R}while(w!==null)}}x=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,x=o;else e:for(;x!==null;){if(s=x,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Zi(9,s,s.return)}var p=s.sibling;if(p!==null){p.return=s.return,x=p;break e}x=s.return}}var h=t.current;for(x=h;x!==null;){o=x;var m=o.child;if(o.subtreeFlags&2064&&m!==null)m.return=o,x=m;else e:for(o=h;x!==null;){if(l=x,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Gl(9,l)}}catch(I){oe(l,l.return,I)}if(l===o){x=null;break e}var E=l.sibling;if(E!==null){E.return=l.return,x=E;break e}x=l.return}}if(z=i,bn(),Rt&&typeof Rt.onPostCommitFiberRoot=="function")try{Rt.onPostCommitFiberRoot(Ul,t)}catch{}r=!0}return r}finally{H=n,lt.transition=e}}return!1}function Kh(t,e,n){e=ci(n,e),e=Qg(t,e,1),t=Cn(t,e,1),e=be(),t!==null&&(bs(t,1,e),Ke(t,e))}function oe(t,e,n){if(t.tag===3)Kh(t,t,n);else for(;e!==null;){if(e.tag===3){Kh(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Sn===null||!Sn.has(r))){t=ci(n,t),t=Yg(e,t,1),e=Cn(e,t,1),t=be(),e!==null&&(bs(e,1,t),Ke(e,t));break}}e=e.return}}function RE(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=be(),t.pingedLanes|=t.suspendedLanes&n,we===t&&(ke&n)===n&&(fe===4||fe===3&&(ke&130023424)===ke&&500>ue()-Id?er(t,0):kd|=n),Ke(t,e)}function g_(t,e){e===0&&(t.mode&1?(e=io,io<<=1,!(io&130023424)&&(io=4194304)):e=1);var n=be();t=qt(t,e),t!==null&&(bs(t,e,n),Ke(t,n))}function PE(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),g_(t,n)}function OE(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(C(314))}r!==null&&r.delete(e),g_(t,n)}var __;__=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Ve.current)Be=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Be=!1,vE(t,e,n);Be=!!(t.flags&131072)}else Be=!1,ne&&e.flags&1048576&&wg(e,el,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Do(t,e),t=e.pendingProps;var i=oi(e,Ae.current);Xr(e,n),i=vd(null,e,r,t,i,n);var s=yd();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Ge(r)?(s=!0,Jo(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,hd(e),i.updater=Hl,e.stateNode=i,i._reactInternals=e,Qu(e,r,t,n),e=Ju(null,e,r,!0,s,n)):(e.tag=0,ne&&s&&od(e),Me(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Do(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=DE(r),t=ft(r,t),i){case 0:e=Xu(null,e,r,t,n);break e;case 1:e=Fh(null,e,r,t,n);break e;case 11:e=Lh(null,e,r,t,n);break e;case 14:e=bh(null,e,r,ft(r.type,t),n);break e}throw Error(C(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:ft(r,i),Xu(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:ft(r,i),Fh(t,e,r,i,n);case 3:e:{if(e_(e),t===null)throw Error(C(387));r=e.pendingProps,s=e.memoizedState,i=s.element,kg(t,e),rl(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=ci(Error(C(423)),e),e=Uh(t,e,r,n,i);break e}else if(r!==i){i=ci(Error(C(424)),e),e=Uh(t,e,r,n,i);break e}else for(Qe=En(e.stateNode.containerInfo.firstChild),Ye=e,ne=!0,pt=null,n=xg(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(li(),r===i){e=Qt(t,e,n);break e}Me(t,e,r,n)}e=e.child}return e;case 5:return Rg(e),t===null&&Gu(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,$u(r,i)?o=null:s!==null&&$u(r,s)&&(e.flags|=32),Zg(t,e),Me(t,e,o,n),e.child;case 6:return t===null&&Gu(e),null;case 13:return t_(t,e,n);case 4:return pd(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=ai(e,null,r,n):Me(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:ft(r,i),Lh(t,e,r,i,n);case 7:return Me(t,e,e.pendingProps,n),e.child;case 8:return Me(t,e,e.pendingProps.children,n),e.child;case 12:return Me(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,J(tl,r._currentValue),r._currentValue=o,s!==null)if(Et(s.value,o)){if(s.children===i.children&&!Ve.current){e=Qt(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var a=l.firstContext;a!==null;){if(a.context===r){if(s.tag===1){a=Ht(-1,n&-n),a.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?a.next=a:(a.next=d.next,d.next=a),u.pending=a}}s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),Ku(s.return,n,e),l.lanes|=n;break}a=a.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(C(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Ku(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Me(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Xr(e,n),i=at(i),r=r(i),e.flags|=1,Me(t,e,r,n),e.child;case 14:return r=e.type,i=ft(r,e.pendingProps),i=ft(r.type,i),bh(t,e,r,i,n);case 15:return Xg(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:ft(r,i),Do(t,e),e.tag=1,Ge(r)?(t=!0,Jo(e)):t=!1,Xr(e,n),Tg(e,r,i),Qu(e,r,i,n),Ju(null,e,r,!0,t,n);case 19:return n_(t,e,n);case 22:return Jg(t,e,n)}throw Error(C(156,e.tag))};function v_(t,e){return Hm(t,e)}function AE(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function st(t,e,n,r){return new AE(t,e,n,r)}function Rd(t){return t=t.prototype,!(!t||!t.isReactComponent)}function DE(t){if(typeof t=="function")return Rd(t)?1:0;if(t!=null){if(t=t.$$typeof,t===qc)return 11;if(t===Qc)return 14}return 2}function In(t,e){var n=t.alternate;return n===null?(n=st(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function bo(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Rd(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Dr:return tr(n.children,i,s,e);case Kc:o=8,i|=8;break;case yu:return t=st(12,n,e,i|2),t.elementType=yu,t.lanes=s,t;case wu:return t=st(13,n,e,i),t.elementType=wu,t.lanes=s,t;case Eu:return t=st(19,n,e,i),t.elementType=Eu,t.lanes=s,t;case Nm:return ql(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Im:o=10;break e;case Tm:o=9;break e;case qc:o=11;break e;case Qc:o=14;break e;case sn:o=16,r=null;break e}throw Error(C(130,t==null?t:typeof t,""))}return e=st(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function tr(t,e,n,r){return t=st(7,t,r,e),t.lanes=n,t}function ql(t,e,n,r){return t=st(22,t,r,e),t.elementType=Nm,t.lanes=n,t.stateNode={isHidden:!1},t}function Qa(t,e,n){return t=st(6,t,null,e),t.lanes=n,t}function Ya(t,e,n){return e=st(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function ME(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Pa(0),this.expirationTimes=Pa(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Pa(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Pd(t,e,n,r,i,s,o,l,a){return t=new ME(t,e,n,l,a),e===1?(e=1,s===!0&&(e|=8)):e=0,s=st(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},hd(s),t}function LE(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ar,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function y_(t){if(!t)return On;t=t._reactInternals;e:{if(wr(t)!==t||t.tag!==1)throw Error(C(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Ge(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(C(171))}if(t.tag===1){var n=t.type;if(Ge(n))return vg(t,n,e)}return e}function w_(t,e,n,r,i,s,o,l,a){return t=Pd(n,r,!0,t,i,s,o,l,a),t.context=y_(null),n=t.current,r=be(),i=kn(n),s=Ht(r,i),s.callback=e??null,Cn(n,s,i),t.current.lanes=i,bs(t,i,r),Ke(t,r),t}function Ql(t,e,n,r){var i=e.current,s=be(),o=kn(i);return n=y_(n),e.context===null?e.context=n:e.pendingContext=n,e=Ht(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Cn(i,e,o),t!==null&&(vt(t,i,o,s),Po(t,i,o)),o}function dl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function qh(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Od(t,e){qh(t,e),(t=t.alternate)&&qh(t,e)}function bE(){return null}var E_=typeof reportError=="function"?reportError:function(t){console.error(t)};function Ad(t){this._internalRoot=t}Yl.prototype.render=Ad.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(C(409));Ql(t,e,null,null)};Yl.prototype.unmount=Ad.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;ur(function(){Ql(null,t,null,null)}),e[Kt]=null}};function Yl(t){this._internalRoot=t}Yl.prototype.unstable_scheduleHydration=function(t){if(t){var e=Xm();t={blockedOn:null,target:t,priority:e};for(var n=0;n<an.length&&e!==0&&e<an[n].priority;n++);an.splice(n,0,t),n===0&&Zm(t)}};function Dd(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Xl(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Qh(){}function FE(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=dl(o);s.call(u)}}var o=w_(e,r,t,0,null,!1,!1,"",Qh);return t._reactRootContainer=o,t[Kt]=o.current,ms(t.nodeType===8?t.parentNode:t),ur(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var u=dl(a);l.call(u)}}var a=Pd(t,0,!1,null,null,!1,!1,"",Qh);return t._reactRootContainer=a,t[Kt]=a.current,ms(t.nodeType===8?t.parentNode:t),ur(function(){Ql(e,a,n,r)}),a}function Jl(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var l=i;i=function(){var a=dl(o);l.call(a)}}Ql(e,o,t,i)}else o=FE(n,e,t,i,r);return dl(o)}Qm=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Hi(e.pendingLanes);n!==0&&(Jc(e,n|1),Ke(e,ue()),!(z&6)&&(di=ue()+500,bn()))}break;case 13:ur(function(){var r=qt(t,1);if(r!==null){var i=be();vt(r,t,1,i)}}),Od(t,1)}};Zc=function(t){if(t.tag===13){var e=qt(t,134217728);if(e!==null){var n=be();vt(e,t,134217728,n)}Od(t,134217728)}};Ym=function(t){if(t.tag===13){var e=kn(t),n=qt(t,e);if(n!==null){var r=be();vt(n,t,e,r)}Od(t,e)}};Xm=function(){return H};Jm=function(t,e){var n=H;try{return H=t,e()}finally{H=n}};Ou=function(t,e,n){switch(e){case"input":if(ku(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Bl(r);if(!i)throw Error(C(90));Rm(r),ku(r,i)}}}break;case"textarea":Om(t,n);break;case"select":e=n.value,e!=null&&Kr(t,!!n.multiple,e,!1)}};Um=Td;jm=ur;var UE={usingClientEntryPoint:!1,Events:[Us,Fr,Bl,bm,Fm,Td]},Fi={findFiberByHostInstance:Qn,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},jE={bundleType:Fi.bundleType,version:Fi.version,rendererPackageName:Fi.rendererPackageName,rendererConfig:Fi.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Zt.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Bm(t),t===null?null:t.stateNode},findFiberByHostInstance:Fi.findFiberByHostInstance||bE,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var go=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!go.isDisabled&&go.supportsFiber)try{Ul=go.inject(jE),Rt=go}catch{}}Je.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=UE;Je.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Dd(e))throw Error(C(200));return LE(t,e,null,n)};Je.createRoot=function(t,e){if(!Dd(t))throw Error(C(299));var n=!1,r="",i=E_;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Pd(t,1,!1,null,null,n,!1,r,i),t[Kt]=e.current,ms(t.nodeType===8?t.parentNode:t),new Ad(e)};Je.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(C(188)):(t=Object.keys(t).join(","),Error(C(268,t)));return t=Bm(e),t=t===null?null:t.stateNode,t};Je.flushSync=function(t){return ur(t)};Je.hydrate=function(t,e,n){if(!Xl(e))throw Error(C(200));return Jl(null,t,e,!0,n)};Je.hydrateRoot=function(t,e,n){if(!Dd(t))throw Error(C(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=E_;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=w_(e,null,t,1,n??null,i,!1,s,o),t[Kt]=e.current,ms(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Yl(e)};Je.render=function(t,e,n){if(!Xl(e))throw Error(C(200));return Jl(null,t,e,!1,n)};Je.unmountComponentAtNode=function(t){if(!Xl(t))throw Error(C(40));return t._reactRootContainer?(ur(function(){Jl(null,null,t,!1,function(){t._reactRootContainer=null,t[Kt]=null})}),!0):!1};Je.unstable_batchedUpdates=Td;Je.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Xl(n))throw Error(C(200));if(t==null||t._reactInternals===void 0)throw Error(C(38));return Jl(t,e,n,!1,r)};Je.version="18.2.0-next-9e3b772b8-20220608";(function(t){function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(n){console.error(n)}}e(),t.exports=Je})(b0);const Hr=hm($o);var Yh=$o;gu.createRoot=Yh.createRoot,gu.hydrateRoot=Yh.hydrateRoot;/**
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
 */const C_={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const S=function(t,e){if(!t)throw Si(e)},Si=function(t){return new Error("Firebase Database ("+C_.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
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
 */const S_=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},zE=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],l=t[n++],a=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(a>>10)),e[r++]=String.fromCharCode(56320+(a&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Md={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,l=o?t[i+1]:0,a=i+2<t.length,u=a?t[i+2]:0,d=s>>2,c=(s&3)<<4|l>>4;let f=(l&15)<<2|u>>6,_=u&63;a||(_=64,o||(f=64)),r.push(n[d],n[c],n[f],n[_])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(S_(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):zE(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const c=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||l==null||u==null||c==null)throw Error();const f=s<<2|l>>4;if(r.push(f),u!==64){const _=l<<4&240|u>>2;if(r.push(_),c!==64){const v=u<<6&192|c;r.push(v)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},k_=function(t){const e=S_(t);return Md.encodeByteArray(e,!0)},fl=function(t){return k_(t).replace(/\./g,"")},hl=function(t){try{return Md.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function $E(t){return I_(void 0,t)}function I_(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!BE(n)||(t[n]=I_(t[n],e[n]));return t}function BE(t){return t!=="__proto__"}/**
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
 */function De(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Ld(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(De())}function WE(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function T_(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function HE(){const t=De();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function N_(){return C_.NODE_ADMIN===!0}function VE(){try{return typeof indexedDB=="object"}catch{return!1}}function GE(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}function KE(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const qE=()=>KE().__FIREBASE_DEFAULTS__,QE=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},YE=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&hl(t[1]);return e&&JSON.parse(e)},bd=()=>{try{return qE()||QE()||YE()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},x_=t=>{var e,n;return(n=(e=bd())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},XE=t=>{const e=x_(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},JE=()=>{var t;return(t=bd())===null||t===void 0?void 0:t.config},R_=t=>{var e;return(e=bd())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class zs{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function ZE(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),l="";return[fl(JSON.stringify(n)),fl(JSON.stringify(o)),l].join(".")}/**
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
 */const eC="FirebaseError";class Fn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=eC,Object.setPrototypeOf(this,Fn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,$s.prototype.create)}}class $s{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?tC(s,r):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new Fn(i,l,r)}}function tC(t,e){return t.replace(nC,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const nC=/\{\$([^}]+)}/g;/**
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
 */function ks(t){return JSON.parse(t)}function ye(t){return JSON.stringify(t)}/**
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
 */const P_=function(t){let e={},n={},r={},i="";try{const s=t.split(".");e=ks(hl(s[0])||""),n=ks(hl(s[1])||""),i=s[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:i}},rC=function(t){const e=P_(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},iC=function(t){const e=P_(t).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function Mt(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function fi(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function cc(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function pl(t,e,n){const r={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(r[i]=e.call(n,t[i],i,t));return r}function ml(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Xh(s)&&Xh(o)){if(!ml(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Xh(t){return t!==null&&typeof t=="object"}/**
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
 */function ki(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}/**
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
 */class sC{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let c=0;c<16;c++)r[c]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let c=0;c<16;c++)r[c]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let c=16;c<80;c++){const f=r[c-3]^r[c-8]^r[c-14]^r[c-16];r[c]=(f<<1|f>>>31)&4294967295}let i=this.chain_[0],s=this.chain_[1],o=this.chain_[2],l=this.chain_[3],a=this.chain_[4],u,d;for(let c=0;c<80;c++){c<40?c<20?(u=l^s&(o^l),d=1518500249):(u=s^o^l,d=1859775393):c<60?(u=s&o|l&(s|o),d=2400959708):(u=s^o^l,d=3395469782);const f=(i<<5|i>>>27)+u+a+d+r[c]&4294967295;a=l,l=o,o=(s<<30|s>>>2)&4294967295,s=i,i=f}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+a&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let i=0;const s=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=r;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(s[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}else for(;i<n;)if(s[o]=e[i],++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let s=24;s>=0;s-=8)e[r]=this.chain_[i]>>s&255,++r;return e}}function oC(t,e){const n=new lC(t,e);return n.subscribe.bind(n)}class lC{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");aC(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Xa),i.error===void 0&&(i.error=Xa),i.complete===void 0&&(i.complete=Xa);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function aC(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Xa(){}function Zl(t,e){return`${t} failed: ${e} argument `}/**
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
 */const uC=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);if(i>=55296&&i<=56319){const s=i-55296;r++,S(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;i=65536+(s<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},ea=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function et(t){return t&&t._delegate?t._delegate:t}class cr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Hn="[DEFAULT]";/**
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
 */let cC=class{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new zs;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(fC(e))try{this.getOrInitializeService({instanceIdentifier:Hn})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Hn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Hn){return this.instances.has(e)}getOptions(e=Hn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:dC(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Hn){return this.component?this.component.multipleInstances?e:Hn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}};function dC(t){return t===Hn?void 0:t}function fC(t){return t.instantiationMode==="EAGER"}/**
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
 */class hC{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new cC(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Q;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Q||(Q={}));const pC={debug:Q.DEBUG,verbose:Q.VERBOSE,info:Q.INFO,warn:Q.WARN,error:Q.ERROR,silent:Q.SILENT},mC=Q.INFO,gC={[Q.DEBUG]:"log",[Q.VERBOSE]:"log",[Q.INFO]:"info",[Q.WARN]:"warn",[Q.ERROR]:"error"},_C=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=gC[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Fd{constructor(e){this.name=e,this._logLevel=mC,this._logHandler=_C,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Q))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?pC[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Q.DEBUG,...e),this._logHandler(this,Q.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Q.VERBOSE,...e),this._logHandler(this,Q.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Q.INFO,...e),this._logHandler(this,Q.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Q.WARN,...e),this._logHandler(this,Q.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Q.ERROR,...e),this._logHandler(this,Q.ERROR,...e)}}const vC=(t,e)=>e.some(n=>t instanceof n);let Jh,Zh;function yC(){return Jh||(Jh=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function wC(){return Zh||(Zh=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const O_=new WeakMap,dc=new WeakMap,A_=new WeakMap,Ja=new WeakMap,Ud=new WeakMap;function EC(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Tn(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&O_.set(n,t)}).catch(()=>{}),Ud.set(e,t),e}function CC(t){if(dc.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});dc.set(t,e)}let fc={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return dc.get(t);if(e==="objectStoreNames")return t.objectStoreNames||A_.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Tn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function SC(t){fc=t(fc)}function kC(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Za(this),e,...n);return A_.set(r,e.sort?e.sort():[e]),Tn(r)}:wC().includes(t)?function(...e){return t.apply(Za(this),e),Tn(O_.get(this))}:function(...e){return Tn(t.apply(Za(this),e))}}function IC(t){return typeof t=="function"?kC(t):(t instanceof IDBTransaction&&CC(t),vC(t,yC())?new Proxy(t,fc):t)}function Tn(t){if(t instanceof IDBRequest)return EC(t);if(Ja.has(t))return Ja.get(t);const e=IC(t);return e!==t&&(Ja.set(t,e),Ud.set(e,t)),e}const Za=t=>Ud.get(t);function TC(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),l=Tn(o);return r&&o.addEventListener("upgradeneeded",a=>{r(Tn(o.result),a.oldVersion,a.newVersion,Tn(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),l.then(a=>{s&&a.addEventListener("close",()=>s()),i&&a.addEventListener("versionchange",()=>i())}).catch(()=>{}),l}const NC=["get","getKey","getAll","getAllKeys","count"],xC=["put","add","delete","clear"],eu=new Map;function ep(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(eu.get(e))return eu.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=xC.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||NC.includes(n)))return;const s=async function(o,...l){const a=this.transaction(o,i?"readwrite":"readonly");let u=a.store;return r&&(u=u.index(l.shift())),(await Promise.all([u[n](...l),i&&a.done]))[0]};return eu.set(e,s),s}SC(t=>({...t,get:(e,n,r)=>ep(e,n)||t.get(e,n,r),has:(e,n)=>!!ep(e,n)||t.has(e,n)}));/**
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
 */class RC{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(PC(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function PC(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const hc="@firebase/app",tp="0.9.0";/**
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
 */const dr=new Fd("@firebase/app"),OC="@firebase/app-compat",AC="@firebase/analytics-compat",DC="@firebase/analytics",MC="@firebase/app-check-compat",LC="@firebase/app-check",bC="@firebase/auth",FC="@firebase/auth-compat",UC="@firebase/database",jC="@firebase/database-compat",zC="@firebase/functions",$C="@firebase/functions-compat",BC="@firebase/installations",WC="@firebase/installations-compat",HC="@firebase/messaging",VC="@firebase/messaging-compat",GC="@firebase/performance",KC="@firebase/performance-compat",qC="@firebase/remote-config",QC="@firebase/remote-config-compat",YC="@firebase/storage",XC="@firebase/storage-compat",JC="@firebase/firestore",ZC="@firebase/firestore-compat",eS="firebase",tS="9.15.0";/**
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
 */const pc="[DEFAULT]",nS={[hc]:"fire-core",[OC]:"fire-core-compat",[DC]:"fire-analytics",[AC]:"fire-analytics-compat",[LC]:"fire-app-check",[MC]:"fire-app-check-compat",[bC]:"fire-auth",[FC]:"fire-auth-compat",[UC]:"fire-rtdb",[jC]:"fire-rtdb-compat",[zC]:"fire-fn",[$C]:"fire-fn-compat",[BC]:"fire-iid",[WC]:"fire-iid-compat",[HC]:"fire-fcm",[VC]:"fire-fcm-compat",[GC]:"fire-perf",[KC]:"fire-perf-compat",[qC]:"fire-rc",[QC]:"fire-rc-compat",[YC]:"fire-gcs",[XC]:"fire-gcs-compat",[JC]:"fire-fst",[ZC]:"fire-fst-compat","fire-js":"fire-js",[eS]:"fire-js-all"};/**
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
 */const gl=new Map,mc=new Map;function rS(t,e){try{t.container.addComponent(e)}catch(n){dr.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function hi(t){const e=t.name;if(mc.has(e))return dr.debug(`There were multiple attempts to register component ${e}.`),!1;mc.set(e,t);for(const n of gl.values())rS(n,t);return!0}function jd(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const iS={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Nn=new $s("app","Firebase",iS);/**
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
 */class sS{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new cr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Nn.create("app-deleted",{appName:this._name})}}/**
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
 */const Bs=tS;function D_(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:pc,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Nn.create("bad-app-name",{appName:String(i)});if(n||(n=JE()),!n)throw Nn.create("no-options");const s=gl.get(i);if(s){if(ml(n,s.options)&&ml(r,s.config))return s;throw Nn.create("duplicate-app",{appName:i})}const o=new hC(i);for(const a of mc.values())o.addComponent(a);const l=new sS(n,r,o);return gl.set(i,l),l}function M_(t=pc){const e=gl.get(t);if(!e&&t===pc)return D_();if(!e)throw Nn.create("no-app",{appName:t});return e}function xn(t,e,n){var r;let i=(r=nS[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const l=[`Unable to register library "${i}" with version "${e}":`];s&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),dr.warn(l.join(" "));return}hi(new cr(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const oS="firebase-heartbeat-database",lS=1,Is="firebase-heartbeat-store";let tu=null;function L_(){return tu||(tu=TC(oS,lS,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Is)}}}).catch(t=>{throw Nn.create("idb-open",{originalErrorMessage:t.message})})),tu}async function aS(t){try{return(await L_()).transaction(Is).objectStore(Is).get(b_(t))}catch(e){if(e instanceof Fn)dr.warn(e.message);else{const n=Nn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});dr.warn(n.message)}}}async function np(t,e){try{const r=(await L_()).transaction(Is,"readwrite");return await r.objectStore(Is).put(e,b_(t)),r.done}catch(n){if(n instanceof Fn)dr.warn(n.message);else{const r=Nn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});dr.warn(r.message)}}}function b_(t){return`${t.name}!${t.options.appId}`}/**
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
 */const uS=1024,cS=30*24*60*60*1e3;class dS{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new hS(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=rp();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=cS}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=rp(),{heartbeatsToSend:n,unsentEntries:r}=fS(this._heartbeatsCache.heartbeats),i=fl(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function rp(){return new Date().toISOString().substring(0,10)}function fS(t,e=uS){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),ip(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),ip(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class hS{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return VE()?GE().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await aS(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return np(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return np(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function ip(t){return fl(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function pS(t){hi(new cr("platform-logger",e=>new RC(e),"PRIVATE")),hi(new cr("heartbeat",e=>new dS(e),"PRIVATE")),xn(hc,tp,t),xn(hc,tp,"esm2017"),xn("fire-js","")}pS("");var mS="firebase",gS="9.15.0";/**
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
 */xn(mS,gS,"app");function zd(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function F_(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const _S=F_,U_=new $s("auth","Firebase",F_());/**
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
 */const sp=new Fd("@firebase/auth");function Fo(t,...e){sp.logLevel<=Q.ERROR&&sp.error(`Auth (${Bs}): ${t}`,...e)}/**
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
 */function Dt(t,...e){throw $d(t,...e)}function Ot(t,...e){return $d(t,...e)}function j_(t,e,n){const r=Object.assign(Object.assign({},_S()),{[e]:n});return new $s("auth","Firebase",r).create(e,{appName:t.name})}function vS(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&Dt(t,"argument-error"),j_(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function $d(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return U_.create(t,...e)}function M(t,e,...n){if(!t)throw $d(e,...n)}function $t(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Fo(e),new Error(e)}function Yt(t,e){t||$t(e)}/**
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
 */const op=new Map;function Bt(t){Yt(t instanceof Function,"Expected a class definition");let e=op.get(t);return e?(Yt(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,op.set(t,e),e)}/**
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
 */function yS(t,e){const n=jd(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(ml(s,e??{}))return i;Dt(i,"already-initialized")}return n.initialize({options:e})}function wS(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Bt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}/**
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
 */function gc(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function ES(){return lp()==="http:"||lp()==="https:"}function lp(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function CS(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(ES()||WE()||"connection"in navigator)?navigator.onLine:!0}function SS(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Ws{constructor(e,n){this.shortDelay=e,this.longDelay=n,Yt(n>e,"Short delay should be less than long delay!"),this.isMobile=Ld()||T_()}get(){return CS()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Bd(t,e){Yt(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class z_{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;$t("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;$t("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;$t("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const kS={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
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
 */const IS=new Ws(3e4,6e4);function TS(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function ta(t,e,n,r,i={}){return $_(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const l=ki(Object.assign({key:t.config.apiKey},o)).slice(1),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/json",t.languageCode&&(a["X-Firebase-Locale"]=t.languageCode),z_.fetch()(B_(t,t.config.apiHost,n,l),Object.assign({method:e,headers:a,referrerPolicy:"no-referrer"},s))})}async function $_(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},kS),e);try{const i=new xS(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw _o(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const l=s.ok?o.errorMessage:o.error.message,[a,u]=l.split(" : ");if(a==="FEDERATED_USER_ID_ALREADY_LINKED")throw _o(t,"credential-already-in-use",o);if(a==="EMAIL_EXISTS")throw _o(t,"email-already-in-use",o);if(a==="USER_DISABLED")throw _o(t,"user-disabled",o);const d=r[a]||a.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw j_(t,d,u);Dt(t,d)}}catch(i){if(i instanceof Fn)throw i;Dt(t,"network-request-failed")}}async function NS(t,e,n,r,i={}){const s=await ta(t,e,n,r,i);return"mfaPendingCredential"in s&&Dt(t,"multi-factor-auth-required",{_serverResponse:s}),s}function B_(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Bd(t.config,i):`${t.config.apiScheme}://${i}`}class xS{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Ot(this.auth,"network-request-failed")),IS.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function _o(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Ot(t,e,r);return i.customData._tokenResponse=n,i}/**
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
 */async function RS(t,e){return ta(t,"POST","/v1/accounts:delete",e)}async function PS(t,e){return ta(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function ns(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function OS(t,e=!1){const n=et(t),r=await n.getIdToken(e),i=Wd(r);M(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:ns(nu(i.auth_time)),issuedAtTime:ns(nu(i.iat)),expirationTime:ns(nu(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function nu(t){return Number(t)*1e3}function Wd(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Fo("JWT malformed, contained fewer than 3 sections"),null;try{const i=hl(n);return i?JSON.parse(i):(Fo("Failed to decode base64 JWT payload"),null)}catch(i){return Fo("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function AS(t){const e=Wd(t);return M(e,"internal-error"),M(typeof e.exp<"u","internal-error"),M(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Ts(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Fn&&DS(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function DS({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class MS{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class W_{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=ns(this.lastLoginAt),this.creationTime=ns(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function _l(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Ts(t,PS(n,{idToken:r}));M(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?FS(s.providerUserInfo):[],l=bS(t.providerData,o),a=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(l!=null&&l.length),d=a?u:!1,c={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:l,metadata:new W_(s.createdAt,s.lastLoginAt),isAnonymous:d};Object.assign(t,c)}async function LS(t){const e=et(t);await _l(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function bS(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function FS(t){return t.map(e=>{var{providerId:n}=e,r=zd(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function US(t,e){const n=await $_(t,{},async()=>{const r=ki({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=B_(t,i,"/v1/token",`key=${s}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",z_.fetch()(o,{method:"POST",headers:l,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class Ns{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){M(e.idToken,"internal-error"),M(typeof e.idToken<"u","internal-error"),M(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):AS(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return M(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await US(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Ns;return r&&(M(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(M(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(M(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ns,this.toJSON())}_performRefresh(){return $t("not implemented")}}/**
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
 */function rn(t,e){M(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class nr{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=zd(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new MS(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new W_(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Ts(this,this.stsTokenManager.getToken(this.auth,e));return M(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return OS(this,e)}reload(){return LS(this)}_assign(e){this!==e&&(M(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new nr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){M(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await _l(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Ts(this,RS(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,l,a,u,d;const c=(r=n.displayName)!==null&&r!==void 0?r:void 0,f=(i=n.email)!==null&&i!==void 0?i:void 0,_=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,v=(o=n.photoURL)!==null&&o!==void 0?o:void 0,w=(l=n.tenantId)!==null&&l!==void 0?l:void 0,R=(a=n._redirectEventId)!==null&&a!==void 0?a:void 0,p=(u=n.createdAt)!==null&&u!==void 0?u:void 0,h=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:m,emailVerified:E,isAnonymous:I,providerData:k,stsTokenManager:T}=n;M(m&&T,e,"internal-error");const P=Ns.fromJSON(this.name,T);M(typeof m=="string",e,"internal-error"),rn(c,e.name),rn(f,e.name),M(typeof E=="boolean",e,"internal-error"),M(typeof I=="boolean",e,"internal-error"),rn(_,e.name),rn(v,e.name),rn(w,e.name),rn(R,e.name),rn(p,e.name),rn(h,e.name);const B=new nr({uid:m,auth:e,email:f,emailVerified:E,displayName:c,isAnonymous:I,photoURL:v,phoneNumber:_,tenantId:w,stsTokenManager:P,createdAt:p,lastLoginAt:h});return k&&Array.isArray(k)&&(B.providerData=k.map(L=>Object.assign({},L))),R&&(B._redirectEventId=R),B}static async _fromIdTokenResponse(e,n,r=!1){const i=new Ns;i.updateFromServerResponse(n);const s=new nr({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await _l(s),s}}/**
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
 */class H_{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}H_.type="NONE";const ap=H_;/**
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
 */function Uo(t,e,n){return`firebase:${t}:${e}:${n}`}class Zr{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Uo(this.userKey,i.apiKey,s),this.fullPersistenceKey=Uo("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?nr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Zr(Bt(ap),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||Bt(ap);const o=Uo(r,e.config.apiKey,e.name);let l=null;for(const u of n)try{const d=await u._get(o);if(d){const c=nr._fromJSON(e,d);u!==s&&(l=c),s=u;break}}catch{}const a=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!a.length?new Zr(s,e,r):(s=a[0],l&&await s._set(o,l.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new Zr(s,e,r))}}/**
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
 */function up(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(K_(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(V_(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Q_(e))return"Blackberry";if(Y_(e))return"Webos";if(Hd(e))return"Safari";if((e.includes("chrome/")||G_(e))&&!e.includes("edge/"))return"Chrome";if(q_(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function V_(t=De()){return/firefox\//i.test(t)}function Hd(t=De()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function G_(t=De()){return/crios\//i.test(t)}function K_(t=De()){return/iemobile/i.test(t)}function q_(t=De()){return/android/i.test(t)}function Q_(t=De()){return/blackberry/i.test(t)}function Y_(t=De()){return/webos/i.test(t)}function na(t=De()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function jS(t=De()){var e;return na(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function zS(){return HE()&&document.documentMode===10}function X_(t=De()){return na(t)||q_(t)||Y_(t)||Q_(t)||/windows phone/i.test(t)||K_(t)}function $S(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function J_(t,e=[]){let n;switch(t){case"Browser":n=up(De());break;case"Worker":n=`${up(De())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Bs}/${r}`}/**
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
 */class BS{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,l)=>{try{const a=e(s);o(a)}catch(a){l(a)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */class WS{constructor(e,n,r){this.app=e,this.heartbeatServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new cp(this),this.idTokenSubscription=new cp(this),this.beforeStateQueue=new BS(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=U_,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Bt(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Zr.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=i==null?void 0:i._redirectEventId,a=await this.tryRedirectSignIn(e);(!o||o===l)&&(a!=null&&a.user)&&(i=a.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return M(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await _l(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=SS()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?et(e):null;return n&&M(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&M(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Bt(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new $s("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Bt(e)||this._popupRedirectResolver;M(n,this,"argument-error"),this.redirectPersistenceManager=await Zr.create(this,[Bt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return M(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof n=="function"?e.addObserver(n,r,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return M(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=J_(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return r&&(n["X-Firebase-Client"]=r),n}}function ra(t){return et(t)}class cp{constructor(e){this.auth=e,this.observer=null,this.addObserver=oC(n=>this.observer=n)}get next(){return M(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function HS(t,e,n){const r=ra(t);M(r._canInitEmulator,r,"emulator-config-failed"),M(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=Z_(e),{host:o,port:l}=VS(e),a=l===null?"":`:${l}`;r.config.emulator={url:`${s}//${o}${a}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||GS()}function Z_(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function VS(t){const e=Z_(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:dp(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:dp(o)}}}function dp(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function GS(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class ev{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return $t("not implemented")}_getIdTokenResponse(e){return $t("not implemented")}_linkToIdToken(e,n){return $t("not implemented")}_getReauthenticationResolver(e){return $t("not implemented")}}/**
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
 */async function ei(t,e){return NS(t,"POST","/v1/accounts:signInWithIdp",TS(t,e))}/**
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
 */const KS="http://localhost";class fr extends ev{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new fr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Dt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=zd(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new fr(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return ei(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,ei(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,ei(e,n)}buildRequest(){const e={requestUri:KS,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=ki(n)}return e}}/**
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
 */class Vd{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Hs extends Vd{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class cn extends Hs{constructor(){super("facebook.com")}static credential(e){return fr._fromParams({providerId:cn.PROVIDER_ID,signInMethod:cn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return cn.credentialFromTaggedObject(e)}static credentialFromError(e){return cn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return cn.credential(e.oauthAccessToken)}catch{return null}}}cn.FACEBOOK_SIGN_IN_METHOD="facebook.com";cn.PROVIDER_ID="facebook.com";/**
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
 */class Ut extends Hs{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return fr._fromParams({providerId:Ut.PROVIDER_ID,signInMethod:Ut.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Ut.credentialFromTaggedObject(e)}static credentialFromError(e){return Ut.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Ut.credential(n,r)}catch{return null}}}Ut.GOOGLE_SIGN_IN_METHOD="google.com";Ut.PROVIDER_ID="google.com";/**
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
 */class dn extends Hs{constructor(){super("github.com")}static credential(e){return fr._fromParams({providerId:dn.PROVIDER_ID,signInMethod:dn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return dn.credentialFromTaggedObject(e)}static credentialFromError(e){return dn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return dn.credential(e.oauthAccessToken)}catch{return null}}}dn.GITHUB_SIGN_IN_METHOD="github.com";dn.PROVIDER_ID="github.com";/**
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
 */class fn extends Hs{constructor(){super("twitter.com")}static credential(e,n){return fr._fromParams({providerId:fn.PROVIDER_ID,signInMethod:fn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return fn.credentialFromTaggedObject(e)}static credentialFromError(e){return fn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return fn.credential(n,r)}catch{return null}}}fn.TWITTER_SIGN_IN_METHOD="twitter.com";fn.PROVIDER_ID="twitter.com";/**
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
 */class pi{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await nr._fromIdTokenResponse(e,r,i),o=fp(r);return new pi({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=fp(r);return new pi({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function fp(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class vl extends Fn{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,vl.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new vl(e,n,r,i)}}function tv(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?vl._fromErrorAndOperation(t,s,e,r):s})}async function qS(t,e,n=!1){const r=await Ts(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return pi._forOperation(t,"link",r)}/**
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
 */async function QS(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await Ts(t,tv(r,i,e,t),n);M(s.idToken,r,"internal-error");const o=Wd(s.idToken);M(o,r,"internal-error");const{sub:l}=o;return M(t.uid===l,r,"user-mismatch"),pi._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Dt(r,"user-mismatch"),s}}/**
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
 */async function YS(t,e,n=!1){const r="signIn",i=await tv(t,r,e),s=await pi._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}function XS(t,e,n,r){return et(t).onIdTokenChanged(e,n,r)}function JS(t,e,n){return et(t).beforeAuthStateChanged(e,n)}function ZS(t,e,n,r){return et(t).onAuthStateChanged(e,n,r)}const yl="__sak";/**
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
 */class nv{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(yl,"1"),this.storage.removeItem(yl),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function ek(){const t=De();return Hd(t)||na(t)}const tk=1e3,nk=10;class rv extends nv{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=ek()&&$S(),this.fallbackToPolling=X_(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,a)=>{this.notifyListeners(o,a)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);zS()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,nk):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},tk)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}rv.type="LOCAL";const rk=rv;/**
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
 */class iv extends nv{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}iv.type="SESSION";const sv=iv;/**
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
 */function ik(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class ia{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new ia(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(o).map(async u=>u(n.origin,s)),a=await ik(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:a})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ia.receivers=[];/**
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
 */function Gd(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class sk{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((l,a)=>{const u=Gd("",20);i.port1.start();const d=setTimeout(()=>{a(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(c){const f=c;if(f.data.eventId===u)switch(f.data.status){case"ack":clearTimeout(d),s=setTimeout(()=>{a(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(f.data.response);break;default:clearTimeout(d),clearTimeout(s),a(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function At(){return window}function ok(t){At().location.href=t}/**
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
 */function ov(){return typeof At().WorkerGlobalScope<"u"&&typeof At().importScripts=="function"}async function lk(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function ak(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function uk(){return ov()?self:null}/**
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
 */const lv="firebaseLocalStorageDb",ck=1,wl="firebaseLocalStorage",av="fbase_key";class Vs{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function sa(t,e){return t.transaction([wl],e?"readwrite":"readonly").objectStore(wl)}function dk(){const t=indexedDB.deleteDatabase(lv);return new Vs(t).toPromise()}function _c(){const t=indexedDB.open(lv,ck);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(wl,{keyPath:av})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(wl)?e(r):(r.close(),await dk(),e(await _c()))})})}async function hp(t,e,n){const r=sa(t,!0).put({[av]:e,value:n});return new Vs(r).toPromise()}async function fk(t,e){const n=sa(t,!1).get(e),r=await new Vs(n).toPromise();return r===void 0?null:r.value}function pp(t,e){const n=sa(t,!0).delete(e);return new Vs(n).toPromise()}const hk=800,pk=3;class uv{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await _c(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>pk)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return ov()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ia._getInstance(uk()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await lk(),!this.activeServiceWorker)return;this.sender=new sk(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||ak()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await _c();return await hp(e,yl,"1"),await pp(e,yl),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>hp(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>fk(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>pp(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=sa(i,!1).getAll();return new Vs(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),hk)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}uv.type="LOCAL";const mk=uv;/**
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
 */function gk(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function _k(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Ot("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",gk().appendChild(r)})}function vk(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new Ws(3e4,6e4);/**
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
 */function cv(t,e){return e?Bt(e):(M(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Kd extends ev{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ei(e,this._buildIdpRequest())}_linkToIdToken(e,n){return ei(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return ei(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function yk(t){return YS(t.auth,new Kd(t),t.bypassAuthState)}function wk(t){const{auth:e,user:n}=t;return M(n,e,"internal-error"),QS(n,new Kd(t),t.bypassAuthState)}async function Ek(t){const{auth:e,user:n}=t;return M(n,e,"internal-error"),qS(n,new Kd(t),t.bypassAuthState)}/**
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
 */class dv{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:l}=e;if(o){this.reject(o);return}const a={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(a))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return yk;case"linkViaPopup":case"linkViaRedirect":return Ek;case"reauthViaPopup":case"reauthViaRedirect":return wk;default:Dt(this.auth,"internal-error")}}resolve(e){Yt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Yt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const Ck=new Ws(2e3,1e4);async function Sk(t,e,n){const r=ra(t);vS(t,e,Vd);const i=cv(r,n);return new Jn(r,"signInViaPopup",e,i).executeNotNull()}class Jn extends dv{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Jn.currentPopupAction&&Jn.currentPopupAction.cancel(),Jn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return M(e,this.auth,"internal-error"),e}async onExecution(){Yt(this.filter.length===1,"Popup operations only handle one event");const e=Gd();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Ot(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Ot(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Jn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ot(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,Ck.get())};e()}}Jn.currentPopupAction=null;/**
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
 */const kk="pendingRedirect",jo=new Map;class Ik extends dv{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=jo.get(this.auth._key());if(!e){try{const r=await Tk(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}jo.set(this.auth._key(),e)}return this.bypassAuthState||jo.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Tk(t,e){const n=Rk(e),r=xk(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function Nk(t,e){jo.set(t._key(),e)}function xk(t){return Bt(t._redirectPersistence)}function Rk(t){return Uo(kk,t.config.apiKey,t.name)}async function Pk(t,e,n=!1){const r=ra(t),i=cv(r,e),o=await new Ik(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const Ok=10*60*1e3;class Ak{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Dk(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!fv(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Ot(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Ok&&this.cachedEventUids.clear(),this.cachedEventUids.has(mp(e))}saveEventToCache(e){this.cachedEventUids.add(mp(e)),this.lastProcessedEventTime=Date.now()}}function mp(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function fv({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Dk(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return fv(t);default:return!1}}/**
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
 */async function Mk(t,e={}){return ta(t,"GET","/v1/projects",e)}/**
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
 */const Lk=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,bk=/^https?/;async function Fk(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Mk(t);for(const n of e)try{if(Uk(n))return}catch{}Dt(t,"unauthorized-domain")}function Uk(t){const e=gc(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!bk.test(n))return!1;if(Lk.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const jk=new Ws(3e4,6e4);function gp(){const t=At().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function zk(t){return new Promise((e,n)=>{var r,i,s;function o(){gp(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{gp(),n(Ot(t,"network-request-failed"))},timeout:jk.get()})}if(!((i=(r=At().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=At().gapi)===null||s===void 0)&&s.load)o();else{const l=vk("iframefcb");return At()[l]=()=>{gapi.load?o():n(Ot(t,"network-request-failed"))},_k(`https://apis.google.com/js/api.js?onload=${l}`).catch(a=>n(a))}}).catch(e=>{throw zo=null,e})}let zo=null;function $k(t){return zo=zo||zk(t),zo}/**
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
 */const Bk=new Ws(5e3,15e3),Wk="__/auth/iframe",Hk="emulator/auth/iframe",Vk={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Gk=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Kk(t){const e=t.config;M(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Bd(e,Hk):`https://${t.config.authDomain}/${Wk}`,r={apiKey:e.apiKey,appName:t.name,v:Bs},i=Gk.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${ki(r).slice(1)}`}async function qk(t){const e=await $k(t),n=At().gapi;return M(n,t,"internal-error"),e.open({where:document.body,url:Kk(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Vk,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Ot(t,"network-request-failed"),l=At().setTimeout(()=>{s(o)},Bk.get());function a(){At().clearTimeout(l),i(r)}r.ping(a).then(a,()=>{s(o)})}))}/**
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
 */const Qk={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Yk=500,Xk=600,Jk="_blank",Zk="http://localhost";class _p{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function eI(t,e,n,r=Yk,i=Xk){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const a=Object.assign(Object.assign({},Qk),{width:r.toString(),height:i.toString(),top:s,left:o}),u=De().toLowerCase();n&&(l=G_(u)?Jk:n),V_(u)&&(e=e||Zk,a.scrollbars="yes");const d=Object.entries(a).reduce((f,[_,v])=>`${f}${_}=${v},`,"");if(jS(u)&&l!=="_self")return tI(e||"",l),new _p(null);const c=window.open(e||"",l,d);M(c,t,"popup-blocked");try{c.focus()}catch{}return new _p(c)}function tI(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const nI="__/auth/handler",rI="emulator/auth/handler";function vp(t,e,n,r,i,s){M(t.config.authDomain,t,"auth-domain-config-required"),M(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Bs,eventId:i};if(e instanceof Vd){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",cc(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[a,u]of Object.entries(s||{}))o[a]=u}if(e instanceof Hs){const a=e.getScopes().filter(u=>u!=="");a.length>0&&(o.scopes=a.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const a of Object.keys(l))l[a]===void 0&&delete l[a];return`${iI(t)}?${ki(l).slice(1)}`}function iI({config:t}){return t.emulator?Bd(t,rI):`https://${t.authDomain}/${nI}`}/**
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
 */const ru="webStorageSupport";class sI{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=sv,this._completeRedirectFn=Pk,this._overrideRedirectResult=Nk}async _openPopup(e,n,r,i){var s;Yt((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=vp(e,n,r,gc(),i);return eI(e,o,Gd())}async _openRedirect(e,n,r,i){return await this._originValidation(e),ok(vp(e,n,r,gc(),i)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Yt(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await qk(e),r=new Ak(e);return n.register("authEvent",i=>(M(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(ru,{type:ru},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[ru];o!==void 0&&n(!!o),Dt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Fk(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return X_()||Hd()||na()}}const oI=sI;var yp="@firebase/auth",wp="0.21.0";/**
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
 */class lI{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){M(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function aI(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function uI(t){hi(new cr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),{apiKey:s,authDomain:o}=r.options;return((l,a)=>{M(s&&!s.includes(":"),"invalid-api-key",{appName:l.name}),M(!(o!=null&&o.includes(":")),"argument-error",{appName:l.name});const u={apiKey:s,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:J_(t)},d=new WS(l,a,u);return wS(d,n),d})(r,i)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),hi(new cr("auth-internal",e=>{const n=ra(e.getProvider("auth").getImmediate());return(r=>new lI(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),xn(yp,wp,aI(t)),xn(yp,wp,"esm2017")}/**
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
 */const cI=5*60,dI=R_("authIdTokenMaxAge")||cI;let Ep=null;const fI=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>dI)return;const i=n==null?void 0:n.token;Ep!==i&&(Ep=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function hI(t=M_()){const e=jd(t,"auth");if(e.isInitialized())return e.getImmediate();const n=yS(t,{popupRedirectResolver:oI,persistence:[mk,rk,sv]}),r=R_("authTokenSyncURL");if(r){const s=fI(r);JS(n,s,()=>s(n.currentUser)),XS(n,o=>s(o))}const i=x_("auth");return i&&HS(n,`http://${i}`),n}uI("Browser");const Cp="@firebase/database",Sp="0.14.0";/**
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
 */let hv="";function pI(t){hv=t}/**
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
 */class mI{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),ye(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:ks(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class gI{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return Mt(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const pv=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new mI(e)}}catch{}return new gI},Zn=pv("localStorage"),vc=pv("sessionStorage");/**
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
 */const ti=new Fd("@firebase/database"),_I=function(){let t=1;return function(){return t++}}(),mv=function(t){const e=uC(t),n=new sC;n.update(e);const r=n.digest();return Md.encodeByteArray(r)},Gs=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=Gs.apply(null,r):typeof r=="object"?e+=ye(r):e+=r,e+=" "}return e};let rr=null,kp=!0;const vI=function(t,e){S(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(ti.logLevel=Q.VERBOSE,rr=ti.log.bind(ti),e&&vc.set("logging_enabled",!0)):typeof t=="function"?rr=t:(rr=null,vc.remove("logging_enabled"))},Se=function(...t){if(kp===!0&&(kp=!1,rr===null&&vc.get("logging_enabled")===!0&&vI(!0)),rr){const e=Gs.apply(null,t);rr(e)}},Ks=function(t){return function(...e){Se(t,...e)}},yc=function(...t){const e="FIREBASE INTERNAL ERROR: "+Gs(...t);ti.error(e)},Xt=function(...t){const e=`FIREBASE FATAL ERROR: ${Gs(...t)}`;throw ti.error(e),new Error(e)},Fe=function(...t){const e="FIREBASE WARNING: "+Gs(...t);ti.warn(e)},yI=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Fe("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},qd=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},wI=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},mi="[MIN_NAME]",hr="[MAX_NAME]",Er=function(t,e){if(t===e)return 0;if(t===mi||e===hr)return-1;if(e===mi||t===hr)return 1;{const n=Ip(t),r=Ip(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},EI=function(t,e){return t===e?0:t<e?-1:1},Ui=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+ye(e))},Qd=function(t){if(typeof t!="object"||t===null)return ye(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=ye(e[r]),n+=":",n+=Qd(t[e[r]]);return n+="}",n},gv=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let i=0;i<n;i+=e)i+e>n?r.push(t.substring(i,n)):r.push(t.substring(i,i+e));return r};function Te(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const _v=function(t){S(!qd(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let i,s,o,l,a;t===0?(s=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(l=Math.min(Math.floor(Math.log(t)/Math.LN2),r),s=l+r,o=Math.round(t*Math.pow(2,n-l)-Math.pow(2,n))):(s=0,o=Math.round(t/Math.pow(2,1-r-n))));const u=[];for(a=n;a;a-=1)u.push(o%2?1:0),o=Math.floor(o/2);for(a=e;a;a-=1)u.push(s%2?1:0),s=Math.floor(s/2);u.push(i?1:0),u.reverse();const d=u.join("");let c="";for(a=0;a<64;a+=8){let f=parseInt(d.substr(a,8),2).toString(16);f.length===1&&(f="0"+f),c=c+f}return c.toLowerCase()},CI=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},SI=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function kI(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const r=new Error(t+" at "+e._path.toString()+": "+n);return r.code=t.toUpperCase(),r}const II=new RegExp("^-?(0*)\\d{1,10}$"),TI=-2147483648,NI=2147483647,Ip=function(t){if(II.test(t)){const e=Number(t);if(e>=TI&&e<=NI)return e}return null},Ii=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw Fe("Exception was thrown by user callback.",n),e},Math.floor(0))}},xI=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},rs=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class RI{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){Fe(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class PI{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Se("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Fe(e)}}class ni{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}ni.OWNER="owner";/**
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
 */const Yd="5",vv="v",yv="s",wv="r",Ev="f",Cv=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Sv="ls",kv="p",wc="ac",Iv="websocket",Tv="long_polling";/**
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
 */class Nv{constructor(e,n,r,i,s=!1,o="",l=!1){this.secure=n,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Zn.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Zn.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function OI(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function xv(t,e,n){S(typeof e=="string","typeof type must == string"),S(typeof n=="object","typeof params must == object");let r;if(e===Iv)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===Tv)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);OI(t)&&(n.ns=t.namespace);const i=[];return Te(n,(s,o)=>{i.push(s+"="+o)}),r+i.join("&")}/**
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
 */class AI{constructor(){this.counters_={}}incrementCounter(e,n=1){Mt(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return $E(this.counters_)}}/**
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
 */const iu={},su={};function Xd(t){const e=t.toString();return iu[e]||(iu[e]=new AI),iu[e]}function DI(t,e){const n=t.toString();return su[n]||(su[n]=e()),su[n]}/**
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
 */class MI{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<r.length;++i)r[i]&&Ii(()=>{this.onMessage_(r[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const Tp="start",LI="close",bI="pLPCommand",FI="pRTLPCB",Rv="id",Pv="pw",Ov="ser",UI="cb",jI="seg",zI="ts",$I="d",BI="dframe",Av=1870,Dv=30,WI=Av-Dv,HI=25e3,VI=3e4;class Vr{constructor(e,n,r,i,s,o,l){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.transportSessionId=o,this.lastSessionId=l,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Ks(e),this.stats_=Xd(n),this.urlFn=a=>(this.appCheckToken&&(a[wc]=this.appCheckToken),xv(n,Tv,a))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new MI(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(VI)),wI(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Jd((...s)=>{const[o,l,a,u,d]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Tp)this.id=l,this.password=a;else if(o===LI)l?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(l,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,l]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,l)},()=>{this.onClosed_()},this.urlFn);const r={};r[Tp]="t",r[Ov]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[UI]=this.scriptTagHolder.uniqueCallbackIdentifier),r[vv]=Yd,this.transportSessionId&&(r[yv]=this.transportSessionId),this.lastSessionId&&(r[Sv]=this.lastSessionId),this.applicationId&&(r[kv]=this.applicationId),this.appCheckToken&&(r[wc]=this.appCheckToken),typeof location<"u"&&location.hostname&&Cv.test(location.hostname)&&(r[wv]=Ev);const i=this.urlFn(r);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Vr.forceAllow_=!0}static forceDisallow(){Vr.forceDisallow_=!0}static isAvailable(){return Vr.forceAllow_?!0:!Vr.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!CI()&&!SI()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=ye(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=k_(n),i=gv(r,WI);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[BI]="t",r[Rv]=e,r[Pv]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=ye(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Jd{constructor(e,n,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=_I(),window[bI+this.uniqueCallbackIdentifier]=e,window[FI+this.uniqueCallbackIdentifier]=n,this.myIFrame=Jd.createIFrame_();let s="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(s='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(l){Se("frame writing exception"),l.stack&&Se(l.stack),Se(l)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Se("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.innerHTML="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Rv]=this.myID,e[Pv]=this.myPW,e[Ov]=this.currentSerial;let n=this.urlFn(e),r="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Dv+r.length<=Av;){const o=this.pendingSegs.shift();r=r+"&"+jI+i+"="+o.seg+"&"+zI+i+"="+o.ts+"&"+$I+i+"="+o.d,i++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(r,Math.floor(HI)),s=()=>{clearTimeout(i),r()};this.addTag(e,s)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const i=r.readyState;(!i||i==="loaded"||i==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{Se("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
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
 */const GI=16384,KI=45e3;let El=null;typeof MozWebSocket<"u"?El=MozWebSocket:typeof WebSocket<"u"&&(El=WebSocket);class mt{constructor(e,n,r,i,s,o,l){this.connId=e,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Ks(this.connId),this.stats_=Xd(n),this.connURL=mt.connectionURL_(n,o,l,i,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,i,s){const o={};return o[vv]=Yd,typeof location<"u"&&location.hostname&&Cv.test(location.hostname)&&(o[wv]=Ev),n&&(o[yv]=n),r&&(o[Sv]=r),i&&(o[wc]=i),s&&(o[kv]=s),xv(e,Iv,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Zn.set("previous_websocket_failure",!0);try{let r;N_(),this.mySock=new El(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){mt.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&El!==null&&!mt.forceDisallow_}static previouslyFailed(){return Zn.isInMemoryStorage||Zn.get("previous_websocket_failure")===!0}markConnectionHealthy(){Zn.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=ks(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(S(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=ye(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=gv(n,GI);r.length>1&&this.sendString_(String(r.length));for(let i=0;i<r.length;i++)this.sendString_(r[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(KI))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}mt.responsesRequiredToBeHealthy=2;mt.healthyTimeout=3e4;/**
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
 */class xs{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Vr,mt]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=mt&&mt.isAvailable();let r=n&&!mt.previouslyFailed();if(e.webSocketOnly&&(n||Fe("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[mt];else{const i=this.transports_=[];for(const s of xs.ALL_TRANSPORTS)s&&s.isAvailable()&&i.push(s);xs.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}xs.globalTransportInitialized_=!1;/**
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
 */const qI=6e4,QI=5e3,YI=10*1024,XI=100*1024,ou="t",Np="d",JI="s",xp="r",ZI="e",Rp="o",Pp="a",Op="n",Ap="p",eT="h";class tT{constructor(e,n,r,i,s,o,l,a,u,d){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=o,this.onReady_=l,this.onDisconnect_=a,this.onKill_=u,this.lastSessionId=d,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Ks("c:"+this.id+":"),this.transportManager_=new xs(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=rs(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>XI?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>YI?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(ou in e){const n=e[ou];n===Pp?this.upgradeIfSecondaryHealthy_():n===xp?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Rp&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Ui("t",e),r=Ui("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Ap,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Pp,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Op,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Ui("t",e),r=Ui("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Ui(ou,e);if(Np in e){const r=e[Np];if(n===eT)this.onHandshake_(r);else if(n===Op){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===JI?this.onConnectionShutdown_(r):n===xp?this.onReset_(r):n===ZI?yc("Server Error: "+r):n===Rp?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):yc("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Yd!==r&&Fe("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),rs(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(qI))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):rs(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(QI))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Ap,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Zn.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class Mv{put(e,n,r,i){}merge(e,n,r,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
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
 */class Lv{constructor(e){this.allowedEvents_=e,this.listeners_={},S(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let i=0;i<r.length;i++)r[i].callback.apply(r[i].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const i=this.getInitialEvent(e);i&&n.apply(r,i)}off(e,n,r){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let s=0;s<i.length;s++)if(i[s].callback===n&&(!r||r===i[s].context)){i.splice(s,1);return}}validateEventType_(e){S(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
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
 */class Cl extends Lv{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Ld()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new Cl}getInitialEvent(e){return S(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const Dp=32,Mp=768;class K{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function $(){return new K("")}function b(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function An(t){return t.pieces_.length-t.pieceNum_}function X(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new K(t.pieces_,e)}function Zd(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function nT(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function Rs(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function bv(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new K(e,0)}function le(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof K)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let i=0;i<r.length;i++)r[i].length>0&&n.push(r[i])}return new K(n,0)}function U(t){return t.pieceNum_>=t.pieces_.length}function We(t,e){const n=b(t),r=b(e);if(n===null)return e;if(n===r)return We(X(t),X(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function rT(t,e){const n=Rs(t,0),r=Rs(e,0);for(let i=0;i<n.length&&i<r.length;i++){const s=Er(n[i],r[i]);if(s!==0)return s}return n.length===r.length?0:n.length<r.length?-1:1}function ef(t,e){if(An(t)!==An(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function ot(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(An(t)>An(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class iT{constructor(e,n){this.errorPrefix_=n,this.parts_=Rs(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=ea(this.parts_[r]);Fv(this)}}function sT(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=ea(e),Fv(t)}function oT(t){const e=t.parts_.pop();t.byteLength_-=ea(e),t.parts_.length>0&&(t.byteLength_-=1)}function Fv(t){if(t.byteLength_>Mp)throw new Error(t.errorPrefix_+"has a key path longer than "+Mp+" bytes ("+t.byteLength_+").");if(t.parts_.length>Dp)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Dp+") or object contains a cycle "+Vn(t))}function Vn(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
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
 */class tf extends Lv{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}static getInstance(){return new tf}getInitialEvent(e){return S(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const ji=1e3,lT=60*5*1e3,Lp=30*1e3,aT=1.3,uT=3e4,cT="server_kill",bp=3;class Vt extends Mv{constructor(e,n,r,i,s,o,l,a){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=l,this.authOverride_=a,this.id=Vt.nextPersistentConnectionId_++,this.log_=Ks("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=ji,this.maxReconnectDelay_=lT,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,a&&!N_())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");tf.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Cl.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const i=++this.requestNumber_,s={r:i,a:e,b:n};this.log_(ye(s)),S(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),r&&(this.requestCBHash_[i]=r)}get(e){this.initConnection_();const n=new zs,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const l=o.d;o.s==="ok"?n.resolve(l):n.reject(l)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),n.promise}listen(e,n,r,i){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),S(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),S(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const l={onComplete:i,hashFn:n,query:e,tag:r};this.listens.get(o).set(s,l),this.connected_&&this.sendListen_(l)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+r+" for "+i);const s={p:r},o="q";e.tag&&(s.q=n._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,l=>{const a=l.d,u=l.s;Vt.warnOnListenWarnings_(a,n),(this.listens.get(r)&&this.listens.get(r).get(i))===e&&(this.log_("listen response",l),u!=="ok"&&this.removeListen_(r,i),e.onComplete&&e.onComplete(u,a))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&Mt(e,"w")){const r=fi(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();Fe(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||iC(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Lp)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=rC(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,i=>{const s=i.s,o=i.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+i),S(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,i)&&this.connected_&&this.sendUnlisten_(r,i,e._queryObject,n)}sendUnlisten_(e,n,r,i){this.log_("Unlisten on "+e+" for "+n);const s={p:e},o="n";i&&(s.q=r,s.t=i),this.sendRequest(o,s)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,i){const s={p:n,d:r};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,r,i){this.putInternal("p",e,n,r,i)}merge(e,n,r,i){this.putInternal("m",e,n,r,i)}putInternal(e,n,r,i,s){this.initConnection_();const o={p:n,d:r};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const l=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(l):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(s.s,s.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const s=r.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+ye(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):yc("Unrecognized action received from server: "+ye(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){S(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=ji,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=ji,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>uT&&(this.reconnectDelay_=ji),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*aT)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+Vt.nextConnectionId_++,s=this.lastSessionId;let o=!1,l=null;const a=function(){l?l.close():(o=!0,r())},u=function(c){S(l,"sendRequest call when we're not connected not allowed."),l.sendRequest(c)};this.realtime_={close:a,sendRequest:u};const d=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[c,f]=await Promise.all([this.authTokenProvider_.getToken(d),this.appCheckTokenProvider_.getToken(d)]);o?Se("getToken() completed but was canceled"):(Se("getToken() completed. Creating connection."),this.authToken_=c&&c.accessToken,this.appCheckToken_=f&&f.token,l=new tT(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,_=>{Fe(_+" ("+this.repoInfo_.toString()+")"),this.interrupt(cT)},s))}catch(c){this.log_("Failed to get token: "+c),o||(this.repoInfo_.nodeAdmin&&Fe(c),a())}}}interrupt(e){Se("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Se("Resuming connection for reason: "+e),delete this.interruptReasons_[e],cc(this.interruptReasons_)&&(this.reconnectDelay_=ji,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(s=>Qd(s)).join("$"):r="default";const i=this.removeListen_(e,r);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const r=new K(e).toString();let i;if(this.listens.has(r)){const s=this.listens.get(r);i=s.get(n),s.delete(n),s.size===0&&this.listens.delete(r)}else i=void 0;return i}onAuthRevoked_(e,n){Se("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=bp&&(this.reconnectDelay_=Lp,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Se("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=bp&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+hv.replace(/\./g,"-")]=1,Ld()?e["framework.cordova"]=1:T_()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Cl.getInstance().currentlyOnline();return cc(this.interruptReasons_)&&e}}Vt.nextPersistentConnectionId_=0;Vt.nextConnectionId_=0;/**
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
 */class F{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new F(e,n)}}/**
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
 */class oa{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new F(mi,e),i=new F(mi,n);return this.compare(r,i)!==0}minPost(){return F.MIN}}/**
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
 */let vo;class Uv extends oa{static get __EMPTY_NODE(){return vo}static set __EMPTY_NODE(e){vo=e}compare(e,n){return Er(e.name,n.name)}isDefinedOn(e){throw Si("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return F.MIN}maxPost(){return new F(hr,vo)}makePost(e,n){return S(typeof e=="string","KeyIndex indexValue must always be a string."),new F(e,vo)}toString(){return".key"}}const ri=new Uv;/**
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
 */class yo{constructor(e,n,r,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class _e{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??_e.RED,this.left=i??He.EMPTY_NODE,this.right=s??He.EMPTY_NODE}copy(e,n,r,i,s){return new _e(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return s<0?i=i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return He.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,i;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return He.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,_e.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,_e.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}_e.RED=!0;_e.BLACK=!1;class dT{copy(e,n,r,i,s){return this}insert(e,n,r){return new _e(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class He{constructor(e,n=He.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new He(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,_e.BLACK,null,null))}remove(e){return new He(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,_e.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,i=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new yo(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new yo(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new yo(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new yo(this.root_,null,this.comparator_,!0,e)}}He.EMPTY_NODE=new dT;/**
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
 */function fT(t,e){return Er(t.name,e.name)}function nf(t,e){return Er(t,e)}/**
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
 */let Ec;function hT(t){Ec=t}const jv=function(t){return typeof t=="number"?"number:"+_v(t):"string:"+t},zv=function(t){if(t.isLeafNode()){const e=t.val();S(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Mt(e,".sv"),"Priority must be a string or number.")}else S(t===Ec||t.isEmpty(),"priority of unexpected type.");S(t===Ec||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let Fp;class me{constructor(e,n=me.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,S(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),zv(this.priorityNode_)}static set __childrenNodeConstructor(e){Fp=e}static get __childrenNodeConstructor(){return Fp}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new me(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:me.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return U(e)?this:b(e)===".priority"?this.priorityNode_:me.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:me.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=b(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(S(r!==".priority"||An(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,me.__childrenNodeConstructor.EMPTY_NODE.updateChild(X(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+jv(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=_v(this.value_):e+=this.value_,this.lazyHash_=mv(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===me.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof me.__childrenNodeConstructor?-1:(S(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,i=me.VALUE_TYPE_ORDER.indexOf(n),s=me.VALUE_TYPE_ORDER.indexOf(r);return S(i>=0,"Unknown leaf type: "+n),S(s>=0,"Unknown leaf type: "+r),i===s?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}me.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let $v,Bv;function pT(t){$v=t}function mT(t){Bv=t}class gT extends oa{compare(e,n){const r=e.node.getPriority(),i=n.node.getPriority(),s=r.compareTo(i);return s===0?Er(e.name,n.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return F.MIN}maxPost(){return new F(hr,new me("[PRIORITY-POST]",Bv))}makePost(e,n){const r=$v(e);return new F(n,new me("[PRIORITY-POST]",r))}toString(){return".priority"}}const ae=new gT;/**
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
 */const _T=Math.log(2);class vT{constructor(e){const n=s=>parseInt(Math.log(s)/_T,10),r=s=>parseInt(Array(s+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=r(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Sl=function(t,e,n,r){t.sort(e);const i=function(a,u){const d=u-a;let c,f;if(d===0)return null;if(d===1)return c=t[a],f=n?n(c):c,new _e(f,c.node,_e.BLACK,null,null);{const _=parseInt(d/2,10)+a,v=i(a,_),w=i(_+1,u);return c=t[_],f=n?n(c):c,new _e(f,c.node,_e.BLACK,v,w)}},s=function(a){let u=null,d=null,c=t.length;const f=function(v,w){const R=c-v,p=c;c-=v;const h=i(R+1,p),m=t[R],E=n?n(m):m;_(new _e(E,m.node,w,null,h))},_=function(v){u?(u.left=v,u=v):(d=v,u=v)};for(let v=0;v<a.count;++v){const w=a.nextBitIsOne(),R=Math.pow(2,a.count-(v+1));w?f(R,_e.BLACK):(f(R,_e.BLACK),f(R,_e.RED))}return d},o=new vT(t.length),l=s(o);return new He(r||e,l)};/**
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
 */let lu;const xr={};class Wt{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return S(xr&&ae,"ChildrenNode.ts has not been loaded"),lu=lu||new Wt({".priority":xr},{".priority":ae}),lu}get(e){const n=fi(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof He?n:null}hasIndex(e){return Mt(this.indexSet_,e.toString())}addIndex(e,n){S(e!==ri,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let i=!1;const s=n.getIterator(F.Wrap);let o=s.getNext();for(;o;)i=i||e.isDefinedOn(o.node),r.push(o),o=s.getNext();let l;i?l=Sl(r,e.getCompare()):l=xr;const a=e.toString(),u=Object.assign({},this.indexSet_);u[a]=e;const d=Object.assign({},this.indexes_);return d[a]=l,new Wt(d,u)}addToIndexes(e,n){const r=pl(this.indexes_,(i,s)=>{const o=fi(this.indexSet_,s);if(S(o,"Missing index implementation for "+s),i===xr)if(o.isDefinedOn(e.node)){const l=[],a=n.getIterator(F.Wrap);let u=a.getNext();for(;u;)u.name!==e.name&&l.push(u),u=a.getNext();return l.push(e),Sl(l,o.getCompare())}else return xr;else{const l=n.get(e.name);let a=i;return l&&(a=a.remove(new F(e.name,l))),a.insert(e,e.node)}});return new Wt(r,this.indexSet_)}removeFromIndexes(e,n){const r=pl(this.indexes_,i=>{if(i===xr)return i;{const s=n.get(e.name);return s?i.remove(new F(e.name,s)):i}});return new Wt(r,this.indexSet_)}}/**
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
 */let zi;class A{constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&zv(this.priorityNode_),this.children_.isEmpty()&&S(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return zi||(zi=new A(new He(nf),null,Wt.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||zi}updatePriority(e){return this.children_.isEmpty()?this:new A(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?zi:n}}getChild(e){const n=b(e);return n===null?this:this.getImmediateChild(n).getChild(X(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(S(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new F(e,n);let i,s;n.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(e,n),s=this.indexMap_.addToIndexes(r,this.children_));const o=i.isEmpty()?zi:this.priorityNode_;return new A(i,o,s)}}updateChild(e,n){const r=b(e);if(r===null)return n;{S(b(e)!==".priority"||An(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(r).updateChild(X(e),n);return this.updateImmediateChild(r,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,i=0,s=!0;if(this.forEachChild(ae,(o,l)=>{n[o]=l.val(e),r++,s&&A.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):s=!1}),!e&&s&&i<2*r){const o=[];for(const l in n)o[l]=n[l];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+jv(this.getPriority().val())+":"),this.forEachChild(ae,(n,r)=>{const i=r.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":mv(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const i=this.resolveIndex_(r);if(i){const s=i.getPredecessorKey(new F(e,n));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new F(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new F(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,F.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)<0;)i.getNext(),s=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,F.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)>0;)i.getNext(),s=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===qs?-1:0}withIndex(e){if(e===ri||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new A(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===ri||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(ae),i=n.getIterator(ae);let s=r.getNext(),o=i.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=r.getNext(),o=i.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===ri?null:this.indexMap_.get(e.toString())}}A.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class yT extends A{constructor(){super(new He(nf),A.EMPTY_NODE,Wt.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return A.EMPTY_NODE}isEmpty(){return!1}}const qs=new yT;Object.defineProperties(F,{MIN:{value:new F(mi,A.EMPTY_NODE)},MAX:{value:new F(hr,qs)}});Uv.__EMPTY_NODE=A.EMPTY_NODE;me.__childrenNodeConstructor=A;hT(qs);mT(qs);/**
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
 */const wT=!0;function ve(t,e=null){if(t===null)return A.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),S(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new me(n,ve(e))}if(!(t instanceof Array)&&wT){const n=[];let r=!1;if(Te(t,(o,l)=>{if(o.substring(0,1)!=="."){const a=ve(l);a.isEmpty()||(r=r||!a.getPriority().isEmpty(),n.push(new F(o,a)))}}),n.length===0)return A.EMPTY_NODE;const s=Sl(n,fT,o=>o.name,nf);if(r){const o=Sl(n,ae.getCompare());return new A(s,ve(e),new Wt({".priority":o},{".priority":ae}))}else return new A(s,ve(e),Wt.Default)}else{let n=A.EMPTY_NODE;return Te(t,(r,i)=>{if(Mt(t,r)&&r.substring(0,1)!=="."){const s=ve(i);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(r,s))}}),n.updatePriority(ve(e))}}pT(ve);/**
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
 */class ET extends oa{constructor(e){super(),this.indexPath_=e,S(!U(e)&&b(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),i=this.extractChild(n.node),s=r.compareTo(i);return s===0?Er(e.name,n.name):s}makePost(e,n){const r=ve(e),i=A.EMPTY_NODE.updateChild(this.indexPath_,r);return new F(n,i)}maxPost(){const e=A.EMPTY_NODE.updateChild(this.indexPath_,qs);return new F(hr,e)}toString(){return Rs(this.indexPath_,0).join("/")}}/**
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
 */class CT extends oa{compare(e,n){const r=e.node.compareTo(n.node);return r===0?Er(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return F.MIN}maxPost(){return F.MAX}makePost(e,n){const r=ve(e);return new F(n,r)}toString(){return".value"}}const ST=new CT;/**
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
 */function Wv(t){return{type:"value",snapshotNode:t}}function gi(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function Ps(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function Os(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function kT(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
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
 */class rf{constructor(e){this.index_=e}updateChild(e,n,r,i,s,o){S(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const l=e.getImmediateChild(n);return l.getChild(i).equals(r.getChild(i))&&l.isEmpty()===r.isEmpty()||(o!=null&&(r.isEmpty()?e.hasChild(n)?o.trackChildChange(Ps(n,l)):S(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):l.isEmpty()?o.trackChildChange(gi(n,r)):o.trackChildChange(Os(n,r,l))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(n,r).withIndex(this.index_)}updateFullNode(e,n,r){return r!=null&&(e.isLeafNode()||e.forEachChild(ae,(i,s)=>{n.hasChild(i)||r.trackChildChange(Ps(i,s))}),n.isLeafNode()||n.forEachChild(ae,(i,s)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(s)||r.trackChildChange(Os(i,s,o))}else r.trackChildChange(gi(i,s))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?A.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class As{constructor(e){this.indexedFilter_=new rf(e.getIndex()),this.index_=e.getIndex(),this.startPost_=As.getStartPost_(e),this.endPost_=As.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,r=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&r}updateChild(e,n,r,i,s,o){return this.matches(new F(n,r))||(r=A.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,r,i,s,o)}updateFullNode(e,n,r){n.isLeafNode()&&(n=A.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(A.EMPTY_NODE);const s=this;return n.forEachChild(ae,(o,l)=>{s.matches(new F(o,l))||(i=i.updateImmediateChild(o,A.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
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
 */class IT{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const r=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?r<=0:r<0},this.withinEndPost=n=>{const r=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?r<=0:r<0},this.rangedFilter_=new As(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,r,i,s,o){return this.rangedFilter_.matches(new F(n,r))||(r=A.EMPTY_NODE),e.getImmediateChild(n).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,r,i,s,o):this.fullLimitUpdateChild_(e,n,r,s,o)}updateFullNode(e,n,r){let i;if(n.isLeafNode()||n.isEmpty())i=A.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=A.EMPTY_NODE.withIndex(this.index_);let s;this.reverse_?s=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):s=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;s.hasNext()&&o<this.limit_;){const l=s.getNext();if(this.withinDirectionalStart(l))if(this.withinDirectionalEnd(l))i=i.updateImmediateChild(l.name,l.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(A.EMPTY_NODE);let s;this.reverse_?s=i.getReverseIterator(this.index_):s=i.getIterator(this.index_);let o=0;for(;s.hasNext();){const l=s.getNext();o<this.limit_&&this.withinDirectionalStart(l)&&this.withinDirectionalEnd(l)?o++:i=i.updateImmediateChild(l.name,A.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,r,i,s){let o;if(this.reverse_){const c=this.index_.getCompare();o=(f,_)=>c(_,f)}else o=this.index_.getCompare();const l=e;S(l.numChildren()===this.limit_,"");const a=new F(n,r),u=this.reverse_?l.getFirstChild(this.index_):l.getLastChild(this.index_),d=this.rangedFilter_.matches(a);if(l.hasChild(n)){const c=l.getImmediateChild(n);let f=i.getChildAfterChild(this.index_,u,this.reverse_);for(;f!=null&&(f.name===n||l.hasChild(f.name));)f=i.getChildAfterChild(this.index_,f,this.reverse_);const _=f==null?1:o(f,a);if(d&&!r.isEmpty()&&_>=0)return s!=null&&s.trackChildChange(Os(n,r,c)),l.updateImmediateChild(n,r);{s!=null&&s.trackChildChange(Ps(n,c));const w=l.updateImmediateChild(n,A.EMPTY_NODE);return f!=null&&this.rangedFilter_.matches(f)?(s!=null&&s.trackChildChange(gi(f.name,f.node)),w.updateImmediateChild(f.name,f.node)):w}}else return r.isEmpty()?e:d&&o(u,a)>=0?(s!=null&&(s.trackChildChange(Ps(u.name,u.node)),s.trackChildChange(gi(n,r))),l.updateImmediateChild(n,r).updateImmediateChild(u.name,A.EMPTY_NODE)):e}}/**
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
 */class sf{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=ae}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return S(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return S(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:mi}hasEnd(){return this.endSet_}getIndexEndValue(){return S(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return S(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:hr}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return S(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===ae}copy(){const e=new sf;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function TT(t){return t.loadsAllData()?new rf(t.getIndex()):t.hasLimit()?new IT(t):new As(t)}function Up(t){const e={};if(t.isDefault())return e;let n;if(t.index_===ae?n="$priority":t.index_===ST?n="$value":t.index_===ri?n="$key":(S(t.index_ instanceof ET,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=ye(n),t.startSet_){const r=t.startAfterSet_?"startAfter":"startAt";e[r]=ye(t.indexStartValue_),t.startNameSet_&&(e[r]+=","+ye(t.indexStartName_))}if(t.endSet_){const r=t.endBeforeSet_?"endBefore":"endAt";e[r]=ye(t.indexEndValue_),t.endNameSet_&&(e[r]+=","+ye(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function jp(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==ae&&(e.i=t.index_.toString()),e}/**
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
 */class kl extends Mv{constructor(e,n,r,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=i,this.log_=Ks("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(S(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,r,i){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=kl.getListenId_(e,r),l={};this.listens_[o]=l;const a=Up(e._queryParams);this.restRequest_(s+".json",a,(u,d)=>{let c=d;if(u===404&&(c=null,u=null),u===null&&this.onDataUpdate_(s,c,!1,r),fi(this.listens_,o)===l){let f;u?u===401?f="permission_denied":f="rest_error:"+u:f="ok",i(f,null)}})}unlisten(e,n){const r=kl.getListenId_(e,n);delete this.listens_[r]}get(e){const n=Up(e._queryParams),r=e._path.toString(),i=new zs;return this.restRequest_(r+".json",n,(s,o)=>{let l=o;s===404&&(l=null,s=null),s===null?(this.onDataUpdate_(r,l,!1,null),i.resolve(l)):i.reject(new Error(l))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,s])=>{i&&i.accessToken&&(n.auth=i.accessToken),s&&s.token&&(n.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+ki(n);this.log_("Sending REST request for "+o);const l=new XMLHttpRequest;l.onreadystatechange=()=>{if(r&&l.readyState===4){this.log_("REST Response for "+o+" received. status:",l.status,"response:",l.responseText);let a=null;if(l.status>=200&&l.status<300){try{a=ks(l.responseText)}catch{Fe("Failed to parse JSON response for "+o+": "+l.responseText)}r(null,a)}else l.status!==401&&l.status!==404&&Fe("Got unsuccessful REST response for "+o+" Status: "+l.status),r(l.status);r=null}},l.open("GET",o,!0),l.send()})}}/**
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
 */class NT{constructor(){this.rootNode_=A.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
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
 */function Il(){return{value:null,children:new Map}}function Hv(t,e,n){if(U(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=b(e);t.children.has(r)||t.children.set(r,Il());const i=t.children.get(r);e=X(e),Hv(i,e,n)}}function Cc(t,e,n){t.value!==null?n(e,t.value):xT(t,(r,i)=>{const s=new K(e.toString()+"/"+r);Cc(i,s,n)})}function xT(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
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
 */class RT{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&Te(this.last_,(r,i)=>{n[r]=n[r]-i}),this.last_=e,n}}/**
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
 */const zp=10*1e3,PT=30*1e3,OT=5*60*1e3;class AT{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new RT(e);const r=zp+(PT-zp)*Math.random();rs(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;Te(e,(i,s)=>{s>0&&Mt(this.statsToReport_,i)&&(n[i]=s,r=!0)}),r&&this.server_.reportStats(n),rs(this.reportStats_.bind(this),Math.floor(Math.random()*2*OT))}}/**
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
 */var gt;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(gt||(gt={}));function of(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function lf(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function af(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
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
 */class Tl{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=gt.ACK_USER_WRITE,this.source=of()}operationForChild(e){if(U(this.path)){if(this.affectedTree.value!=null)return S(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new K(e));return new Tl($(),n,this.revert)}}else return S(b(this.path)===e,"operationForChild called for unrelated child."),new Tl(X(this.path),this.affectedTree,this.revert)}}/**
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
 */class Ds{constructor(e,n){this.source=e,this.path=n,this.type=gt.LISTEN_COMPLETE}operationForChild(e){return U(this.path)?new Ds(this.source,$()):new Ds(this.source,X(this.path))}}/**
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
 */class pr{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=gt.OVERWRITE}operationForChild(e){return U(this.path)?new pr(this.source,$(),this.snap.getImmediateChild(e)):new pr(this.source,X(this.path),this.snap)}}/**
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
 */class _i{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=gt.MERGE}operationForChild(e){if(U(this.path)){const n=this.children.subtree(new K(e));return n.isEmpty()?null:n.value?new pr(this.source,$(),n.value):new _i(this.source,$(),n)}else return S(b(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new _i(this.source,X(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class mr{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(U(e))return this.isFullyInitialized()&&!this.filtered_;const n=b(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
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
 */class DT{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function MT(t,e,n,r){const i=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(kT(o.childName,o.snapshotNode))}),$i(t,i,"child_removed",e,r,n),$i(t,i,"child_added",e,r,n),$i(t,i,"child_moved",s,r,n),$i(t,i,"child_changed",e,r,n),$i(t,i,"value",e,r,n),i}function $i(t,e,n,r,i,s){const o=r.filter(l=>l.type===n);o.sort((l,a)=>bT(t,l,a)),o.forEach(l=>{const a=LT(t,l,s);i.forEach(u=>{u.respondsTo(l.type)&&e.push(u.createEvent(a,t.query_))})})}function LT(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function bT(t,e,n){if(e.childName==null||n.childName==null)throw Si("Should only compare child_ events.");const r=new F(e.childName,e.snapshotNode),i=new F(n.childName,n.snapshotNode);return t.index_.compare(r,i)}/**
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
 */function la(t,e){return{eventCache:t,serverCache:e}}function is(t,e,n,r){return la(new mr(e,n,r),t.serverCache)}function Vv(t,e,n,r){return la(t.eventCache,new mr(e,n,r))}function Sc(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function gr(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
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
 */let au;const FT=()=>(au||(au=new He(EI)),au);class Y{constructor(e,n=FT()){this.value=e,this.children=n}static fromObject(e){let n=new Y(null);return Te(e,(r,i)=>{n=n.set(new K(r),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:$(),value:this.value};if(U(e))return null;{const r=b(e),i=this.children.get(r);if(i!==null){const s=i.findRootMostMatchingPathAndValue(X(e),n);return s!=null?{path:le(new K(r),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(U(e))return this;{const n=b(e),r=this.children.get(n);return r!==null?r.subtree(X(e)):new Y(null)}}set(e,n){if(U(e))return new Y(n,this.children);{const r=b(e),s=(this.children.get(r)||new Y(null)).set(X(e),n),o=this.children.insert(r,s);return new Y(this.value,o)}}remove(e){if(U(e))return this.children.isEmpty()?new Y(null):new Y(null,this.children);{const n=b(e),r=this.children.get(n);if(r){const i=r.remove(X(e));let s;return i.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,i),this.value===null&&s.isEmpty()?new Y(null):new Y(this.value,s)}else return this}}get(e){if(U(e))return this.value;{const n=b(e),r=this.children.get(n);return r?r.get(X(e)):null}}setTree(e,n){if(U(e))return n;{const r=b(e),s=(this.children.get(r)||new Y(null)).setTree(X(e),n);let o;return s.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,s),new Y(this.value,o)}}fold(e){return this.fold_($(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((i,s)=>{r[i]=s.fold_(le(e,i),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,$(),n)}findOnPath_(e,n,r){const i=this.value?r(n,this.value):!1;if(i)return i;if(U(e))return null;{const s=b(e),o=this.children.get(s);return o?o.findOnPath_(X(e),le(n,s),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,$(),n)}foreachOnPath_(e,n,r){if(U(e))return this;{this.value&&r(n,this.value);const i=b(e),s=this.children.get(i);return s?s.foreachOnPath_(X(e),le(n,i),r):new Y(null)}}foreach(e){this.foreach_($(),e)}foreach_(e,n){this.children.inorderTraversal((r,i)=>{i.foreach_(le(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
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
 */class yt{constructor(e){this.writeTree_=e}static empty(){return new yt(new Y(null))}}function ss(t,e,n){if(U(e))return new yt(new Y(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const i=r.path;let s=r.value;const o=We(i,e);return s=s.updateChild(o,n),new yt(t.writeTree_.set(i,s))}else{const i=new Y(n),s=t.writeTree_.setTree(e,i);return new yt(s)}}}function kc(t,e,n){let r=t;return Te(n,(i,s)=>{r=ss(r,le(e,i),s)}),r}function $p(t,e){if(U(e))return yt.empty();{const n=t.writeTree_.setTree(e,new Y(null));return new yt(n)}}function Ic(t,e){return Cr(t,e)!=null}function Cr(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(We(n.path,e)):null}function Bp(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(ae,(r,i)=>{e.push(new F(r,i))}):t.writeTree_.children.inorderTraversal((r,i)=>{i.value!=null&&e.push(new F(r,i.value))}),e}function Rn(t,e){if(U(e))return t;{const n=Cr(t,e);return n!=null?new yt(new Y(n)):new yt(t.writeTree_.subtree(e))}}function Tc(t){return t.writeTree_.isEmpty()}function vi(t,e){return Gv($(),t.writeTree_,e)}function Gv(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((i,s)=>{i===".priority"?(S(s.value!==null,"Priority writes must always be leaf nodes"),r=s.value):n=Gv(le(t,i),s,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(le(t,".priority"),r)),n}}/**
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
 */function uf(t,e){return Yv(e,t)}function UT(t,e,n,r,i){S(r>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:i}),i&&(t.visibleWrites=ss(t.visibleWrites,e,n)),t.lastWriteId=r}function jT(t,e,n,r){S(r>t.lastWriteId,"Stacking an older merge on top of newer ones"),t.allWrites.push({path:e,children:n,writeId:r,visible:!0}),t.visibleWrites=kc(t.visibleWrites,e,n),t.lastWriteId=r}function zT(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function $T(t,e){const n=t.allWrites.findIndex(l=>l.writeId===e);S(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let i=r.visible,s=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const l=t.allWrites[o];l.visible&&(o>=n&&BT(l,r.path)?i=!1:ot(r.path,l.path)&&(s=!0)),o--}if(i){if(s)return WT(t),!0;if(r.snap)t.visibleWrites=$p(t.visibleWrites,r.path);else{const l=r.children;Te(l,a=>{t.visibleWrites=$p(t.visibleWrites,le(r.path,a))})}return!0}else return!1}function BT(t,e){if(t.snap)return ot(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&ot(le(t.path,n),e))return!0;return!1}function WT(t){t.visibleWrites=Kv(t.allWrites,HT,$()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function HT(t){return t.visible}function Kv(t,e,n){let r=yt.empty();for(let i=0;i<t.length;++i){const s=t[i];if(e(s)){const o=s.path;let l;if(s.snap)ot(n,o)?(l=We(n,o),r=ss(r,l,s.snap)):ot(o,n)&&(l=We(o,n),r=ss(r,$(),s.snap.getChild(l)));else if(s.children){if(ot(n,o))l=We(n,o),r=kc(r,l,s.children);else if(ot(o,n))if(l=We(o,n),U(l))r=kc(r,$(),s.children);else{const a=fi(s.children,b(l));if(a){const u=a.getChild(X(l));r=ss(r,$(),u)}}}else throw Si("WriteRecord should have .snap or .children")}}return r}function qv(t,e,n,r,i){if(!r&&!i){const s=Cr(t.visibleWrites,e);if(s!=null)return s;{const o=Rn(t.visibleWrites,e);if(Tc(o))return n;if(n==null&&!Ic(o,$()))return null;{const l=n||A.EMPTY_NODE;return vi(o,l)}}}else{const s=Rn(t.visibleWrites,e);if(!i&&Tc(s))return n;if(!i&&n==null&&!Ic(s,$()))return null;{const o=function(u){return(u.visible||i)&&(!r||!~r.indexOf(u.writeId))&&(ot(u.path,e)||ot(e,u.path))},l=Kv(t.allWrites,o,e),a=n||A.EMPTY_NODE;return vi(l,a)}}}function VT(t,e,n){let r=A.EMPTY_NODE;const i=Cr(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(ae,(s,o)=>{r=r.updateImmediateChild(s,o)}),r;if(n){const s=Rn(t.visibleWrites,e);return n.forEachChild(ae,(o,l)=>{const a=vi(Rn(s,new K(o)),l);r=r.updateImmediateChild(o,a)}),Bp(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const s=Rn(t.visibleWrites,e);return Bp(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function GT(t,e,n,r,i){S(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=le(e,n);if(Ic(t.visibleWrites,s))return null;{const o=Rn(t.visibleWrites,s);return Tc(o)?i.getChild(n):vi(o,i.getChild(n))}}function KT(t,e,n,r){const i=le(e,n),s=Cr(t.visibleWrites,i);if(s!=null)return s;if(r.isCompleteForChild(n)){const o=Rn(t.visibleWrites,i);return vi(o,r.getNode().getImmediateChild(n))}else return null}function qT(t,e){return Cr(t.visibleWrites,e)}function QT(t,e,n,r,i,s,o){let l;const a=Rn(t.visibleWrites,e),u=Cr(a,$());if(u!=null)l=u;else if(n!=null)l=vi(a,n);else return[];if(l=l.withIndex(o),!l.isEmpty()&&!l.isLeafNode()){const d=[],c=o.getCompare(),f=s?l.getReverseIteratorFrom(r,o):l.getIteratorFrom(r,o);let _=f.getNext();for(;_&&d.length<i;)c(_,r)!==0&&d.push(_),_=f.getNext();return d}else return[]}function YT(){return{visibleWrites:yt.empty(),allWrites:[],lastWriteId:-1}}function Nl(t,e,n,r){return qv(t.writeTree,t.treePath,e,n,r)}function cf(t,e){return VT(t.writeTree,t.treePath,e)}function Wp(t,e,n,r){return GT(t.writeTree,t.treePath,e,n,r)}function xl(t,e){return qT(t.writeTree,le(t.treePath,e))}function XT(t,e,n,r,i,s){return QT(t.writeTree,t.treePath,e,n,r,i,s)}function df(t,e,n){return KT(t.writeTree,t.treePath,e,n)}function Qv(t,e){return Yv(le(t.treePath,e),t.writeTree)}function Yv(t,e){return{treePath:t,writeTree:e}}/**
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
 */class JT{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;S(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),S(r!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(r);if(i){const s=i.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(r,Os(r,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(r,Ps(r,i.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(r,gi(r,e.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(r,Os(r,e.snapshotNode,i.oldSnap));else throw Si("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class ZT{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const Xv=new ZT;class ff{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new mr(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return df(this.writes_,e,r)}}getChildAfterChild(e,n,r){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:gr(this.viewCache_),s=XT(this.writes_,i,n,1,r,e);return s.length===0?null:s[0]}}/**
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
 */function e1(t){return{filter:t}}function t1(t,e){S(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),S(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function n1(t,e,n,r,i){const s=new JT;let o,l;if(n.type===gt.OVERWRITE){const u=n;u.source.fromUser?o=Nc(t,e,u.path,u.snap,r,i,s):(S(u.source.fromServer,"Unknown source."),l=u.source.tagged||e.serverCache.isFiltered()&&!U(u.path),o=Rl(t,e,u.path,u.snap,r,i,l,s))}else if(n.type===gt.MERGE){const u=n;u.source.fromUser?o=i1(t,e,u.path,u.children,r,i,s):(S(u.source.fromServer,"Unknown source."),l=u.source.tagged||e.serverCache.isFiltered(),o=xc(t,e,u.path,u.children,r,i,l,s))}else if(n.type===gt.ACK_USER_WRITE){const u=n;u.revert?o=l1(t,e,u.path,r,i,s):o=s1(t,e,u.path,u.affectedTree,r,i,s)}else if(n.type===gt.LISTEN_COMPLETE)o=o1(t,e,n.path,r,s);else throw Si("Unknown operation type: "+n.type);const a=s.getChanges();return r1(e,o,a),{viewCache:o,changes:a}}function r1(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=Sc(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&n.push(Wv(Sc(e)))}}function Jv(t,e,n,r,i,s){const o=e.eventCache;if(xl(r,n)!=null)return e;{let l,a;if(U(n))if(S(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const u=gr(e),d=u instanceof A?u:A.EMPTY_NODE,c=cf(r,d);l=t.filter.updateFullNode(e.eventCache.getNode(),c,s)}else{const u=Nl(r,gr(e));l=t.filter.updateFullNode(e.eventCache.getNode(),u,s)}else{const u=b(n);if(u===".priority"){S(An(n)===1,"Can't have a priority with additional path components");const d=o.getNode();a=e.serverCache.getNode();const c=Wp(r,n,d,a);c!=null?l=t.filter.updatePriority(d,c):l=o.getNode()}else{const d=X(n);let c;if(o.isCompleteForChild(u)){a=e.serverCache.getNode();const f=Wp(r,n,o.getNode(),a);f!=null?c=o.getNode().getImmediateChild(u).updateChild(d,f):c=o.getNode().getImmediateChild(u)}else c=df(r,u,e.serverCache);c!=null?l=t.filter.updateChild(o.getNode(),u,c,d,i,s):l=o.getNode()}}return is(e,l,o.isFullyInitialized()||U(n),t.filter.filtersNodes())}}function Rl(t,e,n,r,i,s,o,l){const a=e.serverCache;let u;const d=o?t.filter:t.filter.getIndexedFilter();if(U(n))u=d.updateFullNode(a.getNode(),r,null);else if(d.filtersNodes()&&!a.isFiltered()){const _=a.getNode().updateChild(n,r);u=d.updateFullNode(a.getNode(),_,null)}else{const _=b(n);if(!a.isCompleteForPath(n)&&An(n)>1)return e;const v=X(n),R=a.getNode().getImmediateChild(_).updateChild(v,r);_===".priority"?u=d.updatePriority(a.getNode(),R):u=d.updateChild(a.getNode(),_,R,v,Xv,null)}const c=Vv(e,u,a.isFullyInitialized()||U(n),d.filtersNodes()),f=new ff(i,c,s);return Jv(t,c,n,i,f,l)}function Nc(t,e,n,r,i,s,o){const l=e.eventCache;let a,u;const d=new ff(i,e,s);if(U(n))u=t.filter.updateFullNode(e.eventCache.getNode(),r,o),a=is(e,u,!0,t.filter.filtersNodes());else{const c=b(n);if(c===".priority")u=t.filter.updatePriority(e.eventCache.getNode(),r),a=is(e,u,l.isFullyInitialized(),l.isFiltered());else{const f=X(n),_=l.getNode().getImmediateChild(c);let v;if(U(f))v=r;else{const w=d.getCompleteChild(c);w!=null?Zd(f)===".priority"&&w.getChild(bv(f)).isEmpty()?v=w:v=w.updateChild(f,r):v=A.EMPTY_NODE}if(_.equals(v))a=e;else{const w=t.filter.updateChild(l.getNode(),c,v,f,d,o);a=is(e,w,l.isFullyInitialized(),t.filter.filtersNodes())}}}return a}function Hp(t,e){return t.eventCache.isCompleteForChild(e)}function i1(t,e,n,r,i,s,o){let l=e;return r.foreach((a,u)=>{const d=le(n,a);Hp(e,b(d))&&(l=Nc(t,l,d,u,i,s,o))}),r.foreach((a,u)=>{const d=le(n,a);Hp(e,b(d))||(l=Nc(t,l,d,u,i,s,o))}),l}function Vp(t,e,n){return n.foreach((r,i)=>{e=e.updateChild(r,i)}),e}function xc(t,e,n,r,i,s,o,l){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let a=e,u;U(n)?u=r:u=new Y(null).setTree(n,r);const d=e.serverCache.getNode();return u.children.inorderTraversal((c,f)=>{if(d.hasChild(c)){const _=e.serverCache.getNode().getImmediateChild(c),v=Vp(t,_,f);a=Rl(t,a,new K(c),v,i,s,o,l)}}),u.children.inorderTraversal((c,f)=>{const _=!e.serverCache.isCompleteForChild(c)&&f.value===null;if(!d.hasChild(c)&&!_){const v=e.serverCache.getNode().getImmediateChild(c),w=Vp(t,v,f);a=Rl(t,a,new K(c),w,i,s,o,l)}}),a}function s1(t,e,n,r,i,s,o){if(xl(i,n)!=null)return e;const l=e.serverCache.isFiltered(),a=e.serverCache;if(r.value!=null){if(U(n)&&a.isFullyInitialized()||a.isCompleteForPath(n))return Rl(t,e,n,a.getNode().getChild(n),i,s,l,o);if(U(n)){let u=new Y(null);return a.getNode().forEachChild(ri,(d,c)=>{u=u.set(new K(d),c)}),xc(t,e,n,u,i,s,l,o)}else return e}else{let u=new Y(null);return r.foreach((d,c)=>{const f=le(n,d);a.isCompleteForPath(f)&&(u=u.set(d,a.getNode().getChild(f)))}),xc(t,e,n,u,i,s,l,o)}}function o1(t,e,n,r,i){const s=e.serverCache,o=Vv(e,s.getNode(),s.isFullyInitialized()||U(n),s.isFiltered());return Jv(t,o,n,r,Xv,i)}function l1(t,e,n,r,i,s){let o;if(xl(r,n)!=null)return e;{const l=new ff(r,e,i),a=e.eventCache.getNode();let u;if(U(n)||b(n)===".priority"){let d;if(e.serverCache.isFullyInitialized())d=Nl(r,gr(e));else{const c=e.serverCache.getNode();S(c instanceof A,"serverChildren would be complete if leaf node"),d=cf(r,c)}d=d,u=t.filter.updateFullNode(a,d,s)}else{const d=b(n);let c=df(r,d,e.serverCache);c==null&&e.serverCache.isCompleteForChild(d)&&(c=a.getImmediateChild(d)),c!=null?u=t.filter.updateChild(a,d,c,X(n),l,s):e.eventCache.getNode().hasChild(d)?u=t.filter.updateChild(a,d,A.EMPTY_NODE,X(n),l,s):u=a,u.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Nl(r,gr(e)),o.isLeafNode()&&(u=t.filter.updateFullNode(u,o,s)))}return o=e.serverCache.isFullyInitialized()||xl(r,$())!=null,is(e,u,o,t.filter.filtersNodes())}}/**
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
 */class a1{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,i=new rf(r.getIndex()),s=TT(r);this.processor_=e1(s);const o=n.serverCache,l=n.eventCache,a=i.updateFullNode(A.EMPTY_NODE,o.getNode(),null),u=s.updateFullNode(A.EMPTY_NODE,l.getNode(),null),d=new mr(a,o.isFullyInitialized(),i.filtersNodes()),c=new mr(u,l.isFullyInitialized(),s.filtersNodes());this.viewCache_=la(c,d),this.eventGenerator_=new DT(this.query_)}get query(){return this.query_}}function u1(t){return t.viewCache_.serverCache.getNode()}function c1(t,e){const n=gr(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!U(e)&&!n.getImmediateChild(b(e)).isEmpty())?n.getChild(e):null}function Gp(t){return t.eventRegistrations_.length===0}function d1(t,e){t.eventRegistrations_.push(e)}function Kp(t,e,n){const r=[];if(n){S(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(s=>{const o=s.createCancelEvent(n,i);o&&r.push(o)})}if(e){let i=[];for(let s=0;s<t.eventRegistrations_.length;++s){const o=t.eventRegistrations_[s];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(s+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return r}function qp(t,e,n,r){e.type===gt.MERGE&&e.source.queryId!==null&&(S(gr(t.viewCache_),"We should always have a full cache before handling merges"),S(Sc(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,s=n1(t.processor_,i,e,n,r);return t1(t.processor_,s.viewCache),S(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=s.viewCache,Zv(t,s.changes,s.viewCache.eventCache.getNode(),null)}function f1(t,e){const n=t.viewCache_.eventCache,r=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(ae,(s,o)=>{r.push(gi(s,o))}),n.isFullyInitialized()&&r.push(Wv(n.getNode())),Zv(t,r,n.getNode(),e)}function Zv(t,e,n,r){const i=r?[r]:t.eventRegistrations_;return MT(t.eventGenerator_,e,n,i)}/**
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
 */let Pl;class h1{constructor(){this.views=new Map}}function p1(t){S(!Pl,"__referenceConstructor has already been defined"),Pl=t}function m1(){return S(Pl,"Reference.ts has not been loaded"),Pl}function g1(t){return t.views.size===0}function hf(t,e,n,r){const i=e.source.queryId;if(i!==null){const s=t.views.get(i);return S(s!=null,"SyncTree gave us an op for an invalid query."),qp(s,e,n,r)}else{let s=[];for(const o of t.views.values())s=s.concat(qp(o,e,n,r));return s}}function _1(t,e,n,r,i){const s=e._queryIdentifier,o=t.views.get(s);if(!o){let l=Nl(n,i?r:null),a=!1;l?a=!0:r instanceof A?(l=cf(n,r),a=!1):(l=A.EMPTY_NODE,a=!1);const u=la(new mr(l,a,!1),new mr(r,i,!1));return new a1(e,u)}return o}function v1(t,e,n,r,i,s){const o=_1(t,e,r,i,s);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),d1(o,n),f1(o,n)}function y1(t,e,n,r){const i=e._queryIdentifier,s=[];let o=[];const l=Dn(t);if(i==="default")for(const[a,u]of t.views.entries())o=o.concat(Kp(u,n,r)),Gp(u)&&(t.views.delete(a),u.query._queryParams.loadsAllData()||s.push(u.query));else{const a=t.views.get(i);a&&(o=o.concat(Kp(a,n,r)),Gp(a)&&(t.views.delete(i),a.query._queryParams.loadsAllData()||s.push(a.query)))}return l&&!Dn(t)&&s.push(new(m1())(e._repo,e._path)),{removed:s,events:o}}function ey(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function ii(t,e){let n=null;for(const r of t.views.values())n=n||c1(r,e);return n}function ty(t,e){if(e._queryParams.loadsAllData())return aa(t);{const r=e._queryIdentifier;return t.views.get(r)}}function ny(t,e){return ty(t,e)!=null}function Dn(t){return aa(t)!=null}function aa(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
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
 */let Ol;function w1(t){S(!Ol,"__referenceConstructor has already been defined"),Ol=t}function E1(){return S(Ol,"Reference.ts has not been loaded"),Ol}let C1=1;class Qp{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Y(null),this.pendingWriteTree_=YT(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function ry(t,e,n,r,i){return UT(t.pendingWriteTree_,e,n,r,i),i?Ti(t,new pr(of(),e,n)):[]}function S1(t,e,n,r){jT(t.pendingWriteTree_,e,n,r);const i=Y.fromObject(n);return Ti(t,new _i(of(),e,i))}function _n(t,e,n=!1){const r=zT(t.pendingWriteTree_,e);if($T(t.pendingWriteTree_,e)){let s=new Y(null);return r.snap!=null?s=s.set($(),!0):Te(r.children,o=>{s=s.set(new K(o),!0)}),Ti(t,new Tl(r.path,s,n))}else return[]}function ua(t,e,n){return Ti(t,new pr(lf(),e,n))}function k1(t,e,n){const r=Y.fromObject(n);return Ti(t,new _i(lf(),e,r))}function I1(t,e){return Ti(t,new Ds(lf(),e))}function T1(t,e,n){const r=mf(t,n);if(r){const i=gf(r),s=i.path,o=i.queryId,l=We(s,e),a=new Ds(af(o),l);return _f(t,s,a)}else return[]}function Rc(t,e,n,r,i=!1){const s=e._path,o=t.syncPointTree_.get(s);let l=[];if(o&&(e._queryIdentifier==="default"||ny(o,e))){const a=y1(o,e,n,r);g1(o)&&(t.syncPointTree_=t.syncPointTree_.remove(s));const u=a.removed;if(l=a.events,!i){const d=u.findIndex(f=>f._queryParams.loadsAllData())!==-1,c=t.syncPointTree_.findOnPath(s,(f,_)=>Dn(_));if(d&&!c){const f=t.syncPointTree_.subtree(s);if(!f.isEmpty()){const _=R1(f);for(let v=0;v<_.length;++v){const w=_[v],R=w.query,p=oy(t,w);t.listenProvider_.startListening(os(R),Al(t,R),p.hashFn,p.onComplete)}}}!c&&u.length>0&&!r&&(d?t.listenProvider_.stopListening(os(e),null):u.forEach(f=>{const _=t.queryToTagMap.get(ca(f));t.listenProvider_.stopListening(os(f),_)}))}P1(t,u)}return l}function N1(t,e,n,r){const i=mf(t,r);if(i!=null){const s=gf(i),o=s.path,l=s.queryId,a=We(o,e),u=new pr(af(l),a,n);return _f(t,o,u)}else return[]}function x1(t,e,n,r){const i=mf(t,r);if(i){const s=gf(i),o=s.path,l=s.queryId,a=We(o,e),u=Y.fromObject(n),d=new _i(af(l),a,u);return _f(t,o,d)}else return[]}function Yp(t,e,n,r=!1){const i=e._path;let s=null,o=!1;t.syncPointTree_.foreachOnPath(i,(f,_)=>{const v=We(f,i);s=s||ii(_,v),o=o||Dn(_)});let l=t.syncPointTree_.get(i);l?(o=o||Dn(l),s=s||ii(l,$())):(l=new h1,t.syncPointTree_=t.syncPointTree_.set(i,l));let a;s!=null?a=!0:(a=!1,s=A.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((_,v)=>{const w=ii(v,$());w&&(s=s.updateImmediateChild(_,w))}));const u=ny(l,e);if(!u&&!e._queryParams.loadsAllData()){const f=ca(e);S(!t.queryToTagMap.has(f),"View does not exist, but we have a tag");const _=O1();t.queryToTagMap.set(f,_),t.tagToQueryMap.set(_,f)}const d=uf(t.pendingWriteTree_,i);let c=v1(l,e,n,d,s,a);if(!u&&!o&&!r){const f=ty(l,e);c=c.concat(A1(t,e,f))}return c}function pf(t,e,n){const i=t.pendingWriteTree_,s=t.syncPointTree_.findOnPath(e,(o,l)=>{const a=We(o,e),u=ii(l,a);if(u)return u});return qv(i,e,s,n,!0)}function Ti(t,e){return iy(e,t.syncPointTree_,null,uf(t.pendingWriteTree_,$()))}function iy(t,e,n,r){if(U(t.path))return sy(t,e,n,r);{const i=e.get($());n==null&&i!=null&&(n=ii(i,$()));let s=[];const o=b(t.path),l=t.operationForChild(o),a=e.children.get(o);if(a&&l){const u=n?n.getImmediateChild(o):null,d=Qv(r,o);s=s.concat(iy(l,a,u,d))}return i&&(s=s.concat(hf(i,t,r,n))),s}}function sy(t,e,n,r){const i=e.get($());n==null&&i!=null&&(n=ii(i,$()));let s=[];return e.children.inorderTraversal((o,l)=>{const a=n?n.getImmediateChild(o):null,u=Qv(r,o),d=t.operationForChild(o);d&&(s=s.concat(sy(d,l,a,u)))}),i&&(s=s.concat(hf(i,t,r,n))),s}function oy(t,e){const n=e.query,r=Al(t,n);return{hashFn:()=>(u1(e)||A.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return r?T1(t,n._path,r):I1(t,n._path);{const s=kI(i,n);return Rc(t,n,null,s)}}}}function Al(t,e){const n=ca(e);return t.queryToTagMap.get(n)}function ca(t){return t._path.toString()+"$"+t._queryIdentifier}function mf(t,e){return t.tagToQueryMap.get(e)}function gf(t){const e=t.indexOf("$");return S(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new K(t.substr(0,e))}}function _f(t,e,n){const r=t.syncPointTree_.get(e);S(r,"Missing sync point for query tag that we're tracking");const i=uf(t.pendingWriteTree_,e);return hf(r,n,i,null)}function R1(t){return t.fold((e,n,r)=>{if(n&&Dn(n))return[aa(n)];{let i=[];return n&&(i=ey(n)),Te(r,(s,o)=>{i=i.concat(o)}),i}})}function os(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(E1())(t._repo,t._path):t}function P1(t,e){for(let n=0;n<e.length;++n){const r=e[n];if(!r._queryParams.loadsAllData()){const i=ca(r),s=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(s)}}}function O1(){return C1++}function A1(t,e,n){const r=e._path,i=Al(t,e),s=oy(t,n),o=t.listenProvider_.startListening(os(e),i,s.hashFn,s.onComplete),l=t.syncPointTree_.subtree(r);if(i)S(!Dn(l.value),"If we're adding a query, it shouldn't be shadowed");else{const a=l.fold((u,d,c)=>{if(!U(u)&&d&&Dn(d))return[aa(d).query];{let f=[];return d&&(f=f.concat(ey(d).map(_=>_.query))),Te(c,(_,v)=>{f=f.concat(v)}),f}});for(let u=0;u<a.length;++u){const d=a[u];t.listenProvider_.stopListening(os(d),Al(t,d))}}return o}/**
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
 */class vf{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new vf(n)}node(){return this.node_}}class yf{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=le(this.path_,e);return new yf(this.syncTree_,n)}node(){return pf(this.syncTree_,this.path_)}}const D1=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},Xp=function(t,e,n){if(!t||typeof t!="object")return t;if(S(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return M1(t[".sv"],e,n);if(typeof t[".sv"]=="object")return L1(t[".sv"],e);S(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},M1=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:S(!1,"Unexpected server value: "+t)}},L1=function(t,e,n){t.hasOwnProperty("increment")||S(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&S(!1,"Unexpected increment value: "+r);const i=e.node();if(S(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const o=i.getValue();return typeof o!="number"?r:o+r},ly=function(t,e,n,r){return wf(e,new yf(n,t),r)},ay=function(t,e,n){return wf(t,new vf(e),n)};function wf(t,e,n){const r=t.getPriority().val(),i=Xp(r,e.getImmediateChild(".priority"),n);let s;if(t.isLeafNode()){const o=t,l=Xp(o.getValue(),e,n);return l!==o.getValue()||i!==o.getPriority().val()?new me(l,ve(i)):t}else{const o=t;return s=o,i!==o.getPriority().val()&&(s=s.updatePriority(new me(i))),o.forEachChild(ae,(l,a)=>{const u=wf(a,e.getImmediateChild(l),n);u!==a&&(s=s.updateImmediateChild(l,u))}),s}}/**
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
 */class Ef{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function Cf(t,e){let n=e instanceof K?e:new K(e),r=t,i=b(n);for(;i!==null;){const s=fi(r.node.children,i)||{children:{},childCount:0};r=new Ef(i,r,s),n=X(n),i=b(n)}return r}function Ni(t){return t.node.value}function uy(t,e){t.node.value=e,Pc(t)}function cy(t){return t.node.childCount>0}function b1(t){return Ni(t)===void 0&&!cy(t)}function da(t,e){Te(t.node.children,(n,r)=>{e(new Ef(n,t,r))})}function dy(t,e,n,r){n&&!r&&e(t),da(t,i=>{dy(i,e,!0,r)}),n&&r&&e(t)}function F1(t,e,n){let r=n?t:t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function Qs(t){return new K(t.parent===null?t.name:Qs(t.parent)+"/"+t.name)}function Pc(t){t.parent!==null&&U1(t.parent,t.name,t)}function U1(t,e,n){const r=b1(n),i=Mt(t.node.children,e);r&&i?(delete t.node.children[e],t.node.childCount--,Pc(t)):!r&&!i&&(t.node.children[e]=n.node,t.node.childCount++,Pc(t))}/**
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
 */const j1=/[\[\].#$\/\u0000-\u001F\u007F]/,z1=/[\[\].#$\u0000-\u001F\u007F]/,uu=10*1024*1024,Sf=function(t){return typeof t=="string"&&t.length!==0&&!j1.test(t)},fy=function(t){return typeof t=="string"&&t.length!==0&&!z1.test(t)},$1=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),fy(t)},B1=function(t){return t===null||typeof t=="string"||typeof t=="number"&&!qd(t)||t&&typeof t=="object"&&Mt(t,".sv")},hy=function(t,e,n,r){r&&e===void 0||fa(Zl(t,"value"),e,n)},fa=function(t,e,n){const r=n instanceof K?new iT(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Vn(r));if(typeof e=="function")throw new Error(t+"contains a function "+Vn(r)+" with contents = "+e.toString());if(qd(e))throw new Error(t+"contains "+e.toString()+" "+Vn(r));if(typeof e=="string"&&e.length>uu/3&&ea(e)>uu)throw new Error(t+"contains a string greater than "+uu+" utf8 bytes "+Vn(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,s=!1;if(Te(e,(o,l)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!Sf(o)))throw new Error(t+" contains an invalid key ("+o+") "+Vn(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);sT(r,o),fa(t,l,r),oT(r)}),i&&s)throw new Error(t+' contains ".value" child '+Vn(r)+" in addition to actual children.")}},W1=function(t,e){let n,r;for(n=0;n<e.length;n++){r=e[n];const s=Rs(r);for(let o=0;o<s.length;o++)if(!(s[o]===".priority"&&o===s.length-1)){if(!Sf(s[o]))throw new Error(t+"contains an invalid key ("+s[o]+") in path "+r.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(rT);let i=null;for(n=0;n<e.length;n++){if(r=e[n],i!==null&&ot(i,r))throw new Error(t+"contains a path "+i.toString()+" that is ancestor of another path "+r.toString());i=r}},H1=function(t,e,n,r){if(r&&e===void 0)return;const i=Zl(t,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(i+" must be an object containing the children to replace.");const s=[];Te(e,(o,l)=>{const a=new K(o);if(fa(i,l,le(n,a)),Zd(a)===".priority"&&!B1(l))throw new Error(i+"contains an invalid value for '"+a.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");s.push(a)}),W1(i,s)},py=function(t,e,n,r){if(!(r&&n===void 0)&&!fy(n))throw new Error(Zl(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},V1=function(t,e,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),py(t,e,n,r)},my=function(t,e){if(b(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},G1=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Sf(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!$1(n))throw new Error(Zl(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class K1{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function ha(t,e){let n=null;for(let r=0;r<e.length;r++){const i=e[r],s=i.getPath();n!==null&&!ef(s,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(i)}n&&t.eventLists_.push(n)}function gy(t,e,n){ha(t,n),_y(t,r=>ef(r,e))}function Ct(t,e,n){ha(t,n),_y(t,r=>ot(r,e)||ot(e,r))}function _y(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const i=t.eventLists_[r];if(i){const s=i.path;e(s)?(q1(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function q1(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();rr&&Se("event: "+n.toString()),Ii(r)}}}/**
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
 */const Q1="repo_interrupt",Y1=25;class X1{constructor(e,n,r,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new K1,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Il(),this.transactionQueueTree_=new Ef,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function J1(t,e,n){if(t.stats_=Xd(t.repoInfo_),t.forceRestClient_||xI())t.server_=new kl(t.repoInfo_,(r,i,s,o)=>{Jp(t,r,i,s,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>Zp(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{ye(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new Vt(t.repoInfo_,e,(r,i,s,o)=>{Jp(t,r,i,s,o)},r=>{Zp(t,r)},r=>{Z1(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=DI(t.repoInfo_,()=>new AT(t.stats_,t.server_)),t.infoData_=new NT,t.infoSyncTree_=new Qp({startListening:(r,i,s,o)=>{let l=[];const a=t.infoData_.getNode(r._path);return a.isEmpty()||(l=ua(t.infoSyncTree_,r._path,a),setTimeout(()=>{o("ok")},0)),l},stopListening:()=>{}}),kf(t,"connected",!1),t.serverSyncTree_=new Qp({startListening:(r,i,s,o)=>(t.server_.listen(r,s,i,(l,a)=>{const u=o(l,a);Ct(t.eventQueue_,r._path,u)}),[]),stopListening:(r,i)=>{t.server_.unlisten(r,i)}})}function vy(t){const n=t.infoData_.getNode(new K(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function pa(t){return D1({timestamp:vy(t)})}function Jp(t,e,n,r,i){t.dataUpdateCount++;const s=new K(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(r){const a=pl(n,u=>ve(u));o=x1(t.serverSyncTree_,s,a,i)}else{const a=ve(n);o=N1(t.serverSyncTree_,s,a,i)}else if(r){const a=pl(n,u=>ve(u));o=k1(t.serverSyncTree_,s,a)}else{const a=ve(n);o=ua(t.serverSyncTree_,s,a)}let l=s;o.length>0&&(l=yi(t,s)),Ct(t.eventQueue_,l,o)}function Zp(t,e){kf(t,"connected",e),e===!1&&nN(t)}function Z1(t,e){Te(e,(n,r)=>{kf(t,n,r)})}function kf(t,e,n){const r=new K("/.info/"+e),i=ve(n);t.infoData_.updateSnapshot(r,i);const s=ua(t.infoSyncTree_,r,i);Ct(t.eventQueue_,r,s)}function If(t){return t.nextWriteId_++}function eN(t,e,n,r,i){ma(t,"set",{path:e.toString(),value:n,priority:r});const s=pa(t),o=ve(n,r),l=pf(t.serverSyncTree_,e),a=ay(o,l,s),u=If(t),d=ry(t.serverSyncTree_,e,a,u,!0);ha(t.eventQueue_,d),t.server_.put(e.toString(),o.val(!0),(f,_)=>{const v=f==="ok";v||Fe("set at "+e+" failed: "+f);const w=_n(t.serverSyncTree_,u,!v);Ct(t.eventQueue_,e,w),Ac(t,i,f,_)});const c=Nf(t,e);yi(t,c),Ct(t.eventQueue_,c,[])}function tN(t,e,n,r){ma(t,"update",{path:e.toString(),value:n});let i=!0;const s=pa(t),o={};if(Te(n,(l,a)=>{i=!1,o[l]=ly(le(e,l),ve(a),t.serverSyncTree_,s)}),i)Se("update() called with empty data.  Don't do anything."),Ac(t,r,"ok",void 0);else{const l=If(t),a=S1(t.serverSyncTree_,e,o,l);ha(t.eventQueue_,a),t.server_.merge(e.toString(),n,(u,d)=>{const c=u==="ok";c||Fe("update at "+e+" failed: "+u);const f=_n(t.serverSyncTree_,l,!c),_=f.length>0?yi(t,e):e;Ct(t.eventQueue_,_,f),Ac(t,r,u,d)}),Te(n,u=>{const d=Nf(t,le(e,u));yi(t,d)}),Ct(t.eventQueue_,e,[])}}function nN(t){ma(t,"onDisconnectEvents");const e=pa(t),n=Il();Cc(t.onDisconnect_,$(),(i,s)=>{const o=ly(i,s,t.serverSyncTree_,e);Hv(n,i,o)});let r=[];Cc(n,$(),(i,s)=>{r=r.concat(ua(t.serverSyncTree_,i,s));const o=Nf(t,i);yi(t,o)}),t.onDisconnect_=Il(),Ct(t.eventQueue_,$(),r)}function rN(t,e,n){let r;b(e._path)===".info"?r=Yp(t.infoSyncTree_,e,n):r=Yp(t.serverSyncTree_,e,n),gy(t.eventQueue_,e._path,r)}function Oc(t,e,n){let r;b(e._path)===".info"?r=Rc(t.infoSyncTree_,e,n):r=Rc(t.serverSyncTree_,e,n),gy(t.eventQueue_,e._path,r)}function iN(t){t.persistentConnection_&&t.persistentConnection_.interrupt(Q1)}function ma(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),Se(n,...e)}function Ac(t,e,n,r){e&&Ii(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let s=i;r&&(s+=": "+r);const o=new Error(s);o.code=i,e(o)}})}function yy(t,e,n){return pf(t.serverSyncTree_,e,n)||A.EMPTY_NODE}function Tf(t,e=t.transactionQueueTree_){if(e||ga(t,e),Ni(e)){const n=Ey(t,e);S(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&sN(t,Qs(e),n)}else cy(e)&&da(e,n=>{Tf(t,n)})}function sN(t,e,n){const r=n.map(u=>u.currentWriteId),i=yy(t,e,r);let s=i;const o=i.hash();for(let u=0;u<n.length;u++){const d=n[u];S(d.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),d.status=1,d.retryCount++;const c=We(e,d.path);s=s.updateChild(c,d.currentOutputSnapshotRaw)}const l=s.val(!0),a=e;t.server_.put(a.toString(),l,u=>{ma(t,"transaction put response",{path:a.toString(),status:u});let d=[];if(u==="ok"){const c=[];for(let f=0;f<n.length;f++)n[f].status=2,d=d.concat(_n(t.serverSyncTree_,n[f].currentWriteId)),n[f].onComplete&&c.push(()=>n[f].onComplete(null,!0,n[f].currentOutputSnapshotResolved)),n[f].unwatcher();ga(t,Cf(t.transactionQueueTree_,e)),Tf(t,t.transactionQueueTree_),Ct(t.eventQueue_,e,d);for(let f=0;f<c.length;f++)Ii(c[f])}else{if(u==="datastale")for(let c=0;c<n.length;c++)n[c].status===3?n[c].status=4:n[c].status=0;else{Fe("transaction at "+a.toString()+" failed: "+u);for(let c=0;c<n.length;c++)n[c].status=4,n[c].abortReason=u}yi(t,e)}},o)}function yi(t,e){const n=wy(t,e),r=Qs(n),i=Ey(t,n);return oN(t,i,r),r}function oN(t,e,n){if(e.length===0)return;const r=[];let i=[];const o=e.filter(l=>l.status===0).map(l=>l.currentWriteId);for(let l=0;l<e.length;l++){const a=e[l],u=We(n,a.path);let d=!1,c;if(S(u!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),a.status===4)d=!0,c=a.abortReason,i=i.concat(_n(t.serverSyncTree_,a.currentWriteId,!0));else if(a.status===0)if(a.retryCount>=Y1)d=!0,c="maxretry",i=i.concat(_n(t.serverSyncTree_,a.currentWriteId,!0));else{const f=yy(t,a.path,o);a.currentInputSnapshot=f;const _=e[l].update(f.val());if(_!==void 0){fa("transaction failed: Data returned ",_,a.path);let v=ve(_);typeof _=="object"&&_!=null&&Mt(_,".priority")||(v=v.updatePriority(f.getPriority()));const R=a.currentWriteId,p=pa(t),h=ay(v,f,p);a.currentOutputSnapshotRaw=v,a.currentOutputSnapshotResolved=h,a.currentWriteId=If(t),o.splice(o.indexOf(R),1),i=i.concat(ry(t.serverSyncTree_,a.path,h,a.currentWriteId,a.applyLocally)),i=i.concat(_n(t.serverSyncTree_,R,!0))}else d=!0,c="nodata",i=i.concat(_n(t.serverSyncTree_,a.currentWriteId,!0))}Ct(t.eventQueue_,n,i),i=[],d&&(e[l].status=2,function(f){setTimeout(f,Math.floor(0))}(e[l].unwatcher),e[l].onComplete&&(c==="nodata"?r.push(()=>e[l].onComplete(null,!1,e[l].currentInputSnapshot)):r.push(()=>e[l].onComplete(new Error(c),!1,null))))}ga(t,t.transactionQueueTree_);for(let l=0;l<r.length;l++)Ii(r[l]);Tf(t,t.transactionQueueTree_)}function wy(t,e){let n,r=t.transactionQueueTree_;for(n=b(e);n!==null&&Ni(r)===void 0;)r=Cf(r,n),e=X(e),n=b(e);return r}function Ey(t,e){const n=[];return Cy(t,e,n),n.sort((r,i)=>r.order-i.order),n}function Cy(t,e,n){const r=Ni(e);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);da(e,i=>{Cy(t,i,n)})}function ga(t,e){const n=Ni(e);if(n){let r=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[r]=n[i],r++);n.length=r,uy(e,n.length>0?n:void 0)}da(e,r=>{ga(t,r)})}function Nf(t,e){const n=Qs(wy(t,e)),r=Cf(t.transactionQueueTree_,e);return F1(r,i=>{cu(t,i)}),cu(t,r),dy(r,i=>{cu(t,i)}),n}function cu(t,e){const n=Ni(e);if(n){const r=[];let i=[],s=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(S(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):(S(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(_n(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?uy(e,void 0):n.length=s+1,Ct(t.eventQueue_,Qs(e),i);for(let o=0;o<r.length;o++)Ii(r[o])}}/**
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
 */function lN(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function aN(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):Fe(`Invalid query segment '${n}' in query '${t}'`)}return e}const em=function(t,e){const n=uN(t),r=n.namespace;n.domain==="firebase.com"&&Xt(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&Xt("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||yI();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new Nv(n.host,n.secure,r,i,e,"",r!==n.subdomain),path:new K(n.pathString)}},uN=function(t){let e="",n="",r="",i="",s="",o=!0,l="https",a=443;if(typeof t=="string"){let u=t.indexOf("//");u>=0&&(l=t.substring(0,u-1),t=t.substring(u+2));let d=t.indexOf("/");d===-1&&(d=t.length);let c=t.indexOf("?");c===-1&&(c=t.length),e=t.substring(0,Math.min(d,c)),d<c&&(i=lN(t.substring(d,c)));const f=aN(t.substring(Math.min(t.length,c)));u=e.indexOf(":"),u>=0?(o=l==="https"||l==="wss",a=parseInt(e.substring(u+1),10)):u=e.length;const _=e.slice(0,u);if(_.toLowerCase()==="localhost")n="localhost";else if(_.split(".").length<=2)n=_;else{const v=e.indexOf(".");r=e.substring(0,v).toLowerCase(),n=e.substring(v+1),s=r}"ns"in f&&(s=f.ns)}return{host:e,port:a,domain:n,subdomain:r,secure:o,scheme:l,pathString:i,namespace:s}};/**
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
 */const tm="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",cN=function(){let t=0;const e=[];return function(n){const r=n===t;t=n;let i;const s=new Array(8);for(i=7;i>=0;i--)s[i]=tm.charAt(n%64),n=Math.floor(n/64);S(n===0,"Cannot push at time == 0");let o=s.join("");if(r){for(i=11;i>=0&&e[i]===63;i--)e[i]=0;e[i]++}else for(i=0;i<12;i++)e[i]=Math.floor(Math.random()*64);for(i=0;i<12;i++)o+=tm.charAt(e[i]);return S(o.length===20,"nextPushId: Length should be 20."),o}}();/**
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
 */class Sy{constructor(e,n,r,i){this.eventType=e,this.eventRegistration=n,this.snapshot=r,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+ye(this.snapshot.exportVal())}}class ky{constructor(e,n,r){this.eventRegistration=e,this.error=n,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class Iy{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return S(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class xf{constructor(e,n,r,i){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=i}get key(){return U(this._path)?null:Zd(this._path)}get ref(){return new en(this._repo,this._path)}get _queryIdentifier(){const e=jp(this._queryParams),n=Qd(e);return n==="{}"?"default":n}get _queryObject(){return jp(this._queryParams)}isEqual(e){if(e=et(e),!(e instanceof xf))return!1;const n=this._repo===e._repo,r=ef(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+nT(this._path)}}class en extends xf{constructor(e,n){super(e,n,new sf,!1)}get parent(){const e=bv(this._path);return e===null?null:new en(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Ms{constructor(e,n,r){this._node=e,this.ref=n,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new K(e),r=_r(this.ref,e);return new Ms(this._node.getChild(n),r,ae)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,i)=>e(new Ms(i,_r(this.ref,r),ae)))}hasChild(e){const n=new K(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Dl(t,e){return t=et(t),t._checkNotDeleted("ref"),e!==void 0?_r(t._root,e):t._root}function _r(t,e){return t=et(t),b(t._path)===null?V1("child","path",e,!1):py("child","path",e,!1),new en(t._repo,le(t._path,e))}function dN(t,e){t=et(t),my("push",t._path),hy("push",e,t._path,!0);const n=vy(t._repo),r=cN(n),i=_r(t,r),s=_r(t,r);let o;return e!=null?o=Ty(s,e).then(()=>s):o=Promise.resolve(s),i.then=o.then.bind(o),i.catch=o.then.bind(o,void 0),i}function Ty(t,e){t=et(t),my("set",t._path),hy("set",e,t._path,!1);const n=new zs;return eN(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function fN(t,e){H1("update",e,t._path,!1);const n=new zs;return tN(t._repo,t._path,e,n.wrapCallback(()=>{})),n.promise}class _a{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const r=n._queryParams.getIndex();return new Sy("value",this,new Ms(e.snapshotNode,new en(n._repo,n._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new ky(this,e,n):null}matches(e){return e instanceof _a?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class va{constructor(e,n){this.eventType=e,this.callbackContext=n}respondsTo(e){let n=e==="children_added"?"child_added":e;return n=n==="children_removed"?"child_removed":n,this.eventType===n}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new ky(this,e,n):null}createEvent(e,n){S(e.childName!=null,"Child events should have a childName.");const r=_r(new en(n._repo,n._path),e.childName),i=n._queryParams.getIndex();return new Sy(e.type,this,new Ms(e.snapshotNode,r,i),e.prevName)}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof va?this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)):!1}hasAnyCallback(){return!!this.callbackContext}}function Ys(t,e,n,r,i){let s;if(typeof r=="object"&&(s=void 0,i=r),typeof r=="function"&&(s=r),i&&i.onlyOnce){const a=n,u=(d,c)=>{Oc(t._repo,t,l),a(d,c)};u.userCallback=n.userCallback,u.context=n.context,n=u}const o=new Iy(n,s||void 0),l=e==="value"?new _a(o):new va(e,o);return rN(t._repo,t,l),()=>Oc(t._repo,t,l)}function hN(t,e,n,r){return Ys(t,"value",e,n,r)}function nm(t,e,n,r){return Ys(t,"child_added",e,n,r)}function pN(t,e,n,r){return Ys(t,"child_changed",e,n,r)}function mN(t,e,n,r){return Ys(t,"child_moved",e,n,r)}function gN(t,e,n,r){return Ys(t,"child_removed",e,n,r)}function wo(t,e,n){let r=null;const i=n?new Iy(n):null;e==="value"?r=new _a(i):e&&(r=new va(e,i)),Oc(t._repo,t,r)}p1(en);w1(en);/**
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
 */const _N="FIREBASE_DATABASE_EMULATOR_HOST",Dc={};let vN=!1;function yN(t,e,n,r){t.repoInfo_=new Nv(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams),r&&(t.authTokenProvider_=r)}function wN(t,e,n,r,i){let s=r||t.options.databaseURL;s===void 0&&(t.options.projectId||Xt("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Se("Using default host for project ",t.options.projectId),s=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=em(s,i),l=o.repoInfo,a,u;typeof process<"u"&&process.env&&(u=process.env[_N]),u?(a=!0,s=`http://${u}?ns=${l.namespace}`,o=em(s,i),l=o.repoInfo):a=!o.repoInfo.secure;const d=i&&a?new ni(ni.OWNER):new PI(t.name,t.options,e);G1("Invalid Firebase Database URL",o),U(o.path)||Xt("Database URL must point to the root of a Firebase Database (not including a child path).");const c=CN(l,t,d,new RI(t.name,n));return new SN(c,t)}function EN(t,e){const n=Dc[e];(!n||n[t.key]!==t)&&Xt(`Database ${e}(${t.repoInfo_}) has already been deleted.`),iN(t),delete n[t.key]}function CN(t,e,n,r){let i=Dc[e.name];i||(i={},Dc[e.name]=i);let s=i[t.toURLString()];return s&&Xt("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new X1(t,vN,n,r),i[t.toURLString()]=s,s}class SN{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(J1(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new en(this._repo,$())),this._rootInternal}_delete(){return this._rootInternal!==null&&(EN(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Xt("Cannot call "+e+" on a deleted database.")}}function kN(t=M_(),e){const n=jd(t,"database").getImmediate({identifier:e}),r=XE("database");return r&&IN(n,...r),n}function IN(t,e,n,r={}){t=et(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&Xt("Cannot call useEmulator() after instance has already been initialized.");const i=t._repoInternal;let s;if(i.repoInfo_.nodeAdmin)r.mockUserToken&&Xt('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),s=new ni(ni.OWNER);else if(r.mockUserToken){const o=typeof r.mockUserToken=="string"?r.mockUserToken:ZE(r.mockUserToken,t.app.options.projectId);s=new ni(o)}yN(i,e,n,s)}/**
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
 */function TN(t){pI(Bs),hi(new cr("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return wN(r,i,s,n)},"PUBLIC").setMultipleInstances(!0)),xn(Cp,Sp,t),xn(Cp,Sp,"esm2017")}Vt.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};Vt.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};TN();/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */function Rf(t,e,n,r){function i(s){return s instanceof n?s:new n(function(o){o(s)})}return new(n||(n=Promise))(function(s,o){function l(d){try{u(r.next(d))}catch(c){o(c)}}function a(d){try{u(r.throw(d))}catch(c){o(c)}}function u(d){d.done?s(d.value):i(d.value).then(l,a)}u((r=r.apply(t,e||[])).next())})}function Pf(t,e){var n={label:0,sent:function(){if(s[0]&1)throw s[1];return s[1]},trys:[],ops:[]},r,i,s,o;return o={next:l(0),throw:l(1),return:l(2)},typeof Symbol=="function"&&(o[Symbol.iterator]=function(){return this}),o;function l(u){return function(d){return a([u,d])}}function a(u){if(r)throw new TypeError("Generator is already executing.");for(;n;)try{if(r=1,i&&(s=u[0]&2?i.return:u[0]?i.throw||((s=i.return)&&s.call(i),0):i.next)&&!(s=s.call(i,u[1])).done)return s;switch(i=0,s&&(u=[u[0]&2,s.value]),u[0]){case 0:case 1:s=u;break;case 4:return n.label++,{value:u[1],done:!1};case 5:n.label++,i=u[1],u=[0];continue;case 7:u=n.ops.pop(),n.trys.pop();continue;default:if(s=n.trys,!(s=s.length>0&&s[s.length-1])&&(u[0]===6||u[0]===2)){n=0;continue}if(u[0]===3&&(!s||u[1]>s[0]&&u[1]<s[3])){n.label=u[1];break}if(u[0]===6&&n.label<s[1]){n.label=s[1],s=u;break}if(s&&n.label<s[2]){n.label=s[2],n.ops.push(u);break}s[2]&&n.ops.pop(),n.trys.pop();continue}u=e.call(t,n)}catch(d){u=[6,d],i=0}finally{r=s=0}if(u[0]&5)throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}}/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var Gr=function(){return Gr=Object.assign||function(e){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e},Gr.apply(this,arguments)},Ny=function(t){return{loading:t==null,value:t}},NN=function(){return function(t,e){switch(e.type){case"error":return Gr(Gr({},t),{error:e.error,loading:!1,value:void 0});case"reset":return Ny(e.defaultValue);case"value":return Gr(Gr({},t),{error:void 0,loading:!1,value:e.value});default:return t}}},xN=function(t){var e=t?t():void 0,n=y.useReducer(NN(),Ny(e)),r=n[0],i=n[1],s=y.useCallback(function(){var a=t?t():void 0;i({type:"reset",defaultValue:a})},[t]),o=y.useCallback(function(a){i({type:"error",error:a})},[]),l=y.useCallback(function(a){i({type:"value",value:a})},[]);return y.useMemo(function(){return{error:r.error,loading:r.loading,reset:s,setError:o,setValue:l,value:r.value}},[r.error,r.loading,s,o,l,r.value])},RN=function(t,e){var n=xN(function(){return t.currentUser}),r=n.error,i=n.loading,s=n.setError,o=n.setValue,l=n.value;return y.useEffect(function(){var a=ZS(t,function(u){return Rf(void 0,void 0,void 0,function(){var d;return Pf(this,function(c){switch(c.label){case 0:if(!(e!=null&&e.onUserChanged))return[3,4];c.label=1;case 1:return c.trys.push([1,3,,4]),[4,e.onUserChanged(u)];case 2:return c.sent(),[3,4];case 3:return d=c.sent(),s(d),[3,4];case 4:return o(u),[2]}})})},s);return function(){a()}},[t]),[l,i,r]},PN=function(t){var e=y.useCallback(function(n,r){var i=new Ut;return n&&n.forEach(function(s){return i.addScope(s)}),r&&i.setCustomParameters(r),i},[]);return ON(t,e)},ON=function(t,e){var n=y.useState(),r=n[0],i=n[1],s=y.useState(),o=s[0],l=s[1],a=y.useState(!1),u=a[0],d=a[1],c=y.useCallback(function(f,_){return Rf(void 0,void 0,void 0,function(){var v,w,R;return Pf(this,function(p){switch(p.label){case 0:d(!0),i(void 0),p.label=1;case 1:return p.trys.push([1,3,4,5]),v=e(f,_),[4,Sk(t,v)];case 2:return w=p.sent(),l(w),[2,w];case 3:return R=p.sent(),i(R),[3,5];case 4:return d(!1),[7];case 5:return[2]}})})},[t,e]);return[c,o,u,r]},AN=function(t){var e=y.useState(),n=e[0],r=e[1],i=y.useState(!1),s=i[0],o=i[1],l=y.useCallback(function(){return Rf(void 0,void 0,void 0,function(){var a;return Pf(this,function(u){switch(u.label){case 0:o(!0),r(void 0),u.label=1;case 1:return u.trys.push([1,3,4,5]),[4,t.signOut()];case 2:return u.sent(),[2,!0];case 3:return a=u.sent(),r(a),[2,!1];case 4:return o(!1),[7];case 5:return[2]}})})},[t]);return[l,s,n]};const Sr=y.createContext();var Mc={},DN={get exports(){return Mc},set exports(t){Mc=t}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(t){(function(){var e={}.hasOwnProperty;function n(){for(var r=[],i=0;i<arguments.length;i++){var s=arguments[i];if(s){var o=typeof s;if(o==="string"||o==="number")r.push(s);else if(Array.isArray(s)){if(s.length){var l=n.apply(null,s);l&&r.push(l)}}else if(o==="object"){if(s.toString!==Object.prototype.toString&&!s.toString.toString().includes("[native code]")){r.push(s.toString());continue}for(var a in s)e.call(s,a)&&s[a]&&r.push(a)}}}return r.join(" ")}t.exports?(n.default=n,t.exports=n):window.classNames=n})()})(DN);const te=Mc,MN=["as","disabled"];function LN(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function bN(t){return!t||t.trim()==="#"}function xy({tagName:t,disabled:e,href:n,target:r,rel:i,role:s,onClick:o,tabIndex:l=0,type:a}){t||(n!=null||r!=null||i!=null?t="a":t="button");const u={tagName:t};if(t==="button")return[{type:a||"button",disabled:e},u];const d=f=>{if((e||t==="a"&&bN(n))&&f.preventDefault(),e){f.stopPropagation();return}o==null||o(f)},c=f=>{f.key===" "&&(f.preventDefault(),d(f))};return t==="a"&&(n||(n="#"),e&&(n=void 0)),[{role:s??"button",disabled:void 0,tabIndex:e?void 0:l,href:n,target:t==="a"?r:void 0,"aria-disabled":e||void 0,rel:t==="a"?i:void 0,onClick:d,onKeyDown:c},u]}const FN=y.forwardRef((t,e)=>{let{as:n,disabled:r}=t,i=LN(t,MN);const[s,{tagName:o}]=xy(Object.assign({tagName:n,disabled:r},i));return g.jsx(o,Object.assign({},i,s,{ref:e}))});FN.displayName="Button";const UN=["xxl","xl","lg","md","sm","xs"],jN="xs",ya=y.createContext({prefixes:{},breakpoints:UN,minBreakpoint:jN});function Ee(t,e){const{prefixes:n}=y.useContext(ya);return t||n[e]||e}function zN(){const{breakpoints:t}=y.useContext(ya);return t}function $N(){const{minBreakpoint:t}=y.useContext(ya);return t}function BN(){const{dir:t}=y.useContext(ya);return t==="rtl"}const WN={variant:"primary",active:!1,disabled:!1},vr=y.forwardRef(({as:t,bsPrefix:e,variant:n,size:r,active:i,className:s,...o},l)=>{const a=Ee(e,"btn"),[u,{tagName:d}]=xy({tagName:t,...o}),c=d;return g.jsx(c,{...u,...o,ref:l,className:te(s,a,i&&"active",n&&`${a}-${n}`,r&&`${a}-${r}`,o.href&&o.disabled&&"disabled")})});vr.displayName="Button";vr.defaultProps=WN;function HN(){const{user:t}=y.useContext(Sr);return t?g.jsx(GN,{}):g.jsx(VN,{})}const VN=()=>{const{auth:t}=y.useContext(Sr),[e,n,r,i]=PN(t);return i&&alert(i.message),n&&alert(`Signed In User: ${n.email}`),g.jsx(vr,{variant:"outline-light",onClick:()=>e(),children:"Sign In"})},GN=()=>{const{auth:t}=y.useContext(Sr),[e,n,r]=AN(t);return r?g.jsxs("p",{children:["Error: ",r.message]}):n?g.jsx("p",{children:"Loading..."}):g.jsx(vr,{variant:"outline-light",onClick:e,children:"Sign out"})},xi=!!(typeof window<"u"&&window.document&&window.document.createElement);var Lc=!1,bc=!1;try{var du={get passive(){return Lc=!0},get once(){return bc=Lc=!0}};xi&&(window.addEventListener("test",du,du),window.removeEventListener("test",du,!0))}catch{}function Ry(t,e,n,r){if(r&&typeof r!="boolean"&&!bc){var i=r.once,s=r.capture,o=n;!bc&&i&&(o=n.__once||function l(a){this.removeEventListener(e,l,s),n.call(this,a)},n.__once=o),t.addEventListener(e,o,Lc?r:s)}t.addEventListener(e,n,r)}function wa(t){return t&&t.ownerDocument||document}function Fc(t,e,n,r){var i=r&&typeof r!="boolean"?r.capture:r;t.removeEventListener(e,n,i),n.__once&&t.removeEventListener(e,n.__once,i)}var Eo;function rm(t){if((!Eo&&Eo!==0||t)&&xi){var e=document.createElement("div");e.style.position="absolute",e.style.top="-9999px",e.style.width="50px",e.style.height="50px",e.style.overflow="scroll",document.body.appendChild(e),Eo=e.offsetWidth-e.clientWidth,document.body.removeChild(e)}return Eo}function KN(){return y.useState(null)}function qN(t){var e=y.useRef(t);return y.useEffect(function(){e.current=t},[t]),e}function hn(t){var e=qN(t);return y.useCallback(function(){return e.current&&e.current.apply(e,arguments)},[e])}var im=function(e){return!e||typeof e=="function"?e:function(n){e.current=n}};function QN(t,e){var n=im(t),r=im(e);return function(i){n&&n(i),r&&r(i)}}function Py(t,e){return y.useMemo(function(){return QN(t,e)},[t,e])}function YN(t){var e=y.useRef(t);return e.current=t,e}function Oy(t){var e=YN(t);y.useEffect(function(){return function(){return e.current()}},[])}function XN(t){var e=wa(t);return e&&e.defaultView||window}function JN(t,e){return XN(t).getComputedStyle(t,e)}var ZN=/([A-Z])/g;function ex(t){return t.replace(ZN,"-$1").toLowerCase()}var tx=/^ms-/;function Co(t){return ex(t).replace(tx,"-ms-")}var nx=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;function rx(t){return!!(t&&nx.test(t))}function ir(t,e){var n="",r="";if(typeof e=="string")return t.style.getPropertyValue(Co(e))||JN(t).getPropertyValue(Co(e));Object.keys(e).forEach(function(i){var s=e[i];!s&&s!==0?t.style.removeProperty(Co(i)):rx(i)?r+=i+"("+s+") ":n+=Co(i)+": "+s+";"}),r&&(n+="transform: "+r+";"),t.style.cssText+=";"+n}function Ml(t,e,n,r){return Ry(t,e,n,r),function(){Fc(t,e,n,r)}}function ix(t,e,n,r){if(n===void 0&&(n=!1),r===void 0&&(r=!0),t){var i=document.createEvent("HTMLEvents");i.initEvent(e,n,r),t.dispatchEvent(i)}}function sx(t){var e=ir(t,"transitionDuration")||"",n=e.indexOf("ms")===-1?1e3:1;return parseFloat(e)*n}function ox(t,e,n){n===void 0&&(n=5);var r=!1,i=setTimeout(function(){r||ix(t,"transitionend",!0)},e+n),s=Ml(t,"transitionend",function(){r=!0},{once:!0});return function(){clearTimeout(i),s()}}function Ay(t,e,n,r){n==null&&(n=sx(t)||0);var i=ox(t,n,r),s=Ml(t,"transitionend",e);return function(){i(),s()}}function fu(t){t===void 0&&(t=wa());try{var e=t.activeElement;return!e||!e.nodeName?null:e}catch{return t.body}}function sm(t,e){if(t.contains)return t.contains(e);if(t.compareDocumentPosition)return t===e||!!(t.compareDocumentPosition(e)&16)}function lx(){var t=y.useRef(!0),e=y.useRef(function(){return t.current});return y.useEffect(function(){return t.current=!0,function(){t.current=!1}},[]),e.current}function ax(t){var e=y.useRef(null);return y.useEffect(function(){e.current=t}),e.current}const ux="data-rr-ui-";function cx(t){return`${ux}${t}`}function dx(t=document){const e=t.defaultView;return Math.abs(e.innerWidth-t.documentElement.clientWidth)}const om=cx("modal-open");class Of{constructor({ownerDocument:e,handleContainerOverflow:n=!0,isRTL:r=!1}={}){this.handleContainerOverflow=n,this.isRTL=r,this.modals=[],this.ownerDocument=e}getScrollbarWidth(){return dx(this.ownerDocument)}getElement(){return(this.ownerDocument||document).body}setModalAttributes(e){}removeModalAttributes(e){}setContainerStyle(e){const n={overflow:"hidden"},r=this.isRTL?"paddingLeft":"paddingRight",i=this.getElement();e.style={overflow:i.style.overflow,[r]:i.style[r]},e.scrollBarWidth&&(n[r]=`${parseInt(ir(i,r)||"0",10)+e.scrollBarWidth}px`),i.setAttribute(om,""),ir(i,n)}reset(){[...this.modals].forEach(e=>this.remove(e))}removeContainerStyle(e){const n=this.getElement();n.removeAttribute(om),Object.assign(n.style,e.style)}add(e){let n=this.modals.indexOf(e);return n!==-1||(n=this.modals.length,this.modals.push(e),this.setModalAttributes(e),n!==0)||(this.state={scrollBarWidth:this.getScrollbarWidth(),style:{}},this.handleContainerOverflow&&this.setContainerStyle(this.state)),n}remove(e){const n=this.modals.indexOf(e);n!==-1&&(this.modals.splice(n,1),!this.modals.length&&this.handleContainerOverflow&&this.removeContainerStyle(this.state),this.removeModalAttributes(e))}isTopModal(e){return!!this.modals.length&&this.modals[this.modals.length-1]===e}}const Dy=y.createContext(xi?window:void 0);Dy.Provider;function My(){return y.useContext(Dy)}const hu=(t,e)=>xi?t==null?(e||wa()).body:(typeof t=="function"&&(t=t()),t&&"current"in t&&(t=t.current),t&&("nodeType"in t||t.getBoundingClientRect)?t:null):null;function fx(t,e){const n=My(),[r,i]=y.useState(()=>hu(t,n==null?void 0:n.document));if(!r){const s=hu(t);s&&i(s)}return y.useEffect(()=>{e&&r&&e(r)},[e,r]),y.useEffect(()=>{const s=hu(t);s!==r&&i(s)},[t,r]),r}const hx=["show","role","className","style","children","backdrop","keyboard","onBackdropClick","onEscapeKeyDown","transition","backdropTransition","autoFocus","enforceFocus","restoreFocus","restoreFocusOptions","renderDialog","renderBackdrop","manager","container","onShow","onHide","onExit","onExited","onExiting","onEnter","onEntering","onEntered"];function px(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}let pu;function mx(t){return pu||(pu=new Of({ownerDocument:t==null?void 0:t.document})),pu}function gx(t){const e=My(),n=t||mx(e),r=y.useRef({dialog:null,backdrop:null});return Object.assign(r.current,{add:()=>n.add(r.current),remove:()=>n.remove(r.current),isTopModal:()=>n.isTopModal(r.current),setDialogRef:y.useCallback(i=>{r.current.dialog=i},[]),setBackdropRef:y.useCallback(i=>{r.current.backdrop=i},[])})}const Ly=y.forwardRef((t,e)=>{let{show:n=!1,role:r="dialog",className:i,style:s,children:o,backdrop:l=!0,keyboard:a=!0,onBackdropClick:u,onEscapeKeyDown:d,transition:c,backdropTransition:f,autoFocus:_=!0,enforceFocus:v=!0,restoreFocus:w=!0,restoreFocusOptions:R,renderDialog:p,renderBackdrop:h=q=>g.jsx("div",Object.assign({},q)),manager:m,container:E,onShow:I,onHide:k=()=>{},onExit:T,onExited:P,onExiting:B,onEnter:L,onEntering:Ne,onEntered:St}=t,kt=px(t,hx);const Lt=fx(E),he=gx(m),Un=lx(),jn=ax(n),[N,O]=y.useState(!n),D=y.useRef(null);y.useImperativeHandle(e,()=>he,[he]),xi&&!jn&&n&&(D.current=fu()),!c&&!n&&!N?O(!0):n&&N&&O(!1);const V=hn(()=>{if(he.add(),It.current=Ml(document,"keydown",zn),ze.current=Ml(document,"focus",()=>setTimeout(tt),!0),I&&I(),_){const q=fu(document);he.dialog&&q&&!sm(he.dialog,q)&&(D.current=q,he.dialog.focus())}}),G=hn(()=>{if(he.remove(),It.current==null||It.current(),ze.current==null||ze.current(),w){var q;(q=D.current)==null||q.focus==null||q.focus(R),D.current=null}});y.useEffect(()=>{!n||!Lt||V()},[n,Lt,V]),y.useEffect(()=>{N&&G()},[N,G]),Oy(()=>{G()});const tt=hn(()=>{if(!v||!Un()||!he.isTopModal())return;const q=fu();he.dialog&&q&&!sm(he.dialog,q)&&he.dialog.focus()}),ct=hn(q=>{q.target===q.currentTarget&&(u==null||u(q),l===!0&&k())}),zn=hn(q=>{a&&q.keyCode===27&&he.isTopModal()&&(d==null||d(q),q.defaultPrevented||k())}),ze=y.useRef(),It=y.useRef(),ka=(...q)=>{O(!0),P==null||P(...q)},kr=c;if(!Lt||!(n||kr&&!N))return null;const Ri=Object.assign({role:r,ref:he.setDialogRef,"aria-modal":r==="dialog"?!0:void 0},kt,{style:s,className:i,tabIndex:-1});let $n=p?p(Ri):g.jsx("div",Object.assign({},Ri,{children:y.cloneElement(o,{role:"document"})}));kr&&($n=g.jsx(kr,{appear:!0,unmountOnExit:!0,in:!!n,onExit:T,onExiting:B,onExited:ka,onEnter:L,onEntering:Ne,onEntered:St,children:$n}));let Ir=null;if(l){const q=f;Ir=h({ref:he.setBackdropRef,onClick:ct}),q&&(Ir=g.jsx(q,{appear:!0,in:!!n,children:Ir}))}return g.jsx(g.Fragment,{children:Hr.createPortal(g.jsxs(g.Fragment,{children:[Ir,$n]}),Lt)})});Ly.displayName="Modal";const _x=Object.assign(Ly,{Manager:Of});function vx(t,e){return t.classList?!!e&&t.classList.contains(e):(" "+(t.className.baseVal||t.className)+" ").indexOf(" "+e+" ")!==-1}function yx(t,e){t.classList?t.classList.add(e):vx(t,e)||(typeof t.className=="string"?t.className=t.className+" "+e:t.setAttribute("class",(t.className&&t.className.baseVal||"")+" "+e))}var wx=Function.prototype.bind.call(Function.prototype.call,[].slice);function Rr(t,e){return wx(t.querySelectorAll(e))}function lm(t,e){return t.replace(new RegExp("(^|\\s)"+e+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}function Ex(t,e){t.classList?t.classList.remove(e):typeof t.className=="string"?t.className=lm(t.className,e):t.setAttribute("class",lm(t.className&&t.className.baseVal||"",e))}const Pr={FIXED_CONTENT:".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",STICKY_CONTENT:".sticky-top",NAVBAR_TOGGLER:".navbar-toggler"};class Cx extends Of{adjustAndStore(e,n,r){const i=n.style[e];n.dataset[e]=i,ir(n,{[e]:`${parseFloat(ir(n,e))+r}px`})}restore(e,n){const r=n.dataset[e];r!==void 0&&(delete n.dataset[e],ir(n,{[e]:r}))}setContainerStyle(e){super.setContainerStyle(e);const n=this.getElement();if(yx(n,"modal-open"),!e.scrollBarWidth)return;const r=this.isRTL?"paddingLeft":"paddingRight",i=this.isRTL?"marginLeft":"marginRight";Rr(n,Pr.FIXED_CONTENT).forEach(s=>this.adjustAndStore(r,s,e.scrollBarWidth)),Rr(n,Pr.STICKY_CONTENT).forEach(s=>this.adjustAndStore(i,s,-e.scrollBarWidth)),Rr(n,Pr.NAVBAR_TOGGLER).forEach(s=>this.adjustAndStore(i,s,e.scrollBarWidth))}removeContainerStyle(e){super.removeContainerStyle(e);const n=this.getElement();Ex(n,"modal-open");const r=this.isRTL?"paddingLeft":"paddingRight",i=this.isRTL?"marginLeft":"marginRight";Rr(n,Pr.FIXED_CONTENT).forEach(s=>this.restore(r,s)),Rr(n,Pr.STICKY_CONTENT).forEach(s=>this.restore(i,s)),Rr(n,Pr.NAVBAR_TOGGLER).forEach(s=>this.restore(i,s))}}let mu;function Sx(t){return mu||(mu=new Cx(t)),mu}function kx(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function Uc(t,e){return Uc=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,i){return r.__proto__=i,r},Uc(t,e)}function Ix(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,Uc(t,e)}var wt={},Tx={get exports(){return wt},set exports(t){wt=t}},Nx="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",xx=Nx,Rx=xx;function by(){}function Fy(){}Fy.resetWarningCache=by;var Px=function(){function t(r,i,s,o,l,a){if(a!==Rx){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}t.isRequired=t;function e(){return t}var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:Fy,resetWarningCache:by};return n.PropTypes=n,n};Tx.exports=Px();const am={disabled:!1},Uy=pn.createContext(null);var Ox=function(e){return e.scrollTop},Gi="unmounted",Gn="exited",ln="entering",Kn="entered",jc="exiting",tn=function(t){Ix(e,t);function e(r,i){var s;s=t.call(this,r,i)||this;var o=i,l=o&&!o.isMounting?r.enter:r.appear,a;return s.appearStatus=null,r.in?l?(a=Gn,s.appearStatus=ln):a=Kn:r.unmountOnExit||r.mountOnEnter?a=Gi:a=Gn,s.state={status:a},s.nextCallback=null,s}e.getDerivedStateFromProps=function(i,s){var o=i.in;return o&&s.status===Gi?{status:Gn}:null};var n=e.prototype;return n.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},n.componentDidUpdate=function(i){var s=null;if(i!==this.props){var o=this.state.status;this.props.in?o!==ln&&o!==Kn&&(s=ln):(o===ln||o===Kn)&&(s=jc)}this.updateStatus(!1,s)},n.componentWillUnmount=function(){this.cancelNextCallback()},n.getTimeouts=function(){var i=this.props.timeout,s,o,l;return s=o=l=i,i!=null&&typeof i!="number"&&(s=i.exit,o=i.enter,l=i.appear!==void 0?i.appear:o),{exit:s,enter:o,appear:l}},n.updateStatus=function(i,s){if(i===void 0&&(i=!1),s!==null)if(this.cancelNextCallback(),s===ln){if(this.props.unmountOnExit||this.props.mountOnEnter){var o=this.props.nodeRef?this.props.nodeRef.current:Hr.findDOMNode(this);o&&Ox(o)}this.performEnter(i)}else this.performExit();else this.props.unmountOnExit&&this.state.status===Gn&&this.setState({status:Gi})},n.performEnter=function(i){var s=this,o=this.props.enter,l=this.context?this.context.isMounting:i,a=this.props.nodeRef?[l]:[Hr.findDOMNode(this),l],u=a[0],d=a[1],c=this.getTimeouts(),f=l?c.appear:c.enter;if(!i&&!o||am.disabled){this.safeSetState({status:Kn},function(){s.props.onEntered(u)});return}this.props.onEnter(u,d),this.safeSetState({status:ln},function(){s.props.onEntering(u,d),s.onTransitionEnd(f,function(){s.safeSetState({status:Kn},function(){s.props.onEntered(u,d)})})})},n.performExit=function(){var i=this,s=this.props.exit,o=this.getTimeouts(),l=this.props.nodeRef?void 0:Hr.findDOMNode(this);if(!s||am.disabled){this.safeSetState({status:Gn},function(){i.props.onExited(l)});return}this.props.onExit(l),this.safeSetState({status:jc},function(){i.props.onExiting(l),i.onTransitionEnd(o.exit,function(){i.safeSetState({status:Gn},function(){i.props.onExited(l)})})})},n.cancelNextCallback=function(){this.nextCallback!==null&&(this.nextCallback.cancel(),this.nextCallback=null)},n.safeSetState=function(i,s){s=this.setNextCallback(s),this.setState(i,s)},n.setNextCallback=function(i){var s=this,o=!0;return this.nextCallback=function(l){o&&(o=!1,s.nextCallback=null,i(l))},this.nextCallback.cancel=function(){o=!1},this.nextCallback},n.onTransitionEnd=function(i,s){this.setNextCallback(s);var o=this.props.nodeRef?this.props.nodeRef.current:Hr.findDOMNode(this),l=i==null&&!this.props.addEndListener;if(!o||l){setTimeout(this.nextCallback,0);return}if(this.props.addEndListener){var a=this.props.nodeRef?[this.nextCallback]:[o,this.nextCallback],u=a[0],d=a[1];this.props.addEndListener(u,d)}i!=null&&setTimeout(this.nextCallback,i)},n.render=function(){var i=this.state.status;if(i===Gi)return null;var s=this.props,o=s.children;s.in,s.mountOnEnter,s.unmountOnExit,s.appear,s.enter,s.exit,s.timeout,s.addEndListener,s.onEnter,s.onEntering,s.onEntered,s.onExit,s.onExiting,s.onExited,s.nodeRef;var l=kx(s,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]);return pn.createElement(Uy.Provider,{value:null},typeof o=="function"?o(i,l):pn.cloneElement(pn.Children.only(o),l))},e}(pn.Component);tn.contextType=Uy;tn.propTypes={};function Or(){}tn.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:Or,onEntering:Or,onEntered:Or,onExit:Or,onExiting:Or,onExited:Or};tn.UNMOUNTED=Gi;tn.EXITED=Gn;tn.ENTERING=ln;tn.ENTERED=Kn;tn.EXITING=jc;function um(t,e){const n=ir(t,e)||"",r=n.indexOf("ms")===-1?1e3:1;return parseFloat(n)*r}function Ax(t,e){const n=um(t,"transitionDuration"),r=um(t,"transitionDelay"),i=Ay(t,s=>{s.target===t&&(i(),e(s))},n+r)}function Dx(t){t.offsetHeight}function Mx(t){return t&&"setState"in t?Hr.findDOMNode(t):t??null}const Lx=pn.forwardRef(({onEnter:t,onEntering:e,onEntered:n,onExit:r,onExiting:i,onExited:s,addEndListener:o,children:l,childRef:a,...u},d)=>{const c=y.useRef(null),f=Py(c,a),_=k=>{f(Mx(k))},v=k=>T=>{k&&c.current&&k(c.current,T)},w=y.useCallback(v(t),[t]),R=y.useCallback(v(e),[e]),p=y.useCallback(v(n),[n]),h=y.useCallback(v(r),[r]),m=y.useCallback(v(i),[i]),E=y.useCallback(v(s),[s]),I=y.useCallback(v(o),[o]);return g.jsx(tn,{ref:d,...u,onEnter:w,onEntered:p,onEntering:R,onExit:h,onExited:E,onExiting:m,addEndListener:I,nodeRef:c,children:typeof l=="function"?(k,T)=>l(k,{...T,ref:_}):pn.cloneElement(l,{ref:_})})}),bx={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1},Fx={[ln]:"show",[Kn]:"show"},Ea=y.forwardRef(({className:t,children:e,transitionClasses:n={},...r},i)=>{const s=y.useCallback((o,l)=>{Dx(o),r.onEnter==null||r.onEnter(o,l)},[r]);return g.jsx(Lx,{ref:i,addEndListener:Ax,...r,onEnter:s,childRef:e.ref,children:(o,l)=>y.cloneElement(e,{...l,className:te("fade",t,e.props.className,Fx[o],n[o])})})});Ea.defaultProps=bx;Ea.displayName="Fade";var Ux=/-(.)/g;function jx(t){return t.replace(Ux,function(e,n){return n.toUpperCase()})}const zx=t=>t[0].toUpperCase()+jx(t).slice(1);function Xs(t,{displayName:e=zx(t),Component:n,defaultProps:r}={}){const i=y.forwardRef(({className:s,bsPrefix:o,as:l=n||"div",...a},u)=>{const d=Ee(o,t);return g.jsx(l,{ref:u,className:te(s,d),...a})});return i.defaultProps=r,i.displayName=e,i}const $x=Xs("modal-body"),jy=y.createContext({onHide(){}}),Af=y.forwardRef(({bsPrefix:t,className:e,contentClassName:n,centered:r,size:i,fullscreen:s,children:o,scrollable:l,...a},u)=>{t=Ee(t,"modal");const d=`${t}-dialog`,c=typeof s=="string"?`${t}-fullscreen-${s}`:`${t}-fullscreen`;return g.jsx("div",{...a,ref:u,className:te(d,e,i&&`${t}-${i}`,r&&`${d}-centered`,l&&`${d}-scrollable`,s&&c),children:g.jsx("div",{className:te(`${t}-content`,n),children:o})})});Af.displayName="ModalDialog";const Bx=Xs("modal-footer"),Wx={"aria-label":wt.string,onClick:wt.func,variant:wt.oneOf(["white"])},Hx={"aria-label":"Close"},Ca=y.forwardRef(({className:t,variant:e,...n},r)=>g.jsx("button",{ref:r,type:"button",className:te("btn-close",e&&`btn-close-${e}`,t),...n}));Ca.displayName="CloseButton";Ca.propTypes=Wx;Ca.defaultProps=Hx;const Vx=Ca,Gx={closeLabel:"Close",closeButton:!1},zy=y.forwardRef(({closeLabel:t,closeVariant:e,closeButton:n,onHide:r,children:i,...s},o)=>{const l=y.useContext(jy),a=hn(()=>{l==null||l.onHide(),r==null||r()});return g.jsxs("div",{ref:o,...s,children:[i,n&&g.jsx(Vx,{"aria-label":t,variant:e,onClick:a})]})});zy.defaultProps=Gx;const Kx={closeLabel:"Close",closeButton:!1},Df=y.forwardRef(({bsPrefix:t,className:e,...n},r)=>(t=Ee(t,"modal-header"),g.jsx(zy,{ref:r,...n,className:te(e,t)})));Df.displayName="ModalHeader";Df.defaultProps=Kx;const qx=t=>y.forwardRef((e,n)=>g.jsx("div",{...e,ref:n,className:te(e.className,t)})),Qx=qx("h4"),Yx=Xs("modal-title",{Component:Qx}),Xx={show:!1,backdrop:!0,keyboard:!0,autoFocus:!0,enforceFocus:!0,restoreFocus:!0,animation:!0,dialogAs:Af};function Jx(t){return g.jsx(Ea,{...t,timeout:null})}function Zx(t){return g.jsx(Ea,{...t,timeout:null})}const Mf=y.forwardRef(({bsPrefix:t,className:e,style:n,dialogClassName:r,contentClassName:i,children:s,dialogAs:o,"aria-labelledby":l,"aria-describedby":a,"aria-label":u,show:d,animation:c,backdrop:f,keyboard:_,onEscapeKeyDown:v,onShow:w,onHide:R,container:p,autoFocus:h,enforceFocus:m,restoreFocus:E,restoreFocusOptions:I,onEntered:k,onExit:T,onExiting:P,onEnter:B,onEntering:L,onExited:Ne,backdropClassName:St,manager:kt,...Lt},he)=>{const[Un,jn]=y.useState({}),[N,O]=y.useState(!1),D=y.useRef(!1),V=y.useRef(!1),G=y.useRef(null),[tt,ct]=KN(),zn=Py(he,ct),ze=hn(R),It=BN();t=Ee(t,"modal");const ka=y.useMemo(()=>({onHide:ze}),[ze]);function kr(){return kt||Sx({isRTL:It})}function Ri(W){if(!xi)return;const Tr=kr().getScrollbarWidth()>0,$f=W.scrollHeight>wa(W).documentElement.clientHeight;jn({paddingRight:Tr&&!$f?rm():void 0,paddingLeft:!Tr&&$f?rm():void 0})}const $n=hn(()=>{tt&&Ri(tt.dialog)});Oy(()=>{Fc(window,"resize",$n),G.current==null||G.current()});const Ir=()=>{D.current=!0},q=W=>{D.current&&tt&&W.target===tt.dialog&&(V.current=!0),D.current=!1},jf=()=>{O(!0),G.current=Ay(tt.dialog,()=>{O(!1)})},i0=W=>{W.target===W.currentTarget&&jf()},s0=W=>{if(f==="static"){i0(W);return}if(V.current||W.target!==W.currentTarget){V.current=!1;return}R==null||R()},o0=W=>{_?v==null||v(W):(W.preventDefault(),f==="static"&&jf())},l0=(W,Tr)=>{W&&Ri(W),B==null||B(W,Tr)},a0=W=>{G.current==null||G.current(),T==null||T(W)},u0=(W,Tr)=>{L==null||L(W,Tr),Ry(window,"resize",$n)},c0=W=>{W&&(W.style.display=""),Ne==null||Ne(W),Fc(window,"resize",$n)},d0=y.useCallback(W=>g.jsx("div",{...W,className:te(`${t}-backdrop`,St,!c&&"show")}),[c,St,t]),zf={...n,...Un};zf.display="block";const f0=W=>g.jsx("div",{role:"dialog",...W,style:zf,className:te(e,t,N&&`${t}-static`,!c&&"show"),onClick:f?s0:void 0,onMouseUp:q,"aria-label":u,"aria-labelledby":l,"aria-describedby":a,children:g.jsx(o,{...Lt,onMouseDown:Ir,className:r,contentClassName:i,children:s})});return g.jsx(jy.Provider,{value:ka,children:g.jsx(_x,{show:d,ref:zn,backdrop:f,container:p,keyboard:!0,autoFocus:h,enforceFocus:m,restoreFocus:E,restoreFocusOptions:I,onEscapeKeyDown:o0,onShow:w,onHide:R,onEnter:l0,onEntering:u0,onEntered:k,onExit:a0,onExiting:P,onExited:c0,manager:kr(),transition:c?Jx:void 0,backdropTransition:c?Zx:void 0,renderBackdrop:d0,renderDialog:f0})})});Mf.displayName="Modal";Mf.defaultProps=Xx;const So=Object.assign(Mf,{Body:$x,Header:Df,Title:Yx,Footer:Bx,Dialog:Af,TRANSITION_DURATION:300,BACKDROP_TRANSITION_DURATION:150}),Jt=y.createContext({}),Js=y.forwardRef(({id:t,bsPrefix:e,className:n,type:r="checkbox",isValid:i=!1,isInvalid:s=!1,as:o="input",...l},a)=>{const{controlId:u}=y.useContext(Jt);return e=Ee(e,"form-check-input"),g.jsx(o,{...l,ref:a,type:r,id:t||u,className:te(n,e,i&&"is-valid",s&&"is-invalid")})});Js.displayName="FormCheckInput";const $y=y.createContext(null);$y.displayName="InputGroupContext";const Lf=Xs("input-group-text",{Component:"span"}),eR=t=>g.jsx(Lf,{children:g.jsx(Js,{type:"checkbox",...t})}),tR=t=>g.jsx(Lf,{children:g.jsx(Js,{type:"radio",...t})}),By=y.forwardRef(({bsPrefix:t,size:e,hasValidation:n,className:r,as:i="div",...s},o)=>{t=Ee(t,"input-group");const l=y.useMemo(()=>({}),[]);return g.jsx($y.Provider,{value:l,children:g.jsx(i,{ref:o,...s,className:te(r,t,e&&`${t}-${e}`,n&&"has-validation")})})});By.displayName="InputGroup";const nt=Object.assign(By,{Text:Lf,Radio:tR,Checkbox:eR}),nR={type:wt.string,tooltip:wt.bool,as:wt.elementType},Sa=y.forwardRef(({as:t="div",className:e,type:n="valid",tooltip:r=!1,...i},s)=>g.jsx(t,{...i,ref:s,className:te(e,`${n}-${r?"tooltip":"feedback"}`)}));Sa.displayName="Feedback";Sa.propTypes=nR;const Ll=y.forwardRef(({bsPrefix:t,className:e,htmlFor:n,...r},i)=>{const{controlId:s}=y.useContext(Jt);return t=Ee(t,"form-check-label"),g.jsx("label",{...r,ref:i,htmlFor:n||s,className:te(e,t)})});Ll.displayName="FormCheckLabel";function rR(t,e){return y.Children.toArray(t).some(n=>y.isValidElement(n)&&n.type===e)}const Wy=y.forwardRef(({id:t,bsPrefix:e,bsSwitchPrefix:n,inline:r=!1,reverse:i=!1,disabled:s=!1,isValid:o=!1,isInvalid:l=!1,feedbackTooltip:a=!1,feedback:u,feedbackType:d,className:c,style:f,title:_="",type:v="checkbox",label:w,children:R,as:p="input",...h},m)=>{e=Ee(e,"form-check"),n=Ee(n,"form-switch");const{controlId:E}=y.useContext(Jt),I=y.useMemo(()=>({controlId:t||E}),[E,t]),k=!R&&w!=null&&w!==!1||rR(R,Ll),T=g.jsx(Js,{...h,type:v==="switch"?"checkbox":v,ref:m,isValid:o,isInvalid:l,disabled:s,as:p});return g.jsx(Jt.Provider,{value:I,children:g.jsx("div",{style:f,className:te(c,k&&e,r&&`${e}-inline`,i&&`${e}-reverse`,v==="switch"&&n),children:R||g.jsxs(g.Fragment,{children:[T,k&&g.jsx(Ll,{title:_,children:w}),u&&g.jsx(Sa,{type:d,tooltip:a,children:u})]})})})});Wy.displayName="FormCheck";const bl=Object.assign(Wy,{Input:Js,Label:Ll}),Hy=y.forwardRef(({bsPrefix:t,type:e,size:n,htmlSize:r,id:i,className:s,isValid:o=!1,isInvalid:l=!1,plaintext:a,readOnly:u,as:d="input",...c},f)=>{const{controlId:_}=y.useContext(Jt);t=Ee(t,"form-control");let v;return a?v={[`${t}-plaintext`]:!0}:v={[t]:!0,[`${t}-${n}`]:n},g.jsx(d,{...c,type:e,size:r,ref:f,readOnly:u,id:i||_,className:te(s,v,o&&"is-valid",l&&"is-invalid",e==="color"&&`${t}-color`)})});Hy.displayName="FormControl";const iR=Object.assign(Hy,{Feedback:Sa}),sR=Xs("form-floating"),bf=y.forwardRef(({controlId:t,as:e="div",...n},r)=>{const i=y.useMemo(()=>({controlId:t}),[t]);return g.jsx(Jt.Provider,{value:i,children:g.jsx(e,{...n,ref:r})})});bf.displayName="FormGroup";function oR({as:t,bsPrefix:e,className:n,...r}){e=Ee(e,"col");const i=zN(),s=$N(),o=[],l=[];return i.forEach(a=>{const u=r[a];delete r[a];let d,c,f;typeof u=="object"&&u!=null?{span:d,offset:c,order:f}=u:d=u;const _=a!==s?`-${a}`:"";d&&o.push(d===!0?`${e}${_}`:`${e}${_}-${d}`),f!=null&&l.push(`order${_}-${f}`),c!=null&&l.push(`offset${_}-${c}`)}),[{...r,className:te(n,...o,...l)},{as:t,bsPrefix:e,spans:o}]}const Vy=y.forwardRef((t,e)=>{const[{className:n,...r},{as:i="div",bsPrefix:s,spans:o}]=oR(t);return g.jsx(i,{...r,ref:e,className:te(n,!o.length&&s)})});Vy.displayName="Col";const lR={column:!1,visuallyHidden:!1},Ff=y.forwardRef(({as:t="label",bsPrefix:e,column:n,visuallyHidden:r,className:i,htmlFor:s,...o},l)=>{const{controlId:a}=y.useContext(Jt);e=Ee(e,"form-label");let u="col-form-label";typeof n=="string"&&(u=`${u} ${u}-${n}`);const d=te(i,e,r&&"visually-hidden",n&&u);return s=s||a,n?g.jsx(Vy,{ref:l,as:"label",className:d,htmlFor:s,...o}):g.jsx(t,{ref:l,className:d,htmlFor:s,...o})});Ff.displayName="FormLabel";Ff.defaultProps=lR;const Gy=y.forwardRef(({bsPrefix:t,className:e,id:n,...r},i)=>{const{controlId:s}=y.useContext(Jt);return t=Ee(t,"form-range"),g.jsx("input",{...r,type:"range",ref:i,className:te(e,t),id:n||s})});Gy.displayName="FormRange";const Ky=y.forwardRef(({bsPrefix:t,size:e,htmlSize:n,className:r,isValid:i=!1,isInvalid:s=!1,id:o,...l},a)=>{const{controlId:u}=y.useContext(Jt);return t=Ee(t,"form-select"),g.jsx("select",{...l,size:n,ref:a,className:te(r,t,e&&`${t}-${e}`,i&&"is-valid",s&&"is-invalid"),id:o||u})});Ky.displayName="FormSelect";const qy=y.forwardRef(({bsPrefix:t,className:e,as:n="small",muted:r,...i},s)=>(t=Ee(t,"form-text"),g.jsx(n,{...i,ref:s,className:te(e,t,r&&"text-muted")})));qy.displayName="FormText";const Qy=y.forwardRef((t,e)=>g.jsx(bl,{...t,ref:e,type:"switch"}));Qy.displayName="Switch";const aR=Object.assign(Qy,{Input:bl.Input,Label:bl.Label}),Yy=y.forwardRef(({bsPrefix:t,className:e,children:n,controlId:r,label:i,...s},o)=>(t=Ee(t,"form-floating"),g.jsxs(bf,{ref:o,className:te(e,t),controlId:r,...s,children:[n,g.jsx("label",{htmlFor:r,children:i})]})));Yy.displayName="FloatingLabel";const uR={_ref:wt.any,validated:wt.bool,as:wt.elementType},Uf=y.forwardRef(({className:t,validated:e,as:n="form",...r},i)=>g.jsx(n,{...r,ref:i,className:te(t,e&&"was-validated")}));Uf.displayName="Form";Uf.propTypes=uR;const Pe=Object.assign(Uf,{Group:bf,Control:iR,Floating:sR,Check:bl,Switch:aR,Label:Ff,Text:qy,Range:Gy,Select:Ky,FloatingLabel:Yy});var cR=function(t,e,n){var r=y.useRef(t);return y.useEffect(function(){e(t,r.current)||(r.current=t,n&&n())}),r},dR=function(t,e){var n=!t&&!e,r=!!t&&!!e&&t.isEqual(e);return n||r},fR=function(t,e){return cR(t,dR,e)};/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var pe=function(){return pe=Object.assign||function(e){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e},pe.apply(this,arguments)};function Le(t,e,n){if(n||arguments.length===2)for(var r=0,i=e.length,s;r<i;r++)(s||!(r in e))&&(s||(s=Array.prototype.slice.call(e,0,r)),s[r]=e[r]);return t.concat(s||Array.prototype.slice.call(e))}var Xy={loading:!0,value:{keys:[],values:[]}},hR=function(t,e){switch(e.type){case"add":return e.snapshot?pe(pe({},t),{error:void 0,value:Jy(t.value,e.snapshot,e.previousKey)}):t;case"change":return e.snapshot?pe(pe({},t),{error:void 0,value:mR(t.value,e.snapshot)}):t;case"error":return pe(pe({},t),{error:e.error,loading:!1,value:{keys:void 0,values:void 0}});case"move":return e.snapshot?pe(pe({},t),{error:void 0,value:gR(t.value,e.snapshot,e.previousKey)}):t;case"remove":return e.snapshot?pe(pe({},t),{error:void 0,value:Zy(t.value,e.snapshot)}):t;case"reset":return Xy;case"value":return pe(pe({},t),{error:void 0,loading:!1,value:pR(e.snapshots)});case"empty":return pe(pe({},t),{loading:!1,value:{keys:void 0,values:void 0}});default:return t}},pR=function(t){if(!t)return{keys:[],values:[]};var e=[],n=[];return t.forEach(function(r){r.key&&(e.push(r.key),n.push(r))}),{keys:e,values:n}},Jy=function(t,e,n){if(!e.key)return t;var r=t.keys,i=t.values;if(!n)return{keys:r?Le([e.key],r,!0):[e.key],values:i?Le([e],i,!0):[e]};var s=r?r.indexOf(n):0;return{keys:r?Le(Le(Le([],r.slice(0,s+1),!0),[e.key],!1),r.slice(s+1),!0):[e.key],values:i?Le(Le(Le([],i.slice(0,s+1),!0),[e],!1),i.slice(s+1),!0):[e]}},mR=function(t,e){if(!e.key)return t;var n=t.keys,r=t.values,i=n?n.indexOf(e.key):0;return pe(pe({},t),{values:r?Le(Le(Le([],r.slice(0,i),!0),[e],!1),r.slice(i+1),!0):[e]})},Zy=function(t,e){if(!e.key)return t;var n=t.keys,r=t.values,i=n?n.indexOf(e.key):0;return{keys:n?Le(Le([],n.slice(0,i),!0),n.slice(i+1),!0):[],values:r?Le(Le([],r.slice(0,i),!0),r.slice(i+1),!0):[]}},gR=function(t,e,n){var r=Zy(t,e);return Jy(r,e,n)},_R=function(){return y.useReducer(hR,Xy)},vR=function(t){var e=_R(),n=e[0],r=e[1],i=fR(t,function(){return r({type:"reset"})}),s=i.current;return y.useEffect(function(){if(!s){r({type:"empty"});return}var o=function(p,h){r({type:"add",previousKey:h,snapshot:p})},l=function(p){r({type:"change",snapshot:p})},a=function(p,h){r({type:"move",previousKey:h,snapshot:p})},u=function(p){r({type:"remove",snapshot:p})},d=function(p){r({type:"error",error:p})},c=function(p){r({type:"value",snapshots:p})},f,_=function(p){var h=p.val(),m=h?Object.keys(p.val()).length:0;if(m===0)f=nm(s,o,d),c([]);else{var E=[],I=function(k,T){if(m>0){m--,E.push(k),m===0&&c(E);return}o(k,T)};f=nm(s,I,d)}};hN(s,_,d,{onlyOnce:!0});var v=pN(s,l,d),w=mN(s,a,d),R=gN(s,u,d);return function(){wo(s,"child_added",f),wo(s,"child_changed",v),wo(s,"child_moved",w),wo(s,"child_removed",R)}},[r,s]),[n.value.values,n.loading,n.error]};const yR=y.forwardRef(({bsPrefix:t,className:e,striped:n,bordered:r,borderless:i,hover:s,size:o,variant:l,responsive:a,...u},d)=>{const c=Ee(t,"table"),f=te(e,c,l&&`${c}-${l}`,o&&`${c}-${o}`,n&&`${c}-${typeof n=="string"?`striped-${n}`:"striped"}`,r&&`${c}-bordered`,i&&`${c}-borderless`,s&&`${c}-hover`),_=g.jsx("table",{...u,className:f,ref:d});if(a){let v=`${c}-responsive`;return typeof a=="string"&&(v=`${v}-${a}`),g.jsx("div",{className:v,children:_})}return _});function wR(){const{user:t,database:e}=y.useContext(Sr),[n,r,i]=vR(Dl(e,`/users/${t.uid}/universities/`)),s=d=>{let c;return d.includes("Not")?c="danger":d==="N/A"||d==="In Process"?c="primary":c="success",g.jsx("span",{className:`fw-semibold text-${c}`,children:d})},o=new Date,l=d=>{let c;switch(d){case"Ambitious":c="danger";break;case"Moderate":c="warning";break;case"Safe":c="success";break;default:c=""}return`table-${c}`},a=(d,c)=>{let f,_;return d<0||c==="Applied"?(f="muted",_=""):d<15?(f="light",_="danger"):d<30?(f="dark",_="warning"):(f="light",_="success"),`text-${f} bg-${_}`},u=(d,c)=>{confirm(`Do you really want to remove ${d} from the list?`)&&Ty(Dl(e,`/users/${t.uid}/universities/`+c),null)};return g.jsx("div",{className:"table-responsive my-5",children:g.jsxs(yR,{bordered:!0,children:[g.jsx("thead",{className:"table-dark",children:g.jsxs("tr",{children:[g.jsx("th",{children:"#"}),g.jsx("th",{children:"University"}),g.jsx("th",{children:"Status"}),g.jsx("th",{children:"Deadline"}),g.jsx("th",{children:"SOP"}),g.jsx("th",{children:"Personal History"}),g.jsx("th",{children:"LOR1"}),g.jsx("th",{children:"LOR2"}),g.jsx("th",{children:"LOR3"}),g.jsx("th",{children:"Fees"}),g.jsx("th",{children:"Fees Status"}),g.jsx("th",{children:"Options"})]})}),g.jsxs("tbody",{children:[i&&g.jsx("tr",{children:g.jsx("td",{colSpan:3,children:g.jsxs("strong",{children:["Error: ",i]})})}),i&&g.jsx("tr",{children:g.jsx("td",{colSpan:3,children:g.jsx("strong",{children:"Loading..."})})}),!r&&n&&n.map((d,c)=>{const f=d.val(),_=new Date(f.deadline),v=Math.ceil((_-o)/(1e3*60*60*24));return g.jsxs("tr",{className:l(f.type),children:[g.jsx("td",{children:c}),g.jsx("td",{children:f.university}),g.jsx("td",{children:s(f.status)}),g.jsx("td",{className:a(v,f.status),children:_.toLocaleDateString(void 0,{year:"numeric",month:"short",day:"numeric"})}),g.jsx("td",{children:s(f.sop)}),g.jsx("td",{children:s(f.history)}),g.jsx("td",{children:s(f.lor1)}),g.jsx("td",{children:s(f.lor2)}),g.jsx("td",{children:s(f.lor3)}),g.jsxs("td",{children:["$ ",f.fees]}),g.jsx("td",{children:s(f.feestatus)}),g.jsxs("td",{children:[g.jsx(vr,{variant:"info",size:"sm",disabled:!0,children:"✏"})," ",g.jsx(vr,{variant:"danger",size:"sm",onClick:()=>u(f.university,d.key),children:"🗑"})]})]},c)})]})]})})}function ER(){const{user:t}=y.useContext(Sr),[e,n]=y.useState(!1);return g.jsxs(g.Fragment,{children:[g.jsxs("div",{className:"d-flex justify-content-between",children:[g.jsxs("h4",{children:["Welcome, ",t.displayName]}),g.jsx("button",{className:"btn btn-primary",onClick:()=>n(!0),children:"Add University"})]}),g.jsx(wR,{}),g.jsx(CR,{showUniversityModal:e,setShowUniversityModal:n})]})}function CR({showUniversityModal:t,setShowUniversityModal:e}){const{user:n,database:r}=y.useContext(Sr),i=()=>e(!1),s=y.useRef(),o=l=>{l.preventDefault();const a=`/users/${n.uid}/universities/`,d={[`${a}${dN(_r(Dl(r),a)).key}`]:{university:s.current.university.value,type:s.current.type.value,status:s.current.status.value,deadline:s.current.deadline.value,sop:s.current.sop.value,lor1:s.current.lor1.value,lor2:s.current.lor2.value,lor3:s.current.lor3.value,history:s.current.history.value,fees:s.current.fees.value,feestatus:s.current.feestatus.value}};return fN(Dl(r),d)};return g.jsxs(So,{show:t,onHide:i,backdrop:"static",centered:!0,children:[g.jsx(So.Header,{closeButton:!0,children:g.jsx(So.Title,{children:"Add University"})}),g.jsx(So.Body,{children:g.jsxs(Pe,{ref:s,onSubmit:o,children:[g.jsxs(nt,{className:"mb-3",children:[g.jsx(Pe.Control,{type:"text",placeholder:"Enter University Name",id:"university",required:!0}),g.jsxs(Pe.Select,{id:"type",required:!0,children:[g.jsx("option",{value:"Safe",children:"Safe"}),g.jsx("option",{value:"Moderate",children:"Moderate"}),g.jsx("option",{value:"Ambitious",children:"Ambitious"})]})]}),g.jsxs(Pe.Group,{className:"mb-3",controlId:"status",children:[g.jsx(Pe.Label,{children:"Application Status"}),g.jsxs(Pe.Select,{required:!0,children:[g.jsx("option",{value:"Not Applied",children:"Not Applied"}),g.jsx("option",{value:"In Process",children:"In Process"}),g.jsx("option",{value:"Applied",children:"Applied"})]})]}),g.jsxs(Pe.Group,{className:"mb-3",controlId:"deadline",children:[g.jsx(Pe.Label,{children:"Application Deadline"}),g.jsx(Pe.Control,{type:"date",placeholder:"Application Deadline",required:!0})]}),g.jsxs(nt,{className:"mb-3",children:[g.jsx(nt.Text,{children:"Statement of Purpose"}),g.jsxs(Pe.Select,{id:"sop",required:!0,children:[g.jsx("option",{value:"Not Submitted",children:"Not Submitted"}),g.jsx("option",{value:"Submitted",children:"Submitted"}),g.jsx("option",{value:"N/A",children:"N/A"})]})]}),g.jsxs(nt,{className:"mb-3",children:[g.jsx(nt.Text,{children:"Personal History Statement"}),g.jsxs(Pe.Select,{id:"history",required:!0,children:[g.jsx("option",{value:"Not Submitted",children:"Not Submitted"}),g.jsx("option",{value:"Submitted",children:"Submitted"}),g.jsx("option",{value:"N/A",children:"N/A"})]})]}),g.jsxs(nt,{className:"mb-3",children:[g.jsx(nt.Text,{children:"Letter of Recommendation - 1"}),g.jsxs(Pe.Select,{id:"lor1",required:!0,children:[g.jsx("option",{value:"Not Submitted",children:"Not Submitted"}),g.jsx("option",{value:"Submitted",children:"Submitted"}),g.jsx("option",{value:"N/A",children:"N/A"})]})]}),g.jsxs(nt,{className:"mb-3",children:[g.jsx(nt.Text,{children:"Letter of Recommendation - 2"}),g.jsxs(Pe.Select,{id:"lor2",required:!0,children:[g.jsx("option",{value:"Not Submitted",children:"Not Submitted"}),g.jsx("option",{value:"Submitted",children:"Submitted"}),g.jsx("option",{value:"N/A",children:"N/A"})]})]}),g.jsxs(nt,{className:"mb-3",children:[g.jsx(nt.Text,{children:"Letter of Recommendation - 3"}),g.jsxs(Pe.Select,{id:"lor3",required:!0,children:[g.jsx("option",{value:"Not Submitted",children:"Not Submitted"}),g.jsx("option",{value:"Submitted",children:"Submitted"}),g.jsx("option",{value:"N/A",children:"N/A"})]})]}),g.jsxs(nt,{className:"mb-3",children:[g.jsx(Pe.Control,{type:"number",min:0,max:1e3,placeholder:"Application Fees in $",id:"fees",required:!0}),g.jsxs(Pe.Select,{id:"feestatus",required:!0,children:[g.jsx("option",{value:"Not Paid",children:"Not Paid"}),g.jsx("option",{value:"Paid",children:"Paid"})]})]}),g.jsx("div",{className:"text-center",children:g.jsx(vr,{variant:"primary",type:"submit",children:"Add"})})]})})]})}const SR="AIzaSyBxuoXm3ht8X5s08bi_7Agx5F3od6p-Erk",kR="uni-applications-tracker.firebaseapp.com",IR="uni-applications-tracker",TR="uni-applications-tracker.appspot.com",NR="592447370337",xR="1:592447370337:web:9a02ad53beb2d71585e620",RR="https://uni-applications-tracker-default-rtdb.asia-southeast1.firebasedatabase.app",PR={apiKey:SR,authDomain:kR,projectId:IR,storageBucket:TR,messagingSenderId:NR,appId:xR,databaseURL:RR},e0=D_(PR),cm=hI(e0),OR=kN(e0);function AR(){const[t,e,n]=RN(cm);return g.jsx(Sr.Provider,{value:{auth:cm,database:OR,user:t},children:g.jsxs("div",{className:"d-flex flex-column vh-100 vw-100",children:[g.jsx("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark",children:g.jsxs("div",{className:"container-fluid",children:[g.jsx("a",{className:"navbar-brand",href:"#",children:"University Applications Tracker"}),g.jsx(HN,{})]})}),g.jsx("main",{className:"flex-grow-1 p-4",children:t?g.jsx(ER,{}):g.jsx("h3",{className:"text-center",children:"You need to be Signed In to access all features"})})]})})}/*!
 * cookie
 * Copyright(c) 2012-2014 Roman Shtylman
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */var t0=LR,dm=bR,DR=decodeURIComponent,MR=encodeURIComponent,ko=/^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;function LR(t,e){if(typeof t!="string")throw new TypeError("argument str must be a string");for(var n={},r=e||{},i=t.split(";"),s=r.decode||DR,o=0;o<i.length;o++){var l=i[o],a=l.indexOf("=");if(!(a<0)){var u=l.substring(0,a).trim();if(n[u]==null){var d=l.substring(a+1,l.length).trim();d[0]==='"'&&(d=d.slice(1,-1)),n[u]=FR(d,s)}}}return n}function bR(t,e,n){var r=n||{},i=r.encode||MR;if(typeof i!="function")throw new TypeError("option encode is invalid");if(!ko.test(t))throw new TypeError("argument name is invalid");var s=i(e);if(s&&!ko.test(s))throw new TypeError("argument val is invalid");var o=t+"="+s;if(r.maxAge!=null){var l=r.maxAge-0;if(isNaN(l)||!isFinite(l))throw new TypeError("option maxAge is invalid");o+="; Max-Age="+Math.floor(l)}if(r.domain){if(!ko.test(r.domain))throw new TypeError("option domain is invalid");o+="; Domain="+r.domain}if(r.path){if(!ko.test(r.path))throw new TypeError("option path is invalid");o+="; Path="+r.path}if(r.expires){if(typeof r.expires.toUTCString!="function")throw new TypeError("option expires is invalid");o+="; Expires="+r.expires.toUTCString()}if(r.httpOnly&&(o+="; HttpOnly"),r.secure&&(o+="; Secure"),r.sameSite){var a=typeof r.sameSite=="string"?r.sameSite.toLowerCase():r.sameSite;switch(a){case!0:o+="; SameSite=Strict";break;case"lax":o+="; SameSite=Lax";break;case"strict":o+="; SameSite=Strict";break;case"none":o+="; SameSite=None";break;default:throw new TypeError("option sameSite is invalid")}}return o}function FR(t,e){try{return e(t)}catch{return t}}function UR(){return typeof document=="object"&&typeof document.cookie=="string"}function jR(t,e){return typeof t=="string"?t0(t,e):typeof t=="object"&&t!==null?t:{}}function zR(t,e){return typeof e>"u"&&(e=!t||t[0]!=="{"&&t[0]!=="["&&t[0]!=='"'),!e}function fm(t,e){e===void 0&&(e={});var n=$R(t);if(zR(n,e.doNotParse))try{return JSON.parse(n)}catch{}return t}function $R(t){return t&&t[0]==="j"&&t[1]===":"?t.substr(2):t}var qn=globalThis&&globalThis.__assign||function(){return qn=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++){e=arguments[n];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])}return t},qn.apply(this,arguments)},BR=function(){function t(e,n){var r=this;this.changeListeners=[],this.HAS_DOCUMENT_COOKIE=!1,this.cookies=jR(e,n),new Promise(function(){r.HAS_DOCUMENT_COOKIE=UR()}).catch(function(){})}return t.prototype._updateBrowserValues=function(e){this.HAS_DOCUMENT_COOKIE&&(this.cookies=t0(document.cookie,e))},t.prototype._emitChange=function(e){for(var n=0;n<this.changeListeners.length;++n)this.changeListeners[n](e)},t.prototype.get=function(e,n,r){return n===void 0&&(n={}),this._updateBrowserValues(r),fm(this.cookies[e],n)},t.prototype.getAll=function(e,n){e===void 0&&(e={}),this._updateBrowserValues(n);var r={};for(var i in this.cookies)r[i]=fm(this.cookies[i],e);return r},t.prototype.set=function(e,n,r){var i;typeof n=="object"&&(n=JSON.stringify(n)),this.cookies=qn(qn({},this.cookies),(i={},i[e]=n,i)),this.HAS_DOCUMENT_COOKIE&&(document.cookie=dm(e,n,r)),this._emitChange({name:e,value:n,options:r})},t.prototype.remove=function(e,n){var r=n=qn(qn({},n),{expires:new Date(1970,1,1,0,0,1),maxAge:0});this.cookies=qn({},this.cookies),delete this.cookies[e],this.HAS_DOCUMENT_COOKIE&&(document.cookie=dm(e,"",r)),this._emitChange({name:e,value:void 0,options:n})},t.prototype.addChangeListener=function(e){this.changeListeners.push(e)},t.prototype.removeChangeListener=function(e){var n=this.changeListeners.indexOf(e);n>=0&&this.changeListeners.splice(n,1)},t}();const n0=BR;var r0=y.createContext(new n0),WR=r0.Provider;r0.Consumer;var HR=globalThis&&globalThis.__extends||function(){var t=function(e,n){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,i){r.__proto__=i}||function(r,i){for(var s in i)i.hasOwnProperty(s)&&(r[s]=i[s])},t(e,n)};return function(e,n){t(e,n);function r(){this.constructor=e}e.prototype=n===null?Object.create(n):(r.prototype=n.prototype,new r)}}(),VR=function(t){HR(e,t);function e(n){var r=t.call(this,n)||this;return n.cookies?r.cookies=n.cookies:r.cookies=new n0,r}return e.prototype.render=function(){return y.createElement(WR,{value:this.cookies},this.props.children)},e}(y.Component);const GR=VR;gu.createRoot(document.getElementById("root")).render(g.jsx(pn.StrictMode,{children:g.jsx(GR,{children:g.jsx(AR,{})})}));
