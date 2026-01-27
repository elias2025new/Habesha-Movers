"use client";

import { Mail, Phone, MapPin, Clock, Shield, CheckCircle } from 'lucide-react';
import { useLanguage } from '@/components/LanguageContext';
import QuoteForm from '@/components/home/QuoteForm';

export default function ContactPageClient() {
    const { t } = useLanguage();

    return (
        <div className="bg-background transition-colors dark:bg-[#121212]">
            {/* Hero Section */}
            <section className="bg-primary py-20 text-white transition-colors dark:bg-[#1C1C1C] dark:border-b dark:border-[#2A2A2A]">
                <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
                    <h1 className="text-4xl font-extrabold sm:text-5xl">{t('contact.hero.title')}</h1>
                    <p className="mt-4 text-xl text-white/90 max-w-3xl mx-auto">
                        {t('contact.hero.subtitle')}
                    </p>
                </div>
            </section>

            <section className="py-24">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                        {/* Left Column: Contact Info + Map */}
                        <div className="space-y-12">
                            <div>
                                <h2 className="text-3xl font-bold text-foreground mb-8 dark:text-white">{t('contact.info.title')}</h2>
                                <p className="text-lg text-gray-600 mb-12 dark:text-gray-300">
                                    {t('contact.info.subtitle')}
                                </p>

                                <div className="space-y-8">
                                    <div className="flex items-start space-x-4">
                                        <div className="h-12 w-12 rounded-xl bg-primary/5 flex items-center justify-center shrink-0 dark:bg-primary/10">
                                            <Shield className="h-6 w-6 text-primary dark:text-[#F5A623]" />
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-bold text-foreground dark:text-white">{t('contact.info.businessName')}</h3>
                                            <p className="text-gray-600 mt-1 dark:text-gray-400">
                                                {t('contact.info.habeshaMovers')}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start space-x-4">
                                        <div className="h-12 w-12 rounded-xl bg-primary/5 flex items-center justify-center shrink-0 dark:bg-primary/10">
                                            <MapPin className="h-6 w-6 text-primary dark:text-[#F5A623]" />
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-bold text-foreground dark:text-white">{t('contact.info.officeLocation')}</h3>
                                            <p className="text-gray-600 mt-1 dark:text-gray-400">
                                                {t('contact.info.officeAddress')}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start space-x-4">
                                        <div className="h-12 w-12 rounded-xl bg-primary/5 flex items-center justify-center shrink-0 dark:bg-primary/10">
                                            <Phone className="h-6 w-6 text-primary dark:text-[#F5A623]" />
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-bold text-foreground dark:text-white">{t('contact.info.phoneNumbers')}</h3>
                                            <a href="tel:0999220000" className="block text-gray-600 mt-1 dark:text-gray-400 hover:text-primary dark:hover:text-[#F5A623] transition-colors font-medium">0999220000</a>
                                            <a href="tel:0987210000" className="block text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-[#F5A623] transition-colors font-medium">0987210000</a>
                                        </div>
                                    </div>

                                    <div className="flex items-start space-x-4">
                                        <div className="h-12 w-12 rounded-xl bg-primary/5 flex items-center justify-center shrink-0 dark:bg-primary/10">
                                            <Mail className="h-6 w-6 text-primary dark:text-[#F5A623]" />
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-bold text-foreground dark:text-white">{t('contact.info.emailAddress')}</h3>
                                            <p className="text-gray-600 mt-1 dark:text-gray-400">{t('contact.info.email1')}</p>
                                            <p className="text-gray-600 dark:text-gray-400">{t('contact.info.email2')}</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start space-x-4">
                                        <div className="h-12 w-12 rounded-xl bg-primary/5 flex items-center justify-center shrink-0 dark:bg-primary/10">
                                            <Clock className="h-6 w-6 text-primary dark:text-[#F5A623]" />
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-bold text-foreground dark:text-white">{t('contact.info.businessHours')}</h3>
                                            <p className="text-gray-600 mt-1 dark:text-gray-400">{t('contact.info.weekday')}</p>
                                            <p className="text-gray-600 dark:text-gray-400">{t('contact.info.saturday')}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Map Section */}
                            <div>
                                <h3 className="text-2xl font-bold text-foreground mb-4 dark:text-white">{t('contact.visit.title')}</h3>
                                <p className="text-gray-600 mb-6 dark:text-gray-400">
                                    {t('contact.visit.subtitle')}
                                </p>
                                <div className="h-[400px] w-full bg-gray-100 rounded-3xl overflow-hidden relative shadow-lg dark:bg-[#1C1C1C]">
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.3076!2d38.7635!3d9.0320!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b85d8b1f1e1e1%3A0x1234567890abcdef!2sGurd%20Shola%2C%20Addis%20Ababa!5e0!3m2!1sen!2set!4v1620000000000!5m2!1sen!2set"
                                        width="100%"
                                        height="100%"
                                        style={{ border: 0 }}
                                        allowFullScreen={true}
                                        loading="lazy"
                                        title={t('contact.visit.mapTitle')}
                                    ></iframe>
                                </div>
                            </div>

                            {/* Service Area Note */}
                            <div className="bg-primary/5 dark:bg-primary/10 rounded-2xl p-6 border border-primary/10 dark:border-primary/20">
                                <div className="flex items-start gap-4">
                                    <CheckCircle className="h-6 w-6 text-primary dark:text-[#F5A623] shrink-0 mt-1" />
                                    <div>
                                        <h4 className="text-lg font-bold text-foreground dark:text-white mb-2">{t('contact.coverage.title')}</h4>
                                        <p className="text-gray-700 dark:text-gray-300">
                                            {t('contact.coverage.content')}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Trust Statement */}
                            <div className="bg-green-50 dark:bg-green-900/10 rounded-2xl p-6 border border-green-200 dark:border-green-800/30">
                                <div className="flex items-start gap-4">
                                    <Shield className="h-6 w-6 text-green-600 dark:text-green-400 shrink-0 mt-1" />
                                    <div>
                                        <h4 className="text-lg font-bold text-foreground dark:text-white mb-2">{t('contact.privacy.title')}</h4>
                                        <p className="text-gray-700 dark:text-gray-300">
                                            {t('contact.privacy.content')}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Column: Quote Form */}
                        <div className="lg:sticky lg:top-24 h-fit">
                            <h2 className="text-3xl font-bold text-foreground mb-6 dark:text-white">{t('contact.quote.title')}</h2>
                            <p className="text-secondary-foreground dark:text-gray-400 mb-8">
                                {t('contact.quote.subtitle')}
                            </p>
                            <QuoteForm />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
