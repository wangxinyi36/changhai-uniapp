<template>
	<view class="u6">
		<view class="u7">
			<view class="u8">
				<view class="u9">100 元优惠卷</view>
				<view class="u10">周一至周二部分时间段可用 · 不限张数</view>
				<view class="u11-box-dec">过期自动退</view>
				<view class="u11">
					<view class="u11-box"><text class="u11-box-text">￥</text>89</view>
					<view class="u17">
						<image src="/static/del.svg" mode="aspectFill" class="u17-sub" @click="sub"></image>
						<view class="u17-num">{{count}}</view>
						<image src="/static/add.svg" mode="aspectFill" class="u17-add" @click="add"></image>
					</view>
				</view>
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
		</view>
		<view class="bottom">
			<view class="bottom-left">
				<view class="u184">
					<view class="u184-title">合计：</view>
					<view class="u184-text">￥100</view>
				</view>
				<view class="u185">
					<view class="u185-title">共计1件</view>
					<view class="u185-text">总优惠￥2</view>
				</view>
			</view>
			<navigator url="/pages/home/home-stay/pay-suc" hover-class="none">
				<view class="bottom-btn">提交订单</view>
			</navigator>
		</view>
	</view>

</template>

<script>
	export default {
		data() {
			return {
				count: 1,
				chooseIcon: '/static/icon-choose-no.svg',
				chooseActiveIcon: '/static/icon-choose.svg',
				payIndex: 0,
				payList: [{
					name: '微信支付',
					url: '/static/icon-wechat.svg',
				}, {
					name: '支付宝支付',
					url: '/static/icon-zhi.svg',
				}]
			};
		},
		methods: {
			add() {
				this.count++;
			},
			sub() {
				if (this.count == 1) {
					return;
				}
				this.count--;
			},
			choose(value) {
				this.payIndex = value;
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
	.u7 {
		padding: 20rpx 30rpx;

		.u8 {
			background-color: #fff;
			border-radius: 20rpx;
			padding: 20rpx;

			.u9 {
				font: normal 700 24rpx/normal '微软雅黑 Bold', '微软雅黑 Regular', '微软雅黑', sans-serif;
				color: #333;
			}

			.u10 {
				font: normal 400 24rpx/normal '微软雅黑', sans-serif;
				color: #555;
				margin: 10rpx 0;
			}

			.u11 {
				@extend .default-flex;
				justify-content: space-between;
				margin-top: 10rpx;

				&-box {
					font: normal 400 24rpx/normal '微软雅黑', sans-serif;
					color: #D9001B;

					&-dec {
						@extend .u11-box;
						color: #AAAAAA;
					}

					&-text {
						font-size: 20rpx;
					}
				}

				.u17 {
					@extend .default-flex;

					&-num {
						font: normal 700 32rpx/30rpx 'Arial Negreta', 'Arial Normal', 'Arial', sans-serif;
						color: #333;
						width: 70rpx;
						text-align: center;
					}

					&-sub,
					&-add {
						width: 30rpx;
						height: 30rpx;
					}
				}
			}
		}

		.u47 {
			margin-top: 20rpx;
			background-color: #fff;
			padding: 40rpx;
			border-radius: 20rpx;
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
			margin-left: 30rpx;

			.u184 {
				@extend .default-flex;

				&-title {
					font: normal 400 24rpx/normal '微软雅黑', sans-serif;
					color: #333
				}

				&-text {
					@extend .u184-title;
					color: #FF0000;
					font-size: 32rpx;
				}
			}

			.u185 {
				@extend .default-flex;

				&-title {
					@extend .u184-title;
				}

				&-text {
					@extend .u184-title;
					color: #FF0000;
					margin-left: 15rpx;
				}
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
