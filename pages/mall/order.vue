<template>
	<view>
		<view class="u63" @click="add">
			<view class="u63-btn" v-if="!address.id">添加收货地址</view>
			<view class="u22" v-else>
				<view class="u22-name">{{address.name}}</view>
				<view class="u22-address">
					{{address.province}}{{address.city}}{{address.area}}{{address.address}}
				</view>
			</view>
		</view>

		<view class="u9">
			<view class="u9-title">商品信息</view>
			<view class="u27">
				<image :src="goodsDetail.picUrl" mode="aspectFill" class="u27-img"></image>
				<view class="u27-right">
					<view class="u29">{{goodsDetail.name}}</view>
					<view class="u31">
						<view class="u31-money">￥{{goodsDetail.retailPrice}}</view>
						<view class="u31-count">×1</view>
					</view>
				</view>
			</view>
			<view class="u33">
				<view class="u33-item">
					<view class="u33-title">商品价格</view>
					<view class="u33-title">￥{{goodsDetail.retailPrice}}</view>
				</view>
				<view class="u33-item">
					<view class="u33-title">商品数量</view>
					<view class="u33-title">1</view>
				</view>
				<view class="u33-item">
					<view class="u33-title">订单备注</view>
					<input class="u33-text" placeholder-class="u33-placeholder" placeholder="请和商家协商一致" />
				</view>
				<view class="u33-item">
					<view class="u33-title">商品合计</view>
				</view>
				<view class="u33-item u33-pay">
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
		</view>

		<view class="bottom">
			<view class="bottom-left">
				<view class="bottom-left-text">实付金额：<text style="color: #D9001B;">￥{{goodsDetail.retailPrice}}</text>
				</view>
			</view>
			<view class="bottom-right" @click="buy">立即购买</view>
		</view>
	</view>
</template>

<script>
	import {
		OpenPage,
		showToast
	} from '@/common/fun.js';
	export default {
		data() {
			return {
				payList: [{
					name: '微信支付',
					url: '/static/icon-wechat.svg',
				}],
				payIndex: 0,
				chooseIcon: '/static/icon-choose-no.svg',
				chooseActiveIcon: '/static/icon-choose.svg',
				goodsDetail: {},
				address: {}
			}
		},
		onLoad() {
			const _this = this;
			const eventChannel = this.getOpenerEventChannel();
			eventChannel.on('sendParams', function(data) {
				_this.goodsDetail = data.goodsDetail
			})
		},
		methods: {
			buy() {
				if (!this.address.id) {
					showToast('请选择地址~');
					return;
				}
				OpenPage('/pagesStay/home-stay/pay-suc')
			},
			add() {
				let _this = this;
				OpenPage(`/pagesStay/home-stay/home-stay-people?goodsId=${this.goodsDetail.id}&from=mallOrder`).then(
					res => {
						_this.address = res.address;
					})
			}
		}
	}
</script>

<style>
	page {
		background: #edf0f7;
	}
</style>
<style lang="scss" scoped>
	.u63 {
		background-color: #fff;
		margin-top: 20rpx;
		padding: 40rpx;

		&-btn {
			font: normal 400 24rpx/normal 'Arial Normal', 'Arial', sans-serif;
			color: #F59A23;
			border: 2rpx solid #F59A23;
			text-align: center;
			line-height: 60rpx;
		}

		.u22 {
			&-name {
				font: normal 700 32rpx/normal '微软雅黑 Bold', '微软雅黑 Regular', '微软雅黑', sans-serif;
				color: #000;
			}

			&-address {
				font: normal 400 24rpx/normal '微软雅黑', sans-serif;
				color: #aaa;
				margin-top: 10rpx;
			}
		}
	}

	.u9 {
		background-color: #fff;
		margin-top: 20rpx;
		padding: 20rpx 20rpx 0 20rpx;

		&-title {
			font: normal 400 32rpx/normal '微软雅黑', sans-serif;
			color: #000;
		}
	}

	.u27 {
		margin-top: 20rpx;
		display: flex;

		&-img {
			width: 156rpx;
			height: 156rpx;
			margin-right: 30rpx;
		}

		&-right {
			flex: 1;
			display: flex;
			justify-content: space-between;

			.u31-money,
			.u31-count {
				font: normal 400 30rpx/normal '微软雅黑', sans-serif;
				text-align: right;
				color: #555;
			}
		}
	}

	.u33 {
		&-item {
			@extend .default-flex;
			justify-content: space-between;
			border-bottom: 2rpx solid rgba(242, 242, 242, 1);
			padding: 30rpx 0 4rpx 0;
		}

		&-title {
			font: normal 400 30rpx/normal '微软雅黑', sans-serif;
			color: #000;
		}

		&-text {
			flex: 1;
			text-align: right;
		}

		&-pay {
			padding: 40rpx 0;
		}

		/deep/ &-placeholder {
			font: normal 400 24rpx/normal 'Arial Normal', 'Arial', sans-serif;
			color: #d7d7d7;
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
				width: 100%;

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
		background-color: #fff;
		height: 90rpx;
		@extend .default-flex;
		width: 100%;
		justify-content: space-between;

		&-left {
			margin-left: 30rpx;
			font: normal 400 24rpx/normal 'Arial Normal', 'Arial', sans-serif;
			color: #333;
		}

		&-right {
			margin-right: 30rpx;
			width: 180rpx;
			height: 60rpx;
			background-color: rgba(255, 141, 61, 1);
			border-radius: 120rpx;
			font-size: 32rpx;
			color: #FFFFFF;
			text-align: center;
			line-height: 60rpx;
		}
	}
</style>
