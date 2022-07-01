<template>
	<view class="u99">
		<uni-forms ref="form" :rules="rules" :modelValue="formData">
			<uni-forms-item label="姓名" name="name">
				<uni-easyinput v-model="formData.name" :clearable="false" />
			</uni-forms-item>
			<uni-forms-item label="证件类型" name="cardType">
				<view class="cardType">{{formData.cardType}}</view>
			</uni-forms-item>
			<uni-forms-item label="证件号码" name="idCard" :clearable="false">
				<uni-easyinput v-model="formData.idCard" type="idcard" />
			</uni-forms-item>
			<uni-forms-item label="手机号码" name="mobile" :clearable="false">
				<uni-easyinput v-model="formData.mobile" type="number" maxlength="11" />
			</uni-forms-item>
			<uni-forms-item label="地区" name="showRegion" :clearable="false">
				<view class="district" :class="{'cardType':showRegion}" @click="open">{{showRegion || '请选择地区'}}</view>
				<uni-popup ref="popup" type="bottom">
					<view class="u67">
						<view class="u67-cancel" @click="cancel">取消</view>
						<view class="u67-confirm" @click="confirm">确定</view>
					</view>
					<picker-view indicator-style="height: 50px;" :value="region" @change="bindChange" class="u168">
						<picker-view-column>
							<view class="u168-item" v-for="(item,index) in provinceList" :key="item.id">{{item.name}}
							</view>
						</picker-view-column>
						<picker-view-column>
							<view class="u168-item" v-for="(item,index) in cityList" :key="item.id">{{item.name}}
							</view>
						</picker-view-column>
						<picker-view-column>
							<view class="u168-item" v-for="(item,index) in areaList" :key="item.id">{{item.name}}
							</view>
						</picker-view-column>
					</picker-view>
				</uni-popup>
			</uni-forms-item>
			<uni-forms-item label="详细地址" name="address" :clearable="false">
				<uni-easyinput v-model="formData.address" />
			</uni-forms-item>
		</uni-forms>
		<view class="bottom">
			<view class="bottom-btn" @click="save">完成</view>
		</view>
	</view>
</template>

