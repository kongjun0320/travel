import Vue from 'vue'
import App from './App.vue'
import router from './router' 
import store from './store'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import fastClick from 'fastclick'
import axios from 'axios'

import 'swiper/dist/css/swiper.css'
import './assets/styles/reset.css'
import './assets/styles/border.css'
import './assets/styles/iconfont.css'


Vue.use(VueAwesomeSwiper)
Vue.config.productionTip = false
fastClick.attach(document.body)
Vue.prototype.$axios = axios

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

