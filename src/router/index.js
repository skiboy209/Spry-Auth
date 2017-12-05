import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Callback from '@/components/Callback'
import Counter from '@/components/Counter'
import Gallery from '@/components/Gallery'
import BikeBuilder from '@/components/BikeBuilder'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/callback',
      name: 'Callback',
      component: Callback
    },
    {
      path: '*',
      redirect: '/home'
    },
    {
      path: '/counter',
      name: 'Counter',
      component: Counter
    },
    {
      path: '/gallery',
      name: 'Gallery',
      component: Gallery
    },
    {
      path: '/bikebuilder',
      name: 'BikeBuilder',
      component: BikeBuilder
    }
  ]
})

export default router
