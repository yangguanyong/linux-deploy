import axios from 'axios'

axios.interceptors.request.use(function (config) { // 拦截req
  return config;
}, function (error) {
  return Promise.reject(error);
});

axios.interceptors.response.use((response) => { // 拦截res
  return response.data // 只返回data
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

