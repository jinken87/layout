import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index';
// import router from './router'


// createApp(App).use(router).mount('#app')

const app = createApp(App)

// app.use(createPinia())
app.use(router)

app.mount('#app')

