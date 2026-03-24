<template>
  <div class="space-y-8">
    <section class="bg-gradient-to-r from-slate-800 to-slate-900 p-8 rounded-3xl border border-slate-700 shadow-xl">
      <h1 class="text-4xl font-extrabold text-white mb-2">
        歡迎回來，<span class="text-green-400">朱恩秀</span>
      </h1>
      <p class="text-slate-400">目前市場情緒：穩定。查看下方的即時行情波動。</p>
    </section>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      
      <div class="bg-slate-900 p-6 rounded-2xl border border-slate-800 hover:border-green-500/50 transition-all group">
        <div class="flex justify-between items-center mb-4">
          <h2 class="text-xl font-bold text-white group-hover:text-green-400">加密貨幣行情</h2>
          <RouterLink to="/crypto" class="text-sm text-slate-500 hover:text-white">查看更多 →</RouterLink>
        </div>
        <div class="space-y-3">
          <div class="flex justify-between items-center py-2 border-b border-slate-800">
            <span class="text-slate-300">Bitcoin (BTC)</span>
            <span class="font-mono text-green-400">$64,230.15</span>
          </div>
          <div class="flex justify-between items-center py-2 border-b border-slate-800">
            <span class="text-slate-300">Ethereum (ETH)</span>
            <span class="font-mono text-green-400">$3,450.22</span>
          </div>
        </div>
      </div>

      <div class="bg-slate-900 p-6 rounded-2xl border border-slate-800 hover:border-blue-500/50 transition-all group">
        <div class="flex justify-between items-center mb-4">
          <h2 class="text-xl font-bold text-white group-hover:text-blue-400">美股熱門行情</h2>
          <RouterLink to="/stock" class="text-sm text-slate-500 hover:text-white">查看更多 →</RouterLink>
        </div>
        <div class="space-y-3">
          <div class="flex justify-between items-center py-2 border-b border-slate-800">
            <span class="text-slate-300">NVIDIA (NVDA)</span>
            <span class="font-mono text-green-400">$890.12</span>
          </div>
          <div class="flex justify-between items-center py-2 border-b border-slate-800">
            <span class="text-slate-300">Apple (AAPL)</span>
            <span class="font-mono text-red-400">$175.45</span>
          </div>
        </div>
      </div>

    </div>

    <section class="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div class="p-4 bg-slate-800/50 rounded-xl text-center border border-slate-700">
        <div class="text-2xl mb-1">🔍</div>
        <div class="text-sm font-semibold text-slate-200">快速搜尋</div>
      </div>
      <div class="p-4 bg-slate-800/50 rounded-xl text-center border border-slate-700">
        <div class="text-2xl mb-1">⭐</div>
        <div class="text-sm font-semibold text-slate-200">自選清單</div>
      </div>
      <div class="p-4 bg-slate-800/50 rounded-xl text-center border border-slate-700">
        <div class="text-2xl mb-1">📈</div>
        <div class="text-sm font-semibold text-slate-200">深度圖表</div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>