import Vue from 'vue'

import Layout from '@/components/layout/layout'
import Upload from '@/components/upload/index'
import LayoutSystem from '@/components/layout-system/layout'

export default {
  install () {
    Vue.component(Layout.name, Layout)
    Vue.component(Upload.name, Upload)
    Vue.component(LayoutSystem.name, LayoutSystem)
  }
}