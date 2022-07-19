(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/home/landing/land-form"],{128:function(e,n,r){"use strict";(function(e){r(5);t(r(4));var n=t(r(129));function t(e){return e&&e.__esModule?e:{default:e}}wx.__webpack_require_UNI_MP_PLUGIN__=r,e(n.default)}).call(this,r(1)["createPage"])},129:function(e,n,r){"use strict";r.r(n);var t=r(130),u=r(132);for(var i in u)"default"!==i&&function(e){r.d(n,e,(function(){return u[e]}))}(i);r(135);var s,o=r(11),a=Object(o["default"])(u["default"],t["render"],t["staticRenderFns"],!1,null,"67737612",null,!1,t["components"],s);a.options.__file="pages/home/landing/land-form.vue",n["default"]=a.exports},130:function(e,n,r){"use strict";r.r(n);var t=r(131);r.d(n,"render",(function(){return t["render"]})),r.d(n,"staticRenderFns",(function(){return t["staticRenderFns"]})),r.d(n,"recyclableRender",(function(){return t["recyclableRender"]})),r.d(n,"components",(function(){return t["components"]}))},131:function(e,n,r){"use strict";var t;r.r(n),r.d(n,"render",(function(){return u})),r.d(n,"staticRenderFns",(function(){return s})),r.d(n,"recyclableRender",(function(){return i})),r.d(n,"components",(function(){return t}));try{t={uniForms:function(){return Promise.all([r.e("common/vendor"),r.e("uni_modules/uni-forms/components/uni-forms/uni-forms")]).then(r.bind(null,557))},uniFormsItem:function(){return r.e("uni_modules/uni-forms/components/uni-forms-item/uni-forms-item").then(r.bind(null,565))},uniDataCheckbox:function(){return Promise.all([r.e("common/vendor"),r.e("uni_modules/uni-data-checkbox/components/uni-data-checkbox/uni-data-checkbox")]).then(r.bind(null,572))},uniEasyinput:function(){return r.e("uni_modules/uni-easyinput/components/uni-easyinput/uni-easyinput").then(r.bind(null,579))},uniFilePicker:function(){return Promise.all([r.e("common/vendor"),r.e("uni_modules/uni-file-picker/components/uni-file-picker/uni-file-picker")]).then(r.bind(null,504))},uniDatetimePicker:function(){return Promise.all([r.e("common/vendor"),r.e("uni_modules/uni-datetime-picker/components/uni-datetime-picker/uni-datetime-picker")]).then(r.bind(null,586))},uniPopup:function(){return r.e("uni_modules/uni-popup/components/uni-popup/uni-popup").then(r.bind(null,490))}}}catch(o){if(-1===o.message.indexOf("Cannot find module")||-1===o.message.indexOf(".vue"))throw o;console.error(o.message),console.error("1. 排查组件名称拼写是否正确"),console.error("2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"),console.error("3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件")}var u=function(){var e=this,n=e.$createElement;e._self._c},i=!1,s=[];u._withStripped=!0},132:function(e,n,r){"use strict";r.r(n);var t=r(133),u=r.n(t);for(var i in t)"default"!==i&&function(e){r.d(n,e,(function(){return t[e]}))}(i);n["default"]=u.a},133:function(e,n,r){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var t=o(r(16)),u=r(15),i=r(21),s=r(134);function o(e){return e&&e.__esModule?e:{default:e}}function a(e,n,r,t,u,i,s){try{var o=e[i](s),a=o.value}catch(c){return void r(c)}o.done?n(a):Promise.resolve(a).then(t,u)}function c(e){return function(){var n=this,r=arguments;return new Promise((function(t,u){var i=e.apply(n,r);function s(e){a(i,t,u,s,o,"next",e)}function o(e){a(i,t,u,s,o,"throw",e)}s(void 0)}))}}var d={data:function(){return{rules:{ifOwner:{rules:[{required:!0,errorMessage:"请选择"}]},name:{rules:[{required:!0,errorMessage:"请输入"}]},sex:{rules:[{required:!0,errorMessage:"请选择"}]},idcard:{rules:[{required:!0,errorMessage:"请输入"}]},mobile:{rules:[{required:!0,errorMessage:"请输入"}]},url:{rules:[{required:!0,errorMessage:"请上传"}]},reason:{rules:[{required:!0,errorMessage:"请输入"}]},uptime:{rules:[{required:!0,errorMessage:"请选择"},{validateFunction:function(e,n,r,t){return 19!=n.length&&t("请选择具体时间!"),!0}}]},upport:{rules:[{required:!0,errorMessage:"请输入"}]},upAddress:{rules:[{required:!0,errorMessage:"请选择"}]},upAddressDetail:{rules:[{required:!0,errorMessage:"请输入"}]},downAddress:{rules:[{required:!0,errorMessage:"请选择"}]},downAddressDetail:{rules:[{required:!0,errorMessage:"请输入"}]},trace:{rules:[{required:!0,errorMessage:"请输入"}]},unit:{rules:[{required:!0,errorMessage:"请输入"}]},profession:{rules:[{required:!0,errorMessage:"请输入"}]},ifHealth:{rules:[{required:!0,errorMessage:"请选择"}]}},dataTree:[],landFormData:{ifOwner:"",name:"",sex:"",idcard:"",mobile:"",url:[],reason:"",uptime:"",upport:"",upAddress:"",upAddressDetail:"",downAddress:"",downAddressDetail:"",trace:"",unit:"",profession:"",ifHealth:"",userId:""},owns:[{text:"本人",value:0},{text:"代填",value:1}],report:[{text:"有",value:0},{text:"无",value:1}],sexs:[{text:"男",value:0},{text:"女",value:1}],province:[],city:[],district:[],form_upAddress:[0,0,0],land_address:s.COMMON_ADDRESS,land_downAddress:[0],wechat_userInfo:{}}},onLoad:function(){this.getProvince(),this.wechat_userInfo=(0,u.getStorage)("wechat_userInfo")},onShow:function(){this.wechat_userInfo=(0,u.getStorage)("wechat_userInfo")},methods:{open:function(e){this.$refs[e].open("bottom")},cancel:function(e){this.$refs[e].close()},confirm:function(e){"popup"==e?this.landFormData.upAddress="".concat(this.province[this.form_upAddress[0]].text,"-").concat(this.city[this.form_upAddress[1]].text,"-").concat(this.district[this.form_upAddress[2]].text):"popup-one"==e&&(this.landFormData.downAddress=this.land_address[this.land_downAddress[0]].name),this.cancel(e)},select:function(e){var n=this;return c(t.default.mark((function r(){var u,s;return t.default.wrap((function(r){while(1)switch(r.prev=r.next){case 0:u=0;case 1:if(!(u<e.tempFiles.length)){r.next=15;break}return r.prev=2,r.next=5,(0,i.upload)(n.$API.postStorageCreate,e.tempFiles[u].path);case 5:s=r.sent,n.landFormData.url.push({name:e.tempFiles[u].name,extname:e.tempFiles[u].extname,url:s}),r.next=12;break;case 9:r.prev=9,r.t0=r["catch"](2),console.log("错误",r.t0);case 12:u++,r.next=1;break;case 15:case"end":return r.stop()}}),r,null,[[2,9]])})))()},deletePic:function(e){var n=this;return c(t.default.mark((function r(){var u,i;return t.default.wrap((function(r){while(1)switch(r.prev=r.next){case 0:u=n.landFormData.url,i=n.landFormData.url.findIndex((function(n){return n==e.tempFile})),u.splice(i,1),n.landFormData.url=u;case 4:case"end":return r.stop()}}),r)})))()},submit:function(n){var r=this;this.$refs[n].validate().then(function(){var n=c(t.default.mark((function n(i){var s,o;return t.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return s=JSON.parse(JSON.stringify(r.landFormData)),s.url=s.url.map((function(e){return e.url})),s.url=s.url.join(","),s.uptime=new Date(s.uptime),s.userId=r.wechat_userInfo.userId,n.next=7,r.$http(r.$API.postHealth,s,"POST");case 7:o=n.sent,0!=o.errno?(0,u.showToast)(o.errmsg):((0,u.showToast)("提交成功!"),(0,u.sendEvent)(r,{isReload:!0}),e.navigateBack());case 9:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()).catch((function(e){console.log(e),(0,u.showToast)("表单内容皆为必填项！")}))},getProvince:function(){var e=this;return c(t.default.mark((function n(){var r;return t.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,u.getRegionList)();case 3:r=n.sent,e.province=r,e.city=r[0].children,e.district=r[0].children[0].children,n.next=11;break;case 9:n.prev=9,n.t0=n["catch"](0);case 11:case"end":return n.stop()}}),n,null,[[0,9]])})))()},bindChange:function(e){var n=e.detail.value[0],r=e.detail.value[1];this.city=this.province[n].children,this.district=this.province[n].children[r].children,this.form_upAddress=e.detail.value},bindChange2:function(e){this.land_downAddress=e.detail.value}}};n.default=d}).call(this,r(1)["default"])},135:function(e,n,r){"use strict";r.r(n);var t=r(136),u=r.n(t);for(var i in t)"default"!==i&&function(e){r.d(n,e,(function(){return t[e]}))}(i);n["default"]=u.a},136:function(e,n,r){}},[[128,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/pages/home/landing/land-form.js.map