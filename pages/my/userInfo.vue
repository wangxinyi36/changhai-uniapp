<template>
	<view>
		<uni-list>
			<uni-list-item title="头像">
				<template v-slot:footer>
					<image src="/static/home7.png" mode="aspectFill" class="avatar"></image>
				</template>
			</uni-list-item>
			<uni-list-item title="修改昵称">
				<template v-slot:footer>
					<input type="text" placeholder="编辑昵称" class="nickname" placeholder-class="nickname-placeholder">
				</template>
			</uni-list-item>
		</uni-list>

		<view class="u98">
			<view class="u98-btn">保存更改</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			};
		}
	}
</script>

<style lang="scss" scoped>
	/deep/ .uni-list-item__container {
		align-items: center;
	}

	.avatar {
		width: 100rpx;
		height: 100rpx;
		border-radius: 50%;
	}

	.nickname {
		text-align: right;
		font: 400 normal 30rpx normal;
		color: #555;

		&-placeholder {
			font: 400 normal 24rpx normal;
			color: #D7D7D7;
		}
	}

	.u98 {
		width: 100%;
		position: fixed;
		bottom: 100rpx;

		&-btn {
			height: 80rpx;
			background-color: rgba(49, 208, 230, 1);
			border-radius: 121rpx;
			font-size: 24rpx;
			color: #FFFFFF;
			text-align: center;
			line-height: 80rpx;
			margin: 0 20px;
		}
	}
</style>
