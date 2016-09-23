<script>
import AppMenu from './components/root/Menu.vue';
import AppFooter from './components/root/Footer.vue';
import AppHeader from './components/root/Header.vue';
import FormDriver from './components/forms/Form_drivers.vue';
import FormVehicle from './components/forms/Form_vehicles.vue';


export default {

  components:{
    AppMenu,
    AppFooter,
    AppHeader,
    FormDriver,
    FormVehicle


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

    <form-vehicle></form-vehicle>

  </div>

</template>


<style>
body {
  font-family: Helvetica, sans-serif;
}
</style>
