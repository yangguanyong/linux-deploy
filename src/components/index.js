import Vue from 'vue'

import Layout from '@/components/layout/layout'
import Upload from '@/components/upload/index'

export default {
  install () {
    Vue.component(Layout.name, Layout)
    Vue.component(Upload.name, Upload)
  }
}