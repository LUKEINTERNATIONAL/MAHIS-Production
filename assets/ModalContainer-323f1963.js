import{d as m,I as p,a as c,_ as u,r as i,w as _,b as f,c as v,o as l,e as d,f as M,g as C}from"./index-3974a2e4.js";const D=m({components:{IonModal:p,ZebraModal:c(()=>u(()=>import("./ZebraPrinterImage-a915ffb4.js"),["./ZebraPrinterImage-a915ffb4.js","./index-3974a2e4.js","./index-5e72f50a.css","./ZebraPrinterImage-2c18ad09.css"],import.meta.url))},emits:["modalDismissed"],props:{modalName:{type:String}},setup(e,{emit:n}){const o=i(!1),s=i("");function t(){o.value=!1,n("modalDismissed")}return _(e,({modalName:a})=>{a?(s.value=a,o.value=!0):o.value=!1},{deep:!0}),{dismissModal:t,modalIsOpen:o,activeModal:s}}});function I(e,n,o,s,t,a){const r=v("ion-modal");return l(),d(r,{"is-open":e.modalIsOpen},{default:M(()=>[(l(),d(C(e.activeModal),{onOnDismissModal:e.dismissModal},null,40,["onOnDismissModal"]))]),_:1},8,["is-open"])}const $=f(D,[["render",I]]);export{$ as default};