(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/my/my"],{"377a":function(e,t,n){"use strict";n.r(t);var r=n("aed5"),u=n("dbe6");for(var o in u)"default"!==o&&function(e){n.d(t,e,(function(){return u[e]}))}(o);n("b98b");var a,c=n("f0c5"),i=Object(c["a"])(u["default"],r["b"],r["c"],!1,null,"e78f11cc",null,!1,r["a"],a);t["default"]=i.exports},7061:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=o(n("a34a")),u=n("a2e9");function o(e){return e&&e.__esModule?e:{default:e}}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t,n,r,u,o,a){try{var c=e[o](a),i=c.value}catch(s){return void n(s)}c.done?t(i):Promise.resolve(i).then(r,u)}function f(e){return function(){var t=this,n=arguments;return new Promise((function(r,u){var o=e.apply(t,n);function a(e){s(o,r,u,a,c,"next",e)}function c(e){s(o,r,u,a,c,"throw",e)}a(void 0)}))}}var l={data:function(){return{wechat_userInfo:{},defautlAvatar:"/static/avatar-default.svg",phoneNumber:""}},onLoad:function(){this.wechat_userInfo=(0,u.getStorage)("wechat_userInfo"),this.getPhoneNumber()},methods:{clickItem:function(e){this.openPage(e)},openPage:function(e){var t=this;return f(r.default.mark((function n(){return r.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:t.wechat_userInfo?(0,u.OpenPage)(e):(0,u.showToast)("请登录！");case 1:case"end":return n.stop()}}),n)})))()},call:function(){e.makePhoneCall({phoneNumber:this.phoneNumber})},getPhoneNumber:function(){var e=this;return f(r.default.mark((function t(){var n;return r.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.$http(e.$API.getMyPhoneNumber);case 3:n=t.sent,e.phoneNumber=n.data.phoneNumber,t.next=9;break;case 7:t.prev=7,t.t0=t["catch"](0);case 9:case"end":return t.stop()}}),t,null,[[0,7]])})))()},login:function(){var t=this,n=this;this.wechat_userInfo?(0,u.OpenPage)("/pages/my/userInfo").then((function(e){t.wechat_userInfo=(0,u.getStorage)("wechat_userInfo")})):e.getUserProfile({desc:"需要获取您的个人信息",success:function(t){e.login({provider:"weixin",success:function(){var e=f(r.default.mark((function e(o){var a,i;return r.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a={code:o.code,shareUserId:0,userInfo:c({phone:"",registerDate:"",status:0,userId:0,userLevel:0,userLevelDesc:""},t.userInfo)},e.next=3,n.$http(n.$API.postLoginByWeixin,a,"POST");case 3:i=e.sent,n.wechat_userInfo=i.data.userInfo,(0,u.setStorage)("wechat_userInfo",i.data.userInfo);case 6:case"end":return e.stop()}}),e)})));function o(t){return e.apply(this,arguments)}return o}(),fail:function(e){console.log(e)}})},fail:function(e){console.log(e)}})}}};t.default=l}).call(this,n("543d")["default"])},"76e0":function(e,t,n){"use strict";(function(e){n("d0f3");r(n("66fd"));var t=r(n("377a"));function r(e){return e&&e.__esModule?e:{default:e}}wx.__webpack_require_UNI_MP_PLUGIN__=n,e(t.default)}).call(this,n("543d")["createPage"])},aed5:function(e,t,n){"use strict";n.d(t,"b",(function(){return u})),n.d(t,"c",(function(){return o})),n.d(t,"a",(function(){return r}));var r={uniList:function(){return n.e("uni_modules/uni-list/components/uni-list/uni-list").then(n.bind(null,"8262"))},uniListItem:function(){return n.e("uni_modules/uni-list/components/uni-list-item/uni-list-item").then(n.bind(null,"c863"))}},u=function(){var e=this,t=e.$createElement;e._self._c},o=[]},b98b:function(e,t,n){"use strict";var r=n("f255"),u=n.n(r);u.a},dbe6:function(e,t,n){"use strict";n.r(t);var r=n("7061"),u=n.n(r);for(var o in r)"default"!==o&&function(e){n.d(t,e,(function(){return r[e]}))}(o);t["default"]=u.a},f255:function(e,t,n){}},[["76e0","common/runtime","common/vendor"]]]);