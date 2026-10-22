import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { siteConfig, getWhatsAppLink } from '../config/siteConfig';

export const Navbar: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navItems = [
    { name: 'Services', href: '#services' },
    { name: 'Architecture', href: '#architecture' },
    { name: 'Estimator', href: '#calculator' },
    { name: 'Care', href: '#care' },
    { name: 'Leadership', href: '#founder' },
    { name: 'FAQs', href: '#faq' },
  ];

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' as const }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-xl border-b border-slate-200/90 shadow-[0_2px_20px_rgba(15,23,42,0.05)]'
          : 'bg-white/80 backdrop-blur-md border-b border-slate-200/60'
      }`}
    >
      <div className="h-[68px] max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 flex items-center justify-between gap-4">

        {/* Brand Identity */}
        <motion.a
          className="flex items-center gap-3 group"
          href="#"
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.98 }}
        >
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-emerald-800 to-teal-950 text-white flex items-center justify-center font-bold text-sm tracking-tight shadow-sm shadow-emerald-900/20">
            DX
          </div>
          <div className="flex flex-col">
            <span className="font-display-lg text-[17px] text-slate-900 font-bold tracking-tight leading-none">
              {siteConfig.companyName}
            </span>
            <span className="font-mono text-[10px] text-emerald-800 font-semibold uppercase tracking-widest leading-tight mt-0.5">
              Technology Solutions
            </span>
          </div>
        </motion.a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1 text-sm font-medium text-slate-600">
          {navItems.map((item) => (
            <a
              key={item.name}
              className="px-3.5 py-2 rounded-lg hover:text-slate-900 hover:bg-slate-100/80 transition-colors"
              href={item.href}
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-2.5">
          <motion.a
            className="hidden sm:inline-flex items-center gap-2 px-3.5 py-2 text-xs font-semibold rounded-xl border border-slate-200 bg-white hover:border-slate-300 text-slate-700 shadow-xs"
            href={getWhatsAppLink()}
            rel="noopener noreferrer"
            target="_blank"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
          >
            <span className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_6px_rgba(16,185,129,0.7)]" />
            <span>WhatsApp Direct</span>
          </motion.a>

          <motion.a
            className="inline-flex items-center justify-center bg-emerald-800 hover:bg-emerald-900 text-white text-xs font-semibold px-4 py-2.5 rounded-xl transition-all shadow-md shadow-emerald-800/20 border border-emerald-700"
            href="#intake"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            Start a Project
          </motion.a>

          {/* Mobile Menu Trigger */}
          <button
            type="button"
            className="lg:hidden p-2 rounded-lg text-slate-800 hover:bg-slate-100"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle Menu"
          >
            <span className="material-symbols-outlined text-2xl">
              {mobileOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>

      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden overflow-hidden bg-white border-b border-slate-200 shadow-lg"
          >
            <div className="px-4 py-5 flex flex-col gap-2.5">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-sm font-semibold text-slate-800 py-2.5 px-3 rounded-lg hover:bg-slate-50 transition-colors"
                >
                  {item.name}
                </a>
              ))}
              <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
                <a
                  href={getWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-center bg-emerald-700 hover:bg-emerald-800 text-white font-semibold text-xs py-2.5 rounded-lg transition-colors"
                >
                  Chat on WhatsApp (+91 8502099643)
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};
