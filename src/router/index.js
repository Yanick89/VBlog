import Vue from 'vue'
import Router from 'vue-router'
import mainApp from '@/components/mainApp'
import userProfile from '@/components/view/profile/userProfile'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'main',
      component: mainApp
    },
    {
      path: '/components/view/profile/userProfile',
      name: 'userProfile',
      component: userProfile
    }
  ]
})