<script>
	import {
		getStorage
	} from '@/common/fun.js'
	export default {
		data() {
			return {
				rules: {
					name: {
						rules: [{
							required: true,
							errorMessage: '请输入姓名',
						}]
					},
					idCard: {
						rules: [{
							required: true,
							errorMessage: '请输入身份证号',
						}]
					},
					mobile: {
						rules: [{
							required: true,
							errorMessage: '请输入手机号码',
						}]
					},
					address: {
						rules: [{
							required: true,
							errorMessage: '请输入详细地址',
						}]
					},
					showRegion: {
						rules: [{
							required: true,
							errorMessage: '请选择地区',
						}]
					},
				},
				formData: {
					name: '',
					cardType: '身份证',
					idCard: '',
					mobile: '',
					address: '',
					areaId: '',
					cityId: '',
					provinceId: 0,
					userId: '',
					showRegion: ''
				},

				region: [0, 0, 0],
				provinceList: [],
				cityList: [],
				areaList: [],
				showRegion: ''
			};
		},
		onLoad(option) {
			this.formData.userId = getStorage('wechat_userInfo').userId;
			if (option.id) {
				this.formData.id = option.id;
				this.getDetail();
				return;
			}
			this.getProvince()
		},
		methods: {
			open() {
				this.$refs.popup.open('bottom');
			},
			confirm() {
				this.formData.provinceId = this.provinceList[this.region[0]].id;
				this.formData.cityId = this.cityList[this.region[1]].id;
				this.formData.areaId = this.areaList[this.region[2]].id;
				this.showRegion =
					`${this.provinceList[this.region[0]].name}-${this.cityList[this.region[0]].name}-${this.areaList[this.region[0]].name}`;
				this.formData.showRegion = this.showRegion;
				this.cancel()
			},
			cancel() {
				this.$refs.popup.close()
			},
			bindChange(e) {
				let {
					value
				} = e.detail;
				this.region = value;
				if (this.formData.cityId != this.provinceList[value[0]].id) {
					this.formData.cityId = this.provinceList[value[0]].id;
					this.getCity()
				}
				if (this.formData.areaId != this.cityList[value[1]].id) {
					this.formData.areaId = this.cityList[value[1]].id;
					this.getArea()
				}
			},
			save() {
				const _this = this;
				this.$refs.form.validate().then(async res => {
					try {
						let form = JSON.parse(JSON.stringify(_this.formData));
						delete form.showRegion;
						const result = await _this.$http(`${_this.$API.postAddressSave}?userId=${form.userId}`, form,
							'POST');
						console.log(result)
					} catch (e) {
						//TODO handle the exception
					}
				}).catch(err => {
					console.log('表单错误信息：', err);
				})
			},
			async getDetail() {
				try {
					const {
						id,
						userId
					} = this.formData;
					const result = await this.$http(`${this.$API.getAddressDetail}?id=${id}&useId=${userId}`);
					console.log(result)
				} catch (e) {
					//TODO handle the exception
				}
			},
			async getProvince() {
				try {
					const {
						provinceId,
					} = this.formData;

					const resultProvince = await this.$http(
						`${this.$API.postSelectAddress}?parentId=${provinceId}`, {},
						'POST');
					this.provinceList = resultProvince.data;
					this.formData.cityId = resultProvince.data[0].id;

					this.getCity()
				} catch (e) {
					//TODO handle the exception
				}
			},
			async getCity() {
				try {
					const {
						provinceId,
					} = this.formData;

					const resultCity = await this.$http(
						`${this.$API.postSelectAddress}?parentId=${this.formData.cityId}`, {},
						'POST');
					this.cityList = resultCity.data;
					this.formData.areaId = resultCity.data[0].id;

					this.getArea()
				} catch (e) {
					//TODO handle the exception
				}
			},
			async getArea() {
				try {
					const {
						provinceId,
					} = this.formData;

					const resultDistrict = await this.$http(
						`${this.$API.postSelectAddress}?parentId=${this.formData.areaId}`, {},
						'POST');
					this.areaList = resultDistrict.data;
				} catch (e) {
					//TODO handle the exception
				}
			},

		}
	}
</script>

<style lang="scss" scoped>
	.u99 {
		padding: 30rpx;

		/deep/ .is-input-border {
			border: none;
		}

		/deep/ .label-text {
			font: normal 400 30rpx/normal 'Arial Normal', 'Arial', sans-serif;
			color: #333;
		}

		.uni-easyinput__placeholder-class {
			font: normal 400 28rpx/normal 'Arial Normal', 'Arial', sans-serif;
			color: #aaa;
		}

		/deep/ .uni-forms-item {
			border-bottom: 2rpx solid #999;
		}

		/deep/ .uni-error-message {
			bottom: -20px;
			padding-left: 0 !important;
		}

		/deep/ .uni-forms-item__inner {
			padding-bottom: 0;
			padding-top: 20px;
		}

		.district {
			font: normal 400 28rpx/72rpx 'Arial Normal', 'Arial', sans-serif;
			color: #aaa;
			padding-left: 20rpx;
		}

		.cardType {
			padding-left: 20rpx;
			line-height: 72rpx;
			color: #333;
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

		.u168 {
			width: 100%;
			height: 600rpx;
			background-color: #fff;

			&-item {
				line-height: 50px;
				text-align: center;
			}
		}


		.bottom {
			margin-top: 40rpx;

			&-btn {
				height: 66rpx;
				background-color: rgba(245, 154, 35, 1);
				border-radius: 20rpx;
				color: #FFFFFF;
				font: normal 400 32rpx/66rpx 'Arial Normal', 'Arial', sans-serif;
				text-align: center
			}
		}

		;
	}
</style>
