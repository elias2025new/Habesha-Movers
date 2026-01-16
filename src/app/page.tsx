import Hero from '@/components/home/Hero';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import ProfessionalServices from '@/components/home/ProfessionalServices';
import ParticleBackground from '@/components/home/ParticleBackground';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';
import Image from 'next/image';

import ScrollReveal from '@/components/ui/ScrollReveal';

export default function Home() {
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
                <h2 className="text-3xl font-bold">Ready to make your move?</h2>
                <p className="mt-2 text-lg text-white/90">Contact us today and get your free customized quote in minutes.</p>
              </div>
              <Link href="/quote">
                <Button size="lg" className="bg-white text-primary hover:bg-gray-100 border-none font-bold">
                  Get Started Now
                </Button>
              </Link>
            </div>
          </section>
        </ScrollReveal>
      </div>
    </div>
  );
}
