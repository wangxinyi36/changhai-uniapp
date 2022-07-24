<template>
	<view class="common-order">
		<!-- 民宿 美食 商城 -->
		<view class="u81">
			<view class="u81-top" @click="pageDetail">
				<image :src="order.goods[0].picUrl" mode="aspectFill" class="u81-top-img"></image>
				<view class="u178">
					<view class="u178-name">
						<view class="u178-name-title">{{dealName()}}</view>
						<view class="u178-status"
							:class="[{'u178-cancel':order.orderStatus === 102 || order.orderStatus === 101}]">
							{{order.orderStatus === 101 ? '待支付' : order.orderStatus === 102 ? '已取消': order.orderStatus === 201 ? '已完成' : ''}}
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
		props: {
			order: Object
		},
		data() {
			return {};
		},
		methods: {
			dealTime(val) {
				return `${val[0]}-${val[1]}-${val[2]} ${val[3]}:${val[4]}:${val[5]}`
			},
			dealName() {
				let name = this.order.goods[0].goodsName;
				if (this.order.goods.length == 1) {
					return name;
				} else {
					return `${name}等${this.order.goods.length}个商品`
				}
			},
			async buy() {
				try {
					let payOrder = {
						openId: getStorage('wechat_openId'),
						orderNo: this.order.orderSn
					}
					const _this = this;
					const result = await this.$http(this.$API.postPayOrder, payOrder, 'POST');
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
				OpenPage(`/pages/my/order-detail?id=${this.order.id}`).then(res => {
					if (res.isReload) {
						_this.$emit('reload')
					}
				})
			},
			cancel() {
				this.$emit('cancel', this.order)
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
				justify-content: space-between;
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
