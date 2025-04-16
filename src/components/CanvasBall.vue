<script setup>
import { onMounted, ref, nextTick, onUpdated, watch } from "vue";

const { ctx, x, y, draw, radius, color } = defineProps([
  "ctx",
  "x",
  "y",
  "draw",
  "radius",
  "color",
]);

onMounted(() => {
  // nextTick(() => {
  //   ctx.beginPath();
  //   ctx.arc(x, y, 40, 0, 2 * Math.PI);
  //   ctx.fillStyle = "red";
  //   ctx.fill();
  // });
});

onUpdated(() => {
  if (draw) {
    ctx.beginPath();
    ctx.arc(x, y, radius, 2 * Math.PI);
    ctx.fillStyle = color;
    ctx.fill();
  }
});

// watch(() => x, (x, oldX) => {
//     ctx.clearRect(oldX-40,y-40,80,80);
// })
// watch(() => y, (y, oldY) => {
//     ctx.clearRect(x-40,oldY-40,80,80);
// })
</script>

<template></template>
