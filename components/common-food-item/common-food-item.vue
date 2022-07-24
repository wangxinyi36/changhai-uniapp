<template>
	<view class="u24-item">
		<view class="u24-item-top" @click="openPage">
			<image :src="info.uuimgPath" mode="aspectFill" class="u24-item-top-img"></image>
			<view class="u166">
				<view class="u166-name">{{info.uutitle}}</view>
				<view class="u167">
					<uni-rate v-model="info.star" :readonly="true" :size="13" />
					<view class="u167-pay">￥{{info.uuPrice}}/人</view>
				</view>
				<view class="u168">
					<view class="u168-address">{{info.uuarea}}</view>
					<view class="u168-distance">{{dealDistance(info.distance)}}</view>
				</view>
			</view>
		</view>
		<view class="u24-item-bottom">
			<view class="u269"></view>
			<view class="u270">
				<view class="u270-item" v-for="food,i in info.list" :key="food.uuaid" @click="openFoodDetail(food)">
					<image :src="food.uuticketPic" mode="aspectFill" class="u270-item-img"></image>
					<view class="u270-item-name">{{food.uutitle}}</view>
					<view class="u270-item-money">￥{{food.uutprice}}</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import {
		OpenPage
	} from '@/common/fun.js'
	export default {
		name: "common-food-item",
		props: ["info"],
		data() {
			return {};
		},
		created() {},
		methods: {
			dealDistance(val) {
				if (val) {
					if (val > 1000) {
						return `${val/1000}km`
					}
					return `${val}m`;
				}
			},
			openPage() {
				OpenPage(`/pages/home/tasty-food/tasty-food-detail?id=${this.info.uuid}`)
			},
			openFoodDetail(food) {
				OpenPage(`/pages/home/tasty-food/home-tasty-food-detail?id=${food.uuaid}`)
			}
		}
	}
</script>

<style lang="scss" scoped>
	.u24-item {
		background-color: #fff;
		border-radius: 20rpx;
		padding: 20rpx;
		margin-bottom: 20rpx;

		&-top {
			@extend .default-flex;
			align-items: unset;

			&-img {
				width: 120rpx;
				height: 100rpx;
				border-radius: 10rpx;
				margin-right: 20rpx;
			}

			.u166 {
				flex: 1;
				padding-bottom: 10rpx;
				border-bottom: 1rpx solid rgba(242, 242, 242, 1);

				&-name {
					font: normal 400 32rpx/normal '微软雅黑', sans-serif;
					color: #333;
				}
			}

			.u167 {
				@extend .default-flex;

				&-pay {
					color: #aaa;
					font: normal 400 24rpx/normal '微软雅黑', sans-serif;
					margin-left: 20rpx;
				}
			}

			.u168 {
				@extend .default-flex;
				justify-content: space-between;

				&-address {
					color: #bbb;
					font: normal 400 24rpx/normal '微软雅黑', sans-serif;
				}

				&-distance {
					color: #888;
					font: normal 400 24rpx/normal '微软雅黑', sans-serif;
				}
			}
		}

		&-bottom {
			@extend .default-flex;
			justify-content: space-between;
			margin-top: 10rpx;

			.u269 {
				width: 120rpx;
				height: 100rpx;
				margin-right: 10rpx
			}

			.u270 {
				@extend .default-flex;
				flex: 1;
				justify-content: space-between;

				.u270-item {
					width: 32%;

					&-img {
						width: 100%;
						height: 96rpx;
						border-radius: 10rpx;
					}

					&-name {
						font: normal 400 24rpx/normal '微软雅黑', sans-serif;
						color: #1a1a1a;
					}

					&-money {
						color: #DD0000;
						font: normal 400 24rpx/normal 'Arial Normal', 'Arial', sans-serif;
					}
				}
			}

		}
	}
</style>
