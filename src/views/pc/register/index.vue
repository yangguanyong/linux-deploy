<template>
  <div class="register-module">
    <div>
      <el-form :model="formData" :rules="rules" ref="ruleForm">
        <el-form-item label="账号" prop="account">
          <el-input v-model="formData.account" placeholder="请输入账号"></el-input>
        </el-form-item>
        <el-form-item label="用户名" prop="username">
          <el-input v-model="formData.username" placeholder="请输入用户名"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="formData.password" placeholder="请输入密码"></el-input>
        </el-form-item>
        <el-form-item label="重复密码" prop="repeatPassword">
          <el-input v-model="formData.repeatPassword" placeholder="请输入重复密码"></el-input>
        </el-form-item>
      </el-form>
    </div>
    <el-button @click="submitHandle" class="register-btn" type="primary">
      注册
    </el-button>
    <el-button @click="goLogin">
      登录
    </el-button>
  </div>
</template>

<script>
const rules = {
  account: [
    { required: true, message: '请填写账号', trigger: 'change' }
  ],
  username: [
    { required: true, message: '请填写用户名', trigger: 'change' }
  ],
  password: [
    { required: true, message: '请填写密码', trigger: 'change' }
  ],
  repeatPassword: [
    { required: true, message: '请填写密码', trigger: 'change' }
  ]
}
import { register } from '@/api/user'
export default {
  data () {
    return {
      formData: {
        account: '',
        username: '',
        password: '',
        repeatPassword: ''
      }, 
      rules
    }
  },
  methods: {
    submitHandle () {
      this.$refs.ruleForm.validate((valid) => {
        if (valid) {
          if (this.formData.password !== this.formData.repeatPassword) {
            this.$message('密码必须一致')
            return
          } else {
            register(this.formData).then(() => {
              this.$message('注册成功')
              this.$router.push({
                name: 'Login'
              })
            })
          }
        }
      })
    },
    goLogin() {
      this.$router.push({
        name: 'Login'
      })
    }
  }
}
</script>

<style lang="stylus" scoped>
.register-module{
  width: 400px;
  margin: auto;
  margin-top: 70px;
}
.register-btn{
  width: 120px;
}
</style>