import{i as R,au as V,B as I,m as f,h as b,N as C,O as u,H as m,J as p,aa as $,P as Z,g as y,F as U,ap as v,at as B}from"./index-CTTEeD73.js";import{i as O,g as D,E as L}from"./el-button-DiwRN0Tb.js";import{a as T,E as z}from"./el-input-BCF0m0VN.js";import{_ as N}from"./index.vue_vue_type_script_setup_true_lang-C2HgRb9Z.js";import{j as P}from"./title.vue_vue_type_script_setup_true_lang-BY_sj8s0.js";function j(t,e,a){if(!R(a))return!1;var n=typeof e;return(n=="number"?O(a)&&D(e,a.length):n=="string"&&e in a)?V(a[e],t):!1}function F(t,e,a){var n=-1,l=t.length;e<0&&(e=-e>l?0:l+e),a=a>l?l:a,a<0&&(a+=l),l=e>a?0:a-e>>>0,e>>>=0;for(var s=Array(l);++n<l;)s[n]=t[n+e];return s}var J=Math.ceil,M=Math.max;function S(t,e,a){(a?j(t,e,a):e===void 0)?e=1:e=M(T(e),0);var n=t==null?0:t.length;if(!n||e<1)return[];for(var l=0,s=0,r=Array(J(n/e));l<n;)r[s++]=F(t,l,l+=e);return r}function k(t){return/^[A-Za-z_][A-Za-z0-9_]*$/.test(t)?!["abstract","arguments","await","boolean","break","byte","case","catch","char","class","const","continue","debugger","default","delete","do","double","else","enum","eval","export","extends","false","final","finally","float","for","function","goto","if","implements","import","in","instanceof","int","interface","let","long","native","new","null","package","private","protected","public","return","short","static","super","switch","synchronized","this","throw","throws","transient","true","try","typeof","var","void","volatile","while","with","yield"].includes(t):!1}function W(t){if(!t.startsWith("data:image/"))return"Invalid base64 string";const e=t.substring(t.indexOf("image/")+6,t.indexOf(";"));switch(e){case"svg+xml":return"svg";case"x-icon":return"ico";case"vnd.microsoft.icon":return"ico";default:return e}}function A(t,e){if(typeof t!="string"||t.trim().length===0)return!1;if(!/^data:[a-zA-Z0-9-]+/.test(t))return/^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{3}=|[A-Za-z0-9+/]{2}==)?$/.test(t);switch(e){case"img":return/^data:image\/(png|jpeg|gif|bmp|svg\+xml);base64,(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(t);case"audio":return/^data:audio\/(mpeg|aac|ogg|wav|x-flac|x-ms-wma|midi|amr|awb|x-wavpack|mp4|aac+|eaac+);base64,/.test(t);case"video":return/^data:video\/(mp4|avi|mkv|ogg|webm|quicktime|wmv|x-flv|3gp|3gpp|mpeg|hevc|h265|);base64,/.test(t);default:{const n=t.substring(t.indexOf(",")+1);return/^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{3}=|[A-Za-z0-9+/]{2}==)?$/.test(n)}}}function q({url:t,name:e="image",mimeType:a}){let n=document.createElement("a");A(t)?(n.href=t,n.download=`${e}.${a??W(t)}`,n.click(),n.remove()):fetch(t).then(l=>{if(!l.ok)throw new Error(`HTTP error! status: ${l.status}`);return l.blob()}).then(l=>{const s=window.URL.createObjectURL(l),r=document.createElement("a");r.style.display="none",r.href=s,r.download=`${e}.${l.type.split("/")[1]}`,document.body.appendChild(r),r.click(),window.URL.revokeObjectURL(s),document.body.removeChild(r)})}function E(t,e={}){const{name:a="image_",mimeType:n,chunkSize:l=5}=e;let s=1,r=0;const c=S(t,l),h=setInterval(()=>{c[r].forEach(g=>{q({url:g,name:`${a}_${s}`,mimeType:n}),s++}),r+=1,r>c.length-1&&clearInterval(h)},1e3)}const H={class:"shadow-2xl border rounded-xl w-full h-full max-w-[1440px] p-4 flex items-start flex-col gap-4"},G={class:"relative w-full flex justify-between items-center h-8"},K={class:"flex items-center gap-4"},Q={class:"absolute left-[50%] translate-x-[-50%]"},X={class:"flex items-centr gap-1 h-full"},Y=`[
  
]`,ee=I({__name:"fileDownload",setup(t){const e=f([]),a=f(""),n=f("image_"),l=f(!1),s=b(()=>{if(a.value==="")return!1;const i=a.value.split(".");return(i==null?void 0:i.length)<2?!k(a.value):!!i.some(o=>!k(o))}),r=()=>{switch(!0){case a.value==="":{E(e.value,{name:n.value});return}default:{E(e.value.map(i=>y(i,a.value)),{name:n.value});return}}},c=b(()=>{if(l.value||s.value)return 0;const i=e.value.map(o=>y(o,a.value));return(a.value===""?e.value:i).filter(o=>{try{const d=new URL(o);if(A(o)||d.protocol==="https:")return!0}catch{return!1}}).length}),h=i=>{try{const o=JSON.parse(i);e.value=o,l.value=!1}catch{l.value=!0}},g=f();return(i,o)=>{var _;const d=z,w=L;return U(),C(Z,null,[u(P,null,{default:m(()=>[v("文件下载（base64、url）")]),_:1}),p("div",H,[p("div",G,[p("div",K,[u(d,{style:{width:"160px"},modelValue:n.value,"onUpdate:modelValue":o[0]||(o[0]=x=>n.value=x),placeholder:"例: user"},{prepend:m(()=>[v("名称前缀")]),_:1},8,["modelValue"]),u(d,{style:{width:"160px"},modelValue:a.value,"onUpdate:modelValue":o[1]||(o[1]=x=>a.value=x),placeholder:"例: a.b.c"},{prepend:m(()=>[v("属性层级")]),_:1},8,["modelValue"])]),p("div",Q,"识别可下载数量: "+$(c.value),1),p("div",X,[u(w,{onClick:(_=g.value)==null?void 0:_.formatCode},{default:m(()=>[v("格式化")]),_:1},8,["onClick"]),u(w,{disabled:l.value||s.value||c.value===0,type:"primary",onClick:r},{default:m(()=>[v("下载")]),_:1},8,["disabled"])])]),u(N,{language:"json",value:Y,onChange:h,ref_key:"CodeEditorRef",ref:g},null,512)])],64)}}}),oe=B(ee,[["__scopeId","data-v-7c74bca9"]]);export{oe as default};
