import React from 'react';
import { notFound } from 'next/navigation';
import { LOCATIONS_DATA } from '@/constants/locationsData';
import LocationClient from './LocationClient';

export async function generateStaticParams() {
    return LOCATIONS_DATA.map((loc) => ({
        slug: loc.slug,
    }));
}

export default async function LocationDetailPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const location = LOCATIONS_DATA.find((l) => l.slug === slug);

    if (!location) {
        notFound();
    }

    return <LocationClient location={location} />;
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const location = LOCATIONS_DATA.find((l) => l.slug === slug);

    if (!location) {
        return {
            title: 'Location Not Found',
        };
    }

    return {
        title: `moving companies near ${location.name}, Addis Ababa`,
        description: `Reliable and secure house and office moving services in ${location.name}, Addis Ababa. Trusted near ${location.landmarks[0]} and across ${location.subCity}. Get a free quote!`,
        keywords: [
            `moving company ${location.name}`,
            `movers in ${location.name}`,
            `house moving ${location.name}`,
            `office relocation ${location.name}`,
            `Addis Ababa movers`,
            `Habesha Movers ${location.name}`
        ],
    };
}
