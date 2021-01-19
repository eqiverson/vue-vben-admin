import{_ as e}from"./index.4a30314c.js";import{getBasicColumns as t,getBasicShortColumns as i}from"./tableData.7aa0192c.js";import{d as o,h as s,i as n,o as a,j as l,k as c,w as d,n as r}from"./index.50b828bd.js";import{d as m}from"./table.f3ec8794.js";import{u}from"./useTable.cbfba597.js";import"./index.47fbc714.js";import"./index.d8babbed.js";import"./index.38c8e961.js";import"./index.fdcc7c21.js";import"./index.925fe361.js";import"./index.eae08916.js";import"./index.61099513.js";import"./index.9284d4e4.js";import"./useAttrs.cfd03cd2.js";import"./index.8d91dadc.js";import"./index.f4c035d6.js";import"./uuid.467c825e.js";import"./index.d469528e.js";import"./index.56b9f6b2.js";import"./useTimeout.027d8171.js";import"./useWindowSizeFn.48b953f5.js";import"./index.ea618bdb.js";import"./index.3550ea99.js";import"./domUtils.4d4b190d.js";import"./RightOutlined.238a31d2.js";import"./useScrollTo.3be61fce.js";import"./animation.64c13706.js";import"./FullscreenOutlined.aede640d.js";import"./index.a45b2b74.js";import"./index.443a48d5.js";import"./index.673364b0.js";import"./index.643da10c.js";import"./download.bf43035d.js";import"./index.27bb0464.js";import"./clickOutside.9a58ed15.js";import"./CheckOutlined.24d7da0d.js";import"./useSortable.3afa6002.js";import"./SettingOutlined.0dd228fc.js";import"./useExpose.b6f197c5.js";import"./useForm.192c15e4.js";var f=o({components:{BasicTable:e},setup(){const{createMessage:e}=s(),[o,{setLoading:n,setColumns:a,getColumns:l,getDataSource:c,reload:d,getPaginationRef:r,setPagination:f,getSelectRows:p,getSelectRowKeys:b,setSelectedRowKeys:j,clearSelectedRowKeys:g}]=u({canResize:!0,title:"useTable示例",titleHelpMessage:"使用useTable调用表格内方法",api:m,columns:t(),rowKey:"id",showTableSetting:!0,rowSelection:{type:"checkbox"}});return{registerTable:o,changeLoading:function(){n(!0),setTimeout((()=>{n(!1)}),1e3)},changeColumns:function(){a(i())},reloadTable:function(){a(t()),d({page:1})},getColumn:function(){e.info("请在控制台查看！")},getTableData:function(){e.info("请在控制台查看！")},getPagination:function(){e.info("请在控制台查看！")},setPaginationInfo:function(){f({current:2}),d()},getSelectRowList:function(){e.info("请在控制台查看！")},getSelectRowKeyList:function(){e.info("请在控制台查看！")},setSelectedRowKeyList:function(){j(["0","1","2"])},clearSelect:function(){g()}}}});const p={class:"p-4"},b={class:"mb-4"},j=r("还原"),g=r("开启loading"),C=r("更改Columns"),k=r("获取Columns"),x=r("获取表格数据"),S=r("跳转到第2页"),w={class:"mb-4"},R=r("获取选中行"),T=r("获取选中行Key"),_=r("设置选中行"),y=r("清空选中行"),h=r("获取分页信息");f.render=function(e,t,i,o,s,r){const m=n("a-button"),u=n("BasicTable");return a(),l("div",p,[c("div",b,[c(m,{class:"mr-2",onClick:e.reloadTable},{default:d((()=>[j])),_:1},8,["onClick"]),c(m,{class:"mr-2",onClick:e.changeLoading},{default:d((()=>[g])),_:1},8,["onClick"]),c(m,{class:"mr-2",onClick:e.changeColumns},{default:d((()=>[C])),_:1},8,["onClick"]),c(m,{class:"mr-2",onClick:e.getColumn},{default:d((()=>[k])),_:1},8,["onClick"]),c(m,{class:"mr-2",onClick:e.getTableData},{default:d((()=>[x])),_:1},8,["onClick"]),c(m,{class:"mr-2",onClick:e.setPaginationInfo},{default:d((()=>[S])),_:1},8,["onClick"])]),c("div",w,[c(m,{class:"mr-2",onClick:e.getSelectRowList},{default:d((()=>[R])),_:1},8,["onClick"]),c(m,{class:"mr-2",onClick:e.getSelectRowKeyList},{default:d((()=>[T])),_:1},8,["onClick"]),c(m,{class:"mr-2",onClick:e.setSelectedRowKeyList},{default:d((()=>[_])),_:1},8,["onClick"]),c(m,{class:"mr-2",onClick:e.clearSelect},{default:d((()=>[y])),_:1},8,["onClick"]),c(m,{class:"mr-2",onClick:e.getPagination},{default:d((()=>[h])),_:1},8,["onClick"])]),c(u,{onRegister:e.registerTable},null,8,["onRegister"])])};export default f;