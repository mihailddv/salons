export default {
  state: {
    stepsList: [
      {
        id: 1,
        title: 'Выбор салона',
        link: '/',
        disabled: false,
      },
      {
        id: 2,
        title: 'Выбор мастера',
        link: '/master',
        disabled: true,
      },
      {
        id: 3,
        title: 'Время записи',
        link: '/time',
        disabled: true,
      },
      {
        id: 4,
        title: 'Контакты',
        link: '/order',
        disabled: true,
      },
    ],
  },
  mutations: {
    setStepAvailable(state, payload) {
      state.stepsList[payload - 1].disabled = false;
    },
    setDefaultSteps(state) {
      const list = state.stepsList.slice(1);
      list.forEach((item) => {
        item.disabled = true;
      });
    },
  },
  actions: {},
};
