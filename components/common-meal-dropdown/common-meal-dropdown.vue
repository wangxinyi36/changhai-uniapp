<template>
	<view class="common-food-dropdown">
		<view class="u34">
			<view class="u33">
				<view class="u34-box" @click="open(1)">
					<view class="u34-box-text" :class="{'u34-box-text-active':tabIndex == 1}">位置</view>
					<uni-icons :type="tabIndex == 1 ? 'top' : 'bottom'" size="16"
						:color="tabIndex == 1 ? '#ff7100' : '#333'"></uni-icons>
				</view>
				<view class="u34-box" @click="open(2)">
					<view class="u34-box-text" :class="{'u34-box-text-active':tabIndex == 2}">价格范围</view>
					<uni-icons :type="tabIndex == 2 ? 'top' : 'bottom'" size="16"
						:color="tabIndex == 2 ? '#ff7100' : '#333'"></uni-icons>
				</view>
				<view class="u34-box" @click="open(3)">
					<view class="u34-box-text" :class="{'u34-box-text-active':tabIndex == 3}">筛选条件</view>
					<uni-icons :type="tabIndex == 3 ? 'top' : 'bottom'" size="16"
						:color="tabIndex == 3 ? '#ff7100' : '#333'"></uni-icons>
				</view>
			</view>
		</view>

		<uni-popup ref="popup" type="top" @close="cancel" @maskClick="cancel">
			<view class="condition" v-if="tabIndex == 1">
				<view class="u75">我的附近</view>
				<view class="u76">
					<view class="u76-box" v-for="item,index in regions" :key="index">
						<view class="u76-tag" :class="{'u76-tag-active':tabIndex == 1 && item.isActive}"
							@click="select(item)">{{item.name}}</view>
					</view>
				</view>
				<view class="bottom">
					<view class="btn-box">
						<view class="btn-box-cancel" @click="cancel">取消</view>
						<view class="btn-box-confirm" @click="confirm">确定</view>
					</view>
				</view>
			</view>

			<view class="condition" v-if="tabIndex == 2">
				<view class="u75">人均价格</view>
				<view class="u76 u77">
					<view class="u76-box" v-for="item,index in price" :key="item.name">
						<view class="u76-tag" :class="{'u76-tag-active':tabIndex == 2 && item.isActive}"
							@click="select(item)">{{item.name}}</view>
					</view>
				</view>
				<view class="bottom">
					<view class="btn-box">
						<view class="btn-box-cancel" @click="cancel">取消</view>
						<view class="btn-box-confirm" @click="confirm">确定</view>
					</view>
				</view>
			</view>

			<view class="condition" v-if="tabIndex == 3">
				<view class="u75">地区</view>
				<view class="u76">
					<view class="u76-box" v-for="item,index in room" :key="index">
						<view class="u76-tag" :class="{'u76-tag-active':tabIndex == 3 && item.isActive}"
							@click="select(item)">{{item.name}}</view>
					</view>
				</view>
				<view class="bottom">
					<view class="btn-box">
						<view class="btn-box-cancel" @click="cancel">取消</view>
						<view class="btn-box-confirm" @click="confirm">确定</view>
					</view>
				</view>
			</view>
		</uni-popup>

	</view>
</template>

