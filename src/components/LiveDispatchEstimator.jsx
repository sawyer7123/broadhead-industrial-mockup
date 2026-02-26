import React, { useState, useEffect } from 'react';
import { MapPin, Truck, Clock, AlertTriangle, Wrench } from 'lucide-react';

const LOCATIONS = [
    { id: 'base-plant', name: 'Suncor Base Plant', baseMinutes: 45 },
    { id: 'syncrude', name: 'Syncrude Aurora/Mildred', baseMinutes: 55 },
    { id: 'kearl', name: 'Kearl Lake', baseMinutes: 90 },
    { id: 'conklin', name: 'Conklin Area', baseMinutes: 120 },
    { id: 'in-town', name: 'Fort McMurray (In-Town)', baseMinutes: 20 },
];

const EQUIPMENT_TYPES = [
    { id: 'heavy-hauler', name: 'Heavy Hauler (797/980E)', modifier: 15 },
    { id: 'excavator', name: 'Excavator/Shovel', modifier: 25 },
    { id: 'dozer', name: 'Dozer/Grader', modifier: 10 },
    { id: 'structural', name: 'Plant Structural Steel', modifier: 30 },
    { id: 'other', name: 'Other / General Repair', modifier: 0 },
];

export default function LiveDispatchEstimator() {
    const [selectedLocation, setSelectedLocation] = useState(LOCATIONS[0].id);
    const [selectedEquipment, setSelectedEquipment] = useState(EQUIPMENT_TYPES[0].id);
    const [isCalculating, setIsCalculating] = useState(false);
    const [estimatedTime, setEstimatedTime] = useState(null);

    useEffect(() => {
        // Initial calculation on mount
        handleCalculate();
    }, []);

    const handleCalculate = () => {
        setIsCalculating(true);

        // Simulate network delay for "calculation" effect
        setTimeout(() => {
            const loc = LOCATIONS.find(l => l.id === selectedLocation);
            const eq = EQUIPMENT_TYPES.find(e => e.id === selectedEquipment);

            // Calculate time (Base travel + equipment prep modifier + random traffic buffer 5-15 mins)
            const trafficBuffer = Math.floor(Math.random() * 11) + 5;
            const totalMinutes = loc.baseMinutes + eq.modifier + trafficBuffer;

            setEstimatedTime(totalMinutes);
            setIsCalculating(false);
        }, 800);
    };

    const handleLocationChange = (e) => {
        setSelectedLocation(e.target.value);
        handleCalculate();
    };

    const handleEquipmentChange = (e) => {
        setSelectedEquipment(e.target.value);
        handleCalculate();
    };

    return (
        <div className="glass-panel rounded-2xl p-6 relative overflow-hidden max-w-2xl mx-auto w-full border-t flex flex-col items-start border-industrial-600 shadow-2xl">
            {/* Decorative Top Accent */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-orange via-brand-yellow to-brand-orange"></div>

            <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-industrial-800 rounded-lg border border-industrial-700">
                    <Truck className="text-brand-yellow" size={24} />
                </div>
                <div>
                    <h2 className="text-2xl font-bold text-white">Live Dispatch Estimator</h2>
                    <p className="text-sm text-slate-400">24/7 Priority Emergency Action</p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full mb-8">
                {/* Location Select */}
                <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-300 flex items-center gap-2">
                        <MapPin size={16} className="text-brand-orange" />
                        Site Location
                    </label>
                    <select
                        className="w-full bg-industrial-800 border border-industrial-600 rounded-lg p-3 text-white focus:ring-2 focus:ring-brand-yellow focus:border-transparent outline-none transition-all appearance-none"
                        value={selectedLocation}
                        onChange={handleLocationChange}
                    >
                        {LOCATIONS.map(loc => (
                            <option key={loc.id} value={loc.id}>{loc.name}</option>
                        ))}
                    </select>
                </div>

                {/* Equipment Select */}
                <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-300 flex items-center gap-2">
                        <Wrench size={16} className="text-brand-orange" />
                        Equipment Type
                    </label>
                    <select
                        className="w-full bg-industrial-800 border border-industrial-600 rounded-lg p-3 text-white focus:ring-2 focus:ring-brand-yellow focus:border-transparent outline-none transition-all appearance-none"
                        value={selectedEquipment}
                        onChange={handleEquipmentChange}
                    >
                        {EQUIPMENT_TYPES.map(eq => (
                            <option key={eq.id} value={eq.id}>{eq.name}</option>
                        ))}
                    </select>
                </div>
            </div>

            {/* Results Panel */}
            <div className="w-full bg-industrial-900 border border-industrial-700/50 rounded-xl p-6 relative overflow-hidden">
                {isCalculating ? (
                    <div className="flex flex-col items-center justify-center py-4 space-y-4">
                        <div className="w-8 h-8 border-4 border-industrial-700 border-t-brand-yellow rounded-full animate-spin"></div>
                        <p className="text-sm text-slate-400 animate-pulse">Calculating optimal route...</p>
                    </div>
                ) : (
                    <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                        <div className="flex items-center gap-4">
                            <div className="p-4 bg-industrial-800 rounded-full border border-industrial-600 relative">
                                <Clock className="text-brand-yellow" size={32} />
                                <div className="absolute -top-1 -right-1 w-3 h-3 bg-brand-orange rounded-full animate-ping"></div>
                                <div className="absolute -top-1 -right-1 w-3 h-3 bg-brand-orange rounded-full"></div>
                            </div>
                            <div>
                                <p className="text-slate-400 text-sm font-medium mb-1">Estimated Arrival Time</p>
                                <div className="flex items-baseline gap-2">
                                    <span className="text-4xl font-bold text-white text-glow">{estimatedTime}</span>
                                    <span className="text-xl text-brand-yellow font-semibold">MINUTES</span>
                                </div>
                            </div>
                        </div>

                        <button className="w-full md:w-auto metallic-btn px-6 py-4 rounded-xl font-bold text-white tracking-wide uppercase text-sm flex items-center justify-center gap-2 group">
                            <AlertTriangle size={18} className="text-brand-yellow group-hover:animate-pulse" />
                            Dispatch Now
                        </button>
                    </div>
                )}
            </div>

            <p className="text-xs text-slate-500 mt-4 text-center w-full">
                *Estimates include primary tool prep and average traffic routes on Highway 63. Actual times may vary.
            </p>
        </div>
    );
}
