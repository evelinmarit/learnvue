<script setup>
import axios from "axios";
import { ref } from "vue";

const message = ref("");
const messages = ref([]);

const res = await axios.get("http://localhost:3001/messages");
messages.value = res.data;
let lastMessageDate = res.data[res.data.length - 1]?.time;

longPoll();

function longPoll() {
  axios
    .get("http://localhost:3001/messages", {
      params: {
        date: lastMessageDate,
      },
    })
    .then((res) => {
      if (res.data.length) {
        messages.value.push(...res.data);
        lastMessageDate = res.data[res.data.length - 1]?.time;
      }
      longPoll();
    });
}

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
