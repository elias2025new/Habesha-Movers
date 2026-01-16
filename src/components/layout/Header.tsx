"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Menu, X, Phone, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { ThemeToggle } from '../ThemeToggle';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [mobileServicesOpen, setMobileServicesOpen] = useState(true);
    const phoneControls = useAnimation();

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
        { name: 'Moving Services', href: '/services', hasDropdown: true },
        { name: 'Locations', href: '/contact' },
        /* { name: 'Guides & Resources', href: '/about' }, */
        { name: 'About Us', href: '/about' },
        { name: 'Contact Us', href: '/contact' },
    ];

    const services = [
        { name: 'House Moving', href: '/services/house-moving' },
        { name: 'Office Relocation', href: '/services/office-relocation' },
        { name: 'Packing Services', href: '/services/packing' },
        { name: 'International Moving', href: '/services/international' },
        { name: 'Storage Solutions', href: '/services/storage' },
        { name: 'Car Transportation', href: '/services/car-transport' },
    ];

    return (
        <div className="fixed w-full z-50">
            {/* Top Bar */}
            <div className="bg-primary text-white text-xs py-2 hidden md:block">
                <div className="max-w-7xl mx-auto px-6 lg:px-8 flex justify-end space-x-6 font-medium">
                    <span>Licensed</span>
                </div>
            </div>

            {/* Main Header */}
            <header className="bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-sm transition-colors">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex h-24 items-center gap-12">

                        {/* Logo */}
                        <div className="flex items-center flex-shrink-0">
                            <Link href="/" className="flex items-center gap-2 group">
                                <Image
                                    src="/images/habesha-logo-pro.png"
                                    alt="Habesha Movers"
                                    width={280}
                                    height={100}
                                    className="h-24 w-auto object-contain"
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
                                        className="flex items-center gap-1 text-sm font-semibold text-gray-700 dark:text-gray-200 hover:text-primary dark:hover:text-primary transition-colors py-2"
                                    >
                                        {item.name}
                                        {item.hasDropdown && (
                                            <ChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180" />
                                        )}
                                    </Link>

                                    {/* Dropdown Menu */}
                                    {item.hasDropdown && (
                                        <div className="absolute top-full left-0 w-64 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0">
                                            <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-md rounded-xl shadow-xl border border-gray-200/50 dark:border-gray-700/50 overflow-hidden">
                                                <div className="p-2 space-y-1">
                                                    {services.map((service) => (
                                                        <Link
                                                            key={service.name}
                                                            href={service.href}
                                                            className="block px-4 py-2.5 text-sm font-medium text-gray-600 dark:text-gray-300 hover:bg-primary/5 hover:text-primary dark:hover:text-primary rounded-lg transition-colors"
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
                            <ThemeToggle />
                            <div className="border border-primary rounded-md px-4 py-2 text-primary font-bold flex items-center gap-2 hover:bg-primary hover:text-white transition-colors cursor-pointer">
                                <div className="flex items-center gap-2">
                                    <motion.div animate={phoneControls}>
                                        <Phone className="h-4 w-4" />
                                    </motion.div>
                                    <a href="tel:0999220000">Call Us - 0999220000</a>
                                </div>
                            </div>
                        </div>

                        {/* Mobile Menu Button */}
                        <div className="lg:hidden flex items-center space-x-4 ml-auto">
                            <ThemeToggle />
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white focus:outline-none"
                            >
                                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Navigation */}
                {isOpen && (
                    <div className="lg:hidden bg-white dark:bg-gray-900 border-b border-gray-100 dark:border-gray-800 animate-in slide-in-from-top duration-300 shadow-xl max-h-[calc(100vh-80px)] overflow-y-auto">
                        <div className="px-4 pt-4 pb-6 space-y-2">
                            {navigation.map((item) => (
                                <div key={item.name}>
                                    {item.hasDropdown ? (
                                        <>
                                            <button
                                                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                                                className="flex w-full items-center justify-between px-3 py-3 text-base font-medium text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg"
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
                                                            className="block px-3 py-2 text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary rounded-lg"
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
                                            className="block px-3 py-3 text-base font-medium text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg"
                                            onClick={() => setIsOpen(false)}
                                        >
                                            {item.name}
                                        </Link>
                                    )}
                                </div>
                            ))}
                            <div className="pt-4 mt-4 border-t border-gray-100 dark:border-gray-700">
                                <Button className="w-full justify-center gap-2 font-bold" variant="primary">
                                    <Phone className="h-4 w-4" />
                                    Call Us Now
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
