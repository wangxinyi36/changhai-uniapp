const API = {
	getRegions: 'dev/xcx/region/list', // 查询区域列表

	getCarList: 'dev/xcx/car/list', // 查询租车列表

	// getAirportDetail: 'admin/airport/detail', // 查看订机票内容

	getTralList: 'dev/xcx/tral/list', // 查询精品路线列表
	getTralDetail: 'dev/xcx/tral/detail', // 查询精品路线详情

	getAdList: 'dev/xcx/ad/list', // 查询活动列表
	getAdRead: 'dev/xcx/ad/read', // 查询活动详情

	getHomeList: 'dev/xcx/ad/homelist', // 查询首页列表
	getHomeDetail: 'dev/xcx/ad/home', // 查询首页列表详情

	getAbjList: 'dev/xcx/abj/list', // 查询公共服务列表
	getAbjTypes: 'dev/xcx/abjType/dtsAbjAllEnble', // 查询公共服务类型

	getHealthList: 'dev/xcx/health/list', // 查询登岛申请列表
	postHealth: 'dev/xcx/health/create', // 填写登岛申请
	getHealth: 'dev/xcx/health/read', // 查看登岛申请

	getGoodsList: 'dev/xcx/goods/list', // 查询商品列表
	getGoodsDetail: 'dev/xcx/goods/detail', // 查询商品详情

	getNewsList: 'dev/xcx/article/list', // 查询新闻列表
	getNewsDetail: 'dev/xcx/article/detail', // 查询新闻详情

	postStorageCreate: 'dev/xcx/storage/create', // 上传图片
	
	postLoginByWeixin: 'wxapi/wx/auth/login_by_weixin', // 微信登录
	
	postProductList: 'dev/xcx/product/getList', // 票付通产品列表
	getProductDetail: 'dev/xcx/product/detail', // 票付通产品详情
	
	


}


export default API;
