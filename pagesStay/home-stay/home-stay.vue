<template>
	<view>
		<view class="sticky-head">
			<view class="u182" @click="openSearch">
				<uni-icons custom-prefix="custom-icon" type="search" size="17" color="#aaa"></uni-icons>
				<view class="u182-text">搜索</view>
			</view>
		</view>
		<common-dropdown color="#4FD7EA"></common-dropdown>

		<view class="u24-list">
			<common-home-item v-for="item,index in list" :key="index" :info="item">
			</common-home-item>
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
				productForm: {
					area: "",
					name: "",
					pageNum: 10,
					start: 0,
					uuType: "C", //A景点 B路线 C酒店 F套票 G美食 H演出
					uuid: ""
				}
			};
		},
		onLoad() {
			this.postProduct()
		},
		methods: {
			openSearch() {
				OpenPage(`/pages/home/search/search?from=home_stay`)
			},
			input() {

			},
			openPage(item) {
				OpenPage(`/pagesStay/home-stay/home-stay-detail?title=${item.uuid}`)
			},
			async postProduct() {
				try {
					const resultHotel = await this.$http(this.$API.postProductList, this.productForm, 'POST');
					this.list = resultHotel.data.list;
				} catch (e) {
					//TODO handle the exception
				}
			}
		},
		onReachBottom() {
			console.log(1)
		}
	}
</script>

<style lang="scss" scoped>
	.sticky-head {
		position: sticky;
		top: 0;
		width: 100%;
		background: #fff;
		z-index: 2;

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

	.u24-list {
		padding: 108rpx 20rpx 20rpx 20rpx;
	}
</style>
