<template>
	<view>
		<view class="u1">
			<uni-forms ref="form" :rules="rules" :model="dataForm">
				<uni-forms-item label="姓名" name="name">
					<uni-easyinput v-model="dataForm.name" :inputBorder="false" :clearable="false"
						placeholder="请输入姓名" />
				</uni-forms-item>
				<uni-forms-item label="身份证号" name="idCard">
					<uni-easyinput v-model="dataForm.idCard" :inputBorder="false" type="idcard" :clearable="false"
						placeholder="请输入身份证号" maxlength="18" />
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
	export default {
		data() {
			return {
				rules: {
					name: {
						rules: [{
							required: true,
							errorMessage: '姓名不能为空'
						}]
					},
					idCard: {
						rules: [{
							required: true,
							errorMessage: '身份证号不能为空'
						}]
					}
				},
				dataForm: {
					name: '',
					idCard: ''
				}
			};
		},
		methods: {
			confirm(ref) {
				let _this = this;
				this.$refs[ref].validate().then(res => {
					const eventChannel = _this.getOpenerEventChannel();
					eventChannel.emit('getParams', {
						personal:_this.dataForm
					})
					uni.navigateBack()
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
