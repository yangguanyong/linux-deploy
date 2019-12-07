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