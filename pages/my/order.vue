<template>
	<view>
		<uni-segmented-control :current="current" styleType="text" activeColor="#31D0E6" :values="tabs"
			@clickItem="changeTab">
		</uni-segmented-control>
		<view class="content">
			<view v-show="current === 0">
				<common-order v-for="item,index in orders" :order="item" :key="index"></common-order>
			</view>
			<view v-show="current === 1">
				<!-- 选项卡2的内容 -->
			</view>
			<view v-show="current === 2">
				<!-- 选项卡3的内容 -->
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				current: 0,
				tabs: ['全部', '待支付', '已完成'],
				orders: []
				// orders: [{
				// 	type: 2, // 1船票 2民宿 3美食 4商城
				// 	url: '/static/home7.png',
				// 	name: '精品双人间',
				// 	time: '2022-04-11',
				// 	pay: 188,
				// 	status: 2, //1待支付 2已完成 3已取消 4已评价
				// 	leftTime: '00:10:00'
				// }, {
				// 	type: 2, // 1船票 2民宿 3美食 4商城
				// 	url: '/static/home7.png',
				// 	name: '精品双人间',
				// 	time: '2022-04-11',
				// 	pay: 188,
				// 	status: 4, //1待支付 2已完成 3已取消 4已评价
				// 	leftTime: '00:10:00'
				// }, {
				// 	type: 3, // 1船票 2民宿 3美食 4商城
				// 	url: '/static/home7.png',
				// 	name: '精品双人间',
				// 	time: '2022-04-11',
				// 	pay: 188,
				// 	status: 3, //1待支付 2已完成 3已取消
				// 	leftTime: '00:10:00'
				// }, {
				// 	type: 4, // 1船票 2民宿 3美食 4商城
				// 	url: '/static/home7.png',
				// 	name: '精品双人间',
				// 	time: '2022-04-11',
				// 	pay: 188,
				// 	status: 1, //1待支付 2已完成 3已取消
				// 	leftTime: '00:10:00'
				// }]
			};
		},
		methods: {
			changeTab(val) {
				console.log(val)
			}
		}
	}
</script>

<style lang="scss" scoped>
	.content {
		padding: 0 20rpx;
	}
</style>
