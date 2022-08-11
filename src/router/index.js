import { createRouter, createWebHistory } from "@ionic/vue-router";
import MemoriesPage from "../pages/MemoriesPage.vue";
import MemoryDetails from "../pages/MemoryDetails.vue";

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
    component: MemoryDetails
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
