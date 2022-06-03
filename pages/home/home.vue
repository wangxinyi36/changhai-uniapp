<template>
	<view>
		<view class="u47">
			<view class="u47-box">
				<image src="/static/home1.png" mode="scaleToFill" class="u47-img"></image>
				<text class="intro-text u47-intro">广鹿岛</text>
			</view>
			<view class="u72"><text class="u47-text">长海县文旅局官方推荐</text></view>
		</view>

		<uni-row>
			<view class="u49">
				<uni-row :gutter="5">
					<uni-col :span="16">
						<view class="u49-box">
							<image src="/static/home2.png" mode="scaleToFill" class="u49-img"></image>
							<text class="intro-text u49-intro">住在长海是什么样的神仙体验</text>
						</view>
					</uni-col>
					<uni-col :span="8">
						<view class="u49-box u50-box">
							<image src="/static/home5.png" mode="scaleToFill" class="u49-img"></image>
							<text class="intro-text u49-intro">海岛活动</text>
						</view>
					</uni-col>
				</uni-row>
				<uni-row :gutter="5">
					<view class="u49-row">
						<uni-col :span="8">
							<view class="u49-box u50-box">
								<image src="/static/home3.png" mode="scaleToFill" class="u49-img"></image>
								<text class="intro-text u49-intro">长海海鲜</text>
							</view>
						</uni-col>
						<uni-col :span="8">
							<view class="u49-box u50-box">
								<image src="/static/home4.png" mode="scaleToFill" class="u49-img"></image>
								<text class="intro-text u49-intro">广鹿岛网红打卡</text>
							</view>
						</uni-col>
						<uni-col :span="8">
							<view class="u49-box u50-box">
								<image src="/static/home6.png" mode="scaleToFill" class="u49-img"></image>
								<text class="intro-text u49-intro">逍遥岛主</text>
							</view>
						</uni-col>
					</view>
				</uni-row>
			</view>
		</uni-row>

		<scroll-view scroll-x="true">
			<view class="u4">
				<view class="u4-item" v-for="(item, index) in sectionList" :key="index" :id="`id-` + index" @click="openPage(item, index)">
					<image class="u4-img" :src="item.url" mode="scaleToFill" :style="{ width: item.width, height: item.height, transform: item.transform }"></image>
					<text class="u4-text">{{ item.name }}</text>
				</view>
			</view>
		</scroll-view>

		<uni-row>
			<view class="u82">
				<uni-row>
					<view class="title-box">
						<uni-col :span="12"><view class="title-text">民宿优选</view></uni-col>
						<uni-col :span="12"><view class="title-more">查看更多</view></uni-col>
					</view>
				</uni-row>
				<scroll-view scroll-x="true">
					<view class="u4 u82-list">
						<view class="u82-item" v-for="(item, index) in homeStay" :key="index" :id="`id-` + index">
							<view class="u82-box">
								<image class="u82-img" :src="item.url" mode="scaleToFill"></image>
								<view class="u71">热门</view>
							</view>
							<text class="u82-text">{{ item.name }}</text>
						</view>
					</view>
				</scroll-view>
			</view>
		</uni-row>

		<uni-row>
			<view class="u82">
				<uni-row>
					<view class="title-box">
						<uni-col :span="12"><view class="title-text">精选美食</view></uni-col>
						<uni-col :span="12"><view class="title-more">查看更多</view></uni-col>
					</view>
				</uni-row>
				<scroll-view scroll-x="true">
					<view class="u4 u82-list">
						<view class="u82-item" v-for="(item, index) in foods" :key="index" :id="`id-` + index">
							<view class="u82-box">
								<image class="u82-img" :src="item.url" mode="scaleToFill"></image>
								<view class="u71">热门</view>
							</view>
							<text class="u82-text">{{ item.name }}</text>
						</view>
					</view>
				</scroll-view>
			</view>
		</uni-row>

		<uni-row>
			<view class="u82">
				<uni-row>
					<view class="title-box">
						<uni-col :span="12"><view class="title-text">精选线路</view></uni-col>
						<uni-col :span="12"><view class="title-more">查看更多</view></uni-col>
					</view>
				</uni-row>
				<view class="u54">
					<view class="u54-item" v-for="(item, index) in speLine" :key="index">
						<image :src="item.url" mode="scaleToFill" class="u54-img"></image>
						<view class="u54-box">
							<uni-row>
								<text class="u54-title">{{ item.title }}</text>
								<text class="u54-time">{{ item.time }}</text>
							</uni-row>
							<uni-row>
								<text class="u54-tag" v-for="(tag, i) in item.tags" :key="i">{{ tag }}</text>
							</uni-row>
						</view>
					</view>
				</view>
			</view>
		</uni-row>
	</view>
</template>

<script>
import { OpenPage } from '@/common/fun.js';
export default {
	data() {
		return {
			sectionList: [
				{
					url: '/static/home-ship.svg',
					name: '船票',
					width: '54rpx',
					height: '45rpx'
				},
				{
					url: '/static/home-hotel.svg',
					name: '酒店',
					width: '50rpx',
					height: '48rpx'
				},
				{
					url: '/static/home-food.svg',
					name: '美食',
					width: '60rpx',
					height: '39rpx'
				},
				{
					url: '/static/home-car.svg',
					name: '租车',
					width: '50rpx',
					height: '50rpx',
					open: '/pages/home/car-rental/car-rental'
				},
				{
					url: '/static/home-tol.svg',
					name: '公共厕所',
					width: '50rpx',
					height: '50rpx'
				},
				{
					url: '/static/home-activity.svg',
					name: '海岛活动',
					width: '50rpx',
					height: '47rpx'
				},
				{
					url: '/static/home-gift.svg',
					name: '长海礼物',
					width: '50rpx',
					height: '48rpx'
				},
				{
					url: '/static/home-airplan.svg',
					name: '订机票',
					width: '47rpx',
					height: '49rpx',
					transform: 'rotate(45deg)'
				},
				{
					url: '/static/home-island.svg',
					name: '登岛申请',
					width: '46rpx',
					height: '48rpx'
				}
			],
			homeStay: [
				{
					url: '/static/home7.png',
					name: '大长山岛'
				},
				{
					url: '/static/home7.png',
					name: '大长山岛'
				},
				{
					url: '/static/home7.png',
					name: '大长山岛'
				},
				{
					url: '/static/home7.png',
					name: '大长山岛'
				}
			],
			foods: [
				{
					url: '/static/home3.png',
					name: '海鲜杂烩'
				},
				{
					url: '/static/home3.png',
					name: '海鲜杂烩'
				},
				{
					url: '/static/home3.png',
					name: '海鲜杂烩'
				},
				{
					url: '/static/home3.png',
					name: '海鲜杂烩'
				}
			],
			speLine: [
				{
					title: '长海县海上活动组团',
					time: '7日游 早上7点出发',
					tags: ['组团', '潜水', '海上冲浪'],
					url: '/static/home2.png'
				},
				{
					title: '长海县环岛自驾行',
					time: '包住 7日游',
					tags: ['200元起', '环岛自驾', '风土人情'],
					url: '/static/home2.png'
				}
			]
		};
	},
	methods: {
		openPage(item, index) {
			OpenPage(`${item.open}?title=${item.name}`)
		}
	}
};
</script>

<style scoped lang="scss">
@import '../../common/home.scss';
</style>
