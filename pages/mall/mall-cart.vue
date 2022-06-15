<template>
	<view>
		<view class="u113">
			<uni-nav-bar class="u113-nav" title="购物车" left-icon="left" right-text="清空" fixed :border="false"
				@clickLeft="clickLeft">
			</uni-nav-bar>
		</view>
		<view class="u70">
			<view class="u70-item" v-for="item,index in list" :key="index">
				<image :src="icon" mode="aspectFill" class="u70-item-img"></image>
				<view class="u70-item-box">
					<image :src="item.url" mode="aspectFill" class="u71-img"></image>
					<view class="u71-box">
						<view class="u71-box-name">{{item.name}}</view>
						<view class="u71-box-weight">{{item.weight}}克</view>
						<view class="u71-box-three">
							<view class="u71-box-three-pay">￥{{item.pay}}</view>
							<view class="u72">
								<image src="/static/del.svg" mode="aspectFill" class="u72-img"></image>
								<view class="u72-text">1</view>
								<image src="/static/add.svg" mode="aspectFill" class="u72-img"></image>
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
		<view class="bottom">
			<view class="bottom-box">
				<view class="bottom-left">
					<image :src="icon" mode="aspectFill" class="bottom-left-img"></image>
					<view class="bottom-left-text">全选</view>
				</view>
				<view class="bottom-right">
					<view class="bottom-right-box">
						<view class="bottom-right-box-name">已选择2项</view>
						<view class="bottom-right-box-text"><text style="font-size: 24rpx;">共计</text>500元</view>
					</view>
					<navigator url="/pages/home/tasty-food/tasty-food-pay" hover-class="none">
						<view class="bottom-right-btn">一键付款</view>
					</navigator>

				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				icon: '/static/u103.svg',
				iconActive: '/static/u103-active.svg',
				list: [{
					url: '/static/gift1.png',
					name: '海参',
					weight: 555,
					pay: 155,
					count: 0
				}, {
					url: '/static/gift1.png',
					name: '海参',
					weight: 555,
					pay: 155,
					count: 0
				}, {
					url: '/static/gift1.png',
					name: '海参',
					weight: 555,
					pay: 155,
					count: 0
				}, {
					url: '/static/gift1.png',
					name: '海参',
					weight: 555,
					pay: 155,
					count: 0
				}]
			};
		},
		methods: {
			clickLeft() {
				uni.navigateBack()
			}
		}
	}
</script>

<style lang="scss" scoped>
	.u113 {
		&-nav {
			/deep/ .uni-nav-bar-text {
				font-size: 32rpx;
				font-weight: bold;
			}

			/deep/ .uni-icons {
				font-size: 25px !important;
			}
		}
	}

	.u70 {
		padding: 0 20rpx 20rpx 20rpx;

		&-item {
			@extend .default-flex;
			margin: 40rpx 0;

			&-img {
				width: 40rpx;
				height: 40rpx;
				margin-right: 20rpx;
			}

			&-box {
				flex: 1;
				display: flex;

				.u71 {
					&-img {
						width: 164rpx;
						height: 133rpx;
						border-radius: 12rpx;
						margin-right: 20rpx;
					}

					&-box {
						flex: 1;

						&-name {
							font: normal 400 30rpx/normal '微软雅黑', sans-serif;
							color: #333;
						}

						&-weight {
							@extend .u71-box-name;
							color: #D7D7D7;
							font-size: 24rpx;
							margin: 10rpx 0;
						}

						&-three {
							@extend .default-flex;
							justify-content: space-between;

							&-pay {
								@extend .u71-box-name;
								color: #D9001B;
							}

							.u72 {
								@extend .default-flex;

								&-img {
									width: 30rpx;
									height: 30rpx;
								}

								&-text {
									@extend .u71-box-name;
									font-size: 28rpx;
									margin: 0 30rpx;
								}
							}
						}
					}
				}
			}
		}
	}

	.bottom {
		position: fixed;
		width: 100%;
		height: 100rpx;
		background-color: #fff;
		bottom: 0;

		&-box {
			margin: 0 20rpx;
			@extend .default-flex;
			justify-content: space-between;
		}

		&-left {
			@extend .default-flex;

			&-img {
				width: 40rpx;
				height: 40rpx;
				margin-right: 20rpx;
			}

			&-text {
				font: normal 400 28rpx/normal 'Arial Normal', 'Arial', sans-serif;
				color: #000;
			}
		}

		&-right {
			@extend .default-flex;

			&-box {
				margin-right: 40rpx;

				&-name {
					font: normal 400 24rpx/normal 'Arial Normal', 'Arial', sans-serif;
					color: #d4d4d4;
				}

				&-text {
					@extend .bottom-right-box-name;
					color: #FF0000;
					font-size: 28rpx;
				}
			}

			&-btn {
				width: 180rpx;
				height: 81rpx;
				color: #fff;
				border-radius: 120rpx;
				background-color: rgba(255, 141, 61, 1);
				text-align: center;
				line-height: 81rpx;
			}
		}
	}
</style>
