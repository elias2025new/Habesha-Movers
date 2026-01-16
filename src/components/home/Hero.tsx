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

            <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full py-8 md:py-20 text-white">
                <div className="flex flex-row lg:grid lg:grid-cols-12 gap-4 sm:gap-8 lg:gap-12 items-center justify-center">

                    {/* Left Content - Quote Form (Moved to first in Mobile Flex/Grid) */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="flex-1 lg:col-span-5 order-1 lg:order-2 flex justify-start lg:justify-end scale-[0.85] sm:scale-100 origin-left"
                    >
                        <div className="w-full max-w-[280px] sm:max-w-md">
                            <QuoteForm />
                        </div>
                    </motion.div>

                    {/* Right Content - Text & Stats (Moved to second in Mobile Flex/Grid) */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="flex-1 lg:col-span-7 order-2 lg:order-1 space-y-4 sm:space-y-8"
                    >
                        <div className="space-y-2 sm:space-y-4">
                            <span className="text-secondary font-bold tracking-wider uppercase text-[10px] sm:text-sm bg-secondary/10 px-2 py-0.5 sm:px-3 sm:py-1 rounded-full border border-secondary/20 inline-block">
                                Habesha Movers
                            </span>
                            <h1 className="text-xl sm:text-3xl md:text-6xl font-extrabold leading-tight">
                                Professional <br />
                                <span className="text-secondary">Moving Services</span>
                            </h1>
                            <p className="text-[10px] sm:text-lg text-gray-200 max-w-xl leading-relaxed opacity-90">
                                Habesha Movers provides reliable moving solutions across Addis Ababa.
                                <span className="hidden sm:inline"> Fill out our quick form to get an instant, competitive quote.</span>
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-6 max-w-md">
                            <div className="bg-white/10 backdrop-blur-md border border-white/20 p-2 sm:p-4 rounded-lg sm:rounded-xl">
                                <Users className="h-4 w-4 sm:h-6 sm:w-6 text-secondary mb-1 sm:mb-2" />
                                <h4 className="text-sm sm:text-2xl font-bold text-white">30,000+</h4>
                                <p className="text-gray-300 text-[8px] sm:text-xs">Families moved</p>
                            </div>
                            <div className="bg-white/10 backdrop-blur-md border border-white/20 p-2 sm:p-4 rounded-lg sm:rounded-xl">
                                <Package className="h-4 w-4 sm:h-6 sm:w-6 text-secondary mb-1 sm:mb-2" />
                                <h4 className="text-sm sm:text-2xl font-bold text-white">100%</h4>
                                <p className="text-gray-300 text-[8px] sm:text-xs">Safe Delivery Rate</p>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </div>
    );
};

export default Hero;
