<template>
  <div id="app">
    <img style="width: 250px" alt="Vue logo" src="./assets/logo.png" />
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
  font-family: "Apple Chancery", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #707070;
  margin-top: 60px;
  font-weight: 300;
  font-size: 14px;
}
</style>
