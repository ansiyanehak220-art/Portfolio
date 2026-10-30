import React, { useState, useEffect } from 'react';
import { Menu, X, Terminal, Sparkles, ArrowUpRight } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('About');

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Campus Life', href: '#campus-life' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 pt-4 transition-all duration-300">
      <nav
        className={`max-w-6xl mx-auto rounded-2xl md:rounded-full transition-all duration-300 ${
          isScrolled
            ? 'bg-[#0d1117]/85 backdrop-blur-xl border border-emerald-500/30 shadow-[0_8px_30px_rgba(0,0,0,0.6)] py-3 px-5 sm:px-7'
            : 'bg-[#0d1117]/65 backdrop-blur-md border border-emerald-500/20 shadow-[0_4px_24px_rgba(0,0,0,0.4)] py-3.5 px-5 sm:px-7'
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Logo / Name */}
          <a
            href="#"
            className="flex items-center gap-3 group focus:outline-none"
            onClick={() => setActiveLink('')}
          >
            <div className="relative flex items-center justify-center w-9 h-9 rounded-xl bg-carbon-800 border border-emerald-500/40 group-hover:border-emerald-400 group-hover:shadow-[0_0_15px_rgba(16,185,129,0.4)] transition-all duration-300">
              <span className="font-mono text-xs font-bold text-emerald-400 group-hover:text-lime-300 transition-colors">
                &lt;AN&gt;
              </span>
              <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            </div>
            
            <div className="flex flex-col">
              <span className="text-sm sm:text-base font-bold tracking-tight text-slate-100 group-hover:text-emerald-400 transition-colors flex items-center gap-1.5">
                Ansiya Nehak
                <span className="inline-block text-[10px] font-mono font-medium px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">
                  AIML '28
                </span>
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => {
              const isActive = activeLink === link.name;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setActiveLink(link.name)}
                  className={`relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-200 ${
                    isActive
                      ? 'text-emerald-300 bg-emerald-950/60 shadow-[inset_0_0_12px_rgba(16,185,129,0.25)] border border-emerald-500/30'
                      : 'text-slate-300 hover:text-emerald-400 hover:bg-emerald-500/10'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_#10b981]"></span>
                  )}
                </a>
              );
            })}
          </div>

          {/* Action Button & Mobile Menu Toggle */}
          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="hidden sm:inline-flex items-center gap-1.5 text-xs font-mono font-semibold px-4 py-2 rounded-full border border-emerald-500/40 text-emerald-300 bg-carbon-800/80 hover:bg-emerald-500 hover:text-carbon-950 hover:shadow-[0_0_20px_rgba(16,185,129,0.45)] transition-all duration-300"
            >
              <span>Get in Touch</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden flex items-center justify-center w-9 h-9 rounded-lg bg-carbon-800/80 border border-emerald-500/30 text-emerald-400 hover:text-lime-300 hover:border-emerald-400 transition-colors focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 pt-3 border-t border-emerald-500/20 flex flex-col gap-1.5 pb-2 animate-in fade-in slide-in-from-top-2 duration-200">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => {
                  setActiveLink(link.name);
                  setMobileMenuOpen(false);
                }}
                className={`flex items-center justify-between px-3.5 py-2 rounded-xl text-sm font-medium transition-all ${
                  activeLink === link.name
                    ? 'bg-emerald-950/70 text-emerald-300 border border-emerald-500/30'
                    : 'text-slate-300 hover:text-emerald-300 hover:bg-emerald-500/10'
                }`}
              >
                <span>{link.name}</span>
                <span className="font-mono text-xs text-emerald-500/50">/&gt;</span>
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-2 text-center text-xs font-mono font-semibold py-2.5 rounded-xl border border-emerald-500/40 text-carbon-950 bg-emerald-400 hover:bg-emerald-300 transition-colors"
            >
              Get in Touch →
            </a>
          </div>
        )}
      </nav>
    </header>
  );
}

