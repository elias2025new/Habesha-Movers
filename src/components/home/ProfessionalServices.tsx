"use client";

import Image from 'next/image';
import { Home, Building2, Package, Globe, Car, Star } from 'lucide-react';
import Link from 'next/link';
import { useLanguage } from '../LanguageContext';

const ProfessionalServices = () => {
    const { t } = useLanguage();

    const services = [
        {
            title: t('service.house'),
            description: t('service.houseDescShort'),
            icon: Home,
            href: '/services/house-moving'
        },
        {
            title: t('service.office'),
            description: t('service.officeDescShort'),
            icon: Building2,
            href: '/services/office-relocation'
        },
        {
            title: t('service.packing'),
            description: t('service.packingDescShort'),
            icon: Package,
            href: '/services/packing'
        },
        {
            title: t('service.international'),
            description: t('service.internationalDesc'),
            icon: Globe,
            href: '/not-available'
        },
        {
            title: t('service.storage'),
            description: t('service.storageDesc'),
            icon: Package,
            href: '/not-available'
        },
        {
            title: t('service.car'),
            description: t('service.carDesc'),
            icon: Car,
            href: '/not-available'
        },
    ];

    return (
        <section className="py-24 bg-white dark:bg-[#121212] overflow-hidden transition-colors">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Left: Image with Rating Badge */}
                    <div className="relative flex justify-center lg:justify-start">
                        <div className="relative pt-12">
                            <div className="relative z-10 bg-white dark:hidden rounded-lg overflow-hidden">
                                <Image
                                    src="/images/habesha-mover-pure-white.png"
                                    alt="Professional Habesha Mover"
                                    width={800}
                                    height={900}
                                    className="w-full h-auto object-contain bg-white"
                                />
                            </div>
                            <Image
                                src="/images/habesha-mover-dark.png"
                                alt="Professional Habesha Mover Dark Mode"
                                width={800}
                                height={900}
                                className="w-full h-auto object-contain z-10 relative hidden dark:block"
                            />
                            {/* Dark mode overlay to blend image bottom */}
                            <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-transparent via-transparent to-transparent dark:from-[#121212] dark:to-transparent z-20 transition-colors duration-300" />
                            {/* Dark mode background glow */}
                            <div className="absolute inset-0 bg-[#8B3A2C] opacity-0 dark:opacity-20 blur-[100px] z-0 rounded-full scale-75 translate-y-10 transition-opacity duration-300" />

                            {/* Premium Rating Card - Top Aligned */}
                            <div className="absolute -top-6 left-6 right-6 lg:-top-10 lg:left-8 lg:right-8 bg-white/95 dark:bg-[#1C1C1C]/95 backdrop-blur-md rounded-2xl p-4 lg:p-6 shadow-[0_15px_40px_rgba(0,0,0,0.1)] flex items-center justify-between border border-gray-100 dark:border-white/5 z-30 group/card transition-all duration-300 hover:translate-y-1">
                                <div>
                                    <p className="text-[10px] lg:text-xs text-gray-400 uppercase tracking-wider font-bold dark:text-gray-500 mb-1">
                                        {t('house.stats.rating')}
                                    </p>
                                    <div className="flex items-center gap-2">
                                        <span className="text-xl lg:text-2xl font-black text-gray-900 dark:text-white">4.9/5</span>
                                        <div className="flex text-[#F5A623]">
                                            <Star className="w-3.5 h-3.5 lg:w-4 h-4 fill-current" />
                                            <Star className="w-3.5 h-3.5 lg:w-4 h-4 fill-current" />
                                            <Star className="w-3.5 h-3.5 lg:w-4 h-4 fill-current" />
                                            <Star className="w-3.5 h-3.5 lg:w-4 h-4 fill-current" />
                                            <Star className="w-3.5 h-3.5 lg:w-4 h-4 fill-current" />
                                        </div>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <p className="text-xl lg:text-3xl font-black text-[#8B3A2C] dark:text-[#F5A623]">300+</p>
                                    <p className="text-[10px] lg:text-xs text-gray-400 font-bold dark:text-gray-500">{t('house.stats.families')}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right: Content & Services Grid */}
                    <div className="space-y-12">
                        <div className="space-y-4">
                            <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white leading-tight">
                                {t('pro.title')}
                            </h2>
                            <p className="text-gray-600 dark:text-[#CFCFCF] leading-relaxed max-w-lg">
                                {t('pro.description')}
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10">
                            {services.map((service, index) => (
                                <Link
                                    href={service.href}
                                    key={index}
                                    className="group flex gap-4 hover:bg-gray-100 dark:hover:bg-[#1C1C1C] p-2 -ml-2 rounded-xl transition-colors"
                                >
                                    <div className="flex-shrink-0">
                                        <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center text-secondary group-hover:bg-primary group-hover:text-white transition-colors duration-300 dark:bg-[#F5A623]/10 dark:text-[#F5A623] dark:group-hover:bg-[#F5A623] dark:group-hover:text-black">
                                            <service.icon className="w-6 h-6" />
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors dark:text-white dark:group-hover:text-[#F5A623]">
                                            {service.title}
                                        </h3>
                                        <p className="text-sm text-gray-500 leading-relaxed dark:text-gray-400">
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
