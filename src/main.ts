import './assets/global.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import '@mdi/font/css/materialdesignicons.css'
import App from './App.vue'
import router from './router'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
 components,
 directives,
 // ssr: true,
})

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(vuetify)

app.mount('#app')
