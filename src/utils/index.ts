import { DATE_FORMATS, CATEGORY_COLORS } from '@/constants'

/**
 * Formats a date string into a human-readable format
 * Handles various input formats and provides fallback
 */
export function formatDate(
    dateString: string,
    format: 'long' | 'short' = 'short'
): string {
    try {
        // Handle different date formats in the data (DD/MM/YYYY -> YYYY-MM-DD)
        const normalizedDate = dateString.replace(/(\d{2})\/(\d{2})\/(\d{4})/, '$3-$2-$1')
        const date = new Date(normalizedDate)

        if (isNaN(date.getTime())) {
            return dateString // Return original if parsing fails
        }

        const formatOptions = format === 'long' ? DATE_FORMATS.LONG : DATE_FORMATS.SHORT
        return date.toLocaleDateString('en-US', formatOptions)
    } catch {
        return dateString // Return original if parsing fails
    }
}

/**
 * Gets the appropriate CSS class for a report category
 * Provides consistent color coding across the application
 */
export function getCategoryClass(category?: string): string {
    if (!category) return CATEGORY_COLORS.Default

    return CATEGORY_COLORS[category as keyof typeof CATEGORY_COLORS] || CATEGORY_COLORS.Default
}

/**
 * Handles image fallback with proper error handling and accessibility
 */
export function handleImageFallback(
    event: Event,
    fallbackSrc: string,
    fallbackAlt: string = 'Placeholder image'
): void {
    const target = event.target as HTMLImageElement
    target.src = fallbackSrc
    target.alt = fallbackAlt
}

/**
 * Validates if a string is a valid URL
 */
export function isValidUrl(string: string): boolean {
    try {
        new URL(string)
        return true
    } catch {
        return false
    }
}
