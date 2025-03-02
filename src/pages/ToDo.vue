<script setup>
import { computed, ref } from 'vue';
import ItemList from '../components/ItemList.vue';
const message = ref('');
let i = 0;
const items = ref([
  { id: i++, value: 'Piim', isDone: true },
  { id: i++, value: 'Sai', isDone: false },
  { id: i++, value: 'Vein', isDone: true },
]);

const doneItems = computed(() => items.value.filter((item) => item.isDone));
const toDoItems = computed(() => items.value.filter((item) => !item.isDone));

function addItem() {
  if (message.value.trim() !== '') {
    items.value.push({ id: i++, value: message.value.trim(), isDone: false });
  }
  message.value = '';
}
</script>

<template>

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

</template>

<style scoped></style>
