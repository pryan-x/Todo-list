import App from './App.vue'

import Vue from 'vue'

import axios from 'axios'
import VueAxios from 'vue-axios'
import router from './router'
import store from './store'

Vue.use(VueAxios, axios)
Vue.axios.defaults.baseURL = "http://localhost:3001/api"


new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount('#app')