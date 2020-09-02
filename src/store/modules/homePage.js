const state = {
    item: {},
}

const actions = {
    updateCount({ commit }, payload) {
        commit('updatateItem', payload);
    }
} 
const mutations = {
    updatateItem(state, data) {
        state.item = data;
    }
}

const getters = {
    getCount(state) {
        return state.item;
    }
}
export default {
    state,
    getters,
    actions,
    mutations
}