(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/my/about"],{114:function(n,e,t){"use strict";(function(n){t(5);r(t(4));var e=r(t(115));function r(n){return n&&n.__esModule?n:{default:n}}wx.__webpack_require_UNI_MP_PLUGIN__=t,n(e.default)}).call(this,t(1)["createPage"])},115:function(n,e,t){"use strict";t.r(e);var r=t(116),u=t(118);for(var o in u)"default"!==o&&function(n){t.d(e,n,(function(){return u[n]}))}(o);var i,c=t(11),a=Object(c["default"])(u["default"],r["render"],r["staticRenderFns"],!1,null,null,null,!1,r["components"],i);a.options.__file="pages/my/about.vue",e["default"]=a.exports},116:function(n,e,t){"use strict";t.r(e);var r=t(117);t.d(e,"render",(function(){return r["render"]})),t.d(e,"staticRenderFns",(function(){return r["staticRenderFns"]})),t.d(e,"recyclableRender",(function(){return r["recyclableRender"]})),t.d(e,"components",(function(){return r["components"]}))},117:function(n,e,t){"use strict";var r;t.r(e),t.d(e,"render",(function(){return u})),t.d(e,"staticRenderFns",(function(){return i})),t.d(e,"recyclableRender",(function(){return o})),t.d(e,"components",(function(){return r}));try{r={uniList:function(){return t.e("uni_modules/uni-list/components/uni-list/uni-list").then(t.bind(null,440))},uniListItem:function(){return t.e("uni_modules/uni-list/components/uni-list-item/uni-list-item").then(t.bind(null,447))}}}catch(c){if(-1===c.message.indexOf("Cannot find module")||-1===c.message.indexOf(".vue"))throw c;console.error(c.message),console.error("1. 排查组件名称拼写是否正确"),console.error("2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"),console.error("3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件")}var u=function(){var n=this,e=n.$createElement;n._self._c},o=!1,i=[];u._withStripped=!0},118:function(n,e,t){"use strict";t.r(e);var r=t(119),u=t.n(r);for(var o in r)"default"!==o&&function(n){t.d(e,n,(function(){return r[n]}))}(o);e["default"]=u.a},119:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=u(t(16));function u(n){return n&&n.__esModule?n:{default:n}}function o(n,e,t,r,u,o,i){try{var c=n[o](i),a=c.value}catch(s){return void t(s)}c.done?e(a):Promise.resolve(a).then(r,u)}function i(n){return function(){var e=this,t=arguments;return new Promise((function(r,u){var i=n.apply(e,t);function c(n){o(i,r,u,c,a,"next",n)}function a(n){o(i,r,u,c,a,"throw",n)}c(void 0)}))}}var c={data:function(){return{help:[]}},onLoad:function(){this.getMyAboutMini()},methods:{getMyAboutMini:function(){var n=this;return i(r.default.mark((function e(){var t;return r.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,n.$http("".concat(n.$API.getMyAboutMini,"?pid=0"));case 3:t=e.sent,n.help=t.data,e.next=9;break;case 7:e.prev=7,e.t0=e["catch"](0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])})))()}}};e.default=c}},[[114,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/my/about.js.map