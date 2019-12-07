<template>
  <Layout>
    <div>相册详情</div>
    <Upload
      postUrl="/api/upload/file"
      type="img">
      <span>上传照片</span>
    </Upload>
    <div>
      <div v-for="(item, index) in list" :key="index">
        <img :src="item.url" alt="" class="photos-item">
        <span>日期：{{ item.date }}</span>
        <span>描述：{{ item.desc }}</span>
        <span @click="deleteHandle(item)">删除</span>
      </div>
    </div>
  </Layout>
</template>

<script>
import { getAlbumDetail } from '@/api/album'
import { deletePhoto } from '@/api/photo'
export default {
  data() {
    const id = this.$route.query.albumId
    return {
      id,
      list: []
    }
  },
  mounted() {
    this.getAlbumDetail()
  },
  methods: {
    getAlbumDetail() {
      getAlbumDetail({
        id: this.id
      }).then(r => {
        this.list = r.response.photoList
      })
    },
    deleteHandle(item) {
      deletePhoto({
        id: item.id
      }).then(r => {
        this.$message({
          type: 'success',
          message: '照片删除成功'
        })
        this.getAlbumDetail()
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.photos-item{
  width: 100px;
  height: 100px;
}
</style>