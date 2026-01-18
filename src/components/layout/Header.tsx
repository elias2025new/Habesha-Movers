"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Menu, X, Phone, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { useLanguage } from '../LanguageContext';
import { Globe } from 'lucide-react';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [mobileServicesOpen, setMobileServicesOpen] = useState(true);
    const phoneControls = useAnimation();
    const { language, setLanguage, t } = useLanguage();

    useEffect(() => {
        let intervalId: NodeJS.Timeout;

        const jiggle = async () => {
            await phoneControls.start({
                rotate: [0, -15, 15, -15, 15, 0],
                scale: [1, 1.2, 1.2, 1.2, 1.2, 1],
                transition: { duration: 0.5 }
            });
        };

        const timeoutId = setTimeout(() => {
            jiggle();
            intervalId = setInterval(jiggle, 120000); // 2 minutes
        }, 10000); // 10 seconds

        return () => {
            clearTimeout(timeoutId);
            if (intervalId) clearInterval(intervalId);
        };
    }, [phoneControls]);

    const navigation = [
        { name: t('nav.services'), href: '/services', hasDropdown: true },
        { name: t('nav.locations'), href: '/locations' },
        /* { name: 'Guides & Resources', href: '/about' }, */
        { name: t('nav.about'), href: '/about' },
        { name: t('nav.contact'), href: '/contact' },
    ];

    const services = [
        { name: t('service.house'), href: '/services/house-moving' },
        { name: t('service.office'), href: '/services/office-relocation' },
        { name: t('service.packing'), href: '/services/packing' },
        { name: t('service.international'), href: '/services/not-available' },
        { name: t('service.storage'), href: '/services/not-available' },
        { name: t('service.car'), href: '/services/not-available' },
    ];

    return (
        <div className="fixed w-full z-50">
            {/* Top Bar */}
            <div className="bg-primary text-white text-xs py-2">
                <div className="max-w-7xl mx-auto px-6 lg:px-8 flex justify-between items-center font-medium">
                    <div className="flex items-center gap-2">
                        <span>Moving company in Addis Ababa</span>
                        <span className="opacity-50">||</span>
                        <a href="tel:0999220000" className="hover:text-white/80 transition-colors">0999220000</a>
                    </div>
                    <span>{t('header.licensed')}</span>
                </div>
            </div>

            {/* Main Header */}
            <header className="bg-white/95    backdrop-blur-md shadow-sm transition-colors">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex h-24 items-center gap-12">

                        {/* Logo */}
                        <div className="flex items-center flex-shrink-0">
                            <Link href="/" className="flex items-center gap-2 group">
                                <Image
                                    src="/images/habesha-logo-svg.svg"
                                    alt="Habesha Movers"
                                    width={200}
                                    height={200}
                                    className="h-20 sm:h-22 lg:h-24 w-auto object-contain  transition-all duration-300"
                                    priority
                                    unoptimized
                                />
                            </Link>
                        </div>

                        {/* Desktop Navigation */}
                        <nav className="hidden lg:flex space-x-8 items-center">
                            {navigation.map((item) => (
                                <div key={item.name} className="relative group">
                                    <Link
                                        href={item.href}
                                        className="flex items-center gap-1 text-sm font-semibold text-gray-700 hover:text-primary transition-colors py-2"
                                    >
                                        {item.name}
                                        {item.hasDropdown && (
                                            <ChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180" />
                                        )}
                                    </Link>

                                    {/* Dropdown Menu */}
                                    {item.hasDropdown && (
                                        <div className="absolute top-full left-0 w-64 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0">
                                            <div className="bg-white/80  backdrop-blur-md rounded-xl shadow-xl border border-gray-200/50  overflow-hidden">
                                                <div className="p-2 space-y-1">
                                                    {services.map((service) => (
                                                        <Link
                                                            key={service.name}
                                                            href={service.href}
                                                            className="block px-4 py-2.5 text-sm font-medium text-gray-600  hover:bg-primary/5 hover:text-primary  rounded-lg transition-colors"
                                                        >
                                                            {service.name}
                                                        </Link>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </nav>

                        {/* Right: Actions */}
                        <div className="hidden lg:flex items-center space-x-4 ml-auto">


                            <div className="border border-primary rounded-md px-4 py-2 text-primary font-bold flex items-center gap-2 hover:bg-primary hover:text-white   hover: transition-colors cursor-pointer">
                                <div className="flex items-center gap-2">
                                    <motion.div animate={phoneControls}>
                                        <Phone className="h-4 w-4" />
                                    </motion.div>
                                    <a href="tel:0999220000">{t('header.callUsAt')}</a>
                                </div>
                            </div>

                            {/* Language Switcher */}
                            <button
                                onClick={() => setLanguage(language === 'en' ? 'am' : 'en')}
                                className="flex items-center gap-2 px-3 py-2 rounded-md border border-gray-200  hover:bg-gray-100  transition-colors text-sm font-bold"
                            >
                                <Globe className="h-4 w-4" />
                                {language === 'en' ? 'አማርኛ' : 'English'}
                            </button>
                        </div>

                        {/* Mobile Menu Button */}
                        <div className="lg:hidden flex items-center space-x-1 ml-auto">
                            <a
                                href="tel:0999220000"
                                className="header-phone-cta flex items-center justify-center gap-1 px-2 py-1.5 rounded-full bg-primary text-white shadow-lg active:scale-95 transition-transform"
                                aria-label="Call Us"
                            >
                                <Phone className="h-3.5 w-3.5" />
                                <span className="text-[10px] font-bold whitespace-nowrap">{t('header.callUs')}</span>
                            </a>
                            <button
                                onClick={() => setLanguage(language === 'en' ? 'am' : 'en')}
                                className="flex items-center gap-1 px-1.5 py-1.5 rounded-md border border-gray-200  text-[9px] font-bold"
                            >
                                <Globe className="h-3 w-3" />
                                {language === 'en' ? 'አማ' : 'EN'}
                            </button>

                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                className="text-gray-600  hover:text-gray-900  focus:outline-none"
                            >
                                {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Navigation */}
                {isOpen && (
                    <div className="lg:hidden bg-white  border-b border-gray-100  animate-in slide-in-from-top duration-300 shadow-xl max-h-[calc(100vh-80px)] overflow-y-auto">
                        <div className="px-4 pt-4 pb-6 space-y-2">
                            {navigation.map((item) => (
                                <div key={item.name}>
                                    {item.hasDropdown ? (
                                        <>
                                            <button
                                                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                                                className="flex w-full items-center justify-between px-3 py-3 text-base font-medium text-gray-600  hover:text-primary  hover:bg-gray-50  rounded-lg"
                                            >
                                                {item.name}
                                                <ChevronDown className={`h-5 w-5 transition-transform ${mobileServicesOpen ? 'rotate-180' : ''}`} />
                                            </button>
                                            {mobileServicesOpen && (
                                                <div className="pl-6 space-y-1">
                                                    {services.map((service) => (
                                                        <Link
                                                            key={service.name}
                                                            href={service.href}
                                                            className="block px-3 py-2 text-sm font-medium text-gray-500  hover:text-primary  rounded-lg"
                                                            onClick={() => setIsOpen(false)}
                                                        >
                                                            {service.name}
                                                        </Link>
                                                    ))}
                                                </div>
                                            )}
                                        </>
                                    ) : (
                                        <Link
                                            href={item.href}
                                            className="block px-3 py-3 text-base font-medium text-gray-600  hover:text-primary  hover:bg-gray-50  rounded-lg"
                                            onClick={() => setIsOpen(false)}
                                        >
                                            {item.name}
                                        </Link>
                                    )}
                                </div>
                            ))}
                            <div className="pt-4 mt-4 border-t border-gray-100 ">
                                <Button className="w-full justify-center gap-2 font-bold" variant="primary">
                                    <Phone className="h-4 w-4" />
                                    {t('header.callUs')}
                                </Button>
                            </div>
                        </div>
                    </div>
                )}
            </header>
        </div>
    );
};

export default Header;
