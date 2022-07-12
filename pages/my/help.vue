<template>
	<view>
		<uni-list>
			<uni-list-item :title="item.title" v-for="item,index in help" :key="item.id" :clickable="true" :showArrow="true"
				@click="pageTo(item)">
			</uni-list-item>
		</uni-list>
	</view>
</template>

<script>
	import {
		OpenPage
	} from '@/common/fun.js'
	export default {
		data() {
			return {
				help: []
			};
		},
		onLoad() {
			this.getMyAboutMini()
		},
		methods: {
			pageTo(item) {
				OpenPage('/pages/my/help-detail', {
					item
				})
			},
			async getMyAboutMini() {
				try {
					const res = await this.$http(`${this.$API.getMyAboutMini}?pid=1`);
					this.help = res.data
				} catch (e) {
					//TODO handle the exception
				}
			},
		}
	}
</script>

<style lang="scss" scoped>

</style>
