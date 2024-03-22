import { createRouter, createWebHashHistory } from "vue-router";
import { B_URL, PAGE_URL } from "../lib";
const MainPage = () => import("../components/Pages/mainPage.vue");
const compoPage = () => import("../components/Pages/compoPage.vue");

const appRoutes = [
  {
    path: B_URL,
    component: MainPage,
  },
  { path: PAGE_URL, component: compoPage },
];

export const mainRouter = createRouter({
  history: createWebHashHistory(),
  routes: appRoutes,
});
