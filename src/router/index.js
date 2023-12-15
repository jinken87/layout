import { createRouter, createWebHistory } from 'vue-router';
import computer from '../components/Computer.vue';
import Ocean from '../components/Ocean.vue';

const routes = [
  {
    path: '/',
    name: '/',
    component: Ocean,
  },
  {
    path: '/Computer',
    name: 'Computer',
    component: computer,
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;