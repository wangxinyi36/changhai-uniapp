<template>
	<view class="u24-item" @click="openPage">
		<image :src="info.uuimgPath" mode="aspectFill" class="u24-item-img"></image>
		<view class="u24-item-box">
			<view class="u24-item-box-name">
				<view class="u38">{{info.uutitle}}</view>
			</view>
			<view class="u39">
				<view class="u39-grade">{{info.star}}分</view>
				<view class="u39-pay">人均￥{{info.percapita/100}}</view>
			</view>
			<view class="u40">起送￥{{info.startDelivery/100}}</view>
			<view class="u41">
				<view class="u41-tag" v-for="tag,i in info.ketKeywordList" :key="i">{{tag}}</view>
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
		methods: {
			openPage() {
				OpenPage(`/pages/home/home-meal/detail?id=${this.info.uuid}`)
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
		display: flex;

		&-img {
			width: 200rpx;
			height: 200rpx;
			border-radius: 20rpx;
			margin-right: 20rpx;
		}

		&-box {
			flex: 1;

			&-name {
				font: normal 400 32rpx/normal '微软雅黑', sans-serif;
				color: #333;
				@extend .default-flex;
				justify-content: space-between;

				.u38-text {
					font-size: 24rpx;
					color: #aaa;
				}
			}

			.u39 {
				@extend .default-flex;
				margin: 6rpx 0;

				&-grade {
					font: normal 400 24rpx/normal '微软雅黑', sans-serif;
					color: #DC1010;
					margin-right: 20rpx;
				}

				&-pay {
					@extend .u39-grade;
					color: #AAAAAA;
				}
			}

			.u40 {
				@extend .u39-pay;
			}

			.u41 {
				@extend .default-flex;
				margin-top: 30rpx;

				&-tag {
					font: normal 400 24rpx/normal 'Arial Normal', 'Arial', sans-serif;
					color: #FF6C00;
					margin-right: 16rpx;
					background-color: rgba(253, 209, 184, 1);
					border-radius: 8rpx;
					padding: 2rpx;
				}
			}
		}

	}
</style>
