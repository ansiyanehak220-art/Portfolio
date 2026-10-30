import React, { useState } from 'react';
import { 
  ArrowRight, 
  Download, 
  Terminal, 
  Cpu, 
  Code2, 
  Sparkles, 
  CheckCircle2, 
  Copy, 
  Check, 
  ExternalLink 
} from 'lucide-react';

export default function Hero() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard?.writeText('ansiyanehak@example.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative min-h-screen pt-28 sm:pt-36 pb-16 flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Ambient background glow orbs (Cyber Emerald & Lime) */}
      <div 
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] md:w-[750px] md:h-[450px] bg-gradient-to-tr from-emerald-500/10 via-lime-400/5 to-transparent blur-3xl pointer-events-none rounded-full -z-10"
        aria-hidden="true"
      />

      <div className="max-w-6xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left Column: Headline, Bio, Radar Pill, Actions */}
        <div className="lg:col-span-7 flex flex-col items-start text-left z-10 space-y-6">
          
          {/* Animated Blinking Radar Pill */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-emerald-500/40 bg-emerald-950/40 backdrop-blur-md shadow-[0_0_15px_rgba(16,185,129,0.15)] group hover:border-emerald-400 transition-all">
            <span className="relative flex h-2.5 w-2.5">
              {/* Ping radar animation */}
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              {/* Solid radar core */}
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500 shadow-[0_0_8px_#10b981]"></span>
            </span>
            <span className="font-mono text-xs font-semibold text-emerald-300 tracking-wide flex items-center gap-1.5">
              Student Developer
              <span className="text-emerald-500/60">//</span>
              <span className="text-lime-300 font-medium">Open for Internships</span>
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-100 leading-[1.12]">
            Hey, I am{' '}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-lime-300 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(16,185,129,0.4)]">
                Ansiya Nehak
              </span>
            </span>{' '}
            <span className="block mt-2 text-slate-200">
              — Building the Future of Tech.
            </span>
          </h1>

          {/* Student Bio */}
          <p className="text-base sm:text-lg text-slate-300/90 leading-relaxed max-w-2xl font-normal">
            <span className="text-emerald-300 font-semibold bg-emerald-950/40 px-2 py-0.5 rounded border border-emerald-500/30 font-mono text-sm inline-block mr-1">
              BE in AIML • 2nd Year
            </span>{' '}
            <span className="text-slate-200 font-medium">KS Institute of Technology</span>{' '}
            passionate about <span className="text-emerald-300 font-medium">web development</span>,{' '}
            <span className="text-lime-300 font-medium">AI</span>, and building real-world projects that solve complex problems.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-2 w-full sm:w-auto">
            {/* Primary Glowing Emerald Button */}
            <a
              href="#projects"
              className="relative group inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-sm bg-gradient-to-r from-emerald-400 to-emerald-500 text-slate-950 transition-all duration-300 shadow-[0_0_20px_rgba(16,185,129,0.35)] hover:shadow-[0_0_35px_rgba(16,185,129,0.65)] hover:-translate-y-1 active:translate-y-0"
            >
              <span>View My Projects</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>

            {/* Secondary Outline Button */}
            <a
              href="#resume"
              className="group inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-sm text-emerald-300 bg-carbon-900/80 hover:bg-carbon-800 border border-emerald-500/30 hover:border-lime-400/80 hover:text-lime-300 transition-all duration-300 hover:-translate-y-1 active:translate-y-0 shadow-[0_4px_16px_rgba(0,0,0,0.3)] backdrop-blur-sm"
            >
              <Download className="w-4 h-4 text-emerald-400 group-hover:text-lime-300 transition-colors" />
              <span>Download Resume / CV</span>
            </a>
          </div>

          {/* Quick Credential Badges */}
          <div className="pt-4 flex flex-wrap items-center gap-3 text-xs font-mono text-slate-400">
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-carbon-800/60 border border-emerald-500/15 text-slate-300">
              <Cpu className="w-3.5 h-3.5 text-emerald-400" />
              <span>AIML Core</span>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-carbon-800/60 border border-emerald-500/15 text-slate-300">
              <Code2 className="w-3.5 h-3.5 text-lime-400" />
              <span>Modern Full-Stack</span>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-carbon-800/60 border border-emerald-500/15 text-slate-300">
              <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
              <span>KSIT Bangalore</span>
            </div>
          </div>
        </div>

        {/* Right Column: Cyber Terminal & Student Status Card */}
        <div className="lg:col-span-5 relative w-full">
          {/* Decorative neon backplate glow */}
          <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500/20 via-lime-400/15 to-emerald-600/20 rounded-2xl blur-xl opacity-70 group-hover:opacity-100 transition duration-1000"></div>

          {/* Terminal Window */}
          <div className="relative rounded-2xl bg-[#0d1117]/95 border border-emerald-500/30 shadow-[0_8px_32px_rgba(0,0,0,0.6)] backdrop-blur-xl overflow-hidden font-mono text-xs">
            {/* Terminal Header */}
            <div className="flex items-center justify-between px-4 py-3 bg-carbon-800/80 border-b border-emerald-500/20">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block border border-rose-600/50"></span>
                <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block border border-amber-600/50"></span>
                <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block border border-emerald-600/50"></span>
                <span className="ml-2 text-slate-400 text-[11px] font-mono flex items-center gap-1.5">
                  <Terminal className="w-3 h-3 text-emerald-400" />
                  ansiya@ksit:~
                </span>
              </div>
              <button
                onClick={copyEmail}
                title="Copy developer email"
                className="text-slate-400 hover:text-emerald-300 transition-colors p-1 rounded hover:bg-carbon-700/50"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              </button>
            </div>

            {/* Terminal Body */}
            <div className="p-5 space-y-4 text-slate-300">
              {/* Command 1 */}
              <div>
                <p className="text-emerald-400 flex items-center gap-2">
                  <span className="text-lime-400 font-bold">➜</span>
                  <span className="text-emerald-300">portfolio</span>
                  <span className="text-slate-500">git:(main)</span>
                  <span className="text-slate-100">cat student_profile.json</span>
                </p>
              </div>

              {/* JSON Output */}
              <div className="bg-carbon-950/70 p-3.5 rounded-xl border border-emerald-500/15 leading-relaxed space-y-1">
                <p className="text-slate-400">&#123;</p>
                <p className="pl-4">
                  <span className="text-emerald-400">"name"</span>: <span className="text-lime-300">"Ansiya Nehak"</span>,
                </p>
                <p className="pl-4">
                  <span className="text-emerald-400">"degree"</span>: <span className="text-slate-200">"BE in AIML (2nd Year)"</span>,
                </p>
                <p className="pl-4">
                  <span className="text-emerald-400">"college"</span>: <span className="text-slate-200">"KS Institute of Technology"</span>,
                </p>
                <p className="pl-4">
                  <span className="text-emerald-400">"passions"</span>: [
                  <span className="text-lime-300">"Web Dev"</span>,{' '}
                  <span className="text-lime-300">"AI Systems"</span>,{' '}
                  <span className="text-lime-300">"Real-world Apps"</span>
                  ],
                </p>
                <p className="pl-4">
                  <span className="text-emerald-400">"status"</span>: <span className="text-emerald-300 font-semibold">"Ready for Internships ⚡"</span>
                </p>
                <p className="text-slate-400">&#125;</p>
              </div>

              {/* Command 2 & Active Skills */}
              <div className="space-y-2">
                <p className="text-emerald-400 flex items-center gap-2">
                  <span className="text-lime-400 font-bold">➜</span>
                  <span className="text-emerald-300">tech-stack</span>
                  <span className="text-slate-100">ls -la</span>
                </p>
                <div className="grid grid-cols-2 gap-2 pt-1">
                  <div className="flex items-center gap-2 p-2 rounded-lg bg-carbon-900/60 border border-emerald-500/20 text-[11px]">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                    <span className="text-slate-200">React.js & Tailwind</span>
                  </div>
                  <div className="flex items-center gap-2 p-2 rounded-lg bg-carbon-900/60 border border-emerald-500/20 text-[11px]">
                    <span className="w-1.5 h-1.5 rounded-full bg-lime-400"></span>
                    <span className="text-slate-200">Python & PyTorch</span>
                  </div>
                  <div className="flex items-center gap-2 p-2 rounded-lg bg-carbon-900/60 border border-emerald-500/20 text-[11px]">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                    <span className="text-slate-200">Machine Learning</span>
                  </div>
                  <div className="flex items-center gap-2 p-2 rounded-lg bg-carbon-900/60 border border-emerald-500/20 text-[11px]">
                    <span className="w-1.5 h-1.5 rounded-full bg-lime-400"></span>
                    <span className="text-slate-200">JavaScript / TS</span>
                  </div>
                </div>
              </div>

              {/* Simulated active cursor line */}
              <div className="flex items-center gap-2 text-slate-500 pt-1">
                <span className="text-emerald-400 font-bold">➜</span>
                <span className="text-slate-400">next-target</span>
                <span className="w-2 h-4 bg-emerald-400 inline-block animate-pulse"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

