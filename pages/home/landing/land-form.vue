<template>
	<view>
		<uni-forms :rules="rules" ref="landForm" :modelValue="landFormData">
			<uni-forms-item label="是否本人填表" :label-width="100" name="ifOwner">
				<uni-data-checkbox v-model="landFormData.ifOwner" :localdata="owns" />
			</uni-forms-item>
			<uni-forms-item label="姓名" label-position="top" name="name">
				<uni-easyinput v-model="landFormData.name" :clearable="false" placeholder="请输入姓名" />
			</uni-forms-item>
			<uni-forms-item label="性别" :label-width="50" name="sex">
				<uni-data-checkbox v-model="landFormData.sex" :localdata="sexs" />
			</uni-forms-item>
			<uni-forms-item label="身份证号" label-position="top" name="idcard">
				<uni-easyinput v-model="landFormData.idcard" type="idcard" :clearable="false" placeholder="请输入身份证号" />
			</uni-forms-item>
			<uni-forms-item label="手机号" label-position="top" name="mobile">
				<uni-easyinput v-model="landFormData.mobile" type="number" maxlength="11" :clearable="false"
					placeholder="请输入手机号" />
			</uni-forms-item>
			<uni-forms-item label="上传健康码/行程码/核酸报告" label-position="top" :label-width="200" name="url">
				<view class="u54">(根据疫情防控有关要求，来自大连市的登岛人员需提供国务院行程码、健康码。来自大连市以外的登岛人员需提供国务院行程码、健康码以及48小时以内核酸报告。)</view>
				<uni-file-picker v-model="landFormData.url" file-mediatype="image" @select="select" @delete="deletePic">
				</uni-file-picker>
			</uni-forms-item>
			<uni-forms-item label="进岛原因" label-position="top" name="reason">
				<uni-easyinput v-model="landFormData.reason" :clearable="false" placeholder="请输入进岛原因" />
			</uni-forms-item>
			<uni-forms-item label-position="top" class="u61" name="uptime">
				<template slot="label">
					<view class="u60">进岛时间<text class="u54 u60-text">需要提前一天登岛报备</text></view>
				</template>
				<uni-datetime-picker type="datetime" v-model="landFormData.uptime" placeholder=" ">
				</uni-datetime-picker>
			</uni-forms-item>
			<uni-forms-item label="计划上船港口" name="upport" label-position="top" :label-width="100">
				<uni-easyinput v-model="landFormData.upport" :clearable="false" placeholder="请输入计划上船港口" />
			</uni-forms-item>
			<uni-forms-item label="进岛前居住地址" name="upAddress" label-position="top" :label-width="110" class="u74">
				<view class="u66" :class="{'u66-value':landFormData.upAddress}" @click="open('popup')">
					{{landFormData.upAddress || '请选择'}}
				</view>
				<uni-popup ref="popup" type="bottom">
					<view class="u67">
						<view class="u67-cancel" @click="cancel('popup')">取消</view>
						<view class="u67-confirm" @click="confirm('popup')">确定</view>
					</view>
					<picker-view indicator-style="height: 50px;" :value="form_upAddress" @change="bindChange"
						class="u168">
						<picker-view-column>
							<view class="u168-item" v-for="(item,index) in province" :key="index">{{item.text}}</view>
						</picker-view-column>
						<picker-view-column>
							<view class="u168-item" v-for="(item,index) in city" :key="index">{{item.text}}</view>
						</picker-view-column>
						<picker-view-column>
							<view class="u168-item" v-for="(item,index) in district" :key="index">{{item.text}}</view>
						</picker-view-column>
					</picker-view>
				</uni-popup>
			</uni-forms-item>
			<uni-forms-item label="进岛前居住详细地址" label-position="top" :label-width="140" name="upAddressDetail"
				class="u75">
				<uni-easyinput v-model="landFormData.upAddressDetail" type="textarea" :clearable="false"
					placeholder="详细地址" />
			</uni-forms-item>
			<uni-forms-item label="进入我县居住地址" name="downAddress" label-position="top" :label-width="120">
				<view class="u66" :class="{'u66-value':landFormData.downAddress}" @click="open('popup-one')">
					{{landFormData.downAddress || '请选择'}}
				</view>
				<uni-popup ref="popup-one" type="bottom">
					<view class="u67">
						<view class="u67-cancel" @click="cancel('popup-one')">取消</view>
						<view class="u67-confirm" @click="confirm('popup-one')">确定</view>
					</view>
					<picker-view indicator-style="height: 50px;" :value="land_downAddress" @change="bindChange2"
						class="u168">
						<picker-view-column>
							<view class="u168-item" v-for="(item,index) in land_address" :key="index">{{item.name}}
							</view>
						</picker-view-column>
					</picker-view>
				</uni-popup>

			</uni-forms-item>
			<uni-forms-item label="进入我县居住详细地址" name="downAddressDetail" label-position="top" :label-width="140">
				<uni-easyinput v-model="landFormData.downAddressDetail" type="textarea" :clearable="false"
					placeholder="详细地址" />
			</uni-forms-item>
			<uni-forms-item label="进岛前15天活动轨迹" name="trace" label-position="top" :label-width="140">
				<uni-easyinput v-model="landFormData.trace" type="textarea" :clearable="false"
					placeholder="请输入进岛前15天活动轨迹" />
			</uni-forms-item>
			<uni-forms-item label="单位" label-position="top" name="unit">
				<uni-easyinput v-model="landFormData.unit" :clearable="false" placeholder="请输入单位" />
			</uni-forms-item>
			<uni-forms-item label="职业" label-position="top" name="profession">
				<uni-easyinput v-model="landFormData.profession" :clearable="false" placeholder="请输入职业" />
			</uni-forms-item>
			<uni-forms-item label="是否有48小时内核酸报告" :label-width="170" name="ifHealth">
				<uni-data-checkbox v-model="landFormData.ifHealth" :localdata="report" />
			</uni-forms-item>
		</uni-forms>

		<view class="bottom">
			<view class="btn" @click="submit('landForm')">申请</view>
		</view>
	</view>
