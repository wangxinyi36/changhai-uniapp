<template>
	<view class="mall">
		<common-tree-select :leftList="leftList" @changeLeft="changeLeft">
			<view class="mall-right">
				<image src="/static/home5.png" mode="aspectFill" class="u23-img"></image>
				<uni-row :gutter="20">
					<view class="goods">
						<uni-col :span="12" v-for="item,index in goods" :key="index">
							<view class="goods-item" @click="openPage(item,index)">
								<image :src="item.url" mode="aspectFill" class="goods-img"></image>
								<view class="goods-title">{{item.name}}</view>
								<view class="u27">
									<text class="goods-pay">{{item.pay}}</text>
									<image src="../../static/mall2.svg" mode="aspectFill" class="goods-add"></image>
								</view>
							</view>
						</uni-col>
					</view>
				</uni-row>
			</view>
		</common-tree-select>
		<navigator url="/pages/mall/mall-cart" hover-class="navigator-hover">
			<view class="btn-cart">
				<image src="/static/mall9.svg" mode="aspectFill" class="u58-img"></image>
			</view>
		</navigator>
	</view>
</template>

<script>
	import {
		OpenPage
	} from '@/common/fun.js'
	export default {
		data() {
			return {
				leftList: [{
					name: '长海海鲜礼',
					id: 1
				}, {
					name: '文创产品',
					id: 2
				}, {
					name: '休闲旅游产品',
					id: 3
				}],
				goods: [{
					name: '干海参',
					pay: '￥88/盆',
					url: '/static/gift1.png'
				}, {
					name: '盐渍海参',
					pay: '￥88/盆',
					url: '/static/gift2.png'
				}, {
					name: '水发海参',
					pay: '￥88/盒',
					url: '/static/gift3.png'
				}]
			};
		},
		methods: {
			changeLeft(val) {
				console.log(val)
			},
			openPage(item, index) {
				OpenPage(`/pages/mall/detail`)
			}
		}
	}
</script>

<style lang="scss" scoped>
	.mall {
		background-color: rgba(237, 240, 247, 1);

		.mall-right {
			margin: 0 20rpx;

			.u23-img {
				width: 100%;
				height: 166rpx;
			}

			.goods {
				@extend .default-flex;
				flex-wrap: wrap;
				margin-top: 50rpx;

				.goods-item {
					background-color: rgba(255, 255, 255, 1);
					border-radius: 12rpx;
					padding: 20rpx;
					box-sizing: border-box;
					margin-bottom: 20rpx;

					.goods-img {
						height: 170rpx;
						width: 100%;
					}

					.goods-title {
						font-weight: 400;
						font-size: 24rpx;
						color: #000;
						display: -webkit-box;
						overflow: hidden;
						word-break: break-all;
						/* break-all(允许在单词内换行。) */
						text-overflow: ellipsis;
						/* 超出部分省略号 */
						-webkit-box-orient: vertical;
						-webkit-line-clamp: 1;
						/** 显示的行数 **/
					}

					.u27 {
						@extend .default-flex;
						justify-content: space-between;

						.goods-pay {
							@extend .goods-title;
							color: #D9001B;
						}

						.goods-add {
							width: 32rpx;
							height: 32rpx;
						}
					}

				}
			}
		}

		.btn-cart {
			position: fixed;
			right: 20rpx;
			bottom: 300rpx;
			width: 80rpx;
			height: 80rpx;
			@extend .default-flex;
			justify-content: center;
			background-color: rgb(253, 122, 33);
			border-radius: 50%;

			.u58-img {
				width: 46rpx;
				height: 41rpx;
			}
		}
	}
</style>
