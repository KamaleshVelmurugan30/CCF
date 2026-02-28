"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function Contact() {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 5000);
        setFormData({ name: "", email: "", message: "" });
    };

    return (
        <div className="min-h-screen bg-background py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl font-serif text-primary"
                    >
                        Get in Touch
                    </motion.h1>
                    <div className="w-24 h-1 bg-accent mx-auto mt-6 mb-6"></div>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto font-light">
                        Have a custom cake inquiry or business order? We would love to hear from you.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 bg-white rounded-3xl shadow-xl overflow-hidden border border-secondary/20">

                    {/* Contact Info */}
                    <div className="bg-primary text-textLight p-10 lg:p-14 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

                        <h2 className="text-3xl font-serif text-accent mb-8 relative z-10">Contact Information</h2>

                        <div className="space-y-8 relative z-10">
                            <div className="flex items-start space-x-5">
                                <div className="bg-accent/20 p-3 rounded-full">
                                    <Phone className="text-accent" size={24} />
                                </div>
                                <div>
                                    <h3 className="font-serif text-xl mb-1">Call Us</h3>
                                    <p className="text-secondary/80">+91 99411 86416</p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-5">
                                <div className="bg-accent/20 p-3 rounded-full">
                                    <Mail className="text-accent" size={24} />
                                </div>
                                <div>
                                    <h3 className="font-serif text-xl mb-1">Email Us</h3>
                                    <p className="text-secondary/80">orders@chocolatecakefactory.com</p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-5">
                                <div className="bg-accent/20 p-3 rounded-full">
                                    <MapPin className="text-accent" size={24} />
                                </div>
                                <div>
                                    <h3 className="font-serif text-xl mb-1">Visit Us</h3>
                                    <p className="text-secondary/80">Ambattur: Banu Nagar, Chennai</p>
                                    <p className="text-secondary/80 mt-1">Kallikuppam: Redhills Main Rd, Chennai</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="p-10 lg:p-14">
                        <h2 className="text-3xl font-serif text-primary mb-8">Send a Message</h2>

                        {submitted ? (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="bg-green-50 text-green-800 p-6 rounded-xl border border-green-200 flex flex-col items-center justify-center text-center h-full min-h-[300px]"
                            >
                                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                                    <Send className="text-green-600" size={30} />
                                </div>
                                <h3 className="text-2xl font-serif font-bold mb-2">Message Sent!</h3>
                                <p>Thank you for reaching out. We will get back to you shortly.</p>
                            </motion.div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        required
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-accent focus:border-accent outline-none transition bg-gray-50 focus:bg-white"
                                        placeholder="John Doe"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                                    <input
                                        type="email"
                                        id="email"
                                        required
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-accent focus:border-accent outline-none transition bg-gray-50 focus:bg-white"
                                        placeholder="john@example.com"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                                    <textarea
                                        id="message"
                                        required
                                        rows={4}
                                        value={formData.message}
                                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-accent focus:border-accent outline-none transition bg-gray-50 focus:bg-white resize-none"
                                        placeholder="How can we help you?"
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-primary text-accent font-bold py-4 rounded-xl flex items-center justify-center space-x-2 hover:bg-primary/90 transition shadow-lg"
                                >
                                    <span>Send Message</span>
                                    <Send size={18} />
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
