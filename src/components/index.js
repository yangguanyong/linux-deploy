import Vue from 'vue'

import Layout from '@/components/layout/layout'

export default {
  install () {
    Vue.component(Layout.name, Layout)
  }
}