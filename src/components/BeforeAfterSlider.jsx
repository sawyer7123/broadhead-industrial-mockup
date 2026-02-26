import React, { useState, useRef, useEffect } from 'react';
import { GripVertical } from 'lucide-react';

export default function BeforeAfterSlider({
    beforeImage = "https://images.unsplash.com/photo-1581092335397-9583eb92d232?q=80&w=1200&auto=format&fit=crop", // Dirty/Broken industrial
    afterImage = "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=1200&auto=format&fit=crop",   // Clean welding/metal
    beforeLabel = "Damaged Asset",
    afterLabel = "Repaired & Certified"
}) {
    const [sliderPosition, setSliderPosition] = useState(50);
    const [isDragging, setIsDragging] = useState(false);
    const containerRef = useRef(null);

    const handleMove = (clientX) => {
        if (!containerRef.current) return;

        const rect = containerRef.current.getBoundingClientRect();
        const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
        const percent = Math.max(0, Math.min((x / rect.width) * 100, 100));

        setSliderPosition(percent);
    };

    const onMouseMove = (e) => {
        if (!isDragging) return;
        handleMove(e.clientX);
    };

    const onTouchMove = (e) => {
        if (!isDragging) return;
        handleMove(e.touches[0].clientX);
    };

    const handleInteractionStart = (clientX) => {
        setIsDragging(true);
        handleMove(clientX);
    };

    useEffect(() => {
        const stopDragging = () => setIsDragging(false);

        if (isDragging) {
            window.addEventListener('mouseup', stopDragging);
            window.addEventListener('touchend', stopDragging);
        } else {
            window.removeEventListener('mouseup', stopDragging);
            window.removeEventListener('touchend', stopDragging);
        }

        return () => {
            window.removeEventListener('mouseup', stopDragging);
            window.removeEventListener('touchend', stopDragging);
        };
    }, [isDragging]);

    return (
        <div className="w-full max-w-4xl mx-auto rounded-2xl overflow-hidden glass-panel border-industrial-600 shadow-2xl flex flex-col">

            <div className="p-4 border-b border-industrial-700 bg-industrial-900/50 flex justify-between items-center">
                <h3 className="text-lg font-bold text-white">Project Case Study</h3>
                <span className="px-3 py-1 bg-industrial-800 text-xs text-brand-yellow font-bold rounded-full border border-industrial-600">
                    Heavy Equipment Division
                </span>
            </div>

            <div
                ref={containerRef}
                className="relative w-full aspect-video cursor-ew-resize select-none overflow-hidden touch-none"
                onMouseMove={onMouseMove}
                onTouchMove={onTouchMove}
                onMouseDown={(e) => handleInteractionStart(e.clientX)}
                onTouchStart={(e) => handleInteractionStart(e.touches[0].clientX)}
            >
                {/* Background (After Image - Clean) */}
                <div className="absolute inset-0 w-full h-full">
                    <img src={afterImage} alt="After Repair" className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none"></div>
                    <span className="absolute bottom-4 right-4 bg-industrial-900/80 backdrop-blur border border-industrial-600 px-4 py-2 rounded-lg text-white font-bold text-sm shadow-lg pointer-events-none">
                        {afterLabel}
                    </span>
                </div>

                {/* Foreground (Before Image - Dirty) */}
                <div
                    className="absolute inset-0 w-full h-full border-r-2 border-brand-yellow will-change-transform"
                    style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
                >
                    <img src={beforeImage} alt="Before Repair" className="absolute inset-0 w-[100vw] max-w-none md:w-[894px] h-full object-cover object-center pointer-events-none" style={{ width: containerRef.current ? `${containerRef.current.offsetWidth}px` : '100%' }} />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none"></div>
                    <span className="absolute bottom-4 left-4 bg-industrial-900/80 backdrop-blur border border-industrial-600 px-4 py-2 rounded-lg text-slate-300 font-bold text-sm shadow-lg pointer-events-none">
                        {beforeLabel}
                    </span>
                </div>

                {/* Slider Handle */}
                <div
                    className="absolute top-0 bottom-0 w-1 bg-brand-yellow flex items-center justify-center cursor-ew-resize hover:bg-white transition-colors duration-150"
                    style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
                >
                    <div className="w-10 h-10 bg-industrial-900 border-2 border-brand-yellow rounded-full flex items-center justify-center shadow-lg hover:scale-110 hover:border-white transition-transform duration-200">
                        <GripVertical size={20} className="text-brand-yellow" />
                    </div>
                </div>
            </div>

        </div>
    );
}
