import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Moving Services by Location in Addis Ababa | Habesha Movers',
    description: 'Professional moving services across all neighborhoods in Addis Ababa. We serve Bole, Gurd Shola, Kazanchis, CMC, Gerji, Ayat, and more. Find movers near you!',
    keywords: [
        'movers in Addis Ababa',
        'moving services by location',
        'neighborhood movers',
        'local moving company',
        'movers near me',
        'Bole movers',
        'Gurd Shola moving services',
        'Kazanchis movers',
        'CMC moving company',
        'Gerji movers'
    ],
    openGraph: {
        title: 'Moving Services by Location | Habesha Movers',
        description: 'Professional moving services across all neighborhoods in Addis Ababa.',
        url: 'https://habeshamovers.com/locations',
        siteName: 'Habesha Movers',
        locale: 'en_ET',
        type: 'website',
    },
};

export default function LocationsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
