<script setup lang="ts">
import { useRouter } from 'vue-router'
import type { Report } from '@/types'
import { formatDate, getCategoryClass, handleImageFallback } from '@/utils'
import { PLACEHOLDER_IMAGES, ROUTES } from '@/constants'

const props = defineProps<{ report: Report }>()
const router = useRouter()

function goToReport() {
  try {
    router.push(`${ROUTES.REPORT}/${props.report.id}`)
  } catch (error) {
    console.error('Navigation error:', error)
  }
}

function fallback(event: Event) {
  handleImageFallback(event, PLACEHOLDER_IMAGES.PREVIEW, 'Report image placeholder')
}
</script>

<template>
  <article
    @click="goToReport"
    @keydown.enter="goToReport"
    @keydown.space.prevent="goToReport"
    tabindex="0"
    role="button"
    :aria-label="`View ${report.title} report`"
    class="bg-white shadow-md rounded-lg overflow-hidden cursor-pointer hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
  >
    <!-- Image Container -->
    <div class="relative h-48 bg-white overflow-hidden">
      <img
        v-if="report.backgroundImageUrl"
        :src="report.backgroundImageUrl"
        @error="fallback"
        :alt="report.title"
        class="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
      />
      <div v-else class="w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
        <div class="text-white text-center">
          <svg class="w-12 h-12 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
          </svg>
          <span class="text-sm font-medium">Report</span>
        </div>
      </div>
    </div>

    <!-- Content -->
    <div class="p-5">
      <!-- Category/Tag -->
      <div class="flex items-center justify-between mb-3">
        <span 
          v-if="report.tag || report.theme" 
          class="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium"
          :class="getCategoryClass(report.tag || report.theme)"
        >
          {{ report.tag || report.theme }}
        </span>
        <span v-if="report.datePublished" class="text-xs text-gray-500">
          {{ formatDate(report.datePublished) }}
        </span>
      </div>

      <!-- Title -->
      <h3 class="font-bold text-lg text-gray-900 mb-2 line-clamp-2 leading-tight">
        {{ report.title }}
      </h3>

      <!-- Subtitle -->
      <p v-if="report.subtitle" class="text-sm text-gray-600 mb-4 line-clamp-2">
        {{ report.subtitle }}
      </p>

      <!-- CTA Badge -->
      <div v-if="report.cta" class="flex items-center text-blue-600 text-sm font-medium">
        <span>{{ report.cta }}</span>
        <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
        </svg>
      </div>
    </div>
  </article>
</template>
