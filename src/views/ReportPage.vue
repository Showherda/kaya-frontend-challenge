<script setup lang="ts">
import { useRoute } from 'vue-router'
import { computed } from 'vue'
import HeroSection from '../components/HeroSection.vue'
import reports from '../assets/reports.json'
import type { Report } from '@/types'

const route = useRoute()
const report = computed(() => {
  const found = reports.find((r: Report) => r.id === route.params.id)
  console.log('ReportPage - Looking for ID:', route.params.id)
  console.log('ReportPage - Found report:', found)
  console.log('ReportPage - Available reports:', reports.map(r => r.id))
  return found
})
</script>

<template>
  <div v-if="report">
    <HeroSection :report="report" />
  </div>
  <div v-else class="p-6 text-center text-gray-500">
    <div class="text-lg font-medium">Report not found</div>
    <div class="text-sm mt-2">Looking for report ID: {{ route.params.id }}</div>
    <div class="text-xs mt-1">Available reports: {{ reports.map(r => r.id).join(', ') }}</div>
  </div>
</template>
