import Vue from 'vue'
import App from './App.vue'
import Route from './js/route'
import Axios from 'axios'

Vue.prototype.$http = Axios

new Vue({
  el: '#app',
  render: h => h(App),
  router: Route
}).$mount('#app')
