import { createWebHashHistory, createRouter } from 'vue-router';
import Home from '../views/Home.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/master/',
    name: 'Masters',
    component: () => import('../views/MasterView.vue'),
    meta: {
      requiresSalon: true,
    },
  },
  {
    path: '/time/',
    name: 'Time',
    component: () => import('../views/TimeView.vue'),
    meta: {
      requiresMaster: true,
    },
  },
  {
    path: '/order/',
    name: 'Order',
    component: () => import('../views/OrderView.vue'),
    meta: {
      requiresMaster: true,
    },
  },
  {
    path: '/:pathMatch(.*)*',
    component: Home,
  },
];

const router = createRouter({
  mode: 'history',
  history: createWebHashHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((route) => route.meta?.requiresSalon)) {
    if (localStorage.getItem('salonSelected')) {
      next();
    } else {
      next('/');
    }
  }

  if (to.matched.some((route) => route.meta?.requiresMaster)) {
    if (localStorage.getItem('masterSelected')) {
      next();
    } else {
      next('/');
    }
  }

  next();
});

export default router;
