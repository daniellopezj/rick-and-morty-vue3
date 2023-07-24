// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import('@/views/Home.vue'),
      },
    ],
  },
  {
    path: '/character',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: ':idCharacter',
        name: 'character',
        component: () => import('@/views/Character.vue'),
      },
    ],
  },

  {
    path: '/contact',
    component: () => import('@/layouts/default/Contact.vue'),
    children: [
      {
        path: '',
        name: 'Contact',
        component: () => import('@/views/Contact.vue'),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
