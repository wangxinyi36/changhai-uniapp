<template>
	<view class="my">
		<view class="u16" @click="openPage(`/pages/my/userInfo`)">
			<image src="/static/home1.png" mode="aspectFill" class="u16-img"></image>
			<view class="u17">
				<view class="u17-name">游客</view>
				<view class="u17-tel">绑定手机号</view>
			</view>
		</view>

		<uni-list :border="false">
			<uni-list-item title="我的订单" link="navigateTo" thumb="/static/my1.svg" :clickable="true"
				@click="clickItem('/pages/my/order')"></uni-list-item>
			<uni-list-item title="我的投诉" link="navigateTo" thumb="/static/my2.svg" thumbSize="sm" :clickable="true"
				@click="clickItem('/pages/my/complaint')"></uni-list-item>
			<uni-list-item title="帮助中心" link="navigateTo" thumb="/static/my3.svg" thumbSize="sm" :clickable="true"
				@click="clickItem('/pages/my/help')">
			</uni-list-item>
			<uni-list-item title="优惠券" link="navigateTo" thumb="/static/my4.svg" thumbSize="sm" :clickable="true"
				@click="clickItem('/pages/my/order')"></uni-list-item>
			<uni-list-item title="联系我们" link="navigateTo" thumb="/static/my5.svg" thumbSize="sm" :clickable="true"
				@click="clickItem('/pages/my/order')"></uni-list-item>
			<uni-list-item title="设置" link="navigateTo" thumb="/static/setting.svg" class="my-setting" :clickable="true"
				@click="clickItem('/pages/my/setting')"></uni-list-item>
		</uni-list>

	</view>
</template>

<script>
	import {
		OpenPage,
		WechatLogin,
		getStorage
	} from '@/common/fun.js'
	export default {
		data() {
			return {
				wechat_userInfo: {}
			};
		},
		onLoad() {
			this.wechat_userInfo = getStorage()
		},
		methods: {
			clickItem(url) {
				this.openPage(url)
			},
			async openPage(url) {
				try {
					const value = uni.getStorageSync('userInfo');
					if (value) {
						// OpenPage(url)
					} else {
						const result = await WechatLogin();
						uni.setStorageSync('wechat_userInfo', result.userInfo);
						this.wechat_userInfo = result.userInfo;
					}
				} catch (err) {
					console.log(err)
					// error
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	.my {
		padding: 20rpx;

		.u16 {
			@extend .default-flex;
			height: 120rpx;
			margin-bottom: 60rpx;

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
