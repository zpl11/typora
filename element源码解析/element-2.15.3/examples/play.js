import Vue from 'vue';
// import Element from 'main/index.js';
import ElRow from '../packages/row';
import App from './play/index.vue';
import 'packages/theme-chalk/src/index.scss';

Vue.use(ElRow);

new Vue({ // eslint-disable-line
  render: h => h(App)
}).$mount('#app');
