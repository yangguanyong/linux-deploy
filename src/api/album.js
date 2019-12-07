/**
 * 相册
 */

import request from './index'

export function getAlbumList (data) {
  return request({
    url: '/api/album/getList',
    method: 'get',
    data
  })
}

export function addAlbum(data) {
  return request({
    url: '/api/album/add',
    method: 'post'
  })
}

export function getAlbumDetail(data) {
  return request({
    url: '/api/album/getDetail',
    method: 'get',
    data
  })
}

export function deleteAlbum(data) {
  return request({
    url: '/api/album/deleteAlbum',
    method: 'post'
  })
}