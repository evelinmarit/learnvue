<script setup>
import RouterTabs from './components/RouterTabs.vue';
</script>


<template>
    <RouterTabs></RouterTabs>
    <div class="container section content">
        <Suspense>
            <routerView></routerView>
        </Suspense>
        
    </div>
</template>