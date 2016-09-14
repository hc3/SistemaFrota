const Vue = require('vue');
import bootstrapTable from '../components/BootstrapTable.vue';

new Vue({
  el: '#app',
  components: {
    bootstrapTable,
    
  }
  data: {
    message: 'Hello Vue.js!'
  }
})
