(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))o(l);new MutationObserver(l=>{for(const a of l)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function t(l){const a={};return l.integrity&&(a.integrity=l.integrity),l.referrerpolicy&&(a.referrerPolicy=l.referrerpolicy),l.crossorigin==="use-credentials"?a.credentials="include":l.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(l){if(l.ep)return;l.ep=!0;const a=t(l);fetch(l.href,a)}})();function Io(e,n){const t=Object.create(null),o=e.split(",");for(let l=0;l<o.length;l++)t[o[l]]=!0;return n?l=>!!t[l.toLowerCase()]:l=>!!t[l]}const cu="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",iu=Io(cu);function ki(e){return!!e||e===""}function zs(e){if(ts(e)){const n={};for(let t=0;t<e.length;t++){const o=e[t],l=Is(o)?uu(o):zs(o);if(l)for(const a in l)n[a]=l[a]}return n}else{if(Is(e))return e;if(Ns(e))return e}}const pu=/;(?![^(]*\))/g,yu=/:(.+)/;function uu(e){const n={};return e.split(pu).forEach(t=>{if(t){const o=t.split(yu);o.length>1&&(n[o[0].trim()]=o[1].trim())}}),n}function Ss(e){let n="";if(Is(e))n=e;else if(ts(e))for(let t=0;t<e.length;t++){const o=Ss(e[t]);o&&(n+=o+" ")}else if(Ns(e))for(const t in e)e[t]&&(n+=t+" ");return n.trim()}function bs(e){if(!e)return null;let{class:n,style:t}=e;return n&&!Is(n)&&(e.class=Ss(n)),t&&(e.style=zs(t)),e}const du="html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot",fu=Io(du),Sn=e=>Is(e)?e:e==null?"":ts(e)||Ns(e)&&(e.toString===Si||!as(e.toString))?JSON.stringify(e,Fi,2):String(e),Fi=(e,n)=>n&&n.__v_isRef?Fi(e,n.value):Yn(n)?{[`Map(${n.size})`]:[...n.entries()].reduce((t,[o,l])=>(t[`${o} =>`]=l,t),{})}:Pi(n)?{[`Set(${n.size})`]:[...n.values()]}:Ns(n)&&!ts(n)&&!Ti(n)?String(n):n,Ps={},zn=[],Pe=()=>{},mu=()=>!1,Au=/^on[^a-z]/,Ro=e=>Au.test(e),Dr=e=>e.startsWith("onUpdate:"),re=Object.assign,vr=(e,n)=>{const t=e.indexOf(n);t>-1&&e.splice(t,1)},Bu=Object.prototype.hasOwnProperty,Bs=(e,n)=>Bu.call(e,n),ts=Array.isArray,Yn=e=>Uo(e)==="[object Map]",Pi=e=>Uo(e)==="[object Set]",as=e=>typeof e=="function",Is=e=>typeof e=="string",_r=e=>typeof e=="symbol",Ns=e=>e!==null&&typeof e=="object",xi=e=>Ns(e)&&as(e.then)&&as(e.catch),Si=Object.prototype.toString,Uo=e=>Si.call(e),hu=e=>Uo(e).slice(8,-1),Ti=e=>Uo(e)==="[object Object]",br=e=>Is(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Ao=Io(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),jo=e=>{const n=Object.create(null);return t=>n[t]||(n[t]=e(t))},Cu=/-(\w)/g,je=jo(e=>e.replace(Cu,(n,t)=>t?t.toUpperCase():"")),gu=/\B([A-Z])/g,On=jo(e=>e.replace(gu,"-$1").toLowerCase()),qo=jo(e=>e.charAt(0).toUpperCase()+e.slice(1)),ol=jo(e=>e?`on${qo(e)}`:""),Ut=(e,n)=>!Object.is(e,n),Gn=(e,n)=>{for(let t=0;t<e.length;t++)e[t](n)},_o=(e,n,t)=>{Object.defineProperty(e,n,{configurable:!0,enumerable:!1,value:t})},Sl=e=>{const n=parseFloat(e);return isNaN(n)?e:n};let ha;const Du=()=>ha||(ha=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let ye;class $i{constructor(n=!1){this.detached=n,this.active=!0,this.effects=[],this.cleanups=[],this.parent=ye,!n&&ye&&(this.index=(ye.scopes||(ye.scopes=[])).push(this)-1)}run(n){if(this.active){const t=ye;try{return ye=this,n()}finally{ye=t}}}on(){ye=this}off(){ye=this.parent}stop(n){if(this.active){let t,o;for(t=0,o=this.effects.length;t<o;t++)this.effects[t].stop();for(t=0,o=this.cleanups.length;t<o;t++)this.cleanups[t]();if(this.scopes)for(t=0,o=this.scopes.length;t<o;t++)this.scopes[t].stop(!0);if(!this.detached&&this.parent&&!n){const l=this.parent.scopes.pop();l&&l!==this&&(this.parent.scopes[this.index]=l,l.index=this.index)}this.parent=void 0,this.active=!1}}}function vu(e){return new $i(e)}function _u(e,n=ye){n&&n.active&&n.effects.push(e)}function Oi(){return ye}function Mi(e){ye&&ye.cleanups.push(e)}const Er=e=>{const n=new Set(e);return n.w=0,n.n=0,n},Ni=e=>(e.w&yn)>0,Li=e=>(e.n&yn)>0,bu=({deps:e})=>{if(e.length)for(let n=0;n<e.length;n++)e[n].w|=yn},Eu=e=>{const{deps:n}=e;if(n.length){let t=0;for(let o=0;o<n.length;o++){const l=n[o];Ni(l)&&!Li(l)?l.delete(e):n[t++]=l,l.w&=~yn,l.n&=~yn}n.length=t}},Tl=new WeakMap;let Et=0,yn=1;const $l=30;let we;const kn=Symbol(""),Ol=Symbol("");class wr{constructor(n,t=null,o){this.fn=n,this.scheduler=t,this.active=!0,this.deps=[],this.parent=void 0,_u(this,o)}run(){if(!this.active)return this.fn();let n=we,t=on;for(;n;){if(n===this)return;n=n.parent}try{return this.parent=we,we=this,on=!0,yn=1<<++Et,Et<=$l?bu(this):Ca(this),this.fn()}finally{Et<=$l&&Eu(this),yn=1<<--Et,we=this.parent,on=t,this.parent=void 0,this.deferStop&&this.stop()}}stop(){we===this?this.deferStop=!0:this.active&&(Ca(this),this.onStop&&this.onStop(),this.active=!1)}}function Ca(e){const{deps:n}=e;if(n.length){for(let t=0;t<n.length;t++)n[t].delete(e);n.length=0}}let on=!0;const Ii=[];function it(){Ii.push(on),on=!1}function pt(){const e=Ii.pop();on=e===void 0?!0:e}function Be(e,n,t){if(on&&we){let o=Tl.get(e);o||Tl.set(e,o=new Map);let l=o.get(t);l||o.set(t,l=Er()),Ri(l)}}function Ri(e,n){let t=!1;Et<=$l?Li(e)||(e.n|=yn,t=!Ni(e)):t=!e.has(we),t&&(e.add(we),we.deps.push(e))}function Ge(e,n,t,o,l,a){const c=Tl.get(e);if(!c)return;let i=[];if(n==="clear")i=[...c.values()];else if(t==="length"&&ts(e))c.forEach((p,y)=>{(y==="length"||y>=o)&&i.push(p)});else switch(t!==void 0&&i.push(c.get(t)),n){case"add":ts(e)?br(t)&&i.push(c.get("length")):(i.push(c.get(kn)),Yn(e)&&i.push(c.get(Ol)));break;case"delete":ts(e)||(i.push(c.get(kn)),Yn(e)&&i.push(c.get(Ol)));break;case"set":Yn(e)&&i.push(c.get(kn));break}if(i.length===1)i[0]&&Ml(i[0]);else{const p=[];for(const y of i)y&&p.push(...y);Ml(Er(p))}}function Ml(e,n){const t=ts(e)?e:[...e];for(const o of t)o.computed&&ga(o);for(const o of t)o.computed||ga(o)}function ga(e,n){(e!==we||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const wu=Io("__proto__,__v_isRef,__isVue"),Ui=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(_r)),ku=kr(),Fu=kr(!1,!0),Pu=kr(!0),Da=xu();function xu(){const e={};return["includes","indexOf","lastIndexOf"].forEach(n=>{e[n]=function(...t){const o=_s(this);for(let a=0,c=this.length;a<c;a++)Be(o,"get",a+"");const l=o[n](...t);return l===-1||l===!1?o[n](...t.map(_s)):l}}),["push","pop","shift","unshift","splice"].forEach(n=>{e[n]=function(...t){it();const o=_s(this)[n].apply(this,t);return pt(),o}}),e}function kr(e=!1,n=!1){return function(o,l,a){if(l==="__v_isReactive")return!e;if(l==="__v_isReadonly")return e;if(l==="__v_isShallow")return n;if(l==="__v_raw"&&a===(e?n?Ku:Vi:n?Wi:Hi).get(o))return o;const c=ts(o);if(!e&&c&&Bs(Da,l))return Reflect.get(Da,l,a);const i=Reflect.get(o,l,a);return(_r(l)?Ui.has(l):wu(l))||(e||Be(o,"get",l),n)?i:Es(i)?c&&br(l)?i:i.value:Ns(i)?e?_n(i):Os(i):i}}const Su=ji(),Tu=ji(!0);function ji(e=!1){return function(t,o,l,a){let c=t[o];if(nt(c)&&Es(c)&&!Es(l))return!1;if(!e&&(!bo(l)&&!nt(l)&&(c=_s(c),l=_s(l)),!ts(t)&&Es(c)&&!Es(l)))return c.value=l,!0;const i=ts(t)&&br(o)?Number(o)<t.length:Bs(t,o),p=Reflect.set(t,o,l,a);return t===_s(a)&&(i?Ut(l,c)&&Ge(t,"set",o,l):Ge(t,"add",o,l)),p}}function $u(e,n){const t=Bs(e,n);e[n];const o=Reflect.deleteProperty(e,n);return o&&t&&Ge(e,"delete",n,void 0),o}function Ou(e,n){const t=Reflect.has(e,n);return(!_r(n)||!Ui.has(n))&&Be(e,"has",n),t}function Mu(e){return Be(e,"iterate",ts(e)?"length":kn),Reflect.ownKeys(e)}const qi={get:ku,set:Su,deleteProperty:$u,has:Ou,ownKeys:Mu},Nu={get:Pu,set(e,n){return!0},deleteProperty(e,n){return!0}},Lu=re({},qi,{get:Fu,set:Tu}),Fr=e=>e,Ho=e=>Reflect.getPrototypeOf(e);function lo(e,n,t=!1,o=!1){e=e.__v_raw;const l=_s(e),a=_s(n);t||(n!==a&&Be(l,"get",n),Be(l,"get",a));const{has:c}=Ho(l),i=o?Fr:t?Sr:jt;if(c.call(l,n))return i(e.get(n));if(c.call(l,a))return i(e.get(a));e!==l&&e.get(n)}function ro(e,n=!1){const t=this.__v_raw,o=_s(t),l=_s(e);return n||(e!==l&&Be(o,"has",e),Be(o,"has",l)),e===l?t.has(e):t.has(e)||t.has(l)}function ao(e,n=!1){return e=e.__v_raw,!n&&Be(_s(e),"iterate",kn),Reflect.get(e,"size",e)}function va(e){e=_s(e);const n=_s(this);return Ho(n).has.call(n,e)||(n.add(e),Ge(n,"add",e,e)),this}function _a(e,n){n=_s(n);const t=_s(this),{has:o,get:l}=Ho(t);let a=o.call(t,e);a||(e=_s(e),a=o.call(t,e));const c=l.call(t,e);return t.set(e,n),a?Ut(n,c)&&Ge(t,"set",e,n):Ge(t,"add",e,n),this}function ba(e){const n=_s(this),{has:t,get:o}=Ho(n);let l=t.call(n,e);l||(e=_s(e),l=t.call(n,e)),o&&o.call(n,e);const a=n.delete(e);return l&&Ge(n,"delete",e,void 0),a}function Ea(){const e=_s(this),n=e.size!==0,t=e.clear();return n&&Ge(e,"clear",void 0,void 0),t}function co(e,n){return function(o,l){const a=this,c=a.__v_raw,i=_s(c),p=n?Fr:e?Sr:jt;return!e&&Be(i,"iterate",kn),c.forEach((y,u)=>o.call(l,p(y),p(u),a))}}function io(e,n,t){return function(...o){const l=this.__v_raw,a=_s(l),c=Yn(a),i=e==="entries"||e===Symbol.iterator&&c,p=e==="keys"&&c,y=l[e](...o),u=t?Fr:n?Sr:jt;return!n&&Be(a,"iterate",p?Ol:kn),{next(){const{value:d,done:f}=y.next();return f?{value:d,done:f}:{value:i?[u(d[0]),u(d[1])]:u(d),done:f}},[Symbol.iterator](){return this}}}}function Qe(e){return function(...n){return e==="delete"?!1:this}}function Iu(){const e={get(a){return lo(this,a)},get size(){return ao(this)},has:ro,add:va,set:_a,delete:ba,clear:Ea,forEach:co(!1,!1)},n={get(a){return lo(this,a,!1,!0)},get size(){return ao(this)},has:ro,add:va,set:_a,delete:ba,clear:Ea,forEach:co(!1,!0)},t={get(a){return lo(this,a,!0)},get size(){return ao(this,!0)},has(a){return ro.call(this,a,!0)},add:Qe("add"),set:Qe("set"),delete:Qe("delete"),clear:Qe("clear"),forEach:co(!0,!1)},o={get(a){return lo(this,a,!0,!0)},get size(){return ao(this,!0)},has(a){return ro.call(this,a,!0)},add:Qe("add"),set:Qe("set"),delete:Qe("delete"),clear:Qe("clear"),forEach:co(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(a=>{e[a]=io(a,!1,!1),t[a]=io(a,!0,!1),n[a]=io(a,!1,!0),o[a]=io(a,!0,!0)}),[e,t,n,o]}const[Ru,Uu,ju,qu]=Iu();function Pr(e,n){const t=n?e?qu:ju:e?Uu:Ru;return(o,l,a)=>l==="__v_isReactive"?!e:l==="__v_isReadonly"?e:l==="__v_raw"?o:Reflect.get(Bs(t,l)&&l in o?t:o,l,a)}const Hu={get:Pr(!1,!1)},Wu={get:Pr(!1,!0)},Vu={get:Pr(!0,!1)},Hi=new WeakMap,Wi=new WeakMap,Vi=new WeakMap,Ku=new WeakMap;function zu(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Yu(e){return e.__v_skip||!Object.isExtensible(e)?0:zu(hu(e))}function Os(e){return nt(e)?e:xr(e,!1,qi,Hu,Hi)}function Gu(e){return xr(e,!1,Lu,Wu,Wi)}function _n(e){return xr(e,!0,Nu,Vu,Vi)}function xr(e,n,t,o,l){if(!Ns(e)||e.__v_raw&&!(n&&e.__v_isReactive))return e;const a=l.get(e);if(a)return a;const c=Yu(e);if(c===0)return e;const i=new Proxy(e,c===2?o:t);return l.set(e,i),i}function Zn(e){return nt(e)?Zn(e.__v_raw):!!(e&&e.__v_isReactive)}function nt(e){return!!(e&&e.__v_isReadonly)}function bo(e){return!!(e&&e.__v_isShallow)}function Ki(e){return Zn(e)||nt(e)}function _s(e){const n=e&&e.__v_raw;return n?_s(n):e}function Wo(e){return _o(e,"__v_skip",!0),e}const jt=e=>Ns(e)?Os(e):e,Sr=e=>Ns(e)?_n(e):e;function Tr(e){on&&we&&(e=_s(e),Ri(e.dep||(e.dep=Er())))}function $r(e,n){e=_s(e),e.dep&&Ml(e.dep)}function Es(e){return!!(e&&e.__v_isRef===!0)}function W(e){return zi(e,!1)}function qe(e){return zi(e,!0)}function zi(e,n){return Es(e)?e:new Zu(e,n)}class Zu{constructor(n,t){this.__v_isShallow=t,this.dep=void 0,this.__v_isRef=!0,this._rawValue=t?n:_s(n),this._value=t?n:jt(n)}get value(){return Tr(this),this._value}set value(n){const t=this.__v_isShallow||bo(n)||nt(n);n=t?n:_s(n),Ut(n,this._rawValue)&&(this._rawValue=n,this._value=t?n:jt(n),$r(this))}}function v(e){return Es(e)?e.value:e}const Xu={get:(e,n,t)=>v(Reflect.get(e,n,t)),set:(e,n,t,o)=>{const l=e[n];return Es(l)&&!Es(t)?(l.value=t,!0):Reflect.set(e,n,t,o)}};function Yi(e){return Zn(e)?e:new Proxy(e,Xu)}class Ju{constructor(n){this.dep=void 0,this.__v_isRef=!0;const{get:t,set:o}=n(()=>Tr(this),()=>$r(this));this._get=t,this._set=o}get value(){return this._get()}set value(n){this._set(n)}}function Gi(e){return new Ju(e)}function Qu(e){const n=ts(e)?new Array(e.length):{};for(const t in e)n[t]=e8(e,t);return n}class s8{constructor(n,t,o){this._object=n,this._key=t,this._defaultValue=o,this.__v_isRef=!0}get value(){const n=this._object[this._key];return n===void 0?this._defaultValue:n}set value(n){this._object[this._key]=n}}function e8(e,n,t){const o=e[n];return Es(o)?o:new s8(e,n,t)}var Zi;class n8{constructor(n,t,o,l){this._setter=t,this.dep=void 0,this.__v_isRef=!0,this[Zi]=!1,this._dirty=!0,this.effect=new wr(n,()=>{this._dirty||(this._dirty=!0,$r(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!l,this.__v_isReadonly=o}get value(){const n=_s(this);return Tr(n),(n._dirty||!n._cacheable)&&(n._dirty=!1,n._value=n.effect.run()),n._value}set value(n){this._setter(n)}}Zi="__v_isReadonly";function t8(e,n,t=!1){let o,l;const a=as(e);return a?(o=e,l=Pe):(o=e.get,l=e.set),new n8(o,l,a||!l,t)}function ln(e,n,t,o){let l;try{l=o?e(...o):e()}catch(a){Vo(a,n,t)}return l}function xe(e,n,t,o){if(as(e)){const a=ln(e,n,t,o);return a&&xi(a)&&a.catch(c=>{Vo(c,n,t)}),a}const l=[];for(let a=0;a<e.length;a++)l.push(xe(e[a],n,t,o));return l}function Vo(e,n,t,o=!0){const l=n?n.vnode:null;if(n){let a=n.parent;const c=n.proxy,i=t;for(;a;){const y=a.ec;if(y){for(let u=0;u<y.length;u++)if(y[u](e,c,i)===!1)return}a=a.parent}const p=n.appContext.config.errorHandler;if(p){ln(p,null,10,[e,c,i]);return}}o8(e,t,l,o)}function o8(e,n,t,o=!0){console.error(e)}let qt=!1,Nl=!1;const Zs=[];let Le=0;const Xn=[];let Ke=null,Cn=0;const Xi=Promise.resolve();let Or=null;function Xs(e){const n=Or||Xi;return e?n.then(this?e.bind(this):e):n}function l8(e){let n=Le+1,t=Zs.length;for(;n<t;){const o=n+t>>>1;Ht(Zs[o])<e?n=o+1:t=o}return n}function Mr(e){(!Zs.length||!Zs.includes(e,qt&&e.allowRecurse?Le+1:Le))&&(e.id==null?Zs.push(e):Zs.splice(l8(e.id),0,e),Ji())}function Ji(){!qt&&!Nl&&(Nl=!0,Or=Xi.then(sp))}function r8(e){const n=Zs.indexOf(e);n>Le&&Zs.splice(n,1)}function a8(e){ts(e)?Xn.push(...e):(!Ke||!Ke.includes(e,e.allowRecurse?Cn+1:Cn))&&Xn.push(e),Ji()}function wa(e,n=qt?Le+1:0){for(;n<Zs.length;n++){const t=Zs[n];t&&t.pre&&(Zs.splice(n,1),n--,t())}}function Qi(e){if(Xn.length){const n=[...new Set(Xn)];if(Xn.length=0,Ke){Ke.push(...n);return}for(Ke=n,Ke.sort((t,o)=>Ht(t)-Ht(o)),Cn=0;Cn<Ke.length;Cn++)Ke[Cn]();Ke=null,Cn=0}}const Ht=e=>e.id==null?1/0:e.id,c8=(e,n)=>{const t=Ht(e)-Ht(n);if(t===0){if(e.pre&&!n.pre)return-1;if(n.pre&&!e.pre)return 1}return t};function sp(e){Nl=!1,qt=!0,Zs.sort(c8);const n=Pe;try{for(Le=0;Le<Zs.length;Le++){const t=Zs[Le];t&&t.active!==!1&&ln(t,null,14)}}finally{Le=0,Zs.length=0,Qi(),qt=!1,Or=null,(Zs.length||Xn.length)&&sp()}}function i8(e,n,...t){if(e.isUnmounted)return;const o=e.vnode.props||Ps;let l=t;const a=n.startsWith("update:"),c=a&&n.slice(7);if(c&&c in o){const u=`${c==="modelValue"?"model":c}Modifiers`,{number:d,trim:f}=o[u]||Ps;f&&(l=t.map(A=>A.trim())),d&&(l=t.map(Sl))}let i,p=o[i=ol(n)]||o[i=ol(je(n))];!p&&a&&(p=o[i=ol(On(n))]),p&&xe(p,e,6,l);const y=o[i+"Once"];if(y){if(!e.emitted)e.emitted={};else if(e.emitted[i])return;e.emitted[i]=!0,xe(y,e,6,l)}}function ep(e,n,t=!1){const o=n.emitsCache,l=o.get(e);if(l!==void 0)return l;const a=e.emits;let c={},i=!1;if(!as(e)){const p=y=>{const u=ep(y,n,!0);u&&(i=!0,re(c,u))};!t&&n.mixins.length&&n.mixins.forEach(p),e.extends&&p(e.extends),e.mixins&&e.mixins.forEach(p)}return!a&&!i?(Ns(e)&&o.set(e,null),null):(ts(a)?a.forEach(p=>c[p]=null):re(c,a),Ns(e)&&o.set(e,c),c)}function Ko(e,n){return!e||!Ro(n)?!1:(n=n.slice(2).replace(/Once$/,""),Bs(e,n[0].toLowerCase()+n.slice(1))||Bs(e,On(n))||Bs(e,n))}let Js=null,zo=null;function Eo(e){const n=Js;return Js=e,zo=e&&e.type.__scopeId||null,n}function R1(e){zo=e}function U1(){zo=null}function T(e,n=Js,t){if(!n||e._n)return e;const o=(...l)=>{o._d&&La(-1);const a=Eo(n);let c;try{c=e(...l)}finally{Eo(a),o._d&&La(1)}return c};return o._n=!0,o._c=!0,o._d=!0,o}function ll(e){const{type:n,vnode:t,proxy:o,withProxy:l,props:a,propsOptions:[c],slots:i,attrs:p,emit:y,render:u,renderCache:d,data:f,setupState:A,ctx:m,inheritAttrs:C}=e;let D,_;const E=Eo(e);try{if(t.shapeFlag&4){const F=l||o;D=Ne(u.call(F,F,d,a,A,f,m)),_=p}else{const F=n;D=Ne(F.length>1?F(a,{attrs:p,slots:i,emit:y}):F(a,null)),_=n.props?p:p8(p)}}catch(F){Pt.length=0,Vo(F,e,1),D=M(un)}let b=D;if(_&&C!==!1){const F=Object.keys(_),{shapeFlag:N}=b;F.length&&N&7&&(c&&F.some(Dr)&&(_=y8(_,c)),b=Tn(b,_))}return t.dirs&&(b=Tn(b),b.dirs=b.dirs?b.dirs.concat(t.dirs):t.dirs),t.transition&&(b.transition=t.transition),D=b,Eo(E),D}const p8=e=>{let n;for(const t in e)(t==="class"||t==="style"||Ro(t))&&((n||(n={}))[t]=e[t]);return n},y8=(e,n)=>{const t={};for(const o in e)(!Dr(o)||!(o.slice(9)in n))&&(t[o]=e[o]);return t};function u8(e,n,t){const{props:o,children:l,component:a}=e,{props:c,children:i,patchFlag:p}=n,y=a.emitsOptions;if(n.dirs||n.transition)return!0;if(t&&p>=0){if(p&1024)return!0;if(p&16)return o?ka(o,c,y):!!c;if(p&8){const u=n.dynamicProps;for(let d=0;d<u.length;d++){const f=u[d];if(c[f]!==o[f]&&!Ko(y,f))return!0}}}else return(l||i)&&(!i||!i.$stable)?!0:o===c?!1:o?c?ka(o,c,y):!0:!!c;return!1}function ka(e,n,t){const o=Object.keys(n);if(o.length!==Object.keys(e).length)return!0;for(let l=0;l<o.length;l++){const a=o[l];if(n[a]!==e[a]&&!Ko(t,a))return!0}return!1}function d8({vnode:e,parent:n},t){for(;n&&n.subTree===e;)(e=n.vnode).el=t,n=n.parent}const np=e=>e.__isSuspense;function f8(e,n){n&&n.pendingBranch?ts(e)?n.effects.push(...e):n.effects.push(e):a8(e)}function de(e,n){if(Ks){let t=Ks.provides;const o=Ks.parent&&Ks.parent.provides;o===t&&(t=Ks.provides=Object.create(o)),t[e]=n}}function q(e,n,t=!1){const o=Ks||Js;if(o){const l=o.parent==null?o.vnode.appContext&&o.vnode.appContext.provides:o.parent.provides;if(l&&e in l)return l[e];if(arguments.length>1)return t&&as(n)?n.call(o.proxy):n}}function yt(e,n){return Nr(e,null,n)}const Fa={};function us(e,n,t){return Nr(e,n,t)}function Nr(e,n,{immediate:t,deep:o,flush:l,onTrack:a,onTrigger:c}=Ps){const i=Ks;let p,y=!1,u=!1;if(Es(e)?(p=()=>e.value,y=bo(e)):Zn(e)?(p=()=>e,o=!0):ts(e)?(u=!0,y=e.some(_=>Zn(_)||bo(_)),p=()=>e.map(_=>{if(Es(_))return _.value;if(Zn(_))return bn(_);if(as(_))return ln(_,i,2)})):as(e)?n?p=()=>ln(e,i,2):p=()=>{if(!(i&&i.isUnmounted))return d&&d(),xe(e,i,3,[f])}:p=Pe,n&&o){const _=p;p=()=>bn(_())}let d,f=_=>{d=D.onStop=()=>{ln(_,i,4)}};if(Vt)return f=Pe,n?t&&xe(n,i,3,[p(),u?[]:void 0,f]):p(),Pe;let A=u?[]:Fa;const m=()=>{if(!!D.active)if(n){const _=D.run();(o||y||(u?_.some((E,b)=>Ut(E,A[b])):Ut(_,A)))&&(d&&d(),xe(n,i,3,[_,A===Fa?void 0:A,f]),A=_)}else D.run()};m.allowRecurse=!!n;let C;l==="sync"?C=m:l==="post"?C=()=>Ys(m,i&&i.suspense):(m.pre=!0,i&&(m.id=i.uid),C=()=>Mr(m));const D=new wr(p,C);return n?t?m():A=D.run():l==="post"?Ys(D.run.bind(D),i&&i.suspense):D.run(),()=>{D.stop(),i&&i.scope&&vr(i.scope.effects,D)}}function m8(e,n,t){const o=this.proxy,l=Is(e)?e.includes(".")?tp(o,e):()=>o[e]:e.bind(o,o);let a;as(n)?a=n:(a=n.handler,t=n);const c=Ks;lt(this);const i=Nr(l,a.bind(o),t);return c?lt(c):Fn(),i}function tp(e,n){const t=n.split(".");return()=>{let o=e;for(let l=0;l<t.length&&o;l++)o=o[t[l]];return o}}function bn(e,n){if(!Ns(e)||e.__v_skip||(n=n||new Set,n.has(e)))return e;if(n.add(e),Es(e))bn(e.value,n);else if(ts(e))for(let t=0;t<e.length;t++)bn(e[t],n);else if(Pi(e)||Yn(e))e.forEach(t=>{bn(t,n)});else if(Ti(e))for(const t in e)bn(e[t],n);return e}function op(e,n){e.shapeFlag&6&&e.component?op(e.component.subTree,n):e.shapeFlag&128?(e.ssContent.transition=n.clone(e.ssContent),e.ssFallback.transition=n.clone(e.ssFallback)):e.transition=n}function hs(e){return as(e)?{setup:e,name:e.name}:e}const Jn=e=>!!e.type.__asyncLoader,lp=e=>e.type.__isKeepAlive,A8={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(e,{slots:n}){const t=Mn(),o=t.ctx;if(!o.renderer)return()=>{const E=n.default&&n.default();return E&&E.length===1?E[0]:E};const l=new Map,a=new Set;let c=null;const i=t.suspense,{renderer:{p,m:y,um:u,o:{createElement:d}}}=o,f=d("div");o.activate=(E,b,F,N,L)=>{const U=E.component;y(E,b,F,0,i),p(U.vnode,E,b,F,U,i,N,E.slotScopeIds,L),Ys(()=>{U.isDeactivated=!1,U.a&&Gn(U.a);const Q=E.props&&E.props.onVnodeMounted;Q&&he(Q,U.parent,E)},i)},o.deactivate=E=>{const b=E.component;y(E,f,null,1,i),Ys(()=>{b.da&&Gn(b.da);const F=E.props&&E.props.onVnodeUnmounted;F&&he(F,b.parent,E),b.isDeactivated=!0},i)};function A(E){rl(E),u(E,t,i,!0)}function m(E){l.forEach((b,F)=>{const N=Hl(b.type);N&&(!E||!E(N))&&C(F)})}function C(E){const b=l.get(E);!c||b.type!==c.type?A(b):c&&rl(c),l.delete(E),a.delete(E)}us(()=>[e.include,e.exclude],([E,b])=>{E&&m(F=>wt(E,F)),b&&m(F=>!wt(b,F))},{flush:"post",deep:!0});let D=null;const _=()=>{D!=null&&l.set(D,al(t.subTree))};return ut(_),Lr(_),Go(()=>{l.forEach(E=>{const{subTree:b,suspense:F}=t,N=al(b);if(E.type===N.type){rl(N);const L=N.component.da;L&&Ys(L,F);return}A(E)})}),()=>{if(D=null,!n.default)return null;const E=n.default(),b=E[0];if(E.length>1)return c=null,E;if(!ot(b)||!(b.shapeFlag&4)&&!(b.shapeFlag&128))return c=null,b;let F=al(b);const N=F.type,L=Hl(Jn(F)?F.type.__asyncResolved||{}:N),{include:U,exclude:Q,max:ps}=e;if(U&&(!L||!wt(U,L))||Q&&L&&wt(Q,L))return c=F,b;const ds=F.key==null?N:F.key,Cs=l.get(ds);return F.el&&(F=Tn(F),b.shapeFlag&128&&(b.ssContent=F)),D=ds,Cs?(F.el=Cs.el,F.component=Cs.component,F.transition&&op(F,F.transition),F.shapeFlag|=512,a.delete(ds),a.add(ds)):(a.add(ds),ps&&a.size>parseInt(ps,10)&&C(a.values().next().value)),F.shapeFlag|=256,c=F,np(b.type)?b:F}}},rp=A8;function wt(e,n){return ts(e)?e.some(t=>wt(t,n)):Is(e)?e.split(",").includes(n):e.test?e.test(n):!1}function B8(e,n){ap(e,"a",n)}function h8(e,n){ap(e,"da",n)}function ap(e,n,t=Ks){const o=e.__wdc||(e.__wdc=()=>{let l=t;for(;l;){if(l.isDeactivated)return;l=l.parent}return e()});if(Yo(n,o,t),t){let l=t.parent;for(;l&&l.parent;)lp(l.parent.vnode)&&C8(o,n,t,l),l=l.parent}}function C8(e,n,t,o){const l=Yo(n,e,o,!0);Zo(()=>{vr(o[n],l)},t)}function rl(e){let n=e.shapeFlag;n&256&&(n-=256),n&512&&(n-=512),e.shapeFlag=n}function al(e){return e.shapeFlag&128?e.ssContent:e}function Yo(e,n,t=Ks,o=!1){if(t){const l=t[e]||(t[e]=[]),a=n.__weh||(n.__weh=(...c)=>{if(t.isUnmounted)return;it(),lt(t);const i=xe(n,t,e,c);return Fn(),pt(),i});return o?l.unshift(a):l.push(a),a}}const Ze=e=>(n,t=Ks)=>(!Vt||e==="sp")&&Yo(e,(...o)=>n(...o),t),g8=Ze("bm"),ut=Ze("m"),D8=Ze("bu"),Lr=Ze("u"),Go=Ze("bum"),Zo=Ze("um"),v8=Ze("sp"),_8=Ze("rtg"),b8=Ze("rtc");function E8(e,n=Ks){Yo("ec",e,n)}function Ir(e,n){const t=Js;if(t===null)return e;const o=Jo(t)||t.proxy,l=e.dirs||(e.dirs=[]);for(let a=0;a<n.length;a++){let[c,i,p,y=Ps]=n[a];as(c)&&(c={mounted:c,updated:c}),c.deep&&bn(i),l.push({dir:c,instance:o,value:i,oldValue:void 0,arg:p,modifiers:y})}return e}function dn(e,n,t,o){const l=e.dirs,a=n&&n.dirs;for(let c=0;c<l.length;c++){const i=l[c];a&&(i.oldValue=a[c].value);let p=i.dir[o];p&&(it(),xe(p,t,8,[e.el,i,e,n]),pt())}}const cp="components";function tt(e,n){return k8(cp,e,!0,n)||e}const w8=Symbol();function k8(e,n,t=!0,o=!1){const l=Js||Ks;if(l){const a=l.type;if(e===cp){const i=Hl(a,!1);if(i&&(i===n||i===je(n)||i===qo(je(n))))return a}const c=Pa(l[e]||a[e],n)||Pa(l.appContext[e],n);return!c&&o?a:c}}function Pa(e,n){return e&&(e[n]||e[je(n)]||e[qo(je(n))])}function dt(e,n,t,o){let l;const a=t&&t[o];if(ts(e)||Is(e)){l=new Array(e.length);for(let c=0,i=e.length;c<i;c++)l[c]=n(e[c],c,void 0,a&&a[c])}else if(typeof e=="number"){l=new Array(e);for(let c=0;c<e;c++)l[c]=n(c+1,c,void 0,a&&a[c])}else if(Ns(e))if(e[Symbol.iterator])l=Array.from(e,(c,i)=>n(c,i,void 0,a&&a[i]));else{const c=Object.keys(e);l=new Array(c.length);for(let i=0,p=c.length;i<p;i++){const y=c[i];l[i]=n(e[y],y,i,a&&a[i])}}else l=[];return t&&(t[o]=l),l}function Qs(e,n,t={},o,l){if(Js.isCE||Js.parent&&Jn(Js.parent)&&Js.parent.isCE)return M("slot",n==="default"?null:{name:n},o&&o());let a=e[n];a&&a._c&&(a._d=!1),g();const c=a&&ip(a(t)),i=z(G,{key:t.key||c&&c.key||`_${n}`},c||(o?o():[]),c&&e._===1?64:-2);return!l&&i.scopeId&&(i.slotScopeIds=[i.scopeId+"-s"]),a&&a._c&&(a._d=!0),i}function ip(e){return e.some(n=>ot(n)?!(n.type===un||n.type===G&&!ip(n.children)):!0)?e:null}const Ll=e=>e?Cp(e)?Jo(e)||e.proxy:Ll(e.parent):null,wo=re(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Ll(e.parent),$root:e=>Ll(e.root),$emit:e=>e.emit,$options:e=>Rr(e),$forceUpdate:e=>e.f||(e.f=()=>Mr(e.update)),$nextTick:e=>e.n||(e.n=Xs.bind(e.proxy)),$watch:e=>m8.bind(e)}),F8={get({_:e},n){const{ctx:t,setupState:o,data:l,props:a,accessCache:c,type:i,appContext:p}=e;let y;if(n[0]!=="$"){const A=c[n];if(A!==void 0)switch(A){case 1:return o[n];case 2:return l[n];case 4:return t[n];case 3:return a[n]}else{if(o!==Ps&&Bs(o,n))return c[n]=1,o[n];if(l!==Ps&&Bs(l,n))return c[n]=2,l[n];if((y=e.propsOptions[0])&&Bs(y,n))return c[n]=3,a[n];if(t!==Ps&&Bs(t,n))return c[n]=4,t[n];Il&&(c[n]=0)}}const u=wo[n];let d,f;if(u)return n==="$attrs"&&Be(e,"get",n),u(e);if((d=i.__cssModules)&&(d=d[n]))return d;if(t!==Ps&&Bs(t,n))return c[n]=4,t[n];if(f=p.config.globalProperties,Bs(f,n))return f[n]},set({_:e},n,t){const{data:o,setupState:l,ctx:a}=e;return l!==Ps&&Bs(l,n)?(l[n]=t,!0):o!==Ps&&Bs(o,n)?(o[n]=t,!0):Bs(e.props,n)||n[0]==="$"&&n.slice(1)in e?!1:(a[n]=t,!0)},has({_:{data:e,setupState:n,accessCache:t,ctx:o,appContext:l,propsOptions:a}},c){let i;return!!t[c]||e!==Ps&&Bs(e,c)||n!==Ps&&Bs(n,c)||(i=a[0])&&Bs(i,c)||Bs(o,c)||Bs(wo,c)||Bs(l.config.globalProperties,c)},defineProperty(e,n,t){return t.get!=null?e._.accessCache[n]=0:Bs(t,"value")&&this.set(e,n,t.value,null),Reflect.defineProperty(e,n,t)}};let Il=!0;function P8(e){const n=Rr(e),t=e.proxy,o=e.ctx;Il=!1,n.beforeCreate&&xa(n.beforeCreate,e,"bc");const{data:l,computed:a,methods:c,watch:i,provide:p,inject:y,created:u,beforeMount:d,mounted:f,beforeUpdate:A,updated:m,activated:C,deactivated:D,beforeDestroy:_,beforeUnmount:E,destroyed:b,unmounted:F,render:N,renderTracked:L,renderTriggered:U,errorCaptured:Q,serverPrefetch:ps,expose:ds,inheritAttrs:Cs,components:Vs,directives:qs,filters:Ls}=n;if(y&&x8(y,o,null,e.appContext.config.unwrapInjectedRef),c)for(const Z in c){const ns=c[Z];as(ns)&&(o[Z]=ns.bind(t))}if(l){const Z=l.call(t,t);Ns(Z)&&(e.data=Os(Z))}if(Il=!0,a)for(const Z in a){const ns=a[Z],fs=as(ns)?ns.bind(t,t):as(ns.get)?ns.get.bind(t,t):Pe,ws=!as(ns)&&as(ns.set)?ns.set.bind(t):Pe,ne=k({get:fs,set:ws});Object.defineProperty(o,Z,{enumerable:!0,configurable:!0,get:()=>ne.value,set:Rs=>ne.value=Rs})}if(i)for(const Z in i)pp(i[Z],o,t,Z);if(p){const Z=as(p)?p.call(t):p;Reflect.ownKeys(Z).forEach(ns=>{de(ns,Z[ns])})}u&&xa(u,e,"c");function $s(Z,ns){ts(ns)?ns.forEach(fs=>Z(fs.bind(t))):ns&&Z(ns.bind(t))}if($s(g8,d),$s(ut,f),$s(D8,A),$s(Lr,m),$s(B8,C),$s(h8,D),$s(E8,Q),$s(b8,L),$s(_8,U),$s(Go,E),$s(Zo,F),$s(v8,ps),ts(ds))if(ds.length){const Z=e.exposed||(e.exposed={});ds.forEach(ns=>{Object.defineProperty(Z,ns,{get:()=>t[ns],set:fs=>t[ns]=fs})})}else e.exposed||(e.exposed={});N&&e.render===Pe&&(e.render=N),Cs!=null&&(e.inheritAttrs=Cs),Vs&&(e.components=Vs),qs&&(e.directives=qs)}function x8(e,n,t=Pe,o=!1){ts(e)&&(e=Rl(e));for(const l in e){const a=e[l];let c;Ns(a)?"default"in a?c=q(a.from||l,a.default,!0):c=q(a.from||l):c=q(a),Es(c)&&o?Object.defineProperty(n,l,{enumerable:!0,configurable:!0,get:()=>c.value,set:i=>c.value=i}):n[l]=c}}function xa(e,n,t){xe(ts(e)?e.map(o=>o.bind(n.proxy)):e.bind(n.proxy),n,t)}function pp(e,n,t,o){const l=o.includes(".")?tp(t,o):()=>t[o];if(Is(e)){const a=n[e];as(a)&&us(l,a)}else if(as(e))us(l,e.bind(t));else if(Ns(e))if(ts(e))e.forEach(a=>pp(a,n,t,o));else{const a=as(e.handler)?e.handler.bind(t):n[e.handler];as(a)&&us(l,a,e)}}function Rr(e){const n=e.type,{mixins:t,extends:o}=n,{mixins:l,optionsCache:a,config:{optionMergeStrategies:c}}=e.appContext,i=a.get(n);let p;return i?p=i:!l.length&&!t&&!o?p=n:(p={},l.length&&l.forEach(y=>ko(p,y,c,!0)),ko(p,n,c)),Ns(n)&&a.set(n,p),p}function ko(e,n,t,o=!1){const{mixins:l,extends:a}=n;a&&ko(e,a,t,!0),l&&l.forEach(c=>ko(e,c,t,!0));for(const c in n)if(!(o&&c==="expose")){const i=S8[c]||t&&t[c];e[c]=i?i(e[c],n[c]):n[c]}return e}const S8={data:Sa,props:Bn,emits:Bn,methods:Bn,computed:Bn,beforeCreate:te,created:te,beforeMount:te,mounted:te,beforeUpdate:te,updated:te,beforeDestroy:te,beforeUnmount:te,destroyed:te,unmounted:te,activated:te,deactivated:te,errorCaptured:te,serverPrefetch:te,components:Bn,directives:Bn,watch:$8,provide:Sa,inject:T8};function Sa(e,n){return n?e?function(){return re(as(e)?e.call(this,this):e,as(n)?n.call(this,this):n)}:n:e}function T8(e,n){return Bn(Rl(e),Rl(n))}function Rl(e){if(ts(e)){const n={};for(let t=0;t<e.length;t++)n[e[t]]=e[t];return n}return e}function te(e,n){return e?[...new Set([].concat(e,n))]:n}function Bn(e,n){return e?re(re(Object.create(null),e),n):n}function $8(e,n){if(!e)return n;if(!n)return e;const t=re(Object.create(null),e);for(const o in n)t[o]=te(e[o],n[o]);return t}function O8(e,n,t,o=!1){const l={},a={};_o(a,Xo,1),e.propsDefaults=Object.create(null),yp(e,n,l,a);for(const c in e.propsOptions[0])c in l||(l[c]=void 0);t?e.props=o?l:Gu(l):e.type.props?e.props=l:e.props=a,e.attrs=a}function M8(e,n,t,o){const{props:l,attrs:a,vnode:{patchFlag:c}}=e,i=_s(l),[p]=e.propsOptions;let y=!1;if((o||c>0)&&!(c&16)){if(c&8){const u=e.vnode.dynamicProps;for(let d=0;d<u.length;d++){let f=u[d];if(Ko(e.emitsOptions,f))continue;const A=n[f];if(p)if(Bs(a,f))A!==a[f]&&(a[f]=A,y=!0);else{const m=je(f);l[m]=Ul(p,i,m,A,e,!1)}else A!==a[f]&&(a[f]=A,y=!0)}}}else{yp(e,n,l,a)&&(y=!0);let u;for(const d in i)(!n||!Bs(n,d)&&((u=On(d))===d||!Bs(n,u)))&&(p?t&&(t[d]!==void 0||t[u]!==void 0)&&(l[d]=Ul(p,i,d,void 0,e,!0)):delete l[d]);if(a!==i)for(const d in a)(!n||!Bs(n,d)&&!0)&&(delete a[d],y=!0)}y&&Ge(e,"set","$attrs")}function yp(e,n,t,o){const[l,a]=e.propsOptions;let c=!1,i;if(n)for(let p in n){if(Ao(p))continue;const y=n[p];let u;l&&Bs(l,u=je(p))?!a||!a.includes(u)?t[u]=y:(i||(i={}))[u]=y:Ko(e.emitsOptions,p)||(!(p in o)||y!==o[p])&&(o[p]=y,c=!0)}if(a){const p=_s(t),y=i||Ps;for(let u=0;u<a.length;u++){const d=a[u];t[d]=Ul(l,p,d,y[d],e,!Bs(y,d))}}return c}function Ul(e,n,t,o,l,a){const c=e[t];if(c!=null){const i=Bs(c,"default");if(i&&o===void 0){const p=c.default;if(c.type!==Function&&as(p)){const{propsDefaults:y}=l;t in y?o=y[t]:(lt(l),o=y[t]=p.call(null,n),Fn())}else o=p}c[0]&&(a&&!i?o=!1:c[1]&&(o===""||o===On(t))&&(o=!0))}return o}function up(e,n,t=!1){const o=n.propsCache,l=o.get(e);if(l)return l;const a=e.props,c={},i=[];let p=!1;if(!as(e)){const u=d=>{p=!0;const[f,A]=up(d,n,!0);re(c,f),A&&i.push(...A)};!t&&n.mixins.length&&n.mixins.forEach(u),e.extends&&u(e.extends),e.mixins&&e.mixins.forEach(u)}if(!a&&!p)return Ns(e)&&o.set(e,zn),zn;if(ts(a))for(let u=0;u<a.length;u++){const d=je(a[u]);Ta(d)&&(c[d]=Ps)}else if(a)for(const u in a){const d=je(u);if(Ta(d)){const f=a[u],A=c[d]=ts(f)||as(f)?{type:f}:f;if(A){const m=Ma(Boolean,A.type),C=Ma(String,A.type);A[0]=m>-1,A[1]=C<0||m<C,(m>-1||Bs(A,"default"))&&i.push(d)}}}const y=[c,i];return Ns(e)&&o.set(e,y),y}function Ta(e){return e[0]!=="$"}function $a(e){const n=e&&e.toString().match(/^\s*function (\w+)/);return n?n[1]:e===null?"null":""}function Oa(e,n){return $a(e)===$a(n)}function Ma(e,n){return ts(n)?n.findIndex(t=>Oa(t,e)):as(n)&&Oa(n,e)?0:-1}const dp=e=>e[0]==="_"||e==="$stable",Ur=e=>ts(e)?e.map(Ne):[Ne(e)],N8=(e,n,t)=>{if(n._n)return n;const o=T((...l)=>Ur(n(...l)),t);return o._c=!1,o},fp=(e,n,t)=>{const o=e._ctx;for(const l in e){if(dp(l))continue;const a=e[l];if(as(a))n[l]=N8(l,a,o);else if(a!=null){const c=Ur(a);n[l]=()=>c}}},mp=(e,n)=>{const t=Ur(n);e.slots.default=()=>t},L8=(e,n)=>{if(e.vnode.shapeFlag&32){const t=n._;t?(e.slots=_s(n),_o(n,"_",t)):fp(n,e.slots={})}else e.slots={},n&&mp(e,n);_o(e.slots,Xo,1)},I8=(e,n,t)=>{const{vnode:o,slots:l}=e;let a=!0,c=Ps;if(o.shapeFlag&32){const i=n._;i?t&&i===1?a=!1:(re(l,n),!t&&i===1&&delete l._):(a=!n.$stable,fp(n,l)),c=n}else n&&(mp(e,n),c={default:1});if(a)for(const i in l)!dp(i)&&!(i in c)&&delete l[i]};function Ap(){return{app:null,config:{isNativeTag:mu,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let R8=0;function U8(e,n){return function(o,l=null){as(o)||(o=Object.assign({},o)),l!=null&&!Ns(l)&&(l=null);const a=Ap(),c=new Set;let i=!1;const p=a.app={_uid:R8++,_component:o,_props:l,_container:null,_context:a,_instance:null,version:ld,get config(){return a.config},set config(y){},use(y,...u){return c.has(y)||(y&&as(y.install)?(c.add(y),y.install(p,...u)):as(y)&&(c.add(y),y(p,...u))),p},mixin(y){return a.mixins.includes(y)||a.mixins.push(y),p},component(y,u){return u?(a.components[y]=u,p):a.components[y]},directive(y,u){return u?(a.directives[y]=u,p):a.directives[y]},mount(y,u,d){if(!i){const f=M(o,l);return f.appContext=a,u&&n?n(f,y):e(f,y,d),i=!0,p._container=y,y.__vue_app__=p,Jo(f.component)||f.component.proxy}},unmount(){i&&(e(null,p._container),delete p._container.__vue_app__)},provide(y,u){return a.provides[y]=u,p}};return p}}function jl(e,n,t,o,l=!1){if(ts(e)){e.forEach((f,A)=>jl(f,n&&(ts(n)?n[A]:n),t,o,l));return}if(Jn(o)&&!l)return;const a=o.shapeFlag&4?Jo(o.component)||o.component.proxy:o.el,c=l?null:a,{i,r:p}=e,y=n&&n.r,u=i.refs===Ps?i.refs={}:i.refs,d=i.setupState;if(y!=null&&y!==p&&(Is(y)?(u[y]=null,Bs(d,y)&&(d[y]=null)):Es(y)&&(y.value=null)),as(p))ln(p,i,12,[c,u]);else{const f=Is(p),A=Es(p);if(f||A){const m=()=>{if(e.f){const C=f?Bs(d,p)?d[p]:u[p]:p.value;l?ts(C)&&vr(C,a):ts(C)?C.includes(a)||C.push(a):f?(u[p]=[a],Bs(d,p)&&(d[p]=u[p])):(p.value=[a],e.k&&(u[e.k]=p.value))}else f?(u[p]=c,Bs(d,p)&&(d[p]=c)):A&&(p.value=c,e.k&&(u[e.k]=c))};c?(m.id=-1,Ys(m,t)):m()}}}const Ys=f8;function j8(e){return q8(e)}function q8(e,n){const t=Du();t.__VUE__=!0;const{insert:o,remove:l,patchProp:a,createElement:c,createText:i,createComment:p,setText:y,setElementText:u,parentNode:d,nextSibling:f,setScopeId:A=Pe,insertStaticContent:m}=e,C=(B,h,w,P=null,$=null,R=null,K=!1,I=null,j=!!h.dynamicChildren)=>{if(B===h)return;B&&!Bt(B,h)&&(P=H(B),Rs(B,$,R,!0),B=null),h.patchFlag===-2&&(j=!1,h.dynamicChildren=null);const{type:O,ref:ss,shapeFlag:X}=h;switch(O){case qr:D(B,h,w,P);break;case un:_(B,h,w,P);break;case cl:B==null&&E(h,w,P,K);break;case G:Vs(B,h,w,P,$,R,K,I,j);break;default:X&1?N(B,h,w,P,$,R,K,I,j):X&6?qs(B,h,w,P,$,R,K,I,j):(X&64||X&128)&&O.process(B,h,w,P,$,R,K,I,j,ms)}ss!=null&&$&&jl(ss,B&&B.ref,R,h||B,!h)},D=(B,h,w,P)=>{if(B==null)o(h.el=i(h.children),w,P);else{const $=h.el=B.el;h.children!==B.children&&y($,h.children)}},_=(B,h,w,P)=>{B==null?o(h.el=p(h.children||""),w,P):h.el=B.el},E=(B,h,w,P)=>{[B.el,B.anchor]=m(B.children,h,w,P,B.el,B.anchor)},b=({el:B,anchor:h},w,P)=>{let $;for(;B&&B!==h;)$=f(B),o(B,w,P),B=$;o(h,w,P)},F=({el:B,anchor:h})=>{let w;for(;B&&B!==h;)w=f(B),l(B),B=w;l(h)},N=(B,h,w,P,$,R,K,I,j)=>{K=K||h.type==="svg",B==null?L(h,w,P,$,R,K,I,j):ps(B,h,$,R,K,I,j)},L=(B,h,w,P,$,R,K,I)=>{let j,O;const{type:ss,props:X,shapeFlag:es,transition:os,dirs:As}=B;if(j=B.el=c(B.type,R,X&&X.is,X),es&8?u(j,B.children):es&16&&Q(B.children,j,null,P,$,R&&ss!=="foreignObject",K,I),As&&dn(B,null,P,"created"),X){for(const Fs in X)Fs!=="value"&&!Ao(Fs)&&a(j,Fs,null,X[Fs],R,B.children,P,$,V);"value"in X&&a(j,"value",null,X.value),(O=X.onVnodeBeforeMount)&&he(O,P,B)}U(j,B,B.scopeId,K,P),As&&dn(B,null,P,"beforeMount");const xs=(!$||$&&!$.pendingBranch)&&os&&!os.persisted;xs&&os.beforeEnter(j),o(j,h,w),((O=X&&X.onVnodeMounted)||xs||As)&&Ys(()=>{O&&he(O,P,B),xs&&os.enter(j),As&&dn(B,null,P,"mounted")},$)},U=(B,h,w,P,$)=>{if(w&&A(B,w),P)for(let R=0;R<P.length;R++)A(B,P[R]);if($){let R=$.subTree;if(h===R){const K=$.vnode;U(B,K,K.scopeId,K.slotScopeIds,$.parent)}}},Q=(B,h,w,P,$,R,K,I,j=0)=>{for(let O=j;O<B.length;O++){const ss=B[O]=I?en(B[O]):Ne(B[O]);C(null,ss,h,w,P,$,R,K,I)}},ps=(B,h,w,P,$,R,K)=>{const I=h.el=B.el;let{patchFlag:j,dynamicChildren:O,dirs:ss}=h;j|=B.patchFlag&16;const X=B.props||Ps,es=h.props||Ps;let os;w&&fn(w,!1),(os=es.onVnodeBeforeUpdate)&&he(os,w,h,B),ss&&dn(h,B,w,"beforeUpdate"),w&&fn(w,!0);const As=$&&h.type!=="foreignObject";if(O?ds(B.dynamicChildren,O,I,w,P,As,R):K||ns(B,h,I,null,w,P,As,R,!1),j>0){if(j&16)Cs(I,h,X,es,w,P,$);else if(j&2&&X.class!==es.class&&a(I,"class",null,es.class,$),j&4&&a(I,"style",X.style,es.style,$),j&8){const xs=h.dynamicProps;for(let Fs=0;Fs<xs.length;Fs++){const Us=xs[Fs],_e=X[Us],Rn=es[Us];(Rn!==_e||Us==="value")&&a(I,Us,_e,Rn,$,B.children,w,P,V)}}j&1&&B.children!==h.children&&u(I,h.children)}else!K&&O==null&&Cs(I,h,X,es,w,P,$);((os=es.onVnodeUpdated)||ss)&&Ys(()=>{os&&he(os,w,h,B),ss&&dn(h,B,w,"updated")},P)},ds=(B,h,w,P,$,R,K)=>{for(let I=0;I<h.length;I++){const j=B[I],O=h[I],ss=j.el&&(j.type===G||!Bt(j,O)||j.shapeFlag&70)?d(j.el):w;C(j,O,ss,null,P,$,R,K,!0)}},Cs=(B,h,w,P,$,R,K)=>{if(w!==P){if(w!==Ps)for(const I in w)!Ao(I)&&!(I in P)&&a(B,I,w[I],null,K,h.children,$,R,V);for(const I in P){if(Ao(I))continue;const j=P[I],O=w[I];j!==O&&I!=="value"&&a(B,I,O,j,K,h.children,$,R,V)}"value"in P&&a(B,"value",w.value,P.value)}},Vs=(B,h,w,P,$,R,K,I,j)=>{const O=h.el=B?B.el:i(""),ss=h.anchor=B?B.anchor:i("");let{patchFlag:X,dynamicChildren:es,slotScopeIds:os}=h;os&&(I=I?I.concat(os):os),B==null?(o(O,w,P),o(ss,w,P),Q(h.children,w,ss,$,R,K,I,j)):X>0&&X&64&&es&&B.dynamicChildren?(ds(B.dynamicChildren,es,w,$,R,K,I),(h.key!=null||$&&h===$.subTree)&&jr(B,h,!0)):ns(B,h,w,ss,$,R,K,I,j)},qs=(B,h,w,P,$,R,K,I,j)=>{h.slotScopeIds=I,B==null?h.shapeFlag&512?$.ctx.activate(h,w,P,K,j):Ls(h,w,P,$,R,K,j):Ts(B,h,j)},Ls=(B,h,w,P,$,R,K)=>{const I=B.component=J8(B,P,$);if(lp(B)&&(I.ctx.renderer=ms),Q8(I),I.asyncDep){if($&&$.registerDep(I,$s),!B.el){const j=I.subTree=M(un);_(null,j,h,w)}return}$s(I,B,h,w,$,R,K)},Ts=(B,h,w)=>{const P=h.component=B.component;if(u8(B,h,w))if(P.asyncDep&&!P.asyncResolved){Z(P,h,w);return}else P.next=h,r8(P.update),P.update();else h.el=B.el,P.vnode=h},$s=(B,h,w,P,$,R,K)=>{const I=()=>{if(B.isMounted){let{next:ss,bu:X,u:es,parent:os,vnode:As}=B,xs=ss,Fs;fn(B,!1),ss?(ss.el=As.el,Z(B,ss,K)):ss=As,X&&Gn(X),(Fs=ss.props&&ss.props.onVnodeBeforeUpdate)&&he(Fs,os,ss,As),fn(B,!0);const Us=ll(B),_e=B.subTree;B.subTree=Us,C(_e,Us,d(_e.el),H(_e),B,$,R),ss.el=Us.el,xs===null&&d8(B,Us.el),es&&Ys(es,$),(Fs=ss.props&&ss.props.onVnodeUpdated)&&Ys(()=>he(Fs,os,ss,As),$)}else{let ss;const{el:X,props:es}=h,{bm:os,m:As,parent:xs}=B,Fs=Jn(h);if(fn(B,!1),os&&Gn(os),!Fs&&(ss=es&&es.onVnodeBeforeMount)&&he(ss,xs,h),fn(B,!0),X&&ls){const Us=()=>{B.subTree=ll(B),ls(X,B.subTree,B,$,null)};Fs?h.type.__asyncLoader().then(()=>!B.isUnmounted&&Us()):Us()}else{const Us=B.subTree=ll(B);C(null,Us,w,P,B,$,R),h.el=Us.el}if(As&&Ys(As,$),!Fs&&(ss=es&&es.onVnodeMounted)){const Us=h;Ys(()=>he(ss,xs,Us),$)}(h.shapeFlag&256||xs&&Jn(xs.vnode)&&xs.vnode.shapeFlag&256)&&B.a&&Ys(B.a,$),B.isMounted=!0,h=w=P=null}},j=B.effect=new wr(I,()=>Mr(O),B.scope),O=B.update=()=>j.run();O.id=B.uid,fn(B,!0),O()},Z=(B,h,w)=>{h.component=B;const P=B.vnode.props;B.vnode=h,B.next=null,M8(B,h.props,P,w),I8(B,h.children,w),it(),wa(),pt()},ns=(B,h,w,P,$,R,K,I,j=!1)=>{const O=B&&B.children,ss=B?B.shapeFlag:0,X=h.children,{patchFlag:es,shapeFlag:os}=h;if(es>0){if(es&128){ws(O,X,w,P,$,R,K,I,j);return}else if(es&256){fs(O,X,w,P,$,R,K,I,j);return}}os&8?(ss&16&&V(O,$,R),X!==O&&u(w,X)):ss&16?os&16?ws(O,X,w,P,$,R,K,I,j):V(O,$,R,!0):(ss&8&&u(w,""),os&16&&Q(X,w,P,$,R,K,I,j))},fs=(B,h,w,P,$,R,K,I,j)=>{B=B||zn,h=h||zn;const O=B.length,ss=h.length,X=Math.min(O,ss);let es;for(es=0;es<X;es++){const os=h[es]=j?en(h[es]):Ne(h[es]);C(B[es],os,w,null,$,R,K,I,j)}O>ss?V(B,$,R,!0,!1,X):Q(h,w,P,$,R,K,I,j,X)},ws=(B,h,w,P,$,R,K,I,j)=>{let O=0;const ss=h.length;let X=B.length-1,es=ss-1;for(;O<=X&&O<=es;){const os=B[O],As=h[O]=j?en(h[O]):Ne(h[O]);if(Bt(os,As))C(os,As,w,null,$,R,K,I,j);else break;O++}for(;O<=X&&O<=es;){const os=B[X],As=h[es]=j?en(h[es]):Ne(h[es]);if(Bt(os,As))C(os,As,w,null,$,R,K,I,j);else break;X--,es--}if(O>X){if(O<=es){const os=es+1,As=os<ss?h[os].el:P;for(;O<=es;)C(null,h[O]=j?en(h[O]):Ne(h[O]),w,As,$,R,K,I,j),O++}}else if(O>es)for(;O<=X;)Rs(B[O],$,R,!0),O++;else{const os=O,As=O,xs=new Map;for(O=As;O<=es;O++){const ce=h[O]=j?en(h[O]):Ne(h[O]);ce.key!=null&&xs.set(ce.key,O)}let Fs,Us=0;const _e=es-As+1;let Rn=!1,ma=0;const At=new Array(_e);for(O=0;O<_e;O++)At[O]=0;for(O=os;O<=X;O++){const ce=B[O];if(Us>=_e){Rs(ce,$,R,!0);continue}let Me;if(ce.key!=null)Me=xs.get(ce.key);else for(Fs=As;Fs<=es;Fs++)if(At[Fs-As]===0&&Bt(ce,h[Fs])){Me=Fs;break}Me===void 0?Rs(ce,$,R,!0):(At[Me-As]=O+1,Me>=ma?ma=Me:Rn=!0,C(ce,h[Me],w,null,$,R,K,I,j),Us++)}const Aa=Rn?H8(At):zn;for(Fs=Aa.length-1,O=_e-1;O>=0;O--){const ce=As+O,Me=h[ce],Ba=ce+1<ss?h[ce+1].el:P;At[O]===0?C(null,Me,w,Ba,$,R,K,I,j):Rn&&(Fs<0||O!==Aa[Fs]?ne(Me,w,Ba,2):Fs--)}}},ne=(B,h,w,P,$=null)=>{const{el:R,type:K,transition:I,children:j,shapeFlag:O}=B;if(O&6){ne(B.component.subTree,h,w,P);return}if(O&128){B.suspense.move(h,w,P);return}if(O&64){K.move(B,h,w,ms);return}if(K===G){o(R,h,w);for(let X=0;X<j.length;X++)ne(j[X],h,w,P);o(B.anchor,h,w);return}if(K===cl){b(B,h,w);return}if(P!==2&&O&1&&I)if(P===0)I.beforeEnter(R),o(R,h,w),Ys(()=>I.enter(R),$);else{const{leave:X,delayLeave:es,afterLeave:os}=I,As=()=>o(R,h,w),xs=()=>{X(R,()=>{As(),os&&os()})};es?es(R,As,xs):xs()}else o(R,h,w)},Rs=(B,h,w,P=!1,$=!1)=>{const{type:R,props:K,ref:I,children:j,dynamicChildren:O,shapeFlag:ss,patchFlag:X,dirs:es}=B;if(I!=null&&jl(I,null,w,B,!0),ss&256){h.ctx.deactivate(B);return}const os=ss&1&&es,As=!Jn(B);let xs;if(As&&(xs=K&&K.onVnodeBeforeUnmount)&&he(xs,h,B),ss&6)x(B.component,w,P);else{if(ss&128){B.suspense.unmount(w,P);return}os&&dn(B,null,h,"beforeUnmount"),ss&64?B.type.remove(B,h,w,$,ms,P):O&&(R!==G||X>0&&X&64)?V(O,h,w,!1,!0):(R===G&&X&384||!$&&ss&16)&&V(j,h,w),P&&Je(B)}(As&&(xs=K&&K.onVnodeUnmounted)||os)&&Ys(()=>{xs&&he(xs,h,B),os&&dn(B,null,h,"unmounted")},w)},Je=B=>{const{type:h,el:w,anchor:P,transition:$}=B;if(h===G){In(w,P);return}if(h===cl){F(B);return}const R=()=>{l(w),$&&!$.persisted&&$.afterLeave&&$.afterLeave()};if(B.shapeFlag&1&&$&&!$.persisted){const{leave:K,delayLeave:I}=$,j=()=>K(w,R);I?I(B.el,R,j):j()}else R()},In=(B,h)=>{let w;for(;B!==h;)w=f(B),l(B),B=w;l(h)},x=(B,h,w)=>{const{bum:P,scope:$,update:R,subTree:K,um:I}=B;P&&Gn(P),$.stop(),R&&(R.active=!1,Rs(K,B,h,w)),I&&Ys(I,h),Ys(()=>{B.isUnmounted=!0},h),h&&h.pendingBranch&&!h.isUnmounted&&B.asyncDep&&!B.asyncResolved&&B.suspenseId===h.pendingId&&(h.deps--,h.deps===0&&h.resolve())},V=(B,h,w,P=!1,$=!1,R=0)=>{for(let K=R;K<B.length;K++)Rs(B[K],h,w,P,$)},H=B=>B.shapeFlag&6?H(B.component.subTree):B.shapeFlag&128?B.suspense.next():f(B.anchor||B.el),J=(B,h,w)=>{B==null?h._vnode&&Rs(h._vnode,null,null,!0):C(h._vnode||null,B,h,null,null,null,w),wa(),Qi(),h._vnode=B},ms={p:C,um:Rs,m:ne,r:Je,mt:Ls,mc:Q,pc:ns,pbc:ds,n:H,o:e};let gs,ls;return n&&([gs,ls]=n(ms)),{render:J,hydrate:gs,createApp:U8(J,gs)}}function fn({effect:e,update:n},t){e.allowRecurse=n.allowRecurse=t}function jr(e,n,t=!1){const o=e.children,l=n.children;if(ts(o)&&ts(l))for(let a=0;a<o.length;a++){const c=o[a];let i=l[a];i.shapeFlag&1&&!i.dynamicChildren&&((i.patchFlag<=0||i.patchFlag===32)&&(i=l[a]=en(l[a]),i.el=c.el),t||jr(c,i))}}function H8(e){const n=e.slice(),t=[0];let o,l,a,c,i;const p=e.length;for(o=0;o<p;o++){const y=e[o];if(y!==0){if(l=t[t.length-1],e[l]<y){n[o]=l,t.push(o);continue}for(a=0,c=t.length-1;a<c;)i=a+c>>1,e[t[i]]<y?a=i+1:c=i;y<e[t[a]]&&(a>0&&(n[o]=t[a-1]),t[a]=o)}}for(a=t.length,c=t[a-1];a-- >0;)t[a]=c,c=n[c];return t}const W8=e=>e.__isTeleport,Ft=e=>e&&(e.disabled||e.disabled===""),Na=e=>typeof SVGElement<"u"&&e instanceof SVGElement,ql=(e,n)=>{const t=e&&e.to;return Is(t)?n?n(t):null:t},V8={__isTeleport:!0,process(e,n,t,o,l,a,c,i,p,y){const{mc:u,pc:d,pbc:f,o:{insert:A,querySelector:m,createText:C,createComment:D}}=y,_=Ft(n.props);let{shapeFlag:E,children:b,dynamicChildren:F}=n;if(e==null){const N=n.el=C(""),L=n.anchor=C("");A(N,t,o),A(L,t,o);const U=n.target=ql(n.props,m),Q=n.targetAnchor=C("");U&&(A(Q,U),c=c||Na(U));const ps=(ds,Cs)=>{E&16&&u(b,ds,Cs,l,a,c,i,p)};_?ps(t,L):U&&ps(U,Q)}else{n.el=e.el;const N=n.anchor=e.anchor,L=n.target=e.target,U=n.targetAnchor=e.targetAnchor,Q=Ft(e.props),ps=Q?t:L,ds=Q?N:U;if(c=c||Na(L),F?(f(e.dynamicChildren,F,ps,l,a,c,i),jr(e,n,!0)):p||d(e,n,ps,ds,l,a,c,i,!1),_)Q||po(n,t,N,y,1);else if((n.props&&n.props.to)!==(e.props&&e.props.to)){const Cs=n.target=ql(n.props,m);Cs&&po(n,Cs,null,y,0)}else Q&&po(n,L,U,y,1)}},remove(e,n,t,o,{um:l,o:{remove:a}},c){const{shapeFlag:i,children:p,anchor:y,targetAnchor:u,target:d,props:f}=e;if(d&&a(u),(c||!Ft(f))&&(a(y),i&16))for(let A=0;A<p.length;A++){const m=p[A];l(m,n,t,!0,!!m.dynamicChildren)}},move:po,hydrate:K8};function po(e,n,t,{o:{insert:o},m:l},a=2){a===0&&o(e.targetAnchor,n,t);const{el:c,anchor:i,shapeFlag:p,children:y,props:u}=e,d=a===2;if(d&&o(c,n,t),(!d||Ft(u))&&p&16)for(let f=0;f<y.length;f++)l(y[f],n,t,2);d&&o(i,n,t)}function K8(e,n,t,o,l,a,{o:{nextSibling:c,parentNode:i,querySelector:p}},y){const u=n.target=ql(n.props,p);if(u){const d=u._lpa||u.firstChild;if(n.shapeFlag&16)if(Ft(n.props))n.anchor=y(c(e),n,i(e),t,o,l,a),n.targetAnchor=d;else{n.anchor=c(e);let f=d;for(;f;)if(f=c(f),f&&f.nodeType===8&&f.data==="teleport anchor"){n.targetAnchor=f,u._lpa=n.targetAnchor&&c(n.targetAnchor);break}y(d,n,u,t,o,l,a)}}return n.anchor&&c(n.anchor)}const z8=V8,G=Symbol(void 0),qr=Symbol(void 0),un=Symbol(void 0),cl=Symbol(void 0),Pt=[];let ke=null;function g(e=!1){Pt.push(ke=e?null:[])}function Y8(){Pt.pop(),ke=Pt[Pt.length-1]||null}let Wt=1;function La(e){Wt+=e}function Bp(e){return e.dynamicChildren=Wt>0?ke||zn:null,Y8(),Wt>0&&ke&&ke.push(e),e}function S(e,n,t,o,l,a){return Bp(s(e,n,t,o,l,a,!0))}function z(e,n,t,o,l){return Bp(M(e,n,t,o,l,!0))}function ot(e){return e?e.__v_isVNode===!0:!1}function Bt(e,n){return e.type===n.type&&e.key===n.key}const Xo="__vInternal",hp=({key:e})=>e!=null?e:null,Bo=({ref:e,ref_key:n,ref_for:t})=>e!=null?Is(e)||Es(e)||as(e)?{i:Js,r:e,k:n,f:!!t}:e:null;function s(e,n=null,t=null,o=0,l=null,a=e===G?0:1,c=!1,i=!1){const p={__v_isVNode:!0,__v_skip:!0,type:e,props:n,key:n&&hp(n),ref:n&&Bo(n),scopeId:zo,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:a,patchFlag:o,dynamicProps:l,dynamicChildren:null,appContext:null};return i?(Hr(p,t),a&128&&e.normalize(p)):t&&(p.shapeFlag|=Is(t)?8:16),Wt>0&&!c&&ke&&(p.patchFlag>0||a&6)&&p.patchFlag!==32&&ke.push(p),p}const M=G8;function G8(e,n=null,t=null,o=0,l=null,a=!1){if((!e||e===w8)&&(e=un),ot(e)){const i=Tn(e,n,!0);return t&&Hr(i,t),Wt>0&&!a&&ke&&(i.shapeFlag&6?ke[ke.indexOf(e)]=i:ke.push(i)),i.patchFlag|=-2,i}if(nd(e)&&(e=e.__vccOpts),n){n=Ds(n);let{class:i,style:p}=n;i&&!Is(i)&&(n.class=Ss(i)),Ns(p)&&(Ki(p)&&!ts(p)&&(p=re({},p)),n.style=zs(p))}const c=Is(e)?1:np(e)?128:W8(e)?64:Ns(e)?4:as(e)?2:0;return s(e,n,t,o,l,c,a,!0)}function Ds(e){return e?Ki(e)||Xo in e?re({},e):e:null}function Tn(e,n,t=!1){const{props:o,ref:l,patchFlag:a,children:c}=e,i=n?cs(o||{},n):o;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:i,key:i&&hp(i),ref:n&&n.ref?t&&l?ts(l)?l.concat(Bo(n)):[l,Bo(n)]:Bo(n):l,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:c,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:n&&e.type!==G?a===-1?16:a|16:a,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Tn(e.ssContent),ssFallback:e.ssFallback&&Tn(e.ssFallback),el:e.el,anchor:e.anchor}}function r(e=" ",n=0){return M(qr,null,e,n)}function ys(e="",n=!1){return n?(g(),z(un,null,e)):M(un,null,e)}function Ne(e){return e==null||typeof e=="boolean"?M(un):ts(e)?M(G,null,e.slice()):typeof e=="object"?en(e):M(qr,null,String(e))}function en(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Tn(e)}function Hr(e,n){let t=0;const{shapeFlag:o}=e;if(n==null)n=null;else if(ts(n))t=16;else if(typeof n=="object")if(o&65){const l=n.default;l&&(l._c&&(l._d=!1),Hr(e,l()),l._c&&(l._d=!0));return}else{t=32;const l=n._;!l&&!(Xo in n)?n._ctx=Js:l===3&&Js&&(Js.slots._===1?n._=1:(n._=2,e.patchFlag|=1024))}else as(n)?(n={default:n,_ctx:Js},t=32):(n=String(n),o&64?(t=16,n=[r(n)]):t=8);e.children=n,e.shapeFlag|=t}function cs(...e){const n={};for(let t=0;t<e.length;t++){const o=e[t];for(const l in o)if(l==="class")n.class!==o.class&&(n.class=Ss([n.class,o.class]));else if(l==="style")n.style=zs([n.style,o.style]);else if(Ro(l)){const a=n[l],c=o[l];c&&a!==c&&!(ts(a)&&a.includes(c))&&(n[l]=a?[].concat(a,c):c)}else l!==""&&(n[l]=o[l])}return n}function he(e,n,t,o=null){xe(e,n,7,[t,o])}const Z8=Ap();let X8=0;function J8(e,n,t){const o=e.type,l=(n?n.appContext:e.appContext)||Z8,a={uid:X8++,vnode:e,type:o,parent:n,appContext:l,root:null,next:null,subTree:null,effect:null,update:null,scope:new $i(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:n?n.provides:Object.create(l.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:up(o,l),emitsOptions:ep(o,l),emit:null,emitted:null,propsDefaults:Ps,inheritAttrs:o.inheritAttrs,ctx:Ps,data:Ps,props:Ps,attrs:Ps,slots:Ps,refs:Ps,setupState:Ps,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return a.ctx={_:a},a.root=n?n.root:a,a.emit=i8.bind(null,a),e.ce&&e.ce(a),a}let Ks=null;const Mn=()=>Ks||Js,lt=e=>{Ks=e,e.scope.on()},Fn=()=>{Ks&&Ks.scope.off(),Ks=null};function Cp(e){return e.vnode.shapeFlag&4}let Vt=!1;function Q8(e,n=!1){Vt=n;const{props:t,children:o}=e.vnode,l=Cp(e);O8(e,t,l,n),L8(e,o);const a=l?sd(e,n):void 0;return Vt=!1,a}function sd(e,n){const t=e.type;e.accessCache=Object.create(null),e.proxy=Wo(new Proxy(e.ctx,F8));const{setup:o}=t;if(o){const l=e.setupContext=o.length>1?Dp(e):null;lt(e),it();const a=ln(o,e,0,[e.props,l]);if(pt(),Fn(),xi(a)){if(a.then(Fn,Fn),n)return a.then(c=>{Ia(e,c,n)}).catch(c=>{Vo(c,e,0)});e.asyncDep=a}else Ia(e,a,n)}else gp(e,n)}function Ia(e,n,t){as(n)?e.type.__ssrInlineRender?e.ssrRender=n:e.render=n:Ns(n)&&(e.setupState=Yi(n)),gp(e,t)}let Ra;function gp(e,n,t){const o=e.type;if(!e.render){if(!n&&Ra&&!o.render){const l=o.template||Rr(e).template;if(l){const{isCustomElement:a,compilerOptions:c}=e.appContext.config,{delimiters:i,compilerOptions:p}=o,y=re(re({isCustomElement:a,delimiters:i},c),p);o.render=Ra(l,y)}}e.render=o.render||Pe}lt(e),it(),P8(e),pt(),Fn()}function ed(e){return new Proxy(e.attrs,{get(n,t){return Be(e,"get","$attrs"),n[t]}})}function Dp(e){const n=o=>{e.exposed=o||{}};let t;return{get attrs(){return t||(t=ed(e))},slots:e.slots,emit:e.emit,expose:n}}function Jo(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(Yi(Wo(e.exposed)),{get(n,t){if(t in n)return n[t];if(t in wo)return wo[t](e)}}))}function Hl(e,n=!0){return as(e)?e.displayName||e.name:e.name||n&&e.__name}function nd(e){return as(e)&&"__vccOpts"in e}const k=(e,n)=>t8(e,n,Vt);function td(){return od().slots}function od(){const e=Mn();return e.setupContext||(e.setupContext=Dp(e))}function fe(e,n,t){const o=arguments.length;return o===2?Ns(n)&&!ts(n)?ot(n)?M(e,null,[n]):M(e,n):M(e,null,n):(o>3?t=Array.prototype.slice.call(arguments,2):o===3&&ot(t)&&(t=[t]),M(e,n,t))}const ld="3.2.41",rd="http://www.w3.org/2000/svg",gn=typeof document<"u"?document:null,Ua=gn&&gn.createElement("template"),ad={insert:(e,n,t)=>{n.insertBefore(e,t||null)},remove:e=>{const n=e.parentNode;n&&n.removeChild(e)},createElement:(e,n,t,o)=>{const l=n?gn.createElementNS(rd,e):gn.createElement(e,t?{is:t}:void 0);return e==="select"&&o&&o.multiple!=null&&l.setAttribute("multiple",o.multiple),l},createText:e=>gn.createTextNode(e),createComment:e=>gn.createComment(e),setText:(e,n)=>{e.nodeValue=n},setElementText:(e,n)=>{e.textContent=n},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>gn.querySelector(e),setScopeId(e,n){e.setAttribute(n,"")},insertStaticContent(e,n,t,o,l,a){const c=t?t.previousSibling:n.lastChild;if(l&&(l===a||l.nextSibling))for(;n.insertBefore(l.cloneNode(!0),t),!(l===a||!(l=l.nextSibling)););else{Ua.innerHTML=o?`<svg>${e}</svg>`:e;const i=Ua.content;if(o){const p=i.firstChild;for(;p.firstChild;)i.appendChild(p.firstChild);i.removeChild(p)}n.insertBefore(i,t)}return[c?c.nextSibling:n.firstChild,t?t.previousSibling:n.lastChild]}};function cd(e,n,t){const o=e._vtc;o&&(n=(n?[n,...o]:[...o]).join(" ")),n==null?e.removeAttribute("class"):t?e.setAttribute("class",n):e.className=n}function id(e,n,t){const o=e.style,l=Is(t);if(t&&!l){for(const a in t)Wl(o,a,t[a]);if(n&&!Is(n))for(const a in n)t[a]==null&&Wl(o,a,"")}else{const a=o.display;l?n!==t&&(o.cssText=t):n&&e.removeAttribute("style"),"_vod"in e&&(o.display=a)}}const ja=/\s*!important$/;function Wl(e,n,t){if(ts(t))t.forEach(o=>Wl(e,n,o));else if(t==null&&(t=""),n.startsWith("--"))e.setProperty(n,t);else{const o=pd(e,n);ja.test(t)?e.setProperty(On(o),t.replace(ja,""),"important"):e[o]=t}}const qa=["Webkit","Moz","ms"],il={};function pd(e,n){const t=il[n];if(t)return t;let o=je(n);if(o!=="filter"&&o in e)return il[n]=o;o=qo(o);for(let l=0;l<qa.length;l++){const a=qa[l]+o;if(a in e)return il[n]=a}return n}const Ha="http://www.w3.org/1999/xlink";function yd(e,n,t,o,l){if(o&&n.startsWith("xlink:"))t==null?e.removeAttributeNS(Ha,n.slice(6,n.length)):e.setAttributeNS(Ha,n,t);else{const a=iu(n);t==null||a&&!ki(t)?e.removeAttribute(n):e.setAttribute(n,a?"":t)}}function ud(e,n,t,o,l,a,c){if(n==="innerHTML"||n==="textContent"){o&&c(o,l,a),e[n]=t==null?"":t;return}if(n==="value"&&e.tagName!=="PROGRESS"&&!e.tagName.includes("-")){e._value=t;const p=t==null?"":t;(e.value!==p||e.tagName==="OPTION")&&(e.value=p),t==null&&e.removeAttribute(n);return}let i=!1;if(t===""||t==null){const p=typeof e[n];p==="boolean"?t=ki(t):t==null&&p==="string"?(t="",i=!0):p==="number"&&(t=0,i=!0)}try{e[n]=t}catch{}i&&e.removeAttribute(n)}function Hn(e,n,t,o){e.addEventListener(n,t,o)}function dd(e,n,t,o){e.removeEventListener(n,t,o)}function fd(e,n,t,o,l=null){const a=e._vei||(e._vei={}),c=a[n];if(o&&c)c.value=o;else{const[i,p]=md(n);if(o){const y=a[n]=hd(o,l);Hn(e,i,y,p)}else c&&(dd(e,i,c,p),a[n]=void 0)}}const Wa=/(?:Once|Passive|Capture)$/;function md(e){let n;if(Wa.test(e)){n={};let o;for(;o=e.match(Wa);)e=e.slice(0,e.length-o[0].length),n[o[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):On(e.slice(2)),n]}let pl=0;const Ad=Promise.resolve(),Bd=()=>pl||(Ad.then(()=>pl=0),pl=Date.now());function hd(e,n){const t=o=>{if(!o._vts)o._vts=Date.now();else if(o._vts<=t.attached)return;xe(Cd(o,t.value),n,5,[o])};return t.value=e,t.attached=Bd(),t}function Cd(e,n){if(ts(n)){const t=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{t.call(e),e._stopped=!0},n.map(o=>l=>!l._stopped&&o&&o(l))}else return n}const Va=/^on[a-z]/,gd=(e,n,t,o,l=!1,a,c,i,p)=>{n==="class"?cd(e,o,l):n==="style"?id(e,t,o):Ro(n)?Dr(n)||fd(e,n,t,o,c):(n[0]==="."?(n=n.slice(1),!0):n[0]==="^"?(n=n.slice(1),!1):Dd(e,n,o,l))?ud(e,n,o,a,c,i,p):(n==="true-value"?e._trueValue=o:n==="false-value"&&(e._falseValue=o),yd(e,n,o,l))};function Dd(e,n,t,o){return o?!!(n==="innerHTML"||n==="textContent"||n in e&&Va.test(n)&&as(t)):n==="spellcheck"||n==="draggable"||n==="translate"||n==="form"||n==="list"&&e.tagName==="INPUT"||n==="type"&&e.tagName==="TEXTAREA"||Va.test(n)&&Is(t)?!1:n in e}const Ka=e=>{const n=e.props["onUpdate:modelValue"]||!1;return ts(n)?t=>Gn(n,t):n};function vd(e){e.target.composing=!0}function za(e){const n=e.target;n.composing&&(n.composing=!1,n.dispatchEvent(new Event("input")))}const _d={created(e,{modifiers:{lazy:n,trim:t,number:o}},l){e._assign=Ka(l);const a=o||l.props&&l.props.type==="number";Hn(e,n?"change":"input",c=>{if(c.target.composing)return;let i=e.value;t&&(i=i.trim()),a&&(i=Sl(i)),e._assign(i)}),t&&Hn(e,"change",()=>{e.value=e.value.trim()}),n||(Hn(e,"compositionstart",vd),Hn(e,"compositionend",za),Hn(e,"change",za))},mounted(e,{value:n}){e.value=n==null?"":n},beforeUpdate(e,{value:n,modifiers:{lazy:t,trim:o,number:l}},a){if(e._assign=Ka(a),e.composing||document.activeElement===e&&e.type!=="range"&&(t||o&&e.value.trim()===n||(l||e.type==="number")&&Sl(e.value)===n))return;const c=n==null?"":n;e.value!==c&&(e.value=c)}},bd={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},Ya=(e,n)=>t=>{if(!("key"in t))return;const o=On(t.key);if(n.some(l=>l===o||bd[l]===o))return e(t)},vp={beforeMount(e,{value:n},{transition:t}){e._vod=e.style.display==="none"?"":e.style.display,t&&n?t.beforeEnter(e):ht(e,n)},mounted(e,{value:n},{transition:t}){t&&n&&t.enter(e)},updated(e,{value:n,oldValue:t},{transition:o}){!n!=!t&&(o?n?(o.beforeEnter(e),ht(e,!0),o.enter(e)):o.leave(e,()=>{ht(e,!1)}):ht(e,n))},beforeUnmount(e,{value:n}){ht(e,n)}};function ht(e,n){e.style.display=n?e._vod:"none"}const Ed=re({patchProp:gd},ad);let Ga;function wd(){return Ga||(Ga=j8(Ed))}const kd=(...e)=>{const n=wd().createApp(...e),{mount:t}=n;return n.mount=o=>{const l=Fd(o);if(!l)return;const a=n._component;!as(a)&&!a.render&&!a.template&&(a.template=l.innerHTML),l.innerHTML="";const c=t(l,!1,l instanceof SVGElement);return l instanceof Element&&(l.removeAttribute("v-cloak"),l.setAttribute("data-v-app","")),c},n};function Fd(e){return Is(e)?document.querySelector(e):e}var Za;const Te=typeof window<"u",Pd=e=>typeof e<"u",xd=Object.prototype.toString,Fo=e=>typeof e=="function",Sd=e=>typeof e=="number",_p=e=>typeof e=="string",Vl=e=>xd.call(e)==="[object Object]",Kl=()=>+Date.now(),Pn=()=>{};Te&&((Za=window==null?void 0:window.navigator)==null?void 0:Za.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function Gs(e){return typeof e=="function"?e():v(e)}function Td(e,n){function t(...o){e(()=>n.apply(this,o),{fn:n,thisArg:this,args:o})}return t}const bp=e=>e();function $d(e=bp){const n=W(!0);function t(){n.value=!1}function o(){n.value=!0}return{isActive:n,pause:t,resume:o,eventFilter:(...a)=>{n.value&&e(...a)}}}function Od(e){return e}function Md(e,n){var t;if(typeof e=="number")return e+n;const o=((t=e.match(/^-?[0-9]+\.?[0-9]*/))==null?void 0:t[0])||"",l=e.slice(o.length),a=parseFloat(o)+n;return Number.isNaN(a)?e:a+l}function Nd(e,n){let t,o,l;const a=W(!0),c=()=>{a.value=!0,l()};us(e,c,{flush:"sync"});const i=Fo(n)?n:n.get,p=Fo(n)?void 0:n.set,y=Gi((u,d)=>(o=u,l=d,{get(){return a.value&&(t=i(),a.value=!1),o(),t},set(f){p==null||p(f)}}));return Object.isExtensible(y)&&(y.trigger=c),y}function He(e){return Oi()?(Mi(e),!0):!1}function Ld(e){if(!Es(e))return Os(e);const n=new Proxy({},{get(t,o,l){return v(Reflect.get(e.value,o,l))},set(t,o,l){return Es(e.value[o])&&!Es(l)?e.value[o].value=l:e.value[o]=l,!0},deleteProperty(t,o){return Reflect.deleteProperty(e.value,o)},has(t,o){return Reflect.has(e.value,o)},ownKeys(){return Object.keys(e.value)},getOwnPropertyDescriptor(){return{enumerable:!0,configurable:!0}}});return Os(n)}function Ep(e){return typeof e=="function"?k(e):W(e)}var Id=Object.defineProperty,Rd=Object.defineProperties,Ud=Object.getOwnPropertyDescriptors,Xa=Object.getOwnPropertySymbols,jd=Object.prototype.hasOwnProperty,qd=Object.prototype.propertyIsEnumerable,Ja=(e,n,t)=>n in e?Id(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,Hd=(e,n)=>{for(var t in n||(n={}))jd.call(n,t)&&Ja(e,t,n[t]);if(Xa)for(var t of Xa(n))qd.call(n,t)&&Ja(e,t,n[t]);return e},Wd=(e,n)=>Rd(e,Ud(n));function Vd(e){if(!Es(e))return Qu(e);const n=Array.isArray(e.value)?new Array(e.value.length):{};for(const t in e.value)n[t]=Gi(()=>({get(){return e.value[t]},set(o){if(Array.isArray(e.value)){const l=[...e.value];l[t]=o,e.value=l}else{const l=Wd(Hd({},e.value),{[t]:o});Object.setPrototypeOf(l,e.value),e.value=l}}}));return n}function Wr(e,n=!0){Mn()?ut(e):n?e():Xs(e)}function Kd(e){Mn()&&Zo(e)}function zd(e,n=1e3,t={}){const{immediate:o=!0,immediateCallback:l=!1}=t;let a=null;const c=W(!1);function i(){a&&(clearInterval(a),a=null)}function p(){c.value=!1,i()}function y(){v(n)<=0||(c.value=!0,l&&e(),i(),a=setInterval(e,Gs(n)))}if(o&&Te&&y(),Es(n)){const u=us(n,()=>{c.value&&Te&&y()});He(u)}return He(p),{isActive:c,pause:p,resume:y}}function Yd(e,n,t={}){const{immediate:o=!0}=t,l=W(!1);let a=null;function c(){a&&(clearTimeout(a),a=null)}function i(){l.value=!1,c()}function p(...y){c(),l.value=!0,a=setTimeout(()=>{l.value=!1,a=null,e(...y)},Gs(n))}return o&&(l.value=!0,Te&&p()),He(i),{isPending:l,start:p,stop:i}}function wp(e=!1,n={}){const{truthyValue:t=!0,falsyValue:o=!1}=n,l=Es(e),a=W(e);function c(i){if(arguments.length)return a.value=i,a.value;{const p=Gs(t);return a.value=a.value===p?Gs(o):p,a.value}}return l?c:[a,c]}var Qa=Object.getOwnPropertySymbols,Gd=Object.prototype.hasOwnProperty,Zd=Object.prototype.propertyIsEnumerable,Xd=(e,n)=>{var t={};for(var o in e)Gd.call(e,o)&&n.indexOf(o)<0&&(t[o]=e[o]);if(e!=null&&Qa)for(var o of Qa(e))n.indexOf(o)<0&&Zd.call(e,o)&&(t[o]=e[o]);return t};function Jd(e,n,t={}){const o=t,{eventFilter:l=bp}=o,a=Xd(o,["eventFilter"]);return us(e,Td(l,n),a)}var Qd=Object.defineProperty,sf=Object.defineProperties,ef=Object.getOwnPropertyDescriptors,Po=Object.getOwnPropertySymbols,kp=Object.prototype.hasOwnProperty,Fp=Object.prototype.propertyIsEnumerable,sc=(e,n,t)=>n in e?Qd(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,nf=(e,n)=>{for(var t in n||(n={}))kp.call(n,t)&&sc(e,t,n[t]);if(Po)for(var t of Po(n))Fp.call(n,t)&&sc(e,t,n[t]);return e},tf=(e,n)=>sf(e,ef(n)),of=(e,n)=>{var t={};for(var o in e)kp.call(e,o)&&n.indexOf(o)<0&&(t[o]=e[o]);if(e!=null&&Po)for(var o of Po(e))n.indexOf(o)<0&&Fp.call(e,o)&&(t[o]=e[o]);return t};function lf(e,n,t={}){const o=t,{eventFilter:l}=o,a=of(o,["eventFilter"]),{eventFilter:c,pause:i,resume:p,isActive:y}=$d(l);return{stop:Jd(e,n,tf(nf({},a),{eventFilter:c})),pause:i,resume:p,isActive:y}}var Pp="usehead",ec="head:count",yl="data-head-attrs",xp="data-meta-body",rf=(e,n)=>{const t=o=>{if(o.props.renderPriority)return o.props.renderPriority;switch(o.tag){case"base":return-1;case"meta":return o.props.charset?-2:o.props["http-equiv"]==="content-security-policy"?0:10;default:return 10}};return t(e)-t(n)},af=e=>{if(!["meta","base","script","link","title"].includes(e.tag))return!1;const{props:n,tag:t}=e;if(t==="base"||t==="title")return t;if(t==="link"&&n.rel==="canonical")return"canonical";if(n.charset)return"charset";const o=["key","id","name","property","http-equiv"];for(const l of o){let a;if(typeof n.getAttribute=="function"&&n.hasAttribute(l)?a=n.getAttribute(l):a=n[l],a!==void 0)return`${t}-${l}-${a}`}return!1};function zl(e){const n=Gs(e);return!e||!n?n:Array.isArray(n)?n.map(zl):typeof n=="object"?Object.fromEntries(Object.entries(n).map(([t,o])=>t==="titleTemplate"?[t,v(o)]:[t,zl(o)])):n}function cf(e){return{...e,input:zl(e.input)}}function nc(e,n){if(e instanceof HTMLElement&&n instanceof HTMLElement){const t=n.getAttribute("nonce");if(t&&!e.getAttribute("nonce")){const o=n.cloneNode(!0);return o.setAttribute("nonce",""),o.nonce=t,t===e.nonce&&e.isEqualNode(o)}}return e.isEqualNode(n)}var tc=(e,n)=>{const t=e.getAttribute(yl);if(t)for(const l of t.split(","))l in n||e.removeAttribute(l);const o=[];for(const l in n){const a=n[l];a!=null&&(a===!1?e.removeAttribute(l):e.setAttribute(l,a),o.push(l))}o.length?e.setAttribute(yl,o.join(",")):e.removeAttribute(yl)},pf=(e,n,t)=>{const o=t.createElement(e);for(const l of Object.keys(n))if(l==="body"&&n.body===!0)o.setAttribute(xp,"true");else{const a=n[l];if(l==="renderPriority"||l==="key"||a===!1)continue;l==="children"||l==="textContent"?o.textContent=a:l==="innerHTML"?o.innerHTML=a:o.setAttribute(l,a)}return o},yf=(e=window.document,n,t)=>{var o,l;const a=e.head,c=e.body;let i=a.querySelector(`meta[name="${ec}"]`);const p=c.querySelectorAll(`[${xp}]`),y=i?Number(i.getAttribute("content")):0,u=[],d=[];if(p)for(let A=0;A<p.length;A++)p[A]&&((o=p[A].tagName)==null?void 0:o.toLowerCase())===n&&d.push(p[A]);if(i)for(let A=0,m=i.previousElementSibling;A<y;A++,m=(m==null?void 0:m.previousElementSibling)||null)((l=m==null?void 0:m.tagName)==null?void 0:l.toLowerCase())===n&&u.push(m);else i=e.createElement("meta"),i.setAttribute("name",ec),i.setAttribute("content","0"),a.append(i);let f=t.map(A=>{var m;return{element:pf(A.tag,A.props,e),body:(m=A.props.body)!=null?m:!1}});f=f.filter(A=>{for(let m=0;m<u.length;m++){const C=u[m];if(nc(C,A.element))return u.splice(m,1),!1}for(let m=0;m<d.length;m++){const C=d[m];if(nc(C,A.element))return d.splice(m,1),!1}return!0}),d.forEach(A=>{var m;return(m=A.parentNode)==null?void 0:m.removeChild(A)}),u.forEach(A=>{var m;return(m=A.parentNode)==null?void 0:m.removeChild(A)}),f.forEach(A=>{A.body===!0?c.insertAdjacentElement("beforeend",A.element):a.insertBefore(A.element,i)}),i.setAttribute("content",`${y-u.length+f.filter(A=>!A.body).length}`)},uf=({domCtx:e,document:n,previousTags:t})=>{n||(n=window.document),e.title!==void 0&&(n.title=e.title),tc(n.documentElement,e.htmlAttrs),tc(n.body,e.bodyAttrs);const o=new Set([...Object.keys(e.actualTags),...t]);for(const l of o)yf(n,l,e.actualTags[l]||[]);t.clear(),Object.keys(e.actualTags).forEach(l=>t.add(l))},df=()=>{const e=q(Pp);if(!e)throw new Error("You may forget to apply app.use(head)");return e},ff=["title","meta","link","base","style","script","noscript","htmlAttrs","bodyAttrs"],mf=(e,n)=>e==null?"":typeof e=="function"?e(n):e.replace("%s",n!=null?n:""),Af=e=>{const n=[],t=Object.keys(e),o=l=>(l.hid&&(l.key=l.hid,delete l.hid),l.vmid&&(l.key=l.vmid,delete l.vmid),l);for(const l of t)if(e[l]!=null)switch(l){case"title":n.push({tag:l,props:{textContent:e[l]}});break;case"titleTemplate":break;case"base":n.push({tag:l,props:{key:"default",...e[l]}});break;default:if(ff.includes(l)){const a=e[l];Array.isArray(a)?a.forEach(c=>{const i=o(c);n.push({tag:l,props:i})}):a&&n.push({tag:l,props:o(a)})}break}return n},Bf=e=>{let n=[];const t=new Set;let o=0;const l=[],a=[];e&&n.push({input:e});let c=null,i;const p={install(y){y.config.globalProperties.$head=p,y.provide(Pp,p)},hookBeforeDomUpdate:l,hookTagsResolved:a,get headTags(){const y=[],u={},d=n.map(cf),f=d.map(m=>m.input.titleTemplate).reverse().find(m=>m!=null);d.forEach((m,C)=>{Af(m.input).forEach((_,E)=>{var b;if(_._position=C*1e4+E,_._options&&delete _._options,m.options&&(_._options=m.options),f&&_.tag==="title"&&(_.props.textContent=mf(f,_.props.textContent)),!((b=_._options)!=null&&b.raw)){for(const N in _.props)N.startsWith("on")&&(console.warn("[@vueuse/head] Warning, you must use `useHeadRaw` to set event listeners. See https://github.com/vueuse/head/pull/118",_),delete _.props[N]);_.props.innerHTML&&(console.warn("[@vueuse/head] Warning, you must use `useHeadRaw` to use `innerHTML`",_),delete _.props.innerHTML)}const F=af(_);F?u[F]=_:y.push(_)})}),y.push(...Object.values(u));const A=y.sort((m,C)=>m._position-C._position);return p.hookTagsResolved.forEach(m=>m(A)),A},addHeadObjs(y,u){const d={input:y,options:u,id:o++};return n.push(d),()=>{n=n.filter(f=>f.id!==d.id)}},removeHeadObjs(y){n=n.filter(u=>u.input!==y)},updateDOM:(y,u)=>{i={title:void 0,htmlAttrs:{},bodyAttrs:{},actualTags:{}};for(const f of p.headTags.sort(rf)){if(f.tag==="title"){i.title=f.props.textContent;continue}if(f.tag==="htmlAttrs"||f.tag==="bodyAttrs"){Object.assign(i[f.tag],f.props);continue}i.actualTags[f.tag]=i.actualTags[f.tag]||[],i.actualTags[f.tag].push(f)}const d=()=>{c=null;for(const f in p.hookBeforeDomUpdate)if(p.hookBeforeDomUpdate[f](i.actualTags)===!1)return;uf({domCtx:i,document:y,previousTags:t})};if(u){d();return}c=c||Xs(()=>d())}};return p},hf=typeof window<"u",Cf=(e,n={})=>{const t=df(),o=t.addHeadObjs(e,n);hf&&(yt(()=>{t.updateDOM()}),Go(()=>{o(),t.updateDOM()}))},gf=e=>{Cf(e)};const xt=Symbol("v-click-clicks"),Dn=Symbol("v-click-clicks-elements"),Yl=Symbol("v-click-clicks-order-map"),St=Symbol("v-click-clicks-disabled"),Sp=Symbol("slidev-slide-scale"),Y=Symbol("slidev-slidev-context"),Df=Symbol("slidev-route"),vf=Symbol("slidev-slide-context"),hn="slidev-vclick-target",ul="slidev-vclick-hidden",_f="slidev-vclick-fade",dl="slidev-vclick-hidden-explicitly",Ct="slidev-vclick-current",yo="slidev-vclick-prior";function bf(e){return e=e||[],Array.isArray(e)?e:[e]}function Gl(e,n){if(!e)return!1;const t=e.indexOf(n);return t>=0?(e.splice(t,1),!0):!1}function Ef(...e){let n,t,o;e.length===1?(n=0,o=1,[t]=e):[n,t,o=1]=e;const l=[];let a=n;for(;a<t;)l.push(a),a+=o||1;return l}function wf(e){return e!=null}function kf(e,n){return Object.fromEntries(Object.entries(e).map(([t,o])=>n(t,o)).filter(wf))}const kt={theme:"seriph",title:"TypeScript in frontend projects",titleTemplate:"%s - Slidev",addons:[],remoteAssets:!1,monaco:"dev",download:!1,info:`<h2>TypeScript in frontend projects</h2>
`,highlighter:"shiki",lineNumbers:!0,colorSchema:"auto",routerMode:"history",aspectRatio:1.7777777777777777,canvasWidth:980,exportFilename:"slides.pdf",selectable:!1,themeConfig:{},fonts:{sans:['"PT Serif"',"ui-sans-serif","system-ui","-apple-system","BlinkMacSystemFont",'"Segoe UI"',"Roboto",'"Helvetica Neue"',"Arial",'"Noto Sans"',"sans-serif",'"Apple Color Emoji"','"Segoe UI Emoji"','"Segoe UI Symbol"','"Noto Color Emoji"'],serif:['"PT Serif"',"ui-serif","Georgia","Cambria",'"Times New Roman"',"Times","serif"],mono:['"PT Mono"',"ui-monospace","SFMono-Regular","Menlo","Monaco","Consolas",'"Liberation Mono"','"Courier New"',"monospace"],webfonts:["PT Serif","PT Mono"],provider:"google",local:[],italic:!0,weights:["400","700"]},favicon:"favicon.ico",drawings:{enabled:!0,persist:!1,presenterOnly:!1,syncAll:!0},plantUmlServer:"https://www.plantuml.com/plantuml",codeCopy:!0,record:"dev",css:"windicss",background:"https://source.unsplash.com/collection/94734566/1920x1080",class:"text-center"},vs=kt;var Ei;const rn=(Ei=vs.aspectRatio)!=null?Ei:16/9;var wi;const an=(wi=vs.canvasWidth)!=null?wi:980,Vr=Math.ceil(an/rn),Tp=k(()=>kf(vs.themeConfig||{},(e,n)=>[`--slidev-theme-${e}`,n]));function ge(e,n,t){Object.defineProperty(e,n,{value:t,writable:!0,enumerable:!1})}const Nn=Os({page:0,clicks:0});let Ff=[],Pf=[];ge(Nn,"$syncUp",!0);ge(Nn,"$syncDown",!0);ge(Nn,"$paused",!1);ge(Nn,"$onSet",e=>Ff.push(e));ge(Nn,"$onPatch",e=>Pf.push(e));ge(Nn,"$patch",async()=>!1);function $p(e,n,t=!1){const o=[];let l=!1,a=!1,c,i;const p=Os(n);function y(A){o.push(A)}function u(A,m){clearTimeout(c),l=!0,p[A]=m,c=setTimeout(()=>l=!1,0)}function d(A){l||(clearTimeout(i),a=!0,Object.entries(A).forEach(([m,C])=>{p[m]=C}),i=setTimeout(()=>a=!1,0))}function f(A){let m;t?t&&window.addEventListener("storage",D=>{D&&D.key===A&&D.newValue&&d(JSON.parse(D.newValue))}):(m=new BroadcastChannel(A),m.addEventListener("message",D=>d(D.data)));function C(){!t&&m&&!a?m.postMessage(_s(p)):t&&!a&&window.localStorage.setItem(A,JSON.stringify(p)),l||o.forEach(D=>D(p))}if(us(p,C,{deep:!0}),t){const D=window.localStorage.getItem(A);D&&d(JSON.parse(D))}}return{init:f,onPatch:y,patch:u,state:p}}const{init:xf,onPatch:Sf,patch:oc,state:fl}=$p(Nn,{page:1,clicks:0}),Ln=Os({});let Tf=[],$f=[];ge(Ln,"$syncUp",!0);ge(Ln,"$syncDown",!0);ge(Ln,"$paused",!1);ge(Ln,"$onSet",e=>Tf.push(e));ge(Ln,"$onPatch",e=>$f.push(e));ge(Ln,"$patch",async()=>!1);const{init:Of,onPatch:Mf,patch:Op,state:xo}=$p(Ln,{},!1),Nf="modulepreload",Lf=function(e){return"/typescript-improvements-slides/"+e},lc={},$n=function(n,t,o){if(!t||t.length===0)return n();const l=document.getElementsByTagName("link");return Promise.all(t.map(a=>{if(a=Lf(a),a in lc)return;lc[a]=!0;const c=a.endsWith(".css"),i=c?'[rel="stylesheet"]':"";if(!!o)for(let u=l.length-1;u>=0;u--){const d=l[u];if(d.href===a&&(!c||d.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${a}"]${i}`))return;const y=document.createElement("link");if(y.rel=c?"stylesheet":Nf,c||(y.as="script",y.crossOrigin=""),y.href=a,document.head.appendChild(y),c)return new Promise((u,d)=>{y.addEventListener("load",u),y.addEventListener("error",()=>d(new Error(`Unable to preload CSS for ${a}`)))})})).then(()=>n())};function Fe(e){var n;const t=Gs(e);return(n=t==null?void 0:t.$el)!=null?n:t}const ee=Te?window:void 0,Mp=Te?window.document:void 0,If=Te?window.navigator:void 0;function is(...e){let n,t,o,l;if(_p(e[0])?([t,o,l]=e,n=ee):[n,t,o,l]=e,!n)return Pn;let a=Pn;const c=us(()=>Fe(n),p=>{a(),p&&(p.addEventListener(t,o,l),a=()=>{p.removeEventListener(t,o,l),a=Pn})},{immediate:!0,flush:"post"}),i=()=>{c(),a()};return He(i),i}function Rf(e,n,t={}){const{window:o=ee,ignore:l,capture:a=!0,detectIframe:c=!1}=t;if(!o)return;const i=W(!0);let p;const y=A=>{o.clearTimeout(p);const m=Fe(e);!m||m===A.target||A.composedPath().includes(m)||!i.value||n(A)},u=A=>l&&l.some(m=>{const C=Fe(m);return C&&(A.target===C||A.composedPath().includes(C))}),d=[is(o,"click",y,{passive:!0,capture:a}),is(o,"pointerdown",A=>{const m=Fe(e);i.value=!!m&&!A.composedPath().includes(m)&&!u(A)},{passive:!0}),is(o,"pointerup",A=>{if(A.button===0){const m=A.composedPath();A.composedPath=()=>m,p=o.setTimeout(()=>y(A),50)}},{passive:!0}),c&&is(o,"blur",A=>{var m;const C=Fe(e);((m=document.activeElement)==null?void 0:m.tagName)==="IFRAME"&&!(C!=null&&C.contains(document.activeElement))&&n(A)})].filter(Boolean);return()=>d.forEach(A=>A())}const Uf=e=>typeof e=="function"?e:typeof e=="string"?n=>n.key===e:Array.isArray(e)?n=>e.includes(n.key):()=>!0;function jf(...e){let n,t,o={};e.length===3?(n=e[0],t=e[1],o=e[2]):e.length===2?typeof e[1]=="object"?(n=!0,t=e[0],o=e[1]):(n=e[0],t=e[1]):(n=!0,t=e[0]);const{target:l=ee,eventName:a="keydown",passive:c=!1}=o,i=Uf(n);return is(l,a,y=>{i(y)&&t(y)},c)}function qf(e={}){const{window:n=ee}=e,t=Nd(()=>null,()=>n==null?void 0:n.document.activeElement);return n&&(is(n,"blur",t.trigger,!0),is(n,"focus",t.trigger,!0)),t}function so(e,n=!1){const t=W(),o=()=>t.value=Boolean(e());return o(),Wr(o,n),t}function Wn(e,n={}){const{window:t=ee}=n,o=so(()=>t&&"matchMedia"in t&&typeof t.matchMedia=="function");let l;const a=W(!1),c=()=>{!l||("removeEventListener"in l?l.removeEventListener("change",i):l.removeListener(i))},i=()=>{!o.value||(c(),l=t.matchMedia(Ep(e).value),a.value=l.matches,"addEventListener"in l?l.addEventListener("change",i):l.addListener(i))};return yt(i),He(()=>c()),a}const Hf={sm:640,md:768,lg:1024,xl:1280,"2xl":1536};var Wf=Object.defineProperty,rc=Object.getOwnPropertySymbols,Vf=Object.prototype.hasOwnProperty,Kf=Object.prototype.propertyIsEnumerable,ac=(e,n,t)=>n in e?Wf(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,zf=(e,n)=>{for(var t in n||(n={}))Vf.call(n,t)&&ac(e,t,n[t]);if(rc)for(var t of rc(n))Kf.call(n,t)&&ac(e,t,n[t]);return e};function Yf(e,n={}){function t(i,p){let y=e[i];return p!=null&&(y=Md(y,p)),typeof y=="number"&&(y=`${y}px`),y}const{window:o=ee}=n;function l(i){return o?o.matchMedia(i).matches:!1}const a=i=>Wn(`(min-width: ${t(i)})`,n),c=Object.keys(e).reduce((i,p)=>(Object.defineProperty(i,p,{get:()=>a(p),enumerable:!0,configurable:!0}),i),{});return zf({greater(i){return Wn(`(min-width: ${t(i,.1)})`,n)},greaterOrEqual:a,smaller(i){return Wn(`(max-width: ${t(i,-.1)})`,n)},smallerOrEqual(i){return Wn(`(max-width: ${t(i)})`,n)},between(i,p){return Wn(`(min-width: ${t(i)}) and (max-width: ${t(p,-.1)})`,n)},isGreater(i){return l(`(min-width: ${t(i,.1)})`)},isGreaterOrEqual(i){return l(`(min-width: ${t(i)})`)},isSmaller(i){return l(`(max-width: ${t(i,-.1)})`)},isSmallerOrEqual(i){return l(`(max-width: ${t(i)})`)},isInBetween(i,p){return l(`(min-width: ${t(i)}) and (max-width: ${t(p,-.1)})`)}},c)}function Gf(e={}){const{navigator:n=If,read:t=!1,source:o,copiedDuring:l=1500}=e,a=["copy","cut"],c=so(()=>n&&"clipboard"in n),i=W(""),p=W(!1),y=Yd(()=>p.value=!1,l);function u(){n.clipboard.readText().then(f=>{i.value=f})}if(c.value&&t)for(const f of a)is(f,u);async function d(f=Gs(o)){c.value&&f!=null&&(await n.clipboard.writeText(f),i.value=f,p.value=!0,y.start())}return{isSupported:c,text:i,copied:p,copy:d}}function Zf(e){return JSON.parse(JSON.stringify(e))}const Zl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Xl="__vueuse_ssr_handlers__";Zl[Xl]=Zl[Xl]||{};const Xf=Zl[Xl];function Jf(e,n){return Xf[e]||n}function Qf(e){return e==null?"any":e instanceof Set?"set":e instanceof Map?"map":e instanceof Date?"date":typeof e=="boolean"?"boolean":typeof e=="string"?"string":typeof e=="object"||Array.isArray(e)?"object":Number.isNaN(e)?"any":"number"}var s5=Object.defineProperty,cc=Object.getOwnPropertySymbols,e5=Object.prototype.hasOwnProperty,n5=Object.prototype.propertyIsEnumerable,ic=(e,n,t)=>n in e?s5(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,pc=(e,n)=>{for(var t in n||(n={}))e5.call(n,t)&&ic(e,t,n[t]);if(cc)for(var t of cc(n))n5.call(n,t)&&ic(e,t,n[t]);return e};const t5={boolean:{read:e=>e==="true",write:e=>String(e)},object:{read:e=>JSON.parse(e),write:e=>JSON.stringify(e)},number:{read:e=>Number.parseFloat(e),write:e=>String(e)},any:{read:e=>e,write:e=>String(e)},string:{read:e=>e,write:e=>String(e)},map:{read:e=>new Map(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e.entries()))},set:{read:e=>new Set(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e))},date:{read:e=>new Date(e),write:e=>e.toISOString()}};function Oe(e,n,t,o={}){var l;const{flush:a="pre",deep:c=!0,listenToStorageChanges:i=!0,writeDefaults:p=!0,mergeDefaults:y=!1,shallow:u,window:d=ee,eventFilter:f,onError:A=U=>{console.error(U)}}=o,m=(u?qe:W)(n);if(!t)try{t=Jf("getDefaultStorage",()=>{var U;return(U=ee)==null?void 0:U.localStorage})()}catch(U){A(U)}if(!t)return m;const C=Gs(n),D=Qf(C),_=(l=o.serializer)!=null?l:t5[D],{pause:E,resume:b}=lf(m,()=>F(m.value),{flush:a,deep:c,eventFilter:f});return d&&i&&is(d,"storage",L),L(),m;function F(U){try{U==null?t.removeItem(e):t.setItem(e,_.write(U))}catch(Q){A(Q)}}function N(U){if(!(U&&U.key!==e)){E();try{const Q=U?U.newValue:t.getItem(e);if(Q==null)return p&&C!==null&&t.setItem(e,_.write(C)),C;if(!U&&y){const ps=_.read(Q);return Fo(y)?y(ps,C):D==="object"&&!Array.isArray(ps)?pc(pc({},C),ps):ps}else return typeof Q!="string"?Q:_.read(Q)}catch(Q){A(Q)}finally{b()}}}function L(U){U&&U.key!==e||(m.value=N(U))}}function o5(e){return Wn("(prefers-color-scheme: dark)",e)}var l5=Object.defineProperty,r5=Object.defineProperties,a5=Object.getOwnPropertyDescriptors,yc=Object.getOwnPropertySymbols,c5=Object.prototype.hasOwnProperty,i5=Object.prototype.propertyIsEnumerable,uc=(e,n,t)=>n in e?l5(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,p5=(e,n)=>{for(var t in n||(n={}))c5.call(n,t)&&uc(e,t,n[t]);if(yc)for(var t of yc(n))i5.call(n,t)&&uc(e,t,n[t]);return e},y5=(e,n)=>r5(e,a5(n));function j1(e,n={}){var t,o,l;const a=(t=n.draggingElement)!=null?t:ee,c=(o=n.handle)!=null?o:e,i=W((l=Gs(n.initialValue))!=null?l:{x:0,y:0}),p=W(),y=m=>n.pointerTypes?n.pointerTypes.includes(m.pointerType):!0,u=m=>{Gs(n.preventDefault)&&m.preventDefault(),Gs(n.stopPropagation)&&m.stopPropagation()},d=m=>{var C;if(!y(m)||Gs(n.exact)&&m.target!==Gs(e))return;const D=Gs(e).getBoundingClientRect(),_={x:m.pageX-D.left,y:m.pageY-D.top};((C=n.onStart)==null?void 0:C.call(n,_,m))!==!1&&(p.value=_,u(m))},f=m=>{var C;!y(m)||!p.value||(i.value={x:m.pageX-p.value.x,y:m.pageY-p.value.y},(C=n.onMove)==null||C.call(n,i.value,m),u(m))},A=m=>{var C;!y(m)||!p.value||(p.value=void 0,(C=n.onEnd)==null||C.call(n,i.value,m),u(m))};return Te&&(is(c,"pointerdown",d,!0),is(a,"pointermove",f,!0),is(a,"pointerup",A,!0)),y5(p5({},Vd(i)),{position:i,isDragging:k(()=>!!p.value),style:k(()=>`left:${i.value.x}px;top:${i.value.y}px;`)})}var dc=Object.getOwnPropertySymbols,u5=Object.prototype.hasOwnProperty,d5=Object.prototype.propertyIsEnumerable,f5=(e,n)=>{var t={};for(var o in e)u5.call(e,o)&&n.indexOf(o)<0&&(t[o]=e[o]);if(e!=null&&dc)for(var o of dc(e))n.indexOf(o)<0&&d5.call(e,o)&&(t[o]=e[o]);return t};function m5(e,n,t={}){const o=t,{window:l=ee}=o,a=f5(o,["window"]);let c;const i=so(()=>l&&"ResizeObserver"in l),p=()=>{c&&(c.disconnect(),c=void 0)},y=us(()=>Fe(e),d=>{p(),i.value&&l&&d&&(c=new ResizeObserver(n),c.observe(d,a))},{immediate:!0,flush:"post"}),u=()=>{p(),y()};return He(u),{isSupported:i,stop:u}}function A5(e,n={}){const{immediate:t=!0,window:o=ee}=n,l=W(!1);let a=null;function c(){!l.value||!o||(e(),a=o.requestAnimationFrame(c))}function i(){!l.value&&o&&(l.value=!0,c())}function p(){l.value=!1,a!=null&&o&&(o.cancelAnimationFrame(a),a=null)}return t&&i(),He(p),{isActive:l,pause:p,resume:i}}function B5(e,n={width:0,height:0},t={}){const{box:o="content-box"}=t,l=W(n.width),a=W(n.height);return m5(e,([c])=>{const i=o==="border-box"?c.borderBoxSize:o==="content-box"?c.contentBoxSize:c.devicePixelContentBoxSize;i?(l.value=i.reduce((p,{inlineSize:y})=>p+y,0),a.value=i.reduce((p,{blockSize:y})=>p+y,0)):(l.value=c.contentRect.width,a.value=c.contentRect.height)},t),us(()=>Fe(e),c=>{l.value=c?n.width:0,a.value=c?n.height:0}),{width:l,height:a}}const fc=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]];function h5(e,n={}){const{document:t=Mp,autoExit:o=!1}=n,l=e||(t==null?void 0:t.querySelector("html")),a=W(!1);let c=fc[0];const i=so(()=>{if(t){for(const C of fc)if(C[1]in t)return c=C,!0}else return!1;return!1}),[p,y,u,,d]=c;async function f(){!i.value||(t!=null&&t[u]&&await t[y](),a.value=!1)}async function A(){if(!i.value)return;await f();const C=Fe(l);C&&(await C[p](),a.value=!0)}async function m(){a.value?await f():await A()}return t&&is(t,d,()=>{a.value=!!(t!=null&&t[u])},!1),o&&He(f),{isSupported:i,isFullscreen:a,enter:A,exit:f,toggle:m}}function C5(e,n,t={}){const{root:o,rootMargin:l="0px",threshold:a=.1,window:c=ee}=t,i=so(()=>c&&"IntersectionObserver"in c);let p=Pn;const y=i.value?us(()=>({el:Fe(e),root:Fe(o)}),({el:d,root:f})=>{if(p(),!d)return;const A=new IntersectionObserver(n,{root:f,rootMargin:l,threshold:a});A.observe(d),p=()=>{A.disconnect(),p=Pn}},{immediate:!0,flush:"post"}):Pn,u=()=>{p(),y()};return He(u),{isSupported:i,stop:u}}const g5={ctrl:"control",command:"meta",cmd:"meta",option:"alt",up:"arrowup",down:"arrowdown",left:"arrowleft",right:"arrowright"};function D5(e={}){const{reactive:n=!1,target:t=ee,aliasMap:o=g5,passive:l=!0,onEventFired:a=Pn}=e,c=Os(new Set),i={toJSON(){return{}},current:c},p=n?Os(i):i,y=new Set,u=new Set;function d(C,D){C in p&&(n?p[C]=D:p[C].value=D)}function f(){for(const C of u)d(C,!1)}function A(C,D){var _,E;const b=(_=C.key)==null?void 0:_.toLowerCase(),N=[(E=C.code)==null?void 0:E.toLowerCase(),b].filter(Boolean);b&&(D?c.add(b):c.delete(b));for(const L of N)u.add(L),d(L,D);b==="meta"&&!D?(y.forEach(L=>{c.delete(L),d(L,!1)}),y.clear()):typeof C.getModifierState=="function"&&C.getModifierState("Meta")&&D&&[...c,...N].forEach(L=>y.add(L))}is(t,"keydown",C=>(A(C,!0),a(C)),{passive:l}),is(t,"keyup",C=>(A(C,!1),a(C)),{passive:l}),is("blur",f,{passive:!0}),is("focus",f,{passive:!0});const m=new Proxy(p,{get(C,D,_){if(typeof D!="string")return Reflect.get(C,D,_);if(D=D.toLowerCase(),D in o&&(D=o[D]),!(D in p))if(/[+_-]/.test(D)){const b=D.split(/[+_-]/g).map(F=>F.trim());p[D]=k(()=>b.every(F=>v(m[F])))}else p[D]=W(!1);const E=Reflect.get(C,D,_);return n?v(E):E}});return m}function q1(e={}){const{type:n="page",touch:t=!0,resetOnTouchEnds:o=!1,initialValue:l={x:0,y:0},window:a=ee,eventFilter:c}=e,i=W(l.x),p=W(l.y),y=W(null),u=C=>{n==="page"?(i.value=C.pageX,p.value=C.pageY):n==="client"&&(i.value=C.clientX,p.value=C.clientY),y.value="mouse"},d=()=>{i.value=l.x,p.value=l.y},f=C=>{if(C.touches.length>0){const D=C.touches[0];n==="page"?(i.value=D.pageX,p.value=D.pageY):n==="client"&&(i.value=D.clientX,p.value=D.clientY),y.value="touch"}},A=C=>c===void 0?u(C):c(()=>u(C),{}),m=C=>c===void 0?f(C):c(()=>f(C),{});return a&&(is(a,"mousemove",A,{passive:!0}),is(a,"dragover",A,{passive:!0}),t&&(is(a,"touchstart",m,{passive:!0}),is(a,"touchmove",m,{passive:!0}),o&&is(a,"touchend",d,{passive:!0}))),{x:i,y:p,sourceType:y}}var Ye;(function(e){e.UP="UP",e.RIGHT="RIGHT",e.DOWN="DOWN",e.LEFT="LEFT",e.NONE="NONE"})(Ye||(Ye={}));function v5(e,n={}){const t=Ep(e),{threshold:o=50,onSwipe:l,onSwipeEnd:a,onSwipeStart:c}=n,i=Os({x:0,y:0}),p=(L,U)=>{i.x=L,i.y=U},y=Os({x:0,y:0}),u=(L,U)=>{y.x=L,y.y=U},d=k(()=>i.x-y.x),f=k(()=>i.y-y.y),{max:A,abs:m}=Math,C=k(()=>A(m(d.value),m(f.value))>=o),D=W(!1),_=W(!1),E=k(()=>C.value?m(d.value)>m(f.value)?d.value>0?Ye.LEFT:Ye.RIGHT:f.value>0?Ye.UP:Ye.DOWN:Ye.NONE),b=L=>n.pointerTypes?n.pointerTypes.includes(L.pointerType):!0,F=[is(e,"pointerdown",L=>{var U,Q;if(!b(L))return;_.value=!0,(Q=(U=t.value)==null?void 0:U.style)==null||Q.setProperty("touch-action","none");const ps=L.target;ps==null||ps.setPointerCapture(L.pointerId);const{clientX:ds,clientY:Cs}=L;p(ds,Cs),u(ds,Cs),c==null||c(L)}),is(e,"pointermove",L=>{if(!b(L)||!_.value)return;const{clientX:U,clientY:Q}=L;u(U,Q),!D.value&&C.value&&(D.value=!0),D.value&&(l==null||l(L))}),is(e,"pointerup",L=>{var U,Q;!b(L)||(D.value&&(a==null||a(L,E.value)),_.value=!1,D.value=!1,(Q=(U=t.value)==null?void 0:U.style)==null||Q.setProperty("touch-action","initial"))})],N=()=>F.forEach(L=>L());return{isSwiping:_n(D),direction:_n(E),posStart:_n(i),posEnd:_n(y),distanceX:d,distanceY:f,stop:N}}let _5=0;function H1(e,n={}){const t=W(!1),{document:o=Mp,immediate:l=!0,manual:a=!1,id:c=`vueuse_styletag_${++_5}`}=n,i=W(e);let p=()=>{};const y=()=>{if(!o)return;const d=o.getElementById(c)||o.createElement("style");d.type="text/css",d.id=c,n.media&&(d.media=n.media),o.head.appendChild(d),!t.value&&(p=us(i,f=>{d.innerText=f},{immediate:!0}),t.value=!0)},u=()=>{!o||!t.value||(p(),o.head.removeChild(o.getElementById(c)),t.value=!1)};return l&&!a&&Wr(y),a||He(u),{id:c,css:i,unload:u,load:y,isLoaded:_n(t)}}var b5=Object.defineProperty,mc=Object.getOwnPropertySymbols,E5=Object.prototype.hasOwnProperty,w5=Object.prototype.propertyIsEnumerable,Ac=(e,n,t)=>n in e?b5(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,k5=(e,n)=>{for(var t in n||(n={}))E5.call(n,t)&&Ac(e,t,n[t]);if(mc)for(var t of mc(n))w5.call(n,t)&&Ac(e,t,n[t]);return e};function W1(e={}){const{controls:n=!1,offset:t=0,immediate:o=!0,interval:l="requestAnimationFrame",callback:a}=e,c=W(Kl()+t),i=()=>c.value=Kl()+t,p=a?()=>{i(),a(c.value)}:i,y=l==="requestAnimationFrame"?A5(p,{immediate:o}):zd(p,l,{immediate:o});return n?k5({timestamp:c},y):c}var F5=Object.defineProperty,Bc=Object.getOwnPropertySymbols,P5=Object.prototype.hasOwnProperty,x5=Object.prototype.propertyIsEnumerable,hc=(e,n,t)=>n in e?F5(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,S5=(e,n)=>{for(var t in n||(n={}))P5.call(n,t)&&hc(e,t,n[t]);if(Bc)for(var t of Bc(n))x5.call(n,t)&&hc(e,t,n[t]);return e};const T5={easeInSine:[.12,0,.39,0],easeOutSine:[.61,1,.88,1],easeInOutSine:[.37,0,.63,1],easeInQuad:[.11,0,.5,0],easeOutQuad:[.5,1,.89,1],easeInOutQuad:[.45,0,.55,1],easeInCubic:[.32,0,.67,0],easeOutCubic:[.33,1,.68,1],easeInOutCubic:[.65,0,.35,1],easeInQuart:[.5,0,.75,0],easeOutQuart:[.25,1,.5,1],easeInOutQuart:[.76,0,.24,1],easeInQuint:[.64,0,.78,0],easeOutQuint:[.22,1,.36,1],easeInOutQuint:[.83,0,.17,1],easeInExpo:[.7,0,.84,0],easeOutExpo:[.16,1,.3,1],easeInOutExpo:[.87,0,.13,1],easeInCirc:[.55,0,1,.45],easeOutCirc:[0,.55,.45,1],easeInOutCirc:[.85,0,.15,1],easeInBack:[.36,0,.66,-.56],easeOutBack:[.34,1.56,.64,1],easeInOutBack:[.68,-.6,.32,1.6]};S5({linear:Od},T5);function Re(e,n,t,o={}){var l,a,c;const{clone:i=!1,passive:p=!1,eventName:y,deep:u=!1,defaultValue:d}=o,f=Mn(),A=t||(f==null?void 0:f.emit)||((l=f==null?void 0:f.$emit)==null?void 0:l.bind(f))||((c=(a=f==null?void 0:f.proxy)==null?void 0:a.$emit)==null?void 0:c.bind(f==null?void 0:f.proxy));let m=y;n||(n="modelValue"),m=y||m||`update:${n.toString()}`;const C=_=>i?Fo(i)?i(_):Zf(_):_,D=()=>Pd(e[n])?C(e[n]):d;if(p){const _=D(),E=W(_);return us(()=>e[n],b=>E.value=C(b)),us(E,b=>{(b!==e[n]||u)&&A(m,b)},{deep:u}),E}else return k({get(){return D()},set(_){A(m,_)}})}function V1({window:e=ee}={}){if(!e)return W(!1);const n=W(e.document.hasFocus());return is(e,"blur",()=>{n.value=!1}),is(e,"focus",()=>{n.value=!0}),n}function $5(e={}){const{window:n=ee,initialWidth:t=1/0,initialHeight:o=1/0,listenOrientation:l=!0,includeScrollbar:a=!0}=e,c=W(t),i=W(o),p=()=>{n&&(a?(c.value=n.innerWidth,i.value=n.innerHeight):(c.value=n.document.documentElement.clientWidth,i.value=n.document.documentElement.clientHeight))};return p(),Wr(p),is("resize",p,{passive:!0}),l&&is("orientationchange",p,{passive:!0}),{width:c,height:i}}/*!
  * vue-router v4.1.5
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const Vn=typeof window<"u";function O5(e){return e.__esModule||e[Symbol.toStringTag]==="Module"}const ks=Object.assign;function ml(e,n){const t={};for(const o in n){const l=n[o];t[o]=$e(l)?l.map(e):e(l)}return t}const Tt=()=>{},$e=Array.isArray,M5=/\/$/,N5=e=>e.replace(M5,"");function Al(e,n,t="/"){let o,l={},a="",c="";const i=n.indexOf("#");let p=n.indexOf("?");return i<p&&i>=0&&(p=-1),p>-1&&(o=n.slice(0,p),a=n.slice(p+1,i>-1?i:n.length),l=e(a)),i>-1&&(o=o||n.slice(0,i),c=n.slice(i,n.length)),o=U5(o!=null?o:n,t),{fullPath:o+(a&&"?")+a+c,path:o,query:l,hash:c}}function L5(e,n){const t=n.query?e(n.query):"";return n.path+(t&&"?")+t+(n.hash||"")}function Cc(e,n){return!n||!e.toLowerCase().startsWith(n.toLowerCase())?e:e.slice(n.length)||"/"}function I5(e,n,t){const o=n.matched.length-1,l=t.matched.length-1;return o>-1&&o===l&&rt(n.matched[o],t.matched[l])&&Np(n.params,t.params)&&e(n.query)===e(t.query)&&n.hash===t.hash}function rt(e,n){return(e.aliasOf||e)===(n.aliasOf||n)}function Np(e,n){if(Object.keys(e).length!==Object.keys(n).length)return!1;for(const t in e)if(!R5(e[t],n[t]))return!1;return!0}function R5(e,n){return $e(e)?gc(e,n):$e(n)?gc(n,e):e===n}function gc(e,n){return $e(n)?e.length===n.length&&e.every((t,o)=>t===n[o]):e.length===1&&e[0]===n}function U5(e,n){if(e.startsWith("/"))return e;if(!e)return n;const t=n.split("/"),o=e.split("/");let l=t.length-1,a,c;for(a=0;a<o.length;a++)if(c=o[a],c!==".")if(c==="..")l>1&&l--;else break;return t.slice(0,l).join("/")+"/"+o.slice(a-(a===o.length?1:0)).join("/")}var Kt;(function(e){e.pop="pop",e.push="push"})(Kt||(Kt={}));var $t;(function(e){e.back="back",e.forward="forward",e.unknown=""})($t||($t={}));function j5(e){if(!e)if(Vn){const n=document.querySelector("base");e=n&&n.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),N5(e)}const q5=/^[^#]+#/;function H5(e,n){return e.replace(q5,"#")+n}function W5(e,n){const t=document.documentElement.getBoundingClientRect(),o=e.getBoundingClientRect();return{behavior:n.behavior,left:o.left-t.left-(n.left||0),top:o.top-t.top-(n.top||0)}}const Qo=()=>({left:window.pageXOffset,top:window.pageYOffset});function V5(e){let n;if("el"in e){const t=e.el,o=typeof t=="string"&&t.startsWith("#"),l=typeof t=="string"?o?document.getElementById(t.slice(1)):document.querySelector(t):t;if(!l)return;n=W5(l,e)}else n=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(n):window.scrollTo(n.left!=null?n.left:window.pageXOffset,n.top!=null?n.top:window.pageYOffset)}function Dc(e,n){return(history.state?history.state.position-n:-1)+e}const Jl=new Map;function K5(e,n){Jl.set(e,n)}function z5(e){const n=Jl.get(e);return Jl.delete(e),n}let Y5=()=>location.protocol+"//"+location.host;function Lp(e,n){const{pathname:t,search:o,hash:l}=n,a=e.indexOf("#");if(a>-1){let i=l.includes(e.slice(a))?e.slice(a).length:1,p=l.slice(i);return p[0]!=="/"&&(p="/"+p),Cc(p,"")}return Cc(t,e)+o+l}function G5(e,n,t,o){let l=[],a=[],c=null;const i=({state:f})=>{const A=Lp(e,location),m=t.value,C=n.value;let D=0;if(f){if(t.value=A,n.value=f,c&&c===m){c=null;return}D=C?f.position-C.position:0}else o(A);l.forEach(_=>{_(t.value,m,{delta:D,type:Kt.pop,direction:D?D>0?$t.forward:$t.back:$t.unknown})})};function p(){c=t.value}function y(f){l.push(f);const A=()=>{const m=l.indexOf(f);m>-1&&l.splice(m,1)};return a.push(A),A}function u(){const{history:f}=window;!f.state||f.replaceState(ks({},f.state,{scroll:Qo()}),"")}function d(){for(const f of a)f();a=[],window.removeEventListener("popstate",i),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",i),window.addEventListener("beforeunload",u),{pauseListeners:p,listen:y,destroy:d}}function vc(e,n,t,o=!1,l=!1){return{back:e,current:n,forward:t,replaced:o,position:window.history.length,scroll:l?Qo():null}}function Z5(e){const{history:n,location:t}=window,o={value:Lp(e,t)},l={value:n.state};l.value||a(o.value,{back:null,current:o.value,forward:null,position:n.length-1,replaced:!0,scroll:null},!0);function a(p,y,u){const d=e.indexOf("#"),f=d>-1?(t.host&&document.querySelector("base")?e:e.slice(d))+p:Y5()+e+p;try{n[u?"replaceState":"pushState"](y,"",f),l.value=y}catch(A){console.error(A),t[u?"replace":"assign"](f)}}function c(p,y){const u=ks({},n.state,vc(l.value.back,p,l.value.forward,!0),y,{position:l.value.position});a(p,u,!0),o.value=p}function i(p,y){const u=ks({},l.value,n.state,{forward:p,scroll:Qo()});a(u.current,u,!0);const d=ks({},vc(o.value,p,null),{position:u.position+1},y);a(p,d,!1),o.value=p}return{location:o,state:l,push:i,replace:c}}function X5(e){e=j5(e);const n=Z5(e),t=G5(e,n.state,n.location,n.replace);function o(a,c=!0){c||t.pauseListeners(),history.go(a)}const l=ks({location:"",base:e,go:o,createHref:H5.bind(null,e)},n,t);return Object.defineProperty(l,"location",{enumerable:!0,get:()=>n.location.value}),Object.defineProperty(l,"state",{enumerable:!0,get:()=>n.state.value}),l}function J5(e){return typeof e=="string"||e&&typeof e=="object"}function Ip(e){return typeof e=="string"||typeof e=="symbol"}const sn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Rp=Symbol("");var _c;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(_c||(_c={}));function at(e,n){return ks(new Error,{type:e,[Rp]:!0},n)}function We(e,n){return e instanceof Error&&Rp in e&&(n==null||!!(e.type&n))}const bc="[^/]+?",Q5={sensitive:!1,strict:!1,start:!0,end:!0},sm=/[.+*?^${}()[\]/\\]/g;function em(e,n){const t=ks({},Q5,n),o=[];let l=t.start?"^":"";const a=[];for(const y of e){const u=y.length?[]:[90];t.strict&&!y.length&&(l+="/");for(let d=0;d<y.length;d++){const f=y[d];let A=40+(t.sensitive?.25:0);if(f.type===0)d||(l+="/"),l+=f.value.replace(sm,"\\$&"),A+=40;else if(f.type===1){const{value:m,repeatable:C,optional:D,regexp:_}=f;a.push({name:m,repeatable:C,optional:D});const E=_||bc;if(E!==bc){A+=10;try{new RegExp(`(${E})`)}catch(F){throw new Error(`Invalid custom RegExp for param "${m}" (${E}): `+F.message)}}let b=C?`((?:${E})(?:/(?:${E}))*)`:`(${E})`;d||(b=D&&y.length<2?`(?:/${b})`:"/"+b),D&&(b+="?"),l+=b,A+=20,D&&(A+=-8),C&&(A+=-20),E===".*"&&(A+=-50)}u.push(A)}o.push(u)}if(t.strict&&t.end){const y=o.length-1;o[y][o[y].length-1]+=.7000000000000001}t.strict||(l+="/?"),t.end?l+="$":t.strict&&(l+="(?:/|$)");const c=new RegExp(l,t.sensitive?"":"i");function i(y){const u=y.match(c),d={};if(!u)return null;for(let f=1;f<u.length;f++){const A=u[f]||"",m=a[f-1];d[m.name]=A&&m.repeatable?A.split("/"):A}return d}function p(y){let u="",d=!1;for(const f of e){(!d||!u.endsWith("/"))&&(u+="/"),d=!1;for(const A of f)if(A.type===0)u+=A.value;else if(A.type===1){const{value:m,repeatable:C,optional:D}=A,_=m in y?y[m]:"";if($e(_)&&!C)throw new Error(`Provided param "${m}" is an array but it is not repeatable (* or + modifiers)`);const E=$e(_)?_.join("/"):_;if(!E)if(D)f.length<2&&(u.endsWith("/")?u=u.slice(0,-1):d=!0);else throw new Error(`Missing required param "${m}"`);u+=E}}return u||"/"}return{re:c,score:o,keys:a,parse:i,stringify:p}}function nm(e,n){let t=0;for(;t<e.length&&t<n.length;){const o=n[t]-e[t];if(o)return o;t++}return e.length<n.length?e.length===1&&e[0]===40+40?-1:1:e.length>n.length?n.length===1&&n[0]===40+40?1:-1:0}function tm(e,n){let t=0;const o=e.score,l=n.score;for(;t<o.length&&t<l.length;){const a=nm(o[t],l[t]);if(a)return a;t++}if(Math.abs(l.length-o.length)===1){if(Ec(o))return 1;if(Ec(l))return-1}return l.length-o.length}function Ec(e){const n=e[e.length-1];return e.length>0&&n[n.length-1]<0}const om={type:0,value:""},lm=/[a-zA-Z0-9_]/;function rm(e){if(!e)return[[]];if(e==="/")return[[om]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function n(A){throw new Error(`ERR (${t})/"${y}": ${A}`)}let t=0,o=t;const l=[];let a;function c(){a&&l.push(a),a=[]}let i=0,p,y="",u="";function d(){!y||(t===0?a.push({type:0,value:y}):t===1||t===2||t===3?(a.length>1&&(p==="*"||p==="+")&&n(`A repeatable param (${y}) must be alone in its segment. eg: '/:ids+.`),a.push({type:1,value:y,regexp:u,repeatable:p==="*"||p==="+",optional:p==="*"||p==="?"})):n("Invalid state to consume buffer"),y="")}function f(){y+=p}for(;i<e.length;){if(p=e[i++],p==="\\"&&t!==2){o=t,t=4;continue}switch(t){case 0:p==="/"?(y&&d(),c()):p===":"?(d(),t=1):f();break;case 4:f(),t=o;break;case 1:p==="("?t=2:lm.test(p)?f():(d(),t=0,p!=="*"&&p!=="?"&&p!=="+"&&i--);break;case 2:p===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+p:t=3:u+=p;break;case 3:d(),t=0,p!=="*"&&p!=="?"&&p!=="+"&&i--,u="";break;default:n("Unknown state");break}}return t===2&&n(`Unfinished custom RegExp for param "${y}"`),d(),c(),l}function am(e,n,t){const o=em(rm(e.path),t),l=ks(o,{record:e,parent:n,children:[],alias:[]});return n&&!l.record.aliasOf==!n.record.aliasOf&&n.children.push(l),l}function cm(e,n){const t=[],o=new Map;n=Fc({strict:!1,end:!0,sensitive:!1},n);function l(u){return o.get(u)}function a(u,d,f){const A=!f,m=im(u);m.aliasOf=f&&f.record;const C=Fc(n,u),D=[m];if("alias"in u){const b=typeof u.alias=="string"?[u.alias]:u.alias;for(const F of b)D.push(ks({},m,{components:f?f.record.components:m.components,path:F,aliasOf:f?f.record:m}))}let _,E;for(const b of D){const{path:F}=b;if(d&&F[0]!=="/"){const N=d.record.path,L=N[N.length-1]==="/"?"":"/";b.path=d.record.path+(F&&L+F)}if(_=am(b,d,C),f?f.alias.push(_):(E=E||_,E!==_&&E.alias.push(_),A&&u.name&&!kc(_)&&c(u.name)),m.children){const N=m.children;for(let L=0;L<N.length;L++)a(N[L],_,f&&f.children[L])}f=f||_,p(_)}return E?()=>{c(E)}:Tt}function c(u){if(Ip(u)){const d=o.get(u);d&&(o.delete(u),t.splice(t.indexOf(d),1),d.children.forEach(c),d.alias.forEach(c))}else{const d=t.indexOf(u);d>-1&&(t.splice(d,1),u.record.name&&o.delete(u.record.name),u.children.forEach(c),u.alias.forEach(c))}}function i(){return t}function p(u){let d=0;for(;d<t.length&&tm(u,t[d])>=0&&(u.record.path!==t[d].record.path||!Up(u,t[d]));)d++;t.splice(d,0,u),u.record.name&&!kc(u)&&o.set(u.record.name,u)}function y(u,d){let f,A={},m,C;if("name"in u&&u.name){if(f=o.get(u.name),!f)throw at(1,{location:u});C=f.record.name,A=ks(wc(d.params,f.keys.filter(E=>!E.optional).map(E=>E.name)),u.params&&wc(u.params,f.keys.map(E=>E.name))),m=f.stringify(A)}else if("path"in u)m=u.path,f=t.find(E=>E.re.test(m)),f&&(A=f.parse(m),C=f.record.name);else{if(f=d.name?o.get(d.name):t.find(E=>E.re.test(d.path)),!f)throw at(1,{location:u,currentLocation:d});C=f.record.name,A=ks({},d.params,u.params),m=f.stringify(A)}const D=[];let _=f;for(;_;)D.unshift(_.record),_=_.parent;return{name:C,path:m,params:A,matched:D,meta:ym(D)}}return e.forEach(u=>a(u)),{addRoute:a,resolve:y,removeRoute:c,getRoutes:i,getRecordMatcher:l}}function wc(e,n){const t={};for(const o of n)o in e&&(t[o]=e[o]);return t}function im(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:pm(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}function pm(e){const n={},t=e.props||!1;if("component"in e)n.default=t;else for(const o in e.components)n[o]=typeof t=="boolean"?t:t[o];return n}function kc(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function ym(e){return e.reduce((n,t)=>ks(n,t.meta),{})}function Fc(e,n){const t={};for(const o in e)t[o]=o in n?n[o]:e[o];return t}function Up(e,n){return n.children.some(t=>t===e||Up(e,t))}const jp=/#/g,um=/&/g,dm=/\//g,fm=/=/g,mm=/\?/g,qp=/\+/g,Am=/%5B/g,Bm=/%5D/g,Hp=/%5E/g,hm=/%60/g,Wp=/%7B/g,Cm=/%7C/g,Vp=/%7D/g,gm=/%20/g;function Kr(e){return encodeURI(""+e).replace(Cm,"|").replace(Am,"[").replace(Bm,"]")}function Dm(e){return Kr(e).replace(Wp,"{").replace(Vp,"}").replace(Hp,"^")}function Ql(e){return Kr(e).replace(qp,"%2B").replace(gm,"+").replace(jp,"%23").replace(um,"%26").replace(hm,"`").replace(Wp,"{").replace(Vp,"}").replace(Hp,"^")}function vm(e){return Ql(e).replace(fm,"%3D")}function _m(e){return Kr(e).replace(jp,"%23").replace(mm,"%3F")}function bm(e){return e==null?"":_m(e).replace(dm,"%2F")}function So(e){try{return decodeURIComponent(""+e)}catch{}return""+e}function Em(e){const n={};if(e===""||e==="?")return n;const o=(e[0]==="?"?e.slice(1):e).split("&");for(let l=0;l<o.length;++l){const a=o[l].replace(qp," "),c=a.indexOf("="),i=So(c<0?a:a.slice(0,c)),p=c<0?null:So(a.slice(c+1));if(i in n){let y=n[i];$e(y)||(y=n[i]=[y]),y.push(p)}else n[i]=p}return n}function Pc(e){let n="";for(let t in e){const o=e[t];if(t=vm(t),o==null){o!==void 0&&(n+=(n.length?"&":"")+t);continue}($e(o)?o.map(a=>a&&Ql(a)):[o&&Ql(o)]).forEach(a=>{a!==void 0&&(n+=(n.length?"&":"")+t,a!=null&&(n+="="+a))})}return n}function wm(e){const n={};for(const t in e){const o=e[t];o!==void 0&&(n[t]=$e(o)?o.map(l=>l==null?null:""+l):o==null?o:""+o)}return n}const km=Symbol(""),xc=Symbol(""),zr=Symbol(""),Kp=Symbol(""),sr=Symbol("");function gt(){let e=[];function n(o){return e.push(o),()=>{const l=e.indexOf(o);l>-1&&e.splice(l,1)}}function t(){e=[]}return{add:n,list:()=>e,reset:t}}function nn(e,n,t,o,l){const a=o&&(o.enterCallbacks[l]=o.enterCallbacks[l]||[]);return()=>new Promise((c,i)=>{const p=d=>{d===!1?i(at(4,{from:t,to:n})):d instanceof Error?i(d):J5(d)?i(at(2,{from:n,to:d})):(a&&o.enterCallbacks[l]===a&&typeof d=="function"&&a.push(d),c())},y=e.call(o&&o.instances[l],n,t,p);let u=Promise.resolve(y);e.length<3&&(u=u.then(p)),u.catch(d=>i(d))})}function Bl(e,n,t,o){const l=[];for(const a of e)for(const c in a.components){let i=a.components[c];if(!(n!=="beforeRouteEnter"&&!a.instances[c]))if(Fm(i)){const y=(i.__vccOpts||i)[n];y&&l.push(nn(y,t,o,a,c))}else{let p=i();l.push(()=>p.then(y=>{if(!y)return Promise.reject(new Error(`Couldn't resolve component "${c}" at "${a.path}"`));const u=O5(y)?y.default:y;a.components[c]=u;const f=(u.__vccOpts||u)[n];return f&&nn(f,t,o,a,c)()}))}}return l}function Fm(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function Sc(e){const n=q(zr),t=q(Kp),o=k(()=>n.resolve(v(e.to))),l=k(()=>{const{matched:p}=o.value,{length:y}=p,u=p[y-1],d=t.matched;if(!u||!d.length)return-1;const f=d.findIndex(rt.bind(null,u));if(f>-1)return f;const A=Tc(p[y-2]);return y>1&&Tc(u)===A&&d[d.length-1].path!==A?d.findIndex(rt.bind(null,p[y-2])):f}),a=k(()=>l.value>-1&&Tm(t.params,o.value.params)),c=k(()=>l.value>-1&&l.value===t.matched.length-1&&Np(t.params,o.value.params));function i(p={}){return Sm(p)?n[v(e.replace)?"replace":"push"](v(e.to)).catch(Tt):Promise.resolve()}return{route:o,href:k(()=>o.value.href),isActive:a,isExactActive:c,navigate:i}}const Pm=hs({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Sc,setup(e,{slots:n}){const t=Os(Sc(e)),{options:o}=q(zr),l=k(()=>({[$c(e.activeClass,o.linkActiveClass,"router-link-active")]:t.isActive,[$c(e.exactActiveClass,o.linkExactActiveClass,"router-link-exact-active")]:t.isExactActive}));return()=>{const a=n.default&&n.default(t);return e.custom?a:fe("a",{"aria-current":t.isExactActive?e.ariaCurrentValue:null,href:t.href,onClick:t.navigate,class:l.value},a)}}}),xm=Pm;function Sm(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const n=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(n))return}return e.preventDefault&&e.preventDefault(),!0}}function Tm(e,n){for(const t in n){const o=n[t],l=e[t];if(typeof o=="string"){if(o!==l)return!1}else if(!$e(l)||l.length!==o.length||o.some((a,c)=>a!==l[c]))return!1}return!0}function Tc(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const $c=(e,n,t)=>e!=null?e:n!=null?n:t,$m=hs({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:n,slots:t}){const o=q(sr),l=k(()=>e.route||o.value),a=q(xc,0),c=k(()=>{let y=v(a);const{matched:u}=l.value;let d;for(;(d=u[y])&&!d.components;)y++;return y}),i=k(()=>l.value.matched[c.value]);de(xc,k(()=>c.value+1)),de(km,i),de(sr,l);const p=W();return us(()=>[p.value,i.value,e.name],([y,u,d],[f,A,m])=>{u&&(u.instances[d]=y,A&&A!==u&&y&&y===f&&(u.leaveGuards.size||(u.leaveGuards=A.leaveGuards),u.updateGuards.size||(u.updateGuards=A.updateGuards))),y&&u&&(!A||!rt(u,A)||!f)&&(u.enterCallbacks[d]||[]).forEach(C=>C(y))},{flush:"post"}),()=>{const y=l.value,u=e.name,d=i.value,f=d&&d.components[u];if(!f)return Oc(t.default,{Component:f,route:y});const A=d.props[u],m=A?A===!0?y.params:typeof A=="function"?A(y):A:null,D=fe(f,ks({},m,n,{onVnodeUnmounted:_=>{_.component.isUnmounted&&(d.instances[u]=null)},ref:p}));return Oc(t.default,{Component:D,route:y})||D}}});function Oc(e,n){if(!e)return null;const t=e(n);return t.length===1?t[0]:t}const Om=$m;function Mm(e){const n=cm(e.routes,e),t=e.parseQuery||Em,o=e.stringifyQuery||Pc,l=e.history,a=gt(),c=gt(),i=gt(),p=qe(sn);let y=sn;Vn&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=ml.bind(null,x=>""+x),d=ml.bind(null,bm),f=ml.bind(null,So);function A(x,V){let H,J;return Ip(x)?(H=n.getRecordMatcher(x),J=V):J=x,n.addRoute(J,H)}function m(x){const V=n.getRecordMatcher(x);V&&n.removeRoute(V)}function C(){return n.getRoutes().map(x=>x.record)}function D(x){return!!n.getRecordMatcher(x)}function _(x,V){if(V=ks({},V||p.value),typeof x=="string"){const B=Al(t,x,V.path),h=n.resolve({path:B.path},V),w=l.createHref(B.fullPath);return ks(B,h,{params:f(h.params),hash:So(B.hash),redirectedFrom:void 0,href:w})}let H;if("path"in x)H=ks({},x,{path:Al(t,x.path,V.path).path});else{const B=ks({},x.params);for(const h in B)B[h]==null&&delete B[h];H=ks({},x,{params:d(x.params)}),V.params=d(V.params)}const J=n.resolve(H,V),ms=x.hash||"";J.params=u(f(J.params));const gs=L5(o,ks({},x,{hash:Dm(ms),path:J.path})),ls=l.createHref(gs);return ks({fullPath:gs,hash:ms,query:o===Pc?wm(x.query):x.query||{}},J,{redirectedFrom:void 0,href:ls})}function E(x){return typeof x=="string"?Al(t,x,p.value.path):ks({},x)}function b(x,V){if(y!==x)return at(8,{from:V,to:x})}function F(x){return U(x)}function N(x){return F(ks(E(x),{replace:!0}))}function L(x){const V=x.matched[x.matched.length-1];if(V&&V.redirect){const{redirect:H}=V;let J=typeof H=="function"?H(x):H;return typeof J=="string"&&(J=J.includes("?")||J.includes("#")?J=E(J):{path:J},J.params={}),ks({query:x.query,hash:x.hash,params:"path"in J?{}:x.params},J)}}function U(x,V){const H=y=_(x),J=p.value,ms=x.state,gs=x.force,ls=x.replace===!0,B=L(H);if(B)return U(ks(E(B),{state:typeof B=="object"?ks({},ms,B.state):ms,force:gs,replace:ls}),V||H);const h=H;h.redirectedFrom=V;let w;return!gs&&I5(o,J,H)&&(w=at(16,{to:h,from:J}),ws(J,J,!0,!1)),(w?Promise.resolve(w):ps(h,J)).catch(P=>We(P)?We(P,2)?P:fs(P):Z(P,h,J)).then(P=>{if(P){if(We(P,2))return U(ks({replace:ls},E(P.to),{state:typeof P.to=="object"?ks({},ms,P.to.state):ms,force:gs}),V||h)}else P=Cs(h,J,!0,ls,ms);return ds(h,J,P),P})}function Q(x,V){const H=b(x,V);return H?Promise.reject(H):Promise.resolve()}function ps(x,V){let H;const[J,ms,gs]=Nm(x,V);H=Bl(J.reverse(),"beforeRouteLeave",x,V);for(const B of J)B.leaveGuards.forEach(h=>{H.push(nn(h,x,V))});const ls=Q.bind(null,x,V);return H.push(ls),Un(H).then(()=>{H=[];for(const B of a.list())H.push(nn(B,x,V));return H.push(ls),Un(H)}).then(()=>{H=Bl(ms,"beforeRouteUpdate",x,V);for(const B of ms)B.updateGuards.forEach(h=>{H.push(nn(h,x,V))});return H.push(ls),Un(H)}).then(()=>{H=[];for(const B of x.matched)if(B.beforeEnter&&!V.matched.includes(B))if($e(B.beforeEnter))for(const h of B.beforeEnter)H.push(nn(h,x,V));else H.push(nn(B.beforeEnter,x,V));return H.push(ls),Un(H)}).then(()=>(x.matched.forEach(B=>B.enterCallbacks={}),H=Bl(gs,"beforeRouteEnter",x,V),H.push(ls),Un(H))).then(()=>{H=[];for(const B of c.list())H.push(nn(B,x,V));return H.push(ls),Un(H)}).catch(B=>We(B,8)?B:Promise.reject(B))}function ds(x,V,H){for(const J of i.list())J(x,V,H)}function Cs(x,V,H,J,ms){const gs=b(x,V);if(gs)return gs;const ls=V===sn,B=Vn?history.state:{};H&&(J||ls?l.replace(x.fullPath,ks({scroll:ls&&B&&B.scroll},ms)):l.push(x.fullPath,ms)),p.value=x,ws(x,V,H,ls),fs()}let Vs;function qs(){Vs||(Vs=l.listen((x,V,H)=>{if(!In.listening)return;const J=_(x),ms=L(J);if(ms){U(ks(ms,{replace:!0}),J).catch(Tt);return}y=J;const gs=p.value;Vn&&K5(Dc(gs.fullPath,H.delta),Qo()),ps(J,gs).catch(ls=>We(ls,12)?ls:We(ls,2)?(U(ls.to,J).then(B=>{We(B,20)&&!H.delta&&H.type===Kt.pop&&l.go(-1,!1)}).catch(Tt),Promise.reject()):(H.delta&&l.go(-H.delta,!1),Z(ls,J,gs))).then(ls=>{ls=ls||Cs(J,gs,!1),ls&&(H.delta&&!We(ls,8)?l.go(-H.delta,!1):H.type===Kt.pop&&We(ls,20)&&l.go(-1,!1)),ds(J,gs,ls)}).catch(Tt)}))}let Ls=gt(),Ts=gt(),$s;function Z(x,V,H){fs(x);const J=Ts.list();return J.length?J.forEach(ms=>ms(x,V,H)):console.error(x),Promise.reject(x)}function ns(){return $s&&p.value!==sn?Promise.resolve():new Promise((x,V)=>{Ls.add([x,V])})}function fs(x){return $s||($s=!x,qs(),Ls.list().forEach(([V,H])=>x?H(x):V()),Ls.reset()),x}function ws(x,V,H,J){const{scrollBehavior:ms}=e;if(!Vn||!ms)return Promise.resolve();const gs=!H&&z5(Dc(x.fullPath,0))||(J||!H)&&history.state&&history.state.scroll||null;return Xs().then(()=>ms(x,V,gs)).then(ls=>ls&&V5(ls)).catch(ls=>Z(ls,x,V))}const ne=x=>l.go(x);let Rs;const Je=new Set,In={currentRoute:p,listening:!0,addRoute:A,removeRoute:m,hasRoute:D,getRoutes:C,resolve:_,options:e,push:F,replace:N,go:ne,back:()=>ne(-1),forward:()=>ne(1),beforeEach:a.add,beforeResolve:c.add,afterEach:i.add,onError:Ts.add,isReady:ns,install(x){const V=this;x.component("RouterLink",xm),x.component("RouterView",Om),x.config.globalProperties.$router=V,Object.defineProperty(x.config.globalProperties,"$route",{enumerable:!0,get:()=>v(p)}),Vn&&!Rs&&p.value===sn&&(Rs=!0,F(l.location).catch(ms=>{}));const H={};for(const ms in sn)H[ms]=k(()=>p.value[ms]);x.provide(zr,V),x.provide(Kp,Os(H)),x.provide(sr,p);const J=x.unmount;Je.add(x),x.unmount=function(){Je.delete(x),Je.size<1&&(y=sn,Vs&&Vs(),Vs=null,p.value=sn,Rs=!1,$s=!1),J()}}};return In}function Un(e){return e.reduce((n,t)=>n.then(()=>t()),Promise.resolve())}function Nm(e,n){const t=[],o=[],l=[],a=Math.max(n.matched.length,e.matched.length);for(let c=0;c<a;c++){const i=n.matched[c];i&&(e.matched.find(y=>rt(y,i))?o.push(i):t.push(i));const p=e.matched[c];p&&(n.matched.find(y=>rt(y,p))||l.push(p))}return[t,o,l]}const hl=W(!1),Ot=W(!1),Kn=W(!1),Lm=W(!0),er=Yf({xs:460,...Hf}),xn=$5(),zp=D5(),Im=k(()=>xn.height.value-xn.width.value/rn>180),Yp=h5(Te?document.body:null),Qn=qf(),Rm=k(()=>{var e,n;return["INPUT","TEXTAREA"].includes(((e=Qn.value)==null?void 0:e.tagName)||"")||((n=Qn.value)==null?void 0:n.classList.contains("CodeMirror-code"))}),Um=k(()=>{var e;return["BUTTON","A"].includes(((e=Qn.value)==null?void 0:e.tagName)||"")});Oe("slidev-camera","default");Oe("slidev-mic","default");const ho=Oe("slidev-scale",0),oe=Oe("slidev-show-overview",!1),Cl=Oe("slidev-presenter-cursor",!0),Mc=Oe("slidev-show-editor",!1);Oe("slidev-editor-width",Te?window.innerWidth*.4:100);const Gp=wp(oe);function Nc(e,n,t,o=l=>l){return e*o(.5-n*(.5-t))}function jm(e){return[-e[0],-e[1]]}function Ee(e,n){return[e[0]+n[0],e[1]+n[1]]}function Ce(e,n){return[e[0]-n[0],e[1]-n[1]]}function be(e,n){return[e[0]*n,e[1]*n]}function qm(e,n){return[e[0]/n,e[1]/n]}function Dt(e){return[e[1],-e[0]]}function Lc(e,n){return e[0]*n[0]+e[1]*n[1]}function Hm(e,n){return e[0]===n[0]&&e[1]===n[1]}function Wm(e){return Math.hypot(e[0],e[1])}function Vm(e){return e[0]*e[0]+e[1]*e[1]}function Ic(e,n){return Vm(Ce(e,n))}function Zp(e){return qm(e,Wm(e))}function Km(e,n){return Math.hypot(e[1]-n[1],e[0]-n[0])}function vt(e,n,t){let o=Math.sin(t),l=Math.cos(t),a=e[0]-n[0],c=e[1]-n[1],i=a*l-c*o,p=a*o+c*l;return[i+n[0],p+n[1]]}function nr(e,n,t){return Ee(e,be(Ce(n,e),t))}function Rc(e,n,t){return Ee(e,be(n,t))}var{min:jn,PI:zm}=Math,Uc=.275,_t=zm+1e-4;function Ym(e,n={}){let{size:t=16,smoothing:o=.5,thinning:l=.5,simulatePressure:a=!0,easing:c=Z=>Z,start:i={},end:p={},last:y=!1}=n,{cap:u=!0,easing:d=Z=>Z*(2-Z)}=i,{cap:f=!0,easing:A=Z=>--Z*Z*Z+1}=p;if(e.length===0||t<=0)return[];let m=e[e.length-1].runningLength,C=i.taper===!1?0:i.taper===!0?Math.max(t,m):i.taper,D=p.taper===!1?0:p.taper===!0?Math.max(t,m):p.taper,_=Math.pow(t*o,2),E=[],b=[],F=e.slice(0,10).reduce((Z,ns)=>{let fs=ns.pressure;if(a){let ws=jn(1,ns.distance/t),ne=jn(1,1-ws);fs=jn(1,Z+(ne-Z)*(ws*Uc))}return(Z+fs)/2},e[0].pressure),N=Nc(t,l,e[e.length-1].pressure,c),L,U=e[0].vector,Q=e[0].point,ps=Q,ds=Q,Cs=ps,Vs=!1;for(let Z=0;Z<e.length;Z++){let{pressure:ns}=e[Z],{point:fs,vector:ws,distance:ne,runningLength:Rs}=e[Z];if(Z<e.length-1&&m-Rs<3)continue;if(l){if(a){let gs=jn(1,ne/t),ls=jn(1,1-gs);ns=jn(1,F+(ls-F)*(gs*Uc))}N=Nc(t,l,ns,c)}else N=t/2;L===void 0&&(L=N);let Je=Rs<C?d(Rs/C):1,In=m-Rs<D?A((m-Rs)/D):1;N=Math.max(.01,N*Math.min(Je,In));let x=(Z<e.length-1?e[Z+1]:e[Z]).vector,V=Z<e.length-1?Lc(ws,x):1,H=Lc(ws,U)<0&&!Vs,J=V!==null&&V<0;if(H||J){let gs=be(Dt(U),N);for(let ls=1/13,B=0;B<=1;B+=ls)ds=vt(Ce(fs,gs),fs,_t*B),E.push(ds),Cs=vt(Ee(fs,gs),fs,_t*-B),b.push(Cs);Q=ds,ps=Cs,J&&(Vs=!0);continue}if(Vs=!1,Z===e.length-1){let gs=be(Dt(ws),N);E.push(Ce(fs,gs)),b.push(Ee(fs,gs));continue}let ms=be(Dt(nr(x,ws,V)),N);ds=Ce(fs,ms),(Z<=1||Ic(Q,ds)>_)&&(E.push(ds),Q=ds),Cs=Ee(fs,ms),(Z<=1||Ic(ps,Cs)>_)&&(b.push(Cs),ps=Cs),F=ns,U=ws}let qs=e[0].point.slice(0,2),Ls=e.length>1?e[e.length-1].point.slice(0,2):Ee(e[0].point,[1,1]),Ts=[],$s=[];if(e.length===1){if(!(C||D)||y){let Z=Rc(qs,Zp(Dt(Ce(qs,Ls))),-(L||N)),ns=[];for(let fs=1/13,ws=fs;ws<=1;ws+=fs)ns.push(vt(Z,qs,_t*2*ws));return ns}}else{if(!(C||D&&e.length===1))if(u)for(let ns=1/13,fs=ns;fs<=1;fs+=ns){let ws=vt(b[0],qs,_t*fs);Ts.push(ws)}else{let ns=Ce(E[0],b[0]),fs=be(ns,.5),ws=be(ns,.51);Ts.push(Ce(qs,fs),Ce(qs,ws),Ee(qs,ws),Ee(qs,fs))}let Z=Dt(jm(e[e.length-1].vector));if(D||C&&e.length===1)$s.push(Ls);else if(f){let ns=Rc(Ls,Z,N);for(let fs=1/29,ws=fs;ws<1;ws+=fs)$s.push(vt(ns,Ls,_t*3*ws))}else $s.push(Ee(Ls,be(Z,N)),Ee(Ls,be(Z,N*.99)),Ce(Ls,be(Z,N*.99)),Ce(Ls,be(Z,N)))}return E.concat($s,b.reverse(),Ts)}function Gm(e,n={}){var t;let{streamline:o=.5,size:l=16,last:a=!1}=n;if(e.length===0)return[];let c=.15+(1-o)*.85,i=Array.isArray(e[0])?e:e.map(({x:A,y:m,pressure:C=.5})=>[A,m,C]);if(i.length===2){let A=i[1];i=i.slice(0,-1);for(let m=1;m<5;m++)i.push(nr(i[0],A,m/4))}i.length===1&&(i=[...i,[...Ee(i[0],[1,1]),...i[0].slice(2)]]);let p=[{point:[i[0][0],i[0][1]],pressure:i[0][2]>=0?i[0][2]:.25,vector:[1,1],distance:0,runningLength:0}],y=!1,u=0,d=p[0],f=i.length-1;for(let A=1;A<i.length;A++){let m=a&&A===f?i[A].slice(0,2):nr(d.point,i[A],c);if(Hm(d.point,m))continue;let C=Km(m,d.point);if(u+=C,A<f&&!y){if(u<l)continue;y=!0}d={point:m,pressure:i[A][2]>=0?i[A][2]:.5,vector:Zp(Ce(d.point,m)),distance:C,runningLength:u},p.push(d)}return p[0].vector=((t=p[1])==null?void 0:t.vector)||[0,0],p}function Zm(e,n={}){return Ym(Gm(e,n),n)}var Xm=()=>({events:{},emit(e,...n){let t=this.events[e]||[];for(let o=0,l=t.length;o<l;o++)t[o](...n)},on(e,n){var t;return(t=this.events[e])!=null&&t.push(n)||(this.events[e]=[n]),()=>{var o;this.events[e]=(o=this.events[e])==null?void 0:o.filter(l=>n!==l)}}});function To(e,n){return e-n}function Jm(e){return e<0?-1:1}function $o(e){return[Math.abs(e),Jm(e)]}function Xp(){const e=()=>((1+Math.random())*65536|0).toString(16).substring(1);return`${e()+e()}-${e()}-${e()}-${e()}-${e()}${e()}${e()}`}var Qm=2,ze=Qm,ft=class{constructor(e){this.drauu=e,this.event=void 0,this.point=void 0,this.start=void 0,this.el=null}onSelected(e){}onUnselected(){}onStart(e){}onMove(e){return!1}onEnd(e){}get brush(){return this.drauu.brush}get shiftPressed(){return this.drauu.shiftPressed}get altPressed(){return this.drauu.altPressed}get svgElement(){return this.drauu.el}getMousePosition(e){var l;var n;const t=this.drauu.el,o=(l=this.drauu.options.coordinateScale)!=null?l:1;if(this.drauu.options.coordinateTransform===!1){const a=this.drauu.el.getBoundingClientRect();return{x:(e.pageX-a.left)*o,y:(e.pageY-a.top)*o,pressure:e.pressure}}else{const a=this.drauu.svgPoint;a.x=e.clientX,a.y=e.clientY;const c=a.matrixTransform((n=t.getScreenCTM())==null?void 0:n.inverse());return{x:c.x*o,y:c.y*o,pressure:e.pressure}}}createElement(e,n){var l;const t=document.createElementNS("http://www.w3.org/2000/svg",e),o=n?{...this.brush,...n}:this.brush;return t.setAttribute("fill",(l=o.fill)!=null?l:"transparent"),t.setAttribute("stroke",o.color),t.setAttribute("stroke-width",o.size.toString()),t.setAttribute("stroke-linecap","round"),o.dasharray&&t.setAttribute("stroke-dasharray",o.dasharray),t}attr(e,n){this.el.setAttribute(e,typeof n=="string"?n:n.toFixed(ze))}_setEvent(e){this.event=e,this.point=this.getMousePosition(e)}_eventDown(e){return this._setEvent(e),this.start=this.point,this.onStart(this.point)}_eventMove(e){return this._setEvent(e),this.onMove(this.point)}_eventUp(e){return this._setEvent(e),this.onEnd(this.point)}},sA=class extends ft{constructor(){super(...arguments),this.points=[]}onStart(e){return this.el=document.createElementNS("http://www.w3.org/2000/svg","path"),this.points=[e],this.attr("fill",this.brush.color),this.attr("d",this.getSvgData(this.points)),this.el}onMove(e){return this.el||this.onStart(e),this.points[this.points.length-1]!==e&&this.points.push(e),this.attr("d",this.getSvgData(this.points)),!0}onEnd(){const e=this.el;return this.el=null,!!e}getSvgData(e){const n=Zm(e,{size:this.brush.size*2,thinning:.9,simulatePressure:!1,start:{taper:5},end:{taper:5},...this.brush.stylusOptions});if(!n.length)return"";const t=n.reduce((o,[l,a],c,i)=>{const[p,y]=i[(c+1)%i.length];return o.push(l,a,(l+p)/2,(a+y)/2),o},["M",...n[0],"Q"]);return t.push("Z"),t.map(o=>typeof o=="number"?o.toFixed(2):o).join(" ")}},eA=class extends ft{onStart(e){return this.el=this.createElement("ellipse"),this.attr("cx",e.x),this.attr("cy",e.y),this.el}onMove(e){if(!this.el||!this.start)return!1;let[n,t]=$o(e.x-this.start.x),[o,l]=$o(e.y-this.start.y);if(this.shiftPressed){const a=Math.min(n,o);n=a,o=a}if(this.altPressed)this.attr("cx",this.start.x),this.attr("cy",this.start.y),this.attr("rx",n),this.attr("ry",o);else{const[a,c]=[this.start.x,this.start.x+n*t].sort(To),[i,p]=[this.start.y,this.start.y+o*l].sort(To);this.attr("cx",(a+c)/2),this.attr("cy",(i+p)/2),this.attr("rx",(c-a)/2),this.attr("ry",(p-i)/2)}return!0}onEnd(){const e=this.el;return this.el=null,!(!e||!e.getTotalLength())}};function Jp(e,n){const t=document.createElementNS("http://www.w3.org/2000/svg","defs"),o=document.createElementNS("http://www.w3.org/2000/svg","marker"),l=document.createElementNS("http://www.w3.org/2000/svg","path");return l.setAttribute("fill",n),o.setAttribute("id",e),o.setAttribute("viewBox","0 -5 10 10"),o.setAttribute("refX","5"),o.setAttribute("refY","0"),o.setAttribute("markerWidth","4"),o.setAttribute("markerHeight","4"),o.setAttribute("orient","auto"),l.setAttribute("d","M0,-5L10,0L0,5"),o.appendChild(l),t.appendChild(o),t}var nA=class extends ft{onStart(e){if(this.el=this.createElement("line",{fill:"transparent"}),this.attr("x1",e.x),this.attr("y1",e.y),this.attr("x2",e.x),this.attr("y2",e.y),this.brush.arrowEnd){const n=Xp(),t=document.createElementNS("http://www.w3.org/2000/svg","g");return t.append(Jp(n,this.brush.color)),t.append(this.el),this.attr("marker-end",`url(#${n})`),t}return this.el}onMove(e){if(!this.el)return!1;let{x:n,y:t}=e;if(this.shiftPressed){const o=e.x-this.start.x,l=e.y-this.start.y;if(l!==0){let a=o/l;a=Math.round(a),Math.abs(a)<=1?(n=this.start.x+l*a,t=this.start.y+l):(n=this.start.x+o,t=this.start.y)}}return this.altPressed?(this.attr("x1",this.start.x*2-n),this.attr("y1",this.start.y*2-t),this.attr("x2",n),this.attr("y2",t)):(this.attr("x1",this.start.x),this.attr("y1",this.start.y),this.attr("x2",n),this.attr("y2",t)),!0}onEnd(){const e=this.el;return this.el=null,!(!e||e.getTotalLength()<5)}},tA=class extends ft{onStart(e){return this.el=this.createElement("rect"),this.brush.cornerRadius&&(this.attr("rx",this.brush.cornerRadius),this.attr("ry",this.brush.cornerRadius)),this.attr("x",e.x),this.attr("y",e.y),this.el}onMove(e){if(!this.el||!this.start)return!1;let[n,t]=$o(e.x-this.start.x),[o,l]=$o(e.y-this.start.y);if(this.shiftPressed){const a=Math.min(n,o);n=a,o=a}if(this.altPressed)this.attr("x",this.start.x-n),this.attr("y",this.start.y-o),this.attr("width",n*2),this.attr("height",o*2);else{const[a,c]=[this.start.x,this.start.x+n*t].sort(To),[i,p]=[this.start.y,this.start.y+o*l].sort(To);this.attr("x",a),this.attr("y",i),this.attr("width",c-a),this.attr("height",p-i)}return!0}onEnd(){const e=this.el;return this.el=null,!(!e||!e.getTotalLength())}};function oA(e,n){const t=e.x-n.x,o=e.y-n.y;return t*t+o*o}function lA(e,n,t){let o=n.x,l=n.y,a=t.x-o,c=t.y-l;if(a!==0||c!==0){const i=((e.x-o)*a+(e.y-l)*c)/(a*a+c*c);i>1?(o=t.x,l=t.y):i>0&&(o+=a*i,l+=c*i)}return a=e.x-o,c=e.y-l,a*a+c*c}function rA(e,n){let t=e[0];const o=[t];let l;for(let a=1,c=e.length;a<c;a++)l=e[a],oA(l,t)>n&&(o.push(l),t=l);return t!==l&&l&&o.push(l),o}function tr(e,n,t,o,l){let a=o,c=0;for(let i=n+1;i<t;i++){const p=lA(e[i],e[n],e[t]);p>a&&(c=i,a=p)}a>o&&(c-n>1&&tr(e,n,c,o,l),l.push(e[c]),t-c>1&&tr(e,c,t,o,l))}function aA(e,n){const t=e.length-1,o=[e[0]];return tr(e,0,t,n,o),o.push(e[t]),o}function jc(e,n,t=!1){if(e.length<=2)return e;const o=n!==void 0?n*n:1;return e=t?e:rA(e,o),e=aA(e,o),e}var cA=class extends ft{constructor(){super(...arguments),this.points=[],this.count=0}onStart(e){if(this.el=this.createElement("path",{fill:"transparent"}),this.points=[e],this.brush.arrowEnd){this.arrowId=Xp();const n=Jp(this.arrowId,this.brush.color);this.el.appendChild(n)}return this.el}onMove(e){return this.el||this.onStart(e),this.points[this.points.length-1]!==e&&(this.points.push(e),this.count+=1),this.count>5&&(this.points=jc(this.points,1,!0),this.count=0),this.attr("d",Hc(this.points)),!0}onEnd(){const e=this.el;return this.el=null,!(!e||(e.setAttribute("d",Hc(jc(this.points,1,!0))),!e.getTotalLength()))}};function iA(e,n){const t=n.x-e.x,o=n.y-e.y;return{length:Math.sqrt(t**2+o**2),angle:Math.atan2(o,t)}}function qc(e,n,t,o){const l=n||e,a=t||e,c=.2,i=iA(l,a),p=i.angle+(o?Math.PI:0),y=i.length*c,u=e.x+Math.cos(p)*y,d=e.y+Math.sin(p)*y;return{x:u,y:d}}function pA(e,n,t){const o=qc(t[n-1],t[n-2],e),l=qc(e,t[n-1],t[n+1],!0);return`C ${o.x.toFixed(ze)},${o.y.toFixed(ze)} ${l.x.toFixed(ze)},${l.y.toFixed(ze)} ${e.x.toFixed(ze)},${e.y.toFixed(ze)}`}function Hc(e){return e.reduce((n,t,o,l)=>o===0?`M ${t.x.toFixed(ze)},${t.y.toFixed(ze)}`:`${n} ${pA(t,o,l)}`,"")}var yA=class extends ft{constructor(){super(...arguments),this.pathSubFactor=20,this.pathFragments=[]}onSelected(e){const n=(t,o)=>{if(t&&t.length)for(let l=0;l<t.length;l++){const a=t[l];if(a.getTotalLength){const c=a.getTotalLength();for(let i=0;i<this.pathSubFactor;i++){const p=a.getPointAtLength(c*i/this.pathSubFactor),y=a.getPointAtLength(c*(i+1)/this.pathSubFactor);this.pathFragments.push({x1:p.x,x2:y.x,y1:p.y,y2:y.y,segment:i,element:o||a})}}else a.children&&n(a.children,a)}};e&&n(e.children)}onUnselected(){this.pathFragments=[]}onStart(e){this.svgPointPrevious=this.svgElement.createSVGPoint(),this.svgPointPrevious.x=e.x,this.svgPointPrevious.y=e.y}onMove(e){this.svgPointCurrent=this.svgElement.createSVGPoint(),this.svgPointCurrent.x=e.x,this.svgPointCurrent.y=e.y;const n=this.checkAndEraseElement();return this.svgPointPrevious=this.svgPointCurrent,n}onEnd(){return this.svgPointPrevious=void 0,this.svgPointCurrent=void 0,!0}checkAndEraseElement(){const e=[];if(this.pathFragments.length)for(let n=0;n<this.pathFragments.length;n++){const t=this.pathFragments[n],o={x1:this.svgPointPrevious.x,x2:this.svgPointCurrent.x,y1:this.svgPointPrevious.y,y2:this.svgPointCurrent.y};this.lineLineIntersect(t,o)&&(t.element.remove(),e.push(n))}return e.length&&(this.pathFragments=this.pathFragments.filter((n,t)=>!e.includes(t))),e.length>0}lineLineIntersect(e,n){const t=e.x1,o=e.x2,l=n.x1,a=n.x2,c=e.y1,i=e.y2,p=n.y1,y=n.y2,u=(t-o)*(p-y)-(c-i)*(l-a),d=(t*i-c*o)*(l-a)-(t-o)*(l*y-p*a),f=(t*i-c*o)*(p-y)-(c-i)*(l*y-p*a),A=(m,C,D)=>m>=C&&m<=D?!0:m>=D&&m<=C;if(u===0)return!1;{const m={x:d/u,y:f/u};return A(m.x,t,o)&&A(m.y,c,i)&&A(m.x,l,a)&&A(m.y,p,y)}}};function uA(e){return{draw:new cA(e),stylus:new sA(e),line:new nA(e),rectangle:new tA(e),ellipse:new eA(e),eraseLine:new yA(e)}}var dA=class{constructor(e={}){this.options=e,this.el=null,this.svgPoint=null,this.eventEl=null,this.shiftPressed=!1,this.altPressed=!1,this.drawing=!1,this._emitter=Xm(),this._models=uA(this),this._undoStack=[],this._disposables=[],this.options.brush||(this.options.brush={color:"black",size:3,mode:"stylus"}),e.el&&this.mount(e.el,e.eventTarget)}get model(){return this._models[this.mode]}get mounted(){return!!this.el}get mode(){return this.options.brush.mode||"stylus"}set mode(e){this._models[this.mode].onUnselected(),this.options.brush.mode=e,this.model.onSelected(this.el)}get brush(){return this.options.brush}set brush(e){this.options.brush=e}resolveSelector(e){return typeof e=="string"?document.querySelector(e):e||null}mount(e,n){if(this.el)throw new Error("[drauu] already mounted, unmount previous target first");if(this.el=this.resolveSelector(e),!this.el)throw new Error("[drauu] target element not found");if(this.el.tagName.toLocaleLowerCase()!=="svg")throw new Error("[drauu] can only mount to a SVG element");if(!this.el.createSVGPoint)throw new Error("[drauu] SVG element must be create by document.createElementNS('http://www.w3.org/2000/svg', 'svg')");this.svgPoint=this.el.createSVGPoint();const t=this.resolveSelector(n)||this.el,o=this.eventStart.bind(this),l=this.eventMove.bind(this),a=this.eventEnd.bind(this),c=this.eventKeyboard.bind(this);t.addEventListener("pointerdown",o,{passive:!1}),window.addEventListener("pointermove",l,{passive:!1}),window.addEventListener("pointerup",a,{passive:!1}),window.addEventListener("pointercancel",a,{passive:!1}),window.addEventListener("keydown",c,!1),window.addEventListener("keyup",c,!1),this._disposables.push(()=>{t.removeEventListener("pointerdown",o),window.removeEventListener("pointermove",l),window.removeEventListener("pointerup",a),window.removeEventListener("pointercancel",a),window.removeEventListener("keydown",c,!1),window.removeEventListener("keyup",c,!1)}),this._emitter.emit("mounted")}unmount(){this._disposables.forEach(e=>e()),this._disposables.length=0,this.el=null,this._emitter.emit("unmounted")}on(e,n){return this._emitter.on(e,n)}undo(){const e=this.el;return e.lastElementChild?(this._undoStack.push(e.lastElementChild.cloneNode(!0)),e.lastElementChild.remove(),this._emitter.emit("changed"),!0):!1}redo(){return this._undoStack.length?(this.el.appendChild(this._undoStack.pop()),this._emitter.emit("changed"),!0):!1}canRedo(){return!!this._undoStack.length}canUndo(){var e;return!!((e=this.el)!=null&&e.lastElementChild)}eventMove(e){!this.acceptsInput(e)||!this.drawing||this.model._eventMove(e)&&(e.stopPropagation(),e.preventDefault(),this._emitter.emit("changed"))}eventStart(e){!this.acceptsInput(e)||(e.stopPropagation(),e.preventDefault(),this._currentNode&&this.cancel(),this.drawing=!0,this._emitter.emit("start"),this._currentNode=this.model._eventDown(e),this._currentNode&&this.mode!=="eraseLine"&&this.el.appendChild(this._currentNode),this._emitter.emit("changed"))}eventEnd(e){if(!this.acceptsInput(e)||!this.drawing)return;const n=this.model._eventUp(e);n?(n instanceof Element&&n!==this._currentNode&&(this._currentNode=n),this.commit()):this.cancel(),this.drawing=!1,this._emitter.emit("end"),this._emitter.emit("changed")}acceptsInput(e){return!this.options.acceptsInputTypes||this.options.acceptsInputTypes.includes(e.pointerType)}eventKeyboard(e){this.shiftPressed===e.shiftKey&&this.altPressed===e.altKey||(this.shiftPressed=e.shiftKey,this.altPressed=e.altKey,this.model.point&&this.model.onMove(this.model.point)&&this._emitter.emit("changed"))}commit(){this._undoStack.length=0;const e=this._currentNode;this._currentNode=void 0,this._emitter.emit("committed",e)}clear(){this._undoStack.length=0,this.cancel(),this.el.innerHTML="",this._emitter.emit("changed")}cancel(){this._currentNode&&(this.el.removeChild(this._currentNode),this._currentNode=void 0,this._emitter.emit("canceled"))}dump(){return this.el.innerHTML}load(e){this.clear(),this.el.innerHTML=e}};function fA(e){return new dA(e)}const or=["#ff595e","#ffca3a","#8ac926","#1982c4","#6a4c93","#ffffff","#000000"],Ue=Oe("slidev-drawing-enabled",!1),K1=Oe("slidev-drawing-pinned",!1),mA=W(!1),AA=W(!1),BA=W(!1),zt=W(!1),En=Ld(Oe("slidev-drawing-brush",{color:or[0],size:4,mode:"stylus"})),Wc=W("stylus"),Qp=k(()=>vs.drawings.syncAll||Ie.value);let Yt=!1;const bt=k({get(){return Wc.value},set(e){Wc.value=e,e==="arrow"?(En.mode="line",En.arrowEnd=!0):(En.mode=e,En.arrowEnd=!1)}}),hA=Os({brush:En,acceptsInputTypes:k(()=>Ue.value?void 0:["pen"]),coordinateTransform:!1}),le=Wo(fA(hA));function CA(){le.clear(),Qp.value&&Op(js.value,"")}function sy(){var e;AA.value=le.canRedo(),mA.value=le.canUndo(),BA.value=!!((e=le.el)!=null&&e.children.length)}function gA(e){Yt=!0;const n=xo[e||js.value];n!=null?le.load(n):le.clear(),Yt=!1}le.on("changed",()=>{if(sy(),!Yt){const e=le.dump(),n=js.value;(xo[n]||"")!==e&&Qp.value&&Op(n,le.dump())}});Mf(e=>{Yt=!0,e[js.value]!=null&&le.load(e[js.value]||""),Yt=!1,sy()});Xs(()=>{us(js,()=>{!le.mounted||gA()},{immediate:!0})});le.on("start",()=>zt.value=!0);le.on("end",()=>zt.value=!1);window.addEventListener("keydown",e=>{if(!Ue.value)return;const n=!e.ctrlKey&&!e.altKey&&!e.shiftKey&&!e.metaKey;let t=!0;e.code==="KeyZ"&&(e.ctrlKey||e.metaKey)?e.shiftKey?le.redo():le.undo():e.code==="Escape"?Ue.value=!1:e.code==="KeyL"&&n?bt.value="line":e.code==="KeyA"&&n?bt.value="arrow":e.code==="KeyS"&&n?bt.value="stylus":e.code==="KeyR"&&n?bt.value="rectangle":e.code==="KeyE"&&n?bt.value="ellipse":e.code==="KeyC"&&n?CA():e.code.startsWith("Digit")&&n&&+e.code[5]<=or.length?En.color=or[+e.code[5]-1]:t=!1,t&&(e.preventDefault(),e.stopPropagation())},!1);function Hs(...e){return k(()=>e.every(n=>Gs(n)))}function pe(e){return k(()=>!Gs(e))}const Vc=o5(),gl=Oe("slidev-color-schema","auto"),lr=k(()=>vs.colorSchema!=="auto"),Yr=k({get(){return lr.value?vs.colorSchema==="dark":gl.value==="auto"?Vc.value:gl.value==="dark"},set(e){lr.value||(gl.value=e===Vc.value?"auto":e?"dark":"light")}}),ey=wp(Yr);Te&&us(Yr,e=>{const n=document.querySelector("html");n.classList.toggle("dark",e),n.classList.toggle("light",!e)},{immediate:!0});const Co=W(1),go=k(()=>Ws.length-1),me=W(0),Gr=W(0);function DA(){me.value>Co.value&&(me.value-=1)}function vA(){me.value<go.value&&(me.value+=1)}function _A(){if(me.value>Co.value){let e=me.value-Gr.value;e<Co.value&&(e=Co.value),me.value=e}}function bA(){if(me.value<go.value){let e=me.value+Gr.value;e>go.value&&(e=go.value),me.value=e}}function EA(){const{escape:e,space:n,shift:t,left:o,right:l,up:a,down:c,enter:i,d:p,g:y,o:u}=zp;let d=[{name:"next_space",key:Hs(n,pe(t)),fn:cn,autoRepeat:!0},{name:"prev_space",key:Hs(n,t),fn:pn,autoRepeat:!0},{name:"next_right",key:Hs(l,pe(t),pe(oe)),fn:cn,autoRepeat:!0},{name:"prev_left",key:Hs(o,pe(t),pe(oe)),fn:pn,autoRepeat:!0},{name:"next_page_key",key:"pageDown",fn:cn,autoRepeat:!0},{name:"prev_page_key",key:"pageUp",fn:pn,autoRepeat:!0},{name:"next_down",key:Hs(c,pe(oe)),fn:Zt,autoRepeat:!0},{name:"prev_up",key:Hs(a,pe(oe)),fn:()=>Xt(!1),autoRepeat:!0},{name:"next_shift",key:Hs(l,t),fn:Zt,autoRepeat:!0},{name:"prev_shift",key:Hs(o,t),fn:()=>Xt(!1),autoRepeat:!0},{name:"toggle_dark",key:Hs(p,pe(Ue)),fn:ey},{name:"toggle_overview",key:Hs(u,pe(Ue)),fn:Gp},{name:"hide_overview",key:Hs(e,pe(Ue)),fn:()=>oe.value=!1},{name:"goto",key:Hs(y,pe(Ue)),fn:()=>Kn.value=!Kn.value},{name:"next_overview",key:Hs(l,oe),fn:vA},{name:"prev_overview",key:Hs(o,oe),fn:DA},{name:"up_overview",key:Hs(a,oe),fn:_A},{name:"down_overview",key:Hs(c,oe),fn:bA},{name:"goto_from_overview",key:Hs(i,oe),fn:()=>{ct(me.value),oe.value=!1}}];const f=new Set(d.map(m=>m.name));if(d.filter(m=>m.name&&f.has(m.name)).length===0){const m=["========== WARNING ==========","defineShortcutsSetup did not return any of the base shortcuts.","See https://sli.dev/custom/config-shortcuts.html for migration.",'If it is intentional, return at least one shortcut with one of the base names (e.g. name:"goto").'].join(`

`);alert(m),console.warn(m)}return d}const ny=Hs(pe(Rm),pe(Um),Lm);function wA(e,n,t=!1){typeof e=="string"&&(e=zp[e]);const o=Hs(e,ny);let l=0,a;const c=()=>{if(clearTimeout(a),!o.value){l=0;return}t&&(a=setTimeout(c,Math.max(1e3-l*250,150)),l++),n()};return us(o,c,{flush:"sync"})}function kA(e,n){return jf(e,t=>{!ny.value||t.repeat||n()})}function FA(){const e=EA();new Map(e.map(t=>[t.key,t])).forEach(t=>{t.fn&&wA(t.key,t.fn,t.autoRepeat)}),kA("f",()=>Yp.toggle())}const PA={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},xA=s("path",{fill:"currentColor",d:"M24 9.4L22.6 8L16 14.6L9.4 8L8 9.4l6.6 6.6L8 22.6L9.4 24l6.6-6.6l6.6 6.6l1.4-1.4l-6.6-6.6L24 9.4z"},null,-1),SA=[xA];function TA(e,n){return g(),S("svg",PA,SA)}const $A={name:"carbon-close",render:TA};function Zr(e){var t,o;const n=(o=(t=e==null?void 0:e.meta)==null?void 0:t.slide)==null?void 0:o.no;return n!=null?`slidev-page-${n}`:""}const ty=hs({__name:"SlideContainer",props:{width:{type:Number},meta:{default:()=>({})},scale:{type:[Number,String]}},setup(e){const n=e;q(Y);const t=W(),o=B5(t),l=k(()=>n.width?n.width:o.width.value),a=k(()=>n.width?n.width/rn:o.height.value);n.width&&yt(()=>{t.value&&(t.value.style.width=`${l.value}px`,t.value.style.height=`${a.value}px`)});const c=k(()=>l.value/a.value),i=k(()=>n.scale?n.scale:c.value<rn?l.value/an:a.value*rn/an),p=k(()=>({height:`${Vr}px`,width:`${an}px`,transform:`translate(-50%, -50%) scale(${i.value})`})),y=k(()=>({"select-none":!vs.selectable,"slidev-code-line-numbers":vs.lineNumbers}));return de(Sp,i),(u,d)=>(g(),S("div",{id:"slide-container",ref_key:"root",ref:t,class:Ss(v(y))},[s("div",{id:"slide-content",style:zs(v(p))},[Qs(u.$slots,"default")],4),Qs(u.$slots,"controls")],2))}});const Xr=hs({props:{clicks:{type:[Number,String],default:0},clicksElements:{type:Array,default:()=>[]},clicksOrderMap:{type:Map,default:()=>new Map},clicksDisabled:{type:Boolean,default:!1},context:{type:String,default:"main"},is:{type:Object,default:void 0},route:{type:Object,default:void 0}},setup(e,{emit:n}){const t=Re(e,"clicks",n),o=Re(e,"clicksElements",n),l=Re(e,"clicksDisabled",n),a=Re(e,"clicksOrderMap",n);o.value.length=0,de(Df,e.route),de(vf,e.context),de(xt,t),de(St,l),de(Dn,o),de(Yl,a)},render(){var e,n;return this.$props.is?fe(this.$props.is):(n=(e=this.$slots)==null?void 0:e.default)==null?void 0:n.call(e)}}),OA=["innerHTML"],MA=hs({__name:"DrawingPreview",props:{page:null},setup(e){return q(Y),(n,t)=>v(xo)[e.page]?(g(),S("svg",{key:0,ref:"svg",class:"w-full h-full absolute top-0 pointer-events-none",innerHTML:v(xo)[e.page]},null,8,OA)):ys("v-if",!0)}}),NA={class:"slides-overview bg-main !bg-opacity-75 p-16 overflow-y-auto"},LA=["onClick"],IA=hs({__name:"SlidesOverview",props:{modelValue:{type:Boolean}},emits:[],setup(e,{emit:n}){const t=e;q(Y);const o=Re(t,"modelValue",n);function l(){o.value=!1}function a(A){ct(A),l()}function c(A){return A===me.value}const i=er.smaller("xs"),p=er.smaller("sm"),y=4*16*2,u=2*16,d=k(()=>i.value?xn.width.value-y:p.value?(xn.width.value-y-u)/2:300),f=k(()=>Math.floor((xn.width.value-y)/(d.value+u)));return yt(()=>{me.value=js.value,Gr.value=f.value}),(A,m)=>{const C=$A;return g(),S(G,null,[Ir(s("div",NA,[s("div",{class:"grid gap-y-4 gap-x-8 w-full",style:zs(`grid-template-columns: repeat(auto-fit,minmax(${v(d)}px,1fr))`)},[(g(!0),S(G,null,dt(v(Ws).slice(0,-1),(D,_)=>(g(),S("div",{key:D.path,class:"relative"},[s("div",{class:Ss(["inline-block border border-gray-400 rounded border-opacity-50 overflow-hidden bg-main hover:border-$slidev-theme-primary",{"border-$slidev-theme-primary":c(_+1)}]),onClick:E=>a(+D.path)},[(g(),z(ty,{key:D.path,width:v(d),"clicks-disabled":!0,class:"pointer-events-none"},{default:T(()=>[M(v(Xr),{is:D==null?void 0:D.component,"clicks-disabled":!0,class:Ss(v(Zr)(D)),route:D,context:"overview"},null,8,["is","class","route"]),M(MA,{page:+D.path},null,8,["page"])]),_:2},1032,["width"]))],10,LA),s("div",{class:"absolute top-0 opacity-50",style:zs(`left: ${v(d)+5}px`)},Sn(_+1),5)]))),128))],4)],512),[[vp,v(o)]]),v(o)?(g(),S("button",{key:0,class:"fixed text-2xl top-4 right-4 icon-btn text-gray-400",onClick:l},[M(C)])):ys("v-if",!0)],64)}}});const RA="/typescript-improvements-slides/assets/logo.b72bde5d.png",UA={key:0,class:"fixed top-0 bottom-0 left-0 right-0 grid z-20"},jA=hs({__name:"Modal",props:{modelValue:{default:!1},class:{default:""}},emits:["modelValue"],setup(e,{emit:n}){const t=e;q(Y);const o=Re(t,"modelValue",n);function l(){o.value=!1}return(a,c)=>(g(),z(rp,null,[v(o)?(g(),S("div",UA,[s("div",{bg:"black opacity-80",class:"absolute top-0 bottom-0 left-0 right-0 -z-1",onClick:c[0]||(c[0]=i=>l())}),s("div",{class:Ss(["m-auto rounded-md bg-main shadow",t.class]),"dark:border":"~ gray-400 opacity-10"},[Qs(a.$slots,"default")],2)])):ys("v-if",!0)],1024))}}),qA={class:"slidev-info-dialog slidev-layout flex flex-col gap-4 text-base"},HA=["innerHTML"],WA=s("a",{href:"https://github.com/slidevjs/slidev",target:"_blank",class:"!opacity-100 !border-none !text-current"},[s("div",{class:"flex gap-1 children:my-auto"},[s("div",{class:"opacity-50 text-sm mr-2"},"Powered by"),s("img",{class:"w-5 h-5",src:RA,alt:"Slidev"}),s("div",{style:{color:"#2082A6"}},[s("b",null,"Sli"),r("dev ")])])],-1),VA=hs({__name:"InfoDialog",props:{modelValue:{default:!1}},emits:["modelValue"],setup(e,{emit:n}){const t=e;q(Y);const o=Re(t,"modelValue",n),l=k(()=>typeof vs.info=="string");return(a,c)=>(g(),z(jA,{modelValue:v(o),"onUpdate:modelValue":c[0]||(c[0]=i=>Es(o)?o.value=i:null),class:"px-6 py-4"},{default:T(()=>[s("div",qA,[v(l)?(g(),S("div",{key:0,class:"mb-4",innerHTML:v(vs).info},null,8,HA)):ys("v-if",!0),WA])]),_:1},8,["modelValue"]))}});const KA=["disabled","onKeydown"],zA=hs({__name:"Goto",setup(e){q(Y);const n=W(),t=W(""),o=k(()=>{if(t.value.startsWith("/"))return!!Ws.find(c=>c.path===t.value.substring(1));{const c=+t.value;return!isNaN(c)&&c>0&&c<=Ay.value}});function l(){o.value&&(t.value.startsWith("/")?ct(t.value.substring(1)):ct(+t.value)),a()}function a(){Kn.value=!1}return us(Kn,async c=>{var i,p;c?(await Xs(),t.value="",(i=n.value)==null||i.focus()):(p=n.value)==null||p.blur()}),us(t,c=>{c.match(/^[^0-9/]/)&&(t.value=t.value.substring(1))}),(c,i)=>(g(),S("div",{id:"slidev-goto-dialog",class:Ss(["fixed right-5 bg-main transform transition-all",v(Kn)?"top-5":"-top-20"]),shadow:"~",p:"x-4 y-2",border:"~ transparent rounded dark:gray-400 dark:opacity-25"},[Ir(s("input",{ref_key:"input",ref:n,"onUpdate:modelValue":i[0]||(i[0]=p=>t.value=p),type:"text",disabled:!v(Kn),class:Ss(["outline-none bg-transparent",{"text-red-400":!v(o)&&t.value}]),placeholder:"Goto...",onKeydown:[Ya(l,["enter"]),Ya(a,["escape"])],onBlur:a},null,42,KA),[[_d,t.value]])],2))}}),YA=hs({__name:"Controls",setup(e){q(Y);const n=qe(),t=qe();return(o,l)=>(g(),S(G,null,[M(IA,{modelValue:v(oe),"onUpdate:modelValue":l[0]||(l[0]=a=>Es(oe)?oe.value=a:null)},null,8,["modelValue"]),M(zA),v(n)?(g(),z(v(n),{key:0})):ys("v-if",!0),v(t)?(g(),z(v(t),{key:1,modelValue:v(hl),"onUpdate:modelValue":l[1]||(l[1]=a=>Es(hl)?hl.value=a:null)},null,8,["modelValue"])):ys("v-if",!0),v(vs).info?(g(),z(VA,{key:2,modelValue:v(Ot),"onUpdate:modelValue":l[2]||(l[2]=a=>Es(Ot)?Ot.value=a:null)},null,8,["modelValue"])):ys("v-if",!0)],64))}}),GA={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},ZA=s("path",{fill:"currentColor",d:"M30 8h-4.1c-.5-2.3-2.5-4-4.9-4s-4.4 1.7-4.9 4H2v2h14.1c.5 2.3 2.5 4 4.9 4s4.4-1.7 4.9-4H30V8zm-9 4c-1.7 0-3-1.3-3-3s1.3-3 3-3s3 1.3 3 3s-1.3 3-3 3zM2 24h4.1c.5 2.3 2.5 4 4.9 4s4.4-1.7 4.9-4H30v-2H15.9c-.5-2.3-2.5-4-4.9-4s-4.4 1.7-4.9 4H2v2zm9-4c1.7 0 3 1.3 3 3s-1.3 3-3 3s-3-1.3-3-3s1.3-3 3-3z"},null,-1),XA=[ZA];function JA(e,n){return g(),S("svg",GA,XA)}const QA={name:"carbon-settings-adjust",render:JA},sB={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},eB=s("path",{fill:"currentColor",d:"M17 22v-8h-4v2h2v6h-3v2h8v-2h-3zM16 8a1.5 1.5 0 1 0 1.5 1.5A1.5 1.5 0 0 0 16 8z"},null,-1),nB=s("path",{fill:"currentColor",d:"M16 30a14 14 0 1 1 14-14a14 14 0 0 1-14 14Zm0-26a12 12 0 1 0 12 12A12 12 0 0 0 16 4Z"},null,-1),tB=[eB,nB];function oB(e,n){return g(),S("svg",sB,tB)}const lB={name:"carbon-information",render:oB},rB={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},aB=s("path",{fill:"currentColor",d:"M26 24v4H6v-4H4v4a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2v-4zm0-10l-1.41-1.41L17 20.17V2h-2v18.17l-7.59-7.58L6 14l10 10l10-10z"},null,-1),cB=[aB];function iB(e,n){return g(),S("svg",rB,cB)}const pB={name:"carbon-download",render:iB},yB={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},uB=s("path",{fill:"currentColor",d:"M29.415 19L27.7 17.285A2.97 2.97 0 0 0 28 16a3 3 0 1 0-3 3a2.97 2.97 0 0 0 1.286-.3L28 20.414V28h-6v-3a7.008 7.008 0 0 0-7-7H9a7.008 7.008 0 0 0-7 7v5h28v-9.586A1.988 1.988 0 0 0 29.415 19ZM4 25a5.006 5.006 0 0 1 5-5h6a5.006 5.006 0 0 1 5 5v3H4Z"},null,-1),dB=s("path",{fill:"currentColor",d:"M12 4a5 5 0 1 1-5 5a5 5 0 0 1 5-5m0-2a7 7 0 1 0 7 7a7 7 0 0 0-7-7Z"},null,-1),fB=[uB,dB];function mB(e,n){return g(),S("svg",yB,fB)}const AB={name:"carbon-user-speaker",render:mB},BB={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},hB=s("path",{fill:"currentColor",d:"M15 10h2v8h-2zm5 4h2v4h-2zm-10-2h2v6h-2z"},null,-1),CB=s("path",{fill:"currentColor",d:"M25 4h-8V2h-2v2H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8v6h-4v2h10v-2h-4v-6h8a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 16H7V6h18Z"},null,-1),gB=[hB,CB];function DB(e,n){return g(),S("svg",BB,gB)}const vB={name:"carbon-presentation-file",render:DB},_B={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},bB=s("path",{fill:"currentColor",d:"M27.307 6.107L30 3.414L28.586 2l-2.693 2.693L24.8 3.6a1.933 1.933 0 0 0-2.8 0l-18 18V28h6.4l18-18a1.933 1.933 0 0 0 0-2.8ZM9.6 26H6v-3.6L23.4 5L27 8.6ZM9 11.586L16.586 4L18 5.414L10.414 13z"},null,-1),EB=[bB];function wB(e,n){return g(),S("svg",_B,EB)}const kB={name:"carbon-pen",render:wB},FB={class:"slidev-icon",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},PB=s("path",{fill:"currentColor",d:"m38.2 48.5l58.2 155.2a8 8 0 0 0 15-.1l23.3-64.1a8.1 8.1 0 0 1 4.8-4.8l64.1-23.3a8 8 0 0 0 .1-15L48.5 38.2a8 8 0 0 0-10.3 10.3Z",opacity:".2"},null,-1),xB=s("path",{fill:"currentColor",d:"m150.5 139.2l55.9-20.3a16 16 0 0 0 .1-30L51.3 30.7a16 16 0 0 0-20.6 20.6l58.2 155.2a15.9 15.9 0 0 0 15 10.4h.1a15.9 15.9 0 0 0 14.9-10.5l20.3-55.9l63.1 63.2a8.5 8.5 0 0 0 5.7 2.3a8.3 8.3 0 0 0 5.7-2.3a8.1 8.1 0 0 0 0-11.4Zm-46.6 61.7L45.7 45.7l155.2 58.2l-64.1 23.3a15.7 15.7 0 0 0-9.6 9.6Z"},null,-1),SB=[PB,xB];function TB(e,n){return g(),S("svg",FB,SB)}const $B={name:"ph-cursor-duotone",render:TB},OB={class:"slidev-icon",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},MB=s("path",{fill:"currentColor",d:"M213.7 202.3a8.1 8.1 0 0 1 0 11.4a8.3 8.3 0 0 1-5.7 2.3a8.5 8.5 0 0 1-5.7-2.3l-63.1-63.2l-20.3 55.9a15.9 15.9 0 0 1-14.9 10.5h-.1a15.9 15.9 0 0 1-15-10.4L30.7 51.3a16 16 0 0 1 20.6-20.6l155.2 58.2a16 16 0 0 1-.1 30l-55.9 20.3Z"},null,-1),NB=[MB];function LB(e,n){return g(),S("svg",OB,NB)}const oy={name:"ph-cursor-fill",render:LB},IB={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},RB=s("path",{fill:"currentColor",d:"M16 12.005a4 4 0 1 1-4 4a4.005 4.005 0 0 1 4-4m0-2a6 6 0 1 0 6 6a6 6 0 0 0-6-6ZM5.394 6.813L6.81 5.399l3.505 3.506L8.9 10.319zM2 15.005h5v2H2zm3.394 10.193L8.9 21.692l1.414 1.414l-3.505 3.506zM15 25.005h2v5h-2zm6.687-1.9l1.414-1.414l3.506 3.506l-1.414 1.414zm3.313-8.1h5v2h-5zm-3.313-6.101l3.506-3.506l1.414 1.414l-3.506 3.506zM15 2.005h2v5h-2z"},null,-1),UB=[RB];function jB(e,n){return g(),S("svg",IB,UB)}const qB={name:"carbon-sun",render:jB},HB={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},WB=s("path",{fill:"currentColor",d:"M13.502 5.414a15.075 15.075 0 0 0 11.594 18.194a11.113 11.113 0 0 1-7.975 3.39c-.138 0-.278.005-.418 0a11.094 11.094 0 0 1-3.2-21.584M14.98 3a1.002 1.002 0 0 0-.175.016a13.096 13.096 0 0 0 1.825 25.981c.164.006.328 0 .49 0a13.072 13.072 0 0 0 10.703-5.555a1.01 1.01 0 0 0-.783-1.565A13.08 13.08 0 0 1 15.89 4.38A1.015 1.015 0 0 0 14.98 3Z"},null,-1),VB=[WB];function KB(e,n){return g(),S("svg",HB,VB)}const zB={name:"carbon-moon",render:KB},YB={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},GB=s("path",{fill:"currentColor",d:"M8 4v4H4V4Zm2-2H2v8h8Zm8 2v4h-4V4Zm2-2h-8v8h8Zm8 2v4h-4V4Zm2-2h-8v8h8ZM8 14v4H4v-4Zm2-2H2v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8ZM8 24v4H4v-4Zm2-2H2v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8Z"},null,-1),ZB=[GB];function XB(e,n){return g(),S("svg",YB,ZB)}const JB={name:"carbon-apps",render:XB},QB={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},sh=s("path",{fill:"currentColor",d:"m18 6l-1.43 1.393L24.15 15H4v2h20.15l-7.58 7.573L18 26l10-10L18 6z"},null,-1),eh=[sh];function nh(e,n){return g(),S("svg",QB,eh)}const th={name:"carbon-arrow-right",render:nh},oh={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},lh=s("path",{fill:"currentColor",d:"m14 26l1.41-1.41L7.83 17H28v-2H7.83l7.58-7.59L14 6L4 16l10 10z"},null,-1),rh=[lh];function ah(e,n){return g(),S("svg",oh,rh)}const ch={name:"carbon-arrow-left",render:ah},ih={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},ph=s("path",{fill:"currentColor",d:"M20 2v2h6.586L18 12.582L19.414 14L28 5.414V12h2V2H20zm-6 17.416L12.592 18L4 26.586V20H2v10h10v-2H5.414L14 19.416z"},null,-1),yh=[ph];function uh(e,n){return g(),S("svg",ih,yh)}const dh={name:"carbon-maximize",render:uh},fh={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},mh=s("path",{fill:"currentColor",d:"M4 18v2h6.586L2 28.582L3.414 30L12 21.414V28h2V18H4zM30 3.416L28.592 2L20 10.586V4h-2v10h10v-2h-6.586L30 3.416z"},null,-1),Ah=[mh];function Bh(e,n){return g(),S("svg",fh,Ah)}const hh={name:"carbon-minimize",render:Bh},Ch={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},gh=s("path",{fill:"currentColor",d:"m13 24l-9-9l1.414-1.414L13 21.171L26.586 7.586L28 9L13 24z"},null,-1),Dh=[gh];function vh(e,n){return g(),S("svg",Ch,Dh)}const _h={name:"carbon-checkmark",render:vh},bh={class:"select-list"},Eh={class:"title"},wh={class:"items"},kh=["onClick"],Fh=hs({__name:"SelectList",props:{modelValue:{type:[Object,String,Number]},title:{type:String},items:{type:Array}},setup(e,{emit:n}){const t=e;q(Y);const o=Re(t,"modelValue",n,{passive:!0});return(l,a)=>{const c=_h;return g(),S("div",bh,[s("div",Eh,Sn(e.title),1),s("div",wh,[(g(!0),S(G,null,dt(e.items,i=>(g(),S("div",{key:i.value,class:Ss(["item",{active:v(o)===i.value}]),onClick:()=>{var p;o.value=i.value,(p=i.onClick)==null||p.call(i)}},[M(c,{class:Ss(["text-green-500",{"opacity-0":v(o)!==i.value}])},null,8,["class"]),r(" "+Sn(i.display||i.value),1)],10,kh))),128))])])}}});const ly=(e,n)=>{const t=e.__vccOpts||e;for(const[o,l]of n)t[o]=l;return t},Ph=ly(Fh,[["__scopeId","data-v-7dd0eaca"]]),xh={class:"text-sm"},Sh=hs({__name:"Settings",setup(e){q(Y);const n=[{display:"Fit",value:0},{display:"1:1",value:1}];return(t,o)=>(g(),S("div",xh,[M(Ph,{modelValue:v(ho),"onUpdate:modelValue":o[0]||(o[0]=l=>Es(ho)?ho.value=l:null),title:"Scale",items:n},null,8,["modelValue"])]))}}),Th={key:0,class:"rounded-md bg-main shadow absolute bottom-10 left-0 z-20","dark:border":"~ gray-400 opacity-10"},$h=hs({__name:"MenuButton",props:{modelValue:{default:!1},disabled:{default:!1}},setup(e,{emit:n}){const t=e;q(Y);const o=Re(t,"modelValue",n,{passive:!0}),l=W();return Rf(l,()=>{o.value=!1}),(a,c)=>(g(),S("div",{ref_key:"el",ref:l,class:"flex relative"},[s("button",{class:Ss({disabled:e.disabled}),onClick:c[0]||(c[0]=i=>o.value=!v(o))},[Qs(a.$slots,"button",{class:Ss({disabled:e.disabled})})],2),(g(),z(rp,null,[v(o)?(g(),S("div",Th,[Qs(a.$slots,"menu")])):ys("v-if",!0)],1024))],512))}}),Oh={class:"w-1px opacity-10 bg-current m-1 lg:m-2"},uo={__name:"VerticalDivider",setup(e){return q(Y),(n,t)=>(g(),S("div",Oh))}},Mh={render(){return[]}},Nh={class:"icon-btn"},Lh={class:"h-40px flex",p:"l-1 t-0.5 r-2",text:"sm leading-2"},Ih={class:"my-auto"},Rh={class:"opacity-50"},Uh=hs({__name:"NavControls",props:{persist:{default:!1}},setup(e){const n=e;q(Y);const t=er.smaller("md"),{isFullscreen:o,toggle:l}=Yp,a=k(()=>ar.value?`?password=${ar.value}`:""),c=k(()=>`/presenter/${js.value}${a.value}`),i=k(()=>`/${js.value}${a.value}`),p=W(),y=()=>{p.value&&Qn.value&&p.value.contains(Qn.value)&&Qn.value.blur()},u=k(()=>n.persist?"text-$slidev-controls-foreground bg-transparent":"rounded-md bg-main shadow dark:border dark:border-gray-400 dark:border-opacity-10"),d=qe(),f=qe();return $n(()=>import("./DrawingControls.e810eac1.js"),["assets/DrawingControls.e810eac1.js","assets/DrawingControls.vue_vue_type_script_setup_true_lang.95b65354.js"]).then(A=>f.value=A.default),(A,m)=>{const C=hh,D=dh,_=ch,E=th,b=JB,F=zB,N=qB,L=oy,U=$B,Q=kB,ps=vB,ds=tt("RouterLink"),Cs=AB,Vs=pB,qs=lB,Ls=QA;return g(),S("nav",{ref_key:"root",ref:p,class:"flex flex-col"},[s("div",{class:Ss(["flex flex-wrap-reverse text-xl gap-0.5 p-1 lg:gap-1 lg:p-2",v(u)]),onMouseleave:y},[v(Ve)?ys("v-if",!0):(g(),S("button",{key:0,class:"icon-btn",onClick:m[0]||(m[0]=(...Ts)=>v(l)&&v(l)(...Ts))},[v(o)?(g(),z(C,{key:0})):(g(),z(D,{key:1}))])),s("button",{class:Ss(["icon-btn",{disabled:!v(uD)}]),onClick:m[1]||(m[1]=(...Ts)=>v(pn)&&v(pn)(...Ts))},[M(_)],2),s("button",{class:Ss(["icon-btn",{disabled:!v(yD)}]),title:"Next",onClick:m[2]||(m[2]=(...Ts)=>v(cn)&&v(cn)(...Ts))},[M(E)],2),v(Ve)?ys("v-if",!0):(g(),S("button",{key:1,class:"icon-btn",title:"Slides overview",onClick:m[3]||(m[3]=Ts=>v(Gp)())},[M(b)])),v(lr)?ys("v-if",!0):(g(),S("button",{key:2,class:"icon-btn",title:"Toggle dark mode",onClick:m[4]||(m[4]=Ts=>v(ey)())},[v(Yr)?(g(),z(F,{key:0})):(g(),z(N,{key:1}))])),M(uo),v(Ve)?ys("v-if",!0):(g(),S(G,{key:3},[!v(Ie)&&!v(t)&&v(d)?(g(),S(G,{key:0},[M(v(d)),M(uo)],64)):ys("v-if",!0),v(Ie)?(g(),S("button",{key:1,class:"icon-btn",title:"Show presenter cursor",onClick:m[5]||(m[5]=Ts=>Cl.value=!v(Cl))},[v(Cl)?(g(),z(L,{key:0})):(g(),z(U,{key:1,class:"opacity-50"}))])):ys("v-if",!0)],64)),!v(vs).drawings.presenterOnly&&!v(Ve)?(g(),S(G,{key:4},[s("button",{class:"icon-btn relative",title:"Drawing",onClick:m[6]||(m[6]=Ts=>Ue.value=!v(Ue))},[M(Q),v(Ue)?(g(),S("div",{key:0,class:"absolute left-1 right-1 bottom-0 h-0.7 rounded-full",style:zs({background:v(En).color})},null,4)):ys("v-if",!0)]),M(uo)],64)):ys("v-if",!0),v(Ve)?ys("v-if",!0):(g(),S(G,{key:5},[v(Ie)?(g(),z(ds,{key:0,to:v(i),class:"icon-btn",title:"Play Mode"},{default:T(()=>[M(ps)]),_:1},8,["to"])):ys("v-if",!0),v(cD)?(g(),z(ds,{key:1,to:v(c),class:"icon-btn",title:"Presenter Mode"},{default:T(()=>[M(Cs)]),_:1},8,["to"])):ys("v-if",!0),ys("v-if",!0)],64)),(g(),S(G,{key:6},[v(vs).download?(g(),S("button",{key:0,class:"icon-btn",onClick:m[8]||(m[8]=(...Ts)=>v(cr)&&v(cr)(...Ts))},[M(Vs)])):ys("v-if",!0)],64)),!v(Ie)&&v(vs).info&&!v(Ve)?(g(),S("button",{key:7,class:"icon-btn",onClick:m[9]||(m[9]=Ts=>Ot.value=!v(Ot))},[M(qs)])):ys("v-if",!0),!v(Ie)&&!v(Ve)?(g(),z($h,{key:8},{button:T(()=>[s("button",Nh,[M(Ls)])]),menu:T(()=>[M(Sh)]),_:1})):ys("v-if",!0),v(Ve)?ys("v-if",!0):(g(),z(uo,{key:9})),s("div",Lh,[s("div",Ih,[r(Sn(v(js))+" ",1),s("span",Rh,"/ "+Sn(v(Ay)),1)])]),M(v(Mh))],34)],512)}}}),ry={render(){return[]}},ay={render(){return[]}},jh={key:0,class:"absolute top-0 left-0 right-0 bottom-0 pointer-events-none text-xl"},qh=hs({__name:"PresenterMouse",setup(e){return q(Y),(n,t)=>{const o=oy;return v(fl).cursor?(g(),S("div",jh,[M(o,{class:"absolute",style:zs({left:`${v(fl).cursor.x}%`,top:`${v(fl).cursor.y}%`})},null,8,["style"])])):ys("v-if",!0)}}}),Hh=hs({__name:"SlidesShow",props:{context:null},setup(e){q(Y),us(ue,()=>{var t,o;((t=ue.value)==null?void 0:t.meta)&&ue.value.meta.preload!==!1&&(ue.value.meta.__preloaded=!0),((o=Dl.value)==null?void 0:o.meta)&&Dl.value.meta.preload!==!1&&(Dl.value.meta.__preloaded=!0)},{immediate:!0});const n=qe();return $n(()=>import("./DrawingLayer.a681564a.js"),[]).then(t=>n.value=t.default),(t,o)=>(g(),S(G,null,[ys(" Global Bottom "),M(v(ay)),ys(" Slides "),(g(!0),S(G,null,dt(v(Ws),l=>{var a,c;return g(),S(G,{key:l.path},[((a=l.meta)==null?void 0:a.__preloaded)||l===v(ue)?Ir((g(),z(v(Xr),{key:0,is:l==null?void 0:l.component,clicks:l===v(ue)?v(Se):0,"clicks-elements":((c=l.meta)==null?void 0:c.__clicksElements)||[],"clicks-disabled":!1,class:Ss(v(Zr)(l)),route:l,context:e.context},null,8,["is","clicks","clicks-elements","class","route","context"])),[[vp,l===v(ue)]]):ys("v-if",!0)],64)}),128)),ys(" Global Top "),M(v(ry)),v(n)?(g(),z(v(n),{key:0})):ys("v-if",!0),v(Ie)?ys("v-if",!0):(g(),z(qh,{key:1}))],64))}}),Wh=hs({__name:"Play",setup(e){q(Y),FA();const n=W();function t(a){var c;Mc.value||((c=a.target)==null?void 0:c.id)==="slide-container"&&(a.screenX/window.innerWidth>.6?cn():pn())}mD(n);const o=k(()=>Im.value||Mc.value);qe();const l=qe();return $n(()=>import("./DrawingControls.e810eac1.js"),["assets/DrawingControls.e810eac1.js","assets/DrawingControls.vue_vue_type_script_setup_true_lang.95b65354.js"]).then(a=>l.value=a.default),(a,c)=>(g(),S(G,null,[s("div",{id:"page-root",ref_key:"root",ref:n,class:"grid grid-cols-[1fr_max-content]",style:zs(v(Tp))},[M(ty,{class:"w-full h-full",style:zs({background:"var(--slidev-slide-container-background, black)"}),width:v(st)?v(xn).width.value:void 0,scale:v(ho),onPointerdown:t},{default:T(()=>[M(Hh,{context:"slide"})]),controls:T(()=>[s("div",{class:Ss(["absolute bottom-0 left-0 transition duration-300 opacity-0 hover:opacity-100",[v(o)?"opacity-100 right-0":"opacity-0 p-2",v(zt)?"pointer-events-none":""]])},[M(Uh,{class:"m-auto",persist:v(o)},null,8,["persist"])],2),!v(vs).drawings.presenterOnly&&!v(Ve)&&v(l)?(g(),z(v(l),{key:0,class:"ml-0"})):ys("v-if",!0)]),_:1},8,["style","width","scale"]),ys("v-if",!0)],4),M(YA)],64))}});function cy(e){const n=k(()=>e.value.path),t=k(()=>Ws.length-1),o=k(()=>parseInt(n.value.split(/\//g).slice(-1)[0])||1),l=k(()=>el(o.value)),a=k(()=>Ws.find(f=>f.path===`${o.value}`)),c=k(()=>{var f,A,m;return(m=(A=(f=a.value)==null?void 0:f.meta)==null?void 0:A.slide)==null?void 0:m.id}),i=k(()=>{var f,A;return((A=(f=a.value)==null?void 0:f.meta)==null?void 0:A.layout)||(o.value===1?"cover":"default")}),p=k(()=>Ws.find(f=>f.path===`${Math.min(Ws.length,o.value+1)}`)),y=k(()=>Ws.filter(f=>{var A,m;return(m=(A=f.meta)==null?void 0:A.slide)==null?void 0:m.title}).reduce((f,A)=>(sa(f,A),f),[])),u=k(()=>ea(y.value,a.value)),d=k(()=>na(u.value));return{route:e,path:n,total:t,currentPage:o,currentPath:l,currentRoute:a,currentSlideId:c,currentLayout:i,nextRoute:p,rawTree:y,treeWithActiveStatuses:u,tree:d}}function iy(e,n,t){const o=W(0);Xs(()=>{Ae.afterEach(async()=>{await Xs(),o.value+=1})});const l=k(()=>{var p,y;return o.value,((y=(p=n.value)==null?void 0:p.meta)==null?void 0:y.__clicksElements)||[]}),a=k(()=>{var p,y,u;return+((u=(y=(p=n.value)==null?void 0:p.meta)==null?void 0:y.clicks)!=null?u:l.value.length)}),c=k(()=>t.value<Ws.length-1||e.value<a.value),i=k(()=>t.value>1||e.value>0);return{clicks:e,clicksElements:l,clicksTotal:a,hasNext:c,hasPrev:i}}const Vh=["id"],Kc=hs({__name:"PrintSlideClick",props:{clicks:null,clicksElements:null,nav:null,route:null},emits:["update:clicksElements"],setup(e,{emit:n}){const t=e,o=Re(t,"clicksElements",n),l=k(()=>({height:`${Vr}px`,width:`${an}px`})),a=qe();$n(()=>import("./DrawingPreview.4f7290b6.js"),[]).then(y=>a.value=y.default);const c=k(()=>t.clicks),i=iy(c,t.nav.currentRoute,t.nav.currentPage),p=k(()=>`${t.route.path.toString().padStart(3,"0")}-${(c.value+1).toString().padStart(2,"0")}`);return de(Y,Os({nav:{...t.nav,...i},configs:vs,themeConfigs:k(()=>vs.themeConfig)})),(y,u)=>{var d;return g(),S("div",{id:v(p),class:"slide-container",style:zs(v(l))},[M(v(ay)),M(v(Xr),{is:(d=e.route)==null?void 0:d.component,"clicks-elements":v(o),"onUpdate:clicks-elements":u[0]||(u[0]=f=>Es(o)?o.value=f:null),clicks:v(c),"clicks-disabled":!1,class:Ss(v(Zr)(e.route)),route:e.route},null,8,["is","clicks-elements","clicks","class","route"]),v(a)?(g(),z(v(a),{key:0,page:+e.route.path},null,8,["page"])):ys("v-if",!0),M(v(ry))],12,Vh)}}}),Kh=hs({__name:"PrintSlide",props:{route:null},setup(e){var a;const n=e;q(Y);const t=Os(((a=n.route.meta)==null?void 0:a.__clicksElements)||[]),o=k(()=>n.route),l=cy(o);return(c,i)=>(g(),S(G,null,[M(Kc,{"clicks-elements":t,"onUpdate:clicks-elements":i[0]||(i[0]=p=>Es(t)?t.value=p:null),clicks:0,nav:v(l),route:v(o)},null,8,["clicks-elements","nav","route"]),v(Mt)?ys("v-if",!0):(g(!0),S(G,{key:0},dt(t.length,p=>(g(),z(Kc,{key:p,clicks:p,nav:v(l),route:v(o)},null,8,["clicks","nav","route"]))),128))],64))}}),zh={id:"print-content"},Yh=hs({__name:"PrintContainer",props:{width:null},setup(e){const n=e;q(Y);const t=k(()=>n.width),o=k(()=>n.width/rn),l=k(()=>t.value/o.value),a=k(()=>l.value<rn?t.value/an:o.value*rn/an),c=Ws.slice(0,-1),i=k(()=>({"select-none":!vs.selectable,"slidev-code-line-numbers":vs.lineNumbers}));return de(Sp,a),(p,y)=>(g(),S("div",{id:"print-container",class:Ss(v(i))},[s("div",zh,[(g(!0),S(G,null,dt(v(c),u=>(g(),z(Kh,{key:u.path,route:u},null,8,["route"]))),128))]),Qs(p.$slots,"controls")],2))}});const Gh=hs({__name:"Print",setup(e){q(Y);function n(t,{slots:o}){if(o.default)return fe("style",o.default())}return yt(()=>{st?document.body.parentNode.classList.add("print"):document.body.parentNode.classList.remove("print")}),(t,o)=>(g(),S(G,null,[M(n,null,{default:T(()=>[r(" @page { size: "+Sn(v(an))+"px "+Sn(v(Vr))+"px; margin: 0px; } ",1)]),_:1}),s("div",{id:"page-root",class:"grid grid-cols-[1fr_max-content]",style:zs(v(Tp))},[M(Yh,{class:"w-full h-full",style:zs({background:"var(--slidev-slide-container-background, black)"}),width:v(xn).width.value},null,8,["style","width"])],4)],64))}});const Zh={class:"slidev-layout end"},Xh={__name:"end",setup(e){return q(Y),(n,t)=>(g(),S("div",Zh," END "))}},Jh=ly(Xh,[["__scopeId","data-v-ab32435f"]]);function zc(e){return e.startsWith("/")?"/typescript-improvements-slides/"+e.slice(1):e}function Qh(e,n=!1){const t=e&&["#","rgb","hsl"].some(l=>e.indexOf(l)===0),o={background:t?e:void 0,color:e&&!t?"white":void 0,backgroundImage:t?void 0:e?n?`linear-gradient(#0005, #0008), url(${zc(e)})`:`url("${zc(e)}")`:void 0,backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"cover"};return o.background||delete o.background,o}const s3={class:"my-auto w-full"},e3=hs({__name:"cover",props:{background:{default:"https://source.unsplash.com/collection/94734566/1920x1080"}},setup(e){const n=e;q(Y);const t=k(()=>Qh(n.background,!0));return(o,l)=>(g(),S("div",{class:"slidev-layout cover text-center",style:zs(v(t))},[s("div",s3,[Qs(o.$slots,"default")])],4))}}),n3=s("h1",null,"TypeScript in frontend projects",-1),t3={__name:"1",setup(e){const n={theme:"seriph",background:"https://source.unsplash.com/collection/94734566/1920x1080",class:"text-center",highlighter:"shiki",lineNumbers:!0,info:`## TypeScript in frontend projects
`,drawings:{persist:!1},exportFilename:"slides.pdf",favicon:"favicon.ico"};return q(Y),(t,o)=>(g(),z(e3,bs(Ds(n)),{default:T(()=>[n3]),_:1},16))}},o3=["href","innerHTML"],l3=["href"],r3=hs({__name:"Link",props:{to:null,title:null},setup(e){return q(Y),(n,t)=>{const o=tt("RouterLink");return!v(st)&&e.title?(g(),z(o,{key:0,to:String(e.to),onClick:t[0]||(t[0]=l=>l.target.blur()),innerHTML:e.title},null,8,["to","innerHTML"])):!v(st)&&!e.title?(g(),z(o,{key:1,to:String(e.to),onClick:t[1]||(t[1]=l=>l.target.blur())},{default:T(()=>[Qs(n.$slots,"default")]),_:3},8,["to"])):v(st)&&e.title?(g(),S("a",{key:2,href:`#${e.to}`,innerHTML:e.title},null,8,o3)):(g(),S("a",{key:3,href:`#${e.to}`},[Qs(n.$slots,"default")],8,l3))}}}),a3=hs({__name:"titles",props:{no:null},setup(e){return(n,t)=>(g(),S("div",null,[+e.no==1?(g(),S(G,{key:0},[r("TypeScript in frontend projects")],64)):+e.no==2?(g(),S(G,{key:1},[r("Table of Contents")],64)):+e.no==3?(g(),S(G,{key:2},[r("Structural typing vs nominal typing")],64)):+e.no==4?(g(),S(G,{key:3},[r("Structural typing")],64)):+e.no==5?(g(),S(G,{key:4},[r("Nominal typing")],64)):+e.no==6?(g(),S(G,{key:5},[r("Modeling types")],64)):+e.no==7?(g(),S(G,{key:6},[r("Types & interfaces")],64)):+e.no==8?(g(),S(G,{key:7},[r("Indexed Access Types")],64)):+e.no==9?(g(),S(G,{key:8},[r("Creating types from other types")],64)):+e.no==10?(g(),S(G,{key:9},[r("Intersection types")],64)):+e.no==11?(g(),S(G,{key:10},[r("undefined")],64)):+e.no==12?(g(),S(G,{key:11},[r("Pick & Omit")],64)):+e.no==13?(g(),S(G,{key:12},[r("undefined")],64)):+e.no==14?(g(),S(G,{key:13},[r("Union types")],64)):+e.no==15?(g(),S(G,{key:14},[r("Discriminated unions and discriminant property")],64)):+e.no==16?(g(),S(G,{key:15},[r("Logical union type combinations")],64)):+e.no==17?(g(),S(G,{key:16},[r("Mapped types")],64)):+e.no==18?(g(),S(G,{key:17},[r("undefined")],64)):+e.no==19?(g(),S(G,{key:18},[r("Conditional types")],64)):+e.no==20?(g(),S(G,{key:19},[r("Using types")],64)):+e.no==21?(g(),S(G,{key:20},[r("Single types and optional keys")],64)):+e.no==22?(g(),S(G,{key:21},[r("Differentiating union types - manual")],64)):+e.no==23?(g(),S(G,{key:22},[r("Differentiating union types - via type guards")],64)):+e.no==24?(g(),S(G,{key:23},[r("Differentiating union types - via discriminant union types")],64)):+e.no==25?(g(),S(G,{key:24},[r("Differentiating union types - via discriminant union types with generics")],64)):+e.no==26?(g(),S(G,{key:25},[r("React and TSX")],64)):+e.no==27?(g(),S(G,{key:26},[r("Deprecate props")],64)):+e.no==28?(g(),S(G,{key:27},[r("undefined")],64)):+e.no==29?(g(),S(G,{key:28},[r("Disallow prop combinations")],64)):+e.no==30?(g(),S(G,{key:29},[r("undefined")],64)):+e.no==31?(g(),S(G,{key:30},[r("Prohibit child components")],64)):ys("v-if",!0)]))}}),c3=hs({__name:"TocList",props:{level:{default:1},list:null,listClass:null},setup(e){const n=e;q(Y);const t=k(()=>[...bf(n.listClass||[]),"slidev-toc-list",`slidev-toc-list-level-${n.level}`]);return(o,l)=>{const a=r3,c=tt("TocList",!0);return e.list&&e.list.length>0?(g(),S("ol",{key:0,class:Ss(v(t))},[(g(!0),S(G,null,dt(e.list,i=>(g(),S("li",{key:i.path,class:Ss(["slidev-toc-item",[{"slidev-toc-item-active":i.active},{"slidev-toc-item-parent-active":i.activeParent}]])},[M(a,{to:i.path},{default:T(()=>[M(v(a3),{no:i.path},null,8,["no"])]),_:2},1032,["to"]),i.children.length>0?(g(),z(c,{key:0,level:e.level+1,list:i.children,"list-class":e.listClass},null,8,["level","list","list-class"])):ys("v-if",!0)],2))),128))],2)):ys("v-if",!0)}}}),i3=hs({__name:"Toc",props:{columns:{default:1},listClass:{default:""},maxDepth:{default:1/0},minDepth:{default:1},mode:{default:"all"}},setup(e){const n=e,t=q(Y);function o(i,p=1){if(p>Number(n.maxDepth))return[];if(p<Number(n.minDepth)){const y=i.find(u=>u.active||u.activeParent);return y?o(y.children,p+1):[]}return i.map(y=>({...y,children:o(y.children,p+1)}))}function l(i){return i.filter(p=>p.active||p.activeParent||p.hasActiveParent).map(p=>({...p,children:l(p.children)}))}function a(i){const p=i.some(y=>y.active||y.activeParent||y.hasActiveParent);return i.filter(()=>p).map(y=>({...y,children:a(y.children)}))}const c=k(()=>{const i=t==null?void 0:t.nav.tree;if(!i)return[];let p=o(i);return n.mode==="onlyCurrentTree"?p=l(p):n.mode==="onlySiblings"&&(p=a(p)),p});return(i,p)=>{const y=c3;return g(),S("div",{class:"slidev-toc",style:zs(`column-count:${e.columns}`)},[M(y,{level:1,list:v(c),"list-class":e.listClass},null,8,["list","list-class"])],4)}}});function Yc(e){return e.startsWith("/")?"/typescript-improvements-slides/"+e.slice(1):e}function p3(e,n=!1){const t=e&&e[0]==="#"&&e.startsWith("rgb"),o={background:t?e:void 0,color:e&&!t?"white":void 0,backgroundImage:t?void 0:e?n?`linear-gradient(#0005, #0008), url(${Yc(e)})`:`url("${Yc(e)}")`:void 0,backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"cover"};return o.background||delete o.background,o}const y3={class:"grid grid-cols-2 w-full h-full auto-rows-fr"},De=hs({__name:"image-right",props:{image:{type:String},class:{type:String}},setup(e){const n=e;q(Y);const t=k(()=>p3(n.image));return(o,l)=>(g(),S("div",y3,[s("div",{class:Ss(["slidev-layout default",n.class])},[Qs(o.$slots,"default")],2),s("div",{class:"w-full w-full",style:zs(v(t))},null,4)]))}}),u3=s("h2",null,"Table of Contents",-1),d3={__name:"2",setup(e){const n={hideInToc:!0,layout:"image-right",image:"https://source.unsplash.com/collection/94734566/1920x1080"};return q(Y),(t,o)=>{const l=i3;return g(),z(De,bs(Ds(n)),{default:T(()=>[u3,M(l,{minDepth:"2",maxDepth:"2"})]),_:1},16)}}},f3={class:"slidev-layout section w-full h-full grid"},m3={class:"my-auto text-center"},sl={__name:"section",setup(e){return q(Y),(n,t)=>(g(),S("div",f3,[s("div",m3,[Qs(n.$slots,"default")])]))}},A3=s("h2",null,"Structural typing vs nominal typing",-1),B3={__name:"3",setup(e){const n={layout:"section",background:"https://source.unsplash.com/collection/94734566/1920x1080",srcSequence:"./chapters/structural-typing-vs-nominal-typing.md"};return q(Y),(t,o)=>(g(),z(sl,bs(Ds(n)),{default:T(()=>[A3]),_:1},16))}},h3={class:"slidev-icon",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},C3=s("path",{fill:"currentColor",d:"M200 32h-36.3a47.8 47.8 0 0 0-71.4 0H56a16 16 0 0 0-16 16v168a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16Zm-72 0a32.1 32.1 0 0 1 32 32H96a32.1 32.1 0 0 1 32-32Zm72 184H56V48h26.8A47.2 47.2 0 0 0 80 64v8a8 8 0 0 0 8 8h80a8 8 0 0 0 8-8v-8a47.2 47.2 0 0 0-2.8-16H200Z"},null,-1),g3=[C3];function D3(e,n){return g(),S("svg",h3,g3)}const v3={name:"ph-clipboard",render:D3},_3={class:"slidev-icon",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},b3=s("path",{fill:"currentColor",d:"M177.8 98.5a8 8 0 0 1-.3 11.3l-58.6 56a8.1 8.1 0 0 1-5.6 2.2a7.9 7.9 0 0 1-5.5-2.2l-29.3-28a8 8 0 1 1 11-11.6l23.8 22.7l53.2-50.7a8 8 0 0 1 11.3.3ZM232 128A104 104 0 1 1 128 24a104.2 104.2 0 0 1 104 104Zm-16 0a88 88 0 1 0-88 88a88.1 88.1 0 0 0 88-88Z"},null,-1),E3=[b3];function w3(e,n){return g(),S("svg",_3,E3)}const k3={name:"ph-check-circle",render:w3};/*! js-yaml 4.1.0 https://github.com/nodeca/js-yaml @license MIT */function py(e){return typeof e>"u"||e===null}function F3(e){return typeof e=="object"&&e!==null}function P3(e){return Array.isArray(e)?e:py(e)?[]:[e]}function x3(e,n){var t,o,l,a;if(n)for(a=Object.keys(n),t=0,o=a.length;t<o;t+=1)l=a[t],e[l]=n[l];return e}function S3(e,n){var t="",o;for(o=0;o<n;o+=1)t+=e;return t}function T3(e){return e===0&&Number.NEGATIVE_INFINITY===1/e}var $3=py,O3=F3,M3=P3,N3=S3,L3=T3,I3=x3,Jr={isNothing:$3,isObject:O3,toArray:M3,repeat:N3,isNegativeZero:L3,extend:I3};function yy(e,n){var t="",o=e.reason||"(unknown reason)";return e.mark?(e.mark.name&&(t+='in "'+e.mark.name+'" '),t+="("+(e.mark.line+1)+":"+(e.mark.column+1)+")",!n&&e.mark.snippet&&(t+=`

`+e.mark.snippet),o+" "+t):o}function Gt(e,n){Error.call(this),this.name="YAMLException",this.reason=e,this.mark=n,this.message=yy(this,!1),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack||""}Gt.prototype=Object.create(Error.prototype);Gt.prototype.constructor=Gt;Gt.prototype.toString=function(n){return this.name+": "+yy(this,n)};var vn=Gt,R3=["kind","multi","resolve","construct","instanceOf","predicate","represent","representName","defaultStyle","styleAliases"],U3=["scalar","sequence","mapping"];function j3(e){var n={};return e!==null&&Object.keys(e).forEach(function(t){e[t].forEach(function(o){n[String(o)]=t})}),n}function q3(e,n){if(n=n||{},Object.keys(n).forEach(function(t){if(R3.indexOf(t)===-1)throw new vn('Unknown option "'+t+'" is met in definition of "'+e+'" YAML type.')}),this.options=n,this.tag=e,this.kind=n.kind||null,this.resolve=n.resolve||function(){return!0},this.construct=n.construct||function(t){return t},this.instanceOf=n.instanceOf||null,this.predicate=n.predicate||null,this.represent=n.represent||null,this.representName=n.representName||null,this.defaultStyle=n.defaultStyle||null,this.multi=n.multi||!1,this.styleAliases=j3(n.styleAliases||null),U3.indexOf(this.kind)===-1)throw new vn('Unknown kind "'+this.kind+'" is specified for "'+e+'" YAML type.')}var se=q3;function Gc(e,n){var t=[];return e[n].forEach(function(o){var l=t.length;t.forEach(function(a,c){a.tag===o.tag&&a.kind===o.kind&&a.multi===o.multi&&(l=c)}),t[l]=o}),t}function H3(){var e={scalar:{},sequence:{},mapping:{},fallback:{},multi:{scalar:[],sequence:[],mapping:[],fallback:[]}},n,t;function o(l){l.multi?(e.multi[l.kind].push(l),e.multi.fallback.push(l)):e[l.kind][l.tag]=e.fallback[l.tag]=l}for(n=0,t=arguments.length;n<t;n+=1)arguments[n].forEach(o);return e}function rr(e){return this.extend(e)}rr.prototype.extend=function(n){var t=[],o=[];if(n instanceof se)o.push(n);else if(Array.isArray(n))o=o.concat(n);else if(n&&(Array.isArray(n.implicit)||Array.isArray(n.explicit)))n.implicit&&(t=t.concat(n.implicit)),n.explicit&&(o=o.concat(n.explicit));else throw new vn("Schema.extend argument should be a Type, [ Type ], or a schema definition ({ implicit: [...], explicit: [...] })");t.forEach(function(a){if(!(a instanceof se))throw new vn("Specified list of YAML types (or a single Type object) contains a non-Type object.");if(a.loadKind&&a.loadKind!=="scalar")throw new vn("There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.");if(a.multi)throw new vn("There is a multi type in the implicit list of a schema. Multi tags can only be listed as explicit.")}),o.forEach(function(a){if(!(a instanceof se))throw new vn("Specified list of YAML types (or a single Type object) contains a non-Type object.")});var l=Object.create(rr.prototype);return l.implicit=(this.implicit||[]).concat(t),l.explicit=(this.explicit||[]).concat(o),l.compiledImplicit=Gc(l,"implicit"),l.compiledExplicit=Gc(l,"explicit"),l.compiledTypeMap=H3(l.compiledImplicit,l.compiledExplicit),l};var W3=rr,V3=new se("tag:yaml.org,2002:str",{kind:"scalar",construct:function(e){return e!==null?e:""}}),K3=new se("tag:yaml.org,2002:seq",{kind:"sequence",construct:function(e){return e!==null?e:[]}}),z3=new se("tag:yaml.org,2002:map",{kind:"mapping",construct:function(e){return e!==null?e:{}}}),Y3=new W3({explicit:[V3,K3,z3]});function G3(e){if(e===null)return!0;var n=e.length;return n===1&&e==="~"||n===4&&(e==="null"||e==="Null"||e==="NULL")}function Z3(){return null}function X3(e){return e===null}var J3=new se("tag:yaml.org,2002:null",{kind:"scalar",resolve:G3,construct:Z3,predicate:X3,represent:{canonical:function(){return"~"},lowercase:function(){return"null"},uppercase:function(){return"NULL"},camelcase:function(){return"Null"},empty:function(){return""}},defaultStyle:"lowercase"});function Q3(e){if(e===null)return!1;var n=e.length;return n===4&&(e==="true"||e==="True"||e==="TRUE")||n===5&&(e==="false"||e==="False"||e==="FALSE")}function sC(e){return e==="true"||e==="True"||e==="TRUE"}function eC(e){return Object.prototype.toString.call(e)==="[object Boolean]"}var nC=new se("tag:yaml.org,2002:bool",{kind:"scalar",resolve:Q3,construct:sC,predicate:eC,represent:{lowercase:function(e){return e?"true":"false"},uppercase:function(e){return e?"TRUE":"FALSE"},camelcase:function(e){return e?"True":"False"}},defaultStyle:"lowercase"});function tC(e){return 48<=e&&e<=57||65<=e&&e<=70||97<=e&&e<=102}function oC(e){return 48<=e&&e<=55}function lC(e){return 48<=e&&e<=57}function rC(e){if(e===null)return!1;var n=e.length,t=0,o=!1,l;if(!n)return!1;if(l=e[t],(l==="-"||l==="+")&&(l=e[++t]),l==="0"){if(t+1===n)return!0;if(l=e[++t],l==="b"){for(t++;t<n;t++)if(l=e[t],l!=="_"){if(l!=="0"&&l!=="1")return!1;o=!0}return o&&l!=="_"}if(l==="x"){for(t++;t<n;t++)if(l=e[t],l!=="_"){if(!tC(e.charCodeAt(t)))return!1;o=!0}return o&&l!=="_"}if(l==="o"){for(t++;t<n;t++)if(l=e[t],l!=="_"){if(!oC(e.charCodeAt(t)))return!1;o=!0}return o&&l!=="_"}}if(l==="_")return!1;for(;t<n;t++)if(l=e[t],l!=="_"){if(!lC(e.charCodeAt(t)))return!1;o=!0}return!(!o||l==="_")}function aC(e){var n=e,t=1,o;if(n.indexOf("_")!==-1&&(n=n.replace(/_/g,"")),o=n[0],(o==="-"||o==="+")&&(o==="-"&&(t=-1),n=n.slice(1),o=n[0]),n==="0")return 0;if(o==="0"){if(n[1]==="b")return t*parseInt(n.slice(2),2);if(n[1]==="x")return t*parseInt(n.slice(2),16);if(n[1]==="o")return t*parseInt(n.slice(2),8)}return t*parseInt(n,10)}function cC(e){return Object.prototype.toString.call(e)==="[object Number]"&&e%1===0&&!Jr.isNegativeZero(e)}var iC=new se("tag:yaml.org,2002:int",{kind:"scalar",resolve:rC,construct:aC,predicate:cC,represent:{binary:function(e){return e>=0?"0b"+e.toString(2):"-0b"+e.toString(2).slice(1)},octal:function(e){return e>=0?"0o"+e.toString(8):"-0o"+e.toString(8).slice(1)},decimal:function(e){return e.toString(10)},hexadecimal:function(e){return e>=0?"0x"+e.toString(16).toUpperCase():"-0x"+e.toString(16).toUpperCase().slice(1)}},defaultStyle:"decimal",styleAliases:{binary:[2,"bin"],octal:[8,"oct"],decimal:[10,"dec"],hexadecimal:[16,"hex"]}}),pC=new RegExp("^(?:[-+]?(?:[0-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$");function yC(e){return!(e===null||!pC.test(e)||e[e.length-1]==="_")}function uC(e){var n,t;return n=e.replace(/_/g,"").toLowerCase(),t=n[0]==="-"?-1:1,"+-".indexOf(n[0])>=0&&(n=n.slice(1)),n===".inf"?t===1?Number.POSITIVE_INFINITY:Number.NEGATIVE_INFINITY:n===".nan"?NaN:t*parseFloat(n,10)}var dC=/^[-+]?[0-9]+e/;function fC(e,n){var t;if(isNaN(e))switch(n){case"lowercase":return".nan";case"uppercase":return".NAN";case"camelcase":return".NaN"}else if(Number.POSITIVE_INFINITY===e)switch(n){case"lowercase":return".inf";case"uppercase":return".INF";case"camelcase":return".Inf"}else if(Number.NEGATIVE_INFINITY===e)switch(n){case"lowercase":return"-.inf";case"uppercase":return"-.INF";case"camelcase":return"-.Inf"}else if(Jr.isNegativeZero(e))return"-0.0";return t=e.toString(10),dC.test(t)?t.replace("e",".e"):t}function mC(e){return Object.prototype.toString.call(e)==="[object Number]"&&(e%1!==0||Jr.isNegativeZero(e))}var AC=new se("tag:yaml.org,2002:float",{kind:"scalar",resolve:yC,construct:uC,predicate:mC,represent:fC,defaultStyle:"lowercase"}),BC=Y3.extend({implicit:[J3,nC,iC,AC]}),hC=BC,uy=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$"),dy=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$");function CC(e){return e===null?!1:uy.exec(e)!==null||dy.exec(e)!==null}function gC(e){var n,t,o,l,a,c,i,p=0,y=null,u,d,f;if(n=uy.exec(e),n===null&&(n=dy.exec(e)),n===null)throw new Error("Date resolve error");if(t=+n[1],o=+n[2]-1,l=+n[3],!n[4])return new Date(Date.UTC(t,o,l));if(a=+n[4],c=+n[5],i=+n[6],n[7]){for(p=n[7].slice(0,3);p.length<3;)p+="0";p=+p}return n[9]&&(u=+n[10],d=+(n[11]||0),y=(u*60+d)*6e4,n[9]==="-"&&(y=-y)),f=new Date(Date.UTC(t,o,l,a,c,i,p)),y&&f.setTime(f.getTime()-y),f}function DC(e){return e.toISOString()}var vC=new se("tag:yaml.org,2002:timestamp",{kind:"scalar",resolve:CC,construct:gC,instanceOf:Date,represent:DC});function _C(e){return e==="<<"||e===null}var bC=new se("tag:yaml.org,2002:merge",{kind:"scalar",resolve:_C}),Qr=`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=
\r`;function EC(e){if(e===null)return!1;var n,t,o=0,l=e.length,a=Qr;for(t=0;t<l;t++)if(n=a.indexOf(e.charAt(t)),!(n>64)){if(n<0)return!1;o+=6}return o%8===0}function wC(e){var n,t,o=e.replace(/[\r\n=]/g,""),l=o.length,a=Qr,c=0,i=[];for(n=0;n<l;n++)n%4===0&&n&&(i.push(c>>16&255),i.push(c>>8&255),i.push(c&255)),c=c<<6|a.indexOf(o.charAt(n));return t=l%4*6,t===0?(i.push(c>>16&255),i.push(c>>8&255),i.push(c&255)):t===18?(i.push(c>>10&255),i.push(c>>2&255)):t===12&&i.push(c>>4&255),new Uint8Array(i)}function kC(e){var n="",t=0,o,l,a=e.length,c=Qr;for(o=0;o<a;o++)o%3===0&&o&&(n+=c[t>>18&63],n+=c[t>>12&63],n+=c[t>>6&63],n+=c[t&63]),t=(t<<8)+e[o];return l=a%3,l===0?(n+=c[t>>18&63],n+=c[t>>12&63],n+=c[t>>6&63],n+=c[t&63]):l===2?(n+=c[t>>10&63],n+=c[t>>4&63],n+=c[t<<2&63],n+=c[64]):l===1&&(n+=c[t>>2&63],n+=c[t<<4&63],n+=c[64],n+=c[64]),n}function FC(e){return Object.prototype.toString.call(e)==="[object Uint8Array]"}var PC=new se("tag:yaml.org,2002:binary",{kind:"scalar",resolve:EC,construct:wC,predicate:FC,represent:kC}),xC=Object.prototype.hasOwnProperty,SC=Object.prototype.toString;function TC(e){if(e===null)return!0;var n=[],t,o,l,a,c,i=e;for(t=0,o=i.length;t<o;t+=1){if(l=i[t],c=!1,SC.call(l)!=="[object Object]")return!1;for(a in l)if(xC.call(l,a))if(!c)c=!0;else return!1;if(!c)return!1;if(n.indexOf(a)===-1)n.push(a);else return!1}return!0}function $C(e){return e!==null?e:[]}var OC=new se("tag:yaml.org,2002:omap",{kind:"sequence",resolve:TC,construct:$C}),MC=Object.prototype.toString;function NC(e){if(e===null)return!0;var n,t,o,l,a,c=e;for(a=new Array(c.length),n=0,t=c.length;n<t;n+=1){if(o=c[n],MC.call(o)!=="[object Object]"||(l=Object.keys(o),l.length!==1))return!1;a[n]=[l[0],o[l[0]]]}return!0}function LC(e){if(e===null)return[];var n,t,o,l,a,c=e;for(a=new Array(c.length),n=0,t=c.length;n<t;n+=1)o=c[n],l=Object.keys(o),a[n]=[l[0],o[l[0]]];return a}var IC=new se("tag:yaml.org,2002:pairs",{kind:"sequence",resolve:NC,construct:LC}),RC=Object.prototype.hasOwnProperty;function UC(e){if(e===null)return!0;var n,t=e;for(n in t)if(RC.call(t,n)&&t[n]!==null)return!1;return!0}function jC(e){return e!==null?e:{}}var qC=new se("tag:yaml.org,2002:set",{kind:"mapping",resolve:UC,construct:jC});hC.extend({implicit:[vC,bC],explicit:[PC,OC,IC,qC]});function Zc(e){return e===48?"\0":e===97?"\x07":e===98?"\b":e===116||e===9?"	":e===110?`
`:e===118?"\v":e===102?"\f":e===114?"\r":e===101?"\x1B":e===32?" ":e===34?'"':e===47?"/":e===92?"\\":e===78?"\x85":e===95?"\xA0":e===76?"\u2028":e===80?"\u2029":""}var HC=new Array(256),WC=new Array(256);for(var qn=0;qn<256;qn++)HC[qn]=Zc(qn)?1:0,WC[qn]=Zc(qn);function VC(e){return Array.from(new Set(e))}function Xc(...e){let n,t,o;e.length===1?(n=0,o=1,[t]=e):[n,t,o=1]=e;const l=[];let a=n;for(;a<t;)l.push(a),a+=o||1;return l}function KC(e,n){if(!n||n==="all"||n==="*")return Xc(1,e+1);const t=[];for(const o of n.split(/[,;]/g))if(!o.includes("-"))t.push(+o);else{const[l,a]=o.split("-",2);t.push(...Xc(+l,a?+a+1:e+1))}return VC(t).filter(o=>o<=e).sort((o,l)=>o-l)}const zC=["title"],Ms=hs({__name:"CodeBlockWrapper",props:{ranges:{default:()=>[]},at:{type:Number,default:void 0},maxHeight:{type:String,default:void 0}},setup(e){const n=e;q(Y);const t=q(xt),o=q(Dn),l=q(St);function a(d=5){const f=[],A="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",m=A.length;for(let C=0;C<d;C++)f.push(A.charAt(Math.floor(Math.random()*m)));return f.join("")}const c=W(),i=Mn();ut(()=>{const d=n.at==null?o==null?void 0:o.value.length:n.at,f=k(()=>l!=null&&l.value?n.ranges.length-1:Math.min(Math.max(0,((t==null?void 0:t.value)||0)-(d||0)),n.ranges.length-1)),A=k(()=>n.ranges[f.value]||"");if(n.ranges.length>=2&&!(l!=null&&l.value)){const m=a(),C=Ef(n.ranges.length-1).map(D=>m+D);o!=null&&o.value&&(o.value.push(...C),Zo(()=>C.forEach(D=>Gl(o.value,D)),i))}yt(()=>{if(!c.value)return;const C=c.value.querySelector(".shiki-dark")?Array.from(c.value.querySelectorAll(".shiki")):[c.value];for(const D of C){const _=Array.from(D.querySelectorAll(".line")),E=KC(_.length,A.value);if(_.forEach((b,F)=>{const N=E.includes(F+1);b.classList.toggle(hn,!0),b.classList.toggle("highlighted",N),b.classList.toggle("dishonored",!N)}),n.maxHeight){const b=D.querySelector(".line.highlighted");b&&b.scrollIntoView({behavior:"smooth",block:"center"})}}})});const{copied:p,copy:y}=Gf();function u(){var f,A;const d=(A=(f=c.value)==null?void 0:f.querySelector(".slidev-code"))==null?void 0:A.textContent;d&&y(d)}return(d,f)=>{const A=k3,m=v3;return g(),S("div",{ref_key:"el",ref:c,class:"slidev-code-wrapper relative group",style:zs({"max-height":n.maxHeight,"overflow-y":n.maxHeight?"scroll":void 0})},[Qs(d.$slots,"default"),v(vs).codeCopy?(g(),S("button",{key:0,class:"slidev-code-copy absolute top-0 right-0 transition opacity-0 group-hover:opacity-20 hover:!opacity-100",title:v(p)?"Copied":"Copy",onClick:f[0]||(f[0]=C=>u())},[v(p)?(g(),z(A,{key:0,class:"p-2 w-8 h-8"})):(g(),z(m,{key:1,class:"p-2 w-8 h-8"}))],8,zC)):ys("v-if",!0)],4)}}}),YC={class:"slidev-layout two-columns w-full h-full"},GC={class:"col-span-2"},ZC={class:"grid grid-cols-2 gap-4"},ve=hs({__name:"two-cols-header-with-gap",props:{class:{type:String}},setup(e){const n=e;return q(Y),(t,o)=>(g(),S("div",YC,[s("div",GC,[Qs(t.$slots,"default")]),s("div",ZC,[s("div",{class:Ss(["col-left",n.class])},[Qs(t.$slots,"left")],2),s("div",{class:Ss(["col-right",n.class])},[Qs(t.$slots,"right")],2)])]))}}),XC=s("h3",null,"Structural typing",-1),JC=s("p",null,"Structural typing means that types with the same structure are compatible regardless of name. TypeScript uses structural typing by default.",-1),QC=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"type"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"MacBook"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#B8A965"}},"name"),s("span",{style:{color:"#CB7676"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"string"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#B8A965"}},"colour"),s("span",{style:{color:"#CB7676"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"string"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#B8A965"}},"numberOfFeet"),s("span",{style:{color:"#CB7676"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"number"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#B8A965"}},"hasFans"),s("span",{style:{color:"#CB7676"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"boolean"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#B8A965"}},"canBeInARoom"),s("span",{style:{color:"#CB7676"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"boolean"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"};")]),r(`
`),s("span",{class:"line"}),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"type"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"Animal"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#B8A965"}},"name"),s("span",{style:{color:"#CB7676"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"string"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#B8A965"}},"colour"),s("span",{style:{color:"#CB7676"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"string"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#B8A965"}},"numberOfFeet"),s("span",{style:{color:"#CB7676"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"number"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#B8A965"}},"hasFans"),s("span",{style:{color:"#CB7676"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"boolean"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#B8A965"}},"canBeInARoom"),s("span",{style:{color:"#CB7676"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"boolean"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"};")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"type"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"MacBook"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8C862B"}},"name"),s("span",{style:{color:"#AB5959"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"string"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8C862B"}},"colour"),s("span",{style:{color:"#AB5959"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"string"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8C862B"}},"numberOfFeet"),s("span",{style:{color:"#AB5959"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"number"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8C862B"}},"hasFans"),s("span",{style:{color:"#AB5959"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"boolean"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8C862B"}},"canBeInARoom"),s("span",{style:{color:"#AB5959"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"boolean"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"};")]),r(`
`),s("span",{class:"line"}),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"type"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"Animal"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8C862B"}},"name"),s("span",{style:{color:"#AB5959"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"string"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8C862B"}},"colour"),s("span",{style:{color:"#AB5959"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"string"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8C862B"}},"numberOfFeet"),s("span",{style:{color:"#AB5959"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"number"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8C862B"}},"hasFans"),s("span",{style:{color:"#AB5959"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"boolean"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8C862B"}},"canBeInARoom"),s("span",{style:{color:"#AB5959"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"boolean"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"};")])])])],-1),sg=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"const"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"macBookPro"),s("span",{style:{color:"#CB7676"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"MacBook"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#E0A569"}},"name"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},"'Mac'"),s("span",{style:{color:"#858585"}},",")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#E0A569"}},"colour"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},"'gray'"),s("span",{style:{color:"#858585"}},",")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#E0A569"}},"numberOfFeet"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#6394BF"}},"4"),s("span",{style:{color:"#858585"}},",")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#E0A569"}},"hasFans"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#4D9375"}},"true"),s("span",{style:{color:"#858585"}},",")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#E0A569"}},"canBeInARoom"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#4D9375"}},"true"),s("span",{style:{color:"#858585"}},",")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"};")]),r(`
`),s("span",{class:"line"}),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"const"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"elephant"),s("span",{style:{color:"#CB7676"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"Animal"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#E0A569"}},"name"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},"'Benjamin'"),s("span",{style:{color:"#858585"}},",")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#E0A569"}},"colour"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},"'gray'"),s("span",{style:{color:"#858585"}},",")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#E0A569"}},"numberOfFeet"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#6394BF"}},"4"),s("span",{style:{color:"#858585"}},",")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#E0A569"}},"hasFans"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#4D9375"}},"true"),s("span",{style:{color:"#858585"}},",")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#E0A569"}},"canBeInARoom"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#4D9375"}},"true"),s("span",{style:{color:"#858585"}},",")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"};")]),r(`
`),s("span",{class:"line"}),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"const"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"listOfMacBooks"),s("span",{style:{color:"#CB7676"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"MacBook"),s("span",{style:{color:"#858585"}},"[]"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"[")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#B8A965"}},"macBookPro"),s("span",{style:{color:"#858585"}},",")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#B8A965"}},"elephant"),s("span",{style:{color:"#858585"}},","),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#758575"}},"// no error")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"];")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"const"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"macBookPro"),s("span",{style:{color:"#AB5959"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"MacBook"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#B58451"}},"name"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},"'Mac'"),s("span",{style:{color:"#8E8F8B"}},",")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#B58451"}},"colour"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},"'gray'"),s("span",{style:{color:"#8E8F8B"}},",")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#B58451"}},"numberOfFeet"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#296AA3"}},"4"),s("span",{style:{color:"#8E8F8B"}},",")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#B58451"}},"hasFans"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#1C6B48"}},"true"),s("span",{style:{color:"#8E8F8B"}},",")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#B58451"}},"canBeInARoom"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#1C6B48"}},"true"),s("span",{style:{color:"#8E8F8B"}},",")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"};")]),r(`
`),s("span",{class:"line"}),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"const"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"elephant"),s("span",{style:{color:"#AB5959"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"Animal"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#B58451"}},"name"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},"'Benjamin'"),s("span",{style:{color:"#8E8F8B"}},",")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#B58451"}},"colour"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},"'gray'"),s("span",{style:{color:"#8E8F8B"}},",")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#B58451"}},"numberOfFeet"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#296AA3"}},"4"),s("span",{style:{color:"#8E8F8B"}},",")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#B58451"}},"hasFans"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#1C6B48"}},"true"),s("span",{style:{color:"#8E8F8B"}},",")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#B58451"}},"canBeInARoom"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#1C6B48"}},"true"),s("span",{style:{color:"#8E8F8B"}},",")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"};")]),r(`
`),s("span",{class:"line"}),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"const"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"listOfMacBooks"),s("span",{style:{color:"#AB5959"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"MacBook"),s("span",{style:{color:"#8E8F8B"}},"[]"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"[")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8C862B"}},"macBookPro"),s("span",{style:{color:"#8E8F8B"}},",")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8C862B"}},"elephant"),s("span",{style:{color:"#8E8F8B"}},","),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A0ADA0"}},"// no error")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"];")])])])],-1),eg={__name:"4",setup(e){const n={layout:"two-cols-header-with-gap",hideInToc:!0,srcSequence:"./chapters/structural-typing-vs-nominal-typing.md"};return q(Y),(t,o)=>{const l=Ms;return g(),z(ve,bs(Ds(n)),{left:T(a=>[M(l,cs({},{ranges:[""]}),{default:T(()=>[QC]),_:1},16)]),right:T(a=>[M(l,cs({},{ranges:[""]}),{default:T(()=>[sg]),_:1},16)]),default:T(()=>[XC,JC]),_:1},16)}}},ng={class:"slidev-layout default"},fy={__name:"default",setup(e){return q(Y),(n,t)=>(g(),S("div",ng,[Qs(n.$slots,"default")]))}},tg=s("h3",null,"Nominal typing",-1),og=s("p",null,"Nominal typing means that each type is unique and types can not be used interchangeably even when structurally identically. Compatibility can be created via interfaces or inheritance.",-1),lg=s("p",null,"Nominal Typing is widely used in languages like Java or C#. Flow uses a mix of nominal and structural typing. Nominal Typing can be emulated in TypeScript via Branded Types.",-1),rg=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"public"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"interface"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"IMacBookAnimal"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{}")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"public"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"record"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"MacBook"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#DBD7CA"}},"String colour"),s("span",{style:{color:"#858585"}},")"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"implements"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"IMacBookAnimal"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{}")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"public"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"record"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"Animal"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#DBD7CA"}},"String colour"),s("span",{style:{color:"#858585"}},")"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"implements"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"IMacBookAnimal"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{}")]),r(`
`),s("span",{class:"line"}),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"public"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"class"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"NominalTypingExample"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#CB7676"}},"public"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"static"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"void"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"main"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#CB7676"}},"String"),s("span",{style:{color:"#858585"}},"[]"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"args"),s("span",{style:{color:"#858585"}},")"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#CB7676"}},"var"),s("span",{style:{color:"#D4976C"}}," "),s("span",{style:{color:"#B8A965"}},"macBookPro"),s("span",{style:{color:"#D4976C"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#4D9375"}},"new"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"MacBook"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#C98A7D"}},'"gray"'),s("span",{style:{color:"#858585"}},");")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#CB7676"}},"var"),s("span",{style:{color:"#D4976C"}}," "),s("span",{style:{color:"#B8A965"}},"elephant"),s("span",{style:{color:"#D4976C"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#4D9375"}},"new"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"Animal"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#C98A7D"}},'"gray"'),s("span",{style:{color:"#858585"}},");")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"    "),s("span",{style:{color:"#758575"}},"// List<MacBook> listOfMacBooks = Arrays.asList(macBookPro, elephant); // error")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    List"),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#CB7676"}},"IMacBookAnimal"),s("span",{style:{color:"#858585"}},">"),s("span",{style:{color:"#D4976C"}}," "),s("span",{style:{color:"#B8A965"}},"listOfMacBooks"),s("span",{style:{color:"#D4976C"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"Arrays"),s("span",{style:{color:"#858585"}},"."),s("span",{style:{color:"#A1B567"}},"asList"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#DBD7CA"}},"macBookPro"),s("span",{style:{color:"#858585"}},","),s("span",{style:{color:"#DBD7CA"}}," elephant"),s("span",{style:{color:"#858585"}},");"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#758575"}},"// no error")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"}")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"}")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"public"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"interface"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"IMacBookAnimal"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{}")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"public"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"record"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"MacBook"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#393A34"}},"String colour"),s("span",{style:{color:"#8E8F8B"}},")"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"implements"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"IMacBookAnimal"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{}")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"public"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"record"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"Animal"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#393A34"}},"String colour"),s("span",{style:{color:"#8E8F8B"}},")"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"implements"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"IMacBookAnimal"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{}")]),r(`
`),s("span",{class:"line"}),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"public"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"class"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"NominalTypingExample"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#AB5959"}},"public"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"static"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"void"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"main"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#AB5959"}},"String"),s("span",{style:{color:"#8E8F8B"}},"[]"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"args"),s("span",{style:{color:"#8E8F8B"}},")"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#AB5959"}},"var"),s("span",{style:{color:"#A65E2B"}}," "),s("span",{style:{color:"#8C862B"}},"macBookPro"),s("span",{style:{color:"#A65E2B"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#1C6B48"}},"new"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"MacBook"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#B56959"}},'"gray"'),s("span",{style:{color:"#8E8F8B"}},");")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#AB5959"}},"var"),s("span",{style:{color:"#A65E2B"}}," "),s("span",{style:{color:"#8C862B"}},"elephant"),s("span",{style:{color:"#A65E2B"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#1C6B48"}},"new"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"Animal"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#B56959"}},'"gray"'),s("span",{style:{color:"#8E8F8B"}},");")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"    "),s("span",{style:{color:"#A0ADA0"}},"// List<MacBook> listOfMacBooks = Arrays.asList(macBookPro, elephant); // error")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    List"),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#AB5959"}},"IMacBookAnimal"),s("span",{style:{color:"#8E8F8B"}},">"),s("span",{style:{color:"#A65E2B"}}," "),s("span",{style:{color:"#8C862B"}},"listOfMacBooks"),s("span",{style:{color:"#A65E2B"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"Arrays"),s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#6C7834"}},"asList"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#393A34"}},"macBookPro"),s("span",{style:{color:"#8E8F8B"}},","),s("span",{style:{color:"#393A34"}}," elephant"),s("span",{style:{color:"#8E8F8B"}},");"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A0ADA0"}},"// no error")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"}")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),ag={__name:"5",setup(e){const n={hideInToc:!0,srcSequence:"./chapters/structural-typing-vs-nominal-typing.md"};return q(Y),(t,o)=>{const l=Ms;return g(),z(fy,bs(Ds(n)),{default:T(()=>[tg,og,lg,M(l,cs({},{ranges:[""]}),{default:T(()=>[rg]),_:1},16)]),_:1},16)}}},cg=s("h2",null,"Modeling types",-1),ig={__name:"6",setup(e){const n={layout:"section",srcSequence:"./chapters/modeling-types.md"};return q(Y),(t,o)=>(g(),z(sl,bs(Ds(n)),{default:T(()=>[cg]),_:1},16))}},pg=s("h3",null,"Types & interfaces",-1),yg=s("p",null,"Types and interfaces can be utilized to create shapes for data. Both can be used interchangeably in a lot of cases, but they differ in syntax and mutability. Interfaces are mutable, while types are not. Unlike interfaces, types can also be used for primitives like number or string.",-1),ug=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"type"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"CustomerID"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"string"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"}),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"type"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"Customer1"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#B8A965"}},"id"),s("span",{style:{color:"#CB7676"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"CustomerID"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#B8A965"}},"firstName"),s("span",{style:{color:"#CB7676"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"string"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#B8A965"}},"lastName"),s("span",{style:{color:"#CB7676"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"string"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"};")]),r(`
`),s("span",{class:"line"}),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"interface"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"Customer2"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#B8A965"}},"id"),s("span",{style:{color:"#CB7676"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"CustomerID"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#B8A965"}},"firstName"),s("span",{style:{color:"#CB7676"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"string"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#B8A965"}},"lastName"),s("span",{style:{color:"#CB7676"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"string"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"}")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"type"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"CustomerID"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"string"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"}),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"type"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"Customer1"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8C862B"}},"id"),s("span",{style:{color:"#AB5959"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"CustomerID"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8C862B"}},"firstName"),s("span",{style:{color:"#AB5959"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"string"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8C862B"}},"lastName"),s("span",{style:{color:"#AB5959"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"string"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"};")]),r(`
`),s("span",{class:"line"}),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"interface"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"Customer2"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8C862B"}},"id"),s("span",{style:{color:"#AB5959"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"CustomerID"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8C862B"}},"firstName"),s("span",{style:{color:"#AB5959"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"string"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8C862B"}},"lastName"),s("span",{style:{color:"#AB5959"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"string"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),dg={__name:"7",setup(e){const n={layout:"image-right",image:"https://source.unsplash.com/collection/94734566/1920x1080",srcSequence:"./chapters/modeling-types.md"};return q(Y),(t,o)=>{const l=Ms;return g(),z(De,bs(Ds(n)),{default:T(()=>[pg,yg,M(l,cs({},{ranges:[""]}),{default:T(()=>[ug]),_:1},16)]),_:1},16)}}},fg=s("h3",null,"Indexed Access Types",-1),mg=s("p",null,"Keys/members of types and interfaces can be accessed via bracket notation in other types and interfaces or when creating variables. Type information of referenced types are preserved.",-1),Ag=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"type"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"CustomerID"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"string"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"}),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"type"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"Customer1"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#B8A965"}},"id"),s("span",{style:{color:"#CB7676"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"CustomerID"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#B8A965"}},"firstName"),s("span",{style:{color:"#CB7676"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"string"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#B8A965"}},"lastName"),s("span",{style:{color:"#CB7676"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"string"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"};")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"const"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"customerLastName"),s("span",{style:{color:"#CB7676"}},":")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#A1B567"}},"Customer1"),s("span",{style:{color:"#858585"}},"["),s("span",{style:{color:"#C98A7D"}},"'lastName'"),s("span",{style:{color:"#858585"}},"]"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},"'Larry'"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"}),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"interface"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"Customer2"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#B8A965"}},"id"),s("span",{style:{color:"#CB7676"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"CustomerID"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#B8A965"}},"firstName"),s("span",{style:{color:"#CB7676"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"string"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#B8A965"}},"lastName"),s("span",{style:{color:"#CB7676"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"string"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"}")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"const"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"customerLastName2"),s("span",{style:{color:"#CB7676"}},":")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#A1B567"}},"Customer2"),s("span",{style:{color:"#858585"}},"["),s("span",{style:{color:"#C98A7D"}},"'lastName'"),s("span",{style:{color:"#858585"}},"]"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},"'Peter'"),s("span",{style:{color:"#858585"}},";")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"type"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"CustomerID"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"string"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"}),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"type"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"Customer1"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8C862B"}},"id"),s("span",{style:{color:"#AB5959"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"CustomerID"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8C862B"}},"firstName"),s("span",{style:{color:"#AB5959"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"string"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8C862B"}},"lastName"),s("span",{style:{color:"#AB5959"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"string"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"};")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"const"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"customerLastName"),s("span",{style:{color:"#AB5959"}},":")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#6C7834"}},"Customer1"),s("span",{style:{color:"#8E8F8B"}},"["),s("span",{style:{color:"#B56959"}},"'lastName'"),s("span",{style:{color:"#8E8F8B"}},"]"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},"'Larry'"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"}),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"interface"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"Customer2"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8C862B"}},"id"),s("span",{style:{color:"#AB5959"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"CustomerID"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8C862B"}},"firstName"),s("span",{style:{color:"#AB5959"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"string"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8C862B"}},"lastName"),s("span",{style:{color:"#AB5959"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"string"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"}")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"const"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"customerLastName2"),s("span",{style:{color:"#AB5959"}},":")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#6C7834"}},"Customer2"),s("span",{style:{color:"#8E8F8B"}},"["),s("span",{style:{color:"#B56959"}},"'lastName'"),s("span",{style:{color:"#8E8F8B"}},"]"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},"'Peter'"),s("span",{style:{color:"#8E8F8B"}},";")])])])],-1),Bg={__name:"8",setup(e){const n={layout:"image-right",image:"https://source.unsplash.com/collection/94734566/1920x1080",srcSequence:"./chapters/modeling-types.md"};return q(Y),(t,o)=>{const l=Ms;return g(),z(De,bs(Ds(n)),{default:T(()=>[fg,mg,M(l,cs({},{ranges:[""]}),{default:T(()=>[Ag]),_:1},16)]),_:1},16)}}},hg=s("h3",null,"Creating types from other types",-1),Cg=s("p",null,"Example payload from an API-endpoint",-1),gg=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"[")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"{")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},'"'),s("span",{style:{color:"#E0A569"}},"id"),s("span",{style:{color:"#858585"}},'"'),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},'"B122"'),s("span",{style:{color:"#858585"}},",")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},'"'),s("span",{style:{color:"#E0A569"}},"firstName"),s("span",{style:{color:"#858585"}},'"'),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},'"Sherlock"'),s("span",{style:{color:"#858585"}},",")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},'"'),s("span",{style:{color:"#E0A569"}},"lastName"),s("span",{style:{color:"#858585"}},'"'),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},'"Holmes"'),s("span",{style:{color:"#858585"}},",")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},'"'),s("span",{style:{color:"#E0A569"}},"house"),s("span",{style:{color:"#858585"}},'"'),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},'"221B"'),s("span",{style:{color:"#858585"}},",")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},'"'),s("span",{style:{color:"#E0A569"}},"street"),s("span",{style:{color:"#858585"}},'"'),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},'"Baker Street"'),s("span",{style:{color:"#858585"}},",")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},'"'),s("span",{style:{color:"#E0A569"}},"city"),s("span",{style:{color:"#858585"}},'"'),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},'"London"'),s("span",{style:{color:"#858585"}},",")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},'"'),s("span",{style:{color:"#E0A569"}},"postcode"),s("span",{style:{color:"#858585"}},'"'),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},'"NW16XE"'),s("span",{style:{color:"#858585"}},",")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},'"'),s("span",{style:{color:"#E0A569"}},"defaultedPayments"),s("span",{style:{color:"#858585"}},'"'),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#6394BF"}},"1"),s("span",{style:{color:"#858585"}},",")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},'"'),s("span",{style:{color:"#E0A569"}},"missedPayments"),s("span",{style:{color:"#858585"}},'"'),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#6394BF"}},"50")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"}")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"]")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"[")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"{")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},'"'),s("span",{style:{color:"#B58451"}},"id"),s("span",{style:{color:"#8E8F8B"}},'"'),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},'"B122"'),s("span",{style:{color:"#8E8F8B"}},",")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},'"'),s("span",{style:{color:"#B58451"}},"firstName"),s("span",{style:{color:"#8E8F8B"}},'"'),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},'"Sherlock"'),s("span",{style:{color:"#8E8F8B"}},",")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},'"'),s("span",{style:{color:"#B58451"}},"lastName"),s("span",{style:{color:"#8E8F8B"}},'"'),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},'"Holmes"'),s("span",{style:{color:"#8E8F8B"}},",")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},'"'),s("span",{style:{color:"#B58451"}},"house"),s("span",{style:{color:"#8E8F8B"}},'"'),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},'"221B"'),s("span",{style:{color:"#8E8F8B"}},",")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},'"'),s("span",{style:{color:"#B58451"}},"street"),s("span",{style:{color:"#8E8F8B"}},'"'),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},'"Baker Street"'),s("span",{style:{color:"#8E8F8B"}},",")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},'"'),s("span",{style:{color:"#B58451"}},"city"),s("span",{style:{color:"#8E8F8B"}},'"'),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},'"London"'),s("span",{style:{color:"#8E8F8B"}},",")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},'"'),s("span",{style:{color:"#B58451"}},"postcode"),s("span",{style:{color:"#8E8F8B"}},'"'),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},'"NW16XE"'),s("span",{style:{color:"#8E8F8B"}},",")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},'"'),s("span",{style:{color:"#B58451"}},"defaultedPayments"),s("span",{style:{color:"#8E8F8B"}},'"'),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#296AA3"}},"1"),s("span",{style:{color:"#8E8F8B"}},",")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},'"'),s("span",{style:{color:"#B58451"}},"missedPayments"),s("span",{style:{color:"#8E8F8B"}},'"'),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#296AA3"}},"50")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"}")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"]")])])])],-1),Dg=s("p",null,"Corresponding monolithic type",-1),vg=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"type"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"Customer"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#B8A965"}},"id"),s("span",{style:{color:"#CB7676"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"string"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#B8A965"}},"firstName"),s("span",{style:{color:"#CB7676"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"string"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#B8A965"}},"lastName"),s("span",{style:{color:"#CB7676"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"string"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#B8A965"}},"house"),s("span",{style:{color:"#CB7676"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"string"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#B8A965"}},"street"),s("span",{style:{color:"#CB7676"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"string"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#B8A965"}},"city"),s("span",{style:{color:"#CB7676"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"string"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#B8A965"}},"postcode"),s("span",{style:{color:"#CB7676"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"string"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#B8A965"}},"defaultedPayments"),s("span",{style:{color:"#CB7676"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"number"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#B8A965"}},"missedPayments"),s("span",{style:{color:"#CB7676"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"number"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"};")]),r(`
`),s("span",{class:"line"}),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"type"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"CustomerList"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"Customer"),s("span",{style:{color:"#858585"}},"[];")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"type"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"Customer"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8C862B"}},"id"),s("span",{style:{color:"#AB5959"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"string"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8C862B"}},"firstName"),s("span",{style:{color:"#AB5959"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"string"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8C862B"}},"lastName"),s("span",{style:{color:"#AB5959"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"string"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8C862B"}},"house"),s("span",{style:{color:"#AB5959"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"string"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8C862B"}},"street"),s("span",{style:{color:"#AB5959"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"string"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8C862B"}},"city"),s("span",{style:{color:"#AB5959"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"string"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8C862B"}},"postcode"),s("span",{style:{color:"#AB5959"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"string"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8C862B"}},"defaultedPayments"),s("span",{style:{color:"#AB5959"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"number"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8C862B"}},"missedPayments"),s("span",{style:{color:"#AB5959"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"number"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"};")]),r(`
`),s("span",{class:"line"}),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"type"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"CustomerList"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"Customer"),s("span",{style:{color:"#8E8F8B"}},"[];")])])])],-1),_g={__name:"9",setup(e){const n={layout:"two-cols-header-with-gap",srcSequence:"./chapters/modeling-types.md"};return q(Y),(t,o)=>{const l=Ms;return g(),z(ve,bs(Ds(n)),{left:T(a=>[Cg,M(l,cs({},{ranges:[""]}),{default:T(()=>[gg]),_:1},16)]),right:T(a=>[Dg,M(l,cs({},{ranges:[""]}),{default:T(()=>[vg]),_:1},16)]),default:T(()=>[hg]),_:1},16)}}},bg=s("h3",null,"Intersection types",-1),Eg=s("p",null,"Intersection types can be used to compose types from subtypes or other, unrelated types.",-1),wg=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"type"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"CustomerDefaultFields"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#B8A965"}},"id"),s("span",{style:{color:"#CB7676"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"string"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#B8A965"}},"firstName"),s("span",{style:{color:"#CB7676"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"string"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#B8A965"}},"lastName"),s("span",{style:{color:"#CB7676"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"string"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"};")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"type"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"CustomerAddress"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#B8A965"}},"house"),s("span",{style:{color:"#CB7676"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"string"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#B8A965"}},"street"),s("span",{style:{color:"#CB7676"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"string"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#B8A965"}},"city"),s("span",{style:{color:"#CB7676"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"string"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#B8A965"}},"postcode"),s("span",{style:{color:"#CB7676"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"string"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"};")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"type"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"CustomerPaymentStatus"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#B8A965"}},"defaultedPayments"),s("span",{style:{color:"#CB7676"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"number"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#B8A965"}},"missedPayments"),s("span",{style:{color:"#CB7676"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"number"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"};")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"type"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"Customer"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"CustomerDefaultFields")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#CB7676"}},"&"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"CustomerAddress"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"type"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"CustomerWithPaymentData"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"=")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#CB7676"}},"&"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"CustomerDefaultFields")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#CB7676"}},"&"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"CustomerPaymentStatus"),s("span",{style:{color:"#858585"}},";")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"type"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"CustomerDefaultFields"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8C862B"}},"id"),s("span",{style:{color:"#AB5959"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"string"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8C862B"}},"firstName"),s("span",{style:{color:"#AB5959"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"string"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8C862B"}},"lastName"),s("span",{style:{color:"#AB5959"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"string"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"};")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"type"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"CustomerAddress"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8C862B"}},"house"),s("span",{style:{color:"#AB5959"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"string"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8C862B"}},"street"),s("span",{style:{color:"#AB5959"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"string"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8C862B"}},"city"),s("span",{style:{color:"#AB5959"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"string"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8C862B"}},"postcode"),s("span",{style:{color:"#AB5959"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"string"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"};")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"type"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"CustomerPaymentStatus"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8C862B"}},"defaultedPayments"),s("span",{style:{color:"#AB5959"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"number"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8C862B"}},"missedPayments"),s("span",{style:{color:"#AB5959"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"number"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"};")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"type"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"Customer"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"CustomerDefaultFields")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#AB5959"}},"&"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"CustomerAddress"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"type"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"CustomerWithPaymentData"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"=")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#AB5959"}},"&"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"CustomerDefaultFields")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#AB5959"}},"&"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"CustomerPaymentStatus"),s("span",{style:{color:"#8E8F8B"}},";")])])])],-1),kg={__name:"10",setup(e){const n={layout:"image-right",image:"https://source.unsplash.com/collection/94734566/1920x1080",srcSequence:"./chapters/modeling-types.md"};return q(Y),(t,o)=>{const l=Ms;return g(),z(De,bs(Ds(n)),{default:T(()=>[bg,Eg,M(l,cs({},{ranges:[""]}),{default:T(()=>[wg]),_:1},16)]),_:1},16)}}},Fg=s("p",null,[r("The same result can be achieved via "),s("code",null,"extend"),r(" when using interfaces.")],-1),Pg=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"interface"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"CustomerDefaultFields"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#B8A965"}},"id"),s("span",{style:{color:"#CB7676"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"string"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#B8A965"}},"firstName"),s("span",{style:{color:"#CB7676"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"string"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#B8A965"}},"lastName"),s("span",{style:{color:"#CB7676"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"string"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"}")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"interface"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"CustomerAddress"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#B8A965"}},"house"),s("span",{style:{color:"#CB7676"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"string"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#B8A965"}},"street"),s("span",{style:{color:"#CB7676"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"string"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#B8A965"}},"city"),s("span",{style:{color:"#CB7676"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"string"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#B8A965"}},"postcode"),s("span",{style:{color:"#CB7676"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"string"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"}")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"interface"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"CustomerPaymentStatus"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#B8A965"}},"defaultedPayments"),s("span",{style:{color:"#CB7676"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"number"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#B8A965"}},"missedPayments"),s("span",{style:{color:"#CB7676"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"number"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"}")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"interface"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"Customer"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"extends")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#A1B567"}},"CustomerDefaultFields"),s("span",{style:{color:"#858585"}},",")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#A1B567"}},"CustomerAddress"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{}")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"interface"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"CustomerWithPaymentData"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"extends")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#A1B567"}},"CustomerDefaultFields"),s("span",{style:{color:"#858585"}},",")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#A1B567"}},"CustomerAddress"),s("span",{style:{color:"#858585"}},",")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#A1B567"}},"CustomerPaymentStatus"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{}")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"interface"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"CustomerDefaultFields"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8C862B"}},"id"),s("span",{style:{color:"#AB5959"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"string"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8C862B"}},"firstName"),s("span",{style:{color:"#AB5959"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"string"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8C862B"}},"lastName"),s("span",{style:{color:"#AB5959"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"string"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"}")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"interface"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"CustomerAddress"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8C862B"}},"house"),s("span",{style:{color:"#AB5959"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"string"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8C862B"}},"street"),s("span",{style:{color:"#AB5959"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"string"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8C862B"}},"city"),s("span",{style:{color:"#AB5959"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"string"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8C862B"}},"postcode"),s("span",{style:{color:"#AB5959"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"string"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"}")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"interface"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"CustomerPaymentStatus"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8C862B"}},"defaultedPayments"),s("span",{style:{color:"#AB5959"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"number"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8C862B"}},"missedPayments"),s("span",{style:{color:"#AB5959"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"number"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"}")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"interface"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"Customer"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"extends")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#6C7834"}},"CustomerDefaultFields"),s("span",{style:{color:"#8E8F8B"}},",")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#6C7834"}},"CustomerAddress"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{}")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"interface"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"CustomerWithPaymentData"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"extends")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#6C7834"}},"CustomerDefaultFields"),s("span",{style:{color:"#8E8F8B"}},",")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#6C7834"}},"CustomerAddress"),s("span",{style:{color:"#8E8F8B"}},",")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#6C7834"}},"CustomerPaymentStatus"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{}")])])])],-1),xg={__name:"11",setup(e){const n={layout:"image-right",image:"https://source.unsplash.com/collection/94734566/1920x1080",srcSequence:"./chapters/modeling-types.md"};return q(Y),(t,o)=>{const l=Ms;return g(),z(De,bs(Ds(n)),{default:T(()=>[Fg,M(l,cs({},{ranges:[""]}),{default:T(()=>[Pg]),_:1},16)]),_:1},16)}}},Sg=s("h3",null,"Pick & Omit",-1),Tg=s("p",null,"Types can also be created by including or excluding certain keys/members from a complex base type via the Pick and Omit utility types.",-1),$g=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"type"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"CustomerFields"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#B8A965"}},"id"),s("span",{style:{color:"#CB7676"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"string"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#B8A965"}},"firstName"),s("span",{style:{color:"#CB7676"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"string"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#B8A965"}},"lastName"),s("span",{style:{color:"#CB7676"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"string"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#B8A965"}},"house"),s("span",{style:{color:"#CB7676"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"string"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#B8A965"}},"street"),s("span",{style:{color:"#CB7676"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"string"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#B8A965"}},"city"),s("span",{style:{color:"#CB7676"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"string"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#B8A965"}},"postcode"),s("span",{style:{color:"#CB7676"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"string"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#B8A965"}},"defaultedPayments"),s("span",{style:{color:"#CB7676"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"number"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#B8A965"}},"missedPayments"),s("span",{style:{color:"#CB7676"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"number"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"};")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"type"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"Customer1"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"Pick"),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#A1B567"}},"CustomerFields"),s("span",{style:{color:"#858585"}},",")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#C98A7D"}},"'id'"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"|"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},"'firstName'"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"|"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},"'lastName'"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"|")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#C98A7D"}},"'house'"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"|"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},"'street'"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"|"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},"'city'"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"|"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},"'postcode'")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},">;")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"type"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"Customer2"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"Omit"),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#A1B567"}},"CustomerFields"),s("span",{style:{color:"#858585"}},",")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#C98A7D"}},"'defaultedPayments'"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"|"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},"'missedPayments'")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},">;")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"type"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"CustomerFields"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8C862B"}},"id"),s("span",{style:{color:"#AB5959"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"string"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8C862B"}},"firstName"),s("span",{style:{color:"#AB5959"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"string"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8C862B"}},"lastName"),s("span",{style:{color:"#AB5959"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"string"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8C862B"}},"house"),s("span",{style:{color:"#AB5959"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"string"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8C862B"}},"street"),s("span",{style:{color:"#AB5959"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"string"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8C862B"}},"city"),s("span",{style:{color:"#AB5959"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"string"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8C862B"}},"postcode"),s("span",{style:{color:"#AB5959"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"string"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8C862B"}},"defaultedPayments"),s("span",{style:{color:"#AB5959"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"number"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8C862B"}},"missedPayments"),s("span",{style:{color:"#AB5959"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"number"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"};")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"type"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"Customer1"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"Pick"),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#6C7834"}},"CustomerFields"),s("span",{style:{color:"#8E8F8B"}},",")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#B56959"}},"'id'"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"|"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},"'firstName'"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"|"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},"'lastName'"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"|")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#B56959"}},"'house'"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"|"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},"'street'"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"|"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},"'city'"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"|"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},"'postcode'")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},">;")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"type"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"Customer2"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"Omit"),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#6C7834"}},"CustomerFields"),s("span",{style:{color:"#8E8F8B"}},",")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#B56959"}},"'defaultedPayments'"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"|"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},"'missedPayments'")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},">;")])])])],-1),Og={__name:"12",setup(e){const n={layout:"image-right",image:"https://source.unsplash.com/collection/94734566/1920x1080",srcSequence:"./chapters/modeling-types.md"};return q(Y),(t,o)=>{const l=Ms;return g(),z(De,bs(Ds(n)),{default:T(()=>[Sg,Tg,M(l,cs({},{ranges:[""]}),{default:T(()=>[$g]),_:1},16)]),_:1},16)}}},Mg=s("p",null,"Pick and Omit can also be used to change the type of certain keys, by removing the keys first and then adding them again with a different, e.g. narrower type. This comes in handy when dealing with incoming data that needs to be adapted to the type system of an application.",-1),Ng=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#4D9375"}},"import"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"currency"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#4D9375"}},"from"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},"'currency.js'"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"}),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"type"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"LoanLooselyTyped"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#B8A965"}},"id"),s("span",{style:{color:"#CB7676"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"string"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#B8A965"}},"title"),s("span",{style:{color:"#CB7676"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"string"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#B8A965"}},"tranche"),s("span",{style:{color:"#CB7676"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"string"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#B8A965"}},"available_amount"),s("span",{style:{color:"#CB7676"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"string"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#B8A965"}},"annualised_return"),s("span",{style:{color:"#CB7676"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"string"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#B8A965"}},"term_remaining"),s("span",{style:{color:"#CB7676"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"string"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#B8A965"}},"ltv"),s("span",{style:{color:"#CB7676"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"number"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#B8A965"}},"loan_value"),s("span",{style:{color:"#CB7676"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"string"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"};")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"type"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"Loan"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"Omit"),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#A1B567"}},"LoanLooselyTyped"),s("span",{style:{color:"#858585"}},",")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#C98A7D"}},"'available_amount'"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"|"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},"'annualised_return'"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"|"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},"'term_remaining'"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"|"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},"'ltv'"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"|"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},"'loan_value'")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},">"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"&"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#B8A965"}},"available_amount"),s("span",{style:{color:"#CB7676"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"currency"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#B8A965"}},"annualised_return"),s("span",{style:{color:"#CB7676"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"currency"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#B8A965"}},"term_remaining"),s("span",{style:{color:"#CB7676"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"Date"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#B8A965"}},"ltv"),s("span",{style:{color:"#CB7676"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"BigInt"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#B8A965"}},"loan_value"),s("span",{style:{color:"#CB7676"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"currency"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"};")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#1C6B48"}},"import"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"currency"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#1C6B48"}},"from"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},"'currency.js'"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"}),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"type"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"LoanLooselyTyped"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8C862B"}},"id"),s("span",{style:{color:"#AB5959"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"string"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8C862B"}},"title"),s("span",{style:{color:"#AB5959"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"string"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8C862B"}},"tranche"),s("span",{style:{color:"#AB5959"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"string"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8C862B"}},"available_amount"),s("span",{style:{color:"#AB5959"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"string"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8C862B"}},"annualised_return"),s("span",{style:{color:"#AB5959"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"string"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8C862B"}},"term_remaining"),s("span",{style:{color:"#AB5959"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"string"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8C862B"}},"ltv"),s("span",{style:{color:"#AB5959"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"number"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8C862B"}},"loan_value"),s("span",{style:{color:"#AB5959"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"string"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"};")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"type"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"Loan"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"Omit"),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#6C7834"}},"LoanLooselyTyped"),s("span",{style:{color:"#8E8F8B"}},",")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#B56959"}},"'available_amount'"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"|"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},"'annualised_return'"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"|"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},"'term_remaining'"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"|"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},"'ltv'"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"|"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},"'loan_value'")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},">"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"&"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8C862B"}},"available_amount"),s("span",{style:{color:"#AB5959"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"currency"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8C862B"}},"annualised_return"),s("span",{style:{color:"#AB5959"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"currency"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8C862B"}},"term_remaining"),s("span",{style:{color:"#AB5959"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"Date"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8C862B"}},"ltv"),s("span",{style:{color:"#AB5959"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"BigInt"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8C862B"}},"loan_value"),s("span",{style:{color:"#AB5959"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"currency"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"};")])])])],-1),Lg={__name:"13",setup(e){const n={srcSequence:"./chapters/modeling-types.md"};return q(Y),(t,o)=>{const l=Ms;return g(),z(fy,bs(Ds(n)),{default:T(()=>[Mg,M(l,cs({},{ranges:[""]}),{default:T(()=>[Ng]),_:1},16)]),_:1},16)}}},Ig=s("h3",null,"Union types",-1),Rg=s("p",null,[r("Union types can be used to describe a set of different types, that are assignable to a key/member. Union types can consist of a range of other types like "),s("code",null,"string"),r(", "),s("code",null,"boolean"),r(", other custom types and also "),s("code",null,"undefined"),r(".")],-1),Ug=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"type"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"AnimalSound"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},"'Meow'"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"|"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},"'Woof'"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"|"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},"'Moo'"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"|")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#C98A7D"}},"'Oink'"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"}),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"type"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"Cat"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#B8A965"}},"name"),s("span",{style:{color:"#CB7676"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"string"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#B8A965"}},"sound"),s("span",{style:{color:"#CB7676"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"AnimalSound"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#B8A965"}},"isCurrentChiefMouser"),s("span",{style:{color:"#CB7676"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"boolean"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"};")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"type"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"Dog"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#B8A965"}},"name"),s("span",{style:{color:"#CB7676"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"string"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#B8A965"}},"sound"),s("span",{style:{color:"#CB7676"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"AnimalSound"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#B8A965"}},"canBeMistakenForAPony"),s("span",{style:{color:"#CB7676"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"boolean"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"};")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"type"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"Cow"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#B8A965"}},"name"),s("span",{style:{color:"#CB7676"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"string"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#B8A965"}},"sound"),s("span",{style:{color:"#CB7676"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"AnimalSound"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"};")]),r(`
`),s("span",{class:"line"}),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"type"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"Animal"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"Cat"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"|"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"Dog"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"|"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"Cow"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"type"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"AnimalList"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"Animal"),s("span",{style:{color:"#858585"}},"[];")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"type"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"AnimalSound"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},"'Meow'"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"|"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},"'Woof'"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"|"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},"'Moo'"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"|")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#B56959"}},"'Oink'"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"}),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"type"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"Cat"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8C862B"}},"name"),s("span",{style:{color:"#AB5959"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"string"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8C862B"}},"sound"),s("span",{style:{color:"#AB5959"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"AnimalSound"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8C862B"}},"isCurrentChiefMouser"),s("span",{style:{color:"#AB5959"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"boolean"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"};")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"type"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"Dog"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8C862B"}},"name"),s("span",{style:{color:"#AB5959"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"string"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8C862B"}},"sound"),s("span",{style:{color:"#AB5959"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"AnimalSound"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8C862B"}},"canBeMistakenForAPony"),s("span",{style:{color:"#AB5959"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"boolean"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"};")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"type"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"Cow"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8C862B"}},"name"),s("span",{style:{color:"#AB5959"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"string"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8C862B"}},"sound"),s("span",{style:{color:"#AB5959"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"AnimalSound"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"};")]),r(`
`),s("span",{class:"line"}),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"type"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"Animal"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"Cat"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"|"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"Dog"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"|"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"Cow"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"type"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"AnimalList"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"Animal"),s("span",{style:{color:"#8E8F8B"}},"[];")])])])],-1),jg=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"const"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"cat"),s("span",{style:{color:"#CB7676"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"Cat"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#E0A569"}},"name"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},"'Mittens'"),s("span",{style:{color:"#858585"}},",")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#E0A569"}},"sound"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},"'Meow'"),s("span",{style:{color:"#858585"}},",")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#E0A569"}},"isCurrentChiefMouser"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#4D9375"}},"false"),s("span",{style:{color:"#858585"}},",")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"};")]),r(`
`),s("span",{class:"line"}),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"const"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"dog"),s("span",{style:{color:"#CB7676"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"Dog"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#E0A569"}},"name"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},"'Ben'"),s("span",{style:{color:"#858585"}},",")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#E0A569"}},"sound"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},"'Woof'"),s("span",{style:{color:"#858585"}},",")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#E0A569"}},"canBeMistakenForAPony"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#4D9375"}},"true"),s("span",{style:{color:"#858585"}},",")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"};")]),r(`
`),s("span",{class:"line"}),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"const"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"cow"),s("span",{style:{color:"#CB7676"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"Cow"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#E0A569"}},"name"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},"'Gertie'"),s("span",{style:{color:"#858585"}},",")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#E0A569"}},"sound"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},"'Meow'"),s("span",{style:{color:"#858585"}},","),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#758575"}},"// no error")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"};")]),r(`
`),s("span",{class:"line"}),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"const"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"animals"),s("span",{style:{color:"#CB7676"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"AnimalList"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"["),s("span",{style:{color:"#B8A965"}},"cat"),s("span",{style:{color:"#858585"}},","),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"dog"),s("span",{style:{color:"#858585"}},","),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"cow"),s("span",{style:{color:"#858585"}},"];")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"const"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"cat"),s("span",{style:{color:"#AB5959"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"Cat"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#B58451"}},"name"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},"'Mittens'"),s("span",{style:{color:"#8E8F8B"}},",")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#B58451"}},"sound"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},"'Meow'"),s("span",{style:{color:"#8E8F8B"}},",")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#B58451"}},"isCurrentChiefMouser"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#1C6B48"}},"false"),s("span",{style:{color:"#8E8F8B"}},",")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"};")]),r(`
`),s("span",{class:"line"}),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"const"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"dog"),s("span",{style:{color:"#AB5959"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"Dog"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#B58451"}},"name"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},"'Ben'"),s("span",{style:{color:"#8E8F8B"}},",")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#B58451"}},"sound"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},"'Woof'"),s("span",{style:{color:"#8E8F8B"}},",")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#B58451"}},"canBeMistakenForAPony"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#1C6B48"}},"true"),s("span",{style:{color:"#8E8F8B"}},",")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"};")]),r(`
`),s("span",{class:"line"}),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"const"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"cow"),s("span",{style:{color:"#AB5959"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"Cow"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#B58451"}},"name"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},"'Gertie'"),s("span",{style:{color:"#8E8F8B"}},",")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#B58451"}},"sound"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},"'Meow'"),s("span",{style:{color:"#8E8F8B"}},","),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A0ADA0"}},"// no error")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"};")]),r(`
`),s("span",{class:"line"}),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"const"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"animals"),s("span",{style:{color:"#AB5959"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"AnimalList"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"["),s("span",{style:{color:"#8C862B"}},"cat"),s("span",{style:{color:"#8E8F8B"}},","),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"dog"),s("span",{style:{color:"#8E8F8B"}},","),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"cow"),s("span",{style:{color:"#8E8F8B"}},"];")])])])],-1),qg={__name:"14",setup(e){const n={layout:"two-cols-header-with-gap",srcSequence:"./chapters/modeling-types.md"};return q(Y),(t,o)=>{const l=Ms;return g(),z(ve,bs(Ds(n)),{left:T(a=>[M(l,cs({},{ranges:[""]}),{default:T(()=>[Ug]),_:1},16)]),right:T(a=>[M(l,cs({},{ranges:[""]}),{default:T(()=>[jg]),_:1},16)]),default:T(()=>[Ig,Rg]),_:1},16)}}},Hg=s("h3",null,"Discriminated unions and discriminant property",-1),Wg=s("p",null,"When union types share a common field with literal string values, that field can be used to automatically differentiate types without explicit type assertion. These union types are called discriminated unions. The shared field is called discriminant property.",-1),Vg=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"type"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"AnimalSound"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},"'Meow'"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"|"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},"'Woof'"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"|"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},"'Moo'"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"|")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#C98A7D"}},"'Oink'"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"}),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"type"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"Cat"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#B8A965"}},"type"),s("span",{style:{color:"#CB7676"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},"'Cat'"),s("span",{style:{color:"#858585"}},";"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#758575"}},"// discriminant property")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#B8A965"}},"name"),s("span",{style:{color:"#CB7676"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"string"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#B8A965"}},"sound"),s("span",{style:{color:"#CB7676"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"AnimalSound"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#B8A965"}},"isCurrentChiefMouser"),s("span",{style:{color:"#CB7676"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"boolean"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"};")]),r(`
`),s("span",{class:"line"}),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"type"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"Dog"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#B8A965"}},"type"),s("span",{style:{color:"#CB7676"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},"'Dog'"),s("span",{style:{color:"#858585"}},";"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#758575"}},"// discriminant property")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#B8A965"}},"name"),s("span",{style:{color:"#CB7676"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"string"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#B8A965"}},"sound"),s("span",{style:{color:"#CB7676"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"AnimalSound"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#B8A965"}},"canBeMistakenForAPony"),s("span",{style:{color:"#CB7676"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"boolean"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"};")]),r(`
`),s("span",{class:"line"}),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"type"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"Animal"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"Cat"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"|"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"Dog"),s("span",{style:{color:"#858585"}},";")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"type"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"AnimalSound"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},"'Meow'"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"|"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},"'Woof'"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"|"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},"'Moo'"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"|")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#B56959"}},"'Oink'"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"}),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"type"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"Cat"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8C862B"}},"type"),s("span",{style:{color:"#AB5959"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},"'Cat'"),s("span",{style:{color:"#8E8F8B"}},";"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A0ADA0"}},"// discriminant property")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8C862B"}},"name"),s("span",{style:{color:"#AB5959"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"string"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8C862B"}},"sound"),s("span",{style:{color:"#AB5959"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"AnimalSound"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8C862B"}},"isCurrentChiefMouser"),s("span",{style:{color:"#AB5959"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"boolean"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"};")]),r(`
`),s("span",{class:"line"}),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"type"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"Dog"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8C862B"}},"type"),s("span",{style:{color:"#AB5959"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},"'Dog'"),s("span",{style:{color:"#8E8F8B"}},";"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A0ADA0"}},"// discriminant property")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8C862B"}},"name"),s("span",{style:{color:"#AB5959"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"string"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8C862B"}},"sound"),s("span",{style:{color:"#AB5959"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"AnimalSound"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8C862B"}},"canBeMistakenForAPony"),s("span",{style:{color:"#AB5959"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"boolean"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"};")]),r(`
`),s("span",{class:"line"}),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"type"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"Animal"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"Cat"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"|"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"Dog"),s("span",{style:{color:"#8E8F8B"}},";")])])])],-1),Kg=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#758575"}},"// TS narrows Animal down to Cat")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"const"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"cat"),s("span",{style:{color:"#CB7676"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"Animal"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#E0A569"}},"type"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},"'Cat'"),s("span",{style:{color:"#858585"}},",")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#E0A569"}},"name"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},"'Mittens'"),s("span",{style:{color:"#858585"}},",")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#E0A569"}},"sound"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},"'Meow'"),s("span",{style:{color:"#858585"}},",")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#E0A569"}},"isCurrentChiefMouser"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#4D9375"}},"false"),s("span",{style:{color:"#858585"}},",")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"  "),s("span",{style:{color:"#758575"}},"// canBeMistakenForAPony: false,")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"  "),s("span",{style:{color:"#758575"}},"// Error ('canBeMistakenForAPony' does not exist")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"  "),s("span",{style:{color:"#758575"}},"// in type 'Cat')")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"};")]),r(`
`),s("span",{class:"line"}),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#758575"}},"// TS narrows Animal down to Dog")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"const"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"dog"),s("span",{style:{color:"#CB7676"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"Animal"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#E0A569"}},"type"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},"'Dog'"),s("span",{style:{color:"#858585"}},",")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#E0A569"}},"name"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},"'Ben'"),s("span",{style:{color:"#858585"}},",")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#E0A569"}},"sound"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},"'Woof'"),s("span",{style:{color:"#858585"}},",")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#E0A569"}},"canBeMistakenForAPony"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#4D9375"}},"true"),s("span",{style:{color:"#858585"}},",")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"};")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}},"// TS narrows Animal down to Cat")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"const"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"cat"),s("span",{style:{color:"#AB5959"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"Animal"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#B58451"}},"type"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},"'Cat'"),s("span",{style:{color:"#8E8F8B"}},",")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#B58451"}},"name"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},"'Mittens'"),s("span",{style:{color:"#8E8F8B"}},",")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#B58451"}},"sound"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},"'Meow'"),s("span",{style:{color:"#8E8F8B"}},",")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#B58451"}},"isCurrentChiefMouser"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#1C6B48"}},"false"),s("span",{style:{color:"#8E8F8B"}},",")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"  "),s("span",{style:{color:"#A0ADA0"}},"// canBeMistakenForAPony: false,")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"  "),s("span",{style:{color:"#A0ADA0"}},"// Error ('canBeMistakenForAPony' does not exist")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"  "),s("span",{style:{color:"#A0ADA0"}},"// in type 'Cat')")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"};")]),r(`
`),s("span",{class:"line"}),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A0ADA0"}},"// TS narrows Animal down to Dog")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"const"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"dog"),s("span",{style:{color:"#AB5959"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"Animal"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#B58451"}},"type"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},"'Dog'"),s("span",{style:{color:"#8E8F8B"}},",")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#B58451"}},"name"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},"'Ben'"),s("span",{style:{color:"#8E8F8B"}},",")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#B58451"}},"sound"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},"'Woof'"),s("span",{style:{color:"#8E8F8B"}},",")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#B58451"}},"canBeMistakenForAPony"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#1C6B48"}},"true"),s("span",{style:{color:"#8E8F8B"}},",")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"};")])])])],-1),zg={__name:"15",setup(e){const n={layout:"two-cols-header-with-gap",srcSequence:"./chapters/modeling-types.md"};return q(Y),(t,o)=>{const l=Ms;return g(),z(ve,bs(Ds(n)),{left:T(a=>[M(l,cs({},{ranges:[""]}),{default:T(()=>[Vg]),_:1},16)]),right:T(a=>[M(l,cs({},{ranges:[""]}),{default:T(()=>[Kg]),_:1},16)]),default:T(()=>[Hg,Wg]),_:1},16)}}},Yg=s("h3",null,"Logical union type combinations",-1),Gg=s("p",null,"Union types can also be modeled in such a way, that unique logical combinations are created. TypeScript can use those to automatically differentiate members of the union type.",-1),Zg=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"type"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"DatePickerBase"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#B8A965"}},"day"),s("span",{style:{color:"#CB7676"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"number"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#B8A965"}},"month"),s("span",{style:{color:"#CB7676"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"number"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#B8A965"}},"year"),s("span",{style:{color:"#CB7676"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"number"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"};")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"type"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"DatePickerRegular"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#B8A965"}},"maxNumberOfDays"),s("span",{style:{color:"#CB7676"}},"?:"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"number"),s("span",{style:{color:"#858585"}},";"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#758575"}},"// optional")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#B8A965"}},"showTimePicker"),s("span",{style:{color:"#CB7676"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"boolean"),s("span",{style:{color:"#858585"}},";"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#758575"}},"// unique")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"};")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"type"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"DatePickerDateOfBirthMode"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#B8A965"}},"minAge"),s("span",{style:{color:"#CB7676"}},"?:"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"number"),s("span",{style:{color:"#858585"}},";"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#758575"}},"// optional")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#B8A965"}},"maxAge"),s("span",{style:{color:"#CB7676"}},"?:"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"number"),s("span",{style:{color:"#858585"}},";"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#758575"}},"// optional")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#B8A965"}},"showIAmOldEnoughBox"),s("span",{style:{color:"#CB7676"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"boolean"),s("span",{style:{color:"#858585"}},";"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#758575"}},"// unique")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"};")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"type"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"DatePicker"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"DatePickerBase")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#CB7676"}},"&"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#A1B567"}},"DatePickerRegular")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#CB7676"}},"|"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"DatePickerDateOfBirthMode"),s("span",{style:{color:"#858585"}},");")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"type"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"DatePickerBase"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8C862B"}},"day"),s("span",{style:{color:"#AB5959"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"number"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8C862B"}},"month"),s("span",{style:{color:"#AB5959"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"number"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8C862B"}},"year"),s("span",{style:{color:"#AB5959"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"number"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"};")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"type"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"DatePickerRegular"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8C862B"}},"maxNumberOfDays"),s("span",{style:{color:"#AB5959"}},"?:"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"number"),s("span",{style:{color:"#8E8F8B"}},";"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A0ADA0"}},"// optional")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8C862B"}},"showTimePicker"),s("span",{style:{color:"#AB5959"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"boolean"),s("span",{style:{color:"#8E8F8B"}},";"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A0ADA0"}},"// unique")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"};")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"type"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"DatePickerDateOfBirthMode"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8C862B"}},"minAge"),s("span",{style:{color:"#AB5959"}},"?:"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"number"),s("span",{style:{color:"#8E8F8B"}},";"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A0ADA0"}},"// optional")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8C862B"}},"maxAge"),s("span",{style:{color:"#AB5959"}},"?:"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"number"),s("span",{style:{color:"#8E8F8B"}},";"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A0ADA0"}},"// optional")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8C862B"}},"showIAmOldEnoughBox"),s("span",{style:{color:"#AB5959"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"boolean"),s("span",{style:{color:"#8E8F8B"}},";"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A0ADA0"}},"// unique")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"};")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"type"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"DatePicker"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"DatePickerBase")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#AB5959"}},"&"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#6C7834"}},"DatePickerRegular")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#AB5959"}},"|"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"DatePickerDateOfBirthMode"),s("span",{style:{color:"#8E8F8B"}},");")])])])],-1),Xg={__name:"16",setup(e){const n={layout:"image-right",image:"https://source.unsplash.com/collection/94734566/1920x1080",srcSequence:"./chapters/modeling-types.md"};return q(Y),(t,o)=>{const l=Ms;return g(),z(De,bs(Ds(n)),{default:T(()=>[Yg,Gg,M(l,cs({},{ranges:[""]}),{default:T(()=>[Zg]),_:1},16)]),_:1},16)}}},Jg=s("h3",null,"Mapped types",-1),Qg=s("p",null,[r("Mapped types can be used to iterate over keys/members of multiple types to create new types/members in another type. This helps with DRY-ness. Additionally, mapped types also allow the adding of "),s("code",null,"readonly"),r("- and "),s("code",null,"?"),r(" modifiers.")],-1),s9=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"type"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"CurrencyAbbreviations"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},"'GBP'"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"|"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},"'EUR'"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"|"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},"'USD'")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#CB7676"}},"|"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},"'CAD'"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"|"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},"'AUD'"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"}),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"type"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"CurrencyNames"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},"'Pound'"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"|"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},"'Euro'"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"|"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},"'Dollar'")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#CB7676"}},"|"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},"'Canadian Dollar'"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"|"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},"'Australian Dollar'"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"}),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"type"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"CurrencySymbols"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},"'\xA3'"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"|"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},"'\u20AC'"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"|"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},"'$'"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"}),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"type"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"Currencies"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#CB7676"}},"readonly"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"["),s("span",{style:{color:"#A1B567"}},"K"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"in"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"CurrencyAbbreviations"),s("span",{style:{color:"#858585"}},"]"),s("span",{style:{color:"#CB7676"}},"?:"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#B8A965"}},"name"),s("span",{style:{color:"#CB7676"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"CurrencyNames"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#B8A965"}},"symbol"),s("span",{style:{color:"#CB7676"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"CurrencySymbols"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"};")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"};")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"type"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"CurrencyAbbreviations"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},"'GBP'"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"|"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},"'EUR'"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"|"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},"'USD'")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#AB5959"}},"|"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},"'CAD'"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"|"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},"'AUD'"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"}),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"type"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"CurrencyNames"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},"'Pound'"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"|"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},"'Euro'"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"|"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},"'Dollar'")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#AB5959"}},"|"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},"'Canadian Dollar'"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"|"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},"'Australian Dollar'"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"}),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"type"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"CurrencySymbols"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},"'\xA3'"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"|"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},"'\u20AC'"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"|"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},"'$'"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"}),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"type"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"Currencies"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#AB5959"}},"readonly"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"["),s("span",{style:{color:"#6C7834"}},"K"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"in"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"CurrencyAbbreviations"),s("span",{style:{color:"#8E8F8B"}},"]"),s("span",{style:{color:"#AB5959"}},"?:"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8C862B"}},"name"),s("span",{style:{color:"#AB5959"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"CurrencyNames"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8C862B"}},"symbol"),s("span",{style:{color:"#AB5959"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"CurrencySymbols"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"};")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"};")])])])],-1),e9=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"const"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"currencies"),s("span",{style:{color:"#CB7676"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"Currencies"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#E0A569"}},"GBP"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#E0A569"}},"name"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},"'Pound'"),s("span",{style:{color:"#858585"}},",")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#E0A569"}},"symbol"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},"'\xA3'"),s("span",{style:{color:"#858585"}},",")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"},")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#E0A569"}},"EUR"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#E0A569"}},"name"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},"'Euro'"),s("span",{style:{color:"#858585"}},",")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#E0A569"}},"symbol"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},"'\u20AC'"),s("span",{style:{color:"#858585"}},",")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"},")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#E0A569"}},"USD"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#E0A569"}},"name"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},"'Euro'"),s("span",{style:{color:"#858585"}},","),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#758575"}},"// no error")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#E0A569"}},"symbol"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},"'$'"),s("span",{style:{color:"#858585"}},",")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"},")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"};")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"const"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"currencies"),s("span",{style:{color:"#AB5959"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"Currencies"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#B58451"}},"GBP"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#B58451"}},"name"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},"'Pound'"),s("span",{style:{color:"#8E8F8B"}},",")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#B58451"}},"symbol"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},"'\xA3'"),s("span",{style:{color:"#8E8F8B"}},",")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"},")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#B58451"}},"EUR"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#B58451"}},"name"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},"'Euro'"),s("span",{style:{color:"#8E8F8B"}},",")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#B58451"}},"symbol"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},"'\u20AC'"),s("span",{style:{color:"#8E8F8B"}},",")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"},")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#B58451"}},"USD"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#B58451"}},"name"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},"'Euro'"),s("span",{style:{color:"#8E8F8B"}},","),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A0ADA0"}},"// no error")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#B58451"}},"symbol"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},"'$'"),s("span",{style:{color:"#8E8F8B"}},",")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"},")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"};")])])])],-1),n9={__name:"17",setup(e){const n={layout:"two-cols-header-with-gap",srcSequence:"./chapters/modeling-types.md"};return q(Y),(t,o)=>{const l=Ms;return g(),z(ve,bs(Ds(n)),{left:T(a=>[M(l,cs({},{ranges:[""]}),{default:T(()=>[s9]),_:1},16)]),right:T(a=>[M(l,cs({},{ranges:[""]}),{default:T(()=>[e9]),_:1},16)]),default:T(()=>[Jg,Qg]),_:1},16)}}},t9=s("p",null,"Mapped types provide the ability to access the key of the current iteration. This can be used to lookup values by key, similar to looking up values in an object.",-1),o9=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"type"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"CurrencyAbbreviations"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},"'GBP'"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"|"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},"'EUR'"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"|"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},"'USD'")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#CB7676"}},"|"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},"'CAD'"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"|"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},"'AUD'"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"type"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"CurrencyNames"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#B8A965"}},"GBP"),s("span",{style:{color:"#CB7676"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},"'Pound'"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"|"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},"'Pound Sterling'"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#B8A965"}},"EUR"),s("span",{style:{color:"#CB7676"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},"'Euro'"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#B8A965"}},"USD"),s("span",{style:{color:"#CB7676"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},"'Dollar'"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"|"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},"'US Dollar'"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#B8A965"}},"CAD"),s("span",{style:{color:"#CB7676"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},"'Canadian Dollar'"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#B8A965"}},"AUD"),s("span",{style:{color:"#CB7676"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},"'Australian Dollar'"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"|"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},"'Dollarydoos'"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"};")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"type"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"CurrencySymbols"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#B8A965"}},"GBP"),s("span",{style:{color:"#CB7676"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},"'\xA3'"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#B8A965"}},"EUR"),s("span",{style:{color:"#CB7676"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},"'\u20AC'"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#B8A965"}},"USD"),s("span",{style:{color:"#CB7676"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},"'$'"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#B8A965"}},"CAD"),s("span",{style:{color:"#CB7676"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},"'$'"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#B8A965"}},"AUD"),s("span",{style:{color:"#CB7676"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},"'$'"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"};")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"type"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"Currencies"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#CB7676"}},"readonly"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"["),s("span",{style:{color:"#A1B567"}},"K"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"in"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"CurrencyAbbreviations"),s("span",{style:{color:"#858585"}},"]"),s("span",{style:{color:"#CB7676"}},"?:"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"[")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#A1B567"}},"name"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"CurrencyNames"),s("span",{style:{color:"#858585"}},"["),s("span",{style:{color:"#A1B567"}},"K"),s("span",{style:{color:"#858585"}},"],")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#A1B567"}},"symbol"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"CurrencySymbols"),s("span",{style:{color:"#858585"}},"["),s("span",{style:{color:"#A1B567"}},"K"),s("span",{style:{color:"#858585"}},"],")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"];")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"};")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"type"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"CurrencyAbbreviations"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},"'GBP'"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"|"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},"'EUR'"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"|"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},"'USD'")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#AB5959"}},"|"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},"'CAD'"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"|"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},"'AUD'"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"type"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"CurrencyNames"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8C862B"}},"GBP"),s("span",{style:{color:"#AB5959"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},"'Pound'"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"|"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},"'Pound Sterling'"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8C862B"}},"EUR"),s("span",{style:{color:"#AB5959"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},"'Euro'"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8C862B"}},"USD"),s("span",{style:{color:"#AB5959"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},"'Dollar'"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"|"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},"'US Dollar'"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8C862B"}},"CAD"),s("span",{style:{color:"#AB5959"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},"'Canadian Dollar'"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8C862B"}},"AUD"),s("span",{style:{color:"#AB5959"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},"'Australian Dollar'"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"|"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},"'Dollarydoos'"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"};")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"type"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"CurrencySymbols"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8C862B"}},"GBP"),s("span",{style:{color:"#AB5959"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},"'\xA3'"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8C862B"}},"EUR"),s("span",{style:{color:"#AB5959"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},"'\u20AC'"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8C862B"}},"USD"),s("span",{style:{color:"#AB5959"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},"'$'"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8C862B"}},"CAD"),s("span",{style:{color:"#AB5959"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},"'$'"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8C862B"}},"AUD"),s("span",{style:{color:"#AB5959"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},"'$'"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"};")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"type"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"Currencies"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#AB5959"}},"readonly"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"["),s("span",{style:{color:"#6C7834"}},"K"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"in"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"CurrencyAbbreviations"),s("span",{style:{color:"#8E8F8B"}},"]"),s("span",{style:{color:"#AB5959"}},"?:"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"[")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#6C7834"}},"name"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"CurrencyNames"),s("span",{style:{color:"#8E8F8B"}},"["),s("span",{style:{color:"#6C7834"}},"K"),s("span",{style:{color:"#8E8F8B"}},"],")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#6C7834"}},"symbol"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"CurrencySymbols"),s("span",{style:{color:"#8E8F8B"}},"["),s("span",{style:{color:"#6C7834"}},"K"),s("span",{style:{color:"#8E8F8B"}},"],")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"];")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"};")])])])],-1),l9=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"const"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"currencies"),s("span",{style:{color:"#CB7676"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"Currencies"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#E0A569"}},"EUR"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"["),s("span",{style:{color:"#C98A7D"}},"'Euro'"),s("span",{style:{color:"#858585"}},","),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},"'\u20AC'"),s("span",{style:{color:"#858585"}},"],")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#E0A569"}},"GBP"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"["),s("span",{style:{color:"#C98A7D"}},"'Pound'"),s("span",{style:{color:"#858585"}},","),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},"'\xA3'"),s("span",{style:{color:"#858585"}},"],")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#E0A569"}},"USD"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"["),s("span",{style:{color:"#C98A7D"}},"'Dollar'"),s("span",{style:{color:"#858585"}},","),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},"'$'"),s("span",{style:{color:"#858585"}},"],")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#E0A569"}},"CAD"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"["),s("span",{style:{color:"#C98A7D"}},"'Canadian Dollar'"),s("span",{style:{color:"#858585"}},","),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},"'$'"),s("span",{style:{color:"#858585"}},"],")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#E0A569"}},"AUD"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"["),s("span",{style:{color:"#C98A7D"}},"'Dollarydoos'"),s("span",{style:{color:"#858585"}},","),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},"'$'"),s("span",{style:{color:"#858585"}},"],")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"  "),s("span",{style:{color:"#758575"}},"// CAD: ['Euro', '$'], // error")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"  "),s("span",{style:{color:"#758575"}},"// GBP: ['Pound Sterling', '$'], // error")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"};")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"const"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"currencies"),s("span",{style:{color:"#AB5959"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"Currencies"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#B58451"}},"EUR"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"["),s("span",{style:{color:"#B56959"}},"'Euro'"),s("span",{style:{color:"#8E8F8B"}},","),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},"'\u20AC'"),s("span",{style:{color:"#8E8F8B"}},"],")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#B58451"}},"GBP"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"["),s("span",{style:{color:"#B56959"}},"'Pound'"),s("span",{style:{color:"#8E8F8B"}},","),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},"'\xA3'"),s("span",{style:{color:"#8E8F8B"}},"],")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#B58451"}},"USD"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"["),s("span",{style:{color:"#B56959"}},"'Dollar'"),s("span",{style:{color:"#8E8F8B"}},","),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},"'$'"),s("span",{style:{color:"#8E8F8B"}},"],")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#B58451"}},"CAD"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"["),s("span",{style:{color:"#B56959"}},"'Canadian Dollar'"),s("span",{style:{color:"#8E8F8B"}},","),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},"'$'"),s("span",{style:{color:"#8E8F8B"}},"],")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#B58451"}},"AUD"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"["),s("span",{style:{color:"#B56959"}},"'Dollarydoos'"),s("span",{style:{color:"#8E8F8B"}},","),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},"'$'"),s("span",{style:{color:"#8E8F8B"}},"],")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"  "),s("span",{style:{color:"#A0ADA0"}},"// CAD: ['Euro', '$'], // error")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"  "),s("span",{style:{color:"#A0ADA0"}},"// GBP: ['Pound Sterling', '$'], // error")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"};")])])])],-1),r9={__name:"18",setup(e){const n={layout:"two-cols-header-with-gap",srcSequence:"./chapters/modeling-types.md"};return q(Y),(t,o)=>{const l=Ms;return g(),z(ve,bs(Ds(n)),{left:T(a=>[M(l,cs({},{ranges:[""]}),{default:T(()=>[o9]),_:1},16)]),right:T(a=>[M(l,cs({},{ranges:[""]}),{default:T(()=>[l9]),_:1},16)]),default:T(()=>[t9]),_:1},16)}}},a9=s("h3",null,"Conditional types",-1),c9=s("p",null,"Conditional types can can be used to conditionally output values by analyzing the input. They are often used in combination with mapped types and generics.",-1),i9=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"type"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"Customer"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#B8A965"}},"id"),s("span",{style:{color:"#CB7676"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"string"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#B8A965"}},"firstName"),s("span",{style:{color:"#CB7676"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"string"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#B8A965"}},"lastName"),s("span",{style:{color:"#CB7676"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"string"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#B8A965"}},"house"),s("span",{style:{color:"#CB7676"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"string"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#B8A965"}},"street"),s("span",{style:{color:"#CB7676"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"string"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#B8A965"}},"city"),s("span",{style:{color:"#CB7676"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"string"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#B8A965"}},"postCode"),s("span",{style:{color:"#CB7676"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"string"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#B8A965"}},"defaultedPayments"),s("span",{style:{color:"#CB7676"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"number"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#B8A965"}},"missedPayments"),s("span",{style:{color:"#CB7676"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"number"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"};")]),r(`
`),s("span",{class:"line"}),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"type"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"WithUppercaseValues"),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#A1B567"}},"T"),s("span",{style:{color:"#858585"}},">"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#CB7676"}},"readonly"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"["),s("span",{style:{color:"#A1B567"}},"K"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"in"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"keyof"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"T"),s("span",{style:{color:"#858585"}},"]"),s("span",{style:{color:"#CB7676"}},"?:"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"T"),s("span",{style:{color:"#858585"}},"["),s("span",{style:{color:"#A1B567"}},"K"),s("span",{style:{color:"#858585"}},"]"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"extends"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"string")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#CB7676"}},"?"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"Uppercase"),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#A1B567"}},"T"),s("span",{style:{color:"#858585"}},"["),s("span",{style:{color:"#A1B567"}},"K"),s("span",{style:{color:"#858585"}},"]>")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#CB7676"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"T"),s("span",{style:{color:"#858585"}},"["),s("span",{style:{color:"#A1B567"}},"K"),s("span",{style:{color:"#858585"}},"];")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"};")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"type"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"Customer"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8C862B"}},"id"),s("span",{style:{color:"#AB5959"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"string"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8C862B"}},"firstName"),s("span",{style:{color:"#AB5959"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"string"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8C862B"}},"lastName"),s("span",{style:{color:"#AB5959"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"string"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8C862B"}},"house"),s("span",{style:{color:"#AB5959"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"string"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8C862B"}},"street"),s("span",{style:{color:"#AB5959"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"string"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8C862B"}},"city"),s("span",{style:{color:"#AB5959"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"string"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8C862B"}},"postCode"),s("span",{style:{color:"#AB5959"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"string"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8C862B"}},"defaultedPayments"),s("span",{style:{color:"#AB5959"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"number"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8C862B"}},"missedPayments"),s("span",{style:{color:"#AB5959"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"number"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"};")]),r(`
`),s("span",{class:"line"}),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"type"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"WithUppercaseValues"),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#6C7834"}},"T"),s("span",{style:{color:"#8E8F8B"}},">"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#AB5959"}},"readonly"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"["),s("span",{style:{color:"#6C7834"}},"K"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"in"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"keyof"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"T"),s("span",{style:{color:"#8E8F8B"}},"]"),s("span",{style:{color:"#AB5959"}},"?:"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"T"),s("span",{style:{color:"#8E8F8B"}},"["),s("span",{style:{color:"#6C7834"}},"K"),s("span",{style:{color:"#8E8F8B"}},"]"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"extends"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"string")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#AB5959"}},"?"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"Uppercase"),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#6C7834"}},"T"),s("span",{style:{color:"#8E8F8B"}},"["),s("span",{style:{color:"#6C7834"}},"K"),s("span",{style:{color:"#8E8F8B"}},"]>")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#AB5959"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"T"),s("span",{style:{color:"#8E8F8B"}},"["),s("span",{style:{color:"#6C7834"}},"K"),s("span",{style:{color:"#8E8F8B"}},"];")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"};")])])])],-1),p9=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"const"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"uppercaseCustomer"),s("span",{style:{color:"#CB7676"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"WithUppercaseValues"),s("span",{style:{color:"#858585"}},"<")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#A1B567"}},"Customer")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},">"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"  "),s("span",{style:{color:"#758575"}},"// id: 'abcd', // error")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#E0A569"}},"id"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},"'ABCD'"),s("span",{style:{color:"#858585"}},",")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#E0A569"}},"firstName"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},"'LARRY'"),s("span",{style:{color:"#858585"}},",")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"};")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"const"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"uppercaseCustomer"),s("span",{style:{color:"#AB5959"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"WithUppercaseValues"),s("span",{style:{color:"#8E8F8B"}},"<")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#6C7834"}},"Customer")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},">"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"  "),s("span",{style:{color:"#A0ADA0"}},"// id: 'abcd', // error")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#B58451"}},"id"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},"'ABCD'"),s("span",{style:{color:"#8E8F8B"}},",")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#B58451"}},"firstName"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},"'LARRY'"),s("span",{style:{color:"#8E8F8B"}},",")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"};")])])])],-1),y9={__name:"19",setup(e){const n={layout:"two-cols-header-with-gap",srcSequence:"./chapters/modeling-types.md"};return q(Y),(t,o)=>{const l=Ms;return g(),z(ve,bs(Ds(n)),{left:T(a=>[M(l,cs({},{ranges:[""]}),{default:T(()=>[i9]),_:1},16)]),right:T(a=>[M(l,cs({},{ranges:[""]}),{default:T(()=>[p9]),_:1},16)]),default:T(()=>[a9,c9]),_:1},16)}}},u9=s("h2",null,"Using types",-1),d9={__name:"20",setup(e){const n={layout:"section",srcSequence:"./chapters/using-types.md"};return q(Y),(t,o)=>(g(),z(sl,bs(Ds(n)),{default:T(()=>[u9]),_:1},16))}},f9=s("h3",null,"Single types and optional keys",-1),m9=s("p",null,"TypeScript can infer values via control flow analysis and may allow or disallow access for members of a type.",-1),A9=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"type"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"Person"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#B8A965"}},"firstName"),s("span",{style:{color:"#CB7676"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"string"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#B8A965"}},"lastName"),s("span",{style:{color:"#CB7676"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"string"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#B8A965"}},"address"),s("span",{style:{color:"#CB7676"}},"?:"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#B8A965"}},"house"),s("span",{style:{color:"#CB7676"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"string"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#B8A965"}},"street"),s("span",{style:{color:"#CB7676"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"string"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#B8A965"}},"postcode"),s("span",{style:{color:"#CB7676"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"string"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#B8A965"}},"city"),s("span",{style:{color:"#CB7676"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"string"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"};")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"};")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"type"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"Person"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8C862B"}},"firstName"),s("span",{style:{color:"#AB5959"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"string"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8C862B"}},"lastName"),s("span",{style:{color:"#AB5959"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"string"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8C862B"}},"address"),s("span",{style:{color:"#AB5959"}},"?:"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8C862B"}},"house"),s("span",{style:{color:"#AB5959"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"string"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8C862B"}},"street"),s("span",{style:{color:"#AB5959"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"string"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8C862B"}},"postcode"),s("span",{style:{color:"#AB5959"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"string"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8C862B"}},"city"),s("span",{style:{color:"#AB5959"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"string"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"};")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"};")])])])],-1),B9=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"function"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"showPersonDetails"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#B8A965"}},"person"),s("span",{style:{color:"#CB7676"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"Person"),s("span",{style:{color:"#858585"}},")"),s("span",{style:{color:"#CB7676"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"void"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#CB7676"}},"const"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"firstName"),s("span",{style:{color:"#858585"}},","),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"lastName"),s("span",{style:{color:"#858585"}},","),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"address"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"}"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"person"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"}),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#B8A965"}},"console"),s("span",{style:{color:"#858585"}},"."),s("span",{style:{color:"#A1B567"}},"log"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#C98A7D"}},"`First name: "),s("span",{style:{color:"#858585"}},"${"),s("span",{style:{color:"#C98A7D"}},"firstName"),s("span",{style:{color:"#858585"}},"}"),s("span",{style:{color:"#C98A7D"}},"`"),s("span",{style:{color:"#858585"}},");")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#B8A965"}},"console"),s("span",{style:{color:"#858585"}},"."),s("span",{style:{color:"#A1B567"}},"log"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#C98A7D"}},"`Last name: "),s("span",{style:{color:"#858585"}},"${"),s("span",{style:{color:"#C98A7D"}},"lastName"),s("span",{style:{color:"#858585"}},"}"),s("span",{style:{color:"#C98A7D"}},"`"),s("span",{style:{color:"#858585"}},");")]),r(`
`),s("span",{class:"line"}),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#4D9375"}},"if"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#B8A965"}},"address"),s("span",{style:{color:"#858585"}},")"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#CB7676"}},"const"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"house"),s("span",{style:{color:"#858585"}},","),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"street"),s("span",{style:{color:"#858585"}},","),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"postcode"),s("span",{style:{color:"#858585"}},",")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#D4976C"}},"city"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"}"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"address"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"}),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#B8A965"}},"console"),s("span",{style:{color:"#858585"}},"."),s("span",{style:{color:"#A1B567"}},"log"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#C98A7D"}},"`House: "),s("span",{style:{color:"#858585"}},"${"),s("span",{style:{color:"#C98A7D"}},"house"),s("span",{style:{color:"#858585"}},"}"),s("span",{style:{color:"#C98A7D"}},"`"),s("span",{style:{color:"#858585"}},");")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#B8A965"}},"console"),s("span",{style:{color:"#858585"}},"."),s("span",{style:{color:"#A1B567"}},"log"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#C98A7D"}},"`Street: "),s("span",{style:{color:"#858585"}},"${"),s("span",{style:{color:"#C98A7D"}},"street"),s("span",{style:{color:"#858585"}},"}"),s("span",{style:{color:"#C98A7D"}},"`"),s("span",{style:{color:"#858585"}},");")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#B8A965"}},"console"),s("span",{style:{color:"#858585"}},"."),s("span",{style:{color:"#A1B567"}},"log"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#C98A7D"}},"`Postcode: "),s("span",{style:{color:"#858585"}},"${"),s("span",{style:{color:"#C98A7D"}},"postcode"),s("span",{style:{color:"#858585"}},"}"),s("span",{style:{color:"#C98A7D"}},"`"),s("span",{style:{color:"#858585"}},");")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#B8A965"}},"console"),s("span",{style:{color:"#858585"}},"."),s("span",{style:{color:"#A1B567"}},"log"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#C98A7D"}},"`City: "),s("span",{style:{color:"#858585"}},"${"),s("span",{style:{color:"#C98A7D"}},"city"),s("span",{style:{color:"#858585"}},"}"),s("span",{style:{color:"#C98A7D"}},"`"),s("span",{style:{color:"#858585"}},");")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"}")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"}")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"function"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"showPersonDetails"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#8C862B"}},"person"),s("span",{style:{color:"#AB5959"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"Person"),s("span",{style:{color:"#8E8F8B"}},")"),s("span",{style:{color:"#AB5959"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"void"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#AB5959"}},"const"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"firstName"),s("span",{style:{color:"#8E8F8B"}},","),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"lastName"),s("span",{style:{color:"#8E8F8B"}},","),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"address"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"}"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"person"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"}),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8C862B"}},"console"),s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#6C7834"}},"log"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#B56959"}},"`First name: "),s("span",{style:{color:"#8E8F8B"}},"${"),s("span",{style:{color:"#B56959"}},"firstName"),s("span",{style:{color:"#8E8F8B"}},"}"),s("span",{style:{color:"#B56959"}},"`"),s("span",{style:{color:"#8E8F8B"}},");")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8C862B"}},"console"),s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#6C7834"}},"log"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#B56959"}},"`Last name: "),s("span",{style:{color:"#8E8F8B"}},"${"),s("span",{style:{color:"#B56959"}},"lastName"),s("span",{style:{color:"#8E8F8B"}},"}"),s("span",{style:{color:"#B56959"}},"`"),s("span",{style:{color:"#8E8F8B"}},");")]),r(`
`),s("span",{class:"line"}),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#1C6B48"}},"if"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#8C862B"}},"address"),s("span",{style:{color:"#8E8F8B"}},")"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#AB5959"}},"const"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"house"),s("span",{style:{color:"#8E8F8B"}},","),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"street"),s("span",{style:{color:"#8E8F8B"}},","),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"postcode"),s("span",{style:{color:"#8E8F8B"}},",")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#A65E2B"}},"city"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"}"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"address"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"}),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8C862B"}},"console"),s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#6C7834"}},"log"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#B56959"}},"`House: "),s("span",{style:{color:"#8E8F8B"}},"${"),s("span",{style:{color:"#B56959"}},"house"),s("span",{style:{color:"#8E8F8B"}},"}"),s("span",{style:{color:"#B56959"}},"`"),s("span",{style:{color:"#8E8F8B"}},");")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8C862B"}},"console"),s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#6C7834"}},"log"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#B56959"}},"`Street: "),s("span",{style:{color:"#8E8F8B"}},"${"),s("span",{style:{color:"#B56959"}},"street"),s("span",{style:{color:"#8E8F8B"}},"}"),s("span",{style:{color:"#B56959"}},"`"),s("span",{style:{color:"#8E8F8B"}},");")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8C862B"}},"console"),s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#6C7834"}},"log"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#B56959"}},"`Postcode: "),s("span",{style:{color:"#8E8F8B"}},"${"),s("span",{style:{color:"#B56959"}},"postcode"),s("span",{style:{color:"#8E8F8B"}},"}"),s("span",{style:{color:"#B56959"}},"`"),s("span",{style:{color:"#8E8F8B"}},");")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8C862B"}},"console"),s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#6C7834"}},"log"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#B56959"}},"`City: "),s("span",{style:{color:"#8E8F8B"}},"${"),s("span",{style:{color:"#B56959"}},"city"),s("span",{style:{color:"#8E8F8B"}},"}"),s("span",{style:{color:"#B56959"}},"`"),s("span",{style:{color:"#8E8F8B"}},");")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"}")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),h9={__name:"21",setup(e){const n={layout:"two-cols-header-with-gap",hideInToc:!0,srcSequence:"./chapters/using-types.md"};return q(Y),(t,o)=>{const l=Ms;return g(),z(ve,bs(Ds(n)),{left:T(a=>[M(l,cs({},{ranges:[""]}),{default:T(()=>[A9]),_:1},16)]),right:T(a=>[M(l,cs({},{ranges:[""]}),{default:T(()=>[B9]),_:1},16)]),default:T(()=>[f9,m9]),_:1},16)}}},C9=s("h3",null,"Differentiating union types - manual",-1),g9=s("p",null,"Narrowing down union types is slightly more complex since manually checking the type isn\u2019t possible as types are removed during compilation (type erasure).",-1),D9=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"type"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"AnimalSound"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},"'Meow'"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"|"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},"'Woof'"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"|"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},"'Moo'"),s("span",{style:{color:"#CB7676"}},"|")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#C98A7D"}},"'Oink'"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"}),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"type"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"Cat"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#B8A965"}},"name"),s("span",{style:{color:"#CB7676"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"string"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#B8A965"}},"sound"),s("span",{style:{color:"#CB7676"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"AnimalSound"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#B8A965"}},"isCurrentChiefMouser"),s("span",{style:{color:"#CB7676"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"boolean"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"};")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"type"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"Dog"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#B8A965"}},"name"),s("span",{style:{color:"#CB7676"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"string"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#B8A965"}},"sound"),s("span",{style:{color:"#CB7676"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"AnimalSound"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#B8A965"}},"canBeMistakenForAPony"),s("span",{style:{color:"#CB7676"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"boolean"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"};")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"type"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"Cow"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#B8A965"}},"name"),s("span",{style:{color:"#CB7676"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"string"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#B8A965"}},"sound"),s("span",{style:{color:"#CB7676"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"AnimalSound"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"};")]),r(`
`),s("span",{class:"line"}),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"type"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"Animal"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"Cat"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"|"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"Dog"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"|"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"Cow"),s("span",{style:{color:"#858585"}},";")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"type"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"AnimalSound"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},"'Meow'"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"|"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},"'Woof'"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"|"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},"'Moo'"),s("span",{style:{color:"#AB5959"}},"|")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#B56959"}},"'Oink'"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"}),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"type"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"Cat"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8C862B"}},"name"),s("span",{style:{color:"#AB5959"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"string"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8C862B"}},"sound"),s("span",{style:{color:"#AB5959"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"AnimalSound"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8C862B"}},"isCurrentChiefMouser"),s("span",{style:{color:"#AB5959"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"boolean"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"};")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"type"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"Dog"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8C862B"}},"name"),s("span",{style:{color:"#AB5959"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"string"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8C862B"}},"sound"),s("span",{style:{color:"#AB5959"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"AnimalSound"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8C862B"}},"canBeMistakenForAPony"),s("span",{style:{color:"#AB5959"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"boolean"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"};")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"type"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"Cow"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8C862B"}},"name"),s("span",{style:{color:"#AB5959"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"string"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8C862B"}},"sound"),s("span",{style:{color:"#AB5959"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"AnimalSound"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"};")]),r(`
`),s("span",{class:"line"}),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"type"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"Animal"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"Cat"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"|"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"Dog"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"|"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"Cow"),s("span",{style:{color:"#8E8F8B"}},";")])])])],-1),v9=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"function"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"showAnimalDetails"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#B8A965"}},"animal"),s("span",{style:{color:"#CB7676"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"Animal"),s("span",{style:{color:"#858585"}},")"),s("span",{style:{color:"#CB7676"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"void"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#B8A965"}},"console"),s("span",{style:{color:"#858585"}},"."),s("span",{style:{color:"#A1B567"}},"log"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#C98A7D"}},"`Name: "),s("span",{style:{color:"#858585"}},"${"),s("span",{style:{color:"#C98A7D"}},"animal"),s("span",{style:{color:"#858585"}},"."),s("span",{style:{color:"#C98A7D"}},"name"),s("span",{style:{color:"#858585"}},"}"),s("span",{style:{color:"#C98A7D"}},"`"),s("span",{style:{color:"#858585"}},");")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#B8A965"}},"console"),s("span",{style:{color:"#858585"}},"."),s("span",{style:{color:"#A1B567"}},"log"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#C98A7D"}},"`Sound: "),s("span",{style:{color:"#858585"}},"${"),s("span",{style:{color:"#C98A7D"}},"animal"),s("span",{style:{color:"#858585"}},"."),s("span",{style:{color:"#C98A7D"}},"sound"),s("span",{style:{color:"#858585"}},"}"),s("span",{style:{color:"#C98A7D"}},"`"),s("span",{style:{color:"#858585"}},");")]),r(`
`),s("span",{class:"line"}),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#4D9375"}},"if"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#B8A965"}},"Object"),s("span",{style:{color:"#858585"}},"."),s("span",{style:{color:"#A1B567"}},"hasOwn"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#B8A965"}},"animal"),s("span",{style:{color:"#858585"}},",")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#C98A7D"}},"'isCurrentChiefMouser'"),s("span",{style:{color:"#858585"}},"))"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#CB7676"}},"const"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"isCurrentChiefMouser"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"}"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"animal"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#4D9375"}},"as"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"Cat")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#B8A965"}},"console"),s("span",{style:{color:"#858585"}},"."),s("span",{style:{color:"#A1B567"}},"log"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#B8A965"}},"isCurrentChiefMouser"),s("span",{style:{color:"#858585"}},");")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#4D9375"}},"return"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"}")]),r(`
`),s("span",{class:"line"}),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#4D9375"}},"if"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#B8A965"}},"Object"),s("span",{style:{color:"#858585"}},"."),s("span",{style:{color:"#A1B567"}},"hasOwn"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#B8A965"}},"animal"),s("span",{style:{color:"#858585"}},",")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#C98A7D"}},"'canBeMistakenForAPony'"),s("span",{style:{color:"#858585"}},"))"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#CB7676"}},"const"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"canBeMistakenForAPony"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"}"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"animal"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#4D9375"}},"as"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"Dog")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#B8A965"}},"console"),s("span",{style:{color:"#858585"}},"."),s("span",{style:{color:"#A1B567"}},"log"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#B8A965"}},"canBeMistakenForAPony"),s("span",{style:{color:"#858585"}},");")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#4D9375"}},"return"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"}")]),r(`
`),s("span",{class:"line"}),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"  "),s("span",{style:{color:"#758575"}},"// Cow stuff")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"}")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"function"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"showAnimalDetails"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#8C862B"}},"animal"),s("span",{style:{color:"#AB5959"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"Animal"),s("span",{style:{color:"#8E8F8B"}},")"),s("span",{style:{color:"#AB5959"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"void"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8C862B"}},"console"),s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#6C7834"}},"log"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#B56959"}},"`Name: "),s("span",{style:{color:"#8E8F8B"}},"${"),s("span",{style:{color:"#B56959"}},"animal"),s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#B56959"}},"name"),s("span",{style:{color:"#8E8F8B"}},"}"),s("span",{style:{color:"#B56959"}},"`"),s("span",{style:{color:"#8E8F8B"}},");")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8C862B"}},"console"),s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#6C7834"}},"log"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#B56959"}},"`Sound: "),s("span",{style:{color:"#8E8F8B"}},"${"),s("span",{style:{color:"#B56959"}},"animal"),s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#B56959"}},"sound"),s("span",{style:{color:"#8E8F8B"}},"}"),s("span",{style:{color:"#B56959"}},"`"),s("span",{style:{color:"#8E8F8B"}},");")]),r(`
`),s("span",{class:"line"}),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#1C6B48"}},"if"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#8C862B"}},"Object"),s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#6C7834"}},"hasOwn"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#8C862B"}},"animal"),s("span",{style:{color:"#8E8F8B"}},",")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#B56959"}},"'isCurrentChiefMouser'"),s("span",{style:{color:"#8E8F8B"}},"))"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#AB5959"}},"const"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"isCurrentChiefMouser"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"}"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"animal"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#1C6B48"}},"as"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"Cat")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8C862B"}},"console"),s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#6C7834"}},"log"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#8C862B"}},"isCurrentChiefMouser"),s("span",{style:{color:"#8E8F8B"}},");")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#1C6B48"}},"return"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"}")]),r(`
`),s("span",{class:"line"}),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#1C6B48"}},"if"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#8C862B"}},"Object"),s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#6C7834"}},"hasOwn"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#8C862B"}},"animal"),s("span",{style:{color:"#8E8F8B"}},",")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#B56959"}},"'canBeMistakenForAPony'"),s("span",{style:{color:"#8E8F8B"}},"))"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#AB5959"}},"const"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"canBeMistakenForAPony"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"}"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"animal"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#1C6B48"}},"as"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"Dog")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8C862B"}},"console"),s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#6C7834"}},"log"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#8C862B"}},"canBeMistakenForAPony"),s("span",{style:{color:"#8E8F8B"}},");")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#1C6B48"}},"return"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"}")]),r(`
`),s("span",{class:"line"}),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"  "),s("span",{style:{color:"#A0ADA0"}},"// Cow stuff")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),_9={__name:"22",setup(e){const n={layout:"two-cols-header-with-gap",hideInToc:!0,srcSequence:"./chapters/using-types.md"};return q(Y),(t,o)=>{const l=Ms;return g(),z(ve,bs(Ds(n)),{left:T(a=>[M(l,cs({},{ranges:[""]}),{default:T(()=>[D9]),_:1},16)]),right:T(a=>[M(l,cs({},{ranges:[""]}),{default:T(()=>[v9]),_:1},16)]),default:T(()=>[C9,g9]),_:1},16)}}},b9=s("h3",null,"Differentiating union types - via type guards",-1),E9=s("p",null,[r("TypeScript can narrow down multiple types in an union type via built-in type guards. Most common type guards are: "),s("code",null,"in"),r(", "),s("code",null,"typeof"),r(" and "),s("code",null,"instanceof"),r(".")],-1),w9=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"type"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"Person"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#B8A965"}},"firstName"),s("span",{style:{color:"#CB7676"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"string"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#B8A965"}},"lastName"),s("span",{style:{color:"#CB7676"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"string"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"};")]),r(`
`),s("span",{class:"line"}),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"type"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"PersonWithAddress"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"Person"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"&"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#B8A965"}},"address"),s("span",{style:{color:"#CB7676"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#B8A965"}},"house"),s("span",{style:{color:"#CB7676"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"string"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#B8A965"}},"street"),s("span",{style:{color:"#CB7676"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"string"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#B8A965"}},"postcode"),s("span",{style:{color:"#CB7676"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"string"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#B8A965"}},"city"),s("span",{style:{color:"#CB7676"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"string"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"};")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"};")]),r(`
`),s("span",{class:"line"}),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"type"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"People"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"Person"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"|"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"PersonWithAddress"),s("span",{style:{color:"#858585"}},";")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"type"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"Person"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8C862B"}},"firstName"),s("span",{style:{color:"#AB5959"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"string"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8C862B"}},"lastName"),s("span",{style:{color:"#AB5959"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"string"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"};")]),r(`
`),s("span",{class:"line"}),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"type"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"PersonWithAddress"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"Person"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"&"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8C862B"}},"address"),s("span",{style:{color:"#AB5959"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8C862B"}},"house"),s("span",{style:{color:"#AB5959"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"string"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8C862B"}},"street"),s("span",{style:{color:"#AB5959"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"string"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8C862B"}},"postcode"),s("span",{style:{color:"#AB5959"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"string"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8C862B"}},"city"),s("span",{style:{color:"#AB5959"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"string"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"};")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"};")]),r(`
`),s("span",{class:"line"}),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"type"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"People"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"Person"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"|"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"PersonWithAddress"),s("span",{style:{color:"#8E8F8B"}},";")])])])],-1),k9=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"function"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"showPersonDetails"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#B8A965"}},"person"),s("span",{style:{color:"#CB7676"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"People"),s("span",{style:{color:"#858585"}},")"),s("span",{style:{color:"#CB7676"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"void"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#CB7676"}},"const"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"firstName"),s("span",{style:{color:"#858585"}},","),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"lastName"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"}"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"person"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"}),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#B8A965"}},"console"),s("span",{style:{color:"#858585"}},"."),s("span",{style:{color:"#A1B567"}},"log"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#C98A7D"}},"`First name: "),s("span",{style:{color:"#858585"}},"${"),s("span",{style:{color:"#C98A7D"}},"firstName"),s("span",{style:{color:"#858585"}},"}"),s("span",{style:{color:"#C98A7D"}},"`"),s("span",{style:{color:"#858585"}},");")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#B8A965"}},"console"),s("span",{style:{color:"#858585"}},"."),s("span",{style:{color:"#A1B567"}},"log"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#C98A7D"}},"`Last name: "),s("span",{style:{color:"#858585"}},"${"),s("span",{style:{color:"#C98A7D"}},"lastName"),s("span",{style:{color:"#858585"}},"}"),s("span",{style:{color:"#C98A7D"}},"`"),s("span",{style:{color:"#858585"}},");")]),r(`
`),s("span",{class:"line"}),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#4D9375"}},"if"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#C98A7D"}},"'address'"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"in"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"person"),s("span",{style:{color:"#858585"}},")"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"    "),s("span",{style:{color:"#758575"}},"// PersonWithAddress")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#CB7676"}},"const"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"house"),s("span",{style:{color:"#858585"}},","),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"street"),s("span",{style:{color:"#858585"}},","),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"postcode"),s("span",{style:{color:"#858585"}},","),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"city"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"}"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"=")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"      "),s("span",{style:{color:"#B8A965"}},"person"),s("span",{style:{color:"#858585"}},"."),s("span",{style:{color:"#B8A965"}},"address"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"}),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#B8A965"}},"console"),s("span",{style:{color:"#858585"}},"."),s("span",{style:{color:"#A1B567"}},"log"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#C98A7D"}},"`House: "),s("span",{style:{color:"#858585"}},"${"),s("span",{style:{color:"#C98A7D"}},"house"),s("span",{style:{color:"#858585"}},"}"),s("span",{style:{color:"#C98A7D"}},"`"),s("span",{style:{color:"#858585"}},");")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#B8A965"}},"console"),s("span",{style:{color:"#858585"}},"."),s("span",{style:{color:"#A1B567"}},"log"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#C98A7D"}},"`Street: "),s("span",{style:{color:"#858585"}},"${"),s("span",{style:{color:"#C98A7D"}},"street"),s("span",{style:{color:"#858585"}},"}"),s("span",{style:{color:"#C98A7D"}},"`"),s("span",{style:{color:"#858585"}},");")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#B8A965"}},"console"),s("span",{style:{color:"#858585"}},"."),s("span",{style:{color:"#A1B567"}},"log"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#C98A7D"}},"`Postcode: "),s("span",{style:{color:"#858585"}},"${"),s("span",{style:{color:"#C98A7D"}},"postcode"),s("span",{style:{color:"#858585"}},"}"),s("span",{style:{color:"#C98A7D"}},"`"),s("span",{style:{color:"#858585"}},");")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#B8A965"}},"console"),s("span",{style:{color:"#858585"}},"."),s("span",{style:{color:"#A1B567"}},"log"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#C98A7D"}},"`City: "),s("span",{style:{color:"#858585"}},"${"),s("span",{style:{color:"#C98A7D"}},"city"),s("span",{style:{color:"#858585"}},"}"),s("span",{style:{color:"#C98A7D"}},"`"),s("span",{style:{color:"#858585"}},");")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"}")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"}")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"function"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"showPersonDetails"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#8C862B"}},"person"),s("span",{style:{color:"#AB5959"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"People"),s("span",{style:{color:"#8E8F8B"}},")"),s("span",{style:{color:"#AB5959"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"void"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#AB5959"}},"const"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"firstName"),s("span",{style:{color:"#8E8F8B"}},","),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"lastName"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"}"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"person"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"}),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8C862B"}},"console"),s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#6C7834"}},"log"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#B56959"}},"`First name: "),s("span",{style:{color:"#8E8F8B"}},"${"),s("span",{style:{color:"#B56959"}},"firstName"),s("span",{style:{color:"#8E8F8B"}},"}"),s("span",{style:{color:"#B56959"}},"`"),s("span",{style:{color:"#8E8F8B"}},");")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8C862B"}},"console"),s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#6C7834"}},"log"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#B56959"}},"`Last name: "),s("span",{style:{color:"#8E8F8B"}},"${"),s("span",{style:{color:"#B56959"}},"lastName"),s("span",{style:{color:"#8E8F8B"}},"}"),s("span",{style:{color:"#B56959"}},"`"),s("span",{style:{color:"#8E8F8B"}},");")]),r(`
`),s("span",{class:"line"}),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#1C6B48"}},"if"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#B56959"}},"'address'"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"in"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"person"),s("span",{style:{color:"#8E8F8B"}},")"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"    "),s("span",{style:{color:"#A0ADA0"}},"// PersonWithAddress")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#AB5959"}},"const"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"house"),s("span",{style:{color:"#8E8F8B"}},","),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"street"),s("span",{style:{color:"#8E8F8B"}},","),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"postcode"),s("span",{style:{color:"#8E8F8B"}},","),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"city"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"}"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"=")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#8C862B"}},"person"),s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#8C862B"}},"address"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"}),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8C862B"}},"console"),s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#6C7834"}},"log"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#B56959"}},"`House: "),s("span",{style:{color:"#8E8F8B"}},"${"),s("span",{style:{color:"#B56959"}},"house"),s("span",{style:{color:"#8E8F8B"}},"}"),s("span",{style:{color:"#B56959"}},"`"),s("span",{style:{color:"#8E8F8B"}},");")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8C862B"}},"console"),s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#6C7834"}},"log"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#B56959"}},"`Street: "),s("span",{style:{color:"#8E8F8B"}},"${"),s("span",{style:{color:"#B56959"}},"street"),s("span",{style:{color:"#8E8F8B"}},"}"),s("span",{style:{color:"#B56959"}},"`"),s("span",{style:{color:"#8E8F8B"}},");")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8C862B"}},"console"),s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#6C7834"}},"log"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#B56959"}},"`Postcode: "),s("span",{style:{color:"#8E8F8B"}},"${"),s("span",{style:{color:"#B56959"}},"postcode"),s("span",{style:{color:"#8E8F8B"}},"}"),s("span",{style:{color:"#B56959"}},"`"),s("span",{style:{color:"#8E8F8B"}},");")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8C862B"}},"console"),s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#6C7834"}},"log"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#B56959"}},"`City: "),s("span",{style:{color:"#8E8F8B"}},"${"),s("span",{style:{color:"#B56959"}},"city"),s("span",{style:{color:"#8E8F8B"}},"}"),s("span",{style:{color:"#B56959"}},"`"),s("span",{style:{color:"#8E8F8B"}},");")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"}")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),F9={__name:"23",setup(e){const n={layout:"two-cols-header-with-gap",hideInToc:!0,srcSequence:"./chapters/using-types.md"};return q(Y),(t,o)=>{const l=Ms;return g(),z(ve,bs(Ds(n)),{left:T(a=>[M(l,cs({},{ranges:[""]}),{default:T(()=>[w9]),_:1},16)]),right:T(a=>[M(l,cs({},{ranges:[""]}),{default:T(()=>[k9]),_:1},16)]),default:T(()=>[b9,E9]),_:1},16)}}},P9=s("h3",null,"Differentiating union types - via discriminant union types",-1),x9=s("p",null,"Since TypeScript is able to narrow down a discriminant union via a discriminant property, discriminant unions are widely used to ensure type security.",-1),S9=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"type"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"ActionNamesTypes"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},"'UPDATE_COUNTER'"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"|")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#C98A7D"}},"'UPDATE_DATETIME'"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"}),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"type"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"State"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#B8A965"}},"counter"),s("span",{style:{color:"#CB7676"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"Counter"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#B8A965"}},"dateTime"),s("span",{style:{color:"#CB7676"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"DateTime"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"};")]),r(`
`),s("span",{class:"line"}),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"type"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"CounterAction"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#B8A965"}},"type"),s("span",{style:{color:"#CB7676"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"Extract"),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#A1B567"}},"ActionNamesTypes"),s("span",{style:{color:"#858585"}},","),s("span",{style:{color:"#C98A7D"}},"'UPDATE_COUNTER'"),s("span",{style:{color:"#858585"}},">")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#B8A965"}},"payload"),s("span",{style:{color:"#CB7676"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"Counter"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"};")]),r(`
`),s("span",{class:"line"}),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"type"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"DateTimeAction"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#B8A965"}},"type"),s("span",{style:{color:"#CB7676"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"Extract"),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#A1B567"}},"ActionNamesTypes"),s("span",{style:{color:"#858585"}},","),s("span",{style:{color:"#C98A7D"}},"'UPDATE_DATETIME'"),s("span",{style:{color:"#858585"}},">")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#B8A965"}},"payload"),s("span",{style:{color:"#CB7676"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"DateTime"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"};")]),r(`
`),s("span",{class:"line"}),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"type"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"Actions"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"CounterAction"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"|"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"DateTimeAction"),s("span",{style:{color:"#858585"}},";")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"type"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"ActionNamesTypes"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},"'UPDATE_COUNTER'"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"|")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#B56959"}},"'UPDATE_DATETIME'"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"}),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"type"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"State"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8C862B"}},"counter"),s("span",{style:{color:"#AB5959"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"Counter"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8C862B"}},"dateTime"),s("span",{style:{color:"#AB5959"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"DateTime"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"};")]),r(`
`),s("span",{class:"line"}),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"type"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"CounterAction"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8C862B"}},"type"),s("span",{style:{color:"#AB5959"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"Extract"),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#6C7834"}},"ActionNamesTypes"),s("span",{style:{color:"#8E8F8B"}},","),s("span",{style:{color:"#B56959"}},"'UPDATE_COUNTER'"),s("span",{style:{color:"#8E8F8B"}},">")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8C862B"}},"payload"),s("span",{style:{color:"#AB5959"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"Counter"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"};")]),r(`
`),s("span",{class:"line"}),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"type"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"DateTimeAction"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8C862B"}},"type"),s("span",{style:{color:"#AB5959"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"Extract"),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#6C7834"}},"ActionNamesTypes"),s("span",{style:{color:"#8E8F8B"}},","),s("span",{style:{color:"#B56959"}},"'UPDATE_DATETIME'"),s("span",{style:{color:"#8E8F8B"}},">")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8C862B"}},"payload"),s("span",{style:{color:"#AB5959"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"DateTime"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"};")]),r(`
`),s("span",{class:"line"}),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"type"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"Actions"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"CounterAction"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"|"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"DateTimeAction"),s("span",{style:{color:"#8E8F8B"}},";")])])])],-1),T9=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"const"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"reducers"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#B8A965"}},"state"),s("span",{style:{color:"#CB7676"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"State"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"initialState"),s("span",{style:{color:"#858585"}},",")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#B8A965"}},"action"),s("span",{style:{color:"#CB7676"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"Actions"),s("span",{style:{color:"#858585"}},")"),s("span",{style:{color:"#CB7676"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"State"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"=>"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#4D9375"}},"switch"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#B8A965"}},"action"),s("span",{style:{color:"#858585"}},"."),s("span",{style:{color:"#B8A965"}},"type"),s("span",{style:{color:"#858585"}},")"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#4D9375"}},"case"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"ActionNames"),s("span",{style:{color:"#858585"}},"."),s("span",{style:{color:"#D4976C"}},"UPDATE_COUNTER"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"      "),s("span",{style:{color:"#4D9375"}},"return"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"        "),s("span",{style:{color:"#CB7676"}},"..."),s("span",{style:{color:"#B8A965"}},"state"),s("span",{style:{color:"#858585"}},",")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"        "),s("span",{style:{color:"#E0A569"}},"counter"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"action"),s("span",{style:{color:"#858585"}},"."),s("span",{style:{color:"#B8A965"}},"payload"),s("span",{style:{color:"#858585"}},","),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#758575"}},"// Counter")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"      "),s("span",{style:{color:"#858585"}},"};")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"}")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#4D9375"}},"case"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"ActionNames"),s("span",{style:{color:"#858585"}},"."),s("span",{style:{color:"#D4976C"}},"UPDATE_DATETIME"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"      "),s("span",{style:{color:"#4D9375"}},"return"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"        "),s("span",{style:{color:"#CB7676"}},"..."),s("span",{style:{color:"#B8A965"}},"state"),s("span",{style:{color:"#858585"}},",")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"        "),s("span",{style:{color:"#E0A569"}},"dateTime"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"action"),s("span",{style:{color:"#858585"}},"."),s("span",{style:{color:"#B8A965"}},"payload"),s("span",{style:{color:"#858585"}},","),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#758575"}},"// DateTime")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"      "),s("span",{style:{color:"#858585"}},"};")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"}")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#4D9375"}},"default"),s("span",{style:{color:"#858585"}},":")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"      "),s("span",{style:{color:"#4D9375"}},"return"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"        "),s("span",{style:{color:"#CB7676"}},"..."),s("span",{style:{color:"#B8A965"}},"state"),s("span",{style:{color:"#858585"}},",")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"      "),s("span",{style:{color:"#858585"}},"};")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"}")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"};")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"const"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"reducers"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#8C862B"}},"state"),s("span",{style:{color:"#AB5959"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"State"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"initialState"),s("span",{style:{color:"#8E8F8B"}},",")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8C862B"}},"action"),s("span",{style:{color:"#AB5959"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"Actions"),s("span",{style:{color:"#8E8F8B"}},")"),s("span",{style:{color:"#AB5959"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"State"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"=>"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#1C6B48"}},"switch"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#8C862B"}},"action"),s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#8C862B"}},"type"),s("span",{style:{color:"#8E8F8B"}},")"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#1C6B48"}},"case"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"ActionNames"),s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#A65E2B"}},"UPDATE_COUNTER"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#1C6B48"}},"return"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"        "),s("span",{style:{color:"#AB5959"}},"..."),s("span",{style:{color:"#8C862B"}},"state"),s("span",{style:{color:"#8E8F8B"}},",")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"        "),s("span",{style:{color:"#B58451"}},"counter"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"action"),s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#8C862B"}},"payload"),s("span",{style:{color:"#8E8F8B"}},","),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A0ADA0"}},"// Counter")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#8E8F8B"}},"};")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"}")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#1C6B48"}},"case"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"ActionNames"),s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#A65E2B"}},"UPDATE_DATETIME"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#1C6B48"}},"return"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"        "),s("span",{style:{color:"#AB5959"}},"..."),s("span",{style:{color:"#8C862B"}},"state"),s("span",{style:{color:"#8E8F8B"}},",")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"        "),s("span",{style:{color:"#B58451"}},"dateTime"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"action"),s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#8C862B"}},"payload"),s("span",{style:{color:"#8E8F8B"}},","),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A0ADA0"}},"// DateTime")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#8E8F8B"}},"};")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"}")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#1C6B48"}},"default"),s("span",{style:{color:"#8E8F8B"}},":")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#1C6B48"}},"return"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"        "),s("span",{style:{color:"#AB5959"}},"..."),s("span",{style:{color:"#8C862B"}},"state"),s("span",{style:{color:"#8E8F8B"}},",")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#8E8F8B"}},"};")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"}")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"};")])])])],-1),$9={__name:"24",setup(e){const n={layout:"two-cols-header-with-gap",hideInToc:!0,srcSequence:"./chapters/using-types.md"};return q(Y),(t,o)=>{const l=Ms;return g(),z(ve,bs(Ds(n)),{left:T(a=>[M(l,cs({},{ranges:[""]}),{default:T(()=>[S9]),_:1},16)]),right:T(a=>[M(l,cs({},{ranges:[""]}),{default:T(()=>[T9]),_:1},16)]),default:T(()=>[P9,x9]),_:1},16)}}},O9=s("h3",null,"Differentiating union types - via discriminant union types with generics",-1),M9=s("p",null,"Discriminant unions also work with generics to make code more reusable.",-1),N9=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"type"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"Loading"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#B8A965"}},"state"),s("span",{style:{color:"#CB7676"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},"'loading'"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"};")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"type"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"Failed"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#B8A965"}},"state"),s("span",{style:{color:"#CB7676"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},"'failed'"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#B8A965"}},"statusCode"),s("span",{style:{color:"#CB7676"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"number"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#B8A965"}},"errorMessage"),s("span",{style:{color:"#CB7676"}},"?:"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"string"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"};")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"type"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"Success"),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#A1B567"}},"T"),s("span",{style:{color:"#858585"}},">"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#B8A965"}},"state"),s("span",{style:{color:"#CB7676"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},"'success'"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#B8A965"}},"statusCode"),s("span",{style:{color:"#CB7676"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"number"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#B8A965"}},"data"),s("span",{style:{color:"#CB7676"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"T"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"};")]),r(`
`),s("span",{class:"line"}),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"type"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"APIRequestStatus"),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#A1B567"}},"T"),s("span",{style:{color:"#858585"}},">"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"Loading"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"|"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"Failed"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"|")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#A1B567"}},"Success"),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#A1B567"}},"T"),s("span",{style:{color:"#858585"}},">;")]),r(`
`),s("span",{class:"line"}),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"type"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"Cat"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#B8A965"}},"type"),s("span",{style:{color:"#CB7676"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},"'Cat'"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#B8A965"}},"name"),s("span",{style:{color:"#CB7676"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"string"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"};")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"type"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"Loading"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8C862B"}},"state"),s("span",{style:{color:"#AB5959"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},"'loading'"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"};")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"type"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"Failed"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8C862B"}},"state"),s("span",{style:{color:"#AB5959"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},"'failed'"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8C862B"}},"statusCode"),s("span",{style:{color:"#AB5959"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"number"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8C862B"}},"errorMessage"),s("span",{style:{color:"#AB5959"}},"?:"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"string"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"};")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"type"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"Success"),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#6C7834"}},"T"),s("span",{style:{color:"#8E8F8B"}},">"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8C862B"}},"state"),s("span",{style:{color:"#AB5959"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},"'success'"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8C862B"}},"statusCode"),s("span",{style:{color:"#AB5959"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"number"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8C862B"}},"data"),s("span",{style:{color:"#AB5959"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"T"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"};")]),r(`
`),s("span",{class:"line"}),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"type"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"APIRequestStatus"),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#6C7834"}},"T"),s("span",{style:{color:"#8E8F8B"}},">"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"Loading"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"|"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"Failed"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"|")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#6C7834"}},"Success"),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#6C7834"}},"T"),s("span",{style:{color:"#8E8F8B"}},">;")]),r(`
`),s("span",{class:"line"}),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"type"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"Cat"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8C862B"}},"type"),s("span",{style:{color:"#AB5959"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},"'Cat'"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8C862B"}},"name"),s("span",{style:{color:"#AB5959"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"string"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"};")])])])],-1),L9=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"async"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"function"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"sendAPIRequest"),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#A1B567"}},"T"),s("span",{style:{color:"#858585"}},">()"),s("span",{style:{color:"#CB7676"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"Promise"),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#E0A569"}},"void"),s("span",{style:{color:"#858585"}},">"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#CB7676"}},"const"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"requestStatus"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#4D9375"}},"await"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"getResponse"),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#A1B567"}},"T"),s("span",{style:{color:"#858585"}},">();")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#4D9375"}},"switch"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#B8A965"}},"requestStatus"),s("span",{style:{color:"#858585"}},"."),s("span",{style:{color:"#B8A965"}},"state"),s("span",{style:{color:"#858585"}},")"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#4D9375"}},"case"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},"'loading'"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"      "),s("span",{style:{color:"#CB7676"}},"const"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"state"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"}"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"requestStatus"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"      "),s("span",{style:{color:"#B8A965"}},"console"),s("span",{style:{color:"#858585"}},"."),s("span",{style:{color:"#A1B567"}},"log"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#B8A965"}},"state"),s("span",{style:{color:"#858585"}},");")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"      "),s("span",{style:{color:"#4D9375"}},"return"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"}")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#4D9375"}},"case"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},"'failed'"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"      "),s("span",{style:{color:"#CB7676"}},"const"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"errorMessage"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"}"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"requestStatus"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"      "),s("span",{style:{color:"#B8A965"}},"console"),s("span",{style:{color:"#858585"}},"."),s("span",{style:{color:"#A1B567"}},"log"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#C98A7D"}},"`"),s("span",{style:{color:"#858585"}},"${"),s("span",{style:{color:"#C98A7D"}},"errorMessage")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C98A7D"}},"        "),s("span",{style:{color:"#CB7676"}},"?"),s("span",{style:{color:"#C98A7D"}}," errorMessage "),s("span",{style:{color:"#CB7676"}},":"),s("span",{style:{color:"#C98A7D"}}," "),s("span",{style:{color:"#C98A7D"}},"'- no error message'"),s("span",{style:{color:"#858585"}},"}"),s("span",{style:{color:"#C98A7D"}},"`"),s("span",{style:{color:"#858585"}},");")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"      "),s("span",{style:{color:"#4D9375"}},"return"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"}")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#4D9375"}},"case"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},"'success'"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"      "),s("span",{style:{color:"#CB7676"}},"const"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#D4976C"}},"data"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"}"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"requestStatus"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"      "),s("span",{style:{color:"#B8A965"}},"console"),s("span",{style:{color:"#858585"}},"."),s("span",{style:{color:"#A1B567"}},"log"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#B8A965"}},"data"),s("span",{style:{color:"#858585"}},");")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"      "),s("span",{style:{color:"#4D9375"}},"return"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},"}")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#4D9375"}},"default"),s("span",{style:{color:"#858585"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{}")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"}")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"}")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"async"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"function"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"sendAPIRequest"),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#6C7834"}},"T"),s("span",{style:{color:"#8E8F8B"}},">()"),s("span",{style:{color:"#AB5959"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"Promise"),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#B58451"}},"void"),s("span",{style:{color:"#8E8F8B"}},">"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#AB5959"}},"const"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"requestStatus"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#1C6B48"}},"await"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"getResponse"),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#6C7834"}},"T"),s("span",{style:{color:"#8E8F8B"}},">();")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#1C6B48"}},"switch"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#8C862B"}},"requestStatus"),s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#8C862B"}},"state"),s("span",{style:{color:"#8E8F8B"}},")"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#1C6B48"}},"case"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},"'loading'"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#AB5959"}},"const"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"state"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"}"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"requestStatus"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#8C862B"}},"console"),s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#6C7834"}},"log"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#8C862B"}},"state"),s("span",{style:{color:"#8E8F8B"}},");")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#1C6B48"}},"return"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"}")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#1C6B48"}},"case"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},"'failed'"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#AB5959"}},"const"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"errorMessage"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"}"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"requestStatus"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#8C862B"}},"console"),s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#6C7834"}},"log"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#B56959"}},"`"),s("span",{style:{color:"#8E8F8B"}},"${"),s("span",{style:{color:"#B56959"}},"errorMessage")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B56959"}},"        "),s("span",{style:{color:"#AB5959"}},"?"),s("span",{style:{color:"#B56959"}}," errorMessage "),s("span",{style:{color:"#AB5959"}},":"),s("span",{style:{color:"#B56959"}}," "),s("span",{style:{color:"#B56959"}},"'- no error message'"),s("span",{style:{color:"#8E8F8B"}},"}"),s("span",{style:{color:"#B56959"}},"`"),s("span",{style:{color:"#8E8F8B"}},");")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#1C6B48"}},"return"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"}")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#1C6B48"}},"case"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},"'success'"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#AB5959"}},"const"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"data"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"}"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"requestStatus"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#8C862B"}},"console"),s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#6C7834"}},"log"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#8C862B"}},"data"),s("span",{style:{color:"#8E8F8B"}},");")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#1C6B48"}},"return"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},"}")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#1C6B48"}},"default"),s("span",{style:{color:"#8E8F8B"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{}")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"}")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),I9={__name:"25",setup(e){const n={layout:"two-cols-header-with-gap",hideInToc:!0,srcSequence:"./chapters/using-types.md"};return q(Y),(t,o)=>{const l=Ms;return g(),z(ve,bs(Ds(n)),{left:T(a=>[M(l,cs({},{ranges:[""]}),{default:T(()=>[N9]),_:1},16)]),right:T(a=>[M(l,cs({},{ranges:[""]}),{default:T(()=>[L9]),_:1},16)]),default:T(()=>[O9,M9]),_:1},16)}}},R9=s("h2",null,"React and TSX",-1),U9={__name:"26",setup(e){const n={layout:"section",srcSequence:"./chapters/react-and-tsx.md"};return q(Y),(t,o)=>(g(),z(sl,bs(Ds(n)),{default:T(()=>[R9]),_:1},16))}},j9=s("h3",null,"Deprecate props",-1),q9=s("p",null,[r("TypeScript\u2019s "),s("code",null,"never"),r(" type can be used to deprecate component props. Trying to use the deprecated prop, will result in a type error. Alternatively a soft deprecation can be achieved by using the JSDoc deprecated tag, e.g. "),s("code",null,"@deprecated Please use newProp instead"),r(".")],-1),H9=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"type"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"CustomButtonProps"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"PropsWithChildren"),s("span",{style:{color:"#858585"}},"<")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#A1B567"}},"Partial"),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#A1B567"}},"Pick"),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#A1B567"}},"HTMLButtonElement"),s("span",{style:{color:"#858585"}},",")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#C98A7D"}},"'autofocus'"),s("span",{style:{color:"#CB7676"}},"|"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},"'ariaDisabled'"),s("span",{style:{color:"#858585"}},">")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},">"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"&"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#A1B567"}},"onClick"),s("span",{style:{color:"#CB7676"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#B8A965"}},"event"),s("span",{style:{color:"#CB7676"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"MouseEvent"),s("span",{style:{color:"#858585"}},"<")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"      "),s("span",{style:{color:"#A1B567"}},"HTMLButtonElement")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#858585"}},">)"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"=>"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"void"),s("span",{style:{color:"#858585"}},",")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#B8A965"}},"oldProp"),s("span",{style:{color:"#CB7676"}},"?:"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"never"),s("span",{style:{color:"#858585"}},","),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#758575"}},"// is deprecated")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#B8A965"}},"newProp"),s("span",{style:{color:"#CB7676"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"string"),s("span",{style:{color:"#858585"}},",")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"}")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},">;")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"type"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"CustomButtonProps"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"PropsWithChildren"),s("span",{style:{color:"#8E8F8B"}},"<")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#6C7834"}},"Partial"),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#6C7834"}},"Pick"),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#6C7834"}},"HTMLButtonElement"),s("span",{style:{color:"#8E8F8B"}},",")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#B56959"}},"'autofocus'"),s("span",{style:{color:"#AB5959"}},"|"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},"'ariaDisabled'"),s("span",{style:{color:"#8E8F8B"}},">")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},">"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"&"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#6C7834"}},"onClick"),s("span",{style:{color:"#AB5959"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#8C862B"}},"event"),s("span",{style:{color:"#AB5959"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"MouseEvent"),s("span",{style:{color:"#8E8F8B"}},"<")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#6C7834"}},"HTMLButtonElement")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8E8F8B"}},">)"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"=>"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"void"),s("span",{style:{color:"#8E8F8B"}},",")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8C862B"}},"oldProp"),s("span",{style:{color:"#AB5959"}},"?:"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"never"),s("span",{style:{color:"#8E8F8B"}},","),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A0ADA0"}},"// is deprecated")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8C862B"}},"newProp"),s("span",{style:{color:"#AB5959"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"string"),s("span",{style:{color:"#8E8F8B"}},",")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"}")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},">;")])])])],-1),W9={__name:"27",setup(e){const n={layout:"image-right",image:"https://source.unsplash.com/collection/94734566/1920x1080",srcSequence:"./chapters/react-and-tsx.md"};return q(Y),(t,o)=>{const l=Ms;return g(),z(De,bs(Ds(n)),{default:T(()=>[j9,q9,M(l,cs({},{ranges:[""]}),{default:T(()=>[H9]),_:1},16)]),_:1},16)}}},V9=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"function"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"CustomButton"),s("span",{style:{color:"#858585"}},"({"),s("span",{style:{color:"#B8A965"}},"children"),s("span",{style:{color:"#858585"}},","),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"onClick"),s("span",{style:{color:"#858585"}},",")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#B8A965"}},"newProp"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"}"),s("span",{style:{color:"#CB7676"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"CustomButtonProps"),s("span",{style:{color:"#858585"}},")"),s("span",{style:{color:"#CB7676"}},":")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#A1B567"}},"ReactElement"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#4D9375"}},"return"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"(")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#CB7676"}},"<"),s("span",{style:{color:"#B8A965"}},"button"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"type"),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#C98A7D"}},'"button"'),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"onClick"),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#858585"}},"{"),s("span",{style:{color:"#B8A965"}},"onClick"),s("span",{style:{color:"#858585"}},"}")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"      "),s("span",{style:{color:"#B8A965"}},"data"),s("span",{style:{color:"#CB7676"}},"-"),s("span",{style:{color:"#B8A965"}},"testid"),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#858585"}},"{"),s("span",{style:{color:"#B8A965"}},"newProp"),s("span",{style:{color:"#858585"}},"}")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#CB7676"}},">")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"      "),s("span",{style:{color:"#858585"}},"{"),s("span",{style:{color:"#B8A965"}},"children"),s("span",{style:{color:"#858585"}},"}")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#CB7676"}},"</"),s("span",{style:{color:"#B8A965"}},"button"),s("span",{style:{color:"#CB7676"}},">")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},");")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"}")]),r(`
`),s("span",{class:"line"}),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"function"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"App"),s("span",{style:{color:"#858585"}},"()"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#CB7676"}},"function"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"handleClick"),s("span",{style:{color:"#858585"}},"()"),s("span",{style:{color:"#CB7676"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"void"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#B8A965"}},"console"),s("span",{style:{color:"#858585"}},"."),s("span",{style:{color:"#A1B567"}},"log"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#C98A7D"}},"'Click'"),s("span",{style:{color:"#858585"}},");")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"}")]),r(`
`),s("span",{class:"line"}),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#4D9375"}},"return"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"(")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#CB7676"}},"<"),s("span",{style:{color:"#B8A965"}},"CustomButton")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"      "),s("span",{style:{color:"#B8A965"}},"onClick"),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#858585"}},"{"),s("span",{style:{color:"#B8A965"}},"handleClick"),s("span",{style:{color:"#858585"}},"}")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"      "),s("span",{style:{color:"#B8A965"}},"newProp"),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#C98A7D"}},'"test"')]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"      "),s("span",{style:{color:"#758575"}},'// oldProp="test" // error')]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#CB7676"}},">")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"      "),s("span",{style:{color:"#B8A965"}},"Button")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#CB7676"}},"</"),s("span",{style:{color:"#B8A965"}},"CustomButton"),s("span",{style:{color:"#CB7676"}},">")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},");")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"}")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"function"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"CustomButton"),s("span",{style:{color:"#8E8F8B"}},"({"),s("span",{style:{color:"#8C862B"}},"children"),s("span",{style:{color:"#8E8F8B"}},","),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"onClick"),s("span",{style:{color:"#8E8F8B"}},",")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8C862B"}},"newProp"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"}"),s("span",{style:{color:"#AB5959"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"CustomButtonProps"),s("span",{style:{color:"#8E8F8B"}},")"),s("span",{style:{color:"#AB5959"}},":")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#6C7834"}},"ReactElement"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#1C6B48"}},"return"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"(")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#AB5959"}},"<"),s("span",{style:{color:"#8C862B"}},"button"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"type"),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#B56959"}},'"button"'),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"onClick"),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#8E8F8B"}},"{"),s("span",{style:{color:"#8C862B"}},"onClick"),s("span",{style:{color:"#8E8F8B"}},"}")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#8C862B"}},"data"),s("span",{style:{color:"#AB5959"}},"-"),s("span",{style:{color:"#8C862B"}},"testid"),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#8E8F8B"}},"{"),s("span",{style:{color:"#8C862B"}},"newProp"),s("span",{style:{color:"#8E8F8B"}},"}")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#AB5959"}},">")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#8E8F8B"}},"{"),s("span",{style:{color:"#8C862B"}},"children"),s("span",{style:{color:"#8E8F8B"}},"}")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#AB5959"}},"</"),s("span",{style:{color:"#8C862B"}},"button"),s("span",{style:{color:"#AB5959"}},">")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},");")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"}")]),r(`
`),s("span",{class:"line"}),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"function"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"App"),s("span",{style:{color:"#8E8F8B"}},"()"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#AB5959"}},"function"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"handleClick"),s("span",{style:{color:"#8E8F8B"}},"()"),s("span",{style:{color:"#AB5959"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"void"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8C862B"}},"console"),s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#6C7834"}},"log"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#B56959"}},"'Click'"),s("span",{style:{color:"#8E8F8B"}},");")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"}")]),r(`
`),s("span",{class:"line"}),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#1C6B48"}},"return"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"(")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#AB5959"}},"<"),s("span",{style:{color:"#8C862B"}},"CustomButton")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#8C862B"}},"onClick"),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#8E8F8B"}},"{"),s("span",{style:{color:"#8C862B"}},"handleClick"),s("span",{style:{color:"#8E8F8B"}},"}")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#8C862B"}},"newProp"),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#B56959"}},'"test"')]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"      "),s("span",{style:{color:"#A0ADA0"}},'// oldProp="test" // error')]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#AB5959"}},">")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#8C862B"}},"Button")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#AB5959"}},"</"),s("span",{style:{color:"#8C862B"}},"CustomButton"),s("span",{style:{color:"#AB5959"}},">")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},");")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),K9={__name:"28",setup(e){const n={layout:"image-right",image:"https://source.unsplash.com/collection/94734566/1920x1080",srcSequence:"./chapters/react-and-tsx.md"};return q(Y),(t,o)=>{const l=Ms;return g(),z(De,bs(Ds(n)),{default:T(()=>[M(l,cs({},{ranges:[""]}),{default:T(()=>[V9]),_:1},16)]),_:1},16)}}},z9=s("h3",null,"Disallow prop combinations",-1),Y9=s("p",null,[r("TypeScript\u2019s "),s("code",null,"never"),r(" type can also be used to prohibit certain combinations of props.")],-1),G9=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"function"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"ButtonLink"),s("span",{style:{color:"#858585"}},"({")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#B8A965"}},"onClick"),s("span",{style:{color:"#858585"}},","),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"as"),s("span",{style:{color:"#858585"}},","),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"disabled"),s("span",{style:{color:"#858585"}},","),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"href")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"}"),s("span",{style:{color:"#CB7676"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"PropsWithChildren"),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#A1B567"}},"ButtonLinkProps"),s("span",{style:{color:"#858585"}},">)"),s("span",{style:{color:"#CB7676"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#A1B567"}},"const"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"Component"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"as"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"}),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#A1B567"}},"if"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#B8A965"}},"Component"),s("span",{style:{color:"#DBD7CA"}}," === "),s("span",{style:{color:"#C98A7D"}},"'button'"),s("span",{style:{color:"#858585"}},")"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#B8A965"}},"console"),s("span",{style:{color:"#858585"}},"."),s("span",{style:{color:"#A1B567"}},"log"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#B8A965"}},"href"),s("span",{style:{color:"#858585"}},");"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#758575"}},"// undefined")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#B8A965"}},"console"),s("span",{style:{color:"#858585"}},"."),s("span",{style:{color:"#A1B567"}},"log"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#B8A965"}},"disabled"),s("span",{style:{color:"#858585"}},");")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"}")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#A1B567"}},"if"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#B8A965"}},"Component"),s("span",{style:{color:"#DBD7CA"}}," === "),s("span",{style:{color:"#C98A7D"}},"'a'"),s("span",{style:{color:"#858585"}},")"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#B8A965"}},"console"),s("span",{style:{color:"#858585"}},"."),s("span",{style:{color:"#A1B567"}},"log"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#B8A965"}},"href"),s("span",{style:{color:"#858585"}},");"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#758575"}},"// string")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#B8A965"}},"console"),s("span",{style:{color:"#858585"}},"."),s("span",{style:{color:"#A1B567"}},"log"),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#B8A965"}},"disabled"),s("span",{style:{color:"#858585"}},");")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},"}")]),r(`
`),s("span",{class:"line"}),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#A1B567"}},"return"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"(")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    <"),s("span",{style:{color:"#B8A965"}},"Component"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"className"),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#858585"}},"{"),s("span",{style:{color:"#DBD7CA"}},"style."),s("span",{style:{color:"#B8A965"}},"ButtonLink"),s("span",{style:{color:"#858585"}},"}")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"      "),s("span",{style:{color:"#B8A965"}},"onClick"),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#858585"}},"{"),s("span",{style:{color:"#B8A965"}},"onClick"),s("span",{style:{color:"#858585"}},"}"),s("span",{style:{color:"#CB7676"}},">")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"      "),s("span",{style:{color:"#B8A965"}},"Click")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    </"),s("span",{style:{color:"#B8A965"}},"Component"),s("span",{style:{color:"#DBD7CA"}},">")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},");")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"}")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"function"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"ButtonLink"),s("span",{style:{color:"#8E8F8B"}},"({")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8C862B"}},"onClick"),s("span",{style:{color:"#8E8F8B"}},","),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"as"),s("span",{style:{color:"#8E8F8B"}},","),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"disabled"),s("span",{style:{color:"#8E8F8B"}},","),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"href")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"}"),s("span",{style:{color:"#AB5959"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"PropsWithChildren"),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#6C7834"}},"ButtonLinkProps"),s("span",{style:{color:"#8E8F8B"}},">)"),s("span",{style:{color:"#AB5959"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#6C7834"}},"const"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"Component"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"as"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"}),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#6C7834"}},"if"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#8C862B"}},"Component"),s("span",{style:{color:"#393A34"}}," === "),s("span",{style:{color:"#B56959"}},"'button'"),s("span",{style:{color:"#8E8F8B"}},")"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8C862B"}},"console"),s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#6C7834"}},"log"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#8C862B"}},"href"),s("span",{style:{color:"#8E8F8B"}},");"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A0ADA0"}},"// undefined")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8C862B"}},"console"),s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#6C7834"}},"log"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#8C862B"}},"disabled"),s("span",{style:{color:"#8E8F8B"}},");")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"}")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#6C7834"}},"if"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#8C862B"}},"Component"),s("span",{style:{color:"#393A34"}}," === "),s("span",{style:{color:"#B56959"}},"'a'"),s("span",{style:{color:"#8E8F8B"}},")"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8C862B"}},"console"),s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#6C7834"}},"log"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#8C862B"}},"href"),s("span",{style:{color:"#8E8F8B"}},");"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A0ADA0"}},"// string")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#8C862B"}},"console"),s("span",{style:{color:"#8E8F8B"}},"."),s("span",{style:{color:"#6C7834"}},"log"),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#8C862B"}},"disabled"),s("span",{style:{color:"#8E8F8B"}},");")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},"}")]),r(`
`),s("span",{class:"line"}),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#6C7834"}},"return"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"(")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    <"),s("span",{style:{color:"#8C862B"}},"Component"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"className"),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#8E8F8B"}},"{"),s("span",{style:{color:"#393A34"}},"style."),s("span",{style:{color:"#8C862B"}},"ButtonLink"),s("span",{style:{color:"#8E8F8B"}},"}")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#8C862B"}},"onClick"),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#8E8F8B"}},"{"),s("span",{style:{color:"#8C862B"}},"onClick"),s("span",{style:{color:"#8E8F8B"}},"}"),s("span",{style:{color:"#AB5959"}},">")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#8C862B"}},"Click")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    </"),s("span",{style:{color:"#8C862B"}},"Component"),s("span",{style:{color:"#393A34"}},">")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},");")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),Z9={__name:"29",setup(e){const n={layout:"image-right",image:"https://source.unsplash.com/collection/94734566/1920x1080",srcSequence:"./chapters/react-and-tsx.md"};return q(Y),(t,o)=>{const l=Ms;return g(),z(De,bs(Ds(n)),{default:T(()=>[z9,Y9,M(l,cs({},{ranges:[""]}),{default:T(()=>[G9]),_:1},16)]),_:1},16)}}},X9=s("p",null,"The as-field is used as discriminant property to distinguish both types.",-1),J9=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"type"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"ButtonLinkCommonProps"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#A1B567"}},"onClick"),s("span",{style:{color:"#CB7676"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"()"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"=>"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"void"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"};")]),r(`
`),s("span",{class:"line"}),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"type"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"ButtonLinkButtonProps"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#B8A965"}},"as"),s("span",{style:{color:"#CB7676"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},"'button'"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#B8A965"}},"disabled"),s("span",{style:{color:"#CB7676"}},"?:"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"boolean"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#B8A965"}},"href"),s("span",{style:{color:"#CB7676"}},"?:"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"never"),s("span",{style:{color:"#858585"}},";"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#758575"}},"// type button should")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"  "),s("span",{style:{color:"#758575"}},"// never have a href attribute")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"};")]),r(`
`),s("span",{class:"line"}),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"type"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"ButtonLinkLinkProps"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#B8A965"}},"as"),s("span",{style:{color:"#CB7676"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#C98A7D"}},"'a'"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#B8A965"}},"disabled"),s("span",{style:{color:"#CB7676"}},"?:"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"false"),s("span",{style:{color:"#858585"}},";"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#758575"}},"// type link should")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"  "),s("span",{style:{color:"#758575"}},"// never have a disabled attribute")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#B8A965"}},"href"),s("span",{style:{color:"#CB7676"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"string"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"};")]),r(`
`),s("span",{class:"line"}),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"type"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"ButtonLinkProps"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"ButtonLinkCommonProps")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#CB7676"}},"&"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"("),s("span",{style:{color:"#A1B567"}},"ButtonLinkButtonProps"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"|")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#A1B567"}},"ButtonLinkLinkProps"),s("span",{style:{color:"#858585"}},");")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"type"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"ButtonLinkCommonProps"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#6C7834"}},"onClick"),s("span",{style:{color:"#AB5959"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"()"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"=>"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"void"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"};")]),r(`
`),s("span",{class:"line"}),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"type"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"ButtonLinkButtonProps"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8C862B"}},"as"),s("span",{style:{color:"#AB5959"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},"'button'"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8C862B"}},"disabled"),s("span",{style:{color:"#AB5959"}},"?:"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"boolean"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8C862B"}},"href"),s("span",{style:{color:"#AB5959"}},"?:"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"never"),s("span",{style:{color:"#8E8F8B"}},";"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A0ADA0"}},"// type button should")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"  "),s("span",{style:{color:"#A0ADA0"}},"// never have a href attribute")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"};")]),r(`
`),s("span",{class:"line"}),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"type"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"ButtonLinkLinkProps"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8C862B"}},"as"),s("span",{style:{color:"#AB5959"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},"'a'"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8C862B"}},"disabled"),s("span",{style:{color:"#AB5959"}},"?:"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"false"),s("span",{style:{color:"#8E8F8B"}},";"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A0ADA0"}},"// type link should")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"  "),s("span",{style:{color:"#A0ADA0"}},"// never have a disabled attribute")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8C862B"}},"href"),s("span",{style:{color:"#AB5959"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"string"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"};")]),r(`
`),s("span",{class:"line"}),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"type"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"ButtonLinkProps"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"ButtonLinkCommonProps")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#AB5959"}},"&"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"("),s("span",{style:{color:"#6C7834"}},"ButtonLinkButtonProps"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"|")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#6C7834"}},"ButtonLinkLinkProps"),s("span",{style:{color:"#8E8F8B"}},");")])])])],-1),Q9={__name:"30",setup(e){const n={layout:"image-right",image:"https://source.unsplash.com/collection/94734566/1920x1080",srcSequence:"./chapters/react-and-tsx.md"};return q(Y),(t,o)=>{const l=Ms;return g(),z(De,bs(Ds(n)),{default:T(()=>[X9,M(l,cs({},{ranges:[""]}),{default:T(()=>[J9]),_:1},16)]),_:1},16)}}},sD=s("h3",null,"Prohibit child components",-1),eD=s("p",null,[r("The "),s("code",null,"never"),r(" type can also be used to prevent the creation of child components.")],-1),nD=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"type"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"ChildProps"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"PropsWithChildren"),s("span",{style:{color:"#858585"}},"<{")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#B8A965"}},"otherProp"),s("span",{style:{color:"#CB7676"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"string"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"}>;")]),r(`
`),s("span",{class:"line"}),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"type"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"ChildlessProps"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#B8A965"}},"children"),s("span",{style:{color:"#CB7676"}},"?:"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"never"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#B8A965"}},"otherProp"),s("span",{style:{color:"#CB7676"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#E0A569"}},"string"),s("span",{style:{color:"#858585"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"};")]),r(`
`),s("span",{class:"line"}),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"function"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"App"),s("span",{style:{color:"#858585"}},"()"),s("span",{style:{color:"#CB7676"}},":"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#A1B567"}},"ReactElement"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"{")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#4D9375"}},"return"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#858585"}},"(")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#CB7676"}},"<>")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"      "),s("span",{style:{color:"#CB7676"}},"<"),s("span",{style:{color:"#B8A965"}},"Child"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"otherProp"),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#C98A7D"}},'"test1"'),s("span",{style:{color:"#CB7676"}},">")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"        "),s("span",{style:{color:"#858585"}},"<"),s("span",{style:{color:"#A1B567"}},"h2"),s("span",{style:{color:"#858585"}},">"),s("span",{style:{color:"#B8A965"}},"Can"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"have"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"child"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"content"),s("span",{style:{color:"#CB7676"}},"</"),s("span",{style:{color:"#B8A965"}},"h2"),s("span",{style:{color:"#CB7676"}},">")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"      "),s("span",{style:{color:"#CB7676"}},"</"),s("span",{style:{color:"#B8A965"}},"Child"),s("span",{style:{color:"#CB7676"}},">")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"      "),s("span",{style:{color:"#CB7676"}},"<"),s("span",{style:{color:"#B8A965"}},"Childless"),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#B8A965"}},"otherProp"),s("span",{style:{color:"#CB7676"}},"="),s("span",{style:{color:"#C98A7D"}},'"test2"'),s("span",{style:{color:"#DBD7CA"}}," "),s("span",{style:{color:"#CB7676"}},"/>")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"    "),s("span",{style:{color:"#CB7676"}},"</>")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"  "),s("span",{style:{color:"#858585"}},");")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#858585"}},"}")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"type"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"ChildProps"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"PropsWithChildren"),s("span",{style:{color:"#8E8F8B"}},"<{")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8C862B"}},"otherProp"),s("span",{style:{color:"#AB5959"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"string"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"}>;")]),r(`
`),s("span",{class:"line"}),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"type"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"ChildlessProps"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8C862B"}},"children"),s("span",{style:{color:"#AB5959"}},"?:"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"never"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8C862B"}},"otherProp"),s("span",{style:{color:"#AB5959"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B58451"}},"string"),s("span",{style:{color:"#8E8F8B"}},";")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"};")]),r(`
`),s("span",{class:"line"}),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"function"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"App"),s("span",{style:{color:"#8E8F8B"}},"()"),s("span",{style:{color:"#AB5959"}},":"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#6C7834"}},"ReactElement"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"{")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#1C6B48"}},"return"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8E8F8B"}},"(")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#AB5959"}},"<>")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#AB5959"}},"<"),s("span",{style:{color:"#8C862B"}},"Child"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"otherProp"),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#B56959"}},'"test1"'),s("span",{style:{color:"#AB5959"}},">")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"        "),s("span",{style:{color:"#8E8F8B"}},"<"),s("span",{style:{color:"#6C7834"}},"h2"),s("span",{style:{color:"#8E8F8B"}},">"),s("span",{style:{color:"#8C862B"}},"Can"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"have"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"child"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"content"),s("span",{style:{color:"#AB5959"}},"</"),s("span",{style:{color:"#8C862B"}},"h2"),s("span",{style:{color:"#AB5959"}},">")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#AB5959"}},"</"),s("span",{style:{color:"#8C862B"}},"Child"),s("span",{style:{color:"#AB5959"}},">")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"      "),s("span",{style:{color:"#AB5959"}},"<"),s("span",{style:{color:"#8C862B"}},"Childless"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#8C862B"}},"otherProp"),s("span",{style:{color:"#AB5959"}},"="),s("span",{style:{color:"#B56959"}},'"test2"'),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#AB5959"}},"/>")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"    "),s("span",{style:{color:"#AB5959"}},"</>")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"  "),s("span",{style:{color:"#8E8F8B"}},");")]),r(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),tD={__name:"31",setup(e){const n={layout:"image-right",image:"https://source.unsplash.com/collection/94734566/1920x1080",srcSequence:"./chapters/react-and-tsx.md"};return q(Y),(t,o)=>{const l=Ms;return g(),z(De,bs(Ds(n)),{default:T(()=>[sD,eD,M(l,cs({},{ranges:[""]}),{default:T(()=>[nD]),_:1},16)]),_:1},16)}}},oD=[{path:"1",name:"page-1",component:t3,meta:{theme:"seriph",background:"https://source.unsplash.com/collection/94734566/1920x1080",class:"text-center",highlighter:"shiki",lineNumbers:!0,info:`## TypeScript in frontend projects
`,drawings:{persist:!1},exportFilename:"slides.pdf",favicon:"favicon.ico",title:"TypeScript in frontend projects",slide:{raw:`---
# try also 'default' to start simple
theme: seriph
# random image from a curated Unsplash collection by Anthony
# like them? see https://unsplash.com/collections/94734566/slidev
background: https://source.unsplash.com/collection/94734566/1920x1080
# apply any windi css classes to the current slide
class: 'text-center'
# https://sli.dev/custom/highlighters.html
highlighter: shiki
# show line numbers in code blocks
lineNumbers: true
# some information about the slides, markdown enabled
info: |
  ## TypeScript in frontend projects
# persist drawings in exports and build
drawings:
  persist: false
# use UnoCSS (experimental)
# css: unocss

# pdf export
# download: true
exportFilename: slides.pdf

# favicon
favicon: favicon.ico

---
# TypeScript in frontend projects
`,title:"TypeScript in frontend projects",level:1,content:"# TypeScript in frontend projects",frontmatter:{theme:"seriph",background:"https://source.unsplash.com/collection/94734566/1920x1080",class:"text-center",highlighter:"shiki",lineNumbers:!0,info:`## TypeScript in frontend projects
`,drawings:{persist:!1},exportFilename:"slides.pdf",favicon:"favicon.ico",title:"TypeScript in frontend projects"},index:0,start:0,end:31,notesHTML:"",filepath:"/home/runner/work/typescript-improvements-slides/typescript-improvements-slides/slides/slides.md",id:0,no:1},__clicksElements:[],__preloaded:!1}},{path:"2",name:"page-2",component:d3,meta:{hideInToc:!0,layout:"image-right",image:"https://source.unsplash.com/collection/94734566/1920x1080",slide:{raw:`---
hideInToc: true
layout: image-right
image: https://source.unsplash.com/collection/94734566/1920x1080
---

## Table of Contents

<Toc minDepth="2" maxDepth="2" />
`,title:"Table of Contents",level:2,content:`## Table of Contents

<Toc minDepth="2" maxDepth="2" />`,frontmatter:{hideInToc:!0,layout:"image-right",image:"https://source.unsplash.com/collection/94734566/1920x1080"},index:1,start:31,end:41,notesHTML:"",filepath:"/home/runner/work/typescript-improvements-slides/typescript-improvements-slides/slides/slides.md",id:1,no:2},__clicksElements:[],__preloaded:!1}},{path:"3",name:"page-3",component:B3,meta:{layout:"section",background:"https://source.unsplash.com/collection/94734566/1920x1080",title:"Structural typing vs nominal typing",srcSequence:"./chapters/structural-typing-vs-nominal-typing.md",slide:{raw:null,title:"Structural typing vs nominal typing",level:2,content:"## Structural typing vs nominal typing",frontmatter:{layout:"section",background:"https://source.unsplash.com/collection/94734566/1920x1080",title:"Structural typing vs nominal typing",srcSequence:"./chapters/structural-typing-vs-nominal-typing.md"},index:2,start:0,end:7,source:{filepath:"/home/runner/work/typescript-improvements-slides/typescript-improvements-slides/slides/chapters/structural-typing-vs-nominal-typing.md",raw:`---
layout: section
background: https://source.unsplash.com/collection/94734566/1920x1080
---

## Structural typing vs nominal typing
`,title:"Structural typing vs nominal typing",level:2,content:"## Structural typing vs nominal typing",frontmatter:{layout:"section",background:"https://source.unsplash.com/collection/94734566/1920x1080",title:"Structural typing vs nominal typing"},index:0,start:0,end:7},inline:{raw:`---
src: ./chapters/structural-typing-vs-nominal-typing.md
---
`,content:"",frontmatter:{},index:2,start:41,end:45},filepath:"/home/runner/work/typescript-improvements-slides/typescript-improvements-slides/slides/chapters/structural-typing-vs-nominal-typing.md",notesHTML:"",id:2,no:3},__clicksElements:[],__preloaded:!1}},{path:"4",name:"page-4",component:eg,meta:{layout:"two-cols-header-with-gap",hideInToc:!0,srcSequence:"./chapters/structural-typing-vs-nominal-typing.md",slide:{raw:`---
layout: two-cols-header-with-gap
hideInToc: true
---

### Structural typing

Structural typing means that types with the same structure are compatible regardless of name. TypeScript uses structural typing by default.

::left::

\`\`\`ts
type MacBook = {
  name: string;
  colour: string;
  numberOfFeet: number;
  hasFans: boolean;
  canBeInARoom: boolean;
};

type Animal = {
  name: string;
  colour: string;
  numberOfFeet: number;
  hasFans: boolean;
  canBeInARoom: boolean;
};
\`\`\`

::right::

\`\`\`ts
const macBookPro: MacBook = {
  name: 'Mac',
  colour: 'gray',
  numberOfFeet: 4,
  hasFans: true,
  canBeInARoom: true,
};

const elephant: Animal = {
  name: 'Benjamin',
  colour: 'gray',
  numberOfFeet: 4,
  hasFans: true,
  canBeInARoom: true,
};

const listOfMacBooks: MacBook[] = [
  macBookPro,
  elephant, // no error
];
\`\`\`
`,title:"Structural typing",level:3,content:`### Structural typing

Structural typing means that types with the same structure are compatible regardless of name. TypeScript uses structural typing by default.

::left::

\`\`\`ts
type MacBook = {
  name: string;
  colour: string;
  numberOfFeet: number;
  hasFans: boolean;
  canBeInARoom: boolean;
};

type Animal = {
  name: string;
  colour: string;
  numberOfFeet: number;
  hasFans: boolean;
  canBeInARoom: boolean;
};
\`\`\`

::right::

\`\`\`ts
const macBookPro: MacBook = {
  name: 'Mac',
  colour: 'gray',
  numberOfFeet: 4,
  hasFans: true,
  canBeInARoom: true,
};

const elephant: Animal = {
  name: 'Benjamin',
  colour: 'gray',
  numberOfFeet: 4,
  hasFans: true,
  canBeInARoom: true,
};

const listOfMacBooks: MacBook[] = [
  macBookPro,
  elephant, // no error
];
\`\`\``,frontmatter:{layout:"two-cols-header-with-gap",hideInToc:!0,srcSequence:"./chapters/structural-typing-vs-nominal-typing.md"},index:3,start:7,end:61,source:{filepath:"/home/runner/work/typescript-improvements-slides/typescript-improvements-slides/slides/chapters/structural-typing-vs-nominal-typing.md",raw:`---
layout: two-cols-header-with-gap
hideInToc: true
---

### Structural typing

Structural typing means that types with the same structure are compatible regardless of name. TypeScript uses structural typing by default.

::left::

\`\`\`ts
type MacBook = {
  name: string;
  colour: string;
  numberOfFeet: number;
  hasFans: boolean;
  canBeInARoom: boolean;
};

type Animal = {
  name: string;
  colour: string;
  numberOfFeet: number;
  hasFans: boolean;
  canBeInARoom: boolean;
};
\`\`\`

::right::

\`\`\`ts
const macBookPro: MacBook = {
  name: 'Mac',
  colour: 'gray',
  numberOfFeet: 4,
  hasFans: true,
  canBeInARoom: true,
};

const elephant: Animal = {
  name: 'Benjamin',
  colour: 'gray',
  numberOfFeet: 4,
  hasFans: true,
  canBeInARoom: true,
};

const listOfMacBooks: MacBook[] = [
  macBookPro,
  elephant, // no error
];
\`\`\`
`,title:"Structural typing",level:3,content:`### Structural typing

Structural typing means that types with the same structure are compatible regardless of name. TypeScript uses structural typing by default.

::left::

\`\`\`ts
type MacBook = {
  name: string;
  colour: string;
  numberOfFeet: number;
  hasFans: boolean;
  canBeInARoom: boolean;
};

type Animal = {
  name: string;
  colour: string;
  numberOfFeet: number;
  hasFans: boolean;
  canBeInARoom: boolean;
};
\`\`\`

::right::

\`\`\`ts
const macBookPro: MacBook = {
  name: 'Mac',
  colour: 'gray',
  numberOfFeet: 4,
  hasFans: true,
  canBeInARoom: true,
};

const elephant: Animal = {
  name: 'Benjamin',
  colour: 'gray',
  numberOfFeet: 4,
  hasFans: true,
  canBeInARoom: true,
};

const listOfMacBooks: MacBook[] = [
  macBookPro,
  elephant, // no error
];
\`\`\``,frontmatter:{layout:"two-cols-header-with-gap",hideInToc:!0},index:1,start:7,end:61},filepath:"/home/runner/work/typescript-improvements-slides/typescript-improvements-slides/slides/chapters/structural-typing-vs-nominal-typing.md",notesHTML:"",id:3,no:4},__clicksElements:[],__preloaded:!1}},{path:"5",name:"page-5",component:ag,meta:{hideInToc:!0,srcSequence:"./chapters/structural-typing-vs-nominal-typing.md",slide:{raw:`---
hideInToc: true
---

### Nominal typing

Nominal typing means that each type is unique and types can not be used interchangeably even when structurally identically.
Compatibility can be created via interfaces or inheritance.

Nominal Typing is widely used in languages like Java or C#. Flow uses a mix of nominal and structural typing.
Nominal Typing can be emulated in TypeScript via Branded Types.

\`\`\`java
public interface IMacBookAnimal {}
public record MacBook(String colour) implements IMacBookAnimal {}
public record Animal(String colour) implements IMacBookAnimal {}

public class NominalTypingExample {
  public static void main(String[] args) {
    var macBookPro = new MacBook("gray");
    var elephant = new Animal("gray");
    // List<MacBook> listOfMacBooks = Arrays.asList(macBookPro, elephant); // error
    List<IMacBookAnimal> listOfMacBooks = Arrays.asList(macBookPro, elephant); // no error
  }
}
\`\`\`
`,title:"Nominal typing",level:3,content:`### Nominal typing

Nominal typing means that each type is unique and types can not be used interchangeably even when structurally identically.
Compatibility can be created via interfaces or inheritance.

Nominal Typing is widely used in languages like Java or C#. Flow uses a mix of nominal and structural typing.
Nominal Typing can be emulated in TypeScript via Branded Types.

\`\`\`java
public interface IMacBookAnimal {}
public record MacBook(String colour) implements IMacBookAnimal {}
public record Animal(String colour) implements IMacBookAnimal {}

public class NominalTypingExample {
  public static void main(String[] args) {
    var macBookPro = new MacBook("gray");
    var elephant = new Animal("gray");
    // List<MacBook> listOfMacBooks = Arrays.asList(macBookPro, elephant); // error
    List<IMacBookAnimal> listOfMacBooks = Arrays.asList(macBookPro, elephant); // no error
  }
}
\`\`\``,frontmatter:{hideInToc:!0,srcSequence:"./chapters/structural-typing-vs-nominal-typing.md"},index:4,start:61,end:88,source:{filepath:"/home/runner/work/typescript-improvements-slides/typescript-improvements-slides/slides/chapters/structural-typing-vs-nominal-typing.md",raw:`---
hideInToc: true
---

### Nominal typing

Nominal typing means that each type is unique and types can not be used interchangeably even when structurally identically.
Compatibility can be created via interfaces or inheritance.

Nominal Typing is widely used in languages like Java or C#. Flow uses a mix of nominal and structural typing.
Nominal Typing can be emulated in TypeScript via Branded Types.

\`\`\`java
public interface IMacBookAnimal {}
public record MacBook(String colour) implements IMacBookAnimal {}
public record Animal(String colour) implements IMacBookAnimal {}

public class NominalTypingExample {
  public static void main(String[] args) {
    var macBookPro = new MacBook("gray");
    var elephant = new Animal("gray");
    // List<MacBook> listOfMacBooks = Arrays.asList(macBookPro, elephant); // error
    List<IMacBookAnimal> listOfMacBooks = Arrays.asList(macBookPro, elephant); // no error
  }
}
\`\`\`
`,title:"Nominal typing",level:3,content:`### Nominal typing

Nominal typing means that each type is unique and types can not be used interchangeably even when structurally identically.
Compatibility can be created via interfaces or inheritance.

Nominal Typing is widely used in languages like Java or C#. Flow uses a mix of nominal and structural typing.
Nominal Typing can be emulated in TypeScript via Branded Types.

\`\`\`java
public interface IMacBookAnimal {}
public record MacBook(String colour) implements IMacBookAnimal {}
public record Animal(String colour) implements IMacBookAnimal {}

public class NominalTypingExample {
  public static void main(String[] args) {
    var macBookPro = new MacBook("gray");
    var elephant = new Animal("gray");
    // List<MacBook> listOfMacBooks = Arrays.asList(macBookPro, elephant); // error
    List<IMacBookAnimal> listOfMacBooks = Arrays.asList(macBookPro, elephant); // no error
  }
}
\`\`\``,frontmatter:{hideInToc:!0},index:2,start:61,end:88},filepath:"/home/runner/work/typescript-improvements-slides/typescript-improvements-slides/slides/chapters/structural-typing-vs-nominal-typing.md",notesHTML:"",id:4,no:5},__clicksElements:[],__preloaded:!1}},{path:"6",name:"page-6",component:ig,meta:{layout:"section",title:"Modeling types",srcSequence:"./chapters/modeling-types.md",slide:{raw:null,title:"Modeling types",level:2,content:"## Modeling types",frontmatter:{layout:"section",title:"Modeling types",srcSequence:"./chapters/modeling-types.md"},index:5,start:0,end:6,source:{filepath:"/home/runner/work/typescript-improvements-slides/typescript-improvements-slides/slides/chapters/modeling-types.md",raw:`---
layout: section
---

## Modeling types
`,title:"Modeling types",level:2,content:"## Modeling types",frontmatter:{layout:"section",title:"Modeling types"},index:0,start:0,end:6},inline:{raw:`---
src: ./chapters/modeling-types.md
---
`,content:"",frontmatter:{},index:3,start:45,end:49},filepath:"/home/runner/work/typescript-improvements-slides/typescript-improvements-slides/slides/chapters/modeling-types.md",notesHTML:"",id:5,no:6},__clicksElements:[],__preloaded:!1}},{path:"7",name:"page-7",component:dg,meta:{layout:"image-right",image:"https://source.unsplash.com/collection/94734566/1920x1080",srcSequence:"./chapters/modeling-types.md",slide:{raw:`---
layout: image-right
image: https://source.unsplash.com/collection/94734566/1920x1080
---

### Types & interfaces

Types and interfaces can be utilized to create shapes for data. Both can be used interchangeably in a lot of cases, but they differ in syntax and mutability.
Interfaces are mutable, while types are not. Unlike interfaces, types can also be used for primitives like number or string.

\`\`\`ts
type CustomerID = string;

type Customer1 = {
  id: CustomerID;
  firstName: string;
  lastName: string;
};

interface Customer2 {
  id: CustomerID;
  firstName: string;
  lastName: string;
}
\`\`\`
`,title:"Types & interfaces",level:3,content:`### Types & interfaces

Types and interfaces can be utilized to create shapes for data. Both can be used interchangeably in a lot of cases, but they differ in syntax and mutability.
Interfaces are mutable, while types are not. Unlike interfaces, types can also be used for primitives like number or string.

\`\`\`ts
type CustomerID = string;

type Customer1 = {
  id: CustomerID;
  firstName: string;
  lastName: string;
};

interface Customer2 {
  id: CustomerID;
  firstName: string;
  lastName: string;
}
\`\`\``,frontmatter:{layout:"image-right",image:"https://source.unsplash.com/collection/94734566/1920x1080",srcSequence:"./chapters/modeling-types.md"},index:6,start:6,end:32,source:{filepath:"/home/runner/work/typescript-improvements-slides/typescript-improvements-slides/slides/chapters/modeling-types.md",raw:`---
layout: image-right
image: https://source.unsplash.com/collection/94734566/1920x1080
---

### Types & interfaces

Types and interfaces can be utilized to create shapes for data. Both can be used interchangeably in a lot of cases, but they differ in syntax and mutability.
Interfaces are mutable, while types are not. Unlike interfaces, types can also be used for primitives like number or string.

\`\`\`ts
type CustomerID = string;

type Customer1 = {
  id: CustomerID;
  firstName: string;
  lastName: string;
};

interface Customer2 {
  id: CustomerID;
  firstName: string;
  lastName: string;
}
\`\`\`
`,title:"Types & interfaces",level:3,content:`### Types & interfaces

Types and interfaces can be utilized to create shapes for data. Both can be used interchangeably in a lot of cases, but they differ in syntax and mutability.
Interfaces are mutable, while types are not. Unlike interfaces, types can also be used for primitives like number or string.

\`\`\`ts
type CustomerID = string;

type Customer1 = {
  id: CustomerID;
  firstName: string;
  lastName: string;
};

interface Customer2 {
  id: CustomerID;
  firstName: string;
  lastName: string;
}
\`\`\``,frontmatter:{layout:"image-right",image:"https://source.unsplash.com/collection/94734566/1920x1080"},index:1,start:6,end:32},filepath:"/home/runner/work/typescript-improvements-slides/typescript-improvements-slides/slides/chapters/modeling-types.md",notesHTML:"",id:6,no:7},__clicksElements:[],__preloaded:!1}},{path:"8",name:"page-8",component:Bg,meta:{layout:"image-right",image:"https://source.unsplash.com/collection/94734566/1920x1080",srcSequence:"./chapters/modeling-types.md",slide:{raw:`---
layout: image-right
image: https://source.unsplash.com/collection/94734566/1920x1080
---

### Indexed Access Types

Keys/members of types and interfaces can be accessed via bracket notation in other types and interfaces or when creating variables.
Type information of referenced types are preserved.

\`\`\`ts
type CustomerID = string;

type Customer1 = {
  id: CustomerID;
  firstName: string;
  lastName: string;
};
const customerLastName:
  Customer1['lastName'] = 'Larry';

interface Customer2 {
  id: CustomerID;
  firstName: string;
  lastName: string;
}
const customerLastName2:
  Customer2['lastName'] = 'Peter';
\`\`\`

`,title:"Indexed Access Types",level:3,content:`### Indexed Access Types

Keys/members of types and interfaces can be accessed via bracket notation in other types and interfaces or when creating variables.
Type information of referenced types are preserved.

\`\`\`ts
type CustomerID = string;

type Customer1 = {
  id: CustomerID;
  firstName: string;
  lastName: string;
};
const customerLastName:
  Customer1['lastName'] = 'Larry';

interface Customer2 {
  id: CustomerID;
  firstName: string;
  lastName: string;
}
const customerLastName2:
  Customer2['lastName'] = 'Peter';
\`\`\``,frontmatter:{layout:"image-right",image:"https://source.unsplash.com/collection/94734566/1920x1080",srcSequence:"./chapters/modeling-types.md"},index:7,start:32,end:63,source:{filepath:"/home/runner/work/typescript-improvements-slides/typescript-improvements-slides/slides/chapters/modeling-types.md",raw:`---
layout: image-right
image: https://source.unsplash.com/collection/94734566/1920x1080
---

### Indexed Access Types

Keys/members of types and interfaces can be accessed via bracket notation in other types and interfaces or when creating variables.
Type information of referenced types are preserved.

\`\`\`ts
type CustomerID = string;

type Customer1 = {
  id: CustomerID;
  firstName: string;
  lastName: string;
};
const customerLastName:
  Customer1['lastName'] = 'Larry';

interface Customer2 {
  id: CustomerID;
  firstName: string;
  lastName: string;
}
const customerLastName2:
  Customer2['lastName'] = 'Peter';
\`\`\`

`,title:"Indexed Access Types",level:3,content:`### Indexed Access Types

Keys/members of types and interfaces can be accessed via bracket notation in other types and interfaces or when creating variables.
Type information of referenced types are preserved.

\`\`\`ts
type CustomerID = string;

type Customer1 = {
  id: CustomerID;
  firstName: string;
  lastName: string;
};
const customerLastName:
  Customer1['lastName'] = 'Larry';

interface Customer2 {
  id: CustomerID;
  firstName: string;
  lastName: string;
}
const customerLastName2:
  Customer2['lastName'] = 'Peter';
\`\`\``,frontmatter:{layout:"image-right",image:"https://source.unsplash.com/collection/94734566/1920x1080"},index:2,start:32,end:63},filepath:"/home/runner/work/typescript-improvements-slides/typescript-improvements-slides/slides/chapters/modeling-types.md",notesHTML:"",id:7,no:8},__clicksElements:[],__preloaded:!1}},{path:"9",name:"page-9",component:_g,meta:{layout:"two-cols-header-with-gap",srcSequence:"./chapters/modeling-types.md",slide:{raw:`---
layout: two-cols-header-with-gap
---

### Creating types from other types

::left::

Example payload from an API-endpoint

\`\`\`json
[
  {
    "id": "B122",
    "firstName": "Sherlock",
    "lastName": "Holmes",
    "house": "221B",
    "street": "Baker Street",
    "city": "London",
    "postcode": "NW16XE",
    "defaultedPayments": 1,
    "missedPayments": 50
  }
]
\`\`\`

::right::

Corresponding monolithic type

\`\`\`ts
type Customer = {
  id: string;
  firstName: string;
  lastName: string;
  house: string;
  street: string;
  city: string;
  postcode: string;
  defaultedPayments: number;
  missedPayments: number;
};

type CustomerList = Customer[];
\`\`\`
`,title:"Creating types from other types",level:3,content:`### Creating types from other types

::left::

Example payload from an API-endpoint

\`\`\`json
[
  {
    "id": "B122",
    "firstName": "Sherlock",
    "lastName": "Holmes",
    "house": "221B",
    "street": "Baker Street",
    "city": "London",
    "postcode": "NW16XE",
    "defaultedPayments": 1,
    "missedPayments": 50
  }
]
\`\`\`

::right::

Corresponding monolithic type

\`\`\`ts
type Customer = {
  id: string;
  firstName: string;
  lastName: string;
  house: string;
  street: string;
  city: string;
  postcode: string;
  defaultedPayments: number;
  missedPayments: number;
};

type CustomerList = Customer[];
\`\`\``,frontmatter:{layout:"two-cols-header-with-gap",srcSequence:"./chapters/modeling-types.md"},index:8,start:63,end:109,source:{filepath:"/home/runner/work/typescript-improvements-slides/typescript-improvements-slides/slides/chapters/modeling-types.md",raw:`---
layout: two-cols-header-with-gap
---

### Creating types from other types

::left::

Example payload from an API-endpoint

\`\`\`json
[
  {
    "id": "B122",
    "firstName": "Sherlock",
    "lastName": "Holmes",
    "house": "221B",
    "street": "Baker Street",
    "city": "London",
    "postcode": "NW16XE",
    "defaultedPayments": 1,
    "missedPayments": 50
  }
]
\`\`\`

::right::

Corresponding monolithic type

\`\`\`ts
type Customer = {
  id: string;
  firstName: string;
  lastName: string;
  house: string;
  street: string;
  city: string;
  postcode: string;
  defaultedPayments: number;
  missedPayments: number;
};

type CustomerList = Customer[];
\`\`\`
`,title:"Creating types from other types",level:3,content:`### Creating types from other types

::left::

Example payload from an API-endpoint

\`\`\`json
[
  {
    "id": "B122",
    "firstName": "Sherlock",
    "lastName": "Holmes",
    "house": "221B",
    "street": "Baker Street",
    "city": "London",
    "postcode": "NW16XE",
    "defaultedPayments": 1,
    "missedPayments": 50
  }
]
\`\`\`

::right::

Corresponding monolithic type

\`\`\`ts
type Customer = {
  id: string;
  firstName: string;
  lastName: string;
  house: string;
  street: string;
  city: string;
  postcode: string;
  defaultedPayments: number;
  missedPayments: number;
};

type CustomerList = Customer[];
\`\`\``,frontmatter:{layout:"two-cols-header-with-gap"},index:3,start:63,end:109},filepath:"/home/runner/work/typescript-improvements-slides/typescript-improvements-slides/slides/chapters/modeling-types.md",notesHTML:"",id:8,no:9},__clicksElements:[],__preloaded:!1}},{path:"10",name:"page-10",component:kg,meta:{layout:"image-right",image:"https://source.unsplash.com/collection/94734566/1920x1080",srcSequence:"./chapters/modeling-types.md",slide:{raw:`---
layout: image-right
image: https://source.unsplash.com/collection/94734566/1920x1080
---

### Intersection types

Intersection types can be used to compose types from subtypes or other, unrelated types.

\`\`\`ts
type CustomerDefaultFields = {
  id: string;
  firstName: string;
  lastName: string;
};
type CustomerAddress = {
  house: string;
  street: string;
  city: string;
  postcode: string;
};
type CustomerPaymentStatus = {
  defaultedPayments: number;
  missedPayments: number;
};
type Customer = CustomerDefaultFields
  & CustomerAddress;
type CustomerWithPaymentData =
  & CustomerDefaultFields
  & CustomerPaymentStatus;
\`\`\`
`,title:"Intersection types",level:3,content:`### Intersection types

Intersection types can be used to compose types from subtypes or other, unrelated types.

\`\`\`ts
type CustomerDefaultFields = {
  id: string;
  firstName: string;
  lastName: string;
};
type CustomerAddress = {
  house: string;
  street: string;
  city: string;
  postcode: string;
};
type CustomerPaymentStatus = {
  defaultedPayments: number;
  missedPayments: number;
};
type Customer = CustomerDefaultFields
  & CustomerAddress;
type CustomerWithPaymentData =
  & CustomerDefaultFields
  & CustomerPaymentStatus;
\`\`\``,frontmatter:{layout:"image-right",image:"https://source.unsplash.com/collection/94734566/1920x1080",srcSequence:"./chapters/modeling-types.md"},index:9,start:109,end:141,source:{filepath:"/home/runner/work/typescript-improvements-slides/typescript-improvements-slides/slides/chapters/modeling-types.md",raw:`---
layout: image-right
image: https://source.unsplash.com/collection/94734566/1920x1080
---

### Intersection types

Intersection types can be used to compose types from subtypes or other, unrelated types.

\`\`\`ts
type CustomerDefaultFields = {
  id: string;
  firstName: string;
  lastName: string;
};
type CustomerAddress = {
  house: string;
  street: string;
  city: string;
  postcode: string;
};
type CustomerPaymentStatus = {
  defaultedPayments: number;
  missedPayments: number;
};
type Customer = CustomerDefaultFields
  & CustomerAddress;
type CustomerWithPaymentData =
  & CustomerDefaultFields
  & CustomerPaymentStatus;
\`\`\`
`,title:"Intersection types",level:3,content:`### Intersection types

Intersection types can be used to compose types from subtypes or other, unrelated types.

\`\`\`ts
type CustomerDefaultFields = {
  id: string;
  firstName: string;
  lastName: string;
};
type CustomerAddress = {
  house: string;
  street: string;
  city: string;
  postcode: string;
};
type CustomerPaymentStatus = {
  defaultedPayments: number;
  missedPayments: number;
};
type Customer = CustomerDefaultFields
  & CustomerAddress;
type CustomerWithPaymentData =
  & CustomerDefaultFields
  & CustomerPaymentStatus;
\`\`\``,frontmatter:{layout:"image-right",image:"https://source.unsplash.com/collection/94734566/1920x1080"},index:4,start:109,end:141},filepath:"/home/runner/work/typescript-improvements-slides/typescript-improvements-slides/slides/chapters/modeling-types.md",notesHTML:"",id:9,no:10},__clicksElements:[],__preloaded:!1}},{path:"11",name:"page-11",component:xg,meta:{layout:"image-right",image:"https://source.unsplash.com/collection/94734566/1920x1080",srcSequence:"./chapters/modeling-types.md",slide:{raw:`---
layout: image-right
image: https://source.unsplash.com/collection/94734566/1920x1080
---

The same result can be achieved via \`extend\` when using interfaces.

\`\`\`ts
interface CustomerDefaultFields {
  id: string;
  firstName: string;
  lastName: string;
}
interface CustomerAddress {
  house: string;
  street: string;
  city: string;
  postcode: string;
}
interface CustomerPaymentStatus {
  defaultedPayments: number;
  missedPayments: number;
}
interface Customer extends
  CustomerDefaultFields,
  CustomerAddress {}
interface CustomerWithPaymentData extends
  CustomerDefaultFields,
  CustomerAddress,
  CustomerPaymentStatus {}
\`\`\`
`,content:`The same result can be achieved via \`extend\` when using interfaces.

\`\`\`ts
interface CustomerDefaultFields {
  id: string;
  firstName: string;
  lastName: string;
}
interface CustomerAddress {
  house: string;
  street: string;
  city: string;
  postcode: string;
}
interface CustomerPaymentStatus {
  defaultedPayments: number;
  missedPayments: number;
}
interface Customer extends
  CustomerDefaultFields,
  CustomerAddress {}
interface CustomerWithPaymentData extends
  CustomerDefaultFields,
  CustomerAddress,
  CustomerPaymentStatus {}
\`\`\``,frontmatter:{layout:"image-right",image:"https://source.unsplash.com/collection/94734566/1920x1080",srcSequence:"./chapters/modeling-types.md"},index:10,start:141,end:173,source:{filepath:"/home/runner/work/typescript-improvements-slides/typescript-improvements-slides/slides/chapters/modeling-types.md",raw:`---
layout: image-right
image: https://source.unsplash.com/collection/94734566/1920x1080
---

The same result can be achieved via \`extend\` when using interfaces.

\`\`\`ts
interface CustomerDefaultFields {
  id: string;
  firstName: string;
  lastName: string;
}
interface CustomerAddress {
  house: string;
  street: string;
  city: string;
  postcode: string;
}
interface CustomerPaymentStatus {
  defaultedPayments: number;
  missedPayments: number;
}
interface Customer extends
  CustomerDefaultFields,
  CustomerAddress {}
interface CustomerWithPaymentData extends
  CustomerDefaultFields,
  CustomerAddress,
  CustomerPaymentStatus {}
\`\`\`
`,content:`The same result can be achieved via \`extend\` when using interfaces.

\`\`\`ts
interface CustomerDefaultFields {
  id: string;
  firstName: string;
  lastName: string;
}
interface CustomerAddress {
  house: string;
  street: string;
  city: string;
  postcode: string;
}
interface CustomerPaymentStatus {
  defaultedPayments: number;
  missedPayments: number;
}
interface Customer extends
  CustomerDefaultFields,
  CustomerAddress {}
interface CustomerWithPaymentData extends
  CustomerDefaultFields,
  CustomerAddress,
  CustomerPaymentStatus {}
\`\`\``,frontmatter:{layout:"image-right",image:"https://source.unsplash.com/collection/94734566/1920x1080"},index:5,start:141,end:173},filepath:"/home/runner/work/typescript-improvements-slides/typescript-improvements-slides/slides/chapters/modeling-types.md",notesHTML:"",id:10,no:11},__clicksElements:[],__preloaded:!1}},{path:"12",name:"page-12",component:Og,meta:{layout:"image-right",image:"https://source.unsplash.com/collection/94734566/1920x1080",srcSequence:"./chapters/modeling-types.md",slide:{raw:`---
layout: image-right
image: https://source.unsplash.com/collection/94734566/1920x1080
---

### Pick & Omit

Types can also be created by including or excluding certain keys/members from a complex base type via the Pick and Omit utility types.

\`\`\`ts
type CustomerFields = {
  id: string;
  firstName: string;
  lastName: string;
  house: string;
  street: string;
  city: string;
  postcode: string;
  defaultedPayments: number;
  missedPayments: number;
};
type Customer1 = Pick<CustomerFields,
  'id' | 'firstName' | 'lastName' |
  'house' | 'street' | 'city' | 'postcode'
>;
type Customer2 = Omit<CustomerFields,
  'defaultedPayments' | 'missedPayments'
>;
\`\`\`
`,title:"Pick & Omit",level:3,content:`### Pick & Omit

Types can also be created by including or excluding certain keys/members from a complex base type via the Pick and Omit utility types.

\`\`\`ts
type CustomerFields = {
  id: string;
  firstName: string;
  lastName: string;
  house: string;
  street: string;
  city: string;
  postcode: string;
  defaultedPayments: number;
  missedPayments: number;
};
type Customer1 = Pick<CustomerFields,
  'id' | 'firstName' | 'lastName' |
  'house' | 'street' | 'city' | 'postcode'
>;
type Customer2 = Omit<CustomerFields,
  'defaultedPayments' | 'missedPayments'
>;
\`\`\``,frontmatter:{layout:"image-right",image:"https://source.unsplash.com/collection/94734566/1920x1080",srcSequence:"./chapters/modeling-types.md"},index:11,start:173,end:203,source:{filepath:"/home/runner/work/typescript-improvements-slides/typescript-improvements-slides/slides/chapters/modeling-types.md",raw:`---
layout: image-right
image: https://source.unsplash.com/collection/94734566/1920x1080
---

### Pick & Omit

Types can also be created by including or excluding certain keys/members from a complex base type via the Pick and Omit utility types.

\`\`\`ts
type CustomerFields = {
  id: string;
  firstName: string;
  lastName: string;
  house: string;
  street: string;
  city: string;
  postcode: string;
  defaultedPayments: number;
  missedPayments: number;
};
type Customer1 = Pick<CustomerFields,
  'id' | 'firstName' | 'lastName' |
  'house' | 'street' | 'city' | 'postcode'
>;
type Customer2 = Omit<CustomerFields,
  'defaultedPayments' | 'missedPayments'
>;
\`\`\`
`,title:"Pick & Omit",level:3,content:`### Pick & Omit

Types can also be created by including or excluding certain keys/members from a complex base type via the Pick and Omit utility types.

\`\`\`ts
type CustomerFields = {
  id: string;
  firstName: string;
  lastName: string;
  house: string;
  street: string;
  city: string;
  postcode: string;
  defaultedPayments: number;
  missedPayments: number;
};
type Customer1 = Pick<CustomerFields,
  'id' | 'firstName' | 'lastName' |
  'house' | 'street' | 'city' | 'postcode'
>;
type Customer2 = Omit<CustomerFields,
  'defaultedPayments' | 'missedPayments'
>;
\`\`\``,frontmatter:{layout:"image-right",image:"https://source.unsplash.com/collection/94734566/1920x1080"},index:6,start:173,end:203},filepath:"/home/runner/work/typescript-improvements-slides/typescript-improvements-slides/slides/chapters/modeling-types.md",notesHTML:"",id:11,no:12},__clicksElements:[],__preloaded:!1}},{path:"13",name:"page-13",component:Lg,meta:{srcSequence:"./chapters/modeling-types.md",slide:{raw:`
Pick and Omit can also be used to change the type of certain keys, by removing the keys first and then adding them again with a different, e.g. narrower type.
This comes in handy when dealing with incoming data that needs to be adapted to the type system of an application.

\`\`\`ts
import currency from 'currency.js';

type LoanLooselyTyped = {
  id: string;
  title: string;
  tranche: string;
  available_amount: string;
  annualised_return: string;
  term_remaining: string;
  ltv: number;
  loan_value: string;
};
type Loan = Omit<LoanLooselyTyped,
  'available_amount' | 'annualised_return' | 'term_remaining' | 'ltv' | 'loan_value'
> & {
  available_amount: currency;
  annualised_return: currency;
  term_remaining: Date;
  ltv: BigInt;
  loan_value: currency;
};
\`\`\`
`,content:`Pick and Omit can also be used to change the type of certain keys, by removing the keys first and then adding them again with a different, e.g. narrower type.
This comes in handy when dealing with incoming data that needs to be adapted to the type system of an application.

\`\`\`ts
import currency from 'currency.js';

type LoanLooselyTyped = {
  id: string;
  title: string;
  tranche: string;
  available_amount: string;
  annualised_return: string;
  term_remaining: string;
  ltv: number;
  loan_value: string;
};
type Loan = Omit<LoanLooselyTyped,
  'available_amount' | 'annualised_return' | 'term_remaining' | 'ltv' | 'loan_value'
> & {
  available_amount: currency;
  annualised_return: currency;
  term_remaining: Date;
  ltv: BigInt;
  loan_value: currency;
};
\`\`\``,frontmatter:{srcSequence:"./chapters/modeling-types.md"},index:12,start:204,end:232,source:{filepath:"/home/runner/work/typescript-improvements-slides/typescript-improvements-slides/slides/chapters/modeling-types.md",raw:`
Pick and Omit can also be used to change the type of certain keys, by removing the keys first and then adding them again with a different, e.g. narrower type.
This comes in handy when dealing with incoming data that needs to be adapted to the type system of an application.

\`\`\`ts
import currency from 'currency.js';

type LoanLooselyTyped = {
  id: string;
  title: string;
  tranche: string;
  available_amount: string;
  annualised_return: string;
  term_remaining: string;
  ltv: number;
  loan_value: string;
};
type Loan = Omit<LoanLooselyTyped,
  'available_amount' | 'annualised_return' | 'term_remaining' | 'ltv' | 'loan_value'
> & {
  available_amount: currency;
  annualised_return: currency;
  term_remaining: Date;
  ltv: BigInt;
  loan_value: currency;
};
\`\`\`
`,content:`Pick and Omit can also be used to change the type of certain keys, by removing the keys first and then adding them again with a different, e.g. narrower type.
This comes in handy when dealing with incoming data that needs to be adapted to the type system of an application.

\`\`\`ts
import currency from 'currency.js';

type LoanLooselyTyped = {
  id: string;
  title: string;
  tranche: string;
  available_amount: string;
  annualised_return: string;
  term_remaining: string;
  ltv: number;
  loan_value: string;
};
type Loan = Omit<LoanLooselyTyped,
  'available_amount' | 'annualised_return' | 'term_remaining' | 'ltv' | 'loan_value'
> & {
  available_amount: currency;
  annualised_return: currency;
  term_remaining: Date;
  ltv: BigInt;
  loan_value: currency;
};
\`\`\``,frontmatter:{},index:7,start:204,end:232},filepath:"/home/runner/work/typescript-improvements-slides/typescript-improvements-slides/slides/chapters/modeling-types.md",notesHTML:"",id:12,no:13},__clicksElements:[],__preloaded:!1}},{path:"14",name:"page-14",component:qg,meta:{layout:"two-cols-header-with-gap",srcSequence:"./chapters/modeling-types.md",slide:{raw:`---
layout: two-cols-header-with-gap
---

### Union types

Union types can be used to describe a set of different types, that are assignable to a key/member. Union types can consist of a range of other types like \`string\`, \`boolean\`, other custom types and also \`undefined\`.

::left::

\`\`\`ts
type AnimalSound = 'Meow' | 'Woof' | 'Moo' |
  'Oink';

type Cat = {
  name: string;
  sound: AnimalSound;
  isCurrentChiefMouser: boolean;
};
type Dog = {
  name: string;
  sound: AnimalSound;
  canBeMistakenForAPony: boolean;
};
type Cow = {
  name: string;
  sound: AnimalSound;
};

type Animal = Cat | Dog | Cow;
type AnimalList = Animal[];
\`\`\`

::right::

\`\`\`ts
const cat: Cat = {
  name: 'Mittens',
  sound: 'Meow',
  isCurrentChiefMouser: false,
};

const dog: Dog = {
  name: 'Ben',
  sound: 'Woof',
  canBeMistakenForAPony: true,
};

const cow: Cow = {
  name: 'Gertie',
  sound: 'Meow', // no error
};

const animals: AnimalList = [cat, dog, cow];
\`\`\`
`,title:"Union types",level:3,content:`### Union types

Union types can be used to describe a set of different types, that are assignable to a key/member. Union types can consist of a range of other types like \`string\`, \`boolean\`, other custom types and also \`undefined\`.

::left::

\`\`\`ts
type AnimalSound = 'Meow' | 'Woof' | 'Moo' |
  'Oink';

type Cat = {
  name: string;
  sound: AnimalSound;
  isCurrentChiefMouser: boolean;
};
type Dog = {
  name: string;
  sound: AnimalSound;
  canBeMistakenForAPony: boolean;
};
type Cow = {
  name: string;
  sound: AnimalSound;
};

type Animal = Cat | Dog | Cow;
type AnimalList = Animal[];
\`\`\`

::right::

\`\`\`ts
const cat: Cat = {
  name: 'Mittens',
  sound: 'Meow',
  isCurrentChiefMouser: false,
};

const dog: Dog = {
  name: 'Ben',
  sound: 'Woof',
  canBeMistakenForAPony: true,
};

const cow: Cow = {
  name: 'Gertie',
  sound: 'Meow', // no error
};

const animals: AnimalList = [cat, dog, cow];
\`\`\``,frontmatter:{layout:"two-cols-header-with-gap",srcSequence:"./chapters/modeling-types.md"},index:13,start:232,end:288,source:{filepath:"/home/runner/work/typescript-improvements-slides/typescript-improvements-slides/slides/chapters/modeling-types.md",raw:`---
layout: two-cols-header-with-gap
---

### Union types

Union types can be used to describe a set of different types, that are assignable to a key/member. Union types can consist of a range of other types like \`string\`, \`boolean\`, other custom types and also \`undefined\`.

::left::

\`\`\`ts
type AnimalSound = 'Meow' | 'Woof' | 'Moo' |
  'Oink';

type Cat = {
  name: string;
  sound: AnimalSound;
  isCurrentChiefMouser: boolean;
};
type Dog = {
  name: string;
  sound: AnimalSound;
  canBeMistakenForAPony: boolean;
};
type Cow = {
  name: string;
  sound: AnimalSound;
};

type Animal = Cat | Dog | Cow;
type AnimalList = Animal[];
\`\`\`

::right::

\`\`\`ts
const cat: Cat = {
  name: 'Mittens',
  sound: 'Meow',
  isCurrentChiefMouser: false,
};

const dog: Dog = {
  name: 'Ben',
  sound: 'Woof',
  canBeMistakenForAPony: true,
};

const cow: Cow = {
  name: 'Gertie',
  sound: 'Meow', // no error
};

const animals: AnimalList = [cat, dog, cow];
\`\`\`
`,title:"Union types",level:3,content:`### Union types

Union types can be used to describe a set of different types, that are assignable to a key/member. Union types can consist of a range of other types like \`string\`, \`boolean\`, other custom types and also \`undefined\`.

::left::

\`\`\`ts
type AnimalSound = 'Meow' | 'Woof' | 'Moo' |
  'Oink';

type Cat = {
  name: string;
  sound: AnimalSound;
  isCurrentChiefMouser: boolean;
};
type Dog = {
  name: string;
  sound: AnimalSound;
  canBeMistakenForAPony: boolean;
};
type Cow = {
  name: string;
  sound: AnimalSound;
};

type Animal = Cat | Dog | Cow;
type AnimalList = Animal[];
\`\`\`

::right::

\`\`\`ts
const cat: Cat = {
  name: 'Mittens',
  sound: 'Meow',
  isCurrentChiefMouser: false,
};

const dog: Dog = {
  name: 'Ben',
  sound: 'Woof',
  canBeMistakenForAPony: true,
};

const cow: Cow = {
  name: 'Gertie',
  sound: 'Meow', // no error
};

const animals: AnimalList = [cat, dog, cow];
\`\`\``,frontmatter:{layout:"two-cols-header-with-gap"},index:8,start:232,end:288},filepath:"/home/runner/work/typescript-improvements-slides/typescript-improvements-slides/slides/chapters/modeling-types.md",notesHTML:"",id:13,no:14},__clicksElements:[],__preloaded:!1}},{path:"15",name:"page-15",component:zg,meta:{layout:"two-cols-header-with-gap",srcSequence:"./chapters/modeling-types.md",slide:{raw:`---
layout: two-cols-header-with-gap
---

### Discriminated unions and discriminant property

When union types share a common field with literal string values, that field can be used to automatically differentiate types without explicit type assertion. These union types are called discriminated unions. The shared field is called discriminant property.

::left::

\`\`\`ts
type AnimalSound = 'Meow' | 'Woof' | 'Moo' |
  'Oink';

type Cat = {
  type: 'Cat'; // discriminant property
  name: string;
  sound: AnimalSound;
  isCurrentChiefMouser: boolean;
};

type Dog = {
  type: 'Dog'; // discriminant property
  name: string;
  sound: AnimalSound;
  canBeMistakenForAPony: boolean;
};

type Animal = Cat | Dog;
\`\`\`

::right::

\`\`\`ts
// TS narrows Animal down to Cat
const cat: Animal = {
  type: 'Cat',
  name: 'Mittens',
  sound: 'Meow',
  isCurrentChiefMouser: false,
  // canBeMistakenForAPony: false,
  // Error ('canBeMistakenForAPony' does not exist
  // in type 'Cat')
};

// TS narrows Animal down to Dog
const dog: Animal = {
  type: 'Dog',
  name: 'Ben',
  sound: 'Woof',
  canBeMistakenForAPony: true,
};
\`\`\`
`,title:"Discriminated unions and discriminant property",level:3,content:`### Discriminated unions and discriminant property

When union types share a common field with literal string values, that field can be used to automatically differentiate types without explicit type assertion. These union types are called discriminated unions. The shared field is called discriminant property.

::left::

\`\`\`ts
type AnimalSound = 'Meow' | 'Woof' | 'Moo' |
  'Oink';

type Cat = {
  type: 'Cat'; // discriminant property
  name: string;
  sound: AnimalSound;
  isCurrentChiefMouser: boolean;
};

type Dog = {
  type: 'Dog'; // discriminant property
  name: string;
  sound: AnimalSound;
  canBeMistakenForAPony: boolean;
};

type Animal = Cat | Dog;
\`\`\`

::right::

\`\`\`ts
// TS narrows Animal down to Cat
const cat: Animal = {
  type: 'Cat',
  name: 'Mittens',
  sound: 'Meow',
  isCurrentChiefMouser: false,
  // canBeMistakenForAPony: false,
  // Error ('canBeMistakenForAPony' does not exist
  // in type 'Cat')
};

// TS narrows Animal down to Dog
const dog: Animal = {
  type: 'Dog',
  name: 'Ben',
  sound: 'Woof',
  canBeMistakenForAPony: true,
};
\`\`\``,frontmatter:{layout:"two-cols-header-with-gap",srcSequence:"./chapters/modeling-types.md"},index:14,start:288,end:342,source:{filepath:"/home/runner/work/typescript-improvements-slides/typescript-improvements-slides/slides/chapters/modeling-types.md",raw:`---
layout: two-cols-header-with-gap
---

### Discriminated unions and discriminant property

When union types share a common field with literal string values, that field can be used to automatically differentiate types without explicit type assertion. These union types are called discriminated unions. The shared field is called discriminant property.

::left::

\`\`\`ts
type AnimalSound = 'Meow' | 'Woof' | 'Moo' |
  'Oink';

type Cat = {
  type: 'Cat'; // discriminant property
  name: string;
  sound: AnimalSound;
  isCurrentChiefMouser: boolean;
};

type Dog = {
  type: 'Dog'; // discriminant property
  name: string;
  sound: AnimalSound;
  canBeMistakenForAPony: boolean;
};

type Animal = Cat | Dog;
\`\`\`

::right::

\`\`\`ts
// TS narrows Animal down to Cat
const cat: Animal = {
  type: 'Cat',
  name: 'Mittens',
  sound: 'Meow',
  isCurrentChiefMouser: false,
  // canBeMistakenForAPony: false,
  // Error ('canBeMistakenForAPony' does not exist
  // in type 'Cat')
};

// TS narrows Animal down to Dog
const dog: Animal = {
  type: 'Dog',
  name: 'Ben',
  sound: 'Woof',
  canBeMistakenForAPony: true,
};
\`\`\`
`,title:"Discriminated unions and discriminant property",level:3,content:`### Discriminated unions and discriminant property

When union types share a common field with literal string values, that field can be used to automatically differentiate types without explicit type assertion. These union types are called discriminated unions. The shared field is called discriminant property.

::left::

\`\`\`ts
type AnimalSound = 'Meow' | 'Woof' | 'Moo' |
  'Oink';

type Cat = {
  type: 'Cat'; // discriminant property
  name: string;
  sound: AnimalSound;
  isCurrentChiefMouser: boolean;
};

type Dog = {
  type: 'Dog'; // discriminant property
  name: string;
  sound: AnimalSound;
  canBeMistakenForAPony: boolean;
};

type Animal = Cat | Dog;
\`\`\`

::right::

\`\`\`ts
// TS narrows Animal down to Cat
const cat: Animal = {
  type: 'Cat',
  name: 'Mittens',
  sound: 'Meow',
  isCurrentChiefMouser: false,
  // canBeMistakenForAPony: false,
  // Error ('canBeMistakenForAPony' does not exist
  // in type 'Cat')
};

// TS narrows Animal down to Dog
const dog: Animal = {
  type: 'Dog',
  name: 'Ben',
  sound: 'Woof',
  canBeMistakenForAPony: true,
};
\`\`\``,frontmatter:{layout:"two-cols-header-with-gap"},index:9,start:288,end:342},filepath:"/home/runner/work/typescript-improvements-slides/typescript-improvements-slides/slides/chapters/modeling-types.md",notesHTML:"",id:14,no:15},__clicksElements:[],__preloaded:!1}},{path:"16",name:"page-16",component:Xg,meta:{layout:"image-right",image:"https://source.unsplash.com/collection/94734566/1920x1080",srcSequence:"./chapters/modeling-types.md",slide:{raw:`---
layout: image-right
image: https://source.unsplash.com/collection/94734566/1920x1080
---

### Logical union type combinations

Union types can also be modeled in such a way, that unique logical combinations are created. TypeScript can use those to automatically differentiate members of the union type.

\`\`\`ts
type DatePickerBase = {
  day: number;
  month: number;
  year: number;
};
type DatePickerRegular = {
  maxNumberOfDays?: number; // optional
  showTimePicker: boolean; // unique
};
type DatePickerDateOfBirthMode = {
  minAge?: number; // optional
  maxAge?: number; // optional
  showIAmOldEnoughBox: boolean; // unique
};
type DatePicker = DatePickerBase
  & (DatePickerRegular
    | DatePickerDateOfBirthMode);
\`\`\`
`,title:"Logical union type combinations",level:3,content:`### Logical union type combinations

Union types can also be modeled in such a way, that unique logical combinations are created. TypeScript can use those to automatically differentiate members of the union type.

\`\`\`ts
type DatePickerBase = {
  day: number;
  month: number;
  year: number;
};
type DatePickerRegular = {
  maxNumberOfDays?: number; // optional
  showTimePicker: boolean; // unique
};
type DatePickerDateOfBirthMode = {
  minAge?: number; // optional
  maxAge?: number; // optional
  showIAmOldEnoughBox: boolean; // unique
};
type DatePicker = DatePickerBase
  & (DatePickerRegular
    | DatePickerDateOfBirthMode);
\`\`\``,frontmatter:{layout:"image-right",image:"https://source.unsplash.com/collection/94734566/1920x1080",srcSequence:"./chapters/modeling-types.md"},index:15,start:342,end:371,source:{filepath:"/home/runner/work/typescript-improvements-slides/typescript-improvements-slides/slides/chapters/modeling-types.md",raw:`---
layout: image-right
image: https://source.unsplash.com/collection/94734566/1920x1080
---

### Logical union type combinations

Union types can also be modeled in such a way, that unique logical combinations are created. TypeScript can use those to automatically differentiate members of the union type.

\`\`\`ts
type DatePickerBase = {
  day: number;
  month: number;
  year: number;
};
type DatePickerRegular = {
  maxNumberOfDays?: number; // optional
  showTimePicker: boolean; // unique
};
type DatePickerDateOfBirthMode = {
  minAge?: number; // optional
  maxAge?: number; // optional
  showIAmOldEnoughBox: boolean; // unique
};
type DatePicker = DatePickerBase
  & (DatePickerRegular
    | DatePickerDateOfBirthMode);
\`\`\`
`,title:"Logical union type combinations",level:3,content:`### Logical union type combinations

Union types can also be modeled in such a way, that unique logical combinations are created. TypeScript can use those to automatically differentiate members of the union type.

\`\`\`ts
type DatePickerBase = {
  day: number;
  month: number;
  year: number;
};
type DatePickerRegular = {
  maxNumberOfDays?: number; // optional
  showTimePicker: boolean; // unique
};
type DatePickerDateOfBirthMode = {
  minAge?: number; // optional
  maxAge?: number; // optional
  showIAmOldEnoughBox: boolean; // unique
};
type DatePicker = DatePickerBase
  & (DatePickerRegular
    | DatePickerDateOfBirthMode);
\`\`\``,frontmatter:{layout:"image-right",image:"https://source.unsplash.com/collection/94734566/1920x1080"},index:10,start:342,end:371},filepath:"/home/runner/work/typescript-improvements-slides/typescript-improvements-slides/slides/chapters/modeling-types.md",notesHTML:"",id:15,no:16},__clicksElements:[],__preloaded:!1}},{path:"17",name:"page-17",component:n9,meta:{layout:"two-cols-header-with-gap",srcSequence:"./chapters/modeling-types.md",slide:{raw:`---
layout: two-cols-header-with-gap
---

### Mapped types

Mapped types can be used to iterate over keys/members of multiple types to create new types/members in another type. This helps with DRY-ness.
Additionally, mapped types also allow the adding of \`readonly\`- and \`?\` modifiers.

::left::

\`\`\`ts
type CurrencyAbbreviations = 'GBP' | 'EUR' | 'USD'
  | 'CAD' | 'AUD';

type CurrencyNames = 'Pound' | 'Euro' | 'Dollar'
  | 'Canadian Dollar' | 'Australian Dollar';

type CurrencySymbols = '\xA3' | '\u20AC' | '$';

type Currencies = {
  readonly [K in CurrencyAbbreviations]?: {
    name: CurrencyNames;
    symbol: CurrencySymbols;
  };
};
\`\`\`

::right::

\`\`\`ts
const currencies: Currencies = {
  GBP: {
    name: 'Pound',
    symbol: '\xA3',
  },
  EUR: {
    name: 'Euro',
    symbol: '\u20AC',
  },
  USD: {
    name: 'Euro', // no error
    symbol: '$',
  },
};
\`\`\`
`,title:"Mapped types",level:3,content:`### Mapped types

Mapped types can be used to iterate over keys/members of multiple types to create new types/members in another type. This helps with DRY-ness.
Additionally, mapped types also allow the adding of \`readonly\`- and \`?\` modifiers.

::left::

\`\`\`ts
type CurrencyAbbreviations = 'GBP' | 'EUR' | 'USD'
  | 'CAD' | 'AUD';

type CurrencyNames = 'Pound' | 'Euro' | 'Dollar'
  | 'Canadian Dollar' | 'Australian Dollar';

type CurrencySymbols = '\xA3' | '\u20AC' | '$';

type Currencies = {
  readonly [K in CurrencyAbbreviations]?: {
    name: CurrencyNames;
    symbol: CurrencySymbols;
  };
};
\`\`\`

::right::

\`\`\`ts
const currencies: Currencies = {
  GBP: {
    name: 'Pound',
    symbol: '\xA3',
  },
  EUR: {
    name: 'Euro',
    symbol: '\u20AC',
  },
  USD: {
    name: 'Euro', // no error
    symbol: '$',
  },
};
\`\`\``,frontmatter:{layout:"two-cols-header-with-gap",srcSequence:"./chapters/modeling-types.md"},index:16,start:371,end:418,source:{filepath:"/home/runner/work/typescript-improvements-slides/typescript-improvements-slides/slides/chapters/modeling-types.md",raw:`---
layout: two-cols-header-with-gap
---

### Mapped types

Mapped types can be used to iterate over keys/members of multiple types to create new types/members in another type. This helps with DRY-ness.
Additionally, mapped types also allow the adding of \`readonly\`- and \`?\` modifiers.

::left::

\`\`\`ts
type CurrencyAbbreviations = 'GBP' | 'EUR' | 'USD'
  | 'CAD' | 'AUD';

type CurrencyNames = 'Pound' | 'Euro' | 'Dollar'
  | 'Canadian Dollar' | 'Australian Dollar';

type CurrencySymbols = '\xA3' | '\u20AC' | '$';

type Currencies = {
  readonly [K in CurrencyAbbreviations]?: {
    name: CurrencyNames;
    symbol: CurrencySymbols;
  };
};
\`\`\`

::right::

\`\`\`ts
const currencies: Currencies = {
  GBP: {
    name: 'Pound',
    symbol: '\xA3',
  },
  EUR: {
    name: 'Euro',
    symbol: '\u20AC',
  },
  USD: {
    name: 'Euro', // no error
    symbol: '$',
  },
};
\`\`\`
`,title:"Mapped types",level:3,content:`### Mapped types

Mapped types can be used to iterate over keys/members of multiple types to create new types/members in another type. This helps with DRY-ness.
Additionally, mapped types also allow the adding of \`readonly\`- and \`?\` modifiers.

::left::

\`\`\`ts
type CurrencyAbbreviations = 'GBP' | 'EUR' | 'USD'
  | 'CAD' | 'AUD';

type CurrencyNames = 'Pound' | 'Euro' | 'Dollar'
  | 'Canadian Dollar' | 'Australian Dollar';

type CurrencySymbols = '\xA3' | '\u20AC' | '$';

type Currencies = {
  readonly [K in CurrencyAbbreviations]?: {
    name: CurrencyNames;
    symbol: CurrencySymbols;
  };
};
\`\`\`

::right::

\`\`\`ts
const currencies: Currencies = {
  GBP: {
    name: 'Pound',
    symbol: '\xA3',
  },
  EUR: {
    name: 'Euro',
    symbol: '\u20AC',
  },
  USD: {
    name: 'Euro', // no error
    symbol: '$',
  },
};
\`\`\``,frontmatter:{layout:"two-cols-header-with-gap"},index:11,start:371,end:418},filepath:"/home/runner/work/typescript-improvements-slides/typescript-improvements-slides/slides/chapters/modeling-types.md",notesHTML:"",id:16,no:17},__clicksElements:[],__preloaded:!1}},{path:"18",name:"page-18",component:r9,meta:{layout:"two-cols-header-with-gap",srcSequence:"./chapters/modeling-types.md",slide:{raw:`---
layout: two-cols-header-with-gap
---

Mapped types provide the ability to access the key of the current iteration. This can be used to lookup values by key, similar to looking up values in an object.

::left::

\`\`\`ts
type CurrencyAbbreviations = 'GBP' | 'EUR' | 'USD'
  | 'CAD' | 'AUD';
type CurrencyNames = {
  GBP: 'Pound' | 'Pound Sterling';
  EUR: 'Euro';
  USD: 'Dollar' | 'US Dollar';
  CAD: 'Canadian Dollar';
  AUD: 'Australian Dollar' | 'Dollarydoos';
};
type CurrencySymbols = {
  GBP: '\xA3';
  EUR: '\u20AC';
  USD: '$';
  CAD: '$';
  AUD: '$';
};
type Currencies = {
  readonly [K in CurrencyAbbreviations]?: [
    name: CurrencyNames[K],
    symbol: CurrencySymbols[K],
  ];
};
\`\`\`

::right::

\`\`\`ts
const currencies: Currencies = {
  EUR: ['Euro', '\u20AC'],
  GBP: ['Pound', '\xA3'],
  USD: ['Dollar', '$'],
  CAD: ['Canadian Dollar', '$'],
  AUD: ['Dollarydoos', '$'],
  // CAD: ['Euro', '$'], // error
  // GBP: ['Pound Sterling', '$'], // error
};
\`\`\`
`,content:`Mapped types provide the ability to access the key of the current iteration. This can be used to lookup values by key, similar to looking up values in an object.

::left::

\`\`\`ts
type CurrencyAbbreviations = 'GBP' | 'EUR' | 'USD'
  | 'CAD' | 'AUD';
type CurrencyNames = {
  GBP: 'Pound' | 'Pound Sterling';
  EUR: 'Euro';
  USD: 'Dollar' | 'US Dollar';
  CAD: 'Canadian Dollar';
  AUD: 'Australian Dollar' | 'Dollarydoos';
};
type CurrencySymbols = {
  GBP: '\xA3';
  EUR: '\u20AC';
  USD: '$';
  CAD: '$';
  AUD: '$';
};
type Currencies = {
  readonly [K in CurrencyAbbreviations]?: [
    name: CurrencyNames[K],
    symbol: CurrencySymbols[K],
  ];
};
\`\`\`

::right::

\`\`\`ts
const currencies: Currencies = {
  EUR: ['Euro', '\u20AC'],
  GBP: ['Pound', '\xA3'],
  USD: ['Dollar', '$'],
  CAD: ['Canadian Dollar', '$'],
  AUD: ['Dollarydoos', '$'],
  // CAD: ['Euro', '$'], // error
  // GBP: ['Pound Sterling', '$'], // error
};
\`\`\``,frontmatter:{layout:"two-cols-header-with-gap",srcSequence:"./chapters/modeling-types.md"},index:17,start:418,end:465,source:{filepath:"/home/runner/work/typescript-improvements-slides/typescript-improvements-slides/slides/chapters/modeling-types.md",raw:`---
layout: two-cols-header-with-gap
---

Mapped types provide the ability to access the key of the current iteration. This can be used to lookup values by key, similar to looking up values in an object.

::left::

\`\`\`ts
type CurrencyAbbreviations = 'GBP' | 'EUR' | 'USD'
  | 'CAD' | 'AUD';
type CurrencyNames = {
  GBP: 'Pound' | 'Pound Sterling';
  EUR: 'Euro';
  USD: 'Dollar' | 'US Dollar';
  CAD: 'Canadian Dollar';
  AUD: 'Australian Dollar' | 'Dollarydoos';
};
type CurrencySymbols = {
  GBP: '\xA3';
  EUR: '\u20AC';
  USD: '$';
  CAD: '$';
  AUD: '$';
};
type Currencies = {
  readonly [K in CurrencyAbbreviations]?: [
    name: CurrencyNames[K],
    symbol: CurrencySymbols[K],
  ];
};
\`\`\`

::right::

\`\`\`ts
const currencies: Currencies = {
  EUR: ['Euro', '\u20AC'],
  GBP: ['Pound', '\xA3'],
  USD: ['Dollar', '$'],
  CAD: ['Canadian Dollar', '$'],
  AUD: ['Dollarydoos', '$'],
  // CAD: ['Euro', '$'], // error
  // GBP: ['Pound Sterling', '$'], // error
};
\`\`\`
`,content:`Mapped types provide the ability to access the key of the current iteration. This can be used to lookup values by key, similar to looking up values in an object.

::left::

\`\`\`ts
type CurrencyAbbreviations = 'GBP' | 'EUR' | 'USD'
  | 'CAD' | 'AUD';
type CurrencyNames = {
  GBP: 'Pound' | 'Pound Sterling';
  EUR: 'Euro';
  USD: 'Dollar' | 'US Dollar';
  CAD: 'Canadian Dollar';
  AUD: 'Australian Dollar' | 'Dollarydoos';
};
type CurrencySymbols = {
  GBP: '\xA3';
  EUR: '\u20AC';
  USD: '$';
  CAD: '$';
  AUD: '$';
};
type Currencies = {
  readonly [K in CurrencyAbbreviations]?: [
    name: CurrencyNames[K],
    symbol: CurrencySymbols[K],
  ];
};
\`\`\`

::right::

\`\`\`ts
const currencies: Currencies = {
  EUR: ['Euro', '\u20AC'],
  GBP: ['Pound', '\xA3'],
  USD: ['Dollar', '$'],
  CAD: ['Canadian Dollar', '$'],
  AUD: ['Dollarydoos', '$'],
  // CAD: ['Euro', '$'], // error
  // GBP: ['Pound Sterling', '$'], // error
};
\`\`\``,frontmatter:{layout:"two-cols-header-with-gap"},index:12,start:418,end:465},filepath:"/home/runner/work/typescript-improvements-slides/typescript-improvements-slides/slides/chapters/modeling-types.md",notesHTML:"",id:17,no:18},__clicksElements:[],__preloaded:!1}},{path:"19",name:"page-19",component:y9,meta:{layout:"two-cols-header-with-gap",srcSequence:"./chapters/modeling-types.md",slide:{raw:`---
layout: two-cols-header-with-gap
---

### Conditional types

Conditional types can can be used to conditionally output values by analyzing the input. They are often used in combination with mapped types and generics.

::left::

\`\`\`ts
type Customer = {
  id: string;
  firstName: string;
  lastName: string;
  house: string;
  street: string;
  city: string;
  postCode: string;
  defaultedPayments: number;
  missedPayments: number;
};

type WithUppercaseValues<T> = {
  readonly [K in keyof T]?: T[K] extends string
    ? Uppercase<T[K]>
    : T[K];
};
\`\`\`

::right::

\`\`\`ts
const uppercaseCustomer: WithUppercaseValues<
  Customer
> = {
  // id: 'abcd', // error
  id: 'ABCD',
  firstName: 'LARRY',
};
\`\`\`
`,title:"Conditional types",level:3,content:`### Conditional types

Conditional types can can be used to conditionally output values by analyzing the input. They are often used in combination with mapped types and generics.

::left::

\`\`\`ts
type Customer = {
  id: string;
  firstName: string;
  lastName: string;
  house: string;
  street: string;
  city: string;
  postCode: string;
  defaultedPayments: number;
  missedPayments: number;
};

type WithUppercaseValues<T> = {
  readonly [K in keyof T]?: T[K] extends string
    ? Uppercase<T[K]>
    : T[K];
};
\`\`\`

::right::

\`\`\`ts
const uppercaseCustomer: WithUppercaseValues<
  Customer
> = {
  // id: 'abcd', // error
  id: 'ABCD',
  firstName: 'LARRY',
};
\`\`\``,frontmatter:{layout:"two-cols-header-with-gap",srcSequence:"./chapters/modeling-types.md"},index:18,start:465,end:507,source:{filepath:"/home/runner/work/typescript-improvements-slides/typescript-improvements-slides/slides/chapters/modeling-types.md",raw:`---
layout: two-cols-header-with-gap
---

### Conditional types

Conditional types can can be used to conditionally output values by analyzing the input. They are often used in combination with mapped types and generics.

::left::

\`\`\`ts
type Customer = {
  id: string;
  firstName: string;
  lastName: string;
  house: string;
  street: string;
  city: string;
  postCode: string;
  defaultedPayments: number;
  missedPayments: number;
};

type WithUppercaseValues<T> = {
  readonly [K in keyof T]?: T[K] extends string
    ? Uppercase<T[K]>
    : T[K];
};
\`\`\`

::right::

\`\`\`ts
const uppercaseCustomer: WithUppercaseValues<
  Customer
> = {
  // id: 'abcd', // error
  id: 'ABCD',
  firstName: 'LARRY',
};
\`\`\`
`,title:"Conditional types",level:3,content:`### Conditional types

Conditional types can can be used to conditionally output values by analyzing the input. They are often used in combination with mapped types and generics.

::left::

\`\`\`ts
type Customer = {
  id: string;
  firstName: string;
  lastName: string;
  house: string;
  street: string;
  city: string;
  postCode: string;
  defaultedPayments: number;
  missedPayments: number;
};

type WithUppercaseValues<T> = {
  readonly [K in keyof T]?: T[K] extends string
    ? Uppercase<T[K]>
    : T[K];
};
\`\`\`

::right::

\`\`\`ts
const uppercaseCustomer: WithUppercaseValues<
  Customer
> = {
  // id: 'abcd', // error
  id: 'ABCD',
  firstName: 'LARRY',
};
\`\`\``,frontmatter:{layout:"two-cols-header-with-gap"},index:13,start:465,end:507},filepath:"/home/runner/work/typescript-improvements-slides/typescript-improvements-slides/slides/chapters/modeling-types.md",notesHTML:"",id:18,no:19},__clicksElements:[],__preloaded:!1}},{path:"20",name:"page-20",component:d9,meta:{layout:"section",title:"Using types",srcSequence:"./chapters/using-types.md",slide:{raw:null,title:"Using types",level:2,content:"## Using types",frontmatter:{layout:"section",title:"Using types",srcSequence:"./chapters/using-types.md"},index:19,start:0,end:6,source:{filepath:"/home/runner/work/typescript-improvements-slides/typescript-improvements-slides/slides/chapters/using-types.md",raw:`---
layout: section
---

## Using types
`,title:"Using types",level:2,content:"## Using types",frontmatter:{layout:"section",title:"Using types"},index:0,start:0,end:6},inline:{raw:`---
src: ./chapters/using-types.md
---
`,content:"",frontmatter:{},index:4,start:49,end:53},filepath:"/home/runner/work/typescript-improvements-slides/typescript-improvements-slides/slides/chapters/using-types.md",notesHTML:"",id:19,no:20},__clicksElements:[],__preloaded:!1}},{path:"21",name:"page-21",component:h9,meta:{layout:"two-cols-header-with-gap",hideInToc:!0,srcSequence:"./chapters/using-types.md",slide:{raw:`---
layout: two-cols-header-with-gap
hideInToc: true
---

### Single types and optional keys

TypeScript can infer values via control flow analysis and may allow or disallow access for members of a type.

::left::

\`\`\`ts
type Person = {
  firstName: string;
  lastName: string;
  address?: {
    house: string;
    street: string;
    postcode: string;
    city: string;
  };
};

\`\`\`

::right::

\`\`\`ts
function showPersonDetails(person: Person): void {
  const { firstName, lastName, address } = person;

  console.log(\`First name: \${firstName}\`);
  console.log(\`Last name: \${lastName}\`);

  if (address) {
    const { house, street, postcode,
    city } = address;

    console.log(\`House: \${house}\`);
    console.log(\`Street: \${street}\`);
    console.log(\`Postcode: \${postcode}\`);
    console.log(\`City: \${city}\`);
  }
}
\`\`\`
`,title:"Single types and optional keys",level:3,content:`### Single types and optional keys

TypeScript can infer values via control flow analysis and may allow or disallow access for members of a type.

::left::

\`\`\`ts
type Person = {
  firstName: string;
  lastName: string;
  address?: {
    house: string;
    street: string;
    postcode: string;
    city: string;
  };
};

\`\`\`

::right::

\`\`\`ts
function showPersonDetails(person: Person): void {
  const { firstName, lastName, address } = person;

  console.log(\`First name: \${firstName}\`);
  console.log(\`Last name: \${lastName}\`);

  if (address) {
    const { house, street, postcode,
    city } = address;

    console.log(\`House: \${house}\`);
    console.log(\`Street: \${street}\`);
    console.log(\`Postcode: \${postcode}\`);
    console.log(\`City: \${city}\`);
  }
}
\`\`\``,frontmatter:{layout:"two-cols-header-with-gap",hideInToc:!0,srcSequence:"./chapters/using-types.md"},index:20,start:6,end:52,source:{filepath:"/home/runner/work/typescript-improvements-slides/typescript-improvements-slides/slides/chapters/using-types.md",raw:`---
layout: two-cols-header-with-gap
hideInToc: true
---

### Single types and optional keys

TypeScript can infer values via control flow analysis and may allow or disallow access for members of a type.

::left::

\`\`\`ts
type Person = {
  firstName: string;
  lastName: string;
  address?: {
    house: string;
    street: string;
    postcode: string;
    city: string;
  };
};

\`\`\`

::right::

\`\`\`ts
function showPersonDetails(person: Person): void {
  const { firstName, lastName, address } = person;

  console.log(\`First name: \${firstName}\`);
  console.log(\`Last name: \${lastName}\`);

  if (address) {
    const { house, street, postcode,
    city } = address;

    console.log(\`House: \${house}\`);
    console.log(\`Street: \${street}\`);
    console.log(\`Postcode: \${postcode}\`);
    console.log(\`City: \${city}\`);
  }
}
\`\`\`
`,title:"Single types and optional keys",level:3,content:`### Single types and optional keys

TypeScript can infer values via control flow analysis and may allow or disallow access for members of a type.

::left::

\`\`\`ts
type Person = {
  firstName: string;
  lastName: string;
  address?: {
    house: string;
    street: string;
    postcode: string;
    city: string;
  };
};

\`\`\`

::right::

\`\`\`ts
function showPersonDetails(person: Person): void {
  const { firstName, lastName, address } = person;

  console.log(\`First name: \${firstName}\`);
  console.log(\`Last name: \${lastName}\`);

  if (address) {
    const { house, street, postcode,
    city } = address;

    console.log(\`House: \${house}\`);
    console.log(\`Street: \${street}\`);
    console.log(\`Postcode: \${postcode}\`);
    console.log(\`City: \${city}\`);
  }
}
\`\`\``,frontmatter:{layout:"two-cols-header-with-gap",hideInToc:!0},index:1,start:6,end:52},filepath:"/home/runner/work/typescript-improvements-slides/typescript-improvements-slides/slides/chapters/using-types.md",notesHTML:"",id:20,no:21},__clicksElements:[],__preloaded:!1}},{path:"22",name:"page-22",component:_9,meta:{layout:"two-cols-header-with-gap",hideInToc:!0,srcSequence:"./chapters/using-types.md",slide:{raw:`---
layout: two-cols-header-with-gap
hideInToc: true
---

### Differentiating union types - manual

Narrowing down union types is slightly more complex since manually checking the type isn't possible as types are removed during compilation (type erasure).

::left::

\`\`\`ts
type AnimalSound = 'Meow' | 'Woof' | 'Moo'|
  'Oink';

type Cat = {
  name: string;
  sound: AnimalSound;
  isCurrentChiefMouser: boolean;
};
type Dog = {
  name: string;
  sound: AnimalSound;
  canBeMistakenForAPony: boolean;
};
type Cow = {
  name: string;
  sound: AnimalSound;
};

type Animal = Cat | Dog | Cow;
\`\`\`

::right::

\`\`\`ts
function showAnimalDetails(animal: Animal): void {
  console.log(\`Name: \${animal.name}\`);
  console.log(\`Sound: \${animal.sound}\`);

  if (Object.hasOwn(animal,
    'isCurrentChiefMouser')) {
    const { isCurrentChiefMouser } = animal as Cat
    console.log(isCurrentChiefMouser);
    return;
  }

  if (Object.hasOwn(animal,
    'canBeMistakenForAPony')) {
    const { canBeMistakenForAPony } = animal as Dog
    console.log(canBeMistakenForAPony);
    return;
  }

  // Cow stuff
}
\`\`\`
`,title:"Differentiating union types - manual",level:3,content:`### Differentiating union types - manual

Narrowing down union types is slightly more complex since manually checking the type isn't possible as types are removed during compilation (type erasure).

::left::

\`\`\`ts
type AnimalSound = 'Meow' | 'Woof' | 'Moo'|
  'Oink';

type Cat = {
  name: string;
  sound: AnimalSound;
  isCurrentChiefMouser: boolean;
};
type Dog = {
  name: string;
  sound: AnimalSound;
  canBeMistakenForAPony: boolean;
};
type Cow = {
  name: string;
  sound: AnimalSound;
};

type Animal = Cat | Dog | Cow;
\`\`\`

::right::

\`\`\`ts
function showAnimalDetails(animal: Animal): void {
  console.log(\`Name: \${animal.name}\`);
  console.log(\`Sound: \${animal.sound}\`);

  if (Object.hasOwn(animal,
    'isCurrentChiefMouser')) {
    const { isCurrentChiefMouser } = animal as Cat
    console.log(isCurrentChiefMouser);
    return;
  }

  if (Object.hasOwn(animal,
    'canBeMistakenForAPony')) {
    const { canBeMistakenForAPony } = animal as Dog
    console.log(canBeMistakenForAPony);
    return;
  }

  // Cow stuff
}
\`\`\``,frontmatter:{layout:"two-cols-header-with-gap",hideInToc:!0,srcSequence:"./chapters/using-types.md"},index:21,start:52,end:110,source:{filepath:"/home/runner/work/typescript-improvements-slides/typescript-improvements-slides/slides/chapters/using-types.md",raw:`---
layout: two-cols-header-with-gap
hideInToc: true
---

### Differentiating union types - manual

Narrowing down union types is slightly more complex since manually checking the type isn't possible as types are removed during compilation (type erasure).

::left::

\`\`\`ts
type AnimalSound = 'Meow' | 'Woof' | 'Moo'|
  'Oink';

type Cat = {
  name: string;
  sound: AnimalSound;
  isCurrentChiefMouser: boolean;
};
type Dog = {
  name: string;
  sound: AnimalSound;
  canBeMistakenForAPony: boolean;
};
type Cow = {
  name: string;
  sound: AnimalSound;
};

type Animal = Cat | Dog | Cow;
\`\`\`

::right::

\`\`\`ts
function showAnimalDetails(animal: Animal): void {
  console.log(\`Name: \${animal.name}\`);
  console.log(\`Sound: \${animal.sound}\`);

  if (Object.hasOwn(animal,
    'isCurrentChiefMouser')) {
    const { isCurrentChiefMouser } = animal as Cat
    console.log(isCurrentChiefMouser);
    return;
  }

  if (Object.hasOwn(animal,
    'canBeMistakenForAPony')) {
    const { canBeMistakenForAPony } = animal as Dog
    console.log(canBeMistakenForAPony);
    return;
  }

  // Cow stuff
}
\`\`\`
`,title:"Differentiating union types - manual",level:3,content:`### Differentiating union types - manual

Narrowing down union types is slightly more complex since manually checking the type isn't possible as types are removed during compilation (type erasure).

::left::

\`\`\`ts
type AnimalSound = 'Meow' | 'Woof' | 'Moo'|
  'Oink';

type Cat = {
  name: string;
  sound: AnimalSound;
  isCurrentChiefMouser: boolean;
};
type Dog = {
  name: string;
  sound: AnimalSound;
  canBeMistakenForAPony: boolean;
};
type Cow = {
  name: string;
  sound: AnimalSound;
};

type Animal = Cat | Dog | Cow;
\`\`\`

::right::

\`\`\`ts
function showAnimalDetails(animal: Animal): void {
  console.log(\`Name: \${animal.name}\`);
  console.log(\`Sound: \${animal.sound}\`);

  if (Object.hasOwn(animal,
    'isCurrentChiefMouser')) {
    const { isCurrentChiefMouser } = animal as Cat
    console.log(isCurrentChiefMouser);
    return;
  }

  if (Object.hasOwn(animal,
    'canBeMistakenForAPony')) {
    const { canBeMistakenForAPony } = animal as Dog
    console.log(canBeMistakenForAPony);
    return;
  }

  // Cow stuff
}
\`\`\``,frontmatter:{layout:"two-cols-header-with-gap",hideInToc:!0},index:2,start:52,end:110},filepath:"/home/runner/work/typescript-improvements-slides/typescript-improvements-slides/slides/chapters/using-types.md",notesHTML:"",id:21,no:22},__clicksElements:[],__preloaded:!1}},{path:"23",name:"page-23",component:F9,meta:{layout:"two-cols-header-with-gap",hideInToc:!0,srcSequence:"./chapters/using-types.md",slide:{raw:`---
layout: two-cols-header-with-gap
hideInToc: true
---

### Differentiating union types - via type guards

TypeScript can narrow down multiple types in an union type via built-in type guards. Most common type guards are: \`in\`, \`typeof\` and \`instanceof\`.

::left::

\`\`\`ts
type Person = {
  firstName: string;
  lastName: string;
};

type PersonWithAddress = Person & {
  address: {
    house: string;
    street: string;
    postcode: string;
    city: string;
  };
};

type People = Person | PersonWithAddress;
\`\`\`

::right::

\`\`\`ts
function showPersonDetails(person: People): void {
  const { firstName, lastName } = person;

  console.log(\`First name: \${firstName}\`);
  console.log(\`Last name: \${lastName}\`);

  if ('address' in person) {
    // PersonWithAddress
    const { house, street, postcode, city } =
      person.address;

    console.log(\`House: \${house}\`);
    console.log(\`Street: \${street}\`);
    console.log(\`Postcode: \${postcode}\`);
    console.log(\`City: \${city}\`);
  }
}
\`\`\`
`,title:"Differentiating union types - via type guards",level:3,content:`### Differentiating union types - via type guards

TypeScript can narrow down multiple types in an union type via built-in type guards. Most common type guards are: \`in\`, \`typeof\` and \`instanceof\`.

::left::

\`\`\`ts
type Person = {
  firstName: string;
  lastName: string;
};

type PersonWithAddress = Person & {
  address: {
    house: string;
    street: string;
    postcode: string;
    city: string;
  };
};

type People = Person | PersonWithAddress;
\`\`\`

::right::

\`\`\`ts
function showPersonDetails(person: People): void {
  const { firstName, lastName } = person;

  console.log(\`First name: \${firstName}\`);
  console.log(\`Last name: \${lastName}\`);

  if ('address' in person) {
    // PersonWithAddress
    const { house, street, postcode, city } =
      person.address;

    console.log(\`House: \${house}\`);
    console.log(\`Street: \${street}\`);
    console.log(\`Postcode: \${postcode}\`);
    console.log(\`City: \${city}\`);
  }
}
\`\`\``,frontmatter:{layout:"two-cols-header-with-gap",hideInToc:!0,srcSequence:"./chapters/using-types.md"},index:22,start:110,end:161,source:{filepath:"/home/runner/work/typescript-improvements-slides/typescript-improvements-slides/slides/chapters/using-types.md",raw:`---
layout: two-cols-header-with-gap
hideInToc: true
---

### Differentiating union types - via type guards

TypeScript can narrow down multiple types in an union type via built-in type guards. Most common type guards are: \`in\`, \`typeof\` and \`instanceof\`.

::left::

\`\`\`ts
type Person = {
  firstName: string;
  lastName: string;
};

type PersonWithAddress = Person & {
  address: {
    house: string;
    street: string;
    postcode: string;
    city: string;
  };
};

type People = Person | PersonWithAddress;
\`\`\`

::right::

\`\`\`ts
function showPersonDetails(person: People): void {
  const { firstName, lastName } = person;

  console.log(\`First name: \${firstName}\`);
  console.log(\`Last name: \${lastName}\`);

  if ('address' in person) {
    // PersonWithAddress
    const { house, street, postcode, city } =
      person.address;

    console.log(\`House: \${house}\`);
    console.log(\`Street: \${street}\`);
    console.log(\`Postcode: \${postcode}\`);
    console.log(\`City: \${city}\`);
  }
}
\`\`\`
`,title:"Differentiating union types - via type guards",level:3,content:`### Differentiating union types - via type guards

TypeScript can narrow down multiple types in an union type via built-in type guards. Most common type guards are: \`in\`, \`typeof\` and \`instanceof\`.

::left::

\`\`\`ts
type Person = {
  firstName: string;
  lastName: string;
};

type PersonWithAddress = Person & {
  address: {
    house: string;
    street: string;
    postcode: string;
    city: string;
  };
};

type People = Person | PersonWithAddress;
\`\`\`

::right::

\`\`\`ts
function showPersonDetails(person: People): void {
  const { firstName, lastName } = person;

  console.log(\`First name: \${firstName}\`);
  console.log(\`Last name: \${lastName}\`);

  if ('address' in person) {
    // PersonWithAddress
    const { house, street, postcode, city } =
      person.address;

    console.log(\`House: \${house}\`);
    console.log(\`Street: \${street}\`);
    console.log(\`Postcode: \${postcode}\`);
    console.log(\`City: \${city}\`);
  }
}
\`\`\``,frontmatter:{layout:"two-cols-header-with-gap",hideInToc:!0},index:3,start:110,end:161},filepath:"/home/runner/work/typescript-improvements-slides/typescript-improvements-slides/slides/chapters/using-types.md",notesHTML:"",id:22,no:23},__clicksElements:[],__preloaded:!1}},{path:"24",name:"page-24",component:$9,meta:{layout:"two-cols-header-with-gap",hideInToc:!0,srcSequence:"./chapters/using-types.md",slide:{raw:`---
layout: two-cols-header-with-gap
hideInToc: true
---

### Differentiating union types - via discriminant union types

Since TypeScript is able to narrow down a discriminant union via a discriminant property, discriminant unions are widely used to ensure type security.

::left::

\`\`\`ts
type ActionNamesTypes = 'UPDATE_COUNTER' |
  'UPDATE_DATETIME';

type State = {
  counter: Counter;
  dateTime: DateTime;
};

type CounterAction = {
  type: Extract<ActionNamesTypes,'UPDATE_COUNTER'>
  payload: Counter;
};

type DateTimeAction = {
  type: Extract<ActionNamesTypes,'UPDATE_DATETIME'>
  payload: DateTime;
};

type Actions = CounterAction | DateTimeAction;
\`\`\`

::right::

\`\`\`ts
const reducers = (state: State = initialState,
  action: Actions): State => {
  switch (action.type) {
    case ActionNames.UPDATE_COUNTER: {
      return {
        ...state,
        counter: action.payload, // Counter
      };
    }
    case ActionNames.UPDATE_DATETIME: {
      return {
        ...state,
        dateTime: action.payload, // DateTime
      };
    }
    default:
      return {
        ...state,
      };
  }
};
\`\`\`
`,title:"Differentiating union types - via discriminant union types",level:3,content:`### Differentiating union types - via discriminant union types

Since TypeScript is able to narrow down a discriminant union via a discriminant property, discriminant unions are widely used to ensure type security.

::left::

\`\`\`ts
type ActionNamesTypes = 'UPDATE_COUNTER' |
  'UPDATE_DATETIME';

type State = {
  counter: Counter;
  dateTime: DateTime;
};

type CounterAction = {
  type: Extract<ActionNamesTypes,'UPDATE_COUNTER'>
  payload: Counter;
};

type DateTimeAction = {
  type: Extract<ActionNamesTypes,'UPDATE_DATETIME'>
  payload: DateTime;
};

type Actions = CounterAction | DateTimeAction;
\`\`\`

::right::

\`\`\`ts
const reducers = (state: State = initialState,
  action: Actions): State => {
  switch (action.type) {
    case ActionNames.UPDATE_COUNTER: {
      return {
        ...state,
        counter: action.payload, // Counter
      };
    }
    case ActionNames.UPDATE_DATETIME: {
      return {
        ...state,
        dateTime: action.payload, // DateTime
      };
    }
    default:
      return {
        ...state,
      };
  }
};
\`\`\``,frontmatter:{layout:"two-cols-header-with-gap",hideInToc:!0,srcSequence:"./chapters/using-types.md"},index:23,start:161,end:220,source:{filepath:"/home/runner/work/typescript-improvements-slides/typescript-improvements-slides/slides/chapters/using-types.md",raw:`---
layout: two-cols-header-with-gap
hideInToc: true
---

### Differentiating union types - via discriminant union types

Since TypeScript is able to narrow down a discriminant union via a discriminant property, discriminant unions are widely used to ensure type security.

::left::

\`\`\`ts
type ActionNamesTypes = 'UPDATE_COUNTER' |
  'UPDATE_DATETIME';

type State = {
  counter: Counter;
  dateTime: DateTime;
};

type CounterAction = {
  type: Extract<ActionNamesTypes,'UPDATE_COUNTER'>
  payload: Counter;
};

type DateTimeAction = {
  type: Extract<ActionNamesTypes,'UPDATE_DATETIME'>
  payload: DateTime;
};

type Actions = CounterAction | DateTimeAction;
\`\`\`

::right::

\`\`\`ts
const reducers = (state: State = initialState,
  action: Actions): State => {
  switch (action.type) {
    case ActionNames.UPDATE_COUNTER: {
      return {
        ...state,
        counter: action.payload, // Counter
      };
    }
    case ActionNames.UPDATE_DATETIME: {
      return {
        ...state,
        dateTime: action.payload, // DateTime
      };
    }
    default:
      return {
        ...state,
      };
  }
};
\`\`\`
`,title:"Differentiating union types - via discriminant union types",level:3,content:`### Differentiating union types - via discriminant union types

Since TypeScript is able to narrow down a discriminant union via a discriminant property, discriminant unions are widely used to ensure type security.

::left::

\`\`\`ts
type ActionNamesTypes = 'UPDATE_COUNTER' |
  'UPDATE_DATETIME';

type State = {
  counter: Counter;
  dateTime: DateTime;
};

type CounterAction = {
  type: Extract<ActionNamesTypes,'UPDATE_COUNTER'>
  payload: Counter;
};

type DateTimeAction = {
  type: Extract<ActionNamesTypes,'UPDATE_DATETIME'>
  payload: DateTime;
};

type Actions = CounterAction | DateTimeAction;
\`\`\`

::right::

\`\`\`ts
const reducers = (state: State = initialState,
  action: Actions): State => {
  switch (action.type) {
    case ActionNames.UPDATE_COUNTER: {
      return {
        ...state,
        counter: action.payload, // Counter
      };
    }
    case ActionNames.UPDATE_DATETIME: {
      return {
        ...state,
        dateTime: action.payload, // DateTime
      };
    }
    default:
      return {
        ...state,
      };
  }
};
\`\`\``,frontmatter:{layout:"two-cols-header-with-gap",hideInToc:!0},index:4,start:161,end:220},filepath:"/home/runner/work/typescript-improvements-slides/typescript-improvements-slides/slides/chapters/using-types.md",notesHTML:"",id:23,no:24},__clicksElements:[],__preloaded:!1}},{path:"25",name:"page-25",component:I9,meta:{layout:"two-cols-header-with-gap",hideInToc:!0,srcSequence:"./chapters/using-types.md",slide:{raw:`---
layout: two-cols-header-with-gap
hideInToc: true
---

### Differentiating union types - via discriminant union types with generics

Discriminant unions also work with generics to make code more reusable.

::left::

\`\`\`ts
type Loading = {
  state: 'loading';
};
type Failed = {
  state: 'failed';
  statusCode: number;
  errorMessage?: string;
};
type Success<T> = {
  state: 'success';
  statusCode: number;
  data: T;
};

type APIRequestStatus<T> = Loading | Failed |
  Success<T>;

type Cat = {
  type: 'Cat';
  name: string;
};
\`\`\`

::right::

\`\`\`ts
async function sendAPIRequest<T>(): Promise<void> {
  const requestStatus = await getResponse<T>();
  switch (requestStatus.state) {
    case 'loading': {
      const { state } = requestStatus;
      console.log(state);
      return;
    }
    case 'failed': {
      const { errorMessage } = requestStatus;
      console.log(\`\${errorMessage
        ? errorMessage : '- no error message'}\`);
      return;
    }
    case 'success': {
      const { data } = requestStatus;
      console.log(data);
      return;
    }
    default: {}
  }
}
\`\`\`
`,title:"Differentiating union types - via discriminant union types with generics",level:3,content:`### Differentiating union types - via discriminant union types with generics

Discriminant unions also work with generics to make code more reusable.

::left::

\`\`\`ts
type Loading = {
  state: 'loading';
};
type Failed = {
  state: 'failed';
  statusCode: number;
  errorMessage?: string;
};
type Success<T> = {
  state: 'success';
  statusCode: number;
  data: T;
};

type APIRequestStatus<T> = Loading | Failed |
  Success<T>;

type Cat = {
  type: 'Cat';
  name: string;
};
\`\`\`

::right::

\`\`\`ts
async function sendAPIRequest<T>(): Promise<void> {
  const requestStatus = await getResponse<T>();
  switch (requestStatus.state) {
    case 'loading': {
      const { state } = requestStatus;
      console.log(state);
      return;
    }
    case 'failed': {
      const { errorMessage } = requestStatus;
      console.log(\`\${errorMessage
        ? errorMessage : '- no error message'}\`);
      return;
    }
    case 'success': {
      const { data } = requestStatus;
      console.log(data);
      return;
    }
    default: {}
  }
}
\`\`\``,frontmatter:{layout:"two-cols-header-with-gap",hideInToc:!0,srcSequence:"./chapters/using-types.md"},index:24,start:220,end:282,source:{filepath:"/home/runner/work/typescript-improvements-slides/typescript-improvements-slides/slides/chapters/using-types.md",raw:`---
layout: two-cols-header-with-gap
hideInToc: true
---

### Differentiating union types - via discriminant union types with generics

Discriminant unions also work with generics to make code more reusable.

::left::

\`\`\`ts
type Loading = {
  state: 'loading';
};
type Failed = {
  state: 'failed';
  statusCode: number;
  errorMessage?: string;
};
type Success<T> = {
  state: 'success';
  statusCode: number;
  data: T;
};

type APIRequestStatus<T> = Loading | Failed |
  Success<T>;

type Cat = {
  type: 'Cat';
  name: string;
};
\`\`\`

::right::

\`\`\`ts
async function sendAPIRequest<T>(): Promise<void> {
  const requestStatus = await getResponse<T>();
  switch (requestStatus.state) {
    case 'loading': {
      const { state } = requestStatus;
      console.log(state);
      return;
    }
    case 'failed': {
      const { errorMessage } = requestStatus;
      console.log(\`\${errorMessage
        ? errorMessage : '- no error message'}\`);
      return;
    }
    case 'success': {
      const { data } = requestStatus;
      console.log(data);
      return;
    }
    default: {}
  }
}
\`\`\`
`,title:"Differentiating union types - via discriminant union types with generics",level:3,content:`### Differentiating union types - via discriminant union types with generics

Discriminant unions also work with generics to make code more reusable.

::left::

\`\`\`ts
type Loading = {
  state: 'loading';
};
type Failed = {
  state: 'failed';
  statusCode: number;
  errorMessage?: string;
};
type Success<T> = {
  state: 'success';
  statusCode: number;
  data: T;
};

type APIRequestStatus<T> = Loading | Failed |
  Success<T>;

type Cat = {
  type: 'Cat';
  name: string;
};
\`\`\`

::right::

\`\`\`ts
async function sendAPIRequest<T>(): Promise<void> {
  const requestStatus = await getResponse<T>();
  switch (requestStatus.state) {
    case 'loading': {
      const { state } = requestStatus;
      console.log(state);
      return;
    }
    case 'failed': {
      const { errorMessage } = requestStatus;
      console.log(\`\${errorMessage
        ? errorMessage : '- no error message'}\`);
      return;
    }
    case 'success': {
      const { data } = requestStatus;
      console.log(data);
      return;
    }
    default: {}
  }
}
\`\`\``,frontmatter:{layout:"two-cols-header-with-gap",hideInToc:!0},index:5,start:220,end:282},filepath:"/home/runner/work/typescript-improvements-slides/typescript-improvements-slides/slides/chapters/using-types.md",notesHTML:"",id:24,no:25},__clicksElements:[],__preloaded:!1}},{path:"26",name:"page-26",component:U9,meta:{layout:"section",title:"React and TSX",srcSequence:"./chapters/react-and-tsx.md",slide:{raw:null,title:"React and TSX",level:2,content:"## React and TSX",frontmatter:{layout:"section",title:"React and TSX",srcSequence:"./chapters/react-and-tsx.md"},index:25,start:0,end:6,source:{filepath:"/home/runner/work/typescript-improvements-slides/typescript-improvements-slides/slides/chapters/react-and-tsx.md",raw:`---
layout: section
---

## React and TSX
`,title:"React and TSX",level:2,content:"## React and TSX",frontmatter:{layout:"section",title:"React and TSX"},index:0,start:0,end:6},inline:{raw:`---
src: ./chapters/react-and-tsx.md
---
`,content:"",frontmatter:{},index:5,start:53,end:57},filepath:"/home/runner/work/typescript-improvements-slides/typescript-improvements-slides/slides/chapters/react-and-tsx.md",notesHTML:"",id:25,no:26},__clicksElements:[],__preloaded:!1}},{path:"27",name:"page-27",component:W9,meta:{layout:"image-right",image:"https://source.unsplash.com/collection/94734566/1920x1080",srcSequence:"./chapters/react-and-tsx.md",slide:{raw:`---
layout: image-right
image: https://source.unsplash.com/collection/94734566/1920x1080
---

### Deprecate props

TypeScript's \`never\` type can be used to deprecate component props. Trying to use the deprecated prop, will result in a type error.
Alternatively a soft deprecation can be achieved by using the JSDoc deprecated tag, e.g. \`@deprecated Please use newProp instead\`.

\`\`\`ts
type CustomButtonProps = PropsWithChildren<
  Partial<Pick<HTMLButtonElement,
    'autofocus'| 'ariaDisabled'>
  > & {
    onClick: (event: MouseEvent<
      HTMLButtonElement
    >) => void,
    oldProp?: never, // is deprecated
    newProp: string,
  }
>;
\`\`\`
`,title:"Deprecate props",level:3,content:`### Deprecate props

TypeScript's \`never\` type can be used to deprecate component props. Trying to use the deprecated prop, will result in a type error.
Alternatively a soft deprecation can be achieved by using the JSDoc deprecated tag, e.g. \`@deprecated Please use newProp instead\`.

\`\`\`ts
type CustomButtonProps = PropsWithChildren<
  Partial<Pick<HTMLButtonElement,
    'autofocus'| 'ariaDisabled'>
  > & {
    onClick: (event: MouseEvent<
      HTMLButtonElement
    >) => void,
    oldProp?: never, // is deprecated
    newProp: string,
  }
>;
\`\`\``,frontmatter:{layout:"image-right",image:"https://source.unsplash.com/collection/94734566/1920x1080",srcSequence:"./chapters/react-and-tsx.md"},index:26,start:6,end:30,source:{filepath:"/home/runner/work/typescript-improvements-slides/typescript-improvements-slides/slides/chapters/react-and-tsx.md",raw:`---
layout: image-right
image: https://source.unsplash.com/collection/94734566/1920x1080
---

### Deprecate props

TypeScript's \`never\` type can be used to deprecate component props. Trying to use the deprecated prop, will result in a type error.
Alternatively a soft deprecation can be achieved by using the JSDoc deprecated tag, e.g. \`@deprecated Please use newProp instead\`.

\`\`\`ts
type CustomButtonProps = PropsWithChildren<
  Partial<Pick<HTMLButtonElement,
    'autofocus'| 'ariaDisabled'>
  > & {
    onClick: (event: MouseEvent<
      HTMLButtonElement
    >) => void,
    oldProp?: never, // is deprecated
    newProp: string,
  }
>;
\`\`\`
`,title:"Deprecate props",level:3,content:`### Deprecate props

TypeScript's \`never\` type can be used to deprecate component props. Trying to use the deprecated prop, will result in a type error.
Alternatively a soft deprecation can be achieved by using the JSDoc deprecated tag, e.g. \`@deprecated Please use newProp instead\`.

\`\`\`ts
type CustomButtonProps = PropsWithChildren<
  Partial<Pick<HTMLButtonElement,
    'autofocus'| 'ariaDisabled'>
  > & {
    onClick: (event: MouseEvent<
      HTMLButtonElement
    >) => void,
    oldProp?: never, // is deprecated
    newProp: string,
  }
>;
\`\`\``,frontmatter:{layout:"image-right",image:"https://source.unsplash.com/collection/94734566/1920x1080"},index:1,start:6,end:30},filepath:"/home/runner/work/typescript-improvements-slides/typescript-improvements-slides/slides/chapters/react-and-tsx.md",notesHTML:"",id:26,no:27},__clicksElements:[],__preloaded:!1}},{path:"28",name:"page-28",component:K9,meta:{layout:"image-right",image:"https://source.unsplash.com/collection/94734566/1920x1080",srcSequence:"./chapters/react-and-tsx.md",slide:{raw:`---
layout: image-right
image: https://source.unsplash.com/collection/94734566/1920x1080
---

\`\`\`ts
function CustomButton({children, onClick,
  newProp }: CustomButtonProps):
  ReactElement {
  return (
    <button type="button" onClick={onClick}
      data-testid={newProp}
    >
      {children}
    </button>
  );
}

function App() {
  function handleClick(): void {
    console.log('Click');
  }

  return (
    <CustomButton
      onClick={handleClick}
      newProp="test"
      // oldProp="test" // error
    >
      Button
    </CustomButton>
  );
}
\`\`\`
`,content:`\`\`\`ts
function CustomButton({children, onClick,
  newProp }: CustomButtonProps):
  ReactElement {
  return (
    <button type="button" onClick={onClick}
      data-testid={newProp}
    >
      {children}
    </button>
  );
}

function App() {
  function handleClick(): void {
    console.log('Click');
  }

  return (
    <CustomButton
      onClick={handleClick}
      newProp="test"
      // oldProp="test" // error
    >
      Button
    </CustomButton>
  );
}
\`\`\``,frontmatter:{layout:"image-right",image:"https://source.unsplash.com/collection/94734566/1920x1080",srcSequence:"./chapters/react-and-tsx.md"},index:27,start:30,end:65,source:{filepath:"/home/runner/work/typescript-improvements-slides/typescript-improvements-slides/slides/chapters/react-and-tsx.md",raw:`---
layout: image-right
image: https://source.unsplash.com/collection/94734566/1920x1080
---

\`\`\`ts
function CustomButton({children, onClick,
  newProp }: CustomButtonProps):
  ReactElement {
  return (
    <button type="button" onClick={onClick}
      data-testid={newProp}
    >
      {children}
    </button>
  );
}

function App() {
  function handleClick(): void {
    console.log('Click');
  }

  return (
    <CustomButton
      onClick={handleClick}
      newProp="test"
      // oldProp="test" // error
    >
      Button
    </CustomButton>
  );
}
\`\`\`
`,content:`\`\`\`ts
function CustomButton({children, onClick,
  newProp }: CustomButtonProps):
  ReactElement {
  return (
    <button type="button" onClick={onClick}
      data-testid={newProp}
    >
      {children}
    </button>
  );
}

function App() {
  function handleClick(): void {
    console.log('Click');
  }

  return (
    <CustomButton
      onClick={handleClick}
      newProp="test"
      // oldProp="test" // error
    >
      Button
    </CustomButton>
  );
}
\`\`\``,frontmatter:{layout:"image-right",image:"https://source.unsplash.com/collection/94734566/1920x1080"},index:2,start:30,end:65},filepath:"/home/runner/work/typescript-improvements-slides/typescript-improvements-slides/slides/chapters/react-and-tsx.md",notesHTML:"",id:27,no:28},__clicksElements:[],__preloaded:!1}},{path:"29",name:"page-29",component:Z9,meta:{layout:"image-right",image:"https://source.unsplash.com/collection/94734566/1920x1080",srcSequence:"./chapters/react-and-tsx.md",slide:{raw:`---
layout: image-right
image: https://source.unsplash.com/collection/94734566/1920x1080
---

### Disallow prop combinations

TypeScript's \`never\` type can also be used to prohibit certain combinations of props.

\`\`\`ts
function ButtonLink({
  onClick, as, disabled, href
}: PropsWithChildren<ButtonLinkProps>): {
  const Component = as;

  if (Component === 'button') {
    console.log(href); // undefined
    console.log(disabled);
  }
  if (Component === 'a') {
    console.log(href); // string
    console.log(disabled);
  }

  return (
    <Component className={style.ButtonLink}
      onClick={onClick}>
      Click
    </Component>
  );
}
\`\`\`
`,title:"Disallow prop combinations",level:3,content:`### Disallow prop combinations

TypeScript's \`never\` type can also be used to prohibit certain combinations of props.

\`\`\`ts
function ButtonLink({
  onClick, as, disabled, href
}: PropsWithChildren<ButtonLinkProps>): {
  const Component = as;

  if (Component === 'button') {
    console.log(href); // undefined
    console.log(disabled);
  }
  if (Component === 'a') {
    console.log(href); // string
    console.log(disabled);
  }

  return (
    <Component className={style.ButtonLink}
      onClick={onClick}>
      Click
    </Component>
  );
}
\`\`\``,frontmatter:{layout:"image-right",image:"https://source.unsplash.com/collection/94734566/1920x1080",srcSequence:"./chapters/react-and-tsx.md"},index:28,start:65,end:98,source:{filepath:"/home/runner/work/typescript-improvements-slides/typescript-improvements-slides/slides/chapters/react-and-tsx.md",raw:`---
layout: image-right
image: https://source.unsplash.com/collection/94734566/1920x1080
---

### Disallow prop combinations

TypeScript's \`never\` type can also be used to prohibit certain combinations of props.

\`\`\`ts
function ButtonLink({
  onClick, as, disabled, href
}: PropsWithChildren<ButtonLinkProps>): {
  const Component = as;

  if (Component === 'button') {
    console.log(href); // undefined
    console.log(disabled);
  }
  if (Component === 'a') {
    console.log(href); // string
    console.log(disabled);
  }

  return (
    <Component className={style.ButtonLink}
      onClick={onClick}>
      Click
    </Component>
  );
}
\`\`\`
`,title:"Disallow prop combinations",level:3,content:`### Disallow prop combinations

TypeScript's \`never\` type can also be used to prohibit certain combinations of props.

\`\`\`ts
function ButtonLink({
  onClick, as, disabled, href
}: PropsWithChildren<ButtonLinkProps>): {
  const Component = as;

  if (Component === 'button') {
    console.log(href); // undefined
    console.log(disabled);
  }
  if (Component === 'a') {
    console.log(href); // string
    console.log(disabled);
  }

  return (
    <Component className={style.ButtonLink}
      onClick={onClick}>
      Click
    </Component>
  );
}
\`\`\``,frontmatter:{layout:"image-right",image:"https://source.unsplash.com/collection/94734566/1920x1080"},index:3,start:65,end:98},filepath:"/home/runner/work/typescript-improvements-slides/typescript-improvements-slides/slides/chapters/react-and-tsx.md",notesHTML:"",id:28,no:29},__clicksElements:[],__preloaded:!1}},{path:"30",name:"page-30",component:Q9,meta:{layout:"image-right",image:"https://source.unsplash.com/collection/94734566/1920x1080",srcSequence:"./chapters/react-and-tsx.md",slide:{raw:`---
layout: image-right
image: https://source.unsplash.com/collection/94734566/1920x1080
---

The as-field is used as discriminant property to distinguish both types.

\`\`\`ts
type ButtonLinkCommonProps = {
  onClick: () => void;
};

type ButtonLinkButtonProps = {
  as: 'button';
  disabled?: boolean;
  href?: never; // type button should
  // never have a href attribute
};

type ButtonLinkLinkProps = {
  as: 'a';
  disabled?: false; // type link should
  // never have a disabled attribute
  href: string;
};

type ButtonLinkProps = ButtonLinkCommonProps
  & (ButtonLinkButtonProps |
    ButtonLinkLinkProps);

\`\`\`
`,content:`The as-field is used as discriminant property to distinguish both types.

\`\`\`ts
type ButtonLinkCommonProps = {
  onClick: () => void;
};

type ButtonLinkButtonProps = {
  as: 'button';
  disabled?: boolean;
  href?: never; // type button should
  // never have a href attribute
};

type ButtonLinkLinkProps = {
  as: 'a';
  disabled?: false; // type link should
  // never have a disabled attribute
  href: string;
};

type ButtonLinkProps = ButtonLinkCommonProps
  & (ButtonLinkButtonProps |
    ButtonLinkLinkProps);

\`\`\``,frontmatter:{layout:"image-right",image:"https://source.unsplash.com/collection/94734566/1920x1080",srcSequence:"./chapters/react-and-tsx.md"},index:29,start:98,end:130,source:{filepath:"/home/runner/work/typescript-improvements-slides/typescript-improvements-slides/slides/chapters/react-and-tsx.md",raw:`---
layout: image-right
image: https://source.unsplash.com/collection/94734566/1920x1080
---

The as-field is used as discriminant property to distinguish both types.

\`\`\`ts
type ButtonLinkCommonProps = {
  onClick: () => void;
};

type ButtonLinkButtonProps = {
  as: 'button';
  disabled?: boolean;
  href?: never; // type button should
  // never have a href attribute
};

type ButtonLinkLinkProps = {
  as: 'a';
  disabled?: false; // type link should
  // never have a disabled attribute
  href: string;
};

type ButtonLinkProps = ButtonLinkCommonProps
  & (ButtonLinkButtonProps |
    ButtonLinkLinkProps);

\`\`\`
`,content:`The as-field is used as discriminant property to distinguish both types.

\`\`\`ts
type ButtonLinkCommonProps = {
  onClick: () => void;
};

type ButtonLinkButtonProps = {
  as: 'button';
  disabled?: boolean;
  href?: never; // type button should
  // never have a href attribute
};

type ButtonLinkLinkProps = {
  as: 'a';
  disabled?: false; // type link should
  // never have a disabled attribute
  href: string;
};

type ButtonLinkProps = ButtonLinkCommonProps
  & (ButtonLinkButtonProps |
    ButtonLinkLinkProps);

\`\`\``,frontmatter:{layout:"image-right",image:"https://source.unsplash.com/collection/94734566/1920x1080"},index:4,start:98,end:130},filepath:"/home/runner/work/typescript-improvements-slides/typescript-improvements-slides/slides/chapters/react-and-tsx.md",notesHTML:"",id:29,no:30},__clicksElements:[],__preloaded:!1}},{path:"31",name:"page-31",component:tD,meta:{layout:"image-right",image:"https://source.unsplash.com/collection/94734566/1920x1080",srcSequence:"./chapters/react-and-tsx.md",slide:{raw:`---
layout: image-right
image: https://source.unsplash.com/collection/94734566/1920x1080
---

### Prohibit child components

The \`never\` type can also be used to prevent the creation of child components.

\`\`\`ts
type ChildProps = PropsWithChildren<{
  otherProp: string;
}>;

type ChildlessProps = {
  children?: never;
  otherProp: string;
};

function App(): ReactElement {
  return (
    <>
      <Child otherProp="test1">
        <h2>Can have child content</h2>
      </Child>
      <Childless otherProp="test2" />
    </>
  );
}
\`\`\`
`,title:"Prohibit child components",level:3,content:`### Prohibit child components

The \`never\` type can also be used to prevent the creation of child components.

\`\`\`ts
type ChildProps = PropsWithChildren<{
  otherProp: string;
}>;

type ChildlessProps = {
  children?: never;
  otherProp: string;
};

function App(): ReactElement {
  return (
    <>
      <Child otherProp="test1">
        <h2>Can have child content</h2>
      </Child>
      <Childless otherProp="test2" />
    </>
  );
}
\`\`\``,frontmatter:{layout:"image-right",image:"https://source.unsplash.com/collection/94734566/1920x1080",srcSequence:"./chapters/react-and-tsx.md"},index:30,start:130,end:161,source:{filepath:"/home/runner/work/typescript-improvements-slides/typescript-improvements-slides/slides/chapters/react-and-tsx.md",raw:`---
layout: image-right
image: https://source.unsplash.com/collection/94734566/1920x1080
---

### Prohibit child components

The \`never\` type can also be used to prevent the creation of child components.

\`\`\`ts
type ChildProps = PropsWithChildren<{
  otherProp: string;
}>;

type ChildlessProps = {
  children?: never;
  otherProp: string;
};

function App(): ReactElement {
  return (
    <>
      <Child otherProp="test1">
        <h2>Can have child content</h2>
      </Child>
      <Childless otherProp="test2" />
    </>
  );
}
\`\`\`
`,title:"Prohibit child components",level:3,content:`### Prohibit child components

The \`never\` type can also be used to prevent the creation of child components.

\`\`\`ts
type ChildProps = PropsWithChildren<{
  otherProp: string;
}>;

type ChildlessProps = {
  children?: never;
  otherProp: string;
};

function App(): ReactElement {
  return (
    <>
      <Child otherProp="test1">
        <h2>Can have child content</h2>
      </Child>
      <Childless otherProp="test2" />
    </>
  );
}
\`\`\``,frontmatter:{layout:"image-right",image:"https://source.unsplash.com/collection/94734566/1920x1080"},index:5,start:130,end:161},filepath:"/home/runner/work/typescript-improvements-slides/typescript-improvements-slides/slides/chapters/react-and-tsx.md",notesHTML:"",id:30,no:31},__clicksElements:[],__preloaded:!1}},{path:"32",component:Jh,meta:{layout:"end"}}],Ws=oD,lD=[{name:"play",path:"/",component:Wh,children:[...Ws]},{name:"print",path:"/print",component:Gh},{path:"",redirect:{path:"/1"}},{path:"/:pathMatch(.*)",redirect:{path:"/1"}},{path:"/presenter/print",component:()=>$n(()=>import("./PresenterPrint.46532c6e.js"),["assets/PresenterPrint.46532c6e.js","assets/NoteViewer.vue_vue_type_script_setup_true_lang.2b255fa3.js"])},{name:"presenter",path:"/presenter/:no",component:()=>$n(()=>import("./Presenter.555a36e9.js"),["assets/Presenter.555a36e9.js","assets/NoteViewer.vue_vue_type_script_setup_true_lang.2b255fa3.js","assets/DrawingControls.vue_vue_type_script_setup_true_lang.95b65354.js","assets/Presenter.2b62ea14.css"]),beforeEnter:e=>{if(!kt.remote||kt.remote===e.query.password)return!0;if(kt.remote&&e.query.password===void 0){const n=prompt("Enter password");if(kt.remote===n)return!0}return e.params.no?{path:`/${e.params.no}`}:{path:""}}},{path:"/presenter",redirect:{path:"/presenter/1"}}],Ae=Mm({history:X5("/typescript-improvements-slides/"),routes:lD});function rD(e,n,{mode:t="replace"}={}){return k({get(){const o=Ae.currentRoute.value.query[e];return o==null?n!=null?n:null:Array.isArray(o)?o.filter(Boolean):o},set(o){Xs(()=>{Ae[v(t)]({query:{...Ae.currentRoute.value.query,[e]:o}})})}})}const my=W(0);Xs(()=>{Ae.afterEach(async()=>{await Xs(),my.value+=1})});const Xe=k(()=>Ae.currentRoute.value),st=k(()=>Xe.value.query.print!==void 0),aD=k(()=>Xe.value.query.print==="clicks"),Ve=k(()=>Xe.value.query.embedded!==void 0),Ie=k(()=>Xe.value.path.startsWith("/presenter")),Mt=k(()=>st.value&&!aD.value),ar=k(()=>Xe.value.query.password),cD=k(()=>!Ie.value&&(!vs.remote||ar.value===vs.remote)),Jc=rD("clicks","0"),Ay=k(()=>Ws.length-1),iD=k(()=>Xe.value.path),js=k(()=>parseInt(iD.value.split(/\//g).slice(-1)[0])||1);k(()=>el(js.value));const ue=k(()=>Ws.find(e=>e.path===`${js.value}`));k(()=>{var e,n,t;return(t=(n=(e=ue.value)==null?void 0:e.meta)==null?void 0:n.slide)==null?void 0:t.id});k(()=>{var e,n;return((n=(e=ue.value)==null?void 0:e.meta)==null?void 0:n.layout)||(js.value===1?"cover":"default")});const Dl=k(()=>Ws.find(e=>e.path===`${Math.min(Ws.length,js.value+1)}`)),pD=k(()=>{var e,n;return my.value,((n=(e=ue.value)==null?void 0:e.meta)==null?void 0:n.__clicksElements)||[]}),Se=k({get(){if(Mt.value)return 99999;let e=+(Jc.value||0);return isNaN(e)&&(e=0),e},set(e){Jc.value=e.toString()}}),Oo=k(()=>{var e,n,t;return+((t=(n=(e=ue.value)==null?void 0:e.meta)==null?void 0:n.clicks)!=null?t:pD.value.length)}),yD=k(()=>js.value<Ws.length-1||Se.value<Oo.value),uD=k(()=>js.value>1||Se.value>0),dD=k(()=>Ws.filter(e=>{var n,t;return(t=(n=e.meta)==null?void 0:n.slide)==null?void 0:t.title}).reduce((e,n)=>(sa(e,n),e),[])),fD=k(()=>ea(dD.value,ue.value));k(()=>na(fD.value));function cn(){Oo.value<=Se.value?Zt():Se.value+=1}async function pn(){Se.value<=0?await Xt():Se.value-=1}function el(e){return Ie.value?`/presenter/${e}`:`/${e}`}function Zt(){const e=Math.min(Ws.length,js.value+1);return ct(e)}async function Xt(e=!0){const n=Math.max(1,js.value-1);await ct(n),e&&Oo.value&&Ae.replace({query:{...Xe.value.query,clicks:Oo.value}})}function ct(e,n){return Ae.push({path:el(e),query:{...Xe.value.query,clicks:n}})}function mD(e){const n=W(0),{direction:t,distanceX:o,distanceY:l}=v5(e,{onSwipeStart(a){a.pointerType==="touch"&&(zt.value||(n.value=Kl()))},onSwipeEnd(a){if(a.pointerType!=="touch"||!n.value||zt.value)return;const c=Math.abs(o.value),i=Math.abs(l.value);c/window.innerWidth>.3||c>100?t.value===Ye.LEFT?cn():pn():(i/window.innerHeight>.4||i>200)&&(t.value===Ye.DOWN?Xt():Zt())}})}async function cr(){const{saveAs:e}=await $n(()=>import("./FileSaver.min.7f56e709.js").then(n=>n.F),[]);e(_p(vs.download)?vs.download:vs.exportFilename?`${vs.exportFilename}.pdf`:"/typescript-improvements-slides/slidev-exported.pdf",`${vs.title}.pdf`)}async function AD(e){var n,t;if(e==null){const o=(t=(n=ue.value)==null?void 0:n.meta)==null?void 0:t.slide;if(!(o!=null&&o.filepath))return!1;e=`${o.filepath}:${o.start}`}return await fetch(`/__open-in-editor?file=${encodeURIComponent(e)}`),!0}function sa(e,n,t=1){var l,a,c,i,p;const o=(a=(l=n.meta)==null?void 0:l.slide)==null?void 0:a.level;o&&o>t&&e.length>0?sa(e[e.length-1].children,n,t+1):e.push({children:[],level:t,path:n.path,hideInToc:Boolean((c=n.meta)==null?void 0:c.hideInToc),title:(p=(i=n.meta)==null?void 0:i.slide)==null?void 0:p.title})}function ea(e,n,t=!1,o){return e.map(l=>{const a={...l,active:l.path===(n==null?void 0:n.path),hasActiveParent:t};return a.children.length>0&&(a.children=ea(a.children,n,a.active||a.hasActiveParent,a)),o&&(a.active||a.activeParent)&&(o.activeParent=!0),a})}function na(e,n=1){return e.filter(t=>!t.hideInToc).map(t=>({...t,children:na(t.children,n+1)}))}function BD(){const e=vs.titleTemplate.replace("%s",vs.title||"Slidev");gf({title:e}),xf(`${e} - shared`),Of(`${e} - drawings`);function n(){Ie.value&&(oc("page",+js.value),oc("clicks",Se.value))}Ae.afterEach(n),us(Se,n),Sf(t=>{(+t.page!=+js.value||Se.value!==t.clicks)&&Ae.replace({path:el(t.page),query:{...Ae.currentRoute.value.query,clicks:t.clicks||0}})})}const hD=hs({__name:"App",setup(e){return q(Y),BD(),(n,t)=>{const o=tt("RouterView"),l=tt("StarportCarrier");return g(),S(G,null,[M(o),M(l)],64)}}});function vl(e){return e!==null&&typeof e=="object"}function ir(e,n,t=".",o){if(!vl(n))return ir(e,{},t,o);const l=Object.assign({},n);for(const a in e){if(a==="__proto__"||a==="constructor")continue;const c=e[a];c!=null&&(o&&o(l,a,c,t)||(Array.isArray(c)&&Array.isArray(l[a])?l[a]=c.concat(l[a]):vl(c)&&vl(l[a])?l[a]=ir(c,l[a],(t?`${t}.`:"")+a.toString(),o):l[a]=c))}return l}function CD(e){return(...n)=>n.reduce((t,o)=>ir(t,o,"",e),{})}const gD=CD(),By=1/60*1e3,DD=typeof performance<"u"?()=>performance.now():()=>Date.now(),hy=typeof window<"u"?e=>window.requestAnimationFrame(e):e=>setTimeout(()=>e(DD()),By);function vD(e){let n=[],t=[],o=0,l=!1,a=!1;const c=new WeakSet,i={schedule:(p,y=!1,u=!1)=>{const d=u&&l,f=d?n:t;return y&&c.add(p),f.indexOf(p)===-1&&(f.push(p),d&&l&&(o=n.length)),p},cancel:p=>{const y=t.indexOf(p);y!==-1&&t.splice(y,1),c.delete(p)},process:p=>{if(l){a=!0;return}if(l=!0,[n,t]=[t,n],t.length=0,o=n.length,o)for(let y=0;y<o;y++){const u=n[y];u(p),c.has(u)&&(i.schedule(u),e())}l=!1,a&&(a=!1,i.process(p))}};return i}const _D=40;let pr=!0,Jt=!1,yr=!1;const et={delta:0,timestamp:0},eo=["read","update","preRender","render","postRender"],nl=eo.reduce((e,n)=>(e[n]=vD(()=>Jt=!0),e),{}),ur=eo.reduce((e,n)=>{const t=nl[n];return e[n]=(o,l=!1,a=!1)=>(Jt||wD(),t.schedule(o,l,a)),e},{}),bD=eo.reduce((e,n)=>(e[n]=nl[n].cancel,e),{});eo.reduce((e,n)=>(e[n]=()=>nl[n].process(et),e),{});const ED=e=>nl[e].process(et),Cy=e=>{Jt=!1,et.delta=pr?By:Math.max(Math.min(e-et.timestamp,_D),1),et.timestamp=e,yr=!0,eo.forEach(ED),yr=!1,Jt&&(pr=!1,hy(Cy))},wD=()=>{Jt=!0,pr=!0,yr||hy(Cy)},gy=()=>et;function Dy(e,n){var t={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&n.indexOf(o)<0&&(t[o]=e[o]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,o=Object.getOwnPropertySymbols(e);l<o.length;l++)n.indexOf(o[l])<0&&Object.prototype.propertyIsEnumerable.call(e,o[l])&&(t[o[l]]=e[o[l]]);return t}var kD=function(){},Qc=function(){};const dr=(e,n,t)=>Math.min(Math.max(t,e),n),_l=.001,FD=.01,si=10,PD=.05,xD=1;function SD({duration:e=800,bounce:n=.25,velocity:t=0,mass:o=1}){let l,a;kD(e<=si*1e3);let c=1-n;c=dr(PD,xD,c),e=dr(FD,si,e/1e3),c<1?(l=y=>{const u=y*c,d=u*e,f=u-t,A=fr(y,c),m=Math.exp(-d);return _l-f/A*m},a=y=>{const d=y*c*e,f=d*t+t,A=Math.pow(c,2)*Math.pow(y,2)*e,m=Math.exp(-d),C=fr(Math.pow(y,2),c);return(-l(y)+_l>0?-1:1)*((f-A)*m)/C}):(l=y=>{const u=Math.exp(-y*e),d=(y-t)*e+1;return-_l+u*d},a=y=>{const u=Math.exp(-y*e),d=(t-y)*(e*e);return u*d});const i=5/e,p=$D(l,a,i);if(e=e*1e3,isNaN(p))return{stiffness:100,damping:10,duration:e};{const y=Math.pow(p,2)*o;return{stiffness:y,damping:c*2*Math.sqrt(o*y),duration:e}}}const TD=12;function $D(e,n,t){let o=t;for(let l=1;l<TD;l++)o=o-e(o)/n(o);return o}function fr(e,n){return e*Math.sqrt(1-n*n)}const OD=["duration","bounce"],MD=["stiffness","damping","mass"];function ei(e,n){return n.some(t=>e[t]!==void 0)}function ND(e){let n=Object.assign({velocity:0,stiffness:100,damping:10,mass:1,isResolvedFromDuration:!1},e);if(!ei(e,MD)&&ei(e,OD)){const t=SD(e);n=Object.assign(Object.assign(Object.assign({},n),t),{velocity:0,mass:1}),n.isResolvedFromDuration=!0}return n}function ta(e){var{from:n=0,to:t=1,restSpeed:o=2,restDelta:l}=e,a=Dy(e,["from","to","restSpeed","restDelta"]);const c={done:!1,value:n};let{stiffness:i,damping:p,mass:y,velocity:u,duration:d,isResolvedFromDuration:f}=ND(a),A=ni,m=ni;function C(){const D=u?-(u/1e3):0,_=t-n,E=p/(2*Math.sqrt(i*y)),b=Math.sqrt(i/y)/1e3;if(l===void 0&&(l=Math.min(Math.abs(t-n)/100,.4)),E<1){const F=fr(b,E);A=N=>{const L=Math.exp(-E*b*N);return t-L*((D+E*b*_)/F*Math.sin(F*N)+_*Math.cos(F*N))},m=N=>{const L=Math.exp(-E*b*N);return E*b*L*(Math.sin(F*N)*(D+E*b*_)/F+_*Math.cos(F*N))-L*(Math.cos(F*N)*(D+E*b*_)-F*_*Math.sin(F*N))}}else if(E===1)A=F=>t-Math.exp(-b*F)*(_+(D+b*_)*F);else{const F=b*Math.sqrt(E*E-1);A=N=>{const L=Math.exp(-E*b*N),U=Math.min(F*N,300);return t-L*((D+E*b*_)*Math.sinh(U)+F*_*Math.cosh(U))/F}}}return C(),{next:D=>{const _=A(D);if(f)c.done=D>=d;else{const E=m(D)*1e3,b=Math.abs(E)<=o,F=Math.abs(t-_)<=l;c.done=b&&F}return c.value=c.done?t:_,c},flipTarget:()=>{u=-u,[n,t]=[t,n],C()}}}ta.needsInterpolation=(e,n)=>typeof e=="string"||typeof n=="string";const ni=e=>0,vy=(e,n,t)=>{const o=n-e;return o===0?1:(t-e)/o},oa=(e,n,t)=>-t*e+t*n+e,_y=(e,n)=>t=>Math.max(Math.min(t,n),e),Nt=e=>e%1?Number(e.toFixed(5)):e,Qt=/(-)?([\d]*\.?[\d])+/g,mr=/(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,LD=/^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;function no(e){return typeof e=="string"}const to={test:e=>typeof e=="number",parse:parseFloat,transform:e=>e},Lt=Object.assign(Object.assign({},to),{transform:_y(0,1)}),fo=Object.assign(Object.assign({},to),{default:1}),la=e=>({test:n=>no(n)&&n.endsWith(e)&&n.split(" ").length===1,parse:parseFloat,transform:n=>`${n}${e}`}),mn=la("deg"),It=la("%"),rs=la("px"),ti=Object.assign(Object.assign({},It),{parse:e=>It.parse(e)/100,transform:e=>It.transform(e*100)}),ra=(e,n)=>t=>Boolean(no(t)&&LD.test(t)&&t.startsWith(e)||n&&Object.prototype.hasOwnProperty.call(t,n)),by=(e,n,t)=>o=>{if(!no(o))return o;const[l,a,c,i]=o.match(Qt);return{[e]:parseFloat(l),[n]:parseFloat(a),[t]:parseFloat(c),alpha:i!==void 0?parseFloat(i):1}},wn={test:ra("hsl","hue"),parse:by("hue","saturation","lightness"),transform:({hue:e,saturation:n,lightness:t,alpha:o=1})=>"hsla("+Math.round(e)+", "+It.transform(Nt(n))+", "+It.transform(Nt(t))+", "+Nt(Lt.transform(o))+")"},ID=_y(0,255),bl=Object.assign(Object.assign({},to),{transform:e=>Math.round(ID(e))}),tn={test:ra("rgb","red"),parse:by("red","green","blue"),transform:({red:e,green:n,blue:t,alpha:o=1})=>"rgba("+bl.transform(e)+", "+bl.transform(n)+", "+bl.transform(t)+", "+Nt(Lt.transform(o))+")"};function RD(e){let n="",t="",o="",l="";return e.length>5?(n=e.substr(1,2),t=e.substr(3,2),o=e.substr(5,2),l=e.substr(7,2)):(n=e.substr(1,1),t=e.substr(2,1),o=e.substr(3,1),l=e.substr(4,1),n+=n,t+=t,o+=o,l+=l),{red:parseInt(n,16),green:parseInt(t,16),blue:parseInt(o,16),alpha:l?parseInt(l,16)/255:1}}const Ar={test:ra("#"),parse:RD,transform:tn.transform},ae={test:e=>tn.test(e)||Ar.test(e)||wn.test(e),parse:e=>tn.test(e)?tn.parse(e):wn.test(e)?wn.parse(e):Ar.parse(e),transform:e=>no(e)?e:e.hasOwnProperty("red")?tn.transform(e):wn.transform(e)},Ey="${c}",wy="${n}";function UD(e){var n,t,o,l;return isNaN(e)&&no(e)&&((t=(n=e.match(Qt))===null||n===void 0?void 0:n.length)!==null&&t!==void 0?t:0)+((l=(o=e.match(mr))===null||o===void 0?void 0:o.length)!==null&&l!==void 0?l:0)>0}function ky(e){typeof e=="number"&&(e=`${e}`);const n=[];let t=0;const o=e.match(mr);o&&(t=o.length,e=e.replace(mr,Ey),n.push(...o.map(ae.parse)));const l=e.match(Qt);return l&&(e=e.replace(Qt,wy),n.push(...l.map(to.parse))),{values:n,numColors:t,tokenised:e}}function Fy(e){return ky(e).values}function Py(e){const{values:n,numColors:t,tokenised:o}=ky(e),l=n.length;return a=>{let c=o;for(let i=0;i<l;i++)c=c.replace(i<t?Ey:wy,i<t?ae.transform(a[i]):Nt(a[i]));return c}}const jD=e=>typeof e=="number"?0:e;function qD(e){const n=Fy(e);return Py(e)(n.map(jD))}const oo={test:UD,parse:Fy,createTransformer:Py,getAnimatableNone:qD},HD=new Set(["brightness","contrast","saturate","opacity"]);function WD(e){let[n,t]=e.slice(0,-1).split("(");if(n==="drop-shadow")return e;const[o]=t.match(Qt)||[];if(!o)return e;const l=t.replace(o,"");let a=HD.has(n)?1:0;return o!==t&&(a*=100),n+"("+a+l+")"}const VD=/([a-z-]*)\(.*?\)/g,Br=Object.assign(Object.assign({},oo),{getAnimatableNone:e=>{const n=e.match(VD);return n?n.map(WD).join(" "):e}});function El(e,n,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?e+(n-e)*6*t:t<1/2?n:t<2/3?e+(n-e)*(2/3-t)*6:e}function oi({hue:e,saturation:n,lightness:t,alpha:o}){e/=360,n/=100,t/=100;let l=0,a=0,c=0;if(!n)l=a=c=t;else{const i=t<.5?t*(1+n):t+n-t*n,p=2*t-i;l=El(p,i,e+1/3),a=El(p,i,e),c=El(p,i,e-1/3)}return{red:Math.round(l*255),green:Math.round(a*255),blue:Math.round(c*255),alpha:o}}const KD=(e,n,t)=>{const o=e*e,l=n*n;return Math.sqrt(Math.max(0,t*(l-o)+o))},zD=[Ar,tn,wn],li=e=>zD.find(n=>n.test(e)),xy=(e,n)=>{let t=li(e),o=li(n),l=t.parse(e),a=o.parse(n);t===wn&&(l=oi(l),t=tn),o===wn&&(a=oi(a),o=tn);const c=Object.assign({},l);return i=>{for(const p in c)p!=="alpha"&&(c[p]=KD(l[p],a[p],i));return c.alpha=oa(l.alpha,a.alpha,i),t.transform(c)}},YD=e=>typeof e=="number",GD=(e,n)=>t=>n(e(t)),Sy=(...e)=>e.reduce(GD);function Ty(e,n){return YD(e)?t=>oa(e,n,t):ae.test(e)?xy(e,n):Oy(e,n)}const $y=(e,n)=>{const t=[...e],o=t.length,l=e.map((a,c)=>Ty(a,n[c]));return a=>{for(let c=0;c<o;c++)t[c]=l[c](a);return t}},ZD=(e,n)=>{const t=Object.assign(Object.assign({},e),n),o={};for(const l in t)e[l]!==void 0&&n[l]!==void 0&&(o[l]=Ty(e[l],n[l]));return l=>{for(const a in o)t[a]=o[a](l);return t}};function ri(e){const n=oo.parse(e),t=n.length;let o=0,l=0,a=0;for(let c=0;c<t;c++)o||typeof n[c]=="number"?o++:n[c].hue!==void 0?a++:l++;return{parsed:n,numNumbers:o,numRGB:l,numHSL:a}}const Oy=(e,n)=>{const t=oo.createTransformer(n),o=ri(e),l=ri(n);return o.numHSL===l.numHSL&&o.numRGB===l.numRGB&&o.numNumbers>=l.numNumbers?Sy($y(o.parsed,l.parsed),t):c=>`${c>0?n:e}`},XD=(e,n)=>t=>oa(e,n,t);function JD(e){if(typeof e=="number")return XD;if(typeof e=="string")return ae.test(e)?xy:Oy;if(Array.isArray(e))return $y;if(typeof e=="object")return ZD}function QD(e,n,t){const o=[],l=t||JD(e[0]),a=e.length-1;for(let c=0;c<a;c++){let i=l(e[c],e[c+1]);if(n){const p=Array.isArray(n)?n[c]:n;i=Sy(p,i)}o.push(i)}return o}function s7([e,n],[t]){return o=>t(vy(e,n,o))}function e7(e,n){const t=e.length,o=t-1;return l=>{let a=0,c=!1;if(l<=e[0]?c=!0:l>=e[o]&&(a=o-1,c=!0),!c){let p=1;for(;p<t&&!(e[p]>l||p===o);p++);a=p-1}const i=vy(e[a],e[a+1],l);return n[a](i)}}function My(e,n,{clamp:t=!0,ease:o,mixer:l}={}){const a=e.length;Qc(a===n.length),Qc(!o||!Array.isArray(o)||o.length===a-1),e[0]>e[a-1]&&(e=[].concat(e),n=[].concat(n),e.reverse(),n.reverse());const c=QD(n,o,l),i=a===2?s7(e,c):e7(e,c);return t?p=>i(dr(e[0],e[a-1],p)):i}const tl=e=>n=>1-e(1-n),aa=e=>n=>n<=.5?e(2*n)/2:(2-e(2*(1-n)))/2,n7=e=>n=>Math.pow(n,e),Ny=e=>n=>n*n*((e+1)*n-e),t7=e=>{const n=Ny(e);return t=>(t*=2)<1?.5*n(t):.5*(2-Math.pow(2,-10*(t-1)))},Ly=1.525,o7=4/11,l7=8/11,r7=9/10,Iy=e=>e,ca=n7(2),a7=tl(ca),Ry=aa(ca),Uy=e=>1-Math.sin(Math.acos(e)),jy=tl(Uy),c7=aa(jy),ia=Ny(Ly),i7=tl(ia),p7=aa(ia),y7=t7(Ly),u7=4356/361,d7=35442/1805,f7=16061/1805,Mo=e=>{if(e===1||e===0)return e;const n=e*e;return e<o7?7.5625*n:e<l7?9.075*n-9.9*e+3.4:e<r7?u7*n-d7*e+f7:10.8*e*e-20.52*e+10.72},m7=tl(Mo),A7=e=>e<.5?.5*(1-Mo(1-e*2)):.5*Mo(e*2-1)+.5;function B7(e,n){return e.map(()=>n||Ry).splice(0,e.length-1)}function h7(e){const n=e.length;return e.map((t,o)=>o!==0?o/(n-1):0)}function C7(e,n){return e.map(t=>t*n)}function Do({from:e=0,to:n=1,ease:t,offset:o,duration:l=300}){const a={done:!1,value:e},c=Array.isArray(n)?n:[e,n],i=C7(o&&o.length===c.length?o:h7(c),l);function p(){return My(i,c,{ease:Array.isArray(t)?t:B7(c,t)})}let y=p();return{next:u=>(a.value=y(u),a.done=u>=l,a),flipTarget:()=>{c.reverse(),y=p()}}}function g7({velocity:e=0,from:n=0,power:t=.8,timeConstant:o=350,restDelta:l=.5,modifyTarget:a}){const c={done:!1,value:n};let i=t*e;const p=n+i,y=a===void 0?p:a(p);return y!==p&&(i=y-n),{next:u=>{const d=-i*Math.exp(-u/o);return c.done=!(d>l||d<-l),c.value=c.done?y:y+d,c},flipTarget:()=>{}}}const ai={keyframes:Do,spring:ta,decay:g7};function D7(e){if(Array.isArray(e.to))return Do;if(ai[e.type])return ai[e.type];const n=new Set(Object.keys(e));return n.has("ease")||n.has("duration")&&!n.has("dampingRatio")?Do:n.has("dampingRatio")||n.has("stiffness")||n.has("mass")||n.has("damping")||n.has("restSpeed")||n.has("restDelta")?ta:Do}function qy(e,n,t=0){return e-n-t}function v7(e,n,t=0,o=!0){return o?qy(n+-e,n,t):n-(e-n)+t}function _7(e,n,t,o){return o?e>=n+t:e<=-t}const b7=e=>{const n=({delta:t})=>e(t);return{start:()=>ur.update(n,!0),stop:()=>bD.update(n)}};function Hy(e){var n,t,{from:o,autoplay:l=!0,driver:a=b7,elapsed:c=0,repeat:i=0,repeatType:p="loop",repeatDelay:y=0,onPlay:u,onStop:d,onComplete:f,onRepeat:A,onUpdate:m}=e,C=Dy(e,["from","autoplay","driver","elapsed","repeat","repeatType","repeatDelay","onPlay","onStop","onComplete","onRepeat","onUpdate"]);let{to:D}=C,_,E=0,b=C.duration,F,N=!1,L=!0,U;const Q=D7(C);!((t=(n=Q).needsInterpolation)===null||t===void 0)&&t.call(n,o,D)&&(U=My([0,100],[o,D],{clamp:!1}),o=0,D=100);const ps=Q(Object.assign(Object.assign({},C),{from:o,to:D}));function ds(){E++,p==="reverse"?(L=E%2===0,c=v7(c,b,y,L)):(c=qy(c,b,y),p==="mirror"&&ps.flipTarget()),N=!1,A&&A()}function Cs(){_.stop(),f&&f()}function Vs(Ls){if(L||(Ls=-Ls),c+=Ls,!N){const Ts=ps.next(Math.max(0,c));F=Ts.value,U&&(F=U(F)),N=L?Ts.done:c<=0}m==null||m(F),N&&(E===0&&(b!=null||(b=c)),E<i?_7(c,b,y,L)&&ds():Cs())}function qs(){u==null||u(),_=a(Vs),_.start()}return l&&qs(),{stop:()=>{d==null||d(),_.stop()}}}function Wy(e,n){return n?e*(1e3/n):0}function E7({from:e=0,velocity:n=0,min:t,max:o,power:l=.8,timeConstant:a=750,bounceStiffness:c=500,bounceDamping:i=10,restDelta:p=1,modifyTarget:y,driver:u,onUpdate:d,onComplete:f,onStop:A}){let m;function C(b){return t!==void 0&&b<t||o!==void 0&&b>o}function D(b){return t===void 0?o:o===void 0||Math.abs(t-b)<Math.abs(o-b)?t:o}function _(b){m==null||m.stop(),m=Hy(Object.assign(Object.assign({},b),{driver:u,onUpdate:F=>{var N;d==null||d(F),(N=b.onUpdate)===null||N===void 0||N.call(b,F)},onComplete:f,onStop:A}))}function E(b){_(Object.assign({type:"spring",stiffness:c,damping:i,restDelta:p},b))}if(C(e))E({from:e,velocity:n,to:D(e)});else{let b=l*n+e;typeof y<"u"&&(b=y(b));const F=D(b),N=F===t?-1:1;let L,U;const Q=ps=>{L=U,U=ps,n=Wy(ps-L,gy().delta),(N===1&&ps>F||N===-1&&ps<F)&&E({from:ps,to:F,velocity:n})};_({type:"decay",from:e,velocity:n,timeConstant:a,power:l,restDelta:p,modifyTarget:y,onUpdate:C(b)?Q:void 0})}return{stop:()=>m==null?void 0:m.stop()}}const Vy=(e,n)=>1-3*n+3*e,Ky=(e,n)=>3*n-6*e,zy=e=>3*e,No=(e,n,t)=>((Vy(n,t)*e+Ky(n,t))*e+zy(n))*e,Yy=(e,n,t)=>3*Vy(n,t)*e*e+2*Ky(n,t)*e+zy(n),w7=1e-7,k7=10;function F7(e,n,t,o,l){let a,c,i=0;do c=n+(t-n)/2,a=No(c,o,l)-e,a>0?t=c:n=c;while(Math.abs(a)>w7&&++i<k7);return c}const P7=8,x7=.001;function S7(e,n,t,o){for(let l=0;l<P7;++l){const a=Yy(n,t,o);if(a===0)return n;n-=(No(n,t,o)-e)/a}return n}const vo=11,mo=1/(vo-1);function T7(e,n,t,o){if(e===n&&t===o)return Iy;const l=new Float32Array(vo);for(let c=0;c<vo;++c)l[c]=No(c*mo,e,t);function a(c){let i=0,p=1;const y=vo-1;for(;p!==y&&l[p]<=c;++p)i+=mo;--p;const u=(c-l[p])/(l[p+1]-l[p]),d=i+u*mo,f=Yy(d,e,t);return f>=x7?S7(c,d,e,t):f===0?d:F7(c,i,i+mo,e,t)}return c=>c===0||c===1?c:No(a(c),n,o)}const wl={};class $7{constructor(){this.subscriptions=new Set}add(n){return this.subscriptions.add(n),()=>this.subscriptions.delete(n)}notify(n,t,o){if(!!this.subscriptions.size)for(const l of this.subscriptions)l(n,t,o)}clear(){this.subscriptions.clear()}}const ci=e=>!isNaN(parseFloat(e));class O7{constructor(n){this.timeDelta=0,this.lastUpdated=0,this.updateSubscribers=new $7,this.canTrackVelocity=!1,this.updateAndNotify=t=>{this.prev=this.current,this.current=t;const{delta:o,timestamp:l}=gy();this.lastUpdated!==l&&(this.timeDelta=o,this.lastUpdated=l),ur.postRender(this.scheduleVelocityCheck),this.updateSubscribers.notify(this.current)},this.scheduleVelocityCheck=()=>ur.postRender(this.velocityCheck),this.velocityCheck=({timestamp:t})=>{this.canTrackVelocity||(this.canTrackVelocity=ci(this.current)),t!==this.lastUpdated&&(this.prev=this.current)},this.prev=this.current=n,this.canTrackVelocity=ci(this.current)}onChange(n){return this.updateSubscribers.add(n)}clearListeners(){this.updateSubscribers.clear()}set(n){this.updateAndNotify(n)}get(){return this.current}getPrevious(){return this.prev}getVelocity(){return this.canTrackVelocity?Wy(parseFloat(this.current)-parseFloat(this.prev),this.timeDelta):0}start(n){return this.stop(),new Promise(t=>{const{stop:o}=n(t);this.stopAnimation=o}).then(()=>this.clearAnimation())}stop(){this.stopAnimation&&this.stopAnimation(),this.clearAnimation()}isAnimating(){return!!this.stopAnimation}clearAnimation(){this.stopAnimation=null}destroy(){this.updateSubscribers.clear(),this.stop()}}function M7(e){return new O7(e)}const{isArray:N7}=Array;function L7(){const e=W({}),n=o=>{const l=a=>{!e.value[a]||(e.value[a].stop(),e.value[a].destroy(),delete e.value[a])};o?N7(o)?o.forEach(l):l(o):Object.keys(e.value).forEach(l)},t=(o,l,a)=>{if(e.value[o])return e.value[o];const c=M7(l);return c.onChange(i=>a[o]=i),e.value[o]=c,c};return Kd(n),{motionValues:e,get:t,stop:n}}const I7=e=>Array.isArray(e),An=()=>({type:"spring",stiffness:500,damping:25,restDelta:.5,restSpeed:10}),kl=e=>({type:"spring",stiffness:550,damping:e===0?2*Math.sqrt(550):30,restDelta:.01,restSpeed:10}),R7=e=>({type:"spring",stiffness:550,damping:e===0?100:30,restDelta:.01,restSpeed:10}),Fl=()=>({type:"keyframes",ease:"linear",duration:300}),U7=e=>({type:"keyframes",duration:800,values:e}),ii={default:R7,x:An,y:An,z:An,rotate:An,rotateX:An,rotateY:An,rotateZ:An,scaleX:kl,scaleY:kl,scale:kl,backgroundColor:Fl,color:Fl,opacity:Fl},Gy=(e,n)=>{let t;return I7(n)?t=U7:t=ii[e]||ii.default,{to:n,...t(n)}},pi={...to,transform:Math.round},Zy={color:ae,backgroundColor:ae,outlineColor:ae,fill:ae,stroke:ae,borderColor:ae,borderTopColor:ae,borderRightColor:ae,borderBottomColor:ae,borderLeftColor:ae,borderWidth:rs,borderTopWidth:rs,borderRightWidth:rs,borderBottomWidth:rs,borderLeftWidth:rs,borderRadius:rs,radius:rs,borderTopLeftRadius:rs,borderTopRightRadius:rs,borderBottomRightRadius:rs,borderBottomLeftRadius:rs,width:rs,maxWidth:rs,height:rs,maxHeight:rs,size:rs,top:rs,right:rs,bottom:rs,left:rs,padding:rs,paddingTop:rs,paddingRight:rs,paddingBottom:rs,paddingLeft:rs,margin:rs,marginTop:rs,marginRight:rs,marginBottom:rs,marginLeft:rs,rotate:mn,rotateX:mn,rotateY:mn,rotateZ:mn,scale:fo,scaleX:fo,scaleY:fo,scaleZ:fo,skew:mn,skewX:mn,skewY:mn,distance:rs,translateX:rs,translateY:rs,translateZ:rs,x:rs,y:rs,z:rs,perspective:rs,transformPerspective:rs,opacity:Lt,originX:ti,originY:ti,originZ:rs,zIndex:pi,filter:Br,WebkitFilter:Br,fillOpacity:Lt,strokeOpacity:Lt,numOctaves:pi},pa=e=>Zy[e],Xy=(e,n)=>n&&typeof e=="number"&&n.transform?n.transform(e):e;function j7(e,n){let t=pa(e);return t!==Br&&(t=oo),t.getAnimatableNone?t.getAnimatableNone(n):void 0}const q7={linear:Iy,easeIn:ca,easeInOut:Ry,easeOut:a7,circIn:Uy,circInOut:c7,circOut:jy,backIn:ia,backInOut:p7,backOut:i7,anticipate:y7,bounceIn:m7,bounceInOut:A7,bounceOut:Mo},yi=e=>{if(Array.isArray(e)){const[n,t,o,l]=e;return T7(n,t,o,l)}else if(typeof e=="string")return q7[e];return e},H7=e=>Array.isArray(e)&&typeof e[0]!="number",ui=(e,n)=>e==="zIndex"?!1:!!(typeof n=="number"||Array.isArray(n)||typeof n=="string"&&oo.test(n)&&!n.startsWith("url("));function W7(e){return Array.isArray(e.to)&&e.to[0]===null&&(e.to=[...e.to],e.to[0]=e.from),e}function V7({ease:e,times:n,delay:t,...o}){const l={...o};return n&&(l.offset=n),e&&(l.ease=H7(e)?e.map(yi):yi(e)),t&&(l.elapsed=-t),l}function K7(e,n,t){return Array.isArray(n.to)&&(e.duration||(e.duration=800)),W7(n),z7(e)||(e={...e,...Gy(t,n.to)}),{...n,...V7(e)}}function z7({delay:e,repeat:n,repeatType:t,repeatDelay:o,from:l,...a}){return!!Object.keys(a).length}function Y7(e,n){return e[n]||e.default||e}function G7(e,n,t,o,l){const a=Y7(o,e);let c=a.from===null||a.from===void 0?n.get():a.from;const i=ui(e,t);c==="none"&&i&&typeof t=="string"&&(c=j7(e,t));const p=ui(e,c);function y(d){const f={from:c,to:t,velocity:o.velocity?o.velocity:n.getVelocity(),onUpdate:A=>n.set(A)};return a.type==="inertia"||a.type==="decay"?E7({...f,...a}):Hy({...K7(a,f,e),onUpdate:A=>{f.onUpdate(A),a.onUpdate&&a.onUpdate(A)},onComplete:()=>{o.onComplete&&o.onComplete(),l&&l(),d&&d()}})}function u(d){return n.set(t),o.onComplete&&o.onComplete(),l&&l(),d&&d(),{stop:()=>{}}}return!p||!i||a.type===!1?u:y}function Z7(){const{motionValues:e,stop:n,get:t}=L7();return{motionValues:e,stop:n,push:(l,a,c,i={},p)=>{const y=c[l],u=t(l,y,c);if(i&&i.immediate){u.set(a);return}const d=G7(l,u,a,i,p);u.start(d)}}}function X7(e,n={},{motionValues:t,push:o,stop:l}=Z7()){const a=v(n),c=W(!1);us(t,d=>{c.value=Object.values(d).filter(f=>f.isAnimating()).length>0},{immediate:!0,deep:!0});const i=d=>{if(!a||!a[d])throw new Error(`The variant ${d} does not exist.`);return a[d]},p=d=>(typeof d=="string"&&(d=i(d)),Promise.all(Object.entries(d).map(([f,A])=>{if(f!=="transition")return new Promise(m=>{o(f,A,e,d.transition||Gy(f,d[f]),m)})}).filter(Boolean)));return{isAnimating:c,apply:p,set:d=>{const f=Vl(d)?d:i(d);Object.entries(f).forEach(([A,m])=>{A!=="transition"&&o(A,m,e,{immediate:!0})})},leave:async d=>{let f;if(a&&(a.leave&&(f=a.leave),!a.leave&&a.initial&&(f=a.initial)),!f){d();return}await p(f),d()},stop:l}}const ya=typeof window<"u",J7=()=>ya&&window.onpointerdown===null,Q7=()=>ya&&window.ontouchstart===null,s6=()=>ya&&window.onmousedown===null;function e6({target:e,state:n,variants:t,apply:o}){const l=v(t),a=W(!1),c=W(!1),i=W(!1),p=k(()=>{let u=[];return l&&(l.hovered&&(u=[...u,...Object.keys(l.hovered)]),l.tapped&&(u=[...u,...Object.keys(l.tapped)]),l.focused&&(u=[...u,...Object.keys(l.focused)])),u}),y=k(()=>{const u={};Object.assign(u,n.value),a.value&&l.hovered&&Object.assign(u,l.hovered),c.value&&l.tapped&&Object.assign(u,l.tapped),i.value&&l.focused&&Object.assign(u,l.focused);for(const d in u)p.value.includes(d)||delete u[d];return u});l.hovered&&(is(e,"mouseenter",()=>a.value=!0),is(e,"mouseleave",()=>{a.value=!1,c.value=!1}),is(e,"mouseout",()=>{a.value=!1,c.value=!1})),l.tapped&&(s6()&&(is(e,"mousedown",()=>c.value=!0),is(e,"mouseup",()=>c.value=!1)),J7()&&(is(e,"pointerdown",()=>c.value=!0),is(e,"pointerup",()=>c.value=!1)),Q7()&&(is(e,"touchstart",()=>c.value=!0),is(e,"touchend",()=>c.value=!1))),l.focused&&(is(e,"focus",()=>i.value=!0),is(e,"blur",()=>i.value=!1)),us(y,o)}function n6({set:e,target:n,apply:t,variants:o,variant:l}){const a=v(o);us(()=>n,()=>{!a||(a.initial&&e("initial"),a.enter&&(l.value="enter"))},{immediate:!0,flush:"pre"})}function t6({state:e,apply:n}){us(e,t=>{t&&n(t)},{immediate:!0})}function o6({target:e,variants:n,variant:t}){const o=v(n);o&&(o.visible||o.visibleOnce)&&C5(e,([{isIntersecting:l}])=>{o.visible?l?t.value="visible":t.value="initial":o.visibleOnce&&(l&&t.value!=="visibleOnce"?t.value="visibleOnce":t.value||(t.value="initial"))})}function l6(e,n={syncVariants:!0,lifeCycleHooks:!0,visibilityHooks:!0,eventListeners:!0}){n.lifeCycleHooks&&n6(e),n.syncVariants&&t6(e),n.visibilityHooks&&o6(e),n.eventListeners&&e6(e)}function Jy(e={}){const n=Os({...e}),t=W({});return us(n,()=>{const o={};for(const[l,a]of Object.entries(n)){const c=pa(l),i=Xy(a,c);o[l]=i}t.value=o},{immediate:!0,deep:!0}),{state:n,style:t}}function ua(e,n){us(()=>Fe(e),t=>{!t||n(t)},{immediate:!0})}const r6={x:"translateX",y:"translateY",z:"translateZ"};function Qy(e={},n=!0){const t=Os({...e}),o=W("");return us(t,l=>{let a="",c=!1;n&&(l.x||l.y||l.z)&&(a+=`translate3d(${[l.x||0,l.y||0,l.z||0].map(rs.transform).join(",")}) `,c=!0);for(const[i,p]of Object.entries(l)){if(n&&(i==="x"||i==="y"||i==="z"))continue;const y=pa(i),u=Xy(p,y);a+=`${r6[i]||i}(${u}) `}n&&!c&&(a+="translateZ(0px) "),o.value=a.trim()},{immediate:!0,deep:!0}),{state:t,transform:o}}const a6=["","X","Y","Z"],c6=["perspective","translate","scale","rotate","skew"],su=["transformPerspective","x","y","z"];c6.forEach(e=>{a6.forEach(n=>{const t=e+n;su.push(t)})});const i6=new Set(su);function da(e){return i6.has(e)}const p6=new Set(["originX","originY","originZ"]);function eu(e){return p6.has(e)}function y6(e){const n={},t={};return Object.entries(e).forEach(([o,l])=>{da(o)||eu(o)?n[o]=l:t[o]=l}),{transform:n,style:t}}function nu(e){const{transform:n,style:t}=y6(e),{transform:o}=Qy(n),{style:l}=Jy(t);return o.value&&(l.value.transform=o.value),l.value}function u6(e,n){let t,o;const{state:l,style:a}=Jy();return ua(e,c=>{o=c;for(const i of Object.keys(Zy))c.style[i]===null||c.style[i]===""||da(i)||eu(i)||(l[i]=c.style[i]);t&&Object.entries(t).forEach(([i,p])=>c.style[i]=p),n&&n(l)}),us(a,c=>{if(!o){t=c;return}for(const i in c)o.style[i]=c[i]},{immediate:!0}),{style:l}}function d6(e){const n=e.trim().split(/\) |\)/);if(n.length===1)return{};const t=o=>o.endsWith("px")||o.endsWith("deg")?parseFloat(o):isNaN(Number(o))?Number(o):o;return n.reduce((o,l)=>{if(!l)return o;const[a,c]=l.split("("),p=c.split(",").map(u=>t(u.endsWith(")")?u.replace(")",""):u.trim())),y=p.length===1?p[0]:p;return{...o,[a]:y}},{})}function f6(e,n){Object.entries(d6(n)).forEach(([t,o])=>{const l=["x","y","z"];if(t==="translate3d"){if(o===0){l.forEach(a=>e[a]=0);return}o.forEach((a,c)=>e[l[c]]=a);return}if(o=parseFloat(o),t==="translateX"){e.x=o;return}if(t==="translateY"){e.y=o;return}if(t==="translateZ"){e.z=o;return}e[t]=o})}function m6(e,n){let t,o;const{state:l,transform:a}=Qy();return ua(e,c=>{o=c,c.style.transform&&f6(l,c.style.transform),t&&(c.style.transform=t),n&&n(l)}),us(a,c=>{if(!o){t=c;return}o.style.transform=c},{immediate:!0}),{transform:l}}function A6(e,n){const t=Os({}),o=c=>Object.entries(c).forEach(([i,p])=>t[i]=p),{style:l}=u6(e,o),{transform:a}=m6(e,o);return us(t,c=>{Object.entries(c).forEach(([i,p])=>{const y=da(i)?a:l;y[i]&&y[i]===p||(y[i]=p)})},{immediate:!0,deep:!0}),ua(e,()=>n&&o(n)),{motionProperties:t,style:l,transform:a}}function B6(e={}){const n=v(e),t=W();return{state:k(()=>{if(!!t.value)return n[t.value]}),variant:t}}function tu(e,n={},t){const{motionProperties:o}=A6(e),{variant:l,state:a}=B6(n),c=X7(o,n),i={target:e,variant:l,variants:n,state:a,motionProperties:o,...c};return l6(i,t),i}const h6=["initial","enter","leave","visible","visible-once","hovered","tapped","focused","delay"],C6=(e,n)=>{const t=e.props?e.props:e.data&&e.data.attrs?e.data.attrs:{};t&&(t.variants&&Vl(t.variants)&&(n.value={...n.value,...t.variants}),h6.forEach(o=>{if(o==="delay"){if(t&&t[o]&&Sd(t[o])){const l=t[o];n&&n.value&&(n.value.enter&&(n.value.enter.transition||(n.value.enter.transition={}),n.value.enter.transition={delay:l,...n.value.enter.transition}),n.value.visible&&(n.value.visible.transition||(n.value.visible.transition={}),n.value.visible.transition={delay:l,...n.value.visible.transition}),n.value.visibleOnce&&(n.value.visibleOnce.transition||(n.value.visibleOnce.transition={}),n.value.visibleOnce.transition={delay:l,...n.value.visibleOnce.transition}))}return}o==="visible-once"&&(o="visibleOnce"),t&&t[o]&&Vl(t[o])&&(n.value[o]=t[o])}))},Pl=e=>({created:(o,l,a)=>{const c=l.value&&typeof l.value=="string"?l.value:a.key;c&&wl[c]&&wl[c].stop();const i=W(e||{});typeof l.value=="object"&&(i.value=l.value),C6(a,i);const p=tu(o,i);o.motionInstance=p,c&&(wl[c]=p)},unmounted:o=>{o.motionInstance&&o.motionInstance.stop()},getSSRProps(o,l){let{initial:a}=o.value||l&&(l==null?void 0:l.props)||{};a=v(a);const c=gD((e==null?void 0:e.initial)||{},a||{});return!c||Object.keys(c).length===0?void 0:{style:nu(c)}}}),g6={initial:{opacity:0},enter:{opacity:1}},D6={initial:{opacity:0},visible:{opacity:1}},v6={initial:{opacity:0},visibleOnce:{opacity:1}},_6={initial:{scale:0,opacity:0},enter:{scale:1,opacity:1}},b6={initial:{scale:0,opacity:0},visible:{scale:1,opacity:1}},E6={initial:{scale:0,opacity:0},visibleOnce:{scale:1,opacity:1}},w6={initial:{x:-100,rotate:90,opacity:0},enter:{x:0,rotate:0,opacity:1}},k6={initial:{x:-100,rotate:90,opacity:0},visible:{x:0,rotate:0,opacity:1}},F6={initial:{x:-100,rotate:90,opacity:0},visibleOnce:{x:0,rotate:0,opacity:1}},P6={initial:{x:100,rotate:-90,opacity:0},enter:{x:0,rotate:0,opacity:1}},x6={initial:{x:100,rotate:-90,opacity:0},visible:{x:0,rotate:0,opacity:1}},S6={initial:{x:100,rotate:-90,opacity:0},visibleOnce:{x:0,rotate:0,opacity:1}},T6={initial:{y:-100,rotate:-90,opacity:0},enter:{y:0,rotate:0,opacity:1}},$6={initial:{y:-100,rotate:-90,opacity:0},visible:{y:0,rotate:0,opacity:1}},O6={initial:{y:-100,rotate:-90,opacity:0},visibleOnce:{y:0,rotate:0,opacity:1}},M6={initial:{y:100,rotate:90,opacity:0},enter:{y:0,rotate:0,opacity:1}},N6={initial:{y:100,rotate:90,opacity:0},visible:{y:0,rotate:0,opacity:1}},L6={initial:{y:100,rotate:90,opacity:0},visibleOnce:{y:0,rotate:0,opacity:1}},I6={initial:{x:-100,opacity:0},enter:{x:0,opacity:1}},R6={initial:{x:-100,opacity:0},visible:{x:0,opacity:1}},U6={initial:{x:-100,opacity:0},visibleOnce:{x:0,opacity:1}},j6={initial:{x:100,opacity:0},enter:{x:0,opacity:1}},q6={initial:{x:100,opacity:0},visible:{x:0,opacity:1}},H6={initial:{x:100,opacity:0},visibleOnce:{x:0,opacity:1}},W6={initial:{y:-100,opacity:0},enter:{y:0,opacity:1}},V6={initial:{y:-100,opacity:0},visible:{y:0,opacity:1}},K6={initial:{y:-100,opacity:0},visibleOnce:{y:0,opacity:1}},z6={initial:{y:100,opacity:0},enter:{y:0,opacity:1}},Y6={initial:{y:100,opacity:0},visible:{y:0,opacity:1}},G6={initial:{y:100,opacity:0},visibleOnce:{y:0,opacity:1}},hr={__proto__:null,fade:g6,fadeVisible:D6,fadeVisibleOnce:v6,pop:_6,popVisible:b6,popVisibleOnce:E6,rollBottom:M6,rollLeft:w6,rollRight:P6,rollTop:T6,rollVisibleBottom:N6,rollVisibleLeft:k6,rollVisibleRight:x6,rollVisibleTop:$6,rollVisibleOnceBottom:L6,rollVisibleOnceLeft:F6,rollVisibleOnceRight:S6,rollVisibleOnceTop:O6,slideBottom:z6,slideLeft:I6,slideRight:j6,slideTop:W6,slideVisibleBottom:Y6,slideVisibleLeft:R6,slideVisibleRight:q6,slideVisibleTop:V6,slideVisibleOnceBottom:G6,slideVisibleOnceLeft:U6,slideVisibleOnceRight:H6,slideVisibleOnceTop:K6},Z6=hs({props:{is:{type:[String,Object],required:!1},preset:{type:String,required:!1},instance:{type:Object,required:!1},variants:{type:Object,required:!1},initial:{type:Object,required:!1},enter:{type:Object,required:!1},leave:{type:Object,required:!1},visible:{type:Object,required:!1},visibleOnce:{type:Object,required:!1},hovered:{type:Object,required:!1},tapped:{type:Object,required:!1},focused:{type:Object,required:!1},delay:{type:[Number,String],required:!1}},setup(e){var i;const n=td(),t=Os({});if(!e.is&&!n.default)return()=>fe("div",{});const o=k(()=>{let p;return e.preset&&(p=hr[e.preset]),p}),l=k(()=>({initial:e.initial,enter:e.enter,leave:e.leave,visible:e.visible,visibleOnce:e.visibleOnce,hovered:e.hovered,tapped:e.tapped,focused:e.focused})),a=k(()=>{const p={...l.value,...o.value||{},...e.variants||{}};return e.delay&&(p.enter.transition={...p.enter.transition},p.enter.transition.delay=parseInt(e.delay)),p}),c=k(()=>{if(!e.is)return;let p=e.is;return typeof c.value=="string"&&!fu(p)&&(p=tt(p)),p});if(((i=process==null?void 0:process.env)==null?void 0:i.NODE_ENV)==="development"||(process==null?void 0:process.dev)){const p=y=>{var u;(u=y.variants)!=null&&u.initial&&y.set("initial"),setTimeout(()=>{var d,f,A;(d=y.variants)!=null&&d.enter&&y.apply("enter"),(f=y.variants)!=null&&f.visible&&y.apply("visible"),(A=y.variants)!=null&&A.visibleOnce&&y.apply("visibleOnce")},10)};Lr(()=>Object.entries(t).forEach(([y,u])=>p(u)))}return{slots:n,component:c,motionConfig:a,instances:t}},render({slots:e,motionConfig:n,instances:t,component:o}){var i;const l=nu(n.initial||{}),a=(p,y)=>(p.props||(p.props={}),p.props.style=l,p.props.onVnodeMounted=({el:u})=>{const d=tu(u,n);t[y]=d},p);if(o){const p=fe(o,void 0,e);return a(p,0),p}return(((i=e.default)==null?void 0:i.call(e))||[]).map((p,y)=>a(p,y))}});function X6(e){const n="\xE0\xE1\xE2\xE4\xE6\xE3\xE5\u0101\u0103\u0105\xE7\u0107\u010D\u0111\u010F\xE8\xE9\xEA\xEB\u0113\u0117\u0119\u011B\u011F\u01F5\u1E27\xEE\xEF\xED\u012B\u012F\xEC\u0142\u1E3F\xF1\u0144\u01F9\u0148\xF4\xF6\xF2\xF3\u0153\xF8\u014D\xF5\u0151\u1E55\u0155\u0159\xDF\u015B\u0161\u015F\u0219\u0165\u021B\xFB\xFC\xF9\xFA\u016B\u01D8\u016F\u0171\u0173\u1E83\u1E8D\xFF\xFD\u017E\u017A\u017C\xB7/_,:;",t="aaaaaaaaaacccddeeeeeeeegghiiiiiilmnnnnoooooooooprrsssssttuuuuuuuuuwxyyzzz------",o=new RegExp(n.split("").join("|"),"g");return e.toString().replace(/[A-Z]/g,l=>`-${l}`).toLowerCase().replace(/\s+/g,"-").replace(o,l=>t.charAt(n.indexOf(l))).replace(/&/g,"-and-").replace(/[^\w\-]+/g,"").replace(/\-\-+/g,"-").replace(/^-+/,"").replace(/-+$/,"")}const J6={install(e,n){if(e.directive("motion",Pl()),e.component("Motion",Z6),!n||n&&!n.excludePresets)for(const t in hr){const o=hr[t];e.directive(`motion-${X6(t)}`,Pl(o))}if(n&&n.directives)for(const t in n.directives){const o=n.directives[t];o.initial,e.directive(`motion-${t}`,Pl(o))}}};var di;const Rt=typeof window<"u",Q6=Object.prototype.toString,s1=e=>Q6.call(e)==="[object Object]";Rt&&((di=window==null?void 0:window.navigator)==null?void 0:di.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function e1(e){return Oi()?(Mi(e),!0):!1}function n1(e){var n;const t=v(e);return(n=t==null?void 0:t.$el)!=null?n:t}const t1=Rt?window:void 0,Cr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},gr="__vueuse_ssr_handlers__";Cr[gr]=Cr[gr]||{};Cr[gr];function o1(e,n={}){const{immediate:t=!0,window:o=t1}=n,l=W(!1);let a=null;function c(){!l.value||!o||(e(),a=o.requestAnimationFrame(c))}function i(){!l.value&&o&&(l.value=!0,c())}function p(){l.value=!1,a!=null&&o&&(o.cancelAnimationFrame(a),a=null)}return t&&i(),e1(p),{isActive:l,pause:p,resume:i}}var fi;(function(e){e.UP="UP",e.RIGHT="RIGHT",e.DOWN="DOWN",e.LEFT="LEFT",e.NONE="NONE"})(fi||(fi={}));const fa="vue-starport-injection",ou="vue-starport-options",l1={duration:800,easing:"cubic-bezier(0.45, 0, 0.55, 1)",keepAlive:!1},lu={port:{type:String,required:!0},duration:{type:Number,required:!1},easing:{type:String,required:!1},keepAlive:{type:Boolean,required:!1,default:void 0},mountedProps:{type:Object,required:!1},initialProps:{type:Object,required:!1}};var r1=Object.defineProperty,Lo=Object.getOwnPropertySymbols,ru=Object.prototype.hasOwnProperty,au=Object.prototype.propertyIsEnumerable,mi=(e,n,t)=>n in e?r1(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,a1=(e,n)=>{for(var t in n||(n={}))ru.call(n,t)&&mi(e,t,n[t]);if(Lo)for(var t of Lo(n))au.call(n,t)&&mi(e,t,n[t]);return e},Ai=(e,n)=>{var t={};for(var o in e)ru.call(e,o)&&n.indexOf(o)<0&&(t[o]=e[o]);if(e!=null&&Lo)for(var o of Lo(e))n.indexOf(o)<0&&au.call(e,o)&&(t[o]=e[o]);return t};const c1=hs({name:"StarportProxy",props:a1({props:{type:Object,default:()=>({})},component:{type:Object,required:!0}},lu),setup(e,n){const t=q(fa),o=k(()=>t.getInstance(e.port,e.component)),l=W(),a=o.value.generateId(),c=W(!1);return o.value.isVisible||(o.value.land(),c.value=!0),ut(async()=>{o.value.el||(o.value.el=l.value,await Xs(),c.value=!0,o.value.rect.update())}),Go(async()=>{o.value.rect.update(),o.value.liftOff(),o.value.el=void 0,c.value=!1,!o.value.options.keepAlive&&(await Xs(),await Xs(),!o.value.el&&t.dispose(o.value.port))}),us(()=>e,async()=>{o.value.props&&await Xs();const i=e,{props:p}=i,y=Ai(i,["props"]);o.value.props=p||{},o.value.setLocalOptions(y)},{deep:!0,immediate:!0}),()=>{const i=e,{initialProps:p,mountedProps:y}=i,u=Ai(i,["initialProps","mountedProps"]),d=cs(u,(c.value?y:p)||{});return fe("div",cs(d,{id:a,ref:l,"data-starport-proxy":o.value.componentId,"data-starport-landed":o.value.isLanded?"true":void 0,"data-starport-floating":o.value.isLanded?void 0:"true"}),n.slots.default?fe(n.slots.default):void 0)}}});var i1=Object.defineProperty,p1=Object.defineProperties,y1=Object.getOwnPropertyDescriptors,Bi=Object.getOwnPropertySymbols,u1=Object.prototype.hasOwnProperty,d1=Object.prototype.propertyIsEnumerable,hi=(e,n,t)=>n in e?i1(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,f1=(e,n)=>{for(var t in n||(n={}))u1.call(n,t)&&hi(e,t,n[t]);if(Bi)for(var t of Bi(n))d1.call(n,t)&&hi(e,t,n[t]);return e},m1=(e,n)=>p1(e,y1(n));const A1=hs({name:"Starport",inheritAttrs:!0,props:lu,setup(e,n){const t=W(!1);return ut(()=>{t.value=!0}),()=>{var c,i;const o=(i=(c=n.slots).default)==null?void 0:i.call(c);if(!o)throw new Error("[Vue Starport] Slot is required to use <Starport>");if(o.length!==1)throw new Error(`[Vue Starport] <Starport> requires exactly one slot, but got ${o.length}`);const l=o[0];let a=l.type;return(!s1(a)||ot(a))&&(a={render(){return o}}),fe(c1,m1(f1({},e),{key:e.port,component:Wo(a),props:l.props}))}}});function B1(e){const n=Os({height:0,width:0,left:0,top:0,update:o,listen:a,pause:c,margin:"0px",padding:"0px"}),t=Rt?document.documentElement||document.body:void 0;function o(){if(!Rt)return;const i=n1(e);if(!i)return;const{height:p,width:y,left:u,top:d}=i.getBoundingClientRect(),f=window.getComputedStyle(i),A=f.margin,m=f.padding;Object.assign(n,{height:p,width:y,left:u,top:t.scrollTop+d,margin:A,padding:m})}const l=o1(o,{immediate:!1});function a(){!Rt||(o(),l.resume())}function c(){l.pause()}return n}let h1=(e,n=21)=>(t=n)=>{let o="",l=t;for(;l--;)o+=e[Math.random()*e.length|0];return o};const Ci=h1("abcdefghijklmnopqrstuvwxyz",5);function gi(e){return e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase().replace(/[^\w\d_-]/g,"")}function C1(e){var n;return e.name||((n=e.__file)==null?void 0:n.split(/[\/\\.]/).slice(-2)[0])||""}var g1=Object.defineProperty,Di=Object.getOwnPropertySymbols,D1=Object.prototype.hasOwnProperty,v1=Object.prototype.propertyIsEnumerable,vi=(e,n,t)=>n in e?g1(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,xl=(e,n)=>{for(var t in n||(n={}))D1.call(n,t)&&vi(e,t,n[t]);if(Di)for(var t of Di(n))v1.call(n,t)&&vi(e,t,n[t]);return e};function _1(e,n,t={}){const o=C1(n),l=gi(o)||Ci(),a=W(),c=W(null),i=W(!1),p=W(!1),y=vu(!0),u=W({}),d=k(()=>xl(xl(xl({},l1),t),u.value)),f=W(0);let A;y.run(()=>{A=B1(a),us(a,async _=>{_&&(p.value=!0),await Xs(),a.value||(p.value=!1)})});const m=gi(e);function C(){return`starport-${l}-${m}-${Ci()}`}const D=C();return Os({el:a,id:D,port:e,props:c,rect:A,scope:y,isLanded:i,isVisible:p,options:d,liftOffTime:f,component:n,componentName:o,componentId:l,generateId:C,setLocalOptions(_={}){u.value=JSON.parse(JSON.stringify(_))},elRef(){return a},liftOff(){!i.value||(i.value=!1,f.value=Date.now(),A.listen())},land(){i.value||(i.value=!0,A.pause())}})}function b1(e){const n=Os(new Map);function t(l,a){let c=n.get(l);return c||(c=_1(l,a,e),n.set(l,c)),c.component=a,c}function o(l){var a;(a=n.get(l))==null||a.scope.stop(),n.delete(l)}return{portMap:n,dispose:o,getInstance:t}}var E1=Object.defineProperty,w1=Object.defineProperties,k1=Object.getOwnPropertyDescriptors,_i=Object.getOwnPropertySymbols,F1=Object.prototype.hasOwnProperty,P1=Object.prototype.propertyIsEnumerable,bi=(e,n,t)=>n in e?E1(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,x1=(e,n)=>{for(var t in n||(n={}))F1.call(n,t)&&bi(e,t,n[t]);if(_i)for(var t of _i(n))P1.call(n,t)&&bi(e,t,n[t]);return e},S1=(e,n)=>w1(e,k1(n));const T1=hs({name:"StarportCraft",props:{port:{type:String,required:!0},component:{type:Object,required:!0}},setup(e){const n=q(fa);if(!n)throw new Error("[Vue Starport] Failed to find the carrier, all Starport components must be wrapped in a <StarportCarrier> component.");const t=k(()=>n.getInstance(e.port,e.component)),o=k(()=>{var c;return((c=t.value.el)==null?void 0:c.id)||t.value.id}),l=k(()=>{const c=Date.now()-t.value.liftOffTime,i=Math.max(0,t.value.options.duration-c),p=t.value.rect,y={position:"absolute",left:0,top:0,width:`${p.width}px`,height:`${p.height}px`,margin:p.margin,padding:p.padding,transform:`translate3d(${p.left}px,${p.top}px,0px)`};return!t.value.isVisible||!t.value.el?S1(x1({},y),{zIndex:-1,display:"none"}):(t.value.isLanded?y.display="none":Object.assign(y,{transitionProperty:"all",transitionDuration:`${i}ms`,transitionTimingFunction:t.value.options.easing}),y)}),a={};return()=>{const c=!!(t.value.isLanded&&t.value.el);return fe("div",{style:l.value,"data-starport-craft":t.value.componentId,"data-starport-landed":t.value.isLanded?"true":void 0,"data-starport-floating":t.value.isLanded?void 0:"true",onTransitionend:t.value.land},fe(z8,{to:c?`#${o.value}`:"body",disabled:!c},fe(t.value.component,cs(a,t.value.props))))}}}),$1=hs({name:"StarportCarrier",setup(e,{slots:n}){const t=b1(q(ou,{}));return Mn().appContext.app.provide(fa,t),()=>{var l;return[(l=n.default)==null?void 0:l.call(n),Array.from(t.portMap.entries()).map(([a,{component:c}])=>fe(T1,{key:a,port:a,component:c}))]}}});function O1(e={}){return{install(n){n.provide(ou,e),n.component("Starport",A1),n.component("StarportCarrier",$1)}}}function M1(e){function n(){document.documentElement.style.setProperty("--vh",`${window.innerHeight*.01}px`)}n(),window.addEventListener("resize",n),e.app.use(J6),e.app.use(O1({keepAlive:!0}))}function ie(e,n,t){var o,l;return(l=((o=e.instance)==null?void 0:o.$).provides[n])!=null?l:t}function N1(){return{install(e){e.directive("click",{name:"v-click",mounted(n,t){var u,d,f,A;if(Mt.value||((u=ie(t,St))==null?void 0:u.value))return;const o=ie(t,Dn),l=ie(t,xt),a=ie(t,Yl),c=t.modifiers.hide!==!1&&t.modifiers.hide!=null,i=t.modifiers.fade!==!1&&t.modifiers.fade!=null,p=((d=o==null?void 0:o.value)==null?void 0:d.length)||0,y=i?_f:ul;if(o&&!((f=o==null?void 0:o.value)!=null&&f.includes(n))&&o.value.push(n),t.value==null&&(t.value=o==null?void 0:o.value.length),!(a!=null&&a.value.has(t.value)))a==null||a.value.set(t.value,[n]);else if(!((A=a==null?void 0:a.value.get(t.value))!=null&&A.includes(n))){const m=(a==null?void 0:a.value.get(t.value))||[];a==null||a.value.set(t.value,[n].concat(m))}n==null||n.classList.toggle(hn,!0),l&&us(l,()=>{var _;const m=(_=l==null?void 0:l.value)!=null?_:0,C=t.value!=null?m>=t.value:m>p;n.classList.contains(dl)||n.classList.toggle(y,!C),c!==!1&&c!==void 0&&n.classList.toggle(y,C),n.classList.toggle(Ct,!1);const D=a==null?void 0:a.value.get(m);D==null||D.forEach((E,b)=>{E.classList.toggle(yo,!1),b===D.length-1?E.classList.toggle(Ct,!0):E.classList.toggle(yo,!0)}),n.classList.contains(Ct)||n.classList.toggle(yo,C)},{immediate:!0})},unmounted(n,t){n==null||n.classList.toggle(hn,!1);const o=ie(t,Dn);o!=null&&o.value&&Gl(o.value,n)}}),e.directive("after",{name:"v-after",mounted(n,t){var i,p;if(Mt.value||((i=ie(t,St))==null?void 0:i.value))return;const o=ie(t,Dn),l=ie(t,xt),a=ie(t,Yl),c=o==null?void 0:o.value.length;t.value==null&&(t.value=o==null?void 0:o.value.length),a!=null&&a.value.has(t.value)?(p=a==null?void 0:a.value.get(t.value))==null||p.push(n):a==null||a.value.set(t.value,[n]),n==null||n.classList.toggle(hn,!0),l&&us(l,()=>{var u,d,f;const y=((u=l.value)!=null?u:0)>=((f=(d=t.value)!=null?d:c)!=null?f:0);n.classList.contains(dl)||n.classList.toggle(ul,!y),n.classList.toggle(Ct,!1),n.classList.contains(Ct)||n.classList.toggle(yo,y)},{immediate:!0})},unmounted(n){n==null||n.classList.toggle(hn,!0)}}),e.directive("click-hide",{name:"v-click-hide",mounted(n,t){var c,i,p;if(Mt.value||((c=ie(t,St))==null?void 0:c.value))return;const o=ie(t,Dn),l=ie(t,xt),a=((i=o==null?void 0:o.value)==null?void 0:i.length)||0;o&&!((p=o==null?void 0:o.value)!=null&&p.includes(n))&&o.value.push(n),n==null||n.classList.toggle(hn,!0),l&&us(l,()=>{var d;const y=(d=l==null?void 0:l.value)!=null?d:0,u=t.value!=null?y>=t.value:y>a;n.classList.toggle(ul,u),n.classList.toggle(dl,u)},{immediate:!0})},unmounted(n,t){n==null||n.classList.toggle(hn,!1);const o=ie(t,Dn);o!=null&&o.value&&Gl(o.value,n)}})}}}function L1(e,n){const t=cy(e),o=iy(n,t.currentRoute,t.currentPage);return{nav:{...t,...o,downloadPDF:cr,next:cn,nextSlide:Zt,openInEditor:AD,prev:pn,prevSlide:Xt},configs:vs,themeConfigs:k(()=>vs.themeConfig)}}function I1(){return{install(e){const n=L1(Xe,Se);e.provide(Y,Os(n))}}}const mt=kd(hD);mt.use(Ae);mt.use(Bf());mt.use(N1());mt.use(I1());M1({app:mt,router:Ae});mt.mount("#app");export{zA as $,FA as A,mD as B,ut as C,Os as D,q1 as E,G as F,V1 as G,us as H,T as I,Es as J,oe as K,IA as L,R1 as M,U1 as N,Se as O,Oo as P,yD as Q,Dl as R,fl as S,zt as T,Cl as U,Hh as V,Zr as W,Xr as X,Uh as Y,js as Z,ty as _,Y as a,ly as a0,Oe as a1,j1 as a2,Qs as a3,bt as a4,uo as a5,En as a6,Ue as a7,or as a8,mA as a9,AA as aa,BA as ab,CA as ac,Ir as ad,vp as ae,K1 as af,le as ag,kB as ah,Sp as ai,gA as aj,Go as ak,MA as al,gf as b,vs as c,hs as d,t8 as e,S as f,s as g,v as h,q as i,Ws as j,Ay as k,r as l,M as m,zs as n,g as o,ys as p,Tp as q,dt as r,Ss as s,Sn as t,H1 as u,W as v,W1 as w,k as x,ue as y,z};
