<template>
	<view class="toilet">
		<view class="u0">
			<map class="u0-map"></map>
		</view>
		<view class="u1">

		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			};
		}
	}
</script>

<style lang="scss" scoped>
	.toilet {
		width: 100%;
		height: 100vh
	}

	.u0 {
		height: 70%;
		&-map{
			height: 100%;
			width: 100%;
		}
	}

	.u1 {
		height: 30%;
		background-color: #f90;
	}
</style>
