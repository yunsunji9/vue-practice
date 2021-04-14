import Vue from 'vue';
import VueRouter from 'vue-router';
import Login from '../view/Login.vue';
import Home from '../view/Home.vue';
import Board from '../view/Board.vue';
import Card from '../view/Card.vue';
import store from '../store/index.js';

Vue.use(VueRouter);

const loginEvt = (to, from, next) => {
  const isAuth = store.getters.isAuth;
  const loginPath = `/login?rPath=${encodeURIComponent(to.path)}`
  isAuth ? next() : next(loginPath)
}

export const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Home,
      beforeEnter: loginEvt
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/b/:bid',
      component: Board,
      beforeEnter: loginEvt,
      children: [
        {
          path: 'c/:cid',
          component: Card,
          beforeEnter: loginEvt
        }
      ]
    }
  ]
})