var t=Object.assign;import{u as e}from"./useTimeout.027d8171.js";import{r as s,B as i}from"./DragVerify.cf32aede.js";import{h as r}from"./domUtils.4d4b190d.js";import{d as a,r as o,b as n,u as m,a0 as d,s as g,k as c,f as u,n as l,y as p,a9 as h}from"./index.50b828bd.js";import"./useExpose.b6f197c5.js";import"./CheckOutlined.24d7da0d.js";import"./DoubleRightOutlined.811f0212.js";var f=a({name:"ImgRotateDargVerify",inheritAttrs:!1,props:s,emits:["success","change","update:value"],setup(s,{emit:a,attrs:f}){const T=o(null),v=n({showTip:!1,isPassing:!1,imgStyle:{},randomRotate:0,currentRotate:0,toOrigin:!1,startTime:0,endTime:0,draged:!1}),{t:y}=m();d((()=>v.isPassing),(t=>{if(t){const{startTime:e,endTime:s}=v;a("success",{isPassing:t,time:((s-e)/1e3).toFixed(1)}),a("change",t),a("update:value",t)}}));const w=g((()=>{const{imgWrapStyle:e,imgWidth:i}=s;return t({width:`${i}px`,height:`${i}px`},e)})),D=g((()=>{const{minDegree:t,maxDegree:e}=s;return t===e?Math.floor(1+1*Math.random())/10+1:1}));function x(){v.startTime=(new Date).getTime()}function b(t){v.draged=!0;const{imgWidth:e,height:i,maxDegree:a}=s,{moveX:o}=t,n=Math.ceil(o/(e-parseInt(i))*a*u(D));v.currentRotate=n,v.imgStyle=r("transform",`rotateZ(${v.randomRotate-n}deg)`)}function R(){const{minDegree:t,maxDegree:e}=s,i=Math.floor(t+Math.random()*(e-t));v.randomRotate=i,v.imgStyle=r("transform",`rotateZ(${i}deg)`)}function j(){const{randomRotate:t,currentRotate:i}=v,{diffDegree:a}=s;Math.abs(t-i)>=(a||20)?(v.imgStyle=r("transform",`rotateZ(${t}deg)`),v.toOrigin=!0,e((()=>{v.toOrigin=!1,v.showTip=!0}),300)):(v.isPassing=!0,v.endTime=(new Date).getTime()),v.showTip=!0}function P(){v.showTip=!1;const t=u(T);t&&(v.isPassing=!1,t.resume(),R())}const S=h();return S&&(S.resume=P),()=>{const{src:e}=s,{toOrigin:r,isPassing:a,startTime:o,endTime:n}=v,m=[];r&&m.push("to-origin");const d=(n-o)/1e3;return c("div",{class:"ir-dv"},[c("div",{class:"ir-dv-img__wrap",style:u(w)},[c("img",{src:e,onLoad:R,width:parseInt(s.width),class:m,style:v.imgStyle,onClick:()=>{P()}},null),v.showTip&&c("span",{class:["ir-dv-img__tip",v.isPassing?"success":"error"]},[v.isPassing?y("component.verify.time",{time:d.toFixed(1)}):y("component.verify.error")]),!v.showTip&&!v.draged&&c("span",{class:["ir-dv-img__tip","normal"]},[l("t('redoTip')")])]),c(i,p({class:"ir-dv-drag__bar",onMove:b,onEnd:j,onStart:x,ref:T},t(t({},f),s),{value:a,isSlot:!0}),null)])}}});export default f;