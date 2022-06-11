<template>
	<view>
		<view class="u221">
			<swiper :indicator-dots="true" indicator-color="#edf0f7fe" indicator-active-color="#fff" :autoplay="true"
				:interval="5000" :duration="1000">
				<swiper-item v-for="item,index in swipers" :key="index">
					<view class="swiper-item">
						<image :src="item" mode="aspectFill" class="swiper-item-img"></image>
					</view>
				</swiper-item>
			</swiper>
		</view>
		<view class="u227">
			<view class="u227-title">当季热门</view>
			<view class="u227-list">
				<view class="u227-list-item" v-for="item,index in list" :key="index" @click="openPage(item)">
					<image :src="item.url" mode="aspectFill" class="u227-list-item-img"></image>
					<view class="u227-list-item-box">
						<view class="u229">{{item.name}}</view>
						<view class="u230">{{item.summary}}</view>
					</view>
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
		data() {
			return {
				swipers: ['/static/home1.png', '/static/home1.png', '/static/home1.png'],
				list: [{
					name: '大长山岛',
					url: '/static/home1.png',
					summary: '2-6人独立小团，海岛9人游+免费接送，景点一网打尽，装备齐全。'
				}, {
					name: '大长山岛',
					url: '/static/home1.png',
					summary: '2-6人独立小团，海岛9人游+免费接送，景点一网打尽，装备齐全。'
				}, {
					name: '大长山岛',
					url: '/static/home1.png',
					summary: '2-6人独立小团，海岛9人游+免费接送，景点一网打尽，装备齐全。'
				}, {
					name: '大长山岛',
					url: '/static/home1.png',
					summary: '2-6人独立小团，海岛9人游+免费接送，景点一网打尽，装备齐全。'
				}, {
					name: '大长山岛',
					url: '/static/home1.png',
					summary: '2-6人独立小团，海岛9人游+免费接送，景点一网打尽，装备齐全。'
				}, {
					name: '大长山岛',
					url: '/static/home1.png',
					summary: '2-6人独立小团，海岛9人游+免费接送，景点一网打尽，装备齐全。'
				}]
			};
		},
		methods: {
			openPage(item) {
				OpenPage(`/pages/home/special-route/special-route-detail?title=${item.name}`)
			}
		}
	}
</script>

<style lang="scss" scoped>
	.swiper-item {
		height: 424rpx;
		width: 100%;

		&-img {
			width: 100%;
			height: 100%;
		}
	}

	.u227 {
		padding: 20rpx;

		&-title {
			font: normal 700 32rpx/normal '微软雅黑 Bold', '微软雅黑 Regular', '微软雅黑', sans-serif;
			color: #333;
			margin-left: 20rpx;
		}

		&-list {
			padding-top: 20rpx;

			&-item {
				display: flex;
				margin-bottom: 30rpx;

				&-img {
					width: 205rpx;
					height: 144rpx;
					border-radius: 20rpx;
					margin-right: 20rpx;
				}

				.u227-list-item-box {
					flex: 1;
					display: flex;
					flex-direction: column;
					justify-content: space-between;

					.u229 {
						font: normal 400 32rpx/normal '微软雅黑', sans-serif;
						color: #333;
					}

					.u230 {
						font: normal 400 28rpx/normal '微软雅黑', sans-serif;
						color: #333;
					}
				}
			}
		}
	}
</style>
