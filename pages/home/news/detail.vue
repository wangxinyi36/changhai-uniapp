<template>
	<view>
		<view class="u17">
			<view class="u17-box">
				<view class="u17-box-title">{{detail.title}}</view>
			</view>
			<!-- <image :src="detail.url" mode="aspectFill" class="u17-img"></image> -->
			<rich-text :nodes="content"></rich-text>
		</view>
	</view>
</template>

<script>
	import {
		regContent
	} from '@/common/fun.js'
	export default {
		data() {
			return {
				detail: {},
				id: '',
				content: ''
			};
		},
		onLoad(options) {
			this.id = options.id;
			this.getNewsDetail()
		},
		methods: {
			async getNewsDetail() {
				try {
					const {
						id
					} = this.$data;
					const res = await this.$http(`${this.$API.getNewsDetail}?id=${id}`);
					this.detail = res.data;
					this.content = regContent(res.data.content)
				} catch (e) {
					//TODO handle the exception
				}
			},
		},
	}
</script>

<style lang="scss" scoped>
	.u17 {
		padding: 30rpx;

		&-img {
			height: 428rpx;
			width: 100%;
		}

		&-box {
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
