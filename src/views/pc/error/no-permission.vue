<template>
  <div>
    <span>没有权限</span>
    <el-button @click="goHome">返回首页</el-button>
  </div>
</template>

<script>
export default {
  methods: {
    goHome() {
      this.$router.push({
        name: 'Home'
      })
    }
  }
}
</script>