"use client";

import Hero from '@/components/home/Hero';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import ProfessionalServices from '@/components/home/ProfessionalServices';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';
import { useLanguage } from '@/components/LanguageContext';

import ScrollReveal from '@/components/ui/ScrollReveal';

export default function Home() {
  const { t } = useLanguage();

  return (
    <div className="relative">
      <div className="relative z-10">
        <Hero />

        {/* Why Choose Us Section */}
        <ScrollReveal animation="fade-up" delay={0.2}>
          <WhyChooseUs />
        </ScrollReveal>

        {/* Professional Services Section */}
        <ScrollReveal animation="fade-up" delay={0.1}>
          <ProfessionalServices />
        </ScrollReveal>

        {/* CTA Section */}
        <ScrollReveal animation="scale-up" delay={0.2}>
          <section className="bg-primary py-16">
            <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between text-white">
              <div className="mb-8 md:mb-0">
                <h2 className="text-3xl font-bold">{t('cta.title')}</h2>
                <p className="mt-2 text-lg text-white/90">{t('cta.subtitle')}</p>
              </div>
              <Link href="/quote">
                <Button size="lg" className="bg-white text-primary hover:bg-gray-100 border-none font-bold">
                  {t('cta.button')}
                </Button>
              </Link>
            </div>
          </section>
        </ScrollReveal>
      </div>
    </div>
  );
}
