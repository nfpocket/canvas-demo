import{bh as U,z as w,aJ as Y,at as Te,r as B,d as I,bi as L,aw as F,i as v,E as x,w as m,Q as C,D as a,ay as R,av as K,bj as ue,U as ce,b5 as Z,o as ee,a7 as Ve,g as _,aE as D,f as E,aS as de,bk as fe,bl as Be,b as ze,aF as Fe,aO as Re,bm as Oe,x as X,c as V,e as y,ah as Ee,an as pe,n as $,t as z,F as M,al as H,G as j,ae as te,y as ae,ai as N,am as Pe,A as ve,aX as q,aM as me,aR as ge,aZ as be,bn as G,aY as _e,bg as De,q as Me,s as He}from"./DilsIlI9.js";import{_ as he}from"./CLmrrCN-.js";import{u as Q,_ as je}from"./TdFEVxuC.js";import{_ as Ne}from"./DPOUur6Q.js";import{u as ye}from"./chmeiB-f.js";import{q as xe}from"./w4vvluHG.js";import{_ as Le}from"./Brc0Dpvd.js";import{r as ie}from"./DH9rQpoQ.js";import{_ as Ke}from"./DlAUqK2U.js";function Ue(o){return o==null}function qe(o,n){return Ue(o)?!1:Array.isArray(o)?o.some(e=>U(e,n)):U(o,n)}function Ge({type:o,defaultValue:n,modelValue:e}){const t=e||n;return e!==void 0||n!==void 0?Array.isArray(t)?"multiple":"single":o??"single"}function Ye({type:o,defaultValue:n,modelValue:e}){return o||Ge({type:o,defaultValue:n,modelValue:e})}function Xe({type:o,defaultValue:n}){return n!==void 0?n:o==="single"?void 0:[]}function Qe(o,n){const e=w(()=>Ye(o)),t=Y(o,"modelValue",n,{defaultValue:Xe(o),passive:o.modelValue===void 0,deep:!0});function s(l){if(e.value==="single")t.value=U(l,t.value)?void 0:l;else{const r=Array.isArray(t.value)?[...t.value||[]]:[t.value].filter(Boolean);if(qe(r,l)){const c=r.findIndex(f=>U(f,l));r.splice(c,1)}else r.push(l);t.value=r}}const u=w(()=>e.value==="single");return{modelValue:t,changeModelValue:s,isSingle:u}}function oe(o){const n=Te({dir:B("ltr")});return w(()=>{var e;return(o==null?void 0:o.value)||((e=n.dir)==null?void 0:e.value)||"ltr"})}const[J,Je]=K("AccordionRoot"),We=I({__name:"AccordionRoot",props:{collapsible:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},dir:{},orientation:{default:"vertical"},unmountOnHide:{type:Boolean,default:!0},asChild:{type:Boolean},as:{},type:{},modelValue:{},defaultValue:{}},emits:["update:modelValue"],setup(o,{emit:n}){const e=o,t=n,{dir:s,disabled:u,unmountOnHide:l}=L(e),r=oe(s),{modelValue:c,changeModelValue:f,isSingle:g}=Qe(e,t),{forwardRef:i,currentElement:d}=F();return Je({disabled:u,direction:r,orientation:e.orientation,parentElement:d,isSingle:g,collapsible:e.collapsible,modelValue:c,changeModelValue:f,unmountOnHide:l}),(b,p)=>(v(),x(a(R),{ref:a(i),"as-child":b.asChild,as:b.as},{default:m(()=>[C(b.$slots,"default",{modelValue:a(c)})]),_:3},8,["as-child","as"]))}}),[we,Ze]=K("CollapsibleRoot"),et=I({__name:"CollapsibleRoot",props:{defaultOpen:{type:Boolean,default:!1},open:{type:Boolean,default:void 0},disabled:{type:Boolean},unmountOnHide:{type:Boolean,default:!0},asChild:{type:Boolean},as:{}},emits:["update:open"],setup(o,{expose:n,emit:e}){const t=o,u=Y(t,"open",e,{defaultValue:t.defaultOpen,passive:t.open===void 0}),{disabled:l,unmountOnHide:r}=L(t);return Ze({contentId:"",disabled:l,open:u,unmountOnHide:r,onOpenToggle:()=>{u.value=!u.value}}),n({open:u}),F(),(c,f)=>(v(),x(a(R),{as:c.as,"as-child":t.asChild,"data-state":a(u)?"open":"closed","data-disabled":a(l)?"":void 0},{default:m(()=>[C(c.$slots,"default",{open:a(u)})]),_:3},8,["as","as-child","data-state","data-disabled"]))}}),tt=["INPUT","TEXTAREA"];function at(o,n,e,t={}){if(!n||t.enableIgnoredElement&&tt.includes(n.nodeName))return null;const{arrowKeyOptions:s="both",attributeName:u="[data-reka-collection-item]",itemsArray:l=[],loop:r=!0,dir:c="ltr",preventScroll:f=!0,focus:g=!1}=t,[i,d,b,p,k,T]=[o.key==="ArrowRight",o.key==="ArrowLeft",o.key==="ArrowUp",o.key==="ArrowDown",o.key==="Home",o.key==="End"],h=b||p,A=i||d;if(!k&&!T&&(!h&&!A||s==="vertical"&&A||s==="horizontal"&&h))return null;const S=e?Array.from(e.querySelectorAll(u)):l;if(!S.length)return null;f&&o.preventDefault();let O=null;return A||h?O=Ce(S,n,{goForward:h?p:c==="ltr"?i:d,loop:r}):k?O=S.at(0)||null:T&&(O=S.at(-1)||null),g&&(O==null||O.focus()),O}function Ce(o,n,e,t=o.length){if(--t===0)return null;const s=o.indexOf(n),u=e.goForward?s+1:s-1;if(!e.loop&&(u<0||u>=o.length))return null;const l=(u+o.length)%o.length,r=o[l];return r?r.hasAttribute("disabled")&&r.getAttribute("disabled")!=="false"?Ce(o,r,e,t):r:null}const[ne,ot]=K("AccordionItem"),nt=I({__name:"AccordionItem",props:{disabled:{type:Boolean},value:{},unmountOnHide:{type:Boolean},asChild:{type:Boolean},as:{}},setup(o,{expose:n}){const e=o,t=J(),s=w(()=>t.isSingle.value?e.value===t.modelValue.value:Array.isArray(t.modelValue.value)&&t.modelValue.value.includes(e.value)),u=w(()=>t.disabled.value||e.disabled),l=w(()=>u.value?"":void 0),r=w(()=>s.value?"open":"closed");n({open:s,dataDisabled:l});const{currentRef:c,currentElement:f}=F();ot({open:s,dataState:r,disabled:u,dataDisabled:l,triggerId:"",currentRef:c,currentElement:f,value:w(()=>e.value)});function g(i){var k;const d=i.target;if(Array.from(((k=t.parentElement.value)==null?void 0:k.querySelectorAll("[data-reka-collection-item]"))??[]).findIndex(T=>T===d)===-1)return null;at(i,f.value,t.parentElement.value,{arrowKeyOptions:t.orientation,dir:t.direction.value,focus:!0})}return(i,d)=>(v(),x(a(et),{"data-orientation":a(t).orientation,"data-disabled":l.value,"data-state":r.value,disabled:u.value,open:s.value,as:e.as,"as-child":e.asChild,"unmount-on-hide":a(t).unmountOnHide.value,onKeydown:ue(g,["up","down","left","right","home","end"])},{default:m(()=>[C(i.$slots,"default",{open:s.value})]),_:3},8,["data-orientation","data-disabled","data-state","disabled","open","as","as-child","unmount-on-hide"]))}}),st=I({inheritAttrs:!1,__name:"CollapsibleContent",props:{forceMount:{type:Boolean},asChild:{type:Boolean},as:{}},emits:["contentFound"],setup(o,{emit:n}){const e=o,t=n,s=we();s.contentId||(s.contentId=Q(void 0,"reka-collapsible-content"));const u=B(),{forwardRef:l,currentElement:r}=F(),c=B(0),f=B(0),g=w(()=>s.open.value),i=B(g.value),d=B();ce(()=>{var p;return[g.value,(p=u.value)==null?void 0:p.present]},async()=>{await Z();const p=r.value;if(!p)return;d.value=d.value||{transitionDuration:p.style.transitionDuration,animationName:p.style.animationName},p.style.transitionDuration="0s",p.style.animationName="none";const k=p.getBoundingClientRect();f.value=k.height,c.value=k.width,i.value||(p.style.transitionDuration=d.value.transitionDuration,p.style.animationName=d.value.animationName)},{immediate:!0});const b=w(()=>i.value&&s.open.value);return ee(()=>{requestAnimationFrame(()=>{i.value=!1})}),Ve(r,"beforematch",p=>{requestAnimationFrame(()=>{s.onOpenToggle(),t("contentFound")})}),(p,k)=>(v(),x(a(de),{ref_key:"presentRef",ref:u,present:p.forceMount||a(s).open.value,"force-mount":!0},{default:m(({present:T})=>{var h;return[_(a(R),D(p.$attrs,{id:a(s).contentId,ref:a(l),"as-child":e.asChild,as:p.as,hidden:T?void 0:a(s).unmountOnHide.value?"":"until-found","data-state":b.value?void 0:a(s).open.value?"open":"closed","data-disabled":(h=a(s).disabled)!=null&&h.value?"":void 0,style:{"--reka-collapsible-content-height":`${f.value}px`,"--reka-collapsible-content-width":`${c.value}px`}}),{default:m(()=>[!a(s).unmountOnHide.value||T?C(p.$slots,"default",{key:0}):E("",!0)]),_:2},1040,["id","as-child","as","hidden","data-state","data-disabled","style"])]}),_:3},8,["present"]))}}),it=I({__name:"AccordionContent",props:{forceMount:{type:Boolean},asChild:{type:Boolean},as:{}},setup(o){const n=o,e=J(),t=ne();return F(),(s,u)=>(v(),x(a(st),{role:"region","as-child":n.asChild,"force-mount":n.forceMount,"aria-labelledby":a(t).triggerId,"data-state":a(t).dataState.value,"data-disabled":a(t).dataDisabled.value,"data-orientation":a(e).orientation,style:{"--reka-accordion-content-width":"var(--reka-collapsible-content-width)","--reka-accordion-content-height":"var(--reka-collapsible-content-height)"},onContentFound:u[0]||(u[0]=l=>a(e).changeModelValue(a(t).value.value))},{default:m(()=>[C(s.$slots,"default")]),_:3},8,["as-child","force-mount","aria-labelledby","data-state","data-disabled","data-orientation"]))}}),lt=I({__name:"AccordionHeader",props:{asChild:{type:Boolean},as:{default:"h3"}},setup(o){const n=o,e=J(),t=ne();return F(),(s,u)=>(v(),x(a(R),{as:n.as,"as-child":n.asChild,"data-orientation":a(e).orientation,"data-state":a(t).dataState.value,"data-disabled":a(t).dataDisabled.value},{default:m(()=>[C(s.$slots,"default")]),_:3},8,["as","as-child","data-orientation","data-state","data-disabled"]))}}),rt=I({__name:"CollapsibleTrigger",props:{asChild:{type:Boolean},as:{default:"button"}},setup(o){const n=o;F();const e=we();return(t,s)=>{var u,l;return v(),x(a(R),{type:t.as==="button"?"button":void 0,as:t.as,"as-child":n.asChild,"aria-controls":a(e).contentId,"aria-expanded":a(e).open.value,"data-state":a(e).open.value?"open":"closed","data-disabled":(u=a(e).disabled)!=null&&u.value?"":void 0,disabled:(l=a(e).disabled)==null?void 0:l.value,onClick:a(e).onOpenToggle},{default:m(()=>[C(t.$slots,"default")]),_:3},8,["type","as","as-child","aria-controls","aria-expanded","data-state","data-disabled","disabled","onClick"])}}}),ut=I({__name:"AccordionTrigger",props:{asChild:{type:Boolean},as:{}},setup(o){const n=o,e=J(),t=ne();t.triggerId||(t.triggerId=Q(void 0,"reka-accordion-trigger"));function s(){const u=e.isSingle.value&&t.open.value&&!e.collapsible;t.disabled.value||u||e.changeModelValue(t.value.value)}return(u,l)=>(v(),x(a(rt),{id:a(t).triggerId,ref:a(t).currentRef,"data-reka-collection-item":"",as:n.as,"as-child":n.asChild,"aria-disabled":a(t).disabled.value||void 0,"aria-expanded":a(t).open.value||!1,"data-disabled":a(t).dataDisabled.value,"data-orientation":a(e).orientation,"data-state":a(t).dataState.value,disabled:a(t).disabled.value,onClick:s},{default:m(()=>[C(u.$slots,"default")]),_:3},8,["id","as","as-child","aria-disabled","aria-expanded","data-disabled","data-orientation","data-state","disabled"]))}}),ct="rovingFocusGroup.onEntryFocus",dt={bubbles:!1,cancelable:!0},ft={ArrowLeft:"prev",ArrowUp:"prev",ArrowRight:"next",ArrowDown:"next",PageUp:"first",Home:"first",PageDown:"last",End:"last"};function pt(o,n){return n!=="rtl"?o:o==="ArrowLeft"?"ArrowRight":o==="ArrowRight"?"ArrowLeft":o}function vt(o,n,e){const t=pt(o.key,e);if(!(n==="vertical"&&["ArrowLeft","ArrowRight"].includes(t))&&!(n==="horizontal"&&["ArrowUp","ArrowDown"].includes(t)))return ft[t]}function Ie(o,n=!1,e){const t=(e==null?void 0:e.activeElement)??document.activeElement;for(const s of o)if(s===t||(s.focus({preventScroll:n}),document.activeElement!==t))return}function mt(o,n){return o.map((e,t)=>o[(n+t)%o.length])}const[gt,bt]=K("RovingFocusGroup"),_t=I({__name:"RovingFocusGroup",props:{orientation:{default:void 0},dir:{},loop:{type:Boolean,default:!1},currentTabStopId:{},defaultCurrentTabStopId:{},preventScrollOnEntryFocus:{type:Boolean,default:!1},asChild:{type:Boolean},as:{}},emits:["entryFocus","update:currentTabStopId"],setup(o,{expose:n,emit:e}){const t=o,s=e,{loop:u,orientation:l,dir:r}=L(t),c=oe(r),f=Y(t,"currentTabStopId",s,{defaultValue:t.defaultCurrentTabStopId,passive:t.currentTabStopId===void 0}),g=B(!1),i=B(!1),d=B(0),{getItems:b,CollectionSlot:p}=fe({isProvider:!0});function k(h){const A=!i.value;if(h.currentTarget&&h.target===h.currentTarget&&A&&!g.value){const S=new CustomEvent(ct,dt);if(h.currentTarget.dispatchEvent(S),s("entryFocus",S),!S.defaultPrevented){const O=b().map(P=>P.ref).filter(P=>P.dataset.disabled!==""),se=O.find(P=>P.getAttribute("data-active")==="true"),Ae=O.find(P=>P.id===f.value),Se=[se,Ae,...O].filter(Boolean);Ie(Se,t.preventScrollOnEntryFocus)}}i.value=!1}function T(){setTimeout(()=>{i.value=!1},1)}return n({getItems:b}),bt({loop:u,dir:c,orientation:l,currentTabStopId:f,onItemFocus:h=>{f.value=h},onItemShiftTab:()=>{g.value=!0},onFocusableItemAdd:()=>{d.value++},onFocusableItemRemove:()=>{d.value--}}),(h,A)=>(v(),x(a(p),null,{default:m(()=>[_(a(R),{tabindex:g.value||d.value===0?-1:0,"data-orientation":a(l),as:h.as,"as-child":h.asChild,dir:a(c),style:{outline:"none"},onMousedown:A[0]||(A[0]=S=>i.value=!0),onMouseup:T,onFocus:k,onBlur:A[1]||(A[1]=S=>g.value=!1)},{default:m(()=>[C(h.$slots,"default")]),_:3},8,["tabindex","data-orientation","as","as-child","dir"])]),_:3}))}}),ht=I({__name:"RovingFocusItem",props:{tabStopId:{},focusable:{type:Boolean,default:!0},active:{type:Boolean,default:!0},allowShiftKey:{type:Boolean},asChild:{type:Boolean},as:{default:"span"}},setup(o){const n=o,e=gt(),t=w(()=>n.tabStopId||Q()),s=w(()=>e.currentTabStopId.value===t.value),{getItems:u,CollectionItem:l}=fe(),{primitiveElement:r,currentElement:c}=Be(),f=w(()=>{var i;return(i=c.value)==null?void 0:i.getRootNode()});ee(()=>{n.focusable&&e.onFocusableItemAdd()}),ze(()=>{n.focusable&&e.onFocusableItemRemove()});function g(i){if(i.key==="Tab"&&i.shiftKey){e.onItemShiftTab();return}if(i.target!==i.currentTarget)return;const d=vt(i,e.orientation.value,e.dir.value);if(d!==void 0){if(i.metaKey||i.ctrlKey||i.altKey||!n.allowShiftKey&&i.shiftKey)return;i.preventDefault();let b=[...u().map(p=>p.ref).filter(p=>p.dataset.disabled!=="")];if(d==="last")b.reverse();else if(d==="prev"||d==="next"){d==="prev"&&b.reverse();const p=b.indexOf(i.currentTarget);b=e.loop.value?mt(b,p+1):b.slice(p+1)}Z(()=>Ie(b,!1,f.value))}}return(i,d)=>(v(),x(a(l),null,{default:m(()=>[_(a(R),{ref_key:"primitiveElement",ref:r,tabindex:s.value?0:-1,"data-orientation":a(e).orientation.value,"data-active":i.active,"data-disabled":i.focusable?void 0:"",as:i.as,"as-child":i.asChild,onMousedown:d[0]||(d[0]=b=>{i.focusable?a(e).onItemFocus(t.value):b.preventDefault()}),onFocus:d[1]||(d[1]=b=>a(e).onItemFocus(t.value)),onKeydown:g},{default:m(()=>[C(i.$slots,"default")]),_:3},8,["tabindex","data-orientation","data-active","data-disabled","as","as-child"])]),_:3}))}}),[W,yt]=K("TabsRoot"),xt=I({__name:"TabsRoot",props:{defaultValue:{},orientation:{default:"horizontal"},dir:{},activationMode:{default:"automatic"},modelValue:{},unmountOnHide:{type:Boolean,default:!0},asChild:{type:Boolean},as:{}},emits:["update:modelValue"],setup(o,{emit:n}){const e=o,t=n,{orientation:s,unmountOnHide:u,dir:l}=L(e),r=oe(l);F();const c=Y(e,"modelValue",t,{defaultValue:e.defaultValue,passive:e.modelValue===void 0}),f=B();return yt({modelValue:c,changeModelValue:g=>{c.value=g},orientation:s,dir:r,unmountOnHide:u,activationMode:e.activationMode,baseId:Q(void 0,"reka-tabs"),tabsList:f}),(g,i)=>(v(),x(a(R),{dir:a(r),"data-orientation":a(s),"as-child":g.asChild,as:g.as},{default:m(()=>[C(g.$slots,"default",{modelValue:a(c)})]),_:3},8,["dir","data-orientation","as-child","as"]))}}),wt=I({__name:"TabsList",props:{loop:{type:Boolean,default:!0},asChild:{type:Boolean},as:{}},setup(o){const n=o,{loop:e}=L(n),{forwardRef:t,currentElement:s}=F(),u=W();return u.tabsList=s,(l,r)=>(v(),x(a(_t),{"as-child":"",orientation:a(u).orientation.value,dir:a(u).dir.value,loop:a(e)},{default:m(()=>[_(a(R),{ref:a(t),role:"tablist","as-child":l.asChild,as:l.as,"aria-orientation":a(u).orientation.value},{default:m(()=>[C(l.$slots,"default")]),_:3},8,["as-child","as","aria-orientation"])]),_:3},8,["orientation","dir","loop"]))}});function $e(o,n){return`${o}-trigger-${n}`}function ke(o,n){return`${o}-content-${n}`}const Ct=I({__name:"TabsContent",props:{value:{},forceMount:{type:Boolean},asChild:{type:Boolean},as:{}},setup(o){const n=o,{forwardRef:e}=F(),t=W(),s=w(()=>$e(t.baseId,n.value)),u=w(()=>ke(t.baseId,n.value)),l=w(()=>n.value===t.modelValue.value),r=B(l.value);return ee(()=>{requestAnimationFrame(()=>{r.value=!1})}),(c,f)=>(v(),x(a(de),{present:c.forceMount||l.value,"force-mount":""},{default:m(({present:g})=>[_(a(R),{id:u.value,ref:a(e),"as-child":c.asChild,as:c.as,role:"tabpanel","data-state":l.value?"active":"inactive","data-orientation":a(t).orientation.value,"aria-labelledby":s.value,hidden:!g,tabindex:"0",style:Fe({animationDuration:r.value?"0s":void 0})},{default:m(()=>[!a(t).unmountOnHide.value||g?C(c.$slots,"default",{key:0}):E("",!0)]),_:2},1032,["id","as-child","as","data-state","data-orientation","aria-labelledby","hidden","style"])]),_:3},8,["present"]))}}),It=I({__name:"TabsTrigger",props:{value:{},disabled:{type:Boolean,default:!1},asChild:{type:Boolean},as:{default:"button"}},setup(o){const n=o,{forwardRef:e}=F(),t=W(),s=w(()=>$e(t.baseId,n.value)),u=w(()=>ke(t.baseId,n.value)),l=w(()=>n.value===t.modelValue.value);return(r,c)=>(v(),x(a(ht),{"as-child":"",focusable:!r.disabled,active:l.value},{default:m(()=>[_(a(R),{id:s.value,ref:a(e),role:"tab",type:r.as==="button"?"button":void 0,as:r.as,"as-child":r.asChild,"aria-selected":l.value?"true":"false","aria-controls":u.value,"data-state":l.value?"active":"inactive",disabled:r.disabled,"data-disabled":r.disabled?"":void 0,"data-orientation":a(t).orientation.value,onMousedown:c[0]||(c[0]=Re(f=>{!r.disabled&&f.ctrlKey===!1?a(t).changeModelValue(r.value):f.preventDefault()},["left"])),onKeydown:c[1]||(c[1]=ue(f=>a(t).changeModelValue(r.value),["enter","space"])),onFocus:c[2]||(c[2]=()=>{const f=a(t).activationMode!=="manual";!l.value&&!r.disabled&&f&&a(t).changeModelValue(r.value)})},{default:m(()=>[C(r.$slots,"default")]),_:3},8,["id","type","as","as-child","aria-selected","aria-controls","data-state","disabled","data-disabled","data-orientation"])]),_:3},8,["focusable","active"]))}}),$t=I({__name:"TabsIndicator",props:{asChild:{type:Boolean},as:{}},setup(o){const n=o,e=W();F();const t=B(),s=B({size:null,position:null});ce(()=>[e.modelValue.value,e==null?void 0:e.dir.value],async()=>{await Z(),u()},{immediate:!0}),Oe([e.tabsList,t],u);function u(){var l;t.value=(l=e.tabsList.value)==null?void 0:l.querySelector('[role="tab"][data-state="active"]'),t.value&&(e.orientation.value==="horizontal"?s.value={size:t.value.offsetWidth,position:t.value.offsetLeft}:s.value={size:t.value.offsetHeight,position:t.value.offsetTop})}return(l,r)=>typeof s.value.size=="number"?(v(),x(a(R),D({key:0},n,{style:{"--reka-tabs-indicator-size":`${s.value.size}px`,"--reka-tabs-indicator-position":`${s.value.position}px`}}),{default:m(()=>[C(l.$slots,"default")]),_:3},16,["style"])):E("",!0)}}),kt={class:"z-10 flex items-center justify-center"},At={class:"font-mona relative flex items-center justify-center gap-2 bg-gradient-to-b from-white/25 to-white bg-clip-text text-lg font-medium text-transparent transition-all duration-200"},St=I({__name:"ProfilePicture",setup(o){const{profile:n}=X();return(e,t)=>{const s=Ee,u=pe;return v(),V("div",kt,[_(u,{rounded:""},{default:m(()=>[y("div",At,[_(s,{width:"96",src:a(n).picture,class:"size-24 rounded-full border-2 border-neutral-800/30 object-cover",alt:"Hugo Richard Profile Picture","aria-label":"Hugo Richard Profile Picture"},null,8,["src"])])]),_:1})])}}}),Tt=Object.assign(St,{__name:"HomeProfilePicture"}),Vt={class:"relative flex size-3"},Bt=I({__name:"Availability",props:{background:{type:Boolean,default:!1}},setup(o){const n=X().global,e=w(()=>[{status:"available",message:"Available for hire",color:"bg-green-600/80",bgColor:"bg-green-500/80",textColor:"text-green-500/80"},{status:"unavailable",message:"Not available for hire",color:"bg-red-500",bgColor:"bg-red-400",textColor:"text-red-400"}][n.available?0:1]);return(t,s)=>(v(),V("div",{class:$(["flex items-center rounded-full",{"border border-white/10 bg-zinc-900/80 px-5 py-2 backdrop-blur-3xl":o.background}])},[y("span",Vt,[y("span",{class:$(["absolute inline-flex size-full animate-ping rounded-full opacity-75",a(e).color])},null,2),y("span",{class:$(["relative inline-flex size-3 scale-90 rounded-full",a(e).bgColor])},null,2)]),y("span",{class:$(["ml-2 text-sm font-medium",a(e).textColor])},z(t.$t("global."+a(e).status)),3)],2))}}),zt=Object.assign(Bt,{__name:"SettingsAvailability"}),Ft={class:"my-7 flex items-center justify-center gap-6 sm:gap-10"},Rt=I({__name:"Social",setup(o){const n=[{regex:/github\.com/,name:"GitHub",icon:"custom:github"},{regex:/twitter\.com/,name:"X / Twitter",icon:"custom:x"},{regex:/linkedin\.com/,name:"LinkedIn",icon:"custom:linkedin"},{regex:/instagram\.com/,name:"Instagram",icon:"custom:instagram"},{regex:/spotify\.com/,name:"Spotify",icon:"custom:spotify"}],{socials:e}=X(),t=Object.values(e).map(s=>{const u=n.find(c=>c.regex.test(s));if(!u)throw new Error(`No social media found for link: ${s}`);const{name:l,icon:r}=u;return{name:l,link:s,icon:r}});return(s,u)=>{const l=j,r=te;return v(),V("div",Ft,[(v(!0),V(M,null,H(a(t),c=>(v(),x(r,{key:c.name,to:c.link,target:"_blank",class:"flex items-center justify-center","aria-label":"Go to "+c.name+" profile"},{default:m(()=>[_(l,{name:c.icon,class:"size-6 text-muted transition-all duration-300 hover:text-neutral-300",alt:c.name+" logo","aria-label":c.name+" logo"},null,8,["name","alt","aria-label"])]),_:2},1032,["to","aria-label"]))),128))])}}}),Ot=Object.assign(Rt,{__name:"HomeSocial"}),Et={class:"flex flex-col items-center justify-center gap-4 sm:gap-2"},Pt={class:"flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-2"},Dt={class:"mt-4 flex flex-col items-center gap-1"},Mt=I({__name:"CTA",setup(o){const{t:n}=ae();return(e,t)=>{const s=j,u=he,l=pe,r=je,c=Ne,f=te;return v(),V("div",Et,[y("div",Pt,[_(r,{text:e.$t("global.email"),shortcuts:["⌘","O"]},{default:m(()=>[_(l,null,{default:m(()=>[_(u,{class:"font-mona relative flex items-center justify-center gap-2 bg-gradient-to-b from-white/25 to-white bg-clip-text text-lg font-medium text-transparent transition-all duration-200",to:"/contact"},{default:m(()=>[N(z(a(n)("global.contact"))+" ",1),_(s,{name:"heroicons-envelope",class:"size-5 text-white/80"})]),_:1})]),_:1})]),_:1},8,["text"]),_(c)]),y("div",Dt,[_(f,{href:"https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FHugoRCD%2Fcanvas&env=NUXT_PRIVATE_RESEND_API_KEY,NUXT_PUBLIC_SITE_URL&envDescription=You%20will%20require%20an%20API%20key%20for%20Resend%20and%20Nuxt%20Studio%2C%20but%20it%20is%20not%20essential%20for%20the%20portfolio%20to%20work.%20Simply%20add%20%22test%2C%22%20for%20example%2C%20and%20edit%20the%20variable%20later.&project-name=canvas-portfolio&repository-name=canvas-portfolio&demo-title=Canvas&demo-url=canvas.hrcd.fr&demo-image=https%3A%2F%2Fcanvas.hrcd.fr%2Fog.png"},{default:m(()=>t[0]||(t[0]=[y("img",{src:"https://vercel.com/button",alt:"Deploy with Vercel"},null,-1)])),_:1})])])}}}),Ht=Object.assign(Mt,{__name:"HomeCTA"}),jt={class:"flex w-full flex-col gap-6"},Nt={class:"font-newsreader italic text-white-shadow text-xl"},Lt={class:"flex w-full flex-col gap-4"},Kt={class:"whitespace-nowrap font-medium"},Ut={class:"whitespace-nowrap"},qt={class:"font-newsreader italic text-white-shadow cursor-pointer"},Gt=I({__name:"Projects",async setup(o){let n,e;const{locale:t}=ae(),s=Pe(),{data:u}=([n,e]=ve(async()=>ye("projects",async()=>{const l="projects_"+t.value;return await xe(l).all()},{watch:[t]})),n=await n,e(),n);return(l,r)=>{var g;const c=te,f=he;return v(),V("div",jt,[y("h3",Nt,z(l.$t("navigation.works")),1),y("div",Lt,[(v(!0),V(M,null,H((g=a(u))==null?void 0:g.filter(i=>i.featured),i=>(v(),x(c,{key:i.name,role:"link",class:"flex cursor-pointer items-center gap-2 rounded-lg px-4 py-2 hover:bg-neutral-900",to:i.release==="soon"?a(s)("/"):i.link,"aria-label":"go to "+i.name+" project website",target:i.release==="soon"?"_self":"_blank"},{default:m(()=>[y("span",Kt,z(i.name),1),r[0]||(r[0]=y("div",{class:"mx-2 h-[0.1px] w-full bg-muted"},null,-1)),y("span",Ut,z(i.release==="soon"?l.$t("global.soon")+"...":i.release),1)]),_:2},1032,["to","aria-label","target"]))),128))]),_(f,{to:"/works"},{default:m(()=>[y("span",qt,z(l.$t("global.see_more")),1)]),_:1})])}}}),Yt=Object.assign(Gt,{__name:"HomeProjects"}),Xt={slots:{root:"w-full",item:"border-b border-[var(--ui-border)] last:border-b-0",header:"flex",trigger:"group flex-1 flex items-center gap-1.5 font-medium text-sm py-3.5 focus-visible:outline-[var(--ui-primary)] min-w-0",content:"data-[state=open]:animate-[accordion-down_200ms_ease-out] data-[state=closed]:animate-[accordion-up_200ms_ease-out] overflow-hidden focus:outline-none",body:"text-sm pb-3.5",leadingIcon:"shrink-0 size-5",trailingIcon:"shrink-0 size-5 ms-auto group-data-[state=open]:rotate-180 transition-transform duration-200",label:"text-start break-words"},variants:{disabled:{true:{trigger:"cursor-not-allowed opacity-75"}}}},Qt=_e;var le;const Jt=q({extend:q(Xt),...((le=Qt.ui)==null?void 0:le.accordion)||{}}),Wt=I({__name:"Accordion",props:{as:{},items:{},trailingIcon:{},labelKey:{default:"label"},class:{},ui:{},collapsible:{type:Boolean,default:!0},defaultValue:{},modelValue:{},type:{default:"single"},disabled:{type:Boolean},unmountOnHide:{type:Boolean,default:!0}},emits:["update:modelValue"],setup(o,{emit:n}){const e=o,t=n,s=me(),u=X(),l=ge(be(e,"as","collapsible","defaultValue","disabled","modelValue","type","unmountOnHide"),t),r=w(()=>Jt({disabled:e.disabled}));return(c,f)=>{var g;return v(),x(a(We),D(a(l),{class:r.value.root({class:[e.class,(g=e.ui)==null?void 0:g.root]})}),{default:m(()=>[(v(!0),V(M,null,H(c.items,(i,d)=>{var b;return v(),x(a(nt),{key:d,value:i.value||String(d),disabled:i.disabled,class:$(r.value.item({class:(b=e.ui)==null?void 0:b.item}))},{default:m(({open:p})=>{var k,T;return[_(a(lt),{class:$(r.value.header({class:(k=e.ui)==null?void 0:k.header}))},{default:m(()=>{var h;return[_(a(ut),{class:$(r.value.trigger({class:(h=e.ui)==null?void 0:h.trigger,disabled:i.disabled}))},{default:m(()=>{var A;return[C(c.$slots,"leading",{item:i,index:d,open:p},()=>{var S;return[i.icon?(v(),x(j,{key:0,name:i.icon,class:$(r.value.leadingIcon({class:(S=e.ui)==null?void 0:S.leadingIcon}))},null,8,["name","class"])):E("",!0)]}),a(G)(i,e.labelKey)||s.default?(v(),V("span",{key:0,class:$(r.value.label({class:(A=e.ui)==null?void 0:A.label}))},[C(c.$slots,"default",{item:i,index:d,open:p},()=>[N(z(a(G)(i,e.labelKey)),1)])],2)):E("",!0),C(c.$slots,"trailing",{item:i,index:d,open:p},()=>{var S;return[_(j,{name:i.trailingIcon||c.trailingIcon||a(u).ui.icons.chevronDown,class:$(r.value.trailingIcon({class:(S=e.ui)==null?void 0:S.trailingIcon}))},null,8,["name","class"])]})]}),_:2},1032,["class"])]}),_:2},1032,["class"]),i.content||s.content||i.slot&&s[i.slot]||s.body||i.slot&&s[`${i.slot}-body`]?(v(),x(a(it),{key:0,class:$(r.value.content({class:(T=e.ui)==null?void 0:T.content}))},{default:m(()=>[C(c.$slots,i.slot||"content",{item:i,index:d,open:p},()=>{var h;return[y("div",{class:$(r.value.body({class:(h=e.ui)==null?void 0:h.body}))},[C(c.$slots,i.slot?`${i.slot}-body`:"body",{item:i,index:d,open:p},()=>[N(z(i.content),1)])],2)]})]),_:2},1032,["class"])):E("",!0)]}),_:2},1032,["value","disabled","class"])}),128))]),_:3},16,["class"])}}}),Zt=Object.assign(Wt,{__name:"UAccordion"}),ea={slots:{root:"flex items-center gap-2",list:"relative flex p-1 group",indicator:"absolute transition-[translate,width] duration-200",trigger:["group relative inline-flex items-center shrink-0 min-w-0 data-[state=inactive]:text-[var(--ui-text-muted)] hover:data-[state=inactive]:not-disabled:text-[var(--ui-text)] font-medium rounded-[calc(var(--ui-radius)*1.5)] disabled:cursor-not-allowed disabled:opacity-75 focus:outline-hidden","transition-colors"],content:"focus:outline-none w-full",leadingIcon:"shrink-0",leadingAvatar:"shrink-0",leadingAvatarSize:"",label:"truncate"},variants:{color:{primary:"",secondary:"",success:"",info:"",warning:"",error:"",neutral:""},variant:{pill:{list:"bg-[var(--ui-bg-elevated)] rounded-[calc(var(--ui-radius)*2)]",trigger:"flex-1 w-full",indicator:"rounded-[calc(var(--ui-radius)*1.5)] shadow-xs"},link:{list:"border-[var(--ui-border)]",indicator:"rounded-full"}},orientation:{horizontal:{root:"flex-col",list:"w-full",indicator:"left-0 w-[var(--reka-tabs-indicator-size)] translate-x-[var(--reka-tabs-indicator-position)]",trigger:"justify-center"},vertical:{list:"flex-col",indicator:"top-0 h-[var(--reka-tabs-indicator-size)] translate-y-[var(--reka-tabs-indicator-position)]"}},size:{xs:{trigger:"px-2 py-1 text-xs gap-1",leadingIcon:"size-4",leadingAvatarSize:"3xs"},sm:{trigger:"px-2.5 py-1.5 text-xs gap-1.5",leadingIcon:"size-4",leadingAvatarSize:"3xs"},md:{trigger:"px-3 py-1.5 text-sm gap-1.5",leadingIcon:"size-5",leadingAvatarSize:"2xs"},lg:{trigger:"px-3 py-2 text-sm gap-2",leadingIcon:"size-5",leadingAvatarSize:"2xs"},xl:{trigger:"px-3 py-2 text-base gap-2",leadingIcon:"size-6",leadingAvatarSize:"xs"}}},compoundVariants:[{orientation:"horizontal",variant:"pill",class:{indicator:"inset-y-1"}},{orientation:"horizontal",variant:"link",class:{list:"border-b -mb-px",indicator:"-bottom-px h-px"}},{orientation:"vertical",variant:"pill",class:{indicator:"inset-x-1",list:"items-center"}},{orientation:"vertical",variant:"link",class:{list:"border-s -ms-px",indicator:"-start-px w-px"}},{color:"primary",variant:"pill",class:{indicator:"bg-[var(--ui-primary)]",trigger:"data-[state=active]:text-[var(--ui-bg)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--ui-primary)]"}},{color:"secondary",variant:"pill",class:{indicator:"bg-[var(--ui-secondary)]",trigger:"data-[state=active]:text-[var(--ui-bg)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--ui-secondary)]"}},{color:"success",variant:"pill",class:{indicator:"bg-[var(--ui-success)]",trigger:"data-[state=active]:text-[var(--ui-bg)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--ui-success)]"}},{color:"info",variant:"pill",class:{indicator:"bg-[var(--ui-info)]",trigger:"data-[state=active]:text-[var(--ui-bg)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--ui-info)]"}},{color:"warning",variant:"pill",class:{indicator:"bg-[var(--ui-warning)]",trigger:"data-[state=active]:text-[var(--ui-bg)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--ui-warning)]"}},{color:"error",variant:"pill",class:{indicator:"bg-[var(--ui-error)]",trigger:"data-[state=active]:text-[var(--ui-bg)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--ui-error)]"}},{color:"neutral",variant:"pill",class:{indicator:"bg-[var(--ui-bg-inverted)]",trigger:"data-[state=active]:text-[var(--ui-bg)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--ui-border-inverted)]"}},{color:"primary",variant:"link",class:{indicator:"bg-[var(--ui-primary)]",trigger:"data-[state=active]:text-[var(--ui-primary)] focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[var(--ui-primary)]"}},{color:"secondary",variant:"link",class:{indicator:"bg-[var(--ui-secondary)]",trigger:"data-[state=active]:text-[var(--ui-secondary)] focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[var(--ui-secondary)]"}},{color:"success",variant:"link",class:{indicator:"bg-[var(--ui-success)]",trigger:"data-[state=active]:text-[var(--ui-success)] focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[var(--ui-success)]"}},{color:"info",variant:"link",class:{indicator:"bg-[var(--ui-info)]",trigger:"data-[state=active]:text-[var(--ui-info)] focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[var(--ui-info)]"}},{color:"warning",variant:"link",class:{indicator:"bg-[var(--ui-warning)]",trigger:"data-[state=active]:text-[var(--ui-warning)] focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[var(--ui-warning)]"}},{color:"error",variant:"link",class:{indicator:"bg-[var(--ui-error)]",trigger:"data-[state=active]:text-[var(--ui-error)] focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[var(--ui-error)]"}},{color:"neutral",variant:"link",class:{indicator:"bg-[var(--ui-bg-inverted)]",trigger:"data-[state=active]:text-[var(--ui-text-highlighted)] focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[var(--ui-border-inverted)]"}}],defaultVariants:{color:"primary",variant:"pill",size:"md"}},ta=_e;var re;const aa=q({extend:q(ea),...((re=ta.ui)==null?void 0:re.tabs)||{}}),oa=I({__name:"Tabs",props:{as:{},items:{},color:{},variant:{},size:{},orientation:{default:"horizontal"},content:{type:Boolean,default:!0},labelKey:{default:"label"},class:{},ui:{},defaultValue:{default:"0"},modelValue:{},activationMode:{},unmountOnHide:{type:Boolean,default:!0}},emits:["update:modelValue"],setup(o,{emit:n}){const e=o,t=n,s=me(),u=ge(be(e,"as","modelValue","defaultValue","orientation","activationMode","unmountOnHide"),t),l=w(()=>aa({color:e.color,variant:e.variant,size:e.size,orientation:e.orientation}));return(r,c)=>{var f;return v(),x(a(xt),D(a(u),{class:l.value.root({class:[e.class,(f=e.ui)==null?void 0:f.root]})}),{default:m(()=>{var g;return[_(a(wt),{class:$(l.value.list({class:(g=e.ui)==null?void 0:g.list}))},{default:m(()=>{var i;return[_(a($t),{class:$(l.value.indicator({class:(i=e.ui)==null?void 0:i.indicator}))},null,8,["class"]),(v(!0),V(M,null,H(r.items,(d,b)=>{var p;return v(),x(a(It),{key:b,value:d.value||String(b),disabled:d.disabled,class:$(l.value.trigger({class:(p=e.ui)==null?void 0:p.trigger}))},{default:m(()=>{var k;return[C(r.$slots,"leading",{item:d,index:b},()=>{var T,h,A;return[d.icon?(v(),x(j,{key:0,name:d.icon,class:$(l.value.leadingIcon({class:(T=e.ui)==null?void 0:T.leadingIcon}))},null,8,["name","class"])):d.avatar?(v(),x(De,D({key:1,size:((h=e.ui)==null?void 0:h.leadingAvatarSize)||l.value.leadingAvatarSize(),ref_for:!0},d.avatar,{class:l.value.leadingAvatar({class:(A=e.ui)==null?void 0:A.leadingAvatar})}),null,16,["size","class"])):E("",!0)]}),a(G)(d,e.labelKey)||s.default?(v(),V("span",{key:0,class:$(l.value.label({class:(k=e.ui)==null?void 0:k.label}))},[C(r.$slots,"default",{item:d,index:b},()=>[N(z(a(G)(d,e.labelKey)),1)])],2)):E("",!0),C(r.$slots,"trailing",{item:d,index:b})]}),_:2},1032,["value","disabled","class"])}),128))]}),_:3},8,["class"]),r.content?(v(!0),V(M,{key:0},H(r.items,(i,d)=>{var b;return v(),x(a(Ct),{key:d,value:i.value||String(d),class:$(l.value.content({class:(b=e.ui)==null?void 0:b.content}))},{default:m(()=>[C(r.$slots,i.slot||"content",{item:i,index:d},()=>[N(z(i.content),1)])]),_:2},1032,["value","class"])}),128)):E("",!0)]}),_:3},16,["class"])}}}),na=Object.assign(oa,{__name:"UTabs"}),sa={class:"flex flex-col items-center justify-center space-y-8 w-full sm:px-20 md:px-30"},ia={class:"flex flex-col items-center justify-center gap-2"},la={class:"font-newsreader italic text-white-shadow text-4xl"},ra={class:"text-center text-sm font-medium text-muted"},ua=I({__name:"Faq",async setup(o){let n,e;const t=Me(),{locale:s}=ae(),u=w(()=>He(String(t.params.slug))),{data:l}=([n,e]=ve(async()=>ye("faq-"+u.value,async()=>{const f="faq_"+s.value;return await xe(f).first()},{watch:[s]})),n=await n,e(),n),r=w(()=>{var f;return(f=l.value)==null?void 0:f.faqQuestions.map(g=>({label:g.title,key:g.title.toLowerCase(),questions:g.questions}))}),c={root:"flex items-center gap-4 w-full",list:"relative flex bg-transparent dark:bg-transparent gap-2",indicator:"absolute top-[4px] duration-200 ease-out focus:outline-none rounded-full bg-white/10 dark:bg-neutral-900",trigger:["relative inline-flex items-center justify-center flex-shrink-0 focus:outline-none transition-colors duration-200 ease-out border-white/10 border-2","px-3 py-2 font-medium rounded-full","hover:bg-neutral-900/80","data-[state=active]:text-neutral-900 dark:data-[state=active]:text-white","data-[state=inactive]:text-neutral-500 dark:data-[state=inactive]:text-neutral-400"],label:"truncate"};return(f,g)=>{const i=Zt,d=na;return v(),V("div",sa,[y("div",ia,[y("h3",la,z(a(l).title),1),y("p",ra,z(a(l).subtitle),1)]),_(d,{items:a(r),orientation:"horizontal",ui:c},{content:m(({item:b})=>[_(i,{"trailing-icon":"lucide:plus",items:b.questions,ui:{item:"mb-2 group px-4 transform-gpu rounded-xl border border-white/10 bg-white/5 transition duration-500 will-change-transform hover:bg-white/[0.075]",trailingIcon:"group-data-[state=closed]:rotate-0 group-data-[state=open]:rotate-135"}},null,8,["items"])]),_:1},8,["items"])])}}}),ca=Object.assign(ua,{__name:"HomeFaq"}),da={},fa={class:"relative pt-12"},pa={class:"relative mx-auto flex max-w-7xl flex-col justify-center gap-4 px-4 py-8 sm:px-6 lg:px-8 lg:py-16"},va={class:"z-20 flex flex-col items-center justify-center"},ma={class:"font-geist",style:{"--stagger":"1","--delay":"10ms"},"data-animate":""},ga={class:"mx-auto font-medium text-center text-pretty bg-gradient-to-b from-white/90 to-white/30 bg-clip-text text-3xl text-transparent lg:max-w-3xl lg:text-4xl"},ba={class:"mx-auto mt-4 max-w-xl text-center text-lg antialiased text-white/60"},_a={style:{"--stagger":"5"},"data-animate":"",class:"mt-12 flex w-full max-w-3xl flex-col gap-4 lg:mt-16"};function ha(o,n){const e=Tt,t=zt,s=Ot,u=Ht,l=Yt,r=Le,c=ca;return v(),V("section",fa,[n[1]||(n[1]=y("div",{class:"pointer-events-none absolute inset-0 bg-center bg-grid-white/10 bg-grid-16 [mask-image:radial-gradient(white,transparent_85%)]"},null,-1)),y("div",pa,[n[0]||(n[0]=y("div",{class:"absolute -top-8 left-1/2 size-72 -translate-x-1/2 rounded-full bg-white/25 blur-[120px] lg:-top-8 lg:size-[32rem] lg:blur-[200px]"},null,-1)),_(e),y("div",va,[y("div",ma,[y("h1",ga,[ie(o.$slots,"hero_title",{mdcUnwrap:"p"})]),y("h2",ba,[ie(o.$slots,"hero_subtitle",{mdcUnwrap:"p"})])]),_(t,{background:"",class:"mt-2",style:{"--stagger":"2"},"data-animate":""}),_(s,{style:{"--stagger":"3"},"data-animate":""}),_(u,{style:{"--stagger":"4"},"data-animate":""}),y("div",_a,[_(l)]),_(r,{class:"my-9"}),_(c,{style:{"--stagger":"6"},"data-animate":""})])])])}const Ta=Object.assign(Ke(da,[["render",ha]]),{__name:"Home"});export{Ta as default};
