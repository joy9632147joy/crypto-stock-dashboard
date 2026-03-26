<template>
  <div class="bg-slate-900 rounded-2xl border border-slate-800 overflow-hidden shadow-xl">
    
    <div class="p-6 border-b border-slate-800 flex justify-between items-center bg-slate-800/30">
      <h2 class="text-xl font-bold text-white flex items-center gap-2">
        🔥 熱門加密貨幣
      </h2>
      <span v-if="loading" class="text-sm text-slate-400 animate-pulse">即時行情更新中...</span>
      <button v-else @click="fetchTopCoins" class="text-sm text-blue-400 hover:text-blue-300 flex items-center gap-1 transition-colors">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>
        重新整理
      </button>
    </div>

    <div v-if="error" class="p-8 text-center text-red-400">{{ error }}</div>

    <div v-else class="overflow-x-auto">
      <table class="w-full text-left border-collapse min-w-[600px]">
        <thead>
          <tr class="text-slate-400 text-xs uppercase tracking-wider border-b border-slate-800 bg-slate-900/80">
            <th class="p-4 pl-6 font-medium">幣種</th>
            <th class="p-4 font-medium text-right">最新價格</th>
            <th class="p-4 font-medium text-right">24h 漲跌</th>
            <th class="p-4 font-medium text-right hidden sm:table-cell">24h 最高 / 最低</th>
            <th class="p-4 font-medium text-right hidden md:table-cell">市值</th>
            <th class="p-4 pr-6 font-medium text-center">自選</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-slate-800/50">
          <tr v-for="coin in coins" :key="coin.id" class="hover:bg-slate-800/60 transition-colors group">
            
            <td class="p-4 pl-6">
              <div class="flex items-center gap-4">
                <span class="text-slate-600 font-mono text-sm w-4">{{ coin.market_cap_rank }}</span>
                <img :src="coin.image" :alt="coin.name" class="w-8 h-8 rounded-full shadow-sm" />
                <div>
                  <div class="font-bold text-slate-100 text-base">
                    {{ coin.symbol.toUpperCase() }}
                  </div>
                  <div class="text-xs text-slate-500">{{ coin.name }}</div>
                </div>
              </div>
            </td>
            
            <td class="p-4 text-right font-mono text-slate-100 font-semibold text-lg">
              ${{ coin.current_price.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 6 }) }}
            </td>

            <td class="p-4 text-right">
              <div class="inline-flex items-center justify-end gap-1 px-2.5 py-1 rounded-lg font-mono text-sm font-medium"
                   :class="coin.price_change_percentage_24h >= 0 ? 'text-green-400 bg-green-400/10' : 'text-red-400 bg-red-400/10'">
                <span v-if="coin.price_change_percentage_24h >= 0">▲</span>
                <span v-else>▼</span>
                {{ Math.abs(coin.price_change_percentage_24h).toFixed(2) }}%
              </div>
            </td>

            <td class="p-4 text-right hidden sm:table-cell font-mono text-sm">
              <div class="text-slate-300">${{ coin.high_24h?.toLocaleString() }}</div>
              <div class="text-slate-500 text-xs">${{ coin.low_24h?.toLocaleString() }}</div>
            </td>

            <td class="p-4 text-right hidden md:table-cell font-mono text-sm text-slate-400">
              ${{ (coin.market_cap / 1e9).toFixed(2) }}B
            </td>

            <td class="p-4 pr-6 text-center">
              <button class="text-slate-600 hover:text-yellow-400 transition-colors transform hover:scale-110" title="加入自選清單">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.783-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                </svg>
              </button>
            </td>

          </tr>
        </tbody>
      </table>
    </div>
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