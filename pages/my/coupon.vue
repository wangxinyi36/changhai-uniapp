<template>
	<view class="content">
		<view class="u268-list">
			<view class="u268-list-item" v-for="item,index in list" :key="index">
				<view class="u268-list-item-box">
					<view class="u268-list-item-name">{{item.name}}</view>
					<view class="u268-list-item-tip">{{item.tip}}</view>
					<view class="u268-list-item-pay">￥{{item.pay}}</view>
				</view>
				<view class="u268-list-item-btn" :class="{'btnBg':item.checked}" @click="draw(item,index)">
					{{item.checked ? '已领取':'领取'}}
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				current: -1,
				list: [{
					name: '满150减50',
					tip: '周一至周日全天可用',
					pay: 50,
					checked:false,
				}, {
					name: '满150减50',
					tip: '周一至周日全天可用',
					pay: 50,
					checked:false,
				}, {
					name: '满150减50',
					tip: '周一至周日全天可用',
					pay: 50,
					checked:false,
				}],
			};
		},
		methods: {
			draw(item) {
				this.$set(item, 'checked', true)
			}
		}
	}
</script>

<style lang="scss" scoped>
	.content {
		padding: 0 20rpx;

		.u268 {
			background-color: #fff;
			height: 523rpx;
			padding: 0 30rpx 30rpx 30rpx;
			overflow-y: scroll;

			&-title {
				font: normal 700 32rpx/normal 'Arial Negreta', 'Arial Normal', 'Arial', sans-serif;
				color: #333;
				position: sticky;
				top: 0;
				background-color: #fff;
				padding: 20rpx 0;
			}

			&-list {
				margin-top: 30rpx;

				&-item {
					background-color: rgba(255, 231, 225, 1);
					border: 2rpx solid rgba(245, 154, 35, 1);
					border-radius: 30rpx;
					padding: 20rpx 40rpx;
					@extend .default-flex;
					justify-content: space-between;
					margin-bottom: 20rpx;

					&-name {
						font: normal 400 32rpx/normal 'Arial Normal', 'Arial', sans-serif;
						color: #333;
					}

					&-tip {
						@extend .u268-list-item-name;
						color: #AAAAAA;
						font-size: 24rpx;
					}

					&-pay {
						color: #D9001B;
						font: normal 700 32rpx/normal 'Arial Negreta', 'Arial Normal', 'Arial', sans-serif;
					}

					&-btn {
						width: 113rpx;
						height: 48rpx;
						background: linear-gradient(180deg, rgba(255, 114, 32, 1) 0%, rgba(245, 154, 35, 1) 100%);
						border-radius: 22rpx;
						font: normal 400 24rpx/48rpx 'Arial Normal', 'Arial', sans-serif;
						color: #fff;
						text-align: center;
					}
				}

				.btnBg {
					background: #edf0f7;
				}
			}
		}
	}
</style>
