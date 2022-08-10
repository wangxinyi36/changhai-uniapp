<template>
	<view class="common-order">
		<!-- 民宿 美食 外卖 -->
		<view class="u81" v-if="type > 0">
			<view class="u81-top" @click="pageDetail">
				<image :src="order.picUrl" mode="aspectFill" class="u81-top-img"></image>
				<view class="u178">
					<view class="u178-name">
						<view class="u178-name-title">{{order.title}}</view>
						<view class="u178-status"
							:class="[{'u178-cancel':order.orderStatus == 0 || order.orderStatus == 10}]">
							{{order.orderStatusName}}
						</view>
					</view>
					<view class="u178-name">下单时间：{{order.orderTm}}</view>
					<view class="u178-pay">{{`￥${order.sumPrice/100}`}}</view>
				</view>
			</view>
			<view class="u81-bottom">
				<view class="u240">
					<view class="u241 u241-cancel" @click="cancel" v-if="order.orderStatus == 0">取消订单</view>
					<view class="u241 u241-cancel" @click="refund" v-if="order.orderStatus == 1">申请退款</view>
					<view class="u241" @click="buy" v-if="order.orderStatus == 0">立即付款</view>
					<view class="u241" @click="pageDetail" v-if="order.evaluate == 1">立即评价</view>
				</view>
			</view>
		</view>
		<!-- 商城 -->
		<view class="u81" v-else>
			<view class="u81-top" @click="pageDetail">
				<image :src="order.goods[0].picUrl" mode="aspectFill" class="u81-top-img"></image>
				<view class="u178">
					<view class="u178-name">
						<view class="u178-name-title">{{dealName()}}</view>
						<view class="u178-status"
							:class="[{'u178-cancel':order.orderStatus === 102 || order.orderStatus === 101}]">
							{{order.orderStatus === 101 ? '待支付' : order.orderStatus === 102 ? '已取消': order.orderStatus === 201 ? '已完成' : order.orderStatus === 202 ? '退款中': order.orderStatus === 203 ?  '已退款' :''}}
						</view>
					</view>
					<view class="u178-name">下单时间：{{dealTime(order.addTime)}}</view>
					<view class="u178-pay">{{`￥${order.goodsPrice}`}}</view>
				</view>
			</view>
			<view class="u81-bottom">
				<view class="u242">{{ order.orderStatus === 1 ? `剩余时间:${order.leftTime}` : ''}}</view>
				<view class="u240">
					<view class="u241 u241-cancel" @click="cancel" v-if="order.orderStatus === 101">取消订单</view>
					<view class="u241" @click="buy" v-if="order.orderStatus === 101">立即付款</view>
					<view class="u241 u241-cancel" @click="refund" v-if="order.orderStatus === 201">申请退款</view>
					<view class="u241" @click="pageDetail" v-if="order.orderStatus === 201">立即评价</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import {
		OpenPage,
		getStorage,
		showToast
	} from '@/common/fun.js'
	export default {
		name: "common-order",
		props: ['order', 'type'],
		data() {
			return {};
		},
		methods: {
			dealTime(val) {
				if (val) {
					return `${val[0]}-${val[1]}-${val[2]} ${val[3]}:${val[4]}:${val[5]}`
				}
			},
			dealName() {
				if (this.order.goods) {
					let name = this.order.goods[0].goodsName;
					if (this.order.goods.length == 1) {
						return name;
					} else {
						return `${name}等${this.order.goods.length}个商品`
					}
				}
			},
			async buy() {
				try {
					const _this = this;
					let payOrder = {
						openId: getStorage('wechat_openId'),
						orderNo: this.order.orderSn
					}

					let result = {};
					if (this.type == 0) {
						result = await this.$http(this.$API.postPayOrder, payOrder, 'POST');
					} else {
						result = await this.$http(this.$API.getProductPayOrder, {
							orderCode: this.order.orderSn
						});
					}
					if (result.errno == 0) {
						uni.requestPayment({
							provider: "wxpay",
							...result.data,
							success(res) {
								showToast('支付成功~')
								setTimeout(() => {
									_this.$emit('reload', this.order)
								}, 1500)
							},
							fail(e) {
								console.log(e)
							}
						})
					}
				} catch (e) {
					console.log(e)
					//TODO handle the exception
				}
			},
			pageDetail() {
				const _this = this;
				let order = this.order;
				let type = this.type;
				let url = '/pages/my/order-detail?'
				if (type == 0) {
					url = `${url}id=${order.id}&type=${type}`
				} else {
					url = `${url}orderSn=${order.orderSn}&type=${type}`
				}

				OpenPage(url).then(res => {
					if (res.isReload) {
						_this.$emit('reload')
					}
				})
			},
			cancel() {
				this.$emit('cancel', this.order)
			},
			refund() {
				this.$emit('refund', this.order)
			}
		}
	}
</script>

<style lang="scss" scoped>
	.common-order {
		border: 2rpx solid rgba(242, 242, 242, 1);
		border-radius: 12rpx;
		padding: 20rpx;
		box-sizing: border-box;
		margin-bottom: 10rpx;

		.u81 {
			&-top {
				height: 120rpx;
				@extend .default-flex;

				&-img {
					width: 120rpx;
					height: 100%;
					border-radius: 10rpx;
					margin-right: 10rpx;
				}

				.u178 {
					height: 100%;
					flex: 1;
					display: flex;
					flex-direction: column;
					justify-content: space-between;

					&-name {
						font: 400 normal 24rpx normal;
						color: #000;
						@extend .default-flex;
						justify-content: space-between;

						&-title {
							flex: 1;
						}
					}

					&-pay {
						font: 400 normal 30rpx normal;
						color: #CD492C;
					}

					&-status {
						font: 400 normal 30rpx normal;
						color: #FF8D3D;
					}

					&-cancel {
						font: 400 normal 30rpx normal;
						color: #31D0E6;
					}
				}
			}

			&-bottom {
				@extend .default-flex;
				justify-content: flex-end;
				margin-top: 10rpx;

				.u242 {
					font-size: 24rpx;
					color: #FF8D3D;
					text-align: left;
				}

				.u240 {
					@extend .default-flex;
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
						margin-left: 20rpx;
					}

					.u241-cancel {
						background-color: #e2dedc;
					}
				}


			}
		}
	}
</style>
