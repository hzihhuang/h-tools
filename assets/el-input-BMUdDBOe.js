import{d as Pe,N as Ue,i as we,j as Ye,o as Xe,m as Se,l as qe,F as Ge,f as ae,G as Ie,O as Qe,n as Ce,V as Je,P as Ze,Q as et,q as tt,B as A,H as at,_ as nt,w as ot}from"./title-C_qmO4PJ.js";import{c as f,g as Te,r as T,s as q,w as G,i as st,K as ne,d as Ve,a5 as rt,a6 as it,y as k,o as lt,t as ut,k as ct,v as dt,f as v,q as S,D as m,F as oe,n as y,u as a,B as U,l as P,h as C,j as M,C as Y,J as se,x as pt,R as ft,N as vt,Q as X,m as mt,E as Ee}from"./index-CK9urb8D.js";import{U as re,d as ht,e as yt,b as gt,k as bt,i as xt,g as ze}from"./el-button-DwZzQmwd.js";const wt=()=>Pe&&/firefox/i.test(window.navigator.userAgent);var St=/\s/;function It(t){for(var o=t.length;o--&&St.test(t.charAt(o)););return o}var Ct=/^\s+/;function Et(t){return t&&t.slice(0,It(t)+1).replace(Ct,"")}var Fe=NaN,zt=/^[-+]0x[0-9a-f]+$/i,Ft=/^0b[01]+$/i,Nt=/^0o[0-7]+$/i,kt=parseInt;function Pt(t){if(typeof t=="number")return t;if(Ue(t))return Fe;if(we(t)){var o=typeof t.valueOf=="function"?t.valueOf():t;t=we(o)?o+"":o}if(typeof t!="string")return t===0?t:+t;t=Et(t);var r=Ft.test(t);return r||Nt.test(t)?kt(t.slice(2),r?2:8):zt.test(t)?Fe:+t}var Ne=1/0,Tt=17976931348623157e292;function Vt(t){if(!t)return t===0?t:0;if(t=Pt(t),t===Ne||t===-Ne){var o=t<0?-1:1;return o*Tt}return t===t?t:0}function ea(t){var o=Vt(t),r=o%1;return o===o?r?o-r:o:0}const Bt=t=>/([\uAC00-\uD7AF\u3130-\u318F])+/gi.test(t),Rt=["class","style"],$t=/^on[A-Z]/,Ot=(t={})=>{const{excludeListeners:o=!1,excludeKeys:r}=t,n=f(()=>((r==null?void 0:r.value)||[]).concat(Rt)),u=Te();return u?f(()=>{var c;return Ye(Object.entries((c=u.proxy)==null?void 0:c.$attrs).filter(([d])=>!n.value.includes(d)&&!(o&&$t.test(d))))}):f(()=>({}))};function At(t){const o=T();function r(){if(t.value==null)return;const{selectionStart:u,selectionEnd:c,value:d}=t.value;if(u==null||c==null)return;const g=d.slice(0,Math.max(0,u)),p=d.slice(Math.max(0,c));o.value={selectionStart:u,selectionEnd:c,value:d,beforeTxt:g,afterTxt:p}}function n(){if(t.value==null||o.value==null)return;const{value:u}=t.value,{beforeTxt:c,afterTxt:d,selectionStart:g}=o.value;if(c==null||d==null||g==null)return;let p=u.length;if(u.endsWith(d))p=u.length-d.length;else if(u.startsWith(c))p=c.length;else{const x=c[g-1],w=u.indexOf(x,g-1);w!==-1&&(p=w+1)}t.value.setSelectionRange(p,p)}return[r,n]}function Mt(t,{afterFocus:o,beforeBlur:r,afterBlur:n}={}){const u=Te(),{emit:c}=u,d=q(),g=T(!1),p=i=>{g.value||(g.value=!0,c("focus",i),o==null||o())},x=i=>{var V;st(r)&&r(i)||i.relatedTarget&&((V=d.value)!=null&&V.contains(i.relatedTarget))||(g.value=!1,c("blur",i),n==null||n())},w=()=>{var i;(i=t.value)==null||i.focus()};return G(d,i=>{i&&i.setAttribute("tabindex","-1")}),Xe(d,"click",w),{wrapperRef:d,isFocused:g,handleFocus:p,handleBlur:x}}let b;const Ht=`
  height:0 !important;
  visibility:hidden !important;
  ${wt()?"":"overflow:hidden !important;"}
  position:absolute !important;
  z-index:-1000 !important;
  top:0 !important;
  right:0 !important;
`,Lt=["letter-spacing","line-height","padding-top","padding-bottom","font-family","font-weight","font-size","text-rendering","text-transform","width","text-indent","padding-left","padding-right","border-width","box-sizing"];function Dt(t){const o=window.getComputedStyle(t),r=o.getPropertyValue("box-sizing"),n=Number.parseFloat(o.getPropertyValue("padding-bottom"))+Number.parseFloat(o.getPropertyValue("padding-top")),u=Number.parseFloat(o.getPropertyValue("border-bottom-width"))+Number.parseFloat(o.getPropertyValue("border-top-width"));return{contextStyle:Lt.map(d=>`${d}:${o.getPropertyValue(d)}`).join(";"),paddingSize:n,borderSize:u,boxSizing:r}}function ke(t,o=1,r){var n;b||(b=document.createElement("textarea"),document.body.appendChild(b));const{paddingSize:u,borderSize:c,boxSizing:d,contextStyle:g}=Dt(t);b.setAttribute("style",`${g};${Ht}`),b.value=t.value||t.placeholder||"";let p=b.scrollHeight;const x={};d==="border-box"?p=p+c:d==="content-box"&&(p=p-u),b.value="";const w=b.scrollHeight-u;if(Se(o)){let i=w*o;d==="border-box"&&(i=i+u+c),p=Math.max(i,p),x.minHeight=`${i}px`}if(Se(r)){let i=w*r;d==="border-box"&&(i=i+u+c),p=Math.min(i,p)}return x.height=`${p}px`,(n=b.parentNode)==null||n.removeChild(b),b=void 0,x}const Kt=qe({id:{type:String,default:void 0},size:Ge,disabled:Boolean,modelValue:{type:ae([String,Number,Object]),default:""},maxlength:{type:[String,Number]},minlength:{type:[String,Number]},type:{type:String,default:"text"},resize:{type:String,values:["none","both","horizontal","vertical"]},autosize:{type:ae([Boolean,Object]),default:!1},autocomplete:{type:String,default:"off"},formatter:{type:Function},parser:{type:Function},placeholder:{type:String},form:{type:String},readonly:{type:Boolean,default:!1},clearable:{type:Boolean,default:!1},showPassword:{type:Boolean,default:!1},showWordLimit:{type:Boolean,default:!1},suffixIcon:{type:Ie},prefixIcon:{type:Ie},containerRole:{type:String,default:void 0},label:{type:String,default:void 0},tabindex:{type:[String,Number],default:0},validateEvent:{type:Boolean,default:!0},inputStyle:{type:ae([Object,Array,String]),default:()=>Qe({})},autofocus:{type:Boolean,default:!1}}),jt={[re]:t=>ne(t),input:t=>ne(t),change:t=>ne(t),focus:t=>t instanceof FocusEvent,blur:t=>t instanceof FocusEvent,clear:()=>!0,mouseleave:t=>t instanceof MouseEvent,mouseenter:t=>t instanceof MouseEvent,keydown:t=>t instanceof Event,compositionstart:t=>t instanceof CompositionEvent,compositionupdate:t=>t instanceof CompositionEvent,compositionend:t=>t instanceof CompositionEvent},Wt=["role"],_t=["id","minlength","maxlength","type","disabled","readonly","autocomplete","tabindex","aria-label","placeholder","form","autofocus"],Ut=["id","minlength","maxlength","tabindex","disabled","readonly","autocomplete","aria-label","placeholder","form","autofocus"],Yt=Ve({name:"ElInput",inheritAttrs:!1}),Xt=Ve({...Yt,props:Kt,emits:jt,setup(t,{expose:o,emit:r}){const n=t,u=rt(),c=it(),d=f(()=>{const e={};return n.containerRole==="combobox"&&(e["aria-haspopup"]=u["aria-haspopup"],e["aria-owns"]=u["aria-owns"],e["aria-expanded"]=u["aria-expanded"]),e}),g=f(()=>[n.type==="textarea"?le.b():l.b(),l.m(ie.value),l.is("disabled",z.value),l.is("exceed",Oe.value),{[l.b("group")]:c.prepend||c.append,[l.bm("group","append")]:c.append,[l.bm("group","prepend")]:c.prepend,[l.m("prefix")]:c.prefix||n.prefixIcon,[l.m("suffix")]:c.suffix||n.suffixIcon||n.clearable||n.showPassword,[l.bm("suffix","password-clear")]:W.value&&Z.value},u.class]),p=f(()=>[l.e("wrapper"),l.is("focus",J.value)]),x=Ot({excludeKeys:f(()=>Object.keys(d.value))}),{form:w,formItem:i}=ht(),{inputId:V}=yt(n,{formItemContext:i}),ie=gt(),z=bt(),l=Ce("input"),le=Ce("textarea"),H=q(),I=q(),Q=T(!1),B=T(!1),L=T(!1),ue=T(),D=q(n.inputStyle),F=f(()=>H.value||I.value),{wrapperRef:Be,isFocused:J,handleFocus:K,handleBlur:j}=Mt(F,{afterBlur(){var e;n.validateEvent&&((e=i==null?void 0:i.validate)==null||e.call(i,"blur").catch(s=>ze()))}}),ce=f(()=>{var e;return(e=w==null?void 0:w.statusIcon)!=null?e:!1}),R=f(()=>(i==null?void 0:i.validateState)||""),de=f(()=>R.value&&Je[R.value]),Re=f(()=>L.value?Ze:et),$e=f(()=>[u.style]),pe=f(()=>[n.inputStyle,D.value,{resize:n.resize}]),E=f(()=>xt(n.modelValue)?"":String(n.modelValue)),W=f(()=>n.clearable&&!z.value&&!n.readonly&&!!E.value&&(J.value||Q.value)),Z=f(()=>n.showPassword&&!z.value&&!n.readonly&&!!E.value&&(!!E.value||J.value)),N=f(()=>n.showWordLimit&&!!n.maxlength&&(n.type==="text"||n.type==="textarea")&&!z.value&&!n.readonly&&!n.showPassword),ee=f(()=>E.value.length),Oe=f(()=>!!N.value&&ee.value>Number(n.maxlength)),Ae=f(()=>!!c.suffix||!!n.suffixIcon||W.value||n.showPassword||N.value||!!R.value&&ce.value),[Me,He]=At(H);tt(I,e=>{if(Le(),!N.value||n.resize!=="both")return;const s=e[0],{width:h}=s.contentRect;ue.value={right:`calc(100% - ${h+15+6}px)`}});const $=()=>{const{type:e,autosize:s}=n;if(!(!Pe||e!=="textarea"||!I.value))if(s){const h=Ee(s)?s.minRows:void 0,_=Ee(s)?s.maxRows:void 0,xe=ke(I.value,h,_);D.value={overflowY:"hidden",...xe},k(()=>{I.value.offsetHeight,D.value=xe})}else D.value={minHeight:ke(I.value).minHeight}},Le=(e=>{let s=!1;return()=>{var h;if(s||!n.autosize)return;((h=I.value)==null?void 0:h.offsetParent)===null||(e(),s=!0)}})($),O=()=>{const e=F.value,s=n.formatter?n.formatter(E.value):E.value;!e||e.value===s||(e.value=s)},te=async e=>{Me();let{value:s}=e.target;if(n.formatter&&(s=n.parser?n.parser(s):s),!B.value){if(s===E.value){O();return}r(re,s),r("input",s),await k(),O(),He()}},fe=e=>{r("change",e.target.value)},ve=e=>{r("compositionstart",e),B.value=!0},me=e=>{var s;r("compositionupdate",e);const h=(s=e.target)==null?void 0:s.value,_=h[h.length-1]||"";B.value=!Bt(_)},he=e=>{r("compositionend",e),B.value&&(B.value=!1,te(e))},De=()=>{L.value=!L.value,ye()},ye=async()=>{var e;await k(),(e=F.value)==null||e.focus()},Ke=()=>{var e;return(e=F.value)==null?void 0:e.blur()},je=e=>{Q.value=!1,r("mouseleave",e)},We=e=>{Q.value=!0,r("mouseenter",e)},ge=e=>{r("keydown",e)},_e=()=>{var e;(e=F.value)==null||e.select()},be=()=>{r(re,""),r("change",""),r("clear"),r("input","")};return G(()=>n.modelValue,()=>{var e;k(()=>$()),n.validateEvent&&((e=i==null?void 0:i.validate)==null||e.call(i,"change").catch(s=>ze()))}),G(E,()=>O()),G(()=>n.type,async()=>{await k(),O(),$()}),lt(()=>{!n.formatter&&n.parser,O(),k($)}),o({input:H,textarea:I,ref:F,textareaStyle:pe,autosize:ut(n,"autosize"),focus:ye,blur:Ke,select:_e,clear:be,resizeTextarea:$}),(e,s)=>ct((v(),S("div",se(a(d),{class:a(g),style:a($e),role:e.containerRole,onMouseenter:We,onMouseleave:je}),[m(" input "),e.type!=="textarea"?(v(),S(oe,{key:0},[m(" prepend slot "),e.$slots.prepend?(v(),S("div",{key:0,class:y(a(l).be("group","prepend"))},[U(e.$slots,"prepend")],2)):m("v-if",!0),P("div",{ref_key:"wrapperRef",ref:Be,class:y(a(p))},[m(" prefix slot "),e.$slots.prefix||e.prefixIcon?(v(),S("span",{key:0,class:y(a(l).e("prefix"))},[P("span",{class:y(a(l).e("prefix-inner"))},[U(e.$slots,"prefix"),e.prefixIcon?(v(),C(a(A),{key:0,class:y(a(l).e("icon"))},{default:M(()=>[(v(),C(Y(e.prefixIcon)))]),_:1},8,["class"])):m("v-if",!0)],2)],2)):m("v-if",!0),P("input",se({id:a(V),ref_key:"input",ref:H,class:a(l).e("inner")},a(x),{minlength:e.minlength,maxlength:e.maxlength,type:e.showPassword?L.value?"text":"password":e.type,disabled:a(z),readonly:e.readonly,autocomplete:e.autocomplete,tabindex:e.tabindex,"aria-label":e.label,placeholder:e.placeholder,style:e.inputStyle,form:e.form,autofocus:e.autofocus,onCompositionstart:ve,onCompositionupdate:me,onCompositionend:he,onInput:te,onFocus:s[0]||(s[0]=(...h)=>a(K)&&a(K)(...h)),onBlur:s[1]||(s[1]=(...h)=>a(j)&&a(j)(...h)),onChange:fe,onKeydown:ge}),null,16,_t),m(" suffix slot "),a(Ae)?(v(),S("span",{key:1,class:y(a(l).e("suffix"))},[P("span",{class:y(a(l).e("suffix-inner"))},[!a(W)||!a(Z)||!a(N)?(v(),S(oe,{key:0},[U(e.$slots,"suffix"),e.suffixIcon?(v(),C(a(A),{key:0,class:y(a(l).e("icon"))},{default:M(()=>[(v(),C(Y(e.suffixIcon)))]),_:1},8,["class"])):m("v-if",!0)],64)):m("v-if",!0),a(W)?(v(),C(a(A),{key:1,class:y([a(l).e("icon"),a(l).e("clear")]),onMousedown:ft(a(vt),["prevent"]),onClick:be},{default:M(()=>[pt(a(at))]),_:1},8,["class","onMousedown"])):m("v-if",!0),a(Z)?(v(),C(a(A),{key:2,class:y([a(l).e("icon"),a(l).e("password")]),onClick:De},{default:M(()=>[(v(),C(Y(a(Re))))]),_:1},8,["class"])):m("v-if",!0),a(N)?(v(),S("span",{key:3,class:y(a(l).e("count"))},[P("span",{class:y(a(l).e("count-inner"))},X(a(ee))+" / "+X(e.maxlength),3)],2)):m("v-if",!0),a(R)&&a(de)&&a(ce)?(v(),C(a(A),{key:4,class:y([a(l).e("icon"),a(l).e("validateIcon"),a(l).is("loading",a(R)==="validating")])},{default:M(()=>[(v(),C(Y(a(de))))]),_:1},8,["class"])):m("v-if",!0)],2)],2)):m("v-if",!0)],2),m(" append slot "),e.$slots.append?(v(),S("div",{key:1,class:y(a(l).be("group","append"))},[U(e.$slots,"append")],2)):m("v-if",!0)],64)):(v(),S(oe,{key:1},[m(" textarea "),P("textarea",se({id:a(V),ref_key:"textarea",ref:I,class:a(le).e("inner")},a(x),{minlength:e.minlength,maxlength:e.maxlength,tabindex:e.tabindex,disabled:a(z),readonly:e.readonly,autocomplete:e.autocomplete,style:a(pe),"aria-label":e.label,placeholder:e.placeholder,form:e.form,autofocus:e.autofocus,onCompositionstart:ve,onCompositionupdate:me,onCompositionend:he,onInput:te,onFocus:s[2]||(s[2]=(...h)=>a(K)&&a(K)(...h)),onBlur:s[3]||(s[3]=(...h)=>a(j)&&a(j)(...h)),onChange:fe,onKeydown:ge}),null,16,Ut),a(N)?(v(),S("span",{key:0,style:mt(ue.value),class:y(a(l).e("count"))},X(a(ee))+" / "+X(e.maxlength),7)):m("v-if",!0)],64))],16,Wt)),[[dt,e.type!=="hidden"]])}});var qt=nt(Xt,[["__file","input.vue"]]);const ta=ot(qt);export{ta as E,ea as a,Bt as i,Pt as t,Mt as u};
