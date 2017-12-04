import Vue from 'vue';
import demo from '../demo';

export const diffs = {
  // Vue.axios.get('/api/diff').then(({ data }) => data);
  index: () => demo,
  get: (id) => {
    Vue.axios.get(`/api/diff/${id}`).then(({ data }) => data);
  },
};

// Linter pls
export const something = {

};
