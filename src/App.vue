<script setup>
import { ref, computed } from "vue";
import ItemList from "./ItemList.vue";
let message = ref("");
let i = 0;
let items = ref([
  { id: i++, value: "Piim", isDone: true },
  { id: i++, value: "Sai", isDone: false },
  { id: i++, value: "Vein", isDone: true },
]);

let doneItems = computed(() => items.value.filter((item) => item.isDone));
let toDoItems = computed(() => items.value.filter((item) => !item.isDone));

function addItem() {
  if (message.value.trim() !== "") {
    items.value.push({ id: i++, value: message.value.trim(), isDone: false });
  }
  message.value = "";
}
</script>

<template>
  <div class="container content section">
    <div class="field has-addons">
      <div class="control is-expanded">
        <input
          class="input"
          type="text"
          v-model="message"
          @keydown.enter="addItem"
        />
      </div>
      <div class="control">
        <button class="button is-info" @click="addItem">Add item</button>
      </div>
    </div>
    <ItemList :items="items" title="All items"></ItemList>
    <ItemList :items="doneItems" title="Done items"></ItemList>
    <ItemList :items="toDoItems" title="ToDo items"></ItemList>
  </div>
</template>

<style scoped></style>
