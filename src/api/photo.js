import request from './index'

export function deletePhoto() {
  return request({
    url: '/api/photo/deletePhoto',
    method: 'post'
  })
}