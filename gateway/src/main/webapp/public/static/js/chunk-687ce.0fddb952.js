(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-687ce","chunk-687c","chunk-687ceb","chunk-dd9e","chunk-5205"],{"/ktB":function(e,t,a){"use strict";var n={name:"FavList",components:{XrUserView:function(){return a.e("chunk-7970").then(a.bind(null,"bE0L"))}},props:{isFavour:Boolean,data:Array},data:function(){return{contentVisible:!1}},computed:{},watch:{},created:function(){},mounted:function(){},beforeDestroy:function(){},methods:{faveClick:function(){this.$emit("fav",this.data)}}},i=(a("Q0mo"),a("KHd+")),o=Object(i.a)(n,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("flexbox",{staticClass:"fav-list"},[a("div",{staticClass:"good-btn",class:{"is-fav":e.isFavour},on:{click:e.faveClick}},[a("i",{staticClass:"wk wk-good"})]),e._v(" "),e.data&&e.data.length>0?[a("div",{staticClass:"fav-user"},e._l(e.data,function(t,n){return a("el-popover",{key:n,attrs:{placement:"bottom",width:"250",trigger:"click"},model:{value:t.show,callback:function(a){e.$set(t,"show",a)},expression:"user.show"}},[t.show?a("xr-user-view",{attrs:{id:t.userId,data:t}}):e._e(),e._v(" "),a("span",{staticClass:"can-visit--underline",attrs:{slot:"reference"},slot:"reference"},[e._v(e._s(t.realname)+e._s(e.data.length-1===n?"":"、"))])],1)})),e._v(" "),e.data.length>10?a("span",{staticClass:"fav-total"},[e._v("等"),a("el-popover",{attrs:{"popper-class":"no-padding-popover",placement:"top",width:"200",trigger:"click"},model:{value:e.contentVisible,callback:function(t){e.contentVisible=t},expression:"contentVisible"}},[e.contentVisible?a("div",{staticClass:"fav-users"},[a("flexbox",{staticClass:"fav-users__header"},[a("div",{staticClass:"title"},[e._v(e._s("共"+e.data.length+"人点赞"))]),e._v(" "),a("i",{staticClass:"el-icon-close",on:{click:function(t){e.contentVisible=!1}}})]),e._v(" "),a("div",{staticClass:"fav-users__body"},e._l(e.data,function(t,n){return a("flexbox",{key:n,staticClass:"user"},[a("el-popover",{attrs:{placement:"bottom",width:"250",trigger:"click"},model:{value:t.favShow,callback:function(a){e.$set(t,"favShow",a)},expression:"user.favShow"}},[t.favShow?a("xr-user-view",{attrs:{id:t.userId,data:t}}):e._e(),e._v(" "),a("xr-avatar",{staticClass:"user__img",attrs:{slot:"reference",src:t.img,name:t.realname,size:34},slot:"reference"})],1),e._v(" "),a("div",{staticClass:"text-one-line user__name"},[e._v(e._s(t.realname))])],1)}))],1):e._e(),e._v(" "),a("span",{attrs:{slot:"reference"},slot:"reference"},[e._v(e._s(e.data.length))])]),e._v("人点赞")],1):e._e()]:e._e()],2)},[],!1,null,"68521834",null);o.options.__file="FavList.vue";t.a=o.exports},"7qmR":function(e,t,a){"use strict";a.d(t,"a",function(){return i}),a.d(t,"g",function(){return o}),a.d(t,"e",function(){return s}),a.d(t,"b",function(){return r}),a.d(t,"f",function(){return l}),a.d(t,"d",function(){return c}),a.d(t,"c",function(){return u});var n=a("t3Un");function i(e){return Object(n.a)({url:"oaExamineCategory/saveOrUpdateOaExamineSort",method:"post",data:e,headers:{"Content-Type":"application/json;charset=UTF-8"}})}function o(e){return Object(n.a)({url:"oaExamine/setOaExamine",method:"post",data:e,headers:{"Content-Type":"application/json;charset=UTF-8"}})}function s(e){return Object(n.a)({url:"oaExamine/myInitiate",method:"post",data:e,headers:{"Content-Type":"application/json;charset=UTF-8"}})}function r(e){return Object(n.a)({url:"oaExamine/deleteOaExamine",method:"post",data:e})}function l(e){return Object(n.a)({url:"oaExamine/queryOaExamineInfo/"+e,method:"post"})}function c(e){return Object(n.a)({url:"oaExamine/getField",method:"post",data:e,headers:{"Content-Type":"application/json;charset=UTF-8"}})}function u(e){return Object(n.a)({url:"oaExamine/export ",method:"post",data:e,headers:{"Content-Type":"application/json;charset=UTF-8"},responseType:"blob"})}},BsgX:function(e,t,a){"use strict";var n={name:"ReportMenu",components:{},mixins:[a("Z+Ht").a],props:{list:Array},data:function(){return{}},computed:{},watch:{},mounted:function(){},beforeDestroy:function(){},methods:{itemClick:function(e){this.$emit("select",e)}}},i=(a("kSFP"),a("KHd+")),o=Object(i.a)(n,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("span",{staticClass:"report-menu"},e._l(e.list,function(t,n){return a("span",{key:n,staticClass:"report-menu-btn",on:{click:function(a){e.itemClick(t)}}},[a("i",{staticClass:"report-menu-btn__icon",class:e.getXrIcon(t.type),style:{color:e.getXrIconColor(t.type)}}),e._v(" "),a("span",{staticClass:"report-menu-btn__name"},[e._v(e._s(t.name))])])}))},[],!1,null,"d819a984",null);o.options.__file="ReportMenu.vue";t.a=o.exports},MdnP:function(e,t,a){"use strict";var n={name:"PictureListView",props:{list:{type:Array,required:!0}},methods:{imgZoom:function(e,t){this.$wkPreviewFile.preview({index:t,data:e.map(function(e,t,a){return{url:e.filePath||e.url,name:e.name}})})}}},i=(a("tppH"),a("KHd+")),o=Object(i.a)(n,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"picture-list-view"},e._l(e.list,function(t,n){return a("div",{key:n,staticClass:"img-list-item",on:{click:function(t){e.imgZoom(e.list,n)}}},[a("img",{directives:[{name:"src",rawName:"v-src",value:t.filePath||t.url,expression:"imgItem.filePath || imgItem.url"}],key:t.filePath||t.url})])}))},[],!1,null,"4a663e6c",null);o.options.__file="PictureListView.vue";t.a=o.exports},NUy3:function(e,t,a){},Q0mo:function(e,t,a){"use strict";var n=a("QpJU");a.n(n).a},QpJU:function(e,t,a){},Spbr:function(e,t,a){"use strict";var n=a("jFQp");a.n(n).a},VmBU:function(e,t,a){"use strict";a.d(t,"e",function(){return i}),a.d(t,"a",function(){return o}),a.d(t,"c",function(){return s}),a.d(t,"b",function(){return r}),a.d(t,"j",function(){return l}),a.d(t,"h",function(){return c}),a.d(t,"f",function(){return u}),a.d(t,"g",function(){return d}),a.d(t,"i",function(){return p}),a.d(t,"d",function(){return f}),a.d(t,"m",function(){return m}),a.d(t,"l",function(){return v}),a.d(t,"k",function(){return h}),a.d(t,"o",function(){return b}),a.d(t,"n",function(){return g});var n=a("t3Un");function i(e){return Object(n.a)({url:"oaLog/queryList",method:"post",headers:{"Content-Type":"application/json;charset=UTF-8"},data:e})}function o(e){return Object(n.a)({url:"oaLog/addOrUpdate",method:"post",headers:{"Content-Type":"application/json;charset=UTF-8"},data:e})}function s(e){return Object(n.a)({url:"oaLog/addOrUpdate",method:"post",headers:{"Content-Type":"application/json;charset=UTF-8"},data:e})}function r(e){return Object(n.a)({url:"oaLog/deleteById",method:"post",data:e})}function l(e){return Object(n.a)({url:"oaLog/readLog",method:"post",data:e})}function c(e){return Object(n.a)({url:"oaLog/queryById",method:"post",data:e})}function u(e){return Object(n.a)({url:"oaLog/queryLogBulletin",method:"post",data:e})}function d(e){return Object(n.a)({url:"oaLog/queryLogBulletinByType",method:"post",data:e,headers:{"Content-Type":"application/json;charset=UTF-8"}})}function p(e){return Object(n.a)({url:"oaLog/queryLogRecordCount",method:"post",data:e})}function f(e){return Object(n.a)({url:"oaLog/getLogWelcomeSpeech",method:"post",data:e})}function m(e){return Object(n.a)({url:"oaLog/export",method:"post",data:e,headers:{"Content-Type":"application/json;charset=UTF-8"},responseType:"blob"})}function v(e){return Object(n.a)({url:"oaLog/queryCompleteStats",method:"post",data:e})}function h(e){return Object(n.a)({url:"oaLog/queryCompleteOaLogList",method:"post",data:e,headers:{"Content-Type":"application/json;charset=UTF-8"}})}function b(e){return Object(n.a)({url:"oaLog/queryIncompleteOaLogList",method:"post",data:e,headers:{"Content-Type":"application/json;charset=UTF-8"}})}function g(e){return Object(n.a)({url:"oaLog/favourOrCancel",method:"post",data:e})}},Ymr3:function(e,t,a){},jFQp:function(e,t,a){},kSFP:function(e,t,a){"use strict";var n=a("NUy3");a.n(n).a},oWzH:function(e,t,a){"use strict";t.a={methods:{getCategoryIcon:function(e){var t=e&&"string"==typeof e?e.split(","):[];return t.length>1?{icon:t[0],color:t[1]}:{icon:"wk wk-approve",color:"#9376FF"}}}}},slnp:function(e,t,a){"use strict";var n=a("7qmR"),i=a("Ew9n"),o=a("3biH"),s=a("/407"),r=a("hwzM"),l=a("iWcH"),c=a("7Qib"),u=a("oWzH"),d=a("m77o"),p=a("IEYw"),f={name:"ExamineDetail",components:{SlideView:i.a,ExamineInfo:o.a,RelatedBusinessCell:s.a,CRMFullScreenDetail:function(){return Promise.all([a.e("chunk-4a1e"),a.e("chunk-6d57"),a.e("chunk-dd9e")]).then(a.bind(null,"3z7q"))},FileCell:r.a,WkFieldView:l.default},filters:{fileName:function(e){return(e.name&&e.name.length>10?e.name.substring(0,10)+"...":e.name)+"("+Object(c.h)(e.size)+")"}},mixins:[u.a,p.a],props:{id:[String,Number],detailIndex:[String,Number],detailSection:[String,Number],noListenerClass:{type:Array,default:function(){return["list-box"]}}},data:function(){return{loading:!1,categoryId:"",type:"",detail:null,list:[],categoryName:"",fileList:[],imgList:[],travelList:[],travelField:[{prop:"vehicle",label:"交通工具"},{prop:"trip",label:"单程往返"},{prop:"startAddress",label:"出发城市"},{prop:"endAddress",label:"目的城市"},{prop:"startTime",label:"开始时间"},{prop:"endTime",label:"结束时间"},{prop:"duration",label:"时长（天）"},{prop:"description",label:"备注"}],expensesField:[{prop:"startAddress",label:"出发城市"},{prop:"endAddress",label:"目的城市"},{prop:"startTime",label:"开始时间"},{prop:"endTime",label:"结束时间"},{prop:"traffic",label:"交通费（元）"},{prop:"stay",label:"住宿费（元）"},{prop:"diet",label:"餐饮费（元）"},{prop:"other",label:"其他费用（元）"},{prop:"description",label:"费用明细描述"}],relatedID:"",relatedCRMType:"",showRelatedDetail:!1}},computed:{relatedListData:function(){for(var e=this,t={},a=["contacts","customer","business","contract"],n=function(n){var i=a[n],o=e.detail[i+"List"]||[];o.length>0&&(t[i]=o.map(function(e){return e.id&&(e[i+"Id"]=e.id),e}))},i=0;i<a.length;i++)n(i);return t},detailIcon:function(){return this.getCategoryIcon(this.detail.examineIcon)}},watch:{id:function(e){this.detail=null,this.getDetail()}},mounted:function(){},methods:{viewAfterEnter:function(){this.getDetail()},getBaseInfo:function(){var e=this;this.loading=!0,Object(n.d)({examineId:this.id,isDetail:1,type:1}).then(function(t){var a=t.data||[];a.forEach(function(t){"examine_cause"===t.formType?e.type=5:"business_cause"===t.formType&&(e.type=3),"detail_table"===t.formType&&(e.getFormItemDefaultProperty(t,!1),t.value=e.getItemValue(t,null,"update"))}),e.list=a,e.loading=!1}).catch(function(){e.loading=!1})},getDetail:function(){var e=this;this.loading=!0,Object(n.f)(this.id).then(function(t){e.loading=!1,e.categoryId=t.data.categoryId,e.type=t.data.type,e.getBaseInfo(),e.detail=t.data,e.categoryName=e.detail.categoryTitle,e.fileList=e.detail.file,e.imgList=e.detail.img,e.travelList=e.detail.examineTravelList}).catch(function(){e.loading=!1,e.hideView()})},hideView:function(){this.$emit("hide-view")},checkRelatedDetail:function(e,t){this.relatedID=t[e+"Id"]||t.id,this.relatedCRMType=e,this.showRelatedDetail=!0},handleFile:function(e,t,a){"preview"===e?t&&t.length>0&&this.$wkPreviewFile.preview({index:a,data:t}):"download"===e&&Object(c.d)({path:t.url,name:t.name})},imgZoom:function(e,t){this.$wkPreviewFile.preview({index:t,data:e})},downloadFile:function(e){Object(c.d)({path:e.url,name:e.name})},examineHandle:function(e){this.$emit("on-examine-handle",e,this.detailIndex),this.$emit("handle",e,this.detailIndex)},getCommonShowValue:function(e){return Object(d.a)(e.formType,e.value,"",e)},isBlockShowField:function(e){return["map_address","file","detail_table"].includes(e.formType)}}},m=(a("Spbr"),a("KHd+")),v=Object(m.a)(f,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("slide-view",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"d-view",attrs:{"listener-ids":["workbench-main-container"],"no-listener-class":e.noListenerClass},on:{afterEnter:e.viewAfterEnter,close:e.hideView}},[e.detail?a("flexbox",{staticClass:"detail-main",attrs:{orient:"vertical"}},[a("flexbox",{staticClass:"detail-header"},[a("div",{staticClass:"header-icon",style:{backgroundColor:e.detailIcon.color}},[a("i",{class:["wk","wk-"+e.detailIcon.icon]})]),e._v(" "),a("div",{staticClass:"header-name"},[e._v(e._s(e.categoryName))])]),e._v(" "),a("el-form",{staticClass:"detail-body"},[a("flexbox",{attrs:{gutter:0,align:"stretch",wrap:"wrap"}},e._l(e.list,function(t,n){return"examine_cause"!==t.formType&&"business_cause"!==t.formType?a("flexbox-item",{key:n,staticClass:"b-cell",class:[{"is-block":e.isBlockShowField(t)},"is-"+t.formType],attrs:{span:.5}},[a("div",{staticClass:"b-cell-b"},[a("div",{staticClass:"b-cell-name"},[e._v(e._s(t.name))]),e._v(" "),a("div",{staticClass:"b-cell-value"},[a("wk-field-view",{attrs:{props:t,"form-type":t.formType,value:t.value},scopedSlots:e._u([{key:"default",fn:function(a){return a.data,[e._v("\n                  "+e._s(e.getCommonShowValue(t))+"\n                ")]}}])})],1)])]):e._e()})),e._v(" "),e.imgList.length>0?a("div",{staticClass:"img-box"},e._l(e.imgList,function(t,n){return a("div",{key:n,staticClass:"img-list",on:{click:function(t){e.imgZoom(e.imgList,n)}}},[a("img",{directives:[{name:"src",rawName:"v-src",value:t.url,expression:"imgItem.url"}],key:t.url,staticStyle:{"object-fit":"contain","vertical-align":"top"}})])})):e._e(),e._v(" "),e.fileList.length?a("div",{staticClass:"section"},[a("div",{staticClass:"section__hd"},[a("i",{staticClass:"wukong wukong-file"}),e._v(" "),a("span",[e._v("附件")]),e._v(" "),a("span",[e._v("("+e._s(e.fileList.length)+")")])]),e._v(" "),a("div",{staticClass:"section__bd"},e._l(e.fileList,function(t,n){return a("file-cell",{key:n,attrs:{data:t,list:e.fileList,"cell-index":n}})}))]):e._e(),e._v(" "),e.type&&3==e.type&&e.travelList&&e.travelList.length>0?a("div",{staticClass:"table-sections"},[a("div",{staticClass:"table-sections__title"},[e._v("行程")]),e._v(" "),a("el-table",{staticStyle:{"font-size":"13px"},attrs:{data:e.travelList,align:"center","header-align":"center",stripe:""}},e._l(e.travelField,function(e,t){return a("el-table-column",{key:t,attrs:{prop:e.prop,label:e.label,"show-overflow-tooltip":""}})}))],1):e._e(),e._v(" "),e.type&&5==e.type&&e.travelList&&e.travelList.length>0?a("div",{staticClass:"table-sections"},[a("div",{staticClass:"table-sections__title"},[e._v("报销")]),e._v(" "),a("el-table",{staticStyle:{"font-size":"13px"},attrs:{data:e.travelList,align:"center","header-align":"center",stripe:""}},[e._l(e.expensesField,function(e,t){return a("el-table-column",{key:t,attrs:{prop:e.prop,label:e.label,"show-overflow-tooltip":""}})}),e._v(" "),a("el-table-column",{attrs:{label:"发票",width:"50"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("flexbox",{attrs:{justify:"center"}},[a("el-button",{attrs:{type:"text"},nativeOn:{click:function(a){e.handleFile("preview",t.row.img,0)}}},[e._v(e._s(t.row.img?t.row.img.length:0)+"张")])],1)]}}])})],2)],1):e._e(),e._v(" "),Object.keys(e.relatedListData).length>0?a("div",{staticClass:"section"},[a("div",{staticClass:"section__hd"},[a("i",{staticClass:"wukong wukong-relevance"}),e._v(" "),a("span",[e._v("相关信息")])]),e._v(" "),a("div",{staticClass:"section__bd"},e._l(e.relatedListData,function(t,n){return a("div",{key:n},e._l(t,function(t,i){return a("related-business-cell",{key:i,attrs:{data:t,"cell-index":i,type:n,"show-foot":!1},nativeOn:{click:function(a){e.checkRelatedDetail(n,t)}}})}))}))]):e._e(),e._v(" "),a("div",{staticClass:"examine-section"},[a("examine-info",{staticClass:"create-sections-content",attrs:{id:e.id,"record-id":e.detail.examineRecordId,"examine-type":"oa_examine"},on:{"on-handle":e.examineHandle}})],1)],1)],1):e._e(),e._v(" "),a("c-r-m-full-screen-detail",{attrs:{visible:e.showRelatedDetail,"crm-type":e.relatedCRMType,id:e.relatedID},on:{"update:visible":function(t){e.showRelatedDetail=t}}})],1)},[],!1,null,"7267d1e6",null);v.options.__file="ExamineDetail.vue";t.a=v.exports},tppH:function(e,t,a){"use strict";var n=a("Ymr3");a.n(n).a}}]);