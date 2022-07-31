<template>
	<view>
		<view class="u93" @click="add">
			<image src="/static/icon4.svg" mode="scaleToFill" class="u93-add"></image>
			<view class="u93-text">{{addText}}</view>
		</view>
		<view class="u71-list">
			<!-- 酒店 -->
			<view class="u71" v-for="item,index in people" :key="index" v-if="from == 'homeStay'">
				<view class="u71-left" @click="select(item,index)">
					<image :src="item.isActive ? chooseActiveIcon : chooseIcon" mode="aspectFill" class="u71-left-img">
					</image>
					<view class="u71-left-box">
						<view class="u71-left-box-name">{{item.passengerName}}</view>
						<view class="u71-left-box-card">{{dealCard(item.passengerIdCard)}}</view>
					</view>
				</view>
				<image src="/static/icon5.svg" mode="aspectFill" class="u71-img" @click="edit(item)"></image>
			</view>
			<!-- 外卖 商城 -->
			<view class="u71" v-for="item,index in people" :key="item.id" v-else>
				<view class="u71-left" @click="active = index">
					<image :src="index == active ? chooseActiveIcon : chooseIcon" mode="aspectFill"
						class="u71-left-img"></image>
					<view class="u71-left-box">
						<view class="u71-left-box-name">{{item.name}}</view>
						<view class="u71-left-box-card">{{dealPhone(item.mobile)}}</view>
					</view>
				</view>
				<image src="/static/icon5.svg" mode="aspectFill" class="u71-img" @click="edit(item)"></image>
			</view>
		</view>

		<view class="bottom">
			<view class="bottom-btn" @click="finish">完成</view>
		</view>
	</view>
</template>

<script>
	import {
		getStorage,
		OpenPage,
		replaceStar,
		showToast
	} from '@/common/fun.js'
	export default {
		data() {
			return {
				people: [],
				active: -1,
				chooseIcon: '/static/icon-choose-no.svg',
				chooseActiveIcon: '/static/icon-choose-blue.svg',
				page: 1,
				total: 0,
				userId: '',
				from: '', // homeStay民宿    mallOrder商城商品 homeMeal外卖
				goodsId: '',
				addText: ''
			};
		},
		onLoad(options) {
			this.userId = getStorage('wechat_userInfo').userId;
			this.from = options.from;
			if (this.from == 'mallOrder' || this.from == 'homeMeal') {
				uni.setNavigationBarTitle({
					title: '收货地址'
				})
				this.addText = '新增收货地址'
				this.getAddress()
			}
			if (this.from == 'homeStay') {
				this.addText = '新增住客';
				this.getList()
			}
			this.goodsId = options.goodsId || '';
		},
		methods: {
			// 酒店入住信息列表
			async getList() {
				try {
					const {
						userId
					} = this.$data;
					const result = await this.$http(`${this.$API.getPassengerList}?userId=${userId}`);
					this.people = result.data.map(item => {
						item.isActive = false;
						return item;
					})
				} catch (e) {
					console.log(e)
					//TODO handle the exception
				}
			},
			// 商城,外卖,美食地址列表
			async getAddress() {
				try {
					const {
						page,
						userId,
						total,
						people
					} = this.$data;
					if (total > 0 && total == people.length) {
						return;
					}
					const result = await this.$http(
						`${this.$API.getAddressList}?limit=10&page=${page}&userId=${userId}`);
					this.$nextTick(() => {
						this.people = this.people.concat(result.data.items);
					})
					this.total = result.data.total;
				} catch (e) {
					console.log(e)
					//TODO handle the exception
				}
			},
			select(item, index) {
				this.$set(item, 'isActive', !item.isActive)
			},
			add() {
				const _this = this;
				OpenPage(`/pagesStay/home-stay/home-stay-address?from=${this.from}`).then((res) => {
					if (res.isReload) {
						_this.page = 1;
						_this.people = [];
						_this.total = 0;
						_this.getAddress()
					}
				})
			},
			finish() {
				let {
					people,
					active,
					from
				} = this.$data
				let list = [];
				if (from == 'homeStay') {
					people.forEach(item => {
						if (item.isActive) {
							list.push(item)
						}
					})
					if (list.length == 0) {
						showToast('请选择地址~');
						return;
					}
				} else {
					if (active === -1) {
						showToast('请选择地址~');
						return;
					}
				}

				let _this = this;
				uni.navigateBack({
					success() {
						const eventChannel = _this.getOpenerEventChannel();
						if (from == 'homeStay') {
							eventChannel.emit('getParams', {
								list
							})
						} else {
							eventChannel.emit('getParams', {
								address: people[active]
							})
						}

					}
				})
			},
			edit(item) {
				let _this = this;
				let {
					goodsId,
					from
				} = this.$data;
				OpenPage('/pagesStay/home-stay/home-stay-address', {
						goodsId,
						id: item.id,
						from,
						item,
					})
					.then(
						res => {
							if (res.isReload) {
								_this.page = 1;
								_this.people = [];
								_this.total = 0;
								from == 'homeStay' ? _this.getList() : _this.getAddress()
							}
						})
			},
			dealCard(val) {
				if (val) {
					return replaceStar(val);
				}
			},
			dealPhone(val) {
				if (val) {
					return val;
				}
			},

		},
		onReachBottom() {
			this.page++;
			this.getAddress()
		}
	}
</script>
<style>
	page {
		background-color: #edf0f7;
	}
</style>

<style lang="scss" scoped>
	.u93 {
		@extend .default-flex;
		height: 82rpx;
		background-color: #fff;
		justify-content: center;

		&-add {
			width: 33rpx;
			height: 33rpx;
		}

		&-text {
			font: normal 400 32rpx/normal 'Arial Normal', 'Arial', sans-serif;
			color: #000;
			margin-left: 20rpx;
		}
	}

	.u71-list {
		margin-top: 40rpx;

		.u71 {
			@extend .default-flex;
			background-color: #fff;
			padding: 20rpx 40rpx;
			margin-top: 20rpx;
			justify-content: space-between;

			&-img {
				width: 24rpx;
				height: 24rpx;
			}

			&-left {
				@extend .default-flex;

				&-img {
					width: 30rpx;
					height: 30rpx;
					margin-right: 20rpx;
				}

				&-box {
					&-name {
						font: normal 400 24rpx/normal '微软雅黑', sans-serif;
						color: #333;
					}

					&-card {
						font: normal 400 18rpx/normal 'Arial Normal', 'Arial', sans-serif;
						color: #333;
						margin-top: 10rpx;
					}
				}
			}
		}
	}

	.bottom {
		position: fixed;
		width: 100%;
		bottom: 0;
		height: 112rpx;
		background-color: rgba(245, 154, 35, 1);
		padding-bottom: constant(safe-area-inset-bottom);
		padding-bottom: env(safe-area-inset-bottom);

		&-btn {
			width: 100%;
			height: 100%;
			text-align: center;
			font: normal 400 32rpx/112rpx 'Arial Normal', 'Arial', sans-serif;
			color: #fff;
		}
	}
</style>
