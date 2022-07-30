<template>
	<view>
		<view class="common-comment" v-if="from == 'mall'">
			<view class="u33">
				<image :src="comment.headimage" mode="aspectFill" class="u33-avatar"></image>
				<view class="u33-name">{{comment.nickname}}</view>
			</view>
			<view class="content">{{comment.content}}</view>
			<view class="pics" v-if="comment.picUrls.length > 0">
				<uni-row :gutter="10">
					<uni-col :span="12" v-for="item,index in comment.picUrls" :key="index">
						<image :src="item" mode="aspectFill" class="pic">
						</image>
					</uni-col>
				</uni-row>
			</view>
		</view>
		<view class="common-comment" v-if="from == 'tastyFood'">
			<view class="u33">
				<image :src="comment.userHeadImage" mode="aspectFill" class="u33-avatar"></image>
				<view class="u33-right">
					<view class="u33-name">{{comment.userName}}</view>
					<uni-rate v-model="comment.score" readonly :size="13" />
				</view>
			</view>
			<view class="content">{{comment.comment}}</view>
			<view class="pics" v-if="comment.picurls.length > 0">
				<uni-row :gutter="10">
					<uni-col :span="12" v-for="item,index in comment.picurls" :key="index">
						<image :src="item" mode="aspectFill" class="pic">
						</image>
					</uni-col>
				</uni-row>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: "common-comment",
		props: {
			comment: Object,
			from: String,
		},
		data() {
			return {};
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
