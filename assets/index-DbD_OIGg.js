import{i as Ce,c as Se,d as Ve,h as $e,a as Be,D as we}from"./draggable-CfWqR3Vm.js";import{ay as Le,a9 as Ee,az as Q,c as Ie,i as W,aA as ne,t as Ne,b as De,S as te,Q as X,N as Y,aB as U,f as E,h,M as T,w as oe,q as se,l as ue,E as I,K as L,aC as A,j as _e,k as Z,m as V,ad as ie,u as M,x as k,$ as re,Y as K,A as N,C,n as d,s as D,y as S,an as _,D as z,aD as F,z as H,Z as ze,a5 as q,B as de,G as R,a2 as ce,H as Fe,R as Pe,T as Oe,U as Ge,o as Ue,r as ve,X as B}from"./index-BUok7NYM.js";import{m as Te,b as J,e as be,d as ee,c as fe,H as G,_ as j,w as Ae,k as me,D as Re,l as Me}from"./el-button-DF2QBxxX.js";import{_ as Ke}from"./index.vuevuetypescriptsetuptruelang-DAwxqzBo.js";import{U as O,_ as He}from"./plugin-vueexport-helper-oQedCV1b.js";import{a as qe}from"./isArrayLike-j7mZAN4V.js";import"./el-icon-D3wOhDnj.js";function Je(e,l,a){switch(a.length){case 0:return e.call(l);case 1:return e.call(l,a[0]);case 2:return e.call(l,a[0],a[1]);case 3:return e.call(l,a[0],a[1],a[2])}return e.apply(l,a)}var je=800,Qe=16,We=Date.now;function Xe(e){var l=0,a=0;return function(){var n=We(),o=Qe-(n-a);if(a=n,o>0){if(++l>=je)return arguments[0]}else l=0;return e.apply(void 0,arguments)}}function Ye(e){return function(){return e}}var P=function(){try{var e=Le(Object,"defineProperty");return e({},"",{}),e}catch{}}(),Ze=P?function(e,l){return P(e,"toString",{configurable:!0,enumerable:!1,value:Ye(l),writable:!0})}:Ce;const el=Ze;var ll=Xe(el);function al(e,l,a){l=="__proto__"&&P?P(e,l,{configurable:!0,enumerable:!0,value:a,writable:!0}):e[l]=a}var nl=Object.prototype,tl=nl.hasOwnProperty;function ol(e,l,a){var n=e[l];(!(tl.call(e,l)&&Ee(n,a))||a===void 0&&!(l in e))&&al(e,l,a)}var le=Math.max;function sl(e,l,a){return l=le(l===void 0?e.length-1:l,0),function(){for(var n=arguments,o=-1,c=le(n.length-l,0),i=Array(c);++o<c;)i[o]=n[l+o];o=-1;for(var t=Array(l+1);++o<l;)t[o]=n[o];return t[l]=a(i),Je(e,this,t)}}var ae=Q?Q.isConcatSpreadable:void 0;function ul(e){return Ie(e)||Se(e)||!!(ae&&e&&e[ae])}function pe(e,l,a,n,o){var c=-1,i=e.length;for(a||(a=ul),o||(o=[]);++c<i;){var t=e[c];l>0&&a(t)?l>1?pe(t,l-1,a,n,o):Ve(o,t):n||(o[o.length]=t)}return o}function il(e){var l=e==null?0:e.length;return l?pe(e,1):[]}function rl(e){return ll(sl(e,void 0,il),e+"")}function dl(e,l,a,n){if(!W(e))return e;l=ne(l,e);for(var o=-1,c=l.length,i=c-1,t=e;t!=null&&++o<c;){var b=Ne(l[o]),u=a;if(b==="__proto__"||b==="constructor"||b==="prototype")return e;if(o!=i){var r=t[b];u=n?n(r,b,t):void 0,u===void 0&&(u=W(r)?r:qe(l[o+1])?[]:{})}ol(t,b,u),t=t[b]}return e}function cl(e,l,a){for(var n=-1,o=l.length,c={};++n<o;){var i=l[n],t=De(e,i);a(t,i)&&dl(c,ne(i,e),t)}return c}function vl(e,l){return cl(e,l,function(a,n){return $e(e,n)})}var bl=rl(function(e,l){return e==null?{}:vl(e,l)});const ge={modelValue:{type:[Number,String,Boolean],default:void 0},label:{type:[String,Boolean,Number,Object],default:void 0},value:{type:[String,Boolean,Number,Object],default:void 0},indeterminate:Boolean,disabled:Boolean,checked:Boolean,name:{type:String,default:void 0},trueValue:{type:[String,Number],default:void 0},falseValue:{type:[String,Number],default:void 0},trueLabel:{type:[String,Number],default:void 0},falseLabel:{type:[String,Number],default:void 0},id:{type:String,default:void 0},controls:{type:String,default:void 0},border:Boolean,size:te,tabindex:[String,Number],validateEvent:{type:Boolean,default:!0}},he={[O]:e=>X(e)||Y(e)||U(e),change:e=>X(e)||Y(e)||U(e)},w=Symbol("checkboxGroupContextKey"),fl=({model:e,isChecked:l})=>{const a=E(w,void 0),n=h(()=>{var c,i;const t=(c=a==null?void 0:a.max)==null?void 0:c.value,b=(i=a==null?void 0:a.min)==null?void 0:i.value;return!T(t)&&e.value.length>=t&&!l.value||!T(b)&&e.value.length<=b&&l.value});return{isDisabled:Te(h(()=>(a==null?void 0:a.disabled.value)||n.value)),isLimitDisabled:n}},ml=(e,{model:l,isLimitExceeded:a,hasOwnLabel:n,isDisabled:o,isLabeledByFormItem:c})=>{const i=E(w,void 0),{formItem:t}=J(),{emit:b}=ue();function u(s){var v,p;return[!0,e.trueValue,e.trueLabel].includes(s)?(v=e.trueValue||e.trueLabel)!=null?v:!0:(p=e.falseValue||e.falseLabel)!=null?p:!1}function r(s,v){b("change",u(s),v)}function g(s){if(a.value)return;const v=s.target;b("change",u(v.checked),s)}async function x(s){a.value||!n.value&&!o.value&&c.value&&(s.composedPath().some(m=>m.tagName==="LABEL")||(l.value=u([!1,e.falseValue,e.falseLabel].includes(l.value)),await se(),r(l.value,s)))}const $=h(()=>(i==null?void 0:i.validateEvent)||e.validateEvent);return oe(()=>e.modelValue,()=>{$.value&&(t==null||t.validate("change").catch(s=>be()))}),{handleChange:g,onClickRoot:x}},pl=e=>{const l=I(!1),{emit:a}=ue(),n=E(w,void 0),o=h(()=>T(n)===!1),c=I(!1),i=h({get(){var t,b;return o.value?(t=n==null?void 0:n.modelValue)==null?void 0:t.value:(b=e.modelValue)!=null?b:l.value},set(t){var b,u;o.value&&L(t)?(c.value=((b=n==null?void 0:n.max)==null?void 0:b.value)!==void 0&&t.length>(n==null?void 0:n.max.value)&&t.length>i.value.length,c.value===!1&&((u=n==null?void 0:n.changeEvent)==null||u.call(n,t))):(a(O,t),l.value=t)}});return{model:i,isGroup:o,isLimitExceeded:c}},gl=(e,l,{model:a})=>{const n=E(w,void 0),o=I(!1),c=h(()=>A(e.value)?e.label:e.value),i=h(()=>{const r=a.value;return U(r)?r:L(r)?_e(c.value)?r.map(Z).some(g=>Be(g,c.value)):r.map(Z).includes(c.value):r!=null?r===e.trueValue||r===e.trueLabel:!!r}),t=ee(h(()=>{var r;return(r=n==null?void 0:n.size)==null?void 0:r.value}),{prop:!0}),b=ee(h(()=>{var r;return(r=n==null?void 0:n.size)==null?void 0:r.value})),u=h(()=>!!l.default||!A(c.value));return{checkboxButtonSize:t,isChecked:i,isFocused:o,checkboxSize:b,hasOwnLabel:u,actualValue:c}},ke=(e,l)=>{const{formItem:a}=J(),{model:n,isGroup:o,isLimitExceeded:c}=pl(e),{isFocused:i,isChecked:t,checkboxButtonSize:b,checkboxSize:u,hasOwnLabel:r,actualValue:g}=gl(e,l,{model:n}),{isDisabled:x}=fl({model:n,isChecked:t}),{inputId:$,isLabeledByFormItem:s}=fe(e,{formItemContext:a,disableIdGeneration:r,disableIdManagement:o}),{handleChange:v,onClickRoot:p}=ml(e,{model:n,isLimitExceeded:c,hasOwnLabel:r,isDisabled:x,isLabeledByFormItem:s});return(()=>{function f(){L(n.value)&&!n.value.includes(g.value)?n.value.push(g.value):n.value=e.trueValue||e.trueLabel||!0}e.checked&&f()})(),G({from:"label act as value",replacement:"value",version:"3.0.0",scope:"el-checkbox",ref:"https://element-plus.org/en-US/component/checkbox.html"},h(()=>o.value&&A(e.value))),G({from:"true-label",replacement:"true-value",version:"3.0.0",scope:"el-checkbox",ref:"https://element-plus.org/en-US/component/checkbox.html"},h(()=>!!e.trueLabel)),G({from:"false-label",replacement:"false-value",version:"3.0.0",scope:"el-checkbox",ref:"https://element-plus.org/en-US/component/checkbox.html"},h(()=>!!e.falseLabel)),{inputId:$,isLabeledByFormItem:s,isChecked:t,isDisabled:x,isFocused:i,checkboxButtonSize:b,checkboxSize:u,hasOwnLabel:r,model:n,actualValue:g,handleChange:v,onClickRoot:p}},hl=["id","indeterminate","name","tabindex","disabled","true-value","false-value"],kl=["id","indeterminate","disabled","value","name","tabindex"],xl=V({name:"ElCheckbox"}),yl=V({...xl,props:ge,emits:he,setup(e){const l=e,a=ie(),{inputId:n,isLabeledByFormItem:o,isChecked:c,isDisabled:i,isFocused:t,checkboxSize:b,hasOwnLabel:u,model:r,actualValue:g,handleChange:x,onClickRoot:$}=ke(l,a),s=M("checkbox"),v=h(()=>[s.b(),s.m(b.value),s.is("disabled",i.value),s.is("bordered",l.border),s.is("checked",c.value)]),p=h(()=>[s.e("input"),s.is("disabled",i.value),s.is("checked",c.value),s.is("indeterminate",l.indeterminate),s.is("focus",t.value)]);return(m,f)=>(k(),re(ce(!d(u)&&d(o)?"span":"label"),{class:C(d(v)),"aria-controls":m.indeterminate?m.controls:null,onClick:d($)},{default:K(()=>[N("span",{class:C(d(p))},[m.trueValue||m.falseValue||m.trueLabel||m.falseLabel?D((k(),S("input",{key:0,id:d(n),"onUpdate:modelValue":f[0]||(f[0]=y=>_(r)?r.value=y:null),class:C(d(s).e("original")),type:"checkbox",indeterminate:m.indeterminate,name:m.name,tabindex:m.tabindex,disabled:d(i),"true-value":m.trueValue||m.trueLabel,"false-value":m.falseValue||m.falseLabel,onChange:f[1]||(f[1]=(...y)=>d(x)&&d(x)(...y)),onFocus:f[2]||(f[2]=y=>t.value=!0),onBlur:f[3]||(f[3]=y=>t.value=!1),onClick:f[4]||(f[4]=z(()=>{},["stop"]))},null,42,hl)),[[F,d(r)]]):D((k(),S("input",{key:1,id:d(n),"onUpdate:modelValue":f[5]||(f[5]=y=>_(r)?r.value=y:null),class:C(d(s).e("original")),type:"checkbox",indeterminate:m.indeterminate,disabled:d(i),value:d(g),name:m.name,tabindex:m.tabindex,onChange:f[6]||(f[6]=(...y)=>d(x)&&d(x)(...y)),onFocus:f[7]||(f[7]=y=>t.value=!0),onBlur:f[8]||(f[8]=y=>t.value=!1),onClick:f[9]||(f[9]=z(()=>{},["stop"]))},null,42,kl)),[[F,d(r)]]),N("span",{class:C(d(s).e("inner"))},null,2)],2),d(u)?(k(),S("span",{key:0,class:C(d(s).e("label"))},[H(m.$slots,"default"),m.$slots.default?R("v-if",!0):(k(),S(ze,{key:0},[q(de(m.label),1)],64))],2)):R("v-if",!0)]),_:3},8,["class","aria-controls","onClick"]))}});var Cl=j(yl,[["__file","checkbox.vue"]]);const Sl=["name","tabindex","disabled","true-value","false-value"],Vl=["name","tabindex","disabled","value"],$l=V({name:"ElCheckboxButton"}),Bl=V({...$l,props:ge,emits:he,setup(e){const l=e,a=ie(),{isFocused:n,isChecked:o,isDisabled:c,checkboxButtonSize:i,model:t,actualValue:b,handleChange:u}=ke(l,a),r=E(w,void 0),g=M("checkbox"),x=h(()=>{var s,v,p,m;const f=(v=(s=r==null?void 0:r.fill)==null?void 0:s.value)!=null?v:"";return{backgroundColor:f,borderColor:f,color:(m=(p=r==null?void 0:r.textColor)==null?void 0:p.value)!=null?m:"",boxShadow:f?`-1px 0 0 0 ${f}`:void 0}}),$=h(()=>[g.b("button"),g.bm("button",i.value),g.is("disabled",c.value),g.is("checked",o.value),g.is("focus",n.value)]);return(s,v)=>(k(),S("label",{class:C(d($))},[s.trueValue||s.falseValue||s.trueLabel||s.falseLabel?D((k(),S("input",{key:0,"onUpdate:modelValue":v[0]||(v[0]=p=>_(t)?t.value=p:null),class:C(d(g).be("button","original")),type:"checkbox",name:s.name,tabindex:s.tabindex,disabled:d(c),"true-value":s.trueValue||s.trueLabel,"false-value":s.falseValue||s.falseLabel,onChange:v[1]||(v[1]=(...p)=>d(u)&&d(u)(...p)),onFocus:v[2]||(v[2]=p=>n.value=!0),onBlur:v[3]||(v[3]=p=>n.value=!1),onClick:v[4]||(v[4]=z(()=>{},["stop"]))},null,42,Sl)),[[F,d(t)]]):D((k(),S("input",{key:1,"onUpdate:modelValue":v[5]||(v[5]=p=>_(t)?t.value=p:null),class:C(d(g).be("button","original")),type:"checkbox",name:s.name,tabindex:s.tabindex,disabled:d(c),value:d(b),onChange:v[6]||(v[6]=(...p)=>d(u)&&d(u)(...p)),onFocus:v[7]||(v[7]=p=>n.value=!0),onBlur:v[8]||(v[8]=p=>n.value=!1),onClick:v[9]||(v[9]=z(()=>{},["stop"]))},null,42,Vl)),[[F,d(t)]]),s.$slots.default||s.label?(k(),S("span",{key:2,class:C(d(g).be("button","inner")),style:Fe(d(o)?d(x):void 0)},[H(s.$slots,"default",{},()=>[q(de(s.label),1)])],6)):R("v-if",!0)],2))}});var xe=j(Bl,[["__file","checkbox-button.vue"]]);const wl=Pe({modelValue:{type:Oe(Array),default:()=>[]},disabled:Boolean,min:Number,max:Number,size:te,label:String,fill:String,textColor:String,tag:{type:String,default:"div"},validateEvent:{type:Boolean,default:!0}}),Ll={[O]:e=>L(e),change:e=>L(e)},El=V({name:"ElCheckboxGroup"}),Il=V({...El,props:wl,emits:Ll,setup(e,{emit:l}){const a=e,n=M("checkbox"),{formItem:o}=J(),{inputId:c,isLabeledByFormItem:i}=fe(a,{formItemContext:o}),t=async u=>{l(O,u),await se(),l("change",u)},b=h({get(){return a.modelValue},set(u){t(u)}});return Ge(w,{...bl(Ue(a),["size","min","max","disabled","validateEvent","fill","textColor"]),modelValue:b,changeEvent:t}),oe(()=>a.modelValue,()=>{a.validateEvent&&(o==null||o.validate("change").catch(u=>be()))}),(u,r)=>{var g;return k(),re(ce(u.tag),{id:d(c),class:C(d(n).b("group")),role:"group","aria-label":d(i)?void 0:u.label||"checkbox-group","aria-labelledby":d(i)?(g=d(o))==null?void 0:g.labelId:void 0},{default:K(()=>[H(u.$slots,"default")]),_:3},8,["id","class","aria-label","aria-labelledby"])}}});var ye=j(Il,[["__file","checkbox-group.vue"]]);const Nl=Ae(Cl,{CheckboxButton:xe,CheckboxGroup:ye});me(xe);me(ye);const Dl={class:"h-full flex-1 w-0 flex flex-col gap-4"},_l={class:"flex items-center justify-between"},zl={class:"flex items-center flex-wrap pl-2"},Fl=V({__name:"json",props:{data:{}},setup(e){const{data:l}=e,a=ve({uuid:!1,name:!1,type:!1}),n=c=>l.map(t=>{const b=c?`${t.base64.slice(0,10)}...`:t.base64;if(!a.uuid&&!a.name&&!a.type)return b;const u={base64:b};return a.uuid&&(u.uuid=t.id),a.name&&(u.name=t.name),a.type&&(u.type=t.type),u}),o=I();return(c,i)=>{const t=Nl,b=Me;return k(),S("div",Dl,[N("div",_l,[N("div",zl,[B(t,{modelValue:a.uuid,"onUpdate:modelValue":i[0]||(i[0]=u=>a.uuid=u),label:"uuid",size:"default"},null,8,["modelValue"]),B(t,{modelValue:a.name,"onUpdate:modelValue":i[1]||(i[1]=u=>a.name=u),label:"名字",size:"default"},null,8,["modelValue"]),B(t,{modelValue:a.type,"onUpdate:modelValue":i[2]||(i[2]=u=>a.type=u),label:"类型",size:"default"},null,8,["modelValue"])]),B(b,{icon:d(Re),onClick:i[3]||(i[3]=u=>{var r;return(r=o.value)==null?void 0:r.copyString(JSON.stringify(n(!1),null,2))})},{default:K(()=>[q(" Copy ")]),_:1},8,["icon"])]),B(Ke,{language:"json",readonly:!0,value:JSON.stringify(n(!0),null,2),ref_key:"jsonEditorRef",ref:o},null,8,["value"])])}}}),Pl=He(Fl,[["__scopeId","data-v-9e165432"]]),Ol={class:"shadow-2xl border rounded-xl w-full h-full max-w-[1440px] p-4 flex gap-4 overflow-hidden"},Hl=V({__name:"index",setup(e){const l=ve([]);return(a,n)=>(k(),S("div",Ol,[B(we,{modelValue:l,"onUpdate:modelValue":n[0]||(n[0]=o=>l=o)},null,8,["modelValue"]),B(Pl,{data:l},null,8,["data"])]))}});export{Hl as default};
