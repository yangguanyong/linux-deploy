const store = {
  state: {
    token: '',
    userInfo: null
  },
  mutations: {
    SET_TOKEN (state, token) {
      state.token = token
    },
    SET_USERINFO (state, userinfo) {
      state.userInfo = userinfo
    }
  },
  actions: {
    setUserInfo ({ commit }, userinfo) {
      console.log('setUserInfo', userinfo)
      commit('SET_USERINFO', userinfo)
    }
  }
}

export default store