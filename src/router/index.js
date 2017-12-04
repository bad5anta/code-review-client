import Vue from 'vue';
import Router from 'vue-router';
import BootstrapVue from 'bootstrap-vue';

import Login from '@/components/Login';
import Pending from '@/components/Pending';
import Current from '@/components/Current';
import DiffPage from '@/components/DiffPage';
import Dashboard from '@/components/Dashboard';
import Navigation from '@/components/Navigation';

// Styles
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.use(Router);
Vue.use(BootstrapVue);

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/login',
      component: Login,
    },
    {
      path: '/',
      name: 'dashboard',
      component: Navigation,
      redirect: '/dashboard',
      children: [
        {
          path: 'dashboard',
          component: Dashboard,
        },
        {
          path: 'pending',
          component: Pending,
        },
        {
          path: 'finished',
          component: Current,
        },
        {
          path: 'diff/:diffId',
          name: 'viewDiff',
          component: DiffPage,
        },
      ],
    },
  ],
});

router.beforeEach((to, from, next) => {
  const token = localStorage.getItem('token');
  if (!token && to.path !== '/login') {
    localStorage.removeItem('token');
    localStorage.setItem('redirect', to.path);
    next('/login');
  }
  next();
});

export default router;
