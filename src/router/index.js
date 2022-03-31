import Vue from 'vue'
import Router from 'vue-router'
import mainApp from '@/components/mainApp'
import userProfile from '@/components/view/profile/userProfile'
import profilEdit from '@/components/view/profile/profilEdit'
import writingArticle from '@/components/view/profile/writingArticle'

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
    },
    {
      path: '/components/view/profile/profilEdite',
      name: 'profilEdite',
      component: profilEdit
    },
    {
      path: '/components/view/profile/writingArticle',
      name: 'writingArticle',
      component: writingArticle
    }
  ]
})
