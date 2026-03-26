<template>
  <div class="bg-slate-900 p-6 rounded-2xl border border-slate-800 flex flex-col h-full">
    <div class="flex justify-between items-center mb-4 border-b border-slate-800 pb-3">
      <h2 class="text-xl font-bold text-white flex items-center gap-2">
        <span class="relative flex h-3 w-3">
          <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
          <span class="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
        </span>
        即時市場快訊
      </h2>
    </div>

    <div class="overflow-hidden relative flex-1">
      <TransitionGroup name="list" tag="ul" class="space-y-4">
        <li v-for="news in newsList" :key="news.id" 
    class="p-3 bg-slate-800/50 rounded-lg border-l-4 hover:bg-slate-700/50 transition-colors cursor-pointer" 
    :class="news.impact === 'high' ? 'border-red-500' : 'border-blue-500'">
  <a :href="news.url" target="_blank" rel="noopener noreferrer" class="block">
    <div class="flex justify-between text-xs text-slate-400 mb-1">
      <span class="font-bold text-slate-300">{{ news.source }} • {{ news.time }}</span>
      <span v-if="news.impact === 'high'" class="text-red-400 font-bold animate-pulse">⚠️ 重要</span>
    </div>
    <p class="text-sm text-slate-200 line-clamp-2">{{ news.title }}</p>
  </a>
</li>
      </TransitionGroup>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const newsList = ref([])
let timer = null

// 把這裡換成妳剛註冊拿到的 Finnhub API Key
const API_KEY = import.meta.env.VITE_FINNHUB_API_KEY;

const fetchRealNews = async () => {
  try {
    // 呼叫 Finnhub 的 Market News API (category 可以選 general, crypto, forex)
    const res = await fetch(`https://finnhub.io/api/v1/news?category=general&token=${API_KEY}`)
    const data = await res.json()

    // Finnhub 會一次丟很多則新聞過來，我們只取最新的 5 筆就好
    const latestNews = data.slice(0, 5).map(item => {
      // Finnhub 給的時間是 Unix Timestamp (秒)，要乘 1000 轉成毫秒
      const date = new Date(item.datetime * 1000)
      
      // 做一個簡單的關鍵字判斷，如果有這些字眼就標示為「重要」
      const isImportant = item.headline.includes('Fed') || 
                          item.headline.includes('Powell') || 
                          item.headline.includes('Rate')
                          
      return {
        id: item.id,
        time: date.toLocaleTimeString('zh-TW', { hour: '2-digit', minute: '2-digit' }),
        title: item.headline,
        source: item.source, // 新聞來源 (例如 Bloomberg, Reuters)
        url: item.url,       // 點擊可以連到原新聞
        impact: isImportant ? 'high' : 'normal'
      }
    })

    newsList.value = latestNews
  } catch (error) {
    console.error('API 呼叫失敗:', error)
  }
}

onMounted(() => {
  fetchRealNews() // 元件掛載時先抓一次
  // 每 60 秒重新抓一次最新新聞
  // (Finnhub 免費版限制每分鐘 60 次呼叫，我們設 60 秒更新一次非常安全)
  timer = setInterval(fetchRealNews, 60000)
})

onUnmounted(() => {
  clearInterval(timer) // 離開頁面時清除計時器
})
</script>

<style scoped>
/* 讓新聞進場和退場有平滑的滑動與淡入淡出效果 */
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}
.list-enter-from {
  opacity: 0;
  transform: translateY(-30px);
}
.list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
</style>