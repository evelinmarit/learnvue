<script setup>
import Tabs from "./components/Tabs.vue";
import { ref } from 'vue';

let titles = ['Home', 'About', 'Contacts'];
let contents = [
    'My homepage info',
    'My about page info',
    'My contakts page info',
];
let activeTab = ref(0);

function tabChanged(key){
    console.log(key);
    activeTab.value = key;
}
</script>


<template>
    <Tabs :items="titles" @change="tabChanged"></Tabs>
    <div class="container section content-around">
        <h1>{{ contents[activeTab] }}</h1>
    </div>
</template>