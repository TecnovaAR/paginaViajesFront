import { createRouter, createWebHistory } from 'vue-router'

// Layouts
import MainLayout from '@/layouts/MainLayout.vue'

// Views
import HomeView from '@/views/HomeView.vue'
import SharedTimesView from '@/views/SharedTimesView.vue'
import SharedTimeView from '@/views/SharedTimeView.vue'
import DestinationsView from '@/views/DestinationsView.vue'
import ContactView from '@/views/ContactView.vue'
import AboutUsView from '@/views/AboutUsView.vue'

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
        },
        {
          path: 'sharedTimes',
          name: 'sharedTimes',
          component: SharedTimesView
        },
        {
          path: 'sharedTime/:name',
          name: 'sharedTime',
          component: SharedTimeView
        },
        {
          path: 'destinations',
          name: 'destinations',
          component: DestinationsView
        },
        {
          path: 'contact',
          name: 'contact',
          component: ContactView
        },
        {
          path: 'aboutUs',
          name: 'aboutUs',
          component: AboutUsView
        }
      ]
    }
  ]
})

export default router
