import { createRouter, createWebHistory } from "@ionic/vue-router";
import MemoriesPage from "../pages/MemoriesPage.vue";
import MemoryDetailsPage from "../pages/MemoryDetailsPage.vue";

const routes = [
  {
    path: "/",
    redirect: "/memories",
  },
  {
    path: "/memories",
    component: MemoriesPage
  },
  {
    path: "/memories/:id",
    component: MemoryDetailsPage
  },
  {
    path: "/memories/add",
    component: () => import('../pages/AddMemoryPage.vue')
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
