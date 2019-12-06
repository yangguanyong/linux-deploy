import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: 'pc',
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('./../../views/pc/home-page')
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('./../../views/pc/login')
    }
  ]
})
