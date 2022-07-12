<template>
	<view class="container">
		<view class="title">{{detail.title}}</view>
		<rich-text class="content" :nodes="detail.content"></rich-text>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				detail: {}
			};
		},
		onLoad() {
			const _this = this;
			const eventChannel = this.getOpenerEventChannel();
			eventChannel.on('sendParams', data => {
				_this.detail = data.item;
			})
		},
	}
</script>

<style lang="scss" scoped>
	.container {
		padding: 30rpx;

		.title {
			font: normal 700 32rpx/normal '微软雅黑 Bold', '微软雅黑 Regular', '微软雅黑', sans-serif;
			color: #333;
			margin-bottom: 30rpx;
		}
	}
</style>
