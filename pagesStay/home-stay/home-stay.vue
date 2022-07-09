<template>
	<view>
		<view class="sticky-head">
			<view class="u182" @click="openSearch">
				<uni-icons custom-prefix="custom-icon" type="search" size="17" color="#aaa"></uni-icons>
				<view class="u182-text">搜索</view>
			</view>
		</view>
		<common-dropdown :hotelForm="hotelForm" @searchQuery="searchQuery"></common-dropdown>

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
				total: 0,
				hotelForm: {
					current: 0,
					hourseType: '',
					maxPrice: '',
					minPrice: '',
					peopleNum: '',
					regionId: '',
					size: 10,
					title: ""
				}
			};
		},
		onLoad() {
			this.postProductHotel()
		},
		methods: {
			async postProductHotel() {
				try {
					const {
						list,
						total
					} = this.$data;
					if (total > 0 && list.length == total) {
						return;
					}
					const resultHotel = await this.$http(this.$API.postProductShopList, this.hotelForm, 'POST');
					this.list = list.concat(resultHotel.data.list);
					this.total = resultHotel.data.total;
				} catch (e) {
					//TODO handle the exception
				}
			},
			openSearch() {
				OpenPage(`/pages/home/search/search?from=home_stay`)
			},
			searchQuery(val) {
				this.hotelForm = Object.assign(this.hotelForm, val)
				this.list = [];
				this.total = 0;
				this.postProductHotel()
			},
			openPage(item) {
				OpenPage(`/pagesStay/home-stay/home-stay-detail?title=${item.uuid}`)
			},
		},
		onReachBottom() {
			this.hotelForm.current += 10;
			this.postProductHotel()
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
