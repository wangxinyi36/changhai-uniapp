<template>
	<view class="home-stay-info">
		<view class="u56">
			<text class="u56-text" :class="[{'u56-text-active':tabIndex === index}]" v-for="item,index in tab"
				:key="index" @click="tabIndex = index">{{item}}</text>
		</view>
		<view class="u58">
			<view class="u58-title">民宿信息</view>
			<view class="u58-box">
				<view class="u58-box-title">杏树镇民宿</view>
				<view class="u58-box-text">2019年装修 20间客房</view>
				<view class="u58-box-text">民宿描述：是吗是吗是吗是吗是吗是吗没什么咩咩咩咩什么什么什么什么是什么。</view>
			</view>
		</view>
		<view class="u58">
			<view class="u58-title">民宿要求</view>
			<view class="u58-box">
				<view class="u58-box-text"><text class="title">入离时间：</text>入住时间14:00以后，离店时间12:00以前</view>
				<view class="u58-box-text"><text class="title">入住方式：</text>不允许举办派对/活动  不允许商业拍摄  不允许儿童入住</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				tab: ['民宿信息', '民宿要求'],
				tabIndex: 0
			};
		},
		methods: {

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
