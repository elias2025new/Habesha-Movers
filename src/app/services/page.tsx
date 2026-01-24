"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
    Home,
    Building2,
    Package,
    Truck,
    Globe,
    Warehouse,
    Car,
    ArrowRight,
    CheckCircle2,
    ShieldCheck,
    Clock,
    Star,
    Box,
    Monitor,
    Layout,
    ArrowUpRight
} from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { useLanguage } from '@/components/LanguageContext';
import ScrollReveal from '@/components/ui/ScrollReveal';

export default function ServicesPage() {
    const { t } = useLanguage();

    const fadeIn = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6 }
    };

    const stagger = {
        animate: {
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    return (
        <div className="bg-white dark:bg-[#121212] min-h-screen transition-colors duration-300">
            {/* 1. Hero Section */}
            <section className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-slate-900">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/images/habesha-movers-team-hero.png"
                        alt="Professional Habesha Movers Team"
                        fill
                        className="object-cover opacity-60"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/60" />
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-6 text-center text-white">
                    <motion.div
                        initial="initial"
                        animate="animate"
                        variants={stagger}
                    >
                        <motion.span variants={fadeIn} className="px-4 py-1.5 rounded-full bg-[#f5a623] text-black font-bold text-sm tracking-wide uppercase mb-6 inline-block shadow-lg">
                            {t('pro.title')}
                        </motion.span>
                        <motion.h1 variants={fadeIn} className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
                            {t('services.heroTitle')}
                        </motion.h1>
                        <motion.p variants={fadeIn} className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto dark:text-gray-300 font-light leading-relaxed">
                            {t('services.heroSubtitle')}
                        </motion.p>
                    </motion.div>
                </div>
            </section>

            {/* 2. Residential Showcase */}
            <section className="py-24 overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row gap-16 items-center">
                        <div className="flex-1 space-y-8">
                            <ScrollReveal animation="slide-right">
                                <div className="flex items-center gap-3 text-[#8B3A2C] dark:text-[#F5A623] mb-2 font-bold uppercase tracking-widest text-sm">
                                    <Home className="w-5 h-5" />
                                    <span>{t('service.house')}</span>
                                </div>
                                <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white leading-tight">
                                    {t('house.hero.title1')} <br />
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8B3A2C] to-[#8B3A2C]/70 dark:from-[#F5A623] dark:to-[#FFD700]">
                                        {t('house.hero.title2')}
                                    </span>
                                </h2>
                                <p className="text-lg text-gray-600 dark:text-[#CFCFCF] leading-relaxed">
                                    {t('service.houseDescLong')}
                                </p>

                                <div className="grid grid-cols-2 gap-6 pt-4">
                                    {[
                                        { key: 'house.process.step1.title', icon: Clock },
                                        { key: 'house.process.step3.title', icon: Package },
                                        { key: 'house.trust.title', icon: ShieldCheck },
                                        { key: 'feature.friendly', icon: Star }
                                    ].map((feat, i) => (
                                        <div key={i} className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-xl bg-gray-50 dark:bg-[#1C1C1C] flex items-center justify-center text-[#8B3A2C] dark:text-[#F5A623]">
                                                <feat.icon className="w-5 h-5" />
                                            </div>
                                            <span className="font-semibold text-gray-800 dark:text-gray-200">{t(feat.key)}</span>
                                        </div>
                                    ))}
                                </div>

                                <div className="pt-8 flex flex-wrap gap-4">
                                    <Link href="/services/house-moving">
                                        <Button className="bg-[#8B3A2C] hover:bg-[#702e23] text-white px-8 py-6 rounded-xl font-bold flex items-center gap-2">
                                            {t('locations.card.viewDetails')} <ArrowRight className="w-4 h-4" />
                                        </Button>
                                    </Link>
                                    <Link href="/quote">
                                        <Button variant="outline" className="px-8 py-6 rounded-xl font-bold border-gray-200 dark:border-white/10">{t('house.hero.cta1')}</Button>
                                    </Link>
                                </div>
                            </ScrollReveal>
                        </div>
                        <div className="flex-1 w-full">
                            <ScrollReveal animation="slide-left">
                                <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl">
                                    <Image
                                        src="/images/house-moving-hero.png"
                                        alt="Residential Moving"
                                        width={800}
                                        height={600}
                                        className="object-cover w-full h-[500px]"
                                    />
                                    <div className="absolute bottom-8 left-8 right-8 bg-white/90 dark:bg-[#1C1C1C]/90 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-white/20">
                                        <div className="flex items-center justify-between">
                                            <div>
                                                <p className="text-3xl font-extrabold text-[#8B3A2C] dark:text-[#F5A623]">300+</p>
                                                <p className="text-sm text-gray-500 uppercase font-bold tracking-tighter">{t('hero.stats.movesLabel')}</p>
                                            </div>
                                            <div className="text-right">
                                                <div className="flex text-[#F5A623] mb-1">
                                                    <Star className="w-4 h-4 fill-current" />
                                                    <Star className="w-4 h-4 fill-current" />
                                                    <Star className="w-4 h-4 fill-current" />
                                                    <Star className="w-4 h-4 fill-current" />
                                                    <Star className="w-4 h-4 fill-current" />
                                                </div>
                                                <p className="text-sm font-bold">{t('house.stats.rating')}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </ScrollReveal>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. Commercial Showcase - Corporate Blue Theme Tint */}
            <section className="py-24 bg-gray-50 dark:bg-[#1A1A1A] transition-colors overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row-reverse gap-16 items-center">
                        <div className="flex-1 space-y-8">
                            <ScrollReveal animation="slide-left">
                                <div className="flex items-center gap-3 text-blue-600 dark:text-[#F5A623] mb-2 font-bold uppercase tracking-widest text-sm">
                                    <Building2 className="w-5 h-5" />
                                    <span>{t('service.office')}</span>
                                </div>
                                <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white leading-tight">
                                    {t('office.hero.title1')} <br />
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400 dark:from-[#F5A623] dark:to-[#FFD700]">
                                        {t('office.hero.title2')}
                                    </span>
                                </h2>
                                <p className="text-lg text-gray-600 dark:text-[#CFCFCF] leading-relaxed">
                                    {t('service.officeDescLong')}
                                </p>

                                <div className="space-y-4 pt-4">
                                    {[
                                        { key: 'office.promise.point3', icon: Layout },
                                        { key: 'office.service.it.title', icon: Monitor },
                                        { key: 'office.service.afterHours.title', icon: Clock }
                                    ].map((feat, i) => (
                                        <div key={i} className="flex items-center gap-4 group">
                                            <div className="w-12 h-12 rounded-xl bg-blue-100 dark:bg-[#F5A623]/10 flex items-center justify-center text-blue-600 dark:text-[#F5A623] group-hover:scale-110 transition-transform">
                                                <feat.icon className="w-6 h-6" />
                                            </div>
                                            <span className="text-lg font-medium text-gray-800 dark:text-gray-200">{t(feat.key)}</span>
                                        </div>
                                    ))}
                                </div>

                                <div className="pt-8 flex flex-wrap gap-4">
                                    <Link href="/services/office-relocation">
                                        <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 rounded-xl font-bold flex items-center gap-2">
                                            {t('locations.card.viewDetails')} <ArrowRight className="w-4 h-4" />
                                        </Button>
                                    </Link>
                                    <Link href="tel:0999220000">
                                        <Button variant="outline" className="px-8 py-6 rounded-xl font-bold border-gray-200 dark:border-white/10">{t('office.hero.cta2')}</Button>
                                    </Link>
                                </div>
                            </ScrollReveal>
                        </div>
                        <div className="flex-1 w-full relative">
                            <ScrollReveal animation="slide-right">
                                <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl">
                                    <Image
                                        src="/images/office-relocation-hero.png"
                                        alt="Office Relocation"
                                        width={800}
                                        height={600}
                                        className="object-cover w-full h-[500px]"
                                    />
                                    <div className="absolute top-8 left-8">
                                        <div className="bg-blue-600/90 backdrop-blur-md px-6 py-4 rounded-2xl text-white shadow-xl">
                                            <p className="text-3xl font-black">{t('office.stats.downtime')}</p>
                                            <p className="text-xs font-bold uppercase tracking-widest opacity-80">{t('office.stats.downtimeLabel')}</p>
                                        </div>
                                    </div>
                                </div>
                            </ScrollReveal>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. Packing Showcase */}
            <section className="py-24 overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row gap-16 items-center">
                        <div className="flex-1 space-y-8">
                            <ScrollReveal animation="slide-right">
                                <div className="flex items-center gap-3 text-[#f5a623] mb-2 font-bold uppercase tracking-widest text-sm">
                                    <Box className="w-5 h-5" />
                                    <span>{t('service.packing')}</span>
                                </div>
                                <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white leading-tight">
                                    {t('packing.hero.title1')} <br />
                                    <span className="text-[#8B3A2C] dark:text-[#F5A623]">
                                        {t('packing.hero.title2')}
                                    </span>
                                </h2>
                                <p className="text-lg text-gray-600 dark:text-[#CFCFCF] leading-relaxed">
                                    {t('service.packingDescLong')}
                                </p>

                                <div className="flex flex-wrap gap-4 pt-4">
                                    {[
                                        t('packing.material.boxes.title'),
                                        t('packing.material.bubble.title'),
                                        t('packing.material.crating.title'),
                                        t('packing.fragile.whiteGlove')
                                    ].map((item, i) => (
                                        <div key={i} className="px-5 py-3 rounded-2xl bg-[#FDF8F7] dark:bg-[#1C1C1C] border border-gray-100 dark:border-white/5 font-semibold text-gray-800 dark:text-gray-200">
                                            {item}
                                        </div>
                                    ))}
                                </div>

                                <div className="pt-8">
                                    <Link href="/services/packing">
                                        <Button className="bg-[#8B3A2C] hover:bg-[#702e23] text-white px-10 py-7 rounded-2xl font-bold text-lg shadow-xl flex items-center gap-3 group">
                                            {t('locations.card.viewDetails')}
                                            <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                                        </Button>
                                    </Link>
                                </div>
                            </ScrollReveal>
                        </div>
                        <div className="flex-1 w-full grid grid-cols-2 gap-4">
                            <ScrollReveal animation="fade-up" delay={0.1}>
                                <div className="relative h-64 rounded-3xl overflow-hidden shadow-lg mt-12">
                                    <Image src="https://images.unsplash.com/photo-1520038410233-7141be7e6f97?auto=format&fit=crop&q=80&w=400" fill alt="Packing" className="object-cover" />
                                </div>
                            </ScrollReveal>
                            <ScrollReveal animation="fade-up" delay={0.2}>
                                <div className="relative h-80 rounded-3xl overflow-hidden shadow-lg">
                                    <Image src="https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?auto=format&fit=crop&q=80&w=400" fill alt="Crating" className="object-cover" />
                                </div>
                            </ScrollReveal>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. Extended Logistics - Grid Section */}
            <section className="py-24 bg-gray-50 dark:bg-[#0A0A0A] transition-colors">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">{t('services.customTitle')}</h2>
                        <div className="w-24 h-1.5 bg-[#8B3A2C] dark:bg-[#F5A623] mx-auto rounded-full mb-8"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: Globe,
                                title: t('service.international'),
                                desc: t('service.internationalDesc'),
                                color: "bg-purple-500/10 text-purple-600"
                            },
                            {
                                icon: Warehouse,
                                title: t('service.storage'),
                                desc: t('service.storageDesc'),
                                color: "bg-orange-500/10 text-orange-600"
                            },
                            {
                                icon: Car,
                                title: t('service.car'),
                                desc: t('service.carDesc'),
                                color: "bg-blue-500/10 text-blue-600"
                            }
                        ].map((item, i) => (
                            <ScrollReveal key={i} animation="fade-up" delay={i * 0.1}>
                                <div className="bg-white dark:bg-[#1C1C1C] p-10 rounded-[2.5rem] border border-gray-100 dark:border-white/5 hover:shadow-2xl transition-all duration-500 flex flex-col items-center text-center group">
                                    <div className={`w-20 h-20 rounded-3xl ${item.color} flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300`}>
                                        <item.icon className="w-10 h-10" />
                                    </div>
                                    <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                                    <p className="text-gray-500 dark:text-gray-400 mb-8 leading-relaxed">{item.desc}</p>
                                    <Button variant="outline" className="mt-auto border-gray-200 dark:border-white/10 group-hover:bg-gray-50 dark:group-hover:bg-white/5 px-6">
                                        {t('services.ctaButton')}
                                    </Button>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* 6. Final CTA */}
            <section className="py-24 relative overflow-hidden">
                <div className="absolute inset-0 bg-[#8B3A2C] dark:bg-[#1C1C1C]">
                    <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] bg-repeat" />
                </div>
                <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
                    <h2 className="text-4xl md:text-5xl font-bold mb-8">{t('cta.title')}</h2>
                    <p className="text-xl opacity-90 mb-12 max-w-2xl mx-auto">
                        {t('cta.subtitle')}
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-6">
                        <Link href="/quote">
                            <Button className="bg-[#F5A623] text-black hover:bg-white px-12 py-8 rounded-2xl text-xl font-bold shadow-2xl transition-all transform hover:-translate-y-1">
                                {t('cta.button')}
                            </Button>
                        </Link>
                        <Link href="/contact" className="inline-block">
                            <Button variant="outline" className="border-white/30 text-white hover:bg-white/10 px-12 py-8 rounded-2xl text-xl font-bold backdrop-blur-sm">
                                {t('nav.contact')}
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}

