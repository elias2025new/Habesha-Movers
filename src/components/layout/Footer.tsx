"use client";

import Link from 'next/link';
import { Truck, Phone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

const Footer = () => {
    const { t } = useLanguage();
    return (
        <footer className="bg-gray-900 text-gray-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Brand section */}
                    <div className="col-span-1 md:col-span-1">
                        <Link href="/" className="flex items-center space-x-2 text-white mb-4">
                            <Truck className="h-8 w-8 text-blue-400" />
                            <span className="text-xl font-bold">Habesha Movers</span>
                        </Link>
                        <p className="text-sm leading-relaxed">
                            {t('footer.brandSubtitle')}
                        </p>
                        <div className="flex space-x-4 mt-6">
                            <a href="#" className="hover:text-blue-400 transition-colors"><Facebook className="h-5 w-5" /></a>
                            <a href="#" className="hover:text-pink-400 transition-colors"><Instagram className="h-5 w-5" /></a>
                            <a href="#" className="hover:text-blue-300 transition-colors"><Twitter className="h-5 w-5" /></a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">{t('footer.quickLinks')}</h3>
                        <ul className="space-y-2 text-sm">
                            <li><Link href="/" className="hover:text-blue-400 transition-colors">{t('footer.home')}</Link></li>
                            <li><Link href="/services" className="hover:text-blue-400 transition-colors">{t('footer.services')}</Link></li>
                            <li><Link href="/about" className="hover:text-blue-400 transition-colors">{t('footer.about')}</Link></li>
                            <li><Link href="/contact" className="hover:text-blue-400 transition-colors">{t('footer.contact')}</Link></li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">{t('footer.ourServices')}</h3>
                        <ul className="space-y-2 text-sm">
                            <li><Link href="/services/house-moving" className="hover:text-blue-400 transition-colors">{t('service.house')}</Link></li>
                            <li><Link href="/services/office-relocation" className="hover:text-blue-400 transition-colors">{t('service.office')}</Link></li>
                            <li><Link href="/services/packing" className="hover:text-blue-400 transition-colors">{t('service.packing')}</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">{t('footer.contactUs')}</h3>
                        <ul className="space-y-4 text-sm">
                            <li className="flex items-start space-x-3">
                                <MapPin className="h-5 w-5 text-blue-400 shrink-0" />
                                <span>Bole, Addis Ababa, Ethiopia</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <Phone className="h-5 w-5 text-blue-400 shrink-0" />
                                <span>0999220000</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <Mail className="h-5 w-5 text-blue-400 shrink-0" />
                                <span>info@habeshamovers.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 mt-12 pt-8 text-sm text-center">
                    <p>&copy; {new Date().getFullYear()} Habesha Movers. {t('footer.rights')}</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
