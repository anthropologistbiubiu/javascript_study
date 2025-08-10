<template>
  <div class="min-h-screen bg-gradient-to-tr from-purple-400 via-blue-200 to-pink-200 relative overflow-hidden">
    <!-- 顶部导航 -->
    <header class="w-full bg-white/60 backdrop-blur-md shadow">
      <div class="mx-auto max-w-screen-xl flex items-center justify-between px-6 py-4">
        <!-- Logo + 文案 -->
        <div class="flex items-center space-x-3">
          <!-- <img src="/logo.svg" class="h-10 w-10 rounded-lg object-contain shadow" alt="logo" /> -->
           <!--
          <span class="font-extrabold text-xl sm:text-2xl tracking-wider text-purple-800">
            潮玩手办星球
          </span>
          -->
        </div>

        <!-- 导航 -->
        <nav class="hidden md:flex space-x-8 font-medium text-purple-800">
          <a href="#trend" class="hover:text-pink-500 transition">潮玩趋势</a>
          <a href="#new" class="hover:text-pink-500 transition">新品速递</a>
          <a href="#community" class="hover:text-pink-500 transition">玩家社区</a>
          <a href="#about" class="hover:text-pink-500 transition">关于我们</a>
        </nav>
      </div>
    </header>

    <!-- Banner -->
    <section
      class="grid md:grid-cols-2 gap-10 items-center justify-items-center pt-16 md:pt-24 pb-12 max-w-screen-xl mx-auto px-6"
    >
      <!-- 文案 -->
      <div>
        <h1
          class="text-3xl md:text-5xl font-extrabold text-purple-900 mb-6 leading-tight"
        >
          打开潮玩
          <span class="text-pink-600 animate-gradient font-black">新宇宙</span>
        </h1>
        <p class="text-base md:text-lg text-purple-800 mb-8 leading-relaxed">
          全球潮玩手办首发平台，超多限量爆款，专为收藏玩家打造！
          <span
            class="inline-block text-pink-500 font-bold animate-pulse ml-1"
            >新品每日上新</span
          >
        </p>
        <el-button
          size="large"
          type="primary"
          class="bg-gradient-to-r from-pink-500 to-purple-500 border-0 shadow-lg"
          @click="scrollTo('#new')"
        >
          立即探索
        </el-button>
      </div>

      <!-- 主图 -->
      <div class="w-60 md:w-72 lg:w-80 xl:w-96">
        <img
          :src="mainToy.img"
          alt="潮玩手办"
          class="w-full h-auto rounded-2xl object-cover shadow-2xl"
        />
      </div>
    </section>

    <!-- 潮玩趋势（已去掉大图，改卡片式） -->
    <section id="trend" class="max-w-6xl mx-auto mt-8 mb-20 px-4">
      <h2
        class="text-2xl md:text-3xl font-extrabold text-center mb-10 text-purple-700 tracking-widest"
      >
        热门潮流趋势
      </h2>

      <div
        class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
      >
        <div
          v-for="item in trends"
          :key="item.title"
          class="group bg-white rounded-3xl shadow-lg hover:shadow-pink-300 transition overflow-hidden"
        >
          <img
            :src="item.img"
            alt="trend"
            class="h-48 w-full object-cover group-hover:scale-105 transition duration-300"
          />
          <div class="p-5 text-center">
            <h3
              class="text-lg font-bold text-purple-800 mb-2 group-hover:text-pink-600 transition"
            >
              {{ item.title }}
            </h3>
            <p class="text-gray-600 text-sm">{{ item.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 新品速递 -->
    <section id="new" class="max-w-5xl mx-auto mb-20 px-4">
      <h2
        class="text-2xl md:text-3xl font-extrabold text-center mb-8 text-pink-600 tracking-widest"
      >
        最新手办推荐
      </h2>
      <el-carousel
        :interval="3500"
        type="card"
        height="320px"
        class="rounded-2xl shadow-lg"
      >
        <el-carousel-item v-for="(toy, idx) in newToys" :key="idx">
          <div
            class="flex flex-col items-center justify-center h-full"
          >
            <img
              :src="toy.img"
              class="h-40 w-40 object-cover rounded-2xl shadow mb-3"
              :alt="toy.name"
              @error="imgError"
            />
            <div class="font-semibold text-purple-900 text-sm">
              {{ toy.name }}
            </div>
            <div class="text-xs text-gray-500">{{ toy.desc }}</div>
          </div>
        </el-carousel-item>
      </el-carousel>
    </section>

    <!-- 玩家社区 -->
    <section id="community" class="max-w-4xl mx-auto mb-20 px-4">
      <h2
        class="text-2xl md:text-3xl font-extrabold text-center mb-8 text-purple-700 tracking-widest"
      >
        玩家分享
      </h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-8">
        <div
          v-for="(com, idx) in community"
          :key="idx"
          class="bg-white rounded-2xl shadow p-6 flex flex-col items-center text-center"
        >
          <img
            :src="com.avatar"
            class="h-16 w-16 rounded-full border-2 border-pink-400 mb-3 object-cover"
            alt="avatar"
          />
          <div class="font-bold text-purple-900 text-base">
            {{ com.user }}
          </div>
          <div class="text-xs text-gray-400 mb-2">
            {{ com.time }}
          </div>
          <p class="text-gray-700 leading-relaxed text-sm">
            {{ com.text }}
          </p>
        </div>
      </div>
    </section>

    <!-- 关于我们 -->
    <section id="about" class="max-w-2xl mx-auto mb-16 text-center px-4">
      <h2 class="text-xl md:text-2xl font-bold mb-4 text-pink-700">
        关于潮玩手办星球
      </h2>
      <p class="text-gray-700 text-base md:text-lg">
        我们专注于潮流玩具与手办的策划、发行与收藏，是全球领先的潮玩聚集地。为每一位玩家、艺术家和品牌提供灵感交流与限量好物的平台。<br />
        <span class="inline-block text-purple-500 font-semibold mt-2"
          >加入我们，一起探索潮玩的无限可能！</span
        >
      </p>
    </section>

    <!-- 页脚 -->
    <footer
      class="py-6 bg-gradient-to-t from-pink-300/60 to-transparent text-center text-purple-800 font-bold text-base shadow-inner"
    >
      © 2024 潮玩手办星球 · 玩出新世界
    </footer>
  </div>
</template>

<script setup>
import { ref } from 'vue'

/* 一张主 Banner 图 */
const mainToy = ref({
  img: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=facearea&w=600&q=80'
})

/* 热门潮流趋势：卡片小图 */
const trends = [
  { img: 'https://picsum.photos/seed/trend1/600/400', title: '联名潮玩', desc: '品牌×设计师限量款' },
  { img: 'https://picsum.photos/seed/trend2/600/400', title: '发光动效', desc: '内置LED 夜光酷炫' },
  { img: 'https://picsum.photos/seed/trend3/600/400', title: '可动系列', desc: '多关节自由造型' }
]
/* 新品轮播 */
const newToys = [
  {
    img: 'https://images.unsplash.com/photo-1516632664305-eda5d6a1bb85?auto=format&w=400&q=80',
    name: '潮流熊猫·星际版',
    desc: '夜光星尘涂装'
  },
  {
    img: 'https://images.unsplash.com/photo-1465101162946-4377e57745c3?auto=format&w=400&q=80',
    name: '机甲小鹿',
    desc: '机械风可动关节'
  },
  {
    img: 'https://images.unsplash.com/photo-1482062364825-616fd23b8fc1?auto=format&w=400&q=80',
    name: '梦幻独角兽',
    desc: '渐变粉紫水晶底座'
  }
]

/* 玩家社区 */
const community = [
  {
    avatar: 'https://randomuser.me/api/portraits/men/34.jpg',
    user: '潮玩疯子',
    time: '2 小时前',
    text: '刚到手的星际熊猫，夜光模式太炸裂了！每一只都独一无二，收藏价值超高！'
  },
  {
    avatar: 'https://randomuser.me/api/portraits/women/29.jpg',
    user: '手办少女',
    time: '5 小时前',
    text: '机甲小鹿的关节真的是超顺滑，换造型完全不怕卡壳，强烈推荐！'
  }
]

function imgError(e) {
  e.target.src = 'https://placehold.co/400x400?text=No+Image'
}

function scrollTo(id) {
  document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })
}
</script>

<style scoped>
/* 渐变文字 */
.animate-gradient {
  background: linear-gradient(90deg, #ff7eb3, #765af7, #fad0c4 70%);
  background-size: 200% 200%;
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  animation: gradient-move 2.4s linear infinite;
}
@keyframes gradient-move {
  0% {
    background-position: 0% 70%;
  }
  50% {
    background-position: 100% 20%;
  }
  100% {
    background-position: 0% 70%;
  }
}
/* 卡片光晕动画（可选） */
@keyframes gradientGlow {
  0% {
    box-shadow: 0 0 25px 3px #fad0c4, 0 0 0 0 #765af7;
  }
  50% {
    box-shadow: 0 0 50px 12px #765af7, 0 0 0 0 #fad0c4;
  }
  100% {
    box-shadow: 0 0 25px 3px #fad0c4, 0 0 0 0 #765af7;
  }
}
.animate-gradientGlow {
  animation: gradientGlow 2.4s infinite alternate;
}
</style>