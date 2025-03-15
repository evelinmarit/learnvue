<script setup>
import axios from "axios";
import { nextTick, ref } from "vue";
import CharactersCard from "../components/CharactersCard.vue";
import SimplePagination from "../components/SimplePagination.vue";
import PagedPagination from "../components/PagedPagination.vue";

const pagination = ref({});
const characters = ref({});
const currentPage = ref(1);

getCharacters("https://rickandmortyapi.com/api/character");
async function getCharacters(url) {
  let response = await axios.get(url);
  pagination.value = response.data.info;
  characters.value = response.data.results;
}

async function next() {
  currentPage.value++;
  getCharacters(pagination.value.next);
}

async function prev() {
  currentPage.value--;
  getCharacters(pagination.value.prev);
}

async function page(page) {
  currentPage.value = page;
  getCharacters("https://rickandmortyapi.com/api/character?page=" + page);
}

</script>
<template>
  <PagedPagination :current = "currentPage" :pagination="pagination" @next="next" @prev="prev" @page="page"></PagedPagination>
  <div class="columns is-multiline">
    <div class="column is-one-quarter" v-for="character in characters">
      <CharactersCard :character="character"></CharactersCard>
    </div>
  </div>
</template>
