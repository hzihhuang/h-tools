(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function c(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=c(e);fetch(e.href,t)}})();const _="/h-tools/assets/logo-BhAK08ly.png",h="modulepreload",V=function(s){return"/h-tools/"+s},d={},p=function(n,c,r){let e=Promise.resolve();if(c&&c.length>0){const t=document.getElementsByTagName("link");e=Promise.all(c.map(o=>{if(o=V(o),o in d)return;d[o]=!0;const i=o.endsWith(".css"),f=i?'[rel="stylesheet"]':"";if(!!r)for(let a=t.length-1;a>=0;a--){const u=t[a];if(u.href===o&&(!i||u.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${o}"]${f}`))return;const l=document.createElement("link");if(l.rel=i?"stylesheet":h,i||(l.as="script",l.crossOrigin=""),l.href=o,document.head.appendChild(l),i)return new Promise((a,u)=>{l.addEventListener("load",a),l.addEventListener("error",()=>u(new Error(`Unable to preload CSS for ${o}`)))})}))}return e.then(()=>n()).catch(t=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=t,window.dispatchEvent(o),!o.defaultPrevented)throw t})},m=[{path:"/sprite",name:"雪碧图",component:()=>p(()=>import("./index-DUG-R5Pp.js"),__vite__mapDeps([0,1]))},{path:"/base64-to-Img",name:"base64-to-Img",component:()=>p(()=>import("./base64Img-Gz9aCdK1.js"),__vite__mapDeps([2,3]))},{path:"/to-base64",name:"to-base64",component:()=>p(()=>import("./toBase64-BxETHuNX.js"),__vite__mapDeps([]))}],g=[{path:"/",redirect:m[0].path},...m],y=VueRouter.createRouter({history:VueRouter.createWebHashHistory(),routes:g}),v={class:"flex items-center justify-between min-w-[800px] shadow-lg py-4 lg:px-12 px-4 h-16"},E=Vue.createElementVNode("div",{class:"flex items-center"},[Vue.createElementVNode("img",{class:"h-14",src:_,style:{margin:"-12px",filter:"invert(1)"}}),Vue.createElementVNode("div",{class:"text-lg"},"Tools")],-1),k={class:"flex items-center"},x={key:0,class:"py-1 px-3 mx-1 my-1 bg-slate-200 rounded-md"},b=["onClick"],B=Vue.defineComponent({__name:"header",setup(s){return(n,c)=>(Vue.openBlock(),Vue.createElementBlock("header",v,[E,Vue.createElementVNode("div",k,[(Vue.openBlock(!0),Vue.createElementBlock(Vue.Fragment,null,Vue.renderList(Vue.unref(m),r=>(Vue.openBlock(),Vue.createElementBlock(Vue.Fragment,{key:r.name},[r.path===n.$route.path?(Vue.openBlock(),Vue.createElementBlock("button",x,Vue.toDisplayString(r.name),1)):(Vue.openBlock(),Vue.createElementBlock("button",{key:1,class:"hover:bg-slate-100 active:bg-slate-200 transition-all px-4 py-2 active:px-3 active:py-1 active:mx-1 active:my-1 rounded-md",onClick:e=>n.$router.push(r.path)},Vue.toDisplayString(r.name),9,b))],64))),128))])]))}}),w=(s,n)=>{const c=s.__vccOpts||s;for(const[r,e]of n)c[r]=e;return c},R={},L={class:"relative min-w-[800px] lg:px-24 lg:pb-24 lg:pt-12 pt-6 pb-12 px-12 h-[calc(100vh-4rem)] flex items-center justify-center flex-col"};function P(s,n){return Vue.openBlock(),Vue.createElementBlock("main",L,[Vue.renderSlot(s.$slots,"default")])}const N=w(R,[["render",P]]),O=Vue.defineComponent({__name:"App",setup(s){return(n,c)=>{const r=Vue.resolveComponent("RouterView");return Vue.openBlock(),Vue.createElementBlock(Vue.Fragment,null,[Vue.createVNode(B),Vue.createVNode(N,null,{default:Vue.withCtx(()=>[Vue.createVNode(r)]),_:1})],64)}}});Vue.createApp(O).use(y).mount("#app");export{w as _};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-DUG-R5Pp.js","assets/index-DDp5x7ZV.css","assets/base64Img-Gz9aCdK1.js","assets/base64Img-CpzKJmpJ.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}