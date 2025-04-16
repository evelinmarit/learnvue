<script setup>
import * as L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { onMounted, watch } from 'vue';
let props = defineProps(['zoom']);
let map = null;
onMounted(() => {
    let map = L.map('map').setView([59.4226, 24.7070], props.zoom);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
})

watch(() => props.zoom, (zoom, oldZoom)=>{
    map.setZoom(zoom);
});
</script>

<template>
    <div id="map"></div>
</template>

<style>
#map { height: 800px; }
</style>