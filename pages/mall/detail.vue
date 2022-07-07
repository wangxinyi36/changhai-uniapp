<template>
	<page-meta :page-style="'overflow:'+(show?'hidden':'visible')"></page-meta>
	<view class="mall-detail">
		<image :src="goodsDetail.picUrl" mode="aspectFill" class="u20-img"></image>
		<view class="u3">
			<view class="u22">
				<view class="u22-title">{{goodsDetail.name}}</view>
				<view class="u22-num">累计销售：{{goodsDetail.sales}}</view>
			</view>
			<view class="u21">￥{{goodsDetail.retailPrice}}/{{goodsDetail.unit}}</view>
			<view class="u23 u22-num">{{goodsDetail.brief}}</view>
		</view>

		<view class="u24">
			<view class="u24-title">服务</view>
			<view class="u24-tags">
				<view class="u24-tags-text" v-for="item,index in dealKeys(goodsDetail.keywords)" :key="index">{{item}}
				</view>
			</view>
		</view>

		<view class="u29">
			<view class="u29-title">关于运费</view>
			<view class="u29-text">{{goodsDetail.freight}}</view>
		</view>

		<view class="u1">
			<view class="u31">
				<view class="u31-title">用户评论({{comments_size}})</view>
				<navigator :url="`/pages/mall/comments?id=${goodsDetail.id}`" hover-class="none">
					<view class="u31-num">查看全部</view>
				</navigator>

			</view>
			<view class="comment-list">
				<common-comment v-for="item,index in comments" :key="index" :comment="item" from="mall">
				</common-comment>
			</view>
		</view>

		<view class="u42">
			<view class="u42-title">商品详情</view>
			<rich-text :nodes="goodsDetailContent" class="u42-img"></rich-text>
		</view>

		<view class="u43">
			<uni-goods-nav :fill="true" :options="options" :button-group="buttonGroup" @click="clickLeft"
				@buttonClick="clickBtn" />
		</view>
		<uni-popup ref="popup" type="bottom" @change="change">
			<view class="u120">
				<view class="u128">
					<view class="u128-title">加入购物车</view>
					<view class="u128-title" @click="clear">清空</view>
				</view>
				<view class="cart-list">
					<common-cart-goods v-for="item,index in goods" :key="index" :goods="item" @add="add" @sub="sub">
					</common-cart-goods>
				</view>
			</view>
		</uni-popup>


	</view>
</template>

<script>
	import {
		OpenPage,
		regContent,
		getStorage,
		setStorage,
		showToast
	} from '@/common/fun.js';
	import {
		mapMutations,
		mapState,
		mapGetters
	} from 'vuex'
	export default {
		data() {
			return {
				show: false, //滚动穿透禁止
				wechat_userInfo: {},
				id: '',
				comments: [],
				comments_size: 0,
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
				],
				goodsDetail: {},
				goodsDetailContent: ''
			};
		},
		onLoad(options) {
			this.id = options.id;
			this.getDetail()
			this.wechat_userInfo = getStorage('wechat_userInfo');
			this.GET_MALL_CART()
		},
		computed: {
			...mapState({
				goods: (state) => state.mallCart.mallSelectList
			})
		},
		methods: {
			...mapMutations(['GET_MALL_CART']),
			clickLeft(params) {
				let _this = this;
				if (this.wechat_userInfo) {
					this.$refs.popup.open('bottom');
					return;
				}
				uni.getUserProfile({
					desc: '需要获取您的个人信息',
					success(res) {
						uni.login({
							provider: 'weixin',
							success: async function(loginRes) {
								let data = {
									code: loginRes.code,
									shareUserId: 0,
									userInfo: {
										phone: "",
										registerDate: "",
										status: 0,
										userId: 0,
										userLevel: 0,
										userLevelDesc: "",
										...res.userInfo
									}
								}
								const result = await _this.$http(_this.$API.postLoginByWeixin, data,
									'POST');
								_this.wechat_userInfo = result.data.userInfo;
								setStorage('wechat_userInfo', result.data.userInfo)
							},
							fail(err) {
								console.log(err)
							}
						});
					},
					fail(err) {
						console.log(err)
					}
				})
			},
			change(e) {
				this.show = e.show
			},
			clear() {
				this.goods = []
			},
			add(item) {
				this.$store.dispatch('ADD_MALL_CART', item)
			},
			sub(item) {
				this.$store.dispatch('REDUCE_MALL_CART', item)
			},
			clickBtn(e) {
				let _this = this;
				if (this.wechat_userInfo) {
					let {
						index,
						content
					} = e;
					if (index === 0) {
						this.$store.dispatch('ADD_MALL_CART', this.goodsDetail)
					} else {
						OpenPage(`/pages/mall/order`, {
							goodsDetail: this.goodsDetail
						})
					}
					return;
				}
				uni.getUserProfile({
					desc: '需要获取您的个人信息',
					success(res) {
						uni.login({
							provider: 'weixin',
							success: async function(loginRes) {
								let data = {
									code: loginRes.code,
									shareUserId: 0,
									userInfo: {
										phone: "",
										registerDate: "",
										status: 0,
										userId: 0,
										userLevel: 0,
										userLevelDesc: "",
										...res.userInfo
									}
								}
								const result = await _this.$http(_this.$API.postLoginByWeixin, data,
									'POST');
								_this.wechat_userInfo = result.data.userInfo;
								setStorage('wechat_userInfo', result.data.userInfo)
							},
							fail(err) {
								console.log(err)
							}
						});
					},
					fail(err) {
						console.log(err)
					}
				})
			},
			dealKeys(val) {
				if (val) {
					return val.split(',')
				}
			},
			async getDetail() {
				let {
					id
				} = this.$data;
				try {
					const res = await this.$http(`${this.$API.getGoodsDetail}/${id}`);
					this.goodsDetail = res.data.goods;
					this.comments = res.data.comments;
					this.comments_size = res.data.comments_size;

					this.goodsDetailContent = regContent(res.data.goods.detail)
				} catch (e) {
					//TODO handle the exception
				}
			}
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
				display: flex;
				justify-content: space-between;

				&-title {
					font-weight: 700;
					color: #000000;
					font-size: 32rpx;
					flex: 1;
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
			display: flex;
			background-color: #fff;
			margin-top: 20rpx;
			padding: 20rpx;

			&-title {
				font: 400 normal 30rpx;
				color: #AAAAAA;
			}

			&-tags {
				margin-left: 16rpx;
				flex: 1;
				@extend .default-flex;
				flex-wrap: wrap;

				&-text {
					font: normal 400 24rpx/normal '微软雅黑', sans-serif;
					font-style: normal;
					color: rgba(248, 113, 113, 0.690196078431373);
					background-color: rgba(248, 113, 113, 0.231372549019608);
					margin-right: 20rpx;
					padding: 0 20rpx;
					margin-bottom: 16rpx;
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

				img {
					width: 100%;
				}
			}
		}

		.u43 {
			position: fixed;
			bottom: 0;
			width: 100%;
			background-color: #fff;
			z-index: 100;
			padding-bottom: constant(safe-area-inset-bottom);
			padding-bottom: env(safe-area-inset-bottom);
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
