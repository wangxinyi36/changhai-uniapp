<template>
	<view class="u99">
		<uni-forms ref="form" :rules="rules" :modelValue="formData">
			<uni-forms-item label="姓名" name="name">
				<uni-easyinput v-model="formData.name" placeholder="请填写姓名" :clearable="false" />
			</uni-forms-item>
			<uni-forms-item label="证件类型" name="idType">
				<uni-easyinput v-model="formData.idType" />
			</uni-forms-item>
			<uni-forms-item label="证件号码" name="idCard" :clearable="false">
				<uni-easyinput v-model="formData.idCard" placeholder="请填写证件号码" />
			</uni-forms-item>
			<uni-forms-item label="手机号码" name="mobile" :clearable="false">
				<uni-easyinput v-model="formData.mobile" maxlength="11" placeholder="请填写手机号码" />
			</uni-forms-item>
			<uni-forms-item label="地区" name="region" :clearable="false">
				<uni-easyinput v-model="formData.region" placeholder="请填写地区" />
			</uni-forms-item>
			<uni-forms-item label="详细地址" name="address" :clearable="false">
				<uni-easyinput v-model="formData.address" placeholder="请填写详细地址" />
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
				},
				formData: {
					name: '',
					mobile: '',
					address: '',
					id: '',
					areaId: 0,
					cityId: 0,
					provinceId: 0,
					userId: 0
				}
			};
		},
		onLoad(option) {
			this.formData.userId = getStorage('wechat_userInfo').userId;
			if (option.id) {
				this.formData.id = option.id;
				this.getDetail()
			}
		},
		methods: {
			save() {
				const _this = this;
				this.$refs.form.validate().then(async res => {
					try {
						const result = await _this.$http(_this.$API.postAddressSave, _this.formData,
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
			}
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
