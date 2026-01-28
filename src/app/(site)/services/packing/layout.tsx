import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Professional Packing Services Addis Ababa | Habesha Movers',
    description: 'Expert packing services for home and office moves in Addis Ababa. Using high-quality materials and white-glove handling for fragile items. Protect your belongings today!',
    keywords: [
        'packing services Addis Ababa',
        'professional packing Ethiopia',
        'moving supplies Addis Ababa',
        'fragile item packing',
        'white glove packing service',
        'packing and crating Ethiopia',
        'packing company Addis Ababa'
    ],
    openGraph: {
        title: 'Professional Packing Services | Habesha Movers',
        description: 'Expert packing services with high-quality materials and white-glove handling.',
        url: 'https://habeshamovers.com/services/packing',
        siteName: 'Habesha Movers',
        locale: 'en_ET',
        type: 'website',
    },
};

export default function PackingLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
