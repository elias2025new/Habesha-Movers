import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'About Habesha Movers | top packing and moving in ethiopia',
    description: 'Learn about Habesha Movers, Addis Ababa\'s trusted moving company. Professional, reliable, and experienced movers serving Ethiopia since years. Our mission is your seamless move.',
    keywords: [
        'professional moving company Ethiopia',
        'trusted movers Addis Ababa',
        'experienced movers',
        'licensed moving company',
        'reliable relocation services',
        'about Habesha Movers',
        'moving company history',
        'Ethiopian movers'
    ],
    openGraph: {
        title: 'About Habesha Movers | Trusted Moving Company',
        description: 'Professional, reliable, and experienced movers serving Addis Ababa and Ethiopia.',
        url: 'https://habeshamovers.com/about',
        siteName: 'Habesha Movers',
        locale: 'en_ET',
        type: 'website',
    },
};

export default function AboutLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
