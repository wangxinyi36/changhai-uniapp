<template>
	<view>
		<view class="u55">
			<image src="/static/pay-suc.svg" mode="aspectFill" class="icon-suc"></image>
			<view class="u55-text">支付成功</view>
		</view>
		<view class="bottom">
			<view class="bottom-btn">返回商家</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			};
		}
	}
</script>

<style lang="scss" scoped>
	.u55 {
		@extend .default-flex;
		flex-direction: column;
		justify-content: center;
		margin-top: 100rpx;

		.icon-suc {
			width: 142rpx;
			height: 142rpx;
		}

		&-text {
			font: normal 400 40rpx/normal '微软雅黑', sans-serif;
			color: #333;
			margin-top: 20rpx;
		}
	}

	.bottom {
		position: fixed;
		bottom: 100rpx;
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;

		&-btn {
			@extend .u55-text;
		}
	}
</style>
