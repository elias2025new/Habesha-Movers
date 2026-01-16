import { Package, Building2, Home } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';

const services = [
    {
        title: 'House Moving',
        description: 'Relocating to a new home? Our team handles everything from packing to transport and unpacking at your new residence.',
        icon: Home,
        href: '/services/house-moving',
        image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800',
    },
    {
        title: 'Office Relocation',
        description: 'Minimize downtime for your business. We provide efficient office moving services, including furniture disassembly and equipment handling.',
        icon: Building2,
        href: '/services/office-relocation',
        image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800',
    },
    {
        title: 'Packing & Unpacking',
        description: 'Save time and ensure safety. We provide high-quality packing materials and professional packing services for all your belongings.',
        icon: Package,
        href: '/services/packing',
        image: 'https://images.unsplash.com/photo-1520038410233-7141be7e6f97?auto=format&fit=crop&q=80&w=800',
    },
];

export default function ServicesPage() {
    return (
        <div className="bg-background transition-colors">
            {/* Hero Section */}
            <section className="bg-blue-600 dark:bg-blue-700 py-20 text-white transition-colors">
                <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
                    <h1 className="text-4xl font-extrabold sm:text-5xl">Our Professional Services</h1>
                    <p className="mt-4 text-xl text-blue-100 max-w-2xl mx-auto">
                        Comprehensive moving solutions designed to make your transition smooth, safe, and efficient.
                    </p>
                </div>
            </section>

            {/* Services List */}
            <section className="py-24">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="space-y-24">
                        {services.map((service, index) => (
                            <div key={service.title} className={`flex flex-col lg:flex-row gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                                <div className="w-full lg:w-1/2">
                                    <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[16/9]">
                                        <Image src={service.image} alt={service.title} fill className="object-cover" />
                                    </div>
                                </div>
                                <div className="w-full lg:w-1/2">
                                    <div className="flex items-center space-x-3 text-blue-600 dark:text-blue-400 mb-4">
                                        <service.icon className="h-8 w-8" />
                                        <span className="text-sm font-bold uppercase tracking-wider">Service</span>
                                    </div>
                                    <h2 className="text-3xl font-bold text-foreground mb-6">{service.title}</h2>
                                    <p className="text-lg text-secondary-foreground opacity-90 mb-8 leading-relaxed">
                                        {service.description}
                                    </p>
                                    <ul className="space-y-4 mb-10 text-secondary-foreground">
                                        <li className="flex items-center space-x-2">
                                            <div className="h-1.5 w-1.5 rounded-full bg-blue-600 dark:bg-blue-400" />
                                            <span>Professional packing and handling</span>
                                        </li>
                                        <li className="flex items-center space-x-2">
                                            <div className="h-1.5 w-1.5 rounded-full bg-blue-600 dark:bg-blue-400" />
                                            <span>Secure transportation with modern trucks</span>
                                        </li>
                                        <li className="flex items-center space-x-2">
                                            <div className="h-1.5 w-1.5 rounded-full bg-blue-600 dark:bg-blue-400" />
                                            <span>Full insurance coverage options</span>
                                        </li>
                                    </ul>
                                    <Link href="/quote">
                                        <Button variant="primary" size="lg">Request Quote for this Service</Button>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonial Preview or additional value prop */}
            <section className="bg-gray-50 dark:bg-gray-900/50 py-24 transition-colors">
                <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold text-foreground mb-8">Need a Custom Solution?</h2>
                    <p className="text-lg text-secondary-foreground opacity-90 mb-10 max-w-2xl mx-auto">
                        We understand every move is unique. If you have special requirements, contact us and we&apos;ll create a tailored plan for you.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Link href="/contact">
                            <Button variant="outline" size="lg">Contact Us</Button>
                        </Link>
                        <Link href="/quote">
                            <Button variant="secondary" size="lg" className="dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100">Get a Custom Quote</Button>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
