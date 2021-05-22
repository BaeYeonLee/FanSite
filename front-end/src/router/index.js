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
        path: '',
        name: 'MainPage',
        component: () => import('@pages/MainPage.vue'),
      },
    ],
  },
  {
    path: '/album',
    component: () => import('../components/Layout/MainLayout.vue'),
    children: [
      {
        path: '',
        name: 'Album',
        component: () => import('@pages/OverView.vue'),
      },
      {
        path: '/album/:album_id',
        name: 'album detail',
        component: () => import('@/AlbumDetail.vue'),
      },
    ],
  },
  {
    path: '/filmography',
    component: () => import('../components/Layout/MainLayout.vue'),
    children: [
      {
        path: '',
        name: 'Filmography',
        component: () => import('@pages/OverView.vue'),
      },
    ],
  },
  {
    path: '/board',
    component: () => import('../components/Layout/MainLayout.vue'),
    children: [
      {
        path: 'board',
        name: 'Board',
        component: () => import('@pages/BoardPage.vue'),
      },
      {
        path: 'add-board',
        name: 'AddBoard',
        component: () => import('@pages/AddBoard.vue'),
      },
      {
        path: 'detail',
        name: 'Detail',
        component: () => import('@pages/BoardDetailPage.vue'),
      },
      {
        path: 'edit',
        name: 'Edit',
        component: () => import('@pages/EditBoard.vue'),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
