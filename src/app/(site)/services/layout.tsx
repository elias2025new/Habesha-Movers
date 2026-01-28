import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Moving Services in Addis Ababa| moving company addis ababa',
    description: 'Professional moving services in Addis Ababa: residential moving, office relocation, packing services, and more. Experienced movers with modern equipment. Get a free quote!',
    keywords: [
        'moving services Addis Ababa',
        'house moving Ethiopia',
        'office relocation services',
        'packing services Addis Ababa',
        'residential movers',
        'commercial moving',
        'furniture moving services',
        'professional packing',
        'office movers Ethiopia'
    ],
    openGraph: {
        title: 'Moving Services in Addis Ababa | Habesha Movers',
        description: 'Professional moving services: residential, commercial, packing, and more. Trusted movers in Addis Ababa.',
        url: 'https://habeshamovers.com/services',
        siteName: 'Habesha Movers',
        locale: 'en_ET',
        type: 'website',
    },
};

export default function ServicesLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
