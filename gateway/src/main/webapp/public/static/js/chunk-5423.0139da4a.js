(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-5423"],{"+H+P":function(e,t,i){"use strict";var s={name:"EditImage",components:{VueCropper:i("fnnb").VueCropper},props:{width:{type:String,default:"450px"},title:{type:String,default:"编辑头像"},saveButtonTitle:{type:String,default:"开始上传"},show:{type:Boolean,default:!1},fixedNumber:{type:Array,default:function(){return[1,1]}},previewWidth:{type:String,default:"70px"},previewHeight:{type:String,default:"70px"},previewRadius:{type:String,default:"35px"},file:[File],image:String},data:function(){return{loading:!1,showDialog:!1,cropperImg:"",previewImg:""}},computed:{},watch:{show:{handler:function(e){this.showDialog=e},deep:!0,immediate:!0},image:function(e){this.cropperImg=e}},mounted:function(){this.cropperImg=this.image},methods:{realTime:function(e){var t=this;this.$refs.cropper.getCropData(function(e){t.previewImg=e})},submiteImage:function(){var e=this;this.$refs.cropper.getCropBlob(function(t){e.$emit("save",{blob:t,file:e.file,image:e.previewImg}),e.hiddenView()})},hiddenView:function(){this.$emit("close")}}},a=(i("0H2c"),i("KHd+")),r=Object(a.a)(s,function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("el-dialog",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],attrs:{title:e.title,width:e.width,"append-to-body":!0,"close-on-click-modal":!1,visible:e.showDialog},on:{"update:visible":function(t){e.showDialog=t},close:e.hiddenView}},[i("flexbox",{staticClass:"content"},[i("div",{staticClass:"cropper-box"},[i("vueCropper",{ref:"cropper",attrs:{"can-move":!0,"auto-crop":!0,fixed:!0,"fixed-number":e.fixedNumber,img:e.cropperImg,"output-type":"png"},on:{realTime:e.realTime}})],1),e._v(" "),i("div",{staticClass:"preview"},[i("div",{staticClass:"preview-name"},[e._v("预览")]),e._v(" "),i("img",{staticClass:"preview-img",style:{width:e.previewWidth,height:e.previewHeight,"border-radius":e.previewRadius},attrs:{src:e.previewImg}})])]),e._v(" "),i("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{attrs:{type:"primary"},on:{click:function(t){e.submiteImage()}}},[e._v(e._s(e.saveButtonTitle))])],1)],1)},[],!1,null,"923b6484",null);r.options.__file="EditImage.vue";t.a=r.exports},"0H2c":function(e,t,i){"use strict";var s=i("T45K");i.n(s).a},"6XJn":function(e,t,i){},"9GgJ":function(e,t,i){"use strict";var s={name:"XrHeader",components:{},props:{iconClass:[String,Array],iconColor:String,label:String,showSearch:{type:Boolean,default:!1},searchIconType:{type:String,default:"text"},placeholder:{type:String,default:"请输入内容"},ftTop:{type:String,default:"15px"},content:[String,Number],inputAttr:{type:Object,default:function(){}}},data:function(){return{search:""}},computed:{},watch:{content:{handler:function(){this.search!=this.content&&(this.search=this.content)},immediate:!0}},mounted:function(){},beforeDestroy:function(){},methods:{inputChange:function(){this.$emit("update:content",this.search)},searchClick:function(){this.$emit("search",this.search)}}},a=(i("zIzm"),i("KHd+")),r=Object(a.a)(s,function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("flexbox",{staticClass:"xr-header"},[e.iconClass?i("div",{staticClass:"xr-header__icon",style:{backgroundColor:e.iconColor}},[i("i",{class:e.iconClass})]):e._e(),e._v(" "),i("div",{staticClass:"xr-header__label"},[e.$slots.label?e._t("label"):[e._v(e._s(e.label))]],2),e._v(" "),e.showSearch?i("el-input",e._b({staticClass:"xr-header__search",class:{"is-text":"text"===e.searchIconType},style:{"margin-top":e.ftTop},attrs:{placeholder:e.placeholder},on:{input:e.inputChange},nativeOn:{keyup:function(t){return"button"in t||!e._k(t.keyCode,"enter",13,t.key,"Enter")?e.searchClick(t):null}},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}},"el-input",e.inputAttr,!1),["text"===e.searchIconType?i("el-button",{attrs:{slot:"append",type:"primary"},nativeOn:{click:function(t){return e.searchClick(t)}},slot:"append"},[e._v("搜索")]):i("el-button",{attrs:{slot:"append",icon:"el-icon-search"},nativeOn:{click:function(t){return e.searchClick(t)}},slot:"append"})],1):e._e(),e._v(" "),i("div",{staticClass:"xr-header__ft",style:{top:e.ftTop}},[e._t("ft")],2)],1)},[],!1,null,"7bba770c",null);r.options.__file="index.vue";t.a=r.exports},"9OqV":function(e,t,i){"use strict";i.r(t);var s=i("EJiy"),a=i.n(s),r=i("QbLZ"),n=i.n(r),o=i("3qbY"),l=i("UxrY"),c=i.n(l),d=i("+H+P"),u=i("9GgJ"),h=i("L2JU"),p={name:"SystemConfig",components:{EditImage:d.a,XrHeader:u.a,RadialProgressBar:c.a},data:function(){return{loading:!1,showEditImage:!1,editImage:null,editFile:null,systemName:"",systemImage:"",editedImage:null}},computed:n()({},Object(h.b)(["manage"]),{systemSaveAuth:function(){return this.manage&&this.manage.system&&this.manage.system.update}}),created:function(){this.getDetail()},methods:{fileUpload:function(e){var t=new FileReader,i=this;t.onload=function(t){var s=void 0;s="object"===a()(t.target.result)?window.URL.createObjectURL(new Blob([t.target.result])):t.target.result,i.editImage=s,i.editFile=e.file,i.showEditImage=!0},t.readAsDataURL(e.file)},deleteSystemImage:function(){this.systemImage="",this.editedImage=null},getDetail:function(){var e=this;this.loading=!0,this.$store.dispatch("SystemLogoAndName").then(function(t){e.loading=!1,e.systemName=t.data.companyName?t.data.companyName:"",e.systemImage=t.data.companyLogo}).catch(function(){e.loading=!1})},submiteImage:function(e){this.editedImage=e,this.systemImage=e.image},save:function(){var e=this;if(this.systemName){this.loading=!0;var t=new FormData;t.append("name",this.systemName),this.editedImage?t.append("file",this.editedImage.blob,this.editedImage.file.name):this.systemImage||t.append("company_logo",""),Object(o.b)(t).then(function(t){e.loading=!1,e.$message.success("操作成功"),e.getDetail()}).catch(function(){e.loading=!1})}else this.$message.error("企业名称不能为空")}}},m=(i("urPV"),i("KHd+")),g=Object(m.a)(p,function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("flexbox",{staticClass:"main",attrs:{direction:"column",align:"stretch"}},[i("xr-header",{attrs:{"icon-class":"wk wk-enterprise","icon-color":"#2362FB",label:"企业首页"}}),e._v(" "),i("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"body"},[i("div",{staticClass:"section"},[i("div",{staticClass:"section-title"},[e._v("企业基本信息设置")]),e._v(" "),i("div",{staticClass:"section-content"},[i("div",{staticClass:"name"},[e._v("企业名称")]),e._v(" "),i("el-input",{attrs:{maxlength:50},model:{value:e.systemName,callback:function(t){e.systemName=t},expression:"systemName"}})],1),e._v(" "),i("div",{staticClass:"section-content"},[i("div",{staticClass:"name"},[e._v("企业logo")]),e._v(" "),e.systemImage?i("div",{staticClass:"upload-show"},[i("img",{directives:[{name:"src",rawName:"v-src",value:e.systemImage,expression:"systemImage"}]}),e._v(" "),i("i",{staticClass:"el-icon-remove icon-delete",on:{click:e.deleteSystemImage}})]):i("el-upload",{staticClass:"upload",attrs:{"show-file-list":!1,"http-request":e.fileUpload,drag:"",action:"http",accept:"image/png, image/jpeg, image/gif, image/jpg"}},[i("i",{staticClass:"el-icon-plus uploader-icon"})])],1)]),e._v(" "),e.systemSaveAuth?i("el-button",{staticClass:"save-button",attrs:{type:"primary"},on:{click:e.save}},[e._v("保存")]):e._e()],1),e._v(" "),i("edit-image",{attrs:{"fixed-number":[15,4],show:e.showEditImage,image:e.editImage,file:e.editFile,title:"编辑企业logo","preview-width":"150px","preview-height":"40px","preview-radius":"0",width:"550px","save-button-title":"确定"},on:{save:e.submiteImage,close:function(t){e.showEditImage=!1}}})],1)},[],!1,null,"7a84c298",null);g.options.__file="index.vue";t.default=g.exports},T45K:function(e,t,i){},UxrY:function(e,t,i){e.exports=i("u1YS")},aR9t:function(e,t,i){},hb9p:function(e,t,i){"use strict";var s=i("6XJn");i.n(s).a},ihDC:function(e,t,i){},u1YS:function(e,t,i){"use strict";i.r(t);var s={props:{diameter:{type:Number,required:!1,default:200},totalSteps:{type:Number,required:!0,default:10},completedSteps:{type:Number,required:!0,default:0},startColor:{type:String,required:!1,default:"#bbff42"},stopColor:{type:String,required:!1,default:"#429321"},strokeWidth:{type:Number,required:!1,default:10},animateSpeed:{type:Number,required:!1,default:1e3},innerStrokeColor:{type:String,required:!1,default:"#323232"},fps:{type:Number,required:!1,default:60},timingFunc:{type:String,required:!1,default:"linear"}},data:()=>({gradient:{fx:.99,fy:.5,cx:.5,cy:.5,r:.65},gradientAnimation:null,currentAngle:0,strokeDashoffset:0}),computed:{radius(){return this.diameter/2},circumference(){return Math.PI*this.innerCircleDiameter},stepSize(){return 0===this.totalSteps?0:100/this.totalSteps},finishedPercentage(){return this.stepSize*this.completedSteps},circleSlice(){return 2*Math.PI/this.totalSteps},animateSlice(){return this.circleSlice/this.totalPoints},innerCircleDiameter(){return this.diameter-2*this.strokeWidth},innerCircleRadius(){return this.innerCircleDiameter/2},totalPoints(){return this.animateSpeed/this.animationIncrements},animationIncrements(){return 1e3/this.fps},hasGradient(){return this.startColor!==this.stopColor},containerStyle(){return{height:`${this.diameter}px`,width:`${this.diameter}px`}},progressStyle(){return{height:`${this.diameter}px`,width:`${this.diameter}px`,strokeWidth:`${this.strokeWidth}px`,strokeDashoffset:this.strokeDashoffset,transition:`stroke-dashoffset ${this.animateSpeed}ms ${this.timingFunc}`}},strokeStyle(){return{height:`${this.diameter}px`,width:`${this.diameter}px`,strokeWidth:`${this.strokeWidth}px`}},innerCircleStyle(){return{width:`${this.innerCircleDiameter}px`}}},methods:{getStopPointsOfCircle(e){const t=[];for(let i=0;i<e;i++){const e=this.circleSlice*i;t.push(this.getPointOfCircle(e))}return t},getPointOfCircle:e=>({x:.5+.5*Math.cos(e),y:.5+.5*Math.sin(e)}),gotoPoint(){const e=this.getPointOfCircle(this.currentAngle);this.gradient.fx=e.x,this.gradient.fy=e.y},changeProgress({isAnimate:e=!0}){if(this.strokeDashoffset=(100-this.finishedPercentage)/100*this.circumference,this.gradientAnimation&&clearInterval(this.gradientAnimation),!e)return void this.gotoNextStep();const t=(this.completedSteps-1)*this.circleSlice;let i=(this.currentAngle-t)/this.animateSlice;const s=Math.abs(i-this.totalPoints)/this.totalPoints,a=i<this.totalPoints;this.gradientAnimation=setInterval(()=>{a&&i>=this.totalPoints||!a&&i<this.totalPoints?clearInterval(this.gradientAnimation):(this.currentAngle=t+this.animateSlice*i,this.gotoPoint(),i+=a?s:-s)},this.animationIncrements)},gotoNextStep(){this.currentAngle=this.completedSteps*this.circleSlice,this.gotoPoint()}},watch:{totalSteps(){this.changeProgress({isAnimate:!0})},completedSteps(){this.changeProgress({isAnimate:!0})},diameter(){this.changeProgress({isAnimate:!0})},strokeWidth(){this.changeProgress({isAnimate:!0})}},created(){this.changeProgress({isAnimate:!1})}},a=(i("hb9p"),i("KHd+")),r=Object(a.a)(s,function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"radial-progress-container",style:e.containerStyle},[i("div",{staticClass:"radial-progress-inner",style:e.innerCircleStyle},[e._t("default")],2),e._v(" "),i("svg",{staticClass:"radial-progress-bar",attrs:{width:e.diameter,height:e.diameter,version:"1.1",xmlns:"http://www.w3.org/2000/svg"}},[i("defs",[i("radialGradient",{attrs:{id:"radial-gradient"+e._uid,fx:e.gradient.fx,fy:e.gradient.fy,cx:e.gradient.cx,cy:e.gradient.cy,r:e.gradient.r}},[i("stop",{attrs:{offset:"30%","stop-color":e.startColor}}),e._v(" "),i("stop",{attrs:{offset:"100%","stop-color":e.stopColor}})],1)],1),e._v(" "),i("circle",{style:e.strokeStyle,attrs:{r:e.innerCircleRadius,cx:e.radius,cy:e.radius,fill:"transparent",stroke:e.innerStrokeColor,"stroke-dasharray":e.circumference,"stroke-dashoffset":"0","stroke-linecap":"round"}}),e._v(" "),i("circle",{style:e.progressStyle,attrs:{transform:"rotate(270, "+e.radius+","+e.radius+")",r:e.innerCircleRadius,cx:e.radius,cy:e.radius,fill:"transparent",stroke:"url(#radial-gradient"+e._uid+")","stroke-dasharray":e.circumference,"stroke-dashoffset":e.circumference,"stroke-linecap":"round"}})])])},[],!1,null,null,null);r.options.__file="RadialProgressBar.vue";t.default=r.exports},urPV:function(e,t,i){"use strict";var s=i("aR9t");i.n(s).a},zIzm:function(e,t,i){"use strict";var s=i("ihDC");i.n(s).a}}]);