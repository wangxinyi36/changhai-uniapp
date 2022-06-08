<template>
	<view class="evaluate">
		<view class="u210">
			<view class="u210-title">商品评价</view>
			<view class="u210-textarea">
				<textarea value="" maxlength="-1" class="u209" placeholder="请输入商品评价"
					placeholder-class="placeholder-class" />
			</view>
		</view>
		<view class="u210">
			<view class="u210-title">上传照片</view>
			<view class="u243">上传图片</view>
		</view>

		<view class="bottom">
			<view class="btn">立即评价</view>
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
	.evaluate {
		padding: 20rpx;

		.u210 {
			&-title {
				font: 400 normal 32rpx normal;
				color: #333;
			}

			&-textarea {
				width: 100%;
				background-color: rgba(237, 240, 247, 1);
				border-radius: 12rpx;
				margin: 20rpx 0;
				height: 280rpx;

				.u209 {
					width: 100%;
					height: 100%;
					padding: 20rpx;
					font: 400 normal 28rpx normal;
					color: #515151;
				}

				.placeholder-class {
					font: 400 normal 24rpx;
					color: #BFBFBF;
				}
			}

			.u243 {
				@extend .u210-textarea;
				height: 143rpx;
				line-height: 143rpx;
				text-align: center;
				font: 400 normal 24rpx;
				color: #BFBFBF;
			}
		}

		.bottom {
			width: 100%;
			background-color: rgba(255, 141, 61, 1);
			border-radius: 120rpx;
			margin-top: 60rpx;

			.btn {
				height: 60rpx;
				line-height: 60rpx;
				font: 400 normal 32rpx;
				color: #FFFFFF;
				text-align: center;
			}
		}
	}
</style>
