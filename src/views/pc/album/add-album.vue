<template>
  <Layout>
    <div>
      <el-form :model="formData">
        <el-form-item label="相册名称" prop="name">
          <el-input v-model="formData.name"></el-input>
        </el-form-item>
        <el-form-item label="相册封面">
          <Upload
            postUrl="/api/upload/file"
            type="img"
            @success="success">
            <span>上传照片</span>
          </Upload>
          <img :src="formData.imgUrl" alt="" class="cover">
        </el-form-item>
      </el-form>
    </div>
    <el-button @click="submitHandle">提交</el-button>
  </Layout>
</template>

<script>
import { addAlbum } from '@/api/album'
export default {
  components: {
  },
  mounted() {},
  data() {
    return {
      formData: {
        name: '',
        imgUrl: ''
      }
    }
  },
  methods: {
    success(res) {
      const url = res.response
      this.formData.imgUrl = url
    },
    submitHandle() {
      addAlbum(this.formData).then(r => {
        this.$message({
          type: 'success',
          message: '创建成功'
        })
        this.$router.push({
          name: 'AlbumADetail',
          query: {
            albumId: r.response.id
          }
        })
      })
    }
  }
}
</script>

<style lang="stylus" scoped>
.cover{
  width: 100px;
  height: 100px;
}
</style>