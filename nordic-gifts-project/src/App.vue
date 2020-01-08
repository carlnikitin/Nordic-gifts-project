<template>
  <div id="app">
    <link href="https://fonts.googleapis.com/css?family=Charm&display=swap" rel="stylesheet">
    <img style="margin-top: 25px !important; width: 300px" alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld style="margin-top:20px !important" msg="Vali sobivad elemendid, et luua meelepärane suveniir" />
    <img style="margin-top: 45px !important; width: 380px" alt="Nordic gifts logo" src="./assets/elf.png" />
    <br>
    <VueNextLevelScroll target="#text">
    <div class="wrapper">
      <button type=button>
      <div class="arrow">
      <ul>
        <li></li>
        <li></li>
      </ul>
      </div>
      </button>
    </div>
    </VueNextLevelScroll>
    <textarea id="text" rows="7" v-model="message" placeholder="Add multiple lines" maxlength="350"></textarea>
  </div>
</template>

<script>
import VueNextLevelScroll from "vue-next-level-scroll/"
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "app",
  components: {
    HelloWorld,
    VueNextLevelScroll
  }
};

</script>

<style>
/*All*/
* {
  padding: 0px !important;
  margin: 0px !important;
}

html, body {
  height: 100%;
  position:relative;
}
/*General style*/
#app {
  font-family: 'Charm', cursive;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #707070;
  font-weight: 100;
  font-size: 14px;
  background-image: url(./assets/background.png);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  display: block;
}
/*Here starts the arrow pointing down animation style*/

.wrapper {
	width: 0%;
	height: 20%;
}

.arrow {
	width: 38px;
	height: 14px;
	margin: auto !important;
	text-transform: uppercase;
	letter-spacing: 3px;
	text-align: center;
	position: absolute;
	left: 0;
	right: 0;
	bottom: 20px;
	opacity: 0.5;
	transition: ease 1s;
	animation: bouncey 1.6s linear infinite;
  padding: 20px;
}

.arrow ul {
	list-style: none;
}

.arrow ul li {
	width: 24px;
	height: 4px;
	background: #333;
}

.arrow ul li:nth-child(1) {
	left: 0;
	top: 0;
	position: absolute;
	transform: rotate(45deg);
	border-radius: 5px 0 0 5px;
}

.arrow ul li:nth-child(2) {
	left: 14px;
	position: absolute;
	border-radius: 0 5px 5px 0;
	top: 0;
	transform: rotate(-45deg);
}

.arrow:hover {
	opacity: 1;
}

@keyframes bouncey {
	0% {
		transform: translateY(0);
	}

	50% {
		transform: translateY(4px);
	}

	100% {
		transform: translateY(0);
	}
}


/*Textarea style*/
textarea {
border: solid 1.5px #707070;
font-family: 'Charm', cursive;
font-size: 20px;
width: 35%;
display: inline-block;
margin-top: calc(100vh - 450px) !important;
overflow: auto;
outline: none;
-webkit-box-shadow: none;
-moz-box-shadow: none;
box-shadow: none;
padding: 10px !important;

resize: none; /*remove the resize handle on the bottom right*/
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

/*Mobile view*/
/*Textarea*/
@media only screen and (max-width: 1100px) {
  textarea {
    width: 95%;
  }
  .arrow {
    bottom: 20px;
  }
}

</style>
