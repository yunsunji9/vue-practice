import Vue from 'vue';
import VueRouter from 'vue-router';
import Main from '@/views/Main';

Vue.use(VueRouter);

export const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Main
      //component: () => import('@/views/Main'),
    },
  ]
})
