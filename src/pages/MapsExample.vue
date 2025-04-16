<script setup>
import LeafletMap from '../components/LeafletMap.vue';

let zoom = ref(13);
</script>

<template>
    <input type="range" v-model="zoom" min="0" max="20">{{ zoom }}
    <LeafletMap :zoom="zoom"></LeafletMap>>
</template>

