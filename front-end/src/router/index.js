import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@layout/MainLayout.vue'),
    redirect: '/main',
    children: [
      {
        path: '/main',
        name: 'Main',
        component: () => import('@pages/MainPage.vue'),
      },
      {
        path: '/album',
        name: 'album',
        component: () => import('@pages/Album.vue'),
      },
      {
        path: '/album/:album_title',
        name: 'album detail',
        component: () => import('@/AlbumDetail.vue'),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
