import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'pagehome',
      component: () => import('@/views/PageHome.vue'),
    },
    {
      path: '/about',
      name: 'pageabout',
      component: () => import('@/views/PageAbout.vue'),
    },
    {
      path: '/article',
      name: 'pagepost',
      component: () => import('@/views/PagePost.vue'),
    },
    {
      path: '/article/:articleId',
      name: 'pagearticle',
      component: () => import('@/views/PageArticle.vue'),
    },
    {
      path: '/upcoming',
      name: 'pageupcoming',
      component: () => import('@/views/PageUpComing.vue'),
    },
    {
      path: '/login',
      name: 'pageauthentication',
      component: () => import('@/views/PageAuthentication.vue'),
    },
    {
      path: '/register',
      name: 'pageauthentication',
      component: () => import('@/views/PageAuthentication.vue'),
    },
    {
      path: '/user/:userName',
      name: 'pageuserinfo',
      component: () => import('@/views/PageUserInfo.vue'),
      meta: {
        requireAuthentication: true,
      }
    }
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