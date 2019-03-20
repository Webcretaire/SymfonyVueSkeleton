import Vue from 'vue';
import router from './router';
import store from './store';
import App from './App.vue';

Vue.config.productionTip = false;

const app = new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');

// Globalize Vue vm

if (window.Cypress) {
  window.app = app;
}

global.app = app;
