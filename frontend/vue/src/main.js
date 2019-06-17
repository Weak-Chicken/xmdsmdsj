import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './vuex/store'

Vue.config.productionTip = false

import axios from 'axios'
import vueAxios from 'vue-axios'
axios.defaults.baseURL = process.env.VUE_APP_BACKEND_ADD
Vue.use(vueAxios, axios)

import DataProvider from '@/components/utils/DataProvider.js';
if (process.env.NODE_ENV === 'development') {
  Vue.use(DataProvider)
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
