import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2 } from 'lucide-react';

const heavyTransition = { duration: 0.8, ease: [0.16, 1, 0.3, 1] };

export default function ContactPage() {
    const [formData, setFormData] = useState({ name: '', company: '', email: '', phone: '', service: 'Rig Welding', message: '' });
    const [status, setStatus] = useState('idle');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('sending');
        try {
            const res = await fetch('https://formspree.io/f/xkoveeng', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name: formData.name,
                    company: formData.company,
                    email: formData.email,
                    phone: formData.phone,
                    service: formData.service,
                    message: formData.message,
                }),
            });
            if (res.ok) {
                setStatus('success');
                setFormData({ name: '', company: '', email: '', phone: '', service: 'Rig Welding', message: '' });
            } else {
                setStatus('error');
            }
        } catch {
            setStatus('error');
        }
    };

    const set = (field) => (e) => setFormData({ ...formData, [field]: e.target.value });

    return (
        <div className="pt-20">
            <section className="relative py-24 lg:py-32 overflow-hidden border-b border-charcoal-800">
                <div className="absolute inset-0">
                    <img src="/images/service-equipment.webp" alt="" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-charcoal-950/80"></div>
                </div>
                <div className="absolute inset-0 bg-stripes opacity-5"></div>
                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={heavyTransition}>
                        <h2 className="text-sm font-bold text-hivis-500 uppercase tracking-[0.2em] mb-4 flex items-center gap-2">
                            <span className="w-8 h-px bg-hivis-500"></span> Get In Touch
                        </h2>
                        <h1 className="text-5xl md:text-7xl font-display font-black text-white uppercase tracking-tighter">
                            Contact <span className="text-steel-400">Us.</span>
                        </h1>
                        <p className="text-xl text-zinc-400 mt-6 max-w-xl font-medium">Emergency or just planning ahead — we're ready either way.</p>
                    </motion.div>
                </div>
            </section>

            <section className="py-24 bg-charcoal-950">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        {/* Contact Info Cards */}
                        <div className="space-y-6">
                            {[
                                { icon: Phone, title: 'Call Us', info: '(780) 381-9536', sub: '24/7 Emergency Dispatch', href: 'tel:7803819536' },
                                { icon: Mail, title: 'Email Us', info: 'info@broadheadindustrial.ca', sub: 'We respond within 24 hours', href: 'mailto:info@broadheadindustrial.ca' },
                                { icon: MapPin, title: 'Location', info: 'Fort McMurray, AB', sub: 'Serving all of Northern Alberta', href: null },
                                { icon: Clock, title: 'Hours', info: '24/7 Emergency Service', sub: 'Office: Mon–Fri 7AM–5PM', href: null },
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ ...heavyTransition, delay: i * 0.1 }}
                                    whileHover={{ x: 5 }}
                                    className="flex items-start gap-4 p-5 bg-charcoal-900 border border-charcoal-800 rounded cursor-pointer group"
                                >
                                    <div className="w-12 h-12 bg-charcoal-800 rounded flex items-center justify-center flex-shrink-0 group-hover:bg-hivis-500 transition-colors">
                                        <item.icon className="w-6 h-6 text-hivis-500 group-hover:text-charcoal-950 transition-colors" />
                                    </div>
                                    <div>
                                        <div className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-1">{item.title}</div>
                                        {item.href ? (
                                            <a href={item.href} className="text-lg font-bold text-white hover:text-hivis-500 transition-colors">{item.info}</a>
                                        ) : (
                                            <div className="text-lg font-bold text-white">{item.info}</div>
                                        )}
                                        <div className="text-sm text-zinc-400 font-medium mt-0.5">{item.sub}</div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Contact Form */}
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={heavyTransition}
                            className="lg:col-span-2 bg-charcoal-900 border border-charcoal-800 p-8 md:p-10 shadow-2xl rounded relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 w-16 h-16 bg-hivis-500" style={{ clipPath: 'polygon(100% 0, 0 0, 100% 100%)' }}></div>

                            {status === 'success' ? (
                                <div className="text-center py-16">
                                    <CheckCircle2 className="w-16 h-16 text-hivis-500 mx-auto mb-4" />
                                    <h3 className="text-2xl font-display font-black text-white uppercase mb-2">Message Sent</h3>
                                    <p className="text-zinc-400">We'll be in touch within 24 hours. For urgent breakdowns, call us directly at <a href="tel:7803819536" className="text-hivis-500 font-bold">(780) 381-9536</a>.</p>
                                </div>
                            ) : (
                                <>
                                    <h3 className="text-2xl font-display font-black text-white uppercase tracking-tighter mb-2">Send Us a Message</h3>
                                    <p className="text-zinc-400 font-medium mb-8">Tell us what you need. We'll get back to you fast.</p>
                                    <form className="space-y-6" onSubmit={handleSubmit}>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div>
                                                <label className="block text-xs font-bold text-zinc-500 uppercase tracking-widest mb-2">Name</label>
                                                <input required type="text" value={formData.name} onChange={set('name')} className="w-full bg-charcoal-950 border border-charcoal-800 text-white text-base px-4 py-3 rounded focus:outline-none focus:border-hivis-500 transition-colors" placeholder="Your name" />
                                            </div>
                                            <div>
                                                <label className="block text-xs font-bold text-zinc-500 uppercase tracking-widest mb-2">Company</label>
                                                <input type="text" value={formData.company} onChange={set('company')} className="w-full bg-charcoal-950 border border-charcoal-800 text-white text-base px-4 py-3 rounded focus:outline-none focus:border-hivis-500 transition-colors" placeholder="Your company" />
                                            </div>
                                        </div>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div>
                                                <label className="block text-xs font-bold text-zinc-500 uppercase tracking-widest mb-2">Email</label>
                                                <input required type="email" value={formData.email} onChange={set('email')} className="w-full bg-charcoal-950 border border-charcoal-800 text-white text-base px-4 py-3 rounded focus:outline-none focus:border-hivis-500 transition-colors" placeholder="email@company.com" />
                                            </div>
                                            <div>
                                                <label className="block text-xs font-bold text-zinc-500 uppercase tracking-widest mb-2">Phone</label>
                                                <input type="tel" value={formData.phone} onChange={set('phone')} className="w-full bg-charcoal-950 border border-charcoal-800 text-white text-base px-4 py-3 rounded focus:outline-none focus:border-hivis-500 transition-colors" placeholder="(780) 555-1234" />
                                            </div>
                                        </div>
                                        <div>
                                            <label className="block text-xs font-bold text-zinc-500 uppercase tracking-widest mb-2">Service Needed</label>
                                            <select value={formData.service} onChange={set('service')} className="w-full bg-charcoal-950 border border-charcoal-800 text-white text-base px-4 py-3 rounded focus:outline-none focus:border-hivis-500 transition-colors">
                                                <option>Rig Welding</option>
                                                <option>Heavy Equipment Repair</option>
                                                <option>Emergency Dispatch</option>
                                                <option>Other / Not Sure</option>
                                            </select>
                                        </div>
                                        <div>
                                            <label className="block text-xs font-bold text-zinc-500 uppercase tracking-widest mb-2">Message</label>
                                            <textarea required rows={5} value={formData.message} onChange={set('message')} className="w-full bg-charcoal-950 border border-charcoal-800 text-white text-base px-4 py-3 rounded focus:outline-none focus:border-hivis-500 transition-colors" placeholder="Describe your project, breakdown, or what you need from us..."></textarea>
                                        </div>
                                        <motion.button
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                            type="submit"
                                            disabled={status === 'sending'}
                                            className="w-full py-5 font-black text-charcoal-950 bg-hivis-500 hover:bg-hivis-400 transition-colors text-xl uppercase tracking-wide flex items-center justify-center gap-2 rounded disabled:opacity-60"
                                        >
                                            <Send className="w-6 h-6" />
                                            {status === 'sending' ? 'Sending...' : 'Send Message'}
                                        </motion.button>
                                        {status === 'error' && (
                                            <p className="text-center text-red-400 font-medium text-sm">Something went wrong. Email us directly at <a href="mailto:info@broadheadindustrial.ca" className="underline">info@broadheadindustrial.ca</a>.</p>
                                        )}
                                    </form>
                                </>
                            )}
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
}
