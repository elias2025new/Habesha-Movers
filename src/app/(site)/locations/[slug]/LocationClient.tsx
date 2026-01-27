'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
    MapPin,
    ShieldCheck,
    Truck,
    Clock,
    PackageCheck,
    ArrowRight,
    ArrowLeft,
    Phone,
    PhoneCall,
    Building,
    Home,
    Info,
    MessageCircle,
    CheckCircle2
} from 'lucide-react';
import { Button } from '@/components/ui/Button';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { useLanguage } from '@/components/LanguageContext';

// Map style for dark mode
const mapStyle = {
    filter: 'grayscale(100%) invert(90%) contrast(90%) brightness(90%)',
};

interface LocationClientProps {
    location: {
        name: string;
        nameAm: string;
        slug: string;
        description: string;
        descriptionAm: string;
        landmarks: string[];
        landmarksAm: string[];
        image?: string;
        density: string;
        densityAm: string;
        subCity: string;
        subCityAm: string;
        coordinates: {
            lat: number;
            lng: number;
        };
        faqs: {
            question: string;
            questionAm: string;
            answer: string;
            answerAm: string;
        }[];
    };
}

export default function LocationClient({ location }: LocationClientProps) {
    const { t, language } = useLanguage();
    const isAmharic = language === 'am';

    const displayName = isAmharic ? location.nameAm : location.name;
    const displayDescription = isAmharic ? location.descriptionAm : location.description;
    const displayLandmarks = isAmharic ? location.landmarksAm : location.landmarks;
    const displayDensity = isAmharic ? location.densityAm : location.density;
    const displaySubCity = isAmharic ? location.subCityAm : location.subCity;

    const schema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": `Habesha Movers - ${displayName}`,
        "image": "https://habeshamovers.com/images/house-moving-hero.png",
        "url": `https://habeshamovers.com/locations/${location.slug}`,
        "telephone": "+251911123456",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": displayName,
            "addressLocality": "Addis Ababa",
            "addressCountry": "ET"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": location.coordinates.lat,
            "longitude": location.coordinates.lng
        },
        "serviceArea": {
            "@type": "GeoCircle",
            "geoMidpoint": {
                "@type": "GeoCoordinates",
                "latitude": location.coordinates.lat,
                "longitude": location.coordinates.lng
            },
            "geoRadius": "5000"
        },
        "description": displayDescription
    };

    return (
        <div className="bg-white dark:bg-[#121212] min-h-screen transition-colors duration-300">
            {/* JSON-LD Schema */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
            />

            {/* 1. Hero Section */}
            <section className="relative pt-32 pb-20 overflow-hidden">
                <div className="absolute inset-0 z-0 opacity-10 dark:opacity-[0.03] pointer-events-none">
                    <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] bg-repeat" />
                </div>

                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    {/* Back to Locations Link */}
                    <Link
                        href="/locations"
                        className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-[#8B3A2C] dark:hover:text-[#F5A623] transition-colors mb-8 group"
                    >
                        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                        <span className="text-sm font-medium">{t('locationDetail.backToLocations')}</span>
                    </Link>

                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <div className="flex-1 space-y-8">
                            <ScrollReveal animation="slide-right">
                                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#8B3A2C]/10 dark:bg-[#F5A623]/10 text-[#8B3A2C] dark:text-[#F5A623] font-bold text-sm tracking-wide uppercase">
                                    <MapPin className="w-4 h-4" /> {t('locationDetail.hero.badge')} {displayName}
                                </div>
                                <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 dark:text-white leading-tight mt-6">
                                    {t('locationDetail.hero.title1')} <br />
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8B3A2C] to-[#F5A623] dark:from-[#F5A623] dark:to-[#FFD700]">
                                        {displayName}{t('locationDetail.hero.title2')}
                                    </span>
                                </h1>
                                <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl leading-relaxed mt-6">
                                    {displayDescription} {t('locationDetail.hero.trustedBy')} <strong>{displayLandmarks.join(", ")}</strong>{t('locationDetail.hero.tailored')} {displayName} {t('locationDetail.hero.area')}
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 pt-6">
                                    <Link href="/quote">
                                        <Button className="bg-[#8B3A2C] hover:bg-[#702e23] text-white px-8 py-7 rounded-2xl text-lg font-bold shadow-xl transition-all w-full sm:w-auto">
                                            {t('locationDetail.hero.cta1')}
                                        </Button>
                                    </Link>
                                    <Link href="tel:0999220000">
                                        <Button variant="outline" className="border-gray-200 dark:border-white/10 text-gray-700 dark:text-white hover:bg-gray-50 dark:hover:bg-white/5 px-8 py-7 rounded-2xl text-lg font-bold w-full sm:w-auto flex items-center gap-3">
                                            <PhoneCall className="w-5 h-5" /> {t('locationDetail.hero.cta2')}
                                        </Button>
                                    </Link>
                                </div>
                            </ScrollReveal>
                        </div>

                        <div className="flex-1 w-full lg:w-auto">
                            <ScrollReveal animation="slide-left">
                                <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white dark:border-[#1C1C1C]">
                                    <Image
                                        src={location.image || "/images/house-moving-hero.png"}
                                        alt={`Moving in ${displayName}, Addis Ababa`}
                                        width={800}
                                        height={600}
                                        className="object-cover w-full h-[400px] md:h-[500px]"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                                    <div className="absolute bottom-8 left-8 text-white">
                                        <div className="flex items-center gap-2 mb-2">
                                            <CheckCircle2 className="w-5 h-5 text-[#F5A623]" />
                                            <span className="font-semibold">{displayDensity}</span>
                                        </div>
                                        <div className="bg-white/20 backdrop-blur-md px-4 py-2 rounded-xl text-sm font-medium">
                                            {t('locationDetail.hero.serving')} {displayName} {t('locationDetail.hero.subCityArea')}
                                        </div>
                                    </div>
                                </div>
                            </ScrollReveal>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. Services Section */}
            <section className="py-24 bg-gray-50 dark:bg-[#1A1A1A] transition-colors">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                            {t('locationDetail.services.title')} {displayName} {t('locationDetail.services.titleSuffix')}
                        </h2>
                        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                            {t('locationDetail.services.description')} {displayName}.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { icon: Home, title: t('locationDetail.service.house.title'), desc: t('locationDetail.service.house.desc') },
                            { icon: Building, title: t('locationDetail.service.office.title'), desc: t('locationDetail.service.office.desc') },
                            { icon: PackageCheck, title: t('locationDetail.service.packing.title'), desc: t('locationDetail.service.packing.desc') },
                            { icon: Truck, title: t('locationDetail.service.storage.title'), desc: t('locationDetail.service.storage.desc') }
                        ].map((service, idx) => (
                            <div key={idx} className="bg-white dark:bg-[#252525] p-8 rounded-3xl border border-gray-100 dark:border-white/5 shadow-sm hover:shadow-xl transition-all duration-300">
                                <div className="w-14 h-14 rounded-2xl bg-[#8B3A2C]/10 dark:bg-[#F5A623]/10 flex items-center justify-center text-[#8B3A2C] dark:text-[#F5A623] mb-6">
                                    <service.icon className="w-7 h-7" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{service.title}</h3>
                                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{service.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. Map & Location Context */}
            <section className="py-24 max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="space-y-8 order-2 lg:order-1">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                            {t('locationDetail.map.title')} {displayName}
                        </h2>
                        <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                            {t('locationDetail.map.description1')} {displayName} {t('locationDetail.map.description2')}
                        </p>

                        <div className="space-y-4">
                            <h4 className="font-bold text-gray-900 dark:text-white flex items-center gap-2">
                                <span className="flex items-center gap-2"><Info className="w-5 h-5 text-[#8B3A2C] dark:text-[#F5A623]" /> {t('locationDetail.map.landmarks')}</span>
                            </h4>
                            <div className="flex flex-wrap gap-2">
                                {displayLandmarks.map((landmark, i) => (
                                    <span key={i} className="px-4 py-2 bg-gray-100 dark:bg-[#252525] rounded-full text-sm text-gray-700 dark:text-gray-300 font-medium border border-gray-200 dark:border-white/5">
                                        {landmark}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="p-6 rounded-3xl bg-[#8B3A2C] text-white space-y-4">
                            <h3 className="text-xl font-bold">{t('locationDetail.map.fastResponse')} {displayName}</h3>
                            <p className="opacity-90">{t('locationDetail.map.fastResponseDesc')}</p>
                            <Link href="/quote" className="inline-block pt-2">
                                <span className="bg-white text-[#8B3A2C] px-6 py-3 rounded-xl font-bold flex items-center gap-2 hover:bg-[#F5A623] hover:text-black transition-all cursor-pointer">
                                    {t('locationDetail.map.cta')} <ArrowRight className="w-4 h-4" />
                                </span>
                            </Link>
                        </div>
                    </div>

                    <div className="order-1 lg:order-2">
                        <div className="aspect-square w-full relative rounded-[3rem] overflow-hidden border-8 border-gray-50 dark:border-[#1A1A1A] shadow-2xl">
                            <iframe
                                src={`https://www.google.com/maps/embed/v1/view?key=YOUR_API_KEY&center=${location.coordinates.lat},${location.coordinates.lng}&zoom=14&maptype=roadmap`}
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                            {/* Placeholder for the map if API key is missing (standard iframe embed without key would be better for demo) */}
                            <div className="absolute inset-0 bg-gray-200 dark:bg-[#252525] flex flex-col items-center justify-center text-center p-8">
                                <MapPin className="w-16 h-16 text-[#8B3A2C] dark:text-[#F5A623] mb-4 animate-bounce" />
                                <h3 className="text-xl font-bold dark:text-white mb-2">{t('locationDetail.map.mapTitle')} {displayName}</h3>
                                <p className="text-sm text-gray-500 max-w-xs">{t('locationDetail.map.mapDesc')} {displayLandmarks[0]}.</p>
                                <div className="mt-6 px-6 py-2 bg-white dark:bg-black/20 rounded-full text-xs font-bold uppercase tracking-widest opacity-50">
                                    {t('locationDetail.map.mapReady')}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. FAQs Section */}
            <section className="py-24 bg-[#FDF8F7] dark:bg-[#1A1A1A] transition-colors">
                <div className="max-w-4xl mx-auto px-6">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                            {t('locationDetail.faq.title')} {displayName}
                        </h2>
                    </div>

                    <div className="space-y-6">
                        {location.faqs.map((faq, i) => (
                            <div key={i} className="bg-white dark:bg-[#252525] p-8 rounded-3xl border border-gray-100 dark:border-white/5 shadow-sm">
                                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3 flex items-start gap-3">
                                    <MessageCircle className="w-5 h-5 text-[#8B3A2C] dark:text-[#F5A623] flex-shrink-0 mt-0.5" />
                                    {isAmharic ? faq.questionAm : faq.question}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-400 pl-8">
                                    {isAmharic ? faq.answerAm : faq.answer}
                                </p>
                            </div>
                        ))}
                        <div className="bg-white dark:bg-[#252525] p-8 rounded-3xl border border-gray-100 dark:border-white/5 shadow-sm">
                            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3 flex items-start gap-3">
                                <MessageCircle className="w-5 h-5 text-[#8B3A2C] dark:text-[#F5A623] flex-shrink-0 mt-0.5" />
                                {t('locationDetail.faq.howQuote')}
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400 pl-8">
                                {t('locationDetail.faq.howQuoteAnswer')}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. Final CTA */}
            <section className="py-24 text-center px-6">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-8">
                        {t('locationDetail.cta.title')} {displayName}
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
                        {t('locationDetail.cta.description')}
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Link href="/quote">
                            <Button className="bg-[#8B3A2C] hover:bg-[#702e23] text-white px-10 py-8 rounded-2xl text-xl font-bold shadow-lg transition-all w-full sm:w-auto">
                                {t('locationDetail.cta.button1')}
                            </Button>
                        </Link>
                        <Link href="tel:0999220000">
                            <Button variant="outline" className="border-gray-200 dark:border-white/10 text-gray-700 dark:text-white hover:bg-white/5 px-10 py-8 rounded-2xl text-xl font-bold w-full sm:w-auto flex items-center justify-center gap-3">
                                <Phone className="w-6 h-6" /> {t('locationDetail.cta.button2')}
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
