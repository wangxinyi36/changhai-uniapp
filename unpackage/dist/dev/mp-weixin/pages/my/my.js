(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/my/my"],{38:function(e,n,t){"use strict";(function(e){t(5);r(t(4));var n=r(t(39));function r(e){return e&&e.__esModule?e:{default:e}}wx.__webpack_require_UNI_MP_PLUGIN__=t,e(n.default)}).call(this,t(1)["createPage"])},39:function(e,n,t){"use strict";t.r(n);var r=t(40),o=t(42);for(var u in o)"default"!==u&&function(e){t.d(n,e,(function(){return o[e]}))}(u);t(44);var i,c=t(11),a=Object(c["default"])(o["default"],r["render"],r["staticRenderFns"],!1,null,"0be17cc6",null,!1,r["components"],i);a.options.__file="pages/my/my.vue",n["default"]=a.exports},40:function(e,n,t){"use strict";t.r(n);var r=t(41);t.d(n,"render",(function(){return r["render"]})),t.d(n,"staticRenderFns",(function(){return r["staticRenderFns"]})),t.d(n,"recyclableRender",(function(){return r["recyclableRender"]})),t.d(n,"components",(function(){return r["components"]}))},41:function(e,n,t){"use strict";var r;t.r(n),t.d(n,"render",(function(){return o})),t.d(n,"staticRenderFns",(function(){return i})),t.d(n,"recyclableRender",(function(){return u})),t.d(n,"components",(function(){return r}));try{r={uniList:function(){return t.e("uni_modules/uni-list/components/uni-list/uni-list").then(t.bind(null,486))},uniListItem:function(){return t.e("uni_modules/uni-list/components/uni-list-item/uni-list-item").then(t.bind(null,493))}}}catch(c){if(-1===c.message.indexOf("Cannot find module")||-1===c.message.indexOf(".vue"))throw c;console.error(c.message),console.error("1. 排查组件名称拼写是否正确"),console.error("2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"),console.error("3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件")}var o=function(){var e=this,n=e.$createElement;e._self._c},u=!1,i=[];o._withStripped=!0},42:function(e,n,t){"use strict";t.r(n);var r=t(43),o=t.n(r);for(var u in r)"default"!==u&&function(e){t.d(n,e,(function(){return r[e]}))}(u);n["default"]=o.a},43:function(e,n,t){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=u(t(16)),o=t(15);function u(e){return e&&e.__esModule?e:{default:e}}function i(e,n,t,r,o,u,i){try{var c=e[u](i),a=c.value}catch(s){return void t(s)}c.done?n(a):Promise.resolve(a).then(r,o)}function c(e){return function(){var n=this,t=arguments;return new Promise((function(r,o){var u=e.apply(n,t);function c(e){i(u,r,o,c,a,"next",e)}function a(e){i(u,r,o,c,a,"throw",e)}c(void 0)}))}}var a={data:function(){return{wechat_userInfo:{},defautlAvatar:"/static/avatar-default.svg",phoneNumber:""}},onLoad:function(){this.wechat_userInfo=(0,o.getStorage)("wechat_userInfo"),this.getPhoneNumber()},methods:{clickItem:function(e){this.wechat_userInfo?this.openPage(e):(0,o.WxLogin)(this)},openPage:function(e){var n=this;return c(r.default.mark((function t(){return r.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:n.wechat_userInfo?(0,o.OpenPage)(e):(0,o.showToast)("请登录！");case 1:case"end":return t.stop()}}),t)})))()},exist:function(e){(0,o.removeStorage)("wechat_userInfo"),(0,o.removeStorage)("wechat_openId"),this.wechat_userInfo=""},call:function(){e.makePhoneCall({phoneNumber:this.phoneNumber})},getPhoneNumber:function(){var e=this;return c(r.default.mark((function n(){var t;return r.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,e.$http(e.$API.getMyPhoneNumber);case 3:t=n.sent,e.phoneNumber=t.data.phoneNumber,n.next=9;break;case 7:n.prev=7,n.t0=n["catch"](0);case 9:case"end":return n.stop()}}),n,null,[[0,7]])})))()},login:function(e){var n=this;this.wechat_userInfo?(0,o.OpenPage)("/pages/my/userInfo").then((function(e){n.wechat_userInfo=(0,o.getStorage)("wechat_userInfo")})):(0,o.WxLogin)(this)}}};n.default=a}).call(this,t(1)["default"])},44:function(e,n,t){"use strict";t.r(n);var r=t(45),o=t.n(r);for(var u in r)"default"!==u&&function(e){t.d(n,e,(function(){return r[e]}))}(u);n["default"]=o.a},45:function(e,n,t){}},[[38,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/my/my.js.map