import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Wrench, Phone, Menu, X } from 'lucide-react';
import { motion } from 'motion/react';

export default function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();

    const navLinks = [
        { to: '/', label: 'Home' },
        { to: '/about', label: 'About Us' },
        { to: '/services', label: 'Services' },
        { to: '/projects', label: 'Projects' },
        { to: '/careers', label: 'Careers' },
        { to: '/contact', label: 'Contact' },
    ];

    return (
        <header className="fixed top-0 left-0 right-0 z-40 bg-charcoal-950/90 backdrop-blur-md border-b border-charcoal-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    <Link to="/" className="flex-shrink-0 flex items-center gap-3 group">
                        <img src="/images/logo.png" alt="Broadhead Industrial" className="h-12 w-auto" />
                    </Link>

                    <nav className="hidden lg:flex space-x-6">
                        {navLinks.map(link => (
                            <Link
                                key={link.to}
                                to={link.to}
                                className={`nav-underline text-sm font-bold uppercase tracking-wider transition-colors ${location.pathname === link.to
                                    ? 'text-hivis-500 active'
                                    : 'text-zinc-300 hover:text-hivis-500'
                                    }`}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </nav>

                    <div className="hidden lg:flex items-center">
                        <motion.a
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            href="tel:7803819536"
                            className="group relative inline-flex items-center justify-center px-6 py-3 font-black text-charcoal-950 bg-hivis-500 rounded hover:bg-hivis-400 transition-all overflow-hidden border border-hivis-400 shadow-[0_0_20px_rgba(234,179,8,0.2)]"
                        >
                            <span className="relative flex items-center gap-2 uppercase tracking-wide text-sm">
                                <span className="relative flex h-3 w-3">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-charcoal-950 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-3 w-3 bg-charcoal-900"></span>
                                </span>
                                (780) 381-9536
                            </span>
                        </motion.a>
                    </div>

                    <div className="lg:hidden flex items-center z-50">
                        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-zinc-300 hover:text-white p-2">
                            {isMobileMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
                        </button>
                    </div>
                </div>
            </div>

            {isMobileMenuOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="lg:hidden absolute top-20 left-0 w-full bg-charcoal-900 border-b border-charcoal-800 shadow-2xl"
                >
                    <div className="px-4 pt-4 pb-6 space-y-2">
                        {navLinks.map(link => (
                            <Link
                                key={link.to}
                                to={link.to}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className={`block px-4 py-3 text-lg font-bold rounded uppercase tracking-wider transition-colors ${location.pathname === link.to
                                    ? 'text-hivis-500 bg-charcoal-800'
                                    : 'text-zinc-200 hover:text-hivis-500 hover:bg-charcoal-800'
                                    }`}
                            >
                                {link.label}
                            </Link>
                        ))}
                        <a
                            href="tel:7803819536"
                            className="block px-4 py-3 mt-4 text-center text-lg font-black bg-hivis-500 text-charcoal-950 rounded uppercase"
                        >
                            <Phone className="inline w-5 h-5 mr-2" /> (780) 381-9536
                        </a>
                    </div>
                </motion.div>
            )}
        </header>
    );
}
