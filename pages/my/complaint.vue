<template>
	<view>
		<uni-segmented-control :current="current" styleType="text" activeColor="#31D0E6" :values="tabs"
			@clickItem="changeTab">
		</uni-segmented-control>
		<view class="content">
			<view v-show="current === 0">
				<view class="complaint-item" v-for="item,index in list" :key="index">
					<view class="u109">
						<view class="u109-name">{{item.name}}</view>
						<view class="u109-status" :class="[{'u109-finish':item.status === 2}]">
							{{`${item.status === 1 ? '进行中':'已完成'}`}}
						</view>
					</view>
					<view class="u110">
						<view class="u110-text">{{item.content}}</view>
					</view>
				</view>

			</view>
			<view v-show="current === 1">
				选项卡2的内容
			</view>
			<view v-show="current === 2">
				选项卡3的内容
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
				list: [{
					name: '张三',
					status: 1, //1进行中 2已完成
					content: '根据您的风景和高度较高的监管力度还敢打人固然减肥的根据您的风景和高度较高的监管力度还敢打人固然减肥的'
				}, {
					name: '张三',
					status: 2,
					content: '根据您的风景和高度较高的监管力度还敢打人固然减肥的根据您的风景和高度较高的监管力度还敢打人固然减肥的'
				}]
			};
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
