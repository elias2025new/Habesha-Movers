"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Building2, Clock, ShieldCheck, Truck, Users, Layout, FileText, Monitor, CheckCircle2, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export default function OfficeRelocationPage() {
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
            {/* 1. Hero Section - Corporate & Clean */}
            <section className="relative h-[85vh] w-full overflow-hidden flex items-center">
                {/* Background */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/images/office-relocation-hero.png"
                        alt="Professional Office Movers"
                        fill
                        className="object-cover object-center"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/70 to-transparent" />
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full">
                    <motion.div
                        initial="initial"
                        animate="animate"
                        variants={stagger}
                        className="max-w-3xl space-y-8"
                    >
                        <motion.div variants={fadeIn} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-medium">
                            <Building2 className="w-4 h-4 text-[#F5A623]" />
                            <span>Corporate Relocation Specialists</span>
                        </motion.div>

                        <motion.h1 variants={fadeIn} className="text-5xl lg:text-7xl font-bold text-white leading-tight tracking-tight">
                            Efficient. Fast. <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F5A623] to-[#FFD700]">
                                Disruption-Free.
                            </span>
                        </motion.h1>

                        <motion.p variants={fadeIn} className="text-xl text-gray-300 max-w-2xl leading-relaxed">
                            We minimize downtime so you can get back to business. Expert handling of IT infrastructure, office furniture, vs confidential files.
                        </motion.p>

                        <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-4 pt-4">
                            <Link href="/quote">
                                <Button className="bg-[#8B3A2C] hover:bg-[#702e23] text-white px-8 py-7 rounded-lg text-lg font-semibold shadow-lg transition-all w-full sm:w-auto flex items-center justify-center gap-3">
                                    Get a Business Quote <ArrowRight className="w-5 h-5" />
                                </Button>
                            </Link>
                            <Link href="tel:0999220000">
                                <Button variant="outline" className="border-white/30 text-white hover:bg-white/10 px-8 py-7 rounded-lg text-lg font-semibold w-full sm:w-auto">
                                    Call 0999220000
                                </Button>
                            </Link>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* 2. Key Metrics - Trust & Efficiency */}
            <section className="bg-gray-50 border-b border-gray-100">
                <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {[
                            { value: "0%", label: "Business Downtime", sub: "Goal for every move" },
                            { value: "500+", label: "Offices Moved", sub: "Across Ethiopia" },
                            { value: "100%", label: "IT Safe", sub: "Secure tech handling" },
                            { value: "24/7", label: "Flexibility", sub: "Weekend & Night moves" },
                        ].map((stat, idx) => (
                            <div key={idx} className="text-center md:text-left border-r last:border-0 border-gray-200 pr-0 md:pr-8">
                                <p className="text-4xl lg:text-5xl font-bold text-[#8B3A2C] mb-2">{stat.value}</p>
                                <p className="text-lg font-bold text-gray-900">{stat.label}</p>
                                <p className="text-sm text-gray-500">{stat.sub}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. Comprehensive Business Solutions */}
            <section className="py-24">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">Complete Corporate Solutions</h2>
                        <p className="text-lg text-gray-600">We don't just move boxes; we relocate entire workflows. Our specialized services cover every aspect of your business transition.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: Monitor,
                                title: "IT & Tech Relocation",
                                desc: "Safe disconnection, packing, transport, and re-setup of servers, computers, and workstations."
                            },
                            {
                                icon: Layout,
                                title: "Furniture Assembly",
                                desc: "Expert disassembly and reassembly of cubicles, conference tables, and executive suites."
                            },
                            {
                                icon: FileText,
                                title: "Document Archiving",
                                desc: "Secure, organized transport of confidential files with strict chain-of-custody protocols."
                            },
                            {
                                icon: Clock,
                                title: "After-Hours Service",
                                desc: "We work evenings effectively and weekends to ensure you never miss a business day."
                            },
                            {
                                icon: Truck,
                                title: "Logistics Planning",
                                desc: "Dedicated project managers to coordinate elevators, parking, and building access."
                            },
                            {
                                icon: ShieldCheck,
                                title: "Full Insurance",
                                desc: "Comprehensive coverage for all office assets, giving you complete peace of mind."
                            }
                        ].map((item, idx) => (
                            <div key={idx} className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-[#8B3A2C]/20 transition-all duration-300 group">
                                <div className="w-14 h-14 rounded-xl bg-gray-50 group-hover:bg-[#8B3A2C]/10 flex items-center justify-center mb-6 transition-colors">
                                    <item.icon className="w-7 h-7 text-gray-600 group-hover:text-[#8B3A2C]" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                                <p className="text-gray-500 leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. The Process - Minimal Downtime Focus */}
            <section className="py-24 bg-[#1a1a1a] text-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <span className="text-[#F5A623] font-bold tracking-widest uppercase text-sm border-b-2 border-[#F5A623] pb-1">
                                Our Promise
                            </span>
                            <h2 className="text-4xl md:text-5xl font-bold mt-6 mb-6 leading-tight">
                                Minimal Downtime. <br /> Maximum Efficiency.
                            </h2>
                            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                                We know that every hour of downtime costs you money. That's why our "Plan-First" approach ensures a seamless transition.
                            </p>

                            <div className="space-y-6">
                                {[
                                    "Pre-move consultation & site survey",
                                    "Detailed labeling system for every department",
                                    "Floor plan mapping for exact placement",
                                    "Post-move debris removal & setup support"
                                ].map((point, i) => (
                                    <div key={i} className="flex items-center gap-4">
                                        <div className="w-6 h-6 rounded-full bg-[#F5A623] flex items-center justify-center flex-shrink-0">
                                            <CheckCircle2 className="w-4 h-4 text-black" />
                                        </div>
                                        <span className="text-lg text-gray-200">{point}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-10">
                                <Link href="/quote">
                                    <Button className="bg-[#F5A623] text-black hover:bg-[#d9901c] px-8 py-6 rounded-lg font-bold text-lg">
                                        Schedule a Site Survey
                                    </Button>
                                </Link>
                            </div>
                        </div>
                        <div className="relative h-[600px] bg-gray-800 rounded-2xl overflow-hidden border border-gray-700">
                            {/* Abstract Visualization of Process or Image */}
                            <div className="absolute inset-0 bg-gradient-to-br from-[#8B3A2C]/20 to-transparent z-10" />
                            <Image
                                src="/images/office-relocation-promise-simple.png"
                                alt="Habesha Corporate Move Planning"
                                fill
                                className="object-cover opacity-80 grayscale hover:grayscale-0 transition-all duration-700"
                            />
                            <div className="absolute bottom-0 left-0 right-0 p-8 z-20 bg-gradient-to-t from-black to-transparent">
                                <div className="flex items-center gap-4 mb-2">
                                    <Users className="w-6 h-6 text-[#F5A623]" />
                                    <span className="text-white font-semibold">Dedicated Project Manager</span>
                                </div>
                                <p className="text-gray-400 text-sm">Every corporate move gets a dedicated lead to ensure communication is clear and timelines are met.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. Final Consultation CTA */}
            <section className="py-24 bg-white">
                <div className="max-w-5xl mx-auto px-6 lg:px-8 bg-[#FDF8F7] rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
                    {/* Decor */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-[#F5A623]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#8B3A2C]/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

                    <div className="relative z-10">
                        <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Planning a Big Move?</h2>
                        <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
                            Let's discuss your requirements. We offer free on-site assessments to provide an accurate, fixed-price quote.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <Link href="/contact">
                                <Button className="bg-[#8B3A2C] hover:bg-[#702e23] text-white px-10 py-7 rounded-lg text-lg font-bold shadow-lg w-full sm:w-auto">
                                    Contact Our Business Team
                                </Button>
                            </Link>
                            <Link href="tel:0999220000">
                                <Button variant="outline" className="border-gray-300 bg-white hover:bg-gray-50 text-gray-900 px-10 py-7 rounded-lg text-lg font-bold w-full sm:w-auto flex items-center justify-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-[#34D399] animate-pulse" />
                                    0999220000
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
