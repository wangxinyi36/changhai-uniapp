const state = {
	mallList: [],
	mallSelectList: []
}
const mutations = {}
const getters = {}
const actions = {
	async add({
		commit,
		state
	}, goods) {
		console.log(commit)
		console.log(state)
	}
}


export default {
	state,
	getters,
	actions,
	mutations
}
