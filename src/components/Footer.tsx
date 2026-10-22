import React from 'react';
import { siteConfig, getWhatsAppLink } from '../config/siteConfig';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-surface-container-low border-t border-surface-container-high mt-16 sm:mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 py-16">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 mb-12">
          
          {/* Col 1: Studio Identity & Ethos */}
          <div className="lg:col-span-4 flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-primary-container text-on-primary flex items-center justify-center font-bold text-xs tracking-tight">
                DX
              </div>
              <span className="font-display-lg text-lg text-on-surface font-bold">
                {siteConfig.companyName}
              </span>
            </div>
            
            <p className="font-body-sm text-xs text-on-surface-variant max-w-sm leading-relaxed">
              Founder-led engineering consultancy delivering high-leverage digital systems, bespoke software architecture, and practical operational intelligence.
            </p>

            <div className="mt-3 p-3 bg-surface-container rounded-lg border-l-2 border-primary-container">
              <p className="font-label-sm text-[10px] uppercase tracking-wider text-on-surface-variant mb-0.5 font-bold">
                Ethos
              </p>
              <p className="font-body-sm text-xs text-on-surface font-medium italic">
                &ldquo;Built with craft. Zero bloat. Direct founder accountability.&rdquo;
              </p>
            </div>
          </div>

          {/* Col 2: Capabilities Index */}
          <div className="lg:col-span-3 flex flex-col gap-1">
            <h4 className="font-label-md text-xs text-on-surface font-semibold tracking-wide uppercase mb-2">
              Capabilities Index
            </h4>
            <ul className="space-y-2 text-xs text-on-surface">
              <li className="border-b border-surface-container pb-1.5 flex items-center justify-between">
                <span>Build</span>
                <span className="font-label-sm text-[11px] text-on-surface-variant">Full-Stack Architecture</span>
              </li>
              <li className="border-b border-surface-container pb-1.5 flex items-center justify-between">
                <span>Automate</span>
                <span className="font-label-sm text-[11px] text-on-surface-variant">Workflows &amp; Ops</span>
              </li>
              <li className="border-b border-surface-container pb-1.5 flex items-center justify-between">
                <span>Manage</span>
                <span className="font-label-sm text-[11px] text-on-surface-variant">Ongoing Care</span>
              </li>
              <li className="border-b border-surface-container pb-1.5 flex items-center justify-between">
                <span>Connect</span>
                <span className="font-label-sm text-[11px] text-on-surface-variant">Integrations &amp; APIs</span>
              </li>
              <li className="border-b border-surface-container pb-1.5 flex items-center justify-between">
                <span>Deploy</span>
                <span className="font-label-sm text-[11px] text-on-surface-variant">Cloud &amp; DevOps</span>
              </li>
            </ul>
          </div>

          {/* Col 3: Direct Advisory */}
          <div className="lg:col-span-3 flex flex-col gap-2">
            <h4 className="font-label-md text-xs text-on-surface font-semibold tracking-wide uppercase mb-2">
              Direct Advisory
            </h4>
            <div className="space-y-3 text-xs">
              <div className="flex flex-col">
                <span className="font-label-sm text-[10px] uppercase tracking-wider text-on-surface-variant">Direct Line</span>
                <span className="font-body-sm text-on-surface font-medium mt-0.5">{siteConfig.contact.phone}</span>
              </div>
              <div className="flex flex-col">
                <span className="font-label-sm text-[10px] uppercase tracking-wider text-on-surface-variant">Direct Dispatch</span>
                <span className="font-body-sm text-on-surface font-medium mt-0.5">{siteConfig.contact.email}</span>
              </div>
              <div className="flex flex-col">
                <span className="font-label-sm text-[10px] uppercase tracking-wider text-on-surface-variant">Real-Time Channel</span>
                <a 
                  href={getWhatsAppLink()} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="font-body-sm text-primary-container font-medium hover:underline mt-0.5 flex items-center gap-1"
                >
                  <span>WhatsApp Founder Direct</span>
                  <span className="material-symbols-outlined text-xs">arrow_forward</span>
                </a>
              </div>
            </div>
          </div>

          {/* Col 4: Navigation */}
          <div className="lg:col-span-2 flex flex-col gap-1">
            <h4 className="font-label-md text-xs text-on-surface font-semibold tracking-wide uppercase mb-2">
              Navigation
            </h4>
            <nav className="flex flex-col space-y-1.5 text-xs text-on-surface-variant">
              <a className="hover:text-on-surface transition-colors" href="#services">Services</a>
              <a className="hover:text-on-surface transition-colors" href="#problems">Problem Matrix</a>
              <a className="hover:text-on-surface transition-colors" href="#care">Website Care</a>
              <a className="hover:text-on-surface transition-colors" href="#ai">Practical AI</a>
              <a className="hover:text-on-surface transition-colors" href="#process">Process</a>
              <a className="hover:text-on-surface transition-colors" href="#prototypes">Prototypes</a>
              <a className="hover:text-on-surface transition-colors" href="#founder">Founder</a>
            </nav>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-surface-container-high flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-on-surface-variant">
          <p>
            &copy; {new Date().getFullYear()} {siteConfig.companyName}. All rights reserved.
          </p>
          <div className="flex items-center gap-4 font-mono text-[11px]">
            <span>Jaipur &bull; Remote</span>
            <span className="text-primary-container font-semibold">High Craft &bull; Zero Bloat</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
