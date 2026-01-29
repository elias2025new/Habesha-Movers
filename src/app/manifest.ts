import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'Habesha Movers',
        short_name: 'Habesha',
        description: 'Reliable, fast, and secure house and office moving services in Addis Ababa, Ethiopia.',
        start_url: '/',
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: '#8B3A2C',
        icons: [
            {
                src: '/images/habesha-logo-svg.svg',
                sizes: '192x192',
                type: 'image/svg+xml',
            },
            {
                src: '/images/habesha-logo-svg.svg',
                sizes: '512x512',
                type: 'image/svg+xml',
            },
        ],
    }
}
