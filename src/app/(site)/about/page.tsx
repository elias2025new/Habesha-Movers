"use client";

import { useLanguage } from '@/components/LanguageContext';
import { Button } from '@/components/ui/Button';
import { Award, CheckCircle, Clock, MapPin, Shield, Truck, Users, Briefcase } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function AboutPage() {
    const { t } = useLanguage();

    // Section Data (Content from translation files)
    const services = [
        { icon: <Truck className="h-6 w-6 text-blue-600 dark:text-blue-400" />, title: t('about.services.residential'), desc: t('about.services.residentialDesc') },
        { icon: <Briefcase className="h-6 w-6 text-blue-600 dark:text-blue-400" />, title: t('about.services.corporate'), desc: t('about.services.corporateDesc') },
        { icon: <Shield className="h-6 w-6 text-blue-600 dark:text-blue-400" />, title: t('about.services.packing'), desc: t('about.services.packingDesc') },
        { icon: <MapPin className="h-6 w-6 text-blue-600 dark:text-blue-400" />, title: t('about.services.local'), desc: t('about.services.localDesc') },
    ];

    const strengths = [
        { icon: <Users className="h-8 w-8 text-white" />, title: t('about.strengths.staff'), desc: t('about.strengths.staffDesc') },
        { icon: <Truck className="h-8 w-8 text-white" />, title: t('about.strengths.fleet'), desc: t('about.strengths.fleetDesc') },
        { icon: <CheckCircle className="h-8 w-8 text-white" />, title: t('about.strengths.pricing'), desc: t('about.strengths.pricingDesc') },
        { icon: <Clock className="h-8 w-8 text-white" />, title: t('about.strengths.planning'), desc: t('about.strengths.planningDesc') },
    ];

    const values = [
        { title: t('about.values.reliability'), desc: t('about.values.reliabilityDesc') },
        { title: t('about.values.safety'), desc: t('about.values.safetyDesc') },
        { title: t('about.values.transparency'), desc: t('about.values.transparencyDesc') },
        { title: t('about.values.efficiency'), desc: t('about.values.efficiencyDesc') },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <div className="bg-background min-h-screen">

            {/* 1. Hero Section */}
            <section className="relative h-[50vh] flex items-center justify-center overflow-hidden bg-slate-900">
                <div className="absolute inset-0 z-0 opacity-40">
                    <Image
                        src="/images/habesha-movers-team-hero.png"
                        alt={t('about.hero.alt')}
                        fill
                        className="object-cover"
                        priority
                    />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent z-0" />

                <div className="relative z-10 max-w-7xl mx-auto px-6 text-center text-white">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-4xl md:text-6xl font-bold tracking-tight mb-6"
                    >
                        {t('about.heroTitle')}
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-lg md:text-xl text-slate-200 max-w-3xl mx-auto"
                    >
                        {t('about.heroSubtitle')}
                    </motion.p>
                </div>
            </section>

            {/* 2. Company Overview & Mission */}
            <section className="py-20 px-6 lg:px-8 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    {/* Content */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={containerVariants}
                    >
                        <motion.h2 variants={itemVariants} className="text-3xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
                            <span className="w-2 h-8 bg-blue-600 rounded-sm"></span>
                            {t('about.overview.title')}
                        </motion.h2>
                        <motion.p variants={itemVariants} className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-10 text-justify">
                            {t('about.overview.content')}
                        </motion.p>

                        <div className="bg-blue-50 dark:bg-blue-900/20 p-8 rounded-2xl border-l-4 border-blue-600">
                            <h3 className="text-2xl font-bold text-slate-900 dark:text-blue-400 mb-4">{t('about.mission.title')}</h3>
                            <p className="text-lg text-slate-700 dark:text-slate-300 italic font-medium">
                                &quot;{t('about.mission.content')}&quot;
                            </p>
                        </div>
                    </motion.div>

                    {/* Image Grid */}
                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-4 mt-8">
                            <div className="relative h-64 rounded-2xl overflow-hidden shadow-lg">
                                <Image src="/images/habesha-movers-mission.png" alt={t('about.overview.imageAlt')} fill className="object-cover" />
                            </div>
                            <div className="bg-slate-100 dark:bg-slate-800 p-6 rounded-2xl flex flex-col justify-center items-center text-center">
                                <Award className="h-10 w-10 text-blue-600 mb-2" />
                                <span className="text-3xl font-bold text-slate-900 dark:text-white">{t('about.stats.years')}</span>
                                <span className="text-sm text-slate-500 dark:text-slate-400 uppercase tracking-widest">{t('about.stats.yearsLabel')}</span>
                            </div>
                        </div>
                        <div className="space-y-4">
                            <div className="bg-blue-600 p-6 rounded-2xl flex flex-col justify-center items-center text-center text-white">
                                <CheckCircle className="h-10 w-10 text-white mb-2" />
                                <span className="text-3xl font-bold">{t('about.stats.projects')}</span>
                                <span className="text-sm text-blue-100 uppercase tracking-widest">{t('about.stats.projectsLabel')}</span>
                            </div>
                            <div className="relative h-64 rounded-2xl overflow-hidden shadow-lg">
                                <Image src="/images/habesha-movers-truck.png" alt={t('about.strengths.imageAlt')} fill className="object-cover" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. Operational Strengths (Dark Section) */}
            <section className="bg-slate-900 py-24 text-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold mb-4">{t('about.strengths.title')}</h2>
                        <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {strengths.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="bg-slate-800 p-8 rounded-xl border border-slate-700 hover:border-blue-500 transition-all duration-300"
                            >
                                <div className="bg-blue-600/20 w-14 h-14 rounded-full flex items-center justify-center mb-6">
                                    {item.icon}
                                </div>
                                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                                <p className="text-slate-400 leading-relaxed text-sm">
                                    {item.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. Core Services */}
            <section className="py-24 bg-slate-50 dark:bg-[#121212]">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <span className="text-blue-600 font-semibold tracking-wider text-sm uppercase">{t('nav.services')}</span>
                        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mt-2">{t('about.services.title')}</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {services.map((service, idx) => (
                            <div key={idx} className="flex gap-6 bg-white dark:bg-[#1C1C1C] p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                                <div className="shrink-0">
                                    <div className="w-12 h-12 bg-blue-50 dark:bg-blue-900/30 rounded-xl flex items-center justify-center">
                                        {service.icon}
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{service.title}</h3>
                                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                                        {service.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 5. Values & Standards */}
            <section className="py-20 max-w-7xl mx-auto px-6 lg:px-8">
                <div className="bg-white dark:bg-[#1C1C1C] rounded-3xl overflow-hidden shadow-2xl border border-gray-100 dark:border-gray-800">
                    <div className="grid grid-cols-1 lg:grid-cols-2">
                        <div className="p-12 lg:p-16 flex flex-col justify-center">
                            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8">{t('about.values.title')}</h2>
                            <div className="space-y-6">
                                {values.map((val, idx) => (
                                    <div key={idx} className="flex items-start gap-4">
                                        <div className="mt-1">
                                            <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-bold text-slate-900 dark:text-white">{val.title}</h4>
                                            <p className="text-slate-600 dark:text-slate-400">{val.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="relative h-96 lg:h-auto bg-slate-100">
                            <Image
                                src="/images/habesha-movers-team-hero.png"
                                alt={t('about.values.imageAlt')}
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. Local Expertise */}
            <section className="bg-blue-900 py-20 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-800 skew-x-12 transform translate-x-20 opacity-50"></div>
                <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
                    <MapPin className="h-12 w-12 text-blue-300 mx-auto mb-6" />
                    <h2 className="text-3xl font-bold mb-6">{t('about.local.title')}</h2>
                    <p className="text-xl text-blue-100 leading-relaxed font-light">
                        {t('about.local.content')}
                    </p>
                </div>
            </section>

            {/* 7. CTA */}
            <section className="py-24 text-center px-6">
                <div className="max-w-3xl mx-auto p-1 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 rounded-3xl">
                    <div className="bg-white dark:bg-[#121212] rounded-[22px] py-16 px-8">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">{t('about.ctaTitle')}</h2>
                        <p className="text-lg text-slate-600 dark:text-slate-300 mb-10 max-w-xl mx-auto">
                            {t('about.ctaSubtitle')}
                        </p>
                        <Link href="/contact">
                            <Button size="lg" className="bg-slate-900 text-white hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-gray-200 px-8 py-6 text-lg rounded-full">
                                {t('about.ctaButton')}
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
