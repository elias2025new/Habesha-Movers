"use client";

import Image from 'next/image';
import { Home, Building2, Package, Globe, Car } from 'lucide-react';
import Link from 'next/link';
import { useLanguage } from '../LanguageContext';

const ProfessionalServices = () => {
    const { t } = useLanguage();

    const services = [
        {
            title: t('service.house'),
            description: t('service.houseDesc'),
            icon: Home,
            href: '/services/house-moving'
        },
        {
            title: t('service.office'),
            description: t('service.officeDesc'),
            icon: Building2,
            href: '/services/office-relocation'
        },
        {
            title: t('service.packing'),
            description: t('service.packingDesc'),
            icon: Package,
            href: '/services/packing'
        },
        {
            title: t('service.international'),
            description: t('service.internationalDesc'),
            icon: Globe,
            href: '/services/international'
        },
        {
            title: t('service.storage'),
            description: t('service.storageDesc'),
            icon: Package,
            href: '/services/storage'
        },
        {
            title: t('service.car'),
            description: t('service.carDesc'),
            icon: Car,
            href: '/services/car-transport'
        },
    ];

    return (
        <section className="py-24 bg-white dark:bg-gray-900 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Left: Image with Rating Badge */}
                    <div className="relative flex justify-center lg:justify-start">
                        <div className="relative pt-12">
                            <Image
                                src="/images/habesha-mover-final.png"
                                alt="Professional Habesha Mover"
                                width={800}
                                height={900}
                                className="w-full h-auto object-contain z-10 relative"
                            />

                            {/* Badge removed as per user request */}
                        </div>
                    </div>

                    {/* Right: Content & Services Grid */}
                    <div className="space-y-12">
                        <div className="space-y-4">
                            <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white leading-tight">
                                {t('pro.title')}
                            </h2>
                            <p className="text-gray-600 dark:text-gray-300 leading-relaxed max-w-lg">
                                {t('pro.description')}
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10">
                            {services.map((service, index) => (
                                <Link
                                    href={service.href}
                                    key={index}
                                    className="group flex gap-4 hover:bg-gray-100 dark:hover:bg-gray-800/50 p-2 -ml-2 rounded-xl transition-colors"
                                >
                                    <div className="flex-shrink-0">
                                        <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center text-secondary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                                            <service.icon className="w-6 h-6" />
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2 group-hover:text-primary transition-colors">
                                            {service.title}
                                        </h3>
                                        <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                                            {service.description}
                                        </p>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default ProfessionalServices;
