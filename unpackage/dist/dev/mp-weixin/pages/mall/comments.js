(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/mall/comments"],{62:function(n,e,t){"use strict";(function(n){t(5);r(t(4));var e=r(t(63));function r(n){return n&&n.__esModule?n:{default:n}}wx.__webpack_require_UNI_MP_PLUGIN__=t,n(e.default)}).call(this,t(1)["createPage"])},63:function(n,e,t){"use strict";t.r(e);var r=t(64),o=t(66);for(var c in o)"default"!==c&&function(n){t.d(e,n,(function(){return o[n]}))}(c);t(68);var a,u=t(11),i=Object(u["default"])(o["default"],r["render"],r["staticRenderFns"],!1,null,"341de734",null,!1,r["components"],a);i.options.__file="pages/mall/comments.vue",e["default"]=i.exports},64:function(n,e,t){"use strict";t.r(e);var r=t(65);t.d(e,"render",(function(){return r["render"]})),t.d(e,"staticRenderFns",(function(){return r["staticRenderFns"]})),t.d(e,"recyclableRender",(function(){return r["recyclableRender"]})),t.d(e,"components",(function(){return r["components"]}))},65:function(n,e,t){"use strict";var r;t.r(e),t.d(e,"render",(function(){return o})),t.d(e,"staticRenderFns",(function(){return a})),t.d(e,"recyclableRender",(function(){return c})),t.d(e,"components",(function(){return r}));try{r={commonComment:function(){return t.e("components/common-comment/common-comment").then(t.bind(null,462))}}}catch(u){if(-1===u.message.indexOf("Cannot find module")||-1===u.message.indexOf(".vue"))throw u;console.error(u.message),console.error("1. 排查组件名称拼写是否正确"),console.error("2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"),console.error("3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件")}var o=function(){var n=this,e=n.$createElement;n._self._c},c=!1,a=[];o._withStripped=!0},66:function(n,e,t){"use strict";t.r(e);var r=t(67),o=t.n(r);for(var c in r)"default"!==c&&function(n){t.d(e,n,(function(){return r[n]}))}(c);e["default"]=o.a},67:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=o(t(16));t(15);function o(n){return n&&n.__esModule?n:{default:n}}function c(n,e,t,r,o,c,a){try{var u=n[c](a),i=u.value}catch(s){return void t(s)}u.done?e(i):Promise.resolve(i).then(r,o)}function a(n){return function(){var e=this,t=arguments;return new Promise((function(r,o){var a=n.apply(e,t);function u(n){c(a,r,o,u,i,"next",n)}function i(n){c(a,r,o,u,i,"throw",n)}u(void 0)}))}}var u={data:function(){return{tabIndex:0,tabs:[{name:"全部"}],comments:[],id:"",page:1,total:0}},onLoad:function(n){this.id=n.id,this.tabIndex=0,this.getComments()},methods:{change:function(n){this.tabIndex=n},getComments:function(){var n=this;return a(r.default.mark((function e(){var t,o,c,a,u,i;return r.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(e.prev=0,t=n.$data,o=t.id,t.userId,c=t.page,a=t.total,u=t.comments,!(a>0&&a==u.length)){e.next=4;break}return e.abrupt("return");case 4:return e.next=6,n.$http("".concat(n.$API.getCommentList,"?limit=10&page=").concat(c,"&valueId=").concat(o));case 6:i=e.sent,n.comments=i.data.items,n.total=i.data.total,e.next=13;break;case 11:e.prev=11,e.t0=e["catch"](0);case 13:case"end":return e.stop()}}),e,null,[[0,11]])})))()}},onReachBottom:function(){this.page++,this.getComments()}};e.default=u},68:function(n,e,t){"use strict";t.r(e);var r=t(69),o=t.n(r);for(var c in r)"default"!==c&&function(n){t.d(e,n,(function(){return r[n]}))}(c);e["default"]=o.a},69:function(n,e,t){}},[[62,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/mall/comments.js.map