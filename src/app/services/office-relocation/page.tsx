"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Building2, Clock, ShieldCheck, Truck, Users, Layout, FileText, Monitor, CheckCircle2, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { useLanguage } from '@/components/LanguageContext';

export default function OfficeRelocationPage() {
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
            {/* 1. Hero Section - Corporate & Clean */}
            <section className="relative h-[85vh] w-full overflow-hidden flex items-center">
                {/* Background */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/images/office-relocation-hero.png"
                        alt="Professional Office Movers"
                        fill
                        className="object-cover object-center"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/70 to-transparent" />
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full">
                    <motion.div
                        initial="initial"
                        animate="animate"
                        variants={stagger}
                        className="max-w-3xl space-y-8"
                    >
                        <motion.div variants={fadeIn} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-medium dark:bg-[#1C1C1C]/50 dark:border-white/10">
                            <Building2 className="w-4 h-4 text-[#F5A623]" />
                            <span>{t('office.hero.badge')}</span>
                        </motion.div>

                        <motion.h1 variants={fadeIn} className="text-5xl lg:text-7xl font-bold text-white leading-tight tracking-tight">
                            {t('office.hero.title1')} <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F5A623] to-[#FFD700]">
                                {t('office.hero.title2')}
                            </span>
                        </motion.h1>

                        <motion.p variants={fadeIn} className="text-xl text-gray-300 max-w-2xl leading-relaxed dark:text-gray-400">
                            {t('office.hero.description')}
                        </motion.p>

                        <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-4 pt-4">
                            <Link href="/quote">
                                <Button className="bg-[#8B3A2C] hover:bg-[#702e23] text-white px-8 py-7 rounded-lg text-lg font-semibold shadow-lg transition-all w-full sm:w-auto flex items-center justify-center gap-3">
                                    {t('office.hero.cta1')} <ArrowRight className="w-5 h-5" />
                                </Button>
                            </Link>
                            <Link href="tel:0999220000">
                                <Button variant="outline" className="border-white/30 text-white hover:bg-white/10 px-8 py-7 rounded-lg text-lg font-semibold w-full sm:w-auto">
                                    {t('office.hero.cta2')}
                                </Button>
                            </Link>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* 2. Key Metrics - Trust & Efficiency */}
            <section className="bg-gray-50 border-b border-gray-100 dark:bg-[#1C1C1C] dark:border-[#2A2A2A]">
                <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {[
                            { value: t('office.stats.downtime'), label: t('office.stats.downtimeLabel'), sub: t('office.stats.downtimeSub') },
                            { value: t('office.stats.offices'), label: t('office.stats.officesLabel'), sub: t('office.stats.officesSub') },
                            { value: t('office.stats.itSafe'), label: t('office.stats.itSafeLabel'), sub: t('office.stats.itSafeSub') },
                            { value: t('office.stats.flexibility'), label: t('office.stats.flexibilityLabel'), sub: t('office.stats.flexibilitySub') },
                        ].map((stat, idx) => (
                            <div key={idx} className="text-center md:text-left border-r last:border-0 border-gray-200 dark:border-[#333] pr-0 md:pr-8">
                                <p className="text-4xl lg:text-5xl font-bold text-[#8B3A2C] mb-2 dark:text-[#F5A623]">{stat.value}</p>
                                <p className="text-lg font-bold text-gray-900 dark:text-white">{stat.label}</p>
                                <p className="text-sm text-gray-500 dark:text-gray-400">{stat.sub}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. Comprehensive Business Solutions */}
            <section className="py-24">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 dark:text-white">{t('office.solutions.title')}</h2>
                        <p className="text-lg text-gray-600 dark:text-[#CFCFCF]">{t('office.solutions.description')}</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: Monitor,
                                title: t('office.service.it.title'),
                                desc: t('office.service.it.desc')
                            },
                            {
                                icon: Layout,
                                title: t('office.service.furniture.title'),
                                desc: t('office.service.furniture.desc')
                            },
                            {
                                icon: FileText,
                                title: t('office.service.documents.title'),
                                desc: t('office.service.documents.desc')
                            },
                            {
                                icon: Clock,
                                title: t('office.service.afterHours.title'),
                                desc: t('office.service.afterHours.desc')
                            },
                            {
                                icon: () => (
                                    <Image
                                        src="/images/habesha-logo-svg.svg"
                                        alt="Logo"
                                        width={28}
                                        height={28}
                                        className="w-7 h-7 object-contain brightness-0 dark:brightness-200 opacity-60 group-hover:opacity-100 transition-opacity"
                                    />
                                ),
                                title: t('office.service.logistics.title'),
                                desc: t('office.service.logistics.desc')
                            },
                            {
                                icon: ShieldCheck,
                                title: t('office.service.insurance.title'),
                                desc: t('office.service.insurance.desc')
                            }
                        ].map((item, idx) => (
                            <div key={idx} className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-[#8B3A2C]/20 transition-all duration-300 group dark:bg-[#1C1C1C] dark:border-[#2A2A2A] dark:hover:border-[#F5A623]/20">
                                <div className="w-14 h-14 rounded-xl bg-gray-50 group-hover:bg-[#8B3A2C]/10 flex items-center justify-center mb-6 transition-colors dark:bg-[#2A2A2A] dark:group-hover:bg-[#F5A623]/10">
                                    <item.icon className="w-7 h-7 text-gray-600 group-hover:text-[#8B3A2C] dark:text-gray-400 dark:group-hover:text-[#F5A623]" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3 dark:text-white">{item.title}</h3>
                                <p className="text-gray-500 leading-relaxed dark:text-[#CFCFCF]">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. The Process - Minimal Downtime Focus */}
            <section className="py-24 bg-[#1a1a1a] text-white dark:bg-[#0A0A0A]">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <span className="text-[#F5A623] font-bold tracking-widest uppercase text-sm border-b-2 border-[#F5A623] pb-1">
                                {t('office.promise.badge')}
                            </span>
                            <h2 className="text-4xl md:text-5xl font-bold mt-6 mb-6 leading-tight">
                                {t('office.promise.title1')} <br /> {t('office.promise.title2')}
                            </h2>
                            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                                {t('office.promise.description')}
                            </p>

                            <div className="space-y-6">
                                {[
                                    t('office.promise.point1'),
                                    t('office.promise.point2'),
                                    t('office.promise.point3'),
                                    t('office.promise.point4')
                                ].map((point, i) => (
                                    <div key={i} className="flex items-center gap-4">
                                        <div className="w-6 h-6 rounded-full bg-[#F5A623] flex items-center justify-center flex-shrink-0">
                                            <CheckCircle2 className="w-4 h-4 text-black" />
                                        </div>
                                        <span className="text-lg text-gray-200">{point}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-10">
                                <Link href="/quote">
                                    <Button className="bg-[#F5A623] text-black hover:bg-[#d9901c] px-8 py-6 rounded-lg font-bold text-lg">
                                        {t('office.promise.cta')}
                                    </Button>
                                </Link>
                            </div>
                        </div>
                        <div className="relative h-[600px] bg-gray-800 rounded-2xl overflow-hidden border border-gray-700 dark:bg-[#121212] dark:border-[#333]">
                            {/* Abstract Visualization of Process or Image */}
                            <div className="absolute inset-0 bg-gradient-to-br from-[#8B3A2C]/20 to-transparent z-10" />
                            <Image
                                src="/images/office-relocation-promise-simple.png"
                                alt="Habesha Corporate Move Planning"
                                fill
                                className="object-cover opacity-80 grayscale hover:grayscale-0 transition-all duration-700"
                            />
                            <div className="absolute bottom-0 left-0 right-0 p-8 z-20 bg-gradient-to-t from-black to-transparent">
                                <div className="flex items-center gap-4 mb-2">
                                    <Users className="w-6 h-6 text-[#F5A623]" />
                                    <span className="text-white font-semibold">{t('office.promise.imageCaption')}</span>
                                </div>
                                <p className="text-gray-400 text-sm">{t('office.promise.imageDesc')}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. Final Consultation CTA */}
            <section className="py-24 bg-white dark:bg-[#121212]">
                <div className="max-w-5xl mx-auto px-6 lg:px-8 bg-[#FDF8F7] rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden dark:bg-[#1C1C1C]">
                    {/* Decor */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-[#F5A623]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#8B3A2C]/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

                    <div className="relative z-10">
                        <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 dark:text-white">{t('office.cta.title')}</h2>
                        <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto dark:text-[#CFCFCF]">
                            {t('office.cta.description')}
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <Link href="/contact">
                                <Button className="bg-[#8B3A2C] hover:bg-[#702e23] text-white px-10 py-7 rounded-lg text-lg font-bold shadow-lg w-full sm:w-auto">
                                    {t('office.cta.button1')}
                                </Button>
                            </Link>
                            <Link href="tel:0999220000">
                                <Button variant="outline" className="border-gray-300 bg-white hover:bg-gray-50 text-gray-900 px-10 py-7 rounded-lg text-lg font-bold w-full sm:w-auto flex items-center justify-center gap-2 dark:bg-[#2A2A2A] dark:text-white dark:border-[#444] dark:hover:bg-[#333]">
                                    <span className="w-2 h-2 rounded-full bg-[#34D399] animate-pulse" />
                                    {t('office.cta.button2')}
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
