<template>
	<view class="home-stay-info">
		<view class="u56">
			<text class="u56-text" :class="[{'u56-text-active':tabIndex === index}]" v-for="item,index in tab"
				:key="index" @click="tabIndex = index">{{item}}</text>
		</view>
		<view class="u58">
			<view class="u58-box">
				<view class="u58-box-title">{{detail.businessName}}</view>
				<mp-html :content="detail.detailsContent"></mp-html>
			</view>
		</view>
	</view>
</template>

<script>
	import {
		regContent
	} from '@/common/fun.js'
	export default {
		data() {
			return {
				tab: ['民宿信息'],
				tabIndex: 0,
				detail: {},
				id: ''
			};
		},
		onLoad(options) {
			this.id = options.id;
			this.getDetailInfo()
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
				} catch (e) {
					console.log(e)
					//TODO handle the exception
				}
			},
		}
	}
</script>

<style lang="scss" scoped>
	.home-stay-info {
		padding: 20rpx 30rpx;

		.u56 {
			@extend .default-flex;

			&-text {
				font: normal 400 24rpx/normal 'Arial Normal', 'Arial', sans-serif;
				color: #333;
				position: relative;
				transform-style: preserve-3d;
				margin-right: 176rpx;

				&-active::after {
					content: " ";
					position: absolute;
					bottom: 0;
					left: 0;
					width: 100%;
					height: 8rpx;
					background-color: rgba(49, 208, 230, 1);
					transform: translateZ(-1rpx);
				}
			}
		}

		.u58 {
			margin-top: 30rpx;

			&-title {
				font: normal 400 24rpx/normal 'Arial Normal', 'Arial', sans-serif;
				color: #333;
				margin-bottom: 15rpx;
			}

			&-box {
				border: 1rpx solid rgba(215, 215, 215, 1);
				border-radius: 12rpx;
				padding: 20rpx;
				margin-top: 20rpx;

				&-title {
					@extend .u58-title;
				}

				&-text {
					@extend .u58-title;
					font-size: 20rpx;
					margin: 14rpx 0;

					.title {
						font-family: '微软雅黑 Bold', '微软雅黑 Regular', '微软雅黑', sans-serif;
						font-weight: 700;
					}
				}
			}

		}
	}
</style>
