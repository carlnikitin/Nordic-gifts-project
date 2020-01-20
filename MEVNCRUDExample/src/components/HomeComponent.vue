<template>
  <div class="app">
    <!--Google fonts-->
    <link href="https://fonts.googleapis.com/css?family=Charm&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Catamaran&display=swap" rel="stylesheet">
    
    <img class="logo" :src="logo">
    <h1 class="main_text">Vali sobivad elemendid, et luua meelepärane suveniir</h1>
    <img class="logo" :src="elf">

    <!--Scroll-->
    <VueNextLevelScroll target=".name">
    <div class="wrapper">
      <div class="arrow">
      <ul>
        <li></li>
        <li></li>
      </ul>
      </div>
    </div>
    </VueNextLevelScroll>


    <!--Form-->
    <form  @submit.prevent="addPost">
      <div class="row name justify-content-center">
        <div class="col-sm-12 col-lg-6">
          <div class="form-group">
            <label>Post Title:</label>
            <input type="text" class="form-control" v-model="post.title">
          </div>
        </div>
        </div>
        <div class="justify-content-center row">
          <div class="col-sm-12 col-lg-6">
            <div class="form-group">
              <label>Post Body:</label>
              <textarea class="form-control" v-model="post.body" rows="5"></textarea>
            </div>
          </div>
        </div><br />
        <div class="form-group">
        <button  class="send-button"><span>SAADA TELLIMUS</span></button>

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

export default {
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
          
        });
      }
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
}

/*Textarea style*/
textarea {
border: solid 1.5px #707070;
font-family: 'Catamaran', sans-serif !important;
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

form {
  margin: auto;
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