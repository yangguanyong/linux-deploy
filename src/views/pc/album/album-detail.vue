<template>
  <Layout>
    <div class="album-detail-head">
      <!-- <p>封面:{{ data.cover }}</p> -->
      <!-- <span>照片数量:{{ data.photoList.length }}</span> -->
      <span>{{ data.name }}</span>
      <span class="el-icon-circle-check icon-select"></span>
      <span class="el-icon-upload2 icon-upload" @click="goUploadPhoto"></span>
    </div>
    <div class="images">
      <el-row :gutter="5">
        <el-col :span="2" v-for="(item, index) in data.photoList" :key="index" class="album-detail-item">
          <img :src="item.url" alt="" class="photos-item" @click="goDetail(item)">
          <!-- <span>日期：{{ item.date }}</span>
          <span>描述：{{ item.desc }}</span> -->
          <!-- <span @click="deleteHandle(item)">删除</span> -->
          <span class="el-icon-circle-check icon-delete"></span>
          <span class="el-icon-success icon-delete-select"></span>
        </el-col>
      </el-row>
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
  computed: {
    photo() {
      return this.data.photoList.map(u => { return u.url })
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
      }).then(() => {
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
    },
    goDetail() {
    }
  }
}
</script>

<style lang="stylus" scoped>
$headHeight = 30px;
.album-detail-head{
  height: $headHeight;
  background: #efefef;
  margin-bottom: 10px;
  border-radius: 4px;
  line-height: $headHeight;
  padding: 0px 10px;
  position: relative;
  .icon-select{
    font-size: 20px;
    float: right;
    line-height: $headHeight;
  }
  .icon-upload{
    font-size: 20px;
    float: right;
    margin-right: 5px;
    line-height: $headHeight;
  }
}
.album-detail-item{
  width: 100px;
  height: 95px;
  float: left;
  position: relative;
  .photos-item{
    width: 100%;
    height: 100%;
  }
  .icon-delete{
    position: absolute;
    right: 10px;
    bottom: 10px;
    color: white;
  }
  .icon-delete-select{
    position: absolute;
    right: 10px;
    bottom: 10px;
    display: none;
  }
}
</style>