(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["uni_modules/uni-data-checkbox/components/uni-data-checkbox/uni-data-checkbox"],{610:function(t,e,a){"use strict";a.r(e);var n=a(611),i=a(613);for(var o in i)"default"!==o&&function(t){a.d(e,t,(function(){return i[t]}))}(o);a(615);var s,r=a(11),l=Object(r["default"])(i["default"],n["render"],n["staticRenderFns"],!1,null,null,null,!1,n["components"],s);l.options.__file="uni_modules/uni-data-checkbox/components/uni-data-checkbox/uni-data-checkbox.vue",e["default"]=l.exports},611:function(t,e,a){"use strict";a.r(e);var n=a(612);a.d(e,"render",(function(){return n["render"]})),a.d(e,"staticRenderFns",(function(){return n["staticRenderFns"]})),a.d(e,"recyclableRender",(function(){return n["recyclableRender"]})),a.d(e,"components",(function(){return n["components"]}))},612:function(t,e,a){"use strict";var n;a.r(e),a.d(e,"render",(function(){return i})),a.d(e,"staticRenderFns",(function(){return s})),a.d(e,"recyclableRender",(function(){return o})),a.d(e,"components",(function(){return n}));try{n={uniLoadMore:function(){return Promise.all([a.e("common/vendor"),a.e("uni_modules/uni-load-more/components/uni-load-more/uni-load-more")]).then(a.bind(null,752))}}}catch(r){if(-1===r.message.indexOf("Cannot find module")||-1===r.message.indexOf(".vue"))throw r;console.error(r.message),console.error("1. 排查组件名称拼写是否正确"),console.error("2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"),console.error("3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件")}var i=function(){var t=this,e=t.$createElement;t._self._c},o=!1,s=[];i._withStripped=!0},613:function(t,e,a){"use strict";a.r(e);var n=a(614),i=a.n(n);for(var o in n)"default"!==o&&function(t){a.d(e,t,(function(){return n[t]}))}(o);e["default"]=i.a},614:function(t,e,a){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={name:"uniDataChecklist",mixins:[t.mixinDatacom||{}],emits:["input","update:modelValue","change"],props:{mode:{type:String,default:"default"},multiple:{type:Boolean,default:!1},value:{type:[Array,String,Number],default:function(){return""}},modelValue:{type:[Array,String,Number],default:function(){return""}},localdata:{type:Array,default:function(){return[]}},min:{type:[Number,String],default:""},max:{type:[Number,String],default:""},wrap:{type:Boolean,default:!1},icon:{type:String,default:"left"},selectedColor:{type:String,default:""},selectedTextColor:{type:String,default:""},emptyText:{type:String,default:"暂无数据"},disabled:{type:Boolean,default:!1},map:{type:Object,default:function(){return{text:"text",value:"value"}}}},watch:{localdata:{handler:function(t){this.range=t,this.dataList=this.getDataList(this.getSelectedValue(t))},deep:!0},mixinDatacomResData:function(t){this.range=t,this.dataList=this.getDataList(this.getSelectedValue(t))},value:function(t){this.dataList=this.getDataList(t),this.is_reset||(this.is_reset=!1,this.formItem&&this.formItem.setValue(t))},modelValue:function(t){this.dataList=this.getDataList(t),this.is_reset||(this.is_reset=!1,this.formItem&&this.formItem.setValue(t))}},data:function(){return{dataList:[],range:[],contentText:{contentdown:"查看更多",contentrefresh:"加载中",contentnomore:"没有更多"},isLocal:!0,styles:{selectedColor:"#2979ff",selectedTextColor:"#666"},isTop:0}},computed:{dataValue:function(){return""===this.value?this.modelValue:(this.modelValue,this.value)}},created:function(){this.form=this.getForm("uniForms"),this.formItem=this.getForm("uniFormsItem"),this.formItem&&(this.isTop=6,this.formItem.name&&(this.is_reset||(this.is_reset=!1,this.formItem.setValue(this.dataValue)),this.rename=this.formItem.name,this.form.inputChildrens.push(this))),this.localdata&&0!==this.localdata.length?(this.isLocal=!0,this.range=this.localdata,this.dataList=this.getDataList(this.getSelectedValue(this.range))):this.collection&&(this.isLocal=!1,this.loadData())},methods:{loadData:function(){var t=this;this.mixinDatacomGet().then((function(e){t.mixinDatacomResData=e.result.data,0===t.mixinDatacomResData.length?(t.isLocal=!1,t.mixinDatacomErrorMessage=t.emptyText):t.isLocal=!0})).catch((function(e){t.mixinDatacomErrorMessage=e.message}))},getForm:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"uniForms",e=this.$parent,a=e.$options.name;while(a!==t){if(e=e.$parent,!e)return!1;a=e.$options.name}return e},chagne:function(t){var e=this,a=t.detail.value,n={value:[],data:[]};if(this.multiple)this.range.forEach((function(t){a.includes(t[e.map.value]+"")&&(n.value.push(t[e.map.value]),n.data.push(t))}));else{var i=this.range.find((function(t){return t[e.map.value]+""===a}));i&&(n={value:i[this.map.value],data:i})}this.formItem&&this.formItem.setValue(n.value),this.$emit("input",n.value),this.$emit("update:modelValue",n.value),this.$emit("change",{detail:n}),this.multiple?this.dataList=this.getDataList(n.value,!0):this.dataList=this.getDataList(n.value)},getDataList:function(t){var e=this,a=JSON.parse(JSON.stringify(this.range)),n=[];return this.multiple&&(Array.isArray(t)||(t=[])),a.forEach((function(a,i){if(a.disabled=a.disable||a.disabled||!1,e.multiple)if(t.length>0){var o=t.find((function(t){return t===a[e.map.value]}));a.selected=void 0!==o}else a.selected=!1;else a.selected=t===a[e.map.value];n.push(a)})),this.setRange(n)},setRange:function(t){var e=this,a=t.filter((function(t){return t.selected})),n=Number(this.min)||0,i=Number(this.max)||"";return t.forEach((function(o,s){if(e.multiple){if(a.length<=n){var r=a.find((function(t){return t[e.map.value]===o[e.map.value]}));void 0!==r&&(o.disabled=!0)}if(a.length>=i&&""!==i){var l=a.find((function(t){return t[e.map.value]===o[e.map.value]}));void 0===l&&(o.disabled=!0)}}e.setStyles(o,s),t[s]=o})),t},setStyles:function(t,e){t.styleBackgroud=this.setStyleBackgroud(t),t.styleIcon=this.setStyleIcon(t),t.styleIconText=this.setStyleIconText(t),t.styleRightIcon=this.setStyleRightIcon(t)},getSelectedValue:function(t){var e=this;if(!this.multiple)return this.dataValue;var a=[];return t.forEach((function(t){t.selected&&a.push(t[e.map.value])})),this.dataValue&&this.dataValue.length>0?this.dataValue:a},setStyleBackgroud:function(t){var e={},a=this.selectedColor?this.selectedColor:"#2979ff";"list"!==this.mode&&(e["border-color"]=t.selected?a:"#DCDFE6"),"tag"===this.mode&&(e["background-color"]=t.selected?a:"#f5f5f5");var n="";for(var i in e)n+="".concat(i,":").concat(e[i],";");return n},setStyleIcon:function(t){var e={},a="",n=this.selectedColor?this.selectedColor:"#2979ff";for(var i in e["background-color"]=t.selected?n:"#fff",e["border-color"]=t.selected?n:"#DCDFE6",!t.selected&&t.disabled&&(e["background-color"]="#F2F6FC",e["border-color"]=t.selected?n:"#DCDFE6"),e)a+="".concat(i,":").concat(e[i],";");return a},setStyleIconText:function(t){var e={},a="",n=this.selectedColor?this.selectedColor:"#2979ff";for(var i in"tag"===this.mode?e.color=t.selected?this.selectedTextColor?this.selectedTextColor:"#fff":"#666":e.color=t.selected?this.selectedTextColor?this.selectedTextColor:n:"#666",!t.selected&&t.disabled&&(e.color="#999"),e)a+="".concat(i,":").concat(e[i],";");return a},setStyleRightIcon:function(t){var e={},a="";for(var n in"list"===this.mode&&(e["border-color"]=t.selected?this.styles.selectedColor:"#DCDFE6"),e)a+="".concat(n,":").concat(e[n],";");return a}}};e.default=a}).call(this,a(539)["default"])},615:function(t,e,a){"use strict";a.r(e);var n=a(616),i=a.n(n);for(var o in n)"default"!==o&&function(t){a.d(e,t,(function(){return n[t]}))}(o);e["default"]=i.a},616:function(t,e,a){}}]);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/uni-data-checkbox/components/uni-data-checkbox/uni-data-checkbox.js.map
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'uni_modules/uni-data-checkbox/components/uni-data-checkbox/uni-data-checkbox-create-component',
    {
        'uni_modules/uni-data-checkbox/components/uni-data-checkbox/uni-data-checkbox-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('1')['createComponent'](__webpack_require__(610))
        })
    },
    [['uni_modules/uni-data-checkbox/components/uni-data-checkbox/uni-data-checkbox-create-component']]
]);
