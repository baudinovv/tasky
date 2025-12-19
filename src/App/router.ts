import { createWebHistory, createRouter, RouterLink } from 'vue-router'
import Home from '../pages/Home.vue'
import Project from '../pages/Project.vue'
import Settings from '../pages/Settings.vue'
import Report from '../pages/Report.vue'
import Login from '../pages/Auth/Login.vue'
import Register from '../pages/Auth/Register.vue'
import Tasks from '../pages/Tasks.vue'
const routes = [
  { path: '/', component: Home },
  { path: '/:title', component: Project },
  { path: '/settings', component: Settings},
  { path: '/report', component: Report},
  { path: '/login', component: Login},
  { path: '/register', component: Register},
  { path: '/tasks', component: Tasks},
]


const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach((to, from, next) => {
  const isAuthenticated = localStorage.getItem('session')
  // Allow access to login page without auth
  if (to.path === '/login' || to.path === '/register') {
    if (isAuthenticated) {
      next('/') // Already logged in, go to home
    } else {
      next() // Not logged in, allow access
    }
    return
  }
  
  // For all other routes, check auth
  if (!isAuthenticated) {
    next('/login')
    return
  }
  
  next()
})

export default router;
