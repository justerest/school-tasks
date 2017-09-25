import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import Desktop from '@/components/Desktop';

export default new VueRouter({
  base: process.env.NODE_ENV === 'production' ? '/school-tasks/' : '/',
  mode: 'history',
  routes: [{
    path: '/task/:taskNumber',
    props: true,
    component: Desktop
  }]
});
