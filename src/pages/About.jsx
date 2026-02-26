import React from 'react';
import { motion } from 'motion/react';
import { Shield, Users, Award, Heart, CheckCircle2 } from 'lucide-react';

const heavyTransition = { duration: 0.8, ease: [0.16, 1, 0.3, 1] };

export default function AboutPage() {
    return (
        <div className="pt-20">
            {/* Page Hero */}
            <section className="relative py-24 lg:py-32 overflow-hidden border-b border-charcoal-800">
                <div className="absolute inset-0">
                    <img src="/images/construction-site.jpg" alt="" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-charcoal-950/80"></div>
                </div>
                <div className="absolute inset-0 bg-stripes opacity-5"></div>
                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={heavyTransition}>
                        <h2 className="text-sm font-bold text-hivis-500 uppercase tracking-[0.2em] mb-4 flex items-center gap-2">
                            <span className="w-8 h-px bg-hivis-500"></span> Who We Are
                        </h2>
                        <h1 className="text-5xl md:text-7xl font-display font-black text-white uppercase tracking-tighter">
                            About <span className="text-steel-400">Broadhead.</span>
                        </h1>
                    </motion.div>
                </div>
            </section>

            {/* Company Story */}
            <section className="py-24 bg-charcoal-950">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={heavyTransition}>
                            <h2 className="text-3xl md:text-4xl font-display font-black text-white uppercase tracking-tighter mb-6">
                                100% Aboriginally <span className="text-hivis-500">Owned & Operated</span>
                            </h2>
                            <div className="space-y-4 text-zinc-400 font-medium leading-relaxed">
                                <p>
                                    Established in 2020, Broadhead Industrial is a 100% aboriginally owned industrial services company that is locally operated to meet the evolving needs of Fort McMurray & its large variety of businesses.
                                </p>
                                <p>
                                    From heavy equipment maintenance to complex structural fabrication; we have the capacity, personnel & capabilities to support our clients through virtually any project.
                                </p>
                                <p>
                                    Whether you need support with equipment repair or rig welding services – Broadhead Industrial is your solution. Our industry certified team and full line of rig welding trucks are ready to get your project done efficiently and cost-effectively.
                                </p>
                                <p className="text-white font-bold text-lg border-l-4 border-hivis-500 pl-4 mt-6">
                                    From assessment to sign-off, we at Broadhead Industrial are committed to achieving top-results.
                                </p>
                            </div>
                        </motion.div>

                        <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={heavyTransition}>
                            <div className="relative">
                                <img
                                    src="/images/welding-sparks.jpg"
                                    alt="Industrial welding work"
                                    className="w-full h-[500px] object-cover rounded border border-charcoal-700"
                                />
                                <div className="absolute -bottom-6 -left-6 bg-hivis-500 text-charcoal-950 p-6 rounded shadow-2xl">
                                    <div className="text-4xl font-display font-black">2020</div>
                                    <div className="text-sm font-bold uppercase tracking-wider">Established</div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Core Values */}
            <section className="py-24 bg-charcoal-900 border-y border-charcoal-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={heavyTransition} className="text-center mb-16">
                        <h2 className="text-sm font-bold text-hivis-500 uppercase tracking-[0.2em] mb-4">Our Foundation</h2>
                        <h3 className="text-4xl md:text-5xl font-display font-black text-white uppercase tracking-tighter">
                            What Drives <span className="text-steel-400">Us.</span>
                        </h3>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { icon: Award, title: "Quality Craftsmanship", desc: "With a fleet of vehicles designed to meet a wide-range of applications, we are determined to deliver a quality product in the cleanest and most rugged of conditions." },
                            { icon: Shield, title: "Always On Call", desc: "Rain or snow, day or night – we rise to the occasion to get the job done. Our business is making sure our customers can safely & effectively do their business." },
                            { icon: CheckCircle2, title: "Fully Certified", desc: "We meet and exceed our clients' expectations by aligning our business with today's most critical and necessary standards backed by the certifications to prove it." },
                        ].map((v, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ ...heavyTransition, delay: i * 0.15 }}
                                whileHover={{ y: -8 }}
                                className="bg-charcoal-950 border border-charcoal-800 p-8 text-center molten-border rounded-sm"
                            >
                                <v.icon className="w-14 h-14 text-hivis-500 mx-auto mb-6" />
                                <h4 className="text-xl font-display font-bold text-white uppercase mb-4">{v.title}</h4>
                                <p className="text-zinc-400 font-medium leading-relaxed">{v.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Certifications */}
            <section className="py-24 bg-charcoal-950">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={heavyTransition} className="text-center mb-16">
                        <h2 className="text-sm font-bold text-hivis-500 uppercase tracking-[0.2em] mb-4">Accreditation</h2>
                        <h3 className="text-4xl md:text-5xl font-display font-black text-white uppercase tracking-tighter">
                            Our <span className="text-steel-400">Certifications.</span>
                        </h3>
                    </motion.div>

                    <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center">
                        {[
                            { src: '/images/badge-cwb.jpg', label: 'CWB Certified – Division 2' },
                            { src: '/images/badge-cor.png', label: 'COR / SECOR Certified' },
                            { src: '/images/badge-isn.png', label: 'ISNetworld Compliant' },
                            { src: '/images/badge-avetta.png', label: 'Avetta Member' },
                            { src: '/images/badge-naaba.png', label: 'NAABA Certified Member' },
                        ].map((cert, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ ...heavyTransition, delay: i * 0.1 }}
                                whileHover={{ y: -5, scale: 1.05 }}
                                className="bg-charcoal-900 border border-charcoal-800 p-4 sm:p-6 text-center cursor-pointer rounded flex flex-col items-center gap-3"
                            >
                                <img src={cert.src} alt={cert.label} className="h-16 w-auto object-contain" />
                                <div className="text-[10px] sm:text-xs font-bold text-zinc-400 uppercase tracking-wider text-center leading-tight">{cert.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
