export const COMMON_ADDRESS = [{
		name: '大长山岛镇',
		value: 1
	},
	{
		name: '小长山岛镇',
		value: 2
	},
	{
		name: '广鹿岛镇',
		value: 3
	},
	{
		name: '獐子岛镇',
		value: 4
	},
	{
		name: '海洋岛镇',
		value: 5
	},
]

/**
 * @description 民宿-价格范围
 */
export const PRICE_REGION = [{
	name: '￥150以下',
	min: 0,
	max: 150,
	isActive: false,
}, {
	name: '￥150-￥200',
	min: 150,
	max: 200,
	isActive: false,
}, {
	name: '￥200-￥300',
	min: 200,
	max: 300,
	isActive: false,
}, {
	name: '￥300-￥400',
	min: 300,
	max: 400,
	isActive: false,
}, {
	name: '￥400-￥500',
	min: 400,
	max: 500,
	isActive: false,
}]


/**
 * @description 民宿-人数
 */
export const PERSON_COUNT = [{
	name: '1人',
	count: 1,
	isActive: false
}, {
	name: '2人',
	count: 2,
	isActive: false
}, {
	name: '3人',
	count: 3,
	isActive: false
}, {
	name: '4人',
	count: 4,
	isActive: false
}]

/**
 * @description 民宿-房型
 */
export const HOUSE_TYPE = [{
	name: '单人',
	type: 1,
	isActive: false
}, {
	name: '大床房',
	type: 2,
	isActive: false
}, {
	name: '双床房',
	type: 3,
	isActive: false
}, {
	name: '多床房',
	type: 4,
	isActive: false
}]

/**
 * @description 美食-价格范围
 */
export const FOOD_PRICE = [{
	name: '￥100以下',
	isActive: false,
	min: 0,
	max: 100,
}, {
	name: '￥100-￥200',
	isActive: false,
	min: 100,
	max: 200,
}, {
	name: '￥200-￥300',
	isActive: false,
	min: 200,
	max: 300,
}, {
	name: '￥300-￥400',
	isActive: false,
	min: 300,
	max: 400,
}, {
	name: '￥400以上',
	isActive: false,
	min: 400,
}]

export const MEAL_DISTANCE = [{
	name: '附近',
	value: '-',
	isActive: false,
}, {
	name: '500m',
	value: '500',
	isActive: false,
}, {
	name: '1km',
	value: '1000',
	isActive: false,
}, {
	name: '3km',
	value: '3000',
	isActive: false,
}, {
	name: '5km',
	value: '5000',
	isActive: false,
}, {
	name: '10km',
	value: '10000',
	isActive: false,
}]

// 订单类型
export const ORDER_TYPE = [{
	text: '商城',
	value: '1',
}, {
	text: '民宿',
	value: 'C',
}, {
	text: '美食',
	value: 'G',
}, {
	text: '外卖',
	value: 'W',
}]


// 订单状态-票付通
export const ORDER_STATUS = [{
	text: '全部',
	value: '-1',
}, {
	text: '未支付',
	value: '0',
}, {
	text: '已支付',
	value: '1',
}]

// 订单状态-商城
export const ORDER_STATUS2 = [{
	text: '全部',
	value: '-1',
}, {
	text: '待支付',
	value: '101',
}, {
	text: '已完成',
	value: '201',
}]
