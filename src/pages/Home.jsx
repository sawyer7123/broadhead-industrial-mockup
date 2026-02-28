import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Shield, Truck, Phone, Wrench, ChevronRight, CheckCircle2, Clock, Zap, Target, Send, Camera } from 'lucide-react';
import { motion, useScroll, useTransform, useInView, animate } from 'motion/react';

const heavyTransition = { duration: 0.8, ease: [0.16, 1, 0.3, 1] };

function AnimatedCounter({ value, suffix = "", label }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (isInView) {
            const controls = animate(0, value, {
                duration: 2.5, ease: [0.16, 1, 0.3, 1],
                onUpdate: (v) => setCount(Math.floor(v)),
            });
            return () => controls.stop();
        }
    }, [isInView, value]);

    return (
        <div ref={ref} className="flex flex-col items-center text-center py-6 md:py-0">
            <div className="text-5xl md:text-7xl font-display font-black text-white mb-2 tracking-tighter">{count}{suffix}</div>
            <div className="text-sm text-hivis-500 font-bold uppercase tracking-widest">{label}</div>
        </div>
    );
}

function HeroSection() {
    const { scrollYProgress } = useScroll();
    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    return (
        <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 overflow-hidden border-b border-charcoal-800 min-h-[90vh] flex items-center">
            <motion.div style={{ y, opacity }} className="absolute inset-0 z-0">
                <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover">
                    <source src="/hero-video.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-950/70 to-charcoal-950/30"></div>
                <div className="absolute inset-0 bg-brushed opacity-30"></div>
            </motion.div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }} className="max-w-4xl">
                    <div className="inline-flex items-center gap-3 px-4 py-2 rounded bg-charcoal-900/80 border border-charcoal-800 backdrop-blur-sm mb-8">
                        <div className="relative flex h-3 w-3">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-hivis-500 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-3 w-3 bg-hivis-500"></span>
                        </div>
                        <span className="text-zinc-300 text-sm font-bold uppercase tracking-widest">Live: Crews Deployed in Fort McMurray</span>
                    </div>

                    <h1 className="text-5xl sm:text-6xl md:text-8xl font-display font-black text-white uppercase leading-[0.85] tracking-tighter mb-6">
                        When Iron Breaks, <br className="hidden sm:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-hivis-400 to-hivis-500">We Fix It.</span>
                    </h1>

                    <p className="text-xl sm:text-2xl text-zinc-300 mb-10 max-w-2xl font-medium leading-snug border-l-4 border-hivis-500 pl-6">
                        Mobile welding &amp; heavy equipment repair for the Oil Sands. 100% Indigenous-owned, CWB certified, on-site in hours — not days.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <motion.a whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} href="tel:7803819536"
                            className="inline-flex items-center justify-center px-8 py-5 font-black text-charcoal-950 bg-hivis-500 rounded hover:bg-hivis-400 transition-colors text-xl uppercase tracking-wide shadow-[0_0_30px_rgba(234,179,8,0.3)] w-full sm:w-auto relative overflow-hidden group border-2 border-transparent">
                            <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></span>
                            <Phone className="mr-3 w-6 h-6 relative z-10" />
                            <span className="relative z-10">Dispatch Now</span>
                        </motion.a>
                        <Link to="/contact"
                            className="inline-flex items-center justify-center px-8 py-5 font-bold text-white bg-charcoal-800/80 backdrop-blur rounded hover:bg-charcoal-700 transition-colors text-lg uppercase tracking-wide border border-charcoal-600 w-full sm:w-auto">
                            <Target className="mr-3 w-5 h-5 text-hivis-500" /> Get a Quote
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

