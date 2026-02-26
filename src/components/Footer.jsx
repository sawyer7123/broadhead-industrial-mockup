import React from 'react';
import { Link } from 'react-router-dom';
import { Wrench, Phone, MapPin, ChevronRight, Mail } from 'lucide-react';

export default function Footer() {
    return (
        <>
            <footer className="bg-charcoal-950 py-16 border-t border-charcoal-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                        <div className="col-span-1 md:col-span-2">
                            <div className="flex items-center gap-3 mb-6">
                                <img src="/images/logo.png" alt="Broadhead Industrial" className="h-10 w-auto opacity-60" />
                            </div>
                            <p className="text-zinc-400 text-sm max-w-sm font-medium leading-relaxed mb-6">
                                Established in 2020, Broadhead Industrial is a 100% aboriginally owned industrial services company locally operated to meet the evolving needs of Fort McMurray & its large variety of businesses.
                            </p>
                            <p className="text-zinc-500 text-xs font-medium">
                                Intuitive Welding Creating Dynamic Results
                            </p>
                        </div>

                        <div>
                            <h4 className="text-white font-bold uppercase tracking-wider mb-4 border-b border-charcoal-800 pb-2 inline-block">Navigation</h4>
                            <ul className="space-y-3 text-zinc-400 text-sm font-medium">
                                <li><Link to="/" className="hover:text-hivis-500 transition-colors flex items-center gap-2"><ChevronRight className="w-3 h-3" /> Home</Link></li>
                                <li><Link to="/about" className="hover:text-hivis-500 transition-colors flex items-center gap-2"><ChevronRight className="w-3 h-3" /> About Us</Link></li>
                                <li><Link to="/services" className="hover:text-hivis-500 transition-colors flex items-center gap-2"><ChevronRight className="w-3 h-3" /> Services</Link></li>
                                <li><Link to="/projects" className="hover:text-hivis-500 transition-colors flex items-center gap-2"><ChevronRight className="w-3 h-3" /> Projects</Link></li>
                                <li><Link to="/careers" className="hover:text-hivis-500 transition-colors flex items-center gap-2"><ChevronRight className="w-3 h-3" /> Careers</Link></li>
                                <li><Link to="/contact" className="hover:text-hivis-500 transition-colors flex items-center gap-2"><ChevronRight className="w-3 h-3" /> Contact</Link></li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="text-white font-bold uppercase tracking-wider mb-4 border-b border-charcoal-800 pb-2 inline-block">Contact</h4>
                            <ul className="space-y-3 text-zinc-400 text-sm font-medium">
                                <li className="flex items-center gap-3"><Phone className="w-5 h-5 text-hivis-500 flex-shrink-0" /> <a href="tel:7803819536" className="hover:text-white transition-colors">(780) 381-9536</a></li>
                                <li className="flex items-center gap-3"><Mail className="w-5 h-5 text-hivis-500 flex-shrink-0" /> <a href="mailto:info@broadheadindustrial.ca" className="hover:text-white transition-colors">info@broadheadindustrial.ca</a></li>
                                <li className="flex items-center gap-3"><MapPin className="w-5 h-5 text-hivis-500 flex-shrink-0" /> Fort McMurray, AB</li>
                                <li className="mt-6 inline-flex items-center gap-2 px-3 py-1.5 bg-charcoal-800 text-xs font-bold text-white uppercase rounded border border-charcoal-700">
                                    <span className="relative flex h-2 w-2">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-hivis-500 opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-2 w-2 bg-hivis-500"></span>
                                    </span>
                                    Ready to Deploy
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="pt-8 border-t border-charcoal-900 text-zinc-500 text-xs font-medium flex flex-col md:flex-row justify-between items-center gap-4">
                        <div>&copy; {new Date().getFullYear()} Broadhead Industrial Inc. All rights reserved. | 100% Aboriginally Owned</div>
                        <div className="flex gap-4">
                            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                        </div>
                    </div>
                </div>
            </footer>

            {/* Mobile Sticky Action Bar */}
            <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-charcoal-950 border-t border-charcoal-800 p-3 flex gap-3 shadow-[0_-10px_30px_rgba(0,0,0,0.5)]">
                <a href="tel:7803819536" className="flex-1 flex items-center justify-center gap-2 py-3.5 bg-hivis-500 text-charcoal-950 font-black uppercase text-sm rounded shadow-[0_0_15px_rgba(234,179,8,0.2)]">
                    <Phone className="w-4 h-4" /> Dispatch Now
                </a>
            </div>
        </>
    );
}
