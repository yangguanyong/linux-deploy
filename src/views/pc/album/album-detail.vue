<template>
  <Layout>
    <div>相册详情</div>
    <div>
      <p>名称:{{ data.name }}</p>
      <p>封面:{{ data.cover }}</p>
      <p>照片数量:{{ data.photoList.length }}</p>
    </div>
    <!-- <img src="http://192.168.1.103:3020/1.JPG" style="width: 100px;"> -->
    <el-button @click="goUploadPhoto">上传照片</el-button>
    <div>
      <div v-for="(item, index) in data.photoList" :key="index">
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
      data: {
        name: '',
        cover: '',
        photoList: []
      }
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
        this.data = r.response
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
    },
    goUploadPhoto() {
      this.$router.push({
        name: 'UploadPhotoRoute',
        query: {
          albumId: this.id,
          albumName: this.data.name
        }
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