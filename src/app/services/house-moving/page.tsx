"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ShieldCheck, Truck, Clock, PackageCheck, Star, ArrowRight, Sofa, Box, HeartHandshake } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export default function HouseMovingPage() {
    const fadeIn = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6 }
    };

    const stagger = {
        animate: {
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    return (
        <div className="bg-white min-h-screen font-sans selection:bg-[#8B3A2C] selection:text-white pb-20">

            {/* 1. Hero Section - Premium & Immersive */}
            <section className="relative h-[90vh] w-full overflow-hidden flex items-center justify-center">
                {/* Background Image with Overlay */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/images/house-moving-hero.png"
                        alt="Professional Habesha Movers"
                        fill
                        className="object-cover object-center"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/30" />
                </div>

                {/* Hero Content */}
                <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full text-center lg:text-left flex flex-col lg:flex-row items-center lg:items-end justify-between gap-12 pb-20">

                    <motion.div
                        initial="initial"
                        animate="animate"
                        variants={stagger}
                        className="max-w-3xl space-y-6"
                    >
                        <motion.div variants={fadeIn} className="flex items-center justify-center lg:justify-start gap-3 mb-4">
                            <span className="px-4 py-1.5 rounded-full bg-[#f5a623] text-black font-bold text-sm tracking-wide uppercase shadow-[0_0_20px_rgba(245,166,35,0.4)]">
                                #1 Rated Service
                            </span>
                            <div className="flex text-[#f5a623]">
                                <Star className="w-5 h-5 fill-current" />
                                <Star className="w-5 h-5 fill-current" />
                                <Star className="w-5 h-5 fill-current" />
                                <Star className="w-5 h-5 fill-current" />
                                <Star className="w-5 h-5 fill-current" />
                            </div>
                        </motion.div>

                        <motion.h1 variants={fadeIn} className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white leading-tight tracking-tight">
                            Moving Home, <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F5A623] to-[#FFD700]">
                                Simplified.
                            </span>
                        </motion.h1>

                        <motion.p variants={fadeIn} className="text-lg sm:text-xl text-gray-200 max-w-2xl leading-relaxed font-light">
                            Experience a stress-free transition with our premium house moving service. We handle your belongings with the care, precision, and respect they deserve.
                        </motion.p>

                        <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-6">
                            <Link href="/quote">
                                <Button className="bg-[#8B3A2C] hover:bg-[#702e23] text-white px-8 py-7 rounded-2xl text-lg font-bold shadow-2xl hover:shadow-[0_10px_30px_rgba(139,58,44,0.4)] transition-all duration-300 w-full sm:w-auto flex items-center gap-3">
                                    Get a Free Quote <ArrowRight className="w-5 h-5" />
                                </Button>
                            </Link>
                            <Link href="/contact">
                                <Button variant="outline" className="border-white/30 text-white hover:bg-white/10 px-8 py-7 rounded-2xl text-lg font-semibold backdrop-blur-sm w-full sm:w-auto">
                                    Talk to an Expert
                                </Button>
                            </Link>
                        </motion.div>
                    </motion.div>

                    {/* Trust Card / Floater on Desktop */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                        className="hidden lg:block bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-3xl max-w-xs text-white"
                    >
                        <div className="flex items-center gap-4 mb-4">
                            <div className="w-12 h-12 rounded-full bg-[#F5A623]/20 flex items-center justify-center">
                                <ShieldCheck className="w-7 h-7 text-[#F5A623]" />
                            </div>
                            <div>
                                <p className="font-bold text-lg">Fully Insured</p>
                                <p className="text-white/60 text-sm">100% Item Coverage</p>
                            </div>
                        </div>
                        <p className="text-sm text-white/80 leading-relaxed">
                            Every item is inventoried, packed with premium materials, and protected throughout the journey.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* 2. Service Overview - The "Why" */}
            <section className="py-24 px-6 lg:px-8 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="space-y-8">
                        <div className="inline-block">
                            <span className="text-[#8B3A2C] font-bold tracking-widest uppercase text-sm border-b-2 border-[#F5A623] pb-1">
                                Why Choose Habesha
                            </span>
                        </div>
                        <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                            More Than Just <br />
                            <span className="text-[#8B3A2C]">Heavy Lifting.</span>
                        </h2>
                        <p className="text-xl text-gray-600 leading-relaxed">
                            We understand that moving isn't just about shifting boxes—it's about relocating your life. Our Habesha team combines strength with sensitivity, ensuring your cherished memories arrive safely at your new doorstep.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                            {[
                                { icon: ShieldCheck, title: "Damage Free", desc: "Expert handling & padding" },
                                { icon: Clock, title: "On Time", desc: "Punctual start & delivery" },
                                { icon: HeartHandshake, title: "Friendly Team", desc: "Respectful & professional" },
                                { icon: Truck, title: "Modern Fleet", desc: "Clean, equipped trucks" },
                            ].map((item, idx) => (
                                <div key={idx} className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors">
                                    <div className="p-3 rounded-lg bg-[#8B3A2C]/10 text-[#8B3A2C]">
                                        <item.icon className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-900">{item.title}</h3>
                                        <p className="text-sm text-gray-500">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Visual Element - Abstract or Image Collage */}
                    <div className="relative">
                        <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border-8 border-white">
                            <Image
                                src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&q=80&w=800"
                                alt="Modern Living Room"
                                width={800}
                                height={1000}
                                className="object-cover w-full h-[600px]"
                            />
                            {/* Overlay Card */}
                            <div className="absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur rounded-2xl p-6 shadow-lg flex items-center justify-between">
                                <div>
                                    <p className="text-sm text-gray-500 uppercase tracking-wider font-semibold">Customer Rating</p>
                                    <div className="flex items-center gap-2 mt-1">
                                        <span className="text-3xl font-bold text-gray-900">4.9/5</span>
                                        <div className="flex text-[#F5A623]">
                                            <Star className="w-4 h-4 fill-current" />
                                            <Star className="w-4 h-4 fill-current" />
                                            <Star className="w-4 h-4 fill-current" />
                                            <Star className="w-4 h-4 fill-current" />
                                            <Star className="w-4 h-4 fill-current" />
                                        </div>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <p className="text-3xl font-bold text-[#8B3A2C]">2k+</p>
                                    <p className="text-sm text-gray-500">Happy Families</p>
                                </div>
                            </div>
                        </div>
                        {/* Decorative shape */}
                        <div className="absolute -z-10 top-10 -right-10 w-full h-full bg-[#F5A623] rounded-[2.5rem] opacity-20" />
                    </div>
                </div>
            </section>

            {/* 3. The Process - Step by Step */}
            <section className="py-24 bg-[#FDF8F7]"> {/* Very light warm gray/red tint */}
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-20">
                        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">Seamless Moving Process</h2>
                        <p className="text-lg text-gray-600">From the first quote to the last box, we've streamlined every step.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
                        {/* Connecting Line (Desktop) */}
                        <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-gradient-to-r from-[#8B3A2C]/0 via-[#8B3A2C]/20 to-[#8B3A2C]/0" />

                        {[
                            { step: "01", title: "Quote", desc: "Get a free, transparent estimate instantly online or via phone." },
                            { step: "02", title: "Plan", desc: "We schedule at your convenience and create a custom moving plan." },
                            { step: "03", title: "Pack", desc: "Our team carefully wraps and packs your items with premium materials." },
                            { step: "04", title: "Move", desc: "Safe transport and placement of items in your new home." },
                        ].map((item, idx) => (
                            <div key={idx} className="relative z-10 flex flex-col items-center text-center group">
                                <div className="w-24 h-24 rounded-full bg-white border-4 border-[#FDF8F7] shadow-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                    <span className="text-2xl font-bold text-[#8B3A2C]">{item.step}</span>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                                <p className="text-gray-500 leading-relaxed px-4">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. Item Protection & Care - Visual Focus */}
            <section className="py-24">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="bg-[#8B3A2C] rounded-[2.5rem] overflow-hidden shadow-2xl relative">
                        <div className="grid grid-cols-1 lg:grid-cols-2">
                            <div className="p-12 lg:p-20 text-white flex flex-col justify-center">
                                <div className="flex items-center gap-3 mb-6">
                                    <Box className="w-8 h-8 text-[#F5A623]" />
                                    <span className="text-[#F5A623] font-bold tracking-widest uppercase text-sm">Premium Protection</span>
                                </div>
                                <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">We Treat Your Goods Like <br /> <span className="text-[#F5A623]">Royal Treasure.</span></h2>
                                <ul className="space-y-6">
                                    {[
                                        "Triple-layer bubble wrap for fragile items",
                                        "Heavy-duty furniture blankets & padding",
                                        "Custom crates for artwork and electronics",
                                        "Floor runners to protect your new home"
                                    ].map((feature, i) => (
                                        <li key={i} className="flex items-center gap-4 text-lg text-white/90">
                                            <div className="w-6 h-6 rounded-full bg-[#F5A623] flex items-center justify-center flex-shrink-0">
                                                <svg className="w-4 h-4 text-[#8B3A2C]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                                </svg>
                                            </div>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="relative h-[400px] lg:h-auto bg-gray-900">
                                <Image
                                    src="https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?auto=format&fit=crop&q=80&w=800"
                                    alt="Careful Packing"
                                    fill
                                    className="object-cover opacity-80"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. Final CTA */}
            <section className="pb-24 pt-10 text-center px-6">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8">Ready to Make Your Move?</h2>
                    <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">Join thousands of satisfied customers who moved with peace of mind. Get your personalized quote today.</p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Link href="/quote">
                            <Button className="bg-[#8B3A2C] hover:bg-[#702e23] text-white px-10 py-8 rounded-2xl text-xl font-bold shadow-lg hover:shadow-xl transition-all w-full sm:w-auto">
                                Get Your Free Quote
                            </Button>
                        </Link>
                        <Link href="tel:0999220000">
                            <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50 px-10 py-8 rounded-2xl text-xl font-bold w-full sm:w-auto flex items-center justify-center gap-2">
                                <span className="w-8 h-8 rounded-full bg-[#F5A623] flex items-center justify-center text-white text-sm">
                                    <Truck className="w-4 h-4" />
                                </span>
                                0999220000
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
