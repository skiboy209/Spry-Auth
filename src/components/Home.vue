<template>
  <div id="content">
    <h4 v-if="authenticated">
        You are logged in!
    </h4>
    <h4 v-if="!authenticated">
      You are not logged in! Please <a @click="auth.login()">Log In</a> to continue.
    </h4>
  </div>
</template>

<script>
  export default {
    name: 'home',
    props: ['auth', 'authenticated']
  }
</script>
<style scoped>
  a {
    cursor: pointer;
  }
  #content{
    color:white;
    height:89vh;
    background-size:cover;
    background-image: url("../assets/SpryLandscape.jpg");
  }
</style>
