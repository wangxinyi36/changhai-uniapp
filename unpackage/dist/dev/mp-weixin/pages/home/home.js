(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/home/home"],[,,,,,,,,,,,,function(e,t,n){"use strict";(function(e){n(5);r(n(4));var t=r(n(13));function r(e){return e&&e.__esModule?e:{default:e}}wx.__webpack_require_UNI_MP_PLUGIN__=n,e(t.default)}).call(this,n(1)["createPage"])},function(e,t,n){"use strict";n.r(t);var r=n(14),a=n(16);for(var o in a)"default"!==o&&function(e){n.d(t,e,(function(){return a[e]}))}(o);n(20);var i,u=n(11),c=Object(u["default"])(a["default"],r["render"],r["staticRenderFns"],!1,null,"92bb8f34",null,!1,r["components"],i);c.options.__file="pages/home/home.vue",t["default"]=c.exports},function(e,t,n){"use strict";n.r(t);var r=n(15);n.d(t,"render",(function(){return r["render"]})),n.d(t,"staticRenderFns",(function(){return r["staticRenderFns"]})),n.d(t,"recyclableRender",(function(){return r["recyclableRender"]})),n.d(t,"components",(function(){return r["components"]}))},function(e,t,n){"use strict";var r;n.r(t),n.d(t,"render",(function(){return a})),n.d(t,"staticRenderFns",(function(){return i})),n.d(t,"recyclableRender",(function(){return o})),n.d(t,"components",(function(){return r}));try{r={uniRow:function(){return n.e("uni_modules/uni-row/components/uni-row/uni-row").then(n.bind(null,306))},uniCol:function(){return n.e("uni_modules/uni-row/components/uni-col/uni-col").then(n.bind(null,313))}}}catch(u){if(-1===u.message.indexOf("Cannot find module")||-1===u.message.indexOf(".vue"))throw u;console.error(u.message),console.error("1. 排查组件名称拼写是否正确"),console.error("2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"),console.error("3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件")}var a=function(){var e=this,t=e.$createElement;e._self._c},o=!1,i=[];a._withStripped=!0},function(e,t,n){"use strict";n.r(t);var r=n(17),a=n.n(r);for(var o in r)"default"!==o&&function(e){n.d(t,e,(function(){return r[e]}))}(o);t["default"]=a.a},function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=o(n(126)),a=n(18);function o(e){return e&&e.__esModule?e:{default:e}}function i(e,t,n,r,a,o,i){try{var u=e[o](i),c=u.value}catch(s){return void n(s)}u.done?t(c):Promise.resolve(c).then(r,a)}function u(e){return function(){var t=this,n=arguments;return new Promise((function(r,a){var o=e.apply(t,n);function u(e){i(o,r,a,u,c,"next",e)}function c(e){i(o,r,a,u,c,"throw",e)}u(void 0)}))}}var c={data:function(){return{sectionList:[{url:"/static/home-island.svg",name:"登岛申请",width:"46rpx",height:"48rpx",open:"/pages/home/landing/landing"},{url:"/static/home-ship.svg",name:"船票",width:"54rpx",height:"45rpx"},{url:"/static/home-hotel.svg",name:"酒店",width:"50rpx",height:"48rpx",open:"/pagesStay/home-stay/home-stay"},{url:"/static/home-food.svg",name:"美食",width:"60rpx",height:"39rpx",open:"/pages/home/tasty-food/tasty-food"},{url:"/static/home-meal.svg",name:"外卖",width:"60rpx",height:"39rpx",open:"/pages/home/home-meal/home-meal"},{url:"/static/home-car.svg",name:"租车",width:"50rpx",height:"50rpx",open:"/pages/home/car-rental/car-rental"},{url:"/static/home-tol.svg",name:"公共厕所",width:"50rpx",height:"50rpx",open:"/pages/home/public-toilet/public-toilet"},{url:"/static/home-activity.svg",name:"海岛活动",width:"50rpx",height:"47rpx",open:"/pages/home/activity/activity"},{url:"/static/home-gift.svg",name:"长海礼物",width:"50rpx",height:"48rpx",open:"/pages/mall/mall"},{url:"/static/home-airplan.svg",name:"订机票",width:"47rpx",height:"49rpx",transform:"rotate(45deg)",open:"/pages/home/airplane/airplane"}],homeStay:[{url:"/static/stay1.jpg",name:"丽景山庄"},{url:"/static/stay2.jpg",name:"老吴家渔子宿"},{url:"/static/stay3.jpg",name:"金水岸"},{url:"/static/home7.png",name:"大长山岛"}],foods:[{url:"/static/home3.png",name:"海鲜杂烩"},{url:"/static/mall8.png",name:"海鲜杂烩"},{url:"/static/mall5.png",name:"蒜蓉扇贝"},{url:"/static/mall4.png",name:"海鲜杂烩"}],speLine:[]}},onLoad:function(){this.getTral()},methods:{openType:function(t,n){"/pages/mall/mall"!=t.open?(0,a.OpenPage)(t.open):e.switchTab({url:t.open})},openPage:function(e,t){(0,a.OpenPage)("".concat(t,"?title=").concat(e.name))},getTral:function(){var e=this;return u(r.default.mark((function t(){var n;return r.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.$http("".concat(e.$API.getTralList,"?limit=2"));case 3:n=t.sent,e.speLine=n.data.items,t.next=9;break;case 7:t.prev=7,t.t0=t["catch"](0);case 9:case"end":return t.stop()}}),t,null,[[0,7]])})))()}}};t.default=c}).call(this,n(1)["default"])},,,function(e,t,n){"use strict";n.r(t);var r=n(21),a=n.n(r);for(var o in r)"default"!==o&&function(e){n.d(t,e,(function(){return r[e]}))}(o);t["default"]=a.a},function(e,t,n){}],[[12,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/home/home.js.map