<template>
	<view class="u99">
		<uni-forms ref="form" :rules="rules">
			<uni-forms-item label="姓名" name="name">
				<uni-easyinput v-model="formData.name" placeholder="请填写姓名" :clearable="false" />
			</uni-forms-item>
			<uni-forms-item label="证件类型" name="idType">
				<uni-easyinput v-model="formData.idType" />
			</uni-forms-item>
			<uni-forms-item label="证件号码" name="idCard" :clearable="false">
				<uni-easyinput v-model="formData.idCard" placeholder="请填写证件号码" />
			</uni-forms-item>
			<uni-forms-item label="手机号码" name="tel" :clearable="false">
				<uni-easyinput v-model="formData.tel" placeholder="请填写手机号码" />
			</uni-forms-item>
			<uni-forms-item label="地区" name="region" :clearable="false">
				<uni-easyinput v-model="formData.region" placeholder="请填写地区" />
			</uni-forms-item>
			<uni-forms-item label="详细地址" name="address" :clearable="false">
				<uni-easyinput v-model="formData.address" placeholder="请填写详细地址" />
			</uni-forms-item>
		</uni-forms>
		<view class="bottom">
			<view class="bottom-btn">完成</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				rules: {},
				formData: {
					name: '',
					idType: '',
					idCard: '',
					tel: '',
					region: '',
					address: '',
				}
			};
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

		.uni-forms-item {
			border-bottom: 2rpx solid #999;

			/deep/ .uni-forms-item__inner {
				padding-bottom: 0;
				padding-top: 40rpx;
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
