import{r as l,o as f,c as m,a as d,b as p,d as _}from"./vendor.7950c4a4.js";const h=function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}};h();var v=(s,i)=>{const n=s.__vccOpts||s;for(const[r,e]of i)n[r]=e;return n};const y={};function g(s,i,n,r,e,t){const o=l("router-view");return f(),m(o)}var b=v(y,[["render",g]]);const P="modulepreload",c={},k="/basic-website-template/",w=function(i,n){return!n||n.length===0?i():Promise.all(n.map(r=>{if(r=`${k}${r}`,r in c)return;c[r]=!0;const e=r.endsWith(".css"),t=e?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${r}"]${t}`))return;const o=document.createElement("link");if(o.rel=e?"stylesheet":P,e||(o.as="script",o.crossOrigin=""),o.href=r,document.head.appendChild(o),e)return new Promise((a,u)=>{o.addEventListener("load",a),o.addEventListener("error",u)})})).then(()=>i())};function $(s){switch(s){case"./pages/HomePage.vue":return w(()=>import("./HomePage.d1c34817.js"),["assets/HomePage.d1c34817.js","assets/HomePage.3a2cc00c.css","assets/vendor.7950c4a4.js"]);default:return new Promise(function(i,n){(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(n.bind(null,new Error("Unknown variable dynamic import: "+s)))})}}function L(s){return()=>$(`./pages/${s}.vue`)}const E=[{path:"/",name:"Home",component:L("HomePage")}],O=d({history:p(),routes:E}),H=_(b);H.use(O).mount("#app");export{v as _};