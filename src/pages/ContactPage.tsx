import React from 'react';
import { ContactForm } from '../components/ContactForm';
import { FAQSection } from '../components/FAQSection';
import { MessageSquare, Phone, Mail, MapPin } from 'lucide-react';
import { siteConfig, getWhatsAppLink } from '../config/siteConfig';

export const ContactPage: React.FC = () => {
  return (
    <div className="bg-slate-950 pt-28">
      
      {/* Header */}
      <section className="py-16 bg-slate-900 border-b border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center space-x-2 text-xs font-semibold tracking-wider text-emerald-400 uppercase bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20 mb-3">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Direct Inquiries</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-bold text-white tracking-tight">
            Contact {siteConfig.companyName}
          </h1>
          <p className="text-slate-300 text-base sm:text-lg mt-4 leading-relaxed">
            Have a project, a technical problem, or an automation requirement? Reach out directly to discuss scope, timeline, and pricing.
          </p>

          {/* Quick Contact Badges */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-xs font-semibold">
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-4 py-2 rounded-xl bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 hover:bg-emerald-500/25 transition-colors"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp: Fastest Response</span>
            </a>

            <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-xl bg-slate-950 text-slate-300 border border-slate-800">
              <Mail className="w-4 h-4 text-indigo-400" />
              <span className="font-mono">{siteConfig.contact.email}</span>
            </div>

            <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-xl bg-slate-950 text-slate-300 border border-slate-800">
              <Phone className="w-4 h-4 text-indigo-400" />
              <span className="font-mono">{siteConfig.contact.phone}</span>
            </div>

            <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-xl bg-slate-950 text-slate-300 border border-slate-800">
              <MapPin className="w-4 h-4 text-indigo-400" />
              <span>{siteConfig.contact.location}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Inquiry Form Section */}
      <ContactForm />

      {/* Common Questions */}
      <FAQSection />

    </div>
  );
};
