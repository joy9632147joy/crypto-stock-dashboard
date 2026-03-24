
import { createApp } from 'vue'
import App from './App.vue'
import router from './router' // 引入剛才寫的路由設定
import './assets/main.css'

const app = createApp(App)

app.use(router) // 告訴 Vue 我要使用路由功能

app.mount('#app')
