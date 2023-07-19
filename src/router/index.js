import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../components/HomeView.vue";
import AboutView from "../components/AboutView.vue";
import FaqsView from "../views/FaqsView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    component: AboutView,
  },
  {
    path: "/faqs",
    name: "faqs",
    component: FaqsView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
