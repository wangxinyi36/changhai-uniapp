(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pagesStay/home-stay/home-stay-address"],{421:function(e,t,r){"use strict";(function(e){r(5);n(r(4));var t=n(r(422));function n(e){return e&&e.__esModule?e:{default:e}}wx.__webpack_require_UNI_MP_PLUGIN__=r,e(t.default)}).call(this,r(1)["createPage"])},422:function(e,t,r){"use strict";r.r(t);var n=r(423),a=r(425);for(var o in a)"default"!==o&&function(e){r.d(t,e,(function(){return a[e]}))}(o);r(427);var s,i=r(11),c=Object(i["default"])(a["default"],n["render"],n["staticRenderFns"],!1,null,"681663b6",null,!1,n["components"],s);c.options.__file="pagesStay/home-stay/home-stay-address.vue",t["default"]=c.exports},423:function(e,t,r){"use strict";r.r(t);var n=r(424);r.d(t,"render",(function(){return n["render"]})),r.d(t,"staticRenderFns",(function(){return n["staticRenderFns"]})),r.d(t,"recyclableRender",(function(){return n["recyclableRender"]})),r.d(t,"components",(function(){return n["components"]}))},424:function(e,t,r){"use strict";var n;r.r(t),r.d(t,"render",(function(){return a})),r.d(t,"staticRenderFns",(function(){return s})),r.d(t,"recyclableRender",(function(){return o})),r.d(t,"components",(function(){return n}));try{n={uniForms:function(){return Promise.all([r.e("common/vendor"),r.e("uni_modules/uni-forms/components/uni-forms/uni-forms")]).then(r.bind(null,603))},uniFormsItem:function(){return r.e("uni_modules/uni-forms/components/uni-forms-item/uni-forms-item").then(r.bind(null,611))},uniEasyinput:function(){return r.e("uni_modules/uni-easyinput/components/uni-easyinput/uni-easyinput").then(r.bind(null,625))},uniPopup:function(){return r.e("uni_modules/uni-popup/components/uni-popup/uni-popup").then(r.bind(null,522))}}}catch(i){if(-1===i.message.indexOf("Cannot find module")||-1===i.message.indexOf(".vue"))throw i;console.error(i.message),console.error("1. 排查组件名称拼写是否正确"),console.error("2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"),console.error("3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件")}var a=function(){var e=this,t=e.$createElement;e._self._c},o=!1,s=[];a._withStripped=!0},425:function(e,t,r){"use strict";r.r(t);var n=r(426),a=r.n(n);for(var o in n)"default"!==o&&function(e){r.d(t,e,(function(){return n[e]}))}(o);t["default"]=a.a},426:function(e,t,r){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=o(r(16)),a=r(15);function o(e){return e&&e.__esModule?e:{default:e}}function s(e,t,r,n,a,o,s){try{var i=e[o](s),c=i.value}catch(u){return void r(u)}i.done?t(c):Promise.resolve(c).then(n,a)}function i(e){return function(){var t=this,r=arguments;return new Promise((function(n,a){var o=e.apply(t,r);function i(e){s(o,n,a,i,c,"next",e)}function c(e){s(o,n,a,i,c,"throw",e)}i(void 0)}))}}var c={data:function(){return{rules1:{passengerName:{rules:[{required:!0,errorMessage:"请输入姓名"}]},passengerIdCard:{rules:[{required:!0,errorMessage:"请输入身份证号"}]},phone:{rules:[{required:!0,errorMessage:"请输入手机号码"}]}},rules2:{name:{rules:[{required:!0,errorMessage:"请输入姓名"}]},mobile:{rules:[{required:!0,errorMessage:"请输入手机号码"}]},address:{rules:[{required:!0,errorMessage:"请输入详细地址"}]},showRegion:{rules:[{required:!0,errorMessage:"请选择地区"}]}},id:"",goodsId:"",formData1:{passengerName:"",passengerIdCard:"",phone:"",id:""},formData:{name:"",mobile:"",address:"",areaId:"",cityId:"",provinceId:0,userId:"",showRegion:""},region:[0,0,0],provinceList:[],cityList:[],areaList:[],showRegion:"",from:""}},onLoad:function(t){this.formData.userId=(0,a.getStorage)("wechat_userInfo").userId;var r=this,n=this.getOpenerEventChannel();n.on("sendParams",(function(t){r.from=t.from,r.goodsId=t.goodsId||"","homeStay"==t.from?e.setNavigationBarTitle({title:"入住信息"}):"tastyFood"==t.from?e.setNavigationBarTitle({title:"订餐人信息"}):r.getProvince(),t.id&&(r.id=t.id,"homeStay"==t.from||"tastyFood"==t.from?r.formData1=t.item:(r.formData=t.item,r.getDetail()))}))},methods:{open:function(){this.$refs.popup.open("bottom")},del:function(){var t=this;return i(n.default.mark((function r(){var o,s,i,c;return n.default.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(r.prev=0,o=t,s=t.$data,s.formData,i=s.formData1,c=s.from,"homeStay"!=c){r.next=10;break}return r.next=6,t.$http(t.$API.getPassengerDelete,{id:i.id});case 6:r.sent,(0,a.showToast)("删除成功~"),r.next=14;break;case 10:return r.next=12,t.$http("".concat(t.$API.postAddressDelete,"?userId=").concat(t.formData.userId),t.formData,"POST");case 12:r.sent,(0,a.showToast)("删除成功~");case 14:setTimeout((function(){e.navigateBack();var t=o.getOpenerEventChannel();t.emit("getParams",{isReload:!0})}),1500),r.next=20;break;case 17:r.prev=17,r.t0=r["catch"](0),console.log(r.t0);case 20:case"end":return r.stop()}}),r,null,[[0,17]])})))()},confirm:function(){this.formData.provinceId=this.provinceList[this.region[0]].id,this.formData.cityId=this.cityList[this.region[1]].id,this.formData.areaId=this.areaList[this.region[2]].id,this.showRegion="".concat(this.provinceList[this.region[0]].name,"-").concat(this.cityList[this.region[1]].name,"-").concat(this.areaList[this.region[2]].name),this.formData.showRegion=this.showRegion,this.cancel()},cancel:function(){this.$refs.popup.close()},bindChange:function(e){var t=e.detail.value;this.region=t,this.formData.cityId!=this.provinceList[t[0]].id&&(this.formData.cityId=this.provinceList[t[0]].id,this.getCity()),this.formData.areaId!=this.cityList[t[1]].id&&(this.formData.areaId=this.cityList[t[1]].id,this.getArea())},save:function(){var t=this;this.$refs.form.validate().then(function(){var r=i(n.default.mark((function r(o){var s,i,c,u,d,f,l,p;return n.default.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(r.prev=0,s=t.$data,i=s.formData1,c=s.from,u=s.id,d={},"homeStay"!=c){r.next=24;break}if(d=JSON.parse(JSON.stringify(i)),!u){r.next=15;break}return r.next=8,t.$http("".concat(t.$API.postPassengerUpdate),d,"POST");case 8:if(f=r.sent,0==f.errno){r.next=12;break}return(0,a.showToast)(f.errmsg),r.abrupt("return");case 12:(0,a.showToast)("添加成功~"),r.next=22;break;case 15:return r.next=17,t.$http("".concat(t.$API.postPassengerCreate),d,"POST");case 17:if(l=r.sent,0==l.errno){r.next=21;break}return(0,a.showToast)(l.errmsg),r.abrupt("return");case 21:(0,a.showToast)("编辑成功~");case 22:r.next=33;break;case 24:return d=JSON.parse(JSON.stringify(formData)),delete d.showRegion,r.next=28,t.$http("".concat(t.$API.postAddressSave),d,"POST");case 28:if(p=r.sent,0==p.errno){r.next=32;break}return(0,a.showToast)(p.errmsg),r.abrupt("return");case 32:(0,a.showToast)(u?"编辑成功~":"添加成功~");case 33:setTimeout((function(){e.navigateBack();var r=t.getOpenerEventChannel();r.emit("getParams",{isReload:!0})}),1500),r.next=39;break;case 36:r.prev=36,r.t0=r["catch"](0),e.showToast({title:r.t0.errmsg});case 39:case"end":return r.stop()}}),r,null,[[0,36]])})));return function(e){return r.apply(this,arguments)}}()).catch((function(e){console.log("表单错误信息：",e)}))},getDetail:function(){var e=this;return i(n.default.mark((function t(){var r,a,o;return n.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,r=e.formData,r.id,a=r.userId,t.next=4,e.$http("".concat(e.$API.getAddressDetail,"?useId=").concat(a),e.formData);case 4:o=t.sent,e.formData=o.data,e.formData.showRegion="".concat(e.formData.province,"-").concat(e.formData.city,"-").concat(e.formData.area),e.showRegion=e.formData.showRegion,t.next=12;break;case 10:t.prev=10,t.t0=t["catch"](0);case 12:case"end":return t.stop()}}),t,null,[[0,10]])})))()},getProvince:function(){var e=this;return i(n.default.mark((function t(){var r,a;return n.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,r=e.formData.provinceId,t.next=4,e.$http("".concat(e.$API.postSelectAddress,"?parentId=").concat(r),{},"POST");case 4:a=t.sent,e.provinceList=a.data,e.formData.cityId=a.data[0].id,e.getCity(),t.next=13;break;case 10:t.prev=10,t.t0=t["catch"](0),console.log(t.t0);case 13:case"end":return t.stop()}}),t,null,[[0,10]])})))()},getCity:function(){var e=this;return i(n.default.mark((function t(){var r;return n.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,e.formData.provinceId,t.next=4,e.$http("".concat(e.$API.postSelectAddress,"?parentId=").concat(e.formData.cityId),{},"POST");case 4:r=t.sent,e.cityList=r.data,e.formData.areaId=r.data[0].id,e.getArea(),t.next=12;break;case 10:t.prev=10,t.t0=t["catch"](0);case 12:case"end":return t.stop()}}),t,null,[[0,10]])})))()},getArea:function(){var e=this;return i(n.default.mark((function t(){var r;return n.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,e.formData.provinceId,t.next=4,e.$http("".concat(e.$API.postSelectAddress,"?parentId=").concat(e.formData.areaId),{},"POST");case 4:r=t.sent,e.areaList=r.data,t.next=10;break;case 8:t.prev=8,t.t0=t["catch"](0);case 10:case"end":return t.stop()}}),t,null,[[0,8]])})))()}}};t.default=c}).call(this,r(1)["default"])},427:function(e,t,r){"use strict";r.r(t);var n=r(428),a=r.n(n);for(var o in n)"default"!==o&&function(e){r.d(t,e,(function(){return n[e]}))}(o);t["default"]=a.a},428:function(e,t,r){}},[[421,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pagesStay/home-stay/home-stay-address.js.map