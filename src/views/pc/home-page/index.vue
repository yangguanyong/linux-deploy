<template>
  <Layout>
    <div>
      <span>相册列表</span>
      <div v-for="(item, index) in list" :key="index">
        {{ item.name }}
      </div>
    </div>
  </Layout>
</template>

<script>
import Layout from '@/components/layout/layout'
import { getAlbumList } from '@/api/album'
export default {
  components: {
    Layout
  },
  data() {
    return {
      list: []
    }
  },
  mounted() {
    this.getAlbumList()
  },
  methods: {
    getAlbumList() {
      getAlbumList().then(r => {
        this.list = r.response
      })
    }
  }
}
</script>