import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './vuex/store'

Vue.config.productionTip = false

import axios from 'axios'
import vueAxios from 'vue-axios'

Vue.use(vueAxios, axios)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
