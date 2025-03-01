<script setup>
import { ref, computed } from "vue";
let message = ref("");
let i = 0;
let items = ref([
  {id: i++, value:"Piim", isDone: true },
  {id: i++, value:"Sai", isDone: false },
  {id: i++, value:"Vein", isDone: true },
]);

let doneItems = computed(() => items.value.filter(item => item.isDone));
let toDoItems = computed(() => items.value.filter(item => !item.isDone));

function addItem() {
  if(message.value.trim() !== ''){
  items.value.push({id: i++, value: message.value.trim(), isDone: false });  
  }
  message.value='';
}
</script>

<template>
  <div class="container content section">
    <div class="field has-addons">
      <div class="control is-expanded">
        <input class="input" type="text" v-model="message" @keydown.enter="addItem" />
      </div>
      <div class="control">
        <button class="button is-info" @click="addItem">
          Add item
        </button>
      </div>
    </div>
    <h1>All items</h1>
    <ul>
      <li v-for="item in items" :key="item.id">
        {{ item.value }}
        <input type="checkbox" v-model="item.isDone">
      </li>
    </ul>

    <h1>Done items</h1>
    <ul>
      <li v-for="item in doneItems" :key="item.id">
        {{ item.value }}
        <input type="checkbox" v-model="item.isDone">
      </li>
    </ul>

    <h1>ToDo items</h1>
    <ul>
      <li v-for="item in toDoItems" :key="item.id">
        {{ item.value }}
        <input type="checkbox" v-model="item.isDone">
      </li>
    </ul>
  </div>
</template>

<style scoped></style>