</template>

<script>
	import {
		getRegionList,
		showToast
	} from '@/common/fun.js'
	import {
		upload
	} from '@/common/http.js'
	import {
		COMMON_ADDRESS
	} from '@/common/common.js'
	export default {
		data() {
			return {
				rules: {
					ifOwner: {
						rules: [{
							required: true,
							errorMessage: '请选择',
						}]
					},
					name: {
						rules: [{
							required: true,
							errorMessage: '请输入',
						}]
					},
					sex: {
						rules: [{
							required: true,
							errorMessage: '请选择',
						}]
					},
					idcard: {
						rules: [{
							required: true,
							errorMessage: '请输入',
						}]
					},
					mobile: {
						rules: [{
							required: true,
							errorMessage: '请输入',
						}]
					},
					url: {
						rules: [{
							required: true,
							errorMessage: '请上传',
						}]
					},
					reason: {
						rules: [{
							required: true,
							errorMessage: '请输入',
						}]
					},
					uptime: {
						rules: [{
							required: true,
							errorMessage: '请选择',
						}]
					},
					upport: {
						rules: [{
							required: true,
							errorMessage: '请输入',
						}]
					},
					upAddress: {
						rules: [{
							required: true,
							errorMessage: '请选择',
						}]
					},
					upAddressDetail: {
						rules: [{
							required: true,
							errorMessage: '请输入',
						}]
					},
					downAddress: {
						rules: [{
							required: true,
							errorMessage: '请选择',
						}]
					},
					downAddressDetail: {
						rules: [{
							required: true,
							errorMessage: '请输入',
						}]
					},
					trace: {
						rules: [{
							required: true,
							errorMessage: '请输入',
						}]
					},
					unit: {
						rules: [{
							required: true,
							errorMessage: '请输入',
						}]
					},
					profession: {
						rules: [{
							required: true,
							errorMessage: '请输入',
						}]
					},
					ifHealth: {
						rules: [{
							required: true,
							errorMessage: '请选择',
						}]
					},

				},
				dataTree: [],
				landFormData: {
					ifOwner: '',
					name: '',
					sex: '',
					idcard: '',
					mobile: '',
					url: [],
					reason: '',
					uptime: '',
					upport: '',
					upAddress: '',
					upAddressDetail: '',
					downAddress: '',
					downAddressDetail: '',
					trace: '',
					unit: '',
					profession: '',
					ifHealth: '',
				},
				owns: [{
					text: '本人',
					value: 0
				}, {
					text: '代填',
					value: 1
				}],
				report: [{
					text: '有',
					value: 0
				}, {
					text: '无',
					value: 1
				}],
				sexs: [{
					text: '男',
					value: 0
				}, {
					text: '女',
					value: 1
				}],
				province: [],
				city: [],
				district: [],
				form_upAddress: [0, 0, 0],
				land_address: COMMON_ADDRESS,
				land_downAddress: [0],
			};
		},
		onLoad() {
			this.getProvince()
		},
		methods: {
			open(name) {
				this.$refs[name].open('bottom')
			},
			cancel(name) {
				this.$refs[name].close()
			},
			confirm(name) {
				if (name == 'popup') {
					this.landFormData.upAddress =
						`${this.province[this.form_upAddress[0]].text}-${this.city[this.form_upAddress[1]].text}-${this.district[this.form_upAddress[2]].text}`;
				} else if (name == 'popup-one') {
					this.landFormData.downAddress = this.land_address[this.land_downAddress[0]].name;
				}
				this.cancel(name)
			},
			async select(e) {
				for (let i = 0; i < e.tempFiles.length; i++) {
					try {
						const res = await upload(this.$API.postStorageCreate, e.tempFiles[i].path);
						this.landFormData.url.push({
							name: e.tempFiles[i].name,
							extname: e.tempFiles[i].extname,
							url: res,
						})
					} catch (e) {
						console.log("错误", e)
						//TODO handle the exception
					}

				}
			},
			async deletePic(e) {
				let {
					url
				} = this.landFormData;
				let index = this.landFormData.url.findIndex(item => item == e.tempFile);
				url.splice(index, 1)
				this.landFormData.url = url;
				console.log(this.landFormData.url)
			},
			submit(ref) {
				let _this = this;
				this.$refs[ref].validate().then(async function(res) {
					let formData = JSON.parse(JSON.stringify(_this.landFormData));
					formData.url = formData.url.map(item => {
						return item.url;
					})
					formData.url = formData.url.join(',')
					const result = await _this.$http(_this.$API.postHealth, formData, 'POST');
					if (result.errno != 0) {
						showToast(result.errmsg)
					}
					console.log(result)
				}).catch(err => {
					console.log(err)
					showToast('表单内容皆为必填项！')
				})
			},
			async getProvince() {
				try {
					const res = await getRegionList();
					this.province = res;
					this.city = res[0].children;
					this.district = res[0].children[0].children;
					// console.log(res)
				} catch (e) {
					//TODO handle the exception
				}
			},
			bindChange(val) {
				let p = val.detail.value[0]
				let c = val.detail.value[1]
				this.city = this.province[p].children;
				this.district = this.province[p].children[c].children;
				this.form_upAddress = val.detail.value;
			},
			bindChange2(val) {
				this.land_downAddress = val.detail.value
			}
		}
	}
