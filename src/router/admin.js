export default {
    path: '/events',
    component: () => import(/* webpackChunkName: "group-admin" */ '../views/layouts/LayoutAdmin.vue'),
    redirect: '/events/overview',
    children: [
        {
            path: '/events/overview',
            // component: () => import('../views/pages/admin/EventsOverview.vue'),
            component: () => import(/* webpackChunkName: "group-events" */ '../views/pages/admin/events/EventsOverview/Index.vue')
        }
    ]
}