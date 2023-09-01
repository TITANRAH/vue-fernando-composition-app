<script setup lang="ts">
import type { RouterLink } from '@/router/list-routes'

interface Props {
  title?: string;
  links: RouterLink[];
  isSecondary?: boolean;
}

// me sirve para dar valors por defecto en caso de que no venga nada
withDefaults(defineProps<Props>(), {
  title: 'CompoApp',
  isSecondary: false,
})
</script>

<template>
  <main>
    <nav>
      <template v-if="!$props.isSecondary">
             
        <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="25" height="25" />
        <span>{{ title }}</span>
        
      </template>
      <RouterLink 
          v-for="link in $props.links" 
          :to="link.path" 
          :key="link.path">
          {{link.title}}
      </RouterLink>
    </nav>
  </main>
</template>

<style>

nav a.router-link-active{
  color: var(--color-text)
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}
</style>
