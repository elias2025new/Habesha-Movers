"use client";

import { Package, Building2, Home } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';
import { useLanguage } from '@/components/LanguageContext';

export default function ServicesPage() {
    const { t } = useLanguage();

    const services = [
        {
            title: t('service.house'),
            description: t('service.houseDescLong'),
            icon: Home,
            href: '/services/house-moving',
            image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800',
        },
        {
            title: t('service.office'),
            description: t('service.officeDescLong'),
            icon: Building2,
            href: '/services/office-relocation',
            image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800',
        },
        {
            title: t('service.packing'),
            description: t('service.packingDescLong'),
            icon: Package,
            href: '/services/packing',
            image: 'https://images.unsplash.com/photo-1520038410233-7141be7e6f97?auto=format&fit=crop&q=80&w=800',
        },
    ];

    return (
        <div className="bg-background transition-colors dark:bg-[#121212]">
            {/* Hero Section */}
            <section className="bg-primary py-20 text-white transition-colors dark:bg-[#1C1C1C] dark:border-b dark:border-[#2A2A2A]">
                <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
                    <h1 className="text-4xl font-extrabold sm:text-5xl">{t('services.heroTitle')}</h1>
                    <p className="mt-4 text-xl text-white/80 max-w-2xl mx-auto dark:text-gray-300">
                        {t('services.heroSubtitle')}
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
                                    <div className="flex items-center space-x-3 text-primary mb-4 dark:text-[#F5A623]">
                                        <service.icon className="h-8 w-8" />
                                        <span className="text-sm font-bold uppercase tracking-wider">{t('services.serviceLabel')}</span>
                                    </div>
                                    <h2 className="text-3xl font-bold text-foreground mb-6 dark:text-white">{service.title}</h2>
                                    <p className="text-lg text-secondary-foreground opacity-90 mb-8 leading-relaxed dark:text-[#CFCFCF]">
                                        {service.description}
                                    </p>
                                    <ul className="space-y-4 mb-10 text-secondary-foreground dark:text-gray-400">
                                        <li className="flex items-center space-x-2">
                                            <div className="h-1.5 w-1.5 rounded-full bg-primary dark:bg-[#8B3A2C]" />
                                            <span>{t('services.feature1')}</span>
                                        </li>
                                        <li className="flex items-center space-x-2">
                                            <div className="h-1.5 w-1.5 rounded-full bg-primary dark:bg-[#8B3A2C]" />
                                            <span>{t('services.feature2')}</span>
                                        </li>
                                        <li className="flex items-center space-x-2">
                                            <div className="h-1.5 w-1.5 rounded-full bg-primary dark:bg-[#8B3A2C]" />
                                            <span>{t('services.feature3')}</span>
                                        </li>
                                    </ul>
                                    <Link href="/quote">
                                        <Button variant="primary" size="lg">{t('services.ctaButton')}</Button>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonial Preview or additional value prop */}
            <section className="bg-gray-50 py-24 transition-colors dark:bg-[#1C1C1C] border-t dark:border-[#2A2A2A]">
                <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold text-foreground mb-8 dark:text-white">{t('services.customTitle')}</h2>
                    <p className="text-lg text-secondary-foreground opacity-90 mb-10 max-w-2xl mx-auto dark:text-[#CFCFCF]">
                        {t('services.customSubtitle')}
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Link href="/contact">
                            <Button variant="outline" size="lg">{t('services.customCta1')}</Button>
                        </Link>
                        <Link href="/quote">
                            <Button variant="secondary" size="lg" className="bg-secondary text-white hover:bg-secondary/90 border-none">{t('services.customCta2')}</Button>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
