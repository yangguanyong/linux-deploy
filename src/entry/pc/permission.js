import router from './router'
import { getToken } from '@/util/token'

const whiteList = ['Login'] // 白名单

router.beforeEach((to, from, next) => {
  if (whiteList.includes(to.name)) { // 如果是白名单则直接进入
    next()
  } else {
    const token = getToken()
    if (token) {
      const $store = window.$env.store
      if ($store.state.userInfo) {
        next()
      } else {
        $store.dispatch('setUserInfo', token).then(r => {
          next()
        })
      }
    } else {
      next({
        name: 'Login'
      })
    }
  }
})