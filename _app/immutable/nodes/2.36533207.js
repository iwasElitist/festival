import{S as e,i as t,s as n,k as r,l as a,m as s,h as i,n as o,b as l,J as u,o as c,w as d,a as f,q as h,y as m,P as p,c as y,r as g,z as v,Q as b,C as w,A as E,g as T,d as S,B as I,R as L}from"../chunks/index.5e5e48d7.js";import{b as D}from"../chunks/paths.d4373227.js";const P=Object.freeze(Object.defineProperty({__proto__:null,trailingSlash:"always"},Symbol.toStringTag,{value:"Module"})),M=e=>Array.isArray(e),k=e=>M(e)?e:[e];const $=e=>Array.from(e),N=e=>document.createTextNode(e);let C=e=>([...e.childNodes].forEach((e=>{if(e.nodeValue)return[...e.nodeValue].forEach((t=>{e.parentNode.insertBefore(N(t),e)})),void e.remove();C(e)})),e);const x=e=>{let t=document.implementation.createHTMLDocument();return t.body.innerHTML=e,C(t.body)},A="data-typeit-id",H="ti-cursor",O={started:!1,completed:!1,frozen:!1,destroyed:!1},F={breakLines:!0,cursor:{autoPause:!0,autoPauseDelay:500,animation:{frames:[0,0,1].map((e=>({opacity:e}))),options:{iterations:1/0,easing:"steps(2, start)",fill:"forwards"}}},cursorChar:"|",cursorSpeed:1e3,deleteSpeed:null,html:!0,lifeLike:!0,loop:!1,loopDelay:750,nextStringDelay:750,speed:100,startDelay:250,startDelete:!1,strings:[],waitUntilVisible:!1,beforeString:()=>{},afterString:()=>{},beforeStep:()=>{},afterStep:()=>{},afterComplete:()=>{}},q=`[${A}]:before {content: '.'; display: inline-block; width: 0; visibility: hidden;}`;function R(e,t=!1,n=!1){let r,a=e.querySelector(`.${H}`),s=document.createTreeWalker(e,NodeFilter.SHOW_ALL,{acceptNode:e=>{var t,r;if(a&&n){if(null==(t=e.classList)?void 0:t.contains(H))return NodeFilter.FILTER_ACCEPT;if(a.contains(e))return NodeFilter.FILTER_REJECT}return(null==(r=e.classList)?void 0:r.contains(H))?NodeFilter.FILTER_REJECT:NodeFilter.FILTER_ACCEPT}}),i=[];for(;r=s.nextNode();)r.originalParent||(r.originalParent=r.parentNode),i.push(r);return t?i.reverse():i}function z(e,t=!0){return t?R(x(e)):$(e).map(N)}const V=e=>document.createElement(e),_=(e,t="")=>{let n=V("style");n.id=t,n.appendChild(N(e)),document.head.appendChild(n)},B=e=>(M(e)||(e=[e/2,e/2]),e),j=(e,t)=>Math.abs(Math.random()*(e+t-(e-t))+(e-t));let J=e=>e/2;const Q=e=>"value"in e;let U=e=>"function"==typeof e?e():e;const W=e=>Number.isInteger(e);let X=(e,t=document,n=!1)=>t["querySelector"+(n?"All":"")](e);const G=(e,t)=>Object.assign({},e,t);let K={"font-family":"","font-weight":"","font-size":"","font-style":"","line-height":"",color:"",transform:"translateX(-.125em)"};const Y=(e,t)=>new Array(t).fill(e),Z=({queueItems:e,selector:t,cursorPosition:n,to:r})=>{if(W(t))return-1*t;let a=new RegExp("END","i").test(r),s=t?[...e].reverse().findIndex((({char:e})=>{let n=e.parentElement,r=n.matches(t);return!(!a||!r)||r&&n.firstChild.isSameNode(e)})):-1;return s<0&&(s=a?0:e.length-1),s-n+(a?0:1)};let ee=e=>new Promise((t=>{requestAnimationFrame((async()=>{t(await e())}))})),te=e=>null==e?void 0:e.getAnimations().find((t=>t.id===e.dataset.tiAnimationId)),ne=({cursor:e,frames:t,options:n})=>{let r=e.animate(t,n);return r.pause(),r.id=e.dataset.tiAnimationId,ee((()=>{ee((()=>{r.play()}))})),r},re=e=>{var t;return null==(t=e.func)?void 0:t.call(null)},ae=async({index:e,queueItems:t,wait:n,cursor:r,cursorOptions:a})=>{let s=t[e][1],i=[],o=e,l=s,u=()=>l&&!l.delay,c=s.shouldPauseCursor()&&a.autoPause;for(;u();)i.push(l),u()&&o++,l=t[o]?t[o][1]:null;if(i.length)return await ee((async()=>{for(let e of i)await re(e)})),o-1;let d,f=te(r);return f&&(d={...f.effect.getComputedTiming(),delay:c?a.autoPauseDelay:0}),await n((async()=>{f&&c&&f.cancel(),await ee((()=>{re(s)}))}),s.delay),await(({cursor:e,options:t,cursorOptions:n})=>{if(!e||!n)return;let r,a=te(e);a&&(t.delay=a.effect.getComputedTiming().delay,r=a.currentTime,a.cancel());let s=ne({cursor:e,frames:n.animation.frames,options:t});return r&&(s.currentTime=r),s})({cursor:r,options:d,cursorOptions:a}),e};const se=function(e,t={}){let n=async(e,t,n=!1)=>{L.frozen&&await new Promise((e=>{this.unfreeze=()=>{L.frozen=!1,e()}})),n||await D.beforeStep(this),await((e,t,n)=>new Promise((r=>{n.push(setTimeout((async()=>{await e(),r()}),t||0))})))(e,t,T),n||await D.afterStep(this)},r=(e,t)=>ae({index:e,queueItems:t,wait:n,cursor:ee,cursorOptions:D.cursor}),a=e=>((e,t)=>{if(!e)return;let n=e.parentNode;(n.childNodes.length>1||n.isSameNode(t)?e:n).remove()})(e,w),s=()=>Q(w),i=(e=0)=>function(e){let{speed:t,deleteSpeed:n,lifeLike:r}=e;return n=null!==n?n:t/3,r?[j(t,J(t)),j(n,J(n))]:[t,n]}(D)[e],o=()=>(e=>Q(e)?$(e.value):R(e,!0).filter((e=>!(e.childNodes.length>0))))(w),l=(e,t)=>(M.add(e),((e={})=>{let t=e.delay;t&&M.add({delay:t})})(t),this),u=()=>I??S,c=(e={})=>[{func:()=>g(e)},{func:()=>g(D)}],d=e=>{let t=D.nextStringDelay;M.add([{delay:t[0]},...e,{delay:t[1]}])},f=async()=>{if(!s()&&ee&&w.appendChild(ee),N){((e,t)=>{let n=`[${A}='${e}'] .${H}`,r=getComputedStyle(t),a=Object.entries(K).reduce(((e,[t,n])=>`${e} ${t}: var(--ti-cursor-${t}, ${n||r[t]});`),"");_(`${n} { display: inline-block; width: 0; ${a} }`,e)})(P,w),ee.dataset.tiAnimationId=P;let{animation:e}=D.cursor,{frames:t,options:n}=e;ne({frames:t,cursor:ee,options:{duration:D.cursorSpeed,...n}})}},h=()=>{let e=D.strings.filter((e=>!!e));e.forEach(((t,n)=>{if(this.type(t),n+1===e.length)return;let r=D.breakLines?[{func:()=>y(V("BR")),typeable:!0}]:Y({func:b,delay:i(1)},M.getTypeable().length);d(r)}))},m=async(e=!0)=>{L.started=!0;let t=t=>{M.done(t,!e)};try{let a=[...M.getQueue()];for(let e=0;e<a.length;e++){let[n,s]=a[e];if(!s.done){if(!s.deletable||s.deletable&&o().length){let n=await r(e,a);Array(n-e).fill(e+1).map(((e,t)=>e+t)).forEach((e=>{let[n]=a[e];t(n)})),e=n}t(n)}}if(!e)return this;if(L.completed=!0,await D.afterComplete(this),!D.loop)throw"";let s=D.loopDelay;n((async()=>{await(async e=>{let t=u();t&&await p({value:t});let n=o().map((e=>[Symbol(),{func:b,delay:i(1),deletable:!0,shouldPauseCursor:()=>!0}]));for(let a=0;a<n.length;a++)await r(a,n);M.reset(),M.set(0,{delay:e})})(s[0]),m()}),s[1])}catch(a){}return this},p=async e=>{var t,n,r;t=e,n=S,r=o(),S=Math.min(Math.max(n+t,0),r.length),((e,t,n)=>{let r=t[n-1],a=X(`.${H}`,e);(e=(null==r?void 0:r.parentNode)||e).insertBefore(a,r||null)})(w,o(),S)},y=e=>((e,t)=>{if(Q(e))return void(e.value=`${e.value}${t.textContent}`);t.innerHTML="";let n=(r=t.originalParent,/body/i.test(null==r?void 0:r.tagName)?e:t.originalParent||e);var r;n.insertBefore(t,X("."+H,n)||null)})(w,e),g=async e=>D=G(D,e),v=async()=>{s()?w.value="":o().forEach(a)},b=()=>{let e=o();e.length&&(s()?w.value=w.value.slice(0,-1):a(e[S]))};this.break=function(e){return l({func:()=>y(V("BR")),typeable:!0},e)},this.delete=function(e=null,t={}){e=U(e);let n=c(t),r=e,{instant:a,to:s}=t,o=M.getTypeable(),d=null===r?o.length:W(r)?r:Z({queueItems:o,selector:r,cursorPosition:u(),to:s});return l([n[0],...Y({func:b,delay:a?0:i(1),deletable:!0},d),n[1]],t)},this.empty=function(e={}){return l({func:v},e)},this.exec=function(e,t={}){let n=c(t);return l([n[0],{func:()=>e(this)},n[1]],t)},this.move=function(e,t={}){e=U(e);let n=c(t),{instant:r,to:a}=t,s=Z({queueItems:M.getTypeable(),selector:null===e?"":e,to:a,cursorPosition:u()}),o=s<0?-1:1;return I=u()+s,l([n[0],...Y({func:()=>p(o),delay:r?0:i(),cursorable:!0},Math.abs(s)),n[1]],t)},this.options=function(e,t={}){return e=U(e),g(e),l({},t)},this.pause=function(e,t={}){return l({delay:U(e)},t)},this.type=function(e,t={}){e=U(e);let{instant:n}=t,r=c(t),a=z(e,D.html).map((e=>{return{func:()=>y(e),char:e,delay:n||(t=e,/<(.+)>(.*?)<\/(.+)>/.test(t.outerHTML))?0:i(),typeable:e.nodeType===Node.TEXT_NODE};var t})),s=[r[0],{func:async()=>await D.beforeString(e,this)},...a,{func:async()=>await D.afterString(e,this)},r[1]];return l(s,t)},this.is=function(e){return L[e]},this.destroy=function(e=!0){T.forEach(clearTimeout),T=[],U(e)&&ee&&a(ee),L.destroyed=!0},this.freeze=function(){L.frozen=!0},this.unfreeze=()=>{},this.reset=function(e){!this.is("destroyed")&&this.destroy(),e?(M.wipe(),e(this)):M.reset(),S=0;for(let t in L)L[t]=!1;return w[s()?"value":"innerHTML"]="",this},this.go=function(){return L.started?this:(f(),D.waitUntilVisible?(((e,t)=>{new IntersectionObserver(((n,r)=>{n.forEach((n=>{n.isIntersecting&&(t(),r.unobserve(e))}))}),{threshold:1}).observe(e)})(w,m.bind(this)),this):(m(),this))},this.flush=function(e=(()=>{})){return f(),m(!1).then(e),this},this.getQueue=()=>M,this.getOptions=()=>D,this.updateOptions=e=>g(e),this.getElement=()=>w;let w="string"==typeof(E=e)?X(E):E;var E;let T=[],S=0,I=null,L=G({},O);t.cursor=(e=>{var t,n;if("object"==typeof e){let r={},{frames:a,options:s}=F.cursor.animation;return r.animation=e.animation||{},r.animation.frames=(null==(t=e.animation)?void 0:t.frames)||a,r.animation.options=G(s,(null==(n=e.animation)?void 0:n.options)||{}),r.autoPause=e.autoPause??F.cursor.autoPause,r.autoPauseDelay=e.autoPauseDelay||F.cursor.autoPauseDelay,r}return!0===e?F.cursor:e})(t.cursor??F.cursor);let D=G(F,t);D=G(D,{html:!s()&&D.html,nextStringDelay:B(D.nextStringDelay),loopDelay:B(D.loopDelay)});let P=Math.random().toString().substring(2,9),M=function(e){let t=function(e){return k(e).forEach((e=>{var t;return a.set(Symbol(null==(t=e.char)?void 0:t.innerText),n({...e}))})),this},n=e=>(e.shouldPauseCursor=function(){return Boolean(this.typeable||this.cursorable||this.deletable)},e),r=()=>Array.from(a.values()),a=new Map;return t(e),{add:t,set:function(e,t){let r=[...a.keys()];a.set(r[e],n(t))},wipe:function(){a=new Map,t(e)},reset:function(){a.forEach((e=>delete e.done))},destroy:e=>a.delete(e),done:(e,t=!1)=>t?a.delete(e):a.get(e).done=!0,getItems:(e=!1)=>e?r():r().filter((e=>!e.done)),getQueue:()=>a,getTypeable:()=>r().filter((e=>e.typeable))}}([{delay:D.startDelay}]);w.dataset.typeitId=P,_(q);let N=!!D.cursor&&!s(),ee=(()=>{if(s())return;let e=V("span");return e.className=H,N?(e.innerHTML=x(D.cursorChar).innerHTML,e):(e.style.visibility="hidden",e)})();D.strings=(e=>{let t=w.innerHTML;return t?(w.innerHTML="",D.startDelete?(w.innerHTML=t,C(w),d(Y({func:b,delay:i(1),deletable:!0},o().length)),e):t.replace(/<!--(.+?)-->/g,"").trim().split(/<br(?:\s*?)(?:\/)?>/).concat(e)):e})(k(D.strings)),D.strings.length&&h()};function ie(e){let t;return{c(){t=r("span"),this.h()},l(e){t=a(e,"SPAN",{class:!0}),s(t).forEach(i),this.h()},h(){o(t,"class","svelte-ie5khx")},m(n,r){l(n,t,r),e[2](t)},p:u,i:u,o:u,d(n){n&&i(t),e[2](null)}}}function oe(e,t,n){let r,{sentence:a}=t;return c((()=>{new se(r,{strings:a,lifeLike:!0,speed:75}).go()})),e.$$set=e=>{"sentence"in e&&n(1,a=e.sentence)},[r,a,function(e){d[e?"unshift":"push"]((()=>{r=e,n(0,r)}))}]}class le extends e{constructor(e){super(),t(this,e,oe,ie,n,{sentence:1})}}const{document:ue}=L;function ce(e){let t,n,c,d,L,P,M,k,$,N,C,x,A,H,O,F,q,R,z,V,_,B,j;return V=new le({props:{sentence:de}}),{c(){t=r("meta"),n=f(),c=r("div"),d=r("video"),L=r("source"),M=f(),k=r("img"),N=f(),C=r("div"),x=r("div"),A=r("h1"),H=h("LA FEST"),O=f(),F=r("h1"),q=h("2023"),R=f(),z=r("div"),m(V.$$.fragment),_=f(),B=r("div"),this.h()},l(e){const r=p("svelte-tvldiq",ue.head);t=a(r,"META",{name:!0,content:!0}),r.forEach(i),n=y(e),c=a(e,"DIV",{class:!0});var o=s(c);d=a(o,"VIDEO",{id:!0,width:!0,height:!0,preload:!0,class:!0});var l=s(d);L=a(l,"SOURCE",{src:!0,type:!0}),l.forEach(i),M=y(o),k=a(o,"IMG",{src:!0,height:!0,width:!0,alt:!0,class:!0}),N=y(o),C=a(o,"DIV",{class:!0});var u=s(C);x=a(u,"DIV",{class:!0});var f=s(x);A=a(f,"H1",{class:!0});var h=s(A);H=g(h,"LA FEST"),h.forEach(i),O=y(f),F=a(f,"H1",{class:!0});var m=s(F);q=g(m,"2023"),m.forEach(i),f.forEach(i),R=y(u),z=a(u,"DIV",{class:!0});var b=s(z);v(V.$$.fragment,b),b.forEach(i),_=y(u),B=a(u,"DIV",{id:!0,class:!0}),s(B).forEach(i),u.forEach(i),o.forEach(i),this.h()},h(){ue.title="LA FEST 2023",o(t,"name","description"),o(t,"content","Website for LAFEST 2023"),b(L.src,P=D+"/background.webm")||o(L,"src",P),o(L,"type","video/webm"),o(d,"id","video"),o(d,"width","2560px"),o(d,"height","1440px"),d.autoplay=!0,d.loop=!0,d.muted=!0,o(d,"preload","auto"),o(d,"class","svelte-1k6bss"),b(k.src,$=D+"/images/lafest-aurora.svg")||o(k,"src",$),o(k,"height","40%"),o(k,"width","40%"),o(k,"alt","affects"),o(k,"class","svelte-1k6bss"),o(A,"class","svelte-1k6bss"),o(F,"class","svelte-1k6bss"),o(x,"class","title svelte-1k6bss"),o(z,"class","quote svelte-1k6bss"),o(B,"id","timer"),o(B,"class","svelte-1k6bss"),o(C,"class","text svelte-1k6bss"),o(c,"class","layout svelte-1k6bss")},m(e,r){w(ue.head,t),l(e,n,r),l(e,c,r),w(c,d),w(d,L),w(c,M),w(c,k),w(c,N),w(c,C),w(C,x),w(x,A),w(A,H),w(x,O),w(x,F),w(F,q),w(C,R),w(C,z),E(V,z,null),w(C,_),w(C,B),j=!0},p:u,i(e){j||(T(V.$$.fragment,e),j=!0)},o(e){S(V.$$.fragment,e),j=!1},d(e){i(t),e&&i(n),e&&i(c),I(V)}}}let de='"Indulge in ardour, revel in grandeur"';function fe(e){return c((()=>{document.body.style.backgroundImage="radial-gradient(rgba($color: rgb(71, 153, 102), $alpha: 50%) 0%, transparent 50%, transparent 100%)";let e=new Date("Jul 1, 2023 00:00:00").getTime(),t=setInterval((function(){let n=(new Date).getTime(),r=e-n,a=Math.floor(r/864e5),s=Math.floor(r%864e5/36e5),i=Math.floor(r%36e5/6e4),o=Math.floor(r%6e4/1e3);document.getElementById("timer").innerHTML=a+" d "+s+" h "+i+" m "+o+" s",r<0&&(clearInterval(t),document.getElementById("timer").innerHTML="Now")}),1e3)})),[]}class he extends e{constructor(e){super(),t(this,e,fe,ce,n,{})}}export{he as component,P as universal};