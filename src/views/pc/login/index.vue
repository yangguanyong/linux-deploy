<template>
  <div>
    <h2>登录页面</h2>
    <div>
      <el-form :model="formData" :rules="rules" ref="ruleForm">
        <el-form-item label="账号" prop="account">
          <el-input v-model="formData.account"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="formData.password"></el-input>
        </el-form-item>
      </el-form>
    </div>
    <el-button @click="submitHandle">
      登录
    </el-button>
    <el-button @click="register">注册页面</el-button>
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
            // const token = res.response
            // this.$store.dispatch('setToken', token).then(res => {
            //   this.$router.push({
            //     name: 'Album'
            //   })
            // })
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