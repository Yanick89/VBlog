import Vue from 'vue'
import App from './App'
import router from './router'
import ousideClick from './directive'

Vue.config.productionTip = false
Vue.directive('ousideClick', ousideClick);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  ousideClick,
  render: h => h(App)
})
