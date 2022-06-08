<template>
	<view class="car-rental">
		<common-tree-select :leftList="leftList" @changeLeft="changeLeft">
			<template>
				<view class="car-list">
					<view class="car-item" v-for="item,index in carList" :key="index">
						<view class="u14">
							<image src="/static/home7.png" mode="aspectFill" class="u14-img"></image>
							<view class="u14-box">
								<view class="u9-text">{{item.name}}</view>
								<span class="u10-text" v-for="tag,i in item.tags" :key="i">{{tag}}</span>
								<view class="u12-text">{{`联系人：${item.connect}`}}</view>
								<view class="u12-text">电话：<text class="u23-text">{{item.tel}}</text> </view>
							</view>
						</view>
						<view class="u12-text">{{`地址：${item.address}`}}</view>
						<view class="u13">
							<text class="u13-text">{{item.pay}}</text>
							<image src="/static/home9.svg" class="u13-img" mode="aspectFill"></image>
						</view>
					</view>
				</view>
			</template>
		</common-tree-select>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				activeIndex: 0,
				leftList: [{
					name: '大长山岛镇',
					id: 1
				}, {
					name: '獐子岛镇',
					id: 2
				}, {
					name: '广鹿岛镇',
					id: 3
				}, {
					name: '小长山岛镇',
					id: 4
				}, {
					name: '海洋岛镇',
					id: 5
				}],
				carList: [{
					name: '辽A 68866',
					tags: ['自动挡', '三厢车', '4座'],
					connect: '孙李',
					tel: '8888888888',
					address: '大长山岛镇木路客家话354号',
					pay: '约￥100',
				}, {
					name: '辽A 68866',
					tags: ['自动挡', '三厢车', '4座'],
					connect: '孙李',
					tel: '8888888888',
					address: '大长山岛镇木路客家话354号',
					pay: '约￥100',
				}, {
					name: '辽A 68866',
					tags: ['自动挡', '三厢车', '4座'],
					connect: '孙李',
					tel: '8888888888',
					address: '大长山岛镇木路客家话354号',
					pay: '约￥100',
				}, {
					name: '辽A 68866',
					tags: ['自动挡', '三厢车', '4座'],
					connect: '孙李',
					tel: '8888888888',
					address: '大长山岛镇木路客家话354号',
					pay: '约￥100',
				}, {
					name: '辽A 68866',
					tags: ['自动挡', '三厢车', '4座'],
					connect: '孙李',
					tel: '8888888888',
					address: '大长山岛镇木路客家话354号',
					pay: '约￥100',
				}, {
					name: '辽A 68866',
					tags: ['自动挡', '三厢车', '4座'],
					connect: '孙李',
					tel: '8888888888',
					address: '大长山岛镇木路客家话354号',
					pay: '约￥100',
				}]
			};
		},
		onLoad(options) {
			uni.setNavigationBarTitle({
				title: options.title
			});
		},
		methods: {
			changeLeft(val) {
				console.log(val)
			}
		}
	};
</script>

<style lang="scss" scoped>
	.car-rental {
		background-color: rgba(237, 240, 247, 1);

		.car-list {
			margin: 0 20rpx;

			.car-item {
				background-color: #fff;
				border-radius: 12rpx;
				margin-bottom: 20rpx;
				padding: 20rpx;

				.u14 {
					display: flex;

					.u14-img {
						width: 200rpx;
						height: 200rpx;
					}

					.u14-box {
						margin-left: 20rpx;

						.u9-text {
							font-weight: 400;
							color: #333;
						}

						.u10-text {
							font-weight: 400;
							font-size: 24rpx;
							color: #B2B2B2;
							margin-right: 10rpx;
						}

						.u12-text {
							font-weight: 400;
							font-size: 28rpx;

							.u23-text {
								color: #FF8D3D;
							}
						}
					}

				}

				.u13 {
					@extend .default-flex;
					justify-content: flex-end;
					margin-top: 10rpx;

					.u13-text {
						font-weight: 400;
						font-size: 28rpx;
						color: #FF0000;
					}

					.u13-img {
						width: 54rpx;
						height: 54rpx;
						margin-left: 32rpx;
					}
				}

			}
		}
	}
</style>
