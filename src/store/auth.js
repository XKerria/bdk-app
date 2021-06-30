const state = () => ({
  user: null,
  firm: null
})

const mutations = {
  set_user(state, payload) {
    state.user = payload
  },
  set_firm(state, payload) {
    state.firm = payload
  }
}

const actions = {
  setUser({commit}, obj) {
    commit('set_user', obj)
  },
  setFirm({commit}, obj) {
    commit('set_firm', obj)
  }
}

export default {namespaced: true, state, mutations, actions}
