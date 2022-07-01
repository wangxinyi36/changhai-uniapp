<template>
	<view class="comments">
		<view class="u48">
			<view class="u48-text" v-for="item,index in tabs" :key="index" :class="{'u48-text-active': tabIndex == index }"
				@click="change(index)">
				{{item.name}}
			</view>
		</view>
		<view class="">
			<common-comment v-for="item,index in comments" :key="index" :comment="item" from="mall"></common-comment>
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
				tabIndex: -1,
				tabs: [{
					name: '全部'
				}, {
					name: '最新'
				}],
				comments: [],
				id: '',
				page: 1,
				total: 0,
			};
		},
		onLoad(options) {
			this.id = options.id;
			this.tabIndex = 0;
			this.getComments()
		},
		methods: {
			change(val) {
				this.tabIndex = val;
			},
			async getComments() {
				try {
					let {
						id,
						userId,
						page,
						total,
						comments
					} = this.$data;
					if (total > 0 && total == comments.length) {
						return;
					}
					const res = await this.$http(
						`${this.$API.getCommentList}?limit=10&page=${page}&valueId=${id}`);
					this.comments = res.data.items;
					this.total = res.data.total;
				} catch (e) {
					//TODO handle the exception
				}
			}
		},
		onReachBottom() {
			this.page++;
			this.getComments()
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
