import Vue from 'vue';
import App from './App.vue';
import 'bootstrap'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import 'materialize-css/dist/css/materialize.css'
import 'materialize-css';

import VueSimpleAlert from "vue-simple-alert";
import VueNumberInput from '@chenfengyuan/vue-number-input';

Vue.use(VueSimpleAlert);
Vue.use(VueNumberInput);

import VueRouter from 'vue-router';
Vue.use(VueRouter);

import VueAxios from 'vue-axios';
import axios from 'axios';

Vue.use(VueAxios);

const base = axios.create({
  baseURL: "https://server-app-nordic.herokuapp.com"
});

Vue.prototype.$http = base;
Vue.config.productionTip = false;

import IndexComponent from './views/IndexComponent.vue';
import EditComponent from './views/EditComponent.vue';


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
          path: "/login"
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