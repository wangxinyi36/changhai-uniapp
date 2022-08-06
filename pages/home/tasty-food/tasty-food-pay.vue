<template>
	<view class="u6">
		<view class="u63" @click="addAddress">
			<view class="u63-btn" v-if="!address.id">请选择订餐人</view>
			<view class="u22" v-else>
				<view class="u22-name">{{address.passengerName}}</view>
				<view class="u22-address">{{address.phone}}</view>
			</view>
		</view>

		<view class="u7">
			<view class="u8">
				<image :src="foodDetail.picurl" mode="aspectFill" class="u8-img"></image>
				<view class="u8-box">
					<view class="u9">{{foodDetail.foodname}}</view>
					<view class="u11-box-dec">{{foodDetail.remark}}</view>
					<view class="u11">
						<view class="u11-box"><text class="u11-box-text">￥</text>{{foodDetail.uutprice/100}}</view>
						<view class="u17">
							<image src="/static/del.svg" mode="aspectFill" class="u17-sub" @click="sub"></image>
							<view class="u17-num">{{count}}</view>
							<image src="/static/add.svg" mode="aspectFill" class="u17-add" @click="add"></image>
						</view>
					</view>
				</view>
			</view>
			<view class="u47">
				<view class="u47-box" v-for="item,index in payList" :key="index">
					<view class="u47-box-left">
						<image :src="item.url" mode="aspectFill" class="icon-wechat"></image>
						<view class="u47-box-left-text">{{item.name}}</view>
					</view>
					<image :src="chooseActiveIcon" mode="aspectFill" class="u47-box-choose">
					</image>
				</view>
			</view>
		</view>

		<view class="bottom">
			<view class="bottom-left">
				<view class="u184">
					<view class="u184-title">合计：</view>
					<view class="u184-text">￥{{totalMoney}}</view>
				</view>
			</view>
			<view class="bottom-btn" @click="pay">立即支付</view>
		</view>
	</view>

</template>

<script>
	import {
		getStorage,
		showToast,
		OpenPage
	} from '@/common/fun.js'
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
				}],
				foodDetail: {},
				address: {},
				foodForm: {
					uuId: "",
					payType: 1,
					passengerId: '',
					userId: '',
					num: 1
				},
				wechat_userInfo: {}
			};
		},
		onLoad() {
			this.wechat_userInfo = getStorage('wechat_userInfo')
			this.foodForm.userId = this.wechat_userInfo.userId;

			const _this = this;
			const eventChannel = this.getOpenerEventChannel();
			eventChannel.on('sendParams', data => {
				_this.foodDetail = data.item;
				_this.foodForm.uuId = data.item.fuuid;
			})
		},
		computed: {
			totalMoney() {
				let {
					uutprice,
					rebate
				} = this.foodDetail;
				let money = this.count * parseFloat(uutprice) / 100
				return money;
			}
		},
		methods: {
			addAddress() {
				let _this = this;
				OpenPage(`/pagesStay/home-stay/home-stay-people?from=tastyFood`).then(
					res => {
						_this.address = res.address;
						_this.foodForm.passengerId = res.address.id;
					})
			},
			async pay() {
				try {
					const {
						foodForm,
					} = this.$data;
					if (!foodForm.passengerId) {
						showToast('请选择订餐人~')
						return;
					}

					const result = await this.$http(this.$API.postSaveFoodOrder, foodForm, 'POST');
					if (result.errno != 0) {
						showToast(result.errmsg)
						return;
					}

					uni.requestPayment({
						provider: "wxpay",
						...result.data,
						success(res) {
							showToast('支付成功~')
							setTimeout(() => {
								uni.navigateBack()
							}, 1500)
						},
						fail(e) {
							console.log(e)
						}
					})
					return;

					console.log(result)
				} catch (e) {
					console.log(e)
					//TODO handle the exception
				}
			},
			add() {
				this.count++;
				this.foodForm.num = this.count;
			},
			sub() {
				if (this.count == 1) {
					return;
				}
				this.count--;
				this.foodForm.num = this.count;
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
	.u63 {
		background-color: #fff;
		margin: 20rpx 30rpx 0 30rpx;
		padding: 40rpx;
		border-radius: 20rpx;

		&-btn {
			font: normal 400 24rpx/normal 'Arial Normal', 'Arial', sans-serif;
			color: #F59A23;
			border: 2rpx solid #F59A23;
			text-align: center;
			line-height: 60rpx;
			border-radius: 20rpx;
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

	.u7 {
		padding: 20rpx 30rpx;

		.u8 {
			background-color: #fff;
			border-radius: 20rpx;
			padding: 20rpx;
			display: flex;

			&-img {
				width: 200rpx;
				height: 140rpx;
				border-radius: 20rpx;
				margin-right: 20rpx;
			}

			&-box {
				flex: 1;

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
					margin-top: 20rpx;

					&-box {
						font: normal 400 24rpx/normal '微软雅黑', sans-serif;
						color: #D9001B;

						&-dec {
							@extend .u11-box;
							color: #AAAAAA;
							margin-top: 10rpx;
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
		padding-bottom: constant(safe-area-inset-bottom);
		padding-bottom: env(safe-area-inset-bottom);

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
