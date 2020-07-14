import Vue from 'vue'
import Router from 'vue-router'
import canvas from '@/views/canvas'
import home from '@/views/home'

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
  ]
})