</script>

<style lang="scss" scoped>
	/deep/ .uni-forms {
		padding: 0 20rpx;

		/deep/ .uni-forms-item__inner {
			padding-bottom: 0;
		}

		.u168 {
			width: 100%;
			height: 600rpx;
			background-color: #fff;

			&-item {
				line-height: 50px;
				text-align: center;
			}
		}

		.u54 {
			font: 400 normal 24rpx normal;
			color: #B5B5B5;
			letter-spacing: 1rpx;
			margin-bottom: 20rpx;
		}

		.u60 {
			font: 400 normal 26rpx normal;
			color: #666;

			&-text {
				margin-left: 10rpx;
			}
		}
	}

	.u75 {
		margin-top: 10rpx;
	}

	.u66 {
		border: 1px solid rgb(229, 229, 229);
		border-radius: 8rpx;
		height: 36rpx;
		color: #999;
		font-size: 24rpx;
		font-weight: 200;
		padding: 20rpx;
		margin-bottom: 10rpx;

		&-value {
			font-weight: 400;
			color: #333;
			font-size: 26rpx
		}
	}

	.u67 {
		@extend .default-flex;
		justify-content: space-between;
		background-color: #fff;
		border-radius: 20rpx 20rpx 0 0;
		padding: 20rpx;
		box-sizing: border-box;

		&-confirm {
			color: rgba(49, 208, 230, 1);
		}

	}

	.u61 {
		/deep/ .uni-date-x--border {
			border: 1px solid #e5e5e5;
			height: 36px;
		}

		/deep/ .uni-date-x {
			height: 100%;
		}
	}

	.bottom {
		padding: 0 20px 40px 20px;
		margin: 20px 0;

		.btn {
			height: 56rpx;
			background: rgba(49, 208, 230, 1);
			font: 400 normal 24rpx normal;
			color: #fff;
			text-align: center;
			line-height: 56rpx;
			border-radius: 12rpx;
		}


	}
</style>
