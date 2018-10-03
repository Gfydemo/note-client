import Vue from 'vue'
import Router from 'vue-router'
import Nprogress from 'nprogress'
import 'nprogress/nprogress.css'

Vue.use(Router)

const components = {
  layout : () => import('@/views/layout'),
  home: () => import('@/components/Home'),
  register: () => import('@/components/Register'),
  editPage: () => import('@/components/EditPage'),
  articleDetail: () => import('@/components/readArticle'),
  personalCenter: () => import('@/components/personalCenter')
}

const router =  new Router({
  routes: [
    {
      path: '/',
      name: 'layout',
      component: components.layout,
      redirect: '/home',
      children: [
        {
          path: 'home',
          name: '首页',
          meta: {
            title: '首页'
          },
          component: components.home
        },
        {
          path: 'register',
          name: 'register',
          meta: {
            title: '用户注册'
          },
          component: components.register
        },
        {
          path: 'editpage',
          name: 'editpage',
          meta: {
            title: '写笔记',
          },
          component: components.editPage
        },
        {
          path: 'readarticle',
          name: 'readarticle',
          meta: {
            title: '文章详情'
          },
          component: components.articleDetail
        },
        {
          path: 'personalcenter',
          name: 'personalcenter',
          meta: {
            title: '个人主页'
          },
          component: components.personalCenter
        }
      ]
    }
  ]
})

router.beforeEach((to, from, next) => {
  Nprogress.start()
  next()
})

router.afterEach((to, from) => {
  Nprogress.done()
})

export default router
