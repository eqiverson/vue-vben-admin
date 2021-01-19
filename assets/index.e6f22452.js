import{d as e,bQ as r,i,o,j as s,w as t,k as a,n}from"./index.50b828bd.js";import"./index.f4c035d6.js";import{u as d}from"./index.825f9e39.js";import p from"./Drawer1.11a22d5d.js";import m from"./Drawer2.fc426c93.js";import c from"./Drawer3.76d97073.js";import w from"./Drawer4.fba2c5c0.js";import l from"./Drawer5.56f3448e.js";import{_ as j}from"./index.4486a83c.js";import"./index.6f7c662f.js";import"./index.ea618bdb.js";import"./index.3550ea99.js";import"./domUtils.4d4b190d.js";import"./RightOutlined.238a31d2.js";import"./index.8d91dadc.js";import"./useTimeout.027d8171.js";import"./useScrollTo.3be61fce.js";import"./animation.64c13706.js";import"./useAttrs.cfd03cd2.js";import"./index.d8babbed.js";import"./index.38c8e961.js";import"./index.fdcc7c21.js";import"./index.47fbc714.js";import"./index.925fe361.js";import"./index.eae08916.js";import"./index.61099513.js";import"./index.9284d4e4.js";import"./uuid.467c825e.js";import"./index.d469528e.js";import"./index.56b9f6b2.js";import"./useWindowSizeFn.48b953f5.js";import"./FullscreenOutlined.aede640d.js";import"./index.a45b2b74.js";import"./index.443a48d5.js";import"./index.673364b0.js";import"./index.643da10c.js";import"./download.bf43035d.js";import"./useForm.192c15e4.js";import"./index.b0611c31.js";import"./index.9fbd6c39.js";import"./usePageContext.a9759aff.js";var f=e({components:{Alert:r,PageWrapper:j,Drawer1:p,Drawer2:m,Drawer3:c,Drawer4:w,Drawer5:l},setup(){const[e,{openDrawer:r,setDrawerProps:i}]=d(),[o,{openDrawer:s}]=d(),[t,{openDrawer:a}]=d(),[n,{openDrawer:p}]=d(),[m,{openDrawer:c}]=d();return{register1:e,openDrawer1:r,register2:o,openDrawer2:s,register3:t,openDrawer3:a,register4:n,register5:m,openDrawer5:c,send:function(){p(!0,{data:"content",info:"Info"})},openDrawerLoading:function(){r(),i({loading:!0}),setTimeout((()=>{i({loading:!1})}),2e3)}}}});const D=n("打开Drawer"),u=n("打开Drawer"),g=n("打开Drawer"),x=n("打开Drawer并传递数据"),b=n("打开详情Drawer");f.render=function(e,r,n,d,p,m){const c=i("Alert"),w=i("a-button"),l=i("Drawer1"),j=i("Drawer2"),f=i("Drawer3"),y=i("Drawer4"),R=i("Drawer5"),k=i("PageWrapper");return o(),s(k,{title:"抽屉组件使用示例"},{default:t((()=>[a(c,{message:"使用 useDrawer 进行抽屉操作","show-icon":""}),a(w,{type:"primary",class:"my-4",onClick:e.openDrawerLoading},{default:t((()=>[D])),_:1},8,["onClick"]),a(c,{message:"内外同时控制显示隐藏","show-icon":""}),a(w,{type:"primary",class:"my-4",onClick:r[1]||(r[1]=r=>e.openDrawer2(!0))},{default:t((()=>[u])),_:1}),a(c,{message:"自适应高度/显示footer","show-icon":""}),a(w,{type:"primary",class:"my-4",onClick:r[2]||(r[2]=r=>e.openDrawer3(!0))},{default:t((()=>[g])),_:1}),a(c,{message:"内外数据交互,外部通过 transferModalData 发送，内部通过 receiveDrawerDataRef 接收。该数据具有响应式","show-icon":""}),a(w,{type:"primary",class:"my-4",onClick:e.send},{default:t((()=>[x])),_:1},8,["onClick"]),a(c,{message:"详情页模式","show-icon":""}),a(w,{type:"primary",class:"my-4",onClick:r[3]||(r[3]=r=>e.openDrawer5(!0))},{default:t((()=>[b])),_:1}),a(l,{onRegister:e.register1},null,8,["onRegister"]),a(j,{onRegister:e.register2},null,8,["onRegister"]),a(f,{onRegister:e.register3},null,8,["onRegister"]),a(y,{onRegister:e.register4},null,8,["onRegister"]),a(R,{onRegister:e.register5},null,8,["onRegister"])])),_:1})};export default f;