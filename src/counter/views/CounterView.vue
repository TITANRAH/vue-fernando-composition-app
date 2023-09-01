<script setup lang="ts">

import {ref} from 'vue'

const counter = ref(5);

const increase = ( ) => {
    counter.value++
}


</script>
<template>
    <h1>Counter View: {{ counter }}</h1>
    <button @click="increase">+1</button>
</template>



<style scoped>
</style>