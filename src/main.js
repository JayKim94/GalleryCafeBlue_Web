import Vue from 'vue'
import router from './router'
import App from './App.vue'
import { VueSpinners } from '@saeris/vue-spinners'

Vue.config.productionTip = false;
Vue.use(VueSpinners);

new Vue({
  router,
  render: (h) => h(App)
}).$mount('#app');
