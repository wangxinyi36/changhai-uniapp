<template>
	<view>
		<view class="sticky-head">
			<view class="u182" @click="openSearch">
				<uni-icons custom-prefix="custom-icon" type="search" size="17" color="#aaa"></uni-icons>
				<view class="u182-text">搜索</view>
			</view>
		</view>
		<common-food-dropdown :foodForm="foodForm"></common-food-dropdown>

		<view class="u7">
			<!-- <image src="/static/home1.jpg" mode="aspectFill" class="u7-img"></image> -->
		</view>

		<view class="u24-list">
			<common-food-item v-for="item,index in list" :key="item.uuid" :info="item">
			</common-food-item>
		</view>
	</view>
</template>

<script>
	import {
		OpenPage
	} from '@/common/fun.js'
	export default {
		data() {
			return {
				list: [],
				total: 0,
				foodForm: {
					current: 0,
					distance: "",
					lat: "",
					lng: "",
					price: "",
					region: "",
					size: 10,
					title: ""
				},
			};
		},
		onLoad() {
			this.getFoods()
		},
		methods: {
			async getFoods() {
				try {
					const {
						total,
						list
					} = this.$data;
					// if (total > 0 && list.length == total) {
					// 	return;
					// }
					const resultFoods = await this.$http(this.$API.postProductFoodList, this.foodForm, 'POST');
					this.list = list.concat(resultFoods.data);
					// this.total = resultFoods.data.total;
				} catch (e) {
					//TODO handle the exception
				}
			},
			openSearch() {
				OpenPage(`/pages/home/search/search?from=tasty_food`)
			},
		},
		onReachBottom() {
			this.foodForm.current += 10;
			this.getFoods()
		}
	}
</script>
<style>
	page {
		background-color: rgba(237, 240, 247, 1);
	}
</style>
<style lang="scss" scoped>
	.sticky-head {
		position: sticky;
		top: 0;
		width: 100%;
		background: #fff;
		z-index: 9;

		.u182 {
			margin: 0 20rpx;
			height: 36px;
			background-color: rgba(237, 240, 247, 1);
			border-radius: 116rpx;
			@extend .default-flex;
			justify-content: center;

			&-text {
				font: normal 250 24rpx/normal '微软雅黑 Light', '微软雅黑 Regular', '微软雅黑', sans-serif;
				color: #aaa;
				margin-left: 10rpx;
			}
		}
	}

	.u7 {
		padding: 108rpx 20rpx 10rpx 20rpx;

		&-img {
			width: 100%;
			height: 185rpx;
			border-radius: 20rpx;
		}
	}

	.u24-list {
		padding: 0 20rpx 20rpx 20rpx;
	}
</style>
