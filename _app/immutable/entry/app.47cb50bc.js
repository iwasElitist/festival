import{S as t,i as e,s as r,a as n,e as o,c as s,b as a,d as i,f as l,g as m,h as u,j as p,o as c,k as _,l as d,m as f,n as $,p as g,q as h,r as E,u as L,v as j,w as P,x as A,y as D,z as I,A as O,B as R}from"../chunks/index.89290646.js";const T={},V=function(t,e,r){if(!e||0===e.length)return t();const n=document.getElementsByTagName("link");return Promise.all(e.map((t=>{if(t=function(t,e){return new URL(t,e).href}(t,r),t in T)return;T[t]=!0;const e=t.endsWith(".css"),o=e?'[rel="stylesheet"]':"";if(!!r)for(let r=n.length-1;r>=0;r--){const o=n[r];if(o.href===t&&(!e||"stylesheet"===o.rel))return}else if(document.querySelector(`link[href="${t}"]${o}`))return;const s=document.createElement("link");return s.rel=e?"stylesheet":"modulepreload",e||(s.as="script",s.crossOrigin=""),s.href=t,document.head.appendChild(s),e?new Promise(((e,r)=>{s.addEventListener("load",e),s.addEventListener("error",(()=>r(new Error(`Unable to preload CSS for ${t}`))))})):void 0}))).then((()=>t()))},v={};function y(t){let e,r,n;var s=t[1][0];function p(t){return{props:{data:t[3],form:t[2]}}}return s&&(e=A(s,p(t)),t[12](e)),{c(){e&&D(e.$$.fragment),r=o()},l(t){e&&I(e.$$.fragment,t),r=o()},m(t,o){e&&O(e,t,o),a(t,r,o),n=!0},p(t,n){const o={};if(8&n&&(o.data=t[3]),4&n&&(o.form=t[2]),2&n&&s!==(s=t[1][0])){if(e){j();const t=e;i(t.$$.fragment,1,0,(()=>{R(t,1)})),l()}s?(e=A(s,p(t)),t[12](e),D(e.$$.fragment),m(e.$$.fragment,1),O(e,r.parentNode,r)):e=null}else s&&e.$set(o)},i(t){n||(e&&m(e.$$.fragment,t),n=!0)},o(t){e&&i(e.$$.fragment,t),n=!1},d(n){t[12](null),n&&u(r),e&&R(e,n)}}}function b(t){let e,r,n;var s=t[1][0];function p(t){return{props:{data:t[3],$$slots:{default:[w]},$$scope:{ctx:t}}}}return s&&(e=A(s,p(t)),t[11](e)),{c(){e&&D(e.$$.fragment),r=o()},l(t){e&&I(e.$$.fragment,t),r=o()},m(t,o){e&&O(e,t,o),a(t,r,o),n=!0},p(t,n){const o={};if(8&n&&(o.data=t[3]),8215&n&&(o.$$scope={dirty:n,ctx:t}),2&n&&s!==(s=t[1][0])){if(e){j();const t=e;i(t.$$.fragment,1,0,(()=>{R(t,1)})),l()}s?(e=A(s,p(t)),t[11](e),D(e.$$.fragment),m(e.$$.fragment,1),O(e,r.parentNode,r)):e=null}else s&&e.$set(o)},i(t){n||(e&&m(e.$$.fragment,t),n=!0)},o(t){e&&i(e.$$.fragment,t),n=!1},d(n){t[11](null),n&&u(r),e&&R(e,n)}}}function w(t){let e,r,n;var s=t[1][1];function p(t){return{props:{data:t[4],form:t[2]}}}return s&&(e=A(s,p(t)),t[10](e)),{c(){e&&D(e.$$.fragment),r=o()},l(t){e&&I(e.$$.fragment,t),r=o()},m(t,o){e&&O(e,t,o),a(t,r,o),n=!0},p(t,n){const o={};if(16&n&&(o.data=t[4]),4&n&&(o.form=t[2]),2&n&&s!==(s=t[1][1])){if(e){j();const t=e;i(t.$$.fragment,1,0,(()=>{R(t,1)})),l()}s?(e=A(s,p(t)),t[10](e),D(e.$$.fragment),m(e.$$.fragment,1),O(e,r.parentNode,r)):e=null}else s&&e.$set(o)},i(t){n||(e&&m(e.$$.fragment,t),n=!0)},o(t){e&&i(e.$$.fragment,t),n=!1},d(n){t[10](null),n&&u(r),e&&R(e,n)}}}function x(t){let e,r=t[6]&&k(t);return{c(){e=_("div"),r&&r.c(),this.h()},l(t){e=d(t,"DIV",{id:!0,"aria-live":!0,"aria-atomic":!0,style:!0});var n=f(e);r&&r.l(n),n.forEach(u),this.h()},h(){$(e,"id","svelte-announcer"),$(e,"aria-live","assertive"),$(e,"aria-atomic","true"),g(e,"position","absolute"),g(e,"left","0"),g(e,"top","0"),g(e,"clip","rect(0 0 0 0)"),g(e,"clip-path","inset(50%)"),g(e,"overflow","hidden"),g(e,"white-space","nowrap"),g(e,"width","1px"),g(e,"height","1px")},m(t,n){a(t,e,n),r&&r.m(e,null)},p(t,n){t[6]?r?r.p(t,n):(r=k(t),r.c(),r.m(e,null)):r&&(r.d(1),r=null)},d(t){t&&u(e),r&&r.d()}}}function k(t){let e;return{c(){e=h(t[7])},l(r){e=E(r,t[7])},m(t,r){a(t,e,r)},p(t,r){128&r&&L(e,t[7])},d(t){t&&u(e)}}}function N(t){let e,r,p,c,_;const d=[b,y],f=[];function $(t,e){return t[1][1]?0:1}e=$(t),r=f[e]=d[e](t);let g=t[5]&&x(t);return{c(){r.c(),p=n(),g&&g.c(),c=o()},l(t){r.l(t),p=s(t),g&&g.l(t),c=o()},m(t,r){f[e].m(t,r),a(t,p,r),g&&g.m(t,r),a(t,c,r),_=!0},p(t,[n]){let o=e;e=$(t),e===o?f[e].p(t,n):(j(),i(f[o],1,1,(()=>{f[o]=null})),l(),r=f[e],r?r.p(t,n):(r=f[e]=d[e](t),r.c()),m(r,1),r.m(p.parentNode,p)),t[5]?g?g.p(t,n):(g=x(t),g.c(),g.m(c.parentNode,c)):g&&(g.d(1),g=null)},i(t){_||(m(r),_=!0)},o(t){i(r),_=!1},d(t){f[e].d(t),t&&u(p),g&&g.d(t),t&&u(c)}}}function S(t,e,r){let{stores:n}=e,{page:o}=e,{constructors:s}=e,{components:a=[]}=e,{form:i}=e,{data_0:l=null}=e,{data_1:m=null}=e;p(n.page.notify);let u=!1,_=!1,d=null;return c((()=>{const t=n.page.subscribe((()=>{u&&(r(6,_=!0),r(7,d=document.title||"untitled page"))}));return r(5,u=!0),t})),t.$$set=t=>{"stores"in t&&r(8,n=t.stores),"page"in t&&r(9,o=t.page),"constructors"in t&&r(1,s=t.constructors),"components"in t&&r(0,a=t.components),"form"in t&&r(2,i=t.form),"data_0"in t&&r(3,l=t.data_0),"data_1"in t&&r(4,m=t.data_1)},t.$$.update=()=>{768&t.$$.dirty&&n.page.set(o)},[a,s,i,l,m,u,_,d,n,o,function(t){P[t?"unshift":"push"]((()=>{a[1]=t,r(0,a)}))},function(t){P[t?"unshift":"push"]((()=>{a[0]=t,r(0,a)}))},function(t){P[t?"unshift":"push"]((()=>{a[0]=t,r(0,a)}))}]}class q extends t{constructor(t){super(),e(this,t,S,N,r,{stores:8,page:9,constructors:1,components:0,form:2,data_0:3,data_1:4})}}const B=[()=>V((()=>import("../nodes/0.39cd4694.js")),["../nodes/0.39cd4694.js","../chunks/index.89290646.js","../chunks/paths.94c34c0c.js","../assets/0.f26b438c.css"],import.meta.url),()=>V((()=>import("../nodes/1.f99f4505.js")),["../nodes/1.f99f4505.js","../chunks/index.89290646.js","../chunks/singletons.fd5cc313.js","../chunks/paths.94c34c0c.js"],import.meta.url),()=>V((()=>import("../nodes/2.dbe091a0.js")),["../nodes/2.dbe091a0.js","../chunks/index.89290646.js","../chunks/paths.94c34c0c.js","../assets/2.635b685e.css"],import.meta.url),()=>V((()=>import("../nodes/3.6613fc88.js")),["../nodes/3.6613fc88.js","../chunks/index.89290646.js","../assets/3.d5536862.css"],import.meta.url),()=>V((()=>import("../nodes/4.2349efe3.js")),["../nodes/4.2349efe3.js","../chunks/index.89290646.js","../assets/4.b6d937d5.css"],import.meta.url),()=>V((()=>import("../nodes/5.2e9e10c7.js")),["../nodes/5.2e9e10c7.js","../chunks/index.89290646.js","../assets/5.d1eca4c4.css"],import.meta.url),()=>V((()=>import("../nodes/6.e530f1e8.js")),["../nodes/6.e530f1e8.js","../chunks/index.89290646.js","../assets/4.b6d937d5.css"],import.meta.url),()=>V((()=>import("../nodes/7.e4da93fd.js")),["../nodes/7.e4da93fd.js","../chunks/index.89290646.js","../chunks/paths.94c34c0c.js","../assets/7.262c3434.css"],import.meta.url),()=>V((()=>import("../nodes/8.d7080397.js")),["../nodes/8.d7080397.js","../chunks/index.89290646.js","../assets/8.424ef020.css"],import.meta.url),()=>V((()=>import("../nodes/9.e795fc8b.js")),["../nodes/9.e795fc8b.js","../chunks/index.89290646.js","../assets/9.6bc510f7.css"],import.meta.url),()=>V((()=>import("../nodes/10.48ee0b28.js")),["../nodes/10.48ee0b28.js","../chunks/index.89290646.js","../assets/9.6bc510f7.css"],import.meta.url),()=>V((()=>import("../nodes/11.6b4dbb70.js")),["../nodes/11.6b4dbb70.js","../chunks/index.89290646.js","../assets/11.0a6dcfb7.css"],import.meta.url),()=>V((()=>import("../nodes/12.110fcf1d.js")),["../nodes/12.110fcf1d.js","../chunks/index.89290646.js","../assets/12.d7610a2a.css"],import.meta.url),()=>V((()=>import("../nodes/13.1c47c1bc.js")),["../nodes/13.1c47c1bc.js","../chunks/index.89290646.js","../assets/4.b6d937d5.css"],import.meta.url),()=>V((()=>import("../nodes/14.35f9eada.js")),["../nodes/14.35f9eada.js","../chunks/index.89290646.js","../assets/14.81025ad7.css"],import.meta.url)],C=[],U={"/":[2],"/about":[3],"/blockntangles":[4],"/danceomania":[5],"/enquesta":[6],"/events":[7],"/harmony":[8],"/lapersona":[9],"/lattire":[10],"/lebate":[11],"/legacy":[12],"/pitch101":[13],"/rules":[14]},z={handleError:({error:t})=>{console.error(t)}};export{U as dictionary,z as hooks,v as matchers,B as nodes,q as root,C as server_loads};