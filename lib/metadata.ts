import { Metadata } from 'next';

/**
 * Metadata generator utility
 * Ensures consistent SEO tags across the application
 */
export function createMetadata({
    title,
    description,
    image = '/og-image.png',
    path = '',
}: {
    title: string;
    description: string;
    image?: string;
    path?: string;
}): Metadata {
    const baseUrl = 'https://miracleokeke.com'; // TODO: Update with actual domain
    const url = `${baseUrl}${path}`;

    return {
        title: {
            default: title,
            template: `%s | Miracle Okeke`,
        },
        description,
        keywords: ['UI/UX Design', 'Portfolio', 'Frontend Development', 'Web Design', 'Next.js', 'React'],
        authors: [{ name: 'Miracle Okeke', url: baseUrl }],
        creator: 'Miracle Okeke',
        metadataBase: new URL(baseUrl),
        openGraph: {
            title,
            description,
            url,
            siteName: 'Miracle Okeke Portfolio',
            images: [
                {
                    url: image,
                    width: 1200,
                    height: 630,
                    alt: title,
                },
            ],
            locale: 'en_US',
            type: 'website',
        },
        twitter: {
            card: 'summary_large_image',
            title,
            description,
            images: [image],
            creator: '@miracleokeke', // TODO: Update with actual handle
        },
        alternates: {
            canonical: url,
        },
        robots: {
            index: true,
            follow: true,
            googleBot: {
                index: true,
                follow: true,
                'max-video-preview': -1,
                'max-image-preview': 'large',
                'max-snippet': -1,
            },
        },
        icons: {
            icon: '/favicon.ico',
            apple: '/apple-icon.png',
        },
    };
}
