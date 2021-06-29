const state = () => ({
  user: null,
  firm: null,
  brand: null,
  series: null
})

const mutations = {
  set_user(state, payload) {
    state.user = payload
  },
  set_firm(state, payload) {
    state.firm = payload
  },
  set_brand(state, payload) {
    state.brand = payload
  },
  set_series(state, payload) {
    state.series = payload
  }
}

const actions = {
  setUser({commit}, obj) {
    commit('set_user', obj)
  },
  setFirm({commit}, obj) {
    commit('set_firm', obj)
  },
  setBrand({commit}, obj) {
    commit('set_brand', obj)
  },
  setSeries({commit}, obj) {
    commit('set_series', obj)
  }
}

export default {namespaced: true, state, mutations, actions}
