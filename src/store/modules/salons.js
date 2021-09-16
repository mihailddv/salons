import axios from 'axios';

export default {
  state: {
    salonsList: null,
    isLoading: false,
  },
  mutations: {
    setSalons: (state, payload) => {
      state.salonsList = payload;
    },
    setLoading: (state, payload) => {
      state.isLoading = payload;
    },
  },
  actions: {
    getSalons({ commit }) {
      commit('setLoading', true);

      return axios
        .get('/data/salon.json')
        .then((res) => {
          commit('setSalons', res.data.features);
          commit('setLoading', false);
        })
        .catch((e) => console.log(e));
    },
  },
};
