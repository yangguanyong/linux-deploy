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
    logout () {
      logout().then(r => {
        removeToken()
        window.location.reload() // 最简单直接的退出方法
      })
    }
  }
}

export default store