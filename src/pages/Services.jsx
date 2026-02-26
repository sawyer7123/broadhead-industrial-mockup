import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Zap, Truck, Target, ChevronRight, CheckCircle2 } from 'lucide-react';

const heavyTransition = { duration: 0.8, ease: [0.16, 1, 0.3, 1] };

const services = [
    {
        id: 'rig-welding',
        icon: Zap,
        title: 'Rig Welding',
        subtitle: 'Mobile & On-Site',
        desc: 'Rig welding services allow Broadhead to complete work in even the most remote locations. From plant repairs to structural steel fabrication and production services; we have the ability to provide top-quality products with industry leading service.',
        features: ['CWB Certified Structural Welding', 'B-Pressure Pipe Welding', 'Structural Steel Fabrication', 'Remote & Plant Site Service', 'Multi-Process Welding Capability', 'Emergency Breakdown Repairs'],
        image: '/images/service-welding.webp'
    },
    {
        id: 'heavy-equipment',
        icon: Truck,
        title: 'Heavy Equipment Repair',
        subtitle: 'Minimize Downtime',
        desc: 'Our heavy equipment repair services are designed to improve response time and minimize equipment downtime. Broadhead has the capacity and experience to provide your company with comprehensive support when you need it most.',
        features: ['Excavator & Loader Repairs', 'Bucket Relines & Hardfacing', 'Frame Crack Repairs', 'Hydraulic System Service', 'Undercarriage Maintenance', 'Preventive Maintenance Programs'],
        image: '/images/service-equipment.webp'
    },
    {
        id: 'innovative-solutions',
        icon: Target,
        title: 'Innovative Solutions',
        subtitle: 'Beyond Welding',
        desc: 'While welding and heavy industrial services are our foundation, we recognized the need to diversify into innovative solutions. Broadhead also offers installation and maintenance services for digital technology solutions.',
        features: ['Digital Tech Installations', 'IoT Sensor Deployment', 'Equipment Monitoring Systems', 'Custom Fabrication Projects', 'Technical Consulting', 'Turnkey Project Management'],
        image: '/images/service-innovative.png'
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
                            Whether you need support with equipment repair or rig welding services – Broadhead Industrial is your solution.
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
                        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${idx % 2 !== 0 ? 'lg:direction-rtl' : ''}`}>
                            <motion.div
                                initial={{ opacity: 0, x: idx % 2 === 0 ? -40 : 40 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={heavyTransition}
                                className={idx % 2 !== 0 ? 'lg:order-2' : ''}
                            >
                                <div className="flex items-center gap-4 mb-6">
                                    <service.icon className="w-12 h-12 text-hivis-500" />
                                    <div>
                                        <div className="text-xs font-bold text-hivis-500 uppercase tracking-widest">{service.subtitle}</div>
                                        <h3 className="text-3xl md:text-4xl font-display font-black text-white uppercase tracking-tighter">{service.title}</h3>
                                    </div>
                                </div>
                                <p className="text-zinc-400 font-medium leading-relaxed mb-8">{service.desc}</p>
                                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                    {service.features.map((f, i) => (
                                        <li key={i} className="flex items-center gap-2 text-zinc-300 font-medium text-sm">
                                            <CheckCircle2 className="w-5 h-5 text-hivis-500 flex-shrink-0" /> {f}
                                        </li>
                                    ))}
                                </ul>
                                <Link
                                    to="/contact"
                                    className="inline-flex items-center gap-2 mt-8 px-6 py-3 bg-hivis-500 text-charcoal-950 font-black uppercase tracking-wide rounded hover:bg-hivis-400 transition-colors"
                                >
                                    Get a Quote <ChevronRight className="w-5 h-5" />
                                </Link>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: idx % 2 === 0 ? 40 : -40 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={heavyTransition}
                                whileHover={{ y: -5, scale: 1.01 }}
                                className={`relative h-[400px] lg:h-[500px] overflow-hidden border border-charcoal-700 rounded shadow-2xl group cursor-pointer ${idx % 2 !== 0 ? 'lg:order-1' : ''}`}
                            >
                                <img src={service.image} alt={service.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" referrerPolicy="no-referrer" />
                                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/80 to-transparent"></div>
                            </motion.div>
                        </div>
                    </div>
                </section>
            ))}

            {/* CTA */}
            <section className="py-24 bg-charcoal-950 text-center">
                <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={heavyTransition} className="max-w-3xl mx-auto px-4">
                    <h3 className="text-4xl font-display font-black text-white uppercase tracking-tighter mb-6">
                        Ready to <span className="text-hivis-500">Get Started?</span>
                    </h3>
                    <p className="text-zinc-400 font-medium mb-8 text-lg">Connect with our team for a free consultation and quote on your next project.</p>
                    <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-5 bg-hivis-500 text-charcoal-950 font-black uppercase tracking-wide text-xl rounded hover:bg-hivis-400 transition-colors shadow-[0_0_30px_rgba(234,179,8,0.3)]">
                        Connect With Us <ChevronRight className="w-6 h-6" />
                    </Link>
                </motion.div>
            </section>
        </div>
    );
}
