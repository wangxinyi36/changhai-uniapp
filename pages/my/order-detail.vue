<template>
	<view>
		<!-- 商城 -->
		<view class="u63" v-if="type == 0">
			<view class="u22">
				<view class="u22-name">{{order.consignee}}</view>
				<view class="u22-address">{{order.address}}</view>
			</view>
		</view>
		<view class="u9" v-if="type == 0">
			<view class="u9-title">商品信息</view>
			<view class="u26" v-for="item in orderGoods" :key="item.id">
				<view class="u27">
					<image :src="item.picUrl" mode="aspectFill" class="u27-img"></image>
					<view class="u27-right">
						<view class="u29">{{item.goodsName}}</view>
						<view class="u31">
							<view class="u31-money">￥{{item.price}}</view>
							<view class="u31-count">×{{item.number}}</view>
						</view>
					</view>
				</view>
				<view class="u26-btn">
					<view class="u241" @click="evaluate(item.goodsId)" v-if="order.orderStatus === 201">立即评价</view>
				</view>
			</view>
			<view class="u33">
				<view class="u33-item" v-if="order.message">
					<view class="u33-title">订单备注</view>
					<input class="u33-text" v-model="order.message" placeholder-class="u33-placeholder"
						:disabled="true" />
				</view>
				<view class="u33-item">
					<view class="u33-title">商品合计</view>
					<view class="u33-text u33-text-money">￥{{order.orderPrice}}</view>
				</view>
				<view class="u33-item">
					<view class="u33-title">下单时间</view>
					<view class="u33-text">{{dealTime(order.addTime)}}</view>
				</view>
				<view class="u33-item">
					<view class="u33-title">支付时间</view>
					<view class="u33-text">{{dealTime(order.payTime)}}</view>
				</view>
				<view class="u33-item">
					<view class="u33-title">订单状态</view>
					<view class="u33-text"
						:class="[{'u178-cancel':order.orderStatus === 102 || order.orderStatus === 101},{'u178-done':order.orderStatus === 201}]">
						{{order.orderStatus === 101 ? '待支付' : order.orderStatus === 102 ? '已取消': order.orderStatus === 201 ? '已完成' : ''}}
					</view>
				</view>
				<view class="u33-item">
					<view class="u33-title">订单编号</view>
					<view class="u33-text">{{order.orderSn}}</view>
				</view>
			</view>
		</view>

		<!-- 船票 民宿 -->
		<view class="u9" v-if="type == 4 || type == 1">
			<view class="u9-title">商品信息</view>
			<view class="u26" v-for="item in order.pftOrderDetailList" :key="item.tid">
				<view class="u27">
					<image :src="order.picurl" mode="aspectFill" class="u27-img"></image>
					<view class="u27-right">
						<view class="u29">{{order.shopName}}</view>
						<view class="u31">
							<view class="u31-money">￥{{item.tprice/100}}</view>
							<view class="u31-count">×{{item.num}}</view>
						</view>
					</view>
				</view>
			</view>
			<view class="u33">
				<view class="u33-item">
					<view class="u33-title">商品合计</view>
					<view class="u33-text u33-text-money">￥{{order.sumPrice/100}}</view>
				</view>
				<view class="u33-item">
					<view class="u33-title">下单时间</view>
					<view class="u33-text">{{order.orderTm}}</view>
				</view>
				<view class="u33-item" v-if="order.payOrderTm">
					<view class="u33-title">支付时间</view>
					<view class="u33-text">{{order.payOrderTm}}</view>
				</view>
				<view class="u33-item">
					<view class="u33-title">订单状态</view>
					<view class="u33-text"
						:class="[{'u178-cancel':order.orderStatus == 0},{'u178-done':order.orderStatus === 1}]">
						{{order.orderStatusName}}
					</view>
				</view>
				<view class="u33-item">
					<view class="u33-title">订单编号</view>
					<view class="u33-text">{{order.orderSn}}</view>
				</view>
			</view>
		</view>



		<view class="bottom" v-if="order.orderStatus === 101 || order.orderStatus === 0">
			<view class="bottom-left">
				<view class="bottom-left-text" v-if="type == 'list'">实付金额：<text
						style="color: #D9001B;">￥{{getMoney}}</text></view>
				<view class="bottom-left-text" v-if="type == 'detail'">实付金额：<text
						style="color: #D9001B;">￥{{goodsList[0].retailPrice}}</text></view>
			</view>
			<view class="bottom-right" @click="buy" v-if="order.orderStatus === 101">立即付款</view>
		</view>
	</view>
