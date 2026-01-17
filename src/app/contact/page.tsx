"use client";

import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { useLanguage } from '@/components/LanguageContext';

export default function ContactPage() {
    const { t } = useLanguage();

    return (
        <div className="bg-background transition-colors">
            {/* Hero Section */}
            <section className="bg-primary dark:bg-primary/90 py-20 text-white transition-colors">
                <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
                    <h1 className="text-4xl font-extrabold sm:text-5xl">{t('contact.heroTitle')}</h1>
                    <p className="mt-4 text-xl text-white/80 max-w-2xl mx-auto">
                        {t('contact.heroSubtitle')}
                    </p>
                </div>
            </section>

            <section className="py-24">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                        {/* Contact Info */}
                        <div>
                            <h2 className="text-3xl font-bold text-foreground mb-8">{t('contact.title')}</h2>
                            <p className="text-lg text-secondary-foreground opacity-90 mb-12">
                                {t('contact.subtitle')}
                            </p>

                            <div className="space-y-8">
                                <div className="flex items-start space-x-4">
                                    <div className="h-12 w-12 rounded-xl bg-primary/5 dark:bg-primary/20 flex items-center justify-center shrink-0">
                                        <MapPin className="h-6 w-6 text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-foreground">{t('contact.officeTitle')}</h3>
                                        <p className="text-secondary-foreground opacity-80 mt-1">{t('contact.officeAddr')}</p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="h-12 w-12 rounded-xl bg-primary/5 dark:bg-primary/20 flex items-center justify-center shrink-0">
                                        <Phone className="h-6 w-6 text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-foreground">{t('contact.phoneTitle')}</h3>
                                        <p className="text-secondary-foreground opacity-80 mt-1">+251 911 123 456</p>
                                        <p className="text-secondary-foreground opacity-80">+251 911 789 012</p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="h-12 w-12 rounded-xl bg-primary/5 dark:bg-primary/20 flex items-center justify-center shrink-0">
                                        <Mail className="h-6 w-6 text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-foreground">{t('contact.emailTitle')}</h3>
                                        <p className="text-secondary-foreground opacity-80 mt-1">info@habeshamovers.com</p>
                                        <p className="text-secondary-foreground opacity-80">support@habeshamovers.com</p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="h-12 w-12 rounded-xl bg-primary/5 dark:bg-primary/20 flex items-center justify-center shrink-0">
                                        <Clock className="h-6 w-6 text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-foreground">{t('contact.hoursTitle')}</h3>
                                        <p className="text-secondary-foreground opacity-80 mt-1">{t('contact.hoursWeekday')}</p>
                                        <p className="text-secondary-foreground opacity-80">{t('contact.hoursSaturday')}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Google Map Embed Placeholder */}
                        <div className="h-full min-h-[400px] w-full bg-gray-100 dark:bg-gray-800 rounded-3xl overflow-hidden relative shadow-lg">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126115.11545465243!2d38.7188!3d9.006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b85cef5ab402d%3A0x8467b6b037a24c49!2sAddis%20Ababa!5e0!3m2!1sen!2set!4v1620000000000!5m2!1sen!2set"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen={true}
                                loading="lazy"
                                title="Google Map"
                                className="dark:grayscale dark:invert dark:opacity-80"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
