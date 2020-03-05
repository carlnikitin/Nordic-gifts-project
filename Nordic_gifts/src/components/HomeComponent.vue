<template>
  <div id="app">
    <!--Google fonts-->
    <link href="https://fonts.googleapis.com/css?family=Charm&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Catamaran&display=swap" rel="stylesheet">
    
    <img class="logo" :src="logo">
    <button data-balloon-length="large" aria-label="Kliki pea/keha/jalgade peale, et valida oma soovidele vastav element. Kui oled elemendid ära valinud, keri alla ja täida enda andmed, et esitada tellimus" data-balloon-pos="right" class="main_text">Vali sobivad elemendid, et luua meelepärane suveniir</button>
    <img class="logo" :src="elf">

    <!--Scroll-->
    <VueNextLevelScroll target=".arrow">
    <div class="wrapper">
      <div class="arrow">
      <ul>
        <li></li>
        <li></li>
      </ul>
      </div>
    </div>
    </VueNextLevelScroll>

  <!--Language selector-->
    <div class="dropdown">
      <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    <img border="0" alt="Estonian" src="../assets/Estonia.png" width="30" height="20">
      </button>
        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <a class="dropdown-item" href="http://localhost:8081/eng"><img border="0" src="../assets/Great_Britain.png" width="30" height="20"></a>
        </div>
    </div>

    <!--Form-->
    <form @submit.prevent="addPost">
      <div class="row name justify-content-center">
        <div class="col-sm-12 col-lg-6">
          <div class="form-group input-field">
            <label>Nimi</label>
            <input required="required" type="text" class="validate form-control" v-model="post.name">
          </div>
        </div>
        </div>
        <div class="justify-content-center row">
          <div class="col-sm-12 col-lg-6">
            <div class="form-group input-field">
              <label>E-mail</label>
              <input required="required" type="email" class="validate form-control" v-model="post.email">
            </div>
          </div>
        </div>
        <div class="row name justify-content-center">
        <div class="col-sm-12 col-lg-6">
          <div class="form-group input-field">
            <label>Telefon</label>
            <input required="required" type="tel" pattern="[0-9]{8}" class="validate form-control" v-model="post.number">
          </div>
        </div>
        </div>
        <div class="row name justify-content-center">
        <div class="col-sm-12 col-lg-6">
          <div class="form-group">
            <label></label>
            <textarea class="form-control" v-model="post.body" rows="5" placeholder="Soovid midagi lisada oma suveniirile? Anna meile teada"></textarea>
          </div>
        </div>
        </div>
        <div class="form-group">
        <button class="send-button"><span>SAADA TELLIMUS</span></button>
        </div>
    </form>

<!--Footer-->
<footer>
  <div id="footer-content">
    <h5>info@nordicgifts.ee</h5>
    <h5>+372 5184 123</h5>
  </div>
</footer>


  </div>
</template>
<script>
import VueNextLevelScroll from "vue-next-level-scroll/";
import 'balloon-css';

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.tooltipped');
    var instances = M.Tooltip.init(elems, options);
  });


export default {
  name: "app",
      components: {
      VueNextLevelScroll
      },
    data () {
        return {
            logo: require('@/assets/logo.png'),
            elf: require('@/assets/elf.png'),
            post:{}
        }
    },
        methods: {
      addPost(){
        let uri = 'http://localhost:4000/posts/add';
        this.axios.post(uri, this.post).then(() => {
        this.post.name = ''; 
        this.post.email = ''; 
        this.post.number = '';
        this.post.body = '';
        this.$alert(
          "Tellimus on edastatud",
          "Täname",
          "success"
          );
        });
      },
    }
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
    background-size: auto;
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
    background-color: transparent;
    border: none;
    cursor: default !important;
    display: block;
    margin: 30px auto 30px auto;
}

