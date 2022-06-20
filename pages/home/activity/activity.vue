<template>
	<view>
		<view class="u17" v-for="item,index in list" :key="item.id">
			<navigator :url="`/pages/home/activity/detail?id=${item.id}`" hover-class="none">
				<image :src="item.url" mode="aspectFill" class="u17-img"></image>
				<view class="u17-box">
					<view class="u17-box-title">{{item.name}}</view>
					<view class="u17-box-text">
						<rich-text :nodes="item.content"></rich-text>
					</view>
				</view>
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
						list
					} = this.$data;
					const res = await this.$http(`${this.$API.getAdList}?limit=10&page=${page}`);
					this.list = list.concat(res.data.items);
					this.total = res.data.total;
				} catch (e) {
					//TODO handle the exception
				}
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
		&-img {
			height: 428rpx;
			width: 100%;
		}

		&-box {
			padding: 0 30rpx;
			margin-bottom: 20px;

			&-title {
				font: 700 32rpx/30rpx '微软雅黑 Bold', '微软雅黑 Regular', '微软雅黑', sans-serif;
				color: #333;
				margin: 20rpx 0;
			}

			&-text {
				font: 400 20rpx/30rpx 'Arial Normal', 'Arial', sans-serif;
				color: #333;
			}
		}
	}
</style>
