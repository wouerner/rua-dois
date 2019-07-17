import Vue from 'vue';
import Vuex from 'vuex';
import calendar from './store/calendar/index';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    calendar,
  },
  debug: true,
});
