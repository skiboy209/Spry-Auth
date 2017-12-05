<template>
    <div>
    <nav class="navbar navbar-default">
      <div class="container-fluid">
        <div class="navbar-header">
          <a id="navbar-brand" href=""><img id="banner" src="../assets/SpryBanner.jpg"/></a>

          <router-link :to="'/'"
            class="btn nav-btn btn-margin">
              Home
          </router-link>

          <router-link :to="'counter'"
            class="btn nav-btn btn-margin">
              Counter
          </router-link>

          <router-link :to="'gallery'"
            class="btn nav-btn btn-margin">
              Gallery
          </router-link>

          <router-link :to="'bikebuilder'"
            class="btn nav-btn btn-margin">
              Bike Builder
          </router-link>

          <button
            class="btn nav-btn btn-margin"
            v-if="!authenticated"
            @click="login">
              Log In
          </button>

          <button
            class="btn nav-btn btn-margin"
            v-if="authenticated"
            @click="logout">
              Log Out
          </button>

        </div>
      </div>
    </nav>

    <div id="ContentContainer">
      <router-view 
        :auth="auth" 
        :authenticated="authenticated">
      </router-view>
    </div>
  </div>  
</template>

<script>
import AuthService from '../auth/AuthService'

const auth = new AuthService()

const { login, logout, authenticated, authNotifier } = auth

export default {
  name: 'Auth',
  data () {
    authNotifier.on('authChange', authState => {
      this.authenticated = authState.authenticated
    })
    return {
      auth,
      authenticated
    }
  },
  methods: {
    login,
    logout
  }
}
</script>

<style>
@import '../../node_modules/bootstrap/dist/css/bootstrap.css';

.btn-margin {
  margin-top: 7px;
}
.btn {
  background-color:black;
  color:white;
}
.nav-button {
 border:none;
 text-decoration:none;
 color:white;
 background-color:black;
}.nav-btn:hover {
 color:grey;
}
#banner {
  height:50px;
}
</style>
