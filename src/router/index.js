import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);


const constantRoutes = [
  { path: '/foo', component: () => import('../views/Foo/index') },
  { path: '/bar', component: () => import('../views/Bar/index') }
];

// const asyncRoutes = []

const router = new Router({
  routes: constantRoutes,
});

export default router;
