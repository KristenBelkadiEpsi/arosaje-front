<template>
  <div class="login-container" v-if="!isLogin">
    <h2>{{ isRegistering ? "register" : "login" }}</h2>
    <form v-if="!isRegistering" @submit.prevent="login">
      <div class="form-group">
        <label for="username">Username</label>
        <input type="text" id="username" v-model="saisiePseudo" required />
      </div>
      <div class="form-group">
        <label for="email">Email</label>
        <input type="email" id="email" v-model="saisieEmail" required />
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input
          type="password"
          id="password"
          v-model="saisieMotdepasse"
          required
        />
      </div>
      <button type="submit">Login</button>
      <p class="register-link" @click="toggleRegistering">
        Don't have an account? Register here
      </p>
    </form>
    <form v-else @submit.prevent="register">
      <div class="form-group">
        <label for="newUsername">Username</label>
        <input type="text" id="newUsername" v-model="saisiePseudo" required />
      </div>
      <div class="form-group">
        <label for="newEmail">Email</label>
        <input type="email" id="newEmail" v-model="saisieEmail" required />
      </div>
      <div class="form-group">
        <label for="newPassword">Password</label>
        <input
          type="password"
          id="newPassword"
          v-model="saisieMotdepasse"
          required
        />
      </div>
      <button type="submit">Register</button>
      <p class="register-link" @click="toggleRegistering">
        Already have an account? Login here
      </p>
    </form>
  </div>
  <div v-else>
    <PlantesView :username="username" :password="password" :email="email"></PlantesView>
  </div>
</template>

<script lang="ts">
import axios from "axios";
import { defineComponent } from "vue";
import App from "../App.vue";
import PlantesView from "./PlantesView.vue";

export default defineComponent({
  name: "HomeView",
  components: { PlantesView },

  data() {
    return {
      listeImages: [],
      isRegistering: false,
      isLogin: false,
      username: "",
      email: "",
      password: "",
      saisiePseudo: "",
      saisieEmail: "",
      saisieMotdepasse: ""
    };
  },

  methods: {
    toggleRegistering() {
      this.isRegistering = !this.isRegistering;
      this.clearFields();
    },

    clearFields() {
      this.username = "";
      this.email = "";
      this.password = "";
      this.saisiePseudo = "";
      this.saisieEmail = "";
      this.saisieMotdepasse = "";
    },

    login() {
      axios
        .request({
          method: "get",
          maxBodyLength: Infinity,
          url: "http://localhost:5000/api/login",
          headers: {
            username: this.saisiePseudo,
            password: this.saisieMotdepasse,
            email: this.saisieEmail
          }
        })
        .then((reponse) => {
          this.isLogin = true;
          console.log(App.config.globalProperties.$pseudo);
          // this.$pseudo = reponse.data.response.data.nom;
          console.log(reponse.data);

          this.clearFields();
          /* app.config.globalProperties.$user =  */
        })
        .catch((error) => {
          console.log(error.message);
        });

      // You can make an API call or perform any other actions as needed
    },

    register() {
      axios
        .request({
          method: "post",
          maxBodyLength: Infinity,
          url: "http://localhost:5000/api/register",
          headers: {
            username: this.saisiePseudo,
            password: this.saisieMotdepasse,
            email: this.saisieEmail
          }
        })
        .then(() => {
          this.clearFields();
        })
        .catch((error) => {
          console.log(error.response.data);
        });
    }
  }
});
</script>

<style>
.login-container {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f2f2f2;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

h2 {
  text-align: center;
  margin-bottom: 20px;
}

.form-group {
  margin-bottom: 15px;
}

label {
  font-weight: bold;
  display: block;
  margin-bottom: 5px;
}

input[type="text"],
input[type="email"],
input[type="password"] {
  width: 100%;
  padding: 8px;
  border-radius: 4px;
  border: 1px solid #ccc;
}

button {
  display: block;
  width: 100%;
  padding: 10px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.register-link {
  text-align: center;
  cursor: pointer;
  color: #4caf50;
  margin-top: 10px;
}
</style>
