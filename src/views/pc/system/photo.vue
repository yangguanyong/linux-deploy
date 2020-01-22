<template>
  <div>
    <span>照片管理</span>
    <div v-for="(item, index) in list" :key="index">
      <img :src="item.url" alt="" class="img-item">
      <span @click="changePhotoType(item)">设置审核</span>
    </div>
  </div>
</template>

<script>
import { getPhotoList, changePhotoType } from '@/api/system'
export default {
  data() {
    return {
      list: []
    }
  },
  mounted() {
    this.getData()
  },
  methods: {
    getData() {
      getPhotoList().then(r => {
        this.list = r.response
      })
    },
    changePhotoType(item) {
      changePhotoType({
        id: item.id,
        type: 2
      }).then(r => {
        this.$message({
          type: 'success',
          message: '设置成功'
        })
        this.getData()
      })
    }
  }
}
</script>

<style lang="stylus" scoped>
.img-item{
  width: 320px;
  height: 180px;
}
</style>