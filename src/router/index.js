import Vue from 'vue'
import VueRouter from 'vue-router'
import ContentViewer from '../components/ContentViewer.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: ContentViewer
  },
  {
    path: '/menu',
    name: 'Menu',
    component: () => import('../components/pages/menu/Menu.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes
})

export default router
