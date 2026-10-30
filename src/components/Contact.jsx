import React, { useState, useRef } from 'react';
import { 
  Send, 
  Mail, 
  Github, 
  Linkedin, 
  CheckCircle2, 
  Sparkles, 
  ArrowUpRight, 
  Copy, 
  Check 
} from 'lucide-react';

/**
 * MagneticLink Button Component
 * Calculates mouse offset to create a tactile magnetic pull on hover.
 */
function MagneticLink({ href, icon: Icon, label, detail }) {
  const btnRef = useRef(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (!btnRef.current) return;
    const rect = btnRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const deltaX = (e.clientX - centerX) * 0.22;
    const deltaY = (e.clientY - centerY) * 0.22;
    setOffset({ x: deltaX, y: deltaY });
  };

  const handleMouseLeave = () => {
    setOffset({ x: 0, y: 0 });
  };

  return (
    <a
      ref={btnRef}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `translate3d(${offset.x}px, ${offset.y}px, 0)`,
        transition: offset.x === 0 && offset.y === 0 ? 'transform 0.4s ease-out' : 'transform 0.1s ease-out',
      }}
      className="group relative flex items-center justify-between p-4 rounded-2xl bg-carbon-900/90 border border-emerald-500/20 hover:border-emerald-400 hover:shadow-[0_0_25px_rgba(16,185,129,0.35)] transition-colors duration-200"
    >
      <div className="flex items-center gap-3.5">
        <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-carbon-950 border border-emerald-500/25 group-hover:border-emerald-400 text-emerald-400 group-hover:text-lime-300 transition-colors">
          <Icon className="w-5 h-5" />
        </div>
        <div>
          <h4 className="text-sm font-bold text-slate-100 group-hover:text-emerald-300 transition-colors">
            {label}
          </h4>
          <p className="text-xs font-mono text-slate-400 group-hover:text-slate-300 transition-colors">
            {detail}
          </p>
        </div>
      </div>
      <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-emerald-400 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
    </a>
  );
}

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState('idle'); // 'idle' | 'loading' | 'sent'
  const [copied, setCopied] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setStatus('loading');

    // Simulate reliable dispatch & feedback
    setTimeout(() => {
      setStatus('sent');
      setFormData({ name: '', email: '', message: '' });

      setTimeout(() => {
        setStatus('idle');
      }, 4500);
    }, 1200);
  };

  const copyEmail = () => {
    navigator.clipboard?.writeText('ansiyanehak@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10 border-t border-emerald-500/15">
      {/* Background radial atmosphere */}
      <div 
        className="absolute bottom-12 right-12 w-96 h-96 bg-emerald-500/10 blur-3xl pointer-events-none rounded-full -z-10"
        aria-hidden="true"
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
        
        {/* Left Column: Headline, Direct Magnetic Links & Email Info */}
        <div className="lg:col-span-5 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-400 font-mono text-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>GET IN TOUCH // 05</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-100 leading-tight">
            Let’s Collaborate &amp;{' '}
            <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-lime-300 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(16,185,129,0.35)]">
              Build
            </span>
          </h2>

          <p className="text-base text-slate-300/90 leading-relaxed">
            Open for summer internships, open-source projects, or tech chats. Drop me a message!
          </p>

          {/* Quick status pill */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-2 rounded-xl bg-carbon-900/90 border border-emerald-500/20 text-xs font-mono text-emerald-300">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>Response Time: Typically under 24 hours</span>
          </div>

          {/* Direct Magnetic Links */}
          <div className="space-y-3 pt-2">
            <MagneticLink
              href="https://github.com"
              icon={Github}
              label="GitHub"
              detail="Explore open-source repositories"
            />
            <MagneticLink
              href="https://linkedin.com"
              icon={Linkedin}
              label="LinkedIn"
              detail="Connect professionally & chat"
            />
            <div 
              onClick={copyEmail}
              className="cursor-pointer"
            >
              <div className="group relative flex items-center justify-between p-4 rounded-2xl bg-carbon-900/90 border border-emerald-500/20 hover:border-emerald-400 hover:shadow-[0_0_25px_rgba(16,185,129,0.35)] transition-colors duration-200">
                <div className="flex items-center gap-3.5">
                  <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-carbon-950 border border-emerald-500/25 group-hover:border-emerald-400 text-emerald-400 group-hover:text-lime-300 transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-100 group-hover:text-emerald-300 transition-colors">
                      Direct Email
                    </h4>
                    <p className="text-xs font-mono text-slate-400 group-hover:text-slate-300 transition-colors">
                      ansiyanehak@gmail.com
                    </p>
                  </div>
                </div>
                <button
                  type="button"
                  className="flex items-center gap-1 text-xs font-mono px-2.5 py-1 rounded-lg bg-carbon-800 text-emerald-400 border border-emerald-500/30 group-hover:bg-emerald-500 group-hover:text-carbon-950 transition-all"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5" />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Glass Contact Form */}
        <div className="lg:col-span-7">
          <div className="relative rounded-3xl p-7 sm:p-9 bg-[#131b24]/90 backdrop-blur-xl border border-emerald-500/25 shadow-[0_8px_32px_rgba(0,0,0,0.6)]">
            
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-emerald-500/15">
              <div>
                <h3 className="text-xl font-bold text-slate-100">Send a Direct Message</h3>
                <p className="text-xs font-mono text-slate-400 mt-0.5">Let's discuss opportunities &amp; tech projects</p>
              </div>
              <Sparkles className="w-5 h-5 text-emerald-400" />
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name Field */}
              <div>
                <label className="block text-xs font-mono font-medium text-slate-300 mb-2">
                  Your Name <span className="text-emerald-400">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Alex Morgan"
                  className="w-full px-4 py-3 rounded-xl bg-carbon-900/90 border border-emerald-500/20 text-slate-100 placeholder-slate-500 text-sm focus:outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400 transition-all"
                />
              </div>

              {/* Email Field */}
              <div>
                <label className="block text-xs font-mono font-medium text-slate-300 mb-2">
                  Your Email <span className="text-emerald-400">*</span>
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="e.g. alex@company.com"
                  className="w-full px-4 py-3 rounded-xl bg-carbon-900/90 border border-emerald-500/20 text-slate-100 placeholder-slate-500 text-sm focus:outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400 transition-all"
                />
              </div>

              {/* Message Field */}
              <div>
                <label className="block text-xs font-mono font-medium text-slate-300 mb-2">
                  Your Message <span className="text-emerald-400">*</span>
                </label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell me about your internship role, project idea, or just say hello..."
                  className="w-full px-4 py-3 rounded-xl bg-carbon-900/90 border border-emerald-500/20 text-slate-100 placeholder-slate-500 text-sm focus:outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400 transition-all resize-none"
                />
              </div>

              {/* Submit Button with Animated Spinner & 'Message Sent! 🚀' feedback */}
              <button
                type="submit"
                disabled={status !== 'idle'}
                className={`w-full py-4 px-6 rounded-xl font-bold text-sm flex items-center justify-center gap-2.5 transition-all duration-300 ${
                  status === 'sent'
                    ? 'bg-emerald-400 text-carbon-950 shadow-[0_0_25px_rgba(16,185,129,0.7)]'
                    : status === 'loading'
                    ? 'bg-carbon-800 text-emerald-300 border border-emerald-500/40 cursor-wait'
                    : 'bg-gradient-to-r from-emerald-400 to-emerald-500 text-carbon-950 shadow-[0_0_20px_rgba(16,185,129,0.35)] hover:shadow-[0_0_35px_rgba(16,185,129,0.65)] hover:-translate-y-0.5 active:translate-y-0'
                }`}
              >
                {status === 'loading' && (
                  <>
                    <svg className="animate-spin w-4 h-4 text-emerald-400" viewBox="0 0 24 24" fill="none">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    <span>Transmitting Transmission...</span>
                  </>
                )}

                {status === 'sent' && (
                  <>
                    <CheckCircle2 className="w-5 h-5 text-carbon-950" />
                    <span>Message Sent! 🚀</span>
                  </>
                )}

                {status === 'idle' && (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>

      </div>
    </section>
  );
}

