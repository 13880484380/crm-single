(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-ebc8"],{"+nK1":function(e,t,a){"use strict";var n=a("cSIG");a.n(n).a},"07TH":function(e,t,a){},"3ojK":function(e,t,a){"use strict";var n=a("c2Co"),i=a("4XAY"),s=a("ZoMv"),l=a("Ew9n"),o=a("raay"),r=a("eOwn"),c=a("BzA1"),u=a("w4ZA"),d=a("3gPr"),p=a("CjUg"),m=a("8OTK"),h=a("f6dm"),f={name:"LeadsDetail",components:{SlideView:l.a,CRMDetailHead:o.a,Activity:r.a,CRMEditBaseInfo:u.a,RelativeFiles:d.a,RelativeHandle:p.a,ImportInfo:c.a,CRMAllCreate:m.default},mixins:[h.a],props:{id:[String,Number],listenerIDs:{type:Array,default:function(){return["crm-main-container"]}},noListenerIDs:{type:Array,default:function(){return[]}},noListenerClass:{type:Array,default:function(){return["el-table__body"]}}},data:function(){return{loading:!1,crmType:"leads",headDetails:[{title:"姓名",value:""},{title:"线索来源",value:""},{title:"手机",value:""},{title:"负责人",value:""},{title:"创建时间",value:""}],tabCurrentName:"Activity",isCreate:!1,showImportInfo:!0,importList:[]}},computed:{activityHandle:function(){var e=[];return this.canCreateFollowRecord&&(e=[{type:"log",label:"写跟进"}]),e},tabNames:function(){return[{label:"活动",name:"Activity"},{label:"详细资料",name:"CRMEditBaseInfo"},{label:this.getTabName("附件",this.tabsNumber.fileCount),name:"RelativeFiles"},{label:"操作记录",name:"RelativeHandle"}]}},mounted:function(){},methods:{getDetial:function(){var e=this;this.loading=!0,Object(n.i)(this.id).then(function(t){e.detailData=t.data,e.headDetails[0].value=t.data.name,e.headDetails[1].value=t.data.source,e.headDetails[2].value=t.data.mobile,e.headDetails[3].value=t.data.ownerUserName,e.headDetails[4].value=t.data.createTime,e.loading=!1}).catch(function(){e.loading=!1,e.hideView()}),this.getBaseInfo()},getBaseInfo:function(){var e=this;this.loading=!0,Object(i.y)({types:s.a[this.crmType],id:this.id}).then(function(t){e.importList=t.data,e.loading=!1}).catch(function(){e.loading=!1})},hideView:function(){this.$emit("hide-view")}}},v=(a("HVdV"),a("KHd+")),y=Object(v.a)(f,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("slide-view",{directives:[{name:"empty",rawName:"v-empty",value:!e.canShowDetail,expression:"!canShowDetail"}],attrs:{"listener-ids":e.listenerIDs,"no-listener-ids":e.noListenerIDs,"no-listener-class":e.noListenerClass,"body-style":{padding:0,height:"100%"},"xs-empty-icon":"nopermission","xs-empty-text":"暂无权限"},on:{afterEnter:e.viewAfterEnter,close:e.hideView}},[a("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],ref:"crmDetailMain",staticClass:"detail-main"},[e.canShowDetail&&e.detailData?a("flexbox",{staticClass:"d-container",attrs:{direction:"column",align:"stretch"}},[a("c-r-m-detail-head",{attrs:{detail:e.detailData,"head-details":e.headDetails,id:e.id,"crm-type":e.crmType},on:{handle:e.detailHeadHandle,close:e.hideView}},[a("template",{slot:"name"},[a("el-tooltip",{attrs:{content:0==e.detailData.star?"添加关注":"取消关注",effect:"dark",placement:"top"}},[a("i",{staticClass:"wk wk-focus-on focus-icon",class:{active:0!=e.detailData.star},on:{click:function(t){e.toggleStar()}}})])],1)],2),e._v(" "),a("flexbox",{staticClass:"d-container-bd",attrs:{align:"stretch"}},[a("el-tabs",{staticClass:"d-container-bd--left",attrs:{type:"border-card"},model:{value:e.tabCurrentName,callback:function(t){e.tabCurrentName=t},expression:"tabCurrentName"}},e._l(e.tabNames,function(t,n){return a("el-tab-pane",{key:n,attrs:{label:t.label,name:t.name,lazy:""}},[a(t.name,{tag:"component",attrs:{detail:e.detailData,id:e.id,handle:e.activityHandle,"crm-type":e.crmType}})],1)})),e._v(" "),a("transition",{attrs:{name:"slide-fade"}},[a("el-tabs",{directives:[{name:"show",rawName:"v-show",value:e.showImportInfo,expression:"showImportInfo"}],staticClass:"d-container-bd--right",attrs:{value:"chiefly-contacts",type:"border-card"}},[a("el-tab-pane",{attrs:{label:"重要信息",name:"chiefly-contacts",lazy:""}},[a("import-info",{staticClass:"import-info",attrs:{list:e.importList}})],1)],1)],1)],1)],1):e._e()],1),e._v(" "),a("el-button",{staticClass:"firse-button",on:{click:function(t){e.showImportInfo=!e.showImportInfo}}},[e._v("重"),a("br"),e._v("要"),a("br"),e._v("信"),a("br"),e._v("息"),a("br"),a("i",{staticClass:"el-icon-arrow-right el-icon--right",class:{"is-reverse":!e.showImportInfo}})]),e._v(" "),e.isCreate?a("c-r-m-all-create",{attrs:{action:{type:"update",id:e.id,batchId:e.detailData.batchId},"crm-type":e.crmType},on:{"save-success":e.editSaveSuccess,close:function(t){e.isCreate=!1}}}):e._e()],1)},[],!1,null,"7b593c12",null);y.options.__file="Detail.vue";t.a=y.exports},"G+lJ":function(e,t,a){"use strict";var n=a("tuyL");a.n(n).a},HVdV:function(e,t,a){"use strict";var n=a("07TH");a.n(n).a},KPHR:function(e,t,a){"use strict";a.r(t);var n=a("QbLZ"),i=a.n(n),s=a("t8Uk"),l=a("3ojK"),o=a("5QVi"),r={name:"LeadsIndex",components:{LeadsDetail:l.a,LeadsCreate:s.a},mixins:[o.a],data:function(){return{crmType:"leads",createShow:!1}},computed:{menuItems:function(){var e=[];return this.crm&&this.crm.leads&&e.push({title:"线索管理",path:"leads",icon:a("keIY")}),e}},mounted:function(){},deactivated:function(){this.$refs.elMenu.activeIndex=this.crmType},methods:{menuSelect:function(e,t){this.$emit("menu-select",e,t)},cellClassName:function(e){e.row;var t=e.column;e.rowIndex,e.columnIndex;return"leadsName"===t.property?"can-visit--underline":""},createClick:function(){this.createShow=!0}}},c=(a("xze3"),a("KHd+")),u=Object(c.a)(r,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("c-r-m-list-head",{attrs:{search:e.search,"crm-type":e.crmType,"create-fun":e.createClick,title:"线索管理",placeholder:"请输入线索名称/手机/电话","main-title":"新建线索"},on:{"update:search":function(t){e.search=t},"on-handle":e.listHeadHandle,"on-search":e.crmSearch,"on-export":e.exportInfos}},[a("el-menu",{ref:"elMenu",attrs:{slot:"icon","default-active":e.crmType,mode:"horizontal","active-text-color":"#2362FB"},on:{select:e.menuSelect},slot:"icon"},e._l(e.menuItems,function(t,n){return a("el-menu-item",{key:n,attrs:{index:t.path}},[a("img",{attrs:{src:t.icon}}),e._v(" "),a("span",[e._v(e._s(t.title))])])}))],1),e._v(" "),a("div",{directives:[{name:"empty",rawName:"v-empty",value:!e.crm.leads.index,expression:"!crm.leads.index"}],staticClass:"crm-container",attrs:{"xs-empty-icon":"nopermission","xs-empty-text":"暂无权限"}},[a("c-r-m-table-head",{ref:"crmTableHead",attrs:{"crm-type":e.crmType},on:{filter:e.handleFilter,handle:e.handleHandle,scene:e.handleScene}}),e._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"n-table--border",staticStyle:{width:"100%"},attrs:{id:"crm-table","row-height":40,data:e.list,height:e.tableHeight,"cell-class-name":e.cellClassName,"use-virtual":"",stripe:"",border:"","highlight-current-row":""},on:{"row-click":e.handleRowClick,"sort-change":e.sortChange,"header-dragend":e.handleHeaderDragend,"selection-change":e.handleSelectionChange}},[a("el-table-column",{attrs:{"show-overflow-tooltip":"",type:"selection",align:"center",width:"55"}}),e._v(" "),e._l(e.fieldList,function(t,n){return a("el-table-column",{key:n,attrs:{fixed:0==n,prop:t.prop,label:t.label,width:t.width,formatter:e.fieldFormatter,sortable:"custom","show-overflow-tooltip":""}})}),e._v(" "),a("el-table-column"),e._v(" "),a("el-table-column",{attrs:{label:"关注",align:"center",fixed:"right",width:"60"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-tooltip",{attrs:{content:0==t.row.star?"添加关注":"取消关注",effect:"dark",placement:"top"}},[a("i",{staticClass:"wk wk-focus-on focus-icon",class:{active:0!=t.row.star},on:{click:function(a){e.toggleStar(t.row)}}})])]}}])}),e._v(" "),a("el-table-column",{attrs:{resizable:!1,fixed:"right",width:"40"},scopedSlots:e._u([{key:"header",fn:function(t){return[a("field-set",{attrs:{"crm-type":e.crmType},on:{change:e.setSave}})]}}])})],2),e._v(" "),a("div",{staticClass:"p-contianer"},[a("el-pagination",{staticClass:"p-bar",attrs:{"current-page":e.currentPage,"page-sizes":e.pageSizes,"page-size":e.pageSize,total:e.total,"pager-count":5,background:"",layout:"prev, pager, next, sizes, total, jumper"},on:{"update:pageSize":function(t){e.pageSize=t},"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1)],1),e._v(" "),e.showDview?a("leads-detail",{staticClass:"d-view",attrs:{id:e.rowID},on:{handle:e.handleHandle,"hide-view":function(t){e.showDview=!1}}}):e._e(),e._v(" "),e.createShow?a("leads-create",{on:{close:function(t){e.createShow=!1},"save-success":e.handleHandle}}):e._e()],1)},[],!1,null,"186c0890",null);u.options.__file="index.vue";var d=u.exports,p=a("L2JU"),m={name:"LeadsAllIndex",components:{LeadsIndex:d},props:{},data:function(){return{componentName:""}},computed:i()({},Object(p.b)(["crm"])),watch:{},mounted:function(){this.crm&&this.crm.leads&&(this.componentName="LeadsIndex")},beforeDestroy:function(){},methods:{menuSelect:function(e,t){this.componentName={leads:"LeadsIndex"}[e]}}},h=(a("+nK1"),Object(c.a)(m,function(){var e=this.$createElement,t=this._self._c||e;return t("keep-alive",[t(this.componentName,{tag:"component",on:{"menu-select":this.menuSelect}})],1)},[],!1,null,"5fe65204",null));h.options.__file="AllIndex.vue";t.default=h.exports},WPLZ:function(e,t,a){},ZX9L:function(e,t,a){"use strict";var n={name:"TimeTypeSelect",props:{defaultType:[String,Object],width:{type:Number,default:200},options:{type:Array,default:function(){return[{label:"今天",value:"today"},{label:"昨天",value:"yesterday"},{label:"本周",value:"week"},{label:"上周",value:"lastWeek"},{label:"本月",value:"month"},{label:"上月",value:"lastMonth"},{label:"本季度",value:"quarter"},{label:"上季度",value:"lastQuarter"},{label:"本年",value:"year"},{label:"去年",value:"lastYear"}]}}},data:function(){return{selectType:{label:"本年",value:"year"},showTypePopover:!1,showCustomContent:!1,sureCustomContent:!1,startTime:"",endTime:""}},computed:{typeShowValue:function(){return this.sureCustomContent?this.startTime||this.endTime?(this.startTime||"")+"-"+(this.endTime||""):"":this.selectType.label}},watch:{defaultType:function(){this.selectType.value!=this.defaultType&&(this.selectType=this.getDefaultTypeValue(this.defaultType))}},mounted:function(){void 0!==this.defaultType?"string"==typeof this.defaultType?this.selectType=this.getDefaultTypeValue(this.defaultType):this.defaultType.label?this.selectType=this.defaultType:"default"==this.defaultType.type?this.selectType=this.getDefaultTypeValue(this.defaultType.value):"custom"==this.defaultType.type&&(this.sureCustomContent=!0,this.showCustomContent=!0,this.startTime=this.defaultType.startTime,this.endTime=this.defaultType.endTime):this.$emit("change",{type:"default",value:this.selectType.value})},methods:{getDefaultTypeValue:function(e){for(var t=0;t<this.options.length;t++){var a=this.options[t];if(a.value==e)return a}return{label:"本年",value:"year"}},typeSelectClick:function(e){this.showTypePopover=!1,this.sureCustomContent=!1,this.showCustomContent=!1,this.selectType=e,this.$emit("change",{type:"default",value:this.selectType.value})},customSureClick:function(){this.startTime&&this.endTime&&(this.sureCustomContent=!0,this.showTypePopover=!1,this.$emit("change",{type:"custom",startTime:this.startTime,endTime:this.endTime}))}}},i=(a("G+lJ"),a("KHd+")),s=Object(i.a)(n,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-popover",{staticClass:"time-type-select",attrs:{width:e.width,placement:"bottom","popper-class":"no-padding-popover",trigger:"click"},model:{value:e.showTypePopover,callback:function(t){e.showTypePopover=t},expression:"showTypePopover"}},[a("div",{staticClass:"type-popper"},[a("div",{staticClass:"type-content"},[e._l(e.options,function(t,n){return a("div",{key:n,staticClass:"type-content-item",class:{selected:e.selectType.value==t.value&&!e.showCustomContent},on:{click:function(a){e.typeSelectClick(t)}}},[a("div",{staticClass:"mark"}),e._v(e._s(t.label)+"\n      ")])}),e._v(" "),a("div",{staticClass:"type-content-item",class:{selected:e.showCustomContent},on:{click:function(t){e.showCustomContent=!0}}},[a("div",{staticClass:"mark"}),e._v("自定义\n      ")])],2),e._v(" "),e.showCustomContent?a("div",{staticClass:"type-content-custom"},[a("el-date-picker",{attrs:{type:"date","value-format":"yyyy.MM.dd",placeholder:"选择日期"},model:{value:e.startTime,callback:function(t){e.startTime=t},expression:"startTime"}}),e._v(" "),a("el-date-picker",{attrs:{type:"date","value-format":"yyyy.MM.dd",placeholder:"选择日期"},model:{value:e.endTime,callback:function(t){e.endTime=t},expression:"endTime"}}),e._v(" "),a("el-button",{on:{click:e.customSureClick}},[e._v("确定")])],1):e._e()]),e._v(" "),a("el-input",{staticClass:"type-select",style:{width:e.width+"px"},attrs:{slot:"reference",readonly:!0},slot:"reference",model:{value:e.typeShowValue,callback:function(t){e.typeShowValue=t},expression:"typeShowValue"}},[a("i",{class:["el-icon-arrow-up",{"is-reverse":e.showTypePopover}],attrs:{slot:"suffix"},slot:"suffix"})])],1)},[],!1,null,"9dc9cb18",null);s.options.__file="index.vue";t.a=s.exports},cSIG:function(e,t,a){},tuyL:function(e,t,a){},xze3:function(e,t,a){"use strict";var n=a("WPLZ");a.n(n).a}}]);