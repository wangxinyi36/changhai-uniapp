<template>
	<view class="search">
		<view class="sticky-head">
			<uni-search-bar v-model="keyword" @confirm="search" placeholder="搜索" :radius="58" bgColor="#edf0f7"
				@cancel="cancel">
			</uni-search-bar>
		</view>
		<view class="u121" v-if="isShow && history.length > 0">
			<view class="u121-title">搜索历史</view>
			<view class="u121-tags">
				<view class="u121-tag" v-for="tag,index in history" :key="index" @click="postProductHotel(tag)">{{tag}}
				</view>
			</view>
		</view>
		<view class="list" v-else="!isShow">

			<template v-if="from == 'home_stay'">
				<common-home-item v-for="item,index in list" :key="index" @click="openPage(item)" :info="item">
				</common-home-item>
			</template>

			<template v-if="from == 'tasty_food'">
				<common-food-item v-for="item,index in list" :key="index" @click="openPage(item)" :info="item">
				</common-food-item>
			</template>

			<template v-if="from == 'home_meal'">
				<common-food-item v-for="item,index in list" :key="index" @click="openPage(item)" :info="item">
				</common-food-item>
			</template>
			<common-empty index="2" v-if="list.length == 0"></common-empty>
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
					if (this.history.length > 1) {
						let index = this.history.includes(e.value);
						if (index >= 0) return;
					}
					this.history.push(e.value);
					this.history = this.history.slice(-10)
					setStorage(`${this.from}_list`, this.history)
				}

				this.postProductHotel(e.value)
			},
			cancel(e) {
				this.isShow = true;
			},
			historyList(key) {
				let history = getStorage(key);
				if (!history) {
					setStorage(key, [])
				}
				this.history = history || [];
			},
			async postProductHotel(keyword) {
				try {
					this.isShow = false;
					const {
						list,
						total,
						from
					} = this.$data;
					if (total > 0 && list.length == total) {
						return;
					}
					this.formData.title = keyword || '';
					let url = from == 'home_stay' ? this.$API.postProductShopList : from == 'tasty_food' ? this.$API
						.postProductFoodList : this.$API.postProductWMList;
					const resultHotel = await this.$http(url, this.formData, 'POST');
					this.list = list.concat(resultHotel.data.list);
					this.total = resultHotel.data.total;
				} catch (e) {
					console.log(e)
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
