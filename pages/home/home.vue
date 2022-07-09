<template>
	<view>
		<view class="u47">
			<view class="u47-box" @click="homeDetail(0)">
				<image :src="homeList[0].url" mode="scaleToFill" class="u47-img"></image>
				<text class="intro-text u47-intro">{{homeList[0].name}}</text>
			</view>
			<view class="u72"><text class="u47-text">长海县文旅局官方推荐</text></view>
		</view>

		<uni-row>
			<view class="u49">
				<view class="u49-row">
					<view class="u49-box" @click="homeDetail(1)">
						<image :src="homeList[1].url" mode="scaleToFill" class="u49-img"></image>
						<text class="intro-text u49-intro">{{homeList[1].name}}</text>
					</view>
					<view class="u50-box" @click="homeDetail(2)">
						<image :src="homeList[2].url" mode="scaleToFill" class="u49-img"></image>
						<text class="intro-text u49-intro">{{homeList[2].name}}</text>
					</view>
				</view>
				<view class="u49-row">
					<view class="u51-box" @click="homeDetail(3)">
						<image :src="homeList[3].url" mode="scaleToFill" class="u49-img"></image>
						<text class="intro-text u49-intro">{{homeList[3].name}}</text>
					</view>
					<view class="u51-box u52-box" @click="homeDetail(4)">
						<image :src="homeList[4].url" mode="scaleToFill" class="u49-img"></image>
						<text class="intro-text u49-intro">{{homeList[4].name}}</text>
					</view>
					<view class="u51-box" @click="homeDetail(5)">
						<image :src="homeList[5].url" mode="scaleToFill" class="u49-img"></image>
						<text class="intro-text u49-intro">{{homeList[5].name}}</text>
					</view>
				</view>
			</view>
		</uni-row>

		<scroll-view scroll-x="true">
			<view class="u4">
				<view class="u4-item" v-for="(item, index) in sectionList" :key="index" :id="`id-` + index"
					@click="openType(item, index)">
					<image class="u4-img" :src="item.url" mode="scaleToFill"
						:style="{ width: item.width, height: item.height, transform: item.transform }"></image>
					<text class="u4-text">{{ item.name }}</text>
				</view>
			</view>
		</scroll-view>

		<uni-row>
			<view class="u82">
				<uni-row>
					<view class="title-box">
						<uni-col :span="12">
							<view class="title-text">民宿优选</view>
						</uni-col>
						<uni-col :span="12">
							<navigator url="/pagesStay/home-stay/home-stay" hover-class="none">
								<view class="title-more">查看更多</view>
							</navigator>
						</uni-col>
					</view>
				</uni-row>
				<scroll-view scroll-x="true">
					<view class="u4 u82-list">
						<view class="u82-item" v-for="(item, index) in homeStay" :key="index" :id="`id-` + index">
							<navigator :url="`/pagesStay/home-stay/home-stay-detail?id=${item.uuid}`"
								hover-class="none">
								<view class="u82-box">
									<image class="u82-img" :src="item.uuImg" mode="scaleToFill"></image>
									<view class="u71">热门</view>
								</view>
								<view class="u82-text">{{ item.uutitle }}</view>
							</navigator>
						</view>
					</view>
				</scroll-view>
			</view>
		</uni-row>

		<uni-row>
			<view class="u82">
				<uni-row>
					<view class="title-box">
						<uni-col :span="12">
							<view class="title-text">精选美食</view>
						</uni-col>
						<uni-col :span="12">
							<navigator url="/pages/home/tasty-food/tasty-food" hover-class="none">
								<view class="title-more">查看更多</view>
							</navigator>
						</uni-col>
					</view>
				</uni-row>
				<scroll-view scroll-x="true">
					<view class="u4 u82-list">
						<view class="u82-item" v-for="(item, index) in foods" :key="index" :id="`id-` + index">
							<navigator :url="`/pages/home/tasty-food/home-tasty-food-detail?id=${item.uuid}`"
								hover-class="none">
								<view class="u82-box">
									<image class="u82-img" :src="item.uuimgPath" mode="scaleToFill"></image>
									<view class="u71">热门</view>
								</view>
								<view class="u82-text">{{ item.uutitle }}</view>
							</navigator>
						</view>
					</view>
				</scroll-view>
			</view>
		</uni-row>

		<uni-row>
			<view class="u82">
				<uni-row>
					<view class="title-box">
						<uni-col :span="12">
							<view class="title-text">精选线路</view>
						</uni-col>
						<uni-col :span="12">
							<navigator url="/pages/home/special-route/special-route" hover-class="none">
								<view class="title-more">查看更多</view>
							</navigator>
						</uni-col>
					</view>
				</uni-row>
				<view class="u54">
					<view class="u54-item" v-for="(item, index) in speLine" :key="item.id" @click="openRoute(item)">
						<image :src="item.picUrl" mode="scaleToFill" class="u54-img"></image>
						<view class="u54-box">
							<uni-row>
								<text class="u54-title">{{ item.name }}</text>
								<text class="u54-time">{{ item.brief }}</text>
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
	import {
		OpenPage,
		setStorage,
		getStorage,
		getAddressAuthorize
	} from '@/common/fun.js';
	export default {
		data() {
			return {
				sectionList: [{
						url: '/static/home-island.svg',
						name: '登岛申请',
						width: '46rpx',
						height: '48rpx',
						open: '/pages/home/landing/landing'
					}, {
						url: '/static/home-ship.svg',
						name: '船票',
						width: '54rpx',
						height: '45rpx',
						open: '/pagesShip/ship-list'
					},
					{
						url: '/static/home-hotel.svg',
						name: '酒店',
						width: '50rpx',
						height: '48rpx',
						open: '/pagesStay/home-stay/home-stay'
					},
					{
						url: '/static/home-food.svg',
						name: '美食',
						width: '60rpx',
						height: '39rpx',
						open: '/pages/home/tasty-food/tasty-food'
					}, {
						url: '/static/home-meal.svg',
						name: '外卖',
						width: '60rpx',
						height: '39rpx',
						open: '/pages/home/home-meal/home-meal'
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
						height: '50rpx',
						open: '/pages/home/public-toilet/public-toilet'
					},
					{
						url: '/static/home-activity.svg',
						name: '海岛活动',
						width: '50rpx',
						height: '47rpx',
						open: '/pages/home/activity/activity'
					},
					{
						url: '/static/home-news.svg',
						name: '新闻',
						width: '50rpx',
						height: '47rpx',
						open: '/pages/home/news/news'
					},
					{
						url: '/static/home-gift.svg',
						name: '长海礼物',
						width: '50rpx',
						height: '48rpx',
						open: '/pages/mall/mall'
					},
					{
						url: '/static/home-airplan.svg',
						name: '订机票',
						width: '47rpx',
						height: '49rpx',
						transform: 'rotate(45deg)',
						open: '/pages/home/airplane/airplane'
					},

				],
				homeStay: [],
				foods: [],
				speLine: [],
				homeList: [],
				wechat_userInfo: {}
			};
		},
		onLoad() {
			this.wechat_userInfo = getStorage('wechat_userInfo')
			this.getTral();
			this.getHomeList()
			this.getFoods()
			this.getHotel()
		},
		methods: {
			async getFoods() {
				try {
					const resultFoods = await this.$http(this.$API.postProductFoodList, {
						current: 0,
						size: 4,
					}, 'POST');
					this.foods = resultFoods.data;
				} catch (e) {
					//TODO handle the exception
				}
			},
			async getHotel() {
				try {
					const resultHotel = await this.$http(this.$API.postProductShopList, {
						current: 0,
						size: 4,
					}, 'POST');
					this.homeStay = resultHotel.data.list;
				} catch (e) {
					//TODO handle the exception
				}
			},
			async openType(item, index) {
				console.log(item)
				if (item.open == '/pages/home/landing/landing') {
					let _this = this;
					if (this.wechat_userInfo) {
						OpenPage(item.open)
						return;
					}
					uni.getUserProfile({
						desc: '需要获取您的个人信息',
						success(res) {
							uni.login({
								provider: 'weixin',
								success: async function(loginRes) {
									let data = {
										code: loginRes.code,
										shareUserId: 0,
										userInfo: {
											phone: "",
											registerDate: "",
											status: 0,
											userId: 0,
											userLevel: 0,
											userLevelDesc: "",
											...res.userInfo
										}
									}
									const result = await _this.$http(_this.$API.postLoginByWeixin,
										data,
										'POST');
									_this.wechat_userInfo = result.data.userInfo;
									setStorage('wechat_userInfo', result.data.userInfo)
								},
								fail(err) {
									console.log(err)
								}
							});
						},
						fail(err) {
							console.log(err)
						}
					})
					return;
				}

				if (item.open == '/pages/mall/mall') {
					uni.switchTab({
						url: item.open
					});
					return;
				}

				if (item.open.includes('public-toilet')) {
					let currentPoint = await getAddressAuthorize();
				}

				OpenPage(item.open)
			},
			openPage(item, url) {
				OpenPage(`${url}?title=${item.name}`)
			},
			openRoute(item) {
				OpenPage(`/pages/home/special-route/special-route-detail?id=${item.id}`)
			},
			homeDetail(index) {
				this.$nextTick(() => {
					OpenPage(`/pages/home/home-detail?index=${index}`)
				})
			},
			async getTral() {
				try {
					const res = await this.$http(`${this.$API.getTralList}?limit=2`);
					this.speLine = res.data.items;
				} catch (e) {
					//TODO handle the exception
				}
			},
			async getHomeList() {
				try {
					const res = await this.$http(`${this.$API.getHomeList}`);
					this.homeList = res.data;
				} catch (e) {
					//TODO handle the exception
				}
			},
		}
	};
</script>

<style scoped lang="scss">
	@import '../../common/home.scss';
</style>
