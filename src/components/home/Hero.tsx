"use client";

import { motion } from 'framer-motion';
import QuoteForm from './QuoteForm';
import { useLanguage } from '../LanguageContext';
import { Users, Package } from 'lucide-react';

import ParticleBackground from './ParticleBackground';
import { GlowButton } from '@/components/ui/shiny-button-1';
import Link from 'next/link';

const Hero = () => {
    const { t } = useLanguage();
    return (
        <div className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
            {/* Background Image */}
            <div
                className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: 'url(/images/habesha-hero-final.png)',
                }}
            >
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-l from-black/90 via-black/70 to-black/40 dark:hidden" />
                <div className="absolute inset-0 hidden dark:block" style={{
                    background: 'linear-gradient(to right, rgba(0,0,0,0.85), rgba(0,0,0,0.55))'
                }} />
            </div>

            {/* Particles - Fixed Position but localized in DOM order for layering */}
            <div className="absolute inset-0 z-[1]">
                <ParticleBackground />
            </div>

            {/* Mobile Stats Bar - Absolutely Positioned at THE TOP OF THE HERO */}
            <div className="lg:hidden absolute top-4 left-0 right-0 z-20 flex justify-center px-2 md:px-0">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="bg-white dark:bg-[#1C1C1C]/70 dark:backdrop-blur-md rounded-full md:rounded-none shadow-lg p-2.5 px-4 sm:px-8 flex items-center justify-between text-gray-800 dark:text-white w-full max-w-[550px] md:max-w-full md:p-6 md:px-20 border border-transparent dark:border-white/5"
                >
                    <div className="flex items-center gap-1.5 border-r border-gray-100 dark:border-white/10 pr-2 md:pr-6 last:border-0 grow justify-center">
                        <Users className="h-3 w-3 md:h-5 md:w-5 text-secondary dark:text-[#F5A623]" />
                        <span className="text-[9px] md:text-sm font-bold whitespace-nowrap">{t('hero.mobileStats.moves')}</span>
                    </div>
                    <div className="flex items-center gap-1.5 border-r border-gray-100 dark:border-white/10 px-2 md:px-6 last:border-0 grow justify-center">
                        <Package className="h-3 w-3 md:h-5 md:w-5 text-secondary dark:text-[#F5A623]" />
                        <span className="text-[9px] md:text-sm font-bold whitespace-nowrap">{t('hero.mobileStats.safe')}</span>
                    </div>
                    <div className="flex items-center gap-1.5 px-2 md:px-6 grow justify-center">
                        <span className="text-[9px] md:text-sm font-bold whitespace-nowrap">{t('hero.mobileStats.trusted')}</span>
                    </div>
                </motion.div>
            </div>


            <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full py-8 md:py-20 text-white">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mt-28 lg:mt-0">

                    {/* Left Content - Text (PC View Only, Hidden on Mobile as per Image) */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="hidden lg:block text-white space-y-8 lg:col-span-7"
                    >
                        <div className="space-y-4">
                            <span className="text-secondary dark:text-[#F5A623] font-bold tracking-wider uppercase text-sm bg-secondary/10 dark:bg-[#F5A623]/10 px-3 py-1 rounded-full border border-secondary/20 dark:border-[#F5A623]/20">
                                {t('hero.badge')}
                            </span>
                            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight">
                                <span className="text-white dark:text-white">{t('hero.title1')}</span> <br />
                                <span className="text-secondary dark:text-[#F5A623]">{t('hero.title2')}</span>
                            </h1>
                            <p className="text-lg text-gray-200 dark:text-[#CFCFCF] max-w-xl leading-relaxed">
                                {t('hero.description')}
                            </p>
                        </div>

                        <div className="grid grid-cols-2 gap-6 max-w-md">
                            <div className="bg-white/10 dark:bg-[rgba(28,28,28,0.7)] backdrop-blur-md border border-white/20 dark:border-[rgba(255,255,255,0.05)] p-4 rounded-xl">
                                <Users className="h-6 w-6 text-secondary dark:text-[#F5A623] mb-2" />
                                <h4 className="text-2xl font-bold text-white">{t('hero.stats.moves')}</h4>
                                <p className="text-gray-300 dark:text-[#CFCFCF]/80 text-xs">{t('hero.stats.movesLabel')}</p>
                            </div>
                            <div className="bg-white/10 dark:bg-[rgba(28,28,28,0.7)] backdrop-blur-md border border-white/20 dark:border-[rgba(255,255,255,0.05)] p-4 rounded-xl">
                                <Package className="h-6 w-6 text-secondary dark:text-[#F5A623] mb-2" />
                                <h4 className="text-2xl font-bold text-white">{t('hero.stats.safe')}</h4>
                                <p className="text-gray-300 dark:text-[#CFCFCF]/80 text-xs">{t('hero.stats.safeLabel')}</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Quote Form - Positioned Below Bar on Mobile, Right on PC */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="lg:col-span-5 flex justify-center lg:justify-end w-full"
                    >
                        <QuoteForm />
                    </motion.div>

                </div>
            </div>
        </div>
    );
};

export default Hero;
