(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/mall/detail"],{55:function(n,t,e){"use strict";(function(n){e(5);o(e(4));var t=o(e(56));function o(n){return n&&n.__esModule?n:{default:n}}wx.__webpack_require_UNI_MP_PLUGIN__=e,n(t.default)}).call(this,e(1)["createPage"])},56:function(n,t,e){"use strict";e.r(t);var o=e(57),r=e(59);for(var c in r)"default"!==c&&function(n){e.d(t,n,(function(){return r[n]}))}(c);e(61);var a,u=e(11),i=Object(u["default"])(r["default"],o["render"],o["staticRenderFns"],!1,null,"11347ec3",null,!1,o["components"],a);i.options.__file="pages/mall/detail.vue",t["default"]=i.exports},57:function(n,t,e){"use strict";e.r(t);var o=e(58);e.d(t,"render",(function(){return o["render"]})),e.d(t,"staticRenderFns",(function(){return o["staticRenderFns"]})),e.d(t,"recyclableRender",(function(){return o["recyclableRender"]})),e.d(t,"components",(function(){return o["components"]}))},58:function(n,t,e){"use strict";var o;e.r(t),e.d(t,"render",(function(){return r})),e.d(t,"staticRenderFns",(function(){return a})),e.d(t,"recyclableRender",(function(){return c})),e.d(t,"components",(function(){return o}));try{o={commonComment:function(){return e.e("components/common-comment/common-comment").then(e.bind(null,355))},uniGoodsNav:function(){return Promise.all([e.e("common/vendor"),e.e("uni_modules/uni-goods-nav/components/uni-goods-nav/uni-goods-nav")]).then(e.bind(null,362))},uniPopup:function(){return e.e("uni_modules/uni-popup/components/uni-popup/uni-popup").then(e.bind(null,373))},commonCartGoods:function(){return e.e("components/common-cart-goods/common-cart-goods").then(e.bind(null,380))}}}catch(u){if(-1===u.message.indexOf("Cannot find module")||-1===u.message.indexOf(".vue"))throw u;console.error(u.message),console.error("1. 排查组件名称拼写是否正确"),console.error("2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"),console.error("3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件")}var r=function(){var n=this,t=n.$createElement;n._self._c},c=!1,a=[];r._withStripped=!0},59:function(n,t,e){"use strict";e.r(t);var o=e(60),r=e.n(o);for(var c in o)"default"!==c&&function(n){e.d(t,n,(function(){return o[n]}))}(c);t["default"]=r.a},60:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=c(e(26)),r=e(15);function c(n){return n&&n.__esModule?n:{default:n}}function a(n,t,e,o,r,c,a){try{var u=n[c](a),i=u.value}catch(l){return void e(l)}u.done?t(i):Promise.resolve(i).then(o,r)}function u(n){return function(){var t=this,e=arguments;return new Promise((function(o,r){var c=n.apply(t,e);function u(n){a(c,o,r,u,i,"next",n)}function i(n){a(c,o,r,u,i,"throw",n)}u(void 0)}))}}var i={data:function(){return{show:!1,id:"",goods:[{name:"海参",url:"/static/mall4.png",weight:555,count:1,pay:155},{name:"海参",url:"/static/mall4.png",weight:555,count:1,pay:155},{name:"海参",url:"/static/mall4.png",weight:555,count:1,pay:155},{name:"海参",url:"/static/mall4.png",weight:555,count:1,pay:155},{name:"海参",url:"/static/mall4.png",weight:555,count:1,pay:155},{name:"海参",url:"/static/mall4.png",weight:555,count:1,pay:155},{name:"海参",url:"/static/mall4.png",weight:555,count:1,pay:155}],comments:[{avatar:"/static/mall8.png",name:"张三",content:"很新鲜，口感滑嫩，下饭的好菜、鲜艳非常诱人分量足，性价比高",pics:["/static/mall8.png","/static/mall8.png","/static/mall8.png"]},{avatar:"/static/mall8.png",name:"李四",content:"很新鲜，口感滑嫩，下饭的好菜、鲜艳非常诱人分量足，性价比高",pics:[]}],options:[{icon:"cart",text:"购物车",info:0}],buttonGroup:[{text:"加入购物车",backgroundColor:"#31d0e6",color:"#fff"},{text:"立即购买",backgroundColor:"#ff8d3d",color:"#fff"}]}},onLoad:function(n){this.id=n.id},methods:{openPage:function(){(0,r.OpenPage)("/pages/mall/comments")},clickLeft:function(n){this.$refs.popup.open("bottom")},change:function(n){this.show=n.show},clickBtn:function(n,t){},getDetail:function(){var n=this;return u(o.default.mark((function t(){var e;return o.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e=n.$data.id,t.prev=1,t.next=4,n.$http("".concat(n.$API.getGoodsDetail,"?id=").concat(e));case 4:t.sent,t.next=9;break;case 7:t.prev=7,t.t0=t["catch"](1);case 9:case"end":return t.stop()}}),t,null,[[1,7]])})))()}}};t.default=i},61:function(n,t,e){"use strict";e.r(t);var o=e(62),r=e.n(o);for(var c in o)"default"!==c&&function(n){e.d(t,n,(function(){return o[n]}))}(c);t["default"]=r.a},62:function(n,t,e){}},[[55,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/mall/detail.js.map