import{i as R,a9 as V,m as I,E as d,h as y,y as C,A as p,X as f,Y as v,B as Z,g as b,x as $,a5 as g}from"./index-DJEz41cO.js";import{l as U}from"./el-button-BA2CSrvp.js";import{E as B}from"./el-input-DakckLNZ.js";import{i as D,a as L}from"./isArrayLike-DdcOk8kU.js";import{t as O}from"./toInteger-CZ0RQb1W.js";import{_ as T}from"./index.vue_vue_type_script_setup_true_lang-DaUeYoka.js";import{_ as z}from"./_plugin-vue_export-helper-oQedCV1b.js";function N(t,e,a){if(!R(a))return!1;var n=typeof e;return(n=="number"?D(a)&&L(e,a.length):n=="string"&&e in a)?V(a[e],t):!1}function P(t,e,a){var n=-1,r=t.length;e<0&&(e=-e>r?0:r+e),a=a>r?r:a,a<0&&(a+=r),r=e>a?0:a-e>>>0,e>>>=0;for(var s=Array(r);++n<r;)s[n]=t[n+e];return s}var j=Math.ceil,M=Math.max;function S(t,e,a){(a?N(t,e,a):e===void 0)?e=1:e=M(O(e),0);var n=t==null?0:t.length;if(!n||e<1)return[];for(var r=0,s=0,l=Array(j(n/e));r<n;)l[s++]=P(t,r,r+=e);return l}function k(t){return/^[A-Za-z_][A-Za-z0-9_]*$/.test(t)?!["abstract","arguments","await","boolean","break","byte","case","catch","char","class","const","continue","debugger","default","delete","do","double","else","enum","eval","export","extends","false","final","finally","float","for","function","goto","if","implements","import","in","instanceof","int","interface","let","long","native","new","null","package","private","protected","public","return","short","static","super","switch","synchronized","this","throw","throws","transient","true","try","typeof","var","void","volatile","while","with","yield"].includes(t):!1}function W(t){if(!t.startsWith("data:image/"))return"Invalid base64 string";const e=t.substring(t.indexOf("image/")+6,t.indexOf(";"));switch(e){case"svg+xml":return"svg";case"x-icon":return"ico";case"vnd.microsoft.icon":return"ico";default:return e}}function E(t,e){if(typeof t!="string"||t.trim().length===0)return!1;if(!/^data:[a-zA-Z0-9-]+/.test(t))return/^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{3}=|[A-Za-z0-9+/]{2}==)?$/.test(t);switch(e){case"img":return/^data:image\/(png|jpeg|gif|bmp|svg\+xml);base64,(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(t);case"audio":return/^data:audio\/(mpeg|aac|ogg|wav|x-flac|x-ms-wma|midi|amr|awb|x-wavpack|mp4|aac+|eaac+);base64,/.test(t);case"video":return/^data:video\/(mp4|avi|mkv|ogg|webm|quicktime|wmv|x-flv|3gp|3gpp|mpeg|hevc|h265|);base64,/.test(t);default:{const n=t.substring(t.indexOf(",")+1);return/^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{3}=|[A-Za-z0-9+/]{2}==)?$/.test(n)}}}function q({url:t,name:e="image",mimeType:a}){let n=document.createElement("a");E(t)?(n.href=t,n.download=`${e}.${a??W(t)}`,n.click(),n.remove()):fetch(t).then(r=>{if(!r.ok)throw new Error(`HTTP error! status: ${r.status}`);return r.blob()}).then(r=>{const s=window.URL.createObjectURL(r),l=document.createElement("a");l.style.display="none",l.href=s,l.download=`${e}.${r.type.split("/")[1]}`,document.body.appendChild(l),l.click(),window.URL.revokeObjectURL(s),document.body.removeChild(l)})}function A(t,e={}){const{name:a="image_",mimeType:n,chunkSize:r=5}=e;let s=1,l=0;const u=S(t,r),h=setInterval(()=>{u[l].forEach(m=>{q({url:m,name:`${a}_${s}`,mimeType:n}),s++}),l+=1,l>u.length-1&&clearInterval(h)},1e3)}const F={class:"shadow-2xl border rounded-xl w-full h-full max-w-[1440px] p-4 flex items-start flex-col gap-4"},J={class:"relative w-full flex justify-between items-center h-8"},H={class:"flex items-center gap-4"},X={class:"absolute left-[50%] translate-x-[-50%]"},Y={class:"flex items-centr gap-1 h-full"},G=`[
  
]`,K=I({__name:"fileDownload",setup(t){const e=d([]),a=d(""),n=d("image_"),r=d(!1),s=y(()=>{if(a.value==="")return!1;const i=a.value.split(".");return(i==null?void 0:i.length)<2?!k(a.value):!!i.some(o=>!k(o))}),l=()=>{switch(!0){case a.value==="":{A(e.value,{name:n.value});return}default:{A(e.value.map(i=>b(i,a.value)),{name:n.value});return}}},u=y(()=>{if(r.value||s.value)return 0;const i=e.value.map(o=>b(o,a.value));return(a.value===""?e.value:i).filter(o=>{try{const c=new URL(o);if(E(o)||c.protocol==="https:")return!0}catch{return!1}}).length}),h=i=>{try{const o=JSON.parse(i);e.value=o,r.value=!1}catch{r.value=!0}},m=d();return(i,o)=>{var _;const c=B,w=U;return $(),C("div",F,[p("div",J,[p("div",H,[f(c,{style:{width:"160px"},modelValue:n.value,"onUpdate:modelValue":o[0]||(o[0]=x=>n.value=x),placeholder:"例: user"},{prepend:v(()=>[g("名称前缀")]),_:1},8,["modelValue"]),f(c,{style:{width:"160px"},modelValue:a.value,"onUpdate:modelValue":o[1]||(o[1]=x=>a.value=x),placeholder:"例: a.b.c"},{prepend:v(()=>[g("属性层级")]),_:1},8,["modelValue"])]),p("div",X,"识别可下载数量: "+Z(u.value),1),p("div",Y,[f(w,{onClick:(_=m.value)==null?void 0:_.formatCode},{default:v(()=>[g("格式化")]),_:1},8,["onClick"]),f(w,{disabled:r.value||s.value||u.value===0,type:"primary",onClick:l},{default:v(()=>[g("下载")]),_:1},8,["disabled"])])]),f(T,{language:"json",value:G,onChange:h,ref_key:"CodeEditorRef",ref:m},null,512)])}}}),oe=z(K,[["__scopeId","data-v-cccdb25d"]]);export{oe as default};
