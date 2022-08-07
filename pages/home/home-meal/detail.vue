<template>
	<view class="u-meal-detail">
		<view class="u25">
			<image :src="detail.uuimgPath" mode="aspectFill" class="u25-img"></image>
		</view>
		<view class="u24">
			<view class="u26">
				<view class="u26-top">
					<view class="u27">
						<image :src="detail.uuimgPath" mode="aspectFill" class="u27-img"></image>
						<view class="u27-right">
							<view class="u27-right-title">{{detail.uutitle}}</view>
							<view class="u27-right-star">
								<uni-rate v-model="detail.star" :readonly="true" :size="13" />
							</view>
							<view class="u27-right-time">营业时间：{{detail.uuruntime}}</view>
						</view>
					</view>
				</view>
				<view class="u26-bottom">
					<view class="u38">
						<uni-icons type="star-filled" size="18" color="#FFBB03"></uni-icons>
						<view class="u38-star">{{detail.star}}</view>
						<view class="u38-text" v-if="detail.startDelivery">起送{{detail.startDelivery}}元</view>
					</view>
					<text class="u39-text" v-for="tag,i in detail.ketKeywordList" :key="i">{{tag}}</text>
				</view>
			</view>

			<view class="u28">
				<view class="u24-tabs">
					<view class="u24-tabs-item" v-for="(item,i) in tabs" :key="i"
						:class="[{'u24-tabs-item-active': current == i}]" @click="change(i)">{{item}}</view>
				</view>
				<view class="content">
					<view v-if="current === 0" class="u49">
						<scroll-view scroll-y class="u49-left" :style="{height:scrollHeight + 'px'}">
							<view class="u49-left-item" :class="[{'u49-left-item-active':scrollIndex == index}]"
								v-for="item,index in foodTypeList" :key="item.foodType" @click="changeScroll(index)">
								{{item.foodTypeName}}
							</view>
						</scroll-view>
						<scroll-view class="u49-right">
							<view class="u49-right-item" v-for="item,index in wmFoodDetailVOList" :key="item.fuuid">
								<image :src="item.fuuimgPath" mode="aspectFill" class="u49-right-item-img"></image>
								<view class="u50">
									<view class="u50-name">{{item.fuutitle}}</view>
									<view class="u50-desc">{{item.desc}}</view>
									<view class="u50-box">
										<view class="u50-tags">
											<view class="u50-tag" v-for="tag,i in item.ketKeywordList" :key="i">{{tag}}
											</view>
										</view>
										<view class="u50-box-right">
											<view class="u50-box-right-price">￥{{item.uutprice/100}}</view>
											<image src="/static/mall2.svg" mode="aspectFill" class="u50-box-right-img"
												@click="add(item)">
											</image>
										</view>
									</view>

								</view>
							</view>
						</scroll-view>
					</view>
					<view v-if="current === 1">
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
										class="u58-item-imgs-pic" @click="preview(i,item.picurls)"></image>
								</view>
								<view class="u69" v-if="item.reply">商家回复：{{item.reply}}</view>
							</view>
						</view>
					</view>
					<view v-if="current === 2">
						<view class="u79">
							<uni-list :border="false">
								<uni-list-item title="配送服务 : 由商家提供服务"></uni-list-item>
								<uni-list-item :title="`配送时间 : ${detail.uuruntime}`"></uni-list-item>
							</uni-list>
						</view>
					</view>
				</view>
			</view>

		</view>

		<view class="meal-bottom" v-if="current === 0">
			<view class="bottom-box">
				<view class="bottom-box-left" @click="open">
					<uni-badge class="uni-badge-left-margin" :text="cartList.length" absolute="leftTop" size="normal">
						<image src="/static/u183.svg" mode="aspectFill" class="bottom-box-left-img"></image>
					</uni-badge>
					<view class="bottom-box-left-money">￥{{totalMoney/100}}</view>
				</view>
				<view class="bottom-box-right" @click="order">去结算</view>
			</view>
		</view>
		<uni-popup ref="popup" type="bottom" class="popup-meal">
			<view class="popup-content">
				<view class="u229"><text @click="clear">清空</text></view>
				<view class="u49-right popup-content-list">
					<view class="u49-right-item" v-for="item,index in cartList" :key="item.fuuid">
						<image :src="item.fuuimgPath" mode="aspectFill" class="u49-right-item-img"></image>
						<view class="u50">
							<view class="u50-name">{{item.fuutitle}}</view>
							<view class="u50-desc">{{item.desc}}</view>
							<view class="u50-box">
								<view class="u50-box-right-price">￥{{item.uutprice}}</view>
								<view class="u50-box-right">
									<image src="/static/mall11.svg" mode="aspectFill" class="u50-box-right-img"
										@click="reduceMeal(item,index)">
									</image>
									<view class="u50-box-right-count">{{item.count}}</view>
									<image src="/static/mall2.svg" mode="aspectFill" class="u50-box-right-img"
										@click="addMeal(item,index)">
									</image>
								</view>
							</view>

						</view>
					</view>
				</view>
			</view>
		</uni-popup>
	</view>
