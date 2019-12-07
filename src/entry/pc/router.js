import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: 'pc',
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'Home',
      component: () => import('./../../views/pc/home-page')
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('./../../views/pc/login')
    },
    {
      path: '/register',
      name: 'Register',
      component: () => import('@/views/pc/register')
    }
  ]
})

export default router
