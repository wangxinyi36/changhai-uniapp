<template>
	<view class="common-cart-goods">
		<image :src="goods.url" mode="aspectFill" class="goods-img"></image>
		<view class="u122">
			<view class="u122-name">{{goods.name}}</view>
			<view class="u122-weight">{{`${goods.weight}克`}}</view>
			<view class="u122-pay">
				<view>{{`￥${goods.pay}`}}</view>
				<view class="u122-count">
					<image src="/static/mall11.svg" mode="aspectFill" class="u122-count-left"></image>
					<text class="u122-count-text">1</text>
					<image src="/static/mall2.svg" mode="aspectFill" class="u122-count-left"></image>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: "common-cart-goods",
		props: {
			goods: Object
		},
		data() {
			return {

			};
		}
	}
</script>

<style lang="scss" scoped>
	.common-cart-goods {
		@extend .default-flex;
		align-items: flex-start;
		height: 124rpx;
		margin-bottom: 20rpx;

		.goods-img {
			width: 164rpx;
			height: 100%;
			border-radius: 14rpx;
			margin-right: 20rpx;
		}

		.u122 {
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			flex: 1;
			height: 100%;

			&-name {
				font: 400 normal 24rpx normal;
				color: #333;
			}

			&-weight {
				@extend .u122-name;
				color: #D7D7D7;
			}

			&-pay {
				@extend .u122-name;
				color: #D9001B;
				@extend .default-flex;
				justify-content: space-between;

				.u122-count {
					@extend .default-flex;

					&-left {
						width: 30rpx;
						height: 30rpx;
					}

					&-text {
						@extend .u122-name;
						margin: 0 20rpx;
					}
				}
			}


		}
	}
</style>
