import React, { useState } from 'react';
import { ShieldCheck, Download, MailCheck, CheckCircle2 } from 'lucide-react';

export default function SafetyCompliancePackage() {
    const [requestStatus, setRequestStatus] = useState('idle'); // 'idle' | 'sending' | 'sent'

    const handleRequest = () => {
        setRequestStatus('sending');
        setTimeout(() => {
            setRequestStatus('sent');
            setTimeout(() => setRequestStatus('idle'), 4000);
        }, 1500);
    };

    return (
        <div className="w-full max-w-4xl mx-auto rounded-2xl p-8 glass-panel border flex flex-col md:flex-row gap-8 items-center border-industrial-600 shadow-2xl relative overflow-hidden">

            {/* Background glow effect */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-orange/10 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>

            <div className="flex-1 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-industrial-800 border border-industrial-600 text-brand-yellow text-xs font-bold uppercase tracking-wider mb-2">
                    <ShieldCheck size={14} />
                    Pre-Qualified Vendor Ready
                </div>
                <h3 className="text-3xl font-black text-white">Full Safety & Compliance Package</h3>
                <p className="text-slate-400 text-lg">
                    Instantly request our verified credentials, WCB clearance, and insurance documents to fast-track your site access approvals.
                </p>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-6 pt-4 border-t border-industrial-700/50">
                    <div className="flex flex-col items-center justify-center p-3 bg-industrial-900/50 rounded-xl border border-industrial-700">
                        <CheckCircle2 size={24} className="text-brand-yellow mb-2" />
                        <span className="text-white font-bold text-sm">WCB Alberta</span>
                    </div>
                    <div className="flex flex-col items-center justify-center p-3 bg-industrial-900/50 rounded-xl border border-industrial-700">
                        <CheckCircle2 size={24} className="text-brand-yellow mb-2" />
                        <span className="text-white font-bold text-sm">COR Certified</span>
                    </div>
                    <div className="flex flex-col items-center justify-center p-3 bg-industrial-900/50 rounded-xl border border-industrial-700">
                        <CheckCircle2 size={24} className="text-brand-yellow mb-2" />
                        <span className="text-white font-bold text-sm">$5M Liability</span>
                    </div>
                    <div className="flex flex-col items-center justify-center p-3 bg-industrial-900/50 rounded-xl border border-industrial-700">
                        <CheckCircle2 size={24} className="text-brand-yellow mb-2" />
                        <span className="text-white font-bold text-sm">CWB Division 2</span>
                    </div>
                </div>
            </div>

            <div className="w-full md:w-72 flex-shrink-0 bg-industrial-800 p-6 rounded-xl border border-industrial-600 shadow-xl relative z-10 flex flex-col justify-center">
                {requestStatus === 'idle' && (
                    <div className="space-y-4">
                        <input
                            type="email"
                            placeholder="Safety Officer Email"
                            className="w-full bg-industrial-900 border border-industrial-600 rounded-lg p-3 text-white focus:ring-2 focus:ring-brand-yellow focus:border-transparent outline-none transition-all text-sm"
                            defaultValue="safety@suncor.com"
                        />
                        <button
                            onClick={handleRequest}
                            className="w-full metallic-btn px-4 py-3 rounded-lg font-bold text-white uppercase text-sm flex items-center justify-center gap-2 group"
                        >
                            <Download size={18} className="text-brand-yellow group-hover:-translate-y-1 transition-transform" />
                            Send Package
                        </button>
                        <p className="text-xs text-slate-500 text-center">Contains PDF attachments (~4.2MB)</p>
                    </div>
                )}

                {requestStatus === 'sending' && (
                    <div className="flex flex-col items-center justify-center py-6 space-y-4">
                        <div className="w-10 h-10 border-4 border-industrial-700 border-t-brand-yellow rounded-full animate-spin"></div>
                        <p className="text-sm text-slate-400 animate-pulse font-medium">Assembling Documents...</p>
                    </div>
                )}

                {requestStatus === 'sent' && (
                    <div className="flex flex-col items-center justify-center py-6 space-y-3 text-center">
                        <div className="w-12 h-12 bg-green-500/20 text-green-400 rounded-full flex items-center justify-center mb-2">
                            <MailCheck size={28} />
                        </div>
                        <h4 className="text-white font-bold">Package Sent!</h4>
                        <p className="text-sm text-slate-400">Check your inbox for the secure download link.</p>
                    </div>
                )}
            </div>

        </div>
    );
}
