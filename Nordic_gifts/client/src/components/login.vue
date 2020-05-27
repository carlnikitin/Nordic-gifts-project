<template>
  <div class="container logincon">
    <div class="row">
      <div class="col-lg-6 offset-lg-3 col-sm-10 offset-sm-1">
        <form
          class="text-center border border-primary p-5"
          @submit.prevent="loginUser"
        >
          <img class="logo" :src="logo">
          <!-- E-mail -->
          <input
            type="text"
            id="email"
            class="form-control mb-5"
            placeholder="E-mail"
            v-model="login.email"
            required
          />

          <!-- Password -->
          <input
            type="password"
            id="password"
            class="form-control mb-5"
            placeholder="Parool"
            v-model="login.password"
            required
          />

          <p>
            Dont have an account??<router-link to="/register"
              >click here</router-link
            >
          </p>

          <!-- Sign in button -->
          <center>
            <button class="btn btn-primary btn-block w-75 my-4" type="submit">
              Login Sisse
            </button>
          </center>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import swal from "sweetalert";
export default {
  data() {
    return {
      logo: require('@/assets/logo.png'),
      login: {
        email: "",
        password: ""
      },
    };
  },
  methods: {
    async loginUser() {
      try {
        let response = await this.$http.post("/user/login", this.login);
        let token = response.data.token;
        localStorage.setItem("jwt", token);
        if (token) {
          this.$router.push("/tellijate_andmed");
        }
      } catch (err) {
        swal("Vale kasutajanimi või parool.", "", "error");
        console.log(err.response);
      }
    }
  }
};
</script>

<style>
.logo {
  max-width: 45%;
  margin-bottom: 25px;
}
.logincon {
    margin: 0 auto;
    width: 100%; 
    padding-right: 15px;
    padding-left: 15px;
    padding-top: 60px;
}
.border-primary {
  border-color: #d6dbe0!important;
  -webkit-box-shadow: 1px 1px 15px 1px #ccc;  /* Safari 3-4, iOS 4.0.2 - 4.2, Android 2.3+ */
  -moz-box-shadow:    1px 1px 15px 1px #ccc;  /* Firefox 3.5 - 3.6 */
  box-shadow:         1px 1px 15px 1px #ccc;  /* Opera 10.5, IE 9, Firefox 4+, Chrome 6+, iOS 5 */
}
@media only screen and (max-width: 900px) {
  .btn {
  width: 80%; 
}
.logo {
  max-width: 100%;
}
}
</style>
