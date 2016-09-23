<script>
import AppMenu from './components/root/Menu.vue';
import AppFooter from './components/root/Footer.vue';
import AppHeader from './components/root/Header.vue';
import AppDriver from './components/forms/Form_drivers.vue';


export default {

  components:{
    AppMenu,
    AppFooter,
    AppHeader,
    AppDriver

  },
  data () {
    return {
      msg: 'Hello Vue! 2',
      drivers: {},
      vehicles: {},
      tires: {}
    }
  },
  methods: {

  }
}
</script>


<template>

  <div id="app">

    <app-driver class="form-horizontal" id="myForm"></app-driver>

  </div>

</template>


<style>
body {
  font-family: Helvetica, sans-serif;
}
</style>