function FastTrackForm() {
    const [formData, setFormData] = useState({ name: '', phone: '', description: '' });
    const [photoName, setPhotoName] = useState('');
    const [status, setStatus] = useState('idle');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('sending');
        try {
            const res = await fetch('https://formspree.io/f/xwvnzzkl', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name: formData.name,
                    phone: formData.phone,
                    description: formData.description,
                }),
            });
            if (res.ok) {
                setStatus('success');
                setFormData({ name: '', phone: '', description: '' });
                setPhotoName('');
            } else {
                setStatus('error');
            }
        } catch {
            setStatus('error');
        }
    };

    return (
        <section id="estimate" className="py-24 bg-charcoal-900 border-y border-charcoal-800 relative">
            <div className="absolute inset-0 bg-stripes opacity-5"></div>
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={heavyTransition}
                    className="bg-charcoal-950 border border-charcoal-800 p-8 md:p-12 shadow-2xl relative overflow-hidden rounded">
                    <div className="absolute top-0 right-0 w-16 h-16 bg-hivis-500" style={{ clipPath: 'polygon(100% 0, 0 0, 100% 100%)' }}></div>
                    <div className="text-center mb-10">
                        <h2 className="text-3xl md:text-4xl font-display font-black text-white uppercase tracking-tighter mb-4">Fast-Track <span className="text-hivis-500">Estimate</span></h2>
                        <p className="text-zinc-400 font-medium">Tell us what broke and where. Our lead tech will assess and call you back — usually within the hour.</p>
                    </div>

                    {status === 'success' ? (
                        <div className="text-center py-10">
                            <CheckCircle2 className="w-16 h-16 text-hivis-500 mx-auto mb-4" />
                            <h3 className="text-2xl font-display font-black text-white uppercase mb-2">Got It — We'll Call You Back</h3>
                            <p className="text-zinc-400">Expect to hear from our lead tech within the hour. For urgent breakdowns, call us directly at <a href="tel:7803819536" className="text-hivis-500 font-bold">(780) 381-9536</a>.</p>
                        </div>
                    ) : (
                        <form className="space-y-6" onSubmit={handleSubmit}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-xs font-bold text-zinc-500 uppercase tracking-widest mb-2">Name / Company</label>
                                    <input required type="text" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})}
                                        className="w-full bg-charcoal-900 border border-charcoal-800 text-white text-base px-4 py-3 rounded focus:outline-none focus:border-hivis-500 transition-colors" placeholder="John Doe / Acme Corp" />
                                </div>
                                <div>
                                    <label className="block text-xs font-bold text-zinc-500 uppercase tracking-widest mb-2">Phone Number</label>
                                    <input required type="tel" value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})}
                                        className="w-full bg-charcoal-900 border border-charcoal-800 text-white text-base px-4 py-3 rounded focus:outline-none focus:border-hivis-500 transition-colors" placeholder="(780) 555-1234" />
                                </div>
                            </div>
                            <div>
                                <label className="block text-xs font-bold text-zinc-500 uppercase tracking-widest mb-2">What Broke &amp; Where</label>
                                <textarea required rows={3} value={formData.description} onChange={e => setFormData({...formData, description: e.target.value})}
                                    className="w-full bg-charcoal-900 border border-charcoal-800 text-white text-base px-4 py-3 rounded focus:outline-none focus:border-hivis-500 transition-colors"
                                    placeholder="E.g., Cracked boom on CAT 349. Located at Site C, Mildred Lake..."></textarea>
                            </div>

                            {/* Photo upload */}
                            <div>
                                <label className="block text-xs font-bold text-zinc-500 uppercase tracking-widest mb-2">Photo of Damage <span className="text-zinc-600 normal-case font-medium">(optional — helps us assess faster)</span></label>
                                <label className="flex flex-col items-center justify-center border-2 border-dashed border-charcoal-700 hover:border-hivis-500 bg-charcoal-900/50 p-6 text-center cursor-pointer transition-colors rounded group">
                                    <input
                                        type="file"
                                        accept="image/*"
                                        capture="environment"
                                        className="hidden"
                                        onChange={e => {
                                            const file = e.target.files[0];
                                            if (file) setPhotoName(file.name);
                                        }}
                                    />
                                    {photoName ? (
                                        <div className="flex items-center gap-2 text-hivis-500 font-bold">
                                            <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                                            <span className="text-sm truncate max-w-[220px]">{photoName}</span>
                                        </div>
                                    ) : (
                                        <>
                                            <Camera className="w-8 h-8 text-zinc-500 mb-2 group-hover:text-hivis-500 transition-colors" />
                                            <p className="text-zinc-300 font-bold text-sm mb-1">Tap to snap or upload a photo</p>
                                            <p className="text-zinc-600 text-xs">JPG, PNG, HEIC accepted</p>
                                        </>
                                    )}
                                </label>
                            </div>

                            <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} type="submit" disabled={status === 'sending'}
                                className="w-full py-5 font-black text-charcoal-950 bg-hivis-500 hover:bg-hivis-400 transition-colors text-xl uppercase tracking-wide rounded disabled:opacity-60">
                                <span className="flex items-center justify-center gap-3">
                                    <Target className="w-6 h-6 flex-shrink-0" />
                                    <span>{status === 'sending' ? 'Sending...' : 'Submit for Immediate Review'}</span>
                                </span>
                            </motion.button>
                            {status === 'error' && (
                                <p className="text-center text-red-400 font-medium text-sm">Something went wrong. Call us directly at <a href="tel:7803819536" className="underline">(780) 381-9536</a>.</p>
                            )}
                        </form>
                    )}
                </motion.div>
            </div>
        </section>
    );
}

