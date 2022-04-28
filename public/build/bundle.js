var app=function(){"use strict";function e(){}const t=e=>e;function n(e){return e()}function i(){return Object.create(null)}function r(e){e.forEach(n)}function s(e){return"function"==typeof e}function o(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}let a;function l(e,t){return a||(a=document.createElement("a")),a.href=t,e===a.href}const c="undefined"!=typeof window;let h=c?()=>window.performance.now():()=>Date.now(),u=c?e=>requestAnimationFrame(e):e;const d=new Set;function p(e){d.forEach((t=>{t.c(e)||(d.delete(t),t.f())})),0!==d.size&&u(p)}function f(e,t){e.appendChild(t)}function _(e){if(!e)return document;const t=e.getRootNode?e.getRootNode():e.ownerDocument;return t&&t.host?t:e.ownerDocument}function m(e){const t=w("style");return function(e,t){f(e.head||e,t)}(_(e),t),t}function g(e,t,n){e.insertBefore(t,n||null)}function y(e){e.parentNode.removeChild(e)}function v(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function w(e){return document.createElement(e)}function b(e){return document.createElementNS("http://www.w3.org/2000/svg",e)}function C(e){return document.createTextNode(e)}function I(){return C(" ")}function E(e,t,n,i){return e.addEventListener(t,n,i),()=>e.removeEventListener(t,n,i)}function x(e,t,n){null==n?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function T(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}const S=new Set;let k,N=0;function P(e,t,n,i,r,s,o,a=0){const l=16.666/i;let c="{\n";for(let e=0;e<=1;e+=l){const i=t+(n-t)*s(e);c+=100*e+`%{${o(i,1-i)}}\n`}const h=c+`100% {${o(n,1-n)}}\n}`,u=`__svelte_${function(e){let t=5381,n=e.length;for(;n--;)t=(t<<5)-t^e.charCodeAt(n);return t>>>0}(h)}_${a}`,d=_(e);S.add(d);const p=d.__svelte_stylesheet||(d.__svelte_stylesheet=m(e).sheet),f=d.__svelte_rules||(d.__svelte_rules={});f[u]||(f[u]=!0,p.insertRule(`@keyframes ${u} ${h}`,p.cssRules.length));const g=e.style.animation||"";return e.style.animation=`${g?`${g}, `:""}${u} ${i}ms linear ${r}ms 1 both`,N+=1,u}function R(e,t){const n=(e.style.animation||"").split(", "),i=n.filter(t?e=>e.indexOf(t)<0:e=>-1===e.indexOf("__svelte")),r=n.length-i.length;r&&(e.style.animation=i.join(", "),N-=r,N||u((()=>{N||(S.forEach((e=>{const t=e.__svelte_stylesheet;let n=t.cssRules.length;for(;n--;)t.deleteRule(n);e.__svelte_rules={}})),S.clear())})))}function D(e){k=e}function O(){if(!k)throw new Error("Function called outside component initialization");return k}function A(e){O().$$.on_mount.push(e)}const M=[],L=[],F=[],$=[],q=Promise.resolve();let W=!1;function U(e){F.push(e)}let j=!1;const H=new Set;function z(){if(!j){j=!0;do{for(let e=0;e<M.length;e+=1){const t=M[e];D(t),B(t.$$)}for(D(null),M.length=0;L.length;)L.pop()();for(let e=0;e<F.length;e+=1){const t=F[e];H.has(t)||(H.add(t),t())}F.length=0}while(M.length);for(;$.length;)$.pop()();W=!1,j=!1,H.clear()}}function B(e){if(null!==e.fragment){e.update(),r(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(U)}}let V;function Y(e,t,n){e.dispatchEvent(function(e,t,n=!1){const i=document.createEvent("CustomEvent");return i.initCustomEvent(e,n,!1,t),i}(`${t?"intro":"outro"}${n}`))}const G=new Set;let K;function Q(){K={r:0,c:[],p:K}}function J(){K.r||r(K.c),K=K.p}function X(e,t){e&&e.i&&(G.delete(e),e.i(t))}function Z(e,t,n,i){if(e&&e.o){if(G.has(e))return;G.add(e),K.c.push((()=>{G.delete(e),i&&(n&&e.d(1),i())})),e.o(t)}}const ee={duration:0};function te(n,i,o,a){let l=i(n,o),c=a?0:1,f=null,_=null,m=null;function g(){m&&R(n,m)}function y(e,t){const n=e.b-c;return t*=Math.abs(n),{a:c,b:e.b,d:n,duration:t,start:e.start,end:e.start+t,group:e.group}}function v(i){const{delay:s=0,duration:o=300,easing:a=t,tick:v=e,css:w}=l||ee,b={start:h()+s,b:i};i||(b.group=K,K.r+=1),f||_?_=b:(w&&(g(),m=P(n,c,i,o,s,a,w)),i&&v(0,1),f=y(b,o),U((()=>Y(n,i,"start"))),function(e){let t;0===d.size&&u(p),new Promise((n=>{d.add(t={c:e,f:n})}))}((e=>{if(_&&e>_.start&&(f=y(_,o),_=null,Y(n,f.b,"start"),w&&(g(),m=P(n,c,f.b,f.duration,0,a,l.css))),f)if(e>=f.end)v(c=f.b,1-c),Y(n,f.b,"end"),_||(f.b?g():--f.group.r||r(f.group.c)),f=null;else if(e>=f.start){const t=e-f.start;c=f.a+f.d*a(t/f.duration),v(c,1-c)}return!(!f&&!_)})))}return{run(e){s(l)?(V||(V=Promise.resolve(),V.then((()=>{V=null}))),V).then((()=>{l=l(),v(e)})):v(e)},end(){g(),f=_=null}}}function ne(e){e&&e.c()}function ie(e,t,i,o){const{fragment:a,on_mount:l,on_destroy:c,after_update:h}=e.$$;a&&a.m(t,i),o||U((()=>{const t=l.map(n).filter(s);c?c.push(...t):r(t),e.$$.on_mount=[]})),h.forEach(U)}function re(e,t){const n=e.$$;null!==n.fragment&&(r(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function se(e,t){-1===e.$$.dirty[0]&&(M.push(e),W||(W=!0,q.then(z)),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function oe(t,n,s,o,a,l,c,h=[-1]){const u=k;D(t);const d=t.$$={fragment:null,ctx:null,props:l,update:e,not_equal:a,bound:i(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(u?u.$$.context:[])),callbacks:i(),dirty:h,skip_bound:!1,root:n.target||u.$$.root};c&&c(d.root);let p=!1;if(d.ctx=s?s(t,n.props||{},((e,n,...i)=>{const r=i.length?i[0]:n;return d.ctx&&a(d.ctx[e],d.ctx[e]=r)&&(!d.skip_bound&&d.bound[e]&&d.bound[e](r),p&&se(t,e)),n})):[],d.update(),p=!0,r(d.before_update),d.fragment=!!o&&o(d.ctx),n.target){if(n.hydrate){const e=function(e){return Array.from(e.childNodes)}(n.target);d.fragment&&d.fragment.l(e),e.forEach(y)}else d.fragment&&d.fragment.c();n.intro&&X(t.$$.fragment),ie(t,n.target,n.anchor,n.customElement),z()}D(u)}class ae{$destroy(){re(this,1),this.$destroy=e}$on(e,t){const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const e=n.indexOf(t);-1!==e&&n.splice(e,1)}}$set(e){var t;this.$$set&&(t=e,0!==Object.keys(t).length)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}function le(e){const t=e-1;return t*t*t+1}function ce(e,{delay:t=0,duration:n=400,easing:i=le,x:r=0,y:s=0,opacity:o=0}={}){const a=getComputedStyle(e),l=+a.opacity,c="none"===a.transform?"":a.transform,h=l*(1-o);return{delay:t,duration:n,easing:i,css:(e,t)=>`\n\t\t\ttransform: ${c} translate(${(1-e)*r}px, ${(1-e)*s}px);\n\t\t\topacity: ${l-h*t}`}}function he(e,t,n){const i=e.slice();return i[4]=t[n],i[6]=n,i}function ue(e){let t,n,i,s,o,a,l=e[4].buttonTitle+"";function c(){return e[2](e[4])}return{c(){t=w("button"),n=C(l),t.disabled=e[0],x(t,"class","bg-white transition-colors hover:bg-gray-900 hover:text-white text-gray-900 py-2 px-4 rounded m-3.5")},m(i,r){g(i,t,r),f(t,n),s=!0,o||(a=[E(t,"click",c),E(t,"introend",e[3])],o=!0)},p(n,i){e=n,(!s||1&i)&&(t.disabled=e[0])},i(n){s||(U((()=>{i||(i=te(t,ce,{y:200,duration:2e3,delay:pe+150*e[6]},!0)),i.run(1)})),s=!0)},o(n){i||(i=te(t,ce,{y:200,duration:2e3,delay:pe+150*e[6]},!1)),i.run(0),s=!1},d(e){e&&y(t),e&&i&&i.end(),o=!1,r(a)}}}function de(e){let t,n,i=e[1],r=[];for(let t=0;t<i.length;t+=1)r[t]=ue(he(e,i,t));const s=e=>Z(r[e],1,1,(()=>{r[e]=null}));return{c(){t=w("div");for(let e=0;e<r.length;e+=1)r[e].c();x(t,"class","hidden sm:flex ml-auto mr-auto flex-row justify-center sticky top-0")},m(e,i){g(e,t,i);for(let e=0;e<r.length;e+=1)r[e].m(t,null);n=!0},p(e,[n]){if(3&n){let o;for(i=e[1],o=0;o<i.length;o+=1){const s=he(e,i,o);r[o]?(r[o].p(s,n),X(r[o],1)):(r[o]=ue(s),r[o].c(),X(r[o],1),r[o].m(t,null))}for(Q(),o=i.length;o<r.length;o+=1)s(o);J()}},i(e){if(!n){for(let e=0;e<i.length;e+=1)X(r[e]);n=!0}},o(e){r=r.filter(Boolean);for(let e=0;e<r.length;e+=1)Z(r[e]);n=!1},d(e){e&&y(t),v(r,e)}}}let pe=500;function fe(e,t,n){let i=!1;A((()=>{n(0,i=!0)}));return[i,[{buttonTitle:"About",navId:"about-wrapper"},{buttonTitle:"Projects",navId:"projects-wrapper"}],e=>{!function(e){document.getElementById(e.navId).scrollIntoView({behavior:"smooth",inline:"start",block:"start"})}(e)},()=>n(0,i=!1)]}class _e extends ae{constructor(e){super(),oe(this,e,fe,de,o,{})}}function me(e,t,n){const i=e.slice();return i[1]=t[n],i}function ge(e){let t,n,i,r,s,o,a,l,c,h=e[1],u=[];for(let t=0;t<h.length;t+=1)u[t]=ye(me(e,h,t));return r=new _e({}),{c(){t=w("h3");for(let e=0;e<u.length;e+=1)u[e].c();i=I(),ne(r.$$.fragment),s=I(),o=w("a"),a=w("h3"),a.textContent="Link to CV",x(t,"class","self-center text-2xl md:text-5xl text-center"),x(a,"class","mt-4 md:mt-0 text-blue-600 text-xl"),x(o,"target","_blank"),x(o,"href","https://drive.google.com/uc?export=view&id=1Zx4OJHz992_D9ldnsdQBeBRdWUZmX5JV"),x(o,"class","text-center")},m(e,n){g(e,t,n);for(let e=0;e<u.length;e+=1)u[e].m(t,null);g(e,i,n),ie(r,e,n),g(e,s,n),g(e,o,n),f(o,a),c=!0},p(e,n){if(2&n){let i;for(h=e[1],i=0;i<h.length;i+=1){const r=me(e,h,i);u[i]?u[i].p(r,n):(u[i]=ye(r),u[i].c(),u[i].m(t,null))}for(;i<u.length;i+=1)u[i].d(1);u.length=h.length}},i(e){c||(U((()=>{n||(n=te(t,ce,{y:-200,duration:2e3},!0)),n.run(1)})),X(r.$$.fragment,e),U((()=>{l||(l=te(a,ce,{y:200,duration:2200,delay:2e3},!0)),l.run(1)})),c=!0)},o(e){n||(n=te(t,ce,{y:-200,duration:2e3},!1)),n.run(0),Z(r.$$.fragment,e),l||(l=te(a,ce,{y:200,duration:2200,delay:2e3},!1)),l.run(0),c=!1},d(e){e&&y(t),v(u,e),e&&n&&n.end(),e&&y(i),re(r,e),e&&y(s),e&&y(o),e&&l&&l.end()}}}function ye(e){let t,n,i,r=e[1]+"";return{c(){t=C(r),n=I(),i=w("br")},m(e,r){g(e,t,r),g(e,n,r),g(e,i,r)},p(e,n){2&n&&r!==(r=e[1]+"")&&T(t,r)},d(e){e&&y(t),e&&y(n),e&&y(i)}}}function ve(e){let t,n,i,r,s,o,a,l,c,h,u=e[0]&&ge(e);return{c(){t=w("div"),n=w("div"),i=w("div"),i.innerHTML='<embed id="computer" class="mr-auto w-1/6 lg:w-1/12 h-full" type="image/svg+xml" src="assets/images/computer.svg" alt=""/> \n\n            <img id="server" src="assets/images/server.svg" class="ml-auto w-1/6 lg:w-1/12" alt=""/>',r=I(),s=w("div"),u&&u.c(),o=I(),a=w("div"),a.innerHTML='<img id="router" src="assets/images/router.svg" class="mr-auto w-1/6 lg:w-1/12" alt=""/> \n            <img id="switch" src="assets/images/switch.svg" class="ml-auto w-1/6 lg:w-1/12" alt=""/>',l=I(),c=w("div"),c.innerHTML='<svg id="message" class="relative w-1/2" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M467 61H45C20.218 61 0 81.196 0 106v300c0 24.72 20.128 45 45 45h422c24.72 0 45-20.128 45-45V106c0-24.72-20.128-45-45-45zm-6.214 30L256.954 294.833 51.359 91h409.427zM30 399.788V112.069l144.479 143.24L30 399.788zM51.213 421l144.57-144.57 50.657 50.222c5.864 5.814 15.327 5.795 21.167-.046L317 277.213 460.787 421H51.213zM482 399.787L338.213 256 482 112.212v287.575z"></path><path d="M154.661 192.852L52.373 91.452l101.814-.161a78521.3 78521.3 0 01203.707 0l101.895.16-101.42 101.4-101.42 101.401zM410.263 327.356l-71.356-71.358 71.516-71.513 71.515-71.514v142.872c0 78.58-.071 142.871-.16 142.871-.087 0-32.269-32.11-71.515-71.358z" id="path1" fill="#9fdcff" fill-rule="evenodd"></path><path d="M123.882 348.88l71.984-71.984 25.795 25.72c16.74 16.692 26.73 26.187 28.46 27.05 3.655 1.825 9.992 1.828 13.657.006 1.736-.863 11.485-10.123 27.982-26.58l25.317-25.256 71.512 71.515 71.513 71.514H51.897zM30.062 256.104V113.179l2.373 1.95c1.305 1.072 33.646 33.064 71.868 71.093l69.495 69.145-71.868 71.831-71.868 71.83z" id="path2" fill="#9fdcff" fill-rule="evenodd"></path></svg>',x(i,"class","p-10 flex flex-row w-full"),x(s,"class","mb-auto mt-auto"),x(a,"class","p-10 flex flex-row w-full"),x(n,"id","parent"),x(n,"class","min-h-screen w-screen flex flex-col md:w-screen xl:w-3/4 m-auto p-10 pb-20 sm:p-7 relative overflow-hidden"),x(c,"class","w-1/6 lg:w-1/12 absolute"),x(c,"id","message"),x(t,"id","home-wrapper"),x(t,"class","select-none svelte-1vakf0e")},m(e,d){g(e,t,d),f(t,n),f(n,i),f(n,r),f(n,s),u&&u.m(s,null),f(n,o),f(n,a),f(t,l),f(t,c),h=!0},p(e,[t]){e[0]?u?(u.p(e,t),1&t&&X(u,1)):(u=ge(e),u.c(),X(u,1),u.m(s,null)):u&&(Q(),Z(u,1,1,(()=>{u=null})),J())},i(e){h||(X(u),h=!0)},o(e){Z(u),h=!1},d(e){e&&y(t),u&&u.d()}}}function we(e){return new Promise((t=>{let n=setInterval((()=>{let i=function(e){let t=document.querySelector("#"+e).getBoundingClientRect();return{x:Math.round(t.left),y:Math.round(t.top)}}(e);(function(e,t){let n=document.querySelector("#message"),i="px",r=+n.style.left.replace(i,""),s=+n.style.top.replace(i,"");if(r<e-6)n.style.left=r+6+i;else if(r>e+6)n.style.left=r-6+i;else if(s>=t-6&&s<=t+6)return!0;if(s<t-6)n.style.top=s+6+i;else if(s>t+6)n.style.top=s-6+i;else if(r>=e-6&&r<=e+6)return!0;return!1})(Math.round(i.x),Math.round(i.y))&&(clearInterval(n),t(!0))}),4)}))}function be(e,t,n){let i=!1,{data:r}=t,s=[];var o;return r.subscribe((e=>{n(1,s=e.greeting)})),o=()=>{document.querySelector("#message").style.visibility="hidden"},O().$$.on_destroy.push(o),A((async()=>{let e=document.querySelector("#message");e.style.visibility="hidden",setTimeout((()=>{n(0,i=!0)}),500),await new Promise((e=>setTimeout(e,1500))),await we("computer").then((()=>e.style.visibility="visible")),await we("router"),await we("switch"),await we("server"),await we("switch"),await we("router"),await we("computer").then((()=>{e.style.visibility="hidden",document.querySelector("#computer").getSVGDocument().getElementById("hello-world").style.visibility="visible"}))})),e.$$set=e=>{"data"in e&&n(2,r=e.data)},[i,s,r]}class Ce extends ae{constructor(e){super(),oe(this,e,be,ve,o,{data:2})}}function Ie(e,t,n){const i=e.slice();return i[9]=t[n],i}function Ee(e,t,n){const i=e.slice();return i[12]=t[n],i}function xe(e,t,n){const i=e.slice();return i[15]=t[n],i}function Te(e){let t,n,i,r,s,o,a,c,h,u,d,p,_,m,C,E,T,S,k,N,P,R,D,O,A,M,L,F,$,q,W,j,H,z,B,V,Y,G,K,Q,J,X,Z,ee,ne,ie,re=e[3],se=[];for(let t=0;t<re.length;t+=1)se[t]=Se(xe(e,re,t));let oe=e[1],ae=[];for(let t=0;t<oe.length;t+=1)ae[t]=ke(Ee(e,oe,t));let le=e[2],he=[];for(let t=0;t<le.length;t+=1)he[t]=Ne(Ie(e,le,t));return{c(){t=w("div"),n=w("img"),s=I(),o=w("div"),a=w("a"),c=b("svg"),h=b("path"),u=I(),d=w("a"),p=b("svg"),_=b("path"),m=b("path"),C=b("path"),E=b("path"),T=b("path"),k=I(),N=w("a"),P=b("svg"),R=b("path"),O=I(),A=w("div"),M=w("h1"),M.textContent="Hi, Im Sean",L=I(),F=w("br"),$=I(),q=w("p");for(let e=0;e<se.length;e+=1)se[e].c();W=I(),j=w("div"),H=w("h2"),H.textContent="Education",z=I(),B=w("h2"),B.textContent="Date finished",V=I();for(let e=0;e<ae.length;e+=1)ae[e].c();G=I(),K=w("div"),Q=w("h2"),Q.textContent="Work Experience",J=I(),X=w("h2"),X.textContent="Date finished",Z=I();for(let e=0;e<he.length;e+=1)he[e].c();x(n,"id","profilePic"),l(n.src,i=e[4])||x(n,"src",i),x(n,"class","w-full m-auto md:m-0 bg-cover border-gray-300 border-4"),x(n,"alt",""),x(h,"fill","#0e76a8"),x(h,"d","M416 0L28.736-13.923c-17.589-.633-44.39-1.113-43.925 45.59l3.797 382.134c.79 79.523 22.528 38.485 40.128 38.63l386.631 3.164c17.6.144 53.798 9.547 53.518-8.251L461.923 5.086C461.643-12.712 433.59.632 416 0zM135.4 384H69V170.2h66.5V384zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 64 102.2 64c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V280c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V384h-66.4V170.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9z"),x(h,"class","svelte-xcatmp"),x(c,"id","linkedin"),x(c,"aria-hidden","true"),x(c,"focusable","false"),x(c,"data-prefix","fab"),x(c,"data-icon","linkedin"),x(c,"class","svg-inline--fa fa-linkedin fa-w-14 h-10 cursor-pointer svelte-xcatmp"),x(c,"role","img"),x(c,"xmlns","http://www.w3.org/2000/svg"),x(c,"viewBox","0 0 448 448"),x(a,"href",e[5]),x(a,"target","_blank"),x(_,"fill","#4285f4"),x(_,"d","M58 108h14V74L52 59v43c0 3.32 2.69 6 6 6"),x(_,"class","svelte-xcatmp"),x(m,"fill","#34a853"),x(m,"d","M120 108h14c3.32 0 6-2.69 6-6V59l-20 15"),x(m,"class","svelte-xcatmp"),x(C,"fill","#fbbc04"),x(C,"d","M120 48v26l20-15v-8c0-7.42-8.47-11.65-14.4-7.2"),x(C,"class","svelte-xcatmp"),x(E,"fill","#ea4335"),x(E,"d","M72 74V48l24 18 24-18v26L96 92"),x(E,"class","svelte-xcatmp"),x(T,"fill","#c5221f"),x(T,"d","M52 51v8l20 15V48l-5.6-4.2c-5.94-4.45-14.4-.22-14.4 7.2"),x(T,"class","svelte-xcatmp"),x(p,"class","h-9 cursor-pointer svelte-xcatmp"),x(p,"xmlns","http://www.w3.org/2000/svg"),x(p,"viewBox","52 42 88 66"),x(p,"id","gmail-icon"),x(d,"class","my-auto block ml-8"),x(d,"href",S="mailto: "+e[6]),x(d,"target","_blank"),x(R,"fill","currentColor"),x(R,"d","M450.462-11.692L41.846-15.385c-26.499-.24-60.055 11.08-61.538 37.539l-23.385 417.23c-1.483 26.46 65.194 20.656 91.692 20.924L414.77 464c34.26.345 59.136-20.916 57.846-47.385L454.77 50.462c-1.29-26.469 22.191-61.915-4.307-62.154zM277.3 383.7c-8.4 1.5-11.5-3.7-11.5-8 0-5.4.2-33 .2-55.3 0-15.6-5.2-25.5-11.3-30.7 37-4.1 76-9.2 76-73.1 0-18.2-6.5-27.3-17.1-39 1.7-4.3 7.4-22-1.7-45-13.9-4.3-45.7 17.9-45.7 17.9-13.2-3.7-27.5-5.6-41.6-5.6-14.1 0-28.4 1.9-41.6 5.6 0 0-31.8-22.2-45.7-17.9-9.1 22.9-3.5 40.6-1.7 45-10.6 11.7-15.6 20.8-15.6 39 0 63.6 37.3 69 74.3 73.1-4.8 4.3-9.1 11.7-10.6 22.3-9.5 4.3-33.8 11.7-48.3-13.9-9.1-15.8-25.5-17.1-25.5-17.1-16.2-.2-1.1 10.2-1.1 10.2 10.8 5 18.4 24.2 18.4 24.2 9.7 29.7 56.1 19.7 56.1 19.7 0 13.9.2 36.5.2 40.6 0 4.3-3 9.5-11.5 8-66-22.1-112.2-84.9-112.2-158.3 0-91.8 70.2-161.5 162-161.5S388 133.6 388 225.4c.1 73.4-44.7 136.3-110.7 158.3zm-98.1-61.1c-1.9.4-3.7-.4-3.9-1.7-.2-1.5 1.1-2.8 3-3.2 1.9-.2 3.7.6 3.9 1.9.3 1.3-1 2.6-3 3zm-9.5-.9c0 1.3-1.5 2.4-3.5 2.4-2.2.2-3.7-.9-3.7-2.4 0-1.3 1.5-2.4 3.5-2.4 1.9-.2 3.7.9 3.7 2.4zm-13.7-1.1c-.4 1.3-2.4 1.9-4.1 1.3-1.9-.4-3.2-1.9-2.8-3.2.4-1.3 2.4-1.9 4.1-1.5 2 .6 3.3 2.1 2.8 3.4zm-12.3-5.4c-.9 1.1-2.8.9-4.3-.6-1.5-1.3-1.9-3.2-.9-4.1.9-1.1 2.8-.9 4.3.6 1.3 1.3 1.8 3.3.9 4.1zm-9.1-9.1c-.9.6-2.6 0-3.7-1.5s-1.1-3.2 0-3.9c1.1-.9 2.8-.2 3.7 1.3 1.1 1.5 1.1 3.3 0 4.1zm-6.5-9.7c-.9.9-2.4.4-3.5-.6-1.1-1.3-1.3-2.8-.4-3.5.9-.9 2.4-.4 3.5.6 1.1 1.3 1.3 2.8.4 3.5zm-6.7-7.4c-.4.9-1.7 1.1-2.8.4-1.3-.6-1.9-1.7-1.5-2.6.4-.6 1.5-.9 2.8-.4 1.3.7 1.9 1.8 1.5 2.6z"),x(R,"class","svelte-xcatmp"),x(P,"id","github-icon"),x(P,"aria-hidden","true"),x(P,"data-prefix","fab"),x(P,"data-icon","github-square"),x(P,"class","prefix__prefix__svg-inline--fa prefix__prefix__fa-github-square prefix__prefix__fa-w-14 h-10 cursor-pointer svelte-xcatmp"),x(P,"xmlns","http://www.w3.org/2000/svg"),x(P,"viewBox","0 0 448 448"),x(N,"class","my-auto block ml-8"),x(N,"href",e[7]),x(N,"target","_blank"),x(o,"class","mx-auto w-max mt-4 flex flex-row"),x(t,"class","w-3/4 md:w-3/5 2xl:w-2/5 mx-auto md:mx-0"),x(M,"class","text-center md:text-left mt-3.5 md:mt-0 text-3xl font-thin"),x(q,"class","text-center md:text-left"),x(H,"class","font-bold mt-4"),x(B,"class","font-bold mt-4 text-center"),x(j,"class","grid grid-cols-2"),x(Q,"class","font-bold mt-4"),x(X,"class","font-bold mt-4 text-center"),x(K,"class","grid grid-cols-2"),x(A,"class","m-auto md:mx-4")},m(e,i){g(e,t,i),f(t,n),f(t,s),f(t,o),f(o,a),f(a,c),f(c,h),f(o,u),f(o,d),f(d,p),f(p,_),f(p,m),f(p,C),f(p,E),f(p,T),f(o,k),f(o,N),f(N,P),f(P,R),g(e,O,i),g(e,A,i),f(A,M),f(A,L),f(A,F),f(A,$),f(A,q);for(let e=0;e<se.length;e+=1)se[e].m(q,null);f(A,W),f(A,j),f(j,H),f(j,z),f(j,B),f(j,V);for(let e=0;e<ae.length;e+=1)ae[e].m(j,null);f(A,G),f(A,K),f(K,Q),f(K,J),f(K,X),f(K,Z);for(let e=0;e<he.length;e+=1)he[e].m(K,null);ie=!0},p(e,t){if((!ie||16&t&&!l(n.src,i=e[4]))&&x(n,"src",i),(!ie||32&t)&&x(a,"href",e[5]),(!ie||64&t&&S!==(S="mailto: "+e[6]))&&x(d,"href",S),(!ie||128&t)&&x(N,"href",e[7]),8&t){let n;for(re=e[3],n=0;n<re.length;n+=1){const i=xe(e,re,n);se[n]?se[n].p(i,t):(se[n]=Se(i),se[n].c(),se[n].m(q,null))}for(;n<se.length;n+=1)se[n].d(1);se.length=re.length}if(2&t){let n;for(oe=e[1],n=0;n<oe.length;n+=1){const i=Ee(e,oe,n);ae[n]?ae[n].p(i,t):(ae[n]=ke(i),ae[n].c(),ae[n].m(j,null))}for(;n<ae.length;n+=1)ae[n].d(1);ae.length=oe.length}if(4&t){let n;for(le=e[2],n=0;n<le.length;n+=1){const i=Ie(e,le,n);he[n]?he[n].p(i,t):(he[n]=Ne(i),he[n].c(),he[n].m(K,null))}for(;n<he.length;n+=1)he[n].d(1);he.length=le.length}},i(e){ie||(U((()=>{r||(r=te(n,ce,{x:-1e3,duration:2e3},!0)),r.run(1)})),U((()=>{D||(D=te(o,ce,{x:-1e3,duration:2e3},!0)),D.run(1)})),U((()=>{Y||(Y=te(j,ce,{x:1e3,duration:2e3},!0)),Y.run(1)})),U((()=>{ee||(ee=te(K,ce,{x:1e3,duration:2e3,delay:500},!0)),ee.run(1)})),U((()=>{ne||(ne=te(A,ce,{x:1e3,duration:2e3},!0)),ne.run(1)})),ie=!0)},o(e){r||(r=te(n,ce,{x:-1e3,duration:2e3},!1)),r.run(0),D||(D=te(o,ce,{x:-1e3,duration:2e3},!1)),D.run(0),Y||(Y=te(j,ce,{x:1e3,duration:2e3},!1)),Y.run(0),ee||(ee=te(K,ce,{x:1e3,duration:2e3,delay:500},!1)),ee.run(0),ne||(ne=te(A,ce,{x:1e3,duration:2e3},!1)),ne.run(0),ie=!1},d(e){e&&y(t),e&&r&&r.end(),e&&D&&D.end(),e&&y(O),e&&y(A),v(se,e),v(ae,e),e&&Y&&Y.end(),v(he,e),e&&ee&&ee.end(),e&&ne&&ne.end()}}}function Se(e){let t,n,i,r=e[15]+"";return{c(){t=C(r),n=I(),i=w("br")},m(e,r){g(e,t,r),g(e,n,r),g(e,i,r)},p(e,n){8&n&&r!==(r=e[15]+"")&&T(t,r)},d(e){e&&y(t),e&&y(n),e&&y(i)}}}function ke(e){let t,n,i,r,s,o,a=e[12].title+"",l=e[12].dateFinished+"";return{c(){t=w("p"),n=C(a),i=I(),r=w("p"),s=C(l),o=I(),x(t,"class","my-2"),x(r,"class","my-2 text-center")},m(e,a){g(e,t,a),f(t,n),g(e,i,a),g(e,r,a),f(r,s),f(r,o)},p(e,t){2&t&&a!==(a=e[12].title+"")&&T(n,a),2&t&&l!==(l=e[12].dateFinished+"")&&T(s,l)},d(e){e&&y(t),e&&y(i),e&&y(r)}}}function Ne(e){let t,n,i,r,s,o,a=e[9].place+"",l=e[9].dateFinished+"";return{c(){t=w("p"),n=C(a),i=I(),r=w("p"),s=C(l),o=I(),x(t,"class","my-2"),x(r,"class","my-2 text-center")},m(e,a){g(e,t,a),f(t,n),g(e,i,a),g(e,r,a),f(r,s),f(r,o)},p(e,t){4&t&&a!==(a=e[9].place+"")&&T(n,a),4&t&&l!==(l=e[9].dateFinished+"")&&T(s,l)},d(e){e&&y(t),e&&y(i),e&&y(r)}}}function Pe(e){let t,n,i,r,s=e[0]&&Te(e);return{c(){t=w("div"),n=w("div"),i=w("div"),s&&s.c(),x(i,"class","flex flex-col md:flex-row w-full m-auto"),x(n,"class","min-h-screen flex flex-col mb-8 md:mb-0 md:w-screen xl:w-3/4 m-auto p-10 pb-20 sm:p-7 bg-white overflow-x-hidden"),x(t,"id","about-wrapper"),x(t,"class","select-none svelte-xcatmp")},m(e,o){g(e,t,o),f(t,n),f(n,i),s&&s.m(i,null),r=!0},p(e,[t]){e[0]?s?(s.p(e,t),1&t&&X(s,1)):(s=Te(e),s.c(),X(s,1),s.m(i,null)):s&&(Q(),Z(s,1,1,(()=>{s=null})),J())},i(e){r||(X(s),r=!0)},o(e){Z(s),r=!1},d(e){e&&y(t),s&&s.d()}}}function Re(e,t,n){let{visible:i=!1}=t,{data:r}=t,s=[],o=[],a=[],l="",c="",h="",u="";return r.subscribe((e=>{n(1,s=e.profile.education),n(2,o=e.profile.workExperience),n(3,a=e.profile.bio),n(4,l=e.profile.profilePic),n(5,c=e.profile.linkedin),n(7,u=e.profile.github),n(6,h=e.profile.email);let t=document.getElementById("profilePic");t&&(t.src=e.profile.profilePic)})),e.$$set=e=>{"visible"in e&&n(0,i=e.visible),"data"in e&&n(8,r=e.data)},[i,s,o,a,l,c,h,u,r]}class De extends ae{constructor(e){super(),oe(this,e,Re,Pe,o,{visible:0,data:8})}}function Oe(e){let t,n,i,r,s,o,a,c,h,u,d,p,_,m,v,b,E,S,k;function N(e,t){return e[5]?Me:Ae}let P=N(e),R=P(e);return{c(){t=w("div"),n=w("img"),r=I(),s=w("div"),o=w("h3"),a=C(e[0]),c=I(),h=w("div"),u=w("h2"),u.textContent="Tools/Skills:",d=I(),p=w("p"),_=C(e[2]),m=I(),R.c(),v=I(),b=w("p"),E=C(e[1]),x(n,"class","mx-auto md:w-1/3 mb-auto mt-2 md:mr-3 md:ml-0 rounded-2xl"),l(n.src,i=e[3])||x(n,"src",i),x(n,"alt",""),x(o,"class","font-semibold text-2xl mb-2 text-center md:text-left"),x(u,"class","font-semibold mr-2"),x(h,"class","flex flex-row mt-2 mx-auto md:mx-0"),x(b,"class","text-center md:text-left"),x(s,"class","md:ml-3"),x(t,"class","w-5/6 border-2 shadow-xl flex flex-col md:flex-row m-3.5 ml-auto mr-auto p-3 pl-6 pr-6 rounded-2xl select-none")},m(e,i){g(e,t,i),f(t,n),f(t,r),f(t,s),f(s,o),f(o,a),f(s,c),f(s,h),f(h,u),f(h,d),f(h,p),f(p,_),f(s,m),R.m(s,null),f(s,v),f(s,b),f(b,E),k=!0},p(t,r){e=t,(!k||8&r&&!l(n.src,i=e[3]))&&x(n,"src",i),(!k||1&r)&&T(a,e[0]),(!k||4&r)&&T(_,e[2]),P===(P=N(e))&&R?R.p(e,r):(R.d(1),R=P(e),R&&(R.c(),R.m(s,v))),(!k||2&r)&&T(E,e[1])},i(n){k||(U((()=>{S||(S=te(t,ce,{x:500,duration:1e3,delay:e[4]},!0)),S.run(1)})),k=!0)},o(n){S||(S=te(t,ce,{x:500,duration:1e3,delay:e[4]},!1)),S.run(0),k=!1},d(e){e&&y(t),R.d(),e&&S&&S.end()}}}function Ae(t){let n;return{c(){n=w("br")},m(e,t){g(e,n,t)},p:e,d(e){e&&y(n)}}}function Me(e){let t,n;return{c(){t=w("a"),n=w("button"),n.textContent="Live Demo",x(n,"class","bg-white transition-colors hover:bg-gray-900 hover:text-white text-gray-900 py-1 px-2 rounded my-2 mx-auto md:mx-0 block"),x(t,"href",e[5]),x(t,"target","_blank")},m(e,i){g(e,t,i),f(t,n)},p(e,n){32&n&&x(t,"href",e[5])},d(e){e&&y(t)}}}function Le(e){let t,n,i=e[6]&&Oe(e);return{c(){i&&i.c(),t=C("")},m(e,r){i&&i.m(e,r),g(e,t,r),n=!0},p(e,[n]){e[6]?i?(i.p(e,n),64&n&&X(i,1)):(i=Oe(e),i.c(),X(i,1),i.m(t.parentNode,t)):i&&(Q(),Z(i,1,1,(()=>{i=null})),J())},i(e){n||(X(i),n=!0)},o(e){Z(i),n=!1},d(e){i&&i.d(e),e&&y(t)}}}function Fe(e,t,n){let{title:i=null}=t,{description:r=null}=t,{skills:s=null}=t,{imageURL:o=null}=t,{delay:a=0}=t,{link:l=null}=t,{visible:c=!1}=t;return e.$$set=e=>{"title"in e&&n(0,i=e.title),"description"in e&&n(1,r=e.description),"skills"in e&&n(2,s=e.skills),"imageURL"in e&&n(3,o=e.imageURL),"delay"in e&&n(4,a=e.delay),"link"in e&&n(5,l=e.link),"visible"in e&&n(6,c=e.visible)},[i,r,s,o,a,l,c]}class $e extends ae{constructor(e){super(),oe(this,e,Fe,Le,o,{title:0,description:1,skills:2,imageURL:3,delay:4,link:5,visible:6})}}function qe(e,t,n){const i=e.slice();return i[3]=t[n],i}function We(e){let t,n;return t=new $e({props:{title:e[3].title,description:e[3].description,skills:e[3].toolsAndSkills,imageURL:e[3].image,link:e[3].link,delay:je+=300,visible:e[0]}}),{c(){ne(t.$$.fragment)},m(e,i){ie(t,e,i),n=!0},p(e,n){const i={};2&n&&(i.title=e[3].title),2&n&&(i.description=e[3].description),2&n&&(i.skills=e[3].toolsAndSkills),2&n&&(i.imageURL=e[3].image),2&n&&(i.link=e[3].link),1&n&&(i.visible=e[0]),t.$set(i)},i(e){n||(X(t.$$.fragment,e),n=!0)},o(e){Z(t.$$.fragment,e),n=!1},d(e){re(t,e)}}}function Ue(e){let t,n,i,r=e[1],s=[];for(let t=0;t<r.length;t+=1)s[t]=We(qe(e,r,t));const o=e=>Z(s[e],1,1,(()=>{s[e]=null}));return{c(){t=w("div"),n=w("div");for(let e=0;e<s.length;e+=1)s[e].c();x(n,"class","flex flex-col md:w-screen xl:w-3/4 m-auto pb-20 sm:p-7 overflow-x-hidden bg-white"),x(t,"id","projects-wrapper"),x(t,"class","svelte-4idedc")},m(e,r){g(e,t,r),f(t,n);for(let e=0;e<s.length;e+=1)s[e].m(n,null);i=!0},p(e,[t]){if(3&t){let i;for(r=e[1],i=0;i<r.length;i+=1){const o=qe(e,r,i);s[i]?(s[i].p(o,t),X(s[i],1)):(s[i]=We(o),s[i].c(),X(s[i],1),s[i].m(n,null))}for(Q(),i=r.length;i<s.length;i+=1)o(i);J()}},i(e){if(!i){for(let e=0;e<r.length;e+=1)X(s[e]);i=!0}},o(e){s=s.filter(Boolean);for(let e=0;e<s.length;e+=1)Z(s[e]);i=!1},d(e){e&&y(t),v(s,e)}}}let je=0;function He(e,t,n){let{visible:i=!1}=t,{data:r}=t,s=[];return r.subscribe((e=>{console.log(e.project),n(1,s=e.project)})),e.$$set=e=>{"visible"in e&&n(0,i=e.visible),"data"in e&&n(2,r=e.data)},[i,s,r]}class ze extends ae{constructor(e){super(),oe(this,e,He,Ue,o,{visible:0,data:2})}}function Be(t){let n,i,r;return{c(){n=w("div"),i=w("h2"),r=C(t[0]),x(i,"class","text-center block my-auto text-4xl font-thin p-2"),x(n,"class","w-100 border-2 h-28 flex bg-gray-100 flex-column justify-center")},m(e,t){g(e,n,t),f(n,i),f(i,r)},p(e,[t]){1&t&&T(r,e[0])},i:e,o:e,d(e){e&&y(n)}}}function Ve(e,t,n){let{title:i=""}=t;return e.$$set=e=>{"title"in e&&n(0,i=e.title)},[i]}class Ye extends ae{constructor(e){super(),oe(this,e,Ve,Be,o,{title:0})}}
/**
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
     */const Ge=!1,Ke="${JSCORE_VERSION}",Qe=function(e,t){if(!e)throw Je(t)},Je=function(e){return new Error("Firebase Database ("+Ke+") INTERNAL ASSERT FAILED: "+e)},Xe=function(e){const t=[];let n=0;for(let i=0;i<e.length;i++){let r=e.charCodeAt(i);r<128?t[n++]=r:r<2048?(t[n++]=r>>6|192,t[n++]=63&r|128):55296==(64512&r)&&i+1<e.length&&56320==(64512&e.charCodeAt(i+1))?(r=65536+((1023&r)<<10)+(1023&e.charCodeAt(++i)),t[n++]=r>>18|240,t[n++]=r>>12&63|128,t[n++]=r>>6&63|128,t[n++]=63&r|128):(t[n++]=r>>12|224,t[n++]=r>>6&63|128,t[n++]=63&r|128)}return t},Ze={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let t=0;t<e.length;t+=3){const r=e[t],s=t+1<e.length,o=s?e[t+1]:0,a=t+2<e.length,l=a?e[t+2]:0,c=r>>2,h=(3&r)<<4|o>>4;let u=(15&o)<<2|l>>6,d=63&l;a||(d=64,s||(u=64)),i.push(n[c],n[h],n[u],n[d])}return i.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(Xe(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){const t=[];let n=0,i=0;for(;n<e.length;){const r=e[n++];if(r<128)t[i++]=String.fromCharCode(r);else if(r>191&&r<224){const s=e[n++];t[i++]=String.fromCharCode((31&r)<<6|63&s)}else if(r>239&&r<365){const s=((7&r)<<18|(63&e[n++])<<12|(63&e[n++])<<6|63&e[n++])-65536;t[i++]=String.fromCharCode(55296+(s>>10)),t[i++]=String.fromCharCode(56320+(1023&s))}else{const s=e[n++],o=e[n++];t[i++]=String.fromCharCode((15&r)<<12|(63&s)<<6|63&o)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let t=0;t<e.length;){const r=n[e.charAt(t++)],s=t<e.length?n[e.charAt(t)]:0;++t;const o=t<e.length?n[e.charAt(t)]:64;++t;const a=t<e.length?n[e.charAt(t)]:64;if(++t,null==r||null==s||null==o||null==a)throw Error();const l=r<<2|s>>4;if(i.push(l),64!==o){const e=s<<4&240|o>>2;if(i.push(e),64!==a){const e=o<<6&192|a;i.push(e)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},et=function(e){const t=Xe(e);return Ze.encodeByteArray(t,!0)},tt=function(e){return et(e).replace(/\./g,"")},nt=function(e){try{return Ze.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};
/**
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
     */
/**
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
     */
function it(e){return rt(void 0,e)}function rt(e,t){if(!(t instanceof Object))return t;switch(t.constructor){case Date:return new Date(t.getTime());case Object:void 0===e&&(e={});break;case Array:e=[];break;default:return t}for(const n in t)t.hasOwnProperty(n)&&"__proto__"!==n&&(e[n]=rt(e[n],t[n]));return e}
/**
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
     */
class st{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"==typeof e&&(this.promise.catch((()=>{})),1===e.length?e(t):e(t,n))}}}
/**
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
     */function ot(){return"undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test("undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:"")}function at(){return!0===Ge}class lt extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,lt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ct.prototype.create)}}class ct{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},i=`${this.service}/${e}`,r=this.errors[e],s=r?function(e,t){return e.replace(ht,((e,n)=>{const i=t[n];return null!=i?String(i):`<${n}?>`}))}(r,n):"Error",o=`${this.serviceName}: ${s} (${i}).`;return new lt(i,o,n)}}const ht=/\{\$([^}]+)}/g;
/**
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
     */function ut(e){return JSON.parse(e)}function dt(e){return JSON.stringify(e)}
/**
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
     */const pt=function(e){let t={},n={},i={},r="";try{const s=e.split(".");t=ut(nt(s[0])||""),n=ut(nt(s[1])||""),r=s[2],i=n.d||{},delete n.d}catch(e){}return{header:t,claims:n,data:i,signature:r}};
/**
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
     */
function ft(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function _t(e,t){return Object.prototype.hasOwnProperty.call(e,t)?e[t]:void 0}function mt(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function gt(e,t,n){const i={};for(const r in e)Object.prototype.hasOwnProperty.call(e,r)&&(i[r]=t.call(n,e[r],r,e));return i}function yt(e,t){if(e===t)return!0;const n=Object.keys(e),i=Object.keys(t);for(const r of n){if(!i.includes(r))return!1;const n=e[r],s=t[r];if(vt(n)&&vt(s)){if(!yt(n,s))return!1}else if(n!==s)return!1}for(const e of i)if(!n.includes(e))return!1;return!0}function vt(e){return null!==e&&"object"==typeof e}
/**
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
     */
/**
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
     */
class wt{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=64,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const n=this.W_;if("string"==typeof e)for(let i=0;i<16;i++)n[i]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let i=0;i<16;i++)n[i]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let e=16;e<80;e++){const t=n[e-3]^n[e-8]^n[e-14]^n[e-16];n[e]=4294967295&(t<<1|t>>>31)}let i,r,s=this.chain_[0],o=this.chain_[1],a=this.chain_[2],l=this.chain_[3],c=this.chain_[4];for(let e=0;e<80;e++){e<40?e<20?(i=l^o&(a^l),r=1518500249):(i=o^a^l,r=1859775393):e<60?(i=o&a|l&(o|a),r=2400959708):(i=o^a^l,r=3395469782);const t=(s<<5|s>>>27)+i+c+r+n[e]&4294967295;c=l,l=a,a=4294967295&(o<<30|o>>>2),o=s,s=t}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+o&4294967295,this.chain_[2]=this.chain_[2]+a&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+c&4294967295}update(e,t){if(null==e)return;void 0===t&&(t=e.length);const n=t-this.blockSize;let i=0;const r=this.buf_;let s=this.inbuf_;for(;i<t;){if(0===s)for(;i<=n;)this.compress_(e,i),i+=this.blockSize;if("string"==typeof e){for(;i<t;)if(r[s]=e.charCodeAt(i),++s,++i,s===this.blockSize){this.compress_(r),s=0;break}}else for(;i<t;)if(r[s]=e[i],++s,++i,s===this.blockSize){this.compress_(r),s=0;break}}this.inbuf_=s,this.total_+=t}digest(){const e=[];let t=8*this.total_;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let e=this.blockSize-1;e>=56;e--)this.buf_[e]=255&t,t/=256;this.compress_(this.buf_);let n=0;for(let t=0;t<5;t++)for(let i=24;i>=0;i-=8)e[n]=this.chain_[t]>>i&255,++n;return e}}function bt(e,t){return`${e} failed: ${t} argument `}
/**
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
     */const Ct=function(e){let t=0;for(let n=0;n<e.length;n++){const i=e.charCodeAt(n);i<128?t++:i<2048?t+=2:i>=55296&&i<=56319?(t+=4,n++):t+=3}return t};
/**
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
     */
function It(e){return e&&e._delegate?e._delegate:e}
/**
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
     */function Et(e,t){return new Promise(((n,i)=>{e.onsuccess=e=>{n(e.target.result)},e.onerror=e=>{var n;i(`${t}: ${null===(n=e.target.error)||void 0===n?void 0:n.message}`)}}))}class xt{constructor(e){this._db=e,this.objectStoreNames=this._db.objectStoreNames}transaction(e,t="readonly"){return new Tt(this._db.transaction.call(this._db,e,t))}createObjectStore(e,t){return new St(this._db.createObjectStore(e,t))}close(){this._db.close()}}class Tt{constructor(e){this._transaction=e,this.complete=new Promise(((e,t)=>{this._transaction.oncomplete=function(){e()},this._transaction.onerror=()=>{t(this._transaction.error)},this._transaction.onabort=()=>{t(this._transaction.error)}}))}objectStore(e){return new St(this._transaction.objectStore(e))}}class St{constructor(e){this._store=e}index(e){return new kt(this._store.index(e))}createIndex(e,t,n){return new kt(this._store.createIndex(e,t,n))}get(e){return Et(this._store.get(e),"Error reading from IndexedDB")}put(e,t){return Et(this._store.put(e,t),"Error writing to IndexedDB")}delete(e){return Et(this._store.delete(e),"Error deleting from IndexedDB")}clear(){return Et(this._store.clear(),"Error clearing IndexedDB object store")}}class kt{constructor(e){this._index=e}get(e){return Et(this._index.get(e),"Error reading from IndexedDB")}}class Nt{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}
/**
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
     */const Pt="[DEFAULT]";
/**
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
     */class Rt{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new st;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(e){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),i=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(i)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(e){if(i)return null;throw e}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(function(e){return"EAGER"===e.instantiationMode}
/**
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
     */(e))try{this.getOrInitializeService({instanceIdentifier:Pt})}catch(e){}for(const[e,t]of this.instancesDeferred.entries()){const n=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:n});t.resolve(e)}catch(e){}}}}clearInstance(e="[DEFAULT]"){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter((e=>"INTERNAL"in e)).map((e=>e.INTERNAL.delete())),...e.filter((e=>"_delete"in e)).map((e=>e._delete()))])}isComponentSet(){return null!=this.component}isInitialized(e="[DEFAULT]"){return this.instances.has(e)}getOptions(e="[DEFAULT]"){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[e,t]of this.instancesDeferred.entries()){n===this.normalizeInstanceIdentifier(e)&&t.resolve(i)}return i}onInit(e,t){var n;const i=this.normalizeInstanceIdentifier(t),r=null!==(n=this.onInitCallbacks.get(i))&&void 0!==n?n:new Set;r.add(e),this.onInitCallbacks.set(i,r);const s=this.instances.get(i);return s&&e(s,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const i of n)try{i(e,t)}catch(e){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:(i=e,i===Pt?void 0:i),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(e){}var i;return n||null}normalizeInstanceIdentifier(e="[DEFAULT]"){return this.component?this.component.multipleInstances?e:Pt:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}class Dt{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Rt(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}
/**
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
     */var Ot;!function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"}(Ot||(Ot={}));const At={debug:Ot.DEBUG,verbose:Ot.VERBOSE,info:Ot.INFO,warn:Ot.WARN,error:Ot.ERROR,silent:Ot.SILENT},Mt=Ot.INFO,Lt={[Ot.DEBUG]:"log",[Ot.VERBOSE]:"log",[Ot.INFO]:"info",[Ot.WARN]:"warn",[Ot.ERROR]:"error"},Ft=(e,t,...n)=>{if(t<e.logLevel)return;const i=(new Date).toISOString(),r=Lt[t];if(!r)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[r](`[${i}]  ${e.name}:`,...n)};class $t{constructor(e){this.name=e,this._logLevel=Mt,this._logHandler=Ft,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Ot))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?At[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Ot.DEBUG,...e),this._logHandler(this,Ot.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Ot.VERBOSE,...e),this._logHandler(this,Ot.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Ot.INFO,...e),this._logHandler(this,Ot.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Ot.WARN,...e),this._logHandler(this,Ot.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Ot.ERROR,...e),this._logHandler(this,Ot.ERROR,...e)}}
/**
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
     */class qt{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map((e=>{if(function(e){const t=e.getComponent();return"VERSION"===(null==t?void 0:t.type)}(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null})).filter((e=>e)).join(" ")}}const Wt="@firebase/app",Ut="0.7.21",jt=new $t("@firebase/app"),Ht="[DEFAULT]",zt={[Wt]:"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},Bt=new Map,Vt=new Map;function Yt(e,t){try{e.container.addComponent(t)}catch(n){jt.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function Gt(e){const t=e.name;if(Vt.has(t))return jt.debug(`There were multiple attempts to register component ${t}.`),!1;Vt.set(t,e);for(const t of Bt.values())Yt(t,e);return!0}
/**
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
     */
const Kt=new ct("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","storage-open":"Error thrown when opening storage. Original error: {$originalErrorMessage}.","storage-get":"Error thrown when reading from storage. Original error: {$originalErrorMessage}.","storage-set":"Error thrown when writing to storage. Original error: {$originalErrorMessage}.","storage-delete":"Error thrown when deleting from storage. Original error: {$originalErrorMessage}."});
/**
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
     */
class Qt{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new Nt("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Kt.create("app-deleted",{appName:this._name})}}
/**
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
     */function Jt(e,t,n){var i;let r=null!==(i=zt[e])&&void 0!==i?i:e;n&&(r+=`-${n}`);const s=r.match(/\s|\//),o=t.match(/\s|\//);if(s||o){const e=[`Unable to register library "${r}" with version "${t}":`];return s&&e.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&o&&e.push("and"),o&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void jt.warn(e.join(" "))}Gt(new Nt(`${r}-version`,(()=>({library:r,version:t})),"VERSION"))}
/**
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
     */const Xt="firebase-heartbeat-store";let Zt=null;function en(){var e,t,n;return Zt||(Zt=(e="firebase-heartbeat-database",t=1,n=(e,t)=>{0===t&&e.createObjectStore(Xt)},new Promise(((i,r)=>{try{const s=indexedDB.open(e,t);s.onsuccess=e=>{i(new xt(e.target.result))},s.onerror=e=>{var t;r(`Error opening indexedDB: ${null===(t=e.target.error)||void 0===t?void 0:t.message}`)},s.onupgradeneeded=e=>{n(new xt(s.result),e.oldVersion,e.newVersion,new Tt(s.transaction))}}catch(e){r(`Error opening indexedDB: ${e.message}`)}}))).catch((e=>{throw Kt.create("storage-open",{originalErrorMessage:e.message})}))),Zt}async function tn(e,t){try{const n=(await en()).transaction(Xt,"readwrite"),i=n.objectStore(Xt);return await i.put(t,nn(e)),n.complete}catch(e){throw Kt.create("storage-set",{originalErrorMessage:e.message})}}function nn(e){return`${e.name}!${e.options.appId}`}
/**
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
     */class rn{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new on(t),this._heartbeatsCachePromise=this._storage.read().then((e=>(this._heartbeatsCache=e,e)))}async triggerHeartbeat(){const e=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),t=sn();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==t&&!this._heartbeatsCache.heartbeats.some((e=>e.date===t)))return this._heartbeatsCache.heartbeats.push({date:t,agent:e}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((e=>{const t=new Date(e.date).valueOf();return Date.now()-t<=2592e6})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const e=sn(),{heartbeatsToSend:t,unsentEntries:n}=function(e,t=1024){const n=[];let i=e.slice();for(const r of e){const e=n.find((e=>e.agent===r.agent));if(e){if(e.dates.push(r.date),an(n)>t){e.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),an(n)>t){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}(this._heartbeatsCache.heartbeats),i=tt(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function sn(){return(new Date).toISOString().substring(0,10)}class on{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return"object"==typeof indexedDB&&new Promise(((e,t)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(i);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(i),e(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var e;t((null===(e=r.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}})).then((()=>!0)).catch((()=>!1))}async read(){if(await this._canUseIndexedDBPromise){const e=await async function(e){try{return(await en()).transaction(Xt).objectStore(Xt).get(nn(e))}catch(e){throw Kt.create("storage-get",{originalErrorMessage:e.message})}}(this.app);return e||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return tn(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return tn(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}}}function an(e){return tt(JSON.stringify({version:2,heartbeats:e})).length}
/**
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
     */var ln;ln="",Gt(new Nt("platform-logger",(e=>new qt(e)),"PRIVATE")),Gt(new Nt("heartbeat",(e=>new rn(e)),"PRIVATE")),Jt(Wt,Ut,ln),Jt(Wt,Ut,"esm2017"),Jt("fire-js","");
/**
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
     */
Jt("firebase","9.6.11","app");const cn="@firebase/database",hn="0.12.8";
/**
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
     */
let un="";
/**
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
     */
class dn{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){null==t?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),dt(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return null==t?null:ut(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}
/**
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
     */class pn{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){null==t?delete this.cache_[e]:this.cache_[e]=t}get(e){return ft(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}
/**
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
     */const fn=function(e){try{if("undefined"!=typeof window&&void 0!==window[e]){const t=window[e];return t.setItem("firebase:sentinel","cache"),t.removeItem("firebase:sentinel"),new dn(t)}}catch(e){}return new pn},_n=fn("localStorage"),mn=fn("sessionStorage"),gn=new $t("@firebase/database"),yn=function(){let e=1;return function(){return e++}}(),vn=function(e){const t=function(e){const t=[];let n=0;for(let i=0;i<e.length;i++){let r=e.charCodeAt(i);if(r>=55296&&r<=56319){const t=r-55296;i++,Qe(i<e.length,"Surrogate pair missing trail surrogate."),r=65536+(t<<10)+(e.charCodeAt(i)-56320)}r<128?t[n++]=r:r<2048?(t[n++]=r>>6|192,t[n++]=63&r|128):r<65536?(t[n++]=r>>12|224,t[n++]=r>>6&63|128,t[n++]=63&r|128):(t[n++]=r>>18|240,t[n++]=r>>12&63|128,t[n++]=r>>6&63|128,t[n++]=63&r|128)}return t}(e),n=new wt;n.update(t);const i=n.digest();return Ze.encodeByteArray(i)},wn=function(...e){let t="";for(let n=0;n<e.length;n++){const i=e[n];Array.isArray(i)||i&&"object"==typeof i&&"number"==typeof i.length?t+=wn.apply(null,i):t+="object"==typeof i?dt(i):i,t+=" "}return t};let bn=null,Cn=!0;const In=function(...e){var t,n;if(!0===Cn&&(Cn=!1,null===bn&&!0===mn.get("logging_enabled")&&(t=!0,Qe(!n||!0===t||!1===t,"Can't turn on custom loggers persistently."),!0===t?(gn.logLevel=Ot.VERBOSE,bn=gn.log.bind(gn),n&&mn.set("logging_enabled",!0)):"function"==typeof t?bn=t:(bn=null,mn.remove("logging_enabled")))),bn){const t=wn.apply(null,e);bn(t)}},En=function(e){return function(...t){In(e,...t)}},xn=function(...e){const t="FIREBASE INTERNAL ERROR: "+wn(...e);gn.error(t)},Tn=function(...e){const t=`FIREBASE FATAL ERROR: ${wn(...e)}`;throw gn.error(t),new Error(t)},Sn=function(...e){const t="FIREBASE WARNING: "+wn(...e);gn.warn(t)},kn=function(e){return"number"==typeof e&&(e!=e||e===Number.POSITIVE_INFINITY||e===Number.NEGATIVE_INFINITY)},Nn="[MIN_NAME]",Pn="[MAX_NAME]",Rn=function(e,t){if(e===t)return 0;if(e===Nn||t===Pn)return-1;if(t===Nn||e===Pn)return 1;{const n=qn(e),i=qn(t);return null!==n?null!==i?n-i==0?e.length-t.length:n-i:-1:null!==i?1:e<t?-1:1}},Dn=function(e,t){return e===t?0:e<t?-1:1},On=function(e,t){if(t&&e in t)return t[e];throw new Error("Missing required key ("+e+") in object: "+dt(t))},An=function(e){if("object"!=typeof e||null===e)return dt(e);const t=[];for(const n in e)t.push(n);t.sort();let n="{";for(let i=0;i<t.length;i++)0!==i&&(n+=","),n+=dt(t[i]),n+=":",n+=An(e[t[i]]);return n+="}",n},Mn=function(e,t){const n=e.length;if(n<=t)return[e];const i=[];for(let r=0;r<n;r+=t)r+t>n?i.push(e.substring(r,n)):i.push(e.substring(r,r+t));return i};function Ln(e,t){for(const n in e)e.hasOwnProperty(n)&&t(n,e[n])}const Fn=function(e){Qe(!kn(e),"Invalid JSON number");const t=1023;let n,i,r,s,o;0===e?(i=0,r=0,n=1/e==-1/0?1:0):(n=e<0,(e=Math.abs(e))>=Math.pow(2,-1022)?(s=Math.min(Math.floor(Math.log(e)/Math.LN2),t),i=s+t,r=Math.round(e*Math.pow(2,52-s)-Math.pow(2,52))):(i=0,r=Math.round(e/Math.pow(2,-1074))));const a=[];for(o=52;o;o-=1)a.push(r%2?1:0),r=Math.floor(r/2);for(o=11;o;o-=1)a.push(i%2?1:0),i=Math.floor(i/2);a.push(n?1:0),a.reverse();const l=a.join("");let c="";for(o=0;o<64;o+=8){let e=parseInt(l.substr(o,8),2).toString(16);1===e.length&&(e="0"+e),c+=e}return c.toLowerCase()},$n=new RegExp("^-?(0*)\\d{1,10}$"),qn=function(e){if($n.test(e)){const t=Number(e);if(t>=-2147483648&&t<=2147483647)return t}return null},Wn=function(e){try{e()}catch(e){setTimeout((()=>{const t=e.stack||"";throw Sn("Exception was thrown by user callback.",t),e}),Math.floor(0))}},Un=function(e,t){const n=setTimeout(e,t);return"object"==typeof n&&n.unref&&n.unref(),n};
/**
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
     */
class jn{constructor(e,t){this.appName_=e,this.appCheckProvider=t,this.appCheck=null==t?void 0:t.getImmediate({optional:!0}),this.appCheck||null==t||t.get().then((e=>this.appCheck=e))}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise(((t,n)=>{setTimeout((()=>{this.appCheck?this.getToken(e).then(t,n):t(null)}),0)}))}addTokenChangeListener(e){var t;null===(t=this.appCheckProvider)||void 0===t||t.get().then((t=>t.addTokenListener(e)))}notifyForInvalidToken(){Sn(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}
/**
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
     */class Hn{constructor(e,t,n){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=n,this.auth_=null,this.auth_=n.getImmediate({optional:!0}),this.auth_||n.onInit((e=>this.auth_=e))}getToken(e){return this.auth_?this.auth_.getToken(e).catch((e=>e&&"auth/token-not-initialized"===e.code?(In("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(e))):new Promise(((t,n)=>{setTimeout((()=>{this.auth_?this.getToken(e).then(t,n):t(null)}),0)}))}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then((t=>t.addAuthTokenListener(e)))}removeTokenChangeListener(e){this.authProvider_.get().then((t=>t.removeAuthTokenListener(e)))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Sn(e)}}class zn{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}zn.OWNER="owner";
/**
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
     */
const Bn=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Vn="websocket",Yn="long_polling";
/**
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
     */
class Gn{constructor(e,t,n,i,r=!1,s="",o=!1){this.secure=t,this.namespace=n,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=s,this.includeNamespaceInQueryParams=o,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=_n.get("host:"+e)||this._host}isCacheableHost(){return"s-"===this.internalHost.substr(0,2)}isCustomHost(){return"firebaseio.com"!==this._domain&&"firebaseio-demo.com"!==this._domain}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&_n.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function Kn(e,t,n){let i;if(Qe("string"==typeof t,"typeof type must == string"),Qe("object"==typeof n,"typeof params must == object"),t===Vn)i=(e.secure?"wss://":"ws://")+e.internalHost+"/.ws?";else{if(t!==Yn)throw new Error("Unknown connection type: "+t);i=(e.secure?"https://":"http://")+e.internalHost+"/.lp?"}(function(e){return e.host!==e.internalHost||e.isCustomHost()||e.includeNamespaceInQueryParams})(e)&&(n.ns=e.namespace);const r=[];return Ln(n,((e,t)=>{r.push(e+"="+t)})),i+r.join("&")}
/**
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
     */class Qn{constructor(){this.counters_={}}incrementCounter(e,t=1){ft(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return it(this.counters_)}}
/**
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
     */const Jn={},Xn={};function Zn(e){const t=e.toString();return Jn[t]||(Jn[t]=new Qn),Jn[t]}
/**
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
     */
class ei{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const e=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let t=0;t<e.length;++t)e[t]&&Wn((()=>{this.onMessage_(e[t])}));if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}
/**
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
     */const ti="start";class ni{constructor(e,t,n,i,r,s,o){this.connId=e,this.repoInfo=t,this.applicationId=n,this.appCheckToken=i,this.authToken=r,this.transportSessionId=s,this.lastSessionId=o,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=En(e),this.stats_=Zn(t),this.urlFn=e=>(this.appCheckToken&&(e.ac=this.appCheckToken),Kn(t,Yn,e))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new ei(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout((()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null}),Math.floor(3e4)),function(e){if("complete"===document.readyState)e();else{let t=!1;const n=function(){document.body?t||(t=!0,e()):setTimeout(n,Math.floor(10))};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",(()=>{"complete"===document.readyState&&n()})),window.attachEvent("onload",n))}}((()=>{if(this.isClosed_)return;this.scriptTagHolder=new ii(((...e)=>{const[t,n,i,r,s]=e;if(this.incrementIncomingBytes_(e),this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,t===ti)this.id=n,this.password=i;else{if("close"!==t)throw new Error("Unrecognized command received: "+t);n?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(n,(()=>{this.onClosed_()}))):this.onClosed_()}}),((...e)=>{const[t,n]=e;this.incrementIncomingBytes_(e),this.myPacketOrderer.handleResponse(t,n)}),(()=>{this.onClosed_()}),this.urlFn);const e={start:"t"};e.ser=Math.floor(1e8*Math.random()),this.scriptTagHolder.uniqueCallbackIdentifier&&(e.cb=this.scriptTagHolder.uniqueCallbackIdentifier),e.v="5",this.transportSessionId&&(e.s=this.transportSessionId),this.lastSessionId&&(e.ls=this.lastSessionId),this.applicationId&&(e.p=this.applicationId),this.appCheckToken&&(e.ac=this.appCheckToken),"undefined"!=typeof location&&location.hostname&&Bn.test(location.hostname)&&(e.r="f");const t=this.urlFn(e);this.log_("Connecting via long-poll to "+t),this.scriptTagHolder.addTag(t,(()=>{}))}))}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){ni.forceAllow_=!0}static forceDisallow(){ni.forceDisallow_=!0}static isAvailable(){return!!ni.forceAllow_||!(ni.forceDisallow_||"undefined"==typeof document||null==document.createElement||"object"==typeof window&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href)||"object"==typeof Windows&&"object"==typeof Windows.UI)}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=dt(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const n=et(t),i=Mn(n,1840);for(let e=0;e<i.length;e++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[e]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const n={dframe:"t"};n.id=e,n.pw=t,this.myDisconnFrame.src=this.urlFn(n),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=dt(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class ii{constructor(e,t,n,i){this.onDisconnect=n,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(1e8*Math.random()),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=yn(),window["pLPCommand"+this.uniqueCallbackIdentifier]=e,window["pRTLPCB"+this.uniqueCallbackIdentifier]=t,this.myIFrame=ii.createIFrame_();let n="";if(this.myIFrame.src&&"javascript:"===this.myIFrame.src.substr(0,"javascript:".length)){n='<script>document.domain="'+document.domain+'";<\/script>'}const i="<html><body>"+n+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(i),this.myIFrame.doc.close()}catch(e){In("frame writing exception"),e.stack&&In(e.stack),In(e)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",!document.body)throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";document.body.appendChild(e);try{e.contentWindow.document||In("No IE domain setting required")}catch(t){const n=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+n+"';document.close();})())"}return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.innerHTML="",setTimeout((()=>{null!==this.myIFrame&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)}),Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e.id=this.myID,e.pw=this.myPW,e.ser=this.currentSerial;let t=this.urlFn(e),n="",i=0;for(;this.pendingSegs.length>0;){if(!(this.pendingSegs[0].d.length+30+n.length<=1870))break;{const e=this.pendingSegs.shift();n=n+"&seg"+i+"="+e.seg+"&ts"+i+"="+e.ts+"&d"+i+"="+e.d,i++}}return t+=n,this.addLongPollTag_(t,this.currentSerial),!0}return!1}enqueueSegment(e,t,n){this.pendingSegs.push({seg:e,ts:t,d:n}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const n=()=>{this.outstandingRequests.delete(t),this.newRequest_()},i=setTimeout(n,Math.floor(25e3));this.addTag(e,(()=>{clearTimeout(i),n()}))}addTag(e,t){setTimeout((()=>{try{if(!this.sendNewPolls)return;const n=this.myIFrame.doc.createElement("script");n.type="text/javascript",n.async=!0,n.src=e,n.onload=n.onreadystatechange=function(){const e=n.readyState;e&&"loaded"!==e&&"complete"!==e||(n.onload=n.onreadystatechange=null,n.parentNode&&n.parentNode.removeChild(n),t())},n.onerror=()=>{In("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(n)}catch(e){}}),Math.floor(1))}}
/**
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
     */let ri=null;"undefined"!=typeof MozWebSocket?ri=MozWebSocket:"undefined"!=typeof WebSocket&&(ri=WebSocket);class si{constructor(e,t,n,i,r,s,o){this.connId=e,this.applicationId=n,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=En(this.connId),this.stats_=Zn(t),this.connURL=si.connectionURL_(t,s,o,i),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,n,i){const r={v:"5"};return"undefined"!=typeof location&&location.hostname&&Bn.test(location.hostname)&&(r.r="f"),t&&(r.s=t),n&&(r.ls=n),i&&(r.ac=i),Kn(e,Vn,r)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,_n.set("previous_websocket_failure",!0);try{if(at());else{const e={headers:{"X-Firebase-GMPID":this.applicationId||"","X-Firebase-AppCheck":this.appCheckToken||""}};this.mySock=new ri(this.connURL,[],e)}}catch(e){this.log_("Error instantiating WebSocket.");const t=e.message||e.data;return t&&this.log_(t),void this.onClosed_()}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=e=>{this.handleIncomingFrame(e)},this.mySock.onerror=e=>{this.log_("WebSocket error.  Closing connection.");const t=e.message||e.data;t&&this.log_(t),this.onClosed_()}}start(){}static forceDisallow(){si.forceDisallow_=!0}static isAvailable(){let e=!1;if("undefined"!=typeof navigator&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,n=navigator.userAgent.match(t);n&&n.length>1&&parseFloat(n[1])<4.4&&(e=!0)}return!e&&null!==ri&&!si.forceDisallow_}static previouslyFailed(){return _n.isInMemoryStorage||!0===_n.get("previous_websocket_failure")}markConnectionHealthy(){_n.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const e=this.frames.join("");this.frames=null;const t=ut(e);this.onMessage(t)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(Qe(null===this.frames,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(null===this.mySock)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),null!==this.frames)this.appendFrame_(t);else{const e=this.extractFrameCount_(t);null!==e&&this.appendFrame_(e)}}send(e){this.resetKeepAlive();const t=dt(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const n=Mn(t,16384);n.length>1&&this.sendString_(String(n.length));for(let e=0;e<n.length;e++)this.sendString_(n[e])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval((()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()}),Math.floor(45e3))}sendString_(e){try{this.mySock.send(e)}catch(e){this.log_("Exception thrown from WebSocket.send():",e.message||e.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}si.responsesRequiredToBeHealthy=2,si.healthyTimeout=3e4;
/**
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
     */
class oi{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[ni,si]}initTransports_(e){const t=si&&si.isAvailable();let n=t&&!si.previouslyFailed();if(e.webSocketOnly&&(t||Sn("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),n=!0),n)this.transports_=[si];else{const e=this.transports_=[];for(const t of oi.ALL_TRANSPORTS)t&&t.isAvailable()&&e.push(t)}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}
/**
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
     */class ai{constructor(e,t,n,i,r,s,o,a,l,c){this.id=e,this.repoInfo_=t,this.applicationId_=n,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=s,this.onReady_=o,this.onDisconnect_=a,this.onKill_=l,this.lastSessionId=c,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=En("c:"+this.id+":"),this.transportManager_=new oi(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),n=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout((()=>{this.conn_&&this.conn_.open(t,n)}),Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=Un((()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>102400?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>10240?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))}),Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{2!==this.state_&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if("t"in e){const t=e.t;"a"===t?this.upgradeIfSecondaryHealthy_():"r"===t?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),this.tx_!==this.secondaryConn_&&this.rx_!==this.secondaryConn_||this.close()):"o"===t&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=On("t",e),n=On("d",e);if("c"===t)this.onSecondaryControl_(n);else{if("d"!==t)throw new Error("Unknown protocol layer: "+t);this.pendingDataMessages.push(n)}}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:"p",d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:"a",d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:"n",d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=On("t",e),n=On("d",e);"c"===t?this.onControl_(n):"d"===t&&this.onDataMessage_(n)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=On("t",e);if("d"in e){const n=e.d;if("h"===t)this.onHandshake_(n);else if("n"===t){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let e=0;e<this.pendingDataMessages.length;++e)this.onDataMessage_(this.pendingDataMessages[e]);this.pendingDataMessages=[],this.tryCleanupConnection()}else"s"===t?this.onConnectionShutdown_(n):"r"===t?this.onReset_(n):"e"===t?xn("Server Error: "+n):"o"===t?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):xn("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,n=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,0===this.state_&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),"5"!==n&&Sn("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),n=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,n),Un((()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())}),Math.floor(6e4))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,1===this.state_?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),0===this.primaryResponsesRequired_?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Un((()=>{this.sendPingOnPrimaryIfNecessary_()}),Math.floor(5e3))}sendPingOnPrimaryIfNecessary_(){this.isHealthy_||1!==this.state_||(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:"p",d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,this.tx_!==e&&this.rx_!==e||this.close()}onConnectionLost_(e){this.conn_=null,e||0!==this.state_?1===this.state_&&this.log_("Realtime connection lost."):(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(_n.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(1!==this.state_)throw"Connection is not connected";this.tx_.send(e)}close(){2!==this.state_&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}
/**
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
     */class li{put(e,t,n,i){}merge(e,t,n,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,n){}onDisconnectMerge(e,t,n){}onDisconnectCancel(e,t){}reportStats(e){}}
/**
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
     */class ci{constructor(e){this.allowedEvents_=e,this.listeners_={},Qe(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const n=[...this.listeners_[e]];for(let e=0;e<n.length;e++)n[e].callback.apply(n[e].context,t)}}on(e,t,n){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:n});const i=this.getInitialEvent(e);i&&t.apply(n,i)}off(e,t,n){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let e=0;e<i.length;e++)if(i[e].callback===t&&(!n||n===i[e].context))return void i.splice(e,1)}validateEventType_(e){Qe(this.allowedEvents_.find((t=>t===e)),"Unknown event: "+e)}}
/**
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
     */class hi extends ci{constructor(){super(["online"]),this.online_=!0,"undefined"==typeof window||void 0===window.addEventListener||ot()||(window.addEventListener("online",(()=>{this.online_||(this.online_=!0,this.trigger("online",!0))}),!1),window.addEventListener("offline",(()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))}),!1))}static getInstance(){return new hi}getInitialEvent(e){return Qe("online"===e,"Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}
/**
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
     */class ui{constructor(e,t){if(void 0===t){this.pieces_=e.split("/");let t=0;for(let e=0;e<this.pieces_.length;e++)this.pieces_[e].length>0&&(this.pieces_[t]=this.pieces_[e],t++);this.pieces_.length=t,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)""!==this.pieces_[t]&&(e+="/"+this.pieces_[t]);return e||"/"}}function di(){return new ui("")}function pi(e){return e.pieceNum_>=e.pieces_.length?null:e.pieces_[e.pieceNum_]}function fi(e){return e.pieces_.length-e.pieceNum_}function _i(e){let t=e.pieceNum_;return t<e.pieces_.length&&t++,new ui(e.pieces_,t)}function mi(e){return e.pieceNum_<e.pieces_.length?e.pieces_[e.pieces_.length-1]:null}function gi(e,t=0){return e.pieces_.slice(e.pieceNum_+t)}function yi(e){if(e.pieceNum_>=e.pieces_.length)return null;const t=[];for(let n=e.pieceNum_;n<e.pieces_.length-1;n++)t.push(e.pieces_[n]);return new ui(t,0)}function vi(e,t){const n=[];for(let t=e.pieceNum_;t<e.pieces_.length;t++)n.push(e.pieces_[t]);if(t instanceof ui)for(let e=t.pieceNum_;e<t.pieces_.length;e++)n.push(t.pieces_[e]);else{const e=t.split("/");for(let t=0;t<e.length;t++)e[t].length>0&&n.push(e[t])}return new ui(n,0)}function wi(e){return e.pieceNum_>=e.pieces_.length}function bi(e,t){const n=pi(e),i=pi(t);if(null===n)return t;if(n===i)return bi(_i(e),_i(t));throw new Error("INTERNAL ERROR: innerPath ("+t+") is not within outerPath ("+e+")")}function Ci(e,t){if(fi(e)!==fi(t))return!1;for(let n=e.pieceNum_,i=t.pieceNum_;n<=e.pieces_.length;n++,i++)if(e.pieces_[n]!==t.pieces_[i])return!1;return!0}function Ii(e,t){let n=e.pieceNum_,i=t.pieceNum_;if(fi(e)>fi(t))return!1;for(;n<e.pieces_.length;){if(e.pieces_[n]!==t.pieces_[i])return!1;++n,++i}return!0}class Ei{constructor(e,t){this.errorPrefix_=t,this.parts_=gi(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let e=0;e<this.parts_.length;e++)this.byteLength_+=Ct(this.parts_[e]);xi(this)}}function xi(e){if(e.byteLength_>768)throw new Error(e.errorPrefix_+"has a key path longer than 768 bytes ("+e.byteLength_+").");if(e.parts_.length>32)throw new Error(e.errorPrefix_+"path specified exceeds the maximum depth that can be written (32) or object contains a cycle "+Ti(e))}function Ti(e){return 0===e.parts_.length?"":"in property '"+e.parts_.join(".")+"'"}
/**
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
     */class Si extends ci{constructor(){let e,t;super(["visible"]),"undefined"!=typeof document&&void 0!==document.addEventListener&&(void 0!==document.hidden?(t="visibilitychange",e="hidden"):void 0!==document.mozHidden?(t="mozvisibilitychange",e="mozHidden"):void 0!==document.msHidden?(t="msvisibilitychange",e="msHidden"):void 0!==document.webkitHidden&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,(()=>{const t=!document[e];t!==this.visible_&&(this.visible_=t,this.trigger("visible",t))}),!1)}static getInstance(){return new Si}getInitialEvent(e){return Qe("visible"===e,"Unknown event type: "+e),[this.visible_]}}
/**
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
     */const ki=1e3;class Ni extends li{constructor(e,t,n,i,r,s,o,a){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=n,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=s,this.appCheckTokenProvider_=o,this.authOverride_=a,this.id=Ni.nextPersistentConnectionId_++,this.log_=En("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=ki,this.maxReconnectDelay_=3e5,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,a&&!at())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Si.getInstance().on("visible",this.onVisible_,this),-1===e.host.indexOf("fblocal")&&hi.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,n){const i=++this.requestNumber_,r={r:i,a:e,b:t};this.log_(dt(r)),Qe(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),n&&(this.requestCBHash_[i]=n)}get(e){this.initConnection_();const t=new st,n={p:e._path.toString(),q:e._queryObject},i={action:"g",request:n,onComplete:e=>{const i=e.d;"ok"===e.s?(this.onDataUpdate_(n.p,i,!1,null),t.resolve(i)):t.reject(i)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_||setTimeout((()=>{const e=this.outstandingGets_[r];void 0!==e&&i===e&&(delete this.outstandingGets_[r],this.outstandingGetCount_--,0===this.outstandingGetCount_&&(this.outstandingGets_=[]),this.log_("get "+r+" timed out on connection"),t.reject(new Error("Client is offline.")))}),3e3),this.connected_&&this.sendGet_(r),t.promise}listen(e,t,n,i){this.initConnection_();const r=e._queryIdentifier,s=e._path.toString();this.log_("Listen called for "+s+" "+r),this.listens.has(s)||this.listens.set(s,new Map),Qe(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),Qe(!this.listens.get(s).has(r),"listen() called twice for same path/queryId.");const o={onComplete:i,hashFn:t,query:e,tag:n};this.listens.get(s).set(r,o),this.connected_&&this.sendListen_(o)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,(n=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,0===this.outstandingGetCount_&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(n)}))}sendListen_(e){const t=e.query,n=t._path.toString(),i=t._queryIdentifier;this.log_("Listen on "+n+" for "+i);const r={p:n};e.tag&&(r.q=t._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest("q",r,(r=>{const s=r.d,o=r.s;Ni.warnOnListenWarnings_(s,t);(this.listens.get(n)&&this.listens.get(n).get(i))===e&&(this.log_("listen response",r),"ok"!==o&&this.removeListen_(n,i),e.onComplete&&e.onComplete(o,s))}))}static warnOnListenWarnings_(e,t){if(e&&"object"==typeof e&&ft(e,"w")){const n=_t(e,"w");if(Array.isArray(n)&&~n.indexOf("no_index")){const e='".indexOn": "'+t._queryParams.getIndex().toString()+'"',n=t._path.toString();Sn(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${e} at ${n} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},(()=>{})),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&40===e.length||function(e){const t=pt(e).claims;return"object"==typeof t&&!0===t.admin}(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=3e4)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},(()=>{}))}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=function(e){const t=pt(e).claims;return!!t&&"object"==typeof t&&t.hasOwnProperty("iat")}(e)?"auth":"gauth",n={cred:e};null===this.authOverride_?n.noauth=!0:"object"==typeof this.authOverride_&&(n.authvar=this.authOverride_),this.sendRequest(t,n,(t=>{const n=t.s,i=t.d||"error";this.authToken_===e&&("ok"===n?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(n,i))}))}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},(e=>{const t=e.s,n=e.d||"error";"ok"===t?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,n)}))}unlisten(e,t){const n=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+n+" "+i),Qe(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query");this.removeListen_(n,i)&&this.connected_&&this.sendUnlisten_(n,i,e._queryObject,t)}sendUnlisten_(e,t,n,i){this.log_("Unlisten on "+e+" for "+t);const r={p:e};i&&(r.q=n,r.t=i),this.sendRequest("n",r)}onDisconnectPut(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:n})}onDisconnectMerge(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:n})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,n,i){const r={p:t,d:n};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,(e=>{i&&setTimeout((()=>{i(e.s,e.d)}),Math.floor(0))}))}put(e,t,n,i){this.putInternal("p",e,t,n,i)}merge(e,t,n,i){this.putInternal("m",e,t,n,i)}putInternal(e,t,n,i,r){this.initConnection_();const s={p:t,d:n};void 0!==r&&(s.h=r),this.outstandingPuts_.push({action:e,request:s,onComplete:i}),this.outstandingPutCount_++;const o=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(o):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,n=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,n,(n=>{this.log_(t+" response",n),delete this.outstandingPuts_[e],this.outstandingPutCount_--,0===this.outstandingPutCount_&&(this.outstandingPuts_=[]),i&&i(n.s,n.d)}))}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,(e=>{if("ok"!==e.s){const t=e.d;this.log_("reportStats","Error sending stats: "+t)}}))}}onDataMessage_(e){if("r"in e){this.log_("from server: "+dt(e));const t=e.r,n=this.requestCBHash_[t];n&&(delete this.requestCBHash_[t],n(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),"d"===e?this.onDataUpdate_(t.p,t.d,!1,t.t):"m"===e?this.onDataUpdate_(t.p,t.d,!0,t.t):"c"===e?this.onListenRevoked_(t.p,t.q):"ac"===e?this.onAuthRevoked_(t.s,t.d):"apc"===e?this.onAppCheckRevoked_(t.s,t.d):"sd"===e?this.onSecurityDebugPacket_(t):xn("Unrecognized action received from server: "+dt(e)+"\nAre you using the latest client?")}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=(new Date).getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){Qe(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout((()=>{this.establishConnectionTimer_=null,this.establishConnection_()}),Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=ki,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=ki,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){if(this.visible_){if(this.lastConnectionEstablishedTime_){(new Date).getTime()-this.lastConnectionEstablishedTime_>3e4&&(this.reconnectDelay_=ki),this.lastConnectionEstablishedTime_=null}}else this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=(new Date).getTime();const e=(new Date).getTime()-this.lastConnectionAttemptTime_;let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,1.3*this.reconnectDelay_)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=(new Date).getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),n=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+Ni.nextConnectionId_++,r=this.lastSessionId;let s=!1,o=null;const a=function(){o?o.close():(s=!0,n())},l=function(e){Qe(o,"sendRequest call when we're not connected not allowed."),o.sendRequest(e)};this.realtime_={close:a,sendRequest:l};const c=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[a,l]=await Promise.all([this.authTokenProvider_.getToken(c),this.appCheckTokenProvider_.getToken(c)]);s?In("getToken() completed but was canceled"):(In("getToken() completed. Creating connection."),this.authToken_=a&&a.accessToken,this.appCheckToken_=l&&l.token,o=new ai(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,n,(e=>{Sn(e+" ("+this.repoInfo_.toString()+")"),this.interrupt("server_kill")}),r))}catch(e){this.log_("Failed to get token: "+e),s||(this.repoInfo_.nodeAdmin&&Sn(e),a())}}}interrupt(e){In("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){In("Resuming connection for reason: "+e),delete this.interruptReasons_[e],mt(this.interruptReasons_)&&(this.reconnectDelay_=ki,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-(new Date).getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}0===this.outstandingPutCount_&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let n;n=t?t.map((e=>An(e))).join("$"):"default";const i=this.removeListen_(e,n);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,t){const n=new ui(e).toString();let i;if(this.listens.has(n)){const e=this.listens.get(n);i=e.get(t),e.delete(t),0===e.size&&this.listens.delete(n)}else i=void 0;return i}onAuthRevoked_(e,t){In("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),"invalid_token"!==e&&"permission_denied"!==e||(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=3&&(this.reconnectDelay_=3e4,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){In("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,"invalid_token"!==e&&"permission_denied"!==e||(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=3&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace("\n","\nFIREBASE: "))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};e["sdk.js."+un.replace(/\./g,"-")]=1,ot()?e["framework.cordova"]=1:"object"==typeof navigator&&"ReactNative"===navigator.product&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=hi.getInstance().currentlyOnline();return mt(this.interruptReasons_)&&e}}Ni.nextPersistentConnectionId_=0,Ni.nextConnectionId_=0;
/**
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
     */
class Pi{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new Pi(e,t)}}
/**
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
     */class Ri{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const n=new Pi(Nn,e),i=new Pi(Nn,t);return 0!==this.compare(n,i)}minPost(){return Pi.MIN}}
/**
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
     */let Di;class Oi extends Ri{static get __EMPTY_NODE(){return Di}static set __EMPTY_NODE(e){Di=e}compare(e,t){return Rn(e.name,t.name)}isDefinedOn(e){throw Je("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return Pi.MIN}maxPost(){return new Pi(Pn,Di)}makePost(e,t){return Qe("string"==typeof e,"KeyIndex indexValue must always be a string."),new Pi(e,Di)}toString(){return".key"}}const Ai=new Oi;
/**
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
     */class Mi{constructor(e,t,n,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let s=1;for(;!e.isEmpty();)if(e=e,s=t?n(e.key,t):1,i&&(s*=-1),s<0)e=this.isReverse_?e.left:e.right;else{if(0===s){this.nodeStack_.push(e);break}this.nodeStack_.push(e),e=this.isReverse_?e.right:e.left}}getNext(){if(0===this.nodeStack_.length)return null;let e,t=this.nodeStack_.pop();if(e=this.resultGenerator_?this.resultGenerator_(t.key,t.value):{key:t.key,value:t.value},this.isReverse_)for(t=t.left;!t.isEmpty();)this.nodeStack_.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack_.push(t),t=t.left;return e}hasNext(){return this.nodeStack_.length>0}peek(){if(0===this.nodeStack_.length)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Li{constructor(e,t,n,i,r){this.key=e,this.value=t,this.color=null!=n?n:Li.RED,this.left=null!=i?i:Fi.EMPTY_NODE,this.right=null!=r?r:Fi.EMPTY_NODE}copy(e,t,n,i,r){return new Li(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=i?i:this.left,null!=r?r:this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let i=this;const r=n(e,i.key);return i=r<0?i.copy(null,null,null,i.left.insert(e,t,n),null):0===r?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,n)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return Fi.EMPTY_NODE;let e=this;return e.left.isRed_()||e.left.left.isRed_()||(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let n,i;if(n=this,t(e,n.key)<0)n.left.isEmpty()||n.left.isRed_()||n.left.left.isRed_()||(n=n.moveRedLeft_()),n=n.copy(null,null,null,n.left.remove(e,t),null);else{if(n.left.isRed_()&&(n=n.rotateRight_()),n.right.isEmpty()||n.right.isRed_()||n.right.left.isRed_()||(n=n.moveRedRight_()),0===t(e,n.key)){if(n.right.isEmpty())return Fi.EMPTY_NODE;i=n.right.min_(),n=n.copy(i.key,i.value,null,null,n.right.removeMin_())}n=n.copy(null,null,null,null,n.right.remove(e,t))}return n.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Li.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Li.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Li.RED=!0,Li.BLACK=!1;class Fi{constructor(e,t=Fi.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new Fi(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,Li.BLACK,null,null))}remove(e){return new Fi(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Li.BLACK,null,null))}get(e){let t,n=this.root_;for(;!n.isEmpty();){if(t=this.comparator_(e,n.key),0===t)return n.value;t<0?n=n.left:t>0&&(n=n.right)}return null}getPredecessorKey(e){let t,n=this.root_,i=null;for(;!n.isEmpty();){if(t=this.comparator_(e,n.key),0===t){if(n.left.isEmpty())return i?i.key:null;for(n=n.left;!n.right.isEmpty();)n=n.right;return n.key}t<0?n=n.left:t>0&&(i=n,n=n.right)}throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Mi(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new Mi(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new Mi(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new Mi(this.root_,null,this.comparator_,!0,e)}}
/**
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
     */
function $i(e,t){return Rn(e.name,t.name)}function qi(e,t){return Rn(e,t)}
/**
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
     */let Wi;Fi.EMPTY_NODE=new class{copy(e,t,n,i,r){return this}insert(e,t,n){return new Li(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}};const Ui=function(e){return"number"==typeof e?"number:"+Fn(e):"string:"+e},ji=function(e){if(e.isLeafNode()){const t=e.val();Qe("string"==typeof t||"number"==typeof t||"object"==typeof t&&ft(t,".sv"),"Priority must be a string or number.")}else Qe(e===Wi||e.isEmpty(),"priority of unexpected type.");Qe(e===Wi||e.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};
/**
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
     */
let Hi,zi,Bi;class Vi{constructor(e,t=Vi.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,Qe(void 0!==this.value_&&null!==this.value_,"LeafNode shouldn't be created with null/undefined value."),ji(this.priorityNode_)}static set __childrenNodeConstructor(e){Hi=e}static get __childrenNodeConstructor(){return Hi}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Vi(this.value_,e)}getImmediateChild(e){return".priority"===e?this.priorityNode_:Vi.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return wi(e)?this:".priority"===pi(e)?this.priorityNode_:Vi.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return".priority"===e?this.updatePriority(t):t.isEmpty()&&".priority"!==e?this:Vi.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const n=pi(e);return null===n?t:t.isEmpty()&&".priority"!==n?this:(Qe(".priority"!==n||1===fi(e),".priority must be the last token in a path"),this.updateImmediateChild(n,Vi.__childrenNodeConstructor.EMPTY_NODE.updateChild(_i(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(null===this.lazyHash_){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Ui(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",e+="number"===t?Fn(this.value_):this.value_,this.lazyHash_=vn(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Vi.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Vi.__childrenNodeConstructor?-1:(Qe(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,n=typeof this.value_,i=Vi.VALUE_TYPE_ORDER.indexOf(t),r=Vi.VALUE_TYPE_ORDER.indexOf(n);return Qe(i>=0,"Unknown leaf type: "+t),Qe(r>=0,"Unknown leaf type: "+n),i===r?"object"===n?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}return!1}}Vi.VALUE_TYPE_ORDER=["object","boolean","number","string"];const Yi=new class extends Ri{compare(e,t){const n=e.node.getPriority(),i=t.node.getPriority(),r=n.compareTo(i);return 0===r?Rn(e.name,t.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return Pi.MIN}maxPost(){return new Pi(Pn,new Vi("[PRIORITY-POST]",Bi))}makePost(e,t){const n=zi(e);return new Pi(t,new Vi("[PRIORITY-POST]",n))}toString(){return".priority"}},Gi=Math.log(2);
/**
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
     */class Ki{constructor(e){var t;this.count=(t=e+1,parseInt(Math.log(t)/Gi,10)),this.current_=this.count-1;const n=(i=this.count,parseInt(Array(i+1).join("1"),2));var i;this.bits_=e+1&n}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Qi=function(e,t,n,i){e.sort(t);const r=function(t,i){const s=i-t;let o,a;if(0===s)return null;if(1===s)return o=e[t],a=n?n(o):o,new Li(a,o.node,Li.BLACK,null,null);{const l=parseInt(s/2,10)+t,c=r(t,l),h=r(l+1,i);return o=e[l],a=n?n(o):o,new Li(a,o.node,Li.BLACK,c,h)}},s=function(t){let i=null,s=null,o=e.length;const a=function(t,i){const s=o-t,a=o;o-=t;const c=r(s+1,a),h=e[s],u=n?n(h):h;l(new Li(u,h.node,i,null,c))},l=function(e){i?(i.left=e,i=e):(s=e,i=e)};for(let e=0;e<t.count;++e){const n=t.nextBitIsOne(),i=Math.pow(2,t.count-(e+1));n?a(i,Li.BLACK):(a(i,Li.BLACK),a(i,Li.RED))}return s}(new Ki(e.length));return new Fi(i||t,s)};
/**
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
     */let Ji;const Xi={};class Zi{constructor(e,t){this.indexes_=e,this.indexSet_=t}static get Default(){return Qe(Xi&&Yi,"ChildrenNode.ts has not been loaded"),Ji=Ji||new Zi({".priority":Xi},{".priority":Yi}),Ji}get(e){const t=_t(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof Fi?t:null}hasIndex(e){return ft(this.indexSet_,e.toString())}addIndex(e,t){Qe(e!==Ai,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const n=[];let i=!1;const r=t.getIterator(Pi.Wrap);let s,o=r.getNext();for(;o;)i=i||e.isDefinedOn(o.node),n.push(o),o=r.getNext();s=i?Qi(n,e.getCompare()):Xi;const a=e.toString(),l=Object.assign({},this.indexSet_);l[a]=e;const c=Object.assign({},this.indexes_);return c[a]=s,new Zi(c,l)}addToIndexes(e,t){const n=gt(this.indexes_,((n,i)=>{const r=_t(this.indexSet_,i);if(Qe(r,"Missing index implementation for "+i),n===Xi){if(r.isDefinedOn(e.node)){const n=[],i=t.getIterator(Pi.Wrap);let s=i.getNext();for(;s;)s.name!==e.name&&n.push(s),s=i.getNext();return n.push(e),Qi(n,r.getCompare())}return Xi}{const i=t.get(e.name);let r=n;return i&&(r=r.remove(new Pi(e.name,i))),r.insert(e,e.node)}}));return new Zi(n,this.indexSet_)}removeFromIndexes(e,t){const n=gt(this.indexes_,(n=>{if(n===Xi)return n;{const i=t.get(e.name);return i?n.remove(new Pi(e.name,i)):n}}));return new Zi(n,this.indexSet_)}}
/**
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
     */let er;class tr{constructor(e,t,n){this.children_=e,this.priorityNode_=t,this.indexMap_=n,this.lazyHash_=null,this.priorityNode_&&ji(this.priorityNode_),this.children_.isEmpty()&&Qe(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return er||(er=new tr(new Fi(qi),null,Zi.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||er}updatePriority(e){return this.children_.isEmpty()?this:new tr(this.children_,e,this.indexMap_)}getImmediateChild(e){if(".priority"===e)return this.getPriority();{const t=this.children_.get(e);return null===t?er:t}}getChild(e){const t=pi(e);return null===t?this:this.getImmediateChild(t).getChild(_i(e))}hasChild(e){return null!==this.children_.get(e)}updateImmediateChild(e,t){if(Qe(t,"We should always be passing snapshot nodes"),".priority"===e)return this.updatePriority(t);{const n=new Pi(e,t);let i,r;t.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(n,this.children_)):(i=this.children_.insert(e,t),r=this.indexMap_.addToIndexes(n,this.children_));const s=i.isEmpty()?er:this.priorityNode_;return new tr(i,s,r)}}updateChild(e,t){const n=pi(e);if(null===n)return t;{Qe(".priority"!==pi(e)||1===fi(e),".priority must be the last token in a path");const i=this.getImmediateChild(n).updateChild(_i(e),t);return this.updateImmediateChild(n,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let n=0,i=0,r=!0;if(this.forEachChild(Yi,((s,o)=>{t[s]=o.val(e),n++,r&&tr.INTEGER_REGEXP_.test(s)?i=Math.max(i,Number(s)):r=!1})),!e&&r&&i<2*n){const e=[];for(const n in t)e[n]=t[n];return e}return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(null===this.lazyHash_){let e="";this.getPriority().isEmpty()||(e+="priority:"+Ui(this.getPriority().val())+":"),this.forEachChild(Yi,((t,n)=>{const i=n.hash();""!==i&&(e+=":"+t+":"+i)})),this.lazyHash_=""===e?"":vn(e)}return this.lazyHash_}getPredecessorChildName(e,t,n){const i=this.resolveIndex_(n);if(i){const n=i.getPredecessorKey(new Pi(e,t));return n?n.name:null}return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const e=t.minKey();return e&&e.name}return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new Pi(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const e=t.maxKey();return e&&e.name}return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new Pi(t,this.children_.get(t)):null}forEachChild(e,t){const n=this.resolveIndex_(e);return n?n.inorderTraversal((e=>t(e.name,e.node))):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const n=this.resolveIndex_(t);if(n)return n.getIteratorFrom(e,(e=>e));{const n=this.children_.getIteratorFrom(e.name,Pi.Wrap);let i=n.peek();for(;null!=i&&t.compare(i,e)<0;)n.getNext(),i=n.peek();return n}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const n=this.resolveIndex_(t);if(n)return n.getReverseIteratorFrom(e,(e=>e));{const n=this.children_.getReverseIteratorFrom(e.name,Pi.Wrap);let i=n.peek();for(;null!=i&&t.compare(i,e)>0;)n.getNext(),i=n.peek();return n}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===nr?-1:0}withIndex(e){if(e===Ai||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new tr(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===Ai||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority())){if(this.children_.count()===t.children_.count()){const e=this.getIterator(Yi),n=t.getIterator(Yi);let i=e.getNext(),r=n.getNext();for(;i&&r;){if(i.name!==r.name||!i.node.equals(r.node))return!1;i=e.getNext(),r=n.getNext()}return null===i&&null===r}return!1}return!1}}resolveIndex_(e){return e===Ai?null:this.indexMap_.get(e.toString())}}tr.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;const nr=new class extends tr{constructor(){super(new Fi(qi),tr.EMPTY_NODE,Zi.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return tr.EMPTY_NODE}isEmpty(){return!1}};Object.defineProperties(Pi,{MIN:{value:new Pi(Nn,tr.EMPTY_NODE)},MAX:{value:new Pi(Pn,nr)}}),Oi.__EMPTY_NODE=tr.EMPTY_NODE,Vi.__childrenNodeConstructor=tr,Wi=nr,function(e){Bi=e}(nr);function ir(e,t=null){if(null===e)return tr.EMPTY_NODE;if("object"==typeof e&&".priority"in e&&(t=e[".priority"]),Qe(null===t||"string"==typeof t||"number"==typeof t||"object"==typeof t&&".sv"in t,"Invalid priority type found: "+typeof t),"object"==typeof e&&".value"in e&&null!==e[".value"]&&(e=e[".value"]),"object"!=typeof e||".sv"in e){return new Vi(e,ir(t))}if(e instanceof Array){let n=tr.EMPTY_NODE;return Ln(e,((t,i)=>{if(ft(e,t)&&"."!==t.substring(0,1)){const e=ir(i);!e.isLeafNode()&&e.isEmpty()||(n=n.updateImmediateChild(t,e))}})),n.updatePriority(ir(t))}{const n=[];let i=!1;if(Ln(e,((e,t)=>{if("."!==e.substring(0,1)){const r=ir(t);r.isEmpty()||(i=i||!r.getPriority().isEmpty(),n.push(new Pi(e,r)))}})),0===n.length)return tr.EMPTY_NODE;const r=Qi(n,$i,(e=>e.name),qi);if(i){const e=Qi(n,Yi.getCompare());return new tr(r,ir(t),new Zi({".priority":e},{".priority":Yi}))}return new tr(r,ir(t),Zi.Default)}}!function(e){zi=e}(ir);
/**
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
     */
class rr extends Ri{constructor(e){super(),this.indexPath_=e,Qe(!wi(e)&&".priority"!==pi(e),"Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const n=this.extractChild(e.node),i=this.extractChild(t.node),r=n.compareTo(i);return 0===r?Rn(e.name,t.name):r}makePost(e,t){const n=ir(e),i=tr.EMPTY_NODE.updateChild(this.indexPath_,n);return new Pi(t,i)}maxPost(){const e=tr.EMPTY_NODE.updateChild(this.indexPath_,nr);return new Pi(Pn,e)}toString(){return gi(this.indexPath_,0).join("/")}}
/**
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
     */const sr=new class extends Ri{compare(e,t){const n=e.node.compareTo(t.node);return 0===n?Rn(e.name,t.name):n}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return Pi.MIN}maxPost(){return Pi.MAX}makePost(e,t){const n=ir(e);return new Pi(t,n)}toString(){return".value"}};
/**
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
     */function or(e,t){return{type:"child_added",snapshotNode:t,childName:e}}function ar(e,t){return{type:"child_removed",snapshotNode:t,childName:e}}function lr(e,t,n){return{type:"child_changed",snapshotNode:t,childName:e,oldSnap:n}}
/**
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
     */
class cr{constructor(e){this.index_=e}updateChild(e,t,n,i,r,s){Qe(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const o=e.getImmediateChild(t);return o.getChild(i).equals(n.getChild(i))&&o.isEmpty()===n.isEmpty()?e:(null!=s&&(n.isEmpty()?e.hasChild(t)?s.trackChildChange(ar(t,o)):Qe(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):o.isEmpty()?s.trackChildChange(or(t,n)):s.trackChildChange(lr(t,n,o))),e.isLeafNode()&&n.isEmpty()?e:e.updateImmediateChild(t,n).withIndex(this.index_))}updateFullNode(e,t,n){return null!=n&&(e.isLeafNode()||e.forEachChild(Yi,((e,i)=>{t.hasChild(e)||n.trackChildChange(ar(e,i))})),t.isLeafNode()||t.forEachChild(Yi,((t,i)=>{if(e.hasChild(t)){const r=e.getImmediateChild(t);r.equals(i)||n.trackChildChange(lr(t,i,r))}else n.trackChildChange(or(t,i))}))),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?tr.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}
/**
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
     */class hr{constructor(e){this.indexedFilter_=new cr(e.getIndex()),this.index_=e.getIndex(),this.startPost_=hr.getStartPost_(e),this.endPost_=hr.getEndPost_(e)}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){return this.index_.compare(this.getStartPost(),e)<=0&&this.index_.compare(e,this.getEndPost())<=0}updateChild(e,t,n,i,r,s){return this.matches(new Pi(t,n))||(n=tr.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,n,i,r,s)}updateFullNode(e,t,n){t.isLeafNode()&&(t=tr.EMPTY_NODE);let i=t.withIndex(this.index_);i=i.updatePriority(tr.EMPTY_NODE);const r=this;return t.forEachChild(Yi,((e,t)=>{r.matches(new Pi(e,t))||(i=i.updateImmediateChild(e,tr.EMPTY_NODE))})),this.indexedFilter_.updateFullNode(e,i,n)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}return e.getIndex().maxPost()}}
/**
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
     */class ur{constructor(e){this.rangedFilter_=new hr(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft()}updateChild(e,t,n,i,r,s){return this.rangedFilter_.matches(new Pi(t,n))||(n=tr.EMPTY_NODE),e.getImmediateChild(t).equals(n)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,n,i,r,s):this.fullLimitUpdateChild_(e,t,n,r,s)}updateFullNode(e,t,n){let i;if(t.isLeafNode()||t.isEmpty())i=tr.EMPTY_NODE.withIndex(this.index_);else if(2*this.limit_<t.numChildren()&&t.isIndexed(this.index_)){let e;i=tr.EMPTY_NODE.withIndex(this.index_),e=this.reverse_?t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let n=0;for(;e.hasNext()&&n<this.limit_;){const t=e.getNext();let r;if(r=this.reverse_?this.index_.compare(this.rangedFilter_.getStartPost(),t)<=0:this.index_.compare(t,this.rangedFilter_.getEndPost())<=0,!r)break;i=i.updateImmediateChild(t.name,t.node),n++}}else{let e,n,r,s;if(i=t.withIndex(this.index_),i=i.updatePriority(tr.EMPTY_NODE),this.reverse_){s=i.getReverseIterator(this.index_),e=this.rangedFilter_.getEndPost(),n=this.rangedFilter_.getStartPost();const t=this.index_.getCompare();r=(e,n)=>t(n,e)}else s=i.getIterator(this.index_),e=this.rangedFilter_.getStartPost(),n=this.rangedFilter_.getEndPost(),r=this.index_.getCompare();let o=0,a=!1;for(;s.hasNext();){const t=s.getNext();!a&&r(e,t)<=0&&(a=!0);a&&o<this.limit_&&r(t,n)<=0?o++:i=i.updateImmediateChild(t.name,tr.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,n)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,n,i,r){let s;if(this.reverse_){const e=this.index_.getCompare();s=(t,n)=>e(n,t)}else s=this.index_.getCompare();const o=e;Qe(o.numChildren()===this.limit_,"");const a=new Pi(t,n),l=this.reverse_?o.getFirstChild(this.index_):o.getLastChild(this.index_),c=this.rangedFilter_.matches(a);if(o.hasChild(t)){const e=o.getImmediateChild(t);let h=i.getChildAfterChild(this.index_,l,this.reverse_);for(;null!=h&&(h.name===t||o.hasChild(h.name));)h=i.getChildAfterChild(this.index_,h,this.reverse_);const u=null==h?1:s(h,a);if(c&&!n.isEmpty()&&u>=0)return null!=r&&r.trackChildChange(lr(t,n,e)),o.updateImmediateChild(t,n);{null!=r&&r.trackChildChange(ar(t,e));const n=o.updateImmediateChild(t,tr.EMPTY_NODE);return null!=h&&this.rangedFilter_.matches(h)?(null!=r&&r.trackChildChange(or(h.name,h.node)),n.updateImmediateChild(h.name,h.node)):n}}return n.isEmpty()?e:c&&s(l,a)>=0?(null!=r&&(r.trackChildChange(ar(l.name,l.node)),r.trackChildChange(or(t,n))),o.updateImmediateChild(t,n).updateImmediateChild(l.name,tr.EMPTY_NODE)):e}}
/**
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
     */class dr{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Yi}hasStart(){return this.startSet_}hasStartAfter(){return this.startAfterSet_}hasEndBefore(){return this.endBeforeSet_}isViewFromLeft(){return""===this.viewFrom_?this.startSet_:"l"===this.viewFrom_}getIndexStartValue(){return Qe(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return Qe(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Nn}hasEnd(){return this.endSet_}getIndexEndValue(){return Qe(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return Qe(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Pn}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&""!==this.viewFrom_}getLimit(){return Qe(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Yi}copy(){const e=new dr;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function pr(e){const t={};if(e.isDefault())return t;let n;return e.index_===Yi?n="$priority":e.index_===sr?n="$value":e.index_===Ai?n="$key":(Qe(e.index_ instanceof rr,"Unrecognized index type!"),n=e.index_.toString()),t.orderBy=dt(n),e.startSet_&&(t.startAt=dt(e.indexStartValue_),e.startNameSet_&&(t.startAt+=","+dt(e.indexStartName_))),e.endSet_&&(t.endAt=dt(e.indexEndValue_),e.endNameSet_&&(t.endAt+=","+dt(e.indexEndName_))),e.limitSet_&&(e.isViewFromLeft()?t.limitToFirst=e.limit_:t.limitToLast=e.limit_),t}function fr(e){const t={};if(e.startSet_&&(t.sp=e.indexStartValue_,e.startNameSet_&&(t.sn=e.indexStartName_)),e.endSet_&&(t.ep=e.indexEndValue_,e.endNameSet_&&(t.en=e.indexEndName_)),e.limitSet_){t.l=e.limit_;let n=e.viewFrom_;""===n&&(n=e.isViewFromLeft()?"l":"r"),t.vf=n}return e.index_!==Yi&&(t.i=e.index_.toString()),t}
/**
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
     */class _r extends li{constructor(e,t,n,i){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=n,this.appCheckTokenProvider_=i,this.log_=En("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return void 0!==t?"tag$"+t:(Qe(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,t,n,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const s=_r.getListenId_(e,n),o={};this.listens_[s]=o;const a=pr(e._queryParams);this.restRequest_(r+".json",a,((e,t)=>{let a=t;if(404===e&&(a=null,e=null),null===e&&this.onDataUpdate_(r,a,!1,n),_t(this.listens_,s)===o){let t;t=e?401===e?"permission_denied":"rest_error:"+e:"ok",i(t,null)}}))}unlisten(e,t){const n=_r.getListenId_(e,t);delete this.listens_[n]}get(e){const t=pr(e._queryParams),n=e._path.toString(),i=new st;return this.restRequest_(n+".json",t,((e,t)=>{let r=t;404===e&&(r=null,e=null),null===e?(this.onDataUpdate_(n,r,!1,null),i.resolve(r)):i.reject(new Error(r))})),i.promise}refreshAuthToken(e){}restRequest_(e,t={},n){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then((([i,r])=>{i&&i.accessToken&&(t.auth=i.accessToken),r&&r.token&&(t.ac=r.token);const s=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+function(e){const t=[];for(const[n,i]of Object.entries(e))Array.isArray(i)?i.forEach((e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))})):t.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return t.length?"&"+t.join("&"):""}(t);this.log_("Sending REST request for "+s);const o=new XMLHttpRequest;o.onreadystatechange=()=>{if(n&&4===o.readyState){this.log_("REST Response for "+s+" received. status:",o.status,"response:",o.responseText);let e=null;if(o.status>=200&&o.status<300){try{e=ut(o.responseText)}catch(e){Sn("Failed to parse JSON response for "+s+": "+o.responseText)}n(null,e)}else 401!==o.status&&404!==o.status&&Sn("Got unsuccessful REST response for "+s+" Status: "+o.status),n(o.status);n=null}},o.open("GET",s,!0),o.send()}))}}
/**
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
     */class mr{constructor(){this.rootNode_=tr.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}
/**
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
     */function gr(){return{value:null,children:new Map}}function yr(e,t,n){if(wi(t))e.value=n,e.children.clear();else if(null!==e.value)e.value=e.value.updateChild(t,n);else{const i=pi(t);e.children.has(i)||e.children.set(i,gr());yr(e.children.get(i),t=_i(t),n)}}function vr(e,t,n){null!==e.value?n(t,e.value):function(e,t){e.children.forEach(((e,n)=>{t(n,e)}))}
/**
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
     */(e,((e,i)=>{vr(i,new ui(t.toString()+"/"+e),n)}))}class wr{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&Ln(this.last_,((e,n)=>{t[e]=t[e]-n})),this.last_=e,t}}
/**
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
     */class br{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new wr(e);const n=1e4+2e4*Math.random();Un(this.reportStats_.bind(this),Math.floor(n))}reportStats_(){const e=this.statsListener_.get(),t={};let n=!1;Ln(e,((e,i)=>{i>0&&ft(this.statsToReport_,e)&&(t[e]=i,n=!0)})),n&&this.server_.reportStats(t),Un(this.reportStats_.bind(this),Math.floor(2*Math.random()*3e5))}}
/**
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
     */var Cr;function Ir(e){return{fromUser:!1,fromServer:!0,queryId:e,tagged:!0}}
/**
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
     */!function(e){e[e.OVERWRITE=0]="OVERWRITE",e[e.MERGE=1]="MERGE",e[e.ACK_USER_WRITE=2]="ACK_USER_WRITE",e[e.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"}(Cr||(Cr={}));class Er{constructor(e,t,n){this.path=e,this.affectedTree=t,this.revert=n,this.type=Cr.ACK_USER_WRITE,this.source={fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}operationForChild(e){if(wi(this.path)){if(null!=this.affectedTree.value)return Qe(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new ui(e));return new Er(di(),t,this.revert)}}return Qe(pi(this.path)===e,"operationForChild called for unrelated child."),new Er(_i(this.path),this.affectedTree,this.revert)}}
/**
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
     */class xr{constructor(e,t,n){this.source=e,this.path=t,this.snap=n,this.type=Cr.OVERWRITE}operationForChild(e){return wi(this.path)?new xr(this.source,di(),this.snap.getImmediateChild(e)):new xr(this.source,_i(this.path),this.snap)}}
/**
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
     */class Tr{constructor(e,t,n){this.source=e,this.path=t,this.children=n,this.type=Cr.MERGE}operationForChild(e){if(wi(this.path)){const t=this.children.subtree(new ui(e));return t.isEmpty()?null:t.value?new xr(this.source,di(),t.value):new Tr(this.source,di(),t)}return Qe(pi(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Tr(this.source,_i(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}
/**
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
     */class Sr{constructor(e,t,n){this.node_=e,this.fullyInitialized_=t,this.filtered_=n}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(wi(e))return this.isFullyInitialized()&&!this.filtered_;const t=pi(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}
/**
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
     */class kr{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function Nr(e,t,n,i,r,s){const o=i.filter((e=>e.type===n));o.sort(((t,n)=>function(e,t,n){if(null==t.childName||null==n.childName)throw Je("Should only compare child_ events.");const i=new Pi(t.childName,t.snapshotNode),r=new Pi(n.childName,n.snapshotNode);return e.index_.compare(i,r)}
/**
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
     */(e,t,n))),o.forEach((n=>{const i=function(e,t,n){return"value"===t.type||"child_removed"===t.type||(t.prevName=n.getPredecessorChildName(t.childName,t.snapshotNode,e.index_)),t}(e,n,s);r.forEach((r=>{r.respondsTo(n.type)&&t.push(r.createEvent(i,e.query_))}))}))}function Pr(e,t){return{eventCache:e,serverCache:t}}function Rr(e,t,n,i){return Pr(new Sr(t,n,i),e.serverCache)}function Dr(e,t,n,i){return Pr(e.eventCache,new Sr(t,n,i))}function Or(e){return e.eventCache.isFullyInitialized()?e.eventCache.getNode():null}function Ar(e){return e.serverCache.isFullyInitialized()?e.serverCache.getNode():null}
/**
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
     */let Mr;class Lr{constructor(e,t=(()=>(Mr||(Mr=new Fi(Dn)),Mr))()){this.value=e,this.children=t}static fromObject(e){let t=new Lr(null);return Ln(e,((e,n)=>{t=t.set(new ui(e),n)})),t}isEmpty(){return null===this.value&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(null!=this.value&&t(this.value))return{path:di(),value:this.value};if(wi(e))return null;{const n=pi(e),i=this.children.get(n);if(null!==i){const r=i.findRootMostMatchingPathAndValue(_i(e),t);if(null!=r){return{path:vi(new ui(n),r.path),value:r.value}}return null}return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,(()=>!0))}subtree(e){if(wi(e))return this;{const t=pi(e),n=this.children.get(t);return null!==n?n.subtree(_i(e)):new Lr(null)}}set(e,t){if(wi(e))return new Lr(t,this.children);{const n=pi(e),i=(this.children.get(n)||new Lr(null)).set(_i(e),t),r=this.children.insert(n,i);return new Lr(this.value,r)}}remove(e){if(wi(e))return this.children.isEmpty()?new Lr(null):new Lr(null,this.children);{const t=pi(e),n=this.children.get(t);if(n){const i=n.remove(_i(e));let r;return r=i.isEmpty()?this.children.remove(t):this.children.insert(t,i),null===this.value&&r.isEmpty()?new Lr(null):new Lr(this.value,r)}return this}}get(e){if(wi(e))return this.value;{const t=pi(e),n=this.children.get(t);return n?n.get(_i(e)):null}}setTree(e,t){if(wi(e))return t;{const n=pi(e),i=(this.children.get(n)||new Lr(null)).setTree(_i(e),t);let r;return r=i.isEmpty()?this.children.remove(n):this.children.insert(n,i),new Lr(this.value,r)}}fold(e){return this.fold_(di(),e)}fold_(e,t){const n={};return this.children.inorderTraversal(((i,r)=>{n[i]=r.fold_(vi(e,i),t)})),t(e,this.value,n)}findOnPath(e,t){return this.findOnPath_(e,di(),t)}findOnPath_(e,t,n){const i=!!this.value&&n(t,this.value);if(i)return i;if(wi(e))return null;{const i=pi(e),r=this.children.get(i);return r?r.findOnPath_(_i(e),vi(t,i),n):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,di(),t)}foreachOnPath_(e,t,n){if(wi(e))return this;{this.value&&n(t,this.value);const i=pi(e),r=this.children.get(i);return r?r.foreachOnPath_(_i(e),vi(t,i),n):new Lr(null)}}foreach(e){this.foreach_(di(),e)}foreach_(e,t){this.children.inorderTraversal(((n,i)=>{i.foreach_(vi(e,n),t)})),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal(((t,n)=>{n.value&&e(t,n.value)}))}}
/**
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
     */class Fr{constructor(e){this.writeTree_=e}static empty(){return new Fr(new Lr(null))}}function $r(e,t,n){if(wi(t))return new Fr(new Lr(n));{const i=e.writeTree_.findRootMostValueAndPath(t);if(null!=i){const r=i.path;let s=i.value;const o=bi(r,t);return s=s.updateChild(o,n),new Fr(e.writeTree_.set(r,s))}{const i=new Lr(n),r=e.writeTree_.setTree(t,i);return new Fr(r)}}}function qr(e,t,n){let i=e;return Ln(n,((e,n)=>{i=$r(i,vi(t,e),n)})),i}function Wr(e,t){if(wi(t))return Fr.empty();{const n=e.writeTree_.setTree(t,new Lr(null));return new Fr(n)}}function Ur(e,t){return null!=jr(e,t)}function jr(e,t){const n=e.writeTree_.findRootMostValueAndPath(t);return null!=n?e.writeTree_.get(n.path).getChild(bi(n.path,t)):null}function Hr(e){const t=[],n=e.writeTree_.value;return null!=n?n.isLeafNode()||n.forEachChild(Yi,((e,n)=>{t.push(new Pi(e,n))})):e.writeTree_.children.inorderTraversal(((e,n)=>{null!=n.value&&t.push(new Pi(e,n.value))})),t}function zr(e,t){if(wi(t))return e;{const n=jr(e,t);return new Fr(null!=n?new Lr(n):e.writeTree_.subtree(t))}}function Br(e){return e.writeTree_.isEmpty()}function Vr(e,t){return Yr(di(),e.writeTree_,t)}function Yr(e,t,n){if(null!=t.value)return n.updateChild(e,t.value);{let i=null;return t.children.inorderTraversal(((t,r)=>{".priority"===t?(Qe(null!==r.value,"Priority writes must always be leaf nodes"),i=r.value):n=Yr(vi(e,t),r,n)})),n.getChild(e).isEmpty()||null===i||(n=n.updateChild(vi(e,".priority"),i)),n}}
/**
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
     */function Gr(e,t){return as(t,e)}function Kr(e,t){const n=e.allWrites.findIndex((e=>e.writeId===t));Qe(n>=0,"removeWrite called with nonexistent writeId.");const i=e.allWrites[n];e.allWrites.splice(n,1);let r=i.visible,s=!1,o=e.allWrites.length-1;for(;r&&o>=0;){const t=e.allWrites[o];t.visible&&(o>=n&&Qr(t,i.path)?r=!1:Ii(i.path,t.path)&&(s=!0)),o--}if(r){if(s)return function(e){e.visibleWrites=Xr(e.allWrites,Jr,di()),e.allWrites.length>0?e.lastWriteId=e.allWrites[e.allWrites.length-1].writeId:e.lastWriteId=-1}(e),!0;if(i.snap)e.visibleWrites=Wr(e.visibleWrites,i.path);else{Ln(i.children,(t=>{e.visibleWrites=Wr(e.visibleWrites,vi(i.path,t))}))}return!0}return!1}function Qr(e,t){if(e.snap)return Ii(e.path,t);for(const n in e.children)if(e.children.hasOwnProperty(n)&&Ii(vi(e.path,n),t))return!0;return!1}function Jr(e){return e.visible}function Xr(e,t,n){let i=Fr.empty();for(let r=0;r<e.length;++r){const s=e[r];if(t(s)){const e=s.path;let t;if(s.snap)Ii(n,e)?(t=bi(n,e),i=$r(i,t,s.snap)):Ii(e,n)&&(t=bi(e,n),i=$r(i,di(),s.snap.getChild(t)));else{if(!s.children)throw Je("WriteRecord should have .snap or .children");if(Ii(n,e))t=bi(n,e),i=qr(i,t,s.children);else if(Ii(e,n))if(t=bi(e,n),wi(t))i=qr(i,di(),s.children);else{const e=_t(s.children,pi(t));if(e){const n=e.getChild(_i(t));i=$r(i,di(),n)}}}}}return i}function Zr(e,t,n,i,r){if(i||r){const s=zr(e.visibleWrites,t);if(!r&&Br(s))return n;if(r||null!=n||Ur(s,di())){const s=function(e){return(e.visible||r)&&(!i||!~i.indexOf(e.writeId))&&(Ii(e.path,t)||Ii(t,e.path))};return Vr(Xr(e.allWrites,s,t),n||tr.EMPTY_NODE)}return null}{const i=jr(e.visibleWrites,t);if(null!=i)return i;{const i=zr(e.visibleWrites,t);if(Br(i))return n;if(null!=n||Ur(i,di())){return Vr(i,n||tr.EMPTY_NODE)}return null}}}function es(e,t,n,i){return Zr(e.writeTree,e.treePath,t,n,i)}function ts(e,t){return function(e,t,n){let i=tr.EMPTY_NODE;const r=jr(e.visibleWrites,t);if(r)return r.isLeafNode()||r.forEachChild(Yi,((e,t)=>{i=i.updateImmediateChild(e,t)})),i;if(n){const r=zr(e.visibleWrites,t);return n.forEachChild(Yi,((e,t)=>{const n=Vr(zr(r,new ui(e)),t);i=i.updateImmediateChild(e,n)})),Hr(r).forEach((e=>{i=i.updateImmediateChild(e.name,e.node)})),i}return Hr(zr(e.visibleWrites,t)).forEach((e=>{i=i.updateImmediateChild(e.name,e.node)})),i}(e.writeTree,e.treePath,t)}function ns(e,t,n,i){return function(e,t,n,i,r){Qe(i||r,"Either existingEventSnap or existingServerSnap must exist");const s=vi(t,n);if(Ur(e.visibleWrites,s))return null;{const t=zr(e.visibleWrites,s);return Br(t)?r.getChild(n):Vr(t,r.getChild(n))}}(e.writeTree,e.treePath,t,n,i)}function is(e,t){return function(e,t){return jr(e.visibleWrites,t)}(e.writeTree,vi(e.treePath,t))}function rs(e,t,n,i,r,s){return function(e,t,n,i,r,s,o){let a;const l=zr(e.visibleWrites,t),c=jr(l,di());if(null!=c)a=c;else{if(null==n)return[];a=Vr(l,n)}if(a=a.withIndex(o),a.isEmpty()||a.isLeafNode())return[];{const e=[],t=o.getCompare(),n=s?a.getReverseIteratorFrom(i,o):a.getIteratorFrom(i,o);let l=n.getNext();for(;l&&e.length<r;)0!==t(l,i)&&e.push(l),l=n.getNext();return e}}(e.writeTree,e.treePath,t,n,i,r,s)}function ss(e,t,n){return function(e,t,n,i){const r=vi(t,n),s=jr(e.visibleWrites,r);if(null!=s)return s;if(i.isCompleteForChild(n))return Vr(zr(e.visibleWrites,r),i.getNode().getImmediateChild(n));return null}(e.writeTree,e.treePath,t,n)}function os(e,t){return as(vi(e.treePath,t),e.writeTree)}function as(e,t){return{treePath:e,writeTree:t}}
/**
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
     */class ls{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,n=e.childName;Qe("child_added"===t||"child_changed"===t||"child_removed"===t,"Only child changes supported for tracking"),Qe(".priority"!==n,"Only non-priority child changes can be tracked.");const i=this.changeMap.get(n);if(i){const r=i.type;if("child_added"===t&&"child_removed"===r)this.changeMap.set(n,lr(n,e.snapshotNode,i.snapshotNode));else if("child_removed"===t&&"child_added"===r)this.changeMap.delete(n);else if("child_removed"===t&&"child_changed"===r)this.changeMap.set(n,ar(n,i.oldSnap));else if("child_changed"===t&&"child_added"===r)this.changeMap.set(n,or(n,e.snapshotNode));else{if("child_changed"!==t||"child_changed"!==r)throw Je("Illegal combination of changes: "+e+" occurred after "+i);this.changeMap.set(n,lr(n,e.snapshotNode,i.oldSnap))}}else this.changeMap.set(n,e)}getChanges(){return Array.from(this.changeMap.values())}}
/**
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
     */const cs=new class{getCompleteChild(e){return null}getChildAfterChild(e,t,n){return null}};class hs{constructor(e,t,n=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=n}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const t=null!=this.optCompleteServerCache_?new Sr(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return ss(this.writes_,e,t)}}getChildAfterChild(e,t,n){const i=null!=this.optCompleteServerCache_?this.optCompleteServerCache_:Ar(this.viewCache_),r=rs(this.writes_,i,t,1,n,e);return 0===r.length?null:r[0]}}
/**
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
     */function us(e,t,n,i,r){const s=new ls;let o,a;if(n.type===Cr.OVERWRITE){const l=n;l.source.fromUser?o=fs(e,t,l.path,l.snap,i,r,s):(Qe(l.source.fromServer,"Unknown source."),a=l.source.tagged||t.serverCache.isFiltered()&&!wi(l.path),o=ps(e,t,l.path,l.snap,i,r,a,s))}else if(n.type===Cr.MERGE){const l=n;l.source.fromUser?o=function(e,t,n,i,r,s,o){let a=t;return i.foreach(((i,l)=>{const c=vi(n,i);_s(t,pi(c))&&(a=fs(e,a,c,l,r,s,o))})),i.foreach(((i,l)=>{const c=vi(n,i);_s(t,pi(c))||(a=fs(e,a,c,l,r,s,o))})),a}(e,t,l.path,l.children,i,r,s):(Qe(l.source.fromServer,"Unknown source."),a=l.source.tagged||t.serverCache.isFiltered(),o=gs(e,t,l.path,l.children,i,r,a,s))}else if(n.type===Cr.ACK_USER_WRITE){const a=n;o=a.revert?function(e,t,n,i,r,s){let o;if(null!=is(i,n))return t;{const a=new hs(i,t,r),l=t.eventCache.getNode();let c;if(wi(n)||".priority"===pi(n)){let n;if(t.serverCache.isFullyInitialized())n=es(i,Ar(t));else{const e=t.serverCache.getNode();Qe(e instanceof tr,"serverChildren would be complete if leaf node"),n=ts(i,e)}n=n,c=e.filter.updateFullNode(l,n,s)}else{const r=pi(n);let h=ss(i,r,t.serverCache);null==h&&t.serverCache.isCompleteForChild(r)&&(h=l.getImmediateChild(r)),c=null!=h?e.filter.updateChild(l,r,h,_i(n),a,s):t.eventCache.getNode().hasChild(r)?e.filter.updateChild(l,r,tr.EMPTY_NODE,_i(n),a,s):l,c.isEmpty()&&t.serverCache.isFullyInitialized()&&(o=es(i,Ar(t)),o.isLeafNode()&&(c=e.filter.updateFullNode(c,o,s)))}return o=t.serverCache.isFullyInitialized()||null!=is(i,di()),Rr(t,c,o,e.filter.filtersNodes())}}
/**
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
     */(e,t,a.path,i,r,s):function(e,t,n,i,r,s,o){if(null!=is(r,n))return t;const a=t.serverCache.isFiltered(),l=t.serverCache;if(null!=i.value){if(wi(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return ps(e,t,n,l.getNode().getChild(n),r,s,a,o);if(wi(n)){let i=new Lr(null);return l.getNode().forEachChild(Ai,((e,t)=>{i=i.set(new ui(e),t)})),gs(e,t,n,i,r,s,a,o)}return t}{let c=new Lr(null);return i.foreach(((e,t)=>{const i=vi(n,e);l.isCompleteForPath(i)&&(c=c.set(e,l.getNode().getChild(i)))})),gs(e,t,n,c,r,s,a,o)}}(e,t,a.path,a.affectedTree,i,r,s)}else{if(n.type!==Cr.LISTEN_COMPLETE)throw Je("Unknown operation type: "+n.type);o=function(e,t,n,i,r){const s=t.serverCache,o=Dr(t,s.getNode(),s.isFullyInitialized()||wi(n),s.isFiltered());return ds(e,o,n,i,cs,r)}(e,t,n.path,i,s)}const l=s.getChanges();return function(e,t,n){const i=t.eventCache;if(i.isFullyInitialized()){const r=i.getNode().isLeafNode()||i.getNode().isEmpty(),s=Or(e);(n.length>0||!e.eventCache.isFullyInitialized()||r&&!i.getNode().equals(s)||!i.getNode().getPriority().equals(s.getPriority()))&&n.push({type:"value",snapshotNode:Or(t)})}}(t,o,l),{viewCache:o,changes:l}}function ds(e,t,n,i,r,s){const o=t.eventCache;if(null!=is(i,n))return t;{let a,l;if(wi(n))if(Qe(t.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),t.serverCache.isFiltered()){const n=Ar(t),r=ts(i,n instanceof tr?n:tr.EMPTY_NODE);a=e.filter.updateFullNode(t.eventCache.getNode(),r,s)}else{const n=es(i,Ar(t));a=e.filter.updateFullNode(t.eventCache.getNode(),n,s)}else{const c=pi(n);if(".priority"===c){Qe(1===fi(n),"Can't have a priority with additional path components");const r=o.getNode();l=t.serverCache.getNode();const s=ns(i,n,r,l);a=null!=s?e.filter.updatePriority(r,s):o.getNode()}else{const h=_i(n);let u;if(o.isCompleteForChild(c)){l=t.serverCache.getNode();const e=ns(i,n,o.getNode(),l);u=null!=e?o.getNode().getImmediateChild(c).updateChild(h,e):o.getNode().getImmediateChild(c)}else u=ss(i,c,t.serverCache);a=null!=u?e.filter.updateChild(o.getNode(),c,u,h,r,s):o.getNode()}}return Rr(t,a,o.isFullyInitialized()||wi(n),e.filter.filtersNodes())}}function ps(e,t,n,i,r,s,o,a){const l=t.serverCache;let c;const h=o?e.filter:e.filter.getIndexedFilter();if(wi(n))c=h.updateFullNode(l.getNode(),i,null);else if(h.filtersNodes()&&!l.isFiltered()){const e=l.getNode().updateChild(n,i);c=h.updateFullNode(l.getNode(),e,null)}else{const e=pi(n);if(!l.isCompleteForPath(n)&&fi(n)>1)return t;const r=_i(n),s=l.getNode().getImmediateChild(e).updateChild(r,i);c=".priority"===e?h.updatePriority(l.getNode(),s):h.updateChild(l.getNode(),e,s,r,cs,null)}const u=Dr(t,c,l.isFullyInitialized()||wi(n),h.filtersNodes());return ds(e,u,n,r,new hs(r,u,s),a)}function fs(e,t,n,i,r,s,o){const a=t.eventCache;let l,c;const h=new hs(r,t,s);if(wi(n))c=e.filter.updateFullNode(t.eventCache.getNode(),i,o),l=Rr(t,c,!0,e.filter.filtersNodes());else{const r=pi(n);if(".priority"===r)c=e.filter.updatePriority(t.eventCache.getNode(),i),l=Rr(t,c,a.isFullyInitialized(),a.isFiltered());else{const s=_i(n),c=a.getNode().getImmediateChild(r);let u;if(wi(s))u=i;else{const e=h.getCompleteChild(r);u=null!=e?".priority"===mi(s)&&e.getChild(yi(s)).isEmpty()?e:e.updateChild(s,i):tr.EMPTY_NODE}if(c.equals(u))l=t;else{l=Rr(t,e.filter.updateChild(a.getNode(),r,u,s,h,o),a.isFullyInitialized(),e.filter.filtersNodes())}}}return l}function _s(e,t){return e.eventCache.isCompleteForChild(t)}function ms(e,t,n){return n.foreach(((e,n)=>{t=t.updateChild(e,n)})),t}function gs(e,t,n,i,r,s,o,a){if(t.serverCache.getNode().isEmpty()&&!t.serverCache.isFullyInitialized())return t;let l,c=t;l=wi(n)?i:new Lr(null).setTree(n,i);const h=t.serverCache.getNode();return l.children.inorderTraversal(((n,i)=>{if(h.hasChild(n)){const l=ms(0,t.serverCache.getNode().getImmediateChild(n),i);c=ps(e,c,new ui(n),l,r,s,o,a)}})),l.children.inorderTraversal(((n,i)=>{const l=!t.serverCache.isCompleteForChild(n)&&void 0===i.value;if(!h.hasChild(n)&&!l){const l=ms(0,t.serverCache.getNode().getImmediateChild(n),i);c=ps(e,c,new ui(n),l,r,s,o,a)}})),c}class ys{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const n=this.query_._queryParams,i=new cr(n.getIndex()),r=(s=n).loadsAllData()?new cr(s.getIndex()):s.hasLimit()?new ur(s):new hr(s);var s;this.processor_=function(e){return{filter:e}}(r);const o=t.serverCache,a=t.eventCache,l=i.updateFullNode(tr.EMPTY_NODE,o.getNode(),null),c=r.updateFullNode(tr.EMPTY_NODE,a.getNode(),null),h=new Sr(l,o.isFullyInitialized(),i.filtersNodes()),u=new Sr(c,a.isFullyInitialized(),r.filtersNodes());this.viewCache_=Pr(u,h),this.eventGenerator_=new kr(this.query_)}get query(){return this.query_}}function vs(e,t){const n=Ar(e.viewCache_);return n&&(e.query._queryParams.loadsAllData()||!wi(t)&&!n.getImmediateChild(pi(t)).isEmpty())?n.getChild(t):null}function ws(e,t,n,i){t.type===Cr.MERGE&&null!==t.source.queryId&&(Qe(Ar(e.viewCache_),"We should always have a full cache before handling merges"),Qe(Or(e.viewCache_),"Missing event cache, even though we have a server cache"));const r=e.viewCache_,s=us(e.processor_,r,t,n,i);var o,a;return o=e.processor_,a=s.viewCache,Qe(a.eventCache.getNode().isIndexed(o.filter.getIndex()),"Event snap not indexed"),Qe(a.serverCache.getNode().isIndexed(o.filter.getIndex()),"Server snap not indexed"),Qe(s.viewCache.serverCache.isFullyInitialized()||!r.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),e.viewCache_=s.viewCache,function(e,t,n,i){const r=i?[i]:e.eventRegistrations_;return function(e,t,n,i){const r=[],s=[];return t.forEach((t=>{var n;"child_changed"===t.type&&e.index_.indexedValueChanged(t.oldSnap,t.snapshotNode)&&s.push((n=t.childName,{type:"child_moved",snapshotNode:t.snapshotNode,childName:n}))})),Nr(e,r,"child_removed",t,i,n),Nr(e,r,"child_added",t,i,n),Nr(e,r,"child_moved",s,i,n),Nr(e,r,"child_changed",t,i,n),Nr(e,r,"value",t,i,n),r}(e.eventGenerator_,t,n,r)}
/**
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
     */(e,s.changes,s.viewCache.eventCache.getNode(),null)}let bs,Cs;class Is{constructor(){this.views=new Map}}function Es(e,t,n,i){const r=t.source.queryId;if(null!==r){const s=e.views.get(r);return Qe(null!=s,"SyncTree gave us an op for an invalid query."),ws(s,t,n,i)}{let r=[];for(const s of e.views.values())r=r.concat(ws(s,t,n,i));return r}}function xs(e,t){let n=null;for(const i of e.views.values())n=n||vs(i,t);return n}
/**
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
     */class Ts{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Lr(null),this.pendingWriteTree_={visibleWrites:Fr.empty(),allWrites:[],lastWriteId:-1},this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Ss(e,t,n,i,r){return function(e,t,n,i,r){Qe(i>e.lastWriteId,"Stacking an older write on top of newer ones"),void 0===r&&(r=!0),e.allWrites.push({path:t,snap:n,writeId:i,visible:r}),r&&(e.visibleWrites=$r(e.visibleWrites,t,n)),e.lastWriteId=i}(e.pendingWriteTree_,t,n,i,r),r?Ds(e,new xr({fromUser:!0,fromServer:!1,queryId:null,tagged:!1},t,n)):[]}function ks(e,t,n=!1){const i=function(e,t){for(let n=0;n<e.allWrites.length;n++){const i=e.allWrites[n];if(i.writeId===t)return i}return null}(e.pendingWriteTree_,t);if(Kr(e.pendingWriteTree_,t)){let t=new Lr(null);return null!=i.snap?t=t.set(di(),!0):Ln(i.children,(e=>{t=t.set(new ui(e),!0)})),Ds(e,new Er(i.path,t,n))}return[]}function Ns(e,t,n){return Ds(e,new xr({fromUser:!1,fromServer:!0,queryId:null,tagged:!1},t,n))}function Ps(e,t,n){const i=e.pendingWriteTree_,r=e.syncPointTree_.findOnPath(t,((e,n)=>{const i=xs(n,bi(e,t));if(i)return i}));return Zr(i,t,r,n,!0)}function Rs(e,t){const n=t._path;let i=null;e.syncPointTree_.foreachOnPath(n,((e,t)=>{const r=bi(e,n);i=i||xs(t,r)}));let r=e.syncPointTree_.get(n);r?i=i||xs(r,di()):(r=new Is,e.syncPointTree_=e.syncPointTree_.set(n,r));const s=null!=i,o=s?new Sr(i,!0,!1):null,a=function(e,t,n,i,r){const s=t._queryIdentifier,o=e.views.get(s);if(!o){let e=es(n,r?i:null),s=!1;e?s=!0:i instanceof tr?(e=ts(n,i),s=!1):(e=tr.EMPTY_NODE,s=!1);const o=Pr(new Sr(e,s,!1),new Sr(i,r,!1));return new ys(t,o)}return o}(r,t,Gr(e.pendingWriteTree_,t._path),s?o.getNode():tr.EMPTY_NODE,s);return function(e){return Or(e.viewCache_)}(a)}function Ds(e,t){return Os(t,e.syncPointTree_,null,Gr(e.pendingWriteTree_,di()))}function Os(e,t,n,i){if(wi(e.path))return As(e,t,n,i);{const r=t.get(di());null==n&&null!=r&&(n=xs(r,di()));let s=[];const o=pi(e.path),a=e.operationForChild(o),l=t.children.get(o);if(l&&a){const e=n?n.getImmediateChild(o):null,t=os(i,o);s=s.concat(Os(a,l,e,t))}return r&&(s=s.concat(Es(r,e,i,n))),s}}function As(e,t,n,i){const r=t.get(di());null==n&&null!=r&&(n=xs(r,di()));let s=[];return t.children.inorderTraversal(((t,r)=>{const o=n?n.getImmediateChild(t):null,a=os(i,t),l=e.operationForChild(t);l&&(s=s.concat(As(l,r,o,a)))})),r&&(s=s.concat(Es(r,e,i,n))),s}function Ms(e,t){return e.tagToQueryMap.get(t)}function Ls(e){const t=e.indexOf("$");return Qe(-1!==t&&t<e.length-1,"Bad queryKey."),{queryId:e.substr(t+1),path:new ui(e.substr(0,t))}}function Fs(e,t,n){const i=e.syncPointTree_.get(t);Qe(i,"Missing sync point for query tag that we're tracking");return Es(i,n,Gr(e.pendingWriteTree_,t),null)}
/**
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
     */class $s{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new $s(t)}node(){return this.node_}}class qs{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=vi(this.path_,e);return new qs(this.syncTree_,t)}node(){return Ps(this.syncTree_,this.path_)}}const Ws=function(e,t,n){return e&&"object"==typeof e?(Qe(".sv"in e,"Unexpected leaf node or priority contents"),"string"==typeof e[".sv"]?Us(e[".sv"],t,n):"object"==typeof e[".sv"]?js(e[".sv"],t):void Qe(!1,"Unexpected server value: "+JSON.stringify(e,null,2))):e},Us=function(e,t,n){if("timestamp"===e)return n.timestamp;Qe(!1,"Unexpected server value: "+e)},js=function(e,t,n){e.hasOwnProperty("increment")||Qe(!1,"Unexpected server value: "+JSON.stringify(e,null,2));const i=e.increment;"number"!=typeof i&&Qe(!1,"Unexpected increment value: "+i);const r=t.node();if(Qe(null!=r,"Expected ChildrenNode.EMPTY_NODE for nulls"),!r.isLeafNode())return i;const s=r.getValue();return"number"!=typeof s?i:s+i},Hs=function(e,t,n){return zs(e,new $s(t),n)};function zs(e,t,n){const i=e.getPriority().val(),r=Ws(i,t.getImmediateChild(".priority"),n);let s;if(e.isLeafNode()){const i=e,s=Ws(i.getValue(),t,n);return s!==i.getValue()||r!==i.getPriority().val()?new Vi(s,ir(r)):e}{const i=e;return s=i,r!==i.getPriority().val()&&(s=s.updatePriority(new Vi(r))),i.forEachChild(Yi,((e,i)=>{const r=zs(i,t.getImmediateChild(e),n);r!==i&&(s=s.updateImmediateChild(e,r))})),s}}
/**
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
     */class Bs{constructor(e="",t=null,n={children:{},childCount:0}){this.name=e,this.parent=t,this.node=n}}function Vs(e,t){let n=t instanceof ui?t:new ui(t),i=e,r=pi(n);for(;null!==r;){const e=_t(i.node.children,r)||{children:{},childCount:0};i=new Bs(r,i,e),n=_i(n),r=pi(n)}return i}function Ys(e){return e.node.value}function Gs(e,t){e.node.value=t,Zs(e)}function Ks(e){return e.node.childCount>0}function Qs(e,t){Ln(e.node.children,((n,i)=>{t(new Bs(n,e,i))}))}function Js(e,t,n,i){n&&!i&&t(e),Qs(e,(e=>{Js(e,t,!0,i)})),n&&i&&t(e)}function Xs(e){return new ui(null===e.parent?e.name:Xs(e.parent)+"/"+e.name)}function Zs(e){null!==e.parent&&function(e,t,n){const i=function(e){return void 0===Ys(e)&&!Ks(e)}(n),r=ft(e.node.children,t);i&&r?(delete e.node.children[t],e.node.childCount--,Zs(e)):i||r||(e.node.children[t]=n.node,e.node.childCount++,Zs(e))}
/**
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
     */(e.parent,e.name,e)}const eo=/[\[\].#$\/\u0000-\u001F\u007F]/,to=/[\[\].#$\u0000-\u001F\u007F]/,no=10485760,io=function(e){return"string"==typeof e&&0!==e.length&&!eo.test(e)},ro=function(e){return"string"==typeof e&&0!==e.length&&!to.test(e)},so=function(e,t,n){const i=n instanceof ui?new Ei(n,e):n;if(void 0===t)throw new Error(e+"contains undefined "+Ti(i));if("function"==typeof t)throw new Error(e+"contains a function "+Ti(i)+" with contents = "+t.toString());if(kn(t))throw new Error(e+"contains "+t.toString()+" "+Ti(i));if("string"==typeof t&&t.length>no/3&&Ct(t)>no)throw new Error(e+"contains a string greater than "+"10485760 utf8 bytes "+Ti(i)+" ('"+t.substring(0,50)+"...')");if(t&&"object"==typeof t){let n=!1,r=!1;if(Ln(t,((t,s)=>{if(".value"===t)n=!0;else if(".priority"!==t&&".sv"!==t&&(r=!0,!io(t)))throw new Error(e+" contains an invalid key ("+t+") "+Ti(i)+'.  Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"');!function(e,t){e.parts_.length>0&&(e.byteLength_+=1),e.parts_.push(t),e.byteLength_+=Ct(t),xi(e)}(i,t),so(e,s,i),function(e){const t=e.parts_.pop();e.byteLength_-=Ct(t),e.parts_.length>0&&(e.byteLength_-=1)}(i)})),n&&r)throw new Error(e+' contains ".value" child '+Ti(i)+" in addition to actual children.")}},oo=function(e,t,n,i){if(!(i&&void 0===n||ro(n)))throw new Error(bt(e,t)+'was an invalid path = "'+n+'". Paths must be non-empty strings and can\'t contain ".", "#", "$", "[", or "]"')},ao=function(e,t){const n=t.path.toString();if("string"!=typeof t.repoInfo.host||0===t.repoInfo.host.length||!io(t.repoInfo.namespace)&&"localhost"!==t.repoInfo.host.split(":")[0]||0!==n.length&&!function(e){return e&&(e=e.replace(/^\/*\.info(\/|$)/,"/")),ro(e)}(n))throw new Error(bt(e,"url")+'must be a valid firebase URL and the path can\'t contain ".", "#", "$", "[", or "]".')};
/**
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
     */
class lo{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function co(e,t){let n=null;for(let i=0;i<t.length;i++){const r=t[i],s=r.getPath();null===n||Ci(s,n.path)||(e.eventLists_.push(n),n=null),null===n&&(n={events:[],path:s}),n.events.push(r)}n&&e.eventLists_.push(n)}function ho(e,t,n){co(e,n),uo(e,(e=>Ii(e,t)||Ii(t,e)))}function uo(e,t){e.recursionDepth_++;let n=!0;for(let i=0;i<e.eventLists_.length;i++){const r=e.eventLists_[i];if(r){t(r.path)?(po(e.eventLists_[i]),e.eventLists_[i]=null):n=!1}}n&&(e.eventLists_=[]),e.recursionDepth_--}function po(e){for(let t=0;t<e.events.length;t++){const n=e.events[t];if(null!==n){e.events[t]=null;const i=n.getEventRunner();bn&&In("event: "+n.toString()),Wn(i)}}}
/**
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
     */class fo{constructor(e,t,n,i){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=n,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new lo,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=gr(),this.transactionQueueTree_=new Bs,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function _o(e,t,n){if(e.stats_=Zn(e.repoInfo_),e.forceRestClient_||("object"==typeof window&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0)e.server_=new _r(e.repoInfo_,((t,n,i,r)=>{yo(e,t,n,i,r)}),e.authTokenProvider_,e.appCheckProvider_),setTimeout((()=>vo(e,!0)),0);else{if(null!=n){if("object"!=typeof n)throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{dt(n)}catch(e){throw new Error("Invalid authOverride provided: "+e)}}e.persistentConnection_=new Ni(e.repoInfo_,t,((t,n,i,r)=>{yo(e,t,n,i,r)}),(t=>{vo(e,t)}),(t=>{!function(e,t){Ln(t,((t,n)=>{wo(e,t,n)}))}(e,t)}),e.authTokenProvider_,e.appCheckProvider_,n),e.server_=e.persistentConnection_}e.authTokenProvider_.addTokenChangeListener((t=>{e.server_.refreshAuthToken(t)})),e.appCheckProvider_.addTokenChangeListener((t=>{e.server_.refreshAppCheckToken(t.token)})),e.statsReporter_=function(e,t){const n=e.toString();return Xn[n]||(Xn[n]=t()),Xn[n]}(e.repoInfo_,(()=>new br(e.stats_,e.server_))),e.infoData_=new mr,e.infoSyncTree_=new Ts({startListening:(t,n,i,r)=>{let s=[];const o=e.infoData_.getNode(t._path);return o.isEmpty()||(s=Ns(e.infoSyncTree_,t._path,o),setTimeout((()=>{r("ok")}),0)),s},stopListening:()=>{}}),wo(e,"connected",!1),e.serverSyncTree_=new Ts({startListening:(t,n,i,r)=>(e.server_.listen(t,i,n,((n,i)=>{const s=r(n,i);ho(e.eventQueue_,t._path,s)})),[]),stopListening:(t,n)=>{e.server_.unlisten(t,n)}})}function mo(e){const t=e.infoData_.getNode(new ui(".info/serverTimeOffset")).val()||0;return(new Date).getTime()+t}function go(e){return(t=(t={timestamp:mo(e)})||{}).timestamp=t.timestamp||(new Date).getTime(),t;var t}function yo(e,t,n,i,r){e.dataUpdateCount++;const s=new ui(t);n=e.interceptServerDataCallback_?e.interceptServerDataCallback_(t,n):n;let o=[];if(r)if(i){const t=gt(n,(e=>ir(e)));o=function(e,t,n,i){const r=Ms(e,i);if(r){const i=Ls(r),s=i.path,o=i.queryId,a=bi(s,t),l=Lr.fromObject(n);return Fs(e,s,new Tr(Ir(o),a,l))}return[]}(e.serverSyncTree_,s,t,r)}else{const t=ir(n);o=function(e,t,n,i){const r=Ms(e,i);if(null!=r){const i=Ls(r),s=i.path,o=i.queryId,a=bi(s,t);return Fs(e,s,new xr(Ir(o),a,n))}return[]}(e.serverSyncTree_,s,t,r)}else if(i){const t=gt(n,(e=>ir(e)));o=function(e,t,n){const i=Lr.fromObject(n);return Ds(e,new Tr({fromUser:!1,fromServer:!0,queryId:null,tagged:!1},t,i))}(e.serverSyncTree_,s,t)}else{const t=ir(n);o=Ns(e.serverSyncTree_,s,t)}let a=s;o.length>0&&(a=To(e,s)),ho(e.eventQueue_,a,o)}function vo(e,t){wo(e,"connected",t),!1===t&&function(e){Io(e,"onDisconnectEvents");const t=go(e),n=gr();vr(e.onDisconnect_,di(),((i,r)=>{const s=function(e,t,n,i){return zs(t,new qs(n,e),i)}(i,r,e.serverSyncTree_,t);yr(n,i,s)}));let i=[];vr(n,di(),((t,n)=>{i=i.concat(Ns(e.serverSyncTree_,t,n));const r=function(e,t){const n=Xs(So(e,t)),i=Vs(e.transactionQueueTree_,t);return function(e,t,n){let i=n?e:e.parent;for(;null!==i;){if(t(i))return!0;i=i.parent}}(i,(t=>{Ro(e,t)})),Ro(e,i),Js(i,(t=>{Ro(e,t)})),n}(e,t);To(e,r)})),e.onDisconnect_=gr(),ho(e.eventQueue_,di(),i)}(e)}function wo(e,t,n){const i=new ui("/.info/"+t),r=ir(n);e.infoData_.updateSnapshot(i,r);const s=Ns(e.infoSyncTree_,i,r);ho(e.eventQueue_,i,s)}function bo(e){return e.nextWriteId_++}function Co(e,t){const n=Rs(e.serverSyncTree_,t);return null!=n?Promise.resolve(n):e.server_.get(t).then((n=>{const i=ir(n).withIndex(t._queryParams.getIndex()),r=Ns(e.serverSyncTree_,t._path,i);var s,o;return s=e.eventQueue_,o=t._path,co(s,r),uo(s,(e=>Ci(e,o))),Promise.resolve(i)}),(n=>(Io(e,"get for query "+dt(t)+" failed: "+n),Promise.reject(new Error(n)))))}function Io(e,...t){let n="";e.persistentConnection_&&(n=e.persistentConnection_.id+":"),In(n,...t)}function Eo(e,t,n){return Ps(e.serverSyncTree_,t,n)||tr.EMPTY_NODE}function xo(e,t=e.transactionQueueTree_){if(t||Po(e,t),Ys(t)){const n=ko(e,t);Qe(n.length>0,"Sending zero length transaction queue");n.every((e=>0===e.status))&&function(e,t,n){const i=n.map((e=>e.currentWriteId)),r=Eo(e,t,i);let s=r;const o=r.hash();for(let e=0;e<n.length;e++){const i=n[e];Qe(0===i.status,"tryToSendTransactionQueue_: items in queue should all be run."),i.status=1,i.retryCount++;const r=bi(t,i.path);s=s.updateChild(r,i.currentOutputSnapshotRaw)}const a=s.val(!0),l=t;e.server_.put(l.toString(),a,(i=>{Io(e,"transaction put response",{path:l.toString(),status:i});let r=[];if("ok"===i){const i=[];for(let t=0;t<n.length;t++)n[t].status=2,r=r.concat(ks(e.serverSyncTree_,n[t].currentWriteId)),n[t].onComplete&&i.push((()=>n[t].onComplete(null,!0,n[t].currentOutputSnapshotResolved))),n[t].unwatcher();Po(e,Vs(e.transactionQueueTree_,t)),xo(e,e.transactionQueueTree_),ho(e.eventQueue_,t,r);for(let e=0;e<i.length;e++)Wn(i[e])}else{if("datastale"===i)for(let e=0;e<n.length;e++)3===n[e].status?n[e].status=4:n[e].status=0;else{Sn("transaction at "+l.toString()+" failed: "+i);for(let e=0;e<n.length;e++)n[e].status=4,n[e].abortReason=i}To(e,t)}}),o)}(e,Xs(t),n)}else Ks(t)&&Qs(t,(t=>{xo(e,t)}))}function To(e,t){const n=So(e,t),i=Xs(n);return function(e,t,n){if(0===t.length)return;const i=[];let r=[];const s=t.filter((e=>0===e.status)).map((e=>e.currentWriteId));for(let a=0;a<t.length;a++){const l=t[a],c=bi(n,l.path);let h,u=!1;if(Qe(null!==c,"rerunTransactionsUnderNode_: relativePath should not be null."),4===l.status)u=!0,h=l.abortReason,r=r.concat(ks(e.serverSyncTree_,l.currentWriteId,!0));else if(0===l.status)if(l.retryCount>=25)u=!0,h="maxretry",r=r.concat(ks(e.serverSyncTree_,l.currentWriteId,!0));else{const n=Eo(e,l.path,s);l.currentInputSnapshot=n;const i=t[a].update(n.val());if(void 0!==i){so("transaction failed: Data returned ",i,l.path);let t=ir(i);"object"==typeof i&&null!=i&&ft(i,".priority")||(t=t.updatePriority(n.getPriority()));const o=l.currentWriteId,a=go(e),c=Hs(t,n,a);l.currentOutputSnapshotRaw=t,l.currentOutputSnapshotResolved=c,l.currentWriteId=bo(e),s.splice(s.indexOf(o),1),r=r.concat(Ss(e.serverSyncTree_,l.path,c,l.currentWriteId,l.applyLocally)),r=r.concat(ks(e.serverSyncTree_,o,!0))}else u=!0,h="nodata",r=r.concat(ks(e.serverSyncTree_,l.currentWriteId,!0))}ho(e.eventQueue_,n,r),r=[],u&&(t[a].status=2,o=t[a].unwatcher,setTimeout(o,Math.floor(0)),t[a].onComplete&&("nodata"===h?i.push((()=>t[a].onComplete(null,!1,t[a].currentInputSnapshot))):i.push((()=>t[a].onComplete(new Error(h),!1,null)))))}var o;Po(e,e.transactionQueueTree_);for(let e=0;e<i.length;e++)Wn(i[e]);xo(e,e.transactionQueueTree_)}(e,ko(e,n),i),i}function So(e,t){let n,i=e.transactionQueueTree_;for(n=pi(t);null!==n&&void 0===Ys(i);)i=Vs(i,n),n=pi(t=_i(t));return i}function ko(e,t){const n=[];return No(e,t,n),n.sort(((e,t)=>e.order-t.order)),n}function No(e,t,n){const i=Ys(t);if(i)for(let e=0;e<i.length;e++)n.push(i[e]);Qs(t,(t=>{No(e,t,n)}))}function Po(e,t){const n=Ys(t);if(n){let e=0;for(let t=0;t<n.length;t++)2!==n[t].status&&(n[e]=n[t],e++);n.length=e,Gs(t,n.length>0?n:void 0)}Qs(t,(t=>{Po(e,t)}))}function Ro(e,t){const n=Ys(t);if(n){const i=[];let r=[],s=-1;for(let t=0;t<n.length;t++)3===n[t].status||(1===n[t].status?(Qe(s===t-1,"All SENT items should be at beginning of queue."),s=t,n[t].status=3,n[t].abortReason="set"):(Qe(0===n[t].status,"Unexpected transaction status in abort"),n[t].unwatcher(),r=r.concat(ks(e.serverSyncTree_,n[t].currentWriteId,!0)),n[t].onComplete&&i.push(n[t].onComplete.bind(null,new Error("set"),!1,null))));-1===s?Gs(t,void 0):n.length=s+1,ho(e.eventQueue_,Xs(t),r);for(let e=0;e<i.length;e++)Wn(i[e])}}
/**
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
     */const Do=function(e,t){const n=Oo(e),i=n.namespace;"firebase.com"===n.domain&&Tn(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),i&&"undefined"!==i||"localhost"===n.domain||Tn("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||"undefined"!=typeof window&&window.location&&window.location.protocol&&-1!==window.location.protocol.indexOf("https:")&&Sn("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().");const r="ws"===n.scheme||"wss"===n.scheme;return{repoInfo:new Gn(n.host,n.secure,i,r,t,"",i!==n.subdomain),path:new ui(n.pathString)}},Oo=function(e){let t="",n="",i="",r="",s="",o=!0,a="https",l=443;if("string"==typeof e){let c=e.indexOf("//");c>=0&&(a=e.substring(0,c-1),e=e.substring(c+2));let h=e.indexOf("/");-1===h&&(h=e.length);let u=e.indexOf("?");-1===u&&(u=e.length),t=e.substring(0,Math.min(h,u)),h<u&&(r=function(e){let t="";const n=e.split("/");for(let e=0;e<n.length;e++)if(n[e].length>0){let i=n[e];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch(e){}t+="/"+i}return t}(e.substring(h,u)));const d=function(e){const t={};"?"===e.charAt(0)&&(e=e.substring(1));for(const n of e.split("&")){if(0===n.length)continue;const i=n.split("=");2===i.length?t[decodeURIComponent(i[0])]=decodeURIComponent(i[1]):Sn(`Invalid query segment '${n}' in query '${e}'`)}return t}(e.substring(Math.min(e.length,u)));c=t.indexOf(":"),c>=0?(o="https"===a||"wss"===a,l=parseInt(t.substring(c+1),10)):c=t.length;const p=t.slice(0,c);if("localhost"===p.toLowerCase())n="localhost";else if(p.split(".").length<=2)n=p;else{const e=t.indexOf(".");i=t.substring(0,e).toLowerCase(),n=t.substring(e+1),s=i}"ns"in d&&(s=d.ns)}return{host:t,port:l,domain:n,subdomain:i,secure:o,scheme:a,pathString:r,namespace:s}};
/**
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
     */
class Ao{constructor(e,t,n,i){this._repo=e,this._path=t,this._queryParams=n,this._orderByCalled=i}get key(){return wi(this._path)?null:mi(this._path)}get ref(){return new Mo(this._repo,this._path)}get _queryIdentifier(){const e=fr(this._queryParams),t=An(e);return"{}"===t?"default":t}get _queryObject(){return fr(this._queryParams)}isEqual(e){if(!((e=It(e))instanceof Ao))return!1;const t=this._repo===e._repo,n=Ci(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return t&&n&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+function(e){let t="";for(let n=e.pieceNum_;n<e.pieces_.length;n++)""!==e.pieces_[n]&&(t+="/"+encodeURIComponent(String(e.pieces_[n])));return t||"/"}(this._path)}}class Mo extends Ao{constructor(e,t){super(e,t,new dr,!1)}get parent(){const e=yi(this._path);return null===e?null:new Mo(this._repo,e)}get root(){let e=this;for(;null!==e.parent;)e=e.parent;return e}}class Lo{constructor(e,t,n){this._node=e,this.ref=t,this._index=n}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new ui(e),n=Fo(this.ref,e);return new Lo(this._node.getChild(t),n,Yi)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){if(this._node.isLeafNode())return!1;return!!this._node.forEachChild(this._index,((t,n)=>e(new Lo(n,Fo(this.ref,t),Yi))))}hasChild(e){const t=new ui(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return!this._node.isLeafNode()&&!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Fo(e,t){var n,i,r,s;return null===pi((e=It(e))._path)?(n="child",i="path",s=!1,(r=t)&&(r=r.replace(/^\/*\.info(\/|$)/,"/")),oo(n,i,r,s)):oo("child","path",t,!1),new Mo(e._repo,vi(e._path,t))}!function(e){Qe(!bs,"__referenceConstructor has already been defined"),bs=e}(Mo),function(e){Qe(!Cs,"__referenceConstructor has already been defined"),Cs=e}(Mo);
/**
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
     */
const $o={};function qo(e,t,n,i,r){let s=i||e.options.databaseURL;void 0===s&&(e.options.projectId||Tn("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),In("Using default host for project ",e.options.projectId),s=`${e.options.projectId}-default-rtdb.firebaseio.com`);let o,a,l=Do(s,r),c=l.repoInfo;"undefined"!=typeof process&&process.env&&(a=process.env.FIREBASE_DATABASE_EMULATOR_HOST),a?(o=!0,s=`http://${a}?ns=${c.namespace}`,l=Do(s,r),c=l.repoInfo):o=!l.repoInfo.secure;const h=r&&o?new zn(zn.OWNER):new Hn(e.name,e.options,t);ao("Invalid Firebase Database URL",l),wi(l.path)||Tn("Database URL must point to the root of a Firebase Database (not including a child path).");const u=function(e,t,n,i){let r=$o[t.name];r||(r={},$o[t.name]=r);let s=r[e.toURLString()];s&&Tn("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call.");return s=new fo(e,false,n,i),r[e.toURLString()]=s,s}(c,e,h,new jn(e.name,n));return new Wo(u,e)}class Wo{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(_o(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Mo(this._repo,di())),this._rootInternal}_delete(){return null!==this._rootInternal&&(!function(e,t){const n=$o[t];n&&n[e.key]===e||Tn(`Database ${t}(${e.repoInfo_}) has already been deleted.`),function(e){e.persistentConnection_&&e.persistentConnection_.interrupt("repo_interrupt")}(e),delete n[e.key]}(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){null===this._rootInternal&&Tn("Cannot call "+e+" on a deleted database.")}}function Uo(e=function(e="[DEFAULT]"){const t=Bt.get(e);if(!t)throw Kt.create("no-app",{appName:e});return t}(),t){return function(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}(e,"database").getImmediate({identifier:t})}
/**
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
     */Ni.prototype.simpleListen=function(e,t){this.sendRequest("q",{p:e},t)},Ni.prototype.echo=function(e,t){this.sendRequest("echo",{d:e},t)},function(e){!function(e){un=e}("9.6.11"),Gt(new Nt("database",((e,{instanceIdentifier:t})=>qo(e.getProvider("app").getImmediate(),e.getProvider("auth-internal"),e.getProvider("app-check-internal"),t)),"PUBLIC").setMultipleInstances(!0)),Jt(cn,hn,e),Jt(cn,hn,"esm2017")}();
/*! *****************************************************************************
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
    ***************************************************************************** */
var jo=function(e,t){return jo=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},jo(e,t)};function Ho(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}jo(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}function zo(e){var t="function"==typeof Symbol&&Symbol.iterator,n=t&&e[t],i=0;if(n)return n.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&i>=e.length&&(e=void 0),{value:e&&e[i++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function Bo(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var i,r,s=n.call(e),o=[];try{for(;(void 0===t||t-- >0)&&!(i=s.next()).done;)o.push(i.value)}catch(e){r={error:e}}finally{try{i&&!i.done&&(n=s.return)&&n.call(s)}finally{if(r)throw r.error}}return o}function Vo(e,t,n){if(n||2===arguments.length)for(var i,r=0,s=t.length;r<s;r++)!i&&r in t||(i||(i=Array.prototype.slice.call(t,0,r)),i[r]=t[r]);return e.concat(i||Array.prototype.slice.call(t))}function Yo(e){return"function"==typeof e}function Go(e){var t=e((function(e){Error.call(e),e.stack=(new Error).stack}));return t.prototype=Object.create(Error.prototype),t.prototype.constructor=t,t}var Ko=Go((function(e){return function(t){e(this),this.message=t?t.length+" errors occurred during unsubscription:\n"+t.map((function(e,t){return t+1+") "+e.toString()})).join("\n  "):"",this.name="UnsubscriptionError",this.errors=t}}));function Qo(e,t){if(e){var n=e.indexOf(t);0<=n&&e.splice(n,1)}}var Jo=function(){function e(e){this.initialTeardown=e,this.closed=!1,this._parentage=null,this._finalizers=null}return e.prototype.unsubscribe=function(){var e,t,n,i,r;if(!this.closed){this.closed=!0;var s=this._parentage;if(s)if(this._parentage=null,Array.isArray(s))try{for(var o=zo(s),a=o.next();!a.done;a=o.next()){a.value.remove(this)}}catch(t){e={error:t}}finally{try{a&&!a.done&&(t=o.return)&&t.call(o)}finally{if(e)throw e.error}}else s.remove(this);var l=this.initialTeardown;if(Yo(l))try{l()}catch(e){r=e instanceof Ko?e.errors:[e]}var c=this._finalizers;if(c){this._finalizers=null;try{for(var h=zo(c),u=h.next();!u.done;u=h.next()){var d=u.value;try{ea(d)}catch(e){r=null!=r?r:[],e instanceof Ko?r=Vo(Vo([],Bo(r)),Bo(e.errors)):r.push(e)}}}catch(e){n={error:e}}finally{try{u&&!u.done&&(i=h.return)&&i.call(h)}finally{if(n)throw n.error}}}if(r)throw new Ko(r)}},e.prototype.add=function(t){var n;if(t&&t!==this)if(this.closed)ea(t);else{if(t instanceof e){if(t.closed||t._hasParent(this))return;t._addParent(this)}(this._finalizers=null!==(n=this._finalizers)&&void 0!==n?n:[]).push(t)}},e.prototype._hasParent=function(e){var t=this._parentage;return t===e||Array.isArray(t)&&t.includes(e)},e.prototype._addParent=function(e){var t=this._parentage;this._parentage=Array.isArray(t)?(t.push(e),t):t?[t,e]:e},e.prototype._removeParent=function(e){var t=this._parentage;t===e?this._parentage=null:Array.isArray(t)&&Qo(t,e)},e.prototype.remove=function(t){var n=this._finalizers;n&&Qo(n,t),t instanceof e&&t._removeParent(this)},e.EMPTY=function(){var t=new e;return t.closed=!0,t}(),e}(),Xo=Jo.EMPTY;function Zo(e){return e instanceof Jo||e&&"closed"in e&&Yo(e.remove)&&Yo(e.add)&&Yo(e.unsubscribe)}function ea(e){Yo(e)?e():e.unsubscribe()}var ta={onUnhandledError:null,onStoppedNotification:null,Promise:void 0,useDeprecatedSynchronousErrorHandling:!1,useDeprecatedNextContext:!1},na={setTimeout:function(e,t){for(var n=[],i=2;i<arguments.length;i++)n[i-2]=arguments[i];var r=na.delegate;return(null==r?void 0:r.setTimeout)?r.setTimeout.apply(r,Vo([e,t],Bo(n))):setTimeout.apply(void 0,Vo([e,t],Bo(n)))},clearTimeout:function(e){var t=na.delegate;return((null==t?void 0:t.clearTimeout)||clearTimeout)(e)},delegate:void 0};function ia(){}var ra=null;function sa(e){if(ta.useDeprecatedSynchronousErrorHandling){var t=!ra;if(t&&(ra={errorThrown:!1,error:null}),e(),t){var n=ra,i=n.errorThrown,r=n.error;if(ra=null,i)throw r}}else e()}var oa=function(e){function t(t){var n=e.call(this)||this;return n.isStopped=!1,t?(n.destination=t,Zo(t)&&t.add(n)):n.destination=da,n}return Ho(t,e),t.create=function(e,t,n){return new ha(e,t,n)},t.prototype.next=function(e){this.isStopped||this._next(e)},t.prototype.error=function(e){this.isStopped||(this.isStopped=!0,this._error(e))},t.prototype.complete=function(){this.isStopped||(this.isStopped=!0,this._complete())},t.prototype.unsubscribe=function(){this.closed||(this.isStopped=!0,e.prototype.unsubscribe.call(this),this.destination=null)},t.prototype._next=function(e){this.destination.next(e)},t.prototype._error=function(e){try{this.destination.error(e)}finally{this.unsubscribe()}},t.prototype._complete=function(){try{this.destination.complete()}finally{this.unsubscribe()}},t}(Jo),aa=Function.prototype.bind;function la(e,t){return aa.call(e,t)}var ca=function(){function e(e){this.partialObserver=e}return e.prototype.next=function(e){var t=this.partialObserver;if(t.next)try{t.next(e)}catch(e){ua(e)}},e.prototype.error=function(e){var t=this.partialObserver;if(t.error)try{t.error(e)}catch(e){ua(e)}else ua(e)},e.prototype.complete=function(){var e=this.partialObserver;if(e.complete)try{e.complete()}catch(e){ua(e)}},e}(),ha=function(e){function t(t,n,i){var r,s,o=e.call(this)||this;Yo(t)||!t?r={next:null!=t?t:void 0,error:null!=n?n:void 0,complete:null!=i?i:void 0}:o&&ta.useDeprecatedNextContext?((s=Object.create(t)).unsubscribe=function(){return o.unsubscribe()},r={next:t.next&&la(t.next,s),error:t.error&&la(t.error,s),complete:t.complete&&la(t.complete,s)}):r=t;return o.destination=new ca(r),o}return Ho(t,e),t}(oa);function ua(e){var t;t=e,na.setTimeout((function(){throw t}))}var da={closed:!0,next:ia,error:function(e){throw e},complete:ia},pa="function"==typeof Symbol&&Symbol.observable||"@@observable";function fa(e){return e}function _a(e){return 0===e.length?fa:1===e.length?e[0]:function(t){return e.reduce((function(e,t){return t(e)}),t)}}var ma=function(){function e(e){e&&(this._subscribe=e)}return e.prototype.lift=function(t){var n=new e;return n.source=this,n.operator=t,n},e.prototype.subscribe=function(e,t,n){var i,r=this,s=(i=e)&&i instanceof oa||function(e){return e&&Yo(e.next)&&Yo(e.error)&&Yo(e.complete)}(i)&&Zo(i)?e:new ha(e,t,n);return sa((function(){var e=r,t=e.operator,n=e.source;s.add(t?t.call(s,n):n?r._subscribe(s):r._trySubscribe(s))})),s},e.prototype._trySubscribe=function(e){try{return this._subscribe(e)}catch(t){e.error(t)}},e.prototype.forEach=function(e,t){var n=this;return new(t=ga(t))((function(t,i){var r=new ha({next:function(t){try{e(t)}catch(e){i(e),r.unsubscribe()}},error:i,complete:t});n.subscribe(r)}))},e.prototype._subscribe=function(e){var t;return null===(t=this.source)||void 0===t?void 0:t.subscribe(e)},e.prototype[pa]=function(){return this},e.prototype.pipe=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return _a(e)(this)},e.prototype.toPromise=function(e){var t=this;return new(e=ga(e))((function(e,n){var i;t.subscribe((function(e){return i=e}),(function(e){return n(e)}),(function(){return e(i)}))}))},e.create=function(t){return new e(t)},e}();function ga(e){var t;return null!==(t=null!=e?e:ta.Promise)&&void 0!==t?t:Promise}var ya=Go((function(e){return function(){e(this),this.name="ObjectUnsubscribedError",this.message="object unsubscribed"}})),va=function(e){function t(){var t=e.call(this)||this;return t.closed=!1,t.currentObservers=null,t.observers=[],t.isStopped=!1,t.hasError=!1,t.thrownError=null,t}return Ho(t,e),t.prototype.lift=function(e){var t=new wa(this,this);return t.operator=e,t},t.prototype._throwIfClosed=function(){if(this.closed)throw new ya},t.prototype.next=function(e){var t=this;sa((function(){var n,i;if(t._throwIfClosed(),!t.isStopped){t.currentObservers||(t.currentObservers=Array.from(t.observers));try{for(var r=zo(t.currentObservers),s=r.next();!s.done;s=r.next()){s.value.next(e)}}catch(e){n={error:e}}finally{try{s&&!s.done&&(i=r.return)&&i.call(r)}finally{if(n)throw n.error}}}}))},t.prototype.error=function(e){var t=this;sa((function(){if(t._throwIfClosed(),!t.isStopped){t.hasError=t.isStopped=!0,t.thrownError=e;for(var n=t.observers;n.length;)n.shift().error(e)}}))},t.prototype.complete=function(){var e=this;sa((function(){if(e._throwIfClosed(),!e.isStopped){e.isStopped=!0;for(var t=e.observers;t.length;)t.shift().complete()}}))},t.prototype.unsubscribe=function(){this.isStopped=this.closed=!0,this.observers=this.currentObservers=null},Object.defineProperty(t.prototype,"observed",{get:function(){var e;return(null===(e=this.observers)||void 0===e?void 0:e.length)>0},enumerable:!1,configurable:!0}),t.prototype._trySubscribe=function(t){return this._throwIfClosed(),e.prototype._trySubscribe.call(this,t)},t.prototype._subscribe=function(e){return this._throwIfClosed(),this._checkFinalizedStatuses(e),this._innerSubscribe(e)},t.prototype._innerSubscribe=function(e){var t=this,n=this,i=n.hasError,r=n.isStopped,s=n.observers;return i||r?Xo:(this.currentObservers=null,s.push(e),new Jo((function(){t.currentObservers=null,Qo(s,e)})))},t.prototype._checkFinalizedStatuses=function(e){var t=this,n=t.hasError,i=t.thrownError,r=t.isStopped;n?e.error(i):r&&e.complete()},t.prototype.asObservable=function(){var e=new ma;return e.source=this,e},t.create=function(e,t){return new wa(e,t)},t}(ma),wa=function(e){function t(t,n){var i=e.call(this)||this;return i.destination=t,i.source=n,i}return Ho(t,e),t.prototype.next=function(e){var t,n;null===(n=null===(t=this.destination)||void 0===t?void 0:t.next)||void 0===n||n.call(t,e)},t.prototype.error=function(e){var t,n;null===(n=null===(t=this.destination)||void 0===t?void 0:t.error)||void 0===n||n.call(t,e)},t.prototype.complete=function(){var e,t;null===(t=null===(e=this.destination)||void 0===e?void 0:e.complete)||void 0===t||t.call(e)},t.prototype._subscribe=function(e){var t,n;return null!==(n=null===(t=this.source)||void 0===t?void 0:t.subscribe(e))&&void 0!==n?n:Xo},t}(va);function ba(e){let t,n,i,r,s,o,a,l,c,h,u;return n=new Ce({props:{data:e[2]}}),r=new Ye({props:{title:"About"}}),o=new De({props:{data:e[2],visible:e[0]}}),l=new Ye({props:{title:"Projects"}}),h=new ze({props:{data:e[2],visible:e[1]}}),{c(){t=w("div"),ne(n.$$.fragment),i=I(),ne(r.$$.fragment),s=I(),ne(o.$$.fragment),a=I(),ne(l.$$.fragment),c=I(),ne(h.$$.fragment),x(t,"id","parent")},m(e,d){g(e,t,d),ie(n,t,null),f(t,i),ie(r,t,null),f(t,s),ie(o,t,null),f(t,a),ie(l,t,null),f(t,c),ie(h,t,null),u=!0},p(e,[t]){const n={};1&t&&(n.visible=e[0]),o.$set(n);const i={};2&t&&(i.visible=e[1]),h.$set(i)},i(e){u||(X(n.$$.fragment,e),X(r.$$.fragment,e),X(o.$$.fragment,e),X(l.$$.fragment,e),X(h.$$.fragment,e),u=!0)},o(e){Z(n.$$.fragment,e),Z(r.$$.fragment,e),Z(o.$$.fragment,e),Z(l.$$.fragment,e),Z(h.$$.fragment,e),u=!1},d(e){e&&y(t),re(n),re(r),re(o),re(l),re(h)}}}function Ca(e){let t=document.querySelector(e),n=t.offsetTop,i=t.offsetLeft,r=t.offsetWidth,s=t.offsetHeight;for(;t.offsetParent;)t=t.offsetParent,n+=t.offsetTop,i+=t.offsetLeft;return n<window.pageYOffset+window.innerHeight&&i<window.pageXOffset+window.innerWidth&&n+s>window.pageYOffset&&i+r>window.pageXOffset}function Ia(e,t,n){const i=function(e,t={}){"object"!=typeof t&&(t={name:t});const n=Object.assign({name:Ht,automaticDataCollectionEnabled:!1},t),i=n.name;if("string"!=typeof i||!i)throw Kt.create("bad-app-name",{appName:String(i)});const r=Bt.get(i);if(r){if(yt(e,r.options)&&yt(n,r.config))return r;throw Kt.create("duplicate-app",{appName:i})}const s=new Dt(i);for(const e of Vt.values())s.addComponent(e);const o=new Qt(e,n,s);return Bt.set(i,o),o}({apiKey:"AIzaSyAvRHZJehOoiB8CYaFHarHD7BIWAmDuti4",authDomain:"web-portfolio-b463f.firebaseapp.com",databaseURL:"https://web-portfolio-b463f-default-rtdb.europe-west1.firebasedatabase.app",projectId:"web-portfolio-b463f",storageBucket:"web-portfolio-b463f.appspot.com",messagingSenderId:"105787201060",appId:"1:105787201060:web:52de0afde43d85458caab1",measurementId:"G-Q4PWGY531T"}),r=Uo(i);let s=new va;const o=((a=It(a=r))._checkNotDeleted("ref"),void 0!==l?Fo(a._root,l):a._root);var a,l,c;(c=Fo(o,"/"),Co((c=It(c))._repo,c).then((e=>new Lo(e,new Mo(c._repo,c._path),c._queryParams.getIndex())))).then((e=>{e.exists()?s.next(e.val()):console.log("No data available")})).catch((e=>{console.error(e)}));let h=!1,u=!1;return window.addEventListener("scroll",(()=>{n(0,h=!!h||Ca("#about-wrapper")),n(1,u=!!u||Ca("#projects-wrapper"))})),[h,u,s]}return new class extends ae{constructor(e){super(),oe(this,e,Ia,ba,o,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map
