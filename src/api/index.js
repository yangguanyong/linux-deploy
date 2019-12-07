import axios from 'axios'
import { pcTokenName, getToken } from '@/util/token'

axios.interceptors.request.use(function (config) { // 拦截req
  if (getToken()) {
    config.headers[pcTokenName] = getToken()
  }
  return config;
}, function (error) {
  return Promise.reject(error);
});

axios.interceptors.response.use((response) => { // 拦截res
  if (response.data.code === 408) { // 登录超时
    const $store = window.$env.store
    $store.dispatch('logout')
  } else if (response.data.code === 403) { // 没有权限
    const $router = window.$env.router
    $router.push({
      name: 'noPermission'
    })
  } else {
    return response.data // 只返回data
  }
}, (error) => {
  return Promise.reject(error)
})

const request = function (config) {
  const { method, url } = config
  return axios({
    method,
    url
  })
}

export default request

