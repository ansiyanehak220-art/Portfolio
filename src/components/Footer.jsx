import React from 'react';
import { ArrowUp, Github, Linkedin, Mail, Heart } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative z-10 border-t border-emerald-500/15 py-12 px-4 sm:px-6 lg:px-8 bg-[#0d1117]/95 backdrop-blur-md">
      <div className="max-w-7xl mx-auto flex flex-col items-center justify-center space-y-6 text-center">
        
        {/* Centered required signature line */}
        <p className="text-sm sm:text-base font-medium text-slate-200 tracking-wide">
          Designed &amp; Engineered by{' '}
          <span className="font-bold bg-gradient-to-r from-emerald-400 to-lime-300 bg-clip-text text-transparent">
            Ansiya nehak
          </span>{' '}
          • <span className="font-mono text-emerald-300">Class of 2029</span>
        </p>

        {/* Quick Social & Direct Shortcuts */}
        <div className="flex items-center gap-5 text-slate-400">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-emerald-400 transition-colors p-2 rounded-xl hover:bg-carbon-900 border border-transparent hover:border-emerald-500/20"
            aria-label="GitHub"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-emerald-400 transition-colors p-2 rounded-xl hover:bg-carbon-900 border border-transparent hover:border-emerald-500/20"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a
            href="mailto:ansiyanehak@gmail.com"
            className="hover:text-emerald-400 transition-colors p-2 rounded-xl hover:bg-carbon-900 border border-transparent hover:border-emerald-500/20"
            aria-label="Email"
          >
            <Mail className="w-4 h-4" />
          </a>
        </div>

        {/* Bottom Credits & Scroll to Top */}
        <div className="flex flex-col sm:flex-row items-center justify-between w-full pt-6 border-t border-emerald-500/10 text-xs font-mono text-slate-500 gap-4">
          <p>© 2026 Ansiya nehak • All rights reserved</p>
          
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-carbon-900/90 border border-emerald-500/20 text-slate-400 hover:text-emerald-300 hover:border-emerald-400/50 transition-all"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 text-emerald-400" />
          </button>
        </div>

      </div>
    </footer>
  );
}

