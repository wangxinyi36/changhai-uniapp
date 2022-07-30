<template>
	<view class="comments">
		<!-- <view class="u48">
			<view class="u48-text u48-text-active" v-for="item,index in tabs" :key="index">{{item.name}}</view>
		</view> -->
		<view class="">
			<common-comment v-for="item,index in comments" :key="index" :comment="item" :from="from"></common-comment>
			<common-empty index="3" v-if="comments.length == 0"></common-empty>
		</view>
	</view>
</template>

<script>
	import {
		getStorage
	} from '@/common/fun.js'
	export default {
		data() {
			return {
				tabIndex: 0,
				tabs: [{
					name: '全部'
				}],
				from: '', //tastyFood美食
				comments: [],
				id: '',
				total: 0,
				commentForm: {
					uuid: '',
					start: 0,
					pageNum: 10
				}
			};
		},
		onLoad(options) {
			this.id = options.id;
			this.from = options.from;
			this.commentForm.uuid = options.id;
			this.postComments()
		},
		methods: {
			async postComments() {
				try {
					const {
						commentForm,
						comments,
						total,
					} = this.$data;
					if (total != 0 && total == comments.length) {
						return;
					}
					const result = await this.$http(this.$API.postCommentList, commentForm, 'POST');
					this.comments = comments.concat(result.data.list);
				} catch (e) {
					console.log(e)
					//TODO handle the exception
				}
			},
		},
		onReachBottom() {
			this.commentForm.start += 10;
			this.postComments()
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

			.u48-text-active {
				background: #31d0e6;
				color: #fff;
			}


		}


	}
</style>
