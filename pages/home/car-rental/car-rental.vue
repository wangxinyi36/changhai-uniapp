<template>
	<view class="car-rental">
		<common-tree-select :leftList="leftList" @changeLeft="changeLeft">
			<template>
				<view class="car-list">
					<view class="car-item" v-for="item,index in carList" :key="item.id">
						<view class="u14">
							<image :src="item.url" mode="aspectFill" class="u14-img"></image>
							<view class="u14-box">
								<view class="u9-text">{{item.vin}}</view>
								<span class="u10-text">{{item.detail}}</span>
								<view class="u12-text">{{`联系人：${item.name}`}}</view>
								<view class="u12-text">电话：<text class="u23-text">{{item.mobile}}</text> </view>
							</view>
						</view>
						<view class="u12-text">{{`地址：${item.address}`}}</view>
						<view class="u13">
							<text class="u13-text">{{item.price || ''}}</text>
							<image src="/static/home9.svg" class="u13-img" mode="aspectFill" @click="Call(item.mobile)">
							</image>
						</view>
					</view>
				</view>
			</template>
		</common-tree-select>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				activeIndex: 0,
				leftList: [],
				cityCode: '',
				carList: [],
				page: 1,
				carTotal: 0,
			};
		},
		onLoad(options) {
			this.getRegion()
		},
		methods: {
			changeLeft(val) {
				console.log(val)
				this.cityCode = val.code;
				this.page = 1;
				this.carList = []
				this.getCar()
			},
			Call(tel) {
				uni.makePhoneCall({
					phoneNumber: tel
				});
			},
			async getRegion() {
				try {
					const res = await this.$http(this.$API.getRegions);
					this.leftList = res.data.items;
					if (this.leftList.length > 0) {
						this.cityCode = this.leftList[0].code;
					}
					this.getCar()
				} catch (e) {
					//TODO handle the exception
				}
			},
			async getCar() {
				try {
					let {
						page,
						cityCode
					} = this.$data;
					const res = await this.$http(
						`${this.$API.getCarList}?cityCode=${cityCode}&limit=10&page=${page}`);
					this.carTotal = res.data.total;
					this.carList = this.carList.concat(res.data.items);
				} catch (e) {
					//TODO handle the exception
				}
			}
		},
		onReachBottom() {
			if (this.carTotal > 0 && this.carTotal == this.carList.length) {
				return;
			}
			this.page++;
			this.getCar()
		}
	};
</script>

<style lang="scss" scoped>
	.car-rental {
		background-color: rgba(237, 240, 247, 1);

		.car-list {
			margin: 0 20rpx;

			.car-item {
				background-color: #fff;
				border-radius: 12rpx;
				margin-bottom: 20rpx;
				padding: 20rpx;

				.u14 {
					display: flex;

					.u14-img {
						width: 200rpx;
						height: 200rpx;
					}

					.u14-box {
						margin-left: 20rpx;

						.u9-text {
							font-weight: 400;
							color: #333;
						}

						.u10-text {
							font-weight: 400;
							font-size: 24rpx;
							color: #B2B2B2;
							margin-right: 10rpx;
						}

						.u12-text {
							font-weight: 400;
							font-size: 28rpx;

							.u23-text {
								color: #FF8D3D;
							}
						}
					}

				}

				.u13 {
					@extend .default-flex;
					justify-content: flex-end;
					margin-top: 10rpx;

					.u13-text {
						font-weight: 400;
						font-size: 28rpx;
						color: #FF0000;
					}

					.u13-img {
						width: 54rpx;
						height: 54rpx;
						margin-left: 32rpx;
					}
				}

			}
		}
	}
</style>
