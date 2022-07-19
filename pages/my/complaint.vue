<template>
	<view>
		<uni-segmented-control :current="current" styleType="text" activeColor="#31D0E6" :values="tabs"
			@clickItem="changeTab">
		</uni-segmented-control>
		<view class="content">
			<view v-show="current === 0">
				<view class="complaint-item" v-for="item,index in list" :key="index" @click="openPage(item)">
					<view class="u109">
						<view class="u109-name">{{item.cptContent}}</view>
						<view class="u109-text" v-if="item.reply">回复内容：{{item.reply}}</view>
					</view>
					<view class="u109">
						<view class="u109-status" :class="[{'u109-finish':item.cptStatus == 20}]">
							{{item.cptStatus == 10 ? '进行中':'已完成'}}
						</view>
					</view>
				</view>
			</view>
			<view v-show="current === 1">
				<view class="complaint-item" v-for="item,index in list" :key="index" @click="openPage(item)">
					<view class="u109">
						<view class="u109-name">{{item.cptContent}}</view>
						<view class="u109-text">回复内容：{{item.reply}}</view>
					</view>
					<view class="u109">
						<view class="u109-status">进行中</view>
					</view>
				</view>
			</view>
			<view v-show="current === 2">
				<view class="complaint-item" v-for="item,index in list" :key="index" @click="openPage(item)">
					<view class="u109">
						<view class="u109-name">{{item.cptContent}}</view>
						<view class="u109-text">回复内容：{{item.reply}}</view>
					</view>
					<view class="u109">
						<view class="u109-status u109-finish">已完成</view>
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
				current: 0,
				tabs: ['全部', '进行中', '已完成'],
				list: [],
				total: 0,
				formData: {
					cptStatus: '', //10进行中20已完成
					page: 1,
					limit: 10
				}
			};
		},
		onLoad() {
			this.getComplaints()
		},
		methods: {
			changeTab(e) {
				this.current = e.currentIndex;
				this.formData.cptStatus = this.current * 10 || ''
				this.formData.page = 1;
				this.list = [];
				this.total = 0;
				this.getComplaints()
			},
			openPage(item) {
				OpenPage('/pages/my/complaint-now', {
					item
				})
			},
			async getComplaints() {
				try {
					const {
						list,
						total
					} = this.$data;
					if (total > 0 && total == list.length) {
						return;
					}
					const result = await this.$http(this.$API.getComplaintList, this.formData);
					this.list = list.concat(result.data.items);
					this.total = result.data.total;
				} catch (e) {
					//TODO handle the exception
				}
			}
		},
		onReachBottom() {
			this.formData.page++;
			this.getComplaints()
		}
	}
</script>

<style lang="scss" scoped>
	.content {
		padding: 0 20rpx;

		.complaint-item {
			padding: 20rpx;
			border-bottom: 2rpx solid rgba(242, 242, 242, 1);
			@extend .default-flex;
			justify-content: space-between;

			.u109 {
				&-name {
					font: 400 normal 32rpx normal;
					color: #333;
					word-break: break-all;
					text-overflow: ellipsis;
					display: -webkit-box;
					-webkit-box-orient: vertical;
					-webkit-line-clamp: 2;
					overflow: hidden;
					flex: 1;
				}

				&-text {
					font: normal 400 24rpx/normal '微软雅黑', sans-serif;
					color: #aaa;
					margin-top: 10rpx;
				}

				&-status {
					font: 400 normal 30rpx normal;
					color: #31D0E6;
				}

				&-finish {
					@extend .u109-status;
					color: #00976A;
				}
			}
		}

	}
</style>
