<script setup>
import { ref } from "vue";
let count = ref(0);

</script>

<template>
  <div class="container content section">
    <button class="button is-primary" v-on:click="count++">Click me</button>
    <p></p>
    <h>{{ count }}</h>
  </div>

</template>

<style scoped>

</style>
