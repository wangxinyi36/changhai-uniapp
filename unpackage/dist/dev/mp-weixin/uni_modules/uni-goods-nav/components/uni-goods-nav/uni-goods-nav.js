(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["uni_modules/uni-goods-nav/components/uni-goods-nav/uni-goods-nav"],{362:function(n,t,o){"use strict";o.r(t);var e=o(363),r=o(365);for(var u in r)"default"!==u&&function(n){o.d(t,n,(function(){return r[n]}))}(u);o(371);var i,c=o(11),a=Object(c["default"])(r["default"],e["render"],e["staticRenderFns"],!1,null,null,null,!1,e["components"],i);a.options.__file="uni_modules/uni-goods-nav/components/uni-goods-nav/uni-goods-nav.vue",t["default"]=a.exports},363:function(n,t,o){"use strict";o.r(t);var e=o(364);o.d(t,"render",(function(){return e["render"]})),o.d(t,"staticRenderFns",(function(){return e["staticRenderFns"]})),o.d(t,"recyclableRender",(function(){return e["recyclableRender"]})),o.d(t,"components",(function(){return e["components"]}))},364:function(n,t,o){"use strict";var e;o.r(t),o.d(t,"render",(function(){return r})),o.d(t,"staticRenderFns",(function(){return i})),o.d(t,"recyclableRender",(function(){return u})),o.d(t,"components",(function(){return e}));try{e={uniIcons:function(){return Promise.all([o.e("common/vendor"),o.e("uni_modules/uni-icons/components/uni-icons/uni-icons")]).then(o.bind(null,494))}}}catch(c){if(-1===c.message.indexOf("Cannot find module")||-1===c.message.indexOf(".vue"))throw c;console.error(c.message),console.error("1. 排查组件名称拼写是否正确"),console.error("2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"),console.error("3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件")}var r=function(){var n=this,t=n.$createElement;n._self._c},u=!1,i=[];r._withStripped=!0},365:function(n,t,o){"use strict";o.r(t);var e=o(366),r=o.n(e);for(var u in e)"default"!==u&&function(n){o.d(t,n,(function(){return e[n]}))}(u);t["default"]=r.a},366:function(n,t,o){"use strict";(function(n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var e=o(3),r=u(o(367));function u(n){return n&&n.__esModule?n:{default:n}}var i=(0,e.initVueI18n)(r.default),c=i.t,a={name:"UniGoodsNav",emits:["click","buttonClick"],props:{options:{type:Array,default:function(){return[{icon:"shop",text:c("uni-goods-nav.options.shop")},{icon:"cart",text:c("uni-goods-nav.options.cart")}]}},buttonGroup:{type:Array,default:function(){return[{text:c("uni-goods-nav.buttonGroup.addToCart"),backgroundColor:"linear-gradient(90deg, #FFCD1E, #FF8A18)",color:"#fff"},{text:c("uni-goods-nav.buttonGroup.buyNow"),backgroundColor:"linear-gradient(90deg, #FE6035, #EF1224)",color:"#fff"}]}},fill:{type:Boolean,default:!1}},methods:{onClick:function(n,t){this.$emit("click",{index:n,content:t})},buttonClick:function(t,o){n.report&&n.report(o.text,o.text),this.$emit("buttonClick",{index:t,content:o})}}};t.default=a}).call(this,o(1)["default"])},371:function(n,t,o){"use strict";o.r(t);var e=o(372),r=o.n(e);for(var u in e)"default"!==u&&function(n){o.d(t,n,(function(){return e[n]}))}(u);t["default"]=r.a},372:function(n,t,o){}}]);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/uni-goods-nav/components/uni-goods-nav/uni-goods-nav.js.map
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'uni_modules/uni-goods-nav/components/uni-goods-nav/uni-goods-nav-create-component',
    {
        'uni_modules/uni-goods-nav/components/uni-goods-nav/uni-goods-nav-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('1')['createComponent'](__webpack_require__(362))
        })
    },
    [['uni_modules/uni-goods-nav/components/uni-goods-nav/uni-goods-nav-create-component']]
]);
