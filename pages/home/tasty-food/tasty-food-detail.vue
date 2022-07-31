<template>
	<view class="u23">
		<view class="u22" :style="{height: 150 + safeTop + 'px',backgroundImage: `url(${detail.picurl})`}">
			<view class="u21" :style="{background:backgroundColor}">
				<view :style="{height:safeTop + 'px'}"></view>
				<view class="u22-nav">
					<uni-icons type="back" size="20" :color="color" @click="back"></uni-icons>
					<view class="u22-nav-title" :style="{color:color}">{{detail.shopName}}</view>
				</view>
			</view>
		</view>
		<view class="u24" :style="{top:safeTop + 90 + 'px'}">
			<view class="u24-box">
				<view class="u25">
					<view class="u25-top">
						<image :src="detail.picurl" mode="aspectFill" class="u25-top-img"></image>
						<view class="u25-top-box">
							<view class="u25-top-box-name">{{detail.shopName}}</view>
							<view class="u31">
								<uni-rate v-model="detail.star" readonly size="13" />
								<view class="u31-text">￥{{detail.percapita}}/人</view>
							</view>
							<view class="u34">营业时间：{{detail.uuruntime}}</view>
						</view>
					</view>
					<view class="u25-bottom">
						<view class="u25-bottom-text">{{detail.address}}</view>
						<view class="u25-bottom-box">
							<image src="/static/icon7.svg" mode="scaleToFill" class="u25-bottom-img" @click="call">
							</image>
						</view>
					</view>
				</view>
				<view class="u94">
					<map class="u94-map" scale="8"></map>
				</view>
				<view class="u57">
					<!-- <view class="u57-tabs">
						<view class="u57-tab" v-for="item,index in tabs" :key="index"
							:class="{'u57-tab-active':tabIndex == index}" @click="change(index)">{{item}}</view>
					</view> -->
					<view class="u56">
						<view class="u56-title u50-title">套餐</view>
						<view class="u56-list">
							<view class="u56-list-item" v-for="item,index in detail.foodDetailList" :key="item.fuuid">
								<image :src="item.picurl" mode="aspectFill" class="u56-list-item-img"></image>
								<view class="u42">
									<view class="u42-name">{{item.foodname}}</view>
									<view class="u42-tip">{{item.remark}}</view>
									<view class="u42-summarys">
										<view class="u42-summary" v-for="tag,i in item.ticketkeywordList">{{tag}}</view>
									</view>
									<view class="u42-box">
										<view class="u42-box-left">
											<view class="u42-box-left-pay">￥{{item.uutprice/100}}</view>
											<view class="u42-box-left-discount">{{item.rebate}}折</view>
										</view>
										<view class="u42-box-btn" @click="buy(item)">订购</view>
									</view>
								</view>
							</view>
						</view>
					</view>
					<view class="u70" v-if="evaluate.length > 0">
						<view class="u70-title u50-title">
							<view class="u70-title-text">评价</view>
							<navigator :url="`/pages/home/tasty-food/tasty-food-comments?id=${id}&from=tastyFood`"
								hover-class="none">
								<view class="u70-title-more">查看更多</view>
							</navigator>
						</view>
						<view class="u58">
							<view class="u58-item" v-for="item,index in evaluate" :key="item.id">
								<view class="u59">
									<image :src="item.userHeadImage" mode="aspectFill" class="u59-img"></image>
									<view class="u59-box">
										<view class="u59-box-name">{{item.userName}}</view>
										<uni-rate v-model="item.score" readonly :size="13" />
									</view>
								</view>
								<view class="u67">{{item.comment}}</view>
								<view class="u58-item-imgs" v-if="item.picurls.length > 0">
									<image :src="pic" mode="aspectFill" v-for="pic,i in item.picurls" :key="i"
										class="u58-item-imgs-pic"></image>
								</view>
								<view class="u69" v-if="item.reply">商家回复：{{item.reply}}</view>
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import {
		GetSystemInfo,
		showToast,
		OpenPage
	} from '@/common/fun.js'
	export default {
		data() {
			return {
				id: '',
				safeTop: '',
				backgroundColor: '#ffffff00',
				color: '#fff',
				tabIndex: 0,
				tabs: ['套餐', '评价'],
				evaluate: [],
				detail: {}
			};
		},
		created() {
			this.safeTop = GetSystemInfo().safeArea.top;
		},
		onLoad(options) {
			this.id = options.id;
			this.getDetail()
			this.postComments()
		},
		methods: {
			async getDetail() {
				try {
					const {
						id
					} = this.$data;
					const result = await this.$http(this.$API.getProductFoodDetail, {
						id
					});
					this.detail = result.data;
				} catch (e) {
					console.log(e)
					//TODO handle the exception
				}
			},
			async postComments() {
				try {
					const {
						id
					} = this.$data;
					const result = await this.$http(this.$API.postCommentList, {
						uuid: id,
						start: 0,
						pageNum: 2
					}, 'POST');
					if (result.errno != 0) {
						showToast(result.errmsg)
						return;
					}
					this.evaluate = result.data.list;
				} catch (e) {
					console.log(e)
					//TODO handle the exception
				}
			},
			call() {
				uni.makePhoneCall({
					phoneNumber: this.detail.uutel
				});
			},
			buy(item) {
				OpenPage(`/pages/home/tasty-food/tasty-food-pay`, {
					detail: this.detail,
					item,
				})
			},
			back() {
				uni.navigateBack()
			},
			change(index) {
				this.tabIndex = index;
			}
		},
		onPageScroll(e) {
			if (e.scrollTop > 50) {
				this.backgroundColor = '#fff'
				this.color = '#000'
			}
			if (e.scrollTop > 0 && e.scrollTop <= 50) {
				this.backgroundColor = '#ffffff' + parseInt(e.scrollTop)
				this.color = '#000' + parseInt(e.scrollTop)
			}
			if (e.scrollTop == 0) {
				this.backgroundColor = '#ffffff00'
				this.color = '#fff'
			}
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
			background-size: 100% 100%;
			background-position: center;

			.u21 {
				position: fixed;
				width: 100%;
				top: 0;
				z-index: 1;
			}

			&-nav {
				@extend .default-flex;
				padding: 0 20rpx;
				height: 44px;

				&-title {
					font-size: 30rpx;
					text-align: center;
					flex: 1;
					margin-right: 20rpx;
				}
			}
		}

		.u24 {
			width: 100%;
			position: absolute;
			top: 90px;

			&-box {
				margin: 0 40rpx;

				.u25 {
					background-color: rgba(255, 255, 255, 1);
					border-radius: 20rpx;
					padding: 20rpx;

					&-top {
						@extend .default-flex;
						border-bottom: 2rpx solid rgba(242, 242, 242, 1);
						padding-bottom: 10rpx;

						&-img {
							width: 192rpx;
							height: 116rpx;
							border-radius: 20rpx;
							margin-right: 20rpx;
						}

						&-box {
							&-name {
								font: normal 400 32rpx/normal '微软雅黑', sans-serif;
								color: #333;
							}

							.u31 {
								@extend .default-flex;

								&-text {
									font: normal 400 24rpx/normal '微软雅黑', sans-serif;
									color: #aaa;
									margin-left: 15rpx;
								}
							}

							.u34 {
								@extend .u25-top-box-name;
								font-size: 24rpx;
							}
						}
					}

					&-bottom {
						@extend .default-flex;
						justify-content: space-between;
						padding-top: 20rpx;

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
				}

				.u94 {
					height: 130rpx;
					border-radius: 20rpx;
					background-color: #fff;
					margin-top: 20rpx;

					&-map {
						height: 100%;
						border-radius: 20rpx;
						width: 100%;
					}
				}

				.u57 {
					margin-top: 20rpx;

					&-tabs {
						@extend .default-flex;
					}

					&-tab {
						font: normal 400 32rpx/normal '微软雅黑', sans-serif;
						color: #333;
						margin-right: 30rpx;
					}

					&-tab-active {
						color: #FD7A21;
						font-weight: 700;
						font-family: '微软雅黑 Bold', '微软雅黑 Regular', '微软雅黑', sans-serif;
					}

					.u50 {
						width: 100%;
						background-color: rgba(255, 255, 255, 1);
						border-radius: 20rpx;
						margin-top: 20rpx;
						padding: 20rpx;
						box-sizing: border-box;

						&-title {
							font: normal 700 32rpx/normal '微软雅黑 Bold', '微软雅黑 Regular', '微软雅黑', sans-serif;
							color: #333;
						}

						&-box {
							margin: 6rpx 0;
							@extend .default-flex;
							justify-content: space-between;

							&-text {
								font: normal 400 28rpx/normal '微软雅黑', sans-serif;
								color: #555;
							}

							&-btn {
								font: normal 400 24rpx/36rpx 'Arial Normal', 'Arial', sans-serif;
								color: #fff;
								width: 96rpx;
								height: 36rpx;
								background: linear-gradient(180deg, rgba(255, 114, 32, 1) 0%, rgba(245, 154, 35, 1) 100%);
								border-radius: 48rpx;
								text-align: center;
							}
						}

						&-pay {
							@extend .u50-box-text;
							color: #D9001B;
						}
					}

					.u56 {
						margin-top: 20rpx;

						&-list {
							background-color: #fff;
							padding: 30rpx 30rpx 10rpx 30rpx;
							border-radius: 20rpx;
							margin: 20rpx 0;

							&-item {
								display: flex;
								margin-bottom: 30rpx;

								&-img {
									width: 200rpx;
									height: 140rpx;
									border-radius: 20rpx;
									margin-right: 30rpx;
								}

								.u42 {
									flex: 1;

									&-name {
										font: normal 400 30rpx/normal '微软雅黑', sans-serif;
										color: #333;
									}

									&-tip {
										@extend .u42-name;
										color: #CBCBCB;
										font-size: 24rpx;
									}

									&-summarys {
										@extend .default-flex;
									}

									&-summary {
										@extend .u42-tip;
										color: #FFBB03;
										margin-right: 10rpx;
									}

									&-box {
										@extend .default-flex;
										justify-content: space-between;

										&-left {
											@extend .default-flex;
											margin-top: 6rpx;

											&-pay {
												@extend .u42-tip;
												color: #D9001B;
												margin-right: 10rpx;
											}

											&-discount {
												@extend .u42-tip;
												color: #D9001B;
												font-size: 20rpx;
												border: 2rpx solid #D9001B;
												height: 24rpx;
												line-height: 24rpx;
											}
										}

										&-btn {
											font: normal 400 24rpx/36rpx 'Arial Normal', 'Arial', sans-serif;
											color: #fff;
											height: 36rpx;
											background: linear-gradient(180deg, rgba(255, 114, 32, 1) 0%, rgba(245, 154, 35, 1) 100%);
											text-align: center;
											width: 96rpx;
											border-radius: 48rpx;
										}
									}
								}
							}
						}
					}

					.u70 {
						&-title {
							@extend .default-flex;
							justify-content: space-between;

							&-more {
								font: normal 400 24rpx/normal '微软雅黑', sans-serif;
								color: #333;
							}
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

				}
			}
		}
	}
</style>
