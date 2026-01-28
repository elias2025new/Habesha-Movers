"use client";

import { Button } from "@/components/ui/Button";
import { useLanguage } from "@/components/LanguageContext";
import Link from "next/link";
import { Hammer, ArrowLeft, Phone } from "lucide-react";
import { motion } from "framer-motion";

export default function NotAvailablePage() {
    const { t } = useLanguage();

    return (
        <div className="min-h-[70vh] flex items-center justify-center px-6 py-20 bg-white dark:bg-[#121212] transition-colors">
            <div className="max-w-2xl w-full text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="w-24 h-24 bg-primary/10 dark:bg-[#8B3A2C]/20 text-primary dark:text-[#F5A623] rounded-full flex items-center justify-center mx-auto mb-8"
                >
                    <Hammer className="w-12 h-12" />
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-6"
                >
                    {t("notAvailable.title")}
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="text-lg text-gray-600 dark:text-gray-400 mb-10 leading-relaxed"
                >
                    {t("notAvailable.description")}
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <Link href="/services">
                        <Button
                            variant="outline"
                            className="px-8 py-6 rounded-full font-bold flex items-center gap-2 group border-2"
                        >
                            <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
                            {t("notAvailable.backToServices")}
                        </Button>
                    </Link>
                    <Link href="/contact">
                        <Button className="bg-[#8B3A2C] hover:bg-[#7A3226] text-white px-8 py-6 rounded-full font-bold flex items-center gap-2 shadow-xl hover:shadow-[#8B3A2C]/40 transition-all">
                            <Phone className="w-5 h-5" />
                            {t("notAvailable.contactSupport")}
                        </Button>
                    </Link>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="mt-16 p-8 bg-gray-50 dark:bg-[#1C1C1C] rounded-2xl border border-gray-100 dark:border-white/5"
                >
                    <p className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-2">
                        {t("notAvailable.immediateHelp")}
                    </p>
                    <p className="text-2xl font-black text-gray-900 dark:text-white">
                        0999220000
                    </p>
                </motion.div>
            </div>
        </div>
    );
}
