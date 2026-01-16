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
                "Friday"
            ],
            "opens": "08:00",
            "closes": "18:00"
        }
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}
