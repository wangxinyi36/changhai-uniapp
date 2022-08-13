<template>
	<view class="evaluate">
		<view class="u210">
			<view class="u210-title">评分</view>
			<view class="u21-grade">
				<uni-rate v-model="grade" @change="onChange" />
			</view>
		</view>
		<view class="u210">
			<view class="u210-title">评价内容</view>
			<view class="u210-textarea">
				<textarea v-if="type == 0" v-model="formData.content" maxlength="-1" class="u209" placeholder="请输入评价内容"
					placeholder-class="placeholder-class" :disabled="detail.id ? true : false" />
				<textarea v-if="type > 0" v-model="formData2.comment" maxlength="-1" class="u209" placeholder="请输入评价内容"
					placeholder-class="placeholder-class" :disabled="detail.id ? true : false" />
			</view>
		</view>
		<view class="u210">
			<view class="u210-title">上传图片</view>
			<view class="u244">
				<uni-file-picker v-model="url" @select="select" @delete="deletePic" @success="success"
					@progress="progress">
					<!-- 					:readonly="detail.id ?true :false"> -->
				</uni-file-picker>
			</view>
		</view>

		<view class="bottom">
			<view class="btn" @click="submit">立即评价</view>
		</view>
	</view>
</template>

<script>
	import {
		upload
	} from '@/common/http.js'
	import {
		showToast,
		getStorage
	} from '@/common/fun.js'
	export default {
		data() {
			return {
				url: [], //{ "name": "file.txt", "extname": "txt", "url": "https://xxxx"  }
				count: 0, //图片数量
				grade: 5, //分数
				formData: {
					content: "",
					hasPicture: false,
					headimage: "",
					id: 0, //评论id
					nickname: "",
					picUrls: [],
					star: 5,
					type: 0,
					userId: 0,
					valueId: 0, //商品id
				},
				formData2: {
					ordersn: "",
					comment: "",
					score: 5,
					picurls: []
				},
				detail: {},
				id: '',
				wechat_userInfo: {},
				type: -1, //0商城 >0票付通
			};
		},
		onLoad(options) {
			this.id = options.id || '';
			this.wechat_userInfo = getStorage('wechat_userInfo');
			this.formData.headimage = this.wechat_userInfo.avatarUrl;
			this.formData.nickname = this.wechat_userInfo.nickName;
			this.formData.userId = this.wechat_userInfo.userId;

			this.formData2.ordersn = options.orderSn || '';

			this.formData.valueId = options.id || '';
			this.type = options.type;
		},
		methods: {
			async submit() {
				try {
					let {
						formData,
						count,
						url,
						type,
						formData2
					} = this.$data
					if (type == 0 && formData.content.length <= 0) {
						showToast('请输入评价内容~')
						return;
					}
					if (type > 0 && formData2.comment.length <= 0) {
						showToast('请输入评价内容~')
						return;
					}
					if (count > 0) {
						formData.hasPicture = true;
						formData.picUrls = url.map(item => {
							return item.url
						})
						formData2.picurls = formData.picUrls;
					}
					let result = {}
					if (type > 0) {
						result = await this.$http(this.$API.postCommentSave, formData2, 'POST');
					} else {
						result = await this.$http(this.$API.postComment, formData, 'POST');
					}
					if (result.errno == 0) {
						showToast('提交成功~');
						setTimeout(() => {
							uni.navigateBack()
						}, 1500)
						return;
					}
					showToast(result.errmsg);
				} catch (e) {
					console.log(e)
					//TODO handle the exception
				}
			},
			async select(e) {
				uni.showLoading({
					title: '上传中...',
					mask: true,
				})
				for (let i = 0; i < e.tempFiles.length; i++) {
					try {
						let {
							url
						} = this.$data;
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
				uni.hideLoading();
				showToast('上传成功~')
				this.count = this.url.length;
			},
			async deletePic(e) {
				let {
					url
				} = this.$data;
				let index = this.url.findIndex(item => item == e.tempFile);
				url.splice(index, 1)
				this.url = url;
				this.count = this.url.length;
			},
			onChange(e) {
				this.grade = e.value;
				this.type > 0 ? this.formData2.score = e.value : this.formData.star = e.value;
			}
		}
	}
</script>

<style lang="scss" scoped>
	.evaluate {
		padding: 20rpx;

		.u210 {
			margin-bottom: 10rpx;

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
