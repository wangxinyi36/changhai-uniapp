<template>
	<view class="search">
		<view class="sticky-head">
			<uni-search-bar v-model="keyword" @confirm="search" placeholder="搜索" :radius="58" bgColor="#edf0f7">
			</uni-search-bar>
		</view>
		<view class="u121" v-show="isShow">
			<view class="u121-title">搜索历史</view>
			<view class="u121-tags">
				<view class="u121-tag" v-for="tag,index in history" :key="index">{{tag}}</view>
			</view>
		</view>
		<view class="list" v-show="!isShow">

			<template v-if="from == 'home_stay'">
				<common-home-item v-for="item,index in listStay" :key="index" @click="openPage(item)" :info="item">
				</common-home-item>
			</template>

			<template v-if="from == 'tasty_food'">
				<common-food-item v-for="item,index in listFood" :key="index" @click="openPage(item)" :info="item">
				</common-food-item>
			</template>
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
				history: ['船票', '民宿', '美食', '活动', '大长山岛', '大长山岛住宿'],
				isShow: true, //true展示历史记录  false不展示
				searchList: [],
				listFood: [{
					avatar: '/static/home1.png',
					name: '新鲜海鲜',
					grade: 4,
					pay: 20,
					address: '大长山岛',
					distance: '1.2km',
					foods: [{
						url: '/static/home1.png',
						name: '海鲜杂烩',
						money: 130
					}, {
						url: '/static/home1.png',
						name: '海鲜杂烩',
						money: 130
					}, {
						url: '/static/home1.png',
						name: '海鲜杂烩',
						money: 130
					}]
				}, {
					avatar: '/static/home1.png',
					name: '新鲜海鲜',
					grade: 4,
					pay: 20,
					address: '大长山岛',
					distance: '1.2km',
					foods: [{
						url: '/static/home1.png',
						name: '海鲜杂烩',
						money: 130
					}, {
						url: '/static/home1.png',
						name: '海鲜杂烩',
						money: 130
					}, {
						url: '/static/home1.png',
						name: '海鲜杂烩',
						money: 130
					}]
				}, {
					avatar: '/static/home1.png',
					name: '新鲜海鲜',
					grade: 4,
					pay: 20,
					address: '大长山岛',
					distance: '1.2km',
					foods: [{
						url: '/static/home1.png',
						name: '海鲜杂烩',
						money: 130
					}, {
						url: '/static/home1.png',
						name: '海鲜杂烩',
						money: 130
					}, {
						url: '/static/home1.png',
						name: '海鲜杂烩',
						money: 130
					}]
				}, {
					avatar: '/static/home1.png',
					name: '新鲜海鲜',
					grade: 4,
					pay: 20,
					address: '大长山岛',
					distance: '1.2km',
					foods: [{
						url: '/static/home1.png',
						name: '海鲜杂烩',
						money: 130
					}, {
						url: '/static/home1.png',
						name: '海鲜杂烩',
						money: 130
					}, {
						url: '/static/home1.png',
						name: '海鲜杂烩',
						money: 130
					}]
				}, {
					avatar: '/static/home1.png',
					name: '新鲜海鲜',
					grade: 4,
					pay: 20,
					address: '大长山岛',
					distance: '1.2km',
					foods: [{
						url: '/static/home1.png',
						name: '海鲜杂烩',
						money: 130
					}, {
						url: '/static/home1.png',
						name: '海鲜杂烩',
						money: 130
					}, {
						url: '/static/home1.png',
						name: '海鲜杂烩',
						money: 130
					}]
				}, {
					avatar: '/static/home1.png',
					name: '新鲜海鲜',
					grade: 4,
					pay: 20,
					address: '大长山岛',
					distance: '1.2km',
					foods: [{
						url: '/static/home1.png',
						name: '海鲜杂烩',
						money: 130
					}, {
						url: '/static/home1.png',
						name: '海鲜杂烩',
						money: 130
					}, {
						url: '/static/home1.png',
						name: '海鲜杂烩',
						money: 130
					}]
				}],
				listStay: [{
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
				}],
				from: '', //home_stay  tasty_food
			};
		},
		onLoad(options) {
			this.from = options.from;
		},
		methods: {
			search(val) {
				this.isShow = false;
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
		padding-bottom: 20rpx;

		/deep/ .uni-searchbar {
			padding: 0 10px;
		}
	}

	.u121 {
		padding: 20rpx 30rpx;

		&-title {
			font: normal 400 24rpx/normal '微软雅黑', sans-serif;
			color: #000;
		}

		&-tags {
			@extend .default-flex;
			flex-wrap: wrap;
			margin-top: 20rpx;
		}

		&-tag {
			margin-right: 30rpx;
			@extend .u121-title;
		}
	}

	.list {
		padding: 0 20rpx 20rpx 20rpx;
	}
</style>
