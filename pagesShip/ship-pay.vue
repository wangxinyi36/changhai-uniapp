<template>
	<view>
		<view class="u1">
			<view class="u1-middle">
				<view class="u1-middle-left">
					<view class="u1-top-title">{{dealTime(ticketForm.startDate)}}</view>
					<view class="u1-top-title">{{detail.departuretime}}-{{detail.arrivaltime}}</view>
				</view>
			</view>
			<view class="u1-bottom">
				<view class="u1-bottom-left">
					<image src="/static/ship-icon6.png" mode="aspectFill" class="u1-bottom-left-img"></image>
					<view class="u1-bottom-left-box">
						<view class="u1-bottom-left-box-text">{{detail.pointoriginName}}</view>
						<view class="u1-bottom-left-box-text">{{detail.todestinationName}}</view>
					</view>
				</view>
				<view class="u1-bottom-right">{{detail.shiptype}}</view>
			</view>
		</view>
		<view class="u2">
			<view class="u2-title">
				<view class="u2-title-name">选择乘客</view>
				<view class="u2-title-value">一单最多添加5人</view>
			</view>
			<view class="u2-list">
				<view class="u2-item" v-for="item,index in list" :key="index"
					:class="[{'u2-item-border':index != list.length - 1}]">
					<view class="u2-item-left" @click="select(item,index)">
						<image :src="item.isActive ? selectActiveIcon : selectIcon" mode="aspectFill"
							class="u2-item-left-img"></image>
						<view class="u2-item-left-name">{{item.name}}</view>
						<view class="u2-item-left-card">{{item.idCard}}</view>
					</view>
					<image src="/static/ship-icon7.png" mode="aspectFill" class="u2-item-right-img" @click="edit(item)">
					</image>
				</view>
				<view class="u2-btn" @click="add">
					<image src="/static/ship-icon9.png" mode="aspectFill" class="u2-btn-img"></image>
					<view class="u2-btn-name">添加乘客</view>
				</view>
			</view>
		</view>

		<view class="bottom">
			<view class="bottom-tip">请添加所有乘船乘客信息，未录入信息的乘客不能登船</view>
			<view class="bottom-box">
				<view class="bottom-left">¥{{detail.uutprice/100}}</view>
				<view class="bottom-right">去支付</view>
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
				title: '',
				selectIcon: '/static/ship-icon8.png',
				selectActiveIcon: '/static/ship-icon8-active.png',
				list: [{
					name: '张三岁',
					idCard: '2929********2829'
				}, {
					name: '张三岁',
					idCard: '2929********2829'
				}],
				ticketForm: {},
				detail: {}
			};
		},
		onLoad(options) {
			const _this = this;
			const eventChannel = this.getOpenerEventChannel();
			eventChannel.on('sendParams', data => {
				_this.ticketForm = data.ticketForm;
				_this.detail = data.item;
				uni.setNavigationBarTitle({
					title: `${data.item.pointoriginName}-${data.item.todestinationName}`
				})
				console.log(data)
			})
		},
		methods: {
			dealTime(val) {
				let time = val.split('-')
				return `${time[0]}月${time[1]}日`;
			},
			select(item, index) {
				this.$set(item, 'isActive', !item.isActive)
			},
			add() {
				let _this = this;
				OpenPage('/pagesShip/passenger').then(res => {
					_this.list.push(res.personal)
				})
			},
			edit(item) {
				OpenPage('/pagesShip/passenger')
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
		padding: 0 25rpx 38rpx 25rpx;
		background-color: #fff;

		&-middle {
			@extend .default-flex;
			justify-content: space-between;

			&-left {
				@extend .default-flex;

				.u1-top-title {
					margin-right: 13rpx;
				}
			}

			&-right {
				@extend .default-flex;

				&-img {
					width: 29rpx;
					height: 29rpx;
					margin-right: 9rpx;
				}
			}
		}

		&-bottom {
			margin-top: 20rpx;
			display: flex;
			justify-content: space-between;
			align-items: flex-end;

			&-left {
				@extend .default-flex;

				&-img {
					width: 9rpx;
					height: 91rpx;
					margin-right: 18rpx;
				}

				&-box {
					&-text {
						font: normal 500 33rpx/45rpx PingFangSC-Medium, PingFang SC;
						color: #343434;
						margin-bottom: 14rpx;
					}
				}
			}

			&-right {
				font: normal 400 27rpx/38rpx PingFangSC-Regular, PingFang SC;
				color: #A0A0A0;
				text-align: right;
			}
		}
	}

	.u2 {
		margin-top: 29rpx;
		background: #FFFFFF;
		padding: 24rpx 20rpx 31rpx 20rpx;

		&-title {
			@extend .default-flex;

			&-name {
				font: normal 500 36rpx/51rpx PingFangSC-Medium, PingFang SC;
				color: #343434;
				margin-right: 18rpx;
			}

			&-value {
				font: normal 400 25rpx/36rpx PingFangSC-Regular, PingFang SC;
				color: #A0A0A0;
			}
		}

		&-list {}

		&-item {
			@extend .default-flex;
			justify-content: space-between;
			padding: 36rpx 0;

			&-right {
				&-img {
					width: 29rpx;
					height: 27rpx;
				}
			}

			&-left {
				@extend .default-flex;

				&-img {
					width: 42rpx;
					height: 42rpx;
					margin-right: 29rpx;
				}

				&-name {
					font: normal 500 33rpx/45rpx PingFangSC-Medium, PingFang SC;
					color: #343434;
					margin-right: 47rpx;
				}

				&-card {
					font: normal 400 25rpx/36rpx PingFangSC-Regular, PingFang SC;
					color: #A0A0A0;
				}
			}
		}

		&-item-border {
			border-bottom: 2rpx solid #E9E9E9;
		}

		&-btn {
			width: 100%;
			height: 72rpx;
			background: #F7F8FA;
			@extend .default-flex;
			justify-content: center;

			&-img {
				width: 25rpx;
				height: 27rpx;
				margin-right: 14rpx;
			}

			&-name {
				font: normal 500 29rpx/72rpx PingFangSC-Medium, PingFang SC;
				color: #0086F8;
			}
		}
	}

	.bottom {
		position: fixed;
		bottom: 0;
		width: 100%;

		&-tip {
			width: 100%;
			height: 74rpx;
			background: #FFF8F2;
			font: normal 400 25rpx/74rpx PingFangSC-Regular, PingFang SC;
			color: #6E6A61;
			padding-left: 31rpx;
		}

		&-box {
			height: 145rpx;
			@extend .default-flex;
			justify-content: space-between;
			background-color: #fff;
		}

		&-left {
			font: normal 500 45rpx/65rpx PingFangSC-Medium, PingFang SC;
			color: #F7740A;
			margin-left: 31rpx;
		}

		&-right {
			width: 230rpx;
			height: 85rpx;
			background: linear-gradient(138deg, #FF9D00 0%, #FE7002 100%);
			border-radius: 5rpx;
			text-align: center;
			font: normal 500 34rpx/85rpx PingFangSC-Medium, PingFang SC;
			color: #FFFFFF;
			margin-right: 31rpx;
		}
	}
</style>
