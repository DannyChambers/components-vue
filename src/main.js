import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import '@/registerServiceWorker'

import scrollobserver from '@/directives/scroll-into-view'
Vue.directive('scrollobserver', scrollobserver);

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')

