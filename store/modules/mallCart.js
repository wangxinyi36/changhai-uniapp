import Vue from 'vue'

const state = {
	mallSelectList: []
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
	},
	REDUCE_MALL_CART(state, payload) {
		state.mallSelectList = state.mallSelectList.map((item, index) => {
			if (item.id === payload.id) {
				item.count--;
			}
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
	}
}


export default {
	state,
	getters,
	actions,
	mutations
}
