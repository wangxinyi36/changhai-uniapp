import Vue from 'vue'
import Vuex from 'vuex'

import mallCart from '@/store/modules/mallCart.js'

Vue.use(Vuex)

const store = new Vuex.Store({
	state: { //存放状态
	
	},
	modules: {
		mallCart,
	}
})
export default store
