import Vue from 'vue';
import Vuex from 'vuex';

import actions from './actions';
import mutations from './mutations';
import getters from './getters';
import states from './states';

Vue.use(Vuex);

const store = new Vuex.Store({
  states,
  mutations,
  actions,
  getters,
});

export default store;
