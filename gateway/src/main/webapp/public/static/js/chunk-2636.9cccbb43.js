(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-2636"],{WJrS:function(t,e,a){},nd5u:function(t,e,a){"use strict";a.r(e);var i=a("JrBc"),n=a("MT78"),s=a.n(n),l=a("pHUW"),o={name:"RankingContractStatistics",mixins:[i.a],data:function(){return{}},computed:{},mounted:function(){this.fieldList=[{field:"realname",name:"签订人"},{field:"structureName",name:"部门"},{field:"money",name:"合同金额（元）"}],this.initAxis()},methods:{getDataList:function(t){var e=this;this.postParams=t,this.loading=!0,Object(l.e)(t).then(function(t){e.loading=!1,e.list=t.data||[];for(var a=[],i=[],n=t.data.length>10?10:t.data.length,s=0;s<n;s++){var l=t.data[s];a.splice(0,0,parseFloat(l.money)),i.splice(0,0,l.realname)}e.axisOption.yAxis[0].data=i,e.axisOption.series[0].data=a,e.chartObj.setOption(e.axisOption,!0)}).catch(function(){e.loading=!1})},initAxis:function(){this.chartObj=s.a.init(document.getElementById("axismain")),this.chartObj.setOption(this.axisOption,!0)},exportClick:function(){this.requestExportInfo(l.f,this.postParams)}}},r=(a("sWH2"),a("KHd+")),c=Object(r.a)(o,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"main-container"},[a("filtrate-handle-view",{staticClass:"filtrate-bar",attrs:{"show-user-select":!1,title:"合同金额排行","module-type":"ranking"},on:{load:function(e){t.loading=!0},change:t.getDataList}}),t._v(" "),a("div",{staticClass:"content"},[a("div",{staticClass:"content-title"},[t._v("合同金额排行（按实际下单时间）")]),t._v(" "),a("div",{directives:[{name:"empty",rawName:"v-empty",value:0===t.list.length,expression:"list.length === 0"}],staticClass:"axis-content",attrs:{"xs-empty-text":"暂无排行"}},[a("div",{attrs:{id:"axismain"}})]),t._v(" "),a("div",{staticClass:"table-content"},[a("div",{staticClass:"handle-bar"},[a("el-button",{staticClass:"export-btn",on:{click:t.exportClick}},[t._v("导出")])],1),t._v(" "),a("el-table",{attrs:{data:t.list,height:"400",stripe:"",border:"","highlight-current-row":""}},[a("el-table-column",{attrs:{align:"center","header-align":"center","show-overflow-tooltip":"",label:"公司总排名"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n            "+t._s(e.$index+1)+"\n          ")]}}])}),t._v(" "),t._l(t.fieldList,function(t,e){return a("el-table-column",{key:e,attrs:{prop:t.field,label:t.name,align:"center","header-align":"center","show-overflow-tooltip":""}})})],2)],1)])],1)},[],!1,null,"6b269a72",null);c.options.__file="RankingContractStatistics.vue";e.default=c.exports},sWH2:function(t,e,a){"use strict";var i=a("WJrS");a.n(i).a}}]);