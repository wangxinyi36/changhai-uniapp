<template>
	<view>
		<uni-segmented-control :current="current" styleType="text" activeColor="#31D0E6" :values="tabs"
			@clickItem="changeTab">
		</uni-segmented-control>
		<view class="content">
			<view v-show="current === 0">
				<common-order v-for="item,index in orders" :order="item" :key="index" @cancel="cancel" @reload="reload">
				</common-order>
			</view>
			<view v-show="current === 1">
				<common-order v-for="item,index in orders" :order="item" :key="index" @cancel="cancel" @reload="reload">
				</common-order>
			</view>
			<view v-show="current === 2">
				<common-order v-for="item,index in orders" :order="item" :key="index" @cancel="cancel" @reload="reload">
				</common-order>
			</view>
			<common-empty index="2" v-if="orders.length == 0"></common-empty>
		</view>
	</view>
</template>

<script>
	import {
		getStorage,
		showToast
	} from '@/common/fun.js'
	export default {
		data() {
			return {
				current: 0,
				tabs: ['全部', '待支付', '已完成'],
				wechat_userInfo: {},
				orders: [],
				total: 0,
				orderForm: {
					limit: 10,
					page: 1,
					orderStatusArray: '',
					userId: '',
				}
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
						orders,
						total,
						wechat_userInfo,
						orderForm
					} = this.$data;
					if (total > 0 && total == orders.length) {
						return;
					}
					orderForm.userId = wechat_userInfo.userId;
					const result = await this.$http(this.$API.getOrderList, orderForm);
					this.orders = this.orders.concat(result.data.items);
					this.total = result.data.total;
				} catch (e) {
					console.log(e)
					//TODO handle the exception
				}
			},
			async cancel(item) {
				try {
					const _this = this;
					const result = await this.$http(`${this.$API.putOrderCancel}/${item.id}`, {}, 'PUT');
					showToast('取消成功~');
					setTimeout(() => {
						_this.orderForm.page = 1;
						_this.total = 0;
						_this.orders = [];
						_this.getOrderList()
					}, 1500)
				} catch (e) {
					console.log(e)
					//TODO handle the exception
				}
			},
			reload() {
				this.orderForm.page = 1;
				this.orders = [];
				this.total = 0;
				this.getOrderList()
			},
			changeTab(val) {
				switch (val.currentIndex) {
					case 0:
						this.orderForm.orderStatusArray = '';
						break;
					case 1:
						this.orderForm.orderStatusArray = 101;
						break;
					case 2:
						this.orderForm.orderStatusArray = 201;
						break;
				}
				this.orderForm.page = 1;
				this.orders = [];
				this.total = 0;
				this.getOrderList()
			}
		},
		onReachBottom() {
			this.orderForm.page++;
			this.getOrderList()
		}
	}
</script>

<style lang="scss" scoped>
	.content {
		padding: 0 20rpx;
	}
</style>
