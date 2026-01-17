"use client";

import { motion, AnimatePresence } from 'framer-motion';
import { Phone, MessageCircle } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useLanguage } from '../LanguageContext';

export default function MobileCTA() {
    const { t } = useLanguage();
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Initial show after 2s
        const initialTimer = setTimeout(() => {
            setIsVisible(true);
            setTimeout(() => setIsVisible(false), 6000); // Stay for 6s
        }, 2000);

        // Repeat every 50s
        const interval = setInterval(() => {
            setIsVisible(true);
            setTimeout(() => setIsVisible(false), 6000); // Stay for 6s
        }, 50000);

        return () => {
            clearTimeout(initialTimer);
            clearInterval(interval);
        };
    }, []);

    return (
        <div className="mobile-cta lg:hidden fixed bottom-6 right-6 z-[9999] flex flex-col items-end gap-4">
            {/* Telegram Button */}
            <Link href="https://t.me/wendeyfaraw" target="_blank">
                <motion.div
                    className="flex items-center justify-center w-12 h-12 bg-[#229ED9] text-white rounded-full shadow-lg border border-white/20 active:scale-90 transition-transform"
                    whileHover={{ scale: 1.05 }}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.1 }}
                >
                    <MessageCircle className="h-6 w-6" />
                </motion.div>
            </Link>

            <div className="flex items-center gap-3">
                {/* Pop-out Label */}
                <AnimatePresence>
                    {isVisible && (
                        <motion.div
                            initial={{ opacity: 0, x: 20, scale: 0.8 }}
                            animate={{ opacity: 1, x: 0, scale: 1 }}
                            exit={{ opacity: 0, x: 20, scale: 0.8 }}
                            transition={{
                                type: "spring",
                                stiffness: 260,
                                damping: 20
                            }}
                            className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-md px-4 py-2 rounded-full shadow-large border border-primary/20 pointer-events-none"
                        >
                            <span className="text-primary font-bold text-sm whitespace-nowrap">
                                {t('header.callUs')}
                            </span>
                        </motion.div>
                    )}
                </AnimatePresence>

                <div className="relative">
                    {/* Pulse Animation Background */}
                    <motion.div
                        className="absolute inset-0 bg-primary/40 rounded-full"
                        animate={{
                            scale: [1, 1.4, 1],
                            opacity: [0.6, 0, 0.6],
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    />

                    {/* Main Floating Button */}
                    <Link href="tel:0999220000">
                        <motion.div
                            className="relative flex items-center justify-center w-14 h-14 bg-primary text-white rounded-full shadow-[0_8px_30px_rgb(139,58,44,0.4)] border border-white/20 active:scale-90 transition-transform"
                            whileHover={{ scale: 1.05 }}
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ type: "spring", stiffness: 260, damping: 20 }}
                        >
                            <Phone className="h-6 w-6 fill-current" />
                        </motion.div>
                    </Link>
                </div>
            </div>
        </div>
    );
}
