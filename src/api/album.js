/**
 * 相册
 */

import request from './index'

export function getAlbumList () {
  return request({
    url: '/api/album/getList',
    method: 'get'
  })
}

export function addAlbum(data) {
  return request({
    url: '/api/album/add',
    method: 'post',
    data
  })
}

export function getAlbumDetail(params) {
  return request({
    url: '/api/album/getDetail',
    method: 'get',
    params
  })
}

export function deleteAlbum(data) {
  return request({
    url: '/api/album/deleteAlbum',
    method: 'post'
  })
}