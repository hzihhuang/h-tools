import{d as Ne,at as _e,i as we,h as f,au as Ue,l as Pe,E as T,ab as G,w as Z,I as Ye,N as Se,R as Xe,S as Ge,T as ae,Q as oe,m as Te,av as Ze,ad as qe,u as Ie,L as Qe,q as N,F as Je,aw as et,x as v,y as S,G as m,Z as ne,C as y,n as a,z as U,A as P,$ as C,Y as O,a2 as Y,a4 as se,X as tt,D as at,ax as ot,B as X,H as nt,j as Ce}from"./index-BuCJjjY_.js";import{r as st,i as Ee,s as rt,b as lt,c as it,d as ut,m as ct,V as dt,H as pt,G as ft,a as vt,e as ze,h as H,f as mt,_ as ht,w as yt}from"./el-button-qZUMnpEi.js";import{U as re}from"./plugin-vueexport-helper-oQedCV1b.js";const gt=()=>Ne&&/firefox/i.test(window.navigator.userAgent);var bt=/\s/;function xt(t){for(var i=t.length;i--&&bt.test(t.charAt(i)););return i}var wt=/^\s+/;function St(t){return t&&t.slice(0,xt(t)+1).replace(wt,"")}var Fe=NaN,It=/^[-+]0x[0-9a-f]+$/i,Ct=/^0b[01]+$/i,Et=/^0o[0-7]+$/i,zt=parseInt;function Xt(t){if(typeof t=="number")return t;if(_e(t))return Fe;if(we(t)){var i=typeof t.valueOf=="function"?t.valueOf():t;t=we(i)?i+"":i}if(typeof t!="string")return t===0?t:+t;t=St(t);var l=Ct.test(t);return l||Et.test(t)?zt(t.slice(2),l?2:8):It.test(t)?Fe:+t}const Ft=t=>/([\uAC00-\uD7AF\u3130-\u318F])+/gi.test(t),kt=["class","style"],Nt=/^on[A-Z]/,Pt=(t={})=>{const{excludeListeners:i=!1,excludeKeys:l}=t,o=f(()=>((l==null?void 0:l.value)||[]).concat(kt)),u=Pe();return u?f(()=>{var c;return Ue(Object.entries((c=u.proxy)==null?void 0:c.$attrs).filter(([d])=>!o.value.includes(d)&&!(i&&Nt.test(d))))}):f(()=>({}))};function Tt(t){const i=T();function l(){if(t.value==null)return;const{selectionStart:u,selectionEnd:c,value:d}=t.value;if(u==null||c==null)return;const g=d.slice(0,Math.max(0,u)),p=d.slice(Math.max(0,c));i.value={selectionStart:u,selectionEnd:c,value:d,beforeTxt:g,afterTxt:p}}function o(){if(t.value==null||i.value==null)return;const{value:u}=t.value,{beforeTxt:c,afterTxt:d,selectionStart:g}=i.value;if(c==null||d==null||g==null)return;let p=u.length;if(u.endsWith(d))p=u.length-d.length;else if(u.startsWith(c))p=c.length;else{const x=c[g-1],w=u.indexOf(x,g-1);w!==-1&&(p=w+1)}t.value.setSelectionRange(p,p)}return[l,o]}function Vt(t,{afterFocus:i,beforeBlur:l,afterBlur:o}={}){const u=Pe(),{emit:c}=u,d=G(),g=T(!1),p=r=>{g.value||(g.value=!0,c("focus",r),i==null||i())},x=r=>{var V;Ye(l)&&l(r)||r.relatedTarget&&((V=d.value)!=null&&V.contains(r.relatedTarget))||(g.value=!1,c("blur",r),o==null||o())},w=()=>{var r;(r=t.value)==null||r.focus()};return Z(d,r=>{r&&r.setAttribute("tabindex","-1")}),st(d,"click",w),{wrapperRef:d,isFocused:g,handleFocus:p,handleBlur:x}}let b;const Bt=`
  height:0 !important;
  visibility:hidden !important;
  ${gt()?"":"overflow:hidden !important;"}
  position:absolute !important;
  z-index:-1000 !important;
  top:0 !important;
  right:0 !important;
`,$t=["letter-spacing","line-height","padding-top","padding-bottom","font-family","font-weight","font-size","text-rendering","text-transform","width","text-indent","padding-left","padding-right","border-width","box-sizing"];function Rt(t){const i=window.getComputedStyle(t),l=i.getPropertyValue("box-sizing"),o=Number.parseFloat(i.getPropertyValue("padding-bottom"))+Number.parseFloat(i.getPropertyValue("padding-top")),u=Number.parseFloat(i.getPropertyValue("border-bottom-width"))+Number.parseFloat(i.getPropertyValue("border-top-width"));return{contextStyle:$t.map(d=>`${d}:${i.getPropertyValue(d)}`).join(";"),paddingSize:o,borderSize:u,boxSizing:l}}function ke(t,i=1,l){var o;b||(b=document.createElement("textarea"),document.body.appendChild(b));const{paddingSize:u,borderSize:c,boxSizing:d,contextStyle:g}=Rt(t);b.setAttribute("style",`${g};${Bt}`),b.value=t.value||t.placeholder||"";let p=b.scrollHeight;const x={};d==="border-box"?p=p+c:d==="content-box"&&(p=p-u),b.value="";const w=b.scrollHeight-u;if(Se(i)){let r=w*i;d==="border-box"&&(r=r+u+c),p=Math.max(r,p),x.minHeight=`${r}px`}if(Se(l)){let r=w*l;d==="border-box"&&(r=r+u+c),p=Math.min(r,p)}return x.height=`${p}px`,(o=b.parentNode)==null||o.removeChild(b),b=void 0,x}const At=Xe({id:{type:String,default:void 0},size:Ge,disabled:Boolean,modelValue:{type:ae([String,Number,Object]),default:""},maxlength:{type:[String,Number]},minlength:{type:[String,Number]},type:{type:String,default:"text"},resize:{type:String,values:["none","both","horizontal","vertical"]},autosize:{type:ae([Boolean,Object]),default:!1},autocomplete:{type:String,default:"off"},formatter:{type:Function},parser:{type:Function},placeholder:{type:String},form:{type:String},readonly:{type:Boolean,default:!1},clearable:{type:Boolean,default:!1},showPassword:{type:Boolean,default:!1},showWordLimit:{type:Boolean,default:!1},suffixIcon:{type:Ee},prefixIcon:{type:Ee},containerRole:{type:String,default:void 0},label:{type:String,default:void 0},tabindex:{type:[String,Number],default:0},validateEvent:{type:Boolean,default:!0},inputStyle:{type:ae([Object,Array,String]),default:()=>rt({})},autofocus:{type:Boolean,default:!1}}),Ot={[re]:t=>oe(t),input:t=>oe(t),change:t=>oe(t),focus:t=>t instanceof FocusEvent,blur:t=>t instanceof FocusEvent,clear:()=>!0,mouseleave:t=>t instanceof MouseEvent,mouseenter:t=>t instanceof MouseEvent,keydown:t=>t instanceof Event,compositionstart:t=>t instanceof CompositionEvent,compositionupdate:t=>t instanceof CompositionEvent,compositionend:t=>t instanceof CompositionEvent},Ht=["role"],Mt=["id","minlength","maxlength","type","disabled","readonly","autocomplete","tabindex","aria-label","placeholder","form","autofocus"],Lt=["id","minlength","maxlength","tabindex","disabled","readonly","autocomplete","aria-label","placeholder","form","autofocus"],Dt=Te({name:"ElInput",inheritAttrs:!1}),Kt=Te({...Dt,props:At,emits:Ot,setup(t,{expose:i,emit:l}){const o=t,u=Ze(),c=qe(),d=f(()=>{const e={};return o.containerRole==="combobox"&&(e["aria-haspopup"]=u["aria-haspopup"],e["aria-owns"]=u["aria-owns"],e["aria-expanded"]=u["aria-expanded"]),e}),g=f(()=>[o.type==="textarea"?ie.b():s.b(),s.m(le.value),s.is("disabled",z.value),s.is("exceed",Re.value),{[s.b("group")]:c.prepend||c.append,[s.bm("group","append")]:c.append,[s.bm("group","prepend")]:c.prepend,[s.m("prefix")]:c.prefix||o.prefixIcon,[s.m("suffix")]:c.suffix||o.suffixIcon||o.clearable||o.showPassword,[s.bm("suffix","password-clear")]:W.value&&J.value,[s.b("hidden")]:o.type==="hidden"},u.class]),p=f(()=>[s.e("wrapper"),s.is("focus",Q.value)]),x=Pt({excludeKeys:f(()=>Object.keys(d.value))}),{form:w,formItem:r}=lt(),{inputId:V}=it(o,{formItemContext:r}),le=ut(),z=ct(),s=Ie("input"),ie=Ie("textarea"),M=G(),I=G(),q=T(!1),B=T(!1),L=T(!1),ue=T(),D=G(o.inputStyle),F=f(()=>M.value||I.value),{wrapperRef:Ve,isFocused:Q,handleFocus:K,handleBlur:j}=Vt(F,{afterBlur(){var e;o.validateEvent&&((e=r==null?void 0:r.validate)==null||e.call(r,"blur").catch(n=>ze()))}}),ce=f(()=>{var e;return(e=w==null?void 0:w.statusIcon)!=null?e:!1}),$=f(()=>(r==null?void 0:r.validateState)||""),de=f(()=>$.value&&dt[$.value]),Be=f(()=>L.value?pt:ft),$e=f(()=>[u.style]),pe=f(()=>[o.inputStyle,D.value,{resize:o.resize}]),E=f(()=>Qe(o.modelValue)?"":String(o.modelValue)),W=f(()=>o.clearable&&!z.value&&!o.readonly&&!!E.value&&(Q.value||q.value)),J=f(()=>o.showPassword&&!z.value&&!o.readonly&&!!E.value&&(!!E.value||Q.value)),k=f(()=>o.showWordLimit&&!!o.maxlength&&(o.type==="text"||o.type==="textarea")&&!z.value&&!o.readonly&&!o.showPassword),ee=f(()=>E.value.length),Re=f(()=>!!k.value&&ee.value>Number(o.maxlength)),Ae=f(()=>!!c.suffix||!!o.suffixIcon||W.value||o.showPassword||k.value||!!$.value&&ce.value),[Oe,He]=Tt(M);vt(I,e=>{if(Me(),!k.value||o.resize!=="both")return;const n=e[0],{width:h}=n.contentRect;ue.value={right:`calc(100% - ${h+15+6}px)`}});const R=()=>{const{type:e,autosize:n}=o;if(!(!Ne||e!=="textarea"||!I.value))if(n){const h=Ce(n)?n.minRows:void 0,_=Ce(n)?n.maxRows:void 0,xe=ke(I.value,h,_);D.value={overflowY:"hidden",...xe},N(()=>{I.value.offsetHeight,D.value=xe})}else D.value={minHeight:ke(I.value).minHeight}},Me=(e=>{let n=!1;return()=>{var h;if(n||!o.autosize)return;((h=I.value)==null?void 0:h.offsetParent)===null||(e(),n=!0)}})(R),A=()=>{const e=F.value,n=o.formatter?o.formatter(E.value):E.value;!e||e.value===n||(e.value=n)},te=async e=>{Oe();let{value:n}=e.target;if(o.formatter&&(n=o.parser?o.parser(n):n),!B.value){if(n===E.value){A();return}l(re,n),l("input",n),await N(),A(),He()}},fe=e=>{l("change",e.target.value)},ve=e=>{l("compositionstart",e),B.value=!0},me=e=>{var n;l("compositionupdate",e);const h=(n=e.target)==null?void 0:n.value,_=h[h.length-1]||"";B.value=!Ft(_)},he=e=>{l("compositionend",e),B.value&&(B.value=!1,te(e))},Le=()=>{L.value=!L.value,ye()},ye=async()=>{var e;await N(),(e=F.value)==null||e.focus()},De=()=>{var e;return(e=F.value)==null?void 0:e.blur()},Ke=e=>{q.value=!1,l("mouseleave",e)},je=e=>{q.value=!0,l("mouseenter",e)},ge=e=>{l("keydown",e)},We=()=>{var e;(e=F.value)==null||e.select()},be=()=>{l(re,""),l("change",""),l("clear"),l("input","")};return Z(()=>o.modelValue,()=>{var e;N(()=>R()),o.validateEvent&&((e=r==null?void 0:r.validate)==null||e.call(r,"change").catch(n=>ze()))}),Z(E,()=>A()),Z(()=>o.type,async()=>{await N(),A(),R()}),Je(()=>{!o.formatter&&o.parser,A(),N(R)}),i({input:M,textarea:I,ref:F,textareaStyle:pe,autosize:et(o,"autosize"),focus:ye,blur:De,select:We,clear:be,resizeTextarea:R}),(e,n)=>(v(),S("div",se(a(d),{class:a(g),style:a($e),role:e.containerRole,onMouseenter:je,onMouseleave:Ke}),[m(" input "),e.type!=="textarea"?(v(),S(ne,{key:0},[m(" prepend slot "),e.$slots.prepend?(v(),S("div",{key:0,class:y(a(s).be("group","prepend"))},[U(e.$slots,"prepend")],2)):m("v-if",!0),P("div",{ref_key:"wrapperRef",ref:Ve,class:y(a(p))},[m(" prefix slot "),e.$slots.prefix||e.prefixIcon?(v(),S("span",{key:0,class:y(a(s).e("prefix"))},[P("span",{class:y(a(s).e("prefix-inner"))},[U(e.$slots,"prefix"),e.prefixIcon?(v(),C(a(H),{key:0,class:y(a(s).e("icon"))},{default:O(()=>[(v(),C(Y(e.prefixIcon)))]),_:1},8,["class"])):m("v-if",!0)],2)],2)):m("v-if",!0),P("input",se({id:a(V),ref_key:"input",ref:M,class:a(s).e("inner")},a(x),{minlength:e.minlength,maxlength:e.maxlength,type:e.showPassword?L.value?"text":"password":e.type,disabled:a(z),readonly:e.readonly,autocomplete:e.autocomplete,tabindex:e.tabindex,"aria-label":e.label,placeholder:e.placeholder,style:e.inputStyle,form:e.form,autofocus:e.autofocus,onCompositionstart:ve,onCompositionupdate:me,onCompositionend:he,onInput:te,onFocus:n[0]||(n[0]=(...h)=>a(K)&&a(K)(...h)),onBlur:n[1]||(n[1]=(...h)=>a(j)&&a(j)(...h)),onChange:fe,onKeydown:ge}),null,16,Mt),m(" suffix slot "),a(Ae)?(v(),S("span",{key:1,class:y(a(s).e("suffix"))},[P("span",{class:y(a(s).e("suffix-inner"))},[!a(W)||!a(J)||!a(k)?(v(),S(ne,{key:0},[U(e.$slots,"suffix"),e.suffixIcon?(v(),C(a(H),{key:0,class:y(a(s).e("icon"))},{default:O(()=>[(v(),C(Y(e.suffixIcon)))]),_:1},8,["class"])):m("v-if",!0)],64)):m("v-if",!0),a(W)?(v(),C(a(H),{key:1,class:y([a(s).e("icon"),a(s).e("clear")]),onMousedown:at(a(ot),["prevent"]),onClick:be},{default:O(()=>[tt(a(mt))]),_:1},8,["class","onMousedown"])):m("v-if",!0),a(J)?(v(),C(a(H),{key:2,class:y([a(s).e("icon"),a(s).e("password")]),onClick:Le},{default:O(()=>[(v(),C(Y(a(Be))))]),_:1},8,["class"])):m("v-if",!0),a(k)?(v(),S("span",{key:3,class:y(a(s).e("count"))},[P("span",{class:y(a(s).e("count-inner"))},X(a(ee))+" / "+X(e.maxlength),3)],2)):m("v-if",!0),a($)&&a(de)&&a(ce)?(v(),C(a(H),{key:4,class:y([a(s).e("icon"),a(s).e("validateIcon"),a(s).is("loading",a($)==="validating")])},{default:O(()=>[(v(),C(Y(a(de))))]),_:1},8,["class"])):m("v-if",!0)],2)],2)):m("v-if",!0)],2),m(" append slot "),e.$slots.append?(v(),S("div",{key:1,class:y(a(s).be("group","append"))},[U(e.$slots,"append")],2)):m("v-if",!0)],64)):(v(),S(ne,{key:1},[m(" textarea "),P("textarea",se({id:a(V),ref_key:"textarea",ref:I,class:a(ie).e("inner")},a(x),{minlength:e.minlength,maxlength:e.maxlength,tabindex:e.tabindex,disabled:a(z),readonly:e.readonly,autocomplete:e.autocomplete,style:a(pe),"aria-label":e.label,placeholder:e.placeholder,form:e.form,autofocus:e.autofocus,onCompositionstart:ve,onCompositionupdate:me,onCompositionend:he,onInput:te,onFocus:n[2]||(n[2]=(...h)=>a(K)&&a(K)(...h)),onBlur:n[3]||(n[3]=(...h)=>a(j)&&a(j)(...h)),onChange:fe,onKeydown:ge}),null,16,Lt),a(k)?(v(),S("span",{key:0,style:nt(ue.value),class:y(a(s).e("count"))},X(a(ee))+" / "+X(e.maxlength),7)):m("v-if",!0)],64))],16,Ht))}});var jt=ht(Kt,[["__file","input.vue"]]);const Gt=yt(jt);export{Gt as E,Ft as i,Xt as t,Vt as u};