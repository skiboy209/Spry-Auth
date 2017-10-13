<template>
  <div>
    <auth-bar></auth-bar>
    <div v-if="authenticated">
      AUTH MOTHERFUCKERS
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import router from './router'
import store from './store'
import Auth from './components/Auth.vue'
import Nav from './components/Nav.vue'
Vue.component('nav-bar', Nav)
Vue.component('auth-bar', Auth)
export default {
  name: 'app',
  store,
  router,
  props: ['auth', 'authenticated']
}
</script>

<style>
@import '../node_modules/bootstrap/dist/css/bootstrap.css';

.btn-margin {
  margin-top: 7px
}
</style>
