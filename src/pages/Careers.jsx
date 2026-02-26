import React from 'react';
import { motion } from 'motion/react';
import { Users, MapPin, Upload, ChevronRight, Shield, Wrench, Clock, Heart } from 'lucide-react';

const heavyTransition = { duration: 0.8, ease: [0.16, 1, 0.3, 1] };

export default function CareersPage() {
    return (
        <div className="pt-20">
            <section className="relative py-24 lg:py-32 overflow-hidden border-b border-charcoal-800">
                <div className="absolute inset-0">
                    <img src="/images/heavy-machinery.jpg" alt="" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-charcoal-950/80"></div>
                </div>
                <div className="absolute inset-0 bg-stripes opacity-5"></div>
                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={heavyTransition}>
                        <h2 className="text-sm font-bold text-hivis-500 uppercase tracking-[0.2em] mb-4 flex items-center gap-2">
                            <span className="w-8 h-px bg-hivis-500"></span> Join Our Crew
                        </h2>
                        <h1 className="text-5xl md:text-7xl font-display font-black text-white uppercase tracking-tighter">
                            We're <span className="text-hivis-500">Hiring!</span>
                        </h1>
                        <p className="text-xl text-zinc-400 mt-6 max-w-2xl font-medium">
                            Fort McMurray is competitive for skilled trades. If you've got the skills and the drive, we want to hear from you.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Why Work With Us */}
            <section className="py-24 bg-charcoal-950">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={heavyTransition} className="text-center mb-16">
                        <h3 className="text-4xl font-display font-black text-white uppercase tracking-tighter">
                            Why Work With <span className="text-steel-400">Broadhead?</span>
                        </h3>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { icon: Shield, title: 'Safety First', desc: 'COR certified safety programs. Your safety is our top priority on every job site.' },
                            { icon: Users, title: 'Strong Team', desc: 'Join a tight-knit crew of skilled tradespeople who have each other\'s backs.' },
                            { icon: Clock, title: 'Competitive Pay', desc: 'Industry-leading wages, overtime opportunities, and performance bonuses.' },
                            { icon: Heart, title: 'Community', desc: '100% aboriginally owned. We invest in our community and our people.' },
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ ...heavyTransition, delay: i * 0.1 }}
                                whileHover={{ y: -5 }}
                                className="bg-charcoal-900 border border-charcoal-800 p-6 text-center rounded"
                            >
                                <item.icon className="w-10 h-10 text-hivis-500 mx-auto mb-4" />
                                <h4 className="text-lg font-display font-bold text-white uppercase mb-2">{item.title}</h4>
                                <p className="text-zinc-400 text-sm font-medium">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Application Form */}
            <section className="py-24 bg-charcoal-900 border-y border-charcoal-800 relative">
                <div className="absolute inset-0 bg-stripes opacity-5"></div>
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={heavyTransition}
                        className="bg-charcoal-950 border border-charcoal-800 p-8 md:p-12 shadow-2xl relative overflow-hidden rounded"
                    >
                        <div className="absolute top-0 right-0 w-16 h-16 bg-hivis-500" style={{ clipPath: 'polygon(100% 0, 0 0, 100% 100%)' }}></div>

                        <div className="text-center mb-10">
                            <h2 className="text-3xl md:text-4xl font-display font-black text-white uppercase tracking-tighter mb-4">
                                Apply <span className="text-hivis-500">Now</span>
                            </h2>
                            <p className="text-zinc-400 font-medium">
                                Upload your resume and safety tickets straight from your phone. We'll review and get back to you within 48 hours.
                            </p>
                        </div>

                        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-xs font-bold text-zinc-500 uppercase tracking-widest mb-2">Full Name</label>
                                    <input type="text" className="w-full bg-charcoal-900 border border-charcoal-800 text-white px-4 py-3 rounded focus:outline-none focus:border-hivis-500 transition-colors" placeholder="John Doe" />
                                </div>
                                <div>
                                    <label className="block text-xs font-bold text-zinc-500 uppercase tracking-widest mb-2">Phone Number</label>
                                    <input type="tel" className="w-full bg-charcoal-900 border border-charcoal-800 text-white px-4 py-3 rounded focus:outline-none focus:border-hivis-500 transition-colors" placeholder="(780) 555-1234" />
                                </div>
                            </div>

                            <div>
                                <label className="block text-xs font-bold text-zinc-500 uppercase tracking-widest mb-2">Email</label>
                                <input type="email" className="w-full bg-charcoal-900 border border-charcoal-800 text-white px-4 py-3 rounded focus:outline-none focus:border-hivis-500 transition-colors" placeholder="john@example.com" />
                            </div>

                            <div>
                                <label className="block text-xs font-bold text-zinc-500 uppercase tracking-widest mb-2">Position Interested In</label>
                                <select className="w-full bg-charcoal-900 border border-charcoal-800 text-white px-4 py-3 rounded focus:outline-none focus:border-hivis-500 transition-colors">
                                    <option>Journeyman Welder</option>
                                    <option>Heavy Equipment Mechanic</option>
                                    <option>Apprentice Welder</option>
                                    <option>Labourer / Helper</option>
                                    <option>Other</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-xs font-bold text-zinc-500 uppercase tracking-widest mb-2">Upload Resume & Safety Tickets</label>
                                <div className="border-2 border-dashed border-charcoal-700 hover:border-hivis-500 bg-charcoal-900/50 p-8 text-center cursor-pointer transition-colors group rounded">
                                    <Upload className="w-10 h-10 text-steel-500 mx-auto mb-3 group-hover:text-hivis-500 transition-colors" />
                                    <p className="text-white font-bold mb-1">Tap to Upload or Drag & Drop</p>
                                    <p className="text-zinc-500 text-sm">PDF, DOC, JPG, PNG</p>
                                </div>
                            </div>

                            <div>
                                <label className="block text-xs font-bold text-zinc-500 uppercase tracking-widest mb-2">Additional Notes</label>
                                <textarea rows={3} className="w-full bg-charcoal-900 border border-charcoal-800 text-white px-4 py-3 rounded focus:outline-none focus:border-hivis-500 transition-colors" placeholder="Certifications, experience, availability..."></textarea>
                            </div>

                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                type="submit"
                                className="w-full py-5 font-black text-charcoal-950 bg-hivis-500 hover:bg-hivis-400 transition-colors text-xl uppercase tracking-wide flex items-center justify-center gap-2 rounded"
                            >
                                <Users className="w-6 h-6" />
                                Submit Application
                            </motion.button>
                        </form>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
