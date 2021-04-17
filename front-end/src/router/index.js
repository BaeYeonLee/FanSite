import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Main",
    component: () => import("@pages/MainPage.vue"),
  },
  {
    path: "/album",
    name: "album",
    component: () => import("@pages/Album.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
