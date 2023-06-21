<template>
    <div class="chat-wrapper">
        <div class="chat-container">
            <div v-for="msg in historiqueMessages" :key="msg.id" class="message-container"
                :class="{ 'sender-message': msg.auteur === 'expediteur', 'receiver-message': msg.auteur !== 'expediteur' }">
                <div class="message-bubble">
                    <div class="message-content">{{ msg.contenu }}</div>
                    <div class="message-info">{{ msg.auteur }} - {{ msg.date }}</div>
                </div>
            </div>
        </div>
        <div class="input-container">
            <v-textarea label="Saisissez votre message" v-model="saisie" class="message-input"></v-textarea>
            <v-btn @click="envoyerMessage" class="send-button">Envoyer</v-btn>
        </div>
    </div>
</template>
  
<style>
.chat-wrapper {
    background-color: #f9f9f9;
    padding: 20px;
}

.chat-container {
    background-color: white;
    border-radius: 10px;
    padding: 10px;
    height: 300px;
    overflow-y: auto;
}

.message-container {
    display: flex;
    justify-content: flex-start;
    margin-bottom: 10px;
}

.sender-message {
    justify-content: flex-end;
}

.message-bubble {
    background-color: #f2f2f2;
    padding: 8px;
    border-radius: 20px;
    max-width: 70%;
}

.sender-message .message-bubble {
    background-color: #dcf8c6;
}

.message-content {
    font-size: 14px;
}

.message-info {
    font-size: 12px;
    color: gray;
}

.input-container {
    display: flex;
    align-items: center;
    margin-top: 20px;
}

.message-input {
    flex: 1;
    margin-right: 10px;
}

.send-button {
    background-color: #4caf50;
    color: white;
    min-width: 100px;
}
</style>
  
  
<script lang="ts">
import { defineComponent } from 'vue';
import Message from '../components/Message.vue'
import { io } from "socket.io-client"
export default defineComponent({
    name: "ChatView",
    data() {
        return {
            saisie: "",
            historiqueMessages: new Array<any>(),
            client: io("http://127.0.0.1:4000")
        }
    },
    methods: {
        envoyerMessage() {
            this.client.emit("message", this.saisie);
            this.saisie = "";
        }
    },
    mounted() {
        this.client.on("message", (obj: any) => {
            this.historiqueMessages.push(obj)
        })
    },
    unmounted() {
        this.client.disconnect()
    },
    components: {
        Message
    },
});
</script>