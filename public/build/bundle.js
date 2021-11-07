var app=function(){"use strict";function e(){}const t=e=>e;function n(e){return e()}function r(){return Object.create(null)}function l(e){e.forEach(n)}function s(e){return"function"==typeof e}function i(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}let o;function a(e,t){return o||(o=document.createElement("a")),o.href=t,e===o.href}const c="undefined"!=typeof window;let u=c?()=>window.performance.now():()=>Date.now(),d=c?e=>requestAnimationFrame(e):e;const f=new Set;function m(e){f.forEach((t=>{t.c(e)||(f.delete(t),t.f())})),0!==f.size&&d(m)}function g(e,t){e.appendChild(t)}function h(e){if(!e)return document;const t=e.getRootNode?e.getRootNode():e.ownerDocument;return t&&t.host?t:e.ownerDocument}function p(e){const t=x("style");return function(e,t){g(e.head||e,t)}(h(e),t),t}function v(e,t,n){e.insertBefore(t,n||null)}function $(e){e.parentNode.removeChild(e)}function w(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function x(e){return document.createElement(e)}function y(e){return document.createTextNode(e)}function b(){return y(" ")}function k(){return y("")}function _(e,t,n,r){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n,r)}function S(e,t,n){null==n?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function M(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}const T=new Set;let L,j=0;function z(e,t,n,r,l,s,i,o=0){const a=16.666/r;let c="{\n";for(let e=0;e<=1;e+=a){const r=t+(n-t)*s(e);c+=100*e+`%{${i(r,1-r)}}\n`}const u=c+`100% {${i(n,1-n)}}\n}`,d=`__svelte_${function(e){let t=5381,n=e.length;for(;n--;)t=(t<<5)-t^e.charCodeAt(n);return t>>>0}(u)}_${o}`,f=h(e);T.add(f);const m=f.__svelte_stylesheet||(f.__svelte_stylesheet=p(e).sheet),g=f.__svelte_rules||(f.__svelte_rules={});g[d]||(g[d]=!0,m.insertRule(`@keyframes ${d} ${u}`,m.cssRules.length));const v=e.style.animation||"";return e.style.animation=`${v?`${v}, `:""}${d} ${r}ms linear ${l}ms 1 both`,j+=1,d}function C(e,t){const n=(e.style.animation||"").split(", "),r=n.filter(t?e=>e.indexOf(t)<0:e=>-1===e.indexOf("__svelte")),l=n.length-r.length;l&&(e.style.animation=r.join(", "),j-=l,j||d((()=>{j||(T.forEach((e=>{const t=e.__svelte_stylesheet;let n=t.cssRules.length;for(;n--;)t.deleteRule(n);e.__svelte_rules={}})),T.clear())})))}function E(e){L=e}function A(){if(!L)throw new Error("Function called outside component initialization");return L}function R(e){A().$$.on_mount.push(e)}const H=[],V=[],B=[],D=[],U=Promise.resolve();let P=!1;function I(e){B.push(e)}let q=!1;const F=new Set;function N(){if(!q){q=!0;do{for(let e=0;e<H.length;e+=1){const t=H[e];E(t),J(t.$$)}for(E(null),H.length=0;V.length;)V.pop()();for(let e=0;e<B.length;e+=1){const t=B[e];F.has(t)||(F.add(t),t())}B.length=0}while(H.length);for(;D.length;)D.pop()();P=!1,q=!1,F.clear()}}function J(e){if(null!==e.fragment){e.update(),l(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(I)}}let O;function G(e,t,n){e.dispatchEvent(function(e,t,n=!1){const r=document.createEvent("CustomEvent");return r.initCustomEvent(e,n,!1,t),r}(`${t?"intro":"outro"}${n}`))}const W=new Set;let Z;function Q(){Z={r:0,c:[],p:Z}}function X(){Z.r||l(Z.c),Z=Z.p}function K(e,t){e&&e.i&&(W.delete(e),e.i(t))}function Y(e,t,n,r){if(e&&e.o){if(W.has(e))return;W.add(e),Z.c.push((()=>{W.delete(e),r&&(n&&e.d(1),r())})),e.o(t)}}const ee={duration:0};function te(n,r,i,o){let a=r(n,i),c=o?0:1,g=null,h=null,p=null;function v(){p&&C(n,p)}function $(e,t){const n=e.b-c;return t*=Math.abs(n),{a:c,b:e.b,d:n,duration:t,start:e.start,end:e.start+t,group:e.group}}function w(r){const{delay:s=0,duration:i=300,easing:o=t,tick:w=e,css:x}=a||ee,y={start:u()+s,b:r};r||(y.group=Z,Z.r+=1),g||h?h=y:(x&&(v(),p=z(n,c,r,i,s,o,x)),r&&w(0,1),g=$(y,i),I((()=>G(n,r,"start"))),function(e){let t;0===f.size&&d(m),new Promise((n=>{f.add(t={c:e,f:n})}))}((e=>{if(h&&e>h.start&&(g=$(h,i),h=null,G(n,g.b,"start"),x&&(v(),p=z(n,c,g.b,g.duration,0,o,a.css))),g)if(e>=g.end)w(c=g.b,1-c),G(n,g.b,"end"),h||(g.b?v():--g.group.r||l(g.group.c)),g=null;else if(e>=g.start){const t=e-g.start;c=g.a+g.d*o(t/g.duration),w(c,1-c)}return!(!g&&!h)})))}return{run(e){s(a)?(O||(O=Promise.resolve(),O.then((()=>{O=null}))),O).then((()=>{a=a(),w(e)})):w(e)},end(){v(),g=h=null}}}function ne(e){e&&e.c()}function re(e,t,r,i){const{fragment:o,on_mount:a,on_destroy:c,after_update:u}=e.$$;o&&o.m(t,r),i||I((()=>{const t=a.map(n).filter(s);c?c.push(...t):l(t),e.$$.on_mount=[]})),u.forEach(I)}function le(e,t){const n=e.$$;null!==n.fragment&&(l(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function se(e,t){-1===e.$$.dirty[0]&&(H.push(e),P||(P=!0,U.then(N)),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function ie(t,n,s,i,o,a,c,u=[-1]){const d=L;E(t);const f=t.$$={fragment:null,ctx:null,props:a,update:e,not_equal:o,bound:r(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(d?d.$$.context:[])),callbacks:r(),dirty:u,skip_bound:!1,root:n.target||d.$$.root};c&&c(f.root);let m=!1;if(f.ctx=s?s(t,n.props||{},((e,n,...r)=>{const l=r.length?r[0]:n;return f.ctx&&o(f.ctx[e],f.ctx[e]=l)&&(!f.skip_bound&&f.bound[e]&&f.bound[e](l),m&&se(t,e)),n})):[],f.update(),m=!0,l(f.before_update),f.fragment=!!i&&i(f.ctx),n.target){if(n.hydrate){const e=function(e){return Array.from(e.childNodes)}(n.target);f.fragment&&f.fragment.l(e),e.forEach($)}else f.fragment&&f.fragment.c();n.intro&&K(t.$$.fragment),re(t,n.target,n.anchor,n.customElement),N()}E(d)}class oe{$destroy(){le(this,1),this.$destroy=e}$on(e,t){const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const e=n.indexOf(t);-1!==e&&n.splice(e,1)}}$set(e){var t;this.$$set&&(t=e,0!==Object.keys(t).length)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const ae=[];function ce(e){const t=e-1;return t*t*t+1}function ue(e,{delay:t=0,duration:n=400,easing:r=ce,x:l=0,y:s=0,opacity:i=0}={}){const o=getComputedStyle(e),a=+o.opacity,c="none"===o.transform?"":o.transform,u=a*(1-i);return{delay:t,duration:n,easing:r,css:(e,t)=>`\n\t\t\ttransform: ${c} translate(${(1-e)*l}px, ${(1-e)*s}px);\n\t\t\topacity: ${a-u*t}`}}function de(t){let n;return{c(){n=x("div"),n.innerHTML='<svg id="message" class="relative w-1/2" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M467 61H45C20.218 61 0 81.196 0 106v300c0 24.72 20.128 45 45 45h422c24.72 0 45-20.128 45-45V106c0-24.72-20.128-45-45-45zm-6.214 30L256.954 294.833 51.359 91h409.427zM30 399.788V112.069l144.479 143.24L30 399.788zM51.213 421l144.57-144.57 50.657 50.222c5.864 5.814 15.327 5.795 21.167-.046L317 277.213 460.787 421H51.213zM482 399.787L338.213 256 482 112.212v287.575z"></path><path d="M154.661 192.852L52.373 91.452l101.814-.161a78521.3 78521.3 0 01203.707 0l101.895.16-101.42 101.4-101.42 101.401zM410.263 327.356l-71.356-71.358 71.516-71.513 71.515-71.514v142.872c0 78.58-.071 142.871-.16 142.871-.087 0-32.269-32.11-71.515-71.358z" id="path1" fill="#9fdcff" fill-rule="evenodd"></path><path d="M123.882 348.88l71.984-71.984 25.795 25.72c16.74 16.692 26.73 26.187 28.46 27.05 3.655 1.825 9.992 1.828 13.657.006 1.736-.863 11.485-10.123 27.982-26.58l25.317-25.256 71.512 71.515 71.513 71.514H51.897zM30.062 256.104V113.179l2.373 1.95c1.305 1.072 33.646 33.064 71.868 71.093l69.495 69.145-71.868 71.831-71.868 71.83z" id="path2" fill="#9fdcff" fill-rule="evenodd"></path></svg>',S(n,"class","w-1/6 lg:w-1/12 fixed top-0 left-0"),S(n,"id","message")},m(e,t){v(e,n,t)},p:e,i:e,o:e,d(e){e&&$(n)}}}class fe extends oe{constructor(e){super(),ie(this,e,null,de,i,{})}}function me(e){let t,n,r,l,s,i,o,a,c;var u=e[0];return u&&(l=new u({})),{c(){t=x("h3"),t.innerHTML="Hi, I&#39;m Sean Cunniffe. <br/>Welcome to my Web Portfolio",r=b(),l&&ne(l.$$.fragment),s=b(),i=x("a"),o=x("h3"),o.textContent="Link to CV",S(t,"class","self-center text-2xl md:text-5xl text-center"),S(o,"class","mt-4 md:mt-0 text-blue-600 text-xl"),S(i,"target","_blank"),S(i,"href","https://drive.google.com/uc?export=view&id=1Zx4OJHz992_D9ldnsdQBeBRdWUZmX5JV"),S(i,"class","text-center")},m(e,n){v(e,t,n),v(e,r,n),l&&re(l,e,n),v(e,s,n),v(e,i,n),g(i,o),c=!0},p(e,t){if(u!==(u=e[0])){if(l){Q();const e=l;Y(e.$$.fragment,1,0,(()=>{le(e,1)})),X()}u?(l=new u({}),ne(l.$$.fragment),K(l.$$.fragment,1),re(l,s.parentNode,s)):l=null}},i(e){c||(I((()=>{n||(n=te(t,ue,{y:-200,duration:2e3},!0)),n.run(1)})),l&&K(l.$$.fragment,e),I((()=>{a||(a=te(o,ue,{y:200,duration:2200,delay:2e3},!0)),a.run(1)})),c=!0)},o(e){n||(n=te(t,ue,{y:-200,duration:2e3},!1)),n.run(0),l&&Y(l.$$.fragment,e),a||(a=te(o,ue,{y:200,duration:2200,delay:2e3},!1)),a.run(0),c=!1},d(e){e&&$(t),e&&n&&n.end(),e&&$(r),l&&le(l,e),e&&$(s),e&&$(i),e&&a&&a.end()}}}function ge(e){let t,n,r,l,s,i,o,a,c,u,d=e[1]&&me(e);return c=new fe({}),{c(){t=x("div"),n=x("div"),r=x("div"),r.innerHTML='<embed id="computer" class="mr-auto w-1/6 lg:w-1/12 h-full" type="image/svg+xml" src="assets/images/computer.svg" alt=""/> \n\n            <img id="server" src="assets/images/server.svg" class="ml-auto w-1/6 lg:w-1/12" alt=""/>',l=b(),s=x("div"),d&&d.c(),i=b(),o=x("div"),o.innerHTML='<img id="router" src="assets/images/router.svg" class="mr-auto w-1/6 lg:w-1/12" alt=""/> \n            <img id="switch" src="assets/images/switch.svg" class="ml-auto w-1/6 lg:w-1/12" alt=""/>',a=b(),ne(c.$$.fragment),S(r,"class","flex flex-row w-full"),S(s,"class","mb-auto mt-auto"),S(o,"class","flex flex-row w-full"),S(n,"id","parent"),S(n,"class","h-screen flex flex-col md:w-screen xl:w-3/4 m-auto p-10 pb-20 sm:p-7 relative overflow-hidden"),S(t,"id","home-wrapper"),S(t,"class","svelte-131u69v")},m(e,f){v(e,t,f),g(t,n),g(n,r),g(n,l),g(n,s),d&&d.m(s,null),g(n,i),g(n,o),g(t,a),re(c,t,null),u=!0},p(e,[t]){e[1]?d?(d.p(e,t),2&t&&K(d,1)):(d=me(e),d.c(),K(d,1),d.m(s,null)):d&&(Q(),Y(d,1,1,(()=>{d=null})),X())},i(e){u||(K(d),K(c.$$.fragment,e),u=!0)},o(e){Y(d),Y(c.$$.fragment,e),u=!1},d(e){e&&$(t),d&&d.d(),le(c)}}}function he(e){return new Promise((t=>{let n=setInterval((()=>{let r=function(e){let t=document.querySelector("#"+e).getBoundingClientRect();return{x:Math.round(t.left),y:Math.round(t.top)}}(e);(function(e,t){let n=document.querySelector("#message"),r="px",l=+n.style.left.replace(r,""),s=+n.style.top.replace(r,"");if(l<e-6)n.style.left=l+6+r;else if(l>e+6)n.style.left=l-6+r;else if(s>=t-6&&s<=t+6)return!0;if(s<t-6)n.style.top=s+6+r;else if(s>t+6)n.style.top=s-6+r;else if(l>=e-6&&l<=e+6)return!0;return!1})(Math.round(r.x),Math.round(r.y))&&(clearInterval(n),t(!0))}),4)}))}function pe(e,t,n){let{nav:r=null}=t,l=!1;var s;return s=()=>{document.querySelector("#message").style.visibility="hidden"},A().$$.on_destroy.push(s),R((async()=>{let e=document.querySelector("#message");e.style.visibility="hidden",setTimeout((()=>{n(1,l=!0)}),500),await new Promise((e=>setTimeout(e,1500))),await he("computer").then((()=>e.style.visibility="visible")),await he("router"),await he("switch"),await he("server"),await he("switch"),await he("router"),await he("computer").then((()=>{e.style.visibility="hidden",document.querySelector("#computer").getSVGDocument().getElementById("hello-world").style.visibility="visible"}))})),e.$$set=e=>{"nav"in e&&n(0,r=e.nav)},[r,l]}function ve(e,t,n){const r=e.slice();return r[3]=t[n],r}function $e(e){let t,n,r,l,s,i,o,c,u,d,f,m,h,p,y,k,_,M,T,L,j,z,C=e[2],E=[];for(let t=0;t<C.length;t+=1)E[t]=we(ve(e,C,t));return{c(){t=x("div"),n=x("img"),s=b(),i=x("div"),i.innerHTML='<a href="https://www.linkedin.com/in/sean-cunniffe-60a6931b8/" target="_blank"><svg id="linkedin" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="linkedin" class="svg-inline--fa fa-linkedin fa-w-14 h-10 cursor-pointer svelte-1ju1k8l" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 448"><path fill="#0e76a8" d="M416 0L28.736-13.923c-17.589-.633-44.39-1.113-43.925 45.59l3.797 382.134c.79 79.523 22.528 38.485 40.128 38.63l386.631 3.164c17.6.144 53.798 9.547 53.518-8.251L461.923 5.086C461.643-12.712 433.59.632 416 0zM135.4 384H69V170.2h66.5V384zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 64 102.2 64c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V280c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V384h-66.4V170.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9z" class="svelte-1ju1k8l"></path></svg></a> \n                        <a class="my-auto block ml-8" href="mailto: sean.cunniffe927@gmail.com" target="_blank"><svg class="h-9 cursor-pointer svelte-1ju1k8l" xmlns="http://www.w3.org/2000/svg" viewBox="52 42 88 66" id="gmail-icon"><path fill="#4285f4" d="M58 108h14V74L52 59v43c0 3.32 2.69 6 6 6" class="svelte-1ju1k8l"></path><path fill="#34a853" d="M120 108h14c3.32 0 6-2.69 6-6V59l-20 15" class="svelte-1ju1k8l"></path><path fill="#fbbc04" d="M120 48v26l20-15v-8c0-7.42-8.47-11.65-14.4-7.2" class="svelte-1ju1k8l"></path><path fill="#ea4335" d="M72 74V48l24 18 24-18v26L96 92" class="svelte-1ju1k8l"></path><path fill="#c5221f" d="M52 51v8l20 15V48l-5.6-4.2c-5.94-4.45-14.4-.22-14.4 7.2" class="svelte-1ju1k8l"></path></svg></a> \n                        <a class="my-auto block ml-8" href="https://github.com/sean-cunniffe" target="_blank"><svg id="github-icon" aria-hidden="true" data-prefix="fab" data-icon="github-square" class="prefix__prefix__svg-inline--fa prefix__prefix__fa-github-square prefix__prefix__fa-w-14 h-10 cursor-pointer svelte-1ju1k8l" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 448"><path fill="currentColor" d="M450.462-11.692L41.846-15.385c-26.499-.24-60.055 11.08-61.538 37.539l-23.385 417.23c-1.483 26.46 65.194 20.656 91.692 20.924L414.77 464c34.26.345 59.136-20.916 57.846-47.385L454.77 50.462c-1.29-26.469 22.191-61.915-4.307-62.154zM277.3 383.7c-8.4 1.5-11.5-3.7-11.5-8 0-5.4.2-33 .2-55.3 0-15.6-5.2-25.5-11.3-30.7 37-4.1 76-9.2 76-73.1 0-18.2-6.5-27.3-17.1-39 1.7-4.3 7.4-22-1.7-45-13.9-4.3-45.7 17.9-45.7 17.9-13.2-3.7-27.5-5.6-41.6-5.6-14.1 0-28.4 1.9-41.6 5.6 0 0-31.8-22.2-45.7-17.9-9.1 22.9-3.5 40.6-1.7 45-10.6 11.7-15.6 20.8-15.6 39 0 63.6 37.3 69 74.3 73.1-4.8 4.3-9.1 11.7-10.6 22.3-9.5 4.3-33.8 11.7-48.3-13.9-9.1-15.8-25.5-17.1-25.5-17.1-16.2-.2-1.1 10.2-1.1 10.2 10.8 5 18.4 24.2 18.4 24.2 9.7 29.7 56.1 19.7 56.1 19.7 0 13.9.2 36.5.2 40.6 0 4.3-3 9.5-11.5 8-66-22.1-112.2-84.9-112.2-158.3 0-91.8 70.2-161.5 162-161.5S388 133.6 388 225.4c.1 73.4-44.7 136.3-110.7 158.3zm-98.1-61.1c-1.9.4-3.7-.4-3.9-1.7-.2-1.5 1.1-2.8 3-3.2 1.9-.2 3.7.6 3.9 1.9.3 1.3-1 2.6-3 3zm-9.5-.9c0 1.3-1.5 2.4-3.5 2.4-2.2.2-3.7-.9-3.7-2.4 0-1.3 1.5-2.4 3.5-2.4 1.9-.2 3.7.9 3.7 2.4zm-13.7-1.1c-.4 1.3-2.4 1.9-4.1 1.3-1.9-.4-3.2-1.9-2.8-3.2.4-1.3 2.4-1.9 4.1-1.5 2 .6 3.3 2.1 2.8 3.4zm-12.3-5.4c-.9 1.1-2.8.9-4.3-.6-1.5-1.3-1.9-3.2-.9-4.1.9-1.1 2.8-.9 4.3.6 1.3 1.3 1.8 3.3.9 4.1zm-9.1-9.1c-.9.6-2.6 0-3.7-1.5s-1.1-3.2 0-3.9c1.1-.9 2.8-.2 3.7 1.3 1.1 1.5 1.1 3.3 0 4.1zm-6.5-9.7c-.9.9-2.4.4-3.5-.6-1.1-1.3-1.3-2.8-.4-3.5.9-.9 2.4-.4 3.5.6 1.1 1.3 1.3 2.8.4 3.5zm-6.7-7.4c-.4.9-1.7 1.1-2.8.4-1.3-.6-1.9-1.7-1.5-2.6.4-.6 1.5-.9 2.8-.4 1.3.7 1.9 1.8 1.5 2.6z" class="svelte-1ju1k8l"></path></svg></a>',c=b(),u=x("div"),d=x("h1"),d.textContent="Hi, Im Sean",f=b(),m=x("br"),h=b(),p=x("p"),p.innerHTML="I&#39;m currently studying a Masters in Applied Software\n                        Engineering in TUS (technological university of the\n                        shannon midlands midwest). <br/>\n                        I&#39;m passionate about programming and solving complex problems\n                        using efficient and (when possible) simple solutions, and\n                        keeping up-to date with current technologies being developed.",y=b(),k=x("div"),_=x("h2"),_.textContent="Education",M=b(),T=x("h2"),T.textContent="Date finished",L=b();for(let e=0;e<E.length;e+=1)E[e].c();a(n.src,r="assets/images/profile-pic-1-smaller.jpg")||S(n,"src","assets/images/profile-pic-1-smaller.jpg"),S(n,"class","w-full m-auto md:m-0 bg-cover border-gray-300 border-4"),S(n,"alt",""),S(i,"class","mx-auto w-max mt-4 flex flex-row"),S(t,"class","w-3/4 md:w-3/5 2xl:w-2/5 mx-auto md:mx-0"),S(d,"class","text-center md:text-left mt-3.5 md:mt-0 text-3xl font-thin"),S(p,"class","text-center md:text-left"),S(_,"class","font-bold mt-4"),S(T,"class","font-bold mt-4 text-center"),S(k,"class","grid grid-cols-2"),S(u,"class","m-auto ml-8")},m(e,r){v(e,t,r),g(t,n),g(t,s),g(t,i),v(e,c,r),v(e,u,r),g(u,d),g(u,f),g(u,m),g(u,h),g(u,p),g(u,y),g(u,k),g(k,_),g(k,M),g(k,T),g(k,L);for(let e=0;e<E.length;e+=1)E[e].m(k,null);z=!0},p(e,t){if(4&t){let n;for(C=e[2],n=0;n<C.length;n+=1){const r=ve(e,C,n);E[n]?E[n].p(r,t):(E[n]=we(r),E[n].c(),E[n].m(k,null))}for(;n<E.length;n+=1)E[n].d(1);E.length=C.length}},i(e){z||(I((()=>{l||(l=te(n,ue,{x:-1e3,duration:2e3},!0)),l.run(1)})),I((()=>{o||(o=te(i,ue,{x:-1e3,duration:2e3},!0)),o.run(1)})),I((()=>{j||(j=te(u,ue,{x:1e3,duration:2e3},!0)),j.run(1)})),z=!0)},o(e){l||(l=te(n,ue,{x:-1e3,duration:2e3},!1)),l.run(0),o||(o=te(i,ue,{x:-1e3,duration:2e3},!1)),o.run(0),j||(j=te(u,ue,{x:1e3,duration:2e3},!1)),j.run(0),z=!1},d(e){e&&$(t),e&&l&&l.end(),e&&o&&o.end(),e&&$(c),e&&$(u),w(E,e),e&&j&&j.end()}}}function we(t){let n,r,l,s,i,o,a=t[3].title+"",c=t[3].dateFinished+"";return{c(){n=x("p"),r=y(a),l=b(),s=x("p"),i=y(c),o=b(),S(n,"class","my-2"),S(s,"class","my-2 text-center")},m(e,t){v(e,n,t),g(n,r),v(e,l,t),v(e,s,t),g(s,i),g(s,o)},p:e,d(e){e&&$(n),e&&$(l),e&&$(s)}}}function xe(e){let t,n,r,l,s,i;var o=e[0];o&&(r=new o({}));let a=e[1]&&$e(e);return{c(){t=x("div"),n=x("div"),r&&ne(r.$$.fragment),l=b(),s=x("div"),a&&a.c(),S(s,"class","flex flex-col md:flex-row w-full m-auto"),S(n,"class","h-screen flex flex-col mb-8 md:mb-0 md:w-screen xl:w-3/4 m-auto p-10 pb-20 sm:p-7 bg-white overflow-x-hidden"),S(t,"id","about-wrapper"),S(t,"class","svelte-1ju1k8l")},m(e,o){v(e,t,o),g(t,n),r&&re(r,n,null),g(n,l),g(n,s),a&&a.m(s,null),i=!0},p(e,[t]){if(o!==(o=e[0])){if(r){Q();const e=r;Y(e.$$.fragment,1,0,(()=>{le(e,1)})),X()}o?(r=new o({}),ne(r.$$.fragment),K(r.$$.fragment,1),re(r,n,l)):r=null}e[1]?a?(a.p(e,t),2&t&&K(a,1)):(a=$e(e),a.c(),K(a,1),a.m(s,null)):a&&(Q(),Y(a,1,1,(()=>{a=null})),X())},i(e){i||(r&&K(r.$$.fragment,e),K(a),i=!0)},o(e){r&&Y(r.$$.fragment,e),Y(a),i=!1},d(e){e&&$(t),r&&le(r),a&&a.d()}}}function ye(e,t,n){let{nav:r=null}=t,l=!1;setTimeout((()=>{n(1,l=!0)}),500);return e.$$set=e=>{"nav"in e&&n(0,r=e.nav)},[r,l,[{title:"Applied Software Engineering (Msc) in TUS",dateFinished:"Current"},{title:"Certificate in Software Engineering in TUS",dateFinished:"2021"},{title:"Electronic and Computer Engineering (BEng) in NUI Galway",dateFinished:"2019"}]]}function be(e){let t,n,r,l,s,i,o,c,u,d,f,m,h,p,w,k,_,T,L;function j(e,t){return e[5]?_e:ke}let z=j(e),C=z(e);return{c(){t=x("div"),n=x("img"),l=b(),s=x("div"),i=x("h3"),o=y(e[0]),c=b(),u=x("div"),d=x("h2"),d.textContent="Tools/Skills:",f=b(),m=x("p"),h=y(e[2]),p=b(),C.c(),w=b(),k=x("p"),_=y(e[1]),S(n,"class","mx-auto md:w-1/3 mb-auto mt-2 md:mr-3 md:ml-0 rounded-2xl"),a(n.src,r=e[3])||S(n,"src",r),S(n,"alt",""),S(i,"class","font-semibold text-2xl mb-2 text-center md:text-left"),S(d,"class","font-semibold mr-2"),S(u,"class","flex flex-row mt-2 mx-auto md:mx-0"),S(k,"class","text-center md:text-left"),S(s,"class","ml-3"),S(t,"class","w-5/6 border-2 shadow-xl flex flex-col md:flex-row m-3.5 ml-auto mr-auto p-3 pl-6 pr-6 rounded-2xl")},m(e,r){v(e,t,r),g(t,n),g(t,l),g(t,s),g(s,i),g(i,o),g(s,c),g(s,u),g(u,d),g(u,f),g(u,m),g(m,h),g(s,p),C.m(s,null),g(s,w),g(s,k),g(k,_),L=!0},p(t,l){e=t,(!L||8&l&&!a(n.src,r=e[3]))&&S(n,"src",r),(!L||1&l)&&M(o,e[0]),(!L||4&l)&&M(h,e[2]),z===(z=j(e))&&C?C.p(e,l):(C.d(1),C=z(e),C&&(C.c(),C.m(s,w))),(!L||2&l)&&M(_,e[1])},i(n){L||(I((()=>{T||(T=te(t,ue,{x:500,duration:1e3,delay:e[4]},!0)),T.run(1)})),L=!0)},o(n){T||(T=te(t,ue,{x:500,duration:1e3,delay:e[4]},!1)),T.run(0),L=!1},d(e){e&&$(t),C.d(),e&&T&&T.end()}}}function ke(t){let n;return{c(){n=x("br")},m(e,t){v(e,n,t)},p:e,d(e){e&&$(n)}}}function _e(e){let t,n;return{c(){t=x("a"),n=x("button"),n.textContent="Live Demo",S(n,"class","bg-white transition-colors hover:bg-gray-900 hover:text-white text-gray-900 py-1 px-2 rounded my-2 mx-auto md:mx-0 block"),S(t,"href",e[5]),S(t,"target","_blank")},m(e,r){v(e,t,r),g(t,n)},p(e,n){32&n&&S(t,"href",e[5])},d(e){e&&$(t)}}}function Se(e){let t,n,r=e[6]&&be(e);return{c(){r&&r.c(),t=k()},m(e,l){r&&r.m(e,l),v(e,t,l),n=!0},p(e,[n]){e[6]?r?(r.p(e,n),64&n&&K(r,1)):(r=be(e),r.c(),K(r,1),r.m(t.parentNode,t)):r&&(Q(),Y(r,1,1,(()=>{r=null})),X())},i(e){n||(K(r),n=!0)},o(e){Y(r),n=!1},d(e){r&&r.d(e),e&&$(t)}}}function Me(e,t,n){let{title:r=null}=t,{description:l=null}=t,{skills:s=null}=t,{imageURL:i=null}=t,{delay:o=0}=t,{link:a=null}=t,c=!1;return R((()=>{setTimeout((()=>{n(6,c=!0)}),1e3)})),e.$$set=e=>{"title"in e&&n(0,r=e.title),"description"in e&&n(1,l=e.description),"skills"in e&&n(2,s=e.skills),"imageURL"in e&&n(3,i=e.imageURL),"delay"in e&&n(4,o=e.delay),"link"in e&&n(5,a=e.link)},[r,l,s,i,o,a,c]}class Te extends oe{constructor(e){super(),ie(this,e,Me,Se,i,{title:0,description:1,skills:2,imageURL:3,delay:4,link:5})}}function Le(e){let t,n,r,l,s,i,o,a,c,u,d,f,m,h;var p=e[0];return p&&(r=new p({})),s=new Te({props:{title:"Exercise Tracker API",description:"A Rest API for users to track their exercise progress. The user can create an account that is verified by email verification and then tracks their progress using the endpoints provided. The API uses JSON Web Tokens for authentication which is added to the security.filters of Spring Security.",skills:"Java, Spring Boot/Security/Data",imageURL:"assets/images/fitness-tracker-smaller.jpg",delay:je+=300}}),o=new Te({props:{title:"Visual Searching Algorithms",description:"A visual demonstration of two different searching algorithms for searching trees/graphs, Depth-First Search and Breadth-First Search. The app generates a random graph of nodes with random connections,the two searching algorithms transverse the graph to either find a selected node or to just demonstrate how they transverse a graph.",skills:"TypeScript, Angular, Searching Algorithms",imageURL:"assets/images/search-smaller.jpg",link:"https://sean-cunniffe.github.io/Tree-Search",delay:je+=300}}),c=new Te({props:{title:"Visual Sorting Algorithms",description:"A visual demonstration and explanation of four different sorting algorithms.",imageURL:"assets/images/sorting-algo.jpg",skills:"TypeScript, Sorting algorithms",link:"https://sean-cunniffe.github.io/visual-sorting-algorithms/",delay:je+=300}}),d=new Te({props:{title:"Greenway Bicycles",description:"A bicycle companys website where customers can rent bicycles online and staff can manage inventory, customers, bookings, and other staff.This project was completed using TDD and done with an agile scrum team.",skills:"Java, JSF, HTML, CSS, Mockito, CircleCi, Bitbucket, Jira",imageURL:"assets/images/greenway.jpg",delay:je+=300}}),m=new Te({props:{title:"Cart.py",description:"A Classification and Regression Tree algorithm that classifies a set of parameters based on a given dataset. The algorithm builds a decision tree based on the Gini's impurity index. I built this project using Test Driven Development.",skills:"Python, TDD",imageURL:"assets/images/decision-tree.png",delay:je+=300}}),{c(){t=x("div"),n=x("div"),r&&ne(r.$$.fragment),l=b(),ne(s.$$.fragment),i=b(),ne(o.$$.fragment),a=b(),ne(c.$$.fragment),u=b(),ne(d.$$.fragment),f=b(),ne(m.$$.fragment),S(n,"class","h-screen flex flex-col md:w-screen xl:w-3/4 m-auto pb-20 sm:p-7 overflow-x-hidden bg-white"),S(t,"id","projects-wrapper"),S(t,"class","svelte-qfvyy")},m(e,p){v(e,t,p),g(t,n),r&&re(r,n,null),g(n,l),re(s,n,null),g(n,i),re(o,n,null),g(n,a),re(c,n,null),g(n,u),re(d,n,null),g(n,f),re(m,n,null),h=!0},p(e,[t]){if(p!==(p=e[0])){if(r){Q();const e=r;Y(e.$$.fragment,1,0,(()=>{le(e,1)})),X()}p?(r=new p({}),ne(r.$$.fragment),K(r.$$.fragment,1),re(r,n,l)):r=null}},i(e){h||(r&&K(r.$$.fragment,e),K(s.$$.fragment,e),K(o.$$.fragment,e),K(c.$$.fragment,e),K(d.$$.fragment,e),K(m.$$.fragment,e),h=!0)},o(e){r&&Y(r.$$.fragment,e),Y(s.$$.fragment,e),Y(o.$$.fragment,e),Y(c.$$.fragment,e),Y(d.$$.fragment,e),Y(m.$$.fragment,e),h=!1},d(e){e&&$(t),r&&le(r),le(s),le(o),le(c),le(d),le(m)}}}let je=0;function ze(e,t,n){let{nav:r=null}=t;return e.$$set=e=>{"nav"in e&&n(0,r=e.nav)},[r]}let Ce=function(t,n=e){let r;const l=new Set;function s(e){if(i(t,e)&&(t=e,r)){const e=!ae.length;for(const e of l)e[1](),ae.push(e,t);if(e){for(let e=0;e<ae.length;e+=2)ae[e][0](ae[e+1]);ae.length=0}}}return{set:s,update:function(e){s(e(t))},subscribe:function(i,o=e){const a=[i,o];return l.add(a),1===l.size&&(r=n(s)||e),i(t),()=>{l.delete(a),0===l.size&&(r(),r=null)}}}}(0),Ee=null;const Ae=new Map;function Re(e){Ee=e,Ce.set(Ae.get(e))}function He(e,t,n){const r=e.slice();return r[8]=t[n],r[10]=n,r}function Ve(e){let t,n,r=e[8]!=Ee&&function(e){let t,n,r,s,i,o,a,c=e[8]+"";function u(){return e[4](e[8])}return{c(){t=x("button"),n=y(c),t.disabled=e[0],S(t,"id",r=e[8]),S(t,"class","bg-white transition-colors hover:bg-gray-900 hover:text-white text-gray-900 py-2 px-4 rounded m-3.5")},m(r,l){v(r,t,l),g(t,n),i=!0,o||(a=[_(t,"click",u),_(t,"outrostart",e[3]()),_(t,"introend",e[5])],o=!0)},p(n,r){e=n,(!i||1&r)&&(t.disabled=e[0])},i(n){i||(I((()=>{s||(s=te(t,ue,{y:200,duration:2e3,delay:De+150*e[10]},!0)),s.run(1)})),i=!0)},o(n){s||(s=te(t,ue,{y:200,duration:2e3,delay:De+150*e[10]},!1)),s.run(0),i=!1},d(e){e&&$(t),e&&s&&s.end(),o=!1,l(a)}}}(e);return{c(){r&&r.c(),t=k()},m(e,l){r&&r.m(e,l),v(e,t,l),n=!0},p(e,t){e[8]!=Ee&&r.p(e,t)},i(e){n||(K(r),n=!0)},o(e){Y(r),n=!1},d(e){r&&r.d(e),e&&$(t)}}}function Be(e){let t,n,r,s,i,o,a,c,u,d=e[2]()+"",f=e[1],m=[];for(let t=0;t<f.length;t+=1)m[t]=Ve(He(e,f,t));const h=e=>Y(m[e],1,1,(()=>{m[e]=null}));return{c(){t=x("div");for(let e=0;e<m.length;e+=1)m[e].c();n=b(),r=x("div"),s=x("button"),i=y(d),S(t,"class","hidden sm:flex ml-auto mr-auto flex-row justify-center sticky top-0"),s.disabled=e[0],S(s,"class","bg-white transition-colors hover:bg-gray-900 hover:text-white text-gray-900 py-2 px-4 rounded"),S(r,"class","sm:hidden absolute bottom-0 left-0 w-full flex justify-center pb-20")},m(l,o){v(l,t,o);for(let e=0;e<m.length;e+=1)m[e].m(t,null);v(l,n,o),v(l,r,o),g(r,s),g(s,i),a=!0,c||(u=[_(s,"click",e[6]),_(s,"outrostart",e[3]()),_(s,"introend",e[7])],c=!0)},p(n,[r]){if(e=n,11&r){let n;for(f=e[1],n=0;n<f.length;n+=1){const l=He(e,f,n);m[n]?(m[n].p(l,r),K(m[n],1)):(m[n]=Ve(l),m[n].c(),K(m[n],1),m[n].m(t,null))}for(Q(),n=f.length;n<m.length;n+=1)h(n);X()}(!a||1&r)&&(s.disabled=e[0])},i(e){if(!a){for(let e=0;e<f.length;e+=1)K(m[e]);I((()=>{o||(o=te(s,ue,{y:200,duration:2e3,delay:De},!0)),o.run(1)})),a=!0}},o(e){m=m.filter(Boolean);for(let e=0;e<m.length;e+=1)Y(m[e]);o||(o=te(s,ue,{y:200,duration:2e3,delay:De},!1)),o.run(0),a=!1},d(e){e&&$(t),w(m,e),e&&$(n),e&&$(r),e&&o&&o.end(),c=!1,l(u)}}}Ae.set("Home",class extends oe{constructor(e){super(),ie(this,e,pe,ge,i,{nav:0})}}).set("About",class extends oe{constructor(e){super(),ie(this,e,ye,xe,i,{nav:0})}}).set("Projects",class extends oe{constructor(e){super(),ie(this,e,ze,Le,i,{nav:0})}});let De=500;function Ue(e,t,n){const r=["Home","About","Projects"];let l=!1;function s(){let e=0;for(let t=0;t<r.length;t++){if(r[t]===Ee){e=t;break}}return e+1==r.length?e=0:e+=1,r[e]}R((()=>{n(0,l=!0)}));return[l,r,s,async()=>{await new Promise((e=>setTimeout(e,750))),window.scrollTo({top:window.innerHeight,left:0,behavior:"smooth"})},e=>{Re(e)},()=>n(0,l=!1),()=>{Re(s())},()=>n(0,l=!1)]}class Pe extends oe{constructor(e){super(),ie(this,e,Ue,Be,i,{})}}function Ie(e){let t,n,r;var l=e[0];function s(e){return{props:{nav:Pe}}}return l&&(n=new l(s())),{c(){t=x("div"),n&&ne(n.$$.fragment),S(t,"id","parent"),S(t,"class","h-screen")},m(e,l){v(e,t,l),n&&re(n,t,null),r=!0},p(e,[r]){if(l!==(l=e[0])){if(n){Q();const e=n;Y(e.$$.fragment,1,0,(()=>{le(e,1)})),X()}l?(n=new l(s()),ne(n.$$.fragment),K(n.$$.fragment,1),re(n,t,null)):n=null}},i(e){r||(n&&K(n.$$.fragment,e),r=!0)},o(e){n&&Y(n.$$.fragment,e),r=!1},d(e){e&&$(t),n&&le(n)}}}function qe(e,t,n){let r=null;return Ce.subscribe((e=>{n(0,r=e)})),Re("Home"),[r]}return new class extends oe{constructor(e){super(),ie(this,e,qe,Ie,i,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map