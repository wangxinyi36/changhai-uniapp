<template>
	<view>
		<view class="u17" v-for="item,index in list" :key="item.id" @click="openPage(item.id)">
			<image :src="item.url" mode="aspectFill" class="u17-img"></image>
			<view class="u17-box">
				<view class="u17-box-title">{{item.title}}</view>
				<view class="u17-box-text">
					<rich-text :nodes="item.content"></rich-text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import {
		OpenPage
	} from '@/common/fun.js'
	export default {
		data() {
			return {
				list: [],
				total: 0,
				page: 1,
			};
		},
		onLoad() {
			this.getNews()
		},
		methods: {
			openPage(id) {
				OpenPage(`/pages/home/news/detail?id=${id}`)
			},
			async getNews() {
				try {
					const {
						page,
						list,
						total
					} = this.$data;
					if (total > 0 && total == list.length) {
						return;
					}
					const res = await this.$http(`${this.$API.getNewsList}?limit=10&page=${page}`);
					this.list = list.concat(res.data.items);
					this.total = res.data.total;
				} catch (e) {
					//TODO handle the exception
				}
			},
		},
		onReachBottom() {
			this.page++;
			this.getNews()
		}
	}
</script>

<style lang="scss" scoped>
	.u17 {
		&-img {
			height: 428rpx;
			width: 100%;
		}

		&-box {
			padding: 0 30rpx;
			margin-bottom: 20px;

			&-title {
				font: 700 32rpx/30rpx '微软雅黑 Bold', '微软雅黑 Regular', '微软雅黑', sans-serif;
				color: #333;
				margin: 20rpx 0;
			}

			&-text {
				font: 400 20rpx/30rpx 'Arial Normal', 'Arial', sans-serif;
				color: #333;
			}
		}
	}
</style>