</template>


<script>
	import {
		GetSystemInfo,
		showToast,
		OpenPage,
		getStorage,
		WxLogin,
	} from '@/common/fun.js'
	export default {
		data() {
			return {
				id: '',
				detail: {},
				current: 0,
				tabs: ['点菜', '评价', '商家'],
				foodTypeList: [], //左
				wmFoodDetailVOList: [], //右
				scrollHeight: 0,
				scrollIndex: 0,
				cartList: [],
				evaluate: [],
				money: 0,
				wechat_userInfo: {}
			};
		},
		onLoad(options) {
			this.id = options.id;
			this.getDetail();
			this.postComments()
		},
		onShow() {
			this.wechat_userInfo = getStorage('wechat_userInfo')
		},
		computed: {
			totalMoney() {
				let {
					cartList
				} = this.$data;
				let money = 0;
				this.cartList.forEach(item => {
					let price = parseFloat(item.uutprice) * item.count; //单位是分
					money = price + money;
				})
				this.money = money;
				return money;
			}
		},
		methods: {
			async getDetail() {
				try {
					const {
						id
					} = this.$data;
					const result = await this.$http(this.$API.getProductWMDetail, {
						id
					});
					this.detail = result.data;
					this.foodTypeList = this.detail.foodTypeList;
					if (this.foodTypeList.length > 0) {
						this.wmFoodDetailVOList = this.foodTypeList[0].wmFoodDetailVOList
					}
					uni.setNavigationBarTitle({
						title: this.detail.uutitle
					})
					this.getNodeInfo()
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
						pageNum: 10
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
			order() {
				const _this = this;
				let {
					cartList,
					money,
					id,
					detail
				} = this.$data;

				if (this.wechat_userInfo) {
					if (cartList.length == 0) {
						showToast('购物车为空~')
						return;
					}
					if (money / 100 < detail.startDelivery) {
						showToast('不满起送费，请继续添加商品~')
						return;
					}
					OpenPage(`/pages/home/home-meal/pay`, {
						cartList,
						money,
						id
					}).then(res => {
						if (res.isReload) {
							_this.cartList = []
						}
					})
					return;
				}
				WxLogin(this);
			},
			change(index) {
				this.current = index;
			},
			preview(index, list) {
				uni.previewImage({
					urls: list,
					current: index,
				})
			},
			changeScroll(index) {
				this.scrollIndex = index;
				this.wmFoodDetailVOList = this.foodTypeList[index].wmFoodDetailVOList;
			},
			open() {
				this.$refs.popup.open('bottom')
			},
			clear() {
				this.cartList = []
			},
			add(item) {
				showToast('加入购物车成功~');
				let {
					cartList
				} = this.$data;
				let index = cartList.findIndex(el => el.fuuid == item.fuuid)
				if (index >= 0) {
					let meal = cartList[index];
					meal.count++;
					this.$set(cartList, index, meal)
				} else {
					item.count = 1;
					this.cartList.push(item)
				}
			},
			addMeal(item, index) {
				item.count++;
				this.$set(this.cartList, index, item)
			},
			reduceMeal(item, index) {
				if (item.count == 1) {
					this.cartList.splice(index, 1)
				} else {
					item.count--;
					this.$set(this.cartList, index, item)
				}
			},
			getNodeInfo() {
				const _this = this;
				const systemInfo = GetSystemInfo();
				const screenHeight = systemInfo.screenHeight;
				const windowHeight = systemInfo.windowHeight;
				const query = uni.createSelectorQuery().in(this);
				query.select('.u49').boundingClientRect(data => {
					_this.scrollHeight = windowHeight - data.top;
				}).exec();
			}
		}
	}
</script>

<style>
	page {
		background-color: rgba(237, 240, 247, 1);
	}
</style>
<style lang="scss" scoped>
	.u25 {
		height: 300rpx;
		width: 100%;

		&-img {
			width: 100%;
			height: 100%;
		}
	}

	.u24 {
		position: absolute;
		top: 100rpx;
		width: 100%;

		.u26 {
			padding: 20rpx;
			background-color: #fff;
			border-radius: 25rpx;

			&-top {
				background-color: #fff;
				border-bottom: 1px solid #f2f2f2;

				.u27 {
					@extend .default-flex;
					padding-bottom: 20rpx;

					&-img {
						width: 192rpx;
						height: 116rpx;
						border-radius: 20rpx;
						margin-right: 20rpx;
					}

					&-right {
						&-title {
							font: normal 400 32rpx/normal '微软雅黑', sans-serif;
							color: #333;
						}

						&-time {
							@extend .u27-right-title;
							font-size: 24rpx;
						}

						&-star {
							@extend .default-flex;
						}

						&-star-text {
							font: normal 400 24rpx/normal '微软雅黑', sans-serif;
							color: #aaa;
						}
					}
				}
			}

			&-bottom {
				.u38 {
					@extend .default-flex;

					&-star {
						font: normal 700 24rpx/normal 'Arial Negreta', 'Arial Normal', 'Arial', sans-serif;
						color: #ffbb03;
					}

					&-text {
						font: normal 400 24rpx/normal '微软雅黑', sans-serif;
						color: #aaa;
						margin-left: 20rpx;
					}
				}

				.u39-text {
					font: normal 400 24rpx/normal '微软雅黑', sans-serif;
					color: #aaa;
					margin-right: 20rpx;
				}
			}
		}

		&-tabs {
			@extend .default-flex;
			padding: 10rpx 30rpx;

			&-item {
				font: normal 400 32rpx/normal '微软雅黑', sans-serif;
				color: #333;
				margin-right: 50rpx;
			}

			.u24-tabs-item-active {
				color: #F59A23;
			}
		}

		.u49 {
			display: flex;

			&-left {
				width: 150rpx;
				background-color: #fff;
				margin-right: 30rpx;

				&-item {
					font: normal 400 24rpx/82rpx '微软雅黑', sans-serif;
					color: #333;
					text-align: center;
					height: 82rpx;
				}

				&-item-active {
					background-color: rgba(242, 242, 242, 1);
				}
			}

		}
	}

	.u49-right {
		flex: 1;
		margin-right: 20rpx;

		&-item {
			background-color: #fff;
			padding: 20rpx;
			border-radius: 20rpx;
			display: flex;
			margin-bottom: 20rpx;

			&-img {
				width: 174rpx;
				height: 132rpx;
				border-radius: 20rpx;
				margin-right: 10rpx;
			}

			.u50 {
				flex: 1;

				&-name {
					font: normal 400 32rpx/normal '微软雅黑', sans-serif;
					color: #333;
				}

				&-desc {
					font: normal 400 24rpx/normal '微软雅黑', sans-serif;
					color: #00000059;
				}

				&-box {
					@extend .default-flex;
					justify-content: space-between;

					&-right {
						@extend .default-flex;

						&-price {
							color: #D9001B;
							font: normal 400 24rpx/normal '微软雅黑', sans-serif;
						}

						&-img {
							width: 32rpx;
							height: 32rpx;
							margin-left: 20rpx;
						}

						&-count {
							margin-left: 20rpx;
						}
					}
				}

				&-tags {
					@extend .default-flex;
					margin-top: 12rpx;
				}

				&-tag {
					@extend .u50-desc;
					color: #F59A23;
					margin-right: 10rpx;
					border: 1px solid #F59A23;
					border-radius: 20rpx;
					padding: 0 4rpx;
				}
			}
		}
	}

	.u58 {
		margin-bottom: 120rpx;

		&-item {
			background-color: #fff;
			padding: 30rpx;
			border-radius: 20rpx;
			margin-bottom: 20rpx;

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

	.u79 {
		background-color: #fff;
		border-radius: 20rpx;
		padding: 10rpx;
	}

	.meal-bottom {
		width: 100%;
		position: fixed;
		bottom: 0;
		height: 100rpx;
		z-index: 100;
		padding-bottom: constant(safe-area-inset-bottom);
		padding-bottom: env(safe-area-inset-bottom);

		.bottom-box {
			height: 100%;
			border-radius: 375rpx;
			margin: 0 40rpx;
			@extend .default-flex;

			&-left {
				flex: 1;
				background-color: #000;
				border-radius: 375rpx 0 0 375rpx;
				height: 100%;
				@extend .default-flex;
				padding: 0 25rpx;

				&-img {
					width: 61rpx;
					height: 54rpx;
				}

				&-money {
					font: normal 400 32rpx/100rpx '微软雅黑', sans-serif;
					color: #fff;
					margin-left: 20rpx;
				}
			}

			&-right {
				background: linear-gradient(180deg, rgba(245, 154, 35, 1) 0%, rgba(237, 100, 33, 1) 100%);
				border-radius: 0 375rpx 375rpx 0;
				font: normal 400 24rpx/100rpx 'Arial Normal', 'Arial', sans-serif;
				color: #fff;
				height: 100%;
				width: 146rpx;
				text-align: center;
			}
		}
	}

	.popup-content {
		height: 500rpx;
		background-color: #fff;
		border-radius: 30rpx 30rpx 0 0;
		padding: 20rpx 0 110rpx 0;

		.u229 {
			font: normal 400 28rpx/normal '微软雅黑', sans-serif;
			color: #333;
			text-align: right;
			margin-right: 20rpx;
		}

		&-list {
			height: 450rpx;
			overflow-y: scroll;
		}
	}
</style>
