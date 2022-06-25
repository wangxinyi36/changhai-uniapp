<template>
	<view class="u23">
		<view class="u22">
			<image :src="detail.UUimgpath" mode="aspectFill" class="u22-img"></image>
		</view>
		<view class="u3">
			<view class="u3-name">{{detail.UUtitle}}</view>
		</view>
		<view class="u25-bottom">
			<view class="u25-bottom-left">
				<image src="/static/u115.svg" mode="aspectFill" class="u25-bottom-left-img"></image>
				<view class="u25-bottom-text">{{detail.UUarea}}{{detail.UUaddress}}</view>
			</view>
			<view class="u25-bottom-box">
				<image src="/static/icon7.svg" mode="scaleToFill" class="u25-bottom-img"></image>
			</view>
		</view>
	</view>
</template>

<script>
	import {
		GetSystemInfo
	} from '@/common/fun.js'
	export default {
		data() {
			return {
				id: '',
				detail: {}
			};
		},
		created() {},
		methods: {
			back() {
				uni.navigateBack()
			},
			async getDetail() {
				try {
					const {
						id
					} = this.$data;
					const res = await this.$http(`${this.$API.getProductDetail}?spotId=${id}`);
					this.detail = res.data.Data.Rec;
					uni.setNavigationBarTitle({
						title: this.detail.UUtitle
					})
				} catch (e) {
					//TODO handle the exception
				}
			},
		},
		onLoad(options) {
			this.id = options.id;
			this.getDetail()
		},
	}
</script>
<style>
	page {
		background-color: rgba(237, 240, 247, 1);
	}
</style>
<style lang="scss" scoped>
	.u23 {
		.u22 {
			width: 100%;
			height: 412rpx;

			&-img {
				width: 100%;
				height: 100%;
			}
		}

		.u3 {
			padding: 20rpx 30rpx;
			background-color: #fff;
			border-bottom: 1rpx solid rgba(215, 215, 215, 1);

			&-name {
				font: normal 400 32rpx/normal '微软雅黑', sans-serif;
				color: #000;
			}
		}

		.u25-bottom {
			@extend .default-flex;
			justify-content: space-between;
			padding: 20rpx 30rpx;
			background-color: #fff;

			&-left {
				@extend .default-flex;

				&-img {
					width: 20rpx;
					height: 28rpx;
					margin-right: 40rpx;
				}
			}

			&-text {
				font: normal 400 28rpx/normal '微软雅黑', sans-serif;
				color: #333;
			}

			&-box {
				background-color: rgba(237, 240, 247, 1);
				height: 40rpx;
				width: 40rpx;
				border-radius: 50%;
				@extend .default-flex;
				justify-content: center;
			}

			&-img {
				width: 24rpx;
				height: 24rpx;
			}
		}

	}
</style>
