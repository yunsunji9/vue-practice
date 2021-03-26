import Vue from 'vue'
import VueRouter from 'vue-router';
import AskView from '../views/AskView';
import JobsView from '../views/JobsView';
import NewsView from '../views/NewsView';
import UserView from '../views/UserView';
import ItemView from '../views/ItemView';
// import createListView from '../views/CreateListView.js'
import bus from '../utils/bus.js';
import { store } from '../store/index.js'

Vue.use(VueRouter);

export const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            redirect: '/news'
        },
        {
            path: '/news',
            name: 'news',
            component: NewsView,
            beforeEnter: (to, from, next) => {
                bus.$emit('start:spinner');
                store.dispatch('FETCH_LIST', to.name)
                    .then(() => {
                        // bus.$emit('end:spinner');
                        next();
                    })
                    .catch(err => console.log(err));
            }
            //component: createListView('NewsView')
        },
        {
            path: '/ask',
            name: 'ask',
            component: AskView,
            beforeEnter: (to, from, next) => {
                bus.$emit('start:spinner');
                store.dispatch('FETCH_LIST', to.name)
                    .then(() => {
                        bus.$emit('end:spinner');
                        next();
                    })
                    .catch(err => console.log(err));
            }
            //component: createListView('AskView')
        },
        {
            path: '/jobs',
            name: 'jobs',
            component: JobsView,
            beforeEnter: (to, from, next) => {
                bus.$emit('start:spinner');
                store.dispatch('FETCH_LIST', to.name)
                    .then(() => {
                        bus.$emit('end:spinner');
                        next();
                    })
                    .catch(err => console.log(err));
            }
            //component: createListView('JobsView')
        },
        {
            path: '/user/:id',
            component: UserView
        },
        {
            path: '/item/:id',
            component: ItemView
        },
    ]
})
