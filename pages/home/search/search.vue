<template>
	<view class="search">
		<view class="sticky-head">
			<uni-search-bar v-model="keyword" @confirm="search" placeholder="搜索" :radius="58" bgColor="#edf0f7">
			</uni-search-bar>
		</view>
		<view class="u121" v-show="isShow && history.length > 0">
			<view class="u121-title">搜索历史</view>
			<view class="u121-tags">
				<view class="u121-tag" v-for="tag,index in history" :key="index" @click="postProductHotel(tag)">{{tag}}
				</view>
			</view>
		</view>
		<view class="list" v-show="!isShow">

			<template v-if="from == 'home_stay'">
				<common-home-item v-for="item,index in list" :key="index" @click="openPage(item)" :info="item">
				</common-home-item>
			</template>

			<template v-if="from == 'tasty_food' || from == 'home_meal'">
				<common-food-item v-for="item,index in listFood" :key="index" @click="openPage(item)" :info="item">
				</common-food-item>
			</template>
		</view>
	</view>
</template>

<script>
	import {
		OpenPage,
		getStorage,
		setStorage
	} from '@/common/fun.js'
	export default {
		data() {
			return {
				keyword: '',
				history: [], //历史记录
				isShow: true, //true展示历史记录  false不展示
				listFood: [{
					avatar: '/static/home1.jpg',
					name: '新鲜海鲜',
					grade: 4,
					pay: 20,
					address: '大长山岛',
					distance: '1.2km',
					foods: [{
						url: '/static/home1.jpg',
						name: '海鲜杂烩',
						money: 130
					}, {
						url: '/static/home1.jpg',
						name: '海鲜杂烩',
						money: 130
					}, {
						url: '/static/home1.jpg',
						name: '海鲜杂烩',
						money: 130
					}]
				}],
				list: [],
				total: 0,
				formData: {
					current: 0,
					size: 10,
					title: ""
				},
				from: '', //home_stay酒店  tasty_food美食   home_meal外卖
			};
		},
		onLoad(options) {
			this.from = options.from;
			this.historyList(`${this.from}_list`)
		},
		methods: {
			search(e) {
				this.list = [];
				this.total = 0;

				if (e.value) {
					this.history.push(e.value);
					this.history = this.history.slice(-10)
					setStorage(`${this.from}_list`, this.history)
				}

				this.postProductHotel(e.value)
			},
			historyList(key) {
				let history = getStorage(key);
				if (!history) {
					setStorage(key, [])
				}
				this.history = history;
			},
			async postProductHotel(keyword) {
				try {
					this.isShow = false;
					const {
						list,
						total
					} = this.$data;
					if (total > 0 && list.length == total) {
						return;
					}
					this.formData.title = keyword || '';
					const resultHotel = await this.$http(this.$API.postProductShopList, this.formData, 'POST');
					this.list = list.concat(resultHotel.data.list);
					this.total = resultHotel.data.total;
				} catch (e) {
					//TODO handle the exception
				}
			},
			openPage(item) {
				OpenPage(`/pagesStay/home-stay/home-stay-detail?title=${item.name}`)
			}
		},
		onReachBottom() {
			this.formData.current += 10;
			this.postProductHotel()
		}
	}
</script>

<style lang="scss" scoped>
	.sticky-head {
		position: sticky;
		top: 0;
		width: 100%;
		background: #fff;
		padding-bottom: 20rpx;

		/deep/ .uni-searchbar {
			padding: 0 10px;
		}
	}

	.u121 {
		padding: 20rpx 30rpx;

		&-title {
			font: normal 400 24rpx/normal '微软雅黑', sans-serif;
			color: #000;
		}

		&-tags {
			@extend .default-flex;
			flex-wrap: wrap;
			margin-top: 20rpx;
		}

		&-tag {
			margin-right: 30rpx;
			@extend .u121-title;
		}
	}

	.list {
		padding: 0 20rpx 20rpx 20rpx;
	}
</style>
