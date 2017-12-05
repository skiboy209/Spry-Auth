<template>
  <div>
    <auth-bar></auth-bar>
  </div>
</template>

<script>
import Vue from 'vue'
import Auth from './components/Auth.vue'
Vue.component('auth-bar', Auth)
export default {
  name: 'app'
}
</script>

<style>
@import '../node_modules/bootstrap/dist/css/bootstrap.css';

.btn-margin {
  margin-top: 7px
}
</style>
