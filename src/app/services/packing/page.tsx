"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Package, ShieldCheck, Box, CheckCircle2, ArrowRight, Layers, Gem, ClipboardCheck } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export default function PackingServicesPage() {
    const fadeIn = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.5 }
    };

    const stagger = {
        animate: {
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    return (
        <div className="bg-white min-h-screen font-sans text-gray-900 pb-20">
            {/* 1. Hero Section - Precise & Clean */}
            <section className="relative min-h-[60vh] md:h-[85vh] w-full overflow-hidden flex items-center py-20 md:py-0">
                {/* Background */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src="https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&q=80&w=1920"
                        alt="Expert Packing Service"
                        fill
                        className="object-cover object-center"
                        priority
                    />
                    <div className="absolute inset-0 bg-black/50" />
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full text-center">
                    <motion.div
                        initial="initial"
                        animate="animate"
                        variants={stagger}
                        className="max-w-4xl mx-auto space-y-6 md:space-y-8"
                    >
                        <motion.div variants={fadeIn} className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs md:text-sm font-medium">
                            <Box className="w-3.5 h-3.5 md:w-4 md:h-4 text-[#F5A623]" />
                            <span>Professional Packing Services</span>
                        </motion.div>

                        <motion.h1 variants={fadeIn} className="text-3xl sm:text-5xl lg:text-7xl font-bold text-white leading-tight tracking-tight">
                            Expert Packing for <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F5A623] to-[#FFD700]">
                                Ultimate Peace of Mind.
                            </span>
                        </motion.h1>

                        <motion.p variants={fadeIn} className="text-base sm:text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed">
                            Don't stress about the boxes. Our trained professionals use premium materials to wrap, pad, and protect your valuables with military precision.
                        </motion.p>

                        <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
                            <Link href="/quote">
                                <Button className="bg-[#8B3A2C] hover:bg-[#702e23] text-white px-6 py-4 sm:px-8 sm:py-7 rounded-full text-base sm:text-lg font-semibold shadow-lg transition-all w-full sm:w-auto flex items-center justify-center gap-3">
                                    Get a Packing Quote <ArrowRight className="w-5 h-5" />
                                </Button>
                            </Link>
                            <Link href="tel:0999220000">
                                <Button variant="outline" className="border-white/30 text-white hover:bg-white/10 px-6 py-4 sm:px-8 sm:py-7 rounded-full text-base sm:text-lg font-semibold w-full sm:w-auto">
                                    Call 0999220000
                                </Button>
                            </Link>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* 2. Packing Materials - Premium Quality */}
            <section className="py-12 md:py-24 bg-[#FDF8F7]">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
                        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-gray-900 mb-6">Premium Materials Only</h2>
                        <p className="text-base sm:text-lg text-gray-600">We don't cut corners. We use industry-leading packing supplies to ensure your items withstand any journey.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: Layers,
                                title: "Double-Wall Boxes",
                                desc: "Heavy-duty corrugated cardboard that resists crushing and stacking pressure."
                            },
                            {
                                icon: ShieldCheck,
                                title: "Industrial Bubble Wrap",
                                desc: "Multi-layer air cushioning for delicate electronics, glass, and artwork."
                            },
                            {
                                icon: Box,
                                title: "Custom Crating",
                                desc: "Made-to-measure wooden crates for sculptures, large mirrors, and antiques."
                            }
                        ].map((item, idx) => (
                            <div key={idx} className="bg-white p-6 sm:p-10 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 text-center group">
                                <div className="w-20 h-20 rounded-2xl bg-[#8B3A2C]/5 group-hover:bg-[#8B3A2C] text-[#8B3A2C] group-hover:text-white flex items-center justify-center mx-auto mb-6 transition-colors duration-300">
                                    <item.icon className="w-10 h-10" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-4">{item.title}</h3>
                                <p className="text-gray-500 leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. White Glove Service - Fragile Items */}
            <section className="py-12 md:py-24 overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
                        <div className="relative">
                            <div className="absolute -inset-4 bg-[#F5A623] rounded-[2rem] opacity-20 rotate-3" />
                            <div className="relative rounded-[1.5rem] overflow-hidden shadow-2xl h-[350px] sm:h-[500px]">
                                <Image
                                    src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&q=80&w=800"
                                    alt="Fragile Item Packing"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            {/* Badge */}
                            <div className="absolute bottom-4 right-4 md:-bottom-8 md:-right-8 bg-white p-4 md:p-6 rounded-2xl shadow-xl border border-gray-100 flex items-center gap-3 md:gap-4">
                                <div className="p-2 md:p-3 bg-[#F5A623]/20 rounded-full">
                                    <Gem className="w-6 h-6 md:w-8 md:h-8 text-[#F5A623]" />
                                </div>
                                <div>
                                    <p className="font-bold text-gray-900 text-base md:text-lg">White Glove</p>
                                    <p className="text-xs md:text-sm text-gray-500">Certified Handling</p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <span className="text-[#8B3A2C] font-bold tracking-widest uppercase text-sm border-b-2 border-[#F5A623] pb-1">
                                Fragile Care
                            </span>
                            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mt-6 mb-8 leading-tight">
                                We Handle Your Treasures With <span className="text-[#8B3A2C]">Respect.</span>
                            </h2>
                            <p className="text-base sm:text-lg text-gray-600 mb-8 leading-relaxed">
                                From crystal chandeliers to grand pianos, our specialist team is trained in the art of fragile packing. We treat every item as if it were irreplaceable.
                            </p>

                            <ul className="space-y-4">
                                {[
                                    "Acid-free tissue paper for silverware",
                                    "Anti-static wrapping for electronics",
                                    "Vertical smooth packing for plates",
                                    "Corner protectors for framed art"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-sm sm:text-lg text-gray-700">
                                        <CheckCircle2 className="w-5 h-5 text-[#34D399]" />
                                        {item}
                                    </li>
                                ))}
                            </ul>

                            <div className="mt-10">
                                <Link href="/contact">
                                    <Button className="bg-gray-900 hover:bg-black text-white px-6 py-4 sm:px-8 sm:py-6 rounded-lg font-bold text-sm sm:text-base">
                                        Discuss Special Items
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. Quality Standards Checklist */}
            <section className="py-12 md:py-24 bg-[#8B3A2C] text-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-12 gap-8">
                        <div>
                            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4">Our Quality Promise</h2>
                            <p className="text-white/80 text-sm sm:text-lg max-w-xl">Every box we pack goes through a strict verification process to ensure organized and safe delivery.</p>
                        </div>
                        <ClipboardCheck className="w-16 h-16 sm:w-24 sm:h-24 text-[#F5A623] opacity-50" />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { title: "Categorized", desc: "Items packed by room and type" },
                            { title: "Labeled", desc: "Clear content description on every box" },
                            { title: "Inventory", desc: "Digital list of all major items" },
                            { title: "Sealed", desc: "Tamper-evident taping for security" }
                        ].map((card, idx) => (
                            <div key={idx} className="bg-white/10 backdrop-blur border border-white/10 p-4 sm:p-6 rounded-xl hover:bg-white/20 transition-colors">
                                <h3 className="font-bold text-lg sm:text-xl mb-2 text-[#F5A623]">{card.title}</h3>
                                <p className="text-sm sm:text-base text-white/80">{card.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 5. Final CTA */}
            <section className="py-12 md:py-24 bg-white text-center">
                <div className="max-w-4xl mx-auto px-6">
                    <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-8">Ready to Save Your Back?</h2>
                    <p className="text-base sm:text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
                        Let us do the heavy lifting and the meticulous wrapping. Add professional packing to your move today.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Link href="/quote">
                            <Button className="bg-[#8B3A2C] hover:bg-[#702e23] text-white px-8 py-5 sm:px-10 sm:py-8 rounded-full text-lg sm:text-xl font-bold shadow-xl transition-all w-full sm:w-auto">
                                Get a Quote
                            </Button>
                        </Link>
                        <Link href="tel:0999220000">
                            <Button variant="outline" className="border-gray-200 text-gray-900 hover:bg-gray-50 px-8 py-5 sm:px-10 sm:py-8 rounded-full text-lg sm:text-xl font-bold w-full sm:w-auto flex items-center justify-center gap-2">
                                <span className="w-3 h-3 rounded-full bg-[#34D399]" />
                                0999220000
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
