import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import components from '@/components/index'
import '@/assets/reset.scss'
import 'viewerjs/dist/viewer.css'
import Viewer from 'v-viewer'

Vue.use(ElementUI)
Vue.use(components)
Vue.use(Viewer)

Vue.config.productionTip = false

import store from '@/store/pc/index'
require('./permission')
require('./env')

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
