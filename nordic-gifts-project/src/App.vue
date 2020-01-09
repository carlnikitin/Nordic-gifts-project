<template>
  <div id="app">
    <!--Google fonts-->
    <link href="https://fonts.googleapis.com/css?family=Charm&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Catamaran&display=swap" rel="stylesheet">
    <!--Nordic Gifts logo-->
    <img style="margin-top: 25px !important; width: 300px" alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld style="margin-top:20px !important" msg="Vali sobivad elemendid, et luua meelepärane suveniir" />
    <!--Customizable elf-->
    <img style="margin-top: 45px !important; width: 380px" alt="Nordic gifts logo" src="./assets/elf.png" />
    <br>
    <!--Scroll-->
    <VueNextLevelScroll target=".arrow">
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
  
    <!--Form-->
    <div class="row justify-content-md-center form-input">
    <form class="col col-sm-4">
      <div class="row">
        <div class="input-field col s12">
          <input id="name" type="text" class="validate" required="required">
          <label for="name">Nimi</label>
        </div>
      </div>
        <div class="row">
          <div class="input-field col s12">
            <input id="email" type="email" class="validate" required="required">
            <label for="email">E-mail</label>
          </div>
        </div>
      <div class="row">
        <div class="input-field col s12">
          <input id="tel" type="tel" class="validate" required="required">
          <label for="tel">Telefoni number</label>
        </div>
      </div>
    </form>
  </div>

<!--Textarea-->
<textarea id="text" rows="7" v-model="message" placeholder="Soovid midagi lisada oma suveniirile? Anna meile teada" maxlength="350"></textarea>

  <!--Send button-->
<button type="button" class="send-button"><span>SAADA TELLIMUS</span></button>

<!--Footer-->
<footer>
  <div id="footer-content">
    <h5>info@nordicgifts.ee</h5>
    <h5>+372 5184 123</h5>
  </div>
</footer>
  </div>  
</template>

<!--Javascript-->
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
  font-family: 'Catamaran', sans-serif;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #707070;
  font-weight: 100;
  font-size: 14px !important;
  background-image: url(./assets/background.png);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  display: block;
}
/*Footer*/
footer {
  background: #443838;
  height: 120px;
  position:relative;
  padding-top: 5px !important;
  margin-top: 210px !important;
}
footer:before {
 content:"";
 position:absolute;
 top: -59px;
 height:60px;
 left:0;
 right:0;
 background:linear-gradient(to bottom left, transparent 49%, #443838 50%);
}
h5 {
color: white;
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
font-family: 'Catamaran', sans-serif !important;
width: 35% !important;
display: inline-block;
overflow: auto !important;
outline: none !important;
-webkit-box-shadow: none;
-moz-box-shadow: none;
box-shadow: none;
padding: 10px !important;
height: 190px !important;
margin-top: 50px !important;
margin-bottom: 80px !important;

resize: none !important; /*remove the resize handle on the bottom right*/
}

#text{
  font-size: 20px;
}

textarea::-webkit-input-placeholder {
font-family: 'Catamaran', sans-serif;
font-size: 20px;
}

textarea:-moz-placeholder { /* Firefox 18- */
font-family: 'Catamaran', sans-serif; 
font-size: 20px;
}

textarea::-moz-placeholder {  /* Firefox 19+ */
font-family: 'Catamaran', sans-serif;  
font-size: 20px;
}

textarea:-ms-input-placeholder {
font-family: 'Catamaran', sans-serif;  
font-size: 20px;
}

/*Form*/
.row {
  margin: 20px 0px 5px 0px !important;
}
.form-input {
  margin-top: calc(100vh - 500px) !important;
}
/*Send button*/
.send-button {
  margin:20px auto 0px auto !important;
  display:block !important;
  background-color: #FF9F7F !important;
  color: #fff;
  border-radius: 10px;
  border: 0px;
  padding: 15px 30px !important;
  font-size: 18px;
  transition: all 0.5s;
}

.send-button span {
  position: relative !important;
  transition: 0.5s;
  display: inline-block !important;
}

.send-button span:after {
  content: '\00bb';
  position: absolute !important;
  opacity: 0;
  top: 0;
  right: -20px !important;
  transition: 0.5s;
}

.send-button:hover span {
  padding-right: 25px !important;
}

.send-button:hover span:after {
  opacity: 1;
  right: 0 !important;
}

/*Input style*/
input {
  box-shadow: 0 0.1px 0 0 #333 !important;
  border-bottom: 0.1px solid #333 !important;
  font-family: 'Catamaran', sans-serif !important;
}

/*Label*/
label {
  color: #333 !important;
  font-size: 16px !important;
}

/*Footer content eg email and phone*/
#footer-content h5 {
  margin: 10px !important;
}

/*Incorrect input then red*/
input.invalid[type=email]:not(.browser-default), input.invalid[type=text]:not(.browser-default), input.invalid[type=tel]:not(.browser-default) {
  border-bottom: 0.1px solid red !important;
  box-shadow: 0 0.1px 0 0 red !important;
}

/* unvisited link */
.send-button:link {
  background-color: #FF9F7F !important;
}

/* visited link */
.send-button:visited{
  background-color: #FF9F7F !important;
}

/* mouse over link */
.send-button:hover{
  background-color: #F59170 !important;
}

/* selected link */
.send-button:active {
  background-color: #F59170 !important;
}

/*Mobile view*/
/*Textarea*/
@media only screen and (max-width: 900px) {
  textarea {
    width: 95% !important;
  }
  .arrow {
    bottom: 20px;
  }
}

</style>