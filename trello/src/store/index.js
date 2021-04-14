import Vue from 'vue';
import Vuex from 'vuex';
import state from './state';
import getters from './getters';
import mutations from './mutations';
import actions from './actions';

Vue.use(Vuex);

const store = new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})

//어플리케이션이 구동되었을떄 
const { token } = localStorage;
store.commit(' ', token)

export default store;