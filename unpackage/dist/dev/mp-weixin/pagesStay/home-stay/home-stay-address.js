(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pagesStay/home-stay/home-stay-address"],{407:function(e,t,n){"use strict";(function(e){n(5);r(n(4));var t=r(n(408));function r(e){return e&&e.__esModule?e:{default:e}}wx.__webpack_require_UNI_MP_PLUGIN__=n,e(t.default)}).call(this,n(1)["createPage"])},408:function(e,t,n){"use strict";n.r(t);var r=n(409),a=n(411);for(var o in a)"default"!==o&&function(e){n.d(t,e,(function(){return a[e]}))}(o);n(413);var i,s=n(11),c=Object(s["default"])(a["default"],r["render"],r["staticRenderFns"],!1,null,"681663b6",null,!1,r["components"],i);c.options.__file="pagesStay/home-stay/home-stay-address.vue",t["default"]=c.exports},409:function(e,t,n){"use strict";n.r(t);var r=n(410);n.d(t,"render",(function(){return r["render"]})),n.d(t,"staticRenderFns",(function(){return r["staticRenderFns"]})),n.d(t,"recyclableRender",(function(){return r["recyclableRender"]})),n.d(t,"components",(function(){return r["components"]}))},410:function(e,t,n){"use strict";var r;n.r(t),n.d(t,"render",(function(){return a})),n.d(t,"staticRenderFns",(function(){return i})),n.d(t,"recyclableRender",(function(){return o})),n.d(t,"components",(function(){return r}));try{r={uniForms:function(){return Promise.all([n.e("common/vendor"),n.e("uni_modules/uni-forms/components/uni-forms/uni-forms")]).then(n.bind(null,580))},uniFormsItem:function(){return n.e("uni_modules/uni-forms/components/uni-forms-item/uni-forms-item").then(n.bind(null,588))},uniEasyinput:function(){return n.e("uni_modules/uni-easyinput/components/uni-easyinput/uni-easyinput").then(n.bind(null,602))},uniPopup:function(){return n.e("uni_modules/uni-popup/components/uni-popup/uni-popup").then(n.bind(null,506))}}}catch(s){if(-1===s.message.indexOf("Cannot find module")||-1===s.message.indexOf(".vue"))throw s;console.error(s.message),console.error("1. 排查组件名称拼写是否正确"),console.error("2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"),console.error("3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件")}var a=function(){var e=this,t=e.$createElement;e._self._c},o=!1,i=[];a._withStripped=!0},411:function(e,t,n){"use strict";n.r(t);var r=n(412),a=n.n(r);for(var o in r)"default"!==o&&function(e){n.d(t,e,(function(){return r[e]}))}(o);t["default"]=a.a},412:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=o(n(16)),a=n(15);function o(e){return e&&e.__esModule?e:{default:e}}function i(e,t,n,r,a,o,i){try{var s=e[o](i),c=s.value}catch(u){return void n(u)}s.done?t(c):Promise.resolve(c).then(r,a)}function s(e){return function(){var t=this,n=arguments;return new Promise((function(r,a){var o=e.apply(t,n);function s(e){i(o,r,a,s,c,"next",e)}function c(e){i(o,r,a,s,c,"throw",e)}s(void 0)}))}}var c={data:function(){return{rules1:{passengerName:{rules:[{required:!0,errorMessage:"请输入姓名"}]},passengerIdCard:{rules:[{required:!0,errorMessage:"请输入身份证号"}]},phone:{rules:[{required:!0,errorMessage:"请输入手机号码"}]}},rules2:{name:{rules:[{required:!0,errorMessage:"请输入姓名"}]},mobile:{rules:[{required:!0,errorMessage:"请输入手机号码"}]},address:{rules:[{required:!0,errorMessage:"请输入详细地址"}]},showRegion:{rules:[{required:!0,errorMessage:"请选择地区"}]}},id:"",goodsId:"",formData1:{passengerName:"",passengerIdCard:"",phone:"",id:""},formData:{name:"",mobile:"",address:"",areaId:"",cityId:"",provinceId:0,userId:"",showRegion:""},region:[0,0,0],provinceList:[],cityList:[],areaList:[],showRegion:"",from:""}},onLoad:function(t){this.formData.userId=(0,a.getStorage)("wechat_userInfo").userId;var n=this,r=this.getOpenerEventChannel();r.on("sendParams",(function(t){n.from=t.from,n.goodsId=t.goodsId,"homeStay"==t.from?e.setNavigationBarTitle({title:"入住信息"}):n.getProvince(),t.id&&(n.id=t.id,"homeStay"==t.from?n.formData1=t.item:n.getDetail())}))},methods:{open:function(){this.$refs.popup.open("bottom")},del:function(){var t=this;return s(r.default.mark((function n(){var o;return r.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.prev=0,t.$data.formData,o=t,n.next=5,t.$http("".concat(t.$API.postAddressDelete,"?userId=").concat(t.formData.userId),t.formData,"POST");case 5:n.sent,(0,a.showToast)("删除成功~"),setTimeout((function(){e.navigateBack();var t=o.getOpenerEventChannel();t.emit("getParams",{isReload:!0})}),1500),n.next=13;break;case 10:n.prev=10,n.t0=n["catch"](0),console.log(n.t0);case 13:case"end":return n.stop()}}),n,null,[[0,10]])})))()},confirm:function(){this.formData.provinceId=this.provinceList[this.region[0]].id,this.formData.cityId=this.cityList[this.region[1]].id,this.formData.areaId=this.areaList[this.region[2]].id,this.showRegion="".concat(this.provinceList[this.region[0]].name,"-").concat(this.cityList[this.region[1]].name,"-").concat(this.areaList[this.region[2]].name),this.formData.showRegion=this.showRegion,this.cancel()},cancel:function(){this.$refs.popup.close()},bindChange:function(e){var t=e.detail.value;this.region=t,this.formData.cityId!=this.provinceList[t[0]].id&&(this.formData.cityId=this.provinceList[t[0]].id,this.getCity()),this.formData.areaId!=this.cityList[t[1]].id&&(this.formData.areaId=this.cityList[t[1]].id,this.getArea())},save:function(){var t=this;this.$refs.form.validate().then(function(){var n=s(r.default.mark((function n(a){var o,i,s,c;return r.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(n.prev=0,o={},delete o.showRegion,i=t.$data,i.formData,s=i.formData1,c=i.from,"homeStay"!=c){n.next=11;break}return o=JSON.parse(JSON.stringify(s)),n.next=8,t.$http("".concat(t.$API.postPassengerUpdate),o,"POST");case 8:n.sent,n.next=14;break;case 11:return n.next=13,t.$http("".concat(t.$API.postAddressSave),o,"POST");case 13:n.sent;case 14:e.showToast({title:"添加成功~"}),setTimeout((function(){e.navigateBack();var n=t.getOpenerEventChannel();n.emit("getParams",{isReload:!0})}),1500),n.next=21;break;case 18:n.prev=18,n.t0=n["catch"](0),e.showToast({title:n.t0.errmsg});case 21:case"end":return n.stop()}}),n,null,[[0,18]])})));return function(e){return n.apply(this,arguments)}}()).catch((function(e){console.log("表单错误信息：",e)}))},getDetail:function(){var e=this;return s(r.default.mark((function t(){var n,a,o;return r.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,n=e.formData,n.id,a=n.userId,t.next=4,e.$http("".concat(e.$API.getAddressDetail,"?useId=").concat(a),e.formData);case 4:o=t.sent,e.formData=o.data,e.formData.showRegion="".concat(e.formData.province,"-").concat(e.formData.city,"-").concat(e.formData.area),e.showRegion=e.formData.showRegion,t.next=12;break;case 10:t.prev=10,t.t0=t["catch"](0);case 12:case"end":return t.stop()}}),t,null,[[0,10]])})))()},getProvince:function(){var e=this;return s(r.default.mark((function t(){var n,a;return r.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,n=e.formData.provinceId,t.next=4,e.$http("".concat(e.$API.postSelectAddress,"?parentId=").concat(n),{},"POST");case 4:a=t.sent,e.provinceList=a.data,e.formData.cityId=a.data[0].id,e.getCity(),t.next=13;break;case 10:t.prev=10,t.t0=t["catch"](0),console.log(t.t0);case 13:case"end":return t.stop()}}),t,null,[[0,10]])})))()},getCity:function(){var e=this;return s(r.default.mark((function t(){var n;return r.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,e.formData.provinceId,t.next=4,e.$http("".concat(e.$API.postSelectAddress,"?parentId=").concat(e.formData.cityId),{},"POST");case 4:n=t.sent,e.cityList=n.data,e.formData.areaId=n.data[0].id,e.getArea(),t.next=12;break;case 10:t.prev=10,t.t0=t["catch"](0);case 12:case"end":return t.stop()}}),t,null,[[0,10]])})))()},getArea:function(){var e=this;return s(r.default.mark((function t(){var n;return r.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,e.formData.provinceId,t.next=4,e.$http("".concat(e.$API.postSelectAddress,"?parentId=").concat(e.formData.areaId),{},"POST");case 4:n=t.sent,e.areaList=n.data,t.next=10;break;case 8:t.prev=8,t.t0=t["catch"](0);case 10:case"end":return t.stop()}}),t,null,[[0,8]])})))()}}};t.default=c}).call(this,n(1)["default"])},413:function(e,t,n){"use strict";n.r(t);var r=n(414),a=n.n(r);for(var o in r)"default"!==o&&function(e){n.d(t,e,(function(){return r[e]}))}(o);t["default"]=a.a},414:function(e,t,n){}},[[407,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pagesStay/home-stay/home-stay-address.js.map