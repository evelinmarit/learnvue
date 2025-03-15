<script setup>
import axios from "axios";
import { nextTick, ref } from "vue";
import CharactersCard from "../components/CharactersCard.vue";
import SimplePagination from "../components/SimplePagination.vue";
import PagedPagination from "../components/PagedPagination.vue";

const pagination = ref({});
const characters = ref({});
const currentPage = ref(1);
const SearchValue = ref('');
let searchTimeout = null;

getCharacters();
async function getCharacters() {
  let response = await axios.get("https://rickandmortyapi.com/api/character", {
    params: {
      page: currentPage.value,
      name: SearchValue.value
    }
  });
  pagination.value = response.data.info;
  characters.value = response.data.results;
}

async function next() {
  currentPage.value++;
  getCharacters();
}

async function prev() {
  currentPage.value--;
  getCharacters();
}

async function page(page) {
  currentPage.value = page;
  getCharacters();
}

async function search() {
  clearTimeout(searchTimeout);  // debounce
  searchTimeout = setTimeout(() => {
    currentPage.value = 1;
    getCharacters();    
  }, 600);
}

</script>
<template>
  <div class="field has-addons">
  <div class="control is-expanded">
    <input @input="search" class="input" type="text" placeholder="Search" v-model="SearchValue">
  </div>
  <div class="control">
    <button @click="search" class="button is-primary">
      Search
    </button>
  </div>
</div>
  <PagedPagination :current = "currentPage" :pagination="pagination" @next="next" @prev="prev" @page="page"></PagedPagination>
  <div class="columns is-multiline">
    <div class="column is-one-quarter" v-for="character in characters">
      <CharactersCard :character="character"></CharactersCard>
    </div>
  </div>
</template>
