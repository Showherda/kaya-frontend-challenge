// API and external service constants
export const PLACEHOLDER_IMAGES = {
    HERO: 'https://placehold.co/1200x600/1f2937/ffffff?text=Report+Hero+Image',
    PREVIEW: 'https://placehold.co/800x400/e5e7eb/6b7280?text=Report+Image'
} as const

// Category color mapping for consistent theming
export const CATEGORY_COLORS = {
    'Performance Overview': 'bg-blue-100 text-blue-800',
    'Channel Insights': 'bg-green-100 text-green-800',
    'Competitor Intelligence': 'bg-purple-100 text-purple-800',
    'Creative Benchmarking': 'bg-orange-100 text-orange-800',
    'Efficiency Trends': 'bg-cyan-100 text-cyan-800',
    'Audience Segments': 'bg-pink-100 text-pink-800',
    'Predictive Insights': 'bg-indigo-100 text-indigo-800',
    'Creative Hook': 'bg-yellow-100 text-yellow-800',
    'Performance Index': 'bg-red-100 text-red-800',
    'Default': 'bg-gray-100 text-gray-800'
} as const

// Date format configurations
export const DATE_FORMATS = {
    LONG: { month: 'long', day: 'numeric', year: 'numeric' } as const,
    SHORT: { month: 'short', day: 'numeric', year: 'numeric' } as const
} as const

// Route paths
export const ROUTES = {
    HOME: '/',
    REPORT: '/report'
} as const
