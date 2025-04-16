<script setup>
import RouterTabs from './components/RouterTabs.vue';
</script>


<template>
    <RouterTabs></RouterTabs>
    <div :class="$route.meta.container == undefined ? 'container section content' : ''">
        <Suspense>
            <routerView></routerView>
        </Suspense>
        
    </div>
</template>
