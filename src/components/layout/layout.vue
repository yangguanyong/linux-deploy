<template>
  <div>
    <div class="layout-head">
      <el-button @click="logout">退出</el-button>
      <el-button @click="testOvertimeLogout">测试超时退出</el-button>
      <el-button @click="goSystem" v-if="isAdmin">管理后台</el-button>
    </div>
    <slot></slot>
  </div>
</template>

<script>
import { testOvertimeLogout } from '@/api/user'
export default {
  name: 'Layout',
  computed: {
    isAdmin() {
      return this.$store.state.user.userInfo.type === 0 // 管理员
    }
  },
  methods: {
    logout() {
      this.$store.dispatch('logout')
    },
    testOvertimeLogout() {
      testOvertimeLogout().then(r => {
      })
    },
    goSystem() {
      this.$router.push({
        name: 'System'
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