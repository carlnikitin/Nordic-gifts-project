<template>
  <div id="app">
    <link href="https://fonts.googleapis.com/css?family=Charm&display=swap" rel="stylesheet">
<<<<<<< HEAD
    <img style="margin-top: 25px; width: 150px" alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Vali sobivad elemendid, et luua meelepärane suveniir" />
     <img style="margin-top: 45px; width: 320px" alt="Nordic gifts logo" src="./assets/elf.png" />
    <section id="section05" class="demo">
      <a href="#"><span></span>.......</a>
    </section>
    <textarea rows="7" v-model="message" placeholder="add multiple lines"></textarea>
=======
    <img style="margin-top: 25px !important; width: 250px" alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld style="margin-top:20px !important" msg="Vali sobivad elemendid, et luua meelepärane suveniir" />
    <img style="margin-top: 45px !important; width: 320px" alt="Nordic gifts logo" src="./assets/elf.png" />
    <br>
    <div class="wrapper">
      <a href="#service">	
      <div class="arrow">
      <ul>
        <li></li>
        <li></li>
      </ul>
      </div>
      </a>
    </div>
    <textarea rows="7" v-model="message" placeholder="Add multiple lines"></textarea>
>>>>>>> 069beba13055afa6582a8892d3ae10585ac52f8d
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
  font-size: 13px;
  background-image: url(./assets/background.png);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  display: block;
}
/*Here starts the arrow pointing down animation style*/
<<<<<<< HEAD
section {
  position: relative;
  width: 100%;
}

.demo a {
  position: absolute;
  left: 50%;
  top: 150px;
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
=======

.wrapper {
	width: 0%;
	height: 20%;
>>>>>>> 069beba13055afa6582a8892d3ae10585ac52f8d
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
<<<<<<< HEAD
margin-top: 150px;
=======
display: inline-block;
margin-top: 300px !important;
>>>>>>> 069beba13055afa6582a8892d3ae10585ac52f8d
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
