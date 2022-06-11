<template>
	<view>
		<view class="u242">
			<uni-nav-bar :title="title" leftIcon="left" :fixed="true" :border="false" backgroundColor="#0000"
				color="#ffff" @clickLeft="back">
			</uni-nav-bar>
			<image src="/static/home1.png" mode="aspectFill" class="u242-img"></image>
		</view>
		<view class="u243">
			<view class="u243-title">{{title}}</view>
			<view class="u243-text">海岛9人游+免费接送，景点一网打尽，装备齐全。</view>
		</view>
		<view class="u244">
			<view class="u244-tabs">
				<view class="u244-tab" :class="[{'u244-tab-active':tabIndex == index}]" v-for="item,index in tab"
					:key="index">{{item}}</view>
			</view>
			<view class="u264">
				<view class="u264-title">路线特色</view>
				<view class="u264-text">
					全程零购物零自费<br>
					精品住宿<br>
					祈祥园—园中最高处耸立一尊高6米的海神娘娘白色大理石雕像，为上岛客人送去平安吉祥。<br>
					三元宫—大连地区最大的道家宫观。
				</view>
			</view>
			<view class="u264">
				<view class="u264-title">行程安排</view>
				<view class="u264-box">
					<view class="u264-item">
						<view class="u264-item-title">
							<view class="u274">D1</view>
							<view class="u275">大长山岛</view>
						</view>
						<view class="u264-item-text">上午在岛内港口接站、入住、午餐；下午在沙洁水蓝的海滨浴场进行海浴和沙滩排球、拔河等活动；晚餐品尝纯正的海鲜；晚间在海边。
						</view>
					</view>
					<view class="u264-item">
						<view class="u264-item-title">
							<view class="u274">D2</view>
							<view class="u275">祈祥园+长海海参博物馆+三元店</view>
						</view>
						<view class="u264-item-text">
							上午游览集自然景观与人文景观为一体的平安吉祥地---祈祥园、世界首家海参博物馆——长海海参博物馆、参观辽南地区最大的道教场所——三元宫、象征海岛军民共建美好前景的双凤朝阳塔、海底旨水净化厂。
						</view>
					</view>
					<view class="u264-item">
						<view class="u264-item-title">
							<view class="u264-item-title">
								<view class="u274">D3</view>
								<view class="u275">乘船出海</view>
							</view>
						</view>
						<view class="u264-item-text">上午乘船出海，观赏海洋牧场并进行垂钓（也可以进行岸钓或网箱钓）；中午在口尝特色餐；中午进行海上人造沙滩活动，下午送团。</view>
					</view>
				</view>
			</view>
			<view class="u264">
				<view class="u264-title">地图</view>
				<view class="u264-map">
					<map class="u264-map-box" :latitude="latitude" :longitude="longitude">
					</map>
				</view>
			</view>

		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: '',
				tab: ['路线特色', '行程安排', '地图'],
				tabIndex: 0,
				latitude: 39.909,
				longitude: 116.39742,
			};
		},
		onLoad(options) {
			console.log(options)
			this.title = options.title;
		},
		methods: {
			back() {
				uni.navigateBack()
			}
		}
	}
</script>

<style lang="scss" scoped>
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
		padding: 50rpx 30rpx 10rpx 30rpx;
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
		padding: 10rpx 30rpx;


		&-tabs {
			@extend .default-flex;
			margin-bottom: 40rpx;
		}

		&-tab {
			margin-right: 30rpx;
			font: normal 400 32rpx/normal '微软雅黑', sans-serif;
			color: #333;

			&-active {
				color: #31D0E6;
				font-family: '微软雅黑 Bold', '微软雅黑 Regular', '微软雅黑', sans-serif;
				font-weight: 700;
			}
		}
	}

	.u264 {
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
