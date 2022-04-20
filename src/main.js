import Vue from 'vue'
import App from './App'
import router from './router'
import outclick from './directive'
// import MediumEditor from 'vuejs-medium-editor'

Vue.config.productionTip = false
Vue.directive('outclick', outclick);
// Vue.component('medium-editor', MediumEditor)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
