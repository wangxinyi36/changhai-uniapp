(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/home/search/search"],{155:function(t,e,n){"use strict";(function(t){n(5);o(n(4));var e=o(n(156));function o(t){return t&&t.__esModule?t:{default:t}}wx.__webpack_require_UNI_MP_PLUGIN__=n,t(e.default)}).call(this,n(1)["createPage"])},156:function(t,e,n){"use strict";n.r(e);var o=n(157),r=n(159);for(var i in r)"default"!==i&&function(t){n.d(e,t,(function(){return r[t]}))}(i);n(161);var c,s=n(11),a=Object(s["default"])(r["default"],o["render"],o["staticRenderFns"],!1,null,"ba9e6910",null,!1,o["components"],c);a.options.__file="pages/home/search/search.vue",e["default"]=a.exports},157:function(t,e,n){"use strict";n.r(e);var o=n(158);n.d(e,"render",(function(){return o["render"]})),n.d(e,"staticRenderFns",(function(){return o["staticRenderFns"]})),n.d(e,"recyclableRender",(function(){return o["recyclableRender"]})),n.d(e,"components",(function(){return o["components"]}))},158:function(t,e,n){"use strict";var o;n.r(e),n.d(e,"render",(function(){return r})),n.d(e,"staticRenderFns",(function(){return c})),n.d(e,"recyclableRender",(function(){return i})),n.d(e,"components",(function(){return o}));try{o={uniSearchBar:function(){return Promise.all([n.e("common/vendor"),n.e("uni_modules/uni-search-bar/components/uni-search-bar/uni-search-bar")]).then(n.bind(null,605))},commonHomeItem:function(){return n.e("components/common-home-item/common-home-item").then(n.bind(null,616))},commonFoodItem:function(){return n.e("components/common-food-item/common-food-item").then(n.bind(null,623))},commonEmpty:function(){return n.e("components/common-empty/common-empty").then(n.bind(null,874))}}}catch(s){if(-1===s.message.indexOf("Cannot find module")||-1===s.message.indexOf(".vue"))throw s;console.error(s.message),console.error("1. 排查组件名称拼写是否正确"),console.error("2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"),console.error("3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件")}var r=function(){var t=this,e=t.$createElement;t._self._c},i=!1,c=[];r._withStripped=!0},159:function(t,e,n){"use strict";n.r(e);var o=n(160),r=n.n(o);for(var i in o)"default"!==i&&function(t){n.d(e,t,(function(){return o[t]}))}(i);e["default"]=r.a},160:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=i(n(16)),r=n(15);function i(t){return t&&t.__esModule?t:{default:t}}function c(t,e,n,o,r,i,c){try{var s=t[i](c),a=s.value}catch(u){return void n(u)}s.done?e(a):Promise.resolve(a).then(o,r)}function s(t){return function(){var e=this,n=arguments;return new Promise((function(o,r){var i=t.apply(e,n);function s(t){c(i,o,r,s,a,"next",t)}function a(t){c(i,o,r,s,a,"throw",t)}s(void 0)}))}}var a={data:function(){return{keyword:"",history:[],isShow:!0,list:[],total:0,formData:{current:0,size:10,title:""},from:""}},onLoad:function(t){this.from=t.from,this.historyList("".concat(this.from,"_list"))},methods:{search:function(t){if(this.list=[],this.total=0,t.value){if(this.history.length>1){var e=this.history.includes(t.value);if(e>=0)return}this.history.push(t.value),this.history=this.history.slice(-10),(0,r.setStorage)("".concat(this.from,"_list"),this.history)}this.postProductHotel(t.value)},cancel:function(t){this.isShow=!0},historyList:function(t){var e=(0,r.getStorage)(t);e||(0,r.setStorage)(t,[]),this.history=e||[]},postProductHotel:function(t){var e=this;return s(o.default.mark((function n(){var r,i,c,s,a,u;return o.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(n.prev=0,e.isShow=!1,r=e.$data,i=r.list,c=r.total,s=r.from,!(c>0&&i.length==c)){n.next=5;break}return n.abrupt("return");case 5:return e.formData.title=t||"",a="home_stay"==s?e.$API.postProductShopList:"tasty_food"==s?e.$API.postProductFoodList:e.$API.postProductWMList,n.next=9,e.$http(a,e.formData,"POST");case 9:u=n.sent,e.list=i.concat(u.data.list),e.total=u.data.total,n.next=17;break;case 14:n.prev=14,n.t0=n["catch"](0),console.log(n.t0);case 17:case"end":return n.stop()}}),n,null,[[0,14]])})))()},openPage:function(t){(0,r.OpenPage)("/pagesStay/home-stay/home-stay-detail?title=".concat(t.name))}},onReachBottom:function(){this.formData.current+=10,this.postProductHotel()}};e.default=a},161:function(t,e,n){"use strict";n.r(e);var o=n(162),r=n.n(o);for(var i in o)"default"!==i&&function(t){n.d(e,t,(function(){return o[t]}))}(i);e["default"]=r.a},162:function(t,e,n){}},[[155,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/pages/home/search/search.js.map