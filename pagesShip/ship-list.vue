<template>
	<view>
		<view class="u1">
			<view class="u1-top">
				<view class="u1-top-left" @click="startPop(1)">
					<view class="u1-top-left-title">出发地</view>
					<view class="u1-top-left-name">{{pointOriginName || '请选择'}}</view>
				</view>
				<image src="/static/ship-icon.png" mode="aspectFill" class="u1-top-middle-img" @click="exchange">
				</image>
				<view class="u1-top-right" @click="startPop(2)">
					<view class="u1-top-left-title">目的地</view>
					<view class="u1-top-left-name">{{toDestinationName || '请选择'}}</view>
				</view>
			</view>
			<uni-popup ref="popup" type="bottom">
				<view class="u67">
					<view class="u67-cancel" @click="cancel">取消</view>
					<view class="u67-confirm" @click="confirm">确定</view>
				</view>
				<picker-view indicator-style="height: 50px;" :value="address" @change="bindChange" class="u168">
					<picker-view-column>
						<view class="u168-item" v-for="(item,index) in regions" :key="item.id">{{item.name}}</view>
					</picker-view-column>
				</picker-view>
			</uni-popup>

			<view class="u1-line"></view>
			<view class="u1-bottom">
				<view class="u1-bottom-item" v-for="item,index in date" :key="index"
					:class="[{'u1-bottom-item-active': active == index},{'u1-bottom-item-border': index > 0}]"
					@click="change(index,item)">
					<view class="u1-bottom-item-date">{{item}}</view>
				</view>
			</view>
		</view>
		<view class="u2">
			<view class="u2-item" v-for="item,index in list" :key="index" @click="payTo(item)">
				<view class="u2-item-box">
					<view class="u2-item-box-left">
						<view class="u2-item-box-left-time">{{item.departuretime}}</view>
						<view class="u2-item-box-left-pos">{{item.pointoriginName}}</view>
					</view>
					<view class="u2-item-box-middle">
						<view class="u2-item-box-middle-text">{{item.duration}}分</view>
						<image src="../static/ship-icon2.png" mode="aspectFill" class="u2-item-box-middle-img"></image>
						<view class="u2-item-box-middle-text">{{item.shiptype}}</view>
					</view>
					<view class="u2-item-box-left">
						<view class="u2-item-box-left-time">{{item.arrivaltime}}</view>
						<view class="u2-item-box-left-pos">{{item.todestinationName}}</view>
					</view>
					<view class="u2-item-box-pay">¥{{item.uutprice/100}}</view>
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
				date: [],
				active: 0,
				regions: [],
				address: [0],
				popupIndex: 0, //1出发 2目的地
				list: [],
				total: 0,
				pointOriginName: '',
				toDestinationName: '',
				ticketForm: {
					current: 0,
					size: 10,
					pointOriginCode: '',
					startDate: '',
					toDestinationCode: ''
				}
			};
		},
		onLoad() {
			this.getTimeList()
			this.getRegions();
			this.getList();
		},
		methods: {
			change(index, value) {
				this.active = index;
				this.ticketForm.startDate = value;
				this.total = 0;
				this.list = [];
				this.ticketForm.current = 0;
				this.getList();
			},
			exchange() {
				if (this.pointOriginName && this.toDestinationName) {
					let middle = this.pointOriginName;
					this.pointOriginName = this.toDestinationName;
					this.toDestinationName = middle;
				}
			},
			bindChange(e) {
				this.address = e.detail.value;
			},
			cancel() {
				this.$refs.popup.close()
			},
			confirm() {
				if (this.address.length > 0) {
					let index = this.address[0]
					if (this.popupIndex == 1) {
						this.ticketForm.pointOriginCode = this.regions[index].code;
						this.pointOriginName = this.regions[index].name;
					}
					if (this.popupIndex == 2) {
						this.ticketForm.toDestinationCode = this.regions[index].code;
						this.toDestinationName = this.regions[index].name;
					}
				}
				this.cancel();
				this.total = 0;
				this.list = [];
				this.ticketForm.current = 0;
				this.getList();
			},
			startPop(index) {
				this.popupIndex = index;
				this.$refs.popup.open('bottom')
			},
			payTo(item) {
				OpenPage(`/pagesShip/ship-pay`, {
					item,
					ticketForm: this.ticketForm
				})
			},
			async getList() {
				try {
					let {
						ticketForm,
						total,
						list
					} = this.$data;
					if (total > 0 && total == list.length) {
						return;
					}
					const res = await this.$http(this.$API.getSteamerTicketList, ticketForm, 'POST');
					this.total = res.data.total;
					this.list = list.concat(res.data.list);
					uni.stopPullDownRefresh()
				} catch (e) {
					//TODO handle the exception
				}
			},
			async getRegions() {
				try {
					const result = await this.$http(this.$API.getRegions);
					this.regions = result.data.items;
				} catch (e) {
					//TODO handle the exception
				}
			},
			getTimeList() {
				let days = []
				for (let i = 0; i < 5; i++) {
					let now = new Date() //获取当前日期
					let milliseconds = now.getTime() + 1000 * 60 * 60 * 24 * i; //将当前日期转换为毫秒，加上需要增加的天数的毫秒，i表示天数

					let newDate = new Date(milliseconds); //再将毫秒转化为日期
					let month = newDate.getMonth() + 1;
					let day = newDate.getDate();
					days.push(`${month}-${day}`)
				}
				this.ticketForm.startDate = days[0]
				this.date = days;
			}
		},
		onReachBottom() {
			this.ticketForm.current += 10;
			this.getList()
		},
		onPullDownRefresh() {
			this.ticketForm = {
				current: 0,
				size: 10,
				pointOriginCode: '',
				startDate: this.date[0],
				toDestinationCode: ''
			}
			this.active = 0;
			this.total = 0;
			this.list = [];
			this.pointOriginName = '';
			this.toDestinationName = '';
			this.getList();
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

		.u67 {
			@extend .default-flex;
			justify-content: space-between;
			background-color: #fff;
			border-radius: 20rpx 20rpx 0 0;
			padding: 20rpx;
			box-sizing: border-box;

			&-confirm {
				color: rgba(49, 208, 230, 1);
			}
		}

		.u168 {
			width: 100%;
			height: 600rpx;
			background-color: #fff;

			&-item {
				line-height: 50px;
				text-align: center;
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
					height: 40rpx;
					background: #E3E3E3;
					left: -38rpx;
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
