"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="sticky top-0 z-50 bg-primary text-textLight shadow-lg">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    <Link href="/" className="font-serif text-2xl tracking-wider text-accent font-bold">
                        The Chocolate Cake Factory
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-8">
                        <Link href="/" className="hover:text-accent transition duration-300">Home</Link>
                        <Link href="/cakes" className="hover:text-accent transition duration-300">Cakes</Link>
                        <Link href="/about" className="hover:text-accent transition duration-300">About</Link>
                        <Link href="/locations" className="hover:text-accent transition duration-300">Locations</Link>
                        <Link href="/contact" className="hover:text-accent transition duration-300">Contact</Link>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-textLight hover:text-accent focus:outline-none"
                        >
                            {isOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-primary/95 backdrop-blur-md absolute w-full">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 text-center">
                        <Link href="/" onClick={() => setIsOpen(false)} className="block px-3 py-2 hover:text-accent text-lg">Home</Link>
                        <Link href="/cakes" onClick={() => setIsOpen(false)} className="block px-3 py-2 hover:text-accent text-lg">Cakes</Link>
                        <Link href="/about" onClick={() => setIsOpen(false)} className="block px-3 py-2 hover:text-accent text-lg">About</Link>
                        <Link href="/locations" onClick={() => setIsOpen(false)} className="block px-3 py-2 hover:text-accent text-lg">Locations</Link>
                        <Link href="/contact" onClick={() => setIsOpen(false)} className="block px-3 py-2 hover:text-accent text-lg">Contact</Link>
                    </div>
                </div>
            )}
        </nav>
    );
}
