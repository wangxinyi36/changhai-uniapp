<template>
	<view>
		<view class="u8">
			<rich-text class="u8-text" :nodes="detail.content"></rich-text>
		</view>
		<view class="bottom">
			<view class="bottom-btn">
				<view class="bottom-btn-left">
					<view class="u5">订票电话</view>
					<view class="u6">{{detail.phoneNumber}}</view>
				</view>
				<image src="/static/icon6.svg" mode="scaleToFill" class="bottom-btn-img" @click="call"></image>
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
		onLoad() {
			this.getAirportDetail()
		},
		methods: {
			async getAirportDetail() {
				try {
					const res = await this.$http(this.$API.getAirportDetail);
					this.detail = res.data;
				} catch (e) {
					//TODO handle the exception
				}
			},
			call() {
				uni.makePhoneCall({
					phoneNumber: this.detail.phoneNumber
				});
			}
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
		padding: 20rpx;

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
