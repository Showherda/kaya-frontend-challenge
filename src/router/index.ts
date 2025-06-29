import { createRouter, createWebHistory } from 'vue-router'
import OverviewPage from '@/views/OverviewPage.vue'
import ReportPage from '@/views/ReportPage.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'Overview', component: OverviewPage },
    { path: '/report/:id', name: 'Report', component: ReportPage, props: true },
  ],
})

export default router
