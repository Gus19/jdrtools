import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import '@/assets/main.scss'
import '@fortawesome/fontawesome-free/css/all.css'

import { createApp } from 'vue'
// import { VueFire, VueFireAuth } from 'vuefire'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
// import { firebaseApp } from './firebase'

const app = createApp(App)

app.use(createPinia())
app.use(router)
// app.use(VueFire, {
//   // imported above but could also just be created here
//   firebaseApp,
//   modules: [
//     // we will see other modules later on
//     VueFireAuth(),
//   ],
// })
import {tooltip} from "@/utils/tooltip";
app.directive('tooltip', tooltip) // Utilisation avec v-tooltip

app.mount('#app')
