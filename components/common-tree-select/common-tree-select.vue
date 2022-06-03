<template>
	<view class="common-tree-select">
		<scroll-view scroll-y="true" class="left" :style="{ height: scrollHeight + 'px' }">
			<view class="left-list">
				<view class="left-item" :class="[{'left-item-active':activeIndex == index}]"
					v-for="item,index in leftList" :key="index" @click="changeLeft(index)">{{item.name}}
				</view>
			</view>
		</scroll-view>
		<scroll-view scroll-y="true" :style="{ height: scrollHeight + 'px' }">
			<slot></slot>
		</scroll-view>
	</view>
</template>

<script>
	import {
		GetSystemInfo
	} from '@/common/fun.js';
	export default {
		name: 'common-tree-select',
		props: {
			leftList: Array
		},
		data() {
			return {
				scrollHeight: 0,
				activeIndex: 0
			};
		},
		created() {
			this.$nextTick(() => {
				this.scrollHeight = GetSystemInfo().windowHeight - 10;
			})
		},
		methods:{
			changeLeft(index){
				this.activeIndex = index;
				this.$emit('changeLeft',index)
			}
		}
	};
</script>

<style lang="scss" scoped>
	.common-tree-select {
		padding-top: 20rpx;
		display: flex;

		.left {
			width: 164rpx;
			background-color: #fff;

			.left-list {
				.left-item {
					width: 100%;
					height: 110rpx;
					display: flex;
					align-items: center;
					justify-content: center;
					font-weight: 400;
					font-size: 24rpx;
					color: #000000;
					text-align: center;
					background-color: rgba(250, 254, 255, 1);
					border-bottom: 2rpx solid rgba(242, 242, 242, 1);

					&-active {
						color: rgba(0, 191, 191, 1);
						background-color: rgba(242, 242, 242, 1);
						border-left: 2px solid rgba(0, 191, 191, 1);
					}
				}
			}
		}
	}
</style>
