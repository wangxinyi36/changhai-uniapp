<template>
	<view class="common-food-dropdown">
		<view class="u34">
			<view class="u33">
				<view class="u34-box" @click="open(1)">
					<view class="u34-box-text" :style="{color:tabIndex == 1 ? color : ''}">位置</view>
					<uni-icons :type="tabIndex == 1 ? 'top' : 'bottom'" size="16"
						:color="tabIndex == 1 ? color : '#333'"></uni-icons>
				</view>
				<view class="u34-box" @click="open(2)">
					<view class="u34-box-text" :style="{color:tabIndex == 2 ? color : ''}">价格范围</view>
					<uni-icons :type="tabIndex == 2 ? 'top' : 'bottom'" size="16"
						:color="tabIndex == 2 ? color : '#333'"></uni-icons>
				</view>
				<view class="u34-box" @click="open(3)">
					<view class="u34-box-text" :style="{color:tabIndex == 3 ? color : ''}">筛选条件</view>
					<uni-icons :type="tabIndex == 3 ? 'top' : 'bottom'" size="16"
						:color="tabIndex == 3 ? color : '#333'"></uni-icons>
				</view>
			</view>
		</view>

		<uni-popup ref="popup" type="top" @close="cancel" @maskClick="cancel">
			<view class="condition" v-if="tabIndex == 1">
				<view class="u75">我的附近</view>
				<view class="u76">
					<view class="u76-box" v-for="item,index in regions" :key="index">
						<view class="u76-tag" :class="{'u76-tag-active':tabIndex == 1 && index == tagIndex}"
							@click="select(index)">{{item}}</view>
					</view>
				</view>
				<view class="bottom">
					<view class="btn-box">
						<view class="btn-box-cancel" @click="cancel">取消</view>
						<view class="btn-box-confirm" :style="{background:background}" @click="confirm">确定</view>
					</view>
				</view>
			</view>

			<view class="condition" v-if="tabIndex == 2">
				<view class="u75">人均价格</view>
				<view class="u76 u77">
					<view class="u76-box" v-for="item,index in price" :key="index">
						<view class="u76-tag" :class="{'u76-tag-active':tabIndex == 2 && index == tagIndex}"
							@click="select(index)">{{item}}</view>
					</view>
				</view>
				<view class="bottom">
					<view class="btn-box">
						<view class="btn-box-cancel" @click="cancel">取消</view>
						<view class="btn-box-confirm" :style="{background:background}" @click="confirm">确定</view>
					</view>
				</view>
			</view>

			<view class="condition" v-if="tabIndex == 3">
				<view class="u75">地区</view>
				<view class="u76">
					<view class="u76-box" v-for="item,index in room" :key="index">
						<view class="u76-tag" :class="{'u76-tag-active':tabIndex == 3 && index == tagIndex2}"
							@click="select2(index)">{{item}}</view>
					</view>
				</view>
				<view class="bottom">
					<view class="btn-box">
						<view class="btn-box-cancel" @click="cancel">取消</view>
						<view class="btn-box-confirm" :style="{background:background}" @click="confirm">确定</view>
					</view>
				</view>
			</view>
		</uni-popup>

	</view>
</template>

<script>
	export default {
		name: "common-food-dropdown",
		props: ['color', 'background'],
		data() {
			return {
				tabIndex: 0, //条件
				tagIndex: -1, //条件下面的tag
				tagIndex2: -1, //条件下面的tag
				regions: ['附近', '500m', '1km', '3km', '5km', '10km'],
				price: ['100', '200', '300', '400'],
				room: ['大长山岛', '小长山岛', '獐子岛', '广鹿岛', '海洋岛镇']
			};
		},
		mounted() {},
		methods: {
			open(val) {
				this.tabIndex = val;
				this.tagIndex = -1;
				this.tagIndex2 = -1;
				this.$refs.popup.open('top')
			},
			cancel() {
				this.tabIndex = 0;
				this.tagIndex = -1;
				this.tagIndex2 = -1;
				this.$refs.popup.close()
			},
			confirm() {
				this.cancel()
			},
			select(index) {
				this.tagIndex = index;
			},
			select2(index) {
				this.tagIndex2 = index;
			}
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

					&-active {
						color: #4FD7EA;
					}
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
					width: 128rpx;
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
						background: -webkit-linear-gradient(0.23deg, rgba(255, 255, 255, 1) 0%, rgba(49, 208, 230, 1) 100%);
						color: #fff
					}
				}
			}
		}


	}
</style>
