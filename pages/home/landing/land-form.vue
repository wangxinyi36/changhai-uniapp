<template>
	<view>
		<uni-forms :rules="rules" ref="landForm" :modelValue="landFormData">
			<uni-forms-item label="是否本人填表" :label-width="100">
				<uni-data-checkbox v-model="landFormData.isOwn" :localdata="owns" />
			</uni-forms-item>
			<uni-forms-item label="姓名" label-position="top">
				<uni-easyinput v-model="landFormData.name" :clearable="false" placeholder="请输入姓名" />
			</uni-forms-item>
			<uni-forms-item label="性别" :label-width="50">
				<uni-data-checkbox v-model="landFormData.sex" :localdata="sexs" />
			</uni-forms-item>
			<uni-forms-item label="身份证号" label-position="top">
				<uni-easyinput v-model="landFormData.name" type="idcard" :clearable="false" placeholder="请输入身份证号" />
			</uni-forms-item>
			<uni-forms-item label="手机号" label-position="top">
				<uni-easyinput v-model="landFormData.name" type="number" maxlength="11" :clearable="false"
					placeholder="请输入手机号" />
			</uni-forms-item>
			<uni-forms-item label="上传健康码/行程码/核酸报告" label-position="top" :label-width="200">
				<view class="u54">(根据疫情防控有关要求，来自大连市的登岛人员需提供国务院行程码、健康码。来自大连市以外的登岛人员需提供国务院行程码、健康码以及48小时以内核酸报告。)</view>
				<uni-file-picker v-model="landFormData.imageValue" file-mediatype="image">
				</uni-file-picker>
			</uni-forms-item>
			<uni-forms-item label="进岛原因" label-position="top">
				<uni-easyinput v-model="landFormData.name" :clearable="false" placeholder="请输入进岛原因" />
			</uni-forms-item>
			<uni-forms-item label-position="top">
				<template slot="label">
					<view class="u60">进岛时间<text class="u54 u60-text">需要提前一天登岛报备</text></view>
				</template>
				<uni-easyinput v-model="landFormData.name" :clearable="false" placeholder="格式如2022.01.01 08:00" />
			</uni-forms-item>
			<uni-forms-item label="计划上船港口" label-position="top" :label-width="100">
				<uni-easyinput v-model="landFormData.name" :clearable="false" placeholder="请输入计划上船港口" />
			</uni-forms-item>
			<uni-forms-item label="进岛前居住地址" label-position="top" :label-width="110">
				<view class="u66" @click="open">请选择</view>
				<uni-popup ref="popup" type="bottom">
					<picker-view-column>
						<view class="item" v-for="(item,index) in years" :key="index">{{item}}年</view>
					</picker-view-column>
					<picker-view-column>
						<view class="item" v-for="(item,index) in months" :key="index">{{item}}月</view>
					</picker-view-column>
					<picker-view-column>
						<view class="item" v-for="(item,index) in days" :key="index">{{item}}日</view>
					</picker-view-column>
				</uni-popup>

				<!-- <uni-data-picker placeholder="请选择" popup-title="请选择省市区" :localdata="dataTree"
					v-model="landFormData.city" @change="onchange" @nodeclick="onnodeclick" @popupopened="onpopupopened"
					@popupclosed="onpopupclosed">
				</uni-data-picker> -->
				<view class="u75">
					<uni-easyinput v-model="landFormData.name" type="textarea" :clearable="false" placeholder="详细地址" />
				</view>
			</uni-forms-item>
			<uni-forms-item label="进入我县居住地址" label-position="top" :label-width="120">
				<uni-easyinput v-model="landFormData.name" type="textarea" :clearable="false" placeholder="详细地址" />
			</uni-forms-item>
			<uni-forms-item label="进岛前15天活动轨迹" label-position="top" :label-width="140">
				<uni-easyinput v-model="landFormData.name" :clearable="false" placeholder="请输入进岛前15天活动轨迹" />
			</uni-forms-item>
			<uni-forms-item label="单位" label-position="top">
				<uni-easyinput v-model="landFormData.name" :clearable="false" placeholder="请输入单位" />
			</uni-forms-item>
			<uni-forms-item label="职业" label-position="top">
				<uni-easyinput v-model="landFormData.name" :clearable="false" placeholder="请输入职业" />
			</uni-forms-item>
			<uni-forms-item label="是否有48小时内核酸报告" :label-width="170">
				<uni-data-checkbox v-model="landFormData.isOwn" :localdata="report" />
			</uni-forms-item>
		</uni-forms>

		<view class="bottom">
			<view class="btn" @click="submit">申请</view>
		</view>
	</view>
</template>

<script>
	import {
		getRegionList
	} from '@/common/fun.js'
	export default {
		data() {
			return {
				rules: [],
				dataTree: [],
				landFormData: {
					name: '',
					age: '',
					introduction: '',
					sex: 2,
					hobby: [5],
					datetimesingle: 1627529992399,
					imageValue: [],
					city: []
				},
				owns: [{
					text: '本人',
					value: 0
				}, {
					text: '代填',
					value: 1
				}],
				report: [{
					text: '无',
					value: 0
				}, {
					text: '有',
					value: 1
				}],
				sexs: [{
					text: '男',
					value: 0
				}, {
					text: '女',
					value: 1
				}],
			};
		},
		created() {
			getRegionList()
		},
		methods: {
			open() {
				this.$refs.popup.open('bottom')
			},
			submit() {
				this.$refs.landForm.validate().then(res => {
					console.log('表单数据信息：', res);
				}).catch(err => {
					console.log('表单错误信息：', err);
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	/deep/ .uni-forms {
		padding: 0 20rpx;

		/deep/ .uni-forms-item__inner {
			padding-bottom: 0;
		}

		.u54 {
			font: 400 normal 24rpx normal;
			color: #B5B5B5;
			letter-spacing: 1rpx;
			margin-bottom: 20rpx;
		}

		.u60 {
			font: 400 normal 26rpx normal;
			color: #666;

			&-text {
				margin-left: 10rpx;
			}
		}

		.u75 {
			margin-top: 10rpx;
		}

		.u66 {
			border: 1px solid rgb(229, 229, 229);
			border-radius: 8rpx;
			height: 36rpx;
			color: #999;
			font-size: 12rpx;
			font-weight: 200;
			padding: 20rpx;
			margin-bottom: 10rpx;
		}
	}

	.bottom {
		padding: 0 20px;
		margin: 20px 0;

		.btn {
			height: 56rpx;
			background: rgba(49, 208, 230, 1);
			font: 400 normal 24rpx normal;
			color: #fff;
			text-align: center;
			line-height: 56rpx;
			border-radius: 12rpx;
		}
	}
</style>
