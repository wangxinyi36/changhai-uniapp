<template>
	<view>
		<view class="u221">
			<swiper :indicator-dots="true" indicator-color="#edf0f7fe" indicator-active-color="#fff" :autoplay="true"
				:interval="5000" :duration="1000">
				<swiper-item v-for="item,index in swipers" :key="index">
					<view class="swiper-item">
						<image :src="item" mode="aspectFill" class="swiper-item-img"></image>
					</view>
				</swiper-item>
			</swiper>
		</view>
		<view class="u227">
			<view class="u227-title">当季热门</view>
			<view class="u227-list">
				<view class="u227-list-item" v-for="item,index in list" :key="item.id" @click="openPage(item)">
					<image :src="item.picUrl" mode="aspectFill" class="u227-list-item-img"></image>
					<view class="u227-list-item-box">
						<view class="u229">{{item.name}}</view>
						<view class="u230">{{item.brief}}</view>
					</view>
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
				swipers: ['/static/home1.png', '/static/home1.png', '/static/home1.png'],
				list: [],
				page: 1,
				total: 0,
			};
		},
		onLoad() {
			this.getTral()
		},
		methods: {
			openPage(item) {
				OpenPage(`/pages/home/special-route/special-route-detail?id=${item.id}`)
			},
			async getTral() {
				try {
					let {
						page,
						list
					} = this.$data;
					const res = await this.$http(`${this.$API.getTralList}?limit=10&page=${page}`);
					this.total = res.data.total;
					this.list = list.concat(res.data.items)
				} catch (e) {
					//TODO handle the exception
				}
			},
		},
		onReachBottom() {
			if (this.total > 0 && this.total == this.list.length) {
				return;
			}
			this.page++;
			this.getTral()
		}
	}
</script>

<style lang="scss" scoped>
	.swiper-item {
		height: 424rpx;
		width: 100%;

		&-img {
			width: 100%;
			height: 100%;
		}
	}

	.u227 {
		padding: 20rpx;

		&-title {
			font: normal 700 32rpx/normal '微软雅黑 Bold', '微软雅黑 Regular', '微软雅黑', sans-serif;
			color: #333;
			margin-left: 20rpx;
		}

		&-list {
			padding-top: 20rpx;

			&-item {
				display: flex;
				margin-bottom: 30rpx;

				&-img {
					width: 205rpx;
					height: 144rpx;
					border-radius: 20rpx;
					margin-right: 20rpx;
				}

				.u227-list-item-box {
					flex: 1;
					display: flex;
					flex-direction: column;
					justify-content: space-between;

					.u229 {
						font: normal 400 32rpx/normal '微软雅黑', sans-serif;
						color: #333;
					}

					.u230 {
						font: normal 400 28rpx/normal '微软雅黑', sans-serif;
						color: #333;
					}
				}
			}
		}
	}
</style>
