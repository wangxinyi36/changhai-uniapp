(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/home/home"],{22:function(e,t,n){"use strict";(function(e){n(5);r(n(4));var t=r(n(23));function r(e){return e&&e.__esModule?e:{default:e}}wx.__webpack_require_UNI_MP_PLUGIN__=n,e(t.default)}).call(this,n(1)["createPage"])},23:function(e,t,n){"use strict";n.r(t);var r=n(24),a=n(26);for(var o in a)"default"!==o&&function(e){n.d(t,e,(function(){return a[e]}))}(o);n(28);var i,s=n(11),u=Object(s["default"])(a["default"],r["render"],r["staticRenderFns"],!1,null,"92bb8f34",null,!1,r["components"],i);u.options.__file="pages/home/home.vue",t["default"]=u.exports},24:function(e,t,n){"use strict";n.r(t);var r=n(25);n.d(t,"render",(function(){return r["render"]})),n.d(t,"staticRenderFns",(function(){return r["staticRenderFns"]})),n.d(t,"recyclableRender",(function(){return r["recyclableRender"]})),n.d(t,"components",(function(){return r["components"]}))},25:function(e,t,n){"use strict";var r;n.r(t),n.d(t,"render",(function(){return a})),n.d(t,"staticRenderFns",(function(){return i})),n.d(t,"recyclableRender",(function(){return o})),n.d(t,"components",(function(){return r}));try{r={uniRow:function(){return n.e("uni_modules/uni-row/components/uni-row/uni-row").then(n.bind(null,437))},uniCol:function(){return n.e("uni_modules/uni-row/components/uni-col/uni-col").then(n.bind(null,444))}}}catch(s){if(-1===s.message.indexOf("Cannot find module")||-1===s.message.indexOf(".vue"))throw s;console.error(s.message),console.error("1. 排查组件名称拼写是否正确"),console.error("2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"),console.error("3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件")}var a=function(){var e=this,t=e.$createElement;e._self._c},o=!1,i=[];a._withStripped=!0},26:function(e,t,n){"use strict";n.r(t);var r=n(27),a=n.n(r);for(var o in r)"default"!==o&&function(e){n.d(t,e,(function(){return r[e]}))}(o);t["default"]=a.a},27:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=o(n(16)),a=n(15);function o(e){return e&&e.__esModule?e:{default:e}}function i(e,t,n,r,a,o,i){try{var s=e[o](i),u=s.value}catch(c){return void n(c)}s.done?t(u):Promise.resolve(u).then(r,a)}function s(e){return function(){var t=this,n=arguments;return new Promise((function(r,a){var o=e.apply(t,n);function s(e){i(o,r,a,s,u,"next",e)}function u(e){i(o,r,a,s,u,"throw",e)}s(void 0)}))}}var u={data:function(){return{sectionList:[{url:"/static/home-island.svg",name:"登岛申请",width:"46rpx",height:"48rpx",open:"/pages/home/landing/landing"},{url:"/static/home-ship.svg",name:"船票",width:"54rpx",height:"45rpx",open:"/pagesShip/ship-list"},{url:"/static/home-hotel.svg",name:"酒店",width:"50rpx",height:"48rpx",open:"/pagesStay/home-stay/home-stay"},{url:"/static/home-food.svg",name:"美食",width:"60rpx",height:"39rpx",open:"/pages/home/tasty-food/tasty-food"},{url:"/static/home-meal.svg",name:"外卖",width:"60rpx",height:"39rpx",open:"/pages/home/home-meal/home-meal"},{url:"/static/home-car.svg",name:"租车",width:"50rpx",height:"50rpx",open:"/pages/home/car-rental/car-rental"},{url:"/static/home-tol.svg",name:"公共厕所",width:"50rpx",height:"50rpx",open:"/pages/home/public-toilet/public-toilet"},{url:"/static/home-activity.svg",name:"海岛活动",width:"50rpx",height:"47rpx",open:"/pages/home/activity/activity"},{url:"/static/home-news.svg",name:"新闻",width:"50rpx",height:"47rpx",open:"/pages/home/news/news"},{url:"/static/home-gift.svg",name:"长海礼物",width:"50rpx",height:"48rpx",open:"/pages/mall/mall"},{url:"/static/home-airplan.svg",name:"订机票",width:"47rpx",height:"49rpx",transform:"rotate(45deg)",open:"/pages/home/airplane/airplane"}],homeStay:[],foods:[],speLine:[],homeList:[],wechat_userInfo:{}}},onLoad:function(){this.wechat_userInfo=(0,a.getStorage)("wechat_userInfo"),this.getTral(),this.getHomeList(),this.getFoods(),this.getHotel()},onShow:function(){this.wechat_userInfo=(0,a.getStorage)("wechat_userInfo")},methods:{getFoods:function(){var e=this;return s(r.default.mark((function t(){var n;return r.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.$http(e.$API.getHotSjList);case 3:n=t.sent,e.foods=n.data.list,t.next=9;break;case 7:t.prev=7,t.t0=t["catch"](0);case 9:case"end":return t.stop()}}),t,null,[[0,7]])})))()},getHotel:function(){var e=this;return s(r.default.mark((function t(){var n;return r.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.$http(e.$API.postProductShopList,{current:0,size:4},"POST");case 3:n=t.sent,e.homeStay=n.data.list,t.next=9;break;case 7:t.prev=7,t.t0=t["catch"](0);case 9:case"end":return t.stop()}}),t,null,[[0,7]])})))()},openType:function(t,n){var o=this;return s(r.default.mark((function n(){return r.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if("/pages/home/landing/landing"!=t.open&&"/pagesShip/ship-list"!=t.open){n.next=7;break}if(o,!o.wechat_userInfo){n.next=5;break}return(0,a.OpenPage)(t.open),n.abrupt("return");case 5:return(0,a.WxLogin)(o),n.abrupt("return");case 7:if("/pages/mall/mall"!=t.open){n.next=10;break}return e.switchTab({url:t.open}),n.abrupt("return");case 10:if(!t.open.includes("public-toilet")){n.next=14;break}return n.next=13,(0,a.getAddressAuthorize)();case 13:n.sent;case 14:(0,a.OpenPage)(t.open);case 15:case"end":return n.stop()}}),n)})))()},openPage:function(e,t){(0,a.OpenPage)("".concat(t,"?title=").concat(e.name))},openRoute:function(e){(0,a.OpenPage)("/pages/home/special-route/special-route-detail?id=".concat(e.id))},homeDetail:function(e){(0,a.OpenPage)("/pages/home/home-detail",{item:this.homeList[e]})},getTral:function(){var e=this;return s(r.default.mark((function t(){var n;return r.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.$http("".concat(e.$API.getTralList,"?limit=2"));case 3:n=t.sent,e.speLine=n.data.items,t.next=9;break;case 7:t.prev=7,t.t0=t["catch"](0);case 9:case"end":return t.stop()}}),t,null,[[0,7]])})))()},getHomeList:function(){var e=this;return s(r.default.mark((function t(){var n;return r.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.$http("".concat(e.$API.getHomeList));case 3:n=t.sent,e.homeList=n.data,t.next=9;break;case 7:t.prev=7,t.t0=t["catch"](0);case 9:case"end":return t.stop()}}),t,null,[[0,7]])})))()}}};t.default=u}).call(this,n(1)["default"])},28:function(e,t,n){"use strict";n.r(t);var r=n(29),a=n.n(r);for(var o in r)"default"!==o&&function(e){n.d(t,e,(function(){return r[e]}))}(o);t["default"]=a.a},29:function(e,t,n){}},[[22,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/home/home.js.map