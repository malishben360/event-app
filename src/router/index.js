import { createRouter, createWebHistory } from 'vue-router';
import AboutView from '../views/AboutView.vue';
import EventDetails from '../views/EventDetails.vue';
import EventList from '../views/EventList.vue';

const routes = [
  {
    path: '/',
    name: 'event-list',
    component: EventList,
  },
  {
    path: '/about',
    name: 'about-view',
    component: AboutView,
  },
  {
    path: '/event/:id',
    name: 'event-details',
    props: true,
    component: EventDetails,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
