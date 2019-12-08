import request from './index'

export function getUserList(data) {
  return request({
    url: '/api/system/getUserList',
    method: 'get',
    data
  })
}

export function changeType() {
  return request({
    url: '/api/system/changeType',
    method: 'post'
  })
}

export function getPhotoList(data) {
  return request({
    url: '/api/system/getPhotoList',
    method: 'get',
    data
  })
}

export function changePhotoType(data) {
  return request({
    url: '/api/system/changePhotoType',
    method: 'post'
  })
}