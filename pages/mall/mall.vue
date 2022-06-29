<template>
	<view class="mall">
		<common-tree-select :leftList="leftList" @changeLeft="changeLeft">
			<view class="mall-right">
				<!-- <image src="/static/home1.png" mode="aspectFill" class="u23-img"></image> -->
				<uni-row :gutter="20">
					<view class="goods">
						<uni-col :span="12" v-for="item,index in goods" :key="index">
							<view class="goods-item">
								<image :src="item.picUrl" mode="aspectFill" class="goods-img"
									@click="openPage(item,index)"></image>
								<view class="goods-title">{{item.name}}</view>
								<view class="u27">
									<text class="goods-pay">￥{{item.retailPrice}}/{{item.unit}}</text>
									<image src="../../static/mall2.svg" mode="aspectFill"
										class="goods-add animate__animated"
										:class="[{'animate__heartBeat':times > 0 && addIndex === index}]"
										@click="add(item,index)">
									</image>
								</view>
							</view>
						</uni-col>
					</view>
				</uni-row>
			</view>
		</common-tree-select>
		<navigator url="/pages/mall/mall-cart" hover-class="navigator-hover">
			<view class="btn-cart">
				<image src="/static/mall9.svg" mode="aspectFill" class="u58-img"></image>
			</view>
		</navigator>
	</view>
</template>

<script>
	import {
		OpenPage
	} from '@/common/fun.js'
	export default {
		data() {
			return {
				times: 0,
				addIndex: -1,
				leftList: [],
				goods: [],
				page: 1,
				total: 0,
			};
		},
		onLoad() {
			this.getCategory()
		},
		methods: {
			changeLeft(val) {
				this.goods = [];
				this.page = 1;
				this.total = 0;
				this.getGoods(val.value)
			},
			openPage(item, index) {
				OpenPage(`/pages/mall/detail?id=${item.id}`)
			},
			add(item, index) {
				this.times++;
				this.addIndex = index;
				this.$store.dispatch('ADD_MALL_CART', item)
				setTimeout(() => {
					this.times = 0;
				}, 1000)
			},
			async getCategory() {
				try {
					const res = await this.$http(this.$API.getCategoryList);
					this.leftList = res.data;
					this.getGoods(res.data[0].value)
				} catch (e) {
					//TODO handle the exception
				}
			},
			async getGoods(pid) {
				let {
					page,
					cityCode
				} = this.$data;
				try {
					const res = await this.$http(
						`${this.$API.getGoodsList}?limit=10&page=${page}&pid=${pid}`);
					this.total = res.data.total;
					this.goods = this.goods.concat(res.data.items);
				} catch (e) {
					//TODO handle the exception
				}
			},
		}
	}
</script>

<style lang="scss" scoped>
	.mall {
		background-color: rgba(237, 240, 247, 1);

		.mall-right {
			margin: 0 20rpx;

			.u23-img {
				width: 100%;
				height: 166rpx;
			}

			.goods {
				@extend .default-flex;
				flex-wrap: wrap;
				// margin-top: 50rpx;

				.goods-item {
					background-color: rgba(255, 255, 255, 1);
					border-radius: 12rpx;
					padding: 20rpx;
					box-sizing: border-box;
					margin-bottom: 20rpx;

					.goods-img {
						height: 170rpx;
						width: 100%;
					}

					.goods-title {
						font-weight: 400;
						font-size: 24rpx;
						color: #000;
						display: -webkit-box;
						overflow: hidden;
						word-break: break-all;
						/* break-all(允许在单词内换行。) */
						text-overflow: ellipsis;
						/* 超出部分省略号 */
						-webkit-box-orient: vertical;
						-webkit-line-clamp: 1;
						/** 显示的行数 **/
					}

					.u27 {
						@extend .default-flex;
						justify-content: space-between;

						.goods-pay {
							@extend .goods-title;
							color: #D9001B;
						}

						.goods-add {
							width: 32rpx;
							height: 32rpx;
						}
					}

				}
			}
		}

		.btn-cart {
			position: fixed;
			right: 20rpx;
			bottom: 300rpx;
			width: 80rpx;
			height: 80rpx;
			@extend .default-flex;
			justify-content: center;
			background-color: rgb(253, 122, 33);
			border-radius: 50%;

			.u58-img {
				width: 46rpx;
				height: 41rpx;
			}
		}
	}
</style>
