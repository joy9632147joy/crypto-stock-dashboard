// src/composables/useCrypto.js
import { ref } from 'vue'

export function useCrypto() {
    const coins = ref([])
    const loading = ref(false)
    const error = ref(null)

    async function fetchTopCoins() {
        loading.value = true
        error.value = null
        try {
            const res = await fetch(
                'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false'
            )
            coins.value = await res.json()
        } catch (e) {
            error.value = '載入失敗，請稍後再試'
        } finally {
            loading.value = false
        }
    }

    return { coins, loading, error, fetchTopCoins }
}