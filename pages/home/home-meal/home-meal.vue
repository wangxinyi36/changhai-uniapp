<template>
	<view>
		<view class="sticky-head">
			<view class="u182" @click="openSearch">
				<uni-icons custom-prefix="custom-icon" type="search" size="17" color="#aaa"></uni-icons>
				<view class="u182-text">搜索</view>
			</view>
		</view>
		<common-meal-dropdown :mealForm="mealForm" @searchQuery="searchQuery"></common-meal-dropdown>

		<view class="u24-list">
			<common-meal-item v-for="item,index in list" :key="index" :info="item">
			</common-meal-item>
			<common-empty index="2" v-if="list.length == 0"></common-empty>
		</view>

		<view class="u77" @click="open">
			<image src="/static/mall9.svg" mode="aspectFill" class="u77-img"></image>
		</view>
		<uni-popup ref="popup" type="bottom" @change="change">
			<view class="u120">
				<view class="u128">
					<view class="u128-title">加入购物车</view>
					<view class="u128-title">清空</view>
				</view>
				<view class="cart-list">
					<common-cart-goods v-for="item,index in goods" :key="index" :goods="item"></common-cart-goods>
				</view>
				<view class="u181">
					<view class="u181-left">
						<view class="u181-left-box">
							<image src="/static/u183.svg" mode="aspectFill" class="u181-left-box-img"></image>
							<view class="u181-left-box-count">1</view>
						</view>
						<view class="u185">
							<view class="u185-pay">￥155</view>
							<view class="u185-send">预估配送费 ￥0</view>
						</view>
					</view>
					<view class="u181-right">去结算</view>
				</view>
			</view>
		</uni-popup>
	</view>
</template>

<script>
	import {
		OpenPage
	} from '@/common/fun.js'
	export default {
		data() {
			return {
				goods: [{
					name: '海参',
					url: '/static/mall8.png',
					weight: 555,
					count: 1,
					pay: 155
				}],
				list: [],
				total: 0,
				mealForm: {
					current: 0,
					distance: "",
					lat: "",
					lng: "",
					price: "",
					cityCode: "",
					size: 10,
					title: ""
				}
			};
		},
		onLoad() {
			this.getWMList()
		},
		methods: {
			async getWMList() {
				try {
					let {
						mealForm,
						total,
						list
					} = this.$data;
					if (total > 0 && list.length == total) {
						return;
					}
					const result = await this.$http(this.$API.postProductWMList, mealForm, 'POST');
					this.list = list.concat(result.data.list);
					this.total = result.data.total;
				} catch (e) {
					console.log(e)
					//TODO handle the exception
				}
			},
			open() {
				this.$refs.popup.open('bottom')
			},
			openSearch() {
				OpenPage(`/pages/home/search/search?from=home_meal`)
			},
			searchQuery(val) {
				this.mealForm = val;
				this.list = []
				this.total = []
				this.getWMList()
			}
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

	.u77 {
		width: 66rpx;
		height: 66rpx;
		border-radius: 50%;
		background-color: rgb(253, 122, 33);
		position: fixed;
		right: 20rpx;
		top: 50%;
		@extend .default-flex;
		justify-content: center;

		&-img {
			width: 46rpx;
			height: 41rpx;
		}
	}

	.u120 {
		min-height: 322rpx;
		max-height: 322px;
		background-color: #fff;
		border-radius: 20rpx 20rpx 0 0;
		padding: 0 30rpx 50px 30rpx;
		position: relative;
		overflow-y: scroll;

		.u128 {
			@extend .default-flex;
			justify-content: space-between;
			margin-bottom: 20rpx;
			position: sticky;
			position: -webkit-sticky;
			width: 100%;
			top: 0;
			background: #fff;
			padding-top: 30rpx;
			z-index: 1;

			&-title {
				font: 400 normal 28rpx normal;
				color: #333;
			}
		}
	}

	.u181 {
		height: 110rpx;
		position: fixed;
		bottom: 0;
		left: 0;
		@extend .default-flex;
		background-color: #fff;
		width: 100%;

		&-left {
			background-color: #000;
			border-radius: 375rpx 0 0 375rpx;
			flex: 1;
			height: 100%;
			@extend .default-flex;
			padding-left: 30rpx;
			margin-left: 40rpx;


			&-box {
				position: relative;
				margin-right: 20rpx;

				&-img {
					width: 61rpx;
					height: 54rpx;
				}

				&-count {
					width: 48rpx;
					height: 48rpx;
					border-radius: 50%;
					background-color: rgb(217, 0, 27);
					@extend .default-flex;
					justify-content: center;
					color: #fff;
					font: normal 400 32rpx/normal 'Arial Normal', 'Arial', sans-serif;
					position: absolute;
					top: -20rpx;
					left: -30rpx;
				}
			}

			.u185 {
				&-pay {
					font: normal 400 32rpx/normal '微软雅黑', sans-serif;
					color: #fff;
				}

				&-send {
					@extend .u185-pay;
					font-size: 28rpx;
				}
			}
		}

		&-right {
			height: 100%;
			background: linear-gradient(180deg, rgba(245, 154, 35, 1) 0%, rgba(237, 100, 33, 1) 100%);
			border-radius: 0 375rpx 375rpx 0;
			font: normal 400 32rpx/110rpx 'Arial Normal', 'Arial', sans-serif;
			color: #fff;
			width: 140rpx;
			text-align: center;
			margin-right: 40rpx;
		}
	}
</style>
