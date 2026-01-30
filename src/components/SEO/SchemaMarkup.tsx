export default function SchemaMarkup() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Habesha Movers",
        "image": "https://habeshamovers.com/logo.png",
        "@id": "https://habeshamovers.com",
        "url": "https://habeshamovers.com",
        "telephone": "+251911123456",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Bole",
            "addressLocality": "Addis Ababa",
            "postalCode": "1000",
            "addressCountry": "ET"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": 9.006,
            "longitude": 38.7188
        },
        "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday"
            ],
            "opens": "08:00",
            "closes": "18:00"
        },
        "serviceArea": {
            "@type": "AdministrativeArea",
            "name": "Addis Ababa"
        },
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Moving Services",
            "itemListElement": [
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "House Moving"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Office Relocation"
                    }
                }
            ]
        },
        "sameAs": [
            "https://www.instagram.com/habeshamovers",
            "https://t.me/Habeshamovers",
            "https://www.tiktok.com/@habeshamovers"
        ]
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}
