<script setup lang="ts">
import { computed } from 'vue'
import reportsData from '../assets/reports.json'
import ReportPreview from '../components/ReportPreview.vue'
import type { Report } from '@/types'

// Ensure type safety for the reports data
const reports = computed(() => reportsData as Report[])
</script>

<template>
  <div class="space-y-8">
    <!-- Header Section -->
    <div class="text-center flex flex-col items-center py-2">
      <h1 class="text-4xl font-bold text-gray-900 mb-4">Client Reports Dashboard</h1>
      <p class="text-xl text-gray-600 max-w-3xl mx-auto text-center">
        Access your latest performance insights, creative benchmarks, and predictive analytics
        to optimize your marketing campaigns across all channels.
      </p>
    </div>

    <!-- Reports Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <ReportPreview 
        v-for="report in reports" 
        :key="report.id" 
        :report="report" 
      />
    </div>

    <!-- Empty State (if no reports) -->
    <div v-if="reports.length === 0" class="text-center py-12">
      <div class="text-gray-400 text-lg">No reports available</div>
    </div>
  </div>
</template>
