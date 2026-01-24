"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { MapPin, ArrowRight, ChevronRight, Building2, Home } from 'lucide-react';
import { useLanguage } from '@/components/LanguageContext';
import { LOCATIONS_DATA } from '@/constants/locationsData';
import ScrollReveal from '@/components/ui/ScrollReveal';

export default function LocationsPage() {
    const { t, language } = useLanguage();

    return (
        <div className="bg-white dark:bg-[#121212] min-h-screen transition-colors duration-300">
            {/* Hero Section */}
            <section className="relative py-20 overflow-hidden min-h-[50vh] flex items-center justify-center">
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/images/locations.jpg"
                        alt="Locations We Serve in Addis Ababa"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-black/60 dark:bg-black/70 z-10" />
                </div>

                <div className="max-w-7xl mx-auto px-6 relative z-20 text-center text-white">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="px-4 py-1.5 rounded-full bg-[#f5a623] text-black font-bold text-sm tracking-wide uppercase mb-6 inline-block">
                            {t('locations.hero.badge')}
                        </span>
                        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
                            {t('locations.hero.title1')} <br />
                            <span className="text-[#F5A623]">{t('locations.hero.title2')}</span>
                        </h1>
                        <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto font-light leading-relaxed">
                            {t('locations.hero.description')}
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Locations Grid */}
            <section className="py-24 max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {LOCATIONS_DATA.map((loc, idx) => {
                        const isAmharic = language === 'am';
                        const displayName = isAmharic ? loc.nameAm : loc.name;
                        const displaySubCity = isAmharic ? loc.subCityAm : loc.subCity;
                        const displayDescription = isAmharic ? loc.descriptionAm : loc.description;

                        return (
                            <ScrollReveal key={loc.slug} animation="fade-up" delay={idx * 0.05}>
                                <Link href={`/locations/${loc.slug}`} className="group">
                                    <div className="h-full bg-gray-50 dark:bg-[#1C1C1C] rounded-[2rem] overflow-hidden border border-gray-100 dark:border-white/5 hover:border-[#F5A623]/30 dark:hover:border-[#F5A623]/30 transition-all duration-500 shadow-sm hover:shadow-xl hover:-translate-y-2 flex flex-col">
                                        <div className="relative h-48 w-full overflow-hidden">
                                            <img
                                                src={loc.image || "/images/house-moving-hero.png"}
                                                alt={displayName}
                                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                            <div className="absolute bottom-4 left-6">
                                                <span className="text-xs font-bold text-[#F5A623] uppercase tracking-widest bg-black/40 backdrop-blur-md px-3 py-1 rounded-full">
                                                    {displaySubCity}
                                                </span>
                                            </div>
                                        </div>

                                        <div className="p-8 flex flex-col flex-grow">
                                            <div className="flex items-center justify-between mb-4">
                                                <div className="w-10 h-10 rounded-xl bg-[#8B3A2C]/10 dark:bg-[#F5A623]/10 flex items-center justify-center text-[#8B3A2C] dark:text-[#F5A623]">
                                                    <MapPin className="w-5 h-5" />
                                                </div>
                                            </div>

                                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-[#8B3A2C] dark:group-hover:text-[#F5A623] transition-colors">
                                                {t('locations.card.movingIn')} {displayName}
                                            </h2>

                                            <p className="text-gray-600 dark:text-gray-400 mb-8 line-clamp-3 leading-relaxed flex-grow">
                                                {displayDescription}
                                            </p>

                                            <div className="flex items-center gap-2 text-[#8B3A2C] dark:text-[#F5A623] font-bold group-hover:gap-4 transition-all">
                                                {t('locations.card.viewDetails')} <ChevronRight className="w-5 h-5" />
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </ScrollReveal>
                        );
                    })}
                </div>
            </section>

            {/* City-wide CTA */}
            <section className="py-24 bg-gray-50 dark:bg-[#1C1C1C] transition-colors">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-8">
                        {t('locations.cta.title')}
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-400 mb-12">
                        {t('locations.cta.description')}
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-6">
                        <Link href="/quote" className="inline-block">
                            <button className="w-full sm:w-auto bg-[#8B3A2C] hover:bg-[#702e23] text-white px-10 py-5 rounded-2xl text-xl font-bold shadow-lg hover:shadow-[#8B3A2C]/40 transition-all flex items-center justify-center gap-3">
                                {t('locations.cta.button1')} <ArrowRight className="w-6 h-6" />
                            </button>
                        </Link>
                        <Link href="tel:0999220000" className="inline-block">
                            <button className="w-full sm:w-auto border-2 border-gray-300 dark:border-white/10 text-gray-700 dark:text-white hover:bg-white/10 px-10 py-5 rounded-2xl text-xl font-bold transition-all flex items-center justify-center gap-3">
                                {t('locations.cta.button2')}
                            </button>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
