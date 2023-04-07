import { createRouter, createWebHistory } from 'vue-router'

// Layouts
import MainLayout from '../layouts/MainLayout.vue'
import SecondLayout from '../layouts/SecondLayout.vue'

// Views
import HomeView from '../views/HomeView.vue'
import ContactView from '../views/ContactView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: MainLayout,
      children: [
        {
          path: '',
          name: 'home',
          component: HomeView
        }
      ]
    },
    {
      path: '/contacto',
      component: SecondLayout,
      children: [
        {
          path: '',
          name: 'contact',
          component: ContactView
        }
      ]
    }
  ]
})

export default router
