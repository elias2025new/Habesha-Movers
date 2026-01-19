"use client";

import { Button } from '@/components/ui/Button';
import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/components/LanguageContext';

export default function AboutPage() {
    const { t } = useLanguage();

    const values = [
        { title: t('about.value1Title'), description: t('about.value1Desc') },
        { title: t('about.value2Title'), description: t('about.value2Desc') },
        { title: t('about.value3Title'), description: t('about.value3Desc') },
    ];

    return (
        <div className="bg-background transition-colors dark:bg-[#121212]">
            {/* Hero Section */}
            <section className="bg-blue-600 py-20 text-white transition-colors dark:bg-[#1C1C1C] dark:border-b dark:border-[#2A2A2A]">
                <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
                    <h1 className="text-4xl font-extrabold sm:text-5xl">{t('about.heroTitle')}</h1>
                    <p className="mt-4 text-xl text-blue-100 max-w-2xl mx-auto dark:text-gray-300">
                        {t('about.heroSubtitle')}
                    </p>
                </div>
            </section>

            {/* Our Story */}
            <section className="py-24">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-3xl font-bold text-foreground mb-6 dark:text-white">{t('about.storyTitle')}</h2>
                            <p className="text-lg text-secondary-foreground opacity-90 mb-6 leading-relaxed dark:text-[#CFCFCF]">
                                {t('about.storyP1')}
                            </p>
                            <p className="text-lg text-secondary-foreground opacity-90 mb-6 leading-relaxed dark:text-[#CFCFCF]">
                                {t('about.storyP2')}
                            </p>
                            <div className="grid grid-cols-2 gap-8 mt-10">
                                <div>
                                    <p className="text-4xl font-extrabold text-blue-600 dark:text-[#8B3A2C]">{t('about.expValue')}</p>
                                    <p className="text-sm font-medium text-gray-500 uppercase mt-1 dark:text-gray-400">{t('about.expLabel')}</p>
                                </div>
                                <div>
                                    <p className="text-4xl font-extrabold text-blue-600 dark:text-[#8B3A2C]">{t('about.movesValue')}</p>
                                    <p className="text-sm font-medium text-gray-500 uppercase mt-1 dark:text-gray-400">{t('about.movesLabel')}</p>
                                </div>
                            </div>
                        </div>
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3] bg-gray-100 dark:bg-[#1C1C1C]">
                            <Image
                                src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=1200"
                                alt="Our Team"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className="bg-gray-50  py-24 transition-colors dark:bg-[#121212] border-y dark:border-[#2A2A2A]">
                <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold text-foreground mb-16 dark:text-white">{t('about.valuesTitle')}</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {values.map((value) => (
                            <div key={value.title} className="bg-white  p-10 rounded-2xl shadow-sm border border-gray-100 dark:bg-[#1C1C1C] dark:border-[#2A2A2A] transition-all hover:-translate-y-1 hover:shadow-md">
                                <h3 className="text-xl font-bold text-foreground mb-4 dark:text-white">{value.title}</h3>
                                <p className="text-secondary-foreground opacity-80 leading-relaxed dark:text-[#CFCFCF]">{value.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24">
                <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold text-foreground mb-6 dark:text-white">{t('about.ctaTitle')}</h2>
                    <p className="text-lg text-secondary-foreground opacity-90 mb-10 max-w-2xl mx-auto dark:text-[#CFCFCF]">
                        {t('about.ctaSubtitle')}
                    </p>
                    <Link href="/quote">
                        <Button size="lg" variant="primary">{t('about.ctaButton')}</Button>
                    </Link>
                </div>
            </section>
        </div>
    );
}
