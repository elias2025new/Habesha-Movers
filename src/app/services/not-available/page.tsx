"use client";

import React from 'react';
import Link from 'next/link';
import { Construction, ArrowLeft, Phone } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { useLanguage } from '@/components/LanguageContext';

export default function NotAvailablePage() {
    const { t } = useLanguage();

    return (
        <div className="bg-white dark:bg-gray-900 min-h-screen flex items-center justify-center px-6 transition-colors">
            <div className="max-w-md w-full text-center space-y-8">
                <div className="w-24 h-24 bg-primary/5 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Construction className="w-12 h-12 text-primary" />
                </div>

                <div>
                    <h1 className="text-3xl font-bold text-foreground mb-4">{t('notAvailable.title')}</h1>
                    <p className="text-muted-foreground leading-relaxed">
                        {t('notAvailable.description')}
                    </p>
                </div>

                <div className="flex flex-col gap-3">
                    <Link href="/contact">
                        <Button className="w-full bg-primary hover:bg-primary/90 text-white py-6 rounded-xl font-bold">
                            {t('notAvailable.contactSupport')}
                        </Button>
                    </Link>

                    <Link href="/services">
                        <Button variant="ghost" className="w-full text-secondary-foreground hover:text-foreground hover:bg-muted py-6 rounded-xl flex items-center justify-center gap-2">
                            <ArrowLeft className="w-4 h-4" />
                            {t('notAvailable.backToServices')}
                        </Button>
                    </Link>
                </div>

                <div className="pt-8 border-t border-muted">
                    <p className="text-sm text-muted-foreground mb-2">{t('notAvailable.immediateHelp')}</p>
                    <a href="tel:0999220000" className="flex items-center justify-center gap-2 text-primary font-bold hover:underline">
                        <Phone className="w-4 h-4" />
                        0999220000
                    </a>
                </div>
            </div>
        </div>
    );
}
