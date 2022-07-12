<template>
	<view>
		<view class="u17" v-for="item,index in list" :key="item.id">
			<navigator :url="`/pages/home/activity/detail?id=${item.id}`" hover-class="none">
				<view class="u17-box">
					<view class="u17-box-title">{{item.name}}</view>
					<view class="u17-time">这里是内容</view>
				</view>
				<image :src="item.url" mode="aspectFill" class="u17-img"></image>
				<view class="u17-time">{{dealTime(item.updateTime)}}</view>
			</navigator>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: [],
				total: 0,
				page: 1,
			};
		},
		onLoad() {
			this.getAd()
		},
		methods: {
			async getAd() {
				try {
					const {
						page,
						list,
						total
					} = this.$data;
					if(total > 0 && total == list.length){
						return;
					}
					const res = await this.$http(`${this.$API.getAdList}?limit=10&page=${page}`);
					this.list = list.concat(res.data.items);
					this.total = res.data.total;
				} catch (e) {
					//TODO handle the exception
				}
			},
			dealTime(val) {
				return `${val[0]}-${val[1]}-${val[2]} ${val[3]}:${val[4]}`;
			},
		},
		onReachBottom() {
			this.page++;
			this.getAd()
		}
	}
</script>

<style lang="scss" scoped>
	.u17 {
		padding: 30rpx;
		border-bottom: 1px solid #f2f2f2;

		&-img {
			height: 350rpx;
			width: 100%;
			border-radius: 12rpx;
		}

		&-box {
			margin-bottom: 20rpx;

			&-title {
				font: 700 32rpx/40rpx '微软雅黑 Bold', '微软雅黑 Regular', '微软雅黑', sans-serif;
				color: #333;
				word-break: break-all;
				text-overflow: ellipsis;
				display: -webkit-box;
				-webkit-box-orient: vertical;
				-webkit-line-clamp: 2;
				overflow: hidden;
			}

			&-text {
				font: 400 20rpx/30rpx 'Arial Normal', 'Arial', sans-serif;
				color: #333;
			}
		}

		&-time {
			font: normal 400 24rpx/normal '微软雅黑', sans-serif;
			color: #b8b8b8;
		}
	}
</style>
