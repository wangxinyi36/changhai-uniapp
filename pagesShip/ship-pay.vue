<template>
	<view>
		<view class="u1">
			<view class="u1-middle">
				<view class="u1-middle-left">
					<view class="u1-top-title">{{ticketForm.startDate}}</view>
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
			<view class="u2-title" v-if="list.length > 0">
				<view class="u2-title-name">选择乘客</view>
				<view class="u2-title-value">(最多选择5名乘客)</view>
			</view>
			<view class="u2-list">
				<view class="u2-item" v-for="item,index in list" :key="item.id"
					:class="[{'u2-item-border':index != list.length - 1}]">
					<view class="u2-item-left" @click="select(item,index)">
						<image :src="item.isActive ? selectActiveIcon : selectIcon" mode="aspectFill"
							class="u2-item-left-img"></image>
						<view class="u2-item-left-name">{{item.passengerName}}</view>
						<view class="u2-item-left-card">{{item.passengerIdCard}}</view>
					</view>
					<view class="u2-item-right">
						<image src="/static/ship-del.svg" mode="aspectFill" class="u2-item-right-del"
							@click="del(item)">
						</image>
						<image src="/static/ship-icon7.png" mode="aspectFill" class="u2-item-right-img"
							@click="edit(item)">
						</image>
					</view>
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
				<view class="bottom-left">¥{{detail.uutprice*count/100 || 0}}</view>
				<view class="bottom-right" @click="pay">去支付</view>
			</view>
		</view>
	</view>
</template>

<script>
	import {
		OpenPage,
		getStorage,
		showToast
	} from '@/common/fun.js'
	export default {
		data() {
			return {
				title: '',
				selectIcon: '/static/ship-icon8.png',
				selectActiveIcon: '/static/ship-icon8-active.png',
				list: [],
				ticketForm: {},
				detail: {},
				wechat_userInfo: {},
				count: 0
			};
		},
		onLoad(options) {
			this.wechat_userInfo = getStorage('wechat_userInfo');
			this.getList();

			const _this = this;
			const eventChannel = this.getOpenerEventChannel();
			eventChannel.on('sendParams', data => {
				_this.ticketForm = data.ticketForm;
				_this.detail = data.item;
				uni.setNavigationBarTitle({
					title: `${data.item.pointoriginName}-${data.item.todestinationName}`
				})
			})
		},
		methods: {
			async getList() {
				try {
					const {
						wechat_userInfo
					} = this.$data;
					const result = await this.$http(`${this.$API.getPassengerList}?userId=${wechat_userInfo.userId}`);
					this.list = result.data.map(item => {
						item.isActive = false;
						return item;
					})
				} catch (e) {
					console.log(e)
					//TODO handle the exception
				}
			},
			select(item, index) {
				if (!item.passengerIdCard) {
					showToast('身份证号码不存在，请填写身份证号码或选择其他住客信息')
					return;
				}
				this.$set(item, 'isActive', !item.isActive)
				let count = 0;
				this.list.forEach(item => {
					if (item.isActive) {
						count++
					}
				})
				this.count = count;
			},
			add() {
				let _this = this;
				OpenPage('/pagesShip/passenger').then(res => {
					if (res.isReload) {
						_this.getList()
					}
				})
			},
			edit(item) {
				const _this = this;
				OpenPage('/pagesShip/passenger', item).then(res => {
					if (res.isReload) {
						_this.getList()
					}
				})
			},
			async del(item) {
				try {
					const _this = this;
					const result = await this.$http(`${this.$API.getPassengerDelete}?id=${item.id}`);
					showToast('删除成功~');
					setTimeout(() => {
						_this.getList()
					}, 1500)
				} catch (e) {
					//TODO handle the exception
				}
			},
			async pay() {
				let {
					count
				} = this.$data;
				if (count <= 0) {
					showToast('请选择乘客~');
					return;
				}
				if (count > 5) {
					showToast('最多选择5名乘客~');
					return;
				}
				try {
					let passengerIdList = []
					this.list.forEach(item => {
						if (item.isActive) {
							passengerIdList.push(item.id)
						}
					})
					let year = new Date().getFullYear();
					let payForm = {
						startDay: this.ticketForm.startDate,
						endDay: this.ticketForm.startDate,
						uuId: this.detail.uuid,
						payType: 1,
						passengerIdList,
						userId: this.wechat_userInfo.userId
					}
					const result = await this.$http(this.$API.posProductTicketOrder, payForm, 'POST');
					if (result.errno != 0) {
						showToast(result.errmsg)
						return;
					}
					uni.requestPayment({
						provider: "wxpay",
						...result.data,
						success(res) {
							showToast('支付成功~')
							setTimeout(() => {
								uni.navigateBack()
							}, 1500)
						},
						fail(e) {
							console.log(e)
						}
					})
				} catch (e) {
					console.log("错误：", e)
					//TODO handle the exception
				}
			},
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
				&-del {
					width: 34rpx;
					height: 27rpx;
					margin-right: 30rpx;
				}

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
