<template>
  <Layout>
    <div>
      <span>相册列表</span>
      <el-button @click="addHandle">新增相册</el-button>
      <div v-for="(item, index) in list" :key="index">
        <span @click="goAlbumDetail(item)">{{ item.name }}</span>
        <span @click="deleteHandle(item)">删除</span>
      </div>
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