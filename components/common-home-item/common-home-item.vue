<template>
	<view class="u24-item" @click="openPage">
		<image :src="info.uuimgPath" mode="aspectFill" class="u24-item-img"></image>
		<view class="u24-item-box">
			<view class="u24-item-box-name">{{info.uutitle}}</view>
			<view class="u24-item-box-address">{{info.uuarea}}</view>
			<view class="u24-item-box-tags">
				<view class="u24-item-box-tag" v-for="tag,i in info.tags" :key="i">{{tag}}</view>
			</view>
			<view class="u24-item-box-pay"><text style="font-size: 20rpx;">￥</text>{{info.pay}}<text
					style="font-size: 24rpx;">起</text></view>
		</view>
	</view>
</template>

<script>
	import {
		OpenPage
	} from '@/common/fun.js'
	export default {
		props: ['info'],
		data() {
			return {};
		},
		methods: {
			openPage() {
				OpenPage(`/pagesStay/home-stay/home-stay-detail?title=${this.info.name}`)
			}
		}
	}
</script>

<style lang="scss" scoped>
	.u24-item {
		@extend .default-flex;
		align-items: unset;
		margin-bottom: 20rpx;

		&-img {
			width: 260rpx;
			height: 140rpx;
			border-radius: 12rpx;
			margin-right: 20rpx;
		}

		&-box {
			border-bottom: 1px solid rgba(215, 215, 215, 1);
			flex: 1;

			&-name {
				font: normal 400 30rpx/normal '微软雅黑', sans-serif;
				color: #000;
			}

			&-address {
				font: normal 400 24rpx/normal '微软雅黑', sans-serif;
				color: #c2c2c2;
			}

			&-tags {
				@extend .default-flex;
			}

			&-tag {
				font: normal 400 18rpx/normal '微软雅黑', sans-serif;
				color: #F59A23;
				border: 2rpx solid rgba(245, 154, 35, 1);
				margin-right: 10rpx;
			}

			&-pay {
				font: normal 400 32rpx/normal '微软雅黑', sans-serif;
				color: #D9001B;
				text-align: right;
			}
		}
	}
</style>
