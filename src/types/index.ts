export interface Report {
    id: string
    title: string
    subtitle?: string
    backgroundImageUrl?: string
    cta?: string
    theme?: string
    tag?: string
    datePublished?: string
    dateUpdated?: string
    path?: string
}

export interface ReportPreviewProps {
    report: Report
}

export interface HeroSectionProps {
    report: Report
}
