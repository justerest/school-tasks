import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import Desktop from '@/components/Desktop';

export default new VueRouter({
  mode: 'history',
  routes: [{
    path: '/task/:taskNumber',
    props: true,
    component: Desktop
  }]
});
