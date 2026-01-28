import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'moving companies near me | moving companies near me Habesha Movers',
    description: 'Stress-free residential moving services in Addis Ababa. Professional packing, secure transport, and careful handling of your furniture. Get a free home moving quote!',
    keywords: [
        'house moving Addis Ababa',
        'residential movers Ethiopia',
        'home relocation services',
        'furniture movers Addis Ababa',
        'household moving company',
        'secure house moving',
        'best movers in Addis Ababa'
    ],
    openGraph: {
        title: 'Professional House Moving Services | Habesha Movers',
        description: 'Stress-free residential moving services in Addis Ababa. Professional packing and secure transport.',
        url: 'https://habeshamovers.com/services/house-moving',
        siteName: 'Habesha Movers',
        locale: 'en_ET',
        type: 'website',
    },
};

export default function HouseMovingLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
