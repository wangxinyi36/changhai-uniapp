<template>
	<view>
		<uni-forms :rules="rules" ref="landForm" :modelValue="landFormData">
			<uni-forms-item label="是否本人填表" :label-width="100">
				<uni-data-checkbox v-model="landFormData.ifOwner" :localdata="owns" />
			</uni-forms-item>
			<uni-forms-item label="姓名" label-position="top">
				<uni-easyinput v-model="landFormData.name" :clearable="false" placeholder="请输入姓名" />
			</uni-forms-item>
			<uni-forms-item label="性别" :label-width="50">
				<uni-data-checkbox v-model="landFormData.sex" :localdata="sexs" />
			</uni-forms-item>
			<uni-forms-item label="身份证号" label-position="top">
				<uni-easyinput v-model="landFormData.idcard" type="idcard" :clearable="false" placeholder="请输入身份证号" />
			</uni-forms-item>
			<uni-forms-item label="手机号" label-position="top">
				<uni-easyinput v-model="landFormData.mobile" type="number" maxlength="11" :clearable="false"
					placeholder="请输入手机号" />
			</uni-forms-item>
			<uni-forms-item label="上传健康码/行程码/核酸报告" label-position="top" :label-width="200">
				<view class="u54">(根据疫情防控有关要求，来自大连市的登岛人员需提供国务院行程码、健康码。来自大连市以外的登岛人员需提供国务院行程码、健康码以及48小时以内核酸报告。)</view>
				<uni-file-picker v-model="landFormData.url" file-mediatype="image">
				</uni-file-picker>
			</uni-forms-item>
			<uni-forms-item label="进岛原因" label-position="top">
				<uni-easyinput v-model="landFormData.reason" :clearable="false" placeholder="请输入进岛原因" />
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
				<view class="u66" @click="open('popup')">请选择</view>
				<uni-popup ref="popup" type="bottom">
					<view class="u67">
						<view class="u67-cancel" @click="cancel('popup')">取消</view>
						<view class="u67-confirm" @click="confirm('popup')">确定</view>
					</view>
					<picker-view indicator-style="height: 50px;" :value="value" @change="bindChange" class="u168">
						<picker-view-column>
							<view class="u168-item" v-for="(item,index) in province" :key="index">{{item.text}}</view>
						</picker-view-column>
						<picker-view-column>
							<view class="u168-item" v-for="(item,index) in city" :key="index">{{item.text}}</view>
						</picker-view-column>
						<picker-view-column>
							<view class="u168-item" v-for="(item,index) in district" :key="index">{{item.text}}</view>
						</picker-view-column>
					</picker-view>
				</uni-popup>
				<view class="u75">
					<uni-easyinput v-model="landFormData.name" type="textarea" :clearable="false" placeholder="详细地址" />
				</view>
			</uni-forms-item>
			<uni-forms-item label="进入我县居住地址" label-position="top" :label-width="120">
				<view class="u66" @click="open('popup-one')">请选择</view>
				<uni-popup ref="popup-one" type="bottom">
					<view class="u67">
						<view class="u67-cancel" @click="cancel('popup-one')">取消</view>
						<view class="u67-confirm" @click="confirm('popup-one')">确定</view>
					</view>
					<picker-view indicator-style="height: 50px;" :value="land_value" @change="bindChange2" class="u168">
						<picker-view-column>
							<view class="u168-item" v-for="(item,index) in land_address" :key="index">{{item.name}}
							</view>
						</picker-view-column>
					</picker-view>
				</uni-popup>
				<uni-easyinput v-model="landFormData.name" type="textarea" :clearable="false" placeholder="详细地址" />
			</uni-forms-item>
			<uni-forms-item label="进岛前15天活动轨迹" label-position="top" :label-width="140">
				<uni-easyinput v-model="landFormData.name" :clearable="false" placeholder="请输入进岛前15天活动轨迹" />
			</uni-forms-item>
			<uni-forms-item label="单位" label-position="top">
				<uni-easyinput v-model="landFormData.profession" :clearable="false" placeholder="请输入单位" />
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
	import {
		COMMON_ADDRESS
	} from '@/common/common.js'
	export default {
		data() {
			return {
				rules: {
					name: {
						rules: [{
							required: true,
							errorMessage: '请输入姓名',
						}, ]
					},
				},
				dataTree: [],
				landFormData: {
					ifOwner: -1,
					name: '',
					sex: -1,
					idcard: '',
					mobile: '',
					url: [],
					reason: '',
					introduction: '',
					hobby: [5],
					datetimesingle: 1627529992399,
					profession: '',
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
				province: [],
				city: [],
				district: [],
				value: [0, 0, 0],
				land_address: COMMON_ADDRESS,
				land_value: [0],
			};
		},
		onLoad() {
			this.getProvince()
		},
		methods: {
			open(name) {
				this.$refs[name].open('bottom')
			},
			cancel(name) {
				this.$refs[name].close()
			},
			confirm(name) {
				this.cancel(name)
			},
			submit() {
				this.$refs.landForm.validate().then(res => {
					console.log('表单数据信息：', res);
				}).catch(err => {
					console.log('表单错误信息：', err);
				})
			},
			async getProvince() {
				try {
					const res = await getRegionList();
					this.province = res;
					this.city = res[0].children;
					this.district = res[0].children[0].children;
					console.log(res)
				} catch (e) {
					//TODO handle the exception
				}
			},
			bindChange(val) {
				let p = val.detail.value[0]
				let c = val.detail.value[1]
				this.city = this.province[p].children;
				this.district = this.province[p].children[c].children;
			},
			bindChange2(val) {

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

		.u168 {
			width: 100%;
			height: 600rpx;
			background-color: #fff;

			&-item {
				line-height: 50px;
				text-align: center;
			}
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

		.u67 {
			@extend .default-flex;
			justify-content: space-between;
			background-color: #fff;
			border-radius: 20rpx 20rpx 0 0;
			padding: 20rpx;
			box-sizing: border-box;

			&-confirm {
				color: rgba(49, 208, 230, 1);
			}
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
