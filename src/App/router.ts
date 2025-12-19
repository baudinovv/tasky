import { createWebHistory, createRouter } from 'vue-router'
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
router.beforeEach((to, from) => {
  const isAuthenticated = localStorage.getItem('session')

  // 1. Handle Auth pages (Login/Register)
  if (to.path === '/login' || to.path === '/register') {
    if (isAuthenticated) {
      return '/' // Redirect to home if already logged in
    }
    return true // Allow access
  }

  // 2. Protect all other routes
  if (!isAuthenticated) {
    return '/login' // Redirect to login if not authenticated
  }

  // 3. Allow navigation by default
  return true
})

export default router;
