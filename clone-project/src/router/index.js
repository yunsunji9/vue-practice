import Vue from 'vue';
import VueRouter from 'vue-router';
import Main from '@/views/Main'
import Tab from '@/views/Tab'


Vue.use(VueRouter);

export const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Main
    },
    {
      path: '/tab',
      component: Tab
    }
  ]
})
