(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/common-food-item/common-food-item"],{653:function(n,e,t){"use strict";t.r(e);var o=t(654),r=t(656);for(var c in r)"default"!==c&&function(n){t.d(e,n,(function(){return r[n]}))}(c);t(658);var i,a=t(11),u=Object(a["default"])(r["default"],o["render"],o["staticRenderFns"],!1,null,"eec86df8",null,!1,o["components"],i);u.options.__file="components/common-food-item/common-food-item.vue",e["default"]=u.exports},654:function(n,e,t){"use strict";t.r(e);var o=t(655);t.d(e,"render",(function(){return o["render"]})),t.d(e,"staticRenderFns",(function(){return o["staticRenderFns"]})),t.d(e,"recyclableRender",(function(){return o["recyclableRender"]})),t.d(e,"components",(function(){return o["components"]}))},655:function(n,e,t){"use strict";var o;t.r(e),t.d(e,"render",(function(){return r})),t.d(e,"staticRenderFns",(function(){return i})),t.d(e,"recyclableRender",(function(){return c})),t.d(e,"components",(function(){return o}));try{o={uniRate:function(){return t.e("uni_modules/uni-rate/components/uni-rate/uni-rate").then(t.bind(null,675))}}}catch(a){if(-1===a.message.indexOf("Cannot find module")||-1===a.message.indexOf(".vue"))throw a;console.error(a.message),console.error("1. 排查组件名称拼写是否正确"),console.error("2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"),console.error("3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件")}var r=function(){var n=this,e=n.$createElement,t=(n._self._c,n.dealDistance(n.info.distance));n.$mp.data=Object.assign({},{$root:{m0:t}})},c=!1,i=[];r._withStripped=!0},656:function(n,e,t){"use strict";t.r(e);var o=t(657),r=t.n(o);for(var c in o)"default"!==c&&function(n){t.d(e,n,(function(){return o[n]}))}(c);e["default"]=r.a},657:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=t(15),r={name:"common-food-item",props:["info"],data:function(){return{}},created:function(){},methods:{dealDistance:function(n){if(n)return n>1e3?"".concat(n/1e3,"km"):"".concat(n,"m")},openPage:function(){(0,o.OpenPage)("/pages/home/tasty-food/tasty-food-detail?id=".concat(this.info.uuid))},openFoodDetail:function(n){(0,o.OpenPage)("/pages/home/tasty-food/home-tasty-food-detail?id=".concat(n.uuaid))}}};e.default=r},658:function(n,e,t){"use strict";t.r(e);var o=t(659),r=t.n(o);for(var c in o)"default"!==c&&function(n){t.d(e,n,(function(){return o[n]}))}(c);e["default"]=r.a},659:function(n,e,t){}}]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/components/common-food-item/common-food-item.js.map
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/common-food-item/common-food-item-create-component',
    {
        'components/common-food-item/common-food-item-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('1')['createComponent'](__webpack_require__(653))
        })
    },
    [['components/common-food-item/common-food-item-create-component']]
]);
