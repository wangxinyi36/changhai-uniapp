<template>
	<view class="comments">
		<view class="u48">
			<view class="u48-text">全部</view>
			<view class="u48-text">最新</view>
		</view>
		<view class="">
			<common-comment v-for="item,index in comments" :key="index" :comment="item"></common-comment>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				comments: [{
					avatar: '/static/mall8.png',
					name: '张三',
					content: '很新鲜，口感滑嫩，下饭的好菜、鲜艳非常诱人分量足，性价比高',
					pics: ['/static/mall8.png', '/static/mall8.png', '/static/mall8.png']
				}, {
					avatar: '/static/mall8.png',
					name: '李四',
					content: '很新鲜，口感滑嫩，下饭的好菜、鲜艳非常诱人分量足，性价比高',
					pics: []
				}],
			};
		}
	}
</script>

<style lang="scss" scoped>
	.comments {
		padding: 20rpx;

		.u48 {
			@extend .default-flex;

			.u48-text {
				background-color: rgba(237, 240, 247, 1);
				border-radius: 79rpx;
				font-size: 24rpx;
				font-weight: 400;
				color: #333;
				padding: 6rpx 50rpx;
				box-sizing: border-box;
				margin-right: 20rpx;
			}
		}


	}
</style>
