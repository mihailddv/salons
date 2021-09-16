import { createStore } from 'vuex';

import salons from './modules/salons';
import masters from './modules/masters';
import order from './modules/order';
import steps from './modules/steps';

export default createStore({
  modules: {
    salons,
    masters,
    order,
    steps,
  },
});
