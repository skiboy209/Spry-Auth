<template>
<div id="BikeBuilder">
  <h1>Bike Builder</h1>
  <img id="currentImg" :src="currentImg" />
  <div id="currentPart">
    <div v-if="modelSelect">
      <img id="modelImg" @click="partSelect(0, 0)" class="modelImg" :src="model[0]"/>
      <img id="modelImg2" @click="partSelect(0, 1)" class="modelImg" :src="model[1]"/>
      <img id="modelImg3" @click="partSelect(0, 2)" class="modelImg" :src="model[2]"/>
    </div>
    <div v-if="colorSelect">
      <img id="modelImg" @click="partSelect(1, 0)" class="modelImg" :src="color[0]"/>
      <img id="modelImg2" @click="partSelect(1, 1)" class="modelImg" :src="color[1]"/>
      <img id="modelImg3" @click="partSelect(1, 2)" class="modelImg" :src="color[2]"/>
    </div>
    <div v-if="forkSelect">
      <img id="modelImg" @click="partSelect(2, 0)" class="modelImg" :src="model[0]"/>
      <img id="modelImg2" @click="partSelect(2, 1)" class="modelImg" :src="model[1]"/>
      <img id="modelImg3" @click="partSelect(2, 2)" class="modelImg" :src="model[2]"/>
    </div>
    <div v-if="seatSelect">
      <img id="modelImg" @click="partSelect(2, 0)" class="modelImg" :src="color[0]"/>
      <img id="modelImg2" @click="partSelect(2, 1)" class="modelImg" :src="color[1]"/>
      <img id="modelImg3" @click="partSelect(2, 2)" class="modelImg" :src="color[2]"/>
    </div>
    <div v-if="crankSelect">
      <img id="modelImg" @click="partSelect(3, 0)" class="modelImg" :src="model[0]"/>
      <img id="modelImg2" @click="partSelect(3, 1)" class="modelImg" :src="model[1]"/>
      <img id="modelImg3" @click="partSelect(3, 2)" class="modelImg" :src="model[2]"/>
    </div>
    <div v-if="shifterSelect">
      <img id="modelImg" @click="partSelect(4, 0)" class="modelImg" :src="color[0]"/>
      <img id="modelImg2" @click="partSelect(4, 1)" class="modelImg" :src="color[1]"/>
      <img id="modelImg3" @click="partSelect(4, 2)" class="modelImg" :src="color[2]"/>
    </div>
  </div>
<button id="nextPart" @click="nextPart">Next Part</button>
</div>
</template>

<script>

/*  import { mapGetters, mapActions } from 'vuex'

export default {
  computed: mapGetters([
    'frame',
    'model',
    'disabled',
    'frameNum'
  ]),
  methods: mapActions([
    'getImage',
    'getImageAsync',
    'partSelect',
    'nextPart'
  ]), */
export default {
  name: 'BikeBuilder',
  data () {
    return {
      msg: 'Bike Builder Component',
      model: [require('../assets/bikeBuilder/ArmorActive.jpg'), require('../assets/bikeBuilder/ArmorActive2.jpg'), require('../assets/bikeBuilder/ArmorActive3.jpg')],
      color: [require('../assets/bikeBuilder/black.png'), require('../assets/bikeBuilder/red.png'), require('../assets/bikeBuilder/white.png'), require('../assets/bikeBuilder/mint.png')],
      currentImg: require('../assets/bikeBuilder/ArmorActive.jpg'),
      frameNum: 0,
      partNum: 0,
      partList: [],
      currentPart: 0,
      parts: ['model', 'color', 'fork', 'seat', 'crank', 'shifter'],
      TESTING: [],
      modelSelect: true,
      colorSelect: false,
      forkSelect: false,
      seatSelect: false,
      crankSelect: false,
      shifterSelect: false
    }
  },
  methods: {
    nextPart: function (event) {
      // `this` inside methods points to the Vue instance
      if (this.currentPart === 0) {
        this.modelSelect = false
        this.colorSelect = true
      } else if (this.currentPart === 1) {
        this.colorSelect = false
        this.forkSelect = true
      } else if (this.currentPart === 2) {
        this.forkSelect = false
        this.seatSelect = true
      } else if (this.currentPart === 3) {
        this.seatSelect = false
        this.crankSelect = true
      } else if (this.currentPart === 4) {
        this.crankSelect = false
        this.shifterSelect = true
      } else {
        this.currentPart = 0
      }
      console.log(this.parts)
      this.currentPart++

      // `event` is the native DOM event
      if (event) {
        alert(event.target.tagName)
      }
    },
    partSelect: function (part, id, event) {
      this.partNum = id
      this.partList[part] = id
      console.log(this.partList)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#nextPart {
  margin: 0 10px;
  border: none;
  border-radius: 3px;
  background-color: black;
  color:white;
}
#currentPart {
  margin: 5px 5px;
  padding: 0 10px;
  border:solid 1px black;
  border-radius: 5px;
  width:500px;
}
.modelImg {
  border-radius:5px;
  margin:5px 5px 5px 0;
  width:100px;
  border:solid 1px black;
}.modelImg:hover {
  border:solid 1px grey;
}
#currentImg {
  height:50vh;
}
#nextImg {
  background-color: green;
  border:none;
  border-radius:2px;
  height: 5vh;
  display: block;
  margin: 2vh auto;
} #nextImg:active {
  background-color:darkgreen;
}
@media (max-width: 480px) {
  #bikeimg{
    height: 25vh;
  }
}
</style>
