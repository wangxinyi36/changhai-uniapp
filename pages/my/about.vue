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
				help: [{
					title: '我可以投诉那些内容？',
					content: '只要事发地在管辖范围内您的个人权益受到了侵害，你都可以进行投诉，我们会在24小时之内为您处理。'
				}, {
					title: '如何查看处理进度？',
					content: '如果您使用的是在线投诉和语音投诉，您可以在“我的”-“我的投诉”中，查询处理进度和处理结果；如果您使用的是电话投诉，您可以在收到的短信通知中，打开网页链接进行查询进度；在部门受理之前，您都可以撤销投诉，但部门受理之后，投诉将无法撤销；如果您对处理结果不满意，您可以发起二次申诉。'
				}, {
					title: '重复投诉是不是可以加快处理速度？',
					content: '重复投诉并不能提高处理速度，请您耐心等待处理结果，重复投诉很有可能被不予受理哦。'
				}, {
					title: '如何注销我的账号？',
					content: '账号注销后，小程序下的产品及服务将无法再使用此账号，同时账号信息，身份信息及权益信息交易记录等内容将无法恢复'
				}]
			};
		}
	}
</script>

<style lang="scss">

</style>
