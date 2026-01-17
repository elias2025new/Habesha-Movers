"use client";

import QuoteForm from '@/components/quote/QuoteForm';
import { useLanguage } from '@/components/LanguageContext';

export default function QuotePage() {
    const { t } = useLanguage();

    return (
        <div className="bg-background dark:bg-gray-900/50 min-h-screen pt-24 pb-24 transition-colors">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-extrabold text-foreground sm:text-5xl mb-4">{t('quotePage.title')}</h1>
                    <p className="text-xl text-secondary-foreground opacity-90 max-w-2xl mx-auto">
                        {t('quotePage.subtitle')}
                    </p>
                </div>

                <QuoteForm />
            </div>
        </div>
    );
}
