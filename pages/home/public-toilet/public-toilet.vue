<template>
	<view class="toilet">
		<view class="u0">
			<map class="u0-map" :markers="markers" :scale="10" @markertap="clickMark"></map>
		</view>
		<view class="u1">
			<view class="u86">筛选</view>
			<view class="u75">
				<view class="u75-item" :class="[{'u75-active': type == item.type }]" v-for="item,index in typeList"
					:key="index" @click="change(item)">{{item.label}}</view>
			</view>
		</view>
	</view>
</template>

<script>
	import {
		showToast
	} from '@/common/fun.js'
	import {
		getDrivingRoute
	} from '@/common/map.js'
	export default {
		data() {
			return {
				type: 1, //1 公厕
				address: [],
				markers: [], //标记点
				icons: ['', '/static/icon-wc.svg', '/static/icon-hospital.svg', '/static/icon-serve.svg'],
				typeList: [{
					type: '',
					label: '全部'
				}, {
					type: 1,
					label: '厕所'
				}, {
					type: 2,
					label: '游客服务中心'
				}, {
					type: 3,
					label: '医院'
				}]
			};
		},
		onLoad() {
			this.getAbj()
		},
		methods: {
			change(item) {
				this.type = item.type;
				this.getAbj()
			},
			async clickMark(e) {
				let {
					markerId
				} = e.detail;
				let mark = this.markers.find(item => item.id == markerId)
				getDrivingRoute(mark.pointLat, mark.pointLng);
				console.log(result)
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
						return;
					}
					this.markers = this.address.map(item => {
						return {
							id: item.id,
							// latitude: item.pointLat,
							// longitude: item.pointLng,
							latitude: item.pointLng,
							longitude: item.pointLat,
							title: item.point,
							iconPath: icons[type],
							width: 45,
							height: 45
						}
					})
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

			// &-item-acitve {
			// 	color: #31d0e6;
			// }
		}
	}
</style>
