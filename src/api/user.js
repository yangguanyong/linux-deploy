import request from './index'

export function login(data) { // 登录
  return request({
    url: '/api/user/login',
    method: 'get',
    data
  })
}

export function getUserInfo(data) { // 获取用户信息
  return request({
    url: '/api/user/getUserInfo',
    method: 'get',
    data
  })
}

export function logout(data) { // 登出
  return request({
    url: '/api/user/logout',
    method: 'get',
    data
  })
}

export function testOvertimeLogout(data) { // 测试超时退出
  return request({
    url: '/api/user/testOvertimeLogout',
    method: 'get',
    data
  })
}