"use client";

import { motion } from 'framer-motion';
import QuoteForm from './QuoteForm';
import { Users, Package } from 'lucide-react';

import ParticleBackground from './ParticleBackground';

const Hero = () => {
    return (
        <div className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
            {/* Background Image */}
            <div
                className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: 'url(/images/habesha-mover-hero.png)',
                }}
            >
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/40" />
            </div>

            {/* Particles - Fixed Position but localized in DOM order for layering */}
            <div className="absolute inset-0 z-[1]">
                <ParticleBackground />
            </div>

            <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 w-full py-12 md:py-20">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

                    {/* Left Content - Text */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-white space-y-8 lg:col-span-7"
                    >
                        <div className="space-y-4">
                            <span className="text-secondary font-bold tracking-wider uppercase text-sm bg-secondary/10 px-3 py-1 rounded-full border border-secondary/20">
                                Habesha Movers
                            </span>
                            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
                                Professional <br />
                                <span className="text-secondary">Moving Services</span>
                            </h1>
                            <p className="text-lg text-gray-200 max-w-xl leading-relaxed">
                                Habesha Movers provides reliable moving solutions across Addis Ababa.
                                Fill out our quick form to get an instant, competitive quote.
                            </p>
                        </div>

                        <div className="grid grid-cols-2 gap-6 max-w-md">
                            <div className="bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-xl">
                                <Users className="h-6 w-6 text-secondary mb-2" />
                                <h4 className="text-2xl font-bold text-white">30,000+</h4>
                                <p className="text-gray-300 text-xs">Families moved</p>
                            </div>
                            <div className="bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-xl">
                                <Package className="h-6 w-6 text-secondary mb-2" />
                                <h4 className="text-2xl font-bold text-white">100%</h4>
                                <p className="text-gray-300 text-xs">Safe Delivery Rate</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Content - Quote Form */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="lg:col-span-5 flex justify-center lg:justify-end"
                    >
                        <QuoteForm />
                    </motion.div>

                </div>
            </div>
        </div>
    );
};

export default Hero;
