(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function e(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(s){if(s.ep)return;s.ep=!0;const o=e(s);fetch(s.href,o)}})();var No={};/**
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
 */const Oa=function(n){const t=[];let e=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?t[e++]=s:s<2048?(t[e++]=s>>6|192,t[e++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),t[e++]=s>>18|240,t[e++]=s>>12&63|128,t[e++]=s>>6&63|128,t[e++]=s&63|128):(t[e++]=s>>12|224,t[e++]=s>>6&63|128,t[e++]=s&63|128)}return t},cl=function(n){const t=[];let e=0,r=0;for(;e<n.length;){const s=n[e++];if(s<128)t[r++]=String.fromCharCode(s);else if(s>191&&s<224){const o=n[e++];t[r++]=String.fromCharCode((s&31)<<6|o&63)}else if(s>239&&s<365){const o=n[e++],a=n[e++],c=n[e++],h=((s&7)<<18|(o&63)<<12|(a&63)<<6|c&63)-65536;t[r++]=String.fromCharCode(55296+(h>>10)),t[r++]=String.fromCharCode(56320+(h&1023))}else{const o=n[e++],a=n[e++];t[r++]=String.fromCharCode((s&15)<<12|(o&63)<<6|a&63)}}return t.join("")},La={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,t){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const e=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const o=n[s],a=s+1<n.length,c=a?n[s+1]:0,h=s+2<n.length,f=h?n[s+2]:0,m=o>>2,E=(o&3)<<4|c>>4;let A=(c&15)<<2|f>>6,C=f&63;h||(C=64,a||(A=64)),r.push(e[m],e[E],e[A],e[C])}return r.join("")},encodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(n):this.encodeByteArray(Oa(n),t)},decodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(n):cl(this.decodeStringToByteArray(n,t))},decodeStringToByteArray(n,t){this.init_();const e=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const o=e[n.charAt(s++)],c=s<n.length?e[n.charAt(s)]:0;++s;const f=s<n.length?e[n.charAt(s)]:64;++s;const E=s<n.length?e[n.charAt(s)]:64;if(++s,o==null||c==null||f==null||E==null)throw new ll;const A=o<<2|c>>4;if(r.push(A),f!==64){const C=c<<4&240|f>>2;if(r.push(C),E!==64){const D=f<<6&192|E;r.push(D)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class ll extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const hl=function(n){const t=Oa(n);return La.encodeByteArray(t,!0)},ar=function(n){return hl(n).replace(/\./g,"")},dl=function(n){try{return La.decodeString(n,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function fl(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const ml=()=>fl().__FIREBASE_DEFAULTS__,pl=()=>{if(typeof process>"u"||typeof No>"u")return;const n=No.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},gl=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=n&&dl(n[1]);return t&&JSON.parse(t)},Qs=()=>{try{return ml()||pl()||gl()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},_l=n=>{var t,e;return(e=(t=Qs())===null||t===void 0?void 0:t.emulatorHosts)===null||e===void 0?void 0:e[n]},yl=n=>{const t=_l(n);if(!t)return;const e=t.lastIndexOf(":");if(e<=0||e+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(e+1),10);return t[0]==="["?[t.substring(1,e-1),r]:[t.substring(0,e),r]},Fa=()=>{var n;return(n=Qs())===null||n===void 0?void 0:n.config};/**
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
 */class El{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}wrapCallback(t){return(e,r)=>{e?this.reject(e):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(e):t(e,r))}}}/**
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
 */function vl(n,t){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const e={alg:"none",type:"JWT"},r=t||"demo-project",s=n.iat||0,o=n.sub||n.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},n);return[ar(JSON.stringify(e)),ar(JSON.stringify(a)),""].join(".")}/**
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
 */function Tl(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Il(){var n;const t=(n=Qs())===null||n===void 0?void 0:n.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function wl(){return!Il()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Al(){try{return typeof indexedDB=="object"}catch{return!1}}function Rl(){return new Promise((n,t)=>{try{let e=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),e||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{e=!1},s.onerror=()=>{var o;t(((o=s.error)===null||o===void 0?void 0:o.message)||"")}}catch(e){t(e)}})}/**
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
 */const Sl="FirebaseError";class Be extends Error{constructor(t,e,r){super(e),this.code=t,this.customData=r,this.name=Sl,Object.setPrototypeOf(this,Be.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ba.prototype.create)}}class Ba{constructor(t,e,r){this.service=t,this.serviceName=e,this.errors=r}create(t,...e){const r=e[0]||{},s=`${this.service}/${t}`,o=this.errors[t],a=o?Cl(o,r):"Error",c=`${this.serviceName}: ${a} (${s}).`;return new Be(s,c,r)}}function Cl(n,t){return n.replace(Pl,(e,r)=>{const s=t[r];return s!=null?String(s):`<${r}?>`})}const Pl=/\{\$([^}]+)}/g;function Rs(n,t){if(n===t)return!0;const e=Object.keys(n),r=Object.keys(t);for(const s of e){if(!r.includes(s))return!1;const o=n[s],a=t[s];if(Mo(o)&&Mo(a)){if(!Rs(o,a))return!1}else if(o!==a)return!1}for(const s of r)if(!e.includes(s))return!1;return!0}function Mo(n){return n!==null&&typeof n=="object"}/**
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
 */function jt(n){return n&&n._delegate?n._delegate:n}class yn{constructor(t,e,r){this.name=t,this.instanceFactory=e,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const me="[DEFAULT]";/**
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
 */class bl{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const r=new El;if(this.instancesDeferred.set(e,r),this.isInitialized(e)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:e});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),s=(e=t==null?void 0:t.optional)!==null&&e!==void 0?e:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(s)return null;throw o}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(Dl(t))try{this.getOrInitializeService({instanceIdentifier:me})}catch{}for(const[e,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(e);try{const o=this.getOrInitializeService({instanceIdentifier:s});r.resolve(o)}catch{}}}}clearInstance(t=me){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...t.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=me){return this.instances.has(t)}getOptions(t=me){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:e});for(const[o,a]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(o);r===c&&a.resolve(s)}return s}onInit(t,e){var r;const s=this.normalizeInstanceIdentifier(e),o=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;o.add(t),this.onInitCallbacks.set(s,o);const a=this.instances.get(s);return a&&t(a,s),()=>{o.delete(t)}}invokeOnInitCallbacks(t,e){const r=this.onInitCallbacks.get(e);if(r)for(const s of r)try{s(t,e)}catch{}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Vl(t),options:e}),this.instances.set(t,r),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=me){return this.component?this.component.multipleInstances?t:me:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Vl(n){return n===me?void 0:n}function Dl(n){return n.instantiationMode==="EAGER"}/**
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
 */class xl{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new bl(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var j;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(j||(j={}));const kl={debug:j.DEBUG,verbose:j.VERBOSE,info:j.INFO,warn:j.WARN,error:j.ERROR,silent:j.SILENT},Nl=j.INFO,Ml={[j.DEBUG]:"log",[j.VERBOSE]:"log",[j.INFO]:"info",[j.WARN]:"warn",[j.ERROR]:"error"},Ol=(n,t,...e)=>{if(t<n.logLevel)return;const r=new Date().toISOString(),s=Ml[t];if(s)console[s](`[${r}]  ${n.name}:`,...e);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Ua{constructor(t){this.name=t,this._logLevel=Nl,this._logHandler=Ol,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in j))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?kl[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,j.DEBUG,...t),this._logHandler(this,j.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,j.VERBOSE,...t),this._logHandler(this,j.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,j.INFO,...t),this._logHandler(this,j.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,j.WARN,...t),this._logHandler(this,j.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,j.ERROR,...t),this._logHandler(this,j.ERROR,...t)}}const Ll=(n,t)=>t.some(e=>n instanceof e);let Oo,Lo;function Fl(){return Oo||(Oo=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Bl(){return Lo||(Lo=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const qa=new WeakMap,Ss=new WeakMap,ja=new WeakMap,gs=new WeakMap,Ws=new WeakMap;function Ul(n){const t=new Promise((e,r)=>{const s=()=>{n.removeEventListener("success",o),n.removeEventListener("error",a)},o=()=>{e(Zt(n.result)),s()},a=()=>{r(n.error),s()};n.addEventListener("success",o),n.addEventListener("error",a)});return t.then(e=>{e instanceof IDBCursor&&qa.set(e,n)}).catch(()=>{}),Ws.set(t,n),t}function ql(n){if(Ss.has(n))return;const t=new Promise((e,r)=>{const s=()=>{n.removeEventListener("complete",o),n.removeEventListener("error",a),n.removeEventListener("abort",a)},o=()=>{e(),s()},a=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",o),n.addEventListener("error",a),n.addEventListener("abort",a)});Ss.set(n,t)}let Cs={get(n,t,e){if(n instanceof IDBTransaction){if(t==="done")return Ss.get(n);if(t==="objectStoreNames")return n.objectStoreNames||ja.get(n);if(t==="store")return e.objectStoreNames[1]?void 0:e.objectStore(e.objectStoreNames[0])}return Zt(n[t])},set(n,t,e){return n[t]=e,!0},has(n,t){return n instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in n}};function jl(n){Cs=n(Cs)}function zl(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...e){const r=n.call(_s(this),t,...e);return ja.set(r,t.sort?t.sort():[t]),Zt(r)}:Bl().includes(n)?function(...t){return n.apply(_s(this),t),Zt(qa.get(this))}:function(...t){return Zt(n.apply(_s(this),t))}}function $l(n){return typeof n=="function"?zl(n):(n instanceof IDBTransaction&&ql(n),Ll(n,Fl())?new Proxy(n,Cs):n)}function Zt(n){if(n instanceof IDBRequest)return Ul(n);if(gs.has(n))return gs.get(n);const t=$l(n);return t!==n&&(gs.set(n,t),Ws.set(t,n)),t}const _s=n=>Ws.get(n);function Gl(n,t,{blocked:e,upgrade:r,blocking:s,terminated:o}={}){const a=indexedDB.open(n,t),c=Zt(a);return r&&a.addEventListener("upgradeneeded",h=>{r(Zt(a.result),h.oldVersion,h.newVersion,Zt(a.transaction),h)}),e&&a.addEventListener("blocked",h=>e(h.oldVersion,h.newVersion,h)),c.then(h=>{o&&h.addEventListener("close",()=>o()),s&&h.addEventListener("versionchange",f=>s(f.oldVersion,f.newVersion,f))}).catch(()=>{}),c}const Kl=["get","getKey","getAll","getAllKeys","count"],Hl=["put","add","delete","clear"],ys=new Map;function Fo(n,t){if(!(n instanceof IDBDatabase&&!(t in n)&&typeof t=="string"))return;if(ys.get(t))return ys.get(t);const e=t.replace(/FromIndex$/,""),r=t!==e,s=Hl.includes(e);if(!(e in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Kl.includes(e)))return;const o=async function(a,...c){const h=this.transaction(a,s?"readwrite":"readonly");let f=h.store;return r&&(f=f.index(c.shift())),(await Promise.all([f[e](...c),s&&h.done]))[0]};return ys.set(t,o),o}jl(n=>({...n,get:(t,e,r)=>Fo(t,e)||n.get(t,e,r),has:(t,e)=>!!Fo(t,e)||n.has(t,e)}));/**
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
 */class Ql{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(Wl(e)){const r=e.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(e=>e).join(" ")}}function Wl(n){const t=n.getComponent();return(t==null?void 0:t.type)==="VERSION"}const Ps="@firebase/app",Bo="0.10.17";/**
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
 */const zt=new Ua("@firebase/app"),Xl="@firebase/app-compat",Yl="@firebase/analytics-compat",Jl="@firebase/analytics",Zl="@firebase/app-check-compat",th="@firebase/app-check",eh="@firebase/auth",nh="@firebase/auth-compat",rh="@firebase/database",sh="@firebase/data-connect",ih="@firebase/database-compat",oh="@firebase/functions",ah="@firebase/functions-compat",uh="@firebase/installations",ch="@firebase/installations-compat",lh="@firebase/messaging",hh="@firebase/messaging-compat",dh="@firebase/performance",fh="@firebase/performance-compat",mh="@firebase/remote-config",ph="@firebase/remote-config-compat",gh="@firebase/storage",_h="@firebase/storage-compat",yh="@firebase/firestore",Eh="@firebase/vertexai",vh="@firebase/firestore-compat",Th="firebase",Ih="11.1.0";/**
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
 */const bs="[DEFAULT]",wh={[Ps]:"fire-core",[Xl]:"fire-core-compat",[Jl]:"fire-analytics",[Yl]:"fire-analytics-compat",[th]:"fire-app-check",[Zl]:"fire-app-check-compat",[eh]:"fire-auth",[nh]:"fire-auth-compat",[rh]:"fire-rtdb",[sh]:"fire-data-connect",[ih]:"fire-rtdb-compat",[oh]:"fire-fn",[ah]:"fire-fn-compat",[uh]:"fire-iid",[ch]:"fire-iid-compat",[lh]:"fire-fcm",[hh]:"fire-fcm-compat",[dh]:"fire-perf",[fh]:"fire-perf-compat",[mh]:"fire-rc",[ph]:"fire-rc-compat",[gh]:"fire-gcs",[_h]:"fire-gcs-compat",[yh]:"fire-fst",[vh]:"fire-fst-compat",[Eh]:"fire-vertex","fire-js":"fire-js",[Th]:"fire-js-all"};/**
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
 */const ur=new Map,Ah=new Map,Vs=new Map;function Uo(n,t){try{n.container.addComponent(t)}catch(e){zt.debug(`Component ${t.name} failed to register with FirebaseApp ${n.name}`,e)}}function cr(n){const t=n.name;if(Vs.has(t))return zt.debug(`There were multiple attempts to register component ${t}.`),!1;Vs.set(t,n);for(const e of ur.values())Uo(e,n);for(const e of Ah.values())Uo(e,n);return!0}function Rh(n,t){const e=n.container.getProvider("heartbeat").getImmediate({optional:!0});return e&&e.triggerHeartbeat(),n.container.getProvider(t)}/**
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
 */const Sh={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},te=new Ba("app","Firebase",Sh);/**
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
 */class Ch{constructor(t,e,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new yn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw te.create("app-deleted",{appName:this._name})}}/**
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
 */const Ph=Ih;function za(n,t={}){let e=n;typeof t!="object"&&(t={name:t});const r=Object.assign({name:bs,automaticDataCollectionEnabled:!1},t),s=r.name;if(typeof s!="string"||!s)throw te.create("bad-app-name",{appName:String(s)});if(e||(e=Fa()),!e)throw te.create("no-options");const o=ur.get(s);if(o){if(Rs(e,o.options)&&Rs(r,o.config))return o;throw te.create("duplicate-app",{appName:s})}const a=new xl(s);for(const h of Vs.values())a.addComponent(h);const c=new Ch(e,r,a);return ur.set(s,c),c}function bh(n=bs){const t=ur.get(n);if(!t&&n===bs&&Fa())return za();if(!t)throw te.create("no-app",{appName:n});return t}function Ve(n,t,e){var r;let s=(r=wh[n])!==null&&r!==void 0?r:n;e&&(s+=`-${e}`);const o=s.match(/\s|\//),a=t.match(/\s|\//);if(o||a){const c=[`Unable to register library "${s}" with version "${t}":`];o&&c.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&a&&c.push("and"),a&&c.push(`version name "${t}" contains illegal characters (whitespace or "/")`),zt.warn(c.join(" "));return}cr(new yn(`${s}-version`,()=>({library:s,version:t}),"VERSION"))}/**
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
 */const Vh="firebase-heartbeat-database",Dh=1,En="firebase-heartbeat-store";let Es=null;function $a(){return Es||(Es=Gl(Vh,Dh,{upgrade:(n,t)=>{switch(t){case 0:try{n.createObjectStore(En)}catch(e){console.warn(e)}}}}).catch(n=>{throw te.create("idb-open",{originalErrorMessage:n.message})})),Es}async function xh(n){try{const e=(await $a()).transaction(En),r=await e.objectStore(En).get(Ga(n));return await e.done,r}catch(t){if(t instanceof Be)zt.warn(t.message);else{const e=te.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});zt.warn(e.message)}}}async function qo(n,t){try{const r=(await $a()).transaction(En,"readwrite");await r.objectStore(En).put(t,Ga(n)),await r.done}catch(e){if(e instanceof Be)zt.warn(e.message);else{const r=te.create("idb-set",{originalErrorMessage:e==null?void 0:e.message});zt.warn(r.message)}}}function Ga(n){return`${n.name}!${n.options.appId}`}/**
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
 */const kh=1024,Nh=30*24*60*60*1e3;class Mh{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new Lh(e),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,e;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=jo();return((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(a=>a.date===o)?void 0:(this._heartbeatsCache.heartbeats.push({date:o,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(a=>{const c=new Date(a.date).valueOf();return Date.now()-c<=Nh}),this._storage.overwrite(this._heartbeatsCache))}catch(r){zt.warn(r)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=jo(),{heartbeatsToSend:r,unsentEntries:s}=Oh(this._heartbeatsCache.heartbeats),o=ar(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(e){return zt.warn(e),""}}}function jo(){return new Date().toISOString().substring(0,10)}function Oh(n,t=kh){const e=[];let r=n.slice();for(const s of n){const o=e.find(a=>a.agent===s.agent);if(o){if(o.dates.push(s.date),zo(e)>t){o.dates.pop();break}}else if(e.push({agent:s.agent,dates:[s.date]}),zo(e)>t){e.pop();break}r=r.slice(1)}return{heartbeatsToSend:e,unsentEntries:r}}class Lh{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Al()?Rl().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const e=await xh(this.app);return e!=null&&e.heartbeats?e:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var e;if(await this._canUseIndexedDBPromise){const s=await this.read();return qo(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:s.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var e;if(await this._canUseIndexedDBPromise){const s=await this.read();return qo(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...t.heartbeats]})}else return}}function zo(n){return ar(JSON.stringify({version:2,heartbeats:n})).length}/**
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
 */function Fh(n){cr(new yn("platform-logger",t=>new Ql(t),"PRIVATE")),cr(new yn("heartbeat",t=>new Mh(t),"PRIVATE")),Ve(Ps,Bo,n),Ve(Ps,Bo,"esm2017"),Ve("fire-js","")}Fh("");var Bh="firebase",Uh="11.1.0";/**
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
 */Ve(Bh,Uh,"app");var $o=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ge,Ka;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(T,p){function _(){}_.prototype=p.prototype,T.D=p.prototype,T.prototype=new _,T.prototype.constructor=T,T.C=function(y,v,w){for(var g=Array(arguments.length-2),Bt=2;Bt<arguments.length;Bt++)g[Bt-2]=arguments[Bt];return p.prototype[v].apply(y,g)}}function e(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}t(r,e),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(T,p,_){_||(_=0);var y=Array(16);if(typeof p=="string")for(var v=0;16>v;++v)y[v]=p.charCodeAt(_++)|p.charCodeAt(_++)<<8|p.charCodeAt(_++)<<16|p.charCodeAt(_++)<<24;else for(v=0;16>v;++v)y[v]=p[_++]|p[_++]<<8|p[_++]<<16|p[_++]<<24;p=T.g[0],_=T.g[1],v=T.g[2];var w=T.g[3],g=p+(w^_&(v^w))+y[0]+3614090360&4294967295;p=_+(g<<7&4294967295|g>>>25),g=w+(v^p&(_^v))+y[1]+3905402710&4294967295,w=p+(g<<12&4294967295|g>>>20),g=v+(_^w&(p^_))+y[2]+606105819&4294967295,v=w+(g<<17&4294967295|g>>>15),g=_+(p^v&(w^p))+y[3]+3250441966&4294967295,_=v+(g<<22&4294967295|g>>>10),g=p+(w^_&(v^w))+y[4]+4118548399&4294967295,p=_+(g<<7&4294967295|g>>>25),g=w+(v^p&(_^v))+y[5]+1200080426&4294967295,w=p+(g<<12&4294967295|g>>>20),g=v+(_^w&(p^_))+y[6]+2821735955&4294967295,v=w+(g<<17&4294967295|g>>>15),g=_+(p^v&(w^p))+y[7]+4249261313&4294967295,_=v+(g<<22&4294967295|g>>>10),g=p+(w^_&(v^w))+y[8]+1770035416&4294967295,p=_+(g<<7&4294967295|g>>>25),g=w+(v^p&(_^v))+y[9]+2336552879&4294967295,w=p+(g<<12&4294967295|g>>>20),g=v+(_^w&(p^_))+y[10]+4294925233&4294967295,v=w+(g<<17&4294967295|g>>>15),g=_+(p^v&(w^p))+y[11]+2304563134&4294967295,_=v+(g<<22&4294967295|g>>>10),g=p+(w^_&(v^w))+y[12]+1804603682&4294967295,p=_+(g<<7&4294967295|g>>>25),g=w+(v^p&(_^v))+y[13]+4254626195&4294967295,w=p+(g<<12&4294967295|g>>>20),g=v+(_^w&(p^_))+y[14]+2792965006&4294967295,v=w+(g<<17&4294967295|g>>>15),g=_+(p^v&(w^p))+y[15]+1236535329&4294967295,_=v+(g<<22&4294967295|g>>>10),g=p+(v^w&(_^v))+y[1]+4129170786&4294967295,p=_+(g<<5&4294967295|g>>>27),g=w+(_^v&(p^_))+y[6]+3225465664&4294967295,w=p+(g<<9&4294967295|g>>>23),g=v+(p^_&(w^p))+y[11]+643717713&4294967295,v=w+(g<<14&4294967295|g>>>18),g=_+(w^p&(v^w))+y[0]+3921069994&4294967295,_=v+(g<<20&4294967295|g>>>12),g=p+(v^w&(_^v))+y[5]+3593408605&4294967295,p=_+(g<<5&4294967295|g>>>27),g=w+(_^v&(p^_))+y[10]+38016083&4294967295,w=p+(g<<9&4294967295|g>>>23),g=v+(p^_&(w^p))+y[15]+3634488961&4294967295,v=w+(g<<14&4294967295|g>>>18),g=_+(w^p&(v^w))+y[4]+3889429448&4294967295,_=v+(g<<20&4294967295|g>>>12),g=p+(v^w&(_^v))+y[9]+568446438&4294967295,p=_+(g<<5&4294967295|g>>>27),g=w+(_^v&(p^_))+y[14]+3275163606&4294967295,w=p+(g<<9&4294967295|g>>>23),g=v+(p^_&(w^p))+y[3]+4107603335&4294967295,v=w+(g<<14&4294967295|g>>>18),g=_+(w^p&(v^w))+y[8]+1163531501&4294967295,_=v+(g<<20&4294967295|g>>>12),g=p+(v^w&(_^v))+y[13]+2850285829&4294967295,p=_+(g<<5&4294967295|g>>>27),g=w+(_^v&(p^_))+y[2]+4243563512&4294967295,w=p+(g<<9&4294967295|g>>>23),g=v+(p^_&(w^p))+y[7]+1735328473&4294967295,v=w+(g<<14&4294967295|g>>>18),g=_+(w^p&(v^w))+y[12]+2368359562&4294967295,_=v+(g<<20&4294967295|g>>>12),g=p+(_^v^w)+y[5]+4294588738&4294967295,p=_+(g<<4&4294967295|g>>>28),g=w+(p^_^v)+y[8]+2272392833&4294967295,w=p+(g<<11&4294967295|g>>>21),g=v+(w^p^_)+y[11]+1839030562&4294967295,v=w+(g<<16&4294967295|g>>>16),g=_+(v^w^p)+y[14]+4259657740&4294967295,_=v+(g<<23&4294967295|g>>>9),g=p+(_^v^w)+y[1]+2763975236&4294967295,p=_+(g<<4&4294967295|g>>>28),g=w+(p^_^v)+y[4]+1272893353&4294967295,w=p+(g<<11&4294967295|g>>>21),g=v+(w^p^_)+y[7]+4139469664&4294967295,v=w+(g<<16&4294967295|g>>>16),g=_+(v^w^p)+y[10]+3200236656&4294967295,_=v+(g<<23&4294967295|g>>>9),g=p+(_^v^w)+y[13]+681279174&4294967295,p=_+(g<<4&4294967295|g>>>28),g=w+(p^_^v)+y[0]+3936430074&4294967295,w=p+(g<<11&4294967295|g>>>21),g=v+(w^p^_)+y[3]+3572445317&4294967295,v=w+(g<<16&4294967295|g>>>16),g=_+(v^w^p)+y[6]+76029189&4294967295,_=v+(g<<23&4294967295|g>>>9),g=p+(_^v^w)+y[9]+3654602809&4294967295,p=_+(g<<4&4294967295|g>>>28),g=w+(p^_^v)+y[12]+3873151461&4294967295,w=p+(g<<11&4294967295|g>>>21),g=v+(w^p^_)+y[15]+530742520&4294967295,v=w+(g<<16&4294967295|g>>>16),g=_+(v^w^p)+y[2]+3299628645&4294967295,_=v+(g<<23&4294967295|g>>>9),g=p+(v^(_|~w))+y[0]+4096336452&4294967295,p=_+(g<<6&4294967295|g>>>26),g=w+(_^(p|~v))+y[7]+1126891415&4294967295,w=p+(g<<10&4294967295|g>>>22),g=v+(p^(w|~_))+y[14]+2878612391&4294967295,v=w+(g<<15&4294967295|g>>>17),g=_+(w^(v|~p))+y[5]+4237533241&4294967295,_=v+(g<<21&4294967295|g>>>11),g=p+(v^(_|~w))+y[12]+1700485571&4294967295,p=_+(g<<6&4294967295|g>>>26),g=w+(_^(p|~v))+y[3]+2399980690&4294967295,w=p+(g<<10&4294967295|g>>>22),g=v+(p^(w|~_))+y[10]+4293915773&4294967295,v=w+(g<<15&4294967295|g>>>17),g=_+(w^(v|~p))+y[1]+2240044497&4294967295,_=v+(g<<21&4294967295|g>>>11),g=p+(v^(_|~w))+y[8]+1873313359&4294967295,p=_+(g<<6&4294967295|g>>>26),g=w+(_^(p|~v))+y[15]+4264355552&4294967295,w=p+(g<<10&4294967295|g>>>22),g=v+(p^(w|~_))+y[6]+2734768916&4294967295,v=w+(g<<15&4294967295|g>>>17),g=_+(w^(v|~p))+y[13]+1309151649&4294967295,_=v+(g<<21&4294967295|g>>>11),g=p+(v^(_|~w))+y[4]+4149444226&4294967295,p=_+(g<<6&4294967295|g>>>26),g=w+(_^(p|~v))+y[11]+3174756917&4294967295,w=p+(g<<10&4294967295|g>>>22),g=v+(p^(w|~_))+y[2]+718787259&4294967295,v=w+(g<<15&4294967295|g>>>17),g=_+(w^(v|~p))+y[9]+3951481745&4294967295,T.g[0]=T.g[0]+p&4294967295,T.g[1]=T.g[1]+(v+(g<<21&4294967295|g>>>11))&4294967295,T.g[2]=T.g[2]+v&4294967295,T.g[3]=T.g[3]+w&4294967295}r.prototype.u=function(T,p){p===void 0&&(p=T.length);for(var _=p-this.blockSize,y=this.B,v=this.h,w=0;w<p;){if(v==0)for(;w<=_;)s(this,T,w),w+=this.blockSize;if(typeof T=="string"){for(;w<p;)if(y[v++]=T.charCodeAt(w++),v==this.blockSize){s(this,y),v=0;break}}else for(;w<p;)if(y[v++]=T[w++],v==this.blockSize){s(this,y),v=0;break}}this.h=v,this.o+=p},r.prototype.v=function(){var T=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);T[0]=128;for(var p=1;p<T.length-8;++p)T[p]=0;var _=8*this.o;for(p=T.length-8;p<T.length;++p)T[p]=_&255,_/=256;for(this.u(T),T=Array(16),p=_=0;4>p;++p)for(var y=0;32>y;y+=8)T[_++]=this.g[p]>>>y&255;return T};function o(T,p){var _=c;return Object.prototype.hasOwnProperty.call(_,T)?_[T]:_[T]=p(T)}function a(T,p){this.h=p;for(var _=[],y=!0,v=T.length-1;0<=v;v--){var w=T[v]|0;y&&w==p||(_[v]=w,y=!1)}this.g=_}var c={};function h(T){return-128<=T&&128>T?o(T,function(p){return new a([p|0],0>p?-1:0)}):new a([T|0],0>T?-1:0)}function f(T){if(isNaN(T)||!isFinite(T))return E;if(0>T)return V(f(-T));for(var p=[],_=1,y=0;T>=_;y++)p[y]=T/_|0,_*=4294967296;return new a(p,0)}function m(T,p){if(T.length==0)throw Error("number format error: empty string");if(p=p||10,2>p||36<p)throw Error("radix out of range: "+p);if(T.charAt(0)=="-")return V(m(T.substring(1),p));if(0<=T.indexOf("-"))throw Error('number format error: interior "-" character');for(var _=f(Math.pow(p,8)),y=E,v=0;v<T.length;v+=8){var w=Math.min(8,T.length-v),g=parseInt(T.substring(v,v+w),p);8>w?(w=f(Math.pow(p,w)),y=y.j(w).add(f(g))):(y=y.j(_),y=y.add(f(g)))}return y}var E=h(0),A=h(1),C=h(16777216);n=a.prototype,n.m=function(){if(k(this))return-V(this).m();for(var T=0,p=1,_=0;_<this.g.length;_++){var y=this.i(_);T+=(0<=y?y:4294967296+y)*p,p*=4294967296}return T},n.toString=function(T){if(T=T||10,2>T||36<T)throw Error("radix out of range: "+T);if(D(this))return"0";if(k(this))return"-"+V(this).toString(T);for(var p=f(Math.pow(T,6)),_=this,y="";;){var v=W(_,p).g;_=z(_,v.j(p));var w=((0<_.g.length?_.g[0]:_.h)>>>0).toString(T);if(_=v,D(_))return w+y;for(;6>w.length;)w="0"+w;y=w+y}},n.i=function(T){return 0>T?0:T<this.g.length?this.g[T]:this.h};function D(T){if(T.h!=0)return!1;for(var p=0;p<T.g.length;p++)if(T.g[p]!=0)return!1;return!0}function k(T){return T.h==-1}n.l=function(T){return T=z(this,T),k(T)?-1:D(T)?0:1};function V(T){for(var p=T.g.length,_=[],y=0;y<p;y++)_[y]=~T.g[y];return new a(_,~T.h).add(A)}n.abs=function(){return k(this)?V(this):this},n.add=function(T){for(var p=Math.max(this.g.length,T.g.length),_=[],y=0,v=0;v<=p;v++){var w=y+(this.i(v)&65535)+(T.i(v)&65535),g=(w>>>16)+(this.i(v)>>>16)+(T.i(v)>>>16);y=g>>>16,w&=65535,g&=65535,_[v]=g<<16|w}return new a(_,_[_.length-1]&-2147483648?-1:0)};function z(T,p){return T.add(V(p))}n.j=function(T){if(D(this)||D(T))return E;if(k(this))return k(T)?V(this).j(V(T)):V(V(this).j(T));if(k(T))return V(this.j(V(T)));if(0>this.l(C)&&0>T.l(C))return f(this.m()*T.m());for(var p=this.g.length+T.g.length,_=[],y=0;y<2*p;y++)_[y]=0;for(y=0;y<this.g.length;y++)for(var v=0;v<T.g.length;v++){var w=this.i(y)>>>16,g=this.i(y)&65535,Bt=T.i(v)>>>16,$e=T.i(v)&65535;_[2*y+2*v]+=g*$e,G(_,2*y+2*v),_[2*y+2*v+1]+=w*$e,G(_,2*y+2*v+1),_[2*y+2*v+1]+=g*Bt,G(_,2*y+2*v+1),_[2*y+2*v+2]+=w*Bt,G(_,2*y+2*v+2)}for(y=0;y<p;y++)_[y]=_[2*y+1]<<16|_[2*y];for(y=p;y<2*p;y++)_[y]=0;return new a(_,0)};function G(T,p){for(;(T[p]&65535)!=T[p];)T[p+1]+=T[p]>>>16,T[p]&=65535,p++}function K(T,p){this.g=T,this.h=p}function W(T,p){if(D(p))throw Error("division by zero");if(D(T))return new K(E,E);if(k(T))return p=W(V(T),p),new K(V(p.g),V(p.h));if(k(p))return p=W(T,V(p)),new K(V(p.g),p.h);if(30<T.g.length){if(k(T)||k(p))throw Error("slowDivide_ only works with positive integers.");for(var _=A,y=p;0>=y.l(T);)_=yt(_),y=yt(y);var v=tt(_,1),w=tt(y,1);for(y=tt(y,2),_=tt(_,2);!D(y);){var g=w.add(y);0>=g.l(T)&&(v=v.add(_),w=g),y=tt(y,1),_=tt(_,1)}return p=z(T,v.j(p)),new K(v,p)}for(v=E;0<=T.l(p);){for(_=Math.max(1,Math.floor(T.m()/p.m())),y=Math.ceil(Math.log(_)/Math.LN2),y=48>=y?1:Math.pow(2,y-48),w=f(_),g=w.j(p);k(g)||0<g.l(T);)_-=y,w=f(_),g=w.j(p);D(w)&&(w=A),v=v.add(w),T=z(T,g)}return new K(v,T)}n.A=function(T){return W(this,T).h},n.and=function(T){for(var p=Math.max(this.g.length,T.g.length),_=[],y=0;y<p;y++)_[y]=this.i(y)&T.i(y);return new a(_,this.h&T.h)},n.or=function(T){for(var p=Math.max(this.g.length,T.g.length),_=[],y=0;y<p;y++)_[y]=this.i(y)|T.i(y);return new a(_,this.h|T.h)},n.xor=function(T){for(var p=Math.max(this.g.length,T.g.length),_=[],y=0;y<p;y++)_[y]=this.i(y)^T.i(y);return new a(_,this.h^T.h)};function yt(T){for(var p=T.g.length+1,_=[],y=0;y<p;y++)_[y]=T.i(y)<<1|T.i(y-1)>>>31;return new a(_,T.h)}function tt(T,p){var _=p>>5;p%=32;for(var y=T.g.length-_,v=[],w=0;w<y;w++)v[w]=0<p?T.i(w+_)>>>p|T.i(w+_+1)<<32-p:T.i(w+_);return new a(v,T.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,Ka=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=f,a.fromString=m,ge=a}).apply(typeof $o<"u"?$o:typeof self<"u"?self:typeof window<"u"?window:{});var Wn=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Ha,un,Qa,tr,Ds,Wa,Xa,Ya;(function(){var n,t=typeof Object.defineProperties=="function"?Object.defineProperty:function(i,u,l){return i==Array.prototype||i==Object.prototype||(i[u]=l.value),i};function e(i){i=[typeof globalThis=="object"&&globalThis,i,typeof window=="object"&&window,typeof self=="object"&&self,typeof Wn=="object"&&Wn];for(var u=0;u<i.length;++u){var l=i[u];if(l&&l.Math==Math)return l}throw Error("Cannot find global object")}var r=e(this);function s(i,u){if(u)t:{var l=r;i=i.split(".");for(var d=0;d<i.length-1;d++){var I=i[d];if(!(I in l))break t;l=l[I]}i=i[i.length-1],d=l[i],u=u(d),u!=d&&u!=null&&t(l,i,{configurable:!0,writable:!0,value:u})}}function o(i,u){i instanceof String&&(i+="");var l=0,d=!1,I={next:function(){if(!d&&l<i.length){var R=l++;return{value:u(R,i[R]),done:!1}}return d=!0,{done:!0,value:void 0}}};return I[Symbol.iterator]=function(){return I},I}s("Array.prototype.values",function(i){return i||function(){return o(this,function(u,l){return l})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},c=this||self;function h(i){var u=typeof i;return u=u!="object"?u:i?Array.isArray(i)?"array":u:"null",u=="array"||u=="object"&&typeof i.length=="number"}function f(i){var u=typeof i;return u=="object"&&i!=null||u=="function"}function m(i,u,l){return i.call.apply(i.bind,arguments)}function E(i,u,l){if(!i)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var I=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(I,d),i.apply(u,I)}}return function(){return i.apply(u,arguments)}}function A(i,u,l){return A=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?m:E,A.apply(null,arguments)}function C(i,u){var l=Array.prototype.slice.call(arguments,1);return function(){var d=l.slice();return d.push.apply(d,arguments),i.apply(this,d)}}function D(i,u){function l(){}l.prototype=u.prototype,i.aa=u.prototype,i.prototype=new l,i.prototype.constructor=i,i.Qb=function(d,I,R){for(var b=Array(arguments.length-2),Q=2;Q<arguments.length;Q++)b[Q-2]=arguments[Q];return u.prototype[I].apply(d,b)}}function k(i){const u=i.length;if(0<u){const l=Array(u);for(let d=0;d<u;d++)l[d]=i[d];return l}return[]}function V(i,u){for(let l=1;l<arguments.length;l++){const d=arguments[l];if(h(d)){const I=i.length||0,R=d.length||0;i.length=I+R;for(let b=0;b<R;b++)i[I+b]=d[b]}else i.push(d)}}class z{constructor(u,l){this.i=u,this.j=l,this.h=0,this.g=null}get(){let u;return 0<this.h?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function G(i){return/^[\s\xa0]*$/.test(i)}function K(){var i=c.navigator;return i&&(i=i.userAgent)?i:""}function W(i){return W[" "](i),i}W[" "]=function(){};var yt=K().indexOf("Gecko")!=-1&&!(K().toLowerCase().indexOf("webkit")!=-1&&K().indexOf("Edge")==-1)&&!(K().indexOf("Trident")!=-1||K().indexOf("MSIE")!=-1)&&K().indexOf("Edge")==-1;function tt(i,u,l){for(const d in i)u.call(l,i[d],d,i)}function T(i,u){for(const l in i)u.call(void 0,i[l],l,i)}function p(i){const u={};for(const l in i)u[l]=i[l];return u}const _="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function y(i,u){let l,d;for(let I=1;I<arguments.length;I++){d=arguments[I];for(l in d)i[l]=d[l];for(let R=0;R<_.length;R++)l=_[R],Object.prototype.hasOwnProperty.call(d,l)&&(i[l]=d[l])}}function v(i){var u=1;i=i.split(":");const l=[];for(;0<u&&i.length;)l.push(i.shift()),u--;return i.length&&l.push(i.join(":")),l}function w(i){c.setTimeout(()=>{throw i},0)}function g(){var i=Kr;let u=null;return i.g&&(u=i.g,i.g=i.g.next,i.g||(i.h=null),u.next=null),u}class Bt{constructor(){this.h=this.g=null}add(u,l){const d=$e.get();d.set(u,l),this.h?this.h.next=d:this.g=d,this.h=d}}var $e=new z(()=>new Pc,i=>i.reset());class Pc{constructor(){this.next=this.g=this.h=null}set(u,l){this.h=u,this.g=l,this.next=null}reset(){this.next=this.g=this.h=null}}let Ge,Ke=!1,Kr=new Bt,ki=()=>{const i=c.Promise.resolve(void 0);Ge=()=>{i.then(bc)}};var bc=()=>{for(var i;i=g();){try{i.h.call(i.g)}catch(l){w(l)}var u=$e;u.j(i),100>u.h&&(u.h++,i.next=u.g,u.g=i)}Ke=!1};function Kt(){this.s=this.s,this.C=this.C}Kt.prototype.s=!1,Kt.prototype.ma=function(){this.s||(this.s=!0,this.N())},Kt.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ht(i,u){this.type=i,this.g=this.target=u,this.defaultPrevented=!1}ht.prototype.h=function(){this.defaultPrevented=!0};var Vc=function(){if(!c.addEventListener||!Object.defineProperty)return!1;var i=!1,u=Object.defineProperty({},"passive",{get:function(){i=!0}});try{const l=()=>{};c.addEventListener("test",l,u),c.removeEventListener("test",l,u)}catch{}return i}();function He(i,u){if(ht.call(this,i?i.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,i){var l=this.type=i.type,d=i.changedTouches&&i.changedTouches.length?i.changedTouches[0]:null;if(this.target=i.target||i.srcElement,this.g=u,u=i.relatedTarget){if(yt){t:{try{W(u.nodeName);var I=!0;break t}catch{}I=!1}I||(u=null)}}else l=="mouseover"?u=i.fromElement:l=="mouseout"&&(u=i.toElement);this.relatedTarget=u,d?(this.clientX=d.clientX!==void 0?d.clientX:d.pageX,this.clientY=d.clientY!==void 0?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||0):(this.clientX=i.clientX!==void 0?i.clientX:i.pageX,this.clientY=i.clientY!==void 0?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0),this.button=i.button,this.key=i.key||"",this.ctrlKey=i.ctrlKey,this.altKey=i.altKey,this.shiftKey=i.shiftKey,this.metaKey=i.metaKey,this.pointerId=i.pointerId||0,this.pointerType=typeof i.pointerType=="string"?i.pointerType:Dc[i.pointerType]||"",this.state=i.state,this.i=i,i.defaultPrevented&&He.aa.h.call(this)}}D(He,ht);var Dc={2:"touch",3:"pen",4:"mouse"};He.prototype.h=function(){He.aa.h.call(this);var i=this.i;i.preventDefault?i.preventDefault():i.returnValue=!1};var Vn="closure_listenable_"+(1e6*Math.random()|0),xc=0;function kc(i,u,l,d,I){this.listener=i,this.proxy=null,this.src=u,this.type=l,this.capture=!!d,this.ha=I,this.key=++xc,this.da=this.fa=!1}function Dn(i){i.da=!0,i.listener=null,i.proxy=null,i.src=null,i.ha=null}function xn(i){this.src=i,this.g={},this.h=0}xn.prototype.add=function(i,u,l,d,I){var R=i.toString();i=this.g[R],i||(i=this.g[R]=[],this.h++);var b=Qr(i,u,d,I);return-1<b?(u=i[b],l||(u.fa=!1)):(u=new kc(u,this.src,R,!!d,I),u.fa=l,i.push(u)),u};function Hr(i,u){var l=u.type;if(l in i.g){var d=i.g[l],I=Array.prototype.indexOf.call(d,u,void 0),R;(R=0<=I)&&Array.prototype.splice.call(d,I,1),R&&(Dn(u),i.g[l].length==0&&(delete i.g[l],i.h--))}}function Qr(i,u,l,d){for(var I=0;I<i.length;++I){var R=i[I];if(!R.da&&R.listener==u&&R.capture==!!l&&R.ha==d)return I}return-1}var Wr="closure_lm_"+(1e6*Math.random()|0),Xr={};function Ni(i,u,l,d,I){if(Array.isArray(u)){for(var R=0;R<u.length;R++)Ni(i,u[R],l,d,I);return null}return l=Li(l),i&&i[Vn]?i.K(u,l,f(d)?!!d.capture:!!d,I):Nc(i,u,l,!1,d,I)}function Nc(i,u,l,d,I,R){if(!u)throw Error("Invalid event type");var b=f(I)?!!I.capture:!!I,Q=Jr(i);if(Q||(i[Wr]=Q=new xn(i)),l=Q.add(u,l,d,b,R),l.proxy)return l;if(d=Mc(),l.proxy=d,d.src=i,d.listener=l,i.addEventListener)Vc||(I=b),I===void 0&&(I=!1),i.addEventListener(u.toString(),d,I);else if(i.attachEvent)i.attachEvent(Oi(u.toString()),d);else if(i.addListener&&i.removeListener)i.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");return l}function Mc(){function i(l){return u.call(i.src,i.listener,l)}const u=Oc;return i}function Mi(i,u,l,d,I){if(Array.isArray(u))for(var R=0;R<u.length;R++)Mi(i,u[R],l,d,I);else d=f(d)?!!d.capture:!!d,l=Li(l),i&&i[Vn]?(i=i.i,u=String(u).toString(),u in i.g&&(R=i.g[u],l=Qr(R,l,d,I),-1<l&&(Dn(R[l]),Array.prototype.splice.call(R,l,1),R.length==0&&(delete i.g[u],i.h--)))):i&&(i=Jr(i))&&(u=i.g[u.toString()],i=-1,u&&(i=Qr(u,l,d,I)),(l=-1<i?u[i]:null)&&Yr(l))}function Yr(i){if(typeof i!="number"&&i&&!i.da){var u=i.src;if(u&&u[Vn])Hr(u.i,i);else{var l=i.type,d=i.proxy;u.removeEventListener?u.removeEventListener(l,d,i.capture):u.detachEvent?u.detachEvent(Oi(l),d):u.addListener&&u.removeListener&&u.removeListener(d),(l=Jr(u))?(Hr(l,i),l.h==0&&(l.src=null,u[Wr]=null)):Dn(i)}}}function Oi(i){return i in Xr?Xr[i]:Xr[i]="on"+i}function Oc(i,u){if(i.da)i=!0;else{u=new He(u,this);var l=i.listener,d=i.ha||i.src;i.fa&&Yr(i),i=l.call(d,u)}return i}function Jr(i){return i=i[Wr],i instanceof xn?i:null}var Zr="__closure_events_fn_"+(1e9*Math.random()>>>0);function Li(i){return typeof i=="function"?i:(i[Zr]||(i[Zr]=function(u){return i.handleEvent(u)}),i[Zr])}function dt(){Kt.call(this),this.i=new xn(this),this.M=this,this.F=null}D(dt,Kt),dt.prototype[Vn]=!0,dt.prototype.removeEventListener=function(i,u,l,d){Mi(this,i,u,l,d)};function Et(i,u){var l,d=i.F;if(d)for(l=[];d;d=d.F)l.push(d);if(i=i.M,d=u.type||u,typeof u=="string")u=new ht(u,i);else if(u instanceof ht)u.target=u.target||i;else{var I=u;u=new ht(d,i),y(u,I)}if(I=!0,l)for(var R=l.length-1;0<=R;R--){var b=u.g=l[R];I=kn(b,d,!0,u)&&I}if(b=u.g=i,I=kn(b,d,!0,u)&&I,I=kn(b,d,!1,u)&&I,l)for(R=0;R<l.length;R++)b=u.g=l[R],I=kn(b,d,!1,u)&&I}dt.prototype.N=function(){if(dt.aa.N.call(this),this.i){var i=this.i,u;for(u in i.g){for(var l=i.g[u],d=0;d<l.length;d++)Dn(l[d]);delete i.g[u],i.h--}}this.F=null},dt.prototype.K=function(i,u,l,d){return this.i.add(String(i),u,!1,l,d)},dt.prototype.L=function(i,u,l,d){return this.i.add(String(i),u,!0,l,d)};function kn(i,u,l,d){if(u=i.i.g[String(u)],!u)return!0;u=u.concat();for(var I=!0,R=0;R<u.length;++R){var b=u[R];if(b&&!b.da&&b.capture==l){var Q=b.listener,at=b.ha||b.src;b.fa&&Hr(i.i,b),I=Q.call(at,d)!==!1&&I}}return I&&!d.defaultPrevented}function Fi(i,u,l){if(typeof i=="function")l&&(i=A(i,l));else if(i&&typeof i.handleEvent=="function")i=A(i.handleEvent,i);else throw Error("Invalid listener argument");return 2147483647<Number(u)?-1:c.setTimeout(i,u||0)}function Bi(i){i.g=Fi(()=>{i.g=null,i.i&&(i.i=!1,Bi(i))},i.l);const u=i.h;i.h=null,i.m.apply(null,u)}class Lc extends Kt{constructor(u,l){super(),this.m=u,this.l=l,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:Bi(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Qe(i){Kt.call(this),this.h=i,this.g={}}D(Qe,Kt);var Ui=[];function qi(i){tt(i.g,function(u,l){this.g.hasOwnProperty(l)&&Yr(u)},i),i.g={}}Qe.prototype.N=function(){Qe.aa.N.call(this),qi(this)},Qe.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var ts=c.JSON.stringify,Fc=c.JSON.parse,Bc=class{stringify(i){return c.JSON.stringify(i,void 0)}parse(i){return c.JSON.parse(i,void 0)}};function es(){}es.prototype.h=null;function ji(i){return i.h||(i.h=i.i())}function zi(){}var We={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function ns(){ht.call(this,"d")}D(ns,ht);function rs(){ht.call(this,"c")}D(rs,ht);var le={},$i=null;function Nn(){return $i=$i||new dt}le.La="serverreachability";function Gi(i){ht.call(this,le.La,i)}D(Gi,ht);function Xe(i){const u=Nn();Et(u,new Gi(u))}le.STAT_EVENT="statevent";function Ki(i,u){ht.call(this,le.STAT_EVENT,i),this.stat=u}D(Ki,ht);function vt(i){const u=Nn();Et(u,new Ki(u,i))}le.Ma="timingevent";function Hi(i,u){ht.call(this,le.Ma,i),this.size=u}D(Hi,ht);function Ye(i,u){if(typeof i!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){i()},u)}function Je(){this.g=!0}Je.prototype.xa=function(){this.g=!1};function Uc(i,u,l,d,I,R){i.info(function(){if(i.g)if(R)for(var b="",Q=R.split("&"),at=0;at<Q.length;at++){var $=Q[at].split("=");if(1<$.length){var ft=$[0];$=$[1];var mt=ft.split("_");b=2<=mt.length&&mt[1]=="type"?b+(ft+"="+$+"&"):b+(ft+"=redacted&")}}else b=null;else b=R;return"XMLHTTP REQ ("+d+") [attempt "+I+"]: "+u+`
`+l+`
`+b})}function qc(i,u,l,d,I,R,b){i.info(function(){return"XMLHTTP RESP ("+d+") [ attempt "+I+"]: "+u+`
`+l+`
`+R+" "+b})}function Ie(i,u,l,d){i.info(function(){return"XMLHTTP TEXT ("+u+"): "+zc(i,l)+(d?" "+d:"")})}function jc(i,u){i.info(function(){return"TIMEOUT: "+u})}Je.prototype.info=function(){};function zc(i,u){if(!i.g)return u;if(!u)return null;try{var l=JSON.parse(u);if(l){for(i=0;i<l.length;i++)if(Array.isArray(l[i])){var d=l[i];if(!(2>d.length)){var I=d[1];if(Array.isArray(I)&&!(1>I.length)){var R=I[0];if(R!="noop"&&R!="stop"&&R!="close")for(var b=1;b<I.length;b++)I[b]=""}}}}return ts(l)}catch{return u}}var Mn={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Qi={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},ss;function On(){}D(On,es),On.prototype.g=function(){return new XMLHttpRequest},On.prototype.i=function(){return{}},ss=new On;function Ht(i,u,l,d){this.j=i,this.i=u,this.l=l,this.R=d||1,this.U=new Qe(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Wi}function Wi(){this.i=null,this.g="",this.h=!1}var Xi={},is={};function os(i,u,l){i.L=1,i.v=Un(Ut(u)),i.m=l,i.P=!0,Yi(i,null)}function Yi(i,u){i.F=Date.now(),Ln(i),i.A=Ut(i.v);var l=i.A,d=i.R;Array.isArray(d)||(d=[String(d)]),ho(l.i,"t",d),i.C=0,l=i.j.J,i.h=new Wi,i.g=Vo(i.j,l?u:null,!i.m),0<i.O&&(i.M=new Lc(A(i.Y,i,i.g),i.O)),u=i.U,l=i.g,d=i.ca;var I="readystatechange";Array.isArray(I)||(I&&(Ui[0]=I.toString()),I=Ui);for(var R=0;R<I.length;R++){var b=Ni(l,I[R],d||u.handleEvent,!1,u.h||u);if(!b)break;u.g[b.key]=b}u=i.H?p(i.H):{},i.m?(i.u||(i.u="POST"),u["Content-Type"]="application/x-www-form-urlencoded",i.g.ea(i.A,i.u,i.m,u)):(i.u="GET",i.g.ea(i.A,i.u,null,u)),Xe(),Uc(i.i,i.u,i.A,i.l,i.R,i.m)}Ht.prototype.ca=function(i){i=i.target;const u=this.M;u&&qt(i)==3?u.j():this.Y(i)},Ht.prototype.Y=function(i){try{if(i==this.g)t:{const mt=qt(this.g);var u=this.g.Ba();const Re=this.g.Z();if(!(3>mt)&&(mt!=3||this.g&&(this.h.h||this.g.oa()||Eo(this.g)))){this.J||mt!=4||u==7||(u==8||0>=Re?Xe(3):Xe(2)),as(this);var l=this.g.Z();this.X=l;e:if(Ji(this)){var d=Eo(this.g);i="";var I=d.length,R=qt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){he(this),Ze(this);var b="";break e}this.h.i=new c.TextDecoder}for(u=0;u<I;u++)this.h.h=!0,i+=this.h.i.decode(d[u],{stream:!(R&&u==I-1)});d.length=0,this.h.g+=i,this.C=0,b=this.h.g}else b=this.g.oa();if(this.o=l==200,qc(this.i,this.u,this.A,this.l,this.R,mt,l),this.o){if(this.T&&!this.K){e:{if(this.g){var Q,at=this.g;if((Q=at.g?at.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!G(Q)){var $=Q;break e}}$=null}if(l=$)Ie(this.i,this.l,l,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,us(this,l);else{this.o=!1,this.s=3,vt(12),he(this),Ze(this);break t}}if(this.P){l=!0;let xt;for(;!this.J&&this.C<b.length;)if(xt=$c(this,b),xt==is){mt==4&&(this.s=4,vt(14),l=!1),Ie(this.i,this.l,null,"[Incomplete Response]");break}else if(xt==Xi){this.s=4,vt(15),Ie(this.i,this.l,b,"[Invalid Chunk]"),l=!1;break}else Ie(this.i,this.l,xt,null),us(this,xt);if(Ji(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),mt!=4||b.length!=0||this.h.h||(this.s=1,vt(16),l=!1),this.o=this.o&&l,!l)Ie(this.i,this.l,b,"[Invalid Chunked Response]"),he(this),Ze(this);else if(0<b.length&&!this.W){this.W=!0;var ft=this.j;ft.g==this&&ft.ba&&!ft.M&&(ft.j.info("Great, no buffering proxy detected. Bytes received: "+b.length),ms(ft),ft.M=!0,vt(11))}}else Ie(this.i,this.l,b,null),us(this,b);mt==4&&he(this),this.o&&!this.J&&(mt==4?So(this.j,this):(this.o=!1,Ln(this)))}else al(this.g),l==400&&0<b.indexOf("Unknown SID")?(this.s=3,vt(12)):(this.s=0,vt(13)),he(this),Ze(this)}}}catch{}finally{}};function Ji(i){return i.g?i.u=="GET"&&i.L!=2&&i.j.Ca:!1}function $c(i,u){var l=i.C,d=u.indexOf(`
`,l);return d==-1?is:(l=Number(u.substring(l,d)),isNaN(l)?Xi:(d+=1,d+l>u.length?is:(u=u.slice(d,d+l),i.C=d+l,u)))}Ht.prototype.cancel=function(){this.J=!0,he(this)};function Ln(i){i.S=Date.now()+i.I,Zi(i,i.I)}function Zi(i,u){if(i.B!=null)throw Error("WatchDog timer not null");i.B=Ye(A(i.ba,i),u)}function as(i){i.B&&(c.clearTimeout(i.B),i.B=null)}Ht.prototype.ba=function(){this.B=null;const i=Date.now();0<=i-this.S?(jc(this.i,this.A),this.L!=2&&(Xe(),vt(17)),he(this),this.s=2,Ze(this)):Zi(this,this.S-i)};function Ze(i){i.j.G==0||i.J||So(i.j,i)}function he(i){as(i);var u=i.M;u&&typeof u.ma=="function"&&u.ma(),i.M=null,qi(i.U),i.g&&(u=i.g,i.g=null,u.abort(),u.ma())}function us(i,u){try{var l=i.j;if(l.G!=0&&(l.g==i||cs(l.h,i))){if(!i.K&&cs(l.h,i)&&l.G==3){try{var d=l.Da.g.parse(u)}catch{d=null}if(Array.isArray(d)&&d.length==3){var I=d;if(I[0]==0){t:if(!l.u){if(l.g)if(l.g.F+3e3<i.F)Kn(l),$n(l);else break t;fs(l),vt(18)}}else l.za=I[1],0<l.za-l.T&&37500>I[2]&&l.F&&l.v==0&&!l.C&&(l.C=Ye(A(l.Za,l),6e3));if(1>=no(l.h)&&l.ca){try{l.ca()}catch{}l.ca=void 0}}else fe(l,11)}else if((i.K||l.g==i)&&Kn(l),!G(u))for(I=l.Da.g.parse(u),u=0;u<I.length;u++){let $=I[u];if(l.T=$[0],$=$[1],l.G==2)if($[0]=="c"){l.K=$[1],l.ia=$[2];const ft=$[3];ft!=null&&(l.la=ft,l.j.info("VER="+l.la));const mt=$[4];mt!=null&&(l.Aa=mt,l.j.info("SVER="+l.Aa));const Re=$[5];Re!=null&&typeof Re=="number"&&0<Re&&(d=1.5*Re,l.L=d,l.j.info("backChannelRequestTimeoutMs_="+d)),d=l;const xt=i.g;if(xt){const Qn=xt.g?xt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Qn){var R=d.h;R.g||Qn.indexOf("spdy")==-1&&Qn.indexOf("quic")==-1&&Qn.indexOf("h2")==-1||(R.j=R.l,R.g=new Set,R.h&&(ls(R,R.h),R.h=null))}if(d.D){const ps=xt.g?xt.g.getResponseHeader("X-HTTP-Session-Id"):null;ps&&(d.ya=ps,X(d.I,d.D,ps))}}l.G=3,l.l&&l.l.ua(),l.ba&&(l.R=Date.now()-i.F,l.j.info("Handshake RTT: "+l.R+"ms")),d=l;var b=i;if(d.qa=bo(d,d.J?d.ia:null,d.W),b.K){ro(d.h,b);var Q=b,at=d.L;at&&(Q.I=at),Q.B&&(as(Q),Ln(Q)),d.g=b}else Ao(d);0<l.i.length&&Gn(l)}else $[0]!="stop"&&$[0]!="close"||fe(l,7);else l.G==3&&($[0]=="stop"||$[0]=="close"?$[0]=="stop"?fe(l,7):ds(l):$[0]!="noop"&&l.l&&l.l.ta($),l.v=0)}}Xe(4)}catch{}}var Gc=class{constructor(i,u){this.g=i,this.map=u}};function to(i){this.l=i||10,c.PerformanceNavigationTiming?(i=c.performance.getEntriesByType("navigation"),i=0<i.length&&(i[0].nextHopProtocol=="hq"||i[0].nextHopProtocol=="h2")):i=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=i?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function eo(i){return i.h?!0:i.g?i.g.size>=i.j:!1}function no(i){return i.h?1:i.g?i.g.size:0}function cs(i,u){return i.h?i.h==u:i.g?i.g.has(u):!1}function ls(i,u){i.g?i.g.add(u):i.h=u}function ro(i,u){i.h&&i.h==u?i.h=null:i.g&&i.g.has(u)&&i.g.delete(u)}to.prototype.cancel=function(){if(this.i=so(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const i of this.g.values())i.cancel();this.g.clear()}};function so(i){if(i.h!=null)return i.i.concat(i.h.D);if(i.g!=null&&i.g.size!==0){let u=i.i;for(const l of i.g.values())u=u.concat(l.D);return u}return k(i.i)}function Kc(i){if(i.V&&typeof i.V=="function")return i.V();if(typeof Map<"u"&&i instanceof Map||typeof Set<"u"&&i instanceof Set)return Array.from(i.values());if(typeof i=="string")return i.split("");if(h(i)){for(var u=[],l=i.length,d=0;d<l;d++)u.push(i[d]);return u}u=[],l=0;for(d in i)u[l++]=i[d];return u}function Hc(i){if(i.na&&typeof i.na=="function")return i.na();if(!i.V||typeof i.V!="function"){if(typeof Map<"u"&&i instanceof Map)return Array.from(i.keys());if(!(typeof Set<"u"&&i instanceof Set)){if(h(i)||typeof i=="string"){var u=[];i=i.length;for(var l=0;l<i;l++)u.push(l);return u}u=[],l=0;for(const d in i)u[l++]=d;return u}}}function io(i,u){if(i.forEach&&typeof i.forEach=="function")i.forEach(u,void 0);else if(h(i)||typeof i=="string")Array.prototype.forEach.call(i,u,void 0);else for(var l=Hc(i),d=Kc(i),I=d.length,R=0;R<I;R++)u.call(void 0,d[R],l&&l[R],i)}var oo=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Qc(i,u){if(i){i=i.split("&");for(var l=0;l<i.length;l++){var d=i[l].indexOf("="),I=null;if(0<=d){var R=i[l].substring(0,d);I=i[l].substring(d+1)}else R=i[l];u(R,I?decodeURIComponent(I.replace(/\+/g," ")):"")}}}function de(i){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,i instanceof de){this.h=i.h,Fn(this,i.j),this.o=i.o,this.g=i.g,Bn(this,i.s),this.l=i.l;var u=i.i,l=new nn;l.i=u.i,u.g&&(l.g=new Map(u.g),l.h=u.h),ao(this,l),this.m=i.m}else i&&(u=String(i).match(oo))?(this.h=!1,Fn(this,u[1]||"",!0),this.o=tn(u[2]||""),this.g=tn(u[3]||"",!0),Bn(this,u[4]),this.l=tn(u[5]||"",!0),ao(this,u[6]||"",!0),this.m=tn(u[7]||"")):(this.h=!1,this.i=new nn(null,this.h))}de.prototype.toString=function(){var i=[],u=this.j;u&&i.push(en(u,uo,!0),":");var l=this.g;return(l||u=="file")&&(i.push("//"),(u=this.o)&&i.push(en(u,uo,!0),"@"),i.push(encodeURIComponent(String(l)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l=this.s,l!=null&&i.push(":",String(l))),(l=this.l)&&(this.g&&l.charAt(0)!="/"&&i.push("/"),i.push(en(l,l.charAt(0)=="/"?Yc:Xc,!0))),(l=this.i.toString())&&i.push("?",l),(l=this.m)&&i.push("#",en(l,Zc)),i.join("")};function Ut(i){return new de(i)}function Fn(i,u,l){i.j=l?tn(u,!0):u,i.j&&(i.j=i.j.replace(/:$/,""))}function Bn(i,u){if(u){if(u=Number(u),isNaN(u)||0>u)throw Error("Bad port number "+u);i.s=u}else i.s=null}function ao(i,u,l){u instanceof nn?(i.i=u,tl(i.i,i.h)):(l||(u=en(u,Jc)),i.i=new nn(u,i.h))}function X(i,u,l){i.i.set(u,l)}function Un(i){return X(i,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),i}function tn(i,u){return i?u?decodeURI(i.replace(/%25/g,"%2525")):decodeURIComponent(i):""}function en(i,u,l){return typeof i=="string"?(i=encodeURI(i).replace(u,Wc),l&&(i=i.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),i):null}function Wc(i){return i=i.charCodeAt(0),"%"+(i>>4&15).toString(16)+(i&15).toString(16)}var uo=/[#\/\?@]/g,Xc=/[#\?:]/g,Yc=/[#\?]/g,Jc=/[#\?@]/g,Zc=/#/g;function nn(i,u){this.h=this.g=null,this.i=i||null,this.j=!!u}function Qt(i){i.g||(i.g=new Map,i.h=0,i.i&&Qc(i.i,function(u,l){i.add(decodeURIComponent(u.replace(/\+/g," ")),l)}))}n=nn.prototype,n.add=function(i,u){Qt(this),this.i=null,i=we(this,i);var l=this.g.get(i);return l||this.g.set(i,l=[]),l.push(u),this.h+=1,this};function co(i,u){Qt(i),u=we(i,u),i.g.has(u)&&(i.i=null,i.h-=i.g.get(u).length,i.g.delete(u))}function lo(i,u){return Qt(i),u=we(i,u),i.g.has(u)}n.forEach=function(i,u){Qt(this),this.g.forEach(function(l,d){l.forEach(function(I){i.call(u,I,d,this)},this)},this)},n.na=function(){Qt(this);const i=Array.from(this.g.values()),u=Array.from(this.g.keys()),l=[];for(let d=0;d<u.length;d++){const I=i[d];for(let R=0;R<I.length;R++)l.push(u[d])}return l},n.V=function(i){Qt(this);let u=[];if(typeof i=="string")lo(this,i)&&(u=u.concat(this.g.get(we(this,i))));else{i=Array.from(this.g.values());for(let l=0;l<i.length;l++)u=u.concat(i[l])}return u},n.set=function(i,u){return Qt(this),this.i=null,i=we(this,i),lo(this,i)&&(this.h-=this.g.get(i).length),this.g.set(i,[u]),this.h+=1,this},n.get=function(i,u){return i?(i=this.V(i),0<i.length?String(i[0]):u):u};function ho(i,u,l){co(i,u),0<l.length&&(i.i=null,i.g.set(we(i,u),k(l)),i.h+=l.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const i=[],u=Array.from(this.g.keys());for(var l=0;l<u.length;l++){var d=u[l];const R=encodeURIComponent(String(d)),b=this.V(d);for(d=0;d<b.length;d++){var I=R;b[d]!==""&&(I+="="+encodeURIComponent(String(b[d]))),i.push(I)}}return this.i=i.join("&")};function we(i,u){return u=String(u),i.j&&(u=u.toLowerCase()),u}function tl(i,u){u&&!i.j&&(Qt(i),i.i=null,i.g.forEach(function(l,d){var I=d.toLowerCase();d!=I&&(co(this,d),ho(this,I,l))},i)),i.j=u}function el(i,u){const l=new Je;if(c.Image){const d=new Image;d.onload=C(Wt,l,"TestLoadImage: loaded",!0,u,d),d.onerror=C(Wt,l,"TestLoadImage: error",!1,u,d),d.onabort=C(Wt,l,"TestLoadImage: abort",!1,u,d),d.ontimeout=C(Wt,l,"TestLoadImage: timeout",!1,u,d),c.setTimeout(function(){d.ontimeout&&d.ontimeout()},1e4),d.src=i}else u(!1)}function nl(i,u){const l=new Je,d=new AbortController,I=setTimeout(()=>{d.abort(),Wt(l,"TestPingServer: timeout",!1,u)},1e4);fetch(i,{signal:d.signal}).then(R=>{clearTimeout(I),R.ok?Wt(l,"TestPingServer: ok",!0,u):Wt(l,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(I),Wt(l,"TestPingServer: error",!1,u)})}function Wt(i,u,l,d,I){try{I&&(I.onload=null,I.onerror=null,I.onabort=null,I.ontimeout=null),d(l)}catch{}}function rl(){this.g=new Bc}function sl(i,u,l){const d=l||"";try{io(i,function(I,R){let b=I;f(I)&&(b=ts(I)),u.push(d+R+"="+encodeURIComponent(b))})}catch(I){throw u.push(d+"type="+encodeURIComponent("_badmap")),I}}function qn(i){this.l=i.Ub||null,this.j=i.eb||!1}D(qn,es),qn.prototype.g=function(){return new jn(this.l,this.j)},qn.prototype.i=function(i){return function(){return i}}({});function jn(i,u){dt.call(this),this.D=i,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}D(jn,dt),n=jn.prototype,n.open=function(i,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=i,this.A=u,this.readyState=1,sn(this)},n.send=function(i){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const u={headers:this.u,method:this.B,credentials:this.m,cache:void 0};i&&(u.body=i),(this.D||c).fetch(new Request(this.A,u)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,rn(this)),this.readyState=0},n.Sa=function(i){if(this.g&&(this.l=i,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=i.headers,this.readyState=2,sn(this)),this.g&&(this.readyState=3,sn(this),this.g)))if(this.responseType==="arraybuffer")i.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in i){if(this.j=i.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;fo(this)}else i.text().then(this.Ra.bind(this),this.ga.bind(this))};function fo(i){i.j.read().then(i.Pa.bind(i)).catch(i.ga.bind(i))}n.Pa=function(i){if(this.g){if(this.o&&i.value)this.response.push(i.value);else if(!this.o){var u=i.value?i.value:new Uint8Array(0);(u=this.v.decode(u,{stream:!i.done}))&&(this.response=this.responseText+=u)}i.done?rn(this):sn(this),this.readyState==3&&fo(this)}},n.Ra=function(i){this.g&&(this.response=this.responseText=i,rn(this))},n.Qa=function(i){this.g&&(this.response=i,rn(this))},n.ga=function(){this.g&&rn(this)};function rn(i){i.readyState=4,i.l=null,i.j=null,i.v=null,sn(i)}n.setRequestHeader=function(i,u){this.u.append(i,u)},n.getResponseHeader=function(i){return this.h&&this.h.get(i.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const i=[],u=this.h.entries();for(var l=u.next();!l.done;)l=l.value,i.push(l[0]+": "+l[1]),l=u.next();return i.join(`\r
`)};function sn(i){i.onreadystatechange&&i.onreadystatechange.call(i)}Object.defineProperty(jn.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(i){this.m=i?"include":"same-origin"}});function mo(i){let u="";return tt(i,function(l,d){u+=d,u+=":",u+=l,u+=`\r
`}),u}function hs(i,u,l){t:{for(d in l){var d=!1;break t}d=!0}d||(l=mo(l),typeof i=="string"?l!=null&&encodeURIComponent(String(l)):X(i,u,l))}function Z(i){dt.call(this),this.headers=new Map,this.o=i||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}D(Z,dt);var il=/^https?$/i,ol=["POST","PUT"];n=Z.prototype,n.Ha=function(i){this.J=i},n.ea=function(i,u,l,d){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+i);u=u?u.toUpperCase():"GET",this.D=i,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():ss.g(),this.v=this.o?ji(this.o):ji(ss),this.g.onreadystatechange=A(this.Ea,this);try{this.B=!0,this.g.open(u,String(i),!0),this.B=!1}catch(R){po(this,R);return}if(i=l||"",l=new Map(this.headers),d)if(Object.getPrototypeOf(d)===Object.prototype)for(var I in d)l.set(I,d[I]);else if(typeof d.keys=="function"&&typeof d.get=="function")for(const R of d.keys())l.set(R,d.get(R));else throw Error("Unknown input type for opt_headers: "+String(d));d=Array.from(l.keys()).find(R=>R.toLowerCase()=="content-type"),I=c.FormData&&i instanceof c.FormData,!(0<=Array.prototype.indexOf.call(ol,u,void 0))||d||I||l.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[R,b]of l)this.g.setRequestHeader(R,b);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{yo(this),this.u=!0,this.g.send(i),this.u=!1}catch(R){po(this,R)}};function po(i,u){i.h=!1,i.g&&(i.j=!0,i.g.abort(),i.j=!1),i.l=u,i.m=5,go(i),zn(i)}function go(i){i.A||(i.A=!0,Et(i,"complete"),Et(i,"error"))}n.abort=function(i){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=i||7,Et(this,"complete"),Et(this,"abort"),zn(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),zn(this,!0)),Z.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?_o(this):this.bb())},n.bb=function(){_o(this)};function _o(i){if(i.h&&typeof a<"u"&&(!i.v[1]||qt(i)!=4||i.Z()!=2)){if(i.u&&qt(i)==4)Fi(i.Ea,0,i);else if(Et(i,"readystatechange"),qt(i)==4){i.h=!1;try{const b=i.Z();t:switch(b){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break t;default:u=!1}var l;if(!(l=u)){var d;if(d=b===0){var I=String(i.D).match(oo)[1]||null;!I&&c.self&&c.self.location&&(I=c.self.location.protocol.slice(0,-1)),d=!il.test(I?I.toLowerCase():"")}l=d}if(l)Et(i,"complete"),Et(i,"success");else{i.m=6;try{var R=2<qt(i)?i.g.statusText:""}catch{R=""}i.l=R+" ["+i.Z()+"]",go(i)}}finally{zn(i)}}}}function zn(i,u){if(i.g){yo(i);const l=i.g,d=i.v[0]?()=>{}:null;i.g=null,i.v=null,u||Et(i,"ready");try{l.onreadystatechange=d}catch{}}}function yo(i){i.I&&(c.clearTimeout(i.I),i.I=null)}n.isActive=function(){return!!this.g};function qt(i){return i.g?i.g.readyState:0}n.Z=function(){try{return 2<qt(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(i){if(this.g){var u=this.g.responseText;return i&&u.indexOf(i)==0&&(u=u.substring(i.length)),Fc(u)}};function Eo(i){try{if(!i.g)return null;if("response"in i.g)return i.g.response;switch(i.H){case"":case"text":return i.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in i.g)return i.g.mozResponseArrayBuffer}return null}catch{return null}}function al(i){const u={};i=(i.g&&2<=qt(i)&&i.g.getAllResponseHeaders()||"").split(`\r
`);for(let d=0;d<i.length;d++){if(G(i[d]))continue;var l=v(i[d]);const I=l[0];if(l=l[1],typeof l!="string")continue;l=l.trim();const R=u[I]||[];u[I]=R,R.push(l)}T(u,function(d){return d.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function on(i,u,l){return l&&l.internalChannelParams&&l.internalChannelParams[i]||u}function vo(i){this.Aa=0,this.i=[],this.j=new Je,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=on("failFast",!1,i),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=on("baseRetryDelayMs",5e3,i),this.cb=on("retryDelaySeedMs",1e4,i),this.Wa=on("forwardChannelMaxRetries",2,i),this.wa=on("forwardChannelRequestTimeoutMs",2e4,i),this.pa=i&&i.xmlHttpFactory||void 0,this.Xa=i&&i.Tb||void 0,this.Ca=i&&i.useFetchStreams||!1,this.L=void 0,this.J=i&&i.supportsCrossDomainXhr||!1,this.K="",this.h=new to(i&&i.concurrentRequestLimit),this.Da=new rl,this.P=i&&i.fastHandshake||!1,this.O=i&&i.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=i&&i.Rb||!1,i&&i.xa&&this.j.xa(),i&&i.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&i&&i.detectBufferingProxy||!1,this.ja=void 0,i&&i.longPollingTimeout&&0<i.longPollingTimeout&&(this.ja=i.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=vo.prototype,n.la=8,n.G=1,n.connect=function(i,u,l,d){vt(0),this.W=i,this.H=u||{},l&&d!==void 0&&(this.H.OSID=l,this.H.OAID=d),this.F=this.X,this.I=bo(this,null,this.W),Gn(this)};function ds(i){if(To(i),i.G==3){var u=i.U++,l=Ut(i.I);if(X(l,"SID",i.K),X(l,"RID",u),X(l,"TYPE","terminate"),an(i,l),u=new Ht(i,i.j,u),u.L=2,u.v=Un(Ut(l)),l=!1,c.navigator&&c.navigator.sendBeacon)try{l=c.navigator.sendBeacon(u.v.toString(),"")}catch{}!l&&c.Image&&(new Image().src=u.v,l=!0),l||(u.g=Vo(u.j,null),u.g.ea(u.v)),u.F=Date.now(),Ln(u)}Po(i)}function $n(i){i.g&&(ms(i),i.g.cancel(),i.g=null)}function To(i){$n(i),i.u&&(c.clearTimeout(i.u),i.u=null),Kn(i),i.h.cancel(),i.s&&(typeof i.s=="number"&&c.clearTimeout(i.s),i.s=null)}function Gn(i){if(!eo(i.h)&&!i.s){i.s=!0;var u=i.Ga;Ge||ki(),Ke||(Ge(),Ke=!0),Kr.add(u,i),i.B=0}}function ul(i,u){return no(i.h)>=i.h.j-(i.s?1:0)?!1:i.s?(i.i=u.D.concat(i.i),!0):i.G==1||i.G==2||i.B>=(i.Va?0:i.Wa)?!1:(i.s=Ye(A(i.Ga,i,u),Co(i,i.B)),i.B++,!0)}n.Ga=function(i){if(this.s)if(this.s=null,this.G==1){if(!i){this.U=Math.floor(1e5*Math.random()),i=this.U++;const I=new Ht(this,this.j,i);let R=this.o;if(this.S&&(R?(R=p(R),y(R,this.S)):R=this.S),this.m!==null||this.O||(I.H=R,R=null),this.P)t:{for(var u=0,l=0;l<this.i.length;l++){e:{var d=this.i[l];if("__data__"in d.map&&(d=d.map.__data__,typeof d=="string")){d=d.length;break e}d=void 0}if(d===void 0)break;if(u+=d,4096<u){u=l;break t}if(u===4096||l===this.i.length-1){u=l+1;break t}}u=1e3}else u=1e3;u=wo(this,I,u),l=Ut(this.I),X(l,"RID",i),X(l,"CVER",22),this.D&&X(l,"X-HTTP-Session-Id",this.D),an(this,l),R&&(this.O?u="headers="+encodeURIComponent(String(mo(R)))+"&"+u:this.m&&hs(l,this.m,R)),ls(this.h,I),this.Ua&&X(l,"TYPE","init"),this.P?(X(l,"$req",u),X(l,"SID","null"),I.T=!0,os(I,l,null)):os(I,l,u),this.G=2}}else this.G==3&&(i?Io(this,i):this.i.length==0||eo(this.h)||Io(this))};function Io(i,u){var l;u?l=u.l:l=i.U++;const d=Ut(i.I);X(d,"SID",i.K),X(d,"RID",l),X(d,"AID",i.T),an(i,d),i.m&&i.o&&hs(d,i.m,i.o),l=new Ht(i,i.j,l,i.B+1),i.m===null&&(l.H=i.o),u&&(i.i=u.D.concat(i.i)),u=wo(i,l,1e3),l.I=Math.round(.5*i.wa)+Math.round(.5*i.wa*Math.random()),ls(i.h,l),os(l,d,u)}function an(i,u){i.H&&tt(i.H,function(l,d){X(u,d,l)}),i.l&&io({},function(l,d){X(u,d,l)})}function wo(i,u,l){l=Math.min(i.i.length,l);var d=i.l?A(i.l.Na,i.l,i):null;t:{var I=i.i;let R=-1;for(;;){const b=["count="+l];R==-1?0<l?(R=I[0].g,b.push("ofs="+R)):R=0:b.push("ofs="+R);let Q=!0;for(let at=0;at<l;at++){let $=I[at].g;const ft=I[at].map;if($-=R,0>$)R=Math.max(0,I[at].g-100),Q=!1;else try{sl(ft,b,"req"+$+"_")}catch{d&&d(ft)}}if(Q){d=b.join("&");break t}}}return i=i.i.splice(0,l),u.D=i,d}function Ao(i){if(!i.g&&!i.u){i.Y=1;var u=i.Fa;Ge||ki(),Ke||(Ge(),Ke=!0),Kr.add(u,i),i.v=0}}function fs(i){return i.g||i.u||3<=i.v?!1:(i.Y++,i.u=Ye(A(i.Fa,i),Co(i,i.v)),i.v++,!0)}n.Fa=function(){if(this.u=null,Ro(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var i=2*this.R;this.j.info("BP detection timer enabled: "+i),this.A=Ye(A(this.ab,this),i)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,vt(10),$n(this),Ro(this))};function ms(i){i.A!=null&&(c.clearTimeout(i.A),i.A=null)}function Ro(i){i.g=new Ht(i,i.j,"rpc",i.Y),i.m===null&&(i.g.H=i.o),i.g.O=0;var u=Ut(i.qa);X(u,"RID","rpc"),X(u,"SID",i.K),X(u,"AID",i.T),X(u,"CI",i.F?"0":"1"),!i.F&&i.ja&&X(u,"TO",i.ja),X(u,"TYPE","xmlhttp"),an(i,u),i.m&&i.o&&hs(u,i.m,i.o),i.L&&(i.g.I=i.L);var l=i.g;i=i.ia,l.L=1,l.v=Un(Ut(u)),l.m=null,l.P=!0,Yi(l,i)}n.Za=function(){this.C!=null&&(this.C=null,$n(this),fs(this),vt(19))};function Kn(i){i.C!=null&&(c.clearTimeout(i.C),i.C=null)}function So(i,u){var l=null;if(i.g==u){Kn(i),ms(i),i.g=null;var d=2}else if(cs(i.h,u))l=u.D,ro(i.h,u),d=1;else return;if(i.G!=0){if(u.o)if(d==1){l=u.m?u.m.length:0,u=Date.now()-u.F;var I=i.B;d=Nn(),Et(d,new Hi(d,l)),Gn(i)}else Ao(i);else if(I=u.s,I==3||I==0&&0<u.X||!(d==1&&ul(i,u)||d==2&&fs(i)))switch(l&&0<l.length&&(u=i.h,u.i=u.i.concat(l)),I){case 1:fe(i,5);break;case 4:fe(i,10);break;case 3:fe(i,6);break;default:fe(i,2)}}}function Co(i,u){let l=i.Ta+Math.floor(Math.random()*i.cb);return i.isActive()||(l*=2),l*u}function fe(i,u){if(i.j.info("Error code "+u),u==2){var l=A(i.fb,i),d=i.Xa;const I=!d;d=new de(d||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||Fn(d,"https"),Un(d),I?el(d.toString(),l):nl(d.toString(),l)}else vt(2);i.G=0,i.l&&i.l.sa(u),Po(i),To(i)}n.fb=function(i){i?(this.j.info("Successfully pinged google.com"),vt(2)):(this.j.info("Failed to ping google.com"),vt(1))};function Po(i){if(i.G=0,i.ka=[],i.l){const u=so(i.h);(u.length!=0||i.i.length!=0)&&(V(i.ka,u),V(i.ka,i.i),i.h.i.length=0,k(i.i),i.i.length=0),i.l.ra()}}function bo(i,u,l){var d=l instanceof de?Ut(l):new de(l);if(d.g!="")u&&(d.g=u+"."+d.g),Bn(d,d.s);else{var I=c.location;d=I.protocol,u=u?u+"."+I.hostname:I.hostname,I=+I.port;var R=new de(null);d&&Fn(R,d),u&&(R.g=u),I&&Bn(R,I),l&&(R.l=l),d=R}return l=i.D,u=i.ya,l&&u&&X(d,l,u),X(d,"VER",i.la),an(i,d),d}function Vo(i,u,l){if(u&&!i.J)throw Error("Can't create secondary domain capable XhrIo object.");return u=i.Ca&&!i.pa?new Z(new qn({eb:l})):new Z(i.pa),u.Ha(i.J),u}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Do(){}n=Do.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function Hn(){}Hn.prototype.g=function(i,u){return new At(i,u)};function At(i,u){dt.call(this),this.g=new vo(u),this.l=i,this.h=u&&u.messageUrlParams||null,i=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(i?i["X-Client-Protocol"]="webchannel":i={"X-Client-Protocol":"webchannel"}),this.g.o=i,i=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(i?i["X-WebChannel-Content-Type"]=u.messageContentType:i={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.va&&(i?i["X-WebChannel-Client-Profile"]=u.va:i={"X-WebChannel-Client-Profile":u.va}),this.g.S=i,(i=u&&u.Sb)&&!G(i)&&(this.g.m=i),this.v=u&&u.supportsCrossDomainXhr||!1,this.u=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!G(u)&&(this.g.D=u,i=this.h,i!==null&&u in i&&(i=this.h,u in i&&delete i[u])),this.j=new Ae(this)}D(At,dt),At.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},At.prototype.close=function(){ds(this.g)},At.prototype.o=function(i){var u=this.g;if(typeof i=="string"){var l={};l.__data__=i,i=l}else this.u&&(l={},l.__data__=ts(i),i=l);u.i.push(new Gc(u.Ya++,i)),u.G==3&&Gn(u)},At.prototype.N=function(){this.g.l=null,delete this.j,ds(this.g),delete this.g,At.aa.N.call(this)};function xo(i){ns.call(this),i.__headers__&&(this.headers=i.__headers__,this.statusCode=i.__status__,delete i.__headers__,delete i.__status__);var u=i.__sm__;if(u){t:{for(const l in u){i=l;break t}i=void 0}(this.i=i)&&(i=this.i,u=u!==null&&i in u?u[i]:void 0),this.data=u}else this.data=i}D(xo,ns);function ko(){rs.call(this),this.status=1}D(ko,rs);function Ae(i){this.g=i}D(Ae,Do),Ae.prototype.ua=function(){Et(this.g,"a")},Ae.prototype.ta=function(i){Et(this.g,new xo(i))},Ae.prototype.sa=function(i){Et(this.g,new ko)},Ae.prototype.ra=function(){Et(this.g,"b")},Hn.prototype.createWebChannel=Hn.prototype.g,At.prototype.send=At.prototype.o,At.prototype.open=At.prototype.m,At.prototype.close=At.prototype.close,Ya=function(){return new Hn},Xa=function(){return Nn()},Wa=le,Ds={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Mn.NO_ERROR=0,Mn.TIMEOUT=8,Mn.HTTP_ERROR=6,tr=Mn,Qi.COMPLETE="complete",Qa=Qi,zi.EventType=We,We.OPEN="a",We.CLOSE="b",We.ERROR="c",We.MESSAGE="d",dt.prototype.listen=dt.prototype.K,un=zi,Z.prototype.listenOnce=Z.prototype.L,Z.prototype.getLastError=Z.prototype.Ka,Z.prototype.getLastErrorCode=Z.prototype.Ba,Z.prototype.getStatus=Z.prototype.Z,Z.prototype.getResponseJson=Z.prototype.Oa,Z.prototype.getResponseText=Z.prototype.oa,Z.prototype.send=Z.prototype.ea,Z.prototype.setWithCredentials=Z.prototype.Ha,Ha=Z}).apply(typeof Wn<"u"?Wn:typeof self<"u"?self:typeof window<"u"?window:{});const Go="@firebase/firestore";/**
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
 */class gt{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}gt.UNAUTHENTICATED=new gt(null),gt.GOOGLE_CREDENTIALS=new gt("google-credentials-uid"),gt.FIRST_PARTY=new gt("first-party-uid"),gt.MOCK_USER=new gt("mock-user");/**
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
 */let Ue="11.0.2";/**
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
 */const ye=new Ua("@firebase/firestore");function Se(){return ye.logLevel}function x(n,...t){if(ye.logLevel<=j.DEBUG){const e=t.map(Xs);ye.debug(`Firestore (${Ue}): ${n}`,...e)}}function $t(n,...t){if(ye.logLevel<=j.ERROR){const e=t.map(Xs);ye.error(`Firestore (${Ue}): ${n}`,...e)}}function xe(n,...t){if(ye.logLevel<=j.WARN){const e=t.map(Xs);ye.warn(`Firestore (${Ue}): ${n}`,...e)}}function Xs(n){if(typeof n=="string")return n;try{/**
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
*/return function(e){return JSON.stringify(e)}(n)}catch{return n}}/**
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
 */function O(n="Unexpected state"){const t=`FIRESTORE (${Ue}) INTERNAL ASSERTION FAILED: `+n;throw $t(t),new Error(t)}function H(n,t){n||O()}function F(n,t){return n}/**
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
 */const P={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class N extends Be{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class ee{constructor(){this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}}/**
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
 */class Ja{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class qh{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(gt.UNAUTHENTICATED))}shutdown(){}}class jh{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable(()=>e(this.token.user))}shutdown(){this.changeListener=null}}class zh{constructor(t){this.t=t,this.currentUser=gt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){H(this.o===void 0);let r=this.i;const s=h=>this.i!==r?(r=this.i,e(h)):Promise.resolve();let o=new ee;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new ee,t.enqueueRetryable(()=>s(this.currentUser))};const a=()=>{const h=o;t.enqueueRetryable(async()=>{await h.promise,await s(this.currentUser)})},c=h=>{x("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=h,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(h=>c(h)),setTimeout(()=>{if(!this.auth){const h=this.t.getImmediate({optional:!0});h?c(h):(x("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new ee)}},0),a()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(r=>this.i!==t?(x("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(H(typeof r.accessToken=="string"),new Ja(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return H(t===null||typeof t=="string"),new gt(t)}}class $h{constructor(t,e,r){this.l=t,this.h=e,this.P=r,this.type="FirstParty",this.user=gt.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const t=this.I();return t&&this.T.set("Authorization",t),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class Gh{constructor(t,e,r){this.l=t,this.h=e,this.P=r}getToken(){return Promise.resolve(new $h(this.l,this.h,this.P))}start(t,e){t.enqueueRetryable(()=>e(gt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Kh{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Hh{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,e){H(this.o===void 0);const r=o=>{o.error!=null&&x("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const a=o.token!==this.R;return this.R=o.token,x("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?e(o.token):Promise.resolve()};this.o=o=>{t.enqueueRetryable(()=>r(o))};const s=o=>{x("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(o=>s(o)),setTimeout(()=>{if(!this.appCheck){const o=this.A.getImmediate({optional:!0});o?s(o):x("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(e=>e?(H(typeof e.token=="string"),this.R=e.token,new Kh(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function Qh(n){const t=typeof self<"u"&&(self.crypto||self.msCrypto),e=new Uint8Array(n);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(e);else for(let r=0;r<n;r++)e[r]=Math.floor(256*Math.random());return e}/**
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
 */class Za{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let r="";for(;r.length<20;){const s=Qh(40);for(let o=0;o<s.length;++o)r.length<20&&s[o]<e&&(r+=t.charAt(s[o]%t.length))}return r}}function U(n,t){return n<t?-1:n>t?1:0}function ke(n,t,e){return n.length===t.length&&n.every((r,s)=>e(r,t[s]))}/**
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
 */class st{static now(){return st.fromMillis(Date.now())}static fromDate(t){return st.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),r=Math.floor(1e6*(t-1e3*e));return new st(e,r)}constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new N(P.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new N(P.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new N(P.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new N(P.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?U(this.nanoseconds,t.nanoseconds):U(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class L{static fromTimestamp(t){return new L(t)}static min(){return new L(new st(0,0))}static max(){return new L(new st(253402300799,999999999))}constructor(t){this.timestamp=t}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class vn{constructor(t,e,r){e===void 0?e=0:e>t.length&&O(),r===void 0?r=t.length-e:r>t.length-e&&O(),this.segments=t,this.offset=e,this.len=r}get length(){return this.len}isEqual(t){return vn.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof vn?t.forEach(r=>{e.push(r)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,r=this.limit();e<r;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const r=Math.min(t.length,e.length);for(let s=0;s<r;s++){const o=t.get(s),a=e.get(s);if(o<a)return-1;if(o>a)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class Y extends vn{construct(t,e,r){return new Y(t,e,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const r of t){if(r.indexOf("//")>=0)throw new N(P.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);e.push(...r.split("/").filter(s=>s.length>0))}return new Y(e)}static emptyPath(){return new Y([])}}const Wh=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ct extends vn{construct(t,e,r){return new ct(t,e,r)}static isValidIdentifier(t){return Wh.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ct.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new ct(["__name__"])}static fromServerFormat(t){const e=[];let r="",s=0;const o=()=>{if(r.length===0)throw new N(P.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(r),r=""};let a=!1;for(;s<t.length;){const c=t[s];if(c==="\\"){if(s+1===t.length)throw new N(P.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const h=t[s+1];if(h!=="\\"&&h!=="."&&h!=="`")throw new N(P.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);r+=h,s+=2}else c==="`"?(a=!a,s++):c!=="."||a?(r+=c,s++):(o(),s++)}if(o(),a)throw new N(P.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new ct(e)}static emptyPath(){return new ct([])}}/**
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
 */class M{constructor(t){this.path=t}static fromPath(t){return new M(Y.fromString(t))}static fromName(t){return new M(Y.fromString(t).popFirst(5))}static empty(){return new M(Y.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&Y.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return Y.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new M(new Y(t.slice()))}}function Xh(n,t){const e=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=L.fromTimestamp(r===1e9?new st(e+1,0):new st(e,r));return new re(s,M.empty(),t)}function Yh(n){return new re(n.readTime,n.key,-1)}class re{constructor(t,e,r){this.readTime=t,this.documentKey=e,this.largestBatchId=r}static min(){return new re(L.min(),M.empty(),-1)}static max(){return new re(L.max(),M.empty(),-1)}}function Jh(n,t){let e=n.readTime.compareTo(t.readTime);return e!==0?e:(e=M.comparator(n.documentKey,t.documentKey),e!==0?e:U(n.largestBatchId,t.largestBatchId))}/**
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
 */const Zh="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class td{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
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
 */async function qe(n){if(n.code!==P.FAILED_PRECONDITION||n.message!==Zh)throw n;x("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class S{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&O(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new S((r,s)=>{this.nextCallback=o=>{this.wrapSuccess(t,o).next(r,s)},this.catchCallback=o=>{this.wrapFailure(e,o).next(r,s)}})}toPromise(){return new Promise((t,e)=>{this.next(t,e)})}wrapUserFunction(t){try{const e=t();return e instanceof S?e:S.resolve(e)}catch(e){return S.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction(()=>t(e)):S.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction(()=>t(e)):S.reject(e)}static resolve(t){return new S((e,r)=>{e(t)})}static reject(t){return new S((e,r)=>{r(t)})}static waitFor(t){return new S((e,r)=>{let s=0,o=0,a=!1;t.forEach(c=>{++s,c.next(()=>{++o,a&&o===s&&e()},h=>r(h))}),a=!0,o===s&&e()})}static or(t){let e=S.resolve(!1);for(const r of t)e=e.next(s=>s?S.resolve(s):r());return e}static forEach(t,e){const r=[];return t.forEach((s,o)=>{r.push(e.call(this,s,o))}),this.waitFor(r)}static mapArray(t,e){return new S((r,s)=>{const o=t.length,a=new Array(o);let c=0;for(let h=0;h<o;h++){const f=h;e(t[f]).next(m=>{a[f]=m,++c,c===o&&r(a)},m=>s(m))}})}static doWhile(t,e){return new S((r,s)=>{const o=()=>{t()===!0?e().next(()=>{o()},s):r()};o()})}}function ed(n){const t=n.match(/Android ([\d.]+)/i),e=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(e)}function je(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class Sr{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=r=>this.ie(r),this.se=r=>e.writeSequenceNumber(r))}ie(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.se&&this.se(t),t}}Sr.oe=-1;function Cr(n){return n==null}function lr(n){return n===0&&1/n==-1/0}function nd(n){return typeof n=="number"&&Number.isInteger(n)&&!lr(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
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
 */function rd(n){let t="";for(let e=0;e<n.length;e++)t.length>0&&(t=Ko(t)),t=sd(n.get(e),t);return Ko(t)}function sd(n,t){let e=t;const r=n.length;for(let s=0;s<r;s++){const o=n.charAt(s);switch(o){case"\0":e+="";break;case"":e+="";break;default:e+=o}}return e}function Ko(n){return n+""}/**
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
 */function Ho(n){let t=0;for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t++;return t}function ue(n,t){for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t(e,n[e])}function tu(n){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t))return!1;return!0}/**
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
 */class J{constructor(t,e){this.comparator=t,this.root=e||ut.EMPTY}insert(t,e){return new J(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,ut.BLACK,null,null))}remove(t){return new J(this.comparator,this.root.remove(t,this.comparator).copy(null,null,ut.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const r=this.comparator(t,e.key);if(r===0)return e.value;r<0?e=e.left:r>0&&(e=e.right)}return null}indexOf(t){let e=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(t,r.key);if(s===0)return e+r.left.size;s<0?r=r.left:(e+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,r)=>(t(e,r),!1))}toString(){const t=[];return this.inorderTraversal((e,r)=>(t.push(`${e}:${r}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Xn(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Xn(this.root,t,this.comparator,!1)}getReverseIterator(){return new Xn(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Xn(this.root,t,this.comparator,!0)}}class Xn{constructor(t,e,r,s){this.isReverse=s,this.nodeStack=[];let o=1;for(;!t.isEmpty();)if(o=e?r(t.key,e):1,e&&s&&(o*=-1),o<0)t=this.isReverse?t.left:t.right;else{if(o===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class ut{constructor(t,e,r,s,o){this.key=t,this.value=e,this.color=r??ut.RED,this.left=s??ut.EMPTY,this.right=o??ut.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,r,s,o){return new ut(t??this.key,e??this.value,r??this.color,s??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,r){let s=this;const o=r(t,s.key);return s=o<0?s.copy(null,null,null,s.left.insert(t,e,r),null):o===0?s.copy(null,e,null,null,null):s.copy(null,null,null,null,s.right.insert(t,e,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return ut.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let r,s=this;if(e(t,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(t,e),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),e(t,s.key)===0){if(s.right.isEmpty())return ut.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(t,e))}return s.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,ut.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,ut.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw O();const t=this.left.check();if(t!==this.right.check())throw O();return t+(this.isRed()?0:1)}}ut.EMPTY=null,ut.RED=!0,ut.BLACK=!1;ut.EMPTY=new class{constructor(){this.size=0}get key(){throw O()}get value(){throw O()}get color(){throw O()}get left(){throw O()}get right(){throw O()}copy(t,e,r,s,o){return this}insert(t,e,r){return new ut(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class it{constructor(t){this.comparator=t,this.data=new J(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,r)=>(t(e),!1))}forEachInRange(t,e){const r=this.data.getIteratorFrom(t[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,t[1])>=0)return;e(s.key)}}forEachWhile(t,e){let r;for(r=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();r.hasNext();)if(!t(r.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new Qo(this.data.getIterator())}getIteratorFrom(t){return new Qo(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(r=>{e=e.add(r)}),e}isEqual(t){if(!(t instanceof it)||this.size!==t.size)return!1;const e=this.data.getIterator(),r=t.data.getIterator();for(;e.hasNext();){const s=e.getNext().key,o=r.getNext().key;if(this.comparator(s,o)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(e=>{t.push(e)}),t}toString(){const t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){const e=new it(this.comparator);return e.data=t,e}}class Qo{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class bt{constructor(t){this.fields=t,t.sort(ct.comparator)}static empty(){return new bt([])}unionWith(t){let e=new it(ct.comparator);for(const r of this.fields)e=e.add(r);for(const r of t)e=e.add(r);return new bt(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return ke(this.fields,t.fields,(e,r)=>e.isEqual(r))}}/**
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
 */class eu extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class lt{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(s){try{return atob(s)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new eu("Invalid base64 string: "+o):o}}(t);return new lt(e)}static fromUint8Array(t){const e=function(s){let o="";for(let a=0;a<s.length;++a)o+=String.fromCharCode(s[a]);return o}(t);return new lt(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(e){return btoa(e)}(this.binaryString)}toUint8Array(){return function(e){const r=new Uint8Array(e.length);for(let s=0;s<e.length;s++)r[s]=e.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return U(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}lt.EMPTY_BYTE_STRING=new lt("");const id=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function se(n){if(H(!!n),typeof n=="string"){let t=0;const e=id.exec(n);if(H(!!e),e[1]){let s=e[1];s=(s+"000000000").substr(0,9),t=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:et(n.seconds),nanos:et(n.nanos)}}function et(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function ie(n){return typeof n=="string"?lt.fromBase64String(n):lt.fromUint8Array(n)}/**
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
 */function Ys(n){var t,e;return((e=(((t=n==null?void 0:n.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||e===void 0?void 0:e.stringValue)==="server_timestamp"}function Pr(n){const t=n.mapValue.fields.__previous_value__;return Ys(t)?Pr(t):t}function Tn(n){const t=se(n.mapValue.fields.__local_write_time__.timestampValue);return new st(t.seconds,t.nanos)}/**
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
 */class od{constructor(t,e,r,s,o,a,c,h,f){this.databaseId=t,this.appId=e,this.persistenceKey=r,this.host=s,this.ssl=o,this.forceLongPolling=a,this.autoDetectLongPolling=c,this.longPollingOptions=h,this.useFetchStreams=f}}class In{constructor(t,e){this.projectId=t,this.database=e||"(default)"}static empty(){return new In("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof In&&t.projectId===this.projectId&&t.database===this.database}}/**
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
 */const Yn={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function oe(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Ys(n)?4:ud(n)?9007199254740991:ad(n)?10:11:O()}function Lt(n,t){if(n===t)return!0;const e=oe(n);if(e!==oe(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===t.booleanValue;case 4:return Tn(n).isEqual(Tn(t));case 3:return function(s,o){if(typeof s.timestampValue=="string"&&typeof o.timestampValue=="string"&&s.timestampValue.length===o.timestampValue.length)return s.timestampValue===o.timestampValue;const a=se(s.timestampValue),c=se(o.timestampValue);return a.seconds===c.seconds&&a.nanos===c.nanos}(n,t);case 5:return n.stringValue===t.stringValue;case 6:return function(s,o){return ie(s.bytesValue).isEqual(ie(o.bytesValue))}(n,t);case 7:return n.referenceValue===t.referenceValue;case 8:return function(s,o){return et(s.geoPointValue.latitude)===et(o.geoPointValue.latitude)&&et(s.geoPointValue.longitude)===et(o.geoPointValue.longitude)}(n,t);case 2:return function(s,o){if("integerValue"in s&&"integerValue"in o)return et(s.integerValue)===et(o.integerValue);if("doubleValue"in s&&"doubleValue"in o){const a=et(s.doubleValue),c=et(o.doubleValue);return a===c?lr(a)===lr(c):isNaN(a)&&isNaN(c)}return!1}(n,t);case 9:return ke(n.arrayValue.values||[],t.arrayValue.values||[],Lt);case 10:case 11:return function(s,o){const a=s.mapValue.fields||{},c=o.mapValue.fields||{};if(Ho(a)!==Ho(c))return!1;for(const h in a)if(a.hasOwnProperty(h)&&(c[h]===void 0||!Lt(a[h],c[h])))return!1;return!0}(n,t);default:return O()}}function wn(n,t){return(n.values||[]).find(e=>Lt(e,t))!==void 0}function Ne(n,t){if(n===t)return 0;const e=oe(n),r=oe(t);if(e!==r)return U(e,r);switch(e){case 0:case 9007199254740991:return 0;case 1:return U(n.booleanValue,t.booleanValue);case 2:return function(o,a){const c=et(o.integerValue||o.doubleValue),h=et(a.integerValue||a.doubleValue);return c<h?-1:c>h?1:c===h?0:isNaN(c)?isNaN(h)?0:-1:1}(n,t);case 3:return Wo(n.timestampValue,t.timestampValue);case 4:return Wo(Tn(n),Tn(t));case 5:return U(n.stringValue,t.stringValue);case 6:return function(o,a){const c=ie(o),h=ie(a);return c.compareTo(h)}(n.bytesValue,t.bytesValue);case 7:return function(o,a){const c=o.split("/"),h=a.split("/");for(let f=0;f<c.length&&f<h.length;f++){const m=U(c[f],h[f]);if(m!==0)return m}return U(c.length,h.length)}(n.referenceValue,t.referenceValue);case 8:return function(o,a){const c=U(et(o.latitude),et(a.latitude));return c!==0?c:U(et(o.longitude),et(a.longitude))}(n.geoPointValue,t.geoPointValue);case 9:return Xo(n.arrayValue,t.arrayValue);case 10:return function(o,a){var c,h,f,m;const E=o.fields||{},A=a.fields||{},C=(c=E.value)===null||c===void 0?void 0:c.arrayValue,D=(h=A.value)===null||h===void 0?void 0:h.arrayValue,k=U(((f=C==null?void 0:C.values)===null||f===void 0?void 0:f.length)||0,((m=D==null?void 0:D.values)===null||m===void 0?void 0:m.length)||0);return k!==0?k:Xo(C,D)}(n.mapValue,t.mapValue);case 11:return function(o,a){if(o===Yn.mapValue&&a===Yn.mapValue)return 0;if(o===Yn.mapValue)return 1;if(a===Yn.mapValue)return-1;const c=o.fields||{},h=Object.keys(c),f=a.fields||{},m=Object.keys(f);h.sort(),m.sort();for(let E=0;E<h.length&&E<m.length;++E){const A=U(h[E],m[E]);if(A!==0)return A;const C=Ne(c[h[E]],f[m[E]]);if(C!==0)return C}return U(h.length,m.length)}(n.mapValue,t.mapValue);default:throw O()}}function Wo(n,t){if(typeof n=="string"&&typeof t=="string"&&n.length===t.length)return U(n,t);const e=se(n),r=se(t),s=U(e.seconds,r.seconds);return s!==0?s:U(e.nanos,r.nanos)}function Xo(n,t){const e=n.values||[],r=t.values||[];for(let s=0;s<e.length&&s<r.length;++s){const o=Ne(e[s],r[s]);if(o)return o}return U(e.length,r.length)}function Me(n){return xs(n)}function xs(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(e){const r=se(e);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(e){return ie(e).toBase64()}(n.bytesValue):"referenceValue"in n?function(e){return M.fromName(e).toString()}(n.referenceValue):"geoPointValue"in n?function(e){return`geo(${e.latitude},${e.longitude})`}(n.geoPointValue):"arrayValue"in n?function(e){let r="[",s=!0;for(const o of e.values||[])s?s=!1:r+=",",r+=xs(o);return r+"]"}(n.arrayValue):"mapValue"in n?function(e){const r=Object.keys(e.fields||{}).sort();let s="{",o=!0;for(const a of r)o?o=!1:s+=",",s+=`${a}:${xs(e.fields[a])}`;return s+"}"}(n.mapValue):O()}function er(n){switch(oe(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const t=Pr(n);return t?16+er(t):16;case 5:return 2*n.stringValue.length;case 6:return ie(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,o)=>s+er(o),0)}(n.arrayValue);case 10:case 11:return function(r){let s=0;return ue(r.fields,(o,a)=>{s+=o.length+er(a)}),s}(n.mapValue);default:throw O()}}function ks(n){return!!n&&"integerValue"in n}function Js(n){return!!n&&"arrayValue"in n}function Yo(n){return!!n&&"nullValue"in n}function Jo(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function nr(n){return!!n&&"mapValue"in n}function ad(n){var t,e;return((e=(((t=n==null?void 0:n.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||e===void 0?void 0:e.stringValue)==="__vector__"}function dn(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const t={mapValue:{fields:{}}};return ue(n.mapValue.fields,(e,r)=>t.mapValue.fields[e]=dn(r)),t}if(n.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(n.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=dn(n.arrayValue.values[e]);return t}return Object.assign({},n)}function ud(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class wt{constructor(t){this.value=t}static empty(){return new wt({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let r=0;r<t.length-1;++r)if(e=(e.mapValue.fields||{})[t.get(r)],!nr(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=dn(e)}setAll(t){let e=ct.emptyPath(),r={},s=[];t.forEach((a,c)=>{if(!e.isImmediateParentOf(c)){const h=this.getFieldsMap(e);this.applyChanges(h,r,s),r={},s=[],e=c.popLast()}a?r[c.lastSegment()]=dn(a):s.push(c.lastSegment())});const o=this.getFieldsMap(e);this.applyChanges(o,r,s)}delete(t){const e=this.field(t.popLast());nr(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return Lt(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let r=0;r<t.length;++r){let s=e.mapValue.fields[t.get(r)];nr(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},e.mapValue.fields[t.get(r)]=s),e=s}return e.mapValue.fields}applyChanges(t,e,r){ue(e,(s,o)=>t[s]=o);for(const s of r)delete t[s]}clone(){return new wt(dn(this.value))}}function nu(n){const t=[];return ue(n.fields,(e,r)=>{const s=new ct([e]);if(nr(r)){const o=nu(r.mapValue).fields;if(o.length===0)t.push(s);else for(const a of o)t.push(s.child(a))}else t.push(s)}),new bt(t)}/**
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
 */class _t{constructor(t,e,r,s,o,a,c){this.key=t,this.documentType=e,this.version=r,this.readTime=s,this.createTime=o,this.data=a,this.documentState=c}static newInvalidDocument(t){return new _t(t,0,L.min(),L.min(),L.min(),wt.empty(),0)}static newFoundDocument(t,e,r,s){return new _t(t,1,e,L.min(),r,s,0)}static newNoDocument(t,e){return new _t(t,2,e,L.min(),L.min(),wt.empty(),0)}static newUnknownDocument(t,e){return new _t(t,3,e,L.min(),L.min(),wt.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(L.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=wt.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=wt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=L.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof _t&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new _t(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class hr{constructor(t,e){this.position=t,this.inclusive=e}}function Zo(n,t,e){let r=0;for(let s=0;s<n.position.length;s++){const o=t[s],a=n.position[s];if(o.field.isKeyField()?r=M.comparator(M.fromName(a.referenceValue),e.key):r=Ne(a,e.data.field(o.field)),o.dir==="desc"&&(r*=-1),r!==0)break}return r}function ta(n,t){if(n===null)return t===null;if(t===null||n.inclusive!==t.inclusive||n.position.length!==t.position.length)return!1;for(let e=0;e<n.position.length;e++)if(!Lt(n.position[e],t.position[e]))return!1;return!0}/**
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
 */class dr{constructor(t,e="asc"){this.field=t,this.dir=e}}function cd(n,t){return n.dir===t.dir&&n.field.isEqual(t.field)}/**
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
 */class ru{}class rt extends ru{constructor(t,e,r){super(),this.field=t,this.op=e,this.value=r}static create(t,e,r){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,r):new hd(t,e,r):e==="array-contains"?new md(t,r):e==="in"?new pd(t,r):e==="not-in"?new gd(t,r):e==="array-contains-any"?new _d(t,r):new rt(t,e,r)}static createKeyFieldInFilter(t,e,r){return e==="in"?new dd(t,r):new fd(t,r)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&this.matchesComparison(Ne(e,this.value)):e!==null&&oe(this.value)===oe(e)&&this.matchesComparison(Ne(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return O()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Ft extends ru{constructor(t,e){super(),this.filters=t,this.op=e,this.ae=null}static create(t,e){return new Ft(t,e)}matches(t){return su(this)?this.filters.find(e=>!e.matches(t))===void 0:this.filters.find(e=>e.matches(t))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((t,e)=>t.concat(e.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function su(n){return n.op==="and"}function iu(n){return ld(n)&&su(n)}function ld(n){for(const t of n.filters)if(t instanceof Ft)return!1;return!0}function Ns(n){if(n instanceof rt)return n.field.canonicalString()+n.op.toString()+Me(n.value);if(iu(n))return n.filters.map(t=>Ns(t)).join(",");{const t=n.filters.map(e=>Ns(e)).join(",");return`${n.op}(${t})`}}function ou(n,t){return n instanceof rt?function(r,s){return s instanceof rt&&r.op===s.op&&r.field.isEqual(s.field)&&Lt(r.value,s.value)}(n,t):n instanceof Ft?function(r,s){return s instanceof Ft&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((o,a,c)=>o&&ou(a,s.filters[c]),!0):!1}(n,t):void O()}function au(n){return n instanceof rt?function(e){return`${e.field.canonicalString()} ${e.op} ${Me(e.value)}`}(n):n instanceof Ft?function(e){return e.op.toString()+" {"+e.getFilters().map(au).join(" ,")+"}"}(n):"Filter"}class hd extends rt{constructor(t,e,r){super(t,e,r),this.key=M.fromName(r.referenceValue)}matches(t){const e=M.comparator(t.key,this.key);return this.matchesComparison(e)}}class dd extends rt{constructor(t,e){super(t,"in",e),this.keys=uu("in",e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}class fd extends rt{constructor(t,e){super(t,"not-in",e),this.keys=uu("not-in",e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function uu(n,t){var e;return(((e=t.arrayValue)===null||e===void 0?void 0:e.values)||[]).map(r=>M.fromName(r.referenceValue))}class md extends rt{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return Js(e)&&wn(e.arrayValue,this.value)}}class pd extends rt{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&wn(this.value.arrayValue,e)}}class gd extends rt{constructor(t,e){super(t,"not-in",e)}matches(t){if(wn(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&!wn(this.value.arrayValue,e)}}class _d extends rt{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!Js(e)||!e.arrayValue.values)&&e.arrayValue.values.some(r=>wn(this.value.arrayValue,r))}}/**
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
 */class yd{constructor(t,e=null,r=[],s=[],o=null,a=null,c=null){this.path=t,this.collectionGroup=e,this.orderBy=r,this.filters=s,this.limit=o,this.startAt=a,this.endAt=c,this.ue=null}}function ea(n,t=null,e=[],r=[],s=null,o=null,a=null){return new yd(n,t,e,r,s,o,a)}function Zs(n){const t=F(n);if(t.ue===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map(r=>Ns(r)).join(","),e+="|ob:",e+=t.orderBy.map(r=>function(o){return o.field.canonicalString()+o.dir}(r)).join(","),Cr(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(r=>Me(r)).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(r=>Me(r)).join(",")),t.ue=e}return t.ue}function ti(n,t){if(n.limit!==t.limit||n.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<n.orderBy.length;e++)if(!cd(n.orderBy[e],t.orderBy[e]))return!1;if(n.filters.length!==t.filters.length)return!1;for(let e=0;e<n.filters.length;e++)if(!ou(n.filters[e],t.filters[e]))return!1;return n.collectionGroup===t.collectionGroup&&!!n.path.isEqual(t.path)&&!!ta(n.startAt,t.startAt)&&ta(n.endAt,t.endAt)}function Ms(n){return M.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
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
 */class br{constructor(t,e=null,r=[],s=[],o=null,a="F",c=null,h=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=r,this.filters=s,this.limit=o,this.limitType=a,this.startAt=c,this.endAt=h,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function Ed(n,t,e,r,s,o,a,c){return new br(n,t,e,r,s,o,a,c)}function Vr(n){return new br(n)}function na(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function vd(n){return n.collectionGroup!==null}function fn(n){const t=F(n);if(t.ce===null){t.ce=[];const e=new Set;for(const o of t.explicitOrderBy)t.ce.push(o),e.add(o.field.canonicalString());const r=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(a){let c=new it(ct.comparator);return a.filters.forEach(h=>{h.getFlattenedFilters().forEach(f=>{f.isInequality()&&(c=c.add(f.field))})}),c})(t).forEach(o=>{e.has(o.canonicalString())||o.isKeyField()||t.ce.push(new dr(o,r))}),e.has(ct.keyField().canonicalString())||t.ce.push(new dr(ct.keyField(),r))}return t.ce}function Mt(n){const t=F(n);return t.le||(t.le=Td(t,fn(n))),t.le}function Td(n,t){if(n.limitType==="F")return ea(n.path,n.collectionGroup,t,n.filters,n.limit,n.startAt,n.endAt);{t=t.map(s=>{const o=s.dir==="desc"?"asc":"desc";return new dr(s.field,o)});const e=n.endAt?new hr(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new hr(n.startAt.position,n.startAt.inclusive):null;return ea(n.path,n.collectionGroup,t,n.filters,n.limit,e,r)}}function Os(n,t,e){return new br(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),t,e,n.startAt,n.endAt)}function Dr(n,t){return ti(Mt(n),Mt(t))&&n.limitType===t.limitType}function cu(n){return`${Zs(Mt(n))}|lt:${n.limitType}`}function Ce(n){return`Query(target=${function(e){let r=e.path.canonicalString();return e.collectionGroup!==null&&(r+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(r+=`, filters: [${e.filters.map(s=>au(s)).join(", ")}]`),Cr(e.limit)||(r+=", limit: "+e.limit),e.orderBy.length>0&&(r+=`, orderBy: [${e.orderBy.map(s=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(s)).join(", ")}]`),e.startAt&&(r+=", startAt: ",r+=e.startAt.inclusive?"b:":"a:",r+=e.startAt.position.map(s=>Me(s)).join(",")),e.endAt&&(r+=", endAt: ",r+=e.endAt.inclusive?"a:":"b:",r+=e.endAt.position.map(s=>Me(s)).join(",")),`Target(${r})`}(Mt(n))}; limitType=${n.limitType})`}function xr(n,t){return t.isFoundDocument()&&function(r,s){const o=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(o):M.isDocumentKey(r.path)?r.path.isEqual(o):r.path.isImmediateParentOf(o)}(n,t)&&function(r,s){for(const o of fn(r))if(!o.field.isKeyField()&&s.data.field(o.field)===null)return!1;return!0}(n,t)&&function(r,s){for(const o of r.filters)if(!o.matches(s))return!1;return!0}(n,t)&&function(r,s){return!(r.startAt&&!function(a,c,h){const f=Zo(a,c,h);return a.inclusive?f<=0:f<0}(r.startAt,fn(r),s)||r.endAt&&!function(a,c,h){const f=Zo(a,c,h);return a.inclusive?f>=0:f>0}(r.endAt,fn(r),s))}(n,t)}function Id(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function lu(n){return(t,e)=>{let r=!1;for(const s of fn(n)){const o=wd(s,t,e);if(o!==0)return o;r=r||s.field.isKeyField()}return 0}}function wd(n,t,e){const r=n.field.isKeyField()?M.comparator(t.key,e.key):function(o,a,c){const h=a.data.field(o),f=c.data.field(o);return h!==null&&f!==null?Ne(h,f):O()}(n.field,t,e);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return O()}}/**
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
 */class ve{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r!==void 0){for(const[s,o]of r)if(this.equalsFn(s,t))return o}}has(t){return this.get(t)!==void 0}set(t,e){const r=this.mapKeyFn(t),s=this.inner[r];if(s===void 0)return this.inner[r]=[[t,e]],void this.innerSize++;for(let o=0;o<s.length;o++)if(this.equalsFn(s[o][0],t))return void(s[o]=[t,e]);s.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],t))return r.length===1?delete this.inner[e]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(t){ue(this.inner,(e,r)=>{for(const[s,o]of r)t(s,o)})}isEmpty(){return tu(this.inner)}size(){return this.innerSize}}/**
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
 */const Ad=new J(M.comparator);function Gt(){return Ad}const hu=new J(M.comparator);function cn(...n){let t=hu;for(const e of n)t=t.insert(e.key,e);return t}function du(n){let t=hu;return n.forEach((e,r)=>t=t.insert(e,r.overlayedDocument)),t}function pe(){return mn()}function fu(){return mn()}function mn(){return new ve(n=>n.toString(),(n,t)=>n.isEqual(t))}const Rd=new J(M.comparator),Sd=new it(M.comparator);function B(...n){let t=Sd;for(const e of n)t=t.add(e);return t}const Cd=new it(U);function Pd(){return Cd}/**
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
 */function ei(n,t){if(n.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:lr(t)?"-0":t}}function mu(n){return{integerValue:""+n}}function bd(n,t){return nd(t)?mu(t):ei(n,t)}/**
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
 */class kr{constructor(){this._=void 0}}function Vd(n,t,e){return n instanceof fr?function(s,o){const a={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return o&&Ys(o)&&(o=Pr(o)),o&&(a.fields.__previous_value__=o),{mapValue:a}}(e,t):n instanceof An?gu(n,t):n instanceof Rn?_u(n,t):function(s,o){const a=pu(s,o),c=ra(a)+ra(s.Pe);return ks(a)&&ks(s.Pe)?mu(c):ei(s.serializer,c)}(n,t)}function Dd(n,t,e){return n instanceof An?gu(n,t):n instanceof Rn?_u(n,t):e}function pu(n,t){return n instanceof mr?function(r){return ks(r)||function(o){return!!o&&"doubleValue"in o}(r)}(t)?t:{integerValue:0}:null}class fr extends kr{}class An extends kr{constructor(t){super(),this.elements=t}}function gu(n,t){const e=yu(t);for(const r of n.elements)e.some(s=>Lt(s,r))||e.push(r);return{arrayValue:{values:e}}}class Rn extends kr{constructor(t){super(),this.elements=t}}function _u(n,t){let e=yu(t);for(const r of n.elements)e=e.filter(s=>!Lt(s,r));return{arrayValue:{values:e}}}class mr extends kr{constructor(t,e){super(),this.serializer=t,this.Pe=e}}function ra(n){return et(n.integerValue||n.doubleValue)}function yu(n){return Js(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function xd(n,t){return n.field.isEqual(t.field)&&function(r,s){return r instanceof An&&s instanceof An||r instanceof Rn&&s instanceof Rn?ke(r.elements,s.elements,Lt):r instanceof mr&&s instanceof mr?Lt(r.Pe,s.Pe):r instanceof fr&&s instanceof fr}(n.transform,t.transform)}class kd{constructor(t,e){this.version=t,this.transformResults=e}}class kt{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new kt}static exists(t){return new kt(void 0,t)}static updateTime(t){return new kt(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function rr(n,t){return n.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(n.updateTime):n.exists===void 0||n.exists===t.isFoundDocument()}class Nr{}function Eu(n,t){if(!n.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return n.isNoDocument()?new Tu(n.key,kt.none()):new Sn(n.key,n.data,kt.none());{const e=n.data,r=wt.empty();let s=new it(ct.comparator);for(let o of t.fields)if(!s.has(o)){let a=e.field(o);a===null&&o.length>1&&(o=o.popLast(),a=e.field(o)),a===null?r.delete(o):r.set(o,a),s=s.add(o)}return new ce(n.key,r,new bt(s.toArray()),kt.none())}}function Nd(n,t,e){n instanceof Sn?function(s,o,a){const c=s.value.clone(),h=ia(s.fieldTransforms,o,a.transformResults);c.setAll(h),o.convertToFoundDocument(a.version,c).setHasCommittedMutations()}(n,t,e):n instanceof ce?function(s,o,a){if(!rr(s.precondition,o))return void o.convertToUnknownDocument(a.version);const c=ia(s.fieldTransforms,o,a.transformResults),h=o.data;h.setAll(vu(s)),h.setAll(c),o.convertToFoundDocument(a.version,h).setHasCommittedMutations()}(n,t,e):function(s,o,a){o.convertToNoDocument(a.version).setHasCommittedMutations()}(0,t,e)}function pn(n,t,e,r){return n instanceof Sn?function(o,a,c,h){if(!rr(o.precondition,a))return c;const f=o.value.clone(),m=oa(o.fieldTransforms,h,a);return f.setAll(m),a.convertToFoundDocument(a.version,f).setHasLocalMutations(),null}(n,t,e,r):n instanceof ce?function(o,a,c,h){if(!rr(o.precondition,a))return c;const f=oa(o.fieldTransforms,h,a),m=a.data;return m.setAll(vu(o)),m.setAll(f),a.convertToFoundDocument(a.version,m).setHasLocalMutations(),c===null?null:c.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map(E=>E.field))}(n,t,e,r):function(o,a,c){return rr(o.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):c}(n,t,e)}function Md(n,t){let e=null;for(const r of n.fieldTransforms){const s=t.data.field(r.field),o=pu(r.transform,s||null);o!=null&&(e===null&&(e=wt.empty()),e.set(r.field,o))}return e||null}function sa(n,t){return n.type===t.type&&!!n.key.isEqual(t.key)&&!!n.precondition.isEqual(t.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&ke(r,s,(o,a)=>xd(o,a))}(n.fieldTransforms,t.fieldTransforms)&&(n.type===0?n.value.isEqual(t.value):n.type!==1||n.data.isEqual(t.data)&&n.fieldMask.isEqual(t.fieldMask))}class Sn extends Nr{constructor(t,e,r,s=[]){super(),this.key=t,this.value=e,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class ce extends Nr{constructor(t,e,r,s,o=[]){super(),this.key=t,this.data=e,this.fieldMask=r,this.precondition=s,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function vu(n){const t=new Map;return n.fieldMask.fields.forEach(e=>{if(!e.isEmpty()){const r=n.data.field(e);t.set(e,r)}}),t}function ia(n,t,e){const r=new Map;H(n.length===e.length);for(let s=0;s<e.length;s++){const o=n[s],a=o.transform,c=t.data.field(o.field);r.set(o.field,Dd(a,c,e[s]))}return r}function oa(n,t,e){const r=new Map;for(const s of n){const o=s.transform,a=e.data.field(s.field);r.set(s.field,Vd(o,a,t))}return r}class Tu extends Nr{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Od extends Nr{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class Ld{constructor(t,e,r,s){this.batchId=t,this.localWriteTime=e,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(t,e){const r=e.mutationResults;for(let s=0;s<this.mutations.length;s++){const o=this.mutations[s];o.key.isEqual(t.key)&&Nd(o,t,r[s])}}applyToLocalView(t,e){for(const r of this.baseMutations)r.key.isEqual(t.key)&&(e=pn(r,t,e,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(t.key)&&(e=pn(r,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const r=fu();return this.mutations.forEach(s=>{const o=t.get(s.key),a=o.overlayedDocument;let c=this.applyToLocalView(a,o.mutatedFields);c=e.has(s.key)?null:c;const h=Eu(a,c);h!==null&&r.set(s.key,h),a.isValidDocument()||a.convertToNoDocument(L.min())}),r}keys(){return this.mutations.reduce((t,e)=>t.add(e.key),B())}isEqual(t){return this.batchId===t.batchId&&ke(this.mutations,t.mutations,(e,r)=>sa(e,r))&&ke(this.baseMutations,t.baseMutations,(e,r)=>sa(e,r))}}class ni{constructor(t,e,r,s){this.batch=t,this.commitVersion=e,this.mutationResults=r,this.docVersions=s}static from(t,e,r){H(t.mutations.length===r.length);let s=function(){return Rd}();const o=t.mutations;for(let a=0;a<o.length;a++)s=s.insert(o[a].key,r[a].version);return new ni(t,e,r,s)}}/**
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
 */class Fd{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
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
 */class Bd{constructor(t,e){this.count=t,this.unchangedNames=e}}/**
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
 */var nt,q;function Ud(n){switch(n){default:return O();case P.CANCELLED:case P.UNKNOWN:case P.DEADLINE_EXCEEDED:case P.RESOURCE_EXHAUSTED:case P.INTERNAL:case P.UNAVAILABLE:case P.UNAUTHENTICATED:return!1;case P.INVALID_ARGUMENT:case P.NOT_FOUND:case P.ALREADY_EXISTS:case P.PERMISSION_DENIED:case P.FAILED_PRECONDITION:case P.ABORTED:case P.OUT_OF_RANGE:case P.UNIMPLEMENTED:case P.DATA_LOSS:return!0}}function Iu(n){if(n===void 0)return $t("GRPC error has no .code"),P.UNKNOWN;switch(n){case nt.OK:return P.OK;case nt.CANCELLED:return P.CANCELLED;case nt.UNKNOWN:return P.UNKNOWN;case nt.DEADLINE_EXCEEDED:return P.DEADLINE_EXCEEDED;case nt.RESOURCE_EXHAUSTED:return P.RESOURCE_EXHAUSTED;case nt.INTERNAL:return P.INTERNAL;case nt.UNAVAILABLE:return P.UNAVAILABLE;case nt.UNAUTHENTICATED:return P.UNAUTHENTICATED;case nt.INVALID_ARGUMENT:return P.INVALID_ARGUMENT;case nt.NOT_FOUND:return P.NOT_FOUND;case nt.ALREADY_EXISTS:return P.ALREADY_EXISTS;case nt.PERMISSION_DENIED:return P.PERMISSION_DENIED;case nt.FAILED_PRECONDITION:return P.FAILED_PRECONDITION;case nt.ABORTED:return P.ABORTED;case nt.OUT_OF_RANGE:return P.OUT_OF_RANGE;case nt.UNIMPLEMENTED:return P.UNIMPLEMENTED;case nt.DATA_LOSS:return P.DATA_LOSS;default:return O()}}(q=nt||(nt={}))[q.OK=0]="OK",q[q.CANCELLED=1]="CANCELLED",q[q.UNKNOWN=2]="UNKNOWN",q[q.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",q[q.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",q[q.NOT_FOUND=5]="NOT_FOUND",q[q.ALREADY_EXISTS=6]="ALREADY_EXISTS",q[q.PERMISSION_DENIED=7]="PERMISSION_DENIED",q[q.UNAUTHENTICATED=16]="UNAUTHENTICATED",q[q.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",q[q.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",q[q.ABORTED=10]="ABORTED",q[q.OUT_OF_RANGE=11]="OUT_OF_RANGE",q[q.UNIMPLEMENTED=12]="UNIMPLEMENTED",q[q.INTERNAL=13]="INTERNAL",q[q.UNAVAILABLE=14]="UNAVAILABLE",q[q.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function qd(){return new TextEncoder}/**
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
 */const jd=new ge([4294967295,4294967295],0);function aa(n){const t=qd().encode(n),e=new Ka;return e.update(t),new Uint8Array(e.digest())}function ua(n){const t=new DataView(n.buffer),e=t.getUint32(0,!0),r=t.getUint32(4,!0),s=t.getUint32(8,!0),o=t.getUint32(12,!0);return[new ge([e,r],0),new ge([s,o],0)]}class ri{constructor(t,e,r){if(this.bitmap=t,this.padding=e,this.hashCount=r,e<0||e>=8)throw new ln(`Invalid padding: ${e}`);if(r<0)throw new ln(`Invalid hash count: ${r}`);if(t.length>0&&this.hashCount===0)throw new ln(`Invalid hash count: ${r}`);if(t.length===0&&e!==0)throw new ln(`Invalid padding when bitmap length is 0: ${e}`);this.Te=8*t.length-e,this.Ie=ge.fromNumber(this.Te)}Ee(t,e,r){let s=t.add(e.multiply(ge.fromNumber(r)));return s.compare(jd)===1&&(s=new ge([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Ie).toNumber()}de(t){return(this.bitmap[Math.floor(t/8)]&1<<t%8)!=0}mightContain(t){if(this.Te===0)return!1;const e=aa(t),[r,s]=ua(e);for(let o=0;o<this.hashCount;o++){const a=this.Ee(r,s,o);if(!this.de(a))return!1}return!0}static create(t,e,r){const s=t%8==0?0:8-t%8,o=new Uint8Array(Math.ceil(t/8)),a=new ri(o,s,e);return r.forEach(c=>a.insert(c)),a}insert(t){if(this.Te===0)return;const e=aa(t),[r,s]=ua(e);for(let o=0;o<this.hashCount;o++){const a=this.Ee(r,s,o);this.Ae(a)}}Ae(t){const e=Math.floor(t/8),r=t%8;this.bitmap[e]|=1<<r}}class ln extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Mr{constructor(t,e,r,s,o){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=o}static createSynthesizedRemoteEventForCurrentChange(t,e,r){const s=new Map;return s.set(t,Cn.createSynthesizedTargetChangeForCurrentChange(t,e,r)),new Mr(L.min(),s,new J(U),Gt(),B())}}class Cn{constructor(t,e,r,s,o){this.resumeToken=t,this.current=e,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=o}static createSynthesizedTargetChangeForCurrentChange(t,e,r){return new Cn(r,e,B(),B(),B())}}/**
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
 */class sr{constructor(t,e,r,s){this.Re=t,this.removedTargetIds=e,this.key=r,this.Ve=s}}class wu{constructor(t,e){this.targetId=t,this.me=e}}class Au{constructor(t,e,r=lt.EMPTY_BYTE_STRING,s=null){this.state=t,this.targetIds=e,this.resumeToken=r,this.cause=s}}class ca{constructor(){this.fe=0,this.ge=la(),this.pe=lt.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(t){t.approximateByteSize()>0&&(this.we=!0,this.pe=t)}ve(){let t=B(),e=B(),r=B();return this.ge.forEach((s,o)=>{switch(o){case 0:t=t.add(s);break;case 2:e=e.add(s);break;case 1:r=r.add(s);break;default:O()}}),new Cn(this.pe,this.ye,t,e,r)}Ce(){this.we=!1,this.ge=la()}Fe(t,e){this.we=!0,this.ge=this.ge.insert(t,e)}Me(t){this.we=!0,this.ge=this.ge.remove(t)}xe(){this.fe+=1}Oe(){this.fe-=1,H(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class zd{constructor(t){this.Le=t,this.Be=new Map,this.ke=Gt(),this.qe=Jn(),this.Qe=Jn(),this.Ke=new J(U)}$e(t){for(const e of t.Re)t.Ve&&t.Ve.isFoundDocument()?this.Ue(e,t.Ve):this.We(e,t.key,t.Ve);for(const e of t.removedTargetIds)this.We(e,t.key,t.Ve)}Ge(t){this.forEachTarget(t,e=>{const r=this.ze(e);switch(t.state){case 0:this.je(e)&&r.De(t.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(t.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(e);break;case 3:this.je(e)&&(r.Ne(),r.De(t.resumeToken));break;case 4:this.je(e)&&(this.He(e),r.De(t.resumeToken));break;default:O()}})}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.Be.forEach((r,s)=>{this.je(s)&&e(s)})}Je(t){const e=t.targetId,r=t.me.count,s=this.Ye(e);if(s){const o=s.target;if(Ms(o))if(r===0){const a=new M(o.path);this.We(e,a,_t.newNoDocument(a,L.min()))}else H(r===1);else{const a=this.Ze(e);if(a!==r){const c=this.Xe(t),h=c?this.et(c,t,a):1;if(h!==0){this.He(e);const f=h===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(e,f)}}}}}Xe(t){const e=t.me.unchangedNames;if(!e||!e.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:o=0}=e;let a,c;try{a=ie(r).toUint8Array()}catch(h){if(h instanceof eu)return xe("Decoding the base64 bloom filter in existence filter failed ("+h.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw h}try{c=new ri(a,s,o)}catch(h){return xe(h instanceof ln?"BloomFilter error: ":"Applying bloom filter failed: ",h),null}return c.Te===0?null:c}et(t,e,r){return e.me.count===r-this.rt(t,e.targetId)?0:2}rt(t,e){const r=this.Le.getRemoteKeysForTarget(e);let s=0;return r.forEach(o=>{const a=this.Le.nt(),c=`projects/${a.projectId}/databases/${a.database}/documents/${o.path.canonicalString()}`;t.mightContain(c)||(this.We(e,o,null),s++)}),s}it(t){const e=new Map;this.Be.forEach((o,a)=>{const c=this.Ye(a);if(c){if(o.current&&Ms(c.target)){const h=new M(c.target.path);this.st(h).has(a)||this.ot(a,h)||this.We(a,h,_t.newNoDocument(h,t))}o.be&&(e.set(a,o.ve()),o.Ce())}});let r=B();this.Qe.forEach((o,a)=>{let c=!0;a.forEachWhile(h=>{const f=this.Ye(h);return!f||f.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)}),c&&(r=r.add(o))}),this.ke.forEach((o,a)=>a.setReadTime(t));const s=new Mr(t,e,this.Ke,this.ke,r);return this.ke=Gt(),this.qe=Jn(),this.Qe=Jn(),this.Ke=new J(U),s}Ue(t,e){if(!this.je(t))return;const r=this.ot(t,e.key)?2:0;this.ze(t).Fe(e.key,r),this.ke=this.ke.insert(e.key,e),this.qe=this.qe.insert(e.key,this.st(e.key).add(t)),this.Qe=this.Qe.insert(e.key,this._t(e.key).add(t))}We(t,e,r){if(!this.je(t))return;const s=this.ze(t);this.ot(t,e)?s.Fe(e,1):s.Me(e),this.Qe=this.Qe.insert(e,this._t(e).delete(t)),this.Qe=this.Qe.insert(e,this._t(e).add(t)),r&&(this.ke=this.ke.insert(e,r))}removeTarget(t){this.Be.delete(t)}Ze(t){const e=this.ze(t).ve();return this.Le.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}xe(t){this.ze(t).xe()}ze(t){let e=this.Be.get(t);return e||(e=new ca,this.Be.set(t,e)),e}_t(t){let e=this.Qe.get(t);return e||(e=new it(U),this.Qe=this.Qe.insert(t,e)),e}st(t){let e=this.qe.get(t);return e||(e=new it(U),this.qe=this.qe.insert(t,e)),e}je(t){const e=this.Ye(t)!==null;return e||x("WatchChangeAggregator","Detected inactive target",t),e}Ye(t){const e=this.Be.get(t);return e&&e.Se?null:this.Le.ut(t)}He(t){this.Be.set(t,new ca),this.Le.getRemoteKeysForTarget(t).forEach(e=>{this.We(t,e,null)})}ot(t,e){return this.Le.getRemoteKeysForTarget(t).has(e)}}function Jn(){return new J(M.comparator)}function la(){return new J(M.comparator)}const $d={asc:"ASCENDING",desc:"DESCENDING"},Gd={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Kd={and:"AND",or:"OR"};class Hd{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function Ls(n,t){return n.useProto3Json||Cr(t)?t:{value:t}}function pr(n,t){return n.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Ru(n,t){return n.useProto3Json?t.toBase64():t.toUint8Array()}function Qd(n,t){return pr(n,t.toTimestamp())}function Ot(n){return H(!!n),L.fromTimestamp(function(e){const r=se(e);return new st(r.seconds,r.nanos)}(n))}function si(n,t){return Fs(n,t).canonicalString()}function Fs(n,t){const e=function(s){return new Y(["projects",s.projectId,"databases",s.database])}(n).child("documents");return t===void 0?e:e.child(t)}function Su(n){const t=Y.fromString(n);return H(Du(t)),t}function Bs(n,t){return si(n.databaseId,t.path)}function vs(n,t){const e=Su(t);if(e.get(1)!==n.databaseId.projectId)throw new N(P.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+e.get(1)+" vs "+n.databaseId.projectId);if(e.get(3)!==n.databaseId.database)throw new N(P.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+e.get(3)+" vs "+n.databaseId.database);return new M(Pu(e))}function Cu(n,t){return si(n.databaseId,t)}function Wd(n){const t=Su(n);return t.length===4?Y.emptyPath():Pu(t)}function Us(n){return new Y(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Pu(n){return H(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function ha(n,t,e){return{name:Bs(n,t),fields:e.value.mapValue.fields}}function Xd(n,t){let e;if("targetChange"in t){t.targetChange;const r=function(f){return f==="NO_CHANGE"?0:f==="ADD"?1:f==="REMOVE"?2:f==="CURRENT"?3:f==="RESET"?4:O()}(t.targetChange.targetChangeType||"NO_CHANGE"),s=t.targetChange.targetIds||[],o=function(f,m){return f.useProto3Json?(H(m===void 0||typeof m=="string"),lt.fromBase64String(m||"")):(H(m===void 0||m instanceof Buffer||m instanceof Uint8Array),lt.fromUint8Array(m||new Uint8Array))}(n,t.targetChange.resumeToken),a=t.targetChange.cause,c=a&&function(f){const m=f.code===void 0?P.UNKNOWN:Iu(f.code);return new N(m,f.message||"")}(a);e=new Au(r,s,o,c||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const s=vs(n,r.document.name),o=Ot(r.document.updateTime),a=r.document.createTime?Ot(r.document.createTime):L.min(),c=new wt({mapValue:{fields:r.document.fields}}),h=_t.newFoundDocument(s,o,a,c),f=r.targetIds||[],m=r.removedTargetIds||[];e=new sr(f,m,h.key,h)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const s=vs(n,r.document),o=r.readTime?Ot(r.readTime):L.min(),a=_t.newNoDocument(s,o),c=r.removedTargetIds||[];e=new sr([],c,a.key,a)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const s=vs(n,r.document),o=r.removedTargetIds||[];e=new sr([],o,s,null)}else{if(!("filter"in t))return O();{t.filter;const r=t.filter;r.targetId;const{count:s=0,unchangedNames:o}=r,a=new Bd(s,o),c=r.targetId;e=new wu(c,a)}}return e}function Yd(n,t){let e;if(t instanceof Sn)e={update:ha(n,t.key,t.value)};else if(t instanceof Tu)e={delete:Bs(n,t.key)};else if(t instanceof ce)e={update:ha(n,t.key,t.data),updateMask:af(t.fieldMask)};else{if(!(t instanceof Od))return O();e={verify:Bs(n,t.key)}}return t.fieldTransforms.length>0&&(e.updateTransforms=t.fieldTransforms.map(r=>function(o,a){const c=a.transform;if(c instanceof fr)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof An)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof Rn)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof mr)return{fieldPath:a.field.canonicalString(),increment:c.Pe};throw O()}(0,r))),t.precondition.isNone||(e.currentDocument=function(s,o){return o.updateTime!==void 0?{updateTime:Qd(s,o.updateTime)}:o.exists!==void 0?{exists:o.exists}:O()}(n,t.precondition)),e}function Jd(n,t){return n&&n.length>0?(H(t!==void 0),n.map(e=>function(s,o){let a=s.updateTime?Ot(s.updateTime):Ot(o);return a.isEqual(L.min())&&(a=Ot(o)),new kd(a,s.transformResults||[])}(e,t))):[]}function Zd(n,t){return{documents:[Cu(n,t.path)]}}function tf(n,t){const e={structuredQuery:{}},r=t.path;let s;t.collectionGroup!==null?(s=r,e.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(s=r.popLast(),e.structuredQuery.from=[{collectionId:r.lastSegment()}]),e.parent=Cu(n,s);const o=function(f){if(f.length!==0)return Vu(Ft.create(f,"and"))}(t.filters);o&&(e.structuredQuery.where=o);const a=function(f){if(f.length!==0)return f.map(m=>function(A){return{field:Pe(A.field),direction:rf(A.dir)}}(m))}(t.orderBy);a&&(e.structuredQuery.orderBy=a);const c=Ls(n,t.limit);return c!==null&&(e.structuredQuery.limit=c),t.startAt&&(e.structuredQuery.startAt=function(f){return{before:f.inclusive,values:f.position}}(t.startAt)),t.endAt&&(e.structuredQuery.endAt=function(f){return{before:!f.inclusive,values:f.position}}(t.endAt)),{ct:e,parent:s}}function ef(n){let t=Wd(n.parent);const e=n.structuredQuery,r=e.from?e.from.length:0;let s=null;if(r>0){H(r===1);const m=e.from[0];m.allDescendants?s=m.collectionId:t=t.child(m.collectionId)}let o=[];e.where&&(o=function(E){const A=bu(E);return A instanceof Ft&&iu(A)?A.getFilters():[A]}(e.where));let a=[];e.orderBy&&(a=function(E){return E.map(A=>function(D){return new dr(be(D.field),function(V){switch(V){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(D.direction))}(A))}(e.orderBy));let c=null;e.limit&&(c=function(E){let A;return A=typeof E=="object"?E.value:E,Cr(A)?null:A}(e.limit));let h=null;e.startAt&&(h=function(E){const A=!!E.before,C=E.values||[];return new hr(C,A)}(e.startAt));let f=null;return e.endAt&&(f=function(E){const A=!E.before,C=E.values||[];return new hr(C,A)}(e.endAt)),Ed(t,s,a,o,c,"F",h,f)}function nf(n,t){const e=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return O()}}(t.purpose);return e==null?null:{"goog-listen-tags":e}}function bu(n){return n.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const r=be(e.unaryFilter.field);return rt.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=be(e.unaryFilter.field);return rt.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=be(e.unaryFilter.field);return rt.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=be(e.unaryFilter.field);return rt.create(a,"!=",{nullValue:"NULL_VALUE"});default:return O()}}(n):n.fieldFilter!==void 0?function(e){return rt.create(be(e.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return O()}}(e.fieldFilter.op),e.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(e){return Ft.create(e.compositeFilter.filters.map(r=>bu(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return O()}}(e.compositeFilter.op))}(n):O()}function rf(n){return $d[n]}function sf(n){return Gd[n]}function of(n){return Kd[n]}function Pe(n){return{fieldPath:n.canonicalString()}}function be(n){return ct.fromServerFormat(n.fieldPath)}function Vu(n){return n instanceof rt?function(e){if(e.op==="=="){if(Jo(e.value))return{unaryFilter:{field:Pe(e.field),op:"IS_NAN"}};if(Yo(e.value))return{unaryFilter:{field:Pe(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(Jo(e.value))return{unaryFilter:{field:Pe(e.field),op:"IS_NOT_NAN"}};if(Yo(e.value))return{unaryFilter:{field:Pe(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Pe(e.field),op:sf(e.op),value:e.value}}}(n):n instanceof Ft?function(e){const r=e.getFilters().map(s=>Vu(s));return r.length===1?r[0]:{compositeFilter:{op:of(e.op),filters:r}}}(n):O()}function af(n){const t=[];return n.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}function Du(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
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
 */class Jt{constructor(t,e,r,s,o=L.min(),a=L.min(),c=lt.EMPTY_BYTE_STRING,h=null){this.target=t,this.targetId=e,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=o,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=c,this.expectedCount=h}withSequenceNumber(t){return new Jt(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new Jt(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new Jt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new Jt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
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
 */class uf{constructor(t){this.ht=t}}function cf(n){const t=ef({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Os(t,t.limit,"L"):t}/**
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
 */class lf{constructor(){this.ln=new hf}addToCollectionParentIndex(t,e){return this.ln.add(e),S.resolve()}getCollectionParents(t,e){return S.resolve(this.ln.getEntries(e))}addFieldIndex(t,e){return S.resolve()}deleteFieldIndex(t,e){return S.resolve()}deleteAllFieldIndexes(t){return S.resolve()}createTargetIndexes(t,e){return S.resolve()}getDocumentsMatchingTarget(t,e){return S.resolve(null)}getIndexType(t,e){return S.resolve(0)}getFieldIndexes(t,e){return S.resolve([])}getNextCollectionGroupToUpdate(t){return S.resolve(null)}getMinOffset(t,e){return S.resolve(re.min())}getMinOffsetFromCollectionGroup(t,e){return S.resolve(re.min())}updateCollectionGroup(t,e,r){return S.resolve()}updateIndexEntries(t,e){return S.resolve()}}class hf{constructor(){this.index={}}add(t){const e=t.lastSegment(),r=t.popLast(),s=this.index[e]||new it(Y.comparator),o=!s.has(r);return this.index[e]=s.add(r),o}has(t){const e=t.lastSegment(),r=t.popLast(),s=this.index[e];return s&&s.has(r)}getEntries(t){return(this.index[t]||new it(Y.comparator)).toArray()}}/**
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
 */const da={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class It{static withCacheSize(t){return new It(t,It.DEFAULT_COLLECTION_PERCENTILE,It.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(t,e,r){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=r}}/**
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
 */It.DEFAULT_COLLECTION_PERCENTILE=10,It.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,It.DEFAULT=new It(41943040,It.DEFAULT_COLLECTION_PERCENTILE,It.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),It.DISABLED=new It(-1,0,0);/**
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
 */class Oe{constructor(t){this.kn=t}next(){return this.kn+=2,this.kn}static qn(){return new Oe(0)}static Qn(){return new Oe(-1)}}/**
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
 */function fa([n,t],[e,r]){const s=U(n,e);return s===0?U(t,r):s}class df{constructor(t){this.Gn=t,this.buffer=new it(fa),this.zn=0}jn(){return++this.zn}Hn(t){const e=[t,this.jn()];if(this.buffer.size<this.Gn)this.buffer=this.buffer.add(e);else{const r=this.buffer.last();fa(e,r)<0&&(this.buffer=this.buffer.delete(r).add(e))}}get maxValue(){return this.buffer.last()[0]}}class ff{constructor(t,e,r){this.garbageCollector=t,this.asyncQueue=e,this.localStore=r,this.Jn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Yn(6e4)}stop(){this.Jn&&(this.Jn.cancel(),this.Jn=null)}get started(){return this.Jn!==null}Yn(t){x("LruGarbageCollector",`Garbage collection scheduled in ${t}ms`),this.Jn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",t,async()=>{this.Jn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(e){je(e)?x("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",e):await qe(e)}await this.Yn(3e5)})}}class mf{constructor(t,e){this.Zn=t,this.params=e}calculateTargetCount(t,e){return this.Zn.Xn(t).next(r=>Math.floor(e/100*r))}nthSequenceNumber(t,e){if(e===0)return S.resolve(Sr.oe);const r=new df(e);return this.Zn.forEachTarget(t,s=>r.Hn(s.sequenceNumber)).next(()=>this.Zn.er(t,s=>r.Hn(s))).next(()=>r.maxValue)}removeTargets(t,e,r){return this.Zn.removeTargets(t,e,r)}removeOrphanedDocuments(t,e){return this.Zn.removeOrphanedDocuments(t,e)}collect(t,e){return this.params.cacheSizeCollectionThreshold===-1?(x("LruGarbageCollector","Garbage collection skipped; disabled"),S.resolve(da)):this.getCacheSize(t).next(r=>r<this.params.cacheSizeCollectionThreshold?(x("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),da):this.tr(t,e))}getCacheSize(t){return this.Zn.getCacheSize(t)}tr(t,e){let r,s,o,a,c,h,f;const m=Date.now();return this.calculateTargetCount(t,this.params.percentileToCollect).next(E=>(E>this.params.maximumSequenceNumbersToCollect?(x("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${E}`),s=this.params.maximumSequenceNumbersToCollect):s=E,a=Date.now(),this.nthSequenceNumber(t,s))).next(E=>(r=E,c=Date.now(),this.removeTargets(t,r,e))).next(E=>(o=E,h=Date.now(),this.removeOrphanedDocuments(t,r))).next(E=>(f=Date.now(),Se()<=j.DEBUG&&x("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-m}ms
	Determined least recently used ${s} in `+(c-a)+`ms
	Removed ${o} targets in `+(h-c)+`ms
	Removed ${E} documents in `+(f-h)+`ms
Total Duration: ${f-m}ms`),S.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:o,documentsRemoved:E})))}}function pf(n,t){return new mf(n,t)}/**
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
 */class gf{constructor(){this.changes=new ve(t=>t.toString(),(t,e)=>t.isEqual(e)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,_t.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const r=this.changes.get(e);return r!==void 0?S.resolve(r):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
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
 */class _f{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}/**
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
 */class yf{constructor(t,e,r,s){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=r,this.indexManager=s}getDocument(t,e){let r=null;return this.documentOverlayCache.getOverlay(t,e).next(s=>(r=s,this.remoteDocumentCache.getEntry(t,e))).next(s=>(r!==null&&pn(r.mutation,s,bt.empty(),st.now()),s))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next(r=>this.getLocalViewOfDocuments(t,r,B()).next(()=>r))}getLocalViewOfDocuments(t,e,r=B()){const s=pe();return this.populateOverlays(t,s,e).next(()=>this.computeViews(t,e,s,r).next(o=>{let a=cn();return o.forEach((c,h)=>{a=a.insert(c,h.overlayedDocument)}),a}))}getOverlayedDocuments(t,e){const r=pe();return this.populateOverlays(t,r,e).next(()=>this.computeViews(t,e,r,B()))}populateOverlays(t,e,r){const s=[];return r.forEach(o=>{e.has(o)||s.push(o)}),this.documentOverlayCache.getOverlays(t,s).next(o=>{o.forEach((a,c)=>{e.set(a,c)})})}computeViews(t,e,r,s){let o=Gt();const a=mn(),c=function(){return mn()}();return e.forEach((h,f)=>{const m=r.get(f.key);s.has(f.key)&&(m===void 0||m.mutation instanceof ce)?o=o.insert(f.key,f):m!==void 0?(a.set(f.key,m.mutation.getFieldMask()),pn(m.mutation,f,m.mutation.getFieldMask(),st.now())):a.set(f.key,bt.empty())}),this.recalculateAndSaveOverlays(t,o).next(h=>(h.forEach((f,m)=>a.set(f,m)),e.forEach((f,m)=>{var E;return c.set(f,new _f(m,(E=a.get(f))!==null&&E!==void 0?E:null))}),c))}recalculateAndSaveOverlays(t,e){const r=mn();let s=new J((a,c)=>a-c),o=B();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next(a=>{for(const c of a)c.keys().forEach(h=>{const f=e.get(h);if(f===null)return;let m=r.get(h)||bt.empty();m=c.applyToLocalView(f,m),r.set(h,m);const E=(s.get(c.batchId)||B()).add(h);s=s.insert(c.batchId,E)})}).next(()=>{const a=[],c=s.getReverseIterator();for(;c.hasNext();){const h=c.getNext(),f=h.key,m=h.value,E=fu();m.forEach(A=>{if(!o.has(A)){const C=Eu(e.get(A),r.get(A));C!==null&&E.set(A,C),o=o.add(A)}}),a.push(this.documentOverlayCache.saveOverlays(t,f,E))}return S.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next(r=>this.recalculateAndSaveOverlays(t,r))}getDocumentsMatchingQuery(t,e,r,s){return function(a){return M.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):vd(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,r,s):this.getDocumentsMatchingCollectionQuery(t,e,r,s)}getNextDocuments(t,e,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,r,s).next(o=>{const a=s-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,r.largestBatchId,s-o.size):S.resolve(pe());let c=-1,h=o;return a.next(f=>S.forEach(f,(m,E)=>(c<E.largestBatchId&&(c=E.largestBatchId),o.get(m)?S.resolve():this.remoteDocumentCache.getEntry(t,m).next(A=>{h=h.insert(m,A)}))).next(()=>this.populateOverlays(t,f,o)).next(()=>this.computeViews(t,h,f,B())).next(m=>({batchId:c,changes:du(m)})))})}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new M(e)).next(r=>{let s=cn();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(t,e,r,s){const o=e.collectionGroup;let a=cn();return this.indexManager.getCollectionParents(t,o).next(c=>S.forEach(c,h=>{const f=function(E,A){return new br(A,null,E.explicitOrderBy.slice(),E.filters.slice(),E.limit,E.limitType,E.startAt,E.endAt)}(e,h.child(o));return this.getDocumentsMatchingCollectionQuery(t,f,r,s).next(m=>{m.forEach((E,A)=>{a=a.insert(E,A)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(t,e,r,s){let o;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,r.largestBatchId).next(a=>(o=a,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,r,o,s))).next(a=>{o.forEach((h,f)=>{const m=f.getKey();a.get(m)===null&&(a=a.insert(m,_t.newInvalidDocument(m)))});let c=cn();return a.forEach((h,f)=>{const m=o.get(h);m!==void 0&&pn(m.mutation,f,bt.empty(),st.now()),xr(e,f)&&(c=c.insert(h,f))}),c})}}/**
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
 */class Ef{constructor(t){this.serializer=t,this.Tr=new Map,this.Ir=new Map}getBundleMetadata(t,e){return S.resolve(this.Tr.get(e))}saveBundleMetadata(t,e){return this.Tr.set(e.id,function(s){return{id:s.id,version:s.version,createTime:Ot(s.createTime)}}(e)),S.resolve()}getNamedQuery(t,e){return S.resolve(this.Ir.get(e))}saveNamedQuery(t,e){return this.Ir.set(e.name,function(s){return{name:s.name,query:cf(s.bundledQuery),readTime:Ot(s.readTime)}}(e)),S.resolve()}}/**
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
 */class vf{constructor(){this.overlays=new J(M.comparator),this.Er=new Map}getOverlay(t,e){return S.resolve(this.overlays.get(e))}getOverlays(t,e){const r=pe();return S.forEach(e,s=>this.getOverlay(t,s).next(o=>{o!==null&&r.set(s,o)})).next(()=>r)}saveOverlays(t,e,r){return r.forEach((s,o)=>{this.Tt(t,e,o)}),S.resolve()}removeOverlaysForBatchId(t,e,r){const s=this.Er.get(r);return s!==void 0&&(s.forEach(o=>this.overlays=this.overlays.remove(o)),this.Er.delete(r)),S.resolve()}getOverlaysForCollection(t,e,r){const s=pe(),o=e.length+1,a=new M(e.child("")),c=this.overlays.getIteratorFrom(a);for(;c.hasNext();){const h=c.getNext().value,f=h.getKey();if(!e.isPrefixOf(f.path))break;f.path.length===o&&h.largestBatchId>r&&s.set(h.getKey(),h)}return S.resolve(s)}getOverlaysForCollectionGroup(t,e,r,s){let o=new J((f,m)=>f-m);const a=this.overlays.getIterator();for(;a.hasNext();){const f=a.getNext().value;if(f.getKey().getCollectionGroup()===e&&f.largestBatchId>r){let m=o.get(f.largestBatchId);m===null&&(m=pe(),o=o.insert(f.largestBatchId,m)),m.set(f.getKey(),f)}}const c=pe(),h=o.getIterator();for(;h.hasNext()&&(h.getNext().value.forEach((f,m)=>c.set(f,m)),!(c.size()>=s)););return S.resolve(c)}Tt(t,e,r){const s=this.overlays.get(r.key);if(s!==null){const a=this.Er.get(s.largestBatchId).delete(r.key);this.Er.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new Fd(e,r));let o=this.Er.get(e);o===void 0&&(o=B(),this.Er.set(e,o)),this.Er.set(e,o.add(r.key))}}/**
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
 */class Tf{constructor(){this.sessionToken=lt.EMPTY_BYTE_STRING}getSessionToken(t){return S.resolve(this.sessionToken)}setSessionToken(t,e){return this.sessionToken=e,S.resolve()}}/**
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
 */class ii{constructor(){this.dr=new it(ot.Ar),this.Rr=new it(ot.Vr)}isEmpty(){return this.dr.isEmpty()}addReference(t,e){const r=new ot(t,e);this.dr=this.dr.add(r),this.Rr=this.Rr.add(r)}mr(t,e){t.forEach(r=>this.addReference(r,e))}removeReference(t,e){this.gr(new ot(t,e))}pr(t,e){t.forEach(r=>this.removeReference(r,e))}yr(t){const e=new M(new Y([])),r=new ot(e,t),s=new ot(e,t+1),o=[];return this.Rr.forEachInRange([r,s],a=>{this.gr(a),o.push(a.key)}),o}wr(){this.dr.forEach(t=>this.gr(t))}gr(t){this.dr=this.dr.delete(t),this.Rr=this.Rr.delete(t)}Sr(t){const e=new M(new Y([])),r=new ot(e,t),s=new ot(e,t+1);let o=B();return this.Rr.forEachInRange([r,s],a=>{o=o.add(a.key)}),o}containsKey(t){const e=new ot(t,0),r=this.dr.firstAfterOrEqual(e);return r!==null&&t.isEqual(r.key)}}class ot{constructor(t,e){this.key=t,this.br=e}static Ar(t,e){return M.comparator(t.key,e.key)||U(t.br,e.br)}static Vr(t,e){return U(t.br,e.br)||M.comparator(t.key,e.key)}}/**
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
 */class If{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.Dr=1,this.vr=new it(ot.Ar)}checkEmpty(t){return S.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,r,s){const o=this.Dr;this.Dr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new Ld(o,e,r,s);this.mutationQueue.push(a);for(const c of s)this.vr=this.vr.add(new ot(c.key,o)),this.indexManager.addToCollectionParentIndex(t,c.key.path.popLast());return S.resolve(a)}lookupMutationBatch(t,e){return S.resolve(this.Cr(e))}getNextMutationBatchAfterBatchId(t,e){const r=e+1,s=this.Fr(r),o=s<0?0:s;return S.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return S.resolve(this.mutationQueue.length===0?-1:this.Dr-1)}getAllMutationBatches(t){return S.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const r=new ot(e,0),s=new ot(e,Number.POSITIVE_INFINITY),o=[];return this.vr.forEachInRange([r,s],a=>{const c=this.Cr(a.br);o.push(c)}),S.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(t,e){let r=new it(U);return e.forEach(s=>{const o=new ot(s,0),a=new ot(s,Number.POSITIVE_INFINITY);this.vr.forEachInRange([o,a],c=>{r=r.add(c.br)})}),S.resolve(this.Mr(r))}getAllMutationBatchesAffectingQuery(t,e){const r=e.path,s=r.length+1;let o=r;M.isDocumentKey(o)||(o=o.child(""));const a=new ot(new M(o),0);let c=new it(U);return this.vr.forEachWhile(h=>{const f=h.key.path;return!!r.isPrefixOf(f)&&(f.length===s&&(c=c.add(h.br)),!0)},a),S.resolve(this.Mr(c))}Mr(t){const e=[];return t.forEach(r=>{const s=this.Cr(r);s!==null&&e.push(s)}),e}removeMutationBatch(t,e){H(this.Or(e.batchId,"removed")===0),this.mutationQueue.shift();let r=this.vr;return S.forEach(e.mutations,s=>{const o=new ot(s.key,e.batchId);return r=r.delete(o),this.referenceDelegate.markPotentiallyOrphaned(t,s.key)}).next(()=>{this.vr=r})}Ln(t){}containsKey(t,e){const r=new ot(e,0),s=this.vr.firstAfterOrEqual(r);return S.resolve(e.isEqual(s&&s.key))}performConsistencyCheck(t){return this.mutationQueue.length,S.resolve()}Or(t,e){return this.Fr(t)}Fr(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Cr(t){const e=this.Fr(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
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
 */class wf{constructor(t){this.Nr=t,this.docs=function(){return new J(M.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const r=e.key,s=this.docs.get(r),o=s?s.size:0,a=this.Nr(e);return this.docs=this.docs.insert(r,{document:e.mutableCopy(),size:a}),this.size+=a-o,this.indexManager.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const r=this.docs.get(e);return S.resolve(r?r.document.mutableCopy():_t.newInvalidDocument(e))}getEntries(t,e){let r=Gt();return e.forEach(s=>{const o=this.docs.get(s);r=r.insert(s,o?o.document.mutableCopy():_t.newInvalidDocument(s))}),S.resolve(r)}getDocumentsMatchingQuery(t,e,r,s){let o=Gt();const a=e.path,c=new M(a.child("")),h=this.docs.getIteratorFrom(c);for(;h.hasNext();){const{key:f,value:{document:m}}=h.getNext();if(!a.isPrefixOf(f.path))break;f.path.length>a.length+1||Jh(Yh(m),r)<=0||(s.has(m.key)||xr(e,m))&&(o=o.insert(m.key,m.mutableCopy()))}return S.resolve(o)}getAllFromCollectionGroup(t,e,r,s){O()}Lr(t,e){return S.forEach(this.docs,r=>e(r))}newChangeBuffer(t){return new Af(this)}getSize(t){return S.resolve(this.size)}}class Af extends gf{constructor(t){super(),this.hr=t}applyChanges(t){const e=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?e.push(this.hr.addEntry(t,s)):this.hr.removeEntry(r)}),S.waitFor(e)}getFromCache(t,e){return this.hr.getEntry(t,e)}getAllFromCache(t,e){return this.hr.getEntries(t,e)}}/**
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
 */class Rf{constructor(t){this.persistence=t,this.Br=new ve(e=>Zs(e),ti),this.lastRemoteSnapshotVersion=L.min(),this.highestTargetId=0,this.kr=0,this.qr=new ii,this.targetCount=0,this.Qr=Oe.qn()}forEachTarget(t,e){return this.Br.forEach((r,s)=>e(s)),S.resolve()}getLastRemoteSnapshotVersion(t){return S.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return S.resolve(this.kr)}allocateTargetId(t){return this.highestTargetId=this.Qr.next(),S.resolve(this.highestTargetId)}setTargetsMetadata(t,e,r){return r&&(this.lastRemoteSnapshotVersion=r),e>this.kr&&(this.kr=e),S.resolve()}Un(t){this.Br.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.Qr=new Oe(e),this.highestTargetId=e),t.sequenceNumber>this.kr&&(this.kr=t.sequenceNumber)}addTargetData(t,e){return this.Un(e),this.targetCount+=1,S.resolve()}updateTargetData(t,e){return this.Un(e),S.resolve()}removeTargetData(t,e){return this.Br.delete(e.target),this.qr.yr(e.targetId),this.targetCount-=1,S.resolve()}removeTargets(t,e,r){let s=0;const o=[];return this.Br.forEach((a,c)=>{c.sequenceNumber<=e&&r.get(c.targetId)===null&&(this.Br.delete(a),o.push(this.removeMatchingKeysForTargetId(t,c.targetId)),s++)}),S.waitFor(o).next(()=>s)}getTargetCount(t){return S.resolve(this.targetCount)}getTargetData(t,e){const r=this.Br.get(e)||null;return S.resolve(r)}addMatchingKeys(t,e,r){return this.qr.mr(e,r),S.resolve()}removeMatchingKeys(t,e,r){this.qr.pr(e,r);const s=this.persistence.referenceDelegate,o=[];return s&&e.forEach(a=>{o.push(s.markPotentiallyOrphaned(t,a))}),S.waitFor(o)}removeMatchingKeysForTargetId(t,e){return this.qr.yr(e),S.resolve()}getMatchingKeysForTargetId(t,e){const r=this.qr.Sr(e);return S.resolve(r)}containsKey(t,e){return S.resolve(this.qr.containsKey(e))}}/**
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
 */class xu{constructor(t,e){this.Kr={},this.overlays={},this.$r=new Sr(0),this.Ur=!1,this.Ur=!0,this.Wr=new Tf,this.referenceDelegate=t(this),this.Gr=new Rf(this),this.indexManager=new lf,this.remoteDocumentCache=function(s){return new wf(s)}(r=>this.referenceDelegate.zr(r)),this.serializer=new uf(e),this.jr=new Ef(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Ur=!1,Promise.resolve()}get started(){return this.Ur}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new vf,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let r=this.Kr[t.toKey()];return r||(r=new If(e,this.referenceDelegate),this.Kr[t.toKey()]=r),r}getGlobalsCache(){return this.Wr}getTargetCache(){return this.Gr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.jr}runTransaction(t,e,r){x("MemoryPersistence","Starting transaction:",t);const s=new Sf(this.$r.next());return this.referenceDelegate.Hr(),r(s).next(o=>this.referenceDelegate.Jr(s).next(()=>o)).toPromise().then(o=>(s.raiseOnCommittedEvent(),o))}Yr(t,e){return S.or(Object.values(this.Kr).map(r=>()=>r.containsKey(t,e)))}}class Sf extends td{constructor(t){super(),this.currentSequenceNumber=t}}class oi{constructor(t){this.persistence=t,this.Zr=new ii,this.Xr=null}static ei(t){return new oi(t)}get ti(){if(this.Xr)return this.Xr;throw O()}addReference(t,e,r){return this.Zr.addReference(r,e),this.ti.delete(r.toString()),S.resolve()}removeReference(t,e,r){return this.Zr.removeReference(r,e),this.ti.add(r.toString()),S.resolve()}markPotentiallyOrphaned(t,e){return this.ti.add(e.toString()),S.resolve()}removeTarget(t,e){this.Zr.yr(e.targetId).forEach(s=>this.ti.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(t,e.targetId).next(s=>{s.forEach(o=>this.ti.add(o.toString()))}).next(()=>r.removeTargetData(t,e))}Hr(){this.Xr=new Set}Jr(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return S.forEach(this.ti,r=>{const s=M.fromPath(r);return this.ni(t,s).next(o=>{o||e.removeEntry(s,L.min())})}).next(()=>(this.Xr=null,e.apply(t)))}updateLimboDocument(t,e){return this.ni(t,e).next(r=>{r?this.ti.delete(e.toString()):this.ti.add(e.toString())})}zr(t){return 0}ni(t,e){return S.or([()=>S.resolve(this.Zr.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Yr(t,e)])}}class gr{constructor(t,e){this.persistence=t,this.ri=new ve(r=>rd(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=pf(this,e)}static ei(t,e){return new gr(t,e)}Hr(){}Jr(t){return S.resolve()}forEachTarget(t,e){return this.persistence.getTargetCache().forEachTarget(t,e)}Xn(t){const e=this.nr(t);return this.persistence.getTargetCache().getTargetCount(t).next(r=>e.next(s=>r+s))}nr(t){let e=0;return this.er(t,r=>{e++}).next(()=>e)}er(t,e){return S.forEach(this.ri,(r,s)=>this.ir(t,r,s).next(o=>o?S.resolve():e(s)))}removeTargets(t,e,r){return this.persistence.getTargetCache().removeTargets(t,e,r)}removeOrphanedDocuments(t,e){let r=0;const s=this.persistence.getRemoteDocumentCache(),o=s.newChangeBuffer();return s.Lr(t,a=>this.ir(t,a,e).next(c=>{c||(r++,o.removeEntry(a,L.min()))})).next(()=>o.apply(t)).next(()=>r)}markPotentiallyOrphaned(t,e){return this.ri.set(e,t.currentSequenceNumber),S.resolve()}removeTarget(t,e){const r=e.withSequenceNumber(t.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(t,r)}addReference(t,e,r){return this.ri.set(r,t.currentSequenceNumber),S.resolve()}removeReference(t,e,r){return this.ri.set(r,t.currentSequenceNumber),S.resolve()}updateLimboDocument(t,e){return this.ri.set(e,t.currentSequenceNumber),S.resolve()}zr(t){let e=t.key.toString().length;return t.isFoundDocument()&&(e+=er(t.data.value)),e}ir(t,e,r){return S.or([()=>this.persistence.Yr(t,e),()=>this.persistence.getTargetCache().containsKey(t,e),()=>{const s=this.ri.get(e);return S.resolve(s!==void 0&&s>r)}])}getCacheSize(t){return this.persistence.getRemoteDocumentCache().getSize(t)}}/**
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
 */class ai{constructor(t,e,r,s){this.targetId=t,this.fromCache=e,this.Wi=r,this.Gi=s}static zi(t,e){let r=B(),s=B();for(const o of e.docChanges)switch(o.type){case 0:r=r.add(o.doc.key);break;case 1:s=s.add(o.doc.key)}return new ai(t,e.fromCache,r,s)}}/**
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
 */class Cf{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
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
 */class Pf{constructor(){this.ji=!1,this.Hi=!1,this.Ji=100,this.Yi=function(){return wl()?8:ed(Tl())>0?6:4}()}initialize(t,e){this.Zi=t,this.indexManager=e,this.ji=!0}getDocumentsMatchingQuery(t,e,r,s){const o={result:null};return this.Xi(t,e).next(a=>{o.result=a}).next(()=>{if(!o.result)return this.es(t,e,s,r).next(a=>{o.result=a})}).next(()=>{if(o.result)return;const a=new Cf;return this.ts(t,e,a).next(c=>{if(o.result=c,this.Hi)return this.ns(t,e,a,c.size)})}).next(()=>o.result)}ns(t,e,r,s){return r.documentReadCount<this.Ji?(Se()<=j.DEBUG&&x("QueryEngine","SDK will not create cache indexes for query:",Ce(e),"since it only creates cache indexes for collection contains","more than or equal to",this.Ji,"documents"),S.resolve()):(Se()<=j.DEBUG&&x("QueryEngine","Query:",Ce(e),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Yi*s?(Se()<=j.DEBUG&&x("QueryEngine","The SDK decides to create cache indexes for query:",Ce(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,Mt(e))):S.resolve())}Xi(t,e){if(na(e))return S.resolve(null);let r=Mt(e);return this.indexManager.getIndexType(t,r).next(s=>s===0?null:(e.limit!==null&&s===1&&(e=Os(e,null,"F"),r=Mt(e)),this.indexManager.getDocumentsMatchingTarget(t,r).next(o=>{const a=B(...o);return this.Zi.getDocuments(t,a).next(c=>this.indexManager.getMinOffset(t,r).next(h=>{const f=this.rs(e,c);return this.ss(e,f,a,h.readTime)?this.Xi(t,Os(e,null,"F")):this.os(t,f,e,h)}))})))}es(t,e,r,s){return na(e)||s.isEqual(L.min())?S.resolve(null):this.Zi.getDocuments(t,r).next(o=>{const a=this.rs(e,o);return this.ss(e,a,r,s)?S.resolve(null):(Se()<=j.DEBUG&&x("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Ce(e)),this.os(t,a,e,Xh(s,-1)).next(c=>c))})}rs(t,e){let r=new it(lu(t));return e.forEach((s,o)=>{xr(t,o)&&(r=r.add(o))}),r}ss(t,e,r,s){if(t.limit===null)return!1;if(r.size!==e.size)return!0;const o=t.limitType==="F"?e.last():e.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(s)>0)}ts(t,e,r){return Se()<=j.DEBUG&&x("QueryEngine","Using full collection scan to execute query:",Ce(e)),this.Zi.getDocumentsMatchingQuery(t,e,re.min(),r)}os(t,e,r,s){return this.Zi.getDocumentsMatchingQuery(t,r,s).next(o=>(e.forEach(a=>{o=o.insert(a.key,a)}),o))}}/**
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
 */class bf{constructor(t,e,r,s){this.persistence=t,this._s=e,this.serializer=s,this.us=new J(U),this.cs=new ve(o=>Zs(o),ti),this.ls=new Map,this.hs=t.getRemoteDocumentCache(),this.Gr=t.getTargetCache(),this.jr=t.getBundleCache(),this.Ps(r)}Ps(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new yf(this.hs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.hs.setIndexManager(this.indexManager),this._s.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",e=>t.collect(e,this.us))}}function Vf(n,t,e,r){return new bf(n,t,e,r)}async function ku(n,t){const e=F(n);return await e.persistence.runTransaction("Handle user change","readonly",r=>{let s;return e.mutationQueue.getAllMutationBatches(r).next(o=>(s=o,e.Ps(t),e.mutationQueue.getAllMutationBatches(r))).next(o=>{const a=[],c=[];let h=B();for(const f of s){a.push(f.batchId);for(const m of f.mutations)h=h.add(m.key)}for(const f of o){c.push(f.batchId);for(const m of f.mutations)h=h.add(m.key)}return e.localDocuments.getDocuments(r,h).next(f=>({Ts:f,removedBatchIds:a,addedBatchIds:c}))})})}function Df(n,t){const e=F(n);return e.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=t.batch.keys(),o=e.hs.newChangeBuffer({trackRemovals:!0});return function(c,h,f,m){const E=f.batch,A=E.keys();let C=S.resolve();return A.forEach(D=>{C=C.next(()=>m.getEntry(h,D)).next(k=>{const V=f.docVersions.get(D);H(V!==null),k.version.compareTo(V)<0&&(E.applyToRemoteDocument(k,f),k.isValidDocument()&&(k.setReadTime(f.commitVersion),m.addEntry(k)))})}),C.next(()=>c.mutationQueue.removeMutationBatch(h,E))}(e,r,t,o).next(()=>o.apply(r)).next(()=>e.mutationQueue.performConsistencyCheck(r)).next(()=>e.documentOverlayCache.removeOverlaysForBatchId(r,s,t.batch.batchId)).next(()=>e.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(c){let h=B();for(let f=0;f<c.mutationResults.length;++f)c.mutationResults[f].transformResults.length>0&&(h=h.add(c.batch.mutations[f].key));return h}(t))).next(()=>e.localDocuments.getDocuments(r,s))})}function Nu(n){const t=F(n);return t.persistence.runTransaction("Get last remote snapshot version","readonly",e=>t.Gr.getLastRemoteSnapshotVersion(e))}function xf(n,t){const e=F(n),r=t.snapshotVersion;let s=e.us;return e.persistence.runTransaction("Apply remote event","readwrite-primary",o=>{const a=e.hs.newChangeBuffer({trackRemovals:!0});s=e.us;const c=[];t.targetChanges.forEach((m,E)=>{const A=s.get(E);if(!A)return;c.push(e.Gr.removeMatchingKeys(o,m.removedDocuments,E).next(()=>e.Gr.addMatchingKeys(o,m.addedDocuments,E)));let C=A.withSequenceNumber(o.currentSequenceNumber);t.targetMismatches.get(E)!==null?C=C.withResumeToken(lt.EMPTY_BYTE_STRING,L.min()).withLastLimboFreeSnapshotVersion(L.min()):m.resumeToken.approximateByteSize()>0&&(C=C.withResumeToken(m.resumeToken,r)),s=s.insert(E,C),function(k,V,z){return k.resumeToken.approximateByteSize()===0||V.snapshotVersion.toMicroseconds()-k.snapshotVersion.toMicroseconds()>=3e8?!0:z.addedDocuments.size+z.modifiedDocuments.size+z.removedDocuments.size>0}(A,C,m)&&c.push(e.Gr.updateTargetData(o,C))});let h=Gt(),f=B();if(t.documentUpdates.forEach(m=>{t.resolvedLimboDocuments.has(m)&&c.push(e.persistence.referenceDelegate.updateLimboDocument(o,m))}),c.push(kf(o,a,t.documentUpdates).next(m=>{h=m.Is,f=m.Es})),!r.isEqual(L.min())){const m=e.Gr.getLastRemoteSnapshotVersion(o).next(E=>e.Gr.setTargetsMetadata(o,o.currentSequenceNumber,r));c.push(m)}return S.waitFor(c).next(()=>a.apply(o)).next(()=>e.localDocuments.getLocalViewOfDocuments(o,h,f)).next(()=>h)}).then(o=>(e.us=s,o))}function kf(n,t,e){let r=B(),s=B();return e.forEach(o=>r=r.add(o)),t.getEntries(n,r).next(o=>{let a=Gt();return e.forEach((c,h)=>{const f=o.get(c);h.isFoundDocument()!==f.isFoundDocument()&&(s=s.add(c)),h.isNoDocument()&&h.version.isEqual(L.min())?(t.removeEntry(c,h.readTime),a=a.insert(c,h)):!f.isValidDocument()||h.version.compareTo(f.version)>0||h.version.compareTo(f.version)===0&&f.hasPendingWrites?(t.addEntry(h),a=a.insert(c,h)):x("LocalStore","Ignoring outdated watch update for ",c,". Current version:",f.version," Watch version:",h.version)}),{Is:a,Es:s}})}function Nf(n,t){const e=F(n);return e.persistence.runTransaction("Get next mutation batch","readonly",r=>(t===void 0&&(t=-1),e.mutationQueue.getNextMutationBatchAfterBatchId(r,t)))}function Mf(n,t){const e=F(n);return e.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return e.Gr.getTargetData(r,t).next(o=>o?(s=o,S.resolve(s)):e.Gr.allocateTargetId(r).next(a=>(s=new Jt(t,a,"TargetPurposeListen",r.currentSequenceNumber),e.Gr.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=e.us.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(e.us=e.us.insert(r.targetId,r),e.cs.set(t,r.targetId)),r})}async function qs(n,t,e){const r=F(n),s=r.us.get(t),o=e?"readwrite":"readwrite-primary";try{e||await r.persistence.runTransaction("Release target",o,a=>r.persistence.referenceDelegate.removeTarget(a,s))}catch(a){if(!je(a))throw a;x("LocalStore",`Failed to update sequence numbers for target ${t}: ${a}`)}r.us=r.us.remove(t),r.cs.delete(s.target)}function ma(n,t,e){const r=F(n);let s=L.min(),o=B();return r.persistence.runTransaction("Execute query","readwrite",a=>function(h,f,m){const E=F(h),A=E.cs.get(m);return A!==void 0?S.resolve(E.us.get(A)):E.Gr.getTargetData(f,m)}(r,a,Mt(t)).next(c=>{if(c)return s=c.lastLimboFreeSnapshotVersion,r.Gr.getMatchingKeysForTargetId(a,c.targetId).next(h=>{o=h})}).next(()=>r._s.getDocumentsMatchingQuery(a,t,e?s:L.min(),e?o:B())).next(c=>(Of(r,Id(t),c),{documents:c,ds:o})))}function Of(n,t,e){let r=n.ls.get(t)||L.min();e.forEach((s,o)=>{o.readTime.compareTo(r)>0&&(r=o.readTime)}),n.ls.set(t,r)}class pa{constructor(){this.activeTargetIds=Pd()}ps(t){this.activeTargetIds=this.activeTargetIds.add(t)}ys(t){this.activeTargetIds=this.activeTargetIds.delete(t)}gs(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class Lf{constructor(){this._o=new pa,this.ao={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,r){}addLocalQueryTarget(t,e=!0){return e&&this._o.ps(t),this.ao[t]||"not-current"}updateQueryState(t,e,r){this.ao[t]=e}removeLocalQueryTarget(t){this._o.ys(t)}isLocalQueryTarget(t){return this._o.activeTargetIds.has(t)}clearQueryState(t){delete this.ao[t]}getAllActiveQueryTargets(){return this._o.activeTargetIds}isActiveQueryTarget(t){return this._o.activeTargetIds.has(t)}start(){return this._o=new pa,Promise.resolve()}handleUserChange(t,e,r){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
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
 */class Ff{uo(t){}shutdown(){}}/**
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
 */class ga{constructor(){this.co=()=>this.lo(),this.ho=()=>this.Po(),this.To=[],this.Io()}uo(t){this.To.push(t)}shutdown(){window.removeEventListener("online",this.co),window.removeEventListener("offline",this.ho)}Io(){window.addEventListener("online",this.co),window.addEventListener("offline",this.ho)}lo(){x("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.To)t(0)}Po(){x("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.To)t(1)}static p(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Zn=null;function Ts(){return Zn===null?Zn=function(){return 268435456+Math.round(2147483648*Math.random())}():Zn++,"0x"+Zn.toString(16)}/**
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
 */const Bf={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class Uf{constructor(t){this.Eo=t.Eo,this.Ao=t.Ao}Ro(t){this.Vo=t}mo(t){this.fo=t}po(t){this.yo=t}onMessage(t){this.wo=t}close(){this.Ao()}send(t){this.Eo(t)}So(){this.Vo()}bo(){this.fo()}Do(t){this.yo(t)}vo(t){this.wo(t)}}/**
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
 */const pt="WebChannelConnection";class qf extends class{get Co(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const r=e.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.Fo=r+"://"+e.host,this.Mo=`projects/${s}/databases/${o}`,this.xo=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${o}`}Oo(e,r,s,o,a){const c=Ts(),h=this.No(e,r.toUriEncodedString());x("RestConnection",`Sending RPC '${e}' ${c}:`,h,s);const f={"google-cloud-resource-prefix":this.Mo,"x-goog-request-params":this.xo};return this.Lo(f,o,a),this.Bo(e,h,f,s).then(m=>(x("RestConnection",`Received RPC '${e}' ${c}: `,m),m),m=>{throw xe("RestConnection",`RPC '${e}' ${c} failed with error: `,m,"url: ",h,"request:",s),m})}ko(e,r,s,o,a,c){return this.Oo(e,r,s,o,a)}Lo(e,r,s){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Ue}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((o,a)=>e[a]=o),s&&s.headers.forEach((o,a)=>e[a]=o)}No(e,r){const s=Bf[e];return`${this.Fo}/v1/${r}:${s}`}terminate(){}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}Bo(t,e,r,s){const o=Ts();return new Promise((a,c)=>{const h=new Ha;h.setWithCredentials(!0),h.listenOnce(Qa.COMPLETE,()=>{try{switch(h.getLastErrorCode()){case tr.NO_ERROR:const m=h.getResponseJson();x(pt,`XHR for RPC '${t}' ${o} received:`,JSON.stringify(m)),a(m);break;case tr.TIMEOUT:x(pt,`RPC '${t}' ${o} timed out`),c(new N(P.DEADLINE_EXCEEDED,"Request time out"));break;case tr.HTTP_ERROR:const E=h.getStatus();if(x(pt,`RPC '${t}' ${o} failed with status:`,E,"response text:",h.getResponseText()),E>0){let A=h.getResponseJson();Array.isArray(A)&&(A=A[0]);const C=A==null?void 0:A.error;if(C&&C.status&&C.message){const D=function(V){const z=V.toLowerCase().replace(/_/g,"-");return Object.values(P).indexOf(z)>=0?z:P.UNKNOWN}(C.status);c(new N(D,C.message))}else c(new N(P.UNKNOWN,"Server responded with status "+h.getStatus()))}else c(new N(P.UNAVAILABLE,"Connection failed."));break;default:O()}}finally{x(pt,`RPC '${t}' ${o} completed.`)}});const f=JSON.stringify(s);x(pt,`RPC '${t}' ${o} sending request:`,s),h.send(e,"POST",f,r,15)})}qo(t,e,r){const s=Ts(),o=[this.Fo,"/","google.firestore.v1.Firestore","/",t,"/channel"],a=Ya(),c=Xa(),h={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},f=this.longPollingOptions.timeoutSeconds;f!==void 0&&(h.longPollingTimeout=Math.round(1e3*f)),this.useFetchStreams&&(h.useFetchStreams=!0),this.Lo(h.initMessageHeaders,e,r),h.encodeInitMessageHeaders=!0;const m=o.join("");x(pt,`Creating RPC '${t}' stream ${s}: ${m}`,h);const E=a.createWebChannel(m,h);let A=!1,C=!1;const D=new Uf({Eo:V=>{C?x(pt,`Not sending because RPC '${t}' stream ${s} is closed:`,V):(A||(x(pt,`Opening RPC '${t}' stream ${s} transport.`),E.open(),A=!0),x(pt,`RPC '${t}' stream ${s} sending:`,V),E.send(V))},Ao:()=>E.close()}),k=(V,z,G)=>{V.listen(z,K=>{try{G(K)}catch(W){setTimeout(()=>{throw W},0)}})};return k(E,un.EventType.OPEN,()=>{C||(x(pt,`RPC '${t}' stream ${s} transport opened.`),D.So())}),k(E,un.EventType.CLOSE,()=>{C||(C=!0,x(pt,`RPC '${t}' stream ${s} transport closed`),D.Do())}),k(E,un.EventType.ERROR,V=>{C||(C=!0,xe(pt,`RPC '${t}' stream ${s} transport errored:`,V),D.Do(new N(P.UNAVAILABLE,"The operation could not be completed")))}),k(E,un.EventType.MESSAGE,V=>{var z;if(!C){const G=V.data[0];H(!!G);const K=G,W=(K==null?void 0:K.error)||((z=K[0])===null||z===void 0?void 0:z.error);if(W){x(pt,`RPC '${t}' stream ${s} received error:`,W);const yt=W.status;let tt=function(_){const y=nt[_];if(y!==void 0)return Iu(y)}(yt),T=W.message;tt===void 0&&(tt=P.INTERNAL,T="Unknown error status: "+yt+" with message "+W.message),C=!0,D.Do(new N(tt,T)),E.close()}else x(pt,`RPC '${t}' stream ${s} received:`,G),D.vo(G)}}),k(c,Wa.STAT_EVENT,V=>{V.stat===Ds.PROXY?x(pt,`RPC '${t}' stream ${s} detected buffering proxy`):V.stat===Ds.NOPROXY&&x(pt,`RPC '${t}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{D.bo()},0),D}}function Is(){return typeof document<"u"?document:null}/**
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
 */function Or(n){return new Hd(n,!0)}/**
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
 */class Mu{constructor(t,e,r=1e3,s=1.5,o=6e4){this.li=t,this.timerId=e,this.Qo=r,this.Ko=s,this.$o=o,this.Uo=0,this.Wo=null,this.Go=Date.now(),this.reset()}reset(){this.Uo=0}zo(){this.Uo=this.$o}jo(t){this.cancel();const e=Math.floor(this.Uo+this.Ho()),r=Math.max(0,Date.now()-this.Go),s=Math.max(0,e-r);s>0&&x("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Uo} ms, delay with jitter: ${e} ms, last attempt: ${r} ms ago)`),this.Wo=this.li.enqueueAfterDelay(this.timerId,s,()=>(this.Go=Date.now(),t())),this.Uo*=this.Ko,this.Uo<this.Qo&&(this.Uo=this.Qo),this.Uo>this.$o&&(this.Uo=this.$o)}Jo(){this.Wo!==null&&(this.Wo.skipDelay(),this.Wo=null)}cancel(){this.Wo!==null&&(this.Wo.cancel(),this.Wo=null)}Ho(){return(Math.random()-.5)*this.Uo}}/**
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
 */class Ou{constructor(t,e,r,s,o,a,c,h){this.li=t,this.Yo=r,this.Zo=s,this.connection=o,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=c,this.listener=h,this.state=0,this.Xo=0,this.e_=null,this.t_=null,this.stream=null,this.n_=0,this.r_=new Mu(t,e)}i_(){return this.state===1||this.state===5||this.s_()}s_(){return this.state===2||this.state===3}start(){this.n_=0,this.state!==4?this.auth():this.o_()}async stop(){this.i_()&&await this.close(0)}__(){this.state=0,this.r_.reset()}a_(){this.s_()&&this.e_===null&&(this.e_=this.li.enqueueAfterDelay(this.Yo,6e4,()=>this.u_()))}c_(t){this.l_(),this.stream.send(t)}async u_(){if(this.s_())return this.close(0)}l_(){this.e_&&(this.e_.cancel(),this.e_=null)}h_(){this.t_&&(this.t_.cancel(),this.t_=null)}async close(t,e){this.l_(),this.h_(),this.r_.cancel(),this.Xo++,t!==4?this.r_.reset():e&&e.code===P.RESOURCE_EXHAUSTED?($t(e.toString()),$t("Using maximum backoff delay to prevent overloading the backend."),this.r_.zo()):e&&e.code===P.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.P_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.po(e)}P_(){}auth(){this.state=1;const t=this.T_(this.Xo),e=this.Xo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Xo===e&&this.I_(r,s)},r=>{t(()=>{const s=new N(P.UNKNOWN,"Fetching auth token failed: "+r.message);return this.E_(s)})})}I_(t,e){const r=this.T_(this.Xo);this.stream=this.d_(t,e),this.stream.Ro(()=>{r(()=>this.listener.Ro())}),this.stream.mo(()=>{r(()=>(this.state=2,this.t_=this.li.enqueueAfterDelay(this.Zo,1e4,()=>(this.s_()&&(this.state=3),Promise.resolve())),this.listener.mo()))}),this.stream.po(s=>{r(()=>this.E_(s))}),this.stream.onMessage(s=>{r(()=>++this.n_==1?this.A_(s):this.onNext(s))})}o_(){this.state=5,this.r_.jo(async()=>{this.state=0,this.start()})}E_(t){return x("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}T_(t){return e=>{this.li.enqueueAndForget(()=>this.Xo===t?e():(x("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class jf extends Ou{constructor(t,e,r,s,o,a){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,r,s,a),this.serializer=o}d_(t,e){return this.connection.qo("Listen",t,e)}A_(t){return this.onNext(t)}onNext(t){this.r_.reset();const e=Xd(this.serializer,t),r=function(o){if(!("targetChange"in o))return L.min();const a=o.targetChange;return a.targetIds&&a.targetIds.length?L.min():a.readTime?Ot(a.readTime):L.min()}(t);return this.listener.R_(e,r)}V_(t){const e={};e.database=Us(this.serializer),e.addTarget=function(o,a){let c;const h=a.target;if(c=Ms(h)?{documents:Zd(o,h)}:{query:tf(o,h).ct},c.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){c.resumeToken=Ru(o,a.resumeToken);const f=Ls(o,a.expectedCount);f!==null&&(c.expectedCount=f)}else if(a.snapshotVersion.compareTo(L.min())>0){c.readTime=pr(o,a.snapshotVersion.toTimestamp());const f=Ls(o,a.expectedCount);f!==null&&(c.expectedCount=f)}return c}(this.serializer,t);const r=nf(this.serializer,t);r&&(e.labels=r),this.c_(e)}m_(t){const e={};e.database=Us(this.serializer),e.removeTarget=t,this.c_(e)}}class zf extends Ou{constructor(t,e,r,s,o,a){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,r,s,a),this.serializer=o}get f_(){return this.n_>0}start(){this.lastStreamToken=void 0,super.start()}P_(){this.f_&&this.g_([])}d_(t,e){return this.connection.qo("Write",t,e)}A_(t){return H(!!t.streamToken),this.lastStreamToken=t.streamToken,H(!t.writeResults||t.writeResults.length===0),this.listener.p_()}onNext(t){H(!!t.streamToken),this.lastStreamToken=t.streamToken,this.r_.reset();const e=Jd(t.writeResults,t.commitTime),r=Ot(t.commitTime);return this.listener.y_(r,e)}w_(){const t={};t.database=Us(this.serializer),this.c_(t)}g_(t){const e={streamToken:this.lastStreamToken,writes:t.map(r=>Yd(this.serializer,r))};this.c_(e)}}/**
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
 */class $f extends class{}{constructor(t,e,r,s){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=r,this.serializer=s,this.S_=!1}b_(){if(this.S_)throw new N(P.FAILED_PRECONDITION,"The client has already been terminated.")}Oo(t,e,r,s){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.Oo(t,Fs(e,r),s,o,a)).catch(o=>{throw o.name==="FirebaseError"?(o.code===P.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new N(P.UNKNOWN,o.toString())})}ko(t,e,r,s,o){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,c])=>this.connection.ko(t,Fs(e,r),s,a,c,o)).catch(a=>{throw a.name==="FirebaseError"?(a.code===P.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new N(P.UNKNOWN,a.toString())})}terminate(){this.S_=!0,this.connection.terminate()}}class Gf{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.D_=0,this.v_=null,this.C_=!0}F_(){this.D_===0&&(this.M_("Unknown"),this.v_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.v_=null,this.x_("Backend didn't respond within 10 seconds."),this.M_("Offline"),Promise.resolve())))}O_(t){this.state==="Online"?this.M_("Unknown"):(this.D_++,this.D_>=1&&(this.N_(),this.x_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.M_("Offline")))}set(t){this.N_(),this.D_=0,t==="Online"&&(this.C_=!1),this.M_(t)}M_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}x_(t){const e=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.C_?($t(e),this.C_=!1):x("OnlineStateTracker",e)}N_(){this.v_!==null&&(this.v_.cancel(),this.v_=null)}}/**
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
 */class Kf{constructor(t,e,r,s,o){this.localStore=t,this.datastore=e,this.asyncQueue=r,this.remoteSyncer={},this.L_=[],this.B_=new Map,this.k_=new Set,this.q_=[],this.Q_=o,this.Q_.uo(a=>{r.enqueueAndForget(async()=>{Te(this)&&(x("RemoteStore","Restarting streams for network reachability change."),await async function(h){const f=F(h);f.k_.add(4),await Pn(f),f.K_.set("Unknown"),f.k_.delete(4),await Lr(f)}(this))})}),this.K_=new Gf(r,s)}}async function Lr(n){if(Te(n))for(const t of n.q_)await t(!0)}async function Pn(n){for(const t of n.q_)await t(!1)}function Lu(n,t){const e=F(n);e.B_.has(t.targetId)||(e.B_.set(t.targetId,t),hi(e)?li(e):ze(e).s_()&&ci(e,t))}function ui(n,t){const e=F(n),r=ze(e);e.B_.delete(t),r.s_()&&Fu(e,t),e.B_.size===0&&(r.s_()?r.a_():Te(e)&&e.K_.set("Unknown"))}function ci(n,t){if(n.U_.xe(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(L.min())>0){const e=n.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(e)}ze(n).V_(t)}function Fu(n,t){n.U_.xe(t),ze(n).m_(t)}function li(n){n.U_=new zd({getRemoteKeysForTarget:t=>n.remoteSyncer.getRemoteKeysForTarget(t),ut:t=>n.B_.get(t)||null,nt:()=>n.datastore.serializer.databaseId}),ze(n).start(),n.K_.F_()}function hi(n){return Te(n)&&!ze(n).i_()&&n.B_.size>0}function Te(n){return F(n).k_.size===0}function Bu(n){n.U_=void 0}async function Hf(n){n.K_.set("Online")}async function Qf(n){n.B_.forEach((t,e)=>{ci(n,t)})}async function Wf(n,t){Bu(n),hi(n)?(n.K_.O_(t),li(n)):n.K_.set("Unknown")}async function Xf(n,t,e){if(n.K_.set("Online"),t instanceof Au&&t.state===2&&t.cause)try{await async function(s,o){const a=o.cause;for(const c of o.targetIds)s.B_.has(c)&&(await s.remoteSyncer.rejectListen(c,a),s.B_.delete(c),s.U_.removeTarget(c))}(n,t)}catch(r){x("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),r),await _r(n,r)}else if(t instanceof sr?n.U_.$e(t):t instanceof wu?n.U_.Je(t):n.U_.Ge(t),!e.isEqual(L.min()))try{const r=await Nu(n.localStore);e.compareTo(r)>=0&&await function(o,a){const c=o.U_.it(a);return c.targetChanges.forEach((h,f)=>{if(h.resumeToken.approximateByteSize()>0){const m=o.B_.get(f);m&&o.B_.set(f,m.withResumeToken(h.resumeToken,a))}}),c.targetMismatches.forEach((h,f)=>{const m=o.B_.get(h);if(!m)return;o.B_.set(h,m.withResumeToken(lt.EMPTY_BYTE_STRING,m.snapshotVersion)),Fu(o,h);const E=new Jt(m.target,h,f,m.sequenceNumber);ci(o,E)}),o.remoteSyncer.applyRemoteEvent(c)}(n,e)}catch(r){x("RemoteStore","Failed to raise snapshot:",r),await _r(n,r)}}async function _r(n,t,e){if(!je(t))throw t;n.k_.add(1),await Pn(n),n.K_.set("Offline"),e||(e=()=>Nu(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{x("RemoteStore","Retrying IndexedDB access"),await e(),n.k_.delete(1),await Lr(n)})}function Uu(n,t){return t().catch(e=>_r(n,e,t))}async function Fr(n){const t=F(n),e=ae(t);let r=t.L_.length>0?t.L_[t.L_.length-1].batchId:-1;for(;Yf(t);)try{const s=await Nf(t.localStore,r);if(s===null){t.L_.length===0&&e.a_();break}r=s.batchId,Jf(t,s)}catch(s){await _r(t,s)}qu(t)&&ju(t)}function Yf(n){return Te(n)&&n.L_.length<10}function Jf(n,t){n.L_.push(t);const e=ae(n);e.s_()&&e.f_&&e.g_(t.mutations)}function qu(n){return Te(n)&&!ae(n).i_()&&n.L_.length>0}function ju(n){ae(n).start()}async function Zf(n){ae(n).w_()}async function tm(n){const t=ae(n);for(const e of n.L_)t.g_(e.mutations)}async function em(n,t,e){const r=n.L_.shift(),s=ni.from(r,t,e);await Uu(n,()=>n.remoteSyncer.applySuccessfulWrite(s)),await Fr(n)}async function nm(n,t){t&&ae(n).f_&&await async function(r,s){if(function(a){return Ud(a)&&a!==P.ABORTED}(s.code)){const o=r.L_.shift();ae(r).__(),await Uu(r,()=>r.remoteSyncer.rejectFailedWrite(o.batchId,s)),await Fr(r)}}(n,t),qu(n)&&ju(n)}async function _a(n,t){const e=F(n);e.asyncQueue.verifyOperationInProgress(),x("RemoteStore","RemoteStore received new credentials");const r=Te(e);e.k_.add(3),await Pn(e),r&&e.K_.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.k_.delete(3),await Lr(e)}async function rm(n,t){const e=F(n);t?(e.k_.delete(2),await Lr(e)):t||(e.k_.add(2),await Pn(e),e.K_.set("Unknown"))}function ze(n){return n.W_||(n.W_=function(e,r,s){const o=F(e);return o.b_(),new jf(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,s)}(n.datastore,n.asyncQueue,{Ro:Hf.bind(null,n),mo:Qf.bind(null,n),po:Wf.bind(null,n),R_:Xf.bind(null,n)}),n.q_.push(async t=>{t?(n.W_.__(),hi(n)?li(n):n.K_.set("Unknown")):(await n.W_.stop(),Bu(n))})),n.W_}function ae(n){return n.G_||(n.G_=function(e,r,s){const o=F(e);return o.b_(),new zf(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,s)}(n.datastore,n.asyncQueue,{Ro:()=>Promise.resolve(),mo:Zf.bind(null,n),po:nm.bind(null,n),p_:tm.bind(null,n),y_:em.bind(null,n)}),n.q_.push(async t=>{t?(n.G_.__(),await Fr(n)):(await n.G_.stop(),n.L_.length>0&&(x("RemoteStore",`Stopping write stream with ${n.L_.length} pending writes`),n.L_=[]))})),n.G_}/**
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
 */class di{constructor(t,e,r,s,o){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=r,this.op=s,this.removalCallback=o,this.deferred=new ee,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,e,r,s,o){const a=Date.now()+r,c=new di(t,e,a,s,o);return c.start(r),c}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new N(P.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function fi(n,t){if($t("AsyncQueue",`${t}: ${n}`),je(n))return new N(P.UNAVAILABLE,`${t}: ${n}`);throw n}/**
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
 */class De{static emptySet(t){return new De(t.comparator)}constructor(t){this.comparator=t?(e,r)=>t(e,r)||M.comparator(e.key,r.key):(e,r)=>M.comparator(e.key,r.key),this.keyedMap=cn(),this.sortedSet=new J(this.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((e,r)=>(t(e),!1))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof De)||this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),r=t.sortedSet.getIterator();for(;e.hasNext();){const s=e.getNext().key,o=r.getNext().key;if(!s.isEqual(o))return!1}return!0}toString(){const t=[];return this.forEach(e=>{t.push(e.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,e){const r=new De;return r.comparator=this.comparator,r.keyedMap=t,r.sortedSet=e,r}}/**
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
 */class ya{constructor(){this.z_=new J(M.comparator)}track(t){const e=t.doc.key,r=this.z_.get(e);r?t.type!==0&&r.type===3?this.z_=this.z_.insert(e,t):t.type===3&&r.type!==1?this.z_=this.z_.insert(e,{type:r.type,doc:t.doc}):t.type===2&&r.type===2?this.z_=this.z_.insert(e,{type:2,doc:t.doc}):t.type===2&&r.type===0?this.z_=this.z_.insert(e,{type:0,doc:t.doc}):t.type===1&&r.type===0?this.z_=this.z_.remove(e):t.type===1&&r.type===2?this.z_=this.z_.insert(e,{type:1,doc:r.doc}):t.type===0&&r.type===1?this.z_=this.z_.insert(e,{type:2,doc:t.doc}):O():this.z_=this.z_.insert(e,t)}j_(){const t=[];return this.z_.inorderTraversal((e,r)=>{t.push(r)}),t}}class Le{constructor(t,e,r,s,o,a,c,h,f){this.query=t,this.docs=e,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=o,this.fromCache=a,this.syncStateChanged=c,this.excludesMetadataChanges=h,this.hasCachedResults=f}static fromInitialDocuments(t,e,r,s,o){const a=[];return e.forEach(c=>{a.push({type:0,doc:c})}),new Le(t,e,De.emptySet(e),a,r,s,!0,!1,o)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&Dr(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,r=t.docChanges;if(e.length!==r.length)return!1;for(let s=0;s<e.length;s++)if(e[s].type!==r[s].type||!e[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class sm{constructor(){this.H_=void 0,this.J_=[]}Y_(){return this.J_.some(t=>t.Z_())}}class im{constructor(){this.queries=Ea(),this.onlineState="Unknown",this.X_=new Set}terminate(){(function(e,r){const s=F(e),o=s.queries;s.queries=Ea(),o.forEach((a,c)=>{for(const h of c.J_)h.onError(r)})})(this,new N(P.ABORTED,"Firestore shutting down"))}}function Ea(){return new ve(n=>cu(n),Dr)}async function zu(n,t){const e=F(n);let r=3;const s=t.query;let o=e.queries.get(s);o?!o.Y_()&&t.Z_()&&(r=2):(o=new sm,r=t.Z_()?0:1);try{switch(r){case 0:o.H_=await e.onListen(s,!0);break;case 1:o.H_=await e.onListen(s,!1);break;case 2:await e.onFirstRemoteStoreListen(s)}}catch(a){const c=fi(a,`Initialization of query '${Ce(t.query)}' failed`);return void t.onError(c)}e.queries.set(s,o),o.J_.push(t),t.ea(e.onlineState),o.H_&&t.ta(o.H_)&&mi(e)}async function $u(n,t){const e=F(n),r=t.query;let s=3;const o=e.queries.get(r);if(o){const a=o.J_.indexOf(t);a>=0&&(o.J_.splice(a,1),o.J_.length===0?s=t.Z_()?0:1:!o.Y_()&&t.Z_()&&(s=2))}switch(s){case 0:return e.queries.delete(r),e.onUnlisten(r,!0);case 1:return e.queries.delete(r),e.onUnlisten(r,!1);case 2:return e.onLastRemoteStoreUnlisten(r);default:return}}function om(n,t){const e=F(n);let r=!1;for(const s of t){const o=s.query,a=e.queries.get(o);if(a){for(const c of a.J_)c.ta(s)&&(r=!0);a.H_=s}}r&&mi(e)}function am(n,t,e){const r=F(n),s=r.queries.get(t);if(s)for(const o of s.J_)o.onError(e);r.queries.delete(t)}function mi(n){n.X_.forEach(t=>{t.next()})}var js,va;(va=js||(js={})).na="default",va.Cache="cache";class Gu{constructor(t,e,r){this.query=t,this.ra=e,this.ia=!1,this.sa=null,this.onlineState="Unknown",this.options=r||{}}ta(t){if(!this.options.includeMetadataChanges){const r=[];for(const s of t.docChanges)s.type!==3&&r.push(s);t=new Le(t.query,t.docs,t.oldDocs,r,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.ia?this.oa(t)&&(this.ra.next(t),e=!0):this._a(t,this.onlineState)&&(this.aa(t),e=!0),this.sa=t,e}onError(t){this.ra.error(t)}ea(t){this.onlineState=t;let e=!1;return this.sa&&!this.ia&&this._a(this.sa,t)&&(this.aa(this.sa),e=!0),e}_a(t,e){if(!t.fromCache||!this.Z_())return!0;const r=e!=="Offline";return(!this.options.ua||!r)&&(!t.docs.isEmpty()||t.hasCachedResults||e==="Offline")}oa(t){if(t.docChanges.length>0)return!0;const e=this.sa&&this.sa.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&this.options.includeMetadataChanges===!0}aa(t){t=Le.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.ia=!0,this.ra.next(t)}Z_(){return this.options.source!==js.Cache}}/**
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
 */class Ku{constructor(t){this.key=t}}class Hu{constructor(t){this.key=t}}class um{constructor(t,e){this.query=t,this.da=e,this.Aa=null,this.hasCachedResults=!1,this.current=!1,this.Ra=B(),this.mutatedKeys=B(),this.Va=lu(t),this.ma=new De(this.Va)}get fa(){return this.da}ga(t,e){const r=e?e.pa:new ya,s=e?e.ma:this.ma;let o=e?e.mutatedKeys:this.mutatedKeys,a=s,c=!1;const h=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,f=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(t.inorderTraversal((m,E)=>{const A=s.get(m),C=xr(this.query,E)?E:null,D=!!A&&this.mutatedKeys.has(A.key),k=!!C&&(C.hasLocalMutations||this.mutatedKeys.has(C.key)&&C.hasCommittedMutations);let V=!1;A&&C?A.data.isEqual(C.data)?D!==k&&(r.track({type:3,doc:C}),V=!0):this.ya(A,C)||(r.track({type:2,doc:C}),V=!0,(h&&this.Va(C,h)>0||f&&this.Va(C,f)<0)&&(c=!0)):!A&&C?(r.track({type:0,doc:C}),V=!0):A&&!C&&(r.track({type:1,doc:A}),V=!0,(h||f)&&(c=!0)),V&&(C?(a=a.add(C),o=k?o.add(m):o.delete(m)):(a=a.delete(m),o=o.delete(m)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const m=this.query.limitType==="F"?a.last():a.first();a=a.delete(m.key),o=o.delete(m.key),r.track({type:1,doc:m})}return{ma:a,pa:r,ss:c,mutatedKeys:o}}ya(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,r,s){const o=this.ma;this.ma=t.ma,this.mutatedKeys=t.mutatedKeys;const a=t.pa.j_();a.sort((m,E)=>function(C,D){const k=V=>{switch(V){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return O()}};return k(C)-k(D)}(m.type,E.type)||this.Va(m.doc,E.doc)),this.wa(r),s=s!=null&&s;const c=e&&!s?this.Sa():[],h=this.Ra.size===0&&this.current&&!s?1:0,f=h!==this.Aa;return this.Aa=h,a.length!==0||f?{snapshot:new Le(this.query,t.ma,o,a,t.mutatedKeys,h===0,f,!1,!!r&&r.resumeToken.approximateByteSize()>0),ba:c}:{ba:c}}ea(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({ma:this.ma,pa:new ya,mutatedKeys:this.mutatedKeys,ss:!1},!1)):{ba:[]}}Da(t){return!this.da.has(t)&&!!this.ma.has(t)&&!this.ma.get(t).hasLocalMutations}wa(t){t&&(t.addedDocuments.forEach(e=>this.da=this.da.add(e)),t.modifiedDocuments.forEach(e=>{}),t.removedDocuments.forEach(e=>this.da=this.da.delete(e)),this.current=t.current)}Sa(){if(!this.current)return[];const t=this.Ra;this.Ra=B(),this.ma.forEach(r=>{this.Da(r.key)&&(this.Ra=this.Ra.add(r.key))});const e=[];return t.forEach(r=>{this.Ra.has(r)||e.push(new Hu(r))}),this.Ra.forEach(r=>{t.has(r)||e.push(new Ku(r))}),e}va(t){this.da=t.ds,this.Ra=B();const e=this.ga(t.documents);return this.applyChanges(e,!0)}Ca(){return Le.fromInitialDocuments(this.query,this.ma,this.mutatedKeys,this.Aa===0,this.hasCachedResults)}}class cm{constructor(t,e,r){this.query=t,this.targetId=e,this.view=r}}class lm{constructor(t){this.key=t,this.Fa=!1}}class hm{constructor(t,e,r,s,o,a){this.localStore=t,this.remoteStore=e,this.eventManager=r,this.sharedClientState=s,this.currentUser=o,this.maxConcurrentLimboResolutions=a,this.Ma={},this.xa=new ve(c=>cu(c),Dr),this.Oa=new Map,this.Na=new Set,this.La=new J(M.comparator),this.Ba=new Map,this.ka=new ii,this.qa={},this.Qa=new Map,this.Ka=Oe.Qn(),this.onlineState="Unknown",this.$a=void 0}get isPrimaryClient(){return this.$a===!0}}async function dm(n,t,e=!0){const r=Zu(n);let s;const o=r.xa.get(t);return o?(r.sharedClientState.addLocalQueryTarget(o.targetId),s=o.view.Ca()):s=await Qu(r,t,e,!0),s}async function fm(n,t){const e=Zu(n);await Qu(e,t,!0,!1)}async function Qu(n,t,e,r){const s=await Mf(n.localStore,Mt(t)),o=s.targetId,a=n.sharedClientState.addLocalQueryTarget(o,e);let c;return r&&(c=await mm(n,t,o,a==="current",s.resumeToken)),n.isPrimaryClient&&e&&Lu(n.remoteStore,s),c}async function mm(n,t,e,r,s){n.Ua=(E,A,C)=>async function(k,V,z,G){let K=V.view.ga(z);K.ss&&(K=await ma(k.localStore,V.query,!1).then(({documents:T})=>V.view.ga(T,K)));const W=G&&G.targetChanges.get(V.targetId),yt=G&&G.targetMismatches.get(V.targetId)!=null,tt=V.view.applyChanges(K,k.isPrimaryClient,W,yt);return Ia(k,V.targetId,tt.ba),tt.snapshot}(n,E,A,C);const o=await ma(n.localStore,t,!0),a=new um(t,o.ds),c=a.ga(o.documents),h=Cn.createSynthesizedTargetChangeForCurrentChange(e,r&&n.onlineState!=="Offline",s),f=a.applyChanges(c,n.isPrimaryClient,h);Ia(n,e,f.ba);const m=new cm(t,e,a);return n.xa.set(t,m),n.Oa.has(e)?n.Oa.get(e).push(t):n.Oa.set(e,[t]),f.snapshot}async function pm(n,t,e){const r=F(n),s=r.xa.get(t),o=r.Oa.get(s.targetId);if(o.length>1)return r.Oa.set(s.targetId,o.filter(a=>!Dr(a,t))),void r.xa.delete(t);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await qs(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),e&&ui(r.remoteStore,s.targetId),zs(r,s.targetId)}).catch(qe)):(zs(r,s.targetId),await qs(r.localStore,s.targetId,!0))}async function gm(n,t){const e=F(n),r=e.xa.get(t),s=e.Oa.get(r.targetId);e.isPrimaryClient&&s.length===1&&(e.sharedClientState.removeLocalQueryTarget(r.targetId),ui(e.remoteStore,r.targetId))}async function _m(n,t,e){const r=Am(n);try{const s=await function(a,c){const h=F(a),f=st.now(),m=c.reduce((C,D)=>C.add(D.key),B());let E,A;return h.persistence.runTransaction("Locally write mutations","readwrite",C=>{let D=Gt(),k=B();return h.hs.getEntries(C,m).next(V=>{D=V,D.forEach((z,G)=>{G.isValidDocument()||(k=k.add(z))})}).next(()=>h.localDocuments.getOverlayedDocuments(C,D)).next(V=>{E=V;const z=[];for(const G of c){const K=Md(G,E.get(G.key).overlayedDocument);K!=null&&z.push(new ce(G.key,K,nu(K.value.mapValue),kt.exists(!0)))}return h.mutationQueue.addMutationBatch(C,f,z,c)}).next(V=>{A=V;const z=V.applyToLocalDocumentSet(E,k);return h.documentOverlayCache.saveOverlays(C,V.batchId,z)})}).then(()=>({batchId:A.batchId,changes:du(E)}))}(r.localStore,t);r.sharedClientState.addPendingMutation(s.batchId),function(a,c,h){let f=a.qa[a.currentUser.toKey()];f||(f=new J(U)),f=f.insert(c,h),a.qa[a.currentUser.toKey()]=f}(r,s.batchId,e),await bn(r,s.changes),await Fr(r.remoteStore)}catch(s){const o=fi(s,"Failed to persist write");e.reject(o)}}async function Wu(n,t){const e=F(n);try{const r=await xf(e.localStore,t);t.targetChanges.forEach((s,o)=>{const a=e.Ba.get(o);a&&(H(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?a.Fa=!0:s.modifiedDocuments.size>0?H(a.Fa):s.removedDocuments.size>0&&(H(a.Fa),a.Fa=!1))}),await bn(e,r,t)}catch(r){await qe(r)}}function Ta(n,t,e){const r=F(n);if(r.isPrimaryClient&&e===0||!r.isPrimaryClient&&e===1){const s=[];r.xa.forEach((o,a)=>{const c=a.view.ea(t);c.snapshot&&s.push(c.snapshot)}),function(a,c){const h=F(a);h.onlineState=c;let f=!1;h.queries.forEach((m,E)=>{for(const A of E.J_)A.ea(c)&&(f=!0)}),f&&mi(h)}(r.eventManager,t),s.length&&r.Ma.R_(s),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function ym(n,t,e){const r=F(n);r.sharedClientState.updateQueryState(t,"rejected",e);const s=r.Ba.get(t),o=s&&s.key;if(o){let a=new J(M.comparator);a=a.insert(o,_t.newNoDocument(o,L.min()));const c=B().add(o),h=new Mr(L.min(),new Map,new J(U),a,c);await Wu(r,h),r.La=r.La.remove(o),r.Ba.delete(t),pi(r)}else await qs(r.localStore,t,!1).then(()=>zs(r,t,e)).catch(qe)}async function Em(n,t){const e=F(n),r=t.batch.batchId;try{const s=await Df(e.localStore,t);Yu(e,r,null),Xu(e,r),e.sharedClientState.updateMutationState(r,"acknowledged"),await bn(e,s)}catch(s){await qe(s)}}async function vm(n,t,e){const r=F(n);try{const s=await function(a,c){const h=F(a);return h.persistence.runTransaction("Reject batch","readwrite-primary",f=>{let m;return h.mutationQueue.lookupMutationBatch(f,c).next(E=>(H(E!==null),m=E.keys(),h.mutationQueue.removeMutationBatch(f,E))).next(()=>h.mutationQueue.performConsistencyCheck(f)).next(()=>h.documentOverlayCache.removeOverlaysForBatchId(f,m,c)).next(()=>h.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(f,m)).next(()=>h.localDocuments.getDocuments(f,m))})}(r.localStore,t);Yu(r,t,e),Xu(r,t),r.sharedClientState.updateMutationState(t,"rejected",e),await bn(r,s)}catch(s){await qe(s)}}function Xu(n,t){(n.Qa.get(t)||[]).forEach(e=>{e.resolve()}),n.Qa.delete(t)}function Yu(n,t,e){const r=F(n);let s=r.qa[r.currentUser.toKey()];if(s){const o=s.get(t);o&&(e?o.reject(e):o.resolve(),s=s.remove(t)),r.qa[r.currentUser.toKey()]=s}}function zs(n,t,e=null){n.sharedClientState.removeLocalQueryTarget(t);for(const r of n.Oa.get(t))n.xa.delete(r),e&&n.Ma.Wa(r,e);n.Oa.delete(t),n.isPrimaryClient&&n.ka.yr(t).forEach(r=>{n.ka.containsKey(r)||Ju(n,r)})}function Ju(n,t){n.Na.delete(t.path.canonicalString());const e=n.La.get(t);e!==null&&(ui(n.remoteStore,e),n.La=n.La.remove(t),n.Ba.delete(e),pi(n))}function Ia(n,t,e){for(const r of e)r instanceof Ku?(n.ka.addReference(r.key,t),Tm(n,r)):r instanceof Hu?(x("SyncEngine","Document no longer in limbo: "+r.key),n.ka.removeReference(r.key,t),n.ka.containsKey(r.key)||Ju(n,r.key)):O()}function Tm(n,t){const e=t.key,r=e.path.canonicalString();n.La.get(e)||n.Na.has(r)||(x("SyncEngine","New document in limbo: "+e),n.Na.add(r),pi(n))}function pi(n){for(;n.Na.size>0&&n.La.size<n.maxConcurrentLimboResolutions;){const t=n.Na.values().next().value;n.Na.delete(t);const e=new M(Y.fromString(t)),r=n.Ka.next();n.Ba.set(r,new lm(e)),n.La=n.La.insert(e,r),Lu(n.remoteStore,new Jt(Mt(Vr(e.path)),r,"TargetPurposeLimboResolution",Sr.oe))}}async function bn(n,t,e){const r=F(n),s=[],o=[],a=[];r.xa.isEmpty()||(r.xa.forEach((c,h)=>{a.push(r.Ua(h,t,e).then(f=>{var m;if((f||e)&&r.isPrimaryClient){const E=f?!f.fromCache:(m=e==null?void 0:e.targetChanges.get(h.targetId))===null||m===void 0?void 0:m.current;r.sharedClientState.updateQueryState(h.targetId,E?"current":"not-current")}if(f){s.push(f);const E=ai.zi(h.targetId,f);o.push(E)}}))}),await Promise.all(a),r.Ma.R_(s),await async function(h,f){const m=F(h);try{await m.persistence.runTransaction("notifyLocalViewChanges","readwrite",E=>S.forEach(f,A=>S.forEach(A.Wi,C=>m.persistence.referenceDelegate.addReference(E,A.targetId,C)).next(()=>S.forEach(A.Gi,C=>m.persistence.referenceDelegate.removeReference(E,A.targetId,C)))))}catch(E){if(!je(E))throw E;x("LocalStore","Failed to update sequence numbers: "+E)}for(const E of f){const A=E.targetId;if(!E.fromCache){const C=m.us.get(A),D=C.snapshotVersion,k=C.withLastLimboFreeSnapshotVersion(D);m.us=m.us.insert(A,k)}}}(r.localStore,o))}async function Im(n,t){const e=F(n);if(!e.currentUser.isEqual(t)){x("SyncEngine","User change. New user:",t.toKey());const r=await ku(e.localStore,t);e.currentUser=t,function(o,a){o.Qa.forEach(c=>{c.forEach(h=>{h.reject(new N(P.CANCELLED,a))})}),o.Qa.clear()}(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await bn(e,r.Ts)}}function wm(n,t){const e=F(n),r=e.Ba.get(t);if(r&&r.Fa)return B().add(r.key);{let s=B();const o=e.Oa.get(t);if(!o)return s;for(const a of o){const c=e.xa.get(a);s=s.unionWith(c.view.fa)}return s}}function Zu(n){const t=F(n);return t.remoteStore.remoteSyncer.applyRemoteEvent=Wu.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=wm.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=ym.bind(null,t),t.Ma.R_=om.bind(null,t.eventManager),t.Ma.Wa=am.bind(null,t.eventManager),t}function Am(n){const t=F(n);return t.remoteStore.remoteSyncer.applySuccessfulWrite=Em.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=vm.bind(null,t),t}class yr{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=Or(t.databaseInfo.databaseId),this.sharedClientState=this.za(t),this.persistence=this.ja(t),await this.persistence.start(),this.localStore=this.Ha(t),this.gcScheduler=this.Ja(t,this.localStore),this.indexBackfillerScheduler=this.Ya(t,this.localStore)}Ja(t,e){return null}Ya(t,e){return null}Ha(t){return Vf(this.persistence,new Pf,t.initialUser,this.serializer)}ja(t){return new xu(oi.ei,this.serializer)}za(t){return new Lf}async terminate(){var t,e;(t=this.gcScheduler)===null||t===void 0||t.stop(),(e=this.indexBackfillerScheduler)===null||e===void 0||e.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}yr.provider={build:()=>new yr};class Rm extends yr{constructor(t){super(),this.cacheSizeBytes=t}Ja(t,e){H(this.persistence.referenceDelegate instanceof gr);const r=this.persistence.referenceDelegate.garbageCollector;return new ff(r,t.asyncQueue,e)}ja(t){const e=this.cacheSizeBytes!==void 0?It.withCacheSize(this.cacheSizeBytes):It.DEFAULT;return new xu(r=>gr.ei(r,e),this.serializer)}}class $s{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Ta(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=Im.bind(null,this.syncEngine),await rm(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new im}()}createDatastore(t){const e=Or(t.databaseInfo.databaseId),r=function(o){return new qf(o)}(t.databaseInfo);return function(o,a,c,h){return new $f(o,a,c,h)}(t.authCredentials,t.appCheckCredentials,r,e)}createRemoteStore(t){return function(r,s,o,a,c){return new Kf(r,s,o,a,c)}(this.localStore,this.datastore,t.asyncQueue,e=>Ta(this.syncEngine,e,0),function(){return ga.p()?new ga:new Ff}())}createSyncEngine(t,e){return function(s,o,a,c,h,f,m){const E=new hm(s,o,a,c,h,f);return m&&(E.$a=!0),E}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){var t,e;await async function(s){const o=F(s);x("RemoteStore","RemoteStore shutting down."),o.k_.add(5),await Pn(o),o.Q_.shutdown(),o.K_.set("Unknown")}(this.remoteStore),(t=this.datastore)===null||t===void 0||t.terminate(),(e=this.eventManager)===null||e===void 0||e.terminate()}}$s.provider={build:()=>new $s};/**
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
 */class tc{constructor(t){this.observer=t,this.muted=!1}next(t){this.muted||this.observer.next&&this.Xa(this.observer.next,t)}error(t){this.muted||(this.observer.error?this.Xa(this.observer.error,t):$t("Uncaught Error in snapshot listener:",t.toString()))}eu(){this.muted=!0}Xa(t,e){setTimeout(()=>{this.muted||t(e)},0)}}/**
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
 */class Sm{constructor(t,e,r,s,o){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=r,this.databaseInfo=s,this.user=gt.UNAUTHENTICATED,this.clientId=Za.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=o,this.authCredentials.start(r,async a=>{x("FirestoreClient","Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(r,a=>(x("FirestoreClient","Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new ee;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const r=fi(e,"Failed to shutdown persistence");t.reject(r)}}),t.promise}}async function ws(n,t){n.asyncQueue.verifyOperationInProgress(),x("FirestoreClient","Initializing OfflineComponentProvider");const e=n.configuration;await t.initialize(e);let r=e.initialUser;n.setCredentialChangeListener(async s=>{r.isEqual(s)||(await ku(t.localStore,s),r=s)}),t.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=t}async function wa(n,t){n.asyncQueue.verifyOperationInProgress();const e=await Cm(n);x("FirestoreClient","Initializing OnlineComponentProvider"),await t.initialize(e,n.configuration),n.setCredentialChangeListener(r=>_a(t.remoteStore,r)),n.setAppCheckTokenChangeListener((r,s)=>_a(t.remoteStore,s)),n._onlineComponents=t}async function Cm(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){x("FirestoreClient","Using user provided OfflineComponentProvider");try{await ws(n,n._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!function(s){return s.name==="FirebaseError"?s.code===P.FAILED_PRECONDITION||s.code===P.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(e))throw e;xe("Error using user provided cache. Falling back to memory cache: "+e),await ws(n,new yr)}}else x("FirestoreClient","Using default OfflineComponentProvider"),await ws(n,new Rm(void 0));return n._offlineComponents}async function ec(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(x("FirestoreClient","Using user provided OnlineComponentProvider"),await wa(n,n._uninitializedComponentsProvider._online)):(x("FirestoreClient","Using default OnlineComponentProvider"),await wa(n,new $s))),n._onlineComponents}function Pm(n){return ec(n).then(t=>t.syncEngine)}async function Gs(n){const t=await ec(n),e=t.eventManager;return e.onListen=dm.bind(null,t.syncEngine),e.onUnlisten=pm.bind(null,t.syncEngine),e.onFirstRemoteStoreListen=fm.bind(null,t.syncEngine),e.onLastRemoteStoreUnlisten=gm.bind(null,t.syncEngine),e}function bm(n,t,e={}){const r=new ee;return n.asyncQueue.enqueueAndForget(async()=>function(o,a,c,h,f){const m=new tc({next:A=>{m.eu(),a.enqueueAndForget(()=>$u(o,E));const C=A.docs.has(c);!C&&A.fromCache?f.reject(new N(P.UNAVAILABLE,"Failed to get document because the client is offline.")):C&&A.fromCache&&h&&h.source==="server"?f.reject(new N(P.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):f.resolve(A)},error:A=>f.reject(A)}),E=new Gu(Vr(c.path),m,{includeMetadataChanges:!0,ua:!0});return zu(o,E)}(await Gs(n),n.asyncQueue,t,e,r)),r.promise}/**
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
 */function nc(n){const t={};return n.timeoutSeconds!==void 0&&(t.timeoutSeconds=n.timeoutSeconds),t}/**
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
 */const Aa=new Map;/**
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
 */function rc(n,t,e){if(!e)throw new N(P.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${t}.`)}function Vm(n,t,e,r){if(t===!0&&r===!0)throw new N(P.INVALID_ARGUMENT,`${n} and ${e} cannot be used together.`)}function Ra(n){if(!M.isDocumentKey(n))throw new N(P.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Sa(n){if(M.isDocumentKey(n))throw new N(P.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function gi(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const t=function(r){return r.constructor?r.constructor.name:null}(n);return t?`a custom ${t} object`:"an object"}}return typeof n=="function"?"a function":O()}function Nt(n,t){if("_delegate"in n&&(n=n._delegate),!(n instanceof t)){if(t.name===n.constructor.name)throw new N(P.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=gi(n);throw new N(P.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return n}/**
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
 */class Ca{constructor(t){var e,r;if(t.host===void 0){if(t.ssl!==void 0)throw new N(P.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(e=t.ssl)===null||e===void 0||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new N(P.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}Vm("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=nc((r=t.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(o){if(o.timeoutSeconds!==void 0){if(isNaN(o.timeoutSeconds))throw new N(P.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (must not be NaN)`);if(o.timeoutSeconds<5)throw new N(P.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (minimum allowed value is 5)`);if(o.timeoutSeconds>30)throw new N(P.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class Br{constructor(t,e,r,s){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Ca({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new N(P.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new N(P.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Ca(t),t.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new qh;switch(r.type){case"firstParty":return new Gh(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new N(P.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const r=Aa.get(e);r&&(x("ComponentProvider","Removing Datastore"),Aa.delete(e),r.terminate())}(this),Promise.resolve()}}function Dm(n,t,e,r={}){var s;const o=(n=Nt(n,Br))._getSettings(),a=`${t}:${e}`;if(o.host!=="firestore.googleapis.com"&&o.host!==a&&xe("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},o),{host:a,ssl:!1})),r.mockUserToken){let c,h;if(typeof r.mockUserToken=="string")c=r.mockUserToken,h=gt.MOCK_USER;else{c=vl(r.mockUserToken,(s=n._app)===null||s===void 0?void 0:s.options.projectId);const f=r.mockUserToken.sub||r.mockUserToken.user_id;if(!f)throw new N(P.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");h=new gt(f)}n._authCredentials=new jh(new Ja(c,h))}}/**
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
 */class Ur{constructor(t,e,r){this.converter=e,this._query=r,this.type="query",this.firestore=t}withConverter(t){return new Ur(this.firestore,t,this._query)}}class Tt{constructor(t,e,r){this.converter=e,this._key=r,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ne(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new Tt(this.firestore,t,this._key)}}class ne extends Ur{constructor(t,e,r){super(t,e,Vr(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new Tt(this.firestore,null,new M(t))}withConverter(t){return new ne(this.firestore,t,this._path)}}function gn(n,t,...e){if(n=jt(n),rc("collection","path",t),n instanceof Br){const r=Y.fromString(t,...e);return Sa(r),new ne(n,null,r)}{if(!(n instanceof Tt||n instanceof ne))throw new N(P.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(Y.fromString(t,...e));return Sa(r),new ne(n.firestore,null,r)}}function _i(n,t,...e){if(n=jt(n),arguments.length===1&&(t=Za.newId()),rc("doc","path",t),n instanceof Br){const r=Y.fromString(t,...e);return Ra(r),new Tt(n,null,new M(r))}{if(!(n instanceof Tt||n instanceof ne))throw new N(P.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(Y.fromString(t,...e));return Ra(r),new Tt(n.firestore,n instanceof ne?n.converter:null,new M(r))}}/**
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
 */class Pa{constructor(t=Promise.resolve()){this.Iu=[],this.Eu=!1,this.du=[],this.Au=null,this.Ru=!1,this.Vu=!1,this.mu=[],this.r_=new Mu(this,"async_queue_retry"),this.fu=()=>{const r=Is();r&&x("AsyncQueue","Visibility state changed to "+r.visibilityState),this.r_.Jo()},this.gu=t;const e=Is();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.fu)}get isShuttingDown(){return this.Eu}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.pu(),this.yu(t)}enterRestrictedMode(t){if(!this.Eu){this.Eu=!0,this.Vu=t||!1;const e=Is();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this.fu)}}enqueue(t){if(this.pu(),this.Eu)return new Promise(()=>{});const e=new ee;return this.yu(()=>this.Eu&&this.Vu?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Iu.push(t),this.wu()))}async wu(){if(this.Iu.length!==0){try{await this.Iu[0](),this.Iu.shift(),this.r_.reset()}catch(t){if(!je(t))throw t;x("AsyncQueue","Operation failed with retryable error: "+t)}this.Iu.length>0&&this.r_.jo(()=>this.wu())}}yu(t){const e=this.gu.then(()=>(this.Ru=!0,t().catch(r=>{this.Au=r,this.Ru=!1;const s=function(a){let c=a.message||"";return a.stack&&(c=a.stack.includes(a.message)?a.stack:a.message+`
`+a.stack),c}(r);throw $t("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.Ru=!1,r))));return this.gu=e,e}enqueueAfterDelay(t,e,r){this.pu(),this.mu.indexOf(t)>-1&&(e=0);const s=di.createAndSchedule(this,t,e,r,o=>this.Su(o));return this.du.push(s),s}pu(){this.Au&&O()}verifyOperationInProgress(){}async bu(){let t;do t=this.gu,await t;while(t!==this.gu)}Du(t){for(const e of this.du)if(e.timerId===t)return!0;return!1}vu(t){return this.bu().then(()=>{this.du.sort((e,r)=>e.targetTimeMs-r.targetTimeMs);for(const e of this.du)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.bu()})}Cu(t){this.mu.push(t)}Su(t){const e=this.du.indexOf(t);this.du.splice(e,1)}}function ba(n){return function(e,r){if(typeof e!="object"||e===null)return!1;const s=e;for(const o of r)if(o in s&&typeof s[o]=="function")return!0;return!1}(n,["next","error","complete"])}class Ee extends Br{constructor(t,e,r,s){super(t,e,r,s),this.type="firestore",this._queue=new Pa,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new Pa(t),this._firestoreClient=void 0,await t}}}function xm(n,t){const e=typeof n=="object"?n:bh(),r=typeof n=="string"?n:"(default)",s=Rh(e,"firestore").getImmediate({identifier:r});if(!s._initialized){const o=yl("firestore");o&&Dm(s,...o)}return s}function yi(n){if(n._terminated)throw new N(P.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||km(n),n._firestoreClient}function km(n){var t,e,r;const s=n._freezeSettings(),o=function(c,h,f,m){return new od(c,h,f,m.host,m.ssl,m.experimentalForceLongPolling,m.experimentalAutoDetectLongPolling,nc(m.experimentalLongPollingOptions),m.useFetchStreams)}(n._databaseId,((t=n._app)===null||t===void 0?void 0:t.options.appId)||"",n._persistenceKey,s);n._componentsProvider||!((e=s.localCache)===null||e===void 0)&&e._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),n._firestoreClient=new Sm(n._authCredentials,n._appCheckCredentials,n._queue,o,n._componentsProvider&&function(c){const h=c==null?void 0:c._online.build();return{_offline:c==null?void 0:c._offline.build(h),_online:h}}(n._componentsProvider))}/**
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
 */class Fe{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Fe(lt.fromBase64String(t))}catch(e){throw new N(P.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new Fe(lt.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
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
 */class qr{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new N(P.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ct(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
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
 */class Ei{constructor(t){this._methodName=t}}/**
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
 */class vi{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new N(P.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new N(P.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return U(this._lat,t._lat)||U(this._long,t._long)}}/**
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
 */class Ti{constructor(t){this._values=(t||[]).map(e=>e)}toArray(){return this._values.map(t=>t)}isEqual(t){return function(r,s){if(r.length!==s.length)return!1;for(let o=0;o<r.length;++o)if(r[o]!==s[o])return!1;return!0}(this._values,t._values)}}/**
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
 */const Nm=/^__.*__$/;class Mm{constructor(t,e,r){this.data=t,this.fieldMask=e,this.fieldTransforms=r}toMutation(t,e){return this.fieldMask!==null?new ce(t,this.data,this.fieldMask,e,this.fieldTransforms):new Sn(t,this.data,e,this.fieldTransforms)}}class sc{constructor(t,e,r){this.data=t,this.fieldMask=e,this.fieldTransforms=r}toMutation(t,e){return new ce(t,this.data,this.fieldMask,e,this.fieldTransforms)}}function ic(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw O()}}class Ii{constructor(t,e,r,s,o,a){this.settings=t,this.databaseId=e,this.serializer=r,this.ignoreUndefinedProperties=s,o===void 0&&this.Fu(),this.fieldTransforms=o||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Mu(){return this.settings.Mu}xu(t){return new Ii(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Ou(t){var e;const r=(e=this.path)===null||e===void 0?void 0:e.child(t),s=this.xu({path:r,Nu:!1});return s.Lu(t),s}Bu(t){var e;const r=(e=this.path)===null||e===void 0?void 0:e.child(t),s=this.xu({path:r,Nu:!1});return s.Fu(),s}ku(t){return this.xu({path:void 0,Nu:!0})}qu(t){return Er(t,this.settings.methodName,this.settings.Qu||!1,this.path,this.settings.Ku)}contains(t){return this.fieldMask.find(e=>t.isPrefixOf(e))!==void 0||this.fieldTransforms.find(e=>t.isPrefixOf(e.field))!==void 0}Fu(){if(this.path)for(let t=0;t<this.path.length;t++)this.Lu(this.path.get(t))}Lu(t){if(t.length===0)throw this.qu("Document fields must not be empty");if(ic(this.Mu)&&Nm.test(t))throw this.qu('Document fields cannot begin and end with "__"')}}class Om{constructor(t,e,r){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=r||Or(t)}$u(t,e,r,s=!1){return new Ii({Mu:t,methodName:e,Ku:r,path:ct.emptyPath(),Nu:!1,Qu:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function wi(n){const t=n._freezeSettings(),e=Or(n._databaseId);return new Om(n._databaseId,!!t.ignoreUndefinedProperties,e)}function oc(n,t,e,r,s,o={}){const a=n.$u(o.merge||o.mergeFields?2:0,t,e,s);Ai("Data must be an object, but it was:",a,r);const c=ac(r,a);let h,f;if(o.merge)h=new bt(a.fieldMask),f=a.fieldTransforms;else if(o.mergeFields){const m=[];for(const E of o.mergeFields){const A=Ks(t,E,e);if(!a.contains(A))throw new N(P.INVALID_ARGUMENT,`Field '${A}' is specified in your field mask but missing from your input data.`);cc(m,A)||m.push(A)}h=new bt(m),f=a.fieldTransforms.filter(E=>h.covers(E.field))}else h=null,f=a.fieldTransforms;return new Mm(new wt(c),h,f)}class jr extends Ei{_toFieldTransform(t){if(t.Mu!==2)throw t.Mu===1?t.qu(`${this._methodName}() can only appear at the top level of your update data`):t.qu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof jr}}function Lm(n,t,e,r){const s=n.$u(1,t,e);Ai("Data must be an object, but it was:",s,r);const o=[],a=wt.empty();ue(r,(h,f)=>{const m=Ri(t,h,e);f=jt(f);const E=s.Bu(m);if(f instanceof jr)o.push(m);else{const A=zr(f,E);A!=null&&(o.push(m),a.set(m,A))}});const c=new bt(o);return new sc(a,c,s.fieldTransforms)}function Fm(n,t,e,r,s,o){const a=n.$u(1,t,e),c=[Ks(t,r,e)],h=[s];if(o.length%2!=0)throw new N(P.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let A=0;A<o.length;A+=2)c.push(Ks(t,o[A])),h.push(o[A+1]);const f=[],m=wt.empty();for(let A=c.length-1;A>=0;--A)if(!cc(f,c[A])){const C=c[A];let D=h[A];D=jt(D);const k=a.Bu(C);if(D instanceof jr)f.push(C);else{const V=zr(D,k);V!=null&&(f.push(C),m.set(C,V))}}const E=new bt(f);return new sc(m,E,a.fieldTransforms)}function zr(n,t){if(uc(n=jt(n)))return Ai("Unsupported field value:",t,n),ac(n,t);if(n instanceof Ei)return function(r,s){if(!ic(s.Mu))throw s.qu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.qu(`${r._methodName}() is not currently supported inside arrays`);const o=r._toFieldTransform(s);o&&s.fieldTransforms.push(o)}(n,t),null;if(n===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),n instanceof Array){if(t.settings.Nu&&t.Mu!==4)throw t.qu("Nested arrays are not supported");return function(r,s){const o=[];let a=0;for(const c of r){let h=zr(c,s.ku(a));h==null&&(h={nullValue:"NULL_VALUE"}),o.push(h),a++}return{arrayValue:{values:o}}}(n,t)}return function(r,s){if((r=jt(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return bd(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const o=st.fromDate(r);return{timestampValue:pr(s.serializer,o)}}if(r instanceof st){const o=new st(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:pr(s.serializer,o)}}if(r instanceof vi)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Fe)return{bytesValue:Ru(s.serializer,r._byteString)};if(r instanceof Tt){const o=s.databaseId,a=r.firestore._databaseId;if(!a.isEqual(o))throw s.qu(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${o.projectId}/${o.database}`);return{referenceValue:si(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof Ti)return function(a,c){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:a.toArray().map(h=>{if(typeof h!="number")throw c.qu("VectorValues must only contain numeric values.");return ei(c.serializer,h)})}}}}}}(r,s);throw s.qu(`Unsupported field value: ${gi(r)}`)}(n,t)}function ac(n,t){const e={};return tu(n)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):ue(n,(r,s)=>{const o=zr(s,t.Ou(r));o!=null&&(e[r]=o)}),{mapValue:{fields:e}}}function uc(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof st||n instanceof vi||n instanceof Fe||n instanceof Tt||n instanceof Ei||n instanceof Ti)}function Ai(n,t,e){if(!uc(e)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(e)){const r=gi(e);throw r==="an object"?t.qu(n+" a custom object"):t.qu(n+" "+r)}}function Ks(n,t,e){if((t=jt(t))instanceof qr)return t._internalPath;if(typeof t=="string")return Ri(n,t);throw Er("Field path arguments must be of type string or ",n,!1,void 0,e)}const Bm=new RegExp("[~\\*/\\[\\]]");function Ri(n,t,e){if(t.search(Bm)>=0)throw Er(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,e);try{return new qr(...t.split("."))._internalPath}catch{throw Er(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,e)}}function Er(n,t,e,r,s){const o=r&&!r.isEmpty(),a=s!==void 0;let c=`Function ${t}() called with invalid data`;e&&(c+=" (via `toFirestore()`)"),c+=". ";let h="";return(o||a)&&(h+=" (found",o&&(h+=` in field ${r}`),a&&(h+=` in document ${s}`),h+=")"),new N(P.INVALID_ARGUMENT,c+n+h)}function cc(n,t){return n.some(e=>e.isEqual(t))}/**
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
 */class lc{constructor(t,e,r,s,o){this._firestore=t,this._userDataWriter=e,this._key=r,this._document=s,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new Tt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new Um(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(hc("DocumentSnapshot.get",t));if(e!==null)return this._userDataWriter.convertValue(e)}}}class Um extends lc{data(){return super.data()}}function hc(n,t){return typeof t=="string"?Ri(n,t):t instanceof qr?t._internalPath:t._delegate._internalPath}/**
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
 */function qm(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new N(P.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class jm{convertValue(t,e="none"){switch(oe(t)){case 0:return null;case 1:return t.booleanValue;case 2:return et(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(ie(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 11:return this.convertObject(t.mapValue,e);case 10:return this.convertVectorValue(t.mapValue);default:throw O()}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const r={};return ue(t,(s,o)=>{r[s]=this.convertValue(o,e)}),r}convertVectorValue(t){var e,r,s;const o=(s=(r=(e=t.fields)===null||e===void 0?void 0:e.value.arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map(a=>et(a.doubleValue));return new Ti(o)}convertGeoPoint(t){return new vi(et(t.latitude),et(t.longitude))}convertArray(t,e){return(t.values||[]).map(r=>this.convertValue(r,e))}convertServerTimestamp(t,e){switch(e){case"previous":const r=Pr(t);return r==null?null:this.convertValue(r,e);case"estimate":return this.convertTimestamp(Tn(t));default:return null}}convertTimestamp(t){const e=se(t);return new st(e.seconds,e.nanos)}convertDocumentKey(t,e){const r=Y.fromString(t);H(Du(r));const s=new In(r.get(1),r.get(3)),o=new M(r.popFirst(5));return s.isEqual(e)||$t(`Document ${o} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),o}}/**
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
 */function dc(n,t,e){let r;return r=n?n.toFirestore(t):t,r}/**
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
 */class hn{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class fc extends lc{constructor(t,e,r,s,o,a){super(t,e,r,s,a),this._firestore=t,this._firestoreImpl=t,this.metadata=o}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new ir(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const r=this._document.data.field(hc("DocumentSnapshot.get",t));if(r!==null)return this._userDataWriter.convertValue(r,e.serverTimestamps)}}}class ir extends fc{data(t={}){return super.data(t)}}class zm{constructor(t,e,r,s){this._firestore=t,this._userDataWriter=e,this._snapshot=s,this.metadata=new hn(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const t=[];return this.forEach(e=>t.push(e)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,e){this._snapshot.docs.forEach(r=>{t.call(e,new ir(this._firestore,this._userDataWriter,r.key,r,new hn(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new N(P.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(s,o){if(s._snapshot.oldDocs.isEmpty()){let a=0;return s._snapshot.docChanges.map(c=>{const h=new ir(s._firestore,s._userDataWriter,c.doc.key,c.doc,new hn(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);return c.doc,{type:"added",doc:h,oldIndex:-1,newIndex:a++}})}{let a=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(c=>o||c.type!==3).map(c=>{const h=new ir(s._firestore,s._userDataWriter,c.doc.key,c.doc,new hn(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);let f=-1,m=-1;return c.type!==0&&(f=a.indexOf(c.doc.key),a=a.delete(c.doc.key)),c.type!==1&&(a=a.add(c.doc),m=a.indexOf(c.doc.key)),{type:$m(c.type),doc:h,oldIndex:f,newIndex:m}})}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}}function $m(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return O()}}/**
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
 */function Gm(n){n=Nt(n,Tt);const t=Nt(n.firestore,Ee);return bm(yi(t),n._key).then(e=>gc(t,n,e))}class mc extends jm{constructor(t){super(),this.firestore=t}convertBytes(t){return new Fe(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new Tt(this.firestore,null,e)}}function Km(n,t,e){n=Nt(n,Tt);const r=Nt(n.firestore,Ee),s=dc(n.converter,t);return Si(r,[oc(wi(r),"setDoc",n._key,s,n.converter!==null,e).toMutation(n._key,kt.none())])}function Hm(n,t,e,...r){n=Nt(n,Tt);const s=Nt(n.firestore,Ee),o=wi(s);let a;return a=typeof(t=jt(t))=="string"||t instanceof qr?Fm(o,"updateDoc",n._key,t,e,r):Lm(o,"updateDoc",n._key,t),Si(s,[a.toMutation(n._key,kt.exists(!0))])}function pc(n,t){const e=Nt(n.firestore,Ee),r=_i(n),s=dc(n.converter,t);return Si(e,[oc(wi(n.firestore),"addDoc",r._key,s,n.converter!==null,{}).toMutation(r._key,kt.exists(!1))]).then(()=>r)}function Hs(n,...t){var e,r,s;n=jt(n);let o={includeMetadataChanges:!1,source:"default"},a=0;typeof t[a]!="object"||ba(t[a])||(o=t[a],a++);const c={includeMetadataChanges:o.includeMetadataChanges,source:o.source};if(ba(t[a])){const E=t[a];t[a]=(e=E.next)===null||e===void 0?void 0:e.bind(E),t[a+1]=(r=E.error)===null||r===void 0?void 0:r.bind(E),t[a+2]=(s=E.complete)===null||s===void 0?void 0:s.bind(E)}let h,f,m;if(n instanceof Tt)f=Nt(n.firestore,Ee),m=Vr(n._key.path),h={next:E=>{t[a]&&t[a](gc(f,n,E))},error:t[a+1],complete:t[a+2]};else{const E=Nt(n,Ur);f=Nt(E.firestore,Ee),m=E._query;const A=new mc(f);h={next:C=>{t[a]&&t[a](new zm(f,A,E,C))},error:t[a+1],complete:t[a+2]},qm(n._query)}return function(A,C,D,k){const V=new tc(k),z=new Gu(C,V,D);return A.asyncQueue.enqueueAndForget(async()=>zu(await Gs(A),z)),()=>{V.eu(),A.asyncQueue.enqueueAndForget(async()=>$u(await Gs(A),z))}}(yi(f),m,c,h)}function Si(n,t){return function(r,s){const o=new ee;return r.asyncQueue.enqueueAndForget(async()=>_m(await Pm(r),s,o)),o.promise}(yi(n),t)}function gc(n,t,e){const r=e.docs.get(t._key),s=new mc(n);return new fc(n,s,t._key,r,new hn(e.hasPendingWrites,e.fromCache),t.converter)}(function(t,e=!0){(function(s){Ue=s})(Ph),cr(new yn("firestore",(r,{instanceIdentifier:s,options:o})=>{const a=r.getProvider("app").getImmediate(),c=new Ee(new zh(r.getProvider("auth-internal")),new Hh(r.getProvider("app-check-internal")),function(f,m){if(!Object.prototype.hasOwnProperty.apply(f.options,["projectId"]))throw new N(P.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new In(f.options.projectId,m)}(a,s),a);return o=Object.assign({useFetchStreams:e},o),c._setSettings(o),c},"PUBLIC").setMultipleInstances(!0)),Ve(Go,"4.7.5",t),Ve(Go,"4.7.5","esm2017")})();class Vt{constructor(t=0,e=0){Vt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,r=this.y,s=t.elements;return this.x=s[0]*e+s[3]*r+s[6],this.y=s[1]*e+s[4]*r+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(t,Math.min(e,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,r=this.y-t.y;return e*e+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,r){return this.x=t.x+(e.x-t.x)*r,this.y=t.y+(e.y-t.y)*r,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}rotateAround(t,e){const r=Math.cos(e),s=Math.sin(e),o=this.x-t.x,a=this.y-t.y;return this.x=o*r-a*s+t.x,this.y=o*s+a*r+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}const Va=new Vt;class Da{constructor(t=new Vt(1/0,1/0),e=new Vt(-1/0,-1/0)){this.isBox2=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromPoints(t){this.makeEmpty();for(let e=0,r=t.length;e<r;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const r=Va.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(r),this.max.copy(t).add(r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(t=new Vt){return this.isEmpty()?t.set(0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t=new Vt){return this.isEmpty()?t.set(0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y)}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return Va.copy(t).clamp(this.min,this.max).sub(t).length()}intersect(t){return this.min.max(t.min),this.max.min(t.max),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const _c=12,Qm=1.5;function Wm(n){let t=n.player_state[0],e=n.player_state[1],r=t.pos.clone().sub(e.pos),s=t.vel.clone(),o=_c,a=3,[c,h,f]=[s.dot(s)-o*o,2*s.dot(r)+2*a*o*o,r.dot(r)-a*a*o*o],m=(-h-Math.sqrt(h*h-4*c*f))/(2*c),E=(-h+Math.sqrt(h*h-4*c*f))/(2*c),A=0;m>0&&E>0?A=Math.min(m,E):m>0?A=m:E>0&&(A=E);let C=t.pos.clone().addScaledVector(t.vel,A),D=[C.x,C.y],k=Ci();return k.mouse_inp=D,k.mouse_left=!0,k}function xa(n,t){let e={player_state:[],bullet_state:[],frame:n.frame+1},r=n.player_state;for(var s=0;s<r.length;s+=1){var o=$r(r[s]);let c=t[s],h=new Vt(c.dir_inp[0],c.dir_inp[1]);h.normalize(),c.mouse_right&&o.dash_cooldown<=0&&(o.vel.addScaledVector(h,20),o.dash_cooldown=30,o.dash_time=9),o.dash_time<=0&&o.vel.clampLength(0,9),o.vel.addScaledVector(h,1.5),o.vel.addScaledVector(o.vel,-.2),o.pos.add(o.vel),o.pos.clampScalar(0,490),o.bullet_cooldown-=1,o.dash_cooldown-=1,o.dash_time-=1;let f=new Vt(c.mouse_inp[0],c.mouse_inp[1]);if(c.mouse_left&&o.bullet_cooldown<=0){let E=f.clone().sub(o.pos);E.normalize(),c.space?(e.bullet_state.push({pos:o.pos.clone().addScaledVector(E,30),vel:E.clone().multiplyScalar(Qm),lifetime:500,size:15}),o.bullet_cooldown=20):(e.bullet_state.push({pos:o.pos.clone().addScaledVector(E,30),vel:E.clone().multiplyScalar(_c),lifetime:200,size:5}),o.bullet_cooldown=10)}let m=new Da(o.pos,o.pos.clone().addScalar(10));for(var a=0;a<n.bullet_state.length;a+=1){let E=n.bullet_state[a],A=new Da(E.pos,E.pos.clone().addScalar(E.size));m.intersectsBox(A)&&(o.health-=10,E.lifetime=0)}e.player_state.push(o)}for(var s=0;s<n.bullet_state.length;s+=1){let h=n.bullet_state[s],f=h.pos.clone().add(h.vel),m=h.lifetime-1;m>0&&e.bullet_state.push({pos:f,vel:h.vel.clone(),size:h.size,lifetime:m})}return e}function Ci(n=0,t=0,e=0,r=0,s=!1,o=!1,a=!1){return{dir_inp:[n,t],mouse_inp:[e,r],mouse_left:s,mouse_right:o,space:a}}function $r(n=!1){return n?{pos:n.pos.clone(),vel:n.vel.clone(),health:n.health,bullet_cooldown:n.bullet_cooldown,dash_cooldown:n.dash_cooldown,dash_time:n.dash_time}:{pos:new Vt(0,0),vel:new Vt(0,0),health:100,bullet_cooldown:0,dash_cooldown:0,dash_time:0}}function ka(n,t){if(n===t)return!0;if(n==null||t==null||n.length!==t.length)return!1;for(var e=0;e<n.length;++e)if(n[e]!==t[e])return!1;return!0}function Xm(n,t){return ka(n.dir_inp,t.dir_inp)&&n.mouse_left==t.mouse_left&&n.mouse_right==t.mouse_right&&(ka(n.mouse_inp,t.mouse_inp)||!(n.mouse_left||n.mouse_right))}var[Pi,bi]=[0,0],[vr,Tr,Ir,wr]=[0,0,0,0],[Vi,Di]=[!1,!1],_e={};document.addEventListener("keydown",Ym);document.addEventListener("keyup",Jm);function Ym(n){n.code=="ArrowDown"||n.code=="KeyS"?Ir=1:n.code=="ArrowUp"||n.code=="KeyW"?vr=1:n.code=="ArrowLeft"||n.code=="KeyA"?wr=1:n.code=="ArrowRight"||n.code=="KeyD"?Tr=1:_e[n.code]=!0,n.code=="Space"&&n.preventDefault(),[Vi,Di]=[_e.Space,_e.LeftShift],Pi=Tr-wr,bi=Ir-vr}function Jm(n){n.code=="ArrowDown"||n.code=="KeyS"?(Ir=0,n.preventDefault()):n.code=="ArrowUp"||n.code=="KeyW"?vr=0:n.code=="ArrowLeft"||n.code=="KeyA"?wr=0:n.code=="ArrowRight"||n.code=="KeyD"?Tr=0:_e[n.code]=!1,[Vi,Di]=[_e.Space,_e.LeftShift],Pi=Tr-wr,bi=Ir-vr}const Ar=document.getElementById("canvas");Ar.oncontextmenu=function(n){n.preventDefault(),n.stopPropagation()};const Rt=Ar.getContext("2d");var yc=0,Ec=0,vc=!1,Tc=!1;Ar.addEventListener("mousemove",n=>{let t=Ar.getBoundingClientRect();yc=n.clientX-t.left,Ec=n.clientY-t.top});function Ic(n){vc=(n.buttons&1)===1,Tc=(n.buttons&2)===2}document.addEventListener("mousedown",Ic);document.addEventListener("mouseup",Ic);function Zm(n){if(n.player_state[0].health<=0){Rt.font="48px serif",Rt.fillStyle="red",Rt.fillText("P2 Wins!",250,250);return}else if(n.player_state[1].health<=0){Rt.font="48px serif",Rt.fillStyle="blue",Rt.fillText("P1 Wins!",250,250);return}Rt.fillStyle="green",Rt.fillRect(0,0,1e3,1e3);let t=n.player_state;for(var e=0;e<t.length;e+=1){var r=t[e],s=r.pos.x,o=r.pos.y;Rt.fillStyle=e===0?"blue":"red",Rt.fillRect(s,o,10,10),Rt.fillRect(s-1,o-12,12*r.health/100,2)}for(var e=0;e<n.bullet_state.length;e+=1){let c=n.bullet_state[e],h=c.pos.x;var o=c.pos.y;Rt.fillStyle="orange",Rt.fillRect(h,o,c.size,c.size)}}let Gr=$r();Gr.pos=new Vt(10,10);let tp=$r(Gr);Gr.pos=new Vt(450,450);let ep=$r(Gr),St={frame:0,player_state:[tp,ep],bullet_state:[]},Xt=0,Ct=60,As=3,wc=[],or=[],Yt=[],Na=Ci();for(let n=0;n<Ct;n+=1)wc[n]=St,or[n]=[0,Na],Yt[n]=[0,Na,!1];let _n=[];function np(n){let[t,e]=JSON.parse(n.data);t%100==0&&console.log("stack size",_n.length),_n.push([t,e])}function rp(){let n=[],t=St.frame,e=t,r=!1;for(let s=0;s<_n.length;s++){let[o,a]=_n[s];if(o>t)n.push([o,a]);else if(o>t-Ct){let c=(Xt-1-(t-o)+Ct)%Ct,[h,f,m]=Yt[c];h===o&&!Xm(a,f)&&(m!=!0&&console.log("double message detected"),r=!0,e=Math.min(e,h)),Yt[c]=[o,a,!1]}}return _n=n,[e,r]}function xi(n,t){const e=33.333333333333336;let r=0,s=0;t!=null&&(t.onmessage=np);const o=a=>{const c=a-r;for(s=s+c,r=a;s>e;){s=s-e;let h=St.frame,[f,m,E]=rp();if(m){console.log("running rollback from %d to %d",f,h);let W=(Xt-1-(h-f)+Ct)%Ct,yt=St;for(;f<=h;){let tt=(W-1-As+Ct)%Ct,[T,p]=or[tt],[_,y,v]=Yt[tt];_!=T&&console.log("you fucked up");let w=n==0?[p,y]:[y,p];yt=xa(yt,w),f+=1,W+=1}}if(h>=E+As+3)continue;let A=(Xt-1-As+Ct)%Ct,[C,D]=or[A],[k,V,z]=Yt[A];if(k!=C){let[W,yt,tt]=Yt[(A-1+Ct)%Ct];Yt[A]=[C,yt,!0],V=yt}let G=n==0?[D,V]:[V,D];St=xa(St,G),wc[Xt]=St;let K=Ci(Pi,bi,yc,Ec,vc,Tc,Vi||Di);if(or[Xt]=[St.frame,K],t==null){let W=Wm(St);Yt[Xt]=[St.frame,W,!1]}else{let W=JSON.stringify([St.frame,K]);t.send(W)}Xt=(Xt+1)%Ct}_e.KeyJ&&console.log(St),Zm(St),window.requestAnimationFrame(o)};window.requestAnimationFrame(a=>{r=a,window.requestAnimationFrame(o)})}const sp=document.getElementById("startGameButton");sp.onclick=()=>xi(0,null);const ip={apiKey:"AIzaSyD6QdGyS8ZfuBGGK4n__iCjL-Sig02I4ko",authDomain:"rtcpvp-aa61c.firebaseapp.com",projectId:"rtcpvp-aa61c",storageBucket:"rtcpvp-aa61c.firebasestorage.app",messagingSenderId:"224703323248",appId:"1:224703323248:web:4482f0165bd5b481b4e8b5"},op=za(ip),Ac=xm(op),ap={iceServers:[{urls:["stun:stun1.l.google.com:19302","stun:stun2.l.google.com:19302"]}],iceCandidatePoolSize:10},Pt=new RTCPeerConnection(ap);var Dt=null,Rr=null;const Rc=document.getElementById("callButton"),Sc=document.getElementById("callInput"),Cc=document.getElementById("answerButton");document.getElementById("hangupButton");const up=document.getElementById("startGameButton");Rc.onclick=async()=>{Dt=Pt.createDataChannel("sendChannel"),Dt.onopen=function(){Rr=0,xi(Rr,Dt)},Dt.onclose=function(){console.log("pc_channel closed")},Dt.onmessage=function(o){console.log("Got Data Channel Message:",o.data)};const n=_i(gn(Ac,"calls")),t=gn(n,"offerCandidates"),e=gn(n,"answerCandidates");Sc.value=n.id,Pt.onicecandidate=async o=>{o.candidate&&await pc(t,o.candidate.toJSON())};const r=await Pt.createOffer();await Pt.setLocalDescription(r);const s={sdp:r.sdp,type:r.type};await Km(n,{offer:s}),Hs(n,o=>{const a=o.data();if(!Pt.currentRemoteDescription&&(a!=null&&a.answer)){const c=new RTCSessionDescription(a.answer);Pt.setRemoteDescription(c)}}),Hs(e,o=>{o.docChanges().forEach(a=>{if(a.type==="added"){const c=new RTCIceCandidate(a.doc.data());Pt.addIceCandidate(c)}})}),Cc.disabled=!0};function cp(n){console.log(n.data)}function Ma(n){Dt&&console.log("Receive channel's status has changed to "+Dt.readyState)}function lp(n){Dt=n.channel,Dt.onmessage=cp,Dt.onopen=Ma,Dt.onclose=Ma,up.disabled=!1,Rr=1,xi(Rr,Dt)}Cc.onclick=async()=>{Pt.ondatachannel=lp;const n=Sc.value,t=_i(Ac,"calls",n),e=gn(t,"answerCandidates"),r=gn(t,"offerCandidates");Pt.onicecandidate=async f=>{f.candidate&&await pc(e,f.candidate.toJSON())};const a=(await Gm(t)).data().offer;await Pt.setRemoteDescription(new RTCSessionDescription(a));const c=await Pt.createAnswer();await Pt.setLocalDescription(c);const h={type:c.type,sdp:c.sdp};await Hm(t,{answer:h}),Hs(r,f=>{f.docChanges().forEach(m=>{if(m.type==="added"){const E=m.doc.data();Pt.addIceCandidate(new RTCIceCandidate(E))}})}),Rc.disabled=!0};
