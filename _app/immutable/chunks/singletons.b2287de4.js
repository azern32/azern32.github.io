import{n as d,s as m}from"./scheduler.e108d1fd.js";const u=[];function p(t,e=d){let n;const o=new Set;function r(s){if(m(t,s)&&(t=s,n)){const c=!u.length;for(const l of o)l[1](),u.push(l,t);if(c){for(let l=0;l<u.length;l+=2)u[l][0](u[l+1]);u.length=0}}}function i(s){r(s(t))}function a(s,c=d){const l=[s,c];return o.add(l),o.size===1&&(n=e(r,i)||d),s(t),()=>{o.delete(l),o.size===0&&n&&(n(),n=null)}}return{set:r,update:i,subscribe:a}}var g;const E=((g=globalThis.__sveltekit_jtbtjt)==null?void 0:g.base)??"";var k;const w=((k=globalThis.__sveltekit_jtbtjt)==null?void 0:k.assets)??E,A="1691559618544",y="sveltekit:snapshot",I="sveltekit:scroll",j="sveltekit:index",_={tap:1,hover:2,viewport:3,eager:4,off:-1};function x(t){let e=t.baseURI;if(!e){const n=t.getElementsByTagName("base");e=n.length?n[0].href:t.URL}return e}function O(){return{x:pageXOffset,y:pageYOffset}}function f(t,e){return t.getAttribute(`data-sveltekit-${e}`)}const b={..._,"":_.hover};function v(t){let e=t.assignedSlot??t.parentNode;return(e==null?void 0:e.nodeType)===11&&(e=e.host),e}function U(t,e){for(;t&&t!==e;){if(t.nodeName.toUpperCase()==="A"&&t.hasAttribute("href"))return t;t=v(t)}}function L(t,e){let n;try{n=new URL(t instanceof SVGAElement?t.href.baseVal:t.href,document.baseURI)}catch{}const o=t instanceof SVGAElement?t.target.baseVal:t.target,r=!n||!!o||S(n,e)||(t.getAttribute("rel")||"").split(/\s+/).includes("external"),i=(n==null?void 0:n.origin)===location.origin&&t.hasAttribute("download");return{url:n,external:r,target:o,download:i}}function N(t){let e=null,n=null,o=null,r=null,i=null,a=null,s=t;for(;s&&s!==document.documentElement;)o===null&&(o=f(s,"preload-code")),r===null&&(r=f(s,"preload-data")),e===null&&(e=f(s,"keepfocus")),n===null&&(n=f(s,"noscroll")),i===null&&(i=f(s,"reload")),a===null&&(a=f(s,"replacestate")),s=v(s);function c(l){switch(l){case"":case"true":return!0;case"off":case"false":return!1;default:return null}}return{preload_code:b[o??"off"],preload_data:b[r??"off"],keep_focus:c(e),noscroll:c(n),reload:c(i),replace_state:c(a)}}function h(t){const e=p(t);let n=!0;function o(){n=!0,e.update(a=>a)}function r(a){n=!1,e.set(a)}function i(a){let s;return e.subscribe(c=>{(s===void 0||n&&c!==s)&&a(s=c)})}return{notify:o,set:r,subscribe:i}}function R(){const{set:t,subscribe:e}=p(!1);let n;async function o(){clearTimeout(n);try{const r=await fetch(`${w}/_app/version.json`,{headers:{pragma:"no-cache","cache-control":"no-cache"}});if(!r.ok)return!1;const a=(await r.json()).version!==A;return a&&(t(!0),clearTimeout(n)),a}catch{return!1}}return{subscribe:e,check:o}}function S(t,e){return t.origin!==location.origin||!t.pathname.startsWith(e)}function P(t){t.client}const V={url:h({}),page:h({}),navigating:p(null),updated:R()};export{j as I,_ as P,I as S,y as a,L as b,N as c,V as d,E as e,U as f,x as g,P as h,S as i,O as s};
