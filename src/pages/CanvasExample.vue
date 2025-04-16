<script setup>
import { ref } from 'vue';
import CanvasBall from '../components/CanvasBall.vue';
import CanvasElement from '../components/CanvasElement.vue';

const ball = ref({x: 100, y: 100});
const radius = ref(40);
const color = ref('#FF0000');
const draw = ref(false);

function mousemove(event){
    console.log(event);
    ball.value.x = event.x;
    ball.value.y = event.y-event.target.offsetTop;
}

</script>

<template>
    <input type="range" min="10" max="200" v-model="radius">
    <input type="color" v-model="color">
    <div>
        <CanvasElement @mousemove="mousemove" @mousedown="draw=true" @mouseup="draw=false" v-slot="{ctx}">
        <CanvasBall :ctx="ctx" :x="ball.x" :y="ball.y" :draw="draw" :radius="radius" :color="color"></CanvasBall>
    </CanvasElement>
    </div>

</template>