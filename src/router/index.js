import { createRouter, createWebHistory } from "vue-router";
import EventView from "../views/EventView.vue";

const routes = [
  {
    path: "/",
    name: "event-view",
    component: EventView,
  },
  {
    path: "/about",
    name: "about-view",
    component: import("../views/AboutView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
