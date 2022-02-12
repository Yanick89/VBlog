import Vue from 'vue'
import Router from 'vue-router'
import mainApp from '@/components/mainApp'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'main',
      component: mainApp
    }
  ]
})
