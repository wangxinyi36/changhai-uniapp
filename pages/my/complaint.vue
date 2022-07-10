<template>
	<view>
		<uni-segmented-control :current="current" styleType="text" activeColor="#31D0E6" :values="tabs"
			@clickItem="changeTab">
		</uni-segmented-control>
		<view class="content">
			<view v-show="current === 0">
				<view class="complaint-item" v-for="item,index in list" :key="index">
					<view class="u109">
						<!-- <view class="u109-name">{{item.name}}</view> -->
						<view class="u109-status" :class="[{'u109-finish':item.cptStatus == 20}]">
							{{item.cptStatus == 10 ? '进行中':'已完成'}}
						</view>
					</view>
					<view class="u110">
						<view class="u110-text">{{item.cptContent}}</view>
					</view>
				</view>

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
			// this.getComplaints()
		},
		methods: {
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

			.u109 {
				@extend .default-flex;
				justify-content: space-between;

				&-name {
					font: 400 normal 32rpx normal;
					color: #333;
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

			.u110 {
				font: 400 normal 24rpx normal;
				color: #333;
				margin-top: 20rpx;

				&-text {
					white-space: nowrap;
					text-overflow: ellipsis;
					overflow: hidden;
				}
			}
		}

	}
</style>
