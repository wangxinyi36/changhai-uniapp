(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pagesStay/home-stay/home-stay-address"],{419:function(e,t,n){"use strict";(function(e){n(5);r(n(4));var t=r(n(420));function r(e){return e&&e.__esModule?e:{default:e}}wx.__webpack_require_UNI_MP_PLUGIN__=n,e(t.default)}).call(this,n(1)["createPage"])},420:function(e,t,n){"use strict";n.r(t);var r=n(421),a=n(423);for(var o in a)"default"!==o&&function(e){n.d(t,e,(function(){return a[e]}))}(o);n(425);var s,i=n(11),c=Object(i["default"])(a["default"],r["render"],r["staticRenderFns"],!1,null,"681663b6",null,!1,r["components"],s);c.options.__file="pagesStay/home-stay/home-stay-address.vue",t["default"]=c.exports},421:function(e,t,n){"use strict";n.r(t);var r=n(422);n.d(t,"render",(function(){return r["render"]})),n.d(t,"staticRenderFns",(function(){return r["staticRenderFns"]})),n.d(t,"recyclableRender",(function(){return r["recyclableRender"]})),n.d(t,"components",(function(){return r["components"]}))},422:function(e,t,n){"use strict";var r;n.r(t),n.d(t,"render",(function(){return a})),n.d(t,"staticRenderFns",(function(){return s})),n.d(t,"recyclableRender",(function(){return o})),n.d(t,"components",(function(){return r}));try{r={uniForms:function(){return Promise.all([n.e("common/vendor"),n.e("uni_modules/uni-forms/components/uni-forms/uni-forms")]).then(n.bind(null,593))},uniFormsItem:function(){return n.e("uni_modules/uni-forms/components/uni-forms-item/uni-forms-item").then(n.bind(null,601))},uniEasyinput:function(){return n.e("uni_modules/uni-easyinput/components/uni-easyinput/uni-easyinput").then(n.bind(null,615))},uniPopup:function(){return n.e("uni_modules/uni-popup/components/uni-popup/uni-popup").then(n.bind(null,518))}}}catch(i){if(-1===i.message.indexOf("Cannot find module")||-1===i.message.indexOf(".vue"))throw i;console.error(i.message),console.error("1. 排查组件名称拼写是否正确"),console.error("2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"),console.error("3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件")}var a=function(){var e=this,t=e.$createElement;e._self._c},o=!1,s=[];a._withStripped=!0},423:function(e,t,n){"use strict";n.r(t);var r=n(424),a=n.n(r);for(var o in r)"default"!==o&&function(e){n.d(t,e,(function(){return r[e]}))}(o);t["default"]=a.a},424:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=o(n(16)),a=n(15);function o(e){return e&&e.__esModule?e:{default:e}}function s(e,t,n,r,a,o,s){try{var i=e[o](s),c=i.value}catch(u){return void n(u)}i.done?t(c):Promise.resolve(c).then(r,a)}function i(e){return function(){var t=this,n=arguments;return new Promise((function(r,a){var o=e.apply(t,n);function i(e){s(o,r,a,i,c,"next",e)}function c(e){s(o,r,a,i,c,"throw",e)}i(void 0)}))}}var c={data:function(){return{rules1:{passengerName:{rules:[{required:!0,errorMessage:"请输入姓名"}]},passengerIdCard:{rules:[{required:!0,errorMessage:"请输入身份证号"}]},phone:{rules:[{required:!0,errorMessage:"请输入手机号码"}]}},rules2:{name:{rules:[{required:!0,errorMessage:"请输入姓名"}]},mobile:{rules:[{required:!0,errorMessage:"请输入手机号码"}]},address:{rules:[{required:!0,errorMessage:"请输入详细地址"}]},showRegion:{rules:[{required:!0,errorMessage:"请选择地区"}]}},id:"",goodsId:"",formData1:{passengerName:"",passengerIdCard:"",phone:"",id:""},formData:{name:"",mobile:"",address:"",areaId:"",cityId:"",provinceId:0,userId:"",showRegion:""},region:[0,0,0],provinceList:[],cityList:[],areaList:[],showRegion:"",from:""}},onLoad:function(t){this.formData.userId=(0,a.getStorage)("wechat_userInfo").userId;var n=this,r=this.getOpenerEventChannel();r.on("sendParams",(function(t){n.from=t.from,n.goodsId=t.goodsId||"","homeStay"==t.from?e.setNavigationBarTitle({title:"入住信息"}):n.getProvince(),t.id&&(n.id=t.id,"homeStay"==t.from?n.formData1=t.item:n.getDetail())}))},methods:{open:function(){this.$refs.popup.open("bottom")},del:function(){var t=this;return i(r.default.mark((function n(){var o,s,i,c;return r.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(n.prev=0,o=t,s=t.$data,s.formData,i=s.formData1,c=s.from,"homeStay"!=c){n.next=10;break}return n.next=6,t.$http(t.$API.getPassengerDelete,{id:i.id});case 6:n.sent,(0,a.showToast)("删除成功~"),n.next=14;break;case 10:return n.next=12,t.$http("".concat(t.$API.postAddressDelete,"?userId=").concat(t.formData.userId),t.formData,"POST");case 12:n.sent,(0,a.showToast)("删除成功~");case 14:setTimeout((function(){e.navigateBack();var t=o.getOpenerEventChannel();t.emit("getParams",{isReload:!0})}),1500),n.next=20;break;case 17:n.prev=17,n.t0=n["catch"](0),console.log(n.t0);case 20:case"end":return n.stop()}}),n,null,[[0,17]])})))()},confirm:function(){this.formData.provinceId=this.provinceList[this.region[0]].id,this.formData.cityId=this.cityList[this.region[1]].id,this.formData.areaId=this.areaList[this.region[2]].id,this.showRegion="".concat(this.provinceList[this.region[0]].name,"-").concat(this.cityList[this.region[1]].name,"-").concat(this.areaList[this.region[2]].name),this.formData.showRegion=this.showRegion,this.cancel()},cancel:function(){this.$refs.popup.close()},bindChange:function(e){var t=e.detail.value;this.region=t,this.formData.cityId!=this.provinceList[t[0]].id&&(this.formData.cityId=this.provinceList[t[0]].id,this.getCity()),this.formData.areaId!=this.cityList[t[1]].id&&(this.formData.areaId=this.cityList[t[1]].id,this.getArea())},save:function(){var t=this;this.$refs.form.validate().then(function(){var n=i(r.default.mark((function n(o){var s,i,c,u,d,f,l,p,h;return r.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(n.prev=0,s=t.$data,i=s.formData,c=s.formData1,u=s.from,d=s.id,f={},"homeStay"!=u){n.next=24;break}if(f=JSON.parse(JSON.stringify(c)),!d){n.next=15;break}return n.next=8,t.$http("".concat(t.$API.postPassengerUpdate),f,"POST");case 8:if(l=n.sent,0==l.errno){n.next=12;break}return(0,a.showToast)(l.errmsg),n.abrupt("return");case 12:(0,a.showToast)("添加成功~"),n.next=22;break;case 15:return n.next=17,t.$http("".concat(t.$API.postPassengerCreate),f,"POST");case 17:if(p=n.sent,0==p.errno){n.next=21;break}return(0,a.showToast)(p.errmsg),n.abrupt("return");case 21:(0,a.showToast)("编辑成功~");case 22:n.next=33;break;case 24:return f=JSON.parse(JSON.stringify(i)),delete f.showRegion,n.next=28,t.$http("".concat(t.$API.postAddressSave),f,"POST");case 28:if(h=n.sent,0==h.errno){n.next=32;break}return(0,a.showToast)(h.errmsg),n.abrupt("return");case 32:(0,a.showToast)(d?"编辑成功~":"添加成功~");case 33:setTimeout((function(){e.navigateBack();var n=t.getOpenerEventChannel();n.emit("getParams",{isReload:!0})}),1500),n.next=39;break;case 36:n.prev=36,n.t0=n["catch"](0),e.showToast({title:n.t0.errmsg});case 39:case"end":return n.stop()}}),n,null,[[0,36]])})));return function(e){return n.apply(this,arguments)}}()).catch((function(e){console.log("表单错误信息：",e)}))},getDetail:function(){var e=this;return i(r.default.mark((function t(){var n,a,o;return r.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,n=e.formData,n.id,a=n.userId,t.next=4,e.$http("".concat(e.$API.getAddressDetail,"?useId=").concat(a),e.formData);case 4:o=t.sent,e.formData=o.data,e.formData.showRegion="".concat(e.formData.province,"-").concat(e.formData.city,"-").concat(e.formData.area),e.showRegion=e.formData.showRegion,t.next=12;break;case 10:t.prev=10,t.t0=t["catch"](0);case 12:case"end":return t.stop()}}),t,null,[[0,10]])})))()},getProvince:function(){var e=this;return i(r.default.mark((function t(){var n,a;return r.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,n=e.formData.provinceId,t.next=4,e.$http("".concat(e.$API.postSelectAddress,"?parentId=").concat(n),{},"POST");case 4:a=t.sent,e.provinceList=a.data,e.formData.cityId=a.data[0].id,e.getCity(),t.next=13;break;case 10:t.prev=10,t.t0=t["catch"](0),console.log(t.t0);case 13:case"end":return t.stop()}}),t,null,[[0,10]])})))()},getCity:function(){var e=this;return i(r.default.mark((function t(){var n;return r.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,e.formData.provinceId,t.next=4,e.$http("".concat(e.$API.postSelectAddress,"?parentId=").concat(e.formData.cityId),{},"POST");case 4:n=t.sent,e.cityList=n.data,e.formData.areaId=n.data[0].id,e.getArea(),t.next=12;break;case 10:t.prev=10,t.t0=t["catch"](0);case 12:case"end":return t.stop()}}),t,null,[[0,10]])})))()},getArea:function(){var e=this;return i(r.default.mark((function t(){var n;return r.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,e.formData.provinceId,t.next=4,e.$http("".concat(e.$API.postSelectAddress,"?parentId=").concat(e.formData.areaId),{},"POST");case 4:n=t.sent,e.areaList=n.data,t.next=10;break;case 8:t.prev=8,t.t0=t["catch"](0);case 10:case"end":return t.stop()}}),t,null,[[0,8]])})))()}}};t.default=c}).call(this,n(1)["default"])},425:function(e,t,n){"use strict";n.r(t);var r=n(426),a=n.n(r);for(var o in r)"default"!==o&&function(e){n.d(t,e,(function(){return r[e]}))}(o);t["default"]=a.a},426:function(e,t,n){}},[[419,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pagesStay/home-stay/home-stay-address.js.map