<template>
  <v-app>
    <v-main>
      <div class="navigation">
<!--        <router-link to="/" class="nav-link">Home</router-link>-->
<!--        <span class="separator">|</span>-->
<!--        <router-link to="/chat" class="nav-link">Chat</router-link>-->
      </div>
      <router-view />
    </v-main>
  </v-app>
</template>

<style>
.navigation {
  background-color: #f2f2f2;
  padding: 10px;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
}

.nav-link {
  text-decoration: none;
  color: #333;
  font-weight: bold;
  margin-right: 10px;
  transition: color 0.3s;
}

.nav-link:hover {
  color: #4caf50;
}

.separator {
  margin: 0 10px;
  color: #666;
  font-weight: bold;
}
</style>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "App",

  data() {
    return {
      //
    };
  },
});
</script>
