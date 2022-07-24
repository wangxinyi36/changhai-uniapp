<template>
	<view class="u-meal-detail">
		<view class="u25">
			<image src="/static/home1.jpg" mode="aspectFill" class="u25-img"></image>
		</view>
		<view class="u26">
			<view class="u26-top">
				<view class="u27">
					<image src="/static/home1.jpg" mode="aspectFill" class="u27-img"></image>
					<view class="u27-right">
						<view class="u27-right-title">新鲜海鲜</view>
						<view class="u27-right-star">
							<uni-rate v-model="value" :readonly="true" :size="13" />
							<view class="u27-right-star-text">￥20/人</view>
						</view>
						<view class="u27-right-time">营业中 8:00-02:00</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>


<script>
	export default {
		data() {
			return {
				id: '',
				value: 4
			};
		},
		onLoad(options) {
			this.id = options.id;
			this.getDetail()
		},
		methods: {
			async getDetail() {
				try {
					const {
						id
					} = this.$data;
					const result = await this.$http(this.$API.getProductWMDetail, {
						id
					});
					console.log(result)

				} catch (e) {
					//TODO handle the exception
				}
			},
		}
	}
</script>

<style lang="scss" scoped>
	.u25 {
		height: 300rpx;
		width: 100%;

		&-img {
			width: 100%;
			height: 100%;
		}
	}

	.u26 {
		&-top {
			background-color: #fff;
			border-radius: 20rpx 20rpx 0 0;
			padding: 20rpx;

			.u27 {
				@extend .default-flex;

				&-img {
					width: 192rpx;
					height: 116rpx;
					border-radius: 20rpx;
					margin-right: 20rpx;
				}

				&-right {
					&-title {
						font: normal 400 32rpx/normal '微软雅黑', sans-serif;
						color: #333;
					}
					&-time{
						@extend .u27-right-title;
						font-size: 24rpx;
					}

					&-star {
						@extend .default-flex;
					}

					&-star-text {
						font: normal 400 24rpx/normal '微软雅黑', sans-serif;
						color: #aaa;
					}
				}
			}
		}
	}
</style>
