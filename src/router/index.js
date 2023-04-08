import { createRouter, createWebHistory } from 'vue-router'

// Layouts
import MainLayout from '../layouts/MainLayout.vue'
import SecondLayout from '../layouts/SecondLayout.vue'

// Views
import HomeView from '../views/HomeView.vue'
import ContactView from '../views/ContactView.vue'
import PackagesView from '../views/PackagesView.vue'
import AboutUsView from '../views/AboutUsView.vue'
import TripView from '../views/TripView.vue'

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
    },
    {
      path: '/paquetes',
      component: SecondLayout,
      children: [
        {
          path: '',
          name: 'packages',
          component: () => PackagesView
        }
      ]
    },
    {
      path: '/sobre-nosotros',
      component: SecondLayout,
      children: [
        {
          path: '',
          name: 'about',
          component: AboutUsView
        }
      ]
    },
    {
      path: '/personaliza-viaje',
      component: SecondLayout,
      children: [
        {
          path: '',
          name: 'trip',
          component: () => TripView
        }
      ]
    }
  ]
})

export default router
