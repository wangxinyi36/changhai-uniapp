<template>
	<view class="common-order">
		<!-- 民宿 美食 商城 -->
		<view class="u81">
			<view class="u81-top">
				<image :src="order.url" mode="aspectFill" class="u81-top-img"></image>
				<view class="u178">
					<view class="u178-name">
						<view>{{order.name}}</view>
						<view class="u178-status" v-if="order.status !== 1"
							:class="[{'u178-cancel':order.status === 3}]">
							{{order.status === 2 ? '已完成' : order.status === 3 ? '已取消': order.status === 4 ? '已完成' : ''}}
						</view>
					</view>
					<view class="u178-name">单时间：{{dealTime(order.addTime)}}</view>
					<view class="u178-pay">{{`￥${order.goodsPrice}`}}</view>
				</view>
			</view>
			<view class="u81-bottom">
				<view class="u242">{{ order.status === 1 ? `剩余时间:${order.leftTime}` : ''}}</view>
				<view class="u241" v-if="order.status !== 3 && order.status !== 4" @click="operate">
					{{order.status === 1 ? '立即付款':'立即评价'}}
				</view>
			</view>
		</view>
		<!-- 船票 -->
	</view>
</template>

<script>
	import {
		OpenPage
	} from '@/common/fun.js'
	export default {
		name: "common-order",
		props: {
			order: Object
		},
		data() {
			return {

			};
		},
		methods: {
			dealTime(val) {
				return `${val[0]}-${val[1]}-${val[2]} ${val[3]}:${val[4]}:${val[5]}`
			},
			operate() {
				if (this.order.status !== 1) {
					OpenPage(`/pages/my/evaluate`)
				}
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

				.u241 {
					width: 158rpx;
					height: 46rpx;
					background-color: rgba(255, 141, 61, 1);
					border-radius: 120rpx;
					font-size: 28rpx;
					color: #FFFFFF;
					text-align: center;
					line-height: 46rpx;
				}
			}
		}
	}
</style>
