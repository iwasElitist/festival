import{S as e,i as t,s as n,k as r,l as a,m as s,h as i,n as o,b as l,J as u,o as c,w as d,a as h,q as f,y as m,P as p,c as y,r as g,z as v,Q as b,p as w,C as E,A as T,g as S,d as I,B as L,R as D}from"../chunks/index.5e5e48d7.js";import{b as P}from"../chunks/paths.a5a079f3.js";const M=Object.freeze(Object.defineProperty({__proto__:null,trailingSlash:"always"},Symbol.toStringTag,{value:"Module"})),N=e=>Array.isArray(e),$=e=>N(e)?e:[e];const C=e=>Array.from(e),x=e=>document.createTextNode(e);let A=e=>([...e.childNodes].forEach((e=>{if(e.nodeValue)return[...e.nodeValue].forEach((t=>{e.parentNode.insertBefore(x(t),e)})),void e.remove();A(e)})),e);const k=e=>{let t=document.implementation.createHTMLDocument();return t.body.innerHTML=e,A(t.body)},H="data-typeit-id",O="ti-cursor",F={started:!1,completed:!1,frozen:!1,destroyed:!1},q={breakLines:!0,cursor:{autoPause:!0,autoPauseDelay:500,animation:{frames:[0,0,1].map((e=>({opacity:e}))),options:{iterations:1/0,easing:"steps(2, start)",fill:"forwards"}}},cursorChar:"|",cursorSpeed:1e3,deleteSpeed:null,html:!0,lifeLike:!0,loop:!1,loopDelay:750,nextStringDelay:750,speed:100,startDelay:250,startDelete:!1,strings:[],waitUntilVisible:!1,beforeString:()=>{},afterString:()=>{},beforeStep:()=>{},afterStep:()=>{},afterComplete:()=>{}},R=`[${H}]:before {content: '.'; display: inline-block; width: 0; visibility: hidden;}`;function V(e,t=!1,n=!1){let r,a=e.querySelector(`.${O}`),s=document.createTreeWalker(e,NodeFilter.SHOW_ALL,{acceptNode:e=>{var t,r;if(a&&n){if(null==(t=e.classList)?void 0:t.contains(O))return NodeFilter.FILTER_ACCEPT;if(a.contains(e))return NodeFilter.FILTER_REJECT}return(null==(r=e.classList)?void 0:r.contains(O))?NodeFilter.FILTER_REJECT:NodeFilter.FILTER_ACCEPT}}),i=[];for(;r=s.nextNode();)r.originalParent||(r.originalParent=r.parentNode),i.push(r);return t?i.reverse():i}function z(e,t=!0){return t?V(k(e)):C(e).map(x)}const _=e=>document.createElement(e),B=(e,t="")=>{let n=_("style");n.id=t,n.appendChild(x(e)),document.head.appendChild(n)},j=e=>(N(e)||(e=[e/2,e/2]),e),J=(e,t)=>Math.abs(Math.random()*(e+t-(e-t))+(e-t));let Q=e=>e/2;const U=e=>"value"in e;let W=e=>"function"==typeof e?e():e;const X=e=>Number.isInteger(e);let G=(e,t=document,n=!1)=>t["querySelector"+(n?"All":"")](e);const K=(e,t)=>Object.assign({},e,t);let Y={"font-family":"","font-weight":"","font-size":"","font-style":"","line-height":"",color:"",transform:"translateX(-.125em)"};const Z=(e,t)=>new Array(t).fill(e),ee=({queueItems:e,selector:t,cursorPosition:n,to:r})=>{if(X(t))return-1*t;let a=new RegExp("END","i").test(r),s=t?[...e].reverse().findIndex((({char:e})=>{let n=e.parentElement,r=n.matches(t);return!(!a||!r)||r&&n.firstChild.isSameNode(e)})):-1;return s<0&&(s=a?0:e.length-1),s-n+(a?0:1)};let te=e=>new Promise((t=>{requestAnimationFrame((async()=>{t(await e())}))})),ne=e=>null==e?void 0:e.getAnimations().find((t=>t.id===e.dataset.tiAnimationId)),re=({cursor:e,frames:t,options:n})=>{let r=e.animate(t,n);return r.pause(),r.id=e.dataset.tiAnimationId,te((()=>{te((()=>{r.play()}))})),r},ae=e=>{var t;return null==(t=e.func)?void 0:t.call(null)},se=async({index:e,queueItems:t,wait:n,cursor:r,cursorOptions:a})=>{let s=t[e][1],i=[],o=e,l=s,u=()=>l&&!l.delay,c=s.shouldPauseCursor()&&a.autoPause;for(;u();)i.push(l),u()&&o++,l=t[o]?t[o][1]:null;if(i.length)return await te((async()=>{for(let e of i)await ae(e)})),o-1;let d,h=ne(r);return h&&(d={...h.effect.getComputedTiming(),delay:c?a.autoPauseDelay:0}),await n((async()=>{h&&c&&h.cancel(),await te((()=>{ae(s)}))}),s.delay),await(({cursor:e,options:t,cursorOptions:n})=>{if(!e||!n)return;let r,a=ne(e);a&&(t.delay=a.effect.getComputedTiming().delay,r=a.currentTime,a.cancel());let s=re({cursor:e,frames:n.animation.frames,options:t});return r&&(s.currentTime=r),s})({cursor:r,options:d,cursorOptions:a}),e};const ie=function(e,t={}){let n=async(e,t,n=!1)=>{L.frozen&&await new Promise((e=>{this.unfreeze=()=>{L.frozen=!1,e()}})),n||await D.beforeStep(this),await((e,t,n)=>new Promise((r=>{n.push(setTimeout((async()=>{await e(),r()}),t||0))})))(e,t,T),n||await D.afterStep(this)},r=(e,t)=>se({index:e,queueItems:t,wait:n,cursor:x,cursorOptions:D.cursor}),a=e=>((e,t)=>{if(!e)return;let n=e.parentNode;(n.childNodes.length>1||n.isSameNode(t)?e:n).remove()})(e,w),s=()=>U(w),i=(e=0)=>function(e){let{speed:t,deleteSpeed:n,lifeLike:r}=e;return n=null!==n?n:t/3,r?[J(t,Q(t)),J(n,Q(n))]:[t,n]}(D)[e],o=()=>(e=>U(e)?C(e.value):V(e,!0).filter((e=>!(e.childNodes.length>0))))(w),l=(e,t)=>(M.add(e),((e={})=>{let t=e.delay;t&&M.add({delay:t})})(t),this),u=()=>I??S,c=(e={})=>[{func:()=>g(e)},{func:()=>g(D)}],d=e=>{let t=D.nextStringDelay;M.add([{delay:t[0]},...e,{delay:t[1]}])},h=async()=>{if(!s()&&x&&w.appendChild(x),N){((e,t)=>{let n=`[${H}='${e}'] .${O}`,r=getComputedStyle(t),a=Object.entries(Y).reduce(((e,[t,n])=>`${e} ${t}: var(--ti-cursor-${t}, ${n||r[t]});`),"");B(`${n} { display: inline-block; width: 0; ${a} }`,e)})(P,w),x.dataset.tiAnimationId=P;let{animation:e}=D.cursor,{frames:t,options:n}=e;re({frames:t,cursor:x,options:{duration:D.cursorSpeed,...n}})}},f=()=>{let e=D.strings.filter((e=>!!e));e.forEach(((t,n)=>{if(this.type(t),n+1===e.length)return;let r=D.breakLines?[{func:()=>y(_("BR")),typeable:!0}]:Z({func:b,delay:i(1)},M.getTypeable().length);d(r)}))},m=async(e=!0)=>{L.started=!0;let t=t=>{M.done(t,!e)};try{let a=[...M.getQueue()];for(let e=0;e<a.length;e++){let[n,s]=a[e];if(!s.done){if(!s.deletable||s.deletable&&o().length){let n=await r(e,a);Array(n-e).fill(e+1).map(((e,t)=>e+t)).forEach((e=>{let[n]=a[e];t(n)})),e=n}t(n)}}if(!e)return this;if(L.completed=!0,await D.afterComplete(this),!D.loop)throw"";let s=D.loopDelay;n((async()=>{await(async e=>{let t=u();t&&await p({value:t});let n=o().map((e=>[Symbol(),{func:b,delay:i(1),deletable:!0,shouldPauseCursor:()=>!0}]));for(let a=0;a<n.length;a++)await r(a,n);M.reset(),M.set(0,{delay:e})})(s[0]),m()}),s[1])}catch(a){}return this},p=async e=>{var t,n,r;t=e,n=S,r=o(),S=Math.min(Math.max(n+t,0),r.length),((e,t,n)=>{let r=t[n-1],a=G(`.${O}`,e);(e=(null==r?void 0:r.parentNode)||e).insertBefore(a,r||null)})(w,o(),S)},y=e=>((e,t)=>{if(U(e))return void(e.value=`${e.value}${t.textContent}`);t.innerHTML="";let n=(r=t.originalParent,/body/i.test(null==r?void 0:r.tagName)?e:t.originalParent||e);var r;n.insertBefore(t,G("."+O,n)||null)})(w,e),g=async e=>D=K(D,e),v=async()=>{s()?w.value="":o().forEach(a)},b=()=>{let e=o();e.length&&(s()?w.value=w.value.slice(0,-1):a(e[S]))};this.break=function(e){return l({func:()=>y(_("BR")),typeable:!0},e)},this.delete=function(e=null,t={}){e=W(e);let n=c(t),r=e,{instant:a,to:s}=t,o=M.getTypeable(),d=null===r?o.length:X(r)?r:ee({queueItems:o,selector:r,cursorPosition:u(),to:s});return l([n[0],...Z({func:b,delay:a?0:i(1),deletable:!0},d),n[1]],t)},this.empty=function(e={}){return l({func:v},e)},this.exec=function(e,t={}){let n=c(t);return l([n[0],{func:()=>e(this)},n[1]],t)},this.move=function(e,t={}){e=W(e);let n=c(t),{instant:r,to:a}=t,s=ee({queueItems:M.getTypeable(),selector:null===e?"":e,to:a,cursorPosition:u()}),o=s<0?-1:1;return I=u()+s,l([n[0],...Z({func:()=>p(o),delay:r?0:i(),cursorable:!0},Math.abs(s)),n[1]],t)},this.options=function(e,t={}){return e=W(e),g(e),l({},t)},this.pause=function(e,t={}){return l({delay:W(e)},t)},this.type=function(e,t={}){e=W(e);let{instant:n}=t,r=c(t),a=z(e,D.html).map((e=>{return{func:()=>y(e),char:e,delay:n||(t=e,/<(.+)>(.*?)<\/(.+)>/.test(t.outerHTML))?0:i(),typeable:e.nodeType===Node.TEXT_NODE};var t})),s=[r[0],{func:async()=>await D.beforeString(e,this)},...a,{func:async()=>await D.afterString(e,this)},r[1]];return l(s,t)},this.is=function(e){return L[e]},this.destroy=function(e=!0){T.forEach(clearTimeout),T=[],W(e)&&x&&a(x),L.destroyed=!0},this.freeze=function(){L.frozen=!0},this.unfreeze=()=>{},this.reset=function(e){!this.is("destroyed")&&this.destroy(),e?(M.wipe(),e(this)):M.reset(),S=0;for(let t in L)L[t]=!1;return w[s()?"value":"innerHTML"]="",this},this.go=function(){return L.started?this:(h(),D.waitUntilVisible?(((e,t)=>{new IntersectionObserver(((n,r)=>{n.forEach((n=>{n.isIntersecting&&(t(),r.unobserve(e))}))}),{threshold:1}).observe(e)})(w,m.bind(this)),this):(m(),this))},this.flush=function(e=(()=>{})){return h(),m(!1).then(e),this},this.getQueue=()=>M,this.getOptions=()=>D,this.updateOptions=e=>g(e),this.getElement=()=>w;let w="string"==typeof(E=e)?G(E):E;var E;let T=[],S=0,I=null,L=K({},F);t.cursor=(e=>{var t,n;if("object"==typeof e){let r={},{frames:a,options:s}=q.cursor.animation;return r.animation=e.animation||{},r.animation.frames=(null==(t=e.animation)?void 0:t.frames)||a,r.animation.options=K(s,(null==(n=e.animation)?void 0:n.options)||{}),r.autoPause=e.autoPause??q.cursor.autoPause,r.autoPauseDelay=e.autoPauseDelay||q.cursor.autoPauseDelay,r}return!0===e?q.cursor:e})(t.cursor??q.cursor);let D=K(q,t);D=K(D,{html:!s()&&D.html,nextStringDelay:j(D.nextStringDelay),loopDelay:j(D.loopDelay)});let P=Math.random().toString().substring(2,9),M=function(e){let t=function(e){return $(e).forEach((e=>{var t;return a.set(Symbol(null==(t=e.char)?void 0:t.innerText),n({...e}))})),this},n=e=>(e.shouldPauseCursor=function(){return Boolean(this.typeable||this.cursorable||this.deletable)},e),r=()=>Array.from(a.values()),a=new Map;return t(e),{add:t,set:function(e,t){let r=[...a.keys()];a.set(r[e],n(t))},wipe:function(){a=new Map,t(e)},reset:function(){a.forEach((e=>delete e.done))},destroy:e=>a.delete(e),done:(e,t=!1)=>t?a.delete(e):a.get(e).done=!0,getItems:(e=!1)=>e?r():r().filter((e=>!e.done)),getQueue:()=>a,getTypeable:()=>r().filter((e=>e.typeable))}}([{delay:D.startDelay}]);w.dataset.typeitId=P,B(R);let N=!!D.cursor&&!s(),x=(()=>{if(s())return;let e=_("span");return e.className=O,N?(e.innerHTML=k(D.cursorChar).innerHTML,e):(e.style.visibility="hidden",e)})();D.strings=(e=>{let t=w.innerHTML;return t?(w.innerHTML="",D.startDelete?(w.innerHTML=t,A(w),d(Z({func:b,delay:i(1),deletable:!0},o().length)),e):t.replace(/<!--(.+?)-->/g,"").trim().split(/<br(?:\s*?)(?:\/)?>/).concat(e)):e})($(D.strings)),D.strings.length&&f()};function oe(e){let t;return{c(){t=r("span"),this.h()},l(e){t=a(e,"SPAN",{class:!0}),s(t).forEach(i),this.h()},h(){o(t,"class","svelte-ie5khx")},m(n,r){l(n,t,r),e[2](t)},p:u,i:u,o:u,d(n){n&&i(t),e[2](null)}}}function le(e,t,n){let r,{sentence:a}=t;return c((()=>{new ie(r,{strings:a,lifeLike:!0,speed:75}).go()})),e.$$set=e=>{"sentence"in e&&n(1,a=e.sentence)},[r,a,function(e){d[e?"unshift":"push"]((()=>{r=e,n(0,r)}))}]}class ue extends e{constructor(e){super(),t(this,e,le,oe,n,{sentence:1})}}const{document:ce}=D;function de(e){let t,n,c,d,D,M,N,$,C,x,A,k,H,O,F,q,R,V,z,_,B,j,J;return _=new ue({props:{sentence:he}}),{c(){t=r("meta"),n=h(),c=r("div"),d=r("video"),D=r("source"),N=h(),$=r("img"),x=h(),A=r("div"),k=r("div"),H=r("h1"),O=f("LA FEST"),F=h(),q=r("h1"),R=f("2023"),V=h(),z=r("div"),m(_.$$.fragment),B=h(),j=r("div"),this.h()},l(e){const r=p("svelte-tvldiq",ce.head);t=a(r,"META",{name:!0,content:!0}),r.forEach(i),n=y(e),c=a(e,"DIV",{class:!0});var o=s(c);d=a(o,"VIDEO",{id:!0,width:!0,height:!0,preload:!0,class:!0});var l=s(d);D=a(l,"SOURCE",{src:!0,type:!0}),l.forEach(i),N=y(o),$=a(o,"IMG",{src:!0,height:!0,width:!0,alt:!0,class:!0}),x=y(o),A=a(o,"DIV",{class:!0});var u=s(A);k=a(u,"DIV",{class:!0});var h=s(k);H=a(h,"H1",{class:!0});var f=s(H);O=g(f,"LA FEST"),f.forEach(i),F=y(h),q=a(h,"H1",{style:!0,class:!0});var m=s(q);R=g(m,"2023"),m.forEach(i),h.forEach(i),V=y(u),z=a(u,"DIV",{class:!0});var b=s(z);v(_.$$.fragment,b),b.forEach(i),B=y(u),j=a(u,"DIV",{id:!0,class:!0}),s(j).forEach(i),u.forEach(i),o.forEach(i),this.h()},h(){ce.title="LA FEST 2023",o(t,"name","description"),o(t,"content","Website for LAFEST 2023"),b(D.src,M=P+"/background.webm")||o(D,"src",M),o(D,"type","video/webm"),o(d,"id","video"),o(d,"width","2560px"),o(d,"height","1440px"),d.autoplay=!0,d.loop=!0,d.muted=!0,o(d,"preload","auto"),o(d,"class","svelte-8ga5h4"),b($.src,C=P+"/images/lafest-aurora.svg")||o($,"src",C),o($,"height","40%"),o($,"width","40%"),o($,"alt","affects"),o($,"class","svelte-8ga5h4"),o(H,"class","svelte-8ga5h4"),w(q,"font-family","'Inter Tight Variable'"),o(q,"class","svelte-8ga5h4"),o(k,"class","title svelte-8ga5h4"),o(z,"class","quote svelte-8ga5h4"),o(j,"id","timer"),o(j,"class","svelte-8ga5h4"),o(A,"class","text svelte-8ga5h4"),o(c,"class","layout svelte-8ga5h4")},m(e,r){E(ce.head,t),l(e,n,r),l(e,c,r),E(c,d),E(d,D),E(c,N),E(c,$),E(c,x),E(c,A),E(A,k),E(k,H),E(H,O),E(k,F),E(k,q),E(q,R),E(A,V),E(A,z),T(_,z,null),E(A,B),E(A,j),J=!0},p:u,i(e){J||(S(_.$$.fragment,e),J=!0)},o(e){I(_.$$.fragment,e),J=!1},d(e){i(t),e&&i(n),e&&i(c),L(_)}}}let he='"Indulge in ardour, revel in grandeur"';function fe(e){return c((()=>{let e=new Date("Jul 1, 2023 00:00:00").getTime(),t=setInterval((function(){let n=(new Date).getTime(),r=e-n,a=Math.floor(r/864e5),s=Math.floor(r%864e5/36e5),i=Math.floor(r%36e5/6e4),o=Math.floor(r%6e4/1e3);document.getElementById("timer").innerHTML=a+" d "+s+" h "+i+" m "+o+" s",r<0&&(clearInterval(t),document.getElementById("timer").innerHTML="Now")}),1e3);return()=>{document.body.style.backgroundImage="none",clearInterval(t)}})),[]}class me extends e{constructor(e){super(),t(this,e,fe,de,n,{})}}export{me as component,M as universal};