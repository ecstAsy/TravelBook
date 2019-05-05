import * as userApi from './service';

export default {
  namespace: 'user',
  state: {
    userInfo: '',
    trips: []
  },
  effects: {
    * load({ payload = {} }, { call }) {
      const data = yield call(userApi.v2_user, payload)
      return data
    }
  },
  reducers: {
    save(state, { payload }) {
      return { ...state, ...payload };
    },
  },
};
