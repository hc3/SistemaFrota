<script>
import AppMenu from './components/Menu.vue';
import AppFooter from './components/Footer.vue';
import AppHeader from './components/Header.vue';

export default {
  components:{
    AppMenu,
    AppFooter,
    AppHeader,
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

    <app-header></app-header>

    <app-menu></app-menu>

    <app-footer></app-footer>

  </div>
</template>


<style>
body {
  font-family: Helvetica, sans-serif;
}
</style>
