<template>
	<view class="pay">
		<view class="u7">
			<view class="u8">
				<view class="u9">
					<view class="u9-label">入住日期</view>
					<view class="u9-time">2022.5.18(周五) — 2022.6.1(周六)</view>
				</view>
				<view class="u11">
					<view class="u11-box">
						<view class="u11-box-name">精品单人间</view>
						<view class="u11-box-dec">1张单人床 · 32㎡</view>
						<view class="u11-box-tip">15分钟内可免费取消</view>
					</view>
					<view class="u17">
						<view class="u17-sub">-</view>
						<view class="u17-num">1</view>
						<view class="u17-add">+</view>
					</view>
				</view>
			</view>
			<view class="u63">
				<navigator url="/pagesStay/home-stay/home-stay-people" hover-class="none">
					<view class="u63-box">添加入住人</view>
				</navigator>
			</view>
			<view class="u25">
				<view class="u25-box">发票</view>
				<view class="u25-text">离店当日向商家申请开具</view>
			</view>
			<view class="u47">
				<view class="u47-box" v-for="item,index in payList" :key="index" @click="choose(index)">
					<view class="u47-box-left">
						<image :src="item.url" mode="aspectFill" class="icon-wechat"></image>
						<view class="u47-box-left-text">{{item.name}}</view>
					</view>
					<image :src="payIndex == index ? chooseActiveIcon: chooseIcon" mode="aspectFill"
						class="u47-box-choose">
					</image>
				</view>
			</view>
			<view class="u25">
				<!-- <view class="u25-box">立即投诉</view> -->
			</view>
		</view>
		<view class="bottom">
			<view class="bottom-left">
				您需支付<text class="bottom-left-text">￥196</text>
			</view>
			<navigator url="/pagesStay/home-stay/pay-suc" hover-class="none">
				<view class="bottom-btn">去支付</view>
			</navigator>
		</view>
	</view>

</template>

<script>
	export default {
		data() {
			return {
				chooseIcon: '/static/icon-choose-no.svg',
				chooseActiveIcon: '/static/icon-choose.svg',
				payIndex: 0,
				payList: [{
					name: '微信支付',
					url: '/static/icon-wechat.svg',
				}]
			};
		},
		methods: {
			choose(value) {
				this.payIndex = value;
			}
		}
	}
</script>
<style lang="scss">
	page {
		background-color: #edf0f7;
	}
</style>
<style lang="scss" scoped>
	.u7 {
		padding: 20rpx 30rpx;

		.u8 {
			background-color: #fff;
			border-radius: 20rpx;
			padding: 20rpx;

			.u9 {
				@extend .default-flex;

				&-label {
					font: normal 400 28rpx/normal '微软雅黑', sans-serif;
					color: #333;
				}

				&-time {
					@extend .u9-label;
					font-size: 24rpx;
					margin-left: 20rpx;
				}
			}

			.u11 {
				@extend .default-flex;
				justify-content: space-between;
				margin-top: 10rpx;

				&-box {
					&-name {
						@extend .u9-label;
						font-size: 28rpx;
					}

					&-dec {
						font: normal 400 24rpx/normal '微软雅黑', sans-serif;
						color: #AAAAAA;
						margin: 10rpx 0;
					}

					&-tip {
						font: normal 400 24rpx/normal '微软雅黑', sans-serif;
						color: #F59A23;
					}
				}

				.u17 {
					@extend .default-flex;
					border: 1rpx solid rgba(170, 170, 170, 1);

					&-num {
						border: 1rpx solid rgba(170, 170, 170, 1);
						border-top: 0;
						border-bottom: 0;
						width: 64rpx;
						text-align: center;
					}

					&-sub,
					&-add {
						width: 40rpx;
						@extend .default-flex;
						justify-content: center;
					}
				}
			}
		}

		.u63 {
			margin-top: 20rpx;
			background-color: #fff;
			padding: 40rpx;
			border-radius: 20rpx;

			&-box {
				border: 2rpx solid rgba(245, 154, 35, 1);
				border-radius: 20rpx;
				color: #F59A23;
				font: normal 400 24rpx/normal 'Arial Normal', 'Arial', sans-serif;
				text-align: center;
				padding: 15rpx 0;
			}
		}

		.u25 {
			@extend .u63;
			padding: 10rpx 20rpx;
			@extend .default-flex;
			justify-content: space-between;

			&-box {
				font: normal 400 30rpx/normal '微软雅黑', sans-serif;
				color: #000;
			}

			&-text {
				color: #D7D7D7;
				font: normal 400 24rpx/normal '微软雅黑', sans-serif;
			}
		}

		.u47 {
			@extend .u63;
			padding: 30rpx 60rpx;

			&-box {
				@extend .default-flex;
				justify-content: space-between;

				&-left {
					@extend .default-flex;

					.icon-wechat {
						width: 30rpx;
						height: 25rpx;
					}

					&-text {
						font: normal 400 24rpx/normal '微软雅黑', sans-serif;
						color: #333;
						margin-left: 20rpx;
					}
				}

				&:nth-of-type(2) {
					margin-top: 30rpx;
				}

				&-choose {
					width: 30rpx;
					height: 30rpx;
				}
			}

			&-text {
				color: #D7D7D7;
				font: normal 400 24rpx/normal '微软雅黑', sans-serif;
			}
		}
	}

	.bottom {
		position: fixed;
		bottom: 0;
		width: 100%;
		background-color: #fff;
		@extend .default-flex;
		justify-content: space-between;
		height: 108rpx;

		&-left {
			font: normal 400 24rpx/normal '微软雅黑', sans-serif;
			color: #333;
			margin-left: 30rpx;

			&-text {
				color: #D9001B;
				font-size: 32rpx;
			}
		}

		&-btn {
			width: 256rpx;
			height: 94rpx;
			background-color: rgba(245, 154, 35, 1);
			border-radius: 92rpx;
			color: #FFFFFF;
			font: normal 400 36rpx/normal 'Arial Normal', 'Arial', sans-serif;
			text-align: center;
			line-height: 94rpx;
			margin-right: 20rpx;
		}
	}
</style>
