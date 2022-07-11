const API = {
	getRegions: 'dev/xcx/region/list', // 查询区域列表

	getCarList: 'dev/xcx/car/list', // 查询租车列表

	getAirportDetail: 'dev/xcx/airport/detail', // 查看订机票内容

	getTralList: 'dev/xcx/tral/list', // 查询精品路线列表
	getTralDetail: 'dev/xcx/tral/detail', // 查询精品路线详情

	getAdList: 'dev/xcx/ad/list', // 查询活动列表
	getAdRead: 'dev/xcx/ad/read', // 查询活动详情

	getHomeList: 'dev/xcx/ad/homelist', // 查询首页列表

	getAbjList: 'dev/xcx/abj/list', // 查询公共服务列表
	getAbjTypes: 'dev/xcx/abjType/dtsAbjAllEnble', // 查询公共服务类型

	getHealthList: 'dev/xcx/health/list', // 查询登岛申请列表
	postHealth: 'dev/xcx/health/create', // 填写登岛申请
	getHealth: 'dev/xcx/health/read', // 查看登岛申请

	getCategoryList: 'dev/xcx/category/l1', // 商品类型列表
	getGoodsList: 'dev/xcx/goods/list', // 查询商品列表
	getGoodsDetail: 'dev/xcx/goods/detail', // 查询商品详情
	getCommentList: 'dev/xcx/comment/list', // 查询商品评论列表

	getNewsList: 'dev/xcx/article/list', // 查询新闻列表
	getNewsDetail: 'dev/xcx/article/detail', // 查询新闻详情

	postStorageCreate: 'dev/xcx/storage/create', // 上传图片

	postLoginByWeixin: 'wxapi/wx/auth/login_by_weixin', // 微信登录
	postAuthUpdate: 'dev/xcx/auth/update', // 更新用户信息

	getProductRegionList: 'dev/xcx/product/getRegionList', // 获取区域列表
	postProductShopList: 'dev/xcx/product/queryBShopList', // 查询民宿列表
	postProductShopDetail: 'dev/xcx/product/getBSDetail', // 查询民宿详情的列表
	
	postProductFoodList: 'dev/xcx/product/getFoodList', // 获取美食列表
	getProductFoodDetail: 'dev/xcx/product/getFoodDetail', // 获取美食详情

	postCommentList: 'dev/xcx/comment/getCommentList', // 评论评分

	getAddressList: 'dev/xcx/address/list', // 查询收货地址
	postAddressSave: 'dev/xcx/address/save', // 更新或新增收货地址
	getAddressDetail: 'dev/xcx/address/detail', // 查询收货地址详情
	postSelectAddress: 'dev/xcx/address/selectAddress', // 查询地址下拉框
	postAddressDelete: 'dev/xcx/address/delete', // 删除收货地址

	getMyPhoneNumber: 'dev/xcx/my/phoneNumber', // 查询联系我们手机号

	getMyAboutMini: 'dev/xcx/my/aboutMini', // 关于小程序或帮助中心(传0是关于小程序，其它是返回值的pid)
	
	getComplaintList: 'dev/xcx/complaint/list', // 获取投诉信息列表
	postComplaintCreate: 'dev/xcx/complaint/create', // 投诉添加




}


export default API;
