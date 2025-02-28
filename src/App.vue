<script setup>
import { ref } from "vue";
let message = ref('Hello vue');

</script>

<template>
  <div class="container content section">
    <input class="input" type="text" v-model="message">
    <h1>{{ message.split('').reverse().join('') }}</h1>
    
  </div>

</template>

<style scoped>

</style>
