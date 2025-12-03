import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import WorksView from '../views/WorksView.vue'
import ContactView from '../views/ContactView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView,
      meta: {  }
    },
    {
      path: '/about',
      name: 'About',
      component: AboutView,
      meta: {  }
    },
    {
      path: '/works',
      name: 'Works',
      component: WorksView,
      meta: {  }
    },
    {
      path: '/contact',
      name: 'Contact',
      component: ContactView,
      meta: {  }
    },
  ],
})

export default router