</template>

<script>
	import {
		OpenPage,
		showToast,
		getStorage,
	} from '@/common/fun.js';
	import {
		mapMutations,
		mapState,
		mapGetters
	} from 'vuex'
	export default {
		data() {
			return {
				id: '', //商城订单id
				orderSn: '', //票付通订单编号
				payList: [{
					name: '微信支付',
					url: '/static/icon-wechat.svg',
				}],
				payIndex: 0,
				chooseIcon: '/static/icon-choose-no.svg',
				chooseActiveIcon: '/static/icon-choose.svg',

				order: {},
				orderGoods: [],
				user: {},
				type: -1,

				isReload: false,
			}
		},
		onLoad(options) {
			this.id = options.id || '';
			this.orderSn = options.orderSn || '';
			this.type = options.type;
			this.getDetail();
		},
		methods: {
			async getDetail() {
				try {
					let {
						id,
						orderSn,
						type
					} = this.$data;
					if (type == 0) {
						// 商城订单
						const result = await this.$http(this.$API.getOrderDetail, {
							id
						});
						this.order = result.data.order;
						this.orderGoods = result.data.orderGoods;
						this.user = result.data.user;
					} else {
						// 票付通订单
						const result = await this.$http(this.$API.getQueryOrderDetail, {
							orderSn
						});
						this.order = result.data;
					}
				} catch (e) {
					console.log(e)
					//TODO handle the exception
				}
			},
			dealTime(val) {
				if (val) {
					return `${val[0]}-${val[1]}-${val[2]} ${val[3]}:${val[4]}:${val[5]}`
				}
			},
			evaluate(id) {
				const _this = this;
				OpenPage(`/pages/my/evaluate?id=${id}`).then(res => {
					if (res.isReload) {
						_this.isReload = res.isReload;
						_this.getDetail()
					}
				})
			}
		},
		onUnload() {
			if (this.isReload) {
				const eventChannel = this.getOpenerEventChannel();
				eventChannel.emit('getParams', {
					isReload: true
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

	.u26 {
		border-bottom: 2rpx solid #f2f2f2;
		padding-bottom: 10rpx;

		&-btn {
			@extend .default-flex;
			align-items: center;
			justify-content: flex-end;

			.u241 {
				width: 158rpx;
				height: 46rpx;
				background-color: rgba(255, 141, 61, 1);
				border-radius: 120rpx;
				font-size: 28rpx;
				color: #FFFFFF;
				text-align: center;
				line-height: 46rpx;
				margin: 10rpx;
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
	}

	.u33 {
		&-item {
			@extend .default-flex;
			justify-content: space-between;
			border-top: 2rpx solid rgba(242, 242, 242, 1);
			padding: 20rpx 0;
		}

		&-title {
			font: normal 400 30rpx/normal '微软雅黑', sans-serif;
			color: #000;
		}

		&-text {
			flex: 1;
			text-align: right;
		}

		&-text-money {
			color: #CD492C;
		}

		.u178-cancel {
			color: #31D0E6;
		}

		.u178-done {
			color: #FF8D3D;
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
		padding-bottom: constant(safe-area-inset-bottom);
		padding-bottom: env(safe-area-inset-bottom);

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
