import * as noteApi from './service';

export default {
  namespace: 'note',
  state: {
    hotNoteInfo: '',
    userNoteInfo: '',
    wayPoints: {},
    visit: '',
    Loading: true
  },
  effects: {
    * load({ payload = {} }, { call }) {
      const data = yield call(noteApi.v1_note, payload)
      return data
    }
  },
  reducers: {
    save(state, { payload }) {
      return { ...state, ...payload };
    },
  },
};
