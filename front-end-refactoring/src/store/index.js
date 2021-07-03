import { createStore } from 'vuex'

export default createStore({
  state: {
    title: '',
  },
  getters: {
    getTitle(state) {
      return state.title
    },
  },
  mutations: {
    setTitle(state, newValue) {
      state.title = newValue
    },
  },
  actions: {
    set_title(context, payload) {
      context.commit('setTitle', payload.title)
    },
  },
  modules: {},
})
