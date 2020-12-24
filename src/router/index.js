import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    meta: {
      title: '首页',
    },
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    meta: {
      title: '关于我们',
    },
  },
  {
    path: '/about/detail',
    name: 'About',
    component: () => import('../views/Detail.vue'),
    meta: {
      title: '详情信息',
      parents: [{
        title: '关于我们',
        path: '/about',
      }],
    },
  },
  {
    path: '/about/detail/edit/:id/:url',
    name: 'Edit',
    component: () => import('../views/Edit.vue'),
    meta: {
      title: '编辑信息',
      parents: [
        {
          title: '关于我们',
          path: '/about',
        },
        {
          title: '详情信息',
          path: '/about/detail',
        },
      ],
    },
  },
];

const router = new VueRouter({
  routes,
});

export default router;
