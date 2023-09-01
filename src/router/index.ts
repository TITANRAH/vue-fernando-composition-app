import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../shared/views/HomeView.vue'
import AboutView from '../shared/views/AboutView.vue'
import { pokemonRoute } from '@/pokemons/router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      // tuve que apretar control shift p par hacer reload windows 
      // ya quye no detectaba el componente
      path: '/counter',
      name: 'counter',
      component: () => import('../counter/views/CounterView.vue')

    },
   
    {
      // llamo a las rutas de la carpeta pokemon asi y en esa carpeta de pokemons declaro otro archivo de rutas
      ...pokemonRoute,
      name: 'pokemons',
    },
    { //si la ruta no existe me llevara a home
      path: '/:patMatch(.*)*',
      redirect: () => { 
       console.log('ruta no existe ')
       return {name: 'home'}
      }      
    }
   
  ]
})

export default router
