import axios from 'axios'

const request = function (config) {
  const { method, url } = config
  return axios({
    method,
    url
  })
}

export default request

