import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'homepage',
      component: () => import('@/views/PageHome.vue'),
    },
    {
      path: '/about',
      name: 'aboutpage',
      component: () => import('@/views/PageAbout.vue'),
    },
    {
      path: '/article',
      name: 'postpage',
      component: () => import('@/views/PagePost.vue'),
    },
    {
      path: '/article/:articleId',
      name: 'articlepage',
      component: () => import('@/views/PageArticle.vue'),
    },
    {
      path: '/upcoming',
      name: 'upcomingpage',
      component: () => import('@/views/PageUpComing.vue'),
      meta: {
        requireAuthentication: true,
      },
    },
    {
      path: '/login',
      name: 'authenticationpage',
      component: () => import('@/views/PageAuthentication.vue'),
    },
    {
      path: '/register',
      name: 'authenticationpage',
      component: () => import('@/views/PageAuthentication.vue'),
    },
  ]
});

router.beforeEach((to, from, next) => {
  if (to.meta.requireAuthentication) {
    // alert('Ass we can');
    next();
  } else {
    // If the page does not need authentication, let user in
    next();
  }
});

export default router;