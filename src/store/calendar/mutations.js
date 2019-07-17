import * as types from './types';

export const state = {
  calendar: {},
};

export const mutations = {
  [types.SET_CALENDAR](state, params) {
    state.calendar = params;
  },
};
