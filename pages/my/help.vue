<template>
	<view>
		<uni-list>
			<uni-list-item :title="item.title" :note="item.content" v-for="item,index in help" :key="index">
			</uni-list-item>
		</uni-list>
	</view>
</template>

<script>
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
