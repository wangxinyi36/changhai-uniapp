(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/home/landing/landing"],{121:function(n,e,t){"use strict";(function(n){t(5);r(t(4));var e=r(t(122));function r(n){return n&&n.__esModule?n:{default:n}}wx.__webpack_require_UNI_MP_PLUGIN__=t,n(e.default)}).call(this,t(1)["createPage"])},122:function(n,e,t){"use strict";t.r(e);var r=t(123),u=t(125);for(var o in u)"default"!==o&&function(n){t.d(e,n,(function(){return u[n]}))}(o);t(127);var i,a=t(11),c=Object(a["default"])(u["default"],r["render"],r["staticRenderFns"],!1,null,"1c6bd168",null,!1,r["components"],i);c.options.__file="pages/home/landing/landing.vue",e["default"]=c.exports},123:function(n,e,t){"use strict";t.r(e);var r=t(124);t.d(e,"render",(function(){return r["render"]})),t.d(e,"staticRenderFns",(function(){return r["staticRenderFns"]})),t.d(e,"recyclableRender",(function(){return r["recyclableRender"]})),t.d(e,"components",(function(){return r["components"]}))},124:function(n,e,t){"use strict";var r;t.r(e),t.d(e,"render",(function(){return u})),t.d(e,"staticRenderFns",(function(){return i})),t.d(e,"recyclableRender",(function(){return o})),t.d(e,"components",(function(){return r}));try{r={uniTable:function(){return t.e("uni_modules/uni-table/components/uni-table/uni-table").then(t.bind(null,427))},uniTr:function(){return t.e("uni_modules/uni-table/components/uni-tr/uni-tr").then(t.bind(null,434))},uniTh:function(){return t.e("uni_modules/uni-table/components/uni-th/uni-th").then(t.bind(null,441))},uniTd:function(){return t.e("uni_modules/uni-table/components/uni-td/uni-td").then(t.bind(null,448))}}}catch(a){if(-1===a.message.indexOf("Cannot find module")||-1===a.message.indexOf(".vue"))throw a;console.error(a.message),console.error("1. 排查组件名称拼写是否正确"),console.error("2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"),console.error("3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件")}var u=function(){var n=this,e=n.$createElement;n._self._c},o=!1,i=[];u._withStripped=!0},125:function(n,e,t){"use strict";t.r(e);var r=t(126),u=t.n(r);for(var o in r)"default"!==o&&function(n){t.d(e,n,(function(){return r[n]}))}(o);e["default"]=u.a},126:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=o(t(26)),u=t(15);function o(n){return n&&n.__esModule?n:{default:n}}function i(n,e,t,r,u,o,i){try{var a=n[o](i),c=a.value}catch(s){return void t(s)}a.done?e(c):Promise.resolve(c).then(r,u)}function a(n){return function(){var e=this,t=arguments;return new Promise((function(r,u){var o=n.apply(e,t);function a(n){i(o,r,u,a,c,"next",n)}function c(n){i(o,r,u,a,c,"throw",n)}a(void 0)}))}}var c={data:function(){return{list:[{name:"徐磊",time:"2022-05-13",status:1,code:0},{name:"张泽瑞",time:"2022-05-13",status:2,code:1}],total:0,page:1}},onLoad:function(){this.getHealth()},methods:{openPage:function(n){(0,u.OpenPage)(n)},getHealth:function(){var n=this;return a(r.default.mark((function e(){var t,u,o;return r.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=n.$data,u=t.page,t.list,e.prev=1,e.next=4,n.$http("".concat(n.$API.getHealthList,"?limit=10&page=").concat(u));case 4:o=e.sent,n.total=o.data.total,n.list=n.list.concat(o.data.items),e.next=11;break;case 9:e.prev=9,e.t0=e["catch"](1);case 11:case"end":return e.stop()}}),e,null,[[1,9]])})))()}},onReachBottom:function(){this.page++,this.getHealth()}};e.default=c},127:function(n,e,t){"use strict";t.r(e);var r=t(128),u=t.n(r);for(var o in r)"default"!==o&&function(n){t.d(e,n,(function(){return r[n]}))}(o);e["default"]=u.a},128:function(n,e,t){}},[[121,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/pages/home/landing/landing.js.map