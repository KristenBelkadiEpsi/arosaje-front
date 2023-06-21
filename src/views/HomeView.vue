<template>
  <div class="login-container">
    <h2>Login</h2>
    <form v-if="!isRegistering" @submit.prevent="login">
      <div class="form-group">
        <label for="username">Username</label>
        <input type="text" id="username" v-model="username" required>
      </div>
      <div class="form-group">
        <label for="email">Email</label>
        <input type="email" id="email" v-model="email" required>
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input type="password" id="password" v-model="password" required>
      </div>
      <button type="submit">Login</button>
      <p class="register-link" @click="toggleRegistering">Don't have an account? Register here</p>
    </form>
    <form v-else @submit.prevent="register">
      <div class="form-group">
        <label for="newUsername">Username</label>
        <input type="text" id="newUsername" v-model="newUsername" required>
      </div>
      <div class="form-group">
        <label for="newEmail">Email</label>
        <input type="email" id="newEmail" v-model="newEmail" required>
      </div>
      <div class="form-group">
        <label for="newPassword">Password</label>
        <input type="password" id="newPassword" v-model="newPassword" required>
      </div>
      <button type="submit">Register</button>
      <p class="register-link" @click="toggleRegistering">Already have an account? Login here</p>
    </form>
  </div>
</template>

<script lang="ts">
import axios from "axios";
import { defineComponent } from "vue";

export default defineComponent({
  name: "HomeView",

  data() {
    return {
      isRegistering: false,
      username: "",
      email: "",
      password: "",
      newUsername: "",
      newEmail: "",
      newPassword: ""
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
      this.newUsername = "";
      this.newEmail = "";
      this.newPassword = "";
    },

    login() {
      // Perform login logic here
      console.log("Username:", this.username);
      console.log("Email:", this.email);
      console.log("Password:", this.password);
      // You can make an API call or perform any other actions as needed
    },

    register() {
      axios.request({
        method: 'post',
        maxBodyLength: Infinity,
        url: 'http://localhost:5000/api/register',
        headers: {
          'username': this.newUsername,
          'password': this.newPassword,
          'email': this.newEmail
        }
      }).catch(error => {
        console.log(error.response.data)
      })


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
