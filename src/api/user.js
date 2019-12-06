import request from './index'

export function login () {
  return request({
    url: '/api/user/login',
    method: 'get'
  })
}