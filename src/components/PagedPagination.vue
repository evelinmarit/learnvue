<script setup>
import { computed } from 'vue';

let { pagination, current } = defineProps(['pagination', 'current']);

const pages = computed(() => {
  const pages = [];
  for(let i = 1; i<=3 && i<=pagination.pages; i++){
    pages[i]=i;
  }
  if(current>5){
  pages.push('...');
}
  if(current > 1 && current < pagination.pages-1) {
  for(let i = current-1; i<= current+1; i++){
    pages[i] = i;
  }
}
if(current<pagination.pages-1) {
  pages.push('...');
}
  for(let i = pagination.pages-2; i<=pagination.pages; i++){
    pages[i] = i;
  }
  return pages.filter(p => p);
});

</script>
<template>
  <nav class="pagination is-centered" role="navigation" aria-label="pagination">
    <button
      :disabled="!pagination.prev"
      @click="$emit('prev')"
      class="pagination-previous"
    >
      Previous
    </button>
    <button :disabled="!pagination.next" @click="$emit('next')" class="pagination-next">
      Next page
    </button>
    <ul class="pagination-list">
    <li v-for="page in pages">
      <span v-if="page === '...'"class="pagination-ellipsis">&hellip;</span>
      <button v-else-if="page === current" class="pagination-link is-current"
        aria-label="'Page ' + page"
        aria-current="page"
        >{{ page }}</button
      >
      <button v-else class="pagination-link" aria-label="'Goto page ' + page" @click="$emit('page', page)">{{ page }}</button>
      
    </li>
    <!-- <li>
      <span class="pagination-ellipsis">&hellip;</span>
    </li>
    <li>
      <a href="#" class="pagination-link" aria-label="Goto page 45">45</a>
    </li>
    <li>
      <a
        class="pagination-link is-current"
        aria-label="Page 46"
        aria-current="page"
        >46</a
      >
    </li>
    <li>
      <a href="#" class="pagination-link" aria-label="Goto page 47">47</a>
    </li>
    <li>
      <span class="pagination-ellipsis">&hellip;</span>
    </li>
    <li>
      <a href="#" class="pagination-link" aria-label="Goto page 86">86</a>
    </li> -->
  </ul>
  </nav>
</template>
