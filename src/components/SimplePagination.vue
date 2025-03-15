<script setup>
defineProps(['pagination']);

</script>
<template>
  <nav class="pagination" role="navigation" aria-label="pagination">
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
  </nav>
</template>
