import { createRouter, createWebHistory } from 'vue-router';
import AboutView from '../views/AboutView.vue';
import EventDetails from '../views/EventDetails.vue';
import EventList from '../views/EventList.vue';
import EventCreate from '../views/EventCreate.vue';
import ErrorDisplay from '../views/ErrorDisplay.vue';

const routes = [
  {
    path: '/',
    name: 'event-list',
    component: EventList,
  },
  {
    path: '/event/:id',
    name: 'event-details',
    props: true,
    component: EventDetails,
  },
  {
    path: '/event/create',
    name: 'event-create',
    component: EventCreate,
  },
  {
    path: '/about',
    name: 'about-view',
    component: AboutView,
  },
  {
    path: '/error/:error',
    name: 'error-display',
    props: true,
    component: ErrorDisplay,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
