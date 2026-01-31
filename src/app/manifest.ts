import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'Habesha Movers | Professional Moving Services in Addis Ababa',
        short_name: 'Habesha Movers',
        description: 'Habesha Movers offers professional house moving, office relocation, and packing services in Addis Ababa. Fast, reliable, and secure moving solutions for your needs.',
        start_url: '/',
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: '#8B3A2C',
        icons: [
            {
                src: '/favicon.png',
                sizes: '192x192',
                type: 'image/png',
                purpose: 'any',
            },
            {
                src: '/favicon.png',
                sizes: '512x512',
                type: 'image/png',
                purpose: 'maskable',
            },
        ],
    }
}
