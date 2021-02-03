import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        pc_or_mobile: '',
    },
    mutations: {
        pc_or_mobile (state, data) {
            state.pc_or_mobile = data
        },
    },
    actions: {},
    modules: {}
})
