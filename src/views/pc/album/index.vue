<template>
  <Layout>
    <div>
      <el-row :gutter="20">
        <el-col :span="6">
          <div @click="addHandle" class="add-btn">
            +
          </div>
        </el-col>
        <el-col :span="6" v-for="(item, index) in list" :key="index">
          <div class="album-item">
            <div class="album-cover" @click="goAlbumDetail(item)"></div>
            <div class="album-content">
              <span>{{ item.name }}</span>
              <i class="el-icon-delete icon-delete" @click="deleteHandle(item)"></i>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
  </Layout>
</template>

<script>
import Layout from '@/components/layout/layout'
import { getAlbumList, deleteAlbum } from '@/api/album'
export default {
  components: {
    Layout
  },
  data() {
    return {
      list: []
    }
  },
  mounted() {
    this.getAlbumList()
  },
  methods: {
    getAlbumList() {
      getAlbumList().then(r => {
        this.list = r.response
      })
    },
    addHandle() {
      this.$router.push({
        name: 'AlbumAdd'
      })
    },
    goAlbumDetail(item) {
      this.$router.push({
        name: 'AlbumADetail',
        query: {
          albumId: item.id
        }
      })
    },
    deleteHandle(item) {
      deleteAlbum({
        id: item.id
      }).then(r => {
        this.$message({
          type: 'success',
          message: '删除成功'
        })
        this.getAlbumList()
      })
    }
  }
}
</script>

<style lang="stylus" scoped>
$itemHeight = 110px;
.add-btn{
  height: $itemHeight;
  margin-bottom: 10px;
  border-radius: 5px;
  border: 2px dashed #e1e1e1;
  box-sizing: border-box;
  color: #e1e1e1;
  font-size: 50px;
  text-align: center;
  line-height: $itemHeight;
  cursor: pointer;
}
.album-item{
  height: $itemHeight;
  margin-bottom: 10px;
  border: 1px dashed #e1e1e1;
  position: relative;
  &:hover .album-delete{
    display: block;
  }
  .album-cover{
    height: 60px;
    background: #e1e1e1;
    width: 90%;
    margin: 10px auto;
    border: 2px solid lightgrey;
    cursor: pointer;
  }
  .album-content{
    width: 90%;
    margin: auto;
    position: relative;
    .icon-delete{
      position: absolute;
      right: 0px;
      color: #e1e1e1;
      cursor: pointer;
      &:hover{
        color: gray;
      }
    }
  }
}
</style>