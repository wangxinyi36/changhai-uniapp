<template>
	<view>
		<view class="header">
			<uni-segmented-control :current="type" styleType="text" activeColor="#31D0E6" :values="types"
				@clickItem="changeType">
			</uni-segmented-control>
			<uni-segmented-control :current="current" styleType="text" activeColor="#31D0E6" :values="tabs"
				@clickItem="changeStatus" v-if="type == 0">
			</uni-segmented-control>
			<uni-segmented-control :current="current" styleType="text" activeColor="#31D0E6" :values="tabs2"
				@clickItem="changeStatus" v-if="type > 0">
			</uni-segmented-control>
		</view>
		<view class="content">
			<view v-if="current == 0">
				<common-order v-for="item,index in orders" :order="item" :type="type" :key="index" @cancel="cancel"
					@reload="reload">
				</common-order>
			</view>
			<view v-if="current == 1">
				<common-order v-for="item,index in orders" :order="item" :type="type" :key="index" @cancel="cancel"
					@reload="reload">
				</common-order>
			</view>
			<view v-if="current == 2">
				<common-order v-for="item,index in orders" :order="item" :type="type" :key="index" @cancel="cancel"
					@reload="reload">
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
	import {
		ORDER_TYPE,
		ORDER_STATUS,
		ORDER_STATUS2
	} from '@/common/common.js'
	export default {
		data() {
			return {
				current: 0, //状态
				tabs: ['全部', '待支付', '已完成'],
				tabs2: ['全部', '未支付', '已支付'],
				type: 0, //类型
				types: ['商城', '民宿', '美食', '外卖', '船票'],
				status: '',
				statusList: [],
				wechat_userInfo: {},
				orders: [],
				total: 0,
				orderForm: {
					limit: 10,
					page: 1,
					orderStatusArray: '', //‘’ 全部 101待支付 102已取消 201已完成
					userId: '',
				},
				pftForm: {
					current: 0,
					size: 10,
					orderStatus: -1, //-1：全部 0：未支付 1：已支付
					userId: '',
					orderType: "", //C：民宿 G：美食 W：外卖 S：船票
				}
			};
		},
		onLoad(options) {
			this.wechat_userInfo = getStorage('wechat_userInfo');
			this.getOrderList();
		},
		methods: {
			// 商城订单列表
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
			// 票付通订单列表
			async getOrders() {
				try {
					let {
						pftForm,
						orders,
						total,
						wechat_userInfo,
					} = this.$data;
					if (total > 0 && total == orders.length) {
						return;
					}
					pftForm.userId = wechat_userInfo.userId;
					const result = await this.$http(this.$API.postQueryMyOrder, pftForm, 'POST');
					this.orders = this.orders.concat(result.data.list);
					this.total = result.data.total;
				} catch (e) {
					console.log(e)
					//TODO handle the exception
				}
			},
			// 类型切换
			changeType(e) {
				this.type = e.currentIndex;
				this.total = 0;
				this.orders = []
				switch (e.currentIndex) {
					case 0:
						this.orderForm.page = 1;
						this.getOrderList();
						break;
					case 1:
					case 2:
					case 3:
					case 4:
						this.pftForm.orderType = e.currentIndex == 1 ? 'C' : e.currentIndex == 2 ? 'G' : e.currentIndex ==
							3 ? 'W' : e.currentIndex == 4 ? 'S' : ''
						this.getOrders();
						break;
				}
			},
			// 状态切换
			changeStatus(e) {
				this.current = e.currentIndex;
				this.total = 0;
				this.orders = []
				if (this.type == 0) {
					this.orderForm.orderStatusArray = e.currentIndex == 0 ? '' : e.currentIndex == 1 ? 101 : e
						.currentIndex == 2 ? 201 : '';
					this.orderForm.page = 1;
					this.getOrderList();
				} else {
					this.pftForm.orderStatus = e.currentIndex == 0 ? -1 : e.currentIndex == 1 ? 0 : e
						.currentIndex == 2 ? 1 : '';
					this.pftForm.current = 0;
					this.getOrders();
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
		padding: 72px 20rpx 0 20rpx;
	}

	.header {
		position: fixed;
		width: 100%;
		background: #fff;
		z-index: 1;

		&-types {
			@extend .default-flex;
			justify-content: space-between;

			&-item {}
		}
	}
</style>
