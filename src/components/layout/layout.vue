<template>
  <div>
    <div>
      <el-button @click="logout">退出</el-button>
      <el-button @click="testOvertimeLogout">测试超时退出</el-button>
    </div>
    <slot></slot>
  </div>
</template>

<script>
import { testOvertimeLogout } from '@/api/user'
export default {
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