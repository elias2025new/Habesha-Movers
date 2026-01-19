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
          <section className="bg-gray-50 dark:bg-[#1A1A1A] py-20 relative overflow-hidden transition-colors duration-300">
            {/* Subtle Texture or Pattern if needed, for now just clean */}
            <div className="absolute inset-0 bg-gradient-to-br from-white to-transparent dark:from-white/5 opacity-50 pointer-events-none" />

            <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
              <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-6 leading-tight tracking-tight">
                {t('cta.title')}
              </h2>
              <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
                {t('cta.subtitle')}
              </p>

              <div className="flex justify-center">
                <Link href="/quote">
                  <Button
                    size="lg"
                    className="bg-[#8B3A2C] hover:bg-[#7A3226] text-white px-10 py-7 rounded-full text-lg font-bold shadow-xl hover:shadow-[#8B3A2C]/40 hover:scale-105 transition-all duration-300"
                  >
                    {t('cta.button')}
                  </Button>
                </Link>
              </div>
            </div>
          </section>
        </ScrollReveal>
      </div>
    </div>
  );
}
