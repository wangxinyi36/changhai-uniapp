const API = {
	getRegions: 'dev/xcx/region/list', // 查询区域列表

	getCarList: 'dev/xcx/car/list', // 查询租车列表

	getAirportDetail: 'dev/xcx/airport/detail', // 查看订机票内容

	getTralList: 'dev/xcx/tral/list', // 查询精品路线列表
	getTralDetail: 'dev/xcx/tral/detail', // 查询精品路线详情
	getTralRotationList: 'dev/xcx/tral/rotationlist', // 查询精品路线轮播列表

	getSteamerTicketList: 'dev/xcx/product/getSteamerTicketList', // 获取船票列表
	postPassengerCreate: 'dev/xcx/passenger/create', // 添加乘客信息
	getPassengerList: 'dev/xcx/passenger/queryByUserId', // 获取乘客信息列表
	postPassengerUpdate: 'dev/xcx/passenger/update', // 修改乘客信息
	getPassengerDelete: 'dev/xcx/passenger/delete', // 删除乘客信息
	posProductTicketOrder: 'dev/xcx/product/saveSteamerTicketOrder', // 船票支付

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

	postOrderSave: 'dev/xcx/order/saveOrder', // 商城下单
	getOrderList: 'dev/xcx/order/list', // 查询商品订单列表
	putOrderCancel: 'dev/xcx/order/cancel', // 取消商城订单
	getOrderDetail: 'dev/xcx/order/detail', // 商城订单详情
	postComment: 'dev/xcx/comment/comment', // 商城订单发布评论
	postPayOrder: 'dev/xcx/order/payOrder', // 商城待支付订单支付
	postRefundapply: 'dev/xcx/order/refundapply', // 商城订单退款
	postQueryMyOrder: 'dev/xcx/order/queryMyOrder', // 票付通订单列表
	getQueryOrderDetail: 'dev/xcx/order/queryOrderDetail', // 票付通订单详情
	getProductPayOrder: 'dev/xcx/product/payOrder', // 票付通订单列表继续支付
	getMyOrderCancel: 'dev/xcx/myorder/ordercancel', // 票付通取消订单
	getMyOrderChangePro: 'dev/xcx/myorder/orderChangePro', // 票付通订单申请退款

	getNewsList: 'dev/xcx/article/list', // 查询新闻列表
	getNewsDetail: 'dev/xcx/article/detail', // 查询新闻详情

	postStorageCreate: 'dev/xcx/storage/create', // 上传图片

	postLoginByWeixin: 'wxapi/wx/auth/login_by_weixin', // 微信登录
	postAuthUpdate: 'dev/xcx/auth/update', // 更新用户信息

	getHotFoodList: 'dev/xcx/product/getHotFoodList', // 精选美食

	getProductRegionList: 'dev/xcx/region/list', // 获取区域列表
	postProductShopList: 'dev/xcx/product/queryBShopList', // 查询民宿列表
	postProductShopDetail: 'dev/xcx/product/getBSDetail', // 查询民宿详情的列表
	postProductShopInfo: 'dev/xcx/product/getBSInfo', // 获取民宿详情
	postProductSaveMSOrder: 'dev/xcx/product/saveMSOrder', // 民宿下单

	postProductFoodList: 'dev/xcx/product/getFoodList', // 获取美食列表
	getProductFoodDetail: 'dev/xcx/product/getFoodDetail', // 获取美食详情
	postSaveFoodOrder: 'dev/xcx/product/saveFoodOrder', // 美食下单

	postProductWMList: 'dev/xcx/product/getWMList', // 获取外卖列表
	getProductWMDetail: 'dev/xcx/product/getWMDetail', // 获取外卖详情
	postProductSaveWMOrder: 'dev/xcx/product/saveWMOrder', // 外卖下单

	postCommentList: 'dev/xcx/comment/getCommentList', // 美食/外卖详情评论列表
	postCommentSave: 'dev/xcx/comment/saveComment', // 添加评论

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
