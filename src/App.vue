<template>
  <div id="app" class="min-h-screen bg-gray-50 text-gray-900 flex flex-col justify-between">
    <header class="bg-white shadow-md">
      <div class="mx-auto px-4 py-4">
        <router-link to="/" class="flex items-center gap-3 text-2xl font-semibold">
          <img src="@/assets/logo.webp" alt="Kaya Logo" class="h-6 w-23" />
          Kaya Reports Dashboard
        </router-link>
      </div>
    </header>

    <main class="mx-auto mb-auto px-4 flex flex-col justify-center items-center">
      <router-view v-slot="{ Component, route }">
        <transition name="fade" mode="out-in">
          <component :is="Component" :key="route.fullPath" />
        </transition>
      </router-view>
    </main>

    <footer class="bg-white shadow-inner py-4">
      <div class="mx-auto px-4 text-center text-sm text-gray-500">
        Built with ❤️ using Vue 3 & Tailwind v4
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { RouterView, RouterLink } from 'vue-router'
</script>

<style>
/* Simple fade transition */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
