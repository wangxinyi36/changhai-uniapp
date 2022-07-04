<template>
	<view>
		<view class="u1">
			<view class="u1-top">
				<view class="u1-top-left">
					<view class="u1-top-left-title">出发地</view>
					<view class="u1-top-left-name">鼓浪屿</view>
				</view>
				<image src="/static/ship-icon.png" mode="aspectFill" class="u1-top-middle-img"></image>
				<view class="u1-top-right">
					<view class="u1-top-left-title">出发地</view>
					<view class="u1-top-left-name">鼓浪屿</view>
				</view>
			</view>
			<view class="u1-line"></view>
			<view class="u1-bottom">
				<view class="u1-bottom-item" v-for="item,index in date" :key="index"
					:class="[{'u1-bottom-item-active': active == index},{'u1-bottom-item-border': index > 0}]"
					@click="change(index)">
					<view class="u1-bottom-item-date">07-02</view>
					<view class="u1-bottom-item-money">¥30</view>
				</view>
			</view>
		</view>
		<view class="u2">
			<view class="u2-item" v-for="item,index in list" :key="index" @click="payTo(item)">
				<view class="u2-item-box">
					<view class="u2-item-box-left">
						<view class="u2-item-box-left-time">{{item.start}}</view>
						<view class="u2-item-box-left-pos">{{item.startPos}}</view>
					</view>
					<view class="u2-item-box-middle">
						<view class="u2-item-box-middle-text">{{item.time}}</view>
						<image src="../static/ship-icon2.png" mode="aspectFill" class="u2-item-box-middle-img"></image>
						<view class="u2-item-box-middle-text">{{item.type}}</view>
					</view>
					<view class="u2-item-box-left">
						<view class="u2-item-box-left-time">{{item.end}}</view>
						<view class="u2-item-box-left-pos">{{item.endPos}}</view>
					</view>
					<view class="u2-item-box-pay">¥{{item.price}}</view>
				</view>
				<view class="u2-item-tags">
					<view class="u2-item-tag" v-for="tag,i in item.tags" :key="i">{{tag}}</view>
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
				date: [1, 2, 3, 4, 5],
				active: 0,
				list: [{
					start: '15:30',
					end: '15:50',
					price: 30,
					time: '20分',
					type: '豪华船',
					startPos: '厦门邮轮中心',
					endPos: '三丘田码头',
					tags: ['往返票', '官方']
				}, {
					start: '15:30',
					end: '15:50',
					price: 30,
					time: '20分',
					type: '豪华船',
					startPos: '厦门邮轮中心',
					endPos: '三丘田码头',
					tags: ['往返票', '官方']
				}]
			};
		},
		methods: {
			change(index) {
				this.active = index;
			},
			payTo(item) {
				OpenPage(`/pagesShip/ship-pay?id=1`)
			}
		}
	}
</script>

<style>
	page {
		background-color: #F0F1F5;
	}
</style>
<style lang="scss" scoped>
	.u1 {
		background-color: #fff;
		padding: 33rpx 22rpx;

		&-top {
			@extend .default-flex;
			padding: 0 42rpx;
			justify-content: space-between;

			&-left {
				&-title {
					font: normal 400 25rpx/36rpx PingFangSC-Regular, PingFang SC;
					color: #A0A0A0;
				}

				&-name {
					font: normal 500 34rpx/47rpx PingFangSC-Regular, PingFang SC;
					color: #2E2E2E;
					margin-top: 9rpx;
				}
			}

			&-middle-img {
				width: 50rpx;
				height: 50rpx;
			}
		}

		&-line {
			height: 2rpx;
			background-color: #F3F3F3;
			width: 100%;
			margin-top: 43rpx;
		}

		&-bottom {
			margin-top: 31rpx;
			padding: 0 36rpx;
			@extend .default-flex;
			justify-content: space-between;

			&-item {
				@extend .default-flex;
				align-items: center;
				flex-direction: column;
				justify-content: center;

				&-date {
					font: normal 400 25rpx/36rpx PingFangSC-Regular, PingFang SC;
					color: #2E2E2E;
					text-align: center;
				}

				&-money {
					font: normal 400 22rpx/31rpx PingFangSC-Regular, PingFang SC;
					color: #2E2E2E;
					text-align: center;
				}
			}

			&-item-active {
				width: 92rpx;
				height: 92rpx;
				background: #3984ED;
				border-radius: 7rpx;

				.u1-bottom-item-date,
				.u1-bottom-item-money {
					color: #fff;
				}
			}

			&-item-border {
				position: relative;

				&::after {
					content: " ";
					position: absolute;
					width: 2rpx;
					height: 65rpx;
					background: #E3E3E3;
					left: -38rpx;
					top: 0;
				}
			}

		}
	}

	.u2 {
		padding: 0 9rpx;
		margin-top: 18rpx;

		&-item {
			padding: 29rpx;
			background-color: #fff;
			margin-bottom: 9rpx;
			border-radius: 5rpx;

			&-box {
				@extend .default-flex;
				position: relative;

				&-left {
					&-time {
						font: normal 400 45rpx/65rpx PingFangSC-Regular, PingFang SC;
						color: #2E2E2E;
					}

					&-pos {
						margin-top: 11rpx;
						font: normal 400 29rpx/40rpx PingFangSC-Regular, PingFang SC;
						color: #2E2E2E;
					}
				}

				&-middle {
					@extend .default-flex;
					flex-direction: column;
					justify-content: center;
					text-align: center;
					font: normal 400 22rpx/31rpx PingFangSC-Regular, PingFang SC;
					color: #666666;
					margin: 0 33rpx;

					&-img {
						width: 123rpx;
						height: 11rpx;
						margin: 3rpx 0;
					}
				}

				&-pay {
					position: absolute;
					right: 0;
					top: 0;
					font: normal 500 45rpx/65rpx PingFangSC-Medium, PingFang SC;
					color: #F7740A;
				}

			}

			&-tags {
				@extend .default-flex;
				margin-top: 36rpx;
			}

			&-tag {
				width: 74rpx;
				height: 33rpx;
				background: #F3F8FE;
				font: normal 400 20rpx/33rpx PingFangSC-Regular, PingFang SC;
				color: #2A86C7;
				text-align: center;
				margin-right: 13rpx;
			}
		}
	}
</style>
