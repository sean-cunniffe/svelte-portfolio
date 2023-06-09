var app=function(){"use strict";function e(){}const t=e=>e;function n(e){return e()}function i(){return Object.create(null)}function r(e){e.forEach(n)}function s(e){return"function"==typeof e}function o(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}let a;function l(e,t){return a||(a=document.createElement("a")),a.href=t,e===a.href}const c="undefined"!=typeof window;let h=c?()=>window.performance.now():()=>Date.now(),u=c?e=>requestAnimationFrame(e):e;const d=new Set;function p(e){d.forEach((t=>{t.c(e)||(d.delete(t),t.f())})),0!==d.size&&u(p)}function f(e,t){e.appendChild(t)}function _(e){if(!e)return document;const t=e.getRootNode?e.getRootNode():e.ownerDocument;return t&&t.host?t:e.ownerDocument}function m(e){const t=w("style");return function(e,t){f(e.head||e,t)}(_(e),t),t}function g(e,t,n){e.insertBefore(t,n||null)}function y(e){e.parentNode.removeChild(e)}function v(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function w(e){return document.createElement(e)}function b(e){return document.createElementNS("http://www.w3.org/2000/svg",e)}function C(e){return document.createTextNode(e)}function I(){return C(" ")}function E(e,t,n,i){return e.addEventListener(t,n,i),()=>e.removeEventListener(t,n,i)}function x(e,t,n){null==n?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function T(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}const S=new Set;let k,N=0;function P(e,t,n,i,r,s,o,a=0){const l=16.666/i;let c="{\n";for(let e=0;e<=1;e+=l){const i=t+(n-t)*s(e);c+=100*e+`%{${o(i,1-i)}}\n`}const h=c+`100% {${o(n,1-n)}}\n}`,u=`__svelte_${function(e){let t=5381,n=e.length;for(;n--;)t=(t<<5)-t^e.charCodeAt(n);return t>>>0}(h)}_${a}`,d=_(e);S.add(d);const p=d.__svelte_stylesheet||(d.__svelte_stylesheet=m(e).sheet),f=d.__svelte_rules||(d.__svelte_rules={});f[u]||(f[u]=!0,p.insertRule(`@keyframes ${u} ${h}`,p.cssRules.length));const g=e.style.animation||"";return e.style.animation=`${g?`${g}, `:""}${u} ${i}ms linear ${r}ms 1 both`,N+=1,u}function R(e,t){const n=(e.style.animation||"").split(", "),i=n.filter(t?e=>e.indexOf(t)<0:e=>-1===e.indexOf("__svelte")),r=n.length-i.length;r&&(e.style.animation=i.join(", "),N-=r,N||u((()=>{N||(S.forEach((e=>{const t=e.__svelte_stylesheet;let n=t.cssRules.length;for(;n--;)t.deleteRule(n);e.__svelte_rules={}})),S.clear())})))}function D(e){k=e}function O(e){(function(){if(!k)throw new Error("Function called outside component initialization");return k})().$$.on_mount.push(e)}const A=[],L=[],M=[],F=[],$=Promise.resolve();let q=!1;function j(e){M.push(e)}let W=!1;const U=new Set;function H(){if(!W){W=!0;do{for(let e=0;e<A.length;e+=1){const t=A[e];D(t),z(t.$$)}for(D(null),A.length=0;L.length;)L.pop()();for(let e=0;e<M.length;e+=1){const t=M[e];U.has(t)||(U.add(t),t())}M.length=0}while(A.length);for(;F.length;)F.pop()();q=!1,W=!1,U.clear()}}function z(e){if(null!==e.fragment){e.update(),r(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(j)}}let B;function V(e,t,n){e.dispatchEvent(function(e,t,n=!1){const i=document.createEvent("CustomEvent");return i.initCustomEvent(e,n,!1,t),i}(`${t?"intro":"outro"}${n}`))}const Y=new Set;let G;function K(){G={r:0,c:[],p:G}}function Q(){G.r||r(G.c),G=G.p}function J(e,t){e&&e.i&&(Y.delete(e),e.i(t))}function X(e,t,n,i){if(e&&e.o){if(Y.has(e))return;Y.add(e),G.c.push((()=>{Y.delete(e),i&&(n&&e.d(1),i())})),e.o(t)}}const Z={duration:0};function ee(n,i,o,a){let l=i(n,o),c=a?0:1,f=null,_=null,m=null;function g(){m&&R(n,m)}function y(e,t){const n=e.b-c;return t*=Math.abs(n),{a:c,b:e.b,d:n,duration:t,start:e.start,end:e.start+t,group:e.group}}function v(i){const{delay:s=0,duration:o=300,easing:a=t,tick:v=e,css:w}=l||Z,b={start:h()+s,b:i};i||(b.group=G,G.r+=1),f||_?_=b:(w&&(g(),m=P(n,c,i,o,s,a,w)),i&&v(0,1),f=y(b,o),j((()=>V(n,i,"start"))),function(e){let t;0===d.size&&u(p),new Promise((n=>{d.add(t={c:e,f:n})}))}((e=>{if(_&&e>_.start&&(f=y(_,o),_=null,V(n,f.b,"start"),w&&(g(),m=P(n,c,f.b,f.duration,0,a,l.css))),f)if(e>=f.end)v(c=f.b,1-c),V(n,f.b,"end"),_||(f.b?g():--f.group.r||r(f.group.c)),f=null;else if(e>=f.start){const t=e-f.start;c=f.a+f.d*a(t/f.duration),v(c,1-c)}return!(!f&&!_)})))}return{run(e){s(l)?(B||(B=Promise.resolve(),B.then((()=>{B=null}))),B).then((()=>{l=l(),v(e)})):v(e)},end(){g(),f=_=null}}}function te(e){e&&e.c()}function ne(e,t,i,o){const{fragment:a,on_mount:l,on_destroy:c,after_update:h}=e.$$;a&&a.m(t,i),o||j((()=>{const t=l.map(n).filter(s);c?c.push(...t):r(t),e.$$.on_mount=[]})),h.forEach(j)}function ie(e,t){const n=e.$$;null!==n.fragment&&(r(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function re(e,t){-1===e.$$.dirty[0]&&(A.push(e),q||(q=!0,$.then(H)),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function se(t,n,s,o,a,l,c,h=[-1]){const u=k;D(t);const d=t.$$={fragment:null,ctx:null,props:l,update:e,not_equal:a,bound:i(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(u?u.$$.context:[])),callbacks:i(),dirty:h,skip_bound:!1,root:n.target||u.$$.root};c&&c(d.root);let p=!1;if(d.ctx=s?s(t,n.props||{},((e,n,...i)=>{const r=i.length?i[0]:n;return d.ctx&&a(d.ctx[e],d.ctx[e]=r)&&(!d.skip_bound&&d.bound[e]&&d.bound[e](r),p&&re(t,e)),n})):[],d.update(),p=!0,r(d.before_update),d.fragment=!!o&&o(d.ctx),n.target){if(n.hydrate){const e=function(e){return Array.from(e.childNodes)}(n.target);d.fragment&&d.fragment.l(e),e.forEach(y)}else d.fragment&&d.fragment.c();n.intro&&J(t.$$.fragment),ne(t,n.target,n.anchor,n.customElement),H()}D(u)}class oe{$destroy(){ie(this,1),this.$destroy=e}$on(e,t){const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const e=n.indexOf(t);-1!==e&&n.splice(e,1)}}$set(e){var t;this.$$set&&(t=e,0!==Object.keys(t).length)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}function ae(e){const t=e-1;return t*t*t+1}function le(e,{delay:t=0,duration:n=400,easing:i=ae,x:r=0,y:s=0,opacity:o=0}={}){const a=getComputedStyle(e),l=+a.opacity,c="none"===a.transform?"":a.transform,h=l*(1-o);return{delay:t,duration:n,easing:i,css:(e,t)=>`\n\t\t\ttransform: ${c} translate(${(1-e)*r}px, ${(1-e)*s}px);\n\t\t\topacity: ${l-h*t}`}}function ce(e,t,n){const i=e.slice();return i[4]=t[n],i[6]=n,i}function he(e){let t,n,i,s,o,a,l=e[4].buttonTitle+"";function c(){return e[2](e[4])}return{c(){t=w("button"),n=C(l),t.disabled=e[0],x(t,"class","bg-white transition-colors hover:bg-gray-900 hover:text-white text-gray-900 py-2 px-4 rounded m-3.5")},m(i,r){g(i,t,r),f(t,n),s=!0,o||(a=[E(t,"click",c),E(t,"introend",e[3])],o=!0)},p(n,i){e=n,(!s||1&i)&&(t.disabled=e[0])},i(n){s||(j((()=>{i||(i=ee(t,le,{y:200,duration:2e3,delay:de+150*e[6]},!0)),i.run(1)})),s=!0)},o(n){i||(i=ee(t,le,{y:200,duration:2e3,delay:de+150*e[6]},!1)),i.run(0),s=!1},d(e){e&&y(t),e&&i&&i.end(),o=!1,r(a)}}}function ue(e){let t,n,i=e[1],r=[];for(let t=0;t<i.length;t+=1)r[t]=he(ce(e,i,t));const s=e=>X(r[e],1,1,(()=>{r[e]=null}));return{c(){t=w("div");for(let e=0;e<r.length;e+=1)r[e].c();x(t,"class","hidden sm:flex ml-auto mr-auto flex-row justify-center sticky top-0")},m(e,i){g(e,t,i);for(let e=0;e<r.length;e+=1)r[e].m(t,null);n=!0},p(e,[n]){if(3&n){let o;for(i=e[1],o=0;o<i.length;o+=1){const s=ce(e,i,o);r[o]?(r[o].p(s,n),J(r[o],1)):(r[o]=he(s),r[o].c(),J(r[o],1),r[o].m(t,null))}for(K(),o=i.length;o<r.length;o+=1)s(o);Q()}},i(e){if(!n){for(let e=0;e<i.length;e+=1)J(r[e]);n=!0}},o(e){r=r.filter(Boolean);for(let e=0;e<r.length;e+=1)X(r[e]);n=!1},d(e){e&&y(t),v(r,e)}}}let de=500;function pe(e,t,n){let i=!1;O((()=>{n(0,i=!0)}));return[i,[{buttonTitle:"About",navId:"about-wrapper"},{buttonTitle:"Projects",navId:"projects-wrapper"}],e=>{!function(e){document.getElementById(e.navId).scrollIntoView({behavior:"smooth",inline:"start",block:"start"})}(e)},()=>n(0,i=!1)]}class fe extends oe{constructor(e){super(),se(this,e,pe,ue,o,{})}}function _e(e,t,n){const i=e.slice();return i[2]=t[n],i}function me(e){let t,n,i,r,s,o,a,l,c,h=e[2],u=[];for(let t=0;t<h.length;t+=1)u[t]=ge(_e(e,h,t));return r=new fe({}),{c(){t=w("h3");for(let e=0;e<u.length;e+=1)u[e].c();i=I(),te(r.$$.fragment),s=I(),o=w("a"),a=w("h3"),a.textContent="Link to CV",x(t,"class","self-center text-2xl md:text-5xl text-center"),x(a,"class","mt-4 md:mt-0 text-blue-600 text-xl"),x(o,"target","_blank"),x(o,"href",e[1]),x(o,"class","text-center")},m(e,n){g(e,t,n);for(let e=0;e<u.length;e+=1)u[e].m(t,null);g(e,i,n),ne(r,e,n),g(e,s,n),g(e,o,n),f(o,a),c=!0},p(e,n){if(4&n){let i;for(h=e[2],i=0;i<h.length;i+=1){const r=_e(e,h,i);u[i]?u[i].p(r,n):(u[i]=ge(r),u[i].c(),u[i].m(t,null))}for(;i<u.length;i+=1)u[i].d(1);u.length=h.length}(!c||2&n)&&x(o,"href",e[1])},i(e){c||(j((()=>{n||(n=ee(t,le,{y:-200,duration:2e3},!0)),n.run(1)})),J(r.$$.fragment,e),j((()=>{l||(l=ee(a,le,{y:200,duration:2200,delay:2e3},!0)),l.run(1)})),c=!0)},o(e){n||(n=ee(t,le,{y:-200,duration:2e3},!1)),n.run(0),X(r.$$.fragment,e),l||(l=ee(a,le,{y:200,duration:2200,delay:2e3},!1)),l.run(0),c=!1},d(e){e&&y(t),v(u,e),e&&n&&n.end(),e&&y(i),ie(r,e),e&&y(s),e&&y(o),e&&l&&l.end()}}}function ge(e){let t,n,i,r=e[2]+"";return{c(){t=C(r),n=I(),i=w("br")},m(e,r){g(e,t,r),g(e,n,r),g(e,i,r)},p(e,n){4&n&&r!==(r=e[2]+"")&&T(t,r)},d(e){e&&y(t),e&&y(n),e&&y(i)}}}function ye(e){let t,n,i,r,s,o,a,l,c=e[0]&&me(e);return{c(){t=w("div"),n=w("div"),i=w("div"),i.innerHTML='<embed id="computer" class="mr-auto w-1/6 lg:w-1/12 h-full" type="image/svg+xml" src="assets/images/computer.svg" alt=""/> \n\n            <img id="server" src="assets/images/server.svg" class="ml-auto w-1/6 lg:w-1/12" alt=""/>',r=I(),s=w("div"),c&&c.c(),o=I(),a=w("div"),a.innerHTML='<img id="router" src="assets/images/router.svg" class="mr-auto w-1/6 lg:w-1/12" alt=""/> \n            <img id="switch" src="assets/images/switch.svg" class="ml-auto w-1/6 lg:w-1/12" alt=""/>',x(i,"class","p-10 flex flex-row w-full"),x(s,"class","mb-auto mt-auto"),x(a,"class","p-10 flex flex-row w-full"),x(n,"id","parent"),x(n,"class","min-h-screen w-screen flex flex-col md:w-screen xl:w-3/4 m-auto p-10 pb-20 sm:p-7 relative overflow-hidden"),x(t,"id","home-wrapper"),x(t,"class","select-none svelte-1vakf0e")},m(e,h){g(e,t,h),f(t,n),f(n,i),f(n,r),f(n,s),c&&c.m(s,null),f(n,o),f(n,a),l=!0},p(e,[t]){e[0]?c?(c.p(e,t),1&t&&J(c,1)):(c=me(e),c.c(),J(c,1),c.m(s,null)):c&&(K(),X(c,1,1,(()=>{c=null})),Q())},i(e){l||(J(c),l=!0)},o(e){X(c),l=!1},d(e){e&&y(t),c&&c.d()}}}function ve(e,t,n){let i=!1,{data:r}=t,s=[],o="";return r.subscribe((e=>{n(2,s=e.greeting),n(1,o=e.profile.cv)})),O((async()=>{setTimeout((()=>{n(0,i=!0)}),500)})),e.$$set=e=>{"data"in e&&n(3,r=e.data)},[i,o,s,r]}class we extends oe{constructor(e){super(),se(this,e,ve,ye,o,{data:3})}}function be(t){let n,i,r;return{c(){n=b("svg"),i=b("path"),x(i,"fill","currentColor"),x(i,"d","M450.462-11.692L41.846-15.385c-26.499-.24-60.055 11.08-61.538 37.539l-23.385 417.23c-1.483 26.46 65.194 20.656 91.692 20.924L414.77 464c34.26.345 59.136-20.916 57.846-47.385L454.77 50.462c-1.29-26.469 22.191-61.915-4.307-62.154zM277.3 383.7c-8.4 1.5-11.5-3.7-11.5-8 0-5.4.2-33 .2-55.3 0-15.6-5.2-25.5-11.3-30.7 37-4.1 76-9.2 76-73.1 0-18.2-6.5-27.3-17.1-39 1.7-4.3 7.4-22-1.7-45-13.9-4.3-45.7 17.9-45.7 17.9-13.2-3.7-27.5-5.6-41.6-5.6-14.1 0-28.4 1.9-41.6 5.6 0 0-31.8-22.2-45.7-17.9-9.1 22.9-3.5 40.6-1.7 45-10.6 11.7-15.6 20.8-15.6 39 0 63.6 37.3 69 74.3 73.1-4.8 4.3-9.1 11.7-10.6 22.3-9.5 4.3-33.8 11.7-48.3-13.9-9.1-15.8-25.5-17.1-25.5-17.1-16.2-.2-1.1 10.2-1.1 10.2 10.8 5 18.4 24.2 18.4 24.2 9.7 29.7 56.1 19.7 56.1 19.7 0 13.9.2 36.5.2 40.6 0 4.3-3 9.5-11.5 8-66-22.1-112.2-84.9-112.2-158.3 0-91.8 70.2-161.5 162-161.5S388 133.6 388 225.4c.1 73.4-44.7 136.3-110.7 158.3zm-98.1-61.1c-1.9.4-3.7-.4-3.9-1.7-.2-1.5 1.1-2.8 3-3.2 1.9-.2 3.7.6 3.9 1.9.3 1.3-1 2.6-3 3zm-9.5-.9c0 1.3-1.5 2.4-3.5 2.4-2.2.2-3.7-.9-3.7-2.4 0-1.3 1.5-2.4 3.5-2.4 1.9-.2 3.7.9 3.7 2.4zm-13.7-1.1c-.4 1.3-2.4 1.9-4.1 1.3-1.9-.4-3.2-1.9-2.8-3.2.4-1.3 2.4-1.9 4.1-1.5 2 .6 3.3 2.1 2.8 3.4zm-12.3-5.4c-.9 1.1-2.8.9-4.3-.6-1.5-1.3-1.9-3.2-.9-4.1.9-1.1 2.8-.9 4.3.6 1.3 1.3 1.8 3.3.9 4.1zm-9.1-9.1c-.9.6-2.6 0-3.7-1.5s-1.1-3.2 0-3.9c1.1-.9 2.8-.2 3.7 1.3 1.1 1.5 1.1 3.3 0 4.1zm-6.5-9.7c-.9.9-2.4.4-3.5-.6-1.1-1.3-1.3-2.8-.4-3.5.9-.9 2.4-.4 3.5.6 1.1 1.3 1.3 2.8.4 3.5zm-6.7-7.4c-.4.9-1.7 1.1-2.8.4-1.3-.6-1.9-1.7-1.5-2.6.4-.6 1.5-.9 2.8-.4 1.3.7 1.9 1.8 1.5 2.6z"),x(i,"class","svelte-wjpg4b"),x(n,"aria-hidden","true"),x(n,"data-prefix","fab"),x(n,"data-icon","github-square"),x(n,"class",r="github-icon prefix__prefix__svg-inline--fa prefix__prefix__fa-github-square prefix__prefix__fa-w-14 "+t[0]+" cursor-pointer svelte-wjpg4b"),x(n,"xmlns","http://www.w3.org/2000/svg"),x(n,"viewBox","0 0 448 448")},m(e,t){g(e,n,t),f(n,i)},p(e,[t]){1&t&&r!==(r="github-icon prefix__prefix__svg-inline--fa prefix__prefix__fa-github-square prefix__prefix__fa-w-14 "+e[0]+" cursor-pointer svelte-wjpg4b")&&x(n,"class",r)},i:e,o:e,d(e){e&&y(n)}}}function Ce(e,t,n){let{classes:i=""}=t;return e.$$set=e=>{"classes"in e&&n(0,i=e.classes)},[i]}class Ie extends oe{constructor(e){super(),se(this,e,Ce,be,o,{classes:0})}}function Ee(e,t,n){const i=e.slice();return i[9]=t[n],i}function xe(e,t,n){const i=e.slice();return i[12]=t[n],i}function Te(e,t,n){const i=e.slice();return i[15]=t[n],i}function Se(e){let t,n,i,r,s,o,a,c,h,u,d,p,_,m,C,E,T,S,k,N,P,R,D,O,A,L,M,F,$,q,W,U,H,z,B,V,Y,G,K,Q,Z,re,se,oe,ae;P=new Ie({props:{classes:"h-10"}});let ce=e[3],he=[];for(let t=0;t<ce.length;t+=1)he[t]=ke(Te(e,ce,t));let ue=e[1],de=[];for(let t=0;t<ue.length;t+=1)de[t]=Ne(xe(e,ue,t));let pe=e[2],fe=[];for(let t=0;t<pe.length;t+=1)fe[t]=Pe(Ee(e,pe,t));return{c(){t=w("div"),n=w("img"),s=I(),o=w("div"),a=w("a"),c=b("svg"),h=b("path"),u=I(),d=w("a"),p=b("svg"),_=b("path"),m=b("path"),C=b("path"),E=b("path"),T=b("path"),k=I(),N=w("a"),te(P.$$.fragment),D=I(),O=w("div"),A=w("h1"),A.textContent="Hi, Im Sean",L=I(),M=w("br"),F=I(),$=w("p");for(let e=0;e<he.length;e+=1)he[e].c();q=I(),W=w("div"),U=w("h2"),U.textContent="Education",H=I(),z=w("h2"),z.textContent="Date finished",B=I();for(let e=0;e<de.length;e+=1)de[e].c();Y=I(),G=w("div"),K=w("h2"),K.textContent="Work Experience",Q=I(),Z=w("h2"),Z.textContent="Date finished",re=I();for(let e=0;e<fe.length;e+=1)fe[e].c();x(n,"id","profilePic"),l(n.src,i=e[4])||x(n,"src",i),x(n,"class","w-full m-auto md:m-0 bg-cover border-gray-300 border-4"),x(n,"alt",""),x(h,"fill","#0e76a8"),x(h,"d","M416 0L28.736-13.923c-17.589-.633-44.39-1.113-43.925 45.59l3.797 382.134c.79 79.523 22.528 38.485 40.128 38.63l386.631 3.164c17.6.144 53.798 9.547 53.518-8.251L461.923 5.086C461.643-12.712 433.59.632 416 0zM135.4 384H69V170.2h66.5V384zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 64 102.2 64c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V280c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V384h-66.4V170.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9z"),x(h,"class","svelte-xcatmp"),x(c,"id","linkedin"),x(c,"aria-hidden","true"),x(c,"focusable","false"),x(c,"data-prefix","fab"),x(c,"data-icon","linkedin"),x(c,"class","svg-inline--fa fa-linkedin fa-w-14 h-10 cursor-pointer svelte-xcatmp"),x(c,"role","img"),x(c,"xmlns","http://www.w3.org/2000/svg"),x(c,"viewBox","0 0 448 448"),x(a,"href",e[5]),x(a,"target","_blank"),x(_,"fill","#4285f4"),x(_,"d","M58 108h14V74L52 59v43c0 3.32 2.69 6 6 6"),x(_,"class","svelte-xcatmp"),x(m,"fill","#34a853"),x(m,"d","M120 108h14c3.32 0 6-2.69 6-6V59l-20 15"),x(m,"class","svelte-xcatmp"),x(C,"fill","#fbbc04"),x(C,"d","M120 48v26l20-15v-8c0-7.42-8.47-11.65-14.4-7.2"),x(C,"class","svelte-xcatmp"),x(E,"fill","#ea4335"),x(E,"d","M72 74V48l24 18 24-18v26L96 92"),x(E,"class","svelte-xcatmp"),x(T,"fill","#c5221f"),x(T,"d","M52 51v8l20 15V48l-5.6-4.2c-5.94-4.45-14.4-.22-14.4 7.2"),x(T,"class","svelte-xcatmp"),x(p,"class","h-9 cursor-pointer svelte-xcatmp"),x(p,"xmlns","http://www.w3.org/2000/svg"),x(p,"viewBox","52 42 88 66"),x(p,"id","gmail-icon"),x(d,"class","my-auto block ml-8"),x(d,"href",S="mailto: "+e[6]),x(d,"target","_blank"),x(N,"class","my-auto block ml-8"),x(N,"href",e[7]),x(N,"target","_blank"),x(o,"class","mx-auto w-max mt-4 flex flex-row"),x(t,"class","w-3/4 max-w-xl md:w-3/5 2xl:w-2/5 mx-auto md:mx-0"),x(A,"class","text-center md:text-left mt-3.5 md:mt-0 text-3xl font-thin"),x($,"class","text-center md:text-left"),x(U,"class","font-bold mt-4"),x(z,"class","font-bold mt-4 text-center"),x(W,"class","grid grid-cols-2"),x(K,"class","font-bold mt-4"),x(Z,"class","font-bold mt-4 text-center"),x(G,"class","grid grid-cols-2"),x(O,"class","m-auto md:mx-4")},m(e,i){g(e,t,i),f(t,n),f(t,s),f(t,o),f(o,a),f(a,c),f(c,h),f(o,u),f(o,d),f(d,p),f(p,_),f(p,m),f(p,C),f(p,E),f(p,T),f(o,k),f(o,N),ne(P,N,null),g(e,D,i),g(e,O,i),f(O,A),f(O,L),f(O,M),f(O,F),f(O,$);for(let e=0;e<he.length;e+=1)he[e].m($,null);f(O,q),f(O,W),f(W,U),f(W,H),f(W,z),f(W,B);for(let e=0;e<de.length;e+=1)de[e].m(W,null);f(O,Y),f(O,G),f(G,K),f(G,Q),f(G,Z),f(G,re);for(let e=0;e<fe.length;e+=1)fe[e].m(G,null);ae=!0},p(e,t){if((!ae||16&t&&!l(n.src,i=e[4]))&&x(n,"src",i),(!ae||32&t)&&x(a,"href",e[5]),(!ae||64&t&&S!==(S="mailto: "+e[6]))&&x(d,"href",S),(!ae||128&t)&&x(N,"href",e[7]),8&t){let n;for(ce=e[3],n=0;n<ce.length;n+=1){const i=Te(e,ce,n);he[n]?he[n].p(i,t):(he[n]=ke(i),he[n].c(),he[n].m($,null))}for(;n<he.length;n+=1)he[n].d(1);he.length=ce.length}if(2&t){let n;for(ue=e[1],n=0;n<ue.length;n+=1){const i=xe(e,ue,n);de[n]?de[n].p(i,t):(de[n]=Ne(i),de[n].c(),de[n].m(W,null))}for(;n<de.length;n+=1)de[n].d(1);de.length=ue.length}if(4&t){let n;for(pe=e[2],n=0;n<pe.length;n+=1){const i=Ee(e,pe,n);fe[n]?fe[n].p(i,t):(fe[n]=Pe(i),fe[n].c(),fe[n].m(G,null))}for(;n<fe.length;n+=1)fe[n].d(1);fe.length=pe.length}},i(e){ae||(j((()=>{r||(r=ee(n,le,{x:-1e3,duration:2e3},!0)),r.run(1)})),J(P.$$.fragment,e),j((()=>{R||(R=ee(o,le,{x:-1e3,duration:2e3},!0)),R.run(1)})),j((()=>{V||(V=ee(W,le,{x:1e3,duration:2e3},!0)),V.run(1)})),j((()=>{se||(se=ee(G,le,{x:1e3,duration:2e3,delay:500},!0)),se.run(1)})),j((()=>{oe||(oe=ee(O,le,{x:1e3,duration:2e3},!0)),oe.run(1)})),ae=!0)},o(e){r||(r=ee(n,le,{x:-1e3,duration:2e3},!1)),r.run(0),X(P.$$.fragment,e),R||(R=ee(o,le,{x:-1e3,duration:2e3},!1)),R.run(0),V||(V=ee(W,le,{x:1e3,duration:2e3},!1)),V.run(0),se||(se=ee(G,le,{x:1e3,duration:2e3,delay:500},!1)),se.run(0),oe||(oe=ee(O,le,{x:1e3,duration:2e3},!1)),oe.run(0),ae=!1},d(e){e&&y(t),e&&r&&r.end(),ie(P),e&&R&&R.end(),e&&y(D),e&&y(O),v(he,e),v(de,e),e&&V&&V.end(),v(fe,e),e&&se&&se.end(),e&&oe&&oe.end()}}}function ke(e){let t,n,i,r=e[15]+"";return{c(){t=C(r),n=I(),i=w("br")},m(e,r){g(e,t,r),g(e,n,r),g(e,i,r)},p(e,n){8&n&&r!==(r=e[15]+"")&&T(t,r)},d(e){e&&y(t),e&&y(n),e&&y(i)}}}function Ne(e){let t,n,i,r,s,o,a=e[12].title+"",l=e[12].dateFinished+"";return{c(){t=w("p"),n=C(a),i=I(),r=w("p"),s=C(l),o=I(),x(t,"class","my-2"),x(r,"class","my-2 text-center")},m(e,a){g(e,t,a),f(t,n),g(e,i,a),g(e,r,a),f(r,s),f(r,o)},p(e,t){2&t&&a!==(a=e[12].title+"")&&T(n,a),2&t&&l!==(l=e[12].dateFinished+"")&&T(s,l)},d(e){e&&y(t),e&&y(i),e&&y(r)}}}function Pe(e){let t,n,i,r,s,o,a=e[9].place+"",l=e[9].dateFinished+"";return{c(){t=w("p"),n=C(a),i=I(),r=w("p"),s=C(l),o=I(),x(t,"class","my-2"),x(r,"class","my-2 text-center")},m(e,a){g(e,t,a),f(t,n),g(e,i,a),g(e,r,a),f(r,s),f(r,o)},p(e,t){4&t&&a!==(a=e[9].place+"")&&T(n,a),4&t&&l!==(l=e[9].dateFinished+"")&&T(s,l)},d(e){e&&y(t),e&&y(i),e&&y(r)}}}function Re(e){let t,n,i,r,s=e[0]&&Se(e);return{c(){t=w("div"),n=w("div"),i=w("div"),s&&s.c(),x(i,"class","flex flex-col md:flex-row w-full m-auto justify-center"),x(n,"class","min-h-screen flex flex-col justify-center mb-8 md:mb-0 md:w-screen xl:w-3/4 m-auto p-10 pb-20 sm:p-7 bg-white overflow-x-hidden"),x(t,"id","about-wrapper"),x(t,"class","select-none svelte-xcatmp")},m(e,o){g(e,t,o),f(t,n),f(n,i),s&&s.m(i,null),r=!0},p(e,[t]){e[0]?s?(s.p(e,t),1&t&&J(s,1)):(s=Se(e),s.c(),J(s,1),s.m(i,null)):s&&(K(),X(s,1,1,(()=>{s=null})),Q())},i(e){r||(J(s),r=!0)},o(e){X(s),r=!1},d(e){e&&y(t),s&&s.d()}}}function De(e,t,n){let{visible:i=!1}=t,{data:r}=t,s=[],o=[],a=[],l="",c="",h="",u="";return r.subscribe((e=>{n(1,s=e.profile.education),n(2,o=e.profile.workExperience),n(3,a=e.profile.bio),n(4,l=e.profile.profilePic),n(5,c=e.profile.linkedin),n(7,u=e.profile.github),n(6,h=e.profile.email);let t=document.getElementById("profilePic");t&&(t.src=e.profile.profilePic)})),e.$$set=e=>{"visible"in e&&n(0,i=e.visible),"data"in e&&n(8,r=e.data)},[i,s,o,a,l,c,h,u,r]}class Oe extends oe{constructor(e){super(),se(this,e,De,Re,o,{visible:0,data:8})}}function Ae(e){let t,n,i,r,s,o,a,c,h,u,d,p,_,m,v,b,E,S,k,N,P,R,D=e[5]&&Le(e),O=e[7]&&Me(e),A=!e[5]&&!e[7]&&Fe();return{c(){t=w("div"),n=w("img"),r=I(),s=w("div"),o=w("h3"),a=C(e[0]),c=I(),h=w("div"),u=w("h2"),u.textContent="Tools/Skills:",d=I(),p=w("p"),_=C(e[2]),m=I(),v=w("div"),D&&D.c(),b=I(),O&&O.c(),E=I(),A&&A.c(),S=I(),k=w("p"),N=C(e[1]),x(n,"class","mx-auto md:w-1/3 mb-auto mt-2 md:mr-3 md:ml-0 rounded-2xl"),l(n.src,i=e[3])||x(n,"src",i),x(n,"alt",""),x(o,"class","font-semibold text-2xl mb-2 text-center md:text-left"),x(u,"class","font-semibold mr-2 text-center md:text-left"),x(p,"class","text-center md:text-left"),x(h,"class","flex flex-col md:flex-row mt-2 mx-auto md:mx-0"),x(v,"class","flex flex-row justify-center md:justify-start"),x(k,"class","text-center md:text-left"),x(s,"class","md:ml-3"),x(t,"class","w-5/6 border-2 shadow-xl flex flex-col md:flex-row m-3.5 ml-auto mr-auto p-3 pl-6 pr-6 rounded-2xl select-none")},m(e,i){g(e,t,i),f(t,n),f(t,r),f(t,s),f(s,o),f(o,a),f(s,c),f(s,h),f(h,u),f(h,d),f(h,p),f(p,_),f(s,m),f(s,v),D&&D.m(v,null),f(v,b),O&&O.m(v,null),f(v,E),A&&A.m(v,null),f(s,S),f(s,k),f(k,N),R=!0},p(t,r){e=t,(!R||8&r&&!l(n.src,i=e[3]))&&x(n,"src",i),(!R||1&r)&&T(a,e[0]),(!R||4&r)&&T(_,e[2]),e[5]?D?D.p(e,r):(D=Le(e),D.c(),D.m(v,b)):D&&(D.d(1),D=null),e[7]?O?(O.p(e,r),128&r&&J(O,1)):(O=Me(e),O.c(),J(O,1),O.m(v,E)):O&&(K(),X(O,1,1,(()=>{O=null})),Q()),e[5]||e[7]?A&&(A.d(1),A=null):A||(A=Fe(),A.c(),A.m(v,null)),(!R||2&r)&&T(N,e[1])},i(n){R||(J(O),j((()=>{P||(P=ee(t,le,{x:500,duration:1e3,delay:e[4]},!0)),P.run(1)})),R=!0)},o(n){X(O),P||(P=ee(t,le,{x:500,duration:1e3,delay:e[4]},!1)),P.run(0),R=!1},d(e){e&&y(t),D&&D.d(),O&&O.d(),A&&A.d(),e&&P&&P.end()}}}function Le(e){let t,n;return{c(){t=w("a"),n=w("button"),n.textContent="Live Demo",x(n,"class","bg-white transition-colors hover:bg-gray-900 hover:text-white text-gray-900 py-1 px-2 rounded my-2 mx-auto md:mx-0 block"),x(t,"href",e[5]),x(t,"target","_blank")},m(e,i){g(e,t,i),f(t,n)},p(e,n){32&n&&x(t,"href",e[5])},d(e){e&&y(t)}}}function Me(e){let t,n,i;return n=new Ie({props:{classes:"h-8 my-2 ml-3"}}),{c(){t=w("a"),te(n.$$.fragment),x(t,"href",e[7]),x(t,"target","_blank")},m(e,r){g(e,t,r),ne(n,t,null),i=!0},p(e,n){(!i||128&n)&&x(t,"href",e[7])},i(e){i||(J(n.$$.fragment,e),i=!0)},o(e){X(n.$$.fragment,e),i=!1},d(e){e&&y(t),ie(n)}}}function Fe(e){let t;return{c(){t=w("br")},m(e,n){g(e,t,n)},d(e){e&&y(t)}}}function $e(e){let t,n,i=e[6]&&Ae(e);return{c(){i&&i.c(),t=C("")},m(e,r){i&&i.m(e,r),g(e,t,r),n=!0},p(e,[n]){e[6]?i?(i.p(e,n),64&n&&J(i,1)):(i=Ae(e),i.c(),J(i,1),i.m(t.parentNode,t)):i&&(K(),X(i,1,1,(()=>{i=null})),Q())},i(e){n||(J(i),n=!0)},o(e){X(i),n=!1},d(e){i&&i.d(e),e&&y(t)}}}function qe(e,t,n){let{title:i=null}=t,{description:r=null}=t,{skills:s=null}=t,{imageURL:o=null}=t,{delay:a=0}=t,{link:l=null}=t,{visible:c=!1}=t,{repoLink:h=null}=t;return e.$$set=e=>{"title"in e&&n(0,i=e.title),"description"in e&&n(1,r=e.description),"skills"in e&&n(2,s=e.skills),"imageURL"in e&&n(3,o=e.imageURL),"delay"in e&&n(4,a=e.delay),"link"in e&&n(5,l=e.link),"visible"in e&&n(6,c=e.visible),"repoLink"in e&&n(7,h=e.repoLink)},[i,r,s,o,a,l,c,h]}class je extends oe{constructor(e){super(),se(this,e,qe,$e,o,{title:0,description:1,skills:2,imageURL:3,delay:4,link:5,visible:6,repoLink:7})}}function We(e,t,n){const i=e.slice();return i[3]=t[n],i}function Ue(e){let t,n;return t=new je({props:{title:e[3].title,description:e[3].description,skills:e[3].toolsAndSkills,imageURL:e[3].image,link:e[3].link,delay:ze+=300,repoLink:e[3].repoLink,visible:e[0]}}),{c(){te(t.$$.fragment)},m(e,i){ne(t,e,i),n=!0},p(e,n){const i={};2&n&&(i.title=e[3].title),2&n&&(i.description=e[3].description),2&n&&(i.skills=e[3].toolsAndSkills),2&n&&(i.imageURL=e[3].image),2&n&&(i.link=e[3].link),2&n&&(i.repoLink=e[3].repoLink),1&n&&(i.visible=e[0]),t.$set(i)},i(e){n||(J(t.$$.fragment,e),n=!0)},o(e){X(t.$$.fragment,e),n=!1},d(e){ie(t,e)}}}function He(e){let t,n,i,r=e[1],s=[];for(let t=0;t<r.length;t+=1)s[t]=Ue(We(e,r,t));const o=e=>X(s[e],1,1,(()=>{s[e]=null}));return{c(){t=w("div"),n=w("div");for(let e=0;e<s.length;e+=1)s[e].c();x(n,"class","flex flex-col md:w-screen xl:w-3/4 m-auto pb-20 sm:p-7 overflow-x-hidden bg-white"),x(t,"id","projects-wrapper"),x(t,"class","svelte-4idedc")},m(e,r){g(e,t,r),f(t,n);for(let e=0;e<s.length;e+=1)s[e].m(n,null);i=!0},p(e,[t]){if(3&t){let i;for(r=e[1],i=0;i<r.length;i+=1){const o=We(e,r,i);s[i]?(s[i].p(o,t),J(s[i],1)):(s[i]=Ue(o),s[i].c(),J(s[i],1),s[i].m(n,null))}for(K(),i=r.length;i<s.length;i+=1)o(i);Q()}},i(e){if(!i){for(let e=0;e<r.length;e+=1)J(s[e]);i=!0}},o(e){s=s.filter(Boolean);for(let e=0;e<s.length;e+=1)X(s[e]);i=!1},d(e){e&&y(t),v(s,e)}}}let ze=0;function Be(e,t,n){let{visible:i=!1}=t,{data:r}=t,s=[];return r.subscribe((e=>{console.log(e.project),n(1,s=e.project)})),e.$$set=e=>{"visible"in e&&n(0,i=e.visible),"data"in e&&n(2,r=e.data)},[i,s,r]}class Ve extends oe{constructor(e){super(),se(this,e,Be,He,o,{visible:0,data:2})}}function Ye(t){let n,i,r;return{c(){n=w("div"),i=w("h2"),r=C(t[0]),x(i,"class","text-center block my-auto text-4xl font-thin p-2"),x(n,"class","w-100 border-2 h-28 flex bg-gray-100 flex-column justify-center")},m(e,t){g(e,n,t),f(n,i),f(i,r)},p(e,[t]){1&t&&T(r,e[0])},i:e,o:e,d(e){e&&y(n)}}}function Ge(e,t,n){let{title:i=""}=t;return e.$$set=e=>{"title"in e&&n(0,i=e.title)},[i]}class Ke extends oe{constructor(e){super(),se(this,e,Ge,Ye,o,{title:0})}}
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
     */const Qe=!1,Je="${JSCORE_VERSION}",Xe=function(e,t){if(!e)throw Ze(t)},Ze=function(e){return new Error("Firebase Database ("+Je+") INTERNAL ASSERT FAILED: "+e)},et=function(e){const t=[];let n=0;for(let i=0;i<e.length;i++){let r=e.charCodeAt(i);r<128?t[n++]=r:r<2048?(t[n++]=r>>6|192,t[n++]=63&r|128):55296==(64512&r)&&i+1<e.length&&56320==(64512&e.charCodeAt(i+1))?(r=65536+((1023&r)<<10)+(1023&e.charCodeAt(++i)),t[n++]=r>>18|240,t[n++]=r>>12&63|128,t[n++]=r>>6&63|128,t[n++]=63&r|128):(t[n++]=r>>12|224,t[n++]=r>>6&63|128,t[n++]=63&r|128)}return t},tt={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let t=0;t<e.length;t+=3){const r=e[t],s=t+1<e.length,o=s?e[t+1]:0,a=t+2<e.length,l=a?e[t+2]:0,c=r>>2,h=(3&r)<<4|o>>4;let u=(15&o)<<2|l>>6,d=63&l;a||(d=64,s||(u=64)),i.push(n[c],n[h],n[u],n[d])}return i.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(et(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){const t=[];let n=0,i=0;for(;n<e.length;){const r=e[n++];if(r<128)t[i++]=String.fromCharCode(r);else if(r>191&&r<224){const s=e[n++];t[i++]=String.fromCharCode((31&r)<<6|63&s)}else if(r>239&&r<365){const s=((7&r)<<18|(63&e[n++])<<12|(63&e[n++])<<6|63&e[n++])-65536;t[i++]=String.fromCharCode(55296+(s>>10)),t[i++]=String.fromCharCode(56320+(1023&s))}else{const s=e[n++],o=e[n++];t[i++]=String.fromCharCode((15&r)<<12|(63&s)<<6|63&o)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let t=0;t<e.length;){const r=n[e.charAt(t++)],s=t<e.length?n[e.charAt(t)]:0;++t;const o=t<e.length?n[e.charAt(t)]:64;++t;const a=t<e.length?n[e.charAt(t)]:64;if(++t,null==r||null==s||null==o||null==a)throw Error();const l=r<<2|s>>4;if(i.push(l),64!==o){const e=s<<4&240|o>>2;if(i.push(e),64!==a){const e=o<<6&192|a;i.push(e)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},nt=function(e){const t=et(e);return tt.encodeByteArray(t,!0)},it=function(e){return nt(e).replace(/\./g,"")},rt=function(e){try{return tt.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};
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
function st(e){return ot(void 0,e)}function ot(e,t){if(!(t instanceof Object))return t;switch(t.constructor){case Date:return new Date(t.getTime());case Object:void 0===e&&(e={});break;case Array:e=[];break;default:return t}for(const n in t)t.hasOwnProperty(n)&&"__proto__"!==n&&(e[n]=ot(e[n],t[n]));return e}
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
class at{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"==typeof e&&(this.promise.catch((()=>{})),1===e.length?e(t):e(t,n))}}}
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
     */function lt(){return"undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test("undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:"")}function ct(){return!0===Qe}class ht extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,ht.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ut.prototype.create)}}class ut{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},i=`${this.service}/${e}`,r=this.errors[e],s=r?function(e,t){return e.replace(dt,((e,n)=>{const i=t[n];return null!=i?String(i):`<${n}?>`}))}(r,n):"Error",o=`${this.serviceName}: ${s} (${i}).`;return new ht(i,o,n)}}const dt=/\{\$([^}]+)}/g;
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
     */function pt(e){return JSON.parse(e)}function ft(e){return JSON.stringify(e)}
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
     */const _t=function(e){let t={},n={},i={},r="";try{const s=e.split(".");t=pt(rt(s[0])||""),n=pt(rt(s[1])||""),r=s[2],i=n.d||{},delete n.d}catch(e){}return{header:t,claims:n,data:i,signature:r}};
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
function mt(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function gt(e,t){return Object.prototype.hasOwnProperty.call(e,t)?e[t]:void 0}function yt(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function vt(e,t,n){const i={};for(const r in e)Object.prototype.hasOwnProperty.call(e,r)&&(i[r]=t.call(n,e[r],r,e));return i}function wt(e,t){if(e===t)return!0;const n=Object.keys(e),i=Object.keys(t);for(const r of n){if(!i.includes(r))return!1;const n=e[r],s=t[r];if(bt(n)&&bt(s)){if(!wt(n,s))return!1}else if(n!==s)return!1}for(const e of i)if(!n.includes(e))return!1;return!0}function bt(e){return null!==e&&"object"==typeof e}
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
class Ct{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=64,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const n=this.W_;if("string"==typeof e)for(let i=0;i<16;i++)n[i]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let i=0;i<16;i++)n[i]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let e=16;e<80;e++){const t=n[e-3]^n[e-8]^n[e-14]^n[e-16];n[e]=4294967295&(t<<1|t>>>31)}let i,r,s=this.chain_[0],o=this.chain_[1],a=this.chain_[2],l=this.chain_[3],c=this.chain_[4];for(let e=0;e<80;e++){e<40?e<20?(i=l^o&(a^l),r=1518500249):(i=o^a^l,r=1859775393):e<60?(i=o&a|l&(o|a),r=2400959708):(i=o^a^l,r=3395469782);const t=(s<<5|s>>>27)+i+c+r+n[e]&4294967295;c=l,l=a,a=4294967295&(o<<30|o>>>2),o=s,s=t}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+o&4294967295,this.chain_[2]=this.chain_[2]+a&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+c&4294967295}update(e,t){if(null==e)return;void 0===t&&(t=e.length);const n=t-this.blockSize;let i=0;const r=this.buf_;let s=this.inbuf_;for(;i<t;){if(0===s)for(;i<=n;)this.compress_(e,i),i+=this.blockSize;if("string"==typeof e){for(;i<t;)if(r[s]=e.charCodeAt(i),++s,++i,s===this.blockSize){this.compress_(r),s=0;break}}else for(;i<t;)if(r[s]=e[i],++s,++i,s===this.blockSize){this.compress_(r),s=0;break}}this.inbuf_=s,this.total_+=t}digest(){const e=[];let t=8*this.total_;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let e=this.blockSize-1;e>=56;e--)this.buf_[e]=255&t,t/=256;this.compress_(this.buf_);let n=0;for(let t=0;t<5;t++)for(let i=24;i>=0;i-=8)e[n]=this.chain_[t]>>i&255,++n;return e}}function It(e,t){return`${e} failed: ${t} argument `}
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
     */const Et=function(e){let t=0;for(let n=0;n<e.length;n++){const i=e.charCodeAt(n);i<128?t++:i<2048?t+=2:i>=55296&&i<=56319?(t+=4,n++):t+=3}return t};
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
function xt(e){return e&&e._delegate?e._delegate:e}
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
     */function Tt(e,t){return new Promise(((n,i)=>{e.onsuccess=e=>{n(e.target.result)},e.onerror=e=>{var n;i(`${t}: ${null===(n=e.target.error)||void 0===n?void 0:n.message}`)}}))}class St{constructor(e){this._db=e,this.objectStoreNames=this._db.objectStoreNames}transaction(e,t="readonly"){return new kt(this._db.transaction.call(this._db,e,t))}createObjectStore(e,t){return new Nt(this._db.createObjectStore(e,t))}close(){this._db.close()}}class kt{constructor(e){this._transaction=e,this.complete=new Promise(((e,t)=>{this._transaction.oncomplete=function(){e()},this._transaction.onerror=()=>{t(this._transaction.error)},this._transaction.onabort=()=>{t(this._transaction.error)}}))}objectStore(e){return new Nt(this._transaction.objectStore(e))}}class Nt{constructor(e){this._store=e}index(e){return new Pt(this._store.index(e))}createIndex(e,t,n){return new Pt(this._store.createIndex(e,t,n))}get(e){return Tt(this._store.get(e),"Error reading from IndexedDB")}put(e,t){return Tt(this._store.put(e,t),"Error writing to IndexedDB")}delete(e){return Tt(this._store.delete(e),"Error deleting from IndexedDB")}clear(){return Tt(this._store.clear(),"Error clearing IndexedDB object store")}}class Pt{constructor(e){this._index=e}get(e){return Tt(this._index.get(e),"Error reading from IndexedDB")}}class Rt{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}
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
     */const Dt="[DEFAULT]";
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
     */class Ot{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new at;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(e){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),i=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(i)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(e){if(i)return null;throw e}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(function(e){return"EAGER"===e.instantiationMode}
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
     */(e))try{this.getOrInitializeService({instanceIdentifier:Dt})}catch(e){}for(const[e,t]of this.instancesDeferred.entries()){const n=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:n});t.resolve(e)}catch(e){}}}}clearInstance(e="[DEFAULT]"){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter((e=>"INTERNAL"in e)).map((e=>e.INTERNAL.delete())),...e.filter((e=>"_delete"in e)).map((e=>e._delete()))])}isComponentSet(){return null!=this.component}isInitialized(e="[DEFAULT]"){return this.instances.has(e)}getOptions(e="[DEFAULT]"){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[e,t]of this.instancesDeferred.entries()){n===this.normalizeInstanceIdentifier(e)&&t.resolve(i)}return i}onInit(e,t){var n;const i=this.normalizeInstanceIdentifier(t),r=null!==(n=this.onInitCallbacks.get(i))&&void 0!==n?n:new Set;r.add(e),this.onInitCallbacks.set(i,r);const s=this.instances.get(i);return s&&e(s,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const i of n)try{i(e,t)}catch(e){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:(i=e,i===Dt?void 0:i),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(e){}var i;return n||null}normalizeInstanceIdentifier(e="[DEFAULT]"){return this.component?this.component.multipleInstances?e:Dt:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}class At{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Ot(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}
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
     */var Lt;!function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"}(Lt||(Lt={}));const Mt={debug:Lt.DEBUG,verbose:Lt.VERBOSE,info:Lt.INFO,warn:Lt.WARN,error:Lt.ERROR,silent:Lt.SILENT},Ft=Lt.INFO,$t={[Lt.DEBUG]:"log",[Lt.VERBOSE]:"log",[Lt.INFO]:"info",[Lt.WARN]:"warn",[Lt.ERROR]:"error"},qt=(e,t,...n)=>{if(t<e.logLevel)return;const i=(new Date).toISOString(),r=$t[t];if(!r)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[r](`[${i}]  ${e.name}:`,...n)};class jt{constructor(e){this.name=e,this._logLevel=Ft,this._logHandler=qt,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Lt))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?Mt[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Lt.DEBUG,...e),this._logHandler(this,Lt.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Lt.VERBOSE,...e),this._logHandler(this,Lt.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Lt.INFO,...e),this._logHandler(this,Lt.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Lt.WARN,...e),this._logHandler(this,Lt.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Lt.ERROR,...e),this._logHandler(this,Lt.ERROR,...e)}}
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
     */class Wt{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map((e=>{if(function(e){const t=e.getComponent();return"VERSION"===(null==t?void 0:t.type)}(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null})).filter((e=>e)).join(" ")}}const Ut="@firebase/app",Ht="0.7.21",zt=new jt("@firebase/app"),Bt="[DEFAULT]",Vt={[Ut]:"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},Yt=new Map,Gt=new Map;function Kt(e,t){try{e.container.addComponent(t)}catch(n){zt.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function Qt(e){const t=e.name;if(Gt.has(t))return zt.debug(`There were multiple attempts to register component ${t}.`),!1;Gt.set(t,e);for(const t of Yt.values())Kt(t,e);return!0}
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
const Jt=new ut("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","storage-open":"Error thrown when opening storage. Original error: {$originalErrorMessage}.","storage-get":"Error thrown when reading from storage. Original error: {$originalErrorMessage}.","storage-set":"Error thrown when writing to storage. Original error: {$originalErrorMessage}.","storage-delete":"Error thrown when deleting from storage. Original error: {$originalErrorMessage}."});
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
class Xt{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new Rt("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Jt.create("app-deleted",{appName:this._name})}}
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
     */function Zt(e,t,n){var i;let r=null!==(i=Vt[e])&&void 0!==i?i:e;n&&(r+=`-${n}`);const s=r.match(/\s|\//),o=t.match(/\s|\//);if(s||o){const e=[`Unable to register library "${r}" with version "${t}":`];return s&&e.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&o&&e.push("and"),o&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void zt.warn(e.join(" "))}Qt(new Rt(`${r}-version`,(()=>({library:r,version:t})),"VERSION"))}
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
     */const en="firebase-heartbeat-store";let tn=null;function nn(){var e,t,n;return tn||(tn=(e="firebase-heartbeat-database",t=1,n=(e,t)=>{0===t&&e.createObjectStore(en)},new Promise(((i,r)=>{try{const s=indexedDB.open(e,t);s.onsuccess=e=>{i(new St(e.target.result))},s.onerror=e=>{var t;r(`Error opening indexedDB: ${null===(t=e.target.error)||void 0===t?void 0:t.message}`)},s.onupgradeneeded=e=>{n(new St(s.result),e.oldVersion,e.newVersion,new kt(s.transaction))}}catch(e){r(`Error opening indexedDB: ${e.message}`)}}))).catch((e=>{throw Jt.create("storage-open",{originalErrorMessage:e.message})}))),tn}async function rn(e,t){try{const n=(await nn()).transaction(en,"readwrite"),i=n.objectStore(en);return await i.put(t,sn(e)),n.complete}catch(e){throw Jt.create("storage-set",{originalErrorMessage:e.message})}}function sn(e){return`${e.name}!${e.options.appId}`}
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
     */class on{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new ln(t),this._heartbeatsCachePromise=this._storage.read().then((e=>(this._heartbeatsCache=e,e)))}async triggerHeartbeat(){const e=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),t=an();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==t&&!this._heartbeatsCache.heartbeats.some((e=>e.date===t)))return this._heartbeatsCache.heartbeats.push({date:t,agent:e}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((e=>{const t=new Date(e.date).valueOf();return Date.now()-t<=2592e6})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const e=an(),{heartbeatsToSend:t,unsentEntries:n}=function(e,t=1024){const n=[];let i=e.slice();for(const r of e){const e=n.find((e=>e.agent===r.agent));if(e){if(e.dates.push(r.date),cn(n)>t){e.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),cn(n)>t){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}(this._heartbeatsCache.heartbeats),i=it(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function an(){return(new Date).toISOString().substring(0,10)}class ln{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return"object"==typeof indexedDB&&new Promise(((e,t)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(i);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(i),e(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var e;t((null===(e=r.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}})).then((()=>!0)).catch((()=>!1))}async read(){if(await this._canUseIndexedDBPromise){const e=await async function(e){try{return(await nn()).transaction(en).objectStore(en).get(sn(e))}catch(e){throw Jt.create("storage-get",{originalErrorMessage:e.message})}}(this.app);return e||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return rn(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return rn(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}}}function cn(e){return it(JSON.stringify({version:2,heartbeats:e})).length}
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
     */var hn;hn="",Qt(new Rt("platform-logger",(e=>new Wt(e)),"PRIVATE")),Qt(new Rt("heartbeat",(e=>new on(e)),"PRIVATE")),Zt(Ut,Ht,hn),Zt(Ut,Ht,"esm2017"),Zt("fire-js","");
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
Zt("firebase","9.6.11","app");const un="@firebase/database",dn="0.12.8";
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
let pn="";
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
class fn{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){null==t?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),ft(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return null==t?null:pt(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}
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
     */class _n{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){null==t?delete this.cache_[e]:this.cache_[e]=t}get(e){return mt(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}
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
     */const mn=function(e){try{if("undefined"!=typeof window&&void 0!==window[e]){const t=window[e];return t.setItem("firebase:sentinel","cache"),t.removeItem("firebase:sentinel"),new fn(t)}}catch(e){}return new _n},gn=mn("localStorage"),yn=mn("sessionStorage"),vn=new jt("@firebase/database"),wn=function(){let e=1;return function(){return e++}}(),bn=function(e){const t=function(e){const t=[];let n=0;for(let i=0;i<e.length;i++){let r=e.charCodeAt(i);if(r>=55296&&r<=56319){const t=r-55296;i++,Xe(i<e.length,"Surrogate pair missing trail surrogate."),r=65536+(t<<10)+(e.charCodeAt(i)-56320)}r<128?t[n++]=r:r<2048?(t[n++]=r>>6|192,t[n++]=63&r|128):r<65536?(t[n++]=r>>12|224,t[n++]=r>>6&63|128,t[n++]=63&r|128):(t[n++]=r>>18|240,t[n++]=r>>12&63|128,t[n++]=r>>6&63|128,t[n++]=63&r|128)}return t}(e),n=new Ct;n.update(t);const i=n.digest();return tt.encodeByteArray(i)},Cn=function(...e){let t="";for(let n=0;n<e.length;n++){const i=e[n];Array.isArray(i)||i&&"object"==typeof i&&"number"==typeof i.length?t+=Cn.apply(null,i):t+="object"==typeof i?ft(i):i,t+=" "}return t};let In=null,En=!0;const xn=function(...e){var t,n;if(!0===En&&(En=!1,null===In&&!0===yn.get("logging_enabled")&&(t=!0,Xe(!n||!0===t||!1===t,"Can't turn on custom loggers persistently."),!0===t?(vn.logLevel=Lt.VERBOSE,In=vn.log.bind(vn),n&&yn.set("logging_enabled",!0)):"function"==typeof t?In=t:(In=null,yn.remove("logging_enabled")))),In){const t=Cn.apply(null,e);In(t)}},Tn=function(e){return function(...t){xn(e,...t)}},Sn=function(...e){const t="FIREBASE INTERNAL ERROR: "+Cn(...e);vn.error(t)},kn=function(...e){const t=`FIREBASE FATAL ERROR: ${Cn(...e)}`;throw vn.error(t),new Error(t)},Nn=function(...e){const t="FIREBASE WARNING: "+Cn(...e);vn.warn(t)},Pn=function(e){return"number"==typeof e&&(e!=e||e===Number.POSITIVE_INFINITY||e===Number.NEGATIVE_INFINITY)},Rn="[MIN_NAME]",Dn="[MAX_NAME]",On=function(e,t){if(e===t)return 0;if(e===Rn||t===Dn)return-1;if(t===Rn||e===Dn)return 1;{const n=Wn(e),i=Wn(t);return null!==n?null!==i?n-i==0?e.length-t.length:n-i:-1:null!==i?1:e<t?-1:1}},An=function(e,t){return e===t?0:e<t?-1:1},Ln=function(e,t){if(t&&e in t)return t[e];throw new Error("Missing required key ("+e+") in object: "+ft(t))},Mn=function(e){if("object"!=typeof e||null===e)return ft(e);const t=[];for(const n in e)t.push(n);t.sort();let n="{";for(let i=0;i<t.length;i++)0!==i&&(n+=","),n+=ft(t[i]),n+=":",n+=Mn(e[t[i]]);return n+="}",n},Fn=function(e,t){const n=e.length;if(n<=t)return[e];const i=[];for(let r=0;r<n;r+=t)r+t>n?i.push(e.substring(r,n)):i.push(e.substring(r,r+t));return i};function $n(e,t){for(const n in e)e.hasOwnProperty(n)&&t(n,e[n])}const qn=function(e){Xe(!Pn(e),"Invalid JSON number");const t=1023;let n,i,r,s,o;0===e?(i=0,r=0,n=1/e==-1/0?1:0):(n=e<0,(e=Math.abs(e))>=Math.pow(2,-1022)?(s=Math.min(Math.floor(Math.log(e)/Math.LN2),t),i=s+t,r=Math.round(e*Math.pow(2,52-s)-Math.pow(2,52))):(i=0,r=Math.round(e/Math.pow(2,-1074))));const a=[];for(o=52;o;o-=1)a.push(r%2?1:0),r=Math.floor(r/2);for(o=11;o;o-=1)a.push(i%2?1:0),i=Math.floor(i/2);a.push(n?1:0),a.reverse();const l=a.join("");let c="";for(o=0;o<64;o+=8){let e=parseInt(l.substr(o,8),2).toString(16);1===e.length&&(e="0"+e),c+=e}return c.toLowerCase()},jn=new RegExp("^-?(0*)\\d{1,10}$"),Wn=function(e){if(jn.test(e)){const t=Number(e);if(t>=-2147483648&&t<=2147483647)return t}return null},Un=function(e){try{e()}catch(e){setTimeout((()=>{const t=e.stack||"";throw Nn("Exception was thrown by user callback.",t),e}),Math.floor(0))}},Hn=function(e,t){const n=setTimeout(e,t);return"object"==typeof n&&n.unref&&n.unref(),n};
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
class zn{constructor(e,t){this.appName_=e,this.appCheckProvider=t,this.appCheck=null==t?void 0:t.getImmediate({optional:!0}),this.appCheck||null==t||t.get().then((e=>this.appCheck=e))}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise(((t,n)=>{setTimeout((()=>{this.appCheck?this.getToken(e).then(t,n):t(null)}),0)}))}addTokenChangeListener(e){var t;null===(t=this.appCheckProvider)||void 0===t||t.get().then((t=>t.addTokenListener(e)))}notifyForInvalidToken(){Nn(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}
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
     */class Bn{constructor(e,t,n){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=n,this.auth_=null,this.auth_=n.getImmediate({optional:!0}),this.auth_||n.onInit((e=>this.auth_=e))}getToken(e){return this.auth_?this.auth_.getToken(e).catch((e=>e&&"auth/token-not-initialized"===e.code?(xn("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(e))):new Promise(((t,n)=>{setTimeout((()=>{this.auth_?this.getToken(e).then(t,n):t(null)}),0)}))}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then((t=>t.addAuthTokenListener(e)))}removeTokenChangeListener(e){this.authProvider_.get().then((t=>t.removeAuthTokenListener(e)))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Nn(e)}}class Vn{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Vn.OWNER="owner";
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
const Yn=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Gn="websocket",Kn="long_polling";
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
class Qn{constructor(e,t,n,i,r=!1,s="",o=!1){this.secure=t,this.namespace=n,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=s,this.includeNamespaceInQueryParams=o,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=gn.get("host:"+e)||this._host}isCacheableHost(){return"s-"===this.internalHost.substr(0,2)}isCustomHost(){return"firebaseio.com"!==this._domain&&"firebaseio-demo.com"!==this._domain}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&gn.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function Jn(e,t,n){let i;if(Xe("string"==typeof t,"typeof type must == string"),Xe("object"==typeof n,"typeof params must == object"),t===Gn)i=(e.secure?"wss://":"ws://")+e.internalHost+"/.ws?";else{if(t!==Kn)throw new Error("Unknown connection type: "+t);i=(e.secure?"https://":"http://")+e.internalHost+"/.lp?"}(function(e){return e.host!==e.internalHost||e.isCustomHost()||e.includeNamespaceInQueryParams})(e)&&(n.ns=e.namespace);const r=[];return $n(n,((e,t)=>{r.push(e+"="+t)})),i+r.join("&")}
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
     */class Xn{constructor(){this.counters_={}}incrementCounter(e,t=1){mt(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return st(this.counters_)}}
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
     */const Zn={},ei={};function ti(e){const t=e.toString();return Zn[t]||(Zn[t]=new Xn),Zn[t]}
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
class ni{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const e=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let t=0;t<e.length;++t)e[t]&&Un((()=>{this.onMessage_(e[t])}));if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}
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
     */const ii="start";class ri{constructor(e,t,n,i,r,s,o){this.connId=e,this.repoInfo=t,this.applicationId=n,this.appCheckToken=i,this.authToken=r,this.transportSessionId=s,this.lastSessionId=o,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Tn(e),this.stats_=ti(t),this.urlFn=e=>(this.appCheckToken&&(e.ac=this.appCheckToken),Jn(t,Kn,e))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new ni(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout((()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null}),Math.floor(3e4)),function(e){if("complete"===document.readyState)e();else{let t=!1;const n=function(){document.body?t||(t=!0,e()):setTimeout(n,Math.floor(10))};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",(()=>{"complete"===document.readyState&&n()})),window.attachEvent("onload",n))}}((()=>{if(this.isClosed_)return;this.scriptTagHolder=new si(((...e)=>{const[t,n,i,r,s]=e;if(this.incrementIncomingBytes_(e),this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,t===ii)this.id=n,this.password=i;else{if("close"!==t)throw new Error("Unrecognized command received: "+t);n?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(n,(()=>{this.onClosed_()}))):this.onClosed_()}}),((...e)=>{const[t,n]=e;this.incrementIncomingBytes_(e),this.myPacketOrderer.handleResponse(t,n)}),(()=>{this.onClosed_()}),this.urlFn);const e={start:"t"};e.ser=Math.floor(1e8*Math.random()),this.scriptTagHolder.uniqueCallbackIdentifier&&(e.cb=this.scriptTagHolder.uniqueCallbackIdentifier),e.v="5",this.transportSessionId&&(e.s=this.transportSessionId),this.lastSessionId&&(e.ls=this.lastSessionId),this.applicationId&&(e.p=this.applicationId),this.appCheckToken&&(e.ac=this.appCheckToken),"undefined"!=typeof location&&location.hostname&&Yn.test(location.hostname)&&(e.r="f");const t=this.urlFn(e);this.log_("Connecting via long-poll to "+t),this.scriptTagHolder.addTag(t,(()=>{}))}))}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){ri.forceAllow_=!0}static forceDisallow(){ri.forceDisallow_=!0}static isAvailable(){return!!ri.forceAllow_||!(ri.forceDisallow_||"undefined"==typeof document||null==document.createElement||"object"==typeof window&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href)||"object"==typeof Windows&&"object"==typeof Windows.UI)}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=ft(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const n=nt(t),i=Fn(n,1840);for(let e=0;e<i.length;e++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[e]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const n={dframe:"t"};n.id=e,n.pw=t,this.myDisconnFrame.src=this.urlFn(n),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=ft(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class si{constructor(e,t,n,i){this.onDisconnect=n,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(1e8*Math.random()),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=wn(),window["pLPCommand"+this.uniqueCallbackIdentifier]=e,window["pRTLPCB"+this.uniqueCallbackIdentifier]=t,this.myIFrame=si.createIFrame_();let n="";if(this.myIFrame.src&&"javascript:"===this.myIFrame.src.substr(0,"javascript:".length)){n='<script>document.domain="'+document.domain+'";<\/script>'}const i="<html><body>"+n+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(i),this.myIFrame.doc.close()}catch(e){xn("frame writing exception"),e.stack&&xn(e.stack),xn(e)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",!document.body)throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";document.body.appendChild(e);try{e.contentWindow.document||xn("No IE domain setting required")}catch(t){const n=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+n+"';document.close();})())"}return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.innerHTML="",setTimeout((()=>{null!==this.myIFrame&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)}),Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e.id=this.myID,e.pw=this.myPW,e.ser=this.currentSerial;let t=this.urlFn(e),n="",i=0;for(;this.pendingSegs.length>0;){if(!(this.pendingSegs[0].d.length+30+n.length<=1870))break;{const e=this.pendingSegs.shift();n=n+"&seg"+i+"="+e.seg+"&ts"+i+"="+e.ts+"&d"+i+"="+e.d,i++}}return t+=n,this.addLongPollTag_(t,this.currentSerial),!0}return!1}enqueueSegment(e,t,n){this.pendingSegs.push({seg:e,ts:t,d:n}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const n=()=>{this.outstandingRequests.delete(t),this.newRequest_()},i=setTimeout(n,Math.floor(25e3));this.addTag(e,(()=>{clearTimeout(i),n()}))}addTag(e,t){setTimeout((()=>{try{if(!this.sendNewPolls)return;const n=this.myIFrame.doc.createElement("script");n.type="text/javascript",n.async=!0,n.src=e,n.onload=n.onreadystatechange=function(){const e=n.readyState;e&&"loaded"!==e&&"complete"!==e||(n.onload=n.onreadystatechange=null,n.parentNode&&n.parentNode.removeChild(n),t())},n.onerror=()=>{xn("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(n)}catch(e){}}),Math.floor(1))}}
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
     */let oi=null;"undefined"!=typeof MozWebSocket?oi=MozWebSocket:"undefined"!=typeof WebSocket&&(oi=WebSocket);class ai{constructor(e,t,n,i,r,s,o){this.connId=e,this.applicationId=n,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Tn(this.connId),this.stats_=ti(t),this.connURL=ai.connectionURL_(t,s,o,i),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,n,i){const r={v:"5"};return"undefined"!=typeof location&&location.hostname&&Yn.test(location.hostname)&&(r.r="f"),t&&(r.s=t),n&&(r.ls=n),i&&(r.ac=i),Jn(e,Gn,r)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,gn.set("previous_websocket_failure",!0);try{if(ct());else{const e={headers:{"X-Firebase-GMPID":this.applicationId||"","X-Firebase-AppCheck":this.appCheckToken||""}};this.mySock=new oi(this.connURL,[],e)}}catch(e){this.log_("Error instantiating WebSocket.");const t=e.message||e.data;return t&&this.log_(t),void this.onClosed_()}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=e=>{this.handleIncomingFrame(e)},this.mySock.onerror=e=>{this.log_("WebSocket error.  Closing connection.");const t=e.message||e.data;t&&this.log_(t),this.onClosed_()}}start(){}static forceDisallow(){ai.forceDisallow_=!0}static isAvailable(){let e=!1;if("undefined"!=typeof navigator&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,n=navigator.userAgent.match(t);n&&n.length>1&&parseFloat(n[1])<4.4&&(e=!0)}return!e&&null!==oi&&!ai.forceDisallow_}static previouslyFailed(){return gn.isInMemoryStorage||!0===gn.get("previous_websocket_failure")}markConnectionHealthy(){gn.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const e=this.frames.join("");this.frames=null;const t=pt(e);this.onMessage(t)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(Xe(null===this.frames,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(null===this.mySock)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),null!==this.frames)this.appendFrame_(t);else{const e=this.extractFrameCount_(t);null!==e&&this.appendFrame_(e)}}send(e){this.resetKeepAlive();const t=ft(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const n=Fn(t,16384);n.length>1&&this.sendString_(String(n.length));for(let e=0;e<n.length;e++)this.sendString_(n[e])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval((()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()}),Math.floor(45e3))}sendString_(e){try{this.mySock.send(e)}catch(e){this.log_("Exception thrown from WebSocket.send():",e.message||e.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}ai.responsesRequiredToBeHealthy=2,ai.healthyTimeout=3e4;
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
class li{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[ri,ai]}initTransports_(e){const t=ai&&ai.isAvailable();let n=t&&!ai.previouslyFailed();if(e.webSocketOnly&&(t||Nn("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),n=!0),n)this.transports_=[ai];else{const e=this.transports_=[];for(const t of li.ALL_TRANSPORTS)t&&t.isAvailable()&&e.push(t)}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}
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
     */class ci{constructor(e,t,n,i,r,s,o,a,l,c){this.id=e,this.repoInfo_=t,this.applicationId_=n,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=s,this.onReady_=o,this.onDisconnect_=a,this.onKill_=l,this.lastSessionId=c,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Tn("c:"+this.id+":"),this.transportManager_=new li(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),n=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout((()=>{this.conn_&&this.conn_.open(t,n)}),Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=Hn((()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>102400?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>10240?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))}),Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{2!==this.state_&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if("t"in e){const t=e.t;"a"===t?this.upgradeIfSecondaryHealthy_():"r"===t?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),this.tx_!==this.secondaryConn_&&this.rx_!==this.secondaryConn_||this.close()):"o"===t&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=Ln("t",e),n=Ln("d",e);if("c"===t)this.onSecondaryControl_(n);else{if("d"!==t)throw new Error("Unknown protocol layer: "+t);this.pendingDataMessages.push(n)}}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:"p",d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:"a",d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:"n",d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=Ln("t",e),n=Ln("d",e);"c"===t?this.onControl_(n):"d"===t&&this.onDataMessage_(n)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=Ln("t",e);if("d"in e){const n=e.d;if("h"===t)this.onHandshake_(n);else if("n"===t){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let e=0;e<this.pendingDataMessages.length;++e)this.onDataMessage_(this.pendingDataMessages[e]);this.pendingDataMessages=[],this.tryCleanupConnection()}else"s"===t?this.onConnectionShutdown_(n):"r"===t?this.onReset_(n):"e"===t?Sn("Server Error: "+n):"o"===t?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Sn("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,n=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,0===this.state_&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),"5"!==n&&Nn("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),n=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,n),Hn((()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())}),Math.floor(6e4))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,1===this.state_?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),0===this.primaryResponsesRequired_?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Hn((()=>{this.sendPingOnPrimaryIfNecessary_()}),Math.floor(5e3))}sendPingOnPrimaryIfNecessary_(){this.isHealthy_||1!==this.state_||(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:"p",d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,this.tx_!==e&&this.rx_!==e||this.close()}onConnectionLost_(e){this.conn_=null,e||0!==this.state_?1===this.state_&&this.log_("Realtime connection lost."):(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(gn.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(1!==this.state_)throw"Connection is not connected";this.tx_.send(e)}close(){2!==this.state_&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}
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
     */class hi{put(e,t,n,i){}merge(e,t,n,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,n){}onDisconnectMerge(e,t,n){}onDisconnectCancel(e,t){}reportStats(e){}}
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
     */class ui{constructor(e){this.allowedEvents_=e,this.listeners_={},Xe(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const n=[...this.listeners_[e]];for(let e=0;e<n.length;e++)n[e].callback.apply(n[e].context,t)}}on(e,t,n){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:n});const i=this.getInitialEvent(e);i&&t.apply(n,i)}off(e,t,n){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let e=0;e<i.length;e++)if(i[e].callback===t&&(!n||n===i[e].context))return void i.splice(e,1)}validateEventType_(e){Xe(this.allowedEvents_.find((t=>t===e)),"Unknown event: "+e)}}
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
     */class di extends ui{constructor(){super(["online"]),this.online_=!0,"undefined"==typeof window||void 0===window.addEventListener||lt()||(window.addEventListener("online",(()=>{this.online_||(this.online_=!0,this.trigger("online",!0))}),!1),window.addEventListener("offline",(()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))}),!1))}static getInstance(){return new di}getInitialEvent(e){return Xe("online"===e,"Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}
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
     */class pi{constructor(e,t){if(void 0===t){this.pieces_=e.split("/");let t=0;for(let e=0;e<this.pieces_.length;e++)this.pieces_[e].length>0&&(this.pieces_[t]=this.pieces_[e],t++);this.pieces_.length=t,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)""!==this.pieces_[t]&&(e+="/"+this.pieces_[t]);return e||"/"}}function fi(){return new pi("")}function _i(e){return e.pieceNum_>=e.pieces_.length?null:e.pieces_[e.pieceNum_]}function mi(e){return e.pieces_.length-e.pieceNum_}function gi(e){let t=e.pieceNum_;return t<e.pieces_.length&&t++,new pi(e.pieces_,t)}function yi(e){return e.pieceNum_<e.pieces_.length?e.pieces_[e.pieces_.length-1]:null}function vi(e,t=0){return e.pieces_.slice(e.pieceNum_+t)}function wi(e){if(e.pieceNum_>=e.pieces_.length)return null;const t=[];for(let n=e.pieceNum_;n<e.pieces_.length-1;n++)t.push(e.pieces_[n]);return new pi(t,0)}function bi(e,t){const n=[];for(let t=e.pieceNum_;t<e.pieces_.length;t++)n.push(e.pieces_[t]);if(t instanceof pi)for(let e=t.pieceNum_;e<t.pieces_.length;e++)n.push(t.pieces_[e]);else{const e=t.split("/");for(let t=0;t<e.length;t++)e[t].length>0&&n.push(e[t])}return new pi(n,0)}function Ci(e){return e.pieceNum_>=e.pieces_.length}function Ii(e,t){const n=_i(e),i=_i(t);if(null===n)return t;if(n===i)return Ii(gi(e),gi(t));throw new Error("INTERNAL ERROR: innerPath ("+t+") is not within outerPath ("+e+")")}function Ei(e,t){if(mi(e)!==mi(t))return!1;for(let n=e.pieceNum_,i=t.pieceNum_;n<=e.pieces_.length;n++,i++)if(e.pieces_[n]!==t.pieces_[i])return!1;return!0}function xi(e,t){let n=e.pieceNum_,i=t.pieceNum_;if(mi(e)>mi(t))return!1;for(;n<e.pieces_.length;){if(e.pieces_[n]!==t.pieces_[i])return!1;++n,++i}return!0}class Ti{constructor(e,t){this.errorPrefix_=t,this.parts_=vi(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let e=0;e<this.parts_.length;e++)this.byteLength_+=Et(this.parts_[e]);Si(this)}}function Si(e){if(e.byteLength_>768)throw new Error(e.errorPrefix_+"has a key path longer than 768 bytes ("+e.byteLength_+").");if(e.parts_.length>32)throw new Error(e.errorPrefix_+"path specified exceeds the maximum depth that can be written (32) or object contains a cycle "+ki(e))}function ki(e){return 0===e.parts_.length?"":"in property '"+e.parts_.join(".")+"'"}
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
     */class Ni extends ui{constructor(){let e,t;super(["visible"]),"undefined"!=typeof document&&void 0!==document.addEventListener&&(void 0!==document.hidden?(t="visibilitychange",e="hidden"):void 0!==document.mozHidden?(t="mozvisibilitychange",e="mozHidden"):void 0!==document.msHidden?(t="msvisibilitychange",e="msHidden"):void 0!==document.webkitHidden&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,(()=>{const t=!document[e];t!==this.visible_&&(this.visible_=t,this.trigger("visible",t))}),!1)}static getInstance(){return new Ni}getInitialEvent(e){return Xe("visible"===e,"Unknown event type: "+e),[this.visible_]}}
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
     */const Pi=1e3;class Ri extends hi{constructor(e,t,n,i,r,s,o,a){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=n,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=s,this.appCheckTokenProvider_=o,this.authOverride_=a,this.id=Ri.nextPersistentConnectionId_++,this.log_=Tn("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Pi,this.maxReconnectDelay_=3e5,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,a&&!ct())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Ni.getInstance().on("visible",this.onVisible_,this),-1===e.host.indexOf("fblocal")&&di.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,n){const i=++this.requestNumber_,r={r:i,a:e,b:t};this.log_(ft(r)),Xe(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),n&&(this.requestCBHash_[i]=n)}get(e){this.initConnection_();const t=new at,n={p:e._path.toString(),q:e._queryObject},i={action:"g",request:n,onComplete:e=>{const i=e.d;"ok"===e.s?(this.onDataUpdate_(n.p,i,!1,null),t.resolve(i)):t.reject(i)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_||setTimeout((()=>{const e=this.outstandingGets_[r];void 0!==e&&i===e&&(delete this.outstandingGets_[r],this.outstandingGetCount_--,0===this.outstandingGetCount_&&(this.outstandingGets_=[]),this.log_("get "+r+" timed out on connection"),t.reject(new Error("Client is offline.")))}),3e3),this.connected_&&this.sendGet_(r),t.promise}listen(e,t,n,i){this.initConnection_();const r=e._queryIdentifier,s=e._path.toString();this.log_("Listen called for "+s+" "+r),this.listens.has(s)||this.listens.set(s,new Map),Xe(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),Xe(!this.listens.get(s).has(r),"listen() called twice for same path/queryId.");const o={onComplete:i,hashFn:t,query:e,tag:n};this.listens.get(s).set(r,o),this.connected_&&this.sendListen_(o)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,(n=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,0===this.outstandingGetCount_&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(n)}))}sendListen_(e){const t=e.query,n=t._path.toString(),i=t._queryIdentifier;this.log_("Listen on "+n+" for "+i);const r={p:n};e.tag&&(r.q=t._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest("q",r,(r=>{const s=r.d,o=r.s;Ri.warnOnListenWarnings_(s,t);(this.listens.get(n)&&this.listens.get(n).get(i))===e&&(this.log_("listen response",r),"ok"!==o&&this.removeListen_(n,i),e.onComplete&&e.onComplete(o,s))}))}static warnOnListenWarnings_(e,t){if(e&&"object"==typeof e&&mt(e,"w")){const n=gt(e,"w");if(Array.isArray(n)&&~n.indexOf("no_index")){const e='".indexOn": "'+t._queryParams.getIndex().toString()+'"',n=t._path.toString();Nn(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${e} at ${n} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},(()=>{})),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&40===e.length||function(e){const t=_t(e).claims;return"object"==typeof t&&!0===t.admin}(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=3e4)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},(()=>{}))}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=function(e){const t=_t(e).claims;return!!t&&"object"==typeof t&&t.hasOwnProperty("iat")}(e)?"auth":"gauth",n={cred:e};null===this.authOverride_?n.noauth=!0:"object"==typeof this.authOverride_&&(n.authvar=this.authOverride_),this.sendRequest(t,n,(t=>{const n=t.s,i=t.d||"error";this.authToken_===e&&("ok"===n?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(n,i))}))}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},(e=>{const t=e.s,n=e.d||"error";"ok"===t?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,n)}))}unlisten(e,t){const n=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+n+" "+i),Xe(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query");this.removeListen_(n,i)&&this.connected_&&this.sendUnlisten_(n,i,e._queryObject,t)}sendUnlisten_(e,t,n,i){this.log_("Unlisten on "+e+" for "+t);const r={p:e};i&&(r.q=n,r.t=i),this.sendRequest("n",r)}onDisconnectPut(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:n})}onDisconnectMerge(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:n})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,n,i){const r={p:t,d:n};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,(e=>{i&&setTimeout((()=>{i(e.s,e.d)}),Math.floor(0))}))}put(e,t,n,i){this.putInternal("p",e,t,n,i)}merge(e,t,n,i){this.putInternal("m",e,t,n,i)}putInternal(e,t,n,i,r){this.initConnection_();const s={p:t,d:n};void 0!==r&&(s.h=r),this.outstandingPuts_.push({action:e,request:s,onComplete:i}),this.outstandingPutCount_++;const o=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(o):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,n=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,n,(n=>{this.log_(t+" response",n),delete this.outstandingPuts_[e],this.outstandingPutCount_--,0===this.outstandingPutCount_&&(this.outstandingPuts_=[]),i&&i(n.s,n.d)}))}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,(e=>{if("ok"!==e.s){const t=e.d;this.log_("reportStats","Error sending stats: "+t)}}))}}onDataMessage_(e){if("r"in e){this.log_("from server: "+ft(e));const t=e.r,n=this.requestCBHash_[t];n&&(delete this.requestCBHash_[t],n(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),"d"===e?this.onDataUpdate_(t.p,t.d,!1,t.t):"m"===e?this.onDataUpdate_(t.p,t.d,!0,t.t):"c"===e?this.onListenRevoked_(t.p,t.q):"ac"===e?this.onAuthRevoked_(t.s,t.d):"apc"===e?this.onAppCheckRevoked_(t.s,t.d):"sd"===e?this.onSecurityDebugPacket_(t):Sn("Unrecognized action received from server: "+ft(e)+"\nAre you using the latest client?")}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=(new Date).getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){Xe(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout((()=>{this.establishConnectionTimer_=null,this.establishConnection_()}),Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Pi,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Pi,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){if(this.visible_){if(this.lastConnectionEstablishedTime_){(new Date).getTime()-this.lastConnectionEstablishedTime_>3e4&&(this.reconnectDelay_=Pi),this.lastConnectionEstablishedTime_=null}}else this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=(new Date).getTime();const e=(new Date).getTime()-this.lastConnectionAttemptTime_;let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,1.3*this.reconnectDelay_)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=(new Date).getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),n=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+Ri.nextConnectionId_++,r=this.lastSessionId;let s=!1,o=null;const a=function(){o?o.close():(s=!0,n())},l=function(e){Xe(o,"sendRequest call when we're not connected not allowed."),o.sendRequest(e)};this.realtime_={close:a,sendRequest:l};const c=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[a,l]=await Promise.all([this.authTokenProvider_.getToken(c),this.appCheckTokenProvider_.getToken(c)]);s?xn("getToken() completed but was canceled"):(xn("getToken() completed. Creating connection."),this.authToken_=a&&a.accessToken,this.appCheckToken_=l&&l.token,o=new ci(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,n,(e=>{Nn(e+" ("+this.repoInfo_.toString()+")"),this.interrupt("server_kill")}),r))}catch(e){this.log_("Failed to get token: "+e),s||(this.repoInfo_.nodeAdmin&&Nn(e),a())}}}interrupt(e){xn("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){xn("Resuming connection for reason: "+e),delete this.interruptReasons_[e],yt(this.interruptReasons_)&&(this.reconnectDelay_=Pi,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-(new Date).getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}0===this.outstandingPutCount_&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let n;n=t?t.map((e=>Mn(e))).join("$"):"default";const i=this.removeListen_(e,n);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,t){const n=new pi(e).toString();let i;if(this.listens.has(n)){const e=this.listens.get(n);i=e.get(t),e.delete(t),0===e.size&&this.listens.delete(n)}else i=void 0;return i}onAuthRevoked_(e,t){xn("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),"invalid_token"!==e&&"permission_denied"!==e||(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=3&&(this.reconnectDelay_=3e4,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){xn("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,"invalid_token"!==e&&"permission_denied"!==e||(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=3&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace("\n","\nFIREBASE: "))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};e["sdk.js."+pn.replace(/\./g,"-")]=1,lt()?e["framework.cordova"]=1:"object"==typeof navigator&&"ReactNative"===navigator.product&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=di.getInstance().currentlyOnline();return yt(this.interruptReasons_)&&e}}Ri.nextPersistentConnectionId_=0,Ri.nextConnectionId_=0;
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
class Di{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new Di(e,t)}}
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
     */class Oi{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const n=new Di(Rn,e),i=new Di(Rn,t);return 0!==this.compare(n,i)}minPost(){return Di.MIN}}
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
     */let Ai;class Li extends Oi{static get __EMPTY_NODE(){return Ai}static set __EMPTY_NODE(e){Ai=e}compare(e,t){return On(e.name,t.name)}isDefinedOn(e){throw Ze("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return Di.MIN}maxPost(){return new Di(Dn,Ai)}makePost(e,t){return Xe("string"==typeof e,"KeyIndex indexValue must always be a string."),new Di(e,Ai)}toString(){return".key"}}const Mi=new Li;
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
     */class Fi{constructor(e,t,n,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let s=1;for(;!e.isEmpty();)if(e=e,s=t?n(e.key,t):1,i&&(s*=-1),s<0)e=this.isReverse_?e.left:e.right;else{if(0===s){this.nodeStack_.push(e);break}this.nodeStack_.push(e),e=this.isReverse_?e.right:e.left}}getNext(){if(0===this.nodeStack_.length)return null;let e,t=this.nodeStack_.pop();if(e=this.resultGenerator_?this.resultGenerator_(t.key,t.value):{key:t.key,value:t.value},this.isReverse_)for(t=t.left;!t.isEmpty();)this.nodeStack_.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack_.push(t),t=t.left;return e}hasNext(){return this.nodeStack_.length>0}peek(){if(0===this.nodeStack_.length)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class $i{constructor(e,t,n,i,r){this.key=e,this.value=t,this.color=null!=n?n:$i.RED,this.left=null!=i?i:qi.EMPTY_NODE,this.right=null!=r?r:qi.EMPTY_NODE}copy(e,t,n,i,r){return new $i(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=i?i:this.left,null!=r?r:this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let i=this;const r=n(e,i.key);return i=r<0?i.copy(null,null,null,i.left.insert(e,t,n),null):0===r?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,n)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return qi.EMPTY_NODE;let e=this;return e.left.isRed_()||e.left.left.isRed_()||(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let n,i;if(n=this,t(e,n.key)<0)n.left.isEmpty()||n.left.isRed_()||n.left.left.isRed_()||(n=n.moveRedLeft_()),n=n.copy(null,null,null,n.left.remove(e,t),null);else{if(n.left.isRed_()&&(n=n.rotateRight_()),n.right.isEmpty()||n.right.isRed_()||n.right.left.isRed_()||(n=n.moveRedRight_()),0===t(e,n.key)){if(n.right.isEmpty())return qi.EMPTY_NODE;i=n.right.min_(),n=n.copy(i.key,i.value,null,null,n.right.removeMin_())}n=n.copy(null,null,null,null,n.right.remove(e,t))}return n.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,$i.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,$i.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}$i.RED=!0,$i.BLACK=!1;class qi{constructor(e,t=qi.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new qi(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,$i.BLACK,null,null))}remove(e){return new qi(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,$i.BLACK,null,null))}get(e){let t,n=this.root_;for(;!n.isEmpty();){if(t=this.comparator_(e,n.key),0===t)return n.value;t<0?n=n.left:t>0&&(n=n.right)}return null}getPredecessorKey(e){let t,n=this.root_,i=null;for(;!n.isEmpty();){if(t=this.comparator_(e,n.key),0===t){if(n.left.isEmpty())return i?i.key:null;for(n=n.left;!n.right.isEmpty();)n=n.right;return n.key}t<0?n=n.left:t>0&&(i=n,n=n.right)}throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Fi(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new Fi(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new Fi(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new Fi(this.root_,null,this.comparator_,!0,e)}}
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
function ji(e,t){return On(e.name,t.name)}function Wi(e,t){return On(e,t)}
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
     */let Ui;qi.EMPTY_NODE=new class{copy(e,t,n,i,r){return this}insert(e,t,n){return new $i(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}};const Hi=function(e){return"number"==typeof e?"number:"+qn(e):"string:"+e},zi=function(e){if(e.isLeafNode()){const t=e.val();Xe("string"==typeof t||"number"==typeof t||"object"==typeof t&&mt(t,".sv"),"Priority must be a string or number.")}else Xe(e===Ui||e.isEmpty(),"priority of unexpected type.");Xe(e===Ui||e.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};
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
let Bi,Vi,Yi;class Gi{constructor(e,t=Gi.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,Xe(void 0!==this.value_&&null!==this.value_,"LeafNode shouldn't be created with null/undefined value."),zi(this.priorityNode_)}static set __childrenNodeConstructor(e){Bi=e}static get __childrenNodeConstructor(){return Bi}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Gi(this.value_,e)}getImmediateChild(e){return".priority"===e?this.priorityNode_:Gi.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return Ci(e)?this:".priority"===_i(e)?this.priorityNode_:Gi.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return".priority"===e?this.updatePriority(t):t.isEmpty()&&".priority"!==e?this:Gi.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const n=_i(e);return null===n?t:t.isEmpty()&&".priority"!==n?this:(Xe(".priority"!==n||1===mi(e),".priority must be the last token in a path"),this.updateImmediateChild(n,Gi.__childrenNodeConstructor.EMPTY_NODE.updateChild(gi(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(null===this.lazyHash_){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Hi(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",e+="number"===t?qn(this.value_):this.value_,this.lazyHash_=bn(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Gi.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Gi.__childrenNodeConstructor?-1:(Xe(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,n=typeof this.value_,i=Gi.VALUE_TYPE_ORDER.indexOf(t),r=Gi.VALUE_TYPE_ORDER.indexOf(n);return Xe(i>=0,"Unknown leaf type: "+t),Xe(r>=0,"Unknown leaf type: "+n),i===r?"object"===n?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}return!1}}Gi.VALUE_TYPE_ORDER=["object","boolean","number","string"];const Ki=new class extends Oi{compare(e,t){const n=e.node.getPriority(),i=t.node.getPriority(),r=n.compareTo(i);return 0===r?On(e.name,t.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return Di.MIN}maxPost(){return new Di(Dn,new Gi("[PRIORITY-POST]",Yi))}makePost(e,t){const n=Vi(e);return new Di(t,new Gi("[PRIORITY-POST]",n))}toString(){return".priority"}},Qi=Math.log(2);
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
     */class Ji{constructor(e){var t;this.count=(t=e+1,parseInt(Math.log(t)/Qi,10)),this.current_=this.count-1;const n=(i=this.count,parseInt(Array(i+1).join("1"),2));var i;this.bits_=e+1&n}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Xi=function(e,t,n,i){e.sort(t);const r=function(t,i){const s=i-t;let o,a;if(0===s)return null;if(1===s)return o=e[t],a=n?n(o):o,new $i(a,o.node,$i.BLACK,null,null);{const l=parseInt(s/2,10)+t,c=r(t,l),h=r(l+1,i);return o=e[l],a=n?n(o):o,new $i(a,o.node,$i.BLACK,c,h)}},s=function(t){let i=null,s=null,o=e.length;const a=function(t,i){const s=o-t,a=o;o-=t;const c=r(s+1,a),h=e[s],u=n?n(h):h;l(new $i(u,h.node,i,null,c))},l=function(e){i?(i.left=e,i=e):(s=e,i=e)};for(let e=0;e<t.count;++e){const n=t.nextBitIsOne(),i=Math.pow(2,t.count-(e+1));n?a(i,$i.BLACK):(a(i,$i.BLACK),a(i,$i.RED))}return s}(new Ji(e.length));return new qi(i||t,s)};
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
     */let Zi;const er={};class tr{constructor(e,t){this.indexes_=e,this.indexSet_=t}static get Default(){return Xe(er&&Ki,"ChildrenNode.ts has not been loaded"),Zi=Zi||new tr({".priority":er},{".priority":Ki}),Zi}get(e){const t=gt(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof qi?t:null}hasIndex(e){return mt(this.indexSet_,e.toString())}addIndex(e,t){Xe(e!==Mi,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const n=[];let i=!1;const r=t.getIterator(Di.Wrap);let s,o=r.getNext();for(;o;)i=i||e.isDefinedOn(o.node),n.push(o),o=r.getNext();s=i?Xi(n,e.getCompare()):er;const a=e.toString(),l=Object.assign({},this.indexSet_);l[a]=e;const c=Object.assign({},this.indexes_);return c[a]=s,new tr(c,l)}addToIndexes(e,t){const n=vt(this.indexes_,((n,i)=>{const r=gt(this.indexSet_,i);if(Xe(r,"Missing index implementation for "+i),n===er){if(r.isDefinedOn(e.node)){const n=[],i=t.getIterator(Di.Wrap);let s=i.getNext();for(;s;)s.name!==e.name&&n.push(s),s=i.getNext();return n.push(e),Xi(n,r.getCompare())}return er}{const i=t.get(e.name);let r=n;return i&&(r=r.remove(new Di(e.name,i))),r.insert(e,e.node)}}));return new tr(n,this.indexSet_)}removeFromIndexes(e,t){const n=vt(this.indexes_,(n=>{if(n===er)return n;{const i=t.get(e.name);return i?n.remove(new Di(e.name,i)):n}}));return new tr(n,this.indexSet_)}}
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
     */let nr;class ir{constructor(e,t,n){this.children_=e,this.priorityNode_=t,this.indexMap_=n,this.lazyHash_=null,this.priorityNode_&&zi(this.priorityNode_),this.children_.isEmpty()&&Xe(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return nr||(nr=new ir(new qi(Wi),null,tr.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||nr}updatePriority(e){return this.children_.isEmpty()?this:new ir(this.children_,e,this.indexMap_)}getImmediateChild(e){if(".priority"===e)return this.getPriority();{const t=this.children_.get(e);return null===t?nr:t}}getChild(e){const t=_i(e);return null===t?this:this.getImmediateChild(t).getChild(gi(e))}hasChild(e){return null!==this.children_.get(e)}updateImmediateChild(e,t){if(Xe(t,"We should always be passing snapshot nodes"),".priority"===e)return this.updatePriority(t);{const n=new Di(e,t);let i,r;t.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(n,this.children_)):(i=this.children_.insert(e,t),r=this.indexMap_.addToIndexes(n,this.children_));const s=i.isEmpty()?nr:this.priorityNode_;return new ir(i,s,r)}}updateChild(e,t){const n=_i(e);if(null===n)return t;{Xe(".priority"!==_i(e)||1===mi(e),".priority must be the last token in a path");const i=this.getImmediateChild(n).updateChild(gi(e),t);return this.updateImmediateChild(n,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let n=0,i=0,r=!0;if(this.forEachChild(Ki,((s,o)=>{t[s]=o.val(e),n++,r&&ir.INTEGER_REGEXP_.test(s)?i=Math.max(i,Number(s)):r=!1})),!e&&r&&i<2*n){const e=[];for(const n in t)e[n]=t[n];return e}return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(null===this.lazyHash_){let e="";this.getPriority().isEmpty()||(e+="priority:"+Hi(this.getPriority().val())+":"),this.forEachChild(Ki,((t,n)=>{const i=n.hash();""!==i&&(e+=":"+t+":"+i)})),this.lazyHash_=""===e?"":bn(e)}return this.lazyHash_}getPredecessorChildName(e,t,n){const i=this.resolveIndex_(n);if(i){const n=i.getPredecessorKey(new Di(e,t));return n?n.name:null}return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const e=t.minKey();return e&&e.name}return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new Di(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const e=t.maxKey();return e&&e.name}return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new Di(t,this.children_.get(t)):null}forEachChild(e,t){const n=this.resolveIndex_(e);return n?n.inorderTraversal((e=>t(e.name,e.node))):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const n=this.resolveIndex_(t);if(n)return n.getIteratorFrom(e,(e=>e));{const n=this.children_.getIteratorFrom(e.name,Di.Wrap);let i=n.peek();for(;null!=i&&t.compare(i,e)<0;)n.getNext(),i=n.peek();return n}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const n=this.resolveIndex_(t);if(n)return n.getReverseIteratorFrom(e,(e=>e));{const n=this.children_.getReverseIteratorFrom(e.name,Di.Wrap);let i=n.peek();for(;null!=i&&t.compare(i,e)>0;)n.getNext(),i=n.peek();return n}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===rr?-1:0}withIndex(e){if(e===Mi||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new ir(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===Mi||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority())){if(this.children_.count()===t.children_.count()){const e=this.getIterator(Ki),n=t.getIterator(Ki);let i=e.getNext(),r=n.getNext();for(;i&&r;){if(i.name!==r.name||!i.node.equals(r.node))return!1;i=e.getNext(),r=n.getNext()}return null===i&&null===r}return!1}return!1}}resolveIndex_(e){return e===Mi?null:this.indexMap_.get(e.toString())}}ir.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;const rr=new class extends ir{constructor(){super(new qi(Wi),ir.EMPTY_NODE,tr.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return ir.EMPTY_NODE}isEmpty(){return!1}};Object.defineProperties(Di,{MIN:{value:new Di(Rn,ir.EMPTY_NODE)},MAX:{value:new Di(Dn,rr)}}),Li.__EMPTY_NODE=ir.EMPTY_NODE,Gi.__childrenNodeConstructor=ir,Ui=rr,function(e){Yi=e}(rr);function sr(e,t=null){if(null===e)return ir.EMPTY_NODE;if("object"==typeof e&&".priority"in e&&(t=e[".priority"]),Xe(null===t||"string"==typeof t||"number"==typeof t||"object"==typeof t&&".sv"in t,"Invalid priority type found: "+typeof t),"object"==typeof e&&".value"in e&&null!==e[".value"]&&(e=e[".value"]),"object"!=typeof e||".sv"in e){return new Gi(e,sr(t))}if(e instanceof Array){let n=ir.EMPTY_NODE;return $n(e,((t,i)=>{if(mt(e,t)&&"."!==t.substring(0,1)){const e=sr(i);!e.isLeafNode()&&e.isEmpty()||(n=n.updateImmediateChild(t,e))}})),n.updatePriority(sr(t))}{const n=[];let i=!1;if($n(e,((e,t)=>{if("."!==e.substring(0,1)){const r=sr(t);r.isEmpty()||(i=i||!r.getPriority().isEmpty(),n.push(new Di(e,r)))}})),0===n.length)return ir.EMPTY_NODE;const r=Xi(n,ji,(e=>e.name),Wi);if(i){const e=Xi(n,Ki.getCompare());return new ir(r,sr(t),new tr({".priority":e},{".priority":Ki}))}return new ir(r,sr(t),tr.Default)}}!function(e){Vi=e}(sr);
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
class or extends Oi{constructor(e){super(),this.indexPath_=e,Xe(!Ci(e)&&".priority"!==_i(e),"Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const n=this.extractChild(e.node),i=this.extractChild(t.node),r=n.compareTo(i);return 0===r?On(e.name,t.name):r}makePost(e,t){const n=sr(e),i=ir.EMPTY_NODE.updateChild(this.indexPath_,n);return new Di(t,i)}maxPost(){const e=ir.EMPTY_NODE.updateChild(this.indexPath_,rr);return new Di(Dn,e)}toString(){return vi(this.indexPath_,0).join("/")}}
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
     */const ar=new class extends Oi{compare(e,t){const n=e.node.compareTo(t.node);return 0===n?On(e.name,t.name):n}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return Di.MIN}maxPost(){return Di.MAX}makePost(e,t){const n=sr(e);return new Di(t,n)}toString(){return".value"}};
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
     */function lr(e,t){return{type:"child_added",snapshotNode:t,childName:e}}function cr(e,t){return{type:"child_removed",snapshotNode:t,childName:e}}function hr(e,t,n){return{type:"child_changed",snapshotNode:t,childName:e,oldSnap:n}}
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
class ur{constructor(e){this.index_=e}updateChild(e,t,n,i,r,s){Xe(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const o=e.getImmediateChild(t);return o.getChild(i).equals(n.getChild(i))&&o.isEmpty()===n.isEmpty()?e:(null!=s&&(n.isEmpty()?e.hasChild(t)?s.trackChildChange(cr(t,o)):Xe(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):o.isEmpty()?s.trackChildChange(lr(t,n)):s.trackChildChange(hr(t,n,o))),e.isLeafNode()&&n.isEmpty()?e:e.updateImmediateChild(t,n).withIndex(this.index_))}updateFullNode(e,t,n){return null!=n&&(e.isLeafNode()||e.forEachChild(Ki,((e,i)=>{t.hasChild(e)||n.trackChildChange(cr(e,i))})),t.isLeafNode()||t.forEachChild(Ki,((t,i)=>{if(e.hasChild(t)){const r=e.getImmediateChild(t);r.equals(i)||n.trackChildChange(hr(t,i,r))}else n.trackChildChange(lr(t,i))}))),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?ir.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}
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
     */class dr{constructor(e){this.indexedFilter_=new ur(e.getIndex()),this.index_=e.getIndex(),this.startPost_=dr.getStartPost_(e),this.endPost_=dr.getEndPost_(e)}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){return this.index_.compare(this.getStartPost(),e)<=0&&this.index_.compare(e,this.getEndPost())<=0}updateChild(e,t,n,i,r,s){return this.matches(new Di(t,n))||(n=ir.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,n,i,r,s)}updateFullNode(e,t,n){t.isLeafNode()&&(t=ir.EMPTY_NODE);let i=t.withIndex(this.index_);i=i.updatePriority(ir.EMPTY_NODE);const r=this;return t.forEachChild(Ki,((e,t)=>{r.matches(new Di(e,t))||(i=i.updateImmediateChild(e,ir.EMPTY_NODE))})),this.indexedFilter_.updateFullNode(e,i,n)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}return e.getIndex().maxPost()}}
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
     */class pr{constructor(e){this.rangedFilter_=new dr(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft()}updateChild(e,t,n,i,r,s){return this.rangedFilter_.matches(new Di(t,n))||(n=ir.EMPTY_NODE),e.getImmediateChild(t).equals(n)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,n,i,r,s):this.fullLimitUpdateChild_(e,t,n,r,s)}updateFullNode(e,t,n){let i;if(t.isLeafNode()||t.isEmpty())i=ir.EMPTY_NODE.withIndex(this.index_);else if(2*this.limit_<t.numChildren()&&t.isIndexed(this.index_)){let e;i=ir.EMPTY_NODE.withIndex(this.index_),e=this.reverse_?t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let n=0;for(;e.hasNext()&&n<this.limit_;){const t=e.getNext();let r;if(r=this.reverse_?this.index_.compare(this.rangedFilter_.getStartPost(),t)<=0:this.index_.compare(t,this.rangedFilter_.getEndPost())<=0,!r)break;i=i.updateImmediateChild(t.name,t.node),n++}}else{let e,n,r,s;if(i=t.withIndex(this.index_),i=i.updatePriority(ir.EMPTY_NODE),this.reverse_){s=i.getReverseIterator(this.index_),e=this.rangedFilter_.getEndPost(),n=this.rangedFilter_.getStartPost();const t=this.index_.getCompare();r=(e,n)=>t(n,e)}else s=i.getIterator(this.index_),e=this.rangedFilter_.getStartPost(),n=this.rangedFilter_.getEndPost(),r=this.index_.getCompare();let o=0,a=!1;for(;s.hasNext();){const t=s.getNext();!a&&r(e,t)<=0&&(a=!0);a&&o<this.limit_&&r(t,n)<=0?o++:i=i.updateImmediateChild(t.name,ir.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,n)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,n,i,r){let s;if(this.reverse_){const e=this.index_.getCompare();s=(t,n)=>e(n,t)}else s=this.index_.getCompare();const o=e;Xe(o.numChildren()===this.limit_,"");const a=new Di(t,n),l=this.reverse_?o.getFirstChild(this.index_):o.getLastChild(this.index_),c=this.rangedFilter_.matches(a);if(o.hasChild(t)){const e=o.getImmediateChild(t);let h=i.getChildAfterChild(this.index_,l,this.reverse_);for(;null!=h&&(h.name===t||o.hasChild(h.name));)h=i.getChildAfterChild(this.index_,h,this.reverse_);const u=null==h?1:s(h,a);if(c&&!n.isEmpty()&&u>=0)return null!=r&&r.trackChildChange(hr(t,n,e)),o.updateImmediateChild(t,n);{null!=r&&r.trackChildChange(cr(t,e));const n=o.updateImmediateChild(t,ir.EMPTY_NODE);return null!=h&&this.rangedFilter_.matches(h)?(null!=r&&r.trackChildChange(lr(h.name,h.node)),n.updateImmediateChild(h.name,h.node)):n}}return n.isEmpty()?e:c&&s(l,a)>=0?(null!=r&&(r.trackChildChange(cr(l.name,l.node)),r.trackChildChange(lr(t,n))),o.updateImmediateChild(t,n).updateImmediateChild(l.name,ir.EMPTY_NODE)):e}}
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
     */class fr{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Ki}hasStart(){return this.startSet_}hasStartAfter(){return this.startAfterSet_}hasEndBefore(){return this.endBeforeSet_}isViewFromLeft(){return""===this.viewFrom_?this.startSet_:"l"===this.viewFrom_}getIndexStartValue(){return Xe(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return Xe(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Rn}hasEnd(){return this.endSet_}getIndexEndValue(){return Xe(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return Xe(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Dn}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&""!==this.viewFrom_}getLimit(){return Xe(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Ki}copy(){const e=new fr;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function _r(e){const t={};if(e.isDefault())return t;let n;return e.index_===Ki?n="$priority":e.index_===ar?n="$value":e.index_===Mi?n="$key":(Xe(e.index_ instanceof or,"Unrecognized index type!"),n=e.index_.toString()),t.orderBy=ft(n),e.startSet_&&(t.startAt=ft(e.indexStartValue_),e.startNameSet_&&(t.startAt+=","+ft(e.indexStartName_))),e.endSet_&&(t.endAt=ft(e.indexEndValue_),e.endNameSet_&&(t.endAt+=","+ft(e.indexEndName_))),e.limitSet_&&(e.isViewFromLeft()?t.limitToFirst=e.limit_:t.limitToLast=e.limit_),t}function mr(e){const t={};if(e.startSet_&&(t.sp=e.indexStartValue_,e.startNameSet_&&(t.sn=e.indexStartName_)),e.endSet_&&(t.ep=e.indexEndValue_,e.endNameSet_&&(t.en=e.indexEndName_)),e.limitSet_){t.l=e.limit_;let n=e.viewFrom_;""===n&&(n=e.isViewFromLeft()?"l":"r"),t.vf=n}return e.index_!==Ki&&(t.i=e.index_.toString()),t}
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
     */class gr extends hi{constructor(e,t,n,i){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=n,this.appCheckTokenProvider_=i,this.log_=Tn("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return void 0!==t?"tag$"+t:(Xe(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,t,n,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const s=gr.getListenId_(e,n),o={};this.listens_[s]=o;const a=_r(e._queryParams);this.restRequest_(r+".json",a,((e,t)=>{let a=t;if(404===e&&(a=null,e=null),null===e&&this.onDataUpdate_(r,a,!1,n),gt(this.listens_,s)===o){let t;t=e?401===e?"permission_denied":"rest_error:"+e:"ok",i(t,null)}}))}unlisten(e,t){const n=gr.getListenId_(e,t);delete this.listens_[n]}get(e){const t=_r(e._queryParams),n=e._path.toString(),i=new at;return this.restRequest_(n+".json",t,((e,t)=>{let r=t;404===e&&(r=null,e=null),null===e?(this.onDataUpdate_(n,r,!1,null),i.resolve(r)):i.reject(new Error(r))})),i.promise}refreshAuthToken(e){}restRequest_(e,t={},n){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then((([i,r])=>{i&&i.accessToken&&(t.auth=i.accessToken),r&&r.token&&(t.ac=r.token);const s=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+function(e){const t=[];for(const[n,i]of Object.entries(e))Array.isArray(i)?i.forEach((e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))})):t.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return t.length?"&"+t.join("&"):""}(t);this.log_("Sending REST request for "+s);const o=new XMLHttpRequest;o.onreadystatechange=()=>{if(n&&4===o.readyState){this.log_("REST Response for "+s+" received. status:",o.status,"response:",o.responseText);let e=null;if(o.status>=200&&o.status<300){try{e=pt(o.responseText)}catch(e){Nn("Failed to parse JSON response for "+s+": "+o.responseText)}n(null,e)}else 401!==o.status&&404!==o.status&&Nn("Got unsuccessful REST response for "+s+" Status: "+o.status),n(o.status);n=null}},o.open("GET",s,!0),o.send()}))}}
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
     */class yr{constructor(){this.rootNode_=ir.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}
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
     */function vr(){return{value:null,children:new Map}}function wr(e,t,n){if(Ci(t))e.value=n,e.children.clear();else if(null!==e.value)e.value=e.value.updateChild(t,n);else{const i=_i(t);e.children.has(i)||e.children.set(i,vr());wr(e.children.get(i),t=gi(t),n)}}function br(e,t,n){null!==e.value?n(t,e.value):function(e,t){e.children.forEach(((e,n)=>{t(n,e)}))}
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
     */(e,((e,i)=>{br(i,new pi(t.toString()+"/"+e),n)}))}class Cr{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&$n(this.last_,((e,n)=>{t[e]=t[e]-n})),this.last_=e,t}}
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
     */class Ir{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new Cr(e);const n=1e4+2e4*Math.random();Hn(this.reportStats_.bind(this),Math.floor(n))}reportStats_(){const e=this.statsListener_.get(),t={};let n=!1;$n(e,((e,i)=>{i>0&&mt(this.statsToReport_,e)&&(t[e]=i,n=!0)})),n&&this.server_.reportStats(t),Hn(this.reportStats_.bind(this),Math.floor(2*Math.random()*3e5))}}
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
     */var Er;function xr(e){return{fromUser:!1,fromServer:!0,queryId:e,tagged:!0}}
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
     */!function(e){e[e.OVERWRITE=0]="OVERWRITE",e[e.MERGE=1]="MERGE",e[e.ACK_USER_WRITE=2]="ACK_USER_WRITE",e[e.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"}(Er||(Er={}));class Tr{constructor(e,t,n){this.path=e,this.affectedTree=t,this.revert=n,this.type=Er.ACK_USER_WRITE,this.source={fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}operationForChild(e){if(Ci(this.path)){if(null!=this.affectedTree.value)return Xe(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new pi(e));return new Tr(fi(),t,this.revert)}}return Xe(_i(this.path)===e,"operationForChild called for unrelated child."),new Tr(gi(this.path),this.affectedTree,this.revert)}}
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
     */class Sr{constructor(e,t,n){this.source=e,this.path=t,this.snap=n,this.type=Er.OVERWRITE}operationForChild(e){return Ci(this.path)?new Sr(this.source,fi(),this.snap.getImmediateChild(e)):new Sr(this.source,gi(this.path),this.snap)}}
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
     */class kr{constructor(e,t,n){this.source=e,this.path=t,this.children=n,this.type=Er.MERGE}operationForChild(e){if(Ci(this.path)){const t=this.children.subtree(new pi(e));return t.isEmpty()?null:t.value?new Sr(this.source,fi(),t.value):new kr(this.source,fi(),t)}return Xe(_i(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new kr(this.source,gi(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}
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
     */class Nr{constructor(e,t,n){this.node_=e,this.fullyInitialized_=t,this.filtered_=n}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(Ci(e))return this.isFullyInitialized()&&!this.filtered_;const t=_i(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}
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
     */class Pr{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function Rr(e,t,n,i,r,s){const o=i.filter((e=>e.type===n));o.sort(((t,n)=>function(e,t,n){if(null==t.childName||null==n.childName)throw Ze("Should only compare child_ events.");const i=new Di(t.childName,t.snapshotNode),r=new Di(n.childName,n.snapshotNode);return e.index_.compare(i,r)}
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
     */(e,t,n))),o.forEach((n=>{const i=function(e,t,n){return"value"===t.type||"child_removed"===t.type||(t.prevName=n.getPredecessorChildName(t.childName,t.snapshotNode,e.index_)),t}(e,n,s);r.forEach((r=>{r.respondsTo(n.type)&&t.push(r.createEvent(i,e.query_))}))}))}function Dr(e,t){return{eventCache:e,serverCache:t}}function Or(e,t,n,i){return Dr(new Nr(t,n,i),e.serverCache)}function Ar(e,t,n,i){return Dr(e.eventCache,new Nr(t,n,i))}function Lr(e){return e.eventCache.isFullyInitialized()?e.eventCache.getNode():null}function Mr(e){return e.serverCache.isFullyInitialized()?e.serverCache.getNode():null}
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
     */let Fr;class $r{constructor(e,t=(()=>(Fr||(Fr=new qi(An)),Fr))()){this.value=e,this.children=t}static fromObject(e){let t=new $r(null);return $n(e,((e,n)=>{t=t.set(new pi(e),n)})),t}isEmpty(){return null===this.value&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(null!=this.value&&t(this.value))return{path:fi(),value:this.value};if(Ci(e))return null;{const n=_i(e),i=this.children.get(n);if(null!==i){const r=i.findRootMostMatchingPathAndValue(gi(e),t);if(null!=r){return{path:bi(new pi(n),r.path),value:r.value}}return null}return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,(()=>!0))}subtree(e){if(Ci(e))return this;{const t=_i(e),n=this.children.get(t);return null!==n?n.subtree(gi(e)):new $r(null)}}set(e,t){if(Ci(e))return new $r(t,this.children);{const n=_i(e),i=(this.children.get(n)||new $r(null)).set(gi(e),t),r=this.children.insert(n,i);return new $r(this.value,r)}}remove(e){if(Ci(e))return this.children.isEmpty()?new $r(null):new $r(null,this.children);{const t=_i(e),n=this.children.get(t);if(n){const i=n.remove(gi(e));let r;return r=i.isEmpty()?this.children.remove(t):this.children.insert(t,i),null===this.value&&r.isEmpty()?new $r(null):new $r(this.value,r)}return this}}get(e){if(Ci(e))return this.value;{const t=_i(e),n=this.children.get(t);return n?n.get(gi(e)):null}}setTree(e,t){if(Ci(e))return t;{const n=_i(e),i=(this.children.get(n)||new $r(null)).setTree(gi(e),t);let r;return r=i.isEmpty()?this.children.remove(n):this.children.insert(n,i),new $r(this.value,r)}}fold(e){return this.fold_(fi(),e)}fold_(e,t){const n={};return this.children.inorderTraversal(((i,r)=>{n[i]=r.fold_(bi(e,i),t)})),t(e,this.value,n)}findOnPath(e,t){return this.findOnPath_(e,fi(),t)}findOnPath_(e,t,n){const i=!!this.value&&n(t,this.value);if(i)return i;if(Ci(e))return null;{const i=_i(e),r=this.children.get(i);return r?r.findOnPath_(gi(e),bi(t,i),n):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,fi(),t)}foreachOnPath_(e,t,n){if(Ci(e))return this;{this.value&&n(t,this.value);const i=_i(e),r=this.children.get(i);return r?r.foreachOnPath_(gi(e),bi(t,i),n):new $r(null)}}foreach(e){this.foreach_(fi(),e)}foreach_(e,t){this.children.inorderTraversal(((n,i)=>{i.foreach_(bi(e,n),t)})),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal(((t,n)=>{n.value&&e(t,n.value)}))}}
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
     */class qr{constructor(e){this.writeTree_=e}static empty(){return new qr(new $r(null))}}function jr(e,t,n){if(Ci(t))return new qr(new $r(n));{const i=e.writeTree_.findRootMostValueAndPath(t);if(null!=i){const r=i.path;let s=i.value;const o=Ii(r,t);return s=s.updateChild(o,n),new qr(e.writeTree_.set(r,s))}{const i=new $r(n),r=e.writeTree_.setTree(t,i);return new qr(r)}}}function Wr(e,t,n){let i=e;return $n(n,((e,n)=>{i=jr(i,bi(t,e),n)})),i}function Ur(e,t){if(Ci(t))return qr.empty();{const n=e.writeTree_.setTree(t,new $r(null));return new qr(n)}}function Hr(e,t){return null!=zr(e,t)}function zr(e,t){const n=e.writeTree_.findRootMostValueAndPath(t);return null!=n?e.writeTree_.get(n.path).getChild(Ii(n.path,t)):null}function Br(e){const t=[],n=e.writeTree_.value;return null!=n?n.isLeafNode()||n.forEachChild(Ki,((e,n)=>{t.push(new Di(e,n))})):e.writeTree_.children.inorderTraversal(((e,n)=>{null!=n.value&&t.push(new Di(e,n.value))})),t}function Vr(e,t){if(Ci(t))return e;{const n=zr(e,t);return new qr(null!=n?new $r(n):e.writeTree_.subtree(t))}}function Yr(e){return e.writeTree_.isEmpty()}function Gr(e,t){return Kr(fi(),e.writeTree_,t)}function Kr(e,t,n){if(null!=t.value)return n.updateChild(e,t.value);{let i=null;return t.children.inorderTraversal(((t,r)=>{".priority"===t?(Xe(null!==r.value,"Priority writes must always be leaf nodes"),i=r.value):n=Kr(bi(e,t),r,n)})),n.getChild(e).isEmpty()||null===i||(n=n.updateChild(bi(e,".priority"),i)),n}}
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
     */function Qr(e,t){return cs(t,e)}function Jr(e,t){const n=e.allWrites.findIndex((e=>e.writeId===t));Xe(n>=0,"removeWrite called with nonexistent writeId.");const i=e.allWrites[n];e.allWrites.splice(n,1);let r=i.visible,s=!1,o=e.allWrites.length-1;for(;r&&o>=0;){const t=e.allWrites[o];t.visible&&(o>=n&&Xr(t,i.path)?r=!1:xi(i.path,t.path)&&(s=!0)),o--}if(r){if(s)return function(e){e.visibleWrites=es(e.allWrites,Zr,fi()),e.allWrites.length>0?e.lastWriteId=e.allWrites[e.allWrites.length-1].writeId:e.lastWriteId=-1}(e),!0;if(i.snap)e.visibleWrites=Ur(e.visibleWrites,i.path);else{$n(i.children,(t=>{e.visibleWrites=Ur(e.visibleWrites,bi(i.path,t))}))}return!0}return!1}function Xr(e,t){if(e.snap)return xi(e.path,t);for(const n in e.children)if(e.children.hasOwnProperty(n)&&xi(bi(e.path,n),t))return!0;return!1}function Zr(e){return e.visible}function es(e,t,n){let i=qr.empty();for(let r=0;r<e.length;++r){const s=e[r];if(t(s)){const e=s.path;let t;if(s.snap)xi(n,e)?(t=Ii(n,e),i=jr(i,t,s.snap)):xi(e,n)&&(t=Ii(e,n),i=jr(i,fi(),s.snap.getChild(t)));else{if(!s.children)throw Ze("WriteRecord should have .snap or .children");if(xi(n,e))t=Ii(n,e),i=Wr(i,t,s.children);else if(xi(e,n))if(t=Ii(e,n),Ci(t))i=Wr(i,fi(),s.children);else{const e=gt(s.children,_i(t));if(e){const n=e.getChild(gi(t));i=jr(i,fi(),n)}}}}}return i}function ts(e,t,n,i,r){if(i||r){const s=Vr(e.visibleWrites,t);if(!r&&Yr(s))return n;if(r||null!=n||Hr(s,fi())){const s=function(e){return(e.visible||r)&&(!i||!~i.indexOf(e.writeId))&&(xi(e.path,t)||xi(t,e.path))};return Gr(es(e.allWrites,s,t),n||ir.EMPTY_NODE)}return null}{const i=zr(e.visibleWrites,t);if(null!=i)return i;{const i=Vr(e.visibleWrites,t);if(Yr(i))return n;if(null!=n||Hr(i,fi())){return Gr(i,n||ir.EMPTY_NODE)}return null}}}function ns(e,t,n,i){return ts(e.writeTree,e.treePath,t,n,i)}function is(e,t){return function(e,t,n){let i=ir.EMPTY_NODE;const r=zr(e.visibleWrites,t);if(r)return r.isLeafNode()||r.forEachChild(Ki,((e,t)=>{i=i.updateImmediateChild(e,t)})),i;if(n){const r=Vr(e.visibleWrites,t);return n.forEachChild(Ki,((e,t)=>{const n=Gr(Vr(r,new pi(e)),t);i=i.updateImmediateChild(e,n)})),Br(r).forEach((e=>{i=i.updateImmediateChild(e.name,e.node)})),i}return Br(Vr(e.visibleWrites,t)).forEach((e=>{i=i.updateImmediateChild(e.name,e.node)})),i}(e.writeTree,e.treePath,t)}function rs(e,t,n,i){return function(e,t,n,i,r){Xe(i||r,"Either existingEventSnap or existingServerSnap must exist");const s=bi(t,n);if(Hr(e.visibleWrites,s))return null;{const t=Vr(e.visibleWrites,s);return Yr(t)?r.getChild(n):Gr(t,r.getChild(n))}}(e.writeTree,e.treePath,t,n,i)}function ss(e,t){return function(e,t){return zr(e.visibleWrites,t)}(e.writeTree,bi(e.treePath,t))}function os(e,t,n,i,r,s){return function(e,t,n,i,r,s,o){let a;const l=Vr(e.visibleWrites,t),c=zr(l,fi());if(null!=c)a=c;else{if(null==n)return[];a=Gr(l,n)}if(a=a.withIndex(o),a.isEmpty()||a.isLeafNode())return[];{const e=[],t=o.getCompare(),n=s?a.getReverseIteratorFrom(i,o):a.getIteratorFrom(i,o);let l=n.getNext();for(;l&&e.length<r;)0!==t(l,i)&&e.push(l),l=n.getNext();return e}}(e.writeTree,e.treePath,t,n,i,r,s)}function as(e,t,n){return function(e,t,n,i){const r=bi(t,n),s=zr(e.visibleWrites,r);if(null!=s)return s;if(i.isCompleteForChild(n))return Gr(Vr(e.visibleWrites,r),i.getNode().getImmediateChild(n));return null}(e.writeTree,e.treePath,t,n)}function ls(e,t){return cs(bi(e.treePath,t),e.writeTree)}function cs(e,t){return{treePath:e,writeTree:t}}
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
     */class hs{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,n=e.childName;Xe("child_added"===t||"child_changed"===t||"child_removed"===t,"Only child changes supported for tracking"),Xe(".priority"!==n,"Only non-priority child changes can be tracked.");const i=this.changeMap.get(n);if(i){const r=i.type;if("child_added"===t&&"child_removed"===r)this.changeMap.set(n,hr(n,e.snapshotNode,i.snapshotNode));else if("child_removed"===t&&"child_added"===r)this.changeMap.delete(n);else if("child_removed"===t&&"child_changed"===r)this.changeMap.set(n,cr(n,i.oldSnap));else if("child_changed"===t&&"child_added"===r)this.changeMap.set(n,lr(n,e.snapshotNode));else{if("child_changed"!==t||"child_changed"!==r)throw Ze("Illegal combination of changes: "+e+" occurred after "+i);this.changeMap.set(n,hr(n,e.snapshotNode,i.oldSnap))}}else this.changeMap.set(n,e)}getChanges(){return Array.from(this.changeMap.values())}}
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
     */const us=new class{getCompleteChild(e){return null}getChildAfterChild(e,t,n){return null}};class ds{constructor(e,t,n=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=n}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const t=null!=this.optCompleteServerCache_?new Nr(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return as(this.writes_,e,t)}}getChildAfterChild(e,t,n){const i=null!=this.optCompleteServerCache_?this.optCompleteServerCache_:Mr(this.viewCache_),r=os(this.writes_,i,t,1,n,e);return 0===r.length?null:r[0]}}
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
     */function ps(e,t,n,i,r){const s=new hs;let o,a;if(n.type===Er.OVERWRITE){const l=n;l.source.fromUser?o=ms(e,t,l.path,l.snap,i,r,s):(Xe(l.source.fromServer,"Unknown source."),a=l.source.tagged||t.serverCache.isFiltered()&&!Ci(l.path),o=_s(e,t,l.path,l.snap,i,r,a,s))}else if(n.type===Er.MERGE){const l=n;l.source.fromUser?o=function(e,t,n,i,r,s,o){let a=t;return i.foreach(((i,l)=>{const c=bi(n,i);gs(t,_i(c))&&(a=ms(e,a,c,l,r,s,o))})),i.foreach(((i,l)=>{const c=bi(n,i);gs(t,_i(c))||(a=ms(e,a,c,l,r,s,o))})),a}(e,t,l.path,l.children,i,r,s):(Xe(l.source.fromServer,"Unknown source."),a=l.source.tagged||t.serverCache.isFiltered(),o=vs(e,t,l.path,l.children,i,r,a,s))}else if(n.type===Er.ACK_USER_WRITE){const a=n;o=a.revert?function(e,t,n,i,r,s){let o;if(null!=ss(i,n))return t;{const a=new ds(i,t,r),l=t.eventCache.getNode();let c;if(Ci(n)||".priority"===_i(n)){let n;if(t.serverCache.isFullyInitialized())n=ns(i,Mr(t));else{const e=t.serverCache.getNode();Xe(e instanceof ir,"serverChildren would be complete if leaf node"),n=is(i,e)}n=n,c=e.filter.updateFullNode(l,n,s)}else{const r=_i(n);let h=as(i,r,t.serverCache);null==h&&t.serverCache.isCompleteForChild(r)&&(h=l.getImmediateChild(r)),c=null!=h?e.filter.updateChild(l,r,h,gi(n),a,s):t.eventCache.getNode().hasChild(r)?e.filter.updateChild(l,r,ir.EMPTY_NODE,gi(n),a,s):l,c.isEmpty()&&t.serverCache.isFullyInitialized()&&(o=ns(i,Mr(t)),o.isLeafNode()&&(c=e.filter.updateFullNode(c,o,s)))}return o=t.serverCache.isFullyInitialized()||null!=ss(i,fi()),Or(t,c,o,e.filter.filtersNodes())}}
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
     */(e,t,a.path,i,r,s):function(e,t,n,i,r,s,o){if(null!=ss(r,n))return t;const a=t.serverCache.isFiltered(),l=t.serverCache;if(null!=i.value){if(Ci(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return _s(e,t,n,l.getNode().getChild(n),r,s,a,o);if(Ci(n)){let i=new $r(null);return l.getNode().forEachChild(Mi,((e,t)=>{i=i.set(new pi(e),t)})),vs(e,t,n,i,r,s,a,o)}return t}{let c=new $r(null);return i.foreach(((e,t)=>{const i=bi(n,e);l.isCompleteForPath(i)&&(c=c.set(e,l.getNode().getChild(i)))})),vs(e,t,n,c,r,s,a,o)}}(e,t,a.path,a.affectedTree,i,r,s)}else{if(n.type!==Er.LISTEN_COMPLETE)throw Ze("Unknown operation type: "+n.type);o=function(e,t,n,i,r){const s=t.serverCache,o=Ar(t,s.getNode(),s.isFullyInitialized()||Ci(n),s.isFiltered());return fs(e,o,n,i,us,r)}(e,t,n.path,i,s)}const l=s.getChanges();return function(e,t,n){const i=t.eventCache;if(i.isFullyInitialized()){const r=i.getNode().isLeafNode()||i.getNode().isEmpty(),s=Lr(e);(n.length>0||!e.eventCache.isFullyInitialized()||r&&!i.getNode().equals(s)||!i.getNode().getPriority().equals(s.getPriority()))&&n.push({type:"value",snapshotNode:Lr(t)})}}(t,o,l),{viewCache:o,changes:l}}function fs(e,t,n,i,r,s){const o=t.eventCache;if(null!=ss(i,n))return t;{let a,l;if(Ci(n))if(Xe(t.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),t.serverCache.isFiltered()){const n=Mr(t),r=is(i,n instanceof ir?n:ir.EMPTY_NODE);a=e.filter.updateFullNode(t.eventCache.getNode(),r,s)}else{const n=ns(i,Mr(t));a=e.filter.updateFullNode(t.eventCache.getNode(),n,s)}else{const c=_i(n);if(".priority"===c){Xe(1===mi(n),"Can't have a priority with additional path components");const r=o.getNode();l=t.serverCache.getNode();const s=rs(i,n,r,l);a=null!=s?e.filter.updatePriority(r,s):o.getNode()}else{const h=gi(n);let u;if(o.isCompleteForChild(c)){l=t.serverCache.getNode();const e=rs(i,n,o.getNode(),l);u=null!=e?o.getNode().getImmediateChild(c).updateChild(h,e):o.getNode().getImmediateChild(c)}else u=as(i,c,t.serverCache);a=null!=u?e.filter.updateChild(o.getNode(),c,u,h,r,s):o.getNode()}}return Or(t,a,o.isFullyInitialized()||Ci(n),e.filter.filtersNodes())}}function _s(e,t,n,i,r,s,o,a){const l=t.serverCache;let c;const h=o?e.filter:e.filter.getIndexedFilter();if(Ci(n))c=h.updateFullNode(l.getNode(),i,null);else if(h.filtersNodes()&&!l.isFiltered()){const e=l.getNode().updateChild(n,i);c=h.updateFullNode(l.getNode(),e,null)}else{const e=_i(n);if(!l.isCompleteForPath(n)&&mi(n)>1)return t;const r=gi(n),s=l.getNode().getImmediateChild(e).updateChild(r,i);c=".priority"===e?h.updatePriority(l.getNode(),s):h.updateChild(l.getNode(),e,s,r,us,null)}const u=Ar(t,c,l.isFullyInitialized()||Ci(n),h.filtersNodes());return fs(e,u,n,r,new ds(r,u,s),a)}function ms(e,t,n,i,r,s,o){const a=t.eventCache;let l,c;const h=new ds(r,t,s);if(Ci(n))c=e.filter.updateFullNode(t.eventCache.getNode(),i,o),l=Or(t,c,!0,e.filter.filtersNodes());else{const r=_i(n);if(".priority"===r)c=e.filter.updatePriority(t.eventCache.getNode(),i),l=Or(t,c,a.isFullyInitialized(),a.isFiltered());else{const s=gi(n),c=a.getNode().getImmediateChild(r);let u;if(Ci(s))u=i;else{const e=h.getCompleteChild(r);u=null!=e?".priority"===yi(s)&&e.getChild(wi(s)).isEmpty()?e:e.updateChild(s,i):ir.EMPTY_NODE}if(c.equals(u))l=t;else{l=Or(t,e.filter.updateChild(a.getNode(),r,u,s,h,o),a.isFullyInitialized(),e.filter.filtersNodes())}}}return l}function gs(e,t){return e.eventCache.isCompleteForChild(t)}function ys(e,t,n){return n.foreach(((e,n)=>{t=t.updateChild(e,n)})),t}function vs(e,t,n,i,r,s,o,a){if(t.serverCache.getNode().isEmpty()&&!t.serverCache.isFullyInitialized())return t;let l,c=t;l=Ci(n)?i:new $r(null).setTree(n,i);const h=t.serverCache.getNode();return l.children.inorderTraversal(((n,i)=>{if(h.hasChild(n)){const l=ys(0,t.serverCache.getNode().getImmediateChild(n),i);c=_s(e,c,new pi(n),l,r,s,o,a)}})),l.children.inorderTraversal(((n,i)=>{const l=!t.serverCache.isCompleteForChild(n)&&void 0===i.value;if(!h.hasChild(n)&&!l){const l=ys(0,t.serverCache.getNode().getImmediateChild(n),i);c=_s(e,c,new pi(n),l,r,s,o,a)}})),c}class ws{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const n=this.query_._queryParams,i=new ur(n.getIndex()),r=(s=n).loadsAllData()?new ur(s.getIndex()):s.hasLimit()?new pr(s):new dr(s);var s;this.processor_=function(e){return{filter:e}}(r);const o=t.serverCache,a=t.eventCache,l=i.updateFullNode(ir.EMPTY_NODE,o.getNode(),null),c=r.updateFullNode(ir.EMPTY_NODE,a.getNode(),null),h=new Nr(l,o.isFullyInitialized(),i.filtersNodes()),u=new Nr(c,a.isFullyInitialized(),r.filtersNodes());this.viewCache_=Dr(u,h),this.eventGenerator_=new Pr(this.query_)}get query(){return this.query_}}function bs(e,t){const n=Mr(e.viewCache_);return n&&(e.query._queryParams.loadsAllData()||!Ci(t)&&!n.getImmediateChild(_i(t)).isEmpty())?n.getChild(t):null}function Cs(e,t,n,i){t.type===Er.MERGE&&null!==t.source.queryId&&(Xe(Mr(e.viewCache_),"We should always have a full cache before handling merges"),Xe(Lr(e.viewCache_),"Missing event cache, even though we have a server cache"));const r=e.viewCache_,s=ps(e.processor_,r,t,n,i);var o,a;return o=e.processor_,a=s.viewCache,Xe(a.eventCache.getNode().isIndexed(o.filter.getIndex()),"Event snap not indexed"),Xe(a.serverCache.getNode().isIndexed(o.filter.getIndex()),"Server snap not indexed"),Xe(s.viewCache.serverCache.isFullyInitialized()||!r.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),e.viewCache_=s.viewCache,function(e,t,n,i){const r=i?[i]:e.eventRegistrations_;return function(e,t,n,i){const r=[],s=[];return t.forEach((t=>{var n;"child_changed"===t.type&&e.index_.indexedValueChanged(t.oldSnap,t.snapshotNode)&&s.push((n=t.childName,{type:"child_moved",snapshotNode:t.snapshotNode,childName:n}))})),Rr(e,r,"child_removed",t,i,n),Rr(e,r,"child_added",t,i,n),Rr(e,r,"child_moved",s,i,n),Rr(e,r,"child_changed",t,i,n),Rr(e,r,"value",t,i,n),r}(e.eventGenerator_,t,n,r)}
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
     */(e,s.changes,s.viewCache.eventCache.getNode(),null)}let Is,Es;class xs{constructor(){this.views=new Map}}function Ts(e,t,n,i){const r=t.source.queryId;if(null!==r){const s=e.views.get(r);return Xe(null!=s,"SyncTree gave us an op for an invalid query."),Cs(s,t,n,i)}{let r=[];for(const s of e.views.values())r=r.concat(Cs(s,t,n,i));return r}}function Ss(e,t){let n=null;for(const i of e.views.values())n=n||bs(i,t);return n}
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
     */class ks{constructor(e){this.listenProvider_=e,this.syncPointTree_=new $r(null),this.pendingWriteTree_={visibleWrites:qr.empty(),allWrites:[],lastWriteId:-1},this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Ns(e,t,n,i,r){return function(e,t,n,i,r){Xe(i>e.lastWriteId,"Stacking an older write on top of newer ones"),void 0===r&&(r=!0),e.allWrites.push({path:t,snap:n,writeId:i,visible:r}),r&&(e.visibleWrites=jr(e.visibleWrites,t,n)),e.lastWriteId=i}(e.pendingWriteTree_,t,n,i,r),r?As(e,new Sr({fromUser:!0,fromServer:!1,queryId:null,tagged:!1},t,n)):[]}function Ps(e,t,n=!1){const i=function(e,t){for(let n=0;n<e.allWrites.length;n++){const i=e.allWrites[n];if(i.writeId===t)return i}return null}(e.pendingWriteTree_,t);if(Jr(e.pendingWriteTree_,t)){let t=new $r(null);return null!=i.snap?t=t.set(fi(),!0):$n(i.children,(e=>{t=t.set(new pi(e),!0)})),As(e,new Tr(i.path,t,n))}return[]}function Rs(e,t,n){return As(e,new Sr({fromUser:!1,fromServer:!0,queryId:null,tagged:!1},t,n))}function Ds(e,t,n){const i=e.pendingWriteTree_,r=e.syncPointTree_.findOnPath(t,((e,n)=>{const i=Ss(n,Ii(e,t));if(i)return i}));return ts(i,t,r,n,!0)}function Os(e,t){const n=t._path;let i=null;e.syncPointTree_.foreachOnPath(n,((e,t)=>{const r=Ii(e,n);i=i||Ss(t,r)}));let r=e.syncPointTree_.get(n);r?i=i||Ss(r,fi()):(r=new xs,e.syncPointTree_=e.syncPointTree_.set(n,r));const s=null!=i,o=s?new Nr(i,!0,!1):null,a=function(e,t,n,i,r){const s=t._queryIdentifier,o=e.views.get(s);if(!o){let e=ns(n,r?i:null),s=!1;e?s=!0:i instanceof ir?(e=is(n,i),s=!1):(e=ir.EMPTY_NODE,s=!1);const o=Dr(new Nr(e,s,!1),new Nr(i,r,!1));return new ws(t,o)}return o}(r,t,Qr(e.pendingWriteTree_,t._path),s?o.getNode():ir.EMPTY_NODE,s);return function(e){return Lr(e.viewCache_)}(a)}function As(e,t){return Ls(t,e.syncPointTree_,null,Qr(e.pendingWriteTree_,fi()))}function Ls(e,t,n,i){if(Ci(e.path))return Ms(e,t,n,i);{const r=t.get(fi());null==n&&null!=r&&(n=Ss(r,fi()));let s=[];const o=_i(e.path),a=e.operationForChild(o),l=t.children.get(o);if(l&&a){const e=n?n.getImmediateChild(o):null,t=ls(i,o);s=s.concat(Ls(a,l,e,t))}return r&&(s=s.concat(Ts(r,e,i,n))),s}}function Ms(e,t,n,i){const r=t.get(fi());null==n&&null!=r&&(n=Ss(r,fi()));let s=[];return t.children.inorderTraversal(((t,r)=>{const o=n?n.getImmediateChild(t):null,a=ls(i,t),l=e.operationForChild(t);l&&(s=s.concat(Ms(l,r,o,a)))})),r&&(s=s.concat(Ts(r,e,i,n))),s}function Fs(e,t){return e.tagToQueryMap.get(t)}function $s(e){const t=e.indexOf("$");return Xe(-1!==t&&t<e.length-1,"Bad queryKey."),{queryId:e.substr(t+1),path:new pi(e.substr(0,t))}}function qs(e,t,n){const i=e.syncPointTree_.get(t);Xe(i,"Missing sync point for query tag that we're tracking");return Ts(i,n,Qr(e.pendingWriteTree_,t),null)}
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
     */class js{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new js(t)}node(){return this.node_}}class Ws{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=bi(this.path_,e);return new Ws(this.syncTree_,t)}node(){return Ds(this.syncTree_,this.path_)}}const Us=function(e,t,n){return e&&"object"==typeof e?(Xe(".sv"in e,"Unexpected leaf node or priority contents"),"string"==typeof e[".sv"]?Hs(e[".sv"],t,n):"object"==typeof e[".sv"]?zs(e[".sv"],t):void Xe(!1,"Unexpected server value: "+JSON.stringify(e,null,2))):e},Hs=function(e,t,n){if("timestamp"===e)return n.timestamp;Xe(!1,"Unexpected server value: "+e)},zs=function(e,t,n){e.hasOwnProperty("increment")||Xe(!1,"Unexpected server value: "+JSON.stringify(e,null,2));const i=e.increment;"number"!=typeof i&&Xe(!1,"Unexpected increment value: "+i);const r=t.node();if(Xe(null!=r,"Expected ChildrenNode.EMPTY_NODE for nulls"),!r.isLeafNode())return i;const s=r.getValue();return"number"!=typeof s?i:s+i},Bs=function(e,t,n){return Vs(e,new js(t),n)};function Vs(e,t,n){const i=e.getPriority().val(),r=Us(i,t.getImmediateChild(".priority"),n);let s;if(e.isLeafNode()){const i=e,s=Us(i.getValue(),t,n);return s!==i.getValue()||r!==i.getPriority().val()?new Gi(s,sr(r)):e}{const i=e;return s=i,r!==i.getPriority().val()&&(s=s.updatePriority(new Gi(r))),i.forEachChild(Ki,((e,i)=>{const r=Vs(i,t.getImmediateChild(e),n);r!==i&&(s=s.updateImmediateChild(e,r))})),s}}
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
     */class Ys{constructor(e="",t=null,n={children:{},childCount:0}){this.name=e,this.parent=t,this.node=n}}function Gs(e,t){let n=t instanceof pi?t:new pi(t),i=e,r=_i(n);for(;null!==r;){const e=gt(i.node.children,r)||{children:{},childCount:0};i=new Ys(r,i,e),n=gi(n),r=_i(n)}return i}function Ks(e){return e.node.value}function Qs(e,t){e.node.value=t,to(e)}function Js(e){return e.node.childCount>0}function Xs(e,t){$n(e.node.children,((n,i)=>{t(new Ys(n,e,i))}))}function Zs(e,t,n,i){n&&!i&&t(e),Xs(e,(e=>{Zs(e,t,!0,i)})),n&&i&&t(e)}function eo(e){return new pi(null===e.parent?e.name:eo(e.parent)+"/"+e.name)}function to(e){null!==e.parent&&function(e,t,n){const i=function(e){return void 0===Ks(e)&&!Js(e)}(n),r=mt(e.node.children,t);i&&r?(delete e.node.children[t],e.node.childCount--,to(e)):i||r||(e.node.children[t]=n.node,e.node.childCount++,to(e))}
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
     */(e.parent,e.name,e)}const no=/[\[\].#$\/\u0000-\u001F\u007F]/,io=/[\[\].#$\u0000-\u001F\u007F]/,ro=10485760,so=function(e){return"string"==typeof e&&0!==e.length&&!no.test(e)},oo=function(e){return"string"==typeof e&&0!==e.length&&!io.test(e)},ao=function(e,t,n){const i=n instanceof pi?new Ti(n,e):n;if(void 0===t)throw new Error(e+"contains undefined "+ki(i));if("function"==typeof t)throw new Error(e+"contains a function "+ki(i)+" with contents = "+t.toString());if(Pn(t))throw new Error(e+"contains "+t.toString()+" "+ki(i));if("string"==typeof t&&t.length>ro/3&&Et(t)>ro)throw new Error(e+"contains a string greater than "+"10485760 utf8 bytes "+ki(i)+" ('"+t.substring(0,50)+"...')");if(t&&"object"==typeof t){let n=!1,r=!1;if($n(t,((t,s)=>{if(".value"===t)n=!0;else if(".priority"!==t&&".sv"!==t&&(r=!0,!so(t)))throw new Error(e+" contains an invalid key ("+t+") "+ki(i)+'.  Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"');!function(e,t){e.parts_.length>0&&(e.byteLength_+=1),e.parts_.push(t),e.byteLength_+=Et(t),Si(e)}(i,t),ao(e,s,i),function(e){const t=e.parts_.pop();e.byteLength_-=Et(t),e.parts_.length>0&&(e.byteLength_-=1)}(i)})),n&&r)throw new Error(e+' contains ".value" child '+ki(i)+" in addition to actual children.")}},lo=function(e,t,n,i){if(!(i&&void 0===n||oo(n)))throw new Error(It(e,t)+'was an invalid path = "'+n+'". Paths must be non-empty strings and can\'t contain ".", "#", "$", "[", or "]"')},co=function(e,t){const n=t.path.toString();if("string"!=typeof t.repoInfo.host||0===t.repoInfo.host.length||!so(t.repoInfo.namespace)&&"localhost"!==t.repoInfo.host.split(":")[0]||0!==n.length&&!function(e){return e&&(e=e.replace(/^\/*\.info(\/|$)/,"/")),oo(e)}(n))throw new Error(It(e,"url")+'must be a valid firebase URL and the path can\'t contain ".", "#", "$", "[", or "]".')};
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
class ho{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function uo(e,t){let n=null;for(let i=0;i<t.length;i++){const r=t[i],s=r.getPath();null===n||Ei(s,n.path)||(e.eventLists_.push(n),n=null),null===n&&(n={events:[],path:s}),n.events.push(r)}n&&e.eventLists_.push(n)}function po(e,t,n){uo(e,n),fo(e,(e=>xi(e,t)||xi(t,e)))}function fo(e,t){e.recursionDepth_++;let n=!0;for(let i=0;i<e.eventLists_.length;i++){const r=e.eventLists_[i];if(r){t(r.path)?(_o(e.eventLists_[i]),e.eventLists_[i]=null):n=!1}}n&&(e.eventLists_=[]),e.recursionDepth_--}function _o(e){for(let t=0;t<e.events.length;t++){const n=e.events[t];if(null!==n){e.events[t]=null;const i=n.getEventRunner();In&&xn("event: "+n.toString()),Un(i)}}}
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
     */class mo{constructor(e,t,n,i){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=n,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new ho,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=vr(),this.transactionQueueTree_=new Ys,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function go(e,t,n){if(e.stats_=ti(e.repoInfo_),e.forceRestClient_||("object"==typeof window&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0)e.server_=new gr(e.repoInfo_,((t,n,i,r)=>{wo(e,t,n,i,r)}),e.authTokenProvider_,e.appCheckProvider_),setTimeout((()=>bo(e,!0)),0);else{if(null!=n){if("object"!=typeof n)throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{ft(n)}catch(e){throw new Error("Invalid authOverride provided: "+e)}}e.persistentConnection_=new Ri(e.repoInfo_,t,((t,n,i,r)=>{wo(e,t,n,i,r)}),(t=>{bo(e,t)}),(t=>{!function(e,t){$n(t,((t,n)=>{Co(e,t,n)}))}(e,t)}),e.authTokenProvider_,e.appCheckProvider_,n),e.server_=e.persistentConnection_}e.authTokenProvider_.addTokenChangeListener((t=>{e.server_.refreshAuthToken(t)})),e.appCheckProvider_.addTokenChangeListener((t=>{e.server_.refreshAppCheckToken(t.token)})),e.statsReporter_=function(e,t){const n=e.toString();return ei[n]||(ei[n]=t()),ei[n]}(e.repoInfo_,(()=>new Ir(e.stats_,e.server_))),e.infoData_=new yr,e.infoSyncTree_=new ks({startListening:(t,n,i,r)=>{let s=[];const o=e.infoData_.getNode(t._path);return o.isEmpty()||(s=Rs(e.infoSyncTree_,t._path,o),setTimeout((()=>{r("ok")}),0)),s},stopListening:()=>{}}),Co(e,"connected",!1),e.serverSyncTree_=new ks({startListening:(t,n,i,r)=>(e.server_.listen(t,i,n,((n,i)=>{const s=r(n,i);po(e.eventQueue_,t._path,s)})),[]),stopListening:(t,n)=>{e.server_.unlisten(t,n)}})}function yo(e){const t=e.infoData_.getNode(new pi(".info/serverTimeOffset")).val()||0;return(new Date).getTime()+t}function vo(e){return(t=(t={timestamp:yo(e)})||{}).timestamp=t.timestamp||(new Date).getTime(),t;var t}function wo(e,t,n,i,r){e.dataUpdateCount++;const s=new pi(t);n=e.interceptServerDataCallback_?e.interceptServerDataCallback_(t,n):n;let o=[];if(r)if(i){const t=vt(n,(e=>sr(e)));o=function(e,t,n,i){const r=Fs(e,i);if(r){const i=$s(r),s=i.path,o=i.queryId,a=Ii(s,t),l=$r.fromObject(n);return qs(e,s,new kr(xr(o),a,l))}return[]}(e.serverSyncTree_,s,t,r)}else{const t=sr(n);o=function(e,t,n,i){const r=Fs(e,i);if(null!=r){const i=$s(r),s=i.path,o=i.queryId,a=Ii(s,t);return qs(e,s,new Sr(xr(o),a,n))}return[]}(e.serverSyncTree_,s,t,r)}else if(i){const t=vt(n,(e=>sr(e)));o=function(e,t,n){const i=$r.fromObject(n);return As(e,new kr({fromUser:!1,fromServer:!0,queryId:null,tagged:!1},t,i))}(e.serverSyncTree_,s,t)}else{const t=sr(n);o=Rs(e.serverSyncTree_,s,t)}let a=s;o.length>0&&(a=ko(e,s)),po(e.eventQueue_,a,o)}function bo(e,t){Co(e,"connected",t),!1===t&&function(e){xo(e,"onDisconnectEvents");const t=vo(e),n=vr();br(e.onDisconnect_,fi(),((i,r)=>{const s=function(e,t,n,i){return Vs(t,new Ws(n,e),i)}(i,r,e.serverSyncTree_,t);wr(n,i,s)}));let i=[];br(n,fi(),((t,n)=>{i=i.concat(Rs(e.serverSyncTree_,t,n));const r=function(e,t){const n=eo(No(e,t)),i=Gs(e.transactionQueueTree_,t);return function(e,t,n){let i=n?e:e.parent;for(;null!==i;){if(t(i))return!0;i=i.parent}}(i,(t=>{Oo(e,t)})),Oo(e,i),Zs(i,(t=>{Oo(e,t)})),n}(e,t);ko(e,r)})),e.onDisconnect_=vr(),po(e.eventQueue_,fi(),i)}(e)}function Co(e,t,n){const i=new pi("/.info/"+t),r=sr(n);e.infoData_.updateSnapshot(i,r);const s=Rs(e.infoSyncTree_,i,r);po(e.eventQueue_,i,s)}function Io(e){return e.nextWriteId_++}function Eo(e,t){const n=Os(e.serverSyncTree_,t);return null!=n?Promise.resolve(n):e.server_.get(t).then((n=>{const i=sr(n).withIndex(t._queryParams.getIndex()),r=Rs(e.serverSyncTree_,t._path,i);var s,o;return s=e.eventQueue_,o=t._path,uo(s,r),fo(s,(e=>Ei(e,o))),Promise.resolve(i)}),(n=>(xo(e,"get for query "+ft(t)+" failed: "+n),Promise.reject(new Error(n)))))}function xo(e,...t){let n="";e.persistentConnection_&&(n=e.persistentConnection_.id+":"),xn(n,...t)}function To(e,t,n){return Ds(e.serverSyncTree_,t,n)||ir.EMPTY_NODE}function So(e,t=e.transactionQueueTree_){if(t||Do(e,t),Ks(t)){const n=Po(e,t);Xe(n.length>0,"Sending zero length transaction queue");n.every((e=>0===e.status))&&function(e,t,n){const i=n.map((e=>e.currentWriteId)),r=To(e,t,i);let s=r;const o=r.hash();for(let e=0;e<n.length;e++){const i=n[e];Xe(0===i.status,"tryToSendTransactionQueue_: items in queue should all be run."),i.status=1,i.retryCount++;const r=Ii(t,i.path);s=s.updateChild(r,i.currentOutputSnapshotRaw)}const a=s.val(!0),l=t;e.server_.put(l.toString(),a,(i=>{xo(e,"transaction put response",{path:l.toString(),status:i});let r=[];if("ok"===i){const i=[];for(let t=0;t<n.length;t++)n[t].status=2,r=r.concat(Ps(e.serverSyncTree_,n[t].currentWriteId)),n[t].onComplete&&i.push((()=>n[t].onComplete(null,!0,n[t].currentOutputSnapshotResolved))),n[t].unwatcher();Do(e,Gs(e.transactionQueueTree_,t)),So(e,e.transactionQueueTree_),po(e.eventQueue_,t,r);for(let e=0;e<i.length;e++)Un(i[e])}else{if("datastale"===i)for(let e=0;e<n.length;e++)3===n[e].status?n[e].status=4:n[e].status=0;else{Nn("transaction at "+l.toString()+" failed: "+i);for(let e=0;e<n.length;e++)n[e].status=4,n[e].abortReason=i}ko(e,t)}}),o)}(e,eo(t),n)}else Js(t)&&Xs(t,(t=>{So(e,t)}))}function ko(e,t){const n=No(e,t),i=eo(n);return function(e,t,n){if(0===t.length)return;const i=[];let r=[];const s=t.filter((e=>0===e.status)).map((e=>e.currentWriteId));for(let a=0;a<t.length;a++){const l=t[a],c=Ii(n,l.path);let h,u=!1;if(Xe(null!==c,"rerunTransactionsUnderNode_: relativePath should not be null."),4===l.status)u=!0,h=l.abortReason,r=r.concat(Ps(e.serverSyncTree_,l.currentWriteId,!0));else if(0===l.status)if(l.retryCount>=25)u=!0,h="maxretry",r=r.concat(Ps(e.serverSyncTree_,l.currentWriteId,!0));else{const n=To(e,l.path,s);l.currentInputSnapshot=n;const i=t[a].update(n.val());if(void 0!==i){ao("transaction failed: Data returned ",i,l.path);let t=sr(i);"object"==typeof i&&null!=i&&mt(i,".priority")||(t=t.updatePriority(n.getPriority()));const o=l.currentWriteId,a=vo(e),c=Bs(t,n,a);l.currentOutputSnapshotRaw=t,l.currentOutputSnapshotResolved=c,l.currentWriteId=Io(e),s.splice(s.indexOf(o),1),r=r.concat(Ns(e.serverSyncTree_,l.path,c,l.currentWriteId,l.applyLocally)),r=r.concat(Ps(e.serverSyncTree_,o,!0))}else u=!0,h="nodata",r=r.concat(Ps(e.serverSyncTree_,l.currentWriteId,!0))}po(e.eventQueue_,n,r),r=[],u&&(t[a].status=2,o=t[a].unwatcher,setTimeout(o,Math.floor(0)),t[a].onComplete&&("nodata"===h?i.push((()=>t[a].onComplete(null,!1,t[a].currentInputSnapshot))):i.push((()=>t[a].onComplete(new Error(h),!1,null)))))}var o;Do(e,e.transactionQueueTree_);for(let e=0;e<i.length;e++)Un(i[e]);So(e,e.transactionQueueTree_)}(e,Po(e,n),i),i}function No(e,t){let n,i=e.transactionQueueTree_;for(n=_i(t);null!==n&&void 0===Ks(i);)i=Gs(i,n),n=_i(t=gi(t));return i}function Po(e,t){const n=[];return Ro(e,t,n),n.sort(((e,t)=>e.order-t.order)),n}function Ro(e,t,n){const i=Ks(t);if(i)for(let e=0;e<i.length;e++)n.push(i[e]);Xs(t,(t=>{Ro(e,t,n)}))}function Do(e,t){const n=Ks(t);if(n){let e=0;for(let t=0;t<n.length;t++)2!==n[t].status&&(n[e]=n[t],e++);n.length=e,Qs(t,n.length>0?n:void 0)}Xs(t,(t=>{Do(e,t)}))}function Oo(e,t){const n=Ks(t);if(n){const i=[];let r=[],s=-1;for(let t=0;t<n.length;t++)3===n[t].status||(1===n[t].status?(Xe(s===t-1,"All SENT items should be at beginning of queue."),s=t,n[t].status=3,n[t].abortReason="set"):(Xe(0===n[t].status,"Unexpected transaction status in abort"),n[t].unwatcher(),r=r.concat(Ps(e.serverSyncTree_,n[t].currentWriteId,!0)),n[t].onComplete&&i.push(n[t].onComplete.bind(null,new Error("set"),!1,null))));-1===s?Qs(t,void 0):n.length=s+1,po(e.eventQueue_,eo(t),r);for(let e=0;e<i.length;e++)Un(i[e])}}
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
     */const Ao=function(e,t){const n=Lo(e),i=n.namespace;"firebase.com"===n.domain&&kn(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),i&&"undefined"!==i||"localhost"===n.domain||kn("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||"undefined"!=typeof window&&window.location&&window.location.protocol&&-1!==window.location.protocol.indexOf("https:")&&Nn("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().");const r="ws"===n.scheme||"wss"===n.scheme;return{repoInfo:new Qn(n.host,n.secure,i,r,t,"",i!==n.subdomain),path:new pi(n.pathString)}},Lo=function(e){let t="",n="",i="",r="",s="",o=!0,a="https",l=443;if("string"==typeof e){let c=e.indexOf("//");c>=0&&(a=e.substring(0,c-1),e=e.substring(c+2));let h=e.indexOf("/");-1===h&&(h=e.length);let u=e.indexOf("?");-1===u&&(u=e.length),t=e.substring(0,Math.min(h,u)),h<u&&(r=function(e){let t="";const n=e.split("/");for(let e=0;e<n.length;e++)if(n[e].length>0){let i=n[e];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch(e){}t+="/"+i}return t}(e.substring(h,u)));const d=function(e){const t={};"?"===e.charAt(0)&&(e=e.substring(1));for(const n of e.split("&")){if(0===n.length)continue;const i=n.split("=");2===i.length?t[decodeURIComponent(i[0])]=decodeURIComponent(i[1]):Nn(`Invalid query segment '${n}' in query '${e}'`)}return t}(e.substring(Math.min(e.length,u)));c=t.indexOf(":"),c>=0?(o="https"===a||"wss"===a,l=parseInt(t.substring(c+1),10)):c=t.length;const p=t.slice(0,c);if("localhost"===p.toLowerCase())n="localhost";else if(p.split(".").length<=2)n=p;else{const e=t.indexOf(".");i=t.substring(0,e).toLowerCase(),n=t.substring(e+1),s=i}"ns"in d&&(s=d.ns)}return{host:t,port:l,domain:n,subdomain:i,secure:o,scheme:a,pathString:r,namespace:s}};
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
class Mo{constructor(e,t,n,i){this._repo=e,this._path=t,this._queryParams=n,this._orderByCalled=i}get key(){return Ci(this._path)?null:yi(this._path)}get ref(){return new Fo(this._repo,this._path)}get _queryIdentifier(){const e=mr(this._queryParams),t=Mn(e);return"{}"===t?"default":t}get _queryObject(){return mr(this._queryParams)}isEqual(e){if(!((e=xt(e))instanceof Mo))return!1;const t=this._repo===e._repo,n=Ei(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return t&&n&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+function(e){let t="";for(let n=e.pieceNum_;n<e.pieces_.length;n++)""!==e.pieces_[n]&&(t+="/"+encodeURIComponent(String(e.pieces_[n])));return t||"/"}(this._path)}}class Fo extends Mo{constructor(e,t){super(e,t,new fr,!1)}get parent(){const e=wi(this._path);return null===e?null:new Fo(this._repo,e)}get root(){let e=this;for(;null!==e.parent;)e=e.parent;return e}}class $o{constructor(e,t,n){this._node=e,this.ref=t,this._index=n}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new pi(e),n=qo(this.ref,e);return new $o(this._node.getChild(t),n,Ki)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){if(this._node.isLeafNode())return!1;return!!this._node.forEachChild(this._index,((t,n)=>e(new $o(n,qo(this.ref,t),Ki))))}hasChild(e){const t=new pi(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return!this._node.isLeafNode()&&!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function qo(e,t){var n,i,r,s;return null===_i((e=xt(e))._path)?(n="child",i="path",s=!1,(r=t)&&(r=r.replace(/^\/*\.info(\/|$)/,"/")),lo(n,i,r,s)):lo("child","path",t,!1),new Fo(e._repo,bi(e._path,t))}!function(e){Xe(!Is,"__referenceConstructor has already been defined"),Is=e}(Fo),function(e){Xe(!Es,"__referenceConstructor has already been defined"),Es=e}(Fo);
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
const jo={};function Wo(e,t,n,i,r){let s=i||e.options.databaseURL;void 0===s&&(e.options.projectId||kn("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),xn("Using default host for project ",e.options.projectId),s=`${e.options.projectId}-default-rtdb.firebaseio.com`);let o,a,l=Ao(s,r),c=l.repoInfo;"undefined"!=typeof process&&process.env&&(a=process.env.FIREBASE_DATABASE_EMULATOR_HOST),a?(o=!0,s=`http://${a}?ns=${c.namespace}`,l=Ao(s,r),c=l.repoInfo):o=!l.repoInfo.secure;const h=r&&o?new Vn(Vn.OWNER):new Bn(e.name,e.options,t);co("Invalid Firebase Database URL",l),Ci(l.path)||kn("Database URL must point to the root of a Firebase Database (not including a child path).");const u=function(e,t,n,i){let r=jo[t.name];r||(r={},jo[t.name]=r);let s=r[e.toURLString()];s&&kn("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call.");return s=new mo(e,false,n,i),r[e.toURLString()]=s,s}(c,e,h,new zn(e.name,n));return new Uo(u,e)}class Uo{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(go(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Fo(this._repo,fi())),this._rootInternal}_delete(){return null!==this._rootInternal&&(!function(e,t){const n=jo[t];n&&n[e.key]===e||kn(`Database ${t}(${e.repoInfo_}) has already been deleted.`),function(e){e.persistentConnection_&&e.persistentConnection_.interrupt("repo_interrupt")}(e),delete n[e.key]}(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){null===this._rootInternal&&kn("Cannot call "+e+" on a deleted database.")}}function Ho(e=function(e="[DEFAULT]"){const t=Yt.get(e);if(!t)throw Jt.create("no-app",{appName:e});return t}(),t){return function(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}(e,"database").getImmediate({identifier:t})}
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
     */Ri.prototype.simpleListen=function(e,t){this.sendRequest("q",{p:e},t)},Ri.prototype.echo=function(e,t){this.sendRequest("echo",{d:e},t)},function(e){!function(e){pn=e}("9.6.11"),Qt(new Rt("database",((e,{instanceIdentifier:t})=>Wo(e.getProvider("app").getImmediate(),e.getProvider("auth-internal"),e.getProvider("app-check-internal"),t)),"PUBLIC").setMultipleInstances(!0)),Zt(un,dn,e),Zt(un,dn,"esm2017")}();
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
var zo=function(e,t){return zo=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},zo(e,t)};function Bo(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}zo(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}function Vo(e){var t="function"==typeof Symbol&&Symbol.iterator,n=t&&e[t],i=0;if(n)return n.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&i>=e.length&&(e=void 0),{value:e&&e[i++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function Yo(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var i,r,s=n.call(e),o=[];try{for(;(void 0===t||t-- >0)&&!(i=s.next()).done;)o.push(i.value)}catch(e){r={error:e}}finally{try{i&&!i.done&&(n=s.return)&&n.call(s)}finally{if(r)throw r.error}}return o}function Go(e,t,n){if(n||2===arguments.length)for(var i,r=0,s=t.length;r<s;r++)!i&&r in t||(i||(i=Array.prototype.slice.call(t,0,r)),i[r]=t[r]);return e.concat(i||Array.prototype.slice.call(t))}function Ko(e){return"function"==typeof e}function Qo(e){var t=e((function(e){Error.call(e),e.stack=(new Error).stack}));return t.prototype=Object.create(Error.prototype),t.prototype.constructor=t,t}var Jo=Qo((function(e){return function(t){e(this),this.message=t?t.length+" errors occurred during unsubscription:\n"+t.map((function(e,t){return t+1+") "+e.toString()})).join("\n  "):"",this.name="UnsubscriptionError",this.errors=t}}));function Xo(e,t){if(e){var n=e.indexOf(t);0<=n&&e.splice(n,1)}}var Zo=function(){function e(e){this.initialTeardown=e,this.closed=!1,this._parentage=null,this._finalizers=null}return e.prototype.unsubscribe=function(){var e,t,n,i,r;if(!this.closed){this.closed=!0;var s=this._parentage;if(s)if(this._parentage=null,Array.isArray(s))try{for(var o=Vo(s),a=o.next();!a.done;a=o.next()){a.value.remove(this)}}catch(t){e={error:t}}finally{try{a&&!a.done&&(t=o.return)&&t.call(o)}finally{if(e)throw e.error}}else s.remove(this);var l=this.initialTeardown;if(Ko(l))try{l()}catch(e){r=e instanceof Jo?e.errors:[e]}var c=this._finalizers;if(c){this._finalizers=null;try{for(var h=Vo(c),u=h.next();!u.done;u=h.next()){var d=u.value;try{na(d)}catch(e){r=null!=r?r:[],e instanceof Jo?r=Go(Go([],Yo(r)),Yo(e.errors)):r.push(e)}}}catch(e){n={error:e}}finally{try{u&&!u.done&&(i=h.return)&&i.call(h)}finally{if(n)throw n.error}}}if(r)throw new Jo(r)}},e.prototype.add=function(t){var n;if(t&&t!==this)if(this.closed)na(t);else{if(t instanceof e){if(t.closed||t._hasParent(this))return;t._addParent(this)}(this._finalizers=null!==(n=this._finalizers)&&void 0!==n?n:[]).push(t)}},e.prototype._hasParent=function(e){var t=this._parentage;return t===e||Array.isArray(t)&&t.includes(e)},e.prototype._addParent=function(e){var t=this._parentage;this._parentage=Array.isArray(t)?(t.push(e),t):t?[t,e]:e},e.prototype._removeParent=function(e){var t=this._parentage;t===e?this._parentage=null:Array.isArray(t)&&Xo(t,e)},e.prototype.remove=function(t){var n=this._finalizers;n&&Xo(n,t),t instanceof e&&t._removeParent(this)},e.EMPTY=function(){var t=new e;return t.closed=!0,t}(),e}(),ea=Zo.EMPTY;function ta(e){return e instanceof Zo||e&&"closed"in e&&Ko(e.remove)&&Ko(e.add)&&Ko(e.unsubscribe)}function na(e){Ko(e)?e():e.unsubscribe()}var ia={onUnhandledError:null,onStoppedNotification:null,Promise:void 0,useDeprecatedSynchronousErrorHandling:!1,useDeprecatedNextContext:!1},ra={setTimeout:function(e,t){for(var n=[],i=2;i<arguments.length;i++)n[i-2]=arguments[i];var r=ra.delegate;return(null==r?void 0:r.setTimeout)?r.setTimeout.apply(r,Go([e,t],Yo(n))):setTimeout.apply(void 0,Go([e,t],Yo(n)))},clearTimeout:function(e){var t=ra.delegate;return((null==t?void 0:t.clearTimeout)||clearTimeout)(e)},delegate:void 0};function sa(){}var oa=null;function aa(e){if(ia.useDeprecatedSynchronousErrorHandling){var t=!oa;if(t&&(oa={errorThrown:!1,error:null}),e(),t){var n=oa,i=n.errorThrown,r=n.error;if(oa=null,i)throw r}}else e()}var la=function(e){function t(t){var n=e.call(this)||this;return n.isStopped=!1,t?(n.destination=t,ta(t)&&t.add(n)):n.destination=fa,n}return Bo(t,e),t.create=function(e,t,n){return new da(e,t,n)},t.prototype.next=function(e){this.isStopped||this._next(e)},t.prototype.error=function(e){this.isStopped||(this.isStopped=!0,this._error(e))},t.prototype.complete=function(){this.isStopped||(this.isStopped=!0,this._complete())},t.prototype.unsubscribe=function(){this.closed||(this.isStopped=!0,e.prototype.unsubscribe.call(this),this.destination=null)},t.prototype._next=function(e){this.destination.next(e)},t.prototype._error=function(e){try{this.destination.error(e)}finally{this.unsubscribe()}},t.prototype._complete=function(){try{this.destination.complete()}finally{this.unsubscribe()}},t}(Zo),ca=Function.prototype.bind;function ha(e,t){return ca.call(e,t)}var ua=function(){function e(e){this.partialObserver=e}return e.prototype.next=function(e){var t=this.partialObserver;if(t.next)try{t.next(e)}catch(e){pa(e)}},e.prototype.error=function(e){var t=this.partialObserver;if(t.error)try{t.error(e)}catch(e){pa(e)}else pa(e)},e.prototype.complete=function(){var e=this.partialObserver;if(e.complete)try{e.complete()}catch(e){pa(e)}},e}(),da=function(e){function t(t,n,i){var r,s,o=e.call(this)||this;Ko(t)||!t?r={next:null!=t?t:void 0,error:null!=n?n:void 0,complete:null!=i?i:void 0}:o&&ia.useDeprecatedNextContext?((s=Object.create(t)).unsubscribe=function(){return o.unsubscribe()},r={next:t.next&&ha(t.next,s),error:t.error&&ha(t.error,s),complete:t.complete&&ha(t.complete,s)}):r=t;return o.destination=new ua(r),o}return Bo(t,e),t}(la);function pa(e){var t;t=e,ra.setTimeout((function(){throw t}))}var fa={closed:!0,next:sa,error:function(e){throw e},complete:sa},_a="function"==typeof Symbol&&Symbol.observable||"@@observable";function ma(e){return e}function ga(e){return 0===e.length?ma:1===e.length?e[0]:function(t){return e.reduce((function(e,t){return t(e)}),t)}}var ya=function(){function e(e){e&&(this._subscribe=e)}return e.prototype.lift=function(t){var n=new e;return n.source=this,n.operator=t,n},e.prototype.subscribe=function(e,t,n){var i,r=this,s=(i=e)&&i instanceof la||function(e){return e&&Ko(e.next)&&Ko(e.error)&&Ko(e.complete)}(i)&&ta(i)?e:new da(e,t,n);return aa((function(){var e=r,t=e.operator,n=e.source;s.add(t?t.call(s,n):n?r._subscribe(s):r._trySubscribe(s))})),s},e.prototype._trySubscribe=function(e){try{return this._subscribe(e)}catch(t){e.error(t)}},e.prototype.forEach=function(e,t){var n=this;return new(t=va(t))((function(t,i){var r=new da({next:function(t){try{e(t)}catch(e){i(e),r.unsubscribe()}},error:i,complete:t});n.subscribe(r)}))},e.prototype._subscribe=function(e){var t;return null===(t=this.source)||void 0===t?void 0:t.subscribe(e)},e.prototype[_a]=function(){return this},e.prototype.pipe=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return ga(e)(this)},e.prototype.toPromise=function(e){var t=this;return new(e=va(e))((function(e,n){var i;t.subscribe((function(e){return i=e}),(function(e){return n(e)}),(function(){return e(i)}))}))},e.create=function(t){return new e(t)},e}();function va(e){var t;return null!==(t=null!=e?e:ia.Promise)&&void 0!==t?t:Promise}var wa=Qo((function(e){return function(){e(this),this.name="ObjectUnsubscribedError",this.message="object unsubscribed"}})),ba=function(e){function t(){var t=e.call(this)||this;return t.closed=!1,t.currentObservers=null,t.observers=[],t.isStopped=!1,t.hasError=!1,t.thrownError=null,t}return Bo(t,e),t.prototype.lift=function(e){var t=new Ca(this,this);return t.operator=e,t},t.prototype._throwIfClosed=function(){if(this.closed)throw new wa},t.prototype.next=function(e){var t=this;aa((function(){var n,i;if(t._throwIfClosed(),!t.isStopped){t.currentObservers||(t.currentObservers=Array.from(t.observers));try{for(var r=Vo(t.currentObservers),s=r.next();!s.done;s=r.next()){s.value.next(e)}}catch(e){n={error:e}}finally{try{s&&!s.done&&(i=r.return)&&i.call(r)}finally{if(n)throw n.error}}}}))},t.prototype.error=function(e){var t=this;aa((function(){if(t._throwIfClosed(),!t.isStopped){t.hasError=t.isStopped=!0,t.thrownError=e;for(var n=t.observers;n.length;)n.shift().error(e)}}))},t.prototype.complete=function(){var e=this;aa((function(){if(e._throwIfClosed(),!e.isStopped){e.isStopped=!0;for(var t=e.observers;t.length;)t.shift().complete()}}))},t.prototype.unsubscribe=function(){this.isStopped=this.closed=!0,this.observers=this.currentObservers=null},Object.defineProperty(t.prototype,"observed",{get:function(){var e;return(null===(e=this.observers)||void 0===e?void 0:e.length)>0},enumerable:!1,configurable:!0}),t.prototype._trySubscribe=function(t){return this._throwIfClosed(),e.prototype._trySubscribe.call(this,t)},t.prototype._subscribe=function(e){return this._throwIfClosed(),this._checkFinalizedStatuses(e),this._innerSubscribe(e)},t.prototype._innerSubscribe=function(e){var t=this,n=this,i=n.hasError,r=n.isStopped,s=n.observers;return i||r?ea:(this.currentObservers=null,s.push(e),new Zo((function(){t.currentObservers=null,Xo(s,e)})))},t.prototype._checkFinalizedStatuses=function(e){var t=this,n=t.hasError,i=t.thrownError,r=t.isStopped;n?e.error(i):r&&e.complete()},t.prototype.asObservable=function(){var e=new ya;return e.source=this,e},t.create=function(e,t){return new Ca(e,t)},t}(ya),Ca=function(e){function t(t,n){var i=e.call(this)||this;return i.destination=t,i.source=n,i}return Bo(t,e),t.prototype.next=function(e){var t,n;null===(n=null===(t=this.destination)||void 0===t?void 0:t.next)||void 0===n||n.call(t,e)},t.prototype.error=function(e){var t,n;null===(n=null===(t=this.destination)||void 0===t?void 0:t.error)||void 0===n||n.call(t,e)},t.prototype.complete=function(){var e,t;null===(t=null===(e=this.destination)||void 0===e?void 0:e.complete)||void 0===t||t.call(e)},t.prototype._subscribe=function(e){var t,n;return null!==(n=null===(t=this.source)||void 0===t?void 0:t.subscribe(e))&&void 0!==n?n:ea},t}(ba);function Ia(e){let t,n,i,r,s,o,a,l,c,h,u;return n=new we({props:{data:e[2]}}),r=new Ke({props:{title:"About 🕺"}}),o=new Oe({props:{data:e[2],visible:e[0]}}),l=new Ke({props:{title:"Projects 🤓"}}),h=new Ve({props:{data:e[2],visible:e[1]}}),{c(){t=w("div"),te(n.$$.fragment),i=I(),te(r.$$.fragment),s=I(),te(o.$$.fragment),a=I(),te(l.$$.fragment),c=I(),te(h.$$.fragment),x(t,"id","parent")},m(e,d){g(e,t,d),ne(n,t,null),f(t,i),ne(r,t,null),f(t,s),ne(o,t,null),f(t,a),ne(l,t,null),f(t,c),ne(h,t,null),u=!0},p(e,[t]){const n={};1&t&&(n.visible=e[0]),o.$set(n);const i={};2&t&&(i.visible=e[1]),h.$set(i)},i(e){u||(J(n.$$.fragment,e),J(r.$$.fragment,e),J(o.$$.fragment,e),J(l.$$.fragment,e),J(h.$$.fragment,e),u=!0)},o(e){X(n.$$.fragment,e),X(r.$$.fragment,e),X(o.$$.fragment,e),X(l.$$.fragment,e),X(h.$$.fragment,e),u=!1},d(e){e&&y(t),ie(n),ie(r),ie(o),ie(l),ie(h)}}}function Ea(e){let t=document.querySelector(e),n=t.offsetTop,i=t.offsetLeft,r=t.offsetWidth,s=t.offsetHeight;for(;t.offsetParent;)t=t.offsetParent,n+=t.offsetTop,i+=t.offsetLeft;return n<window.pageYOffset+window.innerHeight&&i<window.pageXOffset+window.innerWidth&&n+s>window.pageYOffset&&i+r>window.pageXOffset}function xa(e,t,n){const i=function(e,t={}){"object"!=typeof t&&(t={name:t});const n=Object.assign({name:Bt,automaticDataCollectionEnabled:!1},t),i=n.name;if("string"!=typeof i||!i)throw Jt.create("bad-app-name",{appName:String(i)});const r=Yt.get(i);if(r){if(wt(e,r.options)&&wt(n,r.config))return r;throw Jt.create("duplicate-app",{appName:i})}const s=new At(i);for(const e of Gt.values())s.addComponent(e);const o=new Xt(e,n,s);return Yt.set(i,o),o}({apiKey:"AIzaSyAvRHZJehOoiB8CYaFHarHD7BIWAmDuti4",authDomain:"web-portfolio-b463f.firebaseapp.com",databaseURL:"https://web-portfolio-b463f-default-rtdb.europe-west1.firebasedatabase.app",projectId:"web-portfolio-b463f",storageBucket:"web-portfolio-b463f.appspot.com",messagingSenderId:"105787201060",appId:"1:105787201060:web:52de0afde43d85458caab1",measurementId:"G-Q4PWGY531T"}),r=Ho(i);let s=new ba;!function(){const e=((t=xt(t=r))._checkNotDeleted("ref"),void 0!==n?qo(t._root,n):t._root);var t,n,i;(i=qo(e,"/public"),Eo((i=xt(i))._repo,i).then((e=>new $o(e,new Fo(i._repo,i._path),i._queryParams.getIndex())))).then((e=>{e.exists()?s.next(e.val()):console.log("No data available")})).catch((e=>{console.error(e)}))}();let o=!1,a=!1;return window.addEventListener("scroll",(()=>{n(0,o=!!o||Ea("#about-wrapper")),n(1,a=!!a||Ea("#projects-wrapper"))})),[o,a,s]}return new class extends oe{constructor(e){super(),se(this,e,xa,Ia,o,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map
