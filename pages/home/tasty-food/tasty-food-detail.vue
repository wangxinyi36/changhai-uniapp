<template>
	<view class="u23">
		<view class="u22" :style="{height: 150 + safeTop + 'px',backgroundImage: `url(${bgImg})`}">
			<view class="u21" :style="{background:backgroundColor}">
				<view :style="{height:safeTop + 'px'}"></view>
				<view class="u22-nav">
					<uni-icons type="back" size="20" :color="color" @click="back"></uni-icons>
					<view class="u22-nav-title" :style="{color:color}">美食</view>
				</view>
			</view>
		</view>
		<view class="u24" :style="{top:safeTop + 90 + 'px'}">
			<view class="u24-box">
				<view class="u25">
					<view class="u25-top">
						<image src="/static/home1.png" mode="aspectFill" class="u25-top-img"></image>
						<view class="u25-top-box">
							<view class="u25-top-box-name">新鲜海鲜</view>
							<view class="u31">
								<uni-rate v-model="info.grade" readonly size="13" />
								<view class="u31-text">￥20/人</view>
							</view>
							<view class="u34">营业中 8：00-02:00</view>
						</view>
					</view>
					<view class="u25-bottom">
						<view class="u25-bottom-text">大长山岛开发路123号 — 12门</view>
						<view class="u25-bottom-box">
							<image src="/static/icon7.svg" mode="scaleToFill" class="u25-bottom-img"></image>
						</view>
					</view>
				</view>
				<view class="u94">
					<map class="u94-map" scale="8"></map>
				</view>
				<view class="u57">
					<view class="u57-tabs">
						<view class="u57-tab" :class="[{'u57-tab-active':tabIndex == index}]" v-for="item,index in tabs"
							:key="index">{{item}}</view>
					</view>
					<view class="u50">
						<view class="u50-title">100 元优惠卷</view>
						<view class="u50-box">
							<view class="u50-box-text">周一至周二部分时间段可用 · 不限张数</view>
							<navigator url="/pages/home/tasty-food/tasty-food-pay" hover-class="none">
								<view class="u50-box-btn">抢购</view>
							</navigator>
						</view>
						<view class="u50-pay">￥89</view>
					</view>
					<view class="u56">
						<view class="u56-title u50-title">套餐</view>
						<view class="u56-list">
							<view class="u56-list-item" v-for="item,index in list" :key="index">
								<image :src="item.url" mode="aspectFill" class="u56-list-item-img"></image>
								<view class="u42">
									<view class="u42-name">{{item.name}}</view>
									<view class="u42-tip">{{item.tip}}</view>
									<view class="u42-summary">{{item.summary}}</view>
									<view class="u42-box">
										<view class="u42-box-left">
											<view class="u42-box-left-pay">￥{{item.pay}}</view>
											<view class="u42-box-left-discount">{{item.discount}}折</view>
										</view>
										<navigator url="/pages/home/tasty-food/tasty-food-combo" hover-class="none">
											<view class="u42-box-btn">订购</view>
										</navigator>
									</view>
								</view>
							</view>
						</view>
					</view>
					<view class="u70">
						<view class="u70-title u50-title">
							<view class="u70-title-text">评价</view>
							<navigator url="/pages/mall/comments" hover-class="none">
								<view class="u70-title-more">查看更多</view>
							</navigator>
						</view>
						<view class="u58">
							<view class="u58-item" v-for="item,index in evaluate" :key="index">
								<view class="u59">
									<image :src="item.avatar" mode="aspectFill" class="u59-img"></image>
									<view class="u59-box">
										<view class="u59-box-name">{{item.name}}</view>
										<uni-rate v-model="item.grade" readonly :size="13" />
									</view>
								</view>
								<view class="u67">{{item.content}}</view>
								<view class="u58-item-imgs" v-if="item.url.length > 0">
									<image :src="pic" mode="aspectFill" v-for="pic,i in item.url" :key="index"
										class="u58-item-imgs-pic"></image>
								</view>
								<view class="u69">商家回复：{{item.reply}}</view>
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
		GetSystemInfo
	} from '@/common/fun.js'
	export default {
		data() {
			return {
				info: {
					grade: 4,
				},
				safeTop: '',
				backgroundColor: '#ffffff00',
				color: '#fff',
				tabIndex: 0,
				bgImg: '/static/home1.png',
				tabs: ['优惠券', '套餐', '评价'],
				evaluate: [{
					name: '赵丽丽',
					grade: 4,
					avatar: '/static/home1.png',
					content: '感谢店家，接到的食物很干净，没有洒漏出来，八爪鱼味道真的是好吃，汁水鲜美，肉质紧实，劲道，触手认口，鲜味十足，色香味俱全，有嚼劲，味道好极了，正适合我的口味，很新鲜，口感滑嫩，下饭的好菜，鲜艳非常诱人分量足',
					url: ['/static/home3.png', '/static/home3.png'],
					reply: '欢迎再次光临'
				}, {
					name: '赵丽',
					grade: 4,
					avatar: '/static/home1.png',
					content: '感谢店家，接到的食物很干净，没有洒漏出来，八爪鱼味道真的是好吃，汁水鲜美，肉质紧实，劲道，触手认口，鲜味十足，色香味俱全，有嚼劲，味道好极了，正适合我的口味，很新鲜，口感滑嫩，下饭的好菜，鲜艳非常诱人分量足',
					url: [],
					reply: '欢迎再次光临'
				}],
				list: [{
					name: '螃蟹大锅烩',
					url: '/static/gift1.png',
					tip: '可团购 · 免预约 · 周一至周日',
					pay: 155,
					summary: '海鲜都很新鲜',
					discount: 7.7
				}, {
					name: '螃蟹大锅烩',
					url: '/static/gift1.png',
					tip: '可团购 · 免预约 · 周一至周日',
					pay: 155,
					summary: '海鲜都很新鲜',
					discount: 7.7
				}, {
					name: '螃蟹大锅烩',
					url: '/static/gift1.png',
					tip: '可团购 · 免预约 · 周一至周日',
					pay: 155,
					summary: '海鲜都很新鲜',
					discount: 7.7
				}]
			};
		},
		created() {
			this.safeTop = GetSystemInfo().safeArea.top;
		},
		methods: {
			back() {
				uni.navigateBack()
			}
		},
		onLoad() {},
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

						&-active {
							color: #FD7A21;
							font-weight: 700;
							font-family: '微软雅黑 Bold', '微软雅黑 Regular', '微软雅黑', sans-serif;
						}
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

									&-summary {
										@extend .u42-tip;
										color: #FFBB03;
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
