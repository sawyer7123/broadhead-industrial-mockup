import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function Preloader() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 2200);
        return () => clearTimeout(timer);
    }, []);

    return (
        <AnimatePresence>
            {loading && (
                <motion.div
                    key="preloader"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, scale: 1.05 }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    className="fixed inset-0 z-[100] bg-charcoal-950 flex flex-col items-center justify-center"
                >
                    {/* Ambient glow */}
                    <div className="absolute w-[400px] h-[400px] rounded-full bg-hivis-500/10 blur-[120px] animate-pulse"></div>

                    {/* Logo */}
                    <motion.img
                        src="/images/logo.png"
                        alt="Broadhead Industrial"
                        className="h-16 md:h-20 w-auto mb-8 relative z-10"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    />

                    {/* Loading bar */}
                    <div className="w-48 h-1 bg-charcoal-800 rounded-full overflow-hidden relative z-10">
                        <motion.div
                            className="h-full bg-gradient-to-r from-hivis-500 to-hivis-400 rounded-full"
                            initial={{ width: '0%' }}
                            animate={{ width: '100%' }}
                            transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
                        />
                    </div>

                    {/* Tagline */}
                    <motion.p
                        className="text-zinc-500 text-xs font-bold uppercase tracking-[0.3em] mt-6 relative z-10"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                    >
                        Intuitive Welding · Dynamic Results
                    </motion.p>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
