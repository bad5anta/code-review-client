import Vue from 'vue';
import Router from 'vue-router';
import DiffPage from '@/components/DiffPage';
import Dashboard from '@/components/Dashboard';
import UserDashboard from '@/components/UserDashboard';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: Dashboard,
      children: [
        {
          path: 'user/:userId',
          component: UserDashboard,
          children: [
            {
              path: 'diff/diffId',
              component: DiffPage,
            },
          ],
        },
      ],
    },
  ],
});
