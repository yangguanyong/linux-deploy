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
    redirect: '/album'
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

const router = new Router({
  mode: 'history',
  base: 'pc',
  routes: [].concat(userRouter).concat(albumRouter)
})

export default router
