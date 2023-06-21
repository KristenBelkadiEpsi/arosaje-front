<template>
    <v-card width="25.0%">
        <v-card-title>{{ auteur }}</v-card-title>
        <v-card-subtitle>( {{ date }} )</v-card-subtitle>
        <v-card-text>{{ contenu }}</v-card-text>
    </v-card>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: "Message",
    props: {
        contenu: String,
        auteur: String,
        date: Date,
    }
})
</script>