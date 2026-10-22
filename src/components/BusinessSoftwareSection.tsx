import React from 'react';
import { Link } from 'react-router-dom';
import { 
  FileSpreadsheet, 
  MessageSquareWarning, 
  ArrowRight, 
  CheckCircle2, 
  XCircle, 
  Cpu
} from 'lucide-react';

export const BusinessSoftwareSection: React.FC = () => {
  return (
    <section className="py-20 bg-slate-900 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Problem & Value */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center space-x-2 text-xs font-semibold tracking-wider text-amber-400 uppercase bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">
              <Cpu className="w-3.5 h-3.5" />
              <span>Operational Efficiency</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight leading-snug">
              Still managing your business through Excel and WhatsApp?
            </h2>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              When a business is just starting out, spreadsheets and chat messages work fine. But as order volume and customer counts grow, data gets lost, files get overwritten, and staff spend half their day tracking who did what.
            </p>

            <p className="text-slate-300 text-base leading-relaxed">
              <strong className="text-white">We build systems tailored to your exact workflow.</strong> You don't need expensive enterprise ERP software loaded with 1,000 features you'll never touch. We build lean, focused web software containing only the buttons and screens your team actually uses.
            </p>

            {/* Practical Areas */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {[
                "Customer database & pipeline tracking",
                "Stock alerts & warehouse records",
                "Automated GST invoices & receipts",
                "Staff shift allocation & job checklists",
                "Booking queues & client history",
                "Daily revenue & performance dashboards"
              ].map((item, i) => (
                <div key={i} className="flex items-center space-x-2 text-sm text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="pt-4 flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact?need=Business%20Software"
                className="inline-flex items-center justify-center space-x-2 px-6 py-3 rounded-xl font-semibold text-white bg-indigo-600 hover:bg-indigo-500 shadow-md transition-colors"
              >
                <span>Replace Manual Spreadsheets</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Right Column: Visual Comparison (Old vs New) */}
          <div className="lg:col-span-5">
            <div className="space-y-4">
              
              {/* The Old Manual Way */}
              <div className="p-5 rounded-2xl bg-rose-950/20 border border-rose-900/30">
                <div className="flex items-center space-x-2 text-rose-400 font-semibold text-sm mb-3">
                  <XCircle className="w-4 h-4 shrink-0" />
                  <span>The Manual Way (Current Friction)</span>
                </div>
                <div className="space-y-2 text-xs text-rose-200/80">
                  <div className="flex items-start space-x-2">
                    <FileSpreadsheet className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                    <span>Multiple copies of 'Final_Sheet_v3.xlsx' across staff computers.</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <MessageSquareWarning className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                    <span>Customer orders buried in unstructured WhatsApp personal chats.</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <XCircle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                    <span>No automated follow-up when invoices or inquiries are pending.</span>
                  </div>
                </div>
              </div>

              {/* The New Custom System Way */}
              <div className="p-6 rounded-2xl bg-slate-950 border border-emerald-500/30 shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none" />
                
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2 text-emerald-400 font-semibold text-sm">
                    <CheckCircle2 className="w-4 h-4 shrink-0" />
                    <span>Custom System (Built for You)</span>
                  </div>
                  <span className="text-[10px] font-mono bg-emerald-500/10 text-emerald-400 px-2 py-0.5 rounded border border-emerald-500/20">
                    One Single Source of Truth
                  </span>
                </div>

                <div className="space-y-3">
                  <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 flex justify-between items-center text-xs">
                    <span className="text-slate-300">New Client Order #1042</span>
                    <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-medium">WhatsApp Sent</span>
                  </div>

                  <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 flex justify-between items-center text-xs">
                    <span className="text-slate-300">Inventory Alert: Material Low</span>
                    <span className="px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 font-medium">Auto-Flagged</span>
                  </div>

                  <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 flex justify-between items-center text-xs">
                    <span className="text-slate-300">Monthly Revenue Summary</span>
                    <span className="px-2 py-0.5 rounded bg-indigo-500/20 text-indigo-300 font-medium">Instant PDF</span>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-800 text-[11px] text-slate-400 text-center">
                  Securely accessible from mobile, tablet, and PC.
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
