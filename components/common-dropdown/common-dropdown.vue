<template>
	<view class="common-dropdown">
		<view class="u34">
			<view class="u33">
				<view class="u34-box" @click="open(1)">
					<view class="u34-box-text" :class="{'u34-box-text-active':tabIndex == 1}">位置区域</view>
					<uni-icons :type="tabIndex == 1 ? 'top' : 'bottom'" size="16"
						:color="tabIndex == 1 ? '#4FD7EA' : '#333'"></uni-icons>
				</view>
				<view class="u34-box" @click="open(2)">
					<view class="u34-box-text" :class="{'u34-box-text-active':tabIndex == 2}">价格范围</view>
					<uni-icons :type="tabIndex == 2 ? 'top' : 'bottom'" size="16"
						:color="tabIndex == 2 ? '#4FD7EA' : '#333'"></uni-icons>
				</view>
				<view class="u34-box" @click="open(3)">
					<view class="u34-box-text" :class="{'u34-box-text-active':tabIndex == 3}">筛选条件</view>
					<uni-icons :type="tabIndex == 3 ? 'top' : 'bottom'" size="16"
						:color="tabIndex == 3 ? '#4FD7EA' : '#333'"></uni-icons>
				</view>
			</view>
		</view>

		<uni-popup ref="popup" type="top" @close="cancel" @maskClick="cancel">
			<view class="condition" v-if="tabIndex == 1">
				<view class="u76">
					<view class="u76-box" v-for="item in regions" :key="item.regionId">
						<view class="u76-tag" :class="{'u76-tag-active':tabIndex == 1 && item.isActive}"
							@click="select(item)">{{item.name}}</view>
					</view>
				</view>
				<view class="bottom">
					<view class="btn-box">
						<view class="btn-box-cancel" @click="cancel(1)">取消</view>
						<view class="btn-box-confirm" @click="confirm">确定</view>
					</view>
				</view>
			</view>

			<view class="condition" v-if="tabIndex == 2">
				<view class="u75">价格区间</view>
				<view class="u76 u77">
					<view class="u76-box" v-for="item,index in price" :key="index">
						<view class="u76-tag" :class="{'u76-tag-active':tabIndex == 2 && item.isActive}"
							@click="select(item)">{{item.name}}</view>
					</view>
				</view>
				<view class="bottom">
					<view class="btn-box">
						<view class="btn-box-cancel" @click="cancel(2)">取消</view>
						<view class="btn-box-confirm" @click="confirm">确定</view>
					</view>
				</view>
			</view>

			<view class="condition" v-if="tabIndex == 3">
				<view class="u75">人数</view>
				<view class="u76 u78">
					<view class="u76-box" v-for="item,index in person" :key="index">
						<view class="u76-tag" :class="{'u76-tag-active':tabIndex == 3 &&  item.isActive}"
							@click="select(item)">{{item.name}}</view>
					</view>
				</view>
				<view class="u75">房型</view>
				<view class="u76 u78">
					<view class="u76-box" v-for="item in room" :key="item.type">
						<view class="u76-tag" :class="{'u76-tag-active':tabIndex == 3 && item.isActive}"
							@click="select2(item)">{{item.name}}</view>
					</view>
				</view>
				<view class="bottom">
					<view class="btn-box">
						<view class="btn-box-cancel" @click="cancel(3)">取消</view>
						<view class="btn-box-confirm" @click="confirm">确定</view>
					</view>
				</view>
			</view>
		</uni-popup>

	</view>
</template>

<script>
	import {
		PRICE_REGION,
		PERSON_COUNT,
		HOUSE_TYPE
	} from '@/common/common.js'
	export default {
		name: "common-dropdown",
		props: ['hotelForm'],
		data() {
			return {
				tabIndex: 0, //条件 默认0 位置1 价格2 筛选条件3
				regions: [], //位置
				price: PRICE_REGION,
				person: PERSON_COUNT,
				room: HOUSE_TYPE,
			};
		},
		mounted() {
			this.getRegions()
		},
		methods: {
			async getRegions() {
				try {
					const result = await this.$http(this.$API.getProductRegionList);
					this.regions = result.data.map(item => {
						item.isActive = false;
						return item;
					});
				} catch (e) {
					//TODO handle the exception
				}
			},
			open(val) {
				this.tabIndex = val;
				this.$refs.popup.open('top')
			},
			async cancel(value) {
				this.tabIndex = 0;
				if (value) {
					await this.clear(value);
				}
				this.$refs.popup.close()
			},
			async confirm() {
				let obj = this.hotelForm;
				await this.getFilter()
				this.$emit('searchQuery', obj)
				this.cancel()
			},
			select(item) {
				switch (this.tabIndex) {
					case 1:
						this.regions = this.single(this.regions, item, 1)
						break;
					case 2:
						this.price = this.single(this.price, item, 2)
						break;
					case 3:
						this.person = this.single(this.person, item, 3)
						break;
				}
			},
			select2(item) {
				this.room = this.single(this.room, item, 4)
			},
			// 选中条件
			single(list, item, num) {
				let newList = list.map(li => {
					if (num === 1) {
						li.isActive = li.regionId == item.regionId && !li.isActive ? true : false;
						return li;
					}
					if (num === 2 || num === 3 || num === 4) {
						li.isActive = li.name == item.name && !li.isActive ? true : false;
						return li;
					}
				})
				return newList;
			},
			// 取消-重置条件
			clear(index) {
				switch (index) {
					case 1:
						this.regions = this.regions.map(item => {
							item.isActive = item.regionId == this.hotelForm.regionId ? true : false;
							return item;
						})
						break;
				}
			},
			// 获取筛选条件
			getFilter() {
				let region = this.regions.find(item => item.isActive)
				this.hotelForm.regionId = region ? region.regionId : '';

				let pay = this.price.find(item => item.isActive);
				this.hotelForm.maxPrice = pay ? pay.max : '';
				this.hotelForm.minPrice = pay ? pay.min : '';

				let man = this.person.find(item => item.isActive)
				this.hotelForm.peopleNum = man ? man.count : '';

				let house = this.room.find(item => item.isActive)
				this.hotelForm.hourseType = house ? house.type : '';
			}
		},
	}
</script>

<style lang="scss" scoped>
	.common-dropdown {
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
					color: #4FD7EA;
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
					background-color: rgba(255, 255, 255, 0);
					border: 1rpx solid rgba(215, 215, 215, 1);
					border-radius: 36rpx;
					font: normal 400 28rpx/48rpx '微软雅黑', sans-serif;
					color: #333;
					width: 128rpx;
					height: 48rpx;
					text-align: center;
					margin-top: 24rpx;
				}

				&-tag-active {
					border-color: rgba(49, 208, 230, 1);
					background-color: rgba(49, 208, 230, 0.17);
				}
			}

			.u77 {
				.u76-tag {
					width: unset;
					height: unset;
					padding: 8rpx 16rpx;
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
						background: -webkit-linear-gradient(0.23deg, rgba(255, 255, 255, 1) 0%, rgba(49, 208, 230, 1) 100%);
						color: #fff
					}
				}
			}
		}


	}
</style>
