<template>
  <div class="app">
    <!--Google fonts-->
    <link href="https://fonts.googleapis.com/css?family=Charm&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Catamaran&display=swap" rel="stylesheet">
    
    <img class="logo" :src="logo">
    <h1 class="main_text">Vali sobivad elemendid, et luua meelepärane suveniir</h1>
     <img class="logo" :src="elf">
         
  </div>
</template>
<script>
export default {
    data () {
        return {
            logo: require('@/assets/logo.png'),
            elf: require('@/assets/elf.png'),
        }
    },
}
</script>

<style>
body {
    padding: 0px;
    margin: 0px;
    background-image: url("~@/assets/background.png");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
}.app {
     
}
.logo {
    width: 350px;
    margin: auto;
    display: block;
}

.main_text  {
    font-family: 'Charm', cursive;
    color: #707070;
    font-size: 34px;
    text-align: center;
}
</style>