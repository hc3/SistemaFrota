<script>
import AppMenu from './components/Menu.vue';
import AppFooter from './components/Footer.vue';

export default {
  components:{
    AppMenu,
    AppFooter,
  },
  data () {
    return {
      msg: 'Hello Vue! 2'
    }
  }
}
</script>


<template>
  <div id="app">

    <app-menu></app-menu>

    <h1>{{ msg }}</h1>
    <input type="text" v-model="msg">

    <app-footer></app-footer>
  </div>
</template>


<style>
body {
  font-family: Helvetica, sans-serif;
}
</style>
