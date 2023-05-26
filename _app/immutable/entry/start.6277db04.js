import{o as e,t}from"../chunks/index.ddf2d2a2.js";import{S as r,a as n,I as a,g as o,f as s,b as i,c as l,s as c,d as u,i as d,P as f,e as p}from"../chunks/singletons.46781721.js";import{b as h}from"../chunks/paths.6e8374d1.js";function m(e){for(const t in e)e[t]=decodeURIComponent(e[t]);return e}const v=["href","pathname","search","searchParams","toString","toJSON"];function g(e,t){const r=new URL(e);for(const n of v)Object.defineProperty(r,n,{get:()=>(t(),e[n]),enumerable:!0,configurable:!0});return function(e){Object.defineProperty(e,"hash",{get(){throw new Error("Cannot access event.url.hash. Consider using `$page.url.hash` inside a component instead")}})}(r),r}const y="/__data.json";function w(e){try{return JSON.parse(sessionStorage[e])}catch{}}function b(e,t){const r=JSON.stringify(t);try{sessionStorage[e]=r}catch{}}const _=window.fetch;window.fetch=(e,t)=>("GET"!==(e instanceof Request?e.method:(null==t?void 0:t.method)||"GET")&&S.delete(k(e)),_(e,t));const S=new Map;function k(e,t){let r=`script[data-sveltekit-fetched][data-url=${JSON.stringify(e instanceof Request?e.url:e)}]`;if((null==t?void 0:t.headers)||(null==t?void 0:t.body)){const e=[];t.headers&&e.push([...new Headers(t.headers)].join(",")),t.body&&("string"==typeof t.body||ArrayBuffer.isView(t.body))&&e.push(t.body),r+=`[data-hash="${function(...e){let t=5381;for(const r of e)if("string"==typeof r){let e=r.length;for(;e;)t=33*t^r.charCodeAt(--e)}else{if(!ArrayBuffer.isView(r))throw new TypeError("value must be a string or TypedArray");{const e=new Uint8Array(r.buffer,r.byteOffset,r.byteLength);let n=e.length;for(;n;)t=33*t^e[--n]}}return(t>>>0).toString(36)}(...e)}"]`}return r}const E=/^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;function R(e){const t=[];var r;return{pattern:"/"===e?/^\/$/:new RegExp(`^${(r=e,r.slice(1).split("/").filter(x)).map((e=>{const r=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(e);if(r)return t.push({name:r[1],matcher:r[2],optional:!1,rest:!0,chained:!0}),"(?:/(.*))?";const n=/^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(e);if(n)return t.push({name:n[1],matcher:n[2],optional:!0,rest:!1,chained:!0}),"(?:/([^/]+))?";if(!e)return;const a=e.split(/\[(.+?)\](?!\])/);return"/"+a.map(((e,r)=>{if(r%2){if(e.startsWith("x+"))return L(String.fromCharCode(parseInt(e.slice(2),16)));if(e.startsWith("u+"))return L(String.fromCharCode(...e.slice(2).split("-").map((e=>parseInt(e,16)))));const n=E.exec(e);if(!n)throw new Error(`Invalid param: ${e}. Params and matcher names can only have underscores and alphanumeric characters.`);const[,o,s,i,l]=n;return t.push({name:i,matcher:l,optional:!!o,rest:!!s,chained:!!s&&(1===r&&""===a[0])}),s?"(.*?)":o?"([^/]*)?":"([^/]+?)"}return L(e)})).join("")})).join("")}/?$`),params:t}}function x(e){return!/^\([^)]+\)$/.test(e)}function L(e){return e.normalize().replace(/[[\]]/g,"\\$&").replace(/%/g,"%25").replace(/\//g,"%2[Ff]").replace(/\?/g,"%3[Ff]").replace(/#/g,"%23").replace(/[.*+?^${}()|\\]/g,"\\$&")}class A{constructor(e,t){this.status=e,this.body="string"==typeof t?{message:t}:t||{message:`Error: ${e}`}}toString(){return JSON.stringify(this.body)}}class U{constructor(e,t){this.status=e,this.location=t}}const O=-1,P=-2,j=-3,$=-4,C=-5,I=-6;const D=new Set(["load","prerender","csr","ssr","trailingSlash","config"]);const N="x-sveltekit-invalidated",T=w(r)??{},q=w(n)??{};function M(e){T[e]=u()}function B(p,v){var y;const w=function({nodes:e,server_loads:t,dictionary:r,matchers:n}){const a=new Set(t);return Object.entries(r).map((([t,[r,a,i]])=>{const{pattern:l,params:c}=R(t),u={id:t,exec:e=>{const t=l.exec(e);if(t)return function(e,t,r){const n={},a=e.slice(1);let o=0;for(let s=0;s<t.length;s+=1){const e=t[s],i=a[s-o];if(e.chained&&e.rest&&o)n[e.name]=a.slice(s-o,s+1).filter((e=>e)).join("/"),o=0;else if(void 0!==i)if(e.matcher&&!r[e.matcher](i)){if(!e.optional||!e.chained)return;o++}else{n[e.name]=i;const r=t[s+1],l=a[s+1];r&&!r.rest&&r.optional&&l&&(o=0)}else e.rest&&(n[e.name]="")}if(!o)return n}(t,c,n)},errors:[1,...i||[]].map((t=>e[t])),layouts:[0,...a||[]].map(s),leaf:o(r)};return u.errors.length=u.layouts.length=Math.max(u.errors.length,u.layouts.length),u}));function o(t){const r=t<0;return r&&(t=~t),[r,e[t]]}function s(t){return void 0===t?t:[a.has(t),e[t]]}}(p),E=p.nodes[0],x=p.nodes[1];E(),x();const L=document.documentElement,O=[],P=[];let j=null;const $={before_navigate:[],after_navigate:[]};let C,I={branch:[],error:null,url:null},D=!1,N=!1,B=!0,G=!1,H=!1,K=!1,W=!1,z=null==(y=history.state)?void 0:y[a];z||(z=Date.now(),history.replaceState({...history.state,[a]:z},"",location.href));const Q=T[z];let X,Y,Z;async function ee(){Z=Z||Promise.resolve(),await Z,Z=null;const e=new URL(location.href),t=me(e,!0);j=null;const r=Y={},n=t&&await fe(t);if(r===Y&&n){if("redirect"===n.type)return ae(new URL(n.location,e).href,{},[e.pathname],r);void 0!==n.props.page&&(X=n.props.page),C.$set(n.props)}}function te(e){P.some((e=>null==e?void 0:e.snapshot))&&(q[e]=P.map((e=>{var t;return null==(t=null==e?void 0:e.snapshot)?void 0:t.capture()})))}function re(e){var t;null==(t=q[e])||t.forEach(((e,t)=>{var r,n;null==(n=null==(r=P[t])?void 0:r.snapshot)||n.restore(e)}))}function ne(){M(z),b(r,T),te(z),b(n,q)}async function ae(e,{noScroll:t=!1,replaceState:r=!1,keepFocus:n=!1,state:a={},invalidateAll:s=!1},i,l){return"string"==typeof e&&(e=new URL(e,o(document))),ye({url:e,scroll:t?u():null,keepfocus:n,redirect_chain:i,details:{state:a,replaceState:r},nav_token:l,accepted:()=>{s&&(W=!0)},blocked:()=>{},type:"goto"})}async function oe(e){return j={id:e.id,promise:fe(e).then((e=>("loaded"===e.type&&e.state.error&&(j=null),e)))},j.promise}async function se(...e){const t=w.filter((t=>e.some((e=>t.exec(e))))).map((e=>Promise.all([...e.layouts,e.leaf].map((e=>null==e?void 0:e[1]())))));await Promise.all(t)}function ie(e){var t;I=e.state;const r=document.querySelector("style[data-sveltekit]");r&&r.remove(),X=e.props.page,C=new p.root({target:v,props:{...e.props,stores:c,components:P},hydrate:!0}),re(z);const n={from:null,to:{params:I.params,route:{id:(null==(t=I.route)?void 0:t.id)??null},url:new URL(location.href)},willUnload:!1,type:"enter"};$.after_navigate.forEach((e=>e(n))),N=!0}async function le({url:e,params:t,branch:r,status:n,error:a,route:o,form:s}){let i="never";for(const m of r)void 0!==(null==m?void 0:m.slash)&&(i=m.slash);var l,c;e.pathname=(l=e.pathname,c=i,"/"===l||"ignore"===c?l:"never"===c?l.endsWith("/")?l.slice(0,-1):l:"always"!==c||l.endsWith("/")?l:l+"/"),e.search=e.search;const u={type:"loaded",state:{url:e,params:t,branch:r,error:a,route:o},props:{constructors:(d=r,d.filter((e=>null!=e))).map((e=>e.node.component))}};var d;void 0!==s&&(u.props.form=s);let f={},p=!X,h=0;for(let m=0;m<Math.max(r.length,I.branch.length);m+=1){const e=r[m],t=I.branch[m];(null==e?void 0:e.data)!==(null==t?void 0:t.data)&&(p=!0),e&&(f={...f,...e.data},p&&(u.props[`data_${h}`]=f),h+=1)}return(!I.url||e.href!==I.url.href||I.error!==a||void 0!==s&&s!==X.form||p)&&(u.props.page={error:a,params:t,route:{id:(null==o?void 0:o.id)??null},status:n,url:new URL(e),form:s??null,data:p?f:X.data}),u}async function ce({loader:e,parent:t,url:r,params:n,route:a,server_data_node:o}){var s,i,l;let c=null;const u={dependencies:new Set,params:new Set,parent:!1,route:!1,url:!1},d=await e();if(null==(s=d.universal)?void 0:s.load){let e=function(...e){for(const t of e){const{href:e}=new URL(t,r);u.dependencies.add(e)}};const s={route:{get id(){return u.route=!0,a.id}},params:new Proxy(n,{get:(e,t)=>(u.params.add(t),e[t])}),data:(null==o?void 0:o.data)??null,url:g(r,(()=>{u.url=!0})),async fetch(t,n){let a;t instanceof Request?(a=t.url,n={body:"GET"===t.method||"HEAD"===t.method?void 0:await t.blob(),cache:t.cache,credentials:t.credentials,headers:t.headers,integrity:t.integrity,keepalive:t.keepalive,method:t.method,mode:t.mode,redirect:t.redirect,referrer:t.referrer,referrerPolicy:t.referrerPolicy,signal:t.signal,...n}):a=t;const o=new URL(a,r);return e(o.href),o.origin===r.origin&&(a=o.href.slice(r.origin.length)),N?function(e,t,r){if(S.size>0){const t=k(e,r),n=S.get(t);if(n){if(performance.now()<n.ttl&&["default","force-cache","only-if-cached",void 0].includes(null==r?void 0:r.cache))return new Response(n.body,n.init);S.delete(t)}}return _(t,r)}(a,o.href,n):function(e,t){const r=k(e,t),n=document.querySelector(r);if(null==n?void 0:n.textContent){const{body:e,...t}=JSON.parse(n.textContent),a=n.getAttribute("data-ttl");return a&&S.set(r,{body:e,init:t,ttl:1e3*Number(a)}),Promise.resolve(new Response(e,t))}return _(e,t)}(a,n)},setHeaders:()=>{},depends:e,parent:()=>(u.parent=!0,t())};c=await d.universal.load.call(null,s)??null,c=c?await async function(e){var t;for(const r in e)if("function"==typeof(null==(t=e[r])?void 0:t.then))return Object.fromEntries(await Promise.all(Object.entries(e).map((async([e,t])=>[e,await t]))));return e}(c):null}return{node:d,loader:e,server:o,universal:(null==(i=d.universal)?void 0:i.load)?{type:"data",data:c,uses:u}:null,data:c??(null==o?void 0:o.data)??null,slash:(null==(l=d.universal)?void 0:l.trailingSlash)??(null==o?void 0:o.slash)}}function ue(e,t,r,n,a){if(W)return!0;if(!n)return!1;if(n.parent&&e)return!0;if(n.route&&t)return!0;if(n.url&&r)return!0;for(const o of n.params)if(a[o]!==I.params[o])return!0;for(const o of n.dependencies)if(O.some((e=>e(new URL(o)))))return!0;return!1}function de(e,t){return"data"===(null==e?void 0:e.type)?e:"skip"===(null==e?void 0:e.type)?t??null:null}async function fe({id:e,invalidating:t,url:r,params:n,route:a}){if((null==j?void 0:j.id)===e)return j.promise;const{errors:o,layouts:s,leaf:i}=a,l=[...s,i];o.forEach((e=>null==e?void 0:e().catch((()=>{})))),l.forEach((e=>null==e?void 0:e[1]().catch((()=>{}))));let u=null;const d=!!I.url&&e!==I.url.pathname+I.url.search,f=!!I.route&&a.id!==I.route.id;let p=!1;const h=l.map(((e,t)=>{var r;const a=I.branch[t],o=!!(null==e?void 0:e[0])&&((null==a?void 0:a.loader)!==e[1]||ue(p,f,d,null==(r=a.server)?void 0:r.uses,n));return o&&(p=!0),o}));if(h.some(Boolean)){try{u=await J(r,h)}catch(w){return he({status:w instanceof A?w.status:500,error:await _e(w,{url:r,params:n,route:{id:a.id}}),url:r,route:a})}if("redirect"===u.type)return u}const m=null==u?void 0:u.nodes;let v=!1;const g=l.map((async(e,t)=>{var o;if(!e)return;const s=I.branch[t],i=null==m?void 0:m[t];if(!(i&&"skip"!==i.type||e[1]!==(null==s?void 0:s.loader)||ue(v,f,d,null==(o=s.universal)?void 0:o.uses,n)))return s;if(v=!0,"error"===(null==i?void 0:i.type))throw i;return ce({loader:e[1],url:r,params:n,route:a,parent:async()=>{var e;const r={};for(let n=0;n<t;n+=1)Object.assign(r,null==(e=await g[n])?void 0:e.data);return r},server_data_node:de(void 0===i&&e[0]?{type:"skip"}:i??null,e[0]?null==s?void 0:s.server:void 0)})}));for(const c of g)c.catch((()=>{}));const y=[];for(let _=0;_<l.length;_+=1)if(l[_])try{y.push(await g[_])}catch(b){if(b instanceof U)return{type:"redirect",location:b.location};let e,t=500;if(null==m?void 0:m.includes(b))t=b.status??t,e=b.error;else if(b instanceof A)t=b.status,e=b.body;else{if(await c.updated.check())return await be(r);e=await _e(b,{params:n,url:r,route:{id:a.id}})}const s=await pe(_,y,o);return s?await le({url:r,params:n,branch:y.slice(0,s.idx).concat(s.node),status:t,error:e,route:a}):await we(r,{id:a.id},e,t)}else y.push(void 0);return await le({url:r,params:n,branch:y,status:200,error:null,route:a,form:t?void 0:null})}async function pe(e,t,r){for(;e--;)if(r[e]){let a=e;for(;!t[a];)a-=1;try{return{idx:a+1,node:{node:await r[e](),loader:r[e],data:{},server:null,universal:null}}}catch(n){continue}}}async function he({status:e,error:t,url:r,route:n}){const a={};let o=null;if(0===p.server_loads[0])try{const e=await J(r,[!0]);if("data"!==e.type||e.nodes[0]&&"data"!==e.nodes[0].type)throw 0;o=e.nodes[0]??null}catch{(r.origin!==location.origin||r.pathname!==location.pathname||D)&&await be(r)}const s=await ce({loader:E,url:r,params:a,route:n,parent:()=>Promise.resolve({}),server_data_node:de(o)}),i={node:await x(),loader:x,universal:null,server:null,data:null};return await le({url:r,params:a,branch:[s,i],status:e,error:t,route:null})}function me(e,t){if(d(e,h))return;const r=ve(e);for(const n of w){const a=n.exec(r);if(a){return{id:e.pathname+e.search,invalidating:t,route:n,params:m(a),url:e}}}}function ve(e){return(e.pathname.slice(h.length)||"/").split("%25").map(decodeURI).join("%25")}function ge({url:e,type:t,intent:r,delta:n}){var a,o;let s=!1;const i={from:{params:I.params,route:{id:(null==(a=I.route)?void 0:a.id)??null},url:I.url},to:{params:(null==r?void 0:r.params)??null,route:{id:(null==(o=null==r?void 0:r.route)?void 0:o.id)??null},url:e},willUnload:!r,type:t};void 0!==n&&(i.delta=n);const l={...i,cancel:()=>{s=!0}};return H||$.before_navigate.forEach((e=>e(l))),s?null:i}async function ye({url:e,scroll:r,keepfocus:n,redirect_chain:o,details:s,type:i,delta:l,nav_token:u={},accepted:f,blocked:p}){var m,v,g;const y=me(e,!1),w=ge({url:e,type:i,delta:l,intent:y});if(!w)return void p();const b=z;f(),H=!0,N&&c.navigating.set(w),Y=u;let _=y&&await fe(y);if(!_){if(d(e,h))return await be(e);_=await we(e,{id:null},await _e(new Error(`Not found: ${e.pathname}`),{url:e,params:{},route:{id:null}}),404)}if(e=(null==y?void 0:y.url)||e,Y!==u)return!1;if("redirect"===_.type){if(!(o.length>10||o.includes(e.pathname)))return ae(new URL(_.location,e).href,{},[...o,e.pathname],u),!1;_=await he({status:500,error:await _e(new Error("Redirect loop"),{url:e,params:{},route:{id:null}}),url:e,route:{id:null}})}else if((null==(m=_.props.page)?void 0:m.status)>=400){await c.updated.check()&&await be(e)}if(O.length=0,W=!1,G=!0,M(b),te(b),(null==(v=_.props.page)?void 0:v.url)&&_.props.page.url.pathname!==e.pathname&&(e.pathname=null==(g=_.props.page)?void 0:g.url.pathname),s){const t=s.replaceState?0:1;if(s.state[a]=z+=t,history[s.replaceState?"replaceState":"pushState"](s.state,"",e),!s.replaceState){let e=z+1;for(;q[e]||T[e];)delete q[e],delete T[e],e+=1}}j=null,N?(I=_.state,_.props.page&&(_.props.page.url=e),C.$set(_.props)):ie(_);const{activeElement:S}=document;if(await t(),B){const t=e.hash&&document.getElementById(decodeURIComponent(e.hash.slice(1)));r?scrollTo(r.x,r.y):t?t.scrollIntoView():scrollTo(0,0)}const k=document.activeElement!==S&&document.activeElement!==document.body;n||k||F(),B=!0,_.props.page&&(X=_.props.page),H=!1,"popstate"===i&&re(z),$.after_navigate.forEach((e=>e(w))),c.navigating.set(null),G=!1}async function we(e,t,r,n){return e.origin!==location.origin||e.pathname!==location.pathname||D?await be(e):await he({status:n,error:r,url:e,route:t})}function be(e){return location.href=e.href,new Promise((()=>{}))}function _e(e,t){return e instanceof A?e.body:p.hooks.handleError({error:e,event:t})??{message:null!=t.route.id?"Internal Error":"Not Found"}}return Q&&(history.scrollRestoration="manual",scrollTo(Q.x,Q.y)),{after_navigate:t=>{e((()=>($.after_navigate.push(t),()=>{const e=$.after_navigate.indexOf(t);$.after_navigate.splice(e,1)})))},before_navigate:t=>{e((()=>($.before_navigate.push(t),()=>{const e=$.before_navigate.indexOf(t);$.before_navigate.splice(e,1)})))},disable_scroll_handling:()=>{!G&&N||(B=!1)},goto:(e,t={})=>ae(e,t,[]),invalidate:e=>{if("function"==typeof e)O.push(e);else{const{href:t}=new URL(e,location.href);O.push((e=>e.href===t))}return ee()},invalidate_all:()=>(W=!0,ee()),preload_data:async e=>{const t=new URL(e,o(document)),r=me(t,!1);if(!r)throw new Error(`Attempted to preload a URL that does not belong to this app: ${t}`);await oe(r)},preload_code:se,apply_action:async e=>{if("error"===e.type){const r=new URL(location.href),{branch:n,route:a}=I;if(!a)return;const o=await pe(I.branch.length,n,a.errors);if(o){const s=await le({url:r,params:I.params,branch:n.slice(0,o.idx).concat(o.node),status:e.status??500,error:e.error,route:a});I=s.state,C.$set(s.props),t().then(F)}}else"redirect"===e.type?ae(e.location,{invalidateAll:!0},[]):(C.$set({form:null,page:{...X,form:e.data,status:e.status}}),await t(),C.$set({form:e.data}),"success"===e.type&&F())},_start_router:()=>{var e;history.scrollRestoration="manual",addEventListener("beforeunload",(e=>{var t;let r=!1;if(ne(),!H){const e={from:{params:I.params,route:{id:(null==(t=I.route)?void 0:t.id)??null},url:I.url},to:null,willUnload:!0,type:"leave",cancel:()=>r=!0};$.before_navigate.forEach((t=>t(e)))}r?(e.preventDefault(),e.returnValue=""):history.scrollRestoration="auto"})),addEventListener("visibilitychange",(()=>{"hidden"===document.visibilityState&&ne()})),(null==(e=navigator.connection)?void 0:e.saveData)||function(){let e;function t(e){n(e.composedPath()[0],1)}L.addEventListener("mousemove",(t=>{const r=t.target;clearTimeout(e),e=setTimeout((()=>{n(r,2)}),20)})),L.addEventListener("mousedown",t),L.addEventListener("touchstart",t,{passive:!0});const r=new IntersectionObserver((e=>{for(const t of e)t.isIntersecting&&(se(ve(new URL(t.target.href))),r.unobserve(t.target))}),{threshold:0});function n(e,t){const r=s(e,L);if(!r)return;const{url:n,external:a,download:o}=i(r,h);if(a||o)return;const c=l(r);if(!c.reload)if(t<=c.preload_data){const e=me(n,!1);e&&oe(e)}else t<=c.preload_code&&se(ve(n))}function a(){r.disconnect();for(const e of L.querySelectorAll("a")){const{url:t,external:n,download:a}=i(e,h);if(n||a)continue;const o=l(e);o.reload||(o.preload_code===f.viewport&&r.observe(e),o.preload_code===f.eager&&se(ve(t)))}}$.after_navigate.push(a),a()}(),L.addEventListener("click",(e=>{var t;if(e.button||1!==e.which)return;if(e.metaKey||e.ctrlKey||e.shiftKey||e.altKey)return;if(e.defaultPrevented)return;const r=s(e.composedPath()[0],L);if(!r)return;const{url:n,external:a,target:o,download:d}=i(r,h);if(!n)return;if("_parent"===o||"_top"===o){if(window.parent!==window)return}else if(o&&"_self"!==o)return;const f=l(r);if(!(r instanceof SVGAElement)&&n.protocol!==location.protocol&&"https:"!==n.protocol&&"http:"!==n.protocol)return;if(d)return;if(a||f.reload)return void(ge({url:n,type:"link"})?H=!0:e.preventDefault());const[p,m]=n.href.split("#");if(void 0!==m&&p===location.href.split("#")[0]){if(I.url.hash===n.hash)return e.preventDefault(),void(null==(t=r.ownerDocument.getElementById(m))||t.scrollIntoView());if(K=!0,M(z),I.url=n,c.page.set({...X,url:n}),c.page.notify(),!f.replace_state)return;K=!1,e.preventDefault()}ye({url:n,scroll:f.noscroll?u():null,keepfocus:f.keep_focus??!1,redirect_chain:[],details:{state:{},replaceState:f.replace_state??n.href===location.href},accepted:()=>e.preventDefault(),blocked:()=>e.preventDefault(),type:"link"})})),L.addEventListener("submit",(e=>{if(e.defaultPrevented)return;const t=HTMLFormElement.prototype.cloneNode.call(e.target),r=e.submitter;if("get"!==((null==r?void 0:r.formMethod)||t.method))return;const n=new URL((null==r?void 0:r.hasAttribute("formaction"))&&(null==r?void 0:r.formAction)||t.action);if(d(n,h))return;const a=e.target,{keep_focus:o,noscroll:s,reload:i,replace_state:c}=l(a);if(i)return;e.preventDefault(),e.stopPropagation();const f=new FormData(a),p=null==r?void 0:r.getAttribute("name");p&&f.append(p,(null==r?void 0:r.getAttribute("value"))??""),n.search=new URLSearchParams(f).toString(),ye({url:n,scroll:s?u():null,keepfocus:o??!1,redirect_chain:[],details:{state:{},replaceState:c??n.href===location.href},nav_token:{},accepted:()=>{},blocked:()=>{},type:"form"})})),addEventListener("popstate",(async e=>{var t;if(null==(t=e.state)?void 0:t[a]){if(e.state[a]===z)return;const t=T[e.state[a]];if(I.url.href.split("#")[0]===location.href.split("#")[0])return T[z]=u(),z=e.state[a],void scrollTo(t.x,t.y);const r=e.state[a]-z;await ye({url:new URL(location.href),scroll:t,keepfocus:!1,redirect_chain:[],details:null,accepted:()=>{z=e.state[a]},blocked:()=>{history.go(-r)},type:"popstate",delta:r})}})),addEventListener("hashchange",(()=>{K&&(K=!1,history.replaceState({...history.state,[a]:++z},"",location.href))}));for(const t of document.querySelectorAll("link"))"icon"===t.rel&&(t.href=t.href);addEventListener("pageshow",(e=>{e.persisted&&c.navigating.set(null)}))},_hydrate:async({status:e=200,error:t,node_ids:r,params:n,route:a,data:o,form:s})=>{D=!0;const i=new URL(location.href);let l;({params:n={},route:a={id:null}}=me(i,!1)||{});try{const c=r.map((async(e,t)=>{const r=o[t];return(null==r?void 0:r.uses)&&(r.uses=V(r.uses)),ce({loader:p.nodes[e],url:i,params:n,route:a,parent:async()=>{const e={};for(let r=0;r<t;r+=1)Object.assign(e,(await c[r]).data);return e},server_data_node:de(r)})})),u=await Promise.all(c),d=w.find((({id:e})=>e===a.id));if(d){const e=d.layouts;for(let t=0;t<e.length;t++)e[t]||u.splice(t,0,void 0)}l=await le({url:i,params:n,branch:u,status:e,error:t,form:s,route:d??null})}catch(c){if(c instanceof U)return void(await be(new URL(c.location,location.href)));l=await he({status:c instanceof A?c.status:500,error:await _e(c,{url:i,params:n,route:a}),url:i,route:a})}ie(l)}}}async function J(e,t){const r=new URL(e);r.pathname=e.pathname.replace(/\/$/,"")+y,r.searchParams.append(N,t.map((e=>e?"1":"0")).join(""));const n=await _(r.href);if(!n.ok)throw new A(n.status,await n.json());return new Promise((async e=>{var t;const r=new Map,a=n.body.getReader(),o=new TextDecoder;function s(e){return function(e,t){if("number"==typeof e)return a(e,!0);if(!Array.isArray(e)||0===e.length)throw new Error("Invalid input");const r=e,n=Array(r.length);function a(e,o=!1){if(e===O)return;if(e===j)return NaN;if(e===$)return 1/0;if(e===C)return-1/0;if(e===I)return-0;if(o)throw new Error("Invalid input");if(e in n)return n[e];const s=r[e];if(s&&"object"==typeof s)if(Array.isArray(s))if("string"==typeof s[0]){const r=s[0],o=null==t?void 0:t[r];if(o)return n[e]=o(a(s[1]));switch(r){case"Date":n[e]=new Date(s[1]);break;case"Set":const t=new Set;n[e]=t;for(let e=1;e<s.length;e+=1)t.add(a(s[e]));break;case"Map":const o=new Map;n[e]=o;for(let e=1;e<s.length;e+=2)o.set(a(s[e]),a(s[e+1]));break;case"RegExp":n[e]=new RegExp(s[1],s[2]);break;case"Object":n[e]=Object(s[1]);break;case"BigInt":n[e]=BigInt(s[1]);break;case"null":const i=Object.create(null);n[e]=i;for(let e=1;e<s.length;e+=2)i[s[e]]=a(s[e+1]);break;default:throw new Error(`Unknown type ${r}`)}}else{const t=new Array(s.length);n[e]=t;for(let e=0;e<s.length;e+=1){const r=s[e];r!==P&&(t[e]=a(r))}}else{const t={};n[e]=t;for(const e in s){const r=s[e];t[e]=a(r)}}else n[e]=s;return n[e]}return a(0)}(e,{Promise:e=>new Promise(((t,n)=>{r.set(e,{fulfil:t,reject:n})}))})}let i="";for(;;){const{done:n,value:l}=await a.read();if(n&&!i)break;for(i+=!l&&i?"\n":o.decode(l);;){const n=i.indexOf("\n");if(-1===n)break;const a=JSON.parse(i.slice(0,n));if(i=i.slice(n+1),"redirect"===a.type)return e(a);if("data"===a.type)null==(t=a.nodes)||t.forEach((e=>{"data"===(null==e?void 0:e.type)&&(e.uses=V(e.uses),e.data=s(e.data))})),e(a);else if("chunk"===a.type){const{id:e,data:t,error:n}=a,o=r.get(e);r.delete(e),n?o.reject(s(n)):o.fulfil(s(t))}}}}))}function V(e){return{dependencies:new Set((null==e?void 0:e.dependencies)??[]),params:new Set((null==e?void 0:e.params)??[]),parent:!!(null==e?void 0:e.parent),route:!!(null==e?void 0:e.route),url:!!(null==e?void 0:e.url)}}function F(){const e=document.querySelector("[autofocus]");if(e)e.focus();else{const e=document.body,t=e.getAttribute("tabindex");e.tabIndex=-1,e.focus({preventScroll:!0,focusVisible:!1}),null!==t?e.setAttribute("tabindex",t):e.removeAttribute("tabindex");const r=getSelection();if(r&&"None"!==r.type){const e=[];for(let t=0;t<r.rangeCount;t+=1)e.push(r.getRangeAt(t));setTimeout((()=>{if(r.rangeCount===e.length){for(let t=0;t<r.rangeCount;t+=1){const n=e[t],a=r.getRangeAt(t);if(n.commonAncestorContainer!==a.commonAncestorContainer||n.startContainer!==a.startContainer||n.endContainer!==a.endContainer||n.startOffset!==a.startOffset||n.endOffset!==a.endOffset)return}r.removeAllRanges()}}))}}}async function G(e,t,r){const n=B(e,t);p({client:n}),r?await n._hydrate(r):n.goto(location.href,{replaceState:!0}),n._start_router()}export{G as start};
