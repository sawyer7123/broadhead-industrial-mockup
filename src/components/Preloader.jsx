import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function Preloader() {
    const [loading, setLoading] = useState(true);
    const videoRef = useRef(null);

    const handleVideoEnd = () => {
        setLoading(false);
    };

    // Fallback: if video fails to load, dismiss after 3s
    const handleVideoError = () => {
        setTimeout(() => setLoading(false), 1000);
    };

    return (
        <AnimatePresence>
            {loading && (
                <motion.div
                    key="preloader"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="fixed inset-0 z-[100] bg-black flex items-center justify-center"
                >
                    <video
                        ref={videoRef}
                        src="/broadhead-intro.mp4"
                        autoPlay
                        muted
                        playsInline
                        onEnded={handleVideoEnd}
                        onError={handleVideoError}
                        className="w-full h-full object-contain"
                        style={{ maxWidth: '100vw', maxHeight: '100vh' }}
                    />

                    {/* Skip button */}
                    <button
                        onClick={() => setLoading(false)}
                        className="absolute bottom-8 right-8 text-zinc-500 hover:text-zinc-300 text-sm font-medium uppercase tracking-widest transition-colors z-10"
                    >
                        Skip
                    </button>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
