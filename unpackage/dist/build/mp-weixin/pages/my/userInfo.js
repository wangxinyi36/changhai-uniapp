(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/my/userInfo"],{"31bd":function(e,n,t){"use strict";t.r(n);var r=t("33d7"),a=t("99cc");for(var u in a)"default"!==u&&function(e){t.d(n,e,(function(){return a[e]}))}(u);t("54ee");var i,o=t("f0c5"),s=Object(o["a"])(a["default"],r["b"],r["c"],!1,null,"6b199e5e",null,!1,r["a"],i);n["default"]=s.exports},"33d7":function(e,n,t){"use strict";t.d(n,"b",(function(){return a})),t.d(n,"c",(function(){return u})),t.d(n,"a",(function(){return r}));var r={uniList:function(){return t.e("uni_modules/uni-list/components/uni-list/uni-list").then(t.bind(null,"8262"))},uniListItem:function(){return t.e("uni_modules/uni-list/components/uni-list-item/uni-list-item").then(t.bind(null,"c863"))},uniFilePicker:function(){return Promise.all([t.e("common/vendor"),t.e("uni_modules/uni-file-picker/components/uni-file-picker/uni-file-picker")]).then(t.bind(null,"6d6b"))}},a=function(){var e=this,n=e.$createElement;e._self._c},u=[]},"4b93":function(e,n,t){},"54ee":function(e,n,t){"use strict";var r=t("4b93"),a=t.n(r);a.a},"99cc":function(e,n,t){"use strict";t.r(n);var r=t("e0fd"),a=t.n(r);for(var u in r)"default"!==u&&function(e){t.d(n,e,(function(){return r[e]}))}(u);n["default"]=a.a},e0fd:function(e,n,t){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=i(t("a34a")),a=t("a2e9"),u=t("1334");function i(e){return e&&e.__esModule?e:{default:e}}function o(e,n,t,r,a,u,i){try{var o=e[u](i),s=o.value}catch(c){return void t(c)}o.done?n(s):Promise.resolve(s).then(r,a)}function s(e){return function(){var n=this,t=arguments;return new Promise((function(r,a){var u=e.apply(n,t);function i(e){o(u,r,a,i,s,"next",e)}function s(e){o(u,r,a,i,s,"throw",e)}i(void 0)}))}}var c={data:function(){return{userInfo:{},avatar:{},imageStyles:{width:50,height:50,border:{radius:"50%"}},userForm:{id:"",avatar:"",nickname:""}}},onLoad:function(){this.userInfo=(0,a.getStorage)("wechat_userInfo"),Object.assign(this.userForm,{id:this.userInfo.userId,avatar:this.userInfo.avatarUrl,nickname:this.userInfo.nickName}),this.avatar={name:this.userInfo.nickName,extname:"png",url:this.userInfo.avatarUrl}},methods:{select:function(e){var n=this;return s(r.default.mark((function t(){var a;return r.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,u.upload)(n.$API.postStorageCreate,e.tempFiles[0].path);case 3:a=t.sent,n.avatar={name:e.tempFiles[0].name,extname:e.tempFiles[0].extname,url:a},t.next=10;break;case 7:t.prev=7,t.t0=t["catch"](0),console.log("错误",t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))()},save:function(){var n=this;return s(r.default.mark((function t(){var u,i;return r.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,u=JSON.parse(JSON.stringify(n.userForm)),u.avatar=n.avatar.url,t.next=5,n.$http(n.$API.postAuthUpdate,u,"POST");case 5:i=t.sent,Object.assign(n.userInfo,{avatarUrl:i.data.avatar,nickName:i.data.nickname}),(0,a.setStorage)("wechat_userInfo",n.userInfo),(0,a.sendEvent)(n,{isReload:!0}),e.showToast({title:"更新成功！",icon:"none",success:function(n){setTimeout((function(){e.navigateBack()}),1500)}}),t.next=14;break;case 12:t.prev=12,t.t0=t["catch"](0);case 14:case"end":return t.stop()}}),t,null,[[0,12]])})))()}}};n.default=c}).call(this,t("543d")["default"])},e235:function(e,n,t){"use strict";(function(e){t("d0f3");r(t("66fd"));var n=r(t("31bd"));function r(e){return e&&e.__esModule?e:{default:e}}wx.__webpack_require_UNI_MP_PLUGIN__=t,e(n.default)}).call(this,t("543d")["createPage"])}},[["e235","common/runtime","common/vendor"]]]);