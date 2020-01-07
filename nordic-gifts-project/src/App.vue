<template>
  <div id="app">
    <link href="https://fonts.googleapis.com/css?family=Charm&display=swap" rel="stylesheet">
    <img style="width: 200px" alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Vali sobivad elemendid, et luua meelepärane suveniir" />
    <br>
    <textarea rows="7" cols="55" v-model="message" placeholder="add multiple lines"></textarea>
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
#app {
  font-family: 'Charm', cursive;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #707070;
  margin-top: 60px;
  font-weight: 100;
  font-size: 13px;
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
</style>
