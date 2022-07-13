<template>
	<view>
		<uni-table emptyText="暂无更多数据">
			<uni-tr>
				<uni-th align="left">姓名</uni-th>
				<uni-th align="left">申请入岛日期</uni-th>
				<uni-th align="left">状态</uni-th>
				<uni-th align="left">上岛码</uni-th>
			</uni-tr>
			<uni-tr v-for="item,index in list" :key="index">
				<uni-td>{{item.name}}</uni-td>
				<uni-td>{{dealUptime(item.uptime)}}</uni-td>
				<uni-td>
					<view class="u203" :class="[{'u203-pass' : item.status === 1}]">
						{{item.status === 0 ? '审核中' : item.status === 1 ? '通过' :'驳回'}}
					</view>
				</uni-td>
				<uni-td>
					<navigator :url="`/pages/home/landing/land-code?id=${item.id}`" hover-class="none">
						<view class="u203-pass">{{item.status === 1 ? '显示' : '-'}}</view>
					</navigator>
				</uni-td>
			</uni-tr>
		</uni-table>

		<view class="bottom">
			<view class="btn" @click="openPage(`/pages/home/landing/land-form`)">填写入岛申请</view>
		</view>

	</view>
</template>

<script>
	import {
		OpenPage,
		addZero,
		getStorage
	} from '@/common/fun.js'
	export default {
		data() {
			return {
				list: [], //0待审核1已同意2审核失败
				total: 0,
				page: 1,
				wechat_userInfo: {}
			};
		},
		onLoad() {
			this.wechat_userInfo = getStorage('wechat_userInfo')
			this.getHealth()
		},
		onShow() {
			this.wechat_userInfo = getStorage('wechat_userInfo')
		},
		methods: {
			openPage(url) {
				OpenPage(url).then(res => {
					if (res.isReload) {
						this.page = 1;
						this.list = [];
						this.total = 0;
						this.getHealth()
					}
				})
			},
			dealUptime(time) {
				if (time) {
					return `${time[0]}-${addZero(time[1])}-${addZero(time[2])}`;
				} else {
					return '-'
				}
			},
			async getHealth() {
				try {
					let {
						page,
						list,
						total,
						wechat_userInfo
					} = this.$data;
					if (total > 0 && total == list.length) {
						return;
					}

					const res = await this.$http(
						`${this.$API.getHealthList}?limit=10&page=${page}&userId=${wechat_userInfo.userId}`);
					this.total = res.data.total;
					this.list = this.list.concat(res.data.items);
				} catch (e) {
					//TODO handle the exception
				}
			}
		},
		onReachBottom() {
			this.page++;
			this.getHealth()
		}
	}
</script>

<style lang="scss" scoped>
	/deep/ .uni-table {
		min-width: 100% !important;
		padding: 0 10px;

		.uni-table-td {
			font: 400 normal 24rpx normal;
			color: #333;
		}

		.u203 {
			font: 400 normal 24rpx normal;
			color: #4971EE;
		}

		.u203-pass {
			font: 400 normal 24rpx normal;
			color: #13B844;
		}
	}

	.bottom {
		padding: 40rpx;

		.btn {
			height: 56rpx;
			background-color: rgba(49, 208, 230, 1);
			border-radius: 12rpx;
			font: 400 normal 24rpx normal;
			color: #fff;
			text-align: center;
			line-height: 56rpx;
		}
	}
</style>
