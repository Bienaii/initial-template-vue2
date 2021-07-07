import Vue from "vue";
import Router from "vue-router";
import Layout from '@/layout'

Vue.use(Router);

const constantRoutes = [
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        component: () => import('@/views/Dashboard/index'),
        name: 'dashboard',
      }
    ]
  },
  {
    path: "/login", component: () => import("@views/Login/index")
  },
];

// const asyncRoutes = []

const router = new Router({
  routes: constantRoutes,
});

export default router;
