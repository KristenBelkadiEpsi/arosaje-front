<template>
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Liste de plantes</title>
    <link
      rel="stylesheet"
      href="https://unpkg.com/bulma@0.9.2/css/bulma.min.css"
    />
  </head>
  <div id="app" class="container">
    <h1 class="title">Liste de plantes</h1>
    <div class="columns is-multiline">
      <div
        class="column is-one-third"
        v-for="plante in plantes"
        :key="plante.id"
      >
        <div class="card">
          <div class="card-image">
            <figure class="image is-4by3">
              <img :src="plante.photo" alt="Image de la plante" />
            </figure>
          </div>
          <div class="card-content">
            <div class="media">
              <div class="media-content">
                <p class="title is-4">{{ plante.nom }}</p>
              </div>
            </div>
            <div class="content">
              {{ plante.description }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import axios from "axios";

export default defineComponent({
  name: "PlantesView.vue",
  props: {
    username: String,
    password: String,
    email: String,
  },
  data() {
    return {
      plantes: [],
    };
  },
  mounted() {
    axios
      .request({
        method: "get",
        maxBodyLength: Infinity,
        url: "http://localhost:5000/api/listePlantes",
      })
      .then((reponse) => {
        this.plantes = reponse.data;
      });
  },
});
</script>

<style scoped>
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  background-color: #f5f5f5;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 15px;
}

.title {
  text-align: center;
  padding: 20px 0;
}

.columns {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.column {
  flex: 0 0 calc(33.333% - 20px);
  margin-bottom: 20px;
}

.card {
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
}

.card-image .image {
  width: 100%;
  height: 0;
  padding-bottom: 75%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

.card-content {
  padding: 20px;
}

.media .title {
  margin: 0;
  font-size: 20px;
}

.content {
  font-size: 16px;
  color: #666;
}
</style>
