import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Expert Office Relocation Services Addis Ababa | Habesha Movers',
    description: 'Professional corporate and office moving services in Addis Ababa. Minimal downtime, IT equipment handling, and expert planning for your business move. Free commercial quote!',
    keywords: [
        'office moving Addis Ababa',
        'corporate relocation Ethiopia',
        'commercial movers Addis Ababa',
        'business relocation services',
        'office movers Ethiopia',
        'IT equipment moving',
        'business moving company'
    ],
    openGraph: {
        title: 'Expert Office Relocation Services | Habesha Movers',
        description: 'Professional corporate and office moving services with minimal downtime.',
        url: 'https://habeshamovers.com/services/office-relocation',
        siteName: 'Habesha Movers',
        locale: 'en_ET',
        type: 'website',
    },
};

export default function OfficeRelocationLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
