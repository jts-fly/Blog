import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Menu from '../views/Menu'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/Menu',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/',
      name: 'Menu',
      component: Menu
    }
  ]
})
