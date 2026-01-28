import { Metadata } from 'next';
import HomePage from './HomePage';

export const metadata: Metadata = {
  title: 'Habesha Movers | movers in addis abeba',
  description: 'Trusted moving company in Addis Ababa offering house moving, office relocation, and packing services. Fast, reliable, and secure. Get your free quote today!',
  keywords: [
    'moving company Addis Ababa',
    'house movers Ethiopia',
    'office relocation Addis Ababa',
    'professional movers Ethiopia',
    'reliable moving services',
    'furniture movers',
    'packing services Addis Ababa',
    'Habesha Movers'
  ],
  openGraph: {
    title: 'Habesha Movers | Professional Moving Services in Addis Ababa',
    description: 'Trusted moving company in Addis Ababa offering house moving, office relocation, and packing services.',
    url: 'https://habeshamovers.com',
    siteName: 'Habesha Movers',
    locale: 'en_ET',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Habesha Movers | Professional Moving Services',
    description: 'Trusted moving company in Addis Ababa. Fast, reliable, and secure moving services.',
  },
};

export default function Page() {
  return <HomePage />;
}
