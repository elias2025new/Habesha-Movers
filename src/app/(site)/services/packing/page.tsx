"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Package, ShieldCheck, Box, CheckCircle2, ArrowRight, Layers, Gem, ClipboardCheck } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { useLanguage } from '@/components/LanguageContext';

export default function PackingServicesPage() {
    const { t } = useLanguage();
    const fadeIn = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.5 }
    };

    const stagger = {
        animate: {
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    return (
        <div className="bg-white dark:bg-[#121212] min-h-screen font-sans text-gray-900 dark:text-gray-100 pb-20 transition-colors">
            {/* 1. Hero Section - Precise & Clean */}
            <section className="relative min-h-[60vh] md:h-[85vh] w-full overflow-hidden flex items-center py-20 md:py-0">
                {/* Background */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src="https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&q=80&w=1920"
                        alt="Expert Packing Service"
                        fill
                        className="object-cover object-center"
                        priority
                    />
                    <div className="absolute inset-0 bg-black/50" />
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full text-center">
                    <motion.div
                        initial="initial"
                        animate="animate"
                        variants={stagger}
                        className="max-w-4xl mx-auto space-y-6 md:space-y-8"
                    >
                        <motion.div variants={fadeIn} className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs md:text-sm font-medium dark:bg-[#1C1C1C]/50 dark:border-white/10">
                            <Box className="w-3.5 h-3.5 md:w-4 md:h-4 text-[#F5A623]" />
                            <span>{t('packing.hero.badge')}</span>
                        </motion.div>

                        <motion.h1 variants={fadeIn} className="text-3xl sm:text-5xl lg:text-7xl font-bold text-white leading-tight tracking-tight">
                            {t('packing.hero.title1')} <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F5A623] to-[#FFD700]">
                                {t('packing.hero.title2')}
                            </span>
                        </motion.h1>

                        <motion.p variants={fadeIn} className="text-base sm:text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed dark:text-gray-300">
                            {t('packing.hero.description')}
                        </motion.p>

                        <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
                            <Link href="/quote">
                                <Button className="bg-[#8B3A2C] hover:bg-[#702e23] text-white px-6 py-4 sm:px-8 sm:py-7 rounded-full text-base sm:text-lg font-semibold shadow-lg transition-all w-full sm:w-auto flex items-center justify-center gap-3">
                                    {t('packing.hero.cta1')} <ArrowRight className="w-5 h-5" />
                                </Button>
                            </Link>
                            <Link href="tel:0999220000">
                                <Button variant="outline" className="border-white/30 text-white hover:bg-white/10 px-6 py-4 sm:px-8 sm:py-7 rounded-full text-base sm:text-lg font-semibold w-full sm:w-auto">
                                    {t('packing.hero.cta2')}
                                </Button>
                            </Link>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* 2. Packing Materials - Premium Quality */}
            <section className="py-12 md:py-24 bg-[#FDF8F7] dark:bg-[#1C1C1C] transition-colors">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
                        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-gray-900 mb-6 dark:text-white">{t('packing.materials.title')}</h2>
                        <p className="text-base sm:text-lg text-gray-600 dark:text-[#CFCFCF]">{t('packing.materials.description')}</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: Layers,
                                title: t('packing.material.boxes.title'),
                                desc: t('packing.material.boxes.desc')
                            },
                            {
                                icon: ShieldCheck,
                                title: t('packing.material.bubble.title'),
                                desc: t('packing.material.bubble.desc')
                            },
                            {
                                icon: Box,
                                title: t('packing.material.crating.title'),
                                desc: t('packing.material.crating.desc')
                            }
                        ].map((item, idx) => (
                            <div key={idx} className="bg-white p-6 sm:p-10 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 text-center group dark:bg-[#2A2A2A] dark:border-[#333] dark:hover:border-[#F5A623]/30">
                                <div className="w-20 h-20 rounded-2xl bg-[#8B3A2C]/5 group-hover:bg-[#8B3A2C] text-[#8B3A2C] group-hover:text-white flex items-center justify-center mx-auto mb-6 transition-colors duration-300 dark:bg-[#F5A623]/10 dark:text-[#F5A623] dark:group-hover:bg-[#F5A623]">
                                    <item.icon className="w-10 h-10" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-4 dark:text-white">{item.title}</h3>
                                <p className="text-gray-500 leading-relaxed dark:text-[#CFCFCF]">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. White Glove Service - Fragile Items */}
            <section className="py-12 md:py-24 overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
                        <div className="relative">
                            <div className="absolute -inset-4 bg-[#F5A623] rounded-[2rem] opacity-20 rotate-3" />
                            <div className="relative rounded-[1.5rem] overflow-hidden shadow-2xl h-[350px] sm:h-[500px]">
                                <Image
                                    src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&q=80&w=800"
                                    alt="Fragile Item Packing"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            {/* Badge */}
                            <div className="absolute bottom-4 right-4 md:-bottom-8 md:-right-8 bg-white p-4 md:p-6 rounded-2xl shadow-xl border border-gray-100 flex items-center gap-3 md:gap-4 dark:bg-[#2A2A2A] dark:border-[#333]">
                                <div className="p-2 md:p-3 bg-[#F5A623]/20 rounded-full">
                                    <Gem className="w-6 h-6 md:w-8 md:h-8 text-[#F5A623]" />
                                </div>
                                <div>
                                    <p className="font-bold text-gray-900 text-base md:text-lg dark:text-white">{t('packing.fragile.whiteGlove')}</p>
                                    <p className="text-xs md:text-sm text-gray-500 dark:text-gray-400">{t('packing.fragile.certified')}</p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <span className="text-[#8B3A2C] font-bold tracking-widest uppercase text-sm border-b-2 border-[#F5A623] pb-1">
                                {t('packing.fragile.badge')}
                            </span>
                            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mt-6 mb-8 leading-tight dark:text-white">
                                {t('packing.fragile.title')} <span className="text-[#8B3A2C] dark:text-[#F5A623]">{t('packing.fragile.titleHighlight')}</span>
                            </h2>
                            <p className="text-base sm:text-lg text-gray-600 mb-8 leading-relaxed dark:text-[#CFCFCF]">
                                {t('packing.fragile.description')}
                            </p>

                            <ul className="space-y-4">
                                {[
                                    t('packing.fragile.point1'),
                                    t('packing.fragile.point2'),
                                    t('packing.fragile.point3'),
                                    t('packing.fragile.point4')
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-sm sm:text-lg text-gray-700 dark:text-gray-300">
                                        <CheckCircle2 className="w-5 h-5 text-[#34D399]" />
                                        {item}
                                    </li>
                                ))}
                            </ul>

                            <div className="mt-10">
                                <Link href="/contact">
                                    <Button className="bg-gray-900 hover:bg-black text-white px-6 py-4 sm:px-8 sm:py-6 rounded-lg font-bold text-sm sm:text-base dark:bg-[#F5A623] dark:text-black dark:hover:bg-[#e09612]">
                                        {t('packing.fragile.cta')}
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. Quality Standards Checklist */}
            <section className="py-12 md:py-24 bg-[#8B3A2C] text-white dark:bg-[#2A2A2A]">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-12 gap-8">
                        <div>
                            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4">{t('packing.quality.title')}</h2>
                            <p className="text-white/80 text-sm sm:text-lg max-w-xl">{t('packing.quality.description')}</p>
                        </div>
                        <ClipboardCheck className="w-16 h-16 sm:w-24 sm:h-24 text-[#F5A623] opacity-50" />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { title: t('packing.quality.categorized.title'), desc: t('packing.quality.categorized.desc') },
                            { title: t('packing.quality.labeled.title'), desc: t('packing.quality.labeled.desc') },
                            { title: t('packing.quality.inventory.title'), desc: t('packing.quality.inventory.desc') },
                            { title: t('packing.quality.sealed.title'), desc: t('packing.quality.sealed.desc') }
                        ].map((card, idx) => (
                            <div key={idx} className="bg-white/10 backdrop-blur border border-white/10 p-4 sm:p-6 rounded-xl hover:bg-white/20 transition-colors">
                                <h3 className="font-bold text-lg sm:text-xl mb-2 text-[#F5A623]">{card.title}</h3>
                                <p className="text-sm sm:text-base text-white/80">{card.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 5. Final CTA */}
            <section className="py-12 md:py-24 bg-white text-center dark:bg-[#121212]">
                <div className="max-w-4xl mx-auto px-6">
                    <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-8 dark:text-white">{t('packing.cta.title')}</h2>
                    <p className="text-base sm:text-xl text-gray-600 mb-10 max-w-2xl mx-auto dark:text-[#CFCFCF]">
                        {t('packing.cta.description')}
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Link href="/quote">
                            <Button className="bg-[#8B3A2C] hover:bg-[#702e23] text-white px-8 py-5 sm:px-10 sm:py-8 rounded-full text-lg sm:text-xl font-bold shadow-xl transition-all w-full sm:w-auto">
                                {t('packing.cta.button1')}
                            </Button>
                        </Link>
                        <Link href="tel:0999220000">
                            <Button variant="outline" className="border-gray-200 text-gray-900 hover:bg-gray-50 px-8 py-5 sm:px-10 sm:py-8 rounded-full text-lg sm:text-xl font-bold w-full sm:w-auto flex items-center justify-center gap-2 dark:bg-[#2A2A2A] dark:text-white dark:border-[#444] dark:hover:bg-[#333]">
                                <span className="w-3 h-3 rounded-full bg-[#34D399]" />
                                {t('packing.cta.button2')}
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
