"use client";

import Image from 'next/image';
import { Shield, DollarSign, Settings2, Clock, Truck } from 'lucide-react';

const WhyChooseUs = () => {
    const benefits = [
        {
            title: "Licensed and insured moving",
            icon: Shield,
        },
        {
            title: "Transparent pricing with no hidden fees",
            icon: DollarSign,
        },
        {
            title: "Customized services for every move",
            icon: Settings2,
        },
        {
            title: "On-time, every time",
            icon: Clock,
        },
    ];

    return (
        <section className="py-24 bg-transparent overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Left Content */}
                    <div className="space-y-10">
                        <div className="space-y-4">
                            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white leading-tight">
                                Why Choose <br />
                                <span className="text-primary">Habesha Movers</span>
                            </h2>
                            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-lg">
                                Here's why customers trust us time and again. From your first quote to your final box,
                                here's how we make moving smooth and stress-free. Let's get you on the road to your new home.
                            </p>
                        </div>

                        <div className="space-y-6">
                            {benefits.map((benefit, index) => (
                                <div key={index} className="flex items-center gap-4 group">
                                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center shadow-md group-hover:bg-primary/90 transition-colors">
                                        <benefit.icon className="w-6 h-6" />
                                    </div>
                                    <span className="text-lg font-bold text-gray-800 dark:text-gray-100">
                                        {benefit.title}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Image Area */}
                    <div className="relative">
                        {/* Background Decorative Shape */}
                        <div className="absolute top-8 -right-8 w-full h-full bg-blue-100 dark:bg-gray-800 rounded-3xl -z-10 transform translate-x-4 translate-y-4" />

                        <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                            <Image
                                src="/images/hero-movers.jpg"
                                alt="Moving boxes and plants"
                                width={600}
                                height={700}
                                className="w-full h-auto object-cover"
                            />
                        </div>

                        {/* Floating Badge - Moved outside overflow-hidden container */}
                        <div className="absolute -top-10 -left-10 w-40 h-40 rounded-full bg-[#f26522] border-4 border-white dark:border-gray-800 flex flex-col items-center justify-center shadow-2xl z-10 p-2 text-center transform hover:scale-105 transition-transform duration-300">
                            <span className="text-5xl font-extrabold text-white leading-none">5+</span>
                            <span className="text-sm font-bold text-white/90 mt-1 uppercase tracking-wide">Years of</span>
                            <span className="text-sm font-bold text-white/90 uppercase tracking-wide">Experience</span>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
