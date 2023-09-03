import './assets/main.css'
import { VueQueryPlugin } from "@tanstack/vue-query";

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

// app.use(VueQueryPlugin)

// todos los querys se mantendran en cache por 2 minutos
// quiere deir que si realizas una llamdaa http se realizara cada 2 min 
// y la info se mantendra en cache
VueQueryPlugin.install(app, {
    queryClientConfig: {
        defaultOptions: {
            queries: {
                //cuando la app pierde conexion y vuelve tendra la data actualizada
                cacheTime: 1000 * 120,
                refetchOnReconnect: 'always'
            }
        }
    }
})
app.use(router)

app.mount('#app')
