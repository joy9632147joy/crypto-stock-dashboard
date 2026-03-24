<script setup>
import { RouterLink, RouterView } from 'vue-router'
// 未來你可以把 NavBar 獨立成一個組件再 import 進來
</script>

<template>
  <div class="min-h-screen w-full bg-slate-950 text-slate-100 font-sans">
    
    <nav class="border-b border-slate-800 bg-slate-900/50 backdrop-blur-md sticky top-0 z-50">
      <div class="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <div class="flex items-center gap-2">
          <img src="./assets/logo.svg" class="w-8 h-8" alt="Logo" />
          <span class="text-xl font-bold tracking-wider text-green-400">COIN-STOCK</span>
        </div>
        
        <div class="flex gap-6 text-sm font-medium">
          <RouterLink to="/crypto" class="hover:text-green-400 transition-colors" active-class="text-green-400">加密貨幣</RouterLink>
          <RouterLink to="/stock" class="hover:text-blue-400 transition-colors" active-class="text-blue-400">美股行情</RouterLink>
          <RouterLink to="/watchlist" class="hover:text-yellow-400 transition-colors" active-class="text-yellow-400">自選清單</RouterLink>
        </div>
      </div>
    </nav>

    <main class="max-w-7xl mx-auto p-6">
      <RouterView />
    </main>
    
  </div>
</template>

<style>
/* 既然用了 Tailwind，這裡通常可以全空，或者放全域設定 */
body {
  margin: 0;
  padding: 0;
}
</style>