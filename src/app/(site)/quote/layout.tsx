import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'movers in addis ababa price',
    description: 'Request a free, no-obligation moving quote from Habesha Movers. Fast response, transparent pricing, and professional service. Get your instant quote today!',
    keywords: [
        'free moving quote',
        'moving estimate Addis Ababa',
        'get quote moving services',
        'free moving estimate Ethiopia',
        'moving cost calculator',
        'request moving quote',
        'instant moving quote',
        'moving price estimate'
    ],
    openGraph: {
        title: 'Get a Free Moving Quote | Habesha Movers',
        description: 'Request a free, no-obligation moving quote. Fast response and transparent pricing.',
        url: 'https://habeshamovers.com/quote',
        siteName: 'Habesha Movers',
        locale: 'en_ET',
        type: 'website',
    },
};

export default function QuoteLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
