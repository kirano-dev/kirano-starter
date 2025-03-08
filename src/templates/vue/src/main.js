import '@/assets/scss/app.scss'

import './icons.js';
import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import AppLayout from "@/layouts/AppLayout.vue";

const app = createApp(App)

app.use(router)

app.component('app-layout', AppLayout)

app.mount('#app')
