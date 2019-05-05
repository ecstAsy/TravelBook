import * as homeApi from './service';

export default {
  namespace: 'home',
  state: {
    Trips: [],
    next_start: 0
  },
  effects: {
    * load({ payload = {} }, { call, put }) {
      const { data } = yield call(homeApi.v1_list, payload);
      return data
    }
  },
  reducers: {
    save(state, { payload }) {
      return { ...state, ...payload };
    },
  },
};
