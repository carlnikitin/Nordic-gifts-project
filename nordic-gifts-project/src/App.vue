<template>
  <div id="app">
    <link href="https://fonts.googleapis.com/css?family=Charm&display=swap" rel="stylesheet">
    <img style="width: 200px" alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Vali sobivad elemendid, et luua meelepärane suveniir" />
    <br>
    <textarea rows="7" cols="55" v-model="message" placeholder="add multiple lines"></textarea>
    <img style="margin-top: 25px; width: 250px" alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Vali sobivad elemendid, et luua meelepärane suveniir" />
     <img style="margin-top: 45px; width: 320px" alt="Vue logo" src="./assets/elf.png" />
    <section id="section05" class="demo">
      <a href="#"><span></span>.......</a>
    </section>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "app",
  components: {
    HelloWorld
  }
};
</script>

<style>
* {
  padding: 0px;
  margin: 0px;
}
/*General style*/
#app {
  font-family: 'Charm', cursive;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #707070;
  font-weight: 100;
  font-size: 13px;
  height: 100vh;
  background-image: url(./assets/background.png);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
/*Here starts the arrow pointing down animation style*/
section {
  position: relative;
  width: 100%;
}

.demo a {
  position: absolute;
  left: 50%;
  top: 50px;
  z-index: 2;
  display: inline-block;
  -webkit-transform: translate(0, -50%);
  transform: translate(0, -50%);
  color: transparent;
  font : normal 400 20px/1 'Josefin Sans', sans-serif;
  letter-spacing: .1em;
  text-decoration: none;
  transition: opacity .3s;
}

#section05 a {
  padding-top: 10px;
}
#section05 a span {
  position: absolute;
  top: 0;
  left: 50%;
  width: 24px;
  height: 24px;
  margin-left: -12px;
  border-left: 1.5px solid #333;
  border-bottom: 1.5px solid #333;
  -webkit-transform: rotate(-45deg);
  transform: rotate(-45deg);
  -webkit-animation: sdb05 1.5s infinite;
  animation: sdb05 1.5s infinite;
  box-sizing: border-box;
}
@-webkit-keyframes sdb05 {
  0% {
    -webkit-transform: rotate(-45deg) translate(0, 0);
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    -webkit-transform: rotate(-45deg) translate(-20px, 20px);
    opacity: 0;
  }
}
@keyframes sdb05 {
  0% {
    transform: rotate(-45deg) translate(0, 0);
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    transform: rotate(-45deg) translate(-20px, 20px);
    opacity: 0;
  }
}
textarea {
border: solid 1.5px #707070;
font-family: 'Charm', cursive;
font-size: 20px;
}
textarea::-webkit-input-placeholder {
font-family: 'Charm', cursive;
font-size: 20px;
}

textarea:-moz-placeholder { /* Firefox 18- */
font-family: 'Charm', cursive; 
font-size: 20px;
}

textarea::-moz-placeholder {  /* Firefox 19+ */
font-family: 'Charm', cursive;  
font-size: 20px;
}

textarea:-ms-input-placeholder {
font-family: 'Charm', cursive;  
font-size: 20px;
}
/*Here ends the arrow animation style*/

</style>
