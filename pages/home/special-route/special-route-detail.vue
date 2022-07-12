<template>
	<view>
		<view class="u22" :style="{height: 212 + safeTop + 'px',backgroundImage: `url(${bgImg})`}">
			<view class="u21" :style="{background:backgroundColor}">
				<view :style="{height:safeTop + 'px'}"></view>
				<view class="u22-nav">
					<uni-icons type="back" size="20" :color="color" @click="back"></uni-icons>
					<view class="u22-nav-title" :style="{color:color}">{{detail.name}}</view>
				</view>
			</view>
		</view>


		<view class="u243">
			<view class="u243-title">{{detail.name}}</view>
			<view class="u243-text">{{detail.brief}}</view>
		</view>

		<view class="u244">
			<scroll-view scroll-y="true" :style="{height:scrollHeight + 'px'}" :scroll-into-view="scrollViewId">
				<view class="u244-tabs">
					<view class="u244-tab" :class="[{'u244-tab-active':tabIndex == index}]" v-for="item,index in tab"
						:key="index" @click="change(index)">{{item}}</view>
				</view>
				<view class="u264" id="u264-0">
					<view class="u264-title">路线特色</view>
					<view class="u264-text">
						<rich-text :nodes="content"></rich-text>
					</view>
				</view>
				<view class="u264" id="u264-1">
					<view class="u264-title">行程安排</view>
					<view class="u264-box">
						<view class="u264-item" v-for="item,index in specifications" :key="index">
							<view class="u264-item-title">
								<view class="u274">D{{index+1}}</view>
								<view class="u275">{{item.specification}}</view>
							</view>
							<view class="u264-item-text">{{item.value}}</view>
						</view>
					</view>
				</view>
				<view class="u264" id="u264-2">
					<view class="u264-title">地图</view>
					<view class="u264-map">
						<map class="u264-map-box" :latitude="latitude" :longitude="longitude" :markers="markers">
						</map>
					</view>
				</view>
				<view class="" :style="{height:showHeight + 'px'}"></view>
			</scroll-view>
		</view>
	</view>
</template>

<script>
	import {
		GetSystemInfo,regContent
	} from '@/common/fun.js'
	export default {
		data() {
			return {
				safeTop: '',
				screenHeight: '',
				scrollHeight: '',
				scrollViewId: '',
				showHeight: '',

				backgroundColor: '#ffffff00',
				color: '#fff',
				bgImg: '',
				tab: ['路线特色', '行程安排', '地图'],
				tabIndex: 0,
				latitude: '',
				longitude: '',
				markers: [],
				id: '',
				detail: {},
				content: '',
				specifications: []
			};
		},
		created() {
			this.safeTop = GetSystemInfo().safeArea.top;
			this.screenHeight = GetSystemInfo().screenHeight
		},
		onLoad(options) {
			this.id = options.id;
			this.getTralDetail()
		},
		methods: {
			change(index) {
				this.tabIndex = index;
				this.scrollViewId = `u264-${index}`
			},
			back() {
				uni.navigateBack()
			},
			async getTralDetail() {
				try {
					const res = await this.$http(`${this.$API.getTralDetail}?id=${this.id}`);
					this.detail = res.data.goods;
					this.specifications = res.data.specifications;
					this.bgImg = this.detail.picUrl;
					this.content = regContent(this.detail.detail);
					this.latitude = parseFloat(this.detail.pointLat);
					this.longitude = parseFloat(this.detail.pointLng);
					this.markers = [{
						id: this.detail.id,
						latitude: this.latitude,
						longitude: this.longitude,
						iconPath: '/static/u115.svg',
						width: 20,
						height: 28
					}]
					let _this = this;
					uni.createSelectorQuery().select('.u244').boundingClientRect(rec => {
						let top = rec.top;
						_this.scrollHeight = _this.screenHeight - top + 8;
						_this.showHeight = top;
					}).exec()
				} catch (e) {
					//TODO handle the exception
				}
			},
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

<style lang="scss" scoped>
	.u22 {
		width: 100%;
		background-size: cover;
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

	.u242 {
		position: relative;
		height: 424rpx;

		&-img {
			height: 424rpx;
			width: 100%;
			position: absolute;
			top: 0;
		}
	}

	.u243 {
		padding: 30rpx 30rpx;
		border-bottom: 2rpx solid rgba(242, 242, 242, 1);

		&-title {
			font: normal 700 32rpx/normal '微软雅黑 Bold', '微软雅黑 Regular', '微软雅黑', sans-serif;
			color: #333;
		}

		&-text {
			font: normal 400 28rpx/normal '微软雅黑', sans-serif;
			color: #333;
			margin-top: 10rpx;
		}
	}

	.u244 {
		&-tabs {
			@extend .default-flex;
			margin-bottom: 40rpx;
			position: sticky;
			width: 100%;
			top: 0;
			background: #fff;
			padding: 10rpx 30rpx;
			z-index: 2;
		}

		&-tab {
			margin-right: 30rpx;
			font: normal 400 32rpx/normal '微软雅黑', sans-serif;
			color: #333;
		}

		.u244-tab-active {
			color: #31D0E6;
			font-family: '微软雅黑 Bold', '微软雅黑 Regular', '微软雅黑', sans-serif;
			font-weight: 700;
		}
	}

	.u264 {
		padding: 0 30rpx;

		&-title {
			font: normal 700 32rpx/normal '微软雅黑 Bold', '微软雅黑 Regular', '微软雅黑', sans-serif;
			color: #333;
			margin: 20rpx 0;
		}

		&-text {
			font: normal 400 28rpx/normal '微软雅黑', sans-serif;
			color: #333;
			letter-spacing: 1rpx;
		}

		&-box {
			border-left: 2rpx dashed #999;
		}

		&-item {
			margin: 40rpx 0 0 40rpx;

			&-title {
				font: normal 400 28rpx/normal '微软雅黑', sans-serif;
				color: #333;
				@extend .default-flex;

				.u274 {
					width: 40rpx;
					height: 40rpx;
					border-radius: 50%;
					background-color: rgb(0, 191, 191);
					@extend .default-flex;
					justify-content: center;
					color: #fff;
					font-size: 20rpx;
					position: absolute;
					left: 5px;
				}
			}

			&-text {
				@extend .u264-item-title;
				line-height: 32rpx;
				letter-spacing: 1rpx;
				margin-top: 15rpx;
			}
		}

		&-map {
			width: 100%;
			height: 370rpx;
			margin-bottom: 20rpx;

			&-box {
				width: 100%;
				height: 100%;
			}
		}
	}
</style>
