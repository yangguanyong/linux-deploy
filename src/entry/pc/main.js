import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import components from '@/components/index'

Vue.use(ElementUI)
Vue.use(components)

Vue.config.productionTip = false

import store from '@/store/index'
require('./permission')
require('./env')

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
