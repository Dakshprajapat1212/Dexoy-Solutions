import React, { useState } from 'react';
import { MessageSquare, X } from 'lucide-react';
import { getWhatsAppLink } from '../config/siteConfig';

export const WhatsAppFloatingCTA: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <aside aria-label="WhatsApp quick chat" className="fixed bottom-6 right-6 z-40 flex items-end flex-col space-y-2">
      {/* Tooltip prompt bubble */}
      {showTooltip && (
        <div className="bg-slate-900 border border-slate-700 text-slate-200 text-xs py-2 px-3.5 rounded-xl shadow-xl flex items-center space-x-2 max-w-xs animate-fade-in">
          <span>Need a quick answer? Chat directly with the founders on WhatsApp.</span>
          <button 
            onClick={() => setShowTooltip(false)}
            className="text-slate-400 hover:text-white p-0.5"
            aria-label="Close tooltip"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating Button */}
      <a
        href={getWhatsAppLink("Hello! I am on your website and would like to discuss a project requirement.")}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center space-x-2.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold px-4 py-3 rounded-full shadow-lg shadow-emerald-500/30 transition-transform hover:scale-105 active:scale-95"
        title="Chat on WhatsApp"
      >
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-slate-950 opacity-40"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-slate-950"></span>
        </span>
        <MessageSquare className="w-5 h-5 text-slate-950" />
        <span className="text-sm font-semibold">WhatsApp</span>
      </a>
    </aside>
  );
};
