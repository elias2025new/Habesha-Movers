import { Button } from '@/components/ui/Button';
import Link from 'next/link';
import Image from 'next/image';

export default function AboutPage() {
    return (
        <div className="bg-background transition-colors">
            {/* Hero Section */}
            <section className="bg-blue-600 dark:bg-blue-700 py-20 text-white transition-colors">
                <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
                    <h1 className="text-4xl font-extrabold sm:text-5xl">About Habesha Movers</h1>
                    <p className="mt-4 text-xl text-blue-100 max-w-2xl mx-auto">
                        Our mission is to provide the most reliable and stress-free moving experience in Ethiopia.
                    </p>
                </div>
            </section>

            {/* Our Story */}
            <section className="py-24">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-3xl font-bold text-foreground mb-6">Our Story</h2>
                            <p className="text-lg text-secondary-foreground opacity-90 mb-6 leading-relaxed">
                                Founded with a vision to revolutionize the logistics and moving industry in Addis Ababa, Habesha Movers has grown from a small local team to one of the most trusted names in professional moving.
                            </p>
                            <p className="text-lg text-secondary-foreground opacity-90 mb-6 leading-relaxed">
                                We recognized the challenges residents and businesses face when relocating—lack of transparency, safety concerns, and unreliable scheduling. Habesha Movers was built to solve these problems through professionalism, technology, and a customer-first approach.
                            </p>
                            <div className="grid grid-cols-2 gap-8 mt-10">
                                <div>
                                    <p className="text-4xl font-extrabold text-blue-600">5+</p>
                                    <p className="text-sm font-medium text-gray-500 uppercase mt-1">Years Experience</p>
                                </div>
                                <div>
                                    <p className="text-4xl font-extrabold text-blue-600">2,500+</p>
                                    <p className="text-sm font-medium text-gray-500 uppercase mt-1">Successful Moves</p>
                                </div>
                            </div>
                        </div>
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3] bg-gray-100 dark:bg-gray-800">
                            <Image
                                src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=1200"
                                alt="Our Team"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className="bg-gray-50 dark:bg-gray-900/50 py-24 transition-colors">
                <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold text-foreground mb-16">Our Core Values</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {[
                            { title: 'Integrity', description: 'Transparency in pricing and honesty in every interaction with our clients.' },
                            { title: 'Care', description: 'We treat your belongings as if they were our own, with the utmost respect and care.' },
                            { title: 'Efficiency', description: 'Constant improvement of our processes to provide the fastest service possible.' },
                        ].map((value) => (
                            <div key={value.title} className="bg-white dark:bg-gray-800 p-10 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
                                <h3 className="text-xl font-bold text-foreground mb-4">{value.title}</h3>
                                <p className="text-secondary-foreground opacity-80 leading-relaxed">{value.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24">
                <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold text-foreground mb-6">Want to work with us?</h2>
                    <p className="text-lg text-secondary-foreground opacity-90 mb-10 max-w-2xl mx-auto">
                        Experience the difference with a professional moving team that values your time and property.
                    </p>
                    <Link href="/quote">
                        <Button size="lg" variant="primary">Get Your Quote Now</Button>
                    </Link>
                </div>
            </section>
        </div>
    );
}
