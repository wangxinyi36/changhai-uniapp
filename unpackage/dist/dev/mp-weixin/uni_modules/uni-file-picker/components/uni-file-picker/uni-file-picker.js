(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["uni_modules/uni-file-picker/components/uni-file-picker/uni-file-picker"],{486:function(e,t,n){"use strict";n.r(t);var r=n(487),i=n(489);for(var s in i)"default"!==s&&function(e){n.d(t,e,(function(){return i[e]}))}(s);n(493);var u,a=n(11),l=Object(a["default"])(i["default"],r["render"],r["staticRenderFns"],!1,null,null,null,!1,r["components"],u);l.options.__file="uni_modules/uni-file-picker/components/uni-file-picker/uni-file-picker.vue",t["default"]=l.exports},487:function(e,t,n){"use strict";n.r(t);var r=n(488);n.d(t,"render",(function(){return r["render"]})),n.d(t,"staticRenderFns",(function(){return r["staticRenderFns"]})),n.d(t,"recyclableRender",(function(){return r["recyclableRender"]})),n.d(t,"components",(function(){return r["components"]}))},488:function(e,t,n){"use strict";var r;n.r(t),n.d(t,"render",(function(){return i})),n.d(t,"staticRenderFns",(function(){return u})),n.d(t,"recyclableRender",(function(){return s})),n.d(t,"components",(function(){return r}));var i=function(){var e=this,t=e.$createElement;e._self._c},s=!1,u=[];i._withStripped=!0},489:function(e,t,n){"use strict";n.r(t);var r=n(490),i=n.n(r);for(var s in r)"default"!==s&&function(e){n.d(t,e,(function(){return r[e]}))}(s);t["default"]=i.a},490:function(e,t,n){"use strict";(function(e,r){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=a(n(26)),s=n(491),u=n(492);function a(e){return e&&e.__esModule?e:{default:e}}function l(e){return p(e)||f(e)||c(e)||o()}function o(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function c(e,t){if(e){if("string"===typeof e)return d(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?d(e,t):void 0}}function f(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}function p(e){if(Array.isArray(e))return d(e)}function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function h(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function m(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?h(Object(n),!0).forEach((function(t){b(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):h(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function g(e,t,n,r,i,s,u){try{var a=e[s](u),l=a.value}catch(o){return void n(o)}a.done?t(l):Promise.resolve(l).then(r,i)}function y(e){return function(){var t=this,n=arguments;return new Promise((function(r,i){var s=e.apply(t,n);function u(e){g(s,r,i,u,a,"next",e)}function a(e){g(s,r,i,u,a,"throw",e)}u(void 0)}))}}var v=function(){n.e("uni_modules/uni-file-picker/components/uni-file-picker/upload-image").then(function(){return resolve(n(605))}.bind(null,n)).catch(n.oe)},k=function(){n.e("uni_modules/uni-file-picker/components/uni-file-picker/upload-file").then(function(){return resolve(n(612))}.bind(null,n)).catch(n.oe)},x={name:"uniFilePicker",components:{uploadImage:v,uploadFile:k},emits:["select","success","fail","progress","delete","update:modelValue","input"],props:{value:{type:[Array,Object],default:function(){return[]}},disabled:{type:Boolean,default:!1},disablePreview:{type:Boolean,default:!1},delIcon:{type:Boolean,default:!0},autoUpload:{type:Boolean,default:!0},limit:{type:[Number,String],default:9},mode:{type:String,default:"grid"},fileMediatype:{type:String,default:"image"},fileExtname:{type:[Array,String],default:function(){return[]}},title:{type:String,default:""},listStyles:{type:Object,default:function(){return{border:!0,dividline:!0,borderStyle:{}}}},imageStyles:{type:Object,default:function(){return{width:"auto",height:"auto"}}},readonly:{type:Boolean,default:!1},returnType:{type:String,default:"array"},sizeType:{type:Array,default:function(){return["original","compressed"]}}},data:function(){return{files:[],localValue:[]}},watch:{value:{handler:function(e,t){this.setValue(e,t)},immediate:!0}},computed:{filesList:function(){var e=[];return this.files.forEach((function(t){e.push(t)})),e},showType:function(){return"image"===this.fileMediatype?this.mode:"list"},limitLength:function(){return"object"===this.returnType?1:this.limit?this.limit>=9?9:this.limit:1}},created:function(){e.config&&e.config.provider||(this.noSpace=!0,e.chooseAndUploadFile=s.chooseAndUploadFile),this.form=this.getForm("uniForms"),this.formItem=this.getForm("uniFormsItem"),this.form&&this.formItem&&this.formItem.name&&(this.rename=this.formItem.name,this.form.inputChildrens.push(this))},methods:{clearFiles:function(e){var t=this;0===e||e?this.files.splice(e,1):(this.files=[],this.$nextTick((function(){t.setEmit()}))),this.$nextTick((function(){t.setEmit()}))},upload:function(){var e=[];return this.files.forEach((function(t,n){"ready"!==t.status&&"error"!==t.status||e.push(Object.assign({},t))})),this.uploadFiles(e)},setValue:function(e,t){var n=this;return y(i.default.mark((function t(){var r,s,u,a;return i.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(r=function(){var e=y(i.default.mark((function e(t){var r,s;return i.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(r=/cloud:\/\/([\w.]+\/?)\S*/,s="",s=t.fileID?t.fileID:t.url,!r.test(s)){e.next=8;break}return t.fileID=s,e.next=7,n.getTempFileURL(s);case 7:t.url=e.sent;case 8:return t.url&&(t.path=t.url),e.abrupt("return",t);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),"object"!==n.returnType){t.next=10;break}if(!e){t.next=7;break}return t.next=5,r(e);case 5:t.next=8;break;case 7:e={};case 8:t.next=19;break;case 10:e||(e=[]),s=0;case 12:if(!(s<e.length)){t.next=19;break}return u=e[s],t.next=16,r(u);case 16:s++,t.next=12;break;case 19:n.localValue=e,n.form&&n.formItem&&!n.is_reset&&(n.is_reset=!1,n.formItem.setValue(n.localValue)),a=Object.keys(e).length>0?e:[],n.files=[].concat(a);case 23:case"end":return t.stop()}}),t)})))()},choose:function(){this.disabled||(this.files.length>=Number(this.limitLength)&&"grid"!==this.showType&&"array"===this.returnType?r.showToast({title:"您最多选择 ".concat(this.limitLength," 个文件"),icon:"none"}):this.chooseFiles())},chooseFiles:function(){var t=this,n=(0,u.get_extname)(this.fileExtname);e.chooseAndUploadFile({type:this.fileMediatype,compressed:!1,sizeType:this.sizeType,extension:n.length>0?n:void 0,count:this.limitLength-this.files.length,onChooseFile:this.chooseFileCallback,onUploadProgress:function(e){t.setProgress(e,e.index)}}).then((function(e){t.setSuccessAndError(e.tempFiles)})).catch((function(e){console.log("选择失败",e)}))},chooseFileCallback:function(e){var t=this;return y(i.default.mark((function n(){var r,s,a,l,o,c,f,p;return i.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:r=(0,u.get_extname)(t.fileExtname),s=1===Number(t.limitLength)&&t.disablePreview&&!t.disabled||"object"===t.returnType,s&&(t.files=[]),a=(0,u.get_files_and_is_max)(e,r),l=a.filePaths,o=a.files,r&&r.length>0||(l=e.tempFilePaths,o=e.tempFiles),c=[],f=0;case 7:if(!(f<o.length)){n.next=21;break}if(!(t.limitLength-t.files.length<=0)){n.next=10;break}return n.abrupt("break",21);case 10:return o[f].uuid=Date.now(),n.next=13,(0,u.get_file_data)(o[f],t.fileMediatype);case 13:p=n.sent,p.progress=0,p.status="ready",t.files.push(p),c.push(m(m({},p),{},{file:o[f]}));case 18:f++,n.next=7;break;case 21:t.$emit("select",{tempFiles:c,tempFilePaths:l}),e.tempFiles=o,t.autoUpload&&!t.noSpace||(e.tempFiles=[]);case 24:case"end":return n.stop()}}),n)})))()},uploadFiles:function(e){var t=this;return e=[].concat(e),s.uploadCloudFiles.call(this,e,5,(function(e){t.setProgress(e,e.index,!0)})).then((function(e){return t.setSuccessAndError(e),e})).catch((function(e){console.log(e)}))},setSuccessAndError:function(e,t){var n=this;return y(i.default.mark((function t(){var r,s,u,a,l,o,c;return i.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:r=[],s=[],u=[],a=[],l=i.default.mark((function t(l){var o,c,f;return i.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(o=e[l],c=o.uuid?n.files.findIndex((function(e){return e.uuid===o.uuid})):o.index,-1!==c&&n.files){t.next=4;break}return t.abrupt("return","break");case 4:if("request:fail"!==o.errMsg){t.next=12;break}n.files[c].url=o.path,n.files[c].status="error",n.files[c].errMsg=o.errMsg,s.push(n.files[c]),a.push(n.files[c].url),t.next=26;break;case 12:if(n.files[c].errMsg="",n.files[c].fileID=o.url,f=/cloud:\/\/([\w.]+\/?)\S*/,!f.test(o.url)){t.next=21;break}return t.next=18,n.getTempFileURL(o.url);case 18:n.files[c].url=t.sent,t.next=22;break;case 21:n.files[c].url=o.url;case 22:n.files[c].status="success",n.files[c].progress+=1,r.push(n.files[c]),u.push(n.files[c].fileID);case 26:case"end":return t.stop()}}),t)})),o=0;case 6:if(!(o<e.length)){t.next=14;break}return t.delegateYield(l(o),"t0",8);case 8:if(c=t.t0,"break"!==c){t.next=11;break}return t.abrupt("break",14);case 11:o++,t.next=6;break;case 14:r.length>0&&(n.setEmit(),n.$emit("success",{tempFiles:n.backObject(r),tempFilePaths:u})),s.length>0&&n.$emit("fail",{tempFiles:n.backObject(s),tempFilePaths:a});case 16:case"end":return t.stop()}}),t)})))()},setProgress:function(e,t,n){this.files.length;var r=Math.round(100*e.loaded/e.total),i=t;n||(i=this.files.findIndex((function(t){return t.uuid===e.tempFile.uuid}))),-1!==i&&this.files[i]&&(this.files[i].progress=r-1,this.$emit("progress",{index:i,progress:parseInt(r),tempFile:this.files[i]}))},delFile:function(e){var t=this;this.$emit("delete",{tempFile:this.files[e],tempFilePath:this.files[e].url}),this.files.splice(e,1),this.$nextTick((function(){t.setEmit()}))},getFileExt:function(e){var t=e.lastIndexOf("."),n=e.length;return{name:e.substring(0,t),ext:e.substring(t+1,n)}},setEmit:function(){var e=[];"object"===this.returnType?(e=this.backObject(this.files)[0],this.localValue=e||null):(e=this.backObject(this.files),this.localValue||(this.localValue=[]),this.localValue=l(e)),this.$emit("input",this.localValue)},backObject:function(e){var t=[];return e.forEach((function(e){t.push({extname:e.extname,fileType:e.fileType,image:e.image,name:e.name,path:e.path,size:e.size,fileID:e.fileID,url:e.url})})),t},getTempFileURL:function(t){return y(i.default.mark((function n(){var r;return i.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return t={fileList:[].concat(t)},n.next=3,e.getTempFileURL(t);case 3:return r=n.sent,n.abrupt("return",r.fileList[0].tempFileURL||"");case 5:case"end":return n.stop()}}),n)})))()},getForm:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"uniForms",t=this.$parent,n=t.$options.name;while(n!==e){if(t=t.$parent,!t)return!1;n=t.$options.name}return t}}};t.default=x}).call(this,n(475)["default"],n(1)["default"])},493:function(e,t,n){"use strict";n.r(t);var r=n(494),i=n.n(r);for(var s in r)"default"!==s&&function(e){n.d(t,e,(function(){return r[e]}))}(s);t["default"]=i.a},494:function(e,t,n){}}]);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/uni-file-picker/components/uni-file-picker/uni-file-picker.js.map
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'uni_modules/uni-file-picker/components/uni-file-picker/uni-file-picker-create-component',
    {
        'uni_modules/uni-file-picker/components/uni-file-picker/uni-file-picker-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('1')['createComponent'](__webpack_require__(486))
        })
    },
    [['uni_modules/uni-file-picker/components/uni-file-picker/uni-file-picker-create-component']]
]);
