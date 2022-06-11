(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["uni_modules/uni-forms/components/uni-forms/uni-forms"],{359:function(t,e,n){"use strict";n.r(e);var r=n(360),i=n(362);for(var a in i)"default"!==a&&function(t){n.d(e,t,(function(){return i[t]}))}(a);n(368);var u,o=n(11),s=Object(o["default"])(i["default"],r["render"],r["staticRenderFns"],!1,null,null,null,!1,r["components"],u);s.options.__file="uni_modules/uni-forms/components/uni-forms/uni-forms.vue",e["default"]=s.exports},360:function(t,e,n){"use strict";n.r(e);var r=n(361);n.d(e,"render",(function(){return r["render"]})),n.d(e,"staticRenderFns",(function(){return r["staticRenderFns"]})),n.d(e,"recyclableRender",(function(){return r["recyclableRender"]})),n.d(e,"components",(function(){return r["components"]}))},361:function(t,e,n){"use strict";var r;n.r(e),n.d(e,"render",(function(){return i})),n.d(e,"staticRenderFns",(function(){return u})),n.d(e,"recyclableRender",(function(){return a})),n.d(e,"components",(function(){return r}));var i=function(){var t=this,e=t.$createElement;t._self._c},a=!1,u=[];i._withStripped=!0},362:function(t,e,n){"use strict";n.r(e);var r=n(363),i=n.n(r);for(var a in r)"default"!==a&&function(t){n.d(e,t,(function(){return r[t]}))}(a);e["default"]=i.a},363:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=u(n(364)),i=u(n(4)),a=u(n(367));function u(t){return t&&t.__esModule?t:{default:t}}function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function s(t,e,n,r,i,a,u){try{var o=t[a](u),s=o.value}catch(f){return void n(f)}o.done?e(s):Promise.resolve(s).then(r,i)}function f(t){return function(){var e=this,n=arguments;return new Promise((function(r,i){var a=t.apply(e,n);function u(t){s(a,r,i,u,o,"next",t)}function o(t){s(a,r,i,u,o,"throw",t)}u(void 0)}))}}i.default.prototype.binddata=function(t,e,n){if(n)this.$refs[n].setValue(t,e);else{var r;for(var i in this.$refs){var a=this.$refs[i];if(a&&a.$options&&"uniForms"===a.$options.name){r=a;break}}if(!r)return console.error("当前 uni-froms 组件缺少 ref 属性");r.setValue(t,e)}};var l={name:"uniForms",components:{},emits:["input","reset","validate","submit"],props:{value:{type:Object,default:function(){return{}}},modelValue:{type:Object,default:function(){return{}}},rules:{type:Object,default:function(){return{}}},validateTrigger:{type:String,default:""},labelPosition:{type:String,default:"left"},labelWidth:{type:[String,Number],default:""},labelAlign:{type:String,default:"left"},errShowType:{type:String,default:"undertext"},border:{type:Boolean,default:!1}},data:function(){return{formData:{}}},computed:{dataValue:function(){return"{}"===JSON.stringify(this.modelValue)?this.value:this.modelValue}},watch:{rules:function(t){this.init(t)},labelPosition:function(){this.childrens.forEach((function(t){t.init()}))}},created:function(){this.unwatchs=[],this.childrens=[],this.inputChildrens=[],this.checkboxChildrens=[],this.formRules=[],this.init(this.rules)},methods:{init:function(t){if(0!==Object.keys(t).length)this.formRules=t,this.validator=new a.default(t),this.registerWatch();else try{this.formData=JSON.parse(JSON.stringify(this.dataValue))}catch(e){this.formData={}}},registerWatch:function(){var t=this;this.unwatchs.forEach((function(t){return t()})),this.childrens.forEach((function(t){t.init()})),Object.keys(this.dataValue).forEach((function(e){var n=t.$watch("dataValue."+e,(function(n){if(n)if("[object Object]"===n.toString())for(var r in n){var i="".concat(e,"[").concat(r,"]");t.formData[i]=t._getValue(i,n[r])}else t.formData[e]=t._getValue(e,n)}),{deep:!0,immediate:!0});t.unwatchs.push(n)}))},setRules:function(t){this.init(t)},setValue:function(t,e,n){var r=this.childrens.find((function(e){return e.name===t}));return r?(e=this._getValue(r.name,e),this.formData[t]=e,r.val=e,r.triggerCheck(e,n)):null},resetForm:function(t){var e=this;this.childrens.forEach((function(t){t.errMsg="";var n=e.inputChildrens.find((function(e){return e.rename===t.name}));n&&(n.errMsg="",n.is_reset=!0,n.$emit("input",n.multiple?[]:""),n.$emit("update:modelValue",n.multiple?[]:""))})),this.childrens.forEach((function(t){t.name&&(e.formData[t.name]=e._getValue(t.name,""))})),this.$emit("reset",t)},validateCheck:function(t){null===t&&(t=null),this.$emit("validate",t)},validateAll:function(t,e,n,i){var a=this;return f(r.default.mark((function u(){var o,s,f,l,c,d,h,m,p,v,b,y,g;return r.default.wrap((function(u){while(1)switch(u.prev=u.next){case 0:for(f in o=[],s=function(t){var e=a.childrens.find((function(e){return e.name===t}));e&&o.push(e)},t)s(f);if(i||"function"!==typeof n||(i=n),!i&&"function"!==typeof i&&Promise&&(l=new Promise((function(t,e){i=function(n,r){n?e(n):t(r)}}))),c=[],d={},!a.validator){u.next=25;break}u.t0=r.default.keys(o);case 9:if((u.t1=u.t0()).done){u.next=23;break}return h=u.t1.value,m=o[h],p=m.isArray?m.arrayField:m.name,m.isArray?-1!==m.name.indexOf("[")&&-1!==m.name.indexOf("]")&&(v=m.name.split("["),b=v[0],y=v[1].replace("]",""),d[b]||(d[b]={}),d[b][y]=a._getValue(p,t[p])):d[p]=a._getValue(p,t[p]),u.next=16,m.triggerCheck(t[p],!0);case 16:if(g=u.sent,!g){u.next=21;break}if(c.push(g),"toast"!==a.errShowType&&"modal"!==a.errShowType){u.next=21;break}return u.abrupt("break",23);case 21:u.next=9;break;case 23:u.next=26;break;case 25:d=t;case 26:if(Array.isArray(c)&&0===c.length&&(c=null),Array.isArray(n)&&n.forEach((function(t){d[t]=a.dataValue[t]})),"submit"===e?a.$emit("submit",{detail:{value:d,errors:c}}):a.$emit("validate",c),i&&"function"===typeof i&&i(c,d),!l||!i){u.next=34;break}return u.abrupt("return",l);case 34:return u.abrupt("return",null);case 35:case"end":return u.stop()}}),u)})))()},submitForm:function(){},submit:function(t,e,n){var r=this,i=function(t){var e=r.childrens.find((function(e){return e.name===t}));e&&void 0===r.formData[t]&&(r.formData[t]=r._getValue(t,r.dataValue[t]))};for(var a in this.dataValue)i(a);return n||console.warn("submit 方法即将废弃，请使用validate方法代替！"),this.validateAll(this.formData,"submit",t,e)},validate:function(t,e){return this.submit(t,e,!0)},validateField:function(t,e){var n=this;t=[].concat(t);var r={};return this.childrens.forEach((function(e){-1!==t.indexOf(e.name)&&(r=Object.assign({},r,o({},e.name,n.formData[e.name])))})),this.validateAll(r,"submit",[],e)},resetFields:function(){this.resetForm()},clearValidate:function(t){var e=this;t=[].concat(t),this.childrens.forEach((function(n){var r=e.inputChildrens.find((function(t){return t.rename===n.name}));(0===t.length||-1!==t.indexOf(n.name))&&(n.errMsg="",r&&(r.errMsg=""))}))},_getValue:function(t,e){var n=this,r=this.formRules[t]&&this.formRules[t].rules||[],i=r.find((function(t){return t.format&&n.type_filter(t.format)})),a=r.find((function(t){return t.format&&"boolean"===t.format||"bool"===t.format}));return i&&(e=isNaN(e)?e:""===e||null===e?null:Number(e)),a&&(e=!!e),e},type_filter:function(t){return"int"===t||"double"===t||"number"===t||"timestamp"===t}}};e.default=l},368:function(t,e,n){"use strict";n.r(e);var r=n(369),i=n.n(r);for(var a in r)"default"!==a&&function(t){n.d(e,t,(function(){return r[t]}))}(a);e["default"]=i.a},369:function(t,e,n){}}]);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/uni-forms/components/uni-forms/uni-forms.js.map
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'uni_modules/uni-forms/components/uni-forms/uni-forms-create-component',
    {
        'uni_modules/uni-forms/components/uni-forms/uni-forms-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('1')['createComponent'](__webpack_require__(359))
        })
    },
    [['uni_modules/uni-forms/components/uni-forms/uni-forms-create-component']]
]);
