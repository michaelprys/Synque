import type { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        component: () => import('layouts/MainLayout.vue'),
        children: [
            { path: '', component: () => import('pages/PageIndex.vue'), name: 'home' },
            { path: 'learn', component: () => import('pages/PageLearn.vue'), name: 'learn' },
            { path: 'login', component: () => import('pages/PageLogin.vue'), name: 'login' },
            { path: 'sign-up', component: () => import('pages/PageLogin.vue'), name: 'sign-up' },
            {
                path: 'forgot-password',
                component: () => import('pages/PageLogin.vue'),
                name: 'forgot-password'
            }
        ]
    },

    // Always leave this as last one,
    // but you can also remove it
    {
        path: '/:catchAll(.*)*',
        component: () => import('pages/ErrorNotFound.vue')
    }
];

export default routes;
