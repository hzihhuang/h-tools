import{i as ke,c as ye,d as Ce,h as Se,a as $e,D as we}from"./draggable-DEqfupht.js";import{R as Ee,M as Be,S as J,c as Le,i as j,U as ee,t as Ve,b as Ie,F as ne,m as H,h as G,D as U,n as M,_ as A,l as _e,f as Ne,w as Fe,K as le,W as ze,T as De}from"./title-C_qmO4PJ.js";import{j as Pe,U as P,k as Oe,d as K,g as ae,b as W,i as Te,e as te,E as Ge}from"./el-button-DwZzQmwd.js";import{_ as Ue}from"./index.vue_vue_type_script_setup_true_lang-B8lmH8LR.js";import{K as Q,e as V,c as h,w as oe,y as se,g as ue,r as I,L as B,E as Re,S as X,d as $,a6 as ie,f as x,h as re,j as O,l as L,n as y,u as i,k as _,q as C,a7 as N,R as F,a8 as z,B as q,F as de,a0 as T,Q as ce,D as R,C as be,m as Me,p as Ae,U as Ke,z as ve,x as S,a4 as qe}from"./index-CK9urb8D.js";function Je(e,n,l){switch(l.length){case 0:return e.call(n);case 1:return e.call(n,l[0]);case 2:return e.call(n,l[0],l[1]);case 3:return e.call(n,l[0],l[1],l[2])}return e.apply(n,l)}var je=800,He=16,We=Date.now;function Qe(e){var n=0,l=0;return function(){var t=We(),s=He-(t-l);if(l=t,s>0){if(++n>=je)return arguments[0]}else n=0;return e.apply(void 0,arguments)}}function Xe(e){return function(){return e}}var D=function(){try{var e=Ee(Object,"defineProperty");return e({},"",{}),e}catch{}}(),Ye=D?function(e,n){return D(e,"toString",{configurable:!0,enumerable:!1,value:Xe(n),writable:!0})}:ke;const Ze=Ye;var en=Qe(Ze);function nn(e,n,l){n=="__proto__"&&D?D(e,n,{configurable:!0,enumerable:!0,value:l,writable:!0}):e[n]=l}var ln=Object.prototype,an=ln.hasOwnProperty;function tn(e,n,l){var t=e[n];(!(an.call(e,n)&&Be(t,l))||l===void 0&&!(n in e))&&nn(e,n,l)}var Y=Math.max;function on(e,n,l){return n=Y(n===void 0?e.length-1:n,0),function(){for(var t=arguments,s=-1,c=Y(t.length-n,0),u=Array(c);++s<c;)u[s]=t[n+s];s=-1;for(var a=Array(n+1);++s<n;)a[s]=t[s];return a[n]=l(u),Je(e,this,a)}}var Z=J?J.isConcatSpreadable:void 0;function sn(e){return Le(e)||ye(e)||!!(Z&&e&&e[Z])}function fe(e,n,l,t,s){var c=-1,u=e.length;for(l||(l=sn),s||(s=[]);++c<u;){var a=e[c];n>0&&l(a)?n>1?fe(a,n-1,l,t,s):Ce(s,a):t||(s[s.length]=a)}return s}function un(e){var n=e==null?0:e.length;return n?fe(e,1):[]}function rn(e){return en(on(e,void 0,un),e+"")}function dn(e,n,l,t){if(!j(e))return e;n=ee(n,e);for(var s=-1,c=n.length,u=c-1,a=e;a!=null&&++s<c;){var d=Ve(n[s]),o=l;if(d==="__proto__"||d==="constructor"||d==="prototype")return e;if(s!=u){var v=a[d];o=t?t(v,d,a):void 0,o===void 0&&(o=j(v)?v:Pe(n[s+1])?[]:{})}tn(a,d,o),a=a[d]}return e}function cn(e,n,l){for(var t=-1,s=n.length,c={};++t<s;){var u=n[t],a=Ie(e,u);l(a,u)&&dn(c,ee(u,e),a)}return c}function bn(e,n){return cn(e,n,function(l,t){return Se(e,t)})}var vn=rn(function(e,n){return e==null?{}:bn(e,n)});const me={modelValue:{type:[Number,String,Boolean],default:void 0},label:{type:[String,Boolean,Number,Object],default:void 0},indeterminate:Boolean,disabled:Boolean,checked:Boolean,name:{type:String,default:void 0},trueLabel:{type:[String,Number],default:void 0},falseLabel:{type:[String,Number],default:void 0},id:{type:String,default:void 0},controls:{type:String,default:void 0},border:Boolean,size:ne,tabindex:[String,Number],validateEvent:{type:Boolean,default:!0}},pe={[P]:e=>Q(e)||H(e)||G(e),change:e=>Q(e)||H(e)||G(e)},E=Symbol("checkboxGroupContextKey"),fn=({model:e,isChecked:n})=>{const l=V(E,void 0),t=h(()=>{var c,u;const a=(c=l==null?void 0:l.max)==null?void 0:c.value,d=(u=l==null?void 0:l.min)==null?void 0:u.value;return!U(a)&&e.value.length>=a&&!n.value||!U(d)&&e.value.length<=d&&n.value});return{isDisabled:Oe(h(()=>(l==null?void 0:l.disabled.value)||t.value)),isLimitDisabled:t}},mn=(e,{model:n,isLimitExceeded:l,hasOwnLabel:t,isDisabled:s,isLabeledByFormItem:c})=>{const u=V(E,void 0),{formItem:a}=K(),{emit:d}=ue();function o(r){var m,p;return r===e.trueLabel||r===!0?(m=e.trueLabel)!=null?m:!0:(p=e.falseLabel)!=null?p:!1}function v(r,m){d("change",o(r),m)}function g(r){if(l.value)return;const m=r.target;d("change",o(m.checked),r)}async function w(r){l.value||!t.value&&!s.value&&c.value&&(r.composedPath().some(f=>f.tagName==="LABEL")||(n.value=o([!1,e.falseLabel].includes(n.value)),await se(),v(n.value,r)))}const b=h(()=>(u==null?void 0:u.validateEvent)||e.validateEvent);return oe(()=>e.modelValue,()=>{b.value&&(a==null||a.validate("change").catch(r=>ae()))}),{handleChange:g,onClickRoot:w}},pn=e=>{const n=I(!1),{emit:l}=ue(),t=V(E,void 0),s=h(()=>U(t)===!1),c=I(!1),u=h({get(){var a,d;return s.value?(a=t==null?void 0:t.modelValue)==null?void 0:a.value:(d=e.modelValue)!=null?d:n.value},set(a){var d,o;s.value&&B(a)?(c.value=((d=t==null?void 0:t.max)==null?void 0:d.value)!==void 0&&a.length>(t==null?void 0:t.max.value)&&a.length>u.value.length,c.value===!1&&((o=t==null?void 0:t.changeEvent)==null||o.call(t,a))):(l(P,a),n.value=a)}});return{model:u,isGroup:s,isLimitExceeded:c}},gn=(e,n,{model:l})=>{const t=V(E,void 0),s=I(!1),c=h(()=>{const o=l.value;return G(o)?o:B(o)?Re(e.label)?o.map(X).some(v=>$e(v,e.label)):o.map(X).includes(e.label):o!=null?o===e.trueLabel:!!o}),u=W(h(()=>{var o;return(o=t==null?void 0:t.size)==null?void 0:o.value}),{prop:!0}),a=W(h(()=>{var o;return(o=t==null?void 0:t.size)==null?void 0:o.value})),d=h(()=>!!n.default||!Te(e.label));return{checkboxButtonSize:u,isChecked:c,isFocused:s,checkboxSize:a,hasOwnLabel:d}},hn=(e,{model:n})=>{function l(){B(n.value)&&!n.value.includes(e.label)?n.value.push(e.label):n.value=e.trueLabel||!0}e.checked&&l()},ge=(e,n)=>{const{formItem:l}=K(),{model:t,isGroup:s,isLimitExceeded:c}=pn(e),{isFocused:u,isChecked:a,checkboxButtonSize:d,checkboxSize:o,hasOwnLabel:v}=gn(e,n,{model:t}),{isDisabled:g}=fn({model:t,isChecked:a}),{inputId:w,isLabeledByFormItem:b}=te(e,{formItemContext:l,disableIdGeneration:v,disableIdManagement:s}),{handleChange:r,onClickRoot:m}=mn(e,{model:t,isLimitExceeded:c,hasOwnLabel:v,isDisabled:g,isLabeledByFormItem:b});return hn(e,{model:t}),{inputId:w,isLabeledByFormItem:b,isChecked:a,isDisabled:g,isFocused:u,checkboxButtonSize:d,checkboxSize:o,hasOwnLabel:v,model:t,handleChange:r,onClickRoot:m}},xn=["id","indeterminate","name","tabindex","disabled","true-value","false-value"],kn=["id","indeterminate","disabled","value","name","tabindex"],yn=$({name:"ElCheckbox"}),Cn=$({...yn,props:me,emits:pe,setup(e){const n=e,l=ie(),{inputId:t,isLabeledByFormItem:s,isChecked:c,isDisabled:u,isFocused:a,checkboxSize:d,hasOwnLabel:o,model:v,handleChange:g,onClickRoot:w}=ge(n,l),b=M("checkbox"),r=h(()=>[b.b(),b.m(d.value),b.is("disabled",u.value),b.is("bordered",n.border),b.is("checked",c.value)]),m=h(()=>[b.e("input"),b.is("disabled",u.value),b.is("checked",c.value),b.is("indeterminate",n.indeterminate),b.is("focus",a.value)]);return(p,f)=>(x(),re(be(!i(o)&&i(s)?"span":"label"),{class:y(i(r)),"aria-controls":p.indeterminate?p.controls:null,onClick:i(w)},{default:O(()=>[L("span",{class:y(i(m))},[p.trueLabel||p.falseLabel?_((x(),C("input",{key:0,id:i(t),"onUpdate:modelValue":f[0]||(f[0]=k=>N(v)?v.value=k:null),class:y(i(b).e("original")),type:"checkbox",indeterminate:p.indeterminate,name:p.name,tabindex:p.tabindex,disabled:i(u),"true-value":p.trueLabel,"false-value":p.falseLabel,onChange:f[1]||(f[1]=(...k)=>i(g)&&i(g)(...k)),onFocus:f[2]||(f[2]=k=>a.value=!0),onBlur:f[3]||(f[3]=k=>a.value=!1),onClick:f[4]||(f[4]=F(()=>{},["stop"]))},null,42,xn)),[[z,i(v)]]):_((x(),C("input",{key:1,id:i(t),"onUpdate:modelValue":f[5]||(f[5]=k=>N(v)?v.value=k:null),class:y(i(b).e("original")),type:"checkbox",indeterminate:p.indeterminate,disabled:i(u),value:p.label,name:p.name,tabindex:p.tabindex,onChange:f[6]||(f[6]=(...k)=>i(g)&&i(g)(...k)),onFocus:f[7]||(f[7]=k=>a.value=!0),onBlur:f[8]||(f[8]=k=>a.value=!1),onClick:f[9]||(f[9]=F(()=>{},["stop"]))},null,42,kn)),[[z,i(v)]]),L("span",{class:y(i(b).e("inner"))},null,2)],2),i(o)?(x(),C("span",{key:0,class:y(i(b).e("label"))},[q(p.$slots,"default"),p.$slots.default?R("v-if",!0):(x(),C(de,{key:0},[T(ce(p.label),1)],64))],2)):R("v-if",!0)]),_:3},8,["class","aria-controls","onClick"]))}});var Sn=A(Cn,[["__file","checkbox.vue"]]);const $n=["name","tabindex","disabled","true-value","false-value"],wn=["name","tabindex","disabled","value"],En=$({name:"ElCheckboxButton"}),Bn=$({...En,props:me,emits:pe,setup(e){const n=e,l=ie(),{isFocused:t,isChecked:s,isDisabled:c,checkboxButtonSize:u,model:a,handleChange:d}=ge(n,l),o=V(E,void 0),v=M("checkbox"),g=h(()=>{var b,r,m,p;const f=(r=(b=o==null?void 0:o.fill)==null?void 0:b.value)!=null?r:"";return{backgroundColor:f,borderColor:f,color:(p=(m=o==null?void 0:o.textColor)==null?void 0:m.value)!=null?p:"",boxShadow:f?`-1px 0 0 0 ${f}`:void 0}}),w=h(()=>[v.b("button"),v.bm("button",u.value),v.is("disabled",c.value),v.is("checked",s.value),v.is("focus",t.value)]);return(b,r)=>(x(),C("label",{class:y(i(w))},[b.trueLabel||b.falseLabel?_((x(),C("input",{key:0,"onUpdate:modelValue":r[0]||(r[0]=m=>N(a)?a.value=m:null),class:y(i(v).be("button","original")),type:"checkbox",name:b.name,tabindex:b.tabindex,disabled:i(c),"true-value":b.trueLabel,"false-value":b.falseLabel,onChange:r[1]||(r[1]=(...m)=>i(d)&&i(d)(...m)),onFocus:r[2]||(r[2]=m=>t.value=!0),onBlur:r[3]||(r[3]=m=>t.value=!1),onClick:r[4]||(r[4]=F(()=>{},["stop"]))},null,42,$n)),[[z,i(a)]]):_((x(),C("input",{key:1,"onUpdate:modelValue":r[5]||(r[5]=m=>N(a)?a.value=m:null),class:y(i(v).be("button","original")),type:"checkbox",name:b.name,tabindex:b.tabindex,disabled:i(c),value:b.label,onChange:r[6]||(r[6]=(...m)=>i(d)&&i(d)(...m)),onFocus:r[7]||(r[7]=m=>t.value=!0),onBlur:r[8]||(r[8]=m=>t.value=!1),onClick:r[9]||(r[9]=F(()=>{},["stop"]))},null,42,wn)),[[z,i(a)]]),b.$slots.default||b.label?(x(),C("span",{key:2,class:y(i(v).be("button","inner")),style:Me(i(s)?i(g):void 0)},[q(b.$slots,"default",{},()=>[T(ce(b.label),1)])],6)):R("v-if",!0)],2))}});var he=A(Bn,[["__file","checkbox-button.vue"]]);const Ln=_e({modelValue:{type:Ne(Array),default:()=>[]},disabled:Boolean,min:Number,max:Number,size:ne,label:String,fill:String,textColor:String,tag:{type:String,default:"div"},validateEvent:{type:Boolean,default:!0}}),Vn={[P]:e=>B(e),change:e=>B(e)},In=$({name:"ElCheckboxGroup"}),_n=$({...In,props:Ln,emits:Vn,setup(e,{emit:n}){const l=e,t=M("checkbox"),{formItem:s}=K(),{inputId:c,isLabeledByFormItem:u}=te(l,{formItemContext:s}),a=async o=>{n(P,o),await se(),n("change",o)},d=h({get(){return l.modelValue},set(o){a(o)}});return Ae(E,{...vn(Ke(l),["size","min","max","disabled","validateEvent","fill","textColor"]),modelValue:d,changeEvent:a}),oe(()=>l.modelValue,()=>{l.validateEvent&&(s==null||s.validate("change").catch(o=>ae()))}),(o,v)=>{var g;return x(),re(be(o.tag),{id:i(c),class:y(i(t).b("group")),role:"group","aria-label":i(u)?void 0:o.label||"checkbox-group","aria-labelledby":i(u)?(g=i(s))==null?void 0:g.labelId:void 0},{default:O(()=>[q(o.$slots,"default")]),_:3},8,["id","class","aria-label","aria-labelledby"])}}});var xe=A(_n,[["__file","checkbox-group.vue"]]);const Nn=Fe(Sn,{CheckboxButton:he,CheckboxGroup:xe});le(he);le(xe);const Fn={class:"h-full flex-1 w-0 flex flex-col gap-4"},zn={class:"flex items-center justify-between"},Dn={class:"flex items-center flex-wrap pl-2"},Pn=$({__name:"json",props:{data:{}},setup(e){const{data:n}=e,l=ve({uuid:!1,name:!1,type:!1}),t=c=>n.map(a=>{const d=c?`${a.base64.slice(0,10)}...`:a.base64;if(!l.uuid&&!l.name&&!l.type)return d;const o={base64:d};return l.uuid&&(o.uuid=a.id),l.name&&(o.name=a.name),l.type&&(o.type=a.type),o}),s=I();return(c,u)=>{const a=Nn,d=Ge;return x(),C("div",Fn,[L("div",zn,[L("div",Dn,[S(a,{modelValue:l.uuid,"onUpdate:modelValue":u[0]||(u[0]=o=>l.uuid=o),label:"uuid",size:"default"},null,8,["modelValue"]),S(a,{modelValue:l.name,"onUpdate:modelValue":u[1]||(u[1]=o=>l.name=o),label:"名字",size:"default"},null,8,["modelValue"]),S(a,{modelValue:l.type,"onUpdate:modelValue":u[2]||(u[2]=o=>l.type=o),label:"类型",size:"default"},null,8,["modelValue"])]),S(d,{icon:i(ze),onClick:u[3]||(u[3]=o=>{var v;return(v=s.value)==null?void 0:v.copyString(JSON.stringify(t(!1),null,2))})},{default:O(()=>[T(" Copy ")]),_:1},8,["icon"])]),S(Ue,{language:"json",readonly:!0,value:JSON.stringify(t(!0),null,2),ref_key:"jsonEditorRef",ref:s},null,8,["value"])])}}}),On=qe(Pn,[["__scopeId","data-v-9e165432"]]),Tn={class:"shadow-2xl border rounded-xl w-full h-full max-w-[1440px] p-4 flex gap-4 overflow-hidden"},Kn=$({__name:"index",setup(e){const n=ve([]);return(l,t)=>(x(),C(de,null,[S(De,null,{default:O(()=>[T("在线转 base64（图片）")]),_:1}),L("div",Tn,[S(we,{modelValue:n,"onUpdate:modelValue":t[0]||(t[0]=s=>n=s)},null,8,["modelValue"]),S(On,{data:n},null,8,["data"])])],64))}});export{Kn as default};