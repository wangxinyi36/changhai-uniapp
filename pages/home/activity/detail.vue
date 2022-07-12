<template>
	<view>
		<view class="u17">
			<image :src="detail.url" mode="aspectFill" class="u17-img"></image>
			<view class="u17-box">
				<view class="u17-box-title">{{detail.name}}</view>
				<rich-text :nodes="detail.content"></rich-text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				detail: {},
				id: '',
			};
		},
		onLoad(options) {
			this.id = options.id;
			this.getAdRead()
		},
		methods: {
			async getAdRead() {
				try {
					const {
						id
					} = this.$data;
					const res = await this.$http(`${this.$API.getAdRead}?id=${id}`);
					this.detail = res.data;
				} catch (e) {
					//TODO handle the exception
				}
			},
		},
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
				font: 700 32rpx/40rpx '微软雅黑 Bold', '微软雅黑 Regular', '微软雅黑', sans-serif;
				color: #333;
				margin: 20rpx 0;
			}
		}
	}
</style>
