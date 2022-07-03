<template>
	<view>
		<view class="sticky-head">
			<view class="u182" @click="openSearch">
				<uni-icons custom-prefix="custom-icon" type="search" size="17" color="#aaa"></uni-icons>
				<view class="u182-text">搜索</view>
			</view>
		</view>
		<common-food-dropdown color="#ff7100" :background="background"></common-food-dropdown>

		<view class="u7">
			<image src="/static/home1.jpg" mode="aspectFill" class="u7-img"></image>
		</view>

		<view class="u24-list">
			<common-food-item v-for="item,index in list" :key="index" :info="item">
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
				background: '-webkit-linear-gradient(0.23deg, rgba(255, 255, 255, 1) 0%, rgba(255, 113, 0, 1) 100%)',
				list: [],
				productForm: {
					area: "",
					name: "",
					pageNum: 10,
					start: 0,
					uuType: "G", //A景点 B路线 C酒店 F套票 G美食 H演出
					uuid: ""
				},
				total: 0,
			};
		},
		onLoad() {
			this.postProduct()
		},
		methods: {
			openSearch() {
				OpenPage(`/pages/home/search/search?from=tasty_food`)
			},
			async postProduct() {
				try {
					const {
						total,
						list
					} = this.$data;
					if (total > 0 && list.length == total) {
						return;
					}
					const resultFoods = await this.$http(this.$API.postProductList, this.productForm, 'POST');
					this.list = list.concat(resultFoods.data.list);
					this.total = resultFoods.data.total;
				} catch (e) {
					//TODO handle the exception
				}
			}
		},
		onReachBottom() {
			this.productForm.start += 10;
			this.postProduct()
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
