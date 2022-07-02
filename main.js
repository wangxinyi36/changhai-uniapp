// #ifndef VUE3
import Vue from 'vue'
import App from './App'
import store from './store/index'
import API from '@/common/api.js';
import {
	http
} from '@/common/http.js'

Vue.config.productionTip = false

const MATH_CONFIG = {
	epsilon: 1e-12,
	matrix: 'Matrix',
	number: 'BigNumber',
	precision: 64,
	predictable: false,
	randomSeed: null
}

App.mpType = 'app'

Vue.prototype.$store = store;

Vue.prototype.$API = API;
Vue.prototype.$http = http;





const app = new Vue({
	...App,
	store,
})
app.$mount()
// #endif

// #ifdef VUE3
import {
	createSSRApp
} from 'vue'
import App from './App.vue'
export function createApp() {
	const app = createSSRApp(App)
	return {
		app
	}
}
// #endif
