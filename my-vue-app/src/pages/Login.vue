<template>
  <div class="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-200 to-blue-100">
    <div class="w-full max-w-md bg-white/90 rounded-3xl shadow-2xl px-10 py-12 flex flex-col items-center">
      <img src="/logo.svg" alt="logo" class="w-16 h-16 rounded-xl mb-6 shadow" />
      <h2 class="text-2xl font-bold mb-8 text-blue-700 tracking-wide">企业后台登录</h2>
      <el-form :model="{ username, password }" class="w-full">
        <el-form-item>
          <el-input
            v-model="username"
            prefix-icon="i-ep-UserFilled"
            placeholder="请输入用户名"
            size="large"
            class="mb-2"
            autofocus
            clearable
          />
        </el-form-item>
        <el-form-item>
          <el-input
            v-model="password"
            prefix-icon="i-ep-Lock"
            show-password
            placeholder="请输入密码"
            size="large"
            class="mb-6"
            clearable
            @keydown.enter="login"
          />
        </el-form-item>
        <el-button
          type="primary"
          size="large"
          class="w-full"
          @click="login"
        >
          登录
        </el-button>
      </el-form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { setToken } from '../utils/auth'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import { getCurrentInstance } from 'vue'

const username = ref('')
const password = ref('')
const router = useRouter()

function login() {
  if (username.value && password.value) {
    setToken('mock-token')
    router.push('/')
  }
}

// 自动注册 Element Plus 所有图标
const app = getCurrentInstance()?.appContext.app
if (app) {
  for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(`i-ep-${key}`, component)
  }
}
</script>