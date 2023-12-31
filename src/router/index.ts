// Composables
import { createRouter, createWebHistory } from 'vue-router';

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
        path: '',
        name: 'characterList',
        component: () => import('@/views/CharacterList.vue'),
      },
      {
        path: ':idCharacter',
        name: 'characterDetail',
        component: () => import('@/views/Character.vue'),
      },
    ],
  },
  {
    path: '/episode',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '',
        name: 'episodeList',
        component: () => import('@/views/EpisodesList.vue'),
      },
      {
        path: ':idEpisode',
        name: 'episodeDetail',
        component: () => import('@/views/Episode.vue'),
      },
    ],
  },
  {
    path: '/location',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '',
        name: 'locationList',
        component: () => import('@/views/LocationList.vue'),
      },
      {
        path: ':idLocation',
        name: 'locationDetail',
        component: () => import('@/views/Location.vue'),
      },
    ],
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '',
        name: 'not-found',
        component: () => import('@/views/NotFound.vue'),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.afterEach(() => {
  if (typeof window !== 'undefined') {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
});

export default router;
