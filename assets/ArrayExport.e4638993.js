import{_ as e}from"./index.4a30314c.js";import"./index.0348cf7d.js";import{c as i,d as t,a as o,b as s,e as d}from"./data.58a7426a.js";import{_ as a}from"./index.4486a83c.js";import{d as r,i as n,o as m,j as p,w as c,k as j,n as x}from"./index.50b828bd.js";import"./index.47fbc714.js";import"./index.d8babbed.js";import"./index.38c8e961.js";import"./index.fdcc7c21.js";import"./index.925fe361.js";import"./index.eae08916.js";import"./index.61099513.js";import"./index.9284d4e4.js";import"./useAttrs.cfd03cd2.js";import"./index.8d91dadc.js";import"./index.f4c035d6.js";import"./uuid.467c825e.js";import"./index.d469528e.js";import"./index.56b9f6b2.js";import"./useTimeout.027d8171.js";import"./useWindowSizeFn.48b953f5.js";import"./index.ea618bdb.js";import"./index.3550ea99.js";import"./domUtils.4d4b190d.js";import"./RightOutlined.238a31d2.js";import"./useScrollTo.3be61fce.js";import"./animation.64c13706.js";import"./FullscreenOutlined.aede640d.js";import"./index.a45b2b74.js";import"./index.443a48d5.js";import"./index.673364b0.js";import"./index.643da10c.js";import"./download.bf43035d.js";import"./index.27bb0464.js";import"./clickOutside.9a58ed15.js";import"./CheckOutlined.24d7da0d.js";import"./useSortable.3afa6002.js";import"./SettingOutlined.0dd228fc.js";import"./useExpose.b6f197c5.js";import"./useForm.192c15e4.js";import"./index.b0611c31.js";import"./index.9fbd6c39.js";import"./usePageContext.a9759aff.js";var l=r({components:{BasicTable:e,PageWrapper:a},setup:()=>({aoaToExcel:function(){o({data:s,header:d,filename:"二维数组方式导出excel.xlsx"})},columns:i,data:t})});const u=x("导出");l.render=function(e,i,t,o,s,d){const a=n("a-button"),r=n("BasicTable"),x=n("PageWrapper");return m(),p(x,{title:"导出示例",content:"根据数组格式的数据进行导出"},{default:c((()=>[j(r,{title:"基础表格",columns:e.columns,dataSource:e.data},{toolbar:c((()=>[j(a,{onClick:e.aoaToExcel},{default:c((()=>[u])),_:1},8,["onClick"])])),_:1},8,["columns","dataSource"])])),_:1})};export default l;