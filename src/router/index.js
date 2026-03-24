import { createRouter, createWebHistory } from 'vue-router'
// 這裡先暫時引入一個頁面測試，之後再換成你的 CryptoView.vue
import HomeView from '../views/HomeView.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/crypto',
            name: 'crypto',
            // 這裡可以指向你之後要做的 CryptoView
            component: () => import('../views/CryptoView.vue')
        }
    ]
})

export default router