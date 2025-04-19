<script setup>
import axios from "axios";
import { ref } from "vue";

const message = ref("");
const messages = ref([]);

const res = await axios.get("http://localhost:3001/messages");
messages.value = res.data;

const evtSource = new EventSource("http://localhost:3001/messages/sse");
evtSource.onmessage = (event) => {
    messages.value.push(...JSON.parse(event.data));
};

async function send() {
  const res = await axios.post("http://localhost:3001/messages", {
    message: message.value,
  });
  message.value = "";
}
</script>
<template>
  <div class="field has-addons">
    <div class="control is-expanded">
      <input
        class="input"
        type="text"
        v-model="message"
        @keydown.enter="send"
      />
    </div>
    <div class="control">
      <button class="button is-info" @click="send">Send</button>
    </div>
  </div>
  <div class="notification" v-for="msg in messages">
    {{ msg.message }}
    <button class="delete"></button>
  </div>
</template>
