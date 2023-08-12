(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(a){if(a.ep)return;a.ep=!0;const i=n(a);fetch(a.href,i)}})();function ea(e,t){const n=Object.create(null),r=e.split(",");for(let a=0;a<r.length;a++)n[r[a]]=!0;return t?a=>!!n[a.toLowerCase()]:a=>!!n[a]}const _s="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",xs=ea(_s);function Bi(e){return!!e||e===""}function ta(e){if(F(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],a=ne(r)?As(r):ta(r);if(a)for(const i in a)t[i]=a[i]}return t}else{if(ne(e))return e;if(ee(e))return e}}const ws=/;(?![^(]*\))/g,ks=/:(.+)/;function As(e){const t={};return e.split(ws).forEach(n=>{if(n){const r=n.split(ks);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function qn(e){let t="";if(ne(e))t=e;else if(F(e))for(let n=0;n<e.length;n++){const r=qn(e[n]);r&&(t+=r+" ")}else if(ee(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const Kt=e=>ne(e)?e:e==null?"":F(e)||ee(e)&&(e.toString===Vi||!z(e.toString))?JSON.stringify(e,Yi,2):String(e),Yi=(e,t)=>t&&t.__v_isRef?Yi(e,t.value):It(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[r,a])=>(n[`${r} =>`]=a,n),{})}:Wi(t)?{[`Set(${t.size})`]:[...t.values()]}:ee(t)&&!F(t)&&!qi(t)?String(t):t,K={},Pt=[],Pe=()=>{},Es=()=>!1,Os=/^on[^a-z]/,Xn=e=>Os.test(e),na=e=>e.startsWith("onUpdate:"),ce=Object.assign,ra=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},Cs=Object.prototype.hasOwnProperty,$=(e,t)=>Cs.call(e,t),F=Array.isArray,It=e=>Jn(e)==="[object Map]",Wi=e=>Jn(e)==="[object Set]",z=e=>typeof e=="function",ne=e=>typeof e=="string",aa=e=>typeof e=="symbol",ee=e=>e!==null&&typeof e=="object",Ki=e=>ee(e)&&z(e.then)&&z(e.catch),Vi=Object.prototype.toString,Jn=e=>Vi.call(e),Ps=e=>Jn(e).slice(8,-1),qi=e=>Jn(e)==="[object Object]",ia=e=>ne(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Tn=ea(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Gn=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},Is=/-(\w)/g,Re=Gn(e=>e.replace(Is,(t,n)=>n?n.toUpperCase():"")),Ss=/\B([A-Z])/g,Ft=Gn(e=>e.replace(Ss,"-$1").toLowerCase()),Qn=Gn(e=>e.charAt(0).toUpperCase()+e.slice(1)),pr=Gn(e=>e?`on${Qn(e)}`:""),en=(e,t)=>!Object.is(e,t),hr=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},Dn=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},Ts=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let Ua;const Ns=()=>Ua||(Ua=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let Ne;class Ms{constructor(t=!1){this.active=!0,this.effects=[],this.cleanups=[],!t&&Ne&&(this.parent=Ne,this.index=(Ne.scopes||(Ne.scopes=[])).push(this)-1)}run(t){if(this.active){const n=Ne;try{return Ne=this,t()}finally{Ne=n}}}on(){Ne=this}off(){Ne=this.parent}stop(t){if(this.active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(this.parent&&!t){const a=this.parent.scopes.pop();a&&a!==this&&(this.parent.scopes[this.index]=a,a.index=this.index)}this.active=!1}}}function Ls(e,t=Ne){t&&t.active&&t.effects.push(e)}const oa=e=>{const t=new Set(e);return t.w=0,t.n=0,t},Xi=e=>(e.w&et)>0,Ji=e=>(e.n&et)>0,Fs=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=et},Rs=e=>{const{deps:t}=e;if(t.length){let n=0;for(let r=0;r<t.length;r++){const a=t[r];Xi(a)&&!Ji(a)?a.delete(e):t[n++]=a,a.w&=~et,a.n&=~et}t.length=n}},Er=new WeakMap;let Bt=0,et=1;const Or=30;let Ae;const dt=Symbol(""),Cr=Symbol("");class sa{constructor(t,n=null,r){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Ls(this,r)}run(){if(!this.active)return this.fn();let t=Ae,n=Qe;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=Ae,Ae=this,Qe=!0,et=1<<++Bt,Bt<=Or?Fs(this):Ba(this),this.fn()}finally{Bt<=Or&&Rs(this),et=1<<--Bt,Ae=this.parent,Qe=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Ae===this?this.deferStop=!0:this.active&&(Ba(this),this.onStop&&this.onStop(),this.active=!1)}}function Ba(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let Qe=!0;const Gi=[];function Rt(){Gi.push(Qe),Qe=!1}function zt(){const e=Gi.pop();Qe=e===void 0?!0:e}function ye(e,t,n){if(Qe&&Ae){let r=Er.get(e);r||Er.set(e,r=new Map);let a=r.get(n);a||r.set(n,a=oa()),Qi(a)}}function Qi(e,t){let n=!1;Bt<=Or?Ji(e)||(e.n|=et,n=!Xi(e)):n=!e.has(Ae),n&&(e.add(Ae),Ae.deps.push(e))}function $e(e,t,n,r,a,i){const o=Er.get(e);if(!o)return;let s=[];if(t==="clear")s=[...o.values()];else if(n==="length"&&F(e))o.forEach((l,c)=>{(c==="length"||c>=r)&&s.push(l)});else switch(n!==void 0&&s.push(o.get(n)),t){case"add":F(e)?ia(n)&&s.push(o.get("length")):(s.push(o.get(dt)),It(e)&&s.push(o.get(Cr)));break;case"delete":F(e)||(s.push(o.get(dt)),It(e)&&s.push(o.get(Cr)));break;case"set":It(e)&&s.push(o.get(dt));break}if(s.length===1)s[0]&&Pr(s[0]);else{const l=[];for(const c of s)c&&l.push(...c);Pr(oa(l))}}function Pr(e,t){const n=F(e)?e:[...e];for(const r of n)r.computed&&Ya(r);for(const r of n)r.computed||Ya(r)}function Ya(e,t){(e!==Ae||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const zs=ea("__proto__,__v_isRef,__isVue"),Zi=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(aa)),Ds=la(),js=la(!1,!0),$s=la(!0),Wa=Hs();function Hs(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const r=U(this);for(let i=0,o=this.length;i<o;i++)ye(r,"get",i+"");const a=r[t](...n);return a===-1||a===!1?r[t](...n.map(U)):a}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){Rt();const r=U(this)[t].apply(this,n);return zt(),r}}),e}function la(e=!1,t=!1){return function(r,a,i){if(a==="__v_isReactive")return!e;if(a==="__v_isReadonly")return e;if(a==="__v_isShallow")return t;if(a==="__v_raw"&&i===(e?t?rl:ao:t?ro:no).get(r))return r;const o=F(r);if(!e&&o&&$(Wa,a))return Reflect.get(Wa,a,i);const s=Reflect.get(r,a,i);return(aa(a)?Zi.has(a):zs(a))||(e||ye(r,"get",a),t)?s:ie(s)?o&&ia(a)?s:s.value:ee(s)?e?io(s):ua(s):s}}const Us=eo(),Bs=eo(!0);function eo(e=!1){return function(n,r,a,i){let o=n[r];if(tn(o)&&ie(o)&&!ie(a))return!1;if(!e&&!tn(a)&&(Ir(a)||(a=U(a),o=U(o)),!F(n)&&ie(o)&&!ie(a)))return o.value=a,!0;const s=F(n)&&ia(r)?Number(r)<n.length:$(n,r),l=Reflect.set(n,r,a,i);return n===U(i)&&(s?en(a,o)&&$e(n,"set",r,a):$e(n,"add",r,a)),l}}function Ys(e,t){const n=$(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&n&&$e(e,"delete",t,void 0),r}function Ws(e,t){const n=Reflect.has(e,t);return(!aa(t)||!Zi.has(t))&&ye(e,"has",t),n}function Ks(e){return ye(e,"iterate",F(e)?"length":dt),Reflect.ownKeys(e)}const to={get:Ds,set:Us,deleteProperty:Ys,has:Ws,ownKeys:Ks},Vs={get:$s,set(e,t){return!0},deleteProperty(e,t){return!0}},qs=ce({},to,{get:js,set:Bs}),fa=e=>e,Zn=e=>Reflect.getPrototypeOf(e);function vn(e,t,n=!1,r=!1){e=e.__v_raw;const a=U(e),i=U(t);n||(t!==i&&ye(a,"get",t),ye(a,"get",i));const{has:o}=Zn(a),s=r?fa:n?ma:nn;if(o.call(a,t))return s(e.get(t));if(o.call(a,i))return s(e.get(i));e!==a&&e.get(t)}function bn(e,t=!1){const n=this.__v_raw,r=U(n),a=U(e);return t||(e!==a&&ye(r,"has",e),ye(r,"has",a)),e===a?n.has(e):n.has(e)||n.has(a)}function yn(e,t=!1){return e=e.__v_raw,!t&&ye(U(e),"iterate",dt),Reflect.get(e,"size",e)}function Ka(e){e=U(e);const t=U(this);return Zn(t).has.call(t,e)||(t.add(e),$e(t,"add",e,e)),this}function Va(e,t){t=U(t);const n=U(this),{has:r,get:a}=Zn(n);let i=r.call(n,e);i||(e=U(e),i=r.call(n,e));const o=a.call(n,e);return n.set(e,t),i?en(t,o)&&$e(n,"set",e,t):$e(n,"add",e,t),this}function qa(e){const t=U(this),{has:n,get:r}=Zn(t);let a=n.call(t,e);a||(e=U(e),a=n.call(t,e)),r&&r.call(t,e);const i=t.delete(e);return a&&$e(t,"delete",e,void 0),i}function Xa(){const e=U(this),t=e.size!==0,n=e.clear();return t&&$e(e,"clear",void 0,void 0),n}function _n(e,t){return function(r,a){const i=this,o=i.__v_raw,s=U(o),l=t?fa:e?ma:nn;return!e&&ye(s,"iterate",dt),o.forEach((c,u)=>r.call(a,l(c),l(u),i))}}function xn(e,t,n){return function(...r){const a=this.__v_raw,i=U(a),o=It(i),s=e==="entries"||e===Symbol.iterator&&o,l=e==="keys"&&o,c=a[e](...r),u=n?fa:t?ma:nn;return!t&&ye(i,"iterate",l?Cr:dt),{next(){const{value:m,done:v}=c.next();return v?{value:m,done:v}:{value:s?[u(m[0]),u(m[1])]:u(m),done:v}},[Symbol.iterator](){return this}}}}function qe(e){return function(...t){return e==="delete"?!1:this}}function Xs(){const e={get(i){return vn(this,i)},get size(){return yn(this)},has:bn,add:Ka,set:Va,delete:qa,clear:Xa,forEach:_n(!1,!1)},t={get(i){return vn(this,i,!1,!0)},get size(){return yn(this)},has:bn,add:Ka,set:Va,delete:qa,clear:Xa,forEach:_n(!1,!0)},n={get(i){return vn(this,i,!0)},get size(){return yn(this,!0)},has(i){return bn.call(this,i,!0)},add:qe("add"),set:qe("set"),delete:qe("delete"),clear:qe("clear"),forEach:_n(!0,!1)},r={get(i){return vn(this,i,!0,!0)},get size(){return yn(this,!0)},has(i){return bn.call(this,i,!0)},add:qe("add"),set:qe("set"),delete:qe("delete"),clear:qe("clear"),forEach:_n(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{e[i]=xn(i,!1,!1),n[i]=xn(i,!0,!1),t[i]=xn(i,!1,!0),r[i]=xn(i,!0,!0)}),[e,n,t,r]}const[Js,Gs,Qs,Zs]=Xs();function ca(e,t){const n=t?e?Zs:Qs:e?Gs:Js;return(r,a,i)=>a==="__v_isReactive"?!e:a==="__v_isReadonly"?e:a==="__v_raw"?r:Reflect.get($(n,a)&&a in r?n:r,a,i)}const el={get:ca(!1,!1)},tl={get:ca(!1,!0)},nl={get:ca(!0,!1)},no=new WeakMap,ro=new WeakMap,ao=new WeakMap,rl=new WeakMap;function al(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function il(e){return e.__v_skip||!Object.isExtensible(e)?0:al(Ps(e))}function ua(e){return tn(e)?e:da(e,!1,to,el,no)}function ol(e){return da(e,!1,qs,tl,ro)}function io(e){return da(e,!0,Vs,nl,ao)}function da(e,t,n,r,a){if(!ee(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const i=a.get(e);if(i)return i;const o=il(e);if(o===0)return e;const s=new Proxy(e,o===2?r:n);return a.set(e,s),s}function St(e){return tn(e)?St(e.__v_raw):!!(e&&e.__v_isReactive)}function tn(e){return!!(e&&e.__v_isReadonly)}function Ir(e){return!!(e&&e.__v_isShallow)}function oo(e){return St(e)||tn(e)}function U(e){const t=e&&e.__v_raw;return t?U(t):e}function so(e){return Dn(e,"__v_skip",!0),e}const nn=e=>ee(e)?ua(e):e,ma=e=>ee(e)?io(e):e;function lo(e){Qe&&Ae&&(e=U(e),Qi(e.dep||(e.dep=oa())))}function fo(e,t){e=U(e),e.dep&&Pr(e.dep)}function ie(e){return!!(e&&e.__v_isRef===!0)}function At(e){return sl(e,!1)}function sl(e,t){return ie(e)?e:new ll(e,t)}class ll{constructor(t,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?t:U(t),this._value=n?t:nn(t)}get value(){return lo(this),this._value}set value(t){t=this.__v_isShallow?t:U(t),en(t,this._rawValue)&&(this._rawValue=t,this._value=this.__v_isShallow?t:nn(t),fo(this))}}function Nn(e){return ie(e)?e.value:e}const fl={get:(e,t,n)=>Nn(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const a=e[t];return ie(a)&&!ie(n)?(a.value=n,!0):Reflect.set(e,t,n,r)}};function co(e){return St(e)?e:new Proxy(e,fl)}class cl{constructor(t,n,r,a){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this._dirty=!0,this.effect=new sa(t,()=>{this._dirty||(this._dirty=!0,fo(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!a,this.__v_isReadonly=r}get value(){const t=U(this);return lo(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}function ul(e,t,n=!1){let r,a;const i=z(e);return i?(r=e,a=Pe):(r=e.get,a=e.set),new cl(r,a,i||!a,n)}function Ze(e,t,n,r){let a;try{a=r?e(...r):e()}catch(i){er(i,t,n)}return a}function Ie(e,t,n,r){if(z(e)){const i=Ze(e,t,n,r);return i&&Ki(i)&&i.catch(o=>{er(o,t,n)}),i}const a=[];for(let i=0;i<e.length;i++)a.push(Ie(e[i],t,n,r));return a}function er(e,t,n,r=!0){const a=t?t.vnode:null;if(t){let i=t.parent;const o=t.proxy,s=n;for(;i;){const c=i.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](e,o,s)===!1)return}i=i.parent}const l=t.appContext.config.errorHandler;if(l){Ze(l,null,10,[e,o,s]);return}}dl(e,n,a,r)}function dl(e,t,n,r=!0){console.error(e)}let jn=!1,Sr=!1;const be=[];let je=0;const Vt=[];let Yt=null,wt=0;const qt=[];let Je=null,kt=0;const uo=Promise.resolve();let pa=null,Tr=null;function ml(e){const t=pa||uo;return e?t.then(this?e.bind(this):e):t}function pl(e){let t=je+1,n=be.length;for(;t<n;){const r=t+n>>>1;rn(be[r])<e?t=r+1:n=r}return t}function mo(e){(!be.length||!be.includes(e,jn&&e.allowRecurse?je+1:je))&&e!==Tr&&(e.id==null?be.push(e):be.splice(pl(e.id),0,e),po())}function po(){!jn&&!Sr&&(Sr=!0,pa=uo.then(vo))}function hl(e){const t=be.indexOf(e);t>je&&be.splice(t,1)}function ho(e,t,n,r){F(e)?n.push(...e):(!t||!t.includes(e,e.allowRecurse?r+1:r))&&n.push(e),po()}function gl(e){ho(e,Yt,Vt,wt)}function vl(e){ho(e,Je,qt,kt)}function tr(e,t=null){if(Vt.length){for(Tr=t,Yt=[...new Set(Vt)],Vt.length=0,wt=0;wt<Yt.length;wt++)Yt[wt]();Yt=null,wt=0,Tr=null,tr(e,t)}}function go(e){if(tr(),qt.length){const t=[...new Set(qt)];if(qt.length=0,Je){Je.push(...t);return}for(Je=t,Je.sort((n,r)=>rn(n)-rn(r)),kt=0;kt<Je.length;kt++)Je[kt]();Je=null,kt=0}}const rn=e=>e.id==null?1/0:e.id;function vo(e){Sr=!1,jn=!0,tr(e),be.sort((n,r)=>rn(n)-rn(r));const t=Pe;try{for(je=0;je<be.length;je++){const n=be[je];n&&n.active!==!1&&Ze(n,null,14)}}finally{je=0,be.length=0,go(),jn=!1,pa=null,(be.length||Vt.length||qt.length)&&vo(e)}}function bl(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||K;let a=n;const i=t.startsWith("update:"),o=i&&t.slice(7);if(o&&o in r){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:m,trim:v}=r[u]||K;v&&(a=n.map(k=>k.trim())),m&&(a=n.map(Ts))}let s,l=r[s=pr(t)]||r[s=pr(Re(t))];!l&&i&&(l=r[s=pr(Ft(t))]),l&&Ie(l,e,6,a);const c=r[s+"Once"];if(c){if(!e.emitted)e.emitted={};else if(e.emitted[s])return;e.emitted[s]=!0,Ie(c,e,6,a)}}function bo(e,t,n=!1){const r=t.emitsCache,a=r.get(e);if(a!==void 0)return a;const i=e.emits;let o={},s=!1;if(!z(e)){const l=c=>{const u=bo(c,t,!0);u&&(s=!0,ce(o,u))};!n&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!i&&!s?(r.set(e,null),null):(F(i)?i.forEach(l=>o[l]=null):ce(o,i),r.set(e,o),o)}function nr(e,t){return!e||!Xn(t)?!1:(t=t.slice(2).replace(/Once$/,""),$(e,t[0].toLowerCase()+t.slice(1))||$(e,Ft(t))||$(e,t))}let Le=null,rr=null;function $n(e){const t=Le;return Le=e,rr=e&&e.type.__scopeId||null,t}function yl(e){rr=e}function _l(){rr=null}function xl(e,t=Le,n){if(!t||e._n)return e;const r=(...a)=>{r._d&&ii(-1);const i=$n(t),o=e(...a);return $n(i),r._d&&ii(1),o};return r._n=!0,r._c=!0,r._d=!0,r}function gr(e){const{type:t,vnode:n,proxy:r,withProxy:a,props:i,propsOptions:[o],slots:s,attrs:l,emit:c,render:u,renderCache:m,data:v,setupState:k,ctx:R,inheritAttrs:D}=e;let T,y;const O=$n(e);try{if(n.shapeFlag&4){const j=a||r;T=Me(u.call(j,j,m,i,k,v,R)),y=l}else{const j=t;T=Me(j.length>1?j(i,{attrs:l,slots:s,emit:c}):j(i,null)),y=t.props?l:wl(l)}}catch(j){Xt.length=0,er(j,e,1),T=Z(ht)}let M=T;if(y&&D!==!1){const j=Object.keys(y),{shapeFlag:W}=M;j.length&&W&7&&(o&&j.some(na)&&(y=kl(y,o)),M=Nt(M,y))}return n.dirs&&(M=Nt(M),M.dirs=M.dirs?M.dirs.concat(n.dirs):n.dirs),n.transition&&(M.transition=n.transition),T=M,$n(O),T}const wl=e=>{let t;for(const n in e)(n==="class"||n==="style"||Xn(n))&&((t||(t={}))[n]=e[n]);return t},kl=(e,t)=>{const n={};for(const r in e)(!na(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function Al(e,t,n){const{props:r,children:a,component:i}=e,{props:o,children:s,patchFlag:l}=t,c=i.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?Ja(r,o,c):!!o;if(l&8){const u=t.dynamicProps;for(let m=0;m<u.length;m++){const v=u[m];if(o[v]!==r[v]&&!nr(c,v))return!0}}}else return(a||s)&&(!s||!s.$stable)?!0:r===o?!1:r?o?Ja(r,o,c):!0:!!o;return!1}function Ja(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let a=0;a<r.length;a++){const i=r[a];if(t[i]!==e[i]&&!nr(n,i))return!0}return!1}function El({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}const Ol=e=>e.__isSuspense;function Cl(e,t){t&&t.pendingBranch?F(e)?t.effects.push(...e):t.effects.push(e):vl(e)}function Pl(e,t){if(ae){let n=ae.provides;const r=ae.parent&&ae.parent.provides;r===n&&(n=ae.provides=Object.create(r)),n[e]=t}}function vr(e,t,n=!1){const r=ae||Le;if(r){const a=r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(a&&e in a)return a[e];if(arguments.length>1)return n&&z(t)?t.call(r.proxy):t}}const Ga={};function Mn(e,t,n){return yo(e,t,n)}function yo(e,t,{immediate:n,deep:r,flush:a,onTrack:i,onTrigger:o}=K){const s=ae;let l,c=!1,u=!1;if(ie(e)?(l=()=>e.value,c=Ir(e)):St(e)?(l=()=>e,r=!0):F(e)?(u=!0,c=e.some(y=>St(y)||Ir(y)),l=()=>e.map(y=>{if(ie(y))return y.value;if(St(y))return Et(y);if(z(y))return Ze(y,s,2)})):z(e)?t?l=()=>Ze(e,s,2):l=()=>{if(!(s&&s.isUnmounted))return m&&m(),Ie(e,s,3,[v])}:l=Pe,t&&r){const y=l;l=()=>Et(y())}let m,v=y=>{m=T.onStop=()=>{Ze(y,s,4)}};if(on)return v=Pe,t?n&&Ie(t,s,3,[l(),u?[]:void 0,v]):l(),Pe;let k=u?[]:Ga;const R=()=>{if(T.active)if(t){const y=T.run();(r||c||(u?y.some((O,M)=>en(O,k[M])):en(y,k)))&&(m&&m(),Ie(t,s,3,[y,k===Ga?void 0:k,v]),k=y)}else T.run()};R.allowRecurse=!!t;let D;a==="sync"?D=R:a==="post"?D=()=>pe(R,s&&s.suspense):D=()=>gl(R);const T=new sa(l,D);return t?n?R():k=T.run():a==="post"?pe(T.run.bind(T),s&&s.suspense):T.run(),()=>{T.stop(),s&&s.scope&&ra(s.scope.effects,T)}}function Il(e,t,n){const r=this.proxy,a=ne(e)?e.includes(".")?_o(r,e):()=>r[e]:e.bind(r,r);let i;z(t)?i=t:(i=t.handler,n=t);const o=ae;Mt(this);const s=yo(a,i.bind(r),n);return o?Mt(o):pt(),s}function _o(e,t){const n=t.split(".");return()=>{let r=e;for(let a=0;a<n.length&&r;a++)r=r[n[a]];return r}}function Et(e,t){if(!ee(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),ie(e))Et(e.value,t);else if(F(e))for(let n=0;n<e.length;n++)Et(e[n],t);else if(Wi(e)||It(e))e.forEach(n=>{Et(n,t)});else if(qi(e))for(const n in e)Et(e[n],t);return e}function ha(e){return z(e)?{setup:e,name:e.name}:e}const Ln=e=>!!e.type.__asyncLoader,xo=e=>e.type.__isKeepAlive;function Sl(e,t){wo(e,"a",t)}function Tl(e,t){wo(e,"da",t)}function wo(e,t,n=ae){const r=e.__wdc||(e.__wdc=()=>{let a=n;for(;a;){if(a.isDeactivated)return;a=a.parent}return e()});if(ar(t,r,n),n){let a=n.parent;for(;a&&a.parent;)xo(a.parent.vnode)&&Nl(r,t,n,a),a=a.parent}}function Nl(e,t,n,r){const a=ar(t,e,r,!0);Ao(()=>{ra(r[t],a)},n)}function ar(e,t,n=ae,r=!1){if(n){const a=n[e]||(n[e]=[]),i=t.__weh||(t.__weh=(...o)=>{if(n.isUnmounted)return;Rt(),Mt(n);const s=Ie(t,n,e,o);return pt(),zt(),s});return r?a.unshift(i):a.push(i),i}}const Ye=e=>(t,n=ae)=>(!on||e==="sp")&&ar(e,t,n),Ml=Ye("bm"),ko=Ye("m"),Ll=Ye("bu"),Fl=Ye("u"),Rl=Ye("bum"),Ao=Ye("um"),zl=Ye("sp"),Dl=Ye("rtg"),jl=Ye("rtc");function $l(e,t=ae){ar("ec",e,t)}function ot(e,t,n,r){const a=e.dirs,i=t&&t.dirs;for(let o=0;o<a.length;o++){const s=a[o];i&&(s.oldValue=i[o].value);let l=s.dir[r];l&&(Rt(),Ie(l,n,8,[e.el,s,e,t]),zt())}}const Eo="components";function ga(e,t){return Ul(Eo,e,!0,t)||e}const Hl=Symbol();function Ul(e,t,n=!0,r=!1){const a=Le||ae;if(a){const i=a.type;if(e===Eo){const s=bf(i);if(s&&(s===t||s===Re(t)||s===Qn(Re(t))))return i}const o=Qa(a[e]||i[e],t)||Qa(a.appContext[e],t);return!o&&r?i:o}}function Qa(e,t){return e&&(e[t]||e[Re(t)]||e[Qn(Re(t))])}function Nr(e,t,n,r){let a;const i=n&&n[r];if(F(e)||ne(e)){a=new Array(e.length);for(let o=0,s=e.length;o<s;o++)a[o]=t(e[o],o,void 0,i&&i[o])}else if(typeof e=="number"){a=new Array(e);for(let o=0;o<e;o++)a[o]=t(o+1,o,void 0,i&&i[o])}else if(ee(e))if(e[Symbol.iterator])a=Array.from(e,(o,s)=>t(o,s,void 0,i&&i[s]));else{const o=Object.keys(e);a=new Array(o.length);for(let s=0,l=o.length;s<l;s++){const c=o[s];a[s]=t(e[c],c,s,i&&i[s])}}else a=[];return n&&(n[r]=a),a}const Mr=e=>e?Do(e)?_a(e)||e.proxy:Mr(e.parent):null,Hn=ce(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Mr(e.parent),$root:e=>Mr(e.root),$emit:e=>e.emit,$options:e=>Co(e),$forceUpdate:e=>e.f||(e.f=()=>mo(e.update)),$nextTick:e=>e.n||(e.n=ml.bind(e.proxy)),$watch:e=>Il.bind(e)}),Bl={get({_:e},t){const{ctx:n,setupState:r,data:a,props:i,accessCache:o,type:s,appContext:l}=e;let c;if(t[0]!=="$"){const k=o[t];if(k!==void 0)switch(k){case 1:return r[t];case 2:return a[t];case 4:return n[t];case 3:return i[t]}else{if(r!==K&&$(r,t))return o[t]=1,r[t];if(a!==K&&$(a,t))return o[t]=2,a[t];if((c=e.propsOptions[0])&&$(c,t))return o[t]=3,i[t];if(n!==K&&$(n,t))return o[t]=4,n[t];Lr&&(o[t]=0)}}const u=Hn[t];let m,v;if(u)return t==="$attrs"&&ye(e,"get",t),u(e);if((m=s.__cssModules)&&(m=m[t]))return m;if(n!==K&&$(n,t))return o[t]=4,n[t];if(v=l.config.globalProperties,$(v,t))return v[t]},set({_:e},t,n){const{data:r,setupState:a,ctx:i}=e;return a!==K&&$(a,t)?(a[t]=n,!0):r!==K&&$(r,t)?(r[t]=n,!0):$(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(i[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:a,propsOptions:i}},o){let s;return!!n[o]||e!==K&&$(e,o)||t!==K&&$(t,o)||(s=i[0])&&$(s,o)||$(r,o)||$(Hn,o)||$(a.config.globalProperties,o)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:$(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};let Lr=!0;function Yl(e){const t=Co(e),n=e.proxy,r=e.ctx;Lr=!1,t.beforeCreate&&Za(t.beforeCreate,e,"bc");const{data:a,computed:i,methods:o,watch:s,provide:l,inject:c,created:u,beforeMount:m,mounted:v,beforeUpdate:k,updated:R,activated:D,deactivated:T,beforeDestroy:y,beforeUnmount:O,destroyed:M,unmounted:j,render:W,renderTracked:ue,renderTriggered:se,errorCaptured:Ke,serverPrefetch:oe,expose:it,inheritAttrs:bt,components:jt,directives:hn,filters:Ra}=t;if(c&&Wl(c,r,null,e.appContext.config.unwrapInjectedRef),o)for(const G in o){const V=o[G];z(V)&&(r[G]=V.bind(n))}if(a){const G=a.call(n,n);ee(G)&&(e.data=ua(G))}if(Lr=!0,i)for(const G in i){const V=i[G],ze=z(V)?V.bind(n,n):z(V.get)?V.get.bind(n,n):Pe,ur=!z(V)&&z(V.set)?V.set.bind(n):Pe,$t=xe({get:ze,set:ur});Object.defineProperty(r,G,{enumerable:!0,configurable:!0,get:()=>$t.value,set:yt=>$t.value=yt})}if(s)for(const G in s)Oo(s[G],r,n,G);if(l){const G=z(l)?l.call(n):l;Reflect.ownKeys(G).forEach(V=>{Pl(V,G[V])})}u&&Za(u,e,"c");function de(G,V){F(V)?V.forEach(ze=>G(ze.bind(n))):V&&G(V.bind(n))}if(de(Ml,m),de(ko,v),de(Ll,k),de(Fl,R),de(Sl,D),de(Tl,T),de($l,Ke),de(jl,ue),de(Dl,se),de(Rl,O),de(Ao,j),de(zl,oe),F(it))if(it.length){const G=e.exposed||(e.exposed={});it.forEach(V=>{Object.defineProperty(G,V,{get:()=>n[V],set:ze=>n[V]=ze})})}else e.exposed||(e.exposed={});W&&e.render===Pe&&(e.render=W),bt!=null&&(e.inheritAttrs=bt),jt&&(e.components=jt),hn&&(e.directives=hn)}function Wl(e,t,n=Pe,r=!1){F(e)&&(e=Fr(e));for(const a in e){const i=e[a];let o;ee(i)?"default"in i?o=vr(i.from||a,i.default,!0):o=vr(i.from||a):o=vr(i),ie(o)&&r?Object.defineProperty(t,a,{enumerable:!0,configurable:!0,get:()=>o.value,set:s=>o.value=s}):t[a]=o}}function Za(e,t,n){Ie(F(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function Oo(e,t,n,r){const a=r.includes(".")?_o(n,r):()=>n[r];if(ne(e)){const i=t[e];z(i)&&Mn(a,i)}else if(z(e))Mn(a,e.bind(n));else if(ee(e))if(F(e))e.forEach(i=>Oo(i,t,n,r));else{const i=z(e.handler)?e.handler.bind(n):t[e.handler];z(i)&&Mn(a,i,e)}}function Co(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:a,optionsCache:i,config:{optionMergeStrategies:o}}=e.appContext,s=i.get(t);let l;return s?l=s:!a.length&&!n&&!r?l=t:(l={},a.length&&a.forEach(c=>Un(l,c,o,!0)),Un(l,t,o)),i.set(t,l),l}function Un(e,t,n,r=!1){const{mixins:a,extends:i}=t;i&&Un(e,i,n,!0),a&&a.forEach(o=>Un(e,o,n,!0));for(const o in t)if(!(r&&o==="expose")){const s=Kl[o]||n&&n[o];e[o]=s?s(e[o],t[o]):t[o]}return e}const Kl={data:ei,props:lt,emits:lt,methods:lt,computed:lt,beforeCreate:le,created:le,beforeMount:le,mounted:le,beforeUpdate:le,updated:le,beforeDestroy:le,beforeUnmount:le,destroyed:le,unmounted:le,activated:le,deactivated:le,errorCaptured:le,serverPrefetch:le,components:lt,directives:lt,watch:ql,provide:ei,inject:Vl};function ei(e,t){return t?e?function(){return ce(z(e)?e.call(this,this):e,z(t)?t.call(this,this):t)}:t:e}function Vl(e,t){return lt(Fr(e),Fr(t))}function Fr(e){if(F(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function le(e,t){return e?[...new Set([].concat(e,t))]:t}function lt(e,t){return e?ce(ce(Object.create(null),e),t):t}function ql(e,t){if(!e)return t;if(!t)return e;const n=ce(Object.create(null),e);for(const r in t)n[r]=le(e[r],t[r]);return n}function Xl(e,t,n,r=!1){const a={},i={};Dn(i,ir,1),e.propsDefaults=Object.create(null),Po(e,t,a,i);for(const o in e.propsOptions[0])o in a||(a[o]=void 0);n?e.props=r?a:ol(a):e.type.props?e.props=a:e.props=i,e.attrs=i}function Jl(e,t,n,r){const{props:a,attrs:i,vnode:{patchFlag:o}}=e,s=U(a),[l]=e.propsOptions;let c=!1;if((r||o>0)&&!(o&16)){if(o&8){const u=e.vnode.dynamicProps;for(let m=0;m<u.length;m++){let v=u[m];if(nr(e.emitsOptions,v))continue;const k=t[v];if(l)if($(i,v))k!==i[v]&&(i[v]=k,c=!0);else{const R=Re(v);a[R]=Rr(l,s,R,k,e,!1)}else k!==i[v]&&(i[v]=k,c=!0)}}}else{Po(e,t,a,i)&&(c=!0);let u;for(const m in s)(!t||!$(t,m)&&((u=Ft(m))===m||!$(t,u)))&&(l?n&&(n[m]!==void 0||n[u]!==void 0)&&(a[m]=Rr(l,s,m,void 0,e,!0)):delete a[m]);if(i!==s)for(const m in i)(!t||!$(t,m))&&(delete i[m],c=!0)}c&&$e(e,"set","$attrs")}function Po(e,t,n,r){const[a,i]=e.propsOptions;let o=!1,s;if(t)for(let l in t){if(Tn(l))continue;const c=t[l];let u;a&&$(a,u=Re(l))?!i||!i.includes(u)?n[u]=c:(s||(s={}))[u]=c:nr(e.emitsOptions,l)||(!(l in r)||c!==r[l])&&(r[l]=c,o=!0)}if(i){const l=U(n),c=s||K;for(let u=0;u<i.length;u++){const m=i[u];n[m]=Rr(a,l,m,c[m],e,!$(c,m))}}return o}function Rr(e,t,n,r,a,i){const o=e[n];if(o!=null){const s=$(o,"default");if(s&&r===void 0){const l=o.default;if(o.type!==Function&&z(l)){const{propsDefaults:c}=a;n in c?r=c[n]:(Mt(a),r=c[n]=l.call(null,t),pt())}else r=l}o[0]&&(i&&!s?r=!1:o[1]&&(r===""||r===Ft(n))&&(r=!0))}return r}function Io(e,t,n=!1){const r=t.propsCache,a=r.get(e);if(a)return a;const i=e.props,o={},s=[];let l=!1;if(!z(e)){const u=m=>{l=!0;const[v,k]=Io(m,t,!0);ce(o,v),k&&s.push(...k)};!n&&t.mixins.length&&t.mixins.forEach(u),e.extends&&u(e.extends),e.mixins&&e.mixins.forEach(u)}if(!i&&!l)return r.set(e,Pt),Pt;if(F(i))for(let u=0;u<i.length;u++){const m=Re(i[u]);ti(m)&&(o[m]=K)}else if(i)for(const u in i){const m=Re(u);if(ti(m)){const v=i[u],k=o[m]=F(v)||z(v)?{type:v}:v;if(k){const R=ai(Boolean,k.type),D=ai(String,k.type);k[0]=R>-1,k[1]=D<0||R<D,(R>-1||$(k,"default"))&&s.push(m)}}}const c=[o,s];return r.set(e,c),c}function ti(e){return e[0]!=="$"}function ni(e){const t=e&&e.toString().match(/^\s*function (\w+)/);return t?t[1]:e===null?"null":""}function ri(e,t){return ni(e)===ni(t)}function ai(e,t){return F(t)?t.findIndex(n=>ri(n,e)):z(t)&&ri(t,e)?0:-1}const So=e=>e[0]==="_"||e==="$stable",va=e=>F(e)?e.map(Me):[Me(e)],Gl=(e,t,n)=>{if(t._n)return t;const r=xl((...a)=>va(t(...a)),n);return r._c=!1,r},To=(e,t,n)=>{const r=e._ctx;for(const a in e){if(So(a))continue;const i=e[a];if(z(i))t[a]=Gl(a,i,r);else if(i!=null){const o=va(i);t[a]=()=>o}}},No=(e,t)=>{const n=va(t);e.slots.default=()=>n},Ql=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=U(t),Dn(t,"_",n)):To(t,e.slots={})}else e.slots={},t&&No(e,t);Dn(e.slots,ir,1)},Zl=(e,t,n)=>{const{vnode:r,slots:a}=e;let i=!0,o=K;if(r.shapeFlag&32){const s=t._;s?n&&s===1?i=!1:(ce(a,t),!n&&s===1&&delete a._):(i=!t.$stable,To(t,a)),o=t}else t&&(No(e,t),o={default:1});if(i)for(const s in a)!So(s)&&!(s in o)&&delete a[s]};function Mo(){return{app:null,config:{isNativeTag:Es,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let ef=0;function tf(e,t){return function(r,a=null){z(r)||(r=Object.assign({},r)),a!=null&&!ee(a)&&(a=null);const i=Mo(),o=new Set;let s=!1;const l=i.app={_uid:ef++,_component:r,_props:a,_container:null,_context:i,_instance:null,version:_f,get config(){return i.config},set config(c){},use(c,...u){return o.has(c)||(c&&z(c.install)?(o.add(c),c.install(l,...u)):z(c)&&(o.add(c),c(l,...u))),l},mixin(c){return i.mixins.includes(c)||i.mixins.push(c),l},component(c,u){return u?(i.components[c]=u,l):i.components[c]},directive(c,u){return u?(i.directives[c]=u,l):i.directives[c]},mount(c,u,m){if(!s){const v=Z(r,a);return v.appContext=i,u&&t?t(v,c):e(v,c,m),s=!0,l._container=c,c.__vue_app__=l,_a(v.component)||v.component.proxy}},unmount(){s&&(e(null,l._container),delete l._container.__vue_app__)},provide(c,u){return i.provides[c]=u,l}};return l}}function zr(e,t,n,r,a=!1){if(F(e)){e.forEach((v,k)=>zr(v,t&&(F(t)?t[k]:t),n,r,a));return}if(Ln(r)&&!a)return;const i=r.shapeFlag&4?_a(r.component)||r.component.proxy:r.el,o=a?null:i,{i:s,r:l}=e,c=t&&t.r,u=s.refs===K?s.refs={}:s.refs,m=s.setupState;if(c!=null&&c!==l&&(ne(c)?(u[c]=null,$(m,c)&&(m[c]=null)):ie(c)&&(c.value=null)),z(l))Ze(l,s,12,[o,u]);else{const v=ne(l),k=ie(l);if(v||k){const R=()=>{if(e.f){const D=v?u[l]:l.value;a?F(D)&&ra(D,i):F(D)?D.includes(i)||D.push(i):v?(u[l]=[i],$(m,l)&&(m[l]=u[l])):(l.value=[i],e.k&&(u[e.k]=l.value))}else v?(u[l]=o,$(m,l)&&(m[l]=o)):ie(l)&&(l.value=o,e.k&&(u[e.k]=o))};o?(R.id=-1,pe(R,n)):R()}}}const pe=Cl;function nf(e){return rf(e)}function rf(e,t){const n=Ns();n.__VUE__=!0;const{insert:r,remove:a,patchProp:i,createElement:o,createText:s,createComment:l,setText:c,setElementText:u,parentNode:m,nextSibling:v,setScopeId:k=Pe,cloneNode:R,insertStaticContent:D}=e,T=(f,d,p,g=null,h=null,x=null,A=!1,_=null,w=!!d.dynamicChildren)=>{if(f===d)return;f&&!Ut(f,d)&&(g=gn(f),Ve(f,h,x,!0),f=null),d.patchFlag===-2&&(w=!1,d.dynamicChildren=null);const{type:b,ref:I,shapeFlag:C}=d;switch(b){case ba:y(f,d,p,g);break;case ht:O(f,d,p,g);break;case br:f==null&&M(d,p,g,A);break;case ve:hn(f,d,p,g,h,x,A,_,w);break;default:C&1?ue(f,d,p,g,h,x,A,_,w):C&6?Ra(f,d,p,g,h,x,A,_,w):(C&64||C&128)&&b.process(f,d,p,g,h,x,A,_,w,_t)}I!=null&&h&&zr(I,f&&f.ref,x,d||f,!d)},y=(f,d,p,g)=>{if(f==null)r(d.el=s(d.children),p,g);else{const h=d.el=f.el;d.children!==f.children&&c(h,d.children)}},O=(f,d,p,g)=>{f==null?r(d.el=l(d.children||""),p,g):d.el=f.el},M=(f,d,p,g)=>{[f.el,f.anchor]=D(f.children,d,p,g,f.el,f.anchor)},j=({el:f,anchor:d},p,g)=>{let h;for(;f&&f!==d;)h=v(f),r(f,p,g),f=h;r(d,p,g)},W=({el:f,anchor:d})=>{let p;for(;f&&f!==d;)p=v(f),a(f),f=p;a(d)},ue=(f,d,p,g,h,x,A,_,w)=>{A=A||d.type==="svg",f==null?se(d,p,g,h,x,A,_,w):it(f,d,h,x,A,_,w)},se=(f,d,p,g,h,x,A,_)=>{let w,b;const{type:I,props:C,shapeFlag:S,transition:N,patchFlag:H,dirs:B}=f;if(f.el&&R!==void 0&&H===-1)w=f.el=R(f.el);else{if(w=f.el=o(f.type,x,C&&C.is,C),S&8?u(w,f.children):S&16&&oe(f.children,w,null,g,h,x&&I!=="foreignObject",A,_),B&&ot(f,null,g,"created"),C){for(const q in C)q!=="value"&&!Tn(q)&&i(w,q,null,C[q],x,f.children,g,h,De);"value"in C&&i(w,"value",null,C.value),(b=C.onVnodeBeforeMount)&&Te(b,g,f)}Ke(w,f,f.scopeId,A,g)}B&&ot(f,null,g,"beforeMount");const Y=(!h||h&&!h.pendingBranch)&&N&&!N.persisted;Y&&N.beforeEnter(w),r(w,d,p),((b=C&&C.onVnodeMounted)||Y||B)&&pe(()=>{b&&Te(b,g,f),Y&&N.enter(w),B&&ot(f,null,g,"mounted")},h)},Ke=(f,d,p,g,h)=>{if(p&&k(f,p),g)for(let x=0;x<g.length;x++)k(f,g[x]);if(h){let x=h.subTree;if(d===x){const A=h.vnode;Ke(f,A,A.scopeId,A.slotScopeIds,h.parent)}}},oe=(f,d,p,g,h,x,A,_,w=0)=>{for(let b=w;b<f.length;b++){const I=f[b]=_?Ge(f[b]):Me(f[b]);T(null,I,d,p,g,h,x,A,_)}},it=(f,d,p,g,h,x,A)=>{const _=d.el=f.el;let{patchFlag:w,dynamicChildren:b,dirs:I}=d;w|=f.patchFlag&16;const C=f.props||K,S=d.props||K;let N;p&&st(p,!1),(N=S.onVnodeBeforeUpdate)&&Te(N,p,d,f),I&&ot(d,f,p,"beforeUpdate"),p&&st(p,!0);const H=h&&d.type!=="foreignObject";if(b?bt(f.dynamicChildren,b,_,p,g,H,x):A||ze(f,d,_,null,p,g,H,x,!1),w>0){if(w&16)jt(_,d,C,S,p,g,h);else if(w&2&&C.class!==S.class&&i(_,"class",null,S.class,h),w&4&&i(_,"style",C.style,S.style,h),w&8){const B=d.dynamicProps;for(let Y=0;Y<B.length;Y++){const q=B[Y],ke=C[q],xt=S[q];(xt!==ke||q==="value")&&i(_,q,ke,xt,h,f.children,p,g,De)}}w&1&&f.children!==d.children&&u(_,d.children)}else!A&&b==null&&jt(_,d,C,S,p,g,h);((N=S.onVnodeUpdated)||I)&&pe(()=>{N&&Te(N,p,d,f),I&&ot(d,f,p,"updated")},g)},bt=(f,d,p,g,h,x,A)=>{for(let _=0;_<d.length;_++){const w=f[_],b=d[_],I=w.el&&(w.type===ve||!Ut(w,b)||w.shapeFlag&70)?m(w.el):p;T(w,b,I,null,g,h,x,A,!0)}},jt=(f,d,p,g,h,x,A)=>{if(p!==g){for(const _ in g){if(Tn(_))continue;const w=g[_],b=p[_];w!==b&&_!=="value"&&i(f,_,b,w,A,d.children,h,x,De)}if(p!==K)for(const _ in p)!Tn(_)&&!(_ in g)&&i(f,_,p[_],null,A,d.children,h,x,De);"value"in g&&i(f,"value",p.value,g.value)}},hn=(f,d,p,g,h,x,A,_,w)=>{const b=d.el=f?f.el:s(""),I=d.anchor=f?f.anchor:s("");let{patchFlag:C,dynamicChildren:S,slotScopeIds:N}=d;N&&(_=_?_.concat(N):N),f==null?(r(b,p,g),r(I,p,g),oe(d.children,p,I,h,x,A,_,w)):C>0&&C&64&&S&&f.dynamicChildren?(bt(f.dynamicChildren,S,p,h,x,A,_),(d.key!=null||h&&d===h.subTree)&&Lo(f,d,!0)):ze(f,d,p,I,h,x,A,_,w)},Ra=(f,d,p,g,h,x,A,_,w)=>{d.slotScopeIds=_,f==null?d.shapeFlag&512?h.ctx.activate(d,p,g,A,w):cr(d,p,g,h,x,A,w):de(f,d,w)},cr=(f,d,p,g,h,x,A)=>{const _=f.component=mf(f,g,h);if(xo(f)&&(_.ctx.renderer=_t),pf(_),_.asyncDep){if(h&&h.registerDep(_,G),!f.el){const w=_.subTree=Z(ht);O(null,w,d,p)}return}G(_,f,d,p,h,x,A)},de=(f,d,p)=>{const g=d.component=f.component;if(Al(f,d,p))if(g.asyncDep&&!g.asyncResolved){V(g,d,p);return}else g.next=d,hl(g.update),g.update();else d.el=f.el,g.vnode=d},G=(f,d,p,g,h,x,A)=>{const _=()=>{if(f.isMounted){let{next:I,bu:C,u:S,parent:N,vnode:H}=f,B=I,Y;st(f,!1),I?(I.el=H.el,V(f,I,A)):I=H,C&&hr(C),(Y=I.props&&I.props.onVnodeBeforeUpdate)&&Te(Y,N,I,H),st(f,!0);const q=gr(f),ke=f.subTree;f.subTree=q,T(ke,q,m(ke.el),gn(ke),f,h,x),I.el=q.el,B===null&&El(f,q.el),S&&pe(S,h),(Y=I.props&&I.props.onVnodeUpdated)&&pe(()=>Te(Y,N,I,H),h)}else{let I;const{el:C,props:S}=d,{bm:N,m:H,parent:B}=f,Y=Ln(d);if(st(f,!1),N&&hr(N),!Y&&(I=S&&S.onVnodeBeforeMount)&&Te(I,B,d),st(f,!0),C&&mr){const q=()=>{f.subTree=gr(f),mr(C,f.subTree,f,h,null)};Y?d.type.__asyncLoader().then(()=>!f.isUnmounted&&q()):q()}else{const q=f.subTree=gr(f);T(null,q,p,g,f,h,x),d.el=q.el}if(H&&pe(H,h),!Y&&(I=S&&S.onVnodeMounted)){const q=d;pe(()=>Te(I,B,q),h)}(d.shapeFlag&256||B&&Ln(B.vnode)&&B.vnode.shapeFlag&256)&&f.a&&pe(f.a,h),f.isMounted=!0,d=p=g=null}},w=f.effect=new sa(_,()=>mo(b),f.scope),b=f.update=()=>w.run();b.id=f.uid,st(f,!0),b()},V=(f,d,p)=>{d.component=f;const g=f.vnode.props;f.vnode=d,f.next=null,Jl(f,d.props,g,p),Zl(f,d.children,p),Rt(),tr(void 0,f.update),zt()},ze=(f,d,p,g,h,x,A,_,w=!1)=>{const b=f&&f.children,I=f?f.shapeFlag:0,C=d.children,{patchFlag:S,shapeFlag:N}=d;if(S>0){if(S&128){$t(b,C,p,g,h,x,A,_,w);return}else if(S&256){ur(b,C,p,g,h,x,A,_,w);return}}N&8?(I&16&&De(b,h,x),C!==b&&u(p,C)):I&16?N&16?$t(b,C,p,g,h,x,A,_,w):De(b,h,x,!0):(I&8&&u(p,""),N&16&&oe(C,p,g,h,x,A,_,w))},ur=(f,d,p,g,h,x,A,_,w)=>{f=f||Pt,d=d||Pt;const b=f.length,I=d.length,C=Math.min(b,I);let S;for(S=0;S<C;S++){const N=d[S]=w?Ge(d[S]):Me(d[S]);T(f[S],N,p,null,h,x,A,_,w)}b>I?De(f,h,x,!0,!1,C):oe(d,p,g,h,x,A,_,w,C)},$t=(f,d,p,g,h,x,A,_,w)=>{let b=0;const I=d.length;let C=f.length-1,S=I-1;for(;b<=C&&b<=S;){const N=f[b],H=d[b]=w?Ge(d[b]):Me(d[b]);if(Ut(N,H))T(N,H,p,null,h,x,A,_,w);else break;b++}for(;b<=C&&b<=S;){const N=f[C],H=d[S]=w?Ge(d[S]):Me(d[S]);if(Ut(N,H))T(N,H,p,null,h,x,A,_,w);else break;C--,S--}if(b>C){if(b<=S){const N=S+1,H=N<I?d[N].el:g;for(;b<=S;)T(null,d[b]=w?Ge(d[b]):Me(d[b]),p,H,h,x,A,_,w),b++}}else if(b>S)for(;b<=C;)Ve(f[b],h,x,!0),b++;else{const N=b,H=b,B=new Map;for(b=H;b<=S;b++){const he=d[b]=w?Ge(d[b]):Me(d[b]);he.key!=null&&B.set(he.key,b)}let Y,q=0;const ke=S-H+1;let xt=!1,ja=0;const Ht=new Array(ke);for(b=0;b<ke;b++)Ht[b]=0;for(b=N;b<=C;b++){const he=f[b];if(q>=ke){Ve(he,h,x,!0);continue}let Se;if(he.key!=null)Se=B.get(he.key);else for(Y=H;Y<=S;Y++)if(Ht[Y-H]===0&&Ut(he,d[Y])){Se=Y;break}Se===void 0?Ve(he,h,x,!0):(Ht[Se-H]=b+1,Se>=ja?ja=Se:xt=!0,T(he,d[Se],p,null,h,x,A,_,w),q++)}const $a=xt?af(Ht):Pt;for(Y=$a.length-1,b=ke-1;b>=0;b--){const he=H+b,Se=d[he],Ha=he+1<I?d[he+1].el:g;Ht[b]===0?T(null,Se,p,Ha,h,x,A,_,w):xt&&(Y<0||b!==$a[Y]?yt(Se,p,Ha,2):Y--)}}},yt=(f,d,p,g,h=null)=>{const{el:x,type:A,transition:_,children:w,shapeFlag:b}=f;if(b&6){yt(f.component.subTree,d,p,g);return}if(b&128){f.suspense.move(d,p,g);return}if(b&64){A.move(f,d,p,_t);return}if(A===ve){r(x,d,p);for(let C=0;C<w.length;C++)yt(w[C],d,p,g);r(f.anchor,d,p);return}if(A===br){j(f,d,p);return}if(g!==2&&b&1&&_)if(g===0)_.beforeEnter(x),r(x,d,p),pe(()=>_.enter(x),h);else{const{leave:C,delayLeave:S,afterLeave:N}=_,H=()=>r(x,d,p),B=()=>{C(x,()=>{H(),N&&N()})};S?S(x,H,B):B()}else r(x,d,p)},Ve=(f,d,p,g=!1,h=!1)=>{const{type:x,props:A,ref:_,children:w,dynamicChildren:b,shapeFlag:I,patchFlag:C,dirs:S}=f;if(_!=null&&zr(_,null,p,f,!0),I&256){d.ctx.deactivate(f);return}const N=I&1&&S,H=!Ln(f);let B;if(H&&(B=A&&A.onVnodeBeforeUnmount)&&Te(B,d,f),I&6)ys(f.component,p,g);else{if(I&128){f.suspense.unmount(p,g);return}N&&ot(f,null,d,"beforeUnmount"),I&64?f.type.remove(f,d,p,h,_t,g):b&&(x!==ve||C>0&&C&64)?De(b,d,p,!1,!0):(x===ve&&C&384||!h&&I&16)&&De(w,d,p),g&&za(f)}(H&&(B=A&&A.onVnodeUnmounted)||N)&&pe(()=>{B&&Te(B,d,f),N&&ot(f,null,d,"unmounted")},p)},za=f=>{const{type:d,el:p,anchor:g,transition:h}=f;if(d===ve){bs(p,g);return}if(d===br){W(f);return}const x=()=>{a(p),h&&!h.persisted&&h.afterLeave&&h.afterLeave()};if(f.shapeFlag&1&&h&&!h.persisted){const{leave:A,delayLeave:_}=h,w=()=>A(p,x);_?_(f.el,x,w):w()}else x()},bs=(f,d)=>{let p;for(;f!==d;)p=v(f),a(f),f=p;a(d)},ys=(f,d,p)=>{const{bum:g,scope:h,update:x,subTree:A,um:_}=f;g&&hr(g),h.stop(),x&&(x.active=!1,Ve(A,f,d,p)),_&&pe(_,d),pe(()=>{f.isUnmounted=!0},d),d&&d.pendingBranch&&!d.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===d.pendingId&&(d.deps--,d.deps===0&&d.resolve())},De=(f,d,p,g=!1,h=!1,x=0)=>{for(let A=x;A<f.length;A++)Ve(f[A],d,p,g,h)},gn=f=>f.shapeFlag&6?gn(f.component.subTree):f.shapeFlag&128?f.suspense.next():v(f.anchor||f.el),Da=(f,d,p)=>{f==null?d._vnode&&Ve(d._vnode,null,null,!0):T(d._vnode||null,f,d,null,null,null,p),go(),d._vnode=f},_t={p:T,um:Ve,m:yt,r:za,mt:cr,mc:oe,pc:ze,pbc:bt,n:gn,o:e};let dr,mr;return t&&([dr,mr]=t(_t)),{render:Da,hydrate:dr,createApp:tf(Da,dr)}}function st({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function Lo(e,t,n=!1){const r=e.children,a=t.children;if(F(r)&&F(a))for(let i=0;i<r.length;i++){const o=r[i];let s=a[i];s.shapeFlag&1&&!s.dynamicChildren&&((s.patchFlag<=0||s.patchFlag===32)&&(s=a[i]=Ge(a[i]),s.el=o.el),n||Lo(o,s))}}function af(e){const t=e.slice(),n=[0];let r,a,i,o,s;const l=e.length;for(r=0;r<l;r++){const c=e[r];if(c!==0){if(a=n[n.length-1],e[a]<c){t[r]=a,n.push(r);continue}for(i=0,o=n.length-1;i<o;)s=i+o>>1,e[n[s]]<c?i=s+1:o=s;c<e[n[i]]&&(i>0&&(t[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=t[o];return n}const of=e=>e.__isTeleport,ve=Symbol(void 0),ba=Symbol(void 0),ht=Symbol(void 0),br=Symbol(void 0),Xt=[];let Oe=null;function re(e=!1){Xt.push(Oe=e?null:[])}function sf(){Xt.pop(),Oe=Xt[Xt.length-1]||null}let an=1;function ii(e){an+=e}function Fo(e){return e.dynamicChildren=an>0?Oe||Pt:null,sf(),an>0&&Oe&&Oe.push(e),e}function fe(e,t,n,r,a,i){return Fo(L(e,t,n,r,a,i,!0))}function Ro(e,t,n,r,a){return Fo(Z(e,t,n,r,a,!0))}function Dr(e){return e?e.__v_isVNode===!0:!1}function Ut(e,t){return e.type===t.type&&e.key===t.key}const ir="__vInternal",zo=({key:e})=>e??null,Fn=({ref:e,ref_key:t,ref_for:n})=>e!=null?ne(e)||ie(e)||z(e)?{i:Le,r:e,k:t,f:!!n}:e:null;function L(e,t=null,n=null,r=0,a=null,i=e===ve?0:1,o=!1,s=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&zo(t),ref:t&&Fn(t),scopeId:rr,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:a,dynamicChildren:null,appContext:null};return s?(ya(l,n),i&128&&e.normalize(l)):n&&(l.shapeFlag|=ne(n)?8:16),an>0&&!o&&Oe&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&Oe.push(l),l}const Z=lf;function lf(e,t=null,n=null,r=0,a=null,i=!1){if((!e||e===Hl)&&(e=ht),Dr(e)){const s=Nt(e,t,!0);return n&&ya(s,n),an>0&&!i&&Oe&&(s.shapeFlag&6?Oe[Oe.indexOf(e)]=s:Oe.push(s)),s.patchFlag|=-2,s}if(yf(e)&&(e=e.__vccOpts),t){t=ff(t);let{class:s,style:l}=t;s&&!ne(s)&&(t.class=qn(s)),ee(l)&&(oo(l)&&!F(l)&&(l=ce({},l)),t.style=ta(l))}const o=ne(e)?1:Ol(e)?128:of(e)?64:ee(e)?4:z(e)?2:0;return L(e,t,n,r,a,o,i,!0)}function ff(e){return e?oo(e)||ir in e?ce({},e):e:null}function Nt(e,t,n=!1){const{props:r,ref:a,patchFlag:i,children:o}=e,s=t?cf(r||{},t):r;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:s,key:s&&zo(s),ref:t&&t.ref?n&&a?F(a)?a.concat(Fn(t)):[a,Fn(t)]:Fn(t):a,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:o,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==ve?i===-1?16:i|16:i,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Nt(e.ssContent),ssFallback:e.ssFallback&&Nt(e.ssFallback),el:e.el,anchor:e.anchor}}function mt(e=" ",t=0){return Z(ba,null,e,t)}function Jt(e="",t=!1){return t?(re(),Ro(ht,null,e)):Z(ht,null,e)}function Me(e){return e==null||typeof e=="boolean"?Z(ht):F(e)?Z(ve,null,e.slice()):typeof e=="object"?Ge(e):Z(ba,null,String(e))}function Ge(e){return e.el===null||e.memo?e:Nt(e)}function ya(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(F(t))n=16;else if(typeof t=="object")if(r&65){const a=t.default;a&&(a._c&&(a._d=!1),ya(e,a()),a._c&&(a._d=!0));return}else{n=32;const a=t._;!a&&!(ir in t)?t._ctx=Le:a===3&&Le&&(Le.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else z(t)?(t={default:t,_ctx:Le},n=32):(t=String(t),r&64?(n=16,t=[mt(t)]):n=8);e.children=t,e.shapeFlag|=n}function cf(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const a in r)if(a==="class")t.class!==r.class&&(t.class=qn([t.class,r.class]));else if(a==="style")t.style=ta([t.style,r.style]);else if(Xn(a)){const i=t[a],o=r[a];o&&i!==o&&!(F(i)&&i.includes(o))&&(t[a]=i?[].concat(i,o):o)}else a!==""&&(t[a]=r[a])}return t}function Te(e,t,n,r=null){Ie(e,t,7,[n,r])}const uf=Mo();let df=0;function mf(e,t,n){const r=e.type,a=(t?t.appContext:e.appContext)||uf,i={uid:df++,vnode:e,type:r,parent:t,appContext:a,root:null,next:null,subTree:null,effect:null,update:null,scope:new Ms(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(a.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Io(r,a),emitsOptions:bo(r,a),emit:null,emitted:null,propsDefaults:K,inheritAttrs:r.inheritAttrs,ctx:K,data:K,props:K,attrs:K,slots:K,refs:K,setupState:K,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=bl.bind(null,i),e.ce&&e.ce(i),i}let ae=null;const Mt=e=>{ae=e,e.scope.on()},pt=()=>{ae&&ae.scope.off(),ae=null};function Do(e){return e.vnode.shapeFlag&4}let on=!1;function pf(e,t=!1){on=t;const{props:n,children:r}=e.vnode,a=Do(e);Xl(e,n,a,t),Ql(e,r);const i=a?hf(e,t):void 0;return on=!1,i}function hf(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=so(new Proxy(e.ctx,Bl));const{setup:r}=n;if(r){const a=e.setupContext=r.length>1?vf(e):null;Mt(e),Rt();const i=Ze(r,e,0,[e.props,a]);if(zt(),pt(),Ki(i)){if(i.then(pt,pt),t)return i.then(o=>{oi(e,o,t)}).catch(o=>{er(o,e,0)});e.asyncDep=i}else oi(e,i,t)}else jo(e,t)}function oi(e,t,n){z(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:ee(t)&&(e.setupState=co(t)),jo(e,n)}let si;function jo(e,t,n){const r=e.type;if(!e.render){if(!t&&si&&!r.render){const a=r.template;if(a){const{isCustomElement:i,compilerOptions:o}=e.appContext.config,{delimiters:s,compilerOptions:l}=r,c=ce(ce({isCustomElement:i,delimiters:s},o),l);r.render=si(a,c)}}e.render=r.render||Pe}Mt(e),Rt(),Yl(e),zt(),pt()}function gf(e){return new Proxy(e.attrs,{get(t,n){return ye(e,"get","$attrs"),t[n]}})}function vf(e){const t=r=>{e.exposed=r||{}};let n;return{get attrs(){return n||(n=gf(e))},slots:e.slots,emit:e.emit,expose:t}}function _a(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(co(so(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in Hn)return Hn[n](e)}}))}function bf(e){return z(e)&&e.displayName||e.name}function yf(e){return z(e)&&"__vccOpts"in e}const xe=(e,t)=>ul(e,t,on);function $o(e,t,n){const r=arguments.length;return r===2?ee(t)&&!F(t)?Dr(t)?Z(e,null,[t]):Z(e,t):Z(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Dr(n)&&(n=[n]),Z(e,t,n))}const _f="3.2.36",xf="http://www.w3.org/2000/svg",ft=typeof document<"u"?document:null,li=ft&&ft.createElement("template"),wf={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const a=t?ft.createElementNS(xf,e):ft.createElement(e,n?{is:n}:void 0);return e==="select"&&r&&r.multiple!=null&&a.setAttribute("multiple",r.multiple),a},createText:e=>ft.createTextNode(e),createComment:e=>ft.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>ft.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},cloneNode(e){const t=e.cloneNode(!0);return"_value"in e&&(t._value=e._value),t},insertStaticContent(e,t,n,r,a,i){const o=n?n.previousSibling:t.lastChild;if(a&&(a===i||a.nextSibling))for(;t.insertBefore(a.cloneNode(!0),n),!(a===i||!(a=a.nextSibling)););else{li.innerHTML=r?`<svg>${e}</svg>`:e;const s=li.content;if(r){const l=s.firstChild;for(;l.firstChild;)s.appendChild(l.firstChild);s.removeChild(l)}t.insertBefore(s,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function kf(e,t,n){const r=e._vtc;r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function Af(e,t,n){const r=e.style,a=ne(n);if(n&&!a){for(const i in n)jr(r,i,n[i]);if(t&&!ne(t))for(const i in t)n[i]==null&&jr(r,i,"")}else{const i=r.display;a?t!==n&&(r.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(r.display=i)}}const fi=/\s*!important$/;function jr(e,t,n){if(F(n))n.forEach(r=>jr(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=Ef(e,t);fi.test(n)?e.setProperty(Ft(r),n.replace(fi,""),"important"):e[r]=n}}const ci=["Webkit","Moz","ms"],yr={};function Ef(e,t){const n=yr[t];if(n)return n;let r=Re(t);if(r!=="filter"&&r in e)return yr[t]=r;r=Qn(r);for(let a=0;a<ci.length;a++){const i=ci[a]+r;if(i in e)return yr[t]=i}return t}const ui="http://www.w3.org/1999/xlink";function Of(e,t,n,r,a){if(r&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(ui,t.slice(6,t.length)):e.setAttributeNS(ui,t,n);else{const i=xs(t);n==null||i&&!Bi(n)?e.removeAttribute(t):e.setAttribute(t,i?"":n)}}function Cf(e,t,n,r,a,i,o){if(t==="innerHTML"||t==="textContent"){r&&o(r,a,i),e[t]=n??"";return}if(t==="value"&&e.tagName!=="PROGRESS"&&!e.tagName.includes("-")){e._value=n;const l=n??"";(e.value!==l||e.tagName==="OPTION")&&(e.value=l),n==null&&e.removeAttribute(t);return}let s=!1;if(n===""||n==null){const l=typeof e[t];l==="boolean"?n=Bi(n):n==null&&l==="string"?(n="",s=!0):l==="number"&&(n=0,s=!0)}try{e[t]=n}catch{}s&&e.removeAttribute(t)}const[Ho,Pf]=(()=>{let e=Date.now,t=!1;if(typeof window<"u"){Date.now()>document.createEvent("Event").timeStamp&&(e=performance.now.bind(performance));const n=navigator.userAgent.match(/firefox\/(\d+)/i);t=!!(n&&Number(n[1])<=53)}return[e,t]})();let $r=0;const If=Promise.resolve(),Sf=()=>{$r=0},Tf=()=>$r||(If.then(Sf),$r=Ho());function Nf(e,t,n,r){e.addEventListener(t,n,r)}function Mf(e,t,n,r){e.removeEventListener(t,n,r)}function Lf(e,t,n,r,a=null){const i=e._vei||(e._vei={}),o=i[t];if(r&&o)o.value=r;else{const[s,l]=Ff(t);if(r){const c=i[t]=Rf(r,a);Nf(e,s,c,l)}else o&&(Mf(e,s,o,l),i[t]=void 0)}}const di=/(?:Once|Passive|Capture)$/;function Ff(e){let t;if(di.test(e)){t={};let n;for(;n=e.match(di);)e=e.slice(0,e.length-n[0].length),t[n[0].toLowerCase()]=!0}return[Ft(e.slice(2)),t]}function Rf(e,t){const n=r=>{const a=r.timeStamp||Ho();(Pf||a>=n.attached-1)&&Ie(zf(r,n.value),t,5,[r])};return n.value=e,n.attached=Tf(),n}function zf(e,t){if(F(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>a=>!a._stopped&&r&&r(a))}else return t}const mi=/^on[a-z]/,Df=(e,t,n,r,a=!1,i,o,s,l)=>{t==="class"?kf(e,r,a):t==="style"?Af(e,n,r):Xn(t)?na(t)||Lf(e,t,n,r,o):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):jf(e,t,r,a))?Cf(e,t,r,i,o,s,l):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),Of(e,t,r,a))};function jf(e,t,n,r){return r?!!(t==="innerHTML"||t==="textContent"||t in e&&mi.test(t)&&z(n)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||mi.test(t)&&ne(n)?!1:t in e}const $f=ce({patchProp:Df},wf);let pi;function Hf(){return pi||(pi=nf($f))}const Uf=(...e)=>{const t=Hf().createApp(...e),{mount:n}=t;return t.mount=r=>{const a=Bf(r);if(!a)return;const i=t._component;!z(i)&&!i.render&&!i.template&&(i.template=a.innerHTML),a.innerHTML="";const o=n(a,!1,a instanceof SVGElement);return a instanceof Element&&(a.removeAttribute("v-cloak"),a.setAttribute("data-v-app","")),o},t};function Bf(e){return ne(e)?document.querySelector(e):e}const Yf="modulepreload",Wf=function(e){return"/"+e},hi={},ge=function(t,n,r){if(!n||n.length===0)return t();const a=document.getElementsByTagName("link");return Promise.all(n.map(i=>{if(i=Wf(i),i in hi)return;hi[i]=!0;const o=i.endsWith(".css"),s=o?'[rel="stylesheet"]':"";if(!!r)for(let u=a.length-1;u>=0;u--){const m=a[u];if(m.href===i&&(!o||m.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${s}`))return;const c=document.createElement("link");if(c.rel=o?"stylesheet":Yf,o||(c.as="script",c.crossOrigin=""),c.href=i,document.head.appendChild(c),o)return new Promise((u,m)=>{c.addEventListener("load",u),c.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>t()).catch(i=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=i,window.dispatchEvent(o),!o.defaultPrevented)throw i})},Kf="/assets/progra-6956f0cc.jpg",Vf="/assets/Joaquinparadela-e4e789bc.pdf",_r={profile:{name:"Joaquin Paradela",image:Kf,onClick(){console.log("Hola joaco")}},items:[{id:0,title:"Sobre mi",icon:"fa-house-user",onClick(){console.log("Sobre mi")},anchor:"about-me"},{id:1,title:"Habilidades",icon:"laptop-code",onClick(){console.log("Habilidades2")},anchor:"skills"},{id:2,title:"Proyectos",icon:"fa-fire",onClick(){console.log("Proyectos")},anchor:"projects"},{id:3,title:"Contacto",icon:"user-secret",onClick(){console.log("Contacto")},anchor:"contacts"},{id:4,title:"Descargar curriculum",icon:"file",onClick(){const e=document.createElement("a");e.href=Vf,e.download="Joaquinparadela.pdf",e.target="_blank",e.click()}}]};const xa=(e,t)=>{const n=e.__vccOpts||e;for(const[r,a]of t)n[r]=a;return n},qf={class:"icon"},Xf={key:0,class:"title"},Jf={name:"MenuItem",props:["item","collapsed"],setup(e){const t=e,n=At(!1),r=a=>{if(a.anchor){const i=document.getElementById(a.anchor);i&&(n.value=!0,i.scrollIntoView({behavior:"smooth"}),setTimeout(()=>{n.value=!1},500))}else console.log("NO EXISTE");a.onClick()};return(a,i)=>{const o=ga("font-awesome-icon");return re(),fe("a",{class:"item",onClick:i[0]||(i[0]=s=>r(e.item))},[L("div",qf,[Z(o,{icon:["fa-solid",t.item.icon],size:"2x"},null,8,["icon"])]),e.collapsed?Jt("",!0):(re(),fe("div",Xf,Kt(t.item.title),1))])}}},Gf=xa(Jf,[["__scopeId","data-v-48866741"]]);const Qf={class:"header"},Zf={class:"profile"},ec=["src"],tc={key:0,class:"profile-name"},nc={class:"menu-items"},rc={name:"Menu",setup(e){const t=At(!0);return(n,r)=>{const a=ga("font-awesome-icon");return re(),fe("div",{class:qn(["menu",t.value?"collapsed":"expanded"])},[L("div",Qf,[L("button",{class:"menu-button",onClick:r[0]||(r[0]=i=>t.value=!t.value)},[Z(a,{icon:"fa-solid fa-bars",size:"2x"})])]),L("div",Zf,[L("img",{src:Nn(_r).profile.image,alt:""},null,8,ec),t.value?Jt("",!0):(re(),fe("div",tc,Kt(Nn(_r).profile.name),1))]),L("div",nc,[L("ul",null,[(re(!0),fe(ve,null,Nr(Nn(_r).items,i=>(re(),Ro(Gf,{key:i.id,item:i,collapsed:t.value},null,8,["item","collapsed"]))),128))])])],2)}}},ac=xa(rc,[["__scopeId","data-v-7c44062d"]]);const at=e=>(yl("data-v-2ba442a8"),e=e(),_l(),e),ic={class:"center-content"},oc=at(()=>L("h1",{class:"blinking-brackets"},[L("span",{class:"opening-bracket"},"["),mt(" 👋 Bienvenido "),L("span",{class:"closing-bracket"},"]")],-1)),sc=at(()=>L("div",{class:"about-me",id:"about-me"},[L("h2",null,"Sobre mi"),L("p",null,[mt(" Soy estudiante de la Tecnicatura universitaria en programación de la Universidad Tecnológica Nacional. "),L("br"),mt(" Me apasiona programar, aprender constantemente y poder formar parte de la evolución de la informática. "),L("br"),mt(" 🎯Mi objetivo es seguir formándome en las distintas tecnologías del área de la informática y el desarrollo de software, y adquirir experiencia en la resolución de problemas cada vez más complejos que permitan hacer un cambio positivo en el mundo que nos rodea. Además, deseo desarrollar mi carrera profesional formando parte de una empresa que me permita aplicar todo lo aprendido hasta ahora y seguir creciendo tanto personal como profesionalmente para lograr los mejores resultados posibles. ")])],-1)),lc={class:"skills",id:"skills"},fc=at(()=>L("h2",null,"Habilidades",-1)),cc={class:"skills-container"},uc=["href"],dc=["src","alt"],mc={class:"skill-name"},pc={class:"projects",id:"projects"},hc=at(()=>L("h2",null,"Proyectos",-1)),gc={class:"projects-container"},vc=["src","alt"],bc=["src","alt"],yc={key:2,class:"image-navigation"},_c=["onClick"],xc=["onClick"],wc=["href"],kc=mt(" Repositorio"),Ac=mt(),Ec=at(()=>L("br",null,null,-1)),Oc=["href"],Cc=at(()=>L("br",null,null,-1)),Pc=["href"],Ic=at(()=>L("br",null,null,-1)),Sc={class:"contacts",id:"contacts"},Tc=at(()=>L("h2",null,"Contacto",-1)),Nc={href:"https://www.instagram.com/paradelajoaco/",class:"contact-link",target:"_blank"},Mc={href:"https://twitter.com/ParadelaJoaquin",class:"contact-link",target:"_blank"},Lc={href:"https://www.linkedin.com/in/joaquin-paradela/",class:"contact-link",target:"_blank"},Fc={href:"https://github.com/Joaco19975",class:"contact-link",target:"_blank"},Rc={name:"App",setup(e){const t=At([]),n=async()=>{const l=[{name:"JavaScript",image:await ge(()=>import("./javascriptt-e5d1e46c.js"),[]).then(c=>c.default),href:"https://es.wikipedia.org/wiki/JavaScript"},{name:"PHP",image:await ge(()=>import("./php-logo-2c068161.js"),[]).then(c=>c.default),href:"https://es.wikipedia.org/wiki/PHP"},{name:"Laravel",image:await ge(()=>import("./Laravel-88226ca7.js"),[]).then(c=>c.default),href:"https://es.wikipedia.org/wiki/Laravel"},{name:"SQL",image:await ge(()=>import("./sql-86658a74.js"),[]).then(c=>c.default),href:"https://es.wikipedia.org/wiki/SQL"},{name:"MySQL",image:await ge(()=>import("./MySQL-3f59451e.js"),[]).then(c=>c.default),href:"https://es.wikipedia.org/wiki/MySQL"},{name:"Git",image:await ge(()=>import("./Git-a91fb9e3.js"),[]).then(c=>c.default),href:"https://es.wikipedia.org/wiki/Git"},{name:"Github",image:await ge(()=>import("./github-e37a9839.js"),[]).then(c=>c.default),href:"https://es.wikipedia.org/wiki/GitHub"}];t.value=l},r=At([]),a=l=>{r.value[l]=(r.value[l]-1+o.value[l].images.length)%o.value[l].images.length},i=l=>{r.value[l]=(r.value[l]+1)%o.value[l].images.length},o=At([]),s=async()=>{const l=[{title:"Sistema de gestión de cine",description:"Sistema de gestión de cine para la compra de entradas online del lado del cliente, y la administración del lado del Administrador. (Arreglando errores de seguridad en producción)",images:[await ge(()=>import("./cine-bf606a71.js"),[]).then(c=>c.default)],manual:!0,manualLink:(await ge(()=>import("./Manual-Usuario-Cine-e3df1539.js"),[])).default,url:!0,href:"https://gestor-de-cine-production.up.railway.app/",githubhref:"https://github.com/Joaco19975/gestor-de-cine"},{title:"Sistema de gestion de hospital",description:"Sistema donde se puede agregar pacientes, medicinas y llevar un registro de qué medicina se le da al paciente, cualquier hospital se puede registrar.",images:[(await ge(()=>import("./principal-187dfdcc.js"),[])).default,(await ge(()=>import("./pacientes-81ae1b5f.js"),[])).default,(await ge(()=>import("./medicinas-c4d38593.js"),[])).default,(await ge(()=>import("./registro-354c6912.js"),[])).default],githubhref:"https://github.com/Joaco19975/Registros-medicos-pacientes"}];o.value=l,r.value=Array(o.value.length).fill(0)};return ko(()=>{const l=At(!0);setInterval(()=>{l.value=!l.value},1e3),s(),n()}),(l,c)=>{const u=ga("font-awesome-icon");return re(),fe(ve,null,[Z(ac),L("div",ic,[oc,sc,L("div",lc,[fc,L("div",cc,[(re(!0),fe(ve,null,Nr(t.value,m=>(re(),fe("div",{key:m.name,class:"skill-item"},[L("a",{href:m.href,style:{color:"black"},target:"_blank"},[L("img",{src:m.image,alt:m.name,class:"skill-image"},null,8,dc),L("div",mc,Kt(m.name),1)],8,uc)]))),128))])]),L("div",pc,[hc,L("div",gc,[(re(!0),fe(ve,null,Nr(o.value,(m,v)=>(re(),fe("div",{key:m.title,class:"project-item"},[L("div",null,[L("h3",null,Kt(m.title),1),Array.isArray(m.images)&&m.images.length>1?(re(),fe("img",{key:0,src:m.images[r.value[v]],alt:m.title,class:"project-image"},null,8,vc)):(re(),fe("img",{key:1,src:m.images[0],alt:m.title,class:"project-image"},null,8,bc)),Array.isArray(m.images)&&m.images.length>1?(re(),fe("div",yc,[L("button",{onClick:k=>a(v),class:"navigation-button"},"Anterior",8,_c),L("button",{onClick:k=>i(v),class:"navigation-button"},"Siguiente",8,xc)])):Jt("",!0)]),L("p",null,Kt(m.description),1),L("a",{href:m.githubhref,target:"_blank"},[Z(u,{icon:"fa-brands fa-github"}),kc],8,wc),Ac,Ec,m.url?(re(),fe("a",{key:0,href:m.href,target:"_blank"},"Visitar sitio web",8,Oc)):Jt("",!0),Cc,m.manual?(re(),fe("a",{key:1,href:m.manualLink,download:""},"Descargar manual de usuario",8,Pc)):Jt("",!0),Ic]))),128))])]),L("div",Sc,[Tc,L("a",Nc,[Z(u,{icon:["fab","instagram"]})]),L("a",Mc,[Z(u,{icon:"fa-brands fa-twitter"})]),L("a",Lc,[Z(u,{icon:"fa-brands fa-linkedin"})]),L("a",Fc,[Z(u,{icon:"fa-brands fa-github"})])])])],64)}}},zc=xa(Rc,[["__scopeId","data-v-2ba442a8"]]);function gi(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function E(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?gi(Object(n),!0).forEach(function(r){te(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):gi(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Bn(e){"@babel/helpers - typeof";return Bn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Bn(e)}function Dc(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function vi(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function jc(e,t,n){return t&&vi(e.prototype,t),n&&vi(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function te(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function wa(e,t){return Hc(e)||Bc(e,t)||Uo(e,t)||Wc()}function dn(e){return $c(e)||Uc(e)||Uo(e)||Yc()}function $c(e){if(Array.isArray(e))return Hr(e)}function Hc(e){if(Array.isArray(e))return e}function Uc(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Bc(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],a=!0,i=!1,o,s;try{for(n=n.call(e);!(a=(o=n.next()).done)&&(r.push(o.value),!(t&&r.length===t));a=!0);}catch(l){i=!0,s=l}finally{try{!a&&n.return!=null&&n.return()}finally{if(i)throw s}}return r}}function Uo(e,t){if(e){if(typeof e=="string")return Hr(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Hr(e,t)}}function Hr(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Yc(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Wc(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var bi=function(){},ka={},Bo={},Yo=null,Wo={mark:bi,measure:bi};try{typeof window<"u"&&(ka=window),typeof document<"u"&&(Bo=document),typeof MutationObserver<"u"&&(Yo=MutationObserver),typeof performance<"u"&&(Wo=performance)}catch{}var Kc=ka.navigator||{},yi=Kc.userAgent,_i=yi===void 0?"":yi,tt=ka,J=Bo,xi=Yo,wn=Wo;tt.document;var We=!!J.documentElement&&!!J.head&&typeof J.addEventListener=="function"&&typeof J.createElement=="function",Ko=~_i.indexOf("MSIE")||~_i.indexOf("Trident/"),kn,An,En,On,Cn,He="___FONT_AWESOME___",Ur=16,Vo="fa",qo="svg-inline--fa",gt="data-fa-i2svg",Br="data-fa-pseudo-element",Vc="data-fa-pseudo-element-pending",Aa="data-prefix",Ea="data-icon",wi="fontawesome-i2svg",qc="async",Xc=["HTML","HEAD","STYLE","SCRIPT"],Xo=function(){try{return!0}catch{return!1}}(),X="classic",Q="sharp",Oa=[X,Q];function mn(e){return new Proxy(e,{get:function(n,r){return r in n?n[r]:n[X]}})}var sn=mn((kn={},te(kn,X,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),te(kn,Q,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light"}),kn)),ln=mn((An={},te(An,X,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),te(An,Q,{solid:"fass",regular:"fasr",light:"fasl"}),An)),fn=mn((En={},te(En,X,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),te(En,Q,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light"}),En)),Jc=mn((On={},te(On,X,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),te(On,Q,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl"}),On)),Gc=/fa(s|r|l|t|d|b|k|ss|sr|sl)?[\-\ ]/,Jo="fa-layers-text",Qc=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,Zc=mn((Cn={},te(Cn,X,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),te(Cn,Q,{900:"fass",400:"fasr",300:"fasl"}),Cn)),Go=[1,2,3,4,5,6,7,8,9,10],eu=Go.concat([11,12,13,14,15,16,17,18,19,20]),tu=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],ct={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},cn=new Set;Object.keys(ln[X]).map(cn.add.bind(cn));Object.keys(ln[Q]).map(cn.add.bind(cn));var nu=[].concat(Oa,dn(cn),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",ct.GROUP,ct.SWAP_OPACITY,ct.PRIMARY,ct.SECONDARY]).concat(Go.map(function(e){return"".concat(e,"x")})).concat(eu.map(function(e){return"w-".concat(e)})),Gt=tt.FontAwesomeConfig||{};function ru(e){var t=J.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function au(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(J&&typeof J.querySelector=="function"){var iu=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];iu.forEach(function(e){var t=wa(e,2),n=t[0],r=t[1],a=au(ru(n));a!=null&&(Gt[r]=a)})}var Qo={styleDefault:"solid",familyDefault:"classic",cssPrefix:Vo,replacementClass:qo,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Gt.familyPrefix&&(Gt.cssPrefix=Gt.familyPrefix);var Lt=E(E({},Qo),Gt);Lt.autoReplaceSvg||(Lt.observeMutations=!1);var P={};Object.keys(Qo).forEach(function(e){Object.defineProperty(P,e,{enumerable:!0,set:function(n){Lt[e]=n,Qt.forEach(function(r){return r(P)})},get:function(){return Lt[e]}})});Object.defineProperty(P,"familyPrefix",{enumerable:!0,set:function(t){Lt.cssPrefix=t,Qt.forEach(function(n){return n(P)})},get:function(){return Lt.cssPrefix}});tt.FontAwesomeConfig=P;var Qt=[];function ou(e){return Qt.push(e),function(){Qt.splice(Qt.indexOf(e),1)}}var Xe=Ur,Fe={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function su(e){if(!(!e||!We)){var t=J.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=J.head.childNodes,r=null,a=n.length-1;a>-1;a--){var i=n[a],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=i)}return J.head.insertBefore(t,r),e}}var lu="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function un(){for(var e=12,t="";e-- >0;)t+=lu[Math.random()*62|0];return t}function Dt(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function Ca(e){return e.classList?Dt(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function Zo(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function fu(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(Zo(e[n]),'" ')},"").trim()}function or(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function Pa(e){return e.size!==Fe.size||e.x!==Fe.x||e.y!==Fe.y||e.rotate!==Fe.rotate||e.flipX||e.flipY}function cu(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,a={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),s="rotate(".concat(t.rotate," 0 0)"),l={transform:"".concat(i," ").concat(o," ").concat(s)},c={transform:"translate(".concat(r/2*-1," -256)")};return{outer:a,inner:l,path:c}}function uu(e){var t=e.transform,n=e.width,r=n===void 0?Ur:n,a=e.height,i=a===void 0?Ur:a,o=e.startCentered,s=o===void 0?!1:o,l="";return s&&Ko?l+="translate(".concat(t.x/Xe-r/2,"em, ").concat(t.y/Xe-i/2,"em) "):s?l+="translate(calc(-50% + ".concat(t.x/Xe,"em), calc(-50% + ").concat(t.y/Xe,"em)) "):l+="translate(".concat(t.x/Xe,"em, ").concat(t.y/Xe,"em) "),l+="scale(".concat(t.size/Xe*(t.flipX?-1:1),", ").concat(t.size/Xe*(t.flipY?-1:1),") "),l+="rotate(".concat(t.rotate,"deg) "),l}var du=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function es(){var e=Vo,t=qo,n=P.cssPrefix,r=P.replacementClass,a=du;if(n!==e||r!==t){var i=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),s=new RegExp("\\.".concat(t),"g");a=a.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(s,".".concat(r))}return a}var ki=!1;function xr(){P.autoAddCss&&!ki&&(su(es()),ki=!0)}var mu={mixout:function(){return{dom:{css:es,insertCss:xr}}},hooks:function(){return{beforeDOMElementCreation:function(){xr()},beforeI2svg:function(){xr()}}}},Ue=tt||{};Ue[He]||(Ue[He]={});Ue[He].styles||(Ue[He].styles={});Ue[He].hooks||(Ue[He].hooks={});Ue[He].shims||(Ue[He].shims=[]);var Ce=Ue[He],ts=[],pu=function e(){J.removeEventListener("DOMContentLoaded",e),Yn=1,ts.map(function(t){return t()})},Yn=!1;We&&(Yn=(J.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(J.readyState),Yn||J.addEventListener("DOMContentLoaded",pu));function hu(e){We&&(Yn?setTimeout(e,0):ts.push(e))}function pn(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,a=e.children,i=a===void 0?[]:a;return typeof e=="string"?Zo(e):"<".concat(t," ").concat(fu(r),">").concat(i.map(pn).join(""),"</").concat(t,">")}function Ai(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var gu=function(t,n){return function(r,a,i,o){return t.call(n,r,a,i,o)}},wr=function(t,n,r,a){var i=Object.keys(t),o=i.length,s=a!==void 0?gu(n,a):n,l,c,u;for(r===void 0?(l=1,u=t[i[0]]):(l=0,u=r);l<o;l++)c=i[l],u=s(u,t[c],c,t);return u};function vu(e){for(var t=[],n=0,r=e.length;n<r;){var a=e.charCodeAt(n++);if(a>=55296&&a<=56319&&n<r){var i=e.charCodeAt(n++);(i&64512)==56320?t.push(((a&1023)<<10)+(i&1023)+65536):(t.push(a),n--)}else t.push(a)}return t}function Yr(e){var t=vu(e);return t.length===1?t[0].toString(16):null}function bu(e,t){var n=e.length,r=e.charCodeAt(t),a;return r>=55296&&r<=56319&&n>t+1&&(a=e.charCodeAt(t+1),a>=56320&&a<=57343)?(r-55296)*1024+a-56320+65536:r}function Ei(e){return Object.keys(e).reduce(function(t,n){var r=e[n],a=!!r.icon;return a?t[r.iconName]=r.icon:t[n]=r,t},{})}function Wr(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,a=r===void 0?!1:r,i=Ei(t);typeof Ce.hooks.addPack=="function"&&!a?Ce.hooks.addPack(e,Ei(t)):Ce.styles[e]=E(E({},Ce.styles[e]||{}),i),e==="fas"&&Wr("fa",t)}var Pn,In,Sn,Ot=Ce.styles,yu=Ce.shims,_u=(Pn={},te(Pn,X,Object.values(fn[X])),te(Pn,Q,Object.values(fn[Q])),Pn),Ia=null,ns={},rs={},as={},is={},os={},xu=(In={},te(In,X,Object.keys(sn[X])),te(In,Q,Object.keys(sn[Q])),In);function wu(e){return~nu.indexOf(e)}function ku(e,t){var n=t.split("-"),r=n[0],a=n.slice(1).join("-");return r===e&&a!==""&&!wu(a)?a:null}var ss=function(){var t=function(i){return wr(Ot,function(o,s,l){return o[l]=wr(s,i,{}),o},{})};ns=t(function(a,i,o){if(i[3]&&(a[i[3]]=o),i[2]){var s=i[2].filter(function(l){return typeof l=="number"});s.forEach(function(l){a[l.toString(16)]=o})}return a}),rs=t(function(a,i,o){if(a[o]=o,i[2]){var s=i[2].filter(function(l){return typeof l=="string"});s.forEach(function(l){a[l]=o})}return a}),os=t(function(a,i,o){var s=i[2];return a[o]=o,s.forEach(function(l){a[l]=o}),a});var n="far"in Ot||P.autoFetchSvg,r=wr(yu,function(a,i){var o=i[0],s=i[1],l=i[2];return s==="far"&&!n&&(s="fas"),typeof o=="string"&&(a.names[o]={prefix:s,iconName:l}),typeof o=="number"&&(a.unicodes[o.toString(16)]={prefix:s,iconName:l}),a},{names:{},unicodes:{}});as=r.names,is=r.unicodes,Ia=sr(P.styleDefault,{family:P.familyDefault})};ou(function(e){Ia=sr(e.styleDefault,{family:P.familyDefault})});ss();function Sa(e,t){return(ns[e]||{})[t]}function Au(e,t){return(rs[e]||{})[t]}function ut(e,t){return(os[e]||{})[t]}function ls(e){return as[e]||{prefix:null,iconName:null}}function Eu(e){var t=is[e],n=Sa("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function nt(){return Ia}var Ta=function(){return{prefix:null,iconName:null,rest:[]}};function sr(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.family,r=n===void 0?X:n,a=sn[r][e],i=ln[r][e]||ln[r][a],o=e in Ce.styles?e:null;return i||o||null}var Oi=(Sn={},te(Sn,X,Object.keys(fn[X])),te(Sn,Q,Object.keys(fn[Q])),Sn);function lr(e){var t,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,a=r===void 0?!1:r,i=(t={},te(t,X,"".concat(P.cssPrefix,"-").concat(X)),te(t,Q,"".concat(P.cssPrefix,"-").concat(Q)),t),o=null,s=X;(e.includes(i[X])||e.some(function(c){return Oi[X].includes(c)}))&&(s=X),(e.includes(i[Q])||e.some(function(c){return Oi[Q].includes(c)}))&&(s=Q);var l=e.reduce(function(c,u){var m=ku(P.cssPrefix,u);if(Ot[u]?(u=_u[s].includes(u)?Jc[s][u]:u,o=u,c.prefix=u):xu[s].indexOf(u)>-1?(o=u,c.prefix=sr(u,{family:s})):m?c.iconName=m:u!==P.replacementClass&&u!==i[X]&&u!==i[Q]&&c.rest.push(u),!a&&c.prefix&&c.iconName){var v=o==="fa"?ls(c.iconName):{},k=ut(c.prefix,c.iconName);v.prefix&&(o=null),c.iconName=v.iconName||k||c.iconName,c.prefix=v.prefix||c.prefix,c.prefix==="far"&&!Ot.far&&Ot.fas&&!P.autoFetchSvg&&(c.prefix="fas")}return c},Ta());return(e.includes("fa-brands")||e.includes("fab"))&&(l.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(l.prefix="fad"),!l.prefix&&s===Q&&(Ot.fass||P.autoFetchSvg)&&(l.prefix="fass",l.iconName=ut(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||o==="fa")&&(l.prefix=nt()||"fas"),l}var Ou=function(){function e(){Dc(this,e),this.definitions={}}return jc(e,[{key:"add",value:function(){for(var n=this,r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];var o=a.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){n.definitions[s]=E(E({},n.definitions[s]||{}),o[s]),Wr(s,o[s]);var l=fn[X][s];l&&Wr(l,o[s]),ss()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var a=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(a).map(function(i){var o=a[i],s=o.prefix,l=o.iconName,c=o.icon,u=c[2];n[s]||(n[s]={}),u.length>0&&u.forEach(function(m){typeof m=="string"&&(n[s][m]=c)}),n[s][l]=c}),n}}]),e}(),Ci=[],Ct={},Tt={},Cu=Object.keys(Tt);function Pu(e,t){var n=t.mixoutsTo;return Ci=e,Ct={},Object.keys(Tt).forEach(function(r){Cu.indexOf(r)===-1&&delete Tt[r]}),Ci.forEach(function(r){var a=r.mixout?r.mixout():{};if(Object.keys(a).forEach(function(o){typeof a[o]=="function"&&(n[o]=a[o]),Bn(a[o])==="object"&&Object.keys(a[o]).forEach(function(s){n[o]||(n[o]={}),n[o][s]=a[o][s]})}),r.hooks){var i=r.hooks();Object.keys(i).forEach(function(o){Ct[o]||(Ct[o]=[]),Ct[o].push(i[o])})}r.provides&&r.provides(Tt)}),n}function Kr(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),a=2;a<n;a++)r[a-2]=arguments[a];var i=Ct[e]||[];return i.forEach(function(o){t=o.apply(null,[t].concat(r))}),t}function vt(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var a=Ct[e]||[];a.forEach(function(i){i.apply(null,n)})}function Be(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return Tt[e]?Tt[e].apply(null,t):void 0}function Vr(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||nt();if(t)return t=ut(n,t)||t,Ai(fs.definitions,n,t)||Ai(Ce.styles,n,t)}var fs=new Ou,Iu=function(){P.autoReplaceSvg=!1,P.observeMutations=!1,vt("noAuto")},Su={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return We?(vt("beforeI2svg",t),Be("pseudoElements2svg",t),Be("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;P.autoReplaceSvg===!1&&(P.autoReplaceSvg=!0),P.observeMutations=!0,hu(function(){Nu({autoReplaceSvgRoot:n}),vt("watch",t)})}},Tu={icon:function(t){if(t===null)return null;if(Bn(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:ut(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=sr(t[0]);return{prefix:r,iconName:ut(r,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(P.cssPrefix,"-"))>-1||t.match(Gc))){var a=lr(t.split(" "),{skipLookups:!0});return{prefix:a.prefix||nt(),iconName:ut(a.prefix,a.iconName)||a.iconName}}if(typeof t=="string"){var i=nt();return{prefix:i,iconName:ut(i,t)||t}}}},_e={noAuto:Iu,config:P,dom:Su,parse:Tu,library:fs,findIconDefinition:Vr,toHtml:pn},Nu=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,r=n===void 0?J:n;(Object.keys(Ce.styles).length>0||P.autoFetchSvg)&&We&&P.autoReplaceSvg&&_e.dom.i2svg({node:r})};function fr(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return pn(r)})}}),Object.defineProperty(e,"node",{get:function(){if(We){var r=J.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function Mu(e){var t=e.children,n=e.main,r=e.mask,a=e.attributes,i=e.styles,o=e.transform;if(Pa(o)&&n.found&&!r.found){var s=n.width,l=n.height,c={x:s/l/2,y:.5};a.style=or(E(E({},i),{},{"transform-origin":"".concat(c.x+o.x/16,"em ").concat(c.y+o.y/16,"em")}))}return[{tag:"svg",attributes:a,children:t}]}function Lu(e){var t=e.prefix,n=e.iconName,r=e.children,a=e.attributes,i=e.symbol,o=i===!0?"".concat(t,"-").concat(P.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:E(E({},a),{},{id:o}),children:r}]}]}function Na(e){var t=e.icons,n=t.main,r=t.mask,a=e.prefix,i=e.iconName,o=e.transform,s=e.symbol,l=e.title,c=e.maskId,u=e.titleId,m=e.extra,v=e.watchable,k=v===void 0?!1:v,R=r.found?r:n,D=R.width,T=R.height,y=a==="fak",O=[P.replacementClass,i?"".concat(P.cssPrefix,"-").concat(i):""].filter(function(oe){return m.classes.indexOf(oe)===-1}).filter(function(oe){return oe!==""||!!oe}).concat(m.classes).join(" "),M={children:[],attributes:E(E({},m.attributes),{},{"data-prefix":a,"data-icon":i,class:O,role:m.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(D," ").concat(T)})},j=y&&!~m.classes.indexOf("fa-fw")?{width:"".concat(D/T*16*.0625,"em")}:{};k&&(M.attributes[gt]=""),l&&(M.children.push({tag:"title",attributes:{id:M.attributes["aria-labelledby"]||"title-".concat(u||un())},children:[l]}),delete M.attributes.title);var W=E(E({},M),{},{prefix:a,iconName:i,main:n,mask:r,maskId:c,transform:o,symbol:s,styles:E(E({},j),m.styles)}),ue=r.found&&n.found?Be("generateAbstractMask",W)||{children:[],attributes:{}}:Be("generateAbstractIcon",W)||{children:[],attributes:{}},se=ue.children,Ke=ue.attributes;return W.children=se,W.attributes=Ke,s?Lu(W):Mu(W)}function Pi(e){var t=e.content,n=e.width,r=e.height,a=e.transform,i=e.title,o=e.extra,s=e.watchable,l=s===void 0?!1:s,c=E(E(E({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});l&&(c[gt]="");var u=E({},o.styles);Pa(a)&&(u.transform=uu({transform:a,startCentered:!0,width:n,height:r}),u["-webkit-transform"]=u.transform);var m=or(u);m.length>0&&(c.style=m);var v=[];return v.push({tag:"span",attributes:c,children:[t]}),i&&v.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),v}function Fu(e){var t=e.content,n=e.title,r=e.extra,a=E(E(E({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),i=or(r.styles);i.length>0&&(a.style=i);var o=[];return o.push({tag:"span",attributes:a,children:[t]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var kr=Ce.styles;function qr(e){var t=e[0],n=e[1],r=e.slice(4),a=wa(r,1),i=a[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(P.cssPrefix,"-").concat(ct.GROUP)},children:[{tag:"path",attributes:{class:"".concat(P.cssPrefix,"-").concat(ct.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(P.cssPrefix,"-").concat(ct.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:t,height:n,icon:o}}var Ru={found:!1,width:512,height:512};function zu(e,t){!Xo&&!P.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function Xr(e,t){var n=t;return t==="fa"&&P.styleDefault!==null&&(t=nt()),new Promise(function(r,a){if(Be("missingIconAbstract"),n==="fa"){var i=ls(e)||{};e=i.iconName||e,t=i.prefix||t}if(e&&t&&kr[t]&&kr[t][e]){var o=kr[t][e];return r(qr(o))}zu(e,t),r(E(E({},Ru),{},{icon:P.showMissingIcons&&e?Be("missingIconAbstract")||{}:{}}))})}var Ii=function(){},Jr=P.measurePerformance&&wn&&wn.mark&&wn.measure?wn:{mark:Ii,measure:Ii},Wt='FA "6.4.2"',Du=function(t){return Jr.mark("".concat(Wt," ").concat(t," begins")),function(){return cs(t)}},cs=function(t){Jr.mark("".concat(Wt," ").concat(t," ends")),Jr.measure("".concat(Wt," ").concat(t),"".concat(Wt," ").concat(t," begins"),"".concat(Wt," ").concat(t," ends"))},Ma={begin:Du,end:cs},Rn=function(){};function Si(e){var t=e.getAttribute?e.getAttribute(gt):null;return typeof t=="string"}function ju(e){var t=e.getAttribute?e.getAttribute(Aa):null,n=e.getAttribute?e.getAttribute(Ea):null;return t&&n}function $u(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(P.replacementClass)}function Hu(){if(P.autoReplaceSvg===!0)return zn.replace;var e=zn[P.autoReplaceSvg];return e||zn.replace}function Uu(e){return J.createElementNS("http://www.w3.org/2000/svg",e)}function Bu(e){return J.createElement(e)}function us(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,r=n===void 0?e.tag==="svg"?Uu:Bu:n;if(typeof e=="string")return J.createTextNode(e);var a=r(e.tag);Object.keys(e.attributes||[]).forEach(function(o){a.setAttribute(o,e.attributes[o])});var i=e.children||[];return i.forEach(function(o){a.appendChild(us(o,{ceFn:r}))}),a}function Yu(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var zn={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(a){n.parentNode.insertBefore(us(a),n)}),n.getAttribute(gt)===null&&P.keepOriginalSource){var r=J.createComment(Yu(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(t){var n=t[0],r=t[1];if(~Ca(n).indexOf(P.replacementClass))return zn.replace(t);var a=new RegExp("".concat(P.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var i=r[0].attributes.class.split(" ").reduce(function(s,l){return l===P.replacementClass||l.match(a)?s.toSvg.push(l):s.toNode.push(l),s},{toNode:[],toSvg:[]});r[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",i.toNode.join(" "))}var o=r.map(function(s){return pn(s)}).join(`
`);n.setAttribute(gt,""),n.innerHTML=o}};function Ti(e){e()}function ds(e,t){var n=typeof t=="function"?t:Rn;if(e.length===0)n();else{var r=Ti;P.mutateApproach===qc&&(r=tt.requestAnimationFrame||Ti),r(function(){var a=Hu(),i=Ma.begin("mutate");e.map(a),i(),n()})}}var La=!1;function ms(){La=!0}function Gr(){La=!1}var Wn=null;function Ni(e){if(xi&&P.observeMutations){var t=e.treeCallback,n=t===void 0?Rn:t,r=e.nodeCallback,a=r===void 0?Rn:r,i=e.pseudoElementsCallback,o=i===void 0?Rn:i,s=e.observeMutationsRoot,l=s===void 0?J:s;Wn=new xi(function(c){if(!La){var u=nt();Dt(c).forEach(function(m){if(m.type==="childList"&&m.addedNodes.length>0&&!Si(m.addedNodes[0])&&(P.searchPseudoElements&&o(m.target),n(m.target)),m.type==="attributes"&&m.target.parentNode&&P.searchPseudoElements&&o(m.target.parentNode),m.type==="attributes"&&Si(m.target)&&~tu.indexOf(m.attributeName))if(m.attributeName==="class"&&ju(m.target)){var v=lr(Ca(m.target)),k=v.prefix,R=v.iconName;m.target.setAttribute(Aa,k||u),R&&m.target.setAttribute(Ea,R)}else $u(m.target)&&a(m.target)})}}),We&&Wn.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function Wu(){Wn&&Wn.disconnect()}function Ku(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(r,a){var i=a.split(":"),o=i[0],s=i.slice(1);return o&&s.length>0&&(r[o]=s.join(":").trim()),r},{})),n}function Vu(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",a=lr(Ca(e));return a.prefix||(a.prefix=nt()),t&&n&&(a.prefix=t,a.iconName=n),a.iconName&&a.prefix||(a.prefix&&r.length>0&&(a.iconName=Au(a.prefix,e.innerText)||Sa(a.prefix,Yr(e.innerText))),!a.iconName&&P.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(a.iconName=e.firstChild.data)),a}function qu(e){var t=Dt(e.attributes).reduce(function(a,i){return a.name!=="class"&&a.name!=="style"&&(a[i.name]=i.value),a},{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return P.autoA11y&&(n?t["aria-labelledby"]="".concat(P.replacementClass,"-title-").concat(r||un()):(t["aria-hidden"]="true",t.focusable="false")),t}function Xu(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Fe,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Mi(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=Vu(e),r=n.iconName,a=n.prefix,i=n.rest,o=qu(e),s=Kr("parseNodeAttributes",{},e),l=t.styleParser?Ku(e):[];return E({iconName:r,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:a,transform:Fe,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:l,attributes:o}},s)}var Ju=Ce.styles;function ps(e){var t=P.autoReplaceSvg==="nest"?Mi(e,{styleParser:!1}):Mi(e);return~t.extra.classes.indexOf(Jo)?Be("generateLayersText",e,t):Be("generateSvgReplacementMutation",e,t)}var rt=new Set;Oa.map(function(e){rt.add("fa-".concat(e))});Object.keys(sn[X]).map(rt.add.bind(rt));Object.keys(sn[Q]).map(rt.add.bind(rt));rt=dn(rt);function Li(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!We)return Promise.resolve();var n=J.documentElement.classList,r=function(m){return n.add("".concat(wi,"-").concat(m))},a=function(m){return n.remove("".concat(wi,"-").concat(m))},i=P.autoFetchSvg?rt:Oa.map(function(u){return"fa-".concat(u)}).concat(Object.keys(Ju));i.includes("fa")||i.push("fa");var o=[".".concat(Jo,":not([").concat(gt,"])")].concat(i.map(function(u){return".".concat(u,":not([").concat(gt,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=Dt(e.querySelectorAll(o))}catch{}if(s.length>0)r("pending"),a("complete");else return Promise.resolve();var l=Ma.begin("onTree"),c=s.reduce(function(u,m){try{var v=ps(m);v&&u.push(v)}catch(k){Xo||k.name==="MissingIcon"&&console.error(k)}return u},[]);return new Promise(function(u,m){Promise.all(c).then(function(v){ds(v,function(){r("active"),r("complete"),a("pending"),typeof t=="function"&&t(),l(),u()})}).catch(function(v){l(),m(v)})})}function Gu(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;ps(e).then(function(n){n&&ds([n],t)})}function Qu(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:Vr(t||{}),a=n.mask;return a&&(a=(a||{}).icon?a:Vr(a||{})),e(r,E(E({},n),{},{mask:a}))}}var Zu=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,a=r===void 0?Fe:r,i=n.symbol,o=i===void 0?!1:i,s=n.mask,l=s===void 0?null:s,c=n.maskId,u=c===void 0?null:c,m=n.title,v=m===void 0?null:m,k=n.titleId,R=k===void 0?null:k,D=n.classes,T=D===void 0?[]:D,y=n.attributes,O=y===void 0?{}:y,M=n.styles,j=M===void 0?{}:M;if(t){var W=t.prefix,ue=t.iconName,se=t.icon;return fr(E({type:"icon"},t),function(){return vt("beforeDOMElementCreation",{iconDefinition:t,params:n}),P.autoA11y&&(v?O["aria-labelledby"]="".concat(P.replacementClass,"-title-").concat(R||un()):(O["aria-hidden"]="true",O.focusable="false")),Na({icons:{main:qr(se),mask:l?qr(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:W,iconName:ue,transform:E(E({},Fe),a),symbol:o,title:v,maskId:u,titleId:R,extra:{attributes:O,styles:j,classes:T}})})}},ed={mixout:function(){return{icon:Qu(Zu)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=Li,n.nodeCallback=Gu,n}}},provides:function(t){t.i2svg=function(n){var r=n.node,a=r===void 0?J:r,i=n.callback,o=i===void 0?function(){}:i;return Li(a,o)},t.generateSvgReplacementMutation=function(n,r){var a=r.iconName,i=r.title,o=r.titleId,s=r.prefix,l=r.transform,c=r.symbol,u=r.mask,m=r.maskId,v=r.extra;return new Promise(function(k,R){Promise.all([Xr(a,s),u.iconName?Xr(u.iconName,u.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(D){var T=wa(D,2),y=T[0],O=T[1];k([n,Na({icons:{main:y,mask:O},prefix:s,iconName:a,transform:l,symbol:c,maskId:m,title:i,titleId:o,extra:v,watchable:!0})])}).catch(R)})},t.generateAbstractIcon=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.transform,s=n.styles,l=or(s);l.length>0&&(a.style=l);var c;return Pa(o)&&(c=Be("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),r.push(c||i.icon),{children:r,attributes:a}}}},td={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.classes,i=a===void 0?[]:a;return fr({type:"layer"},function(){vt("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(s){Array.isArray(s)?s.map(function(l){o=o.concat(l.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(P.cssPrefix,"-layers")].concat(dn(i)).join(" ")},children:o}]})}}}},nd={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.title,i=a===void 0?null:a,o=r.classes,s=o===void 0?[]:o,l=r.attributes,c=l===void 0?{}:l,u=r.styles,m=u===void 0?{}:u;return fr({type:"counter",content:n},function(){return vt("beforeDOMElementCreation",{content:n,params:r}),Fu({content:n.toString(),title:i,extra:{attributes:c,styles:m,classes:["".concat(P.cssPrefix,"-layers-counter")].concat(dn(s))}})})}}}},rd={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.transform,i=a===void 0?Fe:a,o=r.title,s=o===void 0?null:o,l=r.classes,c=l===void 0?[]:l,u=r.attributes,m=u===void 0?{}:u,v=r.styles,k=v===void 0?{}:v;return fr({type:"text",content:n},function(){return vt("beforeDOMElementCreation",{content:n,params:r}),Pi({content:n,transform:E(E({},Fe),i),title:s,extra:{attributes:m,styles:k,classes:["".concat(P.cssPrefix,"-layers-text")].concat(dn(c))}})})}}},provides:function(t){t.generateLayersText=function(n,r){var a=r.title,i=r.transform,o=r.extra,s=null,l=null;if(Ko){var c=parseInt(getComputedStyle(n).fontSize,10),u=n.getBoundingClientRect();s=u.width/c,l=u.height/c}return P.autoA11y&&!a&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,Pi({content:n.innerHTML,width:s,height:l,transform:i,title:a,extra:o,watchable:!0})])}}},ad=new RegExp('"',"ug"),Fi=[1105920,1112319];function id(e){var t=e.replace(ad,""),n=bu(t,0),r=n>=Fi[0]&&n<=Fi[1],a=t.length===2?t[0]===t[1]:!1;return{value:Yr(a?t[0]:t),isSecondary:r||a}}function Ri(e,t){var n="".concat(Vc).concat(t.replace(":","-"));return new Promise(function(r,a){if(e.getAttribute(n)!==null)return r();var i=Dt(e.children),o=i.filter(function(se){return se.getAttribute(Br)===t})[0],s=tt.getComputedStyle(e,t),l=s.getPropertyValue("font-family").match(Qc),c=s.getPropertyValue("font-weight"),u=s.getPropertyValue("content");if(o&&!l)return e.removeChild(o),r();if(l&&u!=="none"&&u!==""){var m=s.getPropertyValue("content"),v=~["Sharp"].indexOf(l[2])?Q:X,k=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?ln[v][l[2].toLowerCase()]:Zc[v][c],R=id(m),D=R.value,T=R.isSecondary,y=l[0].startsWith("FontAwesome"),O=Sa(k,D),M=O;if(y){var j=Eu(D);j.iconName&&j.prefix&&(O=j.iconName,k=j.prefix)}if(O&&!T&&(!o||o.getAttribute(Aa)!==k||o.getAttribute(Ea)!==M)){e.setAttribute(n,M),o&&e.removeChild(o);var W=Xu(),ue=W.extra;ue.attributes[Br]=t,Xr(O,k).then(function(se){var Ke=Na(E(E({},W),{},{icons:{main:se,mask:Ta()},prefix:k,iconName:M,extra:ue,watchable:!0})),oe=J.createElementNS("http://www.w3.org/2000/svg","svg");t==="::before"?e.insertBefore(oe,e.firstChild):e.appendChild(oe),oe.outerHTML=Ke.map(function(it){return pn(it)}).join(`
`),e.removeAttribute(n),r()}).catch(a)}else r()}else r()})}function od(e){return Promise.all([Ri(e,"::before"),Ri(e,"::after")])}function sd(e){return e.parentNode!==document.head&&!~Xc.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(Br)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function zi(e){if(We)return new Promise(function(t,n){var r=Dt(e.querySelectorAll("*")).filter(sd).map(od),a=Ma.begin("searchPseudoElements");ms(),Promise.all(r).then(function(){a(),Gr(),t()}).catch(function(){a(),Gr(),n()})})}var ld={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=zi,n}}},provides:function(t){t.pseudoElements2svg=function(n){var r=n.node,a=r===void 0?J:r;P.searchPseudoElements&&zi(a)}}},Di=!1,fd={mixout:function(){return{dom:{unwatch:function(){ms(),Di=!0}}}},hooks:function(){return{bootstrap:function(){Ni(Kr("mutationObserverCallbacks",{}))},noAuto:function(){Wu()},watch:function(n){var r=n.observeMutationsRoot;Di?Gr():Ni(Kr("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},ji=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,a){var i=a.toLowerCase().split("-"),o=i[0],s=i.slice(1).join("-");if(o&&s==="h")return r.flipX=!0,r;if(o&&s==="v")return r.flipY=!0,r;if(s=parseFloat(s),isNaN(s))return r;switch(o){case"grow":r.size=r.size+s;break;case"shrink":r.size=r.size-s;break;case"left":r.x=r.x-s;break;case"right":r.x=r.x+s;break;case"up":r.y=r.y-s;break;case"down":r.y=r.y+s;break;case"rotate":r.rotate=r.rotate+s;break}return r},n)},cd={mixout:function(){return{parse:{transform:function(n){return ji(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-transform");return a&&(n.transform=ji(a)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var r=n.main,a=n.transform,i=n.containerWidth,o=n.iconWidth,s={transform:"translate(".concat(i/2," 256)")},l="translate(".concat(a.x*32,", ").concat(a.y*32,") "),c="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),u="rotate(".concat(a.rotate," 0 0)"),m={transform:"".concat(l," ").concat(c," ").concat(u)},v={transform:"translate(".concat(o/2*-1," -256)")},k={outer:s,inner:m,path:v};return{tag:"g",attributes:E({},k.outer),children:[{tag:"g",attributes:E({},k.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:E(E({},r.icon.attributes),k.path)}]}]}}}},Ar={x:0,y:0,width:"100%",height:"100%"};function $i(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function ud(e){return e.tag==="g"?e.children:[e]}var dd={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-mask"),i=a?lr(a.split(" ").map(function(o){return o.trim()})):Ta();return i.prefix||(i.prefix=nt()),n.mask=i,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.mask,s=n.maskId,l=n.transform,c=i.width,u=i.icon,m=o.width,v=o.icon,k=cu({transform:l,containerWidth:m,iconWidth:c}),R={tag:"rect",attributes:E(E({},Ar),{},{fill:"white"})},D=u.children?{children:u.children.map($i)}:{},T={tag:"g",attributes:E({},k.inner),children:[$i(E({tag:u.tag,attributes:E(E({},u.attributes),k.path)},D))]},y={tag:"g",attributes:E({},k.outer),children:[T]},O="mask-".concat(s||un()),M="clip-".concat(s||un()),j={tag:"mask",attributes:E(E({},Ar),{},{id:O,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[R,y]},W={tag:"defs",children:[{tag:"clipPath",attributes:{id:M},children:ud(v)},j]};return r.push(W,{tag:"rect",attributes:E({fill:"currentColor","clip-path":"url(#".concat(M,")"),mask:"url(#".concat(O,")")},Ar)}),{children:r,attributes:a}}}},md={provides:function(t){var n=!1;tt.matchMedia&&(n=tt.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],a={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:E(E({},a),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=E(E({},i),{},{attributeName:"opacity"}),s={tag:"circle",attributes:E(E({},a),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||s.children.push({tag:"animate",attributes:E(E({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:E(E({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(s),r.push({tag:"path",attributes:E(E({},a),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:E(E({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:E(E({},a),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:E(E({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},pd={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-symbol"),i=a===null?!1:a===""?!0:a;return n.symbol=i,n}}}},hd=[mu,ed,td,nd,rd,ld,fd,cd,dd,md,pd];Pu(hd,{mixoutsTo:_e});_e.noAuto;var hs=_e.config,we=_e.library;_e.dom;var Kn=_e.parse;_e.findIconDefinition;_e.toHtml;var gd=_e.icon;_e.layer;var vd=_e.text;_e.counter;function Hi(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function Ee(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Hi(Object(n),!0).forEach(function(r){me(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Hi(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Vn(e){"@babel/helpers - typeof";return Vn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Vn(e)}function me(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function bd(e,t){if(e==null)return{};var n={},r=Object.keys(e),a,i;for(i=0;i<r.length;i++)a=r[i],!(t.indexOf(a)>=0)&&(n[a]=e[a]);return n}function yd(e,t){if(e==null)return{};var n=bd(e,t),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function Qr(e){return _d(e)||xd(e)||wd(e)||kd()}function _d(e){if(Array.isArray(e))return Zr(e)}function xd(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function wd(e,t){if(e){if(typeof e=="string")return Zr(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Zr(e,t)}}function Zr(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function kd(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Ad=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},gs={exports:{}};(function(e){(function(t){var n=function(y,O,M){if(!c(O)||m(O)||v(O)||k(O)||l(O))return O;var j,W=0,ue=0;if(u(O))for(j=[],ue=O.length;W<ue;W++)j.push(n(y,O[W],M));else{j={};for(var se in O)Object.prototype.hasOwnProperty.call(O,se)&&(j[y(se,M)]=n(y,O[se],M))}return j},r=function(y,O){O=O||{};var M=O.separator||"_",j=O.split||/(?=[A-Z])/;return y.split(j).join(M)},a=function(y){return R(y)?y:(y=y.replace(/[\-_\s]+(.)?/g,function(O,M){return M?M.toUpperCase():""}),y.substr(0,1).toLowerCase()+y.substr(1))},i=function(y){var O=a(y);return O.substr(0,1).toUpperCase()+O.substr(1)},o=function(y,O){return r(y,O).toLowerCase()},s=Object.prototype.toString,l=function(y){return typeof y=="function"},c=function(y){return y===Object(y)},u=function(y){return s.call(y)=="[object Array]"},m=function(y){return s.call(y)=="[object Date]"},v=function(y){return s.call(y)=="[object RegExp]"},k=function(y){return s.call(y)=="[object Boolean]"},R=function(y){return y=y-0,y===y},D=function(y,O){var M=O&&"process"in O?O.process:O;return typeof M!="function"?y:function(j,W){return M(j,y,W)}},T={camelize:a,decamelize:o,pascalize:i,depascalize:o,camelizeKeys:function(y,O){return n(D(a,O),y)},decamelizeKeys:function(y,O){return n(D(o,O),y,O)},pascalizeKeys:function(y,O){return n(D(i,O),y)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};e.exports?e.exports=T:t.humps=T})(Ad)})(gs);var Ed=gs.exports,Od=["class","style"];function Cd(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),a=Ed.camelize(n.slice(0,r)),i=n.slice(r+1).trim();return t[a]=i,t},{})}function Pd(e){return e.split(/\s+/).reduce(function(t,n){return t[n]=!0,t},{})}function Fa(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(l){return Fa(l)}),a=Object.keys(e.attributes||{}).reduce(function(l,c){var u=e.attributes[c];switch(c){case"class":l.class=Pd(u);break;case"style":l.style=Cd(u);break;default:l.attrs[c]=u}return l},{attrs:{},class:{},style:{}});n.class;var i=n.style,o=i===void 0?{}:i,s=yd(n,Od);return $o(e.tag,Ee(Ee(Ee({},t),{},{class:a.class,style:Ee(Ee({},a.style),o)},a.attrs),s),r)}var vs=!1;try{vs=!0}catch{}function Id(){if(!vs&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function Zt(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?me({},e,t):{}}function Sd(e){var t,n=(t={"fa-spin":e.spin,"fa-pulse":e.pulse,"fa-fw":e.fixedWidth,"fa-border":e.border,"fa-li":e.listItem,"fa-inverse":e.inverse,"fa-flip":e.flip===!0,"fa-flip-horizontal":e.flip==="horizontal"||e.flip==="both","fa-flip-vertical":e.flip==="vertical"||e.flip==="both"},me(t,"fa-".concat(e.size),e.size!==null),me(t,"fa-rotate-".concat(e.rotation),e.rotation!==null),me(t,"fa-pull-".concat(e.pull),e.pull!==null),me(t,"fa-swap-opacity",e.swapOpacity),me(t,"fa-bounce",e.bounce),me(t,"fa-shake",e.shake),me(t,"fa-beat",e.beat),me(t,"fa-fade",e.fade),me(t,"fa-beat-fade",e.beatFade),me(t,"fa-flash",e.flash),me(t,"fa-spin-pulse",e.spinPulse),me(t,"fa-spin-reverse",e.spinReverse),t);return Object.keys(n).map(function(r){return n[r]?r:null}).filter(function(r){return r})}function Ui(e){if(e&&Vn(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(Kn.icon)return Kn.icon(e);if(e===null)return null;if(Vn(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}var Td=ha({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(t){return[!0,!1,"horizontal","vertical","both"].indexOf(t)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(t){return["right","left"].indexOf(t)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(t){return[90,180,270].indexOf(Number.parseInt(t,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(t){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(t)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(t,n){var r=n.attrs,a=xe(function(){return Ui(t.icon)}),i=xe(function(){return Zt("classes",Sd(t))}),o=xe(function(){return Zt("transform",typeof t.transform=="string"?Kn.transform(t.transform):t.transform)}),s=xe(function(){return Zt("mask",Ui(t.mask))}),l=xe(function(){return gd(a.value,Ee(Ee(Ee(Ee({},i.value),o.value),s.value),{},{symbol:t.symbol,title:t.title}))});Mn(l,function(u){if(!u)return Id("Could not find one or more icon(s)",a.value,s.value)},{immediate:!0});var c=xe(function(){return l.value?Fa(l.value.abstract[0],{},r):null});return function(){return c.value}}});ha({name:"FontAwesomeLayers",props:{fixedWidth:{type:Boolean,default:!1}},setup:function(t,n){var r=n.slots,a=hs.familyPrefix,i=xe(function(){return["".concat(a,"-layers")].concat(Qr(t.fixedWidth?["".concat(a,"-fw")]:[]))});return function(){return $o("div",{class:i.value},r.default?r.default():[])}}});ha({name:"FontAwesomeLayersText",props:{value:{type:[String,Number],default:""},transform:{type:[String,Object],default:null},counter:{type:Boolean,default:!1},position:{type:String,default:null,validator:function(t){return["bottom-left","bottom-right","top-left","top-right"].indexOf(t)>-1}}},setup:function(t,n){var r=n.attrs,a=hs.familyPrefix,i=xe(function(){return Zt("classes",[].concat(Qr(t.counter?["".concat(a,"-layers-counter")]:[]),Qr(t.position?["".concat(a,"-layers-").concat(t.position)]:[])))}),o=xe(function(){return Zt("transform",typeof t.transform=="string"?Kn.transform(t.transform):t.transform)}),s=xe(function(){var c=vd(t.value.toString(),Ee(Ee({},o.value),i.value)),u=c.abstract;return t.counter&&(u[0].attributes.class=u[0].attributes.class.replace("fa-layers-text","")),u[0]}),l=xe(function(){return Fa(s.value,{},r)});return function(){return l.value}}});var Nd={prefix:"fas",iconName:"laptop-code",icon:[640,512,[],"f5fc","M64 96c0-35.3 28.7-64 64-64H512c35.3 0 64 28.7 64 64V352H512V96H128V352H64V96zM0 403.2C0 392.6 8.6 384 19.2 384H620.8c10.6 0 19.2 8.6 19.2 19.2c0 42.4-34.4 76.8-76.8 76.8H76.8C34.4 480 0 445.6 0 403.2zM281 209l-31 31 31 31c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-48-48c-9.4-9.4-9.4-24.6 0-33.9l48-48c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9zM393 175l48 48c9.4 9.4 9.4 24.6 0 33.9l-48 48c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l31-31-31-31c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0z"]},Md={prefix:"fas",iconName:"bars",icon:[448,512,["navicon"],"f0c9","M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"]},Ld={prefix:"fas",iconName:"fire",icon:[448,512,[128293],"f06d","M159.3 5.4c7.8-7.3 19.9-7.2 27.7 .1c27.6 25.9 53.5 53.8 77.7 84c11-14.4 23.5-30.1 37-42.9c7.9-7.4 20.1-7.4 28 .1c34.6 33 63.9 76.6 84.5 118c20.3 40.8 33.8 82.5 33.8 111.9C448 404.2 348.2 512 224 512C98.4 512 0 404.1 0 276.5c0-38.4 17.8-85.3 45.4-131.7C73.3 97.7 112.7 48.6 159.3 5.4zM225.7 416c25.3 0 47.7-7 68.8-21c42.1-29.4 53.4-88.2 28.1-134.4c-4.5-9-16-9.6-22.5-2l-25.2 29.3c-6.6 7.6-18.5 7.4-24.7-.5c-16.5-21-46-58.5-62.8-79.8c-6.3-8-18.3-8.1-24.7-.1c-33.8 42.5-50.8 69.3-50.8 99.4C112 375.4 162.6 416 225.7 416z"]},Fd={prefix:"fas",iconName:"screwdriver-wrench",icon:[512,512,["tools"],"f7d9","M78.6 5C69.1-2.4 55.6-1.5 47 7L7 47c-8.5 8.5-9.4 22-2.1 31.6l80 104c4.5 5.9 11.6 9.4 19 9.4h54.1l109 109c-14.7 29-10 65.4 14.3 89.6l112 112c12.5 12.5 32.8 12.5 45.3 0l64-64c12.5-12.5 12.5-32.8 0-45.3l-112-112c-24.2-24.2-60.6-29-89.6-14.3l-109-109V104c0-7.5-3.5-14.5-9.4-19L78.6 5zM19.9 396.1C7.2 408.8 0 426.1 0 444.1C0 481.6 30.4 512 67.9 512c18 0 35.3-7.2 48-19.9L233.7 374.3c-7.8-20.9-9-43.6-3.6-65.1l-61.7-61.7L19.9 396.1zM512 144c0-10.5-1.1-20.7-3.2-30.5c-2.4-11.2-16.1-14.1-24.2-6l-63.9 63.9c-3 3-7.1 4.7-11.3 4.7H352c-8.8 0-16-7.2-16-16V102.6c0-4.2 1.7-8.3 4.7-11.3l63.9-63.9c8.1-8.1 5.2-21.8-6-24.2C388.7 1.1 378.5 0 368 0C288.5 0 224 64.5 224 144l0 .8 85.3 85.3c36-9.1 75.8 .5 104 28.7L429 274.5c49-23 83-72.8 83-130.5zM56 432a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z"]},Rd={prefix:"fas",iconName:"house-user",icon:[576,512,["home-user"],"e1b0","M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c.2 35.5-28.5 64.3-64 64.3H128.1c-35.3 0-64-28.7-64-64V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24zM352 224a64 64 0 1 0 -128 0 64 64 0 1 0 128 0zm-96 96c-44.2 0-80 35.8-80 80c0 8.8 7.2 16 16 16H384c8.8 0 16-7.2 16-16c0-44.2-35.8-80-80-80H256z"]},zd=Rd,Dd={prefix:"fas",iconName:"user-secret",icon:[448,512,[128373],"f21b","M224 16c-6.7 0-10.8-2.8-15.5-6.1C201.9 5.4 194 0 176 0c-30.5 0-52 43.7-66 89.4C62.7 98.1 32 112.2 32 128c0 14.3 25 27.1 64.6 35.9c-.4 4-.6 8-.6 12.1c0 17 3.3 33.2 9.3 48H45.4C38 224 32 230 32 237.4c0 1.7 .3 3.4 1 5l38.8 96.9C28.2 371.8 0 423.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7c0-58.5-28.2-110.4-71.7-143L415 242.4c.6-1.6 1-3.3 1-5c0-7.4-6-13.4-13.4-13.4H342.7c6-14.8 9.3-31 9.3-48c0-4.1-.2-8.1-.6-12.1C391 155.1 416 142.3 416 128c0-15.8-30.7-29.9-78-38.6C324 43.7 302.5 0 272 0c-18 0-25.9 5.4-32.5 9.9c-4.8 3.3-8.8 6.1-15.5 6.1zm56 208H267.6c-16.5 0-31.1-10.6-36.3-26.2c-2.3-7-12.2-7-14.5 0c-5.2 15.6-19.9 26.2-36.3 26.2H168c-22.1 0-40-17.9-40-40V169.6c28.2 4.1 61 6.4 96 6.4s67.8-2.3 96-6.4V184c0 22.1-17.9 40-40 40zm-88 96l16 32L176 480 128 288l64 32zm128-32L272 480 240 352l16-32 64-32z"]},jd={prefix:"fas",iconName:"file",icon:[384,512,[128196,128459,61462],"f15b","M0 64C0 28.7 28.7 0 64 0H224V128c0 17.7 14.3 32 32 32H384V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V64zm384 64H256V0L384 128z"]},$d={prefix:"fab",iconName:"contao",icon:[512,512,[],"f26d","M45.4 305c14.4 67.1 26.4 129 68.2 175H34c-18.7 0-34-15.2-34-34V66c0-18.7 15.2-34 34-34h57.7C77.9 44.6 65.6 59.2 54.8 75.6c-45.4 70-27 146.8-9.4 229.4zM478 32h-90.2c21.4 21.4 39.2 49.5 52.7 84.1l-137.1 29.3c-14.9-29-37.8-53.3-82.6-43.9-24.6 5.3-41 19.3-48.3 34.6-8.8 18.7-13.2 39.8 8.2 140.3 21.1 100.2 33.7 117.7 49.5 131.2 12.9 11.1 33.4 17 58.3 11.7 44.5-9.4 55.7-40.7 57.4-73.2l137.4-29.6c3.2 71.5-18.7 125.2-57.4 163.6H478c18.7 0 34-15.2 34-34V66c0-18.8-15.2-34-34-34z"]},Hd={prefix:"fab",iconName:"linkedin",icon:[448,512,[],"f08c","M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"]},Ud={prefix:"fab",iconName:"instagram",icon:[448,512,[],"f16d","M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"]},Bd={prefix:"fab",iconName:"github",icon:[496,512,[],"f09b","M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"]},Yd={prefix:"fab",iconName:"twitter",icon:[512,512,[],"f099","M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"]};we.add(Dd);we.add(Md);we.add(Ld);we.add(zd);we.add(Fd);we.add(Nd);we.add(Ud);we.add(Yd);we.add(Hd);we.add(Bd);we.add($d);we.add(jd);Uf(zc).component("font-awesome-icon",Td).mount("#app");
