<template>
	<view class="common-cart-goods">
		<image :src="goods.isAcitve ? iconActive : icon" mode="aspectFill" class="u70-item-img" @click="check">
		</image>
		<view class="u1">
			<image :src="goods.picUrl" mode="aspectFill" class="goods-img"></image>
			<view class="u122">
				<view class="u122-name">{{goods.name}}</view>
				<view class="u122-pay">
					<view>{{`￥${goods.retailPrice}`}}</view>
					<view class="u122-count">
						<image :src="reduceIcon" mode="aspectFill" class="u122-count-left" @click="sub"></image>
						<text class="u122-count-text">{{goods.count}}</text>
						<image src="/static/mall2.svg" mode="aspectFill" class="u122-count-left" @click="add"></image>
					</view>
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
				icon: '/static/u103.svg',
				iconActive: '/static/u103-active.svg',

				reduceIcon: '/static/mall11.svg', // >1时候
				reduceOneIcon: '/static/del.svg', // =1时候
			};
		},
		methods: {
			sub() {
				this.$emit('sub', this.goods)
			},
			add() {
				this.$emit('add', this.goods)
			},
			check() {
				this.$emit('check', this.goods)
			}
		}
	}
</script>

<style lang="scss" scoped>
	.common-cart-goods {
		margin-bottom: 20rpx;
		@extend .default-flex;

		.u1 {
			@extend .default-flex;
			align-items: flex-start;
			height: 124rpx;
			flex: 1;
		}

		.u70-item-img {
			width: 40rpx;
			height: 40rpx;
			margin-right: 20rpx;
		}

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
