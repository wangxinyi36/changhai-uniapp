(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/home/special-route/special-route-detail"],{191:function(e,t,n){"use strict";(function(e){n(5);o(n(4));var t=o(n(192));function o(e){return e&&e.__esModule?e:{default:e}}wx.__webpack_require_UNI_MP_PLUGIN__=n,e(t.default)}).call(this,n(1)["createPage"])},192:function(e,t,n){"use strict";n.r(t);var o=n(193),r=n(195);for(var i in r)"default"!==i&&function(e){n.d(t,e,(function(){return r[e]}))}(i);n(197);var c,a=n(11),u=Object(a["default"])(r["default"],o["render"],o["staticRenderFns"],!1,null,"06db106c",null,!1,o["components"],c);u.options.__file="pages/home/special-route/special-route-detail.vue",t["default"]=u.exports},193:function(e,t,n){"use strict";n.r(t);var o=n(194);n.d(t,"render",(function(){return o["render"]})),n.d(t,"staticRenderFns",(function(){return o["staticRenderFns"]})),n.d(t,"recyclableRender",(function(){return o["recyclableRender"]})),n.d(t,"components",(function(){return o["components"]}))},194:function(e,t,n){"use strict";var o;n.r(t),n.d(t,"render",(function(){return r})),n.d(t,"staticRenderFns",(function(){return c})),n.d(t,"recyclableRender",(function(){return i})),n.d(t,"components",(function(){return o}));try{o={uniIcons:function(){return Promise.all([n.e("common/vendor"),n.e("uni_modules/uni-icons/components/uni-icons/uni-icons")]).then(n.bind(null,622))}}}catch(a){if(-1===a.message.indexOf("Cannot find module")||-1===a.message.indexOf(".vue"))throw a;console.error(a.message),console.error("1. 排查组件名称拼写是否正确"),console.error("2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"),console.error("3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件")}var r=function(){var e=this,t=e.$createElement;e._self._c},i=!1,c=[];r._withStripped=!0},195:function(e,t,n){"use strict";n.r(t);var o=n(196),r=n.n(o);for(var i in o)"default"!==i&&function(e){n.d(t,e,(function(){return o[e]}))}(i);t["default"]=r.a},196:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=i(n(16)),r=n(15);function i(e){return e&&e.__esModule?e:{default:e}}function c(e,t,n,o,r,i,c){try{var a=e[i](c),u=a.value}catch(s){return void n(s)}a.done?t(u):Promise.resolve(u).then(o,r)}function a(e){return function(){var t=this,n=arguments;return new Promise((function(o,r){var i=e.apply(t,n);function a(e){c(i,o,r,a,u,"next",e)}function u(e){c(i,o,r,a,u,"throw",e)}a(void 0)}))}}var u={data:function(){return{safeTop:"",screenHeight:"",scrollHeight:"",scrollViewId:"",showHeight:"",backgroundColor:"#ffffff00",color:"#fff",bgImg:"",tab:["路线特色","行程安排","地图"],tabIndex:0,latitude:"",longitude:"",markers:[],id:"",detail:{},content:"",specifications:[]}},created:function(){this.safeTop=(0,r.GetSystemInfo)().safeArea.top,this.screenHeight=(0,r.GetSystemInfo)().screenHeight},onLoad:function(e){this.id=e.id,this.getTralDetail()},methods:{change:function(e){this.tabIndex=e,this.scrollViewId="u264-".concat(e)},back:function(){e.navigateBack()},getTralDetail:function(){var t=this;return a(o.default.mark((function n(){var i,c;return o.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,t.$http("".concat(t.$API.getTralDetail,"?id=").concat(t.id));case 3:i=n.sent,t.detail=i.data.goods,t.specifications=i.data.specifications,t.bgImg=t.detail.picUrl,t.content=(0,r.regContent)(t.detail.detail),t.latitude=parseFloat(t.detail.pointLat),t.longitude=parseFloat(t.detail.pointLng),t.markers=[{id:t.detail.id,latitude:t.latitude,longitude:t.longitude,iconPath:"/static/u115.svg",width:20,height:28}],c=t,e.createSelectorQuery().select(".u244").boundingClientRect((function(e){var t=e.top;c.scrollHeight=c.screenHeight-t+8,c.showHeight=t})).exec(),n.next=17;break;case 15:n.prev=15,n.t0=n["catch"](0);case 17:case"end":return n.stop()}}),n,null,[[0,15]])})))()}},onPageScroll:function(e){e.scrollTop>50&&(this.backgroundColor="#fff",this.color="#000"),e.scrollTop>0&&e.scrollTop<=50&&(this.backgroundColor="#ffffff"+parseInt(e.scrollTop),this.color="#000"+parseInt(e.scrollTop)),0==e.scrollTop&&(this.backgroundColor="#ffffff00",this.color="#fff")}};t.default=u}).call(this,n(1)["default"])},197:function(e,t,n){"use strict";n.r(t);var o=n(198),r=n.n(o);for(var i in o)"default"!==i&&function(e){n.d(t,e,(function(){return o[e]}))}(i);t["default"]=r.a},198:function(e,t,n){}},[[191,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/pages/home/special-route/special-route-detail.js.map