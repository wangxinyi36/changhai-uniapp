(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/home/activity/activity"],{"6b67":function(t,n,e){},7046:function(t,n,e){"use strict";var a=e("6b67"),r=e.n(a);r.a},"9d09":function(t,n,e){"use strict";(function(t){e("d0f3");a(e("66fd"));var n=a(e("ee20"));function a(t){return t&&t.__esModule?t:{default:t}}wx.__webpack_require_UNI_MP_PLUGIN__=e,t(n.default)}).call(this,e("543d")["createPage"])},c318:function(t,n,e){"use strict";var a;e.d(n,"b",(function(){return r})),e.d(n,"c",(function(){return c})),e.d(n,"a",(function(){return a}));var r=function(){var t=this,n=t.$createElement,e=(t._self._c,t.__map(t.list,(function(n,e){var a=t.__get_orig(n),r=t.dealTime(n.updateTime);return{$orig:a,m0:r}})));t.$mp.data=Object.assign({},{$root:{l0:e}})},c=[]},ee20:function(t,n,e){"use strict";e.r(n);var a=e("c318"),r=e("f2a6");for(var c in r)"default"!==c&&function(t){e.d(n,t,(function(){return r[t]}))}(c);e("7046");var u,o=e("f0c5"),i=Object(o["a"])(r["default"],a["b"],a["c"],!1,null,"ad8e2352",null,!1,a["a"],u);n["default"]=i.exports},f2a6:function(t,n,e){"use strict";e.r(n);var a=e("fcd4"),r=e.n(a);for(var c in a)"default"!==c&&function(t){e.d(n,t,(function(){return a[t]}))}(c);n["default"]=r.a},fcd4:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=r(e("a34a"));function r(t){return t&&t.__esModule?t:{default:t}}function c(t,n,e,a,r,c,u){try{var o=t[c](u),i=o.value}catch(f){return void e(f)}o.done?n(i):Promise.resolve(i).then(a,r)}function u(t){return function(){var n=this,e=arguments;return new Promise((function(a,r){var u=t.apply(n,e);function o(t){c(u,a,r,o,i,"next",t)}function i(t){c(u,a,r,o,i,"throw",t)}o(void 0)}))}}var o={data:function(){return{list:[],total:0,page:1}},onLoad:function(){this.getAd()},methods:{getAd:function(){var t=this;return u(a.default.mark((function n(){var e,r,c,u,o;return a.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(n.prev=0,e=t.$data,r=e.page,c=e.list,u=e.total,!(u>0&&u==c.length)){n.next=4;break}return n.abrupt("return");case 4:return n.next=6,t.$http("".concat(t.$API.getAdList,"?limit=10&page=").concat(r));case 6:o=n.sent,t.list=c.concat(o.data.items),t.total=o.data.total,n.next=13;break;case 11:n.prev=11,n.t0=n["catch"](0);case 13:case"end":return n.stop()}}),n,null,[[0,11]])})))()},dealTime:function(t){return"".concat(t[0],"-").concat(t[1],"-").concat(t[2]," ").concat(t[3],":").concat(t[4])}},onReachBottom:function(){this.page++,this.getAd()}};n.default=o}},[["9d09","common/runtime","common/vendor"]]]);