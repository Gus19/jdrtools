import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import '@/assets/main.scss'
import '@fortawesome/fontawesome-free/css/all.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
import {tooltip} from "@/utils/tooltip";
app.directive('tooltip', tooltip) // Utilisation avec v-tooltip

app.mount('#app')
