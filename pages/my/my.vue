<template>
	<view class="my">
		<button class="u15" @click="login">
			<view class="u16">
				<image :src="wechat_userInfo.avatarUrl || defautlAvatar" mode="aspectFill" class="u16-img"></image>
				<view class="u17">
					<view class="u17-name">{{wechat_userInfo.nickName || '游客'}}</view>
				</view>
			</view>
		</button>


		<uni-list :border="false">
			<uni-list-item title="我的订单" link="navigateTo" thumb="/static/my1.svg" :clickable="true"
				@click="clickItem('/pages/my/order')"></uni-list-item>
			<uni-list-item title="立即投诉" link="navigateTo" thumb="/static/my1.svg" :clickable="true"
				@click="clickItem('/pages/my/complaint-now')"></uni-list-item>
			<uni-list-item title="我的投诉" link="navigateTo" thumb="/static/my2.svg" thumbSize="sm" :clickable="true"
				@click="clickItem('/pages/my/complaint')"></uni-list-item>
			<uni-list-item title="帮助中心" link="navigateTo" thumb="/static/my3.svg" thumbSize="sm" :clickable="true"
				@click="clickItem('/pages/my/help')">
			</uni-list-item>
			<uni-list-item title="联系我们" link="navigateTo" thumb="/static/my5.svg" thumbSize="sm"
				:rightText="phoneNumber" :clickable="true" @click="call"></uni-list-item>
			<uni-list-item title="退出" link="navigateTo" thumb="/static/my6.svg" class="my-setting" @click="exist"
				v-if="wechat_userInfo.userId">
			</uni-list-item>
		</uni-list>

	</view>
</template>

<script>
	import {
		OpenPage,
		getStorage,
		setStorage,
		showToast,
		removeStorage
	} from '@/common/fun.js'
	export default {
		data() {
			return {
				wechat_userInfo: {},
				defautlAvatar: '/static/avatar-default.svg',
				phoneNumber: ''
			};
		},
		onLoad() {
			this.wechat_userInfo = getStorage('wechat_userInfo')
			this.getPhoneNumber()
		},
		methods: {
			clickItem(url) {
				let _this = this;
				if (this.wechat_userInfo) {
					this.openPage(url)
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
			async openPage(url) {
				if (this.wechat_userInfo) {
					OpenPage(url)
				} else {
					showToast('请登录！')
				}
			},
			exist(e) {
				removeStorage('wechat_userInfo');
				this.wechat_userInfo = ''
			},
			call() {
				uni.makePhoneCall({
					phoneNumber: this.phoneNumber
				});
			},
			async getPhoneNumber() {
				try {
					const res = await this.$http(this.$API.getMyPhoneNumber);
					this.phoneNumber = res.data.phoneNumber
				} catch (e) {
					//TODO handle the exception
				}
			},
			login() {
				let _this = this;
				if (this.wechat_userInfo) {
					OpenPage('/pages/my/userInfo').then(res => {
						this.wechat_userInfo = getStorage('wechat_userInfo')
					})
					return;
				}
				uni.getUserProfile({
					desc: '需要获取您的个人信息',
					success(res) {
						uni.login({
							provider: 'weixin',
							success: async function(loginRes) {
								try {
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
									const result = await _this.$http(_this.$API.postLoginByWeixin,
										data,
										'POST');
									console.log(result)
									_this.wechat_userInfo = result.data.userInfo;
									setStorage('wechat_userInfo', result.data.userInfo)
								} catch (e) {
									console.log(e)
									//TODO handle the exception
								}
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

			}
		}
	}
</script>

<style lang="scss" scoped>
	.my {
		padding: 20rpx;

		.u15 {
			margin: 0;
			padding: 0;
			background-color: #FFFFFF;
		}

		.u15::after {
			border: none;
			position: unset !important;
		}

		.u16 {
			@extend .default-flex;
			height: 120rpx;
			margin-bottom: 20rpx;

			&-img {
				width: 120rpx;
				height: 100%;
				border-radius: 50%;
				margin-right: 30rpx;
			}

			.u17 {
				height: 100%;
				display: flex;
				flex-direction: column;
				justify-content: space-around;

				&-name {
					font: 400 normal 32rpx normal;
					color: #333;
					text-align: left;
				}

				&-tel {
					font: 400 normal 30rpx normal;
					color: #B5B5B5;
				}
			}
		}

		/deep/ .uni-list-item__icon-img {
			margin-right: 0;
			width: 38rpx;
			height: 38rpx;
		}

		&-setting {
			border-bottom: 1rpx solid #e5e5e5;
		}
	}
</style>
