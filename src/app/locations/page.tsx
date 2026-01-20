"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { MapPin, ArrowRight, ChevronRight, Building2, Home } from 'lucide-react';
import { useLanguage } from '@/components/LanguageContext';
import { LOCATIONS_DATA } from '@/constants/locationsData';
import ScrollReveal from '@/components/ui/ScrollReveal';

export default function LocationsPage() {
    const { t } = useLanguage();

    return (
        <div className="bg-white dark:bg-[#121212] min-h-screen transition-colors duration-300">
            {/* Hero Section */}
            <section className="relative py-20 bg-[#8B3A2C] dark:bg-[#1A1A1A] overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-transparent z-0" />
                <div className="max-w-7xl mx-auto px-6 relative z-10 text-center text-white">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="px-4 py-1.5 rounded-full bg-[#f5a623] text-black font-bold text-sm tracking-wide uppercase mb-6 inline-block">
                            Service Areas
                        </span>
                        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
                            Locations We Serve in <br />
                            <span className="text-[#F5A623]">Addis Ababa</span>
                        </h1>
                        <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto font-light leading-relaxed">
                            Habesha Movers provides professional, reliable, and localized moving services across all sub-cities of the capital. Wherever you are in Addis, we've got you covered.
                        </p>
                    </motion.div>
                </div>

                {/* Decorative background element */}
                <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-[#F5A623] rounded-full blur-[120px] opacity-10" />
            </section>

            {/* Locations Grid */}
            <section className="py-24 max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {LOCATIONS_DATA.map((loc, idx) => (
                        <ScrollReveal key={loc.slug} animation="fade-up" delay={idx * 0.05}>
                            <Link href={`/locations/${loc.slug}`} className="group">
                                <div className="h-full bg-gray-50 dark:bg-[#1C1C1C] rounded-[2rem] p-8 border border-gray-100 dark:border-white/5 hover:border-[#F5A623]/30 dark:hover:border-[#F5A623]/30 transition-all duration-500 shadow-sm hover:shadow-xl hover:-translate-y-2 flex flex-col">
                                    <div className="flex items-center justify-between mb-6">
                                        <div className="w-14 h-14 rounded-2xl bg-[#8B3A2C]/10 dark:bg-[#F5A623]/10 flex items-center justify-center text-[#8B3A2C] dark:text-[#F5A623] group-hover:scale-110 transition-transform duration-500">
                                            <MapPin className="w-7 h-7" />
                                        </div>
                                        <span className="text-sm font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-widest">
                                            {loc.subCity}
                                        </span>
                                    </div>

                                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-[#8B3A2C] dark:group-hover:text-[#F5A623] transition-colors">
                                        Moving in {loc.name}
                                    </h2>

                                    <p className="text-gray-600 dark:text-gray-400 mb-8 line-clamp-3 leading-relaxed flex-grow">
                                        {loc.description}
                                    </p>

                                    <div className="flex items-center gap-2 text-[#8B3A2C] dark:text-[#F5A623] font-bold group-hover:gap-4 transition-all">
                                        View Details <ChevronRight className="w-5 h-5" />
                                    </div>
                                </div>
                            </Link>
                        </ScrollReveal>
                    ))}
                </div>
            </section>

            {/* City-wide CTA */}
            <section className="py-24 bg-gray-50 dark:bg-[#1C1C1C] transition-colors">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-8">
                        Ready to move anywhere in Addis?
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-400 mb-12">
                        Our specialized team knows every corner of the city. Get a free, customized quote for your upcoming move today.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-6">
                        <Link href="/quote" className="inline-block">
                            <button className="w-full sm:w-auto bg-[#8B3A2C] hover:bg-[#702e23] text-white px-10 py-5 rounded-2xl text-xl font-bold shadow-lg hover:shadow-[#8B3A2C]/40 transition-all flex items-center justify-center gap-3">
                                Get a Free Quote <ArrowRight className="w-6 h-6" />
                            </button>
                        </Link>
                        <Link href="tel:0999220000" className="inline-block">
                            <button className="w-full sm:w-auto border-2 border-gray-300 dark:border-white/10 text-gray-700 dark:text-white hover:bg-white/10 px-10 py-5 rounded-2xl text-xl font-bold transition-all flex items-center justify-center gap-3">
                                Call 0999220000
                            </button>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
