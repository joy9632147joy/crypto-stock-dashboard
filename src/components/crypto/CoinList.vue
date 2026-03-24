<!-- src/components/crypto/CoinList.vue -->
<template>
  <div class="coin-list">
    <div v-if="loading" class="loading">載入中...</div>
    <div v-else-if="error" class="error">{{ error }}</div>
    <table v-else>
      <thead>
        <tr>
          <th>#</th>
          <th>幣種</th>
          <th>價格 (USD)</th>
          <th>24h 漲跌</th>
          <th>市值</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="coin in coins" :key="coin.id">
          <td>{{ coin.market_cap_rank }}</td>
          <td class="coin-name">
            <img :src="coin.image" :alt="coin.name" width="24" height="24" />
            <span>{{ coin.name }}</span>
            <span class="symbol">{{ coin.symbol.toUpperCase() }}</span>
          </td>
          <td>${{ coin.current_price.toLocaleString() }}</td>
          <td :class="coin.price_change_percentage_24h >= 0 ? 'up' : 'down'">
            {{ coin.price_change_percentage_24h.toFixed(2) }}%
          </td>
          <td>${{ (coin.market_cap / 1e9).toFixed(1) }}B</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useCrypto } from '@/composables/useCrypto'

const { coins, loading, error, fetchTopCoins } = useCrypto()

onMounted(() => {
  fetchTopCoins()
})
</script>

<style scoped>
.coin-list {
  padding: 24px;
}

table {
  width: 100%;
  border-collapse: collapse;
  color: #e0e0e0;
}

th {
  text-align: left;
  padding: 12px 16px;
  color: #888;
  font-size: 13px;
  border-bottom: 1px solid #333;
}

td {
  padding: 14px 16px;
  border-bottom: 1px solid #1e1e1e;
  font-size: 14px;
}

.coin-name {
  display: flex;
  align-items: center;
  gap: 10px;
}

.symbol {
  color: #666;
  font-size: 12px;
}

.up   { color: #26a69a; }
.down { color: #ef5350; }

.loading, .error {
  color: #888;
  padding: 40px;
  text-align: center;
}
</style>