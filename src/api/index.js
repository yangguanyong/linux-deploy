import axios from 'axios'
import { pcTokenName, getToken } from '@/util/token'
import { Message } from 'element-ui'

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
    Message('token过期，请重新登录')
    const $store = window.$env.store
    $store.dispatch('logout')
    return Promise.reject(response.data)
  } else if (response.data.code === 403) { // 没有权限
    const $router = window.$env.router
    $router.push({
      name: 'noPermission'
    })
  } else {
    if (response.data.message === 'fail') {
      Message(response.data.response)
      return Promise.reject(response.data)
    } else {
      return response.data // 只返回data
    }
  }
}, (error) => {
  return Promise.reject(error)
})

const request = function (config) {
  const { method, url, params, data } = config
  return axios({
    method,
    url,
    params,
    data
  })
}

export default request

