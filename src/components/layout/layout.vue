<template>
  <div>
    <div class="layout-head">
      <el-button @click="logout">退出</el-button>
      <el-button @click="testOvertimeLogout">测试超时退出</el-button>
    </div>
    <slot></slot>
  </div>
</template>

<script>
import { testOvertimeLogout } from '@/api/user'
export default {
  name: 'Layout',
  methods: {
    logout() {
      this.$store.dispatch('logout')
    },
    testOvertimeLogout() {
      testOvertimeLogout().then(r => {
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