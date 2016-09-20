<script>
import AppMenu from './components/Menu.vue';

export default {
  components:{
    AppMenu,
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
    <img src="../assets/logo.png">
    <h1>{{ msg }}</h1>
    <input type="text" v-model="msg">
  </div>
</template>


<style>
body {
  font-family: Helvetica, sans-serif;
}
</style>
