import Vue from 'vue';
import Vuex from 'vuex';
// import * as getters from './getters';
// import * as mutations from './mutations';
import todoApp from './modules/todoApp';

Vue.use(Vuex);

// const storage = {
//     fetch() {
//         const arr = [];
//         if (localStorage.length > 0) {
//             for(let i = 0; i < localStorage.length; i++) {
//                 if(localStorage.key(i) !== 'loglevel:webpack-dev-server'){
//                     arr.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
//                 }
//             }
//         }
//         return arr;
//     }
// };

export const store = new Vuex.Store({
    modules: {
        todoApp
    }
    // state: {
    //     todoItems: storage.fetch()
    // },
    // getters,
    // mutations
});