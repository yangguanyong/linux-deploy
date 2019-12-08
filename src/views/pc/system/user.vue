<template>
  <div>
    <div>用户管理</div>
    <div v-for="(item, index) in list" :key="index">
      <span>{{ item.name }}</span>
      <span @click="changeType(item)">更改身份设置</span>
    </div>
  </div>
</template>

<script>
import { getUserList, changeType } from '@/api/system'
export default {
  data() {
    return {
      list: []
    }
  },
  mounted() {
    this.getData()
  },
  methods: {
    getData() {
      getUserList().then(r => {
        this.list= r.response
      })
    },
    changeType(item) {
      changeType({
        id: item.id,
        type: 1
      }).then(r => {
        this.$message({
          type: 'success',
          message: '设置成功'
        })
        this.getData()
      })
    }
  }
}
</script>