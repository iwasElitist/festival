import{S as s,i as a,s as r,k as e,q as t,a as n,l as i,m as u,r as o,h as c,c as b,b as p,C as l,u as g,J as d,O as m}from"../chunks/index.5e5e48d7.js";import{s as v}from"../chunks/singletons.56ea617e.js";const h={subscribe:s=>(()=>{const s=v;return{page:{subscribe:s.page.subscribe},navigating:{subscribe:s.navigating.subscribe},updated:s.updated}})().page.subscribe(s)};function f(s){var a;let r,m,v,h,f,j=s[0].status+"",k=(null==(a=s[0].error)?void 0:a.message)+"";return{c(){r=e("h1"),m=t(j),v=n(),h=e("p"),f=t(k)},l(s){r=i(s,"H1",{});var a=u(r);m=o(a,j),a.forEach(c),v=b(s),h=i(s,"P",{});var e=u(h);f=o(e,k),e.forEach(c)},m(s,a){p(s,r,a),l(r,m),p(s,v,a),p(s,h,a),l(h,f)},p(s,[a]){var r;1&a&&j!==(j=s[0].status+"")&&g(m,j),1&a&&k!==(k=(null==(r=s[0].error)?void 0:r.message)+"")&&g(f,k)},i:d,o:d,d(s){s&&c(r),s&&c(v),s&&c(h)}}}function j(s,a,r){let e;return m(s,h,(s=>r(0,e=s))),[e]}let k=class extends s{constructor(s){super(),a(this,s,j,f,r,{})}};export{k as component};