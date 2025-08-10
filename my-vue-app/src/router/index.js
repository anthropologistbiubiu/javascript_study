import { createRouter, createWebHistory } from 'vue-router'
// import Home from '../pages/Home1.vue'
import Login from '../pages/Login.vue'
import Figures from '../pages/Figures.vue'
import { getToken } from '../utils/auth'

const routes = [
  { path: '/', component: Figures, meta: { requiresAuth: true } },
  { path: '/login', component: Login },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})


router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth && !getToken()) {
    //next('/login')
  } else {
    next()
  }
})

export default router

