<template>
  <div>
    <h2>注册页面</h2>
    <div>
      <el-form :model="formData" :rules="rules" ref="ruleForm">
        <el-form-item label="账号" prop="account">
          <el-input v-model="formData.account"></el-input>
        </el-form-item>
        <el-form-item label="用户名" prop="username">
          <el-input v-model="formData.username"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="formData.password"></el-input>
        </el-form-item>
        <el-form-item label="重复密码" prop="repeatPassword">
          <el-input v-model="formData.repeatPassword"></el-input>
        </el-form-item>
      </el-form>
    </div>
    <el-button @click="submitHandle">
      注册
    </el-button>
    <el-button @click="goLogin">
      登录页面
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
            register(this.formData).then(r => {
              this.$message('注册成功')
              this.$router.push({
                name: 'Login'
              })
            })
          }
        } else {
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