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
				<uni-td>{{item.time}}</uni-td>
				<uni-td>
					<view class="u203" :class="[{'u203-pass' : item.status === 2}]">
						{{item.status === 1 ? '审核中' : item.status === 2 ? '通过' :'驳回'}}
					</view>
				</uni-td>
				<uni-td>
					<view class="u203-pass">{{item.code === 1 ? '显示' : ''}}</view>
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
		OpenPage
	} from '@/common/fun.js'
	export default {
		data() {
			return {
				list: [{
					name: '徐磊',
					time: '2022-05-13',
					status: 1, //1审核中 2通过 3拒绝
					code: 0,
				}, {
					name: '张泽瑞',
					time: '2022-05-13',
					status: 2, //1审核中 2通过 3拒绝
					code: 1,
				}],
				total: 0,
				page: 1
			};
		},
		onLoad() {
			this.getHealth()
		},
		methods: {
			openPage(url) {
				OpenPage(url)
			},
			async getHealth() {
				let {
					page,
					list
				} = this.$data;
				try {
					const res = await this.$http(
						`${this.$API.getHealthList}?limit=10&page=${page}`);
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
