<script setup>
import Tabs from "./components/Tabs.vue";
import { ref } from 'vue';
import Modals from "./pages/Modals.vue";
import ToDo from "./pages/ToDo.vue";

let titles = ['Modals', 'ToDo'];
let contents = [
    Modals,
    ToDo,
];
let activeTab = ref(0);

function tabChanged(key){
    activeTab.value = key;
}
</script>


<template>
    <Tabs :items="titles" @change="tabChanged"></Tabs>
    <div class="container section content">
        <component :is="contents[activeTab]"></component>
    </div>
</template>