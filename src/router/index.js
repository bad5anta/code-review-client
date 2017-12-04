import Vue from 'vue';
import Router from 'vue-router';
import BootstrapVue from 'bootstrap-vue';

import DiffPage from '@/components/DiffPage';
import Pending from '@/components/Pending';
import Current from '@/components/Current';
import Navigation from '@/components/Navigation';

// Styles
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.use(Router);
Vue.use(BootstrapVue);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: Navigation,
      alias: 'pending',
      children: [
        {
          path: 'pending',
          component: Pending,
        },
        {
          path: 'my',
          component: Current,
        },
        {
          path: 'diff/diffId',
          component: DiffPage,
        },
      ],
    },
  ],
});