/*Textarea style*/
textarea {
border: solid 1.5px #707070;
font-family: 'Catamaran', sans-serif;
display: inline-block;
overflow: auto;
outline: none;
-webkit-box-shadow: none;
-moz-box-shadow: none;
box-shadow: none;
padding: 10px;
height: 190px;
margin-top: 50px;
margin-bottom: 80px;
resize: none; /*remove the resize handle on the bottom right*/
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
  margin: 20px 0px 5px 0px;
}
.form-input {
  margin-top: calc(100vh - 500px);
}
/*Send button*/
.send-button {
  margin:20px auto 0px auto;
  display:block;
  background-color: #FF9F7F !important;
  color: #fff;
  border-radius: 10px;
  border: 0px;
  padding: 15px 30px;
  font-size: 18px;
  transition: all 0.5s;
}

.send-button span {
  position: relative;
  transition: 0.5s;
  display: inline-block;
}

.send-button span:after {
  content: '\00bb';
  position: absolute;
  opacity: 0;
  top: 0;
  right: -20px;
  transition: 0.5s;
}

.send-button:hover span {
  padding-right: 25px;
}

.send-button:hover span:after {
  opacity: 1;
  right: 0;
}

/*Incorrect input then red*/
input.invalid[type=email]:not(.browser-default), input.invalid[type=text]:not(.browser-default), input.invalid[type=tel]:not(.browser-default) {
  border-bottom: 0.1px solid red !important;
  box-shadow: 0 0.1px 0 0 red !important;
}

/*Input style*/
input {
  box-shadow: 0 0.1px 0 0 #333 !important;
  border-bottom: 0.1px solid #333 !important;
  font-family: 'Catamaran', sans-serif !important;
}

/*Label*/
label {
  color: #333;
  font-size: 16px;
}

/*Footer content eg email and phone*/
#footer-content h5 {
  margin: 10px;
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

/*Here starts the arrow pointing down animation style*/
.wrapper {
  width: 0%;
  height: 20%;
}

.arrow {
  width: 38px;
  height: 14px;
  margin: auto;
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

form {
  margin-top: calc(100vh - 500px);
}

/*Footer*/
footer {
  background: #443838;
  height: 120px;
  position:relative;
  padding-top: 5px;
  margin-top: 210px;
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
text-align: center;
font-family: 'Catamaran', sans-serif;
}

/*Input style*/
input {
  box-shadow: 0 0.1px 0 0 #333;
  border-bottom: 0.1px solid #333;
  font-family: 'Catamaran', sans-serif;
}

/*Label*/
label {
  color: #333;
  font-size: 16px;
}


.container {
  padding: 0px;
  max-width: 100%;
  width: 100%;
}

/*Alert box OK button*/
.swal2-styled.swal2-confirm {
  background-color: #FF9F7F;
}

/*Language selector*/
.dropdown {
  right: 0;
  position: fixed;
  z-index: 1;
  bottom: 0;
  transition: all 0.5s;
}

.btn, .btn:visited {
  background-color: #333;
  opacity: 0.6;
  border:none;
  box-shadow: 0;
  border-radius: 0px;
  transition: all 0.5s;
}
.dropdown-item:hover, .dropdown-item, .dropdown-item:visited {
  background-color: #333;
}

.btn:hover {
  background-color: #333;
  opacity: 0.8;
  transition: all 0.5s;
}

.dropdown-menu.show{
  background-color: #333;
  opacity: 0.8;
  transform: translate3d(-1px, -46px, 0px) !important;
  transition: all 0.5s;
  border-radius: 0px;
}

.btn:focus {
    background-color: #333;
  opacity: 0.8;
  box-shadow: 0 !important;
}

.show>.btn-secondary.dropdown-toggle:focus, .btn-secondary:focus, .btn:focus {
  box-shadow: none;
}
.est_language {
  margin-right: 20px !important;
}


/*Mobile view*/
/*Textarea*/
@media only screen and (max-width: 900px) {
  textarea {
    width: 95%;
  }
  .arrow {
    bottom: 20px;
  }

  input {
    border: none;
  }
}
</style>

