import Vue from 'vue'
import {
	setStorage,
	getStorage,
	removeStorage
} from '@/common/fun.js'

const state = {
	mallSelectList: [], //购物车列表
	isSelectAll: false, //全选
}
const mutations = {
	ADD_MALL_CART(state, payload) {
		if (state.mallSelectList.length === 0) {
			payload.count = 1;
			state.mallSelectList.push(payload)
		} else {
			let findIndex = state.mallSelectList.findIndex(item => item.id === payload.id)
			if (findIndex < 0) {
				payload.count = 1;
				state.mallSelectList.push(payload)
			} else {
				state.mallSelectList = state.mallSelectList.map((item, index) => {
					if (index === findIndex) {
						item.count++;
					}
					return item;
				})
			}
		}
		setStorage('mallSelectList', state.mallSelectList)
	},
	REDUCE_MALL_CART(state, payload) {
		state.mallSelectList = state.mallSelectList.map((item, index) => {
			if (item.id === payload.id) {
				item.count--;
			}
			return item;
		})
		setStorage('mallSelectList', state.mallSelectList)
	},
	CLEAR_MALL_CART(state) {
		state.mallSelectList = [];
		removeStorage('mallSelectList')
	},
	GET_MALL_CART(state) {
		state.mallSelectList = getStorage('mallSelectList')
	},
	SELECTALL_MALL_CART(state) {
		state.isSelectAll = !state.isSelectAll;
		state.mallSelectList.map(item => {
			item.isAcitve = state.isSelectAll;
			return item;
		})
	},
	SELECT_MALL_CART(state, payload) {
		state.mallSelectList.map(item => {
			if (item.id === payload.id) {
				item.isAcitve = item.isAcitve ? false : true
			}
			console.log(item.isAcitve)
			return item;
		})
	}
}
const getters = {}
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
}


export default {
	state,
	getters,
	actions,
	mutations
}
