<template>
	<view>
		<uni-list>
			<uni-list-item title="头像">
				<template v-slot:footer>
					<uni-file-picker limit="1" v-model="avatar" return-type="object" :del-icon="false" disable-preview
						mode="grid" :imageStyles="imageStyles" file-mediatype="image" @select="select">
					</uni-file-picker>
				</template>
			</uni-list-item>
			<uni-list-item title="修改昵称">
				<template v-slot:footer>
					<input type="text" v-model="userForm.nickname" placeholder="编辑昵称" class="nickname"
						placeholder-class="nickname-placeholder">
				</template>
			</uni-list-item>
		</uni-list>

		<view class="u98">
			<view class="u98-btn" @click="save">保存更改</view>
		</view>
	</view>
</template>

<script>
	import {
		getStorage,
		showToast,
		setStorage,
		sendEvent
	} from '@/common/fun.js'
	import {
		upload
	} from '@/common/http.js'
	export default {
		data() {
			return {
				userInfo: {},
				avatar: {},
				imageStyles: {
					width: 50,
					height: 50,
					border: {
						radius: '50%'
					}
				},
				userForm: {
					id: '',
					avatar: '',
					nickname: ''
				}
			};
		},
		onLoad() {
			this.userInfo = getStorage('wechat_userInfo')
			Object.assign(this.userForm, {
				id: this.userInfo.userId,
				avatar: this.userInfo.avatarUrl,
				nickname: this.userInfo.nickName
			})
			this.avatar = {
				name: this.userInfo.nickName,
				extname: "png",
				url: this.userInfo.avatarUrl,
			}
		},
		methods: {
			async select(e) {
				try {
					const res = await upload(this.$API.postStorageCreate, e.tempFiles[0].path);
					this.avatar = {
						name: e.tempFiles[0].name,
						extname: e.tempFiles[0].extname,
						url: res,
					}
				} catch (e) {
					console.log("错误", e)
					//TODO handle the exception
				}
			},
			async save() {
				try {
					let form = JSON.parse(JSON.stringify(this.userForm))
					form.avatar = this.avatar.url;
					const result = await this.$http(this.$API.postAuthUpdate, form, 'POST');
					Object.assign(this.userInfo, {
						avatarUrl: result.data.avatar,
						nickName: result.data.nickname
					})
					setStorage('wechat_userInfo', this.userInfo)
					sendEvent(this, {
						isReload: true
					})
					uni.showToast({
						title: '更新成功！',
						icon: 'none',
						success(res) {
							setTimeout(() => {
								uni.navigateBack()
							}, 1500)
						}
					})
				} catch (e) {
					//TODO handle the exception
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	/deep/ .uni-list-item__container {
		align-items: center;
	}

	/deep/ .uni-file-picker {
		width: 100rpx;
		height: 100rpx;
	}

	/deep/ .uni-file-picker__container {
		margin: 0;
	}

	/deep/ .file-picker__box-content {
		margin: 0;
		border: none;
	}

	/deep/ .file-image {
		width: 100rpx;
		height: 100rpx;
	}

	.nickname {
		text-align: right;
		font: 400 normal 30rpx normal;
		color: #555;

		&-placeholder {
			font: 400 normal 24rpx normal;
			color: #D7D7D7;
		}
	}

	.u98 {
		width: 100%;
		position: fixed;
		bottom: 100rpx;

		&-btn {
			height: 80rpx;
			background-color: rgba(49, 208, 230, 1);
			border-radius: 121rpx;
			font-size: 24rpx;
			color: #FFFFFF;
			text-align: center;
			line-height: 80rpx;
			margin: 0 20px;
		}
	}
</style>
