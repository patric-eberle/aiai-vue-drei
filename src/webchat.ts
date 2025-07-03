import './setup/style/main.scss'

import { createApp } from 'vue'
import WebChat from './WebChat.vue'
import router from './router'

const app = createApp(WebChat)

app.use(router)

app.mount('#app')
