<template>
	<view class="evaluate">
		<view class="u210">
			<view class="u210-title">投诉内容</view>
			<view class="u210-textarea">
				<textarea value="" maxlength="-1" class="u209" placeholder="请输入投诉内容"
					placeholder-class="placeholder-class" />
			</view>
		</view>
		<view class="u210">
			<view class="u210-title">上传照片</view>
			<!-- <view class="u243">上传图片</view> -->
			<view class="u244">
				<uni-file-picker v-model="url" file-mediatype="image" @select="select" @delete="deletePic">
				</uni-file-picker>
			</view>
		</view>

		<view class="bottom">
			<view class="btn" @click="submit">立即投诉</view>
		</view>
	</view>
</template>

<script>
	import {
		upload
	} from '@/common/http.js'
	export default {
		data() {
			return {
				url: [], //{ "name": "file.txt", "extname": "txt", "url": "https://xxxx"  }
			};
		},
		methods: {
			async select(e) {
				for (let i = 0; i < e.tempFiles.length; i++) {
					try {
						const res = await upload(this.$API.postStorageCreate, e.tempFiles[i].path);
						this.url.push({
							name: e.tempFiles[i].name,
							extname: e.tempFiles[i].extname,
							url: res,
						})
					} catch (e) {
						console.log("错误", e)
						//TODO handle the exception
					}

				}
			},
			async deletePic(e) {
				let {
					url
				} = this.$data;
				let index = this.url.findIndex(item => item == e.tempFile);
				url.splice(index, 1)
				this.url = url;
			},
		}
	}
</script>

<style lang="scss" scoped>
	.evaluate {
		padding: 20rpx;

		.u210 {
			&-title {
				font: 400 normal 32rpx normal;
				color: #333;
			}

			&-textarea {
				border: 2rpx solid #edf0f7;
				border-radius: 12rpx;
				margin: 20rpx 0;
				height: 280rpx;
				padding: 20rpx;

				.u209 {
					width: 100%;
					height: 100%;
					font: 400 normal 28rpx normal;
					color: #515151;
				}

				.placeholder-class {
					font: 400 normal 24rpx;
					color: #BFBFBF;
				}
			}

			.u243 {
				@extend .u210-textarea;
				height: 143rpx;
				line-height: 143rpx;
				text-align: center;
				font: 400 normal 24rpx;
				color: #BFBFBF;
			}

			.u244 {
				margin-top: 20rpx;

				/deep/ .uni-file-picker__container {
					width: 100%;
					margin: 0;
				}
			}
		}

		.bottom {
			width: 100%;
			background-color: rgba(255, 141, 61, 1);
			border-radius: 120rpx;
			margin-top: 60rpx;

			.btn {
				height: 60rpx;
				line-height: 60rpx;
				font: 400 normal 32rpx;
				color: #FFFFFF;
				text-align: center;
			}
		}
	}
</style>
