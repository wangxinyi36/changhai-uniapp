<template>
	<view class="toilet">
		<view class="u0">
			<map class="u0-map" :longitude="longitude" :latitude="latitude" :markers="markers" :polyline="polyline"
				:scale="10" @markertap="clickMark"></map>
		</view>
		<view class="u1">
			<view class="u86">筛选</view>
			<view class="u75">
				<view class="u75-item" :class="[{'u75-active': type == item.type }]" v-for="item,index in typeList"
					:key="index" @click="change(item)">{{item.typeName}}</view>
			</view>
			<view class="u33" v-if="distance > 0">
				<view class="u33-distance">距离约为{{distance}}米，加把劲就到了</view>
				<button class="u33-btn" @click="leave">出发</button>
			</view>
		</view>

	</view>
</template>

<script>
	import {
		showToast,
		getStorage,
		getAddressAuthorize
	} from '@/common/fun.js'
	import {
		getDrivingRoute
	} from '@/common/map.js'
	export default {
		data() {
			return {
				currentPoint: {},
				isShow: false,
				type: 1, //1 公厕
				address: [],
				markers: [], //标记点
				longitude: 0,
				latitude: 0,
				icons: ['', '/static/icon-wc.svg', '/static/icon-hospital.svg', '/static/icon-serve.svg'],
				typeList: [],
				polyline: [],
				distance: 0,
				markItem: {}
			};
		},
		created() {
			this.currentPoint = getStorage('currentPoint');
			this.longitude = this.currentPoint.longitude;
			this.latitude = this.currentPoint.latitude;
		},
		onLoad() {
			this.getAbj()
			this.getAbjTypes()
		},
		methods: {
			change(item) {
				this.type = item.type;
				this.getAbj();
			},
			async clickMark(e) {
				try {
					let {
						markerId
					} = e.detail;
					let mark = this.markers.find(item => item.id == markerId)
					this.markItem = mark;
					let result = await getDrivingRoute(parseFloat(mark.longitude), parseFloat(mark.latitude));
					this.polyline = result.polyline;
					this.distance = result.distance;
				} catch (e) {
					console.log(e)
					//TODO handle the exception
				}
			},
			async leave() {
				let {
					markItem
				} = this.$data;
				uni.openLocation({
					latitude: parseFloat(markItem.latitude),
					longitude: parseFloat(markItem.longitude),
					scale: 10,
					success(res) {
						console.log(res)
					}
				})
			},
			async getAbj() {
				try {
					const {
						type,
						icons
					} = this.$data;
					const res = await this.$http(`${this.$API.getAbjList}?type=${type}`);
					this.address = res.data.items;
					if (this.address.length === 0) {
						uni.showToast({
							title: '暂无内容',
							icon: 'none'
						});
						this.markers = [];
						this.markItem = {};
						this.polyline = [];
						this.distance = 0;
						return;
					}
					showToast(`发现${res.data.total}个地点~`)
					this.markers = this.address.map(item => {
						return {
							id: item.id,
							latitude: item.pointLat,
							longitude: item.pointLng,
							title: item.point,
							// iconPath: icons[item.type],
							width: 20,
							height: 30
						}
					})
					this.longitude = this.markers[0].longitude;
					this.latitude = this.markers[0].latitude;
				} catch (e) {
					//TODO handle the exception
				}
			},
			async getAbjTypes() {
				try {
					const res = await this.$http(this.$API.getAbjTypes);
					this.typeList = res.data;
				} catch (e) {
					//TODO handle the exception
				}
			},
		}
	}
</script>

<style lang="scss" scoped>
	.toilet {
		width: 100%;
		height: 100vh
	}

	.u0 {
		height: 500px;

		&-map {
			height: 100%;
			width: 100%;
		}
	}

	.u1 {
		height: calc(100vh - 500px);

		.u86 {
			padding-left: 20rpx;
			font: normal 700 30rpx/70rpx '微软雅黑 Bold', '微软雅黑 Regular', '微软雅黑', sans-serif;
			color: #333;
			height: 70rpx;
			border-bottom: 2rpx solid rgba(242, 242, 242, 1);
		}

		.u75 {
			@extend .default-flex;
			padding: 20rpx;

			&-item {
				font: normal 400 32rpx/normal '微软雅黑', sans-serif;
				color: #333;
				margin-right: 30rpx;
			}

			&-active {
				@extend .u75-item;
				color: #31d0e6;
			}
		}

		.u33 {
			height: 75rpx;
			@extend .default-flex;
			justify-content: space-between;
			border-top: 2rpx solid rgba(242, 242, 242, 1);
			position: fixed;
			width: 100%;
			bottom: 0;
			padding-bottom: constant(safe-area-inset-bottom);
			padding-bottom: env(safe-area-inset-bottom);

			&-distance {
				font: normal 400 30rpx/75rpx '微软雅黑', sans-serif;
				color: #333;
				padding-left: 20rpx;
			}

			&-btn {
				color: #fff;
				width: 197rpx;
				font: normal 400 24rpx/75rpx 'Arial Normal', 'Arial', sans-serif;
				text-align: center;
				background-color: rgba(49, 208, 230, 1);
				padding: 0;
				border-radius: unset;
				margin: 0;

				&::after {
					border: none;
					position: unset !important;
				}
			}
		}
	}
</style>
