<template>
	<view>
		<view class="sticky-head">
			<uni-search-bar v-model="keyword" placeholder="搜索" @confirm="search" @input="input" bgColor="#edf0f7"
				radius="58" />
		</view>
		<common-dropdown></common-dropdown>

		<view class="u24-list">
			<view class="u24-item" v-for="item,index in list" :key="index" @click="openPage(item)">
				<image :src="item.url" mode="aspectFill" class="u24-item-img"></image>
				<view class="u24-item-box">
					<view class="u24-item-box-name">{{item.name}}</view>
					<view class="u24-item-box-address">{{item.address}}</view>
					<view class="u24-item-box-tags">
						<view class="u24-item-box-tag" v-for="tag,i in item.tags" :key="i">{{tag}}</view>
					</view>
					<view class="u24-item-box-pay"><text style="font-size: 20rpx;">￥</text>{{item.pay}}<text
							style="font-size: 24rpx;">起</text></view>
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
				keyword: '',
				list: [{
					name: '杏树镇民宿',
					address: '大长山岛镇',
					pay: 1168,
					tags: ['24小时客房服务', '公共区域WIFI'],
					url: '/static/home1.png'
				}, {
					name: '杏树镇民宿',
					address: '大长山岛镇',
					pay: 1168,
					tags: ['24小时客房服务', '公共区域WIFI'],
					url: '/static/home1.png'
				}, {
					name: '杏树镇民宿',
					address: '大长山岛镇',
					pay: 1168,
					tags: ['24小时客房服务', '公共区域WIFI'],
					url: '/static/home1.png'
				}, {
					name: '杏树镇民宿',
					address: '大长山岛镇',
					pay: 1168,
					tags: ['24小时客房服务', '公共区域WIFI'],
					url: '/static/home1.png'
				}, {
					name: '杏树镇民宿',
					address: '大长山岛镇',
					pay: 1168,
					tags: ['24小时客房服务', '公共区域WIFI'],
					url: '/static/home1.png'
				}, {
					name: '杏树镇民宿',
					address: '大长山岛镇',
					pay: 1168,
					tags: ['24小时客房服务', '公共区域WIFI'],
					url: '/static/home1.png'
				}, {
					name: '杏树镇民宿',
					address: '大长山岛镇',
					pay: 1168,
					tags: ['24小时客房服务', '公共区域WIFI'],
					url: '/static/home1.png'
				}, {
					name: '杏树镇民宿',
					address: '大长山岛镇',
					pay: 1168,
					tags: ['24小时客房服务', '公共区域WIFI'],
					url: '/static/home1.png'
				}, {
					name: '杏树镇民宿',
					address: '大长山岛镇',
					pay: 1168,
					tags: ['24小时客房服务', '公共区域WIFI'],
					url: '/static/home1.png'
				}, {
					name: '杏树镇民宿',
					address: '大长山岛镇',
					pay: 1168,
					tags: ['24小时客房服务', '公共区域WIFI'],
					url: '/static/home1.png'
				}]
			};
		},
		methods: {
			search() {

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
		z-index: 1;
	}

	.u24-list {
		padding: 108rpx 20rpx 20rpx 20rpx;

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
	}
</style>
