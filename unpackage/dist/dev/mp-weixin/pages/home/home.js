(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/home/home"],{23:function(e,t,n){"use strict";(function(e){n(5);r(n(4));var t=r(n(24));function r(e){return e&&e.__esModule?e:{default:e}}wx.__webpack_require_UNI_MP_PLUGIN__=n,e(t.default)}).call(this,n(1)["createPage"])},24:function(e,t,n){"use strict";n.r(t);var r=n(25),o=n(27);for(var a in o)"default"!==a&&function(e){n.d(t,e,(function(){return o[e]}))}(a);n(29);var i,c=n(11),u=Object(c["default"])(o["default"],r["render"],r["staticRenderFns"],!1,null,"92bb8f34",null,!1,r["components"],i);u.options.__file="pages/home/home.vue",t["default"]=u.exports},25:function(e,t,n){"use strict";n.r(t);var r=n(26);n.d(t,"render",(function(){return r["render"]})),n.d(t,"staticRenderFns",(function(){return r["staticRenderFns"]})),n.d(t,"recyclableRender",(function(){return r["recyclableRender"]})),n.d(t,"components",(function(){return r["components"]}))},26:function(e,t,n){"use strict";var r;n.r(t),n.d(t,"render",(function(){return o})),n.d(t,"staticRenderFns",(function(){return i})),n.d(t,"recyclableRender",(function(){return a})),n.d(t,"components",(function(){return r}));try{r={uniRow:function(){return n.e("uni_modules/uni-row/components/uni-row/uni-row").then(n.bind(null,356))},uniCol:function(){return n.e("uni_modules/uni-row/components/uni-col/uni-col").then(n.bind(null,363))}}}catch(c){if(-1===c.message.indexOf("Cannot find module")||-1===c.message.indexOf(".vue"))throw c;console.error(c.message),console.error("1. 排查组件名称拼写是否正确"),console.error("2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"),console.error("3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件")}var o=function(){var e=this,t=e.$createElement;e._self._c},a=!1,i=[];o._withStripped=!0},27:function(e,t,n){"use strict";n.r(t);var r=n(28),o=n.n(r);for(var a in r)"default"!==a&&function(e){n.d(t,e,(function(){return r[e]}))}(a);t["default"]=o.a},28:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(16)),o=n(15);function a(e){return e&&e.__esModule?e:{default:e}}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){u(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t,n,r,o,a,i){try{var c=e[a](i),u=c.value}catch(s){return void n(s)}c.done?t(u):Promise.resolve(u).then(r,o)}function l(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){var a=e.apply(t,n);function i(e){s(a,r,o,i,c,"next",e)}function c(e){s(a,r,o,i,c,"throw",e)}i(void 0)}))}}var p={data:function(){return{sectionList:[{url:"/static/home-island.svg",name:"登岛申请",width:"46rpx",height:"48rpx",open:"/pages/home/landing/landing"},{url:"/static/home-ship.svg",name:"船票",width:"54rpx",height:"45rpx"},{url:"/static/home-hotel.svg",name:"酒店",width:"50rpx",height:"48rpx",open:"/pagesStay/home-stay/home-stay"},{url:"/static/home-food.svg",name:"美食",width:"60rpx",height:"39rpx",open:"/pages/home/tasty-food/tasty-food"},{url:"/static/home-meal.svg",name:"外卖",width:"60rpx",height:"39rpx",open:"/pages/home/home-meal/home-meal"},{url:"/static/home-car.svg",name:"租车",width:"50rpx",height:"50rpx",open:"/pages/home/car-rental/car-rental"},{url:"/static/home-tol.svg",name:"公共厕所",width:"50rpx",height:"50rpx",open:"/pages/home/public-toilet/public-toilet"},{url:"/static/home-activity.svg",name:"海岛活动",width:"50rpx",height:"47rpx",open:"/pages/home/activity/activity"},{url:"/static/home-news.svg",name:"新闻",width:"50rpx",height:"47rpx",open:"/pages/home/news/news"},{url:"/static/home-gift.svg",name:"长海礼物",width:"50rpx",height:"48rpx",open:"/pages/mall/mall"},{url:"/static/home-airplan.svg",name:"订机票",width:"47rpx",height:"49rpx",transform:"rotate(45deg)",open:"/pages/home/airplane/airplane"}],homeStay:[],foods:[],speLine:[],homeList:[],productForm:{area:"",name:"",pageNum:4,start:0,uuid:""}}},onLoad:function(){this.getTral(),this.getHomeList(),this.postProduct()},methods:{openType:function(t,n){return l(r.default.mark((function n(){return r.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if("/pages/mall/mall"!=t.open){n.next=3;break}return e.switchTab({url:t.open}),n.abrupt("return");case 3:if(!t.open.includes("public-toilet")){n.next=7;break}return n.next=6,(0,o.getAddressAuthorize)();case 6:n.sent;case 7:(0,o.OpenPage)(t.open);case 8:case"end":return n.stop()}}),n)})))()},openPage:function(e,t){(0,o.OpenPage)("".concat(t,"?title=").concat(e.name))},homeDetail:function(e){var t=this.$data.homeList;this.$nextTick((function(){(0,o.OpenPage)("/pages/home/home-detail?title=".concat(t[e].name,"&id=").concat(t[e].id))}))},getTral:function(){var e=this;return l(r.default.mark((function t(){var n;return r.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.$http("".concat(e.$API.getTralList,"?limit=2"));case 3:n=t.sent,e.speLine=n.data.items,t.next=9;break;case 7:t.prev=7,t.t0=t["catch"](0);case 9:case"end":return t.stop()}}),t,null,[[0,7]])})))()},getHomeList:function(){var e=this;return l(r.default.mark((function t(){var n;return r.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.$http("".concat(e.$API.getHomeList));case 3:n=t.sent,e.homeList=n.data,t.next=9;break;case 7:t.prev=7,t.t0=t["catch"](0);case 9:case"end":return t.stop()}}),t,null,[[0,7]])})))()},postProduct:function(){var e=this;return l(r.default.mark((function t(){var n,o;return r.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.$http(e.$API.postProductList,c(c({},e.productForm),{},{uuType:"G"}),"POST");case 3:return n=t.sent,t.next=6,e.$http(e.$API.postProductList,c(c({},e.productForm),{},{uuType:"C"}),"POST");case 6:o=t.sent,e.foods=n.data.list,e.homeStay=o.data.list,t.next=13;break;case 11:t.prev=11,t.t0=t["catch"](0);case 13:case"end":return t.stop()}}),t,null,[[0,11]])})))()}}};t.default=p}).call(this,n(1)["default"])},29:function(e,t,n){"use strict";n.r(t);var r=n(30),o=n.n(r);for(var a in r)"default"!==a&&function(e){n.d(t,e,(function(){return r[e]}))}(a);t["default"]=o.a},30:function(e,t,n){}},[[23,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/home/home.js.map