<template>
	<view class="u2">
		<view class="combo">
			<view class="u240">螃蟹大锅烩</view>
			<view class="u202">
				<view class="u202-title">螃蟹大锅烩</view>
				<image src="/static/food2.svg" mode="aspectFill" class="u202-img"></image>
				<view class="u202-pay"><text class="u202-pay-text">￥</text>155</view>
				<view class="u207" @click="open">
					<view class="u207-box">省</view>
					<view class="u207-text">你有50元优惠劵待领取，本店可用</view>
					<image src="/static/icon8.svg" mode="aspectFill" class="u207-img"></image>
				</view>
				<view class="u210">
					<view class="u210-box">
						<view class="u210-box-title">限制</view>
						<view class="u210-box-text">商品每桌限用1张劵</view>
					</view>
					<view class="u210-box">
						<view class="u210-box-title">限制</view>
						<view class="u210-box-text">商品每桌限用1张劵</view>
					</view>
					<view class="u210-box">
						<view class="u210-box-title">限制</view>
						<view class="u210-box-text">商品每桌限用1张劵</view>
					</view>
				</view>
			</view>
			<view class="u216">
				<view class="u216-title">套餐</view>
				<view class="u216-box">
					<view class="u216-box-name">海鲜大杂烩</view>
					<view class="u216-box-text">
						<view class="u216-box-text-count">（1份）</view>
						<view class="u216-box-text-pay">￥155</view>
					</view>
				</view>
			</view>
			<view class="u241">
				<view class="u241-title">购买须知</view>
				<view class="u241-text">有效期</view>
				<view class="u241-text">2022.4.15 至 2022.4.16 （周末、法定节假日通用）</view>
				<view class="u241-text">使用时间</view>
				<view class="u241-text">14：00 - 24：00，0：00 - 02：00</view>
				<view class="u241-text">使用规则</view>
				<view class="line"></view>
				<view class="u241-box">
					<view class="u241-box-text">更多规则</view>
					<uni-icons type="bottom" size="15"></uni-icons>
				</view>
			</view>
			<view class="u221">
				<view class="u221-title">商户</view>
				<view class="u221-box">
					<view class="u221-box-left">
						<image src="/static/home1.jpg" mode="aspectFill" class="u221-box-left-img"></image>
						<view class="u224">
							<view class="u224-name">新鲜海鲜</view>
							<view class="u224-box">
								<uni-rate v-model="grade" readonly :size="13" />
								<view class="u224-box-pay">￥20/人</view>
							</view>
							<view class="u224-address">大长山岛</view>
						</view>
					</view>
					<view class="u221-box-right">
						<view class="u234">
							<image src="/static/icon9.svg" class="u234-img" mode="aspectFill"></image>
						</view>
						<view class="u234-text">联系商家</view>
					</view>
				</view>
			</view>
		</view>
		<view class="bottom">
			<view class="bottom-left">
				<view class="u237"><text class="u237-text">￥</text>105</view>
				<view class="u238">155</view>
			</view>
			<navigator url="/pages/home/home-stay/pay-suc" hover-class="none">
				<view class="bottom-btn">立即抢购</view>
			</navigator>
		</view>
		<uni-popup ref="popup" type="bottom">
			<view class="u268">
				<view class="u268-title">优惠券</view>
				<view class="u268-list">
					<view class="u268-list-item" v-for="item,index in list" :key="index">
						<view class="u268-list-item-box">
							<view class="u268-list-item-name">{{item.name}}</view>
							<view class="u268-list-item-tip">{{item.tip}}</view>
							<view class="u268-list-item-pay">￥{{item.pay}}</view>
						</view>
						<view class="u268-list-item-btn">领取</view>
					</view>
				</view>
			</view>
		</uni-popup>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				grade: 4,
				list: [{
					name: '满150减50',
					tip: '周一至周日全天可用',
					pay: 50
				}, {
					name: '满150减50',
					tip: '周一至周日全天可用',
					pay: 50
				}, {
					name: '满150减50',
					tip: '周一至周日全天可用',
					pay: 50
				}]
			};
		},
		methods: {
			open() {
				this.$refs.popup.open('bottom')
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
	.combo {
		padding: 20rpx;

		.u240 {
			font: normal 700 32rpx/normal '微软雅黑 Bold', '微软雅黑 Regular', '微软雅黑', sans-serif;
			color: #FD7A21;
		}

		.u202 {
			background-color: #fff;
			border-radius: 20rpx;
			padding: 20rpx;
			margin-top: 20rpx;

			&-title {
				@extend .u240;
				color: #333;
			}

			&-img {
				width: 100%;
				height: 238rpx;
				border-radius: 20rpx;
				margin-top: 10rpx;
			}

			&-pay {
				@extend .u240;
				color: #D9001B;

				&-text {
					font-size: 24rpx;
				}
			}

			.u207 {
				@extend .default-flex;
				margin-top: 10rpx;
				border-bottom: 2rpx solid rgba(242, 242, 242, 1);
				padding-bottom: 10rpx;

				&-box {
					width: 30rpx;
					height: 30rpx;
					background: linear-gradient(180deg, rgba(255, 114, 32, 1) 0%, rgba(245, 154, 35, 1) 100%);
					border-radius: 8rpx;
					font: normal 400 24rpx/30rpx 'Arial Normal', 'Arial', sans-serif;
					color: #fff;
					text-align: center;
				}

				&-text {
					font: normal 400 24rpx/normal '微软雅黑', sans-serif;
					color: #555;
					margin: 0 20rpx 0 15rpx;
				}

				&-img {
					width: 15rpx;
					height: 20rpx;
				}
			}

			.u210 {
				&-box {
					@extend .default-flex;
					margin-top: 10rpx;

					&-title {
						font: normal 400 28rpx/normal '微软雅黑', sans-serif;
						color: #000;
						margin-right: 10rpx;
					}

					&-text {
						@extend .u210-box-title;
						color: #aaa;
					}
				}
			}
		}

		.u216 {
			margin-top: 20rpx;
			background-color: #fff;
			border-radius: 20rpx;
			padding: 20rpx;

			&-title {
				font: normal 700 32rpx/normal '微软雅黑 Bold', '微软雅黑 Regular', '微软雅黑', sans-serif;
				color: #333;
			}

			&-box {
				@extend .default-flex;
				justify-content: space-between;
				margin-top: 10rpx;

				&-name {
					font: normal 400 28rpx/normal '微软雅黑', sans-serif;
					color: #000;
				}

				&-text {
					@extend .default-flex;

					&-count {
						@extend .u216-box-name;
						color: #aaa;
						font-size: 24rpx;
					}

					&-pay {
						@extend .u216-box-name;
						font-family: '微软雅黑 Bold', '微软雅黑 Regular', '微软雅黑', sans-serif;
						font-weight: 700;
					}
				}
			}
		}

		.u241 {
			@extend .u216;

			&-title {
				font: normal 700 32rpx/normal '微软雅黑 Bold', '微软雅黑 Regular', '微软雅黑', sans-serif;
				color: #333;
			}

			&-text {
				font: normal 400 24rpx/normal '微软雅黑', sans-serif;
				color: #aaa;
			}

			.line {
				background-color: rgba(242, 242, 242, 1);
				height: 2rpx;
				width: 100%;
				margin-top: 4rpx;
			}

			&-box {
				@extend .default-flex;
				justify-content: center;
				margin-top: 20rpx;

				&-text {
					font: normal 400 24rpx/normal '微软雅黑', sans-serif;
					color: #555;
					margin-right: 10rpx;
				}
			}
		}

		.u221 {
			@extend .u241;
			margin-bottom: 120rpx;

			&-title {
				@extend .u241-title;
			}

			&-box {
				@extend .default-flex;
				justify-content: space-between;
				margin-top: 10rpx;

				&-left {
					display: flex;

					&-img {
						width: 100rpx;
						height: 103rpx;
						border-radius: 12rpx;
						margin-right: 10rpx;
					}

					.u224 {
						&-name {
							font: normal 400 24rpx/normal '微软雅黑', sans-serif;
							color: #333;
						}

						&-box {
							@extend .default-flex;

							&-pay {
								@extend .u224-name;
								color: #aaa;
								margin-left: 20rpx;
							}
						}

						&-address {
							@extend .u224-name;
							color: #1A1A1A;
						}
					}
				}

				&-right {
					display: flex;
					flex-direction: column;
					align-items: center;

					.u234 {
						width: 40rpx;
						height: 40rpx;
						border-radius: 50%;
						background-color: rgb(242, 242, 242);
						@extend .default-flex;
						justify-content: center;

						&-img {
							width: 24rpx;
							height: 24rpx;
						}

						&-text {
							@extend .u224-name;
							color: #1A1A1A;
							margin-top: 10rpx;
						}
					}
				}
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
			@extend .default-flex;

			.u237 {
				font: normal 700 42rpx/normal '微软雅黑 Bold', '微软雅黑 Regular', '微软雅黑', sans-serif;
				color: #D9001B;

				&-text {
					font-size: 20rpx;
				}
			}

			.u238 {
				font: normal 400 24rpx/normal '微软雅黑', sans-serif;
				color: #aaa;
				text-decoration: line-through;
				margin-left: 20rpx;
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

	.u268 {
		background-color: #fff;
		height: 523rpx;
		padding: 0 30rpx 30rpx 30rpx;
		overflow-y: scroll;

		&-title {
			font: normal 700 32rpx/normal 'Arial Negreta', 'Arial Normal', 'Arial', sans-serif;
			color: #333;
			position: sticky;
			top: 0;
			background-color: #fff;
			padding: 20rpx 0;
		}

		&-list {
			margin-top: 30rpx;

			&-item {
				background-color: rgba(255, 231, 225, 1);
				border: 2rpx solid rgba(245, 154, 35, 1);
				border-radius: 30rpx;
				padding: 20rpx 40rpx;
				@extend .default-flex;
				justify-content: space-between;
				margin-bottom: 20rpx;

				&-name {
					font: normal 400 32rpx/normal 'Arial Normal', 'Arial', sans-serif;
					color: #333;
				}

				&-tip {
					@extend .u268-list-item-name;
					color: #AAAAAA;
					font-size: 24rpx;
				}

				&-pay {
					color: #D9001B;
					font: normal 700 32rpx/normal 'Arial Negreta', 'Arial Normal', 'Arial', sans-serif;
				}

				&-btn {
					width: 113rpx;
					height: 48rpx;
					background: linear-gradient(180deg, rgba(255, 114, 32, 1) 0%, rgba(245, 154, 35, 1) 100%);
					border-radius: 22rpx;
					font: normal 400 24rpx/48rpx 'Arial Normal', 'Arial', sans-serif;
					color: #fff;
					text-align: center;
				}
			}
		}
	}
</style>
