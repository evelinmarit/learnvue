<script setup>
import { onMounted, ref } from 'vue';

let mycanvas = ref(null);
let ctx = ref(null);

onMounted(() => {
    ctx.value = mycanvas.value.getContext('2d');

});

</script>

<template>
    <canvas @mousemove="$emit('mousemove', '$event')" ref="mycanvas" width="1280" height="960"></canvas>
    <slot> :ctx="ctx"</slot>
</template>