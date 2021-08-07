import { createRouter, createWebHistory } from '@ionic/vue-router';
import MemoriesPage from '../pages/MemoriesPage.vue';


const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/memories',
    name: 'MemoriesPage',
    component: MemoriesPage
  },

  {
    path: '/memories/:id',
    component: () => import('../pages/MemoryDetailsPage.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
