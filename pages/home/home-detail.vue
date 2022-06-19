<template>
	<view>
		<view class="u17">
			<image src="/static/home1.jpg" mode="aspectFill" class="u17-img"></image>
			<view class="u17-box">
				<view class="u17-box-title">三元宫</view>
				<view class="u17-box-text">三元宫始建于明末清初，位于大长山岛三官庙村，后来被毁。现在的三元宫是由华龙企业投资修建的，为辽南地区最大的道家宫观。</view>
				<view class="u17-box-text">
					道家正式形成于东汉后期，距今已有近2000年的历史，是中国土生土长的宗教，道教的创始人为老子，著有五千言《道德经》。三元宫为仿古式建筑，分前、中、后三进院。三元宫的“三元”是根据上关日赐福、地关日消灾、水关日解祸而来。
				</view>
				<view class="u17-box-text">
					来到庙门前，首先看到的是高有5米的宝鼎。前院中间是观音殿，供奉着圣观音、吉祥观音、杨枝观音等众位神仙；东侧是关帝殿，供奉着关圣帝君关羽，因关帝站姿为护法、坐姿为财神，此殿又称为财神殿；八仙殿供奉着传说中的救苦救难、点化凡人的八位神仙；三宵殿供着琼宵娘娘、云宵娘娘、碧宵娘娘；药王殿供奉着药王孙思邈和中国古时历代名医；龙王殿供奉着海龙王；马祖殿内供奉着马老祖师。中院东侧有娘娘殿，殿内供奉着海神娘娘、厚土娘娘、女娲娘娘。
				</view>
				<view class="u17-box-text">
					后院的三清殿供奉着道教最高尊神元始天尊，这里也是道士们诵经的圣殿；三皇殿供奉着伏羲、黄帝、神农三位华夏民族的祖先；三星殿供奉着福、禄、寿三位神仙；藏经阁位于三元宫的最高处，是欣赏海岛风光的最好去处。每天清晨6时，在镇区内都能听到从三元宫的钟楼里传出低沉而有力的钟声。
				</view>
				<view class="u17-box-text">到三元宫来，不仅可以重温祖国传统文化的博大精深，还可以居高临下，欣赏海岛和大海的迷人景色。</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: ''
			};
		},
		onLoad(options) {
			this.title = options.title;
			uni.setNavigationBarTitle({
				title:options.title
			})
		}
	}
</script>

<style lang="scss" scoped>
	.u17 {
		&-img {
			height: 428rpx;
			width: 100%;
		}

		&-box {
			padding: 0 30rpx;
			margin-bottom: 20px;

			&-title {
				font: 700 32rpx/30rpx '微软雅黑 Bold', '微软雅黑 Regular', '微软雅黑', sans-serif;
				color: #333;
				margin: 20rpx 0;
			}

			&-text {
				font: 400 20rpx/30rpx 'Arial Normal', 'Arial', sans-serif;
				color: #333;
			}
		}
	}
</style>
