import axios from 'axios';
import demo from '../demo';

const API_HOST = 'https://code-review.herokuapp.com/';

export const base = axios.create({
  baseURL: API_HOST,
});

export const diffs = {
  // base.get('/api/diff').then(({ data }) => data);
  index: () => demo,
  get: id => base.get(`api/diff/${id}`).then(({ data }) => data),
};

export const users = {
  login: (email, password) => base.post('api/v1/sessions', {
    user: { email, password },
  }),
};
