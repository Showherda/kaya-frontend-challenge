# Kaya Reports Dashboard

A Vue 3 application showcasing client reports with a clean, responsive interface. This project demonstrates building a production-ready reporting interface that handles real-world data inconsistencies gracefully.

## 🚀 Setup Instructions

### Prerequisites
- Node.js (v16 or higher)
- Bun (recommended) or npm/yarn

### Installation
```bash
# Clone the repository
git clone <your-repo-url>
cd kaya-frontend-challenge

# Install dependencies
bun install
# or
npm install

# Start development server
bun dev
# or
npm run dev

# Build for production
bun build
# or
npm run build
```

## 🏗️ Architecture Overview

### Component Structure
```
src/
├── components/
│   ├── HeroSection.vue      # Reusable hero component for report pages
│   └── ReportPreview.vue    # Preview cards for overview page
├── views/
│   ├── OverviewPage.vue     # Main dashboard with report grid
│   └── ReportPage.vue       # Individual report detail view
├── router/
│   └── index.ts            # Vue Router configuration
└── assets/
    ├── reports.json        # Report data source
    ├── main.css           # Tailwind imports & custom utilities
    └── base.css           # CSS custom properties & base styles
```

## 🎨 Design Decisions

### Data Resilience
- **Graceful degradation**: Components handle missing fields without breaking
- **Fallback images**: Placeholder images for broken/missing images
- **Date handling**: Robust date parsing for inconsistent formats
- **Safe rendering**: Conditional rendering prevents errors from missing data

### Styling Approach
- **Tailwind CSS v4**: Modern utility-first approach
- **Responsive design**: Mobile-first responsive grid layouts
- **Custom utilities**: Added line-clamp utilities for text truncation
- **Color-coded categories**: Dynamic category badges with semantic colors

### User Experience
- **Smooth transitions**: Page transitions and hover effects
- **Interactive elements**: Hover states and micro-interactions
- **Clear hierarchy**: Typography scale and spacing for readability
- **Loading states**: Placeholder content while images load

### Code Quality
- **TypeScript**: Full type safety with proper interfaces
- **Composition API**: Modern Vue 3 patterns
- **Separation of concerns**: Clear component responsibilities
- **Reusable components**: HeroSection designed for multiple report types

## 🔧 Technical Implementation

### Routing Strategy
- **Client-side routing**: Vue Router for smooth navigation
- **Dynamic routes**: `/report/:id` pattern for individual reports
- **Props passing**: Route params converted to component props

### Data Flow
```
reports.json → OverviewPage → ReportPreview → Router → ReportPage → HeroSection
```

### Error Handling
- Image fallbacks for broken URLs
- Date parsing with fallback to original string
- Conditional rendering for optional fields
- TypeScript interfaces prevent runtime errors

## 📱 Responsive Features

- **Grid layouts**: Responsive grid from 1-3 columns based on screen size
- **Typography scaling**: Responsive text sizes for different viewports
- **Touch-friendly**: Proper tap targets and spacing for mobile
- **Image optimization**: Object-fit for consistent aspect ratios

## 🚧 Tradeoffs & Limitations

### Time Constraints
- **Basic routing**: Didn't implement modal overlay for report details
- **No state management**: Used direct JSON import instead of Vuex/Pinia
- **Limited animations**: Could add more sophisticated page transitions
- **No search/filter**: Overview page doesn't include report filtering

### Scope Decisions
- **Static data**: Reports loaded from JSON file vs. API integration
- **No authentication**: Assumed public dashboard access
- **Basic error handling**: Could implement global error boundaries
- **No testing**: Would add unit/integration tests in production

## 🔮 Future Improvements

### With More Time
1. **API Integration**: Replace JSON with REST/GraphQL endpoints
2. **Advanced Filtering**: Category, date, and text-based filtering
3. **Search Functionality**: Full-text search across report content
4. **Modal Views**: Overlay report details instead of full page navigation
5. **State Management**: Implement Pinia for better data flow
6. **Testing Suite**: Unit tests with Vitest, E2E with Playwright
7. **Performance**: Implement virtual scrolling for large datasets
8. **Accessibility**: Full WCAG compliance and screen reader support
9. **PWA Features**: Offline support and push notifications
10. **Analytics**: Track user interactions and report popularity

### Production Considerations
- **Error tracking**: Sentry or similar error monitoring
- **Performance monitoring**: Web vitals tracking
- **Content Security Policy**: XSS protection
- **Image optimization**: WebP format with fallbacks
- **Bundle optimization**: Code splitting and lazy loading
- **SEO optimization**: Meta tags and structured data

## 📊 Data Structure

The application handles the following report data structure:

```typescript
interface Report {
  id: string                    // Required: Unique identifier
  title: string                 // Required: Report title
  subtitle?: string             // Optional: Report description
  backgroundImageUrl?: string   // Optional: Hero image URL
  cta?: string                 // Optional: Call-to-action text
  theme?: string               // Optional: Report theme
  tag?: string                 // Optional: Category tag
  datePublished?: string       // Optional: Publication date
  dateUpdated?: string         // Optional: Last update date
  path?: string                // Optional: Custom route path
}
```

## 🎯 Success Metrics

✅ **Resilient Layout**: All reports render correctly despite data inconsistencies  
✅ **Reusable Components**: HeroSection accepts different report types via props  
✅ **Error Handling**: Broken images and missing fields handled gracefully  
✅ **Clean Architecture**: Readable, maintainable, and clearly separated code  
✅ **Responsive Design**: Works across mobile, tablet, and desktop viewports  
✅ **Modern Stack**: Vue 3 Composition API with TypeScript and Tailwind CSS v4

---

Built with ❤️ using Vue 3, TypeScript, and Tailwind CSS v4
