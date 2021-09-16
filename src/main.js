import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import maska from 'maska';
import './assets/scss/style.scss';

createApp(App).use(router).use(store).use(maska).mount('#app');
