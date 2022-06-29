<template>
	<view>
		<view class="u93" @click="add">
			<image src="/static/icon4.svg" mode="scaleToFill" class="u93-add"></image>
			<view class="u93-text">新增住客</view>
		</view>
		<view class="u71-list">
			<view class="u71" v-for="item,index in people" :key="index">
				<view class="u71-left" @click="active = index">
					<image :src="index == active ? chooseActiveIcon : chooseIcon" mode="aspectFill"
						class="u71-left-img"></image>
					<view class="u71-left-box">
						<view class="u71-left-box-name">{{item.name}}</view>
						<view class="u71-left-box-card">{{item.mobile}}</view>
					</view>
				</view>
				<navigator url="/pagesStay/home-stay/home-stay-address" hover-class="none">
					<image src="/static/icon5.svg" mode="aspectFill" class="u71-img"></image>
				</navigator>
			</view>
		</view>

		<view class="bottom">
			<view class="bottom-btn">完成</view>
		</view>
	</view>
</template>

<script>
	import {
		getStorage,
		OpenPage
	} from '@/common/fun.js'
	export default {
		data() {
			return {
				people: [],
				active: 2,
				chooseIcon: '/static/icon-choose-no.svg',
				chooseActiveIcon: '/static/icon-choose-blue.svg',
				page: 1,
				total: 0,
				userId: ''
			};
		},
		onLoad() {
			this.userId = getStorage('wechat_userInfo').userId
			this.getAddress()
		},
		methods: {
			add() {
				OpenPage('/pagesStay/home-stay/home-stay-address')
			},
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
					this.people = this.people.concat(result.data.items);
					this.total = result.data.total;
				} catch (e) {
					//TODO handle the exception
				}

			}
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

		&-btn {
			width: 100%;
			height: 100%;
			text-align: center;
			font: normal 400 32rpx/112rpx 'Arial Normal', 'Arial', sans-serif;
			color: #fff;
		}
	}
</style>
