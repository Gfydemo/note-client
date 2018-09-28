import Vue from 'vue'
import Router from 'vue-router'
import Nprogress from 'nprogress'
import 'nprogress/nprogress.css'

Vue.use(Router)

const components = {
  layout : () => import('@/views/layout'),
  home: () => import('@/components/Home'),
  register: () => import('@/components/Register'),
  editPage: () => import('@/components/EditPage')
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
          name: '用户注册',
          meta: {
            title: '用户注册'
          },
          component: components.register
        },
        {
          path: 'editpage',
          name: '写笔记',
          meta: {
            title: '写笔记',
          },
          component: components.editPage
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
