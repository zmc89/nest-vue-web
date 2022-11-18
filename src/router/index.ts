import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import Layout from '@/layout/index.vue'


const routes: RouteRecordRaw[] = [
    // {
    //     path: '/',
    //     name: '/',
    //     component: Layout,
    //     redirect: '/index',
    //     children: [{

    //         path: '/index',
    //         name: 'index',
    //         component: () => import("@/views/index/index.vue"),
    //     }]
    // }

    {
        path: '/',
        redirect: '/login'
    },
    {
        path: '/login',
        name: 'Login',
        component: () => import('@/views/login/index.vue'),
        meta: {
            title: '登录',
        },
    },
    {
        path: '/index',
        name: 'index',
        component: Layout,
        children: [{
            path: '/index',
            name: 'index',
            component: () => import("@/views/index/index.vue"),
        }]
    }
]


const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router