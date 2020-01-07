<template>
  <div id="app">
    <img style="width: 200px" alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Vali sobivad elemendid, et luua meelepärane suveniir" />
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
  font-family: "Apple Chancery", cursive;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
