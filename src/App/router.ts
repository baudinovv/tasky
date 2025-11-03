import { createWebHistory, createRouter } from 'vue-router'

import Home from '../pages/Home.vue'
import Project from '../pages/Project.vue'

const routes = [
  { path: '/:title', component: Project },
  { path: '/', component: Home },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})