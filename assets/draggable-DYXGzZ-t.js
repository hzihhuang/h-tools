import{ay as V,ar as S,aE as L,aF as C,aG as Le,c as E,aH as Y,aI as M,aJ as Ee,aK as I,az as X,a9 as Se,aA as Re,t as je,aL as Me,m as Ce,ap as Ge,E as O,y as G,A as D,X as R,Y as B,a6 as Be,s as Ue,v as Fe,Z as Q,x as U,_ as Ne,a5 as Ke,n as qe,a7 as He,a8 as ze}from"./index-BuCJjjY_.js";import{b as me,a as Te,i as We}from"./isArrayLike-BfHJTD-r.js";import{S as q,a as Je,c as Ve,s as Ye}from"./el-icon-Caxxf2hL.js";import{l as Ze,h as Xe,J as Qe}from"./el-button-qZUMnpEi.js";import{_ as ke}from"./plugin-vueexport-helper-oQedCV1b.js";function ra(e){return e}var er=V(S,"WeakMap");const H=er;var rr=Object.prototype;function tr(e){var r=e&&e.constructor,t=typeof r=="function"&&r.prototype||rr;return e===t}function ar(e,r){for(var t=-1,a=Array(e);++t<e;)a[t]=r(t);return a}var nr="[object Arguments]";function k(e){return L(e)&&C(e)==nr}var Ae=Object.prototype,sr=Ae.hasOwnProperty,ir=Ae.propertyIsEnumerable,we=k(function(){return arguments}())?k:function(e){return L(e)&&sr.call(e,"callee")&&!ir.call(e,"callee")};function or(){return!1}var he=typeof exports=="object"&&exports&&!exports.nodeType&&exports,ee=he&&typeof module=="object"&&module&&!module.nodeType&&module,lr=ee&&ee.exports===he,re=lr?S.Buffer:void 0,ur=re?re.isBuffer:void 0,z=ur||or,fr="[object Arguments]",cr="[object Array]",gr="[object Boolean]",pr="[object Date]",dr="[object Error]",vr="[object Function]",yr="[object Map]",br="[object Number]",_r="[object Object]",mr="[object RegExp]",Tr="[object Set]",Ar="[object String]",wr="[object WeakMap]",hr="[object ArrayBuffer]",xr="[object DataView]",$r="[object Float32Array]",Or="[object Float64Array]",Dr="[object Int8Array]",Ir="[object Int16Array]",Pr="[object Int32Array]",Lr="[object Uint8Array]",Er="[object Uint8ClampedArray]",Sr="[object Uint16Array]",Rr="[object Uint32Array]",f={};f[$r]=f[Or]=f[Dr]=f[Ir]=f[Pr]=f[Lr]=f[Er]=f[Sr]=f[Rr]=!0;f[fr]=f[cr]=f[hr]=f[gr]=f[xr]=f[pr]=f[dr]=f[vr]=f[yr]=f[br]=f[_r]=f[mr]=f[Tr]=f[Ar]=f[wr]=!1;function jr(e){return L(e)&&me(e.length)&&!!f[C(e)]}function Mr(e){return function(r){return e(r)}}var xe=typeof exports=="object"&&exports&&!exports.nodeType&&exports,P=xe&&typeof module=="object"&&module&&!module.nodeType&&module,Cr=P&&P.exports===xe,F=Cr&&Le.process,te=function(){try{var e=P&&P.require&&P.require("util").types;return e||F&&F.binding&&F.binding("util")}catch{}}(),ae=te&&te.isTypedArray,$e=ae?Mr(ae):jr,Gr=Object.prototype,Br=Gr.hasOwnProperty;function Ur(e,r){var t=E(e),a=!t&&we(e),i=!t&&!a&&z(e),n=!t&&!a&&!i&&$e(e),l=t||a||i||n,c=l?ar(e.length,String):[],g=c.length;for(var u in e)(r||Br.call(e,u))&&!(l&&(u=="length"||i&&(u=="offset"||u=="parent")||n&&(u=="buffer"||u=="byteLength"||u=="byteOffset")||Te(u,g)))&&c.push(u);return c}function Fr(e,r){return function(t){return e(r(t))}}var Nr=Fr(Object.keys,Object),Kr=Object.prototype,qr=Kr.hasOwnProperty;function Hr(e){if(!tr(e))return Nr(e);var r=[];for(var t in Object(e))qr.call(e,t)&&t!="constructor"&&r.push(t);return r}function zr(e){return We(e)?Ur(e):Hr(e)}function Wr(e,r){for(var t=-1,a=r.length,i=e.length;++t<a;)e[i+t]=r[t];return e}function Jr(){this.__data__=new Y,this.size=0}function Vr(e){var r=this.__data__,t=r.delete(e);return this.size=r.size,t}function Yr(e){return this.__data__.get(e)}function Zr(e){return this.__data__.has(e)}var Xr=200;function Qr(e,r){var t=this.__data__;if(t instanceof Y){var a=t.__data__;if(!M||a.length<Xr-1)return a.push([e,r]),this.size=++t.size,this;t=this.__data__=new Ee(a)}return t.set(e,r),this.size=t.size,this}function x(e){var r=this.__data__=new Y(e);this.size=r.size}x.prototype.clear=Jr;x.prototype.delete=Vr;x.prototype.get=Yr;x.prototype.has=Zr;x.prototype.set=Qr;function kr(e,r){for(var t=-1,a=e==null?0:e.length,i=0,n=[];++t<a;){var l=e[t];r(l,t,e)&&(n[i++]=l)}return n}function et(){return[]}var rt=Object.prototype,tt=rt.propertyIsEnumerable,ne=Object.getOwnPropertySymbols,at=ne?function(e){return e==null?[]:(e=Object(e),kr(ne(e),function(r){return tt.call(e,r)}))}:et;const nt=at;function st(e,r,t){var a=r(e);return E(e)?a:Wr(a,t(e))}function se(e){return st(e,zr,nt)}var it=V(S,"DataView");const W=it;var ot=V(S,"Promise");const J=ot;var ie="[object Map]",lt="[object Object]",oe="[object Promise]",le="[object Set]",ue="[object WeakMap]",fe="[object DataView]",ut=I(W),ft=I(M),ct=I(J),gt=I(q),pt=I(H),$=C;(W&&$(new W(new ArrayBuffer(1)))!=fe||M&&$(new M)!=ie||J&&$(J.resolve())!=oe||q&&$(new q)!=le||H&&$(new H)!=ue)&&($=function(e){var r=C(e),t=r==lt?e.constructor:void 0,a=t?I(t):"";if(a)switch(a){case ut:return fe;case ft:return ie;case ct:return oe;case gt:return le;case pt:return ue}return r});const ce=$;var dt=S.Uint8Array;const ge=dt;function vt(e,r){for(var t=-1,a=e==null?0:e.length;++t<a;)if(r(e[t],t,e))return!0;return!1}var yt=1,bt=2;function Oe(e,r,t,a,i,n){var l=t&yt,c=e.length,g=r.length;if(c!=g&&!(l&&g>c))return!1;var u=n.get(e),m=n.get(r);if(u&&m)return u==r&&m==e;var y=-1,p=!0,T=t&bt?new Je:void 0;for(n.set(e,r),n.set(r,e);++y<c;){var b=e[y],_=r[y];if(a)var A=l?a(_,b,y,r,e,n):a(b,_,y,e,r,n);if(A!==void 0){if(A)continue;p=!1;break}if(T){if(!vt(r,function(s,o){if(!Ve(T,o)&&(b===s||i(b,s,t,a,n)))return T.push(o)})){p=!1;break}}else if(!(b===_||i(b,_,t,a,n))){p=!1;break}}return n.delete(e),n.delete(r),p}function _t(e){var r=-1,t=Array(e.size);return e.forEach(function(a,i){t[++r]=[i,a]}),t}var mt=1,Tt=2,At="[object Boolean]",wt="[object Date]",ht="[object Error]",xt="[object Map]",$t="[object Number]",Ot="[object RegExp]",Dt="[object Set]",It="[object String]",Pt="[object Symbol]",Lt="[object ArrayBuffer]",Et="[object DataView]",pe=X?X.prototype:void 0,N=pe?pe.valueOf:void 0;function St(e,r,t,a,i,n,l){switch(t){case Et:if(e.byteLength!=r.byteLength||e.byteOffset!=r.byteOffset)return!1;e=e.buffer,r=r.buffer;case Lt:return!(e.byteLength!=r.byteLength||!n(new ge(e),new ge(r)));case At:case wt:case $t:return Se(+e,+r);case ht:return e.name==r.name&&e.message==r.message;case Ot:case It:return e==r+"";case xt:var c=_t;case Dt:var g=a&mt;if(c||(c=Ye),e.size!=r.size&&!g)return!1;var u=l.get(e);if(u)return u==r;a|=Tt,l.set(e,r);var m=Oe(c(e),c(r),a,i,n,l);return l.delete(e),m;case Pt:if(N)return N.call(e)==N.call(r)}return!1}var Rt=1,jt=Object.prototype,Mt=jt.hasOwnProperty;function Ct(e,r,t,a,i,n){var l=t&Rt,c=se(e),g=c.length,u=se(r),m=u.length;if(g!=m&&!l)return!1;for(var y=g;y--;){var p=c[y];if(!(l?p in r:Mt.call(r,p)))return!1}var T=n.get(e),b=n.get(r);if(T&&b)return T==r&&b==e;var _=!0;n.set(e,r),n.set(r,e);for(var A=l;++y<g;){p=c[y];var s=e[p],o=r[p];if(a)var d=l?a(o,s,p,r,e,n):a(s,o,p,e,r,n);if(!(d===void 0?s===o||i(s,o,t,a,n):d)){_=!1;break}A||(A=p=="constructor")}if(_&&!A){var w=e.constructor,v=r.constructor;w!=v&&"constructor"in e&&"constructor"in r&&!(typeof w=="function"&&w instanceof w&&typeof v=="function"&&v instanceof v)&&(_=!1)}return n.delete(e),n.delete(r),_}var Gt=1,de="[object Arguments]",ve="[object Array]",j="[object Object]",Bt=Object.prototype,ye=Bt.hasOwnProperty;function Ut(e,r,t,a,i,n){var l=E(e),c=E(r),g=l?ve:ce(e),u=c?ve:ce(r);g=g==de?j:g,u=u==de?j:u;var m=g==j,y=u==j,p=g==u;if(p&&z(e)){if(!z(r))return!1;l=!0,m=!1}if(p&&!m)return n||(n=new x),l||$e(e)?Oe(e,r,t,a,i,n):St(e,r,g,t,a,i,n);if(!(t&Gt)){var T=m&&ye.call(e,"__wrapped__"),b=y&&ye.call(r,"__wrapped__");if(T||b){var _=T?e.value():e,A=b?r.value():r;return n||(n=new x),i(_,A,t,a,n)}}return p?(n||(n=new x),Ct(e,r,t,a,i,n)):!1}function De(e,r,t,a,i){return e===r?!0:e==null||r==null||!L(e)&&!L(r)?e!==e&&r!==r:Ut(e,r,t,a,De,i)}function Ft(e,r){return e!=null&&r in Object(e)}function Nt(e,r,t){r=Re(r,e);for(var a=-1,i=r.length,n=!1;++a<i;){var l=je(r[a]);if(!(n=e!=null&&t(e,l)))break;e=e[l]}return n||++a!=i?n:(i=e==null?0:e.length,!!i&&me(i)&&Te(l,i)&&(E(e)||we(e)))}function ta(e,r){return e!=null&&Nt(e,r,Ft)}function aa(e,r){return De(e,r)}var Kt=0;function qt(e){var r=++Kt;return Me(e)+r}const Ht=e=>(He("data-v-9c60e4f8"),e=e(),ze(),e),zt=["onDragstart"],Wt=["src"],Jt=["innerHTML"],Vt=Ht(()=>D("div",{class:"text-white text-lg"},"拖出删除",-1)),be="dragging",K="drop-file",_e="dragging-item",Yt=Ce({__name:"draggable",props:{modelValue:{},modelModifiers:{}},emits:["update:modelValue"],setup(e){const r=Ge(e,"modelValue"),t=O(),a=s=>{s.preventDefault(),t.value.classList.add(K)},i=s=>{s.preventDefault(),s.stopPropagation(),t.value.classList.remove(K)},n=s=>{s.filter(d=>d.type.startsWith("image/")).forEach(d=>{const w=URL.createObjectURL(d),v=new FileReader;v.readAsDataURL(d),v.onload=function(h){var Z;const Ie=h.target.result,Pe={id:qt(),name:d.name,url:w,base64:Ie,type:d.type};(Z=r.value)==null||Z.push(Pe)}})},l=s=>{var d;s.preventDefault(),t.value.classList.remove(K);const o=[...((d=s.dataTransfer)==null?void 0:d.files)??[]];n(o)},c=O(),g=O(),u=s=>{var o;(o=t.value)==null||o.classList.add(be),setTimeout(()=>{s.target&&s.target.classList.add(_e)},0),c.value=s.target,p.value=!0},m=s=>{var h;if(s.preventDefault(),s.target===c.value||s.target===g.value.$el||!c.value)return;const o=Array.from(((h=g.value.$el)==null?void 0:h.children)??[]),d=o.indexOf(c.value),w=o.indexOf(s.target);if(!r.value)return;let v=r.value[d];r.value[d]=r.value[w],r.value[w]=v},y=s=>{var o;(o=t.value)==null||o.classList.remove(be),s.target&&s.target.classList.remove(_e),p.value=!1},p=O(!1),T=O(),b=()=>{var s;(s=r.value)==null||s.splice(r.value.findIndex(o=>o===T.value),1)},_=s=>{const o=s.target;n([...o.files??[]]),o.value=""},A=O();return(s,o)=>{const d=Ze,w=Xe;return U(),G(Q,null,[D("div",{class:"relative z-10 bg-white container flex-shrink-0 w-64 rounded-md h-full border-[2px] transition-all border-cyan-400 overflow-auto",onDrop:l,onDragleave:i,onDragover:a,ref_key:"containerRef",ref:t},[R(Be,{class:"flex relative flex-col gap-2 p-2 w-full mb-9 draggable transition-all",onDragstart:u,onDragenter:m,onDragend:y,ref_key:"labelFileRef",ref:g,name:"list",tag:"div"},{default:B(()=>[(U(!0),G(Q,null,Ne(r.value,v=>(U(),G("div",{class:"draggable-item text-nowrap w-full h-14 p-2 rounded-md select-none text-lg bg-slate-100 flex items-center gap-2 cursor-pointer hover:bg-slate-200 active:bg-slate-300 hover:scale-[1.02] transition-all",onClick:o[0]||(o[0]=h=>{h.stopPropagation(),h.preventDefault()}),draggable:"true",onDragstart:h=>T.value=v,key:v.id},[D("img",{src:v.url,class:"aspect-square h-full rounded-md pointer-events-none",draggable:"false",alt:""},null,8,Wt),D("div",{class:"text-ellipsis overflow-hidden pointer-events-none",draggable:"false",innerHTML:v.name},null,8,Jt)],40,zt))),128))]),_:1},512),R(d,{class:"upload-btn",type:"success",onClick:o[1]||(o[1]=v=>{var h;return(h=A.value)==null?void 0:h.click()})},{default:B(()=>[Ke(" 点击上传 ")]),_:1}),D("input",{class:"hidden",type:"file",accept:".jpg,.jpeg,.png,.gif,.svg",multiple:!0,onChange:_,ref_key:"fileInputRef",ref:A,name:"file"},null,544)],544),Ue(D("div",{class:"mask flex flex-col items-center gap-4 justify-center",onDragover:o[2]||(o[2]=v=>v.preventDefault()),onDrop:b},[R(w,{size:"36",color:"white"},{default:B(()=>[R(qe(Qe))]),_:1}),Vt],544),[[Fe,p.value]])],64)}}}),na=ke(Yt,[["__scopeId","data-v-9c60e4f8"]]);export{na as D,x as S,aa as a,De as b,we as c,Wr as d,ta as h,ra as i,zr as k};