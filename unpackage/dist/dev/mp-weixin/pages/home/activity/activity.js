<<<<<<< HEAD
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/home/activity/activity"],{138:function(t,n,e){"use strict";(function(t){e(5);r(e(4));var n=r(e(139));function r(t){return t&&t.__esModule?t:{default:t}}wx.__webpack_require_UNI_MP_PLUGIN__=e,t(n.default)}).call(this,e(1)["createPage"])},139:function(t,n,e){"use strict";e.r(n);var r=e(140),u=e(142);for(var c in u)"default"!==c&&function(t){e.d(n,t,(function(){return u[t]}))}(c);e(144);var a,i=e(11),o=Object(i["default"])(u["default"],r["render"],r["staticRenderFns"],!1,null,"532bc918",null,!1,r["components"],a);o.options.__file="pages/home/activity/activity.vue",n["default"]=o.exports},140:function(t,n,e){"use strict";e.r(n);var r=e(141);e.d(n,"render",(function(){return r["render"]})),e.d(n,"staticRenderFns",(function(){return r["staticRenderFns"]})),e.d(n,"recyclableRender",(function(){return r["recyclableRender"]})),e.d(n,"components",(function(){return r["components"]}))},141:function(t,n,e){"use strict";var r;e.r(n),e.d(n,"render",(function(){return u})),e.d(n,"staticRenderFns",(function(){return a})),e.d(n,"recyclableRender",(function(){return c})),e.d(n,"components",(function(){return r}));var u=function(){var t=this,n=t.$createElement;t._self._c},c=!1,a=[];u._withStripped=!0},142:function(t,n,e){"use strict";e.r(n);var r=e(143),u=e.n(r);for(var c in r)"default"!==c&&function(t){e.d(n,t,(function(){return r[t]}))}(c);n["default"]=u.a},143:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=u(e(26));function u(t){return t&&t.__esModule?t:{default:t}}function c(t,n,e,r,u,c,a){try{var i=t[c](a),o=i.value}catch(s){return void e(s)}i.done?n(o):Promise.resolve(o).then(r,u)}function a(t){return function(){var n=this,e=arguments;return new Promise((function(r,u){var a=t.apply(n,e);function i(t){c(a,r,u,i,o,"next",t)}function o(t){c(a,r,u,i,o,"throw",t)}i(void 0)}))}}var i={data:function(){return{list:[],total:0,page:1}},onLoad:function(){this.getAd()},methods:{getAd:function(){var t=this;return a(r.default.mark((function n(){var e,u,c,a;return r.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.prev=0,e=t.$data,u=e.page,c=e.list,n.next=4,t.$http("".concat(t.$API.getAdList,"?limit=10&page=").concat(u));case 4:a=n.sent,t.list=c.concat(a.data.items),t.total=a.data.total,n.next=11;break;case 9:n.prev=9,n.t0=n["catch"](0);case 11:case"end":return n.stop()}}),n,null,[[0,9]])})))()}},onReachBottom:function(){this.page++,this.getAd()}};n.default=i},144:function(t,n,e){"use strict";e.r(n);var r=e(145),u=e.n(r);for(var c in r)"default"!==c&&function(t){e.d(n,t,(function(){return r[t]}))}(c);n["default"]=u.a},145:function(t,n,e){}},[[138,"common/runtime","common/vendor"]]]);
=======
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/home/activity/activity"],{138:function(n,t,e){"use strict";(function(n){e(5);r(e(4));var t=r(e(139));function r(n){return n&&n.__esModule?n:{default:n}}wx.__webpack_require_UNI_MP_PLUGIN__=e,n(t.default)}).call(this,e(1)["createPage"])},139:function(n,t,e){"use strict";e.r(t);var r=e(140),u=e(142);for(var c in u)"default"!==c&&function(n){e.d(t,n,(function(){return u[n]}))}(c);e(144);var i,o=e(11),a=Object(o["default"])(u["default"],r["render"],r["staticRenderFns"],!1,null,"532bc918",null,!1,r["components"],i);a.options.__file="pages/home/activity/activity.vue",t["default"]=a.exports},140:function(n,t,e){"use strict";e.r(t);var r=e(141);e.d(t,"render",(function(){return r["render"]})),e.d(t,"staticRenderFns",(function(){return r["staticRenderFns"]})),e.d(t,"recyclableRender",(function(){return r["recyclableRender"]})),e.d(t,"components",(function(){return r["components"]}))},141:function(n,t,e){"use strict";var r;e.r(t),e.d(t,"render",(function(){return u})),e.d(t,"staticRenderFns",(function(){return i})),e.d(t,"recyclableRender",(function(){return c})),e.d(t,"components",(function(){return r}));var u=function(){var n=this,t=n.$createElement;n._self._c},c=!1,i=[];u._withStripped=!0},142:function(n,t,e){"use strict";e.r(t);var r=e(143),u=e.n(r);for(var c in r)"default"!==c&&function(n){e.d(t,n,(function(){return r[n]}))}(c);t["default"]=u.a},143:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r={data:function(){return{}}};t.default=r},144:function(n,t,e){"use strict";e.r(t);var r=e(145),u=e.n(r);for(var c in r)"default"!==c&&function(n){e.d(t,n,(function(){return r[n]}))}(c);t["default"]=u.a},145:function(n,t,e){}},[[138,"common/runtime","common/vendor"]]]);
>>>>>>> main
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/pages/home/activity/activity.js.map