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
				<common-order v-for="item,index in orders" :order="item" :key="index"></common-order>
			</view>
			<view v-show="current === 2">
				<common-order v-for="item,index in orders" :order="item" :key="index"></common-order>
			</view>
		</view>
	</view>
</template>

<script>
	import {
		getStorage
	} from '@/common/fun.js'
	export default {
		data() {
			return {
				current: 0,
				tabs: ['全部', '待支付', '已完成'],
				wechat_userInfo: {},
				orders: [],
				total: 0,
				page: 1,
			};
		},
		onLoad(options) {
			this.wechat_userInfo = getStorage('wechat_userInfo');
			this.getOrderList()
		},
		methods: {
			async getOrderList() {
				try {
					let {
						page,
						orders,
						total,
						wechat_userInfo
					} = this.$data;
					if (total > 0 && total == orders.length) {
						return;
					}
					const result = await this.$http(this.$API.getOrderList, {
						limit: 10,
						page,
						userId: wechat_userInfo.userId,
					});
					this.orders = this.orders.concat(result.data.items);
					this.total = result.data.total;
				} catch (e) {
					console.log(e)
					//TODO handle the exception
				}
			},
			changeTab(val) {
				console.log(val)
			}
		},
		onReachBottom() {
			this.page++;
			this.getOrderList()
		}
	}
</script>

<style lang="scss" scoped>
	.content {
		padding: 0 20rpx;
	}
</style>
