// server component
import { Metadata } from 'next';
import ContactContent from './ContactContent';

export const metadata: Metadata = {
    title: 'Contact Habesha Movers - Professional Moving Company in Addis Ababa',
    description: 'Get a free quote for reliable moving services in Addis Ababa. Visit us in Gurd Shola or call us for home and office relocation.',
    keywords: 'moving company in Addis Ababa, professional movers in Ethiopia, Gurd Shola moving services, reliable relocation services Addis Ababa',
};

export default function ContactPage() {
    return <ContactContent />;
}
