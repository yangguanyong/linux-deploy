<template>
  <Layout>
    <el-form>
      <el-form-item label="描述">
        <el-input v-model="formData.desc"></el-input>
      </el-form-item>
      <el-form-item label="日期">
        <el-input v-model="formData.date"></el-input>
      </el-form-item>
      <el-form-item label="路径">
        <el-input v-model="formData.url"></el-input>
        <Upload
          :postUrl="postUrl"
          @success="successHandle"
          type="img"
          name="data">
          <span>上传本地照片</span>
        </Upload>
      </el-form-item>
    </el-form>
    <el-button @click="save">保存</el-button>
  </Layout>
</template>

<script>
import { addPhoto } from '@/api/photo'
import { pcTokenName, getToken } from '@/util/token'
export default {
  data() {
    const albumId = this.$route.query.albumId
    return {
      albumId: albumId,
      formData: {
        date: '',
        url: '',
        desc: '',
        albumId: albumId
      }
    }
  },
  computed: {
    postUrl() {
      return `/api/upload/file?${pcTokenName}=${getToken()}`
    }
  },
  methods: {
    successHandle(data) {
      this.$message({
        type: 'success',
        message: '上传成功'
      })
      this.formData.url = data.response
    },
    save() {
      if (!this.formData.url) {
        this.$message('图片路径为必填')
        return
      }
      addPhoto(this.formData).then(r => {
        this.$message({
          type: 'success',
          message: '上传成功'
        })
        this.$router.push({
          name: 'AlbumADetail',
          query: {
            albumId: this.albumId
          }
        })
      })
    }
  }
}
</script>
