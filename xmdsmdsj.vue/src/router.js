import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'homepage',
      component: () => import('@/views/HomePage.vue')
    },
    {
      path: '/about',
      name: 'aboutpage',
      component: () => import('@/views/AboutPage.vue')
    },
    {
      path: '/article',
      name: 'postpage',
      component: () => import('@/views/PostPage.vue')
    },
    {
      path: '/article/:articleId',
      name: 'articlepage',
      component: () => import('@/views/ArticlePage.vue')
    },
    {
      path: '/upcoming',
      name: 'upcomingpage',
      component: () => import('@/views/UpComingPage.vue')
    }
  ]
})
