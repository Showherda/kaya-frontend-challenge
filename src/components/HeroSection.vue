<script setup lang="ts">
import type { Report } from '@/types'
import { formatDate, handleImageFallback } from '@/utils'
import { PLACEHOLDER_IMAGES } from '@/constants'

const props = defineProps<{ report: Report }>()

function fallback(event: Event) {
  handleImageFallback(event, PLACEHOLDER_IMAGES.HERO, 'Report hero image placeholder')
}
</script>

<template>
  <section class="relative w-screen min-h-[80vh] flex flex-col justify-center overflow-hidden">
    <!-- Background Image (full width) -->
    <img
      :src="props.report.backgroundImageUrl || PLACEHOLDER_IMAGES.HERO"
      @error="fallback"
      :alt="`Background image for ${props.report.title}`"
      class="absolute inset-0 w-full h-full object-cover select-none pointer-events-none"
      draggable="false"
    />

    <!-- Gradient & Dark Overlay -->
    <div class="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70"></div>

    <!-- Centered Content Overlay -->
    <div class="relative z-10 flex items-center justify-center h-full px-4 md:px-8">
      <div class="text-center w-full max-w-2xl md:max-w-3xl mx-auto bg-white/10 backdrop-blur-md rounded-2xl p-8 md:p-12 shadow-xl border border-white/20">
        <span
          v-if="props.report.theme || props.report.tag"
          class="inline-block bg-blue-600/90 text-white text-xs md:text-sm font-semibold px-4 py-1 rounded-full mb-6 tracking-wide shadow"
        >
          {{ props.report.theme || props.report.tag }}
        </span>

        <h1 class="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4 leading-tight drop-shadow-lg">
          {{ props.report.title }}
        </h1>

        <p v-if="props.report.subtitle" class="text-lg md:text-2xl text-gray-100 mb-6 font-medium">
          {{ props.report.subtitle }}
        </p>

        <div class="flex flex-wrap justify-center gap-4 text-gray-200 text-xs md:text-sm" id="report-metadata">
          <span v-if="props.report.datePublished" class="bg-black/30 rounded px-3 py-1">
            <svg class="inline w-4 h-4 mr-1 -mt-1 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>
            Published: {{ formatDate(props.report.datePublished, 'long') }}
          </span>
          <span v-if="props.report.dateUpdated" class="bg-black/30 rounded px-3 py-1">
            <svg class="inline w-4 h-4 mr-1 -mt-1 text-green-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
            Updated: {{ formatDate(props.report.dateUpdated, 'long') }}
          </span>
        </div>

        <button
          v-if="props.report.cta"
          class="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-semibold text-lg px-8 py-3 rounded-lg shadow-lg transition group"
        >
          {{ props.report.cta }}
          <svg class="w-5 h-5 ml-2 transition-transform duration-200 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
          </svg>
        </button>
      </div>
    </div>
  </section>
</template>

<style scoped>
#report-metadata {
  margin-block: 2vh;
}
</style>