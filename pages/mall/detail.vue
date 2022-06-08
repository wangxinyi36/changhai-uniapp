<template>
	<page-meta :page-style="'overflow:'+(show?'hidden':'visible')"></page-meta>
	<view class="mall-detail">
		<image src="/static/mall8.jpg" mode="aspectFill" class="u20-img"></image>
		<view class="u3">
			<view class="u22">
				<view class="u22-title">长海海参</view>
				<view class="u22-num">累计销售：77</view>
			</view>
			<view class="u21">￥88/盆</view>
			<view class="u23 u22-num">新鲜海鲜，食用安心</view>
		</view>

		<view class="u24">
			<view class="u24-title">服务</view>
			<view class="u24-tags">
				<text class="u24-tags-text">7天退还</text>
				<text class="u24-tags-text">748小时内容发货</text>
			</view>
		</view>

		<view class="u29">
			<view class="u29-title">关于运费</view>
			<view class="u29-text">包邮</view>
		</view>

		<view class="u1">
			<view class="u31">
				<view class="u31-title">用户评论（888）</view>
				<view class="u31-num" @click="openPage">查看全部</view>
			</view>
			<view class="comment-list">
				<common-comment v-for="item,index in comments" :key="index" :comment="item"></common-comment>
			</view>
		</view>

		<view class="u42">
			<view class="u42-title">商品详情</view>
			<image src="/static/home5.png" class="u42-img" mode="aspectFill"></image>
		</view>

		<view class="u43">
			<uni-goods-nav :fill="true" :options="options" :button-group="buttonGroup" @click="clickLeft"
				@buttonClick="clickBtn" />
		</view>
		<uni-popup ref="popup" type="bottom" @change="change">
			<view class="u120">
				<view class="u128">
					<view class="u128-title">加入购物车</view>
					<view class="u128-title">清空</view>
				</view>
				<view class="cart-list">
					<common-cart-goods v-for="item,index in goods" :key="index" :goods="item"></common-cart-goods>
				</view>
			</view>
		</uni-popup>


	</view>
</template>

<script>
	import {
		OpenPage
	} from '@/common/fun.js';
	export default {
		data() {
			return {
				show: false, //滚动穿透禁止
				goods: [{
					name: '海参',
					url: '/static/mall4.png',
					weight: 555,
					count: 1,
					pay: 155
				}, {
					name: '海参',
					url: '/static/mall4.png',
					weight: 555,
					count: 1,
					pay: 155
				}, {
					name: '海参',
					url: '/static/mall4.png',
					weight: 555,
					count: 1,
					pay: 155
				}, {
					name: '海参',
					url: '/static/mall4.png',
					weight: 555,
					count: 1,
					pay: 155
				}, {
					name: '海参',
					url: '/static/mall4.png',
					weight: 555,
					count: 1,
					pay: 155
				}, {
					name: '海参',
					url: '/static/mall4.png',
					weight: 555,
					count: 1,
					pay: 155
				}, {
					name: '海参',
					url: '/static/mall4.png',
					weight: 555,
					count: 1,
					pay: 155
				}],
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
				options: [{
					icon: 'cart',
					text: '购物车',
					info: 0
				}],
				buttonGroup: [{
						text: '加入购物车',
						backgroundColor: '#31d0e6',
						color: '#fff'
					},
					{
						text: '立即购买',
						backgroundColor: '#ff8d3d',
						color: '#fff'
					}
				]
			};
		},
		methods: {
			openPage() {
				OpenPage('/pages/mall/comments')
			},
			clickLeft(params) {
				this.$refs.popup.open('bottom');
			},
			change(e) {
				this.show = e.show
			},
			clickBtn(i, content) {

			},
		}
	}
</script>

<style lang="scss" scoped>
	.mall-detail {
		background-color: rgba(237, 240, 247, 1);

		.u20-img {
			height: 290rpx;
			width: 100%;
		}

		.u3 {
			background-color: #fff;
			margin-top: 20rpx;
			padding: 20rpx;

			.u22 {
				@extend .default-flex;
				justify-content: space-between;

				&-title {
					font-weight: 700;
					color: #000000;
					font-size: 32rpx;
				}

				&-num {
					font-weight: 400;
					font-size: 24rpx;
					color: #AAAAAA;
				}
			}

			.u21 {
				font: normal 400 24rpx;
				color: #D9001B;
			}
		}

		.u24 {
			@extend .default-flex;
			background-color: #fff;
			margin-top: 20rpx;
			padding: 20rpx;

			&-title {
				font: 400 normal 30rpx;
				color: #AAAAAA;
			}

			&-tags {
				margin-left: 16rpx;

				&-text {
					font: 400 normal 24rpx;
					font-style: normal;
					color: rgba(248, 113, 113, 0.690196078431373);
					background-color: rgba(248, 113, 113, 0.231372549019608);
					margin-right: 20rpx;
					padding: 0 20rpx;
				}
			}


		}

		.u29 {
			background-color: #fff;
			padding: 20rpx;
			margin-top: 20rpx;

			&-title {
				font: 400 normal 32rpx normal;
				color: #000000;
			}

			&-text {
				font: 400 normal 24rpx normal;
				color: #AAAAAA;
				margin-top: 10rpx;
			}
		}

		.u1 {
			margin-top: 20rpx;
			padding: 20rpx;
			background-color: #fff;

			.u31 {
				@extend .default-flex;
				justify-content: space-between;

				&-title {
					font: 400 normal 32rpx normal;
					color: #000000;
				}

				&-num {
					font: 400 normal 24rpx normal;
					color: #AAAAAA;
				}
			}
		}

		.u42 {
			margin-top: 20rpx;
			background-color: #fff;
			padding-bottom: 50px;

			&-title {
				color: #000000;
				font: 400 normal 32rpx normal;
				padding: 20rpx;
			}

			&-img {
				height: 636rpx;
				width: 100%;
			}
		}

		.u43 {
			position: fixed;
			bottom: 0;
			width: 100%;
			z-index: 100;
		}

		.u120 {
			min-height: 322rpx;
			max-height: 322px;
			background-color: #fff;
			border-radius: 20rpx;
			padding: 0 30rpx 50px 30rpx;
			position: relative;
			overflow-y: scroll;

			.u128 {
				@extend .default-flex;
				justify-content: space-between;
				margin-bottom: 20rpx;
				position: sticky;
				position: -webkit-sticky;
				width: 100%;
				top: 0;
				background: #fff;
				padding-top: 30rpx;
				z-index: 1;

				&-title {
					font: 400 normal 28rpx normal;
					color: #333;
				}
			}
		}
	}
</style>
