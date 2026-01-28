import React from 'react';

const StructuredData = () => {
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'LocalBusiness',
        'name': 'Habesha Movers',
        'image': 'https://habeshamovers.com/images/habesha-logo-svg.svg',
        '@id': 'https://habeshamovers.com',
        'url': 'https://habeshamovers.com',
        'telephone': '0999220000',
        'address': {
            '@type': 'PostalAddress',
            'streetAddress': 'Gurd Shola',
            'addressLocality': 'Addis Ababa',
            'addressCountry': 'ET'
        },
        'geo': {
            '@type': 'GeoCoordinates',
            'latitude': 9.0192,
            'longitude': 38.8021
        },
        'openingHoursSpecification': {
            '@type': 'OpeningHoursSpecification',
            'dayOfWeek': [
                'Monday',
                'Tuesday',
                'Wednesday',
                'Thursday',
                'Friday',
                'Saturday',
                'Sunday'
            ],
            'opens': '00:00',
            'closes': '23:59'
        },
        'sameAs': [
            'https://www.instagram.com/habeshamovers',
            'https://t.me/Habeshamovers',
            'https://www.tiktok.com/@habeshamovers'
        ],
        'priceRange': '$$',
        'description': 'Reliable, fast, and secure house and office moving services in Addis Ababa, Ethiopia.'
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
    );
};

export default StructuredData;
