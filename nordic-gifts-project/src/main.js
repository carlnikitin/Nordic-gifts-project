import Vue from "vue";
import App from "./App.vue";
import store from "./store";

import 'bootstrap'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import 'materialize-css/dist/css/materialize.css'
import 'materialize-css'

Vue.config.productionTip = false;

new Vue({
  store,
  render: h => h(App)
}).$mount("#app");
