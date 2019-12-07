<template>
  <div>
    <div class="layout-head">
      <span>管理后台</span>
      <el-button @click="logout">退出</el-button>
      <el-button @click="testNoPermisstion">测试没有权限</el-button>
    </div>
    <slot></slot>
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
    }
  }
}
</script>

<style lang="scss" scoped>
.layout-head{
  border-bottom: 1px solid #e1e1e1;
}
</style>