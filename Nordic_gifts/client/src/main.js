import Vue from 'vue'
import App from './App.vue'
import 'bootstrap'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import 'materialize-css/dist/css/materialize.css'
import 'materialize-css'

import VueSimpleAlert from "vue-simple-alert";

Vue.use(VueSimpleAlert);

import VueRouter from 'vue-router';
Vue.use(VueRouter);

import VueAxios from 'vue-axios';
import axios from 'axios';

Vue.use(VueAxios);

const base = axios.create({
  baseURL: process.env.BASE_URI || "http://localhost:4000"
});

Vue.prototype.$http = base;
Vue.config.productionTip = false;

import HomeComponentEng from './components/HomeComponentEng.vue';
import IndexComponent from './components/IndexComponent.vue';
import EditComponent from './components/EditComponent.vue';


const routes = [
  {
      path: "/",
      name: "home",
      component: () => import("../src/views/HomeComponent.vue")
  },
  {
    path: "/eng",
    name: "homeEng",
    component: () => import("../src/views/HomeComponentEng.vue")
},
  {
      name: 'posts',
      path: '/tellijate_andmed',
      component: IndexComponent,
      meta: {
        requiresAuth: true
      }
  },
  {
      name: 'edit',
      path: '/edit/:id',
      component: EditComponent,
      meta: {
        requiresAuth: true
      }
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../src/views/login.vue")
  },
  {
    path: "/register",
    name: "register",
    component: () => import("../src/views/register.vue")
  }
];

const router = new VueRouter({ 
  mode: "history", 
  base: process.env.BASE_URL, 
  routes
});

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
      if (localStorage.getItem("jwt") == null) {
        next({
          path: "/"
        });
      } else {
        next();
      }
    } else {
      next();
    }
  });

  new Vue({
    router,
    render: h => h(App)
  }).$mount("#app");
  

export default router;