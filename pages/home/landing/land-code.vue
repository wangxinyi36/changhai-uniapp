<template>
	<view class="u205">
		<!-- <view class="u208">2022-5-13</view> -->
		<view class="u207">
			<image :src="detail.upUrl" mode="aspectFill" class="u207-img"></image>
			<!-- <u-qrcode ref="qrcode" canvas-id="qrcode" :value="detail" size="210"></u-qrcode> -->
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				detail: '-',
				id: ''
			};
		},
		onLoad(options) {
			this.id = options.id;
			this.getHealth()
		},
		methods: {
			async getHealth() {
				try {
					const {
						id
					} = this.$data;
					const res = await this.$http(`${this.$API.getHealth}?id=${id}`);
					this.detail = res.data;
					// this.detail = this.dealString(res.data)
				} catch (e) {
					console.log("错误", e)
					//TODO handle the exception
				}
			},
			dealString(obj) {
				let string = `
					是否本人填写：${obj.ifOwner == 0 ? '本人':'代填'}
					姓名：${obj.name}
					性别：${obj.sex == 0 ? '男':'女'}
					身份证号：${obj.idcard}
					手机号：${obj.mobile}
					上传健康码/行程码/核酸报告：${obj.upUrl}
					进岛原因：${obj.reason}
					进岛时间：${obj.uptime[0]}-${obj.uptime[1]}-${obj.uptime[2]} ${obj.uptime[3]}:${obj.uptime[4]}:${obj.uptime[5]}
					计划上船港口：${obj.upport}
					进岛前居住地址：${obj.upAddress}
					进岛前居住详细地址：${obj.upAddressDetail}
					进入我县居住地址：${obj.upAddressDetail}
					进入我县居住详细地址：${obj.downAddressDetail}
					进岛前15天活动轨迹：${obj.trace}
					单位：${obj.unit}
					职业：${obj.profession}
					是否有48小时内核酸报告：${obj.ifHealth == 0 ? '有':'无'}
				`
				return string;
			}
		}
	}
</script>

<style lang="scss" scoped>
	.u205 {
		@extend .default-flex;
		flex-direction: column;
		justify-content: center;

		.u208 {
			font: normal 400 32rpx/normal '微软雅黑', sans-serif;
			color: #333;
			margin: 30rpx 0;
		}

		.u207 {
			margin: 30rpx 0;

			&-img {
				width: 420rpx;
				height: 420rpx;
			}
		}
	}
</style>
