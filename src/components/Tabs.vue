<script setup>
import { ref } from 'vue';
defineProps(['items']);
const emit = defineEmits(['change']);
const active = ref(0);

function setActive(key) {
  active.value = key;
  emit('change', key);
}
</script>

<template>
    <div class="tabs is-centered">
  <ul>
    <!-- <li class="is-active"><a>Pictures</a></li> -->
    <li v-for="(item,key) in items" :class="{'is-active': key===active}" @click="setActive(key)"><a>{{ item }}</a></li>

  </ul>
</div>
</template>