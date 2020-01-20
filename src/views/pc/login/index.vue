<template>
  <div class="login-module">
    <div class="content-wrap">
      <el-form :model="formData" :rules="rules" ref="ruleForm">
        <el-form-item label="账号" prop="account">
          <el-input v-model="formData.account" placeholder="请输入账号"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="formData.password" placeholder="请输入密码"></el-input>
        </el-form-item>
      </el-form>
    </div>
    <div class="btn-wrap">
      <el-button @click="submitHandle" type="primary" class="login-button">
        登录
      </el-button>
      <el-button @click="register">注册</el-button>
    </div>
  </div>
</template>

<script>
const rules = {
  account: [
    { required: true, message: '请填写账号', trigger: 'change' }
  ],
  password: [
    { required: true, message: '请填写密码', trigger: 'change' }
  ]
}
import { login } from '@/api/user'
export default {
  data () {
    return {
      formData: {
        account: '',
        password: ''
      }, 
      rules
    }
  },
  methods: {
    submitHandle () {
      this.$refs.ruleForm.validate((valid) => {
        if (valid) {
          login(this.formData).then(res => {
            const token = res.response
            if (token) {
              this.$store.dispatch('setToken', token).then(res => {
                this.$router.push({
                  name: 'Album'
                })
              })
            } else {
              this.$message('登录失败')
            }
          })
        } else {
        }
      })
    },
    register() {
      this.$router.push({
        name: 'Register'
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.login-module{
  .content-wrap{
    width: 400px;
    margin: auto;
    margin-top: 100px;
  }
  .btn-wrap{
    width: 400px;
    margin: auto;
  }
  .login-button{
    width: 120px;
  }
}
</style>