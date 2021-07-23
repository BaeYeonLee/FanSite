import { createRouter, createWebHashHistory } from 'vue-router'
// import MainLayout from "@layout/MainLayout"

const routes = [
  {
    path: '/',
    name: 'Intro',
    component: () => import('@pages/IntroPage'),
  },
  {
    path: '/iu',
    name: 'Main',
    component: () => import('../components/Layout/MainLayout.vue'),
    children: [
      {
        path: '/iu',
        name: 'MainPage',
        component: () => import('@pages/MainPage.vue'),
      },
    ],
  },
  {
    path: '/history',
    component: () => import('../components/Layout/MainLayout.vue'),
    children: [
      {
        path: '',
        name: 'History',
        component: () => import('@pages/History.vue'),
      },
    ],
  },
  {
    path: '/album',
    component: () => import('../components/Layout/MainLayout.vue'),
    children: [
      {
        path: '/album',
        name: 'Album',
        component: () => import('@pages/AlbumPage.vue'),
      },
      {
        path: '/album/:album_id',
        name: 'album detail',
        component: () => import('@/AlbumDetail.vue'),
      },
    ],
  },
  {
    path: '/ad',
    component: () => import('../components/Layout/MainLayout.vue'),
    children: [
      {
        path: '/ad',
        name: 'AD',
        component: () => import('@pages/AdvertisingPage.vue'),
      },
    ],
  },
  {
    path: '/filmography',
    component: () => import('../components/Layout/MainLayout.vue'),
    children: [
      {
        path: '/filmography',
        name: 'Filmography',
        component: () => import('@pages/FilmographyPage.vue'),
      },
    ],
  },
  {
    path: '/board',
    component: () => import('../components/Layout/MainLayout.vue'),
    children: [
      {
        path: '/board',
        name: 'Board',
        component: () => import('@pages/BoardPage.vue'),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 }
  },
})

export default router
