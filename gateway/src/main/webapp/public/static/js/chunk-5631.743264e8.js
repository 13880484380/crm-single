(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-5631"],{"6E3Y":function(t,e,i){"use strict";var a=i("mtEh");i.n(a).a},"9PTB":function(t,e,i){"use strict";e.a={data:function(){return{summaryData:null}},methods:{getSummariesData:function(t){this.summaryData=t||{}},getSummaries:function(t){var e=this,i=[];return t.columns.forEach(function(t,a){i[a]=e.summaryData?e.summaryData[t.property]:""}),i}}}},"9kPm":function(t,e,i){"use strict";e.a={data:function(){return{showTable:!0}},methods:{mixinSortFn:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"ascending";if("[object Array]"!==Object.prototype.toString.call(t))return[];if(!e)return t;t.sort(function(t,a){if(t[e]===a[e])return 0;var n=isNaN(Number(t[e]))||isNaN(Number(a[e]))?t[e]<a[e]:Number(t[e])<Number(a[e]);return"descending"===i?n?1:-1:n?-1:1})}}}},ECOn:function(t,e,i){"use strict";i.r(e);var a=i("31UX"),n=i("9kPm"),s=i("9PTB"),o=i("MT78"),r=i.n(o),l=i("JgLm"),c={name:"CycleView",components:{},mixins:[a.a,n.a,s.a],props:{type:{required:!0,type:String},show:{required:!0,type:Boolean}},data:function(){return{loading:!1,axisOption:null,postParams:null,list:[],fieldList:[],initView:!1}},computed:{title:function(){return{customer:"员工客户成交周期（根据合同下单时间和客户创建时间计算）",address:"地区成交周期（根据合同下单时间和客户创建时间计算）",product:"产品成交周期（根据合同下单时间和客户创建时间计算）"}[this.type]},filterTitle:function(){return{customer:"员工客户成交周期分析",address:"地区成交周期分析",product:"产品成交周期分析"}[this.type]}},watch:{show:function(t){var e=this;t&&!this.initView&&(this.initView=!0,this.postParams&&this.getDataList(this.postParams),this.$nextTick(function(){e.initAxis()}))}},mounted:function(){this.fieldList=this.getFieldList(),this.show&&(this.initView=!0,this.initAxis())},methods:{getDataList:function(t){var e=this;(this.postParams=t,this.show)&&(this.loading=!0,(0,{customer:l.v,product:l.h,address:l.a}[this.type])(t).then(function(t){e.loading=!1;var i=[];if("customer"!=e.type){var a=t.data||{};i=a.list||[],e.list=a.list||[],e.getSummariesData(a.total)}else i=t.data||[];for(var n=[],s=[],o=[],r=0;r<i.length;r++){var l=i[r];n.push(l.cycle),s.push(l.customerNum),"customer"==e.type?o.push(l.type):"address"==e.type?o.push(l.type):"product"==e.type&&o.push(l.productName)}e.axisOption.xAxis[0].data=o,e.axisOption.series[0].data=n,e.axisOption.series[1].data=s,e.chartObj.setOption(e.axisOption,!0)}).catch(function(){e.loading=!1}),"customer"==this.type&&Object(l.x)(t).then(function(t){e.loading=!1;var i=t.data||{};e.list=i.list||[],e.getSummariesData(i.total)}).catch(function(){e.loading=!1}))},initAxis:function(){var t=r.a.init(document.getElementById("axismain"+this.type)),e={color:["#6ca2ff","#ff7474"],toolbox:this.toolbox,tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},legend:{data:["成交周期","成交客户数"],bottom:"0px",itemWidth:14},grid:{top:"40px",left:"30px",right:"30px",bottom:"40px",containLabel:!0,borderColor:"#fff"},xAxis:[{type:"category",data:[],axisTick:{alignWithLabel:!0,lineStyle:{width:0}},axisLabel:{color:"#333"},axisLine:{lineStyle:{color:"#333"}},splitLine:{show:!1}}],yAxis:[{type:"value",name:"成交周期",axisTick:{alignWithLabel:!0,lineStyle:{width:0}},axisLabel:{color:"#333",formatter:"{value}天"},axisLine:{lineStyle:{color:"#333"}},splitLine:{show:!1}},{type:"value",name:"成交客户数",axisTick:{alignWithLabel:!0,lineStyle:{width:0}},axisLabel:{color:"#333",formatter:"{value}个"},axisLine:{lineStyle:{color:"#333"}},splitLine:{show:!1}}],series:[{name:"成交周期",type:"bar",yAxisIndex:0,barWidth:15,data:[]},{name:"成交客户数",type:"bar",yAxisIndex:1,barWidth:15,data:[]}]};t.setOption(e,!0),this.axisOption=e,this.chartObj=t},getFieldList:function(){return{customer:[{field:"realname",name:"姓名"},{field:"cycle",name:"成交周期（天）"},{field:"customerNum",name:"成交客户数"}],product:[{field:"productName",name:"产品名称"},{field:"cycle",name:"成交周期（天）"},{field:"customerNum",name:"成交客户数"}],address:[{field:"type",name:"地区"},{field:"cycle",name:"成交周期（天）"},{field:"customerNum",name:"成交客户数"}]}[this.type]},exportClick:function(){this.requestExportInfo({customer:l.w,product:l.i,address:l.b}[this.type],this.postParams)}}},u=(i("vC9p"),i("KHd+")),m=Object(u.a)(c,function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"cycle-content"},[t.initView?i("filtrate-handle-view",{staticClass:"filtrate-bar",attrs:{title:t.filterTitle,"module-type":"customer"},on:{load:function(e){t.loading=!0},change:t.getDataList}}):t._e(),t._v(" "),i("div",{staticClass:"content"},[i("div",{staticClass:"axis-content"},[i("div",{staticClass:"content-title"},[t._v(t._s(t.title))]),t._v(" "),i("div",{staticClass:"axismain",attrs:{id:"axismain"+t.type}})]),t._v(" "),i("div",{staticClass:"table-content"},[i("div",{staticClass:"handle-bar"},[i("el-button",{staticClass:"export-btn",on:{click:t.exportClick}},[t._v("导出")])],1),t._v(" "),t.showTable?i("el-table",{attrs:{data:t.list,"summary-method":t.getSummaries,height:"400","show-summary":"",stripe:"",border:"","highlight-current-row":""},on:{"sort-change":function(e){var i=e.prop,a=e.order;return t.mixinSortFn(t.list,i,a)}}},t._l(t.fieldList,function(t,e){return i("el-table-column",{key:e,attrs:{prop:t.field,label:t.name,sortable:"custom",align:"center","header-align":"center","show-overflow-tooltip":""}})})):t._e()],1)])],1)},[],!1,null,"61428e6a",null);m.options.__file="CycleView.vue";var d={name:"CustomerCycleStatistics",components:{CycleView:m.exports},data:function(){return{tabActiveName:"customer",tabList:[{label:"员工客户成交周期",name:"customer"},{label:"地区成交周期",name:"address"},{label:"产品成交周期",name:"product"}]}},computed:{},mounted:function(){},methods:{}},p=(i("6E3Y"),Object(u.a)(d,function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("el-tabs",{staticClass:"main-container",model:{value:t.tabActiveName,callback:function(e){t.tabActiveName=e},expression:"tabActiveName"}},t._l(t.tabList,function(e,a){return i("el-tab-pane",{key:a,attrs:{label:e.label,name:e.name}},[i("cycle-view",{attrs:{type:e.name,show:e.name==t.tabActiveName}})],1)}))},[],!1,null,"477a895a",null));p.options.__file="CustomerCycleStatistics.vue";e.default=p.exports},MMRu:function(t,e,i){},mtEh:function(t,e,i){},vC9p:function(t,e,i){"use strict";var a=i("MMRu");i.n(a).a}}]);