<template>
	<view>
		<image src="/static/home1.png" mode="aspectFill" class="u9-img"></image>
		<view class="u8">
			<view class="u8-text">长海机场航班信息通告：2022年5月11日因天气原因无航班计划，12日航班待定，具体航班时刻待定，单程票价160元，具体售票时间可关注“长海大长山岛机场”公众号查看最新消息
			</view>
		</view>
		<view class="bottom">
			<view class="bottom-btn">
				<view class="bottom-btn-left">
					<view class="u5">订票电话</view>
					<view class="u6">0411-8988-1366</view>
				</view>
				<image src="/static/icon6.svg" mode="scaleToFill" class="bottom-btn-img"></image>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				detail: {}
			};
		},
		onLoad() {},
		methods: {
			async getAirportDetail() {
				try {
					const res = await this.$http(this.$API.getAirportDetail);

				} catch (e) {
					//TODO handle the exception
				}
			},
		}
	}
</script>
<style>
	page {
		background-color: rgba(237, 240, 247, 1);
	}
</style>
<style lang="scss" scoped>
	.u9-img {
		width: 100%;
		height: 255rpx;
	}

	.u8 {
		padding: 0 20rpx;

		&-text {
			font: normal 400 28rpx/32rpx 'Arial Normal', 'Arial', sans-serif;
			color: #333;
			letter-spacing: 1rpx;
		}
	}

	.bottom {
		position: fixed;
		bottom: 0;
		width: 100%;
		background-color: #fff;
		height: 86rpx;
		border-radius: 12rpx 12rpx 0 0;
		@extend .default-flex;

		&-btn {
			width: 100%;
			margin: 0 40rpx;
			@extend .default-flex;
			justify-content: space-between;

			&-left {
				@extend .default-flex;

				.u5 {
					font: normal 400 28rpx/normal '微软雅黑', sans-serif;
					color: #333;
				}

				.u6 {
					@extend .u5;
					color: #CDCDCD;
					margin-left: 20rpx;
				}
			}

			&-img {
				width: 128rpx;
				height: 47rpx;
			}
		}
	}
</style>
