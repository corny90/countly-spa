import { createRouter, createWebHistory } from 'vue-router'
import admin from './admin';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
        path: '/',
        name: 'Home',
        component: () => import('../views/layouts/LayoutAdmin.vue'),
        redirect: '/events/overview',
    },
    admin,
  ]
})

export default router
