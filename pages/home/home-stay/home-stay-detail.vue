<template>
	<view>
		<image src="/static/home1.png" mode="aspectFill" class="bg"></image>
		<view class="u1">
			<view class="u1-title">{{title}}</view>
			<view class="u1-tags">
				<view class="u1-tag" v-for="item,index in tags" :key="index">{{item}}</view>
				<navigator url="/pages/home/home-stay/home-stay-info" hover-class="none">
					<view class="u1-detail">
						<text>详情</text>
						<image src="/static/icon1.svg" mode="aspectFill" class="u1-detail-icon"></image>
					</view>
				</navigator>

			</view>
			<view class="u8">这里是地图</view>
			<view class="u17">
				<view class="u17-title">入住日期/离开日期</view>
				<uni-datetime-picker v-model="single">
					<view class="u81">
						<view class="u17-title">选择日期</view>
						<image src="/static/icon2.svg" mode="aspectFill" class="u81-img"></image>
					</view>
				</uni-datetime-picker>
			</view>
			<view class="u20-list">
				<view class="u20" v-for="item,index in list" :key="index">
					<image :src="item.url" mode="aspectFill" class="u20-img"></image>
					<view class="u20-box">
						<view class="u20-box-name">{{item.name}}</view>
						<view class="u20-box-dec">{{item.dec}}</view>
						<view class="u20-box-tip">{{item.tip}}</view>
						<text class="u20-box-btn" @click="openPage('/pages/home/home-stay/pay')">立即确定</text>
					</view>
					<view class="u20-pay">
						<view class="u20-pay-num"><text style="font-size: 24rpx;">￥</text>{{item.pay}}</view>
						<view class="u27">定</view>
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
				tags: ['2019年装修', '免费停车场', '24小时客服服务'],
				single: '',
				title:'',
				list: [{
					name: '精品单人间',
					dec: '1张单人床 · 32㎡',
					tip: '15分钟内可免费取消',
					url: '/static/home1.png',
					pay: 196.00
				}, {
					name: '精品单人间',
					dec: '1张单人床 · 32㎡',
					tip: '15分钟内可免费取消',
					url: '/static/home1.png',
					pay: 196.00
				}, {
					name: '精品单人间',
					dec: '1张单人床 · 32㎡',
					tip: '15分钟内可免费取消',
					url: '/static/home1.png',
					pay: 196.00
				}]
			};
		},
		onLoad(options) {
			this.title = options.title;
			uni.setNavigationBarTitle({
				title: options.title
			})
		},
		methods: {
			openPage(url) {
				OpenPage(url)
			}
		}
	}
</script>

<style lang="scss" scoped>
	.bg {
		width: 100%;
		height: 426rpx;
	}

	.u1 {
		padding: 5rpx 20rpx;

		&-title {
			font: normal 700 32rpx/normal '微软雅黑 Bold', '微软雅黑 Regular', '微软雅黑', sans-serif;
			color: #000;
		}

		&-tags {
			@extend .default-flex;
			margin-top: 10rpx;
			position: relative;
		}

		&-tag {
			font: normal 400 24rpx/normal '微软雅黑', sans-serif;
			color: #333;
			margin-right: 10rpx;
		}

		&-detail {
			position: absolute;
			bottom: 0;
			right: 0;
			@extend .u1-tag;
			color: #31D0E6;
			font-size: 20rpx;
			@extend .default-flex;

			&-icon {
				width: 12rpx;
				height: 21rpx;
				margin-left: 6rpx;
			}
		}

		.u8 {
			height: 130rpx;
			border-radius: 12rpx;
			background-color: aquamarine;
			margin-top: 20rpx;
		}

		.u17 {
			height: 59rpx;
			background-color: rgba(245, 154, 35, 1);
			border-radius: 12rpx;
			@extend .default-flex;
			justify-content: space-between;
			padding: 0 10rpx;
			margin-top: 20rpx;

			&-title {
				font: normal 400 24rpx/normal '微软雅黑', sans-serif;
				color: #fff;
			}

			.u81 {
				@extend .default-flex;

				&-img {
					@extend .u1-detail-icon;
				}
			}
		}

		.u20-list {
			padding-bottom: 20rpx;

			.u20 {
				display: flex;
				width: 100%;
				padding: 20rpx;
				background-color: rgba(237, 240, 247, 0);
				box-sizing: border-box;
				border: 2rpx solid rgba(215, 215, 215, 1);
				border-radius: 20rpx;
				position: relative;
				margin-top: 20rpx;

				&-img {
					width: 172rpx;
					height: 112rpx;
					border-radius: 12rpx;
					margin-right: 20rpx;
				}

				&-box {
					&-name {
						font: normal 400 24rpx/normal '微软雅黑', sans-serif;
						color: #000;
					}

					&-dec {
						font: normal 400 18rpx/normal '微软雅黑', sans-serif;
						color: #AAAAAA;
					}

					&-tip {
						font: normal 400 18rpx/normal '微软雅黑', sans-serif;
						color: #F59A23;
					}

					&-btn {
						font: normal 400 18rpx/normal 'Arial Normal', 'Arial', sans-serif;
						color: #555555;
						border: 1rpx solid rgba(121, 121, 121, 1);
					}
				}

				&-pay {
					position: absolute;
					right: 20rpx;
					bottom: 20rpx;
					@extend .default-flex;

					&-num {
						color: #D9001B;
						font: normal 400 32rpx/normal '微软雅黑', sans-serif;
					}

					.u27 {
						width: 50rpx;
						height: 50rpx;
						font: normal 400 20rpx/normal 'Arial Normal', 'Arial', sans-serif;
						color: #FFFFFF;
						border-radius: 8rpx;
						line-height: 50rpx;
						text-align: center;
						background-color: rgba(217, 0, 27, 1);
						margin-left: 10rpx;
					}
				}


			}
		}



	}
</style>
