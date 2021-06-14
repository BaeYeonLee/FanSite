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
        path: '/history',
        name: 'History',
        component: () => import('@pages/HistoryPage.vue'),
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
      // {
      //   path: '/album/:album_id',
      //   name: 'album detail',
      //   component: () => import('@/AlbumDetail.vue'),
      // },
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
      //   {
      //     path: '/add-board',
      //     name: 'AddBoard',
      //     component: () => import('@pages/AddBoard.vue'),
      //   },
      //   {
      //     path: '/detail',
      //     name: 'Detail',
      //     component: () => import('@pages/BoardDetailPage.vue'),
      //   },
      //   {
      //     path: '/edit',
      //     name: 'Edit',
      //     component: () => import('@pages/EditBoard.vue'),
      //   },
    ],
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
