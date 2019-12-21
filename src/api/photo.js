import request from './index'

export function deletePhoto() {
  return request({
    url: '/api/photo/deletePhoto',
    method: 'post'
  })
}

export function addPhoto(data) {
  return request({
    url: '/api/photo/addPhoto',
    method: 'post',
    data
  })
}