<template>
	<view>
		<view class="sticky-head">
			<view class="u182" @click="openSearch">
				<uni-icons custom-prefix="custom-icon" type="search" size="17" color="#aaa"></uni-icons>
				<view class="u182-text">搜索</view>
			</view>
		</view>
		<common-food-dropdown :foodForm="foodForm" @searchQuery="searchQuery"></common-food-dropdown>

		<view class="u7"></view>

		<view class="u24-list">
			<common-food-item v-for="item,index in list" :key="item.uuid" :info="item">
			</common-food-item>
			<common-empty index="2" v-if="list.length == 0"></common-empty>
		</view>
	</view>
</template>

<script>
	import {
		OpenPage,
		getStorage
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
					cityCode: "",
					size: 10,
					title: ""
				},
			};
		},
		onLoad() {
			this.foodForm.lat = getStorage('currentPoint').latitude;
			this.foodForm.lng = getStorage('currentPoint').longitude;
			this.getFoods()
		},
		methods: {
			async getFoods() {
				try {
					const {
						total,
						list,
						foodForm
					} = this.$data;
					if (total > 0 && list.length == total) {
						return;
					}

					let form = JSON.parse(JSON.stringify(foodForm))
					if (form.distance == '-') {
						form.distance = ''
					}
					const resultFoods = await this.$http(this.$API.postProductFoodList, form, 'POST');
					this.list = list.concat(resultFoods.data.list);
					this.total = resultFoods.data.total;
				} catch (e) {
					console.log(e)
					//TODO handle the exception
				}
			},
			searchQuery(val) {
				this.foodForm = Object.assign(this.foodForm, val)
				this.list = [];
				this.total = 0;
				this.getFoods()
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
