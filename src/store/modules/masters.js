import axios from 'axios';

export default {
  state: {
    master: null,
    mastersList: null,
    isLoading: false,
  },
  mutations: {
    setAllMasters: (state, payload) => {
      state.mastersList = payload;
    },
    setMaster: (state, payload) => {
      state.master = payload;
    },
    setLoading: (state, payload) => {
      state.isLoading = payload;
    },
  },
  actions: {
    getAllMasters({ commit }, payload) {
      commit('setLoading', true);
      return axios
        .get('/data/masters.json')
        .then((res) => {
          const filteredMasters = res.data.filter((item) => {
            return item.idsalon === +payload;
          });
          commit('setAllMasters', filteredMasters);
          commit('setLoading', false);
        })
        .catch((e) => console.log(e));
    },
    getMaster({ commit }, payload) {
      commit('setLoading', true);
      return axios
        .get('/data/masters.json')
        .then((res) => {
          const filteredMaster = res.data.filter((item) => {
            return item.id === +payload;
          });
          commit('setMaster', filteredMaster[0]);
          commit('setLoading', false);
        })
        .catch((e) => console.log(e));
    },
  },
};
