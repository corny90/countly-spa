export default {
    path: '/events',
    component: () => import('../views/layouts/LayoutAdmin.vue'),
    redirect: '/events/overview',
    children: [
        {
            path: '/events/overview',
            component: () => import('../views/pages/admin/EventsOverview.vue'),
            // component: () => import(/* webpackChunkName: "events-overview" */ '../views/pages/admin/EventsOverview.vue')
        }
    ]
}