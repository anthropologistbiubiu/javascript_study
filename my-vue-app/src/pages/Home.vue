<template>
  <div class="min-h-screen bg-gradient-to-tr from-blue-100 via-white to-blue-50">
    <el-container class="min-h-screen">
      <el-header height="64px" class="flex items-center justify-between bg-white/80 shadow-md px-10">
        <div class="flex items-center space-x-4">
          <img src="/logo.svg" alt="logo" class="h-10 w-10 rounded-lg shadow" />
          <span class="text-xl font-bold tracking-widest text-blue-600">My Enterprise</span>
        </div>
        <el-button type="danger" plain @click="logout">退出登录</el-button>
      </el-header>

      <el-main class="flex flex-col items-center justify-center py-24">
        <div class="w-full max-w-2xl bg-white rounded-2xl shadow-lg p-10">
          <h1 class="text-4xl font-extrabold text-blue-700 mb-6 text-center">欢迎来到企业官网</h1>
          <p class="text-gray-600 mb-8 text-center text-lg">
            这里可以介绍你的企业、产品、服务、团队等。<br>
            <span class="font-semibold text-blue-500">支持移动端自适应和深色模式！</span>
          </p>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div class="flex flex-col items-center">
              <el-icon class="mb-2" size="36"><i-ep-HomeFilled /></el-icon>
              <div class="font-semibold text-blue-600 mb-1">关于我们</div>
              <div class="text-sm text-gray-500">公司使命、愿景和发展历程介绍。</div>
            </div>
            <div class="flex flex-col items-center">
              <el-icon class="mb-2" size="36"><i-ep-OfficeBuilding /></el-icon>
              <div class="font-semibold text-blue-600 mb-1">核心业务</div>
              <div class="text-sm text-gray-500">主打产品、行业解决方案、创新服务。</div>
            </div>
            <div class="flex flex-col items-center">
              <el-icon class="mb-2" size="36"><i-ep-UserFilled /></el-icon>
              <div class="font-semibold text-blue-600 mb-1">精英团队</div>
              <div class="text-sm text-gray-500">优秀的管理与技术团队介绍。</div>
            </div>
            <div class="flex flex-col items-center">
              <el-icon class="mb-2" size="36"><i-ep-Phone /></el-icon>
              <div class="font-semibold text-blue-600 mb-1">联系我们</div>
              <div class="text-sm text-gray-500">欢迎合作，电话、邮箱、地址一应俱全。</div>
            </div>
          </div>
        </div>
      </el-main>
    </el-container>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { removeToken } from '../utils/auth'

// Element Plus 图标注册（Vite 4+ 可用自动引入，如果不支持请在 main.js 手动全局引入所有图标）
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import { getCurrentInstance, onMounted } from 'vue'

const router = useRouter()
function logout() {
  removeToken()
  router.push('/login')
}

// 自动注册 Element Plus 所有图标（vite 支持按需自动引入也可手动全局引入）
const app = getCurrentInstance()?.appContext.app
if (app) {
  for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(`i-ep-${key}`, component)
  }
}
</script>