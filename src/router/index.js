import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/page-privacy',
    name: 'privacy',
    component: () => import('../views/page-privacy')
  },
  {
    path: '/page-terms',
    name: 'terms',
    component: () => import('../views/page-terms')
  },
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/index')
  },
]


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior() {
    return { x: 0, y: 0 }
  }
})

export default router
