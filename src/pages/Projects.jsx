import React from 'react';
import { motion } from 'motion/react';

const heavyTransition = { duration: 0.8, ease: [0.16, 1, 0.3, 1] };

const projects = [
    { title: 'Excavator Boom Crack Repair', tags: ['Heavy Iron', 'Structural'], desc: 'Full gouge out, pre-heat, and multi-pass weld using 7018. Ultrasonic tested (UT) to ensure zero defects. Back to digging in 14 hours.', image: '/images/service-welding.webp' },
    { title: 'Loader Bucket Hardfacing', tags: ['Wear Parts', 'Hardfacing'], desc: 'Complete wear package installation including lip shroud replacement and extensive hardfacing grid to combat abrasive oil sands material.', image: '/images/service-equipment.webp' },
    { title: 'Pipeline Tie-In Welding', tags: ['B-Pressure', 'Pipeline'], desc: 'Critical pipeline welding performed under strict ABSA B-Pressure requirements. All welds x-ray inspected and certified.', image: '/images/pipeline-tie-in.png' },
    { title: 'Plant Shutdown Support', tags: ['Turnaround', 'Plant'], desc: 'Full crew deployment for scheduled plant turnarounds. Structural repairs, pipe modifications, and equipment overhauls completed on tight deadlines.', image: '/images/refinery-shutdown.png' },
    { title: 'Custom Steel Fabrication', tags: ['Fabrication', 'Custom'], desc: 'Design and fabrication of custom steel structures, platforms, and equipment supports built to engineered specifications.', image: '/images/custom-steel-fab.png' },
    { title: 'Emergency Frame Repair', tags: ['Emergency', 'Heavy Iron'], desc: '24/7 emergency dispatch for critical equipment frame cracks. On-site repair within hours of the call to minimize costly downtime.', image: '/images/excavator.jpg' },
];

export default function ProjectsPage() {
    return (
        <div className="pt-20">
            <section className="relative py-24 lg:py-32 overflow-hidden border-b border-charcoal-800">
                <div className="absolute inset-0">
                    <img src="/images/service-welding.webp" alt="" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-charcoal-950/80"></div>
                </div>
                <div className="absolute inset-0 bg-stripes opacity-5"></div>
                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={heavyTransition}>
                        <h2 className="text-sm font-bold text-hivis-500 uppercase tracking-[0.2em] mb-4 flex items-center gap-2">
                            <span className="w-8 h-px bg-hivis-500"></span> Field Execution
                        </h2>
                        <h1 className="text-5xl md:text-7xl font-display font-black text-white uppercase tracking-tighter">
                            Our <span className="text-steel-400">Projects.</span>
                        </h1>
                    </motion.div>
                </div>
            </section>

            <section className="py-24 bg-charcoal-950">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((p, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ ...heavyTransition, delay: i * 0.1 }}
                                whileHover={{ y: -8, scale: 1.02 }}
                                className="bg-charcoal-900 border border-charcoal-800 overflow-hidden cursor-pointer rounded group"
                            >
                                <div className="relative h-56 overflow-hidden">
                                    <img src={p.image} alt={p.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" referrerPolicy="no-referrer" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 to-transparent"></div>
                                </div>
                                <div className="p-6">
                                    <h4 className="text-xl font-display font-bold text-white uppercase mb-2">{p.title}</h4>
                                    <p className="text-zinc-400 text-sm mb-4 font-medium leading-relaxed">{p.desc}</p>
                                    <div className="flex flex-wrap gap-2">
                                        {p.tags.map((t, j) => (
                                            <span key={j} className="px-2 py-1 bg-charcoal-800 text-xs font-bold text-zinc-300 uppercase rounded">{t}</span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
