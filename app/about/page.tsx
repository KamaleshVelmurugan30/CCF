"use client";

import { motion } from "framer-motion";
import { Award, Heart, Sparkles } from "lucide-react";

export default function About() {
    return (
        <div className="min-h-screen bg-background">
            {/* Hero */}
            <section className="py-20 bg-primary text-textLight relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-6xl font-serif text-accent mb-6"
                    >
                        Our Story
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl max-w-2xl mx-auto text-secondary/90 font-light"
                    >
                        Baking memories since 2010. We bring the finest chocolate and artisanal craftsmanship to every celebration.
                    </motion.p>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        <h2 className="text-4xl font-serif text-primary">A Legacy of Sweetness</h2>
                        <div className="w-16 h-1 bg-accent mb-6"></div>
                        <p className="text-lg text-gray-700 leading-relaxed">
                            Founded in the heart of Chennai, <strong className="text-primary font-serif">The Chocolate Cake Factory</strong> began with a simple mission: to create the most decadent, premium chocolate cakes the city had ever tasted.
                        </p>
                        <p className="text-lg text-gray-700 leading-relaxed">
                            Over the years, our passion for baking has grown into two flourishing branches in <span className="text-primary font-semibold">Ambattur</span> and <span className="text-primary font-semibold">Kallikuppam</span>.
                            We use exclusively sourced cocoa, pure butter, and fresh ingredients to ensure every bite is an indulgence.
                        </p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl"
                    >
                        <img
                            src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=1000&auto=format&fit=crop"
                            alt="Baker preparing cake"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex items-end p-8">
                            <h3 className="text-3xl font-serif text-accent drop-shadow-md">Crafted with Perfection</h3>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-20 bg-primary/5 border-y border-primary/10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-around gap-10">
                    {[
                        { icon: <Heart size={40} className="text-accent mb-4" />, number: "10k+", label: "Happy Customers" },
                        { icon: <Award size={40} className="text-accent mb-4" />, number: "15+", label: "Years Experience" },
                        { icon: <Sparkles size={40} className="text-accent mb-4" />, number: "50+", label: "Unique Recipes" },
                    ].map((stat, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.2 }}
                            className="text-center flex flex-col items-center"
                        >
                            {stat.icon}
                            <span className="text-5xl font-serif font-bold text-primary mb-2">{stat.number}</span>
                            <span className="text-lg text-gray-600 font-medium uppercase tracking-widest">{stat.label}</span>
                        </motion.div>
                    ))}
                </div>
            </section>
        </div>
    );
}
