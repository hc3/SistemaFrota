import Vue from 'vue';
import VueValidator from 'vue-validator';
import App from './App.vue';


Vue.use(VueValidator)

new Vue({
  el: 'body',
  render: h => h(App)
});