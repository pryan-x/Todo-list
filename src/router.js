import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: '/',
  routes: [

    {
      path: '/',
      name: 'todolist',
      component: () => import('@/components/TodoList'),
    },
    {
      path: '/counter',
      name: 'counter',
      component: () => import('@/components/Counter'),
    },
  ]
})


export default router
