<template>
	<view>
		<image :src="detail.coverImg" mode="aspectFill" class="bg"></image>
		<view class="u1">
			<view class="u1-title">{{detail.uutitle}}</view>
			<view class="u1-tags">
				<text class="u1-tag" v-for="tag,i in detail.keyWords">{{tag}}</text>
				<view class="u1-detail" @click="pageToDetail">
					<text>详情</text>
					<image src="/static/icon1.svg" mode="aspectFill" class="u1-detail-icon"></image>
				</view>
			</view>
			<view class="u8">
				<map class="u8" :longitude="detail.lng" :latitude="detail.lat" :markers="marker" scale="10"
					@markertap="clickMark"></map>
			</view>
			<view class="u17">
				<view class="u17-title">入住日期</view>
				<uni-datetime-picker v-model="time" type="date" :start="start" @change="changeDate">
					<view class="u81">
						<view class="u17-title">{{time || '选择日期'}}</view>
						<image src="/static/icon2.svg" mode="aspectFill" class="u81-img"></image>
					</view>
				</uni-datetime-picker>
			</view>
			<view class="u20-list">
				<view class="u20" v-for="item,index in list" :key="index">
					<image :src="item.uuticketPic" mode="aspectFill" class="u20-img"></image>
					<view class="u20-box">
						<view class="u20-box-name">{{item.uutitle}}</view>
						<view class="u20-box-dec">{{item.uuticketDesc}}</view>
						<view class="u20-box-tip">{{item.freeCancelMin}}分钟内可免费取消</view>
						<text class="u20-box-btn" @click="openPage('/pagesStay/home-stay/pay',item)">立即确定</text>
					</view>
					<view class="u20-pay">
						<view class="u20-pay-num"><text style="font-size: 24rpx;">￥</text>{{item.uutprice}}</view>
						<view class="u27">定</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import {
		OpenPage,
		getStorage,
		setStorage,
		showToast
	} from '@/common/fun.js'
	export default {
		data() {
			return {
				start: `${new Date().getFullYear()}-${new Date().getMonth()+1}-${new Date().getDate()}`,
				time: '', //入住时间
				title: '',
				list: [],
				total: 0,
				detail: {},
				id: '',
				marker: [],
				wechat_userInfo: {},
			};
		},
		onLoad(options) {
			this.wechat_userInfo = getStorage('wechat_userInfo')
			this.id = options.id;
			this.getDetailList();
			this.getDetailInfo();
		},
		onShow() {
			this.wechat_userInfo = getStorage('wechat_userInfo')
		},
		methods: {
			async getDetailInfo() {
				try {
					const {
						id
					} = this.$data;
					const result = await this.$http(this.$API.postProductShopInfo, {
						uulid: id,
					}, 'POST');
					this.detail = result.data;
					this.marker = [{
						id,
						latitude: parseFloat(result.data.lat),
						longitude: parseFloat(result.data.lng),
						title: this.detail.uutitle,
						iconPath: '/static/u115.svg',
						width: 20,
						height: 28
					}]
					uni.setNavigationBarTitle({
						title: this.detail.uutitle
					})
				} catch (e) {
					//TODO handle the exception
				}
			},
			async getDetailList() {
				try {
					const {
						id,
						time
					} = this.$data;
					const res = await this.$http(this.$API.postProductShopDetail, {
						uulid: id,
						startDate: time,
						size: 100
					}, 'POST');
					this.list = res.data.list;
					this.total = res.data.total;
				} catch (e) {
					//TODO handle the exception
				}
			},
			pageToDetail() {
				OpenPage('/pagesStay/home-stay/home-stay-info', {
					uuBhjq: this.detail.uuBhjq,
					uuJqts: this.detail.uuJqts,
					uutitle: this.detail.uutitle
				})
			},
			changeDate(e) {
				this.time = e;
				this.getDetailList()
			},
			openPage(url, item) {
				let _this = this;
				if (this.wechat_userInfo) {
					if (!this.time) {
						showToast('请选择入住时间~')
						return;
					}
					OpenPage(url, {
						item,
						time: this.time
					})
					return;
				}
				uni.getUserProfile({
					desc: '需要获取您的个人信息',
					success(res) {
						uni.login({
							provider: 'weixin',
							success: async function(loginRes) {
								let data = {
									code: loginRes.code,
									shareUserId: 0,
									userInfo: {
										phone: "",
										registerDate: "",
										status: 0,
										userId: 0,
										userLevel: 0,
										userLevelDesc: "",
										...res.userInfo
									}
								}
								const result = await _this.$http(_this.$API.postLoginByWeixin, data,
									'POST');
								_this.wechat_userInfo = result.data.userInfo;
								setStorage('wechat_userInfo', result.data.userInfo)
							},
							fail(err) {
								console.log(err)
							}
						});
					},
					fail(err) {
						console.log(err)
					}
				})
			},
			async clickMark(e) {
				let markItem = this.marker[0];
				uni.openLocation({
					latitude: parseFloat(markItem.latitude),
					longitude: parseFloat(markItem.longitude),
					scale: 10,
					success(res) {
						console.log(res)
					}
				})
			},

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
			height: 32rpx;
			overflow: hidden;
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
			height: 150rpx;
			border-radius: 12rpx;
			margin-top: 20rpx;
			width: 100%;
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

	/deep/ .uni-datetime-picker--btn {
		background-color: #f59a23;
	}

	/deep/ .uni-calendar-item--checked {
		background-color: #f59a23 !important;
	}
</style>
