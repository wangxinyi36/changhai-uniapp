<template>
	<view>
		<view class="u1">
			<uni-forms ref="form" :rules="rules" :model="dataForm">
				<uni-forms-item label="姓名" name="passengerName">
					<uni-easyinput v-model="dataForm.passengerName" :inputBorder="false" :clearable="false"
						placeholder="请输入姓名" />
				</uni-forms-item>
				<uni-forms-item label="身份证号" name="passengerIdCard">
					<uni-easyinput v-model="dataForm.passengerIdCard" :inputBorder="false" type="idcard"
						:clearable="false" placeholder="请输入身份证号" maxlength="18" />
				</uni-forms-item>
			</uni-forms>
			<view class="bottom">
				<view class="bottom-clear" @click="clear('form')">清空</view>
				<view class="bottom-confirm" @click="confirm('form')">确定</view>
			</view>
		</view>
	</view>
</template>

<script>
	import {
		showToast
	} from '@/common/fun.js'
	export default {
		data() {
			return {
				rules: {
					passengerName: {
						rules: [{
							required: true,
							errorMessage: '姓名不能为空'
						}]
					},
					passengerIdCard: {
						rules: [{
							required: true,
							errorMessage: '身份证号不能为空'
						}]
					}
				},
				dataForm: {
					passengerName: '',
					passengerIdCard: '',
				}
			};
		},
		onLoad() {
			const _this = this;
			const eventChannel = this.getOpenerEventChannel();
			eventChannel.on('sendParams', data => {
				if (data) {
					_this.dataForm = data;
				}
			})
		},
		methods: {
			confirm(ref) {
				let _this = this;
				this.$refs[ref].validate().then(async res => {
					try {
						let {
							dataForm
						} = _this.$data;

						if (dataForm.id) {
							const result = await _this.$http(_this.$API.postPassengerUpdate, dataForm, 'POST');
							if (result.errno != 0) {
								showToast(result.errmsg);
								return;
							}
							showToast('编辑成功~');
						} else {
							const result = await _this.$http(_this.$API.postPassengerCreate, dataForm, 'POST');
							if (result.errno != 0) {
								showToast(result.errmsg);
								return;
							}
							showToast('添加成功~');
						}
						setTimeout(() => {
							const eventChannel = _this.getOpenerEventChannel();
							eventChannel.emit('getParams', {
								isReload: true
							})
							uni.navigateBack()
						}, 1500)
						console.log(result)
					} catch (e) {
						//TODO handle the exception
					}
				}).catch(err => {
					console.log('err', err);
				})
			},
			clear(ref) {
				this.$refs[ref].clearValidate(['name', 'idCard'])
				this.dataForm = {
					name: '',
					idCard: ''
				}
			}
		}
	}
</script>

<style>
	page {
		background-color: #F0F1F5;
	}
</style>
<style lang="scss" scoped>
	.u1 {
		background-color: #fff;
		padding: 53rpx 36rpx;
		border-radius: 9rpx;
		margin: 18rpx;

		.bottom {
			@extend .default-flex;
			margin-top: 100rpx;

			&-clear {
				width: 217rpx;
				height: 76rpx;
				border-radius: 7rpx;
				border: 2rpx solid #666666;
				font: normal 400 36rpx/76rpx PingFangSC-Regular, PingFang SC;
				color: #666666;
				text-align: center;
				margin-right: 25rpx;
			}

			&-confirm {
				flex: 1;
				height: 76rpx;
				background-color: #397EF7;
				border-radius: 7rpx;
				font: normal 400 36rpx/76rpx PingFangSC-Regular, PingFang SC;
				color: #fff;
				text-align: center;
			}
		}
	}
</style>
