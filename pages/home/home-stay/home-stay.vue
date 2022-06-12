<template>
	<view>
		<view class="sticky-head">
			<view class="u182" @click="openSearch">
				<uni-icons custom-prefix="custom-icon" type="search" size="17" color="#aaa"></uni-icons>
				<view class="u182-text">搜索</view>
			</view>
		</view>
		<common-dropdown></common-dropdown>

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
				keyword: '',
				list: [{
					name: '丽景山庄',
					address: '小长山岛镇',
					pay: 1168,
					tags: ['24小时客房服务', '公共区域WIFI'],
					url: '/static/stay1.jpg'
				}, {
					name: '老吴家渔子宿',
					address: '小长山岛镇',
					pay: 980,
					tags: ['24小时客房服务', '公共区域WIFI'],
					url: '/static/stay2.jpg'
				}, {
					name: '金水岸',
					address: '广鹿岛',
					pay: 2890,
					tags: ['24小时客房服务', '公共区域WIFI'],
					url: '/static/stay3.jpg',
				}]
			};
		},
		methods: {
			openSearch() {
				OpenPage(`/pages/home/search/search?from=home_stay`)
			},
			input() {

			},
			openPage(item) {
				OpenPage(`/pages/home/home-stay/home-stay-detail?title=${item.name}`)
			}
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
