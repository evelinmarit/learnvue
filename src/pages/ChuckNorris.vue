<script setup>
import { ref } from 'vue';
import axios from 'axios';

const joke = ref('');

let response = await axios.get("https://api.chucknorris.io/jokes/random");
joke.value = response.data.value;

</script>


<template>
    <h1>{{ joke }}</h1>
</template>