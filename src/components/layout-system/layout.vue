<template>
  <div>
    <div class="layout-head">
      <span>管理后台</span>
      <el-button @click="logout">退出</el-button>
      <el-button @click="testNoPermisstion">测试没有权限</el-button>
    </div>
    <div class="layout-aside">
      <span @click="toSystemUser">用户管理</span>
      <span @click="toSystemPhoto">照片管理</span>
    </div>
    <div class="layout-body">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import { testNoPermisstion } from '@/api/user'
export default {
  name: 'LayoutSystem',
  methods: {
    logout() {
      this.$store.dispatch('logout')
    },
    testNoPermisstion() {
      testNoPermisstion().then(r => {
      })
    },
    toSystemUser() {
      this.$router.push({
        name: 'SystemUser'
      })
    },
    toSystemPhoto() {
      this.$router.push({
        name: 'SystemPhoto'
      })
    }
  }
}
</script>

<style lang="stylus" scoped>
.layout-head {
  border-bottom: 1px solid #e1e1e1;
}
</style>