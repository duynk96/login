import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    name: 'Login',
    component: function () {
      return import('../views/Login.vue')
    }
  },
  {
    path: '/home',
    name: 'Home',
    component: function () {
      return import('../views/Home.vue')
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router