<script>
	import {
		FOOD_PRICE,
		MEAL_DISTANCE
	} from '@/common/common.js'
	import {
		getAddressAuthorize,
		getStorage
	} from '@/common/fun.js'
	export default {
		name: "common-meal-dropdown",
		props: ['mealForm'],
		data() {
			return {
				tabIndex: 0, //条件
				regions: MEAL_DISTANCE,
				price: FOOD_PRICE,
				room: [],
				currentPoint: []
			};
		},
		mounted() {
			this.getRegions()
		},
		methods: {
			async getRegions() {
				try {
					const result = await this.$http(this.$API.getProductRegionList);
					this.room = result.data.items.map(item => {
						item.isActive = false;
						return item;
					});
				} catch (e) {
					console.log(e)
					//TODO handle the exception
				}
			},
			select(item) {
				switch (this.tabIndex) {
					case 1:
						this.regions = this.single(this.regions, item, 1);
						break;
					case 2:
						this.price = this.single(this.price, item, 2);
						break;
					case 3:
						this.room = this.single(this.room, item, 3);
						break;
				}
			},
			open(val) {
				this.tabIndex = val;
				this.$refs.popup.open('top')
			},
			async cancel() {
				await this.clear(this.tabIndex);
				this.tabIndex = 0;
				this.$refs.popup.close()
			},
			async confirm() {
				let obj = this.mealForm;
				await this.getFilter()
				this.$emit('searchQuery', obj)
				this.cancel()
			},
			// 取消-重置条件
			clear(index) {
				switch (index) {
					case 1:
						this.regions = this.regions.map(item => {
							if (!this.mealForm.distance) {
								item.isActive = false;
							} else {
								item.isActive = this.mealForm.distance == item.value ? true : false;
							}
							return item;
						})
						break;
					case 2:
						this.price = this.price.map(item => {
							if (!this.mealForm.price) {
								item.isActive = false;
							} else {
								item.isActive = this.mealForm.price == item.name ? true : false;
							}
							return item;
						})
						break;
					case 3:
						this.room = this.room.map(item => {
							if (!this.mealForm.cityCode) {
								item.isActive = false;
							} else {
								item.isActive = this.mealForm.cityCode == item.code ? true : false;
							}
							return item;
						})
						break;
				}
			},
			// 获取筛选条件
			async getFilter() {
				let region = this.regions.find(item => item.isActive)
				if (!region) {
					this.mealForm.distance = '';
				}
				if (region) {
					if (!getStorage('currentPoint')) {
						let currentPoint = await getAddressAuthorize();
						this.currentPoint = currentPoint;
					} else {
						this.currentPoint = getStorage('currentPoint');
					}
					this.mealForm.lat = this.currentPoint.latitude;
					this.mealForm.lng = this.currentPoint.longitude;
					this.mealForm.distance = region.value;
				}

				let pay = this.price.find(item => item.isActive);
				this.mealForm.price = pay ? pay.name : '';

				let house = this.room.find(item => item.isActive)
				this.mealForm.cityCode = house ? house.code : '';
			},
			// 选中条件
			single(list, item, num) {
				let newList = list.map(li => {
					if (num === 1 || num === 2) {
						li.isActive = li.name == item.name && !li.isActive ? true : false;
						return li;
					}
					if (num === 3) {
						li.isActive = li.id == item.id && !li.isActive ? true : false;
						return li;
					}
				})
				return newList;
			},
		},
		beforeDestroy() {
			this.price.map(item => {
				item.isActive = false;
				return;
			});
			this.regions.map(item => {
				item.isActive = false;
				return;
			});
		},
	}
</script>

<style lang="scss" scoped>
	.common-food-dropdown {
		background-color: #fff;
		width: 100%;
		position: sticky;
		top: 36px;
		z-index: 1;

		.sticky-head {
			position: sticky;
			top: 88rpx;
			width: 100%;
			background: #fff;
			z-index: 1;
		}

		.u34 {
			height: 86rpx;
			border-bottom: 1px solid rgba(215, 215, 215, 1);
			position: absolute;
			width: 100%;
			background: #fff;
			z-index: 100;

			.u33 {
				@extend .default-flex;
				justify-content: space-between;
				height: 100%;
				margin: 0 20px;
			}

			.u34-box {
				@extend .default-flex;

				&-text {
					font: normal 400 30rpx/normal '微软雅黑', sans-serif;
					color: #333;
					margin-right: 10rpx;
				}

				&-text-active {
					color: #ff7100;
				}
			}
		}


		.condition {
			margin-top: 160rpx;
			background: #fff;
			padding-bottom: 10rpx;

			.u75 {
				padding: 10rpx 0 0 20rpx;
				font: normal 400 30rpx/normal '微软雅黑', sans-serif;
				color: #333
			}

			.u76 {
				@extend .default-flex;
				flex-wrap: wrap;
				padding: 0 20rpx;

				&-box {
					width: 33.33%;
					@extend .default-flex;
				}

				.u76-box:nth-of-type(3n+1) {
					justify-content: flex-start;
				}

				.u76-box:nth-of-type(3n+2) {
					justify-content: center;
				}

				.u76-box:nth-of-type(3n+3) {
					justify-content: flex-end;
				}

				&-tag {
					background-color: #edf0f7;
					border-radius: 12rpx;
					font: normal 400 28rpx/48rpx '微软雅黑', sans-serif;
					color: #333;
					width: 160rpx;
					height: 48rpx;
					text-align: center;
					margin-top: 24rpx;
				}

				&-tag-active {
					background-color: rgba(255, 113, 0, 0.17);
				}
			}

			.u78 {
				justify-content: space-between;

				.u76-box {
					width: unset;
				}
			}

			.bottom {
				padding: 0 107rpx;
				margin: 20px 0 10px 0;

				.btn-box {
					@extend .default-flex;
					width: 100%;
					border: 1px solid rgba(215, 215, 215, 0.5);
					height: 72rpx;
					border-radius: 253rpx;

					&-cancel {
						flex: 1;
						border-radius: 253rpx 0 0 253rpx;
						background-color: #fff;
						text-align: center;
						height: 100%;
						line-height: 72rpx;
					}

					&-confirm {
						@extend .btn-box-cancel;
						border-radius: 0 253rpx 253rpx 0;
						background: -webkit-linear-gradient(0.23deg, rgba(255, 255, 255, 1) 0%, rgba(255, 113, 0, 1) 100%);
						color: #fff
					}
				}
			}
		}


	}
</style>