export default function HomePage() {
    return (
        <div>
            <HeroSection />

            {/* Accreditation Badges Strip */}
            <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={heavyTransition}
                className="py-12 bg-charcoal-900 border-b border-charcoal-800 relative overflow-hidden shadow-inner">
                <div className="absolute inset-0 bg-stripes opacity-10"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-6">
                        <span className="text-xs font-bold text-zinc-500 uppercase tracking-[0.2em]">Trusted &amp; Accredited</span>
                    </div>
                    <div className="flex flex-wrap justify-center items-center gap-8 md:gap-14">
                        {[
                            { src: '/images/badge-cwb.jpg', alt: 'CWB Certified' },
                            { src: '/images/badge-cor.png', alt: 'COR Certified' },
                            { src: '/images/badge-isn.png', alt: 'ISNetworld' },
                            { src: '/images/badge-avetta.png', alt: 'Avetta' },
                            { src: '/images/badge-naaba.png', alt: 'NAABA Certified Member' },
                        ].map((badge, i) => (
                            <motion.img key={i} src={badge.src} alt={badge.alt}
                                whileHover={{ scale: 1.1, filter: 'brightness(1.3)' }}
                                className="h-12 md:h-16 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity cursor-pointer" />
                        ))}
                    </div>
                </div>
            </motion.section>

            {/* Stats */}
            <section className="py-20 bg-charcoal-950 border-b border-charcoal-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 divide-y md:divide-y-0 md:divide-x divide-charcoal-800">
                        <AnimatedCounter value={0} label="Lost Time Incidents" />
                        <AnimatedCounter value={500} suffix="+" label="Projects Completed" />
                        <AnimatedCounter value={24} suffix="/7" label="Emergency Dispatch" />
                    </div>
                </div>
            </section>

            {/* Services Preview */}
            <section id="services" className="py-24 bg-charcoal-950 relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={heavyTransition} className="mb-16">
                        <h2 className="text-sm font-bold text-hivis-500 uppercase tracking-[0.2em] mb-4 flex items-center gap-2">
                            <span className="w-8 h-px bg-hivis-500"></span> Core Capabilities
                        </h2>
                        <h3 className="text-4xl md:text-5xl font-display font-black text-white uppercase tracking-tighter">
                            Engineered Solutions for <br className="hidden md:block" />
                            <span className="text-steel-400">Heavy Industry.</span>
                        </h3>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {[
                            { title: "Rig Welding", desc: "CWB-certified welders. B-Pressure pipe. Structural steel. We bring fully equipped rigs to your site — remote camps, plant shutdowns, emergency breakdowns.", icon: Zap, link: '/services#rig-welding' },
                            { title: "Heavy Equipment Repair", desc: "Excavator booms, bucket relines, frame cracks, undercarriage. Rapid response to minimize downtime — because a machine sitting still is money bleeding out.", icon: Truck, link: '/services#heavy-equipment' },
                        ].map((service, idx) => (
                            <motion.div key={idx} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                                transition={{ ...heavyTransition, delay: idx * 0.1 }} whileHover={{ y: -8, scale: 1.01 }}
                                className="group bg-charcoal-900 border border-charcoal-800 p-8 shadow-xl relative overflow-hidden molten-border rounded-sm">
                                <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
                                    <service.icon className="w-48 h-48 text-white" />
                                </div>
                                <service.icon className="w-12 h-12 text-hivis-500 mb-6 relative z-10" />
                                <h4 className="text-2xl font-display font-bold text-white uppercase mb-4 relative z-10">{service.title}</h4>
                                <p className="text-zinc-400 font-medium leading-relaxed relative z-10 mb-6">{service.desc}</p>
                                <Link to={service.link} className="inline-flex items-center gap-1 text-hivis-500 font-bold uppercase text-sm tracking-wider hover:text-hivis-400 transition-colors relative z-10">
                                    Learn More <ChevronRight className="w-4 h-4" />
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Fleet Preview */}
            <section id="fleet" className="py-24 bg-charcoal-900 border-y border-charcoal-800 shadow-inner">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={heavyTransition}
                        className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                        <div>
                            <h2 className="text-sm font-bold text-hivis-500 uppercase tracking-[0.2em] mb-4 flex items-center gap-2"><span className="w-8 h-px bg-hivis-500"></span> Mobility</h2>
                            <h3 className="text-4xl md:text-5xl font-display font-black text-white uppercase tracking-tighter">Rig &amp; <span className="text-steel-400">Gear.</span></h3>
                        </div>
                        <p className="text-zinc-300 max-w-md text-lg font-medium border-l-2 border-hivis-500 pl-4">
                            Fully mobilized and ready to roll. No matter where your site is in Northern Alberta, our equipped trucks get there — and get it done.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ ...heavyTransition, delay: 0.1 }}
                            whileHover={{ y: -5, scale: 1.01 }}
                            className="lg:col-span-2 relative h-[400px] lg:h-[500px] group overflow-hidden border border-charcoal-700 cursor-pointer shadow-2xl rounded">
                            <img src="/images/excavator.jpg" alt="Heavy Duty Welding Rig"
                                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                            <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-950/60 to-transparent"></div>
                            <div className="absolute bottom-0 left-0 p-8 w-full z-10">
                                <div className="inline-block px-3 py-1 bg-hivis-500 text-charcoal-950 font-bold text-xs uppercase tracking-widest mb-3 shadow-[0_0_10px_rgba(234,179,8,0.5)]">Fully Mobile</div>
                                <h4 className="text-3xl font-display font-black text-white uppercase">Welding Rigs &amp; Fleet</h4>
                                <p className="text-zinc-200 mt-2 max-w-md font-medium">Equipped to handle remote locations, camps, and challenging environments.</p>
                            </div>
                        </motion.div>
                        <div className="flex flex-col gap-8">
                            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ ...heavyTransition, delay: 0.2 }}
                                whileHover={{ y: -5, scale: 1.02 }} className="relative h-[230px] group overflow-hidden border border-charcoal-700 cursor-pointer rounded shadow-xl">
                                <img src="/images/welding-sparks.jpg" alt="Tooling"
                                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 to-transparent"></div>
                                <div className="absolute bottom-0 left-0 p-6 z-10">
                                    <h4 className="text-xl font-display font-bold text-white uppercase">Heavy Duty Tooling</h4>
                                </div>
                            </motion.div>
                            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ ...heavyTransition, delay: 0.3 }}
                                whileHover={{ y: -5, scale: 1.02 }}
                                className="relative h-[230px] group overflow-hidden border border-charcoal-700 bg-charcoal-950 flex flex-col justify-center p-8 cursor-pointer rounded shadow-xl">
                                <Wrench className="w-12 h-12 text-steel-400 mb-6" />
                                <h4 className="text-2xl font-display font-bold text-white uppercase mb-2">Advanced Equipment</h4>
                                <ul className="space-y-3 text-zinc-300 font-medium">
                                    <li className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-hivis-500" /> Structural Steel Fabrication</li>
                                    <li className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-hivis-500" /> Plant Maintenance Tools</li>
                                </ul>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="py-24 bg-charcoal-950 relative overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-hivis-500/5 blur-[150px]"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={heavyTransition} className="text-center mb-16">
                        <h2 className="text-sm font-bold text-hivis-500 uppercase tracking-[0.2em] mb-4">In The Field</h2>
                        <h3 className="text-4xl md:text-5xl font-display font-black text-white uppercase tracking-tighter">
                            Results That <span className="text-steel-400">Speak.</span>
                        </h3>
                    </motion.div>
                    <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={heavyTransition}
                        className="max-w-3xl mx-auto bg-charcoal-900 border border-charcoal-800 p-10 md:p-14 rounded text-center">
                        <div className="text-7xl font-display font-black text-charcoal-800 leading-none mb-6 select-none">"</div>
                        <p className="text-2xl text-zinc-200 font-medium leading-relaxed mb-8 italic">
                            We had a boom crack on a CAT 349 at 11 PM on a Thursday. Broadhead had a welder on-site by 2 AM, UT tested and cleared by morning shift. That's the kind of response that keeps a project on schedule.
                        </p>
                        <div className="border-t border-charcoal-800 pt-6">
                            <div className="text-white font-bold">Site Superintendent</div>
                            <div className="text-hivis-500 text-sm font-bold uppercase tracking-wider mt-1">Major Oil Sands Operator — Fort McMurray, AB</div>
                        </div>
                    </motion.div>
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ ...heavyTransition, delay: 0.2 }}
                        className="text-center mt-12">
                        <p className="text-zinc-500 font-medium mb-4">Work with us? We'd love to share your story.</p>
                        <a href="mailto:info@broadheadindustrial.ca" className="inline-flex items-center gap-2 text-hivis-500 font-bold uppercase text-sm tracking-wider hover:text-hivis-400 transition-colors">
                            <Send className="w-4 h-4" /> Submit a Testimonial
                        </a>
                    </motion.div>
                </div>
            </section>

            <FastTrackForm />
        </div>
    );
}
