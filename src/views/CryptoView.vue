<!-- src/views/HomeView.vue（或新建 CryptoView.vue） -->
<template>
  <div class="crypto-view">
    <h1>加密貨幣行情</h1>
    <CoinList />
  </div>
</template>

<script setup>
import CoinList from '@/components/crypto/CoinList.vue'
</script>

<style scoped>
.crypto-view {
  max-width: 900px;
  margin: 0 auto;
}

h1 {
  color: #e0e0e0;
  padding: 24px;
  font-size: 22px;
  font-weight: 500;
}
</style>