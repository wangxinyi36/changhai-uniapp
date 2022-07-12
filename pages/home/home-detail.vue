<template>
	<view>
		<view class="u17">
			<image :src="detail.url" mode="aspectFill" class="u17-img"></image>
			<view class="u17-box">
				<view class="u17-box-title">{{detail.name}}</view>
				<rich-text :nodes="content"></rich-text>
			</view>
		</view>
	</view>
</template>

<script>
	import { regContent } from '@/common/fun.js'
	export default {
		data() {
			return {
				title: '',
				detail: {},
				content: ''
			};
		},
		onLoad(options) {
			const _this = this;
			const eventChannel = this.getOpenerEventChannel();
			eventChannel.on('sendParams', data => {
				_this.detail = data.item;
				_this.content = regContent(data.item.content)
				uni.setNavigationBarTitle({
					title: data.item.name
				})
			})

		},

	}
</script>

<style lang="scss" scoped>
	.u17 {
		&-img {
			height: 428rpx;
			width: 100%;
		}

		&-box {
			padding: 0 30rpx;
			margin-bottom: 20px;

			&-title {
				font: 700 32rpx/30rpx '微软雅黑 Bold', '微软雅黑 Regular', '微软雅黑', sans-serif;
				color: #333;
				margin: 20rpx 0;
			}

			&-text {
				// font: 400 20rpx/30rpx 'Arial Normal', 'Arial', sans-serif;
				// color: #333;
			}
		}
	}
</style>
