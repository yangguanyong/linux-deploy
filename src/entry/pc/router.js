import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const userRouter = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/pc/login')
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('@/views/pc/register')
  }
]

const albumRouter = [
  {
    path: '/',
    redirect: '/album',
    name: 'Home'
  },
  {
    path: '/album',
    name: 'Album',
    component: () => import('@/views/pc/album')
  },
  {
    path: '/album-add',
    name: 'AlbumAdd',
    component: () => import('@/views/pc/album/add-album')
  },
  {
    path: '/album-detail',
    name: 'AlbumADetail',
    component: () => import('@/views/pc/album/album-detail')
  }
]

const systemRouter = [
  {
    path: '/system',
    name: 'System',
    component: () => import('@/views/pc/system/index')
  }
]

const errorRouter = [
  {
    path: '/noPermission',
    name: 'noPermission',
    component: () => import('@/views/pc/error/no-permission')
  }
]

const router = new Router({
  mode: 'history',
  base: 'pc',
  routes: [].concat(userRouter).concat(albumRouter).concat(systemRouter).concat(errorRouter)
})

export default router
