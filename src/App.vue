<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import NavBar from './shared/views/components/NavBar.vue';
import { routerLinks } from './router/list-routes';

</script>

<template>
  <header>
    <NavBar 
      title="PokémonApp"
      :links="routerLinks"
      />
  </header>

  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}



nav a.router-link-exact-active {
  color: var(--color-text);
}



</style>
