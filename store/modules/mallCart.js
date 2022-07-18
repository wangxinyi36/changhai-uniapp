import Vue from 'vue'
import {
	setStorage,
	getStorage,
	removeStorage
} from '@/common/fun.js'

const state = {
	mallSelectList: [], //购物车列表
	isSelectAll: false, //全选,
	sellectCount: 0, //选择的个数
	totalMoney: 0, //总钱数
}
const mutations = {
	ADD_MALL_CART(state, payload) {
		if (state.mallSelectList.length === 0) {
			payload.count = 1;
			payload.isAcitve = false
			state.mallSelectList.push(payload)
		} else {
			let findIndex = state.mallSelectList.findIndex(item => item.id === payload.id)
			if (findIndex < 0) {
				payload.count = 1;
				payload.isAcitve = false
				state.mallSelectList.push(payload)
			} else {
				state.mallSelectList.map((item, index) => {
					if (index == findIndex) {
						item.count++;
					}
					return item;
				})
			}
		}
		setStorage('mallSelectList', state.mallSelectList)
	},
	REDUCE_MALL_CART(state, payload) {
		let i = -1;
		state.mallSelectList = state.mallSelectList.map((item, index) => {
			if (item.id === payload.id) {
				item.count--;
				if (item.count == 0) {
					i = index;
				}
			}
			return item;
		})
		if (i != -1) {
			state.mallSelectList.splice(i, 1)
		}
		setStorage('mallSelectList', state.mallSelectList)
	},
	CLEAR_MALL_CART(state) {
		state.mallSelectList = [];
		setStorage('mallSelectList', state.mallSelectList)
	},
	GET_MALL_CART(state) {
		state.mallSelectList = getStorage('mallSelectList') || []
	},
	CANCEL_ACTIVE(state) {
		state.mallSelectList.map(item => {
			item.isAcitve = false;
			return item;
		})
		state.isSelectAll = false;
		state.sellectCount = 0;
		state.totalMoney = 0;
		setStorage('mallSelectList', state.mallSelectList)
	},
	SELECTALL_MALL_CART(state) {
		state.isSelectAll = !state.isSelectAll;
		state.mallSelectList.map(item => {
			item.isAcitve = state.isSelectAll;
			return item;
		})

		if (state.isSelectAll) {
			state.sellectCount = state.mallSelectList.length;
		} else {
			state.sellectCount = 0;
			state.totalMoney = 0;
		}
	},
	SELECT_MALL_CART(state, payload) {
		state.mallSelectList.map(item => {
			if (item.id == payload.id) {
				item.isAcitve = payload.isAcitve ? false : true;
				item.isAcitve ? state.sellectCount++ : state.sellectCount--;
			}
			return item;
		})
		if (state.sellectCount == state.mallSelectList.length) {
			state.isSelectAll = true;
		} else {
			state.isSelectAll = false
		}
	},
	PAY_MALL_CART(state, payload) {
		let afterBuy = [];
		state.mallSelectList.forEach(item => {
			if (!item.isAcitve) {
				afterBuy.push(item)
			}
		})
		state.mallSelectList = afterBuy;
		setStorage('mallSelectList', state.mallSelectList)
	}
}
const getters = {
	// 计算总金额
	getMoney(state) {
		if (state.sellectCount == 0) {
			state.totalMoney = 0;
		}
		let money = 0;
		state.mallSelectList.forEach(item => {
			if (item.isAcitve) {
				let fen = item.retailPrice * 100; //价格单位是分
				money += item.count * fen;
			}
		})
		state.totalMoney = money / 100;
		return state.totalMoney;
	},
}
const actions = {
	ADD_MALL_CART({
		commit,
	}, param) {
		commit('ADD_MALL_CART', param)
	},
	REDUCE_MALL_CART({
		commit,
	}, param) {
		commit('REDUCE_MALL_CART', param)
	},
	CLEAR_MALL_CART({
		commit,
	}) {
		commit('CLEAR_MALL_CART')
	},
	SELECTALL_MALL_CART({
		commit,
	}) {
		commit('SELECTALL_MALL_CART')
	},
	SELECT_MALL_CART({
		commit,
		state
	}, param) {
		if (state.mallSelectList.length === 1) {
			commit('SELECTALL_MALL_CART')
		} else {
			commit('SELECT_MALL_CART', param)
		}
	},
	PAY_MALL_CART({
		commit,
	}) {
		commit('PAY_MALL_CART')
	},
}


export default {
	state,
	getters,
	actions,
	mutations
}
