import Vue from 'vue';
import Vuex from 'vuex';
import normalize from 'json-api-normalizer';
import { base } from '@/services/api';
Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    users: [],
    stacks: [],
    diffs: [],
    ready: false,
  },
  mutations: {
    setUsers(state, data) {
      state.users = data;
    },
    setDiffs(state, data) {
      state.diffs = data;
    },
    setStacks(state, data) {
      state.stacks = data;
    },
    setReady(state, data) {
      state.ready = data;
    },
  },
  actions: {
    getUsers({ commit }) {
      base.get('api/v1/users').then(({ data }) => commit('setUsers', normalize(data).users));
    },
    getDiffs({ commit }) {
      base.get('api/v1/diffs').then(({ data }) => commit('setDiffs', normalize(data).diffs));
    },
    getStacks({ commit }) {
      base.get('api/v1/stacks').then(({ data }) => commit('setStacks', normalize(data).stacks));
    },
    getAppReady({ dispatch, commit }) {
      return Promise.all([
        dispatch('getUsers'),
        dispatch('getDiffs'),
        dispatch('getStacks'),
      ]).then(() => commit('setReady', true));
    },
    uploadDiff({}, data) {
      base.post('api/v1/diffs', data);
    },
  },
  getters: {
    allUsers(state) {
      return state.users;
    },
    allStacks(state) {
      return state.stacks;
    },
    isReady(state) {
      return !!state.ready;
    },
  },
});

export default store;
