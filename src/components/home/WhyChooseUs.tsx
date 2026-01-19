"use client";

import Image from 'next/image';
import { Shield, DollarSign, Settings2, Clock, CalendarDays, Star } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

const WhyChooseUs = () => {
    const { t } = useLanguage();

    const benefits = [
        {
            title: t('why.benefit1'),
            description: t('why.benefit1Desc'),
            icon: Shield,
            color: "bg-[#8B3A2C]", // Primary Brand
        },
        {
            title: t('why.benefit2'),
            description: t('why.benefit2Desc'),
            icon: DollarSign,
            color: "bg-[#F5A623]", // Accent Gold
        },
        {
            title: t('why.benefit3'),
            description: t('why.benefit3Desc'),
            icon: Settings2,
            color: "bg-[#8B3A2C]",
        },
        {
            title: t('why.benefit4'),
            description: t('why.benefit4Desc'),
            icon: Clock,
            color: "bg-[#F5A623]",
        },
    ];

    return (
        <section className="py-24 bg-gray-50 dark:bg-[#121212] transition-colors overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">

                {/* 1. Header Section - Centered */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-6 leading-tight">
                        {t('why.title')}
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-[#CFCFCF] leading-relaxed">
                        {t('why.description')}
                    </p>
                </div>

                {/* 2. Benefits Grid - 4 Columns */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
                    {benefits.map((benefit, index) => (
                        <div key={index} className="bg-white dark:bg-[#1C1C1C] p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 group border border-gray-100 dark:border-[#2A2A2A]">
                            <div className={`w-14 h-14 rounded-full ${benefit.color} flex items-center justify-center mb-6 text-white shadow-lg group-hover:scale-110 transition-transform`}>
                                <benefit.icon className="w-7 h-7" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                                {benefit.title}
                            </h3>
                            <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
                                {benefit.description}
                            </p>
                            {/* Decorative Code/Date like in mockup */}
                            <div className="mt-6 pt-6 border-t border-gray-100 dark:border-[#2A2A2A] flex items-center text-xs font-semibold text-gray-400 dark:text-gray-600 uppercase tracking-wider">
                                <CalendarDays className="w-4 h-4 mr-2" />
                                {t('why.available247')}
                            </div>
                        </div>
                    ))}
                </div>

                {/* 3. Bottom Image Section */}
                <div className="relative rounded-[3rem] overflow-hidden h-[400px] md:h-[500px] shadow-2xl">
                    <div className="absolute inset-0 bg-black/20 z-10" /> {/* Overlay */}
                    <Image
                        src="/images/habesha-truck-real.jpg"
                        alt="Zemen Movers Truck"
                        fill
                        className="object-cover"
                    />

                    {/* Centered Floating Badge */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                        <div className="w-48 h-48 md:w-56 md:h-56 rounded-full bg-white dark:bg-[#1C1C1C] border-8 border-white/30 dark:border-white/10 backdrop-blur-sm flex flex-col items-center justify-center shadow-[0_20px_50px_rgba(0,0,0,0.3)] text-center p-4">
                            <span className="text-6xl md:text-7xl font-extrabold text-[#8B3A2C] dark:text-[#F5A623] leading-none mb-2">
                                {t('why.experienceValue')}
                            </span>
                            <div className="bg-[#F5A623] text-white text-xs md:text-sm font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                                {t('why.experienceLabel1')} {t('why.experienceLabel2')}
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default WhyChooseUs;
