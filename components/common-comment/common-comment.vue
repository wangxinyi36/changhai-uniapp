<template>
	<view class="common-comment">
		<view class="u33">
			<image :src="comment.avatar" mode="aspectFill" class="u33-avatar"></image>
			<view class="u33-name">{{comment.name}}</view>
		</view>
		<view class="content">{{comment.content}}</view>
		<view class="pics" v-if="comment.pics.length > 0">
			<uni-row :gutter="10">
				<uni-col :span="12" v-for="item,index in comment.pics" :key="index">
					<image :src="item" mode="aspectFill" class="pic">
					</image>
				</uni-col>
			</uni-row>
		</view>
	</view>
</template>

<script>
	export default {
		name: "common-comment",
		props: {
			comment: Object
		},
		data() {
			return {

			};
		},
		created() {}
	}
</script>

<style lang="scss" scoped>
	.common-comment {
		.u33 {
			@extend .default-flex;
			margin-top: 20rpx;

			&-avatar {
				width: 60rpx;
				height: 60rpx;
				border-radius: 50%;
				margin-right: 20rpx;
			}
		}

		.content {
			font: 400 normal 24rpx normal;
			margin-top: 10rpx;
		}

		.pics {
			margin-top: 10rpx;

			.pic {
				height: 170rpx;
				width: 100%;
			}
		}

	}
</style>
