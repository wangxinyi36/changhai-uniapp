(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/mall/detail"],{54:function(t,e,n){"use strict";(function(t){n(5);o(n(4));var e=o(n(55));function o(t){return t&&t.__esModule?t:{default:t}}wx.__webpack_require_UNI_MP_PLUGIN__=n,t(e.default)}).call(this,n(1)["createPage"])},55:function(t,e,n){"use strict";n.r(e);var o=n(56),r=n(58);for(var i in r)"default"!==i&&function(t){n.d(e,t,(function(){return r[t]}))}(i);n(60);var c,s=n(11),a=Object(s["default"])(r["default"],o["render"],o["staticRenderFns"],!1,null,"11347ec3",null,!1,o["components"],c);a.options.__file="pages/mall/detail.vue",e["default"]=a.exports},56:function(t,e,n){"use strict";n.r(e);var o=n(57);n.d(e,"render",(function(){return o["render"]})),n.d(e,"staticRenderFns",(function(){return o["staticRenderFns"]})),n.d(e,"recyclableRender",(function(){return o["recyclableRender"]})),n.d(e,"components",(function(){return o["components"]}))},57:function(t,e,n){"use strict";var o;n.r(e),n.d(e,"render",(function(){return r})),n.d(e,"staticRenderFns",(function(){return c})),n.d(e,"recyclableRender",(function(){return i})),n.d(e,"components",(function(){return o}));try{o={commonComment:function(){return n.e("components/common-comment/common-comment").then(n.bind(null,500))},uniGoodsNav:function(){return Promise.all([n.e("common/vendor"),n.e("uni_modules/uni-goods-nav/components/uni-goods-nav/uni-goods-nav")]).then(n.bind(null,509))},uniPopup:function(){return n.e("uni_modules/uni-popup/components/uni-popup/uni-popup").then(n.bind(null,520))},commonCartGoods:function(){return n.e("components/common-cart-goods/common-cart-goods").then(n.bind(null,527))}}}catch(s){if(-1===s.message.indexOf("Cannot find module")||-1===s.message.indexOf(".vue"))throw s;console.error(s.message),console.error("1. 排查组件名称拼写是否正确"),console.error("2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"),console.error("3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件")}var r=function(){var t=this,e=t.$createElement,n=(t._self._c,t.dealKeys(t.goodsDetail.keywords));t.$mp.data=Object.assign({},{$root:{l0:n}})},i=!1,c=[];r._withStripped=!0},58:function(t,e,n){"use strict";n.r(e);var o=n(59),r=n.n(o);for(var i in o)"default"!==i&&function(t){n.d(e,t,(function(){return o[t]}))}(i);e["default"]=r.a},59:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=c(n(16)),r=n(15),i=n(13);function c(t){return t&&t.__esModule?t:{default:t}}function s(t,e,n,o,r,i,c){try{var s=t[i](c),a=s.value}catch(u){return void n(u)}s.done?e(a):Promise.resolve(a).then(o,r)}function a(t){return function(){var e=this,n=arguments;return new Promise((function(o,r){var i=t.apply(e,n);function c(t){s(i,o,r,c,a,"next",t)}function a(t){s(i,o,r,c,a,"throw",t)}c(void 0)}))}}function u(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?u(Object(n),!0).forEach((function(e){d(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function d(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var f={data:function(){return{show:!1,wechat_userInfo:{},id:"",comments:[],comments_size:0,options:[{icon:"cart",text:"购物车",info:0}],buttonGroup:[{text:"加入购物车",backgroundColor:"#31d0e6",color:"#fff"},{text:"立即购买",backgroundColor:"#ff8d3d",color:"#fff"}],goodsDetail:{},goodsDetailContent:""}},onLoad:function(t){this.id=t.id,this.getDetail(),this.wechat_userInfo=(0,r.getStorage)("wechat_userInfo"),this.GET_MALL_CART()},onShow:function(){this.wechat_userInfo=(0,r.getStorage)("wechat_userInfo")},computed:l({},(0,i.mapState)({goods:function(t){return t.mallCart.mallSelectList}})),methods:l(l({},(0,i.mapMutations)(["GET_MALL_CART","CANCEL_ACTIVE"])),{},{clickLeft:function(t){this.wechat_userInfo?this.$refs.popup.open("bottom"):(0,r.WxLogin)(this)},change:function(t){this.show=t.show,this.show||this.CANCEL_ACTIVE()},clear:function(){this.$store.dispatch("CLEAR_MALL_CART")},clickBtn:function(t){if(this.wechat_userInfo){var e=t.index;t.content;if(0===e)(0,r.showToast)("加入购物车成功~"),this.$store.dispatch("ADD_MALL_CART",this.goodsDetail);else if(this.show){var n=this.goods.filter((function(t){return t.isAcitve}));if(n.length<=0)return void(0,r.showToast)("请选择商品~");(0,r.OpenPage)("/pages/mall/order",{goodsList:n,type:"list"})}else(0,r.OpenPage)("/pages/mall/order",{goodsList:[this.goodsDetail],type:"detail"})}else(0,r.WxLogin)(this)},dealKeys:function(t){if(t)return t.split(",")},picPrew:function(e,n){e&&t.previewImage({current:n,urls:this.goodsDetail.gallery,indicator:"default",loop:!0})},getDetail:function(){var t=this;return a(o.default.mark((function e(){var n,i;return o.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.$data.id,e.prev=1,e.next=4,t.$http("".concat(t.$API.getGoodsDetail,"/").concat(n));case 4:i=e.sent,t.goodsDetail=i.data.goods,t.comments=i.data.comments,t.comments_size=i.data.comments_size,t.goodsDetailContent=(0,r.regContent)(i.data.goods.detail),e.next=13;break;case 11:e.prev=11,e.t0=e["catch"](1);case 13:case"end":return e.stop()}}),e,null,[[1,11]])})))()},add:function(t){this.$store.dispatch("ADD_MALL_CART",t)},sub:function(t){this.$store.dispatch("REDUCE_MALL_CART",t)},check:function(t){this.$store.dispatch("SELECT_MALL_CART",t)}})};e.default=f}).call(this,n(1)["default"])},60:function(t,e,n){"use strict";n.r(e);var o=n(61),r=n.n(o);for(var i in o)"default"!==i&&function(t){n.d(e,t,(function(){return o[t]}))}(i);e["default"]=r.a},61:function(t,e,n){}},[[54,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/mall/detail.js.map