import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Zap, Truck, ChevronRight, CheckCircle2 } from 'lucide-react';

const heavyTransition = { duration: 0.8, ease: [0.16, 1, 0.3, 1] };

const services = [
    {
        id: 'rig-welding',
        icon: Zap,
        title: 'Rig Welding',
        subtitle: 'Mobile & On-Site',
        desc: 'Our rig welding services put fully equipped trucks at your site — no matter how remote. From emergency plant repairs to structural steel fabrication and B-Pressure pipe work, we deliver CWB-certified quality under pressure, on deadline.',
        features: ['CWB Certified Structural Welding', 'B-Pressure Pipe Welding', 'Structural Steel Fabrication', 'Remote & Plant Site Service', 'Multi-Process Welding Capability', 'Emergency Breakdown Repairs'],
        image: '/images/service-welding.webp'
    },
    {
        id: 'heavy-equipment',
        icon: Truck,
        title: 'Heavy Equipment Repair',
        subtitle: 'Minimize Downtime',
        desc: "A machine sitting down is revenue walking out the door. Broadhead's heavy equipment repair crews are built for rapid response — on-site fast, working faster. From excavator boom cracks to full bucket relines, we get your iron moving again.",
        features: ['Excavator & Loader Repairs', 'Bucket Relines & Hardfacing', 'Frame Crack Repairs', 'Hydraulic System Service', 'Undercarriage Maintenance', 'Preventive Maintenance Programs'],
        image: '/images/service-equipment.webp'
    }
];

export default function ServicesPage() {
    return (
        <div className="pt-20">
            {/* Page Hero */}
            <section className="relative py-24 lg:py-32 overflow-hidden border-b border-charcoal-800">
                <div className="absolute inset-0">
                    <img src="/images/steel-structure.jpg" alt="" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-charcoal-950/80"></div>
                </div>
                <div className="absolute inset-0 bg-stripes opacity-5"></div>
                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={heavyTransition}>
                        <h2 className="text-sm font-bold text-hivis-500 uppercase tracking-[0.2em] mb-4 flex items-center gap-2">
                            <span className="w-8 h-px bg-hivis-500"></span> What We Do
                        </h2>
                        <h1 className="text-5xl md:text-7xl font-display font-black text-white uppercase tracking-tighter">
                            Our <span className="text-steel-400">Services.</span>
                        </h1>
                        <p className="text-xl text-zinc-400 mt-6 max-w-2xl font-medium">
                            Two things, done better than anyone else in Northern Alberta. Rig welding and heavy equipment repair — that's the whole story.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Service Sections */}
            {services.map((service, idx) => (
                <section
                    key={service.id}
                    id={service.id}
                    className={`py-24 ${idx % 2 === 0 ? 'bg-charcoal-950' : 'bg-charcoal-900'} border-b border-charcoal-800`}
                >
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${idx % 2 !== 0 ? 'lg:grid-flow-dense' : ''}`}>
                            <motion.div
                                initial={{ opacity: 0, x: idx % 2 === 0 ? -40 : 40 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={heavyTransition}
                                className={idx % 2 !== 0 ? 'lg:col-start-2' : ''}
                            >
                                <div className="flex items-center gap-3 mb-6">
                                    <service.icon className="w-10 h-10 text-hivis-500" />
                                    <span className="text-xs font-bold text-zinc-500 uppercase tracking-[0.2em]">{service.subtitle}</span>
                                </div>
                                <h2 className="text-4xl md:text-5xl font-display font-black text-white uppercase tracking-tighter mb-6">
                                    {service.title}
                                </h2>
                                <p className="text-zinc-400 font-medium leading-relaxed mb-8 text-lg">{service.desc}</p>
                                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                                    {service.features.map((f, i) => (
                                        <li key={i} className="flex items-center gap-2 text-zinc-300 font-medium">
                                            <CheckCircle2 className="w-5 h-5 text-hivis-500 flex-shrink-0" />
                                            {f}
                                        </li>
                                    ))}
                                </ul>
                                <Link to="/contact"
                                    className="inline-flex items-center gap-2 px-6 py-3 font-black text-charcoal-950 bg-hivis-500 rounded hover:bg-hivis-400 transition-colors uppercase tracking-wide text-sm">
                                    Request This Service <ChevronRight className="w-4 h-4" />
                                </Link>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, x: idx % 2 === 0 ? 40 : -40 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={heavyTransition}
                                className={idx % 2 !== 0 ? 'lg:col-start-1 lg:row-start-1' : ''}
                            >
                                <div className="relative h-[450px] overflow-hidden rounded border border-charcoal-700 shadow-2xl">
                                    <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/60 to-transparent"></div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>
            ))}
        </div>
    );
}
