import{c1 as e,c as i,d as s,bQ as o,h as a,i as r,o as t,j as d,w as n,k as p}from"./index.50b828bd.js";import"./index.f4c035d6.js";import{g as m,_ as c}from"./index.d8babbed.js";import{_ as l}from"./index.4486a83c.js";import{u as j}from"./useForm.192c15e4.js";import"./index.38c8e961.js";import"./index.fdcc7c21.js";import"./index.47fbc714.js";import"./index.925fe361.js";import"./index.eae08916.js";import"./index.61099513.js";import"./index.9284d4e4.js";import"./useAttrs.cfd03cd2.js";import"./index.8d91dadc.js";import"./uuid.467c825e.js";import"./index.d469528e.js";import"./index.56b9f6b2.js";import"./useTimeout.027d8171.js";import"./useWindowSizeFn.48b953f5.js";import"./index.ea618bdb.js";import"./index.3550ea99.js";import"./domUtils.4d4b190d.js";import"./RightOutlined.238a31d2.js";import"./useScrollTo.3be61fce.js";import"./animation.64c13706.js";import"./FullscreenOutlined.aede640d.js";import"./index.a45b2b74.js";import"./index.443a48d5.js";import"./index.673364b0.js";import"./index.643da10c.js";import"./download.bf43035d.js";import"./index.b0611c31.js";import"./index.9fbd6c39.js";import"./usePageContext.a9759aff.js";const{uploadUrl:u=""}=i();function x(i,s){return e.uploadFile({url:u,onUploadProgress:s},i)}const f=[{field:"field1",component:"Upload",label:"字段1",colProps:{span:8},rules:[{required:!0,message:"请选择上传文件"}],componentProps:{api:x}}];var b=s({components:{BasicUpload:m,BasicForm:c,PageWrapper:l,[o.name]:o},setup(){const{createMessage:e}=a(),[i]=j({labelWidth:120,schemas:f,actionColOptions:{span:16}});return{handleChange:i=>{e.info(`已上传文件${JSON.stringify(i)}`)},uploadApi:x,register:i}}});b.render=function(e,i,s,o,a,m){const c=r("a-alert"),l=r("BasicUpload"),j=r("BasicForm"),u=r("PageWrapper");return t(),d(u,{title:"上传组件示例"},{default:n((()=>[p(c,{message:"基础示例",class:"my-5"}),p(l,{maxSize:20,maxNumber:10,onChange:e.handleChange,api:e.uploadApi},null,8,["onChange","api"]),p(c,{message:"嵌入表单,加入表单校验",class:"my-5"}),p(j,{onRegister:e.register},null,8,["onRegister"])])),_:1})};export default b;