// src/router.js or router/index.js
import { createRouter, createWebHistory } from 'vue-router';
//import HomeView from '../views/Home.vue';
//import CheckoutView from '../views/CheckoutView.vue'; // Import the CheckoutView directly

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import("@/views/Home.vue"),
  },
  {
    path: '/checkout',
    name: 'CheckoutView',
    component: () => import("@/views/CheckoutView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
