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
  ],
  // scrollBehavior () {
  //   return { x: 0, y: 0 }
  // }
})

export default router
