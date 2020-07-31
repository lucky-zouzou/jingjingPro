import Vue from 'vue'
import Router from 'vue-router'
import canvas from '@/views/canvas'
import home from '@/views/home'
import layouts from '@/views/layouts'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/canvas',
      name: 'canvas',
      component: canvas
    },
    {
      path: '/layout',
      name: 'layouts',
      component: layouts
    },
  ]
})
