<template>
<div id="Galllery">
  <h1>Gallery</h1>
  <img id="bikeimg" :src="images[imagecounter]" />
  <button id="nextImg" type="button" @click="getImage">Next Image</button>
  <button id="galleryStart" :disabled='disabled' type="button" @click="getImageAsync">Start Image Gallery</button>  
</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  computed: mapGetters([
    'imagecounter',
    'images',
    'disabled'
  ]),
  methods: mapActions([
    'getImage',
    'getImageAsync'
  ]),
  name: 'Gallery',
  data () {
    return {
      msg: 'Placeholder Message'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#bikeimg{
  height:50vh;
}
#nextImg{
  background-color: green;
  border:none;
  border-radius:2px;
  height: 5vh;
  display: block;
  margin: 2vh;
} #nextImg:active{
  background-color:darkgreen;
}
@media (max-width: 480px) {
  #bikeimg{
    height: 25vh;
  }
}
</style>
