"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { products, generateWhatsAppLink } from "@/data/products";
import { Search } from "lucide-react";

export default function Cakes() {
    const [searchTerm, setSearchTerm] = useState("");
    const [activeCategory, setActiveCategory] = useState("All");

    const categories = ["All", ...Array.from(new Set(products.map(p => p.category)))];

    const filteredProducts = products.filter(product => {
        const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = activeCategory === "All" || product.category === activeCategory;
        return matchesSearch && matchesCategory;
    });

    return (
        <div className="min-h-screen bg-background py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl font-serif text-primary mb-6"
                    >
                        Our Masterpieces
                    </motion.h1>
                    <div className="w-24 h-1 bg-accent mx-auto mb-10"></div>

                    {/* Search and Filter */}
                    <div className="flex flex-col md:flex-row justify-between items-center gap-6 max-w-4xl mx-auto">
                        <div className="relative w-full md:w-96">
                            <input
                                type="text"
                                placeholder="Search cakes..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full pl-12 pr-4 py-3 rounded-full border border-secondary/40 focus:outline-none focus:ring-2 focus:ring-accent bg-white shadow-sm"
                            />
                            <Search className="absolute left-4 top-3.5 text-gray-400" size={20} />
                        </div>

                        <div className="flex flex-wrap gap-2 justify-center">
                            {categories.map(category => (
                                <button
                                    key={category}
                                    onClick={() => setActiveCategory(category)}
                                    className={`px-5 py-2 rounded-full font-medium transition-colors ${activeCategory === category ? 'bg-primary text-accent' : 'bg-white text-primary hover:bg-secondary/50 border border-secondary/30'}`}
                                >
                                    {category}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Product Grid */}
                {filteredProducts.length === 0 ? (
                    <div className="text-center py-20 text-gray-500 text-xl font-serif">
                        No cakes found matching your search.
                    </div>
                ) : (
                    <motion.div
                        layout
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
                    >
                        {filteredProducts.map((product, idx) => (
                            <motion.div
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.3 }}
                                key={product.id}
                                className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 group"
                            >
                                <div className="h-72 overflow-hidden relative">
                                    <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                                    <div className="absolute top-4 right-4 bg-accent text-primary text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                                        {product.category}
                                    </div>
                                </div>
                                <div className="p-6">
                                    <div className="flex justify-between items-start mb-2">
                                        <h3 className="font-serif text-2xl text-primary font-bold pr-2 leading-tight">{product.name}</h3>
                                    </div>
                                    <div className="flex flex-wrap gap-1 mb-4">
                                        {product.tags.map(tag => (
                                            <span key={tag} className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded border border-gray-200">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                    <div className="flex justify-between items-center mt-6 pt-4 border-t border-gray-100">
                                        <span className="text-2xl font-bold text-primary">₹{product.price}</span>
                                        <a
                                            href={generateWhatsAppLink(product.name)}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="bg-primary hover:bg-primary/90 text-accent px-5 py-2 rounded-lg font-semibold transition shadow-md"
                                        >
                                            Order
                                        </a>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                )}
            </div>
        </div>
    );
}
