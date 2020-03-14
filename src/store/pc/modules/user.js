import { setToken, removeToken } from '@/util/token'
import { getUserInfo, logout } from '@/api/user'

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
    setToken ({ commit }, token) {
      setToken(token)
      commit('SET_TOKEN', token)
    },
    setUserInfo ({ commit }, token) {
      getUserInfo({ token }).then(r => {
        const userInfo = r.response
        commit('SET_USERINFO', userInfo)
      })
    },
    logout ({ commit }) {
      logout().then(() => {
        removeToken()
        commit('SET_TOKEN', '')
        commit('SET_USERINFO', null)
        window.$env.router.push({
          name: 'Login'
        })
      })
    }
  }
}

export default store