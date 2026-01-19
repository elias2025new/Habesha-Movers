"use client";

import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

const Footer = () => {
    const { t } = useLanguage();
    return (
        <footer className="bg-[#121212] text-gray-300 border-t border-white/5 pt-20 pb-10">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand section */}
                    <div className="space-y-6">
                        <Link href="/" className="flex items-center gap-2 group">
                            <Image
                                src="/images/habesha-logo-svg.svg"
                                alt="Habesha Movers"
                                width={180}
                                height={60}
                                className="h-16 w-auto object-contain brightness-125"
                                priority
                            />
                        </Link>
                        <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
                            {t('footer.brandSubtitle')}
                        </p>
                        <div className="flex space-x-4">
                            {[Facebook, Instagram, Twitter].map((Icon, i) => (
                                <a
                                    key={i}
                                    href="#"
                                    className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#8B3A2C] hover:text-white transition-all duration-300 cursor-pointer"
                                >
                                    <Icon className="h-5 w-5" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-6">
                        <h3 className="text-white font-bold text-lg tracking-wide uppercase text-sm">
                            {t('footer.quickLinks')}
                        </h3>
                        <ul className="space-y-4">
                            {[
                                { name: t('nav.services'), href: '/services' },
                                { name: t('nav.locations'), href: '/locations' },
                                { name: t('nav.about'), href: '/about' },
                                { name: t('nav.contact'), href: '/contact' },
                            ].map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-gray-400 hover:text-[#F5A623] hover:translate-x-1 transition-all duration-300 inline-block cursor-pointer"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Our Services */}
                    <div className="space-y-6">
                        <h3 className="text-white font-bold text-lg tracking-wide uppercase text-sm">
                            {t('footer.ourServices')}
                        </h3>
                        <ul className="space-y-4 text-sm">
                            {[
                                { name: t('service.house'), href: '/services/house-moving' },
                                { name: t('service.office'), href: '/services/office-relocation' },
                                { name: t('service.packing'), href: '/services/packing' },
                                { name: t('footer.loadingUnloading'), href: '/services/not-available' },
                            ].map((service) => (
                                <li key={service.name}>
                                    <Link
                                        href={service.href}
                                        className="text-gray-400 hover:text-[#F5A623] hover:translate-x-1 transition-all duration-300 inline-block cursor-pointer"
                                    >
                                        {service.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-6">
                        <h3 className="text-white font-bold text-lg tracking-wide uppercase text-sm">
                            {t('footer.contactUs')}
                        </h3>
                        <ul className="space-y-5">
                            <li className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-xl bg-[#8B3A2C]/10 flex items-center justify-center shrink-0">
                                    <MapPin className="h-5 w-5 text-[#8B3A2C]" />
                                </div>
                                <span className="text-gray-400 text-sm">{t('footer.address')}</span>
                            </li>
                            <li className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-xl bg-[#F5A623]/10 flex items-center justify-center shrink-0">
                                    <Phone className="h-5 w-5 text-[#F5A623]" />
                                </div>
                                <a href="tel:0999220000" className="text-gray-400 text-sm hover:text-white transition-colors cursor-pointer">0999220000</a>
                            </li>
                            <li className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-xl bg-[#8B3A2C]/10 flex items-center justify-center shrink-0">
                                    <Mail className="h-5 w-5 text-[#8B3A2C]" />
                                </div>
                                <a href="mailto:info@habeshamovers.com" className="text-gray-400 text-sm hover:text-white transition-colors cursor-pointer">info@habeshamovers.com</a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-500 text-sm">
                        &copy; {new Date().getFullYear()} Habesha Movers. {t('footer.rights')}
                    </p>
                    <div className="flex gap-8 text-xs text-gray-600">
                        <Link href="/privacy" className="hover:text-gray-400 transition-colors cursor-pointer">Privacy Policy</Link>
                        <Link href="/terms" className="hover:text-gray-400 transition-colors cursor-pointer">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
