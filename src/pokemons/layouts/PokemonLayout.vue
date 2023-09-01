<script setup lang="ts">
import NavBar from '@/shared/views/components/NavBar.vue';
import { pokemonRoute } from '../router';
import type { RouterLink } from '@/router/list-routes';

// el pokemonRoute trae un name path y props definodos 
const routerLinks: RouterLink[] = pokemonRoute.children?.map( ({name, path, props}) => {

  return {
    name: name?.toString() ?? '',
    path: path,
    title: (props as {title: string}).title,
  } 
}) || []



</script>
<template>
  <div>

    <NavBar
    :links="routerLinks"
    is-secondary
    />
    <h4>Pokemon Layout</h4>
    <RouterView/>
  </div>
</template>

<style scoped></style>
