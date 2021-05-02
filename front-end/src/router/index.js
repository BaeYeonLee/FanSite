import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Main",
    component: () => import('../components/Layout/MainLayout.vue'),
    children:[
      {
        path: "",
        name: "MainPage",
        component: () => import('@pages/MainPage.vue'),
      },
      {
      path: "board",
      name: "Board",
      component: () => import('@pages/BoardPage.vue'),
    },
    {
      path: "add-board",
      name: "AddBoard",
      component: () => import('@pages/AddBoard.vue'),
    },
    {
      path: "detail",
      name: "Detail",
      component: () => import('@pages/BoardDetailPage.vue'),
    },
    {
      path: "edit",
      name: "Edit",
      component: () => import('@pages/EditBoard.vue'),
    },]
  },
  

];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
