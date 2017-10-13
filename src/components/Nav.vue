<template>
    <nav class="navbar">
      <router-link :to="'/'"><img id="logo" src="../assets/logo.png"></router-link>
      <div id="navlinks">
        <router-link :to="'Home'" class="navA" ><div class="navlink">Home</div></router-link>
        <router-link :to="'Gallery'" class="navA" ><div class="navlink">Gallery</div></router-link>
        <router-link :to="'Counter'" class="navA" ><div class="navlink">Counter</div></router-link>
      </div>
      <div id="mobilenav">
        <button @click="showNav" id="navBtn">Click Me!</button>
        <ul v-if="isMobile" id="mobileMenu">  
          <router-link :to="'Home'" class="navA" ><li class="navlink">Home</li></router-link>
          <router-link :to="'Gallery'" class="navA" ><li class="navlink">Gallery</li></router-link>
          <router-link :to="'Counter'" class="navA" ><li class="navlink">Counter</li></router-link>
        </ul>
      </div>
    </nav>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  computed: mapGetters([
    'isMobile'
  ]),
  methods: mapActions([
    'showNav'
  ]),
  name: 'Nav',
  data () {
    return {
      msg: 'Placeholder Message'
    }
  }
}
</script>

<style>
 {
  background: #000 !important;
  color: #0f0 !important;
  outline: solid #f00 1px !important;
}


/*Responsive design for mobile*/

/* Desktop specific */
@media (max-width: 3000px) {
  #mobilenav{
    display:none;
  }
  #logo{
 float:left;
 height: 100px;
 margin:0 25px;
 padding:0;
}
#navbar{
  height:100px;
  background-color:#78909c;
  width:100%;
  margin: 0 0 25px 0;
}
.navlink{
  float:left;
  display:inline;
  line-height: 15vh;
  margin: 0 25px 0 25px;
  height:14.5vh;
} .navlink:hover{
  text-decoration: underline;
}
.navA{
  text-decoration:none;
  color:#000;
} .navA:hover{

}
}

/* Large desktop */
@media (min-width: 1200px) { 
  #mobilenav{
  display:none;
}
#logo{
 float:left;
 height: 100px;
 margin:0 25px;
 padding:0;
}
#navbar{
  height:100px;
  background-color:#78909c;
  width:100%;
  margin: 0 0 25px 0;
}
.navlink{
  float:left;
  display:inline;
  line-height: 15vh;
  margin: 0 25px 0 25px;
  height:14.5vh;
} .navlink:hover{
  text-decoration: underline;
}
.navA{
  text-decoration:none;
  color:#000;
} .navA:hover{
}
}
 
/* Portrait tablet to landscape and desktop */

@media (min-width: 768px) and (max-width: 979px) {
  #mobilenav{
    display:none;
  }
	#logo{
 float:left;
 height: 100px;
 margin:0 25px;
 padding:0;
}
#navbar{
  height:100px;
  background-color:#78909c;
  width:100%;
  margin: 0 0 25px 0;
}
.navlink{
  float:left;
  display:inline;
  line-height: 15vh;
  margin: 0 25px 0 25px;
  height:14.5vh;
} .navlink:hover{
  text-decoration: underline;
}
.navA{
  text-decoration:none;
  color:#000;
} .navA:hover{

}
}
 
/* Landscape phone to portrait tablet */
@media (max-width: 767px) {
  #navBtn{
    float:right;
    margin: 25px;
    width:8vh;
    height:8vh;
    background-color:black;
    border:none;
  } #navBtn{
    cursor:pointer;    
  }
  #navlinks{
    display:none;
  }
#mobilenav{
    display:flex;
    align-items: flex-end;
    justify-content: flex-end;
  }
  #logo{
 float:left;
 height: 100px;
 margin:0 25px;
 padding:0;
}
#navbar{
  height:100px;
  background-color:#78909c;
  width:100%;
  margin: 0 0 25px 0;
}
.navlink{
  display:flex;
  line-height: 15vh;
  margin: 0 25px 0 25px;
  height:14.5vh;
} .navlink:hover{
  text-decoration: underline;
}
.navA{
  text-decoration:none;
  color:#000;
} .navA:hover{

}
}

/*DEFAULT*/
@media (min-width: 481px) and (max-width: 766px) {
#navlinks{
    display:none;
  }
#mobilenav{
    display:flex;
    flex-direction:column;
    align-items: flex-end;
    justify-content: flex-end;
  }
#navBtn{
    display:flex;
    align-items: flex-end;
    justify-content: flex-end;
    width:8vh;
    height:8vh;
    background-image:url('../assets/threelines.svg');
    border:none;
  } #navBtn{
    cursor:pointer;    
  }
  #mobileMenu{
    display:flex;
    flex-direction:column;
  } 
  .navlink{
  flex-direction:column;
  background-color:none;
  line-height: 8vh;
  height:8vh;
} .navlink:hover{
  text-decoration: underline;
}
}
 
/* Landscape phones and down */
@media (max-width: 480px) {
	  #navlinks{
    display:none;
  }
	   #mobilenav{
    display:flex;
    flex-direction:column;
    align-items: flex-end;
    justify-content: flex-end;
  }
	  #navBtn{
    display:flex;
    align-items: flex-end;
    justify-content: flex-end;
    width:8vh;
    height:8vh;
    background-image:url('../assets/threelines.svg');
    border:none;
  } #navBtn{
    cursor:pointer;    
  }
  #mobileMenu{
    display:flex;
    flex-direction:column;
  } 
  .navlink{
  flex-direction:column;
  background-color:none;
  line-height: 8vh;
  height:8vh;
} .navlink:hover{
  text-decoration: underline;
}
}
</style>
