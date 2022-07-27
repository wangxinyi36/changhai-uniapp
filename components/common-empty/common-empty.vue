<template>
	<view class="empty">
		<image :src="pics[index]" mode="aspectFill" class="empty-img"></image>
	</view>
</template>

<script>
	export default {
		name: "common-empty",
		props: ['index'],
		data() {
			return {
				pics: [
					'',
					'/static/empty/empty1.svg',
					'/static/empty/empty2.svg'
				]
			};
		},
	}
</script>

<style lang="scss" scoped>
	.empty {
		height: 60vh;
		@extend .default-flex;
		justify-content: center;
	}
</style>
