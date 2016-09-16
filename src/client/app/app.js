const Vue = require('vue');
const BootstrapTable = require('../components/main');

new Vue({
  el: '#app',
  components: {
    bootstrapTable,

  },
  data: {
    message: 'Hello Vue.js!'
  }
})
