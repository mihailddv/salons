import axios from 'axios';

export default {
  state: {
    time: null,
    hour: null,
    date: null,
    isHourLoading: false,
  },
  mutations: {
    setTime: (state, payload) => {
      state.time = payload;
    },
    setHour: (state, payload) => {
      state.hour = payload;
    },
    setDate: (state, payload) => {
      state.date = payload;
    },
    setHourLoading: (state, payload) => {
      state.isHourLoading = payload;
    },
  },
  actions: {
    getTime({ commit }, payload) {
      commit('setHourLoading', true);
      return axios
        .get('/data/gettimetable.json')
        .then((res) => {
          commit('setTime', res.data);
          commit('setHourLoading', false);
        })
        .catch((e) => console.log(e));
    },
  },
};
