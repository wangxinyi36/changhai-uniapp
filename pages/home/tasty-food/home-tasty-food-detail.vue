<template>
	<view class="u23">
		<view class="u22">
			<image :src="detail.UUimgpath" mode="aspectFill" class="u22-img"></image>
		</view>
		<view class="u3">
			<view class="u3-name">{{detail.UUtitle}}</view>
		</view>
		<view class="u25-bottom">
			<view class="u25-bottom-left">
				<image src="/static/u115.svg" mode="aspectFill" class="u25-bottom-left-img"></image>
				<view class="u25-bottom-text">{{detail.UUarea}}{{detail.UUaddress}}</view>
			</view>
			<view class="u25-bottom-box">
				<image src="/static/icon7.svg" mode="scaleToFill" class="u25-bottom-img"></image>
			</view>
		</view>
		<view class="u25">
			<view class="u25-top">
				<image src="/static/home1.jpg" mode="aspectFill" class="u25-top-img"></image>
				<view class="u25-top-box">
					<view class="u25-top-box-name">新鲜海鲜</view>
					<view class="u31">
						<uni-rate v-model="score" readonly size="13" />
						<!-- <view class="u31-text">￥20/人</view> -->
					</view>
					<!-- <view class="u34">营业中 8：00-02:00</view> -->
				</view>
			</view>
		</view>
		<view class="u70">
			<view class="u70-title u50-title">用户评价</view>
			<view class="u58">
				<view class="u58-item" v-for="item,index in commentList" :key="item.id">
					<view class="u59">
						<image :src="item.userHeadImage" mode="aspectFill" class="u59-img"></image>
						<view class="u59-box">
							<view class="u59-box-name">{{item.userName}}</view>
							<uni-rate v-model="item.score" readonly :size="13" />
						</view>
					</view>
					<view class="u67">{{item.comment}}</view>
					<!-- <view class="u58-item-imgs" v-if="item.url.length > 0">
						<image :src="pic" mode="aspectFill" v-for="pic,i in item.url" :key="index"
							class="u58-item-imgs-pic"></image>
					</view> -->
				</view>
			</view>
		</view>
		<navigator url="/pages/mall/comments" hover-class="none">
			<view class="u71">查看全部评价</view>
		</navigator>
	</view>
</template>

<script>
	import {
		GetSystemInfo
	} from '@/common/fun.js'
	export default {
		data() {
			return {
				id: '',
				detail: {},
				commentParams: {
					pageNum: 1,
					start: 0,
					uuid: ''
				},
				commentList: [],
				commentTotal: 0,
				score: 0,
			};
		},
		created() {},
		methods: {
			back() {
				uni.navigateBack()
			},
			async getDetail() {
				try {
					const {
						id
					} = this.$data;
					const res = await this.$http(`${this.$API.getProductDetail}?spotId=${id}`);
					this.detail = res.data.Data.Rec;
					uni.setNavigationBarTitle({
						title: this.detail.UUtitle
					})
				} catch (e) {
					//TODO handle the exception
				}
			},
			async postComment() {
				try {
					const {
						commentParams,
						id
					} = this.$data;
					commentParams.id = id;
					const res = await this.$http(this.$API.postCommentList, commentParams, 'POST');
					this.commentList = res.data.list;
					this.score = res.data.score;
					this.commentTotal = res.data.total;
				} catch (e) {
					//TODO handle the exception
				}
			},
		},
		onLoad(options) {
			this.id = options.id;
			this.getDetail();
			this.postComment()
		},
	}
</script>
<style>
	page {
		background-color: rgba(237, 240, 247, 1);
	}
</style>
<style lang="scss" scoped>
	.u23 {
		.u22 {
			width: 100%;
			height: 412rpx;

			&-img {
				width: 100%;
				height: 100%;
			}
		}

		.u3 {
			padding: 20rpx 30rpx;
			background-color: #fff;
			border-bottom: 1rpx solid rgba(215, 215, 215, 1);

			&-name {
				font: normal 400 32rpx/normal '微软雅黑', sans-serif;
				color: #000;
			}
		}

		.u25-bottom {
			@extend .default-flex;
			justify-content: space-between;
			padding: 20rpx 30rpx;
			background-color: #fff;

			&-left {
				@extend .default-flex;

				&-img {
					width: 20rpx;
					height: 28rpx;
					margin-right: 40rpx;
				}
			}

			&-text {
				font: normal 400 28rpx/normal '微软雅黑', sans-serif;
				color: #333;
			}

			&-box {
				background-color: rgba(237, 240, 247, 1);
				height: 40rpx;
				width: 40rpx;
				border-radius: 50%;
				@extend .default-flex;
				justify-content: center;
			}

			&-img {
				width: 24rpx;
				height: 24rpx;
			}
		}

		.u25 {
			background-color: rgba(255, 255, 255, 1);
			padding: 20rpx;
			margin-top: 30rpx;

			&-top {
				display: flex;

				&-img {
					width: 192rpx;
					height: 116rpx;
					margin-right: 20rpx;
				}

				&-box {
					display: flex;
					justify-content: space-between;
					flex-direction: column;

					&-name {
						font: normal 400 32rpx/normal '微软雅黑', sans-serif;
						color: #333;
					}

					.u31 {
						@extend .default-flex;

						&-text {
							font: normal 400 24rpx/normal '微软雅黑', sans-serif;
							color: #aaa;
							// margin-left: 15rpx;
						}
					}

					.u34 {
						@extend .u25-top-box-name;
						font-size: 24rpx;
					}
				}
			}


		}

		.u70 {
			background-color: #fff;
			margin-top: 30rpx;
			padding: 20rpx;
			border-bottom: 1rpx solid rgba(215, 215, 215, 1);

			&-title {
				font: normal 400 32rpx/normal '微软雅黑', sans-serif;
				color: #333;
			}

			.u58 {
				margin-bottom: 20rpx;

				&-item {
					background-color: #fff;
					padding: 30rpx;
					border-radius: 20rpx;
					margin-top: 20rpx;

					.u59 {
						display: flex;

						&-img {
							width: 60rpx;
							height: 60rpx;
							border-radius: 50%;
							margin-right: 20rpx;
						}

						&-box {
							&-name {
								font: normal 400 28rpx/normal '微软雅黑', sans-serif;
								color: #333;
							}
						}
					}

					.u67 {
						font: normal 400 28rpx/normal '微软雅黑', sans-serif;
						color: #333;
						margin-top: 20rpx;
					}

					&-imgs {
						margin-top: 40rpx;

						&-pic {
							width: 240rpx;
							height: 200rpx;
							border-radius: 20rpx;
							margin-right: 20rpx;
						}
					}

					.u69 {
						border-top: 2rpx solid rgba(215, 215, 215, 1);
						font: normal 400 24rpx/normal '微软雅黑', sans-serif;
						color: #aaa;
						margin-top: 20rpx;
						padding-top: 20rpx;
					}
				}

			}
		}

		.u71 {
			height: 60rpx;
			padding: 0 20rpx;
			font: normal 400 28rpx/60rpx '微软雅黑', sans-serif;
			color: #333;
			background-color: #fff;
		}
	}
</style>